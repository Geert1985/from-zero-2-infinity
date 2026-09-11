/* Lesstof Fase 7 — Differentiaalmeetkunde & ijkvelden. Breid theory/practice/exam hier uit. */
const MILESTONES_7 = [
  {
    id: "7.1",
    phase: 7,
    title: "Vectorbundels & connecties",
    goal: "Manifolds, raakbundels, connecties en kromming als pad-afhankelijkheid.",
    theory: `
      <h2>Milestone 7.1 — Vectorbundels & connecties</h2>
      <div class="callout">Deze fase is een culminatiepunt, geen verkorte route naar een theorie van alles. Tussen Fase 4–6 en Yang–Mills horen nog Lie-groepen en -algebra's, representaties, differentiaalvormen, manifolds en (voor het mass gap) functionaalanalyse / Hilbertruimten. Hier leer je de taal herkennen, niet elk tussenbewijs afvinken.</div>
      <p>Een manifold lijkt lokaal op <span class="math">\\mathbb{R}^n</span>, globaal niet per se. In ieder punt p zit een raakruimte <span class="math">T_pM</span>. Alle raakruimten samen vormen de raakbundel <span class="math">TM</span>. Een vectorveld is een sectie: in ieder punt één vector.</p>
      <p>Fibers boven verschillende punten kun je niet zomaar vergelijken. Een <strong>connectie</strong> zegt hoe je een vector parallel langs een kromme verplaatst. Christoffelsymbolen <span class="math">\\Gamma^\\rho{}_{\\mu\\nu}</span> zijn de lokale coëfficiënten van die regel.</p>
      <p class="formula">\\frac{\\mathrm{d}^2 x^\\rho}{\\mathrm{d}\\lambda^2}+\\Gamma^\\rho{}_{\\mu\\nu}\\frac{\\mathrm{d}x^\\mu}{\\mathrm{d}\\lambda}\\frac{\\mathrm{d}x^\\nu}{\\mathrm{d}\\lambda}=0</p>
      <p>Dat is de geodeet: “zo recht mogelijk”. Transport rond een lus kan een andere vector teruggeven — dat is kromming (Riemann). Torsie-vrij en metriek-compatibel: Levi-Civita.</p>
      <p>Een principale G-bundel heeft de groep zelf als fiber. Via een representatie <span class="math">\\rho:G\\to\\mathrm{GL}(V)</span> krijg je een geassocieerde vectorbundel. Lokaal is A een Lie-algebra-waardige 1-vorm, F een 2-vorm: de veldsterkte.</p>
      <p class="formula">F=\\mathrm{d}A+A\\wedge A</p>
      <p>In U(1) is de algebra abels, dus A∧A valt weg. De Hodge-ster maakt van F∧*F een topvorm die je over ruimtetijd integreert.</p>
    `,
    practice: [
      { id: "p71-1", prompt: "TₚM is de raakruimte in één punt. TM is… Kies.", type: "choice",
        choices: ["de verzameling van alle raakruimten samen", "alleen de nulvector", "een priemgetal", "de Fourier-reeks van M"],
        accept: ["de verzameling van alle raakruimten samen"] },
      { id: "p71-2", prompt: "Een vectorveld is een sectie van TM. ja/nee", accept: ["ja"] },
      { id: "p71-3", prompt: "Twee eigenschappen van Levi-Civita? Kies.", type: "choice",
        choices: ["Metriekcompatibiliteit en torsievrijheid", "Alleen commutativiteit van +", "det = 0", "Een sprongdiscontinuïteit"],
        accept: ["Metriekcompatibiliteit en torsievrijheid"] },
      { id: "p71-4", prompt: "F is lokaal welk soort object? Kies.", type: "choice",
        choices: ["een Lie-algebra-waardige 2-vorm", "een priemfactor", "een rest bij deling", "een rationale breuk"],
        accept: ["een Lie-algebra-waardige 2-vorm"] }
    ],
    exam: [
      { id: "e71-1", prompt: "Verschil TₚM en TM? Kies.", type: "choice",
        choices: ["TₚM is één raakruimte; TM is de bundel van alle raakruimten", "Ze zijn hetzelfde getal", "TM is altijd ℝ", "TₚM is een groep"],
        accept: ["TₚM is één raakruimte; TM is de bundel van alle raakruimten"] },
      { id: "e71-2", prompt: "Wat meet de Riemann-tensor? Kies.", type: "choice",
        choices: ["Niet-commuterende covariante afgeleiden / pad-afhankelijk transport", "Alleen de omtrek van een cirkel", "De GGD van twee getallen", "Een Fourier-coëfficiënt"],
        accept: ["Niet-commuterende covariante afgeleiden / pad-afhankelijk transport"] },
      { id: "e71-3", prompt: "Waarom verdwijnt A∧A in U(1)? Kies.", type: "choice",
        choices: ["De Lie-algebra is abels, de commutator is nul", "π is irrationaal", "Manifolds bestaan niet", "F is een 0-vorm"],
        accept: ["De Lie-algebra is abels, de commutator is nul"] }
    ]
  },
  {
    id: "7.2",
    phase: 7,
    title: "Yang–Mills",
    goal: "Lokale ijk-symmetrie, veldsterkte, actie en de mass gap-vraag.",
    theory: `
      <h2>Milestone 7.2 — Yang–Mills</h2>
      <p>Een globale fase e^{iα} laat de afgeleide met rust. Een lokale fase α(x) produceert extra termen. A_μ compenseert die: de covariante afgeleide D = d + A.</p>
      <p class="formula">F=\\mathrm{d}A+A\\wedge A,\\qquad F^a_{\\mu\\nu}=\\partial_\\mu A^a_\\nu-\\partial_\\nu A^a_\\mu+g f^a{}_{bc}A^b_\\mu A^c_\\nu</p>
      <p>Voor U(1) valt de niet-lineaire term weg (elektromagnetisme). Niet-abels: het veld interageert met zichzelf.</p>
      <p class="formula">S_{\\mathrm{YM}}\\propto\\int \\mathrm{Tr}(F\\wedge *F)</p>
      <p>Variatie geeft in vacuüm D_μ F^{μν}=0. Bianchi: DF=0. Een Wilson-lus meet holonomie rond een gesloten pad.</p>
      <p>Sterke wisselwerking: SU(3)_C. Elektrozwak vóór breking: SU(2)_L × U(1)_Y. Een mass gap: een strikt positieve minimale energie boven het vacuüm. Dat is een quantum-spectraalprobleem, geen klassieke formule.</p>
    `,
    practice: [
      { id: "p72-1", prompt: "F in vormnotatie", accept: ["da+a∧a", "dA+A∧A", "da+a^a"] },
      { id: "p72-2", prompt: "Gaugegroep van de sterke wisselwerking", accept: ["su(3)", "su(3)_c", "su3"] },
      { id: "p72-3", prompt: "Elektrozwak vóór breking", accept: ["su(2)xu(1)", "su(2)_l×u(1)_y", "su(2)x u(1)"] },
      { id: "p72-4", prompt: "Vacuümvergelijking uit de YM-actie? Kies.", type: "choice",
        choices: ["D_μ F^{μν} = 0", "2+2=5", "det A = π", "∫x dx = groep"],
        accept: ["D_μ F^{μν} = 0"] }
    ],
    exam: [
      { id: "e72-1", prompt: "Waarom introduceert men A_μ? Kies.", type: "choice",
        choices: ["Om de extra lokale fase te compenseren en D te definiëren", "Om priemgetallen te tellen", "Om ℕ te sluiten", "Om een parabool te tekenen"],
        accept: ["Om de extra lokale fase te compenseren en D te definiëren"] },
      { id: "e72-2", prompt: "Sterke interactie-groep", accept: ["su(3)", "su(3)_c", "su3"] },
      { id: "e72-3", prompt: "Wat is een mass gap? Kies.", type: "choice",
        choices: ["Een strikt positieve minimale energie boven het vacuüm", "Een gat in een donut", "Een rest bij deling door 3", "Een Fourier-term met n=0"],
        accept: ["Een strikt positieve minimale energie boven het vacuüm"] }
    ]
  },
  {
    id: "7.3",
    phase: 7,
    title: "Het begrip",
    goal: "De keten van groep tot mass gap in eigen woorden sluiten.",
    theory: `
      <h2>Milestone 7.3 — Het begrip</h2>
      <p>De keten: groep G → lokale symmetrie U(x) → bundel → connectie A → covariante afgeleide D=d+A → kromming F=dA+A∧A → actie ∫ Tr(F∧*F) → kwantisatie → niet-perturbatieve structuur → mass-gap-vraag.</p>
      <p>Fase 4 keert terug als representaties. Fase 5 als modi/oscillatoren. Fase 6 als topologische sectoren en tensorgrammatica. Ruimtetijdkromming (metriek/Levi-Civita) is niet hetzelfde als gaugekromming (interne fiber), maar de vormtaal is verwant.</p>
      <p>SU(3) is niet “rotaties in 3D”: het is een 8-dimensionale Lie-groep op complexe 3-vectoren. Lokale invariantie dwingt koppeling tussen materie en A. Gluonen interageren omdat F niet-lineair in A is.</p>
      <div class="callout">Beheersing hier is de keten kunnen navertellen — niet ieder bewijs uit constructieve QFT.</div>
    `,
    practice: [
      { id: "p73-1", prompt: "Veldsterkte F is een …-vorm", accept: ["2", "2-vorm", "tweevorm"] },
      { id: "p73-2", prompt: "Is gaugekromming hetzelfde als ruimtetijdkromming? ja/nee", accept: ["nee"] },
      { id: "p73-3", prompt: "Waarom interageren gluonen? Kies.", type: "choice",
        choices: ["Omdat F niet-lineair in A is (niet-abelse commutator)", "Omdat 1 geen priem is", "Omdat π = 22/7", "Omdat TM leeg is"],
        accept: ["Omdat F niet-lineair in A is (niet-abelse commutator)"] }
    ],
    exam: [
      { id: "e73-1", prompt: "Waarom is F een 2-vorm? Kies.", type: "choice",
        choices: ["Kromming koppelt aan georiënteerde oppervlakjes en is antisymmetrisch in twee richtingen", "Omdat 2 even is", "Omdat groepen altijd 2 elementen hebben", "Omdat Fourier alleen cosinus heeft"],
        accept: ["Kromming koppelt aan georiënteerde oppervlakjes en is antisymmetrisch in twee richtingen"] },
      { id: "e73-2", prompt: "Principale bundel vs alleen vectorbundel? Kies.", type: "choice",
        choices: ["De fiber draagt de groep zelf; vectorbundels komen via representaties", "Er bestaat geen verschil", "Een principale bundel is een breuk", "Het is een getallenlijn"],
        accept: ["De fiber draagt de groep zelf; vectorbundels komen via representaties"] },
      { id: "e73-3", prompt: "Mass gap is vooral welk soort probleem? Kies.", type: "choice",
        choices: ["Quantum en spectraal, niet enkel een klassieke formule", "Alleen meetkunde van een driehoek", "Alleen optellen tot 10", "Alleen de omtrek van S¹"],
        accept: ["Quantum en spectraal, niet enkel een klassieke formule"] }
    ]
  }
];

const PHASE_EXAM_7 = [
  { id: "f7-1", prompt: "TM is… Kies.", type: "choice",
    choices: ["de bundel van alle raakruimten", "alleen ℤ", "een Fourier-reeks", "de rest van 17÷3"],
    accept: ["de bundel van alle raakruimten"] },
  { id: "f7-2", prompt: "F = dA + A∧A. ja/nee", accept: ["ja"] },
  { id: "f7-3", prompt: "Sterke wisselwerking", accept: ["su(3)", "su(3)_c", "su3"] },
  { id: "f7-4", prompt: "Vacuüm YM-vergelijking? Kies.", type: "choice",
    choices: ["D_μ F^{μν} = 0", "a+b=ab", "ℕ is een groep onder +", "∫1 dx = i"],
    accept: ["D_μ F^{μν} = 0"] },
  { id: "f7-5", prompt: "Mass gap? Kies.", type: "choice",
    choices: ["Positieve minimale energie boven het vacuüm", "Een homeomorfisme van een vierkant", "Een wortel van 2", "Een secanthelling"],
    accept: ["Positieve minimale energie boven het vacuüm"] }
];
