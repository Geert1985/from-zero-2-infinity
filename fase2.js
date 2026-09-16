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
      <p><strong>Doel:</strong></p>
      <ul>
        <li>gelijksoortige termen herkennen en samennemen</li>
        <li>termen vermenigvuldigen: coëfficiënten vermenigvuldigen, exponenten optellen</li>
        <li>haakjes wegwerken met distributiviteit, ook bij een minteken</li>
        <li>twee tweetermen vermenigvuldigen</li>
        <li>merkwaardige producten herkennen</li>
        <li>een gemeenschappelijke factor of een verschil van kwadraten ontbinden</li>
      </ul>
      <p>In les 2.1 leerden we letters lezen. Nu rekenen we ermee. De rekenwetten uit Fase 1 blijven gelden; we herkennen ze terug in termen en haakjes.</p>

      <h3>1. Optellen en aftrekken: alleen gelijksoortige termen</h3>
      <p>Drie appels en twee appels geven vijf appels. Drie stoelen en twee appels kun je niet tot één soort optellen.</p>
      <p>In algebra is <span class="formula-inline">x</span> zo’n soort. Daarom:</p>
      <p class="formula">3x + 2x = 5x</p>
      <p>We tellen de <strong>coëfficiënten</strong> op. De letter blijft staan:</p>
      <p class="formula">3x + 2x = (3 + 2)x = 5x</p>
      <p>Aftrekken werkt hetzelfde:</p>
      <p class="formula">7x − 3x = 4x</p>
      <p>Constanten zijn onderling ook gelijksoortig:</p>
      <p class="formula">8 + 5 − 3 = 10</p>
      <p>Een gemengde uitdrukking vereenvoudig je door eerst te groeperen:</p>
      <p class="formula">3x + 7 + 2x − 4 = (3x + 2x) + (7 − 4) = 5x + 3</p>
      <div class="callout">
        <p><strong>Gelijksoortige termen gedragen zich als dezelfde eenheid.</strong></p>
        <p>Je mag 3x en 2x samenvoegen, maar 3x en 2y niet. Ook 3x en 3 zijn niet gelijksoortig.</p>
      </div>

      <h3>2. Wanneer zijn termen gelijksoortig?</h3>
      <p>Termen zijn gelijksoortig als ze <strong>dezelfde letters met dezelfde exponenten</strong> hebben. De coëfficiënt mag verschillen, het teken ook.</p>
      <p>Gelijksoortig:</p>
      <p class="formula">3x, −5x, 12x</p>
      <p>Ook gelijksoortig:</p>
      <p class="formula">2xy, −7xy, 4xy</p>
      <p>Niet gelijksoortig:</p>
      <p class="formula">3x, 3x^{2}, 3y</p>
      <p><span class="formula-inline">2xy</span> en <span class="formula-inline">2x^{2}y</span> zijn dat evenmin: de macht van x verschilt.</p>
      <p>Daarom:</p>
      <p class="formula">4x^{2} + 3x − 2x^{2} + 5x = 2x^{2} + 8x</p>
      <p>We combineren <span class="formula-inline">4x^{2}</span> met <span class="formula-inline">−2x^{2}</span>, en <span class="formula-inline">3x</span> met <span class="formula-inline">5x</span>. Vier termen tot één term maken mag niet.</p>

      <h3>3. Termen vermenigvuldigen</h3>
      <p>Een enkele term, zoals <span class="formula-inline">3x</span> of <span class="formula-inline">−2x^{2}</span>, heet een <strong>monoom</strong>. Bij het vermenigvuldigen van monomen gebeuren twee dingen tegelijk:</p>
      <ul>
        <li>de coëfficiënten worden vermenigvuldigd;</li>
        <li>gelijke letters krijgen hun exponenten opgeteld.</li>
      </ul>
      <p class="formula">2x · 3x = (2 · 3) · (x · x) = 6x^{2}</p>
      <p>Verschillende letters blijven naast elkaar staan:</p>
      <p class="formula">3a · 4b = 12ab</p>
      <p>Met hogere machten:</p>
      <p class="formula">2x^{2} · 3x^{3} = 6x^{5}</p>
      <p>Want <span class="formula-inline">x^{2} · x^{3} = x^{2+3} = x^{5}</span>.</p>
      <div class="callout">
        <p><strong>Klassieke fout:</strong> <span class="formula-inline">2x · 3x</span> is niet <span class="formula-inline">6x</span>.</p>
        <p>De letters worden ook vermenigvuldigd. Twee factoren x geven x².</p>
      </div>

      <h3>4. Distributiviteit: een factor voor een haakje</h3>
      <p>Uit Fase 1:</p>
      <p class="formula">3(4 + 5) = 3 · 4 + 3 · 5</p>
      <p>De factor buiten het haakje gaat naar <strong>elke term</strong> erin. Met letters is de wet hetzelfde:</p>
      <p class="formula">a(b + c) = ab + ac</p>
      <p>Voorbeelden:</p>
      <p class="formula">3(x + 4) = 3x + 12</p>
      <p class="formula">5(2x − 3) = 10x − 15</p>
      <p>Ook een letter mag buiten het haakje staan:</p>
      <p class="formula">2x(x + 3) = 2x · x + 2x · 3 = 2x^{2} + 6x</p>
      <div class="callout">
        <p><strong>Veelgemaakte fout:</strong> <span class="formula-inline">3(x + 4)</span> is niet <span class="formula-inline">3x + 4</span>.</p>
        <p>De 3 moet ook de 4 raken.</p>
      </div>

      <h3>5. Een minteken vóór een haakje</h3>
      <p>Een min vóór een haakje is vermenigvuldigen met −1:</p>
      <p class="formula">−(x + 4) = −1 · (x + 4) = −x − 4</p>
      <p>Elke term in het haakje wisselt van teken, niet alleen de eerste:</p>
      <p class="formula">−(x − 5) = −x + 5</p>
      <p>In een langere uitdrukking:</p>
      <p class="formula">7 − (2x − 3) = 7 − 2x + 3 = 10 − 2x</p>
      <p>De −3 in het haakje wordt +3, omdat min keer min plus is.</p>
      <div class="callout">
        <p><strong>Onthoud:</strong> een min voor een haakje keert elk teken om.</p>
        <p>Het is niet genoeg om alleen de eerste term aan te passen.</p>
      </div>

      <h3>6. Twee haakjes vermenigvuldigen</h3>
      <p>Bij twee haakjes vermenigvuldigt <strong>elke term van het eerste</strong> met <strong>elke term van het tweede</strong>. Dat is twee keer distributiviteit.</p>
      <p class="formula">(x + 2)(x + 3)</p>
      <p>Eerst de x naar het tweede haakje, daarna de 2:</p>
      <p class="formula">x(x + 3) + 2(x + 3) = x^{2} + 3x + 2x + 6</p>
      <p>Gelijksoortige termen:</p>
      <p class="formula">= x^{2} + 5x + 6</p>
      <p>Met een minteken in een haakje verandert de methode niet:</p>
      <p class="formula">(x − 2)(x + 3) = x^{2} + 3x − 2x − 6 = x^{2} + x − 6</p>
      <p>Ook als er coëfficiënten staan:</p>
      <p class="formula">(2x + 1)(x + 3) = 2x · x + 2x · 3 + 1 · x + 1 · 3 = 2x^{2} + 6x + x + 3 = 2x^{2} + 7x + 3</p>
      <p>Schrijf de vier tussenproducten op. Dan verdwijnt er geen kruisterm.</p>

      <h3>7. Merkwaardige producten</h3>
      <p>Sommige producten komen zo vaak terug dat we de uitwerking herkennen. Ze volgen uit dezelfde distributiviteit.</p>
      <p>Kwadraat van een som:</p>
      <p class="formula">(a + b)^{2} = (a + b)(a + b) = a^{2} + 2ab + b^{2}</p>
      <p>Kwadraat van een verschil:</p>
      <p class="formula">(a − b)^{2} = a^{2} − 2ab + b^{2}</p>
      <p>Verschil van twee kwadraten:</p>
      <p class="formula">(a + b)(a − b) = a^{2} − b^{2}</p>
      
      <h4>Visuele voorstelling van het kwadraad van een som</h4>
      <p>Een vierkant met zijde a + b valt in vier stukken.</p> 
      <p>Die stukken zijn de vier producten die je ook krijgt als je (a + b)(a + b) uitschrijft.</p>
      <div class="theory-image">
        <img
          src="assets/kwadraat-som.svg"
          alt="Een vierkant met zijde a + b, verdeeld in a², twee rechthoeken ab en een vierkant b². Samen: a² + 2ab + b²."
        >
      </div>
      
      <p>Concreet:</p>
      <p class="formula">(x + 3)^{2} = x^{2} + 6x + 9</p>
      <p class="formula">(x − 4)^{2} = x^{2} − 8x + 16</p>
      <p class="formula">(x + 5)(x − 5) = x^{2} − 25</p>
      <div class="callout">
        <p><strong>Klassieke fout:</strong> <span class="formula-inline">(x + 3)^{2}</span> is niet <span class="formula-inline">x^{2} + 9</span>.</p>
        <p>De middelste term 6x ontstaat doordat beide kruisproducten meetellen: 3x + 3x.</p>
      </div>

      <h3>8. Ontbinden: distributiviteit achteruit</h3>
      <p>Uitwerken gaat van product naar som. <strong>Ontbinden</strong> (factoriseren) gaat de andere kant op: we maken van een som weer een product.</p>
      <p>Eerst een gemeenschappelijke factor:</p>
      <p class="formula">6x + 9 = 3 · 2x + 3 · 3 = 3(2x + 3)</p>
      <p class="formula">x^{2} + 5x = x · x + x · 5 = x(x + 5)</p>
      <p>Zoek wat alle termen delen, en haal dat buiten het haakje.</p>
      <p>Een vast patroon is het verschil van twee kwadraten:</p>
      <p class="formula">a^{2} − b^{2} = (a + b)(a − b)</p>
      <p>Dus:</p>
      <p class="formula">x^{2} − 9 = x^{2} − 3^{2} = (x + 3)(x − 3)</p>
      <p class="formula">x^{2} − 16 = (x + 4)(x − 4)</p>
      <p>Kwadratische sommen zoals <span class="formula-inline">x^{2} + 5x + 6</span> ontbinden we later, bij de kwadratische vergelijking. Nu is het genoeg de gemeenschappelijke factor en dit verschil te herkennen.</p>

      <h3>9. Twee richtingen van dezelfde structuur</h3>
      <p>Uitwerken en ontbinden zijn elkaars omgekeerde:</p>
      <p class="formula">3(x + 4) = 3x + 12</p>
      <p class="formula">3x + 12 = 3(x + 4)</p>
      <p>En bij een merkwaardig product:</p>
      <p class="formula">(x + 2)^{2} = x^{2} + 4x + 4</p>
      <p class="formula">x^{2} + 4x + 4 = (x + 2)^{2}</p>
      <div class="callout">
        <p><strong>De bewerkingen zijn twee richtingen van dezelfde structuur.</strong></p>
        <p>Uitwerken maakt een som zichtbaar. Ontbinden maakt een verborgen product zichtbaar.</p>
      </div>

      <h3>10. Werkwijze en rekenvolgorde</h3>
      <p>Letters veranderen de rekenvolgorde niet: eerst haakjes, dan machten, dan vermenigvuldigen en delen, dan optellen en aftrekken.</p>
      <p class="formula">2x + 3 · 4 = 2x + 12</p>
      <p>En <span class="formula-inline">2(x + 3)^{2}</span> betekent eerst het kwadraat van het haakje, daarna vermenigvuldigen met 2.</p>
      <p>Bij een langere uitdrukking helpt een vaste volgorde:</p>
      <ol>
        <li>haakjes wegwerken, inclusief mintekens;</li>
        <li>producten en machten uitwerken;</li>
        <li>gelijksoortige termen verzamelen;</li>
        <li>controleren door een getal voor x in te vullen.</li>
      </ol>
      <p>Voorbeeld:</p>
      <p class="formula">2(x + 3) − (x − 4)</p>
      <p class="formula">= 2x + 6 − x + 4</p>
      <p class="formula">= x + 10</p>
      <p>Controle met x = 1: links 2(4) − (1 − 4) = 8 − (−3) = 11, rechts 1 + 10 = 11.</p>
      <div class="callout">
        <p><strong>Kernidee:</strong></p>
        <p>De rekenwetten uit Fase 1 blijven geldig als getallen door letters worden vervangen.</p>
        <p>Gelijksoortige termen mogen samen, distributiviteit werkt vooruit en achteruit, en een product kun je uitwerken of ontbinden.</p>
      </div>
    `
  },  
  {
        id: "2.3",
    title: "Vergelijkingen",
    goal: "Hoe vinden we een onbekende?",
    theory: /* html */`
      <h2>Vergelijkingen</h2>
      <p><strong>Doel:</strong></p>
      <ul>
        <li>het verschil kennen tussen een uitdrukking en een vergelijking</li>
        <li>een oplossing herkennen als een waarde die de gelijkheid waar maakt</li>
        <li>dezelfde bewerking op beide leden uitvoeren (balans)</li>
        <li>een lineaire vergelijking stap voor stap oplossen, ook met haakjes of x aan beide kanten</li>
        <li>de gevonden waarde controleren in de oorspronkelijke vergelijking</li>
        <li>herkennen wanneer er geen oplossing is, of juist elke waarde past</li>
      </ul>
      <p>In les 2.1 werd een letter een getal. In les 2.2 rekenden we met letters. Nu zoeken we welke waarde de onbekende moet hebben.</p>

      <h3>1. Uitdrukking of vergelijking?</h3>
      <p><span class="formula-inline">2x + 3</span> is een uitdrukking. Je kunt x invullen, maar er staat geen eis.</p>
      <p class="formula">x = 4 → 2 · 4 + 3 = 11</p>
      <p>Zet je twee uitdrukkingen gelijk, dan ontstaat een <strong>vergelijking</strong>:</p>
      <p class="formula">2x + 3 = 11</p>
      <p>Het gelijkheidsteken zegt: links en rechts hebben <strong>dezelfde waarde</strong>. Een <strong>oplossing</strong> is een waarde van x die die uitspraak waar maakt. Hier is dat x = 4. Voor x = 5 geldt 2 · 5 + 3 = 13, dus 5 is geen oplossing.</p>
      <div class="callout">
        <p><strong>Een vergelijking is een uitspraak van gelijkheid.</strong></p>
        <p>Oplossen is zoeken welke waarden die uitspraak waar maken — niet “een getal raden”.</p>
      </div>

      <h3>2. De vergelijking als balans</h3>
      <p>Zolang links even zwaar is als rechts, blijft de weegschaal in evenwicht. Verander je één kant, dan moet de andere kant dezelfde verandering krijgen.</p>
      <p class="formula">2x + 3 = 11</p>
      <p>Trek aan beide kanten 3 af:</p>
      <p class="formula">2x + 3 − 3 = 11 − 3</p>
      <p class="formula">2x = 8</p>
      <p>Deel beide kanten door 2:</p>
      <p class="formula">x = 4</p>
      <p>Als twee getallen gelijk zijn:</p>
      <p class="formula">a = b</p>
      <p>dan blijven ze gelijk als je links en rechts hetzelfde doet.</p>
      <p>Optellen:</p>
      <p class="formula">a + c = b + c</p>
      <p>Aftrekken:</p>
      <p class="formula">a − c = b − c</p>
      <p>Vermenigvuldigen:</p>
      <p class="formula">a · c = b · c</p>
      <p>Delen, zolang c niet nul is:</p>
      <p class="formula">a / c = b / c</p>
      <p>Dat zijn eigenschappen van gelijkheid, geen trucs voor x.</p>
      <div class="callout">
        <p><strong>Balansregel:</strong> wat je bij het ene lid doet, doe je bij het andere.</p>
        <p>Elke toegestane stap verandert de vorm, niet de oplossingen.</p>
      </div>

      <h3>3. Omgekeerde bewerkingen</h3>
      <p>Maak de laatste bewerking op x ongedaan, aan beide kanten.</p>
      <ul>
        <li>+ a ongedaan maken: − a</li>
        <li>− a ongedaan maken: + a</li>
        <li>· a ongedaan maken: delen door a (a ≠ 0)</li>
        <li>/ a ongedaan maken: vermenigvuldigen met a</li>
      </ul>
      <p class="formula">x + 8 = 15 → x = 7</p>
      <p class="formula">x − 6 = 10 → x = 16</p>
      <p class="formula">3x = 21 → x = 7</p>
      <p class="formula">x / 5 = 4 → x = 20</p>
      <p>Bij meerdere bewerkingen werk je ze <strong>in omgekeerde volgorde</strong> terug: eerst + en −, daarna × en ÷.</p>
      <p class="formula">3x + 5 = 20</p>
      <p class="formula">3x = 15</p>
      <p class="formula">x = 5</p>
      <p>Schrijf de tussenstappen. Dan blijft zichtbaar waarom de nieuwe vergelijking equivalent is aan de vorige.</p>

      <h3>4. Gelijksoortige termen en x aan beide kanten</h3>
      <p>Eerst de algebra uit les 2.2, daarna de onbekende vrijmaken.</p>
      <p class="formula">5x + 3x − 4 = 28</p>
      <p class="formula">8x − 4 = 28</p>
      <p class="formula">8x = 32</p>
      <p class="formula">x = 4</p>
      <p>Staat x links én rechts:</p>
      <p class="formula">3x − 7 = 2x + 5</p>
      <p>Trek 2x af aan beide kanten:</p>
      <p class="formula">x − 7 = 5</p>
      <p class="formula">x = 12</p>
      <p>We hebben 2x niet “naar de andere kant gebracht”. We hebben <strong>aan beide kanten 2x afgetrokken</strong>. Die verkorte taal is alleen een bijnaam voor dezelfde stap.</p>
      <div class="callout">
        <p><strong>Precies:</strong> een term wisselt niet van teken omdat hij verhuist.</p>
        <p>Er gebeurt een bewerking op beide leden.</p>
      </div>

      <h3>5. Haakjes, ook met een min</h3>
      <p>Eerst uitwerken, dan oplossen.</p>
      <p class="formula">3(x + 2) = 15</p>
      <p class="formula">3x + 6 = 15</p>
      <p class="formula">3x = 9</p>
      <p class="formula">x = 3</p>
      <p>Aan beide kanten een x-term:</p>
      <p class="formula">2(x + 3) = x + 9</p>
      <p class="formula">2x + 6 = x + 9</p>
      <p class="formula">x + 6 = 9</p>
      <p class="formula">x = 3</p>
      <p>Min voor een haakje keert elk teken om:</p>
      <p class="formula">7 − (x − 3) = 10</p>
      <p class="formula">7 − x + 3 = 10</p>
      <p class="formula">10 − x = 10</p>
      <p class="formula">−x = 0</p>
      <p class="formula">x = 0</p>
      <p>Alleen het eerste teken in het haakje aanpassen is de klassieke fout.</p>

      <h3>6. Breuken wegwerken</h3>
      <p>Vermenigvuldig beide leden met dezelfde noemer (niet nul).</p>
      <p class="formula">x / 3 = 5</p>
      <p class="formula">x = 15</p>
      <p class="formula">x / 2 + 3 = 7</p>
      <p class="formula">x / 2 = 4</p>
      <p class="formula">x = 8</p>
      <p>Bij twee noemers: vermenigvuldig met een gemeenschappelijk veelvoud, zodat de breuken verdwijnen. Daarna is het weer een gewone lineaire vergelijking.</p>

      <h3>7. Controleren in het origineel</h3>
      <p>Een gevonden x telt pas als de <strong>oorspronkelijke</strong> vergelijking klopt, niet alleen de laatste tussenstap.</p>
      <p class="formula">3x + 5 = 17,gevonden\\ voor\\ x = 4</p>
      <p>De gevonden waarde voor x gaan we invullen in de vergelijking:</p>
      <p class="formula">3 · 4 + 5 = 12 + 5 = 17</p>
      <p>Links en rechts gelijk: de oplossing klopt.</p>
      <div class="callout">
        <p><strong>Controleren is terugrekenen.</strong></p>
        <p>Vul de waarde in en kijk of beide leden dezelfde waarde hebben.</p>
      </div>

      <h3>8. Geen oplossing, of elke waarde</h3>
      <p class="formula">x + 3 = x + 7</p>
      <p>Trek x af: 3 = 7. Dat is onmogelijk. <strong>Geen oplossing.</strong></p>
      <p class="formula">2(x + 1) = 2x + 2</p>
      <p>Uitwerken: 2x + 2 = 2x + 2, dus 2 = 2. Altijd waar. <strong>Elke waarde van x</strong> is een oplossing.</p>
      <div class="callout">
        <p><strong>Drie uitkomsten bij een lineaire vergelijking:</strong></p>
        <ul>
          <li>één waarde, bijvoorbeeld x = 4;</li>
          <li>geen oplossing (je eindigt op 3 = 7);</li>
          <li>oneindig veel oplossingen (je eindigt op 2 = 2).</li>
        </ul>
      </div>

      <h3>9. Vaste volgorde</h3>
      <ol>
        <li>haakjes wegwerken;</li>
        <li>breuken wegwerken als dat helpt;</li>
        <li>gelijksoortige termen samennemen;</li>
        <li>alle x-termen naar één lid;</li>
        <li>constanten naar het andere lid;</li>
        <li>delen zodat de factor van x gelijk wordt aan 1;</li>
        <li>controleren in het origineel.</li>
      </ol>
      <p class="formula">2(x + 4) − 3 = x + 8</p>
      <p class="formula">2x + 8 − 3 = x + 8</p>
      <p class="formula">2x + 5 = x + 8</p>
      <p class="formula">x + 5 = 8</p>
      <p class="formula">x = 3</p>
      <p>Controle: 2(3 + 4) − 3 = 14 − 3 = 11 en 3 + 8 = 11.</p>

      <h3>10. Een situatie als vergelijking</h3>
      <p>Een schrift kost x euro. Een boek kost 6 euro meer. Samen 26 euro:</p>
      <p class="formula">x + (x + 6) = 26</p>
      <p class="formula">2x + 6 = 26</p>
      <p class="formula">x = 10</p>
      <p>Dus we hebben gevonden dat een schrift 10 euro kost en een boek 16 euro</p> 
      <p>In les 2.4 maken we hier een vaste modelleerstap van.</p> 
      <p>Voor deze les is het genoeg om: eerst de onbekende benoemen, dan de gelijkheid opschrijven, dan oplossen.</p>
      <div class="callout">
        <p><strong>Kernidee:</strong></p>
        <p>Een vergelijking is een balans. Oplossen is die balans bewaren terwijl je x vrijmaakt.</p>
        <p>Toegestane stappen veranderen de vorm, niet de oplossingen. Daarna controle in het origineel.</p>
      </div>
    `
  },
    {
    id: "2.4",
    title: "Formules & algebraïsch modelleren",
    goal: "Hoe beschrijven we een probleem met een formule?",
    theory: /* html */`
      <h2>Formules & algebraïsch modelleren</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>een concrete situatie vertalen naar wiskundige symbolen</li>
        <li>variabelen en constanten uit een probleem herkennen</li>
        <li>een formule opstellen vanuit een beschrijving</li>
        <li>een formule gebruiken door waarden in te vullen</li>
        <li>een formule omvormen zodat een andere grootheid berekend kan worden</li>
        <li>eenheden gebruiken om een formule te controleren</li>
        <li>onderscheiden tussen een wiskundig model en de werkelijkheid die het model beschrijft</li>
        <li>controleren of een verkregen antwoord betekenisvol is in de context</li>
      </ul>

      <p>
        In de vorige lessen gebruikten we algebra vooral om met symbolen te rekenen
        en onbekenden te vinden. Nu draaien we het proces om:
        we vertrekken vanuit een <strong>situatie uit de werkelijkheid</strong>
        en proberen die met algebra te beschrijven.
      </p>

      <p>
        Dat noemen we <strong>algebraïsch modelleren</strong>.
        Een formule wordt zo een hulpmiddel om een hele reeks situaties
        met dezelfde structuur te beschrijven.
      </p>


      <h3>1. Van een verhaal naar wiskunde</h3>

      <p>
        Stel dat een taxi een vast startbedrag van 4 euro vraagt en daarna
        2 euro per kilometer.
      </p>

      <p>
        Voor één kilometer betaal je:
      </p>

      <p class="formula">4 + 2 = 6</p>

      <p>
        Voor vijf kilometer:
      </p>

      <p class="formula">4 + 2 · 5 = 14</p>

      <p>
        Voor twintig kilometer:
      </p>

      <p class="formula">4 + 2 · 20 = 44</p>

      <p>
        We kunnen telkens opnieuw rekenen, maar er zit een duidelijk patroon in.
        De afstand verandert, terwijl het startbedrag en de prijs per kilometer
        hetzelfde blijven.
      </p>

      <p>
        Noem de afstand <strong>x</strong> kilometer en de totale prijs
        <strong>P</strong> euro. Dan kunnen we alle situaties tegelijk beschrijven:
      </p>

      <p class="formula">P = 4 + 2x</p>

      <p>
        Dit is een <strong>formule</strong>.
        Eén formule vervangt nu een hele reeks afzonderlijke berekeningen.
      </p>

      <div class="callout">
        <p><strong>Algebra maakt een patroon algemeen.</strong></p>
        <p>
          In plaats van voor elke situatie opnieuw te rekenen,
          beschrijven we de structuur één keer met letters en getallen.
        </p>
      </div>


      <h3>2. Wat betekenen de letters?</h3>

      <p>
        Een formule heeft pas betekenis als we weten wat de symbolen voorstellen.
      </p>

      <p class="formula">P = 4 + 2x</p>

      <ul>
        <li><strong>P</strong> = de totale prijs in euro;</li>
        <li><strong>x</strong> = de afgelegde afstand in kilometer;</li>
        <li><strong>4</strong> = het vaste startbedrag in euro;</li>
        <li><strong>2</strong> = de prijs per kilometer in euro per kilometer.</li>
      </ul>

      <p>
        De letters zijn dus geen willekeurige versiering.
        Ze vertegenwoordigen concrete grootheden uit de situatie.
      </p>

      <p>
        De getallen in een formule kunnen verschillende rollen hebben.
        Sommige zijn vaste waarden, andere geven aan hoeveel er per eenheid
        bijkomt of afgaat.
      </p>

      <div class="callout">
        <p><strong>Lees een formule altijd in woorden.</strong></p>
        <p>
          <span class="formula-inline">P = 4 + 2x</span> betekent:
          "de prijs is 4 euro plus 2 euro voor elke kilometer."
        </p>
      </div>


      <h3>3. Variabele, constante en parameter</h3>

      <p>
        In een model is het nuttig om onderscheid te maken tussen waarden
        die kunnen veranderen en waarden die binnen het model vastliggen.
      </p>

      <p>
        In:
      </p>

      <p class="formula">P = 4 + 2x</p>

      <p>
        kan x verschillende waarden aannemen.
        De waarden 4 en 2 blijven in dit model constant.
      </p>

      <p>
        We noemen x daarom een <strong>variabele</strong>.
        De getallen 4 en 2 zijn <strong>constanten</strong> binnen dit model.
      </p>

      <p>
        Soms gebruiken we ook letters voor zulke vaste waarden.
        Bijvoorbeeld:
      </p>

      <p class="formula">P = b + px</p>

      <p>
        Hier kunnen <span class="formula-inline">b</span> en
        <span class="formula-inline">p</span> vaste waarden voorstellen,
        terwijl x de variabele is.
      </p>

      <p>
        Zo kunnen we dezelfde structuur gebruiken voor verschillende situaties.
        Bij een andere taxi kunnen bijvoorbeeld een ander startbedrag en
        een andere kilometerprijs horen.
      </p>


      <h3>4. Een formule opstellen uit woorden</h3>

      <p>
        De moeilijkste stap bij modelleren is vaak niet het rekenen,
        maar het <strong>vertalen van woorden naar algebra</strong>.
      </p>

      <p>
        Een sportclub vraagt 25 euro lidgeld en daarnaast 8 euro per maand.
        Noem het aantal maanden x en de totale kost K.
      </p>

      <p>
        Het vaste deel is:
      </p>

      <p class="formula">25</p>

      <p>
        Het variabele deel is 8 euro per maand gedurende x maanden:
      </p>

      <p class="formula">8x</p>

      <p>
        De totale kost is dus:
      </p>

      <p class="formula">K = 25 + 8x</p>

      <p>
        Controleer altijd of de formule overeenkomt met het verhaal.
        Bij nul maanden moet je bijvoorbeeld alleen het vaste lidgeld betalen:
      </p>

      <p class="formula">K = 25 + 8 · 0 = 25</p>

      <p>
        Dat klopt met de situatie.
      </p>

      <div class="callout">
        <p><strong>Vertaal eerst de structuur, reken daarna.</strong></p>
        <p>
          Zoek in een verhaal eerst naar:
          <strong>vast deel + veranderlijk deel</strong>,
          wanneer die structuur aanwezig is.
        </p>
      </div>


      <h3>5. Invullen in een formule</h3>

      <p>
        Zodra een formule is opgesteld, kunnen we concrete waarden invullen.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">K = 25 + 8x</p>

      <p>
        Stel dat iemand 6 maanden lid is.
        Dan is:
      </p>

      <p class="formula">x = 6</p>

      <p>
        Vervang x door 6:
      </p>

      <p class="formula">K = 25 + 8 · 6</p>

      <p class="formula">K = 25 + 48</p>

      <p class="formula">K = 73</p>

      <p>
        De totale kost is dus 73 euro.
      </p>

      <p>
        Dit is precies dezelfde techniek die we in les 2.1 leerden:
        een waarde voor een variabele invullen in een algebraïsche uitdrukking.
        Het verschil is dat de formule nu een concrete situatie beschrijft.
      </p>


      <h3>6. Eenheden horen bij de formule</h3>

      <p>
        Getallen in een formule hebben vaak een eenheid.
        Die eenheden kunnen ons helpen om te controleren of een formule logisch is.
      </p>

      <p>
        In:
      </p>

      <p class="formula">P = 4 + 2x</p>

      <p>
        is P uitgedrukt in euro en x in kilometer.
        De 4 heeft dus eenheid euro.
        De 2 heeft eenheid euro per kilometer.
      </p>

      <p>
        Als we 2 euro per kilometer vermenigvuldigen met x kilometer,
        verdwijnen de kilometers:
      </p>

      <p class="formula">2 euro/km · x km = 2x euro</p>

      <p>
        Zowel het vaste deel als het variabele deel zijn dus bedragen in euro.
        Ze kunnen daarom worden opgeteld.
      </p>

      <div class="callout">
        <p><strong>Eenheden zijn een alarmbel.</strong></p>
        <p>
          Als twee grootheden bij een optelling niet dezelfde eenheid hebben,
          klopt er waarschijnlijk iets niet aan de formule.
        </p>
      </div>


      <h3>7. Een formule gebruiken om een onbekende te vinden</h3>

      <p>
        Een formule kan ook gebruikt worden om een andere grootheid te bepalen.
      </p>

      <p>
        Neem de bekende relatie:
      </p>

      <p class="formula">s = v · t</p>

      <p>
        Hierin staat:
      </p>

      <ul>
        <li><strong>s</strong> = afstand;</li>
        <li><strong>v</strong> = snelheid;</li>
        <li><strong>t</strong> = tijd.</li>
      </ul>

      <p>
        Als een trein 80 km/u rijdt gedurende 2,5 uur:
      </p>

      <p class="formula">s = 80 · 2,5 = 200</p>

      <p>
        De afstand is dus 200 km.
      </p>

      <p>
        Maar soms kennen we de afstand en de snelheid en willen we de tijd weten.
        Dan moeten we de formule omvormen.
      </p>


      <h3>8. Een formule omvormen</h3>

      <p>
        In les 2.3 leerden we een onbekende vrijmaken in een vergelijking.
        Precies dezelfde gedachte gebruiken we hier.
      </p>

      <p>
        We beginnen met:
      </p>

      <p class="formula">s = v · t</p>

      <p>
        We willen t alleen krijgen.
        Omdat t met v wordt vermenigvuldigd, delen we beide leden door v:
      </p>

      <p class="formula">s / v = v · t / v</p>

      <p class="formula">t = s / v</p>

      <p>
        De oorspronkelijke formule en de omgevormde formule beschrijven
        dezelfde relatie:
      </p>

      <p class="formula">s = v · t</p>

      <p class="formula">t = s / v</p>

      <p>
        Als s = 200 km en v = 80 km/u:
      </p>

      <p class="formula">t = 200 / 80 = 2,5</p>

      <p>
        De tijd is dus 2,5 uur.
      </p>

      <div class="callout">
        <p><strong>Een formule omvormen is algebra.</strong></p>
        <p>
          Je gebruikt dezelfde balansregels als bij vergelijkingen:
          wat je met het ene lid doet, doe je ook met het andere.
        </p>
      </div>


      <h3>9. Verschillende vormen van dezelfde formule</h3>

      <p>
        Eén relatie kan vaak op verschillende manieren worden geschreven,
        afhankelijk van wat je wilt berekenen.
      </p>

      <p>
        Uit:
      </p>

      <p class="formula">s = v · t</p>

      <p>
        volgen:
      </p>

      <p class="formula">v = s / t</p>

      <p class="formula">t = s / v</p>

      <p>
        Deze drie formules zijn geen drie verschillende natuurwetten.
        Ze zijn drie algebraïsche vormen van dezelfde relatie.
      </p>

      <p>
        Welke vorm het handigst is, hangt af van welke grootheid onbekend is.
      </p>

      <p>
        Ken je snelheid en tijd, dan gebruik je:
      </p>

      <p class="formula">s = v · t</p>

      <p>
        Ken je afstand en tijd, dan gebruik je:
      </p>

      <p class="formula">v = s / t</p>

      <p>
        Ken je afstand en snelheid, dan gebruik je:
      </p>

      <p class="formula">t = s / v</p>


      <h3>10. Controle met eenheden</h3>

      <p>
        De eenheden kunnen ook controleren of de omgevormde formule klopt.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">s = v · t</p>

      <p>
        geldt bijvoorbeeld:
      </p>

      <p class="formula">km = (km/u) · u</p>

      <p>
        De eenheid uur valt weg en er blijft kilometer over.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">v = s / t</p>

      <p>
        krijgen we:
      </p>

      <p class="formula">km / u = km/u</p>

      <p>
        Ook dat klopt.
      </p>

      <p>
        Als je bij een berekening bijvoorbeeld een snelheid in kilometer per uur
        verwacht maar eindigt met kilometer, weet je dat er ergens een probleem
        zit.
      </p>


      <h3>11. Een formule kan verschillende grootheden verbinden</h3>

      <p>
        Formules beschrijven vaak een verband tussen meerdere grootheden.
      </p>

      <p>
        De oppervlakte van een rechthoek is:
      </p>

      <p class="formula">A = l · b</p>

      <p>
        waarbij:
      </p>

      <ul>
        <li>A de oppervlakte is;</li>
        <li>l de lengte is;</li>
        <li>b de breedte is.</li>
      </ul>

      <p>
        Voor een rechthoek van 8 cm bij 5 cm:
      </p>

      <p class="formula">A = 8 · 5 = 40</p>

      <p>
        De oppervlakte is 40 cm².
      </p>

      <p>
        Als de oppervlakte en de lengte bekend zijn, kunnen we de formule
        omvormen om de breedte te vinden:
      </p>

      <p class="formula">b = A / l</p>

      <p>
        Bijvoorbeeld bij A = 40 cm² en l = 8 cm:
      </p>

      <p class="formula">b = 40 / 8 = 5 cm</p>

      <p>
        Ook hier gebruiken we dus dezelfde algebra om een andere grootheid
        vrij te maken.
      </p>


      <h3>12. Niet elke formule is zomaar geldig voor elke waarde</h3>

      <p>
        Een formule kan algebraïsch waarden toelaten die in de werkelijkheid
        geen betekenis hebben.
      </p>

      <p>
        Neem opnieuw:
      </p>

      <p class="formula">K = 25 + 8x</p>

      <p>
        Wiskundig kunnen we bijvoorbeeld x = −3 invullen:
      </p>

      <p class="formula">K = 25 + 8 · (−3) = 1</p>

      <p>
        De berekening is algebraïsch correct.
        Maar een lidmaatschap van −3 maanden heeft in deze context geen
        betekenis.
      </p>

      <p>
        De context legt dus beperkingen op aan de variabelen.
        In dit voorbeeld is een waarde als x = 6 zinvol, maar een negatieve
        duur niet.
      </p>

      <div class="callout">
        <p><strong>Een formule en haar context horen bij elkaar.</strong></p>
        <p>
          Algebra kan meer waarden toelaten dan de werkelijkheid.
          Controleer daarom altijd of de gekozen waarden fysisch,
          praktisch of logisch mogelijk zijn.
        </p>
      </div>


      <h3>13. Een model is een vereenvoudiging</h3>

      <p>
        Een formule is meestal geen volledige kopie van de werkelijkheid.
        Ze is een <strong>model</strong>: een vereenvoudigde beschrijving
        waarin we alleen de eigenschappen opnemen die voor het probleem
        belangrijk zijn.
      </p>

      <p>
        Bij het taximodel:
      </p>

      <p class="formula">P = 4 + 2x</p>

      <p>
        doen we alsof de prijs exact 2 euro per kilometer stijgt.
        We houden bijvoorbeeld geen rekening met verkeersdrukte,
        wachttijd, extra toeslagen of verschillende tarieven.
      </p>

      <p>
        Dat betekent niet automatisch dat de formule "fout" is.
        De vraag is of het model geschikt is voor de situatie waarvoor
        we het gebruiken.
      </p>

      <div class="callout">
        <p><strong>Een goed model is niet noodzakelijk volledig.</strong></p>
        <p>
          Het moet vooral de relevante structuur van het probleem
          voldoende goed beschrijven voor het doel waarvoor we het gebruiken.
        </p>
      </div>


      <h3>14. Een model controleren</h3>

      <p>
        Nadat je een formule hebt opgesteld, kun je verschillende controles
        uitvoeren.
      </p>

      <ol>
        <li>
          <strong>Controleer de betekenis van de letters.</strong>
          Weet je wat elke variabele voorstelt?
        </li>
        <li>
          <strong>Controleer de eenheden.</strong>
          Kun je de grootheden volgens de formule correct combineren?
        </li>
        <li>
          <strong>Test een eenvoudige waarde.</strong>
          Wat gebeurt er bijvoorbeeld wanneer een variabele 0 is?
        </li>
        <li>
          <strong>Controleer een concreet geval.</strong>
          Komt de formule overeen met een situatie waarvan je het antwoord
          al kent?
        </li>
        <li>
          <strong>Controleer de uitkomst.</strong>
          Heeft het antwoord in de werkelijkheid betekenis?
        </li>
      </ol>

      <p>
        Deze controles zijn belangrijk omdat een algebraïsch correcte
        berekening nog altijd kan vertrekken van een verkeerd model.
      </p>


      <h3>15. Een volledig voorbeeld</h3>

      <p>
        Een zwembad heeft een vaste inhoud van 10 000 liter water.
        Een pomp vult het zwembad met 250 liter per minuut.
        We willen de hoeveelheid water na x minuten beschrijven.
      </p>

      <p>
        Het vaste beginvolume is:
      </p>

      <p class="formula">10 000</p>

      <p>
        Per minuut komt er 250 liter bij.
        Na x minuten is dat:
      </p>

      <p class="formula">250x</p>

      <p>
        De hoeveelheid water W is dus:
      </p>

      <p class="formula">W = 10 000 + 250x</p>

      <p>
        Na 12 minuten:
      </p>

      <p class="formula">W = 10 000 + 250 · 12</p>

      <p class="formula">W = 10 000 + 3 000</p>

      <p class="formula">W = 13 000</p>

      <p>
        Algebraïsch geeft het model dus 13 000 liter.
      </p>

      <p>
        Maar nu moeten we opnieuw naar de werkelijkheid kijken:
        een zwembad met een inhoud van 10 000 liter kan geen onbeperkte
        hoeveelheid water bevatten.
      </p>

      <p>
        De formule beschrijft dus het vulproces, maar alleen zolang het
        model van toepassing is. Zodra het zwembad vol is, verandert
        de situatie en moet het model worden aangepast.
      </p>

      <div class="callout">
        <p><strong>Dit is modelleren:</strong></p>
        <p>
          werkelijkheid → grootheden herkennen → variabelen kiezen →
          formule opstellen → berekenen → terugvertalen naar de werkelijkheid
          → controleren of het model nog geldig is.
        </p>
      </div>


      <h3>16. Van werkelijkheid naar formule en terug</h3>

      <p>
        Algebraïsch modelleren heeft dus twee richtingen.
      </p>

      <p>
        Eerst vertalen we een concrete situatie naar wiskunde:
      </p>

      <p class="formula">werkelijkheid → variabelen → formule</p>

      <p>
        Daarna gebruiken we de formule om te rekenen:
      </p>

      <p class="formula">formule → berekening → antwoord</p>

      <p>
        Maar daar stopt het niet.
        Het antwoord moet opnieuw naar de oorspronkelijke situatie worden
        vertaald:
      </p>

      <p class="formula">antwoord → betekenis in de werkelijkheid</p>

      <p>
        Daarom is modelleren meer dan "een formule vinden".
        Je moet voortdurend heen en weer kunnen bewegen tussen
        <strong>werkelijkheid en wiskunde</strong>.
      </p>


      <h3>17. Verband met vergelijkingen</h3>

      <p>
        In les 2.3 gebruikten we een vergelijking om een onbekende te vinden.
        Bij modelleren kunnen we eerst zelf zo'n vergelijking opstellen
        vanuit een situatie.
      </p>

      <p>
        Stel bijvoorbeeld dat een abonnement 25 euro kost plus 8 euro per maand:
      </p>

      <p class="formula">K = 25 + 8x</p>

      <p>
        Als we willen weten na hoeveel maanden de totale kost 89 euro bedraagt,
        krijgen we:
      </p>

      <p class="formula">89 = 25 + 8x</p>

      <p>
        Dit is nu een vergelijking uit les 2.3.
      </p>

      <p>
        Trek 25 af:
      </p>

      <p class="formula">64 = 8x</p>

      <p>
        Deel door 8:
      </p>

      <p class="formula">x = 8</p>

      <p>
        Modelleren en vergelijkingen oplossen zijn dus geen losstaande
        technieken. Het model levert de vergelijking die we vervolgens
        met algebra kunnen oplossen.
      </p>


      <h3>18. Een formule is een compacte beschrijving van een structuur</h3>

      <p>
        Een goede formule vertelt meer dan alleen hoe je een getal moet
        berekenen. Ze maakt de structuur van een probleem zichtbaar.
      </p>

      <p>
        In:
      </p>

      <p class="formula">K = 25 + 8x</p>

      <p>
        zie je onmiddellijk:
      </p>

      <ul>
        <li>er is een vast startbedrag van 25;</li>
        <li>er komt 8 bij voor elke extra maand;</li>
        <li>de totale kost hangt af van x.</li>
      </ul>

      <p>
        In:
      </p>

      <p class="formula">A = l · b</p>

      <p>
        zie je dat de oppervlakte ontstaat uit het product van twee lengtes.
      </p>

      <p>
        In:
      </p>

      <p class="formula">s = v · t</p>

      <p>
        zie je dat afstand ontstaat uit snelheid vermenigvuldigd met tijd.
      </p>

      <p>
        De formule is daarmee een compacte taal voor de structuur
        van een probleem.
      </p>


      <div class="callout">
        <p><strong>Kernidee:</strong></p>
        <p>
          Algebraïsch modelleren betekent een situatie uit de werkelijkheid
          vertalen naar wiskundige symbolen en formules.
        </p>
        <p>
          We kiezen variabelen, beschrijven de relaties tussen de grootheden,
          rekenen met de formule en vertalen het antwoord daarna terug naar
          de werkelijkheid.
        </p>
        <p>
          Een formule is nooit alleen een rekentruc:
          ze is een compact model van een structuur.
          Daarom moet je niet alleen kunnen rekenen met een formule,
          maar ook begrijpen <strong>wat ze betekent, wanneer ze geldig is
          en welke beperkingen het model heeft</strong>.
        </p>
      </div>
    `
  },
    {
    id: "2.5",
    title: "Ongelijkheden & intervallen",
    goal: "Hoe beschrijven we een bereik van oplossingen?",
    theory: /* html */`
      <h2>Ongelijkheden & intervallen</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>het verschil kennen tussen een vergelijking en een ongelijkheid</li>
        <li>een lineaire ongelijkheid oplossen met dezelfde balansgedachte als in les 2.3</li>
        <li>begrijpen wanneer het ongelijkheidsteken omslaat</li>
        <li>een oplossingsverzameling voorstellen op de getallenlijn</li>
        <li>een oplossingsverzameling als interval schrijven</li>
        <li>open en gesloten grenzen onderscheiden</li>
        <li>controleren of een oplossing betekenisvol is in de context</li>
      </ul>

      <p>
        In les 2.3 zochten we de waarden waarvoor twee uitdrukkingen gelijk zijn.
        Dat kan één oplossing zijn, geen oplossing of zelfs oneindig veel oplossingen.
        Een ongelijkheid werkt op een vergelijkbare manier, maar vraagt niet wanneer
        twee kanten gelijk zijn. We zoeken alle getallen die aan een bepaalde
        voorwaarde voldoen.
      </p>

      <p>
        Een ongelijkheid kan bijvoorbeeld zeggen dat een getal groter dan 4,
        kleiner dan 10, of minstens 3 moet zijn.
        De oplossing is dan meestal geen enkel getal, maar een
        <strong>bereik van getallen</strong>.
      </p>


      <h3>1. Niet één getal, maar een bereik</h3>

      <p>
        Stel dat een attractie als voorwaarde heeft:
        "Je moet ouder zijn dan 12 jaar."
      </p>

      <p class="formula">x &gt; 12</p>

      <p>
        x = 13 mag, x = 20 mag en x = 50 mag ook.
        Maar x = 12 mag niet.
      </p>

      <p>
        De oplossing bestaat dus uit alle getallen die groter zijn dan 12.
        We zoeken niet één getal, maar een hele verzameling van mogelijke waarden.
      </p>

      <p>Er zijn vier basisvormen:</p>

      <ul>
        <li><span class="formula-inline">x &lt; a</span> — kleiner dan a; a telt niet mee;</li>
        <li><span class="formula-inline">x &le; a</span> — kleiner dan of gelijk aan a; a telt mee;</li>
        <li><span class="formula-inline">x &gt; a</span> — groter dan a; a telt niet mee;</li>
        <li><span class="formula-inline">x &ge; a</span> — groter dan of gelijk aan a; a telt mee.</li>
      </ul>

      <div class="callout">
        <p><strong>Vergelijking:</strong> wanneer zijn twee kanten gelijk?</p>
        <p><strong>Ongelijkheid:</strong> wanneer is de ene kant groter of kleiner dan de andere?</p>
      </div>


      <h3>2. Bijna zoals een vergelijking</h3>

      <p>
        Bij het oplossen van een ongelijkheid gebruiken we dezelfde
        balansgedachte als bij vergelijkingen.
      </p>

      <p>
        Je mag bij beide leden hetzelfde optellen of aftrekken.
        De richting van het ongelijkheidsteken blijft dan hetzelfde.
      </p>

      <p class="formula">2x + 1 &le; 9</p>

      <p>
        Trek 1 af aan beide kanten:
      </p>

      <p class="formula">2x &le; 8</p>

      <p>
        Deel beide kanten door 2.
        Omdat 2 positief is, blijft het teken hetzelfde:
      </p>

      <p class="formula">x &le; 4</p>

      <p>
        Elk getal dat hoogstens 4 is, is een oplossing.
        x = 4 hoort erbij omdat het teken <span class="formula-inline">&le;</span> is.
        x = 5 niet:
      </p>

      <p class="formula">2 · 5 + 1 = 11</p>

      <p>
        En 11 is niet kleiner dan of gelijk aan 9.
      </p>

      <p>
        Bij een ongelijkheid is het daarom nuttig om een oplossing te controleren.
        Controleer minstens de grens en neem daarnaast een testwaarde
        die volgens je oplossing wel voldoet en één die niet voldoet.
      </p>


      <h3>3. Wanneer keert het teken om?</h3>

      <p>
        Er is één belangrijke regel die bij ongelijkheden extra aandacht vraagt.
      </p>

      <p>
        Kijk naar de ware uitspraak:
      </p>

      <p class="formula">3 &lt; 5</p>

      <p>
        Vermenigvuldig beide kanten met −1:
      </p>

      <p class="formula">−3 &gt; −5</p>

      <p>
        Het teken is omgekeerd.
        Dat is nodig omdat vermenigvuldigen met −1 de getallenlijn
        als het ware spiegelt rond 0.
        Wat rechts stond, komt links te staan en omgekeerd.
      </p>

      <p>
        Daarom geldt:
      </p>

      <div class="callout">
        <p>
          <strong>
            Vermenigvuldigen of delen door een negatief getal keert
            het ongelijkheidsteken om.
          </strong>
        </p>
        <p>
          <span class="formula-inline">&lt;</span> wordt
          <span class="formula-inline">&gt;</span>,
          <span class="formula-inline">&gt;</span> wordt
          <span class="formula-inline">&lt;</span>,
          <span class="formula-inline">&le;</span> wordt
          <span class="formula-inline">&ge;</span>
          en omgekeerd.
        </p>
      </div>

      <p>
        Bij vermenigvuldigen of delen door een <strong>positief</strong> getal
        blijft het teken staan.
        Optellen en aftrekken keren het teken nooit om.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">−2x &gt; 6</p>

      <p>
        Deel door −2.
        Omdat we delen door een negatief getal, keert het teken om:
      </p>

      <p class="formula">x &lt; −3</p>

      <p>
        Controle:
        neem x = −4:
      </p>

      <p class="formula">−2 · (−4) = 8</p>

      <p>
        En 8 &gt; 6, dus x = −4 is inderdaad een oplossing.
      </p>

      <p>
        Neem x = −3:
      </p>

      <p class="formula">−2 · (−3) = 6</p>

      <p>
        Maar 6 is niet groter dan 6.
        Daarom is x = −3 geen oplossing.
      </p>


      <h3>4. Eerst algebra, dan het teken</h3>

      <p>
        Ook bij ingewikkeldere ongelijkheden gebruiken we eerst de
        algebraïsche bewerkingen uit les 2.2 en de balansregels uit les 2.3.
      </p>

      <p>
        Werk eerst haakjes weg en breng gelijksoortige termen samen.
      </p>

      <p class="formula">3(x − 1) &gt; x + 5</p>

      <p>
        Werk de haakjes weg:
      </p>

      <p class="formula">3x − 3 &gt; x + 5</p>

      <p>
        Trek x af aan beide kanten en tel 3 op:
      </p>

      <p class="formula">2x &gt; 8</p>

      <p>
        Deel door 2:
      </p>

      <p class="formula">x &gt; 4</p>

      <p>
        Het teken hoefde hier nergens om te keren,
        omdat we alleen positieve factoren gebruikten.
      </p>

      <p>
        Kijk nu naar een voorbeeld met een min voor een haakje:
      </p>

      <p class="formula">5 − (2x + 1) &ge; 2</p>

      <p>
        Werk de haakjes weg:
      </p>

      <p class="formula">5 − 2x − 1 &ge; 2</p>

      <p class="formula">4 − 2x &ge; 2</p>

      <p>
        Trek 4 af:
      </p>

      <p class="formula">−2x &ge; −2</p>

      <p>
        Deel door −2.
        Het teken keert om:
      </p>

      <p class="formula">x &le; 1</p>

      <div class="callout">
        <p><strong>Werk zoals bij een vergelijking, maar let op het teken.</strong></p>
        <p>
          De extra regel bij ongelijkheden is:
          delen of vermenigvuldigen door een negatief getal
          keert het ongelijkheidsteken om.
        </p>
      </div>


      <h3>5. De oplossingsverzameling</h3>

      <p>
        Alle getallen die aan een ongelijkheid voldoen, vormen samen de
        <strong>oplossingsverzameling</strong>.
      </p>

      <p>
        Neem bijvoorbeeld:
      </p>

      <p class="formula">x &gt; 4</p>

      <p>
        Getallen zoals 5, 6, 10 en 100 zijn oplossingen.
        Ook 4,1 is een oplossing.
        Het getal 4 zelf is geen oplossing.
      </p>

      <p>
        De oplossingsverzameling bestaat dus uit alle reële getallen
        die groter zijn dan 4.
      </p>

      <p>
        Je kunt zo'n verzameling op verschillende manieren voorstellen:
      </p>

      <ul>
        <li>met een ongelijkheid;</li>
        <li>op een getallenlijn;</li>
        <li>met intervalnotatie.</li>
      </ul>

      <p>
        Deze drie voorstellingen beschrijven dezelfde verzameling,
        maar leggen elk een ander accent.
      </p>

      <div class="callout">
        <p><strong>Ongelijkheid → oplossingsverzameling.</strong></p>
        <p>
          De ongelijkheid beschrijft de voorwaarde,
          de getallenlijn maakt de oplossingen zichtbaar
          en de intervalnotatie schrijft ze compact op.
        </p>
      </div>


      <h3>6. De getallenlijn</h3>

      <p>
        Een getallenlijn maakt het bereik van oplossingen zichtbaar.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">x &gt; 4</p>
      <div class="theory-image">
        <img
          src="assets/getallenlijn-groter-dan-4.svg"
          alt="Getallenlijn: open bol op 4 en een pijl naar rechts. x groter dan 4, de 4 telt niet mee."
        >
      </div>

      <p>
        markeren we 4 met een <strong>open bolletje</strong> en loopt de
        oplossingsverzameling naar rechts.
        Het open bolletje betekent dat 4 niet meetelt.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">x &le; 1</p>
      <div class="theory-image">
        <img
          src="assets/getallenlijn-kleiner-gelijk-1.svg"
          alt="Getallenlijn: dichte bol op 1 en een pijl naar links. x kleiner dan of gelijk aan 1, de 1 telt mee."
        >
      </div>

      <p>
        gebruiken we een <strong>gesloten bolletje</strong> op 1 en loopt de
        oplossingsverzameling naar links.
        Het gesloten bolletje betekent dat 1 wel meetelt.
      </p>

      <ul>
        <li>open bol / hol bolletje: <span class="formula-inline">&lt;</span> of <span class="formula-inline">&gt;</span>;</li>
        <li>gesloten bol / gevuld bolletje: <span class="formula-inline">&le;</span> of <span class="formula-inline">&ge;</span>.</li>
      </ul>

      <p>
        De richting van de pijl toont welke getallen tot de oplossing behoren.
        Een enkele aangeduide waarde zou typisch bij een vergelijking
        met één oplossing horen; bij een ongelijkheid gaat het vaak om
        een heel deel van de getallenlijn.
      </p>


      <h3>7. Intervallen</h3>

      <p>
        Een <strong>interval</strong> is een samenhangend stuk van de getallenlijn.
        Intervalnotatie is een compacte manier om zo'n oplossingsverzameling
        te beschrijven.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">[2, 5]</p>

      <p>
        betekent: alle getallen van 2 tot en met 5.
        Zowel 2 als 5 hoort erbij.
      </p>

      <p class="formula">(2, 5)</p>

      <p>
        betekent: alle getallen tussen 2 en 5,
        maar 2 en 5 zelf horen er niet bij.
      </p>

      <p>
        Er zijn ook gemengde intervallen:
      </p>

      <p class="formula">[2, 5)</p>

      <p>
        Hier hoort 2 er wel bij, maar 5 niet.
      </p>

      <p class="formula">(2, 5]</p>

      <p>
        Hier hoort 2 er niet bij, maar 5 wel.
      </p>

      <p>
        De betekenis van de haakjes is dus:
      </p>

      <ul>
        <li><strong>vierkante haak [ of ]</strong> → de grens telt mee;</li>
        <li><strong>ronde haak ( of )</strong> → de grens telt niet mee.</li>
      </ul>

      <p>
        Dit sluit rechtstreeks aan bij de ongelijkheidstekens:
      </p>

      <ul>
        <li><span class="formula-inline">&le;</span> en <span class="formula-inline">&ge;</span> → grens inbegrepen;</li>
        <li><span class="formula-inline">&lt;</span> en <span class="formula-inline">&gt;</span> → grens niet inbegrepen.</li>
      </ul>

      <p>
        Voor:
      </p>

      <p class="formula">x &ge; −2</p>

      <p>
        loopt de oplossing vanaf −2 naar rechts:
      </p>

      <p class="formula">[−2, &infin;)</p>

      <p>
        Voor:
      </p>

      <p class="formula">x &lt; 4</p>

      <p>
        krijgen we:
      </p>

      <p class="formula">(−&infin;, 4)</p>

      <p>
        Oneindig krijgt nooit een vierkante haak.
        <span class="formula-inline">&infin;</span> is geen getal dat werkelijk
        in de oplossingsverzameling kan worden opgenomen.
      </p>

      <div class="callout">
        <p><strong>Haakjes onthouden:</strong></p>
        <p>
          [ en ] bij een inbegrepen grens;
          ( en ) bij een uitgesloten grens;
          <span class="formula-inline">&infin;</span> altijd met een ronde haak.
        </p>
      </div>


      <h3>8. Twee grenzen tegelijk</h3>

      <p>
        Soms moet een getal tegelijkertijd aan twee voorwaarden voldoen.
        We krijgen dan een ongelijkheid met twee grenzen.
      </p>

      <p class="formula">−1 &le; x &lt; 3</p>
      <div class="theory-image">
        <img
          src="assets/getallenlijn-tussen-min1-en-3.svg"
          alt="Getallenlijn van −1 tot 3: dichte bol op −1, open bol op 3. Interval [−1, 3)."
        >
      </div>

      <p>
        Dit betekent:
        x is minstens −1 én kleiner dan 3.
      </p>

      <p>
        −1 hoort dus bij de oplossing, maar 3 niet.
        Bijvoorbeeld:
      </p>

      <ul>
        <li>x = −1 → wel een oplossing;</li>
        <li>x = 0 → wel een oplossing;</li>
        <li>x = 2 → wel een oplossing;</li>
        <li>x = 3 → geen oplossing.</li>
      </ul>

      <p>
        In intervalnotatie schrijven we:
      </p>

      <p class="formula">[−1, 3)</p>

      <p>
        Dit is één oplossingsverzameling met twee grenzen,
        niet twee losse puzzels.
      </p>

      <p>
        In een concrete context kan bijvoorbeeld staan:
        "een bedrag tussen 10 en 20 euro, waarbij 10 euro inbegrepen is
        maar 20 euro niet."
      </p>

      <p class="formula">[10, 20)</p>


      <h3>9. Uitkomst terug naar de situatie</h3>

      <p>
        Een ongelijkheid ontstaat vaak vanuit een praktische voorwaarde.
      </p>

      <p>
        Stel dat een attractie alleen toegankelijk is voor personen
        met een lengte van minstens 120 cm.
      </p>

      <p class="formula">ℓ &ge; 120</p>

      <p>
        De wiskundige oplossingsverzameling is:
      </p>

      <p class="formula">[120, &infin;)</p>

      <p>
        De ongelijkheid geeft dus het volledige wiskundige bereik
        dat aan de voorwaarde voldoet.
      </p>

      <p>
        Maar, net zoals in les 2.4, kan de werkelijkheid extra beperkingen
        opleggen. Een model of context bepaalt welke waarden werkelijk
        betekenisvol zijn.
      </p>

      <p>
        Een lengte kan bijvoorbeeld niet negatief zijn.
        Bij deze specifieke voorwaarde maakt dat echter geen verschil:
        elke waarde die minstens 120 cm is, is automatisch positief.
      </p>

      <div class="callout">
        <p><strong>Wiskundige oplossing ≠ altijd volledige context.</strong></p>
        <p>
          Controleer na het oplossen altijd of de waarden passen bij
          de situatie waarin de ongelijkheid werd opgesteld.
        </p>
      </div>


      <h3>10. Ongelijkheden in een model</h3>

      <p>
        In les 2.4 zagen we dat een formule een model kan beschrijven.
        Een ongelijkheid kan vervolgens een voorwaarde opleggen aan dat model.
      </p>

      <p>
        Stel dat een zwembad volgens een eenvoudig model wordt gevuld:
      </p>

      <p class="formula">W = 10 000 + 250x</p>

      <p>
        waarbij W de hoeveelheid water in liter is en x de tijd in minuten.
        Het zwembad kan maximaal 15 000 liter bevatten.
      </p>

      <p>
        Dan moet gelden:
      </p>

      <p class="formula">W &le; 15 000</p>

      <p>
        Vul de formule voor W in:
      </p>

      <p class="formula">10 000 + 250x &le; 15 000</p>

      <p>
        Trek 10 000 af:
      </p>

      <p class="formula">250x &le; 5 000</p>

      <p>
        Deel door 250:
      </p>

      <p class="formula">x &le; 20</p>

      <p>
        Het model zegt dus dat het zwembad maximaal 20 minuten gevuld
        kan worden voordat de maximale inhoud wordt bereikt.
      </p>

      <p>
        We combineren hier de ideeën uit 2.4 en 2.5:
        een formule beschrijft een situatie en een ongelijkheid
        legt een grens op aan die situatie.
      </p>


      <h3>11. Korte werkwijze</h3>

      <ol>
        <li>werk haakjes weg en breng gelijksoortige termen samen;</li>
        <li>breng de x-termen naar één lid en de constanten naar het andere;</li>
        <li>deel of vermenigvuldig zodat de factor van x gelijk is aan 1;</li>
        <li>keer het ongelijkheidsteken om als je door een negatief getal deelt of ermee vermenigvuldigt;</li>
        <li>schrijf de oplossingsverzameling als ongelijkheid, op de getallenlijn of als interval;</li>
        <li>controleer de grens en minstens één waarde binnen en één waarde buiten de oplossingsverzameling;</li>
        <li>controleer ten slotte of de oplossing betekenisvol is in de context.</li>
      </ol>

      <div class="callout">
        <p><strong>Kernidee:</strong></p>

        <p>
          Een vergelijking zoekt de waarden waarvoor twee kanten gelijk zijn.
          Een ongelijkheid beschrijft een voorwaarde waaraan een hele verzameling
          van waarden kan voldoen.
        </p>

        <p>
          De balansregels uit vergelijkingen blijven gelden.
          Er is één belangrijke extra regel:
          <strong>vermenigvuldigen of delen door een negatief getal
          keert het ongelijkheidsteken om.</strong>
        </p>

        <p>
          De oplossingen kunnen worden voorgesteld op een getallenlijn
          of compact worden geschreven met intervalnotatie.
        </p>

        <p>
          Bij toepassingen moet je bovendien controleren of de gevonden waarden
          passen bij de werkelijkheid en bij de grenzen van het model.
        </p>
      </div>
    `
  },
    {
    id: "2.6",
    title: "Machten, wortels & algebraïsche breuken",
    goal: "Hoe breiden we de rekenregels uit naar algebra?",
    theory: /* html */`
      <h2>Machten, wortels & algebraïsche breuken</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>de machtsregels met letters gebruiken</li>
        <li>negatieve exponenten herkennen en gebruiken</li>
        <li>het verschil kennen tussen de hoofdwortel en de vergelijking x² = a</li>
        <li>een wortel schrijven als een macht en omgekeerd</li>
        <li>begrijpen waarom √(x²) = |x| en niet altijd x</li>
        <li>een algebraïsche breuk herkennen en de verboden waarden bepalen</li>
        <li>een algebraïsche breuk vereenvoudigen door factoren te schrappen, niet door termen</li>
        <li>algebraïsche breuken vermenigvuldigen, delen, optellen en aftrekken</li>
        <li>controleren welke waarden voor een formule zijn toegelaten</li>
      </ul>

      <p>
        In Fase 1 leerden we rekenen met machten, wortels en breuken van getallen.
        In deze les breiden we die rekenregels uit naar algebraïsche uitdrukkingen.
      </p>

      <p>
        De basisregels blijven hetzelfde, maar met letters moeten we extra opletten.
        Niet elke algebraïsche uitdrukking bestaat voor elke waarde van de variabelen.
        Bovendien moeten we goed onderscheiden tussen <strong>termen</strong> en
        <strong>factoren</strong>.
      </p>


      <h3>1. Machten met hetzelfde grondtal</h3>

      <p>
        Een macht is een verkorte schrijfwijze voor herhaalde vermenigvuldiging:
      </p>

      <p class="formula">a^{3} = a · a · a</p>

      <p>
        De machtsregels die we in Fase 1 leerden, gelden ook wanneer het grondtal
        een letter is.
      </p>

      <p>
        Bij vermenigvuldigen van machten met hetzelfde grondtal tellen we de
        exponenten op:
      </p>

      <p class="formula">a^{m} · a^{n} = a^{m+n}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{2} · x^{5} = x^{7}</p>

      <p>
        Bij delen van machten met hetzelfde grondtal trekken we de exponenten af:
      </p>

      <p class="formula">a^{m} / a^{n} = a^{m−n}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{5} / x^{2} = x^{3}</p>

      <p>
        Bij een macht van een macht vermenigvuldigen we de exponenten:
      </p>

      <p class="formula">(a^{m})^{n} = a^{mn}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">(x^{2})^{3} = x^{6}</p>

      <div class="callout">
        <p><strong>Let op het grondtal.</strong></p>
        <p>
          Deze machtsregels gelden wanneer we met hetzelfde grondtal werken.
          Ze zijn geen algemene regel om zomaar exponenten over optellingen
          of aftrekkingen te verdelen.
        </p>
      </div>


      <h3>2. Een product of quotiënt als grondtal</h3>

      <p>
        Staat er een product als grondtal van een macht, dan wordt de macht
        toegepast op elke factor:
      </p>

      <p class="formula">(ab)^{n} = a^{n}b^{n}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">(2x)^{3} = 2^{3}x^{3} = 8x^{3}</p>

      <p>
        De 2 hoort bij het grondtal en wordt dus ook tot de derde macht verheven.
      </p>

      <p>
        Ook voor een quotiënt geldt:
      </p>

      <p class="formula">(a / b)^{n} = a^{n} / b^{n}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">(x / 3)^{2} = x^{2} / 9</p>

      <p>
        Dit is iets anders dan een macht van een som.
        Zo geldt:
      </p>

      <p class="formula">(x + y)^{2} ≠ x^{2} + y^{2}</p>

      <p>
        Uit les 2.2 weten we dat:
      </p>

      <p class="formula">(x + y)^{2} = x^{2} + 2xy + y^{2}</p>

      <div class="callout">
        <p><strong>Klassieke fout:</strong></p>
        <p>
          Je mag een macht over een product verdelen, maar niet zomaar over
          een som. Het grondtal <span class="formula-inline">x + y</span>
          is één geheel.
        </p>
      </div>


      <h3>3. Macht met exponent nul en negatieve exponenten</h3>

      <p>
        In Fase 1 zagen we dat een macht met exponent 0 gelijk is aan 1,
        zolang het grondtal niet nul is:
      </p>

      <p class="formula">a^{0} = 1\\ en\\ (a ≠ 0)</p>

      <p>
        Dit sluit aan bij de machtsregel voor delen:
      </p>

      <p class="formula">a^{3} / a^{3} = a^{3−3} = a^{0} = 1</p>

      <p>
        Een negatieve exponent betekent dat we het omgekeerde nemen:
      </p>

      <p class="formula">a^{−n} = 1 / a^{n}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{−2} = 1 / x^{2}</p>

      <p>
        Dit kan alleen wanneer x ≠ 0.
      </p>

      <p>
        Een negatieve exponent betekent dus niet dat het resultaat negatief is.
        Het minteken staat in de <strong>exponent</strong> en betekent dat
        we het omgekeerde van de macht nemen.
      </p>

      <div class="callout">
        <p><strong>Negatieve exponent ≠ negatief getal.</strong></p>
        <p>
          <span class="formula-inline">x^{-2}</span> betekent
          <span class="formula-inline">1/x²</span>, niet
          <span class="formula-inline">−x²</span>.
        </p>
      </div>


      <h3>4. De hoofdwortel</h3>

      <p>
        Een wortel en een vergelijking met een kwadraat lijken op elkaar,
        maar betekenen niet hetzelfde.
      </p>

      <p>
        De <strong>hoofdwortel</strong> van 25 is:
      </p>

      <p class="formula">√25 = 5</p>

      <p>
        De hoofdwortel is per definitie het niet-negatieve getal waarvan
        het kwadraat gelijk is aan het getal onder het wortelteken.
      </p>

      <p>
        Daarom:
      </p>

      <p class="formula">√25 = 5</p>

      <p>
        en niet −5.
      </p>

      <p>
        De vergelijking:
      </p>

      <p class="formula">x^{2} = 25</p>

      <p>
        heeft daarentegen twee reële oplossingen:
      </p>

      <p class="formula">x = 5\\ of\\ x = −5</p>

      <p>
        Beide getallen hebben immers hetzelfde kwadraat:
      </p>

      <p class="formula">5^{2} = 25</p>

      <p class="formula">(−5)^{2} = 25</p>

      <div class="callout">
        <p><strong>Hoofdwortel kiest één kandidaat.</strong></p>
        <p>
          <span class="formula-inline">√25</span> betekent 5.
          De vergelijking <span class="formula-inline">x² = 25</span>
          vraagt welke waarden x kunnen aannemen en heeft daarom twee oplossingen.
        </p>
      </div>


      <h3>5. Wortels en machten</h3>

      <p>
        Een vierkantswortel kan ook als een macht met exponent
        <span class="formula-inline">1/2</span> worden geschreven:
      </p>

      <p class="formula">√a = a^{1/2}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">√9 = 9^{1/2} = 3</p>

      <p>
        Ook een derdemachtswortel kan op die manier worden geschreven:
      </p>

      <p class="formula">∛a = a^{1/3}</p>

      <p>
        In deze fase is het vooral belangrijk om deze schrijfwijze
        te herkennen. De volledige rekenregels voor gebroken exponenten
        bouwen we later verder uit.
      </p>

      <p>
        Voor een vierkantswortel in de reële getallen moet het getal
        onder het wortelteken niet-negatief zijn:
      </p>

      <p class="formula">√x ≥ 0</p>
      <p>
        De wortel √x bestaat in de reële getallen alleen voor x ≥ 0.
        Die beperking hoort bij elke formule waarin een vierkantswortel voorkomt.
      </p>


      <h3>6. De belangrijke valkuil: √(x²)</h3>

      <p>
        Bij getallen weten we bijvoorbeeld:
      </p>

      <p class="formula">√(3^{2}) = 3</p>

      <p>
        Maar wat gebeurt er bij een negatieve waarde van x?
      </p>

      <p class="formula">x = −3</p>

      <p>
        Dan is:
      </p>

      <p class="formula">x^{2} = 9</p>

      <p>
        en dus:
      </p>

      <p class="formula">√(x^{2}) = √9 = 3</p>

      <p>
        Het resultaat is dus niet −3.
        De hoofdwortel is altijd niet-negatief.
      </p>

      <p>
        Daarom geldt in de reële getallen:
      </p>

      <p class="formula">√(x^{2}) = |x|</p>

      <p>
        Het symbool <span class="formula-inline">|x|</span> betekent de
        <strong>absolute waarde</strong> van x: de afstand van x tot 0.
        Die afstand is nooit negatief.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">|5| = 5</p>

      <p class="formula">|−5| = 5</p>

      <p>
        Dit is een belangrijk gevolg van het onderscheid tussen de
        hoofdwortel en de oplossingen van een kwadratische vergelijking.
      </p>

      <p>
        Ook haakjes blijven belangrijk:
      </p>

      <p class="formula">(−3)^{2} = 9</p>

      <p class="formula">−3^{2} = −9</p>

      <div class="callout">
        <p><strong>Onthoud:</strong></p>
        <p>
          <span class="formula-inline">√(x²) = |x|</span>,
          niet zonder meer x.
          De hoofdwortel levert altijd een niet-negatieve waarde.
        </p>
      </div>


      <h3>7. Wat is een algebraïsche breuk?</h3>

      <p>
        Een algebraïsche breuk is een breuk waarvan de teller,
        de noemer of beide een algebraïsche uitdrukking bevatten.
      </p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">\frac{3x}{x + 2}</p>

      <p class="formula">\frac{x^{2} − 9}{x − 3}</p>

      <p>
        De basisregels van breuken blijven gelden.
        Maar er is één belangrijke voorwaarde:
        <strong>de noemer mag nooit nul zijn.</strong>
      </p>

      <p>
        Bij:
      </p>

      <p class="formula">\frac{3x}{x + 2}</p>

      <p>
        mag de noemer niet nul worden:
      </p>

      <p class="formula">x + 2 ≠ 0</p>

      <p class="formula">x ≠ −2</p>

      <p>
        De waarde x = −2 is dus een <strong>verboden waarde</strong>.
      </p>

      <p>
        Bij:
      </p>

      <p class="formula">\frac{x^{2} − 9}{x − 3}</p>

      <p>
        geldt:
      </p>

      <p class="formula">x − 3 ≠ 0</p>

      <p class="formula">x ≠ 3</p>

      <div class="callout">
        <p><strong>Noemer ≠ 0.</strong></p>
        <p>
          Deze regel uit Fase 1 verdwijnt niet omdat er een letter
          in de noemer staat.
        </p>
      </div>


      <h3>8. Eerst de verboden waarden bepalen</h3>

      <p>
        Voordat je een algebraïsche breuk vereenvoudigt, is het verstandig
        eerst te bepalen voor welke waarden de oorspronkelijke breuk niet bestaat.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">\frac{x^{2} − 9}{x − 3}</p>

      <p>
        De noemer wordt nul wanneer:
      </p>

      <p class="formula">x − 3 = 0</p>

      <p class="formula">x = 3</p>

      <p>
        Dus:
      </p>

      <p class="formula">x ≠ 3</p>

      <p>
        Pas daarna gaan we de breuk vereenvoudigen.
        Dit is belangrijk omdat de vereenvoudigde vorm de oorspronkelijke
        verboden waarde niet zomaar terug tovert tot een toegelaten waarde.
      </p>


      <h3>9. Schrappen mag alleen bij factoren</h3>

      <p>
        Bij gewone breuken leerden we dat een gemeenschappelijke factor
        boven en onder mag worden geschrapt.
        Dat geldt ook voor algebraïsche breuken.
      </p>

      <p class="formula">\frac{6x^{2}}{3x} = 2x</p>

      <p>
        We kunnen dit zien als:
      </p>

      <p class="formula">\frac{3x · 2x}{3x} = 2x</p>

      <p>
        De gemeenschappelijke factor 3x mag worden geschrapt,
        op voorwaarde dat x ≠ 0.
      </p>

      <p>
        Maar je mag <strong>geen afzonderlijke termen</strong> schrappen.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">\frac{x + 2}{2} ≠ x</p>

      <p>
        De teller <span class="formula-inline">x + 2</span> bestaat uit
        twee termen. De 2 is geen factor van de volledige teller.
      </p>

      <p>
        Dit mag wel:
      </p>

      <p class="formula">\frac{2x}{2} = x</p>

      <p>
        Hier is 2 een gemeenschappelijke factor.
      </p>

      <div class="callout">
        <p><strong>Schrappen mag alleen bij factoren, nooit bij termen.</strong></p>
        <p>
          Kijk dus eerst of een uitdrukking als een product kan worden geschreven.
          Pas daarna kun je gemeenschappelijke factoren schrappen.
        </p>
      </div>


      <h3>10. Vereenvoudigen door te ontbinden</h3>

      <p>
        Soms zijn de gemeenschappelijke factoren niet onmiddellijk zichtbaar.
        Dan moeten we de teller of noemer eerst ontbinden in factoren.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">\frac{x^{2} − 9}{x − 3}</p>

      <p>
        Uit les 2.2 kennen we het verschil van kwadraten:
      </p>

      <p class="formula">x^{2} − 9 = (x + 3)(x − 3)</p>

      <p>
        Daardoor wordt:
      </p>

      <p class="formula">\frac{(x + 3)(x − 3)}{x − 3}</p>

      <p>
        Nu zien we de gemeenschappelijke factor x − 3:
      </p>

      <p class="formula">\frac{(x + 3)(x − 3)}{x − 3} = x + 3</p>

      <p>
        Maar vergeet de oorspronkelijke verboden waarde niet:
      </p>

      <p class="formula">x ≠ 3</p>

      <p>
        De vereenvoudigde uitdrukking <span class="formula-inline">x + 3</span>
        bestaat voor x = 3 wel, maar de <strong>oorspronkelijke breuk</strong>
        niet.
      </p>

      <p>
        We mogen dus niet besluiten dat de oorspronkelijke breuk bij x = 3
        gelijk is aan 6.
      </p>

      <div class="callout">
        <p><strong>Vereenvoudigen verwijdert geen verboden waarde.</strong></p>
        <p>
          De nieuwe vorm kan op sommige plaatsen bestaan waar de oorspronkelijke
          breuk niet bestond. De domeinbeperking van de oorspronkelijke uitdrukking
          blijft daarom gelden.
        </p>
      </div>


      <h3>11. Vermenigvuldigen van algebraïsche breuken</h3>

      <p>
        De regels voor het vermenigvuldigen van gewone breuken blijven gelden:
      </p>

      <p class="formula">\frac{a}{b} · \frac{c}{d} = \frac{ac}{bd}</p>

      <p>
        Bij algebraïsche breuken kunnen we vaak vooraf gemeenschappelijke
        factoren schrappen.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">\frac{2x}{3} · \frac{9}{x}</p>

      <p>
        We krijgen:
      </p>

      <p class="formula">\frac{18x}{3x} = 6</p>

      <p>
        Hierbij geldt:
      </p>

      <p class="formula">x ≠ 0</p>

      <p>
        De x is een factor boven en onder en mag dus worden geschrapt.
      </p>

      <p>
        Je kunt ook vooraf vereenvoudigen:
      </p>

      <p class="formula">\frac{2x}{3} · \frac{9}{x}
      = \frac{2 · 3}{1} = 6</p>

      <p>
        Beide werkwijzen geven hetzelfde resultaat.
      </p>


      <h3>12. Delen door algebraïsche breuken</h3>

      <p>
        Delen door een breuk betekent vermenigvuldigen met het omgekeerde:
      </p>

      <p class="formula">\frac{a}{b} : \frac{c}{d}
      = \frac{a}{b} · \frac{d}{c}</p>

      <p>
        Dus:
      </p>

      <p class="formula">\frac{a}{b} : \frac{c}{d}
      = \frac{ad}{bc}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">\frac{x}{3} : \frac{2}{5}
      = \frac{x}{3} · \frac{5}{2}
      = \frac{5x}{6}</p>

      <p>
        Ook hier moeten we controleren welke waarden niet zijn toegestaan.
        Geen enkele noemer mag nul worden en ook de breuk waardoor we delen
        mag niet gelijk zijn aan nul.
      </p>

      <div class="callout">
        <p><strong>Delen door een breuk = vermenigvuldigen met het omgekeerde.</strong></p>
        <p>
          Vergeet bij algebraïsche breuken niet te controleren
          welke waarden daardoor verboden worden.
        </p>
      </div>


      <h3>13. Optellen en aftrekken met dezelfde noemer</h3>

      <p>
        Bij optellen en aftrekken van breuken moeten de noemers gelijk zijn.
      </p>

      <p>
        Als de noemer al dezelfde is, kunnen we de tellers optellen of aftrekken.
      </p>

      <p class="formula">\frac{3}{x} + \frac{2}{x}
      = \frac{3 + 2}{x}
      = \frac{5}{x}</p>

      <p>
        Hierbij geldt:
      </p>

      <p class="formula">x ≠ 0</p>

      <p>
        Dit is vergelijkbaar met:
      </p>

      <p class="formula">\frac{3}{7} + \frac{2}{7}
      = \frac{5}{7}</p>

      <p>
        De noemer blijft behouden; alleen de tellers worden gecombineerd.
      </p>


      <h3>14. Verschillende noemers: eerst een gemeenschappelijke noemer</h3>

      <p>
        Als de noemers verschillen, kunnen we de tellers niet zomaar
        bij elkaar optellen.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">\frac{1}{x} + \frac{1}{2}</p>

      <p>
        Een gemeenschappelijke noemer is 2x.
        We herschrijven beide breuken:
      </p>

      <p class="formula">\frac{1}{x}
      = \frac{2}{2x}</p>

      <p class="formula">\frac{1}{2}
      = \frac{x}{2x}</p>

      <p>
        Nu kunnen we optellen:
      </p>

      <p class="formula">\frac{2}{2x} + \frac{x}{2x}
      = \frac{2 + x}{2x}</p>

      <p>
        De oorspronkelijke noemer x mag niet nul zijn:
      </p>

      <p class="formula">x ≠ 0</p>

      <p>
        Dus:
      </p>

      <p class="formula">\frac{1}{x} + \frac{1}{2}
      = \frac{x + 2}{2x},
      \quad x ≠ 0</p>

      <p>
        Wat je <strong>niet</strong> mag doen:
      </p>

      <p class="formula">\frac{1}{x} + \frac{1}{2}
      ≠ \frac{2}{x + 2}</p>

      <div class="callout">
        <p><strong>Bij optellen geen tellers én noemers optellen.</strong></p>
        <p>
          Eerst dezelfde noemer maken, daarna pas de tellers combineren.
        </p>
      </div>


      <h3>15. Domeinbeperkingen blijven gelden</h3>

      <p>
        Bij algebraïsche uitdrukkingen moeten we steeds nagaan voor welke
        waarden de uitdrukking werkelijk bestaat.
      </p>

      <p>
        Bij een noemer geldt:
      </p>

      <p class="formula">{noemer} ≠ 0</p>

      <p>
        Bij een vierkantswortel geldt in de reële getallen:
      </p>

      <p class="formula">{uitdrukking\\ onder\\ de\\ wortel}  ≥ 0</p>

      <p>
        Een uitdrukking kan dus meerdere beperkingen tegelijk hebben.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">\frac{√(x − 2)}{x − 5}</p>

      <p>
        Voor de wortel moet gelden:
      </p>

      <p class="formula">x − 2 ≥ 0</p>

      <p class="formula">x ≥ 2</p>

      <p>
        Voor de noemer moet gelden:
      </p>

      <p class="formula">x − 5 ≠ 0</p>

      <p class="formula">x ≠ 5</p>

      <p>
        De toegelaten waarden zijn dus:
      </p>

      <p class="formula">x ≥ 2\\ en\\ x ≠ 5</p>

      <p>
        Het bepalen van zulke toegelaten en verboden waarden wordt steeds
        belangrijker naarmate algebra complexer wordt.
      </p>


      <h3>16. Korte werkwijze</h3>

      <ol>
        <li>controleer eerst welke waarden niet zijn toegestaan;</li>
        <li>bij een noemer: zorg dat de noemer niet nul wordt;</li>
        <li>bij een vierkantswortel: zorg dat de uitdrukking onder de wortel niet-negatief is;</li>
        <li>bij machten met hetzelfde grondtal: tel, trek af of vermenigvuldig de exponenten volgens de juiste machtsregel;</li>
        <li>bij een product of quotiënt als grondtal: pas de macht toe op de factoren;</li>
        <li>bij algebraïsche breuken: ontbind eerst indien nodig;</li>
        <li>schrap alleen gemeenschappelijke factoren, nooit losse termen;</li>
        <li>bij vermenigvuldigen en delen: gebruik dezelfde breukregels als in Fase 1;</li>
        <li>bij optellen en aftrekken: maak eerst een gemeenschappelijke noemer;</li>
        <li>controleer of de oorspronkelijke verboden waarden nog steeds uitgesloten zijn.</li>
      </ol>


      <div class="callout">
        <p><strong>Kernidee:</strong></p>

        <p>
          De rekenregels voor machten, wortels en breuken blijven gelden
          wanneer we met letters werken.
        </p>

        <p>
          Bij machten moet je letten op het grondtal en de exponent.
          Bij wortels moet je het verschil kennen tussen de hoofdwortel
          en de oplossingen van een vergelijking zoals
          <span class="formula-inline">x² = a</span>.
        </p>

        <p>
          Bij algebraïsche breuken moet je altijd controleren wanneer
          de uitdrukking bestaat. Een noemer mag nooit nul worden en
          een vierkantswortel mag in de reële getallen geen negatief
          getal onder het wortelteken hebben.
        </p>

        <p>
          Vereenvoudigen betekent bovendien niet zomaar "iets wegstrepen":
          <strong>alleen gemeenschappelijke factoren mogen worden geschrapt,
          nooit afzonderlijke termen.</strong>
        </p>

        <p>
          Zo bouwen we verder op de rekenregels uit Fase 1 en leren we
          ze gebruiken binnen steeds algemenere algebraïsche uitdrukkingen.
        </p>
      </div>
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
