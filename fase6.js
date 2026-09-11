/* Lesstof Fase 6 — Abstracte algebra & topologie. Breid theory/practice/exam hier uit. */
const MILESTONES_6 = [
  {
    id: "6.1",
    phase: 6,
    title: "Groepentheorie & symmetrie",
    goal: "Structuur boven voorstelling: groepsaxioma's, symmetrieën en homomorfismen.",
    theory: `
      <h2>Milestone 6.1 — Groepentheorie & symmetrie</h2>
      <p>Een groep is een verzameling G met een bewerking * die gesloten, associatief is, een neutraal element e heeft, en waarin elk element een inverse heeft.</p>
      <p class="formula">(\\mathbb{Z},+)\\quad e=0,\\quad \\text{inverse van }n\\text{ is }-n</p>
      <p><span class="math">\\mathbb{N}</span> met + is geen groep: 1 heeft geen inverse in <span class="math">\\mathbb{N}</span>. <span class="math">\\mathbb{Q}\\setminus\\{0\\}</span> met × wel: neutraal 1, inverse van q is 1/q.</p>
      <h3>Symmetrie</h3>
      <p>Een vierkant heeft vier rotaties: 0°, 90°, 180°, 270°. Identiteit is 0°. Inverse van 270° is 90°. Rotaties van een cirkel commuteren; spiegeling en rotatie in het algemeen niet.</p>
      <h3>Abstractie</h3>
      <p>De groep is de structuur, niet één tekening. Een homomorfisme bewaart de bewerking: <span class="math">f(ab)=f(a)f(b)</span>. Een isomorfisme is een bijectief homomorfisme. <span class="math">\\mathrm{GL}(n,\\mathbb{R})</span> zijn inverteerbare matrices uit Fase 4. Een Lie-groep heeft naast de bewerking een gladde/continue structuur.</p>
    `,
    practice: [
      { id: "p61-1", prompt: "Neutraal element van (ℤ, +)", accept: ["0"] },
      { id: "p61-2", prompt: "Inverse van −7 in (ℤ, +)", accept: ["7"] },
      { id: "p61-3", prompt: "Is (ℕ, +) een groep? ja/nee", accept: ["nee"] },
      { id: "p61-4", prompt: "Hoeveel rotatiesymmetrieën heeft een vierkant?", accept: ["4"] },
      { id: "p61-5", prompt: "Inverse rotatie van 270° (in graden)", accept: ["90", "90°"] },
      { id: "p61-6", prompt: "Vier axioma's? Kies.", type: "choice",
        choices: ["Geslotenheid, associativiteit, neutraal element, inverse", "Alleen commutativiteit", "Alleen een maximum", "Determinant ongelijk aan π"],
        accept: ["Geslotenheid, associativiteit, neutraal element, inverse"] }
    ],
    exam: [
      { id: "e61-1", prompt: "Neutraal element in (ℤ, +)", accept: ["0"] },
      { id: "e61-2", prompt: "Vormt ℤ met vermenigvuldiging een groep? ja/nee", accept: ["nee"] },
      { id: "e61-3", prompt: "Inverse van −7 in (ℤ, +)", accept: ["7"] },
      { id: "e61-4", prompt: "Wat is een isomorfisme? Kies.", type: "choice",
        choices: ["Een bijectief homomorfisme", "Een willekeurige functie naar ℕ", "Een limiet die niet bestaat", "Een Fourier-coëfficiënt"],
        accept: ["Een bijectief homomorfisme"] },
      { id: "e61-5", prompt: "Wat maakt een Lie-groep bijzonder? Kies.", type: "choice",
        choices: ["Naast de groepsstructuur heeft ze een continue/gladde structuur", "Ze bevat alleen priemgetallen", "Ze heeft geen neutraal element", "Ze verbiedt matrices"],
        accept: ["Naast de groepsstructuur heeft ze een continue/gladde structuur"] }
    ]
  },
  {
    id: "6.2",
    phase: 6,
    title: "Topologie",
    goal: "Wat blijft bij continue vervorming: open verzamelingen, homeomorfismen, invarianten.",
    theory: `
      <h2>Milestone 6.2 — Topologie</h2>
      <p>Topologie kijkt naar eigenschappen die behouden blijven onder continue vervorming. Geometrie meet afstand en hoek; topologie laat de liniaal grotendeels los.</p>
      <p>Open: rond ieder punt zit lokaal ruimte. Gesloten: het complement is open. Een verzameling kan beide zijn (clopen).</p>
      <p>Continuïteit topologisch: het inverse beeld van iedere open verzameling is open. Een homeomorfisme is een continue bijectie met continue inverse — een “toegestane vervorming”.</p>
      <p>Mok en donut zijn homeomorf (één gat). Bol en donut niet: het gat is een invariant. De fundamentele groep <span class="math">\\pi_1(S^1)\\cong\\mathbb{Z}</span> telt hoe vaak een lus om de cirkel windt.</p>
      <p>Een manifold is lokaal als Euclidische ruimte. Differentiaalmeetkunde (Fase 7) voegt gladheid en metriek toe.</p>
    `,
    practice: [
      { id: "p62-1", prompt: "Zijn een mok en een donut topologisch equivalent? ja/nee", accept: ["ja"] },
      { id: "p62-2", prompt: "Zijn een bol en een donut topologisch equivalent? ja/nee", accept: ["nee"] },
      { id: "p62-3", prompt: "Is het aantal componenten een topologische invariant? ja/nee", accept: ["ja"] },
      { id: "p62-4", prompt: "Is exacte oppervlakte een topologische invariant? ja/nee", accept: ["nee"] },
      { id: "p62-5", prompt: "Wat is een homeomorfisme? Kies.", type: "choice",
        choices: ["Een continue bijectie met continue inverse", "Een matrix met det = 0", "Een limiet naar oneindig", "Een priemfactorisatie"],
        accept: ["Een continue bijectie met continue inverse"] }
    ],
    exam: [
      { id: "e62-1", prompt: "Onderzoekt topologie metrische afstanden als kern? ja/nee", accept: ["nee"] },
      { id: "e62-2", prompt: "Complement van een gesloten verzameling is… Kies.", type: "choice",
        choices: ["open", "altijd leeg", "altijd ℂ", "een eigenvector"],
        accept: ["open"] },
      { id: "e62-3", prompt: "π₁(S¹) is isomorf met…", accept: ["Z", "ℤ", "z"] },
      { id: "e62-4", prompt: "Waarom bol ≠ torus? Kies.", type: "choice",
        choices: ["Een torus heeft een gat, een bol niet", "Een bol heeft meer priemfactoren", "π is rationaal op een bol", "Matrices commuteren op een torus"],
        accept: ["Een torus heeft een gat, een bol niet"] }
    ]
  },
  {
    id: "6.3",
    phase: 6,
    title: "Tensorrekening",
    goal: "Vectoren, covectoren, type (p,q) en coördinatenonafhankelijke wetten.",
    theory: `
      <h2>Milestone 6.3 — Tensorrekening</h2>
      <p>Een vector leeft in V. Een covector is een lineaire afbeelding <span class="math">V\\to\\mathbb{R}</span> en leeft in de duale ruimte <span class="math">V^*</span>. Componenten hangen van de basis af; het object zelf niet.</p>
      <p>Type (1,0): vector. Type (0,1): covector. Een metriek <span class="math">g_{ij}</span> is type (0,2) en koppelt vectoren aan covectoren.</p>
      <p>Einstein-sommatie: een index die één keer boven en één keer onder staat wordt gesommeerd. In <span class="math">T^i_{\\,j} v^j</span> is i vrij en j een dummy. Contractie: boven- en onderindex samenvoegen en sommeren.</p>
      <p>Bij een coördinaatwissel veranderen componenten via de Jacobiaan; de tensor zelf blijft hetzelfde object. Niet iedere matrix is een tensor: alleen objecten met de juiste transformatiewet.</p>
      <p>Natuurwetten in tensorvorm zijn coördinatenonafhankelijk. Dat is de brug naar relativiteit en Yang–Mills in Fase 7.</p>
    `,
    practice: [
      { id: "p63-1", prompt: "Type van een vector (p,q)", accept: ["(1,0)", "1,0"] },
      { id: "p63-2", prompt: "Type van een covector", accept: ["(0,1)", "0,1"] },
      { id: "p63-3", prompt: "Type van gᵢⱼ", accept: ["(0,2)", "0,2"] },
      { id: "p63-4", prompt: "Vrije index in Tⁱⱼvʲ", accept: ["i"] },
      { id: "p63-5", prompt: "Dummy-index in Tⁱⱼvʲ", accept: ["j"] },
      { id: "p63-6", prompt: "Wat is V*? Kies.", type: "choice",
        choices: ["De duale ruimte: alle lineaire afbeeldingen V → ℝ", "Alleen de nulvector", "De Fourier-reeks van V", "Een open overdekking"],
        accept: ["De duale ruimte: alle lineaire afbeeldingen V → ℝ"] }
    ],
    exam: [
      { id: "e63-1", prompt: "Een covector is een lineaire afbeelding… Kies.", type: "choice",
        choices: ["V → ℝ", "ℕ → ℕ", "een groep naar een torus", "π₁ naar S¹"],
        accept: ["V → ℝ"] },
      { id: "e63-2", prompt: "Type (1,0) is een…", accept: ["vector"] },
      { id: "e63-3", prompt: "Type (0,2) heeft hoeveel covariante indices?", accept: ["2"] },
      { id: "e63-4", prompt: "Wat is contractie? Kies.", type: "choice",
        choices: ["Boven- en onderindex samenvoegen en sommeren", "De determinant wissen", "Een groep abelian maken", "Een gat in een torus dichten"],
        accept: ["Boven- en onderindex samenvoegen en sommeren"] }
    ]
  }
];

const PHASE_EXAM_6 = [
  { id: "f6-1", prompt: "Neutraal element van (ℤ, +)", accept: ["0"] },
  { id: "f6-2", prompt: "Vormt ℤ met × een groep? ja/nee", accept: ["nee"] },
  { id: "f6-3", prompt: "Vier groepsaxioma's? Kies.", type: "choice",
    choices: ["Geslotenheid, associativiteit, neutraal element, inverse", "Alleen open en gesloten", "Alleen Einstein-sommatie", "Alleen homeomorfisme"],
    accept: ["Geslotenheid, associativiteit, neutraal element, inverse"] },
  { id: "f6-4", prompt: "Mok en donut homeomorf? ja/nee", accept: ["ja"] },
  { id: "f6-5", prompt: "Bol en torus homeomorf? ja/nee", accept: ["nee"] },
  { id: "f6-6", prompt: "Type van een vector", accept: ["(1,0)", "1,0"] },
  { id: "f6-7", prompt: "Type van gᵢⱼ", accept: ["(0,2)", "0,2"] },
  { id: "f6-8", prompt: "Wat is V*? Kies.", type: "choice",
    choices: ["De duale ruimte van covectoren op V", "Een Lie-groep van priemgetallen", "De omtrek van S¹", "Een rest bij deling"],
    accept: ["De duale ruimte van covectoren op V"] }
];
