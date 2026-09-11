/* Lesstof Fase 2 — Algebra & geometrie. Breid theory/practice/exam hier uit. */
const MILESTONES_2 = [
  {
    id: "2.1",
    title: "Basisalgebra",
    goal: "Variabelen, uitdrukkingen en vergelijkingen begrijpen en ermee rekenen.",
    theory: `
      <h2>Milestone 2.1 — Basisalgebra</h2>
      <p><strong>Doel:</strong> variabelen, uitdrukkingen en vergelijkingen begrijpen en ermee kunnen rekenen.</p>
      <h3>Van getal naar variabele</h3>
      <p>Een variabele is een symbool dat een waarde kan voorstellen: x, y, z, a, b, c. In <strong>x + 3 = 7</strong> zoeken we x. In <strong>y = 2x + 1</strong> kan x verschillende waarden aannemen.</p>
      <div class="callout">Fase 1 leerde 3 + 4 = 7. Fase 2 schrijft x + 4 = 7. De rekenkundige structuur blijft hetzelfde.</div>
      <h3>Uitdrukkingen en gelijksoortige termen</h3>
      <p>In <strong>3x + 5</strong> is 3 de coëfficiënt, x de variabele en 5 de constante. 2x betekent 2 × x.</p>
      <p>3x + 5x = 8x, maar 3x + 5 kan niet tot 8x. Ook 3x + 5x² zijn niet gelijksoortig.</p>
      <h3>Distributiviteit en factoriseren</h3>
      <p class="formula">3(x + 4) = 3x + 12 &nbsp;&nbsp; x(x + 3) = x² + 3x</p>
      <p>(x + 2)(x + 3) = x(x + 3) + 2(x + 3) = x² + 5x + 6</p>
      <p>Achteruit: 6x + 12 = 6(x + 2) en x² + 3x = x(x + 3). Uitwerken en factoriseren zijn tegengestelde bewerkingen.</p>
      <h3>Vergelijkingen als balans</h3>
      <p>Wat je aan de ene kant doet, moet je aan de andere kant doen.</p>
      <p>2x + 3 = 7 → 2x = 4 → x = 2</p>
      <p>5x + 2 = 2x + 14 → 3x + 2 = 14 → 3x = 12 → x = 4</p>
      <p>x/2 + 3 = 7 → x/2 = 4 → x = 8</p>
      <table>
        <tr><th>Bewerking</th><th>Omgekeerde</th></tr>
        <tr><td>+ a</td><td>− a</td></tr>
        <tr><td>× a</td><td>÷ a</td></tr>
        <tr><td>kwadrateren</td><td>vierkantswortel</td></tr>
      </table>
      <h3>Formules herschrijven</h3>
      <p>v = s/t geeft s = vt en t = s/v. Dezelfde wet, een andere onbekende vrijgemaakt.</p>
      <h3>Machten met variabelen</h3>
      <p>x × x = x², x² × x³ = x⁵, (x²)³ = x⁶, 2x² × 3x³ = 6x⁵</p>
    `,
    practice: [
      { id: "p21-1", prompt: "Vereenvoudig: 3x + 5x", accept: ["8x"] },
      { id: "p21-2", prompt: "Vereenvoudig: 7a − 2a + 4a", accept: ["9a"] },
      { id: "p21-3", prompt: "Werk uit: 4(x + 3)", accept: ["4x+12"] },
      { id: "p21-4", prompt: "Werk uit: −2(x − 5)", accept: ["-2x+10"] },
      { id: "p21-5", prompt: "Werk uit: x(x + 4)", accept: ["x^2+4x", "x²+4x"] },
      { id: "p21-6", prompt: "Werk uit: (x + 2)(x + 5)", accept: ["x^2+7x+10", "x²+7x+10"] },
      { id: "p21-7", prompt: "Factoriseer: 6x + 18", accept: ["6(x+3)"] },
      { id: "p21-8", prompt: "Factoriseer: x² + 7x", accept: ["x(x+7)"] },
      { id: "p21-9", prompt: "Los op: 2x + 3 = 11", accept: ["x=4", "4"] },
      { id: "p21-10", prompt: "Los op: 4x + 2 = 2x + 14", accept: ["x=6", "6"] },
      { id: "p21-11", prompt: "Los op: x/3 + 4 = 9", accept: ["x=15", "15"] },
      { id: "p21-12", prompt: "Maak s vrij in v = s/t", accept: ["s=vt", "s=v*t"] }
    ],
    exam: [
      { id: "e21-1", prompt: "Vereenvoudig: 2y + 9y − y", accept: ["10y"] },
      { id: "e21-2", prompt: "Werk uit: 5(x − 2)", accept: ["5x-10"] },
      { id: "e21-3", prompt: "Werk uit: (x + 1)(x + 6)", accept: ["x^2+7x+6", "x²+7x+6"] },
      { id: "e21-4", prompt: "Factoriseer: 8x + 24", accept: ["8(x+3)"] },
      { id: "e21-5", prompt: "Los op: 2x + 5 = 17", accept: ["x=6", "6"] },
      { id: "e21-6", prompt: "Los op: 6x + 1 = 3x + 13", accept: ["x=4", "4"] },
      { id: "e21-7", prompt: "Maak t vrij in v = s/t", accept: ["t=s/v"] },
      { id: "e21-8", prompt: "Waarom is 3x + 5 niet gelijk aan 8x? Kies.", type: "choice",
        choices: ["Omdat 3 + 5 geen 8 is", "Omdat 3x en 5 geen gelijksoortige termen zijn", "Omdat x altijd 1 is", "Omdat optellen in algebra verboden is"],
        accept: ["Omdat 3x en 5 geen gelijksoortige termen zijn"] }
    ]
  },
  {
    id: "2.2",
    title: "Euclidische geometrie",
    goal: "Hoeken, omtrek, oppervlakte, inhoud en de Stelling van Pythagoras gebruiken.",
    theory: `
      <h2>Milestone 2.2 — Euclidische geometrie</h2>
      <h3>Punt, lijn, lijnstuk, straal</h3>
      <p>Een punt is een positie. Een lijn loopt onbeperkt beide kanten op. Een lijnstuk heeft twee eindpunten. Een straal heeft één beginpunt.</p>
      <h3>Hoeken</h3>
      <table>
        <tr><th>Soort</th><th>Grootte</th></tr>
        <tr><td>scherp</td><td>&lt; 90°</td></tr>
        <tr><td>recht</td><td>90°</td></tr>
        <tr><td>stomp</td><td>tussen 90° en 180°</td></tr>
        <tr><td>gestrekt</td><td>180°</td></tr>
        <tr><td>vol</td><td>360°</td></tr>
      </table>
      <p>Complementair: samen 90°. Supplementair: samen 180°. Binnenhoeken driehoek: 180°. Binnenhoeken vierhoek: 360°.</p>
      <h3>Omtrek, oppervlakte, inhoud</h3>
      <div class="fig-row">
        <figure class="fig">
          <svg viewBox="0 0 160 110" aria-label="Rechthoek">
            <rect x="25" y="22" width="110" height="60" fill="none" stroke="#e6c77a" stroke-width="2"/>
            <text x="80" y="18" fill="#fff6df" font-size="12" text-anchor="middle">l</text>
            <text x="18" y="56" fill="#fff6df" font-size="12" text-anchor="middle">b</text>
          </svg>
          <span class="cap">Rechthoek: O = 2(l+b), A = l·b</span>
        </figure>
        <figure class="fig">
          <svg viewBox="0 0 160 110" aria-label="Driehoek met hoogte">
            <polygon points="20,88 140,88 95,22" fill="none" stroke="#e6c77a" stroke-width="2"/>
            <line x1="95" y1="22" x2="95" y2="88" stroke="#7dcea0" stroke-dasharray="4 3"/>
            <text x="80" y="104" fill="#fff6df" font-size="12" text-anchor="middle">basis</text>
            <text x="108" y="60" fill="#7dcea0" font-size="12">h</text>
          </svg>
          <span class="cap">Driehoek: A = ½ · basis · h</span>
        </figure>
        <figure class="fig">
          <svg viewBox="0 0 160 110" aria-label="Cirkel met straal">
            <circle cx="80" cy="55" r="36" fill="none" stroke="#e6c77a" stroke-width="2"/>
            <line x1="80" y1="55" x2="116" y2="55" stroke="#fff6df"/>
            <circle cx="80" cy="55" r="2.5" fill="#fff6df"/>
            <text x="96" y="50" fill="#fff6df" font-size="12">r</text>
          </svg>
          <span class="cap">Cirkel: O = 2πr, A = πr²</span>
        </figure>
      </div>
      <p>Rechthoek: O = 2(l + b), A = l × b. Vierkant: O = 4a, A = a². Driehoek: A = ½ × basis × hoogte (hoogte loodrecht op de basis).</p>
      <p>Parallellogram: A = basis × hoogte. Trapezium: A = ½(a + b)h.</p>
      <p>Cirkel: d = 2r, <span class="math">O = 2\\pi r</span>, <span class="math">A = \\pi r^2</span>.</p>
      <p>Blok: V = l × b × h. Kubus: V = a³. Cilinder: <span class="math">V = \\pi r^2 h</span>.</p>
      <p>1 m = 100 cm, dus 1 m² = 10 000 cm².</p>
      <h3>Pythagoras</h3>
      <div class="fig-row">
        <figure class="fig">
          <svg viewBox="0 0 180 140" aria-label="3-4-5 driehoek">
            <polygon points="30,120 30,40 150,120" fill="rgba(230,199,122,0.08)" stroke="#e6c77a" stroke-width="2"/>
            <rect x="30" y="108" width="12" height="12" fill="none" stroke="#7dcea0"/>
            <text x="18" y="84" fill="#fff6df" font-size="13">a=4</text>
            <text x="80" y="136" fill="#fff6df" font-size="13">b=3</text>
            <text x="100" y="70" fill="#e6c77a" font-size="13">c=5</text>
          </svg>
          <span class="cap">3-4-5: 9 + 16 = 25</span>
        </figure>
      </div>
      <p class="formula">a^2 + b^2 = c^2</p>
      <p>Als de langste zijde c aan a² + b² = c² voldoet, is de driehoek rechthoekig.</p>
    `,
    practice: [
      { id: "p22-1", prompt: "Twee hoeken van een driehoek zijn 45° en 65°. Derde hoek?", accept: ["70", "70°"] },
      { id: "p22-2", prompt: "Complement van 37°", accept: ["53", "53°"] },
      { id: "p22-3", prompt: "Omtrek rechthoek 8 cm × 5 cm", accept: ["26", "26cm"] },
      { id: "p22-4", prompt: "Oppervlakte van dezelfde rechthoek", accept: ["40", "40cm^2", "40cm²"] },
      { id: "p22-5", prompt: "Oppervlakte driehoek basis 10 cm, hoogte 6 cm", accept: ["30", "30cm^2", "30cm²"] },
      { id: "p22-6", prompt: "Oppervlakte cirkel r = 5 cm, π ≈ 3,14", accept: ["78.5", "78,5"] },
      { id: "p22-7", prompt: "Inhoud blok 2 × 4 × 7 cm", accept: ["56", "56cm^3", "56cm³"] },
      { id: "p22-8", prompt: "Zijde van een vierkant met oppervlakte 81 cm²", accept: ["9", "9cm"] },
      { id: "p22-9", prompt: "Rechthoekszijden 6 en 8. Hypotenusa?", accept: ["10"] },
      { id: "p22-10", prompt: "Hypotenusa 13, zijde 5. Andere zijde?", accept: ["12"] }
    ],
    exam: [
      { id: "e22-1", prompt: "Hoeken 50° en 60° in een driehoek. Derde hoek?", accept: ["70", "70°"] },
      { id: "e22-2", prompt: "Oppervlakte rechthoek 9 cm × 4 cm", accept: ["36", "36cm^2", "36cm²"] },
      { id: "e22-3", prompt: "Omtrek van een vierkant met zijde 7", accept: ["28"] },
      { id: "e22-4", prompt: "Oppervlakte cirkel r = 2, π ≈ 3,14", accept: ["12.56", "12,56"] },
      { id: "e22-5", prompt: "Inhoud kubus met zijde 5", accept: ["125"] },
      { id: "e22-6", prompt: "Rechthoekszijden 5 en 12. Hypotenusa?", accept: ["13"] },
      { id: "e22-7", prompt: "Waarom moet de hoogte van een driehoek loodrecht op de basis staan? Kies.", type: "choice",
        choices: ["Omdat anders de omtrek verandert", "Omdat de formule de loodrechte afstand tussen basis en overstaande hoekpunt gebruikt", "Omdat π anders irrationaal wordt", "Omdat een driehoek altijd gelijkzijdig is"],
        accept: ["Omdat de formule de loodrechte afstand tussen basis en overstaande hoekpunt gebruikt"] }
    ]
  },
  {
    id: "2.3",
    title: "Functies & grafieken",
    goal: "Het cartesisch vlak, lineaire en kwadratische functies lezen en gebruiken.",
    theory: `
      <h2>Milestone 2.3 — Functies & grafieken</h2>
      <h3>Cartesisch assenstelsel</h3>
      <p>Horizontale x-as, verticale y-as, oorsprong (0, 0). Punt (3, 2): 3 naar rechts, 2 omhoog.</p>
      <div class="fig-row">
        <figure class="fig">
          <svg viewBox="0 0 220 220" aria-label="Cartesisch vlak">
            <rect x="10" y="10" width="200" height="200" fill="#0d0b08"/>
            <line x1="110" y1="20" x2="110" y2="200" stroke="rgba(230,199,122,0.45)"/>
            <line x1="20" y1="110" x2="200" y2="110" stroke="rgba(230,199,122,0.45)"/>
            <text x="200" y="124" fill="#e6c77a" font-size="13">x</text>
            <text x="116" y="28" fill="#e6c77a" font-size="13">y</text>
            <text x="116" y="124" fill="#fff6df" font-size="11">(0,0)</text>
            <text x="150" y="70" fill="#7dcea0" font-size="14">I</text>
            <text x="55" y="70" fill="#7dcea0" font-size="14">II</text>
            <text x="52" y="160" fill="#7dcea0" font-size="14">III</text>
            <text x="148" y="160" fill="#7dcea0" font-size="14">IV</text>
            <circle cx="152" cy="82" r="4" fill="#fff6df"/>
            <text x="158" y="78" fill="#fff6df" font-size="12">(3,2)</text>
          </svg>
          <span class="cap">Kwadranten en het punt (3, 2)</span>
        </figure>
      </div>
      <table>
        <tr><th>Kwadrant</th><th>x</th><th>y</th></tr>
        <tr><td>I</td><td>+</td><td>+</td></tr>
        <tr><td>II</td><td>−</td><td>+</td></tr>
        <tr><td>III</td><td>−</td><td>−</td></tr>
        <tr><td>IV</td><td>+</td><td>−</td></tr>
      </table>
      <h3>Wat is een functie?</h3>
      <p>Een functie koppelt iedere toegelaten invoer aan precies één uitvoer. f(x) = 2x + 1 geeft f(3) = 7.</p>
      <p>Zelfde functie als woorden, formule, tabel en grafiek. Leren wisselen tussen die vormen is de kernvaardigheid.</p>
      <h3>Lineaire functies</h3>
      <p class="formula">y = ax + b</p>
      <p>a is de richtingscoëfficiënt, b het snijpunt met de y-as. Voor y = 2x + 3 is a = 2 en het y-as-snijpunt (0, 3).</p>
      <p class="formula">a = (y₂ − y₁)/(x₂ − x₁)</p>
      <p>Door (1, 3) en (4, 9): a = 6/3 = 2. Nulpunt: f(x) = 0. Voor 2x + 4 = 0 is x = −2, punt (−2, 0).</p>
      <h3>Kwadratische functies</h3>
      <p class="formula">y = ax² + bx + c</p>
      <p>y = x² geeft de punten (−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4). De grafiek is een parabool, symmetrisch omdat (−x)² = x².</p>
      <div class="fig-row">
        <figure class="fig">
          <svg viewBox="0 0 200 130" aria-label="Lijn y=2x+1">
            <line x1="20" y1="110" x2="180" y2="110" stroke="rgba(230,199,122,0.4)"/>
            <line x1="40" y1="20" x2="40" y2="120" stroke="rgba(230,199,122,0.4)"/>
            <line x1="24" y1="118" x2="170" y2="30" stroke="#e6c77a" stroke-width="2"/>
            <text x="150" y="48" fill="#fff6df" font-size="12">y = ax + b</text>
          </svg>
          <span class="cap">Rechte: constante helling a</span>
        </figure>
        <figure class="fig">
          <svg viewBox="0 0 200 130" aria-label="Parabool y=x²">
            <line x1="20" y1="110" x2="180" y2="110" stroke="rgba(230,199,122,0.4)"/>
            <line x1="100" y1="20" x2="100" y2="120" stroke="rgba(230,199,122,0.4)"/>
            <path d="M30 20 Q100 200 170 20" fill="none" stroke="#7dcea0" stroke-width="2"/>
            <text x="130" y="70" fill="#fff6df" font-size="12">y = x²</text>
          </svg>
          <span class="cap">Parabool: verandering niet constant</span>
        </figure>
      </div>
      <p>Bij y = x is de verandering constant. Bij y = x² niet: als x verdubbelt, wordt y vier keer zo groot.</p>
    `,
    practice: [
      { id: "p23-1", prompt: "In welk kwadrant ligt (−3, 5)? (I, II, III of IV)", accept: ["2", "ii"] },
      { id: "p23-2", prompt: "In welk kwadrant ligt (4, −2)?", accept: ["4", "iv"] },
      { id: "p23-3", prompt: "f(4) voor f(x) = 3x − 2", accept: ["10"] },
      { id: "p23-4", prompt: "f(−2) voor f(x) = 3x − 2", accept: ["-8"] },
      { id: "p23-5", prompt: "Richtingscoëfficiënt van y = 5x + 7", accept: ["5"] },
      { id: "p23-6", prompt: "y-as-snijpunt van y = −2x + 4 (als punt)", accept: ["(0,4)", "0,4"] },
      { id: "p23-7", prompt: "Nulpunt van y = 3x − 12", accept: ["x=4", "4", "(4,0)"] },
      { id: "p23-8", prompt: "Richtingscoëfficiënt door (2, 5) en (6, 13)", accept: ["2"] },
      { id: "p23-9", prompt: "y = x² voor x = −2, −1, 0, 1, 2 (komma's)", accept: ["4,1,0,1,4"] }
    ],
    exam: [
      { id: "e23-1", prompt: "Kwadrant van (−1, −4)?", accept: ["3", "iii"] },
      { id: "e23-2", prompt: "f(0) voor f(x) = −3x + 5", accept: ["5"] },
      { id: "e23-3", prompt: "Richtingscoëfficiënt van y = −4x + 7", accept: ["-4"] },
      { id: "e23-4", prompt: "Nulpunt van y = 2x − 10", accept: ["x=5", "5", "(5,0)"] },
      { id: "e23-5", prompt: "a door (0, 1) en (3, 10)", accept: ["3"] },
      { id: "e23-6", prompt: "Wat is het belangrijkste verschil tussen y = x en y = x²? Kies.", type: "choice",
        choices: [
          "y = x² is altijd kleiner",
          "Bij y = x is de verandering constant; bij y = x² niet, de grafiek is een parabool",
          "y = x heeft geen grafiek",
          "Ze zijn algebraïsch identiek"
        ],
        accept: ["Bij y = x is de verandering constant; bij y = x² niet, de grafiek is een parabool"] }
    ]
  },
  {
    id: "2.4",
    title: "Trigonometrie",
    goal: "Sinus, cosinus en tangens gebruiken, plus graden, radialen en de eenheidscirkel.",
    theory: `
      <h2>Milestone 2.4 — Trigonometrie</h2>
      <p>Pythagoras verbindt lengtes. Sinus, cosinus en tangens verbinden een hoek met zijdenverhoudingen.</p>
      <h3>Zijden bij een scherpe hoek α</h3>
      <div class="fig-row">
        <figure class="fig">
          <svg viewBox="0 0 220 160" aria-label="Driehoek met overstaand aanliggend hypotenusa">
            <polygon points="30,140 30,40 190,140" fill="rgba(230,199,122,0.07)" stroke="#e6c77a" stroke-width="2"/>
            <rect x="30" y="128" width="12" height="12" fill="none" stroke="#7dcea0"/>
            <path d="M48 140 A18 18 0 0 0 44 124" fill="none" stroke="#fff6df"/>
            <text x="56" y="136" fill="#fff6df" font-size="13">α</text>
            <text x="100" y="156" fill="#7dcea0" font-size="12">aanliggend</text>
            <text x="8" y="96" fill="#7dcea0" font-size="12" transform="rotate(-90 14 96)">overstaand</text>
            <text x="118" y="80" fill="#e6c77a" font-size="12">hypotenusa</text>
          </svg>
          <span class="cap">Zijden ten opzichte van hoek α</span>
        </figure>
      </div>
      <ul>
        <li><strong>hypotenusa</strong> — tegenover de rechte hoek</li>
        <li><strong>overstaande zijde</strong> — tegenover α</li>
        <li><strong>aanliggende zijde</strong> — naast α, niet de hypotenusa</li>
      </ul>
      <p class="formula">sin(α) = overstaand / hypotenusa</p>
      <p class="formula">cos(α) = aanliggend / hypotenusa</p>
      <p class="formula">tan(α) = overstaand / aanliggend</p>
      <p>In een 3-4-5-driehoek met overstaand 3: sin = 3/5 = 0,6; cos = 4/5 = 0,8; tan = 3/4 = 0,75.</p>
      <p>Als sin(30°) = 0,5 en de hypotenusa 10 is, dan is de overstaande zijde 5. Omgekeerd: sin(α) = 0,5 ⇒ α = 30°. Let op: sin⁻¹ is de inverse functie, niet 1/sin.</p>
      <h3>Graden en radialen</h3>
      <p class="formula">360° = 2π &nbsp;&nbsp; 180° = π &nbsp;&nbsp; 90° = π/2</p>
      <h3>Eenheidscirkel en golven</h3>
      <div class="fig-row">
        <figure class="fig">
          <svg viewBox="0 0 200 200" aria-label="Eenheidscirkel">
            <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(230,199,122,0.4)"/>
            <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(230,199,122,0.4)"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="#e6c77a" stroke-width="2"/>
            <line x1="100" y1="100" x2="142" y2="58" stroke="#fff6df"/>
            <line x1="142" y1="100" x2="142" y2="58" stroke="#7dcea0" stroke-dasharray="3 2"/>
            <line x1="100" y1="100" x2="142" y2="100" stroke="#6ab0e0" stroke-dasharray="3 2"/>
            <circle cx="142" cy="58" r="3.5" fill="#fff6df"/>
            <text x="148" y="54" fill="#fff6df" font-size="11">(cos α, sin α)</text>
            <text x="118" y="96" fill="#6ab0e0" font-size="11">cos</text>
            <text x="146" y="84" fill="#7dcea0" font-size="11">sin</text>
            <text x="168" y="114" fill="#e6c77a" font-size="12">x</text>
            <text x="108" y="28" fill="#e6c77a" font-size="12">y</text>
          </svg>
          <span class="cap">Eenheidscirkel: cos op de x-as, sin op de y-as</span>
        </figure>
        <figure class="fig">
          <svg viewBox="0 0 220 120" aria-label="Sinusgolf">
            <line x1="10" y1="60" x2="210" y2="60" stroke="rgba(230,199,122,0.4)"/>
            <path d="M10 60 C 30 10, 50 10, 70 60 S 110 110, 130 60 S 170 10, 190 60 S 210 110, 220 80" fill="none" stroke="#e6c77a" stroke-width="2"/>
            <line x1="70" y1="20" x2="70" y2="100" stroke="#7dcea0" stroke-dasharray="3 2"/>
            <text x="74" y="18" fill="#7dcea0" font-size="11">A</text>
            <text x="188" y="74" fill="#fff6df" font-size="11">y = A sin(x)</text>
          </svg>
          <span class="cap">Sinusgolf: A is de amplitude</span>
        </figure>
      </div>
      <p>Op de eenheidscirkel is de x-coördinaat cos(α) en de y-coördinaat sin(α). Daardoor worden sinus en cosinus periodieke functies: y = A sin(x). A is de amplitude.</p>
      <div class="callout">Sinus en cosinus kunnen herhalende bewegingen en signalen beschrijven. Dat is de brug naar calculus.</div>
    `,
    practice: [
      { id: "p24-1", prompt: "Overstaand 3, hypotenusa 5. sin(α)?", accept: ["3/5", "0.6", "0,6"] },
      { id: "p24-2", prompt: "Aanliggend 4, hypotenusa 5. cos(α)?", accept: ["4/5", "0.8", "0,8"] },
      { id: "p24-3", prompt: "Overstaand 3, aanliggend 4. tan(α)?", accept: ["3/4", "0.75", "0,75"] },
      { id: "p24-4", prompt: "Hypotenusa 10, hoek 30°, sin(30°)=0,5. Overstaande zijde?", accept: ["5"] },
      { id: "p24-5", prompt: "Zet 180° om naar radialen (π of pi)", accept: ["pi", "π"] },
      { id: "p24-6", prompt: "Zet 90° om naar radialen", accept: ["pi/2", "π/2"] },
      { id: "p24-7", prompt: "Zet π/4 radialen om naar graden", accept: ["45", "45°"] },
      { id: "p24-8", prompt: "Wat is de amplitude van y = A sin(x)? Kies.", type: "choice",
        choices: ["De periode", "De maximale afwijking van de middenlijn", "De richtingscoëfficiënt", "Het y-as-snijpunt van een parabool"],
        accept: ["De maximale afwijking van de middenlijn"] }
    ],
    exam: [
      { id: "e24-1", prompt: "sin(α) bij overstaand 5 en hypotenusa 13", accept: ["5/13"] },
      { id: "e24-2", prompt: "cos(α) bij aanliggend 12 en hypotenusa 13", accept: ["12/13"] },
      { id: "e24-3", prompt: "tan(α) bij overstaand 5 en aanliggend 12", accept: ["5/12"] },
      { id: "e24-4", prompt: "Overstaande zijde als hypotenusa = 8 en sin(α) = 0,5", accept: ["4"] },
      { id: "e24-5", prompt: "Zet 360° om naar radialen", accept: ["2pi", "2π"] },
      { id: "e24-6", prompt: "Sinus en cosinus op de eenheidscirkel. Kies.", type: "choice",
        choices: [
          "sinus is de straal, cosinus de diameter",
          "cos(α) is de x-coördinaat en sin(α) de y-coördinaat",
          "beide zijn alleen gedefinieerd voor 45°",
          "het zijn omtrekformules"
        ],
        accept: ["cos(α) is de x-coördinaat en sin(α) de y-coördinaat"] }
    ]
  }
];

const PHASE_EXAM_2 = [
  { id: "f2-1", prompt: "Vereenvoudig: 4x + 7x − 3x", accept: ["8x"] },
  { id: "f2-2", prompt: "Werk uit: 3(x + 5)", accept: ["3x+15"] },
  { id: "f2-3", prompt: "Werk uit: (x + 2)(x + 4)", accept: ["x^2+6x+8", "x²+6x+8"] },
  { id: "f2-4", prompt: "Factoriseer: 5x + 20", accept: ["5(x+4)"] },
  { id: "f2-5", prompt: "Los op: x + 8 = 15", accept: ["x=7", "7"] },
  { id: "f2-6", prompt: "Los op: 3x − 4 = 17", accept: ["x=7", "7"] },
  { id: "f2-7", prompt: "Los op: 5x + 2 = 2x + 14", accept: ["x=4", "4"] },
  { id: "f2-8", prompt: "Los op: x/4 + 3 = 8", accept: ["x=20", "20"] },
  { id: "f2-9", prompt: "Twee hoeken van een driehoek zijn 42° en 71°. Derde hoek?", accept: ["67", "67°"] },
  { id: "f2-10", prompt: "Oppervlakte van een rechthoek 12 cm × 7 cm", accept: ["84", "84cm^2", "84cm²"] },
  { id: "f2-11", prompt: "Omtrek van dezelfde rechthoek", accept: ["38", "38cm"] },
  { id: "f2-12", prompt: "Oppervlakte cirkel r = 4 cm, π ≈ 3,14", accept: ["50.24", "50,24"] },
  { id: "f2-13", prompt: "Inhoud blok 3 cm × 5 cm × 8 cm", accept: ["120", "120cm^3", "120cm³"] },
  { id: "f2-14", prompt: "Rechthoekszijden 9 en 12. Hypotenusa?", accept: ["15"] },
  { id: "f2-15", prompt: "f(5) voor f(x) = 3x − 2", accept: ["13"] },
  { id: "f2-16", prompt: "Richtingscoëfficiënt van y = −4x + 7", accept: ["-4"] },
  { id: "f2-17", prompt: "y-as-snijpunt van y = −4x + 7 (als punt)", accept: ["(0,7)", "0,7"] },
  { id: "f2-18", prompt: "Nulpunt van y = 2x − 10", accept: ["x=5", "5", "(5,0)"] },
  { id: "f2-19", prompt: "sin(α) in een 3-4-5-driehoek met overstaande zijde 3", accept: ["3/5", "0.6", "0,6"] },
  { id: "f2-20", prompt: "cos(α) in dezelfde driehoek (aanliggend 4)", accept: ["4/5", "0.8", "0,8"] },
  { id: "f2-21", prompt: "tan(α) in dezelfde driehoek", accept: ["3/4", "0.75", "0,75"] },
  { id: "f2-22", prompt: "Zet 180° om naar radialen", accept: ["pi", "π", "πradialen", "piradialen"] },
  { id: "f2-23", prompt: "Wat stellen sinus en cosinus voor op de eenheidscirkel? Kies.", type: "choice",
    choices: [
      "sinus is de diameter en cosinus de straal",
      "cos(α) is de x-coördinaat en sin(α) de y-coördinaat",
      "beide zijn altijd groter dan 1",
      "het zijn alleen ezelsbruggetjes, geen functies"
    ],
    accept: ["cos(α) is de x-coördinaat en sin(α) de y-coördinaat"] }
];
