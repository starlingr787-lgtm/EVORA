/* Motor de juego de Lingo: lógica pura, SIN acceso al DOM, al audio ni a localStorage.
   Todo el estado es JSON simple (números, textos, listas y objetos), así que se puede guardar,
   enviar por red o sincronizar con WebSockets (p. ej. un futuro modo multijugador) sin reescribir nada.

   Piezas del motor:
   - Puzzle:  estado del rompecabezas de una frase + reductor puro puzzleReduce(estado, acción).
   - Sesión:  cola de ejercicios, aciertos, fallos, racha y reintentos (sessionNew / sessionRecord).
   - Reglas:  puntuación, estrellas, XP y aprobado de la prueba de sesión.
   - Escena:  medidor de ánimo de las escenas de situación.
   Depende solo de EX (exercises.js) para normalizar textos. */
(() => {
  const VERSION = 1;
  const RULES = { examN: 20, examPass: 0.8, retryMax: 2, moodMin: 0, moodMax: 100 };
  const FREE_KINDS = ["placement", "daily", "situation", "exam", "dict"]; // no gastan vidas ni guardan errores
  const NO_RETRY_KINDS = ["placement", "exam"];

  /* ============================== Puzzle ============================== */
  /* Estado: { v, exId, n, slots:[idPieza|null], status:"open"|"ok"|"bad", marks:[bool]|null, last:{slot}|null }
     Las piezas se identifican por su índice en ex.bank; su texto sale del ejercicio (que es estático). */
  function puzzleNew(ex) {
    return { v: VERSION, exId: ex.id ?? null, n: ex.answerTokens.length, slots: Array(ex.answerTokens.length).fill(null), status: "open", marks: null, last: null };
  }

  /* Acciones:
       { type:"TAP",  piece, from }      from = hueco de origen o -1 si viene del banco
       { type:"DROP", piece, from, to }  to = hueco destino o null para devolver al banco
       { type:"RESET" } */
  function puzzleReduce(st, a) {
    if (st.status !== "open") return st;
    const slots = st.slots.slice();
    let last = null;
    if (a.type === "TAP") {
      if (a.from >= 0) slots[a.from] = null;
      else { const e = slots.indexOf(null); if (e >= 0) { slots[e] = a.piece; last = { slot: e }; } }
    } else if (a.type === "DROP") {
      if (a.to == null) { if (a.from >= 0) slots[a.from] = null; }
      else {
        const occupant = slots[a.to];
        if (a.from >= 0) slots[a.from] = occupant;
        slots[a.to] = a.piece; last = { slot: a.to };
      }
    } else if (a.type === "RESET") slots.fill(null);
    return { ...st, slots, last };
  }

  const puzzleBank = (st, ex) => ex.bank.map((_, i) => i).filter(i => !st.slots.includes(i));
  const puzzleFull = st => st.slots.every(x => x !== null);

  /* Valida la frase montada. Devuelve el estado con marks por hueco y el veredicto. */
  function puzzleCheck(st, ex) {
    if (!puzzleFull(st)) return { state: st, ok: false, complete: false };
    const marks = st.slots.map((pi, s) => EX.norm(EX.core(ex.bank[pi])) === EX.norm(EX.core(ex.answerTokens[s])));
    const ok = EX.norm(st.slots.map(i => ex.bank[i]).join(" ")) === EX.norm(ex.answerText);
    return { state: { ...st, status: ok ? "ok" : "bad", marks }, ok, complete: true };
  }

  /* ========================= Validadores sueltos ========================= */
  const checkMC = (ex, idx) => ({ ok: ex.options[idx] === ex.answer });
  const checkFill = (ex, idx) => ({ ok: EX.norm(ex.options[idx]) === EX.norm(ex.answer) });
  const checkTone = (ex, tone) => ({ ok: tone === ex.target });
  function checkType(ex, text, lang) {
    const v = EX.norm(text); if (!v) return null;
    const acc = [EX.norm(ex.answer)]; if (lang === "ru") acc.push(EX.norm(EX.translit(ex.answer)));
    return { ok: acc.includes(v) };
  }

  /* ============================== Sesión ============================== */
  /* Estado: { v, kind, lang, ui, li, cidx, q:[ejercicio], i, correct, wrong, combo, retries:{id:n}, missUnits:{ui:n}, locked }
     Cada ejercicio recibe un id estable ("e0", "e1"...) para poder referirse a él desde la red. */
  function sessionNew(cfg) {
    const q = cfg.ex.map((e, n) => ({ ...e, id: e.id ?? "e" + n }));
    return { v: VERSION, kind: cfg.kind, lang: cfg.lang, ui: cfg.ui ?? null, li: cfg.li ?? null, cidx: cfg.cidx ?? null,
      q, i: 0, correct: 0, wrong: 0, combo: 0, retries: {}, missUnits: {}, locked: false };
  }
  const isFree = kind => FREE_KINDS.includes(kind);
  const current = s => s.q[s.i];

  /* Registra una respuesta. Devuelve una sesión nueva y los efectos que la UI debe aplicar. */
  function sessionRecord(s, { ok, noRetry = false }) {
    const ex = current(s), next = { ...s, q: s.q, retries: { ...s.retries }, missUnits: { ...s.missUnits } };
    let retried = false;
    next.combo = ok ? s.combo + 1 : 0;
    if (ok) next.correct = s.correct + 1;
    else {
      next.wrong = s.wrong + 1;
      if (ex.ui != null) next.missUnits[ex.ui] = (next.missUnits[ex.ui] || 0) + 1;
      const n = next.retries[ex.id] || 0;
      if (!noRetry && !NO_RETRY_KINDS.includes(s.kind) && n < RULES.retryMax) { next.retries[ex.id] = n + 1; next.q = s.q.concat([ex]); retried = true; }
    }
    return { session: next, effects: { heartLoss: !ok && !isFree(s.kind), retried, combo: next.combo } };
  }

  const sessionAdvance = s => ({ ...s, i: s.i + 1 });
  const sessionDone = s => s.i >= s.q.length;
  const progress = s => s.q.length ? s.i / s.q.length : 0;

  /* Instantánea mínima para sincronizar (multijugador): sin la cola completa de ejercicios. */
  const snapshot = s => ({ v: s.v, kind: s.kind, lang: s.lang, i: s.i, total: s.q.length, correct: s.correct, wrong: s.wrong, combo: s.combo });

  /* ============================== Reglas ============================== */
  function summary(s) {
    const total = s.correct + s.wrong;
    return {
      stars: s.wrong === 0 ? 3 : s.wrong <= 2 ? 2 : 1,
      accuracy: Math.round(s.correct / Math.max(1, total) * 100),
      xp: s.correct * 2 + 10 + (s.wrong === 0 ? 5 : 0)
    };
  }
  function examResult(s) {
    const total = s.q.length;
    // Se calcula con los aciertos necesarios: 1 - 0.8 en coma flotante da 0.1999..., y exigiría un acierto de más.
    const need = Math.ceil(total * RULES.examPass - 1e-9), allowed = total - need, ok = s.wrong <= allowed;
    return { ok, total, allowed, need, accuracy: Math.round(s.correct / total * 100),
      stars: s.wrong <= 1 ? 3 : s.wrong <= 2 ? 2 : 1, xp: 50 + s.correct * 2,
      weakUnits: Object.entries(s.missUnits).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([u]) => +u) };
  }
  const placementLevel = s => (s.wrong <= 2 ? "A2" : "A1");

  /* ============================== Repaso espaciado (SRS) ============================== */
  /* Algoritmo SM-2 simplificado. Tarjeta: { key, ease, interval (días), due (fecha epoch ms), reps, lapses, ...extra }
     `extra` es contenido de la app (es/t/k) que el motor no interpreta, solo transporta. */
  const DAY_MS = 86400000;
  const SRS_EASE_START = 2.5, SRS_EASE_MIN = 1.3, SRS_EASE_UP = 0.1, SRS_EASE_DOWN = 0.2;
  function srsNew(key, extra, now) {
    return { key, ease: SRS_EASE_START, interval: 0, due: now, reps: 0, lapses: 0, ...extra };
  }
  function srsGrade(card, ok, now) {
    if (ok) {
      const reps = card.reps + 1, ease = Math.min(3, card.ease + SRS_EASE_UP);
      const interval = reps === 1 ? 1 : reps === 2 ? 3 : Math.round(card.interval * ease);
      return { ...card, reps, ease, interval, due: now + interval * DAY_MS };
    }
    return { ...card, reps: 0, lapses: card.lapses + 1, ease: Math.max(SRS_EASE_MIN, card.ease - SRS_EASE_DOWN), interval: 1, due: now };
  }
  const srsDue = (card, now) => card.due <= now;
  const srsDueCards = (cards, now, limit = Infinity) =>
    cards.filter(c => srsDue(c, now)).sort((a, b) => a.due - b.due).slice(0, limit);
  const srsNextDue = cards => cards.length ? Math.min(...cards.map(c => c.due)) : null;

  /* ============================== Escena ============================== */
  const moodClamp = m => Math.max(RULES.moodMin, Math.min(RULES.moodMax, m));
  const moodStep = (mood, delta) => moodClamp(mood + delta);
  const moodFace = m => (m < 35 ? "angry" : m < 60 ? "annoyed" : m < 80 ? "neutral" : "happy");
  const sceneWon = (mood, goal) => mood >= goal;

  window.Engine = { VERSION, RULES, puzzleNew, puzzleReduce, puzzleBank, puzzleFull, puzzleCheck,
    checkMC, checkFill, checkTone, checkType, sessionNew, isFree, current, sessionRecord, sessionAdvance, sessionDone, progress, snapshot,
    summary, examResult, placementLevel, moodStep, moodFace, sceneWon,
    DAY_MS, srsNew, srsGrade, srsDue, srsDueCards, srsNextDue };
})();
