# Ingredient Atlas

An interactive, explorable world map of where common food ingredients **came from** (their
evolutionary / culinary origin) and where they are **grown and produced today**.

Pick an ingredient and the map draws a star at its origin and arcs out to today's main
producing regions, with a short note on when and where it was domesticated or first made.
Ingredients are grouped by flavour family (the 16 categories in `data/ingredients.csv`),
and you can filter by family, search by name, and switch between showing origins, growers,
or both.

![Ingredient Atlas](https://img.shields.io/badge/map-Leaflet-brightgreen)

## Use it

Open `index.html` in a browser. Everything is static — no build step and no server-side
code — so it runs directly from a file or any static host.

* **Browse** the list on the left, grouped by flavour family.
* **Click** an ingredient (in the list or on the map) to see its origin and main growers.
* **Filter** by flavour family with the coloured chips (click one to isolate it; click it
  again to show all).
* **Search** by name.
* **Toggle** between *Origin & growers*, *Origins*, and *Growers*.
* **Show all origins** resets to the overview.

## Project structure

```
index.html            # page shell + Leaflet includes (from CDN)
css/style.css         # styling
js/app.js             # map, list, filtering, arcs — all the interactivity
data/ingredients.js   # the enriched dataset (origins + producers, with coordinates)
data/sources.js       # citations: per-ingredient links + backbone references
data/ingredients.csv  # the original source list (id, flavour type)
.nojekyll             # tells GitHub Pages to serve files as-is
```

## Hosting on GitHub Pages

This repo is ready to publish. From the project root:

```bash
git add .
git commit -m "Add interactive ingredient origins map"
git push
```

Then, on GitHub: **Settings → Pages → Build and deployment**, set **Source** to
*Deploy from a branch*, choose the **`main`** branch and the **`/ (root)`** folder, and
save. Your map will appear at:

```
https://<your-username>.github.io/ingredients/
```

(If you already have a custom domain or a `docs/` layout, move the files accordingly —
`index.html` just needs to sit at the site root.)

## Editing the data

Each ingredient lives in `data/ingredients.js`:

```js
{
  id: "Coffee", type: "Roasted",
  origin: {
    place: "Ethiopian Highlands (Kaffa)", lat: 7.7, lng: 36.5,
    era: "wild in Ethiopia; cultivated by the 15th c. in Yemen",
    note: "Coffea arabica grew wild in the Ethiopian highlands …"
  },
  producers: [
    { place: "Brazil", lat: -14.0, lng: -51.0 },
    { place: "Vietnam", lat: 16.0, lng: 106.0 },
    { place: "Colombia", lat: 4.0, lng: -73.0 }
  ]
}
```

Add or edit entries and reload — no build required. Flavour-family colours are defined at
the top of `js/app.js` (`CATEGORY_COLORS`).

## Sources & citations

Every ingredient's detail card has a **Sources** section, and the sidebar footer opens an
**About the data & sources** panel. Citations live in `data/sources.js`:

* **Origin & history** → each ingredient links to its **Wikipedia** article (all 100 links
  were verified against the MediaWiki API, with redirects resolved, so none are dead). Those
  articles in turn cite the primary literature.
* **Production** → **FAOSTAT** (crops & livestock) for land ingredients, and **FAO Fisheries
  & Aquaculture** statistics for the aquatic ones (shellfish, oyster, white/oily fish,
  caviar, anchovy, smoked fish).
* **Backbone references** (in the About panel) cover the methodology: FAOSTAT, FAO Fisheries,
  the Vavilov *centres of origin* framework, two domestication review papers
  ([Larson et al. 2014, PNAS](https://pmc.ncbi.nlm.nih.gov/articles/PMC3948225/);
  [Meyer & Purugganan 2013, Nature Reviews Genetics](https://doi.org/10.1038/nrg3605)),
  and Encyclopædia Britannica.

To adjust a citation, edit the `wiki` map (per-ingredient links), `aquatic` list (which items
use fisheries data), or `references` array in `data/sources.js`.

## A note on accuracy

Origins are approximate and some are actively debated (crops were often domesticated
gradually, in more than one place). Prepared foods — chocolate, the cheeses, cured meats —
use the place the food was first *made* rather than a biological origin. Production figures
are indicative of the main present-day growers, not exact rankings. Coordinates are chosen to
convey a region, not a precise point. This is built for curiosity and exploration; the linked
sources are the place to verify and dig deeper.

## Credits

Map tiles © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors and
© [CARTO](https://carto.com/attributions). Built with [Leaflet](https://leafletjs.com/).
