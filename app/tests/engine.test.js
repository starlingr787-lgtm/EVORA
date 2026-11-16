/* Pruebas del motor de juego (sin navegador): node app/tests/engine.test.js */
const vm = require("vm"), fs = require("fs"), path = require("path"), assert = require("assert");
const dir = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data", "data2", "data3", "data4", "extra", "data7a", "data7b", "data7c", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data17", "data18", "data19", "data20", "data5", "data6", "data16", "exercises", "engine"]) vm.runInContext(fs.readFileSync(path.join(dir, f + ".js"), "utf8"), ctx);
const { EX, Engine, COURSES, UNITS } = ctx;
let n = 0; const test = (name, fn) => { fn(); n++; console.log("ok  " + name); };
const json = o => JSON.parse(JSON.stringify(o));
const eq = (a, b) => assert.strictEqual(JSON.stringify(a), JSON.stringify(b));

const bankEx = () => { for (;;) { const e = EX.build("en", 1, 1, {}).find(x => x.type === "bank"); if (e && e.answerTokens.length >= 3) return { ...e, id: "t1" }; } };

test("puzzle: estado inicial serializable", () => {
  const ex = bankEx(), st = Engine.puzzleNew(ex);
  eq(json(st), st);
  assert.strictEqual(st.slots.length, ex.answerTokens.length);
  assert(st.slots.every(s => s === null));
});
test("puzzle: TAP coloca en el primer hueco libre y devuelve al banco", () => {
  const ex = bankEx(); let st = Engine.puzzleNew(ex);
  st = Engine.puzzleReduce(st, { type: "TAP", piece: 2, from: -1 });
  assert.strictEqual(st.slots[0], 2); eq(st.last, { slot: 0 });
  st = Engine.puzzleReduce(st, { type: "TAP", piece: 2, from: 0 });
  assert.strictEqual(st.slots[0], null);
  assert(Engine.puzzleBank(st, ex).includes(2));
});
test("puzzle: DROP intercambia piezas entre huecos y no duplica", () => {
  const ex = bankEx(); let st = Engine.puzzleNew(ex);
  st = Engine.puzzleReduce(st, { type: "DROP", piece: 0, from: -1, to: 0 });
  st = Engine.puzzleReduce(st, { type: "DROP", piece: 1, from: -1, to: 1 });
  st = Engine.puzzleReduce(st, { type: "DROP", piece: 0, from: 0, to: 1 }); // swap
  assert.strictEqual(st.slots[0], 1); assert.strictEqual(st.slots[1], 0);
  const placed = st.slots.filter(x => x !== null); assert.strictEqual(new Set(placed).size, placed.length);
});
test("puzzle: el reductor es puro (no muta el estado anterior)", () => {
  const ex = bankEx(), a = Engine.puzzleNew(ex), before = JSON.stringify(a);
  Engine.puzzleReduce(a, { type: "TAP", piece: 0, from: -1 });
  assert.strictEqual(JSON.stringify(a), before);
});
test("puzzle: la frase correcta se valida y la incorrecta marca huecos", () => {
  const ex = bankEx(); let st = Engine.puzzleNew(ex);
  const used = new Set();
  ex.answerTokens.forEach((t, s) => { const i = ex.bank.findIndex((w, j) => w === t && !used.has(j)); used.add(i); st = Engine.puzzleReduce(st, { type: "DROP", piece: i, from: -1, to: s }); });
  let r = Engine.puzzleCheck(st, ex); assert(r.ok && r.complete && r.state.status === "ok"); assert(r.state.marks.every(Boolean));
  eq(json(r.state), r.state);
  // cerrado: ya no admite movimientos
  assert.strictEqual(Engine.puzzleReduce(r.state, { type: "RESET" }), r.state);
  // incorrecta: invertir dos piezas distintas
  let bad = Engine.puzzleReduce(Engine.puzzleNew(ex), { type: "RESET" }); const ids = ex.bank.map((_, i) => i).slice(0, ex.answerTokens.length).reverse();
  ids.forEach((i, s) => { bad = Engine.puzzleReduce(bad, { type: "DROP", piece: i, from: -1, to: s }); });
  r = Engine.puzzleCheck(bad, ex); assert.strictEqual(r.complete, true);
  assert.strictEqual(Engine.puzzleCheck(Engine.puzzleNew(ex), ex).complete, false);
});
test("validadores: opción múltiple, completar, escribir (con ruso en latino) y tono", () => {
  const mc = EX.build("en", 0, 0, {}).find(e => e.type === "mc");
  assert(Engine.checkMC(mc, mc.options.indexOf(mc.answer)).ok); assert(!Engine.checkMC(mc, mc.options.findIndex(o => o !== mc.answer)).ok);
  const ty = { answer: "Привет" };
  assert(Engine.checkType(ty, "Привет", "ru").ok); assert(Engine.checkType(ty, "privet", "ru").ok); assert(!Engine.checkType(ty, "privet", "en").ok);
  assert.strictEqual(Engine.checkType(ty, "  ", "ru"), null);
  assert(Engine.checkTone({ target: "formal" }, "formal").ok); assert(!Engine.checkTone({ target: "formal" }, "informal").ok);
  const fill = EX.build("de", 2, 2, {}).find(e => e.type === "fill"); assert(Engine.checkFill(fill, fill.options.indexOf(fill.answer)).ok);
});
test("sesión: ids estables, racha, reintentos y serialización", () => {
  const ex = EX.build("fr", 0, 0, {}); let s = Engine.sessionNew({ kind: "level", lang: "fr", ui: 0, li: 0, ex });
  assert(s.q.every(e => typeof e.id === "string")); eq(json(s), s);
  const total = s.q.length;
  let r = Engine.sessionRecord(s, { ok: true }); assert.strictEqual(r.session.combo, 1); assert.strictEqual(r.session.correct, 1); assert.strictEqual(r.effects.heartLoss, false);
  s = Engine.sessionAdvance(r.session);
  r = Engine.sessionRecord(s, { ok: false }); assert.strictEqual(r.session.combo, 0); assert.strictEqual(r.effects.heartLoss, true);
  assert.strictEqual(r.session.q.length, total + 1, "un fallo se reintenta al final"); assert.strictEqual(r.effects.retried, true);
  assert.strictEqual(s.wrong, 0, "no muta la sesión anterior");
  eq(json(r.session), r.session);
});
test("sesión: los tipos libres no gastan vidas y la prueba no reintenta", () => {
  for (const kind of ["placement", "daily", "situation", "exam"]) {
    const s = Engine.sessionNew({ kind, lang: "en", ex: EX.build("en", 0, 0, {}) });
    const r = Engine.sessionRecord(s, { ok: false }); assert.strictEqual(r.effects.heartLoss, false, kind);
    if (kind === "placement" || kind === "exam") assert.strictEqual(r.effects.retried, false, kind);
  }
});
test("sesión: se reintenta como máximo 2 veces el mismo ejercicio", () => {
  let s = Engine.sessionNew({ kind: "level", lang: "en", ex: EX.build("en", 0, 0, {}).slice(0, 1) }), tries = 0;
  while (!Engine.sessionDone(s)) { const r = Engine.sessionRecord(s, { ok: false }); s = Engine.sessionAdvance(r.session); tries++; if (tries > 10) break; }
  assert.strictEqual(tries, 3);
});
test("reglas: estrellas, XP y resultado de la prueba de sesión", () => {
  const mk = wrong => ({ correct: 20 - wrong, wrong, q: new Array(20).fill(0), missUnits: { 3: 2, 5: 1 } });
  assert.strictEqual(Engine.summary(mk(0)).stars, 3); assert.strictEqual(Engine.summary({ correct: 8, wrong: 2 }).stars, 2); assert.strictEqual(Engine.summary({ correct: 5, wrong: 5 }).stars, 1);
  assert(Engine.examResult(mk(4)).ok); assert(!Engine.examResult(mk(5)).ok);
  assert.strictEqual(Engine.examResult(mk(5)).need, 16); eq(Engine.examResult(mk(5)).weakUnits, [3, 5]);
  assert.strictEqual(Engine.placementLevel({ wrong: 2 }), "A2"); assert.strictEqual(Engine.placementLevel({ wrong: 3 }), "A1");
});
test("escena: el ánimo se limita a 0-100 y hay caras por tramo", () => {
  assert.strictEqual(Engine.moodStep(95, 30), 100); assert.strictEqual(Engine.moodStep(10, -30), 0);
  eq([20, 40, 70, 90].map(Engine.moodFace), ["angry", "annoyed", "neutral", "happy"]);
  assert(Engine.sceneWon(80, 80)); assert(!Engine.sceneWon(79, 80));
});
test("SRS: una tarjeta nueva está disponible de inmediato y crece con cada acierto", () => {
  const now = 1000000;
  let c = Engine.srsNew("k1", { es: "Hola", t: "Hi" }, now);
  eq(json(c), c); assert(Engine.srsDue(c, now));
  c = Engine.srsGrade(c, true, now); assert.strictEqual(c.interval, 1); assert.strictEqual(c.due, now + Engine.DAY_MS);
  assert(!Engine.srsDue(c, now + Engine.DAY_MS - 1)); assert(Engine.srsDue(c, now + Engine.DAY_MS));
  c = Engine.srsGrade(c, true, now + Engine.DAY_MS); assert.strictEqual(c.interval, 3);
  const prevEase = c.ease;
  c = Engine.srsGrade(c, true, now + 4 * Engine.DAY_MS); assert(c.interval > 3, "el intervalo sigue creciendo"); assert(c.ease >= prevEase);
});
test("SRS: un fallo reinicia la racha, baja la facilidad y vuelve a ponerla para hoy", () => {
  const now = 1000000;
  let c = Engine.srsNew("k2", {}, now);
  c = Engine.srsGrade(c, true, now); c = Engine.srsGrade(c, true, now + Engine.DAY_MS); // reps=2, interval=3
  const big = Engine.srsGrade(c, true, now + 4 * Engine.DAY_MS);
  const fail = Engine.srsGrade(big, false, now + 100 * Engine.DAY_MS);
  assert.strictEqual(fail.reps, 0); assert.strictEqual(fail.lapses, 1); assert(fail.ease < big.ease); assert(Engine.srsDue(fail, now + 100 * Engine.DAY_MS));
});
test("SRS: el reductor es puro y no muta la tarjeta anterior", () => {
  const now = 5; const c = Engine.srsNew("k3", {}, now), before = JSON.stringify(c);
  Engine.srsGrade(c, true, now); assert.strictEqual(JSON.stringify(c), before);
});
test("SRS: las tarjetas pendientes salen ordenadas por las más atrasadas y respetan el límite", () => {
  const now = 1000;
  const cards = [{ key: "a", due: now - 5 }, { key: "b", due: now - 50 }, { key: "c", due: now + 10 }, { key: "d", due: now }];
  const due = Engine.srsDueCards(cards, now);
  assert.deepStrictEqual(due.map(c => c.key), ["b", "a", "d"]);
  assert.strictEqual(Engine.srsDueCards(cards, now, 1).length, 1);
  assert.strictEqual(Engine.srsNextDue(cards), now - 50);
  assert.strictEqual(Engine.srsNextDue([]), null);
});

test("instantánea para multijugador: JSON mínimo sin la cola de ejercicios", () => {
  const s = Engine.sessionNew({ kind: "level", lang: "en", ex: EX.build("en", 0, 0, {}) }), snap = Engine.snapshot(s);
  eq(json(snap), snap); assert(!("q" in snap)); assert(JSON.stringify(snap).length < 200);
});
test("contenido: 50 unidades (34 palabras y 21 frases) en los 8 idiomas, alineadas con el español", () => {
  assert.strictEqual(UNITS.length, 50);
  UNITS.forEach((u, i) => { assert.strictEqual(u.w.length, 34, "es w" + i); assert.strictEqual(u.s.length, 21, "es s" + i); });
  for (const l in COURSES) { assert.strictEqual(COURSES[l].t.length, 50, l); COURSES[l].t.forEach((t, u) => { assert.strictEqual(t[0].length, UNITS[u].w.length, l + " w" + u); assert.strictEqual(t[1].length, UNITS[u].s.length, l + " s" + u); }); }
});
test("niveles: ninguna lección supera el tope de preguntas aunque la unidad tenga mucho contenido", () => {
  for (const ui of [0, 15, 29, 30, 49]) for (let li = 0; li < 5; li++) { const n = EX.build("de", ui, li, { listen: li === 3 }).length; assert(n >= 8 && n <= 26, `unidad ${ui} nivel ${li}: ${n} ejercicios`); }
});

console.log(`\n${n} pruebas correctas`);
