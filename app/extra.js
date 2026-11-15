/* Contenido ampliado de las unidades.
   Cada línea de datos tiene las 8 lenguas separadas por "|" en este orden: es | en | fr | de | it | pt | ru | ro.
   Se AÑADE al final de cada unidad (los 8 primeros elementos originales y sus audios no cambian de posición).
   addExtra(unidad, "w" | "s", texto): w = palabras, s = frases.
   Convenciones: español neutro (sin regionalismos de España), inglés británico, portugués de Portugal, ruso sin transcripción
   (la app la genera), rumano con ș ț (coma). Lo revisa tests/content.test.js; falta revisión de hablantes nativos. */
(() => {
  const LANGS = ["es", "en", "fr", "de", "it", "pt", "ru", "ro"];
  window.addExtra = (ui, kind, raw) => {
    raw.trim().split("\n").forEach((line, n) => {
      const c = line.split("|").map(x => x.trim());
      if (c.length !== LANGS.length) throw new Error(`extra u${ui}${kind}${n}: ${c.length} columnas (${line.slice(0, 40)})`);
      LANGS.forEach((l, k) => {
        if (l === "es") UNITS[ui][kind].push(c[0]);
        else COURSES[l].t[ui][kind === "w" ? 0 : 1].push(c[k]);
      });
    });
  };
})();
