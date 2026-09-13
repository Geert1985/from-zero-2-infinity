/* Lesstof Fase 1 — Rekenkunde. Breid theory/practice/exam hier uit. */
const MILESTONES_1 = [
  {
    id: "1.1",
    title: "Getalbegrip en positiestelsel",
    goal: "Van tellen naar getallen.",
    theory: `
      <h2>Milestone 1.1 — Getalbegrip en het positiestelsel</h2>
      <p><strong>Doel:</strong> 
      <ul>
        <li>begrijpen wat het verschil is tussen een cijfer en een getal</li>
        <li>hoe we hoeveelheden met getallen schrijven</li>
        <li>hoe het tientallig positiestelsel werkt</li>
        <li>hoe natuurlijke getallen op een getallenlijn geordend en vergeleken worden</li>
      </ul>
      </p>

      <h3>1. Het verschil tussen een getal en een cijfer</h3>
      <p>Stel dat er drie appels op tafel liggen. We kunnen ook drie stenen of drie stoelen hebben.</p>
      <p>De voorwerpen zijn verschillend, maar de <strong>hoeveelheid is dezelfde: drie</strong></p>
      <p>Het <strong>getal 3</strong> geeft die hoeveelheid aan</p>
      <p>Het <strong>Een cijfer is een teken waarmee we een getal schrijven.</strong></p>
      <div>
        <p>bijvoorbeeld:</p>
        <ul>
          <li>3 appels => het <strong>getal 3</strong> dat bestaat uit het <strong>cijfer 3</strong> </li>
          <li>27 appels => het <strong>getal 27</strong> dat bestaat uit <strong>cijfer 2 en 7</strong></li>
          <li>405 appels => het <strong>getal 405</strong> dat bestaat uit de <strong>cijfers 4, 0 en 5</strong></li>
        </ul>
      </div>

      <div class="callout"><strong>Cijfer ≠ getal.</strong> Cijfers zijn de symbolen die we gebruiken om een getal te schrijven.</div>

      <h3>2. Cijfers en de tien symbolen</h3>
      <p>In het decimale stelsel gebruiken we precies tien cijfers:</p>
      <p class="formula">0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p>
      
      <div class="callout"><strong>Elk cijfer heeft een naam en een symbool.</strong> 
        <p class="formula">0 = nul</p>
        <p class="formula">1 = één</p>
        <p class="formula">2 = twee</p>
        <p class="formula">3 = drie</p>
        <p class="formula">4 = vier</p>
        <p class="formula">5 = vijf</p>
        <p class="formula">6 = zes</p>
        <p class="formula">7 = zeven</p>
        <p class="formula">8 = acht</p>
        <p class="formula">9 = negen</p>
      </div>

      <p>Met deze tien cijfers kunnen we oneindig veel verschillende getallen schrijven. Het verschil tussen bijvoorbeeld 2, 20 en 200 komt niet door nieuwe cijfers, maar door de <strong>positie</strong> van het cijfer.</p>
     

      <h3>3. Getallen groter dan 9</h3>

      <p>We hebben nu de <strong>10 cijfers</strong> geleerd:</p>

      <p class="formula">0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p>

      <p>Maar met deze 10 cijfers kunnen we nog veel meer getallen maken.</p>

      <p>Na 9 komt bijvoorbeeld:</p>

      <p class="formula">10, 11, 12, 13, 14, ... , 99, 100, 101, 102, ...</p>

      <p>Hoe kunnen we met maar 10 cijfers toch oneindig veel getallen schrijven?</p>

      <h4>De plaats van een cijfer is belangrijk</h4>

      <p>We schrijven getallen met cijfers. De <strong>plaats</strong> van een cijfer bepaalt hoeveel het cijfer waard is.</p>

      <p>Kijk bijvoorbeeld naar het getal <strong>4 705</strong> (vierduizend zevenhonderd en vijf). We gaan van rechts naar links kijken welke cijfers we tegenkomen en wat de waarde ervan is</p>

      <table>
        <tr>
          <th>Cijfer</th>  
          <th>Plaats</th>
          <th>Waarde</th>
          <th>Naam</th>
        </tr>
        <tr>
          <td>5</td>  
          <td>1e van rechts</td>
          <td>1</td>
          <td>eenheden</td>  
        </tr>
        <tr>
          <td>0</td>
          <td>2e van rechts</td>
          <td>10</td>
          <td>tientallen</td>    
        </tr>
        <tr>
          <td>7</td>
          <td>3e van rechts</td>
          <td>100</td>
          <td>honderdtallen</td>    
        </tr>
        <tr>
          <td>4</td>
          <td>4e van rechts</td>
          <td>1 000</td>
          <td>duizendtallen</td>    
        </tr>
      </table>

      <p>We kunnen het getal <strong>4 705</strong> dus opdelen:</p>

      <p class="formula">4 000 + 700 + 0 + 5 = 4 705</p>

      <p>Het cijfer <strong>4</strong> staat op de plaats van de duizendtallen. Daarom betekent het hier <strong>4 000</strong>.</p>

      <p>Het cijfer <strong>7</strong> staat op de plaats van de honderdtallen. Daarom betekent het hier <strong>700</strong>.</p>

      <p>Het cijfer <strong>5</strong> staat op de plaats van de eenheden. Daarom betekent het hier <strong>5</strong>.</p>

      <h4>De waarde van een cijfer</h4>

      <p>We maken hierbij onderscheid tussen twee dingen:</p>

      <ul>
        <li>De <strong>cijferwaarde</strong> is het cijfer zelf.</li>
        <li>De <strong>plaatswaarde</strong> is wat het cijfer betekent door zijn plaats in het getal.</li>
      </ul>

      <p>Bijvoorbeeld in <strong>4 705</strong>:</p>

      <ul>
        <li>het cijfer is <strong>7</strong>;</li>
        <li>de plaatswaarde van 7 is <strong>700</strong>.</li>
      </ul>

      <h4>Een eenvoudig patroon</h4>

      <p>Als je helemaal rechts begint bij een getal, zal bij elke stap naar links de waarde van het cijfer <strong>10 keer groter</strong> worden:</p>

      <p class="formula">1 → 10 → 100 → 1 000 → 10 000 → ...</p>

      <p>Daarom noemen we ons getallensysteem het <strong>tientallig stelsel</strong>.</p>

      <p>Met slechts 10 cijfers kunnen we zo alle getallen schrijven: van kleine getallen tot getallen met miljoenen, miljarden en nog veel meer cijfers.</p>
      

      <h3>4. De natuurlijke getallen</h3>

      <p>Als we dingen tellen, gebruiken we de <strong>natuurlijke getallen</strong>.</p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...</p>

      <p>Deze getallen noemen we de <strong>natuurlijke getallen</strong>. We gebruiken het symbool <strong>ℕ</strong> voor de verzameling van alle natuurlijke getallen.</p>

      <p>In deze cursus hoort <strong>0</strong> ook bij de natuurlijke getallen:</p>

      <p class="formula">ℕ = {0, 1, 2, 3, 4, 5, ...}</p>

      <h4>De opvolger</h4>

      <p>Na elk natuurlijk getal komt een volgend natuurlijk getal.</p>

      <p>Je krijgt het volgende getal door <strong>1 op te tellen</strong>.</p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">5 → 6</p>

      <p class="formula">12 → 13</p>

      <p class="formula">99 → 100</p>

      <p>Het getal dat na een ander getal komt, noemen we de <strong>opvolger</strong>.</p>

      <p>De opvolger van 8 is dus 9, want:</p>

      <p class="formula">8 + 1 = 9</p>

      <h4>De voorganger</h4>

      <p>We kunnen ook naar het vorige getal gaan.</p>

      <p>Je krijgt het vorige getal door <strong>1 af te trekken</strong>.</p>

      <p>Bijvoorbeeld:</p>

      <p class="formula">6 → 5</p>

      <p class="formula">13 → 12</p>

      <p class="formula">100 → 99</p>

      <p>Het getal dat vóór een ander getal komt, noemen we de <strong>voorganger</strong>.</p>

      <p>De voorganger van 8 is dus 7, want:</p>

      <p class="formula">8 − 1 = 7</p>

      <p><strong>0 heeft geen voorganger in ℕ</strong>, want 0 is het kleinste natuurlijke getal.</p>

      <h4>Er is geen grootste natuurlijk getal</h4>

      <p>De natuurlijke getallen blijven altijd doorgaan.</p>

      <p>Neem bijvoorbeeld 1 000 000. Ook daarna komt nog een natuurlijk getal:</p>

      <p class="formula">1 000 000 + 1 = 1 000 001</p>

      <p>En ook daarna kunnen we weer 1 optellen.</p>

      <p>Er bestaat dus <strong>geen grootste natuurlijk getal</strong>.</p>

      <div class="callout">
        <p><strong>Onthoud:</strong></p>
        <p>De natuurlijke getallen beginnen bij 0 en gaan oneindig verder:</p>

        <p class="formula">0, 1, 2, 3, 4, 5, ...</p>

        <p>De <strong>opvolger</strong> vind je door 1 op te tellen.</p>
        <p>De <strong>voorganger</strong> vind je door 1 af te trekken.</p>
      </div>

      <h4>Zijn de natuurlijke getallen altijd voldoende?</h4>

      <p>Met natuurlijke getallen kunnen we veel berekeningen maken.</p>

      <p>Maar soms komen we een probleem tegen. Kijk bijvoorbeeld naar:</p>

      <p class="formula">3 − 5</p>

      <p>Het antwoord is kleiner dan 0 en is dus geen natuurlijk getal.</p>

      <p>Later zullen we daarom kennismaken met <strong>negatieve getallen</strong> en met een grotere verzameling getallen.</p>
      
      <h3>5. Nul als cijfer en als plaatshouder</h3>
      <p>Nul heeft twee belangrijke rollen.</p>
      <ul>
        <li><strong>Als getal:</strong> 0 betekent geen hoeveelheid.</li>
        <li><strong>Als plaatshouder:</strong> een 0 kan aangeven dat een bepaalde positie leeg is.</li>
      </ul>
      <p>In <strong>405</strong> staat 0 op de tientallenpositie. Er zijn 4 honderdtallen, 0 tientallen en 5 eenheden:</p>
      <p class="formula">405 = 4 × 100 + 0 × 10 + 5 × 1</p>
      <p>Zonder de 0 zouden we 45 schrijven. De 0 verandert dus niet alleen niets aan de hoeveelheid tientallen — ze maakt de positie van de andere cijfers zichtbaar.</p>

      <h3>6. Grote getallen lezen en schrijven</h3>
      <p>Elke positie naar links is tien keer zo groot. Na eenheden, tientallen, honderdtallen en duizendtallen volgen onder andere tienduizendtallen, honderdduizendtallen en miljoenen.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3 482 019 = 3 000 000 + 400 000 + 80 000 + 2 000 + 0 × 100 + 10 + 9</p>
      <p>Let erop dat een 0 op een positie ook hier informatie geeft: in 3 482 019 zijn er geen honderden.</p>

      <h3>7. De getallenlijn</h3>
      <p>We kunnen natuurlijke getallen voorstellen op een <strong>getallenlijn</strong>:</p>
      <div data-widget="nats"></div>
      
      <p>Als je naar rechts beweegt, worden de getallen groter. Als je naar links beweegt, worden ze kleiner.</p>
      <ul>
        <li><strong>a &lt; b</strong>: a is kleiner dan b.</li>
        <li><strong>a = b</strong>: a en b zijn gelijk.</li>
        <li><strong>a &gt; b</strong>: a is groter dan b.</li>
      </ul>
      <p>Voor twee natuurlijke getallen is precies één van deze drie uitspraken waar.</p>

      <h3>8. Getallen vergelijken</h3>
      <p>Bij getallen met evenveel cijfers vergelijk je eerst de meest linkse cijfers. Als die gelijk zijn, kijk je naar de volgende positie.</p>
      <p>Voorbeeld:</p>
      <p class="formula">4 728 &gt; 4 682</p>
      <p>De duizendtallen zijn gelijk (4 = 4). Daarna vergelijken we de honderdtallen: 7 &gt; 6. Daarom is 4 728 groter.</p>
      <p>Bij getallen met een verschillend aantal cijfers is een positief getal met meer cijfers groter:</p>
      <p class="formula">999 &lt; 1 000</p>

      <h3>9. Afstand op de getallenlijn</h3>
      <p>De afstand tussen twee natuurlijke getallen kun je bepalen door het verschil te nemen. Tussen 7 en 12 zitten bijvoorbeeld 5 stappen:</p>
      <p class="formula">12 − 7 = 5</p>
      <p>Dit idee wordt later belangrijk wanneer we absolute waarde, negatieve getallen en functies leren kennen.</p>

      <h3>10. Een eerste wiskundig inzicht</h3>
      <p>Het decimale stelsel is geen verzameling losse trucjes. Het is een systeem waarin elke positie een veelvoud van 10 vertegenwoordigt:</p>
      <p>Daarom kun je elk natuurlijk getal ontleden in plaatswaarden. Dit principe vormt later de basis voor rekenen met grotere getallen, decimalen, machten en uiteindelijk algebra.</p>
    `,
    practice: [
      { id: "p11-1", prompt: "Welke twee begrippen passen bij elkaar? Kies: het symbool 7 is een (cijfer/getal).", type: "choice", choices: ["cijfer", "getal"], accept: ["cijfer"] },
      { id: "p11-2", prompt: "Schrijf 572 uit in honderdtallen, tientallen en eenheden.", accept: ["5×100+7×10+2×1", "5*100+7*10+2*1", "5 x 100 + 7 x 10 + 2 x 1"] },
      { id: "p11-3", prompt: "Welk getal is 6 × 1 000 + 0 × 100 + 4 × 10 + 9?", accept: ["6049", "6 049"] },
      { id: "p11-4", prompt: "Wat is de cijferwaarde van de 7 in 5 728?", accept: ["7"] },
      { id: "p11-5", prompt: "Wat is de plaatswaarde van de 7 in 5 728?", accept: ["700"] },
      { id: "p11-6", prompt: "Wat is de opvolger van 999?", accept: ["1000", "1 000"] },
      { id: "p11-7", prompt: "Wat is de voorganger van 1 000?", accept: ["999"] },
      { id: "p11-8", prompt: "Wat krijg je als je in 308 de 0 weglaat?", accept: ["38"] },
      { id: "p11-9", prompt: "Waarom is de 0 in 405 belangrijk? Kies het beste antwoord.", type: "choice", choices: ["Omdat 0 groter is dan 5", "Omdat hij de tientallenpositie bewaart", "Omdat 405 anders negatief wordt", "Omdat 4 + 5 = 9"], accept: ["Omdat hij de tientallenpositie bewaart"] },
      { id: "p11-10", prompt: "Hoeveel honderdtallen zitten er in 1 040?", accept: ["10"] },
      { id: "p11-11", prompt: "Schrijf 3 482 019 als som van zijn plaatswaarden.", accept: ["3×1000000+4×100000+8×10000+2×1000+0×100+1×10+9", "3*1000000+4*100000+8*10000+2*1000+0*100+1*10+9"] },
      { id: "p11-12", prompt: "Vul in: 45 □ 54. Gebruik <, > of =.", accept: ["<"] },
      { id: "p11-13", prompt: "Vul in: 2 005 □ 1 999. Gebruik <, > of =.", accept: [">"] },
      { id: "p11-14", prompt: "Zet van klein naar groot: 12, 3, 30, 21, 0, 8.", accept: ["0,3,8,12,21,30"] },
      { id: "p11-15", prompt: "Welk natuurlijk getal ligt precies tussen 19 en 21?", accept: ["20"] },
      { id: "p11-16", prompt: "Hoeveel stappen liggen er op de getallenlijn tussen 7 en 12?", accept: ["5"] },
      { id: "p11-17", prompt: "Rond 43 af op het dichtstbijzijnde tiental.", accept: ["40"] },
      { id: "p11-18", prompt: "Rond 47 af op het dichtstbijzijnde tiental.", accept: ["50"] },
      { id: "p11-19", prompt: "Rond 1 249 af op het dichtstbijzijnde honderdtal.", accept: ["1200", "1 200"] },
      { id: "p11-20", prompt: "Waar of niet waar: er bestaat een grootste natuurlijk getal.", type: "choice", choices: ["waar", "niet waar"], accept: ["niet waar"] },
      { id: "p11-21", prompt: "Leg kort uit waarom er geen grootste natuurlijk getal bestaat.", type: "text", accept: ["je kunt er altijd 1 bij optellen", "er kan altijd 1 bij", "voor elk getal bestaat een groter getal"] },
      { id: "p11-22", prompt: "Welke uitspraak is juist? Kies één.", type: "choice", choices: ["107 < 98", "107 = 98", "107 > 98"], accept: ["107 > 98"] }
    ],
    exam: [
      { id: "e11-1", prompt: "Schrijf 4 705 als som van duizendtallen, honderdtallen, tientallen en eenheden.", accept: ["4×1000+7×100+0×10+5×1", "4*1000+7*100+0*10+5", "4 × 1000 + 7 × 100 + 0 × 10 + 5"] },
      { id: "e11-2", prompt: "Welk getal is 3 × 10³ + 0 × 10² + 2 × 10¹ + 8 × 10⁰?", accept: ["3028", "3 028"] },
      { id: "e11-3", prompt: "Wat is de cijferwaarde van de 6 in 6 204?", accept: ["6"] },
      { id: "e11-4", prompt: "Wat is de plaatswaarde van de 6 in 6 204?", accept: ["6000", "6 000"] },
      { id: "e11-5", prompt: "Waarom is de 0 in 4 050 nodig? Kies het beste antwoord.", type: "choice", choices: ["Omdat hij de honderdtallenpositie bewaart", "Omdat nul groter is dan 4", "Omdat 4 050 een priemgetal is", "Omdat de 5 anders negatief wordt"], accept: ["Omdat hij de honderdtallenpositie bewaart"] },
      { id: "e11-6", prompt: "Zet van klein naar groot: 101, 11, 110, 0, 99.", accept: ["0,11,99,101,110"] },
      { id: "e11-7", prompt: "Vul in: 2 999 □ 3 001. Gebruik <, > of =.", accept: ["<"] },
      { id: "e11-8", prompt: "Welke is de opvolger van 9 999?", accept: ["10000", "10 000"] },
      { id: "e11-9", prompt: "Welke is de voorganger van 1 000?", accept: ["999"] },
      { id: "e11-10", prompt: "Rond 6 748 af op het dichtstbijzijnde honderdtal.", accept: ["6700", "6 700"] },
      { id: "e11-11", prompt: "Hoeveel stappen liggen er tussen 14 en 20 op de getallenlijn?", accept: ["6"] },
      { id: "e11-12", prompt: "Een leerling zegt: 'In 5 203 heeft de 2 de plaatswaarde 2 000.' Heeft de leerling gelijk? Antwoord ja of nee.", accept: ["ja"] },
      { id: "e11-13", prompt: "Een leerling zegt: 'Omdat 89 uit twee cijfers bestaat en 102 uit drie cijfers, is 89 groter dan 102.' Wat is de fout? Kies het beste antwoord.", type: "choice", choices: ["Een getal met meer cijfers is altijd kleiner", "De leerling verwart het aantal cijfers met de grootte van het getal", "102 is geen natuurlijk getal", "89 moet eerst afgerond worden"], accept: ["De leerling verwart het aantal cijfers met de grootte van het getal"] },
      { id: "e11-14", prompt: "Klopt 107 > 98? Antwoord ja of nee en geef een korte reden.", type: "text", accept: ["ja", "ja, 107 heeft drie cijfers en 98 twee", "ja want 107 is groter", "ja, 107 is groter"] }
    ]
  },
  {
    id: "1.2",
    title: "De vier hoofdbewerkingen",
    goal: "Leer rekenen met getallen.",
    theory: `
      <h2>Milestone 1.2 — De vier hoofdbewerkingen</h2>
      <p><strong>Doel:</strong> leren rekenen met de vier basisbewerkingen en begrijpen waarom de rekenregels werken. Je leert zowel hoofdrekenen als schriftelijke rekenmethodes en leert je antwoorden controleren.</p>

      <h3>1. Optellen</h3>
      <p>Optellen combineert hoeveelheden. In <strong>7 + 5 = 12</strong> zijn 7 en 5 de termen en 12 de som.</p>
      <p>Op de getallenlijn kun je starten bij 7 en 5 stappen naar rechts gaan.</p>
      <p class="formula">a + 0 = a</p>
      <p>Nul is het <strong>neutrale element</strong> van de optelling.</p>

      <h3>2. Schriftelijk optellen</h3>
      <p>Bij grote getallen schrijf je de overeenkomstige posities onder elkaar: eenheden onder eenheden, tientallen onder tientallen, enzovoort.</p>
      <pre>  738
+ 496
─────
 1234</pre>
      <p>Je begint rechts. Als een kolom 10 of meer oplevert, schrijf je de eenheden en draag je het tiental over naar de volgende kolom.</p>
      <p>Controleer een optelling eventueel door af te ronden of door de inverse bewerking te gebruiken.</p>

      <h3>3. Aftrekken</h3>
      <p>Aftrekken maakt een verschil tussen twee getallen. In <strong>12 − 5 = 7</strong> is 7 het verschil.</p>
      <p>Aftrekken is de inverse bewerking van optellen:</p>
      <p class="formula">a − b = c &nbsp; ↔ &nbsp; c + b = a</p>
      <p>Dus als 17 − 9 = 8, dan moet 8 + 9 = 17.</p>

      <h3>4. Schriftelijk aftrekken</h3>
      <p>Ook bij aftrekken werk je per positie. Wanneer het bovenste cijfer te klein is, leen je één eenheid van de volgende positie.</p>
      <pre> 1002
− 587
─────
  415</pre>
      <p>De nullen maken dit voorbeeld interessant: je moet de plaatswaarden correct herverdelen voordat je verder rekent.</p>

      <h3>5. Vermenigvuldigen</h3>
      <p>Vermenigvuldigen kun je zien als herhaald optellen:</p>
      <p class="formula">4 × 3 = 3 + 3 + 3 + 3 = 12</p>
      <p>Maar vermenigvuldiging is meer dan alleen herhaald optellen. Het is een bewerking waarmee we een hoeveelheid schalen of groepen combineren.</p>
      <p>Belangrijke eigenschappen:</p>
      <p class="formula">a × 0 = 0 &nbsp;&nbsp; a × 1 = a &nbsp;&nbsp; a × 10 = 10a</p>

      <h3>6. Schriftelijk vermenigvuldigen</h3>
      <p>Bij grotere getallen kun je een vermenigvuldiging opsplitsen volgens de plaatswaarden:</p>
      <p class="formula">37 × 24 = 37 × (20 + 4) = 37 × 20 + 37 × 4 = 740 + 148 = 888</p>
      <p>Dit is de <strong>distributieve eigenschap</strong>. De traditionele cijfermethode is een verkorte manier om hetzelfde principe uit te voeren.</p>

      <h3>7. Delen</h3>
      <p>Delen is de inverse bewerking van vermenigvuldigen. Bij <strong>12 ÷ 3 = 4</strong> vragen we: hoeveel keer past 3 in 12?</p>
      <p>Je kunt ook denken aan verdelen: 12 objecten verdelen over 3 gelijke groepen geeft 4 objecten per groep.</p>

      <h3>8. Delen met rest</h3>
      <p>Niet elke deling komt exact uit. Bij 157 ÷ 12 krijgen we 13 rest 1:</p>
      <p class="formula">157 = 13 × 12 + 1</p>
      <p>In het algemeen:</p>
      <p class="formula">a = q × d + r &nbsp; met &nbsp; 0 ≤ r &lt; d</p>
      <p>Hier is <strong>q</strong> het quotiënt, <strong>d</strong> de deler en <strong>r</strong> de rest.</p>

      <h3>9. Schriftelijk delen</h3>
      <p>Bij een grotere deling bepaal je stap voor stap hoeveel keer de deler in het huidige deel van het getal past. Je vermenigvuldigt, trekt af en haalt vervolgens het volgende cijfer naar beneden.</p>
      <p>Het belangrijkste is niet alleen het antwoord, maar ook de controle:</p>
      <p class="formula">quotiënt × deler + rest = deeltal</p>

      <h3>10. Delen door nul</h3>
      <p>Delen door nul is niet gedefinieerd. Er bestaat bijvoorbeeld geen getal <strong>x</strong> waarvoor:</p>
      <p class="formula">0 × x = 5</p>
      <p>Daarom heeft <strong>5 ÷ 0</strong> geen betekenis in de gewone rekenkunde.</p>
      <p>Ook <strong>0 ÷ 0</strong> krijgt geen unieke waarde: elk getal voldoet immers aan 0 × x = 0. Daarom definiëren we ook 0 ÷ 0 niet.</p>

      <h3>11. Commutatieve eigenschap</h3>
      <p>Bij optellen en vermenigvuldigen mag je de volgorde verwisselen:</p>
      <p class="formula">a + b = b + a</p>
      <p class="formula">a × b = b × a</p>
      <p>Dat geldt niet voor aftrekken en delen.</p>

      <h3>12. Associatieve eigenschap</h3>
      <p>Bij optellen en vermenigvuldigen maakt de manier waarop je drie getallen groepeert niet uit:</p>
      <p class="formula">(a + b) + c = a + (b + c)</p>
      <p class="formula">(a × b) × c = a × (b × c)</p>
      <p>Dit geldt niet in het algemeen voor aftrekken en delen.</p>

      <h3>13. Distributieve eigenschap</h3>
      <p>Vermenigvuldigen over een som:</p>
      <p class="formula">a × (b + c) = a × b + a × c</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">8 × 21 = 8 × (20 + 1) = 160 + 8 = 168</p>
      <p>Deze eigenschap wordt later essentieel in de algebra.</p>

      <h3>14. Bewerkingsvolgorde</h3>
      <p>Wanneer meerdere bewerkingen in één uitdrukking staan, gebruiken we een vaste volgorde:</p>
      <ol>
        <li>haakjes;</li>
        <li>machten en wortels;</li>
        <li>vermenigvuldigen en delen, van links naar rechts;</li>
        <li>optellen en aftrekken, van links naar rechts.</li>
      </ol>
      <p>Dus:</p>
      <p class="formula">3 + 7 × 4 − 5 = 3 + 28 − 5 = 26</p>
      <p>En:</p>
      <p class="formula">18 ÷ 3 × 4 + 2 = 6 × 4 + 2 = 26</p>

      <h3>15. Schatten en controleren</h3>
      <p>Een goede rekenaar controleert niet blind een uitkomst. Je kunt bijvoorbeeld vooraf schatten:</p>
      <p class="formula">738 + 496 ≈ 700 + 500 = 1 200</p>
      <p>Een antwoord van 1234 is plausibel; een antwoord van 234 zou dat niet zijn.</p>
      <p>Controleer bij aftrekken met een optelling en bij delen met een vermenigvuldiging.</p>
    `,
    practice: [
      { id: "p12-1", prompt: "47 + 38", accept: ["85"] },
      { id: "p12-2", prompt: "738 + 496", accept: ["1234", "1 234"] },
      { id: "p12-3", prompt: "91 − 57", accept: ["34"] },
      { id: "p12-4", prompt: "1002 − 587", accept: ["415"] },
      { id: "p12-5", prompt: "12 × 8", accept: ["96"] },
      { id: "p12-6", prompt: "37 × 24", accept: ["888"] },
      { id: "p12-7", prompt: "144 ÷ 12", accept: ["12"] },
      { id: "p12-8", prompt: "29 ÷ 6: geef quotiënt en rest als '4 rest 5'.", accept: ["4 rest 5", "4 r 5"] },
      { id: "p12-9", prompt: "157 ÷ 12: geef quotiënt en rest.", accept: ["13 rest 1", "13 r 1"] },
      { id: "p12-10", prompt: "Controleer 157 ÷ 12 = 13 rest 1 met een vermenigvuldiging.", accept: ["13×12+1=157", "13*12+1=157", "157=13×12+1"] },
      { id: "p12-11", prompt: "3 + 6 × 2 − 4", accept: ["11"] },
      { id: "p12-12", prompt: "24 ÷ 3 × 2 + 5", accept: ["21"] },
      { id: "p12-13", prompt: "5 × (8 − 3) + 2 × 4", accept: ["33"] },
      { id: "p12-14", prompt: "100 − 4 × (6 + 7)", accept: ["48"] },
      { id: "p12-15", prompt: "Is optellen commutatief? ja/nee", accept: ["ja"] },
      { id: "p12-16", prompt: "Is aftrekken commutatief? ja/nee", accept: ["nee"] },
      { id: "p12-17", prompt: "Gebruik distributiviteit: 8 × 21.", accept: ["168"] },
      { id: "p12-18", prompt: "Is 7 ÷ 0 gedefinieerd? ja/nee", accept: ["nee"] },
      { id: "p12-19", prompt: "Een leerling rekent 3 + 4 × 5 = 35. Wat is de fout?", type: "choice", choices: ["Er is geen fout", "De leerling telt eerst op in plaats van eerst te vermenigvuldigen", "De leerling had moeten aftrekken", "4 × 5 = 35"], accept: ["De leerling telt eerst op in plaats van eerst te vermenigvuldigen"] },
      { id: "p12-20", prompt: "Schat 738 + 496 tot op ongeveer honderd.", accept: ["1200", "1 200"] },
      { id: "p12-21", prompt: "Waar of niet waar: 8 × (10 + 3) = 8 × 10 + 3.", type: "choice", choices: ["waar", "niet waar"], accept: ["niet waar"] },
      { id: "p12-22", prompt: "Waarom is 0 ÷ 0 niet gedefinieerd? Kies het beste antwoord.", type: "choice", choices: ["Omdat 0 geen getal is", "Omdat er niet één unieke uitkomst is", "Omdat delen altijd verboden is", "Omdat nul negatief is"], accept: ["Omdat er niet één unieke uitkomst is"] },
      { id: "p12-23", prompt: "Vul in: 36 ÷ 6 × 3 + 1", accept: ["19"] },
      { id: "p12-24", prompt: "Geef een controle voor 120 − 48 = 72.", type: "text", accept: ["72+48=120", "48+72=120", "72 + 48 = 120"] }
    ],
    exam: [
      { id: "e12-1", prompt: "738 + 496", accept: ["1234", "1 234"] },
      { id: "e12-2", prompt: "1002 − 587", accept: ["415"] },
      { id: "e12-3", prompt: "37 × 24", accept: ["888"] },
      { id: "e12-4", prompt: "157 ÷ 12: geef quotiënt en rest.", accept: ["13 rest 1", "13 r 1"] },
      { id: "e12-5", prompt: "3 + 7 × 4 − 5", accept: ["26"] },
      { id: "e12-6", prompt: "18 ÷ 3 × 4 + 2", accept: ["26"] },
      { id: "e12-7", prompt: "−8 × (4 − 7)", accept: ["24"] },
      { id: "e12-8", prompt: "Leg uit hoe je 48 − 29 kunt controleren.", type: "text", accept: ["19+29=48", "19 + 29 = 48"] },
      { id: "e12-9", prompt: "Welke bewerking is commutatief: aftrekken of vermenigvuldigen? Kies één.", type: "choice", choices: ["aftrekken", "vermenigvuldigen"], accept: ["vermenigvuldigen"] },
      { id: "e12-10", prompt: "Gebruik distributiviteit: 8 × 21.", accept: ["168"] },
      { id: "e12-11", prompt: "Is 5 ÷ 0 gedefinieerd? ja/nee", accept: ["nee"] },
      { id: "e12-12", prompt: "Een leerling beweert: 20 ÷ 4 × 5 = 1. Wat is de fout? Kies het beste antwoord.", type: "choice", choices: ["Delen en vermenigvuldigen hebben dezelfde prioriteit en worden van links naar rechts uitgevoerd", "Vermenigvuldigen moet altijd vóór delen", "20 ÷ 4 = 1", "5 moet worden opgeteld"], accept: ["Delen en vermenigvuldigen hebben dezelfde prioriteit en worden van links naar rechts uitgevoerd"] },
      { id: "e12-13", prompt: "Schat 1 002 − 587 tot op ongeveer honderd.", accept: ["400", "400 ongeveer"] },
      { id: "e12-14", prompt: "Geef de uitkomst van 24 ÷ 3 × 2 + 5.", accept: ["21"] },
      { id: "e12-15", prompt: "Leg in één zin uit waarom 0 ÷ 0 geen unieke uitkomst heeft.", type: "text", accept: ["elk getal maal 0 is 0", "ieder getal maal 0 is 0", "er zijn oneindig veel oplossingen"] }
    ]
  },
  {
    id: "1.3",
    title: "Het getallensysteem uitbreiden",
    goal: "Van ℕ naar ℤ en ℚ.",
    theory: `
      <h2>Milestone 1.3 — Het getallensysteem uitbreiden</h2>
      <p><strong>Doel:</strong> begrijpen waarom ℕ niet genoeg is en stap voor stap leren werken met ℤ en ℚ. Je leert ook absolute waarde, breuken, decimalen, percentages en verhoudingen.</p>

      <h3>1. Waarom hebben we negatieve getallen nodig?</h3>
      <p>In ℕ heeft <strong>3 − 5</strong> geen antwoord. Om zulke verschillen toch te kunnen beschrijven, breiden we de getallen uit met negatieve getallen.</p>
      <p class="formula">ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}</p>
      <p>De gehele getallen bevatten dus de natuurlijke getallen en hun negatieve tegenhangers.</p>

      <h3>2. De getallenlijn met negatieve getallen</h3>
      <pre>←────|────|────|────|────|────→
     −3   −2   −1    0    1    2    3</pre>
      <p>Naar rechts worden getallen groter. Naar links worden ze kleiner. Daarom geldt bijvoorbeeld:</p>
      <p class="formula">−5 &lt; −2 &lt; 0 &lt; 4</p>

      <h3>3. Tegenovergestelde getallen</h3>
      <p>De getallen <strong>5</strong> en <strong>−5</strong> liggen even ver van 0, maar aan tegenovergestelde kanten.</p>
      <p class="formula">5 + (−5) = 0</p>
      <p>We noemen ze elkaars <strong>tegengestelde</strong>.</p>

      <h3>4. Absolute waarde</h3>
      <p>De <strong>absolute waarde</strong> van een getal is de afstand tot 0:</p>
      <p class="formula">|5| = 5 &nbsp;&nbsp; |−5| = 5 &nbsp;&nbsp; |0| = 0</p>
      <p>Absolute waarde is dus nooit negatief.</p>

      <h3>5. Optellen en aftrekken met gehele getallen</h3>
      <p>Bij optellen kun je de getallenlijn gebruiken. Een positief getal beweegt naar rechts; een negatief getal naar links.</p>
      <p>Aftrekken kun je omzetten in optellen van het tegengestelde:</p>
      <p class="formula">a − b = a + (−b)</p>
      <p>Dus:</p>
      <p class="formula">7 − (−3) = 7 + 3 = 10</p>

      <h3>6. Vermenigvuldigen en delen met tekens</h3>
      <p>Bij vermenigvuldigen en delen gelden de tekenregels:</p>
      <ul>
        <li>zelfde tekens → positief;</li>
        <li>verschillende tekens → negatief.</li>
      </ul>
      <p>Bijvoorbeeld:</p>
      <p class="formula">(−4) × (−3) = 12</p>
      <p class="formula">(−20) ÷ 5 = −4</p>

      <h3>7. Waarom breuken?</h3>
      <p>Gehele getallen zijn niet genoeg om eerlijk te verdelen. Bijvoorbeeld 1 pizza verdelen over 2 personen geeft niet één geheel getal per persoon.</p>
      <p>We gebruiken daarom <strong>rationele getallen</strong>:</p>
      <p class="formula">ℚ = {a/b | a,b ∈ ℤ en b ≠ 0}</p>
      <p>De getallenstelsels zijn nu genest:</p>
      <p class="formula">ℕ ⊂ ℤ ⊂ ℚ</p>

      <h3>8. Teller en noemer</h3>
      <p>In <strong>3/5</strong> is 3 de <strong>teller</strong> en 5 de <strong>noemer</strong>. De breuk betekent drie vijfde van één geheel.</p>
      <p>De noemer mag nooit nul zijn.</p>

      <h3>9. Gelijkwaardige breuken</h3>
      <p>Een breuk verandert niet van waarde wanneer teller en noemer met hetzelfde niet-nul getal worden vermenigvuldigd:</p>
      <p class="formula">1/2 = 2/4 = 3/6 = 50/100</p>
      <p>Om een breuk te <strong>vereenvoudigen</strong>, deel je teller en noemer door hun grootste gemene deler.</p>

      <h3>10. Breuken vergelijken</h3>
      <p>Bij gelijke noemers is de breuk met de grootste teller groter.</p>
      <p>Bij ongelijke noemers kun je gelijknamig maken:</p>
      <p class="formula">1/3 = 2/6 &nbsp;&nbsp; en &nbsp;&nbsp; 1/2 = 3/6</p>
      <p>Dus <strong>1/2 &gt; 1/3</strong>.</p>

      <h3>11. Breuken optellen en aftrekken</h3>
      <p>Bij gelijknamige breuken tel of trek je de tellers op en blijft de noemer gelijk:</p>
      <p class="formula">2/7 + 3/7 = 5/7</p>
      <p>Bij verschillende noemers maak je eerst een gemeenschappelijke noemer:</p>
      <p class="formula">1/2 + 1/3 = 3/6 + 2/6 = 5/6</p>

      <h3>12. Breuken vermenigvuldigen</h3>
      <p>Vermenigvuldig teller met teller en noemer met noemer:</p>
      <p class="formula">(2/3) × (5/4) = 10/12 = 5/6</p>
      <p>Je kunt soms vooraf kruislings vereenvoudigen.</p>

      <h3>13. Breuken delen</h3>
      <p>Delen door een breuk is vermenigvuldigen met het omgekeerde:</p>
      <p class="formula">a/b ÷ c/d = a/b × d/c</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3/8 ÷ 9/4 = 3/8 × 4/9 = 1/6</p>

      <h3>14. Decimalen</h3>
      <p>Een decimaal getal is een andere schrijfwijze voor een getal dat ook als breuk kan worden geschreven.</p>
      <p class="formula">0,5 = 5/10 = 1/2</p>
      <p class="formula">0,125 = 125/1000 = 1/8</p>
      <p>Niet elke breuk heeft een eindige decimale schrijfwijze. Bijvoorbeeld:</p>
      <p class="formula">1/3 = 0,333…</p>

      <h3>15. Decimalen vergelijken en rekenen</h3>
      <p>Bij vergelijken kun je nullen achter de komma toevoegen:</p>
      <p class="formula">0,7 = 0,70 &gt; 0,65</p>
      <p>Bij optellen en aftrekken zet je de komma's onder elkaar.</p>

      <h3>16. Percentages</h3>
      <p>Een percentage betekent “per honderd”:</p>
      <p class="formula">17% = 17/100 = 0,17</p>
      <p>Een percentage van een getal bereken je met:</p>
      <p class="formula">p% van n = p/100 × n</p>
      <p>Dus:</p>
      <p class="formula">25% van 64 = 0,25 × 64 = 16</p>

      <h3>17. Percentageverandering</h3>
      <p>Bij een stijging met 15% vermenigvuldig je met <strong>1,15</strong>. Bij een daling met 15% vermenigvuldig je met <strong>0,85</strong>.</p>
      <p class="formula">nieuw = oud × (1 + stijging)</p>
      <p class="formula">nieuw = oud × (1 − daling)</p>
      <p>Let op: een stijging van 20% gevolgd door een daling van 20% brengt je niet terug naar het oorspronkelijke bedrag.</p>

      <h3>18. Verhoudingen</h3>
      <p>Een verhouding vergelijkt twee hoeveelheden:</p>
      <p class="formula">3 : 8 = 3/8</p>
      <p>Als 3 : 8 gelijk is aan x : 24, dan is:</p>
      <p class="formula">x = 24 × 3/8 = 9</p>
      <p>Een verhouding kun je zien als een schaalfactor of als een breuk.</p>

      <h3>19. De grote lijn</h3>
      <p>De uitbreiding van het getallensysteem gebeurt omdat bestaande getallen tekortschieten:</p>
      <ul>
        <li>ℕ is niet genoeg voor aftrekken;</li>
        <li>ℤ is niet genoeg voor alle delingen;</li>
        <li>ℚ zal later niet genoeg blijken voor bijvoorbeeld √2.</li>
      </ul>
      <p>Wiskunde breidt haar getallensysteem dus uit wanneer nieuwe problemen daarom vragen.</p>
    `,
    practice: [
      { id: "p13-1", prompt: "−8 + 13", accept: ["5"] },
      { id: "p13-2", prompt: "−12 + 7 − (−4)", accept: ["-1", "−1"] },
      { id: "p13-3", prompt: "−6 × (4 − 7)", accept: ["18"] },
      { id: "p13-4", prompt: "−20 ÷ 5", accept: ["-4", "−4"] },
      { id: "p13-5", prompt: "Bereken |−17|.", accept: ["17"] },
      { id: "p13-6", prompt: "Vul in: −5 □ −2. Gebruik <, > of =.", accept: ["<"] },
      { id: "p13-7", prompt: "Vereenvoudig 18/24.", accept: ["3/4"] },
      { id: "p13-8", prompt: "Welke breuk is groter: 1/2 of 1/3?", type: "choice", choices: ["1/2", "1/3"], accept: ["1/2"] },
      { id: "p13-9", prompt: "1/2 + 1/3", accept: ["5/6"] },
      { id: "p13-10", prompt: "5/6 − 1/4", accept: ["7/12"] },
      { id: "p13-11", prompt: "2/5 × 15/8", accept: ["3/4"] },
      { id: "p13-12", prompt: "3/8 ÷ 9/4", accept: ["1/6"] },
      { id: "p13-13", prompt: "Schrijf 0,125 als vereenvoudigde breuk.", accept: ["1/8"] },
      { id: "p13-14", prompt: "Welke is groter: 0,7 of 0,65?", accept: ["0,7", "0.7"] },
      { id: "p13-15", prompt: "Bereken 0,75 + 0,8.", accept: ["1,55", "1.55"] },
      { id: "p13-16", prompt: "Wat is 25% van 64?", accept: ["16"] },
      { id: "p13-17", prompt: "Wat is 17,5% van 80?", accept: ["14"] },
      { id: "p13-18", prompt: "Een prijs van €200 stijgt met 15%. Wat is de nieuwe prijs?", accept: ["230", "€230", "230 euro"] },
      { id: "p13-19", prompt: "4 : 9 = x : 36. Vind x.", accept: ["16"] },
      { id: "p13-20", prompt: "Een leerling zegt: 1/2 + 1/3 = 2/5. Wat is de fout?", type: "choice", choices: ["Tellers en noemers mag je niet afzonderlijk optellen", "1/2 is geen breuk", "3 is geen noemer", "Het antwoord moet negatief zijn"], accept: ["Tellers en noemers mag je niet afzonderlijk optellen"] },
      { id: "p13-21", prompt: "Waar of niet waar: −7 > −3.", type: "choice", choices: ["waar", "niet waar"], accept: ["niet waar"] },
      { id: "p13-22", prompt: "Waarom is 5/0 geen rationaal getal?", type: "text", accept: ["delen door nul is niet gedefinieerd", "de noemer mag niet nul zijn", "noemer mag niet 0 zijn"] },
      { id: "p13-23", prompt: "Een bedrag van 100 stijgt met 20% en daalt daarna met 20%. Is het eindbedrag 100? ja/nee", accept: ["nee"] },
      { id: "p13-24", prompt: "Bereken het eindbedrag uit oefening 23.", accept: ["96"] }
    ],
    exam: [
      { id: "e13-1", prompt: "−8 × (4 − 7)", accept: ["24"] },
      { id: "e13-2", prompt: "−12 + 7 − (−4)", accept: ["-1", "−1"] },
      { id: "e13-3", prompt: "Bereken |−9|.", accept: ["9"] },
      { id: "e13-4", prompt: "1/2 + 1/3", accept: ["5/6"] },
      { id: "e13-5", prompt: "5/6 − 1/4", accept: ["7/12"] },
      { id: "e13-6", prompt: "3/4 × 8/9", accept: ["2/3"] },
      { id: "e13-7", prompt: "3/8 ÷ 9/4", accept: ["1/6"] },
      { id: "e13-8", prompt: "Schrijf 0,375 als vereenvoudigde breuk.", accept: ["3/8"] },
      { id: "e13-9", prompt: "Wat is 17,5% van 80?", accept: ["14"] },
      { id: "e13-10", prompt: "4 : 9 = x : 36. Vind x.", accept: ["16"] },
      { id: "e13-11", prompt: "Welke is groter: −4 of −9?", accept: ["-4", "−4"] },
      { id: "e13-12", prompt: "Een prijs van €240 daalt met 15%. Wat is de nieuwe prijs?", accept: ["204", "€204", "204 euro"] },
      { id: "e13-13", prompt: "Een leerling beweert 2/3 + 1/3 = 3/6. Wat is de fout?", type: "choice", choices: ["De tellers zijn verkeerd opgeteld", "Bij gelijke noemers tel je de tellers op en behoud je de noemer", "3/6 is altijd gelijk aan 1", "Breuken mogen niet worden opgeteld"], accept: ["Bij gelijke noemers tel je de tellers op en behoud je de noemer"] },
      { id: "e13-14", prompt: "Leg kort uit waarom ℤ niet genoeg is voor de uitkomst van 1 ÷ 2.", type: "text", accept: ["1/2 is geen geheel getal", "het antwoord is een breuk", "1/2 zit niet in de gehele getallen"] }
    ]
  },
  {
    id: "1.4",
    title: "Getaltheorie en structuur",
    goal: "Ontdek de structuur van getallen.",
    theory: `
      <h2>Milestone 1.4 — Getaltheorie en structuur</h2>
      <p><strong>Doel:</strong> leren kijken naar de verborgen multiplicatieve structuur van gehele getallen. Je leert wanneer een getal deelbaar is, hoe priemgetallen als bouwstenen functioneren en hoe je GGD en KGV efficiënt berekent.</p>

      <h3>1. Delers en deelbaarheid</h3>
      <p>Een positief geheel getal <strong>d</strong> is een <strong>deler</strong> van <strong>n</strong> als n precies deelbaar is door d.</p>
      <p>Bijvoorbeeld: 3 is een deler van 12 omdat 12 ÷ 3 = 4.</p>
      <p>Je kunt dit ook schrijven als:</p>
      <p class="formula">3 | 12</p>
      <p>Dit betekent “3 deelt 12”.</p>

      <h3>2. Handige deelbaarheidsregels</h3>
      <ul>
        <li>deelbaar door 2 → laatste cijfer is even;</li>
        <li>deelbaar door 3 → som van de cijfers is deelbaar door 3;</li>
        <li>deelbaar door 4 → laatste twee cijfers zijn deelbaar door 4;</li>
        <li>deelbaar door 5 → laatste cijfer is 0 of 5;</li>
        <li>deelbaar door 6 → deelbaar door 2 én door 3;</li>
        <li>deelbaar door 9 → som van de cijfers is deelbaar door 9;</li>
        <li>deelbaar door 10 → laatste cijfer is 0.</li>
      </ul>

      <h3>3. Even en oneven</h3>
      <p>Een even getal is deelbaar door 2. Een oneven getal niet.</p>
      <p class="formula">even = 2k &nbsp;&nbsp; oneven = 2k + 1</p>
      <p>waarbij k een geheel getal is.</p>

      <h3>4. Priemgetallen</h3>
      <p>Een <strong>priemgetal</strong> is een natuurlijk getal groter dan 1 met precies twee positieve delers: 1 en zichzelf.</p>
      <p>Voorbeelden: 2, 3, 5, 7, 11, 13, 17, …</p>
      <p><strong>1 is geen priemgetal</strong>, want 1 heeft slechts één positieve deler.</p>
      <p><strong>2 is het enige even priemgetal.</strong></p>

      <h3>5. Priemtesten</h3>
      <p>Om te onderzoeken of een getal n priem is, hoef je geen delers tot n−1 te testen. Het volstaat om priemdelers tot en met √n te onderzoeken.</p>
      <p>Voor een eerste kennismaking kun je ook de <strong>zeef van Eratosthenes</strong> gebruiken: schrijf de getallen op, schrap veelvouden van 2, daarna van 3, daarna van 5, enzovoort.</p>

      <h3>6. Priemfactorisatie</h3>
      <p>Elk natuurlijk getal groter dan 1 kan als product van priemgetallen worden geschreven.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">60 = 2 × 30 = 2 × 2 × 15 = 2² × 3 × 5</p>
      <p>Dit heet de <strong>priemfactorisatie</strong>.</p>

      <h3>7. De fundamentele hoofdstelling van de rekenkunde</h3>
      <p>Elk natuurlijk getal groter dan 1 heeft precies één priemfactorisatie, afgezien van de volgorde van de factoren.</p>
      <p>Dat maakt priemgetallen tot de “bouwstenen” van de natuurlijke getallen.</p>

      <h3>8. Aantal delers uit een priemfactorisatie</h3>
      <p>Als:</p>
      <p class="formula">n = 2³ × 3² × 5</p>
      <p>dan kan een deler 2 kiezen met exponent 0, 1, 2 of 3; 3 met exponent 0, 1 of 2; en 5 met exponent 0 of 1.</p>
      <p>Het aantal positieve delers is daarom:</p>
      <p class="formula">(3 + 1)(2 + 1)(1 + 1) = 24</p>

      <h3>9. Grootste gemene deler — GGD</h3>
      <p>De <strong>GGD</strong> van twee getallen is de grootste positieve gehele getal dat beide getallen deelt.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">GGD(24,36) = 12</p>
      <p>Via priemfactorisatie neem je van elke gemeenschappelijke priemfactor de kleinste exponent.</p>

      <h3>10. Kleinste gemene veelvoud — KGV</h3>
      <p>Het <strong>KGV</strong> is het kleinste positieve getal dat een veelvoud is van beide getallen.</p>
      <p class="formula">KGV(12,18) = 36</p>
      <p>Via priemfactorisatie neem je van elke priemfactor de grootste exponent die voorkomt.</p>

      <h3>11. Verband tussen GGD en KGV</h3>
      <p>Voor positieve gehele getallen a en b geldt:</p>
      <p class="formula">GGD(a,b) × KGV(a,b) = a × b</p>
      <p>Dit is ook een handige controle.</p>

      <h3>12. Het Euclidische algoritme</h3>
      <p>De GGD kan efficiënt worden gevonden met herhaald delen.</p>
      <p>Voor 105 en 28:</p>
      <p class="formula">105 = 3 × 28 + 21</p>
      <p class="formula">28 = 1 × 21 + 7</p>
      <p class="formula">21 = 3 × 7 + 0</p>
      <p>De laatste niet-nul rest is 7, dus:</p>
      <p class="formula">GGD(105,28) = 7</p>

      <h3>13. Waarom is dit belangrijk?</h3>
      <p>Getaltheorie lijkt misschien een verzameling regels, maar onthult structuur. Priemfactorisatie helpt bij breuken vereenvoudigen, GGD en KGV, algoritmen en later bij abstractere wiskunde.</p>
    `,
    practice: [
      { id: "p14-1", prompt: "Is 91 priem? Antwoord ja of nee.", accept: ["nee"] },
      { id: "p14-2", prompt: "Ontbind 91 in priemfactoren.", accept: ["7×13", "7*13"] },
      { id: "p14-3", prompt: "Ontbind 60 in priemfactoren.", accept: ["2²×3×5", "2^2×3×5", "2^2*3*5"] },
      { id: "p14-4", prompt: "Ontbind 84 in priemfactoren.", accept: ["2²×3×7", "2^2×3×7", "2^2*3*7"] },
      { id: "p14-5", prompt: "Geef alle positieve delers van 18.", accept: ["1,2,3,6,9,18"] },
      { id: "p14-6", prompt: "GGD(24,36)", accept: ["12"] },
      { id: "p14-7", prompt: "KGV(24,36)", accept: ["72"] },
      { id: "p14-8", prompt: "Vereenvoudig 42/56 met behulp van de GGD.", accept: ["3/4"] },
      { id: "p14-9", prompt: "GGD(105,28) met het Euclidische algoritme.", accept: ["7"] },
      { id: "p14-10", prompt: "Is 234 deelbaar door 9? ja/nee", accept: ["ja"] },
      { id: "p14-11", prompt: "Is 257 deelbaar door 2? ja/nee", accept: ["nee"] },
      { id: "p14-12", prompt: "Waarom is 1 geen priemgetal?", type: "choice", choices: ["Omdat 1 geen positieve deler heeft", "Omdat 1 slechts één positieve deler heeft", "Omdat 1 even is", "Omdat 1 negatief is"], accept: ["Omdat 1 slechts één positieve deler heeft"] },
      { id: "p14-13", prompt: "Hoeveel positieve delers heeft 2³ × 3² × 5?", accept: ["24"] },
      { id: "p14-14", prompt: "Bereken GGD(48,18).", accept: ["6"] },
      { id: "p14-15", prompt: "Bereken KGV(48,18).", accept: ["144"] },
      { id: "p14-16", prompt: "Gebruik GGD × KGV = a × b als controle voor 48 en 18.", type: "text", accept: ["6×144=48×18", "6*144=48*18", "864=864"] },
      { id: "p14-17", prompt: "Waar of niet waar: elk natuurlijk getal groter dan 1 heeft precies één priemfactorisatie, afgezien van de volgorde.", type: "choice", choices: ["waar", "niet waar"], accept: ["waar"] },
      { id: "p14-18", prompt: "Een leerling zegt dat 2 × 3 × 5 en 5 × 2 × 3 verschillende priemfactorisaties zijn. Wat is de fout?", type: "choice", choices: ["De volgorde van factoren verandert het product niet", "2 is geen priemgetal", "5 mag niet in een factorisatie", "Er moeten negatieve factoren staan"], accept: ["De volgorde van factoren verandert het product niet"] },
      { id: "p14-19", prompt: "Ontbind 180 in priemfactoren.", accept: ["2²×3²×5", "2^2×3^2×5", "2^2*3^2*5"] },
      { id: "p14-20", prompt: "Welke priemgetallen moet je maximaal testen om te bepalen of 97 priem is?", accept: ["2,3,5,7"] }
    ],
    exam: [
      { id: "e14-1", prompt: "Ontbind 90 in priemfactoren.", accept: ["2×3²×5", "2*3^2*5"] },
      { id: "e14-2", prompt: "GGD(48,18)", accept: ["6"] },
      { id: "e14-3", prompt: "KGV(48,18)", accept: ["144"] },
      { id: "e14-4", prompt: "Is 97 priem? ja/nee", accept: ["ja"] },
      { id: "e14-5", prompt: "Geef alle positieve delers van 18.", accept: ["1,2,3,6,9,18"] },
      { id: "e14-6", prompt: "Is 234 deelbaar door 9? ja/nee", accept: ["ja"] },
      { id: "e14-7", prompt: "Waarom is 1 geen priemgetal?", type: "text", accept: ["1 heeft slechts één positieve deler", "omdat 1 maar één deler heeft"] },
      { id: "e14-8", prompt: "Hoeveel positieve delers heeft 2³ × 3² × 5?", accept: ["24"] },
      { id: "e14-9", prompt: "Bereken GGD(105,28) met het Euclidische algoritme.", accept: ["7"] },
      { id: "e14-10", prompt: "Een leerling ontbindt 60 als 2 × 30 en stopt. Waarom is dit nog geen priemfactorisatie?", type: "text", accept: ["30 is niet priem", "alle factoren moeten priem zijn", "2×30 bevat nog een samengestelde factor"] },
      { id: "e14-11", prompt: "Als GGD(a,b)=6 en a=48, b=18, wat is dan KGV(a,b)?", accept: ["144"] },
      { id: "e14-12", prompt: "Is de uitspraak 'elk even getal is priem' juist? ja/nee", accept: ["nee"] }
    ]
  },
  {
    id: "1.5",
    title: "Machten, wortels en reële getallen",
    goal: "Van machten naar ℝ.",
    theory: `
      <h2>Milestone 1.5 — Machten, wortels en reële getallen</h2>
      <p><strong>Doel:</strong> machten en wortels niet alleen uitrekenen, maar begrijpen als inverse en structurele bewerkingen. Je maakt kennis met irrationale getallen en het reële getallensysteem.</p>

      <h3>1. Machten</h3>
      <p>Een macht is herhaalde vermenigvuldiging:</p>
      <p class="formula">a⁴ = a × a × a × a</p>
      <p>In <strong>aⁿ</strong> heet a het <strong>grondtal</strong> en n de <strong>exponent</strong>.</p>

      <h3>2. Belangrijke machten</h3>
      <p class="formula">a¹ = a</p>
      <p class="formula">a⁰ = 1 &nbsp; voor a ≠ 0</p>
      <p>Verder is bijvoorbeeld:</p>
      <p class="formula">10² = 100 &nbsp;&nbsp; 10³ = 1 000 &nbsp;&nbsp; 10⁶ = 1 000 000</p>

      <h3>3. Negatieve exponenten</h3>
      <p>Een negatieve exponent betekent het omgekeerde:</p>
      <p class="formula">a⁻ⁿ = 1/aⁿ &nbsp; voor a ≠ 0</p>
      <p>Dus:</p>
      <p class="formula">2⁻³ = 1/2³ = 1/8</p>

      <h3>4. Product van machten met hetzelfde grondtal</h3>
      <p>Bij vermenigvuldigen tel je de exponenten op:</p>
      <p class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">2³ × 2⁴ = 2⁷ = 128</p>

      <h3>5. Quotiënt van machten</h3>
      <p>Bij delen van machten met hetzelfde niet-nul grondtal trek je de exponenten af:</p>
      <p class="formula">aᵐ/aⁿ = aᵐ⁻ⁿ</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">5⁶/5² = 5⁴</p>

      <h3>6. Een macht van een macht</h3>
      <p class="formula">(aᵐ)ⁿ = aᵐⁿ</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">(3²)³ = 3⁶ = 729</p>

      <h3>7. Macht van een product en quotiënt</h3>
      <p class="formula">(ab)ⁿ = aⁿbⁿ</p>
      <p class="formula">(a/b)ⁿ = aⁿ/bⁿ</p>
      <p>Deze regels helpen om ingewikkelde uitdrukkingen op te splitsen.</p>

      <h3>8. Wetenschappelijke notatie</h3>
      <p>Voor zeer grote of zeer kleine getallen is wetenschappelijke notatie handig:</p>
      <p class="formula">a × 10ⁿ &nbsp; met &nbsp; 1 ≤ |a| &lt; 10</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">63 000 = 6,3 × 10⁴</p>
      <p>en:</p>
      <p class="formula">0,00045 = 4,5 × 10⁻⁴</p>

      <h3>9. Wortels</h3>
      <p>De vierkantswortel van een niet-negatief getal is het niet-negatieve getal waarvan het kwadraat het oorspronkelijke getal is:</p>
      <p class="formula">√81 = 9 &nbsp; omdat &nbsp; 9² = 81</p>
      <p>Let op:</p>
      <p class="formula">√(9) = 3, &nbsp; maar de oplossingen van x² = 9 zijn x = ±3.</p>
      <p>De wortelnotatie √9 verwijst dus naar de <strong>hoofdwortel</strong>, niet naar beide oplossingen.</p>

      <h3>10. Kubuswortel</h3>
      <p>De derdemachtswortel werkt ook voor negatieve getallen:</p>
      <p class="formula">∛27 = 3 &nbsp;&nbsp; en &nbsp;&nbsp; ∛(−8) = −2</p>

      <h3>11. Wortels vereenvoudigen</h3>
      <p>Als een factor een perfect kwadraat is, kun je die buiten de wortel halen:</p>
      <p class="formula">√72 = √(36 × 2) = 6√2</p>
      <p>De eigenschappen:</p>
      <p class="formula">√(ab) = √a × √b</p>
      <p>en, voor b &gt; 0:</p>
      <p class="formula">√(a/b) = √a/√b</p>

      <h3>12. Een belangrijke valkuil</h3>
      <p>Je mag een wortel niet over een som splitsen:</p>
      <p class="formula">√(a + b) ≠ √a + √b</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">√25 = 5</p>
      <p>maar:</p>
      <p class="formula">√9 + √16 = 3 + 4 = 7</p>
      <p>Dus √(9 + 16) = 5 en niet 7.</p>

      <h3>13. Rationele en irrationale getallen</h3>
      <p>Een rationaal getal kan als breuk van gehele getallen worden geschreven. Sommige getallen kunnen dat niet.</p>
      <p>Een klassiek voorbeeld is:</p>
      <p class="formula">√2</p>
      <p>√2 heeft geen eindige of zich herhalende decimale schrijfwijze en kan niet als a/b met gehele a en b worden geschreven. Het is dus <strong>irrationaal</strong>.</p>

      <h3>14. De reële getallen</h3>
      <p>De rationale en irrationale getallen samen vormen de <strong>reële getallen</strong>:</p>
      <p class="formula">ℝ = rationale getallen ∪ irrationale getallen</p>
      <p>We hebben nu:</p>
      <p class="formula">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</p>

      <h3>15. Wortels schatten</h3>
      <p>Je hoeft een wortel niet altijd exact te kennen. Omdat:</p>
      <p class="formula">25 &lt; 30 &lt; 36</p>
      <p>volgt:</p>
      <p class="formula">5 &lt; √30 &lt; 6</p>
      <p>Zo kun je ook de grootte van irrationale getallen inschatten.</p>

      <h3>16. Afronden en schatten</h3>
      <p>Een reële waarde kan benaderd worden. Bijvoorbeeld:</p>
      <p class="formula">√2 ≈ 1,414</p>
      <p>Het teken ≈ betekent “ongeveer gelijk aan”. Een benadering is geen exacte gelijkheid.</p>

      <h3>17. De grote ontwikkeling van de getallen</h3>
      <p>De geschiedenis van het getallensysteem volgt een logisch patroon:</p>
      <ul>
        <li>ℕ is te klein voor bijvoorbeeld 3 − 5;</li>
        <li>ℤ is te klein voor bijvoorbeeld 1 ÷ 2;</li>
        <li>ℚ is te klein voor bijvoorbeeld √2;</li>
        <li>ℝ bevat zowel rationale als irrationale getallen.</li>
      </ul>
      <p>Nieuwe getallen ontstaan dus niet zomaar: ze lossen problemen op die met het vorige systeem niet konden worden opgelost.</p>
    `,
    practice: [
      { id: "p15-1", prompt: "5³", accept: ["125"] },
      { id: "p15-2", prompt: "2⁵ × 2³", accept: ["256"] },
      { id: "p15-3", prompt: "(3²)³", accept: ["729"] },
      { id: "p15-4", prompt: "5⁶ ÷ 5²", accept: ["625"] },
      { id: "p15-5", prompt: "Bereken 2⁻³.", accept: ["1/8", "0,125", "0.125"] },
      { id: "p15-6", prompt: "10⁴", accept: ["10000", "10 000"] },
      { id: "p15-7", prompt: "Schrijf 63 000 in wetenschappelijke notatie.", accept: ["6,3×10⁴", "6.3×10^4", "6,3*10^4"] },
      { id: "p15-8", prompt: "Schrijf 0,00045 in wetenschappelijke notatie.", accept: ["4,5×10⁻⁴", "4.5×10^-4", "4,5*10^-4"] },
      { id: "p15-9", prompt: "√81", accept: ["9"] },
      { id: "p15-10", prompt: "∛(−8)", accept: ["-2", "−2"] },
      { id: "p15-11", prompt: "√(4 × 36)", accept: ["12"] },
      { id: "p15-12", prompt: "Vereenvoudig √72.", accept: ["6√2", "6sqrt2"] },
      { id: "p15-13", prompt: "Vereenvoudig √50.", accept: ["5√2", "5sqrt2"] },
      { id: "p15-14", prompt: "Rond 7,458 af op twee decimalen.", accept: ["7,46", "7.46"] },
      { id: "p15-15", prompt: "Tussen welke twee opeenvolgende gehele getallen ligt √20?", accept: ["4 en 5", "4,5"] },
      { id: "p15-16", prompt: "Is √2 rationaal? ja/nee", accept: ["nee"] },
      { id: "p15-17", prompt: "Is √49 rationaal? ja/nee", accept: ["ja"] },
      { id: "p15-18", prompt: "Waar of niet waar: √(9 + 16) = √9 + √16.", type: "choice", choices: ["waar", "niet waar"], accept: ["niet waar"] },
      { id: "p15-19", prompt: "Bereken √25 en vergelijk dit met √9 + √16.", type: "text", accept: ["5 en 7", "5; 7"] },
      { id: "p15-20", prompt: "Waarom is √30 groter dan 5 maar kleiner dan 6?", type: "text", accept: ["omdat 25<30<36", "25<30<36", "5²<30<6²"] },
      { id: "p15-21", prompt: "Welke keten is juist?", type: "choice", choices: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "ℝ ⊂ ℚ ⊂ ℤ ⊂ ℕ", "ℕ ⊂ ℚ ⊂ ℤ ⊂ ℝ"], accept: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ"] },
      { id: "p15-22", prompt: "Is 0,333… rationaal? ja/nee", accept: ["ja"] }
    ],
    exam: [
      { id: "e15-1", prompt: "2³ × 2⁴", accept: ["128"] },
      { id: "e15-2", prompt: "(3²)³", accept: ["729"] },
      { id: "e15-3", prompt: "Bereken 2⁻³.", accept: ["1/8", "0,125", "0.125"] },
      { id: "e15-4", prompt: "Schrijf 4 500 in wetenschappelijke notatie.", accept: ["4,5×10³", "4.5×10^3", "4,5*10^3"] },
      { id: "e15-5", prompt: "√144", accept: ["12"] },
      { id: "e15-6", prompt: "Vereenvoudig √72.", accept: ["6√2", "6sqrt2"] },
      { id: "e15-7", prompt: "∛(−27)", accept: ["-3", "−3"] },
      { id: "e15-8", prompt: "Tussen welke twee opeenvolgende gehele getallen ligt √30?", accept: ["5 en 6"] },
      { id: "e15-9", prompt: "Is √49 rationaal? ja/nee", accept: ["ja"] },
      { id: "e15-10", prompt: "Is √2 rationaal? ja/nee", accept: ["nee"] },
      { id: "e15-11", prompt: "Waarom is √(9 + 16) niet gelijk aan √9 + √16?", type: "text", accept: ["een wortel mag niet over een som worden verdeeld", "wortels splitsen niet over optellingen", "omdat 5 niet gelijk is aan 7"] },
      { id: "e15-12", prompt: "Welke uitspraak is juist?", type: "choice", choices: ["√20 < 4", "4 < √20 < 5", "√20 > 6"], accept: ["4 < √20 < 5"] },
      { id: "e15-13", prompt: "Welke keten van getallensystemen is juist?", type: "choice", choices: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "ℕ ⊂ ℝ ⊂ ℚ ⊂ ℤ", "ℤ ⊂ ℕ ⊂ ℚ ⊂ ℝ"], accept: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ"] },
      { id: "e15-14", prompt: "Leg kort uit waarom ℚ niet voldoende is om √2 te bevatten.", type: "text", accept: ["√2 is irrationaal", "sqrt2 is irrationaal", "√2 kan niet als breuk van gehele getallen worden geschreven"] }
    ]
  }
];

const PHASE_EXAM_1 = [
  { id: "f1-1", prompt: "738 + 496", accept: ["1234", "1 234"] },
  { id: "f1-2", prompt: "1 002 − 587", accept: ["415"] },
  { id: "f1-3", prompt: "37 × 24", accept: ["888"] },
  { id: "f1-4", prompt: "157 ÷ 12. Quotiënt en rest (bijv. 13 rest 1)", accept: ["13 rest 1", "13 r 1"] },
  { id: "f1-5", prompt: "3 + 7 × 4 − 5", accept: ["26"] },
  { id: "f1-6", prompt: "18 ÷ 3 × 4 + 2", accept: ["26"] },
  { id: "f1-7", prompt: "−8 × (4 − 7)", accept: ["24"] },
  { id: "f1-8", prompt: "−15 + 8 − (−6)", accept: ["-1"] },
  { id: "f1-9", prompt: "2/3 + 3/5", accept: ["19/15"] },
  { id: "f1-10", prompt: "5/6 − 1/4", accept: ["7/12"] },
  { id: "f1-11", prompt: "3/4 × 8/9", accept: ["2/3"] },
  { id: "f1-12", prompt: "3/8 ÷ 9/4", accept: ["1/6"] },
  { id: "f1-13", prompt: "Schrijf 0,375 als vereenvoudigde breuk.", accept: ["3/8"] },
  { id: "f1-14", prompt: "Wat is 17,5% van 80?", accept: ["14"] },
  { id: "f1-15", prompt: "Ontbind 60 in priemfactoren.", accept: ["2²×3×5", "2^2×3×5", "2*2*3*5", "2×2×3×5"] },
  { id: "f1-16", prompt: "GGD(48, 18)", accept: ["6"] },
  { id: "f1-17", prompt: "KGV(48, 18)", accept: ["144"] },
  { id: "f1-18", prompt: "√144", accept: ["12"] },
  { id: "f1-19", prompt: "2³ × 2⁴ (getal)", accept: ["128"] },
  { id: "f1-20", prompt: "Tussen welke gehele getallen ligt √30? (5 en 6)", accept: ["5 en 6", "5,6"] },
  { id: "f1-21", prompt: "Waarom is delen door 0 niet gedefinieerd? Kies.", type: "choice",
    choices: [
      "Omdat 0 oneven is",
      "Omdat 0 × b altijd 0 is, en dus nooit gelijk kan zijn aan een a ≠ 0",
      "Omdat nul geen cijfer is",
      "Omdat rekenmachines het weigeren"
    ],
    accept: ["Omdat 0 × b altijd 0 is, en dus nooit gelijk kan zijn aan een a ≠ 0"] }
];
