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

      <p class="formula">\\sqrt{a} = a^{1/2}</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">\\sqrt{9} = 9^{1/2} = 3</p>

      <p>
        Ook een derdemachtswortel kan op die manier worden geschreven:
      </p>

      <p class="formula">\\sqrt[3]{a} = a^{1/3}</p>

      <p>
        In deze fase is het vooral belangrijk om deze schrijfwijze
        te herkennen. De volledige rekenregels voor gebroken exponenten
        bouwen we later verder uit.
      </p>

      <p>
        Voor een vierkantswortel in de reële getallen moet het getal
        onder het wortelteken niet-negatief zijn:
      </p>

      <p class="formula">\\sqrt{x} ≥ 0</p>
      <p>
        De wortel √x bestaat in de reële getallen alleen voor x ≥ 0.
        Die beperking hoort bij elke formule waarin een vierkantswortel voorkomt.
      </p>


      <h3>6. De belangrijke valkuil: √(x²)</h3>

      <p>
        Bij getallen weten we bijvoorbeeld:
      </p>

      <p class="formula">\\sqrt{3^{2}} = 3</p>

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

      <p class="formula">\\sqrt{x^{2}} = \\sqrt{9} = 3</p>

      <p>
        Het resultaat is dus niet −3.
        De hoofdwortel is altijd niet-negatief.
      </p>

      <p>
        Daarom geldt in de reële getallen:
      </p>

      <p class="formula">\\sqrt{x^{2}} = |x|</p>

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

      <p class="formula">\\frac{3x}{x + 2}</p>

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

      <p class="formula">\frac{1}{x} + \frac{1}{2} = \frac{x + 2}{2x},\\ en\\ x ≠ 0</p>

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

      <p><strong>Doel:</strong></p>
      <ul>
        <li>een kwadratische vergelijking herkennen</li>
        <li>een kwadratische vergelijking naar standaardvorm brengen</li>
        <li>ontbinden en de nulproductregel gebruiken</li>
        <li>begrijpen waarom je niet zomaar door x mag delen</li>
        <li>de abc-formule gebruiken</li>
        <li>de discriminant D berekenen en interpreteren</li>
        <li>het verschil kennen tussen de hoofdwortel √a en de oplossingen van x² = a</li>
        <li>begrijpen dat een kwadratische vergelijking twee, één of geen reële oplossingen kan hebben</li>
      </ul>

      <p>
        In les 2.3 werkten we met vergelijkingen waarin de onbekende
        hoogstens tot de eerste macht voorkwam. Zodra <strong>x²</strong>
        verschijnt, verandert de structuur van de vergelijking.
      </p>

      <p>
        Een kwadratische vergelijking kan twee verschillende reële oplossingen
        hebben. Maar er kan ook precies één reële oplossing zijn, of helemaal
        geen reële oplossing.
      </p>

      <p>
        In deze les leren we eerst hoe we de structuur van zo'n vergelijking
        kunnen herkennen en gebruiken. Daarna leren we een algemene methode:
        de <strong>abc-formule</strong>.
      </p>


      <h3>1. Wat is een kwadratische vergelijking?</h3>

      <p>
        Een vergelijking is <strong>kwadratisch</strong> als de hoogste macht
        van de onbekende gelijk is aan 2.
      </p>

      <p>
        De algemene vorm is:
      </p>

      <p class="formula">ax^{2} + bx + c = 0</p>

      <p>
        waarbij:
      </p>

      <ul>
        <li>a, b en c vaste getallen zijn;</li>
        <li>x de onbekende is;</li>
        <li>a ≠ 0.</li>
      </ul>

      <p>
        Die laatste voorwaarde is belangrijk.
        Als a = 0, verdwijnt de term met x² en krijgen we geen
        kwadratische vergelijking meer.
      </p>

      <p>Voorbeelden:</p>

      <p class="formula">x^{2} − 5x + 6 = 0</p>

      <p class="formula">2x^{2} + 3x = 0</p>

      <p class="formula">x^{2} = 9</p>

      <p>
        Ook de laatste vergelijking is kwadratisch.
        We kunnen ze eerst herschrijven als:
      </p>

      <p class="formula">x^{2} − 9 = 0</p>

      <p>
        Bij het oplossen van een algemene kwadratische vergelijking brengen
        we alles eerst naar één lid, zodat rechts 0 staat.
      </p>

      <div class="callout">
        <p><strong>Herkenningsregel:</strong></p>
        <p>
          Staat x² als hoogste macht in de vergelijking, dan hebben we
          met een kwadratische vergelijking te maken.
        </p>
      </div>


      <h3>2. Waarom is 0 zo belangrijk?</h3>

      <p>
        Bij kwadratische vergelijkingen proberen we vaak een uitdrukking
        als een product van factoren te schrijven.
      </p>

      <p>
        Daarom is een rechterlid van 0 bijzonder handig.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">x^{2} − 5x + 6 = 0</p>

      <p>
        We kunnen het linkerlid ontbinden:
      </p>

      <p class="formula">(x − 2)(x − 3) = 0</p>

      <p>
        Nu hebben we een product dat gelijk is aan nul.
        Dat brengt ons bij de nulproductregel.
      </p>


      <h3>3. De nulproductregel</h3>

      <p>
        Als het product van twee factoren nul is, dan moet minstens één
        van die factoren nul zijn:
      </p>

      <p class="formula">A · B = 0</p>

      <p>
        betekent:
      </p>

      <p class="formula">A = 0 of B = 0</p>

      <p>
        Dit noemen we de <strong>nulproductregel</strong>.
      </p>

      <p>
        We passen hem toe op:
      </p>

      <p class="formula">(x − 2)(x − 3) = 0</p>

      <p>
        Dus:
      </p>

      <p class="formula">x − 2 = 0</p>

      <p>
        of:
      </p>

      <p class="formula">x − 3 = 0</p>

      <p>
        Daaruit volgen de twee oplossingen:
      </p>

      <p class="formula">x = 2</p>

      <p class="formula">x = 3</p>

      <p>
        Controle in de oorspronkelijke vergelijking:
      </p>

      <p class="formula">2^{2} − 5 · 2 + 6 = 0</p>

      <p class="formula">3^{2} − 5 · 3 + 6 = 0</p>

      <p>
        Beide waarden voldoen dus aan de oorspronkelijke vergelijking.
      </p>

      <div class="callout">
        <p><strong>Een product is nul wanneer minstens één factor nul is.</strong></p>
        <p>
          Daarom kan ontbinden een kwadratische vergelijking opsplitsen
          in twee eenvoudige vergelijkingen.
        </p>
      </div>


      <h3>4. Ontbinden als de snelle methode</h3>

      <p>
        Sommige kwadratische vergelijkingen kunnen we gemakkelijk ontbinden.
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{2} − 5x + 6 = 0</p>

      <p>
        We zoeken twee getallen waarvan het product 6 is en waarvan de som
        −5 is.
      </p>

      <p>
        Dat zijn −2 en −3:
      </p>

      <p class="formula">(x − 2)(x − 3) = 0</p>

      <p>
        Daarna gebruiken we de nulproductregel:
      </p>

      <p class="formula">x = 2 of x = 3</p>

      <p>
        Dit is een snelle methode wanneer de factoren gemakkelijk te vinden zijn.
        Maar niet elke kwadratische vergelijking laat zich zo eenvoudig
        ontbinden.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{2} + 2x − 1 = 0</p>

      <p>
        Hier zijn geen eenvoudige gehele getallen waarmee we de vergelijking
        kunnen ontbinden.
        Daarvoor hebben we een algemene methode nodig.
      </p>


      <h3>5. Deel nooit zomaar door x</h3>

      <p>
        Kijk naar:
      </p>

      <p class="formula">2x^{2} + 3x = 0</p>

      <p>
        We kunnen x als gemeenschappelijke factor buiten haakjes halen:
      </p>

      <p class="formula">x(2x + 3) = 0</p>

      <p>
        Volgens de nulproductregel geldt:
      </p>

      <p class="formula">x = 0 of 2x + 3 = 0</p>

      <p>
        De tweede vergelijking geeft:
      </p>

      <p class="formula">x = −\frac{3}{2}</p>

      <p>
        De twee oplossingen zijn dus:
      </p>

      <p class="formula">x = 0 of x = −\frac{3}{2}</p>

      <p>
        Je zou in de oorspronkelijke vergelijking ook beide leden door x
        kunnen proberen te delen. Maar dat is gevaarlijk:
      </p>

      <p class="formula">2x^{2} + 3x = 0</p>

      <p class="formula">x(2x + 3) = 0</p>

      <p>
        Als je nu door x deelt, veronderstel je eigenlijk dat x ≠ 0.
        Je verwijdert daarmee de mogelijkheid x = 0.
      </p>

      <p>
        Je houdt dan alleen:
      </p>

      <p class="formula">2x + 3 = 0</p>

      <p class="formula">x = −\frac{3}{2}</p>

      <p>
        De oplossing x = 0 is verloren gegaan.
      </p>

      <div class="callout">
        <p><strong>Deel nooit door een factor die nul kan zijn zonder die mogelijkheid apart te controleren.</strong></p>
        <p>
          Ontbinden en de nulproductregel gebruiken is hier veiliger:
          zo blijft ook x = 0 zichtbaar.
        </p>
      </div>


      <h3>6. Het verschil van kwadraten</h3>

      <p>
        Een bijzonder eenvoudige vorm ontstaat wanneer we het verschil
        van twee kwadraten hebben.
      </p>

      <p class="formula">x^{2} − 9 = 0</p>

      <p>
        Omdat 9 = 3²:
      </p>

      <p class="formula">x^{2} − 3^{2} = 0</p>

      <p>
        Uit les 2.2 kennen we:
      </p>

      <p class="formula">x^{2} − 3^{2} = (x − 3)(x + 3)</p>

      <p>
        Dus:
      </p>

      <p class="formula">(x − 3)(x + 3) = 0</p>

      <p>
        Volgens de nulproductregel:
      </p>

      <p class="formula">x − 3 = 0</p>

      <p class="formula">x + 3 = 0</p>

      <p>
        Daardoor:
      </p>

      <p class="formula">x = 3 of x = −3</p>

      <p>
        Hetzelfde patroon zien we bij:
      </p>

      <p class="formula">x^{2} − 16 = 0</p>

      <p class="formula">(x − 4)(x + 4) = 0</p>

      <p class="formula">x = 4 of x = −4</p>

      <p>
        Een zuiver kwadraat geeft een bijzonder geval:
      </p>

      <p class="formula">x^{2} = 0</p>

      <p class="formula">x = 0</p>

      <p>
        Hier is er maar één reële oplossing.
        Later zullen we dit een <strong>dubbele oplossing</strong> noemen.
      </p>


      <h3>7. De abc-formule</h3>

      <p>
        Niet elke kwadratische vergelijking kan gemakkelijk worden ontbonden.
        Daarom bestaat er een algemene formule.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">ax^{2} + bx + c = 0</p>

      <p>
        met a ≠ 0, kunnen de oplossingen worden gevonden met:
      </p>

      <p class="formula">x = \frac{−b ± √(b^{2} − 4ac)}{2a}</p>

      <p>
        Dit noemen we de <strong>abc-formule</strong>.
      </p>

      <p>
        De letters a, b en c zijn precies de drie coëfficiënten uit
        de standaardvorm:
      </p>

      <p class="formula">ax^{2} + bx + c = 0</p>

      <p>
        Het is daarom belangrijk om de vergelijking eerst in deze vorm
        te schrijven voordat je de formule toepast.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{2} + 2x − 1 = 0</p>

      <p>
        Hieruit lezen we:
      </p>

      <p class="formula">a = 1,\quad b = 2,\quad c = −1</p>

      <p>
        Eerst berekenen we het getal onder de wortel:
      </p>

      <p class="formula">b^{2} − 4ac = 2^{2} − 4 · 1 · (−1)</p>

      <p class="formula">= 4 + 4 = 8</p>

      <p>
        Daarna vullen we in:
      </p>

      <p class="formula">x = \frac{−2 ± √8}{2}</p>

      <p>
        Omdat √8 = 2√2:
      </p>

      <p class="formula">x = −1 ± √2</p>

      <p>
        Er zijn dus twee reële oplossingen:
      </p>

      <p class="formula">x = −1 + √2</p>

      <p class="formula">x = −1 − √2</p>

      <p>
        De oplossingen zijn geen gehele getallen.
        Dat betekent niet dat er iets mis is:
        een kwadratische vergelijking hoeft geen gehele oplossingen te hebben.
      </p>


      <h3>8. De discriminant D</h3>

      <p>
        In de abc-formule staat onder de wortel steeds dezelfde uitdrukking:
      </p>

      <p class="formula">b^{2} − 4ac</p>

      <p>
        Deze uitdrukking noemen we de <strong>discriminant</strong> en
        schrijven we als D:
      </p>

      <p class="formula">D = b^{2} − 4ac</p>

      <p>
        De discriminant vertelt ons hoeveel reële oplossingen de
        kwadratische vergelijking heeft.
      </p>

      <ul>
        <li><strong>D &gt; 0</strong> → twee verschillende reële oplossingen;</li>
        <li><strong>D = 0</strong> → één reële oplossing, een dubbele oplossing;</li>
        <li><strong>D &lt; 0</strong> → geen reële oplossingen.</li>
      </ul>

      <p>
        Waarom?
        In de abc-formule staat √D.
        Een vierkantswortel is in de reële getallen alleen gedefinieerd
        wanneer D ≥ 0.
      </p>

      <p>
        Als D &gt; 0, is √D positief en leveren de tekens + en −
        twee verschillende oplossingen.
      </p>

      <p>
        Als D = 0, wordt √D = 0.
        De twee tekens leveren dan dezelfde waarde.
      </p>

      <p>
        Als D &lt; 0, zou je de vierkantswortel van een negatief getal
        moeten nemen. Dat heeft geen reële waarde.
        Complexe getallen komen later aan bod.
      </p>

      <div class="callout">
        <p><strong>Bereken D voordat je de wortel neemt.</strong></p>
        <p>
          D bepaalt eerst of er nul, één of twee reële oplossingen zijn.
        </p>
      </div>


      <h3>9. Voorbeeld: D = 0</h3>

      <p>
        Neem:
      </p>

      <p class="formula">x^{2} − 6x + 9 = 0</p>

      <p>
        Hier is:
      </p>

      <p class="formula">a = 1,\quad b = −6,\quad c = 9</p>

      <p>
        Bereken D:
      </p>

      <p class="formula">D = (−6)^{2} − 4 · 1 · 9</p>

      <p class="formula">D = 36 − 36 = 0</p>

      <p>
        Er is dus één reële oplossing.
      </p>

      <p>
        We kunnen de vergelijking ook ontbinden:
      </p>

      <p class="formula">(x − 3)^{2} = 0</p>

      <p class="formula">x = 3</p>

      <p>
        De waarde 3 is hier een dubbele oplossing:
        beide oplossingen van de abc-formule vallen samen.
      </p>


      <h3>10. Voorbeeld: D &lt; 0</h3>

      <p>
        Beschouw:
      </p>

      <p class="formula">x^{2} + 1 = 0</p>

      <p>
        Hier is:
      </p>

      <p class="formula">a = 1,\quad b = 0,\quad c = 1</p>

      <p>
        Dus:
      </p>

      <p class="formula">D = 0^{2} − 4 · 1 · 1 = −4</p>

      <p>
        Omdat D &lt; 0, heeft de vergelijking geen reële oplossing.
      </p>

      <p>
        Dat kunnen we ook rechtstreeks zien:
        een reëel getal in het kwadraat is nooit negatief.
        De vergelijking zou echter vragen:
      </p>

      <p class="formula">x^{2} = −1</p>

      <p>
        Dat kan niet met reële getallen.
      </p>

      <p>
        Complexe oplossingen bestaan wel, maar die behandelen we later.
      </p>


      <h3>11. √a is niet hetzelfde als x² = a</h3>

      <p>
        Uit les 2.6 weten we dat √9 de <strong>hoofdwortel</strong> is:
      </p>

      <p class="formula">√9 = 3</p>

      <p>
        De hoofdwortel is altijd niet-negatief.
      </p>

      <p>
        De vergelijking:
      </p>

      <p class="formula">x^{2} = 9</p>

      <p>
        vraagt daarentegen welke waarden van x een kwadraat van 9 geven.
        Dat zijn er twee:
      </p>

      <p class="formula">x = 3 of x = −3</p>

      <p>
        Kort kunnen we schrijven:
      </p>

      <p class="formula">x = ±3</p>

      <p>
        Dezelfde gedachte zit in de abc-formule in het symbool ±.
      </p>

      <p>
        Schrijf bij:
      </p>

      <p class="formula">x^{2} = a</p>

      <p>
        dus niet zomaar:
      </p>

      <p class="formula">x = √a</p>

      <p>
        want dan verlies je de negatieve oplossing.
        Voor a ≥ 0 zijn de oplossingen:
      </p>

      <p class="formula">x = ±√a</p>

      <div class="callout">
        <p><strong>Hoofdwortel versus vergelijking:</strong></p>
        <p>
          √a is één niet-negatieve waarde.
          De vergelijking x² = a kan twee oplossingen hebben:
          een positieve en een negatieve.
        </p>
      </div>


      <h3>12. Kwadraatafsplitsen</h3>

      <p>
        De abc-formule lijkt misschien een formule die uit de lucht komt vallen.
        Ze is echter gebaseerd op dezelfde algebra die we al kennen.
      </p>

      <p>
        We kunnen bijvoorbeeld:
      </p>

      <p class="formula">x^{2} + 6x + 5 = 0</p>

      <p>
        aanvullen tot een volledig kwadraat.
        We voegen 9 toe en trekken 9 weer af:
      </p>

      <p class="formula">x^{2} + 6x + 9 − 9 + 5 = 0</p>

      <p>
        De eerste drie termen vormen een kwadraat:
      </p>

      <p class="formula">(x + 3)^{2} − 4 = 0</p>

      <p>
        Dus:
      </p>

      <p class="formula">(x + 3)^{2} = 4</p>

      <p>
        Nu gebruiken we opnieuw het onderscheid uit les 2.6:
      </p>

      <p class="formula">x + 3 = 2</p>

      <p>
        of:
      </p>

      <p class="formula">x + 3 = −2</p>

      <p>
        Daardoor:
      </p>

      <p class="formula">x = −1</p>

      <p class="formula">x = −5</p>

      <p>
        Dit is dezelfde onderliggende gedachte als bij de abc-formule:
        een kwadratische vergelijking wordt uiteindelijk teruggebracht
        tot een situatie waarin een kwadraat een bepaalde waarde heeft.
      </p>

      <p>
        In deze fase is het vooral belangrijk om het principe te herkennen.
        De abc-formule geeft ons een vaste methode zonder dat we telkens
        zelf het volledige kwadraat hoeven af te splitsen.
      </p>


      <h3>13. Welke methode gebruik je?</h3>

      <p>
        Er bestaat niet maar één manier om een kwadratische vergelijking
        op te lossen.
        De structuur van de vergelijking bepaalt vaak welke methode het
        handigst is.
      </p>

      <ul>
        <li>
          <strong>Gemeenschappelijke factor:</strong>
          haal de factor buiten haakjes en gebruik de nulproductregel.
        </li>
        <li>
          <strong>Verschil van kwadraten:</strong>
          gebruik <span class="formula-inline">a² − b² = (a − b)(a + b)</span>.
        </li>
        <li>
          <strong>Gemakkelijk ontbindbare trinomium:</strong>
          zoek de juiste factoren.
        </li>
        <li>
          <strong>Niet eenvoudig ontbindbaar:</strong>
          gebruik de abc-formule.
        </li>
        <li>
          <strong>Volledig kwadraat:</strong>
          kwadraatafsplitsen kan de structuur zichtbaar maken.
        </li>
      </ul>

      <p>
        De abc-formule is de algemene methode.
        Ontbinden is vaak sneller wanneer de factoren onmiddellijk zichtbaar zijn.
      </p>


      <h3>14. Controleer je oplossingen</h3>

      <p>
        Een gevonden oplossing kun je altijd terugplaatsen in de
        <strong>oorspronkelijke vergelijking</strong>.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">x^{2} − 5x + 6 = 0</p>

      <p>
        We vonden x = 2 en x = 3.
      </p>

      <p>
        Voor x = 2:
      </p>

      <p class="formula">2^{2} − 5 · 2 + 6 = 4 − 10 + 6 = 0</p>

      <p>
        Voor x = 3:
      </p>

      <p class="formula">3^{2} − 5 · 3 + 6 = 9 − 15 + 6 = 0</p>

      <p>
        Beide waarden zijn dus inderdaad oplossingen.
      </p>

      <p>
        Controle is vooral nuttig wanneer je verschillende algebraïsche
        stappen hebt uitgevoerd of wanneer je de abc-formule gebruikt.
      </p>


      <h3>15. Korte werkwijze</h3>

      <ol>
        <li>breng alles naar één lid zodat rechts 0 staat;</li>
        <li>schrijf de vergelijking indien nodig in de vorm <span class="formula-inline">ax² + bx + c = 0</span>;</li>
        <li>probeer eerst een gemeenschappelijke factor of een verschil van kwadraten;</li>
        <li>probeer eventueel te ontbinden in factoren;</li>
        <li>lukt dat niet eenvoudig, gebruik dan de abc-formule;</li>
        <li>bereken bij de abc-formule eerst <span class="formula-inline">D = b² − 4ac</span>;</li>
        <li>bij D &gt; 0 zijn er twee verschillende reële oplossingen;</li>
        <li>bij D = 0 is er één dubbele reële oplossing;</li>
        <li>bij D &lt; 0 zijn er geen reële oplossingen;</li>
        <li>vergeet bij <span class="formula-inline">x² = a</span> de negatieve oplossing niet;</li>
        <li>controleer de gevonden oplossingen in de oorspronkelijke vergelijking.</li>
      </ol>

      <div class="callout">
        <p><strong>Kernidee:</strong></p>

        <p>
          Zodra x² verschijnt, kan een vergelijking meerdere oplossingen hebben.
          Een kwadratische vergelijking kan twee, één of geen reële oplossingen
          hebben.
        </p>

        <p>
          Als de vergelijking in factoren kan worden geschreven,
          gebruiken we de nulproductregel.
          Dat is vaak de snelste methode.
        </p>

        <p>
          Wanneer ontbinden niet eenvoudig lukt, geeft de abc-formule
          een algemene methode:
        </p>

        <p class="formula">x = \frac{−b ± √(b^{2} − 4ac)}{2a}</p>

        <p>
          De discriminant
          <span class="formula-inline">D = b² − 4ac</span>
          bepaalt hoeveel reële oplossingen er zijn.
        </p>

        <p>
          De belangrijkste ideeën uit deze les bouwen rechtstreeks verder
          op de vorige lessen:
          ontbinden uit 2.2, balansregels uit 2.3 en wortels en machten uit 2.6.
        </p>

        <p>
          Later, bij de functies, zullen we ontdekken dat deze oplossingen
          ook een meetkundige betekenis hebben:
          ze zijn de waarden van x waarvoor de parabool de x-as snijdt.
        </p>
      </div>
    `
  },
    {
    id: "2.8",
    title: "Coördinaten & analytische meetkunde",
    goal: "Hoe vertalen we ruimte naar getallen?",
    theory: /* html */`
      <h2>Coördinaten & analytische meetkunde</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>een punt als koppel (x, y) plaatsen</li>
        <li>de x-as, y-as en oorsprong herkennen</li>
        <li>kwadranten herkennen</li>
        <li>de afstand tussen twee punten berekenen</li>
        <li>het midden van een lijnstuk berekenen</li>
        <li>de helling van een rechte berekenen en interpreteren</li>
        <li>de vergelijking van een rechte opstellen</li>
        <li>evenwijdige en loodrechte rechten herkennen</li>
        <li>het snijpunt van twee rechten berekenen</li>
        <li>begrijpen hoe meetkundige problemen in algebra kunnen worden vertaald</li>
      </ul>

      <p>
        Op de getallenlijn hadden we één getal nodig om een positie te beschrijven.
        In een vlak hebben we twee getallen nodig.
        Elk punt krijgt daarom een <strong>koppel getallen</strong>.
      </p>

      <p>
        Daardoor kunnen we meetkundige eigenschappen zoals afstand, richting
        en snijpunten met algebra beschrijven.
        Dat noemen we <strong>analytische meetkunde</strong>.
      </p>

      <p>
        Het basisidee is eenvoudig:
      </p>

      <p class="formula">punt → coördinaten → berekening</p>


      <h3>1. Twee assen</h3>

      <p>
        Een coördinatenstelsel bestaat uit twee loodrechte getallenlijnen:
        de horizontale <strong>x-as</strong> en de verticale <strong>y-as</strong>.
      </p>

      <p>
        De twee assen snijden elkaar in de <strong>oorsprong</strong>:
      </p>

      <p class="formula">(0, 0)</p>

      <p>
        Een punt in het vlak schrijven we als een geordend paar:
      </p>

      <p class="formula">(x, y)</p>

      <p>
        De eerste coördinaat geeft aan waar we ons op de x-as bevinden.
        De tweede coördinaat geeft aan hoe hoog of laag het punt ligt.
      </p>

      <p>
        Je kunt het lezen als:
        <strong>eerst horizontaal, daarna verticaal</strong>.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">A(3, 2)</p>

      <p>
        betekent 3 naar rechts en daarna 2 omhoog.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">B(−2, 4)</p>

      <p>
        gaan we 2 naar links en 4 omhoog.
      </p>

      <p>
        Een punt op de x-as heeft steeds y = 0:
      </p>

      <p class="formula">y = 0</p>

      <p>
        Een punt op de y-as heeft steeds x = 0:
      </p>

      <p class="formula">x = 0</p>


      <h3>2. De vier kwadranten</h3>

      <p>
        De twee assen verdelen het vlak in vier gebieden.
        Die noemen we de <strong>kwadranten</strong>.
      </p>

      <ul>
        <li><strong>I:</strong> x &gt; 0 en y &gt; 0;</li>
        <li><strong>II:</strong> x &lt; 0 en y &gt; 0;</li>
        <li><strong>III:</strong> x &lt; 0 en y &lt; 0;</li>
        <li><strong>IV:</strong> x &gt; 0 en y &lt; 0.</li>
      </ul>

      <div class="theory-image">
        <img
          src="assets/assenstelsel-kwadranten.svg"
          alt="Assenstelsel met oorsprong, vier kwadranten en het punt A(3, 2) in kwadrant I."
        >
      </div>

      <p>
        De tekens van x en y bepalen dus in welk kwadrant een punt ligt.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">A(3, 2)</p>

      <p>
        heeft twee positieve coördinaten en ligt dus in kwadrant I.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">B(−2, 4)</p>

      <p>
        is x negatief en y positief.
        B ligt daarom in kwadrant II.
      </p>

      <p>
        Punten die precies op een as liggen, behoren tot geen van de vier
        kwadranten.
      </p>


      <h3>3. Afstand horizontaal en verticaal</h3>

      <p>
        Als twee punten dezelfde y-coördinaat hebben, liggen ze op dezelfde
        horizontale lijn.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">A(2, 3),\quad B(7, 3)</p>

      <p>
        De y-coördinaten zijn gelijk.
        De afstand wordt dus bepaald door het verschil tussen de x-coördinaten:
      </p>

      <p class="formula">d = 7 − 2 = 5</p>

      <p>
        De afstand is 5.
      </p>

      <p>
        Algemeen is de horizontale afstand:
      </p>

      <p class="formula">d = |x_{2} − x_{1}|</p>

      <p>
        Voor twee punten met dezelfde x-coördinaat geldt op dezelfde manier:
      </p>

      <p class="formula">d = |y_{2} − y_{1}|</p>

      <p>
        De absolute waarde zorgt ervoor dat een afstand niet negatief wordt.
      </p>

      <div class="theory-image">
        <img
          src="assets/afstand-driehoek.svg"
          alt="Van A(1, 2) naar B(4, 6): 3 naar rechts, 4 omhoog, afstand 5 als schuine zijde."
        >
      </div>


      <h3>4. De afstand tussen twee willekeurige punten</h3>

      <p>
        Wat gebeurt er wanneer twee punten niet recht boven elkaar of naast
        elkaar liggen?
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">A(1, 2),\quad B(4, 6)</p>

      <p>
        Om van A naar B te gaan, bewegen we:
      </p>

      <p class="formula">4 − 1 = 3</p>

      <p>
        eenheden horizontaal en:
      </p>

      <p class="formula">6 − 2 = 4</p>

      <p>
        eenheden verticaal.
      </p>

      <p>
        Die twee afstanden vormen de rechthoekszijden van een
        <strong>rechthoekige driehoek</strong>.
        De afstand AB is de schuine zijde.
      </p>

      <p>
        Met de stelling van Pythagoras:
      </p>

      <p class="formula">d^{2} = 3^{2} + 4^{2}</p>

      <p class="formula">d^{2} = 9 + 16 = 25</p>

      <p class="formula">d = √25 = 5</p>

      <p>
        De afstand tussen A en B is dus 5.
      </p>

      <p>
        Voor willekeurige punten
        <span class="formula-inline">A(x_{1}, y_{1})</span> en
        <span class="formula-inline">B(x_{2}, y_{2})</span> krijgen we:
      </p>

      <p class="formula">d = √((x_{2} − x_{1})^{2} + (y_{2} − y_{1})^{2})</p>

      <p>
        Dit is de <strong>afstandformule</strong>.
        Ze is rechtstreeks gebaseerd op Pythagoras.
      </p>

      <div class="callout">
        <p><strong>Afstand is altijd niet-negatief.</strong></p>
        <p>
          De volgorde van de punten maakt niet uit.
          Door de verschillen te kwadrateren verdwijnen eventuele negatieve tekens.
        </p>
      </div>


      <h3>5. Het midden van een lijnstuk</h3>

      <p>
        We kunnen niet alleen de afstand tussen twee punten berekenen,
        maar ook het punt precies halverwege bepalen.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">A(1, 2),\quad B(5, 8)</p>

      <p>
        Het midden ligt halverwege op beide assen.
        Voor de x-coördinaat nemen we daarom het gemiddelde van 1 en 5:
      </p>

      <p class="formula">\frac{1 + 5}{2} = 3</p>

      <p>
        Voor de y-coördinaat:
      </p>

      <p class="formula">\frac{2 + 8}{2} = 5</p>

      <p>
        Het midden is dus:
      </p>

      <p class="formula">M(3, 5)</p>

      <p>
        Algemeen is het midden van
        <span class="formula-inline">A(x_{1}, y_{1})</span> en
        <span class="formula-inline">B(x_{2}, y_{2})</span>:
      </p>

      <p class="formula">M = (\frac{x_{1} + x_{2}}{2}, \frac{y_{1} + y_{2}}{2})</p>

      <p>
        We nemen dus voor elke coördinaat afzonderlijk het gemiddelde.
      </p>

      <p>
        Een controle is mogelijk:
        het midden moet op gelijke afstand van A en B liggen.
      </p>


      <h3>6. Helling: hoe steil is een rechte?</h3>

      <p>
        Een rechte kan stijgen, dalen of horizontaal lopen.
        Om de steilheid van een rechte te beschrijven gebruiken we de
        <strong>helling</strong>.
      </p>

      <p>
        De helling wordt aangeduid met de letter <strong>m</strong>.
      </p>

      <p>
        Neem twee punten:
      </p>

      <p class="formula">A(1, 2),\quad B(4, 8)</p>

      <p>
        Van A naar B verandert x met:
      </p>

      <p class="formula">4 − 1 = 3</p>

      <p>
        en verandert y met:
      </p>

      <p class="formula">8 − 2 = 6</p>

      <p>
        De helling is de verandering in y gedeeld door de verandering in x:
      </p>

      <p class="formula">m = \frac{6}{3} = 2</p>

      <p>
        Dat betekent:
        voor elke stap van 1 naar rechts gaat de rechte 2 eenheden omhoog.
      </p>

      <p>
        Algemeen:
      </p>

      <p class="formula">m = \frac{y_{2} − y_{1}}{x_{2} − x_{1}}</p>

      <div class="callout">
        <p><strong>Helling = verandering omhoog gedeeld door verandering opzij.</strong></p>
        <p>
          Je kunt m dus zien als "hoeveel verandert y wanneer x met 1 toeneemt?"
        </p>
      </div>


      <h3>7. Wat vertelt de helling?</h3>

      <p>
        Het teken van m vertelt of de rechte stijgt of daalt.
      </p>

      <ul>
        <li><strong>m &gt; 0:</strong> de rechte stijgt van links naar rechts;</li>
        <li><strong>m &lt; 0:</strong> de rechte daalt van links naar rechts;</li>
        <li><strong>m = 0:</strong> de rechte is horizontaal.</li>
      </ul>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p>
        heeft helling 2.
        Voor elke toename van x met 1 neemt y toe met 2.
      </p>

      <p>
        Bij:
      </p>

      <p class="formula">y = −3x + 4</p>

      <p>
        is de helling −3.
        Voor elke stap naar rechts gaat de rechte 3 eenheden naar beneden.
      </p>

      <p>
        Een verticale rechte vormt een speciaal geval.
        Daar is x voor alle punten hetzelfde.
        De noemer in de hellingsformule zou dan 0 zijn.
      </p>

      <p>
        Delen door nul kan niet, dus een verticale rechte heeft
        <strong>geen gewone helling m</strong>.
      </p>

      <p>
        Een verticale rechte kan bijvoorbeeld worden geschreven als:
      </p>

      <p class="formula">x = 3</p>


      <h3>8. De vergelijking van een rechte</h3>

      <p>
        Een rechte bestaat uit oneindig veel punten.
        We kunnen al die punten beschrijven met één vergelijking.
      </p>

      <p>
        Voor een niet-verticale rechte gebruiken we:
      </p>

      <p class="formula">y = mx + b</p>

      <p>
        Hierin is:
      </p>

      <ul>
        <li><strong>m</strong> de helling;</li>
        <li><strong>b</strong> het snijpunt met de y-as.</li>
      </ul>

      <p>
        Waarom is b het snijpunt met de y-as?
        Op de y-as geldt x = 0.
        Invullen geeft:
      </p>

      <p class="formula">y = m · 0 + b = b</p>

      <p>
        Het snijpunt is dus:
      </p>

      <p class="formula">(0, b)</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p>
        heeft helling 2 en snijdt de y-as in:
      </p>

      <p class="formula">(0, 1)</p>

      <p>
        Het punt (3, 7) ligt op deze rechte, want:
      </p>

      <p class="formula">2 · 3 + 1 = 7</p>

        <div class="theory-image">
        <img
          src="assets/rechte-2x-plus-1.svg"
          alt="De lijn y = 2x + 1: helling 2, snijpunt (0, 1), punt (3, 7) erop."
        >
      </div>
      <p>
        Het voldoet dus aan de vergelijking van de rechte.
      </p>


      <h3>9. Een rechte opstellen met één punt</h3>

      <p>
        Stel dat we de helling m kennen en één punt van de rechte kennen:
      </p>

      <p class="formula">P(x_{0}, y_{0})</p>

      <p>
        We kunnen dan de rechte schrijven als:
      </p>

      <p class="formula">y − y_{0} = m(x − x_{0})</p>

      <p>
        Deze vorm zegt eigenlijk:
        de verandering in y is de helling maal de verandering in x.
      </p>

      <p>
        Stel:
      </p>

      <p class="formula">m = 2</p>

      <p class="formula">P(3, 7)</p>

      <p>
        Dan:
      </p>

      <p class="formula">y − 7 = 2(x − 3)</p>

      <p>
        Werk de haakjes weg:
      </p>

      <p class="formula">y − 7 = 2x − 6</p>

      <p>
        Tel 7 op:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p>
        We krijgen dus dezelfde rechte als in het vorige voorbeeld.
      </p>

      <div class="callout">
        <p><strong>Verschillende vergelijkingen kunnen dezelfde rechte beschrijven.</strong></p>
        <p>
          De vorm <span class="formula-inline">y = mx + b</span> is handig
          wanneer de helling en het y-snijpunt bekend zijn.
          De vorm <span class="formula-inline">y − y₀ = m(x − x₀)</span>
          is handig wanneer één punt en de helling bekend zijn.
        </p>
      </div>


      <h3>10. Evenwijdige rechten</h3>

      <p>
        Twee niet-verticale rechten zijn evenwijdig wanneer ze dezelfde
        helling hebben.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p class="formula">y = 2x − 5</p>

      <p>
        Beide hebben:
      </p>

      <p class="formula">m = 2</p>

      <p>
        Ze stijgen dus even snel.
        Omdat hun y-snijpunten verschillend zijn, vallen ze niet samen
        en snijden ze elkaar niet.
      </p>

      <p>
        Algemeen:
      </p>

      <p class="formula">m_{1} = m_{2}</p>

      <p>
        betekent voor twee verschillende niet-verticale rechten dat ze
        evenwijdig zijn.
      </p>

      <p>
        Twee rechten met dezelfde helling en hetzelfde y-snijpunt zijn
        eigenlijk dezelfde rechte.
      </p>


      <h3>11. Loodrechte rechten</h3>

      <p>
        Twee rechten staan <strong>loodrecht</strong> op elkaar wanneer
        ze een rechte hoek van 90° vormen.
      </p>

      <p>
        Voor twee niet-verticale rechten geldt:
      </p>

      <p class="formula">m_{1} · m_{2} = −1</p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">m_{1} = 2</p>

      <p class="formula">m_{2} = −\frac{1}{2}</p>

      <p>
        Dan:
      </p>

      <p class="formula">2 · (−\frac{1}{2}) = −1</p>

      <p>
        De rechten staan dus loodrecht op elkaar.
      </p>

      <p>
        Een horizontale en een verticale rechte staan ook loodrecht op elkaar.
        Daar kunnen we de productregel voor de hellingen niet gebruiken,
        omdat een verticale rechte geen gewone helling heeft.
      </p>


      <h3>12. Het snijpunt van twee rechten</h3>

      <p>
        Wanneer twee rechten elkaar snijden, is er één punt dat aan
        <strong>beide vergelijkingen</strong> voldoet.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p class="formula">y = −x + 4</p>

      <p>
        In het snijpunt hebben beide uitdrukkingen dezelfde y-waarde.
        We mogen ze daarom aan elkaar gelijkstellen:
      </p>

      <p class="formula">2x + 1 = −x + 4</p>

      <p>
        Dit is precies het soort vergelijking dat we in les 2.3 leerden oplossen.
      </p>

      <p>
        Trek x af:
      </p>

      <p class="formula">x + 1 = −x + 4</p>

      <p>
        Tel x op:
      </p>

      <p class="formula">3x + 1 = 4</p>

      <p>
        Trek 1 af:
      </p>

      <p class="formula">3x = 3</p>

      <p>
        Dus:
      </p>

      <p class="formula">x = 1</p>

      <p>
        Vul x = 1 in één van de oorspronkelijke vergelijkingen:
      </p>

      <p class="formula">y = 2 · 1 + 1 = 3</p>

      <p>
        Het snijpunt is:
      </p>

      <p class="formula">(1, 3)</p>

      <p>
        Dit is een mooi voorbeeld van hoe algebra en meetkunde samenwerken:
        een meetkundig snijpunt wordt gevonden door een vergelijking op te lossen.
      </p>


      <h3>13. Wanneer is er geen of oneindig veel snijpunten?</h3>

      <p>
        Niet elke twee rechten hebben precies één snijpunt.
      </p>

      <p>
        Twee verschillende evenwijdige rechten hebben geen gemeenschappelijk punt.
        Bijvoorbeeld:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p class="formula">y = 2x − 5</p>

      <p>
        Als we ze gelijkstellen, krijgen we:
      </p>

      <p class="formula">2x + 1 = 2x − 5</p>

      <p>
        Trek 2x af:
      </p>

      <p class="formula">1 = −5</p>

      <p>
        Dat is onmogelijk.
        Er is dus geen snijpunt.
      </p>

      <p>
        Als twee vergelijkingen exact dezelfde rechte beschrijven,
        zijn er juist oneindig veel gemeenschappelijke punten.
      </p>

      <p>
        Dit sluit rechtstreeks aan bij de verschillende mogelijkheden
        die we bij vergelijkingen in les 2.3 zagen:
        één oplossing, geen oplossing of oneindig veel oplossingen.
      </p>


      <h3>14. Van meetkunde naar algebra</h3>

      <p>
        Klassieke meetkunde beschrijft punten, lijnen, afstanden en vormen.
        In de analytische meetkunde geven we deze objecten coördinaten
        en vergelijkingen.
      </p>

      <p>Een aantal belangrijke vertalingen zijn:</p>

      <ul>
        <li><strong>punt</strong> → (x, y);</li>
        <li><strong>horizontale of verticale afstand</strong> → verschil van coördinaten;</li>
        <li><strong>afstand tussen twee willekeurige punten</strong> → Pythagoras en een wortel;</li>
        <li><strong>middenpunt</strong> → gemiddelde van de coördinaten;</li>
        <li><strong>helling</strong> → verandering in y gedeeld door verandering in x;</li>
        <li><strong>rechte</strong> → een vergelijking zoals y = mx + b;</li>
        <li><strong>snijpunt</strong> → een punt dat aan twee vergelijkingen voldoet.</li>
      </ul>

      <p>
        Daardoor kunnen we een meetkundig probleem vertalen naar algebra,
        het algebraïsch oplossen en het resultaat daarna weer meetkundig
        interpreteren.
      </p>


      <h3>15. Een vaste werkwijze</h3>

      <p>
        Bij problemen in het coördinatenvlak helpt een vaste aanpak.
      </p>

      <ol>
        <li>schrijf de gegeven punten en coördinaten duidelijk op;</li>
        <li>bepaal welke grootheid gevraagd wordt;</li>
        <li>kies de juiste formule of vergelijking;</li>
        <li>vul de coördinaten zorgvuldig in;</li>
        <li>werk de algebra stap voor stap uit;</li>
        <li>controleer of het antwoord meetkundig betekenisvol is.</li>
      </ol>

      <p>
        Bij een snijpunt van twee rechten is de kernstap:
        <strong>stel de twee uitdrukkingen voor y aan elkaar gelijk.</strong>
      </p>

      <p>
        Bij een afstand is de kernstap:
        <strong>maak een rechthoekige driehoek en gebruik Pythagoras.</strong>
      </p>

      <p>
        Bij een rechte is de kernstap:
        <strong>denk in termen van helling en verandering.</strong>
      </p>


      <div class="callout">
        <p><strong>Kernidee:</strong></p>

        <p>
          Met coördinaten kunnen we elk punt in het vlak met twee getallen
          beschrijven.
        </p>

        <p>
          Daardoor kunnen we meetkundige eigenschappen vertalen naar algebra:
          afstanden worden berekeningen met Pythagoras,
          een middenpunt wordt een gemiddelde,
          een rechte krijgt een vergelijking en een snijpunt wordt
          een stelsel van vergelijkingen.
        </p>

        <p>
          Analytische meetkunde vormt zo een brug tussen
          <strong>meetkunde en algebra</strong>.
        </p>

        <p>
          Later zullen we zien dat functies en grafieken deze ideeën nog verder
          uitbreiden: een vergelijking beschrijft dan niet alleen een rechte,
          maar ook parabolen en andere krommen.
        </p>
      </div>
    `
  },
  
    {
    id: "2.9",
    title: "Euclidische meetkunde",
    goal: "Welke wetten beheersen vormen en hoeken?",
    theory: /* html */`
      <h2>Euclidische meetkunde</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>punten, rechten, lijnstukken en hoeken als wiskundige idealen herkennen</li>
        <li>verschillende soorten hoeken herkennen en ermee rekenen</li>
        <li>de belangrijkste eigenschappen van driehoeken gebruiken</li>
        <li>evenwijdige en loodrechte lijnen herkennen</li>
        <li>de stelling van Pythagoras toepassen</li>
        <li>omtrek, oppervlakte en volume van eenvoudige figuren berekenen</li>
        <li>begrijpen hoe meetkundige eigenschappen later met coördinaten en algebra kunnen worden beschreven</li>
      </ul>

      <p>
        In les 2.8 gaven we punten en lijnen coördinaten en vergelijkingen.
        Nu kijken we eerst naar de <strong>meetkundige eigenschappen zelf</strong>:
        punten, lijnen, hoeken, driehoeken, afstanden en oppervlakten.
      </p>

      <p>
        De meetkunde die we hier gebruiken, is de klassieke
        <strong>Euclidische meetkunde</strong>.
        Ze beschrijft meetkundige figuren in een vlak waarin rechte lijnen,
        afstanden en hoeken zich volgens vaste regels gedragen.
      </p>

      <p>
        De regels uit deze les vormen een basis voor veel latere wiskunde.
        Vooral Pythagoras, gelijkvormigheid en de eigenschappen van hoeken
        zullen nog verschillende keren terugkomen.
      </p>


      <h3>1. Een ideaal in plaats van een voorwerp</h3>

      <p>
        Een potlood heeft dikte en een getekende lijn is nooit perfect recht.
        Toch tekenen we in de meetkunde een <strong>rechte</strong>
        als iets zonder dikte en zonder kromming.
      </p>

      <p>
        Ook een punt heeft in de meetkunde geen afmetingen:
        het heeft geen lengte, breedte of oppervlakte.
        Een vlak wordt beschouwd als perfect vlak.
      </p>

      <p>
        Dit is geen slordige benadering, maar een vorm van
        <strong>abstractie</strong>.
        Net zoals een letter in algebra een getal kan voorstellen,
        stelt een meetkundig begrip een ideale structuur voor.
      </p>

      <p>
        We onderscheiden onder andere:
      </p>

      <ul>
        <li><strong>punt:</strong> een positie zonder afmetingen;</li>
        <li><strong>rechte:</strong> een oneindig lange rechte lijn;</li>
        <li><strong>half rechte:</strong> een rechte die aan één kant van een beginpunt oneindig doorloopt;</li>
        <li><strong>lijnstuk:</strong> het begrensde deel van een rechte tussen twee punten.</li>
      </ul>


      <h3>2. Hoeken</h3>

      <p>
        Een <strong>hoek</strong> ontstaat wanneer twee halfrechten hetzelfde
        beginpunt hebben.
        Dat gemeenschappelijke punt noemen we het <strong>hoekpunt</strong>.
      </p>

      <p>
        De grootte van een hoek meten we meestal in graden.
        Een volledige draai is:
      </p>

      <p class="formula">360°</p>

      <p>
        Een halve draai is:
      </p>

      <p class="formula">180°</p>

      <p>
        Een kwart draai is:
      </p>

      <p class="formula">90°</p>

      <p>Belangrijke soorten hoeken zijn:</p>

      <ul>
        <li><strong>scherpe hoek:</strong> kleiner dan 90°;</li>
        <li><strong>rechte hoek:</strong> precies 90°;</li>
        <li><strong>stompe hoek:</strong> groter dan 90° maar kleiner dan 180°;</li>
        <li><strong>gestrekte hoek:</strong> precies 180°.</li>
      </ul>

            <div class="theory-image">
        <img
          src="assets/hoektypen.svg"
          alt="Vier hoeken: scherp, recht, stomp en gestrekt."
        >
      </div>


      <p>
        Twee lijnen die elkaar onder een rechte hoek snijden,
        noemen we <strong>loodrecht</strong>.
      </p>

      <p>
        In les 2.8 zagen we dezelfde eigenschap vanuit algebra:
        voor twee niet-verticale rechten zijn de hellingen loodrecht
        wanneer hun product −1 is.
      </p>


      <h3>3. Hoeken op een rechte lijn</h3>

      <p>
        Twee aangrenzende hoeken die samen een rechte lijn vormen,
        hebben samen 180°.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">70° + 110° = 180°</p>

      <p>
        Als één van de twee hoeken bekend is, kunnen we de andere vinden
        door af te trekken van 180°.
      </p>

      <p>
        Bij een rechte hoek geldt op dezelfde manier:
        twee aangrenzende hoeken die samen een rechte hoek vormen,
        hebben samen 90°.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">35° + 55° = 90°</p>

      <p>
        Deze eenvoudige hoekrelaties vormen later de basis voor
        redeneringen met driehoeken en evenwijdige lijnen.
      </p>


      <h3>4. Evenwijdige en loodrechte lijnen</h3>

      <p>
        Twee rechten zijn <strong>evenwijdig</strong> wanneer ze in hetzelfde
        vlak liggen en elkaar nooit snijden.
      </p>
      <div class="theory-image">
        <img
          src="assets/evenwijdig-dwarsliggende.svg"
          alt="Twee evenwijdige lijnen a en b, gesneden door dwarsliggende d. De overeenkomstige hoeken α zijn gelijk."
        >
      </div>

      <p>
        Evenwijdige rechten hebben overal dezelfde richting.
        In de analytische meetkunde van les 2.8 zagen we dit als:
      </p>

      <p class="formula">m_{1} = m_{2}</p>

      <p>
        Twee rechten zijn <strong>loodrecht</strong> wanneer ze elkaar
        onder een hoek van 90° snijden.
      </p>

      <p>
        Voor twee niet-verticale rechten geldt:
      </p>

      <p class="formula">m_{1} · m_{2} = −1</p>

      <p>
        Hier zien we opnieuw hoe een meetkundige eigenschap
        in algebra kan worden uitgedrukt.
      </p>

      <p>
        Wanneer een rechte een paar evenwijdige rechten snijdt,
        ontstaan verschillende gelijke en aanvullende hoeken.
        Zo zijn overeenkomstige hoeken gelijk en zijn binnenhoeken
        aan dezelfde kant samen 180°.
      </p>

      <p>
        Deze hoekrelaties zijn bijzonder nuttig wanneer we onbekende
        hoeken in meetkundige figuren willen berekenen.
      </p>


      <h3>5. Driehoeken</h3>

      <p>
        Een driehoek heeft drie zijden, drie hoekpunten en drie binnenhoeken.
      </p>

      <p>
        De som van de drie binnenhoeken is altijd:
      </p>

      <p class="formula">180°</p>

      <p>
        Ken je twee hoeken, dan volgt de derde door af te trekken van 180°.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">50° + 60° + x = 180°</p>

      <p class="formula">x = 70°</p>

      <p>
        Er bestaan verschillende manieren om driehoeken te classificeren.
      </p>

      <p><strong>Volgens de zijden:</strong></p>

      <ul>
        <li><strong>gelijkzijdig:</strong> drie gelijke zijden;</li>
        <li><strong>gelijkbenig:</strong> twee gelijke zijden;</li>
        <li><strong>ongelijkzijdig:</strong> alle zijden verschillend.</li>
      </ul>

      <p><strong>Volgens de hoeken:</strong></p>

      <ul>
        <li><strong>scherphoekig:</strong> alle hoeken zijn kleiner dan 90°;</li>
        <li><strong>rechthoekig:</strong> één hoek is 90°;</li>
        <li><strong>stomphoekig:</strong> één hoek is groter dan 90°.</li>
      </ul>

      <p>
        Een rechthoekige driehoek heeft precies één rechte hoek.
        De zijde tegenover die rechte hoek noemen we de
        <strong>schuine zijde</strong> of <strong>hypotenusa</strong>.
      </p>

      <div class="callout">
        <p><strong>180° is de vaste hoekvoorraad van een driehoek.</strong></p>
        <p>
          Daardoor kan een driehoek nooit twee rechte hoeken hebben
          en kan hij ook nooit meer dan één stompe hoek hebben.
        </p>
      </div>


      <h3>6. Eigenschappen van gelijkbenige en gelijkzijdige driehoeken</h3>

      <p>
        Bij een <strong>gelijkbenige driehoek</strong> zijn twee zijden even lang.
        De hoeken tegenover die gelijke zijden zijn ook gelijk.
      </p>

      <p>
        Als twee basishoeken bijvoorbeeld 50° zijn:
      </p>

      <p class="formula">50° + 50° + x = 180°</p>

      <p class="formula">x = 80°</p>

      <p>
        Bij een <strong>gelijkzijdige driehoek</strong> zijn alle drie de zijden
        gelijk. Daardoor zijn ook de drie hoeken gelijk.
      </p>

      <p class="formula">180° / 3 = 60°</p>

      <p>
        Elke hoek van een gelijkzijdige driehoek is dus 60°.
      </p>

      <p>
        Deze eigenschappen laten zien dat gelijke lengtes en gelijke hoeken
        vaak rechtstreeks met elkaar verbonden zijn.
      </p>


      <h3>7. Buitenhoeken van een driehoek</h3>

      <p>
        Wanneer we één zijde van een driehoek verlengen,
        ontstaat een <strong>buitenhoek</strong>.
      </p>

      <p>
        De binnenhoek ernaast en de buitenhoek vormen samen een gestrekte hoek:
      </p>

      <p class="formula">binnenhoek + buitenhoek = 180°</p>

      <p>
        Omdat de drie binnenhoeken van een driehoek samen 180° zijn,
        volgt daaruit dat een buitenhoek gelijk is aan de som van
        de twee niet-aanliggende binnenhoeken.
      </p>

      <p>
        Bijvoorbeeld, als de twee niet-aanliggende binnenhoeken 50° en 70°
        zijn:
      </p>

      <p class="formula">buitenhoek = 50° + 70° = 120°</p>

      <p>
        Dit is een krachtige manier om onbekende hoeken te berekenen.
      </p>


      <h3>8. Pythagoras</h3>

      <p>
        In een rechthoekige driehoek bestaat een bijzondere relatie
        tussen de drie zijden.
      </p>

      <p>
        Noem de twee <strong>rechthoekszijden</strong> a en b
        en de schuine zijde c.
        Dan geldt de <strong>stelling van Pythagoras</strong>:
      </p>

      <p class="formula">a^{2} + b^{2} = c^{2}</p>

      <p>
        Een klassiek voorbeeld is de driehoek met zijden 3, 4 en 5:
      </p>

        <div class="theory-image">
        <img
          src="assets/pythagoras-345.svg"
          alt="Rechthoekige driehoek met zijden 3, 4 en 5. De rechte hoek zit tussen 3 en 4."
        >
      </div>
      <p class="formula">3^{2} + 4^{2} = 5^{2}</p>

      <p class="formula">9 + 16 = 25</p>

      <p>
        Ook 5, 12 en 13 vormen een rechthoekige driehoek:
      </p>

      <p class="formula">5^{2} + 12^{2} = 13^{2}</p>

      <p>
        Als de schuine zijde en één rechthoekszijde bekend zijn,
        kunnen we de andere zijde berekenen.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">c^{2} = a^{2} + b^{2}</p>

      <p>
        Trek a² af:
      </p>

      <p class="formula">b^{2} = c^{2} − a^{2}</p>

      <p>
        Neem de positieve wortel, want een lengte is niet negatief:
      </p>

      <p class="formula">b = √(c^{2} − a^{2})</p>

      <p>
        Voor een niet-ontaarde rechthoekige driehoek moet c groter zijn
        dan a en b.
      </p>

      <div class="callout">
        <p><strong>Pythagoras verbindt meetkunde met algebra.</strong></p>
        <p>
          Een meetkundige relatie tussen drie lengtes wordt een
          algebraïsche vergelijking.
        </p>
      </div>


      <h3>9. Pythagoras en het coördinatenvlak</h3>

      <p>
        In les 2.8 gebruikten we de afstandsformule:
      </p>

      <p class="formula">d = √((x_{2} − x_{1})^{2} + (y_{2} − y_{1})^{2})</p>

      <p>
        Nu kunnen we zien waar die formule vandaan komt.
      </p>

      <p>
        Tussen twee punten vormen de horizontale en verticale verschillen
        de rechthoekszijden van een rechthoekige driehoek:
      </p>

      <p class="formula">a = x_{2} − x_{1}</p>

      <p class="formula">b = y_{2} − y_{1}</p>

      <p>
        De afstand tussen de punten is de schuine zijde d.
        Pythagoras geeft:
      </p>

      <p class="formula">d^{2} = (x_{2} − x_{1})^{2} + (y_{2} − y_{1})^{2}</p>

      <p>
        en dus:
      </p>

      <p class="formula">d = √((x_{2} − x_{1})^{2} + (y_{2} − y_{1})^{2})</p>

      <p>
        De afstandsformule uit 2.8 is dus geen losse formule:
        ze is een rechtstreeks gevolg van Pythagoras.
      </p>


      <h3>10. Oppervlakte</h3>

      <p>
        <strong>Oppervlakte</strong> meet hoeveel vlak een figuur inneemt.
        De eenheid bevat daarom twee lengtes, bijvoorbeeld:
      </p>

      <p class="formula">cm^{2},\quad m^{2},\quad km^{2}</p>

      <p>
        De oppervlakte van een rechthoek is:
      </p>

      <p class="formula">A = ℓ · b</p>

      <p>
        waarbij ℓ de lengte en b de breedte is.
      </p>

      <p>
        Voor een rechthoek van 8 cm bij 5 cm:
      </p>

      <p class="formula">A = 8 · 5 = 40\;cm^{2}</p>

      <p>
        Voor een parallellogram geldt:
      </p>

      <p class="formula">A = b · h</p>

      <p>
        Hierbij is h de <strong>loodrechte hoogte</strong>.
        De hoogte hoeft dus niet samen te vallen met een schuine zijde
        van het parallellogram.
      </p>

      <p>
        Voor een driehoek geldt:
      </p>

      <p class="formula">A = \frac{1}{2}bh</p>

      <p>
        Een driehoek is dus precies de helft van een parallellogram
        met dezelfde basis en hoogte.
      </p>

      <p>
        Voor een cirkel geldt:
      </p>

      <p class="formula">A = πr^{2}</p>

      <p>
        waarbij r de straal is.
        Het getal π is de vaste verhouding tussen de omtrek en de diameter
        van een cirkel.
      </p>

      <p>
        De oppervlakteformule voor een rechthoek zagen we al in les 2.4:
      </p>

      <p class="formula">A = ℓ · b</p>

      <p>
        Daar was A een grootheid in een formulemodel.
        Hier krijgt dezelfde formule een concrete meetkundige betekenis.
      </p>


      <h3>11. Omtrek is iets anders dan oppervlakte</h3>

      <p>
        De <strong>omtrek</strong> is de totale lengte van de rand
        van een figuur.
      </p>

      <p>
        Voor een rechthoek:
      </p>

      <p class="formula">O = 2ℓ + 2b</p>

      <p>
        Voor een cirkel:
      </p>

      <p class="formula">O = 2πr</p>

      <p>
        Omtrek heeft één lengte-eenheid, bijvoorbeeld cm of m.
        Oppervlakte heeft een kwadratische eenheid, bijvoorbeeld cm² of m².
      </p>

      <p>
        Het verschil is belangrijk:
      </p>

      <ul>
        <li>een hek rond een terrein heeft te maken met <strong>omtrek</strong>;</li>
        <li>gras dat het terrein bedekt heeft te maken met <strong>oppervlakte</strong>.</li>
      </ul>

      <div class="callout">
        <p><strong>Omtrek ≠ oppervlakte.</strong></p>
        <p>
          Omtrek meet een lengte langs de rand.
          Oppervlakte meet hoeveel vlak binnen de rand zit.
        </p>
      </div>


      <h3>12. Volume</h3>

      <p>
        <strong>Volume</strong> meet hoeveel ruimte een driedimensionaal
        voorwerp inneemt.
        Omdat ruimte drie dimensies heeft, gebruiken we kubieke eenheden:
      </p>

      <p class="formula">cm^{3},\quad m^{3}</p>

      <p>
        Ook liter is een volume-eenheid.
        Bijvoorbeeld:
      </p>

      <p class="formula">1\;L = 1\;dm^{3}</p>

      <p>
        Voor een balk geldt:
      </p>

      <p class="formula">V = ℓ · b · h</p>

      <p>
        Je kunt dit begrijpen als:
        oppervlakte van het grondvlak maal de hoogte.
      </p>

      <p>
        Voor een cilinder geldt:
      </p>

      <p class="formula">V = πr^{2}h</p>

      <p>
        Ook hier is het idee:
      </p>

      <p class="formula">V = \text{oppervlakte grondvlak} · \text{hoogte}</p>

      <p>
        Voor een cilinder is het grondvlak een cirkel,
        met oppervlakte πr².
      </p>

      <p>
        Volume verschilt dus van oppervlakte:
        oppervlakte beschrijft een tweedimensionaal vlak,
        volume een driedimensionale ruimte.
      </p>


      <h3>13. Schaal en afmetingen</h3>

      <p>
        Wanneer alle lengtes van een figuur groter of kleiner worden,
        veranderen de oppervlakte en het volume niet op dezelfde manier.
      </p>

      <p>
        Stel dat alle lengtes verdubbelen.
        Een lengte wordt dan:
      </p>

      <p class="formula">2ℓ</p>

      <p>
        Een oppervlakte bevat twee lengtes en wordt daardoor vier keer zo groot.
        Een volume bevat drie lengtes en wordt acht keer zo groot.
      </p>

      <p class="formula">2^{2} = 4</p>

      <p class="formula">2^{3} = 8</p>

      <p>
        Dit is een eerste kennismaking met een belangrijk idee:
        verschillende meetkundige grootheden reageren verschillend op schaal.
      </p>

      <p>
        In les 2.10 bouwen we dit verder uit bij
        <strong>gelijkvormigheid en schaal</strong>.
      </p>


      <h3>14. Van meetkunde naar algebra</h3>

      <p>
        In deze les beschreven we meetkundige eigenschappen vooral met
        woorden, figuren en formules.
        In les 2.8 zagen we dat dezelfde eigenschappen ook met
        coördinaten en algebra kunnen worden beschreven.
      </p>

      <p>Enkele belangrijke vertalingen zijn:</p>

      <ul>
        <li><strong>punt</strong> → (x, y);</li>
        <li><strong>rechte hoek</strong> → 90°;</li>
        <li><strong>driehoek</strong> → hoeksom 180°;</li>
        <li><strong>rechthoekige driehoek</strong> → a² + b² = c²;</li>
        <li><strong>afstand in het vlak</strong> → afstandsformule;</li>
        <li><strong>loodrechte rechten</strong> → een relatie tussen hellingen;</li>
        <li><strong>oppervlakte</strong> → een formule met lengtes;</li>
        <li><strong>volume</strong> → een formule met drie dimensies.</li>
      </ul>

      <p>
        Euclidische meetkunde geeft ons dus de eigenschappen en relaties
        tussen vormen.
        Analytische meetkunde geeft ons een manier om die relaties
        met getallen en vergelijkingen te beschrijven.
      </p>


      <h3>15. Een vaste werkwijze</h3>

      <p>
        Bij een meetkundig probleem helpt het om eerst te bepalen
        <strong>welke structuur</strong> je voor je hebt.
      </p>

      <ol>
        <li>maak duidelijk welke figuur of situatie gegeven is;</li>
        <li>schrijf de bekende lengtes en hoeken op;</li>
        <li>zoek naar bekende eigenschappen, zoals 90° of een hoeksom van 180°;</li>
        <li>herken een rechthoekige driehoek wanneer Pythagoras kan worden gebruikt;</li>
        <li>kies de juiste formule voor omtrek, oppervlakte of volume;</li>
        <li>reken stap voor stap;</li>
        <li>controleer of de uitkomst past bij de figuur en de eenheden.</li>
      </ol>

      <p>
        Een goede meetkundige oplossing begint dus niet met zomaar
        een formule kiezen.
        Eerst moet je begrijpen <strong>welke eigenschappen van de figuur
        relevant zijn</strong>.
      </p>


      <div class="callout">
        <p><strong>Kernidee:</strong></p>

        <p>
          Euclidische meetkunde beschrijft ideale punten, lijnen,
          hoeken en figuren met vaste relaties.
        </p>

        <p>
          Een driehoek heeft een hoeksom van 180°.
          Een rechte hoek is 90°.
          In een rechthoekige driehoek geldt:
        </p>

        <p class="formula">a^{2} + b^{2} = c^{2}</p>

        <p>
          Omtrek, oppervlakte en volume zijn verschillende grootheden
          met verschillende eenheden en verschillende formules.
        </p>

        <p>
          Pythagoras vormt een belangrijke brug tussen meetkunde en algebra:
          dezelfde stelling verklaart de afstandsformule uit les 2.8.
        </p>

        <p>
          Zo ontstaat een steeds sterkere verbinding tussen
          <strong>vormen, getallen en vergelijkingen</strong>.
          In de volgende lessen gebruiken we deze meetkundige basis
          om gelijkvormigheid, schaal en later functies en grafieken
          verder te begrijpen.
        </p>
      </div>
    `
  },
  {
    id: "2.10",
    title: "Gelijkvormigheid & schaal",
    goal: "Wanneer hebben figuren dezelfde structuur?",
    theory: /* html */`
      <h2>Gelijkvormigheid &amp; schaal</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>gelijkvormige figuren herkennen</li>
        <li>overeenkomstige hoeken en zijden herkennen</li>
        <li>een schaalfactor gebruiken om lengtes te vergelijken</li>
        <li>begrijpen dat omtrek met k, oppervlakte met k² en volume met k³ schaalt</li>
        <li>een schaaltekening interpreteren en terugrekenen naar de werkelijkheid</li>
        <li>onbekende lengtes berekenen met gelijkvormigheid</li>
        <li>het verschil begrijpen tussen gelijkvormige en congruente figuren</li>
      </ul>

      <p>
        In les 2.9 leerden we eigenschappen van vormen, lengtes en hoeken.
        Nu stellen we een nieuwe vraag:
        <strong>wanneer hebben twee figuren dezelfde vorm?</strong>
      </p>

      <p>
        Twee foto's van hetzelfde gebouw kunnen bijvoorbeeld dezelfde vorm
        tonen terwijl de ene foto veel groter is dan de andere.
        Ook een kleine kaart van een land en het werkelijke land hebben
        dezelfde structuur, maar niet dezelfde afmetingen.
      </p>

      <p>
        Dit idee noemen we <strong>gelijkvormigheid</strong>.
        Het vormt de wiskundige basis van vergrotingen, verkleiningen,
        schaaltekeningen en veel meetkundige berekeningen.
      </p>


      <h3>1. Wat betekent gelijkvormig?</h3>

      <p>
        Twee figuren zijn <strong>gelijkvormig</strong> wanneer ze dezelfde vorm
        hebben, maar niet noodzakelijk dezelfde grootte.
      </p>

      <p>
        Je kunt de ene figuur uit de andere verkrijgen door alle lengtes
        met dezelfde factor te vermenigvuldigen.
        De figuur mag daarbij ook verschoven of gedraaid worden.
      </p>

      <p>
        Bij gelijkvormige figuren gelden twee belangrijke eigenschappen:
      </p>

      <ul>
        <li>overeenkomstige hoeken zijn gelijk;</li>
        <li>overeenkomstige zijden hebben steeds dezelfde verhouding.</li>
      </ul>

      <p>
        Die vaste verhouding noemen we de <strong>schaalfactor</strong>
        en noteren we meestal met k.
      </p>

      <p>
        Stel dat een zijde van 4 cm wordt vergroot tot 10 cm.
        Dan is:
      </p>

      <p class="formula">k = \frac{10}{4} = 2,5</p>

      <p>
        Elke overeenkomstige lengte wordt dus 2,5 keer zo groot.
      </p>

      <div class="callout">
        <p><strong>Zelfde vorm, niet noodzakelijk dezelfde grootte.</strong></p>
        <p>
          Bij gelijkvormigheid blijven de hoeken gelijk
          en worden alle overeenkomstige lengtes met dezelfde factor
          vermenigvuldigd.
        </p>
      </div>


      <h3>2. Gelijkvormig en congruent</h3>

      <p>
        <strong>Congruente</strong> figuren hebben niet alleen dezelfde vorm,
        maar ook precies dezelfde grootte.
      </p>

      <p>
        Twee congruente figuren kun je dus door verschuiven, draaien
        of spiegelen precies op elkaar leggen.
      </p>

      <p>
        Congruente figuren zijn een speciaal geval van gelijkvormige figuren:
        hun schaalfactor is:
      </p>

      <p class="formula">k = 1</p>

      <p>
        Bij gelijkvormige maar niet-congruente figuren is:
      </p>

      <p class="formula">k ≠ 1</p>

      <p>
        Bijvoorbeeld een vierkant van 2 cm bij 2 cm en een vierkant
        van 6 cm bij 6 cm zijn gelijkvormig.
        Hun schaalfactor is 3.
        Ze zijn niet congruent omdat ze verschillende afmetingen hebben.
      </p>


      <h3>3. Overeenkomstige hoeken en zijden</h3>

      <p>
        Bij gelijkvormige figuren moeten we weten welke onderdelen
        bij elkaar horen.
        Zulke onderdelen noemen we <strong>overeenkomstig</strong>.
      </p>

      <p>
        Overeenkomstige hoeken zijn gelijk.
        De zijden die tegenover deze overeenkomstige hoeken liggen,
        horen bij elkaar.
      </p>

      <p>
        Als twee gelijkvormige driehoeken overeenkomstige zijden
        a₁, b₁, c₁ en a₂, b₂, c₂ hebben, geldt:
      </p>

      <p class="formula">\frac{a_{1}}{a_{2}} = \frac{b_{1}}{b_{2}} = \frac{c_{1}}{c_{2}} = k</p>

      <div class="theory-image">
        <img
          src="assets/gelijkvormige-driehoeken.svg"
          alt="Twee gelijkvormige rechthoekige driehoeken: 3-4-5 en 6-8-10. Overeenkomstige hoeken hebben dezelfde streepjes; de zijden staan in de verhouding 1 : 2."
        >
      </div>

      <p>
        Het is belangrijk dat je steeds dezelfde volgorde gebruikt.
        Als a₁ bij a₂ hoort, moet b₁ bij b₂ horen en c₁ bij c₂.
      </p>

      <p>
        Een klassieke fout is twee zijden vergelijken die niet
        overeenkomstig zijn.
        Kijk daarom eerst naar de hoeken en bepaal daarna
        welke zijden bij elkaar horen.
      </p>


      <h3>4. Gelijkvormige driehoeken</h3>

      <p>
        Driehoeken zijn bijzonder belangrijk bij gelijkvormigheid.
        Vaak kunnen we aan de hoeken zien dat twee driehoeken gelijkvormig zijn.
      </p>

      <p>
        Als twee overeenkomstige hoeken gelijk zijn,
        is de derde hoek automatisch ook gelijk,
        omdat de hoeksom van een driehoek 180° is.
      </p>

      <p>
        We kunnen dus vaak gelijkvormigheid herkennen door twee
        overeenkomstige hoeken te vergelijken.
      </p>

      <p>
        Bijvoorbeeld:
        een driehoek heeft hoeken 40°, 60° en 80°.
        Een tweede driehoek heeft ook hoeken 40°, 60° en 80°.
        De twee driehoeken hebben dezelfde vorm en zijn dus gelijkvormig.
      </p>

      <p>
        Hun zijden hoeven niet even lang te zijn.
        Ze staan wel allemaal in dezelfde verhouding.
      </p>


      <h3>5. De schaalfactor voor lengtes</h3>

      <p>
        Stel dat een figuur wordt vergroot met schaalfactor k.
        Elke lengte wordt dan met k vermenigvuldigd.
      </p>

      <p>
        Dat geldt voor:
      </p>

      <ul>
        <li>zijden;</li>
        <li>hoogtes;</li>
        <li>diagonalen;</li>
        <li>stralen;</li>
        <li>diameters;</li>
        <li>omtrekken.</li>
      </ul>

      <p>
        Bijvoorbeeld:
        een rechthoek van 3 cm bij 5 cm wordt vergroot met k = 2.
        De nieuwe afmetingen zijn:
      </p>

      <p class="formula">3 · 2 = 6</p>

      <p class="formula">5 · 2 = 10</p>

      <p>
        De nieuwe rechthoek is dus 6 cm bij 10 cm.
      </p>

      <p>
        De oorspronkelijke omtrek was:
      </p>

      <p class="formula">O = 2 · 3 + 2 · 5 = 16</p>

      <p>
        De nieuwe omtrek is:
      </p>

      <p class="formula">O' = 2 · 6 + 2 · 10 = 32</p>

      <p>
        Ook de omtrek is dus precies met factor 2 vermenigvuldigd.
      </p>


      <h3>6. Oppervlakte schaalt met k²</h3>

      <p>
        Een oppervlakte ontstaat uit het product van twee lengtes.
        Als beide lengtes met k worden vermenigvuldigd,
        krijgen we:
      </p>

      <p class="formula">k · k = k^{2}</p>

      <p>
        Daarom schaalt een oppervlakte met <strong>k²</strong>.
      </p>

      <p>
        Neem een vierkant met zijde 1:
      </p>

      <p class="formula">A = 1 · 1 = 1</p>

      <p>
        Vergroot de zijde met factor 2:
      </p>

      <p class="formula">A' = 2 · 2 = 4</p>

      <p>
        De zijde is dus twee keer zo lang,
        maar de oppervlakte is vier keer zo groot.
      </p>

      <p>
        Algemeen:
      </p>

      <p class="formula">A' = k^{2} · A</p>

      <p>
        Voor k = 3 wordt de oppervlakte negen keer zo groot:
      </p>

      <p class="formula">3^{2} = 9</p>

      <div class="callout">
        <p><strong>Lengte × k, oppervlakte × k².</strong></p>
        <p>
          Dit is geen aparte truc.
          Een oppervlakte bevat twee lengterichtingen,
          waardoor de schaalfactor twee keer meetelt.
        </p>
      </div>


      <h3>7. Volume schaalt met k³</h3>

      <p>
        Volume combineert drie lengtes:
      </p>

      <p class="formula">V = ℓ · b · h</p>

      <p>
        Als alle drie de lengtes met factor k worden vermenigvuldigd,
        krijgen we:
      </p>

      <p class="formula">k · k · k = k^{3}</p>

      <p>
        Daarom:
      </p>

      <p class="formula">V' = k^{3} · V</p>

      <p>
        Bij een verdubbeling van alle lengtes is:
      </p>

      <p class="formula">2^{3} = 8</p>

      <p>
        Het volume wordt dus acht keer zo groot.
      </p>

      <p>
        Een kubus van 1 bij 1 bij 1 heeft volume 1.
        Een kubus met zijde 2 heeft:
      </p>

      <p class="formula">V = 2 · 2 · 2 = 8</p>

      <p>
        Je kunt de grote kubus ook zien als acht kleine kubussen
        van 1 bij 1 bij 1.
      </p>

      <p>
        Dit sluit rechtstreeks aan bij les 2.9,
        waar we leerden dat volume drie dimensies combineert.
      </p>


      <h3>8. De schaalfactor kan ook kleiner zijn dan 1</h3>

      <p>
        Een schaalfactor hoeft geen getal groter dan 1 te zijn.
        Bij een verkleining ligt k tussen 0 en 1.
      </p>

      <p>
        Bijvoorbeeld:
        een lengte van 20 cm wordt verkleind tot 5 cm.
      </p>

      <p class="formula">k = \frac{5}{20} = \frac{1}{4}</p>

      <p>
        Elke overeenkomstige lengte wordt dus vier keer kleiner.
      </p>

      <p>
        De oppervlakte wordt niet vier keer kleiner,
        maar:
      </p>

      <p class="formula">k^{2} = \left(\frac{1}{4}\right)^{2} = \frac{1}{16}</p>

      <p>
        De oppervlakte wordt dus zestien keer kleiner.
      </p>

      <p>
        Hetzelfde principe geldt voor volume:
      </p>

      <p class="formula">k^{3} = \left(\frac{1}{4}\right)^{3} = \frac{1}{64}</p>


      <h3>9. De omgekeerde schaalfactor</h3>

      <p>
        Soms kennen we de grote figuur en willen we terugrekenen
        naar de kleine figuur.
      </p>

      <p>
        Als een vergroting gebeurt met:
      </p>

      <p class="formula">k = 3</p>

      <p>
        dan gebeurt de omgekeerde stap met:
      </p>

      <p class="formula">\frac{1}{3}</p>

      <p>
        Een lengte van 15 cm in de grote figuur komt dus overeen met:
      </p>

      <p class="formula">15 · \frac{1}{3} = 5</p>

      <p>
        Het is daarom belangrijk om altijd duidelijk te weten
        <strong>van welke figuur naar welke figuur</strong> je de schaalfactor neemt.
      </p>


      <h3>10. Schaaltekeningen</h3>

      <p>
        Een schaaltekening is een verkleinde of vergrote voorstelling
        van de werkelijkheid waarbij alle overeenkomstige lengtes
        dezelfde verhouding hebben.
      </p>

      <p>
        Een veelgebruikte schaal is:
      </p>

      <p class="formula">1 : 100</p>

      <p>
        Dit betekent:
        1 eenheid op de tekening komt overeen met 100 dezelfde eenheden
        in werkelijkheid.
      </p>

      <p>
        Een muur die op de tekening 3 cm lang is, heeft in werkelijkheid:
      </p>

      <p class="formula">3 · 100 = 300\;cm</p>

      <p>
        Dus:
      </p>

      <p class="formula">300\;cm = 3\;m</p>

      <p>
        Van werkelijkheid naar tekening deel je door 100.
        Van tekening naar werkelijkheid vermenigvuldig je met 100.
      </p>

      <div class="callout">
        <p><strong>Let op de eenheden.</strong></p>
        <p>
          Bij een schaalverhouding moeten de vergeleken lengtes
          dezelfde eenheid hebben.
          Zet bijvoorbeeld meter eerst om naar centimeter
          voordat je met een schaal 1 : 100 rekent.
        </p>
      </div>


      <h3>11. Oppervlakte op schaal</h3>

      <p>
        Bij schaaltekeningen moet je oppassen:
        een oppervlakte schaalt niet met dezelfde factor als een lengte.
      </p>

      <p>
        Bij schaal 1 : 100 is de lengteschaalfactor:
      </p>

      <p class="formula">k = \frac{1}{100}</p>

      <p>
        Voor oppervlakte wordt dat:
      </p>

      <p class="formula">k^{2} = \frac{1}{10\,000}</p>

      <p>
        Eén cm² op de tekening komt dus overeen met 10 000 cm²
        in werkelijkheid.
      </p>

      <p>
        Omdat:
      </p>

      <p class="formula">10\,000\;cm^{2} = 1\;m^{2}</p>

      <p>
        komt 1 cm² op een schaaltekening van 1 : 100 overeen
        met 1 m² in werkelijkheid.
      </p>

      <p>
        Dit is een belangrijke waarschuwing:
        <strong>een schaal 1 : 100 betekent niet dat oppervlakten
        ook met factor 100 veranderen.</strong>
      </p>


      <h3>12. Een onbekende zijde vinden</h3>

      <p>
        Gelijkvormigheid kan gebruikt worden om een lengte te berekenen
        die je niet rechtstreeks kunt meten.
      </p>

      <p>
        Stel dat een vlaggenmast een schaduw van 8 m werpt.
        Naast de mast staat een stok van 1,5 m die een schaduw van 2 m werpt.
      </p>

      <p>
        De zonnestralen maken dezelfde hoek met de grond.
        Daardoor ontstaan twee gelijkvormige rechthoekige driehoeken.
      </p>

      <p>
        Noem de hoogte van de mast h.
        Omdat overeenkomstige lengtes dezelfde verhouding hebben:
      </p>

      <p class="formula">\frac{h}{8} = \frac{1,5}{2}</p>

      <p>
        Vermenigvuldig met 8:
      </p>

      <p class="formula">h = 8 · \frac{1,5}{2}</p>

      <p class="formula">h = 6</p>

      <p>
        De vlaggenmast is dus 6 meter hoog.
      </p>

      <p>
        We hebben hier geen goniometrie nodig.
        Alleen gelijkvormigheid en een verhouding volstaan.
      </p>

      <p>
        In les 2.14 zullen we zien hoe we zulke situaties ook
        rechtstreeks met hoeken en goniometrische functies kunnen beschrijven.
      </p>


      <h3>13. Gelijkvormigheid is een verhouding, geen verschil</h3>

      <p>
        Bij gelijkvormige figuren zijn de overeenkomstige lengtes
        evenredig.
        Het gaat dus om een <strong>verhouding</strong>, niet om
        een constant verschil.
      </p>

      <p>
        Stel dat een zijde van 4 cm naar 10 cm gaat.
        Het verschil is 6 cm:
      </p>

      <p class="formula">10 − 4 = 6</p>

      <p>
        Maar de schaalfactor is:
      </p>

      <p class="formula">k = \frac{10}{4} = 2,5</p>

      <p>
        Een andere zijde van 8 cm wordt dan niet 14 cm,
        maar:
      </p>

      <p class="formula">8 · 2,5 = 20</p>

      <p>
        Bij gelijkvormigheid moet dus steeds dezelfde
        <strong>vermenigvuldigingsfactor</strong> gelden.
      </p>


      <h3>14. Wat blijft gelijk?</h3>

      <p>
        Bij gelijkvormige figuren blijven de <strong>hoeken</strong> gelijk.
        De schaalfactor verandert dus geen hoek van bijvoorbeeld 60° in 120°.
      </p>

      <p>
        Ook verhoudingen die alleen van de vorm afhangen, blijven gelijk.
        Bij een cirkel blijft bijvoorbeeld de verhouding tussen
        omtrek en diameter gelijk aan π:
      </p>

      <p class="formula">\frac{O}{d} = π</p>

      <p>
        De absolute lengtes veranderen wel.
        Een grotere cirkel heeft een grotere omtrek en een grotere straal,
        maar dezelfde vormverhouding.
      </p>

      <p>
        Samengevat:
      </p>

      <ul>
        <li>lengtes → × k;</li>
        <li>omtrekken → × k;</li>
        <li>oppervlakten → × k²;</li>
        <li>volumes → × k³;</li>
        <li>hoeken → blijven gelijk.</li>
      </ul>


      <h3>15. Een vaste werkwijze</h3>

      <p>
        Bij een probleem met gelijkvormigheid kun je deze stappen volgen:
      </p>

      <ol>
        <li>bepaal welke twee figuren met elkaar worden vergeleken;</li>
        <li>controleer of overeenkomstige hoeken gelijk zijn;</li>
        <li>bepaal welke zijden overeenkomstig zijn;</li>
        <li>bereken de schaalfactor k met overeenkomstige lengtes;</li>
        <li>gebruik dezelfde k voor de andere lengtes;</li>
        <li>gebruik k² voor oppervlakten en k³ voor volumes;</li>
        <li>controleer of de eenheden overeenkomen;</li>
        <li>controleer of de uitkomst past bij een vergroting of verkleining.</li>
      </ol>

      <p>
        Bij een schaaltekening is de belangrijkste vraag:
        <strong>gaat de schaal van tekening naar werkelijkheid,
        of van werkelijkheid naar tekening?</strong>
      </p>


      <div class="callout">
        <p><strong>Kernidee:</strong></p>

        <p>
          Gelijkvormige figuren hebben dezelfde vorm:
          overeenkomstige hoeken zijn gelijk en overeenkomstige lengtes
          staan steeds in dezelfde verhouding.
        </p>

        <p>
          Die verhouding is de schaalfactor k.
        </p>

        <p class="formula">lengte → k</p>

        <p class="formula">oppervlakte → k^{2}</p>

        <p class="formula">volume → k^{3}</p>

        <p>
          Een schaaltekening is precies hetzelfde idee:
          elke lengte op de tekening staat in een vaste verhouding
          tot de overeenkomstige lengte in de werkelijkheid.
        </p>

        <p>
          Gelijkvormigheid maakt het mogelijk om afmetingen te berekenen
          die we niet rechtstreeks kunnen meten.
          Daarmee vormt ze een belangrijke brug tussen
          <strong>meetkunde, verhoudingen en algebra</strong>.
        </p>

        <p>
          In de volgende lessen verschuiven we van figuren en verhoudingen
          naar <strong>functies en verbanden</strong>.
        </p>
      </div>
    `
  },  
  
  {
    id: "2.11",
    title: "Functies als relaties",
    goal: "Hoe beschrijven we afhankelijkheid?",
    theory: /* html */`
      <h2>Functies als relaties</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>een functie begrijpen als een regel die elke toegelaten invoer aan precies één uitvoer koppelt</li>
        <li><span class="formula-inline">f(x)</span> lezen als “de waarde van <span class="formula-inline">f</span> bij <span class="formula-inline">x</span>”</li>
        <li>domein en bereik van elkaar onderscheiden</li>
        <li>eenzelfde functie herkennen in woorden, een formule, een tabel en een grafiek</li>
        <li>herkennen wanneer een relatie geen functie is</li>
      </ul>

      <p>
        In les 2.4 zagen we dat een formule een verband tussen grootheden kan
        beschrijven. Bijvoorbeeld:
      </p>

      <p class="formula">P = 4 + 2x</p>

      <p>
        waarbij <span class="formula-inline">x</span> het aantal afgelegde kilometers
        en <span class="formula-inline">P</span> de prijs van een taxirit is.
        Nu geven we zo'n afhankelijkheid een precieze wiskundige betekenis:
        een <strong>functie</strong>.
      </p>


      <h3>1. Van afhankelijkheid naar een functie</h3>

      <p>
        Stel dat we voor verschillende afstanden de prijs van een taxirit willen
        bepalen. Voor elke toegelaten afstand hoort precies één prijs.
      </p>

      <p>
        Je kunt een functie daarom zien als een soort machine:
      </p>

      <p class="formula">
        invoer → regel → uitvoer
      </p>
   

      <p>
        Je stopt een waarde in de machine. De regel wordt toegepast en er komt
        één resultaat uit.
      </p>

      <p>
        Bijvoorbeeld met:
      </p>

      <p class="formula">f(x) = 2x + 3</p>
         <div class="theory-image">
        <img
          src="assets/functie-machine.svg"
          alt="Invoer 4 gaat door de regel f(x) = 2x + 3 en geeft uitvoer 11. Links het domein, rechts het bereik."
        >
      </div>

      <p>
        Als we <span class="formula-inline">x = 4</span> invoeren, krijgen we:
      </p>

      <p class="formula">4 → 2 · 4 + 3 → 11</p>

      <p>
        De belangrijkste eigenschap is niet dat de regel een bepaalde vorm heeft.
        Het gaat om de koppeling:
      </p>

      <div class="callout">
        <p><strong>Een functie koppelt elke toegelaten invoer aan precies één uitvoer.</strong></p>
        <p>
          Dezelfde invoer mag dus niet tegelijkertijd twee verschillende
          uitvoerwaarden hebben.
        </p>
      </div>


      <h3>2. Een functie is een bijzondere relatie</h3>

      <p>
        Een <strong>relatie</strong> beschrijft dat waarden op een bepaalde manier
        met elkaar verbonden zijn. Een functie is een bijzondere relatie waarbij
        de koppeling van invoer naar uitvoer eenduidig is.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">
        1 → 4<br>
        2 → 7<br>
        3 → 10
      </p>

      <p>
        Dit kan een functie zijn: elke invoer heeft precies één uitvoer.
      </p>

      <p>
        Maar als we schrijven:
      </p>

      <p class="formula">
        2 → 7<br>
        2 → 10
      </p>

      <p>
        dan heeft dezelfde invoer twee verschillende uitvoerwaarden.
        Dat is geen functie.
      </p>

      <div class="callout">
        <p><strong>Functie = een eenduidige toekenning.</strong></p>
        <p>
          Voor één toegelaten <span class="formula-inline">x</span> mag er maar
          één bijbehorende uitvoer zijn.
        </p>
      </div>


      <h3>3. De notatie f(x)</h3>

      <p>
        We geven de regel van een functie een naam. Bijvoorbeeld
        <span class="formula-inline">f</span>:
      </p>

      <p class="formula">f(x) = 2x + 3</p>

      <p>
        Je leest dit als:
        <strong>“f van x is 2x plus 3”</strong>.
      </p>

      <p>
        Belangrijk: <span class="formula-inline">f(x)</span> betekent niet
        <em>f maal x</em>. Het betekent:
        <strong>de uitvoerwaarde van de functie f wanneer x wordt ingevoerd</strong>.
      </p>

      <p>
        Willen we de waarde van de functie bij <span class="formula-inline">x = 4</span>
        kennen, dan schrijven we:
      </p>

      <p class="formula">f(4) = 2 · 4 + 3 = 11</p>

      <p>
        De <span class="formula-inline">4</span> is de invoer en de
        <span class="formula-inline">11</span> is de uitvoer.
      </p>

      <p>
        De letter <span class="formula-inline">x</span> is daarbij niet verplicht.
        We kunnen bijvoorbeeld ook schrijven:
      </p>

      <p class="formula">f(a) = 2a + 3</p>

      <p>
        De letter verandert, maar de functie blijft dezelfde regel.
      </p>


      <h3>4. Een functie berekenen</h3>

      <p>
        Om een functiewaarde te berekenen, vervangen we de invoerletter door
        de gegeven waarde.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">f(x) = 3x - 2</p>

      <p>
        Voor <span class="formula-inline">x = 5</span> krijgen we:
      </p>

      <p class="formula">f(5) = 3 · 5 - 2 = 13</p>

      <p>
        Voor <span class="formula-inline">x = 0</span>:
      </p>

      <p class="formula">f(0) = 3 · 0 - 2 = -2</p>

      <p>
        De functie zelf verandert dus niet. Alleen de invoer verandert.
      </p>

      <div class="callout">
        <p><strong>Een functiewaarde vinden:</strong></p>
        <p>
          vervang de invoerletter door de gegeven waarde en reken de uitdrukking uit.
        </p>
      </div>


      <h3>5. Domein: wat mag erin?</h3>

      <p>
        Niet elke functie laat elke mogelijke waarde van
        <span class="formula-inline">x</span> toe.
        De verzameling toegelaten invoerwaarden noemen we het
        <strong>domein</strong>.
      </p>

      <p>
        Bij
      </p>

      <p class="formula">f(x) = 2x + 3</p>

      <p>
        kunnen we elke reële waarde voor <span class="formula-inline">x</span>
        gebruiken. Het domein is dus alle reële getallen.
      </p>

      <p>
        Bij
      </p>

      <p class="formula">g(x) = \frac{1}{x}</p>

      <p>
        is <span class="formula-inline">x = 0</span> niet toegestaan.
        Delen door nul kan niet.
      </p>

      <p>
        Het domein bestaat dus uit alle reële getallen behalve nul.
      </p>

      <p>
        Ook een wortel kan het domein beperken. Voor
      </p>

      <p class="formula">h(x) = √x</p>

      <p>
        moet gelden:
      </p>

      <p class="formula">x ≥ 0</p>

      <p>
        want de vierkantswortel van een negatief reëel getal bestaat niet binnen
        de reële getallen.
      </p>

      <p>
        In de context van een probleem kunnen bovendien extra beperkingen gelden.
        Als <span class="formula-inline">x</span> het aantal personen voorstelt,
        kan <span class="formula-inline">x = 2,5</span> bijvoorbeeld geen betekenisvolle
        invoer zijn.
      </p>

      <p>
        In intervalnotatie is het domein van <span class="formula-inline">√x</span>:
      </p>

      <p class="formula">[0, ∞)</p>

      <div class="callout">
        <p><strong>Bij een functie moet je altijd eerst kunnen vragen: “Mag deze invoer?”</strong></p>
        <p>
          Het domein wordt bepaald door de formule én, wanneer er een model of
          context is, door de betekenis van de grootheden.
        </p>
      </div>


      <h3>6. Bereik: wat kan eruit?</h3>

      <p>
        Het <strong>bereik</strong> is de verzameling waarden die de functie
        daadwerkelijk als uitvoer kan produceren.
      </p>

      <p>
        Kijk bijvoorbeeld naar:
      </p>

      <p class="formula">f(x) = x²</p>

      <p>
        Elke reële waarde van <span class="formula-inline">x</span> is toegestaan.
        Het domein is dus alle reële getallen.
      </p>

      <p>
        Maar het kwadraat van een reëel getal is nooit negatief:
      </p>

      <p class="formula">x² ≥ 0</p>

      <p>
        Het bereik is daarom:
      </p>

      <p class="formula">[0, ∞)</p>

      <p>
        Domein en bereik beantwoorden dus twee verschillende vragen:
      </p>

      <ul>
        <li><strong>domein:</strong> welke waarden mogen we invoeren?</li>
        <li><strong>bereik:</strong> welke waarden kunnen als uitvoer ontstaan?</li>
      </ul>


      <h3>7. Invoer en uitvoer als twee verzamelingen</h3>

      <p>
        We kunnen een functie bekijken als een verzameling koppelingen.
        Elke toegelaten invoer krijgt één bijbehorende uitvoer.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">
        0 → 1<br>
        1 → 3<br>
        2 → 5<br>
        3 → 7
      </p>

      <p>
        Hier is het domein van deze verzameling invoerwaarden:
        <span class="formula-inline">0, 1, 2, 3</span>.
        Het bereik bestaat uit:
        <span class="formula-inline">1, 3, 5, 7</span>.
      </p>

      <p>
        Het is dus mogelijk dat niet iedere waarde die theoretisch als uitvoer
        zou kunnen bestaan ook daadwerkelijk voorkomt in een bepaald domein.
      </p>

      <p>
        Het onderscheid tussen domein en bereik wordt belangrijk zodra we functies
        met verschillende soorten invoer en uitvoer gaan bestuderen.
      </p>


      <h3>8. Vier manieren om dezelfde functie te beschrijven</h3>

      <p>
        Een functie kan op verschillende manieren worden voorgesteld.
        De belangrijkste zijn:
      </p>

      <ul>
        <li>in woorden</li>
        <li>met een formule</li>
        <li>met een tabel</li>
        <li>met een grafiek</li>
      </ul>

      <p>
        Neem:
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        <strong>In woorden:</strong> verdubbel de invoer en tel er 1 bij op.
      </p>

      <p>
        <strong>Als formule:</strong>
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        <strong>Als tabel:</strong>
      </p>

      <p class="formula">
        x = 0 → f(x) = 1<br>
        x = 1 → f(x) = 3<br>
        x = 2 → f(x) = 5<br>
        x = 3 → f(x) = 7
      </p>

      <p>
        <strong>Als grafiek:</strong> de bijbehorende punten zijn
        <span class="formula-inline">(0,1)</span>,
        <span class="formula-inline">(1,3)</span>,
        <span class="formula-inline">(2,5)</span> en
        <span class="formula-inline">(3,7)</span>.
      </p>

      <p>
        De vorm verandert, maar de beschreven afhankelijkheid blijft dezelfde.
      </p>


      <h3>9. Van tabel terug naar de regel</h3>

      <p>
        Een tabel geeft je niet alleen een lijst met getallen.
        Je kunt proberen de regel achter de getallen te ontdekken.
      </p>

      <p>
        Stel:
      </p>

      <p class="formula">
        x = 0 → 1<br>
        x = 1 → 3<br>
        x = 2 → 5<br>
        x = 3 → 7
      </p>

      <p>
        Wanneer <span class="formula-inline">x</span> met 1 stijgt, stijgt de
        uitvoer telkens met 2. Bovendien is de uitvoer bij
        <span class="formula-inline">x = 0</span> gelijk aan 1.
      </p>

      <p>
        Dat past bij:
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        Een tabel kan dus gebruikt worden om een mogelijke formule te ontdekken.
        Omgekeerd kun je met een formule een tabel maken.
      </p>


      <h3>10. Een grafiek als verzameling punten</h3>

      <p>
        Een functie kun je ook tekenen in een assenstelsel.
        Voor iedere toegelaten invoer <span class="formula-inline">x</span>
        hoort één uitvoer <span class="formula-inline">f(x)</span>.
      </p>

      <p>
        We schrijven zo'n koppeling als een punt:
      </p>

      <p class="formula">(x, f(x))</p>

      <p>
        Bijvoorbeeld voor
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        hoort bij <span class="formula-inline">x = 2</span> de uitvoer
        <span class="formula-inline">5</span>. Het bijbehorende punt is:
      </p>

      <p class="formula">(2, 5)</p>

      <p>
        Door alle punten voor de toegelaten invoerwaarden te bekijken, ontstaat
        de grafiek van de functie.
      </p>

      <p>
        In les 2.12 zullen we specifieke soorten functiegrafieken bestuderen,
        zoals rechten en parabolen.
      </p>


      <h3>11. Wanneer is een relatie geen functie?</h3>

      <p>
        Een relatie is geen functie wanneer één invoer aan meerdere verschillende
        uitvoerwaarden gekoppeld wordt.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">
        x = 2 → y = 3<br>
        x = 2 → y = 5
      </p>

      <p>
        Dezelfde invoer <span class="formula-inline">x = 2</span> heeft hier
        twee verschillende uitvoerwaarden. Dit voldoet niet aan de definitie
        van een functie.
      </p>

      <p>
        Let op: verschillende invoerwaarden mogen wel dezelfde uitvoer hebben.
        Bijvoorbeeld:
      </p>

      <p class="formula">
        2 → 4<br>
        -2 → 4
      </p>

      <p>
        Dit kan perfect een functie zijn. De voorwaarde is alleen dat één invoer
        niet naar twee verschillende uitvoerwaarden gaat.
      </p>

      <div class="callout">
        <p><strong>Belangrijk:</strong></p>
        <p>
          Meerdere x-waarden mogen dezelfde y-waarde hebben.
          Eén x-waarde mag niet meerdere y-waarden hebben.
        </p>
      </div>


      <h3>12. De verticale-lijntest</h3>

      <p>
        Op een grafiek kunnen we controleren of een getekende relatie een functie
        van <span class="formula-inline">x</span> kan zijn.
      </p>

      <p>
        Denk aan een verticale lijn die van boven naar beneden door de grafiek
        beweegt.
      </p>

      <p>
        Als zo'n verticale lijn de grafiek op meer dan één plaats snijdt,
        horen bij dezelfde <span class="formula-inline">x</span>-waarde meerdere
        <span class="formula-inline">y</span>-waarden.
        Dan is de relatie geen functie van <span class="formula-inline">x</span>.
      </p>

            <div class="theory-image">
        <img
          src="assets/verticale-lijntest.svg"
          alt="Links een rechte: een verticale lijn snijdt één punt, het is een functie. Rechts een cirkel: twee snijpunten, geen functie van x."
        >
      </div>
      <p>
        Snijdt iedere verticale lijn de grafiek hoogstens één keer, dan voldoet
        de grafiek aan de functie-eigenschap.
      </p>

      <p>
        Dit noemen we de <strong>verticale-lijntest</strong>.
      </p>


      <h3>13. Een cirkel is geen functie y = f(x)</h3>

      <p>
        Beschouw de cirkel:
      </p>

      <p class="formula">x² + y² = 25</p>

      <p>
        Dit is een relatie tussen <span class="formula-inline">x</span> en
        <span class="formula-inline">y</span>.
      </p>

      <p>
        Voor <span class="formula-inline">x = 0</span> krijgen we:
      </p>

      <p class="formula">y² = 25</p>

      <p>
        Er zijn twee mogelijke waarden:
      </p>

      <p class="formula">y = 5 &nbsp; of &nbsp; y = -5</p>

      <p>
        Dezelfde <span class="formula-inline">x</span>-waarde heeft dus twee
        verschillende <span class="formula-inline">y</span>-waarden.
        De volledige cirkel is daarom geen functie van
        <span class="formula-inline">x</span>.
      </p>

      <p>
        Je kunt de cirkel wel opsplitsen in twee functies:
      </p>

      <p class="formula">y = √(25 - x²)</p>

      <p>
        voor de bovenste helft, en
      </p>

      <p class="formula">y = -√(25 - x²)</p>

      <p>
        voor de onderste helft.
      </p>


      <h3>14. Functie, vergelijking en ongelijkheid</h3>

      <p>
        Een functie beschrijft een regel:
      </p>

      <p class="formula">f(x) = 2x + 3</p>

      <p>
        De variabele <span class="formula-inline">x</span> blijft hierbij vrij:
        de functie vertelt welke uitvoer bij iedere toegelaten invoer hoort.
      </p>

      <p>
        Vervolgens kunnen we een vraag stellen over die functie.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">f(x) = 11</p>

      <p>
        Dit betekent:
      </p>

      <p class="formula">2x + 3 = 11</p>

      <p>
        We krijgen een vergelijking en zoeken de invoer waarvoor de functie
        de waarde 11 aanneemt:
      </p>

      <p class="formula">x = 4</p>

      <p>
        We kunnen ook vragen:
      </p>

      <p class="formula">f(x) ≥ 11</p>

      <p>
        Dan zoeken we alle invoerwaarden waarvoor de uitvoer minstens 11 is.
        Dat is een ongelijkheid:
      </p>

      <p class="formula">2x + 3 ≥ 11</p>

      <p class="formula">x ≥ 4</p>

      <div class="callout">
        <p><strong>Het onderscheid:</strong></p>
        <ul>
          <li>functie: welke uitvoer hoort bij een invoer?</li>
          <li>vergelijking: voor welke invoer is de uitvoer gelijk aan een bepaalde waarde?</li>
          <li>ongelijkheid: voor welke invoer is de uitvoer groter of kleiner dan een bepaalde waarde?</li>
        </ul>
      </div>


      <h3>15. Functies kunnen uit de werkelijkheid komen</h3>

      <p>
        Veel functies ontstaan omdat één grootheid afhankelijk is van een andere.
      </p>

      <p>
        Denk aan:
      </p>

      <ul>
        <li>prijs afhankelijk van afstand</li>
        <li>afstand afhankelijk van tijd</li>
        <li>oppervlakte afhankelijk van een lengte</li>
        <li>temperatuur afhankelijk van de tijd</li>
        <li>energie afhankelijk van een bepaalde grootheid</li>
      </ul>

      <p>
        De functie geeft de afhankelijkheid een precieze vorm.
      </p>

      <p>
        In les 2.4 gebruikten we bijvoorbeeld:
      </p>

      <p class="formula">P = 4 + 2x</p>

      <p>
        Nu kunnen we dezelfde afhankelijkheid schrijven als:
      </p>

      <p class="formula">P(x) = 4 + 2x</p>

      <p>
        Daarmee maken we expliciet dat de prijs
        <span class="formula-inline">P</span> afhankelijk is van de invoer
        <span class="formula-inline">x</span>.
      </p>


      <h3>16. De vier representaties horen bij elkaar</h3>

      <p>
        Een belangrijk inzicht is dat formule, tabel, grafiek en woorden
        geen vier verschillende functies hoeven te beschrijven.
        Het kunnen vier verschillende manieren zijn om <strong>dezelfde functie</strong>
        zichtbaar te maken.
      </p>

      <p>
        Neem opnieuw:
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        In woorden: verdubbel de invoer en tel 1 op.
      </p>

      <p>
        In een tabel zien we bijvoorbeeld:
      </p>

      <p class="formula">
        0 → 1<br>
        1 → 3<br>
        2 → 5<br>
        3 → 7
      </p>

      <p>
        In een grafiek worden deze koppelingen punten:
      </p>

      <p class="formula">
        (0,1), (1,3), (2,5), (3,7)
      </p>

      <p>
        En de formule vat de volledige regel compact samen:
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        Wie tussen deze voorstellingen kan schakelen, begrijpt de functie
        als een wiskundig object in plaats van alleen als een formule.
      </p>


      <h3>17. Een functie lezen: een vaste werkwijze</h3>

      <p>
        Wanneer je een functie tegenkomt, kun je steeds dezelfde vragen stellen:
      </p>

      <ol>
        <li>Wat is de invoer?</li>
        <li>Wat is de uitvoer?</li>
        <li>Welke regel koppelt beide aan elkaar?</li>
        <li>Wat is het domein?</li>
        <li>Wat is het bereik?</li>
        <li>Kan dezelfde invoer meerdere uitvoerwaarden hebben?</li>
        <li>Kan ik de functie herkennen in een tabel of grafiek?</li>
      </ol>

      <p>
        Deze vragen werken zowel bij een formule als bij een tabel, grafiek
        of concrete situatie.
      </p>


      <h3>18. Van relatie naar functie</h3>

      <p>
        We zijn begonnen met een eenvoudig idee: de ene grootheid hangt af van
        de andere.
      </p>

      <p>
        Een <strong>relatie</strong> beschrijft zo'n verband.
        Een <strong>functie</strong> legt daar een extra voorwaarde aan op:
        iedere toegelaten invoer krijgt precies één uitvoer.
      </p>

      <p>
        Daardoor kunnen we afhankelijkheden op een uniforme manier bestuderen.
        We kunnen ze beschrijven met woorden, formules, tabellen en grafieken.
      </p>

      <p>
        Het begrip functie wordt daarmee een van de centrale bouwstenen van
        de verdere wiskunde.
      </p>

      <div class="callout">
        <p><strong>Kernidee:</strong></p>
        <p>
          Een functie koppelt elke toegelaten invoer
          <span class="formula-inline">x</span> aan precies één uitvoer
          <span class="formula-inline">f(x)</span>.
        </p>
        <p>
          <strong>Domein</strong> = wat erin mag.
          <strong>Bereik</strong> = wat eruit kan.
        </p>
        <p>
          Woorden, formule, tabel en grafiek kunnen verschillende representaties
          zijn van dezelfde functie.
        </p>
        <p>
          In les 2.12 gebruiken we dit begrip om specifieke functies te
          bestuderen: rechten en parabolen.
        </p>
      </div>
    `
},
{
    id: "2.12",
    title: "Lineaire &amp; kwadratische functies",
    goal: "Hoe zien algebraïsche relaties eruit?",
    theory: /* html */`
      <h2>Lineaire &amp; kwadratische functies</h2>

      <p><strong>Doel:</strong></p>
      <ul>
        <li>een lineaire functie herkennen als een rechte</li>
        <li>de betekenis van de helling <span class="formula-inline">m</span> en het snijpunt <span class="formula-inline">b</span> begrijpen</li>
        <li>nulpunten van een functie vinden</li>
        <li>een kwadratische functie herkennen als een parabool</li>
        <li>begrijpen hoe <span class="formula-inline">a</span>, <span class="formula-inline">b</span> en <span class="formula-inline">c</span> de parabool bepalen</li>
        <li>de top en de symmetrieas van een parabool vinden</li>
        <li>het verband begrijpen tussen de discriminant <span class="formula-inline">D</span> en het aantal snijpunten met de x-as</li>
        <li>formule, tabel en grafiek met elkaar verbinden</li>
      </ul>

      <p>
        In les 2.11 zagen we dat een functie een regel is die invoer aan uitvoer
        koppelt. Nu tekenen we de punten
        <span class="formula-inline">(x, f(x))</span> in een assenstelsel.
      </p>

      <p>
        Daardoor krijgen algebraïsche regels een <strong>geometrische vorm</strong>.
        Sommige functies geven een rechte, andere een kromme.
        Twee belangrijke voorbeelden zijn lineaire en kwadratische functies.
      </p>


      <h3>1. Van formule naar grafiek</h3>

      <p>
        Neem de functie:
      </p>

      <p class="formula">f(x) = 2x + 1</p>

      <p>
        We kunnen voor verschillende waarden van <span class="formula-inline">x</span>
        de bijbehorende functiewaarde berekenen:
      </p>

      <p class="formula">
        f(0) = 1<br>
        f(1) = 3<br>
        f(2) = 5<br>
        f(3) = 7
      </p>

      <p>
        Dat geeft de punten:
      </p>

      <p class="formula">
        (0,1), (1,3), (2,5), (3,7)
      </p>

      <p>
        Als we deze punten tekenen, liggen ze op één rechte.
        Dat is kenmerkend voor een <strong>lineaire functie</strong>.
      </p>

      <p>
        De formule vertelt dus niet alleen welke getallen we moeten berekenen.
        Ze bepaalt ook de geometrische vorm van de grafiek.
      </p>


      <h3>2. Lineair: een constante verandering</h3>

      <p>
        Een lineaire functie heeft de vorm:
      </p>

      <p class="formula">f(x) = mx + b</p>

      <p>
        Het belangrijkste kenmerk is dat de uitvoer steeds met een
        <strong>constante hoeveelheid</strong> verandert wanneer
        <span class="formula-inline">x</span> met 1 toeneemt.
      </p>

      <p>
        Bij:
      </p>

      <p class="formula">f(x) = 3x + 2</p>

      <p>
        geldt bijvoorbeeld:
      </p>

      <p class="formula">
        f(0) = 2<br>
        f(1) = 5<br>
        f(2) = 8<br>
        f(3) = 11
      </p>

      <p>
        Iedere stap van 1 naar rechts geeft een stijging van 3.
        Die constante verandering is precies de betekenis van de
        <strong>helling</strong>.
      </p>

      <div class="callout">
        <p><strong>Lineair betekent: constante verandering.</strong></p>
        <p>
          Als <span class="formula-inline">x</span> telkens evenveel verandert,
          verandert <span class="formula-inline">f(x)</span> telkens met dezelfde
          verhouding.
        </p>
      </div>


      <h3>3. De betekenis van m</h3>

      <p>
        In:
      </p>

      <p class="formula">f(x) = mx + b</p>

      <p>
        noemen we <span class="formula-inline">m</span> de
        <strong>helling</strong> of <strong>richtingscoëfficiënt</strong>.
      </p>

      <p>
        <span class="formula-inline">m</span> vertelt hoeveel de uitvoer verandert
        wanneer de invoer met 1 toeneemt.
      </p>

      <p>
        Bij:
      </p>

      <p class="formula">f(x) = 3x + 2</p>

      <p>
        is:
      </p>

      <p class="formula">m = 3</p>

      <p>
        Eén stap naar rechts betekent dus drie stappen omhoog.
      </p>

      <p>
        Bij:
      </p>

      <p class="formula">f(x) = -2x + 5</p>

      <p>
        is:
      </p>

      <p class="formula">m = -2</p>

      <p>
        De grafiek daalt dan met 2 wanneer
        <span class="formula-inline">x</span> met 1 toeneemt.
      </p>

      <p>
        Bij <span class="formula-inline">m = 0</span> verandert de uitvoer helemaal
        niet:
      </p>

      <p class="formula">f(x) = b</p>

      <p>
        De grafiek is dan een horizontale rechte.
      </p>


      <h3>4. De betekenis van b</h3>

      <p>
        In:
      </p>

      <p class="formula">f(x) = mx + b</p>

      <p>
        is <span class="formula-inline">b</span> de functiewaarde bij
        <span class="formula-inline">x = 0</span>.
      </p>

      <p>
        Vul <span class="formula-inline">x = 0</span> in:
      </p>

      <p class="formula">f(0) = m · 0 + b = b</p>

      <p>
        Daarom is <span class="formula-inline">b</span> het
        <strong>snijpunt met de y-as</strong>.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">f(x) = 3x + 2</p>

      <p>
        heeft <span class="formula-inline">b = 2</span>.
        De grafiek gaat dus door het punt:
      </p>

      <p class="formula">(0,2)</p>

      <p>
        De twee parameters hebben dus een duidelijke geometrische betekenis:
      </p>

      <ul>
        <li><strong>m</strong> bepaalt de helling van de rechte;</li>
        <li><strong>b</strong> bepaalt waar de rechte de y-as snijdt.</li>
      </ul>


            <div data-widget="lineGraph"></div>

      <div class="callout">
        <p><strong>Bij een lineaire functie:</strong></p>
        <p>
          <span class="formula-inline">m</span> = helling,
          <span class="formula-inline">b</span> = y-as-snijding.
        </p>
      </div>


      <h3>5. Evenwijdige rechten</h3>

      <p>
        Beschouw:
      </p>

      <p class="formula">
        f(x) = 2x + 1<br>
        g(x) = 2x + 5
      </p>

      <p>
        Beide functies hebben dezelfde helling:
      </p>

      <p class="formula">m = 2</p>

      <p>
        Het verschil zit alleen in de waarde van
        <span class="formula-inline">b</span>.
      </p>

      <p>
        Beide rechten stijgen daarom even snel. Ze zijn
        <strong>evenwijdig</strong>.
      </p>

      <p>
        Algemeen geldt:
      </p>

      <p class="formula">
        zelfde m → evenwijdige rechten
      </p>

      <p>
        tenzij de twee rechten samenvallen.
      </p>


      <h3>6. De helling berekenen uit twee punten</h3>

      <p>
        Als we twee punten van een rechte kennen,
      </p>

      <p class="formula">
        (x₁, y₁) &nbsp; en &nbsp; (x₂, y₂)
      </p>

      <p>
        kunnen we de helling berekenen met:
      </p>

      <p class="formula">m = \frac{y₂-y₁}{x₂-x₁}</p>

      <p>
        De teller geeft aan hoeveel we verticaal veranderen.
        De noemer geeft aan hoeveel we horizontaal veranderen.
      </p>

      <p>
        Dit is dus:
      </p>

      <p class="formula">
        helling = verticale verandering / horizontale verandering
      </p>

      <p>
        Bijvoorbeeld voor de punten
        <span class="formula-inline">(1,3)</span> en
        <span class="formula-inline">(4,9)</span>:
      </p>

      <p class="formula">m = \frac{9-3}{4-1} = \frac{6}{3} = 2</p>

      <p>
        De rechte stijgt dus 2 eenheden voor elke eenheid die we naar rechts gaan.
      </p>


      <h3>7. De formule van een rechte bepalen</h3>

      <p>
        Met de helling alleen kennen we de rechte nog niet volledig.
        We moeten ook weten waar ze de y-as snijdt.
      </p>

      <p>
        Stel dat een rechte helling
        <span class="formula-inline">m = 2</span> heeft en door
        <span class="formula-inline">(1,3)</span> gaat.
      </p>

      <p>
        We beginnen met:
      </p>

      <p class="formula">y = 2x + b</p>

      <p>
        Omdat het punt op de rechte ligt, moet gelden:
      </p>

      <p class="formula">3 = 2 · 1 + b</p>

      <p>
        Dus:
      </p>

      <p class="formula">b = 1</p>

      <p>
        De vergelijking van de rechte is:
      </p>

      <p class="formula">y = 2x + 1</p>

      <p>
        Twee punten bepalen dus één rechte, zolang de punten niet dezelfde
        x-coördinaat hebben.
      </p>


      <h3>8. Nulpunt van een rechte</h3>

      <p>
        Een <strong>nulpunt</strong> is een invoer waarvoor de functiewaarde
        gelijk is aan nul:
      </p>

      <p class="formula">f(x) = 0</p>

      <p>
        Op de grafiek is dat het snijpunt met de x-as.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">f(x) = 2x - 6</p>

      <p>
        Voor het nulpunt zoeken we:
      </p>

      <p class="formula">2x - 6 = 0</p>

      <p class="formula">x = 3</p>

      <p>
        Het snijpunt met de x-as is dus:
      </p>

      <p class="formula">(3,0)</p>

      <p>
        Dit is precies dezelfde algebra als bij vergelijkingen in les 2.3.
        De grafiek geeft er nu een geometrische betekenis aan.
      </p>


      <h3>9. Van een rechte naar een parabool</h3>

      <p>
        Niet iedere functie heeft een rechte als grafiek.
        Beschouw bijvoorbeeld:
      </p>

      <p class="formula">f(x) = x²</p>

      <p>
        Voor verschillende waarden krijgen we:
      </p>

      <p class="formula">
        f(-2) = 4<br>
        f(-1) = 1<br>
        f(0) = 0<br>
        f(1) = 1<br>
        f(2) = 4
      </p>

      <p>
        De punten liggen niet op één rechte.
        Ze vormen een karakteristieke kromme:
        een <strong>parabool</strong>.
      </p>

      <p>
        De verandering is hier niet constant.
        De functie wordt dus niet lineair.
      </p>


      <h3>10. Kwadratisch: een veranderende verandering</h3>

      <p>
        Een kwadratische functie heeft de vorm:
      </p>

      <p class="formula">f(x) = ax² + bx + c</p>

      <p>
        met:
      </p>

      <p class="formula">a ≠ 0</p>

      <p>
        Het belangrijkste verschil met een lineaire functie is de aanwezigheid
        van <span class="formula-inline">x²</span>.
      </p>

      <p>
        Daardoor verandert de helling van de grafiek voortdurend.
        De grafiek is geen rechte maar een parabool.
      </p>

      <p>
        Een eenvoudig voorbeeld is:
      </p>

      <p class="formula">f(x) = x²</p>

      <p>
        De waarden groeien eerst langzaam en daarna steeds sneller wanneer
        <span class="formula-inline">x</span> groter wordt.
      </p>

      <div class="callout">
        <p><strong>Lineair:</strong> de verandering is constant.</p>
        <p><strong>Kwadratisch:</strong> de verandering is niet constant.</p>
      </div>


      <h3>11. Wat doet a met de parabool?</h3>

      <p>
        In:
      </p>

      <p class="formula">f(x) = ax² + bx + c</p>

      <p>
        bepaalt <span class="formula-inline">a</span> onder andere de
        <strong>openingsrichting</strong>.
      </p>

      <ul>
        <li><span class="formula-inline">a &gt; 0</span>: de parabool opent naar boven;</li>
        <li><span class="formula-inline">a &lt; 0</span>: de parabool opent naar beneden.</li>
      </ul>
            <div class="theory-image">
        <img src="assets/parabool-positief-a.svg" alt="Parabool f(x)=x² opent naar boven. Minimum in de oorsprong.">
      </div>
      <div class="theory-image">
        <img src="assets/parabool-negatief-a.svg" alt="Parabool f(x)=−x²+4 opent naar beneden. Maximum in (0, 4).">
      </div>
     
      <p>
        Als <span class="formula-inline">a &gt; 0</span> heeft de parabool een
        laagste punt, een <strong>minimum</strong>.
        Als <span class="formula-inline">a &lt; 0</span> heeft ze een hoogste punt,
        een <strong>maximum</strong>.
      </p>

      <p>
        Ook de absolute waarde van <span class="formula-inline">a</span> beïnvloedt
        de vorm:
      </p>

      <ul>
        <li>grotere <span class="formula-inline">|a|</span>: de parabool wordt smaller;</li>
        <li>kleinere <span class="formula-inline">|a|</span>: de parabool wordt wijder.</li>
      </ul>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">
        f(x) = x²<br>
        g(x) = 3x²<br>
        h(x) = \frac{1}{3}x²
      </p>

      <p>
        Alle drie openen ze naar boven, maar ze hebben een verschillende breedte.
      </p>


      <h3>12. Wat doet c met de parabool?</h3>

      <p>
        Ook bij een kwadratische functie vinden we het snijpunt met de y-as
        door <span class="formula-inline">x = 0</span> in te vullen.
      </p>

      <p class="formula">
        f(0) = a · 0² + b · 0 + c = c
      </p>

      <p>
        Daarom is <span class="formula-inline">c</span> het
        <strong>snijpunt met de y-as</strong>.
      </p>

      <p>
        Bijvoorbeeld:
      </p>

      <p class="formula">f(x) = x² - 4x + 3</p>

      <p>
        heeft <span class="formula-inline">c = 3</span>.
        De parabool gaat dus door:
      </p>

      <p class="formula">(0,3)</p>

      <p>
        Net als bij een rechte vertelt de constante term dus waar de grafiek
        de y-as raakt.
      </p>

      <div data-widget="parabolaGraph"></div>

      <h3>13. De top van een parabool</h3>

      <p>
        Een parabool die naar boven opent heeft een minimum.
        Een parabool die naar beneden opent heeft een maximum.
        Dat bijzondere punt noemen we de <strong>top</strong>.
      </p>

      <p>
        Voor:
      </p>

      <p class="formula">f(x) = ax² + bx + c</p>

      <p>
        is de x-coördinaat van de top:
      </p>

      <p class="formula">x = -\frac{b}{2a}</p>

      <p>
        Daarna vullen we deze x-waarde in de functie in om de
        y-coördinaat te vinden.
      </p>

      <p>
        Neem:
      </p>

      <p class="formula">f(x) = x² - 4x + 3</p>

      <p>
        Hier is:
      </p>

      <p class="formula">a = 1, &nbsp; b = -4</p>

      <p>
        Dus:
      </p>

      <p class="formula">x = -\frac{-4}{2 · 1} = 2</p>

      <p>
        Vervolgens:
      </p>

      <p class="formula">f(2) = 2² - 4 · 2 + 3 = -1</p>

      <p>
        De top is:
      </p>

      <p class="formula">(2,-1)</p>


      <h3>14. De symmetrieas</h3>

      <p>
        Een parabool is spiegelsymmetrisch.
        De linkerhelft is het spiegelbeeld van de rechterhelft.
      </p>

            <div class="theory-image">
        <img src="assets/parabool-symmetrieas.svg" alt="Parabool x²−4x+3 met stippellijn x=2 door de top (2, −1).">
      </div>

      <p>
        De verticale lijn door de top noemen we de
        <strong>symmetrieas</strong>.
      </p>

      <p>
        Als de top x-coördinaat
        <span class="formula-inline">x = 2</span> heeft, is de symmetrieas:
      </p>

      <p class="formula">x = 2</p>

      <p>
        Punten die even ver links en rechts van deze lijn liggen,
        hebben dezelfde functiewaarde.
      </p>

      <p>
        Bij de parabool:
      </p>

      <p class="formula">f(x) = x² - 4x + 3</p>

      <p>
        zien we bijvoorbeeld:
      </p>

      <p class="formula">
        f(1) = 0<br>
        f(3) = 0
      </p>

      <p>
        De punten <span class="formula-inline">(1,0)</span> en
        <span class="formula-inline">(3,0)</span> liggen even ver van
        <span class="formula-inline">x = 2</span>.
      </p>


      <h3>15. Nulpunten van een parabool</h3>

      <p>
        Ook bij een kwadratische functie zoeken we nulpunten door te stellen:
      </p>

      <p class="formula">f(x) = 0</p>

      <p>
        Voor:
      </p>

      <p class="formula">f(x) = ax² + bx + c</p>

      <p>
        krijgen we de kwadratische vergelijking:
      </p>

      <p class="formula">ax² + bx + c = 0</p>

      <p>
        Dit is precies de vergelijking die we in les 2.7 hebben bestudeerd.
      </p>

      <p>
        De oplossingen van de vergelijking zijn de x-coördinaten van de
        snijpunten van de parabool met de x-as.
      </p>


<h3>16. De discriminant D als grafische informatie</h3>

<p>
  Bij een kwadratische functie zoeken we de nulpunten door te stellen:
</p>

<p class="formula">ax² + bx + c = 0</p>

<p>
  In les 2.7 zagen we dat de oplossingen gevonden kunnen worden met:
</p>

<p class="formula">
  x = \frac{-b ± √D}{2a}
</p>

<p>
  waarbij:
</p>

<p class="formula">D = b² - 4ac</p>

<p>
  De letter <span class="formula-inline">D</span> staat voor de
  <strong>discriminant</strong>. Het belangrijke punt is dat
  <span class="formula-inline">D</span> bepaalt wat er onder het
  wortelteken staat.
</p>

<p>
  Daarom bepaalt het teken van <span class="formula-inline">D</span>
  hoeveel <strong>reële oplossingen</strong> de vergelijking heeft.
</p>

<h4>D &gt; 0: twee oplossingen</h4>

<p>
  Als:
</p>

<p class="formula">D &gt; 0</p>

<p>
  dan is <span class="formula-inline">√D</span> een positief reëel getal.
  In de formule met <span class="formula-inline">±</span> ontstaan daardoor
  twee verschillende waarden voor <span class="formula-inline">x</span>:
</p>

<p class="formula">
  x₁ = \frac{-b + √D}{2a}
</p>

<p class="formula">
  x₂ = \frac{-b - √D}{2a}
</p>

<p>
  De parabool heeft dus twee nulpunten en snijdt de x-as op twee plaatsen.
</p>


<h4>D = 0: één oplossing</h4>

<p>
  Als:
</p>

<p class="formula">D = 0</p>

<p>
  dan is:
</p>

<p class="formula">√D = 0</p>

<p>
  De twee mogelijkheden met <span class="formula-inline">±</span> vallen
  daardoor samen. Er is maar één reële oplossing:
</p>

<p class="formula">
  x = -\frac{b}{2a}
</p>

<p>
  De parabool raakt de x-as precies in één punt.
  Dat punt is tegelijk de <strong>top</strong> van de parabool.
</p>


<h4>D &lt; 0: geen reële oplossingen</h4>

<p>
  Als:
</p>

<p class="formula">D &lt; 0</p>

<p>
  dan zouden we de vierkantswortel van een negatief getal moeten nemen:
</p>

<p class="formula">√D</p>

<p>
  Binnen de <strong>reële getallen</strong> bestaat die wortel niet.
  De vergelijking heeft daarom geen reële oplossingen.
</p>

<p>
  Grafisch betekent dit dat de parabool de x-as nergens snijdt.
</p>


<h4>Een voorbeeld van elk geval</h4>

<p>
  We kunnen de drie situaties naast elkaar zetten.
</p>

<p>
  <strong>Twee snijpunten:</strong>
</p>

<p class="formula">
  f(x) = x² - 5x + 6
</p>

<p class="formula">
  D = (-5)² - 4 · 1 · 6 = 1
</p>

<p>
  Omdat <span class="formula-inline">D &gt; 0</span>, zijn er twee nulpunten:
  <span class="formula-inline">x = 2</span> en
  <span class="formula-inline">x = 3</span>.
</p>

<p>
  <strong>Eén raakpunt:</strong>
</p>

<p class="formula">
  f(x) = x² - 4x + 4
</p>

<p class="formula">
  D = (-4)² - 4 · 1 · 4 = 0
</p>

<p>
  Er is één nulpunt:
  <span class="formula-inline">x = 2</span>.
  De top ligt op de x-as.
</p>

<p>
  <strong>Geen snijpunten:</strong>
</p>

<p class="formula">
  f(x) = x² + 1
</p>

<p class="formula">
  D = 0² - 4 · 1 · 1 = -4
</p>

<p>
  Omdat <span class="formula-inline">D &lt; 0</span>, zijn er geen reële
  nulpunten. De parabool ligt volledig boven de x-as.
</p>

<div class="callout">
  <p><strong>De discriminant verbindt algebra met meetkunde.</strong></p>
  <p>
    <span class="formula-inline">D &gt; 0</span> → twee reële oplossingen
    → twee snijpunten met de x-as.
  </p>
  <p>
    <span class="formula-inline">D = 0</span> → één reële oplossing
    → één raakpunt met de x-as.
  </p>
  <p>
    <span class="formula-inline">D &lt; 0</span> → geen reële oplossingen
    → geen snijpunten met de x-as.
  </p>
</div>
      <p>
        Algebra en meetkunde vertellen hier exact hetzelfde verhaal:
        de vergelijking bepaalt de oplossingen, terwijl de grafiek ze
        zichtbaar maakt.
      </p>


      <h3>17. Een volledig voorbeeld</h3>

      <p>
        Beschouw:
      </p>

      <p class="formula">f(x) = x² - 5x + 6</p>
      

      <p>
        We herkennen een kwadratische functie met:
      </p>

      <p class="formula">a = 1, &nbsp; b = -5, &nbsp; c = 6</p>

      <p>
        <strong>Snijpunt met de y-as:</strong>
      </p>

      <p class="formula">(0,6)</p>

      <p>
        <strong>Nulpunten:</strong>
      </p>

      <p class="formula">
        x² - 5x + 6 = 0
      </p>

      <p>
        Factoriseren geeft:
      </p>

      <p class="formula">
        (x - 2)(x - 3) = 0
      </p>

      <p>
        Dus:
      </p>

      <p class="formula">
        x = 2 &nbsp; of &nbsp; x = 3
      </p>

      <p>
        De parabool snijdt de x-as in:
      </p>

      <p class="formula">
        (2,0) &nbsp; en &nbsp; (3,0)
      </p>

      <p>
        <strong>Top:</strong>
      </p>

      <p class="formula">
        x = -\frac{-5}{2 · 1} = 2,5
      </p>

      <p>
        De y-coördinaat is:
      </p>

      <p class="formula">
        f(2,5) = 2,5² - 5 · 2,5 + 6 = -0,25
      </p>

      <p>
        De top is dus:
      </p>

      <p class="formula">(2,5,-0,25)</p>

      <p>
        Omdat <span class="formula-inline">a = 1 &gt; 0</span>, opent de parabool
        naar boven. De top is dus een minimum.
      </p>

            <div class="theory-image">
        <img src="assets/parabool-nulpunten-x2-5x-6.svg" alt="Parabool x²−5x+6 snijdt de x-as in 2 en 3.">
      </div>

      <h3>18. Formule, tabel en grafiek vertellen hetzelfde verhaal</h3>

      <p>
        Neem opnieuw:
      </p>

      <p class="formula">f(x) = x² - 4x + 3</p>

      <p>
        Uit de formule kunnen we belangrijke eigenschappen afleiden:
      </p>

      <ul>
        <li><span class="formula-inline">a = 1</span>: de parabool opent naar boven;</li>
        <li><span class="formula-inline">c = 3</span>: snijpunt met de y-as is <span class="formula-inline">(0,3)</span>;</li>
        <li>nulpunten: <span class="formula-inline">x = 1</span> en <span class="formula-inline">x = 3</span>;</li>
        <li>top: <span class="formula-inline">(2,-1)</span>;</li>
        <li>symmetrieas: <span class="formula-inline">x = 2</span>.</li>
      </ul>

      <p>
        Een tabel kan bijvoorbeeld geven:
      </p>

      <p class="formula">
        x = 0 → 3<br>
        x = 1 → 0<br>
        x = 2 → -1<br>
        x = 3 → 0<br>
        x = 4 → 3
      </p>

      <p>
        De grafiek maakt al deze informatie zichtbaar:
        de punten vormen een parabool met top
        <span class="formula-inline">(2,-1)</span> en symmetrieas
        <span class="formula-inline">x = 2</span>.
      </p>

      <p>
        De drie voorstellingen — formule, tabel en grafiek — beschrijven
        dus dezelfde functie.
      </p>


      <h3>19. Lineair tegenover kwadratisch</h3>

      <p>
        De twee functietypes hebben een fundamenteel verschil.
      </p>

      <ul>
        <li>
          <strong>Lineair:</strong> de verandering per stap in
          <span class="formula-inline">x</span> is constant.
          De grafiek is een rechte.
        </li>
        <li>
          <strong>Kwadratisch:</strong> de verandering per stap in
          <span class="formula-inline">x</span> verandert.
          De grafiek is een parabool.
        </li>
      </ul>

      <p>
        Dat verschil komt rechtstreeks uit de algebra:
      </p>

      <p class="formula">
        mx + b → rechte<br>
        ax² + bx + c → parabool
      </p>

      <p>
        De hoogste macht van <span class="formula-inline">x</span> geeft dus al
        belangrijke informatie over de vorm van de grafiek.
      </p>


      <h3>20. Een vaste werkwijze</h3>

      <p>
        Wanneer je een lineaire of kwadratische functie krijgt, kun je
        systematisch te werk gaan.
      </p>

      <p><strong>Bij een lineaire functie:</strong></p>
      <ol>
        <li>herken <span class="formula-inline">f(x) = mx + b</span>;</li>
        <li>lees de helling <span class="formula-inline">m</span> af;</li>
        <li>lees het snijpunt met de y-as <span class="formula-inline">b</span> af;</li>
        <li>zoek eventueel het nulpunt via <span class="formula-inline">f(x) = 0</span>;</li>
        <li>gebruik twee punten om de formule te bepalen als die nog onbekend is.</li>
      </ol>

      <p><strong>Bij een kwadratische functie:</strong></p>
      <ol>
        <li>herken <span class="formula-inline">f(x) = ax² + bx + c</span>;</li>
        <li>kijk naar het teken van <span class="formula-inline">a</span> voor de openingsrichting;</li>
        <li>lees <span class="formula-inline">c</span> als het snijpunt met de y-as;</li>
        <li>zoek de nulpunten met de methodes uit les 2.7;</li>
        <li>bereken de top met <span class="formula-inline">x = -\frac{b}{2a}</span>;</li>
        <li>gebruik <span class="formula-inline">D</span> om het aantal reële nulpunten te bepalen.</li>
      </ol>


      <h3>21. Van algebra naar meetkunde</h3>

      <p>
        In de vorige lessen leerden we algebraïsche regels manipuleren.
        Nu zien we dat die regels ook een geometrische betekenis hebben.
      </p>

      <p>
        De formule:
      </p>

      <p class="formula">f(x) = mx + b</p>

      <p>
        wordt een rechte.
      </p>

      <p>
        De formule:
      </p>

      <p class="formula">f(x) = ax² + bx + c</p>

      <p>
        wordt een parabool.
      </p>

      <p>
        Daardoor kunnen we algebra en meetkunde voortdurend naar elkaar
        vertalen:
      </p>

      <p class="formula">
        vergelijking ↔ snijpunt<br>
        nulpunt ↔ snijpunt met de x-as<br>
        functie ↔ grafiek<br>
        top ↔ minimum of maximum<br>
        helling ↔ steilte
      </p>

      <div class="callout">
        <p><strong>Kernidee:</strong></p>
        <p>
          Een lineaire functie
          <span class="formula-inline">f(x) = mx + b</span>
          heeft een rechte als grafiek.
          <span class="formula-inline">m</span> bepaalt de helling en
          <span class="formula-inline">b</span> het snijpunt met de y-as.
        </p>
        <p>
          Een kwadratische functie
          <span class="formula-inline">f(x) = ax² + bx + c</span>
          heeft een parabool als grafiek.
          <span class="formula-inline">a</span> bepaalt onder andere de
          openingsrichting en breedte, <span class="formula-inline">c</span>
          het snijpunt met de y-as, en
          <span class="formula-inline">-\frac{b}{2a}</span>
          de x-coördinaat van de top.
        </p>
        <p>
          De discriminant <span class="formula-inline">D</span> bepaalt hoeveel
          reële nulpunten de kwadratische functie heeft en dus hoeveel keer
          de parabool de x-as snijdt.
        </p>
        <p>
          Formule, tabel en grafiek zijn verschillende representaties van
          dezelfde functie.
        </p>
      </div>
    `
},  

    {
      id: "2.13",
      title: "Exponentiële &amp; logaritmische functies",
      goal: "Hoe beschrijven we groei en inverse groei?",
      theory: /* html */`
        <h2>Exponentiële &amp; logaritmische functies</h2>
        <p><strong>Doel:</strong></p>
        <ul>
          <li>het verschil begrijpen tussen een vaste toename en een vaste groeifactor</li>
          <li>de vorm <strong>f(t) = a · r<sup>t</sup></strong> begrijpen en gebruiken</li>
          <li>groei en verval herkennen</li>
          <li>begrijpen wat de exponent voorstelt</li>
          <li>de logaritme begrijpen als omgekeerde vraag van exponentiëren</li>
          <li>eenvoudige exponentiële vergelijkingen oplossen</li>
          <li>de natuurlijke logaritme <strong>ln</strong> herkennen</li>
          <li>het verband begrijpen tussen een exponentiële en een logaritmische functie</li>
        </ul>
        <p>
          In les 2.12 zagen we functies waarbij een hoeveelheid telkens met een
          <strong>vast bedrag</strong> verandert. Dat levert een lineaire functie op.
          Nu bekijken we een ander soort verandering:
          de hoeveelheid wordt telkens met een <strong>vaste factor</strong> vermenigvuldigd.
        </p>
        <h3>1. Een hoeveelheid die zichzelf vermenigvuldigt</h3>
        <p>
          Stel dat we 100 bacteriën hebben. Elk uur verdubbelt het aantal.
        </p>
        <p>
          Na 1 uur zijn er 200 bacteriën.<br>
          Na 2 uur zijn er 400 bacteriën.<br>
          Na 3 uur zijn er 800 bacteriën.<br>
          Na 4 uur zijn er 1600 bacteriën.
        </p>
        <p>
          We tellen dus niet telkens 100 bij.
          We vermenigvuldigen telkens met 2.
        </p>
        <p class="formula">100 → 200 → 400 → 800 → 1600</p>
        <p>
          De factor 2 wordt telkens opnieuw toegepast.
          Daarom kunnen we het aantal bacteriën na <em>t</em> uur schrijven als:
        </p>
        <p class="formula">f(t) = 100 · 2^{t}</p>
        <p>
          De exponent <strong>t</strong> vertelt hoe vaak de factor 2 is toegepast.
        </p>
        <div class="callout">
          <p><strong>Het verschil met lineaire groei:</strong></p>
          <p>Lineair: telkens hetzelfde bedrag erbij.</p>
          <p>Exponentieel: telkens met dezelfde factor vermenigvuldigen.</p>
        </div>
        <h3>2. De exponent telt de vermenigvuldigingen</h3>
        <p>Kijk opnieuw naar:</p>
        <p class="formula">f(t) = 100 · 2^{t}</p>
        <p>Voor <strong>t = 0</strong> is er nog geen vermenigvuldiging geweest:</p>
        <p class="formula">f(0) = 100 · 2^{0} = 100</p>
        <p>Voor <strong>t = 1</strong> is de factor één keer toegepast:</p>
        <p class="formula">f(1) = 100 · 2^{1} = 200</p>
        <p>Voor <strong>t = 3</strong> is de factor drie keer toegepast:</p>
        <p class="formula">f(3) = 100 · 2^{3} = 800</p>
        <p>
          De exponent is dus niet zomaar een getal.
          Hij vertelt hoeveel keer de groeifactor wordt toegepast.
        </p>
        <div class="callout">
          <p><strong>Lees r<sup>t</sup> als:</strong></p>
          <p>“de factor <strong>r</strong>, <strong>t</strong> keer toegepast”.</p>
        </div>
        <h3>3. De algemene vorm van een exponentiële functie</h3>
        <p>De algemene vorm is:</p>
        <p class="formula">f(t) = a · r^{t}</p>
        <p>Daarin heeft elk symbool een duidelijke betekenis:</p>
        <ul>
          <li><strong>a</strong> is de startwaarde: <strong>f(0) = a</strong></li>
          <li><strong>r</strong> is de factor per tijdseenheid</li>
          <li><strong>t</strong> is het aantal tijdseenheden</li>
        </ul>
        <p>Bijvoorbeeld:</p>
        <p class="formula">f(t) = 500 · 1{,}08^{t}</p>
        <p>betekent:</p>
        <ul>
          <li>startwaarde = 500</li>
          <li>factor per stap = 1,08</li>
          <li>elke stap wordt de vorige waarde met 1,08 vermenigvuldigd</li>
        </ul>
        <p>Na 1 stap:</p>
        <p class="formula">500 · 1{,}08 = 540</p>
        <p>Na 2 stappen:</p>
        <p class="formula">500 · 1{,}08^{2} = 583{,}2</p>
        <p>De tweede stap wordt dus toegepast op de al gegroeide waarde.</p>
        <h3>4. Een percentage wordt een factor</h3>
        <p>
          In veel toepassingen wordt de verandering gegeven als een percentage.
          Om een percentage in een exponentiële factor om te zetten, gebruiken we:
        </p>
        <p class="formula">+p\\% \\rightarrow \\text{factor} = 1 + p/100</p>
        <p>Een groei van 5% betekent dus een factor:</p>
        <p class="formula">1 + 5/100 = 1{,}05</p>
        <p>Een daling van 5% betekent:</p>
        <p class="formula">1 - 5/100 = 0{,}95</p>
        <p>Daarom betekent een jaarlijkse groei van 3%:</p>
        <p class="formula">r = 1{,}03</p>
        <p>en een jaarlijks verval van 3%:</p>
        <p class="formula">r = 0{,}97</p>
        <div class="callout">
          <p><strong>Belangrijk:</strong></p>
          <p>
            Een percentage per periode wordt bij exponentiële groei telkens opnieuw
            op de <em>nieuwe</em> waarde toegepast.
          </p>
          <p>3% groei gedurende 10 jaar is daarom niet gewoon 30% erbij.</p>
        </div>
        <h3>5. Groei en verval</h3>
        <p>De waarde van de factor bepaalt wat er gebeurt.</p>
        <ul>
          <li><strong>r &gt; 1</strong>: de hoeveelheid groeit</li>
          <li><strong>r = 1</strong>: de hoeveelheid blijft constant</li>
          <li><strong>0 &lt; r &lt; 1</strong>: de hoeveelheid neemt af</li>
        </ul>
        <p>Bijvoorbeeld:</p>
        <p class="formula">f(t) = 100 · 1{,}2^{t}</p>
        <p>heeft een groeifactor van 1,2. Elke stap betekent dus +20%.</p>
        <p>Daartegenover staat:</p>
        <p class="formula">g(t) = 100 · 0{,}8^{t}</p>
        <p>Elke stap vermenigvuldigt met 0,8. Dat betekent een daling van 20%.</p>
        <p>
          Voor een gewone exponentiële functie met reële exponenten gebruiken we
          een positieve basis <strong>r</strong>.
          Een negatieve basis is niet voor alle reële exponenten gedefinieerd.
        </p>
        <h3>6. De tijdseenheid zit in de exponent</h3>
        <p>
          Soms gebeurt de verandering niet elk uur of elk jaar, maar bijvoorbeeld
          elke 4 uur.
        </p>
        <p>Stel dat een hoeveelheid elke 4 uur halveert. Startwaarde: 80 mg.</p>
        <p>Na 4 uur:</p>
        <p class="formula">80 · (1/2) = 40</p>
        <p>Na 8 uur is de factor twee keer toegepast:</p>
        <p class="formula">80 · (1/2)^{2} = 20</p>
        <p>Daarom schrijven we voor een tijd <em>t</em> in uren:</p>
        <p class="formula">m(t) = 80 · (1/2)^{t/4}</p>
        <p>
          De uitdrukking <strong>t/4</strong> telt hoeveel perioden van 4 uur
          verstreken zijn.
        </p>
        <div class="callout">
          <p><strong>De exponent moet het aantal groeiperioden voorstellen.</strong></p>
          <p>Verander je de tijdseenheid, dan verandert vaak ook de vorm van de exponent.</p>
        </div>
        <h3>7. Exponentiële groei tegenover lineaire groei</h3>
        <p>Neem twee hoeveelheden die allebei starten op 100.</p>
        <p>De eerste groeit lineair met 20 per jaar:</p>
        <p class="formula">L(t) = 100 + 20t</p>
        <p>De tweede groeit exponentieel met factor 1,2:</p>
        <p class="formula">E(t) = 100 · 1{,}2^{t}</p>
        <p>Na 1 jaar zijn beide 120. Maar daarna beginnen ze uiteen te lopen.</p>
        <p>Na 5 jaar:</p>
        <p class="formula">L(5) = 200</p>
        <p class="formula">E(5) \\approx 249</p>
        <p>Na 10 jaar:</p>
        <p class="formula">L(10) = 300</p>
        <p class="formula">E(10) \\approx 619</p>
                    <div class="theory-image">
        <img
          src="assets/groei-vs-rechte.svg"
          alt="Twee grafieken vanaf 100: de rechte 100 + 100t en de exponentiële 100 keer 2 tot de macht t. Bij t = 0 en t = 1 vallen ze samen; daarna stijgt de exponentiële sneller."
        >
      </div>
        <p>
          Bij lineaire groei blijft de jaarlijkse toename gelijk.
          Bij exponentiële groei wordt de toename zelf steeds groter.
        </p>
        <div class="callout">
          <p><strong>Herkenning:</strong></p>
          <p>Vaste <strong>verschillen</strong> → lineair.</p>
          <p>Vaste <strong>verhoudingen</strong> → exponentieel.</p>
        </div>
        <h3>8. De grafiek van een exponentiële functie</h3>
        <p>Beschouw:</p>
        <p class="formula">f(t) = a · r^{t}</p>
        <p>Bij <strong>a &gt; 0</strong> ligt de grafiek boven de t-as. De grafiek gaat door:</p>
        <p class="formula">(0, a)</p>
        <p>want:</p>
        <p class="formula">f(0) = a · r^{0} = a</p>
        <p>
          Bij groei <strong>r &gt; 1</strong> stijgt de grafiek.
          Bij verval <strong>0 &lt; r &lt; 1</strong> daalt ze.
        </p>
        <p>
          Bij positieve <em>a</em> en <em>r</em> wordt de waarde steeds positief.
          De grafiek raakt de t-as dus niet.
          De t-as is een <strong>asymptoot</strong>: de grafiek kan er steeds dichter
          bij komen zonder ze te bereiken.
        </p>
        <h3>9. Nu draaien we de vraag om</h3>
        <p>We weten ondertussen wat exponentiëren doet.</p>
        <p class="formula">2^{3} = 8</p>
        <p>Maar stel dat we de uitkomst kennen en de exponent niet:</p>
        <p>“Tot welke macht moeten we 2 verheffen om 8 te krijgen?”</p>
        <p>Het antwoord is 3.</p>
        <p>
          De bewerking die deze omgekeerde vraag beantwoordt, noemen we de
          <strong>logaritme</strong>.
        </p>
        <p class="formula">\\log_{2} 8 = 3</p>
        <div class="callout">
          <p><strong>Een logaritme vraagt naar de exponent.</strong></p>
          <p>Bij <strong>log<sub>2</sub> 8</strong> vragen we: “2 tot welke macht is 8?”</p>
        </div>
        <h3>10. De formele definitie van een logaritme</h3>
        <p>De logaritme is precies de omgekeerde bewerking van exponentiëren:</p>
        <p class="formula">\\log_{b} y = x</p>
        <p>betekent precies:</p>
        <p class="formula">b^{x} = y</p>
        <p>
          De basis <strong>b</strong> moet positief zijn en verschillend van 1.
          Het getal <strong>y</strong> moet positief zijn.
        </p>
        <p>Bijvoorbeeld:</p>
        <p class="formula">\\log_{10} 1000 = 3</p>
        <p>want:</p>
        <p class="formula">10^{3} = 1000</p>
        <p>En:</p>
        <p class="formula">\\log_{2} 32 = 5</p>
        <p>want:</p>
        <p class="formula">2^{5} = 32</p>
        <h3>11. Exponentiëren en logaritmeren zijn inverse bewerkingen</h3>
        <p>
          We kunnen exponentiëren en logaritmeren zien als twee richtingen van
          dezelfde relatie.
        </p>
        <p class="formula">2^{t} = y</p>
        <p>Als we <em>t</em> kennen, kunnen we <em>y</em> berekenen door te exponentiëren.</p>
        <p>
          Als we <em>y</em> kennen en <em>t</em> willen terugvinden, gebruiken we
          de logaritme:
        </p>
        <p class="formula">t = \\log_{2} y</p>
        <p>Daarom geldt:</p>
        <p class="formula">\\log_{b}(b^{t}) = t</p>
        <p class="formula">b^{\\log_{b} y} = y</p>
        <p>
          Dit lijkt op het verband tussen kwadrateren en de vierkantswortel uit
          les 2.6: de ene bewerking maakt iets, de inverse bewerking maakt die
          stap weer ongedaan.
        </p>
        <h3>12. Logaritmische rekenregels</h3>
        <p>
          Omdat een logaritme een exponent voorstelt, kunnen we de machtswetten
          gebruiken om logaritmische rekenregels af te leiden.
        </p>
        <p>Voor positieve <em>x</em> en <em>y</em> en een geldige basis <em>b</em> geldt:</p>
        <p class="formula">\\log_{b}(xy) = \\log_{b} x + \\log_{b} y</p>
        <p class="formula">\\log_{b}(x/y) = \\log_{b} x - \\log_{b} y</p>
        <p class="formula">\\log_{b}(x^{k}) = k · \\log_{b} x</p>
        <p>Je kunt deze regels intuïtief lezen als:</p>
        <ul>
          <li>een product wordt een som</li>
          <li>een quotiënt wordt een verschil</li>
          <li>een exponent komt voor de logaritme te staan</li>
        </ul>
        <p>Bijvoorbeeld:</p>
        <p class="formula">\\log_{2} 8 + \\log_{2} 4 = 3 + 2 = 5</p>
        <p>En inderdaad:</p>
        <p class="formula">\\log_{2}(8 · 4) = \\log_{2} 32 = 5</p>
        <div class="callout">
          <p><strong>Let op de voorwaarden.</strong></p>
          <p>
            Je kunt binnen de reële getallen geen logaritme nemen van 0 of van
            een negatief getal.
          </p>
        </div>
        <h3>13. Een exponentiële vergelijking oplossen</h3>
        <p>
          Stel dat we willen weten wanneer een hoeveelheid van 100 naar 800 is
          gegroeid volgens:
        </p>
        <p class="formula">100 · 2^{t} = 800</p>
        <p>Eerst halen we de startwaarde weg:</p>
        <p class="formula">2^{t} = 8</p>
        <p>
          Nu staat de onbekende in de exponent.
          De logaritme haalt die exponent terug:
        </p>
        <p class="formula">t = \\log_{2} 8</p>
        <p class="formula">t = 3</p>
        <p>Na 3 tijdseenheden is de hoeveelheid dus 800.</p>
        <h3>14. Wanneer het antwoord geen geheel getal is</h3>
        <p>Niet elke exponentiële vergelijking heeft een mooi geheel antwoord.</p>
        <p>Stel:</p>
        <p class="formula">2^{t} = 10</p>
        <p>
          Er bestaat geen geheel getal <em>t</em> waarvoor dit precies klopt.
          Toch bestaat er wel een reële oplossing:
        </p>
        <p class="formula">t = \\log_{2} 10</p>
        <p>Met een rekenmachine kunnen we deze waarde benaderen.</p>
        <p>
          Het belangrijke inzicht is niet het decimale antwoord, maar de methode:
          de logaritme maakt een onbekende exponent bereikbaar.
        </p>
        <h3>15. Een algemene methode voor exponentiële vergelijkingen</h3>
        <p>Beschouw een vergelijking van de vorm:</p>
        <p class="formula">a · r^{t} = c</p>
        <p>Eerst delen we door <em>a</em>:</p>
        <p class="formula">r^{t} = c/a</p>
        <p>Daarna gebruiken we de logaritme met basis <em>r</em>:</p>
        <p class="formula">t = \\log_{r}(c/a)</p>
        <p>
          Dit werkt wanneer de betrokken waarden voldoen aan de voorwaarden voor
          een reële logaritme en exponentiële functie.
        </p>
        <p>
          In veel toepassingen kennen we de logaritme met de gewenste basis niet
          rechtstreeks op de rekenmachine. Daarom is een omzetting naar een andere
          basis handig.
        </p>
        <h3>16. De basis veranderen</h3>
        <p>Voor geldige positieve waarden geldt:</p>
        <p class="formula">\\log_{b} c = \\frac{\\log_{k} c}{\\log_{k} b}</p>
        <p>
          We mogen dus een logaritme met basis <em>b</em> omzetten naar een
          logaritme met een andere geldige basis <em>k</em>.
        </p>
        <p>Bijvoorbeeld:</p>
        <p class="formula">\\log_{2} 10 = \\frac{\\ln 10}{\\ln 2}</p>
        <p>
          Hiermee kunnen we een logaritme met basis 2 berekenen met de
          natuurlijke logaritme op een gewone wetenschappelijke rekenmachine.
        </p>
        <h3>17. De natuurlijke logaritme en het getal e</h3>
        <p>Eén bepaalde basis komt in de wiskunde bijzonder vaak voor:</p>
        <p class="formula">e \\approx 2{,}71828</p>
        <p>De logaritme met basis <em>e</em> noemen we de <strong>natuurlijke logaritme</strong>:</p>
        <p class="formula">\\ln x = \\log_{e} x</p>
        <p>
          De natuurlijke logaritme is dus geen volledig nieuwe bewerking.
          Het is gewoon een logaritme met een bijzondere basis.
        </p>
        <p>
          In deze fase hoeven we nog niet af te leiden waarom juist <em>e</em>
          zo belangrijk is.
          In Fase 3 wordt het belangrijk wanneer we functies gaan differentiëren.
          Daar zal bijvoorbeeld blijken dat de afgeleide van <strong>e<sup>x</sup></strong>
          opnieuw <strong>e<sup>x</sup></strong> is.
        </p>
        <h3>18. De logaritmische functie</h3>
        <p>
          Net zoals we een exponentiële functie kunnen definiëren, kunnen we ook
          een logaritmische functie bekijken:
        </p>
        <p class="formula">g(x) = \\log_{b} x</p>
        <p>Omdat een logaritme de exponent zoekt, moet het argument positief zijn:</p>
        <p class="formula">x &gt; 0</p>
        <p>De logaritmische functie gaat altijd door:</p>
        <p class="formula">(1, 0)</p>
        <p>Want:</p>
        <p class="formula">\\log_{b} 1 = 0</p>
        <p>omdat:</p>
        <p class="formula">b^{0} = 1</p>
        <p>
          Als <strong>b &gt; 1</strong>, stijgt de logaritmische functie.
          Als <strong>0 &lt; b &lt; 1</strong>, daalt ze.
        </p>
        <p>
          De functie is alleen gedefinieerd voor positieve invoer.
          Een logaritme van 0 of van een negatief getal bestaat niet binnen de
          reële getallen.
        </p>
        <h3>19. Exponentiële en logaritmische functies horen bij elkaar</h3>
        <p>Kijk naar:</p>
        <p class="formula">y = b^{x}</p>
        <p>en:</p>
        <p class="formula">x = \\log_{b} y</p>
        <p>Het zijn twee manieren om exact dezelfde relatie te beschrijven.</p>
        <p>
          In de eerste vorm berekenen we <em>y</em> uit <em>x</em>.
          In de tweede vorm berekenen we <em>x</em> uit <em>y</em>.
        </p>
        <p>
          Daarom zijn de exponentiële en logaritmische functies elkaars
          <strong>inverse functies</strong>.
        </p>
        <p>
          Dit betekent ook dat hun grafieken elkaars spiegelbeeld zijn ten opzichte
          van de rechte:
        </p>
        <p class="formula">y = x</p>

              <div class="theory-image">
        <img
          src="assets/exp-log-invers.svg"
          alt="De grafieken van y = 2 tot de macht x en y = log met basis 2 van x. Ze zijn elkaars spiegelbeeld over de stippellijn y = x."
        >
      </div>
        <div class="callout">
          <p><strong>De twee richtingen:</strong></p>
          <p>exponentiële functie: <strong>input → exponentiëren → output</strong></p>
          <p>logaritmische functie: <strong>output → logaritmeren → oorspronkelijke exponent</strong></p>
        </div>
        <h3>20. Exponentiële modellen beschrijven de werkelijkheid</h3>
        <p>
          Exponentiële functies komen voor wanneer een verandering zichzelf
          telkens opnieuw op dezelfde manier vermenigvuldigt.
        </p>
        <p>Voorbeelden zijn onder andere:</p>
        <ul>
          <li>samengestelde interest</li>
          <li>groei van populaties</li>
          <li>radioactief verval</li>
          <li>afbraakprocessen</li>
          <li>verdubbeling of halvering van hoeveelheden</li>
        </ul>
        <p>
          Maar een formule is altijd een <strong>model</strong>.
          Een model beschrijft de werkelijkheid slechts binnen bepaalde aannames.
        </p>
        <p>
          Een bacterie kan bijvoorbeeld gedurende een bepaalde periode exponentieel
          groeien, maar geen populatie kan onbeperkt blijven verdubbelen.
          Voedsel, ruimte en andere beperkingen veranderen het gedrag.
        </p>
        <p>
          Dit sluit aan bij les 2.4:
          een formule is een compacte beschrijving van een verband,
          maar de werkelijkheid bepaalt waar het model geldig blijft.
        </p>
        <h3>21. Van context naar exponentiële functie</h3>
        <p>Bij een exponentieel model kunnen we een vaste werkwijze gebruiken.</p>
        <p><strong>Stap 1 — Zoek de startwaarde.</strong></p>
        <p>Dit is de waarde bij <em>t = 0</em>.</p>
        <p><strong>Stap 2 — Zoek de factor per periode.</strong></p>
        <p>Groei van 6% geeft factor 1,06. Verval van 6% geeft factor 0,94.</p>
        <p><strong>Stap 3 — Bepaal wat één periode is.</strong></p>
        <p>Bijvoorbeeld één jaar, één uur of één generatie.</p>
        <p><strong>Stap 4 — Bouw het model.</strong></p>
        <p class="formula">f(t) = a · r^{t}</p>
        <p><strong>Stap 5 — Controleer de formule.</strong></p>
        <p>Controleer minstens de beginwaarde en één volgende stap.</p>
        <p><strong>Stap 6 — Gebruik een logaritme als de exponent onbekend is.</strong></p>
        <p>
          Als de vraag bijvoorbeeld luidt:
          “Na hoeveel perioden bereiken we waarde c?”,
          dan komt de onbekende in de exponent terecht en gebruiken we logaritmen.
        </p>
        <h3>22. Een volledig voorbeeld</h3>
        <p>
          Een bedrag van 2000 euro groeit jaarlijks met 3%.
          We willen het bedrag na 10 jaar kennen.
        </p>
        <p>De startwaarde is:</p>
        <p class="formula">a = 2000</p>
        <p>De groeifactor is:</p>
        <p class="formula">r = 1{,}03</p>
        <p>Het model wordt:</p>
        <p class="formula">K(t) = 2000 · 1{,}03^{t}</p>
        <p>Voor 10 jaar:</p>
        <p class="formula">K(10) = 2000 · 1{,}03^{10}</p>
        <p>Dit geeft ongeveer:</p>
        <p class="formula">K(10) \\approx 2688</p>
        <p>Ongeveer 2688 euro dus.</p>
        <p>
          Stel nu dat we niet vragen naar het bedrag na 10 jaar,
          maar naar het moment waarop het bedrag 2500 euro bereikt.
        </p>
        <p>Dan krijgen we:</p>
        <p class="formula">2000 · 1{,}03^{t} = 2500</p>
        <p>Eerst delen we door 2000:</p>
        <p class="formula">1{,}03^{t} = 1{,}25</p>
        <p>Nu halen we de exponent terug met een logaritme:</p>
        <p class="formula">t = \\log_{1{,}03}(1{,}25)</p>
        <p>Met de basiswisselformule kunnen we dit bijvoorbeeld schrijven als:</p>
        <p class="formula">t = \\frac{\\ln 1{,}25}{\\ln 1{,}03}</p>
        <p>
          Dezelfde methode werkt ook wanneer de oplossing geen geheel aantal jaren is.
        </p>
        <h3>23. Wat je uit een tabel kunt afleiden</h3>
        <p>Een exponentieel verband herken je vaak al voordat je de formule kent.</p>
        <p>Stel dat een tabel de waarden bevat:</p>
        <p class="formula">100,\\ 120,\\ 144,\\ 172{,}8,\\ \\ldots</p>
        <p>Kijk naar de verschillen:</p>
        <p class="formula">+20,\\ +24,\\ +28{,}8,\\ \\ldots</p>
        <p>Die zijn niet constant.</p>
        <p>Kijk nu naar de verhoudingen:</p>
        <p class="formula">120/100 = 1{,}2</p>
        <p class="formula">144/120 = 1{,}2</p>
        <p class="formula">172{,}8/144 = 1{,}2</p>
        <p>De verhouding is constant. Dat wijst op exponentiële groei met factor 1,2.</p>
        <div class="callout">
          <p><strong>Bij een tabel:</strong></p>
          <p>constant verschil → denk aan lineair.</p>
          <p>constante verhouding → denk aan exponentieel.</p>
        </div>
        <h3>24. De kern van de les</h3>
        <p>
          Exponentiële functies beschrijven veranderingen waarbij dezelfde factor
          telkens opnieuw wordt toegepast.
        </p>
        <p class="formula">f(t) = a · r^{t}</p>
        <p>
          Daarbij is <strong>a</strong> de startwaarde en <strong>r</strong> de factor
          per periode.
        </p>
        <p>
          Als de exponent onbekend is, gebruiken we de inverse bewerking:
          de logaritme.
        </p>
        <p class="formula">\\log_{b} y = x</p>
        <p>betekent precies:</p>
        <p class="formula">b^{x} = y</p>
        <p>Daarmee ontstaat een belangrijke keten:</p>
        <div class="callout">
          <p><strong>vaste factor → exponentiële functie → onbekende exponent → logaritme</strong></p>
          <p>
            Exponentiëren berekent de waarde.
            Logaritmeren zoekt de exponent terug.
          </p>
          <p>
            De natuurlijke logaritme is de logaritme met basis <strong>e</strong>.
          </p>
        </div>
      `
    },
  {
  id: "2.14",
  title: "Trigonometrie",
  goal: "Hoe verbinden we hoeken, lengtes en periodieke beweging?",
  theory: /* html */`
    <h2>Trigonometrie</h2>

    <p><strong>Doel:</strong></p>
    <ul>
      <li>overstaande, aanliggende en schuine zijde bij een scherpe hoek herkennen</li>
      <li>begrijpen waarom een hoek een vaste verhouding tussen zijden bepaalt</li>
      <li>sinus, cosinus en tangens als functies van een hoek gebruiken</li>
      <li>een zijde of een hoek in een rechthoekige driehoek bepalen</li>
      <li>de speciale hoeken 30°, 45° en 60° begrijpen</li>
      <li>graden en radialen naast elkaar zetten</li>
      <li>sinus en cosinus op de eenheidscirkel lezen</li>
      <li>sinus en cosinus ook voor hoeken buiten 0°–90° begrijpen</li>
      <li>periodiciteit herkennen</li>
    </ul>

    <p>
      In les 2.9 leerden we de Stelling van Pythagoras:
      een verband tussen de <strong>zijden</strong> van een rechthoekige driehoek.
      In les 2.10 leerden we dat gelijkvormige figuren dezelfde
      <strong>verhoudingen</strong> hebben.
    </p>

    <p>
      Trigonometrie brengt die ideeën samen.
      We ontdekken dat een <strong>hoek</strong> bepaalt welke verhouding er
      tussen de zijden van een rechthoekige driehoek ontstaat.
    </p>

    <h3>1. Een hoek in een rechthoekige driehoek</h3>

    <p>
      Neem een rechthoekige driehoek en kies één van de scherpe hoeken.
      We noemen die hoek <strong>θ</strong> (theta).
    </p>

    <p>
      Vanuit die gekozen hoek krijgen de drie zijden een specifieke naam:
    </p>

    <ul>
      <li>
        <strong>schuine zijde</strong> — tegenover de rechte hoek en dus de langste zijde;
      </li>
      <li>
        <strong>overstaande zijde</strong> — de zijde tegenover θ;
      </li>
      <li>
        <strong>aanliggende zijde</strong> — de zijde naast θ die geen schuine zijde is.
      </li>
    </ul>

    <p>
      Kies je de andere scherpe hoek, dan veranderen de overstaande en
      aanliggende zijde van plaats.
      De schuine zijde blijft dezelfde.
    </p>

    <div class="callout">
      <p><strong>De namen hangen af van de gekozen hoek.</strong></p>
      <p>
        “Overstaand” en “aanliggend” zijn dus geen vaste eigenschappen van
        een zijde. Ze worden bepaald door de hoek waarnaar je kijkt.
      </p>
    </div>

    <h3>2. Een hoek bepaalt een verhouding</h3>

    <p>
      Kijk naar twee rechthoekige driehoeken met dezelfde scherpe hoek.
      De ene driehoek kan veel groter zijn dan de andere.
    </p>

    <p>
      Door gelijkvormigheid hebben overeenkomstige zijden steeds dezelfde verhouding.
    </p>

    <p>
      Stel dat in een kleine driehoek de overstaande zijde 3 is en de
      schuine zijde 5.
      In een grotere, gelijkvormige driehoek zijn die zijden bijvoorbeeld
      6 en 10.
    </p>

    <p class="formula">3/5 = 6/10</p>

    <p>
      De absolute lengtes zijn veranderd, maar de verhouding niet.
    </p>

    <p>
      Dat is het fundamentele idee achter trigonometrie:
      <strong>de hoek bepaalt de verhouding</strong>, niet de grootte van de driehoek.
    </p>

    <p>
      Daardoor kunnen we aan een hoek een bepaald getal koppelen.
      Dat getal noemen we bijvoorbeeld de sinus van die hoek.
    </p>

    <div class="callout">
      <p>
        <strong>Een hoek bepaalt een verhouding.</strong>
      </p>
      <p>
        Maak je de driehoek groter of kleiner zonder de hoek te veranderen,
        dan blijven de verhoudingen hetzelfde.
      </p>
    </div>

    <h3>3. Sinus, cosinus en tangens</h3>

    <p>
      Voor een scherpe hoek θ definiëren we drie belangrijke verhoudingen:
    </p>

    <p class="formula">\\sin \\theta = \\frac{\\text{overstaande}}{\\text{schuine}}</p>

    <p class="formula">\\cos \\theta = \\frac{\\text{aanliggende}}{\\text{schuine}}</p>

    <p class="formula">\\tan \\theta = \\frac{\\text{overstaande}}{\\text{aanliggende}}</p>

          <div class="theory-image">
        <img
          src="assets/driehoek-trig-zijden.svg"
          alt="Rechthoekige driehoek. Bij hoek theta: de aanliggende zijde naast de hoek, de overstaande ertegenover, de schuine zijde tegenover de rechte hoek."
        >
      </div>

    <p>
      De bekende geheugensteun <strong>SOS-CAS-TOA</strong> kan helpen:
    </p>

    <ul>
      <li><strong>SOH</strong>: Sinus = Overstaande / Schuine</li>
      <li><strong>CAH</strong>: Cosinus = Aanliggende / Schuine</li>
      <li><strong>TOA</strong>: Tangens = Overstaande / Aanliggende</li>
    </ul>

    <p>
      Maar de geheugensteun is niet het belangrijkste.
      Belangrijker is dat je begrijpt wat de drie functies betekenen.
    </p>

    <div class="callout">
      <p><strong>Sinus, cosinus en tangens zijn geen zijden.</strong></p>
      <p>
        Het zijn getallen die bij een hoek horen.
      </p>
      <p>
        Je kunt ze daarom ook zien als functies:
        een hoek is de invoer en de verhouding is de uitvoer.
      </p>
    </div>

    <h3>4. De 3-4-5-driehoek</h3>

    <p>
      De bekende 3-4-5-driehoek uit les 2.9 is een mooi voorbeeld.
      De rechte hoek ligt tussen de zijden 3 en 4.
      De schuine zijde is 5.
    </p>

    <p>
      Kies de hoek die tegenover de zijde 3 ligt.
      Dan is:
    </p>

    <p class="formula">\\sin \\theta = 3/5</p>

    <p class="formula">\\cos \\theta = 4/5</p>

    <p class="formula">\\tan \\theta = 3/4</p>

    <p>
      De drie verhoudingen zijn dus verschillende manieren om dezelfde hoek
      te beschrijven.
    </p>

    <p>
      Pythagoras verschijnt opnieuw wanneer we de eerste twee verhoudingen
      combineren:
    </p>

    <p class="formula">(3/5)^{2} + (4/5)^{2} = 1</p>

    <p>
      Want:
    </p>

    <p class="formula">9/25 + 16/25 = 25/25 = 1</p>

    <p>
      Trigonometrie bouwt dus rechtstreeks verder op Pythagoras.
    </p>

    <h3>5. Een zijde berekenen</h3>

    <p>
      Stel dat een rechthoekige driehoek een schuine zijde van 10 heeft
      en dat één scherpe hoek 30° is.
    </p>

    <p>
      We kennen:
    </p>

    <p class="formula">\\sin 30^{\\circ} = 1/2</p>

    <p>
      De definitie van sinus zegt:
    </p>

    <p class="formula">\\sin 30^{\\circ} = \\frac{\\text{overstaande}}{10}</p>

    <p>
      Dus:
    </p>

    <p class="formula">1/2 = \\frac{\\text{overstaande}}{10}</p>

    <p>
      Daaruit volgt:
    </p>

    <p class="formula">\\text{overstaande} = 5</p>

    <p>
      De trigonometrische verhouding vormt dus een brug tussen een
      <strong>hoek</strong> en een <strong>lengte</strong>.
    </p>

    <p>
      Ken je twee zijden, dan kan Pythagoras vaak volstaan.
      Ken je één zijde en één scherpe hoek, dan kan trigonometrie de ontbrekende
      lengte bepalen.
    </p>

    <h3>6. Een hoek berekenen</h3>

    <p>
      De omgekeerde vraag is minstens zo belangrijk.
      Stel dat de overstaande zijde 3 is en de schuine zijde 5.
    </p>

    <p>
      Dan weten we:
    </p>

    <p class="formula">\\sin \\theta = 3/5</p>

    <p>
      Nu kennen we de verhouding, maar zoeken we de hoek.
      We gebruiken daarom de inverse functie van de sinus:
    </p>

    <p class="formula">\\theta = \\sin^{-1}(3/5)</p>

    <p>
      Op een rekenmachine wordt dit meestal weergegeven als
      <strong>sin⁻¹</strong> of <strong>arcsin</strong>.
    </p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        sin⁻¹( x ) betekent hier de <strong>inverse functie</strong> van sinus.
      </p>
      <p>
        Het betekent niet:
      </p>
      <p class="formula">1/\\sin x</p>
    </div>

    <p>
      Dit sluit rechtstreeks aan bij les 2.13:
      ook daar gebruikten we een inverse functie om een oorspronkelijke invoer
      terug te vinden.
    </p>

    <h3>7. De speciale hoek van 45°</h3>

    <p>
      Een rechthoekige gelijkbenige driehoek heeft twee gelijke rechthoekszijden.
      De twee scherpe hoeken zijn daarom gelijk.
    </p>

    <p>
      Omdat de hoeksom van een driehoek 180° is en één hoek 90°:
    </p>

    <p class="formula">\\theta + \\theta + 90^{\\circ} = 180^{\\circ}</p>

    <p>
      dus:
    </p>

    <p class="formula">\\theta = 45^{\\circ}</p>

    <p>
      Kies beide rechthoekszijden gelijk aan 1.
      Volgens Pythagoras is de schuine zijde:
    </p>

    <p class="formula">c = \\sqrt{1^{2} + 1^{2}} = \\sqrt{2}</p>

    <p>
      Daarom:
    </p>

    <p class="formula">\\sin 45^{\\circ} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}</p>

    <p class="formula">\\cos 45^{\\circ} = \\frac{\\sqrt{2}}{2}</p>

    <p class="formula">\\tan 45^{\\circ} = 1</p>

    <p>
      De waarden komen dus niet uit een magische tabel.
      Ze volgen uit gelijkheid van de zijden en Pythagoras.
    </p>

    <h3>8. De speciale hoeken van 30° en 60°</h3>

    <p>
      Neem een gelijkzijdige driehoek met zijde 2.
      Elke hoek is 60°.
      Deel de driehoek in twee gelijke rechthoekige driehoeken.
    </p>

    <p>
      Elke helft heeft:
    </p>

    <ul>
      <li>schuine zijde 2</li>
      <li>een horizontale zijde 1</li>
      <li>een hoek van 30°</li>
      <li>een hoek van 60°</li>
    </ul>

    <p>
      Met Pythagoras vinden we de derde zijde:
    </p>

    <p class="formula">h = \\sqrt{2^{2} - 1^{2}} = \\sqrt{3}</p>

    <p>
      Daardoor krijgen we:
    </p>

    <p class="formula">\\sin 30^{\\circ} = 1/2</p>

    <p class="formula">\\cos 30^{\\circ} = \\sqrt{3}/2</p>

    <p class="formula">\\tan 30^{\\circ} = 1/\\sqrt{3}</p>

    <p>
      En voor 60° wisselen de rollen van de twee rechthoekszijden:
    </p>

    <p class="formula">\\sin 60^{\\circ} = \\sqrt{3}/2</p>

    <p class="formula">\\cos 60^{\\circ} = 1/2</p>

    <p class="formula">\\tan 60^{\\circ} = \\sqrt{3}</p>

    <div class="callout">
      <p>
        <strong>30°, 45° en 60° zijn geen losse feiten.</strong>
      </p>
      <p>
        Hun bekende waarden kunnen worden afgeleid uit eenvoudige driehoeken
        en de Stelling van Pythagoras.
      </p>
    </div>

    <h3>9. Graden en radialen</h3>

    <p>
      Tot nu toe hebben we hoeken uitgedrukt in graden.
      Er bestaat nog een andere schaal: de <strong>radiaal</strong>.
    </p>

    <p>
      Een volledige draai is:
    </p>

    <p class="formula">360^{\\circ} = 2\\pi</p>

    <p>
      Daarom:
    </p>

    <p class="formula">180^{\\circ} = \\pi</p>

    <p class="formula">90^{\\circ} = \\pi/2</p>

    <p class="formula">60^{\\circ} = \\pi/3</p>

    <p class="formula">45^{\\circ} = \\pi/4</p>

    <p class="formula">30^{\\circ} = \\pi/6</p>

    <p>
      Een radiaal is gekoppeld aan de booglengte op een cirkel.
      Bij een cirkel met straal 1 komt een hoek van 1 radiaal overeen met
      een booglengte van 1.
    </p>

    <p>
      In Fase 3 worden radialen bijzonder belangrijk bij calculus.
      Voor deze les is vooral belangrijk dat graden en radialen twee
      verschillende manieren zijn om dezelfde hoek te meten.
    </p>

    <h3>10. Van driehoek naar cirkel</h3>

    <p>
      Tot nu toe gebruikten we sinus en cosinus in een rechthoekige driehoek.
      Maar daarmee kunnen we alleen scherpe hoeken rechtstreeks behandelen.
    </p>

    <p>
      We kunnen het idee uitbreiden met de <strong>eenheidscirkel</strong>:
      een cirkel met middelpunt in de oorsprong en straal 1.
    </p>
          <div class="theory-image">
        <img
          src="assets/eenheidscirkel-sin-cos.svg"
          alt="Eenheidscirkel met straal onder hoek theta. De horizontale poot is cosinus theta, de verticale poot is sinus theta. Het punt is (cos theta, sin theta)."
        >
      </div>
    <p>
      Teken vanuit de oorsprong een straal die een hoek θ maakt met de
      positieve x-as.
      Het eindpunt van die straal ligt op de cirkel.
    </p>

    <p>
      Omdat de straal lengte 1 heeft, kunnen we de horizontale en verticale
      component ervan rechtstreeks verbinden met cosinus en sinus.
    </p>

    <p class="formula">(x, y) = (\\cos \\theta, \\sin \\theta)</p>

    <p>
      De x-coördinaat is dus cosinus en de y-coördinaat is sinus.
    </p>

    <div class="callout">
      <p>
        <strong>De driehoek gaf ons de verhouding.</strong>
      </p>
      <p>
        <strong>De eenheidscirkel geeft die verhouding een plaats in het
        coördinatenstelsel.</strong>
      </p>
    </div>

    <h3>11. Pythagoras op de eenheidscirkel</h3>

    <p>
      Elk punt op de eenheidscirkel voldoet aan:
    </p>

    <p class="formula">x^{2} + y^{2} = 1</p>

    <p>
      Omdat:
    </p>

    <p class="formula">x = \\cos \\theta</p>

    <p class="formula">y = \\sin \\theta</p>

    <p>
      krijgen we:
    </p>

    <p class="formula">\\sin^{2} \\theta + \\cos^{2} \\theta = 1</p>

    <p>
      Dit is dus geen nieuwe, toevallige formule.
      Het is de Stelling van Pythagoras toegepast op een driehoek waarvan
      de schuine zijde 1 is.
    </p>

    <div class="callout">
      <p><strong>Een belangrijke verbinding:</strong></p>
      <p>
        Pythagoras beschrijft de geometrie van de driehoek.
      </p>
      <p>
        De identiteit
        <strong>sin²θ + cos²θ = 1</strong>
        beschrijft dezelfde geometrie in trigonometrische taal.
      </p>
    </div>

    <h3>12. Sinus en cosinus buiten 0°–90°</h3>

    <p>
      De eenheidscirkel maakt sinus en cosinus bruikbaar voor alle hoeken.
    </p>

    <p>
      Kijk bijvoorbeeld naar een hoek in het tweede kwadrant.
      Het bijbehorende punt heeft een negatieve x-coördinaat en een positieve
      y-coördinaat.
    </p>

    <p>
      Omdat:
    </p>

    <p class="formula">(x, y) = (\\cos \\theta, \\sin \\theta)</p>

    <p>
      volgt:
    </p>

    <ul>
      <li>cosinus is negatief</li>
      <li>sinus is positief</li>
    </ul>

    <p>
      In het derde kwadrant zijn beide coördinaten negatief.
      In het vierde kwadrant is x positief en y negatief.
    </p>

    <p>
      Daardoor kunnen we de tekens van sinus en cosinus rechtstreeks aflezen
      uit de positie van het punt op de cirkel.
    </p>

    <h3>13. Een volledige draai brengt ons terug</h3>

    <p>
      Een volledige draai verandert het eindpunt op de eenheidscirkel niet.
    </p>

    <p class="formula">\\theta + 360^{\\circ}</p>

    <p>
      en:
    </p>

    <p class="formula">\\theta + 2\\pi</p>

    <p>
      geven dus hetzelfde punt.
    </p>

    <p>
      Daarom krijgen we:
    </p>

    <p class="formula">\\sin(\\theta + 2\\pi) = \\sin \\theta</p>

    <p class="formula">\\cos(\\theta + 2\\pi) = \\cos \\theta</p>

    <p>
      Dit noemen we <strong>periodiciteit</strong>.
      Na één volledige periode herhaalt hetzelfde patroon zich.
    </p>

    <p>
      Dit is het eerste moment waarop sinus en cosinus duidelijk meer worden
      dan alleen hulpmiddelen voor driehoeken.
      Ze kunnen ook bewegingen beschrijven die zich steeds opnieuw herhalen.
    </p>

    <h3>14. De tangens als verhouding van sinus en cosinus</h3>

    <p>
      We hadden:
    </p>

    <p class="formula">\\tan \\theta = \\frac{\\text{overstaande}}{\\text{aanliggende}}</p>

    <p>
      en:
    </p>

    <p class="formula">\\sin \\theta = \\frac{\\text{overstaande}}{\\text{schuine}}</p>

    <p class="formula">\\cos \\theta = \\frac{\\text{aanliggende}}{\\text{schuine}}</p>

    <p>
      Als we sinus door cosinus delen, verdwijnen de schuine zijden:
    </p>

    <p class="formula">\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}</p>

    <p>
      Deze formule laat ook zien wanneer tangens niet bestaat.
      Delen door nul mag niet.
      Daarom is tangens niet gedefinieerd wanneer:
    </p>

    <p class="formula">\\cos \\theta = 0</p>

    <p>
      Dat gebeurt bijvoorbeeld bij 90° en 270°.
    </p>

    <p>
      Op de grafiek van tangens verschijnen daar verticale asymptoten.
      Dit is een eerste voorbeeld van een functie die niet voor elke invoer
      gedefinieerd is.
    </p>

    <h3>15. Trigonometrie als functies</h3>

    <p>
      In les 2.11 leerden we dat een functie een verband beschrijft tussen
      een invoer en een uitvoer.
    </p>

    <p>
      Dat idee kunnen we nu toepassen op hoeken.
    </p>

    <p class="formula">\\theta \\rightarrow \\sin \\theta</p>

    <p class="formula">\\theta \\rightarrow \\cos \\theta</p>

    <p class="formula">\\theta \\rightarrow \\tan \\theta</p>

    <p>
      De hoek is de invoer.
      De verhouding is de uitvoer.
    </p>

    <p>
      Op de eenheidscirkel krijgen sinus en cosinus bovendien een geometrische
      betekenis als coördinaten:
    </p>

    <p class="formula">(\\cos \\theta, \\sin \\theta)</p>

    <p>
      Daarmee komen <strong>functies</strong>, <strong>coördinaten</strong>,
      <strong>meetkunde</strong> en <strong>hoeken</strong> samen.
    </p>

    <h3>16. Van hoek naar periodieke beweging</h3>

    <p>
      Een punt dat over de eenheidscirkel draait, verandert voortdurend van
      x- en y-coördinaat.
    </p>

    <p>
      Die coördinaten zijn:
    </p>

    <p class="formula">x = \\cos \\theta</p>

    <p class="formula">y = \\sin \\theta</p>

    <p>
      Als de hoek steeds verder draait, veranderen x en y steeds opnieuw
      volgens hetzelfde patroon.
    </p>

    <p>
      Daarom kunnen sinus en cosinus later gebruikt worden om periodieke
      verschijnselen te beschrijven, zoals:
    </p>

    <ul>
      <li>draaiende bewegingen</li>
      <li>golven</li>
      <li>trillingen</li>
      <li>periodieke signalen</li>
    </ul>

    <p>
      De volledige studie van sinus- en cosinusgrafieken en hun toepassing
      op golven volgt later.
      Hier is het fundamentele verband gelegd:
      <strong>cirkelbeweging → coördinaten → sinus en cosinus → periodiciteit.</strong>
    </p>

    <h3>17. De grote samenhang van Fase 2</h3>

    <p>
      Trigonometrie brengt opvallend veel ideeën uit de vorige lessen samen.
    </p>

    <p>
      Uit <strong>2.1</strong> komen de variabelen en symbolen.
    </p>

    <p>
      Uit <strong>2.3</strong> komen vergelijkingen en het zoeken naar onbekenden.
    </p>

    <p>
      Uit <strong>2.8</strong> komt het cartesische coördinatenstelsel.
    </p>

    <p>
      Uit <strong>2.9</strong> komen driehoeken en Pythagoras.
    </p>

    <p>
      Uit <strong>2.10</strong> komt gelijkvormigheid en het idee van vaste verhoudingen.
    </p>

    <p>
      Uit <strong>2.11</strong> komt het functiebegrip.
    </p>

    <p>
      Uit <strong>2.13</strong> komt het idee van inverse functies.
    </p>

    <p>
      Trigonometrie gebruikt ze nu allemaal samen.
    </p>

    <div class="callout">
      <p><strong>Van driehoek naar functie:</strong></p>
      <p>
        een hoek bepaalt een verhouding;
      </p>
      <p>
        de verhouding wordt een functiewaarde;
      </p>
      <p>
        op de eenheidscirkel wordt die functiewaarde een coördinaat;
      </p>
      <p>
        na een volledige draai herhaalt het patroon zich.
      </p>
    </div>

    <h3>18. De brug naar Fase 3</h3>

    <p>
      In Fase 2 hebben we geleerd hoe we getallen, symbolen, formules,
      vergelijkingen, geometrische objecten en functies kunnen beschrijven.
    </p>

    <p>
      We kunnen een functie berekenen.
      We kunnen haar grafiek bekijken.
      We kunnen verbanden tussen grootheden beschrijven.
    </p>

    <p>
      Maar er blijft een belangrijke vraag over:
    </p>

    <div class="callout">
      <p><strong>Hoe snel verandert een functie?</strong></p>
    </div>

    <p>
      Bij een rechte is de verandering constant.
      Bij een parabool verandert de helling.
      Bij een exponentiële functie verandert de groeisnelheid.
      Bij sinus en cosinus verandert de richting voortdurend.
    </p>

    <p>
      Om zulke veranderingen precies te bestuderen, hebben we nieuwe ideeën
      nodig: <strong>limieten</strong>, <strong>afgeleiden</strong> en
      <strong>integralen</strong>.
    </p>

    <p>
      Dat is het begin van Fase 3: <strong>calculus</strong>.
    </p>

    <h3>19. Kernidee</h3>

    <p>
      Trigonometrie begon met een eenvoudige vraag:
      hoe hangt een hoek samen met de zijden van een driehoek?
    </p>

    <p class="formula">\\sin \\theta = \\frac{\\text{overstaande}}{\\text{schuine}}</p>

    <p class="formula">\\cos \\theta = \\frac{\\text{aanliggende}}{\\text{schuine}}</p>

    <p class="formula">\\tan \\theta = \\frac{\\text{overstaande}}{\\text{aanliggende}}</p>

    <p>
      Via gelijkvormigheid worden deze verhoudingen bepaald door de hoek,
      niet door de grootte van de driehoek.
    </p>

    <p>
      Op de eenheidscirkel krijgen sinus en cosinus een nog algemenere betekenis:
    </p>

    <p class="formula">(\\cos \\theta, \\sin \\theta)</p>

    <p>
      Daardoor kunnen we ze voor alle hoeken gebruiken en ontstaat periodiciteit.
    </p>

    <div class="callout">
      <p><strong>Fase 2 eindigt hier:</strong></p>
      <p>
        <strong>hoek → verhouding → functie → coördinaat → periodiek gedrag</strong>
      </p>
      <p>
        In Fase 3 verschuift de centrale vraag van
        <strong>“wat is de waarde?”</strong>
        naar
        <strong>“hoe verandert de waarde?”</strong>.
      </p>
    </div>
  `
}
]
