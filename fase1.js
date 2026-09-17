/* Lesstof Fase 1 — Rekenkunde. Breid theory/practice/exam hier uit. */
const MILESTONES_1 = [
  {
    id: "1.1",
    title: "Cijfers en Getallen",
    goal: "Onderscheid cijfer en getal, gebruik het tientallig positiestelsel en orden natuurlijke getallen..",
    theory: /* html */`
      <h2>Cijfers en Getallen</h2>
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
        <p><strong>Een cijfer is een teken waarmee we een getal schrijven</strong>, zoals een letter een teken is waarmee we een woord maken.</p>
        
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
        <div class="callout"><strong>Bepalen van de waarde van een cijfer in een getal.</strong> 
          <p>We maken hierbij onderscheid tussen twee dingen:</p>
          <ul>
            <li>De <strong>cijferwaarde</strong> is het cijfer zelf.</li>
            <li>De <strong>plaatswaarde</strong> is wat het cijfer betekent door zijn plaats in het getal.</li>
          </ul>
        </div>
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
      
      <h3>5. Getallen vergelijken</h3>

<p>We kunnen getallen op een <strong>getallenlijn</strong> zetten.</p>

<div data-widget="nats"></div>

<p>Op een getallenlijn geldt:</p>

<ul>
  <li>naar <strong>rechts</strong> → de getallen worden groter;</li>
  <li>naar <strong>links</strong> → de getallen worden kleiner.</li>
</ul>

<p>Bijvoorbeeld:</p>

<p class="formula">3 &lt; 7</p>

<p>We lezen dit als: <strong>3 is kleiner dan 7</strong>.</p>

<p>Het getal 3 staat namelijk links van 7 op de getallenlijn.</p>

<h4>De tekens &lt;, = en &gt;</h4>

<p>Om getallen met elkaar te vergelijken, gebruiken we drie tekens:</p>

<ul>
  <li><strong>&lt;</strong> betekent: kleiner dan</li>
  <li><strong>=</strong> betekent: gelijk aan</li>
  <li><strong>&gt;</strong> betekent: groter dan</li>
</ul>

<p>Bijvoorbeeld:</p>

<p class="formula">4 &lt; 9</p>
<p class="formula">6 = 6</p>
<p class="formula">12 &gt; 5</p>

<p>Let goed op de vorm van het teken. De <strong>puntige kant</strong> wijst altijd naar het kleinste getal.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">3 &lt; 8</p>

<p>De puntige kant van <strong>&lt;</strong> wijst naar 3, omdat 3 het kleinste getal is.</p>

<h4>Grotere getallen vergelijken</h4>

<p>Bij grotere getallen kunnen we niet altijd gemakkelijk naar een getallenlijn kijken. We kunnen de cijfers van de getallen met elkaar vergelijken.</p>

<p>Begin altijd bij het <strong>meest linkse cijfer</strong>.</p>

<p>Bijvoorbeeld: 9 728 en 9 758</p>


<p>We vergelijken eerst de duizendtallen:</p>

<p class="formula">9 = 9</p>

<p>Die zijn gelijk. Daarom kijken we naar de honderdtallen:</p>

<p class="formula">7 = 7</p>

<p>Ook die zijn gelijk. We kijken dus naar de tientallen:</p>

<p class="formula">2 &lt; 5</p>

<p>Daarom is:</p>

<p class="formula">9 728 &lt; 9 758</p>

<p>We vergelijken dus de cijfers <strong>van links naar rechts</strong>, totdat we een verschil vinden.</p>

<h4>Als de getallen niet evenveel cijfers hebben</h4>

<p>Heeft een getal <strong>meer cijfers</strong> dan een ander positief natuurlijk getal, dan is het ook groter.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">840 &lt; 2 840</p>

<p>840 heeft drie cijfers en 2 840 heeft vier cijfers. Daarom is 2 840 groter.</p>

<p>Dit werkt ook bij nog grotere getallen:</p>

<p class="formula">9 999 &lt; 10 000</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Om twee getallen te vergelijken:</p>
  <ol>
    <li>Kijk eerst naar het aantal cijfers.</li>
    <li>Als dat gelijk is, vergelijk je de cijfers van <strong>links naar rechts</strong>.</li>
    <li>Het eerste cijfer dat verschilt, bepaalt welk getal groter is.</li>
  </ol>
</div>
    `   
  },
  
  {
    id: "1.2",
    title: "De vier hoofdbewerkingen",
    goal: "Voer de vier hoofdbewerkingen in ℕ uit en gebruik volgorde, rest en de rekenwetten.",
    theory: /* html */`
      <h2>De vier hoofdbewerkingen</h2>

        <p><strong>Doel:</strong></p>

        <ul>
          <li>leren wat optellen, aftrekken, vermenigvuldigen en delen betekenen;</li>
          <li>de vier bewerkingen leren uitvoeren;</li>
          <li>leren rekenen met grotere getallen;</li>
          <li>de rekenwetten en de volgorde van rekenen;</li>
          <li>ontdekken welke rol 0 speelt bij het rekenen.</li>
        </ul>
       
        <h3>1. Optellen</h3>

        <p>Met <strong>optellen</strong> voegen we hoeveelheden samen.</p>

        <p>Bijvoorbeeld: je hebt 7 appels en krijgt er 5 bij.</p>

        <p>Dan heb je:</p>

        <p class="formula">7 + 5 = 12</p>

        <p>Je hebt nu 12 appels.</p>

        <p>De getallen die we optellen noemen we de <strong>termen</strong>. Het antwoord noemen we de <strong>som</strong>.</p>

        <p>In:</p>

        <p class="formula">7 + 5 = 12</p>

        <ul>
          <li>7 en 5 zijn de <strong>termen</strong>;</li>
          <li>12 is de <strong>som</strong>.</li>
        </ul>

        <h4>Optellen op de getallenlijn</h4>

        <p>We kunnen optellen ook voorstellen op een getallenlijn.</p>

        <p>Bijvoorbeeld bij <strong>7 + 5</strong>:</p>

        <p>We beginnen bij 7 en gaan 5 plaatsen naar rechts.</p>

        <div data-widget="nats"></div>

        <p>We komen uit bij 12.</p>

        <p>Dus:</p>

        <p class="formula">7 + 5 = 12</p>

        <h4>Optellen met 0</h4>

        <p>Als je 0 bij een getal optelt, verandert het getal niet.</p>

        <p>Bijvoorbeeld:</p>

        <p class="formula">8 + 0 = 8</p>

        <p class="formula">25 + 0 = 25</p>

        <p class="formula">1 437 + 0 = 1 437</p>

        <p>We noemen 0 daarom het <strong>neutrale element van de optelling</strong>.</p>


        <h3>2. Schriftelijk optellen</h3>

        <p>Bij kleine getallen kunnen we gemakkelijk uit het hoofd optellen. Bij grotere getallen is het handig om de getallen <strong>onder elkaar</strong> te schrijven.</p>

        <p>We zorgen ervoor dat dezelfde posities onder elkaar staan.</p>

        <p>In de tabel gaan we voor elk getal opschijven wat de waarde is van de eenheden, tientallen, hondertalle en duidendtallen</p>
        <P>We bekijken het voorbeeld:</P>
        <p class="formula">738 + 496</p>
        
        <table>
          <tr>
            <th></th>
            <th>Duizendtallen</th>
            <th>Honderdtallen</th>
            <th>Tientallen</th>
            <th>Eenheden</th>
          </tr>
          <tr>
            <th>738</th>
            <td>0</td>
            <td>7</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <th>496</th>
            <td>0</td>
            <td>4</td>
            <td>9</td>
            <td>6</td>
          </tr>
        </table>

        <p>We tellen de kolommen op. We beginnen <strong>rechts bij de eenheden</strong>.</p>

        <h4>Stap 1: de eenheden</h4>

        <p>We rekenen:</p>

        <p class="formula">8 + 6 = 14</p>

        <p>We schrijven de <strong>4 eenheden</strong> op. De 1 staat voor <strong>1 tiental</strong>. Die nemen we mee naar de volgende kolom.</p>

        <table>
          <tr>
            <th></th>
            <th>Duizendtallen</th>
            <th>Honderdtallen</th>
            <th>Tientallen</th>
            <th>Eenheden</th>
          </tr>
          <tr>
            <th>738</th>
            <td>0</td>
            <td>7</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <th>496</th>
            <td>0</td>
            <td>4</td>
            <td>9</td>
            <td>6</td>
          </tr>
          <tr>
            <th>Resultaat</th>
            <td></td>
            <td></td>
            <td>1</td>
            <td>4</td>
          </tr>
        </table>

        <h4>Stap 2: de tientallen</h4>

        <p>We rekenen de tientallen op, inclusief het tiental dat we meenemen:</p>

        <p class="formula">3 + 9 + 1 = 13</p>

        <p>We schrijven de <strong>3 tientallen</strong> op en nemen <strong>1 honderdtal</strong> mee.</p>

        <table>
          <tr>
            <th></th>
            <th>Duizendtallen</th>
            <th>Honderdtallen</th>
            <th>Tientallen</th>
            <th>Eenheden</th>
          </tr>
          <tr>
            <th>738</th>
            <td>0</td>
            <td>7</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <th>496</th>
            <td>0</td>
            <td>4</td>
            <td>9</td>
            <td>6</td>
          </tr>
          <tr>
            <th>Resultaat</th>
            <td></td>
            <td>1</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </table>

        <h4>Stap 3: de honderdtallen</h4>

        <p>We rekenen:</p>

        <p class="formula">7 + 4 + 1 = 12</p>

        <p>We schrijven de <strong>2 honderdtallen</strong> op en nemen <strong>1 duizendtal</strong> mee.</p>

        <h4>Stap 4: de duizendtallen</h4>

        <p>Er zijn geen duizendtallen in 738 en 496. We hebben alleen het duizendtal dat we meenemen:</p>

        <p class="formula">1</p>

        <p>Het resultaat is dus:</p>

        <table>
          <tr>
            <th></th>
            <th>Duizendtallen</th>
            <th>Honderdtallen</th>
            <th>Tientallen</th>
            <th>Eenheden</th>
          </tr>
          <tr>
            <th>738</th>
            <td>0</td>
            <td>7</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <th>496</th>
            <td>0</td>
            <td>4</td>
            <td>9</td>
            <td>6</td>
          </tr>
          <tr>
            <th>Som</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </table>

        <p>Dus:</p>

        <p class="formula">738 + 496 = 1 234</p>

        <div class="callout">
          <p><strong>Onthoud:</strong></p>
          <ul>
            <li>Schrijf de getallen netjes onder elkaar.</li>
            <li>Eenheden komen onder eenheden, tientallen onder tientallen, enzovoort.</li>
            <li>Begin bij de <strong>eenheden</strong>, dus rechts.</li>
            <li>Is een kolom 10 of groter? Schrijf de eenheden op en neem het tiental mee naar de volgende kolom.</li>
          </ul>
        </div>

      <h3>3. Aftrekken</h3>

<p>Met <strong>aftrekken</strong> halen we een hoeveelheid weg van een andere hoeveelheid.</p>

<p>Bijvoorbeeld: je hebt 12 appels en geeft er 5 weg.</p>

<p>Dan blijven er over:</p>

<p class="formula">12 − 5 = 7</p>

<p>We noemen 7 het <strong>verschil</strong>.</p>

<h4>Aftrekken en optellen horen bij elkaar</h4>

<p>Optellen en aftrekken zijn elkaars <strong>omgekeerde bewerkingen</strong>.</p>

<p>Als:</p>

<p class="formula">12 − 5 = 7</p>

<p>dan moet je met optellen weer bij 12 uitkomen:</p>

<p class="formula">7 + 5 = 12</p>

<p>Je kunt een aftrekking dus controleren met een optelling.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">17 − 9 = 8</p>

<p>Controle:</p>

<p class="formula">8 + 9 = 17</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Bij een aftrekking kun je je antwoord controleren door het verschil en het getal dat je hebt afgetrokken weer op te tellen.</p>
</div>


<h3>4. Schriftelijk aftrekken</h3>

<p>Bij grote getallen is het handig om de getallen <strong>onder elkaar</strong> te schrijven.</p>

<p>Net als bij optellen zorgen we ervoor dat dezelfde posities onder elkaar staan.</p>

<p>We bekijken het voorbeeld:</p>

<p class="formula">1 234 − 738</p>

<table>
  <tr>
    <th></th>
    <th>Duizendtallen</th>
    <th>Honderdtallen</th>
    <th>Tientallen</th>
    <th>Eenheden</th>
  </tr>
  <tr>
    <th>1 234</th>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <th>- 738</th>
    <td>0</td>
    <td>7</td>
    <td>3</td>
    <td>8</td>
  </tr>
</table>

<p>We beginnen, net als bij optellen, <strong>rechts bij de eenheden</strong>.</p>

<h4>Stap 1: de eenheden</h4>

<p>We moeten 8 eenheden aftrekken van 4 eenheden:</p>

<p class="formula">4 − 8</p>

<p>Dat kan niet met alleen de 4 eenheden. We hebben daarom extra eenheden nodig.</p>

<p>We kunnen <strong>1 tiental omwisselen voor 10 eenheden</strong>.</p>

<p>Er staan 3 tientallen bij 1 234</p>

<p>Als we een tien gaan omzetten en bij de eenheden gaan zetten zullen er nog 2 tientallen overblijven:</p>

<table>
  <tr>
    <th></th>
    <th>Duizendtallen</th>
    <th>Honderdtallen</th>
    <th>Tientallen</th>
    <th>Eenheden</th>
  </tr>
  <tr>
    <th>1 234</th>
    <td>1</td>
    <td>2</td>
    <td>2</td>
    <td>14</td>
  </tr>
  <tr>
    <th>− 738</th>
    <td>0</td>
    <td>7</td>
    <td>3</td>
    <td>8</td>
  </tr>
</table>

<p>Nu kunnen we de eenheden aftrekken:</p>

<p class="formula">14 − 8 = 6</p>

<h4>Stap 2: de tientallen</h4>

<p>We hebben 2 tientallen en moeten er 3 aftrekken:</p>

<p class="formula">2 − 3</p>

<p>Dat kan niet met alleen de 2 tientallen. We hebben daarom extra tientallen nodig.</p>

<p>We kunnen <strong>1 honderdtal omwisselen voor 10 tientallen</strong>.</p>

<p>Er staan 2 honderdtallen bij 1 234</p>

<p>Als we een honderd gaan omzetten en bij de tientallen gaan zetten, zal er nog 1 honderdtal overblijven:</p>
<table>
  <tr>
    <th></th>
    <th>Duizendtallen</th>
    <th>Honderdtallen</th>
    <th>Tientallen</th>
    <th>Eenheden</th>
  </tr>
  <tr>
    <th>1 234</th>
    <td>1</td>
    <td>1</td>
    <td>12</td>
    <td>14</td>
  </tr>
  <tr>
    <th>− 738</th>
    <td>0</td>
    <td>7</td>
    <td>3</td>
    <td>8</td>
  </tr>
</table>

<p>Nu kunnen we de tientallen aftrekken:</p>
<p class="formula">12 − 3 = 9</p>

<h4>Stap 3: de honderdtallen</h4>

<p>We hebben nog 1 honderdtal en moeten er 7 aftrekken:</p>

<p class="formula">1 − 7</p>

<p>Dat kan niet met alleen 1 honderdtal. We hebben daarom extra honderdtallen nodig.</p>

<p>We kunnen <strong>1 duidendtal omwisselen voor 10 honderdtallen</strong>.</p>

<p>Er staat 1 duidendtal bij 1 234</p>

<p>Als we een duizend gaan omzetten en bij de honderdtallen gaan zetten, zal er nog 0 duidendtal overblijven:</p>
<table>
  <tr>
    <th></th>
    <th>Duizendtallen</th>
    <th>Honderdtallen</th>
    <th>Tientallen</th>
    <th>Eenheden</th>
  </tr>
  <tr>
    <th>1 234</th>
    <td>0</td>
    <td>11</td>
    <td>12</td>
    <td>14</td>
  </tr>
  <tr>
    <th>− 738</th>
    <td>0</td>
    <td>7</td>
    <td>3</td>
    <td>8</td>
  </tr>
</table>

<p>Nu kunnen we de honderdtallen aftrekken:</p>
<p class="formula">11 − 7 = 4</p>


<h4>Stap 4: de duizendtallen</h4>

<p>We hebben het enige duizendtal gebruikt om 10 honderdtallen te maken.</p>

<p>Er blijven dus geen duizendtallen over.</p>

<p>Het antwoord is:</p>

<table>
  <tr>
    <th></th>
    <th>Duizendtallen</th>
    <th>Honderdtallen</th>
    <th>Tientallen</th>
    <th>Eenheden</th>
  </tr>
  <tr>
    <th>1 234</th>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <th>− 738</th>
    <td></td>
    <td>7</td>
    <td>3</td>
    <td>8</td>
  </tr>
  <tr>
    <th>Verschil</th>
    <td></td>
    <td>4</td>
    <td>9</td>
    <td>6</td>
  </tr>
</table>

<p>Dus:</p>

<p class="formula">1 234 − 738 = 496</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <ul>
    <li>Schrijf de getallen netjes onder elkaar.</li>
    <li>Begin rechts bij de eenheden.</li>
    <li>Kun je een cijfer niet aftrekken? Wissel dan één eenheid van de volgende positie om voor 10 eenheden.</li>
    <li>Staat daar een 0? Ga verder naar links tot je een positie vindt waar je iets kunt omwisselen.</li>
    <li>Controleer je antwoord eventueel met een optelling.</li>
  </ul>

</div>
      <h3>5. Vermenigvuldigen</h3>

<p>Met <strong>vermenigvuldigen</strong> kunnen we meerdere gelijke hoeveelheden snel samenrekenen.</p>

<p>Bijvoorbeeld: je hebt 4 groepjes van 3 appels.</p>

<p>Dat is hetzelfde als:</p>

<p class="formula">3 + 3 + 3 + 3 = 12</p>

<p>In plaats van vier keer 3 op te tellen, kunnen we schrijven:</p>

<p class="formula">4 × 3 = 12</p>

<p>We lezen dit als: <strong>4 keer 3 is 12</strong>.</p>

<h4>Vermenigvuldigen als groepjes</h4>

<p>Bij <strong>4 × 3</strong> hebben we:</p>

<ul>
  <li><strong>4</strong> gelijke groepjes;</li>
  <li>in elk groepje zitten <strong>3</strong> dingen.</li>
</ul>
<div data-widget="groups"></div>

<p>Dus:</p>

<p class="formula">4 × 3 = 12</p>

<p>Vermenigvuldigen kunnen we ook gebruiken om een hoeveelheid groter te maken.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">5 × 10 = 50</p>

<p>5 wordt hier tien keer zo groot.</p>

<h4>Vermenigvuldigen met 0</h4>

<p>Als we een getal met 0 vermenigvuldigen, krijgen we altijd 0.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">7 × 0 = 0</p>

<p class="formula">125 × 0 = 0</p>

<p>Dit komt overeen met het idee van groepjes: 0 groepjes van iets bevat helemaal niets.</p>

<h4>Vermenigvuldigen met 1</h4>

<p>Als we een getal met 1 vermenigvuldigen, verandert het getal niet.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">8 × 1 = 8</p>

<p class="formula">43 × 1 = 43</p>

<p>Er is maar één groepje, dus de hoeveelheid blijft hetzelfde.</p>

<h4>Vermenigvuldigen met 10</h4>

<p>Als we een getal met 10 vermenigvuldigen, wordt elke plaatswaarde 10 keer groter.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">7 × 10 = 70</p>

<p class="formula">23 × 10 = 230</p>

<p>Je ziet dat de cijfers één plaats naar links opschuiven.</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Vermenigvuldigen betekent dat we gelijke hoeveelheden combineren of een hoeveelheid meerdere keren nemen.</p>
  <p>Bijzonder belangrijk:</p>
  <p class="formula">getal × 0 = 0</p>
</div>


<h3>6. Eenvoudige tafels</h3>

<p>Nu we begrijpen wat vermenigvuldigen betekent, kunnen we de eenvoudigste vermenigvuldigingen oefenen.</p>

<p>De tafels van 1 tot en met 10 zijn belangrijk om vlot te kunnen rekenen. Het doel is dat eenvoudige vermenigvuldigingen na verloop van tijd bijna automatisch komen.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">2 × 4 = 8</p>
<p class="formula">3 × 5 = 15</p>
<p class="formula">7 × 2 = 14</p>

<p>Je kunt een tafel ook zien als een reeks gelijke sprongen:</p>

<p class="formula">
  4 × 3 = 3 + 3 + 3 + 3 = 12
</p>

<p>Maar als je de tafels goed kent, hoef je niet telkens opnieuw op te tellen. Je weet dan meteen dat:</p>

<p class="formula">
  4 × 3 = 12
</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>De tafels vormen de basis voor moeilijkere vermenigvuldigingen.</p>
</div>


<h3>7. Slim rekenen met vermenigvuldigen</h3>

<p>Je hoeft niet elke vermenigvuldiging uit het hoofd te kennen. Vaak kun je een moeilijke vermenigvuldiging veranderen in een paar eenvoudige vermenigvuldigingen.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">
  6 × 7
</p>

<p>Als je weet dat <strong>6 × 5 = 30</strong>, kun je verder rekenen:</p>

<div data-widget="smartmult"></div>

<p class="formula">
  6 × 7 = 6 × 5 + 6 × 2
</p>

<p>Dus:</p>

<p class="formula">
  30 + 12 = 42
</p>

<p>Daarom is:</p>

<p class="formula">
  6 × 7 = 42
</p>

<h4>Een getal opsplitsen</h4>

<p>Hetzelfde idee werkt met grotere getallen. Stel dat je <strong>7 × 13</strong> wilt berekenen.</p>

<p>13 kunnen we opsplitsen in 10 en 3:</p>

<p class="formula">
  13 = 10 + 3
</p>

<p>Dan rekenen we:</p>

<p class="formula">
  7 × 13 = 7 × 10 + 7 × 3
</p>

<p>Dat geeft:</p>

<p class="formula">
  70 + 21 = 91
</p>

<p>Dus:</p>

<p class="formula">
  7 × 13 = 91
</p>

<h4>Een handige vermenigvuldiging zoeken</h4>

<p>Je kunt soms ook een vermenigvuldiging kiezen die je al goed kent.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">
  8 × 9
</p>

<p>Je weet misschien dat <strong>8 × 10 = 80</strong>. Eén groepje van 8 te veel kunnen we er weer aftrekken:</p>

<p class="formula">
  8 × 9 = 8 × 10 − 8
</p>

<p class="formula">
  80 − 8 = 72
</p>

<p>Dus:</p>

<p class="formula">
  8 × 9 = 72
</p>

<div class="callout">
  <p><strong>Belangrijk inzicht:</strong></p>
  <p>Een moeilijke vermenigvuldiging kun je vaak veranderen in eenvoudige vermenigvuldigingen die je al kent.</p>
  <p>Je kunt bijvoorbeeld een getal opsplitsen:</p>
  <p class="formula">7 × 13 = 7 × 10 + 7 × 3</p>
  <p>Of vertrekken van een bekende vermenigvuldiging:</p>
  <p class="formula">8 × 9 = 8 × 10 − 8</p>
  <p><strong>Goed rekenen betekent dus niet alleen veel uit het hoofd kennen, maar ook slimme strategieën gebruiken.</strong></p>
</div>

<h3>8. Delen</h3>

<p>Delen is het verdelen van een aantal in <strong>gelijke groepen</strong>. Het is de omgekeerde bewerking van vermenigvuldigen.</p>

<p>Stel dat we 12 appels eerlijk willen verdelen over 3 personen. Iedere persoon krijgt dan evenveel appels:</p>

<p class="formula">12 ÷ 3 = 4</p>

<p>Iedere persoon krijgt dus 4 appels.</p>

<p>We kunnen dezelfde situatie ook bekijken vanuit het aantal groepjes. Hoeveel groepjes van 3 kunnen we maken met 12 voorwerpen?</p>

<p class="formula">12 ÷ 3 = 4</p>

<p>Ook hier is het antwoord 4. Daarom kunnen we delen op twee manieren begrijpen:</p>

<ul>
  <li><strong>Verdelen:</strong> 12 voorwerpen verdelen over 3 gelijke groepen geeft 4 per groep.</li>
  <li><strong>Groepjes maken:</strong> hoeveel groepjes van 3 passen er in 12? Dat zijn er 4.</li>
</ul>

<div data-widget="divisionGroups"></div>

<h4>Delen en vermenigvuldigen horen bij elkaar</h4>

<p>Delen en vermenigvuldigen zijn omgekeerde bewerkingen.</p>

<p>Als:</p>

<p class="formula">3 × 4 = 12</p>

<p>dan weten we ook:</p>

<p class="formula">12 ÷ 3 = 4</p>

<p>en:</p>

<p class="formula">12 ÷ 4 = 3</p>

<p>Je kunt een deling daarom controleren met een vermenigvuldiging.</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Delen betekent een hoeveelheid eerlijk verdelen of bepalen hoeveel gelijke groepjes erin passen.</p>
  <p>Vermenigvuldigen en delen zijn omgekeerde bewerkingen:</p>
  <p class="formula">3 × 4 = 12</p>
  <p class="formula">12 ÷ 3 = 4</p>
  <p class="formula">12 ÷ 4 = 3</p>
</div>

<h3>9. Delen met rest</h3>

<p>Niet elke hoeveelheid kan precies in gelijke groepen worden verdeeld.</p>

<p>Stel dat we <strong>14 voorwerpen</strong> willen verdelen in groepjes van <strong>4</strong>.</p>
<p class="formula">14 ÷ 4</p>

<p>We kunnen drie volledige groepjes maken, namelijk :</p>
<p class="formula">3 × 4 = 12</p>

<p>Vier groepjes van vier zou niet gaan, want dan moeten we 16 voorwerpen hebben:</p>
<p class="formula">4 × 4 = 16</p>

<p>Dus we kiezen voor 3 groepjes van 4.</p> 
<p>Maar dan blijven er nog 2 voorwerpen over. Dit is de rest.</p>

<div data-widget="divisionRemainder"></div>

<p>Het getal <strong>3</strong> noemen we het <strong>quotiënt</strong>. Het vertelt hoeveel volledige groepjes we kunnen maken.</p>

<p>Het getal <strong>2</strong> noemen we de <strong>rest</strong>. Dat zijn de voorwerpen die niet meer in een volledig groepje passen.</p>

<h4>De deling controleren</h4>

<p>Een deling met rest kunnen we altijd controleren met een vermenigvuldiging.</p>

<p>Bij <strong>14 ÷ 4 = 3 rest 2</strong> geldt:</p>

<p class="formula">3 × 4 + 2 = 14</p>

<p>De algemene vorm is:</p>

<p class="formula">a = q × d + r</p>

<p>Hierbij is <strong>a</strong> het getal dat we delen, <strong>q</strong> het quotiënt, <strong>d</strong> de deler en <strong>r</strong> de rest.</p>

<p>De rest is altijd kleiner dan de deler. Anders zouden we nog een extra volledig groepje kunnen maken.</p>

<p class="formula">0 ≤ r &lt; d</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Bij een deling met rest maken we eerst zoveel mogelijk volledige groepjes.</p>
  <p>Wat overblijft, is de rest.</p>
</div>


<h3>10. Slim delen</h3>

<p>Een deling met grotere getallen lijkt soms moeilijk. Maar net zoals bij vermenigvuldigen kunnen we een getal vaak <strong>opsplitsen in eenvoudigere delen</strong>.</p>
<p>In deze eerste kennismaking met slim delen gebruiken we alleen voorbeelden waarbij de getallen <strong>zonder rest</strong> deelbaar zijn. Als er een rest ontstaat, gebruiken we de methode van <em>delen met rest</em> die we eerder hebben geleerd.</p>
<p>Stel dat we willen berekenen:</p>

<p class="formula">84 ÷ 4</p>

<p>We kunnen 84 opsplitsen in 80 en 4:</p>

<p class="formula">84 = 80 + 4</p>

<p>Nu kunnen we beide delen afzonderlijk delen door 4:</p>

<p class="formula">80 ÷ 4 = 20</p>

<p class="formula">4 ÷ 4 = 1</p>

<p>Dus:</p>

<p class="formula">84 ÷ 4 = 20 + 1 = 21</p>

<h4>Een handige splitsing zoeken</h4>

<p>Je kunt een getal op verschillende manieren opsplitsen. Kies bij voorkeur een splitsing waardoor de afzonderlijke delingen gemakkelijk worden.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">96 ÷ 3</p>

<p>We kunnen 96 opsplitsen in 90 en 6:</p>

<p class="formula">96 = 90 + 6</p>

<p>Daarna:</p>

<p class="formula">90 ÷ 3 = 30</p>

<p class="formula">6 ÷ 3 = 2</p>

<p>Dus:</p>

<p class="formula">96 ÷ 3 = 30 + 2 = 32</p>

<p>Een andere handige strategie is vertrekken van een getal dat je gemakkelijk kunt delen.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">120 ÷ 6</p>

<p>Omdat 12 ÷ 6 = 2, weten we meteen dat:</p>

<p class="formula">120 ÷ 6 = 20</p>

<div class="callout">
  <p><strong>Belangrijk inzicht:</strong></p>
  <p>Bij een moeilijke deling kun je vaak een getal opsplitsen in delen die je gemakkelijk kunt delen.</p>
  <p class="formula">84 ÷ 4 = 80 ÷ 4 + 4 ÷ 4</p>
  <p class="formula">= 20 + 1 = 21</p>
  <p>Goed rekenen betekent dus niet alleen een vaste methode volgen. Je kunt ook zoeken naar een slimme manier om een berekening eenvoudiger te maken.</p>
</div>



<h3>11. Delen door nul</h3>

<p>Bij delen vragen we ons af: <strong>hoeveel groepjes van de deler passen in het getal?</strong></p>

<p>Bijvoorbeeld:</p>

<p class="formula">6 ÷ 2 = 3</p>

<p>Er passen precies 3 groepjes van 2 in 6.</p>

<p>Maar wat gebeurt er bij:</p>

<p class="formula">6 ÷ 0</p>

<p>Dan zouden we moeten zoeken hoeveel groepjes van 0 samen 6 vormen.</p>

<p>Maar hoeveel groepjes van 0 we ook nemen, we krijgen altijd 0:</p>

<p class="formula">1 × 0 = 0</p>

<p class="formula">100 × 0 = 0</p>

<p class="formula">1 000 000 × 0 = 0</p>

<p>We kunnen dus nooit 6 krijgen door een getal met 0 te vermenigvuldigen.</p>

<p>Daarom bestaat er geen getal dat voldoet aan:</p>

<p class="formula">6 ÷ 0 = ?</p>

<div data-widget="divisionZero"></div>

<h4>En wat met 0 ÷ 0?</h4>

<p>Dit geval is anders. We zoeken nu een getal dat voldoet aan:</p>

<p class="formula">0 ÷ 0 = ?</p>

<p>Als we dit controleren met een vermenigvuldiging, krijgen we:</p>

<p class="formula">? × 0 = 0</p>

<p>Maar dat klopt voor <strong>elk</strong> getal:</p>

<p class="formula">1 × 0 = 0</p>

<p class="formula">5 × 0 = 0</p>

<p class="formula">100 × 0 = 0</p>

<p>Er is dus niet één uniek antwoord.</p>

<p>Daarom is ook <strong>0 ÷ 0 niet gedefinieerd</strong>.</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Delen door nul is niet gedefinieerd.</p>
  <p>Bij <strong>6 ÷ 0</strong> bestaat er geen oplossing.</p>
  <p>Bij <strong>0 ÷ 0</strong> zijn er oneindig veel mogelijke oplossingen, en dus geen uniek antwoord.</p>
</div>

<h3>12. Commutatieve eigenschap</h3>

<p>Bij vermenigvuldigen maakt de volgorde van de getallen niet uit.</p>

<p>Neem bijvoorbeeld:</p>

<p class="formula">3 × 4 = 12</p>

<p>Dit betekent: 3 groepjes van 4. Maar we kunnen dezelfde 12 voorwerpen ook anders ordenen: 4 groepjes van 3.</p>

<p class="formula">4 × 3 = 12</p>

<div data-widget="commutative"></div>

<p>We hebben dus:</p>

<p class="formula">3 × 4 = 4 × 3</p>

<p>Dit noemen we de <strong>commutatieve eigenschap</strong> van de vermenigvuldiging.</p>

<p>In het algemeen geldt:</p>

<p class="formula">a × b = b × a</p>

<h4>Niet elke bewerking is commutatief</h4>

<p>Bij aftrekken en delen maakt de volgorde wel uit.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">8 − 3 = 5</p>

<p class="formula">3 − 8 = −5</p>

<p>Dus:</p>

<p class="formula">8 − 3 ≠ 3 − 8</p>

<p>Ook bij delen geldt:</p>

<p class="formula">12 ÷ 3 = 4</p>

<p class="formula">3 ÷ 12 = 0,25</p>

<p>Daarom zijn aftrekken en delen <strong>niet commutatief</strong>.</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Bij optellen en vermenigvuldigen mag je de volgorde verwisselen.</p>
  <p class="formula">a + b = b + a</p>
  <p class="formula">a × b = b × a</p>
  <p>Bij aftrekken en delen mag dat niet zomaar.</p>
</div>

<h3>13. Haakjes</h3>


<p>Haakjes geven aan dat de berekening die ertussen staat, als één geheel moet worden bekeken.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">(2 + 3) × 4</p>

<p>We rekenen eerst uit wat tussen de haakjes staat:</p>

<p class="formula">2 + 3 = 5</p>

<p>Daarna vermenigvuldigen we met 4:</p>

<p class="formula">5 × 4 = 20</p>

<p>Dus:</p>

<p class="formula">(2 + 3) × 4 = 20</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Haakjes geven aan welke berekening eerst moet worden uitgevoerd.</p>
</div>

<h4>Waarom zijn haakjes belangrijk?</h4>

<p>Zonder haakjes kan dezelfde getallencombinatie een andere uitkomst geven.</p>

<p>Vergelijk:</p>

<p class="formula">2 + 3 × 4</p>

<p>met:</p>

<p class="formula">(2 + 3) × 4</p>

<p>Bij de eerste berekening doen we eerst de vermenigvuldiging:</p>

<p class="formula">2 + 12 = 14</p>

<p>Bij de tweede berekening zorgen de haakjes ervoor dat we eerst optellen:</p>

<p class="formula">5 × 4 = 20</p>

<p>Dus:</p>

<p class="formula">2 + 3 × 4 = 14</p>

<p class="formula">(2 + 3) × 4 = 20</p>


<h3>14. Associatieve eigenschap</h3>

<p>Bij optellen en vermenigvuldigen kunnen we niet alleen de volgorde veranderen. We kunnen ook bepalen <strong>welke getallen we eerst samen nemen</strong>.</p>

<p>Neem bijvoorbeeld:</p>

<p class="formula">2 + 3 + 4</p>

<p>We kunnen eerst 2 en 3 optellen. Dit gaan we aanduiden met haakjes:</p>

<p class="formula">(2 + 3) + 4 = 9</p>

<p>Maar we kunnen ook eerst 3 en 4 optellen:</p>

<p class="formula">2 + (3 + 4) = 9</p>

<p>Het antwoord blijft hetzelfde.</p>

<div data-widget="associative"></div>

<p>We kunnen dus schrijven:</p>

<p class="formula">(a + b) + c = a + (b + c)</p>

<p>Dit noemen we de <strong>associatieve eigenschap</strong> van de optelling.</p>

<h4>Ook bij vermenigvuldigen</h4>

<p>Dezelfde eigenschap geldt voor vermenigvuldigen.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">(2 × 3) × 4 = 24</p>

<p>Maar:</p>

<p class="formula">2 × (3 × 4) = 24</p>

<p>Dus:</p>

<p class="formula">(a × b) × c = a × (b × c)</p>

<p>Ook bij vermenigvuldigen maakt de groepering dus niet uit.</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>De haakjes geven aan welke getallen we eerst samen nemen.</p>
  <p>De <strong>associatieve eigenschap</strong> betekent dat je bij optellen en vermenigvuldigen de getallen anders mag groeperen zonder het antwoord te veranderen.</p>

  <p class="formula">(a + b) + c = a + (b + c)</p>

  <p class="formula">(a × b) × c = a × (b × c)</p>
</div>

<h3>15. Distributieve eigenschap</h3>

<p>Bij <strong>slim rekenen met vermenigvuldigen</strong> hebben we al gezien dat we een vermenigvuldiging kunnen opsplitsen in eenvoudigere delen.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">7 × 13 = (7 × 10) + (7 × 3)</p>

<p>We hebben 13 dus opgesplitst in 10 en 3:</p>

<p class="formula">13 = 10 + 3</p>

<p>Dit is geen toevallige rekenhandigheid. Het is een belangrijk wiskundig principe. We geven dit principe de naam <strong>distributieve eigenschap</strong>.</p>

<h4>Vermenigvuldigen over een optelling</h4>

<p>Een vermenigvuldiging mag worden verdeeld over de termen van een optelling.</p>

<p>In het algemeen geldt:</p>

<p class="formula">a × (b + c) = a × b + a × c</p>

<p>Bij ons voorbeeld geeft dat:</p>

<p class="formula">7 × (10 + 3) = 7 × 10 + 7 × 3</p>

<p>En dus:</p>

<p class="formula">7 × 13 = 70 + 21 = 91</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>De distributieve eigenschap betekent dat een vermenigvuldiging kan worden verdeeld over een optelling.</p>

  <p class="formula">a × (b + c) = a × b + a × c</p>

  <p>Je hebt dit principe al gebruikt bij <strong>slim rekenen met vermenigvuldigen</strong>. Nu heeft het een naam.</p>
</div>


<h3>16. Bewerkingsvolgorde</h3>

<h4>De volgorde van bewerkingen</h4>

<p>Wanneer een berekening verschillende bewerkingen bevat en er zijn haakjes aanwezig, dan gebruiken we deze volgorde:</p>

<ol>
  <li><strong>Haakjes</strong></li>
  <li><strong>Vermenigvuldigen en delen</strong></li>
  <li><strong>Optellen en aftrekken</strong></li>
</ol>

<p>Bij bewerkingen van hetzelfde niveau (voorbeeld enkel optellen en aftrekken) rekenen we van <strong>links naar rechts</strong>.</p>

<p>Bekijk bijvoorbeeld:</p>

<p class="formula">2 + 3 × 4</p>

<p>Vermenigvuldigen moet eerst uitgevoerd worden, we gaan dit duidelijk maken door haakjes te plaatsen:</p>

<p class="formula">2 + (3 × 4) = 2 + 12 = 14</p>

<div data-widget="orderOperations"></div>

<p>Als bewerkingen van hetzelfde niveau na elkaar staan, werken we van <strong>links naar rechts</strong>.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">20 ÷ 5 × 2</p>

<p>We rekenen eerst de deling uit:</p>

<p class="formula">20 ÷ 5 = 4</p>

<p>Daarna vermenigvuldigen we:</p>

<p class="formula">4 × 2 = 8</p>

<p>Dus:</p>

<p class="formula">20 ÷ 5 × 2 = 8</p>

<h4>Haakjes veranderen de volgorde</h4>

<p>Met haakjes kunnen we aangeven dat een bepaalde bewerking eerst moet gebeuren.</p>

<p>Vergelijk:</p>

<p class="formula">2 + 3 × 4 = 14</p>

<p>met:</p>

<p class="formula">(2 + 3) × 4 = 20</p>

<p><strong>De haakjes zorgen ervoor dat de optelling eerst wordt uitgevoerd.</strong></p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>De standaardvolgorde is:</p>
<ol>
  <li><strong>Haakjes</strong></li>
  <li><strong>Vermenigvuldigen en delen</strong></li>
  <li><strong>Optellen en aftrekken</strong></li>
</ol>
  <p>Bij bewerkingen van hetzelfde niveau rekenen we van links naar rechts.</p>
</div>

<h3>17. Schatten en controleren</h3>

<p>Je kunt een berekening op verschillende manieren controleren. Een handige manier is eerst een <strong>schatting</strong> te maken.</p>

<p>Bij een schatting vervang je getallen door getallen waarmee je gemakkelijker kunt rekenen.</p>

<h4>Schatten met afgeronde getallen</h4>

<p>Stel dat je wilt berekenen:</p>

<p class="formula">398 + 203</p>

<p>We kunnen 398 ongeveer vervangen door 400 en 203 door 200:</p>

<p class="formula">400 + 200 = 600</p>

<p>We verwachten dus een antwoord dat ongeveer 600 is.</p>

<p>Het exacte antwoord is:</p>

<p class="formula">398 + 203 = 601</p>

<p>Dat ligt heel dicht bij onze schatting. Ons antwoord is dus waarschijnlijk juist.</p>

<h4>Ook bij vermenigvuldigen</h4>

<p>Schatten is ook handig bij vermenigvuldigingen.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">49 × 21</p>

<p>We kunnen 49 afronden naar 50 en 21 naar 20:</p>

<p class="formula">50 × 20 = 1000</p>

<p>Het exacte antwoord is:</p>

<p class="formula">49 × 21 = 1029</p>

<p>1029 ligt in de buurt van 1000. Dat is dus een redelijke uitkomst.</p>

<h4>Een antwoord controleren</h4>

<p>Je kunt een berekening ook controleren met de <strong>omgekeerde bewerking</strong>.</p>

<p>Stel dat je hebt berekend:</p>

<p class="formula">84 ÷ 4 = 21</p>

<p>Je kunt dit controleren met een vermenigvuldiging:</p>

<p class="formula">21 × 4 = 84</p>

<p>De berekening klopt dus.</p>

<p>Bij een deling met rest kun je op dezelfde manier controleren.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">14 ÷ 4 = 3 rest 2</p>

<p>Controle:</p>

<p class="formula">3 × 4 + 2 = 14</p>

<h4>Een fout herkennen</h4>

<p>Schatten kan je ook helpen om fouten snel te ontdekken.</p>

<p>Stel dat iemand beweert:</p>

<p class="formula">49 × 21 = 109</p>

<p>Onze schatting was ongeveer 1000:</p>

<p class="formula">50 × 20 ≈ 1000</p>

<p>109 ligt daar helemaal niet in de buurt. We weten dus onmiddellijk dat er ergens een fout is gemaakt.</p>

<div class="callout">
  <p><strong>Belangrijk inzicht:</strong></p>
  <p>Een schatting hoeft niet exact te zijn. Ze helpt je om te controleren of een antwoord <strong>redelijk</strong> is.</p>

  <p>Je kunt een berekening ook controleren met een omgekeerde bewerking.</p>

  <p class="formula">84 ÷ 4 = 21</p>

  <p class="formula">21 × 4 = 84</p>

  <p><strong>Goed rekenen betekent dus ook weten wanneer een antwoord niet kan kloppen.</strong></p>
</div>
    `
  },
  
  {
    id: "1.3",
    title: "Het getallensysteem uitbreiden",
    goal: "Breid ℕ uit tot ℤ: tegenovergestelde, absolute waarde en rekenen met tekens.",
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



        <h3>6. Tegenovergestelde getallen</h3>

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
    `
  },
  
  {
    id: "1.4",
    title: "Breuken en rationale getallen",
    goal: "Zie een breuk als getal op de lijn en reken met gelijkwaardige, vereenvoudigde en gemengde breuken.",
    theory: /* html */`
        <h2>Breuken en rationale getallen</h2>
        <p><strong>Doel:</strong></p>

        <ul>
          <li>ontdekken waarom gehele getallen niet genoeg zijn voor elke deling;</li>
          <li>leren breuken voorstellen, vergelijken en bewerken.;</li>
        </ul>

        <h3>1. Een geheel</h3>
        <p>
      Een <strong>geheel</strong> is iets dat we als één volledige eenheid
      beschouwen. Bijvoorbeeld een volledige pizza, een chocoladereep,
      één meter of een taart.
    </p>

    <p>
      We kunnen een geheel verdelen in kleinere stukken.
      Om met breuken te werken, verdelen we het geheel in
      <strong>gelijke delen</strong>.
    </p>

    <div class="callout">
      <strong>Belangrijk</strong>
      <p>
        De delen van een breuk zijn even groot.
      </p>
    </div>

        <h3>2. Een geheel verdelen</h3>
        <p>
      Als we één geheel verdelen in 2 gelijke delen, noemen we elk deel
      <strong>één helft</strong>.
    </p>

    <p class="formula">\frac{1}{2}</p>

    <p>
      Verdelen we hetzelfde geheel in 3 gelijke delen, dan is elk deel
      <strong>één derde</strong>.
    </p>

    <p class="formula">\frac{1}{3}</p>

    <p>
      En bij 4 gelijke delen is elk deel <strong>één vierde</strong>.
    </p>

    <p class="formula">\frac{1}{4}</p>

    <div data-widget="fractionWhole"></div>

        <h3>3. Meerdere delen nemen</h3>
        <p>
      We hoeven natuurlijk niet altijd maar één deel te nemen.
      Als een geheel in 4 gelijke delen is verdeeld en we nemen
      3 van die delen, dan hebben we <strong>drie vierde</strong> van
      het geheel.
    </p>

    <p class="formula">\frac{3}{4}</p>

    <p>
      De betekenis daarvan is eenvoudig:
      <strong>3 van de 4 gelijke delen</strong>.
    </p>

    <div class="callout">
      <strong>Inzicht</strong>
      <p>
        Een breuk beschrijft hoeveel gelijke delen van een geheel
        we nemen.
      </p>
    </div>

        <h3>4. Meer delen betekent kleinere stukken</h3>
<p>
      Kijk naar eenzelfde geheel. Als we het in steeds meer gelijke delen
      verdelen, wordt elk afzonderlijk deel kleiner.
    </p>

    <p>
      Een half is bijvoorbeeld groter dan een derde:
    </p>

    <div class="theory-image">
      <img
        src="assets/fraction-half-third.png"
        alt="Een vergelijking van een half en een derde. Een half is groter dan een derde."
      >
    </div>
    <p>
      Je ziet dat een geheel dat in 2 gelijke delen wordt verdeeld,
      grotere stukken oplevert dan wanneer hetzelfde geheel in 3 gelijke
      delen wordt verdeeld.
    </p>

    <p class="formula">\frac{1}{2} &gt; \frac{1}{3}</p>

    <p>
      En een derde is groter dan een vierde:
    </p>

    <p class="formula">\frac{1}{3} &gt; \frac{1}{4}</p>

    <p>
      Hoe meer gelijke stukken we van hetzelfde geheel maken,
      hoe kleiner elk stuk wordt.
    </p>

    <h3>5. Een breuk is een getal</h3>

    <p>
      In het dagelijks leven gebruiken we breuken vaak om een deel van
      iets aan te duiden. Denk aan een halve pizza, een kwartier of
      drie kwart van een liter.
    </p>

    <p>
      Een breuk is echter meer dan alleen een aantal stukjes van een
      voorwerp. Een breuk stelt ook een <strong>getal</strong> voor.
    </p>

    <p>
      Zo ligt <span class="formula-inline">1/2</span> precies tussen
      0 en 1. Daar komen we straks op terug.
    </p>

    <div class="callout">
      <strong>Onthoud</strong>
      <p>
        Een breuk geeft aan hoeveel gelijke delen van een geheel
        we nemen. Later zullen we ontdekken dat een breuk ook gewoon
        een getal op de getallenlijn is.
      </p>
    </div>



        <h4>Kernidee</h4>
        <p>
      Bij een breuk kijken we altijd naar twee dingen:
    </p>

    <ul>
      <li>in hoeveel <strong>gelijke delen</strong> het geheel is verdeeld;</li>
      <li>hoeveel van die delen we nemen.</li>
    </ul>

    <p>
      In het volgende onderdeel geven we deze twee onderdelen hun
      officiële namen: <strong>noemer</strong> en <strong>teller</strong>.
    </p>


        <h3>6. Teller en noemer</h3>
        <p>
      Een breuk bestaat uit twee getallen. Elk getal heeft een eigen
      betekenis.
    </p>

    <p class="formula">
      \\frac{3}{5}
    </p>

    <p>
      Het getal <strong>boven</strong> de breukstreep noemen we de
      <strong>teller</strong>. Dat is hier het getal 3</p>
      <p>Het getal <strong>onder</strong> de
      breukstreep noemen we de <strong>noemer</strong>. Dat is hier het getal 5.</p>
      <p>
        Deze breuk vertelt ons dus dat een geheel (een pizza bijvoorbeeld) in 5 gelijke delen wordt verdeeld en dat we daarvan 3 delen nemen.
      </p>

    <div class="callout">
      <strong>Onthoud</strong>
      <p>
        De <strong>noemer</strong> vertelt in hoeveel gelijke delen
        het geheel is verdeeld.
      </p>
      


        <h3>7. Breuken op de getallenlijn</h3>
 <p>
      Net zoals we gehele getallen op een getallenlijn kunnen plaatsen,
      kunnen we ook breuken een plaats geven.
    </p>

    <p class="formula">
      0 \qquad \frac{1}{2} \qquad 1
    </p>

    <p>
      Een half ligt precies tussen 0 en 1.
    </p>

    <div data-widget="fractionNumberLine"></div>

    <h4>Een geheel verdelen op de getallenlijn</h4>

    <p>
      Om <span class="formula-inline">1/4</span> op de getallenlijn te
      plaatsen, verdelen we de afstand van 0 tot 1 in 4 gelijke stukken.
    </p>

    <p class="formula">
      0 \qquad \frac{1}{4} \qquad \frac{2}{4}
      \qquad \frac{3}{4} \qquad 1
    </p>

    <p>
      De afstand van 0 tot 1 is dus één geheel. Elke stap is
      één vierde.
    </p>

    <h4>Breuken groter dan 1</h4>

    <p>
      Een breuk hoeft niet tussen 0 en 1 te liggen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{5}{4}
    </p>

    <p>
      We kunnen vier vierde samen nemen om één geheel te krijgen.
      Daarna blijft nog één vierde over:
    </p>

    <p class="formula">
      \frac{5}{4} = 1 + \frac{1}{4}
    </p>

    <p>
      Het getal <span class="formula-inline">5/4</span> ligt dus
      rechts van 1 op de getallenlijn.
    </p>

    <div class="callout">
      <strong>Inzicht</strong>
      <p>
        Een breuk is niet alleen een aantal stukjes van iets.
        Een breuk stelt een <strong>getal</strong> voor en heeft daarom
        een vaste plaats op de getallenlijn.
      </p>
    </div>


        <h3>8. Gelijkwaardige breuken</h3>
<p>
      Kijk naar:
    </p>

    <p class="formula">
      \frac{1}{2}
    </p>

    <p>
      We kunnen een geheel in 2 gelijke delen verdelen en één deel nemen.
      Maar we kunnen hetzelfde geheel ook in 4 gelijke delen verdelen
      en 2 delen nemen.
    </p>

    <p class="formula">
      \frac{1}{2} = \frac{2}{4}
    </p>

    <p>
      Verdelen we het geheel in 6 delen en nemen we er 3, dan krijgen
      we opnieuw dezelfde hoeveelheid:
    </p>

    <p class="formula">
      \frac{1}{2} = \frac{2}{4} = \frac{3}{6}
    </p>

    <div data-widget="equivalentFractions"></div>

    <h4>Hoe maak je een gelijkwaardige breuk?</h4>

    <p>
      We mogen de teller en de noemer met hetzelfde getal
      vermenigvuldigen.
    </p>

    <p class="formula">
      \frac{1}{2}
      =
      \frac{1 \times 2}{2 \times 2}
      =
      \frac{2}{4}
    </p>

    <p>
      Nogmaals vermenigvuldigen met 2:
    </p>

    <p class="formula">
      \frac{2}{4}
      =
      \frac{2 \times 2}{4 \times 2}
      =
      \frac{4}{8}
    </p>

    <p>
      De teller én de noemer veranderen, maar de waarde van de breuk
      blijft hetzelfde.
    </p>

    <div class="callout">
      <strong>Belangrijk</strong>
      <p>
        Om een gelijkwaardige breuk te maken, vermenigvuldig je
        <strong>teller en noemer met hetzelfde getal</strong>.
      </p>
    </div>

    <h4>Waarom mag dat?</h4>

    <p>
      Vermenigvuldigen met hetzelfde getal boven en onder verandert
      de verhouding niet.
    </p>

    <p class="formula">
      \frac{a}{b}
      =
      \frac{a \times c}{b \times c}
      \qquad(c \neq 0)
    </p>

    <p>
      We kunnen dus een breuk op verschillende manieren schrijven
      zonder dat de waarde verandert.
    </p>

      <h3>9. Breuken vereenvoudigen</h3>
      <h4>Een breuk korter schrijven</h4>

    <p>
      Soms schrijven we een breuk met grotere getallen dan nodig.
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{6}{8}
    </p>

    <p>
      Zowel 6 als 8 zijn deelbaar door 2. We kunnen teller en noemer
      dus door 2 delen:
    </p>

    <p class="formula">
      \frac{6}{8}
      =
      \frac{6 :  2}{8 : 2}
      =
      \frac{3}{4}
    </p>

    <p>
      De waarde is niet veranderd. We hebben alleen een eenvoudigere
      schrijfwijze gevonden.
    </p>

    <h4>Wanneer zijn we klaar?</h4>

    <p>
      We kunnen verder vereenvoudigen zolang teller en noemer nog
      een gemeenschappelijke deler groter dan 1 hebben.
    </p>

    <p>
      Bij <span class="formula-inline">3/4</span> kan dat niet meer.
      3 en 4 hebben geen gemeenschappelijke deler groter dan 1.
    </p>

    <div class="callout">
      <strong>Vereenvoudigde breuk</strong>
      <p>
        Een breuk is volledig vereenvoudigd wanneer teller en noemer
        geen gemeenschappelijke deler groter dan 1 meer hebben.
      </p>
    </div>

    <h4>De GGD gebruiken</h4>

    <p>
      Bij grotere getallen is het handig om de
      <strong>grootste gemene deler</strong> (GGD) te gebruiken.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{18}{24}
    </p>

    <p>
      De GGD van 18 en 24 is 6.
    </p>
      <p class="formula">
      \frac{18}{24}
      =
      \frac{18 : 6}{24 : 6}
      =
      \frac{3}{4}
    </p>

    <p>
      De GGD is dus een handige manier om een breuk in één stap
      volledig te vereenvoudigen. Hier komen we later uitgebreider op terug.
    </p>

    <div class="callout">
      <strong>Inzicht</strong>
      <p>
        Vereenvoudigen verandert de waarde van een breuk niet.
        We zoeken alleen een eenvoudigere schrijfwijze.
      </p>
    </div>



<h3>10. Breuken vergelijken</h3>
<h4>Welke breuk is groter?</h4>

    <p>
      We kunnen breuken met elkaar vergelijken met de symbolen
      <span class="formula-inline">&lt;</span>,
      <span class="formula-inline">&gt;</span> en
      <span class="formula-inline">=</span>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{1}{2} > \frac{1}{3}
    </p>

    <p>
      We zagen al waarom: als hetzelfde geheel in 2 stukken wordt
      verdeeld, is elk stuk groter dan wanneer het in 3 stukken
      wordt verdeeld.
    </p>

    <h4>Dezelfde noemer</h4>

    <p>
      Als twee breuken dezelfde noemer hebben, is vergelijken eenvoudig.
      De delen zijn dan even groot en we kijken alleen naar de teller.
    </p>

    <p class="formula">
      \frac{2}{7} < \frac{5}{7}
    </p>

    <p>
      Beide breuken bestaan uit zevende delen. Vijf zevende betekent
      meer delen dan twee zevende.
    </p>

    <h4>Dezelfde teller</h4>

    <p>
      Als twee breuken dezelfde teller hebben, bepaalt de noemer
      welke stukken kleiner zijn.
    </p>

    <p class="formula">
      \frac{1}{4} < \frac{1}{3} < \frac{1}{2}
    </p>

    <p>
      We nemen telkens één deel, maar het geheel wordt in steeds
      minder stukken verdeeld.
    </p>

    <div data-widget="compareFractions"></div>

    <h4>Verschillende tellers en noemers</h4>

    <p>
      Als beide getallen verschillen, kunnen we de breuken eerst
      gelijknamig maken.
    </p>

    <p class="formula">
      \frac{2}{3}\\
      en\\
      \frac{3}{5}
    </p>

    <p>
      Een gemeenschappelijke noemer is 15:
    </p>

    <p class="formula">
      \frac{2}{3} = \frac{10}{15}\\ en\\ \frac{3}{5} = \frac{9}{15}
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \frac{2}{3} > \frac{3}{5}
    </p>

    <div class="callout">
      <strong>Onthoud</strong>
      <p>
        Je kunt breuken vergelijken door ze visueel op een getallenlijn
        te plaatsen of door ze om te schrijven naar een gemeenschappelijke
        noemer.
      </p>
    </div>

<h3>11. Breuken optellen en aftrekken</h3>
<h4>Gelijke noemers</h4>

    <p>
      Als twee breuken dezelfde noemer hebben, zijn de stukken even groot.
      We kunnen de tellers dan rechtstreeks optellen.
    </p>

    <p class="formula">
      \frac{2}{7} + \frac{3}{7}
      =
      \frac{5}{7}
    </p>

    <p>
      We hebben 2 zevende delen en voegen daar 3 zevende delen aan toe.
      Samen zijn dat 5 zevende delen.
    </p>

    <p>
      Bij aftrekken werkt het op dezelfde manier:
    </p>

    <p class="formula">
      \frac{6}{7} - \frac{2}{7}
      =
      \frac{4}{7}
    </p>

    <div class="callout">
      <strong>Belangrijk</strong>
      <p>
        Bij gelijke noemers tel of trek je alleen de
        <strong>tellers</strong> op. De noemer blijft dezelfde.
      </p>
    </div>

    <h4>Verschillende noemers</h4>

    <p>
      Wat gebeurt er bij:
    </p>

    <p class="formula">
      \frac{1}{2} + \frac{1}{3}
    </p>

    <p>
      Een helft en een derde bestaan uit stukken van verschillende grootte.
      We kunnen ze daarom niet zomaar optellen.
    </p>

    <p><strong>Eerst maken we de noemers gelijk.</strong> Een geschikte gemeenschappelijke
      noemer is 6.
    </p>

    <p class="formula">
      \frac{1}{2} = \frac{3}{6}
      \qquad
      \frac{1}{3} = \frac{2}{6}
    </p>

    <p>
      Nu hebben beide breuken zesde delen:
    </p>

    <p class="formula">
      \frac{3}{6} + \frac{2}{6}
      =
      \frac{5}{6}
    </p>

    <h4>Waarom mag je de noemers niet optellen?</h4>

    <p>
      Een veelgemaakte fout is:
    </p>

    <p class="formula">
      \frac{1}{2} + \frac{1}{3}
      \neq
      \frac{2}{5}
    </p>

    <p>
      Een noemer vertelt hoe groot de stukken zijn. Bij een helft
      en een derde zijn die stukken niet even groot. We moeten ze
      eerst naar dezelfde soort stukken omzetten.
    </p>

    <div class="callout">
      <strong>Kernidee</strong>
      <p>
        Voor optellen en aftrekken moeten de breuken dezelfde noemer
        hebben. Daarna kun je de tellers optellen of aftrekken.
      </p>
    </div>

<h3>12. Breuken vermenigvuldigen</h3>
<h4>Een deel van een deel</h4>

    <p>
      Vermenigvuldigen met een breuk kunnen we eerst begrijpen als
      <strong>een deel nemen van een ander deel</strong>.
    </p>

    <p>
      Neem bijvoorbeeld de helft van drie vierde:
    </p>

    <p class="formula">
      \frac{1}{2} \times \frac{3}{4}
    </p>

    <p>
      We nemen de helft van de drie vierde. Dat levert drie achtste op:
    </p>

    <p class="formula">
      \frac{1}{2} \times \frac{3}{4}
      =
      \frac{3}{8}
    </p>

    <h4>De rekenregel</h4>

    <p>
      Bij het vermenigvuldigen van breuken vermenigvuldigen we
      de tellers met elkaar en de noemers met elkaar.
    </p>

    <p class="formula">
      \frac{a}{b} \times \frac{c}{d}
      =
      \frac{a \times c}{b \times d}
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{2}{3} \times \frac{5}{7}
      =
      \frac{2 \times 5}{3 \times 7}
      =
      \frac{10}{21}
    </p>

    <h4>Eerst vereenvoudigen</h4>

    <p>
      Soms kunnen we vóór het vermenigvuldigen al vereenvoudigen.
      Dat maakt de berekening eenvoudiger.
    </p>

    <p class="formula">
      \frac{2}{3} \times \frac{9}{10}
    </p>

    <p>
      2 en 10 kunnen we door 2 delen. Ook 9 en 3 kunnen we door 3 delen.
    </p>

    <p class="formula">
      \frac{1}{1} \times \frac{3}{5}
      =
      \frac{3}{5}
    </p>

    <div class="callout">
      <strong>Onthoud</strong>
      <p>
        Bij vermenigvuldigen:
        <strong>teller × teller, noemer × noemer</strong>.
        Vereenvoudigen mag vóór of na de vermenigvuldiging.
      </p>
    </div>

<h3>13. Breuken delen</h3>
<h4>Wat betekent delen?</h4>

    <p>
      Bij delen vragen we ons af:
      <strong>hoe vaak past het ene getal in het andere?</strong>
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      6 : 2 = 3
    </p>

    <p>
      De vraag is: hoeveel keer past 2 in 6? Het antwoord is 3.
    </p>

    <h4>Een breuk delen door een breuk</h4>

    <p>
      Kijk naar:
    </p>

    <p class="formula">
      \frac{3}{4} : \frac{1}{2}
    </p>

    <p>
      We vragen ons af hoeveel helften er in drie vierde passen.
      Eén helft past één keer, en er blijft nog een kwart over.
      Dat is nog een halve helft.
    </p>

    <p>
      Er passen dus anderhalve halve in drie vierde:
    </p>

    <p class="formula">
      \frac{3}{4} : \frac{1}{2}
      =
      \frac{3}{2}
    </p>

    <h4>Het omgekeerde</h4>

    <p>
      De breuk
      <span class="formula-inline">1/2</span>
      heeft als <strong>omgekeerde</strong> breuk
      <span class="formula-inline">2/1</span>.
    </p>

    <p>
      Het bijzondere is:
    </p>

    <p class="formula">
      \frac{1}{2} \times \frac{2}{1} = 1
    </p>

    <p>
      Daarom kunnen we delen door een breuk omzetten in
      vermenigvuldigen met het omgekeerde:
    </p>

    <p class="formula">
      \frac{a}{b} : \frac{c}{d}
      =
      \frac{a}{b} \times \frac{d}{c}
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{2}{3} : \frac{4}{5}
      =
      \frac{2}{3} \times \frac{5}{4}
      =
      \frac{10}{12}
      =
      \frac{5}{6}
    </p>

    <div class="callout">
      <strong>Onthoud</strong>
      <p>
        Delen door een breuk betekent:
        <strong>vermenigvuldigen met het omgekeerde</strong>.
      </p>
    </div>

<h3>14. Gemengde getallen</h3>
<h4>Meer dan één geheel</h4>

    <p>
      We hebben al gezien dat een breuk groter kan zijn dan 1.
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \frac{7}{4}
    </p>

    <p>
      Vier vierde vormen één geheel. Er blijven dan drie vierde over:
    </p>

    <p class="formula">
      \frac{7}{4} = \frac{4}{4} + \frac{3}{4} = 1 + \frac{3}{4}
    </p>

    <p>
      We kunnen dit korter schrijven als een
      <strong>gemengd getal</strong>:
    </p>

    <p class="formula">
      1\frac{3}{4}
    </p>

    <p>
      Dit betekent: één geheel en drie vierde.
    </p>

    <h4>Van een onechte breuk naar een gemengd getal</h4>

    <p>
      Deel de teller door de noemer.
    </p>

    <p class="formula">
    \frac{7}{4} = 1\\ rest\\ 3
    </p>

    <p>
      Het quotiënt wordt het gehele deel en de rest wordt de teller
      van de breuk:
    </p>

    <p class="formula">
      \frac{7}{4} = 1\frac{3}{4}
    </p>

    <h4>Van een gemengd getal naar een breuk</h4>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">
      2\frac{1}{3}
    </p>

    <p>
      Twee gehele bestaan uit zes derde. Daar komt nog één derde bij:
    </p>

    <p class="formula">
      2\frac{1}{3}
      =
      \frac{6}{3} + \frac{1}{3}
      =
      \frac{7}{3}
    </p>

    <div class="callout">
      <strong>Inzicht</strong>
      <p>
        Een gemengd getal en een onechte breuk zijn twee verschillende
        schrijfwijzen voor hetzelfde getal.
      </p>
    </div>

    <p>
      In berekeningen zijn onechte breuken vaak handiger.
      Voor het dagelijks leven is een gemengd getal soms gemakkelijker
      te lezen.
    </p>
    `
  },
  
  {
    id: "1.5",
    title: "Decimalen en percentages",
    goal: "Zet breuk, decimaal en percentage in elkaar om en reken met procentuele verandering.",
    theory: /* html */`
      <h2>Decimalen en percentages</h2>

      <p><strong>Doel:</strong> leren werken met decimalen en percentages en begrijpen hoe ze samenhangen met breuken.</p>
      <h3>1. Getallen tussen 0 en 1</h3>
      <p>In de vorige les hebben we gezien dat een getal niet noodzakelijk groter dan 1 hoeft te zijn.</p>

                <p>We kunnen bijvoorbeeld de breuk</p>

                <p class="formula">
                    \frac{1}{2}
                </p>

                <p>gebruiken om een hoeveelheid aan te geven die kleiner is dan 1, maar groter dan 0.</p>

                <p>Ook</p>
      <p class="formula">
                \frac{1}{4}\\ en\\ \frac{3}{4}\\ en\\ \frac{7}{10}
              </p>

                <p>zijn getallen die tussen 0 en 1 liggen.</p>

                <p>We hebben geleerd hoe we zulke getallen als een <strong>breuk</strong> kunnen schrijven. Maar er bestaat ook een andere manier om deze getallen te schrijven.</p>

                <p>Zo kunnen we bijvoorbeeld schrijven:</p>

                <p class="formula">
                    \frac{1}{2}=0,5
                </p>

                <p>en</p>

                <p class="formula">
                   \frac{1}{4}=0,25
                </p>

                <p>Het getal <strong>0,5</strong> is dus geen nieuw getal. Het is een andere schrijfwijze voor hetzelfde getal als</p>

                <p class="formula">
                    \frac{1}{2}
                </p>

                <p>Ook:</p>

                <p class="formula">
                  \frac{3}{4}=0,75
                   
                </p>
                   <p>De komma in <strong>0,5</strong> en <strong>0,75</strong> geeft aan dat we naast het gehele deel ook een deel van één geheel aangeven.</p>

                <p>We noemen zulke getallen <strong>decimale getallen</strong> of kortweg <strong>decimalen</strong>.</p>

                <div class="callout">
                    <strong>Een nieuwe schrijfwijze, geen nieuw soort getal</strong>
                    <p>Een decimaal getal kan hetzelfde getal voorstellen als een breuk. Zo zijn</p>

                    <p class="formula">
                        \frac{1}{2} = 0,5 = 50\\%
              
                    </p>

                    <p>drie verschillende schrijfwijzen voor dezelfde hoeveelheid.</p>
                </div>

                <p>In deze les gaan we onderzoeken hoe deze decimale schrijfwijze werkt, hoe we decimalen kunnen vergelijken en ermee kunnen rekenen. Daarna bekijken we hoe decimalen verbonden zijn met percentages.</p>
            
      
      
      
      <h3>2. Decimalen als uitbreiding van ons getallensysteem</h3>
      <p>We hebben in eerdere lessen gezien dat de plaats van een cijfer bepaalt welke waarde het heeft. Dat principe werkt ook rechts van de komma.</p>
      <p>Neem bijvoorbeeld:</p>
      <p class="formula">37,428</p>
      <p>Dit getal bestaat uit:</p>
      <ul>
        <li>3 tientallen = 30</li>
        <li>7 eenheden = 7</li>
        <li>4 tienden = 4/10</li>
        <li>2 honderdsten = 2/100</li>
        <li>8 duizendsten = 8/1000</li>
      </ul>
      <p>We kunnen het getal dus schrijven als:</p>
      <p class="formula">37,428 = 30 + 7 + \frac{4}{10} + \frac{2}{100} + \frac{8}{1000}</p>
      <p>De cijfers rechts van de komma geven steeds kleinere delen van één geheel aan.</p>
      <table>
        <tr><th>Plaats</th><th>Voorbeeld</th><th>Betekenis</th></tr>
        <tr><td>eenheden</td><td>7</td><td>7</td></tr>
        <tr><td>tienden</td><td>4</td><td>4/10</td></tr>
        <tr><td>honderdsten</td><td>2</td><td>2/100</td></tr>
        <tr><td>duizendsten</td><td>8</td><td>8/1000</td></tr>
      </table>
      <div class="callout"><strong>Onthoud</strong><p>De komma scheidt de hele getallen van de delen van een geheel.</p></div>

      <h3>3. Decimalen en breuken</h3>
      <p>Een eindig decimaal getal kunnen we altijd als een breuk schrijven.</p>
      <p class="formula">0,7 = \frac{7}{10}</p>
      <p class="formula">0,42 = \frac{42}{100} = \frac{21}{50}</p>
      <p class="formula">0,375 = \frac{375}{1000} = \frac{3}{8}</p>
      <p>Ook een getal groter dan 1 kunnen we zo schrijven:</p>
      <p class="formula">2,35 = \frac{235}{100} = \frac{47}{20}</p>
      <p>Het is belangrijk om de breuk daarna, wanneer mogelijk, te vereenvoudigen.</p>
      <h4>Van een breuk naar een decimaal</h4>
      <p>Als de breuk een noemer heeft die gemakkelijk in tienden, honderdsten of duizendsten kan worden omgezet, kunnen we dat rechtstreeks doen.</p>
      <p class="formula">\frac{3}{4} = \frac{75}{100} = 0,75</p>
      <p class="formula">\frac{7}{20} = \frac{35}{100} = 0,35</p>

      <h3>4. Eindige en repeterende decimalen</h3>
      <p>Sommige breuken geven een decimaal getal dat eindigt:</p>
      <p class="formula">\frac{1}{2} = 0,5</p>
      <p class="formula">\frac{1}{4} = 0,25</p>
      <p>Andere breuken blijven cijfers produceren:</p>
      <p class="formula">\frac{1}{3} = 0,333333...</p>
      <p class="formula">\frac{2}{7} = 0,285714285714...</p>
      <p>Bij zulke getallen herhaalt zich een patroon. We noemen dit een <strong>repeterend decimaal getal</strong>.</p>
      <div class="callout"><strong>Belangrijk</strong><p>Rationale getallen kunnen worden geschreven als een eindig decimaal getal of als een repeterend decimaal getal.</p></div>

      <h3>5. Decimalen vergelijken</h3>
      <p>Om decimalen goed te vergelijken, mogen we nullen achteraan toevoegen zonder de waarde te veranderen.</p>
      <p class="formula">0,7 = 0,70 = 0,700</p>
      <p>Daardoor wordt vergelijken eenvoudiger:</p>
      <p class="formula">0,70 &gt; 0,65</p>
      <p>Dus:</p>
      <p class="formula">0,7 &gt; 0,65</p>
      <p>Let op: een getal met meer cijfers na de komma is niet automatisch groter.</p>
      <p class="formula">0,099 &lt; 0,1</p>
      <p>Want:</p>
      <p class="formula">0,099 &lt; 0,100</p>

      <h3>6. Optellen en aftrekken met decimalen</h3>
      <p>Bij optellen en aftrekken zetten we dezelfde plaatswaarden onder elkaar.</p>
      <p class="formula">12,70 + 3,45 = 16,15</p>
      <p class="formula">15,20 − 7,85 = 7,35</p>
      <p>De komma's moeten dus recht onder elkaar staan.</p>

      <h3>7. Vermenigvuldigen met decimalen</h3>
      <p>Ook bij decimalen blijft vermenigvuldigen dezelfde bewerking.</p>
      <p class="formula">1,2 × 0,3 = 0,36</p>
      <p>We kunnen dit begrijpen vanuit breuken:</p>
      <p class="formula">1,2 = \frac{12}{10}</p>
      <p class="formula">0,3 = \frac{3}{10}</p>
      <p class="formula">\frac{12}{10} × \frac{3}{10} = \frac{36}{100} = 0,36</p>
      <p>Een iets moeilijker voorbeeld:</p>
      <p class="formula">2,35 × 1,4 = 3,29</p>

      <h3>8. Delen met decimalen</h3>
      <p>Ook delen kunnen we met decimalen uitvoeren.</p>
      <p class="formula">3,6 ÷ 0,6 = 6</p>
      <p>We kunnen dit controleren:</p>
      <p class="formula">6 × 0,6 = 3,6</p>
      <p>Bij delen door 10, 100 of 1 000 wordt de komma verplaatst:</p>
      <p class="formula">36 ÷ 10 = 3,6</p>
      <p class="formula">36 ÷ 100 = 0,36</p>
      <p class="formula">36 ÷ 1000 = 0,036</p>

      <h3>9. Procent betekent "per honderd"</h3>
      <p>Het woord <strong>procent</strong> betekent letterlijk <strong>per honderd</strong>.</p>
      <p class="formula">1\\% = \frac{1}{100} = 0,01</p>
      <p class="formula">25\\% = \frac{25}{100} = 0,25</p>
      <p class="formula">50\\% = \frac{50}{100} = 0,5</p>
      <p class="formula">100\\% = \frac{100}{100} = 1</p>
      <p>Een percentage hoeft niet tussen 0% en 100% te liggen.</p>
      <p class="formula">125\\% = \frac{125}{100} = 1,25</p>
      <div class="callout"><strong>Onthoud</strong><p>100% stelt altijd het volledige geheel voor.</p></div>

      <h3>10. Breuk, decimaal en percentage</h3>
      <p>Een breuk, een decimaal en een percentage kunnen drie verschillende schrijfwijzen voor dezelfde waarde zijn.</p>
      <p class="formula">\frac{1}{2} = 0,5 = 50\\%</p>
      <p class="formula">\frac{1}{4} = 0,25 = 25\\%</p>
      <p class="formula">\frac{3}{8} = 0,375 = 37,5\\%</p>
      <p class="formula">\frac{5}{4} = 1,25 = 125\\%</p>
      <p>Je kunt dus tussen de drie schrijfwijzen heen en weer gaan.</p>

      <h3>11. Een percentage van een hoeveelheid</h3>
      <p>Stel dat we willen weten hoeveel 25% van 80 is.</p>
      <p>Omdat:</p>
      <p class="formula">25\\% = \frac{1}{4}</p>
      <p>is 25% van 80:</p>
      <p class="formula">80 ÷ 4 = 20</p>
      <p>We kunnen ook eerst 1% bepalen:</p>
      <p class="formula">1\\%\\ van\\ 80 = 0,8</p>
      <p class="formula">25\\%\\ van\\ 80 = 25 × 0,8 = 20</p>
      <p>Of we gebruiken de decimale schrijfwijze:</p>
      <p class="formula">0,25 × 80 = 20</p>
      <div class="callout"><strong>Drie manieren</strong><p>Je mag de methode kiezen die je het duidelijkst vindt: via een breuk, via 1% of via de decimale schrijfwijze.</p></div>

      <h3>12. Het geheel bepalen</h3>
      <p>Soms kennen we een percentage en de bijbehorende hoeveelheid en zoeken we het volledige geheel.</p>
      <p><strong>30% van een bedrag is €45. Hoe groot is het volledige bedrag?</strong></p>
      <p>Als 30% €45 is, dan is 10%:</p>
      <p class="formula">€45 ÷ 3 = €15</p>
      <p>100% is dan:</p>
      <p class="formula">€15 × 10 = €150</p>
      <p>Het volledige bedrag is dus <strong>€150</strong>.</p>

      <h3>13. Een percentage bepalen</h3>
      <p>Stel dat 18 van de 24 leerlingen geslaagd zijn. Welk percentage is dat?</p>
      <p>We schrijven eerst de verhouding als breuk:</p>
      <p class="formula">\frac{18}{24} = \frac{3}{4}</p>
      <p>Daarna:</p>
      <p class="formula">\frac{3}{4} = 0,75 = 75\\%</p>
      <p>Dus 18 van de 24 leerlingen is <strong>75%</strong>.</p>
      <p>De algemene rekenwijze is:</p>
      <p class="formula">percentage = \frac{deel}{geheel} × 100%</p>
      <p>Het belangrijkste is dat je eerst bepaalt wat het <strong>geheel</strong> is. Dat geheel stelt 100% voor.</p>

      <h3>14. Procentuele stijging</h3>
      <p>Een procentuele stijging vergelijkt de toename met de <strong>beginwaarde</strong>.</p>
      <p>Een prijs stijgt bijvoorbeeld van €80 naar €100.</p>
      <p>De absolute stijging is:</p>
      <p class="formula">€100 − €80 = €20</p>
      <p>We vergelijken die €20 met de beginprijs van €80:</p>
      <p class="formula">20/80 = \frac{1}{4} = 25\\%</p>
      <p>De prijs is dus met <strong>25%</strong> gestegen.</p>
      <div class="callout"><strong>Let op</strong><p>Bij een procentuele stijging vergelijken we altijd met de oorspronkelijke waarde, niet met de nieuwe waarde.</p></div>

      <h3>15. Procentuele daling</h3>
      <p>Bij een daling doen we hetzelfde.</p>
      <p>Een prijs daalt van €200 naar €150.</p>
      <p>De daling is:</p>
      <p class="formula">€200 − €150 = €50</p>
      <p>Die €50 vergelijken we met de beginwaarde van €200:</p>
      <p class="formula">\frac{50}{200} = \frac{1}{4} = 25\\%</p>
      <p>De prijs is dus met <strong>25%</strong> gedaald.</p>

      <h3>16. Een stijging of daling als factor</h3>
      <p>Een procentuele verandering kan ook rechtstreeks worden toegepast op een bedrag.</p>
      <p>Een stijging van 20% betekent dat we uiteindelijk 120% van de oorspronkelijke waarde hebben:</p>
      <p class="formula">120\\% = 1,20</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">€50 × 1,20 = €60</p>
      <p>Een daling van 20% betekent dat 80% overblijft:</p>
      <p class="formula">80\\% = 0,80</p>
      <p class="formula">€50 × 0,80 = €40</p>
      <p>We spreken hier over een <strong>vermenigvuldigingsfactor</strong>. Dit is gewoon een getal waarmee we de oorspronkelijke hoeveelheid vermenigvuldigen.</p>

      <h3>17. Meerdere procentuele veranderingen</h3>
      <p>Een tweede procentuele verandering wordt berekend op de waarde die op dat moment bestaat.</p>
      <p>Een bedrag van €100 stijgt eerst met 20%:</p>
      <p class="formula">€100 × 1,20 = €120</p>
      <p>Daarna daalt het nieuwe bedrag met 20%:</p>
      <p class="formula">€120 × 0,80 = €96</p>
      <p>Het eindbedrag is dus <strong>€96</strong>, niet €100.</p>
      <p>De twee veranderingen heffen elkaar niet op, omdat de tweede 20% wordt berekend op €120 en niet meer op €100.</p>

      <h3>18. Procent en procentpunt</h3>
      <p>Een verandering van 60% naar 70% is een stijging van:</p>
      <p class="formula">70\\% − 60\\% = 10\\ procentpunt</p>
      <p>Relatief gezien is de stijging:</p>
      <p class="formula">\frac{10}{60} ≈ 0,1667 ≈ 16,67\\%</p>
      <p>Dus:</p>
      <ul>
        <li>60% → 70% = <strong>10 procentpunten</strong>;</li>
        <li>relatieve stijging = ongeveer <strong>16,67%</strong>.</li>
      </ul>

      <div class="callout insight"><strong>Eén hoeveelheid, verschillende schrijfwijzen</strong><p>Decimalen, breuken en percentages zijn geen drie verschillende soorten getallen. Ze kunnen verschillende manieren zijn om dezelfde waarde te schrijven. Bij procentvragen moet je vooral goed bepalen wat het volledige geheel — de 100% — is.</p></div>

      <h3>19. Samenvatting</h3>
      <ul>
        <li><span class="formula-inline">0,5 = \frac{1}{2} = 50%</span></li>
        <li><span class="formula-inline">0,25 = \frac{1}{4} = 25%</span></li>
        <li><span class="formula-inline">0,375 = \frac{3}{8} = 37,5%</span></li>
        <li><span class="formula-inline">1\\% = 0,01 = \frac{1}{100}</span></li>
        <li>Bij een procentuele stijging of daling is de beginwaarde de referentie.</li>
        <li>Een tweede procentuele verandering werkt op de nieuwe waarde.</li>
        <li>Procentpunten zijn niet hetzelfde als een procentuele verandering.</li>
      </ul>
    `
  }
,
  {
    id: "1.6",
    title: "Verhoudingen en evenredigheid",
    goal: "Vereenvoudig verhoudingen en reken met recht evenredige verbanden, schaal en recepten.",
    theory: /* html */`
      <h2>Verhoudingen en evenredigheid</h2>

      <p><strong>Doel:</strong> leren wat een verhouding betekent, verhoudingen vergelijken en vereenvoudigen, werken met verhoudingstabellen en herkennen wanneer twee grootheden evenredig zijn.</p>

      <div class="callout">
        <strong>Vertrekpunt</strong>
        <p>In 1.4 hebben we geleerd dat een breuk een getal is. In 1.5 zagen we dat een breuk, een decimaal en een percentage verschillende schrijfwijzen voor dezelfde waarde kunnen zijn. In deze les gebruiken we die kennis om <strong>verhoudingen</strong> tussen hoeveelheden te beschrijven.</p>
      </div>

      <h3>1. Wat is een verhouding?</h3>
      <p>Een <strong>verhouding</strong> vergelijkt twee hoeveelheden met elkaar.</p>
      <p>Stel dat er in een mand 2 rode appels en 3 groene appels liggen.</p>
      <p>We kunnen de verhouding van rode tot groene appels schrijven als:</p>
      <p class="formula">2 : 3</p>
      <p>We lezen dit als <strong>2 staat tot 3</strong>.</p>
      <p>De verhouding vertelt ons niet alleen hoeveel rode en groene appels er zijn, maar vooral hoe hun aantallen zich tot elkaar verhouden.</p>
      <p>We kunnen dezelfde verhouding ook als een breuk schrijven:</p>
      <p class="formula">\frac{2}{3}</p>
      <p>Daarbij moeten we wel goed zeggen <strong>welke hoeveelheid we met welke hoeveelheid vergelijken</strong>. De volgorde is belangrijk.</p>
      <p>Rood tegenover groen is:</p>
      <p class="formula">2 : 3</p>
      <p>Groen tegenover rood is:</p>
      <p class="formula">3 : 2</p>

      <div class="callout">
        <strong>Belangrijk</strong>
        <p>Een verhouding vergelijkt twee hoeveelheden. De volgorde waarin we de hoeveelheden noemen, hoort bij de verhouding.</p>
      </div>

      <h3>2. Verhouding als verdeling</h3>
      <p>Een verhouding kunnen we ook gebruiken om een geheel in delen te verdelen.</p>
      <p>Stel dat een groep uit 2 kinderen met een rode trui en 3 kinderen met een blauwe trui bestaat.</p>
      <p>De verhouding rood tot blauw is:</p>
      <p class="formula">2 : 3</p>
      <p>In totaal zijn er:</p>
      <p class="formula">2 + 3 = 5</p>
      <p>Het geheel bestaat dus uit <strong>5 gelijke verhoudingseenheden</strong>: 2 daarvan horen bij rood en 3 bij blauw.</p>
      <p>Als we bijvoorbeeld 20 kinderen hebben en dezelfde verhouding willen behouden, moeten we de 5 verhoudingseenheden samen over 20 kinderen verdelen.</p>
      <p>We bepalen eerst hoeveel kinderen bij één verhoudingseenheid horen:</p>
      <p class="formula">20 ÷ 5 = 4</p>
      <p>Elke verhoudingseenheid stelt dus 4 kinderen voor.</p>
      <p>Rood:</p>
      <p class="formula">2 × 4 = 8</p>
      <p>Blauw:</p>
      <p class="formula">3 × 4 = 12</p>
      <p>De verhouding blijft:</p>
      <p class="formula">8 : 12</p>

      <h3>3. Gelijkwaardige verhoudingen</h3>
      <p>Net zoals we bij breuken gelijkwaardige breuken hebben gezien, kunnen we ook <strong>gelijkwaardige verhoudingen</strong> maken.</p>
      <p>De verhouding:</p>
      <p class="formula">2 : 3</p>
      <p>blijft dezelfde als we beide getallen met hetzelfde getal vermenigvuldigen:</p>
      <p class="formula">2 : 3 = 4 : 6 = 6 : 9 = 10 : 15</p>
      <p>In elk geval blijft de verhouding tussen de twee hoeveelheden gelijk.</p>
      <p>We mogen dus beide termen van een verhouding met hetzelfde <strong>niet-nulgetal</strong> vermenigvuldigen.</p>
      <p>Ook delen kan, zolang beide getallen deelbaar zijn door hetzelfde getal:</p>
      <p class="formula">12 : 18 = 6 : 9 = 2 : 3</p>

      <div class="callout">
        <strong>Onthoud</strong>
        <p>Om een gelijkwaardige verhouding te maken, vermenigvuldig of deel je <strong>beide termen door hetzelfde getal</strong>.</p>
      </div>

      <h3>4. Een verhouding vereenvoudigen</h3>
      <p>Een verhouding kan soms onnodig grote getallen bevatten.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">18 : 24</p>
      <p>18 en 24 zijn beide deelbaar door 6:</p>
      <p class="formula">18 ÷ 6 = 3</p>
      <p class="formula">24 ÷ 6 = 4</p>
      <p>Dus:</p>
      <p class="formula">18 : 24 = 3 : 4</p>
      <p>We hebben de verhouding <strong>vereenvoudigd</strong>.</p>
      <p>Net zoals bij breuken kunnen we hiervoor de <strong>grootste gemene deler</strong> gebruiken. De GGD van 18 en 24 is 6, waardoor we meteen de eenvoudigste verhouding krijgen.</p>
      <p>Een verhouding staat in de eenvoudigste vorm wanneer de twee termen geen gemeenschappelijke deler groter dan 1 meer hebben.</p>

      <h3>5. Verhoudingen vergelijken</h3>
      <p>Niet elke verhouding met verschillende getallen is automatisch groter of kleiner. We moeten de verhoudingen vergelijken.</p>
      <p>Neem:</p>
      <p class="formula">2 : 3</p>
      <p>en:</p>
      <p class="formula">3 : 5</p>
      <p>We kunnen beide verhoudingen bekijken als breuken:</p>
      <p class="formula">\frac{2}{3}</p>
      <p class="formula">\frac{3}{5}</p>
      <p>Een gemeenschappelijke noemer is 15:</p>
      <p class="formula">\frac{2}{3} = \frac{10}{15}</p>
      <p class="formula">\frac{3}{5} = \frac{9}{15}</p>
      <p>Daarom:</p>
      <p class="formula">2 : 3 &gt; 3 : 5</p>
      <p>Het is dus belangrijk om niet alleen naar de losse getallen te kijken. We vergelijken de <strong>verhouding als geheel</strong>.</p>

      <h3>6. Verhouding en percentage</h3>
      <p>Een verhouding kunnen we gebruiken om een deel van een geheel te bepalen.</p>
      <p>Bij een verhouding van 2 rode op 3 blauwe voorwerpen zijn er in totaal 5 verhoudingseenheden.</p>
      <p>Het aandeel rood is dus:</p>
      <p class="formula">\frac{2}{5}</p>
      <p>Als percentage is dat:</p>
      <p class="formula">\frac{2}{5} = 0,4 = 40\\%</p>
      <p>Het aandeel blauw is:</p>
      <p class="formula">\frac{3}{5} = 0,6 = 60\\%</p>
      <p>Samen krijgen we:</p>
      <p class="formula">40\\% + 60\\% = 100\\%</p>
      <p>Een verhouding vertelt dus ook hoe een geheel over verschillende groepen verdeeld is.</p>

      <h3>7. Verhoudingstabellen</h3>
      <p>Een <strong>verhoudingstabel</strong> helpt ons om overzichtelijk te rekenen met gelijkwaardige verhoudingen.</p>
      <p>Stel dat 3 broodjes €6 kosten. We willen weten wat 5 broodjes kosten.</p>
      <table>
        <tr><th>Aantal broodjes</th><th>Prijs</th></tr>
        <tr><td>3</td><td>€6</td></tr>
        <tr><td>1</td><td>€2</td></tr>
        <tr><td>5</td><td>€10</td></tr>
      </table>
      <p>We hebben eerst beide waarden door 3 gedeeld:</p>
      <p class="formula">3 ÷ 3 = 1</p>
      <p class="formula">€6 ÷ 3 = €2</p>
      <p>Daarna vermenigvuldigen we beide waarden met 5:</p>
      <p class="formula">1 × 5 = 5</p>
      <p class="formula">€2 × 5 = €10</p>
      <p>De verhouding blijft dus behouden.</p>
      <div class="callout">
        <strong>Strategie</strong>
        <p>Bij een verhoudingstabel kun je vaak eerst naar <strong>1</strong> gaan. Daarna bouw je de gevraagde hoeveelheid weer op.</p>
      </div>

      <h3>8. Werken met een vermenigvuldigingsfactor</h3>
      <p>We kunnen een verhouding ook rechtstreeks vergroten of verkleinen met een <strong>vermenigvuldigingsfactor</strong>. Dat begrip kennen we al uit 1.5.</p>
      <p>Stel:</p>
      <p class="formula">4 : 7</p>
      <p>Als beide termen met 3 worden vermenigvuldigd, krijgen we:</p>
      <p class="formula">(4 × 3) :(7 × 3) = 12 : 21</p>
      <p>De factor is hier 3.</p>
      <p>Omgekeerd kunnen we van 12 : 21 teruggaan naar 4 : 7 door beide termen door 3 te delen.</p>
      <p class="formula">(12 ÷ 3) : (21 ÷ 3) = 4 : 7</p>
      <p>Bij concrete problemen is het handig om eerst te zoeken naar de factor waarmee de ene hoeveelheid is veranderd. Als de verhouding gelijk blijft, moet de andere hoeveelheid met <strong>dezelfde factor</strong> veranderen.</p>

      <h3>9. Direct evenredige grootheden</h3>
      <p>Soms veranderen twee grootheden samen volgens een vaste verhouding. We noemen zulke grootheden <strong>recht evenredig</strong> of <strong>direct evenredig</strong>.</p>
      <p>Neem opnieuw broodjes en prijs. Als één broodje €2 kost, dan geldt:</p>
      <p class="formula">1\\ broodje → €2</p>
      <p class="formula">2\\ broodjes → €4</p>
      <p class="formula">3\\ broodjes → €6</p>
      <p class="formula">5\\ broodjes → €10</p>
      <p>Als het aantal broodjes bijvoorbeeld verdubbelt, verdubbelt de prijs ook:</p>
      <p class="formula">3 → 6</p>
      <p class="formula">€6 → €12</p>
      <p>Als het aantal broodjes halveert, halveert de prijs:</p>
      <p class="formula">4 → 2</p>
      <p class="formula">€8 → €4</p>
      <p>Dat is het kenmerk van directe evenredigheid: <strong>dezelfde vermenigvuldigingsfactor werkt op beide grootheden</strong>.</p>

      <h3>10. De constante verhouding</h3>
      <p>Bij direct evenredige grootheden blijft de verhouding tussen de twee grootheden constant.</p>
      <p>Bij een prijs van €2 per broodje krijgen we bijvoorbeeld:</p>
      <p class="formula">\frac{€6}{3} = €2</p>
      <p class="formula">\frac{€10}{5} = €2</p>
      <p class="formula">\frac{€14}{7} = €2</p>
      <p>De prijs per broodje blijft dus steeds €2.</p>
      <p>Dit noemen we de <strong>evenredigheidsconstante</strong>: de vaste hoeveelheid die bij één eenheid van de andere grootheid hoort.</p>
      <p>In dit voorbeeld is dat:</p>
      <p class="formula">€2\\ per\\ broodje</p>
      <p>Deze manier van denken is bijzonder nuttig in concrete situaties: prijs per stuk, afstand per tijdseenheid bij constante snelheid, hoeveelheden in recepten en schaalmodellen.</p>

      <h3>11. Controleren of een verband evenredig is</h3>
      <p>We kunnen met een verhoudingstabel controleren of twee grootheden recht evenredig zijn.</p>
      <table>
        <tr><th>Aantal</th><th>Prijs</th><th>Prijs per stuk</th></tr>
        <tr><td>2</td><td>€6</td><td>€3</td></tr>
        <tr><td>4</td><td>€12</td><td>€3</td></tr>
        <tr><td>6</td><td>€18</td><td>€3</td></tr>
      </table>
      <p>De prijs per stuk blijft constant. Daarom zijn aantal en prijs hier recht evenredig.</p>
      <p>Maar kijk naar een situatie met een vaste startkost van €5 en daarnaast €2 per artikel:</p>
      <table>
        <tr><th>Aantal</th><th>Prijs</th><th>Prijs per stuk</th></tr>
        <tr><td>1</td><td>€7</td><td>€7</td></tr>
        <tr><td>2</td><td>€9</td><td>€4,50</td></tr>
        <tr><td>3</td><td>€11</td><td>€3,67</td></tr>
      </table>
      <p>De prijs per stuk blijft niet constant. Dit verband is dus <strong>niet recht evenredig</strong>.</p>

      <h3>12. Schaal en schaalmodellen</h3>
      <p>Een schaal is een verhouding tussen een afstand op een tekening of model en de werkelijke afstand.</p>
      <p>Bij schaal 1 : 100 betekent dit dat 1 eenheid op de tekening overeenkomt met 100 dezelfde eenheden in werkelijkheid.</p>
      <p>Bijvoorbeeld: 1 cm op een plan komt overeen met:</p>
      <p class="formula">1 × 100 = 100\\ cm</p>
      <p>Dat is 1 meter.</p>
      <p>Een muur die op een plan 4 cm lang is, is in werkelijkheid:</p>
      <p class="formula">4 × 100 = 400\\ cm = 4\\ m</p>
      <p>Let goed op de <strong>eenheden</strong>. Eerst moeten de twee afstanden in dezelfde eenheid staan.</p>
      <div class="callout">
        <strong>Onthoud</strong>
        <p>Bij een schaalverhouding moet je altijd weten welke grootheid bij welke hoort en moeten de eenheden correct worden omgerekend.</p>
      </div>

      <h3>13. Recepten en evenredig vergroten</h3>
      <p>Een recept is een mooi voorbeeld van directe evenredigheid.</p>
      <p>Voor 4 personen heb je bijvoorbeeld 300 g bloem nodig. Voor 8 personen heb je twee keer zoveel mensen:</p>
      <p class="formula">8 ÷ 4 = 2</p>
      <p>Dezelfde factor 2 passen we toe op de hoeveelheid bloem:</p>
      <p class="formula">300 × 2 = 600\\ g</p>
      <p>Voor 6 personen is de factor:</p>
      <p class="formula">6 ÷ 4 = 1,5</p>
      <p>Dus:</p>
      <p class="formula">300 × 1,5 = 450\\ g</p>
      <p>De hoeveelheden in het recept blijven in dezelfde verhouding.</p>

      <h3>14. Evenredigheid oplossen met bekende waarden</h3>
      <p>Bij een evenredigheidsprobleem kennen we vaak drie waarden en moeten we de vierde vinden.</p>
      <p>Stel: 5 kg appels kosten €12. Hoeveel kosten 8 kg?</p>
      <p>We kunnen eerst de prijs van 1 kg bepalen:</p>
      <p class="formula">€12 ÷ 5 = €2,40</p>
      <p>Daarna rekenen we voor 8 kg:</p>
      <p class="formula">€2,40 × 8 = €19,20</p>
      <p>Dus:</p>
      <p class="formula">8\\ kg → €19,20</p>
      <p>We hadden ook rechtstreeks kunnen kijken naar de factor:</p>
      <p class="formula">8 ÷ 5 = 1,6</p>
      <p>en vervolgens:</p>
      <p class="formula">€12 × 1,6 = €19,20</p>
      <p>Beide methoden geven hetzelfde resultaat.</p>

      <h3>15. De verhouding tussen drie of meer hoeveelheden</h3>
      <p>Een verhouding hoeft niet altijd maar twee hoeveelheden te vergelijken.</p>
      <p>Stel dat een verf wordt gemengd in de verhouding 2 delen geel, 1 deel rood en 3 delen wit.</p>
      <p>We schrijven:</p>
      <p class="formula">2 : 1 : 3</p>
      <p>In totaal zijn er:</p>
      <p class="formula">2 + 1 + 3 = 6\\ delen</p>
      <p>Als we 12 liter verf willen maken, hoort bij één deel:</p>
      <p class="formula">12 ÷ 6 = 2\\ liter</p>
      <p>Dan hebben we:</p>
      <p class="formula">2 × 2 = 4\\ liter\\ geel</p>
      <p class="formula">1 × 2 = 2\\ liter\\ rood</p>
      <p class="formula">3 × 2 = 6\\ liter\\ wit</p>
      <p>Controle:</p>
      <p class="formula">4 + 2 + 6 = 12\\ liter</p>

      <h3>16. Verhoudingen en breuken: hetzelfde getal, andere context</h3>
      <p>Een verhouding van 2 op 3 kan als verhouding worden geschreven:</p>
      <p class="formula">2 : 3</p>
      <p>en als breuk:</p>
      <p class="formula">\frac{2}{3}</p>
      <p>Maar de betekenis van de breuk hangt af van wat we vergelijken.</p>
      <p>Als 2 rode appels tegenover 3 groene appels staan, betekent 2/3: <strong>het aantal rode appels gedeeld door het aantal groene appels</strong>.</p>
      <p>Als 2 van de 3 leerlingen een fiets hebben, betekent 2/3: <strong>het deel van de leerlingen dat een fiets heeft</strong>.</p>
      <p>Dezelfde breuknotatie kan dus verschillende concrete situaties beschrijven. Daarom moeten we altijd duidelijk zijn over <strong>wat de twee hoeveelheden voorstellen</strong>.</p>

      <h3>17. Veelgemaakte fouten</h3>
      <ul>
        <li><strong>Slechts één term veranderen:</strong> bij een gelijkwaardige verhouding moeten beide termen met dezelfde factor worden vermenigvuldigd of gedeeld.</li>
        <li><strong>De volgorde verwisselen:</strong> 2 : 3 is niet hetzelfde als 3 : 2.</li>
        <li><strong>Losse getallen vergelijken:</strong> bij verhoudingen moeten we de verhouding als geheel vergelijken.</li>
        <li><strong>Eenheden vergeten:</strong> bij schaal en concrete grootheden moeten de eenheden kloppen.</li>
        <li><strong>Een vaste kost als evenredig behandelen:</strong> als er een startkost is, blijft de prijs per stuk meestal niet constant.</li>
      </ul>

      <div class="callout insight">
        <strong>Het kernidee van evenredigheid</strong>
        <p>Bij een recht evenredig verband veranderen twee grootheden met <strong>dezelfde vermenigvuldigingsfactor</strong>. Daardoor blijft hun verhouding constant.</p>
        <p>Als één grootheid bijvoorbeeld met factor 2 wordt vermenigvuldigd, moet de andere grootheid ook met factor 2 worden vermenigvuldigd.</p>
      </div>

      <h3>18. Samenvatting</h3>
      <ul>
        <li>Een verhouding vergelijkt twee of meer hoeveelheden.</li>
        <li>De volgorde van de termen is belangrijk.</li>
        <li>Gelijkwaardige verhoudingen krijg je door alle termen met dezelfde niet-nulfactor te vermenigvuldigen of te delen.</li>
        <li>Een verhouding kun je vereenvoudigen, bijvoorbeeld met de GGD.</li>
        <li>Een verhouding kan ook als breuk worden voorgesteld, maar de context bepaalt wat die breuk betekent.</li>
        <li>Bij directe evenredigheid blijft de verhouding tussen de grootheden constant.</li>
        <li>Een verhoudingstabel helpt om evenredige hoeveelheden te berekenen.</li>
        <li>Bij schaalmodellen en recepten moet dezelfde factor op alle bijbehorende hoeveelheden worden toegepast.</li>
      </ul>
    `
  },

  {
    id: "1.7",
    title: "Delers en deelbaarheid",
    goal: "Vind delers en veelvouden en herken deelbaarheid met de regels voor 2, 3, 4, 5, 6, 9, 10 en 12.",
    theory: /* html */`
      <h2>Delers en deelbaarheid</h2>
      <p><strong>Doel:</strong> begrijpen wat delers en veelvouden zijn, herkennen wanneer een getal deelbaar is, deelbaarheidsregels gebruiken en deze kennis toepassen bij factorisatie en problemen.</p>

      <div class="callout">
        <strong>Vertrekpunt</strong>
        <p>In 1.6 leerden we verhoudingen vereenvoudigen. Daarbij gebruikten we al delers: we deelden bijvoorbeeld 18 en 24 door 6 om de verhouding <span class="formula-inline">18 : 24</span> te vereenvoudigen. In deze les onderzoeken we precies wat een <strong>deler</strong> is en wanneer een getal <strong>deelbaar</strong> is door een ander getal.</p>
      </div>

      <h3>1. Wat is een deler?</h3>
      <p>Een <strong>deler</strong> van een getal is een natuurlijk getal waarmee je dat getal kunt delen zonder rest.</p>
      <p>Kijk naar 12. We kunnen 12 delen door 1, 2, 3, 4, 6 en 12 zonder rest:</p>
      <p class="formula">12 ÷ 1 = 12</p>
      <p class="formula">12 ÷ 2 = 6</p>
      <p class="formula">12 ÷ 3 = 4</p>
      <p class="formula">12 ÷ 4 = 3</p>
      <p class="formula">12 ÷ 6 = 2</p>
      <p class="formula">12 ÷ 12 = 1</p>
      <p>Daarom zijn 1, 2, 3, 4, 6 en 12 de delers van 12.</p>
      <div class="callout"><strong>Definitie</strong><p>Een natuurlijk getal <span class="formula-inline">a</span> is een deler van <span class="formula-inline">b</span> als <span class="formula-inline">b ÷ a</span> een natuurlijk getal is.</p></div>

      <h3>2. Delen zonder rest</h3>
      <p>De betekenis van een deler kunnen we ook schrijven met een vermenigvuldiging.</p>
      <p>Omdat:</p>
      <p class="formula">12 ÷ 3 = 4</p>
      <p>geldt ook:</p>
      <p class="formula">3 × 4 = 12</p>
      <p>Als 3 een deler is van 12, bestaat er dus een natuurlijk getal waarmee je 3 kunt vermenigvuldigen om 12 te krijgen.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">2 × 6 = 12</p>
      <p>Dus 2 is een deler van 12.</p>
      <p>Maar 5 is geen deler van 12, want er bestaat geen natuurlijk getal <span class="formula-inline">k</span> waarvoor <span class="formula-inline">5 × k = 12</span>.</p>

      <h3>3. Alle delers van een getal vinden</h3>
      <p>We kunnen de delers van een getal systematisch zoeken. Neem 24.</p>
      <p>We vinden de delerparen:</p>
      <p class="formula">1 × 24 = 24</p>
      <p class="formula">2 × 12 = 24</p>
      <p class="formula">3 × 8 = 24</p>
      <p class="formula">4 × 6 = 24</p>
      <p>Daarom zijn de delers van 24:</p>
      <p class="formula">1, 2, 3, 4, 6, 8, 12, 24</p>
      <p>Elk productpaar levert twee delers. Zodra de factoren elkaar kruisen, heb je alle delers gevonden.</p>

      <h3>4. Delerparen</h3>
      <p>Als <span class="formula-inline">a × b = n</span>, dan zijn zowel <span class="formula-inline">a</span> als <span class="formula-inline">b</span> delers van <span class="formula-inline">n</span>.</p>
      <p>Voor 36 krijgen we:</p>
      <p class="formula">1 × 36 = 36</p>
      <p class="formula">2 × 18 = 36</p>
      <p class="formula">3 × 12 = 36</p>
      <p class="formula">4 × 9 = 36</p>
      <p class="formula">6 × 6 = 36</p>
      <p>De delers zijn:</p>
      <p class="formula">1, 2, 3, 4, 6, 9, 12, 18, 36</p>
      <p>Bij 6 × 6 verschijnt dezelfde deler twee keer. In de lijst schrijven we 6 daarom maar één keer.</p>

      <h3>5. Wat betekent deelbaar?</h3>
      <p>We zeggen dat een getal <strong>deelbaar</strong> is door een ander getal als de deling geen rest heeft.</p>
      <p>Omdat:</p>
      <p class="formula">24 ÷ 6 = 4</p>
      <p>is 24 deelbaar door 6.</p>
      <p>Maar:</p>
      <p class="formula">25 ÷ 6 = 4\\ rest\\ 1</p>
      <p>dus 25 is niet deelbaar door 6.</p>
      <p>De drie begrippen horen bij elkaar:</p>
      <ul><li>6 is een <strong>deler</strong> van 24;</li><li>24 is <strong>deelbaar</strong> door 6;</li><li>24 is een <strong>veelvoud</strong> van 6.</li></ul>

      <h3>6. Veelvouden</h3>
      <p>Een <strong>veelvoud</strong> van een getal krijg je door dat getal met een natuurlijk getal te vermenigvuldigen.</p>
      <p>De veelvouden van 5 zijn bijvoorbeeld:</p>
      <p class="formula">0, 5, 10, 15, 20, 25, 30, ...</p>
      <p>Want:</p>
      <p class="formula">5 × 0 = 0</p>
      <p class="formula">5 × 1 = 5</p>
      <p class="formula">5 × 2 = 10</p>
      <p class="formula">5 × 3 = 15</p>
      <p>enzovoort.</p>

      <h3>7. De relatie tussen delers en veelvouden</h3>
      <p>Delers en veelvouden zijn twee kanten van hetzelfde verband.</p>
      <p>Als:</p>
      <p class="formula">4 × 7 = 28</p>
      <p>dan geldt tegelijk:</p>
      <ul><li>4 is een deler van 28;</li><li>7 is een deler van 28;</li><li>28 is een veelvoud van 4;</li><li>28 is een veelvoud van 7.</li></ul>
      <div class="callout"><strong>Onthoud</strong><p>Als <span class="formula-inline">a × b = c</span>, dan zijn <span class="formula-inline">a</span> en <span class="formula-inline">b</span> delers van <span class="formula-inline">c</span>, en is <span class="formula-inline">c</span> een veelvoud van zowel <span class="formula-inline">a</span> als <span class="formula-inline">b</span>.</p></div>

      <h3>8. Deelbaarheid door 2</h3>
      <p>Een getal is deelbaar door 2 als het <strong>even</strong> is.</p>
      <p>Je kunt dit in het tientallig stelsel herkennen aan het laatste cijfer. Het getal moet eindigen op:</p>
      <p class="formula">0, 2, 4, 6\\ of\\ 8</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">348 ÷ 2 = 174</p>
      <p class="formula">1 026 ÷ 2 = 513</p>
      <p>Maar 347 is niet deelbaar door 2.</p>

      <h3>9. Deelbaarheid door 5 en 10</h3>
      <p>Een getal is deelbaar door 5 als het eindigt op 0 of 5.</p>
      <p class="formula">125 ÷ 5 = 25</p>
      <p class="formula">340 ÷ 5 = 68</p>
      <p>Een getal is deelbaar door 10 als het eindigt op 0.</p>
      <p class="formula">450 ÷ 10 = 45</p>
      <p>Deze regels zijn rechtstreeks verbonden met ons tientallig stelsel.</p>

      <h3>10. Deelbaarheid door 3</h3>
      <p>Tel alle cijfers van het getal op. Als die som deelbaar is door 3, dan is het oorspronkelijke getal ook deelbaar door 3.</p>
      <p>Neem 372:</p>
      <p class="formula">3 + 7 + 2 = 12</p>
      <p>12 is deelbaar door 3, dus 372 is deelbaar door 3.</p>
      <p>Controle:</p>
      <p class="formula">372 ÷ 3 = 124</p>
      <p>Bij 374 krijgen we:</p>
      <p class="formula">3 + 7 + 4 = 14</p>
      <p>14 is niet deelbaar door 3, dus 374 ook niet.</p>

      <h3>11. Deelbaarheid door 9</h3>
      <p>Voor 9 geldt een vergelijkbare regel: een getal is deelbaar door 9 als de som van zijn cijfers deelbaar is door 9.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">729 → 7 + 2 + 9 = 18</p>
      <p>18 is deelbaar door 9, dus 729 is deelbaar door 9.</p>
      <p>Ook:</p>
      <p class="formula">5 472 → 5 + 4 + 7 + 2 = 18</p>
      <p>Dus 5 472 is deelbaar door 9.</p>

      <h3>12. Deelbaarheid door 4</h3>
      <p>Een getal is deelbaar door 4 als het getal dat gevormd wordt door de <strong>laatste twee cijfers</strong> deelbaar is door 4.</p>
      <p>Bijvoorbeeld 1 236. We kijken naar 36:</p>
      <p class="formula">36 ÷ 4 = 9</p>
      <p>Dus 1 236 is deelbaar door 4.</p>
      <p>Bij 1 238 kijken we naar 38. 38 is niet deelbaar door 4, dus 1 238 is niet deelbaar door 4.</p>

      <h3>13. Deelbaarheid door 6</h3>
      <p>Omdat:</p>
      <p class="formula">6 = 2 × 3</p>
      <p>moet een getal zowel deelbaar zijn door 2 als door 3 om deelbaar te zijn door 6.</p>
      <p>Neem 438. Het laatste cijfer is 8, dus 438 is deelbaar door 2. De cijfersom is:</p>
      <p class="formula">4 + 3 + 8 = 15</p>
      <p>15 is deelbaar door 3. Daarom is 438 deelbaar door 6.</p>

      <h3>14. Deelbaarheid door 12</h3>
      <p>Ook 12 kunnen we ontbinden:</p>
      <p class="formula">12 = 3 × 4</p>
      <p>Een getal is deelbaar door 12 als het zowel deelbaar is door 3 als door 4.</p>
      <p>Neem 1 248. De cijfersom is:</p>
      <p class="formula">1 + 2 + 4 + 8 = 15</p>
      <p>Dus 1 248 is deelbaar door 3. De laatste twee cijfers zijn 48:</p>
      <p class="formula">48 ÷ 4 = 12</p>
      <p>Dus 1 248 is ook deelbaar door 4 en bijgevolg door 12.</p>

      <h3>15. Delers gebruiken bij vereenvoudigen</h3>
      <p>De kennis van delers is ook nuttig bij breuken en verhoudingen.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">24/36</p>
      <p>24 en 36 hebben gemeenschappelijke delers. De grootste is 12:</p>
      <p class="formula">24 ÷ 12 = 2</p>
      <p class="formula">36 ÷ 12 = 3</p>
      <p>Dus:</p>
      <p class="formula">\frac{24}{36} = \frac{2}{3}</p>
      <p>Hetzelfde idee gebruikten we in 1.6 bij het vereenvoudigen van verhoudingen. In 1.9 zullen we leren hoe we zulke gemeenschappelijke delers systematisch kunnen vinden met de <strong>GGD</strong>.</p>

      <h3>16. Samenvatting en strategie</h3>
      <ul>
        <li>Een <strong>deler</strong> deelt een getal zonder rest.</li>
        <li>Een getal is <strong>deelbaar</strong> door een ander getal als de deling geen rest heeft.</li>
        <li>Een <strong>veelvoud</strong> krijg je door een getal met een natuurlijk getal te vermenigvuldigen.</li>
        <li>Als <span class="formula-inline">a × b = c</span>, zijn <span class="formula-inline">a</span> en <span class="formula-inline">b</span> delers van <span class="formula-inline">c</span>.</li>
        <li>Deelbaarheid door 2, 5 en 10 kun je aan het laatste cijfer herkennen.</li>
        <li>Voor 3 en 9 gebruik je de som van de cijfers.</li>
        <li>Voor 4 kijk je naar de laatste twee cijfers.</li>
        <li>Voor 6 moet een getal deelbaar zijn door 2 én 3.</li>
        <li>Voor 12 moet een getal deelbaar zijn door 3 én 4.</li>
      </ul>
      <div class="callout insight"><strong>Het kernidee</strong><p>Delers vertellen <strong>waarmee je een getal zonder rest kunt delen</strong>. Veelvouden vertellen <strong>welke getallen je krijgt door een getal te vermenigvuldigen</strong>. Deelbaarheidsregels laten ons deze structuur herkennen zonder telkens de volledige deling uit te voeren.</p></div>
    `
  }
,
  {
    id: "1.8",
    title: "Priemgetallen en factorisatie",
    goal: "Herken priemgetallen en ontbind een getal eenduidig in priemfactoren.",
    theory: /* html */`
      <h2>Priemgetallen en factorisatie</h2>
      <p><strong>Doel:</strong> priemgetallen herkennen, samengestelde getallen ontbinden en priemfactorisatie gebruiken.</p>

      <h3>1. Van delers naar priemgetallen</h3>
      <p>In 1.7 leerden we dat een getal delers heeft. Sommige getallen hebben precies twee positieve delers: <strong>1 en zichzelf</strong>. Deze getallen noemen we <strong>priemgetallen</strong>.</p>
      <p>Bijvoorbeeld 7 heeft alleen de delers 1 en 7. Daarom is 7 een priemgetal.</p>
      <div class="callout"><strong>Een priemgetal</strong> is een natuurlijk getal groter dan 1 met precies twee positieve delers: 1 en het getal zelf.</div>

      <h3>2. Priemgetallen herkennen</h3>
      <p>De eerste priemgetallen zijn:</p>
      <p class="formula">2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...</p>
      <p>Het getal 2 is bijzonder: het is het <strong>enige even priemgetal</strong>. Elk ander even getal is deelbaar door 2 en heeft dus meer dan twee positieve delers.</p>

      <h3>3. Samengestelde getallen</h3>
      <p>Een natuurlijk getal groter dan 1 dat geen priemgetal is, noemen we een <strong>samengesteld getal</strong>. Zo heeft 12 bijvoorbeeld de delers 1, 2, 3, 4, 6 en 12.</p>
      <p>Het getal 1 is een uitzondering: <strong>1 is noch priem, noch samengesteld</strong>.</p>

      <h3>4. Elk samengesteld getal heeft priemdelers</h3>
      <p>Als een getal samengesteld is, kunnen we het schrijven als een product van kleinere natuurlijke getallen. Die factoren kunnen we op hun beurt verder ontbinden.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">12 = 3 × 4 = 3 × 2 × 2</p>
      <p>We zijn uiteindelijk uitgekomen bij alleen priemgetallen.</p>

      <h3>5. Ontbinden in factoren</h3>
      <p>Een getal schrijven als een product van factoren noemen we <strong>factoriseren</strong> of <strong>ontbinden in factoren</strong>.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">24 = 6 × 4</p>
      <p>Maar we kunnen verdergaan:</p>
      <p class="formula">24 = 2 × 3 × 2 × 2</p>
      <p>Alle factoren zijn nu priem.</p>

      <h3>6. Priemfactorisatie</h3>
      <p>Een ontbinding waarin alle factoren priemgetallen zijn, noemen we de <strong>priemfactorisatie</strong>.</p>
      <p>Voor 60 krijgen we bijvoorbeeld:</p>
      <p class="formula">60 = 2 × 2 × 3 × 5</p>
      <p>We kunnen dezelfde priemfactoren ook overzichtelijker schrijven met machten. Dat leren we in 1.10; voorlopig is het product voldoende.</p>

      <h3>7. Een factorboom</h3>
      <p>Een <strong>factorboom</strong> helpt om een getal stap voor stap te ontbinden. Kies telkens een factorisatie en ga door tot elke tak eindigt in een priemgetal.</p>
      <p>Voor 36 kan dat bijvoorbeeld via:</p>
      <p class="formula">36 = 4 × 9 = 2 × 2 × 3 × 3</p>
      <p>De volgorde waarin je de factoren vindt, kan verschillen. De uiteindelijke priemfactoren zijn dezelfde, alleen eventueel in een andere volgorde.</p>

      <h3>8. De fundamentele eigenschap van priemfactorisatie</h3>
      <p>Elk natuurlijk getal groter dan 1 kan als product van priemgetallen worden geschreven. Bovendien is die priemfactorisatie, afgezien van de volgorde van de factoren, <strong>uniek</strong>.</p>
      <p>Zo is:</p>
      <p class="formula">60 = 2 × 2 × 3 × 5</p>
      <p>en niet een andere verzameling priemfactoren die opnieuw 60 oplevert.</p>

      <h3>9. Factoriseren met kleine priemgetallen</h3>
      <p>Bij het factoriseren is het handig om eerst te controleren op deelbaarheid door kleine priemgetallen:</p>
      <p class="formula">2, 3, 5, 7, 11, 13, ...</p>
      <p>Gebruik de deelbaarheidsregels uit 1.7 wanneer die beschikbaar zijn. Zo zie je snel of een getal verder ontbonden kan worden.</p>

      <h3>10. Een voorbeeld stap voor stap</h3>
      <p>We ontbinden 84. Het getal is even, dus we delen door 2:</p>
      <p class="formula">84 = 2 × 42</p>
      <p>Nogmaals door 2:</p>
      <p class="formula">42 = 2 × 21</p>
      <p>En 21 is deelbaar door 3:</p>
      <p class="formula">21 = 3 × 7</p>
      <p>Dus:</p>
      <p class="formula">84 = 2 × 2 × 3 × 7</p>

      <h3>11. Factoriseren vanuit een deler</h3>
      <p>Je hoeft niet altijd met 2 te beginnen. Je mag iedere geschikte deler kiezen en daarna verder ontbinden.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">90 = 9 × 10 = 3 × 3 × 2 × 5</p>
      <p>Je krijgt dus dezelfde priemfactorisatie, ook al heb je een andere eerste stap gekozen.</p>

      <h3>12. Priemfactorisatie en delers</h3>
      <p>De priemfactorisatie laat zien welke priemgetallen als bouwstenen in een getal zitten. Daarmee kunnen we later systematisch de delers van een getal bepalen.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">12 = 2 × 2 × 3</p>
      <p>De priemfactoren 2 en 3 zijn de belangrijkste bouwstenen van 12.</p>

      <h3>13. Gemeenschappelijke priemfactoren</h3>
      <p>Als twee getallen dezelfde priemfactor bevatten, noemen we die factor <strong>gemeenschappelijk</strong>.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">18 = 2 × 3 × 3</p>
      <p class="formula">30 = 2 × 3 × 5</p>
      <p>De getallen 2 en 3 komen in beide priemfactorisaties voor. Dit idee wordt belangrijk bij de GGD in 1.9.</p>

      <h3>14. Priemfactorisatie en breuken</h3>
      <p>Priemfactorisatie kan helpen om te zien welke factoren in de teller en noemer van een breuk kunnen worden weggewerkt.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">\frac{18}{30} = \frac{2 × 3 × 3}{2 × 3 × 5} = \frac{3}{5}</p>
      <p>De gemeenschappelijke factoren 2 en 3 kunnen we wegdelen. In 1.9 maken we dit proces systematischer met de grootste gemene deler.</p>

      <h3>15. Is een getal priem?</h3>
      <p><strong>Uitbreiding: een snelle priemtest</strong></p>
      <p>Er bestaat een handige manier om grotere getallen snel op priemheid te testen.</p>
      <p>Daarbij hoef je alleen te controleren of het getal deelbaar is door priemgetallen die niet groter zijn dan de vierkantswortel van het getal.</p>
      
      <p><strong>Let op: het begrip vierkantswortel behandelen we pas in 1.11 Wortels.</strong></p>
      <p>Voorlopig hoef je deze methode dus niet zelfstandig te kunnen toepassen. Je kunt de methode alvast bekijken als een vooruitblik.</p>
      
      <p>Om te onderzoeken of een getal priem is, moet je nagaan of het een deler heeft naast 1 en zichzelf. De deelbaarheidsregels helpen daarbij.</p>
      <p>Voor grotere getallen hoeven we niet alle mogelijke delers te testen. Als een getal <strong>n</strong> samengesteld is, heeft het een deler die niet groter is dan <span class="formula-inline">√n</span>. Daarom volstaat het om priemdelers tot en met <span class="formula-inline">√n</span> te controleren.</p>

      <h3>16. Voorbeeld: is 97 priem?</h3>
      <p>We controleren de priemgetallen die niet groter zijn dan <span class="formula-inline">√97</span>. Omdat <span class="formula-inline">√97</span> kleiner is dan 10, volstaan 2, 3, 5 en 7.</p>
      <ul>
        <li>97 is niet deelbaar door 2;</li>
        <li>de cijfersom is 16, dus 97 is niet deelbaar door 3;</li>
        <li>97 eindigt niet op 0 of 5;</li>
        <li>97 is niet deelbaar door 7.</li>
      </ul>
      <p>Daarom is 97 een priemgetal.</p>

      <h3>17. Waarom factorisatie belangrijk is</h3>
      <p>Priemfactorisatie is een van de belangrijkste manieren om de structuur van natuurlijke getallen zichtbaar te maken. Ze vormt de basis voor het berekenen van de <strong>GGD</strong> en het <strong>KGV</strong>, het vereenvoudigen van breuken en later ook het werken met machten.</p>
      <div class="callout"><strong>Belangrijk idee:</strong> priemgetallen zijn de ondeelbare bouwstenen van de natuurlijke getallen groter dan 1.</div>

      <h3>18. Samenvatting</h3>
      <ul>
        <li>Een priemgetal groter dan 1 heeft precies twee positieve delers: 1 en zichzelf.</li>
        <li>1 is noch priem, noch samengesteld.</li>
        <li>Een samengesteld getal kan worden ontbonden in factoren.</li>
        <li>De priemfactorisatie schrijft een getal als product van priemgetallen.</li>
        <li>Die priemfactorisatie is uniek, afgezien van de volgorde.</li>
        <li>Priemfactorisatie wordt in 1.9 gebruikt voor GGD en KGV.</li>
      </ul>
    `
  },
  {
    id: "1.9",
    title: "GGD, KGV en het algoritme van Euclides",
    goal: "Bereken GGD en KGV, ook met het algoritme van Euclides, en gebruik ze bij breuken.",
    theory: /* html */`
      <h2>GGD, KGV en het algoritme van Euclides</h2>
      <p><strong>Doel:</strong> de GGD en het KGV van getallen bepalen en verschillende methoden gebruiken om ze te berekenen.</p>

      <h3>1. Van gemeenschappelijke delers naar de GGD</h3>
      <p>In 1.7 leerden we wat delers zijn en in 1.8 zagen we hoe priemfactorisatie de bouwstenen van getallen zichtbaar maakt. Als twee getallen dezelfde delers hebben, noemen we die <strong>gemeenschappelijke delers</strong>.</p>
      <p>Bijvoorbeeld voor 12 en 18:</p>
      <p class="formula">Delers(12) = {1, 2, 3, 4, 6, 12}</p>
      <p class="formula">Delers(18) = {1, 2, 3, 6, 9, 18}</p>
      <p>De gemeenschappelijke delers zijn 1, 2, 3 en 6. De grootste daarvan is 6.</p>

      <h3>2. De grootste gemene deler</h3>
      <p>De <strong>grootste gemene deler</strong>, afgekort <strong>GGD</strong>, van twee of meer natuurlijke getallen is de grootste positieve deler die ze gemeenschappelijk hebben.</p>
      <p>Dus:</p>
      <p class="formula">GGD(12, 18) = 6</p>
      <div class="callout"><strong>GGD = grootste gemeenschappelijke deler.</strong></div>

      <h3>3. De GGD gebruiken bij breuken</h3>
      <p>De GGD is handig om een breuk in één stap maximaal te vereenvoudigen.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">GGD(84, 126) = 42</p>
      <p>Daarom:</p>
      <p class="formula">\frac{84}{126} = \frac{84 ÷ 42}{126 ÷ 42} = \frac{2}{3}</p>
      <p>Omdat 2 en 3 geen gemeenschappelijke deler groter dan 1 hebben, is de breuk verder niet te vereenvoudigen.</p>

      <h3>4. GGD vinden door alle delers te zoeken</h3>
      <p>Voor kleine getallen kun je de GGD bepalen door de delers van beide getallen op te schrijven.</p>
      <p>Bijvoorbeeld voor 20 en 30:</p>
      <p class="formula">Delers(20) = {1, 2, 4, 5, 10, 20}</p>
      <p class="formula">Delers(30) = {1, 2, 3, 5, 6, 10, 15, 30}</p>
      <p>De grootste gemeenschappelijke deler is 10:</p>
      <p class="formula">GGD(20, 30) = 10</p>

      <h3>5. GGD met priemfactorisatie</h3>
      <p>Met priemfactorisatie kunnen we de gemeenschappelijke priemfactoren rechtstreeks zoeken.</p>
      <p>Neem 36 en 60:</p>
      <p class="formula">36 = 2 × 2 × 3 × 3</p>
      <p class="formula">60 = 2 × 2 × 3 × 5</p>
      <p>De gemeenschappelijke priemfactoren zijn 2, 2 en 3. Hun product is:</p>
      <p class="formula">2 × 2 × 3 = 12</p>
      <p>Dus:</p>
      <p class="formula">GGD(36, 60) = 12</p>

      <h3>6. Gemeenschappelijke factoren tellen</h3>
      <p>Bij priemfactorisatie moet je opletten dat je een gemeenschappelijke priemfactor niet vaker gebruikt dan hij in beide getallen voorkomt.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">24 = 2 × 2 × 2 × 3</p>
      <p class="formula">36 = 2 × 2 × 3 × 3</p>
      <p>Voor de GGD nemen we twee factoren 2 en één factor 3:</p>
      <p class="formula">GGD(24, 36) = 2 × 2 × 3 = 12</p>

      <h3>7. Van delers naar veelvouden: het KGV</h3>
      <p>Bij de GGD kijken we naar <strong>delers</strong>. Bij het <strong>kleinste gemene veelvoud</strong>, afgekort <strong>KGV</strong>, kijken we naar veelvouden.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">Veelvouden(4) = 4, 8, 12, 16, 20, 24, ...</p>
      <p class="formula">Veelvouden(6) = 6, 12, 18, 24, ...</p>
      <p>Het kleinste positieve veelvoud dat in beide lijsten voorkomt is 12.</p>
      <p class="formula">KGV(4, 6) = 12</p>

      <h3>8. Het KGV</h3>
      <p>Het <strong>kleinste gemene veelvoud</strong> van twee of meer natuurlijke getallen is het kleinste positieve veelvoud dat voor alle getallen een veelvoud is.</p>
      <div class="callout"><strong>KGV = kleinste gemeenschappelijke veelvoud.</strong></div>
      <p>We zoeken dus niet naar 0, ook al is 0 een veelvoud van elk natuurlijk getal. We nemen het <strong>kleinste positieve</strong> gemeenschappelijke veelvoud.</p>

      <h3>9. KGV vinden door veelvouden op te schrijven</h3>
      <p>Voor kleine getallen kun je de veelvouden opschrijven tot je een gemeenschappelijk veelvoud vindt.</p>
      <p>Voor 8 en 12:</p>
      <p class="formula">8, 16, 24, 32, ...</p>
      <p class="formula">12, 24, 36, ...</p>
      <p>Dus:</p>
      <p class="formula">KGV(8, 12) = 24</p>

      <h3>10. KGV met priemfactorisatie</h3>
      <p>Ook het KGV kunnen we met priemfactorisatie vinden. Nu nemen we juist <strong>iedere priemfactor zo vaak als hij in minstens één van de getallen voorkomt</strong>.</p>
      <p>Voor 12 en 18:</p>
      <p class="formula">12 = 2 × 2 × 3</p>
      <p class="formula">18 = 2 × 3 × 3</p>
      <p>We hebben nodig: twee factoren 2 en twee factoren 3.</p>
      <p class="formula">KGV(12, 18) = 2 × 2 × 3 × 3 = 36</p>

      <h3>11. GGD en KGV: twee verschillende vragen</h3>
      <p>GGD en KGV lijken op elkaar, maar beantwoorden een andere vraag.</p>
      <ul>
        <li><strong>GGD:</strong> welke grootste deler hebben de getallen gemeenschappelijk?</li>
        <li><strong>KGV:</strong> wat is het kleinste positieve veelvoud dat de getallen gemeenschappelijk hebben?</li>
      </ul>
      <p>Een handige geheugensteun:</p>
      <p class="formula">GGD → delen</p>
      <p class="formula">KGV → veelvouden</p>

      <h3>12. Wanneer gebruik je de GGD?</h3>
      <p>De GGD is nuttig wanneer je iets in <strong>gelijke, zo groot mogelijke groepen</strong> wilt verdelen zonder rest.</p>
      <p>Bijvoorbeeld: 24 rode en 36 blauwe knikkers verdelen in een zo groot mogelijk aantal identieke pakketjes. Het aantal pakketjes wordt dan bepaald door de GGD van 24 en 36.</p>
      <p class="formula">GGD(24, 36) = 12</p>
      <p>Je kunt dus 12 identieke pakketjes maken, met 2 rode en 3 blauwe knikkers per pakketje.</p>

      <h3>13. Wanneer gebruik je het KGV?</h3>
      <p>Het KGV is nuttig wanneer verschillende regelmatige gebeurtenissen <strong>tegelijk willen samenvallen</strong>.</p>
      <p>Stel dat een lamp elke 6 seconden knippert en een andere elke 8 seconden. Ze knipperen opnieuw tegelijk na:</p>
      <p class="formula">KGV(6, 8) = 24</p>
      <p>Na 24 seconden vallen de twee momenten weer samen.</p>

      <h3>14. De relatie tussen GGD en KGV</h3>
      <p>Voor twee positieve gehele getallen <strong>a</strong> en <strong>b</strong> bestaat een belangrijke relatie:</p>
      <p class="formula">GGD(a, b) × KGV(a, b) = a × b</p>
      <p>Bijvoorbeeld voor 12 en 18:</p>
      <p class="formula">6 × 36 = 12 × 18 = 216</p>
      <p>Deze relatie is een handige controle wanneer je de GGD en het KGV hebt berekend.</p>

<h3>15. Het algoritme van Euclides</h3>

<p>We hebben geleerd hoe we de <strong>GGD</strong> van twee getallen kunnen vinden door hun delers te vergelijken.</p>

<p>Bij kleine getallen werkt dat prima. Maar wat als de getallen veel groter worden?</p>

<p>Daarvoor bestaat een handige methode: het <strong>algoritme van Euclides</strong>.</p>

<div class="callout">
  <p><strong>Het idee is eenvoudig:</strong></p>
  <p>We delen het grootste getal door het kleinste getal en kijken naar de <strong>rest</strong>.</p>
  <p>Daarna gaan we verder met het kleinste getal en de rest.</p>
</div>

<h4>Een voorbeeld: de GGD van 48 en 18</h4>

<p>We willen de GGD van 48 en 18 vinden.</p>

<p>We beginnen met een deling:</p>

<p class="formula">48 ÷ 18 = 2\\ rest\\ 12</p>

<p>De rest is dus <strong>12</strong>.</p>

<p>Nu laten we 48 even los. We gaan verder met <strong>18 en 12</strong>.</p>

<p>Opnieuw delen we:</p>

<p class="formula">18 ÷ 12 = 1\\ rest\\ 6</p>

<p>De nieuwe rest is <strong>6</strong>.</p>

<p>We gaan verder met <strong>12 en 6</strong>:</p>

<p class="formula">12 ÷ 6 = 2\\ rest\\ 0</p>

<p>Nu is de rest <strong>0</strong>. We zijn klaar.</p>

<div class="callout">
  <p><strong>De laatste rest die niet nul was, is de GGD.</strong></p>
  <p class="formula">GGD(48,18) = 6</p>
</div>

<h4>Waarom werkt dit?</h4>

<p>Bij iedere stap vervangen we het grootste getal door de rest van de deling.</p>

<p>Bij ons voorbeeld krijgen we:</p>

<p class="formula">48\\ en\\ 18 → 18\\ en\\ 12 → 12\\ en\\ 6 → 6\\ en\\ 0</p>

<p>De gemeenschappelijke delers veranderen daarbij niet. Daarom blijft de GGD dezelfde.</p>

<p>We hoeven dus niet alle delers van de twee getallen op te schrijven.</p>

<h4>De stappen op een rij</h4>

<ol>
  <li>Neem de twee getallen.</li>
  <li>Deel het grootste getal door het kleinste.</li>
  <li>Noteer de rest.</li>
  <li>Neem het vorige kleinste getal en de rest.</li>
  <li>Herhaal dit totdat de rest 0 is.</li>
  <li>De laatste rest die niet 0 was, is de GGD.</li>
</ol>

<div class="callout">
  <p><strong>Onthoud:</strong></p>
  <p>Bij het algoritme van Euclides schuift de rest telkens naar voren.</p>
  <p class="formula">groot getal → klein getal → rest</p>
  <p>Wanneer de rest 0 wordt, hebben we de GGD gevonden.</p>
</div>

<h4>Nog een voorbeeld</h4>

<p>We zoeken de GGD van 84 en 30.</p>

<p>Stap 1:</p>
<p class="formula">84 ÷ 30 = 2 rest 24</p>

<p>Stap 2:</p>
<p class="formula">30 ÷ 24 = 1 rest 6</p>

<p>Stap 3:</p>
<p class="formula">24 ÷ 6 = 4 rest 0</p>

<p>De laatste rest die niet nul was, is 6.</p>

<p>Dus:</p>

<p class="formula">GGD(84,30) = 6</p>

<div class="callout">
  <p><strong>Het algoritme van Euclides is eigenlijk steeds dezelfde vraag:</strong></p>
  <p>“Wat is de rest als ik het grootste getal door het kleinste deel?”</p>
  <p>Met die rest gaan we verder totdat de rest 0 wordt.</p>
</div>


      <h3>18. Samenvatting en strategie</h3>
      <ul>
        <li>De GGD is de grootste positieve gemeenschappelijke deler.</li>
        <li>Het KGV is het kleinste positieve gemeenschappelijke veelvoud.</li>
        <li>Voor kleine getallen kun je delers of veelvouden opschrijven.</li>
        <li>Met priemfactorisatie neem je voor de GGD de gemeenschappelijke factoren en voor het KGV alle benodigde factoren.</li>
        <li>De relatie <span class="formula-inline">GGD(a,b) × KGV(a,b) = a × b</span> kan als controle dienen.</li>
        <li>Het algoritme van Euclides is een efficiënte methode om de GGD te berekenen.</li>
      </ul>
      <div class="callout"><strong>Vooruitblik:</strong> met GGD en KGV hebben we de belangrijkste bouwstenen van de deelbaarheidsrekenkunde verzameld. In de volgende onderdelen kunnen we deze kennis combineren met machten en wortels.</div>
    `
  },
{
    id: "1.10",
    title: "Machten",
    goal: "Lees en bereken machten met gehele niet-negatieve exponent, inclusief de rekenregels voor hetzelfde grondtal.",
    theory: /* html */` 
      <h2>Machten</h2>
      <p><strong>Doel:</strong> machten begrijpen, lezen, berekenen en gebruiken in eenvoudige berekeningen.</p>

      <h3>1. Van herhaald vermenigvuldigen naar een macht</h3>
      <p>Soms vermenigvuldigen we hetzelfde getal meerdere keren met zichzelf.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">2 × 2 × 2 × 2 = 16</p>
      <p>In plaats van vier keer 2 te schrijven, kunnen we dit korter noteren:</p>
      <p class="formula">2^4 = 16</p>
      <p>Dit noemen we een <strong>macht</strong>.</p> We lezen dit als: 2 tot de macht 4.

      <ul>
        <li><strong>2</strong> is het <strong>grondtal</strong>;</li>
        <li><strong>4</strong> is de <strong>exponent</strong>.</li>
      </ul>

      <h3>2. Grondtal en exponent</h3>

      <div class="callout"><strong>Onthoud:</strong> de exponent vertelt hoeveel keer het grondtal als factor voorkomt.</div>

      <h3>3. Een macht uitschrijven</h3>
      <p>Een macht kunnen we altijd terugschrijven als een vermenigvuldiging.</p>
      <p class="formula">5^3 = 5 × 5 × 5</p>
      <p>Dus:</p>
      <p class="formula">5^3 = 125</p>
      <p>De exponent 3 betekent dat we drie factoren 5 hebben.</p>

      <h3>4. Speciale macht: exponent 1</h3>
      <p>Als de exponent 1 is, komt het grondtal één keer voor.</p>
      <p class="formula">7^1 = 7</p>
      <p>Voor elk getal geldt:</p>
      <p class="formula">a^1 = a</p>

      <h3>5. Speciale macht: exponent 0</h3>
      <p>Voor elk getal dat niet nul is, geldt:</p>
      <p class="formula">a^0 = 1</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">5^0 = 1</p>
      <p>Dit lijkt misschien vreemd, maar deze regel zorgt ervoor dat de rekenregels voor machten netjes blijven aansluiten.</p>

      <h3>6. Machten van 10</h3>
      <p>Machten van 10 geven een handig patroon:</p>
      <p class="formula">10^1 = 10</p>
      <p class="formula">10^2 = 100</p>
      <p class="formula">10^3 = 1 000</p>
      <p class="formula">10^4 = 10 000</p>
      <p>Bij een macht van 10 komt er bij iedere stap één nul bij.</p>

      <h4>Machten en plaatswaarde</h4>
      <p>De machten van 10 helpen ons het tientallig stelsel beter te begrijpen.</p>
      <p>De eenheden, tientallen, honderdtallen en duizendtallen zijn opeenvolgende machten van 10:</p>
      <p>Zo kunnen we bijvoorbeeld schrijven:</p>
      <p class="formula">4 705 = 4 × 10^3 + 7 × 10^2 + 0 × 10^1 + 5 × 10^0</p>

      <h3>7. Vermenigvuldigen en delen van machten met hetzelfde grondtal</h3>
      <p>Wanneer we machten met hetzelfde grondtal vermenigvuldigen, mogen we de exponenten optellen.</p>
      <p class="formula">2^3 × 2^2 = 2^5</p>
      <p>Dat komt doordat:</p>
      <p class="formula">2^3 × 2^2 = (2 × 2 × 2) × (2 × 2) = 2^5</p>

      <p>Bij het delen van machten met hetzelfde grondtal trekken we de exponenten van elkaar af, zolang de deler niet nul is.</p>
      <p class="formula">2^5 ÷ 2^2 = 2^3</p>
      <p>Want van vijf factoren 2 blijven er na het wegnemen van twee factoren drie over.</p>

      <h3>8. Een macht van een macht</h3>
      <p>Soms staat er een macht bovenop een andere macht.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">(2^3)^2</p>
      <p>De macht 2<sup>3</sup> komt twee keer voor:</p>
      <p class="formula">(2^3)^2 = 2^3 × 2^3 = 2^6</p>

      <h3>9. Machten met negatieve grondtallen</h3>
      <p>Ook negatieve getallen kunnen een grondtal zijn.</p>
      <p>Bij een even exponent wordt het resultaat positief:</p>
      <p class="formula">(−3)^2 = (−3) × (−3) = 9</p>
      <p>Bij een oneven exponent blijft het resultaat negatief:</p>
      <p class="formula">(−3)^3 = (−3) × (−3) × (−3) = −27</p>
<p>De haakjes zijn belangrijk wanneer je een negatief getal tot een macht verheft.</p>

<p>De haakjes betekenen dat het volledige getal <span class="formula-inline">−3</span> het grondtal is:</p>

<p class="formula"> (−3)^2 = (−3) × (−3) = 9 </p>

<p>Zonder haakjes betekent dit iets anders. De macht hoort dan alleen bij de <span class="formula-inline">3</span>. Het minteken staat ervoor:</p>

<p class="formula"> −3^2 = −(3^2) = −9 </p>

<div class="callout"> <strong>Onthoud:</strong> staan de haakjes rond het negatieve getal, dan wordt het hele getal verheven tot de macht. Zonder haakjes wordt eerst de macht berekend en komt het minteken daarna. </div>

<p>Dit verschil wordt vooral duidelijk bij een even exponent.</p>

<p>Bij een oneven exponent blijft het negatieve teken behouden:</p>

<p class="formula"> (−2)^3 = (−2) × (−2) × (−2) = −8 </p>

<p>De haakjes maken dus duidelijk <strong>welk getal het grondtal is</strong>.</p>
      


<h3>10. Machten en volgorde van bewerkingen</h3>
      <p><strong>Machten hebben voorrang op vermenigvuldigen, delen, optellen en aftrekken.</strong></p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3 + 2^3 = 3 + 8 = 11</p>
      <p>We berekenen dus eerst de macht.</p>
      <p>Haakjes kunnen de volgorde veranderen:</p>
      <p class="formula">(3 + 2)^3 = 5^3 = 125</p>

      <h3>11. Machten gebruiken om grote getallen te schrijven</h3>
      <p>Grote getallen kunnen we compact schrijven met machten van 10.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">1 000 000 = 10^6</p>
      <p>Dit is een eerste stap naar <strong>wetenschappelijke notatie</strong>, die we later behandelen.</p>

      <h3>12. Een handige strategie</h3>
      <p>Wanneer je een macht tegenkomt:</p>
      <ol>
        <li>zoek het <strong>grondtal</strong>;</li>
        <li>zoek de <strong>exponent</strong>;</li>
        <li>schrijf de macht eventueel als herhaalde vermenigvuldiging;</li>
        <li>reken daarna uit of gebruik een passende rekenregel.</li>
      </ol>

      <h3>13. Samenvatting</h3>
      <div class="callout">
        <p>Een macht is een korte schrijfwijze voor een herhaalde vermenigvuldiging.</p>
        <p class="formula">a^n = a × a × ... × a</p>
        <p>Het getal <span class="formula-inline">a</span> is het grondtal en <span class="formula-inline">n</span> is de exponent.</p>
        <p>Belangrijke regels zijn:</p>
        <p class="formula">a^m × a^n = a^{(m+n)}</p>
        <p class="formula">a^m ÷ a^n = a^{(m−n)}</p>
        <p class="formula">(a^m)^n = a^{(m × n)}</p>
      </div>
    `
  },

  {
    id: "1.11",
    title: "Wortels",
    goal: "Gebruik de (niet-negatieve) vierkantswortel als omgekeerde van kwadrateren en vereenvoudig eenvoudige wortels.",
    theory: /* html */`
      <h2>Wortels</h2>
      <p><strong>Doel:</strong> vierkantswortels begrijpen, berekenen, schatten en gebruiken.</p>

      <h3>1. Van kwadrateren naar terugrekenen</h3>
      <p>In 1.10 leerden we machten. In het bijzonder leerden we kwadrateren: een getal vermenigvuldigen met zichzelf.</p>
      <p class="formula">5^2 = 5 × 5 = 25</p>
      <p>Nu stellen we de omgekeerde vraag:</p>
      <p>Welk getal moeten we met zichzelf vermenigvuldigen om 25 te krijgen?</p>
      <p>Het antwoord is 5.</p>
      <p>Deze omgekeerde bewerking noemen we de <strong>vierkantswortel</strong>.</p>

      <h3>2. Het wortelteken</h3>
      <p>We schrijven de vierkantswortel met het teken <strong>√</strong>.</p>
      <p class="formula">√25 = 5</p>
      <p>We lezen dit als: “de vierkantswortel van 25 is 5”.</p>
      <div class="callout"><strong>Belangrijk:</strong> √25 betekent het niet-negatieve getal dat in het kwadraat 25 geeft.</div>

      <h3>3. Kwadrateren en worteltrekken zijn omgekeerde bewerkingen</h3>
      <p>Kwadrateren en de vierkantswortel zijn elkaars omgekeerde bewerkingen.</p>
      <p class="formula">7^2 = 49</p>
      <p class="formula">√49 = 7</p>
      <p>Je kunt dus vanuit 7 naar 49 gaan door te kwadrateren en vanuit 49 terug naar 7 door de vierkantswortel te nemen.</p>

      <h3>4. Volmaakte kwadraten</h3>
      <p>Een getal dat het kwadraat is van een geheel getal noemen we een <strong>volmaakt kwadraat</strong>.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">1, 4, 9, 16, 25, 36, 49, 64, 81, 100</p>
      <p>Want:</p>
      <p class="formula">1^2 = 1</p>
      <p class="formula">2^2 = 4</p>
      <p class="formula">3^2 = 9</p>
      <p class="formula">4^2 = 16</p>
      <p>enzovoort.</p>

      <h3>5. Vierkantswortels uitrekenen</h3>
      <p>Als je een volmaakt kwadraat herkent, kun je de wortel meteen bepalen.</p>
      <p class="formula">√36 = 6</p>
      <p>want:</p>
      <p class="formula">6^2 = 36</p>
      <p>Evenzo:</p>
      <p class="formula">√81 = 9</p>

      <h3>6. De vierkantswortel is niet hetzelfde als delen door 2</h3>
      <p>Een veelgemaakte fout is denken dat je voor een vierkantswortel het getal door 2 moet delen.</p>
      <p>Dat klopt niet.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">√36 = 6</p>
      <p>maar:</p>
      <p class="formula">36 ÷ 2 = 18</p>
      <p>De vierkantswortel vraagt dus niet naar de helft, maar naar het getal dat je met zichzelf moet vermenigvuldigen.</p>

      <h3>7. Wortels van 0 en 1</h3>
      <p>Ook 0 en 1 hebben een vierkantswortel.</p>
      <p class="formula">√0 = 0</p>
      <p class="formula">√1 = 1</p>
      <p>Dit volgt rechtstreeks uit:</p>
      <p class="formula">0^2 = 0</p>
      <p class="formula">1^2 = 1</p>

      <h3>8. Waarom √25 niet −5 is</h3>
      <p>We weten dat:</p>
      <p class="formula">5^2 = 25</p>
      <p>maar ook:</p>
      <p class="formula">(−5)^2 = 25</p>
      <p>Toch schrijven we:</p>
      <p class="formula">√25 = 5</p>
      <p>Het wortelteken verwijst naar de <strong>niet-negatieve</strong> vierkantswortel.</p>
      <p>Dit is belangrijk om het begrip vierkantswortel eenduidig te maken.</p>

      <h3>9. Wortels schatten</h3>
      <p>Niet elk getal heeft een gehele vierkantswortel.</p>
      <p>Neem bijvoorbeeld 20.</p>
      <p>We weten:</p>
      <p class="formula">4^2 = 16</p>
      <p class="formula">5^2 = 25</p>
      <p>Dus ligt √20 tussen 4 en 5:</p>
      <p class="formula">4 &lt; √20 &lt; 5</p>
      <p>Zo kunnen we een wortel al schatten zonder hem precies te berekenen.</p>

      <h3>10. Wortels vergelijken</h3>
      <p>We kunnen wortels vergelijken door eerst te kijken tussen welke kwadraten ze liggen.</p>
      <p>Bijvoorbeeld: welke is groter, √30 of √40?</p>
      <p>Omdat:</p>
      <p class="formula">30 &lt; 40</p>
      <p>geldt ook:</p>
      <p class="formula">√30 &lt; √40</p>
      <p>Voor niet-negatieve getallen blijft de volgorde behouden wanneer we de vierkantswortel nemen.</p>

      <h3>11. Een wortel controleren</h3>
      <p>Je kunt een berekende vierkantswortel altijd controleren door het antwoord te kwadrateren.</p>
      <p>Stel dat je denkt dat:</p>
      <p class="formula">√144 = 12</p>
      <p>Controleer dan:</p>
      <p class="formula">12^2 = 144</p>
      <p>De uitkomst klopt dus.</p>

      <h3>12. Wortels en machten</h3>
      <p>Het verband tussen machten en wortels kunnen we kort schrijven als:</p>
      <p class="formula">√(a^2) = a</p>
      <p>voor niet-negatieve <span class="formula-inline">a</span>.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">√(8^2) = 8</p>
      <p>Dit laat opnieuw zien dat worteltrekken en kwadrateren elkaars omgekeerde bewerkingen zijn.</p>

      <h3>13. Wortels en negatieve getallen</h3>
      <p>In deze cursus werken we hier met <strong>reële getallen</strong>.</p>
      <p>Daarom bestaat bijvoorbeeld √9 wel:</p>
      <p class="formula">√9 = 3</p>
      <p>maar √(−9) is geen reëel getal.</p>
      <p>Complexe getallen behandelen we later in de cursus.</p>

      <h3>14. Wortels in breuken</h3>
      <p>Ook breuken kunnen een vierkantswortel hebben.</p>
      <p>Bij eenvoudige gevallen kunnen we teller en noemer afzonderlijk herkennen:</p>
      <p class="formula">√(1/4) = 1/2</p>
      <p>want:</p>
      <p class="formula">(1/2)^2 = 1/4</p>
      <p>We gebruiken dit voorlopig alleen bij eenvoudige, herkenbare wortels.</p>

      <h3>15. Wortels van producten</h3>
      <p>Voor niet-negatieve getallen geldt een belangrijke eigenschap:</p>
      <p class="formula">√(a × b) = √a × √b</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6</p>
      <p>Deze regel kan handig zijn om een wortel eenvoudiger te maken.</p>

      <h3>16. Een wortel vereenvoudigen</h3>
      <p>Soms zit er een volmaakt kwadraat in een getal.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">√72 = √(36 × 2)</p>
      <p>Daarom:</p>
      <p class="formula">√72 = √36 × √2 = 6√2</p>
      <p>We hebben de wortel dus vereenvoudigd, ook al is √2 zelf geen geheel getal.</p>

      <h3>17. Veelgemaakte fouten</h3>
      <ul>
        <li>√36 is 6, niet 18. Worteltrekken is terugrekenen uit een kwadraad, niet "halveren"</li>
        <li>√25 is 5, niet ±5. Dit is een afspraak die we maken. Later gaan we zien dat we soms wel beide oplossingen gebruiken (5 en -5).</li>
        <li>Niet elke wortel is een geheel getal.</li>
        <li>Een vierkantswortel is niet hetzelfde als delen door 2.</li>
        <li>Bij een negatieve waarde onder het wortelteken bestaat in de reële getallen geen uitkomst.</li>
      </ul>

      <h3>18. Samenvatting</h3>
      <div class="callout">
        <p>De vierkantswortel is de omgekeerde bewerking van kwadrateren.</p>
        <p class="formula">√25 = 5\\ omdat\\ 5^2 = 25</p>
        <p>Bij volmaakte kwadraten kunnen we de wortel exact bepalen.</p>
        <p>Bij andere getallen kunnen we de wortel bijvoorbeeld tussen twee gehele getallen plaatsen.</p>
      </div>
    `
  },

  {
    id: "1.12",
    title: "Irrationale en reële getallen",
    goal: "Onderscheid rationaal en irrationaal en plaats ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ op de getallenlijn.",
    theory: /* html */`
      <h2>Irrationale en reële getallen</h2>
      <p><strong>Doel:</strong> begrijpen waarom sommige getallen niet als breuk kunnen worden geschreven, en ontdekken hoe rationale en irrationale getallen samen de reële getallen vormen.</p>

      <h3>1. Niet elk getal kan als breuk worden geschreven</h3>
      <p>In 1.5 maakten we kennis met de <strong>rationale getallen</strong>. Dat zijn getallen die we als een breuk van twee gehele getallen kunnen schrijven.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">\\frac{1}{2},\\ \\frac{3}{4},\\ 5,\\ 0,75</p>
      <p>Maar bestaat er ook een getal dat <strong>niet</strong> als zo'n breuk kan worden geschreven?</p>
      <p>Ja. Een bekend voorbeeld is de vierkantswortel van 2:</p>
      <p class="formula">\\sqrt{2}</p>
      <p>Dit getal kunnen we niet precies schrijven als een breuk van twee gehele getallen.</p>

      <h3>2. Een verrassende vierkantswortel</h3>
      <p>We weten uit 1.11 dat:</p>
      <p class="formula">1^2 = 1</p>
      <p class="formula">2^2 = 4</p>
      <p>Daarom:</p>
      <p class="formula">1 &lt; \\sqrt{2} &lt; 2</p>
      <p>We kunnen de waarde steeds nauwkeuriger benaderen:</p>
      <p class="formula">\\sqrt{2} \\approx 1,41421356...</p>
      <p>De decimalen blijven doorgaan en vormen geen zich herhalend patroon.</p>

      <h3>3. Rationale getallen</h3>
      <p>Een getal is <strong>rationaal</strong> als het kan worden geschreven als een breuk:</p>
      <p class="formula">\frac{a}{b}</p>
      <p>waarbij a en b gehele getallen zijn en b niet 0 is.</p>
      <p>We gebruiken het symbool <strong>ℚ</strong> voor de verzameling van de rationale getallen.</p>
      <p>Ook gehele getallen zijn rationaal, want bijvoorbeeld:</p>
      <p class="formula">4 = \frac{4}{1}</p>

      <h3>4. Irrationale getallen</h3>
      <p>Een getal is <strong>irrationaal</strong> als het <strong>niet</strong> als een breuk van twee gehele getallen kan worden geschreven.</p>
      <p>Voorbeelden zijn:</p>
      <p class="formula">\\sqrt{2},\\ \\sqrt{3},\\ \\pi</p>
      <p>Deze getallen hebben een oneindige decimale schrijfwijze zonder een eindeloos herhalend patroon.</p>
      <div class="callout"><strong>Rationaal of irrationaal?</strong><br>Rationaal = wel als breuk van gehele getallen te schrijven.<br>Irrationaal = niet als zo'n breuk te schrijven.</div>
      <p>Een belangrijke waarschuwing: niet elke vierkantswortel is irrationaal.</p>
      <p>Ook het getal <span class="formula-inline">\\pi</span> is irrationaal. Het is de verhouding tussen de omtrek en de diameter van een cirkel.</p>



      <h3>5. Oneindige decimalen</h3>
      <p>Een decimale schrijfwijze kan eindig of oneindig zijn.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">0,5 = \frac{1}{2}</p>
      <p>Deze decimale schrijfwijze eindigt. Een rationaal getal kan echter ook oneindig veel decimalen hebben:</p>
      <p class="formula">\frac{1}{3} = 0,333333...</p>
      <p>De 3 blijft zich herhalen.</p>
      <p>Bij een irrationaal getal blijven de decimalen ook doorgaan, maar zonder een zich herhalend patroon. Daarom is <strong>oneindig veel decimalen op zichzelf niet voldoende</strong> om te bepalen of een getal irrationaal is.</p>

      <h3>6. Eindige en repeterende decimalen zijn rationaal</h3>
      <p>Elke eindige decimale schrijfwijze kan als breuk worden geschreven.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">0,75 = \frac{75}{100} = \frac{3}{4}</p>
      <p>Ook een repeterende decimale schrijfwijze stelt een rationaal getal voor:</p>
      <p class="formula">0,666... = \frac{2}{3}</p>
      <p>Een handige vuistregel is daarom:</p>
      <ul>
        <li>eindige decimalen → rationaal;</li>
        <li>oneindige repeterende decimalen → rationaal;</li>
        <li>oneindige niet-repeterende decimalen → irrationaal.</li>
      </ul>

      <h3>7. Rationale en irrationale getallen samen</h3>
      <p>We hebben nu twee groepen getallen gezien:</p>
      <ul>
        <li><strong>rationale getallen</strong>: kunnen als breuk worden geschreven;</li>
        <li><strong>irrationale getallen</strong>: kunnen niet als zo'n breuk worden geschreven.</li>
      </ul>
      <p>Deze twee groepen vormen samen de <strong>reële getallen</strong>.</p>
      <p class="formula">
          \\mathbb{R} = \\mathbb{Q} \\cup \\text{irrationele getallen}
      </p>      
      <p>Het symbool <strong>ℝ</strong> staat voor de verzameling van alle reële getallen.</p>

      <h3>8. Tussen twee getallen zitten altijd meer reële getallen</h3>
      <p>Neem bijvoorbeeld 1 en 2. Daartussen ligt 1,5. Maar ook 1,25 en 1,75.</p>
      <p>Er zijn zelfs oneindig veel reële getallen tussen 1 en 2.</p>
      <p>Dit geldt voor elk tweetal verschillende reële getallen.</p>
      <p>De getallenlijn is dus niet opgebouwd uit losse puntjes met lege ruimte ertussen. Tussen twee verschillende reële getallen kunnen we altijd nog andere reële getallen vinden.</p>

      <h3>9. De belangrijkste verzamelingen tot nu toe</h3>
      <p>We hebben in Fase 1 verschillende soorten getallen opgebouwd:</p>
      <p class="formula">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</p>
      <p>Elke verzameling bevat de vorige.</p>
      <ul>
        <li><strong>ℕ</strong>: natuurlijke getallen;</li>
        <li><strong>ℤ</strong>: gehele getallen;</li>
        <li><strong>ℚ</strong>: rationale getallen;</li>
        <li><strong>ℝ</strong>: reële getallen.</li>
      </ul>

      <h3>10. Veelgemaakte fouten</h3>
      <ul>
        <li><strong>Fout:</strong> denken dat elk oneindig decimaal getal irrationaal is. <strong>Correct:</strong> een repeterende oneindige decimale schrijfwijze is rationaal.</li>
        <li><strong>Fout:</strong> denken dat de vierkantswortel van 2 = 1,41. <strong>Correct:</strong> 1,41 is slechts een benadering.</li>
        <li><strong>Fout:</strong> denken dat elke vierkantswortel irrationaal is.</li>
        <li><strong>Fout:</strong> denken dat irrationale getallen niet op de getallenlijn passen. <strong>Correct:</strong> ze zijn reële getallen en hebben dus een plaats op de getallenlijn.</li></ul><div class="callout insight"><strong>Inzicht.</strong> <span class="formula-inline">√2</span> is een exact punt op de lijn. Elke decimale schrijfwijze ervan is een benadering. Een oneindige decimaal die wél herhaalt, zoals 0,333…, is wél rationaal.</div><ul hidden></ul>'
      </ul>
    `
  },

  {
    id: "1.13",
    title: "Afronden en wetenschappelijke notatie",
    goal: "Rond doelgericht af, schat een uitkomst en schrijf grote en kleine getallen in wetenschappelijke notatie.",
    theory: /* html */`
      <h2>Afronden en wetenschappelijke notatie</h2>
      <p><strong>Doel:</strong> getallen afronden met een duidelijke nauwkeurigheid, schattingen gebruiken en zeer grote of kleine getallen compact schrijven.</p>

      <div class="callout">
        <strong>Vertrekpunt</strong>
        <p>In de vorige lessen hebben we geleerd om met steeds meer soorten getallen te werken. We kunnen nu exacte waarden schrijven, maar in de praktijk is een exacte schrijfwijze niet altijd nodig. Soms willen we een getal juist <strong>eenvoudiger en overzichtelijker</strong> weergeven.</p>
      </div>

      <h3>1. Waarom ronden we getallen af?</h3>
      <p>Een getal kan veel cijfers bevatten. Soms zijn al die cijfers niet belangrijk voor wat we willen weten.</p>
      <p>Stel dat een afstand precies 12,4837 km is. Als we alleen willen weten hoeveel kilometer dit ongeveer is, kunnen we schrijven:</p>
      <p class="formula">12,4837 \\approx 12,5</p>
      <p>Het teken <strong>≈</strong> betekent: <strong>ongeveer gelijk aan</strong>.</p>
      <p>We hebben het getal niet veranderd omdat we denken dat 12,5 exact 12,4837 is. We hebben bewust gekozen voor een <strong>benadering</strong>.</p>

      <h3>2. Afronden op hele getallen</h3>
      <p>Bij afronden op een geheel getal kijken we naar het cijfer direct <strong>rechts van de eenheden</strong>.</p>
      <p>Bij 7,3 is dat cijfer 3. Omdat 3 kleiner is dan 5, blijft het gehele deel hetzelfde:</p>
      <p class="formula">7,3 \\approx 7</p>
      <p>Bij 7,8 is het cijfer rechts van de eenheden 8. Daarom verhogen we 7 met 1:</p>
      <p class="formula">7,8 \\approx 8</p>

      <h3>3. De afrondingsregel</h3>
      <p>De basisregel is:</p>
      <ul>
        <li>cijfer rechts van de afrondingsplaats is <strong>0, 1, 2, 3 of 4</strong> → naar beneden afronden;</li>
        <li>cijfer rechts van de afrondingsplaats is <strong>5, 6, 7, 8 of 9</strong> → naar boven afronden.</li>
      </ul>
      <p>Bijvoorbeeld:</p>
      <p class="formula">23,4 \\approx 23</p>
      <p class="formula">23,5 \\approx 24</p>
      <p class="formula">23,9 \\approx 24</p>
      <div class="callout"><strong>Onthoud:</strong> kijk naar het eerste cijfer dat je <strong>niet</strong> wilt behouden. Dat cijfer bepaalt hoe je afrondt.</div>

      <h3>4. Afronden op tienden</h3>
      <p>Bij afronden op één decimaal willen we één cijfer na de komma behouden.</p>
      <p>Neem 4,26. We behouden de 2 en kijken naar het volgende cijfer, de 6:</p>
      <p class="formula">4,26 \\approx 4,3</p>
      <p>Bij 4,23 kijken we naar de 3:</p>
      <p class="formula">4,23 \\approx 4,2</p>

      <h3>5. Afronden op honderdsten en duizendsten</h3>
      <p>Dezelfde regel werkt op elke plaats.</p>
      <p>Op honderdsten:</p>
      <p class="formula">7,386 \\approx 7,39</p>
      <p>We behouden 8 als honderdste en kijken naar de 6. Daarom wordt 8 verhoogd naar 9.</p>
      <p>Op duizendsten:</p>
      <p class="formula">7,3864 \\approx 7,386</p>
      <p>We behouden 386 en kijken naar de volgende 4. Omdat 4 kleiner is dan 5, verandert 386 niet.</p>

      <h3>6. Afronden van gehele getallen</h3>
      <p>Ook grote gehele getallen kunnen we afronden.</p>
      <p>Op tientallen:</p>
      <p class="formula">347 \\approx 350</p>
      <p>Op honderdtallen:</p>
      <p class="formula">1 249 \\approx 1 200</p>
      <p>Op duizendtallen:</p>
      <p class="formula">8 650 \\approx 9 000</p>
      <p>Ook hier bepaalt het eerste cijfer dat we weggooien of we naar beneden of naar boven afronden.</p>

      <h3>7. Afronden is een keuze van nauwkeurigheid</h3>
      <p>Een afgerond getal is alleen zinvol als duidelijk is <strong>waarop</strong> we hebben afgerond.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">3,14159 \\approx 3,1</p>
      <p>is minder nauwkeurig dan:</p>
      <p class="formula">3,14159 \\approx 3,142</p>
      <p>Beide kunnen correct zijn, afhankelijk van de gewenste nauwkeurigheid.</p>
      <div class="callout"><strong>Belangrijk:</strong> afronden betekent niet automatisch "zo weinig mogelijk cijfers schrijven". Je kiest eerst de gewenste nauwkeurigheid.</div>

      <h3>8. Afronden en schatten</h3>
      <p>We kunnen afronden gebruiken om snel een berekening te schatten.</p>
      <p>Stel:</p>
      <p class="formula">198 × 49</p>
      <p>We kunnen dit benaderen door:</p>
      <p class="formula">200 × 50 = 10 000</p>
      <p>Het exacte antwoord ligt in de buurt van 10 000:</p>
      <p class="formula">198 × 49 = 9 702</p>
      <p>De schatting helpt ons om te beoordelen of een antwoord redelijk is.</p>

      <h3>9. Afronden vóór een berekening</h3>
      <p>Als we vooraf afronden, krijgen we meestal een <strong>benadering</strong> en geen exact antwoord.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">39,8 × 5,1</p>
      <p>Afgerond geeft dit:</p>
      <p class="formula">40 × 5 = 200</p>
      <p>Het exacte antwoord is:</p>
      <p class="formula">39,8 × 5,1 = 202,98</p>
      <p>De afgeronde berekening is dus een snelle schatting.</p>

      <h3>10. Afrondingsfout</h3>
      <p>Door af te ronden ontstaat meestal een klein verschil tussen de exacte waarde en de benadering.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">12,48 \\approx 12,5</p>
      <p>Het verschil is:</p>
      <p class="formula">12,5 − 12,48 = 0,02</p>
      <p>Dit noemen we de <strong>absolute afrondingsfout</strong> in deze eenvoudige context.</p>
      <p>Hoe meer cijfers we behouden, hoe kleiner de afrondingsfout meestal wordt.</p>

      <h3>11. Wanneer is een benadering goed genoeg?</h3>
      <p>Dat hangt af van de situatie.</p>
      <p>Bij een afstand van 12,4837 km kan 12,5 km voldoende zijn voor een ruwe planning. Bij een laboratoriummeting kan veel meer nauwkeurigheid nodig zijn.</p>
      <p>Er bestaat dus geen universeel "juist aantal cijfers". De gewenste nauwkeurigheid komt voort uit de <strong>context</strong>.</p>

      <h3>12. Zeer grote getallen overzichtelijk schrijven</h3>
      <p>Grote getallen kunnen veel cijfers bevatten.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">300 000 000</p>
      <p>Dit kunnen we ook schrijven als:</p>
      <p class="formula">3 × 10^8</p>
      <p>Dit is veel compacter en maakt meteen zichtbaar hoeveel nullen er zijn.</p>

      <h3>13. Wetenschappelijke notatie</h3>
      <p>Een getal staat in <strong>wetenschappelijke notatie</strong> als het geschreven wordt als:</p>
      <p class="formula">a × 10^n</p>
      <p>waarbij <strong>a</strong> minstens 1 maar kleiner dan 10 is.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">300 000 000 = 3 × 10^8</p>
      <p>en:</p>
      <p class="formula">4 500 000 = 4,5 × 10^6</p>
      <div class="callout"><strong>Kernregel:</strong> in wetenschappelijke notatie staat er precies één niet-nul cijfer vóór de komma.</div>

      <h3>14. Van een groot getal naar wetenschappelijke notatie</h3>
      <p>Kijk naar:</p>
      <p class="formula">72 000</p>
      <p>We verplaatsen de komma zodat één cijfer vóór de komma overblijft:</p>
      <p class="formula">72 000 = 7,2 × 10^4</p>
      <p>De komma is vier plaatsen naar links verplaatst. Daarom is de exponent 4.</p>
      <p>Controle:</p>
      <p class="formula">7,2 × 10^4 = 7,2 × 10 000 = 72 000</p>

      <h3>15. Kleine getallen in wetenschappelijke notatie</h3>
      <p>Wetenschappelijke notatie werkt ook voor getallen kleiner dan 1.</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">0,00045 = 4,5 × 10^{-4}</p>
      <p>De negatieve exponent vertelt dat we door een macht van 10 delen.</p>
      <p>Want:</p>
      <p class="formula">10^{-4} = 0,0001</p>
      <p>Dus:</p>
      <p class="formula">4,5 × 10^{-4} = 0,00045</p>

      <h3>16. Wetenschappelijke notatie en machten</h3>
      <p>In 1.10 leerden we machten van 10. Die kennis gebruiken we nu om wetenschappelijke notatie te begrijpen.</p>
      <p>Bij positieve exponenten wordt het getal groter:</p>
      <p class="formula">10^3 = 1 000</p>
      <p>Bij negatieve exponenten krijgen we een getal kleiner dan 1:</p>
      <p class="formula">10^{-3} = 0,001</p>
      <p>Daarom kunnen we zowel zeer grote als zeer kleine getallen compact schrijven.</p>

      <h3>17. Veelgemaakte fouten</h3>
      <ul>
        <li><strong>Verkeerd afronden:</strong> kijk altijd naar het eerste cijfer dat je weglaat.</li>
        <li><strong>Denken dat meer decimalen altijd beter zijn:</strong> de gewenste nauwkeurigheid hangt af van de context.</li>
        <li><strong>Een negatief exponent verwarren met een negatief getal:</strong> <span class="formula-inline">10^{-3}</span> is positief, maar kleiner dan 1.</li>
        <li><strong>Wetenschappelijke notatie verkeerd schrijven:</strong> het getal vóór de macht van 10 moet minstens 1 en kleiner dan 10 zijn.</li>
        <li><strong>Een benadering als exact antwoord behandelen:</strong> gebruik <span class="formula-inline">\\approx</span> wanneer het om een benadering gaat.</li>
      </ul>

      <h3>18. Samenvatting</h3>
      <div class="callout">
        <p>Bij afronden kies je eerst de gewenste nauwkeurigheid en kijk je daarna naar het eerste cijfer dat je weglaat.</p>
        <p class="formula">0,05 → 0,1 \\qquad 0,04 → 0,0</p>
        <p>Een afgerond getal is een <strong>benadering</strong> van de exacte waarde.</p>
        <p>Wetenschappelijke notatie gebruikt de vorm:</p>
        <p class="formula">a × 10^n</p>
        <p>waarbij <span class="formula-inline">1 ≤ a &lt; 10</span>.</p>
        <p>Voorbeelden:</p>
        <p class="formula">450 000 = 4,5 × 10^5</p>
        <p class="formula">0,00032 = 3,2 × 10^{-4}</p>
      </div>
    `
  }
];
