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

      <div class="theory-image">
        <img src="assets/vector-components.svg" alt="Een vector met horizontale en verticale componenten die samen de volledige verplaatsing vormen.">
      </div>

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

      <div class="theory-image">
        <img src="assets/vectoren-optellen.svg" alt="Twee vectoren optellen.">
      </div>

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
  { id: "4.2", title: "Vectorbewerkingen & inwendig product", goal: "Hoe rekenen we met vectoren en beschrijven we hoeken en loodrechtheid?", theory: `
      <h2>Vectorbewerkingen & inwendig product</h2>

      <p><strong>Wat gaan we ontdekken?</strong></p>
      <ul>
        <li>Hoe we vectoren van elkaar aftrekken.</li>
        <li>Hoe het inwendig product twee vectoren met elkaar vergelijkt.</li>
        <li>Hoe we met het inwendig product hoeken kunnen bepalen.</li>
        <li>Wanneer twee vectoren loodrecht op elkaar staan.</li>
        <li>Hoe het teken van het inwendig product iets zegt over de hoek.</li>
        <li>Waarom het inwendig product een getal oplevert en geen nieuwe vector.</li>
        <li>Hoe dit begrip later terugkomt bij projecties en kleinste-kwadratenproblemen.</li>
      </ul>

      <p>
        In 4.1 leerden we vectoren beschrijven met componenten. We konden ze optellen,
        met een getal vermenigvuldigen en hun lengte bepalen. Nu stellen we een nieuwe
        vraag: <strong>hoe kunnen we twee vectoren met elkaar vergelijken?</strong>
      </p>

      <div class="callout">
        <p>
          <strong>Het inwendig product vertaalt een relatie tussen twee vectoren
          naar één getal.</strong>
        </p>
      </div>


      <h3>Vectoren aftrekken</h3>

      <p>
        Optellen combineert twee verplaatsingen. Aftrekken kunnen we zien als het
        verschil tussen twee vectoren.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">(5,2) − (1,4) = (4,−2)</p>

      <p>
        We trekken overeenkomstige componenten van elkaar af:
        de x-componenten van elkaar en de y-componenten van elkaar.
      </p>

      <p>
        Je kunt vectoraftrekking ook geometrisch bekijken. Als twee vectoren vanuit
        hetzelfde beginpunt vertrekken, wijst het verschil van de ene naar de andere.
        Daardoor is aftrekken nuttig wanneer we willen beschrijven hoe twee
        richtingen ten opzichte van elkaar verschillen.
      </p>

      <div class="callout">
        <p><strong>Bij vectoren werken optellen en aftrekken component per component.</strong></p>
      </div>


      <h3>Een eerste vergelijking: dezelfde of tegengestelde richting</h3>

      <p>
        Stel dat we twee vectoren hebben:
      </p>

      <p class="formula">u = (2,1)</p>

      <p class="formula">v = (4,2)</p>

      <p>
        De tweede vector is precies twee keer de eerste:
      </p>

      <p class="formula">v = 2u</p>

      <p>
        Ze wijzen dus in dezelfde richting. Als we in plaats daarvan nemen:
      </p>

      <p class="formula">w = (−4,−2)</p>

      <p>
        dan geldt:
      </p>

      <p class="formula">w = −2u</p>

      <p>
        Deze vector wijst in de tegengestelde richting.
      </p>

      <p>
        We willen echter meer kunnen zeggen dan alleen “zelfde” of “tegengesteld”.
        We willen ook hoeken tussen vectoren kunnen beschrijven. Daarvoor hebben
        we het inwendig product nodig.
      </p>


      <h3>Het inwendig product</h3>

      <p>
        Voor twee vectoren in twee dimensies,
        <span class="formula-inline">u = (u₁,u₂)</span> en
        <span class="formula-inline">v = (v₁,v₂)</span>, definiëren we het
        <strong>inwendig product</strong> als:
      </p>

      <p class="formula">u · v = u₁v₁ + u₂v₂</p>

      <p>
        Het puntje in het midden betekent hier dus niet gewone vermenigvuldiging
        van twee getallen. Het is de notatie voor het inwendig product van twee
        vectoren.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">u = (2,3)</p>

      <p class="formula">v = (4,1)</p>

      <p>
        Dan:
      </p>

      <p class="formula">u · v = 2 × 4 + 3 × 1 = 11</p>

      <p>
        Het resultaat is <strong>11</strong>, dus een getal. Dat is een belangrijk
        verschil met vectoroptelling: het inwendig product van twee vectoren levert
        geen vector op.
      </p>

      <div class="callout">
        <p>
          <strong>Vector + vector → vector.</strong>
        </p>
        <p>
          <strong>Vector · vector → getal.</strong>
        </p>
      </div>


      <h3>Waarom juist deze berekening?</h3>

      <p>
        De formule
        <span class="formula-inline">u · v = u₁v₁ + u₂v₂</span>
        lijkt eerst misschien een willekeurige rekenregel. Ze is dat niet.
        Het inwendig product meet hoeveel twee vectoren in dezelfde richtingen
        bijdragen.
      </p>

      <p>
        Als beide vectoren sterk dezelfde kant op wijzen, zijn overeenkomstige
        componenten vaak van hetzelfde teken en wordt het resultaat positief.
        Als ze tegengestelde richtingen hebben, wordt het resultaat negatief.
      </p>

      <p>
        Bij loodrechte vectoren heffen de bijdragen elkaar precies op. Dan wordt
        het resultaat nul.
      </p>

      <p>
        Dat geeft ons een krachtige geometrische interpretatie van hetzelfde getal.
      </p>


      <h3>De geometrische betekenis</h3>

      <div class="theory-image">
        <img src="assets/dot-product-angle.svg" alt="Twee vectoren met de hoek θ ertussen, waarmee het inwendig product geometrisch wordt geïnterpreteerd.">
      </div>

      <p>
        Voor twee niet-nulvectoren geldt:
      </p>

      <p class="formula">u · v = |u| |v| cos(θ)</p>

      <p>
        Hierbij zijn <span class="formula-inline">|u|</span> en
        <span class="formula-inline">|v|</span> de lengtes van de vectoren en
        <span class="formula-inline">θ</span> de hoek tussen beide vectoren.
      </p>

      <p>
        Deze formule vertelt ons waarom het inwendig product informatie over de
        hoek bevat. De factor
        <span class="formula-inline">cos(θ)</span>
        verandert met de hoek.
      </p>

      <p>
        We kunnen de componentenformule en de geometrische formule dus op twee
        manieren gebruiken om hetzelfde object te begrijpen:
      </p>

      <ul>
        <li>de componentenformule is handig om te rekenen;</li>
        <li>de geometrische formule is handig om de betekenis te begrijpen.</li>
      </ul>

      <div class="callout">
        <p>
          <strong>Het inwendig product is de brug tussen componenten en hoeken.</strong>
        </p>
      </div>


      <h3>De hoek tussen twee vectoren</h3>

      <p>
        Uit de geometrische formule kunnen we de hoek isoleren:
      </p>

      <p class="formula">cos(θ) = (u · v) / (|u| |v|)</p>

      <p>
        En dus:
      </p>

      <p class="formula">θ = arccos((u · v) / (|u| |v|))</p>

      <p>
        De functie <strong>arccos</strong> is de inverse van de cosinus:
        ze geeft de hoek terug wanneer we de waarde van de cosinus kennen.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">u = (1,0)</p>

      <p class="formula">v = (0,1)</p>

      <p>
        Dan:
      </p>

      <p class="formula">u · v = 1 × 0 + 0 × 1 = 0</p>

      <p>
        Omdat beide vectoren lengte 1 hebben, volgt:
      </p>

      <p class="formula">cos(θ) = 0</p>

      <p>
        De hoek is dus 90°. Deze twee vectoren staan loodrecht op elkaar.
      </p>


      <h3>Loodrechte vectoren</h3>

      <p>
        Twee niet-nulvectoren zijn <strong>loodrecht</strong> als de hoek tussen
        hen 90° is. Omdat:
      </p>

      <p class="formula">cos(90°) = 0</p>

      <p>
        volgt uit de geometrische betekenis:
      </p>

      <p class="formula">u · v = 0</p>

      <p>
        We krijgen daarmee een zeer praktische regel:
      </p>

      <div class="callout">
        <p><strong>Twee vectoren zijn loodrecht als hun inwendig product nul is.</strong></p>
      </div>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">u = (2,3)</p>

      <p class="formula">v = (3,−2)</p>

      <p>
        Dan:
      </p>

      <p class="formula">u · v = 2 × 3 + 3 × (−2) = 6 − 6 = 0</p>

      <p>
        Dus zijn de vectoren loodrecht.
      </p>

      <p>
        Merk op dat hun lengtes niet gelijk hoeven te zijn. Loodrechtheid gaat
        over de hoek, niet over de grootte.
      </p>


      <h3>Het teken van het inwendig product</h3>

      <p>
        Het inwendig product vertelt niet alleen of vectoren loodrecht staan.
        Het teken geeft ook informatie over de hoek.
      </p>

      <ul>
        <li>
          <strong>u · v &gt; 0:</strong> de hoek is kleiner dan 90°.
        </li>
        <li>
          <strong>u · v = 0:</strong> de vectoren staan loodrecht.
        </li>
        <li>
          <strong>u · v &lt; 0:</strong> de hoek is groter dan 90°.
        </li>
      </ul>

      <p>
        Voor niet-nulvectoren ligt de hoek tussen 0° en 180°. Het teken van het
        inwendig product vertelt dus aan welke kant van 90° de hoek ligt.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">u = (1,1)</p>

      <p class="formula">v = (2,1)</p>

      <p class="formula">u · v = 1 × 2 + 1 × 1 = 3 &gt; 0</p>

      <p>
        De hoek tussen de vectoren is kleiner dan 90°.
      </p>


      <h3>Een vector vergelijken met zichzelf</h3>

      <p>
        Wat gebeurt er als we een vector met zichzelf vergelijken?
      </p>

      <p class="formula">u · u = u₁² + u₂²</p>

      <p>
        Maar de lengte van de vector is:
      </p>

      <p class="formula">|u| = √(u₁² + u₂²)</p>

      <p>
        Daarom geldt:
      </p>

      <p class="formula">u · u = |u|²</p>

      <p>
        Het inwendig product van een vector met zichzelf geeft dus het
        <strong>kwadraat van zijn lengte</strong>.
      </p>

      <p>
        Dit is een belangrijke verbinding: het begrip lengte uit 4.1 zit al
        verborgen in het inwendig product.
      </p>


      <h3>Eenheidsvectoren</h3>

      <p>
        Soms willen we alleen de richting van een vector behouden en de lengte
        gelijk maken aan 1. Zo'n vector noemen we een <strong>eenheidsvector</strong>.
      </p>

      <p>
        Heeft een niet-nulvector
        <span class="formula-inline">u</span> lengte
        <span class="formula-inline">|u|</span>, dan krijgen we een eenheidsvector
        in dezelfde richting door te delen door de lengte:
      </p>

      <p class="formula">û = u / |u|</p>

      <p>
        Neem:
      </p>

      <p class="formula">u = (3,4)</p>

      <p>
        Uit 4.1 weten we dat
        <span class="formula-inline">|u| = 5</span>. Dus:
      </p>

      <p class="formula">û = (3/5,4/5)</p>

      <p>
        De richting is hetzelfde, maar de lengte is nu 1.
      </p>

      <div class="callout">
        <p><strong>Normaliseren verandert de grootte, maar behoudt de richting.</strong></p>
      </div>


      <h3>Een eenvoudige toepassing: kracht en verplaatsing</h3>

      <p>
        In de natuurkunde wordt het inwendig product gebruikt wanneer een
        gerichte grootheid slechts voor een deel in een bepaalde richting werkt.
      </p>

      <p>
        Denk aan een kracht die een voorwerp probeert te verplaatsen. Alleen de
        component van de kracht in de richting van de verplaatsing draagt bij aan
        de verrichte arbeid.
      </p>

      <p>
        In een eenvoudige situatie schrijven we:
      </p>

      <p class="formula">W = F · s</p>

      <p>
        waarbij <span class="formula-inline">F</span> de krachtvector en
        <span class="formula-inline">s</span> de verplaatsingsvector zijn.
      </p>

      <p>
        Als de kracht en verplaatsing dezelfde richting hebben, is het inwendig
        product positief. Als ze loodrecht staan, is het inwendig product nul.
        Dit laat zien dat de geometrische betekenis van het inwendig product
        rechtstreeks een fysische betekenis kan krijgen.
      </p>


      <h3>Wat het inwendig product niet is</h3>

      <p>
        Een paar onderscheidingen zijn belangrijk.
      </p>

      <ul>
        <li>
          Het inwendig product is <strong>geen gewone vermenigvuldiging</strong>
          van vectoren component per component.
        </li>
        <li>
          Het resultaat is <strong>een getal</strong>, geen vector.
        </li>
        <li>
          De volgorde verandert het resultaat niet:
          <span class="formula-inline">u · v = v · u</span>.
        </li>
        <li>
          Een nulresultaat betekent bij twee niet-nulvectoren loodrechtheid,
          niet dat één van de vectoren zelf nul is.
        </li>
      </ul>

      <p>
        Een typische fout is bijvoorbeeld om
        <span class="formula-inline">(2,3) · (4,5)</span> te schrijven als
        <span class="formula-inline">(8,15)</span>. Dat is geen inwendig product.
        Het juiste resultaat is:
      </p>

      <p class="formula">2 × 4 + 3 × 5 = 23</p>


      <h3>Van inwendig product naar projectie</h3>

      <p>
        We kunnen nu al een belangrijk idee zien. Stel dat we willen weten hoeveel
        van vector <span class="formula-inline">u</span> in de richting van vector
        <span class="formula-inline">v</span> wijst.
      </p>

      <p>
        Het inwendig product bevat precies de informatie die daarvoor nodig is:
        het meet de bijdrage van de ene richting in de andere.
      </p>

      <p>
        De volledige theorie van projecties bewaren we voor 4.11, waar we ook
        orthogonale projecties en kleinste kwadraten behandelen.
      </p>

      <div class="callout">
        <p>
          <strong>4.2 geeft ons de taal van richting en loodrechtheid.</strong>
        </p>
        <p>
          <strong>4.11 gebruikt die taal om benaderingen en projecties te bouwen.</strong>
        </p>
      </div>


      <h3>Van vectoren naar matrices</h3>

      <p>
        We kunnen nu vectoren optellen, schalen en met elkaar vergelijken via het
        inwendig product. De volgende vraag is: <strong>hoe kunnen we een hele
        verzameling vectoren systematisch bewerken?</strong>
      </p>

      <p>
        Daarvoor hebben we een nieuwe manier nodig om getallen te organiseren:
        <strong>matrices</strong>.
      </p>

      <p>
        In 4.4 beginnen we daarom niet meteen met ingewikkelde matrixvermenigvuldiging.
        Eerst bekijken we hoe een rechthoekig getallenrooster informatie kan
        organiseren en welke bewerkingen daarop natuurlijk zijn.
      </p>

      <div class="callout">
        <p><strong>Vectoren geven ons richtingen. Matrices geven ons een manier om zulke richtingen systematisch te bewerken.</strong></p>
      </div>
    ` },
  {
    id: "4.3",
    title: "Kruisproduct & ruimtelijke geometrie",
    goal: "Hoe vinden we een richting die loodrecht staat op twee vectoren?",
    theory: /* html */`
      <h2>Kruisproduct & ruimtelijke geometrie</h2>

      <p><strong>Wat gaan we ontdekken?</strong></p>
      <ul>
        <li>Waarom we in drie dimensies een tweede soort vectorproduct nodig hebben.</li>
        <li>Wat het kruisproduct van twee vectoren betekent.</li>
        <li>Hoe de richting van het resultaat met de rechterhandregel wordt bepaald.</li>
        <li>Waarom de grootte van het kruisproduct een oppervlakte geeft.</li>
        <li>Hoe we het kruisproduct in componenten berekenen.</li>
        <li>Hoe we met het kruisproduct een vector loodrecht op twee andere vectoren vinden.</li>
        <li>Hoe het kruisproduct terugkomt in moment en andere fysische toepassingen.</li>
      </ul>

      <p>
        In 4.2 gebruikten we het <strong>inwendig product</strong> om informatie over
        de hoek tussen twee vectoren te vinden. Dat product levert een getal op.
        In drie dimensies ontstaat een andere natuurlijke vraag:
        <strong>kunnen we uit twee vectoren een nieuwe vector maken die loodrecht
        op beide staat?</strong>
      </p>

      <div class="callout">
        <p><strong>Het inwendig product meet een relatie tussen twee richtingen.</strong></p>
        <p><strong>Het kruisproduct gebruikt twee richtingen om een nieuwe loodrechte richting te construeren.</strong></p>
      </div>

      <h3>Waarom hebben we een tweede vectorproduct nodig?</h3>

      <p>
        Stel dat twee vectoren in een vlak liggen. In drie dimensies is er dan een
        richting die loodrecht staat op dat hele vlak. Die richting staat dus
        loodrecht op beide vectoren.
      </p>

      <p>
        Dat is precies wat het kruisproduct ons geeft. We schrijven het met een
        kruisje:
      </p>

      <p class="formula">u × v</p>

      <p>
        Het resultaat is een <strong>vector</strong>, in tegenstelling tot het
        inwendig product <span class="formula-inline">u · v</span>, dat een getal
        oplevert.
      </p>

      <div class="callout">
        <p><strong>u · v → getal</strong></p>
        <p><strong>u × v → vector</strong></p>
      </div>

      <h3>Het kruisproduct werkt in drie dimensies</h3>

      <div class="theory-image">
        <img src="assets/cross-product-normal.svg" alt="Twee vectoren spannen een vlak op en hun kruisproduct wijst loodrecht op dat vlak.">
      </div>

      <p>
        Het gewone kruisproduct dat we hier leren is gedefinieerd voor vectoren in
        drie dimensies. We schrijven:
      </p>

      <p class="formula">u = (uₓ,uᵧ,u_z)</p>

      <p class="formula">v = (vₓ,vᵧ,v_z)</p>

      <p>
        Het resultaat <span class="formula-inline">u × v</span> is opnieuw een
        driedimensionale vector.
      </p>

      <p>
        Dit is een belangrijk onderscheid met het inwendig product. Het kruisproduct
        is geen algemene vermenigvuldiging van willekeurige vectoren in elke
        dimensie. De specifieke vorm die we hier gebruiken hoort bij de gewone
        driedimensionale ruimte.
      </p>

      <h3>De geometrische betekenis</h3>

      <p>
        De vectoren <span class="formula-inline">u</span> en
        <span class="formula-inline">v</span> spannen samen een parallellogram op.
        De grootte van het kruisproduct is precies de oppervlakte van dat
        parallellogram.
      </p>

      <p class="formula">|u × v| = |u| |v| sin(θ)</p>

      <p>
        Hierbij is <span class="formula-inline">θ</span> de hoek tussen de twee
        vectoren.
      </p>

      <p>
        Dit lijkt sterk op de formule van het inwendig product uit 4.2, maar met
        <span class="formula-inline">sin(θ)</span> in plaats van
        <span class="formula-inline">cos(θ)</span>. Daardoor meet het kruisproduct
        hoeveel van de twee richtingen een oppervlakte opspant.
      </p>

      <p>
        Als de vectoren parallel zijn, is de hoek 0° en dus:
      </p>

      <p class="formula">u × v = 0</p>

      <p>
        Geometrisch klopt dat: twee parallelle vectoren spannen geen oppervlakte op.
      </p>

      <p>
        Als de vectoren loodrecht staan, is de sinus maximaal en wordt de oppervlakte
        gelijk aan <span class="formula-inline">|u||v|</span>.
      </p>

      <h3>De richting: de rechterhandregel</h3>

      <p>
        De grootte vertelt nog niet welke kant de nieuwe vector op wijst.
        De richting van het kruisproduct staat loodrecht op beide oorspronkelijke
        vectoren.
      </p>

      <p>
        Om de juiste van de twee mogelijke loodrechte richtingen te kiezen gebruiken
        we de <strong>rechterhandregel</strong>: richt de vingers van je rechterhand
        volgens de eerste vector en krul ze in de richting van de tweede vector.
        Je duim wijst dan in de richting van het kruisproduct.
      </p>

      <p>
        De volgorde is dus belangrijk. In het algemeen geldt:
      </p>

      <p class="formula">u × v = −(v × u)</p>

      <p>
        Als je de vectoren omwisselt, blijft de grootte gelijk maar draait de richting
        om.
      </p>

      <div class="callout">
        <p><strong>Bij het kruisproduct is de volgorde onderdeel van de betekenis.</strong></p>
      </div>

      <h3>De basisrichtingen</h3>

      <p>
        In een cartesisch assenstelsel gebruiken we de drie basisrichtingen
        x, y en z. We kunnen ze voorstellen door:
      </p>

      <p class="formula">i = (1,0,0)</p>

      <p class="formula">j = (0,1,0)</p>

      <p class="formula">k = (0,0,1)</p>

      <p>
        Met de rechterhandregel krijgen we:
      </p>

      <p class="formula">i × j = k</p>

      <p class="formula">j × k = i</p>

      <p class="formula">k × i = j</p>

      <p>
        Als we de volgorde omdraaien, krijgen we de tegengestelde richting:
      </p>

      <p class="formula">j × i = −k</p>

      <p class="formula">k × j = −i</p>

      <p class="formula">i × k = −j</p>

      <p>
        Deze relaties zijn een compacte manier om de oriëntatie van de
        driedimensionale ruimte vast te leggen.
      </p>

      <h3>Het kruisproduct berekenen met componenten</h3>

      <p>
        Voor:
      </p>

      <p class="formula">u = (uₓ,uᵧ,u_z)</p>

      <p class="formula">v = (vₓ,vᵧ,v_z)</p>

      <p>
        is het kruisproduct:
      </p>

      <p class="formula">u × v = (uᵧv_z − u_zvᵧ, u_zvₓ − uₓv_z, uₓvᵧ − uᵧvₓ)</p>

      <p>
        Elke component van het resultaat gebruikt twee componenten van de
        oorspronkelijke vectoren.
      </p>

      <p>
        Neem bijvoorbeeld:
      </p>

      <p class="formula">u = (1,0,0)</p>

      <p class="formula">v = (0,1,0)</p>

      <p>
        Dan volgt:
      </p>

      <p class="formula">u × v = (0,0,1)</p>

      <p>
        Het resultaat wijst dus in de positieve z-richting, precies zoals de
        rechterhandregel voorspelt.
      </p>

      <div class="callout">
        <p><strong>De componentenformule is de rekenmethode.</strong></p>
        <p><strong>De geometrische betekenis en de rechterhandregel vertellen ons waarom het resultaat logisch is.</strong></p>
      </div>

      <h3>Een vector loodrecht op twee andere vectoren</h3>

      <p>
        Een van de krachtigste toepassingen van het kruisproduct is het vinden van
        een richting die loodrecht staat op twee gegeven vectoren.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">u = (1,2,0)</p>

      <p class="formula">v = (0,1,3)</p>

      <p>
        Dan:
      </p>

      <p class="formula">u × v = (6,−3,1)</p>

      <p>
        We kunnen controleren of dit resultaat werkelijk loodrecht staat op beide
        vectoren met het inwendig product:
      </p>

      <p class="formula">(6,−3,1) · (1,2,0) = 6 − 6 + 0 = 0</p>

      <p class="formula">(6,−3,1) · (0,1,3) = 0 − 3 + 3 = 0</p>

      <p>
        Het kruisproduct en het inwendig product werken hier dus samen:
        het kruisproduct construeert een kandidaat voor de loodrechte richting,
        waarna het inwendig product de loodrechtheid controleert.
      </p>

      <h3>Oppervlakte van een parallellogram en driehoek</h3>

      <p>
        Omdat de grootte van het kruisproduct de oppervlakte van het opgespannen
        parallellogram geeft, kunnen we ook oppervlakten berekenen.
      </p>

      <p>
        Voor twee vectoren geldt:
      </p>

      <p class="formula">A_parallellogram = |u × v|</p>

      <p>
        Een driehoek met dezelfde twee zijvectoren heeft de helft van die oppervlakte:
      </p>

      <p class="formula">A_driehoek = 1/2 |u × v|</p>

      <p>
        Dit is de driedimensionale tegenhanger van de bekende oppervlakteformule
        voor een parallellogram, maar nu kunnen de twee zijden in elke richting
        liggen.
      </p>

      <h3>Een toepassing in de natuurkunde: moment</h3>

      <p>
        Het kruisproduct krijgt een directe fysische betekenis bij het
        <strong>moment</strong> van een kracht rond een punt of as.
      </p>

      <p>
        Als <span class="formula-inline">r</span> de positievector van het
        aangrijpingspunt is en <span class="formula-inline">F</span> de krachtvector,
        schrijven we:
      </p>

      <p class="formula">τ = r × F</p>

      <p>
        De vector <span class="formula-inline">τ</span> wijst langs de rotatie-as
        volgens de rechterhandregel. De grootte is:
      </p>

      <p class="formula">|τ| = |r| |F| sin(θ)</p>

      <p>
        Alleen de component van de kracht die loodrecht op de arm werkt, draagt
        bij aan het moment. Dit maakt de geometrische betekenis van het kruisproduct
        direct herkenbaar in een fysische situatie.
      </p>

      <h3>Verschil tussen dot product en cross product</h3>

      <p>
        We kunnen de twee vectorproducten nu naast elkaar zetten:
      </p>

      <ul>
        <li>
          <strong>Inwendig product:</strong> levert een getal en beschrijft onder
          andere hoeken, lengte en loodrechtheid.
        </li>
        <li>
          <strong>Kruisproduct:</strong> levert in drie dimensies een vector die
          loodrecht staat op beide oorspronkelijke vectoren.
        </li>
        <li>
          Bij het inwendig product gebruiken we <span class="formula-inline">cos(θ)</span>.
        </li>
        <li>
          Bij de grootte van het kruisproduct gebruiken we
          <span class="formula-inline">sin(θ)</span>.
        </li>
        <li>
          Het inwendig product is verwisselbaar:
          <span class="formula-inline">u · v = v · u</span>.
        </li>
        <li>
          Het kruisproduct verandert van richting bij verwisselen:
          <span class="formula-inline">u × v = −(v × u)</span>.
        </li>
      </ul>

      <div class="callout">
        <p><strong>Dot product → hoeveel wijzen twee vectoren in dezelfde richting?</strong></p>
        <p><strong>Cross product → welke loodrechte richting ontstaat uit twee vectoren?</strong></p>
      </div>

      <h3>Van kruisproduct naar lijnen en vlakken</h3>

      <p>
        Een vector loodrecht op twee richtingen is bijzonder nuttig wanneer we
        ruimtelijke geometrie willen beschrijven. Zo'n vector noemen we vaak een
        <strong>normaalvector</strong>.
      </p>

      <p>
        Een vlak kan bijvoorbeeld worden beschreven door een punt op het vlak en
        een normaalvector. In symbolische vorm heeft zo'n beschrijving de structuur:
      </p>

      <p class="formula">n · (r − r₀) = 0</p>

      <p>
        Hierbij is <span class="formula-inline">n</span> een normaalvector,
        <span class="formula-inline">r₀</span> een bekend punt op het vlak en
        <span class="formula-inline">r</span> een willekeurig punt van het vlak.
      </p>

      <p>
        Het kruisproduct kan helpen om zo'n normaalvector te construeren uit twee
        richtingsvectoren die in het vlak liggen:
      </p>

      <p class="formula">n = u × v</p>

      <p>
        We werken deze vectorbeschrijving van lijnen en vlakken later verder uit
        wanneer ze nodig is voor lineaire stelsels en transformaties. Hier is het
        belangrijkste inzicht dat het kruisproduct een praktische manier geeft om
        een loodrechte richting te construeren.
      </p>

      <h3>Veelgemaakte fouten</h3>

      <ul>
        <li>
          <strong>Het kruisproduct verwarren met het inwendig product.</strong>
          Het eerste geeft een vector, het tweede een getal.
        </li>
        <li>
          <strong>Vergeten dat de volgorde telt.</strong>
          Omwisselen verandert het teken en dus de richting.
        </li>
        <li>
          <strong>Het kruisproduct in twee dimensies behandelen alsof het een gewone
          2D-bewerking is.</strong>
          De standaardvorm die we hier gebruiken hoort bij drie dimensies.
        </li>
        <li>
          <strong>Alleen de componenten uitrekenen.</strong>
          Controleer ook of de richting en de geometrische betekenis kloppen.
        </li>
        <li>
          <strong>Denken dat een nul-kruisproduct betekent dat een vector nul is.</strong>
          Voor niet-nulvectoren betekent een nul-kruisproduct dat de vectoren
          parallel zijn.
        </li>
      </ul>

      <h3>De vectorbouwstenen zijn compleet</h3>

      <p>
        Met 4.1, 4.2 en 4.3 hebben we nu de belangrijkste elementaire
        vectorbewerkingen die we in de rest van Fase 4 nodig hebben:
      </p>

      <ul>
        <li>vectoren optellen, aftrekken en schalen;</li>
        <li>lengte en eenheidsvectoren;</li>
        <li>inwendig product, hoeken en orthogonaliteit;</li>
        <li>kruisproduct, loodrechte richtingen en ruimtelijke oppervlakte.</li>
      </ul>

      <p>
        Daarmee kunnen we de stap maken van afzonderlijke vectoren naar een
        systematische manier om veel getallen en vectoren tegelijk te organiseren.
      </p>

      <div class="callout">
        <p><strong>In 4.4 maken we kennis met matrices: rechthoekige structuren waarin we getallen systematisch kunnen organiseren en bewerken.</strong></p>
      </div>
    `
  },
  {
    id: "4.4",
    title: "Matrices & matrixbewerkingen",
    goal: "Hoe organiseren en bewerken we meerdere getallen tegelijk?",
    theory: /* html */`
      <h2>Matrices & matrixbewerkingen</h2>

      <p><strong>Wat gaan we ontdekken?</strong></p>
      <ul>
        <li>Waarom een matrix handig is om veel getallen tegelijk te organiseren.</li>
        <li>Hoe we de afmetingen en posities van elementen in een matrix beschrijven.</li>
        <li>Hoe we matrices optellen en aftrekken.</li>
        <li>Hoe we een matrix met een getal vermenigvuldigen.</li>
        <li>Wat een rij, kolom en element van een matrix zijn.</li>
        <li>Hoe de nulmatrix, vierkante matrix en eenheidsmatrix werken.</li>
        <li>Waarom matrixvermenigvuldiging een aparte bewerking is die we pas in 4.5 invoeren.</li>
      </ul>

      <p>
        In 4.1–4.3 leerden we vectoren gebruiken om richting en grootte te beschrijven.
        Een vector kun je zien als een geordende rij getallen. Maar zodra we meerdere
        vectoren of meerdere soorten informatie tegelijk willen organiseren, wordt
        één rij of kolom al snel onhandig.
      </p>

      <p>
        Daarvoor gebruiken we een <strong>matrix</strong>: een rechthoekig rooster
        van getallen waarin de positie van elk getal betekenis kan hebben.
      </p>

      <div class="callout">
        <p><strong>Een matrix organiseert getallen in rijen en kolommen.</strong></p>
        <p>Een vector is een eenvoudige vorm van zo'n geordende getallenstructuur; een matrix kan er meerdere tegelijk organiseren.</p>
      </div>

      <h3>Van een lijst getallen naar een matrix</h3>

      <p>
        Stel dat we van drie treinen de snelheid en massa willen bijhouden. We kunnen
        de gegevens overzichtelijk in een rooster plaatsen:
      </p>

      <p class="formula">A = ( 120  80 ;  900  650 ;  110  720 )</p>

      <p>
        In de eerste kolom kunnen bijvoorbeeld de snelheden staan en in de tweede
        kolom de massa's. De exacte betekenis hangt af van wat we met de matrix
        willen voorstellen.
      </p>

      <p>
        De matrix bevat hier 3 rijen en 2 kolommen. We zeggen daarom dat de matrix
        <strong>3 × 2</strong> is.
      </p>

      <p>
        De notatie <span class="formula-inline">3 × 2</span> betekent hier niet dat
        we 3 en 2 met elkaar vermenigvuldigen. Het beschrijft de vorm:
        <strong>3 rijen × 2 kolommen</strong>.
      </p>

      <h3>Rijen en kolommen</h3>

      <p>
        Een <strong>rij</strong> loopt horizontaal door een matrix.
        Een <strong>kolom</strong> loopt verticaal.
      </p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">A = ( 2  5  7 ;  1  4  6 )</p>

      <p>
        Deze matrix heeft 2 rijen en 3 kolommen. We noemen haar daarom een
        <strong>2 × 3-matrix</strong>.
      </p>

      <p>
        De eerste rij is <span class="formula-inline">(2,5,7)</span>.
        De tweede kolom is <span class="formula-inline">(5,4)</span>.
      </p>

      <div class="callout">
        <p><strong>Rij = horizontaal.</strong></p>
        <p><strong>Kolom = verticaal.</strong></p>
      </div>

      <h3>De plaats van een element</h3>

      <p>
        Elk afzonderlijk getal in een matrix noemen we een <strong>element</strong>
        of <strong>entry</strong>. We moeten kunnen aangeven waar dat element staat.
      </p>

      <p>
        We schrijven een matrix bijvoorbeeld als <span class="formula-inline">A</span>
        en noemen een element:
      </p>

      <p class="formula">aᵢⱼ</p>

      <p>
        Het eerste indexcijfer <span class="formula-inline">i</span> geeft de rij aan.
        Het tweede <span class="formula-inline">j</span> de kolom.
      </p>

      <p>Neem:</p>
      <p class="formula">A = ( 2  5  7 ;  1  4  6 )</p>

      <p>Dan is:</p>
      <p class="formula">a₁₂ = 5</p>
      <p class="formula">a₂₃ = 6</p>

      <div class="callout">
        <p><strong>aᵢⱼ betekent: element op rij i, kolom j.</strong></p>
      </div>

      <h3>De afmetingen van een matrix</h3>

      <div class="theory-image">
        <img src="assets/matrix-anatomy.svg" alt="Een 2 bij 3 matrix met een gemarkeerde rij, kolom, element en de afmetingen.">
      </div>

      <p>
        De afmetingen geven aan hoeveel rijen en kolommen een matrix heeft.
        Een matrix met <span class="formula-inline">m</span> rijen en
        <span class="formula-inline">n</span> kolommen noemen we een
        <strong>m × n-matrix</strong>.
      </p>

      <p class="formula">A ∈ ℝᵐˣⁿ</p>

      <p>
        Deze notatie betekent dat <span class="formula-inline">A</span> een matrix
        is met <span class="formula-inline">m</span> rijen en
        <span class="formula-inline">n</span> kolommen waarvan de elementen reële
        getallen zijn.
      </p>

      <h3>Wanneer zijn twee matrices gelijk?</h3>

      <p>
        Twee matrices zijn gelijk wanneer ze dezelfde afmetingen hebben én elk
        overeenkomstig element gelijk is.
      </p>

      <p class="formula">A = ( 1  2 ;  3  4 )</p>
      <p class="formula">B = ( 1  2 ;  3  4 )</p>

      <p>
        Dan geldt <span class="formula-inline">A = B</span>. De positie van elk
        element hoort bij de informatie, dus dezelfde getallen in een andere
        rangschikking geven niet automatisch dezelfde matrix.
      </p>

      <h3>Matrixoptelling</h3>

      <p>
        We kunnen twee matrices optellen wanneer ze dezelfde afmetingen hebben.
        We tellen overeenkomstige elementen bij elkaar op.
      </p>

      <p class="formula">A = ( 1  2 ;  3  4 )</p>
      <p class="formula">B = ( 5  1 ;  2  3 )</p>
      <p class="formula">A + B = ( 6  3 ;  5  7 )</p>

      <p>In algemene vorm:</p>
      <p class="formula">(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ</p>

      <div class="callout">
        <p><strong>Optellen kan alleen wanneer de matrices dezelfde vorm hebben.</strong></p>
      </div>

      <h3>Matrixaftrekking</h3>

      <p>
        Aftrekken werkt op dezelfde manier: overeenkomstige elementen worden van
        elkaar afgetrokken.
      </p>

      <p class="formula">A − B = A + (−B)</p>
      <p class="formula">( 7  5 ;  4  2 ) − ( 2  1 ;  3  6 ) = ( 5  4 ;  1  −4 )</p>

      <p>
        Ook hier moeten de twee matrices dezelfde afmetingen hebben.
      </p>

      <h3>Een matrix vermenigvuldigen met een getal</h3>

      <p>
        Net zoals bij vectoren kunnen we een matrix met een getal vermenigvuldigen.
        Zo'n getal noemen we een <strong>scalaire factor</strong>.
      </p>

      <p class="formula">3( 1  −2 ;  4  5 ) = ( 3  −6 ;  12  15 )</p>
      <p class="formula">(kA)ᵢⱼ = k aᵢⱼ</p>

      <div class="callout">
        <p><strong>Een matrix schalen betekent elk element met dezelfde factor vermenigvuldigen.</strong></p>
      </div>

      <h3>De nulmatrix</h3>

      <p>
        Voor elke matrixvorm bestaat een <strong>nulmatrix</strong>: een matrix
        waarvan alle elementen nul zijn.
      </p>

      <p class="formula">0₂ˣ₃ = ( 0  0  0 ;  0  0  0 )</p>
      <p class="formula">A + 0 = A</p>

      <p>
        De nulmatrix speelt later een belangrijke rol bij matrixvergelijkingen
        en lineaire stelsels.
      </p>

      <h3>Vierkante matrices</h3>

      <p>
        Een matrix met evenveel rijen als kolommen noemen we een
        <strong>vierkante matrix</strong>.
      </p>

      <p class="formula">A = ( 2  1 ;  0  3 )</p>

      <p>
        Dit is een <span class="formula-inline">2 × 2</span>-matrix.
        Vierkante matrices worden later belangrijk bij determinanten, inverses
        en eigenwaarden.
      </p>

      <h3>De hoofddiagonaal</h3>

      <p>
        Bij een vierkante matrix loopt de <strong>hoofddiagonaal</strong> van
        linksboven naar rechtsonder.
      </p>

      <p class="formula">A = ( 2  1  4 ;  0  3  5 ;  7  2  6 )</p>
      <p class="formula">a₁₁ = 2, a₂₂ = 3, a₃₃ = 6</p>

      <p>
        De diagonaal wordt later belangrijk bij onder andere determinanten,
        diagonale matrices en eigenwaarden.
      </p>

      <h3>De eenheidsmatrix</h3>

      <p>
        Voor vierkante matrices bestaat een bijzondere matrix die later de rol
        van het getal 1 bij matrixvermenigvuldiging krijgt: de
        <strong>eenheidsmatrix</strong>.
      </p>

      <p class="formula">I₂ = ( 1  0 ;  0  1 )</p>

      <p>
        Op de hoofddiagonaal staan enen en daarbuiten nullen. De volledige betekenis
        wordt duidelijk in 4.5, waar we matrixvermenigvuldiging invoeren:
      </p>

      <p class="formula">AI = IA = A</p>

      <h3>Transponeren: rijen worden kolommen</h3>

      <p>
        We kunnen een matrix ook <strong>transponeren</strong>. Daarbij worden
        de rijen kolommen en de kolommen rijen.
      </p>

      <p class="formula">A = ( 1  2  3 ;  4  5  6 )</p>
      <p class="formula">Aᵀ = ( 1  4 ;  2  5 ;  3  6 )</p>

      <p>
        Een <span class="formula-inline">2 × 3</span>-matrix wordt dus een
        <span class="formula-inline">3 × 2</span>-matrix.
      </p>

      <div class="callout">
        <p><strong>Transponeren verwisselt de rol van rijen en kolommen.</strong></p>
      </div>

      <h3>Matrix als verzameling vectoren</h3>

      <p>
        Een matrix kan ook worden bekeken als een verzameling kolomvectoren.
      </p>

      <p class="formula">A = ( 1  3 ;  2  4 )</p>
      <p class="formula">a₁ = (1,2)</p>
      <p class="formula">a₂ = (3,4)</p>

      <p>
        Dit is een belangrijke brug naar de vorige milestones. Een matrix is niet
        alleen een tabel met getallen; zijn kolommen kunnen zelf vectoren zijn.
        Later gebruiken we deze manier van kijken om matrices als lineaire
        transformaties te begrijpen.
      </p>

      <h3>Wat we nog niet doen: matrixvermenigvuldiging</h3>

      <p>
        Misschien valt op dat we nog geen twee matrices met elkaar hebben
        vermenigvuldigd. Dat is bewust.
      </p>

      <p>
        Bij matrixvermenigvuldiging kun je niet zomaar overeenkomstige elementen
        met elkaar vermenigvuldigen. De regel is gebaseerd op het combineren van
        rijen en kolommen en krijgt in 4.5 een betekenis als compositie van
        lineaire bewerkingen.
      </p>

      <div class="callout">
        <p><strong>4.4 leert ons hoe matrices eruitzien en welke eenvoudige bewerkingen natuurlijk zijn.</strong></p>
        <p><strong>4.5 leert ons waarom matrixvermenigvuldiging werkt en wat ze betekent.</strong></p>
      </div>

      <h3>Veelgemaakte fouten</h3>

      <ul>
        <li><strong>Rijen en kolommen verwisselen.</strong> Bij <span class="formula-inline">aᵢⱼ</span> komt de rij eerst en de kolom tweede.</li>
        <li><strong>Een 3 × 2-matrix verwarren met een 2 × 3-matrix.</strong> De volgorde van de afmetingen is betekenisvol.</li>
        <li><strong>Matrices met verschillende vormen optellen.</strong> Matrixoptelling vereist dezelfde afmetingen.</li>
        <li><strong>Transponeren verwarren met spiegelen.</strong> Rijen worden systematisch kolommen en omgekeerd.</li>
        <li><strong>Elementgewijze vermenigvuldiging aanzien voor matrixvermenigvuldiging.</strong> De echte matrixvermenigvuldiging komt in 4.5.</li>
        <li><strong>Denken dat een vierkante matrix automatisch een eenheidsmatrix is.</strong> Vierkant zegt alleen iets over de vorm.</li>
      </ul>

      <h3>Van matrices naar lineaire bewerkingen</h3>

      <p>
        We kunnen nu matrices lezen, hun afmetingen bepalen, elementen aanwijzen,
        optellen, aftrekken, schalen en transponeren. We hebben ook gezien dat
        kolommen van een matrix zelf vectoren kunnen zijn.
      </p>

      <p>
        Daarmee staat de deur open naar een veel krachtiger idee:
        <strong>een matrix kan een bewerking op vectoren voorstellen.</strong>
      </p>

      <p>
        Om dat idee echt te begrijpen moeten we leren hoe twee matrices met elkaar
        worden gecombineerd en hoe een matrix op een vector werkt.
      </p>

      <div class="callout">
        <p><strong>In 4.5 wordt matrixvermenigvuldiging de brug tussen getallenroosters, vectoren en lineaire transformaties.</strong></p>
      </div>
    `
  },

  { id: "4.5", title: "Matrixvermenigvuldiging & compositie", goal: "Hoe combineren we lineaire bewerkingen stap voor stap?", theory: `` },
  { id: "4.6", title: "Lineaire stelsels & Gauss-eliminatie", goal: "Hoe lossen we meerdere lineaire vergelijkingen systematisch op?", theory: `` },
  { id: "4.7", title: "Lineaire transformaties", goal: "Hoe beschrijven matrices systematische veranderingen van vectoren?", theory: `` },
  { id: "4.8", title: "Determinanten, inverse & invertibiliteit", goal: "Wanneer verliest een lineaire transformatie informatie en wanneer kunnen we haar omkeren?", theory: `` },
  { id: "4.9", title: "Vectorruimten & deelruimten", goal: "Wat maakt een verzameling vectoren tot een ruimte waarin we lineair kunnen rekenen?", theory: `` },
  { id: "4.10", title: "Lineaire combinaties, onafhankelijkheid, opspanning, basis & dimensie", goal: "Hoe bouwen we een vectorruimte op uit onafhankelijke richtingen?", theory: `` },
  { id: "4.11", title: "Kern, beeld, rang & verandering van basis", goal: "Welke informatie behoudt een lineaire transformatie en hoe verandert haar beschrijving bij een andere basis?", theory: `` },
  { id: "4.12", title: "Orthogonaliteit, projecties & kleinste kwadraten", goal: "Hoe vinden we loodrechte componenten en de beste benadering wanneer een exact antwoord niet bestaat?", theory: `` },
  { id: "4.13", title: "Eigenwaarden & eigenvectoren", goal: "Welke richtingen blijven onder een transformatie invariant?", theory: `` },
  { id: "4.14", title: "Diagonalisatie & toepassingen", goal: "Hoe maken we eigenrichtingen complexe lineaire transformaties eenvoudiger?", theory: `` }


];
const PHASE_EXAM_4 = [];
