/* Lesstof Fase 1 — Rekenkunde. Breid theory/practice/exam hier uit. */
const MILESTONES_1 = [
  {
    id: "1.1",
    title: "Cijfers en Getallen",
    goal: "Van tellen naar getallen.",
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
    goal: "Leer rekenen met getallen.",
    theory: /* html */`
      <h2>De vier hoofdbewerkingen</h2>

        <p><strong>Doel:</strong></p>

        <ul>
          <li>leren wat optellen, aftrekken, vermenigvuldigen en delen betekenen;</li>
          <li>de vier bewerkingen leren uitvoeren;</li>
          <li>leren rekenen met grotere getallen;</li>
          <li>leren in welke volgorde je bewerkingen uitvoert;</li>
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

<div data-widget="smartdivision"></div>

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
    goal: "Van ℕ naar ℤ en ℚ.",
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
`
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

    <p class="formula">1/2</p>

    <p>
      Verdelen we hetzelfde geheel in 3 gelijke delen, dan is elk deel
      <strong>één derde</strong>.
    </p>

    <p class="formula">1/3</p>

    <p>
      En bij 4 gelijke delen is elk deel <strong>één vierde</strong>.
    </p>

    <p class="formula">1/4</p>

    <div data-widget="fractionWhole"></div>




        <h3>3. Meerdere delen nemen</h3>
        <p>
      We hoeven natuurlijk niet altijd maar één deel te nemen.
      Als een geheel in 4 gelijke delen is verdeeld en we nemen
      3 van die delen, dan hebben we <strong>drie vierde</strong> van
      het geheel.
    </p>

    <p class="formula">3/4</p>

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

    <p class="formula">1/2 &gt; 1/3</p>

    <p>
      En een derde is groter dan een vierde:
    </p>

    <p class="formula">1/3 &gt; 1/4</p>

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

    <h3>Hoe maak je een gelijkwaardige breuk?</h3>

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
      \frac{2}{3}
      en
      \frac{3}{5}
    </p>

    <p>
      Een gemeenschappelijke noemer is 15:
    </p>

    <p class="formula">
      \frac{2}{3} = \frac{10}{15}
      \qquad
      \frac{3}{5} = \frac{9}{15}
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
      \frac{7}{4}
      =
      1 + \frac{3}{4}
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
      7 \div 4 = 1 \text{ rest } 3
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
    goal: "Decimalen en percentages begrijpen, omzetten en gebruiken in concrete berekeningen.",
    theory: /* html */`
      <h2>Decimalen en percentages</h2>

      <p><strong>Doel:</strong> leren werken met decimalen en percentages en begrijpen hoe ze samenhangen met breuken.</p>

      <div class="callout">
        <strong>Belangrijk uitgangspunt</strong>
        <p>In deze les gebruiken we nog <strong>geen machten</strong> en <strong>geen algebraïsche letters</strong> zoals <em>x</em> en <em>y</em>. We werken uitsluitend met concrete getallen en hoeveelheden.</p>
      </div>

      <h3>1. Decimalen als uitbreiding van ons getallensysteem</h3>
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
      <p class="formula">37,428 = 30 + 7 + 4/10 + 2/100 + 8/1000</p>
      <p>De cijfers rechts van de komma geven steeds kleinere delen van één geheel aan.</p>
      <table>
        <tr><th>Plaats</th><th>Voorbeeld</th><th>Betekenis</th></tr>
        <tr><td>eenheden</td><td>7</td><td>7</td></tr>
        <tr><td>tienden</td><td>4</td><td>4/10</td></tr>
        <tr><td>honderdsten</td><td>2</td><td>2/100</td></tr>
        <tr><td>duizendsten</td><td>8</td><td>8/1000</td></tr>
      </table>
      <div class="callout"><strong>Onthoud</strong><p>De komma scheidt de hele getallen van de delen van een geheel.</p></div>

      <h3>2. Decimalen en breuken</h3>
      <p>Een eindig decimaal getal kunnen we altijd als een breuk schrijven.</p>
      <p class="formula">0,7 = 7/10</p>
      <p class="formula">0,42 = 42/100 = 21/50</p>
      <p class="formula">0,375 = 375/1000 = 3/8</p>
      <p>Ook een getal groter dan 1 kunnen we zo schrijven:</p>
      <p class="formula">2,35 = 235/100 = 47/20</p>
      <p>Het is belangrijk om de breuk daarna, wanneer mogelijk, te vereenvoudigen.</p>
      <h4>Van een breuk naar een decimaal</h4>
      <p>Als de breuk een noemer heeft die gemakkelijk in tienden, honderdsten of duizendsten kan worden omgezet, kunnen we dat rechtstreeks doen.</p>
      <p class="formula">3/4 = 75/100 = 0,75</p>
      <p class="formula">7/20 = 35/100 = 0,35</p>

      <h3>3. Eindige en repeterende decimalen</h3>
      <p>Sommige breuken geven een decimaal getal dat eindigt:</p>
      <p class="formula">1/2 = 0,5</p>
      <p class="formula">1/4 = 0,25</p>
      <p>Andere breuken blijven cijfers produceren:</p>
      <p class="formula">1/3 = 0,333333...</p>
      <p class="formula">2/7 = 0,285714285714...</p>
      <p>Bij zulke getallen herhaalt zich een patroon. We noemen dit een <strong>repeterend decimaal getal</strong>.</p>
      <div class="callout"><strong>Belangrijk</strong><p>Rationale getallen kunnen worden geschreven als een eindig decimaal getal of als een repeterend decimaal getal.</p></div>

      <h3>4. Decimalen vergelijken</h3>
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

      <h3>5. Optellen en aftrekken met decimalen</h3>
      <p>Bij optellen en aftrekken zetten we dezelfde plaatswaarden onder elkaar.</p>
      <p class="formula">12,70 + 3,45 = 16,15</p>
      <p class="formula">15,20 − 7,85 = 7,35</p>
      <p>De komma's moeten dus recht onder elkaar staan.</p>

      <h3>6. Vermenigvuldigen met decimalen</h3>
      <p>Ook bij decimalen blijft vermenigvuldigen dezelfde bewerking.</p>
      <p class="formula">1,2 × 0,3 = 0,36</p>
      <p>We kunnen dit begrijpen vanuit breuken:</p>
      <p class="formula">1,2 = 12/10</p>
      <p class="formula">0,3 = 3/10</p>
      <p class="formula">12/10 × 3/10 = 36/100 = 0,36</p>
      <p>Een iets moeilijker voorbeeld:</p>
      <p class="formula">2,35 × 1,4 = 3,29</p>

      <h3>7. Delen met decimalen</h3>
      <p>Ook delen kunnen we met decimalen uitvoeren.</p>
      <p class="formula">3,6 ÷ 0,6 = 6</p>
      <p>We kunnen dit controleren:</p>
      <p class="formula">6 × 0,6 = 3,6</p>
      <p>Bij delen door 10, 100 of 1 000 wordt de komma verplaatst:</p>
      <p class="formula">36 ÷ 10 = 3,6</p>
      <p class="formula">36 ÷ 100 = 0,36</p>
      <p class="formula">36 ÷ 1000 = 0,036</p>

      <h3>8. Procent betekent "per honderd"</h3>
      <p>Het woord <strong>procent</strong> betekent letterlijk <strong>per honderd</strong>.</p>
      <p class="formula">1% = 1/100 = 0,01</p>
      <p class="formula">25% = 25/100 = 0,25</p>
      <p class="formula">50% = 50/100 = 0,5</p>
      <p class="formula">100% = 100/100 = 1</p>
      <p>Een percentage hoeft niet tussen 0% en 100% te liggen.</p>
      <p class="formula">125% = 125/100 = 1,25</p>
      <div class="callout"><strong>Onthoud</strong><p>100% stelt altijd het volledige geheel voor.</p></div>

      <h3>9. Breuk, decimaal en percentage</h3>
      <p>Een breuk, een decimaal en een percentage kunnen drie verschillende schrijfwijzen voor dezelfde waarde zijn.</p>
      <p class="formula">1/2 = 0,5 = 50%</p>
      <p class="formula">1/4 = 0,25 = 25%</p>
      <p class="formula">3/8 = 0,375 = 37,5%</p>
      <p class="formula">5/4 = 1,25 = 125%</p>
      <p>Je kunt dus tussen de drie schrijfwijzen heen en weer gaan.</p>

      <h3>10. Een percentage van een hoeveelheid</h3>
      <p>Stel dat we willen weten hoeveel 25% van 80 is.</p>
      <p>Omdat:</p>
      <p class="formula">25% = 1/4</p>
      <p>is 25% van 80:</p>
      <p class="formula">80 ÷ 4 = 20</p>
      <p>We kunnen ook eerst 1% bepalen:</p>
      <p class="formula">1% van 80 = 0,8</p>
      <p class="formula">25% van 80 = 25 × 0,8 = 20</p>
      <p>Of we gebruiken de decimale schrijfwijze:</p>
      <p class="formula">0,25 × 80 = 20</p>
      <div class="callout"><strong>Drie manieren</strong><p>Je mag de methode kiezen die je het duidelijkst vindt: via een breuk, via 1% of via de decimale schrijfwijze.</p></div>

      <h3>11. Het geheel bepalen</h3>
      <p>Soms kennen we een percentage en de bijbehorende hoeveelheid en zoeken we het volledige geheel.</p>
      <p><strong>30% van een bedrag is €45. Hoe groot is het volledige bedrag?</strong></p>
      <p>Als 30% €45 is, dan is 10%:</p>
      <p class="formula">€45 ÷ 3 = €15</p>
      <p>100% is dan:</p>
      <p class="formula">€15 × 10 = €150</p>
      <p>Het volledige bedrag is dus <strong>€150</strong>.</p>

      <h3>12. Een percentage bepalen</h3>
      <p>Stel dat 18 van de 24 leerlingen geslaagd zijn. Welk percentage is dat?</p>
      <p>We schrijven eerst de verhouding als breuk:</p>
      <p class="formula">18/24 = 3/4</p>
      <p>Daarna:</p>
      <p class="formula">3/4 = 0,75 = 75%</p>
      <p>Dus 18 van de 24 leerlingen is <strong>75%</strong>.</p>
      <p>De algemene rekenwijze is:</p>
      <p class="formula">percentage = deel / geheel × 100%</p>
      <p>Het belangrijkste is dat je eerst bepaalt wat het <strong>geheel</strong> is. Dat geheel stelt 100% voor.</p>

      <h3>13. Procentuele stijging</h3>
      <p>Een procentuele stijging vergelijkt de toename met de <strong>beginwaarde</strong>.</p>
      <p>Een prijs stijgt bijvoorbeeld van €80 naar €100.</p>
      <p>De absolute stijging is:</p>
      <p class="formula">€100 − €80 = €20</p>
      <p>We vergelijken die €20 met de beginprijs van €80:</p>
      <p class="formula">20/80 = 1/4 = 25%</p>
      <p>De prijs is dus met <strong>25%</strong> gestegen.</p>
      <div class="callout"><strong>Let op</strong><p>Bij een procentuele stijging vergelijken we altijd met de oorspronkelijke waarde, niet met de nieuwe waarde.</p></div>

      <h3>14. Procentuele daling</h3>
      <p>Bij een daling doen we hetzelfde.</p>
      <p>Een prijs daalt van €200 naar €150.</p>
      <p>De daling is:</p>
      <p class="formula">€200 − €150 = €50</p>
      <p>Die €50 vergelijken we met de beginwaarde van €200:</p>
      <p class="formula">50/200 = 1/4 = 25%</p>
      <p>De prijs is dus met <strong>25%</strong> gedaald.</p>

      <h3>15. Een stijging of daling als factor</h3>
      <p>Een procentuele verandering kan ook rechtstreeks worden toegepast op een bedrag.</p>
      <p>Een stijging van 20% betekent dat we uiteindelijk 120% van de oorspronkelijke waarde hebben:</p>
      <p class="formula">120% = 1,20</p>
      <p>Bijvoorbeeld:</p>
      <p class="formula">€50 × 1,20 = €60</p>
      <p>Een daling van 20% betekent dat 80% overblijft:</p>
      <p class="formula">80% = 0,80</p>
      <p class="formula">€50 × 0,80 = €40</p>
      <p>We spreken hier over een <strong>vermenigvuldigingsfactor</strong>. Dit is gewoon een getal waarmee we de oorspronkelijke hoeveelheid vermenigvuldigen.</p>

      <h3>16. Meerdere procentuele veranderingen</h3>
      <p>Een tweede procentuele verandering wordt berekend op de waarde die op dat moment bestaat.</p>
      <p>Een bedrag van €100 stijgt eerst met 20%:</p>
      <p class="formula">€100 × 1,20 = €120</p>
      <p>Daarna daalt het nieuwe bedrag met 20%:</p>
      <p class="formula">€120 × 0,80 = €96</p>
      <p>Het eindbedrag is dus <strong>€96</strong>, niet €100.</p>
      <p>De twee veranderingen heffen elkaar niet op, omdat de tweede 20% wordt berekend op €120 en niet meer op €100.</p>

      <h3>17. Procent en procentpunt</h3>
      <p>Een verandering van 60% naar 70% is een stijging van:</p>
      <p class="formula">70% − 60% = 10 procentpunt</p>
      <p>Relatief gezien is de stijging:</p>
      <p class="formula">10/60 ≈ 0,1667 ≈ 16,67%</p>
      <p>Dus:</p>
      <ul>
        <li>60% → 70% = <strong>10 procentpunten</strong>;</li>
        <li>relatieve stijging = ongeveer <strong>16,67%</strong>.</li>
      </ul>

      <div class="callout insight"><strong>Eén hoeveelheid, verschillende schrijfwijzen</strong><p>Decimalen, breuken en percentages zijn geen drie verschillende soorten getallen. Ze kunnen verschillende manieren zijn om dezelfde waarde te schrijven. Bij procentvragen moet je vooral goed bepalen wat het volledige geheel — de 100% — is.</p></div>

      <h3>18. Samenvatting</h3>
      <ul>
        <li><span class="formula-inline">0,5 = 1/2 = 50%</span></li>
        <li><span class="formula-inline">0,25 = 1/4 = 25%</span></li>
        <li><span class="formula-inline">0,375 = 3/8 = 37,5%</span></li>
        <li><span class="formula-inline">1% = 0,01 = 1/100</span></li>
        <li>Bij een procentuele stijging of daling is de beginwaarde de referentie.</li>
        <li>Een tweede procentuele verandering werkt op de nieuwe waarde.</li>
        <li>Procentpunten zijn niet hetzelfde als een procentuele verandering.</li>
      </ul>
    `,
    practice: [
      { id: "p15-1", question: "Schrijf 0,625 als een vereenvoudigde breuk.", answer: ["5/8"] },
      { id: "p15-2", question: "Schrijf 2,35 als een vereenvoudigde breuk.", answer: ["47/20"] },
      { id: "p15-3", question: "Schrijf 7/8 als decimaal.", answer: ["0,875", "0.875"] },
      { id: "p15-4", question: "Schrijf 3/20 als percentage.", answer: ["15%", "15"] },
      { id: "p15-5", question: "Welke is groter: 0,099 of 0,1?", answer: ["0,1", "0.1"] },
      { id: "p15-6", question: "Bereken: 12,75 + 8,6.", answer: ["21,35", "21.35"] },
      { id: "p15-7", question: "Bereken: 3,5 × 0,24.", answer: ["0,84", "0.84"] },
      { id: "p15-8", question: "Bereken: 4,8 ÷ 0,6.", answer: ["8"] },
      { id: "p15-9", question: "Schrijf 0,875 als breuk én als percentage.", answer: ["7/8 en 87,5%", "7/8; 87,5%", "7/8 = 87,5%"] },
      { id: "p15-10", question: "Bereken 17,5% van 240.", answer: ["42"] },
      { id: "p15-11", question: "42 is 30% van welk getal?", answer: ["140"] },
      { id: "p15-12", question: "18 van de 24 leerlingen zijn geslaagd. Welk percentage is dat?", answer: ["75%", "75"] },
      { id: "p15-13", question: "Een prijs stijgt van €80 naar €100. Met hoeveel procent stijgt de prijs?", answer: ["25%", "25"] },
      { id: "p15-14", question: "Een bedrag van €250 daalt met 18%. Wat is het nieuwe bedrag?", answer: ["205", "€205"] },
      { id: "p15-15", question: "€100 stijgt met 20% en daalt daarna met 20%. Wat is het eindbedrag?", answer: ["€96", "96"] }
    ],
    exam: [
      { id: "e15-1", question: "Schrijf 2,375 als een vereenvoudigde breuk.", answer: ["19/8"] },
      { id: "e15-2", question: "Schrijf 7/16 als decimaal en percentage.", answer: ["0,4375 en 43,75%", "0.4375 en 43,75%", "0,4375 = 43,75%"] },
      { id: "e15-3", question: "Bereken: 2,4 × 0,35.", answer: ["0,84", "0.84"] },
      { id: "e15-4", question: "Bereken 12,5% van 360.", answer: ["45"] },
      { id: "e15-5", question: "42 is 35% van welk geheel?", answer: ["120"] },
      { id: "e15-6", question: "Een prijs stijgt van €120 naar €150. Wat is de procentuele stijging?", answer: ["25%", "25"] },
      { id: "e15-7", question: "Een bedrag van €200 daalt met 15%. Wat is het nieuwe bedrag?", answer: ["170", "€170"] },
      { id: "e15-8", question: "Een score stijgt van 40% naar 50%. Is dat een stijging van 10% of 10 procentpunten? Geef ook de relatieve procentuele stijging.", answer: ["10 procentpunten; 25%", "10 procentpunt; 25%", "10 procentpunten en 25%"] }
    ]
  }
];
