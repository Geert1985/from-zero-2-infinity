/*
 * Verbeterde breukwidget voor Fase 1.4.
 *
 * Deze override vervangt alleen fractionVisual uit widgets.js.
 * De canvas wordt alleen opnieuw gedimensioneerd wanneer de layout
 * werkelijk verandert; tijdens het bewegen van de sliders wordt
 * uitsluitend de inhoud opnieuw getekend.
 */

function mountFractionVisual(root) {
  if (!root) return;

  root.innerHTML = `
    <section class="widget fraction-visual-widget">
      <header>
        <strong>Breuken zichtbaar maken</strong>
        <span>De noemer verdeelt het geheel, de teller kiest delen.</span>
      </header>

      <div class="fraction-visual-controls">
        <label>
          Noemer
          <input
            type="range"
            class="fraction-denominator"
            min="2"
            max="12"
            step="1"
            value="5"
          >
          <output class="fraction-denominator-value">5</output>
        </label>

        <label>
          Teller
          <input
            type="range"
            class="fraction-numerator"
            min="1"
            max="5"
            step="1"
            value="3"
          >
          <output class="fraction-numerator-value">3</output>
        </label>
      </div>

      <canvas
        class="fraction-visual-canvas"
        aria-label="Visuele voorstelling van een breuk"
      ></canvas>

      <div class="fraction-visual-readout"></div>
    </section>
  `;

  const denominatorSlider = root.querySelector(".fraction-denominator");
  const numeratorSlider = root.querySelector(".fraction-numerator");
  const denominatorValue = root.querySelector(".fraction-denominator-value");
  const numeratorValue = root.querySelector(".fraction-numerator-value");
  const canvas = root.querySelector(".fraction-visual-canvas");
  const readout = root.querySelector(".fraction-visual-readout");
  const ctx = canvas.getContext("2d");

  // Houd de tekenruimte stabiel. De canvashoogte verandert niet tijdens
  // sliderbewegingen, zodat de pagina niet opnieuw gaat schalen.
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "250px";
  canvas.style.maxWidth = "100%";
  canvas.style.boxSizing = "border-box";

  let cssWidth = 0;
  let cssHeight = 250;
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    const width = Math.max(240, Math.floor(canvas.clientWidth || canvas.parentElement.clientWidth || 240));
    const height = 250;
    const nextDpr = window.devicePixelRatio || 1;

    if (width === cssWidth && height === cssHeight && nextDpr === dpr) {
      return;
    }

    cssWidth = width;
    cssHeight = height;
    dpr = nextDpr;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    const denominator = Number(denominatorSlider.value);
    const numerator = Math.min(Number(numeratorSlider.value), denominator);

    denominatorValue.textContent = String(denominator);
    numeratorValue.textContent = String(numerator);

    if (Number(numeratorSlider.value) !== numerator) {
      numeratorSlider.value = String(numerator);
    }

    // De bestaande canvasgrootte blijft behouden.
    const width = cssWidth || Math.max(240, canvas.clientWidth || 240);
    const height = cssHeight;

    ctx.clearRect(0, 0, width, height);

    const barX = Math.max(20, width * 0.08);
    const barWidth = width - barX * 2;
    const barY = 78;
    const barHeight = 82;
    const radius = 10;

    // Achtergrond van de volledige balk.
    ctx.fillStyle = "rgba(255,255,255,0.055)";
    ctx.strokeStyle = "rgba(230,199,122,0.65)";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.roundRect(barX, barY, barWidth, barHeight, radius);
    ctx.fill();
    ctx.stroke();

    // De gelijke delen.
    const partWidth = barWidth / denominator;

    for (let i = 0; i < denominator; i++) {
      const x = barX + i * partWidth;
      const selected = i < numerator;

      ctx.fillStyle = selected ? "#6ab0e0" : "rgba(255,246,223,0.08)";
      ctx.fillRect(x + 1, barY + 1, Math.max(0, partWidth - 2), barHeight - 2);

      if (i > 0) {
        ctx.strokeStyle = "rgba(230,199,122,0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, barY);
        ctx.lineTo(x, barY + barHeight);
        ctx.stroke();
      }
    }

    // Teller/noemer groot en centraal boven de balk.
    const fractionCenterX = width / 2;
    const fractionTop = 18;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff6df";
    ctx.font = "700 28px Cinzel, serif";
    ctx.fillText(String(numerator), fractionCenterX, fractionTop + 10);

    ctx.strokeStyle = "#e6c77a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(fractionCenterX - 22, fractionTop + 28);
    ctx.lineTo(fractionCenterX + 22, fractionTop + 28);
    ctx.stroke();

    ctx.fillStyle = "#fff6df";
    ctx.font = "700 28px Cinzel, serif";
    ctx.fillText(String(denominator), fractionCenterX, fractionTop + 50);

    // Nummering onder de delen maakt de koppeling met de noemer expliciet.
    ctx.fillStyle = "#cbb98a";
    ctx.font = "14px 'Source Sans 3', sans-serif";
    ctx.textAlign = "center";

    for (let i = 0; i < denominator; i++) {
      const center = barX + (i + 0.5) * partWidth;
      ctx.fillText(String(i + 1), center, barY + barHeight + 24);
    }

    readout.innerHTML =
      `<strong>${numerator}/${denominator}</strong> = ` +
      `${numerator} van de ${denominator} gelijke delen`;
  }

  denominatorSlider.addEventListener("input", () => {
    const denominator = Number(denominatorSlider.value);
    numeratorSlider.max = String(denominator);

    if (Number(numeratorSlider.value) > denominator) {
      numeratorSlider.value = String(denominator);
    }

    draw();
  });

  numeratorSlider.addEventListener("input", draw);

  // Alleen layoutwijzigingen mogen de canvas opnieuw dimensioneren.
  if (typeof ResizeObserver === "function") {
    const observer = new ResizeObserver(() => resizeCanvas());
    observer.observe(canvas);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }

  // De builder bestaat al in widgets.js; alleen deze implementatie vervangen.
  if (typeof WIDGET_BUILDERS === "object" && WIDGET_BUILDERS) {
    WIDGET_BUILDERS.fractionVisual = mountFractionVisual;
  }

  resizeCanvas();
}

// Vervang de oorspronkelijke builder vóór de widgets worden gemount.
if (typeof WIDGET_BUILDERS === "object" && WIDGET_BUILDERS) {
  WIDGET_BUILDERS.fractionVisual = mountFractionVisual;
}
