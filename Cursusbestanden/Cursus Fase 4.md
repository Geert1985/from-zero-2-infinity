# Cursus Fase 4 --- Lineaire Algebra

**Leerpad:** van functies en calculus naar vectoren, matrices en
abstracte ruimtes\
**Doel van deze fase:** je leert vectoren en matrices gebruiken,
begrijpt vectorruimten en lineaire transformaties, en kunt eigenwaarden
en eigenvectoren bepalen en interpreteren.\
**Vorige fase:** Fase 3 --- Calculus (Analyse)\
**Volgende fase:** Fase 5 --- Differentiaalvergelijkingen & Complexe
Analyse

Lineaire algebra is de taal van **richting, ruimte en lineaire
transformatie**. In Fase 2 leerde je punten in een assenstelsel
beschrijven en functies tekenen. In Fase 3 leerde je verandering meten
met afgeleiden en accumulatie beschrijven met integralen. In deze fase
geven we die ideeën een nieuwe vorm:

-   een punt kan worden voorgesteld door coördinaten;
-   een richting of verplaatsing kan worden voorgesteld door een vector;
-   een verzameling getallen kan als matrix worden georganiseerd;
-   een lineaire transformatie kan als matrix worden beschreven;
-   een ingewikkelde transformatie kan soms worden begrepen door haar
    eigenvectoren en eigenwaarden.

De laatste stap is bijzonder belangrijk voor het verdere leerpad:
eigenwaarden en eigenvectoren vormen een directe brug naar de
kwantummechanica in Fase 5.

------------------------------------------------------------------------

## Hoe je deze cursus gebruikt

1.  Lees eerst de uitleg en probeer het idee in je eigen woorden te
    formuleren.
2.  Werk elk uitgewerkt voorbeeld zelf opnieuw uit.
3.  Maak de oefeningen zonder meteen naar de antwoorden te kijken.
4.  Teken waar mogelijk: vectoren en transformaties worden vaak
    duidelijker als je ze ziet.
5.  Controleer niet alleen het eindantwoord, maar ook of je de betekenis
    ervan begrijpt.
6.  Ga pas naar de volgende milestone wanneer de vorige niet meer
    aanvoelt als een verzameling losse trucjes.

**Gereedschap:** papier, potlood en eventueel ruitjespapier. Een
rekenmachine of computer mag later gebruikt worden om berekeningen te
controleren, maar probeer de kernberekeningen eerst zelf te kunnen
uitvoeren.

------------------------------------------------------------------------

# 4.0 --- De grote overgang naar lineaire algebra

In de vorige fasen werkten we vooral met getallen, formules en functies.

Een functie zoals

f(x) = 2x + 3

neemt één getal als invoer en geeft één getal als uitvoer.

Maar wat als onze invoer uit meerdere getallen bestaat?

Bijvoorbeeld:

(x, y)

Dan kunnen we een transformatie hebben die beide coördinaten tegelijk
verandert:

(x, y) → (2x, 3y)

Of:

(x, y) → (x - y, x + y)

Hier ontstaat een nieuw soort wiskunde.

De centrale vraag wordt:

> **Wat gebeurt er met een ruimte wanneer we haar punten, richtingen en
> structuren transformeren?**

Lineaire algebra geeft ons hiervoor een systematische taal.

------------------------------------------------------------------------

## 4.0.1 Van getal naar vector

Een enkel getal kan één dimensie beschrijven.

Een paar getallen kan een punt of richting in een vlak beschrijven:

(3, 2)

Een drietal:

(3, 2, 5)

kan een punt of vector in de driedimensionale ruimte beschrijven.

Algemeen kunnen we schrijven:

v = (v₁, v₂, ..., vₙ)

Zo'n object noemen we een **vector**.

------------------------------------------------------------------------

## 4.0.2 Van formule naar transformatie

In Fase 3 bestudeerden we functies.

Nu bekijken we functies die vectoren naar vectoren sturen.

Bijvoorbeeld:

T(x, y) = (2x, 2y)

Dit verdubbelt alle afstanden tot de oorsprong.

Een andere transformatie:

T(x, y) = (x, -y)

spiegelt het vlak in de x-as.

Een belangrijke klasse hiervan zijn de **lineaire transformaties**.

Daarvoor gelden:

T(u + v) = T(u) + T(v)

en

T(cu) = cT(u)

Deze eigenschappen betekenen dat de transformatie de lineaire structuur
van de ruimte bewaart.

------------------------------------------------------------------------

## 4.0.3 Waarom matrices nodig zijn

Een matrix is meer dan een rechthoekig rooster getallen.

Een matrix kan een lineaire transformatie **coderen**.

Bijvoorbeeld:

A = \[ 2 0 0 3 \]

werkt op een vector:

v = \[ x y \]

en geeft:

Av = \[ 2x 3y \]

De matrix vertelt dus exact hoe de coördinaten veranderen.

Dit is een van de belangrijkste ideeën van deze fase:

> **Een matrix kan een lineaire transformatie voorstellen.**

------------------------------------------------------------------------

# Milestone 4.1 --- Vectoren & Matrices

**Doel:** werken met vectoren als richtingen en met matrices als
georganiseerde getallenstructuren en representaties van lineaire
transformaties.

------------------------------------------------------------------------

## 4.1.1 Vectoren als richtingen

Stel dat je op een kaart 3 km naar het oosten en 2 km naar het noorden
gaat.

De verplaatsing kan worden geschreven als:

v = (3, 2)

De twee componenten vertellen hoeveel beweging er in elke richting zit.

We kunnen een vector tekenen als een pijl.

``` text
y
↑
|       • (3,2)
|      /
|     /
|    /
|   /
|  /
| /
+----------------→ x
O
```

De pijl heeft:

-   een **richting**;
-   een **lengte**;
-   een beginpunt en eindpunt wanneer we hem als pijl tekenen.

Maar een vrije vector is niet gebonden aan één plaats. Een pijl van
(1,1) naar (4,3) beschrijft dezelfde verplaatsing als een pijl van (0,0)
naar (3,2).

Daarom is

(3, 2)

in de eerste plaats een beschrijving van een richting en grootte, niet
noodzakelijk van één specifiek punt.

------------------------------------------------------------------------

## 4.1.2 Componenten

Voor

v = (3, 2)

zijn 3 en 2 de **componenten**.

In drie dimensies:

v = (2, -1, 4)

heeft drie componenten.

In n dimensies:

v = (v₁, v₂, ..., vₙ)

heeft n componenten.

Het aantal onafhankelijke componenten bepaalt de dimensie waarin de
vector leeft.

------------------------------------------------------------------------

## 4.1.3 Optellen van vectoren

Vectoren tel je component per component op.

Als

u = (2, 3)

en

v = (4, -1)

dan:

u + v = (2 + 4, 3 - 1) = (6, 2)

Geometrisch kun je dit zien als het achter elkaar plaatsen van pijlen.

``` text
u gevolgd door v

O -----> A
          \
           \
            -----> B

O ----------------> B

resultaat = u + v
```

De regel is:

(a, b) + (c, d) = (a + c, b + d)

------------------------------------------------------------------------

## 4.1.4 Vermenigvuldigen met een scalair

Een gewone getalwaarde waarmee je een vector vermenigvuldigt heet een
**scalair**.

Voor:

v = (2, -3)

geldt:

3v = (6, -9)

en:

-2v = (-4, 6)

Een positieve factor groter dan 1 maakt de vector langer.

Een factor tussen 0 en 1 maakt hem korter.

Een negatieve factor keert de richting om.

------------------------------------------------------------------------

## 4.1.5 Nulvector en tegengestelde vector

De nulvector is:

0 = (0, 0)

Voor elke vector v geldt:

v + 0 = v

De tegengestelde vector van v is -v.

Bijvoorbeeld:

v = (3, -2)

dan:

-v = (-3, 2)

en:

v + (-v) = 0

Dit sluit direct aan bij wat je in Fase 1 leerde over tegengestelde
getallen.

------------------------------------------------------------------------

## 4.1.6 Lengte van een vector

Voor een vector in het vlak:

v = (x, y)

is de lengte:

\|v\| = √(x² + y²)

Dit is precies de stelling van Pythagoras uit Fase 2.

Voor:

v = (3, 4)

krijgen we:

\|v\| = √(3² + 4²) = √25 = 5

Voor drie dimensies:

v = (x, y, z)

geldt:

\|v\| = √(x² + y² + z²)

De formule voor de lengte is dus geen nieuwe truc: ze is een uitbreiding
van Pythagoras.

------------------------------------------------------------------------

## 4.1.7 Eenheidsvectoren

Een vector met lengte 1 heet een **eenheidsvector**.

In twee dimensies gebruiken we vaak:

e₁ = (1, 0)

e₂ = (0, 1)

Elke vector

v = (x, y)

kan worden geschreven als:

v = xe₁ + ye₂

Bijvoorbeeld:

(3, 2) = 3(1, 0) + 2(0, 1)

Deze twee basisvectoren vormen de standaardbasis van het vlak.

Dit idee wordt later uitgebreid tot willekeurige bases van
vectorruimten.

------------------------------------------------------------------------

## 4.1.8 Inwendig product

Twee vectoren kunnen worden gecombineerd met het **inwendig product** of
**dot product**.

Voor:

u = (u₁, u₂)

en

v = (v₁, v₂)

is:

u · v = u₁v₁ + u₂v₂

Voor:

u = (2, 3) v = (4, -1)

krijgen we:

u · v = 2×4 + 3×(-1) = 8 - 3 = 5

Het dot product is belangrijk omdat het informatie over hoeken bevat:

u · v = \|u\|\|v\| cos(θ)

Als:

u · v = 0

dan staan de twee vectoren loodrecht op elkaar.

Voor:

u = (1, 2) v = (2, -1)

geldt:

u · v = 1×2 + 2×(-1) = 0

Dus u en v staan loodrecht.

------------------------------------------------------------------------

# Matrices

## 4.1.9 Wat is een matrix?

Een matrix is een rechthoekig rooster van getallen.

Bijvoorbeeld:

A = \[ 2 3 1 4 \]

Deze matrix heeft:

-   2 rijen;
-   2 kolommen.

We zeggen dat A een 2 × 2-matrix is.

Een 2 × 3-matrix heeft 2 rijen en 3 kolommen:

B = \[ 1 2 3 4 5 6 \]

De plaats van een element wordt aangeduid met twee indices:

aᵢⱼ

waarbij i de rij en j de kolom aanduidt.

------------------------------------------------------------------------

## 4.1.10 Matrix optellen

Matrices met dezelfde afmetingen kunnen element per element worden
opgeteld.

A = \[ 1 2 3 4 \]

B = \[ 5 1 2 3 \]

dan:

A + B = \[ 6 3 5 7 \]

Net als bij vectoren werken we componentgewijs.

------------------------------------------------------------------------

## 4.1.11 Vermenigvuldigen met een scalair

Voor:

A = \[ 1 2 3 4 \]

geldt:

2A = \[ 2 4 6 8 \]

Elk element wordt met 2 vermenigvuldigd.

------------------------------------------------------------------------

## 4.1.12 Matrixvermenigvuldiging

Hier wordt het belangrijker.

Matrixvermenigvuldiging is **niet** gewoon element per element
vermenigvuldigen.

Neem:

A = \[ 1 2 3 4 \]

en:

B = \[ 5 6 7 8 \]

Dan is:

AB = \[ 1×5 + 2×7 1×6 + 2×8 3×5 + 4×7 3×6 + 4×8 \]

Dus:

AB = \[ 19 22 43 50 \]

De regel is:

> Rij × kolom.

------------------------------------------------------------------------

## 4.1.13 Wanneer mag je matrices vermenigvuldigen?

Als A een m × n-matrix is en B een n × p-matrix, dan kan AB worden
berekend.

Het resultaat is een m × p-matrix.

Bijvoorbeeld:

A: 2 × 3

B: 3 × 4

dan:

AB: 2 × 4

De **binnenste dimensies moeten overeenkomen**.

``` text
(m × n) · (n × p) = (m × p)
```

Dit is een regel die je niet alleen moet onthouden, maar ook moet kunnen
gebruiken om te controleren of een berekening überhaupt mogelijk is.

------------------------------------------------------------------------

## 4.1.14 Matrixvermenigvuldiging is niet commutatief

Bij gewone getallen geldt:

ab = ba

Maar bij matrices geldt in het algemeen:

AB ≠ BA

Soms bestaat AB wel terwijl BA niet eens kan worden berekend.

Dit is een belangrijk eerste voorbeeld van het verschil tussen rekenen
met gewone getallen en rekenen met abstractere objecten.

------------------------------------------------------------------------

## 4.1.15 De identiteitmatrix

De identiteitmatrix is de matrix die niets verandert.

Voor 2 × 2:

I = \[ 1 0 0 1 \]

Voor elke geschikte vector v geldt:

Iv = v

En voor elke geschikte matrix A:

AI = A IA = A

Dit is de matrixversie van:

a × 1 = a

uit Fase 1.

------------------------------------------------------------------------

## 4.1.16 Matrix × vector

Een matrix kan rechtstreeks op een vector werken.

Neem:

A = \[ 2 0 0 3 \]

en:

v = \[ x y \]

Dan:

Av = \[ 2x 3y \]

De matrix rekt de x-richting met factor 2 en de y-richting met factor 3
uit.

Dit is de eerste grote reden waarom matrices zo krachtig zijn:

> Een matrix kan een geometrische transformatie uitvoeren.

------------------------------------------------------------------------

## 4.1.17 Matrix als transformatie

Neem:

A = \[ 0 -1 1 0 \]

en:

v = \[ 1 0 \]

Dan:

Av = \[ 0 1 \]

De vector (1,0) wordt (0,1).

Deze matrix roteert het vlak 90° tegenwijzerzin.

Dezelfde matrix werkt op elke vector in het vlak.

Dit is veel krachtiger dan één afzonderlijke berekening: één matrix
beschrijft een volledige transformatie.

------------------------------------------------------------------------

## 4.1.18 Veel voorkomende 2D-transformaties

### Schaling

A = \[ a 0 0 b \]

geeft:

(x, y) → (ax, by)

### Spiegeling in de x-as

A = \[ 1 0 0 -1 \]

geeft:

(x, y) → (x, -y)

### Spiegeling in de y-as

A = \[ -1 0 0 1 \]

geeft:

(x, y) → (-x, y)

### Rotatie

Voor een rotatie over hoek θ:

R(θ) = \[ cos(θ) -sin(θ) sin(θ) cos(θ) \]

Dit is een directe verbinding tussen lineaire algebra en trigonometrie
uit Fase 2.

------------------------------------------------------------------------

## Oefeningen 4.1

1.  Bereken de lengte van v = (6, 8).

2.  Bereken u + v voor u = (3, -2) en v = (-1, 5).

3.  Bereken 4(2, -3).

4.  Bereken het dot product van (1, 4) en (2, -1).

5.  Zijn (2, 3) en (3, -2) loodrecht?

6.  Schrijf (5, -2) als combinatie van e₁ = (1,0) en e₂ = (0,1).

7.  Tel de matrices op:

    A = \[ 1 3 2 4 \]

    B = \[ 5 0 1 2 \]

8.  Bereken 3A voor A uit oefening 7.

9.  Bereken:

    \[ 1 2 \] \[ 3 4 \]

10. Bereken AB voor:

    A = \[ 1 2 0 1 \]

    B = \[ 3 0 2 4 \]

11. Bereken de matrix uit oefening 10 in de omgekeerde volgorde BA.
    Vergelijk AB en BA.

12. Wat doet de matrix

    \[ 2 0 0 2 \]

    met een vector?

13. Wat doet

    \[ 1 0 0 -1 \]

    met het punt (3, -4)?

14. Bereken de afbeelding van (1,2) onder de rotatiematrix voor 90°
    tegenwijzerzin.

15. Welke afmetingen heeft AB als A 3 × 2 is en B 2 × 5?

### Antwoorden 4.1

1.  \|v\| = √(6² + 8²) = √100 = 10.
2.  (3,-2) + (-1,5) = (2,3).
3.  4(2,-3) = (8,-12).
4.  1×2 + 4×(-1) = -2.
5.  Ja. 2×3 + 3×(-2) = 0.
6.  (5,-2) = 5e₁ - 2e₂.
7.  A+B = \[ 6 3 ; 3 6 \].
8.  3A = \[ 3 9 ; 6 12 \].
9.  \[1×3 + 2×4\] = \[11\].
10. AB = \[7 8 ; 2 4\].
11. BA = \[3 6 ; 2 8\]. Dus AB ≠ BA.
12. Alle lengtes worden verdubbeld; de richting blijft behouden.
13. (3,-4) → (3,4): spiegeling in de x-as.
14. (1,2) → (-2,1).
15. 3 × 5.

------------------------------------------------------------------------

# Milestone 4.2 --- Vectorruimten

**Doel:** begrijpen wat een vectorruimte is, hoe vectoren worden
opgespannen, wat lineaire onafhankelijkheid betekent en hoe lineaire
transformaties werken.

Tot nu toe gebruikten we vectoren vooral als pijlen in het vlak. Nu
maken we een belangrijke abstractiesprong:

> Een vector hoeft geen pijl in de fysieke ruimte te zijn.

Een vector kan bijvoorbeeld ook zijn:

-   een rij getallen;
-   een functie;
-   een veelterm;
-   een matrix;
-   een toestand in een fysisch systeem.

Wat deze objecten gemeen hebben, is niet hun uiterlijk maar de manier
waarop ze kunnen worden opgeteld en met scalairen vermenigvuldigd.

Dat is het idee van een **vectorruimte**.

------------------------------------------------------------------------

## 4.2.1 De twee basisbewerkingen

Een vectorruimte heeft in essentie twee soorten bewerkingen:

1.  vectoren kunnen bij elkaar worden opgeteld;
2.  vectoren kunnen met scalairen worden vermenigvuldigd.

Deze bewerkingen moeten zich gedragen volgens vaste regels.

Voor vectoren u en v en scalairen a en b gelden onder andere:

u + v = v + u

(u + v) + w = u + (v + w)

u + 0 = u

u + (-u) = 0

a(u + v) = au + av

(a + b)u = au + bu

a(bu) = (ab)u

1u = u

Deze regels lijken sterk op de rekenwetten uit Fase 1. Het verschil is
dat u en v nu geen gewone getallen hoeven te zijn.

------------------------------------------------------------------------

## 4.2.2 Het vlak als vectorruimte

R² bestaat uit alle paren reële getallen:

R² = {(x,y) \| x,y ∈ R}

Voorbeeld:

(2,3) ∈ R²

(π, √2) ∈ R²

(-4, 0) ∈ R²

Ook functies kunnen een vectorruimte vormen, zoals de verzameling van
alle functies met bepaalde eigenschappen.

Het woord "vectorruimte" betekent dus niet noodzakelijk "een fysieke
ruimte".

------------------------------------------------------------------------

## 4.2.3 R³ en hogere dimensies

R³:

R³ = {(x,y,z) \| x,y,z ∈ R}

Algemeen:

Rⁿ

bestaat uit alle n-tupels van reële getallen.

Je kunt R⁴ niet rechtstreeks tekenen zoals R² of R³, maar algebraïsch
kunnen we er probleemloos mee werken.

Dit is een belangrijke vaardigheid voor latere natuurkunde: de wiskunde
hoeft niet afhankelijk te zijn van een tekening.

------------------------------------------------------------------------

## 4.2.4 Lineaire combinatie

Een **lineaire combinatie** van vectoren v₁, v₂, ..., vₙ is een
uitdrukking van de vorm:

a₁v₁ + a₂v₂ + ... + aₙvₙ

waarbij de a's scalairen zijn.

Voor:

v₁ = (1,0) v₂ = (0,1)

is:

3v₁ + 2v₂ = (3,2)

Dus elk punt in R² kan worden opgebouwd uit de twee
standaardbasisvectoren.

------------------------------------------------------------------------

## 4.2.5 Opspanning

De verzameling van alle lineaire combinaties van een aantal vectoren
heet hun **opspanning** of span.

De standaardbasis:

e₁ = (1,0) e₂ = (0,1)

spant heel R² op.

Met slechts één vector, bijvoorbeeld:

v = (2,1)

kunnen we alleen vectoren bereiken die op dezelfde rechte liggen:

av = (2a,a)

De span van één niet-nulvector in R² is dus een rechte door de
oorsprong.

Twee geschikte niet-parallelle vectoren kunnen heel R² opspannen.

------------------------------------------------------------------------

## 4.2.6 Lineaire onafhankelijkheid

Vectoren zijn **lineair onafhankelijk** wanneer geen enkele vector kan
worden opgebouwd uit de andere vectoren.

Formeel zijn v₁, ..., vₙ lineair onafhankelijk als:

a₁v₁ + ... + aₙvₙ = 0

alleen mogelijk is wanneer:

a₁ = ... = aₙ = 0

Voor:

v₁ = (1,0) v₂ = (0,1)

zijn ze onafhankelijk.

Voor:

v₁ = (1,2) v₂ = (2,4)

zijn ze afhankelijk, want:

v₂ = 2v₁

------------------------------------------------------------------------

## 4.2.7 Basis

Een **basis** van een vectorruimte is een verzameling vectoren die:

1.  de hele ruimte opspant;
2.  lineair onafhankelijk is.

De standaardbasis van R² is:

e₁ = (1,0) e₂ = (0,1)

De standaardbasis van R³ is:

e₁ = (1,0,0) e₂ = (0,1,0) e₃ = (0,0,1)

Elke vector in R³ kan precies op één manier als lineaire combinatie van
deze basisvectoren worden geschreven.

------------------------------------------------------------------------

## 4.2.8 Dimensie

Het aantal vectoren in een basis is de **dimensie**.

Dus:

dim(R²) = 2

dim(R³) = 3

dim(Rⁿ) = n

Maar opnieuw: dimensie is niet noodzakelijk het aantal zichtbare
ruimtelijke richtingen.

De vectorruimte van alle veeltermen van graad hoogstens 2 heeft
bijvoorbeeld basis:

1, x, x²

en dus dimensie 3.

------------------------------------------------------------------------

## 4.2.9 Coördinaten hangen af van de basis

De vector zelf en zijn coördinaten zijn niet precies hetzelfde.

Neem:

v = (3,2)

in de standaardbasis.

Maar kies:

b₁ = (1,1) b₂ = (1,-1)

Dan zoeken we a en b zodat:

v = ab₁ + bb₂

Dus:

(3,2) = a(1,1) + b(1,-1)

Daaruit volgen:

a + b = 3 a - b = 2

Optellen geeft:

2a = 5

dus:

a = 5/2

en:

b = 1/2

Dezelfde vector heeft dus andere coördinaten in een andere basis.

Dit wordt later fundamenteel bij coördinatenstelsels, tensoren en
differentiaalmeetkunde.

------------------------------------------------------------------------

## 4.2.10 Lineaire transformaties

Een functie T van de ene vectorruimte naar de andere heet lineair
wanneer:

T(u + v) = T(u) + T(v)

en:

T(cu) = cT(u)

voor alle u, v en scalairen c.

Voorbeeld:

T(x,y) = (2x, 3y)

is lineair.

Want:

T((x₁,y₁)+(x₂,y₂)) = T(x₁+x₂,y₁+y₂) = (2x₁+2x₂, 3y₁+3y₂)

en dat is:

T(x₁,y₁)+T(x₂,y₂)

------------------------------------------------------------------------

## 4.2.11 Een belangrijke eigenschap: T(0) = 0

Voor elke lineaire transformatie geldt:

T(0) = 0

Waarom?

T(0) = T(0 + 0) = T(0) + T(0)

Trek T(0) aan beide kanten af:

T(0) = 0

Dit is een nuttige test.

Een functie zoals:

T(x) = 2x + 1

is niet lineair, want:

T(0) = 1 ≠ 0

Hoewel ze in het dagelijks taalgebruik vaak "lineair" wordt genoemd
omdat haar grafiek een rechte is, is ze in de formele lineaire algebra
geen lineaire transformatie. Het is een **affiene** functie.

------------------------------------------------------------------------

## 4.2.12 Matrix van een lineaire transformatie

Een lineaire transformatie van Rⁿ naar Rᵐ kan met een matrix worden
weergegeven.

De kolommen van de matrix zijn de beelden van de basisvectoren.

Neem:

T(x,y) = (2x + y, x + 3y)

De standaardbasis is:

e₁ = (1,0) e₂ = (0,1)

Bereken:

T(e₁) = (2,1)

T(e₂) = (1,3)

Dus de matrix is:

A = \[ 2 1 1 3 \]

en:

T(v) = Av

Dit is een centrale verbinding tussen milestone 4.1 en 4.2.

------------------------------------------------------------------------

## 4.2.13 Kern en beeld

Voor een lineaire transformatie T zijn twee verzamelingen bijzonder
belangrijk.

### Kern

De **kern** bestaat uit alle vectoren die naar de nulvector worden
gestuurd:

ker(T) = {v \| T(v) = 0}

### Beeld

Het **beeld** bestaat uit alle vectoren die je als T(v) kunt krijgen.

De kern vertelt ons welke informatie door de transformatie verloren
gaat.

Het beeld vertelt ons welke richtingen bereikbaar zijn.

------------------------------------------------------------------------

## 4.2.14 Injectief en surjectief

Een transformatie is **injectief** als verschillende invoervectoren
nooit hetzelfde resultaat geven.

Voor lineaire transformaties is dit equivalent aan:

ker(T) = {0}

Een transformatie is **surjectief** als elk element van de doelruimte
wordt bereikt.

In eindige dimensie leidt dit tot belangrijke relaties tussen dimensies.

Deze ideeën worden later belangrijk bij matrices, inverses en
differentiaalvergelijkingen.

------------------------------------------------------------------------

## 4.2.15 Inverteerbare transformaties

Als een transformatie T omkeerbaar is, bestaat er een inverse T⁻¹ zodat:

T⁻¹(T(v)) = v

en:

T(T⁻¹(v)) = v

Voor matrices betekent dit:

A⁻¹A = I

en:

AA⁻¹ = I

Niet elke matrix heeft een inverse.

Een transformatie die een volledig vlak platdrukt tot één lijn kan niet
worden teruggedraaid: informatie is verloren gegaan.

------------------------------------------------------------------------

## 4.2.16 Determinant: eerste kennismaking

Voor een 2 × 2-matrix:

A = \[ a b c d \]

is de determinant:

det(A) = ad - bc

Voor:

A = \[ 2 1 3 4 \]

is:

det(A) = 2×4 - 1×3 = 5

Geometrisch vertelt de absolute waarde van de determinant in 2D hoeveel
de oppervlakte wordt geschaald.

-   \|det(A)\| \> 1: oppervlakte wordt groter.
-   \|det(A)\| \< 1: oppervlakte wordt kleiner.
-   det(A) \< 0: de oriëntatie wordt omgekeerd.
-   det(A) = 0: de ruimte wordt in een lagere dimensie platgedrukt.

En:

> Een vierkante matrix is inverteerbaar precies wanneer de determinant
> niet nul is.

We zullen de determinant later opnieuw nodig hebben bij eigenwaarden.

------------------------------------------------------------------------

## Oefeningen 4.2

1.  Is (1,2) + (3,4) een geldige vectorbewerking? Bereken het resultaat.

2.  Schrijf (7, -3) als lineaire combinatie van de standaardbasis.

3.  Zijn (1,2) en (2,4) lineair onafhankelijk? Verklaar.

4.  Spannen (1,0) en (1,1) heel R² op?

5.  Wat is de dimensie van R⁵?

6.  Controleer of T(x,y) = (x+y, 2x) lineair is.

7.  Controleer of T(x,y) = (x+1,y) lineair is.

8.  Bepaal de matrix van T(x,y) = (3x-y, 2x+4y).

9.  Bepaal de kern van T(x,y) = (x-y, x-y).

10. Wat is de determinant van

    A = \[ 3 2 1 4 \]?

11. Is deze matrix inverteerbaar?

    B = \[ 2 4 1 2 \]

12. Leg in woorden uit wat de kern van een lineaire transformatie
    betekent.

13. Geef een voorbeeld van twee niet-parallelle vectoren die R²
    opspannen.

14. Geef een voorbeeld van twee lineair afhankelijke vectoren.

15. Waarom kan een transformatie die een vlak volledig tot een lijn
    platdrukt geen inverse hebben?

### Antwoorden 4.2

1.  Ja. (4,6).
2.  (7,-3) = 7(1,0) - 3(0,1).
3.  Nee. (2,4) = 2(1,2).
4.  Ja. De vectoren zijn onafhankelijk en vormen een basis van R².
5.  5.  
6.  Ja. T(0)=0 en de twee lineariteitseigenschappen gelden; de
    bijbehorende matrix is \[1 1; 2 0\].
7.  Nee. T(0,0)=(1,0), dus T(0)≠0.
8.  A = \[3 -1; 2 4\].
9.  x-y=0, dus x=y. De kern is { (t,t) \| t∈R }.
10. det(A)=3×4-2×1=10.
11. Nee. det(B)=2×2-4×1=0.
12. De kern bevat alle invoervectoren die door de transformatie volledig
    naar nul worden gestuurd.
13. Bijvoorbeeld (1,0) en (0,1).
14. Bijvoorbeeld (1,2) en (2,4).
15. Verschillende punten/vectoren worden op dezelfde lijn en dus op
    dezelfde informatie gebracht. De oorspronkelijke informatie kan niet
    uniek worden teruggevonden.

------------------------------------------------------------------------

# Milestone 4.3 --- Eigenwaarden & Eigenvectoren

**Doel:** begrijpen welke richtingen door een lineaire transformatie
niet van richting veranderen en hoeveel ze in die richting worden
uitgerekt of ingekrompen.

Dit is de meest conceptueel belangrijke milestone van Fase 4.

Tot nu toe zagen we dat een matrix een vector kan veranderen:

v → Av

In het algemeen veranderen daarbij zowel de lengte als de richting.

Maar sommige bijzondere vectoren gedragen zich eenvoudiger.

Voor zo'n vector geldt:

Av = λv

De vector blijft dus op dezelfde lijn liggen. Alleen de schaal
verandert.

De factor λ heet de **eigenwaarde**.

De vector v heet een **eigenvector**.

------------------------------------------------------------------------

## 4.3.1 Intuïtief beeld

Stel dat je een rubberen vlak vervormt.

De meeste pijlen veranderen zowel lengte als richting.

Maar misschien zijn er bepaalde richtingen die na de vervorming nog
precies op hun oorspronkelijke lijn liggen.

Die richtingen zijn de eigenrichtingen.

De hoeveelheid uitrekking of inkrimping langs zo'n richting is de
eigenwaarde.

``` text
voor transformatie:

       /
      /
     /
O---/---------->

na transformatie:

       /
      /
     /
O------/-------->
```

De exacte hoek hoeft niet hetzelfde te blijven voor alle richtingen,
maar een eigenvector blijft op zijn eigen lijn.

------------------------------------------------------------------------

## 4.3.2 Definitie

Voor een matrix A is v ≠ 0 een eigenvector met eigenwaarde λ als:

Av = λv

Let op:

-   v mag niet de nulvector zijn;
-   λ is een getal;
-   A verandert de vector alleen door schaling.

Als λ = 2, wordt de vector tweemaal zo lang.

Als λ = 1, verandert de vector niet.

Als λ = 0, wordt de vector naar nul gestuurd.

Als λ = -1, wordt de richting omgekeerd maar blijft de lengte gelijk.

------------------------------------------------------------------------

## 4.3.3 Eenvoudig voorbeeld

Neem:

A = \[ 2 0 0 3 \]

Voor:

v₁ = (1,0)

geldt:

Av₁ = (2,0) = 2v₁

Dus:

-   v₁ is een eigenvector;
-   λ = 2.

Voor:

v₂ = (0,1)

geldt:

Av₂ = (0,3) = 3v₂

Dus:

-   v₂ is een eigenvector;
-   λ = 3.

De x- en y-richting zijn hier eigenrichtingen.

------------------------------------------------------------------------

## 4.3.4 Waarom niet elke vector een eigenvector is

Neem:

v = (1,1)

Dan:

Av = (2,3)

Maar:

(2,3)

is geen veelvoud van:

(1,1)

want de verhoudingen zijn verschillend.

Dus (1,1) is geen eigenvector.

------------------------------------------------------------------------

## 4.3.5 Eigenwaarden vinden

We beginnen met:

Av = λv

Breng alles naar één kant:

Av - λv = 0

Schrijf v als Iv:

Av - λIv = 0

Dus:

(A - λI)v = 0

Voor een niet-nuloplossing moet de matrix A - λI niet-inverteerbaar
zijn.

Daarom moet:

det(A - λI) = 0

Dit heet de **karakteristieke vergelijking**.

------------------------------------------------------------------------

## 4.3.6 Voorbeeld stap voor stap

Neem:

A = \[ 2 0 0 3 \]

Dan:

A - λI = \[ 2-λ 0 0 3-λ \]

De determinant is:

(2-λ)(3-λ)

We eisen:

(2-λ)(3-λ) = 0

Dus:

λ = 2

of:

λ = 3

De eigenwaarden zijn 2 en 3.

------------------------------------------------------------------------

## 4.3.7 Eigenvectoren vinden

Voor λ = 2:

(A - 2I)v = 0

Dus:

\[ 0 0 0 1 \] \[x y\] = \[0 0\]

Daaruit volgt:

y = 0

x mag vrij gekozen worden.

Dus de eigenvectoren zijn alle niet-nulvectoren van de vorm:

(x,0)

Bijvoorbeeld:

(1,0), (2,0), (-5,0)

hebben allemaal dezelfde eigenrichting.

Voor λ = 3 krijgen we:

x = 0

dus alle niet-nulvectoren van de vorm:

(0,y)

zijn eigenvectoren.

------------------------------------------------------------------------

## 4.3.8 Niet elke eigenwaarde heeft één eigenvector

Een eigenvector is niet uniek.

Als v een eigenvector is, dan is cv voor elke c ≠ 0 ook een eigenvector.

Want:

A(cv) = cAv = cλv = λ(cv)

Daarom spreken we vaak over een **eigenruimte**: de verzameling van alle
eigenvectoren voor een bepaalde eigenwaarde, samen met de nulvector.

------------------------------------------------------------------------

## 4.3.9 Eigenruimte

Voor eigenwaarde λ is de eigenruimte:

Eλ = ker(A - λI)

Dit verbindt eigenwaarden rechtstreeks met de kern uit milestone 4.2.

Een eigenruimte is dus geen nieuw mysterieus object: het is de kern van
een specifieke matrix.

------------------------------------------------------------------------

## 4.3.10 Een voorbeeld met een niet-diagonale matrix

Neem:

A = \[ 3 1 0 2 \]

Dan:

A - λI = \[ 3-λ 1 0 2-λ \]

De determinant:

(3-λ)(2-λ)

Dus de eigenwaarden zijn:

λ₁ = 3 λ₂ = 2

### Voor λ = 3

Los:

(A - 3I)v = 0

op:

\[ 0 1 0 -1 \] \[x y\] = \[0 0\]

Dus:

y = 0

Een eigenvector is:

v = (1,0)

### Voor λ = 2

Los:

(A - 2I)v = 0

op:

\[ 1 1 0 0 \] \[x y\] = \[0 0\]

Dus:

x + y = 0

Bijvoorbeeld:

v = (1,-1)

is een eigenvector.

------------------------------------------------------------------------

## 4.3.11 Diagonalisatie

Wanneer een matrix voldoende onafhankelijke eigenvectoren heeft, kunnen
we haar schrijven als:

A = PDP⁻¹

waarbij:

-   P de eigenvectoren als kolommen bevat;
-   D een diagonale matrix met de bijbehorende eigenwaarden is.

Bijvoorbeeld:

D = \[ λ₁ 0 0 λ₂ \]

Dit is enorm krachtig.

Een ingewikkelde transformatie A wordt in de juiste basis een eenvoudige
diagonale transformatie.

------------------------------------------------------------------------

## 4.3.12 Waarom diagonalisatie nuttig is

Neem:

A = PDP⁻¹

Dan:

A² = PDP⁻¹PDP⁻¹ = PD²P⁻¹

en algemeen:

Aⁿ = PDⁿP⁻¹

Maar:

Dⁿ = \[ λ₁ⁿ 0 0 λ₂ⁿ \]

Dus machten van matrices worden veel eenvoudiger.

Dit is bijzonder nuttig bij:

-   recursies;
-   dynamische systemen;
-   differentiaalvergelijkingen;
-   stabiliteitsanalyse;
-   kwantummechanica.

------------------------------------------------------------------------

## 4.3.13 Eigenwaarden en dynamische systemen

Stel:

vₙ₊₁ = Avₙ

Dan bepaalt de grootte van de eigenwaarden mede wat er op lange termijn
gebeurt.

Grofweg:

-   \|λ\| \< 1 → componenten verdwijnen;
-   \|λ\| \> 1 → componenten groeien;
-   \|λ\| = 1 → componenten blijven qua grootte stabiel, al kan de
    richting of fase veranderen.

Dit is een belangrijke brug naar Fase 5, waar
differentiaalvergelijkingen dynamische systemen beschrijven.

------------------------------------------------------------------------

## 4.3.14 Complexe eigenwaarden

Een reële matrix hoeft niet alleen reële eigenwaarden te hebben.

Bijvoorbeeld:

A = \[ 0 -1 1 0 \]

beschrijft een rotatie over 90°.

Er bestaat geen reële niet-nulvector die na deze rotatie op dezelfde
rechte ligt.

De karakteristieke vergelijking geeft echter:

λ² + 1 = 0

dus:

λ = ±i

Hier verschijnt het complexe getal i.

Dit is een belangrijke vooruitblik naar Fase 5.

------------------------------------------------------------------------

## 4.3.15 Waarom eigenwaarden belangrijk zijn voor kwantummechanica

In de kwantummechanica worden meetbare grootheden voorgesteld door
**operatoren**.

Een toestand die een bepaalde meetwaarde met zekerheid heeft, voldoet
aan een eigenwaarde-vergelijking van de vorm:

Aψ = aψ

Dit heeft exact dezelfde structuur als:

Av = λv

De eigenwaarde a correspondeert met een mogelijke meetwaarde en de
eigenvector ψ met een bijbehorende eigenstaat.

Dit betekent niet dat Fase 4 al de kwantummechanica bevat. Het betekent
wel dat je hier de wiskundige structuur leert die later centraal staat.

De leerroute wordt daardoor:

**vectoren → vectorruimten → lineaire transformaties → eigenwaarden →
kwantumtoestanden**

------------------------------------------------------------------------

## Oefeningen 4.3

1.  Controleer of v = (1,0) een eigenvector is van

    A = \[ 2 0 0 3 \].

2.  Wat is de bijbehorende eigenwaarde?

3.  Controleer of (1,1) een eigenvector is van dezelfde matrix.

4.  Bepaal de eigenwaarden van

    A = \[ 4 0 0 5 \].

5.  Bepaal de eigenvectoren bij λ = 4.

6.  Bepaal de eigenwaarden van

    A = \[ 3 1 0 2 \].

7.  Vind een eigenvector bij λ = 2.

8.  Leg uit waarom cv ook een eigenvector is als v een eigenvector is en
    c ≠ 0.

9.  Bereken de eigenwaarden van

    A = \[ 1 0 0 1 \].

10. Wat kun je zeggen over de eigenvectoren van de identiteitmatrix?

11. Waarom heeft de rotatiematrix

    \[ 0 -1 1 0 \]

    geen reële eigenvectoren?

12. Bereken de determinant van

    A - λI

    voor

    A = \[ 2 1 0 4 \].

13. Vind de eigenwaarden van deze matrix.

14. Waarom is diagonalisatie nuttig bij het berekenen van Aⁿ?

15. Wat is de overeenkomst tussen de eigenwaarde-vergelijking in
    lineaire algebra en een meetvergelijking in de kwantummechanica?

### Antwoorden 4.3

1.  A(1,0) = (2,0) = 2(1,0), dus ja.
2.  λ = 2.
3.  A(1,1) = (2,3), geen veelvoud van (1,1), dus nee.
4.  λ = 4 en λ = 5.
5.  Alle niet-nulvectoren van de vorm (x,0).
6.  λ = 3 en λ = 2.
7.  Voor λ=2 geldt x+y=0; bijvoorbeeld (1,-1).
8.  A(cv)=cAv=cλv=λ(cv).
9.  Alleen λ=1, met multipliciteit 2.
10. Elke niet-nulvector is een eigenvector met eigenwaarde 1.
11. Een rotatie over 90° verandert elke reële richting van lijn; geen
    enkele niet-nulrichting blijft invariant.
12. A-λI = \[2-λ,1;0,4-λ\], dus det = (2-λ)(4-λ).
13. λ = 2 en λ = 4.
14. In een eigenbasis wordt A een diagonale matrix, waardoor Aⁿ
    eenvoudig wordt berekend via de machten van de eigenwaarden.
15. Beide hebben de vorm "operator toegepast op toestand = eigenwaarde ×
    toestand": Aψ=aψ.

------------------------------------------------------------------------

# Verbinding tussen de drie milestones

De drie milestones vormen geen losse hoofdstukken.

## 1. Vectoren zijn de objecten

In milestone 4.1 leerden we:

-   vectoren optellen;
-   vectoren schalen;
-   lengtes en hoeken berekenen;
-   matrices gebruiken.

## 2. Vectorruimten zijn de omgeving

In milestone 4.2 vroegen we:

> Welke verzameling objecten gedraagt zich als een ruimte waarin we
> lineair kunnen rekenen?

Daar kwamen bij:

-   span;
-   lineaire onafhankelijkheid;
-   basis;
-   dimensie;
-   lineaire transformaties;
-   kern en beeld.

## 3. Eigenvectoren zijn de bijzondere richtingen

In milestone 4.3 vroegen we:

> Welke richtingen worden door een lineaire transformatie niet van
> richting veranderd?

Dat gaf:

Av = λv

Daarmee krijgen we:

**vector → transformatie → eigenrichting → eigenwaarde**

Dit is de conceptuele ruggengraat van Fase 4.

------------------------------------------------------------------------

# Veelgemaakte fouten in Fase 4

## Fout 1 --- Een vector verwarren met een punt

(3,2) kan een punt beschrijven, maar ook een vrije vector.

Het verschil zit in de interpretatie.

## Fout 2 --- Matrixvermenigvuldiging elementgewijs uitvoeren

Fout:

\[1 2\] · \[3 4\] = \[3 8\]

Dat is geen gewone matrixvermenigvuldiging.

Gebruik altijd:

**rij × kolom**.

## Fout 3 --- Denken dat AB altijd gelijk is aan BA

In het algemeen:

AB ≠ BA

## Fout 4 --- Een affine functie "lineair" noemen

De functie:

f(x) = 2x + 1

heeft een rechte grafiek, maar is formeel geen lineaire transformatie
omdat:

f(0) ≠ 0

## Fout 5 --- De nulvector als eigenvector nemen

De nulvector voldoet altijd aan:

A0 = λ0

maar zegt niets over de eigenrichting.

Daarom eisen we:

v ≠ 0

## Fout 6 --- Denken dat een eigenvector uniek is

Als v een eigenvector is, dan is 2v dat ook.

De eigenrichting, of eigenruimte, is het relevante object.

## Fout 7 --- Alleen de eigenwaarde berekenen

Een eigenwaarde zonder haar eigenruimte vertelt maar een deel van het
verhaal.

Je moet kunnen bepalen:

1.  de eigenwaarden;
2.  de eigenvectoren/eigenruimten;
3.  wat ze geometrisch betekenen.

------------------------------------------------------------------------

# Eindtoets Fase 4

Maak de toets eerst zonder cursus of rekenmachine.

Je bent klaar voor Fase 5 wanneer je niet alleen de berekeningen kunt
uitvoeren, maar ook kunt uitleggen wat de objecten betekenen.

## Deel A --- Vectoren

1.  Bereken:

    (3,-1) + (5,4)

2.  Bereken:

    -2(4,-3)

3.  Bereken de lengte van:

    v = (5,12)

4.  Bereken het dot product van:

    u = (2,1) v = (3,-6)

5.  Zijn u en v uit vraag 4 loodrecht?

## Deel B --- Matrices

6.  Bereken:

    A + B

    voor:

    A = \[1 2; 3 4\] B = \[5 6; 7 8\]

7.  Bereken:

    AB

    voor:

    A = \[1 2; 0 1\] B = \[3 4; 5 6\]

8.  Bereken BA en vergelijk.

9.  Welke matrix is de identiteitmatrix in R²?

10. Wat doet

    A = \[2 0; 0 3\]

    met (1,1)?

11. Bereken de determinant van:

    A = \[4 1; 2 3\]

12. Is A inverteerbaar?

## Deel C --- Vectorruimten

13. Zijn (1,2) en (2,4) lineair onafhankelijk?

14. Wat is een basis?

15. Wat is de dimensie van R³?

16. Is T(x,y)=(2x-y, x+3y) lineair?

17. Waarom is T(x,y)=(2x+1,y) niet lineair?

18. Wat is de betekenis van de kern van een lineaire transformatie?

## Deel D --- Eigenwaarden

19. Geef de definitie van een eigenvector.

20. Geef de eigenwaarden van:

    A = \[2 0; 0 5\]

21. Geef een eigenvector voor λ=2.

22. Bereken de karakteristieke vergelijking van:

    A = \[3 1; 0 4\]

23. Bepaal de eigenwaarden van deze matrix.

24. Waarom is de nulvector geen geldige eigenvector?

25. Wat betekent λ=-1 geometrisch?

26. Waarom zijn eigenwaarden en eigenvectoren relevant voor
    kwantummechanica?

------------------------------------------------------------------------

## Antwoorden eindtoets

1.  (8,3).
2.  (-8,6).
3.  √(5²+12²)=13.
4.  2×3 + 1×(-6)=0.
5.  Ja.
6.  \[6 8; 10 12\].
7.  AB = \[13 16; 5 6\].
8.  BA = \[3 10; 5 16\]. Dus AB ≠ BA.
9.  I = \[1 0; 0 1\].
10. (1,1) → (2,3).
11. det(A)=4×3-1×2=10.
12. Ja, want det(A)≠0.
13. Nee. (2,4)=2(1,2).
14. Een lineair onafhankelijke verzameling vectoren die de hele
    vectorruimte opspant.
15. 3.  
16. Ja. De bijbehorende matrix is \[2 -1; 1 3\].
17. Omdat T(0,0)=(1,0) en dus T(0)≠0.
18. Alle vectoren die naar de nulvector worden gestuurd.
19. Een niet-nulvector v waarvoor Av=λv.
20. 2 en 5.
21. Bijvoorbeeld (1,0).
22. det(A-λI)=(3-λ)(4-λ).
23. λ=3 en λ=4.
24. Omdat de nulvector geen richting bepaalt en voor elke λ aan A0=λ0
    voldoet.
25. De vector behoudt zijn lengte maar keert van richting om.
26. Kwantumobservabelen worden als operatoren voorgesteld en mogelijke
    meetwaarden verschijnen als eigenwaarden in vergelijkingen van de
    vorm Aψ=aψ.

------------------------------------------------------------------------

# Eindcheck: begrijp je Fase 4 echt?

Probeer onderstaande vragen zonder formuleblad te beantwoorden.

### Concept 1

Wat is het verschil tussen een vector en een scalair?

### Concept 2

Waarom is Pythagoras relevant voor de lengte van een vector?

### Concept 3

Waarom kun je een matrix zien als een transformatie?

### Concept 4

Waarom is matrixvermenigvuldiging niet commutatief?

### Concept 5

Wat is het verschil tussen "vectorruimte" en "fysieke ruimte"?

### Concept 6

Wat betekent lineaire onafhankelijkheid?

### Concept 7

Waarom is een basis nuttig?

### Concept 8

Wat betekent:

Av = λv

in gewone woorden?

### Concept 9

Waarom moeten we oplossen:

det(A-λI)=0

om eigenwaarden te vinden?

### Concept 10

Waarom is de overgang naar eigenwaarden belangrijk voor het verdere
leerpad?

Als je op deze tien vragen helder kunt antwoorden, heb je de
belangrijkste conceptuele structuur van Fase 4 begrepen.

------------------------------------------------------------------------

# Poort naar Fase 5 --- Differentiaalvergelijkingen & Complexe Analyse

Fase 5 bevat volgens het leerpad:

-   complexe getallen;
-   differentiaalvergelijkingen;
-   Fourier-analyse.

Fase 4 heeft daarvoor meerdere fundamenten gelegd.

## Van vectoren naar dynamische systemen

Een toestand van een systeem kan als vector worden voorgesteld:

v(t)

Een differentiaalvergelijking kan dan bijvoorbeeld de vorm aannemen:

dv/dt = Av

De oplossing van zo'n systeem hangt sterk samen met eigenwaarden en
eigenvectoren van A.

## Van eigenwaarden naar kwantummechanica

Een kwantumtoestand kan in een vectorruimte worden beschreven.

Een operator A werkt op die toestand.

Een eigenstaat voldoet aan:

Aψ = aψ

Daarom is de algebra uit Fase 4 geen losstaande techniek: ze vormt een
directe mathematische voorbereiding op de kwantummechanica.

## Van complexe getallen naar rotaties en golven

De rotatiematrix uit Fase 4 leidde ons al naar complexe eigenwaarden:

λ = ±i

In Fase 5 wordt dit verder ontwikkeld tot complexe getallen,
exponentiële functies, differentiaalvergelijkingen en Fourier-analyse.

------------------------------------------------------------------------

# Mastery check --- Fase 4

Je beheerst Fase 4 wanneer je:

-   vectoren kunt optellen en schalen;
-   de lengte van vectoren kunt berekenen;
-   het dot product kunt gebruiken;
-   loodrechte vectoren kunt herkennen;
-   matrices kunt optellen;
-   matrices kunt vermenigvuldigen;
-   kunt bepalen wanneer een matrixvermenigvuldiging mogelijk is;
-   een matrix als lineaire transformatie kunt interpreteren;
-   de identiteitmatrix begrijpt;
-   de determinant van een 2 × 2-matrix kunt berekenen;
-   kunt uitleggen wanneer een matrix inverteerbaar is;
-   vectorruimten en hun dimensie begrijpt;
-   lineaire combinaties kunt vormen;
-   span en lineaire onafhankelijkheid begrijpt;
-   een basis kunt herkennen;
-   een lineaire transformatie kunt herkennen;
-   de kern en het beeld conceptueel begrijpt;
-   eigenwaarden kunt berekenen;
-   eigenvectoren kunt bepalen;
-   kunt uitleggen wat een eigenwaarde geometrisch betekent;
-   begrijpt waarom diagonalisatie nuttig is;
-   begrijpt waarom eigenwaarden later belangrijk zijn in
    kwantummechanica.

------------------------------------------------------------------------

# Skilltree --- Fase 4

``` text
                    ┌──────────────────────────┐
                    │ FASE 4                   │
                    │ LINEAIRE ALGEBRA         │
                    └────────────┬─────────────┘
                                 │
                ┌────────────────┴────────────────┐
                │                                 │
        ┌───────▼────────┐                ┌───────▼────────┐
        │ 4.1 Vectoren    │                │ 4.1 Matrices   │
        └───────┬────────┘                └───────┬────────┘
                │                                 │
        ┌───────▼────────┐                ┌───────▼────────┐
        │ lengte         │                │ matrix × vector│
        │ dot product    │                │ transformaties │
        │ basisvectoren  │                │ determinant    │
        └───────┬────────┘                └───────┬────────┘
                │                                 │
                └────────────────┬────────────────┘
                                 │
                         ┌───────▼────────┐
                         │ 4.2 Vectorruimten│
                         └───────┬────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
       ┌──────▼─────┐     ┌──────▼──────┐    ┌──────▼─────┐
       │ span       │     │ onafhankelijk│    │ basis      │
       └──────┬─────┘     └──────┬──────┘    └──────┬─────┘
              │                  │                  │
              └──────────────────┼──────────────────┘
                                 │
                         ┌───────▼────────┐
                         │ lineaire       │
                         │ transformaties │
                         └───────┬────────┘
                                 │
                    ┌────────────▼────────────┐
                    │ 4.3 Eigenwaarden       │
                    │ & eigenvectoren         │
                    └────────────┬────────────┘
                                 │
                   ┌─────────────┼─────────────┐
                   │             │             │
             ┌─────▼─────┐ ┌────▼──────┐ ┌────▼────────┐
             │ spectrum  │ │ eigenruimte│ │ diagonalisatie│
             └─────┬─────┘ └────┬──────┘ └────┬────────┘
                   │             │             │
                   └─────────────┼─────────────┘
                                 │
                         ┌───────▼────────┐
                         │ POORT FASE 5   │
                         │ complexe getallen│
                         │ differentiaal- │
                         │ vergelijkingen │
                         │ Fourier        │
                         └────────────────┘
```

------------------------------------------------------------------------

# Samenvatting van Fase 4

Fase 4 maakt een belangrijke abstractiesprong.

In Fase 1 leerden we rekenen met getallen.

In Fase 2 leerden we getallen gebruiken voor algebra en geometrie.

In Fase 3 leerden we verandering en accumulatie beschrijven met
calculus.

In Fase 4 leren we objecten en transformaties in meerdere dimensies
systematisch behandelen.

De kernketen is:

**vectoren → matrices → lineaire transformaties → vectorruimten → basis
→ eigenwaarden/eigenvectoren**

En de diepere betekenis is:

> Een matrix beschrijft hoe een lineaire transformatie werkt; een
> eigenvector is een richting die onder die transformatie invariant
> blijft, op een schaalfactor na.

Met:

Av = λv

heb je een van de belangrijkste structurele vergelijkingen uit de
verdere wiskunde bereikt.

De volgende fase voegt daar complexe getallen,
differentiaalvergelijkingen en Fourier-analyse aan toe. Daarmee begint
de overgang van zuivere lineaire structuur naar de wiskunde van golven,
dynamische systemen en uiteindelijk kwantummechanica.
