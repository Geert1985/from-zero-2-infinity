/* Lesstof Fase 2 — Algebra & geometrie. */
const MILESTONES_2 = [
  {
    id: "2.1",
    title: "Variabelen & algebraïsche uitdrukkingen",
    goal: "Hoe kan een getal een onbekende worden?",
    theory: /* html */`
      <h2>Variabelen & algebraïsche uitdrukkingen</h2>
      <p><strong>Doel:</strong></p>
      <ul>
        <li>begrijpen waarom we letters gebruiken om getallen voor te stellen</li>
        <li>het verschil begrijpen tussen een onbekende en een veranderlijke</li>
        <li>een algebraïsche uitdrukking lezen en de termen, coëfficiënten en constanten herkennen</li>
        <li>waarden correct invullen in een uitdrukking</li>
        <li>gelijksoortige termen herkennen en samennemen</li>
      </ul>

      <h3>1. Van een bekend getal naar een letter</h3>
      <p>In Fase 1 rekenden we met concrete getallen. Een tas kost 12 euro. Twee tassen kosten:</p>
      <p class="formula">2 · 12 = 24</p>
      <div class="callout"><strong>Vanaf nu schrijven we het maalteken als een punt (·).</strong>
      <p>Dat doen we omdat we in de algebra ook letters gebruiken.</p> 
      <p>Het gewone maalteken × kan dan gemakkelijk verward worden met de letter x, die we als variabele gebruiken zoals we straks zullen zien.</p></div>
      <p>Maar wat als de prijs nog niet bekend is, of als die kan veranderen? Dan willen we niet één specifiek geval beschrijven, maar het algemene verband.</p>
      <p>Noem de prijs van één tas <strong>p</strong>. Twee tassen kosten dan:</p>
      <p class="formula">2 · p</p>
      <p>Als later blijkt dat p = 12, krijgen we:</p>
      <p class="formula">2 · 12 = 24</p>
      <p>Als p = 15, krijgen we:</p>
      <p class="formula">2 · 15 = 30</p>
      <p>De uitdrukking <span class="formula-inline">2p</span> beschrijft dus alle mogelijke prijzen tegelijk.</p>
      <div class="callout"><strong>Een variabele is een letter die een getal voorstelt.</strong> 
      <p>De waarde van die variabele kan nog onbekend zijn, of verschillende toegelaten waarden aannemen.</p></div>

      <h3>2. Onbekende of veranderlijke?</h3>
      <p>Hetzelfde symbool kan in verschillende situaties een andere rol spelen.</p>
      <p>In:</p>
      <p class="formula">x + 3 = 7</p>
      <p>zoeken we naar de waarde van x die de vergelijking waar maakt. Hier spreken we over een <strong>onbekende</strong>.</p>
      <p>In:</p>
      <p class="formula">y = 2x + 1</p>
      <p>kan x verschillende waarden aannemen. Voor elke toegelaten waarde van x krijgen we een waarde van y. Hier is x een <strong>veranderlijke</strong>.</p>
      <p>De begrippen overlappen dus, maar leggen een ander accent: bij een onbekende willen we een waarde bepalen; bij een veranderlijke onderzoeken we hoe een uitdrukking of grootheid verandert wanneer de waarde verandert.</p>

      <h3>3. Letters zijn getallen</h3>
      <p>Wanneer we met algebra werken, behandelen we letters op dezelfde manier als getallen. Een getal vóór een letter betekent vermenigvuldiging:</p>
      <p class="formula">3x = 3 · x</p>
      <p>De vermenigvuldiging wordt meestal niet uitgeschreven. Ook:</p>
      <p class="formula">ab = a · b</p>
      <p>en:</p>
      <p class="formula">4xy = 4 · x · y</p>
      <p>Een factor 1 wordt meestal niet geschreven:</p>
      <p class="formula">x = 1x</p>
      <p>Ook een factor −1 wordt meestal verkort geschreven:</p>
      <p class="formula">−x = −1x</p>
      <div class="callout"><strong>Let op:</strong> <span class="formula-inline">3x</span> betekent <strong>3 keer x</strong>, niet 3 + x. Het ontbreken van het vermenigvuldigingsteken is een belangrijke afspraak in de algebra.</div>

      <h3>4. Onderdelen van een algebraïsche uitdrukking</h3>
      <p>Een <strong>algebraïsche uitdrukking</strong> is een combinatie van getallen, letters en bewerkingen. Bijvoorbeeld:</p>
      <p class="formula">3x + 5</p>
      <p>We onderscheiden verschillende onderdelen.</p>
      <ul>
        <li><strong>variabele:</strong> de letter waarvan de waarde kan veranderen, hier x;</li>
        <li><strong>coëfficiënt:</strong> het getal dat een variabele vermenigvuldigt, hier 3;</li>
        <li><strong>constante:</strong> een getal zonder variabele, hier 5;</li>
        <li><strong>term:</strong> een onderdeel dat door + of − van andere termen is gescheiden.</li>
      </ul>
      <p>De uitdrukking <span class="formula-inline">3x + 5</span> bestaat dus uit twee termen: <span class="formula-inline">3x</span> en <span class="formula-inline">5</span>.</p>
      <p>Bij:</p>
      <p class="formula">−4x + 7 − 2x</p>
      <p>zijn de termen <span class="formula-inline">−4x</span>, <span class="formula-inline">7</span> en <span class="formula-inline">−2x</span>. Het minteken hoort bij de term die erop volgt.</p>

      <h3>5. Uitdrukking of vergelijking?</h3>
      <p>Het onderscheid tussen een uitdrukking en een vergelijking is belangrijk.</p>
      <p>Een uitdrukking zoals:</p>
      <p class="formula">3x + 5</p>
      <p>heeft geen gelijkheidsteken. We kunnen de uitdrukking berekenen of vereenvoudigen.</p>
      <p>Een vergelijking zoals:</p>
      <p class="formula">3x + 5 = 17</p>
      <p>bevat wel een gelijkheidsteken. We zoeken dan naar waarden van x waarvoor de linker- en rechterkant dezelfde waarde hebben.</p>
      <div class="callout">
        <p><strong>Onthoud:</strong></p> 
        <p>Een uitdrukking geeft een hoeveelheid of berekening weer;</p> 
        <p>een vergelijking stelt dat twee uitdrukkingen gelijk zijn.</p>
      </div>

      <h3>6. Een waarde invullen</h3>
      <p>Een algebraïsche uitdrukking krijgt een concrete waarde zodra we een waarde voor de variabele kiezen.</p>
      <p>Neem:</p>
      <p class="formula">3x + 5</p>
      <p>en stel x = 4. Dan vervangen we x door 4:</p>
      <p class="formula">3 · 4 + 5 = 12 + 5 = 17</p>
      <p>De waarde van <span class="formula-inline">3x + 5</span> is dus 17 voor x = 4.</p>
      <p>Bij een negatieve waarde gebruiken we haakjes om duidelijk te maken dat de volledige waarde wordt ingevuld:</p>
      <p class="formula">x = −2</p>
      <p class="formula">3x + 5 = 3(−2) + 5 = −6 + 5 = −1</p>
      <div data-widget="algebraMachine"></div>
      <p>Ook bij machten zijn haakjes belangrijk:</p>
      <p class="formula">x = −3 → x² = (−3)² = 9</p>
      <p>Dit is iets anders dan <span class="formula-inline">−3²</span>, waarvoor de gebruikelijke rekenvolgorde eerst de macht berekent.</p>

      <h3>7. Dezelfde letter kan verschillende waarden aannemen</h3>
      <p>Een variabele staat niet vast op één getal. Als:</p>
      <p class="formula">A = 2x + 1</p>
      <p>dan kunnen we bijvoorbeeld berekenen:</p>
      <p class="formula">x = 0 → A = 1</p>
      <p class="formula">x = 1 → A = 3</p>
      <p class="formula">x = 5 → A = 11</p>
      <p>De formule beschrijft daarmee een hele verzameling mogelijke situaties. Welke waarden werkelijk zijn toegestaan, hangt af van de context. Een lengte kan bijvoorbeeld niet negatief zijn.</p>
      <div class="callout">
        <p><strong>Een formule krijgt betekenis door haar context.</strong></p> 
        <p>Niet elke wiskundig mogelijke waarde van een variabele hoeft in de werkelijkheid toegelaten te zijn.</p>
      </div>

      <h3>8. Gelijksoortige termen</h3>
      <p>We kunnen sommige termen samenvoegen omdat ze dezelfde algebraïsche structuur hebben.</p>
      <p>Zo zijn <span class="formula-inline">3x</span> en <span class="formula-inline">5x</span> gelijksoortige termen:</p>
      <p class="formula">3x + 5x = 8x</p>
      <p>Ook:</p>
      <p class="formula">7a − 2a = 5a</p>
      <p>en:</p>
      <p class="formula">4x² + 3x² = 7x²</p>
      <p>Termen zijn gelijksoortig wanneer dezelfde variabelen met dezelfde exponenten voorkomen.</p>
      <p>Daarom zijn <span class="formula-inline">3x</span> en <span class="formula-inline">3x²</span> <strong>niet</strong> gelijksoortig. Ook <span class="formula-inline">3x</span> en 5 zijn niet gelijksoortig.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3x + 5 + 2x − 1 = 5x + 4</p>
      <p>We hebben alleen gelijksoortige termen samengenomen:</p>
      <p class="formula">3x + 2x = 5x</p>
      <p>en:</p>
      <p class="formula">5 − 1 = 4</p>
      <p>Dit betekent niet dat we zomaar alle termen met elkaar mogen combineren.</p>

      <h3>9. Een variabele kan ook een complexe uitdrukking vertegenwoordigen</h3>
      <p>Een letter hoeft niet altijd één eenvoudig getal te vervangen. Soms gebruiken we een letter als afkorting voor een grootheid of voor een waarde die uit een andere berekening komt.</p>
      <p>Als bijvoorbeeld <span class="formula-inline">l = 8</span> en <span class="formula-inline">b = 5</span>, dan is de oppervlakte van een rechthoek:</p>
      <p class="formula">A = l · b = 8 · 5 = 40</p>
      <p>De letters maken het mogelijk om eerst een algemene formule op te stellen en pas daarna concrete waarden in te vullen.</p>

      <div class="callout"><p><strong>Kernidee:</strong></p> 
      <p>Algebra is een taal om algemene patronen en verbanden te beschrijven.</p>
      <p>In plaats van telkens met één concreet getal te rekenen, gebruiken we symbolen zodat één uitdrukking veel verschillende situaties kan 
        beschrijven.</p>
      </div>
    `
  },
  {
    id: "2.2",
    title: "Algebraïsche bewerkingen",
    goal: "Hoe rekenen we met letters?",
    theory: /* html */`
      <h2>Algebraïsche bewerkingen</h2>
      <p><strong>Doel:</strong> leren optellen, aftrekken en vermenigvuldigen met algebraïsche termen, haakjes correct uitwerken, merkwaardige producten herkennen en algebraïsche uitdrukkingen ontbinden in factoren.</p>

      <h3>1. Optellen en aftrekken: alleen gelijksoortige termen</h3>
      <p>In Fase 1 konden we bijvoorbeeld drie appels en twee appels samen nemen:</p>
      <p class="formula">3 appels + 2 appels = 5 appels</p>
      <p>In algebra werkt hetzelfde idee. Als <span class="formula-inline">x</span> een aantal voorstelt, dan geldt:</p>
      <p class="formula">3x + 2x = 5x</p>
      <p>We tellen de <strong>coëfficiënten</strong> op, maar de variabele blijft dezelfde.</p>
      <p class="formula">3x + 2x = (3 + 2)x = 5x</p>
      <p>Hetzelfde geldt bij aftrekken:</p>
      <p class="formula">7x − 3x = 4x</p>
      <p>Ook constanten kunnen we samen nemen:</p>
      <p class="formula">8 + 5 − 3 = 10</p>
      <p>Een uitdrukking met verschillende soorten termen vereenvoudigen we door de gelijksoortige termen te groeperen:</p>
      <p class="formula">3x + 7 + 2x − 4 = 3x + 2x + 7 − 4 = 5x + 3</p>
      <div class="callout"><strong>Gelijksoortige termen gedragen zich als dezelfde soort eenheid.</strong> Je kunt 3x en 2x samenvoegen, maar 3x en 2y niet.</div>

      <h3>2. Welke termen zijn gelijksoortig?</h3>
      <p>Termen zijn gelijksoortig wanneer ze hetzelfde lettergedeelte hebben: dezelfde variabelen met dezelfde exponenten.</p>
      <p class="formula">3x,\; −5x,\; 12x</p>
      <p>zijn gelijksoortig.</p>
      <p>Maar:</p>
      <p class="formula">3x,\; 3x^{2},\; 3y</p>
      <p>zijn niet gelijksoortig.</p>
      <p>Ook:</p>
      <p class="formula">2xy,\; −7xy,\; 4xy</p>
      <p>zijn gelijksoortig, terwijl <span class="formula-inline">2xy</span> en <span class="formula-inline">2x^{2}y</span> dat niet zijn.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">4x^{2} + 3x − 2x^{2} + 5x = 2x^{2} + 8x</p>
      <p>We mogen dus wel <span class="formula-inline">4x^{2}</span> en <span class="formula-inline">−2x^{2}</span> combineren, en <span class="formula-inline">3x</span> en <span class="formula-inline">5x</span>, maar niet alle vier samenvoegen tot één term.</p>

      <h3>3. Vermenigvuldigen met monomen</h3>
      <p>Bij vermenigvuldigen vermenigvuldigen we de getallen met elkaar en gebruiken we de machtsregels voor dezelfde variabelen.</p>
      <p class="formula">2x · 3x = 6x^{2}</p>
      <p>Want:</p>
      <p class="formula">2x · 3x = (2 · 3)(x · x) = 6x^{2}</p>
      <p>Met verschillende variabelen:</p>
      <p class="formula">3a · 4b = 12ab</p>
      <p>En:</p>
      <p class="formula">2x^{2} · 3x^{3} = 6x^{5}</p>
      <p>De exponenten worden opgeteld omdat we machten met hetzelfde grondtal vermenigvuldigen.</p>

      <h3>4. Distributiviteit: een getal voor een haakje</h3>
      <p>In Fase 1 leerden we dat een factor buiten een haakje met <strong>elk onderdeel</strong> binnen het haakje moet worden vermenigvuldigd.</p>
      <p class="formula">3(4 + 5) = 3 · 4 + 3 · 5</p>
      <p>Dezelfde wet geldt met variabelen:</p>
      <p class="formula">a(b + c) = ab + ac</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3(x + 4) = 3x + 12</p>
      <p>Of:</p>
      <p class="formula">5(2x − 3) = 10x − 15</p>
      <p>De factor 5 wordt dus zowel met <span class="formula-inline">2x</span> als met <span class="formula-inline">−3</span> vermenigvuldigd.</p>
      <div class="callout"><strong>Veelgemaakte fout:</strong> <span class="formula-inline">3(x + 4)</span> is <strong>niet</strong> <span class="formula-inline">3x + 4</span>. De 3 moet naar elke term in het haakje.</div>

      <h3>5. Een minteken vóór een haakje</h3>
      <p>Een minteken vóór een haakje betekent vermenigvuldigen met −1:</p>
      <p class="formula">−(x + 4) = −1(x + 4)</p>
      <p>Daarom krijgen beide termen een minteken:</p>
      <p class="formula">−(x + 4) = −x − 4</p>
      <p>Bij een min voor een verschil:</p>
      <p class="formula">−(x − 5) = −x + 5</p>
      <p>Het minteken verandert dus het teken van <strong>elke term</strong> in het haakje.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">7 − (2x − 3) = 7 − 2x + 3 = 10 − 2x</p>
      <div class="callout"><strong>Onthoud:</strong> een min voor een haakje is hetzelfde als vermenigvuldigen met −1. Het is niet alleen het eerste teken dat verandert.</div>

      <h3>6. Twee haakjes vermenigvuldigen</h3>
      <p>Wanneer twee haakjes met elkaar worden vermenigvuldigd, moet <strong>elke term van het eerste haakje</strong> worden vermenigvuldigd met <strong>elke term van het tweede haakje</strong>.</p>
      <p>Neem:</p>
      <p class="formula">(x + 2)(x + 3)</p>
      <p>We werken stap voor stap:</p>
      <p class="formula">x(x + 3) + 2(x + 3)</p>
      <p class="formula">= x^{2} + 3x + 2x + 6</p>
      <p>Nu nemen we de gelijksoortige termen samen:</p>
      <p class="formula">= x^{2} + 5x + 6</p>
      <p>Dit is eigenlijk <strong>twee keer distributiviteit</strong>.</p>
      <p>Ook met negatieve termen werkt dezelfde methode:</p>
      <p class="formula">(x − 2)(x + 3) = x^{2} + 3x − 2x − 6 = x^{2} + x − 6</p>
      <p>De veiligste methode is altijd: schrijf alle tussenstappen op en controleer daarna of gelijksoortige termen zijn samengenomen.</p>

      <h3>7. Merkwaardige producten</h3>
      <p>Sommige producten komen zo vaak voor dat we hun uitwerking als vaste regel kunnen herkennen. Ze volgen rechtstreeks uit distributiviteit.</p>
      <p>Het kwadraat van een som:</p>
      <p class="formula">(a + b)^{2} = a^{2} + 2ab + b^{2}</p>
      <p>Want:</p>
      <p class="formula">(a + b)^{2} = (a + b)(a + b)</p>
      <p>en dus:</p>
      <p class="formula">a^{2} + ab + ab + b^{2} = a^{2} + 2ab + b^{2}</p>
      <p>Het kwadraat van een verschil:</p>
      <p class="formula">(a − b)^{2} = a^{2} − 2ab + b^{2}</p>
      <p>En het verschil van twee kwadraten:</p>
      <p class="formula">(a + b)(a − b) = a^{2} − b^{2}</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">(x + 3)^{2} = x^{2} + 6x + 9</p>
      <div class="callout"><strong>Klassieke fout:</strong> <span class="formula-inline">(x + 3)^{2}</span> is niet <span class="formula-inline">x^{2} + 9</span>. De middelste term <span class="formula-inline">6x</span> ontstaat doordat beide kruisproducten meetellen.</div>

      <h3>8. Ontbinden in factoren: distributiviteit achteruit</h3>
      <p>Distributiviteit kunnen we ook in de omgekeerde richting gebruiken. We noemen dat <strong>ontbinden in factoren</strong> of <strong>factoriseren</strong>.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">6x + 9 = 3(2x + 3)</p>
      <p>We halen de gemeenschappelijke factor 3 buiten het haakje:</p>
      <p class="formula">6x + 9 = 3 · 2x + 3 · 3 = 3(2x + 3)</p>
      <p>Ook:</p>
      <p class="formula">x^{2} + 5x = x(x + 5)</p>
      <p>We zoeken dus naar wat de termen gemeenschappelijk hebben.</p>
      <p>Een belangrijk speciaal geval is het verschil van twee kwadraten. We herkennen:</p>
      <p class="formula">a^{2} − b^{2} = (a + b)(a − b)</p>
      <p>Dus:</p>
      <p class="formula">x^{2} − 9 = x^{2} − 3^{2} = (x + 3)(x − 3)</p>
      <p>Ontbinden is nuttig omdat een product vaak gemakkelijker te gebruiken of verder te onderzoeken is dan een som.</p>

      <h3>9. Uitwerken en ontbinden zijn tegengestelde bewerkingen</h3>
      <p>De twee richtingen vormen samen één structuur:</p>
      <p class="formula">3(x + 4) = 3x + 12</p>
      <p>Uitwerken gaat van links naar rechts; ontbinden kan van rechts naar links:</p>
      <p class="formula">3x + 12 = 3(x + 4)</p>
      <p>Hetzelfde geldt voor een merkwaardig product:</p>
      <p class="formula">(x + 2)^{2} = x^{2} + 4x + 4</p>
      <p>en omgekeerd:</p>
      <p class="formula">x^{2} + 4x + 4 = (x + 2)^{2}</p>
      <div class="callout"><strong>De bewerkingen zijn twee richtingen van dezelfde algebraïsche structuur.</strong> Uitwerken maakt de structuur zichtbaar als som; ontbinden maakt een verborgen productstructuur zichtbaar.</div>

      <h3>10. De rekenvolgorde blijft gelden</h3>
      <p>De aanwezigheid van letters verandert de gewone rekenregels niet. We werken nog steeds volgens de afgesproken volgorde:</p>
      <ol>
        <li>haakjes;</li>
        <li>machten en wortels;</li>
        <li>vermenigvuldigen en delen;</li>
        <li>optellen en aftrekken.</li>
      </ol>
      <p>Bijvoorbeeld:</p>
      <p class="formula">2x + 3 · 4 = 2x + 12</p>
      <p>De vermenigvuldiging <span class="formula-inline">3 · 4</span> gebeurt vóór de optelling.</p>
      <p>En:</p>
      <p class="formula">2(x + 3)^{2}</p>
      <p>betekent eerst het kwadraat van <span class="formula-inline">(x + 3)</span>, daarna vermenigvuldigen met 2.</p>

      <h3>11. Een vaste aanpak bij algebraïsche bewerkingen</h3>
      <p>Wanneer een uitdrukking meerdere bewerkingen bevat, helpt een vaste werkwijze:</p>
      <ol>
        <li>werk haakjes zorgvuldig weg;</li>
        <li>werk machten uit wanneer dat nodig is;</li>
        <li>verzamel gelijksoortige termen;</li>
        <li>vereenvoudig het resultaat;</li>
        <li>controleer eventueel door een concrete waarde voor een variabele in te vullen.</li>
      </ol>
      <p>Neem bijvoorbeeld:</p>
      <p class="formula">2(x + 3) − (x − 4)</p>
      <p>Eerst de haakjes:</p>
      <p class="formula">2x + 6 − x + 4</p>
      <p>Daarna gelijksoortige termen:</p>
      <p class="formula">x + 10</p>
      <p>De algebraïsche bewerking bestaat dus niet uit zomaar symbolen verschuiven. Elke stap volgt uit een rekenwet die we al kennen.</p>

      <div class="callout">
        <p><strong>Kernidee:</strong></p>
        <p>De rekenwetten uit Fase 1 blijven geldig wanneer getallen door variabelen worden vervangen.</p>
        <p>We leren nu dezelfde structuur herkennen in termen, haakjes en producten: gelijksoortige termen kunnen worden samengenomen, distributiviteit werkt vooruit én achteruit, en producten kunnen worden uitgewerkt of ontbonden.</p>
      </div>
    `
  },
  {
    id: "2.3",
    title: "Vergelijkingen",
    goal: "Hoe vinden we een onbekende?",
    theory: /* html */`
      <h2>Vergelijkingen</h2>
      <p><strong>Doel:</strong> een lineaire vergelijking oplossen met de balansgedachte en de oplossing controleren.</p>
      <h3>1. Uitdrukking of vergelijking?</h3>
      <p><span class="formula-inline">2x + 3</span> is een uitdrukking. <span class="formula-inline">2x + 3 = 11</span> is een vergelijking. Een oplossing maakt de gelijkheid waar.</p>
      <h3>2. Balans</h3>
      <p>Wat je links doet, doe je rechts. Trek 3 af: <span class="formula-inline">2x = 8</span>. Deel door 2: <span class="formula-inline">x = 4</span>. Je brengt x niet zomaar naar de andere kant; je voert een bewerking uit op beide leden.</p>
      <div class="callout"><strong>Oplossen is niet toveren met x.</strong> Elke stap bewaart de gelijkheid. Vraag bij elke regel: waarom mag dit?</div>
      <h3>3. Omgekeerde bewerkingen</h3>
      <p>Maak x vrij in omgekeerde volgorde: eerst + en − ongedaan, daarna × en ÷ (niet door 0).</p>
      <h3>4. x aan beide kanten</h3>
      <p><span class="formula-inline">3x − 7 = 2x + 5</span> wordt na aftrekken van 2x: <span class="formula-inline">x − 7 = 5</span>, dus x = 12. Controle in het origineel: beide kanten 29.</p>
      <h3>5. Haakjes en breuken</h3>
      <p>Eerst haakjes wegwerken, of beide kanten door dezelfde factor delen. Bij een noemer beide kanten met die noemer vermenigvuldigen. Bij twee noemers met een gemeenschappelijk veelvoud.</p>
      <h3>6. Controle</h3>
      <p>Vul altijd terug in de oorspronkelijke vergelijking. Soms is er geen oplossing (x = x + 1), soms elke waarde (2(x + 1) = 2x + 2).</p>
    `
  },
  {
    id: "2.4",
    title: "Formules & algebraïsch modelleren",
    goal: "Hoe beschrijven we een probleem met een formule?",
    theory: /* html */`
      <h2>Formules & algebraïsch modelleren</h2>
      <p><strong>Doel:</strong> een situatie vertalen naar letters, invullen, omvormen en de grenzen van een model zien.</p>
      <h3>1. Van verhaal naar formule</h3>
      <p>Taxi: 4 euro instap en 2 euro per km. Met x kilometer: <span class="formula-inline">P = 4 + 2x</span>. Voor 7 km is P = 18 euro.</p>
      <h3>2. Eenheden</h3>
      <p>Elke letter heeft een eenheid. De 2 is euro per kilometer. Eenheden zijn een alarmbel: als de dimensies niet kloppen, beschrijft de formule iets anders dan je denkt.</p>
      <div class="callout"><strong>Eenheden zijn een alarmbel.</strong> Een formule moet in de eenheden kloppen.</div>
      <h3>3. Invullen en omvormen</h3>
      <p><span class="formula-inline">s = v t</span> met v = 80 km/u en t = 2,5 u geeft s = 200 km. Maak t vrij: <span class="formula-inline">t = s / v</span>. Omvormen is dezelfde algebra als in les 2.3, met een andere letter als onbekende.</p>
      <h3>4. Lineair model</h3>
      <p><span class="formula-inline">y = a x + b</span>: a is de verandering per stap, b de startwaarde. Een model geldt niet overal: geen negatieve kilometers, geen oneindige rit tegen hetzelfde tarief.</p>
      <div class="callout"><strong>Modelleerkring:</strong> situatie → letters → formule → berekenen → terugvertalen → controleren of het zinvol is.</div>
    `
  },
  {
    id: "2.5",
    title: "Ongelijkheden & intervallen",
    goal: "Hoe beschrijven we een bereik van oplossingen?",
    theory: /* html */`
      <h2>Ongelijkheden & intervallen</h2>
      <p><strong>Doel:</strong> lineaire ongelijkheden oplossen, het omslaan van het teken begrijpen, en oplossingen als interval schrijven.</p>
      <h3>1. Een bereik, geen enkel getal</h3>
      <p>x > 12 betekent alle getallen groter dan 12, niet alleen 12. ≤ en ≥ sluiten de grens in; < en > doen dat niet.</p>
      <h3>2. Bijna zoals een vergelijking</h3>
      <p><span class="formula-inline">2x + 1 ≤ 9</span> geeft x ≤ 4. Alle getallen ≤ 4 zijn oplossingen.</p>
      <h3>3. Negatieve factor</h3>
      <p>Vermenigvuldigen of delen door een negatief getal keert het teken om. Want 3 < 5, maar −3 > −5. Dus −2x > 6 wordt x < −3.</p>
      <div class="callout"><strong>Het teken keert om bij een negatieve factor.</strong> Dat is de meest gemaakte fout bij lineaire ongelijkheden.</div>
      <h3>4. Intervallen</h3>
      <p>[2, 5] sluit beide grenzen in; (2, 5) sluit ze uit. Oneindig krijgt nooit een vierkante haak: x ≥ −2 hoort bij [−2, ∞). Gevulde bol op de getallenlijn = grens telt mee; open bol = grens telt niet mee.</p>
    `
  },
  {
    id: "2.6",
    title: "Machten, wortels & algebraïsche breuken",
    goal: "Hoe breiden we de rekenregels uit naar algebra?",
    theory: /* html */`
      <h2>Machten, wortels & algebraïsche breuken</h2>
      <p><strong>Doel:</strong> machtsregels met letters, het verschil tussen hoofdwortel en x² = a, en breuken vereenvoudigen zonder termen te schrappen.</p>
      <h3>1. Machtsregels</h3>
      <p class="formula">a^m · a^n = a^{m+n}</p>
      <p class="formula">a^m / a^n = a^{m-n}</p>
      <p class="formula">(a^m)^n = a^{mn}</p>
      <p>Ook a^0 = 1 (a ≠ 0) en a^{-n} = 1/a^n. Let op: (x + y)² is niet x² + y².</p>
      <h3>2. Wortel versus vergelijking</h3>
      <p>√25 = 5 (niet-negatief). Maar x² = 25 heeft twee reële oplossingen: 5 en −5. De hoofdwortel kiest één kandidaat; de vergelijking laat beide tekens toe.</p>
      <h3>3. Wortel als exponent</h3>
      <p>√a = a^{1/2}. Daarmee blijven de machtsregels bruikbaar.</p>
      <h3>4. Algebraïsche breuken</h3>
      <p>De noemer mag nooit 0 zijn. (6x²)/(3x) = 2x mits x ≠ 0. (x² − 9)/(x − 3) = x + 3 mits x ≠ 3.</p>
      <div class="callout"><strong>Schrappen mag alleen bij factoren, nooit bij termen.</strong> (x + 2)/2 is niet x. De oorspronkelijke noemer-verboden blijven gelden.</div>
    `
  },
  {
    id: "2.7",
    title: "Kwadratische vergelijkingen",
    goal: "Wat gebeurt er wanneer x kwadraat verschijnt?",
    theory: /* html */`
      <h2>Kwadratische vergelijkingen</h2>
      <p><strong>Doel:</strong> herkennen, ontbinden, abc-formule gebruiken en het aantal reële oplossingen aan D aflezen.</p>
      <h3>1. Tweede graad</h3>
      <p class="formula">ax^{2} + bx + c = 0</p>
      <p>met a ≠ 0. Er kunnen twee oplossingen zijn omdat een product op twee manieren nul kan zijn.</p>
      <h3>2. Product nul</h3>
      <p>x² − 5x + 6 = 0 wordt (x − 2)(x − 3) = 0, dus x = 2 of x = 3. Deel nooit zomaar door x: bij 2x² + 3x = 0 is x = 0 ook een oplossing.</p>
      <h3>3. Discriminant en abc</h3>
      <p class="formula">D = b^{2} − 4ac</p>
      <p class="formula">x = (-b ± √D) / (2a)</p>
      <p>D > 0: twee reële oplossingen. D = 0: één (dubbele wortel). D < 0: geen reële oplossing. Dat zijn later de snijpunten van de parabool met de x-as.</p>
      <h3>4. Kwadraatafsplitsen</h3>
      <p>x² + 6x + 5 = (x + 3)² − 4 = 0 geeft x + 3 = ±2, dus x = −1 of x = −5. De abc-formule is dezelfde gedachte in een vaste vorm.</p>
      <div class="callout"><strong>Verbinding:</strong> een kwadratische vergelijking zoekt de nulpunten van de bijbehorende kwadratische functie.</div>
    `
  },
  {
    id: "2.8",
    title: "Coördinaten & analytische meetkunde",
    goal: "Hoe vertalen we ruimte naar getallen?",
    theory: /* html */`
      <h2>Coördinaten & analytische meetkunde</h2>
      <p><strong>Doel:</strong> punten als (x, y) plaatsen, afstand en midden berekenen, helling lezen en de vergelijking van een rechte opstellen.</p>
      <h3>1. Het vlak</h3>
      <p>Horizontale x-as, verticale y-as, oorsprong (0, 0). Eerst x, dan y. Vier kwadranten: I (+,+), II (−,+), III (−,−), IV (+,−). Punten op een as zitten in geen kwadrant.</p>
      <h3>2. Afstand</h3>
      <p>Van (1, 2) naar (4, 6) is 3 naar rechts en 4 omhoog: afstand 5. Algemeen:</p>
      <p class="formula">AB = √((x2-x1)^{2} + (y2-y1)^{2})</p>
      <p>Dat is Pythagoras op het raster. De meetkundige reden volgt in les 2.9.</p>
      <h3>3. Midden en helling</h3>
      <p>Midden: gemiddelde van de x-waarden en van de y-waarden. Helling m = (y2 − y1)/(x2 − x1). Positief = stijgend, negatief = dalend, 0 = horizontaal. Gelijke x: verticale lijn, geen gewone m.</p>
      <h3>4. Vergelijking van een rechte</h3>
      <p class="formula">y = mx + b</p>
      <p>b is het snijpunt met de y-as. Zelfde m: evenwijdig. Product van hellingen −1: loodrecht (niet-verticale gevallen).</p>
      <div class="callout"><strong>De kern:</strong> meetkunde geeft vormen, coördinaten geven getallen, algebra geeft de vergelijkingen.</div>
    `
  },
  {
    id: "2.9",
    title: "Euclidische meetkunde",
    goal: "Welke wetten beheersen vormen en hoeken?",
    theory: /* html */`
      <h2>Euclidische meetkunde</h2>
      <p><strong>Doel:</strong> basistaal van lijnen en hoeken, hoekensom, omtrek en oppervlakte, en Pythagoras.</p>
      <h3>1. Basistaal</h3>
      <p>Punt, rechte (onbegrensd), lijnstuk (twee eindpunten), straal (één beginpunt). Hoeken in graden: scherp < 90°, recht = 90°, stomp tussen 90° en 180°, gestrekt = 180°. Complementair: samen 90°. Supplementair: samen 180°.</p>
      <h3>2. Driehoeken</h3>
      <p>Binnenhoeken samen 180°. Gelijkzijdig: drie zijden gelijk, hoeken 60°. Gelijkbenig: basishoeken gelijk. Hoogstens één rechte of stompe hoek.</p>
      <h3>3. Evenwijdig en snijlijn</h3>
      <p>Overeenkomstige hoeken gelijk (F), verwisselende binnenhoeken gelijk (Z), binnenhoeken aan dezelfde kant samen 180°.</p>
      <h3>4. Omtrek en oppervlakte</h3>
      <p>Rechthoek: O = 2(l + b), A = l·b. Driehoek: A = (1/2)·basis·hoogte, hoogte loodrecht op de basis. Cirkel: O = 2πr, A = πr².</p>
      <h3>5. Pythagoras</h3>
      <p class="formula">a^{2} + b^{2} = c^{2}</p>
      <p>in een rechthoekige driehoek, c de schuine zijde. 3-4-5 is het klassieke drietal. Omgekeerd: als a² + b² = c² (c langste zijde), dan is de hoek tegenover c recht.</p>
      <div class="callout"><strong>Euclidische meetkunde</strong> bouwt nieuwe feiten op uit definities en eerdere eigenschappen. Pythagoras is een meetkundige uitspraak in algebraïsche vorm.</div>
    `
  },
  {
    id: "2.10",
    title: "Gelijkvormigheid & schaal",
    goal: "Wanneer hebben figuren dezelfde structuur?",
    theory: /* html */`
      <h2>Gelijkvormigheid & schaal</h2>
      <p><strong>Doel:</strong> congruent versus gelijkvormig, schaalfactor, en hoe oppervlakte en volume meeschalen.</p>
      <h3>1. Zelfde vorm</h3>
      <p>Congruent: zelfde vorm én afmetingen. Gelijkvormig: zelfde vorm, mogelijk andere schaal. Overeenkomstige hoeken gelijk, overeenkomstige zijden in dezelfde verhouding.</p>
      <h3>2. Schaalfactor k</h3>
      <p>Nieuwe lengte = k · oude lengte. Oppervlakte schaalt met k², volume met k³. Verdubbel alle lengtes: viermaal de oppervlakte, achtmaal het volume.</p>
      <div class="callout"><strong>Onthoud:</strong> lengte → k, oppervlakte → k², volume → k³.</div>
      <h3>3. Gelijkvormige driehoeken</h3>
      <p>Zijden tegenover gelijke hoeken zijn evenredig. Twee gelijke hoeken volstaan: de derde volgt uit 180°.</p>
      <h3>4. Kaartschaal</h3>
      <p>1 : 100 000 betekent 1 cm op de kaart is 1 km in het terrein. Eerst dezelfde eenheid kiezen, daarna de factor toepassen.</p>
    `
  },
  {
    id: "2.11",
    title: "Functies als relaties",
    goal: "Hoe beschrijven we afhankelijkheid?",
    theory: /* html */`
      <h2>Functies als relaties</h2>
      <p><strong>Doel:</strong> een functie als precies één uitvoer per toegelaten invoer, plus domein, bereik en de vier representaties.</p>
      <h3>1. Een machine</h3>
      <p>f(x) = 2x + 3. f(4) = 11. De notatie f(4) is geen vermenigvuldiging. Twee uitvoeren bij één invoer: geen functie van x.</p>
      <div class="callout"><strong>Functie:</strong> elke toegelaten invoer heeft precies één uitvoer.</div>
      <h3>2. Domein en bereik</h3>
      <p>Domein: toegelaten invoer. Bereik: uitvoer die echt voorkomt. Bij 1/x is 0 verboden. Bij √x is het domein x ≥ 0 en het bereik y ≥ 0.</p>
      <h3>3. Vier gezichten</h3>
      <p>Woorden, formule, tabel, grafiek beschrijven hetzelfde verband. De grafiek bevat alle punten, niet alleen de tabelrijen.</p>
      <h3>4. Verticale lijn</h3>
      <p>Snijdt elke verticale lijn de grafiek in hoogstens één punt, dan is het een functie van x. Een cirkel zakt voor die test.</p>
    `
  },
  {
    id: "2.12",
    title: "Lineaire & kwadratische functies",
    goal: "Hoe zien algebraïsche relaties eruit?",
    theory: /* html */`
      <h2>Lineaire & kwadratische functies</h2>
      <p><strong>Doel:</strong> rechten en parabolen koppelen aan hun voorschrift: helling, snijpunten, top, discriminant.</p>
      <h3>1. Rechte</h3>
      <p>f(x) = ax + b. a is de helling (verandering in y per stap 1 in x), b het punt (0, b). a > 0 stijgend, a < 0 dalend.</p>
      <h3>2. Nulpunt van een rechte</h3>
      <p>f(x) = 0 geeft x = −b/a als a ≠ 0. Dat is het snijpunt met de x-as.</p>
      <h3>3. Parabool</h3>
      <p>f(x) = ax² + bx + c met a ≠ 0. a > 0: dalparabool. a < 0: bergparabool. Symmetrieas x = −b/(2a). Daar ligt de top.</p>
      <h3>4. Nulpunten en D</h3>
      <p>D > 0 twee snijpunten met de x-as, D = 0 raakpunt, D < 0 geen snijpunt. Bij y = x is de toename constant; bij y = x² verandert de helling zelf.</p>
      <div class="callout"><strong>Algebra ↔ grafiek.</strong> De coëfficiënten vertellen hoe de figuur eruitziet; de figuur helpt de formule lezen.</div>
    `
  },
  {
    id: "2.13",
    title: "Exponentiële & logaritmische functies",
    goal: "Hoe beschrijven we groei en inverse groei?",
    theory: /* html */`
      <h2>Exponentiële & logaritmische functies</h2>
      <p><strong>Doel:</strong> groei met een factor herkennen, de logaritme als teruggevraagde exponent, en een eenvoudige exponentiële vergelijking omvormen.</p>
      <h3>1. Factor, geen vaste stap</h3>
      <p>f(x) = a · b^x. a is de beginwaarde, b de groeifactor. b > 1 groei, 0 < b < 1 verval. 5 bacteriën die verdubbelen: 5 · 2^x.</p>
      <h3>2. Procenten</h3>
      <p>5% groei is factor 1,05. 5% krimp is 0,95. Drie perioden groei is × 1,05³, niet + 15%.</p>
      <h3>3. Logaritme</h3>
      <p>log_b(y) = x precies als b^x = y. Dus log2(8) = 3. Exponentiëren en logaritmeren zijn elkaars omgekeerde.</p>
      <div class="callout"><strong>Kernidee:</strong> exponentiëren maakt van een exponent een waarde; logaritmeren haalt de exponent terug.</div>
      <h3>4. Regels</h3>
      <p>log(xy) = log x + log y, log(x/y) = log x − log y, log(x^r) = r log x. Daarmee zakt een onbekende exponent naar beneden: 2^x = 10 geeft x = log2(10) = ln(10)/ln(2).</p>
      <p>ln is de logaritme met basis e ≈ 2,718. In deze fase is het genoeg te weten dat dezelfde regels gelden. e zelf wordt belangrijk in Fase 3.</p>
    `
  },
  {
    id: "2.14",
    title: "Trigonometrie",
    goal: "Hoe verbinden we hoeken, lengtes en periodieke beweging?",
    theory: /* html */`
      <h2>Trigonometrie</h2>
      <p><strong>Doel:</strong> sinus, cosinus en tangens als verhoudingen in een rechthoekige driehoek, en de stap naar de eenheidscirkel.</p>
      <h3>1. Drie zijden vanuit één hoek</h3>
      <p>Kies een scherpe hoek θ. Schuine zijde: tegenover de rechte hoek. Overstaande: tegenover θ. Aanliggende: naast θ, niet de schuine. Wissel van hoek, dan wisselen overstaand en aanliggend.</p>
      <h3>2. Drie verhoudingen</h3>
      <p class="formula">sin θ = overstaande / schuine</p>
      <p class="formula">cos θ = aanliggende / schuine</p>
      <p class="formula">tan θ = overstaande / aanliggende</p>
      <p>In 3-4-5: sin = 3/5, cos = 4/5, tan = 3/4. Gelijkvormige driehoeken geven dezelfde verhouding. SOH-CAH-TOA helpt onthouden; de definities zijn de verhoudingen zelf.</p>
      <div class="callout"><strong>Sinus, cosinus en tangens zijn geen zijden.</strong> Het zijn verhoudingen die bij een hoek horen.</div>
      <h3>3. Zijde of hoek zoeken</h3>
      <p>sin 30° = 1/2 en schuine zijde 10 geeft overstaande 5. Inverse: θ = sin^{-1}(verhouding). Dat is de inverse functie, niet 1/sin.</p>
      <h3>4. Graden, radialen, eenheidscirkel</h3>
      <p>360° = 2π radialen, 180° = π. Op de eenheidscirkel is het punt (cos θ, sin θ). Daardoor werken sinus en cosinus voor alle hoeken en zijn ze periodiek: +360° of +2π verandert de waarde niet.</p>
      <p class="formula">sin^{2} θ + cos^{2} θ = 1</p>
      <p>Dat is Pythagoras op de eenheidscirkel. Algebra, meetkunde en functies komen hier samen.</p>
    `
  }
]
