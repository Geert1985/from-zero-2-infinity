/* Lesstof Fase 4 — Lineaire algebra. Breid theory/practice/exam hier uit. */
const MILESTONES_4 = [
  {
    id: "4.1",
    phase: 4,
    title: "Vectoren & Matrices",
    goal: "Vectoren optellen, lengte en dot product, matrices als transformaties.",
    theory: `
      <h2>Milestone 4.1 — Vectoren & Matrices</h2>
      <p>Een vector is een pijl: grootte én richting. In het vlak schrijven we v = (x, y). Optellen: componentgewijs. Scalair: 4(2, −3) = (8, −12).</p>
      <p class="formula">‖v‖ = √(x² + y²) &nbsp;&nbsp; u · v = u₁v₁ + u₂v₂</p>
      <p>(6, 8) heeft lengte 10. Als u · v = 0 zijn de vectoren loodrecht.</p>
      <h3>Matrices</h3>
      <p>Een matrix is een getallenrooster. Optellen en scalaire vermenigvuldiging gaan per element. Vermenigvuldigen van matrices: rij × kolom. AB bestaat alleen als het aantal kolommen van A gelijk is aan het aantal rijen van B.</p>
      <div class="callout">AB is in het algemeen niet gelijk aan BA.</div>
      <p>I = [1 0; 0 1] laat elke vector ongemoeid. Een matrix A stuurt v naar Av: [2 0; 0 2] verdubbelt lengtes; [1 0; 0 −1] spiegelt in de x-as. Rotatie 90° tegenwijzerzin stuurt (1, 2) naar (−2, 1).</p>
    `
  },
  {
    id: "4.2",
    phase: 4,
    title: "Vectorruimten",
    goal: "Basis, dimensie, lineariteit, kern en determinant.",
    theory: `
      <h2>Milestone 4.2 — Vectorruimten</h2>
      <p>Een vectorruimte is een verzameling waarin je mag optellen en met een scalair vermenigvuldigen, met vertrouwde rekenwetten. ℝ² en ℝ³ zijn de eerste voorbeelden. Dimensie van ℝⁿ is n.</p>
      <p>Een lineaire combinatie: a₁v₁ + … + aₖvₖ. Vectoren spannen een ruimte op als elke vector zo te schrijven is. Ze zijn lineair onafhankelijk als geen van hen een combinatie van de anderen is. (1,2) en (2,4) zijn afhankelijk, want de tweede is het dubbele van de eerste.</p>
      <p>Een <strong>basis</strong> is een onafhankelijke opspannende verzameling. De standaardbasis van ℝ² is {(1,0), (0,1)}.</p>
      <h3>Lineaire transformaties</h3>
      <p>T is lineair als T(u+v)=T(u)+T(v) en T(cv)=cT(v). Gevolg: T(0)=0. Daarom is T(x,y)=(x+1, y) niet lineair.</p>
      <p>T(x,y)=(3x−y, 2x+4y) heeft matrix [3 −1; 2 4]. De <strong>kern</strong> is {v | T(v)=0}. det[3 2; 1 4]=10 ≠ 0, dus inverteerbaar. det[2 4; 1 2]=0, niet inverteerbaar: informatie gaat verloren.</p>
    `
    
  },
  {
    id: "4.3",
    phase: 4,
    title: "Eigenwaarden & Eigenvectoren",
    goal: "Richtingen vinden die alleen uitrekken: Av = λv.",
    theory: `
      <h2>Milestone 4.3 — Eigenwaarden & Eigenvectoren</h2>
      <p>Av verandert meestal zowel lengte als richting. Een eigenvector is een niet-nulvector v waarvoor alleen de lengte (en eventueel het teken) verandert:</p>
      <p class="formula">Av = λv</p>
      <p>λ is de eigenwaarde. De nulvector telt niet: A0 = λ0 geldt altijd en geeft geen richting.</p>
      <p>Voor A = [2 0; 0 3] is (1,0) een eigenvector met λ=2. (1,1) niet, want A(1,1)=(2,3).</p>
      <p>Vinden: los det(A − λI)=0 op (karakteristieke vergelijking). Voor [3 1; 0 2] krijg je λ=3 en λ=2. Bij λ=2 bijvoorbeeld v=(1, −1).</p>
      <p>λ=−1: zelfde lengte, omgekeerde richting. Een rotatie over 90° heeft geen reële eigenvectoren: elke reële richting draait weg.</p>
      <p>Diagonalisatie maakt Aⁿ makkelijk: in een eigenbasis is A diagonaal. In de kwantummechanica verschijnen meetwaarden als eigenwaarden: Aψ = aψ.</p>
    `,
    practice: [
      { id: "p43-1", prompt: "Is (1, 0) eigenvector van [2 0; 0 3]? ja/nee", accept: ["ja"] },
      { id: "p43-2", prompt: "Bijbehorende eigenwaarde", accept: ["2"] },
      { id: "p43-3", prompt: "Is (1, 1) eigenvector van dezelfde matrix? ja/nee", accept: ["nee"] },
      { id: "p43-4", prompt: "Eigenwaarden van [4 0; 0 5] (kleiner eerst, komma)", accept: ["4,5"] },
      { id: "p43-5", prompt: "Eigenwaarden van [3 1; 0 2] (kleiner eerst)", accept: ["2,3"] },
      { id: "p43-6", prompt: "Een eigenvector bij λ=2 voor [3 1; 0 2]", accept: ["(1,-1)", "1,-1", "(-1,1)", "-1,1"] },
      { id: "p43-7", prompt: "Eigenwaarden van [2 1; 0 4] (kleiner eerst)", accept: ["2,4"] }
    ],
    exam: [
      { id: "e43-1", prompt: "Eigenwaarden van [2 0; 0 5] (kleiner eerst)", accept: ["2,5"] },
      { id: "e43-2", prompt: "Een eigenvector voor λ=2 van die matrix", accept: ["(1,0)", "1,0"] },
      { id: "e43-3", prompt: "Eigenwaarden van [3 1; 0 4] (kleiner eerst)", accept: ["3,4"] },
      { id: "e43-4", prompt: "Waarom is de nulvector geen eigenvector? Kies.", type: "choice",
        choices: ["Omdat 0 even is", "Omdat hij geen richting bepaalt en voor elke λ aan A0=λ0 voldoet", "Omdat det altijd 1 is", "Omdat matrices niet met 0 mogen"],
        accept: ["Omdat hij geen richting bepaalt en voor elke λ aan A0=λ0 voldoet"] },
      { id: "e43-5", prompt: "Wat betekent λ = −1 geometrisch? Kies.", type: "choice",
        choices: ["De vector verdwijnt", "Zelfde lengte, omgekeerde richting", "Rotatie over 90°", "De matrix is de nulmatrix"],
        accept: ["Zelfde lengte, omgekeerde richting"] }
    ]
  }
];

const PHASE_EXAM_4 = [
  { id: "f4-1", prompt: "(3, −1) + (5, 4)", accept: ["(8,3)", "8,3"] },
  { id: "f4-2", prompt: "−2(4, −3)", accept: ["(-8,6)", "-8,6"] },
  { id: "f4-3", prompt: "Lengte van (5, 12)", accept: ["13"] },
  { id: "f4-4", prompt: "Dot product van (2, 1) en (3, −6)", accept: ["0"] },
  { id: "f4-5", prompt: "AB voor A=[1 2; 0 1] en B=[3 4; 5 6] als [a b; c d]", accept: ["[13 16;5 6]", "[13,16;5,6]", "13 16;5 6"] },
  { id: "f4-6", prompt: "det van [4 1; 2 3]", accept: ["10"] },
  { id: "f4-7", prompt: "Dimensie van ℝ³", accept: ["3"] },
  { id: "f4-8", prompt: "Zijn (1, 2) en (2, 4) onafhankelijk? ja/nee", accept: ["nee"] },
  { id: "f4-9", prompt: "Eigenwaarden van [2 0; 0 5] (kleiner eerst)", accept: ["2,5"] },
  { id: "f4-10", prompt: "Eigenwaarden van [3 1; 0 4] (kleiner eerst)", accept: ["3,4"] },
  { id: "f4-11", prompt: "Wat is een eigenvector? Kies.", type: "choice",
    choices: [
      "Een niet-nulvector v waarvoor Av = λv",
      "Elke rij van de identiteitmatrix",
      "De determinant van A",
      "Een limiet van een Riemannsom"
    ],
    accept: ["Een niet-nulvector v waarvoor Av = λv"] }
];
