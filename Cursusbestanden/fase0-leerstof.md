# Fase 0 — Taal van de wiskunde

Begin met tellen komt pas in fase 1. Deze fase leert de taal waarin elk later bewijs is geschreven: wat een uitspraak is, wat een bewijs is, wat een verzameling is, en wat “oneindig” precies betekent.

Een les is pas gehaald als je de definitie kunt geven, een tegenvoorbeeld kunt maken, en een kort bewijs kunt naschrijven zonder de tekst open te hebben.

---

## 0.1 Wat een bewijs is

### Doel

Een voorbeeld onderscheiden van een bewijs, en de vier gewone bewijsvormen kunnen gebruiken: direct, contrapositie, contradictie en (later, in 0.5) inductie.

### Uitspraak, voorbeeld, bewijs

Een **uitspraak** is een zin die waar of onwaar is. “2 is even” is een uitspraak. “Is 2 even?” is geen uitspraak.

Een **voorbeeld** laat zien dat iets kán. “4 = 2 + 2” laat zien dat er een even getal bestaat dat de som van twee even getallen is. Het bewijst niet dat dit voor élk even getal geldt.

Een **tegenvoorbeeld** is één geval dat een algemene bewering doodt. De bewering “elk oneven getal is priem” sterft aan 9.

Een **bewijs** is een keten van stappen die vanuit afgesproken definities en al bewezen feiten bij de bewering uitkomt, voor alle gevallen die de bewering noemt.

### Direct bewijs

Vorm: neem een willekeurig object dat aan de aanname voldoet, en leid de conclusie af.

**Stelling.** De som van twee even gehele getallen is even.

**Bewijs.** Een geheel getal is even als het 2k is voor een geheel getal k. Neem even getallen 2a en 2b. Hun som is 2a + 2b = 2(a + b). Dat is weer een veelvoud van 2, dus even.

Het woord “willekeurig” doet het werk: a en b zijn niet gekozen als 4 en 6.

### Contrapositie

“Als P, dan Q” is hetzelfde als “als niet Q, dan niet P”. Soms is de omgekeerde vorm makkelijker.

**Stelling.** Als n² even is, dan is n even. (n geheel)

**Bewijs via contrapositie.** Stel n is oneven. Dan is n = 2k + 1, en n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, dus oneven. Dus: als n oneven is, is n² oneven. Dat is precies: als n² even is, is n even.

### Contradictie

Neem aan dat de bewering onwaar is, en leid iets onmogelijks af.

**Stelling.** Er is geen rationaal getal waarvan het kwadraat 2 is.

**Bewijs.** Stel van wel: p/q in laagste termen, met p en q geheel, q ≠ 0, en (p/q)² = 2. Dan p² = 2q², dus p² is even, dus p is even (vorige stelling). Schrijf p = 2k. Dan 4k² = 2q², dus q² = 2k², dus q is even. Dan hebben p en q een factor 2 gemeen, in strijd met “laagste termen”. De aanname is dus onwaar.

Dit bewijs gebruikt alleen even/oneven en unieke schrijfwijze als breuk in laagste termen. De constructie van de reële getallen komt in fase 1; hier is het genoeg dat “rationaal” een breuk van gehele getallen betekent.

### Wat geen bewijs is

- Een tekening. Een plaatje kan een bewijs ondersteunen, maar is het bewijs niet, tenzij elke stap in de tekening is verantwoord.
- “Het geldt voor de getallen die ik probeerde.”
- De omkering. Uit “als het regent, is de straat nat” volgt niet “als de straat nat is, regent het”.
- Een definitie herhalen alsof dat een reden is.

### Oefenen

1. Geef een tegenvoorbeeld voor: “als een getal deelbaar is door 4 en door 6, dan is het deelbaar door 24”. Antwoord: 12.
2. Bewijs direct: het product van twee oneven getallen is oneven.
3. Bewijs met contrapositie: als n² niet deelbaar is door 3, dan is n niet deelbaar door 3.
4. Waarom is “√4 = 2, √9 = 3, √16 = 4” geen bewijs dat elke wortel van een kwadraat geheel is? Antwoord: de bewering is algemeen, de drie gevallen zijn voorbeelden; √2 is het tegenvoorbeeld van de sterkere bewering “elke wortel is geheel”, en de gegeven bewering gaat alleen over wortels van kwadraten van gehele getallen, die wél geheel zijn — de lijst bewijst dat nog steeds niet.

---

## 0.2 Verzamelingen

### Doel

Verzamelingen, element, deelverzameling, lege verzameling, en de gewone bewerkingen zonder ze door elkaar te halen.

### Definitie

Een **verzameling** is een ding dat bepaald wordt door welke objecten erin zitten. Die objecten heten **elementen**. a ∈ A betekent: a is een element van A. a ∉ A betekent van niet.

Twee verzamelingen zijn gelijk als ze precies dezelfde elementen hebben. {1, 2, 2} = {2, 1}. Volgorde en herhaling tellen niet. Een verzameling is geen lijst.

De **lege verzameling** ∅ heeft geen elementen. Er is er één: elke lege verzameling heeft dezelfde elementen, namelijk geen.

### Deelverzameling

A ⊆ B betekent: elk element van A is element van B. Elke verzameling is deelverzameling van zichzelf. ∅ is deelverzameling van elke verzameling, want de eis “elk element van ∅ …” gaat over geen enkel element en is dus waar.

A ⊂ B schrijven we als A ⊆ B en A ≠ B.

### Bewerkingen

- Vereniging: x ∈ A ∪ B precies als x ∈ A of x ∈ B (of allebei).
- Doorsnede: x ∈ A ∩ B precies als x in allebei zit.
- Verschil: x ∈ A \ B precies als x ∈ A en x ∉ B.
- Complement, alleen binnen een afgesproken heelal U: x ∈ Aᶜ precies als x ∈ U en x ∉ A.

**Stelling.** A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).

**Bewijs.** Neem x in de linker verzameling. Dan x ∈ A, en x ∈ B of x ∈ C. In het eerste geval x ∈ A ∩ B, in het tweede x ∈ A ∩ C. Dus x zit rechts. Omgekeerd: zit x rechts, dan zit x in A ∩ B of in A ∩ C, dus in A, en in B of in C, dus in B ∪ C, dus links. Gelijke elementen, dus gelijke verzamelingen.

### Tegenvoorbeelden

- ∈ is niet ⊆. 1 ∈ {1}, maar {1} ⊆ {1} en 1 ⊆ {1} is onzin: 1 is hier geen verzameling waarvan we de elementen natrekken.
- Doorsnede is niet “het gemeenschappelijke stuk van een tekening” zonder heelal. Zonder afgesproken elementen is de doorsnede niet bepaald door een plaatje.

### Machtverzameling

De **machtverzameling** P(A) is de verzameling van alle deelverzamelingen van A. P({1, 2}) = { ∅, {1}, {2}, {1, 2} }. Vier stuks, niet drie: de lege verzameling hoort erbij.

### Oefenen

1. Is {∅} leeg? Nee. Het enige element is ∅. ∅ ∈ {∅}, maar ∅ ≠ {∅}.
2. Schrijf P({a}). Antwoord: { ∅, {a} }.
3. Bewijs: A ⊆ B precies als A ∪ B = B.
4. Geef verzamelingen met A \ B ≠ B \ A.

---

## 0.3 Relaties en functies

### Doel

Een functie zien als een speciale relatie, en injectie, surjectie en bijectie uit elkaar houden.

### Koppel

Het **cartesisch product** A × B is de verzameling van koppels (a, b) met a ∈ A en b ∈ B. (1, 2) ≠ (2, 1). Een koppel is geen verzameling van twee elementen: {1, 2} = {2, 1}.

Een **relatie** van A naar B is een deelverzameling van A × B. “a staat in relatie tot b” betekent (a, b) zit in die deelverzameling.

### Functie

Een **functie** f: A → B is een relatie waarin bij elke a ∈ A precies één b ∈ B hoort met (a, b) in de relatie. A is het **domein**, B het **codomein**. Het **beeld** f(A) is { f(a) | a ∈ A }, en dat hoeft niet heel B te zijn.

f(a) = b schrijft het unieke element dat bij a hoort.

Geen functie: de relatie op mensen “is kind van”, want een mens kan twee ouders hebben, en de relatie is dan niet eenduidig als je haar als functie naar “de ouder” probeert te lezen.

### Drie eigenschappen

- **Injectief:** verschillende inputs, verschillende outputs. f(a) = f(a′) impliceert a = a′.
- **Surjectief:** elk element van het codomein wordt geraakt. Voor elke b ∈ B is er een a met f(a) = b.
- **Bijectief:** injectief en surjectief. Dan bestaat een inverse functie f⁻¹: B → A.

Het codomein hoort bij de functie. f: ℕ → ℕ met f(n) = n is surjectief. Dezelfde regel f: ℕ → ℤ met f(n) = n is niet surjectief, want −1 wordt niet geraakt.

**Stelling.** Een functie heeft een inverse functie precies als ze bijectief is.

**Bewijs, schets.** Als f bijectief is, hoort bij elke b precies één a met f(a) = b. Noem dat a = f⁻¹(b). Dan is f⁻¹ een functie, en de twee samenstellingen zijn de identiteit. Omgekeerd: bestaat f⁻¹, dan is f injectief want f(a) = f(a′) geeft a = f⁻¹(f(a)) = f⁻¹(f(a′)) = a′, en surjectief want b = f(f⁻¹(b)).

### Samenstellen

(g ∘ f)(a) = g(f(a)), alleen als het beeld van f in het domein van g past. Samenstellen is associatief en niet altijd commutatief. f(x) = x + 1 en g(x) = 2x geven g ∘ f (x) = 2x + 2 en f ∘ g (x) = 2x + 1.

### Oefenen

1. Is f: ℤ → ℤ, f(n) = 2n, injectief? Ja. Surjectief? Nee, 1 wordt niet geraakt.
2. Is f: ℝ → ℝ, f(x) = x³, bijectief? Ja, met inverse de derdemachtswortel.
3. Geef een functie die surjectief is en niet injectief. Antwoord: f: {1, 2, 3} → {a, b} met f(1) = f(2) = a en f(3) = b.
4. Waarom is “elke functie heeft een inverse” onwaar? Omdat niet elke functie bijectief is.

---

## 0.4 Logica

### Doel

“En”, “of”, “niet”, “als … dan”, en de quantoren ∀ en ∃ correct gebruiken, inclusief hun ontkenning.

### Verbindingen

- Niet P, geschreven ¬P, is waar precies als P onwaar is.
- P en Q is waar precies als allebei waar zijn.
- P of Q is waar als minstens één waar is. In de wiskunde is “of” inclusief: allebei mag.
- Als P dan Q, geschreven P ⇒ Q, is alleen onwaar als P waar is en Q onwaar. Uit een onware P volgt formeel alles. Dat is geen wijsheid over de wereld, het is de afspraak waardoor “als 0 = 1, dan 2 = 3” niet als tegenvoorbeeld van een implicatie telt.

P ⇒ Q is hetzelfde als ¬Q ⇒ ¬P (contrapositie) en niet hetzelfde als Q ⇒ P (omkering).

P ⇔ Q betekent beide richtingen.

### Quantoren

∀x ∈ A: P(x) betekent: voor elk element van A geldt P.

∃x ∈ A: P(x) betekent: er is minstens één element van A waarvoor P geldt.

De volgorde telt. ∀x ∃y (y > x) is waar op de gehele getallen: bij elke x past een grotere y. ∃y ∀x (y > x) is onwaar: geen enkel getal is groter dan alle getallen.

### Ontkennen

- ¬(P en Q) is (¬P) of (¬Q).
- ¬(P of Q) is (¬P) en (¬Q).
- ¬(P ⇒ Q) is P en ¬Q.
- ¬∀x P(x) is ∃x ¬P(x).
- ¬∃x P(x) is ∀x ¬P(x).

De ontkenning van “elk priemgetal is oneven” is niet “elk priemgetal is even”, maar “er is een priemgetal dat niet oneven is”. Dat exists: 2.

### Oefenen

1. Ontken: ∀ε > 0 ∃N ∀n (n > N ⇒ |aₙ − L| < ε). Antwoord: ∃ε > 0 ∀N ∃n (n > N en |aₙ − L| ≥ ε). Dit is de vorm van “de rij convergeert niet naar L”; de analyse zelf komt in fase 3.
2. Is “P of ¬P” altijd waar, als P een uitspraak is? Ja, in de klassieke logica die dit spel gebruikt.
3. Waarom volgt uit “als n priem is en n > 2, dan is n oneven” niet “als n oneven is, dan is n priem”?

---

## 0.5 Inductie

### Doel

Bewijzen voor alle natuurlijke getallen, niet door ze af te lopen.

### Principe

De natuurlijke getallen beginnen hier bij 0. (Fase 1 laat zien waarom die keuze handig is; het principe werkt evengoed vanaf 1.)

**Inductie.** Wil je ∀n ∈ ℕ: P(n), bewijs dan:

1. P(0) (de basis).
2. Voor elke k: als P(k), dan P(k + 1) (de stap).

Dan geldt P(n) voor elke n. Reden: P(0) geeft P(1), dat geeft P(2), enzovoort. De stap moet voor een willekeurige k werken, niet voor één voorbeeld.

### Voorbeeld

**Stelling.** Voor elke n ≥ 0 is 0 + 1 + … + n = n(n + 1)/2.

**Bewijs.** Basis: voor n = 0 is de som 0, en 0·1/2 = 0. Stap: neem aan dat de som tot k gelijk is aan k(k + 1)/2. De som tot k + 1 is die som plus (k + 1), dus k(k + 1)/2 + (k + 1) = (k + 1)(k/2 + 1) = (k + 1)(k + 2)/2. Dat is de formule voor n = k + 1.

### Wat er misgaat

Een stap zonder basis bewijst niets: “als het voor k geldt, dan voor k + 1” kan waar zijn terwijl P nergens geldt. Een basis zonder stap bewijst één geval.

**Sterke inductie** neemt als aanname dat P(0) tot en met P(k) allemaal gelden, en bewijst P(k + 1). Nodig als de stap op meer dan alleen de vorige waarde leunt, bijvoorbeeld bij unieke priemfactorisatie in fase 1.

### Oefenen

1. Bewijs met inductie: 2⁰ + 2¹ + … + 2ⁿ = 2ⁿ⁺¹ − 1.
2. Waar faalt een “bewijs” dat alle paarden dezelfde kleur hebben? De stap van 1 naar 2 overlapt niet: twee groepen van één paard hebben geen gemeenschappelijk paard, dus de kleur wordt niet doorgegeven.
3. Bewijs: n² + n is altijd even.

---

## 0.6 Ordening en cardinaliteit

### Doel

Eindig, aftelbaar oneindig en overaftelbaar uit elkaar houden, zonder “oneindig” als een getal te behandelen.

### Eindig

Een verzameling is **eindig** als ze in bijectie is met {1, 2, …, n} voor een n, of leeg is. Het getal n is dan het **aantal** elementen. Dat aantal ligt vast: er is geen bijectie tussen {1, …, n} en {1, …, m} als n ≠ m.

**Stelling.** Een eindige verzameling is niet in bijectie met een echte deelverzameling van zichzelf.

Oneindige verzamelingen kunnen dat wel. n ↦ n + 1 is een bijectie van ℕ naar {1, 2, 3, …}, een echte deelverzameling als 0 ∈ ℕ.

### Aftelbaar

Een verzameling is **aftelbaar oneindig** als er een bijectie met ℕ is. De elementen kun je dan op een rij zetten: a₀, a₁, a₂, … waarbij elk element precies één keer voorkomt.

ℤ is aftelbaar: 0, 1, −1, 2, −2, 3, −3, … De functie die deze rij nummert is een bijectie met ℕ.

ℚ is aftelbaar. Breuken p/q in laagste termen staan in een rooster. Loop de diagonalen af waar |p| + q = 1, dan 2, dan 3, en sla herhalingen over. Elke breuk komt één keer voor. Een oneindige deelverzameling van een aftelbare verzameling is eindig of aftelbaar.

### Overaftelbaar

**Stelling (Cantor).** ℝ is niet aftelbaar. Zelfs (0, 1) niet.

**Bewijs.** Stel van wel. Zet alle getallen in (0, 1) in een rij r₀, r₁, r₂, …, elk als decimale ontwikkeling 0,dₙ0 dₙ1 dₙ2 … Kies een getal 0,c₀ c₁ c₂ … met cₙ = 4 als het n-de cijfer van rₙ niet 4 is, en cₙ = 5 als dat cijfer wel 4 is. Dit getal zit in (0, 1) en verschilt van rₙ op de n-de decimaal, voor elke n. Het staat dus niet in de rij. Tegenspraak.

De keuze 4 en 5 ontwijkt de dubbele schrijfwijze 0,1999… = 0,2000….

### Machten verzamelen

**Stelling (Cantor).** Er is geen surjectie van A naar P(A).

**Bewijs.** Stel f: A → P(A) is surjectief. Bekijk B = { a ∈ A | a ∉ f(a) }. B is een deelverzameling, dus B = f(b) voor een b. Zit b in B, dan b ∉ f(b) = B. Zit b niet in B, dan b ∉ f(b), dus b ∈ B. Beide kanten spreken zichzelf tegen.

Dus P(ℕ) is “groter” dan ℕ: er is een injectie van ℕ naar P(ℕ), namelijk n ↦ {n}, maar geen surjectie terug. Er zijn meer deelverzamelingen van ℕ dan natuurlijke getallen, en dus ook meer reële getallen dan natuurlijke getallen, want elke deelverzameling van ℕ bepaalt een reëel getal via een decimale rij van nullen en enen, en verschillende deelverzamelingen kunnen hetzelfde reële getal geven — de diagonaalbewijs hierboven is de schone weg voor ℝ.

### Wat hier niet wordt bewezen

Dat er precies één grootte tussen ℕ en ℝ zit, is onafhankelijk van de gewone axiomatiek. Het spel beweert dat niet. “Oneindig” is hier geen getal waarmee je rekent; ℵ₀ als naam voor de aftelbare grootte komt terug als de spelers verzamelingen en bijecties vast hebben.

### Oefenen

1. Is de verzameling even natuurlijke getallen aftelbaar? Ja, via n ↦ 2n.
2. Is {1, 2, …, 10} in bijectie met een echte deelverzameling van zichzelf? Nee.
3. Waarom is “oneindig + 1 = oneindig” geen rekensom in deze fase? Omdat we geen getal “oneindig” hebben ingevoerd, alleen bijecties tussen verzamelingen.
4. Geef een injectie van ℕ naar ℚ die geen surjectie is.

---

## Poort naar fase 1

Fase 1 begint bij cijfers en hoofdbewerkingen. Alles daar wat “voor alle n” zegt, leunt op 0.5. Alles wat “er bestaat een tegenvoorbeeld” zegt, leunt op 0.4. De breuken in fase 1 zijn de rationale getallen uit 0.1 en 0.6. Zonder deze fase is een later bewijs een tekst om na te zeggen.
