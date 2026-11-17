/* Motor de ejercicios. Cada nivel se genera a partir del contenido de SU unidad,
   así las frases siempre tienen sentido dentro de la situación de la unidad. */
(() => {
  const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
  const pick = (a, n) => shuffle(a).slice(0, n);

  const norm = t => String(t).toLowerCase().replace(/ß/g, "ss").normalize("NFD")
    .replace(/[̀-ͯ]/g, "").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();

  const RU = { а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya" };
  const translit = s => [...String(s).toLowerCase()].map(c => RU[c] ?? c).join("");

  const tokens = s => s.split(/\s+/).filter(t => /[\p{L}\p{N}]/u.test(t));
  const core = t => t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");

  /* Idioma base: el de las preguntas (campo es de cada elemento). El idioma a aprender es lang. */
  let NATIVE = "es";
  const setNative = n => { NATIVE = n; };
  function unit(lang, ui) {
    const u = UNITS[ui], t = COURSES[lang].t[ui], e = COURSES[NATIVE].t[ui];
    return {
      ...u, title: unitTitle(NATIVE, ui), ctx: unitCtx(NATIVE, ui),
      words: t[0].map((x, i) => ({ es: e[0][i], t: x, k: "w" })),
      sents: t[1].map((x, i) => ({ es: e[1][i], t: x, k: "s" }))
    };
  }
  const lvStart = ui => (CEFR.find(c => ui >= c.from && ui < c.to) || CEFR[0]).from;
  const prevWords = (lang, ui) => {
    let from = lvStart(ui);
    if (from === ui && ui > 0) from = Math.max(0, ui - 3);
    let out = [];
    for (let i = from; i < ui; i++) out = out.concat(unit(lang, i).words);
    return out;
  };

  /* Alternativas que no repiten texto con la respuesta */
  function others(pool, item, field, n) {
    const seen = new Set([norm(item[field])]);
    const out = [];
    for (const x of shuffle(pool)) {
      const k = norm(x[field]);
      if (!seen.has(k)) { seen.add(k); out.push(x); if (out.length === n) break; }
    }
    return out;
  }

  /* Opción múltiple: siempre ves el texto en el idioma que aprendes y eliges el significado entre opciones en tu idioma base
     (el parámetro dir se mantiene por compatibilidad, pero ya no se ofrece la opción inversa con opciones en el idioma aprendido). */
  const mc = (item, pool, dirIgnored) => {
    const dir = "rev", fwd = false;
    const f = fwd ? "t" : "es";
    return {
      type: "mc", item, dir,
      prompt: fwd ? item.es : item.t, promptTarget: !fwd,
      title: fwd ? "Elige la traducción" : "¿Qué significa?",
      options: shuffle([item[f], ...others(pool, item, f, 3).map(x => x[f])]),
      optTarget: fwd, answer: item[f]
    };
  };

  const bank = (item, pool, dir, audio, maxExtra) => {
    const fwd = dir === "fwd";
    const f = fwd ? "t" : "es";
    const ans = tokens(item[f]);
    const ansN = new Set(ans.map(x => norm(core(x))));
    const extra = [];
    for (const x of shuffle(pool)) {
      if (x === item) continue;
      for (const tk of shuffle(tokens(x[f]))) {
        const k = norm(core(tk));
        if (!ansN.has(k) && !extra.some(e => norm(core(e)) === k)) { extra.push(tk); break; }
      }
      if (extra.length >= (maxExtra ?? (ans.length > 3 ? 3 : 2))) break;
    }
    return {
      type: "bank", item, dir, audio: audio ? item.t : null,
      title: audio ? "Escribe lo que oyes" : (fwd ? "Traduce esta frase" : "Traduce al " + COURSES[NATIVE].name.toLowerCase()),
      prompt: audio ? null : (fwd ? item.es : item.t), promptTarget: !fwd && !audio,
      answerText: item[f], answerTokens: ans, bank: shuffle([...ans, ...extra]), bankTarget: fwd
    };
  };

  const type = (item, audio) => ({
    type: "type", item, audio: audio ? item.t : null,
    title: audio ? "Escribe lo que oyes" : "Escribe la traducción",
    prompt: audio ? null : item.es, answer: item.t
  });

  const fill = (item, pool) => {
    const tk = tokens(item.t);
    let bi = 0, best = -1;
    tk.forEach((x, i) => { const L = norm(core(x)).length; if (L > best) { best = L; bi = i; } });
    const ans = core(tk[bi]);
    const cands = [];
    for (const x of shuffle(pool)) {
      for (const t2 of tokens(x.t)) {
        const c = core(t2), k = norm(c);
        if (k && k !== norm(ans) && !cands.some(o => norm(o) === k)) cands.push(c);
      }
    }
    cands.sort((a, b) => Math.abs(a.length - ans.length) - Math.abs(b.length - ans.length));
    return {
      type: "fill", item, title: "Completa la frase",
      before: tk.slice(0, bi).join(" "), after: tk.slice(bi + 1).join(" "),
      lead: tk[bi].match(/^[^\p{L}\p{N}]*/u)[0], trail: tk[bi].match(/[^\p{L}\p{N}]*$/u)[0],
      hint: item.es, options: shuffle([ans, ...cands.slice(0, 3)]), answer: ans,
      full: item.t
    };
  };

  const match = items => ({
    type: "match", title: "Une cada pareja", pairs: items.map(x => ({ es: x.es, t: x.t })), items
  });

  const listenMC = (item, pool) => ({
    ...mc(item, pool, "rev"), title: "Escucha y elige el significado", audio: item.t, prompt: null
  });

  /* ---------- Construcción de niveles ---------- */
  const LEVELS = [
    { name: "Palabras nuevas", icon: "book", desc: "Vocabulario de la unidad y tus primeras frases en rompecabezas" },
    { name: "Frases útiles", icon: "chat", desc: "Frases de la situación, paso a paso" },
    { name: "Práctica", icon: "pen", desc: "Completa, escribe y relaciona" },
    { name: "Escucha y combina", icon: "speaker", desc: "Oído y escritura (audio con Premium)" },
    { name: "Prueba de la unidad", icon: "trophy", desc: "Demuestra todo lo aprendido" }
  ];

  /* Tope de preguntas por lección: las unidades pueden tener decenas de elementos, pero cada nivel sigue siendo corto.
     La pantalla de introducción muestra TODO el contenido; cada intento sortea elementos distintos. */
  const MAX_Q_WORDS = 10, MAX_Q_SENTS = 8, MAX_Q_BANK = 6, MAX_Q_FILL = 6;
  function build(lang, ui, li, opts) {
    const U = unit(lang, ui), W = U.words, S = U.sents, all = [...W, ...S];
    const prev = prevWords(lang, ui);
    const review = n => prev.length ? pick(prev, n).map(w => mc(w, prev.length > 8 ? prev : W.concat(prev), "fwd")) : [];
    const sw = shuffle(W), ss = shuffle(S);
    let ex = [];
    /* Principiante (A1): rompecabezas más fáciles. Frases cortas (cada nivel admite un poco más),
       solo 1 pieza sobrante (0 en el primer nivel) y más frases «al revés» (idioma que aprendes -> el tuyo), que son más fáciles. */
    const A1 = lvStart(ui) === 0, MAXTOK = [4, 5, 6, 6, 7][li] || 7;
    const short = n => { const ok = S.filter(x => tokens(x.t).length <= n && tokens(x.es).length <= n + 1); return ok.length >= 6 ? ok : S; };
    const SP = A1 ? short(MAXTOK) : S;               // frases para rompecabezas
    const XTRA = A1 ? (li === 0 ? 0 : 1) : undefined; // piezas sobrantes
    const bk = (it, dir, audio) => bank(it, S, dir, audio, XTRA);
    if (li === 0) {
      sw.slice(0, MAX_Q_WORDS).forEach((w, i) => ex.push(mc(w, W, i % 2 ? "rev" : "fwd")));
      const demo = pick(SP, 2); // dos frases de ejemplo: ya desde el primer nivel hay rompecabezas
      const mcs = shuffle(ex.filter(e => e.type === "mc"));
      ex = [...mcs.slice(0, 4), bk(demo[0], "rev"), ...mcs.slice(4), bk(demo[1], "fwd"), match(sw.slice(0, 4)), match(sw.slice(4, 8))];
      ex.sample = demo;
    } else if (li === 1) {
      ex = [
        ...ss.slice(0, MAX_Q_SENTS).map(s => mc(s, S, "rev")),
        ...(A1 ? [...pick(SP, 3).map(s => bk(s, "rev")), ...pick(SP, 4).map(s => bk(s, "fwd"))]
               : [...shuffle(S).slice(0, MAX_Q_BANK).map(s => bank(s, S, "fwd")), ...pick(S, 2).map(s => bank(s, S, "rev"))])
      ];
    } else if (li === 2) {
      ex = [
        ...shuffle([
          ...pick(S, MAX_Q_FILL).map(s => fill(s, S)),
          ...pick(W, 4).map(w => type(w)),
          ...pick(SP, 2).map(s => bk(s, "rev")),
          ...review(2)
        ]),
        match(pick(W, 5))
      ];
    } else if (li === 3) {
      if (opts.listen) {
        ex = shuffle([
          ...pick(W, 3).map(w => listenMC(w, W)),
          ...pick(W, 3).map(w => type(w, true)),
          ...pick(SP, 3).map(s => bk(s, "fwd", true)),
          ...pick(SP, 2).map(s => bk(s, "fwd")),
          fill(pick(S, 1)[0], S)
        ]);
      } else {
        ex = shuffle([
          ...pick(SP, 4).map(s => bk(s, "fwd")),
          ...pick(W, 4).map(w => type(w)),
          ...pick(S, 2).map(s => mc(s, S, "fwd")),
          ...pick(S, 2).map(s => fill(s, S))
        ]);
      }
    } else {
      ex = [
        ...shuffle([
          ...pick(W, 4).map(w => type(w)),
          ...pick(SP, 4).map(s => bk(s, "fwd")),
          ...pick(SP, 2).map(s => bk(s, "rev")),
          ...pick(S, 2).map(s => fill(s, S)),
          mc(pick(W, 1)[0], W, "rev"),
          ...review(1)
        ]),
        match(pick(W, 5))
      ];
    }
    return ex;
  }

  /* Repaso de errores (Premium) */
  function reviewSet(lang, items) {
    const pool = [];
    for (let i = 0; i < UNITS.length; i++) { const u = unit(lang, i); pool.push(...u.words, ...u.sents); }
    const words = pool.filter(x => x.k === "w"), sents = pool.filter(x => x.k === "s");
    const ex = [];
    for (const it of items.slice(0, 10)) {
      if (it.k === "w") ex.push(Math.random() < .5 ? mc(it, words, "fwd") : type(it));
      else ex.push(Math.random() < .5 ? bank(it, sents, "fwd") : mc(it, sents, "rev"));
    }
    return shuffle(ex);
  }


  /* Prueba de sesión: n preguntas repartidas entre las unidades abiertas, todas de un solo intento */
  function exam(lang, units, n = 20) {
    const kinds = ["wmc", "sbank", "wtype", "sfill", "wmcf", "smc"], ex = [];
    for (let i = 0; i < n; i++) {
      const ui = units[i % units.length], u = unit(lang, ui), k = kinds[(i + Math.floor(i / units.length)) % kinds.length];
      const w = pick(u.words, 1)[0], sn = pick(u.sents, 1)[0];
      const e = k === "wmc" ? mc(w, u.words, "rev") : k === "sbank" ? bank(sn, u.sents, "fwd") : k === "wtype" ? type(w)
        : k === "sfill" ? fill(sn, u.sents) : k === "wmcf" ? mc(w, u.words, "fwd") : mc(sn, u.sents, "rev");
      e.ui = ui; ex.push(e);
    }
    return shuffle(ex);
  }

  /* Prueba de nivel: mezcla de unidades finales del nivel Principiante */
  function placement(lang) {
    const ex = [];
    const pickUnit = (a, b) => unit(lang, a + Math.floor(Math.random() * (b - a + 1)));
    for (let i = 0; i < 3; i++) { const u = pickUnit(3, 9); ex.push(mc(pick(u.words, 1)[0], u.words, "rev")); }
    for (let i = 0; i < 2; i++) { const u = pickUnit(4, 9); ex.push(type(pick(u.words, 1)[0])); }
    for (let i = 0; i < 3; i++) { const u = pickUnit(5, 9); ex.push(bank(pick(u.sents, 1)[0], u.sents, "fwd")); }
    return ex;
  }

  /* Práctica de las palabras del día */
  function practiceWords(lang, words, pool) {
    const ex = [];
    shuffle(words).forEach((w, i) => ex.push(i % 3 === 0 ? mc(w, pool, "fwd") : i % 3 === 1 ? mc(w, pool, "rev") : type(w)));
    if (words.length >= 4) ex.push(match(pick(words, Math.min(5, words.length))));
    return ex;
  }

  /* Clave de audio de cada texto (para las locuciones grabadas) */
  const CLIPIDX = {};
  function clipKey(lang, text) {
    if (!CLIPIDX[lang]) {
      const m = CLIPIDX[lang] = {};
      COURSES[lang].t.forEach((t, u) => { t[0].forEach((x, i) => { m[x] = m[x] || `${u}w${i}`; }); t[1].forEach((x, i) => { m[x] = m[x] || `${u}s${i}`; }); });
      if (window.extraClips) extraClips(lang).forEach(([k, x]) => { m[x] = m[x] || k; });
    }
    return CLIPIDX[lang][text];
  }

  /* ---------- Situaciones ---------- */
  const hasSituation = (ui, lang) => lang !== NATIVE && (window.LIVE || []).some(p => p.unit === ui);
  /* Frase de una situación en un idioma: el español está en p.es / turns, el resto en p.t / s.t */
  const liveTxt = (p, l, k) => (l === "es" ? p.es[k] : p.t[l][k]);
  const sceneTxt = (s, l, ti, j) => (l === "es" ? (j === 0 ? s.turns[ti].es : s.turns[ti].opts[j - 1].es) : s.t[l][ti][j]);
  function liveSet(lang, ui) {
    const all = [];
    LIVE.filter(p => p.unit === ui).forEach(p => [0, 1].forEach(k => all.push({
      type: "tone", title: "Rompecabezas vivo", idea: p.idea, situation: p.sit[k],
      target: k === 0 ? "formal" : "informal", start: k === 0 ? "informal" : "formal",
      variants: { formal: { t: liveTxt(p, lang, 0), es: liveTxt(p, NATIVE, 0) }, informal: { t: liveTxt(p, lang, 1), es: liveTxt(p, NATIVE, 1) } }
    })));
    return pick(all, 4);
  }
  function sceneEx(lang, ui) {
    const s = SCENES.find(x => x.unit === ui);
    return {
      type: "scene", title: s.title, who: s.who, hue: s.hue, start: s.start, goal: s.goal, intro: s.intro,
      turns: s.turns.map((tu, i) => ({
        say: { es: sceneTxt(s, NATIVE, i, 0), t: sceneTxt(s, lang, i, 0) },
        opts: tu.opts.map((o, j) => ({ tone: o.tone, d: o.d, es: sceneTxt(s, NATIVE, i, j + 1), t: sceneTxt(s, lang, i, j + 1), why: o.why }))
      }))
    };
  }
  /* Escucha y une: 3 rondas de parejas con audio (palabras, frases cortas y mezcla). Sustituye al antiguo «Rompecabezas vivo». */
  function listenRounds(lang, ui) {
    const U = unit(lang, ui), uniq = items => { const a = new Set(), b = new Set(); return items.filter(x => { const k1 = norm(x.es), k2 = norm(x.t); if (a.has(k1) || b.has(k2)) return false; a.add(k1); b.add(k2); return true; }); };
    const words = uniq(shuffle(U.words.filter(w => tokens(w.t).length <= 2))), sents = uniq(shuffle(U.sents.filter(x => tokens(x.t).length <= 6)));
    const round = (items, title) => ({ ...match(uniq(items)), title, listen: true });
    return [round(words.slice(0, 4), "Escucha y une las palabras"), round(sents.slice(0, 4), "Escucha y une las frases"), round([...words.slice(4, 7), ...sents.slice(4, 6)], "Última ronda")];
  }
  const situation = (lang, ui) => [...listenRounds(lang, ui), ...(SCENES.some(x => x.unit === ui) ? [sceneEx(lang, ui)] : [])];

  /* ---------- Diccionario ---------- */
  const dictItems = (lang, catId) => dictWords(lang, DICT_CATS.find(x => x.id === catId));
  /* Palabras del diccionario en idioma base e idioma a aprender (el español está en c.w, el resto en c.t). */
  const dictOf = (l, c) => (l === "es" ? c.w : c.t[l]);
  const dictWords = (lang, c) => { const src = dictOf(NATIVE, c), tgt = dictOf(lang, c); return tgt.map((x, i) => ({ es: src[i], t: x, k: "w" })); };
  const dictAll = lang => DICT_CATS.flatMap(c => dictWords(lang, c));
  const dictSearch = (lang, q) => {
    const n = norm(q);
    return dictAll(lang).filter(x => norm(x.t).includes(n) || norm(x.es).includes(n));
  };

  /* Texto de la lengua destino con transcripción para el ruso */
  const tgt = (text, lang, small = true) => {
    const e = String(text).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    return lang === "ru" && small ? `${e}<small class="tr">${translit(text)}</small>` : e;
  };

  window.EX = { setNative, exam, situation, hasSituation, hasScene: ui => (window.SCENES || []).some(x => x.unit === ui), build, reviewSet, placement, practiceWords, dictItems, dictAll, dictSearch, clipKey, unit, LEVELS, norm, translit, tgt, shuffle, tokens, core, lvStart };
})();
