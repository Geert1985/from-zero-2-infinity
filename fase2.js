/* Lesstof Fase 2 — Algebra & geometrie. Breid theory/practice/exam hier uit. */
const MILESTONES_2 = [
  {
    id: "2.1",
    title: "Variabelen & algebraïsche uitdrukkingen",
    goal: "Hoe kan een getal een onbekende worden?.",
    theory: /* html */`
      <h2>Variabelen &amp; algebraïsche uitdrukkingen</h2>
      <p><strong>Doel:</strong> je leert hoe letters getallen kunnen voorstellen en hoe je met zulke symbolen algebraïsche uitdrukkingen opbouwt en interpreteert.</p>

      <h3>1. Van getallen naar symbolen</h3>
      <p>Bij gewone rekenkunde werken we met bekende getallen. In de algebra willen we ook situaties beschrijven waarin een getal nog onbekend is of kan veranderen. Daarvoor gebruiken we een <strong>variabele</strong>.</p>
      <p>Een variabele wordt meestal voorgesteld door een letter, bijvoorbeeld <strong>x</strong>. Als x de leeftijd van iemand voorstelt, kan x verschillende waarden aannemen.</p>
      <div class="callout"><strong>Een variabele is een symbool dat een waarde voorstelt die kan variëren of nog niet bekend is.</strong></div>

      <h3>2. Constante en variabele</h3>
      <p>Een getal dat niet verandert binnen een bepaalde situatie noemen we een <strong>constante</strong>. In de uitdrukking <span class="formula">3x + 5</span> is 3 een constante, x een variabele en 5 opnieuw een constante.</p>
      <p>Het getal vóór een variabele heet de <strong>coëfficiënt</strong>. In <span class="formula">7x</span> is 7 dus de coëfficiënt van x. Staat er geen getal vóór x, dan is de coëfficiënt 1: <span class="formula">x = 1x</span>.</p>

      <h3>3. Algebraïsche uitdrukkingen</h3>
      <p>Een <strong>algebraïsche uitdrukking</strong> bestaat uit getallen, variabelen en bewerkingen, maar bevat geen gelijkheidsteken.</p>
      <p>Voorbeelden:</p>
      <ul>
        <li><span class="formula">x + 4</span></li>
        <li><span class="formula">3x - 7</span></li>
        <li><span class="formula">2a + 5b</span></li>
        <li><span class="formula">x<sup>2</sup> + 2x + 1</span></li>
      </ul>
      <p>De delen die door een plus- of minteken van elkaar gescheiden worden, noemen we <strong>termen</strong>. In <span class="formula">4x + 3y - 8</span> zijn er drie termen: 4x, 3y en -8.</p>

      <h3>4. Waarde van een uitdrukking</h3>
      <p>Als de waarde van een variabele bekend is, kunnen we de uitdrukking berekenen. Dit heet <strong>invullen</strong> of substitueren.</p>
      <p>Neem <span class="formula">3x + 5</span> en x = 4:</p>
      <p class="formula">3 · 4 + 5 = 12 + 5 = 17</p>
      <p>De waarde van de uitdrukking is dus 17.</p>
      <p>Bij meerdere variabelen vullen we elke bekende waarde in. Gebruik eventueel haakjes om duidelijk te maken welke waarde wordt ingevuld.</p>

      <h3>5. Gelijksoortige termen</h3>
      <p>Termen zijn <strong>gelijksoortig</strong> als ze dezelfde variabele(n) met dezelfde exponent(en) bevatten. Zo zijn 3x en 7x gelijksoortig, maar 3x en 3x<sup>2</sup> niet.</p>
      <p>Gelijksoortige termen kunnen worden samengenomen:</p>
      <p class="formula">3x + 5x = 8x</p>
      <p>Maar:</p>
      <p class="formula">3x + 5y</p>
      <p>kan niet verder worden samengevoegd.</p>

      <div class="callout"><strong>Kernidee:</strong> algebra gebruikt symbolen om algemene uitspraken te doen. Waar 3 + 5 = 8 één specifieke berekening is, beschrijft 3x + 5x = 8x een hele verzameling berekeningen.</div>
    `
  },

  {
    id: "2.2",
    title: "Algebraïsche bewerkingen",
    goal: "Hoe rekenen we met letters?",
    theory: /* html */`
      <h2>Algebraïsche bewerkingen</h2>
      <p><strong>Doel:</strong> je leert optellen, aftrekken, vermenigvuldigen, delen en ontbinden in factoren met algebraïsche uitdrukkingen.</p>

      <h3>1. Optellen en aftrekken</h3>
      <p>Bij optellen en aftrekken mogen alleen <strong>gelijksoortige termen</strong> rechtstreeks worden samengenomen.</p>
      <p class="formula">4x + 3x = 7x</p>
      <p class="formula">8a - 5a = 3a</p>
      <p>Constante termen zijn eveneens gelijksoortig:</p>
      <p class="formula">7 + 4 - 2 = 9</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3x + 7 + 2x - 4 = 5x + 3</p>

      <h3>2. Distributiviteit</h3>
      <p>Een factor vóór een haakje moet met <strong>elke term</strong> in het haakje worden vermenigvuldigd. Dit is de distributieve eigenschap:</p>
      <p class="formula">a(b + c) = ab + ac</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3(x + 4) = 3x + 12</p>
      <p>Bij een minteken in het haakje geldt hetzelfde:</p>
      <p class="formula">2(5x - 3) = 10x - 6</p>

      <h3>3. Haakjes wegwerken</h3>
      <p>Werk eerst de vermenigvuldiging met het haakje uit en verzamel daarna gelijksoortige termen.</p>
      <p class="formula">4(2x + 3) - x = 8x + 12 - x = 7x + 12</p>
      <p>Let extra op een minteken vóór een haakje:</p>
      <p class="formula">-(x - 5) = -x + 5</p>

      <h3>4. Vermenigvuldigen van algebraïsche factoren</h3>
      <p>Bij vermenigvuldiging vermenigvuldig je de coëfficiënten en combineer je machten van dezelfde variabele.</p>
      <p class="formula">3x · 4x = 12x<sup>2</sup></p>
      <p class="formula">2a<sup>2</sup> · 5a<sup>3</sup> = 10a<sup>5</sup></p>
      <p>Dit volgt uit de machtsregel <span class="formula">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></span>.</p>

      <h3>5. Merkwaardige producten</h3>
      <p>Drie belangrijke producten komen vaak terug:</p>
      <p class="formula">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></p>
      <p class="formula">(a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup></p>
      <p class="formula">(a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup></p>

      <h3>6. Ontbinden in factoren</h3>
      <p>Ontbinden in factoren is de omgekeerde bewerking van uitwerken. Zoek bijvoorbeeld de grootste gemeenschappelijke factor:</p>
      <p class="formula">6x + 9 = 3(2x + 3)</p>
      <p>Zo kunnen ingewikkelde uitdrukkingen worden vereenvoudigd of later worden gebruikt om vergelijkingen op te lossen.</p>

      <div class="callout"><strong>Werkvolgorde:</strong> werk haakjes weg, vermenigvuldig waar nodig, verzamel gelijksoortige termen en vereenvoudig pas daarna verder.</div>
    `
  },

  {
    id: "2.3",
    title: "Vergelijkingen",
    goal: "Hoe vinden we een onbekende?",
    theory: /* html */`
      <h2>Vergelijkingen</h2>
      <p><strong>Doel:</strong> je leert een onbekende bepalen door een vergelijking stap voor stap op te lossen.</p>

      <h3>1. Wat is een vergelijking?</h3>
      <p>Een <strong>vergelijking</strong> bevat een gelijkheidsteken en stelt dat de linker- en rechterkant dezelfde waarde hebben.</p>
      <p class="formula">2x + 3 = 11</p>
      <p>Een waarde van x die de vergelijking waar maakt, noemen we een <strong>oplossing</strong>.</p>

      <h3>2. De balansgedachte</h3>
      <p>Je kunt een vergelijking zien als een balans. Wat je aan de ene kant doet, moet je ook aan de andere kant doen. Daardoor blijft de gelijkheid behouden.</p>
      <p>Voor:</p>
      <p class="formula">2x + 3 = 11</p>
      <p>trekken we aan beide kanten 3 af:</p>
      <p class="formula">2x = 8</p>
      <p>Daarna delen we beide kanten door 2:</p>
      <p class="formula">x = 4</p>

      <h3>3. Vergelijkingen met meerdere stappen</h3>
      <p>Bij <span class="formula">3x - 7 = 2x + 5</span> verzamelen we eerst de x-termen aan één kant:</p>
      <p class="formula">x - 7 = 5</p>
      <p>Dus:</p>
      <p class="formula">x = 12</p>

      <h3>4. Haakjes in vergelijkingen</h3>
      <p>Werk eerst haakjes weg:</p>
      <p class="formula">3(x + 2) = 15</p>
      <p class="formula">3x + 6 = 15</p>
      <p class="formula">3x = 9</p>
      <p class="formula">x = 3</p>

      <h3>5. Breuken in vergelijkingen</h3>
      <p>Als een vergelijking breuken bevat, kunnen we beide kanten vermenigvuldigen met een gemeenschappelijke noemer.</p>
      <p class="formula">x/3 + 2 = 5</p>
      <p>Vermenigvuldig met 3:</p>
      <p class="formula">x + 6 = 15</p>
      <p>Dus x = 9.</p>

      <h3>6. Controle</h3>
      <p>Een oplossing controleer je door ze terug in de oorspronkelijke vergelijking te vullen. Voor x = 4 in <span class="formula">2x + 3 = 11</span> krijgen we:</p>
      <p class="formula">2 · 4 + 3 = 11</p>
      <p class="formula">11 = 11</p>
      <p>De oplossing is correct.</p>

      <div class="callout"><strong>Belangrijk:</strong> oplossen betekent niet zomaar “de x naar de andere kant brengen”. Elke stap is een bewerking die de gelijkwaardigheid van beide leden bewaart.</div>
    `
  },

  {
    id: "2.4",
    title: "Formules & algebraïsch modelleren",
    goal: "Hoe beschrijven we een probleem met een formule?",
    theory: /* html */`
      <h2>Formules &amp; algebraïsch modelleren</h2>
      <p><strong>Doel:</strong> je leert een situatie vertalen naar variabelen, formules en berekeningen, en een formule gebruiken om voorspellingen te doen.</p>

      <h3>1. Van werkelijkheid naar formule</h3>
      <p>Een <strong>model</strong> is een vereenvoudigde wiskundige beschrijving van een werkelijkheid. Eerst bepaal je welke grootheden belangrijk zijn en welke variabelen je daarvoor gebruikt.</p>
      <p>Een taxirit kan bijvoorbeeld bestaan uit een vaste kost van 4 euro en 2 euro per kilometer. Met x kilometer is de prijs:</p>
      <p class="formula">P = 4 + 2x</p>

      <h3>2. Grootheden en eenheden</h3>
      <p>Een formule verbindt <strong>grootheden</strong>. Controleer daarom altijd de eenheden. Als x in kilometer staat en P in euro, moet de factor 2 euro per kilometer voorstellen.</p>
      <div class="callout"><strong>Eenheden zijn een controlemechanisme:</strong> een formule moet dimensieel logisch zijn.</div>

      <h3>3. Formules gebruiken</h3>
      <p>Als alle waarden bekend zijn, vul je ze in. Voor <span class="formula">s = vt</span> met v = 80 km/u en t = 2,5 uur:</p>
      <p class="formula">s = 80 · 2,5 = 200 km</p>

      <h3>4. Een formule omvormen</h3>
      <p>Soms is niet de uitkomst maar een andere grootheid onbekend. Uit:</p>
      <p class="formula">s = vt</p>
      <p>kunnen we t vrijmaken door beide kanten door v te delen:</p>
      <p class="formula">t = s/v</p>
      <p>Een formule omvormen is dus algebraïsch oplossen met een andere gekozen onbekende.</p>

      <h3>5. Lineaire modellen</h3>
      <p>Een model van de vorm <span class="formula">y = ax + b</span> beschrijft een constante verandering. a is de <strong>richtingscoëfficiënt</strong> en b de beginwaarde.</p>
      <p>Bijvoorbeeld: een rekening met 10 euro vaste kost en 3 euro per uur:</p>
      <p class="formula">K = 3t + 10</p>

      <h3>6. Grenzen van een model</h3>
      <p>Een formule is niet automatisch een exacte beschrijving van de werkelijkheid. Een model maakt aannames. Een lineair prijsmodel kan bijvoorbeeld niet geldig zijn voor onbeperkt grote waarden van x.</p>
      <p>Een goed model vermeldt daarom de relevante variabelen, eenheden en het toepassingsgebied.</p>

      <div class="callout"><strong>Modelleerkring:</strong> situatie → variabelen → formule → berekening → interpretatie → controle met de werkelijkheid.</div>
    `
  },

  {
    id: "2.5",
    title: "Ongelijkheden & intervallen",
    goal: "Hoe beschrijven we een bereik van oplossingen?",
    theory: /* html */`
      <h2>Ongelijkheden &amp; intervallen</h2>
      <p><strong>Doel:</strong> je leert oplossingen beschrijven waarbij een onbekende groter, kleiner of gelijk aan een grenswaarde moet zijn.</p>

      <h3>1. De ongelijkheidstekens</h3>
      <ul>
        <li><strong>&lt;</strong>: kleiner dan</li>
        <li><strong>&gt;</strong>: groter dan</li>
        <li><strong>≤</strong>: kleiner dan of gelijk aan</li>
        <li><strong>≥</strong>: groter dan of gelijk aan</li>
      </ul>
      <p>Bijvoorbeeld <span class="formula">x &gt; 3</span> betekent dat alle getallen groter dan 3 oplossingen zijn.</p>

      <h3>2. Oplossen als een vergelijking</h3>
      <p>Dezelfde algebraïsche bewerkingen blijven geldig zolang je de richting van de ongelijkheid respecteert.</p>
      <p class="formula">2x + 1 ≤ 9</p>
      <p class="formula">2x ≤ 8</p>
      <p class="formula">x ≤ 4</p>

      <h3>3. Een belangrijk verschil</h3>
      <p>Vermenigvuldigen of delen door een <strong>negatief</strong> getal keert het ongelijkheidsteken om.</p>
      <p class="formula">-2x &gt; 6</p>
      <p>delen door -2 geeft:</p>
      <p class="formula">x &lt; -3</p>

      <h3>4. Intervallen</h3>
      <p>Een verzameling opeenvolgende reële getallen kunnen we schrijven als een <strong>interval</strong>.</p>
      <ul>
        <li><span class="formula">[2, 5]</span> bevat 2 en 5 en alle getallen ertussen.</li>
        <li><span class="formula">(2, 5)</span> bevat 2 en 5 niet.</li>
        <li><span class="formula">[2, 5)</span> bevat 2 wel, maar 5 niet.</li>
      </ul>
      <p>Een vierkante haak betekent dat de grenswaarde inbegrepen is; een ronde haak betekent dat ze niet inbegrepen is.</p>

      <h3>5. Getallenlijn</h3>
      <p>Op een getallenlijn gebruiken we een <strong>gevulde bol</strong> voor een inbegrepen grens en een <strong>open bol</strong> voor een uitgesloten grens.</p>
      <p>Voor <span class="formula">x ≥ -2</span> staat de bol op -2 gevuld en loopt de oplossingsverzameling naar rechts.</p>

      <div class="callout"><strong>Let op het teken bij negatieve factoren.</strong> Dat is de meest voorkomende bron van fouten bij het oplossen van lineaire ongelijkheden.</div>
    `
  },

  {
    id: "2.6",
    title: "Machten, wortels & algebraïsche breuken",
    goal: "Hoe breiden we de rekenregels uit naar algebra?",
    theory: /* html */`
      <h2>Machten, wortels &amp; algebraïsche breuken</h2>
      <p><strong>Doel:</strong> je leert machten, wortels en breuken met variabelen systematisch vereenvoudigen.</p>

      <h3>1. Machten</h3>
      <p>Een macht is een verkorte schrijfwijze voor herhaalde vermenigvuldiging:</p>
      <p class="formula">a<sup>3</sup> = a · a · a</p>
      <p>De exponent geeft aan hoe vaak de basis als factor voorkomt.</p>

      <h3>2. Machtsregels</h3>
      <p>Voor dezelfde niet-nulle basis gelden:</p>
      <p class="formula">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></p>
      <p class="formula">a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup></p>
      <p class="formula">(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></p>
      <p class="formula">(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup></p>
      <p>Ook geldt <span class="formula">a<sup>0</sup> = 1</span> voor a ≠ 0 en <span class="formula">a<sup>-n</sup> = 1/a<sup>n</sup></span>.</p>

      <h3>3. Vierkantswortels</h3>
      <p>De vierkantswortel van een niet-negatief getal is het niet-negatieve getal waarvan het kwadraat de oorspronkelijke waarde is.</p>
      <p class="formula">√25 = 5</p>
      <p>Let op: <span class="formula">x<sup>2</sup> = 25</span> heeft in de reële getallen twee oplossingen, x = 5 en x = -5. De hoofdwortel √25 zelf is echter 5.</p>

      <h3>4. Wortels en machten</h3>
      <p>Een wortel kan als een gebroken exponent worden geschreven:</p>
      <p class="formula">√a = a<sup>1/2</sup></p>
      <p class="formula">∛a = a<sup>1/3</sup></p>
      <p>Meer algemeen:</p>
      <p class="formula">a<sup>p/q</sup> = q√(a<sup>p</sup>)</p>

      <h3>5. Algebraïsche breuken</h3>
      <p>Een algebraïsche breuk bevat een variabele in teller en/of noemer. De noemer mag nooit nul zijn.</p>
      <p class="formula">(6x<sup>2</sup>)/(3x) = 2x, &nbsp; x ≠ 0</p>
      <p>Factoriseer eerst wanneer dat nodig is:</p>
      <p class="formula">(x<sup>2</sup> - 9)/(x - 3) = ((x - 3)(x + 3))/(x - 3) = x + 3, &nbsp; x ≠ 3</p>

      <div class="callout"><strong>Belangrijk:</strong> je mag factoren schrappen, maar geen losse termen. De beperking uit de oorspronkelijke noemer blijft altijd gelden.</div>
    `
  },

  {
    id: "2.7",
    title: "Kwadratische vergelijkingen",
    goal: "Wat gebeurt er wanneer x kwadraad verschijnt?",
    theory: /* html */`
      <h2>Kwadratische vergelijkingen</h2>
      <p><strong>Doel:</strong> je leert vergelijkingen van de tweede graad herkennen, oplossen en interpreteren.</p>

      <h3>1. Wat is kwadratisch?</h3>
      <p>Een kwadratische vergelijking kan worden geschreven als:</p>
      <p class="formula">ax<sup>2</sup> + bx + c = 0, &nbsp; a ≠ 0</p>
      <p>De hoogste macht van x is dus 2.</p>

      <h3>2. Ontbinden in factoren</h3>
      <p>Sommige vergelijkingen kunnen gemakkelijk worden gefactoriseerd.</p>
      <p class="formula">x<sup>2</sup> - 5x + 6 = 0</p>
      <p>Omdat 2 · 3 = 6 en 2 + 3 = 5:</p>
      <p class="formula">(x - 2)(x - 3) = 0</p>
      <p>Een product is nul als minstens één factor nul is:</p>
      <p class="formula">x = 2 &nbsp; of &nbsp; x = 3</p>

      <h3>3. De abc-formule</h3>
      <p>Als factoriseren niet eenvoudig is, gebruiken we de discriminant:</p>
      <p class="formula">D = b<sup>2</sup> - 4ac</p>
      <p>De oplossingen zijn:</p>
      <p class="formula">x = (-b ± √D)/(2a)</p>

      <h3>4. Aantal reële oplossingen</h3>
      <ul>
        <li><strong>D &gt; 0:</strong> twee verschillende reële oplossingen.</li>
        <li><strong>D = 0:</strong> één reële oplossing, een dubbele wortel.</li>
        <li><strong>D &lt; 0:</strong> geen reële oplossingen.</li>
      </ul>
      <p>Dit verklaart waarom een parabool een grafiek kan hebben die de x-as twee keer, één keer of helemaal niet snijdt.</p>

      <h3>5. Kwadraatafsplitsing</h3>
      <p>Een tweede methode is het herschrijven tot een volkomen kwadraat. Bijvoorbeeld:</p>
      <p class="formula">x<sup>2</sup> + 6x + 5 = 0</p>
      <p>wordt:</p>
      <p class="formula">(x + 3)<sup>2</sup> = 4</p>
      <p>en dus x + 3 = ±2.</p>

      <div class="callout"><strong>Verbinding met functies:</strong> een kwadratische vergelijking zoekt precies de x-waarden waarvoor de bijbehorende kwadratische functie nul is.</div>
    `
  },

  {
    id: "2.8",
    title: "Coördinaten & analytische meetkunde",
    goal: "Hoe vertalen we ruimte naar getallen?",
    theory: /* html */`
      <h2>Coördinaten &amp; analytische meetkunde</h2>
      <p><strong>Doel:</strong> je leert meetkundige objecten beschrijven met getallen en vergelijkingen.</p>

      <h3>1. Het cartesische vlak</h3>
      <p>Een cartesisch coördinatenstelsel bestaat uit twee loodrechte assen: de horizontale <strong>x-as</strong> en verticale <strong>y-as</strong>. Hun snijpunt is de oorsprong <span class="formula">(0,0)</span>.</p>
      <p>Een punt wordt beschreven als <span class="formula">(x,y)</span>. Eerst lees je de horizontale coördinaat, daarna de verticale.</p>

      <h3>2. Afstand tussen twee punten</h3>
      <p>Voor A(x₁,y₁) en B(x₂,y₂) geldt:</p>
      <p class="formula">AB = √((x₂ - x₁)<sup>2</sup> + (y₂ - y₁)<sup>2</sup>)</p>
      <p>Deze formule volgt rechtstreeks uit de stelling van Pythagoras.</p>

      <h3>3. Midden van een lijnstuk</h3>
      <p>Het midden M van A(x₁,y₁) en B(x₂,y₂) heeft coördinaten:</p>
      <p class="formula">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>

      <h3>4. Richtingscoëfficiënt</h3>
      <p>Voor twee punten met verschillende x-coördinaten is de helling:</p>
      <p class="formula">m = (y₂ - y₁)/(x₂ - x₁)</p>
      <p>Een positieve m betekent dat de rechte stijgt wanneer x toeneemt; een negatieve m betekent dat ze daalt.</p>

      <h3>5. Vergelijking van een rechte</h3>
      <p>Een niet-verticale rechte kan worden geschreven als:</p>
      <p class="formula">y = mx + b</p>
      <p>Hier is m de richtingscoëfficiënt en b het snijpunt met de y-as.</p>
      <p>Met één punt en de helling kunnen we b bepalen en zo de volledige rechte opstellen.</p>

      <h3>6. Analytische meetkunde</h3>
      <p>Het bijzondere van analytische meetkunde is dat meetkundige uitspraken algebraïsch kunnen worden onderzocht. Afstanden, snijpunten, evenwijdigheid en loodrechte stand krijgen zo een rekenkundige vorm.</p>

      <div class="callout"><strong>De kern:</strong> meetkunde geeft ons vormen; coördinaten geven die vormen getallen; algebra geeft ons de vergelijkingen waarmee we ze kunnen onderzoeken.</div>
    `
  },

  {
    id: "2.9",
    title: "Euclidische meetkunde",
    goal: "Welke wetten beheersen vormen en hoeken?",
    theory: /* html */`
      <h2>Euclidische meetkunde</h2>
      <p><strong>Doel:</strong> je leert de basisbegrippen en stellingen waarmee klassieke vlakke meetkunde wordt opgebouwd.</p>

      <h3>1. Basisbegrippen</h3>
      <p>De klassieke meetkunde werkt met punten, rechten, lijnstukken, hoeken en figuren. Een rechte heeft geen eindpunten; een lijnstuk heeft twee eindpunten.</p>
      <p>Een hoek ontstaat door twee halfrechten met hetzelfde beginpunt. Hoeken worden gemeten in graden of radialen; graden komen hier eerst aan bod.</p>

      <h3>2. Driehoeken</h3>
      <p>De som van de binnenhoeken van elke vlakke driehoek is:</p>
      <p class="formula">α + β + γ = 180°</p>
      <p>Een gelijkzijdige driehoek heeft drie gelijke zijden en drie hoeken van 60°. In een gelijkbenige driehoek zijn de basishoeken gelijk.</p>

      <h3>3. Vierhoeken</h3>
      <p>De som van de binnenhoeken van een vierhoek is 360°. Een rechthoek heeft vier rechte hoeken. Een vierkant is zowel een rechthoek als een ruit: alle zijden zijn gelijk en alle hoeken zijn recht.</p>

      <h3>4. Parallelle rechten</h3>
      <p>Wanneer een snijlijn twee evenwijdige rechten kruist, ontstaan gelijke overeenkomstige hoeken en gelijke verwisselende binnenhoeken. Deze eigenschappen maken het mogelijk onbekende hoeken te berekenen.</p>

      <h3>5. Congruentie</h3>
      <p>Twee figuren zijn <strong>congruent</strong> als ze exact dezelfde vorm en afmetingen hebben. Bij driehoeken bestaan verschillende congruentiecriteria, zoals zijde-zijde-zijde (ZZZ) en zijde-hoek-zijde (ZHZ).</p>

      <h3>6. Pythagoras</h3>
      <p>In een rechthoekige driehoek met rechthoekszijden a en b en schuine zijde c geldt:</p>
      <p class="formula">a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
      <p>De stelling geeft een directe verbinding tussen meetkunde en algebra.</p>

      <div class="callout"><strong>Euclidische meetkunde</strong> bouwt complexe resultaten op uit eenvoudige definities, eigenschappen en logisch afgeleide stellingen.</div>
    `
  },

  {
    id: "2.10",
    title: "Gelijkvormigheid & schaal",
    goal: "Wanneer hebben verschillende figuren dezelfde structuur?",
    theory: /* html */`
      <h2>Gelijkvormigheid &amp; schaal</h2>
      <p><strong>Doel:</strong> je leert wanneer figuren dezelfde vorm hebben en hoe lengtes, oppervlakken en volumes met een schaalfactor veranderen.</p>

      <h3>1. Wat is gelijkvormigheid?</h3>
      <p>Twee figuren zijn <strong>gelijkvormig</strong> als hun overeenkomstige hoeken gelijk zijn en hun overeenkomstige zijden in dezelfde verhouding staan.</p>
      <p>De figuren kunnen dus een verschillende grootte hebben, maar behouden dezelfde vorm.</p>

      <h3>2. Schaalfactor</h3>
      <p>Als elke lengte met dezelfde factor k wordt vermenigvuldigd, is k de <strong>schaalfactor</strong>.</p>
      <p class="formula">nieuwe lengte = k · oorspronkelijke lengte</p>
      <p>Bij k = 2 worden alle lengtes tweemaal zo groot.</p>

      <h3>3. Oppervlakte en volume</h3>
      <p>Lengtes schalen met k, maar oppervlakten met k²:</p>
      <p class="formula">A<sub>nieuw</sub> = k<sup>2</sup>A<sub>oud</sub></p>
      <p>Volumes schalen met k³:</p>
      <p class="formula">V<sub>nieuw</sub> = k<sup>3</sup>V<sub>oud</sub></p>
      <p>Een verdubbeling van alle lengtes betekent dus viermaal de oppervlakte en achtmaal het volume.</p>

      <h3>4. Gelijkvormige driehoeken</h3>
      <p>Bij gelijkvormige driehoeken zijn overeenkomstige zijden evenredig. Daardoor kunnen onbekende lengtes met een verhouding worden berekend.</p>
      <p class="formula">a₁/a₂ = b₁/b₂ = c₁/c₂</p>

      <h3>5. Schaal in kaarten en modellen</h3>
      <p>Een schaal 1 : 100 betekent dat één eenheid op de tekening overeenkomt met 100 dezelfde eenheden in werkelijkheid. Kies eerst dezelfde eenheid voordat je de verhouding toepast.</p>

      <div class="callout"><strong>Onthoud:</strong> lengtes → k, oppervlakten → k², volumes → k³. Dat onderscheid wordt belangrijk zodra we van één naar twee of drie dimensies gaan.</div>
    `
  },

  {
    id: "2.11",
    title: "Functies als relaties",
    goal: "Hoe beschrijven we afhankelijkheid?",
    theory: /* html */`
      <h2>Functies als relaties</h2>
      <p><strong>Doel:</strong> je leert het begrip functie gebruiken om een verband tussen invoer en uitvoer te beschrijven.</p>

      <h3>1. Relatie en functie</h3>
      <p>Een <strong>relatie</strong> koppelt elementen uit een verzameling aan elementen uit een andere verzameling. Een <strong>functie</strong> is een relatie waarbij elke toegelaten invoer precies één uitvoer heeft.</p>
      <p>We schrijven bijvoorbeeld:</p>
      <p class="formula">f(x) = 2x + 3</p>
      <p>De functie f neemt x als invoer en geeft 2x + 3 als uitvoer.</p>

      <h3>2. Domein en bereik</h3>
      <p>Het <strong>domein</strong> is de verzameling toegelaten invoerwaarden. Het <strong>bereik</strong> is de verzameling waarden die de functie daadwerkelijk als uitvoer kan produceren.</p>
      <p>Bij <span class="formula">f(x)=1/x</span> is x = 0 niet toegelaten. Het domein bestaat dus uit alle reële getallen behalve 0.</p>

      <h3>3. Tabellen, grafieken en voorschriften</h3>
      <p>Eenzelfde functie kan op verschillende manieren worden voorgesteld:</p>
      <ul>
        <li>met een formule;</li>
        <li>met een tabel van waarden;</li>
        <li>met een grafiek;</li>
        <li>met een beschrijving in woorden.</li>
      </ul>
      <p>Een grafiek toont welke uitvoer bij welke invoer hoort.</p>

      <h3>4. Functiewaarden</h3>
      <p>Voor <span class="formula">f(x)=2x+3</span> is:</p>
      <p class="formula">f(4)=2·4+3=11</p>
      <p>De notatie f(4) betekent dus de uitvoer die hoort bij invoer 4.</p>

      <h3>5. Één invoer, één uitvoer</h3>
      <p>Een verticale lijn kan een grafiek op hoogstens één punt snijden als de grafiek een functie van x voorstelt. Dit is de zogenaamde verticale-lijntest.</p>

      <div class="callout"><strong>Functie-denken:</strong> kijk niet alleen naar de formule. Vraag altijd: wat is de invoer, wat is de uitvoer, welke waarden zijn toegelaten en wat betekent het verband in de context?</div>
    `
  },

  {
    id: "2.12",
    title: "Lineaire & kwadratische functies",
    goal: "Hoe zien algebraïsche relaties eruit?",
    theory: /* html */`
      <h2>Lineaire &amp; kwadratische functies</h2>
      <p><strong>Doel:</strong> je leert de eigenschappen van rechten en parabolen verbinden met hun algebraïsche voorschriften.</p>

      <h3>1. Lineaire functies</h3>
      <p>Een lineaire functie heeft de vorm:</p>
      <p class="formula">f(x) = ax + b</p>
      <p>De grafiek is een rechte. a is de helling en b het snijpunt met de y-as.</p>
      <p>Bij <span class="formula">f(x)=3x-2</span> stijgt de grafiek 3 eenheden in y wanneer x één eenheid toeneemt.</p>

      <h3>2. Nulpunten van een rechte</h3>
      <p>Een nulpunt voldoet aan <span class="formula">f(x)=0</span>. Voor <span class="formula">ax+b=0</span> vinden we:</p>
      <p class="formula">x = -b/a, &nbsp; a ≠ 0</p>

      <h3>3. Kwadratische functies</h3>
      <p>Een kwadratische functie heeft de vorm:</p>
      <p class="formula">f(x)=ax<sup>2</sup>+bx+c, &nbsp; a ≠ 0</p>
      <p>De grafiek is een <strong>parabool</strong>. Voor a &gt; 0 opent de parabool naar boven; voor a &lt; 0 naar beneden.</p>

      <h3>4. Top en symmetrieas</h3>
      <p>De symmetrieas van de parabool ligt bij:</p>
      <p class="formula">x = -b/(2a)</p>
      <p>De bijbehorende y-waarde geeft de top. Deze eigenschap verbindt de grafische vorm met de coëfficiënten van de formule.</p>

      <h3>5. Nulpunten en discriminant</h3>
      <p>De nulpunten van een kwadratische functie zijn de oplossingen van de bijbehorende kwadratische vergelijking. De discriminant bepaalt of er twee, één of geen reële nulpunten zijn.</p>

      <h3>6. Verschil tussen lineair en kwadratisch</h3>
      <p>Bij een lineaire functie is de verandering per gelijke stap in x constant. Bij een kwadratische functie verandert de helling zelf. Daarom is de grafiek niet recht maar gekromd.</p>

      <div class="callout"><strong>Belangrijke verbinding:</strong> algebraïsche vorm ↔ grafische vorm. De coëfficiënten vertellen hoe de grafiek eruitziet en de grafiek helpt om de algebra te interpreteren.</div>
    `
  },

  {
    id: "2.13",
    title: "Exponentiële & logaritmische functies",
    goal: "Hoe beschrijven we groei en inverse groei?",
    theory: /* html */`
      <h2>Exponentiële &amp; logaritmische functies</h2>
      <p><strong>Doel:</strong> je leert groei en verval met exponenten beschrijven en begrijpt waarom logaritmen de inverse bewerking van exponentiëren vormen.</p>

      <h3>1. Exponentiële groei</h3>
      <p>Een exponentiële functie heeft bijvoorbeeld de vorm:</p>
      <p class="formula">f(x)=a·b<sup>x</sup></p>
      <p>waarbij a de beginwaarde is en b de groeifactor.</p>
      <p>Als b &gt; 1 is er groei; als 0 &lt; b &lt; 1 is er verval.</p>

      <h3>2. Groeifactor</h3>
      <p>Een stijging van 5% per periode betekent een groeifactor van 1,05:</p>
      <p class="formula">N(t)=N₀·1,05<sup>t</sup></p>
      <p>Een daling van 5% gebruikt factor 0,95.</p>

      <h3>3. Exponenten omkeren</h3>
      <p>Als:</p>
      <p class="formula">b<sup>x</sup>=y</p>
      <p>en b &gt; 0, b ≠ 1, dan is x de logaritme van y met basis b:</p>
      <p class="formula">x = log<sub>b</sub>(y)</p>
      <p>Dus:</p>
      <p class="formula">log<sub>b</sub>(y)=x &nbsp; ⇔ &nbsp; b<sup>x</sup>=y</p>

      <h3>4. Belangrijke logaritmeregels</h3>
      <p>Voor positieve waarden gelden:</p>
      <p class="formula">log<sub>b</sub>(xy)=log<sub>b</sub>(x)+log<sub>b</sub>(y)</p>
      <p class="formula">log<sub>b</sub>(x/y)=log<sub>b</sub>(x)-log<sub>b</sub>(y)</p>
      <p class="formula">log<sub>b</sub>(x<sup>r</sup>)=r·log<sub>b</sub>(x)</p>

      <h3>5. Natuurlijke logaritme</h3>
      <p>De logaritme met basis e heet de <strong>natuurlijke logaritme</strong> en wordt geschreven als ln(x). Het getal e is een fundamentele constante die later een centrale rol speelt in analyse.</p>

      <h3>6. Exponentiële vergelijking</h3>
      <p>Bij <span class="formula">2<sup>x</sup>=10</span> kunnen we logaritmen gebruiken:</p>
      <p class="formula">x=log<sub>2</sub>(10)=ln(10)/ln(2)</p>
      <p>De logaritme verandert een onbekende exponent in een gewone algebraïsche grootheid.</p>

      <div class="callout"><strong>Kernidee:</strong> exponentiëren maakt van een exponent een waarde; logaritmeren haalt de exponent weer terug. Ze zijn inverse bewerkingen.</div>
    `
  },

  {
    id: "2.14",
    title: "Trigonometrie",
    goal: "Hoe verbinden we hoeken, lengtes en periodieke beweging?",
    theory: /* html */`
      <h2>Trigonometrie</h2>
      <p><strong>Doel:</strong> je leert hoeken verbinden met verhoudingen van zijden en ontdekt hoe sinus, cosinus en tangens leiden naar de beschrijving van periodieke verschijnselen.</p>

      <h3>1. Rechthoekige driehoeken</h3>
      <p>In een rechthoekige driehoek noemen we de zijde tegenover een gekozen hoek de <strong>overstaande zijde</strong>, de zijde die aan de hoek grenst de <strong>aanliggende zijde</strong> en de langste zijde de <strong>schuine zijde</strong>.</p>

      <h3>2. Sinus, cosinus en tangens</h3>
      <p>Voor een scherpe hoek θ geldt:</p>
      <p class="formula">sin(θ)=overstaande/schuine</p>
      <p class="formula">cos(θ)=aanliggende/schuine</p>
      <p class="formula">tan(θ)=overstaande/aanliggende</p>
      <p>Deze verhoudingen hangen alleen van de hoek af, niet van de grootte van de driehoek.</p>

      <h3>3. Hoeken berekenen</h3>
      <p>Als een verhouding bekend is, kunnen inverse functies de hoek geven:</p>
      <p class="formula">θ = sin<sup>-1</sup>(verhouding)</p>
      <p>Hier betekent sin<sup>-1</sup> de inverse functie, niet 1/sin.</p>

      <h3>4. De eenheidscirkel</h3>
      <p>De trigonometrische functies kunnen worden uitgebreid van scherpe hoeken naar alle reële hoeken via de <strong>eenheidscirkel</strong>, de cirkel met straal 1 en middelpunt (0,0).</p>
      <p>Voor een punt op de eenheidscirkel met hoek θ zijn de coördinaten:</p>
      <p class="formula">(cos θ, sin θ)</p>
      <p>Daardoor worden sinus en cosinus rechtstreeks gekoppeld aan coördinaten.</p>

      <h3>5. Periodiciteit</h3>
      <p>Sinus en cosinus zijn periodiek:</p>
      <p class="formula">sin(θ + 2π)=sin(θ)</p>
      <p class="formula">cos(θ + 2π)=cos(θ)</p>
      <p>Dit maakt ze geschikt om verschijnselen zoals trillingen en golven te modelleren.</p>

      <h3>6. Verbinding met Pythagoras</h3>
      <p>Op de eenheidscirkel geldt:</p>
      <p class="formula">x<sup>2</sup> + y<sup>2</sup> = 1</p>
      <p>Omdat x = cos θ en y = sin θ volgt de fundamentele identiteit:</p>
      <p class="formula">sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1</p>

      <div class="callout"><strong>De grote stap:</strong> trigonometrie begint met driehoeksverhoudingen, maar groeit uit tot een algemene taal voor hoeken, rotaties, cirkels en periodieke beweging.</div>
    `
  }
]
