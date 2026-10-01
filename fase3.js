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

    \\ltp class="formula"\\gt
      \\Delta s = 160 - 0 = 160\\text{ km}
    </p>

    <p>
      Het symbool <strong>Δ</strong> (delta) betekent:
      <strong>verandering in</strong>.
    </p>

    <p>Algemeen schrijven we:</p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      \\Delta t = 2 - 0 = 2\\text{ uur}
    </p>

    <p>De gemiddelde snelheid is dan:</p>

    \\ltp class="formula"\\gt
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
      van 10&#8451 naar 25&#8451 stijgt in drie uur tijd.
    </p>

    <p>De temperatuurverandering is:</p>

    \\ltp class="formula"\\gt
      \\Delta T = 25 - 10 = 15{&#8451;}
    </p>

    <p>De tijdsverandering is:</p>

    \\ltp class="formula"\\gt
      \\Delta t = 3\\text{ uur}
    </p>

    <p>De gemiddelde verandering per uur is:</p>

    \\ltp class="formula"\\gt
      \\frac{\\Delta T}{\\Delta t}
      =
      \\frac{15}{3}
      =
      5{&#8451;/u}
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

    \\ltp class="formula"\\gt
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Dit betekent letterlijk:
    </p>

    \\ltp class="formula"\\gt
      \\frac{\\text{verandering in }y}
      {\\text{verandering in }x}
    </p>

    <p>
      Bij beweging kan dat bijvoorbeeld worden:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      We willen de gemiddelde veranderingssnelheid bepalen tussen
      <span class="formula-inline">x = 1</span> en
      <span class="formula-inline">x = 4</span>.
    </p>

    <p>Eerst berekenen we de functiewaarden:</p>

    \\ltp class="formula"\\gt
      f(1)=1
    </p>

    \\ltp class="formula"\\gt
      f(4)=16
    </p>

    <p>De verandering in de functiewaarde is:</p>

    \\ltp class="formula"\\gt
      \\Delta f=16-1=15
    </p>

    <p>De verandering in x is:</p>

    \\ltp class="formula"\\gt
      \\Delta x=4-1=3
    </p>

    <p>Dus:</p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      \\frac{f(x_2)-f(x_1)}
      {x_2-x_1}
    </p>

    <p>
      Dit is precies hetzelfde idee als:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      P=(x_1,f(x_1))
    </p>

    \\ltp class="formula"\\gt
      Q=(x_2,f(x_2))
    </p>

    <p>
      De verticale verandering tussen de punten is:
    </p>

    \\ltp class="formula"\\gt
      \\Delta y=f(x_2)-f(x_1)
    </p>

    <p>
      De horizontale verandering is:
    </p>

    \\ltp class="formula"\\gt
      \\Delta x=x_2-x_1
    </p>

    <p>
      Daarom is:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      \\Delta y\\gt0
    </p>

    <p>
      en is de gemiddelde veranderingssnelheid positief.
    </p>

    <p>Als de functiewaarde afneemt:</p>

    <p class="formula">
      \\Delta y\\lt0
    </p>

    <p>
      en is de gemiddelde veranderingssnelheid negatief.
    </p>

    <p>Als de functiewaarde niet verandert:</p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      [2,3]
    </p>

    \\ltp class="formula"\\gt
      [2,2{,}5]
    </p>

    \\ltp class="formula"\\gt
      [2,2{,}1]
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu kunnen we het interval steeds kleiner maken:
    </p>

    \\ltp class="formula"\\gt
      h=1
    </p>

    \\ltp class="formula"\\gt
      h=0{,}1
    </p>

    \\ltp class="formula"\\gt
      h=0{,}01
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      \\text{verandering}
      \\rightarrow
      \\frac{\\text{verandering}}{\\text{interval}}
      \\rightarrow
      \\text{gemiddelde veranderingssnelheid}
    </p>

    <p>
      Op een grafiek is dezelfde verhouding:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      \\frac{f(x_2)-f(x_1)}{x_2-x_1}
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

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      In 3.1 berekenden we bijvoorbeeld de gemiddelde veranderingssnelheid
      tussen <span class="formula-inline">x=2</span> en
      <span class="formula-inline">x=3</span>.
    </p>

    \\ltp class="formula"\\gt
      \\frac{f(3)-f(2)}{3-2}
      =
      \\frac{9-4}{1}
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

    \\ltp class="formula"\\gt
      x=3
    </p>

    \\ltp class="formula"\\gt
      x=2{,}5
    </p>

    \\ltp class="formula"\\gt
      x=2{,}1
    </p>

    \\ltp class="formula"\\gt
      x=2{,}01
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      10\\text{ km},\\;
      5\\text{ km},\\;
      1\\text{ km},\\;
      0{,}1\\text{ km},\\;
      0{,}01\\text{ km}
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

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      We onderzoeken wat er gebeurt wanneer
      <span class="formula-inline">x</span> steeds dichter bij 2 komt.
    </p>

    \\ltp class="formula"\\gt
      x=2{,}1
      \\;\\rightarrow\\;
      f(x)=2{,}1^2=4{,}41
    </p>

    \\ltp class="formula"\\gt
      x=2{,}01
      \\;\\rightarrow\\;
      f(x)=2{,}01^2=4{,}0401
    </p>

    \\ltp class="formula"\\gt
      x=2{,}001
      \\;\\rightarrow\\;
      f(x)=2{,}001^2=4{,}004001
    </p>

    <p>
      De functiewaarden komen steeds dichter bij 4.
    </p>

    <p>We schrijven:</p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}x^2=4
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

    \\ltp class="formula"\\gt
      \\lim_{x\\to a}f(x)=L
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


    <h3>Functiewaarde en limiet zijn niet hetzelfde</h3>

    <p>
      Een belangrijk inzicht is dat de limiet niet noodzakelijk gelijk is
      aan de werkelijke functiewaarde op het punt.
    </p>

    <p>
      Bekijk bijvoorbeeld:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\frac{x^2-4}{x-2}
    </p>

    <p>
      Bij <span class="formula-inline">x=2</span> wordt de noemer nul.
      De functie is daar dus niet gedefinieerd.
    </p>

    <p>
      Voor andere waarden van x kunnen we de teller ontbinden:
    </p>

    \\ltp class="formula"\\gt
      x^2-4=(x-2)(x+2)
    </p>

    <p>
      Daardoor geldt voor
      <span class="formula-inline">x\\neq2</span>:
    </p>

    \\ltp class="formula"\\gt
      \\frac{x^2-4}{x-2}=x+2
    </p>

    <p>
      Wanneer x naar 2 nadert, nadert de functiewaarde dus naar 4:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}\\frac{x^2-4}{x-2}=4
    </p>

    <p>
      De limiet bestaat dus, ook al is
      <span class="formula-inline">f(2)</span> niet gedefinieerd.
    </p>

    <div class="callout">
      <p><strong>
        Een limiet kijkt naar het gedrag rond een punt,
        niet noodzakelijk naar de functiewaarde precies op dat punt.
      </strong></p>
    </div>


    <h3>Een gat in de grafiek</h3>

    <p>
      Het vorige voorbeeld heeft een eenvoudig beeld.
    </p>

    <p>
      De grafiek volgt vlak bij
      <span class="formula-inline">x=2</span> de rechte:
    </p>

    \\ltp class="formula"\\gt
      y=x+2
    </p>

    <p>
      Alleen het punt bij
      <span class="formula-inline">x=2</span> ontbreekt.
    </p>

    <p>
      We noemen dit een <strong>gat</strong> in de grafiek.
    </p>

    <p>
      De limiet vertelt ons precies waar het ontbrekende punt zou liggen:
    </p>

    \\ltp class="formula"\\gt
      (2,4)
    </p>


    <h3>Van links en van rechts</h3>

    <p>
      Soms is het niet voldoende om alleen te weten dat
      <span class="formula-inline">x</span> naar een bepaalde waarde gaat.
      We moeten ook kijken <strong>van welke kant</strong> we komen.
    </p>

    <p>
      We kunnen een punt van links benaderen:
    </p>

    \\ltp class="formula"\\gt
      x\\to a^-
    </p>

    <p>
      Dit noemen we de <strong>linkerlimiet</strong>.
    </p>

    <p>
      Van rechts schrijven we:
    </p>

    \\ltp class="formula"\\gt
      x\\to a^+
    </p>

    <p>
      Dit noemen we de <strong>rechterlimiet</strong>.
    </p>

    <p>
      Een gewone tweezijdige limiet bestaat wanneer beide overeenkomen:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to a^-}f(x)
      =
      \\lim_{x\\to a^+}f(x)
    </p>

    <div class="callout">
      <p><strong>
        Links en rechts moeten naar dezelfde waarde naderen
        voordat de gewone limiet bestaat.
      </strong></p>
    </div>


    <h3>Wanneer bestaat de limiet niet?</h3>

    <p>
      Stel dat een functie bij
      <span class="formula-inline">x=0</span> van links naar 2 nadert,
      maar van rechts naar 5.
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^-}f(x)=2
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^+}f(x)=5
    </p>

    <p>
      Omdat beide waarden verschillend zijn, bestaat de tweezijdige limiet niet.
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0}f(x)
      \\text{ bestaat niet}
    </p>

    <p>
      Dit is belangrijk bij het onderzoeken van grafieken met sprongen
      of andere onderbrekingen.
    </p>


    <h3>Een eenvoudige limiet berekenen</h3>

    <p>
      Bij veel eenvoudige functies kunnen we de waarde rechtstreeks invullen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to3}(2x+1)
    </p>

    <p>
      We vullen <span class="formula-inline">x=3</span> in:
    </p>

    \\ltp class="formula"\\gt
      2(3)+1=7
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to3}(2x+1)=7
    </p>


    <h3>Limieten van sommen en producten</h3>

    <p>
      Voor veel gewone functies mogen we limieten term voor term behandelen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}(x^2+3x)
    </p>

    <p>
      We kunnen de limiet van beide termen afzonderlijk bepalen:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}x^2=4
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}3x=6
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}(x^2+3x)=10
    </p>


    <h3>De vorm 0/0</h3>

    <p>
      Soms geeft rechtstreeks invullen een onbruikbare vorm.
    </p>

    <p>
      Neem opnieuw:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}\\frac{x^2-4}{x-2}
    </p>

    <p>
      Rechtstreeks invullen geeft:
    </p>

    \\ltp class="formula"\\gt
      \\frac{0}{0}
    </p>

    <p>
      Dit betekent <strong>niet</strong> dat de limiet gelijk is aan nul.
      Het betekent dat we de uitdrukking eerst verder moeten onderzoeken.
    </p>

    <p>
      We factoriseren:
    </p>

    \\ltp class="formula"\\gt
      x^2-4=(x-2)(x+2)
    </p>

    <p>
      Voor <span class="formula-inline">x\\neq2</span> krijgen we:
    </p>

    \\ltp class="formula"\\gt
      \\frac{(x-2)(x+2)}{x-2}=x+2
    </p>

    <p>
      Daardoor:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}\\frac{x^2-4}{x-2}
      =
      \\lim_{x\\to2}(x+2)
      =
      4
    </p>

    <div class="callout">
      <p><strong>
        0/0 is geen antwoord.
        Het is een signaal dat verdere bewerking nodig kan zijn.
      </strong></p>
    </div>


    <h3>Limieten die onbeperkt groeien</h3>

    <p>
      Niet iedere limiet nadert een eindig getal.
    </p>

    <p>
      Neem:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\frac{1}{x}
    </p>

    <p>
      Wanneer x vanuit positieve waarden naar nul gaat,
      worden de functiewaarden steeds groter:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^+}\\frac{1}{x}=\\infty
    </p>

    <p>
      Vanuit negatieve waarden worden de functiewaarden steeds negatiever:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^-}\\frac{1}{x}=-\\infty
    </p>

    <p>
      In dit geval bestaat er geen eindige tweezijdige limiet.
    </p>

    <div class="callout">
      <p><strong>
        ∞ is hier geen gewoon getal.
        Het beschrijft dat de functiewaarden onbeperkt groot worden.
      </strong></p>
    </div>


    <h3>De grafische betekenis van een limiet</h3>

    <p>
      Op een grafiek kunnen we een limiet zien als de
      <strong>hoogte waar de grafiek naartoe beweegt</strong>
      wanneer we een bepaald x-waarde naderen.
    </p>

    <p>
      Daarbij hoeft de grafiek het betreffende punt niet daadwerkelijk
      te bevatten.
    </p>

    <p>
      Een gat kan dus een limiet hebben.
      Een sprong kan een tweezijdige limiet missen.
      Een verticale asymptoot kan leiden tot onbeperkte groei.
    </p>

    <div class="callout">
      <p><strong>
        De limiet gaat over gedrag in de buurt van een punt.
      </strong></p>
    </div>


    <h3>De limiet van een gemiddelde verandering</h3>

    <p>
      In 3.1 zagen we de gemiddelde veranderingssnelheid:
    </p>

    \\ltp class="formula"\\gt
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Voor een functie kunnen we die schrijven als:
    </p>

    \\ltp class="formula"\\gt
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Als we het interval steeds kleiner maken, betekent dit dat
      <span class="formula-inline">h</span> naar nul gaat.
    </p>

    \\ltp class="formula"\\gt
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Deze limiet beschrijft de veranderingssnelheid
      <strong>op het punt zelf</strong>.
    </p>

    <p>
      Daarmee komen we rechtstreeks bij het begrip
      <strong>afgeleide</strong>.
    </p>


    <h3>Een voorbeeld met f(x)=x²</h3>

    <p>
      Neem:
    </p>

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      De gemiddelde veranderingssnelheid tussen
      <span class="formula-inline">x</span> en
      <span class="formula-inline">x+h</span> is:
    </p>

    \\ltp class="formula"\\gt
      \\frac{(x+h)^2-x^2}{h}
    </p>

    <p>
      We werken het kwadraat uit:
    </p>

    \\ltp class="formula"\\gt
      (x+h)^2=x^2+2xh+h^2
    </p>

    <p>
      Daardoor wordt de verhouding:
    </p>

    \\ltp class="formula"\\gt
      \\frac{x^2+2xh+h^2-x^2}{h}
    </p>

    <p>
      Na vereenvoudigen:
    </p>

    \\ltp class="formula"\\gt
      2x+h
    </p>

    <p>
      Wanneer <span class="formula-inline">h</span> naar nul gaat,
      nadert deze waarde naar:
    </p>

    \\ltp class="formula"\\gt
      2x
    </p>

    <p>
      We hebben hiermee het mechanisme achter de afgeleide al zichtbaar gemaakt.
      De formele definitie en de praktische regels voor afgeleiden komen
      in de volgende milestones.
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

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      We zagen in 3.2 dat:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}x^2=4
    </p>

    <p>
      Tegelijk is:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f(a)\\text{ bestaat}
    </p>

    <p><strong>2. De limiet bestaat:</strong></p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to a}f(x)\\text{ bestaat}
    </p>

    <p><strong>3. De limiet is gelijk aan de functiewaarde:</strong></p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to a}f(x)=f(a)
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

    \\ltp class="formula"\\gt
      f(x)=x^2+3x-1
    </p>

    <p>
      We onderzoeken de continuïteit bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Eerst berekenen we de functiewaarde:
    </p>

    \\ltp class="formula"\\gt
      f(2)=2^2+3(2)-1=4+6-1=9
    </p>

    <p>
      Vervolgens bekijken we de limiet:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}(x^2+3x-1)=9
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}f(x)=f(2)=9
    </p>

    <p>
      De functie is daarom continu bij
      <span class="formula-inline">x=2</span>.
    </p>


    <h3>Een gat in de grafiek</h3>

    <p>
      In 3.2 bekeken we:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\frac{x^2-4}{x-2}
    </p>

    <p>
      Deze functie is niet gedefinieerd bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Voor andere waarden van x kunnen we schrijven:
    </p>

    \\ltp class="formula"\\gt
      \\frac{x^2-4}{x-2}=x+2
    </p>

    <p>
      en daarom:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}f(x)=4
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

    \\ltp class="formula"\\gt
      f(2)=4
    </p>

    <p>
      Dan wordt de functie op dat punt gedefinieerd en geldt:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to2}f(x)=f(2)=4
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

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^-}f(x)=1
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^+}f(x)=3
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

    \\ltp class="formula"\\gt
      f(x)=\\frac{1}{x}
    </p>

    <p>
      Deze functie is niet gedefinieerd bij
      <span class="formula-inline">x=0</span>.
    </p>

    <p>
      Wanneer x vanuit positieve waarden naar nul nadert,
      worden de functiewaarden onbeperkt groot:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^+}\\frac{1}{x}=\\infty
    </p>

    <p>
      Vanuit negatieve waarden worden ze onbeperkt negatief:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{x\\to0^-}\\frac{1}{x}=-\\infty
    </p>

    <p>
      De rechte
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f(x)=x^3-2x+5
    </p>

    <p>
      overal continu.
    </p>

    <p>
      Ook machtsfuncties zoals:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\sqrt{x}
    </p>

    <p>
      zijn continu waar ze gedefinieerd zijn.
    </p>

    <p>
      Bij rationale functies zoals:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\frac{x+1}{x-3}
    </p>

    <p>
      moeten we opletten voor waarden waarvoor de noemer nul wordt.
    </p>

    \\ltp class="formula"\\gt
      x\\neq3
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

    \\ltp class="formula"\\gt
      f(x)+g(x)
    </p>

    \\ltp class="formula"\\gt
      f(x)-g(x)
    </p>

    <p>
      Ook het product is continu:
    </p>

    \\ltp class="formula"\\gt
      f(x)g(x)
    </p>

    <p>
      Voor een quotiënt geldt dit wanneer de noemer niet nul is.
    </p>

    \\ltp class="formula"\\gt
      \\frac{f(x)}{g(x)}
      \\text{ met }g(x)\\neq0
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

    \\ltp class="formula"\\gt
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
      f(a)\\lt0
    </p>

    <p>en:</p>

    \\ltp class="formula"\\gt
      f(b)\\gt0
    </p>

    <p>
      Dan moet de grafiek ergens tussen a en b de x-as kruisen.
    </p>

    <p>
      Er moet dus een waarde c tussen a en b bestaan waarvoor:
    </p>

    \\ltp class="formula"\\gt
      f(c)=0
    </p>

    <p>
      Dit is de kern van de <strong>tussenwaardestelling</strong>.
    </p>


    <h3>De tussenwaardestelling intuïtief</h3>

    <p>
      Denk aan een continue temperatuur die van
      <span class="formula-inline">-5 &#8451;</span> naar
      <span class="formula-inline">8 &#8451;</span> stijgt.
    </p>

    <p>
      Als de temperatuur continu verandert, moet er een moment zijn
      waarop ze precies:
    </p>

    \\ltp class="formula"\\gt
      0{&#8451;}
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


    <h3>Continuïteit en differentieerbaarheid</h3>

    <p>
      Continuïteit en differentieerbaarheid zijn nauw met elkaar verbonden,
      maar betekenen niet hetzelfde.
    </p>

    <p>
      Een functie kan continu zijn zonder dat er op een bepaald punt een
      afgeleide bestaat. Denk aan:
    </p>

    \\ltp class="formula"\\gt
      f(x)=|x|
    </p>

    <p>
      De grafiek van deze functie heeft bij <span class="formula-inline">x=0</span>
      geen onderbreking. De functie is daar dus continu.
      Maar de grafiek heeft een scherpe hoek: van links en van rechts is de
      helling verschillend. Daarom bestaat er bij <span class="formula-inline">x=0</span>
      geen afgeleide.
    </p>

    <p>
      Omgekeerd geldt wel een belangrijke regel:
      <strong>als een functie op een punt differentieerbaar is, dan is ze daar
      ook continu.</strong>
    </p>

    <div class="callout">
      <p><strong>Continuïteit is dus noodzakelijk voor differentieerbaarheid,
      maar niet voldoende.</strong></p>
      <p>
        Een afgeleide vraagt meer dan alleen een ononderbroken grafiek:
        er moet ook een eenduidige lokale helling bestaan.
      </p>
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

    \\ltp class="formula"\\gt
      \\text{functiewaarde}
      \\rightarrow
      \\text{limiet}
      \\rightarrow
      \\text{continuïteit}
    </p>

    <p>
      In 3.1 zagen we vervolgens hoe gemiddelde verandering ontstaat uit:
    </p>

    \\ltp class="formula"\\gt
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      In 3.2 maakten we het interval steeds kleiner:
    </p>

    \\ltp class="formula"\\gt
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
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

      \\ltp class="formula"\\gt
        \\lim_{x\\to a}f(x)=f(a)
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      a+1
    </p>

    \\ltp class="formula"\\gt
      a+0{,}1
    </p>

    \\ltp class="formula"\\gt
      a+0{,}01
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      x+h
    </p>

    <p>
      De gemiddelde veranderingssnelheid tussen
      <span class="formula-inline">x</span> en
      <span class="formula-inline">x+h</span> is:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      h=1
    </p>

    \\ltp class="formula"\\gt
      h=0{,}1
    </p>

    \\ltp class="formula"\\gt
      h=0{,}01
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <div class="callout">
      <p><strong>De limiet is het gereedschap; de afgeleide is de nieuwe grootheid.</strong></p>
      <p>
        De limiet beschrijft wat er gebeurt wanneer het interval steeds
        kleiner wordt. Met dat limietidee definiëren we de
        <strong>ogenblikkelijke veranderingssnelheid</strong> van de functie.
      </p>
      <p>
        De formule hierboven is dus niet zomaar een rekenregel:
        ze geeft de precieze betekenis van de afgeleide.
      </p>
    </div>

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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      We gebruiken rechtstreeks de definitie van de afgeleide:
    </p>

    \\ltp class="formula"\\gt
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{(x+h)^2-x^2}{h}
    </p>

    <p>
      Eerst werken we het kwadraat uit:
    </p>

    \\ltp class="formula"\\gt
      (x+h)^2=x^2+2xh+h^2
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{x^2+2xh+h^2-x^2}{h}
    </p>

    <p>
      De termen <span class="formula-inline">x^2</span> vallen weg:
    </p>

    \\ltp class="formula"\\gt
      f'(x)
      =
      \\lim_{h\\to0}
      \\frac{2xh+h^2}{h}
    </p>

    <p>
      We kunnen <span class="formula-inline">h</span> wegdelen:
    </p>

    \\ltp class="formula"\\gt
      f'(x)
      =
      \\lim_{h\\to0}(2x+h)
    </p>

    <p>
      Wanneer <span class="formula-inline">h</span> naar nul gaat, krijgen we:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f'(x)\\gt0
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
      f'(x)\\lt0
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f'(a)
    </p>

    <p>
      De vergelijking van de raaklijn is:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      f(x)=x^2
    </p>

    <p>
      We vonden:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=2x
    </p>

    <p>
      We zoeken de raaklijn bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Eerst berekenen we het punt:
    </p>

    \\ltp class="formula"\\gt
      f(2)=4
    </p>

    <p>
      De helling is:
    </p>

    \\ltp class="formula"\\gt
      f'(2)=4
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      y-4=4(x-2)
    </p>

    <p>
      Uitwerken geeft:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
      s(t)
    </p>

    <p>
      De afgeleide van de positie naar de tijd geeft de snelheid:
    </p>

    \\ltp class="formula"\\gt
      v(t)=s'(t)
    </p>

    <p>
      De afgeleide van de snelheid geeft vervolgens de versnelling:
    </p>

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
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

    \\ltp class="formula"\\gt
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
      \\ltp class="formula"\\gt
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
      <li>Hoe controleren en interpreteren we een gevonden afgeleide?</li>
      <li>Welke basisfuncties kunnen we rechtstreeks differentiëren?</li>
    </ul>

    <p>
      In 3.4 hebben we gezien waar de afgeleide vandaan komt:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=
      \\\\lim_{h\\\\to0}
      \\\\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu gaan we een stap verder. We willen niet telkens opnieuw de volledige
      limietberekening uitvoeren. Voor veel basisfuncties bestaan vaste regels.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een afgeleideregel is een verkorte manier om de veranderingssnelheid
        van een functie te bepalen. De betekenis van de afgeleide blijft
        dezelfde: de helling van de grafiek op een punt.
      </p>
    </div>

    <h3>De machtsregel</h3>

    <p>
      Een van de belangrijkste regels is de <strong>machtsregel</strong>.
      Voor:
    </p>

    \\ltp class="formula"\\gtf(x)=x^n</p>
    <p>geldt:</p>
    \\ltp class="formula"\\gtf'(x)=n x^{n-1}</p>

    <p>
      De exponent komt vooraan te staan en wordt daarna met één verminderd.
    </p>

    <div class="callout">
      <p><strong>Machtsregel:</strong></p>
      \\ltp class="formula"\\gt\\\\left(x^n\\\\right)'=n x^{n-1}</p>
    </div>

    <h3>Een eenvoudig voorbeeld</h3>

    <p>Neem:</p>
    \\ltp class="formula"\\gtf(x)=x^5</p>
    <p>Dan:</p>
    \\ltp class="formula"\\gtf'(x)=5x^4</p>
    <p>De exponent 5 komt vooraan en wordt 4:</p>
    \\ltp class="formula"\\gt5\\\\rightarrow4</p>

    <h3>De functie x</h3>

    <p>
      De functie <span class="formula-inline">x</span> kunnen we schrijven als:
    </p>
    \\ltp class="formula"\\gtx=x^1</p>
    <p>De machtsregel geeft:</p>
    \\ltp class="formula"\\gt\\\\left(x^1\\\\right)'=1x^0=1</p>
    <p>Dus:</p>
    \\ltp class="formula"\\gt(x)'=1</p>

    <h3>De afgeleide van een constante</h3>

    <p>
      Een constante verandert niet wanneer <span class="formula-inline">x</span>
      verandert. Daarom is:
    </p>
    \\ltp class="formula"\\gt(c)'=0</p>
    <p>Bijvoorbeeld:</p>
    \\ltp class="formula"\\gt(7)'=0</p>
    \\ltp class="formula"\\gt(-12)'=0</p>
    <p>
      Geometrisch klopt dit ook: een horizontale rechte heeft helling nul.
    </p>

    <h3>Sommen, verschillen en constante factoren</h3>

    <p>
      Bij een som of verschil mogen we de termen afzonderlijk afleiden:
    </p>
    \\ltp class="formula"\\gt(f(x)+g(x))'=f'(x)+g'(x)</p>
    \\ltp class="formula"\\gt(f(x)-g(x))'=f'(x)-g'(x)</p>

    <p>
      Staat er een constante factor voor een functie, dan blijft die factor
      staan:
    </p>
    \\ltp class="formula"\\gt(c f(x))'=c f'(x)</p>

    <h3>Een volledige veelterm</h3>

    <p>Neem:</p>
    \\ltp class="formula"\\gtf(x)=3x^4-5x^2+7x-2</p>
    <p>Leid iedere term afzonderlijk af:</p>
    \\ltp class="formula"\\gt(3x^4)'=12x^3</p>
    \\ltp class="formula"\\gt(-5x^2)'=-10x</p>
    \\ltp class="formula"\\gt(7x)'=7</p>
    \\ltp class="formula"\\gt(-2)'=0</p>
    <p>Dus:</p>
    \\ltp class="formula"\\gtf'(x)=12x^3-10x+7</p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Leid iedere term afzonderlijk af en tel de resultaten daarna weer op.
      </p>
    </div>

    <h3>Negatieve exponenten</h3>

    <p>De machtsregel werkt ook voor negatieve exponenten.</p>
    \\ltp class="formula"\\gtf(x)=x^{-2}</p>
    \\ltp class="formula"\\gtf'(x)=-2x^{-3}</p>
    <p>Omdat:</p>
    \\ltp class="formula"\\gtx^{-3}=\\\\frac{1}{x^3}</p>
    <p>kunnen we dit ook schrijven als:</p>
    \\ltp class="formula"\\gtf'(x)=-\\\\frac{2}{x^3}</p>

    <h3>Gebroken exponenten en wortels</h3>

    <p>
      Ook een wortelfunctie kunnen we als macht schrijven:
    </p>
    \\ltp class="formula"\\gt\\\\sqrt{x}=x^{1/2}</p>
    <p>De machtsregel geeft:</p>
    \\ltp class="formula"\\gt\\\\left(x^{1/2}\\\\right)'=\\\\frac{1}{2}x^{-1/2}</p>
    <p>Omdat:</p>
    \\ltp class="formula"\\gtx^{-1/2}=\\\\frac{1}{\\\\sqrt{x}}</p>
    <p>volgt:</p>
    \\ltp class="formula"\\gt\\\\left(\\\\sqrt{x}\\\\right)'=\\\\frac{1}{2\\\\sqrt{x}}</p>

    <h3>Een compacte verzameling basisregels</h3>

    <p>De belangrijkste regels uit deze les zijn:</p>
    \\ltp class="formula"\\gt(c)'=0</p>
    \\ltp class="formula"\\gt(x)'=1</p>
    \\ltp class="formula"\\gt\\\\left(x^n\\\\right)'=n x^{n-1}</p>
    \\ltp class="formula"\\gt(f+g)'=f'+g'</p>
    \\ltp class="formula"\\gt(f-g)'=f'-g'</p>
    \\ltp class="formula"\\gt(cf)'=cf'</p>

    <p>
      Hiermee kunnen we al veel algebraïsche functies rechtstreeks afleiden.
      Voor exponentiële, logaritmische en goniometrische functies komen in
      3.7 nieuwe basisregels.
    </p>

    <h3>De betekenis blijft hetzelfde</h3>

    <p>
      De regels veranderen niets aan de betekenis van de afgeleide.
      De uitkomst vertelt nog steeds hoe snel de oorspronkelijke functie
      op ieder punt verandert.
    </p>
    <p>Bijvoorbeeld:</p>
    \\ltp class="formula"\\gtf(x)=x^2</p>
    \\ltp class="formula"\\gtf'(x)=2x</p>
    <p>
      Bij <span class="formula-inline">x=3</span> is:
    </p>
    \\ltp class="formula"\\gtf'(3)=6</p>
    <p>
      De grafiek van <span class="formula-inline">x^2</span> heeft daar dus
      een raaklijn met helling 6.
    </p>

    <h3>De eenheid van een afgeleide</h3>

    <p>
      De afgeleide heeft vaak een betekenisvolle eenheid.
      Als de positie in kilometer wordt gemeten en de tijd in uren,
      dan heeft de afgeleide de eenheid:
    </p>
    \\ltp class="formula"\\gt\\\\frac{\\\\mathrm{km}}{\\\\mathrm{u}}</p>
    <p>
      De eenheid helpt dus om de betekenis van een afgeleide te begrijpen.
    </p>

    <h3>Vaste werkwijze</h3>

    <ol>
      <li>Herken het type functie.</li>
      <li>Schrijf de functie indien nodig in een geschikte vorm.</li>
      <li>Kies de bijbehorende afgeleideregel.</li>
      <li>Pas de regel term voor term toe.</li>
      <li>Vereenvoudig de uitkomst.</li>
      <li>Controleer of de uitkomst logisch is.</li>
    </ol>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        <strong>De exponent vergeten te vermenigvuldigen.</strong>
        Uit <span class="formula-inline">x^5</span> volgt
        <span class="formula-inline">5x^4</span>, niet
        <span class="formula-inline">x^4</span>.
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
        <strong>Een wortel niet herkennen als macht.</strong>
        Bijvoorbeeld <span class="formula-inline">\\\\sqrt{x}=x^{1/2}</span>.
      </li>
    </ul>

    <h3>Van basisfuncties naar gecombineerde functies</h3>

    <p>
      We kunnen nu veel algebraïsche basisfuncties rechtstreeks afleiden.
      Maar wat als functies met elkaar worden vermenigvuldigd, gedeeld of
      in elkaar worden geplaatst?
    </p>
    \\ltp class="formula"\\gtf(x)=x^2\\\\sin x</p>
    \\ltp class="formula"\\gtg(x)=\\\\frac{x^2+1}{x}</p>
    \\ltp class="formula"\\gth(x)=\\\\sin(x^2)</p>
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
        De basisafgeleiden geven ons snelle regels voor machten, constanten,
        sommen, verschillen en constante factoren. Daarmee hebben we de
        eerste bouwstenen van het differentiëren in handen.
      </p>
    </div>
  `
},

  {
  id: "3.6",
  title: "Product-, quotiënt- & kettingregel",
  goal: "Wat gebeurt er wanneer functies worden gecombineerd?",
  theory: /* html */`
    <h2>Product-, quotiënt- & kettingregel</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom hebben producten en quotiënten van functies hun eigen afgeleideregel?</li>
      <li>Hoe leiden we de productregel af en gebruiken we die?</li>
      <li>Hoe werken we met een quotiënt van twee functies?</li>
      <li>Wat gebeurt er wanneer een functie in een andere functie zit?</li>
      <li>Hoe herkennen we een samengestelde functie?</li>
      <li>Hoe gebruiken we de kettingregel stap voor stap?</li>
      <li>Hoe bepalen we welke afgeleideregel we nodig hebben?</li>
    </ul>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        In de vorige les leerden we de afgeleiden van afzonderlijke basisfuncties.
        Maar echte functies zijn vaak opgebouwd uit meerdere functies.
      </p>
      <p>
        De <strong>productregel</strong>, <strong>quotiëntregel</strong> en
        <strong>kettingregel</strong> vertellen ons hoe we de verandering van
        zulke samengestelde uitdrukkingen kunnen bepalen.
      </p>
    </div>

    <h3>Van eenvoudige naar gecombineerde functies</h3>

    <p>
      In les 3.5 konden we bijvoorbeeld afleiden:
    </p>

    \\ltp class="formula"\\gtf(x)=x^2 \\rightarrow f'(x)=2x</p>

    <p>
      Maar functies zijn niet altijd zo eenvoudig. Denk bijvoorbeeld aan:
    </p>

    \\ltp class="formula"\\gtf(x)=x^2(3x+1)</p>

    <p>
      Hier worden twee functies met elkaar vermenigvuldigd:
    </p>

    \\ltp class="formula"\\gtu(x)=x^2</p>

    \\ltp class="formula"\\gtv(x)=3x+1</p>

    <p>
      We hebben dus een regel nodig die vertelt hoe de afgeleide van een
      <strong>product van functies</strong> werkt.
    </p>

    <h3>De productregel</h3>

    <p>
      Stel dat een functie bestaat uit het product van twee functies:
    </p>

    \\ltp class="formula"\\gtf(x)=u(x)v(x)</p>

    <p>
      Dan is de afgeleide:
    </p>

    \\ltp class="formula"\\gtf'(x)=u'(x)v(x)+u(x)v'(x)</p>

    <p>
      De belangrijke gedachte is dat <strong>beide factoren veranderen</strong>.
      Daarom krijgen we twee termen:
    </p>

    \\ltp class="formula"\\gtu'(x)v(x)</p>

    \\ltp class="formula"\\gtu(x)v'(x)</p>

    <p>
      We differentiëren dus eerst de eerste factor en daarna de tweede factor.
      De andere factor blijft telkens staan.
    </p>

    <h3>De productregel gebruiken</h3>

    <p>
      Neem:
    </p>

    \\ltp class="formula"\\gtf(x)=x^2(3x+1)</p>

    <p>
      Kies de twee factoren:
    </p>

    \\ltp class="formula"\\gtu(x)=x^2</p>

    \\ltp class="formula"\\gtv(x)=3x+1</p>

    <p>
      Hun afgeleiden zijn:
    </p>

    \\ltp class="formula"\\gtu'(x)=2x</p>

    \\ltp class="formula"\\gtv'(x)=3</p>

    <p>
      Pas nu de productregel toe:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=u'(x)v(x)+u(x)v'(x)
    </p>

    \\ltp class="formula"\\gt
      f'(x)=2x(3x+1)+x^2(3)
    </p>

    <p>
      Vereenvoudigen geeft:
    </p>

    \\ltp class="formula"\\gtf'(x)=6x^2+5x</p>

    <h3>Waarom niet gewoon beide factoren apart afleiden?</h3>

    <p>
      Een veelgemaakte fout is:
    </p>

    \\ltp class="formula"\\gt
      (u(x)v(x))'=u'(x)v'(x)
    </p>

    <p>
      Dat is <strong>niet</strong> de productregel.
    </p>

    <p>
      De productregel bevat een som van twee producten:
    </p>

    \\ltp class="formula"\\gt
      (uv)'=u'v+uv'
    </p>

    <p>
      Dat komt doordat zowel de eerste als de tweede factor verandering kan
      veroorzaken.
    </p>

    <h3>De quotiëntregel</h3>

    <p>
      Een quotiënt is een verhouding van twee functies:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\frac{u(x)}{v(x)}
    </p>

    <p>
      Als de noemer niet nul is, geldt:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=\\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}
    </p>

    <p>
      De structuur lijkt op die van de productregel, maar nu ontstaat een
      <strong>verschil</strong> en wordt de noemer gekwadrateerd.
    </p>

    <p>
      De voorwaarde blijft belangrijk:
    </p>

    \\ltp class="formula"\\gtv(x)\\neq0</p>

    <h3>De quotiëntregel gebruiken</h3>

    <p>
      Neem:
    </p>

    \\ltp class="formula"\\gt
      f(x)=\\frac{x^2}{x+1}
    </p>

    <p>
      Kies:
    </p>

    \\ltp class="formula"\\gtu(x)=x^2</p>

    \\ltp class="formula"\\gtv(x)=x+1</p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gtu'(x)=2x</p>

    \\ltp class="formula"\\gtv'(x)=1</p>

    <p>
      De quotiëntregel geeft:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=\\frac{2x(x+1)-x^2(1)}{(x+1)^2}
    </p>

    <p>
      Vereenvoudigen:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=\\frac{x^2+2x}{(x+1)^2}
    </p>

    <p>
      De oorspronkelijke functie is alleen gedefinieerd wanneer:
    </p>

    \\ltp class="formula"\\gtx\\neq-1</p>

    <h3>Productregel of quotiëntregel?</h3>

    <p>
      Kijk eerst naar de structuur van de functie.
    </p>

    <ul>
      <li>Zie je een product van twee functies? Gebruik de productregel.</li>
      <li>Zie je een breuk met functies in teller en noemer? Gebruik de quotiëntregel.</li>
      <li>Zie je een functie binnen een andere functie? Gebruik de kettingregel.</li>
    </ul>

    <p>
      Het herkennen van de structuur komt dus vóór het uitvoeren van de
      berekening.
    </p>

    <h3>Een functie in een functie</h3>

    <p>
      Beschouw nu:
    </p>

    \\ltp class="formula"\\gtf(x)=(3x+1)^4</p>

    <p>
      Dit is geen gewoon vierde macht van <code>x</code>. Binnen de macht staat
      namelijk een andere functie:
    </p>

    \\ltp class="formula"\\gtg(x)=3x+1</p>

    <p>
      Daarom kunnen we de functie bekijken als:
    </p>

    \\ltp class="formula"\\gtf(x)=g(x)^4</p>

    <p>
      Dit noemen we een <strong>samengestelde functie</strong>: de ene functie
      wordt toegepast op het resultaat van een andere functie.
    </p>

    <h3>De kettingregel</h3>

    <p>
      Stel dat:
    </p>

    \\ltp class="formula"\\gtf(x)=F(g(x))</p>

    <p>
      Dan geldt de kettingregel:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=F'(g(x))g'(x)
    </p>

    <p>
      In woorden:
      <strong>differentieer de buitenste functie en vermenigvuldig met de
      afgeleide van de binnenste functie.</strong>
    </p>

    <p>
      De kettingregel beschrijft dus een keten van veranderingen:
      eerst verandert de binnenste functie, daarna reageert de buitenste
      functie daarop.
    </p>

    <h3>De kettingregel stap voor stap</h3>

    <p>
      Neem:
    </p>

    \\ltp class="formula"\\gtf(x)=(3x+1)^4</p>

    <p>
      De <strong>binnenste functie</strong> is:
    </p>

    \\ltp class="formula"\\gtg(x)=3x+1</p>

    <p>
      De <strong>buitenste functie</strong> is:
    </p>

    \\ltp class="formula"\\gtF(u)=u^4</p>

    <p>
      Differentieer beide:
    </p>

    \\ltp class="formula"\\gtF'(u)=4u^3</p>

    \\ltp class="formula"\\gtg'(x)=3</p>

    <p>
      Pas nu de kettingregel toe:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=4(3x+1)^3(3)
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=12(3x+1)^3
    </p>

    <h3>Waarom moet de binnenste afgeleide erbij?</h3>

    <p>
      Stel dat de binnenste functie sneller verandert. Dan verandert ook het
      resultaat van de buitenste functie sneller.
    </p>

    <p>
      Bij:
    </p>

    \\ltp class="formula"\\gtf(x)=F(g(x))</p>

    <p>
      zijn er daarom twee veranderingssnelheden:
    </p>

    \\ltp class="formula"\\gtF'(g(x))</p>

    \\ltp class="formula"\\gtg'(x)</p>

    <p>
      De totale veranderingssnelheid is hun product:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=F'(g(x))g'(x)
    </p>

    <h3>Een tweede voorbeeld</h3>

    <p>
      Beschouw:
    </p>

    \\ltp class="formula"\\gtf(x)=\\sqrt{2x+1}</p>

    <p>
      Schrijf de buitenste en binnenste functie:
    </p>

    \\ltp class="formula"\\gtF(u)=\\sqrt{u}</p>

    \\ltp class="formula"\\gtg(x)=2x+1</p>

    <p>
      De afgeleide van de buitenste functie is:
    </p>

    \\ltp class="formula"\\gt
      F'(u)=\\frac{1}{2\\sqrt{u}}
    </p>

    <p>
      En:
    </p>

    \\ltp class="formula"\\gtg'(x)=2</p>

    <p>
      De kettingregel geeft:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=\\frac{1}{2\\sqrt{2x+1}}(2)
    </p>

    <p>
      Dus:
    </p>

    \\ltp class="formula"\\gt
      f'(x)=\\frac{1}{\\sqrt{2x+1}}
    </p>

    <h3>Meerdere lagen</h3>

    <p>
      Een functie kan meer dan twee lagen bevatten. Bijvoorbeeld:
    </p>

    \\ltp class="formula"\\gtf(x)=\\sin((2x+1)^2)</p>

    <p>
      Hier zitten meerdere functies in elkaar:
    </p>

    <ol>
      <li>de binnenste functie is <code>2x+1</code>;</li>
      <li>daarvan wordt het kwadraat genomen;</li>
      <li>van het resultaat wordt de sinus genomen.</li>
    </ol>

    <p>
      De kettingregel wordt dan laag voor laag toegepast. We hoeven dus niet
      alle stappen tegelijk te zien: we kunnen de structuur van binnen naar
      buiten volgen.
    </p>

    <h3>Een vaste werkwijze</h3>

    <p>
      Gebruik bij samengestelde functies deze volgorde:
    </p>

    <ol>
      <li>Bekijk eerst de structuur van de functie.</li>
      <li>Herken product, quotiënt of samenstelling.</li>
      <li>Splits de functie indien dat helpt.</li>
      <li>Differentieer de afzonderlijke onderdelen.</li>
      <li>Pas de juiste regel toe.</li>
      <li>Vereenvoudig het resultaat.</li>
      <li>Controleer of er domeinvoorwaarden zijn.</li>
    </ol>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        Bij een product alleen beide factoren differentiëren en met elkaar
        vermenigvuldigen.
      </li>
      <li>
        Bij de kettingregel de afgeleide van de binnenste functie vergeten.
      </li>
      <li>
        Bij een quotiënt de noemer niet kwadrateren.
      </li>
      <li>
        De structuur van een functie niet eerst herkennen.
      </li>
      <li>
        Een domeinvoorwaarde vergeten wanneer een noemer nul kan worden.
      </li>
    </ul>

    <h3>Van basisregels naar samengestelde functies</h3>

    <p>
      In les 3.5 leerden we de afgeleiden van basisfuncties. In deze les
      leerden we hoe die basisregels gecombineerd kunnen worden.
    </p>

    \\ltp class="formula"\\gt
      \\text{product} \\rightarrow \\text{productregel}
    </p>

    \\ltp class="formula"\\gt
      \\text{quotiënt} \\rightarrow \\text{quotiëntregel}
    </p>

    \\ltp class="formula"\\gt
      \\text{samenstelling} \\rightarrow \\text{kettingregel}
    </p>

    <p>
      Daarmee kunnen we steeds ingewikkeldere functies differentiëren.
      In de volgende lessen kunnen we deze regels toepassen op belangrijke
      functies en vervolgens op problemen uit de werkelijkheid.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De afgeleide van een samengestelde functie volgt uit de manier waarop
        de functie is opgebouwd.
      </p>
      <p>
        Bij een <strong>product</strong> veranderen beide factoren,
        bij een <strong>quotiënt</strong> veranderen teller en noemer,
        en bij een <strong>samenstelling</strong> werkt de verandering
        laag voor laag.
      </p>
      <p>
        De productregel, quotiëntregel en kettingregel maken het mogelijk om
        de afgeleideregel van 3.5 uit te breiden naar veel complexere functies.
      </p>
    </div>
  `
},

  {
  id: "3.7",
  title: "Afgeleiden van belangrijke functies",
  goal: "Hoe laten we exponentiële, logaritmische en goniometrische functies veranderen?",
  theory: /* html */`
    <h2>Afgeleiden van belangrijke functies</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe verandert een exponentiële functie?</li>
      <li>Waarom is <span class="formula-inline">e^x</span> bijzonder?</li>
      <li>Hoe differentiëren we <span class="formula-inline">a^x</span>?</li>
      <li>Wat is de afgeleide van de natuurlijke logaritme?</li>
      <li>Hoe veranderen sinus, cosinus en tangens?</li>
      <li>Hoe gebruiken we de kettingregel bij deze functies?</li>
      <li>Hoe herkennen we welke regel we nodig hebben?</li>
    </ul>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        In 3.5 leerden we de algebraïsche basisafgeleiden en in 3.6 leerden we
        hoe we functies kunnen combineren. Nu voegen we belangrijke
        exponentiële, logaritmische en goniometrische functies toe aan onze
        gereedschapskist.
      </p>
    </div>

    <h3>Exponentiële functies</h3>

    <p>Een exponentiële functie heeft de vorm:</p>
    \\ltp class="formula"\\gtf(x)=a^x</p>
    <p>
      waarbij <span class="formula-inline">a\\\\gt0</span> en
      <span class="formula-inline">a\\\\neq1</span>.
    </p>
    <p>
      De algemene afgeleideregel is:
    </p>
    \\ltp class="formula"\\gt\\\\left(a^x\\\\right)'=a^x\\\\ln(a)</p>

    <h3>De bijzondere basis e</h3>

    <p>
      Eén exponentiële functie is bijzonder belangrijk:
    </p>
    \\ltp class="formula"\\gtf(x)=e^x</p>
    <p>
      Het getal <span class="formula-inline">e</span> is ongeveer:
    </p>
    \\ltp class="formula"\\gte\\\\approx2{,}71828</p>
    <p>De afgeleide is:</p>
    \\ltp class="formula"\\gt\\\\left(e^x\\\\right)'=e^x</p>
    <p>
      De functie verandert dus met een snelheid die gelijk is aan haar eigen
      waarde. Dat maakt <span class="formula-inline">e^x</span> bijzonder
      belangrijk bij groei en verval.
    </p>

    <h3>Een voorbeeld met 2^x</h3>

    <p>Neem:</p>
    \\ltp class="formula"\\gtf(x)=2^x</p>
    <p>Dan:</p>
    \\ltp class="formula"\\gtf'(x)=2^x\\\\ln(2)</p>

    <h3>De kettingregel bij exponentiële functies</h3>

    <p>
      Neem:
    </p>
    \\ltp class="formula"\\gtf(x)=e^{3x}</p>
    <p>
      De buitenste functie is <span class="formula-inline">e^u</span> en de
      binnenste functie is <span class="formula-inline">u=3x</span>.
    </p>
    \\ltp class="formula"\\gt\\\\left(e^u\\\\right)'=e^u</p>
    \\ltp class="formula"\\gtu'=3</p>
    <p>Dus:</p>
    \\ltp class="formula"\\gtf'(x)=3e^{3x}</p>

    <h3>De natuurlijke logaritme</h3>

    <p>
      De natuurlijke logaritme is de inverse functie van
      <span class="formula-inline">e^x</span>:
    </p>
    \\ltp class="formula"\\gty=\\\\ln(x)</p>
    \\ltp class="formula"\\gte^y=x</p>
    <p>
      De natuurlijke logaritme is alleen gedefinieerd voor:
    </p>
    \\ltp class="formula"\\gtx\\\\gt0</p>
    <p>De afgeleideregel is:</p>
    \\ltp class="formula"\\gt\\\\left(\\\\ln(x)\\\\right)'=\\\\frac{1}{x}</p>

    <h3>De kettingregel bij ln</h3>

    <p>
      Voor een samengestelde logaritme geldt:
    </p>
    \\ltp class="formula"\\gtf(x)=\\\\ln(g(x))</p>
    <p>Dan:</p>
    \\ltp class="formula"\\gtf'(x)=\\\\frac{g'(x)}{g(x)}</p>
    <p>
      waarbij <span class="formula-inline">g(x)\\\\gt0</span>.
      Bijvoorbeeld:
    </p>
    \\ltp class="formula"\\gtf(x)=\\\\ln(3x+1)</p>
    \\ltp class="formula"\\gtf'(x)=\\\\frac{3}{3x+1}</p>

    <h3>De sinus en cosinus</h3>

    <p>Voor sinus en cosinus gelden:</p>
    \\ltp class="formula"\\gt\\\\left(\\\\sin(x)\\\\right)'=\\\\cos(x)</p>
    \\ltp class="formula"\\gt\\\\left(\\\\cos(x)\\\\right)'=-\\\\sin(x)</p>
    <p>
      Bij herhaald differentiëren verschijnen steeds sinus en cosinus met
      wisselende tekens.
    </p>
    \\ltp class="formula"\\gt
      \\\\sin(x)\\\\rightarrow\\\\cos(x)\\\\rightarrow-\\\\sin(x)
    </p>

    <h3>De kettingregel bij sinus en cosinus</h3>

    <p>
      Neem:
    </p>
    \\ltp class="formula"\\gtf(x)=\\\\sin(2x)</p>
    <p>Dan:</p>
    \\ltp class="formula"\\gtf'(x)=2\\\\cos(2x)</p>

    <p>
      Voor:
    </p>
    \\ltp class="formula"\\gtf(x)=\\\\cos(3x+1)</p>
    <p>vinden we:</p>
    \\ltp class="formula"\\gtf'(x)=-3\\\\sin(3x+1)</p>

    <h3>De tangens</h3>

    <p>
      De tangens is gerelateerd aan sinus en cosinus:
    </p>
    \\ltp class="formula"\\gt
      \\\\tan(x)=\\\\frac{\\\\sin(x)}{\\\\cos(x)}
    </p>
    <p>Met de quotiëntregel volgt:</p>
    \\ltp class="formula"\\gt
      \\\\left(\\\\tan(x)\\\\right)'=\\\\frac{1}{\\\\cos^2(x)}
    </p>

    <h3>Combineren van regels</h3>

    <p>
      De regels uit 3.5 en 3.6 blijven gewoon gelden.
      Neem bijvoorbeeld:
    </p>
    \\ltp class="formula"\\gtf(x)=e^{x^2}</p>
    \\ltp class="formula"\\gtf'(x)=2xe^{x^2}</p>

    <p>
      Of neem een product:
    </p>
    \\ltp class="formula"\\gtg(x)=x^2\\\\sin(x)</p>
    \\ltp class="formula"\\gtg'(x)=2x\\\\sin(x)+x^2\\\\cos(x)</p>

    <h3>De belangrijkste regels op een rij</h3>

    \\ltp class="formula"\\gt\\\\left(e^x\\\\right)'=e^x</p>
    \\ltp class="formula"\\gt\\\\left(a^x\\\\right)'=a^x\\\\ln(a)</p>
    \\ltp class="formula"\\gt\\\\left(\\\\ln(x)\\\\right)'=\\\\frac{1}{x}</p>
    \\ltp class="formula"\\gt\\\\left(\\\\sin(x)\\\\right)'=\\\\cos(x)</p>
    \\ltp class="formula"\\gt\\\\left(\\\\cos(x)\\\\right)'=-\\\\sin(x)</p>
    \\ltp class="formula"\\gt\\\\left(\\\\tan(x)\\\\right)'=\\\\frac{1}{\\\\cos^2(x)}</p>

    <p>
      Wanneer er een functie in een functie staat, gebruiken we de kettingregel.
      Wanneer functies worden vermenigvuldigd of gedeeld, gebruiken we de
      product- of quotiëntregel.
    </p>

    <h3>Hoe herken je de juiste regel?</h3>

    <ul>
      <li><strong>Macht:</strong> machtsregel.</li>
      <li><strong>Som of verschil:</strong> differentieer elke term afzonderlijk.</li>
      <li><strong>Product:</strong> productregel.</li>
      <li><strong>Quotiënt:</strong> quotiëntregel.</li>
      <li><strong>Functie in een functie:</strong> kettingregel.</li>
      <li><strong>Exponentiële functie:</strong> exponentiële regel, eventueel met kettingregel.</li>
      <li><strong>Logaritme:</strong> logaritmeregel, eventueel met kettingregel.</li>
      <li><strong>Sinus, cosinus of tangens:</strong> de bijbehorende goniometrische regel.</li>
    </ul>

    <h3>Vaste werkwijze</h3>

    <ol>
      <li>Bekijk de volledige functie.</li>
      <li>Herken de structuur.</li>
      <li>Bepaal de buitenste en binnenste functie als dat nodig is.</li>
      <li>Kies de juiste basisregel.</li>
      <li>Gebruik indien nodig de product-, quotiënt- of kettingregel.</li>
      <li>Vereenvoudig het resultaat.</li>
      <li>Controleer het domein.</li>
    </ol>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>Het minteken bij <span class="formula-inline">\\\\cos(x)</span> vergeten.</li>
      <li>Bij <span class="formula-inline">e^{g(x)}</span> de factor <span class="formula-inline">g'(x)</span> vergeten.</li>
      <li>Bij <span class="formula-inline">\\\\ln(g(x))</span> de teller <span class="formula-inline">g'(x)</span> vergeten.</li>
      <li>Een exponentiële functie verwarren met een macht.</li>
      <li>Het domein van een logaritme of tangens negeren.</li>
    </ul>

    <h3>Van afgeleideregels naar toepassingen</h3>

    <p>
      We beschikken nu over een uitgebreide verzameling afgeleideregels.
      We kunnen algebraïsche, exponentiële, logaritmische en goniometrische
      functies differentiëren en deze functies met elkaar combineren.
    </p>

    <p>
      De volgende vraag is daarom niet meer alleen
      <strong>hoe berekenen we de afgeleide?</strong>, maar:
      <strong>wat kunnen we met die veranderingssnelheid doen?</strong>
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Exponentiële, logaritmische en goniometrische functies hebben elk hun
        eigen basisafgeleide. Met de regels uit 3.6 kunnen we ze ook in
        samengestelde functies gebruiken.
      </p>
    </div>
  `
},

  {
  id: "3.8",
  title: "Toepassingen van afgeleiden",
  goal: "Wat kunnen we met veranderingssnelheden?",
  theory: /* html */`
    <h2>Toepassingen van afgeleiden</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe vertelt de afgeleide ons of een functie stijgt of daalt?</li>
      <li>Hoe herkennen we een maximum of minimum?</li>
      <li>Hoe vinden we zulke punten met de afgeleide?</li>
      <li>Hoe gebruiken we de afgeleide voor optimalisatie?</li>
      <li>Hoe beschrijft de afgeleide beweging en snelheid?</li>
      <li>Hoe interpreteren we een veranderingssnelheid in een praktische context?</li>
      <li>Waarom is de integraal de natuurlijke volgende stap?</li>
    </ul>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De afgeleide vertelt niet alleen hoe snel een functie verandert.
        Ze geeft ook informatie over het gedrag van de functie.
        Met de afgeleide kunnen we stijgen en dalen onderzoeken, maxima en
        minima vinden, problemen optimaliseren en veranderingssnelheden
        interpreteren.
      </p>
    </div>

    <h3>Van veranderingssnelheid naar gedrag</h3>

    <p>
      We weten uit 3.4 dat de afgeleide de helling van de raaklijn beschrijft.
      Daardoor vertelt het teken van de afgeleide ons wat de functie lokaal doet.
    </p>
    \\ltp class="formula"\\gtf'(x)\\\\gt0</p>
    <p>De functie stijgt daar.</p>
    \\ltp class="formula"\\gtf'(x)\\\\lt0</p>
    <p>De functie daalt daar.</p>

    <p>Bijvoorbeeld voor:</p>
    \\ltp class="formula"\\gtf(x)=x^2</p>
    <p>geldt:</p>
    \\ltp class="formula"\\gtf'(x)=2x</p>
    <p>
      De functie daalt voor <span class="formula-inline">x\\\\lt0</span> en
      stijgt voor <span class="formula-inline">x\\\\gt0</span>.
    </p>

    <h3>Stationaire en kritieke punten</h3>

    <p>
      Als:
    </p>
    \\ltp class="formula"\\gtf'(x)=0</p>
    <p>
      heeft de grafiek daar een horizontale raaklijn. Zo'n punt noemen we
      een <strong>stationair punt</strong>.
    </p>
    <p>
      Zulke punten zijn belangrijke kandidaten voor maxima en minima.
      Ook punten waar de afgeleide niet bestaat kunnen belangrijk zijn.
    </p>

    <h3>Extrema herkennen</h3>

    <p>
      Neem <span class="formula-inline">f(x)=x^2</span>.
    </p>
    \\ltp class="formula"\\gtf'(x)=2x</p>
    \\ltp class="formula"\\gt2x=0</p>
    \\ltp class="formula"\\gtx=0</p>
    <p>
      Links van 0 is de afgeleide negatief en rechts van 0 positief.
      De functie gaat dus van dalen naar stijgen.
    </p>
    \\ltp class="formula"\\gt(0,0)</p>
    <p>
      Dit is een minimum.
    </p>

    <p>
      Voor <span class="formula-inline">f(x)=-x^2</span> geldt:
    </p>
    \\ltp class="formula"\\gtf'(x)=-2x</p>
    <p>
      Links van nul is de afgeleide positief en rechts negatief.
      De functie gaat dus van stijgen naar dalen.
    </p>
    \\ltp class="formula"\\gt(0,0)</p>
    <p>
      Dit is een maximum.
    </p>

    <p>
      Het algemene tekenverloop is:
    </p>
    <ul>
      <li><strong>positief → negatief:</strong> lokaal maximum;</li>
      <li><strong>negatief → positief:</strong> lokaal minimum.</li>
    </ul>

    <h3>Optimalisatie</h3>

    <p>
      Veel praktische problemen vragen naar de grootste of kleinste mogelijke
      waarde. Dat noemen we een <strong>optimalisatieprobleem</strong>.
    </p>

    <p>
      Denk bijvoorbeeld aan de grootste oppervlakte, minimale kosten,
      maximale opbrengst of een optimale afstelling.
    </p>

    <p>
      De algemene strategie is:
      vertaal eerst het praktische probleem naar een functie en onderzoek
      daarna waar die functie haar gewenste maximum of minimum bereikt.
    </p>

    <h3>Voorbeeld: maximale oppervlakte</h3>

    <p>
      Stel dat we met 20 meter hekwerk een rechthoek willen maken.
      Noem één zijde <span class="formula-inline">x</span> en de andere
      <span class="formula-inline">y</span>.
    </p>

    \\ltp class="formula"\\gt2x+2y=20</p>
    \\ltp class="formula"\\gty=10-x</p>
    \\ltp class="formula"\\gtA=xy</p>
    \\ltp class="formula"\\gtA(x)=x(10-x)=10x-x^2</p>

    <p>
      De oppervlakte is nu geschreven als functie van één variabele.
    </p>

    <h3>De oppervlakte optimaliseren</h3>

    \\ltp class="formula"\\gtA'(x)=10-2x</p>
    \\ltp class="formula"\\gtA'(x)=0</p>
    \\ltp class="formula"\\gt10-2x=0</p>
    \\ltp class="formula"\\gtx=5</p>

    <p>
      Omdat <span class="formula-inline">y=10-x</span>, volgt:
    </p>
    \\ltp class="formula"\\gty=5</p>

    <p>
      De rechthoek met maximale oppervlakte is dus een vierkant:
    </p>
    \\ltp class="formula"\\gtA=5\\\\cdot5=25\\\\text{ m}^2</p>

    <h3>Waarom controleren we het antwoord?</h3>

    <p>
      Het oplossen van <span class="formula-inline">f'(x)=0</span> levert
      alleen kandidaten op. We moeten controleren of het gevonden punt
      werkelijk het gewenste maximum of minimum geeft.
    </p>

    <p>
      Bovendien moet de oplossing binnen het domein en de randvoorwaarden
      van het probleem liggen.
    </p>

    \\ltp class="formula"\\gt0\\\\lt x\\\\lt10</p>

    <p>
      Een negatieve zijde of een zijde langer dan 10 meter heeft in het
      hekwerkprobleem geen betekenis.
    </p>

    <h3>De afgeleide in de bewegingsleer</h3>

    <p>
      Als de positie wordt beschreven door <span class="formula-inline">s(t)</span>,
      dan is de snelheid:
    </p>
    \\ltp class="formula"\\gtv(t)=s'(t)</p>
    <p>
      De versnelling is de verandering van de snelheid:
    </p>
    \\ltp class="formula"\\gta(t)=v'(t)=s''(t)</p>
    \\ltp class="formula"\\gtpositie \\\\rightarrow snelheid \\\\rightarrow versnelling</p>

    <p>
      Stel bijvoorbeeld:
    </p>
    \\ltp class="formula"\\gts(t)=t^2+2t</p>
    \\ltp class="formula"\\gtv(t)=s'(t)=2t+2</p>
    \\ltp class="formula"\\gta(t)=v'(t)=2</p>

    <p>
      Een voorwerp staat op een bepaald moment stil wanneer:
    </p>
    \\ltp class="formula"\\gtv(t)=0</p>
    <p>
      Omdat <span class="formula-inline">v(t)=s'(t)</span>, zoeken we dan:
    </p>
    \\ltp class="formula"\\gts'(t)=0</p>

    <h3>De tweede afgeleide</h3>

    <p>
      We hebben gezien dat de eerste afgeleide beschrijft hoe een functie
      verandert. We kunnen die veranderingssnelheid zelf ook onderzoeken.
    </p>

    <p>
      Dat doen we door nogmaals te differentiëren:
    </p>

    \\ltp class="formula"\\gt
      f'(x) \\rightarrow f''(x)
    </p>

    <p>
      De tweede afgeleide vertelt dus hoe de eerste afgeleide verandert.
      Ze geeft daardoor informatie over de <strong>kromming</strong> van een grafiek.
    </p>

    <p>
      In veel eenvoudige gevallen geldt:
    </p>

    \\ltp class="formula"\\gt
      f''(x)\\gt0
    </p>

    <p>
      betekent dat de grafiek naar boven kromt, terwijl:
    </p>

    \\ltp class="formula"\\gt
      f''(x)\\lt0
    </p>

    <p>
      betekent dat de grafiek naar beneden kromt.
    </p>

    <p>
      Dit sluit aan bij het bewegingsvoorbeeld uit de vorige sectie:
      versnelling is de tweede afgeleide van de positie.
    </p>

    \\ltp class="formula"\\gt
      a(t)=s''(t)
    </p>

    <div class="callout">
      <p><strong>Eerste afgeleide:</strong> hoe verandert de grootheid?</p>
      <p><strong>Tweede afgeleide:</strong> hoe verandert die veranderingssnelheid?</p>
    </div>


    <h3>Veranderingssnelheden koppelen</h3>

    <p>
      Soms veranderen meerdere grootheden tegelijk. De afgeleide kan dan
      beschrijven hoe een verandering in de ene grootheid samenhangt met
      een verandering in een andere.
    </p>

    <p>Voor de oppervlakte van een cirkel geldt:</p>
    \\ltp class="formula"\\gtA=\\\\pi r^2</p>
    <p>Differentieer naar de straal:</p>
    \\ltp class="formula"\\gt\\\\frac{dA}{dr}=2\\\\pi r</p>
    <p>
      Dit vertelt hoe gevoelig de oppervlakte is voor een verandering van
      de straal.
    </p>

    <h3>Lokale informatie interpreteren</h3>

    <p>
      Bijvoorbeeld:
    </p>
    \\ltp class="formula"\\gtf'(3)=5</p>
    <p>
      betekent dat de functie bij <span class="formula-inline">x=3</span>
      op dat moment stijgt met 5 eenheden van <span class="formula-inline">f</span>
      per eenheid van <span class="formula-inline">x</span>.
    </p>
    <p>
      De eenheden horen dus bij de interpretatie van het antwoord.
    </p>

    <h3>Een vaste werkwijze voor toepassingen</h3>

    <ol>
      <li>Lees wat er gevraagd wordt.</li>
      <li>Bepaal welke grootheid verandert of geoptimaliseerd wordt.</li>
      <li>Maak een wiskundig model.</li>
      <li>Schrijf de relevante functie.</li>
      <li>Differentieer de functie.</li>
      <li>Los de vergelijking voor kritieke waarden op wanneer dat nodig is.</li>
      <li>Controleer domein en randvoorwaarden.</li>
      <li>Interpreteer het antwoord in de oorspronkelijke context.</li>
    </ol>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        Denken dat <span class="formula-inline">f'(x)=0</span> automatisch
        een maximum of minimum betekent.
      </li>
      <li>
        Alleen de kritieke waarde berekenen en vergeten de functiewaarde
        te bepalen.
      </li>
      <li>
        Geen rekening houden met het domein van het probleem.
      </li>
      <li>
        Een wiskundig resultaat geven zonder het in de oorspronkelijke
        context te interpreteren.
      </li>
      <li>
        Eenheden vergeten bij een veranderingssnelheid.
      </li>
    </ul>

    <h3>Van afgeleide naar integraal</h3>

    <p>
      Tot nu toe vroegen we vooral:
      <strong>hoe snel verandert iets?</strong>
    </p>
    <p>
      De afgeleide gaat van een grootheid naar haar veranderingssnelheid:
    </p>
    \\ltp class="formula"\\gthoeveelheid \\\\rightarrow veranderingssnelheid</p>

    <p>
      We kunnen ook de omgekeerde vraag stellen:
      als we de veranderingssnelheid kennen, kunnen we dan de oorspronkelijke
      hoeveelheid terugvinden?
    </p>

    <p>
      Dat leidt naar het volgende grote idee van de calculus:
      <strong>integreren</strong>.
    </p>
    \\ltp class="formula"\\gtveranderingssnelheid \\\\rightarrow hoeveelheid</p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De afgeleide is een instrument om verandering te onderzoeken.
        Met het teken van de afgeleide kunnen we stijgen en dalen herkennen.
        Met kritieke punten kunnen we kandidaten voor maxima en minima vinden.
        Bij optimalisatie vertalen we een praktisch probleem naar een functie
        en gebruiken we de afgeleide om het optimale punt te zoeken.
      </p>
      <p>
        In de fysica verbindt de afgeleide positie, snelheid en versnelling.
        Daarmee is de afgeleide niet alleen een rekenregel, maar een algemene
        taal voor verandering.
      </p>
    </div>
  `
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
