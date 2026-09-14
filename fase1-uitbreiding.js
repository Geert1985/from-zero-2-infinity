/* Herstructurering Fase 1 — 1.3 t/m 1.13.
   1.1 en 1.2 blijven in fase1.js. De oude 1.3–1.5 worden vervangen.
   Oefeningen/toetsen worden bewust niet opnieuw ontworpen in deze stap.
*/
(function () {
  if (!Array.isArray(MILESTONES_1)) return;

  const keep = MILESTONES_1.filter((m) => !/^1\.(3|4|5)$/.test(String(m.id)));

  const newMilestones = [
    {
      id: "1.3",
      title: "Negatieve en gehele getallen",
      goal: "Begrijpen waarom negatieve getallen nodig zijn en leren rekenen met ℤ.",
      theory: /* html */`
        <h2>Negatieve en gehele getallen</h2>
        <p><strong>Doel:</strong></p>

        <ul>
          <li>kennismaken met verzamelingen;</li>
          <li>ontdekken waarom natuurlijke getallen niet altijd voldoende zijn;</li>
          <li>leren rekenen met negatieve en positieve gehele getallen.</li>
        </ul>
        
        <h3>1. Verzameling en element</h3>
        <p>Een <strong>verzameling</strong> is een groep objecten die we als één geheel bekijken.</p>
        <p class="formula"> { 0, 1, 2, 3, 4 } </p>
        <p>De getallen in de verzameling noemen we <strong>elementen</strong>. Het symbool <strong>∈</strong> betekent “is een element van” en <strong>∉</strong> betekent “is geen element van”.</p>
        <p>In de verzameling {0, 1, 2, 3, 4} zijn 0, 1, 2, 3 en 4 dus elementen.</p>
        <div class="callout insight">
        <strong>Belangrijk inzicht</strong>
        <p>Een verzameling is een manier om een groep getallen of andere objecten
        als één geheel te bekijken.</p>
      </div>
    <p>In de wiskunde gebruiken we een speciaal symbool om aan te geven dat iets
    een element van een verzameling is:</p>

    <p class="formula">3 ∈ {0, 1, 2, 3, 4}</p>
    <p>We kunnen dus lezen:</p>

    <p><strong>3 is een element van de verzameling {0, 1, 2, 3, 4}.</strong></p>

    <p>Voor een getal dat niet in de verzameling zit, gebruiken we
    <strong>∉</strong>.</p>

    <p class="formula">7 ∉ {0, 1, 2, 3, 4}</p>

    <p>Dit betekent:</p>

    <p><strong>7 is geen element van de verzameling {0, 1, 2, 3, 4}.</strong></p>


        <h3>2. De natuurlijke getallen</h3>
        <p>De verzameling van de natuurlijke getallen krijgt een naam:
    <strong>ℕ</strong>.</p>

    <p>We gebruiken ℕ voor alle natuurlijke getallen:</p>

    <p class="formula">ℕ = {0, 1, 2, 3, 4, 5, ...}</p>

    <p>De puntjes betekenen dat de reeks verdergaat.</p>

    <p>Zo kunnen we bijvoorbeeld schrijven:</p>

    <p class="formula">5 ∈ ℕ</p>

    <p>Maar:</p>

    <p class="formula">−3 ∉ ℕ</p>

    <p>Een negatief getal behoort dus niet tot de verzameling van de natuurlijke getallen.</p>



        <h3>3. De getallenlijn wordt uitgebreid</h3>
        <p>Tot nu toe konden we met natuurlijke getallen heel wat problemen oplossen.
      Maar er ontstaat een probleem wanneer we een kleiner getal van een groter
      getal aftrekken.</p>      
      
      <p>Bijvoorbeeld:</p>

      <p class="formula">3 − 5 = ?</p>

      <p>Er bestaat geen natuurlijk getal dat het antwoord is.</p>

      <p>We kunnen vanaf 3 drie stappen teruggaan:</p>

      <p class="formula">3 − 3 = 0</p>

      <p>Maar daarna moeten we nog twee stappen verder terug.</p>

      <p>Daarom hebben we nieuwe getallen nodig die links van nul op de getallenlijn
      staan.</p>

      <div data-widget="ints"></div>

      <div class="callout insight">
        <strong>Waarom breiden we het getallensysteem uit?</strong>
        <p>Niet omdat de bestaande getallen "fout" zijn, maar omdat ze niet meer
        voldoende zijn om alle problemen op te lossen.</p>
      </div>


        <h3>4. De gehele getallen</h3>
        <p>We voegen de negatieve gehele getallen toe aan de verzameling van de natuurlijke getallen ℕ:</p>

    <p class="formula">..., −3, −2, −1, 0, 1, 2, 3, ...</p>

    <p>Hierdoor krijgen we een nieuwe, grotere verzameling.</p>
    <p>Deze nieuwe verzameling noemen we de verzameling van de <strong>gehele getallen</strong>. We gebruiken hiervoor het symbool
    <strong>ℤ</strong>.</p>

    <p class="formula">ℤ = {..., −3, −2, −1, 0, 1, 2, 3, ...}</p>

    <p>Nu kunnen we bijvoorbeeld schrijven:</p>

    <p class="formula">−2 ∈ ℤ</p>

    <p>En de eerdere berekening krijgt een oplossing:</p>

    <p class="formula">3 − 5 = −2</p>

    <p>De gehele getallen lossen dus een probleem op dat met alleen natuurlijke
    getallen niet opgelost kon worden.</p>



        <h3>5. Deelverzamelingen</h3>
        <p>Elk natuurlijk getal uit de verzameling ℕ is dus ook een element van de verzameling ℤ. Daarom is ℕ een <strong>deelverzameling</strong> van ℤ.</p>
        <p class="formula">ℕ ⊂ ℤ</p>
        <p>Het symbool <strong>⊂</strong> betekent
    <strong>"is een deelverzameling van"</strong>.</p>

    <p>We kunnen daarom schrijven:</p>

    <p class="formula">ℕ ⊂ ℤ</p>

    <p>Dit lezen we als:</p>

    <p><strong>De natuurlijke getallen zijn een deelverzameling van de gehele
    getallen.</strong></p>

    <div class="callout">
      <strong>Let op het verschil</strong>
      <p>Het symbool <strong>∈</strong> gebruik je wanneer je een
      <strong>element (getal) met een verzameling</strong> vergelijkt.</p>

      <p class="formula">3 ∈ ℕ</p>

      <p>Het symbool <strong>⊂</strong> gebruik je wanneer je
      <strong>twee verzamelingen met elkaar</strong> vergelijkt.</p>

      <p class="formula">ℕ ⊂ ℤ</p>
    </div>



        <h3>7. Tegenovergestelde getallen</h3>

<p>Op de getallenlijn heeft elk positief getal een getal op precies dezelfde
afstand van nul aan de andere kant.</p>

<p>Het tegenovergestelde van 5 is −5.</p>

<p>Het tegenovergestelde van −3 is 3.</p>

<p>Het getal 0 is zijn eigen tegenovergestelde.</p>

<p>We kunnen dit voorstellen als:</p>

<p class="formula">5 ↔ −5</p>

<p>en</p>

<p class="formula">3 ↔ −3</p>

<div class="callout insight">
  <strong>Inzicht</strong>
  <p>Tegengestelde getallen liggen even ver van nul, maar aan tegenovergestelde
  kanten van de getallenlijn.</p>
</div>

        <h3>7. Absolute waarde</h3>
        <p>De <strong>absolute waarde</strong> van een getal vertelt hoe ver dat getal
van nul ligt.</p>

<p>De absolute waarde van 5 is 5:</p>

<p class="formula">|5| = 5</p>

<p>De absolute waarde van −5 is ook 5:</p>

<p class="formula">|−5| = 5</p>

<p>De verticale streepjes <strong>| |</strong> betekenen hier:
"de absolute waarde van".</p>

<p>De absolute waarde is dus altijd positief of nul.</p>



        <h3>8. Optellen en aftrekken met gehele getallen</h3>
        <p>De getallenlijn geeft ons een eenvoudige manier om met negatieve getallen
te rekenen.</p>

<p>Bij optellen beweeg je naar rechts als je een positief getal toevoegt en
naar links als je een negatief getal toevoegt.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">3 + (−5) = −2</p>

<p>Je begint bij 3 en beweegt vijf plaatsen naar links.</p>

<p>Aftrekken kunnen we bekijken als het toevoegen van het tegenovergestelde.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">3 − 5 = 3 + (−5) = −2</p>

<div class="callout insight">
  <strong>Belangrijk</strong>
  <p>Aftrekken van een getal komt overeen met optellen van het
  tegenovergestelde.</p>
</div>



<h3>9. Vermenigvuldigen en delen met tekens</h3>
        <p>Ook bij vermenigvuldigen en delen krijgen we regels voor positieve en
negatieve getallen.</p>

<p>Bij vermenigvuldigen geldt:</p>

<ul>
          <li>positief × positief = positief</li>
          <li>positief × negatief = negatief</li>
          <li>negatief × positief = negatief</li>
          <li>negatief × negatief = positief</li>
        </ul>


<p>Bijvoorbeeld:</p>

<p class="formula">2 × 5 = 10</p>
<p class="formula">2 × (-5) = -10</p>
<p class="formula">-2 × 5 = -10</p>
<p class="formula">-2 × -5 = 10</p>

<p><strong>Bij delen gelden dezelfde regels voor de tekens als bij vermenigvuldigen.</strong></p>

<p class="formula">12 ÷ 3 = 4</p>
<p class="formula">12 ÷ (-3) = -4</p>
<p class="formula">(−12) ÷ 3 = −4</p>
<p class="formula">(−12) ÷ (-3) = 4</p>      
`,
      practice: [],
      exam: []
    },
    {
      id: "1.4",
      title: "Breuken en rationale getallen",
      goal: "Breuken begrijpen als getallen en leren rekenen met ℚ.",
      theory: /* html */`
        <h2>Breuken en rationale getallen</h2>
        <p><strong>Doel:</strong></p>

        <ul>
          <li>ontdekken waarom gehele getallen niet genoeg zijn voor elke deling;</li>
          <li>leren breuken voorstellen, vergelijken en bewerken.;</li>
        </ul>

        <h3>1. Waarom hebben we breuken nodig?</h3>
        <p>Bekijk de deling:</p>
        <p class="formula">1 ÷ 2</p>
        <p>Er bestaat geen geheel getal dat precies het antwoord is. We hebben een nieuw soort getal nodig: een <strong>breuk</strong>.</p>
        <div data-widget="fractionVisual"></div>

        <h3>2. Teller en noemer</h3>
        <p>In de breuk 3/5 is 3 de <strong>teller</strong> en 5 de <strong>noemer</strong>.</p>
        <p class="formula">3/5</p>
        <p>De noemer verdeelt het geheel in 5 gelijke delen. De teller zegt hoeveel delen we nemen.</p>

        <h3>3. Gelijkwaardige breuken</h3>
        <p>Verschillende breuken kunnen dezelfde waarde hebben.</p>
        <p class="formula">1/2 = 2/4 = 3/6</p>
        <p>Je vermenigvuldigt teller en noemer met hetzelfde niet-nul getal.</p>

        <h3>4. Breuken vereenvoudigen</h3>
        <p>Een breuk kan ook compacter worden geschreven:</p>
        <p class="formula">4/8 = 1/2</p>
        <p>We delen teller en noemer door dezelfde gemeenschappelijke deler.</p>

        <h3>5. Breuken vergelijken</h3>
        <p>Bij dezelfde noemer vergelijken we de tellers:</p>
        <p class="formula">3/8 &lt; 5/8</p>
        <p>Bij verschillende noemers maken we eerst gelijkwaardige breuken met een gemeenschappelijke noemer.</p>

        <h3>6. Breuken optellen en aftrekken</h3>
        <p>Bij dezelfde noemer blijft de noemer staan:</p>
        <p class="formula">2/7 + 3/7 = 5/7</p>
        <p>Bij verschillende noemers maak je eerst de noemers gelijk.</p>

        <h3>7. Breuken vermenigvuldigen</h3>
        <p>Vermenigvuldig de tellers met elkaar en de noemers met elkaar:</p>
        <p class="formula">2/3 × 4/5 = 8/15</p>

        <h3>8. Breuken delen</h3>
        <p>Delen door een breuk komt neer op vermenigvuldigen met het omgekeerde:</p>
        <p class="formula">2/3 ÷ 4/5 = 2/3 × 5/4</p>

        <h3>9. Rationale getallen</h3>
        <p>Een getal dat als breuk van twee gehele getallen kan worden geschreven, noemen we <strong>rationaal</strong>.</p>
        <p class="formula">ℚ = {a/b | a ∈ ℤ, b ∈ ℤ en b ≠ 0}</p>
        <p>De gehele getallen zitten hierin:</p>
        <p class="formula">ℤ ⊂ ℚ</p>

        <div class="callout insight"><strong>De tweede uitbreiding</strong><p>ℤ kan niet elke deling uitvoeren. Door breuken toe te voegen krijgen we ℚ en kunnen we bijvoorbeeld 1 ÷ 2 exact schrijven.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.5",
      title: "Decimalen en percentages",
      goal: "Breuken herkennen in decimale en procentuele vorm.",
      theory: /* html */`
        <h2>Decimalen en percentages</h2>
        <p><strong>Doel:</strong> begrijpen dat decimalen en percentages andere schrijfwijzen zijn voor getallen die we al kennen.</p>

        <h3>1. Decimalen als breuken</h3>
        <p>Een decimaal getal gebruikt plaatswaarden rechts van de komma.</p>
        <p class="formula">0,5 = 5/10 = 1/2</p>
        <p>Ook 0,50 en 0,500 hebben dezelfde waarde:</p>
        <p class="formula">0,5 = 0,50 = 0,500</p>

        <h3>2. Breuk, decimaal en percentage</h3>
        <p>Dezelfde hoeveelheid kan op verschillende manieren worden geschreven:</p>
        <p class="formula">1/2 = 0,5 = 50%</p>
        <p class="formula">1/4 = 0,25 = 25%</p>

        <h3>3. Percentages</h3>
        <p>Procent betekent <strong>per honderd</strong>.</p>
        <div data-widget="percentageBar"></div>
        <p class="formula">25% = 25/100 = 0,25</p>

        <h3>4. Een percentage van een hoeveelheid</h3>
        <p>Om 25% van 80 te vinden, schrijf je 25% als 0,25:</p>
        <p class="formula">25% van 80 = 0,25 × 80 = 20</p>

        <h3>5. Percentageverandering</h3>
        <p>Een stijging van €100 naar €110 is €10 op een beginwaarde van €100.</p>
        <p class="formula">10/100 = 0,10 = 10%</p>
        <p>De procentuele verandering wordt dus berekend ten opzichte van de <strong>beginwaarde</strong>.</p>

        <h3>6. Omzetten tussen vormen</h3>
        <p>Een breuk naar een decimaal: deel teller door noemer.</p>
        <p>Een decimaal naar een percentage: vermenigvuldig met 100.</p>
        <p class="formula">0,375 = 37,5%</p>

        <div class="callout insight"><strong>Eén getal, meerdere talen</strong><p>Breuk, decimaal en percentage zijn vaak geen nieuwe getallen. Het zijn verschillende manieren om dezelfde verhouding te beschrijven.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.6",
      title: "Verhoudingen en evenredigheid",
      goal: "Hoeveelheden met elkaar vergelijken en evenredige relaties herkennen.",
      theory: /* html */`
        <h2>Verhoudingen en evenredigheid</h2>
        <p><strong>Doel:</strong> leren hoe twee hoeveelheden zich tot elkaar verhouden en hoe je met schaal en evenredigheid rekent.</p>

        <h3>1. Een verhouding</h3>
        <p>Een verhouding vergelijkt twee hoeveelheden.</p>
        <p>Bij 2 rode en 3 blauwe ballen is rood tegenover blauw:</p>
        <p class="formula">2 : 3</p>

        <h3>2. Verhoudingen als breuk</h3>
        <p>De verhouding 2 : 3 kun je ook schrijven als 2/3 wanneer je de verhouding als quotiënt bekijkt.</p>
        <p class="formula">2 : 3 = 2/3</p>

        <h3>3. Gelijkwaardige verhoudingen</h3>
        <p>Net als bij breuken kunnen we beide delen met hetzelfde getal vermenigvuldigen:</p>
        <p class="formula">2 : 3 = 4 : 6 = 10 : 15</p>

        <h3>4. Evenredigheid</h3>
        <p>Als twee grootheden steeds met dezelfde factor veranderen, spreken we van een <strong>recht evenredig</strong> verband.</p>
        <p>Bij €3 per kilogram kost 1 kg €3, 2 kg €6 en 5 kg €15.</p>
        <p class="formula">prijs = 3 × massa</p>

        <h3>5. Schaal</h3>
        <p>Een kaart met schaal 1 : 100 000 betekent dat 1 eenheid op de kaart 100 000 dezelfde eenheden in werkelijkheid voorstelt.</p>
        <p class="formula">1 cm op kaart = 100 000 cm = 1 km</p>

        <div class="callout insight"><strong>Verhoudingen verbinden getallen met de wereld</strong><p>Breuken vergelijken delen van een geheel. Verhoudingen vergelijken hoeveelheden met elkaar. Daardoor worden schaal, recepten, snelheid en prijzen wiskundig beschrijfbaar.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.7",
      title: "Delers en deelbaarheid",
      goal: "Ontdekken welke gehele getallen elkaar precies delen.",
      theory: /* html */`
        <h2>Delers en deelbaarheid</h2>
        <p><strong>Doel:</strong> leren herkennen wanneer een geheel getal precies door een ander geheel getal deelbaar is.</p>

        <h3>1. Delers</h3>
        <p>Een getal <strong>d</strong> is een deler van <strong>n</strong> als n/d een geheel getal is.</p>
        <p class="formula">3 | 12</p>
        <p>Dit lees je als: 3 deelt 12.</p>
        <p>De positieve delers van 12 zijn:</p>
        <p class="formula">1, 2, 3, 4, 6, 12</p>

        <h3>2. Veelvouden</h3>
        <p>De veelvouden van 4 zijn getallen die je krijgt door 4 met een natuurlijk getal te vermenigvuldigen:</p>
        <p class="formula">0, 4, 8, 12, 16, 20, ...</p>

        <h3>3. Even en oneven</h3>
        <p>Een even getal is deelbaar door 2. Een oneven getal niet.</p>
        <p class="formula">even = 2k &nbsp;&nbsp; oneven = 2k + 1</p>

        <h3>4. Deelbaarheidsregels</h3>
        <ul>
          <li>2 → laatste cijfer is even;</li>
          <li>3 → cijfersom is deelbaar door 3;</li>
          <li>4 → laatste twee cijfers zijn deelbaar door 4;</li>
          <li>5 → laatste cijfer is 0 of 5;</li>
          <li>6 → deelbaar door 2 én 3;</li>
          <li>9 → cijfersom is deelbaar door 9;</li>
          <li>10 → laatste cijfer is 0.</li>
        </ul>

        <h3>5. Deelbaarheid als structuur</h3>
        <p>Een getal kan tegelijk door verschillende getallen deelbaar zijn. Dat vormt de basis voor priemfactorisatie, GGD en KGV.</p>
        <div class="callout"><strong>Belangrijk inzicht:</strong> Delen is niet alleen een bewerking. De delers van een getal vertellen iets over de interne structuur ervan.</div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.8",
      title: "Priemgetallen en factorisatie",
      goal: "Priemgetallen ontdekken als bouwstenen van de natuurlijke getallen.",
      theory: /* html */`
        <h2>Priemgetallen en factorisatie</h2>
        <p><strong>Doel:</strong> begrijpen wat priemgetallen zijn en natuurlijke getallen ontbinden in priemfactoren.</p>

        <h3>1. Priemgetallen</h3>
        <p>Een <strong>priemgetal</strong> groter dan 1 heeft precies twee positieve delers: 1 en zichzelf.</p>
        <p class="formula">2, 3, 5, 7, 11, 13, 17, ...</p>
        <p>1 is geen priemgetal: het heeft maar één positieve deler. 2 is het enige even priemgetal.</p>

        <h3>2. Priem of samengesteld?</h3>
        <p>Een samengesteld getal heeft meer dan twee positieve delers. Bijvoorbeeld 12 kan worden geschreven als:</p>
        <p class="formula">12 = 3 × 4 = 2 × 6</p>

        <h3>3. Priemfactorisatie</h3>
        <p>We splitsen een getal verder op tot alleen priemgetallen overblijven.</p>
        <p class="formula">60 = 2 × 30 = 2 × 2 × 15 = 2² × 3 × 5</p>

        <h3>4. De fundamentele hoofdstelling</h3>
        <p>Elk natuurlijk getal groter dan 1 heeft precies één priemfactorisatie, afgezien van de volgorde.</p>
        <div class="callout insight"><strong>Priemgetallen zijn de bouwstenen</strong><p>Zoals materie uit kleinere bouwstenen kan worden samengesteld, kunnen natuurlijke getallen worden opgebouwd uit priemgetallen.</p></div>

        <h3>5. De zeef van Eratosthenes</h3>
        <p>Om priemgetallen te vinden, kun je veelvouden systematisch wegstrepen. Dit eenvoudige algoritme noemen we de <strong>zeef van Eratosthenes</strong>.</p>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.9",
      title: "GGD, KGV en het algoritme van Euclides",
      goal: "Getalstructuur gebruiken om gemeenschappelijke delers en veelvouden te vinden.",
      theory: /* html */`
        <h2>GGD, KGV en Euclides</h2>
        <p><strong>Doel:</strong> GGD en KGV begrijpen en ze efficiënt berekenen.</p>

        <h3>1. Grootste gemene deler</h3>
        <p>De <strong>GGD</strong> is de grootste positieve deler die twee getallen gemeenschappelijk hebben.</p>
        <p class="formula">GGD(24,36) = 12</p>

        <h3>2. Kleinste gemene veelvoud</h3>
        <p>Het <strong>KGV</strong> is het kleinste positieve veelvoud dat beide getallen gemeenschappelijk hebben.</p>
        <p class="formula">KGV(12,18) = 36</p>

        <h3>3. Via priemfactorisatie</h3>
        <p>Bij de GGD neem je de kleinste exponent van elke gemeenschappelijke priemfactor. Bij het KGV neem je de grootste exponent.</p>
        <p class="formula">12 = 2² × 3 &nbsp;&nbsp; 18 = 2 × 3²</p>
        <p class="formula">GGD = 2 × 3 = 6</p>
        <p class="formula">KGV = 2² × 3² = 36</p>

        <h3>4. Het algoritme van Euclides</h3>
        <p>De GGD kan veel efficiënter worden gevonden met herhaald delen:</p>
        <p class="formula">48 = 2 × 18 + 12</p>
        <p class="formula">18 = 1 × 12 + 6</p>
        <p class="formula">12 = 2 × 6 + 0</p>
        <p>De laatste niet-nul rest is 6, dus GGD(48,18) = 6.</p>

        <h3>5. Een belangrijk verband</h3>
        <p>Voor positieve gehele getallen geldt:</p>
        <p class="formula">GGD(a,b) × KGV(a,b) = a × b</p>
        <div class="callout insight"><strong>Een oud idee met een algoritmische toekomst</strong><p>De Euclidische methode laat zien dat wiskundige structuur kan worden omgezet in een efficiënt algoritme.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.10",
      title: "Machten",
      goal: "Herhaalde vermenigvuldiging als één krachtige notatie leren gebruiken.",
      theory: /* html */`
        <h2>Machten</h2>
        <p><strong>Doel:</strong> machten begrijpen, noteren en gebruiken met hun basisregels.</p>

        <h3>1. Herhaalde vermenigvuldiging</h3>
        <p>Vier keer hetzelfde getal vermenigvuldigen schrijven we korter:</p>
        <p class="formula">a⁴ = a × a × a × a</p>
        <p>a is het <strong>grondtal</strong>, 4 is de <strong>exponent</strong>.</p>

        <h3>2. Machten van 10</h3>
        <p class="formula">10² = 100 &nbsp;&nbsp; 10³ = 1 000 &nbsp;&nbsp; 10⁶ = 1 000 000</p>
        <p>Een exponent vertelt hoeveel keer je het grondtal als factor gebruikt.</p>

        <h3>3. Exponent 0 en negatieve exponenten</h3>
        <p>Voor a ≠ 0 geldt:</p>
        <p class="formula">a⁰ = 1</p>
        <p>Negatieve exponenten geven het omgekeerde:</p>
        <p class="formula">a⁻ⁿ = 1/aⁿ</p>
        <p>Bijvoorbeeld:</p>
        <p class="formula">2⁻³ = 1/8</p>

        <h3>4. Machtswetten</h3>
        <p class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ</p>
        <p class="formula">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</p>
        <p class="formula">(aᵐ)ⁿ = aᵐⁿ</p>
        <p class="formula">(ab)ⁿ = aⁿbⁿ</p>

        <div class="callout insight"><strong>Machten geven structuur aan herhaling</strong><p>Een lange vermenigvuldiging wordt één compact object. Dat maakt patronen en rekenwetten zichtbaar.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.11",
      title: "Wortels",
      goal: "Machtsverheffen omkeren en wortels leren begrijpen.",
      theory: /* html */`
        <h2>Wortels</h2>
        <p><strong>Doel:</strong> wortels begrijpen als omgekeerde bewerking van machtsverheffen en leren schatten en vereenvoudigen.</p>

        <h3>1. De vierkantswortel</h3>
        <p>√n is het niet-negatieve getal waarvan het kwadraat n is.</p>
        <p class="formula">√81 = 9 &nbsp; omdat &nbsp; 9² = 81</p>
        <p>Let op: x² = 9 heeft twee oplossingen, x = 3 en x = −3. De notatie √9 verwijst alleen naar de hoofdwortel 3.</p>

        <h3>2. Kubuswortels</h3>
        <p class="formula">∛27 = 3 &nbsp;&nbsp; ∛(−8) = −2</p>

        <h3>3. Wortels vereenvoudigen</h3>
        <p class="formula">√72 = √(36 × 2) = 6√2</p>
        <p>Een perfect kwadraat kan buiten de wortel worden gehaald.</p>

        <h3>4. Wortelregels</h3>
        <p class="formula">√(ab) = √a × √b</p>
        <p class="formula">√(a/b) = √a/√b</p>
        <p>Maar een wortel mag niet over een optelling worden verdeeld:</p>
        <p class="formula">√(a + b) ≠ √a + √b</p>

        <h3>5. Wortels schatten</h3>
        <p>Omdat:</p>
        <p class="formula">25 &lt; 30 &lt; 36</p>
        <p>volgt:</p>
        <p class="formula">5 &lt; √30 &lt; 6</p>

        <div class="callout insight"><strong>Wortels openen een nieuwe wereld</strong><p>Niet iedere wortel is een geheel getal. Dat brengt ons naar getallen die niet als gewone breuk kunnen worden geschreven.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.12",
      title: "Irrationale en reële getallen",
      goal: "Ontdekken waarom ℚ niet de volledige getallenlijn vormt.",
      theory: /* html */`
        <h2>Irrationale en reële getallen</h2>
        <p><strong>Doel:</strong> begrijpen wat irrationale getallen zijn en waarom we de reële getallen ℝ nodig hebben.</p>

        <h3>1. Rationale getallen</h3>
        <p>Een rationaal getal kan als breuk van gehele getallen worden geschreven.</p>
        <p class="formula">2/7 ∈ ℚ</p>
        <p>Ook gehele getallen zijn rationaal, want bijvoorbeeld 5 = 5/1.</p>

        <h3>2. √2 past niet in ℚ</h3>
        <p>√2 is geen breuk van twee gehele getallen. De decimale ontwikkeling stopt niet en herhaalt zich niet periodiek.</p>
        <p class="formula">√2 ≈ 1,41421356...</p>
        <p>Zo'n getal noemen we <strong>irrationaal</strong>.</p>

        <h3>3. De reële getallen</h3>
        <p>De rationale en irrationale getallen samen vormen de <strong>reële getallen</strong> ℝ.</p>
        <p class="formula">ℝ = rationale getallen ∪ irrationale getallen</p>
        <p>De grote keten is:</p>
        <p class="formula">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</p>

        <h3>4. De getallenlijn wordt volledig</h3>
        <p>De reële getallen vullen de getallenlijn: tussen twee verschillende reële getallen zitten opnieuw reële getallen.</p>
        <div class="callout insight"><strong>De derde uitbreiding</strong><p>ℚ was groot genoeg voor breuken, maar niet voor √2. Door irrationale getallen toe te voegen krijgen we ℝ en kunnen we de volledige getallenlijn beschrijven.</p></div>
      `,
      practice: [],
      exam: []
    },
    {
      id: "1.13",
      title: "Afronden en wetenschappelijke notatie",
      goal: "Werken met benaderingen en zeer grote of kleine getallen.",
      theory: /* html */`
        <h2>Afronden en wetenschappelijke notatie</h2>
        <p><strong>Doel:</strong> onderscheid maken tussen exacte waarden en benaderingen en grote of kleine getallen compact schrijven.</p>

        <h3>1. Afronden</h3>
        <p>Bij afronden kijk je naar het eerste cijfer dat je weglaat. 0–4 laat je staan; 5–9 verhoogt het laatste behouden cijfer met 1.</p>
        <p class="formula">3,14159 ≈ 3,14</p>
        <p>Het teken <strong>≈</strong> betekent “ongeveer gelijk aan”.</p>

        <h3>2. Schatten</h3>
        <p>Bij een schatting vervang je getallen door handige benaderingen.</p>
        <p class="formula">19 × 21 ≈ 20 × 20 = 400</p>
        <p>Een schatting is nuttig om te controleren of een exact antwoord redelijk is.</p>

        <h3>3. Wetenschappelijke notatie</h3>
        <p>Zeer grote en zeer kleine getallen kunnen we schrijven als:</p>
        <p class="formula">a × 10ⁿ &nbsp; met &nbsp; 1 ≤ |a| &lt; 10</p>
        <p>Bijvoorbeeld:</p>
        <p class="formula">63 000 = 6,3 × 10⁴</p>
        <p class="formula">0,00045 = 4,5 × 10⁻⁴</p>

        <h3>4. Van exacte waarde naar model</h3>
        <p>In wetenschap en techniek zijn metingen vaak benaderingen. Wiskunde helpt ons het verschil te bewaren tussen een exacte waarde en een bruikbare benadering.</p>

        <div class="callout insight"><strong>Fase 1 eindigt met een belangrijk idee</strong><p>Getallen kunnen exact zijn, maar we kunnen ze ook bewust benaderen. Dezelfde macht van 10 die ons positiestelsel organiseert, helpt ons nu om het heel grote en heel kleine overzichtelijk te schrijven.</p></div>

        <h3>De volledige getallenketen</h3>
        <p class="formula">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</p>
      `,
      practice: [],
      exam: []
    }
  ];

  MILESTONES_1.length = 0;
  MILESTONES_1.push.apply(MILESTONES_1, keep.concat(newMilestones));
})();
