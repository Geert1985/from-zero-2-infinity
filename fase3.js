/* Lesstof Fase 3 — Calculus. Breid theory/practice/exam hier uit. */
const MILESTONES_3 = [
// Fase 3 — Calculus & Analyse
// Van verandering naar afgeleiden, integralen en multivariabele calculus.
  {
  id: "3.1",
  title: "Verandering & gemiddelde snelheid",
  goal: "Hoe meten we verandering?",
  theory: /* html */`
    <h2>Verandering & gemiddelde snelheid</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat betekent het als een grootheid verandert?</li>
      <li>Hoe meten we hoeveel iets verandert?</li>
      <li>Hoe berekenen we de gemiddelde veranderingssnelheid?</li>
      <li>Waarom is gemiddelde snelheid een voorbeeld van een algemener idee?</li>
      <li>Hoe verschijnt veranderingssnelheid als de helling van een grafiek?</li>
      <li>Waarom kunnen we met een gemiddelde snelheid nog niet beschrijven wat er op één moment gebeurt?</li>
      <li>Hoe leidt een steeds kleiner interval naar het idee van de limiet?</li>
    </ul>

    <p>
      In Fase 2 leerden we hoe we situaties kunnen beschrijven met getallen,
      formules en functies. In Fase 3 stellen we een nieuwe vraag:
    </p>

    <div class="callout">
      <p><strong>Niet alleen: wat is de waarde?</strong></p>
      <p><strong>Maar ook: hoe verandert die waarde?</strong></p>
    </div>

    <p>
      Dat verschil lijkt klein, maar het vormt het vertrekpunt van de
      <strong>calculus</strong>.
    </p>


    <h3>Van positie naar verandering</h3>

    <p>
      Denk aan een trein die uit een station vertrekt.
      We kunnen zijn positie op verschillende tijdstippen beschrijven.
    </p>

    <p>
      Stel dat de trein bij het vertrekpunt op positie 0 km staat en
      na twee uur op positie 160 km.
    </p>

    <p>De verandering in positie is:</p>

    <p class="formula">
      \\Delta s = 160 - 0 = 160\\text{ km}
    </p>

    <p>
      Het symbool <strong>Δ</strong> (delta) betekent:
      <strong>verandering in</strong>.
    </p>

    <p>Algemeen schrijven we:</p>

    <p class="formula">
      \\Delta s = s_2 - s_1
    </p>

    <p>waarbij:</p>

    <ul>
      <li><strong>s₁</strong> de beginpositie is;</li>
      <li><strong>s₂</strong> de eindpositie is;</li>
      <li><strong>Δs</strong> de verandering in positie is.</li>
    </ul>

    <div class="callout">
      <p><strong>Δ betekent steeds: eindwaarde − beginwaarde.</strong></p>
    </div>


    <h3>Verandering per tijdseenheid</h3>

    <p>
      Alleen weten dat de trein 160 km van positie is veranderd,
      vertelt ons nog niet hoe snel dat gebeurde.
    </p>

    <p>
      Daarvoor moeten we de verandering vergelijken met de tijd die daarvoor
      nodig was.
    </p>

    <p>De tijdsverandering is:</p>

    <p class="formula">
      \\Delta t = 2 - 0 = 2\\text{ uur}
    </p>

    <p>De gemiddelde snelheid is dan:</p>

    <p class="formula">
      v_{\\text{gem}}
      =
      \\frac{\\Delta s}{\\Delta t}
      =
      \\frac{160\\text{ km}}{2\\text{ uur}}
      =
      80\\text{ km/u}
    </p>

    <p>
      De trein heeft dus gemiddeld 80 km per uur afgelegd.
    </p>

    <div class="callout">
      <p><strong>
        Gemiddelde snelheid =
        verandering in positie gedeeld door verandering in tijd.
      </strong></p>
    </div>


    <h3>Gemiddelde snelheid betekent niet constante snelheid</h3>

    <p>
      Stel dat een trein gedurende een rit soms 40 km/u rijdt,
      daarna 100 km/u en later weer 60 km/u.
    </p>

    <p>
      De gemiddelde snelheid over de hele rit kan toch bijvoorbeeld
      70 km/u zijn.
    </p>

    <p>
      Een gemiddelde snelheid beschrijft dus het volledige interval,
      niet noodzakelijk wat er op ieder moment gebeurt.
    </p>

    <p>
      Dat onderscheid wordt later in calculus heel belangrijk.
    </p>

    <div class="callout">
      <p><strong>Gemiddeld beschrijft een interval.</strong></p>
      <p><strong>Ogenblikkelijk beschrijft één moment.</strong></p>
    </div>


    <h3>Van snelheid naar algemene verandering</h3>

    <p>
      Hetzelfde idee geldt ook buiten beweging.
    </p>

    <p>
      Denk bijvoorbeeld aan temperatuur. Stel dat de temperatuur
      van 10 °C naar 25 °C stijgt in drie uur.
    </p>

    <p>De temperatuurverandering is:</p>

    <p class="formula">
      \\Delta T = 25 - 10 = 15^\\circ\\text{C}
    </p>

    <p>De tijdsverandering is:</p>

    <p class="formula">
      \\Delta t = 3\\text{ uur}
    </p>

    <p>De gemiddelde verandering per uur is:</p>

    <p class="formula">
      \\frac{\\Delta T}{\\Delta t}
      =
      \\frac{15}{3}
      =
      5^\\circ\\text{C/u}
    </p>

    <p>
      We kunnen dus hetzelfde wiskundige idee gebruiken voor
      temperatuur, afstand, massa, energie, kosten en nog veel meer.
    </p>


    <h3>Gemiddelde veranderingssnelheid</h3>

    <p>
      We kunnen het idee daarom algemener formuleren.
    </p>

    <p>
      De <strong>gemiddelde veranderingssnelheid</strong> vertelt
      hoeveel een grootheid gemiddeld verandert per eenheid van de
      onafhankelijke variabele.
    </p>

    <p>
      Als een grootheid <span class="formula-inline">y</span> verandert
      wanneer <span class="formula-inline">x</span> verandert, schrijven we:
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Dit betekent letterlijk:
    </p>

    <p class="formula">
      \\frac{\\text{verandering in }y}
      {\\text{verandering in }x}
    </p>

    <p>
      Bij beweging kan dat bijvoorbeeld worden:
    </p>

    <p class="formula">
      v_{\\text{gem}} = \\frac{\\Delta s}{\\Delta t}
    </p>

    <p>
      De context verandert, maar de wiskundige structuur blijft dezelfde.
    </p>

    <div class="callout">
      <p><strong>
        De centrale structuur is:
        verandering gedeeld door verandering.
      </strong></p>
    </div>


    <h3>De gemiddelde verandering van een functie</h3>

    <p>
      Nu maken we de stap naar functies.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We willen de gemiddelde veranderingssnelheid bepalen tussen
      <span class="formula-inline">x = 1</span> en
      <span class="formula-inline">x = 4</span>.
    </p>

    <p>Eerst berekenen we de functiewaarden:</p>

    <p class="formula">
      f(1)=1
    </p>

    <p class="formula">
      f(4)=16
    </p>

    <p>De verandering in de functiewaarde is:</p>

    <p class="formula">
      \\Delta f=16-1=15
    </p>

    <p>De verandering in x is:</p>

    <p class="formula">
      \\Delta x=4-1=3
    </p>

    <p>Dus:</p>

    <p class="formula">
      \\frac{\\Delta f}{\\Delta x}
      =
      \\frac{15}{3}
      =
      5
    </p>

    <p>
      Gemiddeld stijgt de functie tussen
      <span class="formula-inline">x = 1</span> en
      <span class="formula-inline">x = 4</span>
      dus met 5 eenheden per eenheid van x.
    </p>


    <h3>De algemene formule</h3>

    <p>
      Voor een functie <span class="formula-inline">f(x)</span> tussen
      twee waarden <span class="formula-inline">x_1</span> en
      <span class="formula-inline">x_2</span> is de gemiddelde
      veranderingssnelheid:
    </p>

    <p class="formula">
      \\frac{f(x_2)-f(x_1)}
      {x_2-x_1}
    </p>

    <p>
      Dit is precies hetzelfde idee als:
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      De twee notaties leggen alleen een ander accent:
      de eerste toont expliciet welke twee punten we gebruiken,
      de tweede benadrukt de verandering.
    </p>

    <div class="callout">
      <p><strong>
        Gemiddelde veranderingssnelheid =
        verandering in de uitvoer gedeeld door verandering in de invoer.
      </strong></p>
    </div>


    <h3>Verandering als helling</h3>

    <p>
      Dezelfde verhouding heeft ook een geometrische betekenis.
    </p>

    <p>
      Neem twee punten op de grafiek van een functie:
    </p>

    <p class="formula">
      P=(x_1,f(x_1))
    </p>

    <p class="formula">
      Q=(x_2,f(x_2))
    </p>

    <p>
      De verticale verandering tussen de punten is:
    </p>

    <p class="formula">
      \\Delta y=f(x_2)-f(x_1)
    </p>

    <p>
      De horizontale verandering is:
    </p>

    <p class="formula">
      \\Delta x=x_2-x_1
    </p>

    <p>
      Daarom is:
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      precies de <strong>helling van de rechte door de twee punten</strong>.
    </p>

    <p>
      Die rechte noemen we de <strong>secant</strong> van de grafiek:
      een rechte die de grafiek in twee punten snijdt.
    </p>

    <div class="callout">
      <p><strong>
        Gemiddelde verandering heeft dus drie gezichten:
      </strong></p>
      <p>
        verandering per eenheid → verhouding van veranderingen → helling.
      </p>
    </div>


    <h3>Positieve, negatieve en nulverandering</h3>

    <p>
      De gemiddelde veranderingssnelheid kan positief, negatief of nul zijn.
    </p>

    <p>Als de functiewaarde toeneemt:</p>

    <p class="formula">
      \\Delta y>0
    </p>

    <p>
      en is de gemiddelde veranderingssnelheid positief.
    </p>

    <p>Als de functiewaarde afneemt:</p>

    <p class="formula">
      \\Delta y<0
    </p>

    <p>
      en is de gemiddelde veranderingssnelheid negatief.
    </p>

    <p>Als de functiewaarde niet verandert:</p>

    <p class="formula">
      \\Delta y=0
    </p>

    <p>
      en is de gemiddelde veranderingssnelheid nul,
      zolang <span class="formula-inline">\\Delta x\\neq0</span>.
    </p>

    <p>
      Op een grafiek betekent dit respectievelijk een gemiddeld stijgende,
      dalende of horizontale secant.
    </p>


    <h3>Gemiddeld of ogenblikkelijk?</h3>

    <p>
      We kunnen nu twee verschillende vragen formuleren.
    </p>

    <p>
      <strong>Vraag 1:</strong>
      Hoe snel verandert een functie gemiddeld tussen twee punten?
    </p>

    <p class="formula">
      \\frac{f(x_2)-f(x_1)}
      {x_2-x_1}
    </p>

    <p>
      <strong>Vraag 2:</strong>
      Hoe snel verandert de functie precies op één bepaald punt?
    </p>

    <p>
      Die tweede vraag kunnen we nog niet rechtstreeks beantwoorden.
      Daarvoor moeten we het interval tussen de twee punten steeds kleiner maken.
    </p>

    <div class="callout">
      <p><strong>
        De gemiddelde veranderingssnelheid gebruikt twee punten.
      </strong></p>
      <p><strong>
        De ogenblikkelijke veranderingssnelheid gaat over één punt.
      </strong></p>
    </div>


    <h3>Het interval kleiner maken</h3>

    <p>
      Stel dat we willen weten hoe snel een auto precies op tijdstip
      <span class="formula-inline">t=2</span> uur rijdt.
    </p>

    <p>
      We kunnen eerst de gemiddelde snelheid bekijken tussen 2 en 3 uur.
      Maar dat interval is groot.
    </p>

    <p>
      We kunnen het tweede tijdstip steeds dichter bij 2 brengen:
    </p>

    <p class="formula">
      [2,3]
    </p>

    <p class="formula">
      [2,2{,}5]
    </p>

    <p class="formula">
      [2,2{,}1]
    </p>

    <p class="formula">
      [2,2{,}01]
    </p>

    <p>
      Bij elk interval berekenen we opnieuw de gemiddelde veranderingssnelheid.
    </p>

    <p>
      We onderzoeken vervolgens wat er gebeurt wanneer het tweede punt
      steeds dichter bij het eerste punt komt.
    </p>

    <p>
      Het doel is dus niet om twee verschillende punten onmiddellijk gelijk
      te maken. We onderzoeken het gedrag wanneer hun afstand steeds kleiner wordt.
    </p>


    <h3>De eerste stap naar de limiet</h3>

    <p>
      Om dit proces algemeen te beschrijven, noemen we de kleine verandering
      in <span class="formula-inline">x</span> bijvoorbeeld
      <span class="formula-inline">h</span>.
    </p>

    <p>
      Dan vergelijken we de waarden bij
      <span class="formula-inline">x</span> en
      <span class="formula-inline">x+h</span>.
    </p>

    <p>
      De gemiddelde veranderingssnelheid over dit kleine interval is:
    </p>

    <p class="formula">
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu kunnen we het interval steeds kleiner maken:
    </p>

    <p class="formula">
      h=1
    </p>

    <p class="formula">
      h=0{,}1
    </p>

    <p class="formula">
      h=0{,}01
    </p>

    <p class="formula">
      h=0{,}001
    </p>

    <p>
      We willen onderzoeken naar welke waarde de gemiddelde
      veranderingssnelheid nadert wanneer <span class="formula-inline">h</span>
      steeds dichter bij nul komt.
    </p>

    <div class="callout">
      <p><strong>
        We zijn nu aangekomen bij de centrale vraag van 3.2:
        wat gebeurt er wanneer het interval naar nul nadert?
      </strong></p>
    </div>


    <h3>Van verandering naar calculus</h3>

    <p>
      We hebben in deze milestone een eenvoudige maar zeer krachtige
      gedachte opgebouwd:
    </p>

    <p class="formula">
      \\text{verandering}
      \\rightarrow
      \\frac{\\text{verandering}}{\\text{interval}}
      \\rightarrow
      \\text{gemiddelde veranderingssnelheid}
    </p>

    <p>
      Op een grafiek is dezelfde verhouding:
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
      =
      \\text{helling van een secant}
    </p>

    <p>
      En wanneer we de twee punten steeds dichter bij elkaar brengen,
      ontstaat een nieuwe vraag:
    </p>

    <div class="callout">
      <p><strong>
        Welke waarde nadert de gemiddelde veranderingssnelheid
        wanneer het interval steeds kleiner wordt?
      </strong></p>
    </div>

    <p>
      Dat is het vertrekpunt van de volgende milestone:
      <strong>het idee van de limiet</strong>.
    </p>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Verandering kunnen we meten door de verandering in een grootheid
        te vergelijken met de verandering in een andere grootheid.
      </p>
      <p>
        De gemiddelde veranderingssnelheid is
        <span class="formula-inline">\\Delta y / \\Delta x</span>.
        Geometrisch is dat de helling van de secant door twee punten.
      </p>
      <p>
        Door het interval steeds kleiner te maken, komen we bij de vraag
        hoe snel een functie op één moment verandert. Die vraag leidt
        rechtstreeks naar de limiet en vervolgens naar de afgeleide.
      </p>
    </div>
  `
},

   {
  id: "3.2",
  title: "Het idee van de limiet",
  goal: "Wat gebeurt er als we steeds dichterbij komen?",
  theory: /* html */`
    <h2>Het idee van de limiet</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat betekent het dat een waarde een andere waarde nadert?</li>
      <li>Hoe kunnen we het gedrag van een functie vlak bij een punt onderzoeken?</li>
      <li>Waarom hoeft een functiewaarde niet gelijk te zijn aan haar limiet?</li>
      <li>Waarom moeten we soms van links én van rechts kijken?</li>
      <li>Wanneer bestaat een limiet niet?</li>
      <li>Hoe kunnen we eenvoudige limieten berekenen?</li>
      <li>Hoe leidt de limiet van een gemiddelde verandering naar de afgeleide?</li>
    </ul>

    <p>
      In 3.1 zagen we dat de gemiddelde veranderingssnelheid tussen twee
      punten wordt gegeven door:
    </p>

    <p class="formula">
      \frac{f(x_2)-f(x_1)}{x_2-x_1}
    </p>

    <p>
      Maar we wilden uiteindelijk weten hoe snel een functie
      <strong>op één bepaald punt</strong> verandert.
    </p>

    <p>
      Daarvoor moeten we het interval tussen twee punten steeds kleiner maken.
      Dat brengt ons bij een van de belangrijkste ideeën van de calculus:
      <strong>de limiet</strong>.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een limiet beschrijft waar een functiewaarde naartoe gaat wanneer
        de invoer steeds dichter bij een bepaalde waarde komt.
      </p>
      <p>
        We onderzoeken dus vooral het <strong>gedrag in de buurt</strong>
        van een punt.
      </p>
    </div>


    <h3>Van een interval naar één punt</h3>

    <p>
      Neem de functie:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      In 3.1 berekenden we bijvoorbeeld de gemiddelde veranderingssnelheid
      tussen <span class="formula-inline">x=2</span> en
      <span class="formula-inline">x=3</span>.
    </p>

    <p class="formula">
      \frac{f(3)-f(2)}{3-2}
      =
      \frac{9-4}{1}
      =
      5
    </p>

    <p>
      Maar wat als we willen onderzoeken wat er gebeurt
      <strong>vlak bij x=2</strong>?
    </p>

    <p>
      Dan kunnen we het tweede punt steeds dichter bij 2 brengen:
    </p>

    <p class="formula">
      x=3
    </p>

    <p class="formula">
      x=2{,}5
    </p>

    <p class="formula">
      x=2{,}1
    </p>

    <p class="formula">
      x=2{,}01
    </p>

    <p class="formula">
      x=2{,}001
    </p>

    <p>
      We maken het interval dus steeds kleiner.
    </p>

    <div class="callout">
      <p><strong>
        We hoeven het punt niet meteen te bereiken.
        We onderzoeken wat er gebeurt wanneer we het steeds dichter naderen.
      </strong></p>
    </div>


    <h3>Wat betekent "naderen"?</h3>

    <p>
      In het dagelijks leven betekent naderen dat iets steeds dichter bij
      iets anders komt.
    </p>

    <p>
      Stel bijvoorbeeld dat een trein naar een station rijdt.
      De afstand tot het station kan achtereenvolgens zijn:
    </p>

    <p class="formula">
      10\text{ km},\quad
      5\text{ km},\quad
      1\text{ km},\quad
      0{,}1\text{ km},\quad
      0{,}01\text{ km}
    </p>

    <p>
      De trein komt steeds dichter bij het station.
    </p>

    <p>
      In de wiskunde gebruiken we hetzelfde idee.
      Een waarde kan een andere waarde steeds dichter naderen.
    </p>

    <p>
      Belangrijk is dat <strong>naderen niet hetzelfde is als bereiken</strong>.
    </p>

    <div class="callout">
      <p><strong>
        Een limiet beschrijft waar een waarde naartoe gaat,
        niet noodzakelijk de waarde die uiteindelijk wordt bereikt.
      </strong></p>
    </div>


    <h3>Een eerste limiet</h3>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We onderzoeken wat er gebeurt wanneer
      <span class="formula-inline">x</span> steeds dichter bij 2 komt.
    </p>

    <p class="formula">
      x=2{,}1
      \quad\Rightarrow\quad
      f(x)=2{,}1^2=4{,}41
    </p>

    <p class="formula">
      x=2{,}01
      \quad\Rightarrow\quad
      f(x)=2{,}01^2=4{,}0401
    </p>

    <p class="formula">
      x=2{,}001
      \quad\Rightarrow\quad
      f(x)=2{,}001^2=4{,}004001
    </p>

    <p>
      De functiewaarden komen steeds dichter bij 4.
    </p>

    <p>We schrijven:</p>

    <p class="formula">
      \lim_{x\to2}x^2=4
    </p>

    <p>
      Dit lezen we als:
    </p>

    <div class="callout">
      <p><strong>
        De limiet van <span class="formula-inline">x^2</span>
        voor <span class="formula-inline">x</span> naar 2 is 4.
      </strong></p>
    </div>


    <h3>De betekenis van de notatie</h3>

    <p>
      Bekijk:
    </p>

    <p class="formula">
      \lim_{x\to a}f(x)=L
    </p>

    <p>
      Deze notatie bevat drie onderdelen:
    </p>

    <ul>
      <li>
        <strong>x → a</strong>:
        x komt steeds dichter bij a;
      </li>
      <li>
        <strong>f(x)</strong>:
        we volgen de overeenkomstige functiewaarden;
      </li>
      <li>
        <strong>L</strong>:
        de waarde waartoe de functiewaarden naderen.
      </li>
    </ul>

    <p>
      De volledige uitspraak betekent dus:
    </p>

    <div class="callout">
      <p>
        Wanneer <span class="formula-inline">x</span> steeds dichter bij
        <span class="formula-inline">a</span> komt, nadert
        <span class="formula-inline">f(x)</span> steeds dichter bij
        <span class="formula-inline">L</span>.
      </p>
    </div>


    <h3>De functiewaarde en de limiet</h3>

    <p>
      Een van de belangrijkste inzichten is dat de functiewaarde op een punt
      niet noodzakelijk gelijk hoeft te zijn aan de limiet.
    </p>

    <p>Bekijk bijvoorbeeld:</p>

    <p class="formula">
      f(x)=\frac{x^2-4}{x-2}
    </p>

    <p>
      Als we <span class="formula-inline">x=2</span> rechtstreeks invullen,
      krijgen we:
    </p>

    <p class="formula">
      \frac{2^2-4}{2-2}
      =
      \frac{0}{0}
    </p>

    <p>
      De functie is dus niet gedefinieerd voor
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Toch kunnen we de uitdrukking voor andere waarden van
      <span class="formula-inline">x</span> vereenvoudigen:
    </p>

    <p class="formula">
      \frac{x^2-4}{x-2}
      =
      \frac{(x-2)(x+2)}{x-2}
      =
      x+2
    </p>

    <p>
      zolang:
    </p>

    <p class="formula">
      x\neq2
    </p>

    <p>
      Wanneer <span class="formula-inline">x</span> dicht bij 2 komt,
      komt <span class="formula-inline">x+2</span> dicht bij 4.
      Daarom:
    </p>

    <p class="formula">
      \lim_{x\to2}
      \frac{x^2-4}{x-2}
      =
      4
    </p>

    <div class="callout">
      <p><strong>
        Een functie kan op een punt niet gedefinieerd zijn,
        terwijl de limiet op dat punt wel bestaat.
      </strong></p>
    </div>

    <p>
      Dit laat het verschil zien tussen:
    </p>

    <ul>
      <li>de waarde van een functie op een punt;</li>
      <li>het gedrag van de functie in de buurt van dat punt.</li>
    </ul>


    <h3>Waarom vullen we niet gewoon x=a in?</h3>

    <p>
      Bij een limiet onderzoeken we wat er gebeurt wanneer
      <span class="formula-inline">x</span> <strong>naar</strong>
      <span class="formula-inline">a</span> gaat.
    </p>

    <p>
      Dat betekent niet dat we noodzakelijk
      <span class="formula-inline">x=a</span> moeten invullen.
    </p>

    <p>
      In het vorige voorbeeld was rechtstreeks invullen zelfs onmogelijk,
      omdat de noemer nul werd.
    </p>

    <p>
      De limiet kijkt daarom naar waarden <strong>rond</strong> het punt.
    </p>

    <div class="callout">
      <p><strong>
        Een limiet gaat over het gedrag in de omgeving van een punt,
        niet noodzakelijk over de waarde op dat punt zelf.
      </strong></p>
    </div>


    <h3>Van links en van rechts</h3>

    <p>
      Een punt kan vanuit twee richtingen worden benaderd.
    </p>

    <p>
      Vanuit kleinere waarden van x schrijven we:
    </p>

    <p class="formula">
      x\to a^-
    </p>

    <p>
      Dit noemen we de <strong>linkerbenadering</strong>.
    </p>

    <p>
      Vanuit grotere waarden van x schrijven we:
    </p>

    <p class="formula">
      x\to a^+
    </p>

    <p>
      Dit noemen we de <strong>rechterbenadering</strong>.
    </p>

    <p>
      Voor een gewone tweezijdige limiet moeten beide richtingen naar
      dezelfde waarde naderen.
    </p>

    <p class="formula">
      \lim_{x\to a^-}f(x)=L
    </p>

    <p>en:</p>

    <p class="formula">
      \lim_{x\to a^+}f(x)=L
    </p>

    <p>
      Dan geldt:
    </p>

    <p class="formula">
      \lim_{x\to a}f(x)=L
    </p>

    <div class="callout">
      <p><strong>
        Links en rechts moeten naar dezelfde waarde naderen
        voordat de tweezijdige limiet bestaat.
      </strong></p>
    </div>


    <h3>Een limiet die niet bestaat</h3>

    <p>
      Stel dat een functie links van
      <span class="formula-inline">x=0</span> naar 1 nadert,
      maar rechts van 0 naar 3.
    </p>

    <p>Dan geldt:</p>

    <p class="formula">
      \lim_{x\to0^-}f(x)=1
    </p>

    <p class="formula">
      \lim_{x\to0^+}f(x)=3
    </p>

    <p>
      Omdat de linker- en rechterlimiet verschillend zijn,
      bestaat de tweezijdige limiet niet.
    </p>

    <p class="formula">
      \lim_{x\to0}f(x)\text{ bestaat niet}
    </p>

    <p>
      Dit is een belangrijk gevolg:
      <strong>niet elke limiet bestaat</strong>.
    </p>


    <h3>De limiet beschrijft gedrag</h3>

    <p>
      We kunnen een limiet daarom het best zien als een uitspraak over gedrag.
    </p>

    <p>
      We vragen niet:
    </p>

    <div class="callout">
      <p>
        "Welke waarde heeft de functie precies op dit punt?"
      </p>
    </div>

    <p>
      We vragen:
    </p>

    <div class="callout">
      <p><strong>
        "Welke waarde begint de functie te benaderen wanneer
        x steeds dichter bij dit punt komt?"
      </strong></p>
    </div>

    <p>
      Deze manier van denken is essentieel voor de verdere calculus.
    </p>


    <h3>Rechtstreeks invullen</h3>

    <p>
      Niet iedere limiet is ingewikkeld.
      Bij veel gewone functies kunnen we de waarde rechtstreeks invullen.
    </p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">
      \lim_{x\to3}(x^2+2x)
    </p>

    <p>
      Invullen van <span class="formula-inline">x=3</span> geeft:
    </p>

    <p class="formula">
      3^2+2(3)
      =
      9+6
      =
      15
    </p>

    <p>Dus:</p>

    <p class="formula">
      \lim_{x\to3}(x^2+2x)=15
    </p>

    <p>
      Voor zulke eenvoudige functies vallen functiewaarde en limiet samen.
    </p>


    <h3>De vorm 0/0</h3>

    <p>
      Soms levert rechtstreeks invullen de vorm:
    </p>

    <p class="formula">
      \frac{0}{0}
    </p>

    <p>
      Dit betekent <strong>niet</strong> dat de limiet nul is.
      Het betekent dat rechtstreeks invullen ons nog geen antwoord geeft.
    </p>

    <p>
      We moeten de uitdrukking verder onderzoeken.
    </p>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">
      \lim_{x\to2}
      \frac{x^2-4}{x-2}
    </p>

    <p>
      Factoriseren geeft:
    </p>

    <p class="formula">
      \frac{x^2-4}{x-2}
      =
      \frac{(x-2)(x+2)}{x-2}
      =
      x+2
    </p>

    <p>
      voor <span class="formula-inline">x\neq2</span>.
      Daarom:
    </p>

    <p class="formula">
      \lim_{x\to2}(x+2)=4
    </p>

    <div class="callout">
      <p><strong>
        De vorm 0/0 is geen antwoord.
        Het is een signaal dat we verder moeten onderzoeken.
      </strong></p>
    </div>


    <h3>Rekenregels voor limieten</h3>

    <p>
      Wanneer de afzonderlijke limieten bestaan, kunnen we veel
      limieten volgens gewone algebraïsche regels behandelen.
    </p>

    <p>Voor optellen geldt:</p>

    <p class="formula">
      \lim_{x\to a}(f(x)+g(x))
      =
      \lim_{x\to a}f(x)
      +
      \lim_{x\to a}g(x)
    </p>

    <p>Voor aftrekken:</p>

    <p class="formula">
      \lim_{x\to a}(f(x)-g(x))
      =
      \lim_{x\to a}f(x)
      -
      \lim_{x\to a}g(x)
    </p>

    <p>Voor vermenigvuldigen:</p>

    <p class="formula">
      \lim_{x\to a}(f(x)g(x))
      =
      \left(\lim_{x\to a}f(x)\right)
      \left(\lim_{x\to a}g(x)\right)
    </p>

    <p>Voor delen geldt:</p>

    <p class="formula">
      \lim_{x\to a}\frac{f(x)}{g(x)}
      =
      \frac{\lim_{x\to a}f(x)}
      {\lim_{x\to a}g(x)}
    </p>

    <p>
      bij een niet-nul noemerlimiet.
    </p>

    <p>
      Deze regels maken het mogelijk om veel limieten rechtstreeks
      algebraïsch te berekenen.
    </p>


    <h3>Limieten naar oneindig</h3>

    <p>
      We kunnen niet alleen onderzoeken wat er gebeurt wanneer
      <span class="formula-inline">x</span> een bepaalde waarde nadert.
      We kunnen ook kijken wat er gebeurt wanneer
      <span class="formula-inline">x</span> steeds groter wordt.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=\frac{1}{x}
    </p>

    <p>
      Voor steeds grotere waarden van x krijgen we:
    </p>

    <p class="formula">
      \frac{1}{10}=0{,}1
    </p>

    <p class="formula">
      \frac{1}{100}=0{,}01
    </p>

    <p class="formula">
      \frac{1}{1000}=0{,}001
    </p>

    <p>
      De functiewaarden naderen 0.
    </p>

    <p>We schrijven:</p>

    <p class="formula">
      \lim_{x\to\infty}\frac{1}{x}=0
    </p>

    <p>
      Hierbij is <strong>∞ geen gewoon getal</strong>.
      We vullen dus niet letterlijk
      <span class="formula-inline">x=\infty</span> in.
    </p>

    <p>
      De notatie beschrijft wat er gebeurt wanneer x zonder bovengrens
      blijft toenemen.
    </p>


    <h3>Wanneer de waarden onbeperkt groeien</h3>

    <p>
      Een limiet kan ook beschrijven dat functiewaarden onbeperkt groot worden.
    </p>

    <p>Bijvoorbeeld:</p>

    <p class="formula">
      f(x)=\frac{1}{x^2}
    </p>

    <p>
      Wanneer x vanuit positieve waarden naar 0 nadert:
    </p>

    <p class="formula">
      \frac{1}{0{,}1^2}=100
    </p>

    <p class="formula">
      \frac{1}{0{,}01^2}=10\,000
    </p>

    <p class="formula">
      \frac{1}{0{,}001^2}=1\,000\,000
    </p>

    <p>
      De waarden worden onbeperkt groot.
    </p>

    <p class="formula">
      \lim_{x\to0^+}\frac{1}{x^2}=\infty
    </p>

    <p>
      Ook hier betekent ∞ niet dat de functie op
      <span class="formula-inline">x=0</span> een waarde "oneindig" heeft.
      De functie is daar niet gedefinieerd.
    </p>

    <div class="callout">
      <p><strong>
        ∞ beschrijft hier onbeperkte groei, geen gewone functiewaarde.
      </strong></p>
    </div>


    <h3>De grafische betekenis van een limiet</h3>

    <p>
      De limiet kunnen we ook rechtstreeks op een grafiek interpreteren.
    </p>

    <p>
      Wanneer:
    </p>

    <p class="formula">
      \lim_{x\to a}f(x)=L
    </p>

    <p>
      betekent dit dat de grafiek steeds dichter bij de hoogte
      <span class="formula-inline">L</span> komt wanneer
      <span class="formula-inline">x</span> steeds dichter bij
      <span class="formula-inline">a</span> komt.
    </p>

    <p>
      De grafiek hoeft het punt
      <span class="formula-inline">(a,L)</span> daarbij niet noodzakelijk
      te bevatten.
    </p>

    <div class="callout">
      <p><strong>
        De limiet beschrijft wat de grafiek doet vlak bij een punt.
      </strong></p>
    </div>


    <h3>Waarom hebben we limieten nodig?</h3>

    <p>
      We kunnen nu terugkeren naar de vraag waarmee deze milestone begon.
    </p>

    <p>
      In 3.1 berekenden we de gemiddelde veranderingssnelheid:
    </p>

    <p class="formula">
      \frac{f(x_2)-f(x_1)}
      {x_2-x_1}
    </p>

    <p>
      Maar we wilden weten hoe snel een functie
      <strong>op één punt</strong> verandert.
    </p>

    <p>
      Daarvoor brengen we de twee punten steeds dichter bij elkaar.
      We kunnen het tweede punt bijvoorbeeld schrijven als
      <span class="formula-inline">x+h</span>.
    </p>

    <p>
      De gemiddelde veranderingssnelheid wordt dan:
    </p>

    <p class="formula">
      \frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu laten we <span class="formula-inline">h</span> naar nul naderen:
    </p>

    <p class="formula">
      \lim_{h\to0}
      \frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      We hebben daarmee nog niet de afgeleide berekend.
      We hebben het probleem alleen zo geformuleerd dat een
      <strong>ogenblikkelijke veranderingssnelheid</strong> mogelijk wordt.
    </p>

    <div class="callout">
      <p><strong>
        De limiet vormt de brug van gemiddelde verandering
        naar verandering op één punt.
      </strong></p>
    </div>


    <h3>Een laatste voorbeeld: de afgeleide komt in zicht</h3>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      De gemiddelde veranderingssnelheid tussen
      <span class="formula-inline">x</span> en
      <span class="formula-inline">x+h</span> is:
    </p>

    <p class="formula">
      \frac{(x+h)^2-x^2}{h}
    </p>

    <p>
      Uitwerken geeft:
    </p>

    <p class="formula">
      \frac{x^2+2xh+h^2-x^2}{h}
    </p>

    <p class="formula">
      \frac{2xh+h^2}{h}
    </p>

    <p class="formula">
      2x+h
    </p>

    <p>
      Wanneer <span class="formula-inline">h</span> steeds dichter bij nul komt,
      komt deze uitdrukking steeds dichter bij:
    </p>

    <p class="formula">
      2x
    </p>

    <p>
      We hebben hiermee het mechanisme achter de afgeleide al zichtbaar gemaakt.
      De formele definitie en de praktische regels voor afgeleiden komen in
      de volgende milestones.
    </p>

    <div class="callout">
      <p><strong>
        Gemiddelde verandering
        → interval kleiner maken
        → limiet nemen
        → ogenblikkelijke verandering.
      </strong></p>
    </div>


    <h3>Van limiet naar continuïteit</h3>

    <p>
      We hebben gezien dat een functie een limiet kan hebben op een punt
      waar de functie zelf niet gedefinieerd is.
    </p>

    <p>
      Dat roept een nieuwe vraag op:
    </p>

    <div class="callout">
      <p><strong>
        Wanneer sluit het gedrag van een functie rond een punt
        netjes aan op de functiewaarde zelf?
      </strong></p>
    </div>

    <p>
      Daarvoor moeten we de limiet vergelijken met de werkelijke
      functiewaarde op dat punt.
    </p>

    <p>
      Dat leidt naar het volgende begrip:
      <strong>continuïteit</strong>.
    </p>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een limiet beschrijft het gedrag van een functie wanneer de invoer
        steeds dichter bij een bepaalde waarde komt.
      </p>
      <p>
        De functiewaarde op dat punt hoeft niet gelijk te zijn aan de limiet,
        en de limiet hoeft zelfs niet te bestaan als de linker- en
        rechterbenadering verschillend zijn.
      </p>
      <p>
        Door het interval in de gemiddelde veranderingssnelheid steeds kleiner
        te maken, ontstaat de limiet die de brug vormt naar de
        <strong>ogenblikkelijke veranderingssnelheid</strong> en dus naar
        de afgeleide.
      </p>
    </div>
  `
},

  {
  id: "3.3",
  title: "Continuïteit",
  goal: "Wanneer vormt een functie één ononderbroken geheel?",
  theory: /* html */`
    <h2>Continuïteit</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat betekent het dat een functie continu is?</li>
      <li>Waarom zijn limiet, functiewaarde en continuïteit met elkaar verbonden?</li>
      <li>Wat is een gat in een grafiek?</li>
      <li>Wat is het verschil tussen een gat, een sprong en een verticale asymptoot?</li>
      <li>Welke functies zijn vanzelfsprekend continu?</li>
      <li>Hoe kunnen we continuïteit onderzoeken met limieten?</li>
      <li>Waarom is continuïteit belangrijk voor de verdere calculus?</li>
    </ul>

    <p>
      In 3.2 leerden we dat een limiet beschrijft wat er met een functie
      gebeurt wanneer <span class="formula-inline">x</span> steeds dichter
      bij een bepaalde waarde komt.
    </p>

    <p>
      Nu combineren we dat idee met de werkelijke functiewaarde op het punt.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een functie is continu op een punt wanneer de functiewaarde,
        de limiet en het punt zelf netjes op elkaar aansluiten.
      </p>
    </div>


    <h3>Een grafiek zonder onderbreking</h3>

    <p>
      Denk eerst aan een eenvoudige grafiek die je met één vloeiende beweging
      kunt tekenen zonder je potlood van het papier te halen.
    </p>

    <p>
      Dat geeft een goede eerste intuïtie voor <strong>continuïteit</strong>.
    </p>

    <p>
      Een continue functie heeft op het onderzochte punt geen gat,
      sprong of andere onderbreking.
    </p>

    <p>
      Deze intuïtie is nuttig, maar in de wiskunde willen we continuïteit
      precies kunnen definiëren.
    </p>


    <h3>Terug naar de limiet</h3>

    <p>
      Neem de functie:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We zagen in 3.2 dat:
    </p>

    <p class="formula">
      \lim_{x\to2}x^2=4
    </p>

    <p>
      Tegelijk is:
    </p>

    <p class="formula">
      f(2)=4
    </p>

    <p>
      De limiet en de functiewaarde zijn dus gelijk.
    </p>

    <p>
      Bovendien is de functie daadwerkelijk gedefinieerd bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Alles sluit hier netjes op elkaar aan.
    </p>


    <h3>De drie voorwaarden</h3>

    <p>
      Een functie <span class="formula-inline">f</span> is continu in
      <span class="formula-inline">x=a</span> wanneer drie zaken tegelijk
      gelden.
    </p>

    <p><strong>1. De functiewaarde bestaat:</strong></p>

    <p class="formula">
      f(a)\text{ bestaat}
    </p>

    <p><strong>2. De limiet bestaat:</strong></p>

    <p class="formula">
      \lim_{x\to a}f(x)\text{ bestaat}
    </p>

    <p><strong>3. De limiet is gelijk aan de functiewaarde:</strong></p>

    <p class="formula">
      \lim_{x\to a}f(x)=f(a)
    </p>

    <p>
      Deze drie voorwaarden vormen samen de formele basis van continuïteit
      op een punt.
    </p>

    <div class="callout">
      <p><strong>
        Continuïteit in x=a betekent:
      </strong></p>
      <p>
        de functie bestaat op a, de limiet bestaat en de limiet
        is precies gelijk aan de functiewaarde.
      </p>
    </div>


    <h3>Een voorbeeld van continuïteit</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=x^2+3x-1
    </p>

    <p>
      We onderzoeken de continuïteit bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Eerst berekenen we de functiewaarde:
    </p>

    <p class="formula">
      f(2)=2^2+3(2)-1=4+6-1=9
    </p>

    <p>
      Vervolgens bekijken we de limiet:
    </p>

    <p class="formula">
      \lim_{x\to2}(x^2+3x-1)=9
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \lim_{x\to2}f(x)=f(2)=9
    </p>

    <p>
      De functie is daarom continu bij
      <span class="formula-inline">x=2</span>.
    </p>


    <h3>Een gat in de grafiek</h3>

    <p>
      In 3.2 bekeken we:
    </p>

    <p class="formula">
      f(x)=\frac{x^2-4}{x-2}
    </p>

    <p>
      Deze functie is niet gedefinieerd bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Voor andere waarden van x kunnen we schrijven:
    </p>

    <p class="formula">
      \frac{x^2-4}{x-2}=x+2
    </p>

    <p>
      en daarom:
    </p>

    <p class="formula">
      \lim_{x\to2}f(x)=4
    </p>

    <p>
      De grafiek gedraagt zich dus vlak bij
      <span class="formula-inline">x=2</span> alsof ze de rechte
      <span class="formula-inline">y=x+2</span> volgt,
      maar het punt bij
      <span class="formula-inline">x=2</span> ontbreekt.
    </p>

    <p>
      We noemen dit een <strong>gat</strong> in de grafiek.
    </p>

    <div class="callout">
      <p><strong>
        De limiet bestaat, maar de functiewaarde ontbreekt.
        De functie is daardoor niet continu op dat punt.
      </strong></p>
    </div>


    <h3>Een gat kan soms worden opgevuld</h3>

    <p>
      Stel dat we de vorige functie uitbreiden door te bepalen:
    </p>

    <p class="formula">
      f(2)=4
    </p>

    <p>
      Dan wordt de functie op dat punt gedefinieerd en geldt:
    </p>

    <p class="formula">
      \lim_{x\to2}f(x)=f(2)=4
    </p>

    <p>
      Het gat is dan verdwenen en de functie is continu bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Dit laat zien dat een discontinuïteit soms kan worden verwijderd
      door de functiewaarde op het ontbrekende punt juist te kiezen.
    </p>


    <h3>Een sprong in de grafiek</h3>

    <p>
      Niet elke discontinuïteit kan worden opgelost door één punt toe te voegen.
    </p>

    <p>
      Stel dat links van
      <span class="formula-inline">x=0</span> een functie naar 1 nadert,
      terwijl ze rechts van 0 naar 3 nadert.
    </p>

    <p class="formula">
      \lim_{x\to0^-}f(x)=1
    </p>

    <p class="formula">
      \lim_{x\to0^+}f(x)=3
    </p>

    <p>
      Omdat de linker- en rechterlimiet verschillend zijn,
      bestaat de tweezijdige limiet niet.
    </p>

    <p>
      De grafiek maakt op dat punt als het ware een <strong>sprong</strong>.
    </p>

    <div class="callout">
      <p><strong>
        Bij een sprong is er geen enkele waarde waar de functie
        van beide kanten naartoe nadert.
      </strong></p>
    </div>


    <h3>Een verticale asymptoot</h3>

    <p>
      Er is nog een ander type onderbreking.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=\frac{1}{x}
    </p>

    <p>
      Deze functie is niet gedefinieerd bij
      <span class="formula-inline">x=0</span>.
    </p>

    <p>
      Wanneer x vanuit positieve waarden naar nul nadert,
      worden de functiewaarden onbeperkt groot:
    </p>

    <p class="formula">
      \lim_{x\to0^+}\frac{1}{x}=\infty
    </p>

    <p>
      Vanuit negatieve waarden worden ze onbeperkt negatief:
    </p>

    <p class="formula">
      \lim_{x\to0^-}\frac{1}{x}=-\infty
    </p>

    <p>
      De rechte
    </p>

    <p class="formula">
      x=0
    </p>

    <p>
      noemen we een <strong>verticale asymptoot</strong>.
    </p>

    <p>
      Hier is dus niet simpelweg sprake van een klein gat.
      De functiewaarden worden onbeperkt groot in de buurt van het punt.
    </p>


    <h3>Drie verschillende soorten onderbreking</h3>

    <p>
      We kunnen de belangrijkste situaties nu naast elkaar zetten.
    </p>

    <ul>
      <li>
        <strong>Gat:</strong>
        de limiet bestaat, maar de functiewaarde ontbreekt of is verkeerd.
      </li>
      <li>
        <strong>Sprong:</strong>
        de linker- en rechterlimiet zijn verschillend.
      </li>
      <li>
        <strong>Verticale asymptoot:</strong>
        de functiewaarden worden onbeperkt groot of klein in de buurt van
        het punt.
      </li>
    </ul>

    <div class="callout">
      <p><strong>
        Continuïteit betekent dus meer dan "de grafiek ziet er mooi uit".
        De limiet en de functiewaarde moeten wiskundig op elkaar aansluiten.
      </strong></p>
    </div>


    <h3>Veel functies zijn continu</h3>

    <p>
      Gelukkig hoeven we niet voor iedere functie op ieder punt
      een volledige limietanalyse uit te voeren.
    </p>

    <p>
      Belangrijke elementaire functies zijn continu op hun domein.
    </p>

    <p>
      Zo zijn polynomen zoals:
    </p>

    <p class="formula">
      f(x)=x^3-2x+5
    </p>

    <p>
      overal continu.
    </p>

    <p>
      Ook machtsfuncties zoals:
    </p>

    <p class="formula">
      f(x)=\sqrt{x}
    </p>

    <p>
      zijn continu waar ze gedefinieerd zijn.
    </p>

    <p>
      Bij rationale functies zoals:
    </p>

    <p class="formula">
      f(x)=\frac{x+1}{x-3}
    </p>

    <p>
      moeten we opletten voor waarden waarvoor de noemer nul wordt.
    </p>

    <p class="formula">
      x\neq3
    </p>

    <p>
      De functie is continu op haar domein, maar niet gedefinieerd bij
      <span class="formula-inline">x=3</span>.
    </p>


    <h3>Continuïteit van sommen en producten</h3>

    <p>
      Continuïteit gedraagt zich goed onder veel gewone algebraïsche bewerkingen.
    </p>

    <p>
      Als twee functies continu zijn in een punt, dan zijn hun som en verschil
      daar ook continu.
    </p>

    <p class="formula">
      f(x)+g(x)
    </p>

    <p class="formula">
      f(x)-g(x)
    </p>

    <p>
      Ook het product is continu:
    </p>

    <p class="formula">
      f(x)g(x)
    </p>

    <p>
      Voor een quotiënt geldt dit wanneer de noemer niet nul is.
    </p>

    <p class="formula">
      \frac{f(x)}{g(x)}
      \qquad
      \text{met }g(x)\neq0
    </p>

    <p>
      Hierdoor kunnen we de continuïteit van veel samengestelde functies
      afleiden uit functies die we al kennen.
    </p>


    <h3>Continuïteit op een interval</h3>

    <p>
      Tot nu toe onderzochten we continuïteit op één punt.
      We kunnen ook vragen of een functie continu is over een volledig interval.
    </p>

    <p>
      Een functie is bijvoorbeeld continu op:
    </p>

    <p class="formula">
      [0,5]
    </p>

    <p>
      wanneer ze op ieder punt van dat interval continu is,
      met de gebruikelijke eenzijdige interpretatie aan de uiteinden.
    </p>

    <p>
      Grafisch betekent dit dat de functie nergens binnen het interval
      een gat, sprong of andere discontinuïteit vertoont.
    </p>


    <h3>Een belangrijke eigenschap van continue functies</h3>

    <p>
      Continuïteit heeft niet alleen een grafische betekenis.
      Ze geeft ons ook krachtige informatie over wat een functie moet doen.
    </p>

    <p>
      Stel dat een functie continu is op een interval en dat:
    </p>

    <p class="formula">
      f(a)<0
    </p>

    <p>en:</p>

    <p class="formula">
      f(b)>0
    </p>

    <p>
      Dan moet de grafiek ergens tussen a en b de x-as kruisen.
    </p>

    <p>
      Er moet dus een waarde c tussen a en b bestaan waarvoor:
    </p>

    <p class="formula">
      f(c)=0
    </p>

    <p>
      Dit is de kern van de <strong>tussenwaardestelling</strong>.
    </p>


    <h3>De tussenwaardestelling intuïtief</h3>

    <p>
      Denk aan een continue temperatuur die van
      <span class="formula-inline">-5 °C</span> naar
      <span class="formula-inline">8 °C</span> stijgt.
    </p>

    <p>
      Als de temperatuur continu verandert, moet er een moment zijn
      waarop ze precies:
    </p>

    <p class="formula">
      0^\circ\text{C}
    </p>

    <p>
      bedraagt.
    </p>

    <p>
      Een continue functie kan een tussenliggende waarde dus niet zomaar
      overslaan.
    </p>

    <div class="callout">
      <p><strong>
        Continuïteit betekent dat tussenliggende waarden niet kunnen
        worden overgeslagen.
      </strong></p>
    </div>


    <h3>Waarom is dit belangrijk?</h3>

    <p>
      Deze eigenschap maakt continuïteit veel meer dan een beschrijving
      van een "mooie" grafiek.
    </p>

    <p>
      Ze stelt ons in staat om conclusies te trekken zonder iedere waarde
      van een functie afzonderlijk te berekenen.
    </p>

    <p>
      Als we bijvoorbeeld weten dat een continue functie aan de ene kant
      van nul negatief is en aan de andere kant positief, weten we dat
      er ergens een nulpunt tussenin moet liggen.
    </p>

    <p>
      Dit idee speelt later een belangrijke rol bij het zoeken naar
      nulpunten en bij numerieke methoden.
    </p>


    <h3>Continuïteit en de grafiek</h3>

    <p>
      We kunnen de drie kernideeën van de vorige milestones nu verbinden.
    </p>

    <p>
      De <strong>functiewaarde</strong> vertelt wat de functie op een punt doet.
    </p>

    <p>
      De <strong>limiet</strong> vertelt wat de functie in de buurt van
      dat punt doet.
    </p>

    <p>
      <strong>Continuïteit</strong> vertelt dat die twee perfect op elkaar aansluiten.
    </p>

    <div class="callout">
      <p><strong>
        Functiewaarde → gedrag in de buurt → aansluiting.
      </strong></p>
    </div>


    <h3>Een praktische controle</h3>

    <p>
      Wanneer je moet onderzoeken of een functie continu is bij
      <span class="formula-inline">x=a</span>, kun je steeds dezelfde stappen volgen.
    </p>

    <ol>
      <li>Bereken of bepaal <span class="formula-inline">f(a)</span>.</li>
      <li>Onderzoek de linkerlimiet.</li>
      <li>Onderzoek de rechterlimiet.</li>
      <li>Controleer of beide limieten gelijk zijn.</li>
      <li>Vergelijk de limiet met <span class="formula-inline">f(a)</span>.</li>
    </ol>

    <p>
      Als alles overeenkomt, is de functie continu bij a.
    </p>

    <div class="callout">
      <p><strong>Vaste werkwijze:</strong></p>
      <p>
        functiewaarde → linkerlimiet → rechterlimiet
        → limiet → vergelijken met functiewaarde.
      </p>
    </div>


    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        <strong>Een bestaande limiet verwarren met continuïteit.</strong>
        Een limiet kan bestaan terwijl de functiewaarde ontbreekt.
      </li>
      <li>
        <strong>Alleen de functiewaarde controleren.</strong>
        Dat zegt niets over wat er vlak naast het punt gebeurt.
      </li>
      <li>
        <strong>Alleen van één kant kijken.</strong>
        Voor een tweezijdige limiet moeten links en rechts overeenkomen.
      </li>
      <li>
        <strong>Een gat verwarren met een verticale asymptoot.</strong>
        Bij een gat nadert de functie een eindige waarde; bij een verticale
        asymptoot kunnen de functiewaarden onbeperkt groeien.
      </li>
      <li>
        <strong>Denken dat elke functie overal continu is.</strong>
        Functies kunnen onderbrekingen hebben of op bepaalde punten
        niet gedefinieerd zijn.
      </li>
    </ul>


    <h3>Van continuïteit naar de afgeleide</h3>

    <p>
      We hebben nu drie begrippen met elkaar verbonden:
    </p>

    <p class="formula">
      \text{functiewaarde}
      \rightarrow
      \text{limiet}
      \rightarrow
      \text{continuïteit}
    </p>

    <p>
      In 3.1 zagen we vervolgens hoe gemiddelde verandering ontstaat uit:
    </p>

    <p class="formula">
      \frac{\Delta y}{\Delta x}
    </p>

    <p>
      In 3.2 maakten we het interval steeds kleiner:
    </p>

    <p class="formula">
      \lim_{h\to0}
      \frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu weten we bovendien hoe we moeten denken over het gedrag
      van een functie rond een punt.
    </p>

    <p>
      De volgende vraag ligt daardoor voor de hand:
    </p>

    <div class="callout">
      <p><strong>
        Als een functie op een punt continu is,
        hoe snel verandert ze daar dan precies?
      </strong></p>
    </div>

    <p>
      Dat brengt ons bij de <strong>afgeleide</strong> in 3.4.
    </p>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een functie is continu in een punt wanneer de functiewaarde bestaat,
        de limiet bestaat en beide gelijk zijn:
      </p>
      <p class="formula">
        \lim_{x\to a}f(x)=f(a)
      </p>
      <p>
        Een gat, een sprong of een verticale asymptoot verbreekt die
        continuïteit.
      </p>
      <p>
        Continuïteit verbindt daarmee het gedrag van een functie in de buurt
        van een punt met de werkelijke functiewaarde op dat punt.
      </p>
    </div>
  `
},

  {
  id: "3.4",
  title: "De afgeleide",
  goal: "Hoe snel verandert iets precies op één moment?",
  theory: /* html */`
    <h2>De afgeleide</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom is gemiddelde veranderingssnelheid niet genoeg om één moment te beschrijven?</li>
      <li>Hoe maken we een interval steeds kleiner?</li>
      <li>Hoe ontstaat de afgeleide uit een limiet?</li>
      <li>Wat betekent de afgeleide van een functie op één punt?</li>
      <li>Hoe kunnen we de afgeleide geometrisch begrijpen als een helling?</li>
      <li>Wat betekent een positieve, negatieve of nulafgeleide?</li>
      <li>Hoe gebruiken we de afgeleide in beweging en andere toepassingen?</li>
    </ul>

    <p>
      In 3.1 leerden we de <strong>gemiddelde veranderingssnelheid</strong>.
      Die vertelt ons hoe sterk een grootheid verandert over een interval.
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Maar daarmee kunnen we nog niet beschrijven wat er
      <strong>precies op één moment</strong> gebeurt.
    </p>

    <div class="callout">
      <p><strong>De centrale vraag:</strong></p>
      <p>
        Hoe snel verandert een functie precies op één bepaald punt?
      </p>
    </div>


    <h3>Van gemiddelde naar ogenblikkelijke verandering</h3>

    <p>
      Stel dat een trein tijdens een rit 100 km aflegt in 2 uur.
      De gemiddelde snelheid is:
    </p>

    <p class="formula">
      v_{\\text{gem}} = \\frac{100}{2} = 50\\ \\mathrm{km/u}
    </p>

    <p>
      Dat vertelt ons hoeveel kilometer de trein gemiddeld per uur aflegt.
      Maar de trein hoeft niet voortdurend 50 km/u te rijden.
    </p>

    <p>
      Misschien rijdt hij eerst langzaam, versnelt hij daarna en remt hij
      later opnieuw.
    </p>

    <p>
      De vraag naar de snelheid <strong>op één bepaald moment</strong>
      is dus iets anders dan de gemiddelde snelheid over de hele rit.
    </p>


    <h3>Het interval kleiner maken</h3>

    <p>
      In 3.1 zagen we dat we een gemiddelde veranderingssnelheid
      kunnen berekenen tussen twee punten.
    </p>

    <p class="formula">
      \\frac{f(x_2)-f(x_1)}{x_2-x_1}
    </p>

    <p>
      Stel dat we willen weten hoe snel de functie verandert bij
      <span class="formula-inline">x=a</span>.
    </p>

    <p>
      We kunnen dan een tweede punt steeds dichter bij
      <span class="formula-inline">a</span> brengen.
    </p>

    <p>
      We bekijken bijvoorbeeld de gemiddelde verandering tussen
      <span class="formula-inline">a</span> en:
    </p>

    <p class="formula">
      a+1
    </p>

    <p class="formula">
      a+0{,}1
    </p>

    <p class="formula">
      a+0{,}01
    </p>

    <p class="formula">
      a+0{,}001
    </p>

    <p>
      Het interval wordt steeds kleiner.
    </p>

    <div class="callout">
      <p><strong>
        We proberen de gemiddelde verandering steeds dichter bij één
        bepaald punt te brengen.
      </strong></p>
    </div>


    <h3>De verandering over een klein interval</h3>

    <p>
      We noemen de kleine verandering in
      <span class="formula-inline">x</span> bijvoorbeeld
      <span class="formula-inline">h</span>.
    </p>

    <p>
      Het tweede punt is dan:
    </p>

    <p class="formula">
      x+h
    </p>

    <p>
      De gemiddelde veranderingssnelheid tussen
      <span class="formula-inline">x</span> en
      <span class="formula-inline">x+h</span> is:
    </p>

    <p class="formula">
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Dit is nog steeds een <strong>gemiddelde</strong> verandering.
      Er liggen nog altijd twee punten op de grafiek.
    </p>


    <h3>Wat gebeurt er als h naar nul gaat?</h3>

    <p>
      Nu maken we het interval steeds kleiner.
    </p>

    <p class="formula">
      h=1
    </p>

    <p class="formula">
      h=0{,}1
    </p>

    <p class="formula">
      h=0{,}01
    </p>

    <p class="formula">
      h=0{,}001
    </p>

    <p>
      We onderzoeken naar welke waarde de gemiddelde
      veranderingssnelheid nadert wanneer
      <span class="formula-inline">h</span> steeds dichter bij nul komt.
    </p>

    <p>
      Dat is precies het idee van een limiet.
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <div class="callout">
      <p><strong>Dit is de afgeleide.</strong></p>
      <p>
        De afgeleide beschrijft de ogenblikkelijke veranderingssnelheid
        van een functie.
      </p>
    </div>


    <h3>De betekenis van f'(a)</h3>

    <p>
      Als we de afgeleide bekijken bij
      <span class="formula-inline">x=a</span>, schrijven we:
    </p>

    <p class="formula">
      f'(a)
      =
      \\lim_{h\\to0}
      \\frac{f(a+h)-f(a)}{h}
    </p>

    <p>
      De waarde <span class="formula-inline">f'(a)</span> vertelt
      hoe snel de functie verandert op het punt
      <span class="formula-inline">x=a</span>.
    </p>

    <p>
      Bij een bewegend voorwerp kan dit bijvoorbeeld de
      <strong>ogenblikkelijke snelheid</strong> zijn.
    </p>


    <h3>Een eerste afgeleide berekenen</h3>

    <p>
      Neem de eenvoudige functie:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We gebruiken rechtstreeks de definitie van de afgeleide:
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{(x+h)^2-x^2}{h}
    </p>

    <p>
      Eerst werken we het kwadraat uit:
    </p>

    <p class="formula">
      (x+h)^2=x^2+2xh+h^2
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{x^2+2xh+h^2-x^2}{h}
    </p>

    <p>
      De termen <span class="formula-inline">x^2</span> vallen weg:
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{2xh+h^2}{h}
    </p>

    <p>
      We kunnen <span class="formula-inline">h</span> wegdelen:
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}(2x+h)
    </p>

    <p>
      Wanneer <span class="formula-inline">h</span> naar nul gaat, krijgen we:
    </p>

    <p class="formula">
      f'(x)=2x
    </p>

    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p>
        Uit één functie
        <span class="formula-inline">f(x)=x^2</span>
        ontstaat een nieuwe functie
        <span class="formula-inline">f'(x)=2x</span>.
      </p>
    </div>


    <h3>De afgeleide als helling</h3>

    <p>
      In 3.1 zagen we dat
      <span class="formula-inline">Δy/Δx</span>
      de helling geeft van een rechte door twee punten.
    </p>

    <p>
      Die rechte noemen we een <strong>secant</strong>.
    </p>

    <p>
      Wanneer we de twee punten steeds dichter bij elkaar brengen,
      verandert de secant steeds meer in een rechte die de grafiek
      op één punt raakt.
    </p>

    <p>
      Die rechte noemen we de <strong>raaklijn</strong> of
      <strong>tangent</strong>.
    </p>

    <div class="callout">
      <p><strong>Geometrische betekenis:</strong></p>
      <p>
        De afgeleide in een punt is de helling van de raaklijn
        aan de grafiek in dat punt.
      </p>
    </div>


    <h3>Een positieve afgeleide</h3>

    <p>
      Als:
    </p>

    <p class="formula">
      f'(x)>0
    </p>

    <p>
      dan stijgt de functie op dat punt.
    </p>

    <p>
      De raaklijn heeft dan een positieve helling.
    </p>


    <h3>Een negatieve afgeleide</h3>

    <p>
      Als:
    </p>

    <p class="formula">
      f'(x)<0
    </p>

    <p>
      dan daalt de functie op dat punt.
    </p>

    <p>
      De raaklijn heeft dan een negatieve helling.
    </p>


    <h3>Een afgeleide gelijk aan nul</h3>

    <p>
      Als:
    </p>

    <p class="formula">
      f'(x)=0
    </p>

    <p>
      dan is de raaklijn horizontaal.
    </p>

    <p>
      Zo'n punt kan bijvoorbeeld een lokaal maximum of minimum zijn.
      In 3.8 zullen we leren hoe we zulke punten systematisch onderzoeken.
    </p>


    <h3>De vergelijking van een raaklijn</h3>

    <p>
      We kennen uit Fase 2 de vergelijking van een rechte.
      Als we een punt en de helling kennen, kunnen we de raaklijn bepalen.
    </p>

    <p>
      In het punt
      <span class="formula-inline">(a,f(a))</span>
      is de helling:
    </p>

    <p class="formula">
      f'(a)
    </p>

    <p>
      De vergelijking van de raaklijn is:
    </p>

    <p class="formula">
      y-f(a)=f'(a)(x-a)
    </p>

    <div class="callout">
      <p><strong>Vaste structuur:</strong></p>
      <p>
        punt → helling → vergelijking van de raaklijn.
      </p>
    </div>


    <h3>Voorbeeld: de raaklijn aan x²</h3>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We vonden:
    </p>

    <p class="formula">
      f'(x)=2x
    </p>

    <p>
      We zoeken de raaklijn bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Eerst berekenen we het punt:
    </p>

    <p class="formula">
      f(2)=4
    </p>

    <p>
      De helling is:
    </p>

    <p class="formula">
      f'(2)=4
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      y-4=4(x-2)
    </p>

    <p>
      Uitwerken geeft:
    </p>

    <p class="formula">
      y=4x-4
    </p>


    <h3>De afgeleide als nieuwe functie</h3>

    <p>
      Een belangrijk inzicht is dat de afgeleide niet slechts één getal is.
      We kunnen voor ieder punt van de oorspronkelijke functie de
      veranderingssnelheid bepalen.
    </p>

    <p>
      Daardoor ontstaat een nieuwe functie:
    </p>

    <p class="formula">
      f(x)\\rightarrow f'(x)
    </p>

    <p>
      De oorspronkelijke functie vertelt ons <strong>waar we zijn</strong>.
      De afgeleide vertelt ons <strong>hoe snel we daar veranderen</strong>.
    </p>


    <h3>Een voorbeeld uit de fysica</h3>

    <p>
      Stel dat de positie van een voorwerp wordt beschreven door:
    </p>

    <p class="formula">
      s(t)
    </p>

    <p>
      De afgeleide van de positie naar de tijd geeft de snelheid:
    </p>

    <p class="formula">
      v(t)=s'(t)
    </p>

    <p>
      De afgeleide van de snelheid geeft vervolgens de versnelling:
    </p>

    <p class="formula">
      a(t)=v'(t)
    </p>

    <div class="callout">
      <p><strong>In de fysica:</strong></p>
      <p>
        positie → snelheid → versnelling.
      </p>
    </div>


    <h3>Vaste werkwijze</h3>

    <p>
      Wanneer je het idee van de afgeleide moet toepassen, kun je deze
      structuur volgen:
    </p>

    <ol>
      <li>Bepaal welke grootheid verandert.</li>
      <li>Bepaal naar welke variabele je de verandering onderzoekt.</li>
      <li>Gebruik de gemiddelde veranderingssnelheid over een klein interval.</li>
      <li>Laat het interval naar nul naderen.</li>
      <li>Interpreteer de afgeleide als ogenblikkelijke verandering of helling.</li>
    </ol>

    <p class="formula">
      \\frac{f(x+h)-f(x)}{h}
      \\longrightarrow
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
      =
      f'(x)
    </p>


    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        <strong>Gemiddelde en ogenblikkelijke verandering verwarren.</strong>
        De gemiddelde verandering gebruikt een interval; de afgeleide
        beschrijft één punt.
      </li>
      <li>
        <strong>h meteen gelijk aan nul zetten.</strong>
        In de breuk zou dan een deling door nul ontstaan.
        We onderzoeken de limiet wanneer h naar nul gaat.
      </li>
      <li>
        <strong>De afgeleide verwarren met de functiewaarde.</strong>
        <span class="formula-inline">f(x)</span> en
        <span class="formula-inline">f'(x)</span> beschrijven verschillende dingen.
      </li>
      <li>
        <strong>Denken dat f'(x)=0 betekent dat de functie constant is.</strong>
        Een afgeleide van nul op één punt betekent alleen dat de raaklijn
        daar horizontaal is.
      </li>
    </ul>


    <h3>Van de definitie naar praktische regels</h3>

    <p>
      We hebben nu gezien waar de afgeleide vandaan komt:
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Deze definitie is fundamenteel, maar het zou onpraktisch zijn om
      voor iedere nieuwe functie opnieuw de volledige limietberekening
      uit te voeren.
    </p>

    <p>
      Daarom leiden we in de volgende milestones handige
      <strong>afgeleideregel</strong> af.
    </p>

    <div class="callout">
      <p><strong>Volgende stap:</strong></p>
      <p>
        In 3.5 leren we de afgeleiden van belangrijke basisfuncties
        rechtstreeks berekenen.
      </p>
    </div>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De afgeleide beschrijft hoe snel een functie precies op één
        moment verandert.
      </p>
      <p>
        Ze ontstaat door de gemiddelde veranderingssnelheid
        over een steeds kleiner interval te laten naderen tot één punt:
      </p>
      <p class="formula">
        f'(x)
        =
        \\lim_{h\\to0}
        \\frac{f(x+h)-f(x)}{h}
      </p>
      <p>
        Geometrisch is de afgeleide de helling van de raaklijn aan
        de grafiek.
      </p>
    </div>
  `
},

  {
  id: "3.5",
  title: "Afgeleiden van basisfuncties",
  goal: "Kunnen we veranderingssnelheden berekenen?",
  theory: /* html */`
    <h2>Afgeleiden van basisfuncties</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe kunnen we de afgeleide van een machtsfunctie snel bepalen?</li>
      <li>Wat is de afgeleide van een constante?</li>
      <li>Hoe werken afgeleiden bij sommen en verschillen?</li>
      <li>Hoe werkt een constante factor?</li>
      <li>Hoe gaan we om met negatieve en gebroken exponenten?</li>
      <li>Wat zijn de basisafgeleiden van exponentiële en logaritmische functies?</li>
      <li>Wat zijn de basisafgeleiden van sinus en cosinus?</li>
      <li>Hoe controleren en interpreteren we een gevonden afgeleide?</li>
    </ul>

    <p>
      In 3.4 hebben we gezien waar de afgeleide vandaan komt:
    </p>

    <p class="formula">
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu gaan we een stap verder. We willen niet telkens opnieuw
      de volledige limietberekening uitvoeren.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Voor veel belangrijke functies bestaan vaste regels waarmee we
        de afgeleide rechtstreeks kunnen bepalen.
      </p>
    </div>


    <h3>De machtsregel</h3>

    <p>
      Een van de belangrijkste regels is de <strong>machtsregel</strong>.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">
      f(x)=x^n
    </p>

    <p>
      geldt:
    </p>

    <p class="formula">
      f'(x)=n x^{n-1}
    </p>

    <p>
      De exponent komt dus vooraan te staan en wordt daarna met één
      verminderd.
    </p>

    <div class="callout">
      <p><strong>Machtsregel:</strong></p>
      <p class="formula">
        \\left(x^n\\right)'=n x^{n-1}
      </p>
    </div>


    <h3>Een eenvoudig voorbeeld</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=x^5
    </p>

    <p>
      De exponent 5 komt vooraan:
    </p>

    <p class="formula">
      f'(x)=5x^4
    </p>

    <p>
      De exponent wordt dus één kleiner:
    </p>

    <p class="formula">
      5\\rightarrow4
    </p>


    <h3>De functie x</h3>

    <p>
      De functie <span class="formula-inline">x</span> kunnen we schrijven als:
    </p>

    <p class="formula">
      x=x^1
    </p>

    <p>
      De machtsregel geeft:
    </p>

    <p class="formula">
      \\left(x^1\\right)'=1x^0=1
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      (x)'=1
    </p>

    <p>
      Dat past bij de grafiek van
      <span class="formula-inline">y=x</span>: de helling is overal 1.
    </p>


    <h3>De afgeleide van een constante</h3>

    <p>
      Een constante verandert niet wanneer
      <span class="formula-inline">x</span> verandert.
    </p>

    <p>
      Daarom is:
    </p>

    <p class="formula">
      (c)'=0
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      (7)'=0
    </p>

    <p class="formula">
      (-12)'=0
    </p>

    <p>
      Geometrisch klopt dit ook: een horizontale rechte heeft helling nul.
    </p>


    <h3>Een som afleiden</h3>

    <p>
      Bij een som mogen we de afgeleide van iedere term afzonderlijk bepalen.
    </p>

    <p class="formula">
      (f(x)+g(x))'=f'(x)+g'(x)
    </p>

    <p>
      Hetzelfde geldt voor een verschil:
    </p>

    <p class="formula">
      (f(x)-g(x))'=f'(x)-g'(x)
    </p>

    <p>
      Daardoor kunnen we veeltermen term voor term afleiden.
    </p>


    <h3>Een constante factor</h3>

    <p>
      Staat er een constante voor een functie, dan blijft die factor staan.
    </p>

    <p class="formula">
      (c f(x))'=c f'(x)
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=4x^3
    </p>

    <p>
      Dan:
    </p>

    <p class="formula">
      f'(x)=4\\cdot3x^2=12x^2
    </p>


    <h3>Een volledige veelterm</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=3x^4-5x^2+7x-2
    </p>

    <p>
      We leiden iedere term afzonderlijk af:
    </p>

    <p class="formula">
      (3x^4)'=12x^3
    </p>

    <p class="formula">
      (-5x^2)'=-10x
    </p>

    <p class="formula">
      (7x)'=7
    </p>

    <p class="formula">
      (-2)'=0
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      f'(x)=12x^3-10x+7
    </p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Leid iedere term afzonderlijk af en tel de resultaten daarna weer op.
      </p>
    </div>


    <h3>Negatieve exponenten</h3>

    <p>
      De machtsregel werkt ook voor negatieve exponenten.
    </p>

    <p class="formula">
      f(x)=x^{-2}
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      f'(x)=-2x^{-3}
    </p>

    <p>
      Omdat:
    </p>

    <p class="formula">
      x^{-3}=\\frac{1}{x^3}
    </p>

    <p>
      kunnen we dit ook schrijven als:
    </p>

    <p class="formula">
      f'(x)=-\\frac{2}{x^3}
    </p>


    <h3>Gebroken exponenten</h3>

    <p>
      Ook een wortelfunctie kunnen we als macht schrijven.
    </p>

    <p class="formula">
      \\sqrt{x}=x^{1/2}
    </p>

    <p>
      De machtsregel geeft:
    </p>

    <p class="formula">
      \\left(x^{1/2}\\right)'
      =
      \\frac{1}{2}x^{-1/2}
    </p>

    <p>
      Omdat:
    </p>

    <p class="formula">
      x^{-1/2}=\\frac{1}{\\sqrt{x}}
    </p>

    <p>
      volgt:
    </p>

    <p class="formula">
      \\left(\\sqrt{x}\\right)'
      =
      \\frac{1}{2\\sqrt{x}}
    </p>


    <h3>De exponentiële functie e^x</h3>

    <p>
      Er bestaat één bijzonder belangrijke exponentiële functie:
    </p>

    <p class="formula">
      f(x)=e^x
    </p>

    <p>
      De afgeleide van deze functie is opvallend eenvoudig:
    </p>

    <p class="formula">
      \\left(e^x\\right)'=e^x
    </p>

    <p>
      De functie verandert dus met een snelheid die gelijk is aan haar
      eigen waarde.
    </p>

    <div class="callout">
      <p><strong>Bijzonder geval:</strong></p>
      <p>
        De exponentiële functie <span class="formula-inline">e^x</span>
        is haar eigen afgeleide.
      </p>
    </div>


    <h3>Een algemene exponentiële functie</h3>

    <p>
      Voor een positieve basis
      <span class="formula-inline">a</span>, met
      <span class="formula-inline">a\\gt0</span> en
      <span class="formula-inline">a\\neq1</span>, geldt:
    </p>

    <p class="formula">
      \\left(a^x\\right)'=a^x\\ln(a)
    </p>

    <p>
      Voor <span class="formula-inline">a=e</span> geldt
      <span class="formula-inline">\\ln(e)=1</span>.
      Daardoor krijgen we opnieuw:
    </p>

    <p class="formula">
      \\left(e^x\\right)'=e^x
    </p>


    <h3>De natuurlijke logaritme</h3>

    <p>
      De natuurlijke logaritme is de inverse functie van
      <span class="formula-inline">e^x</span>.
    </p>

    <p class="formula">
      f(x)=\\ln(x)
    </p>

    <p>
      Voor positieve waarden van
      <span class="formula-inline">x</span> geldt:
    </p>

    <p class="formula">
      (\\ln x)'=\\frac{1}{x}
    </p>

    <p>
      De afgeleide is dus positief, maar wordt kleiner wanneer
      <span class="formula-inline">x</span> groter wordt.
    </p>


    <h3>De sinus</h3>

    <p>
      Voor de sinusfunctie geldt:
    </p>

    <p class="formula">
      (\\sin x)'=\\cos x
    </p>

    <p>
      De sinus verandert dus volgens de cosinus.
    </p>


    <h3>De cosinus</h3>

    <p>
      Voor de cosinusfunctie geldt:
    </p>

    <p class="formula">
      (\\cos x)'=-\\sin x
    </p>

    <p>
      Het minteken is belangrijk.
    </p>


    <h3>Een compacte verzameling basisregels</h3>

    <p>
      We kunnen de belangrijkste regels nu verzamelen:
    </p>

    <p class="formula">
      (c)'=0
    </p>

    <p class="formula">
      (x)'=1
    </p>

    <p class="formula">
      \\left(x^n\\right)'=n x^{n-1}
    </p>

    <p class="formula">
      (f+g)'=f'+g'
    </p>

    <p class="formula">
      (f-g)'=f'-g'
    </p>

    <p class="formula">
      (cf)'=cf'
    </p>

    <p class="formula">
      \\left(e^x\\right)'=e^x
    </p>

    <p class="formula">
      \\left(a^x\\right)'=a^x\\ln(a)
    </p>

    <p class="formula">
      (\\ln x)'=\\frac{1}{x}
    </p>

    <p class="formula">
      (\\sin x)'=\\cos x
    </p>

    <p class="formula">
      (\\cos x)'=-\\sin x
    </p>


    <h3>De betekenis blijft hetzelfde</h3>

    <p>
      De regels veranderen niets aan de betekenis van de afgeleide.
    </p>

    <p>
      De uitkomst vertelt nog steeds hoe snel de oorspronkelijke functie
      op ieder punt verandert.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p class="formula">
      f'(x)=2x
    </p>

    <p>
      Bij <span class="formula-inline">x=3</span> is:
    </p>

    <p class="formula">
      f'(3)=6
    </p>

    <p>
      De grafiek van <span class="formula-inline">x^2</span> heeft daar dus
      een raaklijn met helling 6.
    </p>


    <h3>De eenheid van een afgeleide</h3>

    <p>
      De afgeleide heeft vaak een betekenisvolle eenheid.
    </p>

    <p>
      Als de positie in kilometer wordt gemeten en de tijd in uren,
      dan heeft de afgeleide de eenheid:
    </p>

    <p class="formula">
      \\frac{\\mathrm{km}}{\\mathrm{u}}
    </p>

    <p>
      Als we een temperatuur in graden Celsius delen door tijd in uren,
      krijgen we bijvoorbeeld:
    </p>

    <p class="formula">
      \\frac{^\\circ\\mathrm{C}}{\\mathrm{u}}
    </p>

    <p>
      De eenheid helpt dus om de betekenis van een afgeleide te begrijpen.
    </p>


    <h3>Vaste werkwijze</h3>

    <p>
      Wanneer je een basisfunctie moet afleiden, kun je deze stappen volgen:
    </p>

    <ol>
      <li>Herken het type functie.</li>
      <li>Schrijf de functie indien nodig in een geschikte vorm.</li>
      <li>Kies de bijbehorende afgeleideregel.</li>
      <li>Pas de regel term voor term toe.</li>
      <li>Vereenvoudig de uitkomst.</li>
      <li>Controleer of de uitkomst logisch is.</li>
    </ol>

    <div class="callout">
      <p><strong>Voorbeeld:</strong></p>
      <p>
        Een macht → machtsregel.
        Een constante → afgeleide nul.
        Een som → term voor term.
        Een constante factor → factor blijft staan.
      </p>
    </div>


    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        <strong>De exponent vergeten te vermenigvuldigen.</strong>
        Uit <span class="formula-inline">x^5</span> volgt niet
        <span class="formula-inline">x^4</span>, maar
        <span class="formula-inline">5x^4</span>.
      </li>
      <li>
        <strong>De exponent niet met één verminderen.</strong>
        Bij de machtsregel wordt de nieuwe exponent
        <span class="formula-inline">n-1</span>.
      </li>
      <li>
        <strong>Een constante laten staan.</strong>
        De afgeleide van een constante is nul.
      </li>
      <li>
        <strong>Het minteken bij cosinus vergeten.</strong>
        <span class="formula-inline">(\\cos x)'=-\\sin x</span>.
      </li>
      <li>
        <strong>De domeinvoorwaarde vergeten.</strong>
        Bij
        <span class="formula-inline">\\ln x</span>
        moet <span class="formula-inline">x\\gt0</span> gelden.
      </li>
    </ul>


    <h3>Van basisfuncties naar gecombineerde functies</h3>

    <p>
      Met deze regels kunnen we veel functies rechtstreeks afleiden.
    </p>

    <p>
      Maar wat als functies met elkaar worden vermenigvuldigd,
      gedeeld of in elkaar worden geplaatst?
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=x^2\\sin x
    </p>

    <p class="formula">
      g(x)=\\frac{x^2+1}{x}
    </p>

    <p class="formula">
      h(x)=\\sin(x^2)
    </p>

    <p>
      Voor zulke functies hebben we nieuwe regels nodig.
    </p>

    <div class="callout">
      <p><strong>Volgende stap:</strong></p>
      <p>
        In 3.6 leren we de productregel, quotiëntregel en kettingregel.
      </p>
    </div>


    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De afgeleide van veel belangrijke basisfuncties kunnen we
        rechtstreeks berekenen met vaste regels.
      </p>
      <p>
        De belangrijkste basisregel is:
      </p>
      <p class="formula">
        \\left(x^n\\right)'=n x^{n-1}
      </p>
      <p>
        Samen met de regels voor constanten, sommen, exponentiële functies,
        logaritmen en goniometrische functies vormt dit de basis voor het
        afleiden van complexere functies.
      </p>
    </div>
  `
},

  {
    id: "3.6",
    title: "Product-, quotiënt- & kettingregel",
    goal: "Wat gebeurt er wanneer functies worden gecombineerd?",
    theory: ``
  },

  {
    id: "3.7",
    title: "Afgeleiden van belangrijke functies",
    goal: "Hoe laten we exponentiële, logaritmische en goniometrische functies veranderen?",
    theory: ``
  },

  {
    id: "3.8",
    title: "Toepassingen van afgeleiden",
    goal: "Wat kunnen we met veranderingssnelheden?",
    theory: ``
  },

  {
    id: "3.9",
    title: "De integraal als omgekeerde verandering",
    goal: "Kunnen we verandering weer optellen?",
    theory: ``
  },

  {
    id: "3.10",
    title: "De fundamentele stelling van de calculus",
    goal: "Waarom zijn afgeleiden en integralen verbonden?",
    theory: ``
  },

  {
    id: "3.11",
    title: "Integraalrekenen",
    goal: "Hoe berekenen we integralen?",
    theory: ``
  },

  {
    id: "3.12",
    title: "Toepassingen van integralen",
    goal: "Hoe tellen we oneindig veel kleine bijdragen op?",
    theory: ``
  },

  {
    id: "3.13",
    title: "Functies van meerdere variabelen",
    goal: "Wat verandert er als meerdere grootheden tegelijk veranderen?",
    theory: ``
  },

  {
    id: "3.14",
    title: "Multivariabele calculus & vectorvelden",
    goal: "Hoe beschrijven we verandering in een ruimte?",
    theory: ``
  }
];
