/*
 * Sources & citations for the Ingredient Atlas.
 *
 * Origins and their coordinates are synthesised from crop- and animal-domestication
 * research and general reference works; production figures reflect FAO data. Precise,
 * per-claim citations live in the Wikipedia articles linked below (each article carries
 * its own primary references) and in the backbone works listed in `references`.
 */
window.SOURCES = {
  // Per-ingredient primary reference: origin/history + a production table.
  wiki: {
    "Chocolate": "https://en.wikipedia.org/wiki/Theobroma_cacao",
    "Coffee": "https://en.wikipedia.org/wiki/Coffea_arabica",
    "Peanut": "https://en.wikipedia.org/wiki/Peanut",
    "Chicken": "https://en.wikipedia.org/wiki/Chicken",
    "Pork": "https://en.wikipedia.org/wiki/Pig",
    "Black Pudding": "https://en.wikipedia.org/wiki/Blood_sausage",
    "Liver": "https://en.wikipedia.org/wiki/Liver_as_food",
    "Beef": "https://en.wikipedia.org/wiki/Cattle",
    "Lamb": "https://en.wikipedia.org/wiki/Sheep",
    "Goat Cheese": "https://en.wikipedia.org/wiki/Goat_cheese",
    "Washed-rind Cheese": "https://en.wikipedia.org/wiki/Washed-rind_cheese",
    "Blue Cheese": "https://en.wikipedia.org/wiki/Blue_cheese",
    "Hard Cheese": "https://en.wikipedia.org/wiki/Types_of_cheese",
    "Soft Cheese": "https://en.wikipedia.org/wiki/Types_of_cheese",
    "Mushroom": "https://en.wikipedia.org/wiki/Agaricus_bisporus",
    "Aubergine": "https://en.wikipedia.org/wiki/Eggplant",
    "Cumin": "https://en.wikipedia.org/wiki/Cumin",
    "Beetroot": "https://en.wikipedia.org/wiki/Beetroot",
    "Potato": "https://en.wikipedia.org/wiki/Potato",
    "Celery": "https://en.wikipedia.org/wiki/Celery",
    "Sesame": "https://en.wikipedia.org/wiki/Sesame",
    "Watercress": "https://en.wikipedia.org/wiki/Watercress",
    "Caper": "https://en.wikipedia.org/wiki/Caper",
    "Horseradish": "https://en.wikipedia.org/wiki/Horseradish",
    "Onion": "https://en.wikipedia.org/wiki/Onion",
    "Garlic": "https://en.wikipedia.org/wiki/Garlic",
    "Truffle": "https://en.wikipedia.org/wiki/Truffle",
    "Cabbage": "https://en.wikipedia.org/wiki/Cabbage",
    "Swede": "https://en.wikipedia.org/wiki/Rutabaga",
    "Cauliflower": "https://en.wikipedia.org/wiki/Cauliflower",
    "Broccoli": "https://en.wikipedia.org/wiki/Broccoli",
    "Globe Artichoke": "https://en.wikipedia.org/wiki/Artichoke",
    "Asparagus": "https://en.wikipedia.org/wiki/Asparagus",
    "Egg": "https://en.wikipedia.org/wiki/Eggs_as_food",
    "Shellfish": "https://en.wikipedia.org/wiki/Shellfish",
    "White Fish": "https://en.wikipedia.org/wiki/Whitefish_(fisheries_term)",
    "Oyster": "https://en.wikipedia.org/wiki/Oyster",
    "Caviar": "https://en.wikipedia.org/wiki/Caviar",
    "Oily Fish": "https://en.wikipedia.org/wiki/Oily_fish",
    "Anchovy": "https://en.wikipedia.org/wiki/Anchovy",
    "Smoked Fish": "https://en.wikipedia.org/wiki/Smoked_fish",
    "Bacon": "https://en.wikipedia.org/wiki/Bacon",
    "Prosciutto": "https://en.wikipedia.org/wiki/Prosciutto",
    "Olive": "https://en.wikipedia.org/wiki/Olive",
    "Saffron": "https://en.wikipedia.org/wiki/Saffron",
    "Anise": "https://en.wikipedia.org/wiki/Anise",
    "Cucumber": "https://en.wikipedia.org/wiki/Cucumber",
    "Dill": "https://en.wikipedia.org/wiki/Dill",
    "Parsley": "https://en.wikipedia.org/wiki/Parsley",
    "Coriander Leaf": "https://en.wikipedia.org/wiki/Coriander",
    "Avocado": "https://en.wikipedia.org/wiki/Avocado",
    "Pea": "https://en.wikipedia.org/wiki/Pea",
    "Bell Pepper": "https://en.wikipedia.org/wiki/Bell_pepper",
    "Chili": "https://en.wikipedia.org/wiki/Chili_pepper",
    "Basil": "https://en.wikipedia.org/wiki/Basil",
    "Cinnamon": "https://en.wikipedia.org/wiki/Cinnamon",
    "Clove": "https://en.wikipedia.org/wiki/Clove",
    "Nutmeg": "https://en.wikipedia.org/wiki/Nutmeg",
    "Parsnip": "https://en.wikipedia.org/wiki/Parsnip",
    "Carrot": "https://en.wikipedia.org/wiki/Carrot",
    "Butternut Squash": "https://en.wikipedia.org/wiki/Butternut_squash",
    "Chestnut": "https://en.wikipedia.org/wiki/Chestnut",
    "Walnut": "https://en.wikipedia.org/wiki/Walnut",
    "Hazelnut": "https://en.wikipedia.org/wiki/Hazelnut",
    "Almond": "https://en.wikipedia.org/wiki/Almond",
    "Cherry": "https://en.wikipedia.org/wiki/Cherry",
    "Watermelon": "https://en.wikipedia.org/wiki/Watermelon",
    "Grape": "https://en.wikipedia.org/wiki/Grape",
    "Rhubarb": "https://en.wikipedia.org/wiki/Rhubarb",
    "Tomato": "https://en.wikipedia.org/wiki/Tomato",
    "Strawberry": "https://en.wikipedia.org/wiki/Strawberry",
    "Pineapple": "https://en.wikipedia.org/wiki/Pineapple",
    "Apple": "https://en.wikipedia.org/wiki/Apple",
    "Pear": "https://en.wikipedia.org/wiki/Pear",
    "Banana": "https://en.wikipedia.org/wiki/Banana",
    "Melon": "https://en.wikipedia.org/wiki/Melon",
    "Apricot": "https://en.wikipedia.org/wiki/Apricot",
    "Peach": "https://en.wikipedia.org/wiki/Peach",
    "Coconut": "https://en.wikipedia.org/wiki/Coconut",
    "Mango": "https://en.wikipedia.org/wiki/Mango",
    "Orange": "https://en.wikipedia.org/wiki/Orange_(fruit)",
    "Grapefruit": "https://en.wikipedia.org/wiki/Grapefruit",
    "Lime": "https://en.wikipedia.org/wiki/Lime_(fruit)",
    "Lemon": "https://en.wikipedia.org/wiki/Lemon",
    "Ginger": "https://en.wikipedia.org/wiki/Ginger",
    "Cardamom": "https://en.wikipedia.org/wiki/Cardamom",
    "Rosemary": "https://en.wikipedia.org/wiki/Rosemary",
    "Sage": "https://en.wikipedia.org/wiki/Salvia_officinalis",
    "Juniper": "https://en.wikipedia.org/wiki/Juniper_berry",
    "Thyme": "https://en.wikipedia.org/wiki/Thyme",
    "Mint": "https://en.wikipedia.org/wiki/Mentha",
    "Blackcurrant": "https://en.wikipedia.org/wiki/Blackcurrant",
    "Blackberry": "https://en.wikipedia.org/wiki/Blackberry",
    "Raspberry": "https://en.wikipedia.org/wiki/Raspberry",
    "Fig": "https://en.wikipedia.org/wiki/Fig",
    "Rose": "https://en.wikipedia.org/wiki/Rose",
    "Blueberry": "https://en.wikipedia.org/wiki/Blueberry",
    "Coriander Seed": "https://en.wikipedia.org/wiki/Coriander",
    "Vanilla": "https://en.wikipedia.org/wiki/Vanilla",
    "White Chocolate": "https://en.wikipedia.org/wiki/White_chocolate",
  },

  // Ingredients whose production is reported by FAO Fisheries rather than FAOSTAT crops/livestock.
  aquatic: ["Shellfish","White Fish","Oyster","Caviar","Oily Fish","Anchovy","Smoked Fish"],

  // Where "main growers today" comes from.
  production: {
    land: {
      label: "FAOSTAT — Crops & livestock products",
      url: "https://www.fao.org/faostat/en/#data/QCL"
    },
    sea: {
      label: "FAO — Fisheries & aquaculture statistics",
      url: "https://www.fao.org/fishery/en/statistics"
    }
  },

  // Backbone references behind the origin claims and the overall methodology.
  references: [
    {
      label: "FAOSTAT — Crops and livestock products (production data)",
      url: "https://www.fao.org/faostat/en/#data/QCL"
    },
    {
      label: "FAO — Fisheries & aquaculture global production statistics",
      url: "https://www.fao.org/fishery/en/statistics"
    },
    {
      label: "Larson et al. (2014), PNAS — \"Current perspectives and the future of domestication studies\"",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3948225/"
    },
    {
      label: "Meyer & Purugganan (2013), Nature Reviews Genetics — \"Evolution of crop species: genetics of domestication and diversification\"",
      url: "https://doi.org/10.1038/nrg3605"
    },
    {
      label: "Centres of origin (Vavilov) — the framework for crop-origin regions",
      url: "https://en.wikipedia.org/wiki/Center_of_origin"
    },
    {
      label: "Encyclopædia Britannica — general reference for individual ingredients",
      url: "https://www.britannica.com/"
    },
    {
      label: "Per-ingredient histories are drawn from Wikipedia, whose articles cite primary sources",
      url: "https://en.wikipedia.org/"
    }
  ]
};
