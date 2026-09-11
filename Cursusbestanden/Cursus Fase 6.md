# Cursus Fase 6 --- Abstracte Algebra & Topologie

**Leerpad:** van concrete transformaties en vectorruimten naar abstracte
structuren, symmetrie en coördinatenonafhankelijke objecten\
**Doel van deze fase:** begrijpen hoe wiskundige structuren losgemaakt
worden van hun concrete voorstelling, en hoe groepen, topologische
ruimten en tensoren de taal voorbereiden voor differentiaalmeetkunde en
Yang--Mills-theorie.\
**Volgende stap:** Fase 7 --- Differentiaalmeetkunde & Kwantumvelden

Deze cursus volgt de drie milestones uit het leerpad:

1.  **6.1 Groepentheorie & Symmetrie**
2.  **6.2 Topologie**
3.  **6.3 Tensorrekening**

Elke milestone bevat uitleg, voorbeelden, oefeningen en antwoorden. Maak
de oefeningen eerst zelf. De antwoorden staan bewust direct na de
oefeningen, zodat je jezelf kunt controleren.

------------------------------------------------------------------------

## Hoe je deze cursus gebruikt

Fase 6 is anders dan de vorige fasen. In Fase 1 t/m 5 rekende je steeds
met concrete objecten: getallen, functies, vectoren, matrices en
differentiaalvergelijkingen. Nu wordt de vraag belangrijker:

> **Welke eigenschappen blijven bestaan wanneer we de concrete
> voorstelling veranderen?**

Dat is de kern van abstractie.

Gebruik deze cursus daarom niet als een verzameling definities die je
uit het hoofd moet leren. Probeer bij iedere nieuwe structuur eerst te
begrijpen:

1.  **Wat is het object?**
2.  **Welke bewerkingen of relaties zijn toegestaan?**
3.  **Welke eigenschappen moet het object hebben?**
4.  **Welke concrete voorbeelden ken ik al?**
5.  **Waarom hebben we deze abstractie nodig?**

### Werkwijze

1.  Lees de uitleg rustig.
2.  Werk ieder voorbeeld met de hand na.
3.  Maak de oefeningen zonder naar de antwoorden te kijken.
4.  Noteer niet alleen fouten, maar ook *waarom* je fout ging.
5.  Probeer iedere definitie in eigen woorden uit te leggen.
6.  Ga pas verder wanneer je de voorbeelden kunt herkennen zonder de
    definitie opnieuw te lezen.

**Gereedschap:** papier en potlood. Een rekenmachine is zelden nodig.
Tabellen en eenvoudige tekeningen zijn juist zeer nuttig.

------------------------------------------------------------------------

# Waar staan we in het leerpad?

In Fase 4 leerde je dat vectoren en matrices niet alleen getallen zijn,
maar objecten waarop transformaties werken. Eigenvectoren lieten zien
dat sommige richtingen onder een transformatie een bijzondere rol
spelen.

In Fase 5 onderzocht je functies, differentiaalvergelijkingen, complexe
getallen en Fourier-ontbindingen. Je zag dat dezelfde wiskundige
structuur op verschillende manieren kan worden voorgesteld.

Fase 6 zet daar een grote stap bovenop.

We gaan:

**transformatie → symmetrie → groep → abstracte structuur**

en:

**ruimte → continuïteit → topologie → vorm zonder metriek**

en:

**vector → covector → multilineaire afbeelding → tensor**

Deze drie lijnen komen uiteindelijk samen in Fase 7:

**groep + ruimte + tensor + connectie → differentiaalmeetkunde →
gaugevelden → Yang--Mills**

De structuur van Fase 6 volgt rechtstreeks het leerpad: groepentheorie
en symmetrie, topologie en tensorrekening. De daaropvolgende fase bouwt
daarop verder met vectorbundels, connecties en Yang--Mills.
fileciteturn8file3L236-L245

------------------------------------------------------------------------

# Milestone 6.1 --- Groepentheorie & Symmetrie

**Doel:** begrijpen hoe symmetrieën en omkeerbare transformaties
wiskundig als één abstracte structuur kunnen worden beschreven.

## 6.1.1 Wat is een symmetrie?

Stel dat je een vierkant 90° draait.

Het vierkant ziet er na de draaiing hetzelfde uit als ervoor.

Dat is een symmetrie.

Belangrijk is echter wat er precies bedoeld wordt met "hetzelfde".

We vergelijken het object vóór en na een transformatie. Een
transformatie is een symmetrie wanneer de relevante structuur behouden
blijft.

Voorbeelden:

-   een vierkant kan 90°, 180°, 270° of 360° gedraaid worden;
-   een cirkel kan over iedere hoek gedraaid worden;
-   een gelijkzijdige driehoek kan 120° gedraaid worden;
-   een patroon kan soms gespiegeld worden zonder dat de relevante vorm
    verandert.

Symmetrie betekent dus niet noodzakelijk dat *iedere positie van ieder
onderdeel* onveranderd blijft.

Het betekent:

> **de structuur die we belangrijk vinden blijft behouden.**

------------------------------------------------------------------------

## 6.1.2 Transformaties als bewerkingen

Een transformatie neemt een object en maakt er een ander object van.

Bijvoorbeeld:

-   draaien;
-   spiegelen;
-   verschuiven;
-   schalen;
-   permuteren.

Je kunt transformaties na elkaar uitvoeren.

Bijvoorbeeld:

1.  draai een vierkant 90°;
2.  draai het daarna nog eens 90°.

Het resultaat is hetzelfde als één draaiing van 180°.

We hebben dus een manier om transformaties met elkaar te combineren.

Dat blijkt de eerste aanwijzing naar groepentheorie.

------------------------------------------------------------------------

## 6.1.3 De vier eigenschappen van een groep

Een **groep** is een verzameling objecten waarop een bewerking is
gedefinieerd, waarbij vier eigenschappen gelden.

Noem de bewerking bijvoorbeeld `*`.

### 1. Geslotenheid

Als a en b elementen van de groep zijn, dan is ook

a \* b

een element van de groep.

Je valt dus niet buiten de verzameling.

### 2. Associativiteit

Voor alle a, b en c geldt:

(a \* b) \* c = a \* (b \* c)

De haakjes mogen dus verschoven worden.

Let op:

Associativiteit betekent **niet** dat de volgorde mag veranderen.

Dat zou commutativiteit zijn.

### 3. Neutraal element

Er bestaat een element e waarvoor:

e \* a = a

en

a \* e = a

Het neutrale element verandert niets.

Bij rotaties is de rotatie over 0° het neutrale element.

### 4. Inverse

Voor ieder element a bestaat een element a⁻¹ waarvoor:

a \* a⁻¹ = e

De inverse maakt de bewerking ongedaan.

Bij een rotatie van 90° is de inverse een rotatie van −90°.

------------------------------------------------------------------------

## 6.1.4 Een eerste voorbeeld: gehele getallen met optelling

Beschouw:

ℤ = {..., −2, −1, 0, 1, 2, ...}

met optelling.

Dit vormt een groep.

### Geslotenheid

Als a en b gehele getallen zijn, is a + b opnieuw een geheel getal.

### Associativiteit

(a + b) + c = a + (b + c)

### Neutraal element

0, want:

a + 0 = a

### Inverse

Voor a is de inverse −a:

a + (−a) = 0

Dus:

**(ℤ, +) is een groep.**

------------------------------------------------------------------------

## 6.1.5 Waarom is vermenigvuldiging van gehele getallen geen groep?

Je zou kunnen proberen:

(ℤ, ×)

te nemen.

Maar dat werkt niet.

Het probleem is de inverse.

Voor 2 zou een geheel getal x moeten bestaan waarvoor:

2x = 1

Dat geeft:

x = 1/2

maar 1/2 is geen geheel getal.

Dus niet ieder element heeft een inverse binnen ℤ.

Daarom vormen de gehele getallen met vermenigvuldiging geen groep.

------------------------------------------------------------------------

## 6.1.6 De rationale getallen en vermenigvuldiging

Beschouw de niet-nulle rationale getallen:

ℚ{0}

met vermenigvuldiging.

Nu werkt het wel:

-   product van twee rationale getallen is rationaal;
-   vermenigvuldiging is associatief;
-   1 is neutraal;
-   ieder niet-nul rationaal getal q heeft inverse 1/q.

Dus:

**(ℚ{0}, ×) is een groep.**

Dit voorbeeld laat een belangrijk principe zien:

> Een kleine verandering in de verzameling kan ervoor zorgen dat een
> bewerking wel of niet een groep vormt.

------------------------------------------------------------------------

## 6.1.7 Abelse groepen

Een groep heet **abels** of **commutatief** wanneer:

a \* b = b \* a

voor alle elementen.

(ℤ, +) is abels.

De rotaties van een cirkel zijn ook abels: twee rotaties kunnen van
volgorde verwisselen.

Maar niet alle symmetrieën zijn commutatief.

Dat wordt belangrijk bij permutaties en bij matrixgroepen.

------------------------------------------------------------------------

## 6.1.8 Permutaties

Een **permutatie** is een herschikking van objecten.

Stel:

A, B, C

Dan zijn mogelijke herschikkingen:

ABC\
ACB\
BAC\
BCA\
CAB\
CBA

Er zijn 3! = 6 permutaties.

De verzameling van alle permutaties van n objecten heet de
**symmetrische groep Sₙ**.

De bewerking is het uitvoeren van de ene permutatie na de andere.

De identiteit laat alles staan.

Iedere permutatie kan ongedaan worden gemaakt.

Dus vormen de permutaties een groep.

### Belangrijk

Permutaties zijn een eerste duidelijk voorbeeld waarbij:

**volgorde ertoe doet.**

Bijvoorbeeld:

-   eerst A en B verwisselen;
-   daarna B en C verwisselen

geeft in het algemeen iets anders dan de omgekeerde volgorde.

Daarom is Sₙ voor n ≥ 3 niet-abels.

------------------------------------------------------------------------

## 6.1.9 Subgroepen

Een **subgroep** is een deelverzameling van een groep die zelf met
dezelfde bewerking een groep vormt.

Voorbeeld:

De gehele getallen ℤ vormen een groep onder optelling.

De even gehele getallen:

{..., −4, −2, 0, 2, 4, ...}

vormen ook een groep onder optelling.

Want:

-   even + even = even;
-   0 zit erin;
-   het tegengestelde van een even getal is even.

Dus de even gehele getallen vormen een subgroep van ℤ.

------------------------------------------------------------------------

## 6.1.10 Cyclische groepen

Een groep kan soms volledig worden opgebouwd door steeds dezelfde
bewerking toe te passen.

Bijvoorbeeld:

{0, 1, 2, 3}

met optelling modulo 4.

We krijgen:

1 + 1 = 2\
1 + 1 + 1 = 3\
1 + 1 + 1 + 1 = 0

Het element 1 genereert de hele groep.

Zo'n groep heet **cyclisch**.

Cyclische groepen zijn belangrijk omdat ze eenvoudig zijn en veel
rotaties en periodieke structuren beschrijven.

------------------------------------------------------------------------

## 6.1.11 Symmetrie van een gelijkzijdige driehoek

Een gelijkzijdige driehoek heeft:

-   identiteit;
-   rotatie over 120°;
-   rotatie over 240°;
-   drie spiegelingen.

In totaal zijn er 6 symmetrieën.

Deze vormen de dihedrale groep D₃.

Hier zie je iets belangrijks:

Een geometrisch object levert vanzelf een algebraïsche structuur op.

**geometrie → transformaties → groep**

Dat is een van de fundamentele ideeën van de moderne wiskunde.

------------------------------------------------------------------------

## 6.1.12 Groepshomomorfismen

Stel dat we twee groepen hebben.

Een afbeelding f tussen de groepen heet een **groepshomomorfisme**
wanneer de groepsbewerking behouden blijft:

f(a \* b) = f(a) \* f(b)

De precieze bewerking links en rechts kan verschillend zijn, maar de
structuur van de bewerking wordt behouden.

Het idee is:

> We zijn niet geïnteresseerd in de concrete labels van de elementen,
> maar in de relaties ertussen.

Dit is een eerste kennismaking met een zeer belangrijke filosofie:

**structuur boven voorstelling.**

------------------------------------------------------------------------

## 6.1.13 Isomorfisme

Wanneer twee groepen structureel exact hetzelfde zijn, spreken we van
een **isomorfisme**.

Ze kunnen er aan de buitenkant volledig verschillend uitzien.

Maar als hun groepsstructuur dezelfde is, beschouwen we ze vanuit
abstract standpunt als hetzelfde type structuur.

Dit idee zal later opnieuw terugkomen bij:

-   vectorruimten;
-   topologische ruimten;
-   manifolds;
-   tensoren;
-   gauge-theorie.

------------------------------------------------------------------------

## 6.1.14 Matrixgroepen

Uit Fase 4 kennen we matrices.

Sommige verzamelingen matrices vormen groepen.

Bijvoorbeeld de verzameling van alle inverteerbare n × n-matrices vormt
de groep:

GL(n, ℝ)

De afkorting betekent:

**General Linear Group.**

De bewerking is matrixvermenigvuldiging.

Waarom alleen inverteerbare matrices?

Omdat ieder element een inverse moet hebben.

Deze groep beschrijft alle omkeerbare lineaire transformaties van een
n-dimensionale reële vectorruimte.

Dit is een directe brug tussen Fase 4 en groepentheorie.

------------------------------------------------------------------------

## 6.1.15 Rotaties als groepen

Rotaties in twee dimensies kunnen worden voorgesteld door matrices.

Een rotatie over hoek θ heeft matrix:

R(θ) =

\[ cos θ −sin θ \]\
\[ sin θ cos θ \]

Twee rotaties na elkaar geven:

R(θ₁)R(θ₂) = R(θ₁ + θ₂)

De rotatie van 0° is de identiteit.

De inverse van R(θ) is R(−θ).

Daarom vormen de rotaties een groep.

Dit is een belangrijk moment in het leerpad:

**geometrische symmetrie kan worden vertaald naar algebra.**

------------------------------------------------------------------------

## 6.1.16 Lie-groepen: de eerste blik

Tot nu toe waren groepen vooral discrete structuren.

Maar sommige symmetrieën veranderen **continu**.

De rotatie van een cirkel kan bijvoorbeeld met iedere hoek θ gebeuren.

De verzameling van rotaties in het vlak vormt de Lie-groep SO(2).

Een Lie-groep combineert twee structuren:

1.  groepsstructuur;
2.  gladde, continue structuur.

Dit is precies het soort combinatie dat later in differentiaalmeetkunde
en Yang--Mills nodig is.

Je hoeft Lie-groepen hier nog niet volledig te beheersen.

Het belangrijkste idee is:

> **Een Lie-groep is een groep waarvan de elementen zelf een gladde
> geometrische ruimte vormen en waarvan de groepsbewerkingen compatibel
> zijn met die gladde structuur.**

------------------------------------------------------------------------

## Oefeningen 6.1

### A. Groepsaxioma's

1.  Welke vier eigenschappen moet een groep hebben?
2.  Wat is het neutrale element van (ℤ, +)?
3.  Wat is de inverse van −7 in (ℤ, +)?
4.  Waarom vormen de natuurlijke getallen met optelling geen groep als ℕ
    = {0,1,2,...}?
5.  Waarom vormen de niet-nulle rationale getallen met vermenigvuldiging
    wel een groep?

### B. Symmetrie

6.  Hoeveel rotatiesymmetrieën heeft een vierkant?
7.  Welke rotatie is de inverse van 270°?
8.  Wat is de identiteit bij rotaties?
9.  Waarom zijn rotaties van een cirkel commutatief?
10. Waarom kunnen spiegelingen en rotaties van een figuur in het
    algemeen niet commuteren?

### C. Abstractie

11. Wat is het verschil tussen een groep en een specifieke voorstelling
    van een groep?
12. Wat bewaart een groepshomomorfisme?
13. Waarom is GL(n, ℝ) verbonden met Fase 4?
14. Wat is het verschil tussen een discrete groep en een Lie-groep?
15. Leg uit in eigen woorden wat bedoeld wordt met "structuur boven
    voorstelling".

### Antwoorden 6.1

1.  Geslotenheid, associativiteit, neutraal element en inverse.
2.  0.  
3.  7, want −7 + 7 = 0.
4.  Omdat bijvoorbeeld 1 geen inverse heeft binnen ℕ: er bestaat geen
    natuurlijk getal x waarvoor 1 + x = 0.
5.  Het product blijft rationaal, 1 is neutraal en ieder niet-nul
    rationaal getal q heeft inverse 1/q.
6.  Vier: 0°, 90°, 180° en 270°.
7.  90°, want 270° + 90° = 360°.
8.  Rotatie over 0° (of 360°).
9.  Omdat R(α)R(β) = R(β)R(α) = R(α+β).
10. Omdat de volgorde van de transformaties het resultaat kan
    veranderen.
11. Een groep is de abstracte structuur; een voorstelling is een
    concrete manier om die structuur te realiseren.
12. De groepsbewerking: f(a*b) = f(a)*f(b).
13. GL(n, ℝ) bestaat uit inverteerbare matrices en beschrijft omkeerbare
    lineaire transformaties van vectorruimten.
14. Een discrete groep heeft afzonderlijke elementen; een Lie-groep
    heeft daarnaast een continue/gladde structuur.
15. Dat de concrete aard van objecten minder belangrijk wordt dan de
    relaties en bewerkingen die hun structuur bepalen.

------------------------------------------------------------------------

## Verbinding met eerdere fasen

### Met Fase 4

Vectoren en matrices waren daar concrete algebraïsche objecten.

Nu vragen we:

> Welke verzameling matrices vormt een groep?

Daarmee verschuift de aandacht van individuele matrices naar de
structuur van de volledige verzameling.

### Met Fase 5

Fourieranalyse en differentiaalvergelijkingen toonden dat dezelfde
structuur vanuit verschillende voorstellingen kan worden bekeken.

Groepentheorie maakt dit idee abstracter.

### Naar Fase 7

Yang--Mills-theorie gebruikt symmetrieën die lokaal en continu zijn. De
groepen die deze symmetrieën beschrijven zijn Lie-groepen en hun
representaties.

------------------------------------------------------------------------

# Milestone 6.2 --- Topologie

**Doel:** begrijpen welke eigenschappen van een ruimte behouden blijven
wanneer je de ruimte continu vervormt.

## 6.2.1 Waarom topologie?

Stel dat je een koffiemok en een donut van klei maakt.

Je mag:

-   uitrekken;
-   indrukken;
-   buigen;
-   vervormen.

Maar je mag niet:

-   scheuren;
-   plakken;
-   een nieuw gat maken.

Een donut en een koffiemok hebben beide één gat.

Vanuit topologisch standpunt hebben ze dezelfde soort vorm.

Een bol en een donut hebben dat niet.

Topologie onderzoekt dus eigenschappen die behouden blijven onder
geschikte continue vervormingen.

Dit sluit rechtstreeks aan bij het leerpad: topologie is de studie van
ruimtelijke eigenschappen die behouden blijven onder continue
vervorming. fileciteturn8file3L236-L240

------------------------------------------------------------------------

## 6.2.2 Afstand is niet altijd nodig

In de gewone meetkunde meten we:

-   lengte;
-   hoek;
-   oppervlakte;
-   afstand.

Topologie is minder geïnteresseerd in exacte afstanden.

Een cirkel die je uitrekt tot een ovaal kan nog steeds topologisch
dezelfde ruimte zijn.

De exacte lengte van een lijnstuk kan veranderen.

Wat telt zijn bijvoorbeeld:

-   verbondenheid;
-   openheid;
-   continuïteit;
-   het aantal gaten;
-   compactheid.

------------------------------------------------------------------------

## 6.2.3 Verzamelingen als ruimtes

Een topologische ruimte begint met een verzameling X.

Daarbij kiezen we een verzameling deelverzamelingen van X die we **open
verzamelingen** noemen.

Deze verzameling open verzamelingen noemen we de topologie op X.

Een topologie moet voldoen aan drie regels:

1.  ∅ en X zijn open.
2.  De vereniging van willekeurig veel open verzamelingen is open.
3.  De doorsnede van eindig veel open verzamelingen is open.

Je hoeft deze regels niet alleen als axioma's te zien.

Ze formaliseren het idee van:

> "Welke gebieden beschouwen we als open?"

------------------------------------------------------------------------

## 6.2.4 Open intervallen

Op de reële getallen kunnen we bijvoorbeeld het interval:

(a,b)

beschouwen.

Dit betekent alle getallen die strikt tussen a en b liggen.

De eindpunten zijn niet inbegrepen.

Een open interval is een basisvoorbeeld van een open verzameling.

Waarom is dat nuttig?

Omdat we rond ieder punt in het interval een klein stukje kunnen bewegen
zonder onmiddellijk buiten het interval te vallen.

Dat intuïtieve idee van "ruimte rond een punt" is fundamenteel voor
topologie.

------------------------------------------------------------------------

## 6.2.5 Gesloten verzamelingen

Een verzameling is **gesloten** wanneer haar complement open is.

Op de reële getallen is:

\[a,b\]

een gesloten interval.

Hier zijn de eindpunten wel inbegrepen.

Belangrijk:

**open en gesloten zijn geen simpele tegenpolen.**

Een verzameling kan:

-   open zijn;
-   gesloten zijn;
-   beide zijn;
-   geen van beide zijn.

In een topologische ruimte zijn ∅ en X bijvoorbeeld zowel open als
gesloten.

------------------------------------------------------------------------

## 6.2.6 Omgeving van een punt

Een omgeving van een punt is grofweg een verzameling die voldoende
ruimte rond dat punt bevat.

In de gewone reële lijn kun je denken aan:

(x − ε, x + ε)

voor een positieve ε.

Topologie maakt het mogelijk om over nabijheid te praten zonder
noodzakelijk een specifieke afstandsformule te kiezen.

Dat is een van de redenen waarom topologie later belangrijk wordt in
meer algemene geometrische ruimten.

------------------------------------------------------------------------

## 6.2.7 Continue functies

In Fase 3 leerde je continuïteit via limieten.

Daar was het idee:

> Als x een beetje verandert, verandert f(x) ook maar een beetje.

Topologie formuleert continuïteit anders.

Een functie f: X → Y is continu wanneer het inverse beeld van iedere
open verzameling in Y een open verzameling in X is.

Dat klinkt abstracter, maar het idee is hetzelfde:

> De functie scheurt de topologische structuur niet uit elkaar.

Dit is een belangrijk voorbeeld van abstractie:

**dezelfde continuïteit die je in calculus leerde, wordt nu geformuleerd
zonder expliciet over afstanden of limieten te spreken.**

------------------------------------------------------------------------

## 6.2.8 Homeomorfisme

Een **homeomorfisme** is een bijectieve afbeelding tussen topologische
ruimten die:

-   continu is;
-   een continue inverse heeft.

Als twee ruimten homeomorf zijn, beschouwen we ze topologisch als
hetzelfde.

De koffiemok en donut zijn het klassieke intuïtieve voorbeeld.

------------------------------------------------------------------------

## 6.2.9 Invarianten

Een **topologische invariant** is een eigenschap die onder
homeomorfismen behouden blijft.

Voorbeelden zijn:

-   aantal samenhangende componenten;
-   bepaalde soorten gaten;
-   compactheid;
-   fundamentele groep.

Invarianten zijn bijzonder krachtig.

In plaats van alle mogelijke vervormingen te bestuderen, kunnen we een
eigenschap vinden die onmogelijk kan veranderen.

------------------------------------------------------------------------

## 6.2.10 Verbondenheid

Een ruimte is intuïtief **verbonden** wanneer zij uit één stuk bestaat.

Het interval:

\[0,1\]

is verbonden.

De verzameling:

\[0,1\] ∪ \[2,3\]

is niet verbonden.

Er zit een "gat" tussen de twee delen.

In topologie wordt verbondenheid nauwkeurig gedefinieerd met open en
gesloten verzamelingen, maar de intuïtie van "één stuk" is een goed
startpunt.

------------------------------------------------------------------------

## 6.2.11 Padverbondenheid

Een ruimte is **padverbonden** wanneer je twee punten met een continu
pad in de ruimte met elkaar kunt verbinden.

Bijvoorbeeld:

Een schijf in het vlak is padverbonden.

Je kunt van ieder punt naar ieder ander punt bewegen zonder de schijf te
verlaten.

Verbondenheid en padverbondenheid zijn verwant, maar niet in iedere
topologische ruimte equivalent.

Voor onze eerste kennismaking is het voldoende om te onthouden:

**padverbondenheid = verbonden kunnen worden door een continue route.**

------------------------------------------------------------------------

## 6.2.12 Compactheid

Compactheid is een van de belangrijkste topologische eigenschappen.

Op de reële lijn komt compactheid overeen met:

**gesloten en begrensd.**

Dus:

\[a,b\]

is compact.

Maar:

(a,b)

is niet compact.

En:

\[0,∞)

is niet compact.

In algemene topologische ruimten is compactheid subtieler dan "gesloten
en begrensd". De algemene definitie gebruikt open overdekkingen.

### Open overdekking

Een verzameling open verzamelingen bedekt X als ieder punt van X in
minstens één van die open verzamelingen zit.

Een ruimte is compact wanneer uit iedere open overdekking een eindige
deelverzameling gekozen kan worden die de hele ruimte nog steeds bedekt.

Dit klinkt abstract, maar het levert een krachtig idee:

> Een compacte ruimte kan niet op een onbeheersbare manier "oneindig
> groot" of "oneindig verspreid" zijn vanuit topologisch perspectief.

------------------------------------------------------------------------

## 6.2.13 Waarom compactheid belangrijk is

Compactheid zorgt ervoor dat bepaalde lokale eigenschappen globale
gevolgen krijgen.

Een klassiek resultaat uit de analyse is bijvoorbeeld:

Een continue functie op een compacte ruimte bereikt haar maximum en
minimum.

Op:

\[0,1\]

bereikt een continue functie f haar grootste en kleinste waarde.

Dat is geen toevalligheid.

De topologische eigenschap compactheid is de diepere reden.

------------------------------------------------------------------------

## 6.2.14 Topologische equivalentie

Vergelijk:

-   een cirkel;
-   een ellips;
-   een vervormde gesloten lus.

Ze kunnen topologisch equivalent zijn.

Maar:

-   een cirkel;
-   twee losstaande cirkels

zijn niet topologisch equivalent.

Het aantal verbonden componenten verschilt.

Evenzo zijn:

-   een bol;
-   een donut

niet homeomorf.

De donut heeft een gat.

------------------------------------------------------------------------

## 6.2.15 De fundamentele groep: eerste blik

Topologie kan ook vragen:

> Welke lussen in een ruimte kunnen worden vervormd tot elkaar?

Beschouw een cirkel.

Een lus die één keer rond de cirkel gaat kan niet continu worden
samengedrukt tot een punt zonder de cirkel te verlaten.

Bij een schijf kan dat wel.

Deze informatie wordt vastgelegd door de **fundamentele groep** π₁(X).

Voor een schijf is de fundamentele groep triviaal.

Voor een cirkel is:

π₁(S¹) ≅ ℤ

De gehele getallen tellen als het ware hoeveel keer een lus rond de
cirkel draait, inclusief richting.

Dit is een eerste glimp van hoe topologie algebra gebruikt.

En daarmee komen groepentheorie en topologie opnieuw samen.

------------------------------------------------------------------------

## 6.2.16 Eulerkarakteristiek

Een andere eenvoudige topologische invariant is de Eulerkarakteristiek.

Voor een veelvlak geldt:

χ = V − E + F

waar:

-   V = aantal hoekpunten;
-   E = aantal ribben;
-   F = aantal vlakken.

Voor een kubus:

V = 8\
E = 12\
F = 6

Dus:

χ = 8 − 12 + 6 = 2

Voor een bol is de Eulerkarakteristiek eveneens 2.

Voor een torus is de Eulerkarakteristiek 0.

Dit geeft een eenvoudige manier om bepaalde topologische verschillen te
herkennen.

------------------------------------------------------------------------

## 6.2.17 Van topologische ruimte naar manifold

Een **manifold** is, zeer intuïtief, een ruimte die lokaal lijkt op
gewone Euclidische ruimte.

Voorbeelden:

-   een lijn lijkt lokaal op ℝ;
-   een oppervlak lijkt lokaal op ℝ²;
-   onze ruimtetijd wordt in de relativiteit lokaal beschreven als een
    vierdimensionale manifold.

Waarom is dit belangrijk?

Omdat Fase 7 differentiaalmeetkunde introduceert.

Daar zullen we niet langer alleen vragen:

> Welke punten liggen in welke open verzamelingen?

maar ook:

> Hoe kunnen we lokaal rekenen met afgeleiden, vectoren, tensoren en
> kromming?

Topologie levert de onderliggende notie van ruimte.

Differentiaalmeetkunde voegt daar gladheid en lokale calculus aan toe.

------------------------------------------------------------------------

## 6.2.18 Topologie en natuurkunde

Topologische eigenschappen kunnen fysisch betekenisvol zijn.

Voorbeelden van ideeën die later belangrijk worden:

-   winding;
-   defecten;
-   vortexstructuren;
-   topologische ladingen;
-   homotopieklassen;
-   globale eigenschappen van velden.

Belangrijk is dat topologie niet simpelweg "de vorm van een object"
betekent.

Het gaat om structurele eigenschappen die niet verdwijnen door
toegestane continue vervormingen.

------------------------------------------------------------------------

## Oefeningen 6.2

### A. Basisbegrippen

1.  Wat onderzoekt topologie?
2.  Wat is het verschil tussen geometrie en topologie?
3.  Wat is een open verzameling?
4.  Wat is een gesloten verzameling?
5.  Kan een verzameling tegelijk open en gesloten zijn?

### B. Continuïteit

6.  Hoe werd continuïteit in Fase 3 intuïtief beschreven?
7.  Hoe wordt continuïteit topologisch geformuleerd?
8.  Wat is een homeomorfisme?
9.  Waarom zijn een koffiemok en een donut topologisch equivalent?
10. Waarom zijn een bol en een donut niet topologisch equivalent?

### C. Invarianten

11. Wat is een topologische invariant?
12. Is het exacte oppervlak van een object een topologische invariant?
13. Is het aantal verbonden componenten een topologische invariant?
14. Wat is de fundamentele groep?
15. Waarom is π₁(S¹) ≅ ℤ betekenisvol?

### D. Vooruitblik

16. Wat is een manifold in intuïtieve zin?
17. Waarom is topologie een voorbereiding op differentiaalmeetkunde?
18. Wat voegt differentiaalmeetkunde toe aan topologie?

### Antwoorden 6.2

1.  Eigenschappen van ruimten die behouden blijven onder continue
    vervormingen.
2.  Geometrie houdt zich sterk bezig met metrische eigenschappen zoals
    afstand, hoek en lengte; topologie abstraheert daar grotendeels van
    en kijkt naar eigenschappen die onder continue vervorming behouden
    blijven.
3.  Een verzameling die deel uitmaakt van de gekozen topologie;
    intuïtief een verzameling waarin ieder punt voldoende "ruimte rondom
    zich" heeft.
4.  Een verzameling waarvan het complement open is.
5.  Ja. ∅ en de volledige ruimte X zijn bijvoorbeeld zowel open als
    gesloten.
6.  Als de invoer een beetje verandert, verandert de uitvoer ook maar
    een beetje.
7.  Het inverse beeld van iedere open verzameling is open.
8.  Een bijectieve continue afbeelding met een continue inverse.
9.  Beide hebben één "gat" en kunnen zonder scheuren of plakken in
    elkaar worden vervormd.
10. Een bol heeft geen gat zoals een torus; de relevante topologische
    invariant verschilt.
11. Een eigenschap die behouden blijft onder homeomorfismen.
12. Nee. Je kunt het oppervlak veranderen door uitrekken.
13. Ja.
14. Een algebraïsche structuur die informatie bevat over lussen en hoe
    die continu in elkaar kunnen worden vervormd.
15. De gehele getallen coderen hoeveel keer een lus rond de cirkel
    windt.
16. Een ruimte die lokaal op gewone Euclidische ruimte lijkt.
17. Topologie levert de abstracte structuur van de ruimte;
    differentiaalmeetkunde voegt gladheid, lokale coördinaten,
    afgeleiden en uiteindelijk kromming toe.
18. Ze maakt calculus mogelijk op algemene ruimten en introduceert onder
    andere raakruimten, vectorvelden, differentiaalvormen, metrics en
    connecties.

------------------------------------------------------------------------

## Verbinding met eerdere fasen

### Met Fase 3

Continuïteit is niet verdwenen.

We hebben haar juist veralgemeend.

In Fase 3 dacht je:

**limiet → continuïteit**

In Fase 6 denken we:

**open verzamelingen → topologische continuïteit**

De concrete rekenkundige limiet is dus één voorstelling van een veel
algemener concept.

### Met Fase 4

Vectorruimten zijn algebraïsche structuren.

Topologische ruimten zijn structurele ruimten.

In Fase 7 zullen beide samenkomen.

### Met Milestone 6.1

De fundamentele groep laat zien dat topologische vragen algebraïsche
antwoorden kunnen krijgen.

Dus:

**topologie → groepentheorie**

### Naar Fase 7

Een manifold combineert topologische en gladde structuur.

Dat is de natuurlijke ingang naar differentiaalmeetkunde.

------------------------------------------------------------------------

# Milestone 6.3 --- Tensorrekening

**Doel:** begrijpen wat tensoren zijn, hoe vectoren en covectoren in één
formeel kader passen, en waarom tensoren nodig zijn om fysische wetten
onafhankelijk van coördinaten te formuleren.

## 6.3.1 Waarom hebben we tensoren nodig?

In Fase 4 leerden we vectoren.

Een vector kan bijvoorbeeld een snelheid voorstellen.

In twee dimensies kunnen we schrijven:

v = \[vˣ, vʸ\]

Maar de componenten vˣ en vʸ hangen af van onze keuze van coördinaten.

Draai je het assenstelsel, dan veranderen de componenten.

De fysieke vector zelf is niet veranderd.

Dit verschil is essentieel:

> **Een object is niet hetzelfde als zijn componenten.**

Tensorrekening geeft ons een precieze taal om dat onderscheid te maken.

------------------------------------------------------------------------

## 6.3.2 Vectoren als geometrische objecten

Een vector kun je intuïtief zien als:

-   een richting;
-   een grootte;
-   of algemener: een element van een vectorruimte.

De componenten zijn de getallen waarmee je de vector in een gekozen
basis beschrijft.

Bijvoorbeeld:

v = 2e₁ + 3e₂

De vector is v.

De getallen 2 en 3 zijn de componenten ten opzichte van de gekozen
basis.

Verander je de basis, dan veranderen de componenten.

------------------------------------------------------------------------

## 6.3.3 Covectoren

Een **covector** is een lineaire afbeelding van een vectorruimte naar de
reële getallen.

Als α een covector is, dan:

α: V → ℝ

en:

α(av + bw) = aα(v) + bα(w)

Een covector neemt dus een vector als invoer en produceert een getal.

Dit lijkt misschien abstract.

Maar het is zeer belangrijk.

Vectoren en covectoren zijn verschillende soorten objecten.

We schrijven een vector vaak met bovenindex:

vⁱ

en een covector met onderindex:

αᵢ

De boven- en onderindex zijn niet slechts typografie.

Ze geven aan hoe de componenten onder een coördinatentransformatie
veranderen.

------------------------------------------------------------------------

## 6.3.4 De duale ruimte

De verzameling van alle covectoren op V heet de **duale ruimte**:

V\*

Dus:

V\* = {alle lineaire afbeeldingen V → ℝ}

Als V n-dimensionaal is, dan is V\* eveneens n-dimensionaal.

Maar V en V\* zijn conceptueel verschillende vectorruimten.

Er is geen automatische identificatie tussen een vector en een covector.

Daarvoor hebben we extra structuur nodig.

Die structuur is vaak een **metriek**.

------------------------------------------------------------------------

## 6.3.5 Het inproduct

Uit Fase 4 kennen we het inproduct:

u · v

Het geeft onder andere een manier om:

-   lengtes te berekenen;
-   hoeken te bepalen;
-   projecties te maken.

Een metriek generaliseert dit idee.

We kunnen schrijven:

g(u,v)

Een metriek neemt twee vectoren en produceert een getal.

In componenten:

g(u,v) = gᵢⱼ uⁱ vʲ

Hier verschijnen voor het eerst twee indices.

------------------------------------------------------------------------

## 6.3.6 De metriek koppelt vectoren aan covectoren

Gegeven een metriek g kunnen we uit een vector v een covector maken.

In componentnotatie:

vᵢ = gᵢⱼ vʲ

Dit wordt soms informeel "index verlagen" genoemd.

Omgekeerd kan met de inverse metriek een index worden verhoogd:

vⁱ = gⁱⱼ vⱼ

Dit is een cruciaal onderscheid.

**Zonder extra structuur zijn vectoren en covectoren niet hetzelfde
object.**

Met een metriek kunnen we ze aan elkaar koppelen.

------------------------------------------------------------------------

## 6.3.7 Multilineaire afbeeldingen

Een lineaire afbeelding is lineair in één argument.

Een **multilineaire afbeelding** is lineair in ieder argument
afzonderlijk.

Bijvoorbeeld:

T(u,v)

kan twee vectoren als invoer nemen.

Als T bilineair is:

T(au + bw, v) = aT(u,v) + bT(w,v)

en ook:

T(u, av + bw) = aT(u,v) + bT(u,w)

Tensoren zijn opgebouwd uit dit soort multilineaire structuren.

------------------------------------------------------------------------

## 6.3.8 Tensoren als algemene objecten

Een tensor kan verschillende aantallen vector- en covectorargumenten
hebben.

Een tensor van type (r,s) heeft:

-   r contravariante indices;
-   s covariante indices.

In componentnotatie kan zo'n tensor worden geschreven als:

Tⁱ¹ⁱ²...ⁱʳⱼ₁ⱼ₂...ⱼₛ

Voorbeelden:

-   scalar: type (0,0);
-   vector: type (1,0);
-   covector: type (0,1);
-   metriek: type (0,2).

Een matrix kan in sommige contexten de componenten van een tensor
voorstellen, maar:

> **niet iedere matrix is automatisch een tensor.**

Het verschil zit in de transformatiewet.

------------------------------------------------------------------------

## 6.3.9 Einstein-sommatieconventie

Tensorrekening gebruikt vaak de **Einstein-sommatieconventie**.

Wanneer een index één keer boven en één keer onder voorkomt, wordt over
die index gesommeerd.

Bijvoorbeeld:

aⁱbᵢ

betekent:

Σᵢ aⁱbᵢ

In drie dimensies:

aⁱbᵢ = a¹b₁ + a²b₂ + a³b₃

Dit is precies het soort compacte notatie dat nodig wordt wanneer
uitdrukkingen veel indices krijgen.

------------------------------------------------------------------------

## 6.3.10 Vrije en dummy-indices

Dit onderscheid is essentieel.

In:

aⁱbᵢ

is i een **dummy-index**.

Er wordt over i gesommeerd.

In:

Tⁱⱼ vʲ

is j een dummy-index, maar i is een **vrije index**.

De uitdrukking heeft dus één vrije index:

wⁱ = Tⁱⱼvʲ

De vrije index bepaalt het type van het resultaat.

Een goede controle is:

> Aan beide kanten van een tensorvergelijking moeten de vrije indices
> overeenkomen.

------------------------------------------------------------------------

## 6.3.11 Tensorproduct

Als V en W vectorruimten zijn, kunnen we een nieuwe vectorruimte
construeren:

V ⊗ W

de tensorproductruimte.

Een eenvoudig symbool:

u ⊗ v

stelt een element van deze tensorproductruimte voor.

Het tensorproduct is bilineair:

(au + bw) ⊗ v = a(u⊗v) + b(w⊗v)

en:

u ⊗ (av + bw) = a(u⊗v) + b(u⊗w)

Tensorproducten vormen de algebraïsche bouwsteen voor algemene
tensorruimten.

------------------------------------------------------------------------

## 6.3.12 Tensoren en matrices

Een matrix heeft bijvoorbeeld componenten:

Aⁱⱼ

Je kunt haar gebruiken om een vector te transformeren:

wⁱ = Aⁱⱼvʲ

Dat lijkt op gewone matrixvermenigvuldiging.

Maar tensorrekening stelt een strengere vraag:

> Hoe veranderen Aⁱⱼ en vʲ wanneer we van coördinatenstelsel veranderen?

Alleen als de componenten zich volgens de juiste transformatiewet
gedragen, beschrijven ze een tensor.

Dit is één van de belangrijkste ideeën van de milestone.

------------------------------------------------------------------------

## 6.3.13 Contravariante en covariante componenten

Bij een coördinatentransformatie veranderen contravariante en covariante
componenten verschillend.

Heel schematisch:

x'ⁱ = (∂x'ⁱ/∂xʲ) xʲ

Een covector verandert volgens de inverse transformatie:

α'ᵢ = (∂xʲ/∂x'ⁱ) αⱼ

Je hoeft de Jacobiaan hier nog niet volledig te beheersen.

Het belangrijke inzicht is:

> Bovenindex en onderindex coderen verschillende
> transformatie-eigenschappen.

Dat wordt in Fase 7 fundamenteel.

------------------------------------------------------------------------

## 6.3.14 De Jacobiaan

Wanneer we van coördinaten veranderen:

x → x'

beschrijft de matrix:

Jⁱⱼ = ∂x'ⁱ/∂xʲ

hoe kleine veranderingen in de ene coördinatenbeschrijving verbonden
zijn met kleine veranderingen in de andere.

Dit is de **Jacobiaanmatrix**.

De Jacobiaan is een belangrijke brug tussen:

-   calculus;
-   lineaire algebra;
-   tensorrekening;
-   differentiaalmeetkunde.

------------------------------------------------------------------------

## 6.3.15 De metriek als tensor

Een metriek heeft componenten:

gᵢⱼ

en is een tensor van type (0,2).

De metriek bepaalt bijvoorbeeld het kwadraat van de lengte van een
vector:

\|\|v\|\|² = gᵢⱼ vⁱvʲ

In gewone Euclidische ruimte is:

gᵢⱼ = δᵢⱼ

en dus:

\|\|v\|\|² = (v¹)² + (v²)² + (v³)²

In relativiteit is de metriek niet Euclidisch. Daar kan de signatuur
bijvoorbeeld van Minkowski-type zijn.

Het algemene idee blijft:

**de metriek vertelt ons hoe we geometrische grootheden uit componenten
construeren.**

------------------------------------------------------------------------

## 6.3.16 Contractie

Wanneer een bovenindex en een onderindex worden samengenomen en
gesommeerd, spreken we van **contractie**.

Voorbeeld:

Tⁱᵢ

is de contractie van een tensor van type (1,1).

Bij een matrix komt dit overeen met de **trace**:

Tr(T) = T¹₁ + T²₂ + T³₃ + ...

Contractie is dus een zeer algemene versie van iets dat je al uit
lineaire algebra kent.

------------------------------------------------------------------------

## 6.3.17 Tensoren en fysica

Tensoren zijn bijzonder nuttig omdat natuurkundige wetten onafhankelijk
van een willekeurige coördinatenkeuze moeten zijn.

Voorbeelden:

-   snelheid;
-   elektromagnetisch veld;
-   metriek;
-   spanning in een materiaal;
-   energie-impuls;
-   kromming.

Een natuurkundige wet moet niet veranderen omdat wij onze assen anders
tekenen.

De componenten veranderen wel.

De tensoriële relatie blijft geldig.

Dit is de diepere betekenis van coördinatenonafhankelijkheid.

------------------------------------------------------------------------

## 6.3.18 Het elektromagnetische veld als tensor

In relativistische formulering kunnen elektrische en magnetische velden
samen worden beschreven door de elektromagnetische veldtensor:

Fᵢⱼ

Dit is een antisymmetrische tensor.

De elektrische en magnetische velden zijn dan verschillende componenten
van één geometrisch object.

Dat is een prachtig voorbeeld van wat tensorrekening mogelijk maakt:

> Twee verschijnselen die in één coördinatenstelsel verschillend lijken,
> kunnen onderdelen zijn van één onderliggende geometrische structuur.

------------------------------------------------------------------------

## 6.3.19 Tensoren en relativiteit

In de algemene relativiteit is de metriek:

gᵢⱼ

het centrale geometrische veld.

Uit de metriek kunnen we via afgeleiden en aanvullende constructies de
connectie en vervolgens kromming opbouwen.

De Einsteinveldvergelijkingen kunnen dan tensorieel worden geschreven.

Het voordeel is dat de vergelijking onafhankelijk is van de gekozen
coördinaten.

Dit is precies de reden dat tensorrekening een noodzakelijke
voorbereiding is op differentiaalmeetkunde.

------------------------------------------------------------------------

## 6.3.20 Van tensoren naar differentiaalmeetkunde

In Fase 7 zullen we werken met:

-   raakvectoren;
-   raakruimten;
-   cotangente ruimten;
-   vectorvelden;
-   differentiaalvormen;
-   tensorvelden;
-   metrische tensoren;
-   connecties;
-   kromming.

Een tensor in één vectorruimte is nog niet hetzelfde als een tensorveld
op een manifold.

Een tensorveld geeft op ieder punt van de ruimte een tensor.

Daarmee wordt de overgang gemaakt van:

**lineaire algebra → lokale geometrie → globale geometrie.**

------------------------------------------------------------------------

## Oefeningen 6.3

### A. Vectoren en covectoren

1.  Wat is het verschil tussen een vector en een covector?
2.  Wat is de duale ruimte V\*?
3.  Waarom zijn de componenten van een vector niet hetzelfde als de
    vector zelf?
4.  Wat doet een covector met een vector?
5.  Waarom is een metriek nuttig bij het koppelen van vectoren en
    covectoren?

### B. Tensoren

6.  Wat betekent een tensor van type (1,0)?
7.  Wat betekent een tensor van type (0,1)?
8.  Van welk type is een metriek gᵢⱼ?
9.  Wat betekent Einstein-sommatieconventie?
10. Welke index is vrij in Tⁱⱼvʲ?
11. Welke index is een dummy-index in Tⁱⱼvʲ?
12. Wat betekent contractie?

### C. Coördinaten

13. Waarom veranderen tensorcomponenten wanneer we van
    coördinatenstelsel veranderen?
14. Waarom verandert de onderliggende tensor niet noodzakelijk?
15. Wat is de Jacobiaanmatrix?
16. Waarom is niet iedere matrix automatisch een tensor?

### D. Fysica

17. Waarom zijn tensoren belangrijk voor natuurkundige wetten?
18. Hoe kunnen elektrische en magnetische velden in relativistische
    fysica samen worden beschreven?
19. Waarom is de metriek belangrijk in algemene relativiteit?
20. Waarom vormt tensorrekening een voorbereiding op
    Yang--Mills-theorie?

### Antwoorden 6.3

1.  Een vector is een element van V; een covector is een lineaire
    afbeelding V → ℝ en behoort tot V\*.
2.  De verzameling van alle lineaire afbeeldingen van V naar ℝ.
3.  De componenten zijn afhankelijk van de gekozen basis; de vector is
    het onderliggende geometrische/algebraïsche object.
4.  Hij neemt een vector als invoer en geeft een getal als uitvoer.
5.  Een metriek levert een manier om een vector aan een covector te
    koppelen.
6.  Een vector.
7.  Een covector.
8.  Type (0,2).
9.  Een index die eenmaal boven en eenmaal onder voorkomt, wordt
    automatisch gesommeerd.
10. i.  
11. j.  
12. Een bovenindex en onderindex worden samengenomen en gesommeerd.
13. Omdat hun componenten volgens een specifieke transformatiewet
    veranderen.
14. Omdat de coördinatentransformatie alleen de beschrijving verandert;
    het onderliggende object kan hetzelfde blijven.
15. De matrix van partiële afgeleiden die de lokale verandering van
    coördinaten beschrijft.
16. Omdat een tensor niet alleen uit een tabel getallen bestaat; zijn
    componenten moeten onder coördinatentransformaties volgens de juiste
    tensortransformatiewet veranderen.
17. Omdat de wetten dan onafhankelijk van een willekeurig gekozen
    coördinatenstelsel kunnen worden geformuleerd.
18. Door ze samen te brengen in de elektromagnetische veldtensor Fᵢⱼ.
19. De metriek bepaalt de lokale geometrie en speelt een centrale rol
    bij afstanden, tijdintervallen, causaliteit en kromming.
20. Omdat Yang--Mills-theorie werkt met geometrische velden, lokale
    symmetrie en objecten die coördinatenonafhankelijk moeten worden
    beschreven.

------------------------------------------------------------------------

# Verbindingen binnen Fase 6

De drie milestones zijn geen losse onderwerpen.

Ze vormen samen één abstracte keten.

## 1. Groepentheorie vertelt ons wat symmetrie is

We nemen transformaties:

**transformaties → compositie → groep**

Een groep beschrijft dus de algebra van symmetrieën.

## 2. Topologie vertelt ons wat "continu" betekent

We nemen een ruimte:

**verzameling → topologie → continuïteit → homeomorfisme**

Topologie beschrijft wat behouden blijft wanneer we een ruimte continu
vervormen.

## 3. Tensorrekening vertelt ons hoe objecten zich gedragen onder coördinatentransformaties

We nemen lokale componenten:

**vector → covector → tensor → transformatiewet**

Tensoren maken het mogelijk om geometrische en fysische relaties
onafhankelijk van een coördinatenkeuze te formuleren.

------------------------------------------------------------------------

# De drie grote ideeën van Fase 6

## Idee 1 --- Structuur is belangrijker dan voorstelling

Een groep kan worden voorgesteld met:

-   getallen;
-   matrices;
-   permutaties;
-   geometrische transformaties.

De voorstelling kan veranderen.

De groepsstructuur blijft.

------------------------------------------------------------------------

## Idee 2 --- Continuïteit kan worden geabstraheerd

In calculus dacht je aan:

limieten.

In topologie kun je continuïteit formuleren met:

open verzamelingen.

Het concrete metrische kader is niet fundamenteel noodzakelijk.

------------------------------------------------------------------------

## Idee 3 --- Componenten zijn niet het object

Een tensor kan verschillende componenten hebben in verschillende
coördinatenstelsels.

Dat betekent niet dat de tensor zelf verschillende fysieke objecten
wordt.

De componenten zijn een beschrijving.

Het tensoriële object is de structuur die achter die beschrijvingen
ligt.

------------------------------------------------------------------------

# Een belangrijke synthese

We kunnen nu drie soorten onafhankelijkheid onderscheiden.

### Algebraïsche onafhankelijkheid

Een groep wordt niet bepaald door de labels van haar elementen.

### Topologische onafhankelijkheid

Een topologische ruimte wordt niet bepaald door exacte afstanden en
hoeken.

### Coördinatenonafhankelijkheid

Een tensorieel fysisch object wordt niet bepaald door één specifieke
coördinatenbeschrijving.

Dit is één van de belangrijkste filosofische stappen in het hele
leerpad:

> **Wiskunde probeert steeds meer de eigenschappen te isoleren die
> werkelijk structureel zijn.**

------------------------------------------------------------------------

# Veelgemaakte fouten in Fase 6

## Fout 1 --- "Een groep is gewoon een verzameling"

Nee.

Een groep bestaat uit:

-   een verzameling;
-   een bewerking;
-   en specifieke eigenschappen van die bewerking.

Dezelfde verzameling kan met verschillende bewerkingen wel of geen groep
vormen.

------------------------------------------------------------------------

## Fout 2 --- Associatief verwarren met commutatief

Associatief:

(a*b)*c = a*(b*c)

Commutatief:

a*b = b*a

Dit zijn verschillende eigenschappen.

------------------------------------------------------------------------

## Fout 3 --- Denken dat iedere symmetrie een spiegeling is

Symmetrie kan ook:

-   rotatie;
-   translatie;
-   permutatie;
-   of een veel algemenere transformatie

zijn.

------------------------------------------------------------------------

## Fout 4 --- Denken dat open en gesloten tegengestelden zijn

Een verzameling kan:

-   open;
-   gesloten;
-   beide;
-   geen van beide

zijn.

------------------------------------------------------------------------

## Fout 5 --- Denken dat topologie "vormen tekenen" is

Een tekening helpt bij de intuïtie, maar topologie is een formele studie
van structurele eigenschappen van ruimten.

------------------------------------------------------------------------

## Fout 6 --- Denken dat continuïteit verdwenen is

Integendeel.

Topologie generaliseert continuïteit.

De definitie met open verzamelingen is een abstractere formulering van
hetzelfde fundamentele idee.

------------------------------------------------------------------------

## Fout 7 --- Vector en covector als hetzelfde beschouwen

Een vector behoort tot V.

Een covector behoort tot V\*.

Een metriek kan een identificatie tussen beide leveren, maar dat is
extra structuur.

------------------------------------------------------------------------

## Fout 8 --- Iedere matrix een tensor noemen

Een matrix is een rechthoekige tabel getallen.

Een tensor heeft een specifieke transformatiewet.

Een matrix kan de componenten van een tensor voorstellen, maar de tabel
op zichzelf is niet de volledige definitie.

------------------------------------------------------------------------

## Fout 9 --- Vrije en dummy-indices verwarren

In:

Tⁱⱼvʲ

is j een dummy-index en i vrij.

De vrije index moet aan beide kanten van een vergelijking overeenkomen.

------------------------------------------------------------------------

## Fout 10 --- Denken dat Einstein-sommatie "alle indices optellen" betekent

Alleen een index die precies één keer boven en één keer onder voorkomt,
wordt volgens de standaardconventie gesommeerd.

Een vrije index wordt niet gesommeerd.

------------------------------------------------------------------------

# Eindtoets Fase 6

Je bent klaar voor **Fase 7 --- Differentiaalmeetkunde & Kwantumvelden**
wanneer je niet alleen definities kunt reproduceren, maar de drie
soorten abstractie kunt verbinden.

Maak eerst alles op papier.

## Deel A --- Groepentheorie

1.  Noem de vier groepsaxioma's.
2.  Wat is het neutrale element in (ℤ,+)?
3.  Waarom vormen ℤ met vermenigvuldiging geen groep?
4.  Wat is een subgroep?
5.  Wat is een permutatie?
6.  Waarom is S₃ niet-abels?
7.  Wat is een groepshomomorfisme?
8.  Wat is een isomorfisme?
9.  Waarom zijn rotaties voorbeelden van symmetrieën?
10. Wat maakt een Lie-groep bijzonder?

## Deel B --- Topologie

11. Wat onderzoekt topologie?
12. Wat is een open verzameling?
13. Wat is een gesloten verzameling?
14. Wat is continuïteit in topologische termen?
15. Wat is een homeomorfisme?
16. Wat betekent verbondenheid?
17. Wat betekent padverbondenheid?
18. Wat is compactheid?
19. Wat beschrijft de fundamentele groep?
20. Waarom is een bol niet homeomorf met een torus?

## Deel C --- Tensorrekening

21. Wat is een covector?
22. Wat is V\*?
23. Wat betekent een tensor van type (1,0)?
24. Wat betekent een tensor van type (0,2)?
25. Wat is Einstein-sommatie?
26. Wat is een vrije index?
27. Wat is een dummy-index?
28. Wat is contractie?
29. Waarom zijn tensoren nuttig in de fysica?
30. Waarom is coördinatenonafhankelijkheid belangrijk?

------------------------------------------------------------------------

## Antwoorden eindtoets

1.  Geslotenheid, associativiteit, neutraal element en inverse.

2.  0.  

3.  Niet ieder geheel getal heeft een multiplicatieve inverse binnen ℤ;
    2 zou bijvoorbeeld inverse 1/2 nodig hebben.

4.  Een deelverzameling die met dezelfde bewerking zelf een groep vormt.

5.  Een herschikking van elementen.

6.  Omdat de compositie van sommige permutaties afhangt van de volgorde.

7.  Een afbeelding die de groepsbewerking bewaart.

8.  Een bijectief homomorfisme; de twee groepen hebben dezelfde
    abstracte structuur.

9.  Omdat een rotatie de relevante geometrische structuur behoudt.

10. Naast de groepsstructuur heeft een Lie-groep een continue/gladde
    structuur.

11. Ruimtelijke eigenschappen die behouden blijven onder continue
    vervormingen.

12. Een element van de gekozen topologie; intuïtief een verzameling
    waarin rond ieder punt lokaal ruimte zit.

13. Een verzameling waarvan het complement open is.

14. Het inverse beeld van iedere open verzameling is open.

15. Een bijectieve continue afbeelding met continue inverse.

16. Dat de ruimte niet in twee disjuncte niet-lege open delen kan worden
    opgesplitst.

17. Dat ieder paar punten verbonden kan worden door een continu pad.

18. Een eigenschap die algemeen via open overdekkingen wordt
    gedefinieerd; op ℝ komt zij overeen met gesloten en begrensd.

19. Informatie over lussen en hun continue vervormingen.

20. Ze hebben verschillende topologische structuur; een torus heeft een
    gat terwijl een bol dat niet heeft.

21. Een lineaire afbeelding V → ℝ.

22. De duale ruimte, de ruimte van alle covectoren op V.

23. Een vector.

24. Een tensor met twee covariante indices.

25. Een index die eenmaal boven en eenmaal onder voorkomt wordt
    gesommeerd.

26. Een index die niet wordt gesommeerd en de tensorstructuur van een
    uitdrukking bepaalt.

27. Een gesommeerde index.

28. Het samenvoegen van een bovenindex en een onderindex en daarover
    sommeren.

29. Ze maken het mogelijk om relaties onafhankelijk van de gekozen
    coördinaten te formuleren.

30. Omdat natuurkundige wetten niet afhankelijk mogen zijn van een
    willekeurige keuze van assenstelsel of coördinaten.

------------------------------------------------------------------------

# Conceptuele eindcheck

Beantwoord deze vragen zonder formules.

### 1. Waarom is groepentheorie een theorie van symmetrie?

Omdat een symmetrie kan worden opgevat als een transformatie die een
structuur behoudt, en zulke transformaties kunnen worden samengesteld en
omgekeerd.

### 2. Waarom is topologie abstracter dan gewone meetkunde?

Omdat topologie veel metrische informatie weglaat en zich concentreert
op eigenschappen die onder continue vervorming behouden blijven.

### 3. Waarom zijn tensoren meer dan matrices?

Omdat een tensor wordt gekenmerkt door zijn gedrag onder
coördinatentransformaties. Een matrix is slechts één mogelijke
representatie.

### 4. Wat is de rode draad van deze drie milestones?

In alle drie proberen we de beschrijving los te maken van toevallige
keuzes:

-   groepentheorie abstraheert van de concrete voorstelling van
    symmetrieën;
-   topologie abstraheert van exacte afstanden en hoeken;
-   tensorrekening abstraheert van een specifieke
    coördinatenbeschrijving.

### 5. Waarom is dit nodig voor Fase 7?

Omdat differentiaalmeetkunde precies deze structuren op één plaats
samenbrengt:

-   ruimten;
-   lokale coördinaten;
-   vectoren;
-   covectoren;
-   tensoren;
-   groepen;
-   continue transformaties.

Daarbovenop komen dan connecties en kromming.

------------------------------------------------------------------------

# Poort naar Fase 7 --- Differentiaalmeetkunde & Kwantumvelden

Fase 7 is het punt waarop de verschillende lijnen van het leerpad
samenkomen.

De structuur van het leerpad noemt als volgende stappen:

-   vectorbundels en connecties;
-   Yang--Mills-theorie;
-   een unificerend begrip van materie, krachten en ruimtetijd binnen
    een symmetrisch wiskundig kader. fileciteturn8file3L242-L245

Om die stap te kunnen maken, moet je uit Fase 6 vooral het volgende
meenemen.

## Uit groepentheorie

Je moet begrijpen:

**groep → symmetrie → groepsactie → Lie-groep**

De belangrijkste intuïtie is dat een symmetrie niet alleen een visueel
patroon is, maar een mathematische transformatie.

------------------------------------------------------------------------

## Uit topologie

Je moet begrijpen:

**topologische ruimte → continuïteit → homeomorfisme → manifold**

De belangrijkste intuïtie is dat een ruimte structureel kan worden
beschreven zonder haar meteen met afstanden en hoeken vast te leggen.

------------------------------------------------------------------------

## Uit tensorrekening

Je moet begrijpen:

**vector → covector → tensor → coördinatentransformatie →
coördinatenonafhankelijke wet**

De belangrijkste intuïtie is dat componenten slechts een beschrijving
zijn.

------------------------------------------------------------------------

# De grote brug naar Yang--Mills

Hier verschijnt de eerste echte voorproef van het uiteindelijke doel.

In elektromagnetisme heb je een veld.

In algemene relativiteit heb je een metriek en geometrie.

In Yang--Mills heb je een **gaugeveld** dat gekoppeld is aan een lokale
symmetrie.

De vereenvoudigde gedachtegang is:

**symmetrie → groep**

**ruimte → manifold**

**lokale symmetrie → gaugegroep**

**lokale vergelijking → connectie**

**connectie → kromming**

**kromming → veldsterkte**

Dit betekent dat de begrippen uit Fase 6 geen losse abstracte wiskunde
zijn.

Ze vormen de voorbereidende taal voor de geometrische beschrijving van
fundamentele interacties.

------------------------------------------------------------------------

# Mastery check --- Fase 6

Gebruik de volgende schaal.

### Niveau 1 --- Herkennen

Je kunt:

-   de groepsaxioma's noemen;
-   eenvoudige groepen herkennen;
-   open en gesloten verzamelingen herkennen;
-   vectoren, covectoren en tensoren onderscheiden.

### Niveau 2 --- Toepassen

Je kunt:

-   eenvoudige groepsbewerkingen uitvoeren;
-   inverses bepalen;
-   eenvoudige symmetrieën analyseren;
-   continuïteit topologisch uitleggen;
-   Einstein-sommatie lezen;
-   vrije en dummy-indices herkennen.

### Niveau 3 --- Verbinden

Je kunt uitleggen:

-   waarom symmetrieën groepen vormen;
-   waarom topologie continuïteit formaliseert;
-   waarom tensoren coördinatenonafhankelijkheid mogelijk maken;
-   hoe matrices, groepen en lineaire transformaties samenhangen;
-   hoe de fundamentele groep topologie met algebra verbindt.

### Niveau 4 --- Voorbereid op Fase 7

Je kunt zonder hulp uitleggen:

**waarom een manifold meer structuur nodig heeft dan een gewone
topologische ruimte,**

**waarom vectoren en covectoren op ieder punt van een manifold
voorkomen,**

**waarom een metriek een tensorveld is,**

**waarom een Lie-groep relevant is voor continue symmetrieën,**

en

**waarom connecties nodig zijn om informatie op verschillende punten met
elkaar te vergelijken.**

Als dit laatste nog moeilijk is, is dat normaal. Het wordt in Fase 7
stap voor stap opgebouwd.

------------------------------------------------------------------------

# Skilltree --- Fase 6

De kennis van Fase 6 kan als volgt als skilltree worden voorgesteld.

``` text
                         FASE 6
                           │
             ┌─────────────┼─────────────┐
             │             │             │
        GROEPEN         TOPOLOGIE      TENSOREN
             │             │             │
        Symmetrie       Open sets     Vectoren
             │             │             │
        Groepen       Continuïteit   Covectoren
             │             │             │
       Subgroepen     Homeomorfisme    Duale ruimte
             │             │             │
      Permutaties     Verbondenheid    Tensorproduct
             │             │             │
       Homomorfisme    Compactheid      Indexnotatie
             │             │             │
       Isomorfisme   Fundamentele groep  Contractie
             │             │             │
       Matrixgroepen     Manifolds       Metriek
             │             │             │
         Lie-groepen ──────┼─────────────┤
                           │
                    ABSTRACTE STRUCTUUR
                           │
             ┌─────────────┴─────────────┐
             │                           │
        DIFFERENTIAAL-              GAUGE-
         MEETKUNDE                  THEORIE
             │                           │
             └─────────────┬─────────────┘
                           │
                         FASE 7
                           │
                VECTORBUNDELS & CONNECTIES
                           │
                     YANG–MILLS
```

------------------------------------------------------------------------

# Samenvatting van Fase 6

Fase 6 was de overgang van rekenen met objecten naar denken in
structuren.

## Milestone 6.1 --- Groepentheorie & Symmetrie

Je leerde dat symmetrieën als transformaties kunnen worden behandeld en
dat zulke transformaties groepen vormen.

Belangrijke begrippen:

-   groep;
-   groepsaxioma's;
-   abelse groep;
-   subgroep;
-   permutatie;
-   cyclische groep;
-   homomorfisme;
-   isomorfisme;
-   matrixgroep;
-   Lie-groep.

Kernidee:

**symmetrie heeft algebraïsche structuur.**

------------------------------------------------------------------------

## Milestone 6.2 --- Topologie

Je leerde dat we ruimten kunnen bestuderen zonder iedere afstand en hoek
vast te leggen.

Belangrijke begrippen:

-   topologische ruimte;
-   open verzameling;
-   gesloten verzameling;
-   continuïteit;
-   homeomorfisme;
-   verbondenheid;
-   padverbondenheid;
-   compactheid;
-   fundamentele groep;
-   manifold.

Kernidee:

**continue vervorming kan structurele informatie behouden.**

------------------------------------------------------------------------

## Milestone 6.3 --- Tensorrekening

Je leerde dat vectoren slechts één soort object zijn en dat covectoren,
tensoren en metrische structuren nodig zijn om geometrische en fysische
relaties algemeen te formuleren.

Belangrijke begrippen:

-   duale ruimte;
-   covector;
-   tensor;
-   tensorproduct;
-   contravariant;
-   covariant;
-   Einstein-sommatie;
-   vrije index;
-   dummy-index;
-   contractie;
-   metriek;
-   Jacobiaan;
-   coördinatenonafhankelijkheid.

Kernidee:

**een coördinatenbeschrijving is niet hetzelfde als het onderliggende
object.**

------------------------------------------------------------------------

# Eindbeeld

Je kunt het hele traject tot nu toe nu samenvatten als:

**Fase 1**\
Getallen

↓

**Fase 2**\
Algebra en geometrie

↓

**Fase 3**\
Verandering en limieten

↓

**Fase 4**\
Vectoren, matrices en ruimtes

↓

**Fase 5**\
Dynamica, complexe getallen en golven

↓

**Fase 6**\
Symmetrie, abstracte structuren, topologie en tensoren

↓

**Fase 7**\
Differentiaalmeetkunde en kwantumvelden

↓

**Yang--Mills**

De grote intellectuele verschuiving is nu gemaakt.

Je bent niet langer voornamelijk bezig met:

> "Hoe bereken ik dit?"

maar steeds vaker met:

> **"Welke structuur zit achter wat ik bereken?"**

Dat is precies de vraag die nodig is om uiteindelijk van elementaire
algebra en calculus naar moderne mathematische fysica te gaan.
