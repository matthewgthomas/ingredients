/* Ingredient Atlas — interactive map logic */
(function () {
  "use strict";

  var DATA = window.INGREDIENTS || [];

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

  // ---------- Map ----------
  var map = L.map("map", {
    center: [25, 12],
    zoom: 2,
    minZoom: 2,
    maxZoom: 7,
    worldCopyJump: true,
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true
  });

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
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
      iconSize: [s, s],
      iconAnchor: [s / 2, s / 2]
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

  // Padding for fitBounds that keeps markers clear of the detail card
  // (right side on desktop, bottom on mobile).
  function fitPadding() {
    if (window.innerWidth <= 780) {
      return { paddingTopLeft: [40, 60], paddingBottomRight: [40, 320] };
    }
    return { paddingTopLeft: [60, 60], paddingBottomRight: [360, 60] };
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
        fillOpacity: 0.9
      });
      m.bindTooltip(d.id, { direction: "top", offset: [0, -4] });
      m.on("click", function () { selectIngredient(d.id); });
      m.addTo(layer);
      bounds.push([d.origin.lat, d.origin.lng]);
    });
    if (bounds.length) {
      var pad = fitPadding();
      map.fitBounds(bounds, {
        paddingTopLeft: pad.paddingTopLeft,
        paddingBottomRight: pad.paddingBottomRight,
        maxZoom: 4,
        animate: true
      });
    }
  }

  function renderSelection(d) {
    clearLayer();
    var c = catColor(d.type);
    var pts = [[d.origin.lat, d.origin.lng]];

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
          fillOpacity: 0.92
        });
        pm.bindTooltip(
          '<strong>' + p.place + '</strong><br>grows / produces ' + d.id,
          { direction: "top", offset: [0, -5] }
        );
        pm.addTo(layer);
        pts.push([p.lat, arc.destLng]);
      });
    }

    // Origin (drawn last so it sits on top)
    if (state.mode === "both" || state.mode === "origin") {
      L.marker([d.origin.lat, d.origin.lng], {
        icon: starIcon(c, 32),
        zIndexOffset: 1000
      })
        .bindTooltip(
          '<strong>Origin</strong><br>' + d.origin.place,
          { direction: "top", offset: [0, -14] }
        )
        .addTo(layer);
    }

    if (state.mode === "origin") {
      map.setView([d.origin.lat, d.origin.lng], 4, { animate: true });
    } else if (pts.length) {
      var pad = fitPadding();
      map.fitBounds(pts, {
        paddingTopLeft: pad.paddingTopLeft,
        paddingBottomRight: pad.paddingBottomRight,
        maxZoom: 5,
        animate: true
      });
    }
  }

  // ---------- Selection ----------
  function selectIngredient(id) {
    state.selected = id;
    var d = byId(id);
    if (!d) return;
    renderSelection(d);
    showDetail(d);
    highlightListItem(id);
    closeMobileSidebar();
  }

  function clearSelection() {
    state.selected = null;
    hideDetail();
    highlightListItem(null);
    renderOverview();
  }

  // ---------- Detail card ----------
  var detailEl = document.getElementById("detail");
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
    detailEl.classList.remove("hidden");
  }
  function hideDetail() { detailEl.classList.add("hidden"); }
  document.getElementById("detail-close").addEventListener("click", function () {
    clearSelection();
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
    chipEl.innerHTML = "";
    CATEGORY_ORDER.forEach(function (cat) {
      var chip = document.createElement("button");
      chip.className = "cat-chip" + (state.activeCats.has(cat) ? " active" : " dimmed");
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
    });
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

      var group = document.createElement("div");
      group.className = "cat-group";

      var h = document.createElement("div");
      h.className = "cat-group-header";
      h.innerHTML =
        '<span class="swatch" style="background:' + catColor(cat) + '"></span>' + cat;
      group.appendChild(h);

      items.forEach(function (d) {
        var row = document.createElement("div");
        row.className = "ing-item" + (state.selected === d.id ? " selected" : "");
        row.setAttribute("role", "option");
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
  }

  function highlightListItem(id) {
    var rows = listEl.querySelectorAll(".ing-item");
    rows.forEach(function (r) {
      r.classList.toggle("selected", r.textContent.trim() === id);
    });
  }

  // ---------- Search ----------
  var searchInput = document.getElementById("search");
  var searchWrap = searchInput.parentElement;
  searchInput.addEventListener("input", function () {
    state.search = searchInput.value;
    searchWrap.classList.toggle("has-value", !!searchInput.value);
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
      modeButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      state.mode = btn.getAttribute("data-mode");
      if (state.selected) renderSelection(byId(state.selected));
    });
  });

  // ---------- Reset ----------
  document.getElementById("reset-view").addEventListener("click", clearSelection);

  // ---------- Mobile sidebar ----------
  var sidebar = document.getElementById("sidebar");
  document.getElementById("mobile-list-toggle").addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });
  function closeMobileSidebar() { sidebar.classList.remove("open"); }

  // ---------- Init ----------
  renderChips();
  renderList();
  renderOverview();
})();
