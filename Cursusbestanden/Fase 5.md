Fase 5 is de brug tussen klassieke wiskunde en de moderne natuurkunde. In deze fase combineer je calculus, algebra en het imaginaire getal $i$ om **complexe ruimtes, golfverschijnselen en dynamische systemen** te beschrijven.

Dit is de fase waarin je de **Schrödingervergelijking** leert oplossen en begrijpt hoe signalen en frequenties wiskundig worden ontleed.

---

### Milestone 5.1: Complexe Analyse & Het Complexe Vlak

**Doel:** Wiskunde uitbreiden naar de verzameling van complexe getallen ($\mathbb{C}$).

* **Het Imaginaire Getal $i$:** Definitie van $i = \sqrt{-1}$ (en dus $i^2 = -1$).
* **Representatie van Complexe Getallen ($z = a + bi$):**
* *Cartesische vorm:* $z = a + bi$, met reëel deel $\text{Re}(z) = a$ en imaginair deel $\text{Im}(z) = b$.
* *Complex Geconjugeerde:* $\bar{z} = a - bi$.
* *Modulus (lengte):* $\vert{}z\vert{} = \sqrt{a^2 + b^2}$.


* **Het Complexe Vlak (Argand-diagram):** Het visualiseren van complexe getallen met de reële as ($x$) en imaginaire as ($y$).
* **Polaires & Exponentiële Vorm:**
* **De Formule van Euler:** $e^{i\theta} = \cos(\theta) + i\sin(\theta)$ (de belangrijkste formule in golftheorie).
* *Polair schrijven:* $z = r e^{i\theta}$, waarin $r = \vert{}z\vert{}$ en $\theta = \arg(z)$.
* *De Identiteit van Euler:* $e^{i\pi} + 1 = 0$.


* **Complex Differentiëren:** Analytische functies en de **Cauchy-Riemann vergelijkingen**.

---

### Milestone 5.2: Gewone Differentiaalvergelijkingen (ODE's)

**Doel:** Vergelijkingen oplossen waarin de onbekende geen getal is, maar een functie en haar afgeleiden.

* **Begrip en Classificatie:**
* *Orde:* De hoogste afgeleide in de vergelijking (1e orde: $y'$, 2e orde: $y''$).
* *Lineariteit:* Lineair vs. niet-lineair.


* **Eerste-Orde Differentialen:**
* *Scheiding van variabelen:* Vergelijkingen van de vorm $\frac{dy}{dx} = g(x)h(y)$ oplossen door $x$ en $y$ aan weerszijden van het $=$-teken te integreren.
* *Integrerende factor:* Oplossen van lineaire 1e-orde vergelijkingen ($y' + P(x)y = Q(x)$).


* **Tweede-Orde Lineaire ODE's met Constante Coëfficiënten:**
* Vergelijkingen van de vorm $ay'' + by' + cy = 0$.
* De **Karakteristieke Vergelijking** ($ar^2 + br + c = 0$) en haar reële, meervoudige of complexe oplossingen.
* Harmonische oscillatoren (massa-veersystemen en gedempte trillingen).



---

### Milestone 5.3: Partiële Differentiaalvergelijkingen (PDE's)

**Doel:** Fysische processen modelleren die afhangen van meerdere variabelen (bijv. positie $x$ én tijd $t$).

* **De Drie Klassieke PDF's van de Natuurkunde:**
1. **Golfvergelijking:** $\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$ (geluid, licht, trillende snaren).
2. **Warmtevergelijking (Diffusievergelijking):** $\frac{\partial u}{\partial t} = \alpha \nabla^2 u$.
3. **Laplace- / Poisson-vergelijking:** $\nabla^2 u = 0$ (elektrische en gravitatiesystemen in evenwicht).


* **Oplosmethode: Scheiding van Variabelen:** Een oplossing $u(x,t)$ schrijven als het product van twee losse functies: $u(x,t) = X(x)T(t)$, om zo een PDE op te splitsen in twee eenvoudige ODE's.
* **Randvoorwaarden & Beginvoorwaarden:** Het uniek maken van een fysische oplossing (bijv. de uiteinden van een gitaarsnaar zitten vast).

---

### Milestone 5.4: Fourier-analyse & Transformatietheorie

**Doel:** Elke willekeurige golfbeweging of signaal ontleden in een som van eenvoudige sinus- en cosinusgolven.

* **Fourierreeksen:** Een periodieke functie $f(x)$ schrijven als een oneindige som van goniometrische functies:

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[ a_n \cos(nx) + b_n \sin(nx) \right]$$


* **Complexe Fourierreeks:** Het compact schrijven met e-machten: $f(x) = \sum_{n=-\infty}^{\infty} c_n e^{i n x}$.
* **De Fouriertransformatie ($\mathcal{F}$):** Uitbreiding naar niet-periodieke signalen. De overgang van het *tijddomein* (of ruimtedomein) naar het *frequentiedomein*:

$$\hat{f}(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} \, dt$$


* **Toepassing in Kwantummechanica:** De Fouriertransformatie is de wiskundige brug tussen de positie van een deeltje en zijn impuls (de grondslag van Heisenberg's onzekerheidsrelatie).

---

### Milestone 5.5: Kwantumsystemen & De Schrödingervergelijking

**Doel:** De opgebouwde kennis van complexe analyse, PDE's en lineaire algebra combineren om de basisvergelijking van de kwantummechanica op te lossen.

* **De Tijdsonafhankelijke Schrödingervergelijking (1D):**

$$-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$$


* $\psi(x)$ is de **golffunctie** (een complex getal op elk punt in de ruimte).
* $V(x)$ is de potentiële energie-omgeving.
* $E$ is de energie-eigenwaarde van het deeltje.


* **De Schrödingervergelijking als Eigenwaardeprobleem:** Hermitische operator (Hamiltoniaan $\hat{H}$) toegepast op een eigenvector (golffunctie $\psi$): $\hat{H}\psi = E\psi$.
* **Kwantummechanische Toepassingen:**
* *Deeltje in een doos:* Oplossen van $\psi(x)$ en zien dat de energie niveaus niet continu zijn, maar discreet (gekwantiseerd).
* *Kwantumtunneling:* Een deeltje dat wiskundig door een barrière dringt doordat de golffunctie $\psi(x)$ niet direct nul wordt.



---

### Eindtoets Fase 5 (Checklist)

Je bent klaar voor **Fase 6 (Abstracte Algebra & Topologie)** als je deze vraagstukken kunt verwerken:

1. Schrijf $z = 1 + i$ in de exponentiële vorm $r e^{i\theta}$ $\rightarrow$ **$\sqrt{2} e^{i\frac{\pi}{4}}$** ($r = \sqrt{1^2+1^2} = \sqrt{2}$, $\theta = 45^\circ = \frac{\pi}{6}$ rad)
2. Wat is de karakteristieke vergelijking en algemene oplossing voor $y'' + 4y = 0$? $\rightarrow$ **Karakteristiek: $r^2 + 4 = 0 \Rightarrow r = \pm 2i$. Oplossing: $y(x) = A\cos(2x) + B\sin(2x)$**
3. Wat doet de Fouriertransformatie met een signaal? $\rightarrow$ **Het ontleed een signaal in de losse frequenties (sinussen/cosinussen) waaruit het is opgebouwd.**
4. Waarom is de golffunctie $\psi(x)$ in de kwantummechanica een complex getal? $\rightarrow$ **Omdat de fasen van kwantumgolven via Eulers formule ($e^{i\theta}$) met elkaar moeten kunnen interfereren (optellen en uitdoven).**