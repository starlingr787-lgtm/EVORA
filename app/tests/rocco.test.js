/* Rocco: node app/tests/rocco.test.js
   Comprueba que todos los gestos se dibujan y que cada evento tiene frases en español e inglés. */
const vm = require("vm"), fs = require("fs"), path = require("path"), assert = require("assert");
const ctx = { uiLang: () => "es" }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "rocco.js"), "utf8"), ctx);
const { MASCOT_MOODS, MASCOT_REACTIONS, MASCOT_ACTIVITIES, ROCCO_SAY, rocco, roccoSay } = ctx;
let n = 0; const test = (name, fn) => { fn(); n++; console.log("ok  " + name); };
test("los 30 gestos se dibujan como SVG completo", () => { assert.strictEqual(MASCOT_MOODS.length, 30); for (const m of MASCOT_MOODS) { const s = rocco(m, 100); assert(s.startsWith("<svg") && s.endsWith("</svg>"), m); assert(s.includes("m-" + m)); } });
test("un gesto desconocido cae en happy", () => assert(rocco("nope", 50).includes("m-happy")));
test("reacciones y actividades solo usan gestos que existen", () => { for (const m of [...MASCOT_REACTIONS, ...MASCOT_ACTIVITIES]) assert(MASCOT_MOODS.includes(m), m); });
test("cada actividad tiene frases propias", () => { for (const a of MASCOT_ACTIVITIES) assert(ROCCO_SAY.es[a] && ROCCO_SAY.en[a], a); });
test("español e inglés tienen los mismos eventos y no hay frases vacías", () => {
  assert.deepStrictEqual(Object.keys(ROCCO_SAY.es).sort(), Object.keys(ROCCO_SAY.en).sort());
  for (const l of ["es", "en"]) for (const [ev, list] of Object.entries(ROCCO_SAY[l])) { assert(list.length >= 2, l + ev); list.forEach(t => assert(t.trim().length > 3, l + ev)); }
});
test("roccoSay no repite la misma frase dos veces seguidas", () => { let prev = ""; for (let i = 0; i < 40; i++) { const t = roccoSay("correct"); assert.notStrictEqual(t, prev); prev = t; } });
test("Rocco no regaña: ninguna frase culpa ni presiona", () => {
  const bad = /\b(vago|perezos|deber[ií]as haber|no has|llevas d[ií]as|you should have|lazy|haven't)\b/i;
  for (const l of ["es", "en"]) for (const list of Object.values(ROCCO_SAY[l])) list.forEach(t => assert(!bad.test(t), t));
});
console.log(`\n${n} pruebas correctas`);
