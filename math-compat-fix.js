/* Compatibiliteitslaag voor LaTeX-formules in JavaScript template strings.
 *
 * JavaScript behandelt sommige backslash-combinaties in template literals
 * als escape sequences. Daardoor kunnen LaTeX-commando's zoals \\frac,
 * \\times, \\neq en \\qquad beschadigd in de DOM terechtkomen voordat KaTeX
 * ze verwerkt. Deze laag herstelt de bekende vormen vóór het typesetten.
 */
(function () {
  if (typeof unicodeToTex !== "function") return;

  const originalUnicodeToTex = unicodeToTex;

  window.unicodeToTex = function (raw) {
    let s = String(raw ?? "");

    // Herstel \\frac: in een JS template literal wordt \\f een form-feed.
    s = s.replace(/\f\s*rac/g, "\\frac");

    // Herstel \\times: \\t wordt in JavaScript een tab, gevolgd door 'imes'.
    s = s.replace(/\t\s*imes/g, "\\times");

    // Herstel \\neq: \\n wordt in JavaScript een newline, gevolgd door 'eq'.
    s = s.replace(/\n\s*eq/g, "\\neq");

    // Herstel \\qquad: dit commando verliest in een template literal de
    // backslash maar blijft als 'qquad' herkenbaar.
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
