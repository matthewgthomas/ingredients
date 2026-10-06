/* Ingredient Atlas — interactive map logic */
(function () {
  "use strict";

  var DATA = window.INGREDIENTS || [];
  var SOURCES = window.SOURCES || { wiki: {}, aquatic: [], production: {}, references: [] };
  var AQUATIC = new Set(SOURCES.aquatic || []);

  // Flavour-family colours (categories from the "type" column).
  var CATEGORY_COLORS = {
    "Roasted":       "#6f4e37",
    "Meaty":         "#c0392b",
    "Cheesy":        "#e0a80d",
    "Earthy":        "#8d6748",
    "Mustardy":      "#a3a628",
    "Sulphurous":    "#7e57c2",
    "Marine":        "#0288d1",
    "Brine & Salt":  "#5b7683",
    "Green & Grassy":"#4a9c4a",
    "Spicy":         "#e2571e",
    "Woodland":      "#5d4037",
    "Fresh Fruity":  "#e5443b",
    "Creamy Fruity": "#f08a24",
    "Citrussy":      "#f4c20d",
    "Berry & Bush":  "#9b3b8f",
    "Floral Fruity": "#e0559b"
  };

  // Preserve the order categories first appear in the data.
  var CATEGORY_ORDER = [];
  DATA.forEach(function (d) {
    if (CATEGORY_ORDER.indexOf(d.type) === -1) CATEGORY_ORDER.push(d.type);
  });

  function catColor(type) { return CATEGORY_COLORS[type] || "#888"; }

  // ---------- State ----------
  var state = {
    selected: null,             // ingredient id or null
    mode: "both",               // both | origin | producers
    activeCats: new Set(CATEGORY_ORDER),
    search: ""
  };

  var mobileQuery = window.matchMedia("(max-width: 900px), (max-width: 1100px) and (max-height: 500px)");
  var landscapeQuery = window.matchMedia("(min-width: 480px) and (max-width: 1100px) and (max-height: 500px)");
  var appEl = document.getElementById("app");
  var sidebar = document.getElementById("sidebar");
  var toolbar = document.getElementById("mobile-toolbar");
  var exploreControls = document.getElementById("explore-controls");
  var browseToggle = document.getElementById("mobile-list-toggle");
  var browseBackdrop = document.getElementById("mobile-panel-backdrop");
  var detailEl = document.getElementById("detail");
  var detailExpand = document.getElementById("detail-expand");
  var aboutModal = document.getElementById("about-modal");
  var viewPoints = [];
  var viewMaxZoom = 4;
  var fitFrame = null;

  // ---------- Map ----------
  var map = L.map("map", {
    center: [25, 12],
    zoom: 2,
    minZoom: 0,
    maxZoom: 7,
    zoomSnap: 0.25,
    worldCopyJump: true,
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true
  });

  // Standard OpenStreetMap tiles do not require an API key.
  L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 8
    }
  ).addTo(map);

  // Layer that we clear and redraw for markers / arcs.
  var layer = L.layerGroup().addTo(map);

  // ---------- Icons ----------
  function starIcon(color, size) {
    var s = size || 30;
    var html =
      '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" ' +
      'style="filter:drop-shadow(0 1px 2px rgba(0,0,0,.45))">' +
      '<path d="M12 .8l3.4 6.9 7.6 1.1-5.5 5.4 1.3 7.6L12 25.7 5.2 21.8l1.3-7.6L1 8.8l7.6-1.1z" ' +
      'fill="' + color + '" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg>';
    return L.divIcon({
      className: "origin-star",
      html: html,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });
  }

  // ---------- Arc geometry (quadratic bezier) ----------
  // True longitudes are kept (no antimeridian wrapping) so the fitted world
  // view stays coherent for ingredients whose producers span the globe.
  function arcLatLngs(origin, dest, bend) {
    var x0 = origin.lng, y0 = origin.lat;
    var x2 = dest.lng, y2 = dest.lat;
    var mx = (x0 + x2) / 2, my = (y0 + y2) / 2;
    var vx = x2 - x0, vy = y2 - y0;
    var len = Math.sqrt(vx * vx + vy * vy) || 1;
    var px = -vy / len, py = vx / len;      // perpendicular unit vector
    var off = Math.min(bend * len, 22);      // cap bend so long arcs stay on-map
    var cx = mx + px * off, cy = my + py * off;
    cy = Math.max(-80, Math.min(80, cy));    // keep control point within map
    var pts = [];
    for (var t = 0; t <= 1.00001; t += 0.03) {
      var mt = 1 - t;
      var x = mt * mt * x0 + 2 * mt * t * cx + t * t * x2;
      var y = mt * mt * y0 + 2 * mt * t * cy + t * t * y2;
      pts.push([y, x]);
    }
    return { pts: pts, destLng: x2 };
  }

  // Measure overlays rather than assuming a fixed card height. The toolbar
  // occupies its own layout row, so these coordinates are local to the map.
  function fitPadding() {
    var mapRect = document.getElementById("map").getBoundingClientRect();
    var right = 24;
    var bottom = 24;
    if (!detailEl.classList.contains("hidden")) {
      var card = detailEl.getBoundingClientRect();
      if (mobileQuery.matches && !landscapeQuery.matches) {
        bottom = mapRect.bottom - card.top + 16;
      } else {
        right = mapRect.right - card.left + 16;
      }
    } else if (mobileQuery.matches) {
      bottom = mapRect.bottom - browseToggle.getBoundingClientRect().top + 12;
    }
    return {
      paddingTopLeft: [56, 24],
      paddingBottomRight: [Math.max(24, right), Math.max(24, bottom)]
    };
  }

  function fitMapView() {
    if (!viewPoints.length || (mobileQuery.matches && sidebar.classList.contains("open"))) return;
    var pad = fitPadding();
    map.stop();
    map.fitBounds(viewPoints, {
      paddingTopLeft: pad.paddingTopLeft,
      paddingBottomRight: pad.paddingBottomRight,
      maxZoom: viewMaxZoom,
      animate: false
    });
  }

  function scheduleMapFit() {
    if (fitFrame !== null) return;
    fitFrame = window.requestAnimationFrame(function () {
      fitFrame = null;
      map.invalidateSize({ pan: false });
      fitMapView();
    });
  }

  // Invisible 44px targets keep the dots legible while making touch reliable.
  // Overlapping origins open a chooser instead of selecting an arbitrary dot.
  function chooseOrigin(d, event) {
    var point = event.containerPoint || map.latLngToContainerPoint([d.origin.lat, d.origin.lng]);
    var nearby = visibleItems().filter(function (item) {
      var position = map.latLngToContainerPoint([item.origin.lat, item.origin.lng]);
      return position.distanceTo(point) <= 28;
    });
    if (nearby.length < 2) {
      selectIngredient(nearby.length ? nearby[0].id : d.id);
      return;
    }
    var choices = document.createElement("div");
    choices.className = "map-choices";
    var prompt = document.createElement("p");
    prompt.textContent = "Ingredients near this point";
    choices.appendChild(prompt);
    nearby.sort(function (a, b) { return a.id.localeCompare(b.id); }).forEach(function (item) {
      var button = document.createElement("button");
      button.className = "map-choice";
      button.textContent = item.id;
      button.addEventListener("click", function () { selectIngredient(item.id); });
      choices.appendChild(button);
    });
    var pad = fitPadding();
    L.popup({
      maxWidth: Math.min(280, window.innerWidth - 64),
      autoPanPaddingTopLeft: pad.paddingTopLeft,
      autoPanPaddingBottomRight: pad.paddingBottomRight
    }).setLatLng(event.latlng || [d.origin.lat, d.origin.lng]).setContent(choices).openOn(map);
  }

  function addTouchTarget(position, onClick) {
    return L.circleMarker(position, {
      radius: 22, weight: 0, opacity: 0, fillOpacity: 0,
      className: "marker-hit-area", bubblingMouseEvents: false
    }).on("click", onClick).addTo(layer);
  }

  // ---------- Rendering the map for a selection / overview ----------
  function clearLayer() { layer.clearLayers(); }

  function renderOverview() {
    clearLayer();
    var items = visibleItems();
    var bounds = [];
    items.forEach(function (d) {
      var c = catColor(d.type);
      var m = L.circleMarker([d.origin.lat, d.origin.lng], {
        radius: 5,
        fillColor: c,
        color: "#fff",
        weight: 1.4,
        fillOpacity: 0.9,
        className: "overview-marker",
        bubblingMouseEvents: false
      });
      m.bindTooltip(d.id, { direction: "top", offset: [0, -4] });
      var onClick = function (event) { chooseOrigin(d, event); };
      m.on("click", onClick);
      m.addTo(layer);
      addTouchTarget([d.origin.lat, d.origin.lng], onClick)
        .bindTooltip(d.id, { direction: "top", offset: [0, -8] });
      bounds.push([d.origin.lat, d.origin.lng]);
    });
    viewPoints = bounds;
    viewMaxZoom = 4;
    scheduleMapFit();
  }

  function renderSelection(d) {
    clearLayer();
    var c = catColor(d.type);
    var pts = state.mode === "producers" ? [] : [[d.origin.lat, d.origin.lng]];

    // Arcs + producers
    if (state.mode === "both" || state.mode === "producers") {
      d.producers.forEach(function (p, i) {
        var arc = arcLatLngs(d.origin, p, 0.18);
        if (state.mode === "both") {
          L.polyline(arc.pts, {
            color: c,
            weight: 2,
            opacity: 0.75,
            dashArray: "1 6",
            lineCap: "round"
          }).addTo(layer);
        }
        var pm = L.circleMarker([p.lat, arc.destLng], {
          radius: 6,
          fillColor: c,
          color: "#fff",
          weight: 2,
          fillOpacity: 0.92,
          className: "grower-marker"
        });
        pm.bindTooltip(
          '<strong>' + p.place + '</strong><br>grows / produces ' + d.id,
          { direction: "top", offset: [0, -5] }
        );
        pm.addTo(layer);
        addTouchTarget([p.lat, arc.destLng], function () { pm.openTooltip(); })
          .bindTooltip('<strong>' + p.place + '</strong><br>grows / produces ' + d.id,
            { direction: "top", offset: [0, -8] });
        pts.push([p.lat, arc.destLng]);
      });
    }

    // Origin (drawn last so it sits on top)
    if (state.mode === "both" || state.mode === "origin") {
      L.marker([d.origin.lat, d.origin.lng], {
        icon: starIcon(c, 32),
        zIndexOffset: 1000,
        title: "Origin of " + d.id,
        alt: "Origin: " + d.origin.place
      })
        .bindTooltip(
          '<strong>Origin</strong><br>' + d.origin.place,
          { direction: "top", offset: [0, -14] }
        )
        .addTo(layer);
    }

    viewPoints = pts;
    viewMaxZoom = state.mode === "origin" ? 4 : 5;
    scheduleMapFit();
  }

  // ---------- Selection ----------
  function selectIngredient(id) {
    var d = byId(id);
    if (!d) return;
    state.selected = id;
    map.closePopup();
    showDetail(d);
    highlightListItem(id);
    searchInput.blur();
    closeMobileSidebar(false);
    renderSelection(d);
    if (mobileQuery.matches) document.getElementById("detail-name").focus({ preventScroll: true });
  }

  function clearSelection() {
    state.selected = null;
    hideDetail();
    highlightListItem(null);
    renderOverview();
  }

  // ---------- Detail card ----------
  function showDetail(d) {
    var c = catColor(d.type);
    document.getElementById("detail-name").textContent = d.id;
    var catEl = document.getElementById("detail-cat");
    catEl.textContent = d.type;
    catEl.style.background = c;
    document.getElementById("detail-origin-place").textContent = d.origin.place;
    document.getElementById("detail-origin-era").textContent = d.origin.era || "";
    document.getElementById("detail-origin-note").textContent = d.origin.note || "";
    var ul = document.getElementById("detail-producers");
    ul.innerHTML = "";
    d.producers.forEach(function (p, i) {
      var li = document.createElement("li");
      li.innerHTML =
        '<span class="rank">' + (i + 1) + "</span>" +
        '<span>' + p.place + "</span>";
      ul.appendChild(li);
    });

    renderSources(d);
    setDetailExpanded(false);
    document.getElementById("detail-body").scrollTop = 0;
    detailEl.classList.remove("hidden");
  }

  // Build the per-ingredient Sources list: origin/history + production data.
  function renderSources(d) {
    var ul = document.getElementById("detail-sources");
    ul.innerHTML = "";
    var links = [];

    var wiki = SOURCES.wiki && SOURCES.wiki[d.id];
    if (wiki) {
      links.push({ tag: "Origin & history", label: "Wikipedia", url: wiki });
    }
    var prod = AQUATIC.has(d.id) ? SOURCES.production.sea : SOURCES.production.land;
    if (prod) {
      links.push({ tag: "Production", label: prod.label, url: prod.url });
    }

    links.forEach(function (s) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.label;
      li.innerHTML = '<span class="src-tag">' + s.tag + "</span> ";
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
  function hideDetail() { detailEl.classList.add("hidden"); }
  function setDetailExpanded(expanded) {
    detailEl.classList.toggle("expanded", expanded);
    detailExpand.setAttribute("aria-expanded", String(expanded));
    detailExpand.innerHTML = expanded ? 'Show less <span aria-hidden="true">↓</span>' : 'Story, growers &amp; sources <span aria-hidden="true">↑</span>';
    scheduleMapFit();
  }
  detailExpand.addEventListener("click", function () {
    setDetailExpanded(!detailEl.classList.contains("expanded"));
  });
  document.getElementById("detail-close").addEventListener("click", function () {
    clearSelection();
    if (mobileQuery.matches) browseToggle.focus({ preventScroll: true });
  });

  // ---------- Helpers ----------
  function byId(id) {
    for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i];
    return null;
  }
  function visibleItems() {
    var q = state.search.trim().toLowerCase();
    return DATA.filter(function (d) {
      if (!state.activeCats.has(d.type)) return false;
      if (q && d.id.toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
  }

  // ---------- Sidebar: category chips ----------
  var chipEl = document.getElementById("category-filter");
  function renderChips() {
    var focusedCategory = document.activeElement && document.activeElement.getAttribute("data-category");
    chipEl.innerHTML = "";
    CATEGORY_ORDER.forEach(function (cat) {
      var chip = document.createElement("button");
      chip.className = "cat-chip" + (state.activeCats.has(cat) ? " active" : " dimmed");
      chip.setAttribute("aria-pressed", String(state.activeCats.has(cat)));
      chip.setAttribute("data-category", cat);
      chip.style.color = state.activeCats.has(cat) ? catColor(cat) : "";
      chip.innerHTML =
        '<span class="swatch" style="background:' + catColor(cat) + '"></span>' + cat;
      chip.addEventListener("click", function () {
        if (state.activeCats.has(cat)) {
          // if it's the only active one, clicking re-enables all (toggle-all UX)
          if (state.activeCats.size === 1) {
            state.activeCats = new Set(CATEGORY_ORDER);
          } else if (state.activeCats.size === CATEGORY_ORDER.length) {
            // all active -> isolate this one
            state.activeCats = new Set([cat]);
          } else {
            state.activeCats.delete(cat);
          }
        } else {
          state.activeCats.add(cat);
        }
        renderChips();
        renderList();
        if (!state.selected) renderOverview();
      });
      chipEl.appendChild(chip);
      if (cat === focusedCategory) chip.focus({ preventScroll: true });
    });
    updateFilterLabel();
  }

  // ---------- Sidebar: ingredient list ----------
  var listEl = document.getElementById("list");
  function renderList() {
    listEl.innerHTML = "";
    var q = state.search.trim().toLowerCase();
    CATEGORY_ORDER.forEach(function (cat) {
      if (!state.activeCats.has(cat)) return;
      var items = DATA.filter(function (d) {
        return d.type === cat && (!q || d.id.toLowerCase().indexOf(q) !== -1);
      });
      if (!items.length) return;

      var group = document.createElement("section");
      group.className = "cat-group";

      var h = document.createElement("h3");
      h.className = "cat-group-header";
      h.innerHTML =
        '<span class="swatch" style="background:' + catColor(cat) + '"></span>' + cat;
      group.appendChild(h);

      items.forEach(function (d) {
        var row = document.createElement("button");
        row.type = "button";
        row.className = "ing-item" + (state.selected === d.id ? " selected" : "");
        row.setAttribute("aria-pressed", String(state.selected === d.id));
        row.innerHTML =
          '<span class="bullet" style="background:' + catColor(d.type) + '"></span>' + d.id;
        row.addEventListener("click", function () { selectIngredient(d.id); });
        group.appendChild(row);
      });
      listEl.appendChild(group);
    });

    if (!listEl.children.length) {
      var empty = document.createElement("p");
      empty.style.cssText = "color:var(--ink-soft);font-size:.85rem;padding:16px;";
      empty.textContent = "No ingredients match.";
      listEl.appendChild(empty);
    }
    var count = visibleItems().length;
    document.getElementById("list-status").textContent = count + (count === 1 ? " ingredient" : " ingredients");
  }

  function highlightListItem(id) {
    var rows = listEl.querySelectorAll(".ing-item");
    rows.forEach(function (r) {
      var selected = r.textContent.trim() === id;
      r.classList.toggle("selected", selected);
      r.setAttribute("aria-pressed", String(selected));
    });
  }

  // ---------- Search ----------
  var searchInput = document.getElementById("search");
  var searchWrap = searchInput.parentElement;
  searchInput.addEventListener("focus", function () {
    if (mobileQuery.matches) {
      setFiltersOpen(false);
      openMobileSidebar(false);
    }
  });
  searchInput.addEventListener("input", function () {
    state.search = searchInput.value;
    searchWrap.classList.toggle("has-value", !!searchInput.value);
    if (mobileQuery.matches) {
      setFiltersOpen(false);
      openMobileSidebar(false);
    }
    renderList();
    if (!state.selected) renderOverview();
  });
  document.getElementById("clear-search").addEventListener("click", function () {
    searchInput.value = "";
    state.search = "";
    searchWrap.classList.remove("has-value");
    searchInput.focus();
    renderList();
    if (!state.selected) renderOverview();
  });

  // ---------- Mode toggle ----------
  var modeButtons = document.querySelectorAll(".mode-toggle button");
  modeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modeButtons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      state.mode = btn.getAttribute("data-mode");
      if (state.selected) renderSelection(byId(state.selected));
    });
  });

  // ---------- Reset ----------
  document.getElementById("reset-view").addEventListener("click", function () {
    clearSelection();
    closeMobileSidebar();
  });

  // ---------- About / sources modal ----------
  var aboutReturnFocus = null;
  function renderRefs() {
    var ul = document.getElementById("about-refs");
    ul.innerHTML = "";
    (SOURCES.references || []).forEach(function (r) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = r.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
  function openAbout() {
    aboutReturnFocus = document.activeElement;
    aboutModal.classList.remove("hidden");
    sidebar.inert = true;
    toolbar.inert = true;
    document.getElementById("map-area").inert = true;
    document.getElementById("about-close").focus();
  }
  function closeAbout() {
    if (aboutModal.classList.contains("hidden")) return;
    aboutModal.classList.add("hidden");
    syncPanelAccessibility();
    if (aboutReturnFocus && !aboutReturnFocus.closest("[inert]")) aboutReturnFocus.focus({ preventScroll: true });
  }
  document.getElementById("about-open").addEventListener("click", openAbout);
  document.getElementById("about-close").addEventListener("click", closeAbout);
  aboutModal.querySelector(".modal-backdrop").addEventListener("click", closeAbout);
  document.addEventListener("keydown", function (e) {
    if (!aboutModal.classList.contains("hidden")) {
      if (e.key === "Escape") closeAbout();
      if (e.key === "Tab") {
        var focusable = aboutModal.querySelectorAll("button, a[href]");
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      return;
    }
    if (e.key !== "Escape") return;
    if (mobileQuery.matches && sidebar.classList.contains("filters-open")) {
      setFiltersOpen(false);
      document.getElementById("filter-toggle").focus();
    } else if (mobileQuery.matches && sidebar.classList.contains("open")) {
      closeMobileSidebar();
    } else if (mobileQuery.matches && detailEl.classList.contains("expanded")) {
      setDetailExpanded(false);
      detailExpand.focus();
    } else if (state.selected) {
      clearSelection();
      if (mobileQuery.matches) browseToggle.focus();
    }
  });

  // ---------- Mobile panels and viewport ----------
  function updateFilterLabel() {
    var expanded = sidebar.classList.contains("filters-open");
    var label = expanded ? "Done" : "Filters";
    if (!expanded && state.activeCats.size < CATEGORY_ORDER.length) label += " (" + state.activeCats.size + ")";
    document.getElementById("filter-toggle").textContent = label;
    document.getElementById("filter-toggle").setAttribute("aria-expanded", String(expanded));
  }
  function setFiltersOpen(open) {
    sidebar.classList.toggle("filters-open", open);
    updateFilterLabel();
  }
  document.getElementById("filter-toggle").addEventListener("click", function () {
    setFiltersOpen(!sidebar.classList.contains("filters-open"));
  });
  document.getElementById("clear-filters").addEventListener("click", function () {
    state.activeCats = new Set(CATEGORY_ORDER);
    renderChips();
    renderList();
    if (!state.selected) renderOverview();
  });
  function syncPanelAccessibility() {
    var aboutOpen = !aboutModal.classList.contains("hidden");
    var browseOpen = mobileQuery.matches && sidebar.classList.contains("open");
    sidebar.inert = aboutOpen || (mobileQuery.matches && !browseOpen);
    toolbar.inert = aboutOpen;
    document.getElementById("map-area").inert = aboutOpen;
    browseToggle.setAttribute("aria-expanded", String(browseOpen));
    browseBackdrop.hidden = !browseOpen;
    appEl.classList.toggle("browsing", browseOpen);
  }
  function openMobileSidebar(focusClose) {
    if (!mobileQuery.matches) return;
    map.closePopup();
    sidebar.classList.add("open");
    syncPanelAccessibility();
    if (focusClose !== false) document.getElementById("sidebar-close").focus({ preventScroll: true });
  }
  function closeMobileSidebar(restoreFocus) {
    var wasOpen = sidebar.classList.contains("open");
    sidebar.classList.remove("open");
    setFiltersOpen(false);
    syncPanelAccessibility();
    if (mobileQuery.matches && wasOpen && restoreFocus !== false) {
      searchInput.blur();
      browseToggle.focus({ preventScroll: true });
    }
    scheduleMapFit();
  }
  browseToggle.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) closeMobileSidebar();
    else openMobileSidebar();
  });
  document.getElementById("sidebar-close").addEventListener("click", closeMobileSidebar);
  browseBackdrop.addEventListener("click", closeMobileSidebar);

  function updateViewport() {
    var viewport = window.visualViewport;
    // Browser zoom should magnify the page, not resize it into the zoomed area.
    if (!viewport || viewport.scale === 1) {
      var height = viewport ? viewport.height : window.innerHeight;
      appEl.style.setProperty("--viewport-height", height + "px");
      appEl.style.setProperty("--viewport-top", (viewport ? viewport.offsetTop : 0) + "px");
      appEl.classList.toggle("compact-height", mobileQuery.matches && window.innerWidth < 480 && height <= 440);
    }
    appEl.style.setProperty("--toolbar-height", toolbar.getBoundingClientRect().height + "px");
    scheduleMapFit();
  }
  function syncResponsiveLayout() {
    if (mobileQuery.matches) {
      toolbar.appendChild(exploreControls);
    } else {
      sidebar.insertBefore(exploreControls, document.getElementById("browse-heading"));
      sidebar.classList.remove("open");
      setFiltersOpen(false);
    }
    syncPanelAccessibility();
    updateViewport();
  }
  mobileQuery.addEventListener("change", syncResponsiveLayout);
  landscapeQuery.addEventListener("change", updateViewport);
  window.addEventListener("resize", updateViewport);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateViewport);
    window.visualViewport.addEventListener("scroll", updateViewport);
  }
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      appEl.style.setProperty("--toolbar-height", toolbar.getBoundingClientRect().height + "px");
      scheduleMapFit();
    }).observe(toolbar);
    new ResizeObserver(scheduleMapFit).observe(detailEl);
    new ResizeObserver(scheduleMapFit).observe(document.getElementById("map-area"));
  }

  // ---------- Init ----------
  renderChips();
  renderList();
  renderRefs();
  syncResponsiveLayout();
  renderOverview();
})();
