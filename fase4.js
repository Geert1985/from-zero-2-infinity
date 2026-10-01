/* Lesstof Fase 4 — Lineaire algebra. */
const MILESTONES_4 = [
  {
    id: "4.1",
    title: "Vectoren als ruimtelijke objecten",
    goal: "Hoe beschrijven we richting en grootte met vectoren?",
    theory: /* html */`
      <h2>Vectoren als ruimtelijke objecten</h2>

      <p><strong>Wat gaan we ontdekken?</strong></p>
      <ul>
        <li>Waarom een gewone positie niet altijd genoeg is om beweging te beschrijven.</li>
        <li>Hoe een vector tegelijk een richting en een grootte kan vastleggen.</li>
        <li>Hoe we een vector met componenten beschrijven.</li>
        <li>Hoe we vectoren optellen en met een getal vermenigvuldigen.</li>
        <li>Hoe de lengte van een vector uit zijn componenten volgt.</li>
        <li>Waarom dezelfde vector op verschillende plaatsen in een tekening kan voorkomen.</li>
        <li>Hoe vectoren bewegingen en richtingen in twee en drie dimensies beschrijven.</li>
      </ul>

      <p>
        In Fase 3 leerden we verandering in functies en in de ruimte te beschrijven.
        In 3.14 zagen we dat verandering in verschillende richtingen een vector kan
        voortbrengen. Nu maken we dat idee precies genoeg om ermee te kunnen rekenen.
      </p>

      <div class="callout">
        <p><strong>Een vector vertelt niet alleen waar iets is, maar ook hoe je van de ene plaats naar de andere gaat.</strong></p>
      </div>

      <h3>Van positie naar verplaatsing</h3>

      <p>
        Stel dat een trein zich eerst op positie A bevindt en daarna op positie B.
        Om te zeggen waar de trein is, gebruiken we een positie. Maar als we willen
        beschrijven <em>wat er veranderd is</em>, hebben we iets anders nodig:
        de verplaatsing.
      </p>

      <p>
        Stel dat een punt van <span class="formula-inline">(2,1)</span> naar
        <span class="formula-inline">(5,4)</span> gaat.
      </p>

      <p>In horizontale richting is de verandering:</p>

      <p class="formula">5 − 2 = 3</p>

      <p>In verticale richting is de verandering:</p>

      <p class="formula">4 − 1 = 3</p>

      <p>
        De verplaatsing bestaat dus uit twee stukken informatie:
        3 eenheden naar rechts en 3 eenheden omhoog.
      </p>

      <p>We kunnen die verplaatsing schrijven als:</p>

      <p class="formula">v = (3,3)</p>

      <p>
        De letter <strong>v</strong> stelt hier de vector voor. In een tekening wordt
        een vector vaak als een pijl weergegeven.
      </p>

      <div class="callout">
        <p><strong>Een positie zegt waar je bent.</strong></p>
        <p><strong>Een verplaatsingsvector zegt hoe je van de ene positie naar de andere gaat.</strong></p>
      </div>

      <h3>Een vector heeft richting en grootte</h3>

      <p>
        We kunnen een vector tekenen als een pijl. De richting van de pijl vertelt
        welke kant de verplaatsing opgaat. De lengte van de pijl vertelt hoe groot
        de verplaatsing is.
      </p>

      <p>
        Bij de vector <span class="formula-inline">(3,3)</span> gaan we 3 eenheden
        naar rechts en 3 eenheden omhoog. De vector wijst dus schuin naar rechtsboven.
      </p>

      <p>
        Twee pijlen kunnen op verschillende plaatsen staan en toch dezelfde vector
        voorstellen. Een pijl van <span class="formula-inline">(0,0)</span> naar
        <span class="formula-inline">(3,3)</span> en een pijl van
        <span class="formula-inline">(5,1)</span> naar
        <span class="formula-inline">(8,4)</span> hebben dezelfde richting en
        dezelfde lengte.
      </p>

      <div class="callout">
        <p><strong>Een vector is geen vaste plaats.</strong></p>
        <p>
          Hij beschrijft een richting en een grootte. Daarom kunnen we dezelfde
          vector op verschillende plaatsen tekenen.
        </p>
      </div>

      <h3>Vectoren met componenten</h3>

      <p>
        In een cartesisch assenstelsel kunnen we de richting van een vector beschrijven
        met zijn <strong>componenten</strong>. Componenten zijn de bijdragen in de
        verschillende coördinaatrichtingen.
      </p>

      <p>In twee dimensies schrijven we bijvoorbeeld:</p>

      <p class="formula">v = (vₓ,vᵧ)</p>

      <p>
        De eerste component beschrijft de verandering in de x-richting.
        De tweede beschrijft de verandering in de y-richting.
      </p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">v = (4,−2)</p>

      <p>Dit betekent:</p>

      <ul>
        <li>4 eenheden naar rechts;</li>
        <li>2 eenheden naar beneden.</li>
      </ul>

      <p>
        Een negatieve component betekent dus niet dat de vector “kleiner” is.
        Het teken geeft de richting ten opzichte van de gekozen assen aan.
      </p>

      <div class="callout">
        <p><strong>Componenten zijn de bouwstenen van een vector in een gekozen coördinatenstelsel.</strong></p>
      </div>

      <h3>Van twee posities naar een vector</h3>

      <p>
        Als een punt van A = <span class="formula-inline">(x₁,y₁)</span> naar
        B = <span class="formula-inline">(x₂,y₂)</span> gaat, vinden we de
        verplaatsingsvector door de beginpositie van de eindpositie af te trekken.
      </p>

      <p class="formula">v_AB = (x₂ − x₁, y₂ − y₁)</p>

      <p>Neem:</p>

      <p class="formula">A = (2,5)</p>

      <p class="formula">B = (7,1)</p>

      <p>Dan is:</p>

      <p class="formula">v_AB = (7 − 2, 1 − 5) = (5,−4)</p>

      <p>
        De betekenis is direct zichtbaar:
        5 eenheden naar rechts en 4 eenheden naar beneden.
      </p>

      <div class="callout">
        <p><strong>Eindpositie − beginpositie = verplaatsingsvector.</strong></p>
        <p>
          Dit sluit rechtstreeks aan bij het delta-idee uit Fase 3:
          een verandering wordt gevonden door eindwaarde − beginwaarde te nemen.
        </p>
      </div>

      <h3>Vectoren optellen</h3>

      <p>
        Stel dat een object eerst een verplaatsing
        <span class="formula-inline">(2,1)</span> maakt en daarna een verplaatsing
        <span class="formula-inline">(3,4)</span>. De totale verplaatsing vinden we
        door de overeenkomstige componenten op te tellen.
      </p>

      <p class="formula">(2,1) + (3,4) = (5,5)</p>

      <p>
        Geometrisch betekent dit dat je de tweede vector aan het uiteinde van de
        eerste plaatst. De totale pijl loopt dan rechtstreeks van het beginpunt
        naar het eindpunt.
      </p>

      <p>In algemene vorm:</p>

      <p class="formula">(a,b) + (c,d) = (a + c, b + d)</p>

      <p>
        Vectoroptelling is dus geen mysterieuze nieuwe bewerking. We voeren dezelfde
        optelling uit op overeenkomstige componenten.
      </p>

      <h3>Een vector vermenigvuldigen met een getal</h3>

      <p>
        We kunnen een vector ook vermenigvuldigen met een gewoon getal.
        Dat getal noemen we een <strong>scalaire factor</strong>.
      </p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">3(2,1) = (6,3)</p>

      <p>
        De richting blijft hetzelfde, maar de vector wordt drie keer zo groot.
      </p>

      <p>Bij een negatieve factor draait de richting om:</p>

      <p class="formula">−2(2,1) = (−4,−2)</p>

      <p>In het algemeen:</p>

      <p class="formula">k(a,b) = (ka,kb)</p>

      <p>
        Hierbij is <span class="formula-inline">k</span> een getal.
      </p>

      <div class="callout">
        <p><strong>Optellen combineert verplaatsingen.</strong></p>
        <p><strong>Vermenigvuldigen met een getal verandert de schaal en eventueel de richting.</strong></p>
      </div>

      <h3>De lengte van een vector</h3>

      <p>
        Een vector bevat informatie over richting, maar we willen ook zijn grootte
        kunnen bepalen. De lengte van <span class="formula-inline">(a,b)</span>
        volgt uit de stelling van Pythagoras.
      </p>

      <p>
        De twee componenten vormen de rechthoekszijden van een rechthoekige driehoek.
        De vector zelf is de schuine zijde.
      </p>

      <p class="formula">|v| = √(a² + b²)</p>

      <p>Neem bijvoorbeeld:</p>

      <p class="formula">v = (3,4)</p>

      <p>Dan:</p>

      <p class="formula">|v| = √(3² + 4²) = √25 = 5</p>

      <p>De vector heeft dus een lengte van 5.</p>

      <div class="callout">
        <p><strong>De lengte van een vector is de grootte van de verplaatsing.</strong></p>
        <p>
          De formule is geen losstaande nieuwe regel: ze is rechtstreeks de
          stelling van Pythagoras toegepast op de componenten van de vector.
        </p>
      </div>

      <h3>Vectoren in drie dimensies</h3>

      <p>
        In de ruimte hebben we naast een x- en y-richting ook een z-richting.
        Een vector krijgt dan drie componenten:
      </p>

      <p class="formula">v = (vₓ,vᵧ,v_z)</p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">v = (2,−1,3)</p>

      <p>Dit betekent:</p>

      <ul>
        <li>2 eenheden in de x-richting;</li>
        <li>1 eenheid in de negatieve y-richting;</li>
        <li>3 eenheden in de z-richting.</li>
      </ul>

      <p>
        Ook hier kunnen we de lengte bepalen met Pythagoras, nu uitgebreid naar
        drie componenten:
      </p>

      <p class="formula">|v| = √(vₓ² + vᵧ² + v_z²)</p>

      <p>
        Dezelfde gedachte werkt ook met meer componenten. We hoeven op dit moment
        alleen te onthouden dat een vector uit componenten bestaat die elk een
        richtingbijdrage beschrijven.
      </p>

      <h3>Vectoren als beschrijving van beweging</h3>

      <p>
        Vectoren worden bijzonder nuttig wanneer een beweging tegelijk verschillende
        richtingen heeft.
      </p>

      <p>
        Stel dat een drone tijdens één tijdstap 6 meter naar het oosten en 8 meter
        naar het noorden beweegt. De verplaatsing is:
      </p>

      <p class="formula">Δr = (6,8)</p>

      <p>De grootte van de verplaatsing is:</p>

      <p class="formula">|Δr| = √(6² + 8²) = 10</p>

      <p>
        De rechte verplaatsing heeft dus een grootte van 10 meter, terwijl de
        componenten vertellen in welke richting die verplaatsing plaatsvond.
      </p>

      <p>
        Dit is precies waarom vectoren zo belangrijk zijn in de natuurkunde:
        positie, verplaatsing, snelheid en kracht hebben niet alleen een grootte,
        maar vaak ook een richting.
      </p>

      <h3>Positievectoren</h3>

      <p>
        We kunnen een positie zelf ook met een vector beschrijven. Als een punt P
        de coördinaten <span class="formula-inline">(x,y)</span> heeft, kunnen we
        vanuit de oorsprong naar dat punt wijzen met de <strong>positievector</strong>.
      </p>

      <p class="formula">r = (x,y)</p>

      <p>
        De positievector vertelt dan waar het punt zich bevindt ten opzichte van
        de oorsprong.
      </p>

      <p>Dit onderscheid is belangrijk:</p>

      <ul>
        <li>een <strong>positie</strong> verwijst naar een plaats;</li>
        <li>een <strong>positievector</strong> beschrijft die plaats vanuit de oorsprong;</li>
        <li>een <strong>verplaatsingsvector</strong> beschrijft een verandering van plaats.</li>
      </ul>

      <p>
        Dezelfde wiskundige vorm <span class="formula-inline">(x,y)</span> kan dus
        verschillende betekenissen hebben afhankelijk van de context.
      </p>

      <h3>Wat is een vector dan precies?</h3>

      <p>
        We kunnen nu een eerste formele beschrijving geven.
      </p>

      <div class="callout">
        <p><strong>Een vector is een wiskundig object dat richting en grootte beschrijft.</strong></p>
        <p>
          In een gekozen cartesisch coördinatenstelsel kunnen we een vector
          voorstellen door zijn componenten.
        </p>
      </div>

      <p>In twee dimensies:</p>

      <p class="formula">v = (vₓ,vᵧ)</p>

      <p>In drie dimensies:</p>

      <p class="formula">v = (vₓ,vᵧ,v_z)</p>

      <p>
        De componenten zijn afhankelijk van het gekozen coördinatenstelsel,
        maar het onderliggende geometrische idee van richting en grootte blijft
        hetzelfde.
      </p>

      <p>
        We hoeven hier nog geen volledige theorie van vectorruimten op te bouwen.
        Dat komt later. Voorlopig is het doel dat je een vector kunt lezen,
        tekenen, vergelijken en gebruiken om veranderingen te beschrijven.
      </p>

      <h3>Een vector lezen in de praktijk</h3>

      <p>Wanneer je een vector ziet, kun je steeds dezelfde vragen stellen:</p>

      <ol>
        <li>Wat stelt de vector voor?</li>
        <li>Welke component hoort bij elke richting?</li>
        <li>Wat betekenen de tekens van de componenten?</li>
        <li>Hoe groot is de vector?</li>
        <li>Is de vector een verplaatsing, een positie of een ander gericht object?</li>
      </ol>

      <p>Neem bijvoorbeeld:</p>

      <p class="formula">v = (−3,4)</p>

      <p>Dan weet je onmiddellijk:</p>

      <ul>
        <li>3 eenheden in de negatieve x-richting;</li>
        <li>4 eenheden in de positieve y-richting;</li>
        <li>de lengte is <span class="formula-inline">√(9 + 16) = 5</span>.</li>
      </ul>

      <p>
        Zo vertaal je een compacte notatie opnieuw naar een geometrisch beeld.
      </p>

      <h3>Veelgemaakte fouten</h3>

      <ul>
        <li>
          <strong>Een vector verwarren met een punt.</strong>
          Een punt geeft een plaats aan; een vector beschrijft een gerichte grootheid.
        </li>
        <li>
          <strong>De componenten als losse afstanden lezen.</strong>
          Een negatieve component bevat ook richtinginformatie.
        </li>
        <li>
          <strong>De lengte berekenen als a + b.</strong>
          De componenten vormen loodrechte richtingen, dus Pythagoras is nodig.
        </li>
        <li>
          <strong>Denken dat een vector vastzit aan zijn beginpunt.</strong>
          Voor een gewone verplaatsingsvector is de plaats van de pijl niet bepalend.
        </li>
        <li>
          <strong>Begin- en eindpositie omdraaien.</strong>
          Voor v_AB nemen we B − A, niet A − B.
        </li>
      </ul>

      <h3>Van vectoren naar lineaire algebra</h3>

      <p>
        We hebben nu vectoren leren zien als objecten waarmee we richting, grootte
        en verandering kunnen beschrijven. We kunnen ze optellen, met een getal
        vermenigvuldigen en hun lengte bepalen.
      </p>

      <p>Daarmee hebben we de eerste bouwstenen van de lineaire algebra.</p>

      <p>In de volgende milestone stellen we een nieuwe vraag:</p>

      <div class="callout">
        <p><strong>Hoe kunnen we vectoren met elkaar vergelijken?</strong></p>
        <p>
          Dan komen we uit bij hoeken, loodrechtheid en het
          <strong>inwendig product</strong>.
        </p>
      </div>

      <p>
        Later zullen we ontdekken dat vectoren niet alleen pijlen in een tekening
        zijn. Ze kunnen ook abstractere objecten voorstellen, bijvoorbeeld toestanden,
        gegevens of oplossingen van vergelijkingen. Dat bredere begrip bouwen we
        pas verderop in Fase 4 op.
      </p>
    `
  },
  { id: "4.2", title: "Vectorbewerkingen & inwendig product", goal: "Hoe rekenen we met vectoren en beschrijven we hoeken en loodrechtheid?", theory: `` },
  { id: "4.3", title: "Matrices & matrixbewerkingen", goal: "Hoe organiseren en bewerken we meerdere getallen tegelijk?", theory: `` },
  { id: "4.4", title: "Matrixvermenigvuldiging & compositie", goal: "Hoe combineren we lineaire bewerkingen stap voor stap?", theory: `` },
  { id: "4.5", title: "Lineaire stelsels & Gauss-eliminatie", goal: "Hoe lossen we meerdere lineaire vergelijkingen systematisch op?", theory: `` },
  { id: "4.6", title: "Lineaire transformaties", goal: "Hoe beschrijven matrices systematische veranderingen van vectoren?", theory: `` },
  { id: "4.7", title: "Determinanten & invertibiliteit", goal: "Wanneer verliest een lineaire transformatie informatie en wanneer niet?", theory: `` },
  { id: "4.8", title: "Vectorruimten & deelruimten", goal: "Wat maakt een verzameling vectoren tot een ruimte waarin we lineair kunnen rekenen?", theory: `` },
  { id: "4.9", title: "Lineaire combinaties, opspanning, basis & dimensie", goal: "Hoe bouwen we een vectorruimte op uit elementaire richtingen?", theory: `` },
  { id: "4.10", title: "Kern, beeld & rang", goal: "Welke informatie behoudt een lineaire transformatie en welke gaat verloren?", theory: `` },
  { id: "4.11", title: "Orthogonaliteit, projecties & kleinste kwadraten", goal: "Hoe vinden we de beste benadering wanneer een exact antwoord niet bestaat?", theory: `` },
  { id: "4.12", title: "Eigenwaarden & eigenvectoren", goal: "Welke richtingen blijven onder een transformatie invariant?", theory: `` },
  { id: "4.13", title: "Diagonalisatie & toepassingen", goal: "Hoe maken eigenrichtingen complexe lineaire transformaties eenvoudiger?", theory: `` }
];

const PHASE_EXAM_4 = [];
