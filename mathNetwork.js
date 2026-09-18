/*
 * Historisch Wiskundenetwerk — From Zero 2 Infinity
 *
 * Doel:
 * - Historische personen, ideeën, werken en doorbraken als netwerk tonen.
 * - Nodes ontgrendelen met Inzichtpunten.
 * - Inzichtpunten worden NOOIT afgetrokken.
 * - Nieuwe nodes toevoegen = één object toevoegen aan MATH_NETWORK_NODES
 *   en eventueel verbindingen toevoegen aan MATH_NETWORK_EDGES.
 *
 * Geen externe library nodig: SVG + gewone JavaScript.
 */

const MATH_NETWORK_NODES = [
  // ─────────────────────────────────────────────────────────────
  // BEGIN: basis
  // ─────────────────────────────────────────────────────────────
  {
    id: "tellen",
    title: "Tellen",
    type: "idea",
    era: "Vóór de formele wiskunde",
    year: null,
    cost: 1,
    prerequisites: [],
    description: "Het onderscheiden en bijhouden van hoeveelheden: een van de vroegste stappen richting getallen.",
    unlockText: "Je ontdekt het beginpunt van het wiskundig denken: hoeveelheden kunnen worden onderscheiden en bijgehouden."
  },
  {
    id: "getal",
    title: "Het getal",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    cost: 1,
    prerequisites: ["tellen"],
    description: "Een abstract begrip waarmee een hoeveelheid kan worden weergegeven.",
    unlockText: "Uit tellen ontstaat een abstract idee dat losstaat van de concrete voorwerpen die worden geteld."
  },
  {
    id: "natuurlijke-getallen",
    title: "Natuurlijke getallen",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    cost: 1,
    prerequisites: ["getal"],
    description: "De getallen waarmee we hoeveelheden en tellingen beschrijven: 1, 2, 3, ...",
    unlockText: "De eerste systematische getallenwereld wordt zichtbaar."
  },
  {
    id: "nul",
    title: "Nul",
    type: "idea",
    era: "India",
    year: "7e eeuw",
    cost: 2,
    prerequisites: ["natuurlijke-getallen"],
    description: "Nul krijgt een zelfstandige rol als getal én als plaatswaardecijfer.",
    unlockText: "Nul maakt het getalsysteem veel krachtiger: een lege plaats kan worden weergegeven en nul kan als getal worden behandeld."
  },
  {
    id: "plaatswaarde",
    title: "Plaatswaardesysteem",
    type: "idea",
    era: "Oude en middeleeuwse wiskunde",
    year: null,
    cost: 2,
    prerequisites: ["natuurlijke-getallen"],
    description: "De waarde van een cijfer hangt af van zijn positie in het getal.",
    unlockText: "Met plaatswaarde wordt rekenen met grote getallen veel efficiënter."
  },
  {
    id: "breuken",
    title: "Breuken",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    cost: 2,
    prerequisites: ["getal"],
    description: "Getallen die delen van een geheel of verhoudingen kunnen voorstellen.",
    unlockText: "Getallen hoeven niet langer alleen gehele hoeveelheden voor te stellen."
  },
  {
    id: "negatieve-getallen",
    title: "Negatieve getallen",
    type: "idea",
    era: "India / middeleeuwse wiskunde",
    year: null,
    cost: 2,
    prerequisites: ["nul"],
    description: "Getallen kleiner dan nul, die bijvoorbeeld schulden en tegengestelde richtingen kunnen voorstellen.",
    unlockText: "De getallenwereld wordt uitgebreid zodat aftrekkingen zoals 3 − 5 betekenis krijgen."
  },

  // ─────────────────────────────────────────────────────────────
  // Grieken
  // ─────────────────────────────────────────────────────────────
  {
    id: "pythagoras",
    title: "Pythagoras",
    type: "person",
    era: "Oud-Griekenland",
    year: "ca. 570–495 v.Chr.",
    cost: 3,
    prerequisites: ["getal", "breuken"],
    description: "Pythagorese traditie rond getallen, verhoudingen en meetkundige stellingen.",
    unlockText: "Getallen en meetkundige vormen blijken diep met elkaar verbonden."
  },
  {
    id: "bewijs",
    title: "Deductief bewijs",
    type: "idea",
    era: "Oud-Griekenland",
    year: "ca. 5e eeuw v.Chr.",
    cost: 3,
    prerequisites: ["pythagoras"],
    description: "Een conclusie wordt stap voor stap afgeleid uit definities, aannames en eerdere resultaten.",
    unlockText: "Wiskunde wordt niet alleen rekenen, maar ook aantonen waarom iets noodzakelijk waar is."
  },
  {
    id: "euclides",
    title: "Euclides",
    type: "person",
    era: "Hellenistische periode",
    year: "ca. 300 v.Chr.",
    cost: 5,
    prerequisites: ["bewijs"],
    description: "Euclides systematiseerde een groot deel van de Griekse meetkunde in de Elementen.",
    unlockText: "Definities, axioma's en stellingen vormen samen een samenhangend deductief bouwwerk."
  },
  {
    id: "priemgetallen",
    title: "Priemgetallen",
    type: "idea",
    era: "Oud-Griekenland",
    year: null,
    cost: 2,
    prerequisites: ["euclides"],
    description: "Getallen groter dan 1 die alleen door 1 en zichzelf deelbaar zijn.",
    unlockText: "De structuur van de gehele getallen wordt een zelfstandig onderzoeksgebied."
  },
  {
    id: "archimedes",
    title: "Archimedes",
    type: "person",
    era: "Hellenistische periode",
    year: "ca. 287–212 v.Chr.",
    cost: 5,
    prerequisites: ["euclides"],
    description: "Ontwikkelde krachtige meetkundige methoden voor onder andere oppervlakken en volumes.",
    unlockText: "Door steeds fijnere benaderingen te gebruiken ontstaat een voorloper van het latere integraalidee."
  },
  {
    id: "kegelsneden",
    title: "Kegelsneden",
    type: "idea",
    era: "Hellenistische periode",
    year: "3e–2e eeuw v.Chr.",
    cost: 5,
    prerequisites: ["euclides"],
    description: "Ellipsen, parabolen en hyperbolen als fundamentele meetkundige krommen.",
    unlockText: "Nieuwe soorten krommen worden onderdeel van de wiskundige taal."
  },

  // ─────────────────────────────────────────────────────────────
  // India / islamitische wereld
  // ─────────────────────────────────────────────────────────────
  {
    id: "brahmagupta",
    title: "Brahmagupta",
    type: "person",
    era: "India",
    year: "598–ca. 668",
    cost: 3,
    prerequisites: ["nul", "negatieve-getallen"],
    description: "Speelde een belangrijke rol in de ontwikkeling van rekenregels voor nul en negatieve getallen.",
    unlockText: "Nul en negatieve getallen krijgen explicietere rekenregels."
  },
  {
    id: "al-khwarizmi",
    title: "Al-Khwarizmi",
    type: "person",
    era: "Islamitische gouden eeuw",
    year: "ca. 780–850",
    cost: 5,
    prerequisites: ["plaatswaarde", "breuken"],
    description: "Zijn werk droeg bij aan de ontwikkeling van algebra en systematische rekenprocedures.",
    unlockText: "Een nieuwe manier van denken ontstaat: problemen kunnen volgens algemene procedures worden opgelost."
  },
  {
    id: "algoritme",
    title: "Algoritme",
    type: "idea",
    era: "Middeleeuwse wiskunde",
    year: null,
    cost: 3,
    prerequisites: ["al-khwarizmi"],
    description: "Een eindige, systematische procedure om een probleem op te lossen.",
    unlockText: "Een wiskundig probleem kan worden gezien als een reeks expliciete stappen."
  },
  {
    id: "algebra",
    title: "Algebra",
    type: "idea",
    era: "Middeleeuwse wiskunde",
    year: null,
    cost: 5,
    prerequisites: ["al-khwarizmi", "negatieve-getallen"],
    description: "Het systematisch werken met onbekenden, vergelijkingen en algebraïsche bewerkingen.",
    unlockText: "Getallen worden niet langer alleen berekend: onbekende grootheden kunnen symbolisch worden behandeld."
  },

  // ─────────────────────────────────────────────────────────────
  // Renaissance / 17e eeuw
  // ─────────────────────────────────────────────────────────────
  {
    id: "fibonacci",
    title: "Fibonacci",
    type: "person",
    era: "Middeleeuws Europa",
    year: "ca. 1170–ca. 1250",
    cost: 5,
    prerequisites: ["plaatswaarde", "al-khwarizmi"],
    description: "Verspreidde via Liber Abaci rekenmethoden met het Indisch-Arabische cijfersysteem in Europa.",
    unlockText: "Efficiëntere rekenmethoden krijgen een brede Europese verspreiding."
  },
  {
    id: "descartes",
    title: "René Descartes",
    type: "person",
    era: "17e eeuw",
    year: "1596–1650",
    cost: 5,
    prerequisites: ["algebra", "euclides"],
    description: "Verbond algebra met meetkunde via het coördinatenstelsel en de analytische meetkunde.",
    unlockText: "Een meetkundig probleem kan voortaan worden vertaald naar algebra."
  },
  {
    id: "fermat",
    title: "Pierre de Fermat",
    type: "person",
    era: "17e eeuw",
    year: "1607–1665",
    cost: 5,
    prerequisites: ["priemgetallen", "algebra"],
    description: "Belangrijke bijdragen aan getaltheorie, analytische meetkunde en kansrekening.",
    unlockText: "Getaltheorie groeit uit tot een eigen onderzoeksgebied en algebra krijgt nieuwe toepassingen."
  },
  {
    id: "pascal",
    title: "Blaise Pascal",
    type: "person",
    era: "17e eeuw",
    year: "1623–1662",
    cost: 5,
    prerequisites: ["algebra", "fibonacci"],
    description: "Belangrijke bijdragen aan combinatoriek, kansrekening en rekenmachines.",
    unlockText: "Combinaties van eindige mogelijkheden worden systematisch bestudeerd."
  },
  {
    id: "kansrekening",
    title: "Kansrekening",
    type: "idea",
    era: "17e eeuw",
    year: "17e eeuw",
    cost: 5,
    prerequisites: ["pascal", "fermat"],
    description: "Wiskundige theorie van toevallige gebeurtenissen en kansen.",
    unlockText: "Onzekerheid wordt een object dat wiskundig kan worden berekend."
  },
  {
    id: "newton",
    title: "Isaac Newton",
    type: "person",
    era: "17e eeuw",
    year: "1643–1727",
    cost: 8,
    prerequisites: ["descartes", "algebra", "kegelsneden"],
    description: "Ontwikkelde calculus in samenhang met zijn werk in mechanica en zwaartekracht.",
    unlockText: "Verandering wordt een wiskundig object waarmee beweging en fysische wetten kunnen worden beschreven."
  },
  {
    id: "leibniz",
    title: "Gottfried Wilhelm Leibniz",
    type: "person",
    era: "17e eeuw",
    year: "1646–1716",
    cost: 8,
    prerequisites: ["descartes", "algebra"],
    description: "Ontwikkelde onafhankelijk calculus en introduceerde de notatie die de moderne calculus sterk heeft beïnvloed.",
    unlockText: "Differentiaal- en integraalrekening krijgen een krachtige symbolische taal."
  },
  {
    id: "calculus",
    title: "Calculus",
    type: "idea",
    era: "17e eeuw",
    year: "17e eeuw",
    cost: 8,
    prerequisites: ["newton", "leibniz"],
    description: "De wiskunde van verandering, limieten, afgeleiden en integralen.",
    unlockText: "De grote brug van eindige veranderingen naar oneindig kleine veranderingen wordt geopend."
  },

  // ─────────────────────────────────────────────────────────────
  // 18e eeuw
  // ─────────────────────────────────────────────────────────────
  {
    id: "de-moivre",
    title: "Abraham de Moivre",
    type: "person",
    era: "18e eeuw",
    year: "1667–1754",
    cost: 5,
    prerequisites: ["kansrekening"],
    description: "Belangrijke bijdragen aan kansrekening en de relatie tussen complexe getallen en goniometrie.",
    unlockText: "Kansrekening en complexe getallen krijgen nieuwe verbindingen."
  },
  {
    id: "euler",
    title: "Leonhard Euler",
    type: "person",
    era: "18e eeuw",
    year: "1707–1783",
    cost: 8,
    prerequisites: ["calculus", "de-moivre"],
    description: "Een centrale figuur in analyse, getaltheorie, complexe getallen, grafentheorie en mechanica.",
    unlockText: "Een groot aantal takken van de wiskunde begint zich rond één uitzonderlijk productieve onderzoeker te verbinden."
  },
  {
    id: "differentiaalvergelijkingen",
    title: "Differentiaalvergelijkingen",
    type: "idea",
    era: "18e eeuw",
    year: "18e eeuw",
    cost: 5,
    prerequisites: ["calculus", "euler"],
    description: "Vergelijkingen waarin een onbekende functie en haar afgeleiden voorkomen.",
    unlockText: "Dynamische processen kunnen rechtstreeks als wiskundige vergelijkingen worden beschreven."
  },
  {
    id: "lagrange",
    title: "Joseph-Louis Lagrange",
    type: "person",
    era: "18e eeuw",
    year: "1736–1813",
    cost: 8,
    prerequisites: ["calculus", "differentiaalvergelijkingen"],
    description: "Belangrijke bijdragen aan variatierekening, analytische mechanica en analyse.",
    unlockText: "Mechanica kan steeds abstracter en systematischer worden geformuleerd."
  },
  {
    id: "laplace",
    title: "Pierre-Simon Laplace",
    type: "person",
    era: "18e–19e eeuw",
    year: "1749–1827",
    cost: 8,
    prerequisites: ["kansrekening", "differentiaalvergelijkingen"],
    description: "Verbindt waarschijnlijkheid, analyse en hemelmechanica.",
    unlockText: "Toeval en deterministische modellen kunnen in één wiskundig kader naast elkaar bestaan."
  },

  // ─────────────────────────────────────────────────────────────
  // 19e eeuw
  // ─────────────────────────────────────────────────────────────
  {
    id: "gauss",
    title: "Carl Friedrich Gauss",
    type: "person",
    era: "19e eeuw",
    year: "1777–1855",
    cost: 8,
    prerequisites: ["fermat", "calculus"],
    description: "Grote bijdragen aan getaltheorie, analyse, geometrie, statistiek en fysische wiskunde.",
    unlockText: "Getaltheorie, geometrie en toegepaste wiskunde blijken steeds nauwer verbonden."
  },
  {
    id: "fourier",
    title: "Joseph Fourier",
    type: "person",
    era: "19e eeuw",
    year: "1768–1830",
    cost: 8,
    prerequisites: ["calculus", "differentiaalvergelijkingen"],
    description: "Ontwikkelde Fourier-reeksen en een nieuwe manier om functies als som van golven te beschrijven.",
    unlockText: "Complexe signalen kunnen worden ontleed in eenvoudige harmonische componenten."
  },
  {
    id: "cauchy",
    title: "Augustin-Louis Cauchy",
    type: "person",
    era: "19e eeuw",
    year: "1789–1857",
    cost: 8,
    prerequisites: ["calculus"],
    description: "Speelde een grote rol in het rigoureuzer maken van de analyse en complexe analyse.",
    unlockText: "Calculus krijgt steeds scherpere definities en bewijsstandaarden."
  },
  {
    id: "galois",
    title: "Évariste Galois",
    type: "person",
    era: "19e eeuw",
    year: "1811–1832",
    cost: 8,
    prerequisites: ["algebra"],
    description: "Legde fundamenten voor de groepentheoretische benadering van algebraïsche vergelijkingen.",
    unlockText: "Symmetrie blijkt een sleutel te zijn tot het begrijpen van algebraïsche structuren."
  },
  {
    id: "niet-euclidische-geometrie",
    title: "Niet-Euclidische geometrie",
    type: "idea",
    era: "19e eeuw",
    year: "19e eeuw",
    cost: 8,
    prerequisites: ["euclides"],
    description: "Geometrieën waarin het parallellenpostulaat van Euclides niet op dezelfde manier geldt.",
    unlockText: "Er blijkt meer dan één consistente meetkundige wereld mogelijk."
  },
  {
    id: "riemann",
    title: "Bernhard Riemann",
    type: "person",
    era: "19e eeuw",
    year: "1826–1866",
    cost: 13,
    prerequisites: ["calculus", "niet-euclidische-geometrie"],
    description: "Vernieuwde analyse en geometrie en introduceerde ideeën die uitmondden in Riemann-geometrie.",
    unlockText: "Meetkunde wordt een theorie van abstracte ruimten en kromming."
  },
  {
    id: "cantor",
    title: "Georg Cantor",
    type: "person",
    era: "19e eeuw",
    year: "1845–1918",
    cost: 13,
    prerequisites: ["bewijs", "priemgetallen"],
    description: "Ontwikkelde de verzamelingenleer en een theorie van verschillende groottes van oneindigheid.",
    unlockText: "Oneindigheid wordt zelf een object dat wiskundig kan worden onderzocht."
  },
  {
    id: "topologie",
    title: "Topologie",
    type: "idea",
    era: "19e–20e eeuw",
    year: null,
    cost: 13,
    prerequisites: ["riemann"],
    description: "Studie van eigenschappen van ruimten die behouden blijven onder continue vervorming.",
    unlockText: "Vorm wordt losgekoppeld van exacte afmetingen en hoeken."
  },

  // ─────────────────────────────────────────────────────────────
  // 20e eeuw / computationele wiskunde
  // ─────────────────────────────────────────────────────────────
  {
    id: "hilbert",
    title: "David Hilbert",
    type: "person",
    era: "20e eeuw",
    year: "1862–1943",
    cost: 13,
    prerequisites: ["cantor", "riemann"],
    description: "Bepalende figuur in de grondslagen, algebra, analyse en formele formulering van wiskundige problemen.",
    unlockText: "De vraag wat wiskunde precies kan bewijzen wordt zelf een onderzoeksgebied."
  },
  {
    id: "noether",
    title: "Emmy Noether",
    type: "person",
    era: "20e eeuw",
    year: "1882–1935",
    cost: 13,
    prerequisites: ["galois", "hilbert"],
    description: "Bracht abstracte algebra en symmetrie naar een nieuw niveau; haar werk verbindt symmetrie met behoudswetten.",
    unlockText: "Symmetrie wordt een structureel principe dat zowel in pure als toegepaste wiskunde verschijnt."
  },
  {
    id: "godel",
    title: "Kurt Gödel",
    type: "person",
    era: "20e eeuw",
    year: "1906–1978",
    cost: 13,
    prerequisites: ["hilbert"],
    description: "Zijn onvolledigheidsstellingen veranderden het begrip van formele axiomasystemen.",
    unlockText: "Er worden fundamentele grenzen zichtbaar aan wat binnen een formeel systeem bewijsbaar kan zijn."
  },
  {
    id: "turing",
    title: "Alan Turing",
    type: "person",
    era: "20e eeuw",
    year: "1912–1954",
    cost: 13,
    prerequisites: ["algoritme", "godel"],
    description: "Formuleerde een fundamenteel model voor berekenbaarheid en droeg bij aan de theoretische basis van computers.",
    unlockText: "Het algoritme wordt een formeel object: wat betekent het dat iets berekenbaar is?"
  },
  {
    id: "formele-bewijzen",
    title: "Formele bewijzen",
    type: "idea",
    era: "20e–21e eeuw",
    year: null,
    cost: 13,
    prerequisites: ["godel", "turing"],
    description: "Wiskundige redeneringen worden vastgelegd in formele systemen die door mensen én machines gecontroleerd kunnen worden.",
    unlockText: "Een bewijs kan niet alleen gelezen maar ook mechanisch gecontroleerd worden."
  },
  {
    id: "ai-wiskunde",
    title: "AI-assisted mathematics",
    type: "breakthrough",
    era: "21e eeuw",
    year: "2020s",
    cost: 21,
    prerequisites: ["formele-bewijzen", "turing", "fourier"],
    description: "AI-systemen worden ingezet voor wiskundig redeneren, bewijs zoeken, formalisering en onderzoek.",
    unlockText: "De computer wordt niet alleen een rekenmachine, maar een partner bij het ontdekken en controleren van wiskundige structuren."
  },
  {
    id: "navier-stokes-ai-2026",
    title: "AI-oplossing Navier–Stokes",
    type: "breakthrough",
    era: "21e eeuw",
    year: "2026",
    cost: 21,
    prerequisites: ["ai-wiskunde", "differentiaalvergelijkingen"],
    description: "Een hedendaagse AI-gerelateerde doorbraak rond het Navier–Stokes existence-and-smoothness problem.",
    unlockText: "Een actuele casus waarin moderne analyse, PDE-theorie, formele verificatie en AI-assisted mathematics samenkomen.",
    note: "Historische status zorgvuldig formuleren: de node beschrijft een in 2026 door OpenAI gepubliceerde AI-oplossing, niet een onafhankelijk door het spel vastgesteld eindpunt."
  }
];

const MATH_NETWORK_EDGES = [
  ["tellen", "getal"],
  ["getal", "natuurlijke-getallen"],
  ["natuurlijke-getallen", "nul"],
  ["natuurlijke-getallen", "plaatswaarde"],
  ["getal", "breuken"],
  ["nul", "negatieve-getallen"],
  ["nul", "brahmagupta"],
  ["negatieve-getallen", "brahmagupta"],
  ["pythagoras", "bewijs"],
  ["bewijs", "euclides"],
  ["euclides", "priemgetallen"],
  ["euclides", "archimedes"],
  ["euclides", "kegelsneden"],
  ["plaatswaarde", "al-khwarizmi"],
  ["breuken", "al-khwarizmi"],
  ["al-khwarizmi", "algoritme"],
  ["al-khwarizmi", "algebra"],
  ["plaatswaarde", "fibonacci"],
  ["al-khwarizmi", "fibonacci"],
  ["algebra", "descartes"],
  ["euclides", "descartes"],
  ["priemgetallen", "fermat"],
  ["algebra", "fermat"],
  ["algebra", "pascal"],
  ["fibonacci", "pascal"],
  ["pascal", "kansrekening"],
  ["fermat", "kansrekening"],
  ["descartes", "newton"],
  ["algebra", "newton"],
  ["kegelsneden", "newton"],
  ["descartes", "leibniz"],
  ["algebra", "leibniz"],
  ["newton", "calculus"],
  ["leibniz", "calculus"],
  ["kansrekening", "de-moivre"],
  ["calculus", "euler"],
  ["de-moivre", "euler"],
  ["calculus", "differentiaalvergelijkingen"],
  ["euler", "differentiaalvergelijkingen"],
  ["calculus", "lagrange"],
  ["differentiaalvergelijkingen", "lagrange"],
  ["kansrekening", "laplace"],
  ["differentiaalvergelijkingen", "laplace"],
  ["fermat", "gauss"],
  ["calculus", "gauss"],
  ["calculus", "fourier"],
  ["differentiaalvergelijkingen", "fourier"],
  ["calculus", "cauchy"],
  ["algebra", "galois"],
  ["euclides", "niet-euclidische-geometrie"],
  ["calculus", "riemann"],
  ["niet-euclidische-geometrie", "riemann"],
  ["bewijs", "cantor"],
  ["priemgetallen", "cantor"],
  ["riemann", "topologie"],
  ["cantor", "hilbert"],
  ["riemann", "hilbert"],
  ["galois", "noether"],
  ["hilbert", "noether"],
  ["hilbert", "godel"],
  ["algoritme", "turing"],
  ["godel", "turing"],
  ["godel", "formele-bewijzen"],
  ["turing", "formele-bewijzen"],
  ["formele-bewijzen", "ai-wiskunde"],
  ["turing", "ai-wiskunde"],
  ["fourier", "ai-wiskunde"],
  ["ai-wiskunde", "navier-stokes-ai-2026"],
  ["differentiaalvergelijkingen", "navier-stokes-ai-2026"]
];

const MATH_NETWORK_TYPE_LABELS = {
  person: "Persoon",
  idea: "Idee",
  work: "Werk",
  problem: "Probleem",
  breakthrough: "Doorbraak"
};

const MATH_NETWORK_TYPE_SYMBOLS = {
  person: "👤",
  idea: "◆",
  work: "📜",
  problem: "❓",
  breakthrough: "✦"
};

function mathNetworkProgress() {
  return (typeof store !== "undefined" && store.getState) ? store.getState() : {};
}

function mathNetworkIsAdmin() {
  return Boolean(mathNetworkProgress().admin);
}

function mathNetworkInsightScore() {
  return Number(mathNetworkProgress().inzicht || 0);
}

function mathNetworkUnlocked(id) {
  if (mathNetworkIsAdmin()) return true;
  const state = mathNetworkProgress();
  return Boolean(state.mathNetworkUnlocked && state.mathNetworkUnlocked[id]);
}

function mathNetworkPrerequisitesMet(node) {
  return (node.prerequisites || []).every(mathNetworkUnlocked);
}

function mathNetworkCanUnlock(node) {
  if (mathNetworkUnlocked(node.id)) return false;
  return mathNetworkInsightScore() >= Number(node.cost || 0)
    && mathNetworkPrerequisitesMet(node);
}

function mathNetworkUnlock(id) {
  const node = MATH_NETWORK_NODES.find(n => n.id === id);
  if (!node || mathNetworkUnlocked(id) || !mathNetworkCanUnlock(node)) return false;

  if (typeof store === "undefined" || !store.dispatch) return false;

  // BELANGRIJK: er wordt geen INZICHT-punt afgetrokken.
  // De bestaande inzichtscore blijft dus een cumulatieve score.
  store.dispatch({
    type: "UNLOCK_MATH_NETWORK_NODE",
    payload: id
  });

  return true;
}

function mathNetworkNodeById(id) {
  return MATH_NETWORK_NODES.find(n => n.id === id) || null;
}

function mathNetworkConnectedEdges() {
  return MATH_NETWORK_EDGES.filter(([a, b]) => mathNetworkNodeById(a) && mathNetworkNodeById(b));
}

const MATH_NETWORK_VIEW = { width: 1480, height: 2200 };
const MATH_NETWORK_GRID = { originX: 130, originY: 96, colW: 160, rowH: 132 };
const MATH_NETWORK_CAMERA = { x: 0, y: 0, scale: 1 };
const MATH_NETWORK_ZOOM = { min: 0.5, max: 1.85, step: 0.15 };
let MATH_NETWORK_OPEN_ID = null;

function mathNetworkGrid(col, row) {
  return [
    MATH_NETWORK_GRID.originX + col * MATH_NETWORK_GRID.colW,
    MATH_NETWORK_GRID.originY + row * MATH_NETWORK_GRID.rowH
  ];
}

function mathNetworkLayout() {
  /*
   * Top-down vertakking: vroege ideeën boven, latere takken onder.
   * Coördinaten zijn pixels in MATH_NETWORK_VIEW.
   * col = horizontale tak, row = diepte / periode.
   */
  const g = mathNetworkGrid;
  const positions = {
    "tellen": g(4, 0),
    "getal": g(4, 1),
    "natuurlijke-getallen": g(2, 2),
    "breuken": g(6, 2),
    "nul": g(1, 3),
    "plaatswaarde": g(3, 3),
    "pythagoras": g(6, 3),
    "negatieve-getallen": g(1, 4),
    "al-khwarizmi": g(3, 4),
    "bewijs": g(6, 4),
    "brahmagupta": g(0, 5),
    "algoritme": g(2, 5),
    "algebra": g(4, 5),
    "fibonacci": g(5, 5),
    "euclides": g(7, 5),
    "pascal": g(3, 6),
    "descartes": g(4, 6),
    "fermat": g(5, 6),
    "priemgetallen": g(6, 6),
    "archimedes": g(7, 6),
    "kegelsneden": g(8, 6),
    "kansrekening": g(3, 7),
    "newton": g(5, 7),
    "leibniz": g(7, 7),
    "de-moivre": g(2, 8),
    "calculus": g(6, 8),
    "lagrange": g(3, 9),
    "euler": g(5, 9),
    "differentiaalvergelijkingen": g(7, 9),
    "niet-euclidische-geometrie": g(8, 9),
    "galois": g(1, 10),
    "laplace": g(3, 10),
    "gauss": g(5, 10),
    "fourier": g(6, 10),
    "cauchy": g(8, 10),
    "cantor": g(1, 11),
    "riemann": g(6, 11),
    "hilbert": g(2, 12),
    "topologie": g(5, 12),
    "noether": g(3, 13),
    "godel": g(5, 13),
    "turing": g(4, 14),
    "formele-bewijzen": g(6, 14),
    "ai-wiskunde": g(5, 15),
    "navier-stokes-ai-2026": g(7, 15)
  };

  MATH_NETWORK_NODES.forEach((node, index) => {
    if (!positions[node.id]) {
      positions[node.id] = g(index % 8, 16 + Math.floor(index / 8));
    }
  });
  return positions;
}

const MATH_NETWORK_SHORT_TITLES = {
  "natuurlijke-getallen": "Natuurlijke\ngetallen",
  "negatieve-getallen": "Negatieve\ngetallen",
  "plaatswaarde": "Plaatswaarde",
  "niet-euclidische-geometrie": "Niet-Euclidische\ngeometrie",
  "differentiaalvergelijkingen": "Differentiaal-\nvergelijkingen",
  "formele-bewijzen": "Formele bewijzen",
  "ai-wiskunde": "AI-wiskunde",
  "navier-stokes-ai-2026": "Navier–Stokes AI",
  "de-moivre": "De Moivre",
  "leibniz": "G.W. Leibniz",
  "descartes": "Descartes",
  "al-khwarizmi": "Al-Khwarizmi"
};

function mathNetworkEsc(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function mathNetworkMapTitle(node) {
  if (!node) return "";
  return MATH_NETWORK_SHORT_TITLES[node.id] || node.title || "";
}

function mathNetworkWrapTitle(title) {
  const t = String(title || "");
  if (t.includes("\n")) return t.split("\n").filter(Boolean).slice(0, 2);
  if (t.length <= 15) return [t];
  const dash = t.indexOf("-");
  if (dash >= 5 && dash <= t.length - 4) {
    return [t.slice(0, dash), t.slice(dash + 1)];
  }
  const mid = Math.ceil(t.length / 2);
  let space = t.lastIndexOf(" ", mid + 5);
  if (space < 5) space = t.indexOf(" ", 5);
  if (space >= 5 && space < t.length - 2) {
    return [t.slice(0, space), t.slice(space + 1)];
  }
  return [t];
}

function mathNetworkLabelWidth(lines) {
  const longest = lines.reduce((n, line) => Math.max(n, line.length), 0);
  return Math.min(168, Math.max(76, longest * 7.1 + 20));
}

function mathNetworkNodeState(node) {
  if (mathNetworkIsAdmin()) return "admin";
  if (mathNetworkUnlocked(node.id)) return "unlocked";
  if (mathNetworkCanUnlock(node)) return "available";
  return "locked";
}

function mathNetworkInjectStyles() {
  const existing = document.getElementById("math-network-styles");
  if (existing) existing.remove();

  const style = document.createElement("style");
  style.id = "math-network-styles";
  style.textContent = `
    .math-network-panel {
      position: relative;
      overflow: hidden;
    }
    .math-network-head {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }
    .math-network-score {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--gold);
      border-radius: 999px;
      padding: 8px 14px;
      background: rgba(0,0,0,.3);
      white-space: nowrap;
    }
    .math-network-score img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
    .math-network-canvas {
      position: relative;
      width: 100%;
      overflow: hidden;
      border: 1px solid rgba(230,199,122,.22);
      border-radius: 16px;
      background:
        radial-gradient(circle at 50% 18%, rgba(230,199,122,.08), transparent 42%),
        linear-gradient(180deg, rgba(18,14,10,.2), rgba(5,4,3,.55));
      height: min(72vh, 760px);
      cursor: grab;
      user-select: none;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      touch-action: none;
    }
    .math-network-canvas.is-panning {
      cursor: grabbing;
    }
    .math-network-canvas,
    .math-network-canvas * {
      user-select: none;
      -webkit-user-select: none;
    }
    .math-network-svg {
      display: block;
      width: ${MATH_NETWORK_VIEW.width}px;
      height: ${MATH_NETWORK_VIEW.height}px;
      transform-origin: 0 0;
      pointer-events: auto;
    }
    .math-network-zoom {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 4;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .math-network-zoom button {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      border: 1px solid rgba(230,199,122,.45);
      background: rgba(12,9,6,.82);
      color: #f4ead3;
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
    }
    .math-network-zoom button:hover {
      border-color: var(--gold);
      color: #fff6d8;
    }
    .math-network-region {
      fill: #cbb98a;
      fill-opacity: .28;
      font-family: Cinzel, "Times New Roman", serif;
      font-size: 11px;
      letter-spacing: .18em;
      text-anchor: middle;
      pointer-events: none;
    }
    .math-network-edge {
      stroke: rgba(230,199,122,.18);
      stroke-width: 1.35;
      fill: none;
      vector-effect: non-scaling-stroke;
    }
    .math-network-edge.edge-unlocked {
      stroke: rgba(230,199,122,.58);
      stroke-width: 2;
    }
    .math-network-edge.edge-focus {
      stroke: rgba(246,220,150,.92);
      stroke-width: 2.4;
    }
    .math-network-node {
      cursor: pointer;
    }
    .math-network-node .node-hit {
      fill: transparent;
      stroke: none;
    }
    .math-network-node .node-core {
      stroke-width: 2;
      vector-effect: non-scaling-stroke;
    }
    .math-network-node .node-ring {
      fill: none;
      stroke-width: 1.25;
      stroke: transparent;
      vector-effect: non-scaling-stroke;
    }
    .math-network-node.locked .node-core {
      fill: #161310;
      stroke: #5a513f;
    }
    .math-network-node.available .node-core {
      fill: #2c2312;
      stroke: var(--gold);
      filter: drop-shadow(0 0 7px rgba(230,199,122,.32));
    }
    .math-network-node.unlocked .node-core {
      fill: #4a3918;
      stroke: #f0d48a;
      filter: drop-shadow(0 0 10px rgba(230,199,122,.45));
    }
    .math-network-node.admin .node-core {
      fill: #263c2e;
      stroke: var(--good);
    }
    .math-network-node.selected .node-ring {
      stroke: #f6de9a;
    }
    .math-network-node.selected .node-core {
      filter: drop-shadow(0 0 12px rgba(230,199,122,.62));
    }
    .math-network-node .node-symbol {
      pointer-events: none;
      fill: #f4ead3;
      font-family: "Source Sans 3", system-ui, sans-serif;
      font-size: 16px;
      font-weight: 700;
      text-anchor: middle;
    }
    .math-network-node.locked .node-symbol {
      fill: #9a8d74;
    }
    .math-network-node .node-pill {
      fill: rgba(8,6,4,.82);
      stroke: rgba(230,199,122,.22);
      stroke-width: 1;
    }
    .math-network-node.unlocked .node-pill,
    .math-network-node.available .node-pill {
      stroke: rgba(230,199,122,.4);
    }
    .math-network-node .node-label,
    .math-network-node .node-cost {
      pointer-events: none;
      fill: #f4ead3;
      font-family: "Source Sans 3", system-ui, sans-serif;
      font-size: 11px;
      font-weight: 650;
      text-anchor: middle;
    }
    .math-network-node.locked .node-label {
      fill: #b3a68a;
    }
    .math-network-node .node-cost {
      font-size: 10px;
      font-weight: 700;
      fill: var(--gold);
    }
    .math-network-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
      color: #cbb98a;
      font-size: 13px;
      margin-top: 12px;
    }
    .math-network-legend span {
      white-space: nowrap;
    }
    .math-network-legend .swatch {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 6px;
      vertical-align: middle;
      border: 1px solid rgba(230,199,122,.45);
    }
    .math-network-legend .swatch.open { background: #4a3918; }
    .math-network-legend .swatch.ready { background: #2c2312; box-shadow: 0 0 0 1px #e6c77a; }
    .math-network-legend .swatch.shut { background: #161310; }
    .math-network-notice {
      margin-top: 10px;
      color: #cbb98a;
      font-size: 13px;
    }
    .math-network-float {
      position: absolute;
      z-index: 5;
      width: min(340px, calc(100% - 24px));
      max-height: calc(100% - 24px);
      overflow: auto;
      border: 1px solid rgba(230,199,122,.38);
      border-radius: 16px;
      padding: 14px 14px 12px;
      background: rgba(10,8,6,.94);
      box-shadow: 0 16px 40px rgba(0,0,0,.45);
      pointer-events: auto;
    }
    .math-network-float[hidden] { display: none; }
    .math-network-float-close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 28px;
      height: 28px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: #cbb98a;
      font-size: 18px;
      cursor: pointer;
    }
    .inzicht-ico {
      width: 15px;
      height: 15px;
      object-fit: contain;
      vertical-align: -3px;
      margin: 0 3px;
    }
    .math-network-detail { display: none; }
    .math-network-detail-card {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .math-network-tile {
      flex: 0 0 88px;
      width: 88px;
      height: 88px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #f4ead3;
      background:
        radial-gradient(circle at 30% 25%, rgba(230,199,122,.22), transparent 55%),
        #1a1610;
      border: 1px solid rgba(230,199,122,.35);
    }
    .math-network-tile.type-person { background: radial-gradient(circle at 30% 25%, rgba(230,199,122,.2), transparent 55%), #241c12; }
    .math-network-tile.type-idea { background: radial-gradient(circle at 30% 25%, rgba(230,199,122,.2), transparent 55%), #1b1711; }
    .math-network-tile.type-breakthrough { background: radial-gradient(circle at 30% 25%, rgba(230,199,122,.28), transparent 55%), #2a1f10; }
    .math-network-detail-body { min-width: 0; flex: 1; }
    .math-network-detail h3 {
      margin: 0 0 8px;
    }
    .math-network-meta {
      color: #cbb98a;
      font-size: 13px;
      letter-spacing: .02em;
      margin-bottom: 8px;
      text-transform: none;
    }
    .math-network-kvs {
      margin: 0 0 10px;
      padding: 0;
      list-style: none;
      color: #e8dcc0;
      font-size: 14px;
    }
    .math-network-kvs li { margin: 3px 0; }
    .math-network-kvs strong {
      display: inline-block;
      min-width: 7.5rem;
      color: #cbb98a;
      font-weight: 650;
    }
    .math-network-prereqs {
      color: #cbb98a;
      font-size: 14px;
      margin: 8px 0;
    }
    .math-network-detail .btn { margin-top: 8px; }
    .math-network-threshold {
      display: block;
      margin-top: 6px;
      color: #cbb98a;
      font-size: 13px;
    }
    @media (max-width: 720px) {
      .math-network-detail-card { display: block; }
      .math-network-tile { margin-bottom: 12px; }
    }
  `;
  document.head.appendChild(style);
}

const MATH_NETWORK_REGION_LABELS = [
  { text: "OORSPRONG", col: 4, row: -0.42 },
  { text: "GETALLEN", col: 2, row: 1.58 },
  { text: "GRIEKEN", col: 6.4, row: 2.58 },
  { text: "ALGEBRA", col: 3.2, row: 3.58 },
  { text: "CALCULUS", col: 6, row: 7.58 },
  { text: "GRONDSLAGEN", col: 3.5, row: 11.58 }
];

function mathNetworkNodeSvg(node, pos, selectedId) {
  const [x, y] = pos;
  const state = mathNetworkNodeState(node);
  const selected = selectedId === node.id ? " selected" : "";
  const symbol = MATH_NETWORK_TYPE_SYMBOLS[node.type] || "◆";
  const lines = mathNetworkWrapTitle(mathNetworkMapTitle(node));
  const admin = mathNetworkIsAdmin();
  const pillW = Math.max(mathNetworkLabelWidth(lines), 78);
  const pillH = 18 + lines.length * 13 + 14;
  const pillY = 32;
  const costY = pillY + 14 + lines.length * 13 + 2;
  const showCost = !mathNetworkUnlocked(node.id) && !admin;
  const costMark = showCost
    ? `<text class="node-cost" x="-8" y="${costY}" text-anchor="end">${Number(node.cost || 0)}</text>
       <image href="assets/inzicht.png" x="-6" y="${costY - 10}" width="13" height="13"></image>`
    : `<text class="node-cost" y="${costY}">✓</text>`;

  const labelTs = lines.map((line, i) => {
    const ly = pillY + 14 + i * 13;
    return `<text class="node-label" y="${ly}">${mathNetworkEsc(line)}</text>`;
  }).join("");

  return `
    <g class="math-network-node ${state}${selected}" data-network-node="${mathNetworkEsc(node.id)}"
       transform="translate(${x},${y})">
      <circle class="node-hit" r="52"></circle>
      <circle class="node-ring" r="34"></circle>
      <circle class="node-core" r="24"></circle>
      <text class="node-symbol" y="5">${mathNetworkEsc(symbol)}</text>
      <rect class="node-pill" x="${-pillW / 2}" y="${pillY}" width="${pillW}" height="${pillH}" rx="12"></rect>
      ${labelTs}
      ${costMark}
    </g>
  `;
}

function mathNetworkMarkSelected(nodeId) {
  document.querySelectorAll(".math-network-node").forEach((el) => {
    el.classList.toggle("selected", el.getAttribute("data-network-node") === nodeId);
  });
  document.querySelectorAll(".math-network-edge").forEach((el) => {
    const a = el.getAttribute("data-from");
    const b = el.getAttribute("data-to");
    el.classList.toggle("edge-focus", Boolean(nodeId) && (a === nodeId || b === nodeId));
  });
}

function mathNetworkInzichtIco() {
  return '<img class="inzicht-ico" src="assets/inzicht.png" alt="">';
}

function mathNetworkPlaceFloat() {
  const host = document.getElementById("math-network-float");
  const canvas = document.querySelector(".math-network-canvas");
  if (!host || !canvas || !MATH_NETWORK_OPEN_ID) return;
  const pos = mathNetworkLayout()[MATH_NETWORK_OPEN_ID];
  if (!pos) return;
  const scale = MATH_NETWORK_CAMERA.scale;
  const sx = MATH_NETWORK_CAMERA.x + pos[0] * scale;
  const sy = MATH_NETWORK_CAMERA.y + pos[1] * scale;
  const box = canvas.getBoundingClientRect();
  const cardW = Math.min(340, box.width - 24);
  const cardH = host.offsetHeight || 220;
  const gap = 42 * scale;
  let left = sx + gap;
  if (left + cardW > box.width - 12) left = sx - gap - cardW;
  left = Math.max(12, Math.min(left, box.width - cardW - 12));
  let top = sy - 28;
  top = Math.max(12, Math.min(top, box.height - cardH - 12));
  host.style.left = left + "px";
  host.style.top = top + "px";
}

function mathNetworkRenderDetail(nodeId) {
  const host = document.getElementById("math-network-float");
  if (!host) return;

  if (!nodeId) {
    MATH_NETWORK_OPEN_ID = null;
    host.hidden = true;
    host.innerHTML = "";
    mathNetworkMarkSelected(null);
    return;
  }

  MATH_NETWORK_OPEN_ID = nodeId;
  mathNetworkMarkSelected(nodeId);

  const node = mathNetworkNodeById(nodeId);
  if (!node) {
    host.hidden = true;
    return;
  }

  const unlocked = mathNetworkUnlocked(node.id);
  const admin = mathNetworkIsAdmin();
  const can = mathNetworkCanUnlock(node);
  const prereqs = (node.prerequisites || []).map(mathNetworkNodeById).filter(Boolean);
  const cost = Number(node.cost || 0);
  const need = Math.max(0, cost - mathNetworkInsightScore());
  const typeLabel = MATH_NETWORK_TYPE_LABELS[node.type] || node.type;
  const symbol = MATH_NETWORK_TYPE_SYMBOLS[node.type] || "◆";

  let action = "";
  if (unlocked || admin) {
    action = '<span class="status done">Ontgrendeld</span>';
  } else if (can) {
    action = `<button class="btn primary" data-math-network-unlock="${mathNetworkEsc(node.id)}">
      Ontgrendel
    </button>
    <span class="math-network-threshold">Drempel: ${mathNetworkInzichtIco()}${cost} — je score daalt niet.</span>`;
  } else {
    const missing = prereqs.filter((p) => !mathNetworkUnlocked(p.id));
    const missingText = missing.length
      ? "Vereist eerst: " + missing.map((p) => p.title).join(", ") + "."
      : (need
          ? "Nog " + need + " " + "inzichtpunt" + (need === 1 ? "" : "en") + " nodig."
          : "Nog niet beschikbaar.");
    action = `<span class="status locked">${mathNetworkEsc(missingText)}</span>
    <span class="math-network-threshold">Drempel: ${mathNetworkInzichtIco()}${cost} — je score daalt niet.</span>`;
  }

  const open = unlocked || admin;

  host.hidden = false;
  host.innerHTML = `
    <button type="button" class="math-network-float-close" data-network-close="1" aria-label="Sluiten">×</button>
    <div class="math-network-detail-card">
      <div class="math-network-tile type-${mathNetworkEsc(node.type || "idea")}" aria-hidden="true">${mathNetworkEsc(symbol)}</div>
      <div class="math-network-detail-body">
        <div class="math-network-meta">${mathNetworkEsc(typeLabel)}${node.year ? " · " + mathNetworkEsc(node.year) : ""}${node.era ? " · " + mathNetworkEsc(node.era) : ""}</div>
        <h3>${mathNetworkEsc(node.title)}</h3>
        ${open
          ? `<ul class="math-network-kvs">
               <li><strong>Idee</strong> ${mathNetworkEsc(node.description || "")}</li>
               <li><strong>Waarom het telt</strong> ${mathNetworkEsc(node.unlockText || "")}</li>
             </ul>`
          : `<p>Dit knooppunt is nog niet ontgrendeld.</p>
             <p class="small">De historische beschrijving verschijnt na het ontgrendelen.</p>`
        }
        ${prereqs.length
          ? `<div class="math-network-prereqs"><strong>Voorwaarden:</strong> ${prereqs.map((p) => mathNetworkEsc(p.title)).join(" · ")}</div>`
          : ""
        }
        ${node.note && open ? `<p class="small">${mathNetworkEsc(node.note)}</p>` : ""}
        ${action}
      </div>
    </div>
  `;
  const closeBtn = host.querySelector("[data-network-close]");
  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      mathNetworkRenderDetail(null);
    });
  }
  mathNetworkPlaceFloat();
}

function mathNetworkApplyCamera() {
  const svg = document.querySelector(".math-network-svg");
  if (!svg) return;
  const c = MATH_NETWORK_CAMERA;
  svg.style.transform = "translate(" + c.x + "px," + c.y + "px) scale(" + c.scale + ")";
  mathNetworkPlaceFloat();
}

function mathNetworkZoomBy(direction) {
  const canvas = document.querySelector(".math-network-canvas");
  const old = MATH_NETWORK_CAMERA.scale;
  if (direction === "reset") {
    MATH_NETWORK_CAMERA.x = 0;
    MATH_NETWORK_CAMERA.y = 0;
    MATH_NETWORK_CAMERA.scale = 1;
    mathNetworkApplyCamera();
    return;
  }
  const delta = direction === "in" ? MATH_NETWORK_ZOOM.step : -MATH_NETWORK_ZOOM.step;
  const next = Math.min(MATH_NETWORK_ZOOM.max, Math.max(MATH_NETWORK_ZOOM.min, old + delta));
  if (next === old) return;
  const rect = canvas ? canvas.getBoundingClientRect() : { width: 800, height: 600 };
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const worldX = (cx - MATH_NETWORK_CAMERA.x) / old;
  const worldY = (cy - MATH_NETWORK_CAMERA.y) / old;
  MATH_NETWORK_CAMERA.scale = next;
  MATH_NETWORK_CAMERA.x = cx - worldX * next;
  MATH_NETWORK_CAMERA.y = cy - worldY * next;
  mathNetworkApplyCamera();
}

function mathNetworkBindPanZoom() {
  const canvas = document.querySelector(".math-network-canvas");
  if (!canvas || canvas.dataset.panBound === "1") return;
  canvas.dataset.panBound = "1";
  mathNetworkApplyCamera();

  let dragging = false;
  let moved = false;
  let lastX = 0;
  let lastY = 0;
  let nodeId = null;

  canvas.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  canvas.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

  canvas.addEventListener("pointerdown", function (e) {
    if (e.target.closest("[data-network-zoom]")) return;
    if (e.target.closest("#math-network-float")) return;
    if (e.button != null && e.button !== 0) return;
    dragging = true;
    moved = false;
    lastX = e.clientX;
    lastY = e.clientY;
    const node = e.target.closest("[data-network-node]");
    nodeId = node ? node.getAttribute("data-network-node") : null;
    canvas.classList.add("is-panning");
    if (canvas.setPointerCapture) canvas.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  canvas.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
    lastX = e.clientX;
    lastY = e.clientY;
    MATH_NETWORK_CAMERA.x += dx;
    MATH_NETWORK_CAMERA.y += dy;
    mathNetworkApplyCamera();
    e.preventDefault();
  });

  function endPan(e) {
    if (!dragging) return;
    dragging = false;
    canvas.classList.remove("is-panning");
    if (canvas.releasePointerCapture && e && e.pointerId != null) {
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    }
    if (!moved && nodeId) mathNetworkRenderDetail(nodeId);
    else if (!moved && !nodeId) mathNetworkRenderDetail(null);
    nodeId = null;
  }

  canvas.addEventListener("pointerup", endPan);
  canvas.addEventListener("pointercancel", endPan);
  canvas.addEventListener("pointerleave", function (e) {
    if (dragging && e.buttons === 0) endPan(e);
  });

  canvas.querySelectorAll("[data-network-zoom]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      mathNetworkZoomBy(btn.getAttribute("data-network-zoom"));
    });
  });
}

function mathNetworkRender(selectedNodeId) {
  mathNetworkInjectStyles();

  const app = document.getElementById("app");
  if (!app) return;

  const positions = mathNetworkLayout();

  const regionSvg = MATH_NETWORK_REGION_LABELS.map((r) => {
    const [x, y] = mathNetworkGrid(r.col, r.row);
    return `<text class="math-network-region" x="${x}" y="${y}">${mathNetworkEsc(r.text)}</text>`;
  }).join("");

  const edgeSvg = mathNetworkConnectedEdges().map(([a, b]) => {
    const pa = positions[a];
    const pb = positions[b];
    if (!pa || !pb) return "";
    const unlocked = mathNetworkUnlocked(a) && mathNetworkUnlocked(b);
    const focus = selectedNodeId && (selectedNodeId === a || selectedNodeId === b);
    return `<line class="math-network-edge${unlocked ? " edge-unlocked" : ""}${focus ? " edge-focus" : ""}"
      data-from="${mathNetworkEsc(a)}" data-to="${mathNetworkEsc(b)}"
      x1="${pa[0]}" y1="${pa[1]}"
      x2="${pb[0]}" y2="${pb[1]}"></line>`;
  }).join("");

  const nodeSvg = MATH_NETWORK_NODES.map((n) => mathNetworkNodeSvg(n, positions[n.id], selectedNodeId)).join("");

  app.innerHTML = `
    <div class="screen" style="background-image:url('assets/home.png')">
      ${typeof topbar === "function" ? topbar() : ""}
      <div class="layout">
        <div class="panel math-network-panel">
          <div class="math-network-head">
            <div>
              <h1>Historisch Wiskunde Netwerk</h1>
              <p>
                Ontdek hoe ideeën, personen en doorbraken in de geschiedenis
                van de wiskunde met elkaar verbonden zijn.
              </p>
            </div>
            <div class="math-network-score">
              <img src="assets/inzicht.png" alt="">
              <strong>${mathNetworkInsightScore()}</strong>
              <span>Inzichtpunten</span>
            </div>
          </div>

          <div class="math-network-canvas">
            <div class="math-network-zoom">
              <button type="button" data-network-zoom="in" title="Zoom in">+</button>
              <button type="button" data-network-zoom="out" title="Zoom uit">−</button>
              <button type="button" data-network-zoom="reset" title="Reset weergave">↺</button>
            </div>
            <svg class="math-network-svg" viewBox="0 0 ${MATH_NETWORK_VIEW.width} ${MATH_NETWORK_VIEW.height}"
                 role="img" aria-label="Historisch netwerk van wiskundige kennis">
              <g class="math-network-regions">${regionSvg}</g>
              <g class="math-network-edges">${edgeSvg}</g>
              <g class="math-network-nodes">${nodeSvg}</g>
            </svg>
            <div id="math-network-float" class="math-network-float" hidden></div>
          </div>

          <div class="math-network-legend">
            <span><i class="swatch open"></i>Ontgrendeld</span>
            <span><i class="swatch ready"></i>Beschikbaar</span>
            <span><i class="swatch shut"></i>Vergrendeld</span>
            <span>👤 Persoon</span>
            <span>◆ Idee</span>
            <span>📜 Werk</span>
            <span>❓ Probleem</span>
            <span>✦ Doorbraak</span>
          </div>

          <div class="math-network-notice">
            Inzichtpunten zijn een drempel, geen munt. Ontgrendelen houdt je score gelijk.
          </div>
        </div>
      </div>
    </div>
  `;

  mathNetworkBindPanZoom();

  if (selectedNodeId) {
    mathNetworkRenderDetail(selectedNodeId);
  }
}

window.mathNetworkRender = mathNetworkRender;
window.mathNetworkUnlock = mathNetworkUnlock;
