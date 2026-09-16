/* Interactieve algebramachine voor Fase 2.1. */
(function () {
  function mountAlgebraMachine(root) {
    root.innerHTML = `
      <section class="widget algebra-machine">
        <header>
          <strong>Algebramachine</strong>
          <span>Vul een waarde in voor x en volg de berekening stap voor stap.</span>
        </header>

        <div class="algebra-machine-expression" aria-live="polite">
          <div class="algebra-machine-line">
            <span class="algebra-machine-label">Uitdrukking</span>
            <span class="algebra-machine-formula">3x + 5</span>
          </div>
          <div class="algebra-machine-arrow" aria-hidden="true">↓</div>
          <div class="algebra-machine-line">
            <span class="algebra-machine-label">Invullen</span>
            <span class="algebra-machine-formula" data-k="substitution">3 · (2) + 5</span>
          </div>
          <div class="algebra-machine-arrow" aria-hidden="true">↓</div>
          <div class="algebra-machine-result" data-k="result">= 11</div>
        </div>

        <div class="widget-controls algebra-machine-controls">
          <label>
            Kies x
            <input type="range" min="-5" max="10" step="1" value="2" data-k="x" aria-label="Waarde van x">
            <output data-o="x">2</output>
          </label>
        </div>

        <p class="widget-readout" data-k="readout">Voor x = 2 is 3x + 5 = 11.</p>
      </section>`;

    const xEl = root.querySelector("[data-k=x]");
    const xOut = root.querySelector("[data-o=x]");
    const substitution = root.querySelector("[data-k=substitution]");
    const result = root.querySelector("[data-k=result]");
    const readout = root.querySelector("[data-k=readout]");

    const draw = () => {
      const x = Number(xEl.value);
      const value = 3 * x + 5;
      const xText = x < 0 ? `(${x})` : String(x);

      xOut.textContent = String(x);
      substitution.textContent = `3 · ${xText} + 5 = ${3 * x} + 5`;
      result.textContent = `= ${value}`;
      readout.textContent = `Voor x = ${x} is 3x + 5 = ${value}.`;
    };

    xEl.addEventListener("input", draw);
    draw();
  }

  if (typeof WIDGET_BUILDERS !== "undefined") {
    WIDGET_BUILDERS.algebraMachine = mountAlgebraMachine;
  }
})();
