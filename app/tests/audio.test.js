/* Comprueba los paquetes de audio repartidos (app/audio): node app/tests/audio.test.js
   Cada clip del índice apunta a un trozo que existe y cabe dentro del archivo; no hay trozos sin usar. */
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..", "audio");
let bad = 0, clips = 0, files = 0;
const fail = m => { bad++; console.log(m); };
for (const f of fs.readdirSync(dir).filter(x => /^[a-z]{2}(-w)?\.json$/.test(x))) {
  const name = f.replace(/\.json$/, ""), idx = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")), used = new Set(), end = {};
  for (const [k, v] of Object.entries(idx)) {
    if (!Array.isArray(v) || v.length !== 3) { fail(`${name}.${k}: entrada mal formada`); continue; }
    const [o, l, p] = v, file = path.join(dir, `${name}-s${p}.mp3`); used.add(p); clips++;
    if (!fs.existsSync(file)) { fail(`${name}-s${p}.mp3: no existe (clip ${k})`); continue; }
    if (!(l > 0)) fail(`${name}.${k}: largo vacío`);
    end[p] = Math.max(end[p] || 0, o + l);
  }
  for (const p of used) { const file = path.join(dir, `${name}-s${p}.mp3`); if (fs.existsSync(file)) { files++; if (fs.statSync(file).size !== end[p]) fail(`${name}-s${p}.mp3: mide ${fs.statSync(file).size} y los clips llegan a ${end[p]}`); } }
  for (const x of fs.readdirSync(dir)) { const m = x.match(new RegExp(`^${name}-s(\\d)\\.mp3$`)); if (m && !used.has(+m[1])) fail(`${x}: trozo sin ningún clip`); }
}
if (bad) { console.log(`\n${bad} problemas en el audio`); process.exit(1); }
console.log(`Audio correcto (${clips} clips en ${files} trozos)`);
