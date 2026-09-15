# Structuur Leerpad — From Zero 2 Infinity

## Doel van het leerpad

Het ultieme kennis- en vaardigheidsdoel van **From Zero 2 Infinity** is het kunnen begrijpen van geavanceerde wiskundige structuren die uiteindelijk leiden naar differentiaalmeetkunde, kwantumveldentheorie en de Yang-Mills-theorie.

Het leerpad is opgebouwd als een keten waarin nieuwe concepten voortbouwen op eerder verworven rekenkundige, algebraïsche, geometrische en analytische vaardigheden.

De structuur is bewust hiërarchisch:

```text
Leerpad
├── Fase
│   ├── Onderwerp
│   │   ├── Subonderwerp
│   │   ├── Theorie
│   │   ├── Oefeningen
│   │   └── Examen
│   └── ...
└── volgende fase
```

---

# Fase 1 — Rekenkunde & Basisgetallen

**Doel:** van het eerste begrip van hoeveelheden en cijfers naar een solide beheersing van getallen en hun structuur.

Fase 1 bevat **13 onderwerpen**. Deze indeling is de canonieke structuur van Fase 1 en volgt de actuele `MILESTONES_1` in `fase1.js`.

| ID | Onderwerp | Kernfunctie |
|---|---|---|
| **1.1** | Cijfers en Getallen | Getallen begrijpen, schrijven, ordenen en vergelijken |
| **1.2** | De vier hoofdbewerkingen | Optellen, aftrekken, vermenigvuldigen en delen |
| **1.3** | Negatieve en gehele getallen | Uitbreiding van ℕ naar ℤ |
| **1.4** | Breuken en rationale getallen | Breuken begrijpen en rekenen met ℚ |
| **1.5** | Decimalen en percentages | Alternatieve schrijfwijzen en procentrekenen |
| **1.6** | Verhoudingen en evenredigheid | Verhoudingen en directe evenredigheid |
| **1.7** | Delers en deelbaarheid | Multiplicatieve structuur van natuurlijke getallen |
| **1.8** | Priemgetallen en factorisatie | Priemgetallen als bouwstenen |
| **1.9** | GGD en KGV | Gemeenschappelijke delers, veelvouden en Euclides |
| **1.10** | Machten | Exponenten en compacte vermenigvuldiging |
| **1.11** | Wortels | Omgekeerde bewerking van kwadrateren |
| **1.12** | Irrationale en reële getallen | Uitbreiding van ℚ naar ℝ |
| **1.13** | Afronden en wetenschappelijke notatie | Nauwkeurigheid, schatting en orde van grootte |

### Didactische keten

```text
1.1 Getallen
 ↓
1.2 Bewerkingen
 ↓
1.3 Gehele getallen
 ↓
1.4 Breuken
 ↓
1.5 Decimalen & percentages
 ↓
1.6 Verhoudingen
 ↓
1.7 Delers & deelbaarheid
 ↓
1.8 Priemfactorisatie
 ↓
1.9 GGD & KGV
 ↓
1.10 Machten
 ↓
1.11 Wortels
 ↓
1.12 ℚ → ℝ
 ↓
1.13 Afronden & wetenschappelijke notatie
```

### Belangrijke ontwerpregel

De 13 onderwerpen zijn niet alleen hoofdstukken. Ze vormen de inhoudelijke **tags/eenheden van het volledige systeem**:

- lessen worden aan een onderwerp gekoppeld;
- widgets ondersteunen één of meer onderwerpen;
- oefeningen krijgen een onderwerp en subonderwerp;
- examenvragen krijgen een onderwerp, subonderwerp en moeilijkheid;
- unlocks/skilltree-nodes kunnen afhankelijkheden naar onderwerpen gebruiken.

---

# Fase 2 — Algebra & Geometrie

**Doel:** van concrete getallen naar abstracte variabelen, relaties en geometrische structuren.

Belangrijke domeinen:

- basisalgebra;
- variabelen en algebraïsche uitdrukkingen;
- vergelijkingen;
- ongelijkheden;
- Euclidische geometrie;
- hoeken, lengtes, oppervlaktes en volumes;
- stelling van Pythagoras;
- cartesisch assenstelsel;
- functies en grafieken;
- lineaire functies;
- kwadratische functies;
- trigonometrie.

---

# Fase 3 — Calculus / Analyse

**Doel:** verandering, beweging, limieten en accumulatie wiskundig beschrijven.

Belangrijke domeinen:

- limieten;
- continuïteit;
- differentiaalrekening;
- afgeleiden;
- toepassingen van afgeleiden;
- integraalrekening;
- toepassingen van integralen;
- reeksen;
- multivariabele calculus;
- partiële afgeleiden;
- meervoudige integralen.

---

# Fase 4 — Lineaire Algebra

**Doel:** werken met vectoren, matrices en abstracte vectorruimten.

Belangrijke domeinen:

- vectoren;
- matrices;
- matrixbewerkingen;
- lineaire vergelijkingen;
- determinant;
- vectorruimten;
- lineaire afbeeldingen;
- basis en dimensie;
- eigenwaarden;
- eigenvectoren;
- orthogonaliteit;
- toepassingen in fysica.

---

# Fase 5 — Differentiaalvergelijkingen & Complexe Analyse

**Doel:** dynamische systemen en complexe getallen leren beschrijven.

Belangrijke domeinen:

- complexe getallen;
- complexe functies;
- differentiaalvergelijkingen;
- gewone differentiaalvergelijkingen;
- systemen van differentiaalvergelijkingen;
- Fourier-analyse;
- Fourier-reeksen;
- Fourier-transformatie;
- toepassingen op golven en fysische systemen.

---

# Fase 6 — Abstracte Algebra & Topologie

**Doel:** de onderliggende structuren van wiskundige systemen begrijpen.

Belangrijke domeinen:

- groepentheorie;
- symmetrie;
- homomorfismen;
- ringen;
- lichamen;
- abstracte vectorruimten;
- topologie;
- metrische ruimten;
- continuïteit in abstracte ruimten;
- tensorrekening.

---

# Fase 7 — Differentiaalmeetkunde & Kwantumvelden

**Doel:** de wiskundige taal begrijpen waarmee moderne fundamentele fysica wordt beschreven.

Belangrijke domeinen:

- differentiaalmeetkunde;
- variëteiten;
- raakruimten;
- tensoren;
- differentiaalvormen;
- vectorbundels;
- connecties;
- kromming;
- ijktheorieën;
- Yang-Mills-theorie;
- kwantumveldentheorie;
- relatie tussen symmetrie, velden en krachten.

Het uiteindelijke leerdoel is inzicht in hoe wiskundige structuren zoals symmetrie, geometrie en kwantumvelden samenkomen in moderne theoretische fysica.

---

# Structurele regels voor toekomstige uitbreiding

## 1. Nummering

Een onderwerp krijgt een stabiel ID:

```text
1.1
1.2
...
1.13
```

Nieuwe inhoud binnen een onderwerp krijgt een subnummer of een expliciete `subtopic`-ID.

Een nieuw onderwerp mag niet stilzwijgend een bestaand onderwerp hernummeren.

## 2. Bron van waarheid

Voor de softwarestructuur is de actuele `main`-versie van de code leidend.

Voor Fase 1 is `MILESTONES_1` in `fase1.js` de actuele bron voor de 13 onderwerp-IDs en titels.

## 3. Scheiding van niveaus

Gebruik niet door elkaar:

- fase;
- onderwerp;
- subonderwerp;
- les;
- oefening;
- examen;
- skilltree-node.

Een skilltree-node kan bijvoorbeeld afhankelijk zijn van meerdere onderwerpen.

## 4. Geen verborgen voorkennis

Nieuwe concepten moeten worden opgebouwd volgens:

```text
concreet voorbeeld
        ↓
intuïtief begrip
        ↓
wiskundige notatie
        ↓
formele regel
        ↓
toepassing
```

## 5. Examens

Examens moeten de onderwerpstructuur volgen. Een vraag hoort minimaal te weten:

```text
fase
onderwerp
subonderwerp
moeilijkheid
cognitief niveau
interactietype
```

Daarmee kunnen examens later evenwichtig over de volledige leerstof worden samengesteld.

---

# Fase 1 als referentiemodel

De 13 onderwerpen van Fase 1 vormen het eerste volledige voorbeeld van deze structuur.

De verdere ontwikkeling van de examens, interactieve vraagtypes en skilltree moet daarom eerst volledig aansluiten op deze 13-delige indeling voordat dezelfde aanpak naar Fase 2–7 wordt uitgebreid.
