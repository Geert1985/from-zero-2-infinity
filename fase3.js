/* Lesstof Fase 3 — Calculus. Breid theory/practice/exam hier uit. */
const MILESTONES_3 = [
  {
    id: "3.1",
    phase: 3,
    title: "Limieten & continuïteit",
    goal: "Begrijpen wat het betekent dat een functie een waarde nadert, en wanneer een limiet bestaat.",
    theory: `
      <h2>Milestone 3.1 — Limieten & continuïteit</h2>
      <p>Fase 3 vraagt: hoe verandert een grootheid? Voor f(x) = x² nadert f(x) naar 4 als x naar 2 gaat: lim x→2 f(x) = 4.</p>
      <h3>Limiet ≠ functiewaarde</h3>
      <p>f(x) = (x² − 1)/(x − 1) is niet gedefinieerd in x = 1, maar vereenvoudigt tot x + 1. Dus lim x→1 f(x) = 2. De limiet beschrijft het gedrag <em>in de buurt</em> van een punt.</p>
      <h3>Links, rechts en sprongen</h3>
      <p>lim x→a⁻ en lim x→a⁺ moeten gelijk zijn, anders bestaat de gewone limiet niet (sprongdiscontinuïteit).</p>
      <h3>Oneindigheid</h3>
      <p>x → ∞ betekent: x groeit zonder bovengrens. Bijvoorbeeld 1/x → 0 als x → ∞.</p>
      <h3>Continuïteit</h3>
      <p>f is continu in x = a als f(a) bestaat, de limiet bestaat, en beide gelijk zijn. Polynomen zoals x² zijn overal continu. 1/x is niet continu in 0.</p>
      <h3>0/0 is geen antwoord</h3>
      <p>Invullen kan 0/0 geven: een onbepaalde vorm. Factoriseer en schrap, daarna opnieuw de limiet.</p>
      <div class="callout">ε-δ in één zin: je kunt f(x) zo dicht bij L krijgen als je wilt, door x voldoende dicht bij a te nemen.</div>
    `,
    practice: [
      { id: "p31-1", prompt: "lim x→3 van x²", accept: ["9"] },
      { id: "p31-2", prompt: "lim x→2 van (3x + 5)", accept: ["11"] },
      { id: "p31-3", prompt: "lim x→1 van (x² − 1)/(x − 1)", accept: ["2"] },
      { id: "p31-4", prompt: "Bestaat de gewone limiet als links 3 en rechts 7? ja/nee", accept: ["nee"] },
      { id: "p31-5", prompt: "Is x³ continu in x = 2? ja/nee", accept: ["ja"] },
      { id: "p31-6", prompt: "Is 1/x continu in x = 0? ja/nee", accept: ["nee"] },
      { id: "p31-7", prompt: "0/0 is… Kies.", type: "choice",
        choices: ["gelijk aan 0", "gelijk aan 1", "een onbepaalde vorm", "oneindig"],
        accept: ["een onbepaalde vorm"] }
    ],
    exam: [
      { id: "e31-1", prompt: "lim x→2 van (x² + 1)", accept: ["5"] },
      { id: "e31-2", prompt: "lim x→3 van (2x − 5)", accept: ["1"] },
      { id: "e31-3", prompt: "lim x→1 van (x² − 1)/(x − 1)", accept: ["2"] },
      { id: "e31-4", prompt: "Als linker- en rechterlimiet verschillen, bestaat de gewone limiet? ja/nee", accept: ["nee"] },
      { id: "e31-5", prompt: "Is x² continu bij x = 3? ja/nee", accept: ["ja"] },
      { id: "e31-6", prompt: "Wat is 0/0 bij een limiet? Kies.", type: "choice",
        choices: ["Het antwoord 0", "Een onbepaalde vorm, geen eindantwoord", "Delen door oneindig", "De functiewaarde"],
        accept: ["Een onbepaalde vorm, geen eindantwoord"] }
    ]
  },
  {
    id: "3.2",
    phase: 3,
    title: "Differentiaalrekening",
    goal: "Afgeleiden berekenen en duiden als helling en ogenblikkelijke verandering.",
    theory: `
      <h2>Milestone 3.2 — Differentiaalrekening</h2>
      <p>Gemiddelde verandering van x² tussen 2 en 3 is (9−4)/(3−2) = 5: helling van de secant.</p>
      <p class="formula">f'(x) = lim h→0 [f(x + h) − f(x)]/h</p>
      <p>Dat is de ogenblikkelijke verandering: helling van de raaklijn. Voor x² bij x = 2 is f'(2) = 4.</p>
      <h3>Betekenis</h3>
      <p>Geometrie: raaklijn. Fysica: als s(t) positie is, dan v = s' en a = s''.</p>
      <h3>Rekenregels</h3>
      <p class="formula">\\frac{\\mathrm{d}}{\\mathrm{d}x}(c)=0,\\quad \\frac{\\mathrm{d}}{\\mathrm{d}x}(x^n)=n x^{n-1},\\quad (f+g)'=f'+g',\\quad (cf)'=cf'</p>
      <p>Productregel: <span class="math">(fg)' = f'g + fg'</span>. Kettingregel: <span class="math">[g(h(x))]' = g'(h(x))\\cdot h'(x)</span>.</p>
      <p>Voorbeeld: <span class="math">(3x+1)^2</span> heeft afgeleide <span class="math">2(3x+1)\\cdot 3 = 18x+6</span>.</p>
      <h3>Optimalisatie</h3>
      <p>f'(x) = 0 geeft kandidaten voor max/min, geen garantie. Voor A = 10x − x² is A' = 10 − 2x, dus x = 5.</p>
    `,
    practice: [
      { id: "p32-1", prompt: "Gemiddelde verandering van x² tussen x = 1 en x = 4", accept: ["5"] },
      { id: "p32-2", prompt: "Afgeleide van x²", accept: ["2x"] },
      { id: "p32-3", prompt: "Afgeleide van x³", accept: ["3x^2", "3x²"] },
      { id: "p32-4", prompt: "Afgeleide van 5x⁴", accept: ["20x^3", "20x³"] },
      { id: "p32-5", prompt: "Afgeleide van x² + 3x + 7", accept: ["2x+3"] },
      { id: "p32-6", prompt: "f'(2) voor f(x) = x²", accept: ["4"] },
      { id: "p32-7", prompt: "f'(3) voor f(x) = 2x³", accept: ["54"] },
      { id: "p32-8", prompt: "Afgeleide van x²(x + 1)", accept: ["3x^2+2x", "3x²+2x"] },
      { id: "p32-9", prompt: "Kritiek punt van f(x) = x² − 6x + 5", accept: ["x=3", "3"] }
    ],
    exam: [
      { id: "e32-1", prompt: "Afgeleide van x⁴", accept: ["4x^3", "4x³"] },
      { id: "e32-2", prompt: "Afgeleide van 3x³ − 2x + 7", accept: ["9x^2-2", "9x²-2"] },
      { id: "e32-3", prompt: "f'(2) voor f(x) = x² + 3x", accept: ["7"] },
      { id: "e32-4", prompt: "Afgeleide van x²(x + 1)", accept: ["3x^2+2x", "3x²+2x"] },
      { id: "e32-5", prompt: "Kritiek punt van f(x) = x² − 4x + 1", accept: ["x=2", "2"] },
      { id: "e32-6", prompt: "Wat is een afgeleide geometrisch? Kies.", type: "choice",
        choices: ["De oppervlakte onder de grafiek", "De helling van de raaklijn", "Het y-as-snijpunt", "De omtrek van een cirkel"],
        accept: ["De helling van de raaklijn"] }
    ]
  },
  {
    id: "3.3",
    phase: 3,
    title: "Integraalrekening",
    goal: "Integralen als oppervlakte en accumulatie, plus de hoofdstelling.",
    theory: `
      <h2>Milestone 3.3 — Integraalrekening</h2>
      <p>Oppervlakte onder een kromme benaderen we met smalle rechthoeken (Riemannsommen). De limiet is de bepaalde integraal ∫ₐᵇ f(x) dx.</p>
      <p>Voor f(x) = x op [0, 2] is dat een driehoek met oppervlakte 2, dus ∫₀² x dx = 2.</p>
      <h3>Primitieve</h3>
      <p>F is een primitieve van f als F' = f. ∫ f(x) dx = F(x) + C, omdat een constante afleidt naar 0.</p>
      <p class="formula">∫ xⁿ dx = xⁿ⁺¹/(n+1) + C &nbsp; (n ≠ −1)</p>
      <h3>Hoofdstelling</h3>
      <p class="formula">∫ₐᵇ f(x) dx = F(b) − F(a)</p>
      <p>Differentiëren: functie → verandering. Integreren: verandering → totale verandering. Als v de snelheid is, is ∫ v dt de verandering in positie.</p>
      <p>Bepaalde integralen geven <strong>getekende</strong> oppervlakte: onder de x-as telt negatief.</p>
      <p>Gemiddelde waarde op [a,b]: 1/(b−a) × ∫ₐᵇ f(x) dx. Voor f(x)=x op [0,4] is dat 2.</p>
    `,
    practice: [
      { id: "p33-1", prompt: "∫ van 0 tot 2 van x dx", accept: ["2"] },
      { id: "p33-2", prompt: "Een primitieve van x³ (zonder +C mag)", accept: ["x^4/4", "x⁴/4", "x^4/4+c", "x⁴/4+c"] },
      { id: "p33-3", prompt: "∫ van 0 tot 1 van 3x² dx", accept: ["1"] },
      { id: "p33-4", prompt: "∫ van 1 tot 3 van 2x dx", accept: ["8"] },
      { id: "p33-5", prompt: "Gemiddelde waarde van f(x)=x op [0, 4]", accept: ["2"] },
      { id: "p33-6", prompt: "Waarom +C bij een onbepaalde integraal? Kies.", type: "choice",
        choices: ["Omdat π irrationaal is", "Omdat primitieve functies een constante mogen verschillen", "Omdat de limiet niet bestaat", "Omdat x altijd positief is"],
        accept: ["Omdat primitieve functies een constante mogen verschillen"] }
    ],
    exam: [
      { id: "e33-1", prompt: "Een primitieve van x³", accept: ["x^4/4", "x⁴/4", "x^4/4+c", "x⁴/4+c"] },
      { id: "e33-2", prompt: "Een primitieve van 6x² + 4", accept: ["2x^3+4x", "2x³+4x", "2x^3+4x+c", "2x³+4x+c"] },
      { id: "e33-3", prompt: "∫ van 0 tot 2 van x dx", accept: ["2"] },
      { id: "e33-4", prompt: "∫ van 1 tot 3 van 2x dx", accept: ["8"] },
      { id: "e33-5", prompt: "Als v(t) de snelheid is, wat is ∫ v dt van a tot b? Kies.", type: "choice",
        choices: ["De versnelling", "De verandering in positie tussen a en b", "De gemiddelde helling van x²", "Een sprongdiscontinuïteit"],
        accept: ["De verandering in positie tussen a en b"] }
    ]
  },
  {
    id: "3.4",
    phase: 3,
    title: "Multivariabele calculus",
    goal: "Partiële afgeleiden, gradiënt en het idee van meervoudige integralen.",
    theory: `
      <h2>Milestone 3.4 — Multivariabele calculus</h2>
      <p>z = f(x, y) hangt van twee variabelen af. Voorbeeld: f(x,y) = x² + y², een oppervlak in 3D.</p>
      <h3>Partiële afgeleiden</h3>
      <p>Voor f = x² + 3xy + y² is ∂f/∂x = 2x + 3y (y constant) en ∂f/∂y = 3x + 2y (x constant).</p>
      <h3>Gradiënt</h3>
      <p class="formula">∇f = (∂f/∂x, ∂f/∂y)</p>
      <p>Voor x² + y² is ∇f = (2x, 2y). In (1,2) dus (2,4). De gradiënt wijst naar de steilste toename. Richtingsafgeleide: ∇f · u.</p>
      <h3>Kritieke punten</h3>
      <p>Los tegelijk ∂f/∂x = 0 en ∂f/∂y = 0. Voor x² + y² is dat (0,0), een minimum.</p>
      <h3>Meervoudige integralen</h3>
      <p>∬_D f dA somt over een gebied (volume onder een oppervlak als f ≥ 0). ∭ f dV somt over een volume. Vectoren horen bij Fase 4.</p>
    `,
    practice: [
      { id: "p34-1", prompt: "<span class=\"math\">\\partial f/\\partial x</span> voor f = x² + 3xy + y²", accept: ["2x+3y"] },
      { id: "p34-2", prompt: "<span class=\"math\">\\partial f/\\partial y</span> voor dezelfde functie", accept: ["3x+2y"] },
      { id: "p34-3", prompt: "Gradiënt van x² + y² (als ( , ))", accept: ["(2x,2y)", "2x,2y"] },
      { id: "p34-4", prompt: "Gradiënt van x² + y² in (1, 2)", accept: ["(2,4)", "2,4"] },
      { id: "p34-5", prompt: "Kritiek punt van x² + y²", accept: ["(0,0)", "0,0"] },
      { id: "p34-6", prompt: "Wat meet <span class=\"math\">\\partial f/\\partial x</span>? Kies.", type: "choice",
        choices: ["Verandering in x terwijl y constant blijft", "Altijd de oppervlakte onder de grafiek", "Alleen de y-richting", "De omtrek van D"],
        accept: ["Verandering in x terwijl y constant blijft"] }
    ],
    exam: [
      { id: "e34-1", prompt: "<span class=\"math\">\\partial f/\\partial x</span> voor f = x² + 4xy + y²", accept: ["2x+4y"] },
      { id: "e34-2", prompt: "<span class=\"math\">\\partial f/\\partial y</span> voor dezelfde functie", accept: ["4x+2y"] },
      { id: "e34-3", prompt: "Gradiënt van x² + y²", accept: ["(2x,2y)", "2x,2y"] },
      { id: "e34-4", prompt: "Kritiek punt van x² + y²", accept: ["(0,0)", "0,0"] },
      { id: "e34-5", prompt: "Wat doet de gradiënt intuïtief? Kies.", type: "choice",
        choices: ["Hij geeft de omtrek van een cirkel", "Hij wijst naar de sterkste lokale toename", "Hij is altijd gelijk aan 0/0", "Hij vervangt de integraal"],
        accept: ["Hij wijst naar de sterkste lokale toename"] }
    ]
  }
];

const PHASE_EXAM_3 = [
  { id: "f3-1", prompt: "lim x→2 van (x² + 1)", accept: ["5"] },
  { id: "f3-2", prompt: "lim x→3 van (2x − 5)", accept: ["1"] },
  { id: "f3-3", prompt: "lim x→1 van (x² − 1)/(x − 1)", accept: ["2"] },
  { id: "f3-4", prompt: "Afgeleide van x⁴", accept: ["4x^3", "4x³"] },
  { id: "f3-5", prompt: "Afgeleide van 3x³ − 2x + 7", accept: ["9x^2-2", "9x²-2"] },
  { id: "f3-6", prompt: "f'(2) voor f(x) = x² + 3x", accept: ["7"] },
  { id: "f3-7", prompt: "Afgeleide van x²(x + 1)", accept: ["3x^2+2x", "3x²+2x"] },
  { id: "f3-8", prompt: "Kritiek punt van f(x) = x² − 4x + 1", accept: ["x=2", "2"] },
  { id: "f3-9", prompt: "Een primitieve van x³", accept: ["x^4/4", "x⁴/4", "x^4/4+c", "x⁴/4+c"] },
  { id: "f3-10", prompt: "∫ van 0 tot 2 van x dx", accept: ["2"] },
  { id: "f3-11", prompt: "∫ van 1 tot 3 van 2x dx", accept: ["8"] },
  { id: "f3-12", prompt: "<span class=\"math\">\\partial f/\\partial x</span> voor f = x² + 4xy + y²", accept: ["2x+4y"] },
  { id: "f3-13", prompt: "<span class=\"math\">\\partial f/\\partial y</span> voor dezelfde functie", accept: ["4x+2y"] },
  { id: "f3-14", prompt: "Gradiënt van x² + y²", accept: ["(2x,2y)", "2x,2y"] },
  { id: "f3-15", prompt: "Wat is een afgeleide geometrisch? Kies.", type: "choice",
    choices: ["De helling van de raaklijn", "De oppervlakte onder de grafiek", "Een onbepaalde vorm", "Een Riemannsom van oneindig"],
    accept: ["De helling van de raaklijn"] }
];
