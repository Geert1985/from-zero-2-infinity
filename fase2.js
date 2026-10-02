/* Lesstof Fase 2 — Algebra & geometrie. */
const MILESTONES_2 = [
  {
  id: "2.1",
  title: "Variabelen & algebraïsche uitdrukkingen",
  goal: "Hoe kan een getal een onbekende worden?",
  theory: /* html */`
    <h2>Variabelen & algebraïsche uitdrukkingen</h2>
    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom gebruiken we letters om getallen voor te stellen?</li>
      <li>Wat is het verschil tussen een onbekende en een veranderlijke?</li>
      <li>Hoe lezen we een algebraïsche uitdrukking en herkennen we termen, coëfficiënten en constanten?</li>
      <li>Hoe kan één algebraïsche uitdrukking verschillende waarden aannemen?</li>
      <li>Hoe vullen we een waarde in een algebraïsche uitdrukking in?</li>
      <li>Hoe herkennen en combineren we gelijksoortige termen?</li>
    </ul>

    <h3>Van een bekend getal naar een letter</h3>
    <p>In Fase 1 rekenden we met concrete getallen. Een tas kost 12 euro. Twee tassen kosten:</p>
    <p class="formula">2 · 12 = 24</p>
    <div class="callout">
      <p><strong>Vanaf nu schrijven we het maalteken als een punt (·).</strong></p>
      <p>Dat doen we omdat we in de algebra ook letters gebruiken.</p>
      <p>Het gewone maalteken × kan dan gemakkelijk verward worden met de letter x.</p>
    </div>
    <p>Maar wat als de prijs nog niet bekend is, of als die kan veranderen? Dan willen we niet één specifiek geval beschrijven, maar het algemene verband.</p>
    <p>Noem de prijs van één tas <strong>p</strong>. Twee tassen kosten dan:</p>
    <p class="formula">2 · p</p>
    <p>Als later blijkt dat p = 12, krijgen we:</p>
    <p class="formula">2 · 12 = 24</p>
    <p>Als p = 15, krijgen we:</p>
    <p class="formula">2 · 15 = 30</p>
    <p>De uitdrukking <span class="formula-inline">2p</span> beschrijft dus alle mogelijke prijzen tegelijk.</p>
    <div class="callout">
      <p><strong>Een variabele is een letter die een getal voorstelt.</strong></p>
      <p>De waarde van die variabele kan nog onbekend zijn, of verschillende toegelaten waarden aannemen.</p>
    </div>

    <h3>Onbekende of veranderlijke?</h3>
    <p>Hetzelfde symbool kan in verschillende situaties een andere rol spelen.</p>
    <p>In:</p>
    <p class="formula">x + 3 = 7</p>
    <p>zoeken we naar de waarde van x die de vergelijking waar maakt. Hier spreken we over een <strong>onbekende</strong>.</p>
    <p>In:</p>
    <p class="formula">y = 2x + 1</p>
    <p>kan x verschillende waarden aannemen. Voor elke toegelaten waarde van x krijgen we een waarde van y. Hier is x een <strong>veranderlijke</strong>.</p>
    <p>De begrippen overlappen, maar leggen een ander accent: bij een onbekende bepalen we een waarde; bij een veranderlijke kijken we hoe iets verandert wanneer de waarde verandert.</p>
    <div class="callout">
      <p><strong>De context bepaalt welke rol een letter speelt.</strong></p>
      <p>Een letter is niet uit zichzelf een “onbekende” of een “veranderlijke”. Die betekenis volgt uit wat we met de letter willen doen.</p>
    </div>

    <h3>Letters zijn getallen</h3>
    <p>We behandelen letters op dezelfde manier als getallen. Een getal vóór een letter betekent vermenigvuldiging:</p>
    <p class="formula">3x = 3 · x</p>
    <p>De vermenigvuldiging wordt meestal niet uitgeschreven. Ook:</p>
    <p class="formula">ab = a · b</p>
    <p>en:</p>
    <p class="formula">4xy = 4 · x · y</p>
    <p>Een factor 1 schrijven we meestal niet:</p>
    <p class="formula">x = 1x</p>
    <p>Ook een factor −1 wordt verkort:</p>
    <p class="formula">−x = −1x</p>
    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p><span class="formula-inline">3x</span> betekent <strong>3 keer x</strong>, niet 3 + x.</p>
      <p>Het ontbreken van het vermenigvuldigingsteken is een afspraak in de algebra.</p>
    </div>

    <h3>Onderdelen van een algebraïsche uitdrukking</h3>
    <p>Een <strong>algebraïsche uitdrukking</strong> is een combinatie van getallen, letters en bewerkingen. Bijvoorbeeld:</p>
    <p class="formula">3x + 5</p>
    <ul>
      <li><strong>variabele:</strong> de letter waarvan de waarde kan veranderen, hier x;</li>
      <li><strong>coëfficiënt:</strong> het getal dat een variabele vermenigvuldigt, hier 3;</li>
      <li><strong>constante:</strong> een getal zonder variabele, hier 5;</li>
      <li><strong>term:</strong> een onderdeel dat door + of − van andere termen is gescheiden.</li>
    </ul>
    <p>De uitdrukking <span class="formula-inline">3x + 5</span> bestaat uit twee termen: <span class="formula-inline">3x</span> en <span class="formula-inline">5</span>.</p>
    <p>Bij:</p>
    <p class="formula">−4x + 7 − 2x</p>
    <p>zijn de termen <span class="formula-inline">−4x</span>, <span class="formula-inline">7</span> en <span class="formula-inline">−2x</span>.</p>
    <p>Het minteken hoort bij de term die erop volgt.</p>

    <h3>Uitdrukking of vergelijking?</h3>
    <p>Het onderscheid is belangrijk.</p>
    <p>Een uitdrukking zoals:</p>
    <p class="formula">3x + 5</p>
    <p>heeft geen gelijkheidsteken. We kunnen ze berekenen of vereenvoudigen.</p>
    <p>Een vergelijking zoals:</p>
    <p class="formula">3x + 5 = 17</p>
    <p>bevat wel een gelijkheidsteken. We zoeken waarden van x waarvoor linker- en rechterkant gelijk zijn.</p>
    <div class="callout">
      <p><strong>Onthoud:</strong></p>
      <p>Een uitdrukking geeft een hoeveelheid of berekening weer.</p>
      <p>Een vergelijking stelt dat twee uitdrukkingen gelijk zijn.</p>
    </div>

    <h3>Een uitdrukking is een algemene structuur</h3>
    <p>Een uitdrukking hoeft niet één specifieke berekening te zijn.</p>
    <p class="formula">3x + 5</p>
    <p>De structuur blijft hetzelfde, de waarde verandert wanneer x verandert.</p>
    <p>Voor x = 2:</p>
    <p class="formula">3 · 2 + 5 = 11</p>
    <p>Voor x = 10:</p>
    <p class="formula">3 · 10 + 5 = 35</p>
    <div class="callout">
      <p><strong>De structuur blijft vast, de waarden kunnen veranderen.</strong></p>
      <p>Daarom kan één formule een hele verzameling situaties beschrijven.</p>
    </div>

    <h3>Een waarde invullen</h3>
    <p>Een uitdrukking krijgt een concrete waarde zodra we een waarde voor de variabele kiezen.</p>
    <p>Neem <span class="formula-inline">3x + 5</span> en stel x = 4:</p>
    <p class="formula">3 · 4 + 5 = 12 + 5 = 17</p>
    <p>Bij een negatieve waarde gebruiken we haakjes, zodat de hele waarde wordt ingevuld:</p>
    <p class="formula">x = −2</p>
    <p class="formula">3x + 5 = 3(−2) + 5 = −6 + 5 = −1</p>
    <div data-widget="algebraMachine"></div>
    <p>Ook bij machten zijn haakjes belangrijk:</p>
    <p class="formula">x = −3 → x^{2} = (−3)^{2} = 9</p>
    <p>Dat is iets anders dan <span class="formula-inline">−3^{2}</span>: daar berekent de rekenvolgorde eerst de macht.</p>

    <h3>Dezelfde letter kan verschillende waarden aannemen</h3>
    <p>Een variabele staat niet vast op één getal. Als:</p>
    <p class="formula">A = 2x + 1</p>
    <p>dan kunnen we bijvoorbeeld berekenen:</p>
    <p class="formula">x = 0 → A = 1</p>
    <p class="formula">x = 1 → A = 3</p>
    <p class="formula">x = 5 → A = 11</p>
    <p>Welke waarden toegelaten zijn, hangt af van de context. Een lengte kan bijvoorbeeld niet negatief zijn.</p>
    <div class="callout">
      <p><strong>Een formule krijgt betekenis door haar context.</strong></p>
      <p>Niet elke wiskundig mogelijke waarde hoeft in de werkelijkheid toegelaten te zijn.</p>
    </div>

    <h3>Gelijksoortige termen</h3>
    <p>We voegen termen samen als ze dezelfde algebraïsche structuur hebben.</p>
    <p class="formula">3x + 5x = 8x</p>
    <p class="formula">7a − 2a = 5a</p>
    <p class="formula">4x^{2} + 3x^{2} = 7x^{2}</p>
    <p>Termen zijn gelijksoortig wanneer dezelfde variabelen met dezelfde exponenten voorkomen. Daarom zijn <span class="formula-inline">3x</span> en <span class="formula-inline">3x^{2}</span> <strong>niet</strong> gelijksoortig. Ook <span class="formula-inline">3x</span> en 5 zijn dat niet.</p>
    <p class="formula">3x + 5 + 2x − 1 = 5x + 4</p>
    <p>Want:</p>
    <p class="formula">3x + 2x = 5x</p>
    <p class="formula">5 − 1 = 4</p>

    <h3>Van één situatie naar veel situaties</h3>
    <p>Stel dat een taxi 4 euro startkost heeft en daarna 2 euro per kilometer. Als <strong>k</strong> het aantal kilometers is:</p>
    <p class="formula">P = 4 + 2k</p>
    <p>Voor 3 kilometer:</p>
    <p class="formula">P = 4 + 2 · 3 = 10</p>
    <p>Voor 8 kilometer:</p>
    <p class="formula">P = 4 + 2 · 8 = 20</p>
    <div class="callout">
      <p><strong>Algebra beschrijft niet alleen één antwoord, maar een regel.</strong></p>
      <p>Door een andere waarde in te vullen, gebruiken we dezelfde regel voor een andere situatie.</p>
    </div>

    <h3>Een variabele kan een grootheid voorstellen</h3>
    <p>Als <span class="formula-inline">l</span> de lengte en <span class="formula-inline">b</span> de breedte van een rechthoek zijn, dan is de oppervlakte:</p>
    <p class="formula">A = l · b</p>
    <p>Voor l = 8 en b = 5:</p>
    <p class="formula">A = 8 · 5 = 40</p>
    <p>Eerst de algemene formule, daarna de getallen.</p>

    <h3>Wat we nu met algebra kunnen doen</h3>
    <ul>
      <li>een concrete situatie algemeen beschrijven;</li>
      <li>letters gebruiken voor onbekende of veranderlijke waarden;</li>
      <li>algebraïsche uitdrukkingen lezen;</li>
      <li>waarden invullen;</li>
      <li>gelijksoortige termen herkennen en samenvoegen;</li>
      <li>één regel gebruiken voor veel situaties.</li>
    </ul>
    <p>We beschrijven nu <strong>structuren en verbanden</strong>, niet alleen afzonderlijke getallen.</p>

    <h3>Vooruitblik: van uitdrukking naar functie</h3>
    <p>Een uitdrukking zoals <span class="formula-inline">2x + 1</span> kan voor verschillende waarden van x een verschillende uitkomst geven. Later in deze fase, in les 2.11, schrijven we dat als:</p>
    <p class="formula">f(x) = 2x + 1</p>
    <p>Dan kent de functie <span class="formula-inline">f</span> aan elke toegelaten invoer een uitvoer toe.</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>Algebra is een taal om algemene patronen en verbanden te beschrijven.</p>
      <p>Een algebraïsche uitdrukking heeft een vaste structuur, maar kan verschillende waarden aannemen wanneer de variabelen veranderen.</p>
      <p>Zo kunnen we met één formule veel verschillende situaties beschrijven.</p>
    </div>
  `
},
  {
  id: "2.2",
  title: "Algebraïsche bewerkingen",
  goal: "Hoe rekenen we met letters?",
  theory: /* html */`
    <h2>Algebraïsche bewerkingen</h2>
    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wanneer mogen we termen samennemen?</li>
      <li>Hoe vermenigvuldigen we monomen?</li>
      <li>Hoe werken we haakjes weg, ook bij een minteken?</li>
      <li>Hoe vermenigvuldigen we twee tweetermen?</li>
      <li>Welke merkwaardige producten herkennen we?</li>
      <li>Hoe ontbinden we een gemeenschappelijke factor of een verschil van kwadraten?</li>
    </ul>
    <p>In les 2.1 leerden we letters lezen. Nu rekenen we ermee. De rekenwetten uit Fase 1 blijven gelden.</p>

    <h3>Optellen en aftrekken: alleen gelijksoortige termen</h3>
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

    <h3>Wanneer zijn termen gelijksoortig?</h3>
    <p>Termen zijn gelijksoortig als ze <strong>dezelfde letters met dezelfde exponenten</strong> hebben. De coëfficiënt mag verschillen, het teken ook.</p>
    <p>Gelijksoortig:</p>
    <p class="formula">3x, −5x, 12x</p>
    <p>Ook gelijksoortig:</p>
    <p class="formula">2xy, −7xy, 4xy</p>
    <p>Niet gelijksoortig:</p>
    <p class="formula">3x, 3x^{2}, 3y</p>
    <p><span class="formula-inline">2xy</span> en <span class="formula-inline">2x^{2}y</span> evenmin: de macht van x verschilt.</p>
    <p class="formula">4x^{2} + 3x − 2x^{2} + 5x = 2x^{2} + 8x</p>
    <p>We combineren <span class="formula-inline">4x^{2}</span> met <span class="formula-inline">−2x^{2}</span>, en <span class="formula-inline">3x</span> met <span class="formula-inline">5x</span>.</p>

    <h3>Termen vermenigvuldigen</h3>
    <p>Een enkele term, zoals <span class="formula-inline">3x</span> of <span class="formula-inline">−2x^{2}</span>, heet een <strong>monoom</strong>. Bij het vermenigvuldigen van monomen:</p>
    <ul>
      <li>de coëfficiënten worden vermenigvuldigd;</li>
      <li>gelijke letters krijgen hun exponenten opgeteld.</li>
    </ul>
    <p class="formula">2x · 3x = (2 · 3) · (x · x) = 6x^{2}</p>
    <p class="formula">3a · 4b = 12ab</p>
    <p class="formula">2x^{2} · 3x^{3} = 6x^{5}</p>
    <p>Want <span class="formula-inline">x^{2} · x^{3} = x^{2+3} = x^{5}</span>.</p>
    <div class="callout">
      <p><strong>Klassieke fout:</strong> <span class="formula-inline">2x · 3x</span> is niet <span class="formula-inline">6x</span>.</p>
      <p>De letters worden ook vermenigvuldigd. Twee factoren x geven <span class="formula-inline">x^{2}</span>.</p>
    </div>

    <h3>Distributiviteit: een factor voor een haakje</h3>
    <p>Uit Fase 1:</p>
    <p class="formula">3(4 + 5) = 3 · 4 + 3 · 5</p>
    <p>De factor buiten het haakje gaat naar <strong>elke term</strong> erin:</p>
    <p class="formula">a(b + c) = ab + ac</p>
    <p class="formula">3(x + 4) = 3x + 12</p>
    <p class="formula">5(2x − 3) = 10x − 15</p>
    <p class="formula">2x(x + 3) = 2x · x + 2x · 3 = 2x^{2} + 6x</p>
    <div class="callout">
      <p><strong>Veelgemaakte fout:</strong> <span class="formula-inline">3(x + 4)</span> is niet <span class="formula-inline">3x + 4</span>.</p>
      <p>De 3 moet ook de 4 raken.</p>
    </div>

    <h3>Een minteken vóór een haakje</h3>
    <p>Een min vóór een haakje is vermenigvuldigen met −1:</p>
    <p class="formula">−(x + 4) = −1 · (x + 4) = −x − 4</p>
    <p>Elke term wisselt van teken, niet alleen de eerste:</p>
    <p class="formula">−(x − 5) = −x + 5</p>
    <p class="formula">7 − (2x − 3) = 7 − 2x + 3 = 10 − 2x</p>
    <div class="callout">
      <p><strong>Onthoud:</strong> een min voor een haakje keert elk teken om.</p>
    </div>

    <h3>Twee haakjes vermenigvuldigen</h3>
    <p>Elke term van het eerste haakje vermenigvuldigt met elke term van het tweede.</p>
    <p class="formula">(x + 2)(x + 3)</p>
    <p class="formula">= x(x + 3) + 2(x + 3)</p>
    <p class="formula">= x^{2} + 3x + 2x + 6</p>
    <p class="formula">= x^{2} + 5x + 6</p>
    <p class="formula">(x − 2)(x + 3) = x^{2} + 3x − 2x − 6 = x^{2} + x − 6</p>
    <p>Ook met coëfficiënten:</p>
    <p class="formula">(2x + 1)(x + 3)</p>
    <p class="formula">= 2x · x + 2x · 3 + 1 · x + 1 · 3</p>
    <p class="formula">= 2x^{2} + 6x + x + 3</p>
    <p class="formula">= 2x^{2} + 7x + 3</p>
    <p>Schrijf de vier tussenproducten op. Dan verdwijnt er geen kruisterm.</p>

    <h3>Merkwaardige producten</h3>
    <p>Ze volgen uit dezelfde distributiviteit.</p>
    <p class="formula">(a + b)^{2} = (a + b)(a + b) = a^{2} + 2ab + b^{2}</p>
    <p class="formula">(a − b)^{2} = a^{2} − 2ab + b^{2}</p>
    <p class="formula">(a + b)(a − b) = a^{2} − b^{2}</p>
    <h4>Visuele voorstelling van het kwadraat van een som</h4>
    <p>Een vierkant met zijde a + b valt in vier stukken: dezelfde vier producten als bij <span class="formula-inline">(a + b)(a + b)</span>.</p>
    <div class="theory-image">
      <img
        src="assets/kwadraat-som.svg"
        alt="Een vierkant met zijde a + b, verdeeld in a², twee rechthoeken ab en een vierkant b². Samen: a² + 2ab + b²."
      >
    </div>
    <p class="formula">(x + 3)^{2} = x^{2} + 6x + 9</p>
    <p class="formula">(x − 4)^{2} = x^{2} − 8x + 16</p>
    <p class="formula">(x + 5)(x − 5) = x^{2} − 25</p>
    <div class="callout">
      <p><strong>Klassieke fout:</strong> <span class="formula-inline">(x + 3)^{2}</span> is niet <span class="formula-inline">x^{2} + 9</span>.</p>
      <p>De middelste term 6x komt van de twee kruisproducten: 3x + 3x.</p>
    </div>

    <h3>Ontbinden: distributiviteit achteruit</h3>
    <p>Uitwerken gaat van product naar som. <strong>Ontbinden</strong> gaat de andere kant op.</p>
    <p class="formula">6x + 9 = 3(2x + 3)</p>
    <p class="formula">x^{2} + 5x = x(x + 5)</p>
    <p class="formula">a^{2} − b^{2} = (a + b)(a − b)</p>
    <p class="formula">x^{2} − 9 = (x + 3)(x − 3)</p>
    <p class="formula">x^{2} − 16 = (x + 4)(x − 4)</p>
    <p>Sommen zoals <span class="formula-inline">x^{2} + 5x + 6</span> ontbinden we in les 2.7. Nu volstaan de gemeenschappelijke factor en het verschil van kwadraten.</p>

    <h3>Twee richtingen van dezelfde structuur</h3>
    <p class="formula">3(x + 4) = 3x + 12</p>
    <p class="formula">3x + 12 = 3(x + 4)</p>
    <p class="formula">(x + 2)^{2} = x^{2} + 4x + 4</p>
    <p class="formula">x^{2} + 4x + 4 = (x + 2)^{2}</p>
    <div class="callout">
      <p><strong>Uitwerken en ontbinden zijn elkaars omgekeerde.</strong></p>
      <p>Uitwerken maakt een som zichtbaar. Ontbinden maakt een product zichtbaar.</p>
    </div>

    <h3>Werkwijze en rekenvolgorde</h3>
    <p>Letters veranderen de rekenvolgorde niet: eerst haakjes, dan machten, dan vermenigvuldigen en delen, dan optellen en aftrekken.</p>
    <p class="formula">2x + 3 · 4 = 2x + 12</p>
    <p><span class="formula-inline">2(x + 3)^{2}</span> betekent eerst het kwadraat, daarna keer 2.</p>
    <ol>
      <li>haakjes wegwerken, inclusief mintekens;</li>
      <li>producten en machten uitwerken;</li>
      <li>gelijksoortige termen verzamelen;</li>
      <li>controleren door een getal voor x in te vullen.</li>
    </ol>
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
    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat betekent een vergelijking?</li>
      <li>Waarom zien we een vergelijking als een balans?</li>
      <li>Waarom moet dezelfde bewerking aan beide kanten?</li>
      <li>Hoe lossen we een eenvoudige lineaire vergelijking op?</li>
      <li>Hoe controleren we of de gevonden waarde klopt?</li>
      <li>Wanneer heeft een vergelijking geen of oneindig veel oplossingen?</li>
    </ul>
    <p>In les 2.1 onderscheidden we een uitdrukking van een vergelijking. Nu gebruiken we dat om een onbekende te <strong>vinden</strong>.</p>

    <h3>Wat is een vergelijking?</h3>
    <p>Een uitdrukking zoals:</p>
    <p class="formula">3x + 5</p>
    <p>beschrijft een hoeveelheid. Een vergelijking bevat een gelijkheidsteken:</p>
    <p class="formula">3x + 5 = 17</p>
    <p>Linker- en rechterkant hebben <strong>dezelfde waarde</strong>.</p>
    <div class="callout">
      <p><strong>Een vergelijking is een bewering van gelijkheid.</strong></p>
      <p>We zoeken de waarde(n) van de onbekende waarvoor die bewering waar is.</p>
    </div>

    <h3>De vergelijking als een balans</h3>
    <p>Aan de linkerkant van een weegschaal ligt een onbekende hoeveelheid plus 3 kg, rechts 7 kg. Evenwicht betekent:</p>
    <p class="formula">x + 3 = 7</p>
    <div class="callout">
      <p><strong>Het gelijkheidsteken betekent: links = rechts.</strong></p>
      <p>Elke bewerking moet het evenwicht bewaren.</p>
    </div>

    <h3>De onbekende vrijmaken</h3>
    <p class="formula">x + 3 = 7</p>
    <p>Om +3 ongedaan te maken trekken we 3 af — aan <strong>beide</strong> kanten:</p>
    <p class="formula">x + 3 − 3 = 7 − 3</p>
    <p class="formula">x = 4</p>
    <div class="callout">
      <p><strong>Kernregel:</strong> dezelfde bewerking aan beide kanten.</p>
      <p>Zo blijft de gelijkheid behouden.</p>
    </div>

    <h3>Waarom mag dat?</h3>
    <p>Als a = b, dan ook:</p>
    <p class="formula">a + c = b + c</p>
    <p class="formula">a − c = b − c</p>
    <p class="formula">a · c = b · c</p>
    <p class="formula">a / c = b / c</p>
    <p>zolang c ≠ 0. Dat zijn eigenschappen van gelijkheid, geen trucs voor x.</p>

    <h3>Oplossen door aftrekken</h3>
    <p class="formula">x + 8 = 13</p>
    <p class="formula">x + 8 − 8 = 13 − 8</p>
    <p class="formula">x = 5</p>

    <h3>Oplossen door optellen</h3>
    <p class="formula">x − 4 = 9</p>
    <p class="formula">x − 4 + 4 = 9 + 4</p>
    <p class="formula">x = 13</p>
    <div class="callout">
      <p><strong>Ongedaan maken = de inverse bewerking.</strong></p>
      <p>Optellen maakt aftrekken ongedaan, en omgekeerd.</p>
    </div>

    <h3>Vermenigvuldiging ongedaan maken</h3>
    <p class="formula">3x = 18</p>
    <p>Deel beide kanten door 3:</p>
    <p class="formula">3x / 3 = 18 / 3</p>
    <p class="formula">x = 6</p>

    <h3>Delen ongedaan maken</h3>
    <p class="formula">x / 4 = 7</p>
    <p>Vermenigvuldig beide kanten met 4:</p>
    <p class="formula">4 · (x / 4) = 7 · 4</p>
    <p class="formula">x = 28</p>

    <h3>Twee bewerkingen in één vergelijking</h3>
    <p class="formula">3x + 5 = 20</p>
    <p>Eerst de +5 weg, daarna de factor 3:</p>
    <p class="formula">3x = 15</p>
    <p class="formula">x = 5</p>
    <div class="callout">
      <p><strong>Werk systematisch.</strong></p>
      <p>Maak eerst de bewerking ongedaan die het verst van de onbekende staat.</p>
    </div>

    <h3>De onbekende aan beide kanten</h3>
    <p class="formula">3x + 2 = x + 10</p>
    <p>Trek x af aan beide kanten:</p>
    <p class="formula">2x + 2 = 10</p>
    <p class="formula">2x = 8</p>
    <p class="formula">x = 4</p>

    <h3>Haakjes in een vergelijking</h3>
    <p class="formula">2(x + 3) = 14</p>
    <p class="formula">2x + 6 = 14</p>
    <p class="formula">2x = 8</p>
    <p class="formula">x = 4</p>
    <p>De bewerkingen uit les 2.2 maken de vergelijking eerst eenvoudiger.</p>

    <h3>Controleer in de oorspronkelijke vergelijking</h3>
    <p>Bij <span class="formula-inline">3x + 5 = 20</span> vonden we x = 5. Invullen:</p>
    <p class="formula">3 · 5 + 5 = 20</p>
    <p class="formula">20 = 20</p>
    <div class="callout">
      <p><strong>Controle:</strong> vul de gevonden waarde in het <strong>origineel</strong> in.</p>
      <p>Als links en rechts gelijk zijn, klopt de oplossing.</p>
    </div>

    <h3>Niet elke vergelijking heeft één oplossing</h3>
    <p class="formula">x + 3 = x + 3</p>
    <p>waar voor elke x: oneindig veel oplossingen.</p>
    <p class="formula">x + 3 = x + 5</p>
    <p>levert 3 = 5: <strong>geen</strong> oplossing.</p>
    <div class="callout">
      <p><strong>Mogelijk:</strong> één oplossing, geen oplossing, of oneindig veel.</p>
    </div>

    <h3>Gelijkwaardige vergelijkingen</h3>
    <p class="formula">3x + 5 = 20</p>
    <p class="formula">3x = 15</p>
    <p class="formula">x = 5</p>
    <p>Zien er anders uit, dezelfde oplossing.</p>
    <div class="callout">
      <p><strong>We vervangen een vergelijking door een gelijkwaardige.</strong></p>
      <p>Eenvoudiger maken, dezelfde oplossingen houden.</p>
    </div>

    <h3>Van een verhaal naar een vergelijking</h3>

<p>
  Een vergelijking ontstaat vaak uit een situatie waarin we iets
  <strong>onbekends</strong> willen vinden.
</p>

<p>
  We vertalen het verhaal naar wiskundige taal. De onbekende stellen we
  voor met een letter.
</p>

<div class="callout">
  <strong>De belangrijkste stap</strong>
  <p>
    Kies eerst wat de onbekende is. Daarna kun je de informatie uit het
    verhaal gebruiken om een vergelijking op te stellen.
  </p>
</div>

<h4>Een eenvoudig voorbeeld</h4>

<p>
  Denk aan het volgende probleem:
</p>

<p>
  <strong>
    Een getal vermeerderd met 7 is gelijk aan 19.
    Welk getal is dat?
  </strong>
</p>

<p>
  We weten nog niet welk getal bedoeld wordt.
  Daarom noemen we het getal <span class="formula-inline">x</span>.
</p>

<p class="formula">x = het onbekende getal</p>

<p>
  Het getal wordt met 7 vermeerderd. Dat kunnen we schrijven als:
</p>

<p class="formula">x + 7</p>

<p>
  Volgens het verhaal is dit gelijk aan 19.
  We krijgen dus de vergelijking:
</p>

<p class="formula">x + 7 = 19</p>

<p>
  Nu kunnen we de vergelijking oplossen.
  We willen weten hoeveel <span class="formula-inline">x</span> is.
</p>

<p>
  Trek 7 af van beide kanten:
</p>

<p class="formula">x = 12</p>

<p>
  Het onbekende getal is dus <strong>12</strong>.
</p>

<h4>Een iets moeilijker voorbeeld</h4>

<p>
  Soms bevat een verhaal meer dan één hoeveelheid.
</p>

<p>
  Emma en Jan hebben samen <strong>31 euro</strong>.
  Jan heeft <strong>7 euro meer</strong> dan Emma.
  Hoeveel euro heeft Emma?
</p>

<p>
  We weten niet hoeveel geld Emma heeft. We noemen dat bedrag
  <span class="formula-inline">x</span>.
</p>

<p class="formula">x = het bedrag van Emma</p>

<p>
  Jan heeft 7 euro meer dan Emma. Als Emma
  <span class="formula-inline">x</span> euro heeft, dan heeft Jan:
</p>

<p class="formula">x + 7</p>

<p>
  Samen hebben ze 31 euro. Daarom krijgen we:
</p>

<p class="formula">x + (x + 7) = 31</p>

<p>
  We hebben het verhaal nu vertaald naar een vergelijking.
</p>

<h4>De vergelijking oplossen</h4>

<p>
  Eerst werken we de haakjes weg:
</p>

<p class="formula">x + x + 7 = 31</p>

<p>
  Trek 7 af van beide kanten:
</p>

<p class="formula">x + x = 24</p>

<p>
  Dat kunnen we ook schrijven als:
</p>

<p class="formula">2x = 24</p>

<p>
  Deel beide kanten door 2:
</p>

<p class="formula">x = 12</p>

<p>
  Emma heeft dus 12 euro.
  Jan heeft 7 euro meer:
</p>

<p class="formula">12 + 7 = 19</p>

<p>
  Samen hebben ze:
</p>

<p class="formula">12 + 19 = 31</p>

<p>
  De oplossing klopt dus met het oorspronkelijke verhaal.
</p>

<div class="callout">
  <strong>Onthoud</strong>
  <p>
    Bij een vergelijking uit een verhaal gaat het om het vinden van
    een onbekende.
  </p>
  <p>
    We kiezen een letter voor de onbekende, vertalen het verhaal naar
    een vergelijking en lossen die vergelijking op.
  </p>
</div>

<h4>De denkstappen</h4>

<p>
  Bij dit soort problemen kun je steeds dezelfde denkstappen gebruiken:
</p>

<ol>
  <li>Wat is er onbekend?</li>
  <li>Welke letter gebruik ik voor die onbekende?</li>
  <li>Welke informatie geeft het verhaal?</li>
  <li>Hoe vertaal ik die informatie naar een vergelijking?</li>
  <li>Hoe los ik de vergelijking op?</li>
  <li>Klopt mijn antwoord met het oorspronkelijke verhaal?</li>
</ol>

<p class="formula">
  verhaal → onbekende → vergelijking → oplossing → controle
</p>

    <h3>Een vergelijking is een voorwaarde</h3>
    <p>Een uitdrukking kun je voor veel waarden berekenen. Een vergelijking filtert:</p>
    <p class="formula">3x + 5 = 20</p>
    <p>alleen de x waarvoor links gelijk is aan rechts.</p>

    <h3>Een vaste werkwijze</h3>
    <ol>
      <li>vereenvoudig beide kanten;</li>
      <li>werk haakjes weg;</li>
      <li>breng termen met de onbekende samen;</li>
      <li>breng constanten naar de andere kant;</li>
      <li>maak de factor van de onbekende ongedaan;</li>
      <li>controleer in de oorspronkelijke vergelijking.</li>
    </ol>
    <p>Het principe: de onbekende vrijmaken zonder de gelijkheid te verbreken.</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>Een vergelijking stelt dat twee uitdrukkingen gelijk zijn.</p>
      <p>We zoeken de waarde(n) waarvoor dat waar is.</p>
      <p>Dezelfde geldige bewerking aan beide kanten vereenvoudigt de vergelijking zonder de oplossingen te veranderen.</p>
    </div>
  `
},
   {
  id: "2.4",
  title: "Formules & algebraïsch modelleren",
  goal: "Hoe beschrijven we een probleem met een formule?",
  theory: /* html */`
    <h2>Formules & algebraïsch modelleren</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe vertalen we een situatie uit de werkelijkheid naar letters en een formule?</li>
      <li>Hoe herkennen we welke grootheden veranderen en welke vast blijven?</li>
      <li>Hoe stellen we een formule op vanuit een beschrijving in woorden?</li>
      <li>Hoe gebruiken we een formule door waarden in te vullen?</li>
      <li>Hoe kunnen we een formule omvormen om een andere grootheid te berekenen?</li>
      <li>Hoe helpen eenheden ons om een formule te controleren?</li>
      <li>Waarom is een formule een model van de werkelijkheid en geen volledige kopie ervan?</li>
      <li>Hoe controleren we of een antwoord betekenis heeft binnen de oorspronkelijke situatie?</li>
    </ul>

    <p>
      In de vorige lessen gebruikten we algebra om met letters te rekenen
      en onbekenden te vinden. Nu draaien we het proces om:
      we vertrekken vanuit een <strong>situatie uit de werkelijkheid</strong>
      en proberen die met algebra te beschrijven.
    </p>

    <p>
      Dat noemen we <strong>algebraïsch modelleren</strong>.
      Een formule maakt het mogelijk om een hele reeks situaties
      met dezelfde structuur te beschrijven.
    </p>


<h3>Van een verhaal naar wiskunde</h3>

<p>
  In de vorige les hebben we gezien hoe we een verhaal kunnen vertalen
  naar een vergelijking wanneer we een <strong>onbekende</strong> willen
  vinden.
</p>

<p>
  Maar wiskunde kan meer dan alleen onbekenden vinden.
  We kunnen wiskunde ook gebruiken om een situatie
  <strong>te beschrijven</strong>.
</p>

<div class="callout">
  <strong>Een nieuw idee</strong>
  <p>
    Bij wiskundig modelleren vertalen we een situatie uit de werkelijkheid
    naar wiskundige taal.
  </p>
</div>

<h4>Een voorbeeld: een taxirit</h4>

<p>
  Stel dat een taxi een <strong>starttarief van 4 euro</strong> vraagt.
  Voor elke kilometer die je rijdt, betaal je nog
  <strong>2 euro extra</strong>.
</p>

<p>
  We willen kunnen berekenen hoeveel een rit kost, ongeacht hoeveel
  kilometer we rijden.
</p>

<h4>Welke hoeveelheden zijn belangrijk?</h4>

<p>
  In het verhaal komen twee hoeveelheden voor:
</p>

<ul>
  <li>het aantal gereden kilometers;</li>
  <li>de prijs van de rit.</li>
</ul>

<p>
  Het aantal kilometers kan telkens veranderen.
  Daarom geven we deze hoeveelheid een naam.
</p>

<p class="formula">k = het aantal gereden kilometers</p>

<p>
  De prijs verandert mee met het aantal kilometers.
  Voor de prijs gebruiken we:
</p>

<p class="formula">P = de prijs van de rit</p>

<h4>De informatie uit het verhaal vertalen</h4>

<p>
  We beginnen met het vaste starttarief:
</p>

<p class="formula">4</p>

<p>
  Daarna komt er voor elke kilometer 2 euro bij.
  Bij <span class="formula-inline">k</span> kilometer is dat:
</p>

<p class="formula">2k</p>

<p>
  De totale prijs bestaat dus uit het starttarief plus de kosten
  voor de gereden kilometers.
</p>

<p class="formula">P = 4 + 2k</p>

<p>
  Dit noemen we een <strong>formule</strong>.
</p>

<div class="callout">
  <strong>Inzicht</strong>
  <p>
    Een formule kan een verband tussen verschillende hoeveelheden
    beschrijven.
  </p>
</div>

<h4>De formule gebruiken</h4>

<p>
  Stel dat we 3 kilometer rijden.
  Dan vullen we <span class="formula-inline">k = 3</span> in:
</p>

<p class="formula">P = 4 + 2 × 3</p>

<p>
  Dus:
</p>

<p class="formula">P = 10</p>

<p>
  Een rit van 3 kilometer kost 10 euro.
</p>

<p>
  Voor 5 kilometer krijgen we:
</p>

<p class="formula">P = 4 + 2 × 5 = 14</p>

<p>
  Dezelfde formule werkt dus voor verschillende ritten.
</p>

<h4>We kunnen de situatie ook in een tabel zetten</h4>

<p>
  De formule geeft ons verschillende waarden voor de prijs.
  We kunnen die waarden overzichtelijk in een tabel plaatsen.
</p>

<table>
  <thead>
    <tr>
      <th>Aantal kilometer</th>
      <th>Prijs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>€4</td>
    </tr>
    <tr>
      <td>1</td>
      <td>€6</td>
    </tr>
    <tr>
      <td>2</td>
      <td>€8</td>
    </tr>
    <tr>
      <td>3</td>
      <td>€10</td>
    </tr>
    <tr>
      <td>5</td>
      <td>€14</td>
    </tr>
  </tbody>
</table>

<p>
  De tabel laat hetzelfde verband zien als de formule.
</p>

<h4>Van werkelijkheid naar een wiskundig model</h4>

<p>
  We zijn begonnen met een situatie uit de werkelijkheid:
</p>

<p>
  <strong>
    Een taxi kost 4 euro om te starten en daarna 2 euro per kilometer.
  </strong>
</p>

<p>
  We hebben vervolgens bepaald welke hoeveelheden belangrijk zijn,
  daar variabelen voor gekozen en het verband tussen die hoeveelheden
  beschreven met een formule.
</p>

<p class="formula">
  werkelijkheid → hoeveelheden → variabelen → verband → formule
</p>

<p>
  De formule is daarmee een <strong>wiskundig model</strong> van de
  situatie.
</p>

<h4>Waarom is een model nuttig?</h4>

<p>
  Een model helpt ons om met een situatie te rekenen zonder telkens
  het hele verhaal opnieuw te moeten bekijken.
</p>

<p>
  Met de formule
</p>

<p class="formula">P = 4 + 2k</p>

<p>
  kunnen we bijvoorbeeld snel berekenen hoeveel een rit van 8, 12 of
  25 kilometer kost.
</p>

<p>
  We kunnen bovendien onderzoeken hoe de prijs verandert wanneer het
  aantal kilometers verandert.
</p>

<div class="callout">
  <strong>Onthoud</strong>
  <p>
    Bij wiskundig modelleren vertalen we een situatie uit de werkelijkheid
    naar wiskundige taal.
  </p>
  <p>
    Een formule, tabel of grafiek kan vervolgens helpen om de situatie
    te beschrijven, berekeningen uit te voeren en verbanden te onderzoeken.
  </p>
</div>

<h4>Van verhaal naar wiskunde</h4>

<p>
  Het proces dat we hier hebben gebruikt, kunnen we algemeen voorstellen als:
</p>

<p class="formula">
  werkelijkheid → wiskundige beschrijving → rekenen → terug naar de werkelijkheid
</p>

<p>
  Dat is een belangrijk idee in de wiskunde.
  We gebruiken wiskundige modellen om situaties uit de werkelijkheid
  beter te begrijpen en er voorspellingen of berekeningen mee te maken.
</p>


    <h3>Wat betekenen de letters?</h3>

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


    <h3>Variabele en constante</h3>

    <p>
      In een model is het nuttig om onderscheid te maken tussen waarden
      die kunnen veranderen en waarden die binnen het model vastliggen.
    </p>

    <p class="formula">P = 4 + 2x</p>

    <p>
      De afstand <strong>x</strong> kan verschillende waarden aannemen.
      De waarden 4 en 2 blijven binnen dit model hetzelfde.
    </p>

    <p>
      We noemen <strong>x</strong> daarom een <strong>variabele</strong>.
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
      terwijl <span class="formula-inline">x</span> de variabele is.
    </p>

    <p>
      Zo kunnen we dezelfde structuur gebruiken voor verschillende situaties.
      Bij een andere taxi kunnen bijvoorbeeld een ander startbedrag en
      een andere kilometerprijs horen.
    </p>


    <h3>Een formule opstellen uit woorden</h3>

    <p>
      De moeilijkste stap bij modelleren is vaak niet het rekenen,
      maar het <strong>vertalen van woorden naar algebra</strong>.
    </p>

    <p>
      Een sportclub vraagt 25 euro lidgeld en daarnaast 8 euro per maand.
      Noem het aantal maanden <strong>x</strong> en de totale kost
      <strong>K</strong>.
    </p>

    <p>
      Het vaste deel is:
    </p>

    <p class="formula">25</p>

    <p>
      Het veranderlijke deel is 8 euro per maand gedurende
      <span class="formula-inline">x</span> maanden:
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
        Zoek in een verhaal eerst naar een vast deel en een veranderlijk deel,
        wanneer die structuur aanwezig is.
      </p>
    </div>


    <h3>Invullen in een formule</h3>

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
      Vervang <span class="formula-inline">x</span> door 6:
    </p>

    <p class="formula">K = 25 + 8 · 6</p>

    <p class="formula">K = 25 + 48</p>

    <p class="formula">K = 73</p>

    <p>
      De totale kost is dus 73 euro.
    </p>

    <p>
      Dit is dezelfde techniek die we in les 2.1 leerden:
      een waarde voor een variabele invullen in een algebraïsche uitdrukking.
      Het verschil is dat de formule nu een concrete situatie beschrijft.
    </p>


    <h3>Eenheden horen bij de formule</h3>

    <p>
      Getallen in een formule hebben vaak een eenheid.
      Die eenheden kunnen ons helpen om te controleren of een formule logisch is.
    </p>

    <p>
      In:
    </p>

    <p class="formula">P = 4 + 2x</p>

    <p>
      is <span class="formula-inline">P</span> uitgedrukt in euro en
      <span class="formula-inline">x</span> in kilometer.
      De 4 heeft dus eenheid euro.
      De 2 heeft eenheid euro per kilometer.
    </p>

    <p>
      Als we 2 euro per kilometer vermenigvuldigen met
      <span class="formula-inline">x</span> kilometer,
      krijgen we een bedrag in euro:
    </p>

    <p class="formula">2 euro/km · x km = 2x euro</p>

    <p>
      Zowel het vaste deel als het veranderlijke deel zijn dus bedragen in euro.
      Ze kunnen daarom worden opgeteld.
    </p>

    <div class="callout">
      <p><strong>Eenheden zijn een alarmbel.</strong></p>
      <p>
        Als twee grootheden bij een optelling niet dezelfde eenheid hebben,
        klopt er waarschijnlijk iets niet aan de formule.
      </p>
    </div>


    <h3>Een formule omvormen</h3>

    <p>
      Een formule kan ook worden omgevormd wanneer we een andere grootheid
      willen berekenen.
    </p>

    <p>
      Neem de bekende relatie tussen afstand, snelheid en tijd:
    </p>

    <p class="formula">s = v · t</p>

    <ul>
      <li><strong>s</strong> = afstand;</li>
      <li><strong>v</strong> = snelheid;</li>
      <li><strong>t</strong> = tijd.</li>
    </ul>

    <p>
      Stel dat we de tijd <strong>t</strong> willen berekenen.
      Omdat <span class="formula-inline">t</span> met
      <span class="formula-inline">v</span> wordt vermenigvuldigd,
      delen we beide leden door <span class="formula-inline">v</span>:
    </p>

    <p class="formula">s / v = v · t / v</p>

    <p class="formula">t = s / v</p>

    <p>
      De oorspronkelijke formule en de omgevormde formule beschrijven
      dus dezelfde relatie.
    </p>

    <p>
      Bijvoorbeeld: een trein legt 200 km af met een snelheid van 80 km/u.
    </p>

    <p class="formula">t = 200 / 80 = 2,5</p>

    <p>
      De reistijd is 2,5 uur.
    </p>

    <div class="callout">
      <p><strong>Omvormen is algebra.</strong></p>
      <p>
        Je gebruikt dezelfde balansregels als bij vergelijkingen:
        wat je met het ene lid doet, doe je ook met het andere.
      </p>
    </div>


    <h3>Controle met eenheden</h3>

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

    <p class="formula">t = s / v</p>

    <p>
      krijgen we:
    </p>

    <p class="formula">u = km / (km/u)</p>

    <p>
      Ook dat klopt: de eenheid van de uitkomst is uur.
    </p>


    <h3>Niet elke waarde is zinvol</h3>

    <p>
      Een formule kan algebraïsch waarden toelaten die in de werkelijkheid
      geen betekenis hebben.
    </p>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">K = 25 + 8x</p>

    <p>
      Wiskundig kunnen we bijvoorbeeld <span class="formula-inline">x = −3</span>
      invullen:
    </p>

    <p class="formula">K = 25 + 8 · (−3) = 1</p>

    <p>
      De berekening is algebraïsch correct.
      Maar een lidmaatschap van −3 maanden heeft in deze context geen betekenis.
    </p>

    <p>
      De context legt dus beperkingen op aan de variabelen.
      In dit voorbeeld is een waarde als <span class="formula-inline">x = 6</span>
      zinvol, maar een negatieve duur niet.
    </p>

    <div class="callout">
      <p><strong>Een formule en haar context horen bij elkaar.</strong></p>
      <p>
        Algebra kan meer waarden toelaten dan de werkelijkheid.
        Controleer daarom altijd of de gekozen waarden in de situatie
        betekenisvol zijn.
      </p>
    </div>


    <h3>Een model is een vereenvoudiging</h3>

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
      <p><strong>Een model is een vereenvoudiging.</strong></p>
      <p>
        Een model hoeft niet alles uit de werkelijkheid te bevatten.
        Het moet vooral de relevante structuur voor het probleem beschrijven.
      </p>
    </div>


    <h3>Een model controleren</h3>

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


    <h3>Een volledig voorbeeld</h3>

    <p>
      Een zwembad bevat aanvankelijk 10 000 liter water.
      Een pomp voegt 250 liter per minuut toe.
      We willen de hoeveelheid water na <span class="formula-inline">x</span>
      minuten beschrijven.
    </p>

    <p>
      Het beginvolume is:
    </p>

    <p class="formula">10 000</p>

    <p>
      Per minuut komt er 250 liter bij.
      Na <span class="formula-inline">x</span> minuten is dat:
    </p>

    <p class="formula">250x</p>

    <p>
      De hoeveelheid water <strong>W</strong> is dus:
    </p>

    <p class="formula">W = 10 000 + 250x</p>

    <p>
      Na 12 minuten:
    </p>

    <p class="formula">W = 10 000 + 250 · 12</p>

    <p class="formula">W = 13 000</p>

    <p>
      Algebraïsch geeft het model dus 13 000 liter.
    </p>

    <p>
      Maar nu moeten we opnieuw naar de werkelijkheid kijken.
      Als het zwembad een maximale inhoud van 10 000 liter heeft,
      kan het model niet blijven gelden zodra het zwembad vol is.
    </p>

    <p>
      De formule beschrijft dus het vulproces binnen een bepaald bereik.
      Zodra de situatie verandert, kan ook een ander model nodig zijn.
    </p>

    <div class="callout">
      <p><strong>Dit is modelleren:</strong></p>
      <p>
        werkelijkheid → grootheden herkennen → variabelen kiezen →
        formule opstellen → berekenen → terugvertalen naar de werkelijkheid
        → controleren of het model nog geldig is.
      </p>
    </div>


    <h3>Van werkelijkheid naar formule en terug</h3>

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


    <h3>Verband met vergelijkingen</h3>

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
      Het model levert hier de vergelijking.
      De technieken uit les 2.3 helpen ons vervolgens om die vergelijking
      op te lossen.
    </p>


    <h3>Een formule laat de structuur zien</h3>

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
      <li>er is een vast startbedrag van 25 euro;</li>
      <li>er komt 8 euro bij voor elke extra maand;</li>
      <li>de totale kost hangt af van het aantal maanden <span class="formula-inline">x</span>.</li>
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
      Een formule is daarmee een compacte taal voor de structuur
      van een probleem.
    </p>


    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>
        Welke grootheden spelen een rol?
        Welke letters en eenheden horen erbij?
      </li>
      <li>
        Wat blijft vast en wat verandert?
      </li>
      <li>
        Schrijf de formule en lees ze in woorden.
      </li>
      <li>
        Vul waarden in of vorm de formule om wanneer dat nodig is.
      </li>
      <li>
        Controleer de eenheden en de berekening.
      </li>
      <li>
        Heeft het antwoord betekenis in de oorspronkelijke situatie?
        Geldt het model nog?
      </li>
    </ol>


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
        Een formule is een compact model van een structuur.
        Daarom moeten we niet alleen kunnen rekenen met een formule,
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

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat is een ongelijkheid en hoe verschilt ze van een vergelijking?</li>
      <li>Hoe stellen we een oplossingsverzameling voor op een getallenlijn?</li>
      <li>Hoe lossen we een eenvoudige ongelijkheid op?</li>
      <li>Waarom keert het ongelijkheidsteken om bij vermenigvuldigen of delen door een negatief getal?</li>
      <li>Hoe beschrijven we een oplossingsverzameling met intervalnotatie?</li>
      <li>Hoe gebruiken we absolute waarde om afstanden op de getallenlijn te beschrijven?</li>
      <li>Hoe houden we rekening met de betekenis van een variabele in een concrete situatie?</li>
    </ul>


    <h3>Niet één oplossing, maar een bereik</h3>

    <p>
      Bij een vergelijking zoals:
    </p>

    <p class="formula">x + 3 = 7</p>

    <p>
      zoeken we naar de waarde van <span class="formula-inline">x</span>
      waarvoor de gelijkheid waar is.
    </p>

    <p class="formula">x = 4</p>

    <p>
      Er is hier één oplossing.
    </p>

    <p>
      Maar soms willen we geen exacte waarde vinden.
      We willen bijvoorbeeld alle getallen kennen die kleiner zijn dan 4.
    </p>

    <p class="formula">x &lt; 4</p>

    <p>
      Dit is een <strong>ongelijkheid</strong>.
      Ze beschrijft niet één getal, maar een hele verzameling getallen.
    </p>

    <div class="callout">
      <p><strong>Een ongelijkheid beschrijft meestal een verzameling oplossingen.</strong></p>
      <p>
        In plaats van één waarde kunnen er veel, zelfs oneindig veel,
        oplossingen zijn.
      </p>
    </div>


    <h3>De belangrijkste ongelijkheidstekens</h3>

    <p>
      We gebruiken verschillende tekens om waarden met elkaar te vergelijken.
    </p>

    <ul>
      <li><strong>&lt;</strong> betekent: kleiner dan</li>
      <li><strong>&gt;</strong> betekent: groter dan</li>
      <li><strong>≤</strong> betekent: kleiner dan of gelijk aan</li>
      <li><strong>≥</strong> betekent: groter dan of gelijk aan</li>
    </ul>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x &lt; 5</p>

    <p>
      betekent dat <span class="formula-inline">x</span> kleiner is dan 5.
    </p>

    <p class="formula">x ≥ 5</p>

    <p>
      betekent dat <span class="formula-inline">x</span> groter dan of gelijk
      aan 5 is.
    </p>

    <p>
      Het verschil tussen bijvoorbeeld
      <span class="formula-inline">&lt;</span> en
      <span class="formula-inline">≤</span> lijkt klein,
      maar bepaalt of de grens zelf tot de oplossingen behoort.
    </p>


    <h3>Een ongelijkheid op de getallenlijn</h3>

    <p>
      Een ongelijkheid kunnen we zichtbaar maken op de getallenlijn.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">x &lt; 4</p>

    <p>
      nemen we alle getallen links van 4.
      Het getal 4 zelf hoort er niet bij.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">x ≤ 4</p>

    <p>
      hoort 4 er wel bij.
    </p>

    <div class="callout">
      <p><strong>De grens is belangrijk.</strong></p>
      <p>
        Bij <span class="formula-inline">&lt;</span> en
        <span class="formula-inline">&gt;</span> hoort de grens niet bij de oplossing.
      </p>
      <p>
        Bij <span class="formula-inline">≤</span> en
        <span class="formula-inline">≥</span> hoort de grens wel bij de oplossing.
      </p>
    </div>


    <h3>Open en gesloten grenzen</h3>

    <p>
      Op een getallenlijn gebruiken we een <strong>open bol</strong>
      wanneer de grens niet tot de oplossingen behoort.
      Een <strong>gesloten bol</strong> betekent dat de grens wel inbegrepen is.
    </p>

    <div class="theory-image">
      <img
        src="assets/getallenlijn-kleiner-dan-4.svg"
        alt="Getallenlijn voor x kleiner dan 4. Open bol op 4, pijl naar links."
      >
    </div>

    <div class="theory-image">
      <img
        src="assets/getallenlijn-kleiner-gelijk-4.svg"
        alt="Getallenlijn voor x kleiner dan of gelijk aan 4. Dichte bol op 4, pijl naar links."
      >
    </div>

    <div class="theory-image">
      <img
        src="assets/getallenlijn-groter-dan-4.svg"
        alt="Getallenlijn voor x groter dan 4. Open bol op 4, pijl naar rechts."
      >
    </div>

    <div class="theory-image">
      <img
        src="assets/getallenlijn-groter-gelijk-4.svg"
        alt="Getallenlijn voor x groter dan of gelijk aan 4. Dichte bol op 4, pijl naar rechts."
      >
    </div>

    <p>
      De richting van de oplossing wordt bepaald door het ongelijkheidsteken.
      De bol vertelt of de grens zelf meetelt.
    </p>


    <h3>Ongelijkheden oplossen zoals vergelijkingen</h3>

    <p>
      Veel regels uit les 2.3 blijven geldig.
      We mogen dezelfde bewerking aan beide kanten uitvoeren.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">x + 3 &lt; 7</p>

    <p>
      Trek 3 af aan beide kanten:
    </p>

    <p class="formula">x + 3 − 3 &lt; 7 − 3</p>

    <p>
      Dus:
    </p>

    <p class="formula">x &lt; 4</p>

    <div class="callout">
      <p><strong>Optellen en aftrekken veranderen de richting niet.</strong></p>
      <p>
        Bij deze bewerkingen blijft het ongelijkheidsteken dus hetzelfde.
      </p>
    </div>


    <h3>Vermenigvuldigen en delen door een positief getal</h3>

    <p>
      Ook vermenigvuldigen en delen kunnen we gebruiken.
      Zolang we vermenigvuldigen of delen door een
      <strong>positief</strong> getal, verandert de richting van het
      ongelijkheidsteken niet.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2x &lt; 10</p>

    <p>
      Deel beide kanten door 2:
    </p>

    <p class="formula">x &lt; 5</p>

    <p>
      Het teken blijft dus hetzelfde.
    </p>


    <h3>Waarom keert het teken om bij een negatief getal?</h3>

    <p>
      Bij vermenigvuldigen of delen door een <strong>negatief getal</strong>
      gebeurt er iets anders.
    </p>

    <p>
      Kijk eerst naar:
    </p>

    <p class="formula">2 &lt; 5</p>

    <p>
      Vermenigvuldig beide kanten met −1:
    </p>

    <p class="formula">−2 &gt; −5</p>

    <p>
      Het teken moet omkeren.
      Op de getallenlijn worden de positieve en negatieve richting
      als het ware verwisseld.
    </p>

    <div class="callout">
      <p><strong>Belangrijke regel:</strong></p>
      <p>
        Vermenigvuldig of deel je een ongelijkheid door een
        <strong>negatief getal</strong>, dan moet je het
        ongelijkheidsteken omkeren.
      </p>
    </div>


    <h3>Een ongelijkheid met een negatieve factor</h3>

    <p>
      Neem:
    </p>

    <p class="formula">−3x &lt; 12</p>

    <p>
      We willen <span class="formula-inline">x</span> alleen krijgen.
      Daarom delen we door −3.
    </p>

    <p>
      Omdat −3 negatief is, keert het teken om:
    </p>

    <p class="formula">x &gt; −4</p>

    <p>
      De oplossingsverzameling bestaat dus uit alle getallen groter dan −4.
    </p>

    <p>
      Dit is een veelgemaakte fout:
      wie vergeet het teken om te keren, krijgt de verkeerde
      oplossingsverzameling.
    </p>


    <h3>Twee grenzen tegelijk</h3>

    <p>
      Soms leggen we tegelijk een onder- en een bovengrens op.
    </p>

    <p class="formula">2 &lt; x &lt; 7</p>

    <p>
      Dit betekent:
      <span class="formula-inline">x</span> is groter dan 2
      <strong>en</strong> kleiner dan 7.
    </p>

    <p>
      De getallen 3, 4, 5 en 6 voldoen bijvoorbeeld aan deze voorwaarde.
      Maar ook alle andere reële getallen tussen 2 en 7.
    </p>

    <p>
      De grenswaarden 2 en 7 horen er niet bij.
    </p>

    <p>
      Als de grenzen wel inbegrepen zijn, schrijven we:
    </p>

    <p class="formula">2 ≤ x ≤ 7</p>


    <h3>Intervallen</h3>

    <p>
      Een hele verzameling getallen kunnen we compact beschrijven met een
      <strong>interval</strong>.
    </p>

    <div class="theory-image">
      <img
        src="assets/getallenlijn-tussen-min1-en-3.svg"
        alt="Een interval met een gesloten grens bij −1 en een open grens bij 3: [−1, 3)."
      >
    </div>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2 &lt; x &lt; 7</p>

    <p>
      schrijven we als:
    </p>

    <p class="formula">(2, 7)</p>

    <p>
      De ronde haakjes betekenen dat 2 en 7 niet inbegrepen zijn.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">2 ≤ x ≤ 7</p>

    <p>
      schrijven we:
    </p>

    <p class="formula">[2, 7]</p>

    <p>
      De vierkante haakjes betekenen dat de grenswaarden wel inbegrepen zijn.
    </p>

    <div class="callout">
      <p><strong>Intervalnotatie is een compacte taal voor oplossingsverzamelingen.</strong></p>
      <p>
        Ronde haakjes: grens niet inbegrepen.
      </p>
      <p>
        Vierkante haakjes: grens wel inbegrepen.
      </p>
    </div>


    <h3>Een interval met één grens</h3>

    <p>
      Niet elke oplossingsverzameling heeft een onder- én een bovengrens.
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">x &lt; 4</p>

    <p>
      zijn er oneindig veel oplossingen naar links.
      In intervalnotatie schrijven we:
    </p>

    <p class="formula">(−∞, 4)</p>

    <p>
      Bij:
    </p>

    <p class="formula">x ≥ 4</p>

    <p>
      schrijven we:
    </p>

    <p class="formula">[4, ∞)</p>

    <p>
      Het symbool <span class="formula-inline">∞</span> is geen gewoon getal.
      Het geeft aan dat de verzameling onbeperkt doorgaat.
    </p>

    <p>
      Daarom gebruiken we bij <span class="formula-inline">∞</span>
      altijd een ronde haak.
    </p>


    <h3>Absolute waarde als afstand</h3>

    <p>
      Op de getallenlijn kunnen we ook de
      <strong>afstand van een getal tot nul</strong> bekijken.
    </p>

    <p>
      De afstand van 5 tot 0 is 5:
    </p>

    <p class="formula">|5| = 5</p>

    <p>
      De afstand van −5 tot 0 is ook 5:
    </p>

    <p class="formula">|−5| = 5</p>

    <p>
      De absolute waarde van een getal is dus de afstand van dat getal
      tot nul.
      Een afstand is nooit negatief.
    </p>

    <div class="callout">
      <p><strong>Absolute waarde = afstand tot nul.</strong></p>
      <p>
        Het teken van het getal bepaalt niet hoe groot de afstand is.
      </p>
    </div>


    <h3>Afstand tussen twee getallen</h3>

    <p>
      Absolute waarde kunnen we ook gebruiken om de afstand tussen
      twee getallen te berekenen.
    </p>

    <p>
      De afstand tussen <span class="formula-inline">a</span> en
      <span class="formula-inline">b</span> is:
    </p>

    <p class="formula">|a − b|</p>

    <p>
      Bijvoorbeeld, de afstand tussen 3 en 8 is:
    </p>

    <p class="formula">|8 − 3| = |5| = 5</p>

    <p>
      De afstand tussen −2 en 4 is:
    </p>

    <p class="formula">|4 − (−2)| = |6| = 6</p>

    <p>
      De absolute waarde zorgt ervoor dat de afstand niet negatief wordt,
      ongeacht in welke volgorde we de twee getallen nemen.
    </p>


    <h3>Absolute waarde als voorwaarde</h3>

    <p>
      We kunnen absolute waarde ook gebruiken om een afstandsvoorwaarde
      te beschrijven.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">|x| &lt; 3</p>

    <p>
      betekent:
      de afstand van <span class="formula-inline">x</span> tot 0
      is kleiner dan 3.
    </p>

    <p>
      Op de getallenlijn betekent dit dat
      <span class="formula-inline">x</span> tussen −3 en 3 ligt:
    </p>

    <p class="formula">−3 &lt; x &lt; 3</p>

    <p>
      Evenzo betekent:
    </p>

    <p class="formula">|x| ≤ 3</p>

    <p>
      dat:
    </p>

    <p class="formula">−3 ≤ x ≤ 3</p>

    <div class="callout">
      <p><strong>Absolute waarde vertaalt een afstandsvoorwaarde naar een interval.</strong></p>
    </div>


    <h3>Ongelijkheden uit de werkelijkheid</h3>

    <p>
      Ongelijkheden zijn bijzonder geschikt wanneer een grenswaarde
      belangrijk is.
    </p>

    <p>
      Stel dat een lift maximaal 600 kg mag dragen.
      Als <span class="formula-inline">x</span> de totale massa voorstelt,
      schrijven we:
    </p>

    <p class="formula">x ≤ 600</p>

    <p>
      De grens van 600 kg is inbegrepen.
    </p>

    <p>
      Als de instructie daarentegen zegt:
      <strong>minder dan 600 kg</strong>, schrijven we:
    </p>

    <p class="formula">x &lt; 600</p>

    <p>
      Het verschil tussen
      <span class="formula-inline">&lt;</span> en
      <span class="formula-inline">≤</span>
      heeft hier dus een concrete betekenis.
    </p>


    <h3>Niet elke wiskundige oplossing past bij de context</h3>

    <p>
      Net als bij formules moet je bij ongelijkheden rekening houden
      met wat een variabele werkelijk voorstelt.
    </p>

    <p>
      Als <span class="formula-inline">x</span> een lengte in meter voorstelt,
      is een negatieve waarde meestal niet fysisch mogelijk.
    </p>

    <p class="formula">x &lt; 0</p>

    <p>
      De algebra kan zulke getallen wel beschrijven,
      maar de context kan ze uitsluiten.
    </p>

    <div class="callout">
      <p><strong>Wiskundige mogelijkheden en mogelijkheden in de werkelijkheid zijn niet altijd hetzelfde.</strong></p>
      <p>
        Controleer daarom altijd wat de variabele werkelijk voorstelt.
      </p>
    </div>


    <h3>Een volledige ongelijkheid oplossen</h3>

    <p>
      Bekijk:
    </p>

    <p class="formula">2x − 3 ≥ 7</p>

    <p>
      Tel eerst 3 op bij beide kanten:
    </p>

    <p class="formula">2x ≥ 10</p>

    <p>
      Deel daarna door 2:
    </p>

    <p class="formula">x ≥ 5</p>

    <p>
      In intervalnotatie is dat:
    </p>

    <p class="formula">[5, ∞)</p>

    <p>
      De grens 5 hoort erbij omdat het oorspronkelijke teken
      <span class="formula-inline">≥</span> was.
    </p>


    <h3>Een ongelijkheid met een negatieve factor</h3>

    <p>
      Neem:
    </p>

    <p class="formula">−2x + 4 &gt; 10</p>

    <p>
      Trek eerst 4 af aan beide kanten:
    </p>

    <p class="formula">−2x &gt; 6</p>

    <p>
      Deel nu door −2.
      Omdat we door een negatief getal delen,
      keert het teken om:
    </p>

    <p class="formula">x &lt; −3</p>

    <p>
      In intervalnotatie:
    </p>

    <p class="formula">(−∞, −3)</p>


    <h3>Vergelijking versus ongelijkheid</h3>

    <p>
      Het verschil tussen beide kunnen we nu scherp formuleren.
    </p>

    <p>
      Bij een vergelijking:
    </p>

    <p class="formula">2x + 3 = 9</p>

    <p>
      zoeken we waarden waarvoor beide kanten <strong>gelijk</strong> zijn.
    </p>

    <p>
      Bij een ongelijkheid:
    </p>

    <p class="formula">2x + 3 &lt; 9</p>

    <p>
      zoeken we waarden waarvoor de linkerkant
      <strong>kleiner</strong> is dan de rechterkant.
    </p>

    <p>
      Een vergelijking leidt vaak tot één of enkele waarden.
      Een ongelijkheid beschrijft meestal een bereik van waarden.
    </p>


    <h3>Een vaste werkwijze</h3>

    <p>
      Bij een eenvoudige ongelijkheid kunnen we deze werkwijze gebruiken:
    </p>

    <ol>
      <li>vereenvoudig beide kanten indien nodig;</li>
      <li>werk haakjes weg als dat nodig is;</li>
      <li>breng termen met de onbekende samen;</li>
      <li>breng constante termen naar de andere kant;</li>
      <li>maak de factor van de onbekende ongedaan;</li>
      <li>
        controleer of je door een negatief getal vermenigvuldigt of deelt;
      </li>
      <li>
        keer in dat geval het ongelijkheidsteken om;
      </li>
      <li>
        schrijf de oplossingsverzameling eventueel als interval.
      </li>
    </ol>

    <p>
      Controleer tenslotte of de gevonden oplossingen passen bij de context.
    </p>


    <h3>Van ongelijkheid naar oplossingsverzameling</h3>

    <p>
      We begonnen met het idee dat een vergelijking één oplossing kan hebben.
      Een ongelijkheid werkt anders.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x = 4</p>

    <p>
      beschrijft één waarde.
    </p>

    <p>
      Terwijl:
    </p>

    <p class="formula">x &gt; 4</p>

    <p>
      alle getallen groter dan 4 beschrijft.
    </p>

    <p>
      En:
    </p>

    <p class="formula">2 ≤ x &lt; 7</p>

    <p>
      beschrijft alle getallen vanaf 2 tot maar niet met 7.
    </p>

    <p>
      De <strong>getallenlijn</strong> maakt zo'n oplossingsverzameling
      zichtbaar. <strong>Intervalnotatie</strong> maakt haar compact.
      <strong>Absolute waarde</strong> geeft ons bovendien een natuurlijke
      manier om voorwaarden over afstanden te beschrijven.
    </p>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een ongelijkheid beschrijft een verzameling waarden die aan
        een bepaalde voorwaarde voldoen.
      </p>
      <p>
        Net als bij vergelijkingen mogen we dezelfde geldige bewerking
        aan beide kanten uitvoeren.
      </p>
      <p>
        Bij vermenigvuldigen of delen door een negatief getal keert
        het ongelijkheidsteken om.
      </p>
      <p>
        Met getallenlijnen en intervallen kunnen we oplossingsverzamelingen
        zichtbaar en compact beschrijven. Absolute waarde geeft ons
        een natuurlijke taal voor afstanden.
      </p>
    </div>
  `
},
{
  id: "2.6",
  title: "Machten, wortels & algebraïsche breuken",
  goal: "Hoe gebruiken we machten, wortels en breuken met algebraïsche uitdrukkingen?",
  theory: /* html */`
    <h2>Machten, wortels & algebraïsche breuken</h2>
    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe gebruiken we de rekenregels voor machten wanneer het grondtal een letter is?</li>
      <li>Wat betekenen negatieve en gebroken exponenten?</li>
      <li>Hoe hangen wortels en machten met elkaar samen?</li>
      <li>Hoe werken we met algebraïsche breuken?</li>
      <li>Wanneer is een algebraïsche breuk wel of niet gedefinieerd?</li>
      <li>Waarom mogen we soms factoren wegdelen, maar geen termen uit een som?</li>
    </ul>
    <p>
      In Fase 1 leerden we rekenen met machten en wortels.
      Die kennis nemen we mee naar de algebra: het grondtal kan nu een
      <strong>variabele</strong> of een uitdrukking zijn.
      We leren dus niet opnieuw wat een macht is; we kijken hoe de bekende
      regels werken met <strong>letters</strong>.
    </p>

    <h3>Machten met letters</h3>
    <p>De betekenis van een macht verandert niet:</p>
    <p class="formula">x^{4} = x · x · x · x</p>
    <p>Daardoor blijven de rekenregels dezelfde. Drie factoren x plus twee factoren x geven vijf factoren:</p>
    <p class="formula">x^{3} · x^{2} = x^{5}</p>
    <p>In het algemeen, bij hetzelfde grondtal:</p>
    <p class="formula">a^{m} · a^{n} = a^{m+n}</p>
    <p class="formula">x^{4} · x^{3} = x^{7}</p>
    <p class="formula">2x^{2} · 3x^{4} = 6x^{6}</p>
    <div class="callout">
      <p><strong>Herinnering uit Fase 1:</strong></p>
      <p>Zelfde grondtal, product: <strong>exponenten optellen</strong>.</p>
    </div>

    <h3>Machten delen</h3>
    <p>Gemeenschappelijke factoren vallen weg:</p>
    <p class="formula">\\frac{x^{5}}{x^{2}} = x^{3}</p>
    <p class="formula">\\frac{a^{m}}{a^{n}} = a^{m-n}</p>
    <p>Het grondtal mag niet 0 zijn als het in de noemer komt.</p>
    <p class="formula">\\frac{x^{7}}{x^{3}} = x^{4}</p>
    <p class="formula">\\frac{x^{4}}{x^{6}} = x^{-2}</p>
    <p>Een negatieve exponent ontstaat vanzelf als de exponent in de noemer groter is.</p>

    <h3>Negatieve exponenten</h3>
    <p class="formula">\\frac{x^{4}}{x^{6}} = x^{4-6} = x^{-2}</p>
    <p>Rechtstreeks als breuk:</p>
    <p class="formula">\\frac{x^{4}}{x^{6}} = \\frac{1}{x^{2}}</p>
    <p>Dus:</p>
    <p class="formula">x^{-2} = \\frac{1}{x^{2}}</p>
    <p class="formula">a^{-n} = \\frac{1}{a^{n}}</p>
    <p>Een negatieve exponent betekent niet dat de uitkomst negatief is. De macht staat in de noemer.</p>
    <p class="formula">2^{-3} = \\frac{1}{2^{3}} = \\frac{1}{8}</p>
    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p>Een negatieve exponent is iets anders dan een negatieve waarde.</p>
      <p><span class="formula-inline">2^{-3}</span> is positief.</p>
    </div>

    <h3>Een macht van een macht</h3>
    <p class="formula">(x^{2})^{3} = x^{2} · x^{2} · x^{2} = x^{6}</p>
    <p class="formula">(a^{m})^{n} = a^{mn}</p>
    <p>Hier worden de exponenten <strong>vermenigvuldigd</strong>.</p>
    <div class="callout">
      <p><strong>Let op het verschil:</strong></p>
      <p><span class="formula-inline">x^{2} · x^{3} = x^{5}</span> — product: exponenten optellen.</p>
      <p><span class="formula-inline">(x^{2})^{3} = x^{6}</span> — macht van een macht: exponenten vermenigvuldigen.</p>
    </div>

    <h3>De macht nul</h3>
    <p class="formula">a^{0} = 1</p>
    <p>voor elk grondtal dat niet 0 is. Vanuit delen:</p>
    <p class="formula">\\frac{a^{3}}{a^{3}} = a^{3-3} = a^{0}</p>
    <p>Een getal gedeeld door zichzelf is 1, dus <span class="formula-inline">a^{0} = 1</span> als <span class="formula-inline">a \\neq 0</span>.</p>

    <h3>Wortels als machten</h3>
    <p class="formula">\\sqrt{a} = a^{1/2}</p>
    <p class="formula">\\sqrt[3]{a} = a^{1/3}</p>
    <p class="formula">\\sqrt[n]{a} = a^{1/n}</p>
    <div class="callout">
      <p><strong>Een wortel kan als macht worden geschreven.</strong></p>
      <p>Daardoor gelden voor wortels dezelfde algebraïsche regels als voor machten.</p>
    </div>

    <h3>Gebroken exponenten</h3>
    <p class="formula">x^{1/2} = \\sqrt{x}</p>
    <p class="formula">x^{1/3} = \\sqrt[3]{x}</p>
    <p>Een exponent met teller groter dan 1 combineert wortel en macht:</p>
    <p class="formula">x^{3/2} = (\\sqrt{x})^{3}</p>
    <p class="formula">8^{2/3} = (\\sqrt[3]{8})^{2} = 2^{2} = 4</p>
    <p>Eerst de derdemachtswortel, daarna het kwadraat.</p>

    <h3>Wortels met algebraïsche uitdrukkingen</h3>
    <p class="formula">\\sqrt{x}</p>
    <p class="formula">\\sqrt{x + 3}</p>
    <p class="formula">\\sqrt{x^{2}}</p>
    <p>De vierkantswortel is per definitie niet-negatief. Zowel 3 als −3 hebben kwadraat 9, maar:</p>
    <p class="formula">\\sqrt{9} = 3</p>
    <p>Daarom:</p>
    <p class="formula">\\sqrt{x^{2}} = |x|</p>
    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p><span class="formula-inline">\\sqrt{x^{2}}</span> is niet altijd gelijk aan <span class="formula-inline">x</span>.</p>
      <p>Correct is <span class="formula-inline">\\sqrt{x^{2}} = |x|</span>.</p>
    </div>

    <h3>Wanneer is een wortel gedefinieerd?</h3>
    <p>In de reële getallen bestaat <span class="formula-inline">\\sqrt{x}</span> alleen als</p>
    <p class="formula">x \\geq 0</p>
    <p><span class="formula-inline">\\sqrt{9} = 3</span>, maar <span class="formula-inline">\\sqrt{-9}</span> heeft geen reële waarde. Dat is een <strong>domeinvoorwaarde</strong>.</p>

    <h3>Algebraïsche breuken</h3>
    <p>Letters in teller of noemer: een <strong>algebraïsche breuk</strong>.</p>
    <p class="formula">\\frac{3x}{5}</p>
    <p class="formula">\\frac{x + 2}{x - 1}</p>
    <p class="formula">\\frac{2x^{2}}{3x}</p>
    <p>De rekenregels voor breuken blijven gelden. Extra: de <strong>noemer mag nooit 0</strong> zijn.</p>

    <h3>De noemer mag niet nul zijn</h3>
    <p class="formula">\\frac{1}{x} \\quad \\Rightarrow \\quad x \\neq 0</p>
    <p class="formula">\\frac{1}{x - 3} \\quad \\Rightarrow \\quad x \\neq 3</p>
    <div class="callout">
      <p><strong>Gewoonte:</strong></p>
      <p>Kijk bij een algebraïsche breuk eerst naar de noemer. Waarden die de noemer 0 maken, vallen af.</p>
    </div>

    <h3>Gemeenschappelijke factoren wegdelen</h3>
    <p>Alleen gemeenschappelijke <strong>factoren</strong> mogen weg.</p>
    <p class="formula">\\frac{6x}{3x} = 2 \\quad (x \\neq 0)</p>
    <p>Soms eerst ontbinden:</p>
    <p class="formula">\\frac{x^{2} + 3x}{x} = \\frac{x(x + 3)}{x} = x + 3 \\quad (x \\neq 0)</p>
    <p>De voorwaarde <span class="formula-inline">x \\neq 0</span> blijft gelden.</p>

    <h3>Factoren zijn geen termen</h3>
    <p class="formula">\\frac{x + 3}{x}</p>
    <p>Hier mag je de x niet wegstrepen: de teller is een <strong>som</strong>.</p>
    <p class="formula">\\frac{x(x + 3)}{x} = x + 3 \\quad (x \\neq 0)</p>
    <p>Hier is x wél een volledige factor.</p>
    <div class="callout">
      <p><strong>Onthoud:</strong></p>
      <p>Je mag factoren wegdelen, geen termen uit een som of verschil.</p>
    </div>

    <h3>Algebraïsche breuken vermenigvuldigen</h3>
    <p>Teller keer teller, noemer keer noemer:</p>
    <p class="formula">\\frac{2x}{3} · \\frac{6}{x} = \\frac{12x}{3x} = 4 \\quad (x \\neq 0)</p>

    <h3>Algebraïsche breuken delen</h3>
    <p>Delen door een breuk is vermenigvuldigen met het omgekeerde:</p>
    <p class="formula">\\frac{x}{3} : \\frac{2}{5} = \\frac{x}{3} · \\frac{5}{2} = \\frac{5x}{6}</p>

    <h3>Algebraïsche breuken optellen en aftrekken</h3>
    <p>Eerst een gemeenschappelijke noemer.</p>
    <p class="formula">\\frac{x}{3} + \\frac{2x}{3} = \\frac{3x}{3} = x</p>
    <p class="formula">\\frac{x}{2} + \\frac{x}{3} = \\frac{3x}{6} + \\frac{2x}{6} = \\frac{5x}{6}</p>
    <p>Tellers en noemers afzonderlijk optellen mag niet.</p>

    <h3>Technieken combineren</h3>
    <p class="formula">\\frac{2x^{2}}{3} + \\frac{4x^{2}}{3} = \\frac{2x^{2} + 4x^{2}}{3} = \\frac{6x^{2}}{3} = 2x^{2}</p>

    <h3>Een volledig voorbeeld</h3>
    <p>Vereenvoudig:</p>
    <p class="formula">\\frac{3x^{2} + 6x}{3x}</p>
    <p class="formula">3x^{2} + 6x = 3x(x + 2)</p>
    <p class="formula">\\frac{3x(x + 2)}{3x} = x + 2 \\quad (x \\neq 0)</p>
    <div class="callout">
      <p><strong>Waarom blijft x ≠ 0?</strong></p>
      <p><span class="formula-inline">x + 2</span> bestaat wél voor x = 0. De oorspronkelijke breuk niet. Vereenvoudigen schrapt die beperking niet.</p>
    </div>

    <h3>De belangrijkste rekenregels</h3>
    <p class="formula">a^{m} · a^{n} = a^{m+n}</p>
    <p class="formula">\\frac{a^{m}}{a^{n}} = a^{m-n}</p>
    <p class="formula">(a^{m})^{n} = a^{mn}</p>
    <p class="formula">a^{0} = 1 \\quad (a \\neq 0)</p>
    <p class="formula">a^{-n} = \\frac{1}{a^{n}}</p>
    <p class="formula">\\sqrt{a} = a^{1/2}</p>
    <p class="formula">\\sqrt[3]{a} = a^{1/3}</p>
    <p class="formula">\\sqrt{x^{2}} = |x|</p>

    <h3>Veelgemaakte fouten</h3>
    <p><strong>Fout 1:</strong> exponenten vermenigvuldigen bij een product.</p>
    <p class="formula">x^{2} · x^{3} \\neq x^{6}</p>
    <p class="formula">x^{2} · x^{3} = x^{5}</p>
    <p><strong>Fout 2:</strong> termen wegstrepen.</p>
    <p class="formula">\\frac{x + 3}{x} \\neq 3</p>
    <p><strong>Fout 3:</strong> negatieve exponent verwarren met een negatief getal.</p>
    <p class="formula">2^{-3} = \\frac{1}{8}</p>
    <p><strong>Fout 4:</strong> de absolute waarde vergeten.</p>
    <p class="formula">\\sqrt{x^{2}} = |x|</p>
    <p><strong>Fout 5:</strong> de domeinvoorwaarde vergeten.</p>
    <p class="formula">\\frac{x^{2} + 3x}{x} = x + 3 \\quad (x \\neq 0)</p>

    <h3>Een vaste werkwijze</h3>
    <ol>
      <li>bekijk de structuur;</li>
      <li>pas machtsregels toe;</li>
      <li>schrijf wortels eventueel als machten;</li>
      <li>ontbind als dat factoren zichtbaar maakt;</li>
      <li>deel alleen gemeenschappelijke factoren weg;</li>
      <li>houd noemer- en wortelvoorwaarden bij;</li>
      <li>controleer eventueel met een getal.</li>
    </ol>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>Machten, wortels en algebraïsche breuken beschrijven vermenigvuldiging, deling en omgekeerde bewerkingen met letters.</p>
      <p>De regels uit Fase 1 blijven gelden. Extra letten op <strong>factoren, domeinvoorwaarden en de structuur</strong> van de uitdrukking.</p>
    </div>
  `
},
   
{
  id: "2.7",
  title: "Kwadratische vergelijkingen",
  goal: "Wat gebeurt er wanneer x² verschijnt?",
  theory: /* html */`
    <h2>Kwadratische vergelijkingen</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat maakt een vergelijking kwadratisch?</li>
      <li>Waarom kan een kwadratische vergelijking twee oplossingen hebben?</li>
      <li>Hoe kunnen we eenvoudige kwadratische vergelijkingen oplossen?</li>
      <li>Hoe helpt factoriseren bij het oplossen van vergelijkingen?</li>
      <li>Hoe werkt de abc-formule?</li>
      <li>Wat vertelt de discriminant ons?</li>
      <li>Wat hebben de oplossingen te maken met een parabool?</li>
      <li>Welke methode kunnen we het best gebruiken?</li>
    </ul>

    <p>
      In 2.3 leerden we vergelijkingen oplossen waarin de onbekende
      bijvoorbeeld één keer voorkwam:
    </p>

    <p class="formula">3x + 5 = 17</p>

    <p>
      Nu verschijnt ook het kwadraat van de onbekende:
    </p>

    <p class="formula">x^{2} = 9</p>

    <p>
      Daardoor verandert de structuur van het probleem.
      Een kwadratische vergelijking kan bijvoorbeeld twee verschillende
      oplossingen hebben.
    </p>


    <h3>Wat maakt een vergelijking kwadratisch?</h3>

    <p>
      Een <strong>kwadratische vergelijking</strong> is een vergelijking
      waarin de hoogste macht van de onbekende 2 is.
    </p>

    <p>
      De algemene vorm is:
    </p>

    <p class="formula">ax^{2} + bx + c = 0</p>

    <p>
      Hierbij geldt:
    </p>

    <ul>
      <li><strong>a</strong> is niet nul;</li>
      <li><strong>b</strong> kan elk reëel getal zijn;</li>
      <li><strong>c</strong> kan elk reëel getal zijn.</li>
    </ul>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2x^{2} + 5x - 3 = 0</p>

    <p>
      is kwadratisch omdat de hoogste macht van x gelijk is aan 2.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een vergelijking is kwadratisch wanneer de hoogste macht van
        de onbekende gelijk is aan 2.
      </p>
      <p>
        In de algemene vorm
        <span class="formula-inline">ax^{2} + bx + c = 0</span>
        moet <strong>a ≠ 0</strong> zijn. Anders verdwijnt de kwadraatterm.
      </p>
    </div>


    <h3>Alles naar één kant</h3>

    <p>
      Om een kwadratische vergelijking systematisch op te lossen,
      brengen we haar eerst naar de standaardvorm:
    </p>

    <p class="formula">ax^{2} + bx + c = 0</p>

    <p>
      Stel dat we hebben:
    </p>

    <p class="formula">x^{2} + 5x = 6</p>

    <p>
      We brengen 6 naar de linkerkant:
    </p>

    <p class="formula">x^{2} + 5x - 6 = 0</p>

    <p>
      Nu staat de vergelijking in de vorm die we verder kunnen onderzoeken.
    </p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Breng bij een kwadratische vergelijking eerst alles naar één kant
        en zorg dat de andere kant nul is.
      </p>
      <p>
        Daarna kunnen we herkennen welke methode het meest geschikt is.
      </p>
    </div>


    <h3>Van x² = a naar twee oplossingen</h3>

    <p>
      We beginnen met de eenvoudigste kwadratische vergelijking:
    </p>

    <p class="formula">x^{2} = 9</p>

    <p>
      We zoeken alle getallen waarvan het kwadraat 9 is.
    </p>

    <p class="formula">3^{2} = 9</p>

    <p class="formula">(-3)^{2} = 9</p>

    <p>
      Er zijn dus twee oplossingen:
    </p>

    <p class="formula">x = 3</p>

    <p class="formula">x = -3</p>

    <p>
      We kunnen dit compact schrijven als:
    </p>

    <p class="formula">x = \pm\sqrt{9}</p>

    <p class="formula">x = \pm 3</p>

    <p>
      Algemeen geldt voor een positieve waarde van a:
    </p>

    <p class="formula">x^{2} = a \rightarrow x = \pm\sqrt{a}</p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        Uit <span class="formula-inline">x^{2} = a</span> volgt niet alleen
        <span class="formula-inline">x = \sqrt{a}</span>.
      </p>
      <p>
        Ook de negatieve waarde kan een oplossing zijn, omdat een negatief
        getal na kwadrateren positief wordt.
      </p>
    </div>


    <h3>Factoriseren en de nulproductregel</h3>

    <p>
      Sommige kwadratische uitdrukkingen kunnen we herschrijven als
      een product van factoren.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x^{2} + 5x + 6</p>

    <p>
      kan worden geschreven als:
    </p>

    <p class="formula">(x + 2)(x + 3)</p>

    <p>
      Want:
    </p>

    <p class="formula">(x + 2)(x + 3) = x^{2} + 3x + 2x + 6</p>

    <p class="formula">= x^{2} + 5x + 6</p>

    <p>
      Dit noemen we <strong>factoriseren</strong>:
      een uitdrukking herschrijven als een product van factoren.
    </p>

    <p>
      Factoriseren wordt bijzonder nuttig wanneer de vergelijking gelijk
      is aan nul.
    </p>

    <p class="formula">ab = 0</p>

    <p>
      Dan moet minstens één van de factoren nul zijn:
    </p>

    <p class="formula">a = 0 \quad\text{of}\quad b = 0</p>

    <p>
      Dit noemen we de <strong>nulproductregel</strong>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">(x + 2)(x + 3) = 0</p>

    <p>
      geeft:
    </p>

    <p class="formula">x + 2 = 0</p>

    <p class="formula">x + 3 = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = -2</p>

    <p class="formula">x = -3</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Factoriseren maakt van één kwadratische vergelijking een product
        van eenvoudigere factoren.
      </p>
      <p>
        De nulproductregel maakt het daarna mogelijk om die factoren
        afzonderlijk gelijk aan nul te stellen.
      </p>
    </div>


    <h3>Een kwadratische vergelijking factoriseren</h3>

    <p>
      Neem:
    </p>

    <p class="formula">x^{2} + 5x + 6 = 0</p>

    <p>
      Eerst factoriseren we:
    </p>

    <p class="formula">(x + 2)(x + 3) = 0</p>

    <p>
      Daarna gebruiken we de nulproductregel:
    </p>

    <p class="formula">x + 2 = 0</p>

    <p class="formula">x + 3 = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = -2</p>

    <p class="formula">x = -3</p>

    <p>
      We kunnen beide oplossingen controleren in de oorspronkelijke
      vergelijking:
    </p>

    <p class="formula">(-2)^{2} + 5(-2) + 6 = 0</p>

    <p class="formula">(-3)^{2} + 5(-3) + 6 = 0</p>

    <p>
      Beide waarden maken de oorspronkelijke vergelijking waar.
    </p>

    <p>
      Factoriseren lukt echter niet altijd eenvoudig.
      Bijvoorbeeld:
    </p>

    <p class="formula">2x^{2} + 3x - 7 = 0</p>

    <p>
      Hier is niet meteen een eenvoudige factorisatie zichtbaar.
      Daarom hebben we een algemene methode nodig.
    </p>


    <h3>De abc-formule</h3>

    <p>
      Voor iedere kwadratische vergelijking in de vorm:
    </p>

    <p class="formula">ax^{2} + bx + c = 0</p>

    <p>
      kunnen we de oplossingen berekenen met de <strong>abc-formule</strong>:
    </p>

    <p class="formula">x = \frac{-b \pm \sqrt{D}}{2a}</p>

    <p>
      Hierbij is:
    </p>

    <p class="formula">D = b^{2} - 4ac</p>

    <p>
      D noemen we de <strong>discriminant</strong>.
    </p>

    <p>
      De abc-formule is dus geen methode die alleen voor enkele
      bijzondere voorbeelden werkt. Ze geeft een algemene manier om
      de oplossingen van een kwadratische vergelijking te vinden.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De abc-formule werkt voor iedere kwadratische vergelijking
        waarvan de standaardvorm bekend is.
      </p>
      <p>
        De discriminant staat onder de vierkantswortel en bepaalt daardoor
        welke reële oplossingen mogelijk zijn.
      </p>
    </div>


    <h3>De discriminant</h3>

    <p>
      In de abc-formule verschijnt:
    </p>

    <p class="formula">\sqrt{D}</p>

    <p>
      Daarom is het teken van D belangrijk.
    </p>

    <p>
      Als:
    </p>

    <p class="formula">D > 0</p>

    <p>
      dan is er een positieve waarde onder de wortel en krijgen we
      twee verschillende reële oplossingen:
    </p>

    <p class="formula">x = \frac{-b + \sqrt{D}}{2a}</p>

    <p class="formula">x = \frac{-b - \sqrt{D}}{2a}</p>

    <p>
      Als:
    </p>

    <p class="formula">D = 0</p>

    <p>
      dan is:
    </p>

    <p class="formula">\sqrt{D} = 0</p>

    <p>
      De plus- en minvariant leveren dezelfde waarde.
      Er is dus één reële oplossing.
    </p>

    <p>
      Als:
    </p>

    <p class="formula">D < 0</p>

    <p>
      staat er een negatief getal onder de vierkantswortel.
      Binnen de reële getallen bestaat zo'n wortel niet.
      Er zijn dan geen reële oplossingen.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De discriminant vertelt hoeveel reële oplossingen een kwadratische
        vergelijking heeft.
      </p>
      <p class="formula">D > 0 \rightarrow 2</p>
      <p class="formula">D = 0 \rightarrow 1</p>
      <p class="formula">D < 0 \rightarrow 0</p>
    </div>


    <h3>De drie gevallen van de discriminant</h3>

    <p>
      We kunnen de drie gevallen concreet bekijken.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">x^{2} - 5x + 6 = 0</p>

    <p>
      zijn:
    </p>

    <p class="formula">a = 1</p>

    <p class="formula">b = -5</p>

    <p class="formula">c = 6</p>

    <p>
      De discriminant is:
    </p>

    <p class="formula">D = (-5)^{2} - 4 \cdot 1 \cdot 6 = 1</p>

    <p>
      Omdat D > 0 zijn er twee reële oplossingen:
    </p>

    <p class="formula">x = 2</p>

    <p class="formula">x = 3</p>

    <p>
      Voor:
    </p>

    <p class="formula">x^{2} - 4x + 4 = 0</p>

    <p>
      geldt:
    </p>

    <p class="formula">D = (-4)^{2} - 4 \cdot 1 \cdot 4 = 0</p>

    <p>
      Er is één reële oplossing:
    </p>

    <p class="formula">x = 2</p>

    <p>
      Dit zien we ook door factoriseren:
    </p>

    <p class="formula">(x - 2)^{2} = 0</p>

    <p>
      Voor:
    </p>

    <p class="formula">x^{2} + 1 = 0</p>

    <p>
      krijgen we:
    </p>

    <p class="formula">D = 0^{2} - 4 \cdot 1 \cdot 1 = -4</p>

    <p>
      Omdat D < 0 zijn er geen reële oplossingen.
    </p>

    <p>
      Later zullen complexe getallen toelaten om ook zulke vergelijkingen
      verder te bestuderen. Voorlopig blijven we binnen de reële getallen.
    </p>


    <h3>Van vergelijking naar parabool</h3>

    <p>
      De discriminant heeft niet alleen een algebraïsche betekenis.
      Hij vertelt ons ook iets over de grafiek van de bijbehorende
      kwadratische functie.
    </p>

    <p>
      Beschouw:
    </p>

    <p class="formula">y = ax^{2} + bx + c</p>

    <p>
      Een oplossing van:
    </p>

    <p class="formula">ax^{2} + bx + c = 0</p>

    <p>
      is precies een waarde van x waarvoor:
    </p>

    <p class="formula">y = 0</p>

    <p>
      De oplossingen zijn dus de <strong>nulpunten</strong> van de
      bijbehorende parabool.
    </p>

    <p>
      Daarom geldt:
    </p>

    <p class="formula">D > 0 \rightarrow \text{twee snijpunten}</p>

    <p class="formula">D = 0 \rightarrow \text{één raakpunt}</p>

    <p class="formula">D < 0 \rightarrow \text{geen snijpunten}</p>

    <p>
      De algebraïsche discriminant en de geometrische vorm van de parabool
      vertellen dus hetzelfde verhaal.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De oplossingen van een kwadratische vergelijking zijn de nulpunten
        van de bijbehorende parabool.
      </p>
      <p>
        De discriminant vertelt tegelijk hoeveel reële oplossingen de
        vergelijking heeft en hoe de parabool de x-as snijdt.
      </p>
    </div>


    <h3>De abc-formule stap voor stap</h3>

    <p>
      Neem:
    </p>

    <p class="formula">2x^{2} - 3x - 2 = 0</p>

    <p>
      <strong>Stap 1: herken a, b en c.</strong>
    </p>

    <p class="formula">a = 2</p>

    <p class="formula">b = -3</p>

    <p class="formula">c = -2</p>

    <p>
      <strong>Stap 2: bereken de discriminant.</strong>
    </p>

    <p class="formula">D = (-3)^{2} - 4 \cdot 2 \cdot (-2)</p>

    <p class="formula">D = 9 + 16 = 25</p>

    <p>
      Omdat D > 0 weten we al dat er twee reële oplossingen zijn.
    </p>

    <p>
      <strong>Stap 3: gebruik de abc-formule.</strong>
    </p>

    <p class="formula">x = \frac{3 \pm \sqrt{25}}{4}</p>

    <p class="formula">x = \frac{3 \pm 5}{4}</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = 2</p>

    <p class="formula">x = -\frac{1}{2}</p>

    <p>
      We kunnen beide oplossingen vervolgens controleren in de
      oorspronkelijke vergelijking.
    </p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Breng de vergelijking eerst naar de standaardvorm.
        Bepaal daarna a, b en c, bereken D en gebruik vervolgens
        de abc-formule.
      </p>
      <p>
        Controleer ten slotte de gevonden oplossingen in de oorspronkelijke
        vergelijking.
      </p>
    </div>


    <h3>Kwadraat afsplitsen: een andere kijk</h3>

    <p>
      Er bestaat nog een algemene manier om een kwadratische vergelijking
      te begrijpen: <strong>kwadraat afsplitsen</strong>, ook wel
      kwadraat afmaken genoemd.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">x^{2} + 6x + 5 = 0</p>

    <p>
      We kunnen de vergelijking herschrijven als:
    </p>

    <p class="formula">x^{2} + 6x + 9 = 4</p>

    <p>
      Dus:
    </p>

    <p class="formula">(x + 3)^{2} = 4</p>

    <p>
      Daarna:
    </p>

    <p class="formula">x + 3 = \pm 2</p>

    <p>
      en dus:
    </p>

    <p class="formula">x = -1</p>

    <p class="formula">x = -5</p>

    <p>
      Kwadraat afsplitsen laat goed zien waarom kwadratische vergelijkingen
      uiteindelijk met wortels kunnen worden opgelost.
    </p>

    <p>
      Voor systematisch rekenen is de abc-formule vaak handiger.
      Kwadraat afsplitsen is vooral waardevol om de structuur van een
      kwadratische vergelijking te begrijpen.
    </p>


    <h3>Welke methode gebruik je?</h3>

    <p>
      Er bestaan verschillende manieren om een kwadratische vergelijking
      op te lossen.
    </p>

    <ul>
      <li>
        <strong>Wortel nemen:</strong>
        wanneer de vergelijking rechtstreeks de vorm
        <span class="formula-inline">x^{2} = a</span> heeft.
      </li>
      <li>
        <strong>Factoriseren:</strong>
        wanneer de vergelijking gemakkelijk als product kan worden geschreven.
      </li>
      <li>
        <strong>Kwadraat afsplitsen:</strong>
        wanneer we de structuur van de vergelijking willen blootleggen.
      </li>
      <li>
        <strong>abc-formule:</strong>
        wanneer we een algemene methode nodig hebben.
      </li>
    </ul>

    <p>
      De methodes zijn niet tegenstrijdig.
      Ze zijn verschillende manieren om dezelfde wiskundige structuur
      zichtbaar te maken.
    </p>


    <h3>Controle en veelgemaakte fouten</h3>

    <p>
      Een gevonden waarde is pas een oplossing wanneer ze de
      <strong>oorspronkelijke vergelijking</strong> waar maakt.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x^{2} - 5x + 6 = 0</p>

    <p>
      We vonden:
    </p>

    <p class="formula">x = 2</p>

    <p>
      Controle:
    </p>

    <p class="formula">2^{2} - 5 \cdot 2 + 6 = 0</p>

    <p>
      Er zijn enkele fouten die vaak voorkomen.
    </p>

    <p>
      <strong>Fout 1: slechts één wortel nemen.</strong>
    </p>

    <p class="formula">x^{2} = 25 \rightarrow x = 5</p>

    <p>
      Hierbij ontbreekt de oplossing:
    </p>

    <p class="formula">x = -5</p>

    <p>
      <strong>Fout 2: door x delen.</strong>
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">x(x - 3) = 0</p>

    <p>
      mag je niet zomaar door x delen, omdat x = 0 een mogelijke
      oplossing is.
    </p>

    <p>
      <strong>Fout 3: het teken van b verkeerd overnemen.</strong>
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">2x^{2} - 3x - 2 = 0</p>

    <p>
      is:
    </p>

    <p class="formula">b = -3</p>

    <p>
      en niet b = 3.
    </p>

    <p>
      <strong>Fout 4: de discriminant verkeerd interpreteren.</strong>
    </p>

    <p>
      D < 0 betekent geen <strong>reële</strong> oplossingen,
      niet dat de vergelijking helemaal geen betekenis heeft.
    </p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        Controleer altijd de oorspronkelijke vergelijking.
        Een algebraïsche stap kan een tekenfout of een verloren oplossing
        verbergen.
      </p>
      <p>
        Let vooral op het teken van b, de twee oplossingen bij een kwadraat
        en het verschil tussen reële en complexe oplossingen.
      </p>
    </div>


    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>breng alles naar één kant;</li>
      <li>zorg dat de andere kant nul is;</li>
      <li>herken a, b en c;</li>
      <li>kijk eerst of factoriseren eenvoudig is;</li>
      <li>gebruik anders de abc-formule;</li>
      <li>bereken eventueel eerst de discriminant;</li>
      <li>bepaal hoeveel reële oplossingen mogelijk zijn;</li>
      <li>bereken de oplossingen;</li>
      <li>controleer de oplossingen in de oorspronkelijke vergelijking.</li>
    </ol>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Eerst de structuur herkennen, daarna de passende oplossingsmethode
        kiezen en ten slotte de gevonden oplossingen controleren.
      </p>
      <p>
        Zo wordt een kwadratische vergelijking geen verzameling losse
        rekenregels, maar een probleem met een vaste oplossingsstrategie.
      </p>
    </div>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Een kwadratische vergelijking verschilt van een lineaire vergelijking
      doordat de onbekende tot de tweede macht voorkomt.
    </p>

    <p>
      Daardoor kunnen er:
    </p>

    <ul>
      <li>twee verschillende reële oplossingen zijn;</li>
      <li>precies één reële oplossing zijn;</li>
      <li>geen reële oplossingen zijn.</li>
    </ul>

    <p>
      We hebben verschillende manieren gezien om oplossingen te vinden:
      wortels nemen, factoriseren, kwadraat afsplitsen en de abc-formule.
    </p>

    <p>
      De discriminant maakt vooraf zichtbaar hoeveel reële oplossingen
      mogelijk zijn.
    </p>

    <p>
      Ten slotte zagen we dat dezelfde informatie ook geometrisch kan
      worden gelezen: de oplossingen zijn de nulpunten van de parabool
      <span class="formula-inline">y = ax^{2} + bx + c</span>.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een kwadratische vergelijking bevat een onbekende tot de tweede macht.
        Daardoor kunnen er twee, één of geen reële oplossingen zijn.
      </p>
      <p>
        Factoriseren, de nulproductregel en de abc-formule geven verschillende
        manieren om die oplossingen te vinden. De discriminant vertelt vooraf
        hoeveel reële oplossingen er zijn.
      </p>
      <p>
        De oplossingen van de vergelijking zijn de nulpunten van de
        bijbehorende parabool.
      </p>
    </div>
  `
},
     {
  id: "2.8",
  title: "Coördinaten & analytische meetkunde",
  goal: "Hoe vertalen we meetkunde naar getallen?",
  theory: /* html */`
    <h2>Coördinaten & analytische meetkunde</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe kunnen we de plaats van een punt met twee getallen beschrijven?</li>
      <li>Hoe berekenen we de afstand en het midden tussen twee punten?</li>
      <li>Hoe beschrijven we de richting van een rechte met een getal?</li>
      <li>Hoe schrijven we de vergelijking van een rechte?</li>
      <li>Hoe herkennen we parallelle en loodrechte rechten?</li>
      <li>Hoe vinden we het snijpunt van twee rechten?</li>
      <li>Hoe kunnen we een meetkundig probleem vertalen naar algebra?</li>
    </ul>

    <p>
      In de vorige lessen gebruikten we algebra om relaties tussen getallen
      te beschrijven. Nu maken we een belangrijke stap:
      we gebruiken getallen om <strong>plaats, afstand en richting</strong>
      te beschrijven.
    </p>

    <p>
      Dat is het begin van de <strong>analytische meetkunde</strong>:
      meetkundige problemen worden vertaald naar algebraïsche problemen.
    </p>


    <h3>Het cartesisch coördinatenstelsel</h3>

    <p>
      Om de plaats van een punt exact te beschrijven, gebruiken we twee
      getallen. Samen vormen ze de coördinaten van het punt:
    </p>

    <p class="formula">(x, y)</p>

    <p>
      Het eerste getal geeft de horizontale positie aan.
      Het tweede getal geeft de verticale positie aan.
    </p>

    <p>
      Het referentiepunt noemen we de <strong>oorsprong</strong>:
    </p>

    <p class="formula">(0, 0)</p>

    <p>
      Door de oorsprong lopen twee loodrechte assen:
    </p>

    <ul>
      <li>de horizontale <strong>x-as</strong>;</li>
      <li>de verticale <strong>y-as</strong>.</li>
    </ul>

    <p>
      Positieve x-waarden liggen rechts van de oorsprong en negatieve
      x-waarden links. Positieve y-waarden liggen boven de oorsprong en
      negatieve y-waarden eronder.
    </p>

    <div class="theory-image">
      <img
        src="assets/assenstelsel-kwadranten.svg"
        alt="Het cartesisch assenstelsel met de vier kwadranten en de tekens van x en y."
      >
    </div>

    <p>
      De twee assen verdelen het vlak in vier <strong>kwadranten</strong>.
    </p>

    <p class="formula">(+, +) \\rightarrow eerste\\ kwadrant</p>

    <p class="formula">(-, +) \\rightarrow tweede\\ kwadrant</p>

    <p class="formula">(-, -) \\rightarrow derde\\ kwadrant</p>

    <p class="formula">(+, -) \\rightarrow vierde\\ kwadrant</p>

    <p>
      Punten op een as behoren niet tot een kwadrant. Op de x-as geldt:
    </p>

    <p class="formula">y = 0</p>

    <p>
      Op de y-as geldt:
    </p>

    <p class="formula">x = 0</p>


    <h3>Punten lezen en schrijven</h3>

    <p>
      De volgorde van de coördinaten is belangrijk. Een punt wordt altijd
      geschreven als:
    </p>

    <p class="formula">(x, y)</p>

    <p>
      Het punt:
    </p>

    <p class="formula">A = (3, 2)</p>

    <p>
      betekent 3 eenheden naar rechts en 2 eenheden omhoog vanaf de
      oorsprong.
    </p>

    <p>
      Het punt:
    </p>

    <p class="formula">B = (-3, 2)</p>

    <p>
      ligt 3 eenheden links en 2 eenheden boven de oorsprong.
    </p>

    <p>
      De volgorde mag niet worden omgewisseld:
    </p>

    <p class="formula">(2, 5) \\neq (5, 2)</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een punt in het vlak wordt volledig bepaald door twee getallen:
        eerst de horizontale positie, daarna de verticale positie.
      </p>
    </div>


    <h3>Afstand tussen punten</h3>

    <p>
      Eerst bekijken we een eenvoudig geval. Als twee punten dezelfde
      y-coördinaat hebben, liggen ze op dezelfde horizontale lijn.
    </p>

    <p class="formula">A = (2, 3)</p>

    <p class="formula">B = (7, 3)</p>

    <p>
      Het verschil in x-coördinaat is:
    </p>

    <p class="formula">7 - 2 = 5</p>

    <p>
      De afstand is dus 5.
    </p>

    <p>
      Algemeen:
    </p>

    <p class="formula">d = |x_{2} - x_{1}|</p>

    <p>
      Voor twee punten met dezelfde x-coördinaat geldt op dezelfde manier:
    </p>

    <p class="formula">d = |y_{2} - y_{1}|</p>

    <p>
      Maar wat als beide coördinaten verschillen?
      Dan kunnen we vanuit het ene punt eerst horizontaal en daarna
      verticaal naar het andere punt gaan.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">A = (x_{1}, y_{1})</p>

    <p class="formula">B = (x_{2}, y_{2})</p>

    <p>
      zijn de twee verplaatsingen:
    </p>

    <p class="formula">\\Delta x = x_{2} - x_{1}</p>

    <p class="formula">\\Delta y = y_{2} - y_{1}</p>

    <p>
      Deze twee verplaatsingen vormen de rechthoekszijden van een
      rechthoekige driehoek.
    </p>

    <div class="theory-image">
      <img
        src="assets/afstand-driehoek.svg"
        alt="Van een punt naar een ander punt: de horizontale en verticale verplaatsing vormen samen met de afstand een rechthoekige driehoek."
      >
    </div>

    <p>
      Nu kunnen we de stelling van Pythagoras gebruiken:
    </p>

    <p class="formula">d^{2} = (\\Delta x)^{2} + (\\Delta y)^{2}</p>

    <p>
      Dus:
    </p>

    <p class="formula">d = \\sqrt{(\\Delta x)^{2} + (\\Delta y)^{2}}</p>

    <p>
      Als we de verschillen invullen, krijgen we de algemene
      afstandsformule:
    </p>

    <p class="formula">d = \\sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De afstandsformule is geen nieuwe, losstaande regel.
        Ze volgt rechtstreeks uit de stelling van Pythagoras.
      </p>
      <p>
        De horizontale en verticale verschillen vormen de rechthoekszijden;
        de afstand tussen de punten is de schuine zijde.
      </p>
    </div>


    <h3>Een afstand berekenen</h3>

    <p>
      Neem:
    </p>

    <p class="formula">A = (1, 2)</p>

    <p class="formula">B = (5, 5)</p>

    <p>
      Eerst bepalen we de horizontale en verticale verschillen:
    </p>

    <p class="formula">\\Delta x = 5 - 1 = 4</p>

    <p class="formula">\\Delta y = 5 - 2 = 3</p>

    <p>
      De afstand is:
    </p>

    <p class="formula">d = \\sqrt{4^{2} + 3^{2}}</p>

    <p class="formula">d = \\sqrt{16 + 9}</p>

    <p class="formula">d = \\sqrt{25} = 5</p>

    <p>
      De twee punten liggen dus 5 eenheden uit elkaar.
    </p>

    <p>
      We hebben hier opnieuw gezien hoe een meetkundig probleem rechtstreeks
      kan worden vertaald naar een berekening.
    </p>


    <h3>Het midden van een lijnstuk</h3>

    <p>
      Soms willen we niet de afstand tussen twee punten kennen, maar het
      punt dat precies halverwege ligt.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">A = (2, 4)</p>

    <p class="formula">B = (8, 10)</p>

    <p>
      Voor de x-coördinaat nemen we het gemiddelde:
    </p>

    <p class="formula">\\frac{2 + 8}{2} = 5</p>

    <p>
      Voor de y-coördinaat doen we hetzelfde:
    </p>

    <p class="formula">\\frac{4 + 10}{2} = 7</p>

    <p>
      Het midden is dus:
    </p>

    <p class="formula">M = (5, 7)</p>

    <p>
      Algemeen is het midden van twee punten:
    </p>

    <p class="formula">M = \\left(\\frac{x_{1} + x_{2}}{2}, \\frac{y_{1} + y_{2}}{2}\\right)</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Het midden van een lijnstuk vinden we door voor elke coördinaat
        afzonderlijk het gemiddelde te nemen.
      </p>
    </div>


    <h3>Van verplaatsing naar richting</h3>

    <p>
      Twee punten vertellen ons niet alleen hoe ver ze uit elkaar liggen.
      Ze vertellen ook iets over de <strong>richting</strong> van het
      lijnstuk.
    </p>

    <p>
      Van A naar B veranderen x en y met:
    </p>

    <p class="formula">\\Delta x = x_{2} - x_{1}</p>

    <p class="formula">\\Delta y = y_{2} - y_{1}</p>

    <p>
      We kunnen daarom vragen:
      hoeveel verandert y wanneer x verandert?
    </p>

    <p>
      De verhouding tussen die twee veranderingen noemen we de
      <strong>helling</strong>.
    </p>


    <h3>De helling van een rechte</h3>

    <p>
      De helling geeft aan hoeveel de verticale positie verandert ten
      opzichte van de horizontale positie.
    </p>

    <p class="formula">m = \\frac{\\Delta y}{\\Delta x}</p>

    <p>
      Voor twee punten krijgen we:
    </p>

    <p class="formula">m = \\frac{y_{2} - y_{1}}{x_{2} - x_{1}}</p>

    <p>
      Een positieve helling betekent dat de rechte stijgt wanneer we
      van links naar rechts gaan.
    </p>

    <p>
      Een negatieve helling betekent dat de rechte daalt.
    </p>

    <p>
      Hoe groter de absolute waarde van de helling, hoe sterker de rechte
      stijgt of daalt.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De helling meet hoeveel <strong>y</strong> verandert wanneer
        <strong>x</strong> met één eenheid verandert.
      </p>
      <p class="formula">m = \\frac{\\Delta y}{\\Delta x}</p>
    </div>


    <h3>Een helling berekenen</h3>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">A = (1, 2)</p>

    <p class="formula">B = (5, 5)</p>

    <p>
      Dan:
    </p>

    <p class="formula">\\Delta y = 5 - 2 = 3</p>

    <p class="formula">\\Delta x = 5 - 1 = 4</p>

    <p>
      De helling is:
    </p>

    <p class="formula">m = \\frac{3}{4}</p>

    <p>
      Dat betekent dat y gemiddeld 3/4 eenheid stijgt wanneer x
      één eenheid toeneemt.
    </p>


    <h3>Horizontale en verticale rechten</h3>

    <p>
      Bij een horizontale rechte verandert y niet:
    </p>

    <p class="formula">\\Delta y = 0</p>

    <p>
      Daarom:
    </p>

    <p class="formula">m = 0</p>

    <p>
      Een horizontale rechte heeft de vorm:
    </p>

    <p class="formula">y = b</p>

    <p>
      Bij een verticale rechte verandert x niet:
    </p>

    <p class="formula">\\Delta x = 0</p>

    <p>
      Delen door nul is niet gedefinieerd. Een verticale rechte heeft
      daarom geen eindige helling.
    </p>

    <p>
      Haar vergelijking heeft de vorm:
    </p>

    <p class="formula">x = a</p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        De formule
        <span class="formula-inline">m = \\frac{\\Delta y}{\\Delta x}</span>
        werkt alleen wanneer <span class="formula-inline">\\Delta x \\neq 0</span>.
      </p>
      <p>
        Een verticale rechte heeft daarom geen gedefinieerde eindige helling.
      </p>
    </div>


    <h3>De vergelijking van een rechte</h3>

    <p>
      Een rechte met helling m kan worden geschreven als:
    </p>

    <p class="formula">y = mx + b</p>

    <p>
      Hierin:
    </p>

    <ul>
      <li><strong>m</strong> is de helling;</li>
      <li><strong>b</strong> is de y-coördinaat waar de rechte de y-as snijdt.</li>
    </ul>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">y = 2x + 1</p>

    <div class="theory-image">
      <img
        src="assets/rechte-2x-plus-1.svg"
        alt="De rechte y = 2x + 1 met helling 2 en y-snĳpunt (0, 1)."
      >
    </div>

    <p>
      De helling is 2 en de rechte snijdt de y-as in:
    </p>

    <p class="formula">(0, 1)</p>

    <p>
      Wanneer x met 1 toeneemt, neemt y met 2 toe.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        In <span class="formula-inline">y = mx + b</span> bepaalt
        <strong>m</strong> de richting van de rechte.
      </p>
      <p>
        <strong>b</strong> bepaalt waar de rechte de y-as snijdt.
      </p>
    </div>


    <h3>Een rechte bepalen uit een punt en een helling</h3>

    <p>
      Stel dat de helling bekend is:
    </p>

    <p class="formula">m = 3</p>

    <p>
      en dat de rechte door het punt gaat:
    </p>

    <p class="formula">A = (2, 5)</p>

    <p>
      We beginnen met:
    </p>

    <p class="formula">y = 3x + b</p>

    <p>
      Omdat het punt (2, 5) op de rechte ligt, moeten de coördinaten
      aan de vergelijking voldoen:
    </p>

    <p class="formula">5 = 3 \\cdot 2 + b</p>

    <p class="formula">5 = 6 + b</p>

    <p class="formula">b = -1</p>

    <p>
      De rechte is dus:
    </p>

    <p class="formula">y = 3x - 1</p>

    <p>
      We hebben hier een meetkundige voorwaarde — een punt ligt op een
      rechte — vertaald naar een algebraïsche vergelijking.
    </p>


    <h3>De punt-hellingvorm</h3>

    <p>
      Dezelfde redenering kunnen we rechtstreeks schrijven als:
    </p>

    <p class="formula">y - y_{1} = m(x - x_{1})</p>

    <p>
      Dit heet de <strong>punt-hellingvorm</strong>.
      Ze is handig wanneer we één punt en de helling kennen.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">A = (2, 5)</p>

    <p class="formula">m = 3</p>

    <p>
      krijgen we:
    </p>

    <p class="formula">y - 5 = 3(x - 2)</p>

    <p>
      Uitwerken geeft:
    </p>

    <p class="formula">y - 5 = 3x - 6</p>

    <p class="formula">y = 3x - 1</p>

    <p>
      We krijgen dus dezelfde rechte.
    </p>


    <h3>Parallelle en loodrechte rechten</h3>

    <p>
      Twee verschillende rechten zijn <strong>parallel</strong> wanneer
      ze dezelfde richting hebben en elkaar niet snijden.
    </p>

    <p>
      In een coördinatenstelsel betekent dit dat hun hellingen gelijk zijn:
    </p>

    <p class="formula">m_{1} = m_{2}</p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">y = 2x + 1</p>

    <p class="formula">y = 2x - 5</p>

    <p>
      Beide rechten hebben helling 2 en zijn dus parallel.
      Hun y-snĳpunten verschillen, dus het zijn verschillende rechten.
    </p>

    <div class="theory-image">
      <img
        src="assets/evenwijdig-dwarsliggende.svg"
        alt="Twee evenwijdige rechten met dezelfde helling en een derde rechte die beide snijdt."
      >
    </div>

    <p>
      Twee rechten staan <strong>loodrecht</strong> op elkaar wanneer ze
      een rechte hoek vormen.
    </p>

    <p>
      Voor twee rechten met eindige hellingen geldt:
    </p>

    <p class="formula">m_{1} \\cdot m_{2} = -1</p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">m_{1} = 2</p>

    <p class="formula">m_{2} = -\\frac{1}{2}</p>

    <p>
      Want:
    </p>

    <p class="formula">2 \\cdot \\left(-\\frac{1}{2}\\right) = -1</p>

    <p>
      Een horizontale en een verticale rechte vormen het bijzondere geval:
      hun hellingen zijn respectievelijk 0 en niet gedefinieerd.
    </p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        De regel
        <span class="formula-inline">m_{1} \\cdot m_{2} = -1</span>
        geldt alleen voor twee rechten waarvan beide hellingen eindig
        en gedefinieerd zijn.
      </p>
    </div>


    <h3>Het snijpunt van twee rechten</h3>

    <p>
      Wanneer twee rechten elkaar snijden, hebben ze in het snijpunt
      dezelfde x- én y-coördinaat.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">y = 2x + 1</p>

    <p class="formula">y = -x + 7</p>

    <p>
      In het snijpunt moeten de rechterleden dus gelijk zijn:
    </p>

    <p class="formula">2x + 1 = -x + 7</p>

    <p>
      We lossen de vergelijking op:
    </p>

    <p class="formula">3x = 6</p>

    <p class="formula">x = 2</p>

    <p>
      Daarna vullen we x = 2 in:
    </p>

    <p class="formula">y = 2 \\cdot 2 + 1 = 5</p>

    <p>
      Het snijpunt is:
    </p>

    <p class="formula">(2, 5)</p>

    <p>
      Hetzelfde idee werkt voor een rechte en een verticale lijn.
      Neem bijvoorbeeld:
    </p>

    <p class="formula">y = 3x - 2</p>

    <p class="formula">x = 4</p>

    <p>
      Omdat in het snijpunt x = 4 geldt:
    </p>

    <p class="formula">y = 3 \\cdot 4 - 2 = 10</p>

    <p>
      Het snijpunt is:
    </p>

    <p class="formula">(4, 10)</p>

    <p>
      Parallelle verschillende rechten hebben geen snijpunt.
      Als twee vergelijkingen dezelfde rechte beschrijven, hebben ze
      oneindig veel gemeenschappelijke punten.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een snijpunt is een punt dat aan beide vergelijkingen tegelijk
        voldoet.
      </p>
      <p>
        Daarom kunnen we een geometrisch snijpunt vinden door een
        algebraïsche vergelijking op te lossen.
      </p>
    </div>


    <h3>Een rechte bepalen uit twee punten</h3>

    <p>
      Twee verschillende punten bepalen samen de richting van een rechte.
      We kunnen dus eerst de helling berekenen.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">A = (1, 3)</p>

    <p class="formula">B = (4, 9)</p>

    <p>
      Eerst:
    </p>

    <p class="formula">m = \\frac{9 - 3}{4 - 1}</p>

    <p class="formula">m = \\frac{6}{3} = 2</p>

    <p>
      Daarna gebruiken we bijvoorbeeld punt A in de punt-hellingvorm:
    </p>

    <p class="formula">y - 3 = 2(x - 1)</p>

    <p>
      Uitwerken geeft:
    </p>

    <p class="formula">y = 2x + 1</p>

    <p>
      De twee punten bepalen dus één rechte.
    </p>


    <h3>Van geometrie naar algebra en terug</h3>

    <p>
      We kunnen nu in beide richtingen werken.
    </p>

    <p>
      Vanuit een meetkundige situatie kunnen we een vergelijking maken:
    </p>

    <p class="formula">geometrie \\rightarrow coördinaten \\rightarrow vergelijking</p>

    <p>
      En vanuit een vergelijking kunnen we een geometrische betekenis
      afleiden:
    </p>

    <p class="formula">vergelijking \\rightarrow coördinaten \\rightarrow geometrie</p>

    <p>
      De analytische meetkunde vormt daardoor een brug tussen
      <strong>zien</strong> en <strong>rekenen</strong>.
    </p>

    <div class="theory-image">
      <img
        src="assets/pythagoras-345.svg"
        alt="Een rechthoekige 3-4-5-driehoek die laat zien hoe horizontale en verticale verschillen samen een afstand vormen."
      >
    </div>

    <p>
      Ook de afstand tussen twee punten laat deze verbinding zien:
      de horizontale en verticale verschillen vormen een rechthoekige
      driehoek en Pythagoras levert de afstand.
    </p>

    <p class="formula">d^{2} = (x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}</p>

    <p>
      De analytische meetkunde bouwt dus voort op ideeën die we al kennen.
      We plaatsen de geometrie in een getallensysteem en kunnen daardoor
      rekenen met punten, afstanden, richtingen en snijpunten.
    </p>


    <h3>Een vaste werkwijze</h3>

    <p>
      Bij een probleem in het coördinatenvlak kun je deze werkwijze gebruiken:
    </p>

    <ol>
      <li>teken of herken het coördinatenstelsel;</li>
      <li>noteer de bekende punten en hun coördinaten;</li>
      <li>bepaal welke grootheid gevraagd wordt;</li>
      <li>vertaal de meetkundige situatie naar algebra;</li>
      <li>gebruik de passende formule of vergelijking;</li>
      <li>bereken de onbekende;</li>
      <li>controleer of het antwoord geometrisch logisch is.</li>
    </ol>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Denk bij analytische meetkunde steeds in twee stappen:
      </p>
      <ol>
        <li>Wat zie ik geometrisch?</li>
        <li>Welke getallen, formule of vergelijking beschrijven dat?</li>
      </ol>
      <p>
        Daarna kun je het algebraïsche probleem oplossen en de uitkomst
        opnieuw geometrisch interpreteren.
      </p>
    </div>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      We begonnen met een eenvoudige vraag:
      hoe kunnen we de positie van een punt exact beschrijven?
    </p>

    <p>
      Met twee getallen kregen we een coördinatenstelsel. Daarna konden we
      met die getallen:
    </p>

    <ul>
      <li>punten beschrijven;</li>
      <li>afstanden berekenen;</li>
      <li>het midden van een lijnstuk bepalen;</li>
      <li>richtingen en hellingen bepalen;</li>
      <li>rechten beschrijven;</li>
      <li>parallelle en loodrechte rechten herkennen;</li>
      <li>snijpunten berekenen.</li>
    </ul>

    <p>
      Daarmee hebben we een fundamentele stap gezet:
      <strong>meetkunde kan worden vertaald naar algebra.</strong>
    </p>

    <p>
      Een punt is een paar getallen.
      Een rechte is een vergelijking.
      Een afstand is een berekening.
      Een snijpunt wordt een oplossing van een vergelijking.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Analytische meetkunde verbindt twee manieren van denken:
        <strong>zien en rekenen</strong>.
      </p>
      <p>
        Wat in de meetkunde een punt, afstand, richting of snijpunt is,
        kunnen we in de algebra voorstellen met getallen en vergelijkingen.
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

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Welke ideale vormen gebruiken we in de meetkunde?</li>
      <li>Hoe werken hoeken, rechte lijnen en parallelle lijnen samen?</li>
      <li>Welke eigenschappen hebben driehoeken?</li>
      <li>Hoe werkt de stelling van Pythagoras?</li>
      <li>Hoe berekenen we omtrek, oppervlakte en volume?</li>
      <li>Hoe vertalen we een meetkundig probleem naar algebra?</li>
      <li>Waarom kunnen we in de meetkunde eigenschappen afleiden in plaats van alleen te meten?</li>
    </ul>

    <p>
      In les 2.8 gebruikten we coördinaten om meetkundige problemen
      met getallen en vergelijkingen te beschrijven.
      Nu kijken we meer rechtstreeks naar de meetkunde:
      <strong>vormen, hoeken, lengtes en oppervlakten</strong>.
    </p>

    <p>
      Deze aanpak noemen we <strong>Euclidische meetkunde</strong>.
      We vertrekken van eenvoudige begrippen en eigenschappen
      en leiden daaruit nieuwe resultaten af.
    </p>


    <h3>Van werkelijkheid naar ideale vormen</h3>

    <p>
      In de werkelijkheid bestaan geen perfecte wiskundige punten,
      rechten of cirkels. Een potloodpunt heeft bijvoorbeeld altijd
      een bepaalde grootte.
    </p>

    <p>
      In de meetkunde werken we daarom met <strong>ideale objecten</strong>.
      Een punt heeft geen afmeting. Een rechte heeft geen dikte en loopt
      onbeperkt door. Een vlak heeft lengte en breedte, maar geen dikte.
    </p>

    <p>
      Deze objecten zijn modellen. We laten eigenschappen van echte
      objecten weg die voor ons probleem niet belangrijk zijn.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Meetkunde abstraheert vorm. We vervangen echte objecten door
        ideale vormen waarvan we de eigenschappen precies kunnen beschrijven.
      </p>
    </div>


    <h3>Lijnstukken, rechten en hoeken</h3>

    <p>
      Een <strong>lijnstuk</strong> heeft twee eindpunten.
      Een <strong>rechte</strong> loopt onbeperkt door in beide richtingen.
      Een <strong>straal</strong> heeft één beginpunt en loopt onbeperkt
      door in één richting.
    </p>

    <p>
      Wanneer twee stralen vanuit hetzelfde punt vertrekken, ontstaat
      een <strong>hoek</strong>.
    </p>

    <p>
      Een volledige draai is 360°. Een gestrekte hoek is 180° en
      een rechte hoek is 90°.
    </p>

    <div class="theory-image">
      <img
        src="assets/hoektypen.svg"
        alt="Vier hoeken: scherp, recht, stomp en gestrekt."
      >
    </div>

    <p>
      Een hoek kleiner dan 90° noemen we <strong>scherp</strong>.
      Een hoek tussen 90° en 180° noemen we <strong>stomp</strong>.
    </p>


    <h3>Hoeken gebruiken als regels</h3>

    <p>
      Wanneer verschillende hoeken samen een gestrekte hoek vormen,
      is hun som 180°.
    </p>

    <p class="formula">α + β = 180°</p>

    <p>
      Als bijvoorbeeld:
    </p>

    <p class="formula">α = 65°</p>

    <p>
      dan:
    </p>

    <p class="formula">β = 180° - 65° = 115°</p>

    <p>
      Wanneer twee rechten elkaar snijden, ontstaan vier hoeken.
      De tegenover elkaar liggende hoeken noemen we
      <strong>overstaande hoeken</strong>.
    </p>

    <p class="formula">α = γ</p>

    <p class="formula">β = δ</p>

    <p>
      Overstaande hoeken zijn dus even groot.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een meetkundige eigenschap kan rechtstreeks een vergelijking
        opleveren. De vorm van de figuur bepaalt welke vergelijkingen
        geldig zijn.
      </p>
    </div>


    <h3>Parallelle en loodrechte lijnen</h3>

    <p>
      Twee rechten zijn <strong>parallel</strong> wanneer ze in hetzelfde
      vlak liggen en elkaar niet snijden.
    </p>

    <p>
      Twee rechten zijn <strong>loodrecht</strong> wanneer ze elkaar onder
      een hoek van 90° snijden.
    </p>

    <p class="formula">α = 90°</p>

    <p>
      In les 2.8 kwamen loodrechte lijnen al voor:
      de x-as en y-as staan loodrecht op elkaar.
    </p>

    <p>
      Wanneer een derde rechte twee parallelle rechten snijdt,
      ontstaan verschillende hoeken met vaste relaties.
      Zo zijn overeenkomstige hoeken gelijk en zijn verwisselende
      binnenhoeken gelijk.
    </p>

    <p>
      Daardoor kunnen we een onbekende hoek bepalen zonder die
      rechtstreeks te meten.
    </p>


    <h3>Driehoeken</h3>

    <p>
      Een driehoek is een veelhoek met drie zijden en drie hoeken.
      De som van de drie binnenhoeken is altijd 180°.
    </p>

    <p class="formula">α + β + γ = 180°</p>

    <p>
      Als twee hoeken bekend zijn, kunnen we de derde berekenen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">α = 50°</p>

    <p class="formula">β = 60°</p>

    <p class="formula">γ = 180° - 50° - 60° = 70°</p>

    <p>
      Sommige driehoeken hebben extra eigenschappen.
      In een <strong>gelijkbenige driehoek</strong> zijn twee zijden
      even lang en zijn de tegenoverliggende hoeken gelijk.
    </p>

    <p>
      In een <strong>gelijkzijdige driehoek</strong> zijn alle zijden
      even lang. Daardoor zijn alle drie de hoeken gelijk.
    </p>

    <p class="formula">3α = 180°</p>

    <p class="formula">α = 60°</p>


    <h3>Buitenhoeken van een driehoek</h3>

    <p>
      Verlengen we één zijde van een driehoek, dan ontstaat een
      <strong>buitenhoek</strong>.
    </p>

    <p>
      De binnenhoek en de aangrenzende buitenhoek vormen samen
      een gestrekte hoek.
    </p>

    <p class="formula">binnenhoek + buitenhoek = 180°</p>

    <p>
      Hieruit volgt een belangrijke relatie:
      een buitenhoek is gelijk aan de som van de twee
      tegenoverliggende binnenhoeken.
    </p>

    <p class="formula">γ = α + β</p>

    <p>
      Ook hier zien we hetzelfde patroon:
      de structuur van de figuur levert een wiskundige relatie.
    </p>


    <h3>Rechthoekige driehoeken</h3>

    <p>
      Een <strong>rechthoekige driehoek</strong> heeft één hoek van 90°.
    </p>

    <p>
      De zijde tegenover de rechte hoek noemen we de
      <strong>schuine zijde</strong> of hypotenusa.
      De andere twee zijden zijn de rechthoekszijden.
    </p>

    <p>
      Rechthoekige driehoeken zijn bijzonder belangrijk omdat hun zijden
      met elkaar verbonden zijn door de <strong>stelling van Pythagoras</strong>.
    </p>


    <h3>De stelling van Pythagoras</h3>

    <div class="theory-image">
      <img
        src="assets/pythagoras-345.svg"
        alt="Een rechthoekige 3-4-5-driehoek die de stelling van Pythagoras zichtbaar maakt."
      >
    </div>

    <p>
      Voor een rechthoekige driehoek met rechthoekszijden
      <span class="formula-inline">a</span> en
      <span class="formula-inline">b</span> en hypotenusa
      <span class="formula-inline">c</span> geldt:
    </p>

    <p class="formula">a^{2} + b^{2} = c^{2}</p>

    <p>
      Het kwadraat van de langste zijde is dus gelijk aan de som
      van de kwadraten van de twee andere zijden.
    </p>

    <p>
      Dit geldt voor <strong>elke</strong> rechthoekige driehoek,
      ongeacht de grootte ervan.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Pythagoras is geen truc voor één specifieke driehoek.
        Het is een algemene meetkundige eigenschap van alle
        rechthoekige driehoeken.
      </p>
    </div>


    <h3>Pythagoras als oppervlakte-relatie</h3>

    <p>
      De vergelijking van Pythagoras kan ook meetkundig worden geïnterpreteerd.
      Op iedere zijde van de driehoek kunnen we een vierkant tekenen.
    </p>

    <p>
      De oppervlakten van die vierkanten zijn:
    </p>

    <p class="formula">a^{2}</p>

    <p class="formula">b^{2}</p>

    <p class="formula">c^{2}</p>

    <p>
      De stelling zegt dan:
    </p>

    <p class="formula">a^{2} + b^{2} = c^{2}</p>

    <p>
      Een algebraïsche vergelijking beschrijft hier dus een
      geometrische relatie tussen drie oppervlakten.
    </p>

    <p>
      Dit is een belangrijk idee in de wiskunde:
      dezelfde structuur kan tegelijk geometrisch en algebraïsch
      worden beschreven.
    </p>


    <h3>Pythagoras gebruiken</h3>

    <p>
      Stel dat de rechthoekszijden 3 en 4 zijn.
      We zoeken de hypotenusa.
    </p>

    <p class="formula">a = 3</p>

    <p class="formula">b = 4</p>

    <p class="formula">3^{2} + 4^{2} = c^{2}</p>

    <p class="formula">9 + 16 = c^{2}</p>

    <p class="formula">25 = c^{2}</p>

    <p>
      Omdat een lengte niet negatief is:
    </p>

    <p class="formula">c = \\sqrt{25} = 5</p>

    <p>
      We vinden de bekende 3-4-5-driehoek.
    </p>

    <p>
      We kunnen de formule ook gebruiken wanneer een rechthoekszijde
      onbekend is:
    </p>

    <p class="formula">a^{2} + b^{2} = c^{2}</p>

    <p class="formula">b^{2} = c^{2} - a^{2}</p>

    <p class="formula">b = \\sqrt{c^{2} - a^{2}}</p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        De wortel levert algebraïsch twee mogelijke waarden op,
        maar een lengte is niet negatief. Daarom nemen we hier
        de positieve wortel.
      </p>
    </div>


    <h3>Omtrek en oppervlakte</h3>

    <p>
      De <strong>omtrek</strong> is de totale lengte van de buitenrand
      van een figuur.
    </p>

    <p>
      Voor een rechthoek met lengte <span class="formula-inline">l</span>
      en breedte <span class="formula-inline">b</span>:
    </p>

    <p class="formula">O = 2l + 2b</p>

    <p>
      Voor een vierkant met zijde <span class="formula-inline">a</span>:
    </p>

    <p class="formula">O = 4a</p>

    <p>
      Voor een cirkel met straal <span class="formula-inline">r</span>:
    </p>

    <p class="formula">O = 2\\pi r</p>

    <p>
      De <strong>oppervlakte</strong> geeft aan hoeveel vlak een figuur inneemt.
    </p>

    <p>
      Voor een rechthoek:
    </p>

    <p class="formula">A = l \\cdot b</p>

    <p>
      Voor een vierkant:
    </p>

    <p class="formula">A = a^{2}</p>

    <p>
      Voor een driehoek:
    </p>

    <p class="formula">A = \\frac{1}{2} \\cdot b \\cdot h</p>

    <p>
      Hierbij staat <span class="formula-inline">h</span> loodrecht
      op de gekozen basis.
    </p>

    <p>
      Voor een cirkel:
    </p>

    <p class="formula">A = \\pi r^{2}</p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        Omtrek is een lengte. Oppervlakte is een gebied.
        Daarom verschillen ook hun eenheden:
        bijvoorbeeld m tegenover m².
      </p>
    </div>


    <h3>Waarom oppervlakte-eenheden kwadratisch zijn</h3>

    <p>
      Stel dat een vierkant een zijde van 3 meter heeft.
    </p>

    <p class="formula">A = 3^{2} = 9\\,m^{2}</p>

    <p>
      De eenheid wordt kwadratisch omdat we een lengte met een lengte
      vermenigvuldigen:
    </p>

    <p class="formula">m \\cdot m = m^{2}</p>

    <p>
      Dit wordt belangrijk wanneer we later kijken naar
      <strong>schaalfactoren</strong>. Als een lengte verandert,
      verandert de oppervlakte niet op dezelfde manier.
    </p>


    <h3>Inhoud en volume</h3>

    <p>
      Bij een ruimtelijke figuur komt een derde dimensie bij:
      bijvoorbeeld hoogte, diepte of dikte.
    </p>

    <p>
      De <strong>inhoud</strong> of het <strong>volume</strong>
      geeft aan hoeveel ruimte een object inneemt.
    </p>

    <p>
      Voor een balk met lengte <span class="formula-inline">l</span>,
      breedte <span class="formula-inline">b</span> en hoogte
      <span class="formula-inline">h</span>:
    </p>

    <p class="formula">V = l \\cdot b \\cdot h</p>

    <p>
      Voor een cilinder:
    </p>

    <p class="formula">V = \\pi r^{2}h</p>

    <p>
      Een volume wordt uitgedrukt in kubieke eenheden, bijvoorbeeld
      m³ of cm³.
    </p>

    <p>
      Er bestaat ook een directe relatie tussen liter en kubieke
      decimeter:
    </p>

    <p class="formula">1\\,L = 1\\,dm^{3}</p>

    <p>
      De eenheid is daardoor een nuttige controle op een berekening.
      Een oppervlakte hoort bijvoorbeeld niet te eindigen in meter,
      maar in vierkante meter.
    </p>


    <h3>Van geometrie naar algebra</h3>

    <p>
      Meetkunde en algebra beschrijven vaak dezelfde situatie
      vanuit een andere invalshoek.
    </p>

    <p>
      Stel dat een rechthoek een oppervlakte van 40 cm² heeft
      en een lengte van 8 cm.
    </p>

    <p>
      De geometrische relatie is:
    </p>

    <p class="formula">A = l \\cdot b</p>

    <p>
      We vullen de bekende waarden in:
    </p>

    <p class="formula">40 = 8b</p>

    <p>
      We hebben nu een algebraïsche vergelijking.
    </p>

    <p class="formula">b = 5\\,cm</p>

    <p>
      Een meetkundig probleem is dus veranderd in een
      algebraïsch probleem.
    </p>

    <p>
      Hetzelfde principe kwamen we eerder al tegen bij vergelijkingen
      en formules.
    </p>


    <h3>Een volledige toepassing</h3>

    <p>
      Een ladder van 5 meter lang staat tegen een verticale muur.
      De voet van de ladder staat 3 meter van de muur.
      Hoe hoog raakt de ladder?
    </p>

    <p>
      De muur, de grond en de ladder vormen samen een
      rechthoekige driehoek.
    </p>

    <p>
      De ladder is de hypotenusa:
    </p>

    <p class="formula">c = 5</p>

    <p>
      De afstand tot de muur is:
    </p>

    <p class="formula">a = 3</p>

    <p>
      Noem de hoogte <span class="formula-inline">h</span>.
      Dan:
    </p>

    <p class="formula">3^{2} + h^{2} = 5^{2}</p>

    <p class="formula">9 + h^{2} = 25</p>

    <p class="formula">h^{2} = 16</p>

    <p class="formula">h = 4</p>

    <p>
      De ladder raakt dus een punt dat 4 meter boven de grond ligt.
    </p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        werkelijkheid → figuur → bekende gegevens →
        meetkundige relatie → vergelijking → oplossing →
        betekenis in de werkelijkheid.
      </p>
    </div>


    <h3>Meten of afleiden?</h3>

    <p>
      Een belangrijk verschil tussen wiskunde en een meting in de
      werkelijkheid is nauwkeurigheid.
    </p>

    <p>
      Wanneer je een hoek met een geodriehoek meet, krijg je bijvoorbeeld
      ongeveer 60°.
    </p>

    <p>
      In de wiskunde kunnen we soms exact aantonen dat een hoek 60°
      moet zijn.
    </p>

    <p>
      Bij een gelijkzijdige driehoek zijn de drie hoeken gelijk en
      is hun som 180°.
    </p>

    <p class="formula">3α = 180°</p>

    <p class="formula">α = 60°</p>

    <p>
      We hoefden de hoek dus niet te meten.
      De waarde volgt uit de eigenschappen van de figuur.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Meten vertelt ons wat we in een concrete situatie waarnemen.
        Wiskundig redeneren vertelt ons wat noodzakelijk volgt
        uit de eigenschappen van een figuur.
      </p>
    </div>


    <h3>Van eigenschappen naar stellingen</h3>

    <p>
      In de meetkunde bouwen we redeneringen op elkaar voort.
      We vertrekken van definities en basisregels en leiden daaruit
      nieuwe eigenschappen af.
    </p>

    <p>
      Een resultaat dat wiskundig is aangetoond noemen we een
      <strong>stelling</strong>.
    </p>

    <p>
      De stelling van Pythagoras is een beroemd voorbeeld.
      Ze vertelt niet alleen wat er in één specifieke driehoek gebeurt,
      maar wat voor alle rechthoekige driehoeken noodzakelijk geldt.
    </p>

    <p>
      Het doel van meetkunde is daarom niet alleen:
      <strong>“Hoe groot is deze hoek of deze zijde?”</strong>
    </p>

    <p>
      Een diepere vraag is:
      <strong>“Welke eigenschappen volgen noodzakelijk uit de structuur
      van de figuur?”</strong>
    </p>


    <h3>Een vaste werkwijze</h3>

    <p>
      Bij een meetkundig probleem kun je de volgende werkwijze gebruiken:
    </p>

    <ol>
      <li>Bepaal welke figuren en vormen aanwezig zijn.</li>
      <li>Noteer de bekende lengtes en hoeken.</li>
      <li>Zoek naar bijzondere eigenschappen.</li>
      <li>Maak indien nodig een hulplijn of rechthoekige driehoek.</li>
      <li>Kies de meetkundige relatie die bij het probleem past.</li>
      <li>Vertaal de relatie eventueel naar een vergelijking.</li>
      <li>Los de vergelijking op.</li>
      <li>Controleer of het antwoord geometrisch en qua eenheden klopt.</li>
    </ol>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Probeer niet meteen een formule te zoeken.
        Begin met de structuur van de figuur.
        De juiste formule volgt vaak uit de eigenschappen
        die je in die structuur herkent.
      </p>
    </div>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      We begonnen met ideale vormen, lijnstukken, rechten en hoeken.
      Daarna onderzochten we relaties tussen hoeken en lijnen,
      eigenschappen van driehoeken en de stelling van Pythagoras.
    </p>

    <p>
      Vervolgens leerden we hoe we omtrek, oppervlakte en volume
      berekenen en hoe eenheden ons helpen om berekeningen te controleren.
    </p>

    <p>
      Ten slotte zagen we dat meetkunde en algebra twee manieren zijn
      om dezelfde structuur te beschrijven.
    </p>

    <ul>
      <li>hoeken hebben vaste relaties;</li>
      <li>parallelle en loodrechte lijnen hebben specifieke eigenschappen;</li>
      <li>driehoeken hebben vaste hoekrelaties;</li>
      <li>Pythagoras verbindt de zijden van een rechthoekige driehoek;</li>
      <li>omtrek, oppervlakte en volume beschrijven verschillende grootheden;</li>
      <li>een meetkundig probleem kan worden vertaald naar algebra;</li>
      <li>wiskundige eigenschappen kunnen worden afgeleid en bewezen.</li>
    </ul>

    <p>
      De volgende stap is <strong>gelijkvormigheid en schaal</strong>.
      Daar onderzoeken we wat er gebeurt wanneer een figuur groter
      of kleiner wordt terwijl zijn vorm behouden blijft.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Meetkunde gaat niet alleen over het meten van vormen.
        Het gaat vooral over het ontdekken van
        <strong>noodzakelijke relaties</strong> tussen hun onderdelen.
      </p>
      <p>
        Een hoek, lengte, oppervlakte of volume staat niet op zichzelf:
        de structuur van de figuur bepaalt hoe deze grootheden
        met elkaar verbonden zijn.
      </p>
    </div>
  `
},
  {
  id: "2.10",
  title: "Gelijkvormigheid & schaal",
  goal: "Wanneer hebben figuren dezelfde structuur?",
  theory: /* html */`
    <h2>Gelijkvormigheid & schaal</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wanneer hebben twee figuren dezelfde vorm?</li>
      <li>Wat zijn overeenkomstige hoeken en zijden?</li>
      <li>Hoe bepalen we de schaalfactor?</li>
      <li>Hoe berekenen we een onbekende lengte met een verhouding?</li>
      <li>Waarom verandert een oppervlakte met het kwadraat van de schaalfactor?</li>
      <li>Waarom verandert een volume met de derde macht van de schaalfactor?</li>
      <li>Hoe werken schaaltekeningen, kaarten en plattegronden?</li>
      <li>Waarom vormt gelijkvormigheid een brug naar trigonometrie?</li>
    </ul>

    <p>
      In les 2.9 onderzochten we eigenschappen van figuren:
      hoeken, zijden, afstanden, oppervlakten en de stelling van Pythagoras.
      Nu bekijken we wat er gebeurt wanneer een figuur groter of kleiner wordt
      zonder dat zijn vorm verandert.
    </p>

    <p>
      Een foto kan bijvoorbeeld worden vergroot zonder dat de verhoudingen
      binnen de afbeelding veranderen. Een kleine kaart kan hetzelfde gebied
      voorstellen als een grote kaart. De vorm blijft behouden, terwijl
      de afmetingen veranderen.
    </p>

    <p>
      Dit idee noemen we <strong>gelijkvormigheid</strong>.
    </p>


    <h3>Dezelfde vorm, andere grootte</h3>

    <p>
      Stel dat we een rechthoek hebben van 3 cm bij 5 cm.
      We maken daarvan een grotere rechthoek van 6 cm bij 10 cm.
    </p>

    <p class="formula">3 \\rightarrow 6</p>

    <p class="formula">5 \\rightarrow 10</p>

    <p>
      Beide afmetingen zijn verdubbeld.
      De nieuwe rechthoek is dus groter, maar heeft dezelfde vorm.
    </p>

    <p>
      We kunnen de overeenkomstige zijden vergelijken:
    </p>

    <p class="formula">\\frac{6}{3} = 2</p>

    <p class="formula">\\frac{10}{5} = 2</p>

    <p>
      Dezelfde factor komt bij beide lengtes terug.
      Dat is het fundamentele idee achter gelijkvormigheid.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Bij gelijkvormige figuren blijft de <strong>vorm</strong> hetzelfde,
        terwijl de <strong>grootte</strong> mag veranderen.
      </p>
      <p>
        De verhouding tussen overeenkomstige lengtes blijft constant.
      </p>
    </div>


    <h3>Wat betekent gelijkvormig?</h3>

    <p>
      Twee figuren zijn <strong>gelijkvormig</strong> wanneer ze dezelfde vorm hebben.
      Dat betekent dat overeenkomstige hoeken even groot zijn en dat
      overeenkomstige zijden steeds dezelfde verhouding hebben.
    </p>

    <p>
      De figuren hoeven dus niet even groot te zijn.
    </p>

    <p>
      Een vierkant van 2 cm bij 2 cm en een vierkant van 5 cm bij 5 cm
      zijn bijvoorbeeld gelijkvormig.
      De grootte verschilt, maar de vorm blijft dezelfde.
    </p>

    <p>
      Ook rechthoeken kunnen gelijkvormig zijn.
      Twee rechthoeken met verschillende lengte-breedteverhoudingen
      zijn echter niet noodzakelijk gelijkvormig.
    </p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        <strong>Gelijkvormig</strong> betekent niet
        <strong>gelijk groot</strong>.
      </p>
      <p>
        Het gaat om dezelfde vorm en dezelfde verhoudingen.
      </p>
    </div>


    <h3>Overeenkomstige hoeken en zijden</h3>

    <p>
      Om twee figuren te vergelijken, moeten we weten welke onderdelen
      bij elkaar horen. Die noemen we <strong>overeenkomstige onderdelen</strong>.
    </p>

    <p>
      Bij gelijkvormige figuren zijn overeenkomstige hoeken gelijk.
    </p>

    <p>
      Stel dat een driehoek hoeken heeft van:
    </p>

    <p class="formula">40°, 60°, 80°</p>

    <p>
      Een tweede driehoek met dezelfde drie hoeken heeft dezelfde vorm.
    </p>

    <p class="formula">40° \\leftrightarrow 40°</p>

    <p class="formula">60° \\leftrightarrow 60°</p>

    <p class="formula">80° \\leftrightarrow 80°</p>

    <p>
      De overeenkomstige zijden hoeven niet even lang te zijn.
      Ze moeten wel volgens dezelfde verhouding veranderen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">3\\,cm,\\ 4\\,cm,\\ 5\\,cm</p>

    <p>
      tegenover:
    </p>

    <p class="formula">6\\,cm,\\ 8\\,cm,\\ 10\\,cm</p>

    <p>
      Dan:
    </p>

    <p class="formula">\\frac{6}{3} = \\frac{8}{4} = \\frac{10}{5} = 2</p>

    <p>
      Elke overeenkomstige zijde is dus twee keer zo lang.
    </p>


    <h3>De schaalfactor</h3>

    <p>
      De factor waarmee overeenkomstige lengtes veranderen noemen we
      de <strong>schaalfactor</strong>. We noteren die vaak met
      <span class="formula-inline">k</span>.
    </p>

    <p>
      In het algemeen:
    </p>

    <p class="formula">k = \\frac{nieuwe\\ lengte}{oorspronkelijke\\ lengte}</p>

    <p>
      Als een lengte van 4 cm verandert in 10 cm:
    </p>

    <p class="formula">k = \\frac{10}{4} = 2,5</p>

    <p>
      De nieuwe lengte is dus 2,5 keer de oorspronkelijke lengte.
    </p>

    <p>
      Voor een overeenkomstige lengte geldt:
    </p>

    <p class="formula">l' = k \\cdot l</p>

    <p>
      Hierbij is <span class="formula-inline">l</span> de oorspronkelijke
      lengte en <span class="formula-inline">l'</span> de nieuwe lengte.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De schaalfactor vertelt hoeveel een figuur op het niveau van
        <strong>lengtes</strong> wordt vergroot of verkleind.
      </p>
    </div>


    <h3>Een onbekende lengte berekenen</h3>

    <p>
      Zodra de schaalfactor bekend is, kunnen we alle overeenkomstige
      lengtes berekenen.
    </p>

    <p>
      Stel dat twee gelijkvormige driehoeken overeenkomstige zijden hebben:
    </p>

    <p class="formula">4\\,cm \\leftrightarrow 10\\,cm</p>

    <p>
      Een andere zijde van de kleine driehoek is 6 cm.
      Eerst bepalen we de schaalfactor:
    </p>

    <p class="formula">k = \\frac{10}{4} = 2,5</p>

    <p>
      Daarna berekenen we de overeenkomstige zijde:
    </p>

    <p class="formula">l' = 2,5 \\cdot 6 = 15\\,cm</p>

    <p>
      De onbekende zijde is dus 15 cm.
    </p>

    <p>
      Het belangrijkste deel van de oplossing is niet de vermenigvuldiging,
      maar het herkennen dat dezelfde schaalfactor voor overeenkomstige
      zijden geldt.
    </p>


    <h3>Verhouding, niet verschil</h3>

    <p>
      Gelijkvormigheid gaat over <strong>verhoudingen</strong>,
      niet over gelijke verschillen.
    </p>

    <p>
      Stel dat een zijde verandert van 4 cm naar 6 cm:
    </p>

    <p class="formula">6 - 4 = 2\\,cm</p>

    <p>
      Een andere zijde verandert van 10 cm naar 12 cm:
    </p>

    <p class="formula">12 - 10 = 2\\,cm</p>

    <p>
      De verschillen zijn hetzelfde, maar de verhoudingen niet:
    </p>

    <p class="formula">\\frac{6}{4} = 1,5</p>

    <p class="formula">\\frac{12}{10} = 1,2</p>

    <p>
      De twee lengtes zijn dus niet met dezelfde factor veranderd.
      Dit is geen gelijkvormige vergroting.
    </p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        Gelijkvormigheid herken je aan een <strong>constante verhouding</strong>,
        niet aan een gelijk verschil.
      </p>
    </div>


    <h3>Van klein naar groot en van groot naar klein</h3>

    <p>
      De schaalfactor hangt af van de richting waarin we vergelijken.
    </p>

    <p>
      Stel dat een model 18 cm lang is en het echte object
      een overeenkomstige lengte van 6 cm heeft.
    </p>

    <p>
      Van model naar werkelijkheid:
    </p>

    <p class="formula">k = \\frac{6}{18} = \\frac{1}{3}</p>

    <p>
      Van werkelijkheid naar model is de factor omgekeerd:
    </p>

    <p class="formula">k = \\frac{18}{6} = 3</p>

    <p>
      Beide beschrijvingen zijn correct, maar ze beantwoorden
      een andere vraag.
    </p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        Controleer altijd welke figuur de <strong>oorspronkelijke</strong>
        en welke de <strong>nieuwe</strong> figuur is.
      </p>
      <p>
        Van klein naar groot en van groot naar klein gebruiken
        tegengestelde schaalfactoren.
      </p>
    </div>


    <h3>Oppervlakte verandert met k²</h3>

    <p>
      Tot nu toe keken we naar lengtes.
      Maar een oppervlakte bestaat uit twee lengterichtingen.
    </p>

    <p>
      Stel dat elke lengte wordt verdubbeld:
    </p>

    <p class="formula">k = 2</p>

    <p>
      Een vierkant van 3 cm bij 3 cm heeft oppervlakte:
    </p>

    <p class="formula">A = 3 \\cdot 3 = 9\\,cm^{2}</p>

    <p>
      Na vergroting met factor 2 is het vierkant 6 cm bij 6 cm:
    </p>

    <p class="formula">A' = 6 \\cdot 6 = 36\\,cm^{2}</p>

    <p>
      De oppervlakte is dus vier keer zo groot:
    </p>

    <p class="formula">\\frac{36}{9} = 4 = 2^{2}</p>

    <p>
      Algemeen geldt:
    </p>

    <p class="formula">A' = k^{2}A</p>

    <p>
      Waarom? Omdat beide lengterichtingen met factor
      <span class="formula-inline">k</span> veranderen:
    </p>

    <p class="formula">A' = (k \\cdot l)(k \\cdot b)</p>

    <p class="formula">A' = k^{2}lb</p>

    <p class="formula">A' = k^{2}A</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een oppervlakte heeft twee lengterichtingen.
        Daarom verschijnt de schaalfactor twee keer:
        <strong>oppervlakte schaalt met k²</strong>.
      </p>
    </div>


    <h3>Volume verandert met k³</h3>

    <p>
      Bij een ruimtelijk object hebben we drie lengterichtingen:
      bijvoorbeeld lengte, breedte en hoogte.
    </p>

    <p>
      Neem een kubus met zijde 2 cm:
    </p>

    <p class="formula">V = 2 \\cdot 2 \\cdot 2 = 8\\,cm^{3}</p>

    <p>
      Vergroot de kubus met factor 3.
      Elke zijde wordt dan 6 cm:
    </p>

    <p class="formula">V' = 6 \\cdot 6 \\cdot 6 = 216\\,cm^{3}</p>

    <p>
      De volumeverhouding is:
    </p>

    <p class="formula">\\frac{216}{8} = 27 = 3^{3}</p>

    <p>
      Algemeen geldt:
    </p>

    <p class="formula">V' = k^{3}V</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een volume heeft drie lengterichtingen.
        Daarom verschijnt de schaalfactor drie keer:
        <strong>volume schaalt met k³</strong>.
      </p>
    </div>


    <h3>Schaaltekeningen en kaarten</h3>

    <p>
      Gelijkvormigheid wordt veel gebruikt om grote objecten
      op een kleiner formaat weer te geven.
    </p>

    <p>
      Bij een schaal van 1 : 100 betekent dit:
    </p>

    <p class="formula">\\frac{tekening}{werkelijkheid} = \\frac{1}{100}</p>

    <p>
      Eén centimeter op de tekening stelt dus 100 cm
      in werkelijkheid voor.
    </p>

    <p>
      Een muur die op de tekening 4 cm lang is:
    </p>

    <p class="formula">4 \\cdot 100 = 400\\,cm</p>

    <p class="formula">400\\,cm = 4\\,m</p>

    <p>
      Dezelfde verhouding geldt voor elke overeenkomstige lengte.
    </p>

    <p>
      Bij een kaart met schaal 1 : 25 000 en een afstand
      van 3 cm op de kaart:
    </p>

    <p class="formula">3 \\cdot 25\\,000 = 75\\,000\\,cm</p>

    <p class="formula">75\\,000\\,cm = 750\\,m</p>

    <p class="formula">750\\,m = 0,75\\,km</p>

    <p>
      Zorg ervoor dat de eenheden eerst met elkaar overeenkomen.
    </p>


    <h3>Van werkelijkheid naar tekening</h3>

    <p>
      We kunnen ook vanuit een werkelijke lengte de lengte
      op een schaaltekening bepalen.
    </p>

    <p>
      Stel dat een gebouw 20 m lang is en we het tekenen
      op schaal 1 : 100.
    </p>

    <p>
      Eerst zetten we de lengte om naar centimeter:
    </p>

    <p class="formula">20\\,m = 2000\\,cm</p>

    <p>
      Daarna passen we de schaal toe:
    </p>

    <p class="formula">\\frac{2000}{100} = 20\\,cm</p>

    <p>
      Het gebouw wordt dus 20 cm lang op de tekening.
    </p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <ol>
        <li>Controleer de schaal.</li>
        <li>Zet de lengtes in dezelfde eenheid.</li>
        <li>Bepaal welke richting je rekent.</li>
        <li>Gebruik de juiste schaalfactor.</li>
        <li>Controleer of de grootte van het antwoord logisch is.</li>
      </ol>
    </div>


    <h3>Een volledige toepassing met oppervlakte</h3>

    <p>
      Een plattegrond van een tuin heeft schaal 1 : 200.
      Op de plattegrond is een rechthoekig terras 3 cm lang
      en 2 cm breed.
    </p>

    <p>
      Eerst bepalen we de werkelijke lengtes.
    </p>

    <p class="formula">3 \\cdot 200 = 600\\,cm = 6\\,m</p>

    <p class="formula">2 \\cdot 200 = 400\\,cm = 4\\,m</p>

    <p>
      De werkelijke oppervlakte is:
    </p>

    <p class="formula">A = 6 \\cdot 4 = 24\\,m^{2}</p>

    <p>
      We hadden ook rechtstreeks kunnen redeneren met de
      oppervlakteschaalfactor:
    </p>

    <p class="formula">k^{2} = 200^{2}</p>

    <p>
      Het is in de praktijk vaak overzichtelijker om eerst de lengtes
      om te rekenen en daarna de oppervlakte te berekenen.
    </p>


    <h3>Gelijkvormigheid en trigonometrie</h3>

    <p>
      Gelijkvormigheid heeft nog een belangrijke consequentie.
      Beschouw twee rechthoekige driehoeken met dezelfde scherpe hoek.
    </p>

    <p>
      De driehoeken kunnen verschillende afmetingen hebben,
      maar omdat ze dezelfde vorm hebben, blijven de verhoudingen
      van overeenkomstige zijden gelijk.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \\frac{overstaande\\ zijde}{schuine\\ zijde}
    </p>

    <p>
      heeft voor alle gelijkvormige driehoeken met dezelfde hoek
      dezelfde waarde.
    </p>

    <p>
      De verhouding hangt dus niet af van de grootte van de driehoek,
      maar van de <strong>hoek</strong>.
    </p>

    <p>
      Dat idee vormt de basis voor de goniometrische functies
      <strong>sinus, cosinus en tangens</strong>, die we later in
      les 2.14 verder ontwikkelen.
    </p>

    <div class="callout">
      <p><strong>Brug naar trigonometrie:</strong></p>
      <p>
        Gelijkvormigheid zorgt ervoor dat een verhouding van zijden
        constant blijft wanneer de hoek hetzelfde blijft.
      </p>
      <p>
        Daardoor kunnen we een vaste verhouding koppelen aan een hoek.
        Dat is het uitgangspunt van trigonometrie.
      </p>
    </div>


    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        <strong>Een verschil gebruiken in plaats van een verhouding:</strong>
        gelijkvormigheid draait om een constante verhouding.
      </li>
      <li>
        <strong>De schaalfactor in de verkeerde richting gebruiken:</strong>
        controleer altijd welke figuur oorspronkelijk en welke nieuw is.
      </li>
      <li>
        <strong>Lengtes met k² vermenigvuldigen:</strong>
        lengtes veranderen met k.
      </li>
      <li>
        <strong>Oppervlakten met k vermenigvuldigen:</strong>
        oppervlakten veranderen met k².
      </li>
      <li>
        <strong>Volumes met k² vermenigvuldigen:</strong>
        volumes veranderen met k³.
      </li>
      <li>
        <strong>Eenheden door elkaar gebruiken:</strong>
        zet overeenkomstige lengtes eerst in dezelfde eenheid.
      </li>
    </ul>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        Denk eerst na over <strong>wat</strong> er verandert:
        een lengte, een oppervlakte of een volume.
        Pas daarna kies je k, k² of k³.
      </p>
    </div>


    <h3>Een vaste werkwijze</h3>

    <p>
      Bij een probleem met gelijkvormige figuren kun je deze
      vaste werkwijze gebruiken:
    </p>

    <ol>
      <li>Controleer of de figuren dezelfde vorm hebben.</li>
      <li>Bepaal welke onderdelen overeenkomstig zijn.</li>
      <li>Zorg dat de lengtes dezelfde eenheid hebben.</li>
      <li>Bepaal de schaalfactor.</li>
      <li>Gebruik k voor overeenkomstige lengtes.</li>
      <li>Gebruik k² voor oppervlakten.</li>
      <li>Gebruik k³ voor volumes.</li>
      <li>Controleer de richting van de schaalfactor.</li>
      <li>Controleer of het antwoord logisch is.</li>
    </ol>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        De belangrijkste stap is vaak niet het rekenen,
        maar het herkennen van de structuur:
        <strong>dezelfde vorm betekent een vaste verhouding</strong>.
      </p>
    </div>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Gelijkvormigheid betekent dat de <strong>vorm behouden blijft</strong>
      terwijl de grootte verandert.
    </p>

    <p>
      Bij gelijkvormige figuren zijn overeenkomstige hoeken gelijk
      en hebben overeenkomstige zijden dezelfde verhouding.
    </p>

    <p>
      De schaalfactor is:
    </p>

    <p class="formula">
      k = \\frac{nieuwe\\ lengte}{oorspronkelijke\\ lengte}
    </p>

    <p>
      Voor lengtes:
    </p>

    <p class="formula">l' = k \\cdot l</p>

    <p>
      Voor oppervlakten:
    </p>

    <p class="formula">A' = k^{2}A</p>

    <p>
      Voor volumes:
    </p>

    <p class="formula">V' = k^{3}V</p>

    <p>
      Hetzelfde principe maakt schaaltekeningen, kaarten,
      maquettes en modellen mogelijk.
    </p>

    <p>
      Bovendien vormt gelijkvormigheid een belangrijke brug naar
      trigonometrie: bij een vaste hoek blijven bepaalde verhoudingen
      tussen zijden constant.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Gelijkvormigheid betekent dat de <strong>vorm</strong> behouden
        blijft terwijl de <strong>grootte</strong> verandert.
      </p>
      <p>
        De sleutel is een vaste verhouding tussen overeenkomstige lengtes.
        Vanuit die schaalfactor volgen de regels voor lengtes,
        oppervlakten en volumes.
      </p>
      <p>
        Gelijkvormigheid vormt bovendien de brug van meetkunde
        naar trigonometrie: bij dezelfde hoek blijven bepaalde
        verhoudingen van zijden behouden.
      </p>
    </div>
  `
},
  {
  id: "2.11",
  title: "Functies als relaties",
  goal: "Hoe beschrijven we een afhankelijkheid tussen grootheden?",
  theory: /* html */`
    <h2>Functies als relaties</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat betekent het dat de ene grootheid afhangt van een andere?</li>
      <li>Wanneer noemen we een verband een functie?</li>
      <li>Hoe werken invoer en uitvoer?</li>
      <li>Hoe kunnen we een functie voorstellen met woorden, een tabel, een grafiek of een formule?</li>
      <li>Wat betekent de notatie <span class="formula-inline">f(x)</span>?</li>
      <li>Wat zijn het domein en het bereik van een functie?</li>
      <li>Hoe herkennen we een functie in een tabel of grafiek?</li>
      <li>Hoe gebruiken we functies om situaties uit de werkelijkheid te beschrijven?</li>
    </ul>

    <p>
      In de vorige lessen gebruikten we formules om verbanden tussen grootheden
      te beschrijven. Nu geven we aan zo'n verband een preciezere wiskundige
      betekenis: we onderzoeken wanneer een verband een <strong>functie</strong>
      is.
    </p>

    <h3>Van een verband naar een functie</h3>

    <p>
      Stel dat de prijs van een product afhangt van het aantal producten dat
      je koopt. Dan verandert de prijs wanneer het aantal verandert.
    </p>

    <p>
      We hebben dan twee grootheden:
    </p>

    <ul>
      <li>het aantal producten;</li>
      <li>de totale prijs.</li>
    </ul>

    <p>
      De ene grootheid hangt af van de andere. We noemen dit een
      <strong>afhankelijkheid</strong> of een <strong>verband</strong>.
    </p>

    <p>
      Een functie is een bijzondere manier om zo'n verband te beschrijven:
      iedere toegelaten invoerwaarde krijgt precies één uitvoerwaarde.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een functie koppelt iedere toegelaten invoer aan precies één uitvoer.
      </p>
      <p>
        Het gaat dus niet in de eerste plaats om een formule, maar om de
        structuur van het verband.
      </p>
    </div>


    <h3>Invoer en uitvoer</h3>

    <p>
      Denk aan een automaat. Je stopt er iets in en krijgt er iets uit.
      Bij een wiskundige functie kunnen we op dezelfde manier denken:
    </p>

    <p class="formula">invoer → functie → uitvoer</p>

    <p>
      De invoer is de waarde waarmee we beginnen. De functie bepaalt vervolgens
      welke uitvoer daarbij hoort.
    </p>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>
      Bij invoer 3 krijgen we:
    </p>

    <p class="formula">f(3) = 2 · 3 + 1 = 7</p>

    <p>
      De invoer is 3 en de uitvoer is 7.
    </p>

    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p>
        De functie bepaalt welke uitvoer bij een bepaalde invoer hoort.
        Dezelfde invoer mag niet twee verschillende uitvoerwaarden krijgen.
      </p>
    </div>


    <h3>Een functie als machine</h3>

    <div class="theory-image">
      <img
        src="assets/functie-machine.svg"
        alt="Een functie als machine die iedere toegelaten invoer volgens een vaste regel naar precies één uitvoer stuurt."
      >
    </div>

    <p>
      Je kunt een functie voorstellen als een denkbeeldige machine.
      De machine voert steeds dezelfde regel uit.
    </p>

    <p>
      Stel dat de regel is:
      <strong>vermenigvuldig met 2 en tel daarna 1 op</strong>.
    </p>

    <p class="formula">3 → × 2 → + 1 → 7</p>

    <p class="formula">5 → × 2 → + 1 → 11</p>

    <p>
      De machine is geen echte machine. Het is een hulpmiddel om het
      functiebegrip intuïtief te begrijpen.
    </p>

    <p>
      De formule vat dezelfde regel compact samen:
    </p>

    <p class="formula">f(x) = 2x + 1</p>


    <h3>Vier manieren om hetzelfde verband te beschrijven</h3>

    <p>
      Een functie kan op verschillende manieren worden weergegeven.
    </p>

    <ul>
      <li>met woorden;</li>
      <li>met een tabel;</li>
      <li>met een grafiek;</li>
      <li>met een formule.</li>
    </ul>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>
      <strong>In woorden:</strong> vermenigvuldig de invoer met 2 en tel 1 op.
    </p>

    <p>
      <strong>In een tabel:</strong> we zetten invoerwaarden naast de
      bijbehorende uitvoerwaarden.
    </p>

    <table>
      <thead>
        <tr>
          <th>x</th>
          <th>f(x)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>3</td>
        </tr>
        <tr>
          <td>2</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>In een grafiek:</strong> we stellen de koppelingen voor als
      punten in een assenstelsel.
    </p>

    <p class="formula">(0, 1), (1, 3), (2, 5), (3, 7)</p>

    <p>
      <strong>Met een formule:</strong>
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>
      Deze vier voorstellingen beschrijven hetzelfde verband.
    </p>

    <div class="callout">
      <p><strong>Een belangrijk wiskundig idee:</strong></p>
      <p>
        We kunnen tussen verschillende voorstellingen van hetzelfde verband
        bewegen: van woorden naar tabel, van tabel naar grafiek en van grafiek
        naar formule.
      </p>
    </div>


    <h3>Functienotatie: f(x)</h3>

    <p>
      We gebruiken vaak de notatie:
    </p>

    <p class="formula">f(x)</p>

    <p>
      De letter <span class="formula-inline">f</span> is de naam van de
      functie. De <span class="formula-inline">x</span> geeft aan welke
      invoer we gebruiken.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 3x + 2</p>

    <p>
      betekent dat functie <span class="formula-inline">f</span> de invoer
      volgens de regel <span class="formula-inline">3x + 2</span> omzet.
    </p>

    <p>
      Voor invoer 5 krijgen we:
    </p>

    <p class="formula">f(5) = 3 · 5 + 2 = 17</p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        <span class="formula-inline">f(x)</span> betekent niet automatisch
        <span class="formula-inline">f · x</span>.
        Het betekent: de uitvoer van functie <span class="formula-inline">f</span>
        bij invoer <span class="formula-inline">x</span>.
      </p>
    </div>


    <h3>Een functiewaarde berekenen</h3>

    <p>
      Een functiewaarde berekenen betekent dat we een bepaalde invoer in de
      functieregel invullen.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = x^{2} + 2</p>

    <p>
      We willen <span class="formula-inline">f(4)</span> kennen.
      We vervangen <span class="formula-inline">x</span> door 4:
    </p>

    <p class="formula">f(4) = 4^{2} + 2</p>

    <p class="formula">f(4) = 18</p>

    <p>
      Het principe is eenvoudig:
      <strong>kies een invoer, pas de functieregel toe en bereken de uitvoer.</strong>
    </p>


    <h3>Een functie gebruiken om terug te rekenen</h3>

    <p>
      Soms kennen we de uitvoer en willen we de bijbehorende invoer vinden.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = 2x + 3</p>

    <p>
      We weten dat de uitvoer 11 is. Dan zoeken we de invoer waarvoor:
    </p>

    <p class="formula">2x + 3 = 11</p>

    <p>
      Dit is een vergelijking. Uit les 2.3 weten we hoe we die oplossen:
    </p>

    <p class="formula">2x = 8</p>

    <p class="formula">x = 4</p>

    <p>
      De invoer 4 geeft dus uitvoer 11.
    </p>

    <div class="callout">
      <p><strong>Verbinding met les 2.3:</strong></p>
      <p>
        Een functie gebruiken gaat vooruit van invoer naar uitvoer.
        Een vergelijking kan ons helpen de invoer terug te vinden wanneer
        de uitvoer bekend is.
      </p>
    </div>


    <h3>Domein: welke invoer is toegestaan?</h3>

    <p>
      Niet iedere formule kan voor iedere waarde van de invoer worden gebruikt.
      De verzameling toegelaten invoerwaarden noemen we het
      <strong>domein</strong>.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = \\frac{1}{x}</p>

    <p>
      Voor <span class="formula-inline">x = 2</span> gaat dat goed:
    </p>

    <p class="formula">f(2) = \\frac{1}{2}</p>

    <p>
      Maar voor <span class="formula-inline">x = 0</span> krijgen we:
    </p>

    <p class="formula">f(0) = \\frac{1}{0}</p>

    <p>
      Delen door nul is niet gedefinieerd. Daarom mag 0 niet tot het domein
      van deze functie behoren.
    </p>

    <p>
      Het domein hangt dus af van de formule én van de context waarin de
      functie wordt gebruikt.
    </p>


    <h3>Bereik: welke uitvoer is mogelijk?</h3>

    <p>
      We kunnen ook kijken naar de uitvoerwaarden die een functie kan
      produceren. Deze verzameling noemen we het <strong>bereik</strong>.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = x^{2}</p>

    <p>
      We krijgen bijvoorbeeld:
    </p>

    <p class="formula">f(-2) = 4</p>

    <p class="formula">f(0) = 0</p>

    <p class="formula">f(2) = 4</p>

    <p>
      De uitvoer is hier nooit negatief.
      Het bereik van deze functie over de reële getallen bestaat dus uit
      nul en alle positieve getallen.
    </p>

    <div class="callout">
      <p><strong>Onthoud het onderscheid:</strong></p>
      <p>
        <strong>Domein</strong> = welke invoer mag erin?
      </p>
      <p>
        <strong>Bereik</strong> = welke uitvoer kan eruit komen?
      </p>
    </div>


    <h3>Wanneer is een verband een functie?</h3>

    <p>
      Het beslissende criterium is:
    </p>

    <p>
      <strong>Iedere toegelaten invoer heeft precies één uitvoer.</strong>
    </p>

    <p>
      Verschillende invoerwaarden mogen wel dezelfde uitvoer hebben.
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">f(x) = x^{2}</p>

    <p>
      geldt bijvoorbeeld:
    </p>

    <p class="formula">f(2) = 4</p>

    <p class="formula">f(-2) = 4</p>

    <p>
      Dat is geen probleem. De twee verschillende invoerwaarden hebben
      dezelfde uitvoer.
    </p>

    <p>
      Wat niet mag, is dat één invoer twee verschillende uitvoerwaarden krijgt.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <table>
      <thead>
        <tr>
          <th>x</th>
          <th>y</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>8</td>
        </tr>
      </tbody>
    </table>

    <p>
      De invoer 2 wordt hier gekoppeld aan zowel 5 als 8.
      Dit is daarom geen functie van <span class="formula-inline">x</span>.
    </p>


    <h3>Hoe herken je een functie in een grafiek?</h3>

    <div class="theory-image">
      <img
        src="assets/verticale-lijntest.svg"
        alt="De verticale-lijntest: een verticale lijn mag een grafiek van een functie hoogstens één keer snijden."
      >
    </div>

    <p>
      Ook een grafiek kunnen we controleren.
    </p>

    <p>
      Denk een verticale lijn door de grafiek.
      Als die verticale lijn de grafiek op twee verschillende plaatsen snijdt,
      hoort dezelfde invoerwaarde bij twee verschillende uitvoerwaarden.
    </p>

    <p>
      Dan kan de grafiek geen functie van <span class="formula-inline">x</span>
      voorstellen.
    </p>

    <p>
      Snijdt iedere verticale lijn de grafiek hoogstens één keer,
      dan kan de grafiek wel een functie van <span class="formula-inline">x</span>
      voorstellen.
    </p>

    <div class="callout">
      <p><strong>Verticale-lijntest:</strong></p>
      <p>
        Een grafiek stelt een functie van <span class="formula-inline">x</span>
        voor als geen enkele verticale lijn de grafiek meer dan één keer snijdt.
      </p>
    </div>


    <h3>Functies kunnen verschillende vormen hebben</h3>

    <p>
      Het woord <strong>functie</strong> vertelt ons nog niet welke formule
      wordt gebruikt.
    </p>

    <p>
      Een functie kan bijvoorbeeld een vast bedrag toevoegen:
    </p>

    <p class="formula">f(x) = x + 5</p>

    <p>
      Een hoeveelheid verdubbelen:
    </p>

    <p class="formula">f(x) = 2x</p>

    <p>
      Of het kwadraat nemen:
    </p>

    <p class="formula">f(x) = x^{2}</p>

    <p>
      De grafiek hoeft dus niet altijd een rechte te zijn.
      Een functie kan stijgen, dalen of van gedrag veranderen.
    </p>

    <p>
      In de volgende milestone onderzoeken we twee belangrijke vormen
      systematisch: <strong>lineaire en kwadratische functies</strong>.
    </p>


    <h3>Functies uit de werkelijkheid</h3>

    <p>
      Functies ontstaan vanzelf wanneer één grootheid afhangt van een andere.
    </p>

    <p>Bijvoorbeeld:</p>

    <ul>
      <li>de prijs als functie van het aantal producten;</li>
      <li>de afgelegde afstand als functie van de tijd;</li>
      <li>de temperatuur als functie van het tijdstip;</li>
      <li>de oppervlakte als functie van de zijde van een vierkant.</li>
    </ul>

    <p>
      Stel dat een fietser met constante snelheid van 20 km/u rijdt.
      De afstand hangt dan af van de tijd:
    </p>

    <p class="formula">d(t) = 20t</p>

    <p>
      Hier is <span class="formula-inline">t</span> de tijd in uren en
      <span class="formula-inline">d(t)</span> de afstand in kilometer.
    </p>

    <p>
      Na 2,5 uur:
    </p>

    <p class="formula">d(2,5) = 20 · 2,5 = 50</p>

    <p>
      De functie vertelt dus hoeveel kilometer de fietser na een bepaalde
      tijd heeft afgelegd.
    </p>

    <p>
      We kunnen hetzelfde verband weergeven met een tabel, een grafiek of
      de formule <span class="formula-inline">d(t) = 20t</span>.
    </p>

    <div class="callout">
      <p><strong>Functies beschrijven afhankelijkheden.</strong></p>
      <p>
        Ze laten ons niet alleen berekenen, maar ook onderzoeken hoe
        grootheden met elkaar samenhangen.
      </p>
    </div>


    <h3>Een vaste werkwijze</h3>

    <p>
      Wanneer je een functie tegenkomt, kun je steeds dezelfde vragen stellen:
    </p>

    <ol>
      <li>Wat is de invoer?</li>
      <li>Wat is de uitvoer?</li>
      <li>Welke regel verbindt beide?</li>
      <li>Heeft iedere toegelaten invoer precies één uitvoer?</li>
      <li>Wat is het domein?</li>
      <li>Welke uitvoerwaarden behoren tot het bereik?</li>
      <li>Kan ik het verband weergeven met woorden, een tabel, een grafiek of een formule?</li>
    </ol>

    <p>
      Zo leer je niet alleen een formule gebruiken, maar vooral begrijpen
      <strong>welk verband de formule beschrijft</strong>.
    </p>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Een <strong>functie</strong> beschrijft een afhankelijkheid tussen
      grootheden.
    </p>

    <p class="formula">invoer → functie → uitvoer</p>

    <p>
      Iedere toegelaten invoer heeft precies één uitvoer.
      Verschillende invoeren mogen wel dezelfde uitvoer hebben.
    </p>

    <p>
      Een functie kan worden beschreven met woorden, een tabel, een grafiek
      of een formule.
    </p>

    <p>
      Met de notatie:
    </p>

    <p class="formula">f(x)</p>

    <p>
      geven we aan welke uitvoer functie <span class="formula-inline">f</span>
      geeft bij invoer <span class="formula-inline">x</span>.
    </p>

    <p>
      Het <strong>domein</strong> beschrijft welke invoerwaarden zijn toegestaan.
      Het <strong>bereik</strong> beschrijft welke uitvoerwaarden mogelijk zijn.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een functie is geen specifieke formule. Het is een structuur:
        iedere toegelaten invoer krijgt precies één uitvoer.
      </p>
      <p>
        Daardoor kunnen we afhankelijkheden uit de werkelijkheid beschrijven,
        berekenen, tekenen en vergelijken.
      </p>
    </div>
  `
},
{
  id: "2.12",
  title: "Lineaire & kwadratische functies",
  goal: "Hoe herkennen we lineaire en kwadratische verbanden?",
  theory: /* html */`
    <h2>Lineaire & kwadratische functies</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe herkennen we een lineaire functie?</li>
      <li>Wat vertellen de helling en het snijpunt met de y-as?</li>
      <li>Hoe tekenen we een lineaire functie?</li>
      <li>Hoe bepalen we een formule uit punten of een helling?</li>
      <li>Wanneer is een verband evenredig?</li>
      <li>Hoe herkennen we een kwadratische functie?</li>
      <li>Hoe beïnvloeden de coëfficiënten de vorm van een parabool?</li>
      <li>Wat is het verband tussen nulpunten van een functie en kwadratische vergelijkingen?</li>
    </ul>

    <p>
      In les 2.11 leerden we dat een functie een verband beschrijft tussen
      invoer en uitvoer. Nu onderzoeken we twee belangrijke soorten functies:
      <strong>lineaire</strong> en <strong>kwadratische</strong> functies.
    </p>

    <p>
      We zullen daarbij voortdurend heen en weer bewegen tussen drie
      perspectieven:
    </p>

    <p class="formula">formule ↔ grafiek ↔ betekenis</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De formule van een functie vertelt niet alleen hoe je een uitvoer
        berekent. Ze bepaalt ook het gedrag en de vorm van de grafiek.
      </p>
      <p>
        Bij een lineaire functie is de verandering constant. Bij een
        kwadratische functie verandert die verandering zelf.
      </p>
    </div>


    <h3>Van functie naar grafiek</h3>

    <p>
      Neem bijvoorbeeld de functie:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>
      Voor iedere invoerwaarde kunnen we een uitvoer berekenen.
      Zo krijgen we bijvoorbeeld:
    </p>

    <table>
      <thead>
        <tr>
          <th>x</th>
          <th>f(x)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>3</td>
        </tr>
        <tr>
          <td>2</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>

    <p>
      De koppels vormen punten in een assenstelsel:
    </p>

    <p class="formula">(0, 1), (1, 3), (2, 5), (3, 7)</p>

    <p>
      Wanneer we die punten tekenen, zien we een rechte.
      De grafiek maakt dus zichtbaar wat de formule beschrijft.
    </p>


    <h3>Wat is een lineaire functie?</h3>

    <p>
      Een lineaire functie heeft de vorm:
    </p>

    <p class="formula">f(x) = ax + b</p>

    <div data-widget="lineGraph"></div>

    <p>
      Hierbij zijn <span class="formula-inline">a</span> en
      <span class="formula-inline">b</span> vaste getallen.
    </p>

    <p>
      Het belangrijkste kenmerk is dat de uitvoer met een
      <strong>constant bedrag</strong> verandert wanneer de invoer telkens
      met dezelfde hoeveelheid verandert.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = 4x + 1</p>

    <p>
      Dan krijgen we:
    </p>

    <p class="formula">1, 5, 9, 13, 17, ...</p>

    <p>
      Bij iedere stap van 1 in <span class="formula-inline">x</span> komt er
      4 bij.
    </p>

    <p>
      De verandering is dus constant. Daarom is de grafiek een rechte.
    </p>


    <h3>De helling: wat betekent a?</h3>

    <p>
      In:
    </p>

    <p class="formula">f(x) = ax + b</p>

    <p>
      bepaalt <span class="formula-inline">a</span> de
      <strong>helling</strong> van de rechte.
    </p>

    <p>
      Het getal <span class="formula-inline">a</span> vertelt hoeveel de
      uitvoer verandert wanneer <span class="formula-inline">x</span>
      met 1 toeneemt.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 3x + 2</p>

    <p>
      Wanneer <span class="formula-inline">x</span> met 1 toeneemt,
      neemt de uitvoer met 3 toe.
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">f(x) = -2x + 5</p>

    <p>
      daalt de uitvoer met 2 wanneer <span class="formula-inline">x</span>
      met 1 toeneemt.
    </p>

    <p>
      De helling kan dus positief, negatief of nul zijn.
    </p>

    <div class="callout">
      <p><strong>Notatie:</strong></p>
      <p>
        In les 2.8 gebruikten we <span class="formula-inline">m</span>
        voor de helling van een rechte.
        Hier gebruiken we <span class="formula-inline">a</span> voor dezelfde
        rol:
      </p>
      <p class="formula">a = m</p>
      <p>
        Het gaat dus om hetzelfde wiskundige begrip, maar in een andere
        context gebruiken we een andere letter.
      </p>
    </div>


    <h3>Het snijpunt met de y-as: wat betekent b?</h3>

    <p>
      In:
    </p>

    <p class="formula">f(x) = ax + b</p>

    <p>
      bepaalt <span class="formula-inline">b</span> de verticale positie
      van de rechte.
    </p>

    <p>
      Om te weten waar de grafiek de y-as snijdt, nemen we:
    </p>

    <p class="formula">x = 0</p>

    <p>
      Dan krijgen we:
    </p>

    <p class="formula">f(0) = a · 0 + b = b</p>

    <p>
      Het snijpunt met de y-as is dus:
    </p>

    <p class="formula">(0, b)</p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 2x + 5</p>

    <p>
      heeft als y-snijpunt:
    </p>

    <p class="formula">(0, 5)</p>

    <p>
      De twee parameters hebben dus een verschillende rol:
    </p>

    <ul>
      <li><strong>a</strong> bepaalt de helling;</li>
      <li><strong>b</strong> bepaalt het snijpunt met de y-as.</li>
    </ul>


    <h3>Een lineaire functie tekenen</h3>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>
      Uit de formule lezen we onmiddellijk:
    </p>

    <p class="formula">a = 2</p>

    <p class="formula">b = 1</p>

    <p>
      De grafiek gaat dus door:
    </p>

    <p class="formula">(0, 1)</p>

    <p>
      De helling is 2. Wanneer we 1 naar rechts gaan, gaan we 2 omhoog.
    </p>

    <p>
      Vanuit <span class="formula-inline">(0, 1)</span> krijgen we:
    </p>

    <p class="formula">(1, 3)</p>

    <p>
      en vervolgens:
    </p>

    <p class="formula">(2, 5)</p>

    <p>
      Door deze punten te verbinden ontstaat de rechte.
    </p>

    <div class="callout">
      <p><strong>Een rechte tekenen uit f(x) = ax + b:</strong></p>
      <ol>
        <li>zet het punt <span class="formula-inline">(0, b)</span> op de y-as;</li>
        <li>gebruik de helling <span class="formula-inline">a</span> om een tweede punt te vinden;</li>
        <li>trek de rechte door de punten.</li>
      </ol>
    </div>


    <h3>Een formule vinden uit twee punten</h3>

    <p>
      Soms kennen we de formule niet, maar wel twee punten van een rechte.
    </p>

    <p>
      Stel dat de rechte door:
    </p>

    <p class="formula">(1, 3)</p>

    <p>
      en:
    </p>

    <p class="formula">(4, 9)</p>

    <p>
      gaat.
    </p>

    <p>
      Eerst bepalen we de helling:
    </p>

    <p class="formula">
      a = \\frac{9 - 3}{4 - 1} = 2
    </p>

    <p>
      De functie heeft dus de vorm:
    </p>

    <p class="formula">f(x) = 2x + b</p>

    <p>
      We gebruiken vervolgens één van de punten.
      Voor <span class="formula-inline">(1, 3)</span> geldt:
    </p>

    <p class="formula">3 = 2 · 1 + b</p>

    <p>
      Dus:
    </p>

    <p class="formula">b = 1</p>

    <p>
      De formule is:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <div class="callout">
      <p><strong>Vaste aanpak:</strong></p>
      <p>
        Eerst de helling bepalen, daarna het y-snijpunt.
      </p>
    </div>


    <h3>Een formule vinden uit een punt en een helling</h3>

    <p>
      Als we de helling en één punt kennen, kunnen we dezelfde redenering
      gebruiken.
    </p>

    <p>
      Stel:
    </p>

    <p class="formula">a = 3</p>

    <p>
      en de rechte gaat door:
    </p>

    <p class="formula">(2, 7)</p>

    <p>
      We weten dan:
    </p>

    <p class="formula">f(x) = 3x + b</p>

    <p>
      Omdat het punt op de rechte ligt:
    </p>

    <p class="formula">7 = 3 · 2 + b</p>

    <p>
      Dus:
    </p>

    <p class="formula">b = 1</p>

    <p>
      en:
    </p>

    <p class="formula">f(x) = 3x + 1</p>


    <h3>Evenredige verbanden</h3>

    <p>
      Een bijzonder geval van een lineaire functie ontstaat wanneer:
    </p>

    <p class="formula">b = 0</p>

    <p>
      Dan krijgen we:
    </p>

    <p class="formula">f(x) = ax</p>

    <p>
      De grafiek gaat door de oorsprong:
    </p>

    <p class="formula">(0, 0)</p>

    <p>
      Dit noemen we een <strong>rechtstreeks evenredig verband</strong>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 4x</p>

    <p>
      Wanneer <span class="formula-inline">x</span> verdubbelt,
      verdubbelt ook de uitvoer.
    </p>

    <p>
      Niet elke lineaire functie is dus evenredig. Alleen de lineaire functies
      waarvan het y-snijpunt nul is.
    </p>


    <h3>Parallelle rechten en snijpunten</h3>

    <p>
      Twee niet-samenvallende rechten zijn parallel wanneer ze dezelfde
      helling hebben.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p class="formula">g(x) = 2x - 5</p>

    <p>
      Beide hebben:
    </p>

    <p class="formula">a = 2</p>

    <p>
      Ze stijgen dus even snel, maar hebben een verschillende verticale
      positie.
    </p>

    <p>
      Hebben twee rechten verschillende hellingen, dan kunnen we hun
      snijpunt vinden door de uitvoerwaarden gelijk te stellen.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = 2x + 1</p>

    <p class="formula">g(x) = -x + 7</p>

    <p>
      In het snijpunt zijn de y-waarden gelijk:
    </p>

    <p class="formula">2x + 1 = -x + 7</p>

    <p>
      Uit les 2.3 weten we hoe we deze vergelijking oplossen:
    </p>

    <p class="formula">3x = 6</p>

    <p class="formula">x = 2</p>

    <p>
      Vervolgens berekenen we de y-waarde:
    </p>

    <p class="formula">f(2) = 2 · 2 + 1 = 5</p>

    <p>
      Het snijpunt is dus:
    </p>

    <p class="formula">(2, 5)</p>

    <div class="callout">
      <p><strong>Verbinding met 2.3:</strong></p>
      <p>
        Het snijpunt van twee grafieken vinden betekent dat we zoeken naar
        een invoer waarvoor beide functies dezelfde uitvoer hebben.
        Dat wordt opnieuw een vergelijking.
      </p>
    </div>


    <h3>Van een lineair model naar de werkelijkheid</h3>

    <p>
      Lineaire functies zijn bijzonder bruikbaar wanneer een grootheid met
      een constante snelheid verandert.
    </p>

    <p>
      Stel dat een taxirit €5 startkost en daarna €2 per kilometer kost.
    </p>

    <p>
      Als <span class="formula-inline">x</span> het aantal kilometer is,
      krijgen we:
    </p>

    <p class="formula">P(x) = 2x + 5</p>

    <p>
      Hier betekent:
    </p>

    <ul>
      <li><span class="formula-inline">2</span>: de prijs per kilometer;</li>
      <li><span class="formula-inline">5</span>: de vaste startkost.</li>
    </ul>

    <p>
      De algebraïsche structuur vertelt dus iets over de werkelijkheid:
      een vaste beginwaarde plus een constante toename.
    </p>


    <h3>Wanneer is een verband niet lineair?</h3>

    <p>
      Niet elk verband verandert met een constant bedrag.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = x^{2}</p>

    <p>
      Voor opeenvolgende gehele waarden van <span class="formula-inline">x</span>
      krijgen we:
    </p>

    <p class="formula">0, 1, 4, 9, 16, ...</p>

    <p>
      De eerste verschillen zijn:
    </p>

    <p class="formula">1, 3, 5, 7, ...</p>

    <p>
      Die zijn niet constant.
    </p>

    <p>
      De grafiek kan daarom geen rechte zijn.
      Hier hebben we een ander soort functie nodig.
    </p>

    <div class="callout">
      <p><strong>Herkenningsregel:</strong></p>
      <p>
        Constante eerste verschillen wijzen op een lineair verband.
        Veranderende eerste verschillen wijzen erop dat het verband niet lineair is.
      </p>
    </div>


    <h3>Wat is een kwadratische functie?</h3>

    <p>
      Een kwadratische functie bevat een term met
      <span class="formula-inline">x^{2}</span>.
      De algemene vorm is:
    </p>

    <p class="formula">f(x) = ax^{2} + bx + c</p>

    <div data-widget="parabolaGraph"></div>

    <p>
      waarbij:
    </p>

    <p class="formula">a \\neq 0</p>

    <p>
      De grafiek van een kwadratische functie is een
      <strong>parabool</strong>.
    </p>

    <div class="theory-image">
      <img
        src="assets/parabolen.svg"
        alt="Parabolen met verschillende waarden van de parameter a, die hun opening en kromming veranderen."
      >
    </div>

    <p>
      De eenvoudigste kwadratische functie is:
    </p>

    <p class="formula">f(x) = x^{2}</p>

    <p>
      Hieruit volgt bijvoorbeeld:
    </p>

    <p class="formula">f(2) = 4</p>

    <p class="formula">f(-2) = 4</p>

    <p>
      De grafiek is daardoor symmetrisch rond de y-as en opent naar boven.
    </p>


    <h3>De rol van a, b en c</h3>

    <p>
      In:
    </p>

    <p class="formula">f(x) = ax^{2} + bx + c</p>

    <p>
      hebben de drie coëfficiënten verschillende rollen.
    </p>

    <p>
      <strong>a</strong> bepaalt onder andere de richting waarin de parabool
      opent en hoe sterk ze gekromd is.
    </p>

    <p>
      Als:
    </p>

    <p class="formula">a > 0</p>

    <p>
      opent de parabool naar boven.
    </p>

    <p>
      Als:
    </p>

    <p class="formula">a < 0</p>

    <p>
      opent de parabool naar beneden.
    </p>

    <p>
      De absolute waarde van <span class="formula-inline">a</span> beïnvloedt
      hoe breed of smal de parabool is.
    </p>

    <p>
      De waarde <strong>c</strong> bepaalt het snijpunt met de y-as.
      Want:
    </p>

    <p class="formula">f(0) = c</p>

    <p>
      Het y-snijpunt is dus:
    </p>

    <p class="formula">(0, c)</p>

    <p>
      De waarde <strong>b</strong> beïnvloedt onder andere de positie van
      de top en de symmetrie-as.
    </p>


    <h3>De top en de symmetrie-as</h3>

    <p>
      Een parabool die naar boven opent heeft een laagste punt.
      Een parabool die naar beneden opent heeft een hoogste punt.
      Dit punt noemen we de <strong>top</strong>.
    </p>

    <p>
      Bij de functie:
    </p>

    <p class="formula">f(x) = (x - 2)^{2} + 3</p>

    <p>
      is het kwadraat minimaal wanneer:
    </p>

    <p class="formula">x - 2 = 0</p>

    <p>
      dus:
    </p>

    <p class="formula">x = 2</p>

    <p>
      Dan is:
    </p>

    <p class="formula">f(2) = 3</p>

    <p>
      De top is:
    </p>

    <p class="formula">(2, 3)</p>

    <p>
      De verticale symmetrie-as loopt door de top:
    </p>

    <p class="formula">x = 2</p>

    <p>
      Punten die even ver links en rechts van deze as liggen, hebben dezelfde
      y-waarde.
    </p>

    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p>
        De top is het hoogste of laagste punt van de parabool.
        De symmetrie-as loopt verticaal door die top.
      </p>
    </div>


    <h3>Nulpunten van een kwadratische functie</h3>

    <p>
      Een nulpunt is een invoerwaarde waarvoor de uitvoer nul is.
      We zoeken dus:
    </p>

    <p class="formula">f(x) = 0</p>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = x^{2} - 5x + 6</p>

    <p>
      Dan zoeken we:
    </p>

    <p class="formula">x^{2} - 5x + 6 = 0</p>

    <p>
      Uit les 2.7 weten we hoe we dit kunnen oplossen door te factoriseren:
    </p>

    <p class="formula">(x - 2)(x - 3) = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = 2</p>

    <p class="formula">x = 3</p>

    <p>
      De parabool snijdt de x-as daarom in:
    </p>

    <p class="formula">(2, 0)</p>

    <p>
      en:
    </p>

    <p class="formula">(3, 0)</p>


    <h3>Functie en kwadratische vergelijking</h3>

    <p>
      Hier zien we een belangrijke verbinding met les 2.7.
    </p>

    <p>
      De kwadratische vergelijking:
    </p>

    <p class="formula">ax^{2} + bx + c = 0</p>

    <p>
      vraagt eigenlijk:
    </p>

    <p>
      <strong>Voor welke invoerwaarden is de uitvoer van de kwadratische
      functie gelijk aan nul?</strong>
    </p>

    <p>
      De oplossingen van de vergelijking zijn dus de
      <strong>nulpunten van de functie</strong>.
    </p>

    <p>
      Algebra en grafieken beschrijven hier hetzelfde verschijnsel vanuit
      twee verschillende perspectieven.
    </p>

    <div class="callout">
      <p><strong>Verbinding met 2.7:</strong></p>
      <p>
        Een kwadratische vergelijking oplossen betekent geometrisch dat je
        de x-coördinaten zoekt van de snijpunten van de parabool met de x-as.
      </p>
    </div>


    <h3>Lineair versus kwadratisch</h3>

    <p>
      We kunnen de twee functietypen rechtstreeks vergelijken.
    </p>

    <p><strong>Lineair:</strong></p>

    <p class="formula">f(x) = ax + b</p>

    <ul>
      <li>de verandering per stap is constant;</li>
      <li>de grafiek is een rechte;</li>
      <li><span class="formula-inline">a</span> is de helling;</li>
      <li><span class="formula-inline">b</span> is het y-snijpunt.</li>
    </ul>

    <p><strong>Kwadratisch:</strong></p>

    <p class="formula">f(x) = ax^{2} + bx + c</p>

    <ul>
      <li>de eerste verandering is niet constant;</li>
      <li>de grafiek is een parabool;</li>
      <li>de parabool heeft een top en symmetrie-as;</li>
      <li>de nulpunten vind je door <span class="formula-inline">f(x) = 0</span> op te lossen.</li>
    </ul>

    <p>
      De aanwezigheid van <span class="formula-inline">x^{2}</span> zorgt dus
      voor een fundamenteel ander soort gedrag.
    </p>


    <h3>Functies in de werkelijkheid</h3>

    <p>
      Beide functietypen kunnen gebruikt worden om situaties uit de
      werkelijkheid te modelleren.
    </p>

    <p>
      Lineaire functies passen bijvoorbeeld bij:
    </p>

    <ul>
      <li>een vaste prijs per kilometer;</li>
      <li>een vast bedrag per tijdseenheid;</li>
      <li>een grootheid die met constante snelheid verandert.</li>
    </ul>

    <p>
      Kwadratische functies komen bijvoorbeeld voor bij:
    </p>

    <ul>
      <li>de oppervlakte van een vierkant als functie van zijn zijde;</li>
      <li>beweging onder constante versnelling;</li>
      <li>een ideaal geworpen voorwerp.</li>
    </ul>

    <p>
      Neem bijvoorbeeld een hoogte die tijdens een worp wordt beschreven door:
    </p>

    <p class="formula">h(t) = -5t^{2} + 20t + 1</p>

    <p>
      Omdat een term met <span class="formula-inline">t^{2}</span> voorkomt,
      is dit een kwadratische functie.
    </p>

    <p>
      De coëfficiënt van <span class="formula-inline">t^{2}</span> is negatief:
    </p>

    <p class="formula">a = -5</p>

    <p>
      De parabool opent daarom naar beneden.
    </p>

    <p>
      De constante term is:
    </p>

    <p class="formula">c = 1</p>

    <p>
      De beginhoogte is dus:
    </p>

    <p class="formula">h(0) = 1</p>

    <p>
      Als we willen weten wanneer het voorwerp de grond bereikt, zoeken we:
    </p>

    <p class="formula">h(t) = 0</p>

    <p>
      Daarmee ontstaat opnieuw een kwadratische vergelijking.
      Zo kunnen functie, grafiek en vergelijking samen één fysisch probleem
      beschrijven.
    </p>


    <h3>Een vaste werkwijze</h3>

    <p>
      Wanneer je een functie krijgt, kun je eerst bepalen met welk soort
      verband je te maken hebt.
    </p>

    <ol>
      <li>Bekijk welke machten van de invoer voorkomen.</li>
      <li>Bevat de formule alleen een eerste macht? Onderzoek dan of ze lineair is.</li>
      <li>Bevat de formule een tweede macht? Onderzoek dan of ze kwadratisch is.</li>
      <li>Bij een lineaire functie: bepaal de helling en het y-snijpunt.</li>
      <li>Bij een kwadratische functie: onderzoek de opening, top, symmetrie-as en nulpunten.</li>
      <li>Gebruik een vergelijking wanneer je een specifieke invoer zoekt.</li>
      <li>Gebruik de grafiek om het gedrag zichtbaar te maken.</li>
    </ol>

    <p>
      Blijf daarbij steeds schakelen tussen:
    </p>

    <p class="formula">formule ↔ grafiek ↔ betekenis</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een lineaire functie heeft een constante verandering en geeft daarom
        een rechte grafiek.
      </p>
      <p>
        Een kwadratische functie bevat een tweede macht en geeft daarom een
        parabool. De vorm van de formule bepaalt wat we in de grafiek zien.
      </p>
    </div>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Een lineaire functie heeft de vorm:
    </p>

    <p class="formula">f(x) = ax + b</p>

    <p>
      De waarde <span class="formula-inline">a</span> is de helling en
      <span class="formula-inline">b</span> is het snijpunt met de y-as.
    </p>

    <p>
      Een kwadratische functie heeft de vorm:
    </p>

    <p class="formula">f(x) = ax^{2} + bx + c</p>

    <p>
      De grafiek is een parabool. De waarde van
      <span class="formula-inline">a</span> bepaalt onder andere de
      openingsrichting, terwijl <span class="formula-inline">c</span>
      het y-snijpunt bepaalt.
    </p>

    <p>
      De nulpunten van een functie vinden betekent:
    </p>

    <p class="formula">f(x) = 0</p>

    <p>
      Bij een kwadratische functie leidt dit rechtstreeks naar de
      kwadratische vergelijkingen uit les 2.7.
    </p>

    <p>
      Daarmee hebben we een belangrijke verbinding gelegd:
    </p>

    <p class="formula">algebra ↔ functies ↔ grafieken ↔ vergelijkingen</p>

    <p>
      In de volgende milestone bekijken we functies met een heel ander
      groeigedrag: <strong>exponentiële en logaritmische functies</strong>.
    </p>
  `
},
{
  id: "2.13",
  title: "Exponentiële & logaritmische functies",
  goal: "Hoe beschrijven we groei en verval met een vaste factor?",
  theory: /* html */`
    <h2>Exponentiële & logaritmische functies</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat is het verschil tussen lineaire en exponentiële groei?</li>
      <li>Wat betekent een groeifactor?</li>
      <li>Hoe zetten we een groeipercentage om in een groeifactor?</li>
      <li>Hoe beschrijven we exponentiële groei en verval met een formule?</li>
      <li>Waarom staat bij een exponentiële functie de variabele in de exponent?</li>
      <li>Wat is een logaritme en waarom is die de omgekeerde bewerking van machtsverheffen?</li>
      <li>Hoe gebruiken we een logaritme om een onbekende exponent te vinden?</li>
      <li>Wat is de relatie tussen exponentiële en logaritmische functies?</li>
    </ul>

    <p>
      In les 2.12 zagen we dat een lineaire functie een
      <strong>constante verandering</strong> heeft. Nu bekijken we een ander
      soort verandering: een grootheid wordt telkens met dezelfde
      <strong>factor</strong> vermenigvuldigd.
    </p>

    <p>
      Dat leidt tot exponentiële functies. Wanneer we de onbekende exponent
      willen terugvinden, hebben we de logaritme nodig.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Lineaire groei betekent: telkens dezelfde hoeveelheid erbij.
      </p>
      <p>
        Exponentiële groei betekent: telkens met dezelfde factor vermenigvuldigen.
      </p>
      <p>
        Een logaritme draait machtsverheffen om en helpt een onbekende exponent
        terug te vinden.
      </p>
    </div>


    <h3>Groei is niet altijd een vaste toename</h3>

    <p>
      In les 2.12 zagen we bijvoorbeeld:
    </p>

    <p class="formula">f(x) = 3x</p>

    <p>
      Wanneer <span class="formula-inline">x</span> telkens met 1 toeneemt,
      neemt de uitvoer telkens met 3 toe.
    </p>

    <p>
      De toename is constant:
    </p>

    <p class="formula">3, 3, 3, 3, ...</p>

    <p>
      Maar stel dat een bedrag ieder jaar verdubbelt:
    </p>

    <p class="formula">100 → 200 → 400 → 800 → 1600</p>

    <p>
      De verschillen zijn:
    </p>

    <p class="formula">100, 200, 400, 800</p>

    <p>
      De toename is dus niet constant.
    </p>

    <p>
      Er is wel iets anders constant: telkens wordt de vorige waarde met
      dezelfde factor vermenigvuldigd.
    </p>

    <p>
      Dat is het kenmerk van <strong>exponentiële groei</strong>.
    </p>

    <div class="callout">
      <p><strong>Vergelijk de twee soorten groei:</strong></p>
      <p>
        <strong>Lineair:</strong> telkens dezelfde hoeveelheid erbij.
      </p>
      <p>
        <strong>Exponentieel:</strong> telkens dezelfde factor maal.
      </p>
    </div>


    <h3>Een vaste vermenigvuldigingsfactor</h3>

    <p>
      Bij exponentiële groei wordt een grootheid telkens met dezelfde factor
      vermenigvuldigd.
    </p>

    <p class="formula">100 → × 2 → 200 → × 2 → 400 → × 2 → 800</p>

    <p>
      De factor 2 noemen we de <strong>groeifactor</strong>.
    </p>

    <p>
      Een groeifactor groter dan 1 geeft groei.
      Een groeifactor tussen 0 en 1 geeft verval.
    </p>

    <p>
      De groeifactor vertelt dus niet hoeveel er wordt toegevoegd, maar
      hoeveel keer de vorige waarde behouden blijft.
    </p>


    <h3>De vorm van een exponentiële functie</h3>

    <p>
      Een eenvoudig exponentieel model heeft de vorm:
    </p>

    <p class="formula">f(x) = b · g^{x}</p>

    <p>
      Hierbij is:
    </p>

    <ul>
      <li><strong>b</strong> de beginwaarde;</li>
      <li><strong>g</strong> de groeifactor;</li>
      <li><strong>x</strong> de invoer, bijvoorbeeld het aantal perioden.</li>
    </ul>

    <p>
      Neem:
    </p>

    <p class="formula">f(x) = 100 · 2^{x}</p>

    <p>
      Voor <span class="formula-inline">x = 0</span> krijgen we:
    </p>

    <p class="formula">f(0) = 100 · 2^{0} = 100</p>

    <p>
      Voor <span class="formula-inline">x = 1</span>:
    </p>

    <p class="formula">f(1) = 100 · 2^{1} = 200</p>

    <p>
      En voor <span class="formula-inline">x = 2</span>:
    </p>

    <p class="formula">f(2) = 100 · 2^{2} = 400</p>

    <p>
      De exponent geeft dus aan hoe vaak de groeifactor wordt toegepast.
    </p>


    <h3>Waarom staat de variabele in de exponent?</h3>

    <p>
      Vergelijk:
    </p>

    <p class="formula">f(x) = 3x</p>

    <p>
      met:
    </p>

    <p class="formula">g(x) = 3^{x}</p>

    <p>
      Bij de eerste functie wordt 3 vermenigvuldigd met
      <span class="formula-inline">x</span>.
      Bij de tweede functie bepaalt <span class="formula-inline">x</span>
      hoe vaak de factor 3 wordt toegepast.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">3^{1} = 3</p>

    <p class="formula">3^{2} = 9</p>

    <p class="formula">3^{3} = 27</p>

    <p>
      Elke stap in <span class="formula-inline">x</span> betekent opnieuw
      vermenigvuldigen met 3.
    </p>

    <p>
      Daarom kan exponentiële groei veel sneller toenemen dan lineaire groei.
    </p>


    <h3>Exponentiële groei en procenten</h3>

    <p>
      Exponentiële groei wordt vaak beschreven met een percentage.
    </p>

    <p>
      Stel dat een hoeveelheid ieder jaar met 5% groeit.
      Na één jaar hebben we 105% van de vorige waarde:
    </p>

    <p class="formula">g = 1,05</p>

    <p>
      Bij een beginwaarde van 100 krijgen we:
    </p>

    <p class="formula">100 · 1,05 = 105</p>

    <p>
      Na twee perioden:
    </p>

    <p class="formula">100 · 1,05^{2}</p>

    <p>
      Na <span class="formula-inline">x</span> perioden:
    </p>

    <p class="formula">f(x) = 100 · 1,05^{x}</p>

    <p>
      De factor wordt dus iedere periode opnieuw toegepast op de
      <strong>nieuwe</strong> waarde.
    </p>


    <h3>Van groeipercentage naar groeifactor</h3>

    <p>
      Bij een groeipercentage <span class="formula-inline">p</span>,
      geschreven als decimaal, geldt bij groei:
    </p>

    <p class="formula">g = 1 + p</p>

    <p>
      Bij 8% groei is:
    </p>

    <p class="formula">p = 0,08</p>

    <p class="formula">g = 1,08</p>

    <p>
      Bij 25% groei:
    </p>

    <p class="formula">g = 1,25</p>

    <p>
      De groeifactor is dus de factor waarmee de oude waarde wordt
      vermenigvuldigd.
    </p>


    <h3>Exponentieel verval</h3>

    <p>
      Hetzelfde principe werkt wanneer een hoeveelheid kleiner wordt.
    </p>

    <p>
      Stel dat een hoeveelheid ieder jaar 20% kleiner wordt.
      Dan blijft 80% over:
    </p>

    <p class="formula">g = 0,80</p>

    <p>
      Bij een beginwaarde van 500 krijgen we:
    </p>

    <p class="formula">f(x) = 500 · 0,8^{x}</p>

    <p>
      Na één periode:
    </p>

    <p class="formula">500 · 0,8 = 400</p>

    <p>
      Na twee perioden:
    </p>

    <p class="formula">500 · 0,8^{2} = 320</p>

    <p>
      De waarde wordt dus steeds kleiner, maar telkens met dezelfde factor.
    </p>

    <div class="callout">
      <p><strong>Groeifactor herkennen:</strong></p>
      <p>
        <span class="formula-inline">g > 1</span> → exponentiële groei.
      </p>
      <p>
        <span class="formula-inline">0 &lt; g &lt; 1</span> → exponentieel verval.
      </p>
      <p>
        <span class="formula-inline">g = 1</span> → constante waarde.
      </p>
    </div>


    <h3>De grafiek van een exponentiële functie</h3>

    <p>
      Een exponentiële grafiek heeft een ander gedrag dan de rechte van een
      lineaire functie.
    </p>

    <p>
      Bij exponentiële groei wordt de toename steeds groter.
      Bij exponentieel verval wordt de waarde steeds kleiner.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">f(x) = 2^{x}</p>

    <p>
      geldt:
    </p>

    <p class="formula">f(0) = 1</p>

    <p>
      De grafiek gaat dus door:
    </p>

    <p class="formula">(0, 1)</p>

    <p>
      Voor negatieve waarden van <span class="formula-inline">x</span>
      worden de waarden kleiner.
    </p>


    <h3>Exponentiële groei tegenover lineaire groei</h3>

    <div class="theory-image">
      <img
        src="assets/groei-vs-rechte.svg"
        alt="Een lineaire en een exponentiële groeicurve met hetzelfde beginpunt."
      >
    </div>

    <p>
      Vergelijk:
    </p>

    <p class="formula">f(x) = 100 + 20x</p>

    <p>
      met:
    </p>

    <p class="formula">g(x) = 100 · 1,2^{x}</p>

    <p>
      De lineaire functie voegt telkens 20 toe.
      De exponentiële functie vermenigvuldigt telkens met 1,2.
    </p>

    <p>
      Bij kleine waarden van <span class="formula-inline">x</span> kunnen de
      verschillen beperkt lijken. Naarmate <span class="formula-inline">x</span>
      groter wordt, kan de exponentiële functie veel sneller groeien.
    </p>

    <p>
      Dat komt doordat bij exponentiële groei niet alleen de waarde verandert,
      maar ook de <strong>toename zelf</strong>.
    </p>


    <h3>Een exponentiële vergelijking</h3>

    <p>
      Soms kennen we de uitvoer en zoeken we de invoer.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2^{x} = 8</p>

    <p>
      Omdat:
    </p>

    <p class="formula">2^{3} = 8</p>

    <p>
      weten we:
    </p>

    <p class="formula">x = 3</p>

    <p>
      Maar bij:
    </p>

    <p class="formula">2^{x} = 10</p>

    <p>
      is de oplossing geen eenvoudig geheel getal.
      We hebben een nieuwe bewerking nodig om de exponent terug te vinden.
    </p>


    <h3>De logaritme als omgekeerde bewerking</h3>

    <p>
      Optellen en aftrekken zijn omgekeerde bewerkingen.
      Vermenigvuldigen en delen ook.
    </p>

    <p>
      Op dezelfde manier is een logaritme de omgekeerde bewerking van
      machtsverheffen.
    </p>

    <p>
      De vraag:
    </p>

    <p class="formula">2^{x} = 8</p>

    <p>
      kunnen we schrijven als:
    </p>

    <p class="formula">x = log_{2}(8)</p>

    <p>
      De logaritme vraagt:
    </p>

    <p>
      <strong>
        Tot welke macht moet ik het grondtal verheffen om de gegeven waarde
        te krijgen?
      </strong>
    </p>

    <p>
      Omdat:
    </p>

    <p class="formula">2^{3} = 8</p>

    <p>
      geldt:
    </p>

    <p class="formula">log_{2}(8) = 3</p>

    <div class="callout">
      <p><strong>De kern van een logaritme:</strong></p>
      <p>
        <span class="formula-inline">log_{b}(a) = x</span> betekent precies:
      </p>
      <p class="formula">b^{x} = a</p>
    </div>


    <h3>Van logaritme naar macht en terug</h3>

    <p>
      Een belangrijke vaardigheid is kunnen wisselen tussen beide vormen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">log_{2}(32) = 5</p>

    <p>
      betekent:
    </p>

    <p class="formula">2^{5} = 32</p>

    <p>
      Omgekeerd:
    </p>

    <p class="formula">10^{3} = 1000</p>

    <p>
      betekent:
    </p>

    <p class="formula">log_{10}(1000) = 3</p>

    <p>
      De logaritme is dus geen volledig nieuwe wereld:
      ze stelt de omgekeerde vraag bij een macht.
    </p>


    <h3>Belangrijke logaritmen</h3>

    <p>
      Enkele logaritmen komen bijzonder vaak voor.
    </p>

    <p>
      Omdat:
    </p>

    <p class="formula">b^{0} = 1</p>

    <p>
      geldt:
    </p>

    <p class="formula">log_{b}(1) = 0</p>

    <p>
      Voor basis 10 schrijven we vaak gewoon:
    </p>

    <p class="formula">log(1000)</p>

    <p>
      waarmee we bedoelen:
    </p>

    <p class="formula">log_{10}(1000)</p>

    <p>
      Omdat:
    </p>

    <p class="formula">10^{3} = 1000</p>

    <p>
      geldt:
    </p>

    <p class="formula">log(1000) = 3</p>

    <p>
      Er bestaat ook een bijzonder belangrijke basis:
    </p>

    <p class="formula">e ≈ 2,71828</p>

    <p>
      De logaritme met basis <span class="formula-inline">e</span> noemen we
      de <strong>natuurlijke logaritme</strong>:
    </p>

    <p class="formula">ln(x) = log_{e}(x)</p>

    <p>
      De natuurlijke logaritme wordt later bijzonder belangrijk bij continue
      groei, afgeleiden en integralen. Hier volstaat het om het begrip en de
      notatie te herkennen.
    </p>


    <h3>Inverse functies</h3>

    <div class="theory-image">
      <img
        src="assets/exp-log-invers.svg"
        alt="Een exponentiële en logaritmische grafiek als elkaars inverse."
      >
    </div>

    <p>
      De exponentiële functie en de logaritmische functie zijn
      <strong>inverse functies</strong>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2^{4} = 16</p>

    <p>
      en:
    </p>

    <p class="formula">log_{2}(16) = 4</p>

    <p>
      De ene bewerking gaat van exponent naar waarde.
      De andere gaat van waarde terug naar exponent.
    </p>

    <p>
      Daarom zijn de grafieken van:
    </p>

    <p class="formula">y = b^{x}</p>

    <p>
      en:
    </p>

    <p class="formula">y = log_{b}(x)</p>

    <p>
      elkaars spiegelbeeld in:
    </p>

    <p class="formula">y = x</p>


    <h3>Een exponentiële vergelijking oplossen met een logaritme</h3>

    <p>
      Stel:
    </p>

    <p class="formula">2^{x} = 10</p>

    <p>
      We nemen aan beide kanten de logaritme met basis 2:
    </p>

    <p class="formula">log_{2}(2^{x}) = log_{2}(10)</p>

    <p>
      Omdat de logaritme de machtsverheffing met dezelfde basis ongedaan maakt,
      krijgen we:
    </p>

    <p class="formula">x = log_{2}(10)</p>

    <p>
      Met een rekenmachine vinden we ongeveer:
    </p>

    <p class="formula">x ≈ 3,32</p>

    <p>
      De logaritme maakt het dus mogelijk om een exponent te vinden die niet
      eenvoudig uit het hoofd kan worden bepaald.
    </p>


    <h3>De grondtalwissel</h3>

    <p>
      Een rekenmachine heeft meestal toetsen voor de logaritme met basis 10
      en voor de natuurlijke logaritme. Toch kunnen we ook andere bases
      berekenen.
    </p>

    <p>
      Hiervoor gebruiken we de grondtalwissel:
    </p>

    <p class="formula">
      log_{b}(x) = \\frac{log(x)}{log(b)}
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      log_{2}(10) = \\frac{log(10)}{log(2)}
    </p>

    <p>
      De grondtalwissel is vooral een praktisch hulpmiddel:
      hij maakt een logaritme met een willekeurige basis berekenbaar met
      standaardfuncties op een rekenmachine.
    </p>


    <h3>Logaritmeregels herkennen</h3>

    <p>
      Logaritmen hebben enkele belangrijke eigenschappen die rechtstreeks
      samenhangen met de rekenregels voor machten.
    </p>

    <p>
      Voor vermenigvuldiging geldt:
    </p>

    <p class="formula">
      log_{b}(xy) = log_{b}(x) + log_{b}(y)
    </p>

    <p>
      Een product wordt dus een som.
    </p>

    <p>
      Voor een macht geldt:
    </p>

    <p class="formula">
      log_{b}(x^{n}) = n · log_{b}(x)
    </p>

    <p>
      De exponent komt dus voor de logaritme te staan.
    </p>

    <p>
      Deze regels zijn nuttig, maar voor deze milestone is vooral belangrijk
      dat je hun betekenis herkent. Een volledige theorie van logaritmische
      rekenregels komt later terug wanneer ze nodig is.
    </p>


    <h3>Een volledig voorbeeld: bacteriegroei</h3>

    <p>
      Stel dat een bacteriepopulatie aanvankelijk 500 bacteriën bevat en
      ieder uur verdubbelt.
    </p>

    <p>
      Het exponentiële model is:
    </p>

    <p class="formula">N(t) = 500 · 2^{t}</p>

    <p>
      Na 3 uur:
    </p>

    <p class="formula">N(3) = 500 · 2^{3} = 4000</p>

    <p>
      We willen weten wanneer de populatie 10.000 bacteriën bereikt.
    </p>

    <p>
      We stellen de uitvoer gelijk aan 10.000:
    </p>

    <p class="formula">500 · 2^{t} = 10000</p>

    <p>
      Deel door 500:
    </p>

    <p class="formula">2^{t} = 20</p>

    <p>
      Nu gebruiken we een logaritme:
    </p>

    <p class="formula">t = log_{2}(20)</p>

    <p>
      Dus ongeveer:
    </p>

    <p class="formula">t ≈ 4,32</p>

    <p>
      Volgens dit model bereikt de populatie na ongeveer 4,32 uur
      de waarde 10.000.
    </p>

    <p>
      Hier zien we de volledige keten:
    </p>

    <p class="formula">
      werkelijkheid → exponentiële functie → vergelijking → logaritme
    </p>


    <h3>Domein en basis van een logaritme</h3>

    <p>
      Een reële logaritme is niet voor iedere invoer gedefinieerd.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">log_{b}(x)</p>

    <p>
      moet gelden:
    </p>

    <p class="formula">x > 0</p>

    <p>
      De logaritme van nul en van een negatief getal is binnen de reële
      getallen niet gedefinieerd.
    </p>

    <p>
      Ook voor de basis gelden voorwaarden:
    </p>

    <p class="formula">b > 0</p>

    <p class="formula">b \\neq 1</p>

    <p>
      De basis 1 kan niet gebruikt worden omdat:
    </p>

    <p class="formula">1^{x} = 1</p>

    <p>
      voor iedere <span class="formula-inline">x</span>.
    </p>


    <h3>Een exponentieel model herkennen</h3>

    <p>
      Wanneer je een situatie als exponentieel model wilt beschrijven,
      kun je steeds dezelfde vragen stellen:
    </p>

    <ol>
      <li>Wat is de beginwaarde?</li>
      <li>Wordt de grootheid telkens met dezelfde factor vermenigvuldigd?</li>
      <li>Wat is de groeifactor?</li>
      <li>Over welke periode of stap gaat het?</li>
      <li>Is er sprake van groei of verval?</li>
    </ol>

    <p>
      Als de beginwaarde <span class="formula-inline">b</span> is en de
      groeifactor <span class="formula-inline">g</span>, schrijven we:
    </p>

    <p class="formula">f(x) = b · g^{x}</p>

    <p>
      Staat de onbekende vervolgens in de exponent, dan is een logaritme
      het natuurlijke hulpmiddel.
    </p>


    <h3>Wanneer gebruik je een logaritme?</h3>

    <p>
      Een logaritme gebruik je vooral wanneer de onbekende in een exponent
      staat.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2^{x} = 50</p>

    <p>
      of:
    </p>

    <p class="formula">100 · 1,03^{x} = 150</p>

    <p>
      In beide gevallen is <span class="formula-inline">x</span> de exponent
      die we zoeken.
    </p>

    <p>
      De logaritme geeft een systematische manier om die exponent te bepalen.
    </p>


    <h3>Veelgemaakte fouten</h3>

    <p>
      <strong>Fout 1: exponentiële groei verwarren met lineaire groei.</strong>
    </p>

    <p>
      Bij lineaire groei komt telkens dezelfde hoeveelheid erbij.
      Bij exponentiële groei wordt telkens met dezelfde factor vermenigvuldigd.
    </p>

    <p>
      <strong>Fout 2: een percentage rechtstreeks als groeifactor gebruiken.</strong>
    </p>

    <p>
      Bij 5% groei is de groeifactor:
    </p>

    <p class="formula">1,05</p>

    <p>
      en niet 0,05.
    </p>

    <p>
      <strong>Fout 3: een dalingspercentage verwarren met een negatieve factor.</strong>
    </p>

    <p>
      Bij 20% daling blijft 80% over:
    </p>

    <p class="formula">g = 0,80</p>

    <p>
      <strong>Fout 4: een logaritme zien als een gewone bewerking op een getal.</strong>
    </p>

    <p>
      Een logaritme vraagt welke exponent nodig is om een bepaalde waarde
      te verkrijgen.
    </p>

    <p>
      <strong>Fout 5: vergeten dat het argument van een reële logaritme positief moet zijn.</strong>
    </p>

    <p>
      Voor <span class="formula-inline">log_{b}(x)</span> moet gelden:
    </p>

    <p class="formula">x > 0</p>


    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Bepaal wat de grootheid en de invoer voorstellen.</li>
      <li>Kijk of er telkens een vaste hoeveelheid wordt toegevoegd of afgetrokken.</li>
      <li>Kijk of er telkens met een vaste factor wordt vermenigvuldigd.</li>
      <li>Bij een vaste factor: bepaal de beginwaarde en groeifactor.</li>
      <li>Schrijf het exponentiële model.</li>
      <li>Als de onbekende in de exponent staat, gebruik je een logaritme.</li>
      <li>Controleer of de gevonden oplossing betekenis heeft binnen de oorspronkelijke situatie.</li>
    </ol>

    <p>
      Zo kun je een groeiprobleem stap voor stap vertalen:
    </p>

    <p class="formula">
      werkelijkheid → model → vergelijking → logaritme
    </p>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Exponentiële groei ontstaat wanneer een grootheid telkens met dezelfde
      factor wordt vermenigvuldigd.
    </p>

    <p>
      Een eenvoudig exponentieel model heeft de vorm:
    </p>

    <p class="formula">f(x) = b · g^{x}</p>

    <p>
      waarbij <span class="formula-inline">b</span> de beginwaarde is en
      <span class="formula-inline">g</span> de groeifactor.
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">g > 1</p>

    <p>
      spreken we van exponentiële groei.
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">0 < g < 1</p>

    <p>
      spreken we van exponentieel verval.
    </p>

    <p>
      Een groeipercentage kunnen we omzetten naar een groeifactor.
      Bij <span class="formula-inline">p</span> procent groei, geschreven
      als decimaal:
    </p>

    <p class="formula">g = 1 + p</p>

    <p>
      De logaritme is de inverse bewerking van machtsverheffen:
    </p>

    <p class="formula">log_{b}(a) = x</p>

    <p>
      betekent:
    </p>

    <p class="formula">b^{x} = a</p>

    <p>
      Daardoor kunnen we een onbekende exponent vinden.
    </p>

    <p>
      De exponentiële en logaritmische functies vormen dus een natuurlijk
      paar:
    </p>

    <p class="formula">macht ↔ logaritme</p>

    <p>
      In de volgende milestone maken we de laatste grote stap van Fase 2:
      we gebruiken <strong>hoeken en verhoudingen</strong> om lengtes,
      richtingen en periodieke verschijnselen te beschrijven.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Bij lineaire groei verandert een grootheid telkens met dezelfde
        hoeveelheid. Bij exponentiële groei verandert ze telkens met
        dezelfde factor.
      </p>
      <p>
        De logaritme draait exponentiële groei weer om: ze beantwoordt de
        vraag welke exponent nodig is om een bepaalde waarde te bereiken.
      </p>
    </div>
  `
},
  {
  id: "2.14",
  title: "Trigonometrie",
  goal: "Hoe verbinden we hoeken met lengtes en verhoudingen?",
  theory: /* html */`
    <h2>Trigonometrie</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe koppelen we een hoek aan verhoudingen van zijden?</li>
      <li>Waarom blijven die verhoudingen gelijk bij gelijkvormige driehoeken?</li>
      <li>Hoe gebruiken we sinus, cosinus en tangens?</li>
      <li>Hoe berekenen we een onbekende zijde of hoek?</li>
      <li>Hoe hangen sinus en cosinus samen met de eenheidscirkel?</li>
      <li>Hoe verbinden we trigonometrie met coördinaten en de helling van een rechte?</li>
      <li>Waarom worden radialen en periodieke functies belangrijk in hogere wiskunde?</li>
    </ul>

    <p>
      In les 2.10 leerden we dat gelijkvormige figuren dezelfde verhoudingen
      tussen overeenkomstige zijden hebben. In les 2.8 gebruikten we coördinaten
      en de helling van een rechte.
    </p>

    <p>
      Trigonometrie brengt deze ideeën samen: een <strong>hoek</strong> bepaalt
      bepaalde <strong>verhoudingen</strong>, en die verhoudingen kunnen we
      gebruiken om lengtes, richtingen en later ook bewegingen te beschrijven.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Trigonometrie koppelt hoeken aan verhoudingen van lengtes.
        Via gelijkvormigheid blijven die verhoudingen voor een bepaalde hoek
        hetzelfde, ongeacht de grootte van de driehoek.
      </p>
      <p>
        Met de eenheidscirkel krijgen sinus en cosinus vervolgens een algemene
        betekenis die verder gaat dan rechthoekige driehoeken.
      </p>
    </div>


    <h3>De rechthoekige driehoek</h3>

    <p>
      We vertrekken van een rechthoekige driehoek. De zijde tegenover de rechte
      hoek noemen we de <strong>schuine zijde</strong> of <strong>hypotenusa</strong>.
    </p>

    <div class="theory-image">
      <img
        src="assets/driehoek-trig-zijden.svg"
        alt="Rechthoekige driehoek met de schuine, overstaande en aanliggende zijde ten opzichte van een hoek theta."
      >
    </div>

    <p>
      We bekijken één van de scherpe hoeken en noemen die hoek
      <span class="formula-inline">θ</span>.
    </p>

    <p>Ten opzichte van deze hoek onderscheiden we:</p>

    <ul>
      <li>de <strong>schuine zijde</strong>: tegenover de rechte hoek;</li>
      <li>de <strong>overstaande zijde</strong>: tegenover hoek θ;</li>
      <li>de <strong>aanliggende zijde</strong>: naast hoek θ, maar niet de schuine zijde.</li>
    </ul>

    <p>
      De woorden <strong>overstaand</strong> en <strong>aanliggend</strong>
      hangen dus af van de hoek die we bekijken.
    </p>


    <h3>Waarom kunnen we verhoudingen aan een hoek koppelen?</h3>

    <p>
      Stel dat we twee rechthoekige driehoeken hebben met dezelfde scherpe hoek.
      Volgens de eigenschappen van gelijkvormige driehoeken zijn ze gelijkvormig.
    </p>

    <p>
      Alle overeenkomstige lengtes worden dan met dezelfde factor vermenigvuldigd.
      Als teller en noemer van een verhouding beide met dezelfde factor worden
      vermenigvuldigd, verandert de verhouding niet.
    </p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">
      \frac{3}{5} = \frac{6}{10} = \frac{9}{15}
    </p>

    <p>
      De driehoeken kunnen dus verschillende afmetingen hebben, terwijl dezelfde
      hoek steeds dezelfde verhouding tussen overeenkomstige zijden geeft.
    </p>

    <div class="callout">
      <p><strong>Het belangrijke inzicht:</strong></p>
      <p>
        Een goniometrische verhouding hoort bij een hoek, niet bij één bepaalde
        driehoek.
      </p>
    </div>


    <h3>De sinus</h3>

    <p>
      De verhouding van de overstaande zijde tot de schuine zijde noemen we
      de <strong>sinus</strong> van de hoek.
    </p>

    <p class="formula">
      \sin(θ) = \frac{\text{overstaande zijde}}{\text{schuine zijde}}
    </p>

    <p>
      Stel dat de overstaande zijde 3 cm is en de schuine zijde 5 cm:
    </p>

    <p class="formula">
      \sin(θ) = \frac{3}{5} = 0,6
    </p>

    <p>
      De sinus is dus een <strong>getal</strong>: hij beschrijft een verhouding,
      geen nieuwe lengte.
    </p>


    <h3>De cosinus</h3>

    <p>
      De verhouding van de aanliggende zijde tot de schuine zijde noemen we
      de <strong>cosinus</strong>.
    </p>

    <p class="formula">
      \cos(θ) = \frac{\text{aanliggende zijde}}{\text{schuine zijde}}
    </p>

    <p>
      Als de aanliggende zijde 4 cm is en de schuine zijde 5 cm:
    </p>

    <p class="formula">
      \cos(θ) = \frac{4}{5} = 0,8
    </p>


    <h3>De tangens</h3>

    <p>
      De verhouding van de overstaande zijde tot de aanliggende zijde noemen
      we de <strong>tangens</strong>.
    </p>

    <p class="formula">
      \tan(θ) = \frac{\text{overstaande zijde}}{\text{aanliggende zijde}}
    </p>

    <p>
      Als de overstaande zijde 3 cm is en de aanliggende zijde 4 cm:
    </p>

    <p class="formula">
      \tan(θ) = \frac{3}{4}
    </p>

    <p>We hebben nu de drie fundamentele verhoudingen:</p>

    <p class="formula">
      \sin(θ) = \frac{\text{overstaande zijde}}{\text{schuine zijde}}
    </p>

    <p class="formula">
      \cos(θ) = \frac{\text{aanliggende zijde}}{\text{schuine zijde}}
    </p>

    <p class="formula">
      \tan(θ) = \frac{\text{overstaande zijde}}{\text{aanliggende zijde}}
    </p>

    <div class="callout">
      <p><strong>Geheugensteun:</strong></p>
      <p>
        sinus = overstaand / schuin
      </p>
      <p>
        cosinus = aanliggend / schuin
      </p>
      <p>
        tangens = overstaand / aanliggend
      </p>
      <p>
        De geheugensteun is nuttig, maar het belangrijkste is dat je begrijpt
        welke zijden in elke verhouding voorkomen.
      </p>
    </div>


    <h3>Een onbekende zijde berekenen</h3>

    <p>
      Trigonometrie wordt interessant wanneer één lengte onbekend is.
    </p>

    <p>
      Stel dat we een rechthoekige driehoek hebben met een hoek van 30° en
      een schuine zijde van 10 cm. We zoeken de overstaande zijde.
    </p>

    <p>
      De bekende en onbekende zijde komen samen met de schuine zijde voor in
      de sinus:
    </p>

    <p class="formula">
      \sin(30^\circ) = \frac{\text{overstaande zijde}}{10}
    </p>

    <p>Omdat:</p>

    <p class="formula">
      \sin(30^\circ) = 0,5
    </p>

    <p>volgt:</p>

    <p class="formula">
      0,5 = \frac{\text{overstaande zijde}}{10}
    </p>

    <p>Dus:</p>

    <p class="formula">
      \text{overstaande zijde} = 5\text{ cm}
    </p>

    <p>
      Het patroon is steeds hetzelfde: kies de verhouding die de bekende en
      onbekende zijden bevat en los daarna de vergelijking op.
    </p>


    <h3>Een onbekende hoek berekenen</h3>

    <p>
      We kunnen ook de omgekeerde vraag stellen. Stel dat de overstaande zijde
      3 cm is en de schuine zijde 5 cm.
    </p>

    <p class="formula">
      \sin(θ) = \frac{3}{5} = 0,6
    </p>

    <p>
      Nu kennen we de verhouding, maar zoeken we de hoek. Daarvoor gebruiken
      we de <strong>inverse sinus</strong>:
    </p>

    <p class="formula">
      θ = \sin^{-1}(0,6)
    </p>

    <p>Dit geeft ongeveer:</p>

    <p class="formula">
      θ \approx 36,87^\circ
    </p>

    <p>
      De inverse sinus beantwoordt dus de vraag:
      <strong>welke hoek heeft een sinus van 0,6?</strong>
    </p>

    <p>
      Op dezelfde manier bestaan:
    </p>

    <p class="formula">
      \cos^{-1}(x)
    </p>

    <p class="formula">
      \tan^{-1}(x)
    </p>


    <h3>Welke verhouding kies je?</h3>

    <p>
      Je hoeft sinus, cosinus en tangens niet blind uit het hoofd te kiezen.
      Kijk eerst welke zijden je kent en welke je zoekt.
    </p>

    <ol>
      <li>Markeer de gegeven hoek.</li>
      <li>Zoek de schuine zijde.</li>
      <li>Bepaal welke zijde overstaand is.</li>
      <li>Bepaal welke zijde aanliggend is.</li>
      <li>Kies de verhouding waarin de bekende en onbekende zijden voorkomen.</li>
      <li>Schrijf de verhouding eerst op.</li>
      <li>Los daarna de vergelijking op.</li>
    </ol>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \sin = \frac{\text{overstaand}}{\text{schuin}}
    </p>

    <p class="formula">
      \cos = \frac{\text{aanliggend}}{\text{schuin}}
    </p>

    <p class="formula">
      \tan = \frac{\text{overstaand}}{\text{aanliggend}}
    </p>

    <p>
      De keuze volgt dus uit de structuur van het probleem.
    </p>


    <h3>Een volledig voorbeeld: de hoogte van een gebouw</h3>

    <p>
      Je staat 30 meter van een gebouw. De hoek tussen de horizontale grond
      en je zichtlijn naar de top is 40°.
    </p>

    <p>
      In het eenvoudige model vormt de situatie een rechthoekige driehoek.
      De afstand van 30 meter is de aanliggende zijde en de hoogte van het
      gebouw is de overstaande zijde.
    </p>

    <p>
      We gebruiken daarom de tangens:
    </p>

    <p class="formula">
      \tan(40^\circ) =
      \frac{\text{hoogte}}{30}
    </p>

    <p>Dus:</p>

    <p class="formula">
      \text{hoogte} = 30 \cdot \tan(40^\circ)
    </p>

    <p>Daaruit volgt ongeveer:</p>

    <p class="formula">
      \text{hoogte} \approx 25,2\text{ m}
    </p>

    <p>
      Met één hoek en één gemeten afstand kunnen we dus een andere lengte
      bepalen.
    </p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Eerst herkennen we de geometrische structuur. Daarna kiezen we de
        juiste verhouding. Pas daarna rekenen we.
      </p>
    </div>


    <h3>Sinus en cosinus hangen samen met Pythagoras</h3>

    <p>
      De drie goniometrische functies zijn niet volledig los van elkaar.
      Uit de definities van sinus en cosinus en de stelling van Pythagoras
      volgt een belangrijke identiteit.
    </p>

    <p>Voor een rechthoekige driehoek met schuine zijde c:</p>

    <p class="formula">
      a^2 + b^2 = c^2
    </p>

    <p>Als:</p>

    <p class="formula">
      \sin(θ) = \frac{a}{c}
    </p>

    <p>en:</p>

    <p class="formula">
      \cos(θ) = \frac{b}{c}
    </p>

    <p>dan volgt:</p>

    <p class="formula">
      \sin^2(θ) + \cos^2(θ) = 1
    </p>

    <p>
      Dit is een eerste voorbeeld van een <strong>goniometrische identiteit</strong>:
      een verband dat voor alle toegelaten hoeken geldt.
    </p>

    <p>
      De identiteit is dus geen nieuwe losstaande regel. Ze is rechtstreeks
      verbonden met de geometrie van de rechthoekige driehoek.
    </p>


    <h3>Van graden naar radialen</h3>

    <p>
      Tot nu toe hebben we hoeken vooral in graden uitgedrukt. In hogere
      wiskunde wordt echter vaak de <strong>radiaal</strong> gebruikt.
    </p>

    <p>Een volledige omwenteling is:</p>

    <p class="formula">
      360^\circ = 2\pi\text{ rad}
    </p>

    <p>Daaruit volgen:</p>

    <p class="formula">
      180^\circ = \pi\text{ rad}
    </p>

    <p class="formula">
      90^\circ = \frac{\pi}{2}\text{ rad}
    </p>

    <p>
      Radialen zijn belangrijk omdat ze een directe relatie leggen tussen een
      hoek en de booglengte op een cirkel.
    </p>

    <div class="callout">
      <p><strong>Brug naar hogere wiskunde:</strong></p>
      <p>
        In de volgende fase worden radialen de natuurlijke manier om hoeken
        te beschrijven wanneer we met functies, verandering en analyse werken.
      </p>
    </div>


    <h3>De eenheidscirkel</h3>

    <p>
      Tot nu toe gebruikten we sinus en cosinus in een rechthoekige driehoek.
      Dezelfde functies kunnen veel algemener worden opgevat met de
      <strong>eenheidscirkel</strong>: een cirkel met straal 1.
    </p>

    <div class="theory-image">
      <img
        src="assets/eenheidscirkel-sin-cos.svg"
        alt="Eenheidscirkel met een hoek theta en een punt waarvan de horizontale en verticale coördinaten cosinus en sinus zijn."
      >
    </div>

    <div data-widget="unitcircle"></div>

    <p>
      Bij een hoek θ hoort op de eenheidscirkel een punt.
      De coördinaten van dat punt zijn:
    </p>

    <p class="formula">
      (\cos(θ), \sin(θ))
    </p>

    <p>Dus:</p>

    <p class="formula">
      x = \cos(θ)
    </p>

    <p class="formula">
      y = \sin(θ)
    </p>

    <p>
      Omdat het punt op een cirkel met straal 1 ligt:
    </p>

    <p class="formula">
      x^2 + y^2 = 1
    </p>

    <p>
      Invullen van de coördinaten geeft opnieuw:
    </p>

    <p class="formula">
      \cos^2(θ) + \sin^2(θ) = 1
    </p>

    <p>
      De identiteit die we eerst uit een rechthoekige driehoek vonden, verschijnt
      hier dus opnieuw als een rechtstreeks gevolg van de geometrie van de
      eenheidscirkel.
    </p>


    <h3>Waarom is de eenheidscirkel zo belangrijk?</h3>

    <p>
      De eenheidscirkel laat ons toe om sinus en cosinus ook voor hoeken groter
      dan 90° te definiëren.
    </p>

    <p>
      Voor een hoek tussen 90° en 180° ligt het punt bijvoorbeeld in het tweede
      kwadrant. De x-coördinaat is daar negatief, terwijl de y-coördinaat
      positief blijft.
    </p>

    <p>Daarom:</p>

    <p class="formula">
      \cos(θ) < 0
    </p>

    <p class="formula">
      \sin(θ) > 0
    </p>

    <p>
      De goniometrische functies zijn daardoor niet langer beperkt tot de
      scherpe hoeken van één rechthoekige driehoek.
    </p>


    <h3>De tangens als verhouding van sinus en cosinus</h3>

    <p>
      Uit de definities van sinus en cosinus volgt:
    </p>

    <p class="formula">
      \tan(θ) = \frac{\sin(θ)}{\cos(θ)}
    </p>

    <p>
      De schuine zijde valt bij het delen van beide verhoudingen weg.
      Daardoor krijgen we opnieuw:
    </p>

    <p class="formula">
      \tan(θ) =
      \frac{\text{overstaande zijde}}{\text{aanliggende zijde}}
    </p>

    <p>
      Dit verklaart waarom de drie functies onderling verbonden zijn.
    </p>

    <p>
      Omdat we door de cosinus delen, is tangens niet gedefinieerd wanneer:
    </p>

    <p class="formula">
      \cos(θ) = 0
    </p>

    <p>
      Dat gebeurt bijvoorbeeld bij 90° en 270°.
    </p>


    <h3>Trigonometrie en de helling van een rechte</h3>

    <p>
      In les 2.8 gebruikten we de helling van een rechte:
    </p>

    <p class="formula">
      m = \frac{\Delta y}{\Delta x}
    </p>

    <p>
      De horizontale en verticale verandering vormen samen een rechthoekige
      driehoek. Als de rechte een hoek θ maakt met de horizontale richting,
      krijgen we:
    </p>

    <p class="formula">
      \tan(θ) =
      \frac{\Delta y}{\Delta x}
    </p>

    <p>Dus:</p>

    <p class="formula">
      m = \tan(θ)
    </p>

    <p>En omgekeerd:</p>

    <p class="formula">
      θ = \tan^{-1}(m)
    </p>

    <p>
      Een helling kan dus ook worden geïnterpreteerd als een hoek.
      Daarmee verbinden we analytische meetkunde met trigonometrie.
    </p>


    <h3>Van een hoek naar richting en componenten</h3>

    <p>
      Op de eenheidscirkel wordt een hoek rechtstreeks vertaald naar een
      horizontale en verticale component:
    </p>

    <p class="formula">
      (\cos(θ), \sin(θ))
    </p>

    <p>
      Stel dat een kracht van 10 N onder een hoek van 30° ten opzichte van
      de horizontale richting werkt. Dan kunnen we de kracht opsplitsen in
      een horizontale en verticale component:
    </p>

    <p class="formula">
      F_x = 10 \cdot \cos(30^\circ)
    </p>

    <p class="formula">
      F_y = 10 \cdot \sin(30^\circ)
    </p>

    <p>
      We hebben één grootheid met een richting dus beschreven met twee
      componenten.
    </p>

    <p>
      Dit is een eerste brug naar vectoren, die in een latere fase systematisch
      worden behandeld.
    </p>


    <h3>Van de eenheidscirkel naar periodieke functies</h3>

    <p>
      Wanneer een punt op de eenheidscirkel één volledige omwenteling maakt,
      keert het terug naar zijn beginpositie.
    </p>

    <p>
      De waarden van sinus en cosinus herhalen zich daarom telkens opnieuw.
      We noemen zulke functies <strong>periodiek</strong>.
    </p>

    <p>Een volledige periode is:</p>

    <p class="formula">
      2\pi
    </p>

    <p>
      radialen, oftewel:
    </p>

    <p class="formula">
      360^\circ
    </p>

    <p>
      We kunnen sinus daardoor niet alleen zien als een verhouding in een
      driehoek, maar ook als een functie die een periodiek proces beschrijft.
    </p>


    <h3>Amplitude: hoe groot is de uitslag?</h3>

    <p>
      Een eenvoudige sinusfunctie heeft bijvoorbeeld de vorm:
    </p>

    <p class="formula">
      f(x) = A \cdot \sin(x)
    </p>

    <p>
      De factor <span class="formula-inline">A</span> bepaalt hoe groot de
      maximale uitslag wordt.
    </p>

    <p>De amplitude is:</p>

    <p class="formula">
      |A|
    </p>

    <p>
      Bij <span class="formula-inline">A = 2</span> ligt de functie bijvoorbeeld
      tussen −2 en 2.
    </p>

    <p class="formula">
      -2 \leq 2\sin(x) \leq 2
    </p>

    <p>
      We behandelen amplitude hier alleen als eerste kennismaking. In de
      volgende fase kunnen functies en hun verandering veel systematischer
      worden onderzocht.
    </p>


    <h3>Een periodiek verschijnsel modelleren</h3>

    <p>
      Stel dat een punt op een cirkel met straal 2 m beweegt.
      De verticale positie ten opzichte van het middelpunt kan worden
      beschreven door:
    </p>

    <p class="formula">
      y = 2 \cdot \sin(θ)
    </p>

    <p>
      Wanneer θ verandert, verandert de hoogte. Na één volledige omwenteling
      keert dezelfde waarde terug.
    </p>

    <p>
      Hetzelfde soort model kan worden gebruikt voor trillingen, golven en
      andere verschijnselen die zich periodiek herhalen.
    </p>

    <div class="callout">
      <p><strong>Brug naar Fase 3:</strong></p>
      <p>
        In Fase 2 gebruikten we functies vooral om verbanden te beschrijven.
        In Fase 3 gaan we onderzoeken hoe functies veranderen.
      </p>
      <p>
        Sinusfuncties zijn daarbij een eerste belangrijk voorbeeld van functies
        die blijven veranderen en toch een herkenbaar patroon behouden.
      </p>
    </div>


    <h3>Veelgemaakte fouten</h3>

    <p><strong>Fout 1: de verkeerde zijde benoemen.</strong></p>
    <p>
      Overstaand en aanliggend worden altijd bepaald ten opzichte van de
      gekozen hoek.
    </p>

    <p><strong>Fout 2: de schuine zijde verkeerd herkennen.</strong></p>
    <p>
      De schuine zijde ligt altijd tegenover de rechte hoek.
    </p>

    <p><strong>Fout 3: de verkeerde goniometrische verhouding kiezen.</strong></p>
    <p>
      Kijk eerst welke twee zijden bekend zijn en welke zijde je zoekt.
    </p>

    <p><strong>Fout 4: graden en radialen verwarren.</strong></p>
    <p>
      Controleer altijd de hoekeenheid van je rekenmachine.
    </p>

    <p><strong>Fout 5: een inverse functie verwarren met een breuk.</strong></p>

    <p class="formula">
      \sin^{-1}(x)
    </p>

    <p>
      betekent hier de inverse sinusfunctie, niet:
    </p>

    <p class="formula">
      \frac{1}{\sin(x)}
    </p>

    <p><strong>Fout 6: te vroeg afronden.</strong></p>
    <p>
      Bewaar voldoende decimalen tijdens de berekening en rond pas op het einde af.
    </p>


    <h3>Een vaste werkwijze</h3>

    <p>Bij een trigonometrisch probleem:</p>

    <ol>
      <li>teken de situatie indien nodig;</li>
      <li>markeer de gegeven hoek;</li>
      <li>herken de schuine, overstaande en aanliggende zijde;</li>
      <li>bepaal welke lengtes of hoeken bekend zijn;</li>
      <li>kies sinus, cosinus of tangens;</li>
      <li>schrijf de verhouding op;</li>
      <li>los de vergelijking op;</li>
      <li>gebruik een inverse goniometrische functie als je een hoek zoekt;</li>
      <li>controleer of de uitkomst logisch is;</li>
      <li>controleer graden/radialen op de rekenmachine.</li>
    </ol>

    <p>
      Bij problemen met grotere hoeken of richtingen vormt de eenheidscirkel
      het algemene kader.
    </p>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Trigonometrie begint met een eenvoudig idee:
      <strong>een hoek bepaalt verhoudingen tussen lengtes</strong>.
    </p>

    <p>In een rechthoekige driehoek zijn de belangrijkste verhoudingen:</p>

    <p class="formula">
      \sin(θ) =
      \frac{\text{overstaande zijde}}{\text{schuine zijde}}
    </p>

    <p class="formula">
      \cos(θ) =
      \frac{\text{aanliggende zijde}}{\text{schuine zijde}}
    </p>

    <p class="formula">
      \tan(θ) =
      \frac{\text{overstaande zijde}}{\text{aanliggende zijde}}
    </p>

    <p>
      Met deze verhoudingen kunnen we onbekende lengtes en hoeken berekenen.
    </p>

    <p>
      Gelijkvormigheid verklaart waarom de verhoudingen voor een bepaalde hoek
      onafhankelijk zijn van de grootte van de driehoek.
    </p>

    <p>
      De eenheidscirkel breidt het idee uit naar algemene hoeken:
    </p>

    <p class="formula">
      (\cos(θ), \sin(θ))
    </p>

    <p>
      Daardoor kunnen we trigonometrie verbinden met coördinaten, richtingen
      en componenten.
    </p>

    <p>
      De tangens verbindt trigonometrie rechtstreeks met de helling van een rechte:
    </p>

    <p class="formula">
      m = \tan(θ)
    </p>

    <p>
      Ten slotte zien we dat sinus en cosinus periodieke functies zijn.
      Daarmee ontstaat een natuurlijke overgang naar functies die voortdurend
      veranderen.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Trigonometrie is de taal waarin <strong>hoeken, verhoudingen,
        richtingen en periodieke verschijnselen</strong> met elkaar worden
        verbonden.
      </p>
      <p>
        Vanuit rechthoekige driehoeken en gelijkvormigheid groeien sinus,
        cosinus en tangens uit tot functies die we met de eenheidscirkel,
        coördinaten en periodieke bewegingen kunnen verbinden.
      </p>
    </div>


    <h3>Van Fase 2 naar Fase 3</h3>

    <p>
      In Fase 2 hebben we algebra, vergelijkingen, ongelijkheden, meetkunde
      en functies opgebouwd.
    </p>

    <p>
      Met exponentiële en logaritmische functies leerden we verschillende
      soorten groei en inverse bewerkingen beschrijven.
    </p>

    <p>
      Met trigonometrie hebben we daar nu hoeken, richtingen en periodieke
      functies aan toegevoegd.
    </p>

    <p>
      De volgende vraag ligt voor de hand:
    </p>

    <p>
      <strong>Hoe beschrijven we niet alleen een functie, maar ook hoe snel
      die functie verandert?</strong>
    </p>

    <p>
      Dat is het vertrekpunt van de volgende fase: verandering, limieten
      en afgeleiden.
    </p>
  `
}
]
