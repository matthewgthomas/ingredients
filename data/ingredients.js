/*
 * Ingredient origins & production data.
 *
 * Each entry describes:
 *   - origin: where the ingredient (or its source organism / the food itself)
 *     comes from. For whole foods this is the centre of domestication; for
 *     prepared foods (cheeses, cured meats, chocolate) it is where the food
 *     was first made. Coordinates are approximate and some origins are debated.
 *   - producers: the main present-day producing regions/countries.
 *
 * Sources synthesised from crop-origin research (Vavilov centres), the FAO,
 * and food history. Figures are indicative, not exact.
 */
window.INGREDIENTS = [
  // ---------------- Roasted ----------------
  {
    id: "Chocolate", type: "Roasted",
    origin: { place: "Upper Amazon Basin & Mesoamerica", lat: -3.5, lng: -73.0,
      era: "domesticated ~5,300 years ago",
      note: "Theobroma cacao was first used in the Amazon (Ecuador); its culinary culture flowered with the Olmec and Maya of Mesoamerica." },
    producers: [
      { place: "Côte d'Ivoire", lat: 7.5, lng: -5.5 },
      { place: "Ghana", lat: 7.9, lng: -1.0 },
      { place: "Indonesia", lat: -2.5, lng: 118.0 },
      { place: "Ecuador", lat: -1.5, lng: -78.5 }
    ]
  },
  {
    id: "Coffee", type: "Roasted",
    origin: { place: "Ethiopian Highlands (Kaffa)", lat: 7.7, lng: 36.5,
      era: "wild in Ethiopia; cultivated by the 15th c. in Yemen",
      note: "Coffea arabica grew wild in the Ethiopian highlands and was first cultivated across the Red Sea in Yemen." },
    producers: [
      { place: "Brazil", lat: -14.0, lng: -51.0 },
      { place: "Vietnam", lat: 16.0, lng: 106.0 },
      { place: "Colombia", lat: 4.0, lng: -73.0 }
    ]
  },
  {
    id: "Peanut", type: "Roasted",
    origin: { place: "South America (southern Bolivia / NW Argentina)", lat: -19.0, lng: -63.0,
      era: "domesticated ~7,600 years ago",
      note: "The groundnut was domesticated at the foot of the Andes from wild ancestors in the Gran Chaco." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Nigeria", lat: 9.5, lng: 8.0 },
      { place: "USA", lat: 33.0, lng: -83.0 }
    ]
  },

  // ---------------- Meaty ----------------
  {
    id: "Chicken", type: "Meaty",
    origin: { place: "Southeast Asia (red junglefowl)", lat: 18.0, lng: 101.0,
      era: "domesticated ~3,500 years ago",
      note: "The domestic chicken descends from the red junglefowl of the forests of Thailand and southern China." },
    producers: [
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Brazil", lat: -10.0, lng: -52.0 }
    ]
  },
  {
    id: "Pork", type: "Meaty",
    origin: { place: "Near East (Anatolia) & China", lat: 38.0, lng: 35.0,
      era: "domesticated ~9,000 years ago",
      note: "Pigs were domesticated independently from wild boar in Anatolia and in China." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Germany", lat: 51.0, lng: 10.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 }
    ]
  },
  {
    id: "Black Pudding", type: "Meaty",
    origin: { place: "Ancient Mediterranean / Europe", lat: 39.0, lng: 22.0,
      era: "ancient (mentioned in Homer's Odyssey)",
      note: "Blood sausage is one of the oldest prepared foods; versions appear across ancient Greece and Rome and later throughout Europe." },
    producers: [
      { place: "United Kingdom", lat: 54.0, lng: -2.0 },
      { place: "Spain (morcilla)", lat: 40.0, lng: -3.5 },
      { place: "France (boudin noir)", lat: 47.0, lng: 2.0 }
    ]
  },
  {
    id: "Liver", type: "Meaty",
    origin: { place: "Ancient Egypt (fattened goose liver)", lat: 26.5, lng: 30.0,
      era: "foie gras tradition ~2500 BCE",
      note: "Liver is eaten worldwide; the delicacy of fattened liver (foie gras) dates to ancient Egypt and was refined in France." },
    producers: [
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Hungary", lat: 47.0, lng: 19.5 },
      { place: "China", lat: 35.0, lng: 103.0 }
    ]
  },
  {
    id: "Beef", type: "Meaty",
    origin: { place: "Fertile Crescent (aurochs)", lat: 37.0, lng: 42.0,
      era: "domesticated ~10,500 years ago",
      note: "Cattle were domesticated from the wild aurochs in the upper Fertile Crescent, with a second centre in the Indus valley." },
    producers: [
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Brazil", lat: -10.0, lng: -52.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Argentina", lat: -35.0, lng: -65.0 }
    ]
  },
  {
    id: "Lamb", type: "Meaty",
    origin: { place: "Fertile Crescent (Anatolia / Zagros)", lat: 37.0, lng: 44.0,
      era: "domesticated ~11,000 years ago",
      note: "Sheep were among the first livestock, domesticated in the mountains of the Near East." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Australia", lat: -25.0, lng: 134.0 },
      { place: "New Zealand", lat: -42.0, lng: 173.0 }
    ]
  },

  // ---------------- Cheesy ----------------
  {
    id: "Goat Cheese", type: "Cheesy",
    origin: { place: "Zagros Mountains (goat domestication)", lat: 34.0, lng: 47.0,
      era: "goats domesticated ~10,000 years ago",
      note: "Goats were domesticated in the Zagros of Iran; goat's-milk cheese is among the oldest dairy foods." },
    producers: [
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Greece", lat: 39.0, lng: 22.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 }
    ]
  },
  {
    id: "Washed-rind Cheese", type: "Cheesy",
    origin: { place: "European monasteries (Alsace / Low Countries)", lat: 48.2, lng: 7.4,
      era: "medieval",
      note: "Washed-rind cheeses such as Munster and Trappist styles were developed by monks in eastern France and the Low Countries." },
    producers: [
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Germany", lat: 51.0, lng: 10.0 },
      { place: "Belgium", lat: 50.6, lng: 4.6 }
    ]
  },
  {
    id: "Blue Cheese", type: "Cheesy",
    origin: { place: "Roquefort, France", lat: 43.95, lng: 2.98,
      era: "documented since ~1000 CE",
      note: "Cave-ripened blue cheese is epitomised by Roquefort in France and Gorgonzola in Italy." },
    producers: [
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Italy", lat: 45.0, lng: 9.5 },
      { place: "United Kingdom (Stilton)", lat: 52.8, lng: -0.7 }
    ]
  },
  {
    id: "Hard Cheese", type: "Cheesy",
    origin: { place: "Alpine & Po Valley Europe", lat: 45.0, lng: 10.0,
      era: "Roman era onward",
      note: "Aged hard cheeses such as Parmigiano and Gruyère come from the Po Valley and the Alps." },
    producers: [
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Switzerland", lat: 46.8, lng: 8.2 },
      { place: "Netherlands", lat: 52.2, lng: 5.3 }
    ]
  },
  {
    id: "Soft Cheese", type: "Cheesy",
    origin: { place: "Île-de-France / Normandy", lat: 48.6, lng: 3.0,
      era: "medieval (Brie, Camembert)",
      note: "Soft bloomy cheeses like Brie and Camembert originate in northern France." },
    producers: [
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Germany", lat: 51.0, lng: 10.0 }
    ]
  },

  // ---------------- Earthy ----------------
  {
    id: "Mushroom", type: "Earthy",
    origin: { place: "Paris, France (cultivated button mushroom)", lat: 48.85, lng: 2.35,
      era: "cultivation began ~1600s",
      note: "The common button mushroom was first cultivated in the quarries around Paris in the 17th century." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Netherlands", lat: 52.2, lng: 5.3 },
      { place: "Poland", lat: 52.0, lng: 19.5 }
    ]
  },
  {
    id: "Aubergine", type: "Earthy",
    origin: { place: "India & Southeast Asia", lat: 22.0, lng: 80.0,
      era: "domesticated >1,500 years ago",
      note: "The aubergine (eggplant) was domesticated in India and mainland Southeast Asia." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Egypt", lat: 26.5, lng: 30.0 }
    ]
  },
  {
    id: "Cumin", type: "Earthy",
    origin: { place: "Eastern Mediterranean / Levant", lat: 32.0, lng: 35.0,
      era: "used since ancient Egypt",
      note: "Cumin was cultivated across the eastern Mediterranean and used heavily in ancient Egypt." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Syria", lat: 35.0, lng: 38.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 }
    ]
  },
  {
    id: "Beetroot", type: "Earthy",
    origin: { place: "Mediterranean coast (sea beet)", lat: 41.0, lng: 15.0,
      era: "domesticated from wild sea beet",
      note: "Beetroot descends from the wild sea beet of Mediterranean and Atlantic coasts." },
    producers: [
      { place: "Russia", lat: 61.0, lng: 90.0 },
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Potato", type: "Earthy",
    origin: { place: "Andes (Lake Titicaca, Peru / Bolivia)", lat: -16.0, lng: -69.0,
      era: "domesticated ~8,000–10,000 years ago",
      note: "The potato was domesticated high in the Andes near Lake Titicaca." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 },
      { place: "Ukraine", lat: 49.0, lng: 32.0 }
    ]
  },
  {
    id: "Celery", type: "Earthy",
    origin: { place: "Mediterranean marshlands", lat: 40.0, lng: 15.0,
      era: "used in antiquity",
      note: "Celery derives from wild celery (smallage) of Mediterranean wetlands." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA (California)", lat: 37.0, lng: -120.0 },
      { place: "India", lat: 22.0, lng: 79.0 }
    ]
  },
  {
    id: "Sesame", type: "Earthy",
    origin: { place: "Indian subcontinent", lat: 20.0, lng: 78.0,
      era: "one of the oldest oil crops, ~5,500 years",
      note: "Sesame was domesticated in the Indian subcontinent, one of the earliest oilseed crops." },
    producers: [
      { place: "Sudan", lat: 15.5, lng: 30.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Myanmar", lat: 21.0, lng: 96.0 },
      { place: "Tanzania", lat: -6.3, lng: 34.9 }
    ]
  },

  // ---------------- Mustardy ----------------
  {
    id: "Watercress", type: "Mustardy",
    origin: { place: "Europe & Central Asia (spring streams)", lat: 48.0, lng: 10.0,
      era: "gathered since antiquity",
      note: "Watercress grows wild in the cool spring-fed streams of Europe and western Asia." },
    producers: [
      { place: "United Kingdom", lat: 51.0, lng: -1.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "France", lat: 47.0, lng: 2.0 }
    ]
  },
  {
    id: "Caper", type: "Mustardy",
    origin: { place: "Mediterranean basin", lat: 37.0, lng: 15.0,
      era: "used since antiquity",
      note: "The caper bush grows wild across the rocky Mediterranean; buds are salted or pickled." },
    producers: [
      { place: "Italy (Pantelleria)", lat: 36.8, lng: 12.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Morocco", lat: 32.0, lng: -6.0 }
    ]
  },
  {
    id: "Horseradish", type: "Mustardy",
    origin: { place: "Southeast Europe / Western Asia", lat: 47.0, lng: 25.0,
      era: "cultivated since antiquity",
      note: "Horseradish originates in southeastern Europe and western Asia." },
    producers: [
      { place: "USA (Illinois)", lat: 39.0, lng: -89.0 },
      { place: "Hungary", lat: 47.0, lng: 19.5 },
      { place: "Germany", lat: 51.0, lng: 10.0 }
    ]
  },

  // ---------------- Sulphurous ----------------
  {
    id: "Onion", type: "Sulphurous",
    origin: { place: "Central Asia", lat: 40.0, lng: 65.0,
      era: "cultivated >5,000 years",
      note: "The onion is thought to have been domesticated in Central Asia." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Egypt", lat: 26.5, lng: 30.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Garlic", type: "Sulphurous",
    origin: { place: "Central Asia (Tien Shan)", lat: 42.0, lng: 78.0,
      era: "cultivated >5,000 years",
      note: "Garlic descends from wild ancestors in the mountains of Central Asia." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Bangladesh", lat: 24.0, lng: 90.0 }
    ]
  },
  {
    id: "Truffle", type: "Sulphurous",
    origin: { place: "Mediterranean Europe (Périgord / Alba)", lat: 44.0, lng: 1.2,
      era: "prized since Roman times",
      note: "The great culinary truffles come from oak woodlands of France (Périgord) and Italy (Alba)." },
    producers: [
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Spain", lat: 41.0, lng: -1.0 },
      { place: "Australia", lat: -35.0, lng: 148.0 }
    ]
  },
  {
    id: "Cabbage", type: "Sulphurous",
    origin: { place: "Coastal Western Europe", lat: 50.0, lng: -1.5,
      era: "domesticated from wild Brassica oleracea",
      note: "Cabbage was bred from wild cabbage on the coasts of western Europe." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 }
    ]
  },
  {
    id: "Swede", type: "Sulphurous",
    origin: { place: "Northern / Central Europe", lat: 59.0, lng: 15.0,
      era: "hybrid arose ~1600s",
      note: "The swede (rutabaga) is a fairly recent hybrid of cabbage and turnip from northern Europe." },
    producers: [
      { place: "Sweden", lat: 62.0, lng: 15.0 },
      { place: "United Kingdom", lat: 54.0, lng: -2.0 },
      { place: "Canada", lat: 56.0, lng: -106.0 }
    ]
  },
  {
    id: "Cauliflower", type: "Sulphurous",
    origin: { place: "Cyprus / Eastern Mediterranean", lat: 35.0, lng: 33.0,
      era: "developed by ~1st millennium CE",
      note: "Cauliflower was developed from wild cabbage around Cyprus and the Levant." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Broccoli", type: "Sulphurous",
    origin: { place: "Southern Italy", lat: 41.0, lng: 15.5,
      era: "developed in Roman times",
      note: "Broccoli was cultivated from wild cabbage by the Romans in the Italian peninsula." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA (California)", lat: 37.0, lng: -120.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 }
    ]
  },
  {
    id: "Globe Artichoke", type: "Sulphurous",
    origin: { place: "Western Mediterranean (Sicily / North Africa)", lat: 37.5, lng: 14.0,
      era: "cultivated since antiquity",
      note: "The globe artichoke was cultivated from the wild cardoon of the western Mediterranean." },
    producers: [
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Egypt", lat: 26.5, lng: 30.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 }
    ]
  },
  {
    id: "Asparagus", type: "Sulphurous",
    origin: { place: "Eastern Mediterranean / Asia Minor", lat: 39.0, lng: 32.0,
      era: "cultivated by the Greeks & Romans",
      note: "Asparagus was gathered and cultivated around the eastern Mediterranean since antiquity." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Peru", lat: -10.0, lng: -76.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "Germany", lat: 51.0, lng: 10.0 }
    ]
  },
  {
    id: "Egg", type: "Sulphurous",
    origin: { place: "Southeast Asia (with the chicken)", lat: 18.0, lng: 101.0,
      era: "since chicken domestication ~3,500 years ago",
      note: "The hen's egg followed the domestication of the red junglefowl in Southeast Asia." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "India", lat: 22.0, lng: 79.0 }
    ]
  },

  // ---------------- Marine ----------------
  {
    id: "Shellfish", type: "Marine",
    origin: { place: "Coastal South Africa (earliest evidence)", lat: -34.2, lng: 22.1,
      era: "eaten ~164,000 years ago",
      note: "Some of the earliest evidence of humans eating shellfish comes from coastal caves in South Africa." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Vietnam", lat: 16.0, lng: 106.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "White Fish", type: "Marine",
    origin: { place: "North Atlantic", lat: 58.0, lng: -20.0,
      era: "fished for millennia",
      note: "Cod, haddock and other white fish come chiefly from the cold North Atlantic." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Norway", lat: 64.0, lng: 11.0 },
      { place: "Iceland", lat: 65.0, lng: -18.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 }
    ]
  },
  {
    id: "Oyster", type: "Marine",
    origin: { place: "Coastal waters (farmed since Rome & Han China)", lat: 41.0, lng: 13.0,
      era: "aquaculture since ~1st c. BCE",
      note: "Oysters have been gathered forever and were farmed by both the Romans and Han-dynasty Chinese." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "South Korea", lat: 36.5, lng: 127.8 },
      { place: "France", lat: 47.0, lng: 2.0 }
    ]
  },
  {
    id: "Caviar", type: "Marine",
    origin: { place: "Caspian & Black Seas (sturgeon)", lat: 42.0, lng: 50.0,
      era: "prized since antiquity",
      note: "Caviar is the roe of sturgeon from the Caspian and Black Seas." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Iran", lat: 32.0, lng: 53.0 }
    ]
  },
  {
    id: "Oily Fish", type: "Marine",
    origin: { place: "North Atlantic & Pacific", lat: 62.0, lng: 5.0,
      era: "fished for millennia",
      note: "Salmon, herring, mackerel and sardine are cold-water fish of the Atlantic and Pacific." },
    producers: [
      { place: "Norway", lat: 64.0, lng: 11.0 },
      { place: "Chile", lat: -35.0, lng: -71.0 },
      { place: "China", lat: 35.0, lng: 103.0 }
    ]
  },

  // ---------------- Brine & Salt ----------------
  {
    id: "Anchovy", type: "Brine & Salt",
    origin: { place: "Mediterranean & Atlantic coasts", lat: 40.0, lng: 4.0,
      era: "salted since antiquity (Roman garum)",
      note: "Anchovies have been salted around the Mediterranean since Roman times; the largest fishery is now off Peru." },
    producers: [
      { place: "Peru", lat: -12.0, lng: -77.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Morocco", lat: 32.0, lng: -6.0 }
    ]
  },
  {
    id: "Smoked Fish", type: "Brine & Salt",
    origin: { place: "Northern Europe (preservation by smoke)", lat: 60.0, lng: 10.0,
      era: "ancient preservation method",
      note: "Smoking fish to preserve it is an ancient practice, strongly associated with northern Europe." },
    producers: [
      { place: "Norway", lat: 64.0, lng: 11.0 },
      { place: "Scotland", lat: 57.0, lng: -4.0 },
      { place: "Poland", lat: 52.0, lng: 19.5 }
    ]
  },
  {
    id: "Bacon", type: "Brine & Salt",
    origin: { place: "Europe (cured pork belly)", lat: 55.0, lng: 10.0,
      era: "curing traditions since antiquity",
      note: "Salt-cured pork belly has European roots, with the modern trade centred on Denmark, Britain and beyond." },
    producers: [
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Denmark", lat: 56.0, lng: 10.0 },
      { place: "Germany", lat: 51.0, lng: 10.0 }
    ]
  },
  {
    id: "Prosciutto", type: "Brine & Salt",
    origin: { place: "Parma & Friuli, Italy", lat: 44.8, lng: 10.3,
      era: "cured hams since Roman times",
      note: "Dry-cured ham (prosciutto) is a signature of northern Italy, mirrored by jamón in Spain." },
    producers: [
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Spain", lat: 40.0, lng: -3.5 }
    ]
  },
  {
    id: "Olive", type: "Brine & Salt",
    origin: { place: "Eastern Mediterranean / Levant", lat: 33.0, lng: 35.0,
      era: "domesticated ~6,000 years ago",
      note: "The olive was domesticated in the Levant and spread throughout the Mediterranean." },
    producers: [
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Greece", lat: 39.0, lng: 22.0 },
      { place: "Tunisia", lat: 34.0, lng: 9.5 }
    ]
  },

  // ---------------- Green & Grassy ----------------
  {
    id: "Saffron", type: "Green & Grassy",
    origin: { place: "Greece / Crete (Bronze Age)", lat: 35.2, lng: 25.0,
      era: "cultivated ~3,500 years ago",
      note: "The saffron crocus was first cultivated around the Aegean in the Bronze Age; today Iran dominates." },
    producers: [
      { place: "Iran", lat: 32.0, lng: 53.0 },
      { place: "India (Kashmir)", lat: 34.0, lng: 75.0 },
      { place: "Spain", lat: 39.0, lng: -3.0 },
      { place: "Afghanistan", lat: 34.0, lng: 66.0 }
    ]
  },
  {
    id: "Anise", type: "Green & Grassy",
    origin: { place: "Eastern Mediterranean / SW Asia", lat: 32.0, lng: 30.0,
      era: "used since ancient Egypt",
      note: "Anise was cultivated in the eastern Mediterranean and prized in Egypt and Rome." },
    producers: [
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Egypt", lat: 26.5, lng: 30.0 }
    ]
  },
  {
    id: "Cucumber", type: "Green & Grassy",
    origin: { place: "Himalayan foothills, India", lat: 27.0, lng: 80.0,
      era: "domesticated ~3,000 years ago",
      note: "The cucumber was domesticated in India and spread west along trade routes." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "Iran", lat: 32.0, lng: 53.0 }
    ]
  },
  {
    id: "Dill", type: "Green & Grassy",
    origin: { place: "Mediterranean & Western Asia", lat: 40.0, lng: 30.0,
      era: "used since antiquity",
      note: "Dill has grown wild across the Mediterranean and western Asia since ancient times." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Egypt", lat: 26.5, lng: 30.0 },
      { place: "Pakistan", lat: 30.0, lng: 70.0 }
    ]
  },
  {
    id: "Parsley", type: "Green & Grassy",
    origin: { place: "Central Mediterranean (Sardinia)", lat: 40.0, lng: 9.0,
      era: "used by the Greeks & Romans",
      note: "Parsley is native to the central Mediterranean region." },
    producers: [
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 }
    ]
  },
  {
    id: "Coriander Leaf", type: "Green & Grassy",
    origin: { place: "Eastern Mediterranean / SW Asia", lat: 33.0, lng: 35.0,
      era: "used since antiquity",
      note: "Coriander (cilantro) was cultivated in the eastern Mediterranean and Near East millennia ago." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 }
    ]
  },
  {
    id: "Avocado", type: "Green & Grassy",
    origin: { place: "South-central Mexico (Puebla)", lat: 19.0, lng: -98.0,
      era: "domesticated ~5,000 years ago",
      note: "The avocado was domesticated in the highlands of south-central Mexico." },
    producers: [
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "Dominican Republic", lat: 19.0, lng: -70.5 },
      { place: "Peru", lat: -10.0, lng: -76.0 },
      { place: "Colombia", lat: 4.0, lng: -73.0 }
    ]
  },
  {
    id: "Pea", type: "Green & Grassy",
    origin: { place: "Fertile Crescent / Mediterranean", lat: 37.0, lng: 40.0,
      era: "domesticated ~8,500 years ago",
      note: "The pea was among the first crops of the Neolithic Near East." },
    producers: [
      { place: "Canada", lat: 56.0, lng: -106.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 }
    ]
  },
  {
    id: "Bell Pepper", type: "Green & Grassy",
    origin: { place: "Mexico & Central America", lat: 19.0, lng: -98.0,
      era: "domesticated with chilli peppers",
      note: "Sweet bell peppers are a mild form of Capsicum domesticated in Mesoamerica." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 }
    ]
  },
  {
    id: "Chili", type: "Green & Grassy",
    origin: { place: "Bolivia / Brazil & Mexico", lat: -16.0, lng: -64.0,
      era: "domesticated ~6,000 years ago",
      note: "Chilli peppers (Capsicum) were domesticated in South America and independently in Mexico." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "Thailand", lat: 15.0, lng: 101.0 }
    ]
  },

  // ---------------- Spicy ----------------
  {
    id: "Basil", type: "Spicy",
    origin: { place: "India & tropical Asia", lat: 20.0, lng: 80.0,
      era: "cultivated for millennia",
      note: "Basil is native to India and tropical Asia and central to cuisines from Thailand to Italy." },
    producers: [
      { place: "Egypt", lat: 26.5, lng: 30.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Cinnamon", type: "Spicy",
    origin: { place: "Sri Lanka", lat: 7.3, lng: 80.6,
      era: "traded since antiquity",
      note: "True cinnamon comes from the bark of a tree native to Sri Lanka; cassia comes from China and Indonesia." },
    producers: [
      { place: "Sri Lanka", lat: 7.3, lng: 80.6 },
      { place: "Indonesia", lat: -2.5, lng: 118.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Vietnam", lat: 16.0, lng: 106.0 }
    ]
  },
  {
    id: "Clove", type: "Spicy",
    origin: { place: "Maluku Islands (Spice Islands), Indonesia", lat: 0.0, lng: 127.4,
      era: "traded since antiquity",
      note: "Cloves grew only in the Maluku Islands of Indonesia until the 18th century." },
    producers: [
      { place: "Indonesia", lat: 0.0, lng: 127.4 },
      { place: "Madagascar", lat: -19.0, lng: 46.7 },
      { place: "Tanzania (Zanzibar)", lat: -6.1, lng: 39.3 }
    ]
  },
  {
    id: "Nutmeg", type: "Spicy",
    origin: { place: "Banda Islands, Indonesia", lat: -4.5, lng: 129.9,
      era: "sole source until the 18th century",
      note: "Nutmeg came only from the tiny Banda Islands, making them a prize of the spice trade." },
    producers: [
      { place: "Indonesia", lat: -4.5, lng: 129.9 },
      { place: "Guatemala", lat: 15.5, lng: -90.3 },
      { place: "India (Kerala)", lat: 10.0, lng: 76.5 }
    ]
  },
  {
    id: "Parsnip", type: "Spicy",
    origin: { place: "Eurasia / Mediterranean", lat: 43.0, lng: 12.0,
      era: "cultivated by the Romans",
      note: "The parsnip is native to Eurasia and was cultivated across Europe before the potato arrived." },
    producers: [
      { place: "United Kingdom", lat: 54.0, lng: -2.0 },
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },

  // ---------------- Woodland ----------------
  {
    id: "Carrot", type: "Woodland",
    origin: { place: "Persia / Central Asia (Afghanistan)", lat: 34.0, lng: 66.0,
      era: "domesticated ~1,100 years ago",
      note: "Carrots were first cultivated (purple and yellow) in Central Asia; the orange carrot was bred in the Netherlands." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Uzbekistan", lat: 41.4, lng: 64.6 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 }
    ]
  },
  {
    id: "Butternut Squash", type: "Woodland",
    origin: { place: "Central America / Mexico", lat: 18.0, lng: -96.0,
      era: "squash domesticated ~10,000 years ago",
      note: "Squashes (Cucurbita) were among the earliest American crops; the butternut cultivar was bred in 1940s Massachusetts." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 }
    ]
  },
  {
    id: "Chestnut", type: "Woodland",
    origin: { place: "Asia Minor & Mediterranean", lat: 40.0, lng: 30.0,
      era: "a staple for millennia",
      note: "Sweet chestnuts come from temperate forests of the Mediterranean, Asia Minor and East Asia." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Turkey", lat: 39.0, lng: 35.0 }
    ]
  },
  {
    id: "Walnut", type: "Woodland",
    origin: { place: "Persia / Central Asia", lat: 41.0, lng: 73.0,
      era: "gathered from ancient walnut forests",
      note: "The Persian (English) walnut comes from the relict walnut forests of Central Asia." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA (California)", lat: 37.0, lng: -120.0 },
      { place: "Iran", lat: 32.0, lng: 53.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 }
    ]
  },
  {
    id: "Hazelnut", type: "Woodland",
    origin: { place: "Asia Minor / Black Sea (Turkey)", lat: 41.0, lng: 38.0,
      era: "gathered since prehistory",
      note: "Hazelnuts are strongly associated with the Black Sea coast of Turkey, which dominates production." },
    producers: [
      { place: "Turkey", lat: 41.0, lng: 38.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "USA (Oregon)", lat: 44.5, lng: -123.0 },
      { place: "Georgia", lat: 42.3, lng: 43.4 }
    ]
  },
  {
    id: "Almond", type: "Woodland",
    origin: { place: "Levant & Central/SW Asia", lat: 34.0, lng: 52.0,
      era: "domesticated ~4,000 years ago",
      note: "The almond was domesticated in the Near East; today California grows most of the world's crop." },
    producers: [
      { place: "USA (California)", lat: 37.0, lng: -120.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Iran", lat: 32.0, lng: 53.0 },
      { place: "Australia", lat: -34.0, lng: 142.0 }
    ]
  },

  // ---------------- Fresh Fruity ----------------
  {
    id: "Cherry", type: "Fresh Fruity",
    origin: { place: "Between the Black & Caspian Seas", lat: 41.0, lng: 36.0,
      era: "cultivated since antiquity",
      note: "The sweet cherry originates in Anatolia, between the Black and Caspian Seas." },
    producers: [
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Chile", lat: -35.0, lng: -71.0 },
      { place: "Iran", lat: 32.0, lng: 53.0 }
    ]
  },
  {
    id: "Watermelon", type: "Fresh Fruity",
    origin: { place: "Northeast Africa (Sudan / Sahel)", lat: 15.0, lng: 30.0,
      era: "domesticated ~4,000+ years ago",
      note: "The watermelon was domesticated in northeast Africa and cultivated in ancient Egypt." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Iran", lat: 32.0, lng: 53.0 }
    ]
  },
  {
    id: "Grape", type: "Fresh Fruity",
    origin: { place: "South Caucasus (Georgia / Armenia)", lat: 41.5, lng: 45.0,
      era: "wine grape domesticated ~8,000 years ago",
      note: "The wine grape was domesticated in the South Caucasus, the cradle of winemaking." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "France", lat: 47.0, lng: 2.0 }
    ]
  },
  {
    id: "Rhubarb", type: "Fresh Fruity",
    origin: { place: "Western China / Tibet / Siberia", lat: 34.0, lng: 100.0,
      era: "medicinal in China ~2700 BCE; culinary in Europe 18th c.",
      note: "Rhubarb was a Chinese medicinal root for millennia and became a European culinary plant only recently." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "United Kingdom", lat: 54.0, lng: -2.0 },
      { place: "Netherlands", lat: 52.2, lng: 5.3 }
    ]
  },
  {
    id: "Tomato", type: "Fresh Fruity",
    origin: { place: "Andes (wild) → domesticated in Mexico", lat: 19.0, lng: -98.0,
      era: "domesticated ~2,000+ years ago",
      note: "The tomato's wild ancestor grew in the Andes, but it was domesticated in Mexico." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Strawberry", type: "Fresh Fruity",
    origin: { place: "Brittany, France (garden hybrid)", lat: 48.2, lng: -2.0,
      era: "modern hybrid bred ~1750s",
      note: "The garden strawberry is an 18th-century French hybrid of a North American and a Chilean species." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA (California)", lat: 37.0, lng: -120.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 }
    ]
  },
  {
    id: "Pineapple", type: "Fresh Fruity",
    origin: { place: "Paraná–Paraguay basin (Brazil / Paraguay)", lat: -25.0, lng: -56.0,
      era: "domesticated in South America",
      note: "The pineapple was domesticated in the Paraná–Paraguay river basin of South America." },
    producers: [
      { place: "Costa Rica", lat: 10.0, lng: -84.0 },
      { place: "Philippines", lat: 13.0, lng: 122.0 },
      { place: "Brazil", lat: -10.0, lng: -52.0 },
      { place: "Thailand", lat: 15.0, lng: 101.0 }
    ]
  },
  {
    id: "Apple", type: "Fresh Fruity",
    origin: { place: "Tien Shan Mountains, Kazakhstan", lat: 43.2, lng: 77.0,
      era: "wild ancestor Malus sieversii",
      note: "The domestic apple descends from wild apples of the Tien Shan around Almaty ('father of apples')." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "Poland", lat: 52.0, lng: 19.5 }
    ]
  },
  {
    id: "Pear", type: "Fresh Fruity",
    origin: { place: "Caucasus & China (two centres)", lat: 43.0, lng: 45.0,
      era: "cultivated for millennia",
      note: "European and Asian pears were domesticated separately, in the Caucasus and in China." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Argentina", lat: -35.0, lng: -65.0 }
    ]
  },

  // ---------------- Creamy Fruity ----------------
  {
    id: "Banana", type: "Creamy Fruity",
    origin: { place: "New Guinea & Southeast Asia", lat: -6.0, lng: 144.0,
      era: "domesticated ~7,000 years ago",
      note: "Bananas were first domesticated in the highlands of New Guinea and across island Southeast Asia." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Indonesia", lat: -2.5, lng: 118.0 },
      { place: "Ecuador", lat: -1.5, lng: -78.5 }
    ]
  },
  {
    id: "Melon", type: "Creamy Fruity",
    origin: { place: "Africa & Southwest Asia", lat: 30.0, lng: 60.0,
      era: "domesticated in antiquity",
      note: "Sweet melons (cantaloupe, honeydew) trace to Africa and Persia/India." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Iran", lat: 32.0, lng: 53.0 }
    ]
  },
  {
    id: "Apricot", type: "Creamy Fruity",
    origin: { place: "China / Central Asia", lat: 40.0, lng: 90.0,
      era: "cultivated ~4,000 years ago",
      note: "The apricot was domesticated in China and Central Asia and carried west along the Silk Road." },
    producers: [
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "Uzbekistan", lat: 41.4, lng: 64.6 },
      { place: "Iran", lat: 32.0, lng: 53.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 }
    ]
  },
  {
    id: "Peach", type: "Creamy Fruity",
    origin: { place: "China", lat: 30.0, lng: 110.0,
      era: "domesticated ~7,500 years ago",
      note: "The peach was domesticated in China, where it has deep cultural significance." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Greece", lat: 39.0, lng: 22.0 }
    ]
  },
  {
    id: "Coconut", type: "Creamy Fruity",
    origin: { place: "Indo-Pacific (SE Asia & Melanesia)", lat: 5.0, lng: 120.0,
      era: "dispersed across the tropics millennia ago",
      note: "The coconut palm spread across the Indo-Pacific, carried by ocean currents and by people." },
    producers: [
      { place: "Indonesia", lat: -2.5, lng: 118.0 },
      { place: "Philippines", lat: 13.0, lng: 122.0 },
      { place: "India", lat: 22.0, lng: 79.0 }
    ]
  },
  {
    id: "Mango", type: "Creamy Fruity",
    origin: { place: "South & Southeast Asia (India / Myanmar)", lat: 22.0, lng: 85.0,
      era: "domesticated ~4,000+ years ago",
      note: "The mango was domesticated in the Indian subcontinent and is deeply woven into its culture." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Thailand", lat: 15.0, lng: 101.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 }
    ]
  },

  // ---------------- Citrussy ----------------
  {
    id: "Orange", type: "Citrussy",
    origin: { place: "Southern China / SE Asia", lat: 25.0, lng: 105.0,
      era: "ancient hybrid of pomelo × mandarin",
      note: "The sweet orange arose in southern China as a hybrid of pomelo and mandarin." },
    producers: [
      { place: "Brazil", lat: -10.0, lng: -52.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Grapefruit", type: "Citrussy",
    origin: { place: "Barbados (Caribbean)", lat: 13.2, lng: -59.5,
      era: "hybrid arose ~1750",
      note: "The grapefruit is a New World hybrid of sweet orange and pomelo, first recorded in Barbados." },
    producers: [
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "USA (Florida)", lat: 28.0, lng: -81.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "South Africa", lat: -30.0, lng: 25.0 }
    ]
  },
  {
    id: "Lime", type: "Citrussy",
    origin: { place: "Indo-Malaya / Southeast Asia", lat: 15.0, lng: 100.0,
      era: "cultivated for millennia",
      note: "Limes originate in the Indo-Malayan region of Southeast Asia." },
    producers: [
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Brazil", lat: -10.0, lng: -52.0 },
      { place: "Argentina", lat: -35.0, lng: -65.0 }
    ]
  },
  {
    id: "Lemon", type: "Citrussy",
    origin: { place: "Northeast India / Myanmar / China", lat: 27.0, lng: 95.0,
      era: "ancient hybrid of citron × bitter orange",
      note: "The lemon arose as a hybrid in the region where India, Myanmar and China meet." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Mexico", lat: 23.5, lng: -102.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Argentina", lat: -35.0, lng: -65.0 }
    ]
  },
  {
    id: "Ginger", type: "Citrussy",
    origin: { place: "Maritime Southeast Asia / South Asia", lat: 5.0, lng: 115.0,
      era: "ancient; not known in the wild",
      note: "Ginger has been cultivated so long it no longer exists in a truly wild state; its home is tropical Asia." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Nigeria", lat: 9.5, lng: 8.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Nepal", lat: 28.4, lng: 84.1 }
    ]
  },
  {
    id: "Cardamom", type: "Citrussy",
    origin: { place: "Western Ghats, India", lat: 10.0, lng: 77.0,
      era: "traded since antiquity",
      note: "Green cardamom is native to the moist forests of the Western Ghats in southern India." },
    producers: [
      { place: "Guatemala", lat: 15.5, lng: -90.3 },
      { place: "India", lat: 10.0, lng: 77.0 },
      { place: "Indonesia", lat: -2.5, lng: 118.0 }
    ]
  },

  // ---------------- Berry & Bush ----------------
  {
    id: "Rosemary", type: "Berry & Bush",
    origin: { place: "Mediterranean basin", lat: 41.0, lng: 9.0,
      era: "used since antiquity",
      note: "Rosemary is a hardy evergreen shrub of the dry Mediterranean hills." },
    producers: [
      { place: "Morocco", lat: 32.0, lng: -6.0 },
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Tunisia", lat: 34.0, lng: 9.5 },
      { place: "France", lat: 47.0, lng: 2.0 }
    ]
  },
  {
    id: "Sage", type: "Berry & Bush",
    origin: { place: "Northern Mediterranean (Balkans)", lat: 43.0, lng: 17.0,
      era: "used since antiquity",
      note: "Common sage is native to the Mediterranean, especially the Adriatic coast." },
    producers: [
      { place: "Albania", lat: 41.0, lng: 20.0 },
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "USA", lat: 39.0, lng: -98.0 }
    ]
  },
  {
    id: "Juniper", type: "Berry & Bush",
    origin: { place: "Northern Hemisphere (temperate Europe/Asia)", lat: 55.0, lng: 15.0,
      era: "wild-harvested since antiquity",
      note: "Juniper berries come from a shrub found across the temperate Northern Hemisphere; they flavour gin." },
    producers: [
      { place: "Albania", lat: 41.0, lng: 20.0 },
      { place: "Italy", lat: 42.5, lng: 12.5 },
      { place: "India", lat: 22.0, lng: 79.0 }
    ]
  },
  {
    id: "Thyme", type: "Berry & Bush",
    origin: { place: "Mediterranean basin", lat: 40.0, lng: 10.0,
      era: "used by Egyptians, Greeks & Romans",
      note: "Thyme is a low Mediterranean shrub, used since ancient Egypt." },
    producers: [
      { place: "Spain", lat: 40.0, lng: -3.5 },
      { place: "Morocco", lat: 32.0, lng: -6.0 },
      { place: "France", lat: 47.0, lng: 2.0 },
      { place: "Poland", lat: 52.0, lng: 19.5 }
    ]
  },
  {
    id: "Mint", type: "Berry & Bush",
    origin: { place: "Temperate Eurasia & Mediterranean", lat: 40.0, lng: 20.0,
      era: "used since antiquity",
      note: "Mints grow wild across temperate Eurasia; peppermint is a natural hybrid." },
    producers: [
      { place: "India", lat: 27.0, lng: 78.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "China", lat: 35.0, lng: 103.0 },
      { place: "Morocco", lat: 32.0, lng: -6.0 }
    ]
  },
  {
    id: "Blackcurrant", type: "Berry & Bush",
    origin: { place: "Northern & Central Europe / Asia", lat: 55.0, lng: 30.0,
      era: "cultivated from the 16th c.",
      note: "The blackcurrant is native to the temperate woodlands of northern Europe and Asia." },
    producers: [
      { place: "Poland", lat: 52.0, lng: 19.5 },
      { place: "Russia", lat: 61.0, lng: 90.0 },
      { place: "United Kingdom", lat: 54.0, lng: -2.0 }
    ]
  },
  {
    id: "Blackberry", type: "Berry & Bush",
    origin: { place: "Temperate Northern Hemisphere", lat: 48.0, lng: 2.0,
      era: "gathered since prehistory",
      note: "Blackberries grow wild throughout temperate Europe and North America." },
    producers: [
      { place: "Mexico", lat: 20.0, lng: -100.0 },
      { place: "USA", lat: 39.0, lng: -98.0 },
      { place: "Serbia", lat: 44.0, lng: 20.9 },
      { place: "Chile", lat: -35.0, lng: -71.0 }
    ]
  },

  // ---------------- Floral Fruity ----------------
  {
    id: "Raspberry", type: "Floral Fruity",
    origin: { place: "Europe & Northern Asia", lat: 50.0, lng: 20.0,
      era: "cultivated from the Middle Ages",
      note: "The red raspberry is native to the temperate woodlands of Europe and northern Asia." },
    producers: [
      { place: "Russia", lat: 56.0, lng: 45.0 },
      { place: "Mexico", lat: 20.0, lng: -100.0 },
      { place: "Serbia", lat: 44.0, lng: 20.9 },
      { place: "Poland", lat: 52.0, lng: 19.5 }
    ]
  },
  {
    id: "Fig", type: "Floral Fruity",
    origin: { place: "Western Asia (Jordan Valley)", lat: 33.0, lng: 35.5,
      era: "among the first cultivated plants, ~11,000 years",
      note: "The fig may be the oldest domesticated fruit, cultivated in the Jordan Valley before cereals." },
    producers: [
      { place: "Turkey", lat: 39.0, lng: 35.0 },
      { place: "Egypt", lat: 26.5, lng: 30.0 },
      { place: "Morocco", lat: 32.0, lng: -6.0 },
      { place: "Algeria", lat: 28.0, lng: 3.0 }
    ]
  },
  {
    id: "Rose", type: "Floral Fruity",
    origin: { place: "Central Asia / Persia / China", lat: 35.0, lng: 52.0,
      era: "cultivated for millennia",
      note: "Garden and fragrant roses trace to Central Asia, Persia and China; culinary rose water spread from the Middle East." },
    producers: [
      { place: "Bulgaria", lat: 42.6, lng: 25.0 },
      { place: "Turkey (Isparta)", lat: 37.8, lng: 30.5 },
      { place: "Iran", lat: 32.0, lng: 53.0 },
      { place: "Morocco", lat: 32.0, lng: -6.0 }
    ]
  },
  {
    id: "Blueberry", type: "Floral Fruity",
    origin: { place: "North America", lat: 45.0, lng: -70.0,
      era: "native; domesticated ~1900s",
      note: "Blueberries are native to North America and were domesticated only in the early 20th century." },
    producers: [
      { place: "USA", lat: 40.0, lng: -90.0 },
      { place: "Canada", lat: 52.0, lng: -106.0 },
      { place: "Peru", lat: -10.0, lng: -76.0 },
      { place: "Chile", lat: -35.0, lng: -71.0 }
    ]
  },
  {
    id: "Coriander Seed", type: "Floral Fruity",
    origin: { place: "Eastern Mediterranean / SW Asia", lat: 33.0, lng: 38.0,
      era: "used since antiquity",
      note: "Coriander seed, warmer and citrusy, comes from the same plant as the fresh leaf, native to the Near East." },
    producers: [
      { place: "India", lat: 22.0, lng: 79.0 },
      { place: "Russia", lat: 61.0, lng: 90.0 },
      { place: "Ukraine", lat: 49.0, lng: 32.0 },
      { place: "Morocco", lat: 32.0, lng: -6.0 }
    ]
  },
  {
    id: "Vanilla", type: "Floral Fruity",
    origin: { place: "Mesoamerica (Mexico)", lat: 20.0, lng: -97.0,
      era: "domesticated by the Totonac & Aztec",
      note: "Vanilla, an orchid, was first cultivated by the Totonac of Mexico; Madagascar now leads production." },
    producers: [
      { place: "Madagascar", lat: -19.0, lng: 46.7 },
      { place: "Indonesia", lat: -2.5, lng: 118.0 },
      { place: "Mexico", lat: 20.0, lng: -97.0 },
      { place: "Uganda", lat: 1.3, lng: 32.3 }
    ]
  },
  {
    id: "White Chocolate", type: "Floral Fruity",
    origin: { place: "Switzerland (invented) · cacao from the Amazon", lat: 46.8, lng: 8.2,
      era: "first produced ~1930s",
      note: "White chocolate is made from cocoa butter (from Amazonian-origin cacao) and was first sold by Nestlé in Switzerland." },
    producers: [
      { place: "Côte d'Ivoire", lat: 7.5, lng: -5.5 },
      { place: "Ghana", lat: 7.9, lng: -1.0 },
      { place: "Switzerland", lat: 46.8, lng: 8.2 }
    ]
  }
];
