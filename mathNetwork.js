/*
 * Historisch Wiskundenetwerk — From Zero 2 Infinity
 *
 * Doel:
 * - Historische personen, ideeën, werken en doorbraken als netwerk tonen.
 * - Nodes ontgrendelen met Inzichtpunten.
 * - Inzichtpunten worden NOOIT afgetrokken.
 * - Nieuwe nodes toevoegen = één object toevoegen aan MATH_NETWORK_NODES
 *   en eventueel verbindingen toevoegen aan MATH_NETWORK_EDGES.
 * - Drempel (kosten) staat in MATH_NETWORK_COST: periode + type + extra voorwaarden.
 *
 * Geen externe library nodig: SVG + gewone JavaScript.
 */

const MATH_NETWORK_NODES = [
  // ─────────────────────────────────────────────────────────────
  // BEGIN: basis
  // ─────────────────────────────────────────────────────────────
  {
    id: "tellen",
    period: "oudheid",
    image: "tellen.webp",
    title: "Tellen",
    type: "idea",
    era: "Vóór de formele wiskunde",
    year: null,
    prerequisites: [],
    description: "Het onderscheiden en bijhouden van hoeveelheden: een van de vroegste stappen richting getallen.",
    unlockText: "Je ontdekt het beginpunt van het wiskundig denken: hoeveelheden kunnen worden onderscheiden en bijgehouden."
  },
  {
    id: "getal",
    period: "oudheid",
    image: "getal.webp",
    title: "Het getal",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    prerequisites: ["tellen"],
    description: "Een abstract begrip waarmee een hoeveelheid kan worden weergegeven.",
    unlockText: "Uit tellen ontstaat een abstract idee dat losstaat van de concrete voorwerpen die worden geteld."
  },
  {
    id: "natuurlijke-getallen",
    period: "oudheid",
    image: "natuurlijke-getallen.webp",
    title: "Natuurlijke getallen",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    prerequisites: ["getal"],
    description: "De getallen waarmee we hoeveelheden en tellingen beschrijven: 1, 2, 3, ...",
    unlockText: "De eerste systematische getallenwereld wordt zichtbaar."
  },
  {
    id: "nul",
    period: "middeleeuwen",
    image: "nulpunt.webp",
    title: "Nul",
    type: "idea",
    era: "India",
    year: "7e eeuw",
    prerequisites: ["natuurlijke-getallen"],
    description: "Nul krijgt een zelfstandige rol als getal én als plaatswaardecijfer.",
    unlockText: "Nul maakt het getalsysteem veel krachtiger: een lege plaats kan worden weergegeven en nul kan als getal worden behandeld."
  },
  {
    id: "plaatswaarde",
    period: "middeleeuwen",
    image: "plaatswaarde.webp",
    title: "Plaatswaarde",
    type: "idea",
    era: "Oude en middeleeuwse wiskunde",
    year: null,
    prerequisites: ["natuurlijke-getallen"],
    description: "De waarde van een cijfer hangt af van zijn positie in het getal.",
    unlockText: "Met plaatswaarde wordt rekenen met grote getallen veel efficiënter."
  },
  {
    id: "breuken",
    period: "oudheid",
    image: "breuken.webp",
    title: "Breuken",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    prerequisites: ["getal"],
    description: "Getallen die delen van een geheel of verhoudingen kunnen voorstellen.",
    unlockText: "Getallen hoeven niet langer alleen gehele hoeveelheden voor te stellen."
  },
  {
    id: "negatieve-getallen",
    period: "middeleeuwen",
    image: "negatieve-getallen.webp",
    title: "Negatieve getallen",
    type: "idea",
    era: "India / middeleeuwse wiskunde",
    year: null,
    prerequisites: ["nul"],
    description: "Getallen kleiner dan nul, die bijvoorbeeld schulden en tegengestelde richtingen kunnen voorstellen.",
    unlockText: "De getallenwereld wordt uitgebreid zodat aftrekkingen zoals 3 − 5 betekenis krijgen."
  },

  // ─────────────────────────────────────────────────────────────
  // Grieken
  // ─────────────────────────────────────────────────────────────
  {
    id: "pythagoras",
    period: "oudheid",
    image: "pythagoras.webp",
    title: "Pythagoras",
    type: "person",
    era: "Oud-Griekenland",
    year: "ca. 570–495 v.Chr.",
    prerequisites: ["getal", "breuken"],
    description: "Pythagorese traditie rond getallen, verhoudingen en meetkundige stellingen.",
    unlockText: "Getallen en meetkundige vormen blijken diep met elkaar verbonden."
  },
  {
    id: "bewijs",
    period: "oudheid",
    image: "bewijs.webp",
    title: "Deductief bewijs",
    type: "idea",
    era: "Oud-Griekenland",
    year: "ca. 5e eeuw v.Chr.",
    prerequisites: ["pythagoras"],
    description: "Een conclusie wordt stap voor stap afgeleid uit definities, aannames en eerdere resultaten.",
    unlockText: "Wiskunde wordt niet alleen rekenen, maar ook aantonen waarom iets noodzakelijk waar is."
  },
  {
    id: "euclides",
    period: "oudheid",
    image: "euclides.webp",
    title: "Euclides",
    type: "person",
    era: "Hellenistische periode",
    year: "ca. 300 v.Chr.",
    prerequisites: ["bewijs"],
    description: "Euclides systematiseerde een groot deel van de Griekse meetkunde in de Elementen.",
    unlockText: "Definities, axioma's en stellingen vormen samen een samenhangend deductief bouwwerk."
  },
  {
    id: "priemgetallen",
    period: "oudheid",
    image: "priemgetallen.webp",
    title: "Priemgetallen",
    type: "idea",
    era: "Oud-Griekenland",
    year: null,
    prerequisites: ["euclides"],
    description: "Getallen groter dan 1 die alleen door 1 en zichzelf deelbaar zijn.",
    unlockText: "De structuur van de gehele getallen wordt een zelfstandig onderzoeksgebied."
  },
  {
    id: "archimedes",
    period: "oudheid",
    image: "archimedes.webp",
    title: "Archimedes",
    type: "person",
    era: "Hellenistische periode",
    year: "ca. 287–212 v.Chr.",
    prerequisites: ["euclides"],
    description: "Ontwikkelde krachtige meetkundige methoden voor onder andere oppervlakken en volumes.",
    unlockText: "Door steeds fijnere benaderingen te gebruiken ontstaat een voorloper van het latere integraalidee."
  },
  {
    id: "kegelsneden",
    period: "oudheid",
    image: "kegelsneden.webp",
    title: "Kegelsneden",
    type: "idea",
    era: "Hellenistische periode",
    year: "3e–2e eeuw v.Chr.",
    prerequisites: ["euclides"],
    description: "Ellipsen, parabolen en hyperbolen als fundamentele meetkundige krommen.",
    unlockText: "Nieuwe soorten krommen worden onderdeel van de wiskundige taal."
  },

  {
    id: "rekenkunde",
    period: "oudheid",
    image: "rekenkunde.webp",
    title: "Rekenkunde",
    type: "idea",
    era: "Vroege wiskunde",
    year: null,
    prerequisites: ["tellen"],
    description: "Tellen zegt hoeveel er is, maar niet hoe hoeveelheden samengaan. Optellen, aftrekken en verdelen vragen om vaste rekengebaren.",
    unlockText: "Hoeveelheden kunnen worden bewerkt, niet alleen aangewezen. Rekenen wordt een methode."
  },
  {
    id: "combinatieleer",
    period: "oudheid",
    image: "combinatieleer.webp",
    title: "Combinatieleer",
    type: "idea",
    era: "Oudheid",
    year: null,
    prerequisites: ["natuurlijke-getallen"],
    description: "Zodra je voorwerpen in rijen of groepen zet, groeit het aantal schikkingen sneller dan het oog volgt.",
    unlockText: "Tellen van mogelijkheden wordt zelf een vraag. Combinaties zijn geen toeval meer."
  },
  {
    id: "thales",
    period: "oudheid",
    image: "thales.webp",
    title: "Thales van Milete",
    type: "person",
    era: "Oud-Griekenland",
    year: "ca. 624–546 v.Chr.",
    prerequisites: ["getal", "breuken"],
    description: "Meetkunde was een verzameling handgrepen tot iemand naar de reden achter een hoek of evenwijdige lijn vroeg.",
    unlockText: "Een figuur kan een algemene regel dragen. Meten krijgt een eerste deductieve trek."
  },
  {
    id: "stelling-pythagoras",
    period: "oudheid",
    image: "stelling-pythagoras.webp",
    title: "Stelling van Pythagoras",
    type: "idea",
    era: "Oud-Griekenland",
    year: null,
    prerequisites: ["pythagoras"],
    description: "In een rechte hoek lijken de zijden een vast verband te hebben, maar dat verband vraagt om een uitspraak die altijd geldt.",
    unlockText: "De som van de kwadraten van de rechthoekszijden is het kwadraat van de schuine zijde. Getal en driehoek delen één wet."
  },
  {
    id: "irrationale-getallen",
    period: "oudheid",
    image: "irrationale-getallen.webp",
    title: "Irrationale getallen",
    type: "idea",
    era: "Oud-Griekenland",
    year: null,
    prerequisites: ["stelling-pythagoras"],
    description: "Sommige lengtes in een figuur zijn geen breuk van twee gehele getallen, hoe fijn je ook verdeelt.",
    unlockText: "Niet elke grootte is een verhouding van tellen. Het getalbegrip moet wijder dan de breuk."
  },
  {
    id: "polyeders",
    period: "oudheid",
    image: "polyeders.webp",
    title: "Polyeders",
    type: "idea",
    era: "Oud-Griekenland",
    year: null,
    prerequisites: ["euclides"],
    description: "Ruimtefiguren met platte vlakken lijken eindeloos, tot je vraagt welke regelmatige lichamen echt kunnen sluiten.",
    unlockText: "Er zijn maar vijf regelmatige veelvlakken. Vorm in de ruimte krijgt een eindige catalogus."
  },
  {
    id: "perfecte-getallen",
    period: "oudheid",
    image: "perfecte-getallen.webp",
    title: "Perfecte getallen",
    type: "idea",
    era: "Oud-Griekenland",
    year: null,
    prerequisites: ["priemgetallen"],
    description: "Een getal kan gelijk zijn aan de som van zijn echte delers. Die zeldzame balans vraagt om een eigen naam.",
    unlockText: "Volmaaktheid wordt een rekenfeit: 6 en 28 zijn geen mystiek, maar een structuur van delers."
  },
  {
    id: "eratosthenes",
    period: "oudheid",
    image: "eratosthenes.webp",
    title: "Eratosthenes van Cyrene",
    type: "person",
    era: "Hellenistische periode",
    year: "ca. 276–194 v.Chr.",
    prerequisites: ["priemgetallen"],
    description: "Priemen vinden door elk getal te beproeven is traag. Er is een zeef nodig die veelvouden in één beweging wegneemt.",
    unlockText: "De zeef van Eratosthenes maakt priemen tot een procedure. De aarde zelf wordt meetbaar met schaduw en afstand."
  },
  {
    id: "pi",
    period: "oudheid",
    image: "pi.webp",
    title: "Pi",
    type: "idea",
    era: "Hellenistische periode",
    year: null,
    prerequisites: ["archimedes"],
    description: "Omtrek en middellijn van een cirkel houden verband, maar dat getal is geen nette breuk.",
    unlockText: "De verhouding krijgt een eigen constante. Benadering van de cirkel wordt een eindeloos nauwkeuriger werk."
  },
  {
    id: "hypatia",
    period: "oudheid",
    image: "hypatia.webp",
    title: "Hypatia",
    type: "person",
    era: "Late oudheid",
    year: "ca. 350–415",
    prerequisites: ["euclides", "kegelsneden"],
    description: "Hellenistische meetkunde dreigde een dode bibliotheek te worden zonder wie haar uitlegde en bewerkte.",
    unlockText: "Commentaar en onderwijs houden Euclides en de kegelsneden levend. Wiskunde overleeft als overdracht, niet alleen als vondst."
  },

  // ─────────────────────────────────────────────────────────────
  // India / islamitische wereld
  // ─────────────────────────────────────────────────────────────
  {
    id: "brahmagupta",
    period: "middeleeuwen",
    image: "brahmagupta.webp",
    title: "Brahmagupta",
    type: "person",
    era: "India",
    year: "598–ca. 668",
    prerequisites: ["nul", "negatieve-getallen"],
    description: "Speelde een belangrijke rol in de ontwikkeling van rekenregels voor nul en negatieve getallen.",
    unlockText: "Nul en negatieve getallen krijgen explicietere rekenregels."
  },
  {
    id: "al-khwarizmi",
    period: "middeleeuwen",
    image: "al-khwarizmi.webp",
    title: "Al-Khwarizmi",
    type: "person",
    era: "Islamitische gouden eeuw",
    year: "ca. 780–850",
    prerequisites: ["plaatswaarde", "breuken"],
    description: "Zijn werk droeg bij aan de ontwikkeling van algebra en systematische rekenprocedures.",
    unlockText: "Een nieuwe manier van denken ontstaat: problemen kunnen volgens algemene procedures worden opgelost."
  },
  {
    id: "algoritme",
    period: "middeleeuwen",
    image: "algoritme.webp",
    title: "Algoritme",
    type: "idea",
    era: "Middeleeuwse wiskunde",
    year: null,
    prerequisites: ["al-khwarizmi"],
    description: "Een eindige, systematische procedure om een probleem op te lossen.",
    unlockText: "Een wiskundig probleem kan worden gezien als een reeks expliciete stappen."
  },
  {
    id: "algebra",
    period: "middeleeuwen",
    image: "algebra.webp",
    title: "Algebra",
    type: "idea",
    era: "Middeleeuwse wiskunde",
    year: null,
    prerequisites: ["al-khwarizmi", "negatieve-getallen"],
    description: "Het systematisch werken met onbekenden, vergelijkingen en algebraïsche bewerkingen.",
    unlockText: "Getallen worden niet langer alleen berekend: onbekende grootheden kunnen symbolisch worden behandeld."
  },

  // ─────────────────────────────────────────────────────────────
  // Renaissance / 17e eeuw
  // ─────────────────────────────────────────────────────────────
  {
    id: "fibonacci",
    period: "middeleeuwen",
    image: "fibonacci.webp",
    title: "Fibonacci",
    type: "person",
    era: "Middeleeuws Europa",
    year: "ca. 1170–ca. 1250",
    prerequisites: ["plaatswaarde", "al-khwarizmi"],
    description: "Verspreidde via Liber Abaci rekenmethoden met het Indisch-Arabische cijfersysteem in Europa.",
    unlockText: "Efficiëntere rekenmethoden krijgen een brede Europese verspreiding."
  },
  {
    id: "ptolemaeus",
    period: "middeleeuwen",
    image: "ptolemaeus.webp",
    title: "Ptolemaeus",
    type: "person",
    era: "Romeinse tijd",
    year: "ca. 100–170",
    prerequisites: ["euclides", "kegelsneden"],
    description: "Hemelbeweging vroeg om hoeken en koorden, niet alleen om losse meetkundige stellingen.",
    unlockText: "Meetkunde gaat de hemel in: tabellen van koorden maken hoeken rekenbaar."
  },
  {
    id: "diophantus",
    period: "middeleeuwen",
    image: "diophantus.webp",
    title: "Diophantus",
    type: "person",
    era: "Romeinse tijd",
    year: "ca. 3e eeuw",
    prerequisites: ["natuurlijke-getallen", "breuken"],
    description: "Vergelijkingen werden als meetkundige stukken of als één getalvoorbeelden behandeld. Er ontbrak een taal voor onbepaalde gehele oplossingen.",
    unlockText: "Onbekenden in gehele getallen krijgen een eigen schrift. De puzzel wordt een vergelijking."
  },
  {
    id: "diofantische-vergelijkingen",
    period: "middeleeuwen",
    image: "diofantische-vergelijkingen.webp",
    title: "Diofantische vergelijkingen",
    type: "idea",
    era: "Romeinse tijd tot middeleeuwen",
    year: null,
    prerequisites: ["diophantus"],
    description: "Sommige vergelijkingen vragen om gehele oplossingen, niet om elke reële wortel.",
    unlockText: "De vraag is niet alleen of er een oplossing is, maar of die in hele getallen bestaat."
  },
  {
    id: "tessellaties",
    period: "middeleeuwen",
    image: "tessellaties.webp",
    title: "Tessellaties",
    type: "idea",
    era: "Middeleeuwen",
    year: null,
    prerequisites: ["euclides", "polyeders"],
    description: "Een vlak vullen zonder gaten of overlap lijkt versiering, tot je vraagt welke vormen dat strikt toelaten.",
    unlockText: "Betegeling wordt meetkunde: welke hoeken sluiten, en welke herhaling is mogelijk."
  },
  {
    id: "boethius",
    period: "middeleeuwen",
    image: "boethius.webp",
    title: "Boëthius",
    type: "person",
    era: "Late oudheid / vroege middeleeuwen",
    year: "ca. 480–524",
    prerequisites: ["natuurlijke-getallen", "euclides"],
    description: "Latijns Europa dreigde de Griekse rekenkunde alleen als citaat over te houden.",
    unlockText: "Een smalle brug blijft open: getaltheorie en verhoudingen blijven onderwezen, al is het handboek dun."
  },
  {
    id: "aryabhata",
    period: "middeleeuwen",
    image: "aryabhata.webp",
    title: "Aryabhata",
    type: "person",
    era: "India",
    year: "476–550",
    prerequisites: ["natuurlijke-getallen", "pi"],
    description: "Astronomie had sinuswaarden en een plaats voor grote getallen nodig, niet alleen meetkundige tekeningen.",
    unlockText: "Sinus en rekenkunde van de cirkel worden tabellen. De hemel wordt met Indiaas rekenen gevolgd."
  },
  {
    id: "goniometrie",
    period: "middeleeuwen",
    image: "goniometrie.webp",
    title: "Goniometrie",
    type: "idea",
    era: "Middeleeuwen",
    year: null,
    prerequisites: ["ptolemaeus", "aryabhata"],
    description: "Hoeken in driehoeken en aan de hemel zijn lastig te vangen met alleen lengtes.",
    unlockText: "Sinus, koorde en later tangens maken van een hoek een rekenbaar getal."
  },
  {
    id: "matrices",
    period: "middeleeuwen",
    image: "matrices.webp",
    title: "Matrices",
    type: "idea",
    era: "Middeleeuwen",
    year: null,
    prerequisites: ["al-khwarizmi", "combinatieleer"],
    description: "Stelsels getallen in rijen en kolommen doken op in Chinese en latere rekenpraktijk, zonder de latere algebraïsche naam.",
    unlockText: "Een tabel van getallen kan een bewerking zijn, niet alleen een lijst."
  },
  {
    id: "omar-khayyam",
    period: "middeleeuwen",
    image: "omar-khayyam.webp",
    title: "Omar Khayyam",
    type: "person",
    era: "Islamitische gouden eeuw",
    year: "1048–1131",
    prerequisites: ["algebra", "euclides"],
    description: "Derdegraadsvergelijkingen lieten zich niet allemaal met de oude meetkundige truc van het vlak vangen.",
    unlockText: "Kegelsneden lossen kubische vragen. Algebra en meetkunde lenen opnieuw elkaars hand."
  },
  {
    id: "descartes",
    period: "vroegmodern",
    image: "descartes.webp",
    title: "René Descartes",
    type: "person",
    era: "17e eeuw",
    year: "1596–1650",
    prerequisites: ["algebra", "euclides"],
    description: "Verbond algebra met meetkunde via het coördinatenstelsel en de analytische meetkunde.",
    unlockText: "Een meetkundig probleem kan voortaan worden vertaald naar algebra."
  },
  {
    id: "fermat",
    period: "vroegmodern",
    image: "fermat.webp",
    title: "Pierre de Fermat",
    type: "person",
    era: "17e eeuw",
    year: "1607–1665",
    prerequisites: ["priemgetallen", "algebra"],
    description: "Belangrijke bijdragen aan getaltheorie, analytische meetkunde en kansrekening.",
    unlockText: "Getaltheorie groeit uit tot een eigen onderzoeksgebied en algebra krijgt nieuwe toepassingen."
  },
  {
    id: "pascal",
    period: "vroegmodern",
    image: "pascal.webp",
    title: "Blaise Pascal",
    type: "person",
    era: "17e eeuw",
    year: "1623–1662",
    prerequisites: ["algebra", "fibonacci"],
    description: "Belangrijke bijdragen aan combinatoriek, kansrekening en rekenmachines.",
    unlockText: "Combinaties van eindige mogelijkheden worden systematisch bestudeerd."
  },
  {
    id: "kansrekening",
    period: "vroegmodern",
    image: "kansrekening.webp",
    title: "Kansrekening",
    type: "idea",
    era: "17e eeuw",
    year: "17e eeuw",
    prerequisites: ["pascal", "fermat"],
    description: "Wiskundige theorie van toevallige gebeurtenissen en kansen.",
    unlockText: "Onzekerheid wordt een object dat wiskundig kan worden berekend."
  },
  {
    id: "newton",
    period: "vroegmodern",
    image: "newton.webp",
    title: "Isaac Newton",
    type: "person",
    era: "17e eeuw",
    year: "1643–1727",
    prerequisites: ["descartes", "algebra", "kegelsneden"],
    description: "Ontwikkelde calculus in samenhang met zijn werk in mechanica en zwaartekracht.",
    unlockText: "Verandering wordt een wiskundig object waarmee beweging en fysische wetten kunnen worden beschreven."
  },
  {
    id: "leibniz",
    period: "vroegmodern",
    image: "leibniz.webp",
    title: "Gottfried Wilhelm Leibniz",
    type: "person",
    era: "17e eeuw",
    year: "1646–1716",
    prerequisites: ["descartes", "algebra"],
    description: "Ontwikkelde onafhankelijk calculus en introduceerde de notatie die de moderne calculus sterk heeft beïnvloed.",
    unlockText: "Differentiaal- en integraalrekening krijgen een krachtige symbolische taal."
  },
  {
    id: "calculus",
    period: "vroegmodern",
    image: "calculus.webp",
    title: "Calculus",
    type: "idea",
    era: "17e eeuw",
    year: "17e eeuw",
    prerequisites: ["newton", "leibniz"],
    description: "De wiskunde van verandering, limieten, afgeleiden en integralen.",
    unlockText: "De grote brug van eindige veranderingen naar oneindig kleine veranderingen wordt geopend."
  },

  // ─────────────────────────────────────────────────────────────
  // 18e eeuw
  // ─────────────────────────────────────────────────────────────
  {
    id: "de-moivre",
    period: "vroegmodern",
    image: "de-moivre.webp",
    title: "Abraham de Moivre",
    type: "person",
    era: "18e eeuw",
    year: "1667–1754",
    prerequisites: ["kansrekening"],
    description: "Belangrijke bijdragen aan kansrekening en de relatie tussen complexe getallen en goniometrie.",
    unlockText: "Kansrekening en complexe getallen krijgen nieuwe verbindingen."
  },
  {
    id: "euler",
    period: "vroegmodern",
    image: "euler.webp",
    title: "Leonhard Euler",
    type: "person",
    era: "18e eeuw",
    year: "1707–1783",
    prerequisites: ["calculus", "de-moivre"],
    description: "Een centrale figuur in analyse, getaltheorie, complexe getallen, grafentheorie en mechanica.",
    unlockText: "Een groot aantal takken van de wiskunde begint zich rond één uitzonderlijk productieve onderzoeker te verbinden."
  },
  {
    id: "differentiaalvergelijkingen",
    period: "vroegmodern",
    image: "differentiaalvergelijkingen.webp",
    title: "Differentiaalvergelijkingen",
    type: "idea",
    era: "18e eeuw",
    year: "18e eeuw",
    prerequisites: ["calculus", "euler"],
    description: "Vergelijkingen waarin een onbekende functie en haar afgeleiden voorkomen.",
    unlockText: "Dynamische processen kunnen rechtstreeks als wiskundige vergelijkingen worden beschreven."
  },
  {
    id: "lagrange",
    period: "vroegmodern",
    image: "lagrange.webp",
    title: "Joseph-Louis Lagrange",
    type: "person",
    era: "18e eeuw",
    year: "1736–1813",
    prerequisites: ["calculus", "differentiaalvergelijkingen"],
    description: "Belangrijke bijdragen aan variatierekening, analytische mechanica en analyse.",
    unlockText: "Mechanica kan steeds abstracter en systematischer worden geformuleerd."
  },
  {
    id: "laplace",
    period: "vroegmodern",
    image: "laplace.webp",
    title: "Pierre-Simon Laplace",
    type: "person",
    era: "18e–19e eeuw",
    year: "1749–1827",
    prerequisites: ["kansrekening", "differentiaalvergelijkingen"],
    description: "Verbindt waarschijnlijkheid, analyse en hemelmechanica.",
    unlockText: "Toeval en deterministische modellen kunnen in één wiskundig kader naast elkaar bestaan."
  },
  {
    id: "cardano",
    period: "vroegmodern",
    image: "cardano.webp",
    title: "Gerolamo Cardano",
    type: "person",
    era: "16e eeuw",
    year: "1501–1576",
    prerequisites: ["algebra"],
    description: "Derde- en vierdegraadsvergelijkingen vroegen om een algemene ingreep, niet om nog een meetkundige truc per geval.",
    unlockText: "Wortels van hogere vergelijkingen worden een methode. Ook wortels die ‘niet bestaan’ blijven in de rekening staan."
  },
  {
    id: "imaginaire-getallen",
    period: "vroegmodern",
    image: "imaginaire-getallen.webp",
    title: "Imaginaire getallen",
    type: "idea",
    era: "16e–18e eeuw",
    year: null,
    prerequisites: ["cardano"],
    description: "Sommige wortels lijken onmogelijk, tot je ze als tussenstap toelaat en merkt dat het eindantwoord reëel kan zijn.",
    unlockText: "Een vierkantswortel van een negatief getal krijgt een plaats. De getallenwereld is niet meer alleen de lijn."
  },
  {
    id: "napier",
    period: "vroegmodern",
    image: "napier.webp",
    title: "John Napier",
    type: "person",
    era: "17e eeuw",
    year: "1550–1617",
    prerequisites: ["algebra"],
    description: "Vermenigvuldigen van grote astronomische tabellen is te traag voor de hand.",
    unlockText: "Vermenigvuldigen wordt optellen van bijpassende getallen. De rekenlast van de hemel verschuift."
  },
  {
    id: "logaritmes",
    period: "vroegmodern",
    image: "logaritmes.webp",
    title: "Logaritmes",
    type: "idea",
    era: "17e eeuw",
    year: null,
    prerequisites: ["napier"],
    description: "Een bewerking die producten in sommen verandert, vraagt om een eigen naam en een eigen tafel.",
    unlockText: "Schaal en groei krijgen een omgekeerde: de logaritme."
  },
  {
    id: "getal-e",
    period: "vroegmodern",
    image: "getal-e.webp",
    title: "Het getal e",
    type: "idea",
    era: "17e–18e eeuw",
    year: null,
    prerequisites: ["logaritmes"],
    description: "Eén grondtal maakt de logaritme en de groei van rente of populatie bijzonder soepel.",
    unlockText: "Er is een natuurlijk grondtal. Groei en analyse delen hetzelfde getal."
  },
  {
    id: "cartesisch",
    period: "vroegmodern",
    image: "cartesisch.webp",
    title: "Cartesisch coördinatenstelsel",
    type: "idea",
    era: "17e eeuw",
    year: null,
    prerequisites: ["descartes"],
    description: "Een punt in het vlak had geen vast adres tot lengte en breedte zelf getallen werden.",
    unlockText: "Elk punt is een paar getallen. Meetkunde kan op papier als algebra."
  },
  {
    id: "driehoek-van-pascal",
    period: "vroegmodern",
    image: "driehoek-van-pascal.webp",
    title: "Driehoek van Pascal",
    type: "idea",
    era: "17e eeuw",
    year: null,
    prerequisites: ["pascal"],
    description: "Binomiale coëfficiënten en combinaties liggen in een driehoek van sommen verborgen.",
    unlockText: "Elk getal is de som van de twee erboven. Combinaties krijgen een raster."
  },
  {
    id: "oneindige-reeksen",
    period: "vroegmodern",
    image: "oneindige-reeksen.webp",
    title: "Oneindige reeksen",
    type: "idea",
    era: "17e–18e eeuw",
    year: null,
    prerequisites: ["calculus"],
    description: "Een som mag blijven lopen. De vraag is wanneer die som een getal wordt.",
    unlockText: "Oneindig veel termen kunnen één waarde naderen. Analyse krijgt een tweede adem naast de afgeleide."
  },
  {
    id: "grafentheorie",
    period: "vroegmodern",
    image: "grafentheorie.webp",
    title: "Grafentheorie",
    type: "idea",
    era: "18e eeuw",
    year: null,
    prerequisites: ["euler"],
    description: "Bruggen en routes vragen niet om afstand, maar om verbondenheid.",
    unlockText: "Punten en lijnen zonder metriek worden wiskunde. Een wandeling is een object."
  },
  {
    id: "bernoulli",
    period: "vroegmodern",
    image: "bernoulli.webp",
    title: "De familie Bernoulli",
    type: "person",
    era: "17e–18e eeuw",
    year: "17e–18e eeuw",
    prerequisites: ["kansrekening", "calculus"],
    description: "Kans, reeksen en variatie werden in één familiewerkplaats tegelijk verder geduwd.",
    unlockText: "Toeval en verandering horen bij dezelfde eeuw. De kansrekening krijgt analyse."
  },

  // ─────────────────────────────────────────────────────────────
  // 19e eeuw
  // ─────────────────────────────────────────────────────────────
  {
    id: "gauss",
    period: "eeuw19",
    image: "gauss.webp",
    title: "Carl Friedrich Gauss",
    type: "person",
    era: "19e eeuw",
    year: "1777–1855",
    prerequisites: ["fermat", "calculus"],
    description: "Grote bijdragen aan getaltheorie, analyse, geometrie, statistiek en fysische wiskunde.",
    unlockText: "Getaltheorie, geometrie en toegepaste wiskunde blijken steeds nauwer verbonden."
  },
  {
    id: "fourier",
    period: "eeuw19",
    image: "fourier.webp",
    title: "Joseph Fourier",
    type: "person",
    era: "19e eeuw",
    year: "1768–1830",
    prerequisites: ["calculus", "differentiaalvergelijkingen"],
    description: "Ontwikkelde Fourier-reeksen en een nieuwe manier om functies als som van golven te beschrijven.",
    unlockText: "Complexe signalen kunnen worden ontleed in eenvoudige harmonische componenten."
  },
  {
    id: "cauchy",
    period: "eeuw19",
    image: "cauchy.webp",
    title: "Augustin-Louis Cauchy",
    type: "person",
    era: "19e eeuw",
    year: "1789–1857",
    prerequisites: ["calculus"],
    description: "Speelde een grote rol in het rigoureuzer maken van de analyse en complexe analyse.",
    unlockText: "Calculus krijgt steeds scherpere definities en bewijsstandaarden."
  },
  {
    id: "galois",
    period: "eeuw19",
    image: "galois.webp",
    title: "Évariste Galois",
    type: "person",
    era: "19e eeuw",
    year: "1811–1832",
    prerequisites: ["algebra"],
    description: "Legde fundamenten voor de groepentheoretische benadering van algebraïsche vergelijkingen.",
    unlockText: "Symmetrie blijkt een sleutel te zijn tot het begrijpen van algebraïsche structuren."
  },
  {
    id: "niet-euclidische-geometrie",
    period: "eeuw19",
    image: "niet-euclidische-geometrie.webp",
    title: "Niet-Euclidische geometrie",
    type: "idea",
    era: "19e eeuw",
    year: "19e eeuw",
    prerequisites: ["euclides"],
    description: "Geometrieën waarin het parallellenpostulaat van Euclides niet op dezelfde manier geldt.",
    unlockText: "Er blijkt meer dan één consistente meetkundige wereld mogelijk."
  },
  {
    id: "riemann",
    period: "eeuw19",
    image: "riemann.webp",
    title: "Bernhard Riemann",
    type: "person",
    era: "19e eeuw",
    year: "1826–1866",
    prerequisites: ["calculus", "niet-euclidische-geometrie"],
    description: "Vernieuwde analyse en geometrie en introduceerde ideeën die uitmondden in Riemann-geometrie.",
    unlockText: "Meetkunde wordt een theorie van abstracte ruimten en kromming."
  },
  {
    id: "cantor",
    period: "eeuw19",
    image: "cantor.webp",
    title: "Georg Cantor",
    type: "person",
    era: "19e eeuw",
    year: "1845–1918",
    prerequisites: ["bewijs", "priemgetallen"],
    description: "Ontwikkelde de verzamelingenleer en een theorie van verschillende groottes van oneindigheid.",
    unlockText: "Oneindigheid wordt zelf een object dat wiskundig kan worden onderzocht."
  },
  {
    id: "topologie",
    period: "eeuw19",
    image: "topologie.webp",
    title: "Topologie",
    type: "idea",
    era: "19e–20e eeuw",
    year: null,
    prerequisites: ["riemann"],
    description: "Studie van eigenschappen van ruimten die behouden blijven onder continue vervorming.",
    unlockText: "Vorm wordt losgekoppeld van exacte afmetingen en hoeken."
  },

  {
    id: "sophie-germain",
    period: "eeuw19",
    image: "sophie-germain.webp",
    title: "Sophie Germain",
    type: "person",
    era: "19e eeuw",
    year: "1776–1831",
    prerequisites: ["fermat"],
    description: "Getaltheorie en elasticiteit werden in haar tijd als mannenwerk behandeld; de stellingen wachtten niet.",
    unlockText: "Fermats vergelijking krijgt nieuwe gevallen. Een brief onder andere naam blijkt een wiskundige stem."
  },
  {
    id: "groepentheorie",
    period: "eeuw19",
    image: "groepentheorie.webp",
    title: "Groepentheorie",
    type: "idea",
    era: "19e eeuw",
    year: null,
    prerequisites: ["galois"],
    description: "Symmetrie van een vergelijking is lastig te vangen tot je de toegestane verwisselingen zelf tot object maakt.",
    unlockText: "Een groep is de algebra van wat je mag verwisselen. Structuur wint van de enkele formule."
  },
  {
    id: "babbage",
    period: "eeuw19",
    image: "babbage.webp",
    title: "Charles Babbage",
    type: "person",
    era: "19e eeuw",
    year: "1791–1871",
    prerequisites: ["algoritme"],
    description: "Tafels met de hand rekenen zaait fouten. Een machine zou de stappen zelf moeten zetten.",
    unlockText: "Berekenen wordt ontwerp van raderen. Het algoritme zoekt een lichaam van messing."
  },
  {
    id: "lovelace",
    period: "eeuw19",
    image: "lovelace.webp",
    title: "Ada Lovelace",
    type: "person",
    era: "19e eeuw",
    year: "1815–1852",
    prerequisites: ["babbage"],
    description: "Een rekenmachine die alleen tabellen stampt, mist wat een algemene procedure kan zijn.",
    unlockText: "De machine kan meer dan cijfers: een plan van stappen wordt een programma avant la lettre."
  },
  {
    id: "hamilton",
    period: "eeuw19",
    image: "hamilton.webp",
    title: "William Rowan Hamilton",
    type: "person",
    era: "19e eeuw",
    year: "1805–1865",
    prerequisites: ["algebra", "cartesisch"],
    description: "Draaiingen in de ruimte lieten zich niet netjes met twee of drie gewone getallen vangen.",
    unlockText: "Een nieuwe vermenigvuldiging in vier delen. Richting in de ruimte krijgt algebra."
  },
  {
    id: "quaternionen",
    period: "eeuw19",
    image: "quaternionen.webp",
    title: "Quaternionen",
    type: "idea",
    era: "19e eeuw",
    year: null,
    prerequisites: ["hamilton"],
    description: "Vier getallen met een vermenigvuldiging die niet altijd commutatief is.",
    unlockText: "i, j en k zijn geen versiering. Draaien is een product, geen plaatje."
  },
  {
    id: "abel",
    period: "eeuw19",
    image: "abel.webp",
    title: "Niels Henrik Abel",
    type: "person",
    era: "19e eeuw",
    year: "1802–1829",
    prerequisites: ["algebra"],
    description: "De vijfdegraadsvergelijking weigerde de wortelformules die tot de vierde graad werkten.",
    unlockText: "Onmogelijkheid wordt een stelling. Niet elke vergelijking heeft een algemeen radicalenrecept."
  },
  {
    id: "booleaanse-logica",
    period: "eeuw19",
    image: "booleaanse-logica.webp",
    title: "Booleaanse logica",
    type: "idea",
    era: "19e eeuw",
    year: null,
    prerequisites: ["bewijs", "algebra"],
    description: "Waar en onwaar leken geen rekenstof tot iemand ze als 1 en 0 in wetten zette.",
    unlockText: "Redeneren wordt algebra. En en of zijn bewerkingen."
  },
  {
    id: "riemann-hypothese",
    period: "eeuw19",
    image: "riemann-hypothese.webp",
    title: "De Riemann-hypothese",
    type: "idea",
    era: "19e eeuw",
    year: "1859",
    prerequisites: ["riemann", "priemgetallen"],
    description: "De verdeling van priemen hangt aan de nullen van een functie die Riemann tekende — en die nullen zijn niet bewezen waar we ze willen.",
    unlockText: "Een vermoeden dat de priemen ordent. De kaart is er, de sluiting niet."
  },
  {
    id: "verzamelingenleer",
    period: "eeuw19",
    image: "verzamelingenleer.webp",
    title: "Verzamelingenleer",
    type: "idea",
    era: "19e eeuw",
    year: null,
    prerequisites: ["cantor"],
    description: "Oneindige collecties bleken niet allemaal even groot. Dat vraagt om een leer, niet om een metafoor.",
    unlockText: "De verzameling wordt het basismateriaal. Oneindig heeft graden."
  },

  // ─────────────────────────────────────────────────────────────
  // 20e eeuw / computationele wiskunde
  // ─────────────────────────────────────────────────────────────
  {
    id: "hilbert",
    period: "eeuw20",
    image: "hilbert.webp",
    title: "David Hilbert",
    type: "person",
    era: "20e eeuw",
    year: "1862–1943",
    prerequisites: ["cantor", "riemann"],
    description: "Bepalende figuur in de grondslagen, algebra, analyse en formele formulering van wiskundige problemen.",
    unlockText: "De vraag wat wiskunde precies kan bewijzen wordt zelf een onderzoeksgebied."
  },
  {
    id: "noether",
    period: "eeuw20",
    image: "noether.webp",
    title: "Emmy Noether",
    type: "person",
    era: "20e eeuw",
    year: "1882–1935",
    prerequisites: ["galois", "hilbert"],
    description: "Bracht abstracte algebra en symmetrie naar een nieuw niveau; haar werk verbindt symmetrie met behoudswetten.",
    unlockText: "Symmetrie wordt een structureel principe dat zowel in pure als toegepaste wiskunde verschijnt."
  },
  {
    id: "godel",
    period: "eeuw20",
    image: "godel.webp",
    title: "Kurt Gödel",
    type: "person",
    era: "20e eeuw",
    year: "1906–1978",
    prerequisites: ["hilbert"],
    description: "Zijn onvolledigheidsstellingen veranderden het begrip van formele axiomasystemen.",
    unlockText: "Er worden fundamentele grenzen zichtbaar aan wat binnen een formeel systeem bewijsbaar kan zijn."
  },
  {
    id: "turing",
    period: "eeuw20",
    image: "turing.webp",
    title: "Alan Turing",
    type: "person",
    era: "20e eeuw",
    year: "1912–1954",
    prerequisites: ["algoritme", "godel"],
    description: "Formuleerde een fundamenteel model voor berekenbaarheid en droeg bij aan de theoretische basis van computers.",
    unlockText: "Het algoritme wordt een formeel object: wat betekent het dat iets berekenbaar is?"
  },
  {
    id: "formele-bewijzen",
    period: "eeuw20",
    image: "formele-bewijzen.webp",
    title: "Formele bewijzen",
    type: "idea",
    era: "20e–21e eeuw",
    year: null,
    prerequisites: ["godel", "turing"],
    description: "Wiskundige redeneringen worden vastgelegd in formele systemen die door mensen én machines gecontroleerd kunnen worden.",
    unlockText: "Een bewijs kan niet alleen gelezen maar ook mechanisch gecontroleerd worden."
  },
  {
    id: "ai-wiskunde",
    period: "eeuw20",
    image: "ai-wiskunde.webp",
    title: "AI-assisted mathematics",
    type: "breakthrough",
    era: "21e eeuw",
    year: "2020s",
    prerequisites: ["formele-bewijzen", "turing", "fourier"],
    description: "AI-systemen worden ingezet voor wiskundig redeneren, bewijs zoeken, formalisering en onderzoek.",
    unlockText: "De computer wordt niet alleen een rekenmachine, maar een partner bij het ontdekken en controleren van wiskundige structuren."
  },
  {
    id: "navier-stokes-ai-2026",
    period: "eeuw20",
    image: "navier-stokes-ai-2026.webp",
    title: "AI-oplossing Navier–Stokes",
    type: "breakthrough",
    era: "21e eeuw",
    year: "2026",
    prerequisites: ["ai-wiskunde", "differentiaalvergelijkingen"],
    description: "Een hedendaagse AI-gerelateerde doorbraak rond het Navier–Stokes existence-and-smoothness problem.",
    unlockText: "Een actuele casus waarin moderne analyse, PDE-theorie, formele verificatie en AI-assisted mathematics samenkomen.",
    note: "Historische status zorgvuldig formuleren: de node beschrijft een in 2026 door OpenAI gepubliceerde AI-oplossing, niet een onafhankelijk door het spel vastgesteld eindpunt."
  },

  {
    id: "ramanujan",
    period: "eeuw20",
    image: "ramanujan.webp",
    title: "Srinivasa Ramanujan",
    type: "person",
    era: "20e eeuw",
    year: "1887–1920",
    prerequisites: ["priemgetallen", "oneindige-reeksen"],
    description: "Formules arriveerden sneller dan bewijzen. De vraag was welke van die vondsten standhouden.",
    unlockText: "Oneindige sommen en partities krijgen nieuwe identiteiten. Intuïtie eist daarna een bewijs."
  },
  {
    id: "von-neumann",
    period: "eeuw20",
    image: "von-neumann.webp",
    title: "John von Neumann",
    type: "person",
    era: "20e eeuw",
    year: "1903–1957",
    prerequisites: ["hilbert", "kansrekening"],
    description: "Spel, machine en kwantum vroegen om één soort wiskundige architectuur.",
    unlockText: "Strategie, computers en operatoren komen in één hoofd bijeen. De eeuw krijgt een ontwerper."
  },
  {
    id: "speltheorie",
    period: "eeuw20",
    image: "speltheorie.webp",
    title: "Speltheorie",
    type: "idea",
    era: "20e eeuw",
    year: null,
    prerequisites: ["von-neumann"],
    description: "Winst hangt af van wat de ander doet. Dat is geen moraal, maar een evenwicht.",
    unlockText: "Een spel wordt een wiskundig object. Strategie is een evenwicht, geen gok."
  },
  {
    id: "nash",
    period: "eeuw20",
    image: "nash.webp",
    title: "John Nash",
    type: "person",
    era: "20e eeuw",
    year: "1928–2015",
    prerequisites: ["speltheorie"],
    description: "Niet elk spel heeft een duidelijke winnaar. Toch kan niemand eenzijdig beter af zijn.",
    unlockText: "Het Nash-evenwicht maakt conflict berekenbaar zonder dat iemand de ander hoeft te verslaan."
  },
  {
    id: "informatietheorie",
    period: "eeuw20",
    image: "informatietheorie.webp",
    title: "Informatietheorie",
    type: "idea",
    era: "20e eeuw",
    year: null,
    prerequisites: ["turing", "kansrekening"],
    description: "Een boodschap is geen betekenis alleen: ze heeft een hoeveelheid die je kunt meten en beschermen.",
    unlockText: "Informatie krijgt een eenheid. Ruis en code worden wiskunde."
  },
  {
    id: "p-versus-np",
    period: "eeuw20",
    image: "p-versus-np.webp",
    title: "P versus NP",
    type: "idea",
    era: "20e eeuw",
    year: "1971",
    prerequisites: ["turing"],
    description: "Sommige antwoorden zijn snel te checken en toch hard te vinden. Of die kloof wiskundig vastligt, is open.",
    unlockText: "Gemakkelijk controleren is niet hetzelfde als gemakkelijk vinden. De grens is een van de grote open vragen."
  },
  {
    id: "fractals",
    period: "eeuw20",
    image: "fractals.webp",
    title: "Fractals",
    type: "idea",
    era: "20e eeuw",
    year: null,
    prerequisites: ["calculus"],
    description: "Een kustlijn wordt langer naarmate je fijner meet. Dimensie is dan geen geheel getal meer.",
    unlockText: "Herhaling op elke schaal wordt een meetkundig object. Ruwheid krijgt een maat."
  },
  {
    id: "mandelbrot",
    period: "eeuw20",
    image: "mandelbrot.webp",
    title: "Benoît Mandelbrot",
    type: "person",
    era: "20e eeuw",
    year: "1924–2010",
    prerequisites: ["fractals"],
    description: "Die gebroken vormen hadden een naam en een plaatje nodig voordat ze een vak werden.",
    unlockText: "De Mandelbrotverzameling maakt oneindige rand zichtbaar. Fractals krijgen een gezicht."
  },
  {
    id: "wiles",
    period: "eeuw20",
    image: "wiles.webp",
    title: "Andrew Wiles",
    type: "person",
    era: "20e eeuw",
    year: "1953–",
    prerequisites: ["fermat", "groepentheorie"],
    description: "Fermats kanttekening bleef drie eeuwen een rand. De sluiting vroeg om moderne algebraïsche meetkunde.",
    unlockText: "Fermats laatste stelling is bewezen. Een oude claim wordt een stelling van deze eeuw."
  },
  {
    id: "perelman",
    period: "eeuw20",
    image: "perelman.webp",
    title: "Grigori Perelman",
    type: "person",
    era: "21e eeuw",
    year: "1966–",
    prerequisites: ["topologie"],
    description: "Poincarés vraag over de driedimensionale sfeer bleef open tot de Ricci-stroom haar dwong.",
    unlockText: "Het Poincarévermoeden is opgelost. Vorm in drie dimensies krijgt een sluitstuk."
  },
];

const MATH_NETWORK_EDGES = [
    ["tellen", "rekenkunde"],
  ["rekenkunde", "getal"],
  ["natuurlijke-getallen", "combinatieleer"],
  ["getal", "thales"],
  ["breuken", "thales"],
  ["thales", "pythagoras"],
  ["getal", "pythagoras"],
  ["breuken", "pythagoras"],
  ["pythagoras", "stelling-pythagoras"],
  ["stelling-pythagoras", "irrationale-getallen"],
  ["irrationale-getallen", "bewijs"],
  ["euclides", "polyeders"],
  ["euclides", "hypatia"],
  ["kegelsneden", "hypatia"],
  ["priemgetallen", "perfecte-getallen"],
  ["priemgetallen", "eratosthenes"],
  ["archimedes", "pi"],
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
  ["euclides", "ptolemaeus"],
  ["kegelsneden", "ptolemaeus"],
  ["natuurlijke-getallen", "diophantus"],
  ["breuken", "diophantus"],
  ["diophantus", "diofantische-vergelijkingen"],
  ["euclides", "tessellaties"],
  ["polyeders", "tessellaties"],
  ["natuurlijke-getallen", "boethius"],
  ["euclides", "boethius"],
  ["natuurlijke-getallen", "aryabhata"],
  ["pi", "aryabhata"],
  ["ptolemaeus", "goniometrie"],
  ["aryabhata", "goniometrie"],
  ["al-khwarizmi", "matrices"],
  ["combinatieleer", "matrices"],
  ["algebra", "omar-khayyam"],
  ["euclides", "omar-khayyam"],
  ["plaatswaarde", "al-khwarizmi"],
  ["breuken", "al-khwarizmi"],
  ["al-khwarizmi", "algoritme"],
  ["al-khwarizmi", "algebra"],
  ["negatieve-getallen", "algebra"],
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
  ["algebra", "cardano"],
  ["cardano", "imaginaire-getallen"],
  ["imaginaire-getallen", "de-moivre"],
  ["algebra", "napier"],
  ["napier", "logaritmes"],
  ["logaritmes", "getal-e"],
  ["descartes", "cartesisch"],
  ["pascal", "driehoek-van-pascal"],
  ["calculus", "oneindige-reeksen"],
  ["euler", "grafentheorie"],
  ["kansrekening", "bernoulli"],
  ["calculus", "bernoulli"],
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
  ["fermat", "sophie-germain"],
  ["galois", "groepentheorie"],
  ["algoritme", "babbage"],
  ["babbage", "lovelace"],
  ["algebra", "hamilton"],
  ["cartesisch", "hamilton"],
  ["hamilton", "quaternionen"],
  ["algebra", "abel"],
  ["bewijs", "booleaanse-logica"],
  ["algebra", "booleaanse-logica"],
  ["riemann", "riemann-hypothese"],
  ["priemgetallen", "riemann-hypothese"],
  ["cantor", "verzamelingenleer"],
  ["groepentheorie", "noether"],
  ["verzamelingenleer", "hilbert"],
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
  ["differentiaalvergelijkingen", "navier-stokes-ai-2026"],
  ["priemgetallen", "ramanujan"],
  ["oneindige-reeksen", "ramanujan"],
  ["hilbert", "von-neumann"],
  ["kansrekening", "von-neumann"],
  ["von-neumann", "speltheorie"],
  ["speltheorie", "nash"],
  ["turing", "informatietheorie"],
  ["kansrekening", "informatietheorie"],
  ["turing", "p-versus-np"],
  ["calculus", "fractals"],
  ["fractals", "mandelbrot"],
  ["fermat", "wiles"],
  ["groepentheorie", "wiles"],
  ["topologie", "perelman"],
  ["informatietheorie", "ai-wiskunde"]
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

function mathNetworkIsVisible(node) {
  if (!node) return false;
  if (mathNetworkIsAdmin()) return true;
  if (mathNetworkUnlocked(node.id)) return true;
  return mathNetworkPrerequisitesMet(node);
}

function mathNetworkCanUnlock(node) {
  if (mathNetworkUnlocked(node.id)) return false;
  return mathNetworkInsightScore() >= mathNetworkNodeCost(node)
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
  return MATH_NETWORK_EDGES.filter(([a, b]) => {
    const na = mathNetworkNodeById(a);
    const nb = mathNetworkNodeById(b);
    return mathNetworkIsVisible(na) || mathNetworkIsVisible(nb);
  });
}

const MATH_NETWORK_VIEW = { width: 1480, height: 3280 };
const MATH_NETWORK_GRID = { originX: 130, originY: 80, colW: 118, rowH: 100 };
const MATH_NETWORK_CAMERA = { x: 4, y: 0, scale: 1.3 };

const MATH_NETWORK_PERIODS = [
  { id: "oudheid", title: "Oudheid", tint: "#c4a06a", row0: -0.55, row1: 6.7 },
  { id: "middeleeuwen", title: "Middeleeuwen", tint: "#7d9a6a", row0: 6.7, row1: 11.35 },
  { id: "vroegmodern", title: "Vroegmodern", tint: "#c4845a", row0: 11.15, row1: 18.15 },
  { id: "eeuw19", title: "19e eeuw", tint: "#9aa3b0", row0: 18.15, row1: 22.85 },
  { id: "eeuw20", title: "20e eeuw+", tint: "#6e88a8", row0: 22.85, row1: 29.4 }
];

/* Drempel = periode + type + extraPrereq × (aantal voorwaarden − 1).
   Pas alleen deze tabel aan. override wint van de som. */
const MATH_NETWORK_COST = {
  period: {
    oudheid: 5,
    middeleeuwen: 10,
    vroegmodern: 15,
    eeuw19: 20,
    eeuw20: 25
  },
  type: {
    idea: 0,
    person: 5,
    work: 8,
    problem: 10,
    breakthrough: 12
  },
  extraPrereq: 3,
  override: {
    "navier-stokes-ai-2026": 50,
    "ai-wiskunde": 50
  }
};

function mathNetworkPeriodById(id) {
  return MATH_NETWORK_PERIODS.find((p) => p.id === id) || null;
}

function mathNetworkNodePeriod(id) {
  const node = mathNetworkNodeById(id);
  return node?.period || "oudheid";
}

function mathNetworkNodeCost(node) {
  if (!node) return 0;
  const table = MATH_NETWORK_COST;
  if (table.override && table.override[node.id] != null) {
    return Number(table.override[node.id]);
  }
  const period = node.period || mathNetworkNodePeriod(node.id);
  const base = Number((table.period && table.period[period]) || 0);
  const extraType = Number((table.type && table.type[node.type]) || 0);
  const prereqs = (node.prerequisites || []).length;
  const extraReq = Math.max(0, prereqs - 1) * Number(table.extraPrereq || 0);
  return Math.max(0, base + extraType + extraReq);
}


function mathNetworkPeriodBounds(period) {
  const y0 = MATH_NETWORK_GRID.originY + period.row0 * MATH_NETWORK_GRID.rowH;
  const y1 = MATH_NETWORK_GRID.originY + period.row1 * MATH_NETWORK_GRID.rowH;
  return { y0: y0, y1: y1, mid: (y0 + y1) / 2 };
}

function mathNetworkPeriodUnlocked(periodId) {
  if (mathNetworkIsAdmin()) return true;
  if (periodId === "oudheid") return true;
  return MATH_NETWORK_NODES.some((node) => {
    return mathNetworkNodePeriod(node.id) === periodId && mathNetworkIsVisible(node);
  });
}

function mathNetworkPeriodProgress(periodId) {
  const nodes = MATH_NETWORK_NODES.filter((node) => mathNetworkNodePeriod(node.id) === periodId);
  const total = nodes.length;
  const done = nodes.filter((node) => mathNetworkUnlocked(node.id)).length;
  return { done: done, total: total };
}
let MATH_NETWORK_HINT_HIDDEN = false;
const MATH_NETWORK_ZOOM = { min: 0.5, max: 1.85, step: 0.15 };
let MATH_NETWORK_OPEN_ID = null;

function mathNetworkGrid(col, row) {
  return [
    MATH_NETWORK_GRID.originX + col * MATH_NETWORK_GRID.colW,
    MATH_NETWORK_GRID.originY + row * MATH_NETWORK_GRID.rowH
  ];
}

const MATH_NETWORK_POSITIONS = {
  "tellen": [4, 0],
  "getal": [4, 1],
  "natuurlijke-getallen": [2, 2],
  "breuken": [6, 2],
  "pythagoras": [6, 3],
  "bewijs": [6, 4],
  "euclides": [5, 5],
  "priemgetallen": [3.6, 5],
  "archimedes": [6.5, 5],
  "kegelsneden": [8, 5],
  "rekenkunde": [2.4, 1],
  "combinatieleer": [0.7, 2.3],
  "thales": [8, 2.15],
  "stelling-pythagoras": [7.7, 3],
  "irrationale-getallen": [8, 4],
  "eratosthenes": [2.1, 4.2],
  "perfecte-getallen": [2.2, 5.7],
  "polyeders": [8.7, 5.5],
  "hypatia": [4.1, 5.85],
  "pi": [7.35, 5.85],
  "nul": [2, 7],
  "plaatswaarde": [4, 7],
  "negatieve-getallen": [2, 8],
  "brahmagupta": [0.8, 8.6],
  "al-khwarizmi": [4, 8.6],
  "algoritme": [3, 9.6],
  "algebra": [5, 9.6],
  "fibonacci": [6.4, 9.6],
  "aryabhata": [0.4, 7.15],
  "ptolemaeus": [6.6, 7.1],
  "diophantus": [8.2, 7.2],
  "boethius": [5.2, 7.35],
  "tessellaties": [7.6, 8.25],
  "diofantische-vergelijkingen": [8.4, 8.4],
  "goniometrie": [6.3, 8.55],
  "matrices": [4.2, 10.35],
  "omar-khayyam": [7.3, 10.35],
  "pascal": [3, 12.2],
  "descartes": [4.6, 12.2],
  "fermat": [6.2, 12.2],
  "kansrekening": [3, 13.3],
  "newton": [5.2, 13.3],
  "leibniz": [7, 13.3],
  "calculus": [6, 14.4],
  "de-moivre": [2.2, 15.4],
  "euler": [5, 15.4],
  "lagrange": [3.2, 16.5],
  "differentiaalvergelijkingen": [6.4, 16.5],
  "laplace": [4.4, 17.4],
  "cardano": [1.1, 12.2],
  "napier": [8.1, 12.25],
  "imaginaire-getallen": [1.1, 13.35],
  "logaritmes": [8.1, 13.35],
  "cartesisch": [5.5, 11.55],
  "driehoek-van-pascal": [1.6, 14.35],
  "getal-e": [8.0, 14.5],
  "oneindige-reeksen": [7.5, 15.55],
  "grafentheorie": [4.7, 16.35],
  "bernoulli": [2.0, 16.55],
  "galois": [1.6, 19.2],
  "gauss": [4.8, 19.2],
  "fourier": [6.4, 19.2],
  "cauchy": [8, 19.2],
  "niet-euclidische-geometrie": [7.6, 20.3],
  "riemann": [5.8, 20.3],
  "cantor": [2, 21.4],
  "topologie": [5, 21.4],
  "sophie-germain": [0.35, 19.2],
  "babbage": [3.15, 19.15],
  "groepentheorie": [1.55, 20.3],
  "lovelace": [3.15, 20.25],
  "hamilton": [8.85, 20.3],
  "abel": [0.4, 21.3],
  "booleaanse-logica": [3.35, 21.5],
  "quaternionen": [8.85, 21.4],
  "riemann-hypothese": [6.55, 21.45],
  "verzamelingenleer": [0.9, 22.35],
  "hilbert": [3, 23.4],
  "noether": [2, 24.4],
  "godel": [5, 24.4],
  "turing": [4, 25.4],
  "formele-bewijzen": [6.2, 25.4],
  "ai-wiskunde": [5, 26.4],
  "navier-stokes-ai-2026": [5.0, 28.55],
  "ramanujan": [6.6, 23.5],
  "fractals": [8.3, 24.45],
  "von-neumann": [1.15, 25.35],
  "mandelbrot": [8.3, 25.5],
  "speltheorie": [0.2, 26.4],
  "informatietheorie": [2.6, 26.45],
  "nash": [0.2, 27.4],
  "p-versus-np": [3.9, 27.4],
  "wiles": [8.0, 27.35],
};

function mathNetworkLayout() {
  const g = mathNetworkGrid;
  const positions = {};

  Object.entries(MATH_NETWORK_POSITIONS).forEach(([id, [col, row]]) => {
    positions[id] = g(col, row);
  });

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
  "al-khwarizmi": "Al-Khwarizmi",
  "diofantische-vergelijkingen": "Diofantische\nvergelijkingen",
  "omar-khayyam": "Omar Khayyam",
  "ptolemaeus": "Ptolemaeus",
  "goniometrie": "Goniometrie",
  "imaginaire-getallen": "Imaginaire\ngetallen",
  "cartesisch": "Cartesisch\nstelsel",
  "driehoek-van-pascal": "Driehoek van\nPascal",
  "oneindige-reeksen": "Oneindige\nreeksen",
  "grafentheorie": "Grafentheorie",
  "getal-e": "Het getal e",
  "sophie-germain": "Sophie Germain",
  "groepentheorie": "Groepentheorie",
  "booleaanse-logica": "Booleaanse\nlogica",
  "riemann-hypothese": "Riemann-\nhypothese",
  "verzamelingenleer": "Verzamelingenleer",
  "von-neumann": "Von Neumann",
  "informatietheorie": "Informatie-\ntheorie",
  "p-versus-np": "P versus NP",
  "speltheorie": "Speltheorie",
  "quaternionen": "Quaternionen",
  "stelling-pythagoras": "Stelling van\nPythagoras",
  "irrationale-getallen": "Irrationale\ngetallen",
  "perfecte-getallen": "Perfecte\ngetallen",
  "combinatieleer": "Combinatieleer",
  "eratosthenes": "Eratosthenes",

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
    .math-network-screen {
      background-image: none;
      background-color: #080705;
    }
    .math-network-screen::before {
      display: none;
    }
    .math-network-layout {
      width: calc(100% - 24px);
      max-width: none;
      margin: 0 auto 16px;
    }
             
    .math-network-panel {
      position: relative;
      overflow: hidden;
      padding: 14px 16px 12px;
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
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 4;
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
      height: calc(100vh - 7rem);
      height: calc(100dvh - 7rem);
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
    .math-network-band {
      pointer-events: none;
    }
    .math-network-band-label {
      fill: #cbb98a;
      fill-opacity: .16;
      font-family: Cinzel, "Times New Roman", serif;
      font-size: 10px;
      letter-spacing: .2em;
      text-anchor: start;
      pointer-events: none;
    }
    .math-network-node .node-era {
      fill: none;
      stroke-width: 2;
      pointer-events: none;
      vector-effect: non-scaling-stroke;
    }
    .math-network-eras {
      position: absolute;
      top: 12px;
      left: 58px;
      right: 12px;
      z-index: 4;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      justify-content: flex-end;
      pointer-events: none;
    }
    .math-network-eras button {
      pointer-events: auto;
      border: 1px solid rgba(230,199,122,.28);
      background: rgba(12,9,6,.82);
      color: #cbb98a;
      border-radius: 999px;
      padding: 6px 10px;
      font-size: 12px;
      letter-spacing: .04em;
      cursor: pointer;
    }
    .math-network-eras button.is-ready {
      color: #e8dcc0;
      border-color: rgba(230,199,122,.4);
    }
    .math-network-eras button.is-current {
      color: #fff6d8;
      border-color: rgba(230,199,122,.85);
      box-shadow: 0 0 0 1px rgba(230,199,122,.55);
    }
    .math-network-eras button.is-locked {
      opacity: .28;
      color: #8a7d63;
      border-color: rgba(230,199,122,.12);
      cursor: default;
    }
    .math-network-eras button.is-locked:hover {
      border-color: rgba(230,199,122,.12);
      color: #8a7d63;
    }
    .math-network-edge {
      stroke: rgba(230,199,122,.10);
      stroke-width: 1;
      fill: none;
      vector-effect: non-scaling-stroke;
    }
    .math-network-edge.edge-unlocked {
      stroke: rgba(230,199,122,.16);
      stroke-width: 1.1;
    }
    .math-network-edges.has-focus .math-network-edge:not(.edge-focus) {
      stroke: rgba(230,199,122,.06);
    }
    .math-network-edge.edge-future {
      stroke: rgba(230,199,122,.075);
      stroke-dasharray: 3 6;
    }
    .math-network-edge.edge-focus {
      stroke: rgba(255,226,150,.95);
      stroke-width: 2.6;
      stroke-dasharray: none;
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
      fill: #161310;
      stroke: #5a513f;
      filter: none;
    }
    .math-network-node.unlocked .node-core {
      fill: #3a2e16;
      stroke: #b8964a;
      filter: none;
    }
    .math-network-node.admin .node-core {
      fill: #263c2e;
      stroke: var(--good);
    }
    .math-network-node.available .node-ring {
      stroke: rgba(160,160,160,.45);
      stroke-width: 1.4;
      animation: math-network-pulse 1.7s ease-in-out infinite;
    }
    .math-network-node.unlocked .node-ring {
      stroke: rgba(184,150,74,.35);
      stroke-width: 1.1;
    }
    .math-network-node.selected .node-ring {
      stroke: #f6de9a;
      animation: none;
    }
    .math-network-node.selected .node-core {
      filter: drop-shadow(0 0 12px rgba(230,199,122,.62));
    }
    @keyframes math-network-pulse {
      0%, 100% { stroke-opacity: .35; }
      50% { stroke-opacity: 1; }
    }
    @media (prefers-reduced-motion: reduce) {
      .math-network-node.available .node-ring { animation: none; stroke-opacity: 1; }
    }
    .math-network-node .node-photo {
      pointer-events: none;
    }
    .math-network-node.locked .node-photo {
      filter: grayscale(1) brightness(.42);
      opacity: .82;
    }
    .math-network-node.available .node-photo {
      filter: grayscale(1) brightness(.42);
      opacity: .82;
    }
    .math-network-node.unlocked .node-photo {
      filter: saturate(.92);
    }
    .math-network-node .node-core {
      fill: #161310;
    }
    .math-network-node .node-pill {
      fill: rgba(8,6,4,.82);
      stroke: rgba(230,199,122,.22);
      stroke-width: 1;
    }
    .math-network-node.unlocked .node-pill {
      fill: rgba(42, 32, 14, .92);
      stroke: rgba(184,150,74,.55);
    }
    .math-network-node.available .node-pill {
      fill: rgba(36, 28, 10, .94);
      stroke: #f0d48a;
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
    .math-network-legend .swatch.open { background: #3a2e16; box-shadow: none; }
    .math-network-legend .swatch.ready { background: #1a140c; box-shadow: 0 0 0 2px #ffe29a, 0 0 8px rgba(255,214,120,.7); }
    .math-network-legend .swatch.shut { background: #161310; }
    .math-network-notice {
      margin-top: 10px;
      color: #cbb98a;
      font-size: 13px;
    }
    .math-network-hint {
      position: absolute;
      left: 50%;
      bottom: 14px;
      transform: translateX(-50%);
      z-index: 3;
      pointer-events: none;
      color: #cbb98a;
      font-size: 13px;
      background: rgba(10,8,6,.78);
      border: 1px solid rgba(230,199,122,.28);
      border-radius: 999px;
      padding: 6px 14px;
      white-space: nowrap;
    }
    .math-network-hint[hidden] { display: none; }
    .math-network-float {
      position: absolute;
      z-index: 5;
      box-sizing: border-box;
      width: min(340px, calc(100% - 24px));
      max-height: calc(100% - 24px);
      overflow: hidden;
      scrollbar-width: none;
      border: 1px solid rgba(230,199,122,.38);
      border-radius: 16px;
      padding: 14px 14px 12px;
      background: rgba(10,8,6,.94);
      box-shadow: 0 16px 40px rgba(0,0,0,.45);
      pointer-events: auto;
    }
    .math-network-float::-webkit-scrollbar {
      display: none;
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
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #f4ead3;
      background: #1a1610;
      border: 1px solid rgba(230,199,122,.35);
    }
    .math-network-tile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .math-network-detail-body { min-width: 0; flex: 1; overflow-wrap: anywhere; }
    .math-network-detail h3,
    .math-network-float h3 {
      margin: 0 0 8px;
      overflow-wrap: anywhere;
      word-break: break-word;
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
    .math-network-kvs li { margin: 0 0 10px; }
    .math-network-kvs strong {
      display: block;
      min-width: 0;
      margin-bottom: 3px;
      color: #cbb98a;
      font-size: 11px;
      font-weight: 650;
      letter-spacing: .08em;
      text-transform: uppercase;
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

function mathNetworkPeriodSvg() {
  const pad = 420;
  return MATH_NETWORK_PERIODS.map((period) => {
    const b = mathNetworkPeriodBounds(period);
    const labelY = b.y0 + 36;
    return `<g class="math-network-band" data-period="${mathNetworkEsc(period.id)}">
      <rect x="${-pad}" y="${b.y0}" width="${MATH_NETWORK_VIEW.width + pad * 2}" height="${b.y1 - b.y0}" fill="url(#band-${mathNetworkEsc(period.id)})"></rect>
      <text class="math-network-band-label" x="18" y="${labelY}">${mathNetworkEsc(period.title.toUpperCase())}</text>
    </g>`;
  }).join("");
}

function mathNetworkImageSrc(id) {
  const node = mathNetworkNodeById(id);
  return node?.image
    ? "assets/netwerk/" + node.image
    : "assets/netwerk/placeholder.webp";
}

function mathNetworkNodeSvg(node, pos, selectedId) {
  const [x, y] = pos;
  const state = mathNetworkNodeState(node);
  const selected = selectedId === node.id ? " selected" : "";

  const period = mathNetworkPeriodById(mathNetworkNodePeriod(node.id));
  const eraRing = period
    ? `<circle class="node-era" r="29" stroke="${period.tint}"></circle>`
    : "";

  return `
    <g class="math-network-node ${state}${selected}" data-network-node="${mathNetworkEsc(node.id)}"
       transform="translate(${x},${y})">
      <circle class="node-hit" r="40"></circle>
      ${eraRing}
      <circle class="node-ring" r="34"></circle>
      <circle class="node-core" r="24"></circle>
      <image class="node-photo"
             href="${mathNetworkEsc(mathNetworkImageSrc(node.id))}"
             x="-24" y="-24" width="48" height="48"
             clip-path="url(#math-network-node-clip)"
             preserveAspectRatio="xMidYMid slice"></image>
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
  const edges = document.querySelector(".math-network-edges");
  if (edges) edges.classList.toggle("has-focus", Boolean(nodeId));
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
  const cost = mathNetworkNodeCost(node);
  const need = Math.max(0, cost - mathNetworkInsightScore());
  const typeLabel = MATH_NETWORK_TYPE_LABELS[node.type] || node.type;

  let action = "";
  if (unlocked || admin) {
    action = "";
  } else if (can) {
    action = `<button class="btn primary" data-math-network-unlock="${mathNetworkEsc(node.id)}">
      Ontgrendel
    </button>
    <span class="math-network-threshold">Drempel: ${mathNetworkInzichtIco()}${cost}</span>`;
  } else {
    const missing = prereqs.filter((p) => !mathNetworkUnlocked(p.id));
    const missingText = missing.length
      ? "Vereist eerst: " + missing.map((p) => p.title).join(", ") + "."
      : (need
          ? "Nog " + need + " " + "inzichtpunt" + (need === 1 ? "" : "en") + " nodig."
          : "Nog niet beschikbaar.");
    action = `<span class="status locked">${mathNetworkEsc(missingText)}</span>
    <span class="math-network-threshold">Drempel: ${mathNetworkInzichtIco()}${cost}.</span>`;
  }

  const open = unlocked || admin;

  host.hidden = false;
  host.innerHTML = `
    <button type="button" class="math-network-float-close" data-network-close="1" aria-label="Sluiten">×</button>
    <div class="math-network-detail-card">
      <div class="math-network-tile type-${mathNetworkEsc(node.type || "idea")}">
        <img src="${mathNetworkEsc(mathNetworkImageSrc(node.id))}" alt="">
      </div>
      <div class="math-network-detail-body">
        <div class="math-network-meta">${mathNetworkEsc(typeLabel)}${node.year ? " · " + mathNetworkEsc(node.year) : ""}${node.era ? " · " + mathNetworkEsc(node.era) : ""}</div>
        <h3>${mathNetworkEsc(node.title)}</h3>
        ${open
          ? `<ul class="math-network-kvs">
               <li><strong>Idee</strong> ${mathNetworkEsc(node.description || "")}</li>
               <li><strong>Waarom het telt</strong> ${mathNetworkEsc(node.unlockText || "")}</li>
             </ul>`
          : `<p>Dit knooppunt is nog niet ontgrendeld.</p> `
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

function mathNetworkHideHint() {
  MATH_NETWORK_HINT_HIDDEN = true;
  const hint = document.getElementById("math-network-hint");
  if (hint) hint.hidden = true;
}

function mathNetworkClampCamera() {
  const canvas = document.querySelector(".math-network-canvas");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const viewW = rect.width;
  const viewH = rect.height;
  if (viewW < 8 || viewH < 8) return;

  const scale = MATH_NETWORK_CAMERA.scale;
  const worldW = MATH_NETWORK_VIEW.width;
  const worldH = MATH_NETWORK_VIEW.height;
  const pad = 48;
  const screenW = worldW * scale;
  const screenH = worldH * scale;

  if (screenW + pad * 2 <= viewW) {
    MATH_NETWORK_CAMERA.x = (viewW - screenW) / 2;
  } else {
    const minX = viewW - screenW - pad;
    const maxX = pad;
    MATH_NETWORK_CAMERA.x = Math.min(maxX, Math.max(minX, MATH_NETWORK_CAMERA.x));
  }

  if (screenH + pad * 2 <= viewH) {
    MATH_NETWORK_CAMERA.y = (viewH - screenH) / 2;
  } else {
    const minY = viewH - screenH - pad;
    const maxY = pad;
    MATH_NETWORK_CAMERA.y = Math.min(maxY, Math.max(minY, MATH_NETWORK_CAMERA.y));
  }
}

function mathNetworkApplyCamera() {
  const svg = document.querySelector(".math-network-svg");
  if (!svg) return;
  mathNetworkClampCamera();
  const c = MATH_NETWORK_CAMERA;
  svg.style.transform = "translate(" + c.x + "px," + c.y + "px) scale(" + c.scale + ")";
  mathNetworkPlaceFloat();
  mathNetworkSyncPeriodButtons();
}

function mathNetworkCurrentPeriodId() {
  const canvas = document.querySelector(".math-network-canvas");
  if (!canvas) return "oudheid";
  const rect = canvas.getBoundingClientRect();
  const worldY = (rect.height * 0.42 - MATH_NETWORK_CAMERA.y) / MATH_NETWORK_CAMERA.scale;
  let best = MATH_NETWORK_PERIODS[0].id;
  let bestDist = Infinity;
  MATH_NETWORK_PERIODS.forEach((period) => {
    const b = mathNetworkPeriodBounds(period);
    const dist = Math.abs(worldY - b.mid);
    if (dist < bestDist) {
      bestDist = dist;
      best = period.id;
    }
  });
  return best;
}

function mathNetworkFocusPeriod(id) {
  if (!mathNetworkPeriodUnlocked(id)) return;
  const period = mathNetworkPeriodById(id);
  const canvas = document.querySelector(".math-network-canvas");
  if (!period || !canvas) return;
  const rect = canvas.getBoundingClientRect();
  const b = mathNetworkPeriodBounds(period);
  const scale = MATH_NETWORK_CAMERA.scale || 1;
  MATH_NETWORK_CAMERA.x = rect.width / 2 - (MATH_NETWORK_VIEW.width / 2) * scale;
  MATH_NETWORK_CAMERA.y = rect.height * 0.38 - b.mid * scale;
  mathNetworkHideHint();
  mathNetworkApplyCamera();
}

function mathNetworkSyncPeriodButtons() {
  const current = mathNetworkCurrentPeriodId();
  document.querySelectorAll("[data-network-period]").forEach((btn) => {
    const id = btn.getAttribute("data-network-period");
    const open = mathNetworkPeriodUnlocked(id);
    const prog = mathNetworkPeriodProgress(id);
    btn.classList.toggle("is-locked", !open);
    btn.classList.toggle("is-ready", open);
    btn.classList.toggle("is-current", id === current);
    btn.disabled = !open;
    const count = btn.querySelector(".math-network-era-count");
    if (count) count.textContent = prog.done + "/" + prog.total;
  });
}

function mathNetworkPeriodButtons() {
  return MATH_NETWORK_PERIODS.map((period) => {
    const open = mathNetworkPeriodUnlocked(period.id);
    const cls = open ? "is-ready" : "is-locked";
    const prog = mathNetworkPeriodProgress(period.id);
    return `<button type="button" class="${cls}" data-network-period="${mathNetworkEsc(period.id)}" ${open ? "" : "disabled"}>
      ${mathNetworkEsc(period.title)}
      <span class="math-network-era-count">${prog.done}/${prog.total}</span>
    </button>`;
  }).join("");
}

function mathNetworkIsNarrow() {
  return window.matchMedia && window.matchMedia("(max-width: 760px)").matches;
}

function mathNetworkFocusNode(id) {
  const canvas = document.querySelector(".math-network-canvas");
  const pos = mathNetworkLayout()[id || "tellen"];
  if (!canvas || !pos) return;
  const rect = canvas.getBoundingClientRect();
  if (rect.width < 8 || rect.height < 8) return;
  const narrow = mathNetworkIsNarrow();
  const scale = narrow ? 1.05 : 1.42;
  MATH_NETWORK_CAMERA.scale = Math.min(MATH_NETWORK_ZOOM.max, Math.max(MATH_NETWORK_ZOOM.min, scale));
  MATH_NETWORK_CAMERA.x = rect.width / 2 - pos[0] * MATH_NETWORK_CAMERA.scale;
  MATH_NETWORK_CAMERA.y = rect.height * 0.34 - pos[1] * MATH_NETWORK_CAMERA.scale;
  mathNetworkApplyCamera();
}

function mathNetworkZoomAt(clientX, clientY, nextScale) {
  const canvas = document.querySelector(".math-network-canvas");
  const old = MATH_NETWORK_CAMERA.scale;
  const next = Math.min(MATH_NETWORK_ZOOM.max, Math.max(MATH_NETWORK_ZOOM.min, nextScale));
  if (next === old) return;
  const rect = canvas ? canvas.getBoundingClientRect() : { left: 0, top: 0, width: 800, height: 600 };
  const cx = clientX - rect.left;
  const cy = clientY - rect.top;
  const worldX = (cx - MATH_NETWORK_CAMERA.x) / old;
  const worldY = (cy - MATH_NETWORK_CAMERA.y) / old;
  MATH_NETWORK_CAMERA.scale = next;
  MATH_NETWORK_CAMERA.x = cx - worldX * next;
  MATH_NETWORK_CAMERA.y = cy - worldY * next;
  mathNetworkHideHint();
  mathNetworkApplyCamera();
}

function mathNetworkZoomBy(direction, clientX, clientY) {
  const canvas = document.querySelector(".math-network-canvas");
  const old = MATH_NETWORK_CAMERA.scale;
  if (direction === "reset") {
    mathNetworkFocusNode("tellen");
    return;
  }
  const delta = direction === "in" ? MATH_NETWORK_ZOOM.step : -MATH_NETWORK_ZOOM.step;
  const next = Math.min(MATH_NETWORK_ZOOM.max, Math.max(MATH_NETWORK_ZOOM.min, old + delta));
  if (next === old) return;
  const rect = canvas ? canvas.getBoundingClientRect() : { width: 800, height: 600 };
  const cx = clientX != null ? clientX - rect.left : rect.width / 2;
  const cy = clientY != null ? clientY - rect.top : rect.height / 2;
  const worldX = (cx - MATH_NETWORK_CAMERA.x) / old;
  const worldY = (cy - MATH_NETWORK_CAMERA.y) / old;
  MATH_NETWORK_CAMERA.scale = next;
  MATH_NETWORK_CAMERA.x = cx - worldX * next;
  MATH_NETWORK_CAMERA.y = cy - worldY * next;
  mathNetworkHideHint();
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
  const pointers = new Map();
  let pinchStartDist = 0;
  let pinchStartScale = 1;

  canvas.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  canvas.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });
  
  canvas.addEventListener("wheel", function (e) {
    if (e.target.closest("#math-network-float")) return;
    e.preventDefault();
    mathNetworkZoomBy(e.deltaY < 0 ? "in" : "out", e.clientX, e.clientY);
  }, { passive: false });
  

  canvas.addEventListener("pointerdown", function (e) {
    if (e.target.closest("[data-network-zoom]")) return;
    if (e.target.closest("[data-network-period]")) return;
    if (e.target.closest("#math-network-float")) return;
    if (e.button != null && e.button !== 0) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size >= 2) {
      dragging = false;
      const pts = Array.from(pointers.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      pinchStartDist = Math.hypot(dx, dy) || 1;
      pinchStartScale = MATH_NETWORK_CAMERA.scale;
      canvas.classList.remove("is-panning");
      e.preventDefault();
      return;
    }
    dragging = true;
    moved = false;
    lastX = e.clientX;
    lastY = e.clientY;
    const node = e.target.closest("[data-network-node]");
    nodeId = node ? node.getAttribute("data-network-node") : null;
    canvas.classList.add("is-panning");
    e.preventDefault();
  });

  canvas.addEventListener("pointermove", function (e) {
    if (pointers.has(e.pointerId)) {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }
    if (pointers.size >= 2) {
      const pts = Array.from(pointers.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      const dist = Math.hypot(dx, dy) || 1;
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;
      mathNetworkZoomAt(midX, midY, pinchStartScale * (dist / pinchStartDist));
      e.preventDefault();
      return;
    }
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
    lastX = e.clientX;
    lastY = e.clientY;
    MATH_NETWORK_CAMERA.x += dx;
    MATH_NETWORK_CAMERA.y += dy;
    if (moved) mathNetworkHideHint();
    mathNetworkApplyCamera();
    e.preventDefault();
  });

  function endPan(e) {
    if (e && e.pointerId != null) pointers.delete(e.pointerId);
    if (pointers.size >= 2) return;
    if (pointers.size === 1) {
      const rem = Array.from(pointers.values())[0];
      lastX = rem.x;
      lastY = rem.y;
      dragging = true;
      return;
    }
    if (!dragging) {
      nodeId = null;
      canvas.classList.remove("is-panning");
      return;
    }
    dragging = false;
    canvas.classList.remove("is-panning");
    if (!moved && nodeId) {
  if (MATH_NETWORK_OPEN_ID === nodeId) {
    mathNetworkRenderDetail(null);
  } else {
    mathNetworkRenderDetail(nodeId);
  }
} else if (!moved && !nodeId) {
  mathNetworkRenderDetail(null);
}
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

  canvas.querySelectorAll("[data-network-period]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      mathNetworkFocusPeriod(btn.getAttribute("data-network-period"));
    });
  });
  mathNetworkSyncPeriodButtons();
}

function mathNetworkRender(selectedNodeId) {
  mathNetworkInjectStyles();

  const app = document.getElementById("app");
  if (!app) return;

  const positions = mathNetworkLayout();

  const regionSvg = mathNetworkPeriodSvg();

  const edgeSvg = mathNetworkConnectedEdges().map(([a, b]) => {
    const pa = positions[a];
    const pb = positions[b];
    if (!pa || !pb) return "";
    const visibleA = mathNetworkIsVisible(mathNetworkNodeById(a));
    const visibleB = mathNetworkIsVisible(mathNetworkNodeById(b));
    const unlocked = mathNetworkUnlocked(a) && mathNetworkUnlocked(b);
    const future = !(visibleA && visibleB);
    const focus = selectedNodeId && (selectedNodeId === a || selectedNodeId === b);
    return `<line class="math-network-edge${unlocked ? " edge-unlocked" : ""}${future ? " edge-future" : ""}${focus ? " edge-focus" : ""}"
      data-from="${mathNetworkEsc(a)}" data-to="${mathNetworkEsc(b)}"
      x1="${pa[0]}" y1="${pa[1]}"
      x2="${pb[0]}" y2="${pb[1]}"></line>`;
  }).join("");

  const visibleNodes = MATH_NETWORK_NODES.filter(mathNetworkIsVisible);
  const nodeSvg = visibleNodes.map((n) => mathNetworkNodeSvg(n, positions[n.id], selectedNodeId)).join("");

 app.innerHTML = `
  <div class="screen" style="background-image:url('assets/home.png')">
    ${typeof topbar === "function" ? topbar() : ""}
    <div class="math-network-layout">
      <div class="math-network-canvas">
        <div class="math-network-zoom">
          <button type="button" data-network-zoom="in" title="Zoom in">+</button>
          <button type="button" data-network-zoom="out" title="Zoom uit">−</button>
          <button type="button" data-network-zoom="reset" title="Reset weergave">↺</button>
        </div>
        <div class="math-network-eras">${mathNetworkPeriodButtons()}</div>
        <svg class="math-network-svg" viewBox="0 0 ${MATH_NETWORK_VIEW.width} ${MATH_NETWORK_VIEW.height}"
             role="img" aria-label="Historisch Wiskunde Netwerk">
          <defs>
            <clipPath id="math-network-node-clip" clipPathUnits="objectBoundingBox">
              <circle cx="0.5" cy="0.5" r="0.5"></circle>
            </clipPath>
            ${MATH_NETWORK_PERIODS.map((period) => `<linearGradient id="band-${mathNetworkEsc(period.id)}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${period.tint}" stop-opacity="0"/>
              <stop offset="18%" stop-color="${period.tint}" stop-opacity=".07"/>
              <stop offset="82%" stop-color="${period.tint}" stop-opacity=".07"/>
              <stop offset="100%" stop-color="${period.tint}" stop-opacity="0"/>
            </linearGradient>`).join("")}
          </defs>
          <g class="math-network-regions">${regionSvg}</g>
          <g class="math-network-edges">${edgeSvg}</g>
          <g class="math-network-nodes">${nodeSvg}</g>
        </svg>
        <div id="math-network-float" class="math-network-float" hidden></div>
        <div id="math-network-hint" class="math-network-hint"${MATH_NETWORK_HINT_HIDDEN ? " hidden" : ""}>Sleep om de boom te verkennen</div>
      </div>
    </div>
  </div>
`;

  mathNetworkBindPanZoom();

  if (selectedNodeId) {
    mathNetworkRenderDetail(selectedNodeId);
  } else {
    requestAnimationFrame(function () {
      mathNetworkFocusNode("tellen");
    });
  }
}

window.mathNetworkRender = mathNetworkRender;
window.mathNetworkUnlock = mathNetworkUnlock;
