/* Compatibiliteitslaag voor LaTeX-formules in JavaScript template strings.
 *
 * JavaScript behandelt sommige backslash-combinaties in template literals
 * als escape sequences. Daardoor kunnen LaTeX-commando's zoals \frac en
 * \qquad beschadigd in de DOM terechtkomen voordat KaTeX ze verwerkt.
 * Deze laag herstelt de bekende vormen vóór het typesetten.
 */
(function () {
  if (typeof unicodeToTex !== "function") return;

  const originalUnicodeToTex = unicodeToTex;

  window.unicodeToTex = function (raw) {
    let s = String(raw ?? "");

    // Herstel een per ongeluk als control character geïnterpreteerde \frac.
    // In een JS template literal wordt \f namelijk een form-feed character.
    s = s.replace(/\f\s*rac/g, "\\frac");

    // \q is geen geldige JavaScript escape en kan daardoor als 'q' eindigen.
    // Herstel de meest gebruikte LaTeX spacing-opdracht uit formules.
    s = s.replace(/(^|[^\\])qquad\b/g, "$1\\qquad");

    return originalUnicodeToTex(s);
  };

  // typesetMath() gebruikt toTex(). Ook daar moet de compatibiliteitslaag
  // actief zijn wanneer een formule rechtstreeks uit de DOM komt.
  window.toTex = function (s) {
    const raw = String(s ?? "");

    if (/\\[a-zA-Z{]/.test(raw)) {
      return raw;
    }

    return window.unicodeToTex(raw);
  };
})();
