/* Lesstof Fase 3 — Calculus. Breid theory/practice/exam hier uit. */
const MILESTONES_3 = [
// Fase 3 — Calculus & Analyse
// Van verandering naar afgeleiden, integralen en multivariabele calculus.
  {
  id: "3.1",
  title: "Verandering & gemiddelde snelheid",
  goal: "Hoe meten we verandering tussen twee punten?",
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
      van 10&#8451 naar 25&#8451 stijgt in drie uur tijd.
    </p>

    <p>De temperatuurverandering is:</p>

    <p class="formula">
      \\Delta T = 25 - 10 = 15{&#8451;}
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
  goal: "Wat gebeurt er als we steeds dichter bij een punt komen?",
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

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      In 3.1 berekenden we bijvoorbeeld de gemiddelde veranderingssnelheid
      tussen <span class="formula-inline">x=2</span> en
      <span class="formula-inline">x=3</span>.
    </p>

    <p class="formula">
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

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We onderzoeken wat er gebeurt wanneer
      <span class="formula-inline">x</span> steeds dichter bij 2 komt.
    </p>

    <p class="formula">
      x=2{,}1
      \\;\\rightarrow\\;
      f(x)=2{,}1^2=4{,}41
    </p>

    <p class="formula">
      x=2{,}01
      \\;\\rightarrow\\;
      f(x)=2{,}01^2=4{,}0401
    </p>

    <p class="formula">
      x=2{,}001
      \\;\\rightarrow\\;
      f(x)=2{,}001^2=4{,}004001
    </p>

    <p>
      De functiewaarden komen steeds dichter bij 4.
    </p>

    <p>We schrijven:</p>

    <p class="formula">
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

    <p class="formula">
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

    <p class="formula">
      f(x)=\\frac{x^2-4}{x-2}
    </p>

    <p>
      Bij <span class="formula-inline">x=2</span> wordt de noemer nul.
      De functie is daar dus niet gedefinieerd.
    </p>

    <p>
      Voor andere waarden van x kunnen we de teller ontbinden:
    </p>

    <p class="formula">
      x^2-4=(x-2)(x+2)
    </p>

    <p>
      Daardoor geldt voor
      <span class="formula-inline">x\\neq2</span>:
    </p>

    <p class="formula">
      \\frac{x^2-4}{x-2}=x+2
    </p>

    <p>
      Wanneer x naar 2 nadert, nadert de functiewaarde dus naar 4:
    </p>

    <p class="formula">
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
      In 3.2 gebruikten we een gat om te zien dat een limiet kan bestaan
      terwijl de functiewaarde op dat punt ontbreekt. Hier gebruiken we
      hetzelfde idee voor een nieuwe vraag: wanneer noemen we een functie
      <strong>continu</strong>?
    </p>

    <p>
      Het vorige voorbeeld heeft een eenvoudig beeld.
    </p>

    <p>
      De grafiek volgt vlak bij
      <span class="formula-inline">x=2</span> de rechte:
    </p>

    <p class="formula">
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

    <p class="formula">
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

    <p class="formula">
      x\\to a^-
    </p>

    <p>
      Dit noemen we de <strong>linkerlimiet</strong>.
    </p>

    <p>
      Van rechts schrijven we:
    </p>

    <p class="formula">
      x\\to a^+
    </p>

    <p>
      Dit noemen we de <strong>rechterlimiet</strong>.
    </p>

    <p>
      Een gewone tweezijdige limiet bestaat wanneer beide overeenkomen:
    </p>

    <p class="formula">
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

    <p class="formula">
      \\lim_{x\\to0^-}f(x)=2
    </p>

    <p class="formula">
      \\lim_{x\\to0^+}f(x)=5
    </p>

    <p>
      Omdat beide waarden verschillend zijn, bestaat de tweezijdige limiet niet.
    </p>

    <p class="formula">
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

    <p class="formula">
      \\lim_{x\\to3}(2x+1)
    </p>

    <p>
      We vullen <span class="formula-inline">x=3</span> in:
    </p>

    <p class="formula">
      2(3)+1=7
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \\lim_{x\\to3}(2x+1)=7
    </p>


    <h3>Limieten van sommen en producten</h3>

    <p>
      Voor veel gewone functies mogen we limieten term voor term behandelen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \\lim_{x\\to2}(x^2+3x)
    </p>

    <p>
      We kunnen de limiet van beide termen afzonderlijk bepalen:
    </p>

    <p class="formula">
      \\lim_{x\\to2}x^2=4
    </p>

    <p class="formula">
      \\lim_{x\\to2}3x=6
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \\lim_{x\\to2}(x^2+3x)=10
    </p>


    <h3>De vorm 0/0</h3>

    <p>
      Soms geeft rechtstreeks invullen een onbruikbare vorm.
    </p>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">
      \\lim_{x\\to2}\\frac{x^2-4}{x-2}
    </p>

    <p>
      Rechtstreeks invullen geeft:
    </p>

    <p class="formula">
      \\frac{0}{0}
    </p>

    <p>
      Dit betekent <strong>niet</strong> dat de limiet gelijk is aan nul.
      Het betekent dat we de uitdrukking eerst verder moeten onderzoeken.
    </p>

    <p>
      We factoriseren:
    </p>

    <p class="formula">
      x^2-4=(x-2)(x+2)
    </p>

    <p>
      Voor <span class="formula-inline">x\\neq2</span> krijgen we:
    </p>

    <p class="formula">
      \\frac{(x-2)(x+2)}{x-2}=x+2
    </p>

    <p>
      Daardoor:
    </p>

    <p class="formula">
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

    <p class="formula">
      f(x)=\\frac{1}{x}
    </p>

    <p>
      Wanneer x vanuit positieve waarden naar nul gaat,
      worden de functiewaarden steeds groter:
    </p>

    <p class="formula">
      \\lim_{x\\to0^+}\\frac{1}{x}=\\infty
    </p>

    <p>
      Vanuit negatieve waarden worden de functiewaarden steeds negatiever:
    </p>

    <p class="formula">
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

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Voor een functie kunnen we die schrijven als:
    </p>

    <p class="formula">
      \\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Als we het interval steeds kleiner maken, betekent dit dat
      <span class="formula-inline">h</span> naar nul gaat.
    </p>

    <p class="formula">
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

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      De gemiddelde veranderingssnelheid tussen
      <span class="formula-inline">x</span> en
      <span class="formula-inline">x+h</span> is:
    </p>

    <p class="formula">
      \\frac{(x+h)^2-x^2}{h}
    </p>

    <p>
      We werken het kwadraat uit:
    </p>

    <p class="formula">
      (x+h)^2=x^2+2xh+h^2
    </p>

    <p>
      Daardoor wordt de verhouding:
    </p>

    <p class="formula">
      \\frac{x^2+2xh+h^2-x^2}{h}
    </p>

    <p>
      Na vereenvoudigen:
    </p>

    <p class="formula">
      2x+h
    </p>

    <p>
      Wanneer <span class="formula-inline">h</span> naar nul gaat,
      nadert deze waarde naar:
    </p>

    <p class="formula">
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
  goal: "Wanneer verandert een functie zonder sprongen of gaten?",
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
      \\lim_{x\\to2}x^2=4
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
      f(a)\\text{ bestaat}
    </p>

    <p><strong>2. De limiet bestaat:</strong></p>

    <p class="formula">
      \\lim_{x\\to a}f(x)\\text{ bestaat}
    </p>

    <p><strong>3. De limiet is gelijk aan de functiewaarde:</strong></p>

    <p class="formula">
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
      \\lim_{x\\to2}(x^2+3x-1)=9
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
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

    <p class="formula">
      f(x)=\\frac{x^2-4}{x-2}
    </p>

    <p>
      Deze functie is niet gedefinieerd bij
      <span class="formula-inline">x=2</span>.
    </p>

    <p>
      Voor andere waarden van x kunnen we schrijven:
    </p>

    <p class="formula">
      \\frac{x^2-4}{x-2}=x+2
    </p>

    <p>
      en daarom:
    </p>

    <p class="formula">
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

    <p class="formula">
      f(2)=4
    </p>

    <p>
      Dan wordt de functie op dat punt gedefinieerd en geldt:
    </p>

    <p class="formula">
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

    <p class="formula">
      \\lim_{x\\to0^-}f(x)=1
    </p>

    <p class="formula">
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

    <p class="formula">
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

    <p class="formula">
      \\lim_{x\\to0^+}\\frac{1}{x}=\\infty
    </p>

    <p>
      Vanuit negatieve waarden worden ze onbeperkt negatief:
    </p>

    <p class="formula">
      \\lim_{x\\to0^-}\\frac{1}{x}=-\\infty
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
      f(x)=\\sqrt{x}
    </p>

    <p>
      zijn continu waar ze gedefinieerd zijn.
    </p>

    <p>
      Bij rationale functies zoals:
    </p>

    <p class="formula">
      f(x)=\\frac{x+1}{x-3}
    </p>

    <p>
      moeten we opletten voor waarden waarvoor de noemer nul wordt.
    </p>

    <p class="formula">
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
      f(a)\\lt0
    </p>

    <p>en:</p>

    <p class="formula">
      f(b)\\gt0
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
      <span class="formula-inline">-5 &#8451;</span> naar
      <span class="formula-inline">8 &#8451;</span> stijgt.
    </p>

    <p>
      Als de temperatuur continu verandert, moet er een moment zijn
      waarop ze precies:
    </p>

    <p class="formula">
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

    <p class="formula">
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
      In 3.2 onderzochten we vooral wat een limiet betekent. In deze milestone
      hebben we dezelfde limiet gekoppeld aan de functiewaarde en zo
      continuïteit gedefinieerd. We zijn nu klaar om die begrippen opnieuw te
      gebruiken voor een nieuwe vraag: de afgeleide.
    </p>

    <p>
      We hebben nu drie begrippen met elkaar verbonden:
    </p>

    <p class="formula">
      \\text{functiewaarde}
      \\rightarrow
      \\text{limiet}
      \\rightarrow
      \\text{continuïteit}
    </p>

    <p>
      In 3.1 zagen we vervolgens hoe gemiddelde verandering ontstaat uit:
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      In 3.2 maakten we het interval steeds kleiner:
    </p>

    <p class="formula">
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

      <p class="formula">
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
  goal: "Hoe berekenen we afgeleiden van basisfuncties?",
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

    <p class="formula">
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

    <p class="formula">f(x)=x^n</p>
    <p>geldt:</p>
    <p class="formula">f'(x)=n x^{n-1}</p>

    <p>
      De exponent komt vooraan te staan en wordt daarna met één verminderd.
    </p>

    <div class="callout">
      <p><strong>Machtsregel:</strong></p>
      <p class="formula">\\\\left(x^n\\\\right)'=n x^{n-1}</p>
    </div>

    <h3>Een eenvoudig voorbeeld</h3>

    <p>Neem:</p>
    <p class="formula">f(x)=x^5</p>
    <p>Dan:</p>
    <p class="formula">f'(x)=5x^4</p>
    <p>De exponent 5 komt vooraan en wordt 4:</p>
    <p class="formula">5\\\\rightarrow4</p>

    <h3>De functie x</h3>

    <p>
      De functie <span class="formula-inline">x</span> kunnen we schrijven als:
    </p>
    <p class="formula">x=x^1</p>
    <p>De machtsregel geeft:</p>
    <p class="formula">\\\\left(x^1\\\\right)'=1x^0=1</p>
    <p>Dus:</p>
    <p class="formula">(x)'=1</p>

    <h3>De afgeleide van een constante</h3>

    <p>
      Een constante verandert niet wanneer <span class="formula-inline">x</span>
      verandert. Daarom is:
    </p>
    <p class="formula">(c)'=0</p>
    <p>Bijvoorbeeld:</p>
    <p class="formula">(7)'=0</p>
    <p class="formula">(-12)'=0</p>
    <p>
      Geometrisch klopt dit ook: een horizontale rechte heeft helling nul.
    </p>

    <h3>Sommen, verschillen en constante factoren</h3>

    <p>
      Bij een som of verschil mogen we de termen afzonderlijk afleiden:
    </p>
    <p class="formula">(f(x)+g(x))'=f'(x)+g'(x)</p>
    <p class="formula">(f(x)-g(x))'=f'(x)-g'(x)</p>

    <p>
      Staat er een constante factor voor een functie, dan blijft die factor
      staan:
    </p>
    <p class="formula">(c f(x))'=c f'(x)</p>

    <h3>Een volledige veelterm</h3>

    <p>Neem:</p>
    <p class="formula">f(x)=3x^4-5x^2+7x-2</p>
    <p>Leid iedere term afzonderlijk af:</p>
    <p class="formula">(3x^4)'=12x^3</p>
    <p class="formula">(-5x^2)'=-10x</p>
    <p class="formula">(7x)'=7</p>
    <p class="formula">(-2)'=0</p>
    <p>Dus:</p>
    <p class="formula">f'(x)=12x^3-10x+7</p>

    <div class="callout">
      <p><strong>Werkwijze:</strong></p>
      <p>
        Leid iedere term afzonderlijk af en tel de resultaten daarna weer op.
      </p>
    </div>

    <h3>Negatieve exponenten</h3>

    <p>De machtsregel werkt ook voor negatieve exponenten.</p>
    <p class="formula">f(x)=x^{-2}</p>
    <p class="formula">f'(x)=-2x^{-3}</p>
    <p>Omdat:</p>
    <p class="formula">x^{-3}=\\\\frac{1}{x^3}</p>
    <p>kunnen we dit ook schrijven als:</p>
    <p class="formula">f'(x)=-\\\\frac{2}{x^3}</p>

    <h3>Gebroken exponenten en wortels</h3>

    <p>
      Ook een wortelfunctie kunnen we als macht schrijven:
    </p>
    <p class="formula">\\\\sqrt{x}=x^{1/2}</p>
    <p>De machtsregel geeft:</p>
    <p class="formula">\\\\left(x^{1/2}\\\\right)'=\\\\frac{1}{2}x^{-1/2}</p>
    <p>Omdat:</p>
    <p class="formula">x^{-1/2}=\\\\frac{1}{\\\\sqrt{x}}</p>
    <p>volgt:</p>
    <p class="formula">\\\\left(\\\\sqrt{x}\\\\right)'=\\\\frac{1}{2\\\\sqrt{x}}</p>

    <h3>Een compacte verzameling basisregels</h3>

    <p>De belangrijkste regels uit deze les zijn:</p>
    <p class="formula">(c)'=0</p>
    <p class="formula">(x)'=1</p>
    <p class="formula">\\\\left(x^n\\\\right)'=n x^{n-1}</p>
    <p class="formula">(f+g)'=f'+g'</p>
    <p class="formula">(f-g)'=f'-g'</p>
    <p class="formula">(cf)'=cf'</p>

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
    <p class="formula">f(x)=x^2</p>
    <p class="formula">f'(x)=2x</p>
    <p>
      Bij <span class="formula-inline">x=3</span> is:
    </p>
    <p class="formula">f'(3)=6</p>
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
    <p class="formula">\\\\frac{\\\\mathrm{km}}{\\\\mathrm{u}}</p>
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
    <p class="formula">f(x)=x^2\\\\sin x</p>
    <p class="formula">g(x)=\\\\frac{x^2+1}{x}</p>
    <p class="formula">h(x)=\\\\sin(x^2)</p>
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

    <p class="formula">f(x)=x^2 \\rightarrow f'(x)=2x</p>

    <p>
      Maar functies zijn niet altijd zo eenvoudig. Denk bijvoorbeeld aan:
    </p>

    <p class="formula">f(x)=x^2(3x+1)</p>

    <p>
      Hier worden twee functies met elkaar vermenigvuldigd:
    </p>

    <p class="formula">u(x)=x^2</p>

    <p class="formula">v(x)=3x+1</p>

    <p>
      We hebben dus een regel nodig die vertelt hoe de afgeleide van een
      <strong>product van functies</strong> werkt.
    </p>

    <h3>De productregel</h3>

    <p>
      Stel dat een functie bestaat uit het product van twee functies:
    </p>

    <p class="formula">f(x)=u(x)v(x)</p>

    <p>
      Dan is de afgeleide:
    </p>

    <p class="formula">f'(x)=u'(x)v(x)+u(x)v'(x)</p>

    <p>
      De belangrijke gedachte is dat <strong>beide factoren veranderen</strong>.
      Daarom krijgen we twee termen:
    </p>

    <p class="formula">u'(x)v(x)</p>

    <p class="formula">u(x)v'(x)</p>

    <p>
      We differentiëren dus eerst de eerste factor en daarna de tweede factor.
      De andere factor blijft telkens staan.
    </p>

    <h3>De productregel gebruiken</h3>

    <p>
      Neem:
    </p>

    <p class="formula">f(x)=x^2(3x+1)</p>

    <p>
      Kies de twee factoren:
    </p>

    <p class="formula">u(x)=x^2</p>

    <p class="formula">v(x)=3x+1</p>

    <p>
      Hun afgeleiden zijn:
    </p>

    <p class="formula">u'(x)=2x</p>

    <p class="formula">v'(x)=3</p>

    <p>
      Pas nu de productregel toe:
    </p>

    <p class="formula">
      f'(x)=u'(x)v(x)+u(x)v'(x)
    </p>

    <p class="formula">
      f'(x)=2x(3x+1)+x^2(3)
    </p>

    <p>
      Vereenvoudigen geeft:
    </p>

    <p class="formula">f'(x)=6x^2+5x</p>

    <h3>Waarom niet gewoon beide factoren apart afleiden?</h3>

    <p>
      Een veelgemaakte fout is:
    </p>

    <p class="formula">
      (u(x)v(x))'=u'(x)v'(x)
    </p>

    <p>
      Dat is <strong>niet</strong> de productregel.
    </p>

    <p>
      De productregel bevat een som van twee producten:
    </p>

    <p class="formula">
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

    <p class="formula">
      f(x)=\\frac{u(x)}{v(x)}
    </p>

    <p>
      Als de noemer niet nul is, geldt:
    </p>

    <p class="formula">
      f'(x)=\\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}
    </p>

    <p>
      De structuur lijkt op die van de productregel, maar nu ontstaat een
      <strong>verschil</strong> en wordt de noemer gekwadrateerd.
    </p>

    <p>
      De voorwaarde blijft belangrijk:
    </p>

    <p class="formula">v(x)\\neq0</p>

    <h3>De quotiëntregel gebruiken</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=\\frac{x^2}{x+1}
    </p>

    <p>
      Kies:
    </p>

    <p class="formula">u(x)=x^2</p>

    <p class="formula">v(x)=x+1</p>

    <p>
      Dus:
    </p>

    <p class="formula">u'(x)=2x</p>

    <p class="formula">v'(x)=1</p>

    <p>
      De quotiëntregel geeft:
    </p>

    <p class="formula">
      f'(x)=\\frac{2x(x+1)-x^2(1)}{(x+1)^2}
    </p>

    <p>
      Vereenvoudigen:
    </p>

    <p class="formula">
      f'(x)=\\frac{x^2+2x}{(x+1)^2}
    </p>

    <p>
      De oorspronkelijke functie is alleen gedefinieerd wanneer:
    </p>

    <p class="formula">x\\neq-1</p>

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

    <p class="formula">f(x)=(3x+1)^4</p>

    <p>
      Dit is geen gewoon vierde macht van <code>x</code>. Binnen de macht staat
      namelijk een andere functie:
    </p>

    <p class="formula">g(x)=3x+1</p>

    <p>
      Daarom kunnen we de functie bekijken als:
    </p>

    <p class="formula">f(x)=g(x)^4</p>

    <p>
      Dit noemen we een <strong>samengestelde functie</strong>: de ene functie
      wordt toegepast op het resultaat van een andere functie.
    </p>

    <h3>De kettingregel</h3>

    <p>
      Stel dat:
    </p>

    <p class="formula">f(x)=F(g(x))</p>

    <p>
      Dan geldt de kettingregel:
    </p>

    <p class="formula">
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

    <p class="formula">f(x)=(3x+1)^4</p>

    <p>
      De <strong>binnenste functie</strong> is:
    </p>

    <p class="formula">g(x)=3x+1</p>

    <p>
      De <strong>buitenste functie</strong> is:
    </p>

    <p class="formula">F(u)=u^4</p>

    <p>
      Differentieer beide:
    </p>

    <p class="formula">F'(u)=4u^3</p>

    <p class="formula">g'(x)=3</p>

    <p>
      Pas nu de kettingregel toe:
    </p>

    <p class="formula">
      f'(x)=4(3x+1)^3(3)
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
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

    <p class="formula">f(x)=F(g(x))</p>

    <p>
      zijn er daarom twee veranderingssnelheden:
    </p>

    <p class="formula">F'(g(x))</p>

    <p class="formula">g'(x)</p>

    <p>
      De totale veranderingssnelheid is hun product:
    </p>

    <p class="formula">
      f'(x)=F'(g(x))g'(x)
    </p>

    <h3>Een tweede voorbeeld</h3>

    <p>
      Beschouw:
    </p>

    <p class="formula">f(x)=\\sqrt{2x+1}</p>

    <p>
      Schrijf de buitenste en binnenste functie:
    </p>

    <p class="formula">F(u)=\\sqrt{u}</p>

    <p class="formula">g(x)=2x+1</p>

    <p>
      De afgeleide van de buitenste functie is:
    </p>

    <p class="formula">
      F'(u)=\\frac{1}{2\\sqrt{u}}
    </p>

    <p>
      En:
    </p>

    <p class="formula">g'(x)=2</p>

    <p>
      De kettingregel geeft:
    </p>

    <p class="formula">
      f'(x)=\\frac{1}{2\\sqrt{2x+1}}(2)
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      f'(x)=\\frac{1}{\\sqrt{2x+1}}
    </p>

    <h3>Meerdere lagen</h3>

    <p>
      Een functie kan meer dan twee lagen bevatten. Bijvoorbeeld:
    </p>

    <p class="formula">f(x)=\\sin((2x+1)^2)</p>

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

    <p class="formula">
      \\text{product} \\rightarrow \\text{productregel}
    </p>

    <p class="formula">
      \\text{quotiënt} \\rightarrow \\text{quotiëntregel}
    </p>

    <p class="formula">
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
  goal: "Hoe differentiëren we exponentiële, logaritmische en goniometrische functies?",
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
    <p class="formula">f(x)=a^x</p>
    <p>
      waarbij <span class="formula-inline">a\\\\gt0</span> en
      <span class="formula-inline">a\\\\neq1</span>.
    </p>
    <p>
      De algemene afgeleideregel is:
    </p>
    <p class="formula">\\\\left(a^x\\\\right)'=a^x\\\\ln(a)</p>

    <h3>De bijzondere basis e</h3>

    <p>
      Eén exponentiële functie is bijzonder belangrijk:
    </p>
    <p class="formula">f(x)=e^x</p>
    <p>
      Het getal <span class="formula-inline">e</span> is ongeveer:
    </p>
    <p class="formula">e\\\\approx2{,}71828</p>
    <p>De afgeleide is:</p>
    <p class="formula">\\\\left(e^x\\\\right)'=e^x</p>
    <p>
      De functie verandert dus met een snelheid die gelijk is aan haar eigen
      waarde. Dat maakt <span class="formula-inline">e^x</span> bijzonder
      belangrijk bij groei en verval.
    </p>

    <h3>Een voorbeeld met 2^x</h3>

    <p>Neem:</p>
    <p class="formula">f(x)=2^x</p>
    <p>Dan:</p>
    <p class="formula">f'(x)=2^x\\\\ln(2)</p>

    <h3>De kettingregel bij exponentiële functies</h3>

    <p>
      Neem:
    </p>
    <p class="formula">f(x)=e^{3x}</p>
    <p>
      De buitenste functie is <span class="formula-inline">e^u</span> en de
      binnenste functie is <span class="formula-inline">u=3x</span>.
    </p>
    <p class="formula">\\\\left(e^u\\\\right)'=e^u</p>
    <p class="formula">u'=3</p>
    <p>Dus:</p>
    <p class="formula">f'(x)=3e^{3x}</p>

    <h3>De natuurlijke logaritme</h3>

    <p>
      De natuurlijke logaritme is de inverse functie van
      <span class="formula-inline">e^x</span>:
    </p>
    <p class="formula">y=\\\\ln(x)</p>
    <p class="formula">e^y=x</p>
    <p>
      De natuurlijke logaritme is alleen gedefinieerd voor:
    </p>
    <p class="formula">x\\\\gt0</p>
    <p>De afgeleideregel is:</p>
    <p class="formula">\\\\left(\\\\ln(x)\\\\right)'=\\\\frac{1}{x}</p>

    <h3>De kettingregel bij ln</h3>

    <p>
      Voor een samengestelde logaritme geldt:
    </p>
    <p class="formula">f(x)=\\\\ln(g(x))</p>
    <p>Dan:</p>
    <p class="formula">f'(x)=\\\\frac{g'(x)}{g(x)}</p>
    <p>
      waarbij <span class="formula-inline">g(x)\\\\gt0</span>.
      Bijvoorbeeld:
    </p>
    <p class="formula">f(x)=\\\\ln(3x+1)</p>
    <p class="formula">f'(x)=\\\\frac{3}{3x+1}</p>

    <h3>De sinus en cosinus</h3>

    <p>Voor sinus en cosinus gelden:</p>
    <p class="formula">\\\\left(\\\\sin(x)\\\\right)'=\\\\cos(x)</p>
    <p class="formula">\\\\left(\\\\cos(x)\\\\right)'=-\\\\sin(x)</p>
    <p>
      Bij herhaald differentiëren verschijnen steeds sinus en cosinus met
      wisselende tekens.
    </p>
    <p class="formula">
      \\\\sin(x)\\\\rightarrow\\\\cos(x)\\\\rightarrow-\\\\sin(x)
    </p>

    <h3>De kettingregel bij sinus en cosinus</h3>

    <p>
      Neem:
    </p>
    <p class="formula">f(x)=\\\\sin(2x)</p>
    <p>Dan:</p>
    <p class="formula">f'(x)=2\\\\cos(2x)</p>

    <p>
      Voor:
    </p>
    <p class="formula">f(x)=\\\\cos(3x+1)</p>
    <p>vinden we:</p>
    <p class="formula">f'(x)=-3\\\\sin(3x+1)</p>

    <h3>De tangens</h3>

    <p>
      De tangens is gerelateerd aan sinus en cosinus:
    </p>
    <p class="formula">
      \\\\tan(x)=\\\\frac{\\\\sin(x)}{\\\\cos(x)}
    </p>
    <p>Met de quotiëntregel volgt:</p>
    <p class="formula">
      \\\\left(\\\\tan(x)\\\\right)'=\\\\frac{1}{\\\\cos^2(x)}
    </p>

    <h3>Combineren van regels</h3>

    <p>
      De regels uit 3.5 en 3.6 blijven gewoon gelden.
      Neem bijvoorbeeld:
    </p>
    <p class="formula">f(x)=e^{x^2}</p>
    <p class="formula">f'(x)=2xe^{x^2}</p>

    <p>
      Of neem een product:
    </p>
    <p class="formula">g(x)=x^2\\\\sin(x)</p>
    <p class="formula">g'(x)=2x\\\\sin(x)+x^2\\\\cos(x)</p>

    <h3>De belangrijkste regels op een rij</h3>

    <p class="formula">\\\\left(e^x\\\\right)'=e^x</p>
    <p class="formula">\\\\left(a^x\\\\right)'=a^x\\\\ln(a)</p>
    <p class="formula">\\\\left(\\\\ln(x)\\\\right)'=\\\\frac{1}{x}</p>
    <p class="formula">\\\\left(\\\\sin(x)\\\\right)'=\\\\cos(x)</p>
    <p class="formula">\\\\left(\\\\cos(x)\\\\right)'=-\\\\sin(x)</p>
    <p class="formula">\\\\left(\\\\tan(x)\\\\right)'=\\\\frac{1}{\\\\cos^2(x)}</p>

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
      In 3.4 leerden we wat het teken van de afgeleide betekent op één punt.
      Nu gebruiken we datzelfde inzicht om het gedrag van een volledige functie
      over een interval te onderzoeken.
    </p>

    <p>
      We weten uit 3.4 dat de afgeleide de helling van de raaklijn beschrijft.
      Daardoor vertelt het teken van de afgeleide ons wat de functie lokaal doet.
    </p>
    <p class="formula">f'(x)\\gt0</p>
    <p>De functie stijgt daar.</p>
    <p class="formula">f'(x)\\lt0</p>
    <p>De functie daalt daar.</p>

    <p>Bijvoorbeeld voor:</p>
    <p class="formula">f(x)=x^2</p>
    <p>geldt:</p>
    <p class="formula">f'(x)=2x</p>
    <p>
      De functie daalt voor <span class="formula-inline">x\\lt0</span> en
      stijgt voor <span class="formula-inline">x\\gt0</span>.
    </p>

    <h3>Stationaire en kritieke punten</h3>

    <p>
      Als:
    </p>
    <p class="formula">f'(x)=0</p>
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
    <p class="formula">f'(x)=2x</p>
    <p class="formula">2x=0</p>
    <p class="formula">x=0</p>
    <p>
      Links van 0 is de afgeleide negatief en rechts van 0 positief.
      De functie gaat dus van dalen naar stijgen.
    </p>
    <p class="formula">(0,0)</p>
    <p>
      Dit is een minimum.
    </p>

    <p>
      Voor <span class="formula-inline">f(x)=-x^2</span> geldt:
    </p>
    <p class="formula">f'(x)=-2x</p>
    <p>
      Links van nul is de afgeleide positief en rechts negatief.
      De functie gaat dus van stijgen naar dalen.
    </p>
    <p class="formula">(0,0)</p>
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

    <p class="formula">2x+2y=20</p>
    <p class="formula">y=10-x</p>
    <p class="formula">A=xy</p>
    <p class="formula">A(x)=x(10-x)=10x-x^2</p>

    <p>
      De oppervlakte is nu geschreven als functie van één variabele.
    </p>

    <h3>De oppervlakte optimaliseren</h3>

    <p class="formula">A'(x)=10-2x</p>
    <p class="formula">A'(x)=0</p>
    <p class="formula">10-2x=0</p>
    <p class="formula">x=5</p>

    <p>
      Omdat <span class="formula-inline">y=10-x</span>, volgt:
    </p>
    <p class="formula">y=5</p>

    <p>
      De rechthoek met maximale oppervlakte is dus een vierkant:
    </p>
    <p class="formula">A=5\\cdot5=25\\text{ m}^2</p>

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

    <p class="formula">0\\lt x\\lt10</p>

    <p>
      Een negatieve zijde of een zijde langer dan 10 meter heeft in het
      hekwerkprobleem geen betekenis.
    </p>

    <h3>De afgeleide in de bewegingsleer</h3>

    <p>
      Als de positie wordt beschreven door <span class="formula-inline">s(t)</span>,
      dan is de snelheid:
    </p>
    <p class="formula">v(t)=s'(t)</p>
    <p>
      De versnelling is de verandering van de snelheid:
    </p>
    <p class="formula">a(t)=v'(t)=s''(t)</p>
    <p class="formula">positie \\rightarrow snelheid \\rightarrow versnelling</p>

    <p>
      Stel bijvoorbeeld:
    </p>
    <p class="formula">s(t)=t^2+2t</p>
    <p class="formula">v(t)=s'(t)=2t+2</p>
    <p class="formula">a(t)=v'(t)=2</p>

    <p>
      Een voorwerp staat op een bepaald moment stil wanneer:
    </p>
    <p class="formula">v(t)=0</p>
    <p>
      Omdat <span class="formula-inline">v(t)=s'(t)</span>, zoeken we dan:
    </p>
    <p class="formula">s'(t)=0</p>

    <h3>De tweede afgeleide</h3>

    <p>
      We hebben gezien dat de eerste afgeleide beschrijft hoe een functie
      verandert. We kunnen die veranderingssnelheid zelf ook onderzoeken.
    </p>

    <p>
      Dat doen we door nogmaals te differentiëren:
    </p>

    <p class="formula">
      f'(x) \\rightarrow f''(x)
    </p>

    <p>
      De tweede afgeleide vertelt dus hoe de eerste afgeleide verandert.
      Ze geeft daardoor informatie over de <strong>kromming</strong> van een grafiek.
    </p>

    <p>
      In veel eenvoudige gevallen geldt:
    </p>

    <p class="formula">
      f''(x)\\gt0
    </p>

    <p>
      betekent dat de grafiek naar boven kromt, terwijl:
    </p>

    <p class="formula">
      f''(x)\\lt0
    </p>

    <p>
      betekent dat de grafiek naar beneden kromt.
    </p>

    <p>
      Dit sluit aan bij het bewegingsvoorbeeld uit de vorige sectie:
      versnelling is de tweede afgeleide van de positie.
    </p>

    <p class="formula">
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
    <p class="formula">A=\\pi r^2</p>
    <p>Differentieer naar de straal:</p>
    <p class="formula">\\frac{dA}{dr}=2\\pi r</p>
    <p>
      Dit vertelt hoe gevoelig de oppervlakte is voor een verandering van
      de straal.
    </p>

    <h3>Lokale informatie interpreteren</h3>

    <p>
      Bijvoorbeeld:
    </p>
    <p class="formula">f'(3)=5</p>
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
    <p class="formula">hoeveelheid \\rightarrow veranderingssnelheid</p>

    <p>
      We kunnen ook de omgekeerde vraag stellen:
      als we de veranderingssnelheid kennen, kunnen we dan de oorspronkelijke
      hoeveelheid terugvinden?
    </p>

    <p>
      Dat leidt naar het volgende grote idee van de calculus:
      <strong>integreren</strong>.
    </p>
    <p class="formula">veranderingssnelheid \\rightarrow hoeveelheid</p>

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
    theory: `
    <h2>De integraal als omgekeerde verandering</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom kunnen we uit een veranderingssnelheid weer een totale verandering opbouwen?</li>
      <li>Hoe kunnen we een hoeveelheid vinden door heel veel kleine bijdragen op te tellen?</li>
      <li>Waarom verschijnt de oppervlakte onder een grafiek bij integralen?</li>
      <li>Hoe gaan we van een benadering met rechthoeken naar een exacte integraal?</li>
      <li>Wat betekent het integraalteken en wat stellen de grenzen voor?</li>
      <li>Waarom kan een integraal positief, negatief of nul zijn?</li>
      <li>Hoe vormt de integraal de natuurlijke volgende stap na de afgeleide?</li>
    </ul>

    <p>
      In 3.8 hebben we de afgeleide gebruikt om te beschrijven
      <strong>hoe snel iets verandert</strong>.
      We gingen bijvoorbeeld van positie naar snelheid en van snelheid naar versnelling.
    </p>

    <div class="callout">
      <p><strong>Tot nu toe:</strong></p>
      <p>
        hoeveelheid → veranderingssnelheid
      </p>
      <p><strong>Nu draaien we de vraag om:</strong></p>
      <p>
        veranderingssnelheid → totale verandering
      </p>
    </div>

    <h3>Van snelheid naar afgelegde afstand</h3>

    <p>
      Stel dat een trein gedurende drie uur met een constante snelheid van
      80 km/u rijdt.
    </p>

    <p>De afgelegde afstand is:</p>

    <p class="formula">
      s = 80 \\cdot 3 = 240\\text{ km}
    </p>

    <p>
      We hebben hier een veranderingssnelheid vermenigvuldigd met een tijdsinterval.
      Dat geeft de totale verandering:
    </p>

    <p class="formula">
      \\text{afstand} = \\text{snelheid} \\cdot \\text{tijd}
    </p>

    <p>
      Bij constante snelheid is dit eenvoudig.
      Maar in de werkelijkheid verandert de snelheid voortdurend.
    </p>

    <div class="callout">
      <p><strong>De interessante vraag:</strong></p>
      <p>
        Hoe vinden we de totale verandering als de veranderingssnelheid
        zelf voortdurend verandert?
      </p>
    </div>

    <h3>Een veranderlijke snelheid</h3>

    <p>
      Stel dat de snelheid van een trein tijdens een rit verandert.
      Op het ene moment rijdt hij 60 km/u, later 90 km/u en daarna 120 km/u.
    </p>

    <p>
      We kunnen de volledige rit opdelen in kleine tijdsintervallen.
      Binnen een klein interval verandert de snelheid misschien maar weinig.
      We kunnen de snelheid daar dan benaderen met één waarde.
    </p>

    <p>
      Als de snelheid tijdens een klein interval ongeveer
      <span class="formula-inline">v</span> is en het interval een duur
      <span class="formula-inline">\\Delta t</span> heeft, dan is de afgelegde
      afstand ongeveer:
    </p>

    <p class="formula">
      \\Delta s \\approx v\\,\\Delta t
    </p>

    <p>
      Dit is dezelfde gedachte als bij een constante snelheid:
      snelheid maal tijd geeft afstand.
    </p>

    <h3>De hele rit opdelen</h3>

    <p>
      Stel dat we de rit opdelen in veel kleine intervallen.
      Voor elk interval berekenen we een kleine bijdrage aan de afgelegde afstand.
    </p>

    <p class="formula">
      \\Delta s_1 \\approx v_1\\Delta t
    </p>

    <p class="formula">
      \\Delta s_2 \\approx v_2\\Delta t
    </p>

    <p class="formula">
      \\Delta s_3 \\approx v_3\\Delta t
    </p>

    <p>
      De totale afstand is dan ongeveer de som van al die kleine bijdragen:
    </p>

    <p class="formula">
      s \\approx
      v_1\\Delta t+
      v_2\\Delta t+
      v_3\\Delta t+
      \\cdots
    </p>

    <p>
      Of korter:
    </p>

    <p class="formula">
      s \\approx \\sum_{i=1}^{n} v_i\\Delta t
    </p>

    <p>
      Hoe meer intervallen we gebruiken, hoe kleiner de intervallen worden
      en hoe nauwkeuriger onze benadering wordt.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een veranderende hoeveelheid kunnen we benaderen door
        heel veel kleine veranderingen op te tellen.
      </p>
    </div>

    <h3>Van rechthoeken naar oppervlakte</h3>

    <p>
      Hetzelfde idee kunnen we geometrisch bekijken.
    </p>

    <p>
      Stel dat we de snelheid <span class="formula-inline">v(t)</span>
      als functie van de tijd tekenen.
      Op een klein tijdsinterval kunnen we de snelheid benaderen met
      een constante waarde.
    </p>

    <p>
      De bijbehorende afstand is dan ongeveer:
    </p>

    <p class="formula">
      \\text{afstand} \\approx \\text{hoogte} \\cdot \\text{breedte}
    </p>

    <p>
      Dat is precies de oppervlakte van een rechthoek.
      De totale afgelegde afstand kunnen we daarom benaderen
      door de oppervlakten van veel rechthoeken op te tellen.
    </p>

    <p class="formula">
      s \\approx \\sum_{i=1}^{n} v(t_i^*)\\Delta t
    </p>

    <p>
      Hier is <span class="formula-inline">t_i^*</span> een gekozen punt
      binnen het <span class="formula-inline">i</span>-de kleine interval.
    </p>

    <div class="callout">
      <p><strong>Een belangrijke ontdekking:</strong></p>
      <p>
        Een totale verandering kan geometrisch verschijnen als
        een oppervlakte onder een grafiek.
      </p>
    </div>

    <h3>Steeds kleinere rechthoeken</h3>

    <p>
      Met een klein aantal rechthoeken krijgen we slechts een benadering.
      De grafiek kan binnen elk interval nog behoorlijk veranderen.
    </p>

    <p>
      Daarom maken we de intervallen steeds kleiner:
    </p>

    <p class="formula">
      \\Delta t=1
    </p>

    <p class="formula">
      \\Delta t=0{,}1
    </p>

    <p class="formula">
      \\Delta t=0{,}01
    </p>

    <p class="formula">
      \\Delta t=0{,}001
    </p>

    <p>
      De rechthoeken volgen de grafiek steeds beter.
      In de limiet krijgen we een exacte waarde, wanneer die limiet bestaat.
    </p>

    <p>
      Dit is dezelfde strategie die we in 3.2 gebruikten:
      we vervangen een moeilijk direct probleem door een reeks steeds betere
      benaderingen en onderzoeken vervolgens de limiet.
    </p>

    <h3>De integraal</h3>

    <p>
      De exacte totale hoeveelheid die ontstaat uit deze limiet van
      steeds fijnere sommen noemen we een <strong>integraal</strong>.
    </p>

    <p>
      Voor een functie <span class="formula-inline">f(x)</span> op het interval
      van <span class="formula-inline">a</span> tot <span class="formula-inline">b</span>
      schrijven we:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx
    </p>

    <p>
      Dit is de <strong>bepaalde integraal</strong> van
      <span class="formula-inline">f(x)</span> van
      <span class="formula-inline">a</span> tot
      <span class="formula-inline">b</span>.
    </p>

    <p>
      De notatie vertelt ons dat we de bijdragen van de functie
      over het volledige interval van <span class="formula-inline">a</span>
      tot <span class="formula-inline">b</span> optellen.
    </p>

    <h3>Wat betekenen de onderdelen?</h3>

    <p>In:</p>

    <p class="formula">
      \\int_a^b f(x)\\,dx
    </p>

    <ul>
      <li><span class="formula-inline">∫</span> is het integraalteken;</li>
      <li><span class="formula-inline">a</span> is de ondergrens;</li>
      <li><span class="formula-inline">b</span> is de bovengrens;</li>
      <li><span class="formula-inline">f(x)</span> is de functie die we optellen;</li>
      <li><span class="formula-inline">dx</span> geeft aan dat we integreren met betrekking tot <span class="formula-inline">x</span>.</li>
    </ul>

    <p>
      De letter <span class="formula-inline">x</span> is hier slechts een
      variabele die door het interval loopt.
      We zouden bijvoorbeeld ook <span class="formula-inline">t</span> kunnen gebruiken:
    </p>

    <p class="formula">
      \\int_a^b f(t)\\,dt
    </p>

    <p>
      Het idee blijft hetzelfde.
    </p>

    <h3>De oppervlakte onder een positieve grafiek</h3>

    <p>
      Wanneer <span class="formula-inline">f(x)\\gt0</span> op het volledige interval,
      kunnen we de integraal interpreteren als de oppervlakte tussen de grafiek
      en de x-as.
    </p>

    <p>
      Bijvoorbeeld bij een constante functie:
    </p>

    <p class="formula">
      f(x)=4
    </p>

    <p>
      op het interval van 0 tot 3 ontstaat een rechthoek met hoogte 4
      en breedte 3.
    </p>

    <p class="formula">
      \\int_0^3 4\\,dx = 4\\cdot3 = 12
    </p>

    <p>
      Hier kunnen we de integraal dus rechtstreeks als oppervlakte herkennen.
    </p>

    <div class="callout">
      <p><strong>Maar:</strong></p>
      <p>
        De integraal is meer dan alleen een formule voor oppervlakte.
        De oppervlakte is één belangrijke geometrische interpretatie
        van het algemene idee van opgetelde kleine bijdragen.
      </p>
    </div>

    <h3>Wanneer de grafiek onder de x-as komt</h3>

    <p>
      Stel dat <span class="formula-inline">f(x)</span> negatief is.
      Dan zijn de bijdragen aan de integraal negatief.
    </p>

    <p class="formula">
      f(x)\\lt0
    </p>

    <p>
      Een gebied onder de x-as telt dus niet gewoon als een positieve oppervlakte.
      Het draagt negatief bij aan de integraal.
    </p>

    <p>
      Daarom spreken we bij een bepaalde integraal vaak over
      <strong>gesigneerde oppervlakte</strong> of <strong>netto-oppervlakte</strong>.
    </p>

    <p>
      Een positieve bijdrage en een negatieve bijdrage kunnen elkaar gedeeltelijk
      opheffen.
    </p>

    <div class="callout">
      <p><strong>Belangrijk onderscheid:</strong></p>
      <p>
        Geometrische oppervlakte is altijd positief.
      </p>
      <p>
        Een bepaalde integraal kan positief, negatief of nul zijn,
        omdat de bijdragen een teken hebben.
      </p>
    </div>

    <h3>De integraal als totale verandering</h3>

    <p>
      De geometrische interpretatie is nuttig, maar voor calculus is
      de interpretatie als <strong>opgetelde verandering</strong> nog belangrijker.
    </p>

    <p>
      Stel dat <span class="formula-inline">v(t)</span> de snelheid van een voorwerp is.
      Dan levert een klein tijdsinterval ongeveer de verandering in positie:
    </p>

    <p class="formula">
      \\Delta s \\approx v(t)\\,\\Delta t
    </p>

    <p>
      Als we alle kleine bijdragen optellen en de intervallen steeds kleiner maken,
      krijgen we:
    </p>

    <p class="formula">
      \\Delta s_{\\text{totaal}}
      =
      \\int_a^b v(t)\\,dt
    </p>

    <p>
      De integraal van snelheid over de tijd geeft dus de
      <strong>netto verandering in positie</strong>.
    </p>

    <p>
      Dit idee geldt veel algemener.
      Als <span class="formula-inline">r(t)</span> een veranderingssnelheid
      van een grootheid is, dan kunnen we de totale verandering over een interval
      schrijven als:
    </p>

    <p class="formula">
      \\Delta Q
      =
      \\int_a^b r(t)\\,dt
    </p>

    <p>
      De letters kunnen veranderen, maar de structuur blijft dezelfde:
      we tellen kleine veranderingen op.
    </p>

    <h3>Eenheden controleren</h3>

    <p>
      De eenheden van een integraal volgen logisch uit het idee
      van een kleine bijdrage.
    </p>

    <p>
      Bij snelheid in km/u en tijd in uur krijgen we:
    </p>

    <p class="formula">
      \\frac{\\text{km}}{\\text{u}}\\cdot\\text{u}
      =
      \\text{km}
    </p>

    <p>
      De integraal van snelheid over tijd heeft dus de eenheid van afstand.
    </p>

    <p>
      Dit is een krachtige controle:
      als de eenheden van je integraal niet overeenkomen met de grootheid
      die je probeert te vinden, moet je je model opnieuw bekijken.
    </p>

    <h3>De integraal en de afgeleide kijken in tegengestelde richtingen</h3>

    <p>
      We hebben nu twee fundamentele bewerkingen naast elkaar.
    </p>

    <p class="formula">
      \\text{afgeleide: hoeveelheid} \\rightarrow \\text{veranderingssnelheid}
    </p>

    <p class="formula">
      \\text{integraal: veranderingssnelheid} \\rightarrow \\text{totale verandering}
    </p>

    <p>
      Ze lijken daardoor elkaars omgekeerde te zijn.
      Maar we hebben nog niet uitgelegd <strong>precies hoe</strong>
      deze twee bewerkingen met elkaar verbonden zijn.
    </p>

    <div class="callout">
      <p><strong>Dat is de volgende stap.</strong></p>
      <p>
        In 3.10 onderzoeken we de fundamentele stelling van de calculus:
        de diepe verbinding tussen differentiëren en integreren.
      </p>
    </div>

    <h3>Wat we nog niet nodig hebben</h3>

    <p>
      We hoeven op dit punt nog geen ingewikkelde integralen te kunnen berekenen.
      De belangrijkste stap is begrijpen <strong>wat een integraal betekent</strong>.
    </p>

    <p>
      De exacte berekening van integralen wordt pas veel eenvoudiger
      wanneer we de verbinding met afgeleiden begrijpen.
      Die verbinding vormt het onderwerp van 3.10.
    </p>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>Denken dat een integraal altijd gewoon een positieve oppervlakte is.</li>
      <li>Vergeten dat bijdragen onder de x-as negatief meetellen.</li>
      <li>De onder- en bovengrens van een bepaalde integraal verwarren.</li>
      <li>Vergeten welke grootheid de veranderingssnelheid voorstelt.</li>
      <li>De eenheden van de integraal niet controleren.</li>
      <li>De integraal meteen als een rekenregel zien zonder eerst de betekenis te begrijpen.</li>
    </ul>

    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Bepaal welke grootheid je wilt opbouwen of terugvinden.</li>
      <li>Zoek de bijbehorende veranderingssnelheid.</li>
      <li>Bepaal over welk interval je de verandering wilt kennen.</li>
      <li>Stel de integraal op.</li>
      <li>Controleer het teken en de eenheden.</li>
      <li>Interpreteer het resultaat in de oorspronkelijke context.</li>
    </ol>

    <h3>Van kleine bijdragen naar een nieuwe rekenbewerking</h3>

    <p>
      We zijn vertrokken van een eenvoudig idee:
      een kleine verandering is ongeveer veranderingssnelheid maal een klein interval.
    </p>

    <p class="formula">
      \\Delta Q \\approx r(x)\\,\\Delta x
    </p>

    <p>
      Door alle kleine bijdragen op te tellen krijgen we een steeds betere benadering:
    </p>

    <p class="formula">
      \\sum_{i=1}^{n} r(x_i^*)\\Delta x
    </p>

    <p>
      En wanneer de intervallen steeds kleiner worden, ontstaat de integraal:
    </p>

    <p class="formula">
      \\int_a^b r(x)\\,dx
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Integreren betekent in essentie: kleine bijdragen over een interval
        systematisch optellen.
      </p>
      <p>
        De integraal kan daardoor een oppervlakte voorstellen,
        maar ook een totale verandering, afstand, hoeveelheid energie,
        massa of een andere grootheid die ontstaat uit opgetelde kleine bijdragen.
      </p>
      <p>
        De volgende milestone verklaart waarom deze nieuwe bewerking zo nauw
        verbonden is met de afgeleide.
      </p>
    </div>
`
  },

  {
    id: "3.10",
    title: "De fundamentele stelling van de calculus",
    goal: "Waarom zijn afgeleiden en integralen verbonden?",
    theory: /* html */`
    <h2>De fundamentele stelling van de calculus</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom lijkt differentiëren het omgekeerde van integreren?</li>
      <li>Hoe kunnen we een integraal laten afhangen van een variabele bovengrens?</li>
      <li>Waarom levert de afgeleide van zo'n accumulatiefunctie opnieuw de oorspronkelijke functie op?</li>
      <li>Wat is een primitieve functie?</li>
      <li>Hoe kunnen we een bepaalde integraal berekenen zonder alle rechthoeken afzonderlijk op te tellen?</li>
      <li>Waarom is het verschil tussen twee waarden van een primitieve functie precies de totale verandering?</li>
      <li>Hoe vormt dit de brug naar het echte integraalrekenen van 3.11?</li>
    </ul>

    <p>
      In 3.9 hebben we de integraal opgebouwd vanuit kleine bijdragen.
      We zagen dat we een veranderingssnelheid over een interval kunnen
      optellen om een totale verandering te krijgen.
    </p>

    <div class="callout">
      <p><strong>In 3.8:</strong></p>
      <p>hoeveelheid → veranderingssnelheid</p>
      <p><strong>In 3.9:</strong></p>
      <p>veranderingssnelheid → totale verandering</p>
      <p><strong>Nu:</strong></p>
      <p>we onderzoeken waarom deze twee bewerkingen zo nauw met elkaar verbonden zijn.</p>
    </div>

    <h3>Een verrassende omkering</h3>

    <p>
      3.9 heeft de integraal al opgebouwd als een manier om kleine bijdragen
      op te tellen en zo een totale verandering te verkrijgen. We hoeven dat
      proces hier niet opnieuw op te bouwen. De nieuwe vraag is:
      <strong>waarom is deze integraal wiskundig verbonden met de afgeleide?</strong>
    </p>

    <p>
      We weten uit 3.4 dat de afgeleide een veranderingssnelheid beschrijft.
      Als <span class="formula-inline">s(t)</span> de positie van een voorwerp
      geeft, dan is de snelheid:
    </p>

    <p class="formula">
      s'(t)=v(t)
    </p>

    <p>
      In 3.9 zagen we juist dat we uit de snelheid de totale verandering
      in positie kunnen terugvinden:
    </p>

    <p class="formula">
      \\Delta s=\\int_a^b v(t)\\,dt
    </p>

    <p>
      Dat suggereert iets belangrijks:
    </p>

    <div class="callout">
      <p><strong>
        Differentiëren gaat van een hoeveelheid naar haar veranderingssnelheid.
      </strong></p>
      <p><strong>
        Integreren bouwt een hoeveelheid weer op uit haar veranderingssnelheid.
      </strong></p>
    </div>

    <p>
      De fundamentele stelling van de calculus maakt deze intuïtie exact.
    </p>

    <h3>Van een integraal een functie maken</h3>

    <p>
      In 3.9 gebruikten we bijvoorbeeld:
    </p>

    <p class="formula">
      \\int_a^b f(t)\\,dt
    </p>

    <p>
      Dit levert één getal op: de totale bijdrage van
      <span class="formula-inline">a</span> tot <span class="formula-inline">b</span>.
    </p>

    <p>
      Nu veranderen we één ding.
      We houden de ondergrens vast, maar laten de bovengrens variëren.
    </p>

    <p class="formula">
      F(x)=\\int_a^x f(t)\\,dt
    </p>

    <p>
      Voor iedere waarde van <span class="formula-inline">x</span> krijgen we
      nu een andere integraal en dus een andere uitkomst.
      Daardoor is <span class="formula-inline">F(x)</span> een functie.
    </p>

    <div class="callout">
      <p><strong>
        Een bepaalde integraal is normaal een getal.
        Als één grens zelf varieert, kan die integraal een functie van die grens worden.
      </strong></p>
    </div>

    <h3>Een concreet voorbeeld</h3>

    <p>
      Neem de constante veranderingssnelheid:
    </p>

    <p class="formula">
      f(t)=2
    </p>

    <p>
      We definiëren:
    </p>

    <p class="formula">
      F(x)=\\int_0^x 2\\,dt
    </p>

    <p>
      Dit betekent: hoeveel totale verandering hebben we opgebouwd
      vanaf <span class="formula-inline">t=0</span> tot aan het punt
      <span class="formula-inline">t=x</span>?
    </p>

    <p>
      Omdat de snelheid constant 2 is, weten we uit de rechthoekinterpretatie
      van 3.9 dat:
    </p>

    <p class="formula">
      F(x)=2x
    </p>

    <p>
      En dus:
    </p>

    <p class="formula">
      F'(x)=2
    </p>

    <p>
      De afgeleide van de opgebouwde hoeveelheid is precies de oorspronkelijke
      veranderingssnelheid.
    </p>

    <div class="callout">
      <p><strong>Dit is geen toeval.</strong></p>
      <p>
        Het is precies de eerste helft van de fundamentele stelling van de calculus.
      </p>
    </div>

    <h3>Waarom werkt dit?</h3>

    <p>
      We kunnen het idee begrijpen zonder meteen een formeel bewijs uit te werken.
    </p>

    <p>
      Stel dat:
    </p>

    <p class="formula">
      F(x)=\\int_a^x f(t)\\,dt
    </p>

    <p>
      We verhogen <span class="formula-inline">x</span> een klein beetje,
      met <span class="formula-inline">h</span>.
      Dan ontstaat een extra stukje integraal:
    </p>

    <p class="formula">
      F(x+h)-F(x)
      =
      \\int_x^{x+h} f(t)\\,dt
    </p>

    <p>
      Voor een heel klein interval is die extra bijdrage ongeveer
      de hoogte van de functie maal de breedte:
    </p>

    <p class="formula">
      F(x+h)-F(x) \\approx f(x)h
    </p>

    <p>
      Deel beide kanten door <span class="formula-inline">h</span>:
    </p>

    <p class="formula">
      \\frac{F(x+h)-F(x)}{h}
      \\approx
      f(x)
    </p>

    <p>
      Wanneer <span class="formula-inline">h</span> naar nul gaat,
      wordt de linkerkant de definitie van de afgeleide.
      Daardoor krijgen we:
    </p>

    <p class="formula">
      F'(x)=f(x)
    </p>

    <p>
      De continuïteit van <span class="formula-inline">f</span> zorgt ervoor
      dat deze limiet inderdaad naar <span class="formula-inline">f(x)</span>
      gaat. We hebben hiermee de intuïtieve kern van het eerste deel van
      de stelling gezien. De formele stelling geldt bijvoorbeeld wanneer
      <span class="formula-inline">f</span> continu is op het betreffende interval.
    </p>

    <h3>De eerste helft van de fundamentele stelling</h3>

    <p>
      We kunnen het resultaat nu formeel formuleren.
    </p>

    <div class="callout">
      <p><strong>Fundamentele stelling van de calculus — deel 1</strong></p>
      <p>
        Als <span class="formula-inline">f</span> continu is en
      </p>
      <p class="formula">
        F(x)=\\int_a^x f(t)\\,dt
      </p>
      <p>
        dan geldt:
      </p>
      <p class="formula">
        F'(x)=f(x)
      </p>
    </div>

    <p>
      Let op de richting:
    </p>

    <p class="formula">
      \\text{integraal als accumulatie}
      \\rightarrow
      \\text{afgeleide}
    </p>

    <p>
      De afgeleide haalt als het ware de oorspronkelijke veranderingssnelheid
      weer uit de opgebouwde hoeveelheid.
    </p>

    <h3>Een primitieve functie</h3>

    <p>
      We kunnen dezelfde relatie ook vanuit de andere richting bekijken.
    </p>

    <p>
      Stel dat we een functie <span class="formula-inline">f(x)</span> hebben
      en een andere functie <span class="formula-inline">F(x)</span> waarvoor:
    </p>

    <p class="formula">
      F'(x)=f(x)
    </p>

    <p>
      Dan noemen we <span class="formula-inline">F</span> een
      <strong>primitieve functie</strong> van <span class="formula-inline">f</span>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      F(x)=x^2
    </p>

    <p>
      heeft als afgeleide:
    </p>

    <p class="formula">
      F'(x)=2x
    </p>

    <p>
      Dus <span class="formula-inline">x^2</span> is een primitieve van
      <span class="formula-inline">2x</span>.
    </p>

    <div class="callout">
      <p><strong>Primitieve = de omgekeerde vraag van differentiëren.</strong></p>
      <p>
        Bij differentiëren vragen we:
        <em>wat is de veranderingssnelheid van deze functie?</em>
      </p>
      <p>
        Bij primitiveren vragen we:
        <em>welke functie heeft deze veranderingssnelheid?</em>
      </p>
    </div>

    <h3>Van de primitieve naar een bepaalde integraal</h3>

    <p>
      Nu komt de tweede helft van de fundamentele stelling.
      Stel dat <span class="formula-inline">F</span> een primitieve is van
      <span class="formula-inline">f</span>:
    </p>

    <p class="formula">
      F'(x)=f(x)
    </p>

    <p>
      Dan kunnen we de bepaalde integraal van <span class="formula-inline">a</span>
      tot <span class="formula-inline">b</span> berekenen met alleen de
      eindpunten:
    </p>

    <div class="callout">
      <p><strong>Fundamentele stelling van de calculus — deel 2</strong></p>
      <p>
        Als <span class="formula-inline">F</span> een primitieve is van
        <span class="formula-inline">f</span> op het interval, dan:
      </p>
      <p class="formula">
        \\int_a^b f(x)\\,dx
        =
        F(b)-F(a)
      </p>
    </div>

    <p>
      Dit is een enorme vereenvoudiging.
      In 3.9 hadden we een limiet van steeds fijnere sommen nodig om de integraal
      te begrijpen. Dankzij deze stelling kunnen we de waarde van veel integralen
      rechtstreeks bepalen uit een primitieve functie.
    </p>

    <h3>Een eenvoudig voorbeeld</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=2x
    </p>

    <p>
      We weten uit de afgeleiden van 3.5 dat:
    </p>

    <p class="formula">
      \\frac{d}{dx}(x^2)=2x
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      F(x)=x^2
    </p>

    <p>
      is een primitieve van <span class="formula-inline">f(x)=2x</span>.
      We willen:
    </p>

    <p class="formula">
      \\int_1^3 2x\\,dx
    </p>

    <p>
      Volgens deel 2:
    </p>

    <p class="formula">
      \\int_1^3 2x\\,dx
      =
      F(3)-F(1)
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      =3^2-1^2
      =9-1
      =8
    </p>

    <p>
      De integraal is dus 8.
    </p>

    <p>
      Geometrisch is dit de gesigneerde oppervlakte onder
      <span class="formula-inline">f(x)=2x</span> tussen 1 en 3.
      Maar de stelling laat ons die waarde vinden zonder de rechthoeksommen
      uit 3.9 opnieuw uit te voeren.
    </p>

    <h3>Waarom trekken we de eindpunten van elkaar af?</h3>

    <p>
      Het verschil
    </p>

    <p class="formula">
      F(b)-F(a)
    </p>

    <p>
      heeft een eenvoudige betekenis.
      De functie <span class="formula-inline">F</span> bevat als het ware
      de opgebouwde totale verandering.
      Door de beginwaarde af te trekken van de eindwaarde houden we alleen
      de verandering over die tussen <span class="formula-inline">a</span>
      en <span class="formula-inline">b</span> is opgebouwd.
    </p>

    <p>
      Dat sluit rechtstreeks aan bij wat we al eerder zagen:
    </p>

    <p class="formula">
      \\Delta F=F(b)-F(a)
    </p>

    <p>
      Als <span class="formula-inline">F'(x)=f(x)</span>, dan is die verandering
      precies de integraal van <span class="formula-inline">f</span>:
    </p>

    <p class="formula">
      F(b)-F(a)
      =
      \\int_a^b F'(x)\\,dx
    </p>

    <p>
      En omdat <span class="formula-inline">F'(x)=f(x)</span>:
    </p>

    <p class="formula">
      F(b)-F(a)
      =
      \\int_a^b f(x)\\,dx
    </p>

    <div class="callout">
      <p><strong>Dit is de kernverbinding:</strong></p>
      <p>
        De integraal telt alle kleine veranderingen op.
        De primitieve beschrijft de opgebouwde hoeveelheid.
        Het verschil tussen de eind- en beginwaarde geeft de totale verandering.
      </p>
    </div>

    <h3>De twee richtingen naast elkaar</h3>

    <p>
      We kunnen de fundamentele stelling nu als één grote terugkoppeling zien.
    </p>

    <p class="formula">
      F(x)
      \\xrightarrow{\\text{afgeleide}}
      F'(x)=f(x)
    </p>

    <p class="formula">
      f(x)
      \\xrightarrow{\\text{integreren}}
      F(x)+C
    </p>

    <p>
      De eerste pijl zegt:
      uit een functie halen we haar veranderingssnelheid.
    </p>

    <p>
      De tweede pijl zegt:
      vanuit een veranderingssnelheid kunnen we een familie van primitieve
      functies terugvinden.
    </p>

    <p>
      Voor bepaalde integralen komt daar nog de evaluatieregel bij:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx=F(b)-F(a)
    </p>

    <div class="callout">
      <p><strong>De fundamentele stelling verbindt twee werelden.</strong></p>
      <p>
        Differentiaalrekening beschrijft lokale verandering.
      </p>
      <p>
        Integraalrekening beschrijft opgetelde verandering.
      </p>
      <p>
        De fundamentele stelling laat zien dat deze twee bewerkingen
        fundamenteel met elkaar verbonden zijn.
      </p>
    </div>

    <h3>Een belangrijke controle: differentieer terug</h3>

    <p>
      Wanneer we een primitieve hebben gevonden, kunnen we altijd controleren
      of ze klopt door opnieuw te differentiëren.
    </p>

    <p>
      Stel dat we beweren dat:
    </p>

    <p class="formula">
      F(x)=\\frac{x^3}{3}
    </p>

    <p>
      een primitieve is van:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      Differentieer:
    </p>

    <p class="formula">
      F'(x)=x^2
    </p>

    <p>
      De controle klopt dus.
    </p>

    <div class="callout">
      <p><strong>Werkregel:</strong></p>
      <p>
        Als je een primitieve vindt, differentieer ze opnieuw.
        Krijg je de oorspronkelijke functie terug, dan heb je de juiste relatie gevonden.
      </p>
    </div>

    <h3>Wat gebeurt er met de constante?</h3>

    <p>
      Bij primitieve functies kunnen meerdere functies dezelfde afgeleide hebben.
      Bijvoorbeeld:
    </p>

    <p class="formula">
      F(x)=x^2
    </p>

    <p class="formula">
      G(x)=x^2+5
    </p>

    <p>
      hebben allebei dezelfde afgeleide:
    </p>

    <p class="formula">
      F'(x)=G'(x)=2x
    </p>

    <p>
      Een constante verdwijnt immers bij differentiëren.
      Daarom schrijven we de algemene familie van primitieve functies als:
    </p>

    <p class="formula">
      F(x)+C
    </p>

    <p>
      Voor een <strong>bepaalde integraal</strong> maakt die constante uiteindelijk
      geen verschil:
    </p>

    <p class="formula">
      [F(b)+C]-[F(a)+C]
      =
      F(b)-F(a)
    </p>

    <p>
      De constante valt weg.
      Dat is een van de redenen waarom de formule van deel 2 zo eenvoudig werkt.
    </p>

    <h3>Van totale verandering naar netto verandering</h3>

    <p>
      De stelling sluit ook aan bij het idee van netto verandering uit 3.9.
      Als <span class="formula-inline">F'(x)</span> de veranderingssnelheid
      van een grootheid is, dan:
    </p>

    <p class="formula">
      F(b)-F(a)
      =
      \\int_a^b F'(x)\\,dx
    </p>

    <p>
      Dit betekent:
    </p>

    <div class="callout">
      <p><strong>
        Totale netto verandering =
        integraal van de veranderingssnelheid.
      </strong></p>
    </div>

    <p>
      Voor beweging is dat bijvoorbeeld:
    </p>

    <p class="formula">
      s(b)-s(a)
      =
      \\int_a^b v(t)\\,dt
    </p>

    <p>
      De integraal van de snelheid geeft dus de verandering in positie.
      De fundamentele stelling vertelt ons waarom.
    </p>

    <h3>Wat de stelling niet zegt</h3>

    <p>
      Het is belangrijk om de stelling niet te verwarren met een algemene
      truc waarbij iedere integraal automatisch eenvoudig wordt.
    </p>

    <ul>
      <li>
        We moeten nog steeds een geschikte primitieve kunnen vinden.
      </li>
      <li>
        Niet iedere primitieve volgt onmiddellijk uit een bekende afgeleideregel.
      </li>
      <li>
        Bij ingewikkeldere functies zijn technieken nodig om primitiven te vinden.
      </li>
      <li>
        De betekenis van de integraal blijft die van opgetelde bijdragen;
        de primitieve is een krachtige manier om de waarde ervan te berekenen.
      </li>
    </ul>

    <p>
      Het systematisch vinden van primitieve functies en het toepassen
      van integratieregels komt daarom pas in 3.11.
    </p>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        Denken dat een integraal en een primitieve exact hetzelfde begrip zijn.
      </li>
      <li>
        Vergeten dat bij een primitieve de afgeleide gelijk moet zijn aan de oorspronkelijke functie.
      </li>
      <li>
        Bij een bepaalde integraal de volgorde verwarren:
        <span class="formula-inline">F(b)-F(a)</span>, niet andersom.
      </li>
      <li>
        Denken dat de constante <span class="formula-inline">C</span> de waarde
        van een bepaalde integraal verandert.
      </li>
      <li>
        Een primitieve niet terug differentiëren om het resultaat te controleren.
      </li>
      <li>
        Denken dat de fundamentele stelling alleen over oppervlakte gaat.
      </li>
    </ul>

    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Bepaal welke functie je wilt integreren.</li>
      <li>Zoek een primitieve <span class="formula-inline">F</span> waarvoor <span class="formula-inline">F'(x)=f(x)</span>.</li>
      <li>Differentieer <span class="formula-inline">F</span> opnieuw als controle.</li>
      <li>Gebruik bij een bepaalde integraal de grenzen <span class="formula-inline">a</span> en <span class="formula-inline">b</span>.</li>
      <li>Bereken <span class="formula-inline">F(b)-F(a)</span>.</li>
      <li>Controleer het teken en interpreteer het resultaat.</li>
    </ol>

    <h3>De grote ontdekking van Fase 3 tot nu toe</h3>

    <p>
      We begonnen in 3.1 met een eenvoudige vraag:
      <strong>hoe verandert iets?</strong>
    </p>

    <p>
      Via limieten en afgeleiden leerden we hoe we een ogenblikkelijke
      veranderingssnelheid kunnen beschrijven.
    </p>

    <p>
      In 3.9 draaiden we de richting om:
      we telden kleine veranderingen op met een integraal.
    </p>

    <p>
      Nu zien we waarom die twee ideeën bij elkaar horen.
    </p>

    <p class="formula">
      \\text{hoeveelheid}
      \\xrightarrow{\\text{differentieer}}
      \\text{veranderingssnelheid}
    </p>

    <p class="formula">
      \\text{veranderingssnelheid}
      \\xrightarrow{\\text{integreer}}
      \\text{totale verandering}
    </p>

    <p>
      En de fundamentele stelling maakt deze twee pijlen wiskundig met elkaar verbonden.
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        De fundamentele stelling van de calculus zegt in essentie dat
        differentiëren en integreren elkaars omgekeerde bewerkingen zijn,
        onder de juiste voorwaarden.
      </p>
      <p>
        Deel 1 laat zien dat de afgeleide van een accumulatiefunctie
        de oorspronkelijke functie teruggeeft:
      </p>
      <p class="formula">
        \\frac{d}{dx}\\left(\\int_a^x f(t)\\,dt\\right)=f(x)
      </p>
      <p>
        Deel 2 geeft de praktische evaluatieregel:
      </p>
      <p class="formula">
        \\int_a^b f(x)\\,dx=F(b)-F(a)
      </p>
      <p>
        In 3.11 gebruiken we deze verbinding om integralen systematisch
        te leren berekenen.
      </p>
    </div>
  `
},

  {
  id: "3.11",
  title: "Integraalrekenen",
  goal: "Hoe berekenen we integralen?",
  theory: /* html */`
    <h2>Integraalrekenen</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom hebben we naast de betekenis van een integraal ook rekenmethoden nodig?</li>
      <li>Hoe vinden we een primitieve functie?</li>
      <li>Welke basisregels voor integreren volgen rechtstreeks uit de afgeleideregel?</li>
      <li>Hoe gebruiken we lineariteit en constante factoren?</li>
      <li>Hoe werkt substitutie als verandering van variabele?</li>
      <li>Wanneer is een primitieve een handige route naar een bepaalde integraal?</li>
      <li>Hoe controleren en interpreteren we een integraal die we berekend hebben?</li>
    </ul>

    <p>
      In 3.9 leerden we wat een integraal betekent: kleine bijdragen worden
      opgeteld om een totale verandering of netto-oppervlakte te verkrijgen.
      In 3.10 zagen we waarom integreren en differentiëren met elkaar verbonden
      zijn. Nu komt de praktische vraag:
    </p>

    <div class="callout">
      <p><strong>Hoe kunnen we een integraal systematisch berekenen?</strong></p>
    </div>

    <p>
      We gaan dus niet opnieuw de integraal definiëren. We gebruiken de
      fundamentele stelling van 3.10 als rekeninstrument en bouwen daar een
      kleine verzameling betrouwbare integratieregels rond.
    </p>

    <h3>Van de afgeleide terug naar een functie</h3>

    <p>
      In 3.10 zagen we dat een primitieve functie <span class="formula-inline">F</span>
      voldoet aan:
    </p>

    <p class="formula">
      F'(x)=f(x)
    </p>

    <p>
      Integreren begint dus met de omgekeerde vraag van differentiëren:
    </p>

    <div class="callout">
      <p><strong>Welke functie heeft <span class="formula-inline">f(x)</span> als afgeleide?</strong></p>
    </div>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=2x
    </p>

    <p>
      Uit 3.5 weten we:
    </p>

    <p class="formula">
      \\frac{d}{dx}(x^2)=2x
    </p>

    <p>
      Dus is:
    </p>

    <p class="formula">
      \\int 2x\\,dx=x^2+C
    </p>

    <p>
      Het symbool <span class="formula-inline">C</span> staat voor een willekeurige
      constante. Die hoort erbij omdat elke constante bij differentiëren verdwijnt.
    </p>

    <h3>Waarom staat er een constante bij?</h3>

    <p>
      Kijk naar de functies:
    </p>

    <p class="formula">
      x^2
    </p>

    <p class="formula">
      x^2+3
    </p>

    <p class="formula">
      x^2-10
    </p>

    <p>
      Ze hebben allemaal dezelfde afgeleide:
    </p>

    <p class="formula">
      2x
    </p>

    <p>
      Daarom bestaat er niet één enkele primitieve. Er is een hele familie:
    </p>

    <p class="formula">
      F(x)=x^2+C
    </p>

    <div class="callout">
      <p><strong>Onbepaalde integraal:</strong></p>
      <p>
        Een onbepaalde integraal beschrijft de familie van alle primitieve functies.
      </p>
      <p class="formula">
        \\int f(x)\\,dx=F(x)+C
      </p>
      <p>
        als <span class="formula-inline">F'(x)=f(x)</span>.
      </p>
    </div>

    <h3>De machtsregel omgekeerd</h3>

    <p>
      In 3.5 leerden we de machtsregel voor afgeleiden:
    </p>

    <p class="formula">
      \\frac{d}{dx}(x^n)=nx^{n-1}
    </p>

    <p>
      We kunnen deze regel omkeren. Als <span class="formula-inline">n\\neq-1</span>,
      dan:
    </p>

    <p class="formula">
      \\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C
    </p>

    <p>
      De exponent wordt dus één groter en daarna delen we door die nieuwe exponent.
    </p>

    <p>
      Controleer bijvoorbeeld:
    </p>

    <p class="formula">
      \\int x^4\\,dx=\\frac{x^5}{5}+C
    </p>

    <p>
      Differentieer de rechterkant:
    </p>

    <p class="formula">
      \\frac{d}{dx}\\left(\\frac{x^5}{5}+C\\right)=x^4
    </p>

    <p>
      De oorspronkelijke functie komt terug. Dat is precies de controle die we
      uit 3.10 kennen.
    </p>

    <div class="callout">
      <p><strong>Integreren is hier letterlijk differentiëren achteruit.</strong></p>
      <p>
        De regel is geen los trucje: hij is rechtstreeks afgeleid van de
        machtsregel voor afgeleiden.
      </p>
    </div>

    <h3>De speciale exponent n = −1</h3>

    <p>
      De machtsregel heeft één belangrijk uitzonderingsgeval. Als
      <span class="formula-inline">n=-1</span>, zou de formule delen door nul:
    </p>

    <p class="formula">
      \\frac{x^{(-1)+1}}{(-1)+1}
      =
      \\frac{x^0}{0}
    </p>

    <p>
      Dat kan natuurlijk niet. Voor <span class="formula-inline">1/x</span>
      hebben we daarom een andere primitieve nodig:
    </p>

    <p class="formula">
      \\int \\frac{1}{x}\\,dx=\\ln|x|+C
    </p>

    <p>
      Hier is <span class="formula-inline">\\ln</span> de natuurlijke logaritme.
      De absolute waarde is nodig omdat de afgeleide van
      <span class="formula-inline">\\ln|x|</span> gelijk is aan
      <span class="formula-inline">1/x</span> voor <span class="formula-inline">x\\neq0</span>.
    </p>

    <p>
      Dit is meteen een belangrijke herinnering: niet iedere integraal kan met
      één algemene machtsregel worden behandeld.
    </p>

    <h3>Constante factoren buiten de integraal</h3>

    <p>
      Stel dat een functie met een constante wordt vermenigvuldigd:
    </p>

    <p class="formula">
      f(x)=5x^2
    </p>

    <p>
      De constante 5 verandert de aard van de primitieve niet:
    </p>

    <p class="formula">
      \\int 5x^2\\,dx
      =
      5\\int x^2\\,dx
    </p>

    <p>
      Vervolgens gebruiken we de machtsregel:
    </p>

    <p class="formula">
      5\\int x^2\\,dx
      =
      5\\frac{x^3}{3}+C
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \\int 5x^2\\,dx=\\frac{5x^3}{3}+C
    </p>

    <div class="callout">
      <p><strong>Constante-factorregel:</strong></p>
      <p class="formula">
        \\int cf(x)\\,dx=c\\int f(x)\\,dx
      </p>
    </div>

    <h3>Een som splitsen</h3>

    <p>
      Ook een som mogen we term voor term integreren:
    </p>

    <p class="formula">
      \\int [f(x)+g(x)]\\,dx
      =
      \\int f(x)\\,dx
      +
      \\int g(x)\\,dx
    </p>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">
      \\int (3x^2+4x-5)\\,dx
    </p>

    <p>
      We splitsen de drie termen:
    </p>

    <p class="formula">
      3\\int x^2\\,dx
      +
      4\\int x\\,dx
      -
      5\\int 1\\,dx
    </p>

    <p>
      En integreren elke term afzonderlijk:
    </p>

    <p class="formula">
      x^3+2x^2-5x+C
    </p>

    <p>
      Controleer:
    </p>

    <p class="formula">
      \\frac{d}{dx}(x^3+2x^2-5x+C)
      =
      3x^2+4x-5
    </p>

    <div class="callout">
      <p><strong>Lineariteit maakt een ingewikkelder integraal vaak eenvoudiger:</strong></p>
      <p>
        splits een som en haal constante factoren naar buiten.
      </p>
    </div>

    <h3>Integreren van een constante</h3>

    <p>
      Een constante kunnen we zien als <span class="formula-inline">cx^0</span>.
      De primitieve van een constante <span class="formula-inline">c</span> is:
    </p>

    <p class="formula">
      \\int c\\,dx=cx+C
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \\int 7\\,dx=7x+C
    </p>

    <p>
      Want:
    </p>

    <p class="formula">
      \\frac{d}{dx}(7x+C)=7
    </p>

    <h3>Van onbepaalde naar bepaalde integraal</h3>

    <p>
      Tot nu toe kregen we een familie van primitieve functies.
      Bij een bepaalde integraal hebben we grenzen en zoeken we één getal:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx
    </p>

    <p>
      Volgens de fundamentele stelling van 3.10 zoeken we een primitieve
      <span class="formula-inline">F</span> en gebruiken we:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx=F(b)-F(a)
    </p>

    <p>
      Het is nuttig om het verschil scherp te houden:
    </p>

    <ul>
      <li><strong>onbepaalde integraal:</strong> een familie van primitieve functies;</li>
      <li><strong>bepaalde integraal:</strong> één waarde tussen twee grenzen.</li>
    </ul>

    <h3>Een volledig voorbeeld</h3>

    <p>
      Bereken:
    </p>

    <p class="formula">
      \\int_0^2 (3x^2+2x+1)\\,dx
    </p>

    <p>
      <strong>Stap 1 — zoek een primitieve.</strong>
    </p>

    <p class="formula">
      F(x)=x^3+x^2+x
    </p>

    <p>
      Controle:
    </p>

    <p class="formula">
      F'(x)=3x^2+2x+1
    </p>

    <p>
      <strong>Stap 2 — gebruik de grenzen.</strong>
    </p>

    <p class="formula">
      \\int_0^2 (3x^2+2x+1)\\,dx
      =
      F(2)-F(0)
    </p>

    <p>
      <strong>Stap 3 — vul in.</strong>
    </p>

    <p class="formula">
      =(8+4+2)-(0+0+0)
    </p>

    <p class="formula">
      =14
    </p>

    <p>
      De bepaalde integraal is dus 14.
      Omdat de functie op het interval van 0 tot 2 positief is,
      kunnen we dit hier ook interpreteren als de oppervlakte onder de grafiek.
    </p>

    <h3>Waarom hoeven we C niet te gebruiken?</h3>

    <p>
      Bij een onbepaalde integraal hoort <span class="formula-inline">+C</span>.
      Bij een bepaalde integraal valt dezelfde constante aan beide grenzen weg:
    </p>

    <p class="formula">
      [F(b)+C]-[F(a)+C]=F(b)-F(a)
    </p>

    <p>
      Daarom schrijven we bij de berekening van een bepaalde integraal
      meestal rechtstreeks een primitieve zonder <span class="formula-inline">+C</span>.
    </p>

    <div class="callout">
      <p><strong>Praktisch:</strong></p>
      <p>
        Onbepaalde integraal → schrijf <span class="formula-inline">+C</span>.
      </p>
      <p>
        Bepaalde integraal → bepaal een primitieve en bereken
        <span class="formula-inline">F(b)-F(a)</span>.
      </p>
    </div>

    <h3>Een verandering van variabele</h3>

    <p>
      Niet elke integraal staat meteen in de vorm van een eenvoudige macht.
      Soms zit een functie binnen een andere functie.
    </p>

    <p>
      Kijk bijvoorbeeld naar:
    </p>

    <p class="formula">
      \\int 2x(x^2+1)^3\\,dx
    </p>

    <p>
      We herkennen hier twee delen:
    </p>

    <p class="formula">
      x^2+1
    </p>

    <p class="formula">
      2x
    </p>

    <p>
      De afgeleide van <span class="formula-inline">x^2+1</span> is precies
      <span class="formula-inline">2x</span>. Dat suggereert dat we de binnenste
      uitdrukking tijdelijk een nieuwe naam kunnen geven.
    </p>

    <p class="formula">
      u=x^2+1
    </p>

    <p>
      Differentieer:
    </p>

    <p class="formula">
      du=2x\\,dx
    </p>

    <p>
      De integraal wordt dan:
    </p>

    <p class="formula">
      \\int u^3\\,du
    </p>

    <p>
      Nu kunnen we de machtsregel gebruiken:
    </p>

    <p class="formula">
      \\int u^3\\,du=\\frac{u^4}{4}+C
    </p>

    <p>
      We vervangen <span class="formula-inline">u</span> opnieuw:
    </p>

    <p class="formula">
      \\frac{(x^2+1)^4}{4}+C
    </p>

    <p>
      Dit is de basisgedachte van <strong>substitutie</strong>:
      een ingewikkelde integraal wordt eenvoudiger door een geschikte
      verandering van variabele.
    </p>

    <div class="callout">
      <p><strong>Herkenningspatroon:</strong></p>
      <p>
        Staat er een samengestelde functie en verschijnt haar afgeleide
        als factor? Dan kan substitutie de natuurlijke aanpak zijn.
      </p>
    </div>

    <h3>Substitutie controleren</h3>

    <p>
      Ook hier blijft de controle dezelfde: differentieer het resultaat.
    </p>

    <p class="formula">
      F(x)=\\frac{(x^2+1)^4}{4}
    </p>

    <p class="formula">
      F'(x)
      =
      \\frac{1}{4}\\cdot4(x^2+1)^3\\cdot2x
      =
      2x(x^2+1)^3
    </p>

    <p>
      We krijgen de oorspronkelijke integrand terug. De substitutie klopt dus.
    </p>

    <h3>Bepaalde integralen met substitutie</h3>

    <p>
      Bij een bepaalde integraal moet de verandering van variabele ook in
      de grenzen worden verwerkt. Neem:
    </p>

    <p class="formula">
      \\int_0^1 2x(x^2+1)^3\\,dx
    </p>

    <p>
      Met:
    </p>

    <p class="formula">
      u=x^2+1
    </p>

    <p>
      worden de grenzen:
    </p>

    <p class="formula">
      x=0 \\rightarrow u=1
    </p>

    <p class="formula">
      x=1 \\rightarrow u=2
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \\int_1^2 u^3\\,du
    </p>

    <p>
      en:
    </p>

    <p class="formula">
      =\\left[\\frac{u^4}{4}\\right]_1^2
    </p>

    <p class="formula">
      =\\frac{16}{4}-\\frac{1}{4}
      =\\frac{15}{4}
    </p>

    <p>
      We kunnen dus óf teruggaan naar <span class="formula-inline">x</span>
      en daar de grenzen gebruiken, óf bij een definitieve substitutie de
      grenzen meteen omzetten.
    </p>

    <div class="callout">
      <p><strong>Belangrijk:</strong> verander je de variabele volledig naar
      <span class="formula-inline">u</span>, verander dan ook de grenzen.
      Zo voorkom je dat <span class="formula-inline">u</span> en
      <span class="formula-inline">x</span> door elkaar lopen.</p>
    </div>

    <h3>Integreren en differentiëren naast elkaar</h3>

    <p>
      We kunnen de belangrijkste relatie van deze milestone samenvatten:
    </p>

    <p class="formula">
      \\frac{d}{dx}(F(x))=f(x)
      \\Longleftrightarrow
      \\int f(x)\\,dx=F(x)+C
    </p>

    <p>
      In de praktijk gebruiken we de link meestal zo:
    </p>

    <ol>
      <li>herken de vorm van de integrand;</li>
      <li>zoek een geschikte primitieve;</li>
      <li>differentieer de primitieve als controle;</li>
      <li>gebruik bij grenzen de fundamentele stelling.</li>
    </ol>

    <h3>Wat met producten en ingewikkelde functies?</h3>

    <p>
      De regels van 3.11 zijn krachtig, maar niet volledig.
      Een product van twee functies is bijvoorbeeld niet in het algemeen
      op te lossen door beide factoren afzonderlijk te integreren:
    </p>

    <p class="formula">
      \\int f(x)g(x)\\,dx
      \\neq
      \\left(\\int f(x)\\,dx\\right)
      \\left(\\int g(x)\\,dx\\right)
    </p>

    <p>
      Dat zou ook niet stroken met de productregel voor afgeleiden.
      Voor sommige producten is <strong>partiële integratie</strong> nodig.
      Voor andere vormen zijn bijvoorbeeld trigonometrische technieken of
      verdere substituties geschikt.
    </p>

    <p>
      We behandelen zulke technieken niet als losse trucjes in deze eerste
      kennismaking. Het belangrijke inzicht is:
    </p>

    <div class="callout">
      <p><strong>Niet elke integraal heeft dezelfde rekenroute.</strong></p>
      <p>
        Eerst herken je de structuur; daarna kies je de techniek die bij die
        structuur past.
      </p>
    </div>

    <h3>Een korte techniekkaart</h3>

    <ul>
      <li>
        <strong>macht van x:</strong>
        gebruik de omgekeerde machtsregel.
      </li>
      <li>
        <strong>som of verschil:</strong>
        splits term voor term.
      </li>
      <li>
        <strong>constante factor:</strong>
        haal de constante buiten de integraal.
      </li>
      <li>
        <strong>samengestelde functie met passende afgeleide:</strong>
        probeer substitutie.
      </li>
      <li>
        <strong>product van functies:</strong>
        controleer of een andere techniek nodig is; niet zomaar factoren
        afzonderlijk integreren.
      </li>
    </ul>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        De machtsregel gebruiken voor <span class="formula-inline">1/x</span>
        en daardoor delen door nul.
      </li>
      <li>
        Bij een onbepaalde integraal <span class="formula-inline">+C</span> vergeten.
      </li>
      <li>
        Bij een bepaalde integraal <span class="formula-inline">F(a)-F(b)</span>
        schrijven in plaats van <span class="formula-inline">F(b)-F(a)</span>.
      </li>
      <li>
        Een gevonden primitieve niet terug differentiëren.
      </li>
      <li>
        Bij substitutie <span class="formula-inline">x</span> en
        <span class="formula-inline">u</span> door elkaar gebruiken.
      </li>
      <li>
        Bij een bepaalde integraal de grenzen niet aanpassen wanneer de
        substitutie volledig in de nieuwe variabele wordt uitgevoerd.
      </li>
      <li>
        Denken dat integreren over een product hetzelfde werkt als
        integreren over een som.
      </li>
      <li>
        Vergeten dat een integraal een gesigneerde grootheid kan zijn.
        De interpretatie van 3.9 blijft gelden.
      </li>
    </ul>

    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Lees de integrand en zoek eerst naar de structuur.</li>
      <li>Splits sommen en haal constante factoren naar buiten.</li>
      <li>Probeer een basisregel of de omgekeerde machtsregel.</li>
      <li>Herken je een samengestelde functie met haar afgeleide? Probeer substitutie.</li>
      <li>Controleer een primitieve door te differentiëren.</li>
      <li>Heeft de integraal grenzen? Gebruik dan <span class="formula-inline">F(b)-F(a)</span>.</li>
      <li>Controleer teken, grenzen en eenheden wanneer die betekenisvol zijn.</li>
    </ol>

    <h3>Van rekenen naar kiezen</h3>

    <p>
      In het begin lijkt integreren misschien op een verzameling regels.
      Maar de echte vaardigheid is niet alleen de regels onthouden.
      Het is leren herkennen <strong>welke structuur een integraal heeft</strong>.
    </p>

    <p>
      Dat is een belangrijke stap in calculus. Bij differentiëren leerden we
      verschillende regels combineren. Bij integreren moeten we vaak de
      omgekeerde structuur herkennen.
    </p>

    <div class="callout">
      <p><strong>De centrale vraag is niet alleen:</strong></p>
      <p>“Welke regel ken ik?”</p>
      <p><strong>maar:</strong></p>
      <p>“Welke structuur zie ik in deze integraal?”</p>
    </div>

    <h3>De plaats van 3.11 in Fase 3</h3>

    <p>
      De lijn van de vorige milestones wordt nu concreet:
    </p>

    <p class="formula">
      \\text{gemiddelde verandering}
      \\rightarrow
      \\text{limiet}
      \\rightarrow
      \\text{afgeleide}
    </p>

    <p class="formula">
      \\text{afgeleide}
      \\rightarrow
      \\text{veranderingssnelheid}
      \\rightarrow
      \\text{integraal}
    </p>

    <p>
      In 3.9 leerden we de integraal begrijpen.
      In 3.10 leerden we waarom ze verbonden is met de afgeleide.
      In 3.11 leren we de belangrijkste manieren om die verbinding
      daadwerkelijk als rekenmethode te gebruiken.
    </p>

    <p>
      In 3.12 verschuift de vraag opnieuw:
      niet langer <em>hoe berekenen we een integraal?</em>,
      maar <strong>wat kunnen we ermee berekenen?</strong>
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Integreren is de omgekeerde richting van differentiëren.
        We zoeken een primitieve functie en gebruiken vervolgens de
        fundamentele stelling om bepaalde integralen te evalueren.
      </p>
      <p>
        De basisgereedschappen zijn de omgekeerde machtsregel,
        lineariteit en substitutie. Een goede integrator herkent eerst
        de structuur van de functie en kiest daarna de passende techniek.
      </p>
    </div>
  `
},

  {
    id: "3.12",
    title: "Toepassingen van integralen",
    goal: "Wat kunnen we met integralen?",
    theory: `
    <h2>Toepassingen van integralen</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Hoe gebruiken we integralen om oppervlaktes te berekenen?</li>
      <li>Hoe vinden we de oppervlakte tussen twee grafieken?</li>
      <li>Hoe kunnen we uit een veranderingssnelheid een totale verandering vinden?</li>
      <li>Hoe berekenen we afstand wanneer een snelheid van teken verandert?</li>
      <li>Hoe vinden we het volume van een lichaam uit dunne doorsneden?</li>
      <li>Wat betekent de gemiddelde waarde van een functie?</li>
      <li>Hoe herkennen we welke grootheid we moeten optellen?</li>
    </ul>

    <p>
      In 3.9 leerden we dat een integraal kleine bijdragen optelt.
      In 3.10 zagen we waarom integralen en afgeleiden verbonden zijn.
      In 3.11 leerden we hoe we integralen kunnen berekenen.
    </p>

    <div class="callout">
      <p><strong>Nu draaien we de vraag om:</strong></p>
      <p>
        Wat kunnen we met een integraal berekenen?
      </p>
    </div>

    <p>
      Het belangrijkste nieuwe inzicht is dat een integraal geen
      "oppervlakteformule" is. De integraal is een algemene optelsom.
      De betekenis van het resultaat hangt af van <strong>wat de kleine
      bijdrage voorstelt</strong>.
    </p>

    <h3>Van kleine bijdrage naar concrete grootheid</h3>

    <p>
      Stel dat een grootheid op elk klein stukje van een interval een
      bijdrage levert. Dan kunnen we die bijdragen optellen:
    </p>

    <p class="formula">
      \\text{totale hoeveelheid}
      =
      \\int_a^b \\text{kleine bijdrage}
    </p>

    <p>
      In een grafiek kan de kleine bijdrage bijvoorbeeld een smalle
      rechthoek zijn:
    </p>

    <p class="formula">
      \\Delta A \\approx f(x)\\,\\Delta x
    </p>

    <p>
      Wanneer we alle kleine bijdragen over het interval optellen,
      krijgen we in de limiet:
    </p>

    <p class="formula">
      A=\\int_a^b f(x)\\,dx
    </p>

    <p>
      Maar dezelfde structuur kan ook een verandering in positie,
      een volume, een massa of een andere opgebouwde grootheid voorstellen.
    </p>

    <div class="callout">
      <p><strong>De integraal vertelt niet vanzelf wat je berekent.</strong></p>
      <p>
        Je moet eerst begrijpen wat één kleine bijdrage betekent.
      </p>
    </div>

    <h3>Oppervlakte onder een positieve grafiek</h3>

    <p>
      De bekendste toepassing is de oppervlakte onder een grafiek.
      Als <span class="formula-inline">f(x)≥0</span> op het interval
      <span class="formula-inline">[a,b]</span>, dan is:
    </p>

    <p class="formula">
      A=\\int_a^b f(x)\\,dx
    </p>

    <p>
      de gewone geometrische oppervlakte tussen de grafiek en de
      <span class="formula-inline">x</span>-as.
    </p>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      tussen <span class="formula-inline">x=0</span> en
      <span class="formula-inline">x=2</span>.
      Uit 3.11 weten we dat een primitieve is:
    </p>

    <p class="formula">
      F(x)=\\frac{x^3}{3}
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      A=\\int_0^2 x^2\\,dx
      =F(2)-F(0)
      =\\frac{8}{3}
    </p>

    <p>
      De integraal heeft hier de betekenis van een oppervlakte.
    </p>

    <h3>Wanneer de grafiek onder de x-as komt</h3>

    <p>
      Een integraal telt positieve en negatieve bijdragen met hun teken.
      Als <span class="formula-inline">f(x)&lt;0</span>, dragen de kleine
      rechthoeken dus negatief bij.
    </p>

    <p>
      Daardoor geeft:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx
    </p>

    <p>
      de <strong>netto-oppervlakte</strong>, niet noodzakelijk de totale
      geometrische oppervlakte.
    </p>

    <p>
      Stel bijvoorbeeld dat een grafiek eerst boven de as ligt en daarna
      even ver onder de as. De positieve en negatieve bijdragen kunnen
      elkaar gedeeltelijk of volledig opheffen.
    </p>

    <div class="callout">
      <p><strong>Integraal = gesigneerde optelsom.</strong></p>
      <p>
        Positieve bijdragen tellen positief mee, negatieve bijdragen
        negatief.
      </p>
    </div>

    <h3>Totale geometrische oppervlakte</h3>

    <p>
      Soms willen we juist dat alle oppervlakten positief meetellen.
      Dan moeten we de delen onder de <span class="formula-inline">x</span>-as
      positief maken.
    </p>

    <p class="formula">
      A=\\int_a^b |f(x)|\\,dx
    </p>

    <p>
      Hiervoor moet je eerst weten waar de functie van teken verandert.
      In de praktijk splits je het interval op bij de nulpunten van
      <span class="formula-inline">f</span>.
    </p>

    <p>
      Stel dat <span class="formula-inline">f</span> een nulpunt heeft
      bij <span class="formula-inline">c</span> en positief is links van
      <span class="formula-inline">c</span> maar negatief rechts ervan.
      Dan:
    </p>

    <p class="formula">
      A
      =
      \\int_a^c f(x)\\,dx
      -
      \\int_c^b f(x)\\,dx
    </p>

    <p>
      Het minteken verandert het negatieve stuk in een positieve
      geometrische oppervlakte.
    </p>

    <h3>Oppervlakte tussen twee grafieken</h3>

    <p>
      Een integraal kan ook de oppervlakte tussen twee functies berekenen.
      Stel dat <span class="formula-inline">f(x)</span> boven
      <span class="formula-inline">g(x)</span> ligt op
      <span class="formula-inline">[a,b]</span>.
    </p>

    <p>
      Op een klein stukje is de verticale afstand:
    </p>

    <p class="formula">
      f(x)-g(x)
    </p>

    <p>
      De kleine oppervlakte is dan ongeveer:
    </p>

    <p class="formula">
      \\Delta A
      \\approx
      [f(x)-g(x)]\\,\\Delta x
    </p>

    <p>
      Daarom is de totale oppervlakte:
    </p>

    <p class="formula">
      A=\\int_a^b [f(x)-g(x)]\\,dx
    </p>

    <div class="callout">
      <p><strong>Bij oppervlakte tussen grafieken:</strong></p>
      <p>
        bovenste functie − onderste functie.
      </p>
    </div>

    <p>
      Neem bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=x+2
    </p>

    <p class="formula">
      g(x)=x
    </p>

    <p>
      Tussen <span class="formula-inline">x=0</span> en
      <span class="formula-inline">x=3</span> is de verticale afstand
      overal 2. De oppervlakte is:
    </p>

    <p class="formula">
      A=\\int_0^3 [(x+2)-x]\\,dx
      =\\int_0^3 2\\,dx
      =6
    </p>

    <h3>De grenzen zijn deel van het probleem</h3>

    <p>
      Bij toepassingen zijn de grenzen niet zomaar cijfers die je in
      een formule invult. Ze vertellen <strong>over welk gebied of welke
      periode</strong> je optelt.
    </p>

    <p>
      Bij een oppervlakte zijn ze bijvoorbeeld de begin- en eindwaarde
      van <span class="formula-inline">x</span>.
      Bij beweging kunnen ze begin- en eindtijd zijn.
      Bij een volume kunnen ze begin- en eindpositie langs een as zijn.
    </p>

    <div class="callout">
      <p><strong>Vraag altijd:</strong></p>
      <p>
        Wat stelt de ondergrens voor? Wat stelt de bovengrens voor?
      </p>
    </div>

    <h3>Van snelheid naar verplaatsing</h3>

    <p>
      We zagen in 3.9 al dat een snelheid een veranderingssnelheid van
      positie is. Als:
    </p>

    <p class="formula">
      s'(t)=v(t)
    </p>

    <p>
      dan geeft de fundamentele stelling:
    </p>

    <p class="formula">
      s(b)-s(a)=\\int_a^b v(t)\\,dt
    </p>

    <p>
      De integraal van de snelheid over een tijdsinterval geeft dus de
      <strong>verplaatsing</strong>: eindpositie minus beginpositie.
    </p>

    <p>
      Neem bijvoorbeeld een constante snelheid:
    </p>

    <p class="formula">
      v(t)=60
    </p>

    <p>
      gedurende 2 uur. Dan:
    </p>

    <p class="formula">
      \\Delta s
      =
      \\int_0^2 60\\,dt
      =
      120
    </p>

    <p>
      Als de eenheid van <span class="formula-inline">v</span> km/u is,
      is de uitkomst 120 km.
    </p>

    <h3>Verplaatsing is niet hetzelfde als afgelegde afstand</h3>

    <p>
      Hier ontstaat een belangrijk onderscheid. Verplaatsing houdt rekening
      met de richting. Afstand niet.
    </p>

    <p>
      Stel dat een voorwerp eerst vooruit beweegt en daarna terugkeert.
      De snelheid verandert dan van teken.
    </p>

    <p>
      De verplaatsing is:
    </p>

    <p class="formula">
      \\Delta s=\\int_a^b v(t)\\,dt
    </p>

    <p>
      De totale afgelegde afstand is:
    </p>

    <p class="formula">
      d=\\int_a^b |v(t)|\\,dt
    </p>

    <p>
      Bij afstand tellen we alle kleine afgelegde stukjes positief op.
      Daarom is de absolute waarde nodig.
    </p>

    <div class="callout">
      <p><strong>Verplaatsing:</strong> richting telt mee.</p>
      <p><strong>Afstand:</strong> alle afgelegde stukjes tellen positief mee.</p>
    </div>

    <h3>Een concreet bewegingsvoorbeeld</h3>

    <p>
      Stel dat:
    </p>

    <p class="formula">
      v(t)=t-2
    </p>

    <p>
      voor <span class="formula-inline">0≤t≤4</span>.
      De snelheid is negatief vóór <span class="formula-inline">t=2</span>
      en positief erna.
    </p>

    <p>
      De totale verplaatsing is eenvoudig:
    </p>

    <p class="formula">
      \\int_0^4 (t-2)\\,dt
      =0
    </p>

    <p>
      Het voorwerp eindigt dus op dezelfde positie als waar het begon.
      Maar dat betekent niet dat het niet bewogen heeft.
    </p>

    <p>
      De afgelegde afstand is:
    </p>

    <p class="formula">
      \\int_0^2 |t-2|\\,dt
      +
      \\int_2^4 |t-2|\\,dt
      =4
    </p>

    <p>
      De twee bewegingen heffen elkaar op voor de verplaatsing,
      maar niet voor de afstand.
    </p>

    <h3>Van doorsneden naar volume</h3>

    <p>
      Tot nu toe telden we vooral kleine oppervlaktes op.
      Hetzelfde idee werkt voor volume.
    </p>

    <p>
      Stel dat een driedimensionaal lichaam op positie
      <span class="formula-inline">x</span> een doorsnede heeft met
      oppervlakte <span class="formula-inline">A(x)</span>.
    </p>

    <p>
      Een heel dun plakje met dikte <span class="formula-inline">dx</span>
      heeft ongeveer volume:
    </p>

    <p class="formula">
      dV\\approx A(x)\\,dx
    </p>

    <p>
      Alle plakjes samen geven:
    </p>

    <p class="formula">
      V=\\int_a^b A(x)\\,dx
    </p>

    <div class="callout">
      <p><strong>Volume = optelsom van dunne doorsneden.</strong></p>
      <p>
        De doorsnede bepaalt de grootte van één klein volumestuk.
      </p>
    </div>

    <h3>Een eenvoudig voorbeeld van een volume</h3>

    <p>
      Neem een cilinder met constante doorsnede. Als de straal
      <span class="formula-inline">r</span> constant is, heeft iedere
      doorsnede oppervlakte:
    </p>

    <p class="formula">
      A(x)=\\pi r^2
    </p>

    <p>
      Over een lengte <span class="formula-inline">h</span> wordt het volume:
    </p>

    <p class="formula">
      V=\\int_0^h \\pi r^2\\,dx
    </p>

    <p>
      Omdat de doorsnede constant is:
    </p>

    <p class="formula">
      V=\\pi r^2h
    </p>

    <p>
      We krijgen dus de bekende formule voor het volume van een cilinder
      opnieuw, maar nu vanuit hetzelfde algemene principe:
      <strong>kleine volumes optellen</strong>.
    </p>

    <h3>Waarom dit meer is dan een truc voor cilinders</h3>

    <p>
      Bij een cilinder is de doorsnede overal hetzelfde. Bij een kegel,
      bol of ander lichaam kan de doorsnede veranderen met
      <span class="formula-inline">x</span>.
    </p>

    <p>
      Dan wordt:
    </p>

    <p class="formula">
      V=\\int_a^b A(x)\\,dx
    </p>

    <p>
      juist krachtig. We hoeven geen eenvoudige vaste-vormformule te
      hebben. We moeten alleen kunnen beschrijven hoe groot een dunne
      doorsnede is.
    </p>

    <h3>Gemiddelde waarde van een functie</h3>

    <p>
      Een andere toepassing is de <strong>gemiddelde waarde</strong> van
      een functie op een interval.
    </p>

    <p>
      Bij gewone getallen berekenen we een gemiddelde door op te tellen
      en te delen door het aantal waarden. Bij een continue functie zijn
      er oneindig veel waarden. De integraal vervult de rol van die
      optelsom.
    </p>

    <p>
      De gemiddelde waarde van <span class="formula-inline">f</span> op
      <span class="formula-inline">[a,b]</span> is:
    </p>

    <p class="formula">
      f_{\\text{gem}}
      =
      \\frac{1}{b-a}
      \\int_a^b f(x)\\,dx
    </p>

    <p>
      We delen dus de totale gesommeerde bijdrage door de lengte van
      het interval.
    </p>

    <h3>Een voorbeeld van een gemiddelde waarde</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x)=x
    </p>

    <p>
      op het interval <span class="formula-inline">[0,4]</span>.
      Dan:
    </p>

    <p class="formula">
      f_{\\text{gem}}
      =
      \\frac{1}{4}
      \\int_0^4 x\\,dx
    </p>

    <p class="formula">
      =
      \\frac{1}{4}
      \\left[\\frac{x^2}{2}\\right]_0^4
      =2
    </p>

    <p>
      De gemiddelde waarde is dus 2. Dat is precies het midden van de
      waarden die de functie op dit interval aanneemt.
    </p>

    <div class="callout">
      <p><strong>De integraal telt op; delen door de interval-lengte maakt er een gemiddelde van.</strong></p>
    </div>

    <h3>Een integraal met een fysieke betekenis</h3>

    <p>
      Dezelfde structuur komt voortdurend terug in de natuurkunde.
      Als een grootheid per tijdseenheid wordt opgebouwd, kan integreren
      de totale hoeveelheid geven.
    </p>

    <p>
      Bij snelheid zagen we:
    </p>

    <p class="formula">
      \\text{verplaatsing}
      =
      \\int \\text{snelheid}\\,dt
    </p>

    <p>
      Als bijvoorbeeld een massastroom <span class="formula-inline">q(t)</span>
      in kilogram per seconde wordt gegeven, dan is de totale massa die
      in een tijdsinterval passeert:
    </p>

    <p class="formula">
      m=\\int_a^b q(t)\\,dt
    </p>

    <p>
      De eenheden controleren de betekenis:
    </p>

    <p class="formula">
      \\frac{\\text{kg}}{\\text{s}}\\times\\text{s}
      =
      \\text{kg}
    </p>

    <div class="callout">
      <p><strong>Eenheden zijn een krachtige controle bij toepassingen.</strong></p>
      <p>
        De integraal vermenigvuldigt in essentie een grootheid met de
        eenheid van de integratievariabele en telt die bijdragen op.
      </p>
    </div>

    <h3>Een algemene strategie voor toepassingen</h3>

    <p>
      Bij toepassingen is de moeilijkste stap vaak niet het rekenen,
      maar het opstellen van de juiste integraal.
    </p>

    <ol>
      <li>Bepaal <strong>wat</strong> je wilt berekenen.</li>
      <li>Identificeer één kleine bijdrage.</li>
      <li>Bepaal welke grootheid die bijdrage beschrijft.</li>
      <li>Kies de integratievariabele.</li>
      <li>Bepaal de grenzen.</li>
      <li>Schrijf de integraal vóór je gaat rekenen.</li>
      <li>Bereken de integraal met de technieken van 3.11.</li>
      <li>Controleer teken, eenheden en grootteorde.</li>
      <li>Vertaal het resultaat terug naar de oorspronkelijke situatie.</li>
    </ol>

    <h3>Welke integraal heb je nodig?</h3>

    <p>
      Een handige manier om een toepassing te herkennen is te vragen:
      <strong>wat is de kleine bijdrage?</strong>
    </p>

    <ul>
      <li>
        kleine oppervlakte:
        <span class="formula-inline">f(x)\\,dx</span>
      </li>
      <li>
        kleine verplaatsing:
        <span class="formula-inline">v(t)\\,dt</span>
      </li>
      <li>
        klein volume:
        <span class="formula-inline">A(x)\\,dx</span>
      </li>
      <li>
        kleine hoeveelheid uit een stroom:
        <span class="formula-inline">q(t)\\,dt</span>
      </li>
    </ul>

    <p>
      De integratietechniek kan telkens dezelfde zijn. Wat verandert,
      is de <strong>interpretatie van de integrand</strong>.
    </p>

    <h3>Wat moet je niet verwarren?</h3>

    <ul>
      <li>
        <strong>netto-oppervlakte</strong> houdt rekening met het teken;
      </li>
      <li>
        <strong>totale geometrische oppervlakte</strong> telt alle delen positief;
      </li>
      <li>
        <strong>verplaatsing</strong> houdt rekening met richting;
      </li>
      <li>
        <strong>afstand</strong> telt alle afgelegde beweging positief;
      </li>
        <li>
        <strong>gemiddelde waarde</strong> is een integraal gedeeld door
        de lengte van het interval;
      </li>
      <li>
        <strong>volume</strong> ontstaat door kleine doorsneden op te tellen.
      </li>
    </ul>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        Een integraal automatisch als gewone oppervlakte interpreteren.
      </li>
      <li>
        Verplaatsing verwarren met totale afstand.
      </li>
      <li>
        Bij een gebied tussen grafieken de onderste functie niet aftrekken.
      </li>
      <li>
        Vergeten het interval op te splitsen wanneer een functie van teken verandert.
      </li>
      <li>
        Verkeerde grenzen gebruiken omdat niet eerst is bepaald wat het
        interval fysisch of geometrisch voorstelt.
      </li>
      <li>
        Een resultaat zonder eenheid of zonder betekenis voor de oorspronkelijke
        situatie geven.
      </li>
      <li>
        Meteen beginnen rekenen zonder eerst de kleine bijdrage te identificeren.
      </li>
    </ul>

    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Lees de situatie en bepaal de gevraagde grootheid.</li>
      <li>Maak duidelijk wat één klein stukje betekent.</li>
      <li>Schrijf de kleine bijdrage.</li>
      <li>Bouw daaruit de integraal op.</li>
      <li>Bepaal de juiste grenzen.</li>
      <li>Bereken de integraal met een passende techniek uit 3.11.</li>
      <li>Controleer teken, eenheden en grootteorde.</li>
      <li>Interpreteer het antwoord in de context.</li>
    </ol>

    <h3>De rode draad van 3.9 tot 3.12</h3>

    <p>
      In 3.9 leerden we de integraal zien als een limiet van steeds fijnere
      optelsommen.
    </p>

    <p>
      In 3.10 kregen we de fundamentele stelling:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx=F(b)-F(a)
    </p>

    <p>
      In 3.11 leerden we primitieve functies en integratietechnieken vinden.
    </p>

    <p>
      Nu gebruiken we die gereedschappen om concrete grootheden te berekenen:
    </p>

    <p class="formula">
      \\text{kleine bijdragen}
      \\rightarrow
      \\text{integraal}
      \\rightarrow
      \\text{totale grootheid}
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een integraal is een algemene manier om oneindig veel kleine
        bijdragen op te tellen. De toepassing bepaalt wat die bijdragen
        voorstellen: oppervlakte, verplaatsing, afstand, volume,
        gemiddelde waarde of een andere opgebouwde hoeveelheid.
      </p>
      <p>
        De belangrijkste vaardigheid is daarom niet alleen een integraal
        kunnen uitrekenen, maar een situatie kunnen vertalen naar de
        juiste kleine bijdrage, grenzen en interpretatie.
      </p>
    </div>

    <h3>Brug naar 3.13</h3>

    <p>
      Tot nu toe veranderde meestal één onafhankelijke variabele tegelijk.
      We konden bijvoorbeeld een grootheid beschrijven als functie van
      <span class="formula-inline">x</span> of van tijd <span class="formula-inline">t</span>.
    </p>

    <p>
      Maar veel verschijnselen hangen tegelijk af van meerdere grootheden.
      Een temperatuur kan bijvoorbeeld afhangen van plaats én tijd:
    </p>

    <p class="formula">
      T=T(x,y,t)
    </p>

    <p>
      Dan ontstaat een nieuwe vraag:
    </p>

    <div class="callout">
      <p><strong>Wat verandert er als meerdere variabelen tegelijk veranderen?</strong></p>
    </div>

    <p>
      Dat is het vertrekpunt van 3.13: functies van meerdere variabelen.
    </p>
  `
  },

  {
    id: "3.13",
    title: "Functies van meerdere variabelen",
    goal: "Wat verandert er als meerdere grootheden tegelijk veranderen?",
    theory: `
    <h2>Functies van meerdere variabelen</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Wat verandert er wanneer een grootheid van meerdere invoeren afhangt?</li>
      <li>Hoe beschrijven we een functie van twee of meer variabelen?</li>
      <li>Hoe kunnen we een functie van twee variabelen geometrisch voorstellen?</li>
      <li>Wat betekent veranderen in één richting terwijl andere variabelen vast blijven?</li>
      <li>Hoe ontstaat het idee van een partiële afgeleide?</li>
      <li>Wat betekent de gradiënt van een functie?</li>
      <li>Waarom hebben we voor verandering in meerdere richtingen uiteindelijk vectoren nodig?</li>
    </ul>

    <p>
      In de vorige milestones beschreven we functies meestal met één
      onafhankelijke variabele:
    </p>

    <p class="formula">
      y=f(x)
    </p>

    <p>
      In 3.12 zagen we al dat echte toepassingen vaak meerdere grootheden
      tegelijk kunnen bevatten. Denk bijvoorbeeld aan temperatuur:
    </p>

    <p class="formula">
      T=T(x,y,t)
    </p>

    <p>
      De temperatuur kan afhangen van de plaats
      <span class="formula-inline">x</span>,
      de plaats <span class="formula-inline">y</span>
      én het tijdstip <span class="formula-inline">t</span>.
    </p>

    <div class="callout">
      <p><strong>De nieuwe vraag:</strong></p>
      <p>
        Hoe beschrijven en meten we verandering wanneer meerdere variabelen
        tegelijk invloed hebben op een grootheid?
      </p>
    </div>

    <h3>Van één invoer naar twee invoeren</h3>

    <p>
      Een gewone functie kan bijvoorbeeld zeggen:
      bij iedere waarde van <span class="formula-inline">x</span> hoort één
      waarde van <span class="formula-inline">y</span>.
    </p>

    <p class="formula">
      y=f(x)
    </p>

    <p>
      Maar stel dat een grootheid van twee getallen afhangt.
      Bijvoorbeeld:
    </p>

    <p class="formula">
      z=f(x,y)
    </p>

    <p>
      Nu hebben we twee invoervariabelen, <span class="formula-inline">x</span>
      en <span class="formula-inline">y</span>, en één uitvoer
      <span class="formula-inline">z</span>.
    </p>

    <p>
      Een eenvoudig voorbeeld is:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      Voor elk paar <span class="formula-inline">(x,y)</span> krijgen we
      precies één waarde van <span class="formula-inline">f</span>.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      f(1,2)=1^2+2^2=5
    </p>

    <div class="callout">
      <p><strong>Een functie van twee variabelen koppelt een punt
      <span class="formula-inline">(x,y)</span> aan één uitvoerwaarde.</strong></p>
    </div>

    <h3>Het domein wordt een vlak</h3>

    <p>
      Bij een functie van één variabele konden we het domein voorstellen
      op een getallenlijn.
    </p>

    <p>
      Bij twee invoervariabelen hebben we twee richtingen nodig.
      Het domein ligt daarom in een vlak met een
      <span class="formula-inline">x</span>- en een
      <span class="formula-inline">y</span>-as.
    </p>

    <p>
      Een invoer is nu geen enkel getal meer, maar een punt:
    </p>

    <p class="formula">
      (x,y)
    </p>

    <p>
      De functie geeft aan dat punt een hoogte:
    </p>

    <p class="formula">
      z=f(x,y)
    </p>

    <p>
      We kunnen de twee invoervariabelen dus zien als positie in een vlak
      en de uitvoer als een hoogte boven dat vlak.
    </p>

    <div class="callout">
      <p><strong>Bij twee variabelen:</strong></p>
      <p>
        <span class="formula-inline">(x,y)</span> bepaalt de positie,
        <span class="formula-inline">z=f(x,y)</span> bepaalt de hoogte.
      </p>
    </div>

    <h3>De grafiek wordt een oppervlak</h3>

    <p>
      Bij <span class="formula-inline">y=f(x)</span> is de grafiek een kromme
      in een vlak.
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">
      z=f(x,y)
    </p>

    <p>
      wordt de grafiek in het algemeen een <strong>oppervlak in de ruimte</strong>.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">
      z=x^2+y^2
    </p>

    <p>
      stijgt het oppervlak wanneer we verder van de oorsprong
      <span class="formula-inline">(0,0)</span> gaan.
    </p>

    <p>
      We kunnen dit zien als een landschap:
      elk punt in het grondvlak krijgt een hoogte.
    </p>

    <div class="callout">
      <p><strong>Een functie van twee variabelen kun je zien als een landschap.</strong></p>
      <p>
        <span class="formula-inline">x</span> en <span class="formula-inline">y</span>
        bepalen waar je bent; <span class="formula-inline">f(x,y)</span>
        bepaalt hoe hoog je bent.
      </p>
    </div>

    <h3>Een functie van drie variabelen</h3>

    <p>
      Hetzelfde idee kan verder worden uitgebreid.
      Een temperatuur kan bijvoorbeeld afhangen van drie variabelen:
    </p>

    <p class="formula">
      T=T(x,y,t)
    </p>

    <p>
      Hier bepalen <span class="formula-inline">x</span> en
      <span class="formula-inline">y</span> de plaats en
      <span class="formula-inline">t</span> het tijdstip.
    </p>

    <p>
      Voor iedere combinatie van deze drie invoeren krijgen we één temperatuur.
    </p>

    <p>
      We kunnen een functie van drie variabelen nog steeds exact definiëren,
      maar de volledige grafiek ervan heeft vier dimensies:
      drie invoerrichtingen plus de uitvoer.
    </p>

    <p>
      Dat kunnen we niet rechtstreeks als een gewone ruimtelijke grafiek
      tekenen. Daarom gebruiken we andere voorstellingen, zoals doorsneden
      of niveauoppervlakken.
    </p>

    <h3>Een doorsnede maakt het eenvoudiger</h3>

    <p>
      Een functie van meerdere variabelen kunnen we vaak bestuderen door
      sommige variabelen tijdelijk vast te zetten.
    </p>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      Als we <span class="formula-inline">y=2</span> vastzetten, blijft:
    </p>

    <p class="formula">
      f(x,2)=x^2+4
    </p>

    <p>
      We hebben nu weer een gewone functie van één variabele.
    </p>

    <p>
      Geometrisch bekijken we een doorsnede van het oppervlak.
      Door verschillende waarden van <span class="formula-inline">y</span>
      te kiezen, krijgen we verschillende doorsneden.
    </p>

    <div class="callout">
      <p><strong>Een functie van meerdere variabelen kan worden onderzocht
      via functies van minder variabelen.</strong></p>
    </div>

    <h3>Veranderen in één richting</h3>

    <p>
      Bij één variabele was de vraag eenvoudig:
      wat gebeurt er als <span class="formula-inline">x</span> verandert?
    </p>

    <p>
      Bij:
    </p>

    <p class="formula">
      f(x,y)
    </p>

    <p>
      kunnen zowel <span class="formula-inline">x</span> als
      <span class="formula-inline">y</span> veranderen.
    </p>

    <p>
      Om het effect van één variabele afzonderlijk te onderzoeken,
      houden we de andere variabele tijdelijk constant.
    </p>

    <p>
      We kunnen bijvoorbeeld vragen:
    </p>

    <div class="callout">
      <p><strong>Hoe verandert <span class="formula-inline">f</span>
      wanneer <span class="formula-inline">x</span> verandert,
      terwijl <span class="formula-inline">y</span> constant blijft?</strong></p>
    </div>

    <p>
      Dat is precies het idee achter een <strong>partiële afgeleide</strong>.
    </p>

    <h3>De partiële afgeleide naar x</h3>

    <p>
      Voor:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      houden we <span class="formula-inline">y</span> constant en
      differentiëren we naar <span class="formula-inline">x</span>:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial x}=2x
    </p>

    <p>
      Het symbool <span class="formula-inline">\\partial</span>
      geeft aan dat we slechts naar één variabele tegelijk kijken.
    </p>

    <p>
      De term <span class="formula-inline">y^2</span> gedraagt zich hierbij
      als een constante, omdat <span class="formula-inline">y</span>
      tijdelijk vastgehouden wordt.
    </p>

    <div class="callout">
      <p><strong>Partiële afgeleide naar x:</strong></p>
      <p>
        verander <span class="formula-inline">x</span>,
        houd de andere variabelen constant.
      </p>
    </div>

    <h3>De partiële afgeleide naar y</h3>

    <p>
      We kunnen dezelfde functie vanuit de andere richting bekijken.
      Nu houden we <span class="formula-inline">x</span> constant:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial y}=2y
    </p>

    <p>
      We hebben dus twee verschillende veranderingssnelheden:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial x}=2x
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial y}=2y
    </p>

    <p>
      Beide beschrijven verandering van dezelfde functie, maar in een andere
      richting.
    </p>

    <div class="callout">
      <p><strong>Bij meerdere variabelen bestaat er niet noodzakelijk één
      enkele veranderingssnelheid.</strong></p>
      <p>
        De verandering hangt af van de richting waarin we bewegen.
      </p>
    </div>

    <h3>Een tweede voorbeeld</h3>

    <p>
      Neem:
    </p>

    <p class="formula">
      f(x,y)=3x^2y+5y
    </p>

    <p>
      Naar <span class="formula-inline">x</span> differentiëren betekent
      <span class="formula-inline">y</span> constant houden:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial x}=6xy
    </p>

    <p>
      Naar <span class="formula-inline">y</span> differentiëren betekent
      <span class="formula-inline">x</span> constant houden:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial y}=3x^2+5
    </p>

    <p>
      De berekening lijkt sterk op gewone differentiaalrekening.
      Het nieuwe idee is vooral: <strong>welke variabelen houden we constant?</strong>
    </p>

    <h3>Een partiële afgeleide is een helling van een doorsnede</h3>

    <p>
      De geometrische betekenis sluit aan bij wat we al kennen.
    </p>

    <p>
      Als we <span class="formula-inline">y</span> constant houden,
      snijden we het oppervlak met een verticaal vlak.
      De ontstane doorsnede is een gewone kromme.
    </p>

    <p>
      De partiële afgeleide naar <span class="formula-inline">x</span>
      is de helling van die kromme in de
      <span class="formula-inline">x</span>-richting.
    </p>

    <p>
      Op dezelfde manier is:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial y}
    </p>

    <p>
      de helling in de <span class="formula-inline">y</span>-richting.
    </p>

    <div class="callout">
      <p><strong>Partiële afgeleide = lokale helling in één gekozen richting,
      terwijl de andere variabelen vaststaan.</strong></p>
    </div>

    <h3>De gradiënt</h3>

    <p>
      Als we beide partiële afgeleiden samenbrengen, krijgen we informatie
      over verandering in het vlak:
    </p>

    <p class="formula">
      \\nabla f
      =
      \\begin{pmatrix}
      \\frac{\\partial f}{\\partial x} \\
      \\frac{\\partial f}{\\partial y}
      \\end{pmatrix}
    </p>

    <p>
      Dit noemen we de <strong>gradiënt</strong> van
      <span class="formula-inline">f</span>.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      is:
    </p>

    <p class="formula">
      \\nabla f=(2x,2y)
    </p>

    <p>
      De gradiënt bundelt dus de partiële veranderingssnelheden in één object.
    </p>

    <h3>Wat vertelt de richting van de gradiënt?</h3>

    <p>
      De gradiënt wijst in de richting waarin de functie lokaal het sterkst
      toeneemt.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      is:
    </p>

    <p class="formula">
      \\nabla f=(2x,2y)
    </p>

    <p>
      Op het punt <span class="formula-inline">(1,2)</span> is de gradiënt:
    </p>

    <p class="formula">
      \\nabla f(1,2)=(2,4)
    </p>

    <p>
      De functie stijgt lokaal het sterkst in de richting van deze vector.
      In de tegengestelde richting daalt de functie het sterkst.
    </p>

    <p>
      Dit is de eerste stap naar een belangrijk idee uit de volgende
      milestone: verandering hoeft niet alleen "naar links of rechts" te zijn.
      In de ruimte kunnen we in veel richtingen bewegen.
    </p>

    <h3>Niveaucurven</h3>

    <p>
      We kunnen een functie van twee variabelen ook bekijken zonder de
      hoogte expliciet te tekenen. We kiezen een vaste waarde:
    </p>

    <p class="formula">
      f(x,y)=c
    </p>

    <p>
      Alle punten die aan deze vergelijking voldoen, vormen een
      <strong>niveaucurve</strong>.
    </p>

    <p>
      Voor:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      geeft:
    </p>

    <p class="formula">
      x^2+y^2=c
    </p>

    <p>
      een cirkel met straal <span class="formula-inline">\\sqrt{c}</span>
      wanneer <span class="formula-inline">c&gt;0</span>.
    </p>

    <p>
      Een niveaucurve verbindt dus punten met dezelfde functiewaarde.
      Op een topografische kaart gebeurt iets vergelijkbaars:
      een hoogtelijn verbindt punten met dezelfde hoogte.
    </p>

    <div class="callout">
      <p><strong>Niveaucurve = alle punten met dezelfde functiewaarde.</strong></p>
      <p>
        Ze geeft een tweedimensionale manier om informatie over een
        driedimensionaal oppervlak weer te geven.
      </p>
    </div>

    <h3>De gradiënt en niveaucurven</h3>

    <p>
      Er is een belangrijke geometrische relatie tussen de gradiënt en
      niveaucurven.
    </p>

    <p>
      Als we langs een niveaucurve bewegen, blijft de functiewaarde constant.
      De verandering van <span class="formula-inline">f</span> in die
      bewegingsrichting is dus nul.
    </p>

    <p>
      De gradiënt wijst daarom loodrecht op de niveaucurve.
    </p>

    <p>
      Voor een landschap betekent dit:
      de gradiënt wijst de steilste weg omhoog, terwijl een niveaucurve
      een pad volgt waarop de hoogte gelijk blijft.
    </p>

    <div class="callout">
      <p><strong>Gradiënt:</strong> richting van sterkste lokale stijging.</p>
      <p><strong>Niveaucurve:</strong> richting waarin de functiewaarde constant blijft.</p>
      <p>
        Daarom staan gradiënt en niveaucurve lokaal loodrecht op elkaar.
      </p>
    </div>

    <h3>Partiële afgeleiden zijn nog geen volledige richting</h3>

    <p>
      De partiële afgeleiden vertellen wat er gebeurt wanneer we uitsluitend
      in de <span class="formula-inline">x</span>- of
      <span class="formula-inline">y</span>-richting bewegen.
    </p>

    <p>
      Maar we kunnen ook tegelijk veranderen:
    </p>

    <p class="formula">
      x=x(t),\\qquad y=y(t)
    </p>

    <p>
      Dan bewegen we langs een pad door het vlak.
      De verandering van <span class="formula-inline">f</span> hangt dan af
      van beide bewegingen.
    </p>

    <p>
      De kettingregel wordt:
    </p>

    <p class="formula">
      \\frac{df}{dt}
      =
      \\frac{\\partial f}{\\partial x}\\frac{dx}{dt}
      +
      \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}
    </p>

    <p>
      Deze formule zegt dat de totale verandering ontstaat uit de bijdragen
      van de afzonderlijke richtingen.
    </p>

    <div class="callout">
      <p><strong>Partiële afgeleiden beschrijven richtingsbijdragen.</strong></p>
      <p>
        De kettingregel combineert die bijdragen wanneer meerdere variabelen
        tegelijk veranderen.
      </p>
    </div>

    <h3>Een concreet voorbeeld met temperatuur</h3>

    <p>
      Stel dat:
    </p>

    <p class="formula">
      T(x,y)=x^2+2y^2
    </p>

    <p>
      Dan:
    </p>

    <p class="formula">
      \\frac{\\partial T}{\\partial x}=2x
    </p>

    <p class="formula">
      \\frac{\\partial T}{\\partial y}=4y
    </p>

    <p>
      Op het punt <span class="formula-inline">(1,2)</span> krijgen we:
    </p>

    <p class="formula">
      \\nabla T(1,2)=(2,8)
    </p>

    <p>
      Dat vertelt ons dat de temperatuur op die plaats lokaal veel sterker
      reageert op verandering in de <span class="formula-inline">y</span>-richting
      dan op dezelfde kleine verandering in de
      <span class="formula-inline">x</span>-richting.
    </p>

    <p>
      De gradiënt geeft daarmee een compacte lokale beschrijving van het
      temperatuurveld.
    </p>

    <h3>Functies met nog meer variabelen</h3>

    <p>
      Alles wat we tot nu toe deden kan worden uitgebreid naar drie,
      vier of nog meer variabelen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      f(x,y,z)
    </p>

    <p>
      heeft drie partiële afgeleiden:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial x},
      \\frac{\\partial f}{\\partial y},
      \\frac{\\partial f}{\\partial z}
    </p>

    <p>
      De gradiënt wordt dan:
    </p>

    <p class="formula">
      \\nabla f
      =
      (\\frac{\\partial f}{\\partial x},
      \\frac{\\partial f}{\\partial y},
      \\frac{\\partial f}{\\partial z})
    </p>

    <p>
      Het patroon blijft hetzelfde:
      iedere component beschrijft lokale verandering in één coördinaatrichting.
    </p>

    <h3>Wat verandert er ten opzichte van gewone calculus?</h3>

    <p>
      De basisideeën zijn eigenlijk vertrouwd.
    </p>

    <ul>
      <li>Een functie koppelt invoer aan uitvoer.</li>
      <li>Een afgeleide meet lokale verandering.</li>
      <li>Een limiet beschrijft wat er gebeurt bij steeds kleinere veranderingen.</li>
      <li>Een integraal telt kleine bijdragen op.</li>
    </ul>

    <p>
      Het nieuwe element is dat er <strong>meer dan één onafhankelijke richting</strong>
      kan zijn.
    </p>

    <div class="callout">
      <p><strong>Enkelvoudige calculus:</strong> verandering langs één onafhankelijke variabele.</p>
      <p><strong>Multivariabele calculus:</strong> verandering in meerdere onafhankelijke richtingen.</p>
    </div>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        Denken dat een functie van twee variabelen twee uitvoerwaarden heeft.
        Ze heeft juist twee invoeren en één uitvoer.
      </li>
      <li>
        Bij een partiële afgeleide vergeten welke variabelen constant blijven.
      </li>
      <li>
        Denken dat <span class="formula-inline">\\partial f/\\partial x</span>
        hetzelfde is als de volledige verandering van <span class="formula-inline">f</span>
        wanneer ook andere variabelen veranderen.
      </li>
      <li>
        De gradiënt verwarren met één enkel getal.
        De gradiënt bevat meerdere richtingscomponenten.
      </li>
      <li>
        Denken dat de gradiënt altijd "omhoog" in absolute ruimte wijst.
        Hij wijst in de richting van de sterkste lokale toename van de
        <strong>functiewaarde</strong>.
      </li>
      <li>
        Niveaucurven verwarren met grafieken van de functie zelf.
      </li>
    </ul>

    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Bepaal welke variabelen onafhankelijke invoeren zijn.</li>
      <li>Bepaal welke grootheid de functie beschrijft.</li>
      <li>Houd bij een partiële afgeleide de andere variabelen constant.</li>
      <li>Bereken de gewenste partiële afgeleide.</li>
      <li>Bereken indien nodig alle partiële afgeleiden en vorm de gradiënt.</li>
      <li>Interpreteer iedere component als lokale verandering in een richting.</li>
      <li>Gebruik niveaucurven of doorsneden om de geometrische betekenis te onderzoeken.</li>
      <li>Als meerdere variabelen tegelijk veranderen, gebruik de kettingregel.</li>
    </ol>

    <h3>De rode draad van Fase 3</h3>

    <p>
      Fase 3 begon met verandering tussen twee punten.
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Daarna maakten we het interval steeds kleiner en kwamen we bij de
      afgeleide:
    </p>

    <p class="formula">
      f'(x)
    </p>

    <p>
      Vervolgens leerden we dat integralen kleine bijdragen optellen:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx
    </p>

    <p>
      Nu zien we dat verandering niet beperkt is tot één onafhankelijke
      variabele. Een functie kan afhangen van meerdere invoeren en dan
      moeten we verandering per richting kunnen beschrijven.
    </p>

    <p class="formula">
      f(x,y)
      \\rightarrow
      \\frac{\\partial f}{\\partial x},
      \\frac{\\partial f}{\\partial y}
      \\rightarrow
      \\nabla f
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Een functie van meerdere variabelen beschrijft hoe een grootheid
        afhangt van verschillende invoeren. Partiële afgeleiden meten
        verandering in afzonderlijke richtingen. De gradiënt bundelt die
        lokale richtingsveranderingen en wijst naar de sterkste lokale
        toename van de functie.
      </p>
    </div>

    <h3>Brug naar 3.14</h3>

    <p>
      In 3.13 hebben we geleerd om verandering in meerdere onafhankelijke
      richtingen te beschrijven. We hebben daarvoor partiële afgeleiden en
      de gradiënt gebruikt.
    </p>

    <p>
      Maar de gradiënt is zelf al een vectorachtig object:
      hij bevat meerdere componenten en beschrijft een richting.
    </p>

    <p>
      De volgende stap is daarom logisch:
    </p>

    <div class="callout">
      <p><strong>Hoe beschrijven we verandering, richting en velden systematisch in de ruimte?</strong></p>
    </div>

    <p>
      In 3.14 bouwen we daarvoor verder met vectoren, vectorvelden en
      multivariabele calculus.
    </p>
  `
  },

  {
    id: "3.14",
    title: "Multivariabele calculus & vectorvelden",
    goal: "Hoe beschrijven we verandering in verschillende richtingen?",
    theory: `
    <h2>Multivariabele calculus & vectorvelden</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>Waarom is de richting waarin we bewegen belangrijk bij meerdere variabelen?</li>
      <li>Hoe kunnen we verandering in een willekeurige richting beschrijven?</li>
      <li>Wat vertelt de gradiënt ons over die richtingsverandering?</li>
      <li>Wat is een vectorveld?</li>
      <li>Hoe kunnen we beweging, stroming en krachten als velden voorstellen?</li>
      <li>Wat betekenen divergentie en rotatie op een intuïtief niveau?</li>
      <li>Waarom vormen vectorvelden een natuurlijke brug naar natuurkunde en Fase 4?</li>
    </ul>

    <p>
      In 3.13 zagen we dat een functie van meerdere variabelen verschillende
      richtingsveranderingen kan hebben. Bij
      <span class="formula-inline">f(x,y)</span> kunnen we bijvoorbeeld de
      verandering in de <span class="formula-inline">x</span>- en
      <span class="formula-inline">y</span>-richting afzonderlijk bekijken.
    </p>

    <p>
      We brachten die informatie samen in de gradiënt:
    </p>

    <p class="formula">
      \\nabla f
      =
      \\left(
      \\frac{\\partial f}{\\partial x},
      \\frac{\\partial f}{\\partial y}
      \\right)
    </p>

    <p>
      Maar er blijft een belangrijke vraag over:
      <strong>wat gebeurt er als we niet precies in de x- of y-richting bewegen,
      maar schuin door het vlak?</strong>
    </p>

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>
        Bij meerdere variabelen hangt verandering niet alleen af van
        <em>hoe ver</em> we bewegen, maar ook van <em>in welke richting</em>
        we bewegen.
      </p>
    </div>

    <h3>Van twee richtingen naar elke richting</h3>

    <p>
      Stel dat we ons op een punt van een landschap bevinden.
      We kunnen naar het noorden, zuiden, oosten of westen gaan,
      maar ook in elke richting daartussenin.
    </p>

    <p>
      De functie
      <span class="formula-inline">f(x,y)</span>
      geeft bijvoorbeeld de hoogte van het landschap.
      Als we een klein stukje bewegen, verandert onze hoogte.
    </p>

    <p>
      In 3.13 konden we de helling in de twee coördinaatrichtingen bepalen:
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial x}
    </p>

    <p class="formula">
      \\frac{\\partial f}{\\partial y}
    </p>

    <p>
      Maar een wandelaar beweegt meestal niet exact langs één van die assen.
      We hebben daarom een manier nodig om een <strong>richting</strong>
      expliciet te beschrijven.
    </p>

    <div class="callout">
      <p>
        Een vector kunnen we voorlopig zien als een pijl die een
        <strong>richting</strong> en een <strong>grootte</strong> heeft.
      </p>
      <p>
        De volledige theorie van vectoren bewaren we voor Fase 4.
        Hier gebruiken we alleen wat nodig is om verandering in de ruimte
        te begrijpen.
      </p>
    </div>

    <h3>Een richting als vector</h3>

    <p>
      In een vlak kunnen we een richting bijvoorbeeld voorstellen door:
    </p>

    <p class="formula">
      \\mathbf{u}=(u_x,u_y)
    </p>

    <p>
      De twee componenten vertellen hoeveel van de beweging in de
      <span class="formula-inline">x</span>- en
      <span class="formula-inline">y</span>-richting zit.
    </p>

    <p>
      Voor een zuivere beweging naar rechts kunnen we bijvoorbeeld denken aan:
    </p>

    <p class="formula">
      \\mathbf{u}=(1,0)
    </p>

    <p>
      en voor een zuivere beweging omhoog:
    </p>

    <p class="formula">
      \\mathbf{u}=(0,1)
    </p>

    <p>
      Een diagonale richting kan beide componenten bevatten.
    </p>

    <p class="formula">
      \\mathbf{u}=(1,1)
    </p>

    <p>
      De exacte lengte van de vector is voor het volgende idee belangrijk:
      als we alleen de <em>richting</em> willen vergelijken, gebruiken we
      bij voorkeur een <strong>eenheidsvector</strong>, dus een vector met lengte 1.
    </p>

    <p>
      We hoeven de volledige berekening van vectorlengtes hier nog niet uit te
      werken. Het belangrijke idee is dat we een richting kunnen coderen met
      getallen.
    </p>

    <h3>De richtingsafgeleide</h3>

    <p>
      We kunnen nu een nieuwe vraag stellen:
    </p>

    <div class="callout">
      <p><strong>
        Hoe snel verandert een functie als we vanuit een punt
        in één specifieke richting bewegen?
      </strong></p>
    </div>

    <p>
      Deze verandering noemen we de <strong>richtingsafgeleide</strong>.
    </p>

    <p>
      Als <span class="formula-inline">\\mathbf{u}</span> een eenheidsvector
      is, schrijven we:
    </p>

    <p class="formula">
      D_{\\mathbf{u}}f
      =
      \\nabla f\\cdot\\mathbf{u}
    </p>

    <p>
      Het punt tussen de twee vectoren staat voor het
      <strong>inwendig product</strong> (dotproduct).
      Voor twee componenten betekent dit:
    </p>

    <p class="formula">
      (a,b)\\cdot(c,d)=ac+bd
    </p>

    <p>
      We hoeven het dotproduct hier nog niet als een volledig algebraïsch
      onderwerp te beheersen. De betekenis is belangrijker:
      de gradiënt wordt vergeleken met de gekozen bewegingsrichting.
    </p>

    <div class="callout">
      <p><strong>Richtingsafgeleide:</strong></p>
      <p>
        De lokale verandering van een functie wanneer we vanuit een punt
        in een gekozen richting bewegen.
      </p>
    </div>

    <h3>Waarom de gradiënt de sterkste stijging geeft</h3>

    <p>
      In 3.13 zagen we al dat de gradiënt wijst naar de sterkste lokale
      toename van de functie. De richtingsafgeleide maakt duidelijk waarom.
    </p>

    <p>
      Neem een eenheidsvector <span class="formula-inline">\\mathbf{u}</span>.
      Dan is:
    </p>

    <p class="formula">
      D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}
    </p>

    <p>
      Het dotproduct is maximaal wanneer de gekozen richting dezelfde richting
      heeft als de gradiënt.
    </p>

    <p>
      De gradiënt geeft dus precies de richting waarin de functiewaarde
      lokaal het sterkst stijgt.
    </p>

    <p>
      In de tegengestelde richting is de verandering het sterkst negatief:
      daar daalt de functie het snelst.
    </p>

    <div class="callout">
      <p>
        <strong>Gradiënt = kompas van de lokale stijging.</strong>
      </p>
      <p>
        De richtingsafgeleide vertelt hoeveel van die stijging we werkelijk
        ervaren in de richting waarin we bewegen.
      </p>
    </div>

    <h3>Een concreet voorbeeld</h3>

    <p>
      Neem opnieuw het landschap:
    </p>

    <p class="formula">
      f(x,y)=x^2+y^2
    </p>

    <p>
      De gradiënt is:
    </p>

    <p class="formula">
      \\nabla f=(2x,2y)
    </p>

    <p>
      In het punt <span class="formula-inline">(1,2)</span> krijgen we:
    </p>

    <p class="formula">
      \\nabla f(1,2)=(2,4)
    </p>

    <p>
      De grootste lokale stijging wijst dus in de richting van
      <span class="formula-inline">(2,4)</span>.
    </p>

    <p>
      Als we in een andere richting bewegen, zal de functie nog steeds kunnen
      stijgen, maar minder sterk. In sommige richtingen blijft de functiewaarde
      lokaal ongeveer gelijk en in andere richtingen daalt ze.
    </p>

    <p>
      Dat is een veel rijker beeld dan één enkel getal voor de afgeleide.
    </p>

    <h3>Van functies naar velden</h3>

    <p>
      Tot nu toe gaf een functie op ieder punt één waarde:
    </p>

    <p class="formula">
      f(x,y)
    </p>

    <p>
      Bijvoorbeeld de temperatuur op iedere plaats.
    </p>

    <p>
      Maar in de natuurkunde willen we vaak iets anders beschrijven:
      op ieder punt kan een <strong>richting én grootte</strong> aanwezig zijn.
    </p>

    <p>
      Denk aan de snelheid van de lucht op verschillende plaatsen in een kamer.
      Op elk punt kan de lucht een andere snelheid en richting hebben.
    </p>

    <p>
      Zo'n verzameling pijlen noemen we een <strong>vectorveld</strong>.
    </p>

    <p class="formula">
      \\mathbf{F}(x,y)
      =
      (P(x,y),Q(x,y))
    </p>

    <p>
      Voor iedere positie <span class="formula-inline">(x,y)</span>
      geeft het veld een vector.
    </p>

    <div class="callout">
      <p><strong>Scalaire functie:</strong> één getal per punt.</p>
      <p><strong>Vectorveld:</strong> één vector per punt.</p>
    </div>

    <h3>Een eenvoudig vectorveld</h3>

    <p>
      Beschouw:
    </p>

    <p class="formula">
      \\mathbf{F}(x,y)=(x,y)
    </p>

    <p>
      In het punt <span class="formula-inline">(1,0)</span> krijgen we de vector:
    </p>

    <p class="formula">
      \\mathbf{F}(1,0)=(1,0)
    </p>

    <p>
      In het punt <span class="formula-inline">(0,2)</span> krijgen we:
    </p>

    <p class="formula">
      \\mathbf{F}(0,2)=(0,2)
    </p>

    <p>
      En in het punt <span class="formula-inline">(-1,-1)</span>:
    </p>

    <p class="formula">
      \\mathbf{F}(-1,-1)=(-1,-1)
    </p>

    <p>
      Op ieder punt staat dus een andere pijl.
      De verzameling van al die pijlen vormt samen het vectorveld.
    </p>

    <p>
      Dit veld wijst overal van de oorsprong weg.
      De richting en grootte veranderen met de positie.
    </p>

    <h3>Vectorvelden beschrijven beweging</h3>

    <p>
      Een vectorveld hoeft geen abstract wiskundig object te zijn.
      Het kan rechtstreeks een fysisch verschijnsel beschrijven.
    </p>

    <p>
      Stel dat:
    </p>

    <p class="formula">
      \\mathbf{v}(x,y)
    </p>

    <p>
      de snelheid van een vloeistof op ieder punt van een oppervlak beschrijft.
    </p>

    <p>
      Dan vertelt de vector op een bepaald punt:
    </p>

    <ul>
      <li>in welke richting de vloeistof beweegt;</li>
      <li>hoe groot de lokale snelheid is.</li>
    </ul>

    <p>
      Een deeltje dat door het veld beweegt, volgt dus een baan die voortdurend
      wordt beïnvloed door de lokale vector.
    </p>

    <div class="callout">
      <p>
        Een vectorveld kun je zien als een <strong>kaart van lokale beweging</strong>.
      </p>
      <p>
        Op ieder punt vertelt een pijl wat daar gebeurt.
      </p>
    </div>

    <h3>Een krachtveld</h3>

    <p>
      Hetzelfde idee geldt voor krachten.
      De zwaartekracht rond een hemellichaam kan bijvoorbeeld op ieder punt
      een andere richting en grootte hebben.
    </p>

    <p>
      We kunnen zo'n situatie conceptueel voorstellen als:
    </p>

    <p class="formula">
      \\mathbf{F}(x,y,z)
    </p>

    <p>
      De vector op een punt vertelt dan welke kracht een object daar zou
      ondervinden.
    </p>

    <p>
      Dit is een belangrijke stap richting de natuurkunde:
      een fysisch veld koppelt een toestand of kracht aan iedere positie
      in de ruimte.
    </p>

    <h3>Van een vectorveld naar een bewegingsbaan</h3>

    <p>
      Stel dat een object door een vectorveld beweegt.
      Zijn positie hangt dan af van de tijd:
    </p>

    <p class="formula">
      \\mathbf{r}(t)
    </p>

    <p>
      De snelheid is de verandering van die positie:
    </p>

    <p class="formula">
      \\mathbf{v}(t)=\\frac{d\\mathbf{r}}{dt}
    </p>

    <p>
      Als de snelheid zelf afhangt van de positie, krijgen we bijvoorbeeld:
    </p>

    <p class="formula">
      \\frac{d\\mathbf{r}}{dt}=\\mathbf{F}(\\mathbf{r})
    </p>

    <p>
      Dit is een eerste kennismaking met een
      <strong>differentiële vergelijking</strong>:
      een vergelijking waarin een afgeleide voorkomt.
    </p>

    <p>
      We lossen zulke vergelijkingen hier nog niet systematisch op.
      Het belangrijke inzicht is dat een vectorveld kan bepalen
      <strong>hoe een systeem door de ruimte evolueert</strong>.
    </p>

    <h3>Een veld kan uitzetten, samendrukken of draaien</h3>

    <p>
      Een vectorveld bevat nog meer informatie dan alleen lokale richting
      en grootte.
    </p>

    <p>
      We kunnen bijvoorbeeld vragen:
    </p>

    <ul>
      <li>Stromen de pijlen lokaal uit elkaar of naar elkaar toe?</li>
      <li>Verandert de lokale rotatie van het veld?</li>
      <li>Hoe verandert het veld wanneer we van punt naar punt bewegen?</li>
    </ul>

    <p>
      Hiervoor gebruiken we in de multivariabele calculus onder andere
      <strong>divergentie</strong> en <strong>curl</strong>.
      In deze milestone bekijken we vooral hun betekenis.
      De volledige vectoranalyse bewaren we voor een later stadium.
    </p>

    <h3>Divergentie: stroomt het veld lokaal uiteen?</h3>

    <p>
      Voor een tweedimensionaal vectorveld
    </p>

    <p class="formula">
      \\mathbf{F}(x,y)=(P(x,y),Q(x,y))
    </p>

    <p>
      is de divergentie:
    </p>

    <p class="formula">
      \\operatorname{div}\\mathbf{F}
      =
      \\frac{\\partial P}{\\partial x}
      +
      \\frac{\\partial Q}{\\partial y}
    </p>

    <p>
      Intuïtief meet dit of het veld zich lokaal gedraagt alsof er
      <strong>meer uit een klein gebied wegstroomt dan erin stroomt</strong>,
      of omgekeerd.
    </p>

    <p>
      Positieve divergentie wijst op lokale uitstroming;
      negatieve divergentie op lokale instroming.
    </p>

    <div class="callout">
      <p><strong>Divergentie vraagt:</strong></p>
      <p>
        Gedraagt dit kleine gebied zich lokaal als een bron of als een put?
      </p>
    </div>

    <h3>Curl: heeft het veld lokale rotatie?</h3>

    <p>
      Een tweede vraag is of een klein object dat in het veld wordt geplaatst
      de neiging heeft om lokaal te draaien.
    </p>

    <p>
      Voor een tweedimensionaal veld kunnen we de relevante component
      schrijven als:
    </p>

    <p class="formula">
      \\operatorname{curl}\\mathbf{F}
      =
      \\frac{\\partial Q}{\\partial x}
      -
      \\frac{\\partial P}{\\partial y}
    </p>

    <p>
      Deze grootheid beschrijft de lokale neiging tot rotatie.
      Je kunt je bijvoorbeeld een heel klein radertje voorstellen dat
      met het stromingsveld meebeweegt.
    </p>

    <p>
      Als de lokale beweging het radertje systematisch laat ronddraaien,
      is er sprake van lokale rotatie.
    </p>

    <div class="callout">
      <p><strong>Divergentie:</strong> lokaal uit elkaar of naar elkaar toe.</p>
      <p><strong>Curl:</strong> lokale neiging tot ronddraaien.</p>
    </div>

    <h3>Een belangrijk onderscheid: gradiënt versus vectorveld</h3>

    <p>
      De gradiënt van een scalaire functie levert zelf een vectorveld:
    </p>

    <p class="formula">
      \\mathbf{F}=\\nabla f
    </p>

    <p>
      Dat betekent dat ieder punt een gradiëntvector krijgt.
    </p>

    <p>
      Er is dus een natuurlijke overgang:
    </p>

    <p class="formula">
      \\text{scalaire functie}
      \\rightarrow
      \\text{gradiënt}
      \\rightarrow
      \\text{vectorveld}
    </p>

    <p>
      Maar niet elk vectorveld hoeft afkomstig te zijn van een gradiënt.
      Een vectorveld kan rechtstreeks een snelheid, kracht of andere
      lokale vectoriële grootheid voorstellen.
    </p>

    <div class="callout">
      <p>
        Een gradiëntveld vertelt hoe een scalaire grootheid lokaal verandert.
      </p>
      <p>
        Een algemeen vectorveld geeft op ieder punt een vector,
        ongeacht of die vector uit een gradiënt ontstaat.
      </p>
    </div>

    <h3>Van lokale verandering naar een pad</h3>

    <p>
      We kunnen nu twee soorten informatie combineren.
    </p>

    <p>
      Een functie kan ons vertellen hoe een grootheid lokaal verandert,
      terwijl een vectorveld ons vertelt welke richting en grootte
      op ieder punt aanwezig zijn.
    </p>

    <p>
      Als we vervolgens een specifiek pad door de ruimte volgen,
      kunnen we de verandering langs dat pad onderzoeken.
    </p>

    <p>
      Dat leidt uiteindelijk naar het idee van een
      <strong>lijnintegraal</strong>:
      een integraal waarbij we niet over een interval op een getallenlijn
      optellen, maar langs een kromme in de ruimte.
    </p>

    <p>
      Conceptueel blijft het basisidee hetzelfde als in 3.9:
      we delen een grootheid op in kleine bijdragen en tellen die op.
    </p>

    <div class="callout">
      <p><strong>De integraal verandert niet van idee.</strong></p>
      <p>
        Alleen het object waarover we optellen wordt rijker:
        van een interval naar een pad door de ruimte.
      </p>
    </div>

    <h3>Waarom dit belangrijk is voor de natuurkunde</h3>

    <p>
      Veel fysische grootheden zijn geen eenvoudige getallen die overal
      dezelfde betekenis hebben.
    </p>

    <p>
      Een temperatuur kan per positie verschillen.
      Een windsnelheid heeft richting én grootte.
      Een elektrisch veld geeft op ieder punt een kracht per lading.
      Een magnetisch veld heeft eveneens een richting en grootte.
    </p>

    <p>
      Daardoor is de taal van multivariabele calculus en vectorvelden
      essentieel voor de klassieke en moderne natuurkunde.
    </p>

    <p>
      We hebben in Fase 3 dus een belangrijke uitbreiding gemaakt:
    </p>

    <p class="formula">
      \\text{één variabele}
      \\rightarrow
      \\text{meerdere variabelen}
      \\rightarrow
      \\text{richtingsverandering}
      \\rightarrow
      \\text{vectorvelden}
    </p>

    <h3>Wat we bewust nog niet doen</h3>

    <p>
      Deze milestone is het einde van Fase 3. We hebben nu de conceptuele
      taal opgebouwd, maar nog niet alle onderliggende vectorrekening
      systematisch behandeld.
    </p>

    <p>
      We gaan hier daarom nog niet uitgebreid in op:
    </p>

    <ul>
      <li>volledige vectoralgebra;</li>
      <li>vectorruimten en basisvectoren;</li>
      <li>matrices en matrixbewerkingen;</li>
      <li>eigenwaarden en eigenvectoren;</li>
      <li>algemene lijn-, oppervlakte- en volume-integralen;</li>
      <li>de volledige stelling van Green, Gauss en Stokes.</li>
    </ul>

    <p>
      Die onderwerpen vragen extra structuur. Vooral vectoren en matrices
      vormen daarom een natuurlijke ingang naar <strong>Fase 4: lineaire algebra</strong>.
    </p>

    <div class="callout">
      <p><strong>Belangrijk:</strong></p>
      <p>
        Je hoeft de volledige vectorrekening nog niet te beheersen om te
        begrijpen waarom vectoren nodig zijn. Je moet nu vooral zien
        <em>welk probleem</em> ze oplossen: verandering en richting
        beschrijven in een ruimte met meerdere dimensies.
      </p>
    </div>

    <h3>Veelgemaakte fouten</h3>

    <ul>
      <li>
        Denken dat de afgeleide bij meerdere variabelen nog steeds één
        universeel getal is. De lokale verandering hangt af van de richting.
      </li>
      <li>
        Een partiële afgeleide verwarren met de totale verandering wanneer
        meerdere variabelen tegelijk veranderen.
      </li>
      <li>
        Denken dat de gradiënt zelf een gewone scalaire functiewaarde is.
        De gradiënt is vectorieel.
      </li>
      <li>
        Vergeten dat de formule voor een richtingsafgeleide
        <span class="formula-inline">D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}</span>
        een eenheidsrichting veronderstelt.
      </li>
      <li>
        Een vectorveld verwarren met één vector. Een vectorveld kent aan
        ieder punt een vector toe.
      </li>
      <li>
        Divergentie en curl zien als alleen maar nieuwe formules.
        Hun betekenis is belangrijker: bron/putgedrag en lokale rotatie.
      </li>
      <li>
        Denken dat ieder vectorveld automatisch een gradiëntveld is.
      </li>
    </ul>

    <h3>Een vaste werkwijze</h3>

    <ol>
      <li>Bepaal welke grootheid als functie of veld wordt beschreven.</li>
      <li>Bepaal hoeveel onafhankelijke variabelen de invoer heeft.</li>
      <li>Gebruik partiële afgeleiden om verandering per coördinaatrichting te vinden.</li>
      <li>Bundel die informatie in de gradiënt wanneer het om een scalaire functie gaat.</li>
      <li>Geef een gekozen bewegingsrichting weer met een vector.</li>
      <li>Gebruik de richtingsafgeleide om lokale verandering in die richting te bepalen.</li>
      <li>Herken een vectorveld wanneer ieder punt een vector krijgt.</li>
      <li>Interpreteer divergentie als lokaal bron/putgedrag en curl als lokale rotatie.</li>
      <li>Houd de volledige vectoralgebra en lineaire algebra voor de volgende fase.</li>
    </ol>

    <h3>De volledige rode draad van Fase 3</h3>

    <p>
      We begonnen met een eenvoudige vraag:
      hoeveel verandert iets tussen twee punten?
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      Door het interval kleiner te maken kwamen we bij de limiet en de
      ogenblikkelijke verandering:
    </p>

    <p class="formula">
      f'(x)
    </p>

    <p>
      Daarna leerden we dat een integraal kleine bijdragen optelt:
    </p>

    <p class="formula">
      \\int_a^b f(x)\\,dx
    </p>

    <p>
      De fundamentele stelling van de calculus verbond beide ideeën.
      Vervolgens gebruikten we integralen om oppervlakte, verplaatsing,
      afstand, volume en andere totale hoeveelheden te bepalen.
    </p>

    <p>
      In 3.13 maakten we de stap naar meerdere onafhankelijke variabelen:
    </p>

    <p class="formula">
      f(x,y)
    </p>

    <p>
      met partiële afgeleiden en de gradiënt:
    </p>

    <p class="formula">
      \\nabla f
      =
      \\left(
      \\frac{\\partial f}{\\partial x},
      \\frac{\\partial f}{\\partial y}
      \\right)
    </p>

    <p>
      In 3.14 gingen we nog een stap verder:
      we beschreven verandering in een <strong>gekozen richting</strong>
      en leerden we dat een vectorveld op ieder punt een lokale vector
      kan bevatten.
    </p>

    <p class="formula">
      \\text{functie}
      \\rightarrow
      \\text{afgeleide}
      \\rightarrow
      \\text{integraal}
      \\rightarrow
      \\text{meerdere variabelen}
      \\rightarrow
      \\text{richtingsverandering}
      \\rightarrow
      \\text{vectorveld}
    </p>

    <div class="callout">
      <p><strong>Kernidee van 3.14:</strong></p>
      <p>
        In één dimensie beschrijven we verandering langs één richting.
        In meerdere dimensies kunnen we in verschillende richtingen bewegen.
        De gradiënt beschrijft de lokale richting van sterkste stijging,
        de richtingsafgeleide meet de verandering langs een gekozen richting
        en een vectorveld kent aan ieder punt een vector toe.
      </p>
      <p>
        Daarmee hebben we de conceptuele overgang gemaakt van gewone calculus
        naar vectorcalculus en de taal die nodig is om veel fysische velden
        te beschrijven.
      </p>
    </div>

    <h3>Brug naar Fase 4</h3>

    <p>
      In 3.14 gebruikten we vectoren vooral als taal voor richting en lokale
      verandering. We hebben nog niet systematisch onderzocht hoe vectoren
      worden opgeteld, vermenigvuldigd of gecombineerd met matrices.
    </p>

    <p>
      Dat is precies wat in Fase 4 centraal komt te staan.
    </p>

    <div class="callout">
      <p><strong>De volgende vraag is:</strong></p>
      <p>
        Hoe bouwen we met vectoren en matrices een volledig algebraïsch
        systeem waarmee we ruimtelijke problemen systematisch kunnen oplossen?
      </p>
    </div>

    <p>
      Daarmee sluiten we Fase 3 af en maken we de overgang naar
      <strong>lineaire algebra</strong>.
    </p>
`
  }
];
