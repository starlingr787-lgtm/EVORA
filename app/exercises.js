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

  function unit(lang, ui) {
    const u = UNITS[ui], t = COURSES[lang].t[ui];
    return {
      ...u,
      words: u.w.map((es, i) => ({ es, t: t[0][i], k: "w" })),
      sents: u.s.map((es, i) => ({ es, t: t[1][i], k: "s" }))
    };
  }
  const prevWords = (lang, ui) => {
    let out = [];
    for (let i = 0; i < ui; i++) out = out.concat(unit(lang, i).words);
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

  const mc = (item, pool, dir) => {
    const fwd = dir === "fwd"; // fwd: ves español, eliges idioma destino
    const f = fwd ? "t" : "es";
    return {
      type: "mc", item, dir,
      prompt: fwd ? item.es : item.t, promptTarget: !fwd,
      title: fwd ? "Elige la traducción" : "¿Qué significa?",
      options: shuffle([item[f], ...others(pool, item, f, 3).map(x => x[f])]),
      optTarget: fwd, answer: item[f]
    };
  };

  const bank = (item, pool, dir, audio) => {
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
      if (extra.length >= (ans.length > 3 ? 3 : 2)) break;
    }
    return {
      type: "bank", item, dir, audio: audio ? item.t : null,
      title: audio ? "Escribe lo que oyes" : (fwd ? "Traduce esta frase" : "Traduce al español"),
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
    { name: "Palabras nuevas", icon: "book", desc: "Aprende el vocabulario de la unidad" },
    { name: "Frases útiles", icon: "chat", desc: "Frases de la situación, paso a paso" },
    { name: "Práctica", icon: "pen", desc: "Completa, escribe y relaciona" },
    { name: "Escucha y combina", icon: "speaker", desc: "Oído y escritura (audio con Premium)" },
    { name: "Prueba de la unidad", icon: "trophy", desc: "Demuestra todo lo aprendido" }
  ];

  function build(lang, ui, li, opts) {
    const U = unit(lang, ui), W = U.words, S = U.sents, all = [...W, ...S];
    const prev = prevWords(lang, ui);
    const review = n => prev.length ? pick(prev, n).map(w => mc(w, prev.length > 8 ? prev : W.concat(prev), "fwd")) : [];
    const sw = shuffle(W), ss = shuffle(S);
    let ex = [];
    if (li === 0) {
      sw.forEach((w, i) => ex.push(mc(w, W, i % 2 ? "rev" : "fwd")));
      ex.push(match(sw.slice(0, 4)), match(sw.slice(4, 8)));
      ex = [...shuffle(ex.filter(e => e.type === "mc")), ...ex.filter(e => e.type === "match")];
    } else if (li === 1) {
      ex = [
        ...ss.map(s => mc(s, S, "rev")),
        ...shuffle(S).map(s => bank(s, S, "fwd")),
        ...pick(S, 2).map(s => bank(s, S, "rev"))
      ];
    } else if (li === 2) {
      ex = [
        ...shuffle([
          ...S.map(s => fill(s, S)),
          ...pick(W, 4).map(w => type(w)),
          ...pick(S, 2).map(s => bank(s, S, "rev")),
          ...review(2)
        ]),
        match(pick(W, 5))
      ];
    } else if (li === 3) {
      if (opts.listen) {
        ex = shuffle([
          ...pick(W, 3).map(w => listenMC(w, W)),
          ...pick(W, 3).map(w => type(w, true)),
          ...pick(S, 3).map(s => bank(s, S, "fwd", true)),
          ...pick(S, 2).map(s => bank(s, S, "fwd")),
          fill(pick(S, 1)[0], S)
        ]);
      } else {
        ex = shuffle([
          ...pick(S, 4).map(s => bank(s, S, "fwd")),
          ...pick(W, 4).map(w => type(w)),
          ...pick(S, 2).map(s => mc(s, S, "fwd")),
          ...pick(S, 2).map(s => fill(s, S))
        ]);
      }
    } else {
      ex = [
        ...shuffle([
          ...pick(W, 4).map(w => type(w)),
          ...pick(S, 4).map(s => bank(s, S, "fwd")),
          ...pick(S, 2).map(s => bank(s, S, "rev")),
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

  /* Texto de la lengua destino con transcripción para el ruso */
  const tgt = (text, lang, small = true) => {
    const e = String(text).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    return lang === "ru" && small ? `${e}<small class="tr">${translit(text)}</small>` : e;
  };

  window.EX = { build, reviewSet, unit, LEVELS, norm, translit, tgt, shuffle, tokens, core };
})();
