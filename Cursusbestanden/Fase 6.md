Fase 6 legt het theoretische fundament voor de moderne natuurkunde. Waar eerdere fasen gingen over specifieke vergelijkingen en getallen, bestudeert Fase 6 de **onderliggende structuren van wiskundige ruimtes zelf**.

Je leert hoe de fundamentele krachten in ons universum ontstaan uit symmetrieën (groepentheorie) en hoe gekromde ruimtes wiskundig gedefinieerd worden (topologie en tensoren).

---

### Milestone 6.1: Abstracte Algebra I – Groepentheorie & Symmetrie

**Doel:** Het wiskundig formaliseren van de regels van symmetrie.

* **Definitie van een Groep $(G, \cdot)$:** Een verzameling $G$ met een bewerking $\cdot$ die voldoet aan vier axioma's:
1. *Geslotenheid:* Voor alle $a, b \in G$ geldt dat $a \cdot b \in G$.
2. *Associativiteit:* $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3. *Neutraal element ($e$):* $a \cdot e = a$.
4. *Invers element ($a^{-1}$):* $a \cdot a^{-1} = e$.


* **Soorten Groepen:**
* *Abelse groepen:* Groepen waarvoor de bewerking commutatief is ($a \cdot b = b \cdot a$).
* *Symmetriegroepen:* Groepen van rotaties en spiegelingen (zoals de Dieder-groepen $D_n$).
* *Permutatiegroepen ($S_n$):* Alle mogelijke manieren om een verzameling elementen te herschikken.


* **Ondergroepen & Stelling van Lagrange:** De orde (het aantal elementen) van een ondergroep deelt altijd de orde van de hoofdgroep.
* **Morfismen:** *Homomorfismen* (structuurbehoudende beelden tussen groepen) en *Isomorfismen* (volledige wiskundige gelijkwaardigheid tussen twee groepen).

---

### Milestone 6.2: Lie-groepen & Lie-algebra's

**Doel:** Symmetrieën van **continue** transformaties begrijpen (essentieel voor deeltjesfysica).

* **Continue Groepen vs. Discrete Groepen:** Een rotatie over een willekeurige continue hoek $\theta$ versus een spiegeling.
* **Klassieke Matrixgroepen:**
* $\text{SO}(N)$ – *Special Orthogonal Group:* Rotaties in $N$ dimensies die afstanden behouden.
* $\text{SU}(N)$ – *Special Unitary Group:* Transformaties op complexe ruimtes met determinant 1. ($\text{SU}(2)$ beschrijft kwantumspin en $\text{SU}(3)$ de sterke kernkracht).


* **Lie-algebra's ($\mathfrak{g}$):** De lokalisatie van een Lie-groep rond het neutrale element (de "raakruimte").
* *Generatoren:* De basisvectoren die de continue transformaties aandrijven.
* *Lie-haakje (Lie Bracket):* $[X, Y] = XY - YX$ meet de mate waarin opeenvolgende infinitesimale transformaties niet commuteren.



---

### Milestone 6.3: Ringtheorie & Lichaamstheorie (Fields)

**Doel:** Structuren bestuderen waarin je mét zowel optelling als vermenigvuldiging kunt rekenen.

* **Ringen ($R, +, \cdot$):** Verzamelingen met twee bewerkingen (zoals de gehele getallen $\mathbb{Z}$), waarin optellen aan alle groepsregels voldoet en vermenigvuldigen associatief en distributief is.
* **Idealen en Factorringen:** Hulpstructuren binnen ringen om modulaat-rekenen en algebraïsche vergelijkingen te veralgemenen.
* **Lichamen / Velden (Fields):** Ringen waarin elk element (behalve nul) een inverse heeft voor vermenigvuldiging (zoals $\mathbb{R}, \mathbb{Q}, \mathbb{C}$).
* **Galois-theorie:** De koppeling tussen groepentheorie en vergelijkingsleer; bewijst wiskundig waarom er géén algemene formule bestaat voor 5e-graadsvergelijkingen (zoals de abc-formule voor 2e-graads).

---

### Milestone 6.4: Algemene Topologie

**Doel:** Vormen en ruimtes bestuderen zonder afstanden of hoeken te meten, maar puur op basis van 'nabijheid'.

* **Topologische Ruimte $(X, \tau)$:** Een verzameling $X$ met een gekozen familie van deelverzamelingen $\tau$ die "open verzamelingen" worden genoemd.
* **Continuïteit in Topologie:** Een functie tussen twee topologische ruimtes is continu als het inverse beeld van elke open verzameling weer een open verzameling is (geen afgeleiden nodig!).
* **Homeomorfisme:** Een bijectieve, continue functie met een continue inverse. Als twee vormen via een homeomorfisme in elkaar vervormd kunnen worden, zijn ze topologisch identiek (bijv. een koffiemok en een bagel).
* **Topologische Eigenschappen:**
* *Compactheid:* De veralgemening van "eindig en gesloten".
* *Samenhangendheid (Connectedness):* Of een ruimte uit één geheel bestaat.
* *Hausdorff-ruimte:* Een ruimte waarin twee verschillende punten altijd door gescheiden open omgevingen geïsoleerd kunnen worden.



---

### Milestone 6.5: Multilineaire Algebra & Tensorrekening

**Doel:** Wiskundige objecten bouwen die fysische wetten beschrijven, onafhankelijk van het gekozen coördinatenstelsel.

* **Duale Ruimten ($V^*$):** De ruimte van alle lineaire functies van een vectorruimte $V$ naar de reële getallen (covectoren of 1-vormen).
* **Tensoren als Multilineaire Afbeeldingen:**
* Een tensor van type $(k, l)$ gebruikt $k$ covectoren en $l$ vectoren als invoer en levert een reëel getal op.
* *Rang-0 tensor:* Scalair (massa, temperatuur).
* *Rang-1 tensor:* Vector of covector (snelheid, gradiënt).
* *Rang-2 tensor:* Matrix-achtige structuur (zoals de spanningstensor of de ruimtetijd-metriek $g_{\mu\nu}$).


* **Indexnotatie & Einstein-summatieconventie:**
* Het herhaald voorkomen van indices boven en onder betekent automatisch sommeren: $A_i B^i = \sum_{i} A_i B^i$.


* **Metrische Tensor ($g_{\mu\nu}$):** Het fundamentele wiskundige object dat afstanden, hoeken en kromming meet op willekeurige oppervlakken of ruimtetijden.

---

### Eindtoets Fase 6 (Checklist)

Je bent klaar voor de finale **Fase 7 (Differentiaalmeetkunde & Kwantumvelden)** als je deze 4 vragen beheerst:

1. Waarom is de verzameling van gehele getallen met optelling $(\mathbb{Z}, +)$ wél een groep, maar met vermenigvuldiging $(\mathbb{Z}, \cdot)$ niet? $\rightarrow$ **Omdat bij vermenigvuldiging bijna geen enkel element een geheel getal als invers element heeft (bijv. de inverse van $2$ is $\frac{1}{2}$, wat geen geheel getal is).**
2. Wat is de fysische betekenis van de Lie-groep $\text{SU}(2)$? $\rightarrow$ **Het is de symmetriegroep die de rotaties van kwantummechanische spin ($\frac{1}{2}$) en de elektrozwakke wisselwerking beschrijft.**
3. Wat is een topologisch homeomorfisme? $\rightarrow$ **Een continue, vervormbare transformatie (rekkend of buigend, maar zonder te scheuren of te plakken) die twee ruimtes als identiek beschouwt.**
4. Waarom gebruiken we tensoren in de relativiteitstheorie en veldentheorie in plaats van gewone matrices? $\rightarrow$ **Tensoren transformeren op een exacte, voorspelbare manier als je van coördinatenstelsel verandert, waardoor natuurwetten voor elke waarnemer exact dezelfde vorm houden.**