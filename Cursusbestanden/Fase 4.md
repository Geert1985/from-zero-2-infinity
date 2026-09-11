Fase 4 introduceert **Lineaire Algebra**. Waar Calculus gericht is op continue verandering en krommen, richt Lineaire Algebra zich op **lineaire structuren, transformaties en meerdimensionale ruimtes**.

In de fysica, data science en kwantummechanica is Lineaire Algebra de absolute spil: toestanden van kwantumsystemen zijn simpelweg vectoren in een oneindig-dimensionale ruimte, en fysische waarnemingen zijn bewerkingen met matrices.

---

### Milestone 4.1: Vectoren & Vectorruimten

**Doel:** Meerdimensionale richtingen en ruimtelijke structuren wiskundig begrijpen.

* **Vectoren in $\mathbb{R}^n$:** Representatie van vectoren als pijl met richting en lengte, of als getallenkolom $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \dots \\ v_n \end{bmatrix}$.
* **Vectorbewerkingen:**
* *Optellen en aftrekken:* $\mathbf{u} + \mathbf{v}$ (componentgewijs).
* *Scalaire vermenigvuldiging:* $c\mathbf{v}$ (een vector oprekken of krimpen met een getal $c$).


* **Inproduct (Dot Product):** $\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \dots + u_nv_n = \Vert{}\mathbf{u}\Vert{} \Vert{}\mathbf{v}\Vert{} \cos(\theta)$.
* Meten van lengte (norm: $\Vert{}\mathbf{v}\Vert{} = \sqrt{\mathbf{v} \cdot \mathbf{v}}$) en hoeken.
* **Orthogonaliteit:** Twee vectoren staan loodrecht op elkaar als $\mathbf{u} \cdot \mathbf{v} = 0$.


* **Uitproduct (Cross Product in $\mathbb{R}^3$):** $\mathbf{u} \times \mathbf{v}$ geeft een nieuwe vector die loodrecht staat op het vlak gevormd door $\mathbf{u}$ en $\mathbf{v}$.
* **Vectorruimten en Deelruimten:** Formalisatie van wat een ruimte maakt (sluiting onder optelling en scalaire vermenigvuldiging).

---

### Milestone 4.2: Lineaire Combinaties, Opspanning & Onafhankelijkheid

**Doel:** Begrijpen hoe ruimtes worden opgebouwd uit fundamentele bouwstenen.

* **Lineaire Combinatie:** Een som van geschaalde vectoren: $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k$.
* **Opspan (Span):** De verzameling van álle mogelijke lineaire combinaties van een stel vectoren (vormt een lijn, vlak of hogere ruimte).
* **Lineaire Onafhankelijkheid:** Een verzameling vectoren is lineair onafhankelijk als geen enkele vector in de set geschreven kan worden als een lineaire combinatie van de anderen ($c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k = \mathbf{0}$ geldt alleen als alle $c_i = 0$).
* **Basis & Dimensie:**
* Een **basis** is een minimale verzameling lineair onafhankelijke vectoren die een ruimte volledig opspant.
* De **dimensie** van een ruimte is het aantal vectoren in haar basis.
* *Standaardbasis:* De basisvectoren $\mathbf{e}_1 = \begin{bmatrix}1\\0\end{bmatrix}, \mathbf{e}_2 = \begin{bmatrix}0\\1\end{bmatrix}$ in $\mathbb{R}^2$.



---

### Milestone 4.3: Matrices & Lineaire Transformaties

**Doel:** Ruimtelijke vervormingen beschrijven en stelsels vergelijkingen in één keer oplossen.

* **Matrices als rooster van getallen:** Een $m \times n$ matrix met $m$ rijen en $n$ kolommen.
* **Matrixbewerkingen:** Optellen, vermenigvuldigen met een scalair, en matrixvermenigvuldiging ($A \cdot B$).
* **Matrices als Lineaire Transformaties:**
* Het idee dat een matrix $A$ een functie is die een vector $\mathbf{x}$ vervormt of verplaatst naar een nieuwe vector $A\mathbf{x}$.
* Visualisatie van transformaties: roteren, schalen, spiegelen en afschuiven (shear).


* **Inversie van Matrices ($A^{-1}$):**
* De "omgekeerde" matrix zodanig dat $A \cdot A^{-1} = I$ (waarbij $I$ de identiteitsmatrix is).
* Alleen vierkante matrices met een determinant ongelijk aan nul hebben een inversie.


* **Stelsels Oplossen via Gauss-Eliminatie:**
* Maken van een aangevulde matrix (augmented matrix).
* Rij-operaties uitvoeren om de matrix in (gereduceerde) echelonavorm te brengen.



---

### Milestone 4.4: Determinanten & Kern/Beeld

**Doel:** De fundamentele eigenschappen en vervormingsfactoren van matrices analyseren.

* **De Determinant ($\det(A)$ of $\vert{}A\vert{}$):**
* Geometrische betekenis: De factor waarmee een matrix het *oppervlak* (in 2D) of *volume* (in 3D) van een vorm schaalt.
* Als $\det(A) = 0$, klapt de ruimte in elkaar naar een lagere dimensie (de matrix is niet-inverteerbaar/singulier).


* **Nulruimte / Kern (Nullspace / Kernel):** De verzameling vectoren $\mathbf{x}$ die door de transformatie $A$ op de nulvector worden afgebeeld ($A\mathbf{x} = \mathbf{0}$).
* **Kolomruimte / Beeld (Column Space / Image):** De opspan van de kolommen van $A$ (alle mogelijke uitkomsten van $A\mathbf{x}$).
* **Rang-Nuliteitsstelling (Rank-Nullity Theorem):**

$$\text{Rang}(A) + \text{Nuliteit}(A) = \text{Aantal kolommen van } A$$



---

### Milestone 4.5: Eigenwaarden, Eigenvectoren & Diagonaalstructuur

**Doel:** De 'magische' richtingen van een transformatie vinden die niet van richting veranderen, alleen van lengte.

* **De Eigenwaarde-vergelijking:**

$$A\mathbf{v} = \lambda \mathbf{v}$$


* $\mathbf{v}$ is de **eigenvector** (een richting die na transformatie op dezelfde lijn blijft).
* $\lambda$ is de **eigenwaarde** (de schaalfactor waarmee de eigenvector wordt opgerekt of ingekrompen).


* **Eigenwaarden Berekenen:** Het oplossen van de karakteristieke vergelijking $\det(A - \lambda I) = 0$.
* **Diogonalisering van Matrices ($A = PDP^{-1}$):** Een matrix omzetten naar een diagonaalmatrix $D$ met de eigenwaarden op de diagonaal. Dit maakt het extreem eenvoudig om matrices tot een hoge macht te verheffen ($A^n = P D^n P^{-1}$).
* **Hermitische & Symmetrische Matrices:**
* Real-symmetrische matrices ($A = A^T$) hebben altijd reële eigenwaarden en orthogonale eigenvectoren (cruciaal voor fysische observabelen in de kwantummechanica).



---

### Eindtoets Fase 4 (Checklist)

Je bent klaar voor **Fase 5 (Differentialen & Complexe Analyse)** als je deze 4 vraagstukken begrijpt en kunt uitvoeren:

1. Bereken het inproduct van $\mathbf{u} = \begin{bmatrix}2\\3\end{bmatrix}$ en $\mathbf{v} = \begin{bmatrix}-1\\4\end{bmatrix}$ $\rightarrow$ **$10$** ($2\cdot(-1) + 3\cdot 4$)
2. Bereken de determinant van $A = \begin{bmatrix}3 & 1 \\ 2 & 4\end{bmatrix}$ $\rightarrow$ **$10$** ($(3\cdot 4) - (1\cdot 2)$)
3. Wat betekent het geometrisch als een matrix $A$ een determinant van $0$ heeft? $\rightarrow$ **De transformatie drukt de ruimte samen tot een lagere dimensie (bijv. een 2D-vlak tot een 1D-lijn), waardoor de informatie verloren gaat en de matrix niet inverteerbaar is.**
4. Vind de eigenwaarden van $A = \begin{bmatrix}2 & 0 \\ 0 & 5\end{bmatrix}$ $\rightarrow$ **$\lambda_1 = 2, \lambda_2 = 5$** (op een diagonaalmatrix zijn de diagonaalelementen direct de eigenwaarden).