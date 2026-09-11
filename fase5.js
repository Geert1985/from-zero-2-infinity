/* Lesstof Fase 5 — DV's & complexe getallen. Breid theory/practice/exam hier uit. */
const MILESTONES_5 = [
  {
    id: "5.1",
    phase: 5,
    title: "Complexe getallen",
    goal: "Rekenen in ℂ, het complexe vlak, poolvorm en de formule van Euler.",
    theory: `
      <h2>Milestone 5.1 — Complexe getallen</h2>
      <p>i is gedefinieerd door i² = −1. Een complex getal is z = a + bi. Optellen: reële en imaginaire delen apart. Vermenigvuldigen: uitwerken en i² = −1.</p>
      <p>Geconjugeerde van a+bi is a−bi. Modulus: |a+bi| = √(a²+b²). |3+4i| = 5.</p>
      <p>In het vlak is z het punt (a, b). Vermenigvuldigen met i is een rotatie van 90° tegenwijzerzin.</p>
      <p>Poolvorm: z = r e^{iθ} met r = |z|. Euler: e^{iθ} = cos θ + i sin θ. Dus e^{iπ} = −1 en e^{iπ/2} = i. 1+i = √2 e^{iπ/4}.</p>
    `,
    practice: [
      { id: "p51-1", prompt: "i²", accept: ["-1"] },
      { id: "p51-2", prompt: "i³", accept: ["-i"] },
      { id: "p51-3", prompt: "(3+2i)+(4−5i)", accept: ["7-3i"] },
      { id: "p51-4", prompt: "(2+3i)(4+i)", accept: ["5+14i"] },
      { id: "p51-5", prompt: "Geconjugeerde van 7−3i", accept: ["7+3i"] },
      { id: "p51-6", prompt: "|3+4i|", accept: ["5"] },
      { id: "p51-7", prompt: "e^{iπ}", accept: ["-1"] },
      { id: "p51-8", prompt: "e^{iπ/2}", accept: ["i"] }
    ],
    exam: [
      { id: "e51-1", prompt: "i⁶", accept: ["-1"] },
      { id: "e51-2", prompt: "(2+3i)+(5−4i)", accept: ["7-i"] },
      { id: "e51-3", prompt: "(1+2i)(3−i)", accept: ["5+5i"] },
      { id: "e51-4", prompt: "|6+8i|", accept: ["10"] },
      { id: "e51-5", prompt: "Geconjugeerde van 4−7i", accept: ["4+7i"] },
      { id: "e51-6", prompt: "Punt (0, −3) als complex getal", accept: ["-3i"] },
      { id: "e51-7", prompt: "e^{iπ}", accept: ["-1"] },
      { id: "e51-8", prompt: "Wat doet vermenigvuldiging met i? Kies.", type: "choice",
        choices: ["Spiegelen in de x-as", "Rotatie over 90° tegenwijzerzin", "De modulus verdubbelen", "Naar 0 sturen"],
        accept: ["Rotatie over 90° tegenwijzerzin"] }
    ]
  },
  {
    id: "5.2",
    phase: 5,
    title: "Differentiaalvergelijkingen",
    goal: "Eerste- en tweede-orde DV's, exponentiële groei en de oscillator.",
    theory: `
      <h2>Milestone 5.2 — Differentiaalvergelijkingen</h2>
      <p>Een DV koppelt een functie aan haar afgeleiden. y' = 6x geeft y = 3x² + C. De constante C volgt uit een beginvoorwaarde: y' = 2x en y(0)=4 geeft y = x² + 4.</p>
      <p>y' = ky geeft y = A e^{kx}. Groei als k>0, verval als k<0.</p>
      <p>Orde = hoogste afgeleide. y'' + 4y = 0 is tweede orde; y = cos(2x) is een oplossing. Algemeen: y'' + ω²y = 0 heeft y = A cos(ωx) + B sin(ωx).</p>
      <p>Als stelsel: x₁ = y, x₂ = y' geeft x' = A x. Formele oplossing van v' = Av is v(t) = e^{At} v(0). Een negatieve reële eigenwaarde betekent exponentieel verval.</p>
      <p>De tijdsonafhankelijke Schrödingervergelijking heeft dezelfde vorm als een eigenwaardevergelijking: Ĥψ = Eψ.</p>
    `,
    practice: [
      { id: "p52-1", prompt: "Los y' = 6x op (met +C)", accept: ["y=3x^2+c", "3x^2+c", "y=3x²+c", "3x²+c"] },
      { id: "p52-2", prompt: "Los y' = 3y op", accept: ["y=ae^(3x)", "ae^(3x)", "y=a*e^(3x)"] },
      { id: "p52-3", prompt: "y' = 2x met y(0)=4", accept: ["y=x^2+4", "x^2+4", "y=x²+4", "x²+4"] },
      { id: "p52-4", prompt: "Orde van y''+4y=0", accept: ["2", "tweede", "tweede orde"] },
      { id: "p52-5", prompt: "Voldoet y=cos(2x) aan y''+4y=0? ja/nee", accept: ["ja"] },
      { id: "p52-6", prompt: "Algemene oplossing van y''+9y=0", accept: ["y=acos(3x)+bsin(3x)", "acos(3x)+bsin(3x)"] }
    ],
    exam: [
      { id: "e52-1", prompt: "Los y' = 4x op (met +C)", accept: ["y=2x^2+c", "2x^2+c", "y=2x²+c", "2x²+c"] },
      { id: "e52-2", prompt: "Los y' = 2y op", accept: ["y=ae^(2x)", "ae^(2x)", "y=a*e^(2x)"] },
      { id: "e52-3", prompt: "y' = 3x² met y(0)=5", accept: ["y=x^3+5", "x^3+5", "y=x³+5", "x³+5"] },
      { id: "e52-4", prompt: "Orde van y''−5y'+6y=0", accept: ["2", "tweede", "tweede orde"] },
      { id: "e52-5", prompt: "Voldoet y=sin(2x) aan y''+4y=0? ja/nee", accept: ["ja"] },
      { id: "e52-6", prompt: "Formele oplossing van v'=Av? Kies.", type: "choice",
        choices: ["v(t)=e^(At)v(0)", "v(t)=A+t", "v=0 altijd", "v(t)=det(A)"],
        accept: ["v(t)=e^(At)v(0)"] }
    ]
  },
  {
    id: "5.3",
    phase: 5,
    title: "Fourier-analyse",
    goal: "Signalen ontleden in sinus, cosinus en frequenties.",
    theory: `
      <h2>Milestone 5.3 — Fourier-analyse</h2>
      <p>Idee: een ingewikkeld signaal is een som van eenvoudige golven. Een Fourier-reeks gebruikt sinus en cosinus met gehele veelvouden van een basisfrequentie. Die basisfuncties zijn orthogonaal: hun inwendig product over een periode is 0, dus elke coëfficiënt is apart te bepalen.</p>
      <p>f(x)=4+3cos(x)−2sin(3x) heeft constante 4, cosinus n=1 met 3, sinus n=3 met −2.</p>
      <p>Reeks: discrete harmonischen, vooral periodiek. Transform: continu spectrum voor algemene signalen. Complexe exponenten e^{iωt} bundelen sin en cos en differentiëren makkelijk.</p>
      <p>Gibbs: overshoot bij sprongen in een eindige benadering. In PDE's reduceert een Fourier-modus de vergelijking tot iets eenvoudigers per frequentie.</p>
    `,
    practice: [
      { id: "p53-1", prompt: "Basisidee van Fourier-analyse? Kies.", type: "choice",
        choices: ["Een signaal ontleden in sinus- en cosinuscomponenten", "Alleen matrices inverteren", "Limieten van 0/0", "Het tekenen van een parabool"],
        accept: ["Een signaal ontleden in sinus- en cosinuscomponenten"] },
      { id: "p53-2", prompt: "Bouwstenen van een Fourier-reeks? Kies.", type: "choice",
        choices: ["Priemgetallen", "Sinus en cosinus van gehele veelvouden van de basisfrequentie", "Alleen constante termen", "Willekeurige polynomen"],
        accept: ["Sinus en cosinus van gehele veelvouden van de basisfrequentie"] },
      { id: "p53-3", prompt: "Constante term in 4+3cos(x)−2sin(3x)", accept: ["4"] },
      { id: "p53-4", prompt: "Wat is het Gibbsverschijnsel? Kies.", type: "choice",
        choices: ["Overshoot nabij sprongen bij een eindige Fourier-benadering", "Een eigenwaarde λ=0", "Delen door i", "Een sprong in een breuk"],
        accept: ["Overshoot nabij sprongen bij een eindige Fourier-benadering"] }
    ],
    exam: [
      { id: "e53-1", prompt: "Centraal idee van Fourier-analyse? Kies.", type: "choice",
        choices: ["Een functie ontleden in eenvoudige frequentiecomponenten", "Alleen GGD berekenen", "Een matrix diagonaliseren zonder reden", "Een limiet bestaat nooit"],
        accept: ["Een functie ontleden in eenvoudige frequentiecomponenten"] },
      { id: "e53-2", prompt: "Constante in 2+5cos(x)−3sin(2x)", accept: ["2"] },
      { id: "e53-3", prompt: "Cosinus-coëfficiënt bij n=1 in die functie", accept: ["5"] },
      { id: "e53-4", prompt: "Sinus-coëfficiënt bij n=2 in die functie", accept: ["-3"] },
      { id: "e53-5", prompt: "Reeks vs transform? Kies.", type: "choice",
        choices: ["Reeks: discrete harmonischen voor periodieke functies; transform: continu spectrum", "Ze zijn exact hetzelfde", "Een transform bestaat alleen voor priemgetallen", "Een reeks werkt alleen in ℝ³"],
        accept: ["Reeks: discrete harmonischen voor periodieke functies; transform: continu spectrum"] }
    ]
  }
];

const PHASE_EXAM_5 = [
  { id: "f5-1", prompt: "i⁶", accept: ["-1"] },
  { id: "f5-2", prompt: "(2+3i)+(5−4i)", accept: ["7-i"] },
  { id: "f5-3", prompt: "(1+2i)(3−i)", accept: ["5+5i"] },
  { id: "f5-4", prompt: "|6+8i|", accept: ["10"] },
  { id: "f5-5", prompt: "e^{iπ}", accept: ["-1"] },
  { id: "f5-6", prompt: "y' = 4x (met +C)", accept: ["y=2x^2+c", "2x^2+c", "y=2x²+c", "2x²+c"] },
  { id: "f5-7", prompt: "y' = 2y", accept: ["y=ae^(2x)", "ae^(2x)"] },
  { id: "f5-8", prompt: "y' = 3x², y(0)=5", accept: ["y=x^3+5", "x^3+5", "y=x³+5", "x³+5"] },
  { id: "f5-9", prompt: "Orde van y''−5y'+6y=0", accept: ["2", "tweede", "tweede orde"] },
  { id: "f5-10", prompt: "Constante in 2+5cos(x)−3sin(2x)", accept: ["2"] },
  { id: "f5-11", prompt: "Wat doet vermenigvuldiging met i? Kies.", type: "choice",
    choices: ["Rotatie over 90° tegenwijzerzin", "Optellen van 1", "De modulus wissen", "Een Fourier-reeks afbreken"],
    accept: ["Rotatie over 90° tegenwijzerzin"] }
];
