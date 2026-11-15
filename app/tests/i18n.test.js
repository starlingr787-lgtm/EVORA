/* Cobertura de la interfaz en inglés (sin navegador): node app/tests/i18n.test.js
   Comprueba que cada texto fijo de la app (extraído de app.js, exercises.js y engine.js) tiene traducción,
   salvo los que no son texto de interfaz. Los textos con huecos se prueban rellenándolos con valores de ejemplo. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..");
let ts;
try { ts = require("typescript"); } catch (e) { try { ts = require(path.join(require("child_process").execSync("npm root -g").toString().trim(), "typescript")); } catch (e2) { console.log("Se omite: no hay analizador (npm i -g typescript)"); process.exit(0); } }

/* Cargar el módulo en un entorno mínimo */
const doc = { body: null, addEventListener() {}, title: "" };
const ctx = { window: null, document: doc, MutationObserver: class { observe() {} takeRecords() { return []; } }, NodeFilter: {} };
ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "i18n.js"), "utf8"), ctx);
const { I18N } = ctx;

const NO_UI = /^([#.][\w\-.#:\[\]="\s>]*|V[AH0-9 ]*|translate.*|flipOut.*|speechSynthesis|viewBox|NFD|TAP|DROP|RESET|Enter|BUTTON|INPUT|pz c|pz empty|btn prem|Lingo|Piper|XP|CC BY 4\.0|Premium|· Premium|Cambridge English|Milton|English|scaleX.*)$/;
const missing = [];
const seen = new Set();
const check = (t, f) => {
  t = t.replace(/&middot;/g, "·").replace(/&nbsp;/g, " ").replace(/&infin;/g, "∞").replace(/&euro;/g, "€").replace(/\s+/g, " ").trim();
  if (t.length < 2 || !/\p{L}{2}/u.test(t.replace(/\{\d+\}/g, ""))) return;
  const bare = t.replace(/\{\d+\}/g, "").trim();
  if (/[{};]|=>|\bfunction\b/.test(bare)) return;
  if (!/\s/.test(bare) && /^[a-z0-9\-.#:\[\]=\/%()+*>~,@_?]+$/.test(bare) && !/[áéíóúñ]/.test(bare)) return; // identificadores, clases, selectores
  if (NO_UI.test(bare) || seen.has(t)) return; seen.add(t);
  // un valor de ejemplo que cualquier plantilla acepta; se prueba con y sin huecos en los extremos (que suelen ser iconos)
  const variants = [t, t.replace(/^(\{\d+\}\s*)+|(\s*\{\d+\})+$/g, "").trim()].filter(Boolean);
  const ok = variants.some(v => { const sample = v.replace(/\{\d+\}/g, "alemán"); return I18N.tr(sample) !== sample; });
  if (!ok) missing.push(`${f}: ${t}`);
};
for (const f of ["app.js", "exercises.js", "engine.js"]) {
  const sf = ts.createSourceFile(f, fs.readFileSync(path.join(dir, f), "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  (function walk(n) {
    if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) for (const p of n.text.split(/<[^>]*>/g)) check(p, f);
    else if (ts.isTemplateExpression(n)) { let s = n.head.text; n.templateSpans.forEach((sp, i) => { s += `{${i}}` + sp.literal.text; }); for (const p of s.split(/<[^>]*>/g)) check(p, f); }
    ts.forEachChild(n, walk);
  })(sf);
}
/* Textos explicativos de las situaciones (están en data3.js) */
const dctx = {}; dctx.window = dctx; vm.createContext(dctx);
for (const f of ["data", "data2", "data3"]) vm.runInContext(fs.readFileSync(path.join(dir, f + ".js"), "utf8"), dctx);
const sit = [];
dctx.LIVE.forEach(p => sit.push(p.idea, ...p.sit));
dctx.SCENES.forEach(sc => { sit.push(sc.title, sc.intro, ...(sc.who === "Ana" ? [] : [sc.who])); sc.turns.forEach(t => t.opts.forEach(o => sit.push(o.why))); });
Object.values(dctx.TONES).forEach(t => sit.push(t.use));
sit.forEach(t => { seen.add(t); if (I18N.tr(t) === t && t !== "Formal" && t !== "Informal") missing.push("data3.js: " + t); });
if (missing.length) { console.log(missing.join("\n")); console.log(`\n${missing.length} textos de interfaz sin traducción al inglés`); process.exit(1); }
console.log(`Interfaz en inglés completa (${seen.size} textos fijos revisados, ${I18N.size} entradas)`);
