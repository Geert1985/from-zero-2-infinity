const COURSE = {
  title: "From Zero 2 Infinity",
  tagline: "Begin met tellen. Ontdek oneindigheid. Begrijp het universum.",
  passRatio: 0.8,
  /* Kost om fase N te openen: cumulatieve Lesstof- en Toetspunten. Fase 1 is vrij. Punten worden niet afgetrokken. */
  phaseCost: {
    1: { les: 0, toets: 0 },
    2: { les: 10, toets: 8 },
    3: { les: 14, toets: 11 },
    4: { les: 18, toets: 14 },
    5: { les: 21, toets: 17 },
    6: { les: 24, toets: 20 },
    7: { les: 27, toets: 23 }
  },
  phases: [
    {
      id: 1,
      title: "Rekenkunde & Basisgetallen",
      short: "Van tellen tot reële getallen",
      unlock: "Natuurlijke, gehele, rationale en reële getallen",
      topics: ["Getalbegrip", "Hoofdbewerkingen", "Gehele & rationale getallen", "Priemfactoren", "Machten & wortels"]
    },
    {
      id: 2,
      title: "Algebra & Geometrie",
      short: "Van getallen naar variabelen",
      unlock: "Vergelijkingen, vormen, functies en goniometrie",
      topics: ["Basisalgebra", "Euclidische meetkunde", "Functies & grafieken", "Trigonometrie"]
    },
    {
      id: 3,
      title: "Calculus (Analyse)",
      short: "Verandering en oneindigheid",
      unlock: "Limieten, afgeleiden en integralen",
      topics: ["Limieten", "Differentiaalrekening", "Integraalrekening", "Multivariabele calculus"]
    },
    {
      id: 4,
      title: "Lineaire Algebra",
      short: "Vectoren en ruimtes",
      unlock: "Matrices, vectorruimten en eigenvectoren",
      topics: ["Vectoren & matrices", "Vectorruimten", "Eigenwaarden"]
    },
    {
      id: 5,
      title: "Differentiaal­vergelijkingen & complexe getallen",
      short: "Dynamische systemen",
      unlock: "Complexe getallen, DV's en Fourier",
      topics: ["Complexe getallen", "Differentiaalvergelijkingen", "Fourier-analyse"]
    },
    {
      id: 6,
      title: "Abstracte Algebra & Topologie",
      short: "Structuren achter de regels",
      unlock: "Groepen, topologie en tensoren",
      topics: ["Groepentheorie", "Topologie", "Tensorrekening"]
    },
    {
      id: 7,
      title: "Differentiaalmeetkunde & Kwantumvelden",
      short: "IJkvelden en het mass-gap-probleem",
      unlock: "Yang–Mills als taal voor fundamentele interacties",
      topics: ["Vectorbundels", "Yang–Mills", "Mass gap"]
    }
  ]
};

const PLAYABLE_PHASES = [1, 2, 3, 4, 5, 6, 7];
const PHASE_BLURB = {
  1: "Van nul kennis van getallen tot de poort van algebra.",
  2: "Van concrete getallen naar variabelen, vormen, functies en goniometrie. Daarna opent de poort naar calculus.",
  3: "Van functies naar verandering: limieten, afgeleiden, integralen en de eerste stappen in meerdere variabelen.",
  4: "Van punten naar richtingen: vectoren, matrices, vectorruimten en de invariante richtingen van een transformatie.",
  5: "Complexe getallen, dynamische systemen en golven: de taal achter oscillatoren en de Schrödingervergelijking.",
  6: "Structuur boven voorstelling: groepen, topologische ruimten en tensoren als taal voor Fase 7.",
  7: "Hoe moderne wiskunde fundamentele interacties beschrijft."
};
