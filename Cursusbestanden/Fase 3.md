Fase 3 vormt het absolute hart van de moderne wiskunde: **Calculus (of Analyse)**. Waar algebra stilstaande situaties beschrijft, geeft calculus je het gereedschap om **verandering, beweging en oneindigheid** exact te berekenen.

Dit is de wiskunde die nodig is voor natuurkunde, data science, ingenieurswetenschappen en uiteindelijk het begrijpen van complexe fysische modellen.

---

### Milestone 3.1: Limieten, Continuïteit & Oneindigheid

**Doel:** Begrijpen wat er gebeurt als een waarde een specifiek punt of oneindigheid ($\infty$) nadert.

* **Het Begrip van een Limiet ($\lim$):** De waarde die een functie $f(x)$ nadert wanneer de invoer $x$ dichter en dichter bij een bepaald getal $a$ komt ($\lim_{x \to a} f(x) = L$).
* **Eenzijdige Limieten:** Limieten van links ($\lim_{x \to a^-}$) en van rechts ($\lim_{x \to a^+}$) benaderen.
* **Continuïteit:** Een functie is continu op een punt als de functie er gedefinieerd is én de limiet van links gelijk is aan de limiet van rechts.
* **Limieten naar Oneindigheid & Asymptoten:**
* Horizontale asymptoten: Wat gebeurt er als $x \to \infty$ of $x \to -\infty$?
* Verticale asymptoten: Punten waar de functie 'ontploft' naar $+\infty$ of $-\infty$ (bijv. delen door nul).


* **De Regel van l'Hôpital:** Een techniek om onbepaalde limieten van de vorm $\frac{0}{0}$ of $\frac{\infty}{\infty}$ op te lossen met behulp van afgeleiden.

---

### Milestone 3.2: Differentiaalrekening (Afgeleiden)

**Doel:** De exacte veranderingssnelheid (helling van een raaklijn) berekenen op elk willekeurig punt.

* **De Definitie van de Afgeleide:** De afgeleide als de limiet van de differentiequotiënt:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$


* **Notaties:** Lagrange-notatie ($f'(x)$) en Leibniz-notatie ($\frac{df}{dx}$).
* **Standaard Afgeleiden (Kennis uit je hoofd):**
* Machtregel: $\frac{d}{dx}[x^n] = n \cdot x^{n-1}$
* Goniometrie: $\frac{d}{dx}[\sin(x)] = \cos(x)$ en $\frac{d}{dx}[\cos(x)] = -\sin(x)$
* Exponentieel & Logaritmisch: $\frac{d}{dx}[e^x] = e^x$ en $\frac{d}{dx}[\ln(x)] = \frac{1}{x}$


* **Rekenregels voor Differentieren:**
* *Som- en verschilregel:* $(f + g)' = f' + g'$
* *Productregel:* $(f \cdot g)' = f' \cdot g + f \cdot g'$
* *Quotientregel:* $\left(\frac{f}{g}\right)' = \frac{f' \cdot g - f \cdot g'}{g^2}$
* *Kettingregel:* $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$ (voor samengestelde functies).


* **Toepassingen van Afgeleiden:**
* Het vinden van **extremen** (maxima, minima en buigpunten) via $f'(x) = 0$.
* Snelheid en versnelling in de natuurkunde (positie $s(t) \rightarrow$ snelheid $v(t) = s'(t) \rightarrow$ versnelling $a(t) = v'(t)$).



---

### Milestone 3.3: Integraalrekening (Integralen)

**Doel:** Het omgekeerde van differentiëren: het optellen van oneindig kleine stukjes om oppervlakten en volumes te berekenen.

* **De Onbepaalde Integraal (Antiafgeleide):** Een functie $F(x)$ vinden waarvoor geldt dat $F'(x) = f(x)$. Wordt genoteerd als $\int f(x) \, dx = F(x) + C$.
* **Hoofdstelling van de Calculus:** De brug tussen differentiëren en integreren. Een bepaalde integraal berekent de exacte oppervlakte onder een kromme tussen $a$ en $b$:

$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$


* **Integratietechnieken:**
* *Substitutiemethode:* De omgekeerde kettingregel.
* *Partiële integratie:* De omgekeerde productregel ($\int u \, dv = uv - \int v \, du$).
* *Breuksplitsen:* Complexere rationele functies ontbinden in eenvoudiger te integreren breuken.


* **Toepassingen van Integralen:**
* Oppervlakten tussen twee grafieken.
* Booglengte van een kromme.
* Inhoud van omwentelingslichamen (3D-vormen ontstaan door een grafiek rond een as te draaien).



---

### Milestone 3.4: Reeksen & Taylorreeksen

**Doel:** Ingewikkelde functies benaderen als oneindige sommen van eenvoudige polynomen.

* **Rijen en Reeksen:** Verschil tussen een rij van getallen en een som van een rij.
* **Convergentie en Divergentie:** Bepalen of een oneindige som naar een vast getal toe groeit (convergeert) of naar oneindig gaat (divergeert).
* **Machtreeksen & Taylorreeksen:** Het schrijven van functies als een oneindige som van machten:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$


* **Maclaurinreeksen (Taylorreeks rond $x=0$):** Belangrijke expansies kennen:
* $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
* $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$



---

### Milestone 3.5: Multivariabele Calculus (Calculus in 3D+)

**Doel:** Calculus uitbreiden naar functies met meerdere invoervariabelen ($z = f(x, y)$).

* **Partiële Afgeleiden ($\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}$):** De verandering van een functie berekenen ten opzichte van één variabele, terwijl je de andere variabelen als een constante behandelt.
* **De Gradiënt ($\nabla f$):** Een vector die de richting en grootte van de steilste stijging van een functie aangeeft.
* **Meervoudige Integralen:** Dubbele en driedubbele integralen ($\iint f(x,y) \, dx \, dy$) om volumes en massa's in 2D- en 3D-ruimtes te berekenen.
* **Vectorcalculus Introductie:**
* Vectorvelden (aan elk punt in de ruimte een richting/kracht toewijzen).
* *Divergentie ($\nabla \cdot \mathbf{F}$):* Meet de mate waarin een veld vanuit een punt 'uitstroomt' of 'instroomt'.
* *Rotatie / Curl ($\nabla \times \mathbf{F}$):* Meet de mate van werveling of rotatie in een veld.



---

### Eindtoets Fase 3 (Checklist)

Je bent klaar voor **Fase 4 (Lineaire Algebra)** als je deze 4 vraagstukken kunt oplossen:

1. Bereken de afgeleide van $f(x) = x^2 \cdot \sin(x)$ $\rightarrow$ **$f'(x) = 2x \sin(x) + x^2 \cos(x)$** (Productregel)
2. Los de integraal op: $\int_0^2 3x^2 \, dx$ $\rightarrow$ **$8$** ($[x^3]_0^2 = 2^3 - 0^3$)
3. Bereken de partiële afgeleide naar $x$ voor $f(x, y) = 3x^2y + y^3$ $\rightarrow$ **$\frac{\partial f}{\partial x} = 6xy$**
4. Wat is de Taylorreeks-uitbreiding van $e^x$ rond $x=0$? $\rightarrow$ **$\sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots$**