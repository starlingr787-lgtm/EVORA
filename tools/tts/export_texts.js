/* Exporta todos los textos que necesitan audio: tools/tts/.work/texts.json  ->  { idioma: { clave: texto } }
   Las claves son las mismas que usa la app (exercises.js, clipKey): "<unidad>w<n>" palabras, "<unidad>s<n>" frases
   y las de extraClips() en data3.js. Un texto repetido comparte la clave de su primera aparición.
   Uso: node tools/tts/export_texts.js */
const vm = require("vm"), fs = require("fs"), path = require("path");
const app = path.join(__dirname, "..", "..", "app"), work = path.join(__dirname, ".work");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data", "data2", "data3", "data4", "data5", "data6"]) vm.runInContext(fs.readFileSync(path.join(app, f + ".js"), "utf8"), ctx);
const out = {};
for (const lang in ctx.COURSES) {
  const seen = {}, keys = {};
  const add = (k, x) => { if (!(x in seen)) { seen[x] = k; keys[k] = x; } };
  ctx.COURSES[lang].t.forEach((t, u) => { t[0].forEach((x, i) => add(`${u}w${i}`, x)); t[1].forEach((x, i) => add(`${u}s${i}`, x)); });
  ctx.extraClips(lang).forEach(([k, x]) => add(k, x));
  out[lang] = keys;
}
fs.mkdirSync(work, { recursive: true });
fs.writeFileSync(path.join(work, "texts.json"), JSON.stringify(out));
console.log(Object.fromEntries(Object.entries(out).map(([l, k]) => [l, Object.keys(k).length])));
