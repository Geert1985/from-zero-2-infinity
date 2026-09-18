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

function mathNetworkLayout() {
  /*
   * Vaste posities maken de eerste versie voorspelbaar en eenvoudig aanpasbaar.
   * x/y zijn percentages van de SVG-viewBox.
   *
   * Bij uitbreiding:
   * 1. voeg een node toe;
   * 2. voeg indien gewenst x/y toe in MATH_NETWORK_POSITIONS;
   * 3. zonder positie krijgt de node automatisch een rasterpositie.
   */
  const positions = {
    "tellen": [8, 12],
    "getal": [18, 12],
    "natuurlijke-getallen": [29, 12],
    "nul": [39, 8],
    "plaatswaarde": [39, 18],
    "breuken": [18, 27],
    "negatieve-getallen": [50, 8],
    "pythagoras": [29, 34],
    "bewijs": [40, 34],
    "euclides": [51, 34],
    "priemgetallen": [62, 27],
    "archimedes": [62, 41],
    "kegelsneden": [62, 50],
    "brahmagupta": [61, 8],
    "al-khwarizmi": [50, 18],
    "algoritme": [61, 18],
    "algebra": [50, 27],
    "fibonacci": [73, 18],
    "descartes": [61, 58],
    "fermat": [73, 27],
    "pascal": [73, 38],
    "kansrekening": [84, 32],
    "newton": [73, 57],
    "leibniz": [84, 51],
    "calculus": [84, 62],
    "de-moivre": [84, 20],
    "euler": [84, 72],
    "differentiaalvergelijkingen": [72, 72],
    "lagrange": [61, 70],
    "laplace": [94, 40],
    "gauss": [94, 53],
    "fourier": [94, 64],
    "cauchy": [94, 75],
    "galois": [50, 47],
    "niet-euclidische-geometrie": [39, 50],
    "riemann": [39, 62],
    "cantor": [28, 60],
    "topologie": [28, 72],
    "hilbert": [28, 82],
    "noether": [39, 82],
    "godel": [50, 82],
    "turing": [61, 88],
    "formele-bewijzen": [73, 88],
    "ai-wiskunde": [84, 88],
    "navier-stokes-ai-2026": [95, 88]
  };

  const fallback = [];
  MATH_NETWORK_NODES.forEach((node, index) => {
    if (!positions[node.id]) {
      const col = index % 8;
      const row = Math.floor(index / 8);
      fallback.push([node.id, [8 + col * 12, 12 + row * 12]]);
    }
  });

  fallback.forEach(([id, pos]) => { positions[id] = pos; });
  return positions;
}

function mathNetworkEsc(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function mathNetworkInjectStyles() {
  if (document.getElementById("math-network-styles")) return;

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
      width: 100%;
      overflow: auto;
      border: 1px solid rgba(230,199,122,.2);
      border-radius: 16px;
      background:
        radial-gradient(circle at center, rgba(230,199,122,.07), transparent 55%),
        rgba(5,4,3,.72);
      min-height: 620px;
    }
    .math-network-svg {
      display: block;
      width: 1200px;
      min-width: 100%;
      height: 760px;
    }
    .math-network-edge {
      stroke: rgba(230,199,122,.25);
      stroke-width: 1.4;
      vector-effect: non-scaling-stroke;
    }
    .math-network-edge.edge-unlocked {
      stroke: rgba(230,199,122,.62);
      stroke-width: 2;
    }
    .math-network-node {
      cursor: pointer;
    }
    .math-network-node circle {
      stroke: rgba(230,199,122,.65);
      stroke-width: 2;
      vector-effect: non-scaling-stroke;
    }
    .math-network-node.locked circle {
      fill: #191612;
      stroke: #5b513f;
    }
    .math-network-node.available circle {
      fill: #302512;
      stroke: var(--gold);
      filter: drop-shadow(0 0 6px rgba(230,199,122,.25));
    }
    .math-network-node.unlocked circle {
      fill: #3b2d18;
      stroke: var(--gold);
      filter: drop-shadow(0 0 9px rgba(230,199,122,.42));
    }
    .math-network-node.admin circle {
      fill: #263c2e;
      stroke: var(--good);
    }
    .math-network-node text {
      pointer-events: none;
      fill: #f4ead3;
      font-family: "Source Sans 3", system-ui, sans-serif;
      font-size: 13px;
      font-weight: 600;
      text-anchor: middle;
    }
    .math-network-node .node-symbol {
      font-size: 18px;
    }
    .math-network-node.locked text {
      fill: #8f836e;
    }
    .math-network-node .node-cost {
      font-size: 10px;
      fill: var(--gold);
      font-weight: 700;
    }
    .math-network-detail {
      margin-top: 16px;
      min-height: 170px;
      border: 1px solid rgba(230,199,122,.28);
      border-radius: 16px;
      padding: 18px;
      background: rgba(0,0,0,.24);
    }
    .math-network-detail h3 {
      margin-bottom: 6px;
    }
    .math-network-meta {
      color: #cbb98a;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .math-network-prereqs {
      color: #cbb98a;
      font-size: 14px;
      margin: 8px 0;
    }
    .math-network-detail .btn {
      margin-top: 8px;
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
    .math-network-notice {
      margin-top: 10px;
      color: #cbb98a;
      font-size: 13px;
    }
  `;
  document.head.appendChild(style);
}

function mathNetworkNodeSvg(node, pos) {
  const [x, y] = pos;
  const state = mathNetworkUnlocked(node.id) ? "unlocked"
    : mathNetworkCanUnlock(node) ? "available"
    : "locked";
  const admin = mathNetworkIsAdmin();
  const stateClass = admin ? "admin" : state;
  const symbol = MATH_NETWORK_TYPE_SYMBOLS[node.type] || "◆";

  return `
    <g class="math-network-node ${stateClass}" data-network-node="${mathNetworkEsc(node.id)}"
       transform="translate(${x * 12},${y * 7.6})">
      <circle r="28"></circle>
      <text class="node-symbol" y="-2">${mathNetworkEsc(symbol)}</text>
      <text y="45">${mathNetworkEsc(node.title)}</text>
      ${!mathNetworkUnlocked(node.id) && !admin
        ? `<text class="node-cost" y="58">${Number(node.cost || 0)} ✦</text>`
        : `<text class="node-cost" y="58">✓</text>`}
    </g>
  `;
}

function mathNetworkRenderDetail(nodeId) {
  const host = document.getElementById("math-network-detail");
  if (!host) return;

  const node = mathNetworkNodeById(nodeId);
  if (!node) {
    host.innerHTML = "<p>Selecteer een knooppunt om de historische informatie te bekijken.</p>";
    return;
  }

  const unlocked = mathNetworkUnlocked(node.id);
  const admin = mathNetworkIsAdmin();
  const can = mathNetworkCanUnlock(node);
  const prereqs = (node.prerequisites || []).map(mathNetworkNodeById).filter(Boolean);

  let action = "";
  if (unlocked || admin) {
    action = '<span class="status done">Ontgrendeld</span>';
  } else if (can) {
    action = `<button class="btn primary" data-math-network-unlock="${mathNetworkEsc(node.id)}">
      Ontgrendel voor ${Number(node.cost || 0)} Inzichtpunt${Number(node.cost || 0) === 1 ? "" : "en"}
    </button>`;
  } else {
    const missing = prereqs.filter(p => !mathNetworkUnlocked(p.id));
    const missingText = missing.length
      ? "Vereist eerst: " + missing.map(p => p.title).join(", ") + "."
      : `Nog ${Math.max(0, Number(node.cost || 0) - mathNetworkInsightScore())} Inzichtpunt(en) nodig.`;
    action = `<span class="status locked">${mathNetworkEsc(missingText)}</span>`;
  }

  host.innerHTML = `
    <h3>${mathNetworkEsc(MATH_NETWORK_TYPE_SYMBOLS[node.type] || "◆")} ${mathNetworkEsc(node.title)}</h3>
    <div class="math-network-meta">
      ${mathNetworkEsc(MATH_NETWORK_TYPE_LABELS[node.type] || node.type)}
      ${node.year ? " · " + mathNetworkEsc(node.year) : ""}
      ${node.era ? " · " + mathNetworkEsc(node.era) : ""}
    </div>
    ${unlocked || admin
      ? `<p>${mathNetworkEsc(node.description || "")}</p>
         <div class="callout">${mathNetworkEsc(node.unlockText || "")}</div>`
      : `<p>Dit knooppunt is nog niet ontgrendeld.</p>
         <p class="small">De historische beschrijving verschijnt na het ontgrendelen.</p>`
    }
    ${prereqs.length
      ? `<div class="math-network-prereqs"><strong>Voorwaarden:</strong> ${prereqs.map(p => mathNetworkEsc(p.title)).join(" · ")}</div>`
      : ""
    }
    ${node.note ? `<p class="small">${mathNetworkEsc(node.note)}</p>` : ""}
    ${action}
  `;
}

function mathNetworkRender() {
  const app = document.getElementById("app");
  if (!app) return;

  mathNetworkInjectStyles();

  const positions = mathNetworkLayout();
  const edges = mathNetworkConnectedEdges();

  const edgeSvg = edges.map(([a, b]) => {
    const pa = positions[a], pb = positions[b];
    if (!pa || !pb) return "";
    const unlocked = mathNetworkUnlocked(a) && mathNetworkUnlocked(b);
    return `<line class="math-network-edge ${unlocked ? "edge-unlocked" : ""}"
      x1="${pa[0] * 12}" y1="${pa[1] * 7.6}"
      x2="${pb[0] * 12}" y2="${pb[1] * 7.6}"></line>`;
  }).join("");

  const nodeSvg = MATH_NETWORK_NODES.map(n => mathNetworkNodeSvg(n, positions[n.id])).join("");

  app.innerHTML = `
    <div class="screen" style="background-image:url('assets/home.png')">
      ${typeof topbar === "function"
        ? topbar()
        : ""}
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
            <svg class="math-network-svg" viewBox="0 0 1200 760"
                 role="img" aria-label="Historisch netwerk van wiskundige kennis">
              <g class="math-network-edges">${edgeSvg}</g>
              <g class="math-network-nodes">${nodeSvg}</g>
            </svg>
          </div>

          <div class="math-network-legend">
            <span>👤 Persoon</span>
            <span>◆ Idee</span>
            <span>📜 Werk</span>
            <span>❓ Probleem</span>
            <span>✦ Doorbraak</span>
            <span>Goud = beschikbaar / ontgrendeld</span>
          </div>

          <div class="math-network-notice">
            Inzichtpunten zijn cumulatief: een historische node gebruiken kost punten
            om te voldoen aan de ontgrendelvoorwaarde, maar vermindert je inzichtscore niet.
          </div>

          <div id="math-network-detail" class="math-network-detail">
            <p>Selecteer een knooppunt om de historische informatie te bekijken.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll("[data-network-node]").forEach(el => {
    el.addEventListener("click", () => {
      mathNetworkRenderDetail(el.getAttribute("data-network-node"));
    });
  });

  document.querySelectorAll("[data-math-network-unlock]").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-math-network-unlock");
      if (mathNetworkUnlock(id)) {
        mathNetworkRender();
        mathNetworkRenderDetail(id);
      }
    });
  });
}

window.mathNetworkRender = mathNetworkRender;
window.mathNetworkUnlock = mathNetworkUnlock;
