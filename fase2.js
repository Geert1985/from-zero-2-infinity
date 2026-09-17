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
      <li>begrijpen dat een algebraïsche uitdrukking een algemene structuur beschrijft die verschillende waarden kan aannemen</li>
      <li>waarden correct invullen in een uitdrukking</li>
      <li>gelijksoortige termen herkennen en samennemen</li>
    </ul>

    <h3>1. Van een bekend getal naar een letter</h3>

    <p>In Fase 1 rekenden we met concrete getallen. Een tas kost 12 euro. Twee tassen kosten:</p>

    <p class="formula">2 · 12 = 24</p>

    <div class="callout">
      <strong>Vanaf nu schrijven we het maalteken als een punt (·).</strong>
      <p>Dat doen we omdat we in de algebra ook letters gebruiken.</p>
      <p>Het gewone maalteken × kan dan gemakkelijk verward worden met de letter x, die we als variabele kunnen gebruiken.</p>
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
      <strong>Een variabele is een letter die een getal voorstelt.</strong>
      <p>De waarde van die variabele kan nog onbekend zijn, of verschillende toegelaten waarden aannemen.</p>
    </div>


    <h3>2. Onbekende of veranderlijke?</h3>

    <p>Hetzelfde symbool kan in verschillende situaties een andere rol spelen.</p>

    <p>In:</p>

    <p class="formula">x + 3 = 7</p>

    <p>zoeken we naar de waarde van x die de vergelijking waar maakt. Hier spreken we over een <strong>onbekende</strong>.</p>

    <p>In:</p>

    <p class="formula">y = 2x + 1</p>

    <p>kan x verschillende waarden aannemen. Voor elke toegelaten waarde van x krijgen we een waarde van y. Hier is x een <strong>veranderlijke</strong>.</p>

    <p>De begrippen overlappen dus, maar leggen een ander accent: bij een onbekende willen we een waarde bepalen; bij een veranderlijke onderzoeken we hoe een uitdrukking of grootheid verandert wanneer de waarde verandert.</p>

    <div class="callout">
      <strong>De context bepaalt welke rol een letter speelt.</strong>
      <p>Een letter is niet uit zichzelf een "onbekende" of een "veranderlijke". Die betekenis volgt uit wat we met de letter willen doen.</p>
    </div>


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

    <div class="callout">
      <strong>Let op:</strong>
      <span class="formula-inline">3x</span> betekent <strong>3 keer x</strong>, niet 3 + x.
      Het ontbreken van het vermenigvuldigingsteken is een belangrijke afspraak in de algebra.
    </div>


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

    <p>zijn de termen <span class="formula-inline">−4x</span>, <span class="formula-inline">7</span> en <span class="formula-inline">−2x</span>.</p>

    <p>Het minteken hoort bij de term die erop volgt.</p>


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
      <p>Een uitdrukking geeft een hoeveelheid of berekening weer.</p>
      <p>Een vergelijking stelt dat twee uitdrukkingen gelijk zijn.</p>
    </div>


    <h3>6. Een uitdrukking is een algemene structuur</h3>

    <p>Een belangrijk idee van algebra is dat een uitdrukking niet één specifieke berekening hoeft te zijn.</p>

    <p>Neem:</p>

    <p class="formula">3x + 5</p>

    <p>De structuur blijft hetzelfde, maar de uiteindelijke waarde verandert wanneer x verandert.</p>

    <p>Voor x = 2:</p>

    <p class="formula">3 · 2 + 5 = 11</p>

    <p>Voor x = 10:</p>

    <p class="formula">3 · 10 + 5 = 35</p>

    <p>De uitdrukking <span class="formula-inline">3x + 5</span> heeft dus geen vaste numerieke waarde zolang we de waarde van x niet kennen of kiezen.</p>

    <div class="callout">
      <strong>De structuur blijft vast, de waarden kunnen veranderen.</strong>
      <p>Dat is precies waarom algebra krachtig is: één formule kan een hele verzameling situaties beschrijven.</p>
    </div>


    <h3>7. Een waarde invullen</h3>

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


    <h3>8. Dezelfde letter kan verschillende waarden aannemen</h3>

    <p>Een variabele staat niet vast op één getal.</p>

    <p>Als:</p>

    <p class="formula">A = 2x + 1</p>

    <p>dan kunnen we bijvoorbeeld berekenen:</p>

    <p class="formula">x = 0 → A = 1</p>

    <p class="formula">x = 1 → A = 3</p>

    <p class="formula">x = 5 → A = 11</p>

    <p>De formule beschrijft daarmee een hele verzameling mogelijke situaties.</p>

    <p>Welke waarden werkelijk zijn toegestaan, hangt af van de context. Een lengte kan bijvoorbeeld niet negatief zijn.</p>

    <div class="callout">
      <p><strong>Een formule krijgt betekenis door haar context.</strong></p>
      <p>Niet elke wiskundig mogelijke waarde van een variabele hoeft in de werkelijkheid toegelaten te zijn.</p>
    </div>


    <h3>9. Gelijksoortige termen</h3>

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


    <h3>10. Van één situatie naar veel situaties</h3>

    <p>Algebra wordt vooral krachtig wanneer we een algemene regel kunnen formuleren.</p>

    <p>Stel dat een taxi een vaste startkost van 4 euro heeft en daarna 2 euro per kilometer aanrekent.</p>

    <p>Als <strong>k</strong> het aantal gereden kilometers voorstelt, kunnen we de totale prijs schrijven als:</p>

    <p class="formula">P = 4 + 2k</p>

    <p>Voor 3 kilometer:</p>

    <p class="formula">P = 4 + 2 · 3 = 10</p>

    <p>Voor 8 kilometer:</p>

    <p class="formula">P = 4 + 2 · 8 = 20</p>

    <p>Dezelfde algebraïsche structuur werkt dus voor verschillende situaties.</p>

    <div class="callout">
      <strong>Algebra beschrijft niet alleen één antwoord, maar een regel.</strong>
      <p>Door een andere waarde in te vullen, gebruiken we dezelfde regel voor een andere situatie.</p>
    </div>


    <h3>11. Een variabele kan een grootheid voorstellen</h3>

    <p>Een variabele kan ook een fysische of meetkundige grootheid voorstellen.</p>

    <p>Als <span class="formula-inline">l</span> de lengte en <span class="formula-inline">b</span> de breedte van een rechthoek voorstellen, dan is de oppervlakte:</p>

    <p class="formula">A = l · b</p>

    <p>Als bijvoorbeeld:</p>

    <p class="formula">l = 8</p>

    <p class="formula">b = 5</p>

    <p>dan krijgen we:</p>

    <p class="formula">A = 8 · 5 = 40</p>

    <p>De letters maken het mogelijk om eerst een algemene formule op te stellen en pas daarna concrete waarden in te vullen.</p>


    <h3>12. Wat we nu met algebra kunnen doen</h3>

    <p>Met de ideeën uit deze les kunnen we:</p>

    <ul>
      <li>een concrete situatie algemeen beschrijven;</li>
      <li>letters gebruiken voor onbekende of veranderlijke waarden;</li>
      <li>algebraïsche uitdrukkingen lezen;</li>
      <li>waarden invullen;</li>
      <li>gelijksoortige termen herkennen en samenvoegen;</li>
      <li>een algemene regel gebruiken voor veel verschillende situaties.</li>
    </ul>

    <p>We zijn daarmee een stap verder gegaan dan rekenen met afzonderlijke getallen: we kunnen nu <strong>structuren en verbanden</strong> beschrijven.</p>


    <h3>13. Vooruitblik: van uitdrukking naar functie</h3>

    <p>Een uitdrukking zoals:</p>

    <p class="formula">2x + 1</p>

    <p>kan voor verschillende waarden van x een verschillende uitkomst geven.</p>

    <p>We kunnen dat verband later formeler schrijven als:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>Dan zeggen we dat de functie <span class="formula-inline">f</span> aan elke toegelaten invoer x een uitvoer toekent.</p>

    <p>Dat idee wordt belangrijk wanneer we in een volgende fase functies, tabellen en grafieken gaan bestuderen.</p>


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
      <li>begrijpen wat een vergelijking betekent</li>
      <li>een vergelijking zien als een balans tussen twee uitdrukkingen</li>
      <li>begrijpen waarom dezelfde bewerking aan beide kanten nodig is</li>
      <li>eenvoudige lineaire vergelijkingen oplossen</li>
      <li>controleren of een gevonden oplossing werkelijk klopt</li>
    </ul>

    <h3>1. Wat is een vergelijking?</h3>

    <p>In 2.1 maakten we onderscheid tussen een algebraïsche uitdrukking en een vergelijking.</p>

    <p>Een uitdrukking zoals:</p>

    <p class="formula">3x + 5</p>

    <p>beschrijft een hoeveelheid of berekening.</p>

    <p>Een vergelijking bevat een gelijkheidsteken:</p>

    <p class="formula">3x + 5 = 17</p>

    <p>Het gelijkheidsteken betekent dat de linker- en rechterkant <strong>dezelfde waarde</strong> hebben.</p>

    <div class="callout">
      <strong>Een vergelijking is een bewering van gelijkheid.</strong>
      <p>We zoeken naar de waarde(n) van de onbekende waarvoor die gelijkheid waar is.</p>
    </div>


    <h3>2. De vergelijking als een balans</h3>

    <p>Een handige manier om een vergelijking te begrijpen is als een balans.</p>

    <p>Stel dat aan de linkerkant van een balans een onbekende hoeveelheid ligt en daarnaast 3 kg. Aan de rechterkant ligt 7 kg.</p>

    <p>De balans is in evenwicht wanneer:</p>

    <p class="formula">x + 3 = 7</p>

    <p>De vergelijking zegt dus niet zomaar dat we iets met x moeten uitrekenen. Ze zegt dat beide kanten dezelfde totale waarde hebben.</p>

    <div class="callout">
      <strong>Het gelijkheidsteken betekent: links = rechts.</strong>
      <p>Als we een bewerking uitvoeren, moeten we het evenwicht bewaren.</p>
    </div>


    <h3>3. De onbekende vrijmaken</h3>

    <p>Neem:</p>

    <p class="formula">x + 3 = 7</p>

    <p>We willen weten welke waarde x heeft.</p>

    <p>Om de +3 aan de linkerkant ongedaan te maken, trekken we 3 af.</p>

    <p>Maar we mogen niet alleen links 3 aftrekken. We moeten dezelfde bewerking aan beide kanten uitvoeren:</p>

    <p class="formula">x + 3 − 3 = 7 − 3</p>

    <p>Daaruit volgt:</p>

    <p class="formula">x = 4</p>

    <div class="callout">
      <strong>De kernregel:</strong>
      <p>Voer dezelfde bewerking uit aan beide kanten van een vergelijking.</p>
      <p>Zo blijft de gelijkheid behouden.</p>
    </div>


    <h3>4. Waarom mogen we aan beide kanten hetzelfde doen?</h3>

    <p>Dit volgt rechtstreeks uit de eigenschappen van gelijkheid.</p>

    <p>Als:</p>

    <p class="formula">a = b</p>

    <p>dan blijft de gelijkheid behouden wanneer we aan beide kanten hetzelfde getal optellen:</p>

    <p class="formula">a + c = b + c</p>

    <p>Hetzelfde geldt voor aftrekken:</p>

    <p class="formula">a − c = b − c</p>

    <p>en voor vermenigvuldigen:</p>

    <p class="formula">a · c = b · c</p>

    <p>en delen, zolang we niet door nul delen:</p>

    <p class="formula">a / c = b / c</p>

    <p>voor c ≠ 0.</p>

    <p>Deze regels geven de formele rechtvaardiging voor wat we bij het oplossen van vergelijkingen doen.</p>


    <h3>5. Een vergelijking oplossen door aftrekken</h3>

    <p>Bekijk:</p>

    <p class="formula">x + 8 = 13</p>

    <p>We willen x alleen aan één kant krijgen.</p>

    <p>Er staat +8 naast x. We trekken daarom 8 af aan beide kanten:</p>

    <p class="formula">x + 8 − 8 = 13 − 8</p>

    <p>Dus:</p>

    <p class="formula">x = 5</p>

    <p>We hebben de vergelijking stap voor stap vereenvoudigd zonder de gelijkheid te verbreken.</p>


    <h3>6. Een vergelijking oplossen door optellen</h3>

    <p>Niet elke vergelijking bevat een positieve term.</p>

    <p>Neem:</p>

    <p class="formula">x − 4 = 9</p>

    <p>Om −4 ongedaan te maken, tellen we 4 op bij beide kanten:</p>

    <p class="formula">x − 4 + 4 = 9 + 4</p>

    <p>Dus:</p>

    <p class="formula">x = 13</p>

    <div class="callout">
      <strong>Ongedaan maken betekent de inverse bewerking gebruiken.</strong>
      <p>Optellen maakt aftrekken ongedaan en aftrekken maakt optellen ongedaan.</p>
    </div>


    <h3>7. Vermenigvuldiging ongedaan maken</h3>

    <p>Stel:</p>

    <p class="formula">3x = 18</p>

    <p>Hier betekent 3x hetzelfde als 3 · x.</p>

    <p>Om de factor 3 ongedaan te maken, delen we beide kanten door 3:</p>

    <p class="formula">3x / 3 = 18 / 3</p>

    <p>Dus:</p>

    <p class="formula">x = 6</p>

    <p>Ook hier voeren we dezelfde bewerking aan beide kanten uit.</p>


    <h3>8. Delen ongedaan maken</h3>

    <p>Neem:</p>

    <p class="formula">x / 4 = 7</p>

    <p>Deel door 4 is de omgekeerde bewerking van vermenigvuldigen met 4.</p>

    <p>Daarom vermenigvuldigen we beide kanten met 4:</p>

    <p class="formula">4 · x / 4 = 7 · 4</p>

    <p>Dus:</p>

    <p class="formula">x = 28</p>


    <h3>9. Twee bewerkingen in één vergelijking</h3>

    <p>In veel vergelijkingen komen verschillende bewerkingen voor.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">3x + 5 = 20</p>

    <p>We maken eerst de optelling ongedaan. Trek 5 af aan beide kanten:</p>

    <p class="formula">3x = 15</p>

    <p>Daarna maken we de vermenigvuldiging met 3 ongedaan:</p>

    <p class="formula">x = 5</p>

    <p>De bewerkingen worden dus stap voor stap teruggedraaid.</p>

    <div class="callout">
      <strong>Werk systematisch.</strong>
      <p>Maak eerst de bewerking ongedaan die het verst van de onbekende verwijderd is.</p>
    </div>


    <h3>10. Vergelijkingen met de onbekende aan beide kanten</h3>

    <p>Soms komt de onbekende aan beide kanten voor.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">3x + 2 = x + 10</p>

    <p>We willen de termen met x bij elkaar brengen.</p>

    <p>Trek x af aan beide kanten:</p>

    <p class="formula">3x − x + 2 = x − x + 10</p>

    <p>Dus:</p>

    <p class="formula">2x + 2 = 10</p>

    <p>Daarna trekken we 2 af:</p>

    <p class="formula">2x = 8</p>

    <p>En delen we door 2:</p>

    <p class="formula">x = 4</p>

    <p>Ook hier blijft het principe hetzelfde: elke bewerking wordt aan beide kanten uitgevoerd.</p>


    <h3>11. Haakjes in een vergelijking</h3>

    <p>Ook haakjes kunnen voorkomen:</p>

    <p class="formula">2(x + 3) = 14</p>

    <p>Met de distributieve eigenschap krijgen we:</p>

    <p class="formula">2x + 6 = 14</p>

    <p>Daarna lossen we de vergelijking verder op:</p>

    <p class="formula">2x = 8</p>

    <p class="formula">x = 4</p>

    <p>De algebraïsche bewerkingen uit 2.2 zijn dus hulpmiddelen om vergelijkingen stap voor stap te vereenvoudigen.</p>


    <h3>12. Controleer je oplossing</h3>

    <p>Een oplossing is pas overtuigend wanneer we controleren of ze werkelijk aan de oorspronkelijke vergelijking voldoet.</p>

    <p>Neem:</p>

    <p class="formula">3x + 5 = 20</p>

    <p>We vonden:</p>

    <p class="formula">x = 5</p>

    <p>Vul x = 5 terug in de <strong>oorspronkelijke</strong> vergelijking:</p>

    <p class="formula">3 · 5 + 5 = 20</p>

    <p class="formula">15 + 5 = 20</p>

    <p class="formula">20 = 20</p>

    <p>De oplossing klopt.</p>

    <div class="callout">
      <strong>Controle:</strong>
      <p>Vervang de onbekende door je gevonden waarde in de oorspronkelijke vergelijking.</p>
      <p>Als links en rechts dezelfde waarde geven, voldoet de waarde aan de vergelijking.</p>
    </div>


    <h3>13. Niet elke vergelijking heeft één oplossing</h3>

    <p>Het is belangrijk om niet automatisch te denken dat elke vergelijking precies één oplossing heeft.</p>

    <p>Bekijk:</p>

    <p class="formula">x + 3 = x + 3</p>

    <p>Deze vergelijking is waar voor <strong>elke</strong> waarde van x waarvoor de uitdrukkingen gedefinieerd zijn.</p>

    <p>We krijgen dus oneindig veel oplossingen.</p>

    <p>Bekijk daarentegen:</p>

    <p class="formula">x + 3 = x + 5</p>

    <p>Trek x af aan beide kanten:</p>

    <p class="formula">3 = 5</p>

    <p>Dat is onmogelijk. Deze vergelijking heeft dus <strong>geen oplossing</strong>.</p>

    <div class="callout">
      <strong>Een vergelijking kan verschillende oplossingsverzamelingen hebben:</strong>
      <p>één oplossing, geen oplossing of oneindig veel oplossingen.</p>
    </div>


    <h3>14. Gelijkwaardige vergelijkingen</h3>

    <p>Wanneer we een vergelijking stap voor stap bewerken, willen we een nieuwe vergelijking krijgen die precies dezelfde oplossingen heeft.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">3x + 5 = 20</p>

    <p>en na 5 aftrekken:</p>

    <p class="formula">3x = 15</p>

    <p>en daarna delen door 3:</p>

    <p class="formula">x = 5</p>

    <p>Deze vergelijkingen zien er verschillend uit, maar hebben dezelfde oplossing.</p>

    <div class="callout">
      <strong>We vervangen een vergelijking door een gelijkwaardige vergelijking.</strong>
      <p>Het doel van de bewerkingen is de vergelijking steeds eenvoudiger te maken, terwijl de oplossingen behouden blijven.</p>
    </div>


    <h3>15. Van verhaal naar vergelijking</h3>

    <p>Vergelijkingen ontstaan vaak uit een probleem uit de werkelijkheid.</p>

    <p>Stel dat een getal met 7 wordt vermeerderd en het resultaat 19 is.</p>

    <p>Noem het onbekende getal x.</p>

    <p>Dan kunnen we het probleem vertalen naar:</p>

    <p class="formula">x + 7 = 19</p>

    <p>Los de vergelijking op:</p>

    <p class="formula">x = 12</p>

    <p>Het onbekende getal is dus 12.</p>

    <p>De belangrijke stap is hier niet alleen het rekenen, maar het <strong>vertalen van de situatie naar een vergelijking</strong>.</p>


    <h3>16. Een vergelijking is een probleem met een voorwaarde</h3>

    <p>Een algebraïsche uitdrukking kan voor veel verschillende waarden worden berekend.</p>

    <p>Een vergelijking legt daarentegen een voorwaarde op:</p>

    <p class="formula">3x + 5 = 20</p>

    <p>Niet elke waarde van x voldoet aan die voorwaarde.</p>

    <p>We zoeken precies de waarde(n) waarvoor de twee kanten gelijk worden.</p>

    <div class="callout">
      <strong>Een vergelijking is een filter.</strong>
      <p>Van alle mogelijke waarden van x houden we alleen de waarden over die de gelijkheid waar maken.</p>
    </div>


    <h3>17. Een vaste werkwijze</h3>

    <p>Bij eenvoudige lineaire vergelijkingen kunnen we een vaste strategie gebruiken:</p>

    <ol>
      <li>vereenvoudig beide kanten indien nodig;</li>
      <li>werk haakjes weg als dat nodig is;</li>
      <li>breng termen met de onbekende samen;</li>
      <li>breng de constante termen naar de andere kant;</li>
      <li>maak de factor van de onbekende ongedaan;</li>
      <li>controleer de gevonden oplossing in de oorspronkelijke vergelijking.</li>
    </ol>

    <p>De precieze volgorde kan soms verschillen, maar het onderliggende principe blijft hetzelfde: <strong>maak de onbekende stap voor stap vrij zonder de gelijkheid te verbreken.</strong></p>


    <h3>18. Wat hebben we eigenlijk geleerd?</h3>

    <p>Een vergelijking oplossen is meer dan een trucje met "naar de andere kant brengen".</p>

    <p>De basisgedachte is:</p>

    <p class="formula">links = rechts</p>

    <p>Elke bewerking moet deze gelijkheid behouden.</p>

    <p>Daarom kunnen we bijvoorbeeld:</p>

    <ul>
      <li>aan beide kanten hetzelfde getal optellen;</li>
      <li>aan beide kanten hetzelfde getal aftrekken;</li>
      <li>beide kanten met hetzelfde getal vermenigvuldigen;</li>
      <li>beide kanten door hetzelfde niet-nul getal delen.</li>
    </ul>

    <p>Door deze bewerkingen systematisch toe te passen, brengen we de vergelijking terug tot een vorm waarin de onbekende rechtstreeks zichtbaar is.</p>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>Een vergelijking stelt dat twee uitdrukkingen gelijk zijn.</p>
      <p>We zoeken de waarde(n) van de onbekende waarvoor die gelijkheid waar is.</p>
      <p>Door dezelfde geldige bewerking aan beide kanten uit te voeren, kunnen we de vergelijking vereenvoudigen zonder haar oplossingen te veranderen.</p>
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
      <li>begrijpen wat een ongelijkheid betekent</li>
      <li>een oplossingsverzameling voorstellen op een getallenlijn</li>
      <li>eenvoudige ongelijkheden oplossen</li>
      <li>begrijpen waarom het ongelijkheidsteken omkeert bij vermenigvuldigen of delen door een negatief getal</li>
      <li>open en gesloten grenzen herkennen</li>
      <li>oplossingen beschrijven met intervallen</li>
      <li>absolute waarde begrijpen als afstand tot nul</li>
      <li>rekening houden met beperkingen uit de context</li>
    </ul>


    <h3>1. Niet één oplossing, maar een bereik</h3>

    <p>Bij een vergelijking zoals:</p>

    <p class="formula">x + 3 = 7</p>

    <p>zoeken we naar de waarde van x waarvoor de gelijkheid waar is. Daar is één oplossing:</p>

    <p class="formula">x = 4</p>

    <p>Maar soms willen we geen exacte waarde vinden. We willen bijvoorbeeld weten welke waarden <strong>kleiner dan 4</strong> zijn.</p>

    <p>Dan schrijven we:</p>

    <p class="formula">x &lt; 4</p>

    <p>Dit is een <strong>ongelijkheid</strong>.</p>

    <div class="callout">
      <strong>Een ongelijkheid beschrijft meestal een verzameling oplossingen.</strong>
      <p>In plaats van één waarde kunnen er veel, zelfs oneindig veel, oplossingen zijn.</p>
    </div>


    <h3>2. De belangrijkste ongelijkheidstekens</h3>

    <p>We gebruiken verschillende tekens om waarden met elkaar te vergelijken.</p>

    <ul>
      <li><strong>&lt;</strong> betekent: kleiner dan</li>
      <li><strong>&gt;</strong> betekent: groter dan</li>
      <li><strong>≤</strong> betekent: kleiner dan of gelijk aan</li>
      <li><strong>≥</strong> betekent: groter dan of gelijk aan</li>
    </ul>

    <p>Bijvoorbeeld:</p>

    <p class="formula">x &lt; 5</p>

    <p>betekent dat x kleiner is dan 5.</p>

    <p>En:</p>

    <p class="formula">x ≥ 5</p>

    <p>betekent dat x groter dan of gelijk aan 5 is.</p>


    <h3>3. Een ongelijkheid op de getallenlijn</h3>

    <p>Een ongelijkheid kunnen we zichtbaar maken op de getallenlijn.</p>

    <p>Voor:</p>

    <p class="formula">x &lt; 4</p>

    <p>nemen we alle getallen links van 4.</p>

    <p>Het getal 4 zelf hoort er niet bij, want 4 is niet kleiner dan 4.</p>

    <p>Voor:</p>

    <p class="formula">x ≤ 4</p>

    <p>hoort 4 er wel bij.</p>

    <div class="callout">
      <strong>De grens is belangrijk.</strong>
      <p>Bij &lt; en &gt; hoort de grens niet bij de oplossing.</p>
      <p>Bij ≤ en ≥ hoort de grens wel bij de oplossing.</p>
    </div>


    <h3>4. Open en gesloten grenzen</h3>

    <p>Op een getallenlijn kunnen we dit onderscheid voorstellen met een punt.</p>

    <p>Een <strong>open punt</strong> betekent dat de grens niet inbegrepen is:</p>

    <p class="formula">x &lt; 4</p>

    <p>Een <strong>gesloten punt</strong> betekent dat de grens wel inbegrepen is:</p>

    <p class="formula">x ≤ 4</p>

    <p>Hetzelfde geldt aan de rechterkant:</p>

    <p class="formula">x &gt; 4</p>

    <p class="formula">x ≥ 4</p>

    <p>De richting van de oplossing wordt bepaald door het ongelijkheidsteken.</p>


    <h3>5. Ongelijkheden oplossen zoals vergelijkingen</h3>

    <p>Veel regels uit 2.3 blijven geldig.</p>

    <p>Neem:</p>

    <p class="formula">x + 3 &lt; 7</p>

    <p>We trekken 3 af aan beide kanten:</p>

    <p class="formula">x + 3 − 3 &lt; 7 − 3</p>

    <p>Dus:</p>

    <p class="formula">x &lt; 4</p>

    <p>Net als bij vergelijkingen voeren we dezelfde bewerking aan beide kanten uit.</p>

    <div class="callout">
      <strong>Optellen en aftrekken veranderen de richting van een ongelijkheid niet.</strong>
    </div>


    <h3>6. Vermenigvuldigen en delen door een positief getal</h3>

    <p>Ook vermenigvuldigen en delen kunnen we gebruiken.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">2x &lt; 10</p>

    <p>We delen beide kanten door 2:</p>

    <p class="formula">2x / 2 &lt; 10 / 2</p>

    <p>Dus:</p>

    <p class="formula">x &lt; 5</p>

    <p>De richting van het ongelijkheidsteken blijft hetzelfde.</p>

    <p>Hetzelfde geldt voor delen door of vermenigvuldigen met elk <strong>positief</strong> getal.</p>


    <h3>7. Waarom keert het teken om bij een negatief getal?</h3>

    <p>Hier wijkt een ongelijkheid af van een vergelijking.</p>

    <p>Neem:</p>

    <p class="formula">2 &lt; 5</p>

    <p>Vermenigvuldig beide kanten met −1:</p>

    <p class="formula">−2 &gt; −5</p>

    <p>De richting van het teken moet dus omkeren.</p>

    <p>Dat komt doordat vermenigvuldigen met een negatief getal de getallenlijn als het ware omkeert: positieve getallen worden negatief en de volgorde van de getallen verandert.</p>

    <div class="callout">
      <strong>Belangrijke regel:</strong>
      <p>Vermenigvuldig of deel je een ongelijkheid door een <strong>negatief</strong> getal, dan moet je het ongelijkheidsteken omkeren.</p>
    </div>


    <h3>8. Een voorbeeld met een negatief getal</h3>

    <p>Neem:</p>

    <p class="formula">−3x &lt; 12</p>

    <p>We willen x alleen krijgen. Daarom delen we door −3.</p>

    <p>Omdat −3 negatief is, keert het teken om:</p>

    <p class="formula">x &gt; −4</p>

    <p>Dit is een veelgemaakte fout: wie vergeet het teken om te keren, krijgt de verkeerde oplossingsverzameling.</p>


    <h3>9. Een tweede manier om de tekenomkering te begrijpen</h3>

    <p>We kunnen hetzelfde idee bekijken met concrete getallen.</p>

    <p>We weten:</p>

    <p class="formula">3 &lt; 7</p>

    <p>Als we beide kanten vermenigvuldigen met −2:</p>

    <p class="formula">3 · (−2) = −6</p>

    <p class="formula">7 · (−2) = −14</p>

    <p>We krijgen:</p>

    <p class="formula">−6 &gt; −14</p>

    <p>De oorspronkelijke volgorde is omgekeerd.</p>

    <p>Dit is geen aparte truc voor ongelijkheden, maar een gevolg van de eigenschappen van negatieve getallen.</p>


    <h3>10. Twee grenzen tegelijk</h3>

    <p>Soms leggen we tegelijk een onder- en een bovengrens op.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">2 &lt; x &lt; 7</p>

    <p>Dit betekent dat x groter is dan 2 én kleiner dan 7.</p>

    <p>De oplossingen zijn bijvoorbeeld:</p>

    <p class="formula">3, 4, 5, 6</p>

    <p>maar ook alle andere reële getallen tussen 2 en 7.</p>

    <p>De grenswaarden 2 en 7 zijn zelf geen oplossingen.</p>

    <p>We kunnen ook een gesloten grens hebben:</p>

    <p class="formula">2 ≤ x ≤ 7</p>

    <p>Dan behoren 2 en 7 wel tot de oplossingen.</p>


    <h3>11. Intervallen</h3>

    <p>Een hele verzameling getallen kunnen we compact beschrijven met een <strong>interval</strong>.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">2 &lt; x &lt; 7</p>

    <p>schrijven we als:</p>

    <p class="formula">(2, 7)</p>

    <p>De ronde haakjes betekenen dat de grenswaarden niet inbegrepen zijn.</p>

    <p>Voor:</p>

    <p class="formula">2 ≤ x ≤ 7</p>

    <p>schrijven we:</p>

    <p class="formula">[2, 7]</p>

    <p>De vierkante haakjes betekenen dat de grenswaarden wel inbegrepen zijn.</p>

    <div class="callout">
      <strong>Intervalnotatie is een compacte taal voor oplossingsverzamelingen.</strong>
      <p>Ronde haakjes: grens niet inbegrepen.</p>
      <p>Vierkante haakjes: grens wel inbegrepen.</p>
    </div>


    <h3>12. Een interval kan ook maar één grens hebben</h3>

    <p>Bij:</p>

    <p class="formula">x &lt; 4</p>

    <p>zijn er oneindig veel oplossingen naar links.</p>

    <p>In intervalnotatie schrijven we:</p>

    <p class="formula">(−∞, 4)</p>

    <p>Bij:</p>

    <p class="formula">x ≥ 4</p>

    <p>schrijven we:</p>

    <p class="formula">[4, ∞)</p>

    <p>Het symbool ∞ is geen gewoon getal. Het geeft aan dat de verzameling onbeperkt doorgaat.</p>

    <p>Daarom gebruiken we bij ∞ altijd een ronde haak.</p>


    <h3>13. Absolute waarde als afstand</h3>

    <p>Op de getallenlijn kunnen we ook de <strong>afstand van een getal tot nul</strong> bekijken.</p>

    <p>De afstand van 5 tot 0 is 5:</p>

    <p class="formula">|5| = 5</p>

    <p>De afstand van −5 tot 0 is ook 5:</p>

    <p class="formula">|−5| = 5</p>

    <p>De absolute waarde van een getal is dus nooit negatief.</p>

    <div class="callout">
      <strong>Absolute waarde = afstand tot nul.</strong>
      <p>Het teken van het getal speelt daarbij geen rol voor de afstand.</p>
    </div>


    <h3>14. Absolute waarde en afstand tussen twee getallen</h3>

    <p>Absolute waarde is niet alleen nuttig voor de afstand tot nul.</p>

    <p>De afstand tussen twee getallen a en b is:</p>

    <p class="formula">|a − b|</p>

    <p>Bijvoorbeeld, de afstand tussen 3 en 8 is:</p>

    <p class="formula">|8 − 3| = |5| = 5</p>

    <p>Maar de afstand tussen −2 en 4 is:</p>

    <p class="formula">|4 − (−2)| = |6| = 6</p>

    <p>Omdat afstand nooit negatief kan zijn, geeft de absolute waarde precies de juiste afstand.</p>


    <h3>15. Absolute waarde als voorwaarde</h3>

    <p>We kunnen absolute waarde ook gebruiken om een afstandsvoorwaarde te beschrijven.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">|x| &lt; 3</p>

    <p>Dit betekent:</p>

    <p><strong>de afstand van x tot 0 is kleiner dan 3.</strong></p>

    <p>Op de getallenlijn betekent dat dat x tussen −3 en 3 ligt:</p>

    <p class="formula">−3 &lt; x &lt; 3</p>

    <p>Evenzo betekent:</p>

    <p class="formula">|x| ≤ 3</p>

    <p>dat:</p>

    <p class="formula">−3 ≤ x ≤ 3</p>

    <div class="callout">
      <strong>Absolute waarde vertaalt een afstandsvoorwaarde naar een interval.</strong>
    </div>


    <h3>16. Ongelijkheden uit de werkelijkheid</h3>

    <p>Ongelijkheden zijn bijzonder geschikt wanneer een grenswaarde belangrijk is.</p>

    <p>Stel dat een lift maximaal 600 kg mag dragen.</p>

    <p>Als x de totale massa voorstelt, schrijven we:</p>

    <p class="formula">x ≤ 600</p>

    <p>Een persoon van precies 600 kg zou volgens deze wiskundige voorwaarde nog toegelaten zijn, omdat de grens inbegrepen is.</p>

    <p>Als de instructie daarentegen zegt "minder dan 600 kg", schrijven we:</p>

    <p class="formula">x &lt; 600</p>

    <p>Het verschil tussen <strong>&lt;</strong> en <strong>≤</strong> kan dus een echte betekenis hebben.</p>


    <h3>17. Niet elke wiskundige oplossing is fysisch mogelijk</h3>

    <p>Net zoals bij algebraïsche formules moet je rekening houden met de betekenis van een variabele.</p>

    <p>Als x een lengte in meter voorstelt, is:</p>

    <p class="formula">x &lt; 0</p>

    <p>meestal geen fysisch mogelijke oplossing.</p>

    <p>De algebra kan zo'n getal wel beschrijven, maar de context kan het uitsluiten.</p>

    <div class="callout">
      <strong>Wiskundige mogelijkheden en contextuele mogelijkheden zijn niet altijd hetzelfde.</strong>
      <p>Controleer daarom altijd wat de variabele werkelijk voorstelt.</p>
    </div>


    <h3>18. Een volledige ongelijkheid oplossen</h3>

    <p>Bekijk:</p>

    <p class="formula">2x − 3 ≥ 7</p>

    <p>Tel eerst 3 op bij beide kanten:</p>

    <p class="formula">2x ≥ 10</p>

    <p>Deel daarna door 2:</p>

    <p class="formula">x ≥ 5</p>

    <p>De oplossingsverzameling is dus:</p>

    <p class="formula">[5, ∞)</p>

    <p>De grens 5 hoort erbij omdat het teken ≥ is.</p>


    <h3>19. Een volledige ongelijkheid met een negatieve factor</h3>

    <p>Neem:</p>

    <p class="formula">−2x + 4 &gt; 10</p>

    <p>Trek eerst 4 af aan beide kanten:</p>

    <p class="formula">−2x &gt; 6</p>

    <p>Deel nu door −2.</p>

    <p>Omdat we delen door een negatief getal, keert het teken om:</p>

    <p class="formula">x &lt; −3</p>

    <p>De oplossingsverzameling is:</p>

    <p class="formula">(−∞, −3)</p>


    <h3>20. Vergelijking versus ongelijkheid</h3>

    <p>Het verschil kunnen we nu scherp formuleren.</p>

    <p>Bij een vergelijking:</p>

    <p class="formula">2x + 3 = 9</p>

    <p>zoeken we waarden waarvoor beide kanten <strong>gelijk</strong> zijn.</p>

    <p>Bij een ongelijkheid:</p>

    <p class="formula">2x + 3 &lt; 9</p>

    <p>zoeken we waarden waarvoor de linkerkant <strong>kleiner</strong> is dan de rechterkant.</p>

    <p>Een vergelijking leidt vaak tot een afzonderlijke waarde; een ongelijkheid vaak tot een interval of een combinatie van intervallen.</p>


    <h3>21. Een vaste werkwijze</h3>

    <p>Bij een eenvoudige ongelijkheid kunnen we deze werkwijze gebruiken:</p>

    <ol>
      <li>vereenvoudig beide kanten indien nodig;</li>
      <li>werk haakjes weg als dat nodig is;</li>
      <li>breng termen met de onbekende samen;</li>
      <li>breng constante termen naar de andere kant;</li>
      <li>maak de factor van de onbekende ongedaan;</li>
      <li><strong>controleer of je door een negatief getal vermenigvuldigt of deelt;</strong></li>
      <li>keer in dat geval het ongelijkheidsteken om;</li>
      <li>schrijf de oplossingsverzameling eventueel als interval.</li>
    </ol>

    <p>Controleer tenslotte of de gevonden oplossingen passen bij de context.</p>


    <h3>22. Wat hebben we eigenlijk geleerd?</h3>

    <p>Een ongelijkheid is geen ingewikkelde versie van een vergelijking. Het is een andere manier om een voorwaarde te beschrijven.</p>

    <p>In plaats van:</p>

    <p class="formula">x = 4</p>

    <p>kunnen we bijvoorbeeld beschrijven:</p>

    <p class="formula">x &gt; 4</p>

    <p>of:</p>

    <p class="formula">2 ≤ x &lt; 7</p>

    <p>Daarmee beschrijven we hele verzamelingen van getallen.</p>

    <p>De getallenlijn maakt die verzamelingen zichtbaar, intervalnotatie maakt ze compact, en absolute waarde geeft ons een natuurlijke taal voor afstanden.</p>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>Een ongelijkheid beschrijft een verzameling waarden die aan een voorwaarde voldoen.</p>
      <p>Net als bij vergelijkingen mogen we dezelfde geldige bewerking aan beide kanten uitvoeren.</p>
      <p>Bij vermenigvuldigen of delen door een negatief getal keert het ongelijkheidsteken om.</p>
      <p>Met getallenlijnen, intervallen en absolute waarde kunnen we oplossingsverzamelingen zichtbaar en compact beschrijven.</p>
    </div>
  `
},
    {
  id: "2.6",
  title: "Machten, wortels & algebraïsche breuken",
  goal: "Hoe kunnen we algemene rekenregels gebruiken met machten, wortels en breuken?",
  theory: /* html */`
    <h2>Machten, wortels & algebraïsche breuken</h2>

    <p><strong>Doel:</strong></p>
    <ul>
      <li>begrijpen wat een macht voorstelt</li>
      <li>de belangrijkste rekenregels voor machten begrijpen en toepassen</li>
      <li>negatieve en gebroken exponenten begrijpen</li>
      <li>wortels zien als de omgekeerde bewerking van machten</li>
      <li>rekenen met algebraïsche breuken</li>
      <li>begrijpen wanneer een algebraïsche breuk wel of niet gedefinieerd is</li>
      <li>veelgemaakte fouten bij machten, wortels en breuken herkennen</li>
    </ul>

    <p>
      In Fase 1 leerden we rekenen met machten en wortels.
      Nu brengen we die ideeën naar de algebra.
      Daardoor kunnen letters voorkomen in machten, wortels en breuken.
    </p>


    <h3>1. Een macht is herhaalde vermenigvuldiging</h3>

    <p>
      Een macht is een compacte manier om dezelfde factor meerdere keren
      met zichzelf te vermenigvuldigen.
    </p>

    <p class="formula">2³ = 2 · 2 · 2 = 8</p>

    <p>
      Het getal 2 noemen we het <strong>grondtal</strong>.
      Het getal 3 is de <strong>exponent</strong>.
    </p>

    <p>
      De exponent vertelt hoe vaak het grondtal als factor voorkomt.
    </p>

    <p class="formula">a³ = a · a · a</p>

    <p>
      Dit geldt ook wanneer het grondtal een variabele is:
    </p>

    <p class="formula">x⁴ = x · x · x · x</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De exponent telt het aantal factoren van hetzelfde grondtal.
      </p>
    </div>


    <h3>2. Vermenigvuldigen van machten met hetzelfde grondtal</h3>

    <p>
      Kijk naar:
    </p>

    <p class="formula">x³ · x²</p>

    <p>
      Schrijf de machten eerst uit:
    </p>

    <p class="formula">x · x · x · x · x = x⁵</p>

    <p>
      We hebben dus drie factoren en daarna nog twee factoren.
      Samen zijn dat vijf factoren.
    </p>

    <p class="formula">x³ · x² = x⁵</p>

    <p>
      Daarom geldt in het algemeen:
    </p>

    <p class="formula">aᵐ · aⁿ = aᵐ⁺ⁿ</p>

    <p>
      <strong>De exponenten worden opgeteld</strong> wanneer we machten
      met hetzelfde grondtal vermenigvuldigen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x⁴ · x³ = x⁷</p>

    <p class="formula">2x² · 3x⁴ = 6x⁶</p>


    <h3>3. Delen van machten met hetzelfde grondtal</h3>

    <p>
      Bij delen verdwijnen factoren die zowel boven als onder voorkomen.
    </p>

    <p class="formula">x⁵ / x² = (x · x · x · x · x) / (x · x)</p>

    <p>
      Twee factoren x vallen weg:
    </p>

    <p class="formula">x⁵ / x² = x³</p>

    <p>
      Daarom:
    </p>

    <p class="formula">aᵐ / aⁿ = aᵐ⁻ⁿ</p>

    <p>
      Hierbij moet het grondtal niet nul zijn.
    </p>

    <p class="formula">x⁷ / x³ = x⁴</p>

    <p class="formula">x⁴ / x⁶ = x⁻²</p>

    <p>
      Dat laatste resultaat brengt ons bij negatieve exponenten.
    </p>


    <h3>4. De macht nul</h3>

    <p>
      Wanneer we dezelfde macht door zichzelf delen, krijgen we 1:
    </p>

    <p class="formula">x³ / x³ = 1</p>

    <p>
      Maar volgens de regel voor het delen van machten is:
    </p>

    <p class="formula">x³ / x³ = x³⁻³ = x⁰</p>

    <p>
      Dus:
    </p>

    <p class="formula">x⁰ = 1</p>

    <p>
      Dit geldt voor elk niet-nul grondtal.
    </p>

    <p class="formula">5⁰ = 1</p>

    <p class="formula">x⁰ = 1, voor x ≠ 0</p>

    <div class="callout">
      <p><strong>Let op:</strong></p>
      <p>
        De regel x⁰ = 1 geldt niet zomaar voor x = 0.
        De uitdrukking 0⁰ wordt op dit niveau niet als een gewone macht
        gedefinieerd.
      </p>
    </div>


    <h3>5. Negatieve exponenten</h3>

    <p>
      We zagen:
    </p>

    <p class="formula">x⁴ / x⁶ = x⁻²</p>

    <p>
      Maar wat betekent x⁻²?
    </p>

    <p>
      Gebruik opnieuw de regel voor delen van machten:
    </p>

    <p class="formula">x⁴ / x⁶ = x⁴⁻⁶ = x⁻²</p>

    <p>
      Schrijven we de breuk rechtstreeks, dan kunnen we twee factoren
      boven en zes onder vergelijken:
    </p>

    <p class="formula">x⁴ / x⁶ = 1 / x²</p>

    <p>
      Dus:
    </p>

    <p class="formula">x⁻² = 1 / x²</p>

    <p>
      In het algemeen:
    </p>

    <p class="formula">a⁻ⁿ = 1 / aⁿ</p>

    <p>
      Een negatieve exponent betekent dus niet dat de uitkomst negatief is.
      Hij betekent dat de macht naar de noemer verhuist.
    </p>

    <p class="formula">2⁻³ = 1 / 2³ = 1 / 8</p>


    <h3>6. Een macht van een macht</h3>

    <p>
      Beschouw:
    </p>

    <p class="formula">(x²)³</p>

    <p>
      De buitenste exponent betekent dat x² drie keer als factor voorkomt:
    </p>

    <p class="formula">(x²)³ = x² · x² · x²</p>

    <p>
      Nu tellen we de exponenten op:
    </p>

    <p class="formula">x² · x² · x² = x⁶</p>

    <p>
      Daarom:
    </p>

    <p class="formula">(aᵐ)ⁿ = aᵐⁿ</p>

    <p>
      Bij een macht van een macht worden de exponenten dus
      <strong>vermenigvuldigd</strong>.
    </p>

    <p class="formula">(x³)⁴ = x¹²</p>

    <div class="callout">
      <p><strong>Niet verwarren:</strong></p>
      <p class="formula-inline">x² · x³ = x⁵</p>
      <p>
        Hier worden exponenten opgeteld omdat we machten vermenigvuldigen.
      </p>
      <p class="formula-inline">(x²)³ = x⁶</p>
      <p>
        Hier worden exponenten vermenigvuldigd omdat we een macht van een macht nemen.
      </p>
    </div>


    <h3>7. Wortels maken een macht ongedaan</h3>

    <p>
      We weten:
    </p>

    <p class="formula">3² = 9</p>

    <p>
      De omgekeerde vraag is:
      welk getal moet je kwadrateren om 9 te krijgen?
    </p>

    <p class="formula">√9 = 3</p>

    <p>
      De vierkantswortel is dus de bewerking die het kwadrateren ongedaan maakt.
    </p>

    <p class="formula">√(x²) = |x|</p>

    <p>
      De absolute waarde is hier belangrijk.
      Zowel 3 als −3 heeft immers kwadraat 9:
    </p>

    <p class="formula">3² = 9</p>

    <p class="formula">(−3)² = 9</p>

    <p>
      De wortel √9 betekent echter de <strong>niet-negatieve</strong> vierkantswortel:
    </p>

    <p class="formula">√9 = 3</p>

    <p>
      Daarom is:
    </p>

    <p class="formula">√(x²) = |x|</p>


    <h3>8. Wortels en machten horen bij elkaar</h3>

    <p>
      Een vierkantswortel kan ook als een macht met exponent 1/2 worden geschreven:
    </p>

    <p class="formula">√a = a¹ᐟ²</p>

    <p>
      Een derdemachtswortel komt overeen met exponent 1/3:
    </p>

    <p class="formula">∛a = a¹ᐟ³</p>

    <p>
      Dit is geen nieuwe soort bewerking.
      We gebruiken een andere notatie voor hetzelfde idee.
    </p>

    <p>
      In het algemeen:
    </p>

    <p class="formula">a¹ᐟⁿ = ⁿ√a</p>

    <p>
      Op deze manier kunnen we wortels en machten met elkaar verbinden.
    </p>


    <h3>9. Gebroken exponenten</h3>

    <p>
      Omdat een wortel een macht met een gebroken exponent is,
      kunnen we bijvoorbeeld schrijven:
    </p>

    <p class="formula">x¹ᐟ² = √x</p>

    <p class="formula">x³ᐟ² = (√x)³</p>

    <p>
      Een gebroken exponent kan dus worden opgesplitst in een
      wortel en een gewone macht.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">8²ᐟ³ = (∛8)² = 2² = 4</p>

    <p>
      De exponent 2/3 vertelt ons dus dat we eerst een derdemachtswortel
      kunnen nemen en daarna het kwadraat.
    </p>


    <h3>10. Wanneer is een wortel gedefinieerd?</h3>

    <p>
      Bij reële getallen bestaat een vierkantswortel alleen wanneer
      het getal onder de wortel niet negatief is.
    </p>

    <p class="formula">√x</p>

    <p>
      is dus alleen reëel gedefinieerd voor:
    </p>

    <p class="formula">x ≥ 0</p>

    <p>
      Zo is:
    </p>

    <p class="formula">√9 = 3</p>

    <p>
      maar √(−9) heeft geen reële waarde.
    </p>

    <p>
      We zullen later leren hoe zulke uitdrukkingen binnen de complexe
      getallen toch betekenis kunnen krijgen.
    </p>


    <h3>11. Algebraïsche breuken</h3>

    <p>
      In algebra kunnen zowel de teller als de noemer letters bevatten.
      Zo'n breuk noemen we een <strong>algebraïsche breuk</strong>.
    </p>

    <p class="formula">3x / 5</p>

    <p class="formula">(x + 2) / (x − 1)</p>

    <p class="formula">(2x²) / (3x)</p>

    <p>
      Dezelfde basisregels als bij gewone breuken blijven gelden.
    </p>


    <h3>12. De noemer mag niet nul zijn</h3>

    <p>
      Delen door nul is niet gedefinieerd.
      Daarom moet bij iedere algebraïsche breuk worden nagegaan
      voor welke waarden de noemer niet nul is.
    </p>

    <p class="formula">1 / x</p>

    <p>
      Hier geldt:
    </p>

    <p class="formula">x ≠ 0</p>

    <p>
      Bij:
    </p>

    <p class="formula">1 / (x − 3)</p>

    <p>
      mag de noemer niet nul zijn:
    </p>

    <p class="formula">x − 3 ≠ 0</p>

    <p>
      dus:
    </p>

    <p class="formula">x ≠ 3</p>

    <div class="callout">
      <p><strong>Belangrijke gewoonte:</strong></p>
      <p>
        Kijk bij een algebraïsche breuk altijd eerst naar de noemer.
        De waarden waarvoor de noemer nul wordt, zijn uitgesloten.
      </p>
    </div>


    <h3>13. Breuken vereenvoudigen door factoren weg te delen</h3>

    <p>
      Neem:
    </p>

    <p class="formula">(6x) / (3x)</p>

    <p>
      Zowel teller als noemer bevatten de factor 3x.
      Voor x ≠ 0 kunnen we die factor wegdelen:
    </p>

    <p class="formula">(6x) / (3x) = 2</p>

    <p>
      We mogen dus gemeenschappelijke <strong>factoren</strong> wegdelen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">(x² + 3x) / x</p>

    <p>
      Eerst ontbinden we de teller:
    </p>

    <p class="formula">x² + 3x = x(x + 3)</p>

    <p>
      Daardoor krijgen we:
    </p>

    <p class="formula">x(x + 3) / x = x + 3</p>

    <p>
      Maar de oorspronkelijke breuk was alleen gedefinieerd voor:
    </p>

    <p class="formula">x ≠ 0</p>

    <p>
      Die voorwaarde blijft dus gelden.
    </p>


    <h3>14. Je mag geen termen wegstrepen</h3>

    <p>
      Een veelgemaakte fout is het wegstrepen van onderdelen die
      geen factoren zijn.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">(x + 3) / x</p>

    <p>
      Hier mag de x <strong>niet</strong> worden weggestreept.
      De teller is namelijk een som, geen product waarin x een factor is.
    </p>

    <p>
      Vergelijk:
    </p>

    <p class="formula">x(x + 3) / x = x + 3</p>

    <p>
      Hier kan x wel worden weggehaald omdat x een volledige factor is.
    </p>

    <div class="callout">
      <p><strong>Onthoud:</strong></p>
      <p>
        Je mag factoren wegdelen, maar geen termen uit een som of verschil.
      </p>
    </div>


    <h3>15. Breuken vermenigvuldigen</h3>

    <p>
      Bij het vermenigvuldigen van breuken vermenigvuldigen we
      teller met teller en noemer met noemer.
    </p>

    <p class="formula">(2x / 3) · (6 / x) = 12x / 3x</p>

    <p>
      Voor x ≠ 0 kunnen we vereenvoudigen:
    </p>

    <p class="formula">12x / 3x = 4</p>

    <p>
      Dus:
    </p>

    <p class="formula">(2x / 3) · (6 / x) = 4</p>

    <p>
      Ook hier moet de oorspronkelijke domeinvoorwaarde behouden blijven:
      x ≠ 0.
    </p>


    <h3>16. Breuken delen</h3>

    <p>
      Delen door een breuk betekent vermenigvuldigen met het omgekeerde.
    </p>

    <p class="formula">(x / 3) ÷ (2 / 5) = (x / 3) · (5 / 2)</p>

    <p class="formula">= 5x / 6</p>

    <p>
      Hetzelfde principe dat we met gewone getallen leerden,
      blijft dus gelden voor algebraïsche breuken.
    </p>


    <h3>17. Breuken optellen en aftrekken</h3>

    <p>
      Bij optellen en aftrekken moeten de breuken eerst een
      gemeenschappelijke noemer hebben.
    </p>

    <p class="formula">x / 3 + 2x / 3 = 3x / 3 = x</p>

    <p>
      Wanneer de noemers verschillend zijn, moeten we eerst een
      gemeenschappelijke noemer zoeken.
    </p>

    <p class="formula">x / 2 + x / 3</p>

    <p>
      Een gemeenschappelijke noemer is 6:
    </p>

    <p class="formula">x / 2 + x / 3 = 3x / 6 + 2x / 6</p>

    <p class="formula">= 5x / 6</p>

    <p>
      We kunnen dus niet zomaar tellers en noemers afzonderlijk optellen.
    </p>


    <h3>18. Verschillende bewerkingen komen samen</h3>

    <p>
      In een algebraïsche uitdrukking kunnen machten, wortels en breuken
      tegelijk voorkomen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2x² / 3 + 4x² / 3</p>

    <p>
      De noemers zijn gelijk, dus we kunnen de tellers samen nemen:
    </p>

    <p class="formula">(2x² + 4x²) / 3</p>

    <p class="formula">= 6x² / 3</p>

    <p class="formula">= 2x²</p>

    <p>
      We gebruiken hier verschillende ideeën uit de vorige lessen:
      gelijksoortige termen herkennen, breuken bewerken en machten lezen.
    </p>


    <h3>19. Een volledig voorbeeld</h3>

    <p>
      Vereenvoudig:
    </p>

    <p class="formula">(3x² + 6x) / 3x</p>

    <p>
      Eerst ontbinden we de teller:
    </p>

    <p class="formula">3x² + 6x = 3x(x + 2)</p>

    <p>
      Daardoor wordt:
    </p>

    <p class="formula">3x(x + 2) / 3x</p>

    <p>
      Voor x ≠ 0 kunnen we de gemeenschappelijke factor 3x wegdelen:
    </p>

    <p class="formula">= x + 2</p>

    <p>
      De vereenvoudigde vorm is dus:
    </p>

    <p class="formula">x + 2</p>

    <p>
      met de oorspronkelijke voorwaarde:
    </p>

    <p class="formula">x ≠ 0</p>

    <div class="callout">
      <p><strong>Waarom is die voorwaarde belangrijk?</strong></p>
      <p>
        Als x = 0, is de oorspronkelijke uitdrukking
        <span class="formula-inline">(3x² + 6x) / 3x</span>
        niet gedefinieerd.
        De vereenvoudigde uitdrukking x + 2 heeft voor x = 0 wel een waarde,
        maar dat verandert de oorspronkelijke domeinvoorwaarde niet.
      </p>
    </div>


    <h3>20. De belangrijkste rekenregels samen</h3>

    <p>
      De belangrijkste regels uit deze les kunnen we nu samenbrengen.
    </p>

    <p class="formula">aᵐ · aⁿ = aᵐ⁺ⁿ</p>

    <p class="formula">aᵐ / aⁿ = aᵐ⁻ⁿ</p>

    <p class="formula">(aᵐ)ⁿ = aᵐⁿ</p>

    <p class="formula">a⁰ = 1, voor a ≠ 0</p>

    <p class="formula">a⁻ⁿ = 1 / aⁿ</p>

    <p class="formula">√a = a¹ᐟ²</p>

    <p class="formula">∛a = a¹ᐟ³</p>

    <p class="formula">√(x²) = |x|</p>

    <p>
      Deze regels zijn geen verzameling losse trucjes.
      Ze volgen uit de betekenis van machten, vermenigvuldiging,
      deling en de omgekeerde bewerking van een macht.
    </p>


    <h3>21. Veelgemaakte fouten</h3>

    <p><strong>Fout 1: exponenten vermenigvuldigen bij een product</strong></p>

    <p class="formula">x² · x³ ≠ x⁶</p>

    <p>
      Correct:
    </p>

    <p class="formula">x² · x³ = x⁵</p>

    <p><strong>Fout 2: termen wegstrepen</strong></p>

    <p class="formula">(x + 2) / x ≠ 2</p>

    <p>
      Je mag alleen volledige factoren wegdelen.
    </p>

    <p><strong>Fout 3: een negatieve exponent verwarren met een negatief getal</strong></p>

    <p class="formula">2⁻³ = 1 / 8</p>

    <p>
      De exponent is negatief, maar de uitkomst is positief.
    </p>

    <p><strong>Fout 4: √(x²) = x schrijven zonder voorwaarde</strong></p>

    <p>
      Correct is:
    </p>

    <p class="formula">√(x²) = |x|</p>


    <h3>22. Een vaste werkwijze</h3>

    <p>
      Wanneer je een algebraïsche uitdrukking met machten, wortels
      of breuken moet vereenvoudigen, kun je deze volgorde gebruiken:
    </p>

    <ol>
      <li>bekijk de structuur van de uitdrukking</li>
      <li>pas de rekenregels voor machten toe waar dat kan</li>
      <li>ontbind producten wanneer dat vereenvoudigen mogelijk maakt</li>
      <li>vereenvoudig breuken door gemeenschappelijke factoren weg te delen</li>
      <li>houd de voorwaarden voor de noemers bij</li>
      <li>controleer of je geen termen hebt weggestreept</li>
      <li>controleer eventueel met een concrete waarde</li>
    </ol>

    <p>
      Het doel is dus niet om zo snel mogelijk symbolen weg te werken,
      maar om steeds te weten <strong>waarom</strong> een bewerking geldig is.
    </p>


    <h3>23. Wat hebben we eigenlijk geleerd?</h3>

    <p>
      We begonnen met een eenvoudige vraag:
      wat betekent een macht?
    </p>

    <p>
      Van daaruit konden we begrijpen waarom:
    </p>

    <p class="formula">aᵐ · aⁿ = aᵐ⁺ⁿ</p>

    <p>
      en:
    </p>

    <p class="formula">aᵐ / aⁿ = aᵐ⁻ⁿ</p>

    <p>
      Negatieve exponenten ontstonden vervolgens vanzelf uit het
      verschil tussen exponenten:
    </p>

    <p class="formula">a⁻ⁿ = 1 / aⁿ</p>

    <p>
      Wortels zijn de omgekeerde bewerking van machten:
    </p>

    <p class="formula">√a = a¹ᐟ²</p>

    <p>
      En algebraïsche breuken zijn uiteindelijk gewoon breuken waarin
      de getallen vervangen zijn door algebraïsche uitdrukkingen.
    </p>

    <p>
      Daardoor kunnen we nu veel complexere structuren beschrijven
      zonder telkens concrete getallen te moeten gebruiken.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Machten, wortels en algebraïsche breuken zijn geen afzonderlijke
        trucjes. Ze zijn verschillende manieren om vermenigvuldiging,
        deling en omgekeerde bewerkingen compact met symbolen te beschrijven.
      </p>
    </div>
  `
},
   {
  id: "2.7",
  title: "Kwadratische vergelijkingen",
  goal: "Wat gebeurt er wanneer x² verschijnt?",
  theory: /* html */`
    <h2>Kwadratische vergelijkingen</h2>

    <p><strong>Doel:</strong></p>
    <ul>
      <li>begrijpen wat een kwadratische vergelijking is</li>
      <li>kwadratische vergelijkingen herkennen en in de standaardvorm brengen</li>
      <li>eenvoudige kwadratische vergelijkingen oplossen met wortels</li>
      <li>begrijpen waarom factoriseren een vergelijking kan oplossen</li>
      <li>de nulproductregel gebruiken</li>
      <li>de abc-formule begrijpen en toepassen</li>
      <li>de discriminant gebruiken om het aantal reële oplossingen te bepalen</li>
      <li>oplossingen controleren en typische fouten herkennen</li>
    </ul>

    <p>
      In 2.3 leerden we vergelijkingen oplossen waarin de onbekende
      bijvoorbeeld één keer voorkwam:
    </p>

    <p class="formula">3x + 5 = 17</p>

    <p>
      Nu verschijnt ook het kwadraat van de onbekende:
    </p>

    <p class="formula">x² = 9</p>

    <p>
      Daardoor verandert de structuur van het probleem.
      Eén kwadratische vergelijking kan bijvoorbeeld twee verschillende
      oplossingen hebben.
    </p>


    <h3>1. Wat maakt een vergelijking kwadratisch?</h3>

    <p>
      Een kwadratische vergelijking is een vergelijking waarin de hoogste
      macht van de onbekende 2 is.
    </p>

    <p>
      De algemene vorm is:
    </p>

    <p class="formula">ax² + bx + c = 0</p>

    <p>
      waarbij:
    </p>

    <ul>
      <li><strong>a</strong> niet nul mag zijn;</li>
      <li><strong>b</strong> een willekeurig getal kan zijn;</li>
      <li><strong>c</strong> een willekeurig getal kan zijn.</li>
    </ul>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2x² + 5x − 3 = 0</p>

    <p>
      is kwadratisch omdat de hoogste macht van x gelijk is aan 2.
    </p>

    <div class="callout">
      <p><strong>Waarom moet a ≠ 0 zijn?</strong></p>
      <p>
        Als a = 0, verdwijnt de term ax² en krijgen we geen
        kwadratische vergelijking meer.
      </p>
    </div>


    <h3>2. Eerst alles naar één kant</h3>

    <p>
      De standaardvorm van een kwadratische vergelijking heeft aan één
      kant nul staan:
    </p>

    <p class="formula">ax² + bx + c = 0</p>

    <p>
      Stel dat we hebben:
    </p>

    <p class="formula">x² + 5x = 6</p>

    <p>
      Dan brengen we alles naar dezelfde kant:
    </p>

    <p class="formula">x² + 5x − 6 = 0</p>

    <p>
      Nu kunnen we de vergelijking als een kwadratische vergelijking
      behandelen.
    </p>

    <div class="callout">
      <p><strong>Goede gewoonte:</strong></p>
      <p>
        Breng bij een kwadratische vergelijking eerst alles naar één kant
        en zorg dat de andere kant nul is.
      </p>
    </div>


    <h3>3. De eenvoudigste soort: x² = a</h3>

    <p>
      We beginnen met een vergelijking waarin alleen x² voorkomt:
    </p>

    <p class="formula">x² = 9</p>

    <p>
      We zoeken dus alle getallen waarvan het kwadraat 9 is.
    </p>

    <p class="formula">3² = 9</p>

    <p class="formula">(−3)² = 9</p>

    <p>
      Er zijn daarom twee oplossingen:
    </p>

    <p class="formula">x = 3</p>

    <p class="formula">x = −3</p>

    <p>
      We schrijven dit compact als:
    </p>

    <p class="formula">x = ±√9</p>

    <p class="formula">x = ±3</p>

    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p>
        Uit x² = a volgt niet alleen x = √a.
        Er kan ook een negatieve oplossing zijn:
      </p>
      <p class="formula">x² = a → x = ±√a</p>
    </div>


    <h3>4. Waarom zijn er soms twee oplossingen?</h3>

    <p>
      Het kwadrateren maakt een positief en een negatief getal gelijk:
    </p>

    <p class="formula">4² = 16</p>

    <p class="formula">(−4)² = 16</p>

    <p>
      Daarom is de vergelijking:
    </p>

    <p class="formula">x² = 16</p>

    <p>
      opgelost door:
    </p>

    <p class="formula">x = 4</p>

    <p class="formula">x = −4</p>

    <p>
      Dit is een eerste belangrijk verschil met veel lineaire vergelijkingen:
      een kwadratische vergelijking kan meerdere oplossingen hebben.
    </p>


    <h3>5. Factoriseren</h3>

    <p>
      Sommige kwadratische vergelijkingen kunnen we schrijven als
      een product van factoren.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x² + 5x + 6</p>

    <p>
      kunnen we schrijven als:
    </p>

    <p class="formula">(x + 2)(x + 3)</p>

    <p>
      Want:
    </p>

    <p class="formula">(x + 2)(x + 3) = x² + 3x + 2x + 6</p>

    <p class="formula">= x² + 5x + 6</p>

    <p>
      Factoriseren betekent dus dat we een uitdrukking herschrijven
      als een product van factoren.
    </p>


    <h3>6. De nulproductregel</h3>

    <p>
      De reden waarom factoriseren zo nuttig is, volgt uit een eenvoudige
      eigenschap:
    </p>

    <p class="formula">ab = 0</p>

    <p>
      kan alleen waar zijn als minstens één van de factoren nul is:
    </p>

    <p class="formula">a = 0 of b = 0</p>

    <p>
      Dit noemen we de <strong>nulproductregel</strong>.
    </p>

    <p>
      Stel:
    </p>

    <p class="formula">(x + 2)(x + 3) = 0</p>

    <p>
      Dan moet:
    </p>

    <p class="formula">x + 2 = 0</p>

    <p>
      of:
    </p>

    <p class="formula">x + 3 = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = −2</p>

    <p class="formula">x = −3</p>

    <div class="callout">
      <p><strong>De kracht van factoriseren:</strong></p>
      <p>
        Eén moeilijke vergelijking wordt opgesplitst in twee eenvoudige
        vergelijkingen.
      </p>
    </div>


    <h3>7. Een kwadratische vergelijking oplossen door factoriseren</h3>

    <p>
      Neem:
    </p>

    <p class="formula">x² + 5x + 6 = 0</p>

    <p>
      Factoriseer:
    </p>

    <p class="formula">(x + 2)(x + 3) = 0</p>

    <p>
      Gebruik de nulproductregel:
    </p>

    <p class="formula">x + 2 = 0</p>

    <p class="formula">x + 3 = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = −2</p>

    <p class="formula">x = −3</p>

    <p>
      Controle:
    </p>

    <p class="formula">(−2)² + 5(−2) + 6 = 4 − 10 + 6 = 0</p>

    <p class="formula">(−3)² + 5(−3) + 6 = 9 − 15 + 6 = 0</p>

    <p>
      Beide waarden voldoen aan de oorspronkelijke vergelijking.
    </p>


    <h3>8. Waarom je niet zomaar door x mag delen</h3>

    <p>
      Stel:
    </p>

    <p class="formula">x² − 3x = 0</p>

    <p>
      We kunnen factoriseren:
    </p>

    <p class="formula">x(x − 3) = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = 0</p>

    <p>
      of:
    </p>

    <p class="formula">x − 3 = 0</p>

    <p class="formula">x = 3</p>

    <p>
      We krijgen dus twee oplossingen.
    </p>

    <p>
      Als we meteen door x zouden delen, krijgen we:
    </p>

    <p class="formula">x − 3 = 0</p>

    <p>
      en zouden we de oplossing x = 0 verliezen.
    </p>

    <div class="callout">
      <p><strong>Waarom?</strong></p>
      <p>
        Delen door x is alleen toegestaan wanneer x zeker niet nul is.
        Maar juist x = 0 kan een oplossing zijn.
      </p>
    </div>


    <h3>9. Een bijzonder geval: verschil van kwadraten</h3>

    <p>
      Een belangrijke factorisatie is:
    </p>

    <p class="formula">a² − b² = (a − b)(a + b)</p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x² − 25</p>

    <p>
      is:
    </p>

    <p class="formula">x² − 5²</p>

    <p>
      en dus:
    </p>

    <p class="formula">(x − 5)(x + 5)</p>

    <p>
      De vergelijking:
    </p>

    <p class="formula">x² − 25 = 0</p>

    <p>
      wordt:
    </p>

    <p class="formula">(x − 5)(x + 5) = 0</p>

    <p>
      en geeft:
    </p>

    <p class="formula">x = 5</p>

    <p class="formula">x = −5</p>


    <h3>10. Niet elke kwadratische vergelijking factoriseert eenvoudig</h3>

    <p>
      Factoriseren is handig wanneer het gemakkelijk lukt.
      Maar niet iedere kwadratische vergelijking heeft factoren
      die we onmiddellijk herkennen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">2x² + 3x − 7 = 0</p>

    <p>
      Hier is factoriseren niet vanzelfsprekend.
    </p>

    <p>
      We hebben daarom een algemene methode nodig die werkt voor
      elke kwadratische vergelijking.
    </p>

    <p>
      Die methode is de <strong>abc-formule</strong>.
    </p>


    <h3>11. De abc-formule</h3>

    <p>
      Voor een vergelijking in de vorm:
    </p>

    <p class="formula">ax² + bx + c = 0</p>

    <p>
      kunnen we de oplossingen berekenen met:
    </p>

    <p class="formula">x = (−b ± √D) / (2a)</p>

    <p>
      waarbij:
    </p>

    <p class="formula">D = b² − 4ac</p>

    <p>
      D noemen we de <strong>discriminant</strong>.
    </p>

    <p>
      De formule lijkt op het eerste gezicht misschien een nieuwe regel
      die we gewoon moeten onthouden. Maar de discriminant vertelt ons
      iets belangrijks over de structuur van de oplossingen.
    </p>


    <h3>12. Waar komt de discriminant vandaan?</h3>

    <p>
      In de abc-formule staat:
    </p>

    <p class="formula">√D</p>

    <p>
      De waarde van D bepaalt dus of de vierkantswortel bestaat
      binnen de reële getallen.
    </p>

    <p>
      Omdat:
    </p>

    <p class="formula">D = b² − 4ac</p>

    <p>
      kunnen we aan de hand van D bepalen hoeveel reële oplossingen
      de kwadratische vergelijking heeft.
    </p>

    <div class="callout">
      <p><strong>De discriminant is dus geen extra truc.</strong></p>
      <p>
        Hij is precies het deel van de abc-formule dat onder de wortel staat.
        Daarom bepaalt hij rechtstreeks welke oplossingen mogelijk zijn.
      </p>
    </div>


    <h3>13. D &gt; 0: twee verschillende oplossingen</h3>

    <p>
      Stel:
    </p>

    <p class="formula">D &gt; 0</p>

    <p>
      Dan is √D een positief getal.
      In de abc-formule krijgen we daardoor twee verschillende waarden:
    </p>

    <p class="formula">x = (−b + √D) / (2a)</p>

    <p class="formula">x = (−b − √D) / (2a)</p>

    <p>
      Er zijn dus <strong>twee verschillende reële oplossingen</strong>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x² − 5x + 6 = 0</p>

    <p>
      Hier:
    </p>

    <p class="formula">a = 1</p>

    <p class="formula">b = −5</p>

    <p class="formula">c = 6</p>

    <p class="formula">D = (−5)² − 4 · 1 · 6 = 25 − 24 = 1</p>

    <p>
      Omdat D &gt; 0 zijn er twee oplossingen:
    </p>

    <p class="formula">x = 2</p>

    <p class="formula">x = 3</p>


    <h3>14. D = 0: één oplossing</h3>

    <p>
      Stel:
    </p>

    <p class="formula">D = 0</p>

    <p>
      Dan is:
    </p>

    <p class="formula">√D = 0</p>

    <p>
      De plus- en minvariant in de abc-formule leveren dan dezelfde waarde.
      Er is dus maar <strong>één reële oplossing</strong>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x² − 4x + 4 = 0</p>

    <p>
      Hier:
    </p>

    <p class="formula">D = (−4)² − 4 · 1 · 4 = 16 − 16 = 0</p>

    <p>
      De oplossing is:
    </p>

    <p class="formula">x = 2</p>

    <p>
      Dit klopt ook met factoriseren:
    </p>

    <p class="formula">(x − 2)² = 0</p>


    <h3>15. D &lt; 0: geen reële oplossingen</h3>

    <p>
      Stel:
    </p>

    <p class="formula">D &lt; 0</p>

    <p>
      Dan staat er een negatief getal onder de vierkantswortel.
      Binnen de reële getallen bestaat zo'n wortel niet.
    </p>

    <p>
      De kwadratische vergelijking heeft dan <strong>geen reële oplossing</strong>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x² + 1 = 0</p>

    <p>
      Hier:
    </p>

    <p class="formula">D = 0² − 4 · 1 · 1 = −4</p>

    <p>
      Omdat D &lt; 0 zijn er geen reële waarden van x die de vergelijking
      waar maken.
    </p>

    <p>
      Later, in de studie van de complexe getallen, zullen we zien hoe
      zulke vergelijkingen toch oplossingen kunnen krijgen.
      Voorlopig blijven we binnen de reële getallen.
    </p>


    <h3>16. De drie gevallen van de discriminant</h3>

    <p>
      We kunnen alles samenvatten:
    </p>

    <p class="formula">D &gt; 0 → twee verschillende reële oplossingen</p>

    <p class="formula">D = 0 → één reële oplossing</p>

    <p class="formula">D &lt; 0 → geen reële oplossingen</p>

    <p>
      Dit is één van de belangrijkste ideeën van deze les.
    </p>

    <div class="callout">
      <p><strong>De keten is:</strong></p>
      <p>
        kwadratische vergelijking
        → abc-formule
        → discriminant onder de wortel
        → aantal reële oplossingen.
      </p>
    </div>


    <h3>17. De grafische betekenis van de discriminant</h3>

    <p>
      Een kwadratische vergelijking hangt nauw samen met een parabool.
    </p>

    <p>
      Beschouw:
    </p>

    <p class="formula">y = ax² + bx + c</p>

    <p>
      Een oplossing van:
    </p>

    <p class="formula">ax² + bx + c = 0</p>

    <p>
      is precies een waarde van x waarvoor:
    </p>

    <p class="formula">y = 0</p>

    <p>
      De oplossingen zijn dus de plaatsen waar de parabool de x-as raakt
      of kruist.
    </p>

    <p>
      Daarom betekent:
    </p>

    <p class="formula">D &gt; 0</p>

    <p>
      dat de parabool de x-as op twee plaatsen snijdt.
    </p>

    <p class="formula">D = 0</p>

    <p>
      betekent dat de parabool de x-as op één plaats raakt.
    </p>

    <p class="formula">D &lt; 0</p>

    <p>
      betekent dat de parabool de x-as niet snijdt.
    </p>

    <p>
      De algebraïsche discriminant en de geometrische vorm van de parabool
      vertellen dus hetzelfde verhaal.
    </p>


    <h3>18. De abc-formule stap voor stap gebruiken</h3>

    <p>
      Neem:
    </p>

    <p class="formula">2x² − 3x − 2 = 0</p>

    <p>
      <strong>Stap 1: herken a, b en c.</strong>
    </p>

    <p class="formula">a = 2</p>

    <p class="formula">b = −3</p>

    <p class="formula">c = −2</p>

    <p>
      <strong>Stap 2: bereken de discriminant.</strong>
    </p>

    <p class="formula">D = (−3)² − 4 · 2 · (−2)</p>

    <p class="formula">D = 9 + 16 = 25</p>

    <p>
      Omdat D &gt; 0 zijn er twee reële oplossingen.
    </p>

    <p>
      <strong>Stap 3: gebruik de abc-formule.</strong>
    </p>

    <p class="formula">x = (3 ± √25) / 4</p>

    <p class="formula">x = (3 ± 5) / 4</p>

    <p>
      Dus:
    </p>

    <p class="formula">x = 2</p>

    <p>
      of:
    </p>

    <p class="formula">x = −1/2</p>

    <p>
      Beide waarden controleren we eventueel in de oorspronkelijke vergelijking.
    </p>


    <h3>19. Een andere methode: kwadraat afsplitsen</h3>

    <p>
      Er bestaat nog een algemene manier om een kwadratische vergelijking
      te begrijpen: het <strong>kwadraat afsplitsen</strong>,
      ook wel kwadraat afmaken genoemd.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">x² + 6x + 5 = 0</p>

    <p>
      We kunnen schrijven:
    </p>

    <p class="formula">x² + 6x + 9 = 4</p>

    <p>
      zodat:
    </p>

    <p class="formula">(x + 3)² = 4</p>

    <p>
      Daarna:
    </p>

    <p class="formula">x + 3 = ±2</p>

    <p>
      en dus:
    </p>

    <p class="formula">x = −1</p>

    <p class="formula">x = −5</p>

    <p>
      Deze methode laat goed zien waarom kwadratische vergelijkingen
      uiteindelijk met wortels kunnen worden opgelost.
    </p>

    <p>
      Voor systematisch rekenen is de abc-formule vaak handiger.
      Voor begrip van de structuur is kwadraat afsplitsen echter zeer waardevol.
    </p>


    <h3>20. Welke methode gebruik je?</h3>

    <p>
      Er zijn verschillende manieren om een kwadratische vergelijking op te lossen.
    </p>

    <ul>
      <li>
        <strong>Wortel nemen:</strong>
        wanneer de vergelijking rechtstreeks de vorm x² = a heeft.
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


    <h3>21. Controleer altijd je oplossingen</h3>

    <p>
      Een gevonden waarde is pas een oplossing wanneer ze de
      <strong>oorspronkelijke vergelijking</strong> waar maakt.
    </p>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">x² − 5x + 6 = 0</p>

    <p>
      We vonden:
    </p>

    <p class="formula">x = 2</p>

    <p>
      Controle:
    </p>

    <p class="formula">2² − 5 · 2 + 6 = 4 − 10 + 6 = 0</p>

    <p>
      Dus x = 2 is inderdaad een oplossing.
    </p>

    <p>
      Deze controle is vooral nuttig wanneer er veel negatieve getallen
      of meerdere bewerkingen in de berekening voorkomen.
    </p>


    <h3>22. Veelgemaakte fouten</h3>

    <p><strong>Fout 1: slechts één wortel nemen</strong></p>

    <p class="formula">x² = 25 → x = 5</p>

    <p>
      Dit mist de oplossing x = −5.
    </p>

    <p>
      Correct:
    </p>

    <p class="formula">x = ±5</p>

    <p><strong>Fout 2: door x delen</strong></p>

    <p>
      Bij:
    </p>

    <p class="formula">x(x − 3) = 0</p>

    <p>
      mag je niet zomaar door x delen, omdat x = 0 een mogelijke oplossing is.
    </p>

    <p><strong>Fout 3: het teken van b verkeerd overnemen</strong></p>

    <p>
      Bij:
    </p>

    <p class="formula">2x² − 3x − 2 = 0</p>

    <p>
      is:
    </p>

    <p class="formula">b = −3</p>

    <p>
      en niet b = 3.
    </p>

    <p><strong>Fout 4: de discriminant verkeerd interpreteren</strong></p>

    <p>
      D &lt; 0 betekent geen <strong>reële</strong> oplossingen,
      niet dat de vergelijking helemaal geen betekenis heeft.
    </p>


    <h3>23. Een vaste werkwijze</h3>

    <p>
      Bij een kwadratische vergelijking kun je deze werkwijze gebruiken:
    </p>

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


    <h3>24. Van vergelijking naar parabool</h3>

    <p>
      We kunnen nu een belangrijke verbinding leggen tussen algebra en meetkunde.
    </p>

    <p>
      De vergelijking:
    </p>

    <p class="formula">ax² + bx + c = 0</p>

    <p>
      vraagt naar de x-waarden waarvoor:
    </p>

    <p class="formula">y = ax² + bx + c</p>

    <p>
      gelijk is aan nul.
    </p>

    <p>
      De oplossingen van de vergelijking zijn dus precies de
      <strong>nulpunten</strong> van de bijbehorende parabool.
    </p>

    <p>
      Daarmee leggen we een belangrijke brug naar de volgende lessen:
      algebra kan een geometrische vorm beschrijven.
    </p>


    <h3>25. Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Een kwadratische vergelijking is meer dan een moeilijkere versie
      van een lineaire vergelijking.
    </p>

    <p>
      Door het verschijnen van x² kunnen er:
    </p>

    <ul>
      <li>twee verschillende reële oplossingen zijn;</li>
      <li>precies één reële oplossing zijn;</li>
      <li>geen reële oplossingen zijn.</li>
    </ul>

    <p>
      Factoriseren maakt sommige vergelijkingen eenvoudig.
      De abc-formule geeft een algemene methode.
      De discriminant vertelt vooraf hoeveel reële oplossingen er zijn.
    </p>

    <p>
      En wanneer we de vergelijking bekijken als de grafiek
      <span class="formula-inline">y = ax² + bx + c</span>,
      krijgen dezelfde drie gevallen een geometrische betekenis:
      de parabool snijdt de x-as twee keer, raakt haar één keer,
      of raakt haar helemaal niet.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De discriminant verbindt algebra en meetkunde:
      </p>
      <p class="formula">D &gt; 0 → twee snijpunten</p>
      <p class="formula">D = 0 → één raakpunt</p>
      <p class="formula">D &lt; 0 → geen snijpunten</p>
      <p>
        Eén formule vertelt ons dus tegelijk hoeveel reële oplossingen
        de vergelijking heeft en hoe de bijbehorende parabool zich
        ten opzichte van de x-as gedraagt.
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

    <p><strong>Doel:</strong></p>
    <ul>
      <li>punten beschrijven met coördinaten</li>
      <li>de assen, oorsprong en kwadranten begrijpen</li>
      <li>afstanden tussen punten berekenen</li>
      <li>het midden van een lijnstuk bepalen</li>
      <li>de helling van een rechte begrijpen en berekenen</li>
      <li>een rechte beschrijven met een vergelijking</li>
      <li>parallelle en loodrechte rechten herkennen</li>
      <li>snijpunten van rechten bepalen</li>
      <li>meetkundige problemen vertalen naar algebra</li>
    </ul>

    <p>
      In de vorige lessen gebruikten we algebra om relaties tussen getallen
      te beschrijven. Nu maken we een belangrijke stap:
      we gebruiken getallen om <strong>plaats en vorm</strong> te beschrijven.
    </p>

    <p>
      Dat is het begin van de <strong>analytische meetkunde</strong>:
      meetkundige problemen worden vertaald naar algebraïsche problemen.
    </p>


    <h3>1. Van plaats naar getallen</h3>

    <p>
      Stel dat je op een kaart wilt aangeven waar een bepaalde plaats ligt.
      Alleen zeggen dat ze "ergens rechts" of "ergens boven" ligt,
      is niet voldoende.
    </p>

    <p>
      We hebben een systeem nodig waarmee iedere positie een unieke
      beschrijving krijgt.
    </p>

    <p>
      In een vlak gebruiken we daarvoor twee getallen:
    </p>

    <p class="formula">(x, y)</p>

    <p>
      Het eerste getal geeft aan hoe ver we horizontaal gaan.
      Het tweede getal geeft aan hoe ver we verticaal gaan.
    </p>

    <p>
      Het punt:
    </p>

    <p class="formula">(3, 2)</p>

    <p>
      betekent dus:
      3 eenheden naar rechts en 2 eenheden omhoog vanaf het referentiepunt.
    </p>


    <h3>2. Het cartesisch coördinatenstelsel</h3>

    <p>
      Het referentiepunt noemen we de <strong>oorsprong</strong>.
      De oorsprong heeft coördinaten:
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
      Positieve x-waarden liggen rechts van de oorsprong.
      Negatieve x-waarden liggen links.
    </p>

    <p>
      Positieve y-waarden liggen boven de oorsprong.
      Negatieve y-waarden liggen eronder.
    </p>

    <p>
      Een punt zoals:
    </p>

    <p class="formula">A = (−3, 2)</p>

    <p>
      ligt dus 3 eenheden links en 2 eenheden boven de oorsprong.
    </p>


    <h3>3. De vier kwadranten</h3>

    <p>
      De twee assen verdelen het vlak in vier gebieden.
      Die noemen we de <strong>kwadranten</strong>.
    </p>
    <div class="theory-image">
  <img
    src="assets/assenstelsel-kwadranten.svg"
    alt="Het cartesisch assenstelsel met de vier kwadranten en de tekens van x en y."
  >
</div>

    <p>
      De tekens van x en y bepalen in welk kwadrant een punt ligt.
    </p>

    <p class="formula">(+, +) → eerste kwadrant</p>

    <p class="formula">(−, +) → tweede kwadrant</p>

    <p class="formula">(−, −) → derde kwadrant</p>

    <p class="formula">(+, −) → vierde kwadrant</p>

    <p>
      Punten op een as behoren niet tot een kwadrant.
    </p>

    <p>
      Op de x-as geldt:
    </p>

    <p class="formula">y = 0</p>

    <p>
      Op de y-as geldt:
    </p>

    <p class="formula">x = 0</p>


    <h3>4. Een punt lezen en schrijven</h3>

    <p>
      De volgorde van de coördinaten is belangrijk.
    </p>

    <p class="formula">A = (2, 5)</p>

    <p>
      betekent niet hetzelfde als:
    </p>

    <p class="formula">A = (5, 2)</p>

    <p>
      In het eerste geval is de horizontale positie 2 en de verticale
      positie 5.
      In het tweede geval zijn die omgewisseld.
    </p>

    <div class="callout">
      <p><strong>Onthoud:</strong></p>
      <p>
        Een punt wordt altijd geschreven als
        <strong>(x, y)</strong>:
        eerst horizontaal, daarna verticaal.
      </p>
    </div>


    <h3>5. Afstand horizontaal en verticaal</h3>

    <p>
      Als twee punten dezelfde y-coördinaat hebben, liggen ze op dezelfde
      horizontale lijn.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">A = (2, 3)</p>

    <p class="formula">B = (7, 3)</p>

    <p>
      Het verschil in x-coördinaat is:
    </p>

    <p class="formula">7 − 2 = 5</p>

    <p>
      De afstand tussen A en B is dus 5.
    </p>

    <p>
      Algemeen:
    </p>

    <p class="formula">afstand = |x₂ − x₁|</p>

    <p>
      Op dezelfde manier geldt voor twee punten met dezelfde x-coördinaat:
    </p>

    <p class="formula">afstand = |y₂ − y₁|</p>


    <h3>6. De afstand tussen twee willekeurige punten</h3>

    <p>
      Nu nemen we twee willekeurige punten:
    </p>

    <p class="formula">A = (x₁, y₁)</p>

    <p class="formula">B = (x₂, y₂)</p>

    <p>
      We kunnen vanuit A eerst horizontaal en daarna verticaal naar B gaan.
      De twee verplaatsingen zijn:
    </p>

    <p class="formula">Δx = x₂ − x₁</p>

    <p class="formula">Δy = y₂ − y₁</p>

    <p>
      Deze twee verplaatsingen vormen de rechthoekszijden van een rechthoekige
      driehoek.
    </p>

    <p>
      Volgens de stelling van Pythagoras is de afstand d:
    </p>

    <p class="formula">d² = (Δx)² + (Δy)²</p>

    <p>
      Dus:
    </p>

    <p class="formula">d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>

    <p>
      De afstandsformule is dus geen nieuwe willekeurige formule.
      Ze volgt rechtstreeks uit de stelling van Pythagoras.
    </p>


    <h3>7. Een afstand berekenen</h3>

    <p>
      Neem:
    </p>

    <p class="formula">A = (1, 2)</p>

    <p class="formula">B = (5, 5)</p>

    <p>
      Dan:
    </p>

    <p class="formula">x₂ − x₁ = 5 − 1 = 4</p>

    <p class="formula">y₂ − y₁ = 5 − 2 = 3</p>

    <p>
      Dus:
    </p>

    <p class="formula">d = √(4² + 3²)</p>

    <p class="formula">d = √(16 + 9)</p>

    <p class="formula">d = √25 = 5</p>

    <p>
      De twee punten liggen dus 5 eenheden uit elkaar.
    </p>


    <h3>8. Het midden van een lijnstuk</h3>

    <p>
      Soms willen we niet de afstand tussen twee punten weten,
      maar het punt dat precies halverwege ligt.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">A = (2, 4)</p>

    <p class="formula">B = (8, 10)</p>

    <p>
      De x-coördinaat van het midden is het gemiddelde van de twee
      x-coördinaten:
    </p>

    <p class="formula">(2 + 8) / 2 = 5</p>

    <p>
      Voor y doen we hetzelfde:
    </p>

    <p class="formula">(4 + 10) / 2 = 7</p>

    <p>
      Het midden M is dus:
    </p>

    <p class="formula">M = (5, 7)</p>

    <p>
      Algemeen:
    </p>

    <p class="formula">M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)</p>


    <h3>9. Van een lijnstuk naar een richting</h3>

    <p>
      Twee punten vertellen ons niet alleen hoe ver ze uit elkaar liggen.
      Ze vertellen ook iets over de <strong>richting</strong> van het lijnstuk.
    </p>

    <p>
      Stel dat we van A naar B gaan.
      Dan veranderen x en y met:
    </p>

    <p class="formula">Δx = x₂ − x₁</p>

    <p class="formula">Δy = y₂ − y₁</p>

    <p>
      We kunnen dus vragen:
      hoeveel verandert y wanneer x één eenheid verandert?
    </p>

    <p>
      Dat leidt tot het begrip <strong>helling</strong>.
    </p>


    <h3>10. De helling van een rechte</h3>

    <p>
      De helling geeft de verhouding tussen de verticale en horizontale
      verandering.
    </p>

    <p class="formula">m = Δy / Δx</p>

    <p>
      Voor twee punten:
    </p>

    <p class="formula">m = (y₂ − y₁) / (x₂ − x₁)</p>

    <p>
      Een positieve helling betekent dat de rechte stijgt wanneer we
      van links naar rechts gaan.
    </p>

    <p>
      Een negatieve helling betekent dat de rechte daalt.
    </p>

    <p>
      Een grotere absolute waarde van m betekent een steilere rechte.
    </p>


    <h3>11. Een helling berekenen</h3>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">A = (1, 2)</p>

    <p class="formula">B = (5, 5)</p>

    <p>
      Dan:
    </p>

    <p class="formula">Δy = 5 − 2 = 3</p>

    <p class="formula">Δx = 5 − 1 = 4</p>

    <p>
      De helling is:
    </p>

    <p class="formula">m = 3 / 4</p>

    <p>
      Dat betekent dat y gemiddeld 3/4 eenheid stijgt wanneer x
      één eenheid toeneemt.
    </p>


    <h3>12. Horizontale en verticale rechten</h3>

    <p>
      Bij een horizontale rechte verandert y niet.
    </p>

    <p class="formula">Δy = 0</p>

    <p>
      Dus:
    </p>

    <p class="formula">m = 0</p>

    <p>
      Een horizontale rechte heeft daarom vergelijking:
    </p>

    <p class="formula">y = b</p>

    <p>
      Bij een verticale rechte verandert x niet.
    </p>

    <p class="formula">Δx = 0</p>

    <p>
      Delen door nul is niet gedefinieerd.
      Een verticale rechte heeft daarom geen eindige helling.
    </p>

    <p>
      Haar vergelijking heeft de vorm:
    </p>

    <p class="formula">x = a</p>


    <h3>13. De vergelijking van een rechte</h3>

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

    <p class="formula">y = 2x + 3</p>

    <p>
      heeft helling 2 en snijdt de y-as in het punt:
    </p>

    <p class="formula">(0, 3)</p>

    <p>
      Wanneer x met 1 toeneemt, neemt y met 2 toe.
    </p>


    <h3>14. Een rechte bepalen uit een punt en een helling</h3>

    <p>
      Stel dat we de helling kennen:
    </p>

    <p class="formula">m = 3</p>

    <p>
      en dat de rechte door het punt:
    </p>

    <p class="formula">A = (2, 5)</p>

    <p>
      gaat.
    </p>

    <p>
      We kunnen schrijven:
    </p>

    <p class="formula">y = 3x + b</p>

    <p>
      Omdat het punt (2, 5) op de rechte ligt, moet:
    </p>

    <p class="formula">5 = 3 · 2 + b</p>

    <p class="formula">5 = 6 + b</p>

    <p class="formula">b = −1</p>

    <p>
      De rechte is dus:
    </p>

    <p class="formula">y = 3x − 1</p>

    <p>
      Dit is een voorbeeld van hoe een meetkundige voorwaarde
      wordt omgezet in een algebraïsche vergelijking.
    </p>


    <h3>15. De punt-hellingvorm</h3>

    <p>
      We kunnen dezelfde redenering rechtstreeks schrijven als:
    </p>

    <p class="formula">y − y₁ = m(x − x₁)</p>

    <p>
      Dit heet de <strong>punt-hellingvorm</strong> van een rechte.
    </p>

    <p>
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

    <p class="formula">y − 5 = 3(x − 2)</p>

    <p>
      Als we de haakjes uitwerken:
    </p>

    <p class="formula">y − 5 = 3x − 6</p>

    <p class="formula">y = 3x − 1</p>

    <p>
      We krijgen dus dezelfde rechte als hierboven.
    </p>


    <h3>16. Parallelle rechten</h3>

    <p>
      Twee verschillende rechten zijn parallel wanneer ze dezelfde richting
      hebben en elkaar niet snijden.
    </p>

    <p>
      In een coördinatenstelsel betekent dit dat ze dezelfde helling hebben.
    </p>

    <p class="formula">m₁ = m₂</p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">y = 2x + 1</p>

    <p class="formula">y = 2x − 5</p>

    <p>
      hebben allebei helling 2 en zijn dus parallel.
    </p>

    <p>
      Ze zijn niet dezelfde rechte omdat hun y-snijpunt verschillend is.
    </p>


    <h3>17. Loodrechte rechten</h3>

    <p>
      Twee rechten staan loodrecht op elkaar wanneer hun richtingen
      een rechte hoek vormen.
    </p>

    <p>
      Voor twee rechten met eindige hellingen geldt:
    </p>

    <p class="formula">m₁ · m₂ = −1</p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">m₁ = 2</p>

    <p class="formula">m₂ = −1/2</p>

    <p>
      Want:
    </p>

    <p class="formula">2 · (−1/2) = −1</p>

    <p>
      De twee rechten staan dus loodrecht op elkaar.
    </p>

    <p>
      Een horizontale en een verticale rechte vormen het bijzondere geval:
      hun hellingen zijn respectievelijk 0 en niet gedefinieerd,
      maar ze staan wel loodrecht op elkaar.
    </p>


    <h3>18. Het snijpunt van twee rechten</h3>

    <p>
      Wanneer twee rechten elkaar snijden, heeft hun snijpunt
      dezelfde x- én y-coördinaat voor beide vergelijkingen.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">y = 2x + 1</p>

    <p class="formula">y = −x + 7</p>

    <p>
      In het snijpunt hebben beide y-waarden dezelfde waarde.
      Daarom mogen we de rechterleden aan elkaar gelijkstellen:
    </p>

    <p class="formula">2x + 1 = −x + 7</p>

    <p>
      Dit is nu een gewone lineaire vergelijking.
    </p>

    <p class="formula">3x = 6</p>

    <p class="formula">x = 2</p>

    <p>
      Vul x = 2 in:
    </p>

    <p class="formula">y = 2 · 2 + 1 = 5</p>

    <p>
      Het snijpunt is:
    </p>

    <p class="formula">(2, 5)</p>

    <p>
      Een geometrisch probleem is hier dus omgezet in een
      algebraïsch probleem.
    </p>


    <h3>19. Geen of oneindig veel snijpunten</h3>

    <p>
      Niet iedere combinatie van twee rechten heeft precies één snijpunt.
    </p>

    <p>
      Parallelle verschillende rechten hebben:
    </p>

    <p class="formula">0</p>

    <p>
      snijpunten.
    </p>

    <p>
      Wanneer twee vergelijkingen eigenlijk dezelfde rechte beschrijven,
      hebben ze:
    </p>

    <p class="formula">oneindig veel</p>

    <p>
      gemeenschappelijke punten.
    </p>

    <p>
      Ook dit kunnen we algebraïsch herkennen.
    </p>


    <h3>20. Een rechte vanuit twee punten</h3>

    <p>
      Wanneer twee punten op dezelfde rechte liggen, bepalen ze samen
      de richting van die rechte.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">A = (1, 3)</p>

    <p class="formula">B = (4, 9)</p>

    <p>
      Eerst berekenen we de helling:
    </p>

    <p class="formula">m = (9 − 3) / (4 − 1)</p>

    <p class="formula">m = 6 / 3 = 2</p>

    <p>
      Daarna gebruiken we bijvoorbeeld punt A:
    </p>

    <p class="formula">y − 3 = 2(x − 1)</p>

    <p>
      Uitwerken geeft:
    </p>

    <p class="formula">y = 2x + 1</p>

    <p>
      De twee punten bepalen dus één rechte.
    </p>


    <h3>21. Een geometrisch probleem wordt algebra</h3>

    <p>
      Stel dat we willen weten waar een rechte een bepaalde verticale
      lijn snijdt.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">y = 3x − 2</p>

    <p>
      en:
    </p>

    <p class="formula">x = 4</p>

    <p>
      Omdat x = 4 in het snijpunt moet gelden, vullen we dit in:
    </p>

    <p class="formula">y = 3 · 4 − 2 = 10</p>

    <p>
      Het snijpunt is:
    </p>

    <p class="formula">(4, 10)</p>

    <p>
      We hebben dus een meetkundige vraag opgelost door een getal
      in een formule in te vullen.
    </p>


    <h3>22. De verbinding met Pythagoras</h3>

    <p>
      De afstandsformule lijkt misschien een nieuwe formule,
      maar we hebben haar al eerder gezien in een andere vorm.
    </p>

    <p>
      Bij twee punten:
    </p>

    <p class="formula">A = (x₁, y₁)</p>

    <p class="formula">B = (x₂, y₂)</p>

    <p>
      vormen de horizontale en verticale verschillen een rechthoekige driehoek.
      Pythagoras geeft:
    </p>

    <p class="formula">d² = (x₂ − x₁)² + (y₂ − y₁)²</p>

    <p>
      De analytische meetkunde bouwt dus voort op ideeën die we al kennen.
      We plaatsen de geometrie nu in een getallensysteem.
    </p>


    <h3>23. Van geometrie naar algebra en terug</h3>

    <p>
      We kunnen nu in beide richtingen werken.
    </p>

    <p>
      Vanuit een meetkundige situatie kunnen we een vergelijking maken:
    </p>

    <p class="formula">geometrie → coördinaten → vergelijking</p>

    <p>
      En vanuit een vergelijking kunnen we een geometrische betekenis
      afleiden:
    </p>

    <p class="formula">vergelijking → coördinaten → geometrie</p>

    <p>
      Dat is precies de kracht van analytische meetkunde.
    </p>


    <h3>24. Een vaste werkwijze</h3>

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


    <h3>25. Wat hebben we eigenlijk geleerd?</h3>

    <p>
      We begonnen met een eenvoudige vraag:
      hoe kunnen we de positie van een punt exact beschrijven?
    </p>

    <p>
      Met twee getallen kregen we een coördinatenstelsel.
      Daarna konden we met die getallen:
    </p>

    <ul>
      <li>punten beschrijven;</li>
      <li>afstanden berekenen;</li>
      <li>middens bepalen;</li>
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

    <p><strong>Doel:</strong></p>
    <ul>
      <li>meetkundige figuren herkennen en beschrijven;</li>
      <li>hoeken en hun eigenschappen begrijpen;</li>
      <li>eigenschappen van driehoeken gebruiken;</li>
      <li>de stelling van Pythagoras begrijpen en toepassen;</li>
      <li>omtrek en oppervlakte berekenen;</li>
      <li>inhoud van ruimtelijke figuren berekenen;</li>
      <li>meetkundige eigenschappen vertalen naar algebra.</li>
    </ul>

    <p>
      In 2.8 gebruikten we coördinaten om meetkundige problemen met
      getallen en vergelijkingen te beschrijven.
      Nu gaan we een stap terug en kijken we naar de meetkunde zelf:
      <strong>vormen, hoeken, lengtes en oppervlakten</strong>.
    </p>

    <p>
      Deze meetkunde gaat terug op de klassieke <strong>Euclidische meetkunde</strong>.
      Het uitgangspunt is dat we vanuit enkele eenvoudige definities en
      eigenschappen verdere resultaten kunnen afleiden.
    </p>


    <h3>1. Ideale vormen</h3>

    <p>
      In de werkelijkheid bestaan geen perfecte wiskundige punten,
      rechten of cirkels.
      Een potloodpunt heeft bijvoorbeeld altijd een bepaalde grootte.
    </p>

    <p>
      In de meetkunde werken we daarom met <strong>ideale objecten</strong>.
      Een punt heeft geen afmeting.
      Een rechte heeft lengte maar geen dikte.
      Een vlak heeft lengte en breedte maar geen dikte.
    </p>

    <p>
      Zulke objecten zijn modellen waarmee we de structuur van echte vormen
      kunnen beschrijven.
    </p>

    <div class="callout">
      <p><strong>Meetkunde abstraheert vorm.</strong></p>
      <p>
        We laten details van echte objecten weg en houden alleen de
        eigenschappen over die voor ons probleem belangrijk zijn.
      </p>
    </div>


    <h3>2. Lijnstukken, rechten en stralen</h3>

    <p>
      Een <strong>lijnstuk</strong> heeft twee eindpunten.
    </p>

    <p>
      Een <strong>rechte</strong> loopt onbeperkt door in beide richtingen.
    </p>

    <p>
      Een <strong>straal</strong> heeft één beginpunt en loopt onbeperkt
      door in één richting.
    </p>

    <p>
      Deze begrippen lijken op elkaar, maar zijn niet hetzelfde.
      Vooral bij lengtes is het onderscheid belangrijk:
      een lijnstuk heeft een eindige lengte, terwijl een rechte oneindig
      lang is.
    </p>


    <h3>3. Hoeken meten</h3>

    <p>
      Wanneer twee stralen vanuit hetzelfde punt vertrekken,
      ontstaat een <strong>hoek</strong>.
    </p>

    <p>
      De grootte van een hoek beschrijft hoeveel één been van de hoek
      ten opzichte van het andere gedraaid is.
    </p>

    <p>
      De bekendste eenheid is de <strong>graad</strong>.
    </p>

    <p class="formula">volle draai = 360°</p>

    <p class="formula">halve draai = 180°</p>

    <p class="formula">rechte hoek = 90°</p>

    <p>
      Een hoek kleiner dan 90° noemen we scherp.
      Een hoek groter dan 90° maar kleiner dan 180° noemen we stomp.
    </p>


    <h3>4. Hoeken op een rechte lijn</h3>

    <p>
      Een halve draai vormt een rechte hoeklijn van 180°.
      Wanneer verschillende hoeken samen een rechte lijn vormen,
      is hun som dus 180°.
    </p>

    <p class="formula">α + β = 180°</p>

    <p>
      Als bijvoorbeeld:
    </p>

    <p class="formula">α = 65°</p>

    <p>
      dan is:
    </p>

    <p class="formula">β = 180° − 65° = 115°</p>

    <p>
      Dit lijkt eenvoudig, maar het is een fundamenteel principe:
      de eigenschappen van de figuur geven ons algebraïsche vergelijkingen.
    </p>


    <h3>5. Overstaande hoeken</h3>

    <p>
      Wanneer twee rechten elkaar snijden, ontstaan vier hoeken.
    </p>

    <p>
      De hoeken die tegenover elkaar liggen noemen we
      <strong>overstaande hoeken</strong>.
    </p>

    <p>
      Overstaande hoeken zijn even groot.
    </p>

    <p class="formula">α = γ</p>

    <p class="formula">β = δ</p>

    <p>
      De reden volgt uit de eigenschap van hoeken op een rechte lijn:
      aangrenzende hoeken hebben samen 180°.
    </p>


    <h3>6. Parallelle en loodrechte lijnen</h3>

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
      Loodrechte lijnen zijn in 2.8 al teruggekomen in het
      coördinatenstelsel:
      de x-as en y-as staan loodrecht op elkaar.
    </p>


    <h3>7. Hoeken bij parallelle lijnen</h3>

    <p>
      Wanneer een derde rechte twee parallelle rechten snijdt,
      ontstaan verschillende paren van hoeken die dezelfde grootte hebben.
    </p>

    <p>
      Zo zijn overeenkomstige hoeken gelijk en zijn verwisselende
      binnenhoeken gelijk.
    </p>

    <p>
      Hierdoor kunnen we een onbekende hoek bepalen zonder die hoek
      rechtstreeks te meten.
    </p>

    <p>
      Meetkunde laat ons dus eigenschappen afleiden uit de structuur
      van een figuur in plaats van iedere lengte of hoek afzonderlijk
      te moeten meten.
    </p>


    <h3>8. Driehoeken</h3>

    <p>
      Een driehoek is een veelhoek met drie zijden en drie hoeken.
    </p>

    <p>
      De drie binnenhoeken hebben altijd samen:
    </p>

    <p class="formula">α + β + γ = 180°</p>

    <p>
      Als twee hoeken bekend zijn, kunnen we de derde dus altijd berekenen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">α = 50°</p>

    <p class="formula">β = 60°</p>

    <p>
      Dan:
    </p>

    <p class="formula">γ = 180° − 50° − 60° = 70°</p>


    <h3>9. Bijzondere driehoeken</h3>

    <p>
      Sommige driehoeken hebben extra eigenschappen.
    </p>

    <p>
      Bij een <strong>gelijkbenige driehoek</strong> zijn twee zijden even lang.
      De tegenoverliggende hoeken zijn dan ook gelijk.
    </p>

    <p>
      Bij een <strong>gelijkzijdige driehoek</strong> zijn alle drie de
      zijden even lang.
      Daardoor zijn ook alle drie de hoeken gelijk.
    </p>

    <p>
      Omdat de hoeken samen 180° zijn:
    </p>

    <p class="formula">3α = 180°</p>

    <p class="formula">α = 60°</p>

    <p>
      Een gelijkzijdige driehoek heeft dus drie hoeken van 60°.
    </p>


    <h3>10. Buitenhoeken van een driehoek</h3>

    <p>
      Verlengen we één zijde van een driehoek, dan ontstaat een
      <strong>buitenhoek</strong>.
    </p>

    <p>
      De binnenhoek en de aangrenzende buitenhoek vormen samen een
      rechte lijn.
    </p>

    <p class="formula">binnenhoek + buitenhoek = 180°</p>

    <p>
      Daaruit volgt dat een buitenhoek ook gelijk is aan de som van
      de twee tegenoverliggende binnenhoeken.
    </p>

    <p class="formula">γ = α + β</p>

    <p>
      Dit is opnieuw een voorbeeld van hoe verschillende meetkundige
      eigenschappen met elkaar samenhangen.
    </p>


    <h3>11. Rechthoekige driehoeken</h3>

    <p>
      Een <strong>rechthoekige driehoek</strong> heeft één hoek van 90°.
    </p>

    <p>
      De zijde tegenover de rechte hoek noemen we de
      <strong>schuine zijde</strong> of hypotenusa.
    </p>

    <p>
      De andere twee zijden zijn de rechthoekszijden.
    </p>

    <p>
      Rechthoekige driehoeken zijn bijzonder belangrijk omdat hun zijden
      verbonden worden door de stelling van Pythagoras.
    </p>


    <h3>12. De stelling van Pythagoras</h3>

    <p>
      Voor een rechthoekige driehoek met rechthoekszijden a en b
      en hypotenusa c geldt:
    </p>

    <p class="formula">a² + b² = c²</p>

    <p>
      De stelling zegt dus dat het kwadraat van de langste zijde gelijk is
      aan de som van de kwadraten van de twee andere zijden.
    </p>

    <p>
      Dit is meer dan een handige formule.
      Het is een algemene eigenschap van <strong>alle</strong>
      rechthoekige driehoeken.
    </p>


    <h3>13. Waarom Pythagoras werkt</h3>

    <p>
      De relatie van Pythagoras kan geometrisch worden gezien door op
      elke zijde van een rechthoekige driehoek een vierkant te tekenen.
    </p>

    <p>
      De oppervlakte van het vierkant op zijde a is:
    </p>

    <p class="formula">a²</p>

    <p>
      Op de andere rechthoekszijde krijgen we:
    </p>

    <p class="formula">b²</p>

    <p>
      Op de hypotenusa:
    </p>

    <p class="formula">c²</p>

    <p>
      De stelling van Pythagoras zegt dan:
    </p>

    <p class="formula">a² + b² = c²</p>

    <p>
      De algebraïsche vergelijking beschrijft dus een geometrische
      eigenschap van oppervlakten.
    </p>


    <h3>14. Pythagoras gebruiken</h3>

    <p>
      Stel dat de rechthoekszijden 3 en 4 zijn.
    </p>

    <p class="formula">a = 3</p>

    <p class="formula">b = 4</p>

    <p>
      Dan:
    </p>

    <p class="formula">3² + 4² = c²</p>

    <p class="formula">9 + 16 = c²</p>

    <p class="formula">25 = c²</p>

    <p>
      Omdat een lengte positief is:
    </p>

    <p class="formula">c = √25 = 5</p>

    <p>
      We vinden de bekende 3-4-5-driehoek.
    </p>


    <h3>15. Een onbekende rechthoekszijde</h3>

    <p>
      Pythagoras kunnen we ook gebruiken wanneer de hypotenusa bekend is.
    </p>

    <p>
      Uit:
    </p>

    <p class="formula">a² + b² = c²</p>

    <p>
      volgt:
    </p>

    <p class="formula">b² = c² − a²</p>

    <p>
      en dus:
    </p>

    <p class="formula">b = √(c² − a²)</p>

    <p>
      Ook hier gebruiken we dus algebra om een meetkundige onbekende
      te vinden.
    </p>


    <h3>16. Omtrek</h3>

    <p>
      De <strong>omtrek</strong> van een figuur is de totale lengte
      van de buitenrand.
    </p>

    <p>
      Voor een rechthoek met lengte l en breedte b:
    </p>

    <p class="formula">O = 2l + 2b</p>

    <p>
      Voor een vierkant met zijde a:
    </p>

    <p class="formula">O = 4a</p>

    <p>
      Voor een cirkel met straal r:
    </p>

    <p class="formula">O = 2πr</p>

    <p>
      De omtrek is een lengte en wordt dus uitgedrukt in bijvoorbeeld
      centimeter, meter of kilometer.
    </p>


    <h3>17. Oppervlakte</h3>

    <p>
      De <strong>oppervlakte</strong> vertelt hoeveel vlak een figuur inneemt.
    </p>

    <p>
      Voor een rechthoek:
    </p>

    <p class="formula">A = l · b</p>

    <p>
      Voor een vierkant:
    </p>

    <p class="formula">A = a²</p>

    <p>
      Voor een driehoek:
    </p>

    <p class="formula">A = 1/2 · b · h</p>

    <p>
      Hierbij is h de hoogte die loodrecht op de gekozen basis staat.
    </p>

    <p>
      Voor een cirkel:
    </p>

    <p class="formula">A = πr²</p>

    <p>
      Let goed op het verschil:
      omtrek meet een <strong>lengte</strong>,
      oppervlakte meet een <strong>gebied</strong>.
    </p>


    <h3>18. Waarom oppervlakte-eenheden kwadratisch zijn</h3>

    <p>
      Stel dat een vierkant een zijde van 3 meter heeft.
      Dan is de oppervlakte:
    </p>

    <p class="formula">A = 3² = 9 m²</p>

    <p>
      Waarom staat hier m²?
    </p>

    <p>
      Omdat we meter met meter vermenigvuldigen:
    </p>

    <p class="formula">m · m = m²</p>

    <p>
      Dit is belangrijk wanneer we later met schaalfactoren werken.
      Een verandering van een lengte werkt anders op een oppervlakte
      dan op een enkele lengte.
    </p>


    <h3>19. Inhoud van ruimtelijke figuren</h3>

    <p>
      Bij driedimensionale objecten komt er een derde dimensie bij:
      hoogte, diepte of dikte.
    </p>

    <p>
      De <strong>inhoud</strong> of het volume geeft aan hoeveel ruimte
      een object inneemt.
    </p>

    <p>
      Voor een balk met lengte l, breedte b en hoogte h:
    </p>

    <p class="formula">V = l · b · h</p>

    <p>
      Voor een cilinder:
    </p>

    <p class="formula">V = πr²h</p>

    <p>
      De eenheid van volume is bijvoorbeeld m³ of cm³.
    </p>


    <h3>20. Eenheden vertellen wat je berekent</h3>

    <p>
      De eenheden vormen een belangrijke controle.
    </p>

    <p>
      Een lengte heeft bijvoorbeeld een eenheid als meter:
    </p>

    <p class="formula">m</p>

    <p>
      Een oppervlakte:
    </p>

    <p class="formula">m²</p>

    <p>
      Een volume:
    </p>

    <p class="formula">m³</p>

    <p>
      Bij volume bestaat er bovendien een directe relatie met inhoud:
    </p>

    <p class="formula">1 L = 1 dm³</p>

    <p>
      Als een berekening voor een oppervlakte eindigt met meter in plaats
      van vierkante meter, is dat een aanwijzing dat er iets verkeerd is
      gegaan.
    </p>


    <h3>21. Van geometrie naar algebra</h3>

    <p>
      Meetkunde en algebra zijn geen volledig afzonderlijke werelden.
    </p>

    <p>
      Stel dat een rechthoek een oppervlakte van 40 cm² heeft
      en een lengte van 8 cm.
    </p>

    <p>
      We weten:
    </p>

    <p class="formula">A = l · b</p>

    <p>
      Invullen geeft:
    </p>

    <p class="formula">40 = 8b</p>

    <p>
      Dit is een vergelijking zoals we die in 2.3 hebben geleerd.
    </p>

    <p class="formula">b = 5 cm</p>

    <p>
      Een meetkundig probleem is dus opnieuw veranderd in een
      algebraïsch probleem.
    </p>


    <h3>22. Een figuur kan meerdere eigenschappen tegelijk hebben</h3>

    <p>
      Een rechthoek heeft bijvoorbeeld tegelijkertijd eigenschappen
      van lengtes, hoeken en oppervlakten.
    </p>

    <ul>
      <li>overstaande zijden zijn even lang;</li>
      <li>alle hoeken zijn 90°;</li>
      <li>de omtrek is 2l + 2b;</li>
      <li>de oppervlakte is l · b.</li>
    </ul>

    <p>
      Wanneer we meerdere eigenschappen combineren,
      kunnen we steeds complexere problemen oplossen.
    </p>

    <p>
      Een meetkundige figuur is dus niet zomaar een tekening:
      ze bevat een netwerk van relaties.
    </p>


    <h3>23. Een volledige toepassing</h3>

    <p>
      Een ladder van 5 meter lang staat tegen een verticale muur.
      De voet van de ladder staat 3 meter van de muur.
      Hoe hoog raakt de ladder?
    </p>

    <p>
      De muur, de grond en de ladder vormen een rechthoekige driehoek.
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
      Noem de hoogte h.
      Dan:
    </p>

    <p class="formula">3² + h² = 5²</p>

    <p class="formula">9 + h² = 25</p>

    <p class="formula">h² = 16</p>

    <p class="formula">h = 4</p>

    <p>
      De ladder raakt dus een punt dat 4 meter boven de grond ligt.
    </p>

    <div class="callout">
      <p><strong>Let op de denkstappen:</strong></p>
      <p>
        werkelijkheid → figuur → bekende lengtes → meetkundige relatie
        → vergelijking → oplossing → betekenis in de werkelijkheid.
      </p>
    </div>


    <h3>24. Bewijzen versus meten</h3>

    <p>
      Een belangrijk verschil tussen wiskunde en meten in de werkelijkheid
      is dat een meting nooit volledig exact is.
    </p>

    <p>
      Als je een hoek met een geodriehoek meet, kun je bijvoorbeeld
      ongeveer 60° vinden.
    </p>

    <p>
      In de wiskunde kunnen we echter uit eigenschappen
      <strong>exacte</strong> conclusies afleiden.
    </p>

    <p>
      Bij een gelijkzijdige driehoek weten we bijvoorbeeld exact:
    </p>

    <p class="formula">α = 60°</p>

    <p>
      We hoeven die hoek niet op te meten.
      Ze volgt uit de structuur van de figuur.
    </p>

    <p>
      Dit onderscheid tussen <strong>meten</strong> en
      <strong>afleiden</strong> is fundamenteel voor de wiskunde.
    </p>


    <h3>25. Van eigenschappen naar stellingen</h3>

    <p>
      In de meetkunde kunnen we een keten van redeneringen opbouwen.
    </p>

    <p>
      We vertrekken van definities en basisregels.
      Daaruit leiden we nieuwe eigenschappen af.
      Die eigenschappen kunnen vervolgens gebruikt worden om nog andere
      resultaten te bewijzen.
    </p>

    <p>
      Een resultaat dat op deze manier wiskundig is aangetoond,
      noemen we een <strong>stelling</strong>.
    </p>

    <p>
      De stelling van Pythagoras is daar een beroemd voorbeeld van.
    </p>

    <p>
      Het doel van meetkunde is daarom niet alleen:
      "hoe groot is deze hoek?"
    </p>

    <p>
      Het diepere doel is:
      <strong>welke eigenschappen volgen noodzakelijk uit de structuur
      van de figuur?</strong>
    </p>


    <h3>26. Een vaste werkwijze</h3>

    <p>
      Bij een meetkundig probleem kun je deze werkwijze gebruiken:
    </p>

    <ol>
      <li>Maak duidelijk welke figuur of vormen aanwezig zijn.</li>
      <li>Noteer de bekende lengtes en hoeken.</li>
      <li>Zoek naar bijzondere eigenschappen.</li>
      <li>Maak indien nodig een hulplijn of rechthoekige driehoek.</li>
      <li>Kies de meetkundige relatie die bij het probleem past.</li>
      <li>Vertaal de relatie eventueel naar een vergelijking.</li>
      <li>Los de vergelijking op.</li>
      <li>Controleer of het antwoord geometrisch en qua eenheden klopt.</li>
    </ol>


    <h3>27. Wat hebben we eigenlijk geleerd?</h3>

    <p>
      We begonnen met eenvoudige ideale vormen:
      punten, lijnen en hoeken.
    </p>

    <p>
      Daarna ontdekten we dat meetkundige figuren vaste eigenschappen
      hebben die we kunnen gebruiken om nieuwe informatie af te leiden.
    </p>

    <p>
      We leerden:
    </p>

    <ul>
      <li>hoeken op een rechte en overstaande hoeken;</li>
      <li>parallelle en loodrechte lijnen;</li>
      <li>eigenschappen van driehoeken;</li>
      <li>de stelling van Pythagoras;</li>
      <li>omtrek en oppervlakte;</li>
      <li>volume en volume-eenheden;</li>
      <li>het verschil tussen meten en wiskundig afleiden;</li>
      <li>hoe meetkunde kan worden vertaald naar algebra.</li>
    </ul>

    <p>
      Daarmee hebben we een belangrijke basis gelegd voor de volgende stap:
      <strong>gelijkvormigheid en schaal</strong>.
    </p>

    <p>
      Daar zullen we onderzoeken wat er gebeurt wanneer een figuur
      groter of kleiner wordt, terwijl zijn vorm behouden blijft.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Meetkunde gaat niet alleen over het meten van vormen.
        Het gaat vooral over het ontdekken van de
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

    <p><strong>Doel:</strong></p>
    <ul>
      <li>begrijpen wanneer twee figuren dezelfde vorm hebben</li>
      <li>overeenkomstige hoeken en zijden herkennen</li>
      <li>de schaalfactor tussen gelijkvormige figuren bepalen</li>
      <li>onbekende lengtes berekenen met verhoudingen</li>
      <li>begrijpen waarom oppervlakten veranderen met het kwadraat van de schaalfactor</li>
      <li>begrijpen waarom volumes veranderen met de derde macht van de schaalfactor</li>
      <li>schaaltekeningen, kaarten en plattegronden interpreteren</li>
      <li>gelijkvormigheid herkennen als voorbereiding op trigonometrie</li>
    </ul>

    <p>
      In de vorige lessen onderzochten we eigenschappen van figuren:
      hoeken, zijden, afstanden, oppervlakten en de stelling van Pythagoras.
      Nu kijken we naar een ander belangrijk idee:
      <strong>twee figuren kunnen dezelfde vorm hebben, maar niet dezelfde grootte.</strong>
    </p>

    <p>
      Een kleine foto en een vergrote versie van dezelfde foto hebben bijvoorbeeld
      verschillende afmetingen, maar de verhoudingen binnen de figuur blijven hetzelfde.
      Dat idee noemen we <strong>gelijkvormigheid</strong>.
    </p>


    <h3>1. Dezelfde vorm, andere grootte</h3>

    <p>
      Stel dat we een rechthoek hebben van 3 cm bij 5 cm.
      We maken daarvan een grotere rechthoek van 6 cm bij 10 cm.
    </p>

    <p class="formula">3 → 6</p>
    <p class="formula">5 → 10</p>

    <p>
      Beide afmetingen zijn verdubbeld.
      De nieuwe rechthoek is dus groter, maar de vorm is hetzelfde gebleven.
    </p>

    <p>
      Vergelijk de verhouding van de overeenkomstige zijden:
    </p>

    <p class="formula">6 / 3 = 2</p>
    <p class="formula">10 / 5 = 2</p>

    <p>
      Dezelfde factor komt bij beide lengtes terug.
      Dat is het fundamentele idee achter gelijkvormigheid.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Bij gelijkvormige figuren is de vorm hetzelfde,
        maar de grootte kan verschillen.
      </p>
    </div>


    <h3>2. Wat betekent gelijkvormig?</h3>

    <p>
      Twee figuren zijn <strong>gelijkvormig</strong> wanneer ze dezelfde vorm hebben.
      Dat betekent dat hun overeenkomstige hoeken gelijk zijn
      en dat hun overeenkomstige zijden steeds dezelfde verhouding hebben.
    </p>

    <p>
      De figuren hoeven dus niet even groot te zijn.
    </p>

    <p>
      Een vierkant van 2 cm bij 2 cm en een vierkant van 5 cm bij 5 cm
      zijn bijvoorbeeld gelijkvormig.
      Alle hoeken zijn gelijk en alle overeenkomstige zijden hebben dezelfde verhouding.
    </p>

    <p>
      Ook twee rechthoeken kunnen gelijkvormig zijn.
      Maar twee rechthoeken met verschillende lengte-breedteverhoudingen
      zijn dat niet noodzakelijk.
    </p>

    <div class="callout">
      <p>
        <strong>Gelijkvormig betekent niet gelijk groot.</strong>
      </p>
      <p>
        Het gaat om dezelfde <strong>vorm en verhoudingen</strong>.
      </p>
    </div>


    <h3>3. Overeenkomstige hoeken</h3>

    <p>
      Om twee figuren met elkaar te vergelijken, moeten we weten
      welke onderdelen bij elkaar horen.
      Die noemen we <strong>overeenkomstige onderdelen</strong>.
    </p>

    <p>
      Bij gelijkvormige figuren zijn overeenkomstige hoeken even groot.
    </p>

    <p>
      Stel dat een driehoek de hoeken heeft:
    </p>

    <p class="formula">40°, 60°, 80°</p>

    <p>
      Een tweede driehoek met hoeken:
    </p>

    <p class="formula">40°, 60°, 80°</p>

    <p>
      heeft dezelfde vorm.
    </p>

    <p>
      De overeenkomstige hoeken zijn dus:
    </p>

    <p class="formula">40° ↔ 40°</p>
    <p class="formula">60° ↔ 60°</p>
    <p class="formula">80° ↔ 80°</p>

    <p>
      De driehoeken kunnen ondertussen wel een verschillende grootte hebben.
    </p>


    <h3>4. Overeenkomstige zijden</h3>

    <p>
      Bij gelijkvormige figuren zijn niet alleen de overeenkomstige hoeken gelijk.
      Ook de overeenkomstige zijden veranderen volgens dezelfde schaalfactor.
    </p>

    <p>
      Stel dat een driehoek zijden heeft:
    </p>

    <p class="formula">3 cm, 4 cm, 5 cm</p>

    <p>
      en een tweede driehoek:
    </p>

    <p class="formula">6 cm, 8 cm, 10 cm</p>

    <p>
      Dan zien we:
    </p>

    <p class="formula">6 / 3 = 2</p>
    <p class="formula">8 / 4 = 2</p>
    <p class="formula">10 / 5 = 2</p>

    <p>
      Elke overeenkomstige zijde is dus twee keer zo lang.
    </p>

    <p>
      De tweede driehoek is een vergroting van de eerste met factor 2.
    </p>


    <h3>5. De schaalfactor</h3>

    <p>
      De factor waarmee alle lengtes veranderen noemen we de
      <strong>schaalfactor</strong>.
      We noteren die vaak met de letter <strong>k</strong>.
    </p>

    <p>
      Als een lengte van 4 cm verandert in 10 cm, dan is:
    </p>

    <p class="formula">k = 10 / 4 = 2,5</p>

    <p>
      De nieuwe lengte is dus 2,5 keer zo groot.
    </p>

    <p>
      In het algemeen geldt voor overeenkomstige lengtes:
    </p>

    <p class="formula">nieuwe lengte = k · oorspronkelijke lengte</p>

    <p>
      Of, wanneer we twee gelijkvormige figuren vergelijken:
    </p>

    <p class="formula">k = nieuwe lengte / oorspronkelijke lengte</p>

    <div class="callout">
      <p><strong>De schaalfactor vertelt hoeveel de figuur op lengteschaal verandert.</strong></p>
    </div>


    <h3>6. Van klein naar groot</h3>

    <p>
      Stel dat een kleine driehoek een zijde van 7 cm heeft.
      De overeenkomstige zijde van een grotere, gelijkvormige driehoek
      is 21 cm.
    </p>

    <p>
      De schaalfactor is:
    </p>

    <p class="formula">k = 21 / 7 = 3</p>

    <p>
      Alle overeenkomstige lengtes worden dus met 3 vermenigvuldigd.
    </p>

    <p>
      Heeft een andere zijde van de kleine driehoek een lengte van 5 cm,
      dan wordt die:
    </p>

    <p class="formula">3 · 5 = 15 cm</p>

    <p>
      We hoeven dus niet elke zijde afzonderlijk te meten.
      Zodra de schaalfactor bekend is, kunnen we alle overeenkomstige lengtes berekenen.
    </p>


    <h3>7. Van groot naar klein</h3>

    <p>
      We kunnen natuurlijk ook terugrekenen.
    </p>

    <p>
      Stel dat een model een lengte van 18 cm heeft en het echte object
      een overeenkomstige lengte van 6 cm.
    </p>

    <p>
      Van model naar werkelijkheid is:
    </p>

    <p class="formula">k = 6 / 18 = 1 / 3</p>

    <p>
      De werkelijke lengte is dus één derde van de lengte van het model.
    </p>

    <p>
      Je kunt hetzelfde probleem ook zien als een vergrotingsfactor
      van 3 wanneer je van het echte object naar het model gaat.
    </p>

    <div class="callout">
      <p>
        <strong>Let altijd op de richting van de schaalfactor.</strong>
      </p>
      <p>
        Van klein naar groot en van groot naar klein gebruiken
        tegengestelde factoren.
      </p>
    </div>


    <h3>8. Een onbekende lengte berekenen</h3>

    <p>
      Gelijkvormigheid is bijzonder nuttig wanneer één lengte onbekend is.
    </p>

    <p>
      Stel dat twee gelijkvormige driehoeken overeenkomstige zijden hebben:
    </p>

    <p class="formula">4 cm ↔ 10 cm</p>

    <p>
      Een andere zijde van de kleine driehoek is 6 cm.
      Hoe lang is de overeenkomstige zijde van de grote driehoek?
    </p>

    <p>
      Eerst bepalen we de schaalfactor:
    </p>

    <p class="formula">k = 10 / 4 = 2,5</p>

    <p>
      Daarna vermenigvuldigen we de bekende lengte:
    </p>

    <p class="formula">2,5 · 6 = 15 cm</p>

    <p>
      De onbekende zijde is dus 15 cm.
    </p>

    <p>
      Het probleem lijkt op een gewone berekening,
      maar de belangrijke stap is eerst herkennen dat dezelfde schaalfactor
      voor overeenkomstige zijden geldt.
    </p>


    <h3>9. Verhoudingen zijn belangrijker dan verschillen</h3>

    <p>
      Stel dat een figuur wordt vergroot van 4 cm naar 6 cm.
      De lengte neemt toe met:
    </p>

    <p class="formula">6 − 4 = 2 cm</p>

    <p>
      Maar bij een andere zijde van 10 cm naar 12 cm is het verschil ook:
    </p>

    <p class="formula">12 − 10 = 2 cm</p>

    <p>
      Toch zijn deze veranderingen niet hetzelfde op schaal.
    </p>

    <p>
      De eerste zijde werd vermenigvuldigd met:
    </p>

    <p class="formula">6 / 4 = 1,5</p>

    <p>
      De tweede met:
    </p>

    <p class="formula">12 / 10 = 1,2</p>

    <p>
      De verschillen zijn dus gelijk, maar de verhoudingen niet.
      De figuren vormen dan geen gelijkvormige vergroting.
    </p>

    <div class="callout">
      <p>
        <strong>Gelijkvormigheid gaat over verhoudingen, niet over gelijke verschillen.</strong>
      </p>
    </div>


    <h3>10. Gelijkvormige driehoeken</h3>

    <p>
      Driehoeken zijn bijzonder belangrijk omdat we later in trigonometrie
      voortdurend met verhoudingen van hun zijden zullen werken.
    </p>

    <p>
      Wanneer twee driehoeken dezelfde drie hoeken hebben,
      hebben ze dezelfde vorm.
      Hun overeenkomstige zijden zijn dan evenredig.
    </p>

    <p>
      Stel bijvoorbeeld:
    </p>

    <p class="formula">A = 40°, B = 60°, C = 80°</p>

    <p>
      en:
    </p>

    <p class="formula">D = 40°, E = 60°, F = 80°</p>

    <p>
      Dan horen de hoeken bij elkaar:
    </p>

    <p class="formula">A ↔ D</p>
    <p class="formula">B ↔ E</p>
    <p class="formula">C ↔ F</p>

    <p>
      De overeenkomstige zijden hebben daardoor dezelfde verhouding.
    </p>


    <h3>11. Gelijkvormigheid herkennen</h3>

    <p>
      We kunnen gelijkvormigheid op verschillende manieren herkennen.
    </p>

    <p>
      De meest directe manier is kijken naar de hoeken.
      Als de overeenkomstige hoeken gelijk zijn,
      hebben de figuren dezelfde vorm.
    </p>

    <p>
      Bij driehoeken is het daarom voldoende dat de drie overeenkomstige
      hoeken gelijk zijn.
    </p>

    <p>
      We kunnen ook de zijden vergelijken.
      Als alle overeenkomstige zijden dezelfde verhouding hebben,
      wijzen ze eveneens op dezelfde vorm.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">3 / 6 = 4 / 8 = 5 / 10 = 1 / 2</p>

    <p>
      De zijden van de tweede driehoek zijn dus allemaal tweemaal zo groot.
    </p>

    <p>
      De verhouding blijft overal dezelfde.
    </p>

    <div class="callout">
      <p><strong>Bij gelijkvormige figuren blijft de verhouding behouden.</strong></p>
    </div>


    <h3>12. Oppervlakte verandert anders dan lengte</h3>

    <p>
      Tot nu toe keken we naar lengtes.
      Maar wat gebeurt er met de oppervlakte wanneer een figuur wordt vergroot?
    </p>

    <p>
      Stel dat elke lengte wordt verdubbeld.
      De schaalfactor is dan:
    </p>

    <p class="formula">k = 2</p>

    <p>
      Neem een vierkant van 3 cm bij 3 cm.
      De oorspronkelijke oppervlakte is:
    </p>

    <p class="formula">A = 3 · 3 = 9 cm²</p>

    <p>
      Na een vergroting met factor 2 wordt het vierkant
      6 cm bij 6 cm:
    </p>

    <p class="formula">A = 6 · 6 = 36 cm²</p>

    <p>
      De oppervlakte is dus vier keer zo groot geworden:
    </p>

    <p class="formula">36 / 9 = 4</p>

    <p>
      Dat is:
    </p>

    <p class="formula">2² = 4</p>

    <p>
      De oppervlakte verandert dus met het <strong>kwadraat van de schaalfactor</strong>.
    </p>


    <h3>13. Waarom verschijnt k²?</h3>

    <p>
      Dat is geen nieuwe mysterieuze regel.
      Het volgt rechtstreeks uit de manier waarop oppervlakte wordt berekend.
    </p>

    <p>
      Een oppervlakte bestaat bijvoorbeeld uit:
    </p>

    <p class="formula">A = lengte · breedte</p>

    <p>
      Als beide lengtes met factor k worden vermenigvuldigd,
      krijgen we:
    </p>

    <p class="formula">A' = (k · lengte)(k · breedte)</p>

    <p>
      De twee factoren k kunnen we samenbrengen:
    </p>

    <p class="formula">A' = k² · lengte · breedte</p>

    <p>
      Dus:
    </p>

    <p class="formula">A' = k²A</p>

    <div class="callout">
      <p>
        <strong>Lengtes → k</strong>
      </p>
      <p>
        <strong>Oppervlakten → k²</strong>
      </p>
      <p>
        Het verschil ontstaat omdat oppervlakte uit twee lengterichtingen bestaat.
      </p>
    </div>


    <h3>14. Een oppervlakte berekenen na een vergroting</h3>

    <p>
      Stel dat een figuur een oppervlakte van 12 cm² heeft
      en wordt vergroot met factor 3.
    </p>

    <p>
      De nieuwe oppervlakte is niet 36 cm² omdat we simpelweg
      12 met 3 vermenigvuldigen.
    </p>

    <p>
      We moeten de schaalfactor kwadrateren:
    </p>

    <p class="formula">A' = 3² · 12</p>

    <p class="formula">A' = 9 · 12 = 108 cm²</p>

    <p>
      De oppervlakte is dus negen keer zo groot.
    </p>


    <h3>15. Volume verandert met k³</h3>

    <p>
      Bij een driedimensionaal object hebben we drie lengterichtingen:
      lengte, breedte en hoogte.
    </p>

    <p>
      Neem een kubus met zijde 2 cm.
      Het volume is:
    </p>

    <p class="formula">V = 2 · 2 · 2 = 8 cm³</p>

    <p>
      Vergroot de kubus met factor 3.
      Elke zijde wordt dan 6 cm:
    </p>

    <p class="formula">V = 6 · 6 · 6 = 216 cm³</p>

    <p>
      De volumeverhouding is:
    </p>

    <p class="formula">216 / 8 = 27</p>

    <p>
      En:
    </p>

    <p class="formula">3³ = 27</p>

    <p>
      Daarom verandert het volume van een gelijkvormig ruimtelijk object met
      de derde macht van de schaalfactor:
    </p>

    <p class="formula">V' = k³V</p>

    <div class="callout">
      <p>
        <strong>Lengte → k</strong>
      </p>
      <p>
        <strong>Oppervlakte → k²</strong>
      </p>
      <p>
        <strong>Volume → k³</strong>
      </p>
    </div>


    <h3>16. Schaaltekeningen</h3>

    <p>
      Gelijkvormigheid wordt veel gebruikt om grote objecten
      op papier weer te geven.
    </p>

    <p>
      Een gebouw, wegennet of terrein kan onmogelijk op ware grootte
      op een blad papier worden getekend.
      Daarom gebruiken we een schaal.
    </p>

    <p>
      Bij een schaal van 1 : 100 betekent dit:
    </p>

    <p class="formula">1 cm op de tekening = 100 cm in werkelijkheid</p>

    <p>
      Dus een muur die op de tekening 4 cm lang is,
      heeft in werkelijkheid een lengte van:
    </p>

    <p class="formula">4 · 100 = 400 cm</p>

    <p>
      Dat is:
    </p>

    <p class="formula">400 cm = 4 m</p>

    <p>
      De schaal is dus een vaste verhouding tussen de tekening
      en de werkelijkheid.
    </p>


    <h3>17. Schaal is een verhouding</h3>

    <p>
      Een schaal zoals 1 : 50 betekent niet dat er ergens een
      speciale eenheid "schaal" bestaat.
      Het is een verhouding.
    </p>

    <p>
      De verhouding is:
    </p>

    <p class="formula">tekening / werkelijkheid = 1 / 50</p>

    <p>
      Daarom moeten de twee lengtes dezelfde eenheid hebben
      voordat we de verhouding gebruiken.
    </p>

    <p>
      Stel dat een afstand op een kaart 3 cm is.
      De kaart heeft schaal 1 : 25 000.
    </p>

    <p>
      Dan is de werkelijke afstand:
    </p>

    <p class="formula">3 · 25 000 = 75 000 cm</p>

    <p>
      Omzetten naar meter:
    </p>

    <p class="formula">75 000 cm = 750 m</p>

    <p>
      En dus:
    </p>

    <p class="formula">750 m = 0,75 km</p>


    <h3>18. Van werkelijkheid naar tekening</h3>

    <p>
      We kunnen ook de andere richting uit rekenen.
    </p>

    <p>
      Stel dat een gebouw 20 m lang is en we willen het tekenen
      op schaal 1 : 100.
    </p>

    <p>
      Eerst zetten we 20 m om naar centimeter:
    </p>

    <p class="formula">20 m = 2000 cm</p>

    <p>
      Daarna delen we door 100:
    </p>

    <p class="formula">2000 / 100 = 20 cm</p>

    <p>
      Het gebouw wordt dus 20 cm lang op de tekening.
    </p>

    <p>
      Dezelfde verhouding werkt voor elke andere overeenkomstige lengte.
    </p>


    <h3>19. De schaalfactor kan kleiner zijn dan 1</h3>

    <p>
      Een schaaltekening is meestal kleiner dan de werkelijkheid.
      De schaalfactor van werkelijkheid naar tekening is dan kleiner dan 1.
    </p>

    <p>
      Bij schaal 1 : 100 is:
    </p>

    <p class="formula">k = 1 / 100 = 0,01</p>

    <p>
      Een werkelijke lengte van 8 m wordt op de tekening:
    </p>

    <p class="formula">0,01 · 8 m = 0,08 m</p>

    <p>
      Dat is:
    </p>

    <p class="formula">0,08 m = 8 cm</p>

    <p>
      Hetzelfde principe geldt voor vergrotingen.
      Een schaalfactor groter dan 1 betekent een vergroting;
      een schaalfactor tussen 0 en 1 betekent een verkleining.
    </p>


    <h3>20. Een volledig schaalprobleem</h3>

    <p>
      Stel dat een plattegrond van een tuin schaal 1 : 200 heeft.
      Op de plattegrond is een rechthoekig terras 3 cm lang en 2 cm breed.
    </p>

    <p>
      De werkelijke lengte is:
    </p>

    <p class="formula">3 · 200 = 600 cm = 6 m</p>

    <p>
      De werkelijke breedte is:
    </p>

    <p class="formula">2 · 200 = 400 cm = 4 m</p>

    <p>
      De werkelijke oppervlakte is dus:
    </p>

    <p class="formula">A = 6 · 4 = 24 m²</p>

    <p>
      Let op dat we niet de oppervlakte van de tekening
      rechtstreeks met 200 vermenigvuldigen.
      Oppervlakte schaalt met het kwadraat:
    </p>

    <p class="formula">k² = 200²</p>

    <p>
      Beide methoden moeten hetzelfde resultaat geven.
      Het expliciet omzetten van de lengtes maakt de betekenis
      van de berekening vaak duidelijker.
    </p>


    <h3>21. Waarom is gelijkvormigheid zo krachtig?</h3>

    <p>
      Gelijkvormigheid laat ons eigenschappen van een figuur
      overbrengen naar een andere figuur.
    </p>

    <p>
      Als we één verhouding kennen, kunnen we andere lengtes bepalen.
      Als we de schaalfactor kennen, kunnen we oppervlakten en volumes berekenen.
    </p>

    <p>
      Daardoor kunnen we afmetingen bepalen die we niet rechtstreeks
      kunnen meten.
    </p>

    <p>
      Een landmeter kan bijvoorbeeld een ontoegankelijke afstand
      indirect bepalen door gebruik te maken van gelijkvormige driehoeken.
    </p>

    <p>
      Hetzelfde idee ligt achter veel toepassingen van kaarten,
      maquettes, technische tekeningen en modellen.
    </p>


    <h3>22. Gelijkvormigheid en verhoudingen in driehoeken</h3>

    <p>
      Hier begint de verbinding met de volgende belangrijke stap
      in onze wiskundige ontwikkeling.
    </p>

    <p>
      Beschouw twee gelijkvormige rechthoekige driehoeken
      met dezelfde scherpe hoek.
    </p>

    <p>
      De driehoeken kunnen verschillende afmetingen hebben,
      maar de verhoudingen van overeenkomstige zijden zijn gelijk.
    </p>

    <p>
      Als bijvoorbeeld bij de ene driehoek:
    </p>

    <p class="formula">overstaande zijde / schuine zijde = 3 / 5</p>

    <p>
      dan geldt bij elke gelijkvormige driehoek met dezelfde hoek
      dezelfde verhouding.
    </p>

    <p>
      Dat betekent dat zo'n verhouding niet langer alleen een verhouding
      tussen twee toevallig gekozen lengtes is.
      Ze hangt samen met de <strong>hoek</strong>.
    </p>

    <p>
      Dit idee vormt de basis voor sinus, cosinus en tangens,
      die we later in les 2.14 zullen invoeren.
    </p>

    <div class="callout">
      <p><strong>Brug naar trigonometrie:</strong></p>
      <p>
        Gelijkvormige driehoeken zorgen ervoor dat een verhouding van
        overeenkomstige zijden hetzelfde blijft voor een bepaalde hoek.
      </p>
      <p>
        Trigonometrie geeft deze vaste verhoudingen vervolgens
        een eigen naam: sinus, cosinus en tangens.
      </p>
    </div>


    <h3>23. Veelgemaakte fouten</h3>

    <p>
      Bij gelijkvormigheid ontstaan vaak fouten doordat lengtes,
      oppervlakten en volumes door elkaar worden gehaald.
    </p>

    <ul>
      <li>
        <strong>Lengtes met k² vermenigvuldigen:</strong>
        fout. Lengtes veranderen met k.
      </li>
      <li>
        <strong>Oppervlakten met k vermenigvuldigen:</strong>
        fout. Oppervlakten veranderen met k².
      </li>
      <li>
        <strong>Volumes met k² vermenigvuldigen:</strong>
        fout. Volumes veranderen met k³.
      </li>
      <li>
        <strong>Verschillen gebruiken in plaats van verhoudingen:</strong>
        gelijkvormigheid draait om een constante verhouding.
      </li>
      <li>
        <strong>Eenheden door elkaar gebruiken:</strong>
        bijvoorbeeld meter in de ene lengte en centimeter in de andere.
        Zet ze eerst om naar dezelfde eenheid.
      </li>
      <li>
        <strong>De schaalfactor in de verkeerde richting gebruiken:</strong>
        controleer altijd welke figuur de oorspronkelijke en welke de nieuwe is.
      </li>
    </ul>


    <h3>24. Een vaste werkwijze</h3>

    <p>
      Bij een probleem met gelijkvormige figuren kun je steeds dezelfde
      redenering gebruiken.
    </p>

    <ol>
      <li>Controleer of de figuren dezelfde vorm hebben.</li>
      <li>Bepaal welke zijden en hoeken overeenkomstig zijn.</li>
      <li>Zorg dat de lengtes dezelfde eenheid hebben.</li>
      <li>Bepaal de schaalfactor.</li>
      <li>Gebruik de schaalfactor voor overeenkomstige lengtes.</li>
      <li>Gebruik k² voor oppervlakten.</li>
      <li>Gebruik k³ voor volumes.</li>
      <li>Controleer of de richting van de schaalfactor klopt.</li>
      <li>Controleer of het antwoord logisch is.</li>
    </ol>

    <p>
      De belangrijkste stap is vaak niet het rekenen,
      maar het herkennen van de structuur:
      <strong>dezelfde vorm betekent een vaste verhouding.</strong>
    </p>


    <h3>25. Wat hebben we eigenlijk geleerd?</h3>

    <p>
      Gelijkvormigheid gaat over figuren die dezelfde vorm hebben,
      maar niet noodzakelijk dezelfde grootte.
    </p>

    <p>
      Bij gelijkvormige figuren zijn overeenkomstige hoeken gelijk
      en hebben overeenkomstige zijden steeds dezelfde verhouding.
    </p>

    <p>
      Die verhouding wordt beschreven met de schaalfactor:
    </p>

    <p class="formula">k = nieuwe lengte / oorspronkelijke lengte</p>

    <p>
      Lengtes veranderen met factor k:
    </p>

    <p class="formula">l' = k · l</p>

    <p>
      Oppervlakten veranderen met het kwadraat:
    </p>

    <p class="formula">A' = k² · A</p>

    <p>
      Volumes veranderen met de derde macht:
    </p>

    <p class="formula">V' = k³ · V</p>

    <p>
      Hetzelfde principe maakt schaaltekeningen,
      kaarten en maquettes mogelijk.
    </p>

    <p>
      Maar het belangrijkste idee gaat nog verder.
      Bij gelijkvormige rechthoekige driehoeken blijven
      bepaalde verhoudingen van zijden gelijk wanneer de hoek gelijk blijft.
      Daardoor kunnen we verhoudingen aan hoeken koppelen.
    </p>

    <p>
      Dat is precies de stap die we nodig hebben om in trigonometrie
      sinus, cosinus en tangens te begrijpen.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Gelijkvormigheid betekent dat de <strong>vorm behouden blijft</strong>
        terwijl de grootte verandert.
      </p>
      <p>
        De sleutel is een vaste verhouding tussen overeenkomstige lengtes.
        Vanuit die ene schaalfactor volgen de regels voor lengtes,
        oppervlakten en volumes.
      </p>
      <p>
        Gelijkvormigheid vormt bovendien de brug van elementaire meetkunde
        naar trigonometrie: bij dezelfde hoek blijven verhoudingen tussen
        overeenkomstige zijden behouden.
      </p>
    </div>
  `
}, 
  {
  id: "2.11",
  title: "Functies als relaties",
  goal: "Hoe beschrijven we afhankelijkheid?",
  theory: `
    <h3>Van een verband naar een functie</h3>

    <p>In de vorige lessen gebruikten we formules om grootheden met elkaar te verbinden. Bijvoorbeeld:</p>

    <p class="formula">prijs = 3 × aantal</p>

    <p>Als één product €3 kost, hangt de totale prijs af van het aantal producten dat je koopt.</p>

    <p>Bij 1 product is de prijs €3. Bij 2 producten is de prijs €6. Bij 5 producten is de prijs €15.</p>

    <p>We hebben dus een <strong>verband</strong> tussen twee grootheden:</p>

    <ul>
      <li>het aantal producten is de invoer;</li>
      <li>de totale prijs is de uitvoer.</li>
    </ul>

    <p>Een functie is een wiskundige manier om zo'n afhankelijkheid te beschrijven.</p>


    <h3>Invoer en uitvoer</h3>

    <p>Denk aan een automaat. Je stopt er iets in en krijgt er iets uit.</p>

    <p>Bij een wiskundige functie werkt het op dezelfde manier:</p>

    <p class="formula">invoer → functie → uitvoer</p>

    <p>De invoer is de waarde waarmee je begint. De functie bepaalt vervolgens welke uitvoer daarbij hoort.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>Als de invoer 3 is, berekenen we:</p>

    <p class="formula">f(3) = 2 × 3 + 1 = 7</p>

    <p>De invoer is dus 3 en de uitvoer is 7.</p>


    <h3>Een functie als machine</h3>

    <p>Je kunt een functie voorstellen als een machine die volgens een vaste regel werkt.</p>

    <p>Stel dat de regel is: <strong>vermenigvuldig met 2 en tel daarna 1 op</strong>.</p>

    <p>Dan gebeurt er bijvoorbeeld:</p>

    <p class="formula">3 → × 2 → + 1 → 7</p>

    <p>En:</p>

    <p class="formula">5 → × 2 → + 1 → 11</p>

    <p>De functie verandert de invoer volgens één bepaalde regel in een uitvoer.</p>

    <p>De machine is daarbij geen echte machine. Het is een manier om te denken over een wiskundige regel.</p>


    <h3>Dezelfde invoer geeft dezelfde uitvoer</h3>

    <p>Het belangrijkste kenmerk van een functie is dat een bepaalde invoer <strong>één unieke uitvoer</strong> heeft.</p>

    <p>Als we bijvoorbeeld weten dat:</p>

    <p class="formula">f(3) = 7</p>

    <p>dan kan dezelfde functie niet tegelijkertijd geven:</p>

    <p class="formula">f(3) = 9</p>

    <p>Een functie moet voor dezelfde invoer steeds dezelfde uitvoer geven.</p>

    <p>Dat betekent niet dat verschillende invoeren geen dezelfde uitvoer mogen hebben.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = x²</p>

    <p>geeft:</p>

    <p class="formula">f(2) = 4</p>

    <p>maar ook:</p>

    <p class="formula">f(-2) = 4</p>

    <p>Dat is geen probleem. Twee verschillende invoeren mogen dezelfde uitvoer hebben.</p>


    <h3>Een functie beschrijven met een tabel</h3>

    <p>Een functie kun je ook in een tabel voorstellen.</p>

    <p>Neem opnieuw:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>We kunnen verschillende invoerwaarden kiezen en de bijbehorende uitvoer berekenen:</p>

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

    <p>Elke rij bevat een invoer en de uitvoer die daarbij hoort.</p>

    <p>Een tabel is daardoor een handige manier om een functie overzichtelijk te beschrijven.</p>


    <h3>Een functie beschrijven met een grafiek</h3>

    <p>We kunnen dezelfde tabel ook als punten in een assenstelsel voorstellen.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">(0, 1), (1, 3), (2, 5), (3, 7)</p>

    <p>Het eerste getal is de invoerwaarde en het tweede getal de uitvoerwaarde.</p>

    <p>Een punt met coördinaten <span class="formula-inline">(2, 5)</span> betekent dus:</p>

    <p class="formula">f(2) = 5</p>

    <p>Een grafiek geeft zo een visuele voorstelling van het verband tussen invoer en uitvoer.</p>


    <h3>Een functie beschrijven met een formule</h3>

    <p>Een formule geeft de regel van de functie compact weer.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>Deze formule vertelt ons precies wat er met de invoer gebeurt.</p>

    <p>We nemen de invoer <span class="formula-inline">x</span>, vermenigvuldigen die met 2 en tellen er 1 bij op.</p>

    <p>De formule bevat dus dezelfde informatie als de functie-machine, maar in een compacte wiskundige vorm.</p>


    <h3>Drie manieren om hetzelfde verband te beschrijven</h3>

    <p>Een functie kan op verschillende manieren worden weergegeven:</p>

    <ul>
      <li>met woorden;</li>
      <li>met een tabel;</li>
      <li>met een grafiek;</li>
      <li>met een formule.</li>
    </ul>

    <p>Bijvoorbeeld de functie:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>kan worden beschreven als:</p>

    <p><strong>In woorden:</strong> vermenigvuldig de invoer met 2 en tel 1 op.</p>

    <p><strong>In een tabel:</strong> verschillende invoerwaarden met hun uitvoerwaarden.</p>

    <p><strong>In een grafiek:</strong> punten die het verband tussen x en f(x) voorstellen.</p>

    <p><strong>Met een formule:</strong></p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>Deze voorstellingen zijn geen verschillende functies. Ze beschrijven hetzelfde verband op verschillende manieren.</p>


    <h3>Functienotatie: f(x)</h3>

    <p>We gebruiken vaak een speciale notatie voor functies.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 3x + 2</p>

    <p>De letter <span class="formula-inline">f</span> is de naam van de functie.</p>

    <p>De <span class="formula-inline">x</span> tussen haakjes geeft aan welke invoer we gebruiken.</p>

    <p>De notatie:</p>

    <p class="formula">f(5)</p>

    <p>betekent dus: <strong>de uitvoer van functie f wanneer de invoer 5 is</strong>.</p>

    <p>Als:</p>

    <p class="formula">f(x) = 3x + 2</p>

    <p>dan is:</p>

    <p class="formula">f(5) = 3 × 5 + 2 = 17</p>


    <h3>Een waarde van een functie berekenen</h3>

    <p>Een functiewaarde berekenen betekent dat je een bepaalde invoer in de formule invult.</p>

    <p>Neem:</p>

    <p class="formula">f(x) = x² + 2</p>

    <p>We willen <span class="formula-inline">f(4)</span> kennen.</p>

    <p>We vervangen x door 4:</p>

    <p class="formula">f(4) = 4² + 2</p>

    <p>Dus:</p>

    <p class="formula">f(4) = 18</p>

    <p>Het belangrijke idee is niet de notatie zelf, maar de betekenis:</p>

    <p><strong>een bepaalde invoer wordt volgens de functieregel omgezet in een bepaalde uitvoer.</strong></p>


    <h3>Een functie gebruiken om terug te rekenen</h3>

    <p>Soms kennen we de uitvoer en willen we de bijbehorende invoer vinden.</p>

    <p>Neem:</p>

    <p class="formula">f(x) = 2x + 3</p>

    <p>We weten dat de uitvoer 11 is.</p>

    <p>Dan zoeken we de invoer waarvoor geldt:</p>

    <p class="formula">2x + 3 = 11</p>

    <p>Dit is een vergelijking. We lossen ze op:</p>

    <p class="formula">2x = 8</p>

    <p class="formula">x = 4</p>

    <p>De invoer 4 geeft dus de uitvoer 11.</p>

    <p>Hier zien we een belangrijke verbinding met milestone 2.3: <strong>functies en vergelijkingen kunnen samen worden gebruikt om een onbekende te vinden.</strong></p>


    <h3>Het verschil tussen een variabele en een functie</h3>

    <p>De begrippen <strong>variabele</strong> en <strong>functie</strong> zijn niet hetzelfde.</p>

    <p>Een variabele is een grootheid waarvan de waarde kan veranderen.</p>

    <p>Een functie is een regel die waarden aan elkaar koppelt.</p>

    <p>In:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>is <span class="formula-inline">x</span> de invoerwaarde. De functie <span class="formula-inline">f</span> bepaalt welke uitvoer daarbij hoort.</p>

    <p>De functie is dus niet hetzelfde als de letter x.</p>


    <h3>Domein: welke invoer is toegestaan?</h3>

    <p>Niet elke formule kan voor elke invoerwaarde worden gebruikt.</p>

    <p>Neem bijvoorbeeld:</p>

    <p class="formula">f(x) = \\frac{1}{x}</p>

    <p>Voor <span class="formula-inline">x = 2</span> gaat dat goed:</p>

    <p class="formula">f(2) = \\frac{1}{2}</p>

    <p>Maar voor <span class="formula-inline">x = 0</span> krijgen we:</p>

    <p class="formula">f(0) = \\frac{1}{0}</p>

    <p>Delen door nul is niet gedefinieerd.</p>

    <p>De verzameling invoerwaarden waarvoor een functie geldig is, noemen we het <strong>domein</strong>.</p>

    <p>In dit voorbeeld hoort 0 dus niet bij het domein.</p>


    <h3>Bereik: welke uitvoer is mogelijk?</h3>

    <p>Naast het domein kunnen we ook kijken naar de uitvoerwaarden die een functie kan produceren.</p>

    <p>Neem:</p>

    <p class="formula">f(x) = x²</p>

    <p>Als x positief of negatief is, blijft de uitvoer steeds nul of positief:</p>

    <p class="formula">0² = 0</p>

    <p class="formula">2² = 4</p>

    <p class="formula">(-2)² = 4</p>

    <p>Een negatieve uitvoer is hier dus niet mogelijk.</p>

    <p>De verzameling waarden die als uitvoer kunnen voorkomen, noemen we het <strong>bereik</strong> van de functie.</p>

    <p>Het domein gaat dus over mogelijke <strong>invoer</strong>; het bereik over mogelijke <strong>uitvoer</strong>.</p>


    <h3>Niet elke relatie is een functie</h3>

    <p>We kunnen twee grootheden op allerlei manieren met elkaar verbinden. Maar niet elke relatie is een functie.</p>

    <p>Stel dat we aan een persoon meerdere telefoonnummers koppelen.</p>

    <p>Een persoon kan bijvoorbeeld zowel een privé- als een werknummer hebben.</p>

    <p>Dan kan één invoer meerdere uitvoerwaarden hebben.</p>

    <p>Dat voldoet niet aan de definitie van een functie.</p>

    <p>Bij een functie moet iedere toegelaten invoerwaarde precies één uitvoerwaarde hebben.</p>

    <p>Omgekeerd mogen verschillende invoerwaarden wel dezelfde uitvoer hebben.</p>


    <h3>Hoe herken je een functie in een tabel?</h3>

    <p>Bij een tabel kun je eenvoudig controleren of een relatie een functie is.</p>

    <p>Kijk naar de invoerwaarden.</p>

    <p>Als dezelfde invoerwaarde twee verschillende uitvoerwaarden heeft, is de relatie geen functie.</p>

    <p>Bijvoorbeeld:</p>

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

    <p>De invoer 2 heeft hier zowel uitvoer 5 als uitvoer 8.</p>

    <p>Dit kan dus geen functie zijn.</p>


    <h3>Hoe herken je een functie in een grafiek?</h3>

    <p>Ook een grafiek kunnen we controleren.</p>

    <p>Voor iedere invoerwaarde x mag er maximaal één uitvoerwaarde y zijn.</p>

    <p>Je kunt dit zien door een verticale lijn door de grafiek te denken.</p>

    <p>Als zo'n verticale lijn de grafiek op twee verschillende plaatsen snijdt, hoort dezelfde x-waarde bij twee verschillende y-waarden.</p>

    <p>Dan stelt de grafiek geen functie van x voor.</p>

    <p>Snijdt iedere verticale lijn de grafiek hoogstens één keer, dan kan de grafiek wel een functie van x voorstellen.</p>


    <h3>Een functie kan stijgen en dalen</h3>

    <p>Een functie hoeft niet altijd groter te worden wanneer de invoer groter wordt.</p>

    <p>Neem bijvoorbeeld:</p>

    <p class="formula">f(x) = -x</p>

    <p>Als x groter wordt, wordt f(x) kleiner:</p>

    <p class="formula">f(1) = -1</p>

    <p class="formula">f(2) = -2</p>

    <p class="formula">f(3) = -3</p>

    <p>Een functie kan dus stijgen, dalen of op verschillende plaatsen verschillend gedrag vertonen.</p>

    <p>Dit soort eigenschappen kunnen we later uit de grafiek en de formule aflezen.</p>


    <h3>Een constante functie</h3>

    <p>Soms verandert de uitvoer helemaal niet wanneer de invoer verandert.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 5</p>

    <p>Dan geldt:</p>

    <p class="formula">f(1) = 5</p>

    <p class="formula">f(10) = 5</p>

    <p class="formula">f(-3) = 5</p>

    <p>Welke invoer we ook kiezen, de uitvoer blijft 5.</p>

    <p>Zo'n functie noemen we een <strong>constante functie</strong>.</p>

    <p>De invoer mag veranderen, terwijl de uitvoer gelijk blijft.</p>


    <h3>Een verband hoeft niet lineair te zijn</h3>

    <p>Een functie hoeft geen rechte lijn als grafiek te hebben.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = x²</p>

    <p>is ook een functie.</p>

    <p>De uitvoer wordt hier bepaald door het kwadraat van de invoer.</p>

    <p>We krijgen bijvoorbeeld:</p>

    <p class="formula">f(-2) = 4</p>

    <p class="formula">f(-1) = 1</p>

    <p class="formula">f(0) = 0</p>

    <p class="formula">f(1) = 1</p>

    <p class="formula">f(2) = 4</p>

    <p>De grafiek heeft daardoor een andere vorm dan een rechte.</p>

    <p>In de volgende milestone zullen we lineaire en kwadratische functies systematisch onderzoeken.</p>


    <h3>Een functie kan verschillende soorten verbanden beschrijven</h3>

    <p>Het begrip functie zegt op zichzelf nog niet <em>welke</em> rekenregel wordt gebruikt.</p>

    <p>Een functie kan bijvoorbeeld een vast bedrag toevoegen:</p>

    <p class="formula">f(x) = x + 5</p>

    <p>Ze kan een hoeveelheid verdubbelen:</p>

    <p class="formula">f(x) = 2x</p>

    <p>Ze kan een kwadraat nemen:</p>

    <p class="formula">f(x) = x²</p>

    <p>Of ze kan een veel ingewikkelder verband beschrijven.</p>

    <p>Het woord <strong>functie</strong> vertelt ons vooral iets over de structuur:</p>

    <p><strong>elke toegelaten invoer heeft precies één uitvoer.</strong></p>


    <h3>Functies uit de werkelijkheid</h3>

    <p>Functies zijn niet alleen abstracte formules.</p>

    <p>Ze ontstaan vanzelf wanneer één grootheid afhangt van een andere.</p>

    <p>Voorbeelden zijn:</p>

    <ul>
      <li>de prijs als functie van het aantal producten;</li>
      <li>de afgelegde afstand als functie van de tijd;</li>
      <li>de temperatuur als functie van het tijdstip;</li>
      <li>het gewicht als functie van de hoeveelheid materiaal;</li>
      <li>de oppervlakte van een vierkant als functie van zijn zijde.</li>
    </ul>

    <p>In elk geval vragen we ons af:</p>

    <p><strong>Als ik de invoer ken, kan ik dan volgens een bepaalde regel de uitvoer bepalen?</strong></p>

    <p>Als iedere toegelaten invoer precies één uitvoer heeft, kunnen we het verband als een functie beschrijven.</p>


    <h3>Een volledig voorbeeld: afstand en tijd</h3>

    <p>Stel dat een fietser met een constante snelheid van 20 km/u rijdt.</p>

    <p>De afgelegde afstand hangt dan af van de tijd.</p>

    <p>Na 1 uur is de afstand:</p>

    <p class="formula">20 km</p>

    <p>Na 2 uur:</p>

    <p class="formula">40 km</p>

    <p>Na 3 uur:</p>

    <p class="formula">60 km</p>

    <p>We kunnen dit verband schrijven als:</p>

    <p class="formula">d(t) = 20t</p>

    <p>Hierbij is:</p>

    <ul>
      <li><span class="formula-inline">t</span> de tijd in uren;</li>
      <li><span class="formula-inline">d(t)</span> de afstand in kilometer.</li>
    </ul>

    <p>De functie vertelt ons dus hoeveel kilometer de fietser na een bepaalde tijd heeft afgelegd.</p>

    <p>Na 2,5 uur:</p>

    <p class="formula">d(2,5) = 20 × 2,5 = 50</p>

    <p>De fietser heeft dan 50 km afgelegd.</p>


    <h3>Van tabel naar grafiek en formule</h3>

    <p>We kunnen hetzelfde verband vanuit verschillende voorstellingen bekijken.</p>

    <p>Voor de fietser krijgen we bijvoorbeeld:</p>

    <table>
      <thead>
        <tr>
          <th>t (uur)</th>
          <th>d (km)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>1</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>40</td>
        </tr>
        <tr>
          <td>3</td>
          <td>60</td>
        </tr>
      </tbody>
    </table>

    <p>Deze waarden kunnen we als punten in een assenstelsel tekenen.</p>

    <p>De formule is:</p>

    <p class="formula">d(t) = 20t</p>

    <p>De tabel, de grafiek en de formule beschrijven dus hetzelfde fysieke verband.</p>

    <p>Dit is een belangrijk idee: <strong>we kunnen tussen verschillende representaties van hetzelfde verband bewegen.</strong></p>


    <h3>Functies vergelijken</h3>

    <p>Wanneer we functies vergelijken, kunnen we verschillende vragen stellen.</p>

    <ul>
      <li>Welke functie geeft de grootste uitvoer?</li>
      <li>Welke functie stijgt sneller?</li>
      <li>Waar hebben twee functies dezelfde uitvoer?</li>
      <li>Voor welke invoer is een functie gedefinieerd?</li>
      <li>Welke uitvoerwaarden zijn mogelijk?</li>
    </ul>

    <p>Daarbij kunnen we een tabel, grafiek of formule gebruiken.</p>

    <p>Een functie is dus niet alleen iets waarmee je een getal uitrekent. Het is een manier om een <strong>afhankelijkheid</strong> te onderzoeken.</p>


    <h3>Veelgemaakte fouten</h3>

    <p><strong>Fout 1: denken dat een functie altijd een formule is.</strong></p>

    <p>Een functie kan ook met woorden, een tabel of een grafiek worden beschreven.</p>

    <p><strong>Fout 2: denken dat verschillende invoeren nooit dezelfde uitvoer mogen hebben.</strong></p>

    <p>Dat mag wel. Bij <span class="formula-inline">f(x) = x²</span> geven 2 en −2 allebei de uitvoer 4.</p>

    <p><strong>Fout 3: denken dat iedere relatie een functie is.</strong></p>

    <p>Bij een functie mag één invoer niet naar verschillende uitvoerwaarden leiden.</p>

    <p><strong>Fout 4: f(x) zien als vermenigvuldiging.</strong></p>

    <p>De notatie <span class="formula-inline">f(x)</span> betekent niet automatisch f × x. Ze betekent: de uitvoer van functie f bij invoer x.</p>

    <p><strong>Fout 5: domein en bereik verwarren.</strong></p>

    <p>Het domein gaat over mogelijke invoerwaarden. Het bereik gaat over mogelijke uitvoerwaarden.</p>


    <h3>Een vaste werkwijze</h3>

    <p>Wanneer je een functie tegenkomt, kun je deze vragen in volgorde stellen:</p>

    <ol>
      <li>Wat is de invoer?</li>
      <li>Wat is de uitvoer?</li>
      <li>Welke regel verbindt beide?</li>
      <li>Is iedere toegelaten invoer gekoppeld aan precies één uitvoer?</li>
      <li>Welke waarden behoren tot het domein?</li>
      <li>Welke waarden kunnen tot het bereik behoren?</li>
      <li>Kan ik het verband weergeven met een tabel, grafiek of formule?</li>
    </ol>

    <p>Zo leer je niet alleen een formule gebruiken, maar ook begrijpen welk verband die formule beschrijft.</p>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>Een <strong>functie</strong> beschrijft een afhankelijkheid tussen grootheden.</p>

    <p>Je kunt een functie zien als een regel die een invoer omzet in een uitvoer:</p>

    <p class="formula">invoer → functie → uitvoer</p>

    <p>Dezelfde invoer moet steeds dezelfde uitvoer geven. Verschillende invoeren mogen wel dezelfde uitvoer hebben.</p>

    <p>Een functie kan worden weergegeven met woorden, een tabel, een grafiek of een formule.</p>

    <p>Met de notatie:</p>

    <p class="formula">f(x)</p>

    <p>geven we aan welke uitvoer de functie f geeft bij invoer x.</p>

    <p>Het <strong>domein</strong> beschrijft welke invoerwaarden toegestaan zijn. Het <strong>bereik</strong> beschrijft welke uitvoerwaarden mogelijk zijn.</p>

    <p>Vanaf hier kunnen we verschillende soorten functies onderzoeken. In de volgende milestone bekijken we eerst de twee belangrijke algebraïsche vormen die we al eerder zijn tegengekomen: <strong>lineaire en kwadratische functies</strong>.</p>


    <div class="callout">
      <strong>Inzicht:</strong> Een functie is geen specifieke formule. Het is een structuur: iedere toegelaten invoer krijgt precies één uitvoer. Daardoor kunnen we afhankelijkheden uit de werkelijkheid beschrijven, berekenen, tekenen en vergelijken.
    </div>
  `
},
{
  id: "2.12",
  title: "Lineaire & kwadratische functies",
  goal: "Hoe zien algebraïsche relaties eruit?",
  theory: `
    <h3>Van functie naar grafiek</h3>

    <p>In de vorige milestone leerden we dat een functie een verband beschrijft tussen een invoer en een uitvoer.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>Voor iedere waarde van x kunnen we de bijbehorende waarde van f(x) berekenen.</p>

    <p>Maar een functie kunnen we niet alleen berekenen. We kunnen haar ook <strong>tekenen</strong>.</p>

    <p>De waarden van x en f(x) vormen samen punten in een assenstelsel.</p>

    <p>Zo ontstaat een grafiek die het gedrag van de functie zichtbaar maakt.</p>

    <p>In deze milestone bekijken we twee belangrijke soorten functies:</p>

    <ul>
      <li>lineaire functies;</li>
      <li>kwadratische functies.</li>
    </ul>

    <p>We zullen zien dat de vorm van de formule rechtstreeks verbonden is met de vorm van de grafiek.</p>


    <h3>Wat is een lineaire functie?</h3>

    <p>Een lineaire functie heeft de vorm:</p>

    <p class="formula">f(x) = ax + b</p>

    <p>Hierbij zijn <span class="formula-inline">a</span> en <span class="formula-inline">b</span> vaste getallen.</p>

    <p>De letter x is de invoer en f(x) is de uitvoer.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 3x + 2</p>

    <p>Als x met 1 toeneemt, neemt de uitvoer steeds met 3 toe.</p>

    <p>Dat constante gedrag is het belangrijkste kenmerk van een lineaire functie.</p>


    <h3>Een constante verandering</h3>

    <p>Kijk naar de functie:</p>

    <p class="formula">f(x) = 4x + 1</p>

    <p>We berekenen enkele waarden:</p>

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
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>9</td>
        </tr>
        <tr>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>

    <p>Wanneer x telkens 1 groter wordt, wordt f(x) telkens 4 groter.</p>

    <p>De verandering is dus constant.</p>

    <p>Dat is precies waarom de grafiek een rechte lijn wordt.</p>


    <h3>De vorm f(x) = ax + b</h3>

    <p>De algemene vorm van een lineaire functie is:</p>

    <p class="formula">f(x) = ax + b</p>

    <p>De twee getallen hebben elk een eigen betekenis.</p>

    <p><span class="formula-inline">a</span> bepaalt hoe sterk de functie verandert wanneer x verandert.</p>

    <p><span class="formula-inline">b</span> bepaalt waar de grafiek de y-as snijdt.</p>

    <p>De formule bevat dus meteen informatie over de grafiek.</p>


    <h3>Wat betekent a?</h3>

    <p>Het getal <span class="formula-inline">a</span> noemen we de <strong>helling</strong> of <strong>richtingscoëfficiënt</strong>.</p>

    <p>Het vertelt hoeveel de uitvoer verandert wanneer de invoer met 1 toeneemt.</p>

    <p>Neem:</p>

    <p class="formula">f(x) = 3x + 2</p>

    <p>Als x met 1 toeneemt, neemt f(x) met 3 toe.</p>

    <p>Bij:</p>

    <p class="formula">f(x) = -2x + 5</p>

    <p>daalt de uitvoer met 2 wanneer x met 1 toeneemt.</p>

    <p>De helling kan dus positief, negatief of nul zijn.</p>


    <h3>De helling herkennen</h3>

    <p>In:</p>

    <p class="formula">f(x) = 5x - 7</p>

    <p>is de helling 5.</p>

    <p>Dat betekent:</p>

    <p class="formula">Δy = 5 wanneer Δx = 1</p>

    <p>In:</p>

    <p class="formula">f(x) = -0,5x + 4</p>

    <p>is de helling −0,5.</p>

    <p>Wanneer x met 1 toeneemt, daalt de uitvoer dus met 0,5.</p>

    <p>Een grotere absolute waarde van de helling betekent een steilere rechte.</p>


    <h3>Wat betekent b?</h3>

    <p>In:</p>

    <p class="formula">f(x) = ax + b</p>

    <p>is <span class="formula-inline">b</span> de uitvoer wanneer x gelijk is aan nul.</p>

    <p>We vullen x = 0 in:</p>

    <p class="formula">f(0) = a × 0 + b = b</p>

    <p>Daarom snijdt de grafiek de y-as in het punt:</p>

    <p class="formula">(0, b)</p>

    <p>Het getal b bepaalt dus de verticale positie van de rechte.</p>


    <h3>Het snijpunt met de y-as</h3>

    <p>Neem:</p>

    <p class="formula">f(x) = 2x + 5</p>

    <p>Omdat:</p>

    <p class="formula">f(0) = 5</p>

    <p>gaat de grafiek door:</p>

    <p class="formula">(0, 5)</p>

    <p>We hoeven dus maar één ding te doen om het snijpunt met de y-as te vinden: x gelijk aan nul nemen.</p>

    <p>Dit is een voorbeeld van hoe een algebraïsche formule rechtstreeks geometrische informatie bevat.</p>


    <h3>Een lineaire functie tekenen</h3>

    <p>Neem:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>We weten onmiddellijk dat de grafiek door:</p>

    <p class="formula">(0, 1)</p>

    <p>gaat.</p>

    <p>De helling is 2.</p>

    <p>Dat betekent dat we vanaf dit punt:</p>

    <ul>
      <li>1 naar rechts gaan;</li>
      <li>2 omhoog gaan.</li>
    </ul>

    <p>We komen dan in:</p>

    <p class="formula">(1, 3)</p>

    <p>Vanaf daar kunnen we opnieuw 1 naar rechts en 2 omhoog gaan.</p>

    <p>Zo krijgen we:</p>

    <p class="formula">(2, 5)</p>

    <p>Alle punten liggen op dezelfde rechte.</p>


    <h3>Een formule vinden uit twee punten</h3>

    <p>Soms krijgen we geen formule, maar wel twee punten van een rechte.</p>

    <p>Stel dat de rechte door:</p>

    <p class="formula">(1, 3)</p>

    <p>en:</p>

    <p class="formula">(4, 9)</p>

    <p>gaat.</p>

    <p>De helling is de verandering in y gedeeld door de verandering in x:</p>

    <p class="formula">a = \\frac{9 - 3}{4 - 1} = 2</p>

    <p>De functie heeft dus de vorm:</p>

    <p class="formula">f(x) = 2x + b</p>

    <p>We gebruiken één van de punten om b te vinden.</p>

    <p>Voor het punt (1, 3) geldt:</p>

    <p class="formula">3 = 2 × 1 + b</p>

    <p>Dus:</p>

    <p class="formula">b = 1</p>

    <p>De functie is:</p>

    <p class="formula">f(x) = 2x + 1</p>


    <h3>Een formule vinden uit een punt en een helling</h3>

    <p>Als we de helling kennen en één punt van de rechte kennen, kunnen we ook de formule bepalen.</p>

    <p>Stel:</p>

    <p class="formula">a = 3</p>

    <p>en de rechte gaat door:</p>

    <p class="formula">(2, 7)</p>

    <p>We beginnen met:</p>

    <p class="formula">f(x) = 3x + b</p>

    <p>Omdat het punt (2, 7) op de rechte ligt, moet gelden:</p>

    <p class="formula">7 = 3 × 2 + b</p>

    <p>Dus:</p>

    <p class="formula">b = 1</p>

    <p>De formule is:</p>

    <p class="formula">f(x) = 3x + 1</p>


    <h3>Evenredige verbanden als bijzonder geval</h3>

    <p>Een evenredig verband heeft de vorm:</p>

    <p class="formula">f(x) = ax</p>

    <p>Dit is een lineaire functie waarbij:</p>

    <p class="formula">b = 0</p>

    <p>De grafiek gaat dan altijd door de oorsprong:</p>

    <p class="formula">(0, 0)</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 4x</p>

    <p>Een verdubbeling van x veroorzaakt dan ook een verdubbeling van f(x).</p>

    <p>Dit is de algebraïsche vorm van een rechtstreeks evenredig verband.</p>


    <h3>Wanneer zijn twee rechten parallel?</h3>

    <p>Twee niet-samenvallende rechten zijn parallel wanneer ze dezelfde helling hebben.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>en:</p>

    <p class="formula">g(x) = 2x - 5</p>

    <p>hebben allebei helling 2.</p>

    <p>Ze veranderen dus even snel en zullen elkaar niet snijden.</p>

    <p>Het verschil tussen de twee rechten zit alleen in hun verticale positie.</p>


    <h3>Wanneer snijden twee rechten elkaar?</h3>

    <p>Neem:</p>

    <p class="formula">f(x) = 2x + 1</p>

    <p>en:</p>

    <p class="formula">g(x) = -x + 7</p>

    <p>Deze rechten hebben verschillende hellingen.</p>

    <p>De ene stijgt terwijl de andere daalt.</p>

    <p>Daarom zullen ze elkaar ergens snijden.</p>

    <p>Het snijpunt vinden we door de twee uitvoerwaarden gelijk te stellen:</p>

    <p class="formula">2x + 1 = -x + 7</p>

    <p>Dit is precies het soort vergelijking dat we in milestone 2.3 hebben leren oplossen.</p>


    <h3>Het snijpunt berekenen</h3>

    <p>We lossen de vergelijking op:</p>

    <p class="formula">2x + 1 = -x + 7</p>

    <p>Dus:</p>

    <p class="formula">3x = 6</p>

    <p>en:</p>

    <p class="formula">x = 2</p>

    <p>Nu berekenen we de bijbehorende y-waarde:</p>

    <p class="formula">f(2) = 2 × 2 + 1 = 5</p>

    <p>Het snijpunt is:</p>

    <p class="formula">(2, 5)</p>

    <p>Een geometrisch probleem is hier dus opnieuw omgezet in een algebraïsch probleem.</p>


    <h3>Een lineair model uit de werkelijkheid</h3>

    <p>Stel dat een taxirit €5 startkost en daarna €2 per kilometer kost.</p>

    <p>De totale prijs hangt af van het aantal gereden kilometers.</p>

    <p>Als x het aantal kilometer is, krijgen we:</p>

    <p class="formula">P(x) = 2x + 5</p>

    <p>De 2 betekent dat de prijs per kilometer met €2 toeneemt.</p>

    <p>De 5 is de vaste startkost.</p>

    <p>De formule is dus niet zomaar een algebraïsche uitdrukking. Ze vertelt precies hoe de werkelijkheid gemodelleerd wordt.</p>


    <h3>Niet elk verband is lineair</h3>

    <p>Een lineaire functie heeft een constante verandering.</p>

    <p>Maar in veel situaties verandert de verandering zelf.</p>

    <p>Neem bijvoorbeeld:</p>

    <p class="formula">f(x) = x²</p>

    <p>De waarden zijn:</p>

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
          <td>0</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>3</td>
          <td>9</td>
        </tr>
      </tbody>
    </table>

    <p>De uitvoer neemt achtereenvolgens toe met 1, 3 en 5.</p>

    <p>De verandering is dus niet constant.</p>

    <p>De grafiek kan daarom geen rechte zijn.</p>

    <p>Hier komen we bij een tweede belangrijke soort functie.</p>


    <h3>De stap naar kwadratische functies</h3>

    <p>Een kwadratische functie bevat een term met x².</p>

    <p>De algemene vorm is:</p>

    <p class="formula">f(x) = ax² + bx + c</p>

    <p>waarbij <span class="formula-inline">a ≠ 0</span>.</p>

    <p>Als de term x² aanwezig is, verandert de functie op een andere manier dan een lineaire functie.</p>

    <p>De grafiek van een kwadratische functie is een <strong>parabool</strong>.</p>


    <h3>Wat is een kwadratische functie?</h3>

    <p>Een eenvoudige kwadratische functie is:</p>

    <p class="formula">f(x) = x²</p>

    <p>Voor positieve en negatieve waarden van x krijgen we dezelfde uitvoer wanneer de absolute waarden gelijk zijn:</p>

    <p class="formula">f(2) = 4</p>

    <p class="formula">f(-2) = 4</p>

    <p>De grafiek is daardoor symmetrisch rond de y-as.</p>

    <p>De vorm van de grafiek is geen rechte, maar een kromme die naar boven opent.</p>


    <h3>De vorm f(x) = ax² + bx + c</h3>

    <p>De algemene kwadratische functie is:</p>

    <p class="formula">f(x) = ax² + bx + c</p>

    <p>De drie coëfficiënten beïnvloeden de vorm en positie van de parabool.</p>

    <p>Het getal <span class="formula-inline">a</span> bepaalt onder andere hoe sterk de parabool gekromd is en naar welke kant ze opent.</p>

    <p>De waarde <span class="formula-inline">b</span> beïnvloedt de positie van de top en de symmetrie-as.</p>

    <p>De waarde <span class="formula-inline">c</span> bepaalt waar de parabool de y-as snijdt.</p>


    <h3>Waarom ontstaat een parabool?</h3>

    <p>Bij een lineaire functie verandert de uitvoer telkens met hetzelfde bedrag wanneer x met 1 toeneemt.</p>

    <p>Bij een kwadratische functie is die eerste verandering niet constant.</p>

    <p>Bij:</p>

    <p class="formula">f(x) = x²</p>

    <p>krijgen we:</p>

    <p class="formula">0, 1, 4, 9, 16, ...</p>

    <p>De verschillen zijn:</p>

    <p class="formula">1, 3, 5, 7, ...</p>

    <p>Maar ook die verschillen veranderen volgens een vast patroon.</p>

    <p>Dat geeft de grafiek haar gebogen vorm.</p>


    <h3>De rol van a</h3>

    <p>In:</p>

    <p class="formula">f(x) = ax²</p>

    <p>bepaalt <span class="formula-inline">a</span> de vorm van de parabool.</p>

    <p>Als:</p>

    <p class="formula">a > 0</p>

    <p>opent de parabool naar boven.</p>

    <p>Als:</p>

    <p class="formula">a < 0</p>

    <p>opent ze naar beneden.</p>

    <p>De absolute waarde van a beïnvloedt hoe breed of smal de parabool is.</p>

    <p>Een grotere absolute waarde betekent dat de parabool sterker van richting verandert.</p>


    <h3>De rol van c</h3>

    <p>Neem:</p>

    <p class="formula">f(x) = x² + 3x + 5</p>

    <p>Als we x = 0 invullen:</p>

    <p class="formula">f(0) = 5</p>

    <p>De parabool snijdt de y-as dus in:</p>

    <p class="formula">(0, 5)</p>

    <p>Net zoals bij lineaire functies is de constante term dus rechtstreeks verbonden met het snijpunt met de y-as.</p>


    <h3>De top van een parabool</h3>

    <p>Een parabool die naar boven opent heeft een laagste punt.</p>

    <p>Een parabool die naar beneden opent heeft een hoogste punt.</p>

    <p>Dit punt noemen we de <strong>top</strong> van de parabool.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = (x - 2)² + 3</p>

    <p>Deze functie is nul wanneer:</p>

    <p class="formula">(x - 2)² = -3</p>

    <p>maar dat is voor reële x onmogelijk.</p>

    <p>De kleinste waarde van het kwadraat is 0. Die wordt bereikt wanneer:</p>

    <p class="formula">x - 2 = 0</p>

    <p>dus:</p>

    <p class="formula">x = 2</p>

    <p>Daar is:</p>

    <p class="formula">f(2) = 3</p>

    <p>De top is dus:</p>

    <p class="formula">(2, 3)</p>

    <p>Deze vorm van een kwadratische functie maakt de top bijzonder gemakkelijk zichtbaar.</p>


    <h3>Symmetrie van een parabool</h3>

    <p>Een parabool heeft een verticale <strong>symmetrie-as</strong>.</p>

    <p>Punten die even ver links en rechts van deze as liggen, hebben dezelfde y-waarde.</p>

    <p>Bij:</p>

    <p class="formula">f(x) = x²</p>

    <p>ligt de symmetrie-as op:</p>

    <p class="formula">x = 0</p>

    <p>Bij:</p>

    <p class="formula">f(x) = (x - 2)² + 3</p>

    <p>ligt de symmetrie-as op:</p>

    <p class="formula">x = 2</p>

    <p>De symmetrie-as loopt dus door de top.</p>


    <h3>Nulpunten van een kwadratische functie</h3>

    <p>Een nulpunt is een invoerwaarde waarvoor de uitvoer nul is.</p>

    <p>We zoeken dus de waarden van x waarvoor:</p>

    <p class="formula">f(x) = 0</p>

    <p>Bij:</p>

    <p class="formula">f(x) = x² - 5x + 6</p>

    <p>zoeken we:</p>

    <p class="formula">x² - 5x + 6 = 0</p>

    <p>Dit is precies een kwadratische vergelijking.</p>

    <p>We kunnen factoriseren:</p>

    <p class="formula">(x - 2)(x - 3) = 0</p>

    <p>Dus:</p>

    <p class="formula">x = 2</p>

    <p>of:</p>

    <p class="formula">x = 3</p>

    <p>De parabool snijdt de x-as dus in twee punten.</p>


    <h3>Verband met kwadratische vergelijkingen</h3>

    <p>In milestone 2.7 leerden we kwadratische vergelijkingen oplossen.</p>

    <p>Nu zien we waarom die vergelijkingen ook in functies voorkomen.</p>

    <p>De vergelijking:</p>

    <p class="formula">ax² + bx + c = 0</p>

    <p>is precies de vraag:</p>

    <p><strong>voor welke x-waarden is de uitvoer van de functie gelijk aan nul?</strong></p>

    <p>De oplossingen van de kwadratische vergelijking zijn dus de <strong>nulpunten van de kwadratische functie</strong>.</p>

    <p>Algebra en grafieken vertellen hier hetzelfde verhaal vanuit twee verschillende invalshoeken.</p>


    <h3>Een kwadratische functie onderzoeken</h3>

    <p>Bij een kwadratische functie kunnen we verschillende eigenschappen onderzoeken:</p>

    <ul>
      <li>waar de parabool de y-as snijdt;</li>
      <li>of ze naar boven of naar beneden opent;</li>
      <li>waar de top ligt;</li>
      <li>waar de symmetrie-as ligt;</li>
      <li>of en waar ze de x-as snijdt.</li>
    </ul>

    <p>Daarvoor gebruiken we zowel de formule als de grafiek.</p>

    <p>De formule geeft ons de algebraïsche structuur. De grafiek maakt het gedrag zichtbaar.</p>


    <h3>Lineair versus kwadratisch</h3>

    <p>De twee functietypen hebben een fundamenteel verschil.</p>

    <p><strong>Lineair:</strong></p>

    <p class="formula">f(x) = ax + b</p>

    <p>De verandering per stap in x is constant. De grafiek is een rechte.</p>

    <p><strong>Kwadratisch:</strong></p>

    <p class="formula">f(x) = ax² + bx + c</p>

    <p>De verandering per stap in x is niet constant. De grafiek is een parabool.</p>

    <p>De aanwezigheid van x² zorgt dus voor een fundamenteel ander soort verband.</p>


    <h3>Functies uit de werkelijkheid</h3>

    <p>Lineaire functies ontstaan bijvoorbeeld wanneer een grootheid met een constante snelheid verandert.</p>

    <p>Voorbeelden zijn:</p>

    <ul>
      <li>een vaste prijs per kilometer;</li>
      <li>een vast bedrag per uur;</li>
      <li>een constante snelheid.</li>
    </ul>

    <p>Kwadratische functies ontstaan onder andere wanneer een grootheid afhangt van een kwadraat.</p>

    <p>Voorbeelden zijn:</p>

    <ul>
      <li>de oppervlakte van een vierkant als functie van zijn zijde;</li>
      <li>de afstand die een voorwerp onder constante versnelling aflegt;</li>
      <li>de baan van een ideaal geworpen voorwerp.</li>
    </ul>

    <p>Het functietype vertelt ons dus iets over het soort verandering dat in het model aanwezig is.</p>


    <h3>Een volledig voorbeeld: een bewegend voorwerp</h3>

    <p>Stel dat de hoogte van een voorwerp tijdens een worp wordt beschreven door:</p>

    <p class="formula">h(t) = -5t² + 20t + 1</p>

    <p>Hierbij is t de tijd en h(t) de hoogte.</p>

    <p>Omdat er een term met t² aanwezig is, is dit een kwadratische functie.</p>

    <p>De coefficient van t² is negatief:</p>

    <p class="formula">a = -5</p>

    <p>De parabool opent daarom naar beneden.</p>

    <p>De constante term is 1:</p>

    <p class="formula">c = 1</p>

    <p>De beginhoogte is dus:</p>

    <p class="formula">h(0) = 1</p>

    <p>Als we willen weten wanneer het voorwerp de grond bereikt, zoeken we:</p>

    <p class="formula">h(t) = 0</p>

    <p>We krijgen dan een kwadratische vergelijking.</p>

    <p>Zo wordt een fysisch probleem omgezet in een functieprobleem en vervolgens in een vergelijking.</p>

    <p>Dit is een patroon dat we in latere wiskunde en natuurkunde voortdurend zullen tegenkomen.</p>


    <h3>Veelgemaakte fouten</h3>

    <p><strong>Fout 1: denken dat b de helling is.</strong></p>

    <p>In <span class="formula-inline">f(x) = ax + b</span> is a de helling en b het snijpunt met de y-as.</p>

    <p><strong>Fout 2: vergeten dat een negatieve helling betekent dat de functie daalt.</strong></p>

    <p>Een negatieve waarde van a geeft een dalende rechte.</p>

    <p><strong>Fout 3: denken dat iedere parabool naar boven opent.</strong></p>

    <p>Bij een negatieve waarde van a opent de parabool naar beneden.</p>

    <p><strong>Fout 4: een nulpunt verwarren met het snijpunt met de y-as.</strong></p>

    <p>Een nulpunt heeft y = 0 en ligt dus op de x-as. Het snijpunt met de y-as heeft x = 0.</p>

    <p><strong>Fout 5: denken dat x² hetzelfde soort verandering geeft als x.</strong></p>

    <p>Bij x verandert de uitvoer met een constant bedrag. Bij x² verandert dat bedrag zelf.</p>


    <h3>Een vaste werkwijze</h3>

    <p>Wanneer je een functie krijgt, kun je eerst bepalen met welk type verband je te maken hebt.</p>

    <ol>
      <li>Kijk welke machten van x voorkomen.</li>
      <li>Bevat de formule alleen x en een constante? Dan kan ze lineair zijn.</li>
      <li>Bevat ze x²? Dan kan ze kwadratisch zijn.</li>
      <li>Bij een lineaire functie lees je de helling en het y-snijpunt af.</li>
      <li>Bij een kwadratische functie onderzoek je onder andere de richting, top, symmetrie-as en nulpunten.</li>
      <li>Gebruik een vergelijking wanneer je een specifieke x-waarde zoekt.</li>
      <li>Gebruik de grafiek om het gedrag van de functie zichtbaar te maken.</li>
    </ol>

    <p>Zo kun je voortdurend wisselen tussen drie perspectieven:</p>

    <p class="formula">formule ↔ grafiek ↔ betekenis</p>

    <p>De formule beschrijft de structuur, de grafiek laat het gedrag zien en de betekenis vertelt wat de grootheden in de werkelijkheid voorstellen.</p>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>Een <strong>lineaire functie</strong> heeft de vorm:</p>

    <p class="formula">f(x) = ax + b</p>

    <p>De grafiek is een rechte.</p>

    <p>De waarde <span class="formula-inline">a</span> is de helling en bepaalt hoe snel de functie stijgt of daalt.</p>

    <p>De waarde <span class="formula-inline">b</span> bepaalt het snijpunt met de y-as.</p>

    <p>Een <strong>kwadratische functie</strong> heeft de vorm:</p>

    <p class="formula">f(x) = ax² + bx + c</p>

    <p>De grafiek is een parabool.</p>

    <p>De waarde van a bepaalt onder andere of de parabool naar boven of naar beneden opent.</p>

    <p>De parabool heeft een top en een symmetrie-as.</p>

    <p>De nulpunten zijn de waarden waarvoor:</p>

    <p class="formula">f(x) = 0</p>

    <p>Daarom zijn de oplossingen van een kwadratische vergelijking tegelijk de nulpunten van een kwadratische functie.</p>

    <p>We hebben daarmee een belangrijke verbinding gelegd:</p>

    <p class="formula">algebra ↔ functies ↔ grafieken ↔ geometrie</p>

    <p>In de volgende milestone verlaten we deze twee relatief eenvoudige functietypen en bekijken we functies die een heel ander soort gedrag beschrijven: <strong>exponentiële en logaritmische functies</strong>.</p>


    <div class="callout">
      <strong>Inzicht:</strong> De formule van een functie vertelt niet alleen hoe je een getal berekent. Ze bepaalt ook de vorm en het gedrag van de grafiek. Bij een lineaire functie geeft een constante verandering een rechte; bij een kwadratische functie leidt de aanwezigheid van x² tot een parabool.
    </div>
  `
},
{
  id: "2.13",
  title: "Exponentiële & logaritmische functies",
  goal: "Hoe beschrijven we groei en inverse groei?",
  theory: `
    <h3>Groei is niet altijd een vaste toename</h3>

    <p>In de vorige milestone zagen we dat een lineaire functie een constante verandering heeft.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">f(x) = 3x</p>

    <p>Wanneer x telkens met 1 toeneemt, neemt de uitvoer telkens met 3 toe.</p>

    <p>Maar veel processen werken anders.</p>

    <p>Stel dat een bedrag ieder jaar verdubbelt:</p>

    <p class="formula">100 → 200 → 400 → 800 → 1600</p>

    <p>De verschillen zijn:</p>

    <p class="formula">100, 200, 400, 800</p>

    <p>De toename is dus niet constant.</p>

    <p>Maar er is wel iets dat constant blijft: telkens wordt het vorige bedrag met 2 vermenigvuldigd.</p>

    <p>Dat is het kenmerk van <strong>exponentiële groei</strong>.</p>


    <h3>Een vaste vermenigvuldigingsfactor</h3>

    <p>Bij exponentiële groei wordt een grootheid telkens met dezelfde factor vermenigvuldigd.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">100 → × 2 → 200 → × 2 → 400 → × 2 → 800</p>

    <p>De factor 2 noemen we de <strong>groeifactor</strong>.</p>

    <p>Als de groeifactor groter is dan 1, groeit de grootheid.</p>

    <p>Bij een groeifactor tussen 0 en 1 wordt de grootheid kleiner.</p>

    <p>Het belangrijke verschil met lineaire groei is dus:</p>

    <p><strong>lineair:</strong> telkens dezelfde hoeveelheid erbij.</p>

    <p><strong>exponentieel:</strong> telkens dezelfde factor maal.</p>


    <h3>De vorm van een exponentiële functie</h3>

    <p>Een eenvoudige exponentiële functie heeft de vorm:</p>

    <p class="formula">f(x) = b × g^x</p>

    <p>Hierbij is:</p>

    <ul>
      <li><span class="formula-inline">b</span> de beginwaarde;</li>
      <li><span class="formula-inline">g</span> de groeifactor;</li>
      <li><span class="formula-inline">x</span> de invoer.</li>
    </ul>

    <p>Neem bijvoorbeeld:</p>

    <p class="formula">f(x) = 100 × 2^x</p>

    <p>Dan is de beginwaarde 100 en de groeifactor 2.</p>

    <p>Voor x = 0 krijgen we:</p>

    <p class="formula">f(0) = 100 × 2^0 = 100</p>

    <p>Voor x = 1:</p>

    <p class="formula">f(1) = 100 × 2^1 = 200</p>

    <p>Voor x = 2:</p>

    <p class="formula">f(2) = 100 × 2^2 = 400</p>

    <p>De exponent bepaalt dus hoe vaak de groeifactor wordt toegepast.</p>


    <h3>Waarom staat de variabele in de exponent?</h3>

    <p>Bij een lineaire functie staat de variabele bijvoorbeeld in:</p>

    <p class="formula">f(x) = 3x</p>

    <p>Bij exponentiële groei staat de variabele in de exponent:</p>

    <p class="formula">f(x) = 2^x</p>

    <p>Dat verschil is fundamenteel.</p>

    <p>Bij x = 1 is:</p>

    <p class="formula">2^1 = 2</p>

    <p>Bij x = 2:</p>

    <p class="formula">2^2 = 4</p>

    <p>Bij x = 3:</p>

    <p class="formula">2^3 = 8</p>

    <p>Elke stap in x betekent dat we opnieuw met 2 vermenigvuldigen.</p>

    <p>De exponent telt dus als het ware hoeveel keer de groeifactor wordt toegepast.</p>


    <h3>Exponentiële groei en procenten</h3>

    <p>Exponentiële groei wordt vaak beschreven met een percentage.</p>

    <p>Stel dat een hoeveelheid ieder jaar met 5% groeit.</p>

    <p>Een stijging van 5% betekent dat we 105% van de vorige waarde behouden.</p>

    <p>Als factor schrijven we:</p>

    <p class="formula">g = 1,05</p>

    <p>Een beginwaarde van 100 wordt dan:</p>

    <p class="formula">100 × 1,05 = 105</p>

    <p>Na twee perioden:</p>

    <p class="formula">100 × 1,05²</p>

    <p>en na x perioden:</p>

    <p class="formula">f(x) = 100 × 1,05^x</p>

    <p>Een percentage dat telkens op de <strong>nieuwe</strong> waarde wordt toegepast, leidt dus tot exponentiële groei.</p>


    <h3>Van groeipercentage naar groeifactor</h3>

    <p>Bij een groeipercentage p geldt:</p>

    <p class="formula">g = 1 + p</p>

    <p>Hierbij moet p als decimaal worden geschreven.</p>

    <p>Bij 8% groei is:</p>

    <p class="formula">p = 0,08</p>

    <p>dus:</p>

    <p class="formula">g = 1,08</p>

    <p>Bij 25% groei:</p>

    <p class="formula">g = 1,25</p>

    <p>De groeifactor is dus de factor waarmee de oude waarde wordt vermenigvuldigd.</p>


    <h3>Exponentieel verval</h3>

    <p>Niet alleen groei kan exponentieel verlopen.</p>

    <p>Stel dat een hoeveelheid ieder jaar 20% kleiner wordt.</p>

    <p>Dan blijft ieder jaar 80% over.</p>

    <p>De groeifactor is:</p>

    <p class="formula">g = 0,80</p>

    <p>Bij een beginwaarde van 500 krijgen we:</p>

    <p class="formula">f(x) = 500 × 0,8^x</p>

    <p>Na één periode:</p>

    <p class="formula">500 × 0,8 = 400</p>

    <p>Na twee perioden:</p>

    <p class="formula">500 × 0,8² = 320</p>

    <p>De waarde wordt steeds kleiner, maar telkens volgens dezelfde vermenigvuldigingsfactor.</p>

    <p>Dit noemen we <strong>exponentieel verval</strong>.</p>


    <h3>Groeifactor tussen 0 en 1</h3>

    <p>Een exponentiële functie:</p>

    <p class="formula">f(x) = b × g^x</p>

    <p>kan dus verschillende soorten gedrag hebben.</p>

    <p>Als:</p>

    <p class="formula">g > 1</p>

    <p>hebben we exponentiële groei.</p>

    <p>Als:</p>

    <p class="formula">0 < g < 1</p>

    <p>hebben we exponentieel verval.</p>

    <p>Bij:</p>

    <p class="formula">g = 1</p>

    <p>verandert de waarde helemaal niet, want:</p>

    <p class="formula">1^x = 1</p>

    <p>De functie blijft dan constant.</p>


    <h3>De grafiek van een exponentiële functie</h3>

    <p>Een exponentiële grafiek heeft een ander karakter dan een rechte of een parabool.</p>

    <p>Bij exponentiële groei stijgt de grafiek steeds sneller.</p>

    <p>De waarden kunnen zeer snel groot worden.</p>

    <p>Bij exponentieel verval daalt de grafiek steeds verder, maar blijft ze bij een positieve beginwaarde boven nul.</p>

    <p>De grafiek van:</p>

    <p class="formula">f(x) = 2^x</p>

    <p>gaat door:</p>

    <p class="formula">(0, 1)</p>

    <p>want:</p>

    <p class="formula">2^0 = 1</p>

    <p>Voor negatieve x-waarden worden de waarden steeds kleiner.</p>


    <h3>Exponentiële groei tegenover lineaire groei</h3>

    <p>Vergelijk:</p>

    <p class="formula">f(x) = 100 + 20x</p>

    <p>met:</p>

    <p class="formula">g(x) = 100 × 1,2^x</p>

    <p>De eerste functie voegt telkens 20 toe.</p>

    <p>De tweede vermenigvuldigt telkens met 1,2.</p>

    <p>Bij kleine waarden van x kunnen de verschillen beperkt lijken.</p>

    <p>Maar naarmate x groter wordt, kan de exponentiële functie veel sneller groeien.</p>

    <p>Dat komt doordat bij exponentiële groei ook de <strong>toename zelf</strong> steeds groter wordt.</p>


    <h3>Een exponentiële vergelijking</h3>

    <p>Soms kennen we de invoer niet, maar wel de uitvoer.</p>

    <p>Stel:</p>

    <p class="formula">2^x = 8</p>

    <p>We weten dat:</p>

    <p class="formula">2^3 = 8</p>

    <p>dus:</p>

    <p class="formula">x = 3</p>

    <p>Maar wat als we bijvoorbeeld krijgen:</p>

    <p class="formula">2^x = 10</p>

    <p>Dan is x geen eenvoudig geheel getal.</p>

    <p>We hebben een nieuwe manier nodig om de exponent te vinden.</p>

    <p>Daarvoor gebruiken we de <strong>logaritme</strong>.</p>


    <h3>De logaritme als omgekeerde bewerking</h3>

    <p>Optellen en aftrekken zijn omgekeerde bewerkingen.</p>

    <p>Vermenigvuldigen en delen zijn omgekeerde bewerkingen.</p>

    <p>Machtsverheffen heeft ook een omgekeerde bewerking: de logaritme.</p>

    <p>De vraag:</p>

    <p class="formula">2^x = 8</p>

    <p>kunnen we formuleren als:</p>

    <p class="formula">x = log₂(8)</p>

    <p>De logaritme vraagt:</p>

    <p><strong>tot welke macht moet ik het grondtal verheffen om deze waarde te krijgen?</strong></p>

    <p>Omdat:</p>

    <p class="formula">2^3 = 8</p>

    <p>geldt:</p>

    <p class="formula">log₂(8) = 3</p>


    <h3>De betekenis van log_b(a)</h3>

    <p>Algemeen betekent:</p>

    <p class="formula">log_b(a) = x</p>

    <p>precies hetzelfde als:</p>

    <p class="formula">b^x = a</p>

    <p>De basis <span class="formula-inline">b</span> is het grondtal van de macht.</p>

    <p>Het getal <span class="formula-inline">a</span> is de waarde waarvan we de logaritme nemen.</p>

    <p>De uitkomst <span class="formula-inline">x</span> is de exponent die we zoeken.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log₃(81) = 4</p>

    <p>want:</p>

    <p class="formula">3^4 = 81</p>


    <h3>Logaritmen terugvertalen naar machten</h3>

    <p>Een van de belangrijkste vaardigheden is kunnen wisselen tussen beide vormen.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log₂(32) = 5</p>

    <p>betekent:</p>

    <p class="formula">2^5 = 32</p>

    <p>Omgekeerd:</p>

    <p class="formula">10^3 = 1000</p>

    <p>betekent:</p>

    <p class="formula">log₁₀(1000) = 3</p>

    <p>De logaritme is dus geen losstaande nieuwe bewerking. Ze is de omgekeerde vraag bij machtsverheffen.</p>


    <h3>De logaritme van 1</h3>

    <p>Elke toegestane basis heeft exponent 0 wanneer we de waarde 1 krijgen:</p>

    <p class="formula">b^0 = 1</p>

    <p>Daarom geldt:</p>

    <p class="formula">log_b(1) = 0</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log₂(1) = 0</p>

    <p>en:</p>

    <p class="formula">log₁₀(1) = 0</p>


    <h3>De logaritme van een macht</h3>

    <p>Omdat logaritmen machten terug ongedaan maken, geldt:</p>

    <p class="formula">log_b(b^x) = x</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log₂(2^7) = 7</p>

    <p>De machtsverheffing maakt van 7 de waarde 128.</p>

    <p>De logaritme kijkt vervolgens terug en vraagt welke exponent bij 2 nodig was om 128 te krijgen.</p>


    <h3>De basis 10</h3>

    <p>De logaritme met basis 10 komt veel voor.</p>

    <p>We schrijven vaak:</p>

    <p class="formula">log(1000)</p>

    <p>waarmee we bedoelen:</p>

    <p class="formula">log₁₀(1000)</p>

    <p>Omdat:</p>

    <p class="formula">10³ = 1000</p>

    <p>is:</p>

    <p class="formula">log(1000) = 3</p>

    <p>Deze logaritme wordt onder andere gebruikt bij grootheden die over zeer grote bereiken variëren.</p>


    <h3>De natuurlijke logaritme</h3>

    <p>Naast logaritmen met basis 10 is er een bijzonder belangrijke basis:</p>

    <p class="formula">e</p>

    <p>Het getal e is ongeveer:</p>

    <p class="formula">e ≈ 2,71828</p>

    <p>De logaritme met basis e noemen we de <strong>natuurlijke logaritme</strong> en schrijven we:</p>

    <p class="formula">ln(x)</p>

    <p>Dus:</p>

    <p class="formula">ln(x) = log_e(x)</p>

    <p>De basis e is bijzonder omdat de functie:</p>

    <p class="formula">f(x) = e^x</p>

    <p>een fundamentele rol speelt bij continue groei en verval.</p>

    <p>De diepere eigenschappen van e en de natuurlijke logaritme komen later in de wiskunde opnieuw terug.</p>


    <h3>De logaritmische functie</h3>

    <p>Net zoals exponentiële functies een grafiek hebben, hebben logaritmen dat ook.</p>

    <p>De logaritmische functie:</p>

    <p class="formula">f(x) = log_b(x)</p>

    <p>is de inverse van:</p>

    <p class="formula">g(x) = b^x</p>

    <p>Dat betekent dat de twee functies elkaars bewerkingen ongedaan maken.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">2^3 = 8</p>

    <p>en:</p>

    <p class="formula">log₂(8) = 3</p>

    <p>De ene functie gaat van exponent naar waarde; de andere gaat van waarde terug naar exponent.</p>


    <h3>Inverse functies</h3>

    <p>Het begrip <strong>inverse</strong> betekent dat een bewerking wordt teruggedraaid.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">3 × 5 = 15</p>

    <p>delen door 3 brengt ons terug:</p>

    <p class="formula">15 ÷ 3 = 5</p>

    <p>Op dezelfde manier:</p>

    <p class="formula">2^4 = 16</p>

    <p>en:</p>

    <p class="formula">log₂(16) = 4</p>

    <p>De logaritme is dus de inverse functie van de exponentiële functie, wanneer dezelfde basis wordt gebruikt.</p>


    <h3>Een exponentiële vergelijking oplossen met een logaritme</h3>

    <p>Stel dat:</p>

    <p class="formula">2^x = 10</p>

    <p>We nemen aan beide kanten de logaritme met basis 2:</p>

    <p class="formula">log₂(2^x) = log₂(10)</p>

    <p>Omdat de logaritme de macht ongedaan maakt, krijgen we:</p>

    <p class="formula">x = log₂(10)</p>

    <p>Met een rekenmachine kunnen we deze waarde benaderen:</p>

    <p class="formula">x ≈ 3,32</p>

    <p>Dit betekent dat 2 tot ongeveer de 3,32e macht gelijk is aan 10.</p>

    <p>De logaritme maakt het dus mogelijk om exponenten te vinden die niet eenvoudig uit het hoofd kunnen worden bepaald.</p>


    <h3>De grondtalwissel</h3>

    <p>Rekenmachines hebben meestal een toets voor logaritmen met basis 10 en voor de natuurlijke logaritme.</p>

    <p>Toch kunnen we ook een logaritme met een andere basis berekenen.</p>

    <p>Daarvoor gebruiken we:</p>

    <p class="formula">log_b(x) = \\frac{\\log(x)}{\\log(b)}</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log₂(10) = \\frac{\\log(10)}{\\log(2)}</p>

    <p>Zo kunnen we ook logaritmen met basis 2, 3, 5 of een andere toegestane basis berekenen.</p>


    <h3>Logaritmen en vermenigvuldiging</h3>

    <p>Logaritmen hebben een belangrijke eigenschap:</p>

    <p class="formula">log_b(xy) = log_b(x) + log_b(y)</p>

    <p>Een vermenigvuldiging wordt door een logaritme dus omgezet in een optelling.</p>

    <p>Dit is bijzonder nuttig wanneer we met zeer grote of zeer kleine getallen werken.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log_b(2 × 3) = log_b(2) + log_b(3)</p>

    <p>Deze eigenschap is geen toeval. Ze volgt uit de rekenregels voor machten.</p>


    <h3>Logaritmen en machten</h3>

    <p>Een andere belangrijke regel is:</p>

    <p class="formula">log_b(x^n) = n × log_b(x)</p>

    <p>De exponent komt dus voor de logaritme te staan.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">log₂(8²) = 2 × log₂(8)</p>

    <p>Omdat:</p>

    <p class="formula">log₂(8) = 3</p>

    <p>is:</p>

    <p class="formula">log₂(64) = 6</p>

    <p>Ook hier zien we dat logaritmen machten omzetten in vermenigvuldigingen.</p>


    <h3>Waarom zijn logaritmen nuttig?</h3>

    <p>Exponentiële groei kan extreem snel verlopen.</p>

    <p>Een getal kan daardoor zeer groot worden zonder dat we het gemakkelijk kunnen vergelijken met gewone lineaire schalen.</p>

    <p>Een logaritmische schaal comprimeert zulke grote verschillen.</p>

    <p>Een factor 10 wordt op een logaritmische schaal telkens een vaste stap.</p>

    <p>Dat idee wordt gebruikt in verschillende wetenschappelijke toepassingen, bijvoorbeeld bij grootheden die vele ordes van grootte kunnen bestrijken.</p>


    <h3>Een volledig voorbeeld: bacteriegroei</h3>

    <p>Stel dat een bacteriepopulatie aanvankelijk 500 bacteriën bevat en iedere uur verdubbelt.</p>

    <p>De populatie wordt beschreven door:</p>

    <p class="formula">N(t) = 500 × 2^t</p>

    <p>Na 3 uur:</p>

    <p class="formula">N(3) = 500 × 2³ = 4000</p>

    <p>We willen nu weten wanneer de populatie 10.000 bacteriën bereikt.</p>

    <p>We stellen de uitvoer gelijk aan 10.000:</p>

    <p class="formula">500 × 2^t = 10000</p>

    <p>We delen door 500:</p>

    <p class="formula">2^t = 20</p>

    <p>Nu gebruiken we de logaritme:</p>

    <p class="formula">t = log₂(20)</p>

    <p>Dus ongeveer:</p>

    <p class="formula">t ≈ 4,32</p>

    <p>De populatie bereikt volgens dit model na ongeveer 4,32 uur de waarde 10.000.</p>

    <p>We hebben hier een volledig model gebruikt:</p>

    <p class="formula">werkelijkheid → exponentiële functie → vergelijking → logaritme</p>


    <h3>Het domein van een logaritme</h3>

    <p>Een logaritme is niet voor iedere invoer gedefinieerd.</p>

    <p>Bij:</p>

    <p class="formula">log_b(x)</p>

    <p>moet gelden:</p>

    <p class="formula">x > 0</p>

    <p>De logaritme van nul bestaat niet en de logaritme van een negatief getal is binnen de reële getallen niet gedefinieerd.</p>

    <p>Daarom heeft de logaritmische functie alleen positieve invoerwaarden.</p>


    <h3>De basis van een logaritme</h3>

    <p>Ook de basis heeft voorwaarden.</p>

    <p>Voor een reële logaritme moet de basis voldoen aan:</p>

    <p class="formula">b > 0</p>

    <p>en:</p>

    <p class="formula">b ≠ 1</p>

    <p>Een basis 1 zou geen bruikbare logaritme geven, omdat:</p>

    <p class="formula">1^x = 1</p>

    <p>voor iedere x.</p>

    <p>Er is dan geen unieke exponent die bijvoorbeeld 2 of 10 kan opleveren.</p>


    <h3>Exponentiële en logaritmische functies zijn elkaars spiegelbeeld</h3>

    <p>Omdat exponentiële en logaritmische functies inversen van elkaar zijn, hebben hun grafieken een bijzondere relatie.</p>

    <p>De grafieken van:</p>

    <p class="formula">y = b^x</p>

    <p>en:</p>

    <p class="formula">y = log_b(x)</p>

    <p>zijn elkaars spiegelbeeld in de lijn:</p>

    <p class="formula">y = x</p>

    <p>Dit komt doordat de invoer en uitvoer bij een inverse functie van plaats worden verwisseld.</p>


    <h3>Een exponentiële functie als model</h3>

    <p>Wanneer je een werkelijkheid als exponentieel model wilt beschrijven, kun je deze vragen stellen:</p>

    <ol>
      <li>Wat is de beginwaarde?</li>
      <li>Wordt de hoeveelheid telkens met dezelfde factor vermenigvuldigd?</li>
      <li>Wat is de groeifactor?</li>
      <li>Over welke tijdseenheid of stap gaat het?</li>
      <li>Is er sprake van groei of verval?</li>
    </ol>

    <p>Als de beginwaarde <span class="formula-inline">b</span> is en de groeifactor <span class="formula-inline">g</span>, dan kunnen we schrijven:</p>

    <p class="formula">f(x) = b × g^x</p>

    <p>Daarmee hebben we een eenvoudig maar krachtig model.</p>


    <h3>Wanneer gebruik je een logaritme?</h3>

    <p>Een logaritme is vooral nuttig wanneer de onbekende in de exponent staat.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">2^x = 50</p>

    <p>of:</p>

    <p class="formula">100 × 1,03^x = 150</p>

    <p>In beide gevallen is x de exponent die we zoeken.</p>

    <p>Een logaritme geeft ons een systematische manier om die exponent te bepalen.</p>

    <p>Daarom vormen exponentiële functies en logaritmen een natuurlijk paar:</p>

    <p class="formula">macht ↔ logaritme</p>


    <h3>Veelgemaakte fouten</h3>

    <p><strong>Fout 1: exponentiële groei verwarren met lineaire groei.</strong></p>

    <p>Bij lineaire groei komt telkens dezelfde hoeveelheid erbij. Bij exponentiële groei wordt telkens met dezelfde factor vermenigvuldigd.</p>

    <p><strong>Fout 2: een percentage rechtstreeks als groeifactor gebruiken.</strong></p>

    <p>Bij 5% groei is de groeifactor 1,05 en niet 0,05.</p>

    <p><strong>Fout 3: denken dat 20% daling een groeifactor van −0,20 geeft.</strong></p>

    <p>Bij 20% daling blijft 80% over. De groeifactor is dus 0,80.</p>

    <p><strong>Fout 4: een logaritme zien als een gewone deling.</strong></p>

    <p>Een logaritme vraagt welke exponent nodig is om een bepaalde waarde te krijgen.</p>

    <p><strong>Fout 5: vergeten dat het argument van een reële logaritme positief moet zijn.</strong></p>

    <p>Voor <span class="formula-inline">log_b(x)</span> moet gelden <span class="formula-inline">x > 0</span>.</p>

    <p><strong>Fout 6: denken dat logaritmen alleen met basis 10 bestaan.</strong></p>

    <p>Elke toegestane basis kan worden gebruikt. Basis 10 en basis e zijn alleen bijzonder belangrijk.</p>


    <h3>Een vaste werkwijze</h3>

    <p>Bij een groeiprobleem kun je eerst bepalen welk soort verandering je ziet.</p>

    <ol>
      <li>Kijk of er telkens een vaste hoeveelheid bijkomt of afgaat.</li>
      <li>Kijk of er telkens met een vaste factor wordt vermenigvuldigd.</li>
      <li>Een vaste hoeveelheid wijst op lineaire groei.</li>
      <li>Een vaste factor wijst op exponentiële groei of verval.</li>
      <li>Bepaal de beginwaarde.</li>
      <li>Bepaal de groeifactor.</li>
      <li>Schrijf het exponentiële model.</li>
      <li>Als de onbekende in de exponent staat, gebruik je een logaritme.</li>
      <li>Controleer of de gevonden waarde betekenis heeft binnen het model.</li>
    </ol>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>Bij exponentiële groei wordt een hoeveelheid telkens met dezelfde factor vermenigvuldigd.</p>

    <p>Een eenvoudig exponentieel model heeft de vorm:</p>

    <p class="formula">f(x) = b × g^x</p>

    <p>waarbij b de beginwaarde is en g de groeifactor.</p>

    <p>Als <span class="formula-inline">g > 1</span>, hebben we groei.</p>

    <p>Als <span class="formula-inline">0 < g < 1</span>, hebben we verval.</p>

    <p>Een groeipercentage kunnen we omzetten naar een groeifactor.</p>

    <p>Bij p procent groei:</p>

    <p class="formula">g = 1 + p</p>

    <p>De logaritme is de inverse bewerking van machtsverheffen.</p>

    <p>De betekenis van:</p>

    <p class="formula">log_b(a) = x</p>

    <p>is:</p>

    <p class="formula">b^x = a</p>

    <p>Logaritmen stellen ons daardoor in staat om onbekende exponenten te vinden.</p>

    <p>Exponentiële en logaritmische functies zijn inverse functies en vormen samen een belangrijk paar in de wiskunde.</p>

    <p>Deze functies zijn bovendien essentieel voor het beschrijven van processen zoals groei, verval en schaalverschillen.</p>

    <p>In de volgende milestone maken we de laatste grote stap van Fase 2: we gebruiken <strong>hoeken en verhoudingen</strong> om lengtes, richtingen en periodieke verschijnselen te beschrijven.</p>


    <div class="callout">
      <strong>Inzicht:</strong> Bij lineaire groei verandert een grootheid telkens met dezelfde hoeveelheid. Bij exponentiële groei verandert ze telkens met dezelfde factor. De logaritme draait exponentiële groei weer om: ze beantwoordt de vraag welke exponent nodig is om een bepaalde waarde te bereiken.
    </div>
  `
},
  {
  id: "2.14",
  title: "Trigonometrie",
  goal: "Hoe verbinden we hoeken met lengtes en verhoudingen?",
  theory: /*html*/`
    <h3>Een hoek vertelt meer dan alleen een richting</h3>

    <p>In de vorige milestones hebben we geleerd hoe we lengtes en hoeken van figuren kunnen beschrijven.</p>

    <p>Bij gelijkvormige figuren zagen we bovendien dat overeenkomstige lengtes altijd in dezelfde verhouding staan.</p>

    <p>Nu combineren we die ideeën.</p>

    <p>In een rechthoekige driehoek is er een bijzondere relatie tussen een <strong>hoek</strong> en de <strong>verhoudingen van de zijden</strong>.</p>

    <p>Dat verband vormt de basis van de trigonometrie.</p>


    <h3>De rechthoekige driehoek</h3>

    <p>Een rechthoekige driehoek heeft één rechte hoek van 90°.</p>

    <p>De zijde tegenover deze rechte hoek heeft een bijzondere naam: de <strong>schuine zijde</strong> of <strong>hypotenusa</strong>.</p>

    <p>De andere twee zijden noemen we de rechthoekszijden.</p>

          <div class="theory-image">
        <img
          src="assets/driehoek-trig-zijden.svg"
          alt="Rechthoekige driehoek. Bij hoek theta: de aanliggende zijde naast de hoek, de overstaande ertegenover, de schuine zijde tegenover de rechte hoek."
        >
      </div>

    <p>We bekijken nu één van de twee scherpe hoeken van de driehoek: de hoek θ (griekse letter theta)</p>

    <p>Ten opzichte van die hoek krijgen de zijden een specifieke rol:</p>

    <ul>
      <li>de <strong>schuine zijde</strong> ligt tegenover de rechte hoek;</li>
      <li>de <strong>overstaande zijde</strong> ligt tegenover de gekozen hoek;</li>
      <li>de <strong>aanliggende zijde</strong> ligt naast de gekozen hoek, maar is niet de schuine zijde.</li>
    </ul>

    <p>De begrippen overstaand en aanliggend hangen dus af van de hoek die we bekijken.</p>


    <h3>De verhouding tussen zijden</h3>

    <p>Stel dat we een bepaalde scherpe hoek hebben.</p>

    <p>We kunnen de verhouding nemen van de overstaande zijde tot de schuine zijde.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">overstaande zijde / schuine zijde</p>

    <p>We kunnen ook andere verhoudingen maken:</p>

    <p class="formula">aanliggende zijde / schuine zijde</p>

    <p>en:</p>

    <p class="formula">overstaande zijde / aanliggende zijde</p>

    <p>Deze verhoudingen blijken niet willekeurig te zijn.</p>

    <p>Voor een bepaalde hoek hebben ze steeds dezelfde waarde, ongeacht hoe groot de driehoek is.</p>


    <h3>Waarom blijven die verhoudingen hetzelfde?</h3>

    <p>Hier komt de gelijkvormigheid uit milestone 2.10 terug.</p>

    <p>Neem twee rechthoekige driehoeken met dezelfde scherpe hoek.</p>

    <p>Omdat ze dezelfde hoeken hebben, zijn ze gelijkvormig.</p>

    <p>Hun overeenkomstige zijden zijn dus evenredig.</p>

    <p>Als bijvoorbeeld alle lengtes van de tweede driehoek twee keer zo groot zijn, worden zowel de teller als de noemer van een verhouding twee keer zo groot.</p>

    <p>De verhouding zelf verandert daardoor niet.</p>

    <p>Dit is de fundamentele reden waarom we een verhouding aan een hoek kunnen koppelen.</p>


    <h3>De sinus</h3>

    <p>De verhouding van de overstaande zijde tot de schuine zijde noemen we de <strong>sinus</strong> van de hoek.</p>

    <p>We schrijven:</p>

    <p class="formula">sin(θ) = overstaande zijde / schuine zijde</p>

    <p>Bijvoorbeeld, als de overstaande zijde 3 is en de schuine zijde 5:</p>

    <p class="formula">sin(θ) = 3 / 5</p>

    <p>De sinus is dus geen extra lengte.</p>

    <p>Het is een <strong>getal dat een verhouding beschrijft</strong>.</p>


    <h3>De cosinus</h3>

    <p>De verhouding van de aanliggende zijde tot de schuine zijde noemen we de <strong>cosinus</strong>.</p>

    <p>We schrijven:</p>

    <p class="formula">cos(θ) = aanliggende zijde / schuine zijde</p>

    <p>Als de aanliggende zijde 4 is en de schuine zijde 5:</p>

    <p class="formula">cos(θ) = 4 / 5</p>

    <p>Ook de cosinus is dus een verhouding.</p>


    <h3>De tangens</h3>

    <p>De verhouding van de overstaande zijde tot de aanliggende zijde noemen we de <strong>tangens</strong>.</p>

    <p>We schrijven:</p>

    <p class="formula">tan(θ) = overstaande zijde / aanliggende zijde</p>

    <p>Als de overstaande zijde 3 is en de aanliggende zijde 4:</p>

    <p class="formula">tan(θ) = 3 / 4</p>

    <p>We hebben nu drie fundamentele verhoudingen:</p>

    <p class="formula">sin(θ) = overstaande zijde / schuine zijde</p>

    <p class="formula">cos(θ) = aanliggende zijde / schuine zijde</p>

    <p class="formula">tan(θ) = overstaande zijde / aanliggende zijde</p>


    <h3>Een handige geheugensteun</h3>

    <p>De drie verhoudingen kunnen kort worden onthouden als:</p>

    <p class="formula">sin = overstaand / schuin</p>

    <p class="formula">cos = aanliggend / schuin</p>

    <p class="formula">tan = overstaand / aanliggend</p>

    <p>Een geheugensteun kan handig zijn, maar het belangrijkste blijft dat je begrijpt <strong>welke zijden</strong> in de verhouding staan.</p>


    <h3>Een hoek berekenen uit een driehoek</h3>

    <p>Stel dat de overstaande zijde 3 cm is en de schuine zijde 5 cm.</p>

    <p>Dan geldt:</p>

    <p class="formula">sin(θ) = 3 / 5</p>

    <p>Dus:</p>

    <p class="formula">sin(θ) = 0,6</p>

    <p>Om de hoek zelf te vinden, gebruiken we de inverse sinus:</p>

    <p class="formula">hoek = sin⁻¹(0,6)</p>

    <p>Dit geeft ongeveer:</p>

    <p class="formula">hoek ≈ 36,87°</p>

    <p>De inverse sinus beantwoordt dus de omgekeerde vraag:</p>

    <p><strong>Welke hoek heeft een sinus van 0,6?</strong></p>


    <h3>De inverse functies</h3>

    <p>Net zoals de logaritme in 2.13 de inverse bewerking van machtsverheffen is, bestaan er inverse goniometrische functies.</p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">sin(θ) = 0,6</p>

    <p>wordt:</p>

    <p class="formula">hoek = sin⁻¹(0,6)</p>

    <p>Op dezelfde manier bestaan:</p>

    <p class="formula">cos⁻¹(x)</p>

    <p>en:</p>

    <p class="formula">tan⁻¹(x)</p>

    <p>Deze functies worden gebruikt wanneer we de hoek kennen uit een verhouding van zijden.</p>


    <h3>Een onbekende zijde berekenen</h3>

    <p>Trigonometrie werkt ook in de andere richting.</p>

    <p>Stel dat een rechthoekige driehoek een hoek van 30° heeft en een schuine zijde van 10 cm.</p>

    <p>We zoeken de overstaande zijde.</p>

    <p>Daarvoor gebruiken we de sinus:</p>

    <p class="formula">sin(30°) = overstaande zijde / 10</p>

    <p>Omdat:</p>

    <p class="formula">sin(30°) = 0,5</p>

    <p>krijgen we:</p>

    <p class="formula">0,5 = overstaande zijde / 10</p>

    <p>Dus:</p>

    <p class="formula">overstaande zijde = 5 cm</p>

    <p>Trigonometrie maakt het dus mogelijk om een onbekende lengte te vinden wanneer we een hoek en een andere lengte kennen.</p>


    <h3>Een tweede voorbeeld: de aanliggende zijde</h3>

    <p>Stel dat een rechthoekige driehoek een hoek van 60° heeft en een schuine zijde van 8 cm.</p>

    <p>We zoeken de aanliggende zijde.</p>

    <p>Daarvoor gebruiken we de cosinus:</p>

    <p class="formula">cos(60°) = aanliggende zijde / 8</p>

    <p>Omdat:</p>

    <p class="formula">cos(60°) = 0,5</p>

    <p>volgt:</p>

    <p class="formula">aanliggende zijde = 4 cm</p>


    <h3>De tangens gebruiken</h3>

    <p>Stel dat we een rechthoekige driehoek hebben met een hoek van 40°.</p>

    <p>De aanliggende zijde is 6 cm.</p>

    <p>We zoeken de overstaande zijde.</p>

    <p>Dan is de tangens geschikt:</p>

    <p class="formula">tan(40°) = overstaande zijde / 6</p>

    <p>Dus:</p>

    <p class="formula">overstaande zijde = 6 × tan(40°)</p>

    <p>Met een rekenmachine vinden we ongeveer:</p>

    <p class="formula">overstaande zijde ≈ 5,03 cm</p>

    <p>De keuze van sinus, cosinus of tangens hangt dus af van welke zijden we kennen en welke zijde we zoeken.</p>


    <h3>De juiste verhouding kiezen</h3>

    <p>Een praktische werkwijze is:</p>

    <ol>
      <li>Markeer de gegeven hoek.</li>
      <li>Bepaal de schuine zijde.</li>
      <li>Bepaal welke zijde overstaand is.</li>
      <li>Bepaal welke zijde aanliggend is.</li>
      <li>Kijk welke verhouding de bekende en onbekende zijden bevat.</li>
    </ol>

    <p>Als je de overstaande en schuine zijde gebruikt, heb je sinus.</p>

    <p>Als je de aanliggende en schuine zijde gebruikt, heb je cosinus.</p>

    <p>Als je de overstaande en aanliggende zijde gebruikt, heb je tangens.</p>


    <h3>Een belangrijk verband tussen sinus en cosinus</h3>

    <p>Sinus en cosinus zijn niet volledig onafhankelijke verhoudingen.</p>

    <p>Voor een hoek in een rechthoekige driehoek geldt:</p>

    <p class="formula">sin²(θ) + cos²(θ) = 1</p>

    <p>Hierbij betekent bijvoorbeeld:</p>

    <p class="formula">sin²(θ) = (sin(θ))²</p>

    <p>Dit verband volgt rechtstreeks uit de stelling van Pythagoras.</p>


    <h3>Waarom geldt sin² + cos² = 1?</h3>

    <p>Neem een rechthoekige driehoek met schuine zijde c en rechthoekszijden a en b.</p>

    <p>Volgens Pythagoras:</p>

    <p class="formula">a² + b² = c²</p>

    <p>Voor een bepaalde hoek kunnen we schrijven:</p>

    <p class="formula">sin(θ) = a / c</p>

    <p>en:</p>

    <p class="formula">cos(θ) = b / c</p>

    <p>Als we beide kwadrateren:</p>

    <p class="formula">sin²(θ) = a² / c²</p>

    <p class="formula">cos²(θ) = b² / c²</p>

    <p>Optellen geeft:</p>

    <p class="formula">sin²(θ) + cos²(θ) = (a² + b²) / c²</p>

    <p>Volgens Pythagoras is <span class="formula-inline">a² + b² = c²</span>.</p>

    <p>Dus:</p>

    <p class="formula">sin²(θ) + cos²(θ) = 1</p>

    <p>Een goniometrische identiteit blijkt hier dus rechtstreeks verbonden met een meetkundige stelling.</p>


    <h3>De bijzondere hoeken 30°, 45° en 60°</h3>

    <p>Sommige hoeken hebben bijzonder eenvoudige goniometrische waarden.</p>

    <p>Voor 30° geldt:</p>

    <p class="formula">sin(30°) = 1 / 2</p>

    <p class="formula">cos(30°) = √3 / 2</p>

    <p>Voor 45° geldt:</p>

    <p class="formula">sin(45°) = √2 / 2</p>

    <p class="formula">cos(45°) = √2 / 2</p>

    <p>Voor 60° geldt:</p>

    <p class="formula">sin(60°) = √3 / 2</p>

    <p class="formula">cos(60°) = 1 / 2</p>

    <p>Deze waarden kunnen worden afgeleid uit bijzondere rechthoekige driehoeken.</p>


    <h3>Graden en radialen</h3>

    <p>Tot nu toe hebben we hoeken uitgedrukt in graden.</p>

    <p>In hogere wiskunde wordt echter vaak een andere eenheid gebruikt: de <strong>radiaal</strong>.</p>

    <p>Een volledige omwenteling is:</p>

    <p class="formula">360° = 2π radialen</p>

    <p>Daaruit volgt:</p>

    <p class="formula">180° = π radialen</p>

    <p>en bijvoorbeeld:</p>

    <p class="formula">90° = π / 2 radialen</p>

    <p>Radialen zijn belangrijk omdat ze een directe relatie leggen tussen een hoek en de lengte van een boog.</p>


    <h3>De hoek als verhouding op een cirkel</h3>

    <p>Tot nu toe gebruikten we trigonometrie in rechthoekige driehoeken.</p>

    <p>Maar sinus en cosinus kunnen veel algemener worden opgevat.</p>

    <p>Neem een cirkel met straal 1, de zogenaamde <strong>eenheidscirkel</strong>.</p>

    <p>Bij een hoek kunnen we een punt op de cirkel aanwijzen.</p>

    <p>De horizontale positie van dat punt hangt samen met de cosinus.</p>

    <p>De verticale positie hangt samen met de sinus.</p>

    <p>Daarmee krijgen sinus en cosinus een betekenis die verder gaat dan alleen rechthoekige driehoeken.</p>


    <h3>De eenheidscirkel</h3>

    <p>Op de eenheidscirkel geldt voor een hoek θ:</p>

    <p class="formula">x = cos(θ)</p>

    <p>en:</p>

    <p class="formula">y = sin(θ)</p>

    <p>Het punt op de cirkel heeft dus coördinaten:</p>

    <p class="formula">(cos(θ), sin(θ))</p>

    <p>Omdat het punt op een cirkel met straal 1 ligt, geldt:</p>

    <p class="formula">x² + y² = 1</p>

    <p>Invullen van x en y geeft opnieuw:</p>

    <p class="formula">cos²(θ) + sin²(θ) = 1</p>

    <p>De identiteit uit de rechthoekige driehoek blijkt dus ook rechtstreeks uit de geometrie van de eenheidscirkel.</p>


    <h3>Sinus en cosinus voor hoeken groter dan 90°</h3>

    <p>De eenheidscirkel maakt het mogelijk om sinus en cosinus ook voor grotere hoeken te definiëren.</p>

    <p>Bijvoorbeeld voor een hoek tussen 90° en 180° ligt het punt in het tweede kwadrant.</p>

    <p>Daar is de x-coördinaat negatief en de y-coördinaat positief.</p>

    <p>Daarom geldt in dat kwadrant:</p>

    <p class="formula">cos(θ) < 0</p>

    <p>en:</p>

    <p class="formula">sin(θ) > 0</p>

    <p>De goniometrische functies zijn dus niet beperkt tot scherpe hoeken van rechthoekige driehoeken.</p>


    <h3>De tangens en de eenheidscirkel</h3>

    <p>De tangens kan worden geschreven als:</p>

    <p class="formula">tan(θ) = sin(θ) / cos(θ)</p>

    <p>Dat volgt uit de definities:</p>

    <p class="formula">sin(θ) = overstaande zijde / schuine zijde</p>

    <p class="formula">cos(θ) = aanliggende zijde / schuine zijde</p>

    <p>Als we de eerste verhouding door de tweede delen, valt de schuine zijde weg.</p>

    <p>We krijgen:</p>

    <p class="formula">tan(θ) = overstaande zijde / aanliggende zijde</p>

    <p>De drie goniometrische functies zijn dus onderling verbonden.</p>


    <h3>Wanneer is de tangens niet gedefinieerd?</h3>

    <p>Uit:</p>

    <p class="formula">tan(θ) = sin(θ) / cos(θ)</p>

    <p>zien we dat de cosinus niet nul mag zijn.</p>

    <p>Als:</p>

    <p class="formula">cos(θ) = 0</p>

    <p>zou er door nul worden gedeeld.</p>

    <p>Daarom is de tangens niet gedefinieerd voor hoeken zoals:</p>

    <p class="formula">90°</p>

    <p>en:</p>

    <p class="formula">270°</p>

    <p>en alle hoeken die daarmee overeenkomen na volledige omwentelingen.</p>


    <h3>Trigonometrie en coördinaten</h3>

    <p>In milestone 2.8 gebruikten we coördinaten om punten en richtingen te beschrijven.</p>

    <p>Trigonometrie geeft ons nu een krachtige manier om een richting aan een hoek te koppelen.</p>

    <p>Op de eenheidscirkel hoort bij een hoek θ het punt:</p>

    <p class="formula">(cos(θ), sin(θ))</p>

    <p>Dit betekent dat een hoek rechtstreeks kan worden vertaald naar een horizontale en verticale component.</p>

    <p>Dit idee wordt later essentieel voor vectoren en fysica.</p>


    <h3>Een richting ontbinden in twee componenten</h3>

    <p>Stel dat een kracht van 10 N onder een hoek van 30° ten opzichte van de horizontale richting werkt.</p>

    <p>De horizontale component is:</p>

    <p class="formula">F_x = 10 × cos(30°)</p>

    <p>De verticale component is:</p>

    <p class="formula">F_y = 10 × sin(30°)</p>

    <p>We hebben een enkele grootheid met een richting dus opgesplitst in een horizontale en verticale bijdrage.</p>

    <p>Dit is een eerste belangrijke verbinding tussen trigonometrie en fysica.</p>


    <h3>Trigonometrie en helling</h3>

    <p>In analytische meetkunde gebruikten we de helling van een rechte:</p>

    <p class="formula">m = Δy / Δx</p>

    <p>In een rechthoekige driehoek gevormd door een rechte kunnen we dit schrijven als:</p>

    <p class="formula">m = overstaande zijde / aanliggende zijde</p>

    <p>Maar die verhouding is precies de tangens van de hoek:</p>

    <p class="formula">tan(θ) = overstaande zijde / aanliggende zijde</p>

    <p>Dus:</p>

    <p class="formula">m = tan(θ)</p>

    <p>en omgekeerd:</p>

    <p class="formula">θ = tan⁻¹(m)</p>

    <p>De helling van een rechte kan dus worden geïnterpreteerd als een hoek.</p>


    <h3>Van hoek naar periodieke beweging</h3>

    <p>De eenheidscirkel bevat nog een belangrijk idee.</p>

    <p>Wanneer een punt één volledige omwenteling maakt, keert het terug naar zijn beginpositie.</p>

    <p>De waarden van sinus en cosinus herhalen zich dus steeds opnieuw.</p>

    <p>Sinus en cosinus zijn daarom <strong>periodieke functies</strong>.</p>

    <p>Een volledige periode is:</p>

    <p class="formula">2π radialen</p>

    <p>of:</p>

    <p class="formula">360°</p>


    <h3>De sinusfunctie</h3>

    <p>We kunnen sinus nu niet alleen gebruiken als verhouding in een driehoek, maar als functie van een hoek.</p>

    <p>We schrijven:</p>

    <p class="formula">f(x) = sin(x)</p>

    <p>De invoer x is een hoek en de uitvoer ligt altijd tussen −1 en 1.</p>

    <p>Dus:</p>

    <p class="formula">−1 ≤ sin(x) ≤ 1</p>

    <p>De functie herhaalt zichzelf steeds na één volledige omwenteling.</p>

    <p>De sinusfunctie vormt daarmee een eenvoudig wiskundig model voor periodieke verschijnselen.</p>


    <h3>De cosinusfunctie</h3>

    <p>Op dezelfde manier krijgen we:</p>

    <p class="formula">f(x) = cos(x)</p>

    <p>Ook hier geldt:</p>

    <p class="formula">−1 ≤ cos(x) ≤ 1</p>

    <p>En ook de cosinus heeft een periode van:</p>

    <p class="formula">2π</p>

    <p>Sinus en cosinus zijn nauw met elkaar verbonden, maar starten op een verschillend punt in hun periodieke beweging.</p>


    <h3>Amplitude en periode</h3>

    <p>Een algemene sinusfunctie kan bijvoorbeeld de vorm hebben:</p>

    <p class="formula">f(x) = A × sin(x)</p>

    <p>De factor A bepaalt hoe groot de uitslag van de functie is.</p>

    <p>De grootste absolute waarde van de functie is dan:</p>

    <p class="formula">|A|</p>

    <p>Deze maximale uitslag noemen we de <strong>amplitude</strong>.</p>

    <p>Een algemene periodieke functie kan ook een andere periode hebben. Bijvoorbeeld:</p>

    <p class="formula">f(x) = sin(2x)</p>

    <p>Hierdoor doorloopt de sinus twee volledige cycli in hetzelfde interval waarin sin(x) één cyclus doorloopt.</p>

    <p>De parameters van sinusfuncties maken het mogelijk om echte periodieke verschijnselen te modelleren.</p>


    <h3>Een toepassing: hoogte van een punt</h3>

    <p>Stel dat een punt op een cirkel met straal 2 m beweegt.</p>

    <p>De verticale positie ten opzichte van het middelpunt kan worden beschreven door:</p>

    <p class="formula">y = 2 × sin(θ)</p>

    <p>Wanneer de hoek verandert, verandert ook de hoogte.</p>

    <p>Na één volledige omwenteling herhaalt de beweging zich.</p>

    <p>Hetzelfde soort wiskundig model kan worden gebruikt voor periodieke bewegingen zoals trillingen en golven.</p>


    <h3>Trigonometrie in de werkelijkheid</h3>

    <p>Trigonometrie wordt gebruikt wanneer hoeken en lengtes met elkaar verbonden zijn.</p>

    <p>Voorbeelden zijn:</p>

    <ul>
      <li>de hoogte van een gebouw bepalen;</li>
      <li>een afstand bepalen die niet rechtstreeks meetbaar is;</li>
      <li>een helling of richting berekenen;</li>
      <li>krachten ontbinden in componenten;</li>
      <li>posities en bewegingen beschrijven;</li>
      <li>periodieke verschijnselen modelleren.</li>
    </ul>

    <p>Hetzelfde onderliggende idee komt telkens terug: een hoek bepaalt een verhouding of component.</p>


    <h3>Een volledig voorbeeld: de hoogte van een gebouw</h3>

    <p>Je staat 30 meter van een gebouw.</p>

    <p>De hoek tussen de horizontale grond en je zichtlijn naar de top van het gebouw is 40°.</p>

    <p>We nemen aan dat je ooghoogte verwaarloosbaar is voor dit eenvoudige model.</p>

    <p>We krijgen een rechthoekige driehoek.</p>

    <p>De afstand tot het gebouw is de aanliggende zijde.</p>

    <p>De hoogte van het gebouw is de overstaande zijde.</p>

    <p>Daarom gebruiken we de tangens:</p>

    <p class="formula">tan(40°) = hoogte / 30</p>

    <p>Dus:</p>

    <p class="formula">hoogte = 30 × tan(40°)</p>

    <p>Dit geeft ongeveer:</p>

    <p class="formula">hoogte ≈ 25,2 m</p>

    <p>Met een hoek en één gemeten afstand hebben we dus een andere lengte kunnen bepalen.</p>


    <h3>Een vaste werkwijze</h3>

    <p>Bij een trigonometrisch probleem kun je de volgende werkwijze gebruiken:</p>

    <ol>
      <li>Teken de situatie zo duidelijk mogelijk.</li>
      <li>Herken de rechthoekige driehoek.</li>
      <li>Markeer de gegeven hoek.</li>
      <li>Benoem de schuine, overstaande en aanliggende zijde.</li>
      <li>Bepaal welke zijden bekend zijn en welke je zoekt.</li>
      <li>Kies sinus, cosinus of tangens.</li>
      <li>Schrijf eerst de verhouding op.</li>
      <li>Los daarna de vergelijking op.</li>
      <li>Controleer of de uitkomst logisch is.</li>
      <li>Let erop dat je rekenmachine in de juiste hoekeenheid staat.</li>
    </ol>


    <h3>Veelgemaakte fouten</h3>

    <p><strong>Fout 1: de verkeerde zijde benoemen.</strong></p>

    <p>De begrippen overstaand en aanliggend hangen af van de gekozen hoek.</p>

    <p><strong>Fout 2: de schuine zijde verkeerd herkennen.</strong></p>

    <p>De schuine zijde ligt altijd tegenover de rechte hoek.</p>

    <p><strong>Fout 3: sinus, cosinus en tangens als losse formules leren.</strong></p>

    <p>Het is belangrijker te begrijpen welke verhouding elke functie beschrijft.</p>

    <p><strong>Fout 4: graden en radialen door elkaar halen.</strong></p>

    <p>Controleer altijd de instelling van de rekenmachine.</p>

    <p><strong>Fout 5: een inverse goniometrische functie verwarren met een macht.</strong></p>

    <p>sin⁻¹(x) betekent hier de inverse sinusfunctie en niet simpelweg 1 / sin(x).</p>

    <p><strong>Fout 6: te vroeg afronden.</strong></p>

    <p>Bewaar tijdens de berekening voldoende decimalen en rond pas op het einde af.</p>


    <h3>Wat hebben we eigenlijk geleerd?</h3>

    <p>Trigonometrie verbindt <strong>hoeken</strong> met <strong>verhoudingen van lengtes</strong>.</p>

    <p>In een rechthoekige driehoek hebben we drie belangrijke functies:</p>

    <p class="formula">sin(θ) = overstaande zijde / schuine zijde</p>

    <p class="formula">cos(θ) = aanliggende zijde / schuine zijde</p>

    <p class="formula">tan(θ) = overstaande zijde / aanliggende zijde</p>

    <p>Deze verhoudingen zijn onafhankelijk van de grootte van de driehoek omdat gelijkvormige driehoeken dezelfde verhoudingen hebben.</p>

    <p>Met inverse goniometrische functies kunnen we uit een verhouding een hoek terugvinden.</p>

    <p>Sinus en cosinus kunnen bovendien worden uitgebreid naar de eenheidscirkel:</p>

    <p class="formula">(cos(θ), sin(θ))</p>

    <p>Daarmee kunnen we hoeken verbinden met coördinaten, richtingen en periodieke bewegingen.</p>

    <p>De tangens verbindt trigonometrie rechtstreeks met de helling van een rechte:</p>

    <p class="formula">m = tan(θ)</p>

    <p>En sinus en cosinus vormen periodieke functies die later gebruikt kunnen worden om golven, trillingen en andere periodieke processen te beschrijven.</p>

    <p>Trigonometrie vormt daarmee een belangrijke brug tussen <strong>meetkunde, algebra, analyse en fysica</strong>.</p>


    <h3>Van Fase 2 naar de volgende fase</h3>

    <p>In Fase 2 hebben we een groot deel van de klassieke basiswiskunde opgebouwd.</p>

    <p>We begonnen met variabelen en algebraïsche uitdrukkingen.</p>

    <p>Daarna kwamen vergelijkingen, formules, ongelijkheden en machten.</p>

    <p>Vervolgens leerden we kwadratische vergelijkingen, coördinaten, meetkunde, gelijkvormigheid en functies.</p>

    <p>Met exponentiële en logaritmische functies leerden we groei en inverse bewerkingen beschrijven.</p>

    <p>Met trigonometrie hebben we nu hoeken verbonden met lengtes, coördinaten en periodieke verschijnselen.</p>

    <p>De volgende stap kan daardoor veel verder gaan.</p>

    <p>We beschikken nu over de algebraïsche, geometrische en functionele taal die nodig is om nieuwe gebieden van de wiskunde systematisch op te bouwen.</p>


    <div class="callout">
      <strong>Inzicht:</strong> Trigonometrie is in essentie de studie van verhoudingen die door hoeken worden bepaald. Dankzij gelijkvormigheid blijven die verhoudingen gelijk voor driehoeken van verschillende grootte. Sinus, cosinus en tangens verbinden daardoor hoeken met lengtes. Via de eenheidscirkel groeien deze begrippen verder uit tot functies die richtingen, coördinaten en periodieke bewegingen beschrijven.
    </div>
  `
}
]
