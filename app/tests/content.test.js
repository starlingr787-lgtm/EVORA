/* Control de calidad del contenido (sin navegador): node app/tests/content.test.js
   Detecta errores mecánicos que no deben volver a aparecer. La revisión de gramática y naturalidad sigue siendo humana. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data", "data2", "data3", "data4", "extra", "data7a", "data7b", "data7c", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data17", "data18", "data19", "data20", "data5", "data6", "data16", "data21", "data22", "data23", "data24", "data25", "data26"]) vm.runInContext(fs.readFileSync(path.join(dir, f + ".js"), "utf8"), ctx);
const { UNITS, COURSES, LIVE, SCENES, DICT_CATS, LEARN } = ctx;

const errors = [];
const bad = (where, msg, text) => errors.push(`${where}: ${msg}${text ? "  «" + text + "»" : ""}`);

/* Todos los textos con su origen: { lang, where, text, es (original en español si existe), kind } */
const items = [];
UNITS.forEach((u, i) => {
  u.w.forEach((x, j) => items.push({ lang: "es", where: `u${i}.w${j}`, text: x, kind: "w" }));
  u.s.forEach((x, j) => items.push({ lang: "es", where: `u${i}.s${j}`, text: x, kind: "s" }));
  items.push({ lang: "es", where: `u${i}.ctx`, text: u.ctx, kind: "s" }, { lang: "es", where: `u${i}.title`, text: u.title, kind: "w" });
  for (const l in COURSES) {
    COURSES[l].t[i][0].forEach((x, j) => items.push({ lang: l, where: `${l} u${i}.w${j}`, text: x, es: u.w[j], kind: "w" }));
    COURSES[l].t[i][1].forEach((x, j) => items.push({ lang: l, where: `${l} u${i}.s${j}`, text: x, es: u.s[j], kind: "s" }));
  }
});
LIVE.forEach(p => {
  p.es.forEach((x, k) => items.push({ lang: "es", where: `live${p.id}`, text: x, kind: "s" }));
  p.sit.forEach(x => items.push({ lang: "es", where: `live${p.id}.sit`, text: x, kind: "s" }));
  for (const l in p.t) p.t[l].forEach((x, k) => items.push({ lang: l, where: `${l} live${p.id}.${k}`, text: x, es: p.es[k], kind: "s" }));
});
SCENES.forEach(s => {
  items.push({ lang: "es", where: "scene.intro", text: s.intro, kind: "s" });
  s.turns.forEach((t, ti) => {
    items.push({ lang: "es", where: `scene${ti}`, text: t.es, kind: "s" });
    t.opts.forEach(o => { items.push({ lang: "es", where: `scene${ti}.opt`, text: o.es, kind: "s" }, { lang: "es", where: `scene${ti}.why`, text: o.why, kind: "s" }); });
    for (const l in s.t) {
      items.push({ lang: l, where: `${l} scene${ti}.say`, text: s.t[l][ti][0], es: t.es, kind: "s" });
      t.opts.forEach((o, j) => items.push({ lang: l, where: `${l} scene${ti}.o${j}`, text: s.t[l][ti][j + 1], es: o.es, kind: "s" }));
    }
  });
});
DICT_CATS.forEach(c => {
  c.w.forEach((x, i) => items.push({ lang: "es", where: `dict.${c.id}.w${i}`, text: x, kind: "w" }));
  items.push({ lang: "es", where: `dict.${c.id}.name`, text: c.name, kind: "w" });
  for (const l in c.t) c.t[l].forEach((x, i) => items.push({ lang: l, where: `${l} dict.${c.id}.w${i}`, text: x, es: c.w[i], kind: "w" }));
});

const EMOJI = /[\u{1F000}-\u{1FAFF}☀-➿️]/u;
const LATIN = /[A-Za-z]/, CYR = /[Ѐ-ӿ]/;
for (const it of items) {
  const { text, lang, where, es, kind } = it;
  if (/^\s|\s$/.test(text)) bad(where, "espacio al principio o al final", text);
  if (/\s{2,}/.test(text)) bad(where, "espacios dobles", text);
  if (/ /.test(text)) bad(where, "espacio no separable", text);
  if (EMOJI.test(text)) bad(where, "contiene emoji", text);
  if (/[ŞşŢţ]/.test(text)) bad(where, "diacrítico rumano con cedilla (debe ser ș ț con coma)", text);
  if (lang === "ru" && LATIN.test(text)) bad(where, "letras latinas dentro de texto ruso", text);
  if (lang !== "ru" && CYR.test(text)) bad(where, "letras cirílicas dentro de texto no ruso", text);
  if (kind === "s") {
    if (!/[.?!]$/.test(text)) bad(where, "la frase no termina en . ? !", text);
    if (!/^[¿¡]?[\p{Lu}\d]/u.test(text)) bad(where, "la frase no empieza con mayúscula", text);
    if (/\.\.\./.test(text) || /…/.test(text)) bad(where, "puntos suspensivos (usa coma o punto)", text);
    if (lang === "es") {
      const open = (text.match(/¿/g) || []).length, close = (text.match(/\?/g) || []).length;
      if (open !== close) bad(where, "¿ y ? descuadrados", text);
      if ((text.match(/¡/g) || []).length !== (text.match(/!/g) || []).length) bad(where, "¡ y ! descuadrados", text);
    } else if (es) {
      if (/\?$/.test(es) !== /\?$/.test(text)) bad(where, "pregunta/afirmación no coincide con el español", `${es}  =>  ${text}`);
      if (/!$/.test(es) !== /!$/.test(text)) bad(where, "exclamación no coincide con el español", `${es}  =>  ${text}`);
    }
    if (lang === "fr") {
      if (/[^\s ][?!:;]/.test(text.replace(/https?:\/\/\S+/g, ""))) bad(where, "francés: falta espacio antes de ? ! : ;", text);
      if (/\s[.,]/.test(text)) bad(where, "francés: espacio antes de . o ,", text);
    } else if (/\s[?!:;.,]/.test(text)) bad(where, "espacio antes de un signo de puntuación", text);
  }
  if (lang === "es" && /\b(vosotros|vosotras|coger|cogí|ordenador|móvil|piso|billete|camarero|enfad\w+|recto|vale)\b/i.test(text)) bad(where, "palabra propia de España (usa español neutro)", text);
}

/* Estructura */
if (UNITS.length !== 50) bad("data", `se esperaban 50 unidades y hay ${UNITS.length}`);
for (const l in COURSES) COURSES[l].t.forEach((t, u) => {
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  [["palabras", t[0]], ["frases", t[1]]].forEach(([n, arr]) => { const seen = new Set(); arr.forEach(x => { if (seen.has(norm(x)) && !(l === "pt" && u === 3)) bad(`${l} u${u}`, `${n} repetidas dentro de la unidad`, x); seen.add(norm(x)); }); });
});
SCENES.forEach(s => s.turns.forEach(t => t.opts.forEach(o => { if (!(o.d >= -30 && o.d <= 35)) bad("scene", "puntos de ánimo fuera de rango", o.es); })));
/* Curso de español para angloparlantes: textos de partida en inglés */
for (const l in LEARN) {
  const L = LEARN[l];
  if (L.titles.length !== 50 || L.ctx.length !== 50) bad("learn", "se esperaban 50 títulos y 50 contextos");
  [...L.titles, ...L.ctx, ...Object.values(L.dictNames)].forEach(x => { if (/[áéíóúñ¿¡]/i.test(x)) bad("learn." + l, "texto en español dentro del texto de partida en inglés", x); if (/\s{2,}|^\s|\s$/.test(x)) bad("learn." + l, "espacios", x); });
  DICT_CATS.forEach(c => { if (!L.dictNames[c.id]) bad("learn." + l, "falta el nombre del diccionario", c.id); });
}
if (DICT_CATS.length !== 20) bad("dict", `se esperaban 20 categorías y hay ${DICT_CATS.length}`);
DICT_CATS.forEach(c => {
  const norm = s => s.toLowerCase(); // conserva los acentos: hay pares reales como avô / avó
  if (c.w.length !== 60) bad(`dict.${c.id}`, `se esperaban 60 palabras y hay ${c.w.length}`);
  const seenEs = new Set(); c.w.forEach(x => { if (seenEs.has(norm(x))) bad(`dict.${c.id}`, "palabra repetida en español", x); seenEs.add(norm(x)); });
  for (const l in c.t) {
    if (c.t[l].length !== c.w.length) bad(`${l} dict.${c.id}`, `${c.t[l].length} traducciones para ${c.w.length} palabras`);
    const seen = new Set(); c.t[l].forEach(x => { if (seen.has(norm(x))) bad(`${l} dict.${c.id}`, "palabra repetida", x); seen.add(norm(x)); });
  }
});

(ctx.FIXES_MISSING || []).forEach(l => bad("data22", "corrección sin su texto original", l));

/* Ejemplos en contexto (data23): una frase por palabra, completa en los 8 idiomas */
Object.keys(ctx.EXAMPLES || {}).forEach(l => Object.keys(ctx.EXAMPLES[l]).forEach(u => {
  const n = ctx.UNITS[+u].w.length;
  if (ctx.EXAMPLES[l][u].length !== n) bad("data23", `unidad ${u} (${l}): ${ctx.EXAMPLES[l][u].length} ejemplos para ${n} palabras`, "");
  ctx.EXAMPLES[l][u].forEach((t, i) => { if (!t || !t.trim()) bad("data23", `unidad ${u} (${l}) palabra ${i}: ejemplo vacío`, ""); });
}));
if (errors.length) { console.log(errors.join("\n")); console.log(`\n${errors.length} problemas de contenido`); process.exit(1); }
console.log(`Contenido correcto (${items.length} textos revisados)`);
