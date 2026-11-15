/* Exporta todos los textos que necesitan audio: tools/tts/.work/texts.json  ->  { idioma: { clave: texto } }
   Las claves son las mismas que usa la app (exercises.js, clipKey): "<unidad>w<n>" palabras, "<unidad>s<n>" frases
   y las de extraClips() en data3.js. Un texto repetido comparte la clave de su primera aparición.
   Uso: node tools/tts/export_texts.js */
const vm = require("vm"), fs = require("fs"), path = require("path");
const app = path.join(__dirname, "..", "..", "app"), work = path.join(__dirname, ".work");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data", "data2", "data3", "data4", "extra", "data7a", "data7b", "data7c", "data8", "data9", "data10", "data11", "data5", "data6"]) vm.runInContext(fs.readFileSync(path.join(app, f + ".js"), "utf8"), ctx);
const out = {};
for (const lang in ctx.COURSES) {
  const seen = {}, keys = {};
  const add = (k, x) => { if (!(x in seen)) { seen[x] = k; keys[k] = x; } };
  ctx.COURSES[lang].t.forEach((t, u) => { t[0].forEach((x, i) => add(`${u}w${i}`, x)); t[1].forEach((x, i) => add(`${u}s${i}`, x)); });
  ctx.extraClips(lang).forEach(([k, x]) => add(k, x));
  out[lang] = keys;
}
/* Paquete de palabras: cada palabra distinta (en minúsculas, sin signos) de todas las frases de cada idioma.
   Clave "w:<palabra>". La app lo usa al tocar una pieza del rompecabezas. */
const core = t => t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
const toks = s => s.split(/\s+/).map(x => core(x).toLowerCase()).filter(x => /[\p{L}\p{N}]/u.test(x));
const words = {};
for (const lang in ctx.COURSES) {
  const set = new Set(), add = s => toks(s).forEach(x => set.add(x));
  ctx.COURSES[lang].t.forEach(t => t[1].forEach(add));
  ctx.LIVE.forEach(p => (lang === "es" ? p.es : p.t[lang]).forEach(add));
  ctx.SCENES.forEach(sc => {
    if (lang === "es") sc.turns.forEach(tu => { add(tu.es); tu.opts.forEach(o => add(o.es)); });
    else sc.t[lang].forEach(tn => tn.forEach(add));
  });
  words[lang] = Object.fromEntries([...set].sort().map(w => ["w:" + w, w]));
}
fs.mkdirSync(work, { recursive: true });
fs.writeFileSync(path.join(work, "texts-w.json"), JSON.stringify(words));
console.log("palabras:", Object.fromEntries(Object.entries(words).map(([l, k]) => [l, Object.keys(k).length])));
fs.writeFileSync(path.join(work, "texts.json"), JSON.stringify(out));
console.log(Object.fromEntries(Object.entries(out).map(([l, k]) => [l, Object.keys(k).length])));
