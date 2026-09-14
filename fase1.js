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
      <h2>Het getallensysteem uitbreiden</h2>
      <p><strong>Doel:</strong></p>

        <ul>
          <li>begrijpen wat een verzameling is;</li>
          <li>begrijpen waarom de verzameling ℕ niet genoeg is;</li>
          <li>stap voor stap leren werken met de verzameling ℤ en ℚ;</li>
          <li>leren over absolute waarde, breuken, decimalen, percentages en verhoudingen.</li>
        </ul>
      
      <p>Tot nu toe hebben we gewerkt met de natuurlijke getallen:
        0, 1, 2, 3, 4, 5, ...</p>

      <p>Maar naarmate we meer rekenproblemen proberen op te lossen, ontdekken we
      dat deze getallen niet altijd voldoende zijn. Soms hebben we nieuwe soorten
      getallen nodig.</p>

      <p>Om dat goed te begrijpen, maken we eerst kennis met een belangrijk idee:
      <strong>verzamelingen</strong>.</p>

      <h3>1. Wat is een verzameling?</h3>

      <p>Een <strong>verzameling</strong> is simpelweg een groep dingen die we
      samen bekijken omdat ze iets gemeenschappelijk hebben.</p>

      <p>Bijvoorbeeld: de verzameling van de eerste vijf natuurlijke getallen is</p>

      <p class="formula">{0, 1, 2, 3, 4}</p>

      <p>De accolades <strong>{ }</strong> geven aan dat we een verzameling
      opsommen.</p>

      <p>De afzonderlijke dingen in een verzameling noemen we
      <strong>elementen</strong>.</p>

      <p>In de verzameling {0, 1, 2, 3, 4} zijn 0, 1, 2, 3 en 4 dus elementen.</p>

      <div class="callout insight">
        <strong>Belangrijk inzicht</strong>
        <p>Een verzameling is een manier om een groep getallen of andere objecten
        als één geheel te bekijken.</p>
      </div>

    <h3>2. Hoort een getal bij een verzameling?</h3>

    <p>In de wiskunde gebruiken we een speciaal symbool om aan te geven dat iets
    een element van een verzameling is:</p>

    <p class="formula">3 ∈ {0, 1, 2, 3, 4}</p>

    <p>Het symbool <strong>∈</strong> betekent
    <strong>"is een element van"</strong>.</p>

    <p>We kunnen dus lezen:</p>

    <p><strong>3 is een element van de verzameling {0, 1, 2, 3, 4}.</strong></p>

    <p>Voor een getal dat niet in de verzameling zit, gebruiken we
    <strong>∉</strong>.</p>

    <p class="formula">7 ∉ {0, 1, 2, 3, 4}</p>

    <p>Dit betekent:</p>

    <p><strong>7 is geen element van de verzameling {0, 1, 2, 3, 4}.</strong></p>


    <h3>3. De natuurlijke getallen</h3>

    <p>De verzameling van de natuurlijke getallen krijgt een naam:
    <strong>ℕ</strong>.</p>

    <p>We gebruiken ℕ voor alle natuurlijke getallen:</p>

    <p class="formula">ℕ = {0, 1, 2, 3, 4, 5, ...}</p>

    <p>De puntjes betekenen dat de reeks verdergaat.</p>

    <p>Zo kunnen we bijvoorbeeld schrijven:</p>

    <p class="formula">5 ∈ ℕ</p>

    <p>Maar:</p>

    <p class="formula">−3 ∉ ℕ</p>

    <p>Een negatief getal behoort dus niet tot de natuurlijke getallen.</p>


      <h3>4. Waarom hebben we negatieve getallen nodig?</h3>
      
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

    <h3>5. De gehele getallen</h3>

    <p>We voegen de negatieve gehele getallen toe:</p>

    <p class="formula">..., −3, −2, −1, 0, 1, 2, 3, ...</p>

    <p>Deze volledige verzameling noemen we de
    <strong>gehele getallen</strong>. We gebruiken hiervoor het symbool
    <strong>ℤ</strong>.</p>

    <p class="formula">ℤ = {..., −3, −2, −1, 0, 1, 2, 3, ...}</p>

    <p>Nu kunnen we bijvoorbeeld schrijven:</p>

    <p class="formula">−2 ∈ ℤ</p>

    <p>En de eerdere berekening krijgt een oplossing:</p>

    <p class="formula">3 − 5 = −2</p>

    <p>De gehele getallen lossen dus een probleem op dat met alleen natuurlijke
    getallen niet opgelost kon worden.</p>


    <h3>6. Deelverzamelingen</h3>

    <p>Er is nog een belangrijk verband tussen ℕ en ℤ.</p>

    <p>Elk natuurlijk getal is ook een geheel getal.</p>

    <p>0 is bijvoorbeeld een natuurlijk getal én een geheel getal.
    Hetzelfde geldt voor 1, 2, 3, 4, enzovoort.</p>

    <p>De natuurlijke getallen vormen daarom een deel van de gehele getallen.</p>

    <p>In de wiskunde noemen we dit een <strong>deelverzameling</strong>.</p>

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
      <strong>getal met een verzameling</strong> vergelijkt.</p>

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


<h3>8. Absolute waarde</h3>

<p>De <strong>absolute waarde</strong> van een getal vertelt hoe ver dat getal
van nul ligt.</p>

<p>De absolute waarde van 5 is 5:</p>

<p class="formula">|5| = 5</p>

<p>De absolute waarde van −5 is ook 5:</p>

<p class="formula">|−5| = 5</p>

<p>De verticale streepjes <strong>| |</strong> betekenen hier:
"de absolute waarde van".</p>

<p>De absolute waarde is dus altijd positief of nul.</p>


<h3>9. Optellen en aftrekken met gehele getallen</h3>

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


<h3>10. Vermenigvuldigen en delen met tekens</h3>

<p>Ook bij vermenigvuldigen en delen krijgen we regels voor positieve en
negatieve getallen.</p>

<p>Bij vermenigvuldigen geldt:</p>

<p class="formula">positief × positief = positief</p>
<p class="formula">positief × negatief = negatief</p>
<p class="formula">negatief × positief = negatief</p>
<p class="formula">negatief × negatief = positief</p>

<p>Bij delen gelden dezelfde regels voor de tekens.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">(−4) × (−3) = 12</p>

<p>en:</p>

<p class="formula">(−12) ÷ 3 = −4</p>


<h3>11. Waarom hebben we breuken nodig?</h3>

<p>Met natuurlijke en gehele getallen kunnen we nog steeds niet elke deling
uitvoeren.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">3 ÷ 2 = ?</p>

<p>Er bestaat geen geheel getal dat precies tussen 1 en 2 ligt en het antwoord
vormt.</p>

<p>Daarom introduceren we <strong>breuken</strong>.</p>

<p>Een breuk maakt het mogelijk om een geheel in gelijke delen op te splitsen.</p>

<div data-widget="fractionVisual"></div>


<h3>12. Teller en noemer</h3>

<p>Een breuk bestaat uit twee getallen.</p>

<p class="formula">3/5</p>

<p>Het getal boven de streep heet de <strong>teller</strong>.</p>

<p>Het getal onder de streep heet de <strong>noemer</strong>.</p>

<p>Bij 3/5 is 3 dus de teller en 5 de noemer.</p>

<p>De noemer vertelt in hoeveel gelijke delen het geheel is verdeeld.
De teller vertelt hoeveel van die delen we nemen.</p>


<h3>13. Gelijkwaardige breuken</h3>

<p>Een breuk kan er anders uitzien zonder dat de waarde verandert.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">1/2 = 2/4 = 3/6</p>

<p>Deze breuken stellen allemaal dezelfde hoeveelheid voor.</p>

<p>We noemen ze <strong>gelijkwaardige breuken</strong>.</p>

<p>Een breuk kunnen we ook vereenvoudigen. Zo kunnen we 4/8 schrijven als
1/2.</p>


<h3>14. Breuken vergelijken</h3>

<p>Met breuken kunnen we hoeveelheden nauwkeuriger vergelijken.</p>

<p>Wanneer twee breuken dezelfde noemer hebben, kunnen we de tellers
rechtstreeks vergelijken.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">3/8 &lt; 5/8</p>

<p>Omdat beide breuken in acht gelijke delen zijn verdeeld, zien we dat
3 delen minder zijn dan 5 delen.</p>


<h3>15. Breuken optellen en aftrekken</h3>

<p>Wanneer breuken dezelfde noemer hebben, kunnen we de tellers optellen of
aftrekken.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">2/7 + 3/7 = 5/7</p>

<p>Wanneer de noemers verschillend zijn, moeten we eerst gelijkwaardige
breuken zoeken met dezelfde noemer.</p>


<h3>16. Breuken vermenigvuldigen</h3>

<p>Bij het vermenigvuldigen van breuken vermenigvuldigen we de tellers met
elkaar en de noemers met elkaar.</p>

<p class="formula">2/3 × 4/5 = 8/15</p>


<h3>17. Breuken delen</h3>

<p>Een breuk delen door een andere breuk kunnen we omzetten in
vermenigvuldigen met het omgekeerde.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">2/3 ÷ 4/5 = 2/3 × 5/4</p>

<p>Dit idee zullen we later verder oefenen.</p>


<h3>18. Decimalen</h3>

<p>Dezelfde getallen kunnen we op verschillende manieren schrijven.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">1/2 = 0,5</p>

<p>De komma geeft het begin van het decimale gedeelte aan.</p>

<p>Decimalen zijn daarom geen volledig nieuwe soort getallen. Ze zijn een
andere manier om bepaalde getallen te schrijven.</p>

<p>Bijvoorbeeld:</p>

<p class="formula">0,5 = 0,50 = 0,500</p>

<p>Deze drie schrijfwijzen stellen dezelfde waarde voor.</p>


<h3>19. Percentages</h3>

<p>Een percentage is een verhouding waarbij we het geheel opdelen in
100 gelijke delen.</p>

<div data-widget="percentageBar"></div>

<p>Het symbool <strong>%</strong> betekent "per honderd".</p>

<p>25% betekent dus 25 van de 100 gelijke delen:</p>

<p class="formula">25% = 25/100 = 0,25</p>

<p>Percentages zijn daardoor nauw verbonden met breuken en decimalen.</p>


<h3>20. Percentageverandering</h3>

<p>Percentages kunnen ook aangeven hoeveel iets verandert ten opzichte van
een beginwaarde.</p>

<p>Wanneer een prijs bijvoorbeeld stijgt van €100 naar €110, is de stijging
€10.</p>

<p>Omdat €10 gelijk is aan 10% van €100, is de stijging 10%.</p>

<p class="formula">10/100 = 0,10 = 10%</p>


<h3>21. Verhoudingen</h3>

<p>Een <strong>verhouding</strong> vergelijkt hoeveelheden met elkaar.</p>

<p>Stel dat een groep uit 2 rode en 3 blauwe ballen bestaat.</p>

<p>De verhouding rood tegenover blauw is:</p>

<p class="formula">2 : 3</p>

<p>Verhoudingen komen overal voor: bij recepten, kaarten, snelheid,
schaalmodellen en percentages.</p>


<h3>22. De grote lijn</h3>

<p>We hebben in deze les verschillende soorten getallen gezien.</p>

<p>We begonnen met de natuurlijke getallen:</p>

<p class="formula">ℕ = {0, 1, 2, 3, ...}</p>

<p>Toen we problemen tegenkwamen zoals 3 − 5, hadden we negatieve getallen
nodig. Zo ontstonden de gehele getallen:</p>

<p class="formula">ℤ = {..., −2, −1, 0, 1, 2, ...}</p>

<p>Omdat ieder natuurlijk getal ook een geheel getal is, geldt:</p>

<p class="formula">ℕ ⊂ ℤ</p>

<p>Het symbool <strong>⊂</strong> betekent dat de verzameling links een
deelverzameling is van de verzameling rechts.</p>

<p>Toen we vervolgens een probleem kregen met bijvoorbeeld 3 ÷ 2, hadden we
breuken nodig. Daarmee komen we bij de <strong>rationele getallen</strong>,
die we later met het symbool ℚ zullen aanduiden.</p>

<div class="callout insight">
  <strong>De rode draad</strong>
  <p>Het getallensysteem wordt steeds groter omdat we nieuwe problemen
  ontdekken die met de bestaande getallen niet opgelost kunnen worden.</p>

  <p>Nieuwe getallen zijn dus geen willekeurige toevoegingen. Ze ontstaan
  omdat we meer rekenproblemen willen kunnen oplossen.</p>
</div>

<p>In volgende lessen zullen we ontdekken dat ook de rationale getallen niet
voldoende zijn voor alle problemen. Zo blijven we het getallensysteem
uitbreiden.</p>
    `
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
    `
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
    `
  }
];

