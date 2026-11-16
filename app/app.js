(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const KEY = "lingo-state-v3";
  const AUDIO_V = "20261116a"; // súbela cuando regeneres los audios (rompe la caché del navegador)
  const today = () => new Date().toISOString().slice(0, 10);
  const LV = EX.LEVELS, NL = LV.length;
  const canSpeak = "speechSynthesis" in window;

  /* ---------- Estado ---------- */
  let S = load();
  function load() {
    const d = { plan: "standard", lang: null, xp: 0, streak: 0, lastDay: null, hearts: 5, heartsDay: today(), progress: {}, srs: {}, cefr: {}, daily: {}, dictDay: null, dictUsed: 0, tab: "learn", native: "es", ui: null, skin: "standard", rocco: true, pick: false, vtab: "today", mute: false, unlocked: {}, exams: {} };
    try {
      const old = JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("lingo-state-v2")) || {};
      Object.assign(d, old);
    } catch (e) {}
    if (d.heartsDay !== today()) { d.hearts = 5; d.heartsDay = today(); }
    if (!COURSES[d.native]) d.native = "es";
    if (d.lang === d.native) d.lang = null;
    return d;
  }
  /* Idioma base (preguntas) e idioma de la interfaz: español si el base es español; si no, inglés (o el que se elija en el perfil). */
  const applyLangs = () => { EX.setNative(S.native); window.__uiLang = S.ui || (S.native === "es" ? "es" : "en"); };
  applyLangs();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const prem = () => S.plan === "premium";
  const unitOpen = ui => prem() || (ui - EX.lvStart(ui)) < PLANS.standard.units;
  const stars = (ui, li, lang = S.lang) => (S.progress[lang] || {})[ui + "-" + li] || 0;
  const doneCount = (lang, range) => Object.keys(S.progress[lang] || {}).filter(k => { const [u, l] = k.split("-").map(Number); return l < NL && (!range || (u >= range.from && u < range.to)); }).length;
  const cefrOf = lang => CEFR.find(c => c.id === S.cefr[lang]) || null;
  let levelPickFor = null;
  const EXAM_N = Engine.RULES.examN, EXAM_PASS = Engine.RULES.examPass;
  const cefrIdx = id => CEFR.findIndex(c => c.id === id);
  const unlockedIdx = lang => Math.max(S.unlocked[lang] ?? -1, cefrIdx(S.cefr[lang]));
  const wordsSeen = lang => Object.keys(S.progress[lang] || {}).filter(k => k.endsWith("-0")).length * 8;
  const sessionsDone = lang => Object.values(S.exams[lang] || {}).filter(v => v > 0).length;
  const examUnits = idx => { const out = []; for (let ui = CEFR[idx].from; ui < CEFR[idx].to; ui++) if (unitOpen(ui)) out.push(ui); return out; };
  function sessionStats(lang, idx) {
    const units = examUnits(idx); let tests = 0, sum = 0;
    units.forEach(ui => { if (stars(ui, NL - 1, lang) > 0) tests++; for (let li = 0; li < NL; li++) sum += stars(ui, li, lang); });
    return { open: units.length, tests, mastery: Math.round(sum / Math.max(1, units.length * NL * 3) * 100) };
  }

  const app = $("#app"), modal = $("#modal"), playerEl = $("#player");

  /* ---------- Sonido y efectos ("jugo") ---------- */
  const sfx = (() => {
    let ctx;
    const get = () => {
      if (S.mute) return null;
      if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
      if (ctx && ctx.state === "suspended") ctx.resume();
      return ctx;
    };
    const tone = (f, t0, dur, type = "sine", vol = .12) => {
      const c = get(); if (!c) return;
      const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + t0;
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + .03);
    };
    const sc = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.5];
    return {
      pop: i => tone(sc[i % sc.length], 0, .16, "triangle", .14),
      back: () => tone(330, 0, .09, "sine", .08),
      swap: () => { tone(440, 0, .07, "square", .045); tone(660, .05, .09, "square", .045); },
      ok: () => { tone(659.25, 0, .12, "triangle", .12); tone(880, .08, .18, "triangle", .12); },
      win: () => [0, 2, 4, 5, 7].forEach((k, n) => tone(sc[k], n * .08, .24, "triangle", .13)),
      bad: () => { tone(196, 0, .16, "sawtooth", .06); tone(155, .1, .22, "sawtooth", .06); }
    };
  })();
  const vibrate = p => { try { if (!S.mute && navigator.vibrate) navigator.vibrate(p); } catch (e) {} };
  function fxLayer() {
    let l = $("#fx");
    if (!l) { l = document.createElement("div"); l.id = "fx"; document.body.appendChild(l); }
    return l;
  }
  function fxBurst(x, y, n = 10, colors, spread = 70) {
    const cols = colors || ["#ffb703", "#ff6b4a", "#0f9d94", "#7a5af8", "#3e7bfa", "#e5447a"], layer = fxLayer();
    for (let k = 0; k < n; k++) {
      const b = document.createElement("i"), ang = Math.random() * Math.PI * 2, dist = spread * (.45 + Math.random() * .8);
      b.className = Math.random() < .5 ? "sq" : "ci";
      b.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(ang) * dist}px;--dy:${Math.sin(ang) * dist - 24}px;--r:${Math.floor(Math.random() * 540)}deg;background:${cols[k % cols.length]}`;
      layer.appendChild(b); setTimeout(() => b.remove(), 950);
    }
  }
  function fxToast(text) {
    const t = document.createElement("div"); t.className = "fx-toast"; t.innerHTML = text;
    fxLayer().appendChild(t); setTimeout(() => t.remove(), 1500);
  }

  /* ---------- Audio: locuciones grabadas + voz del navegador de respaldo ---------- */
  const PACK = {};
  let curAudio = null;
  function loadPack(lang) {
    if (!PACK[lang]) PACK[lang] = (async () => {
      const [idx, buf] = await Promise.all([
        fetch(`audio/${lang}.json?v=${AUDIO_V}`).then(r => r.ok ? r.json() : Promise.reject()),
        fetch(`audio/${lang}.mp3?v=${AUDIO_V}`).then(r => r.ok ? r.arrayBuffer() : Promise.reject())
      ]);
      return { idx, buf, urls: {} };
    })().catch(() => null);
    return PACK[lang];
  }
  /* Palabras sueltas: al tocar una pieza se pronuncia su palabra. Paquete audio/<idioma>-w.* (se carga la primera vez que hace falta).
     Plan Premium: voz natural pregrabada. Sin clip, o plan Estándar: voz del navegador, sin avisos que interrumpan el juego. */
  const WPACK = {};
  function loadWordPack(lang) {
    if (!WPACK[lang]) WPACK[lang] = (async () => {
      const [idx, buf] = await Promise.all([
        fetch(`audio/${lang}-w.json?v=${AUDIO_V}`).then(r => r.ok ? r.json() : Promise.reject()),
        fetch(`audio/${lang}-w.mp3?v=${AUDIO_V}`).then(r => r.ok ? r.arrayBuffer() : Promise.reject())
      ]);
      return { idx, buf, urls: {} };
    })().catch(() => null);
    return WPACK[lang];
  }
  let voices = [];
  if (canSpeak) { const lv = () => { voices = speechSynthesis.getVoices(); }; lv(); speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", lv); }
  function bestVoice(lang) {
    const code = COURSES[lang].speech.toLowerCase(), base = code.slice(0, 2);
    let best = null, bs = -99;
    for (const v of voices) {
      const vl = v.lang.replace("_", "-").toLowerCase();
      if (!vl.startsWith(base)) continue;
      let sc = vl === code ? 3 : 0;
      if (/natural|neural|online|premium|enhanced|siri|wavenet|multilingual/i.test(v.name)) sc += 6;
      if (/google/i.test(v.name)) sc += 3;
      if (!v.localService) sc += 2;
      if (/espeak|festival|compact/i.test(v.name)) sc -= 6;
      if (sc > bs) { bs = sc; best = v; }
    }
    return best;
  }
  function stopAudio() { if (curAudio) { curAudio.pause(); curAudio = null; } if (canSpeak) speechSynthesis.cancel(); }
  async function speakWord(text, lang) {
    const w = EX.core(text); if (!w || S.mute) return;
    stopAudio();
    if (prem()) {
      const pk = await loadWordPack(lang), key = "w:" + w.toLowerCase();
      if (pk && pk.idx[key]) {
        try {
          let url = pk.urls[key];
          if (!url) { const [o, l] = pk.idx[key]; url = pk.urls[key] = URL.createObjectURL(new Blob([pk.buf.slice(o, o + l)], { type: "audio/mpeg" })); }
          const a = new Audio(url); curAudio = a; await a.play(); return;
        } catch (e) {}
      }
    }
    if (!canSpeak) return;
    const u = new SpeechSynthesisUtterance(w), v = bestVoice(lang);
    u.lang = COURSES[lang].speech; if (v) u.voice = v; u.rate = .9;
    speechSynthesis.speak(u);
  }
  async function speak(text, lang, rate = 1) {
    if (!prem()) return openPlans("El audio con voz natural es una función Premium.");
    stopAudio();
    const key = EX.clipKey(lang, text), pk = key ? await loadPack(lang) : null;
    if (pk && pk.idx[key]) {
      try {
        let url = pk.urls[key];
        if (!url) { const [o, l] = pk.idx[key]; url = pk.urls[key] = URL.createObjectURL(new Blob([pk.buf.slice(o, o + l)], { type: "audio/mpeg" })); }
        const a = new Audio(url); a.playbackRate = rate; a.preservesPitch = true;
        curAudio = a; await a.play(); return;
      } catch (e) {}
    }
    if (!canSpeak) return;
    const u = new SpeechSynthesisUtterance(text), v = bestVoice(lang);
    u.lang = COURSES[lang].speech; if (v) u.voice = v;
    u.rate = rate * .95;
    speechSynthesis.speak(u);
  }

  /* ---------- Cabecera y navegación ---------- */
  function renderTop() {
    const C = S.lang && COURSES[S.lang];
    $("#top").innerHTML = `
      <div class="brand">${mascot("happy", 34)}<span>Rocco</span></div>
      ${C ? `<button class="course-chip" id="chipCourse">${langBadge(S.lang, "sm")}<span>${C.name}</span></button>` : "<span></span>"}
      <div class="stats">
        <span class="st flame" title="Racha de días">${ic("flame", "solid")}${S.streak}</span>
        <span class="st star" title="Puntos de experiencia">${ic("star", "solid")}${S.xp}</span>
        <span class="st heart" title="Vidas">${ic("heart", "solid")}${prem() ? "&infin;" : S.hearts}</span>
      </div>`;
    const chip = $("#chipCourse");
    if (chip) chip.onclick = () => { S.pick = true; save(); render(); };
    $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === S.tab && !S.pick && !levelPickFor));
  }
  $("#tabs").innerHTML = [
    ["learn", "book", "Aprender"], ["vocab", "list", "Vocabulario"], ["review", "cycle", "Repaso"], ["profile", "user", "Perfil"], ["plans", "crown", "Planes"]
  ].map(([k, i, n]) => `<button data-tab="${k}">${ic(i)}<span>${n}</span></button>`).join("");
  $$("#tabs button").forEach(b => b.onclick = () => {
    if (b.dataset.tab === "plans") return openPlans();
    S.tab = b.dataset.tab; S.pick = false; levelPickFor = null; save(); render(); window.scrollTo(0, 0);
  });

  /* Tocar al mapache: reacciona unos segundos y vuelve a su gesto. */
  document.addEventListener("click", e => {
    const m = e.target.closest && e.target.closest("svg.mascot"); if (!m || m.closest("button") || m._busy) return;
    const cur = (m.getAttribute("class").match(/m-(\w+)/) || [])[1] || "happy", px = m.getAttribute("width");
    const pool = MASCOT_MOODS.filter(x => x !== cur && x !== "sad"), pick = pool[Math.floor(Math.random() * pool.length)];
    const tmp = document.createElement("div"); tmp.innerHTML = mascot(pick, px); const n = tmp.firstElementChild; n._busy = true;
    m.replaceWith(n); sfx.pop && sfx.pop(2);
    setTimeout(() => { if (n.isConnected) { const t2 = document.createElement("div"); t2.innerHTML = mascot(cur, px); n.replaceWith(t2.firstElementChild); } }, 2200);
  });

  /* ---------- Rocco en el mapa ----------
     Aparece unos segundos de vez en cuando, hace algo al azar (comer chocolate, lavarse las patas, tomar café...) y a veces comenta.
     No aparece en las lecciones, no insiste y se desactiva en Perfil. */
  let palT = null, palFirst = true;
  function palStop() { clearTimeout(palT); const e = $("#roccoPal"); if (e) { clearTimeout(e._t); e.remove(); } }
  function palShow(mood, line, ms = 8000) {
    let el = $("#roccoPal");
    if (!el) { el = document.createElement("div"); el.id = "roccoPal"; document.body.appendChild(el); }
    el.className = "in"; el.innerHTML = mascot(mood, 84) + (line ? `<div class="rb-bubble">${esc(line)}</div>` : "");
    clearTimeout(el._t); el._t = setTimeout(() => { el.className = "out"; setTimeout(() => { if (el.className === "out") el.remove(); }, 450); }, ms);
  }
  function palGreeting() {
    let away = 0; try { away = S.lastDay ? Math.floor((Date.now() - new Date(S.lastDay).getTime()) / 86400000) : 0; } catch (e) {}
    const h = new Date().getHours();
    return away >= 3 ? "back" : h < 5 ? "greetNight" : h < 12 ? "greetMorning" : h < 19 ? "greetAfternoon" : h < 23 ? "greetEvening" : "greetNight";
  }
  function palLoop(first) {
    clearTimeout(palT);
    if (S.rocco === false || S.tab !== "learn" || !S.lang || P) return;
    palT = setTimeout(() => {
      if (document.hidden || P || !modal.hidden) return palLoop(false);
      if (first) { const ev = palGreeting(); palShow(ev === "back" ? "love" : "wink", roccoSay(ev), 7000); palFirst = false; }
      else { const act = MASCOT_ACTIVITIES[Math.floor(Math.random() * MASCOT_ACTIVITIES.length)]; palShow(act, Math.random() < .6 ? roccoSay(act) : "", 8000); }
      palLoop(false);
    }, first ? 3500 : 45000 + Math.random() * 30000);
  }
  function render() { palStop(); render0(); if (S.tab === "learn" && S.lang && !S.pick && !levelPickFor) palLoop(palFirst); }

  function render0() {
    applySkin();
    renderTop();
    if (!S.lang || S.pick) return viewCourses();
    if (levelPickFor || !cefrOf(S.lang)) { levelPickFor = S.lang; return viewLevelPick(); }
    ({ learn: viewLearn, vocab: viewVocab, review: viewReview, profile: viewProfile }[S.tab] || viewLearn)();
  }

  /* ---------- Cursos y nivel ---------- */
  const LANG_ORDER = ["es", "en", "fr", "de", "it", "pt", "ru", "ro"].filter(k => COURSES[k]);
  function viewCourses() {
    const nat = S.native;
    app.innerHTML = `
      <div class="hero-pick">${mascot("happy", 84)}
        <div><h1>¿Qué idioma quieres aprender?</h1>
        <p class="muted">${prem() ? "Con Premium puedes cambiar de curso cuando quieras." : "Con el plan Estándar eliges 1 curso. Premium desbloquea todos."}</p></div></div>
      <div class="card native-pick"><b>Las preguntas se leen en</b>
        <div class="native-chips" role="group" aria-label="Idioma base">${LANG_ORDER.map(k => `<button class="chip ${k === nat ? "on" : ""}" data-n="${k}" aria-pressed="${k === nat}">${COURSES[k].name}</button>`).join("")}</div>
        <span class="muted small">Elige tu idioma base y el idioma que quieres aprender: cualquier combinación funciona.</span></div>
      <div class="course-grid">${LANG_ORDER.map(k => {
        const locked = !prem() && S.lang && S.lang !== k;
        const same = k === nat;
        const n = doneCount(k), c = cefrOf(k);
        return `<button class="course-card ${S.lang === k ? "cur" : ""} ${locked ? "locked" : ""} ${same ? "same" : ""}" data-k="${k}">
          ${langBadge(k, "lg")}<b>${COURSES[k].name}</b>
          <span class="muted">${same ? "Es tu idioma base" : locked ? "Solo Premium" : c ? c.name + " &middot; " + n + " niveles" : UNITS.length + " unidades"}</span>
          ${locked ? ic("lock", "corner") : ""}</button>`;
      }).join("")}</div>
      ${S.lang ? `<div class="center"><button class="btn ghost" id="cancelPick">Volver al curso</button></div>` : ""}`;
    $$(".native-chips .chip").forEach(b => b.onclick = () => { setNative(b.dataset.n); viewCourses(); });
    $$(".course-card").forEach(b => b.onclick = () => {
      const k = b.dataset.k;
      if (!prem() && S.lang && S.lang !== k) return openPlans("Aprender más de un idioma es una función Premium.");
      /* Elegir el mismo idioma que el base: el base pasa a inglés (o a español si se elige inglés) para poder aprenderlo. */
      if (k === S.native) setNative(k === "en" ? "es" : "en");
      S.lang = k; S.pick = false; S.tab = "learn"; levelPickFor = cefrOf(k) ? null : k; save(); render();
      if (prem()) loadPack(k);
    });
    const c = $("#cancelPick"); if (c) c.onclick = () => { S.pick = false; save(); render(); };
  }
  function setNative(n) {
    S.native = n; if (S.lang === n) S.lang = null;
    S.ui = null; applyLangs(); save();
  }

  function viewLevelPick() {
    const lang = levelPickFor, C = COURSES[lang];
    app.innerHTML = `
      <div class="hero-pick">${mascot("think", 84)}
        <div><h1>¿Cuál es tu nivel de ${C.name.toLowerCase()}?</h1><p class="muted">Recibirás las unidades y los ejercicios de ese nivel. Podrás cambiarlo cuando quieras.</p></div></div>
      <div class="level-list">${CEFR.map(c => `<button class="level-card" data-c="${c.id}">
        <span class="lv-badge">${c.id}</span>
        <span class="grow"><b>${c.name}</b><span class="muted">${c.desc}</span><span class="topics">${c.topics}</span></span>${ic("play")}</button>`).join("")}</div>
      <div class="card row-card"><div class="grow"><b>¿No estás seguro?</b><div class="muted small">Haz una prueba de 8 preguntas y te recomendamos un nivel.</div></div>
        <button class="btn sm" id="placement">${ic("target")} Hacer la prueba</button></div>
      ${!prem() ? `<p class="muted small center">Con el plan Estándar tienes las ${PLANS.standard.units} primeras unidades de cada nivel.</p>` : ""}`;
    $$(".level-card").forEach(b => b.onclick = () => chooseLevel(lang, b.dataset.c));
    $("#placement").onclick = () => startPlayer({ kind: "placement", lang, ex: EX.placement(lang) });
  }
  function chooseLevel(lang, id) {
    S.cefr[lang] = id; S.unlocked[lang] = Math.max(S.unlocked[lang] ?? -1, cefrIdx(id)); levelPickFor = null; S.tab = "learn"; viewLearn.scrolled = false; save(); render(); window.scrollTo(0, 0);
  }

  /* ---------- Mapa de niveles ---------- */
  function nodeState(ui, li) {
    if (li === NL) return stars(ui, li) > 0 ? "done" : "situ";
    if (!unitOpen(ui)) return "prem";
    if (stars(ui, li) > 0) return "done";
    const start = EX.lvStart(ui), idx = (ui - start) * NL + li;
    if (idx === 0) return "current";
    const pu = start + Math.floor((idx - 1) / NL), pl = (idx - 1) % NL;
    return stars(pu, pl) > 0 ? "current" : "locked";
  }

  function viewLearn() {
    const C = COURSES[S.lang], lv = cefrOf(S.lang);
    const total = (lv.to - lv.from) * NL, done = doneCount(S.lang, lv), pct = Math.round(done / total * 100);
    const lvIdx = cefrIdx(lv.id), unl = unlockedIdx(S.lang), st = sessionStats(S.lang, lvIdx);
    let html = `<div class="course-head"><div><span class="muted">Curso de</span><h1>${C.name}</h1></div>
      <div class="ring" style="--p:${pct}"><b>${pct}%</b></div></div>
      <div class="seg" role="tablist" aria-label="Sesión">${CEFR.map((c, i) => `<button role="tab" data-c="${c.id}" data-i="${i}" class="${c.id === lv.id ? "on" : ""} ${i > unl ? "locked" : ""}">${i > unl ? ic("lock") : ""}${c.name}<small>${c.id}</small></button>`).join("")}</div>
      <div class="session-head"><div class="sh-badge">${lv.id}</div>
        <div class="grow"><span class="ulabel muted">Sesión ${lvIdx + 1} de ${CEFR.length}</span><b>${lv.name}</b><span class="muted small">${lv.goal}</span></div>
        <button class="icon-btn" id="howBtn" aria-label="Cómo subes de nivel">${ic("help")}</button></div>
      <div class="mastery"><div class="bar"><i style="width:${st.mastery}%"></i></div><span class="muted small">Dominio de la sesión: <b>${st.mastery} %</b> &middot; Pruebas de unidad: ${st.tests}/${st.open}</span></div>`;
    if (!prem()) html += `<div class="note-card"><div>${ic("crown", "gold")}</div><div><b>Plan Estándar</b><span>Unidades 1 a ${PLANS.standard.units} de cada sesión y ${PLANS.standard.hearts} vidas al día.</span></div><button class="btn sm prem" id="upg">Mejorar</button></div>`;

    for (let ui = lv.from; ui < lv.to; ui++) {
      const U = { ...UNITS[ui], title: unitTitle(S.lang, ui), ctx: unitCtx(S.lang, ui) }, un = ui - lv.from;
      const NN = NL + (EX.hasSituation(ui, S.lang) ? 1 : 0);
      const H = NN * 98 + 10;
      const pts = Array.from({ length: NN }, (_, li) => ({ x: 50 + 25 * Math.sin((un * NL + li) * 1.15 + .4), y: li * 98 + 52 }));
      let d = `M${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) { const m = (pts[i - 1].y + pts[i].y) / 2; d += ` C${pts[i - 1].x} ${m},${pts[i].x} ${m},${pts[i].x} ${pts[i].y}`; }
      const locked = !unitOpen(ui);
      html += `<section class="unit ${locked ? "unit-locked" : ""}" style="--uh:${(ui * 37 + 170) % 360}">
        <div class="ubanner"><div class="utext"><span class="ulabel">Unidad ${un + 1}${locked ? ' &middot; Premium' : ""}</span><h2>${U.title}</h2><p>${U.ctx}</p></div><div class="uic">${ic(U.icon)}</div></div>
        <div class="path" style="height:${H}px">
          <svg viewBox="0 0 100 ${H}" preserveAspectRatio="none"><path d="${d}" vector-effect="non-scaling-stroke"/></svg>
          ${pts.map((p, li) => {
            const st = nodeState(ui, li), s = stars(ui, li);
            const LL = li === NL ? { name: "Situación", icon: "bolt" } : LV[li];
            const icon = st === "locked" || st === "prem" ? "lock" : LL.icon;
            return `<button class="node ${st} ${li === NL - 1 || li === NL ? "big" : ""}" style="left:${p.x}%;top:${p.y}px" data-ui="${ui}" data-li="${li}" aria-label="${LL.name}">
              ${st === "current" ? `<span class="go">Empezar</span>` : st === "situ" ? `<span class="go free">Situación &middot; Gratis</span>` : ""}
              <span class="disc">${ic(icon, st === "done" || st === "current" ? "solid-lite" : "")}</span>
              ${st === "done" ? `<span class="nstars">${[1, 2, 3].map(n => ic("star", "solid " + (n <= s ? "on" : "off"))).join("")}</span>` : ""}
            </button>`;
          }).join("")}
        </div></section>`;
    }
    const next = CEFR[lvIdx + 1], exS = (S.exams[S.lang] || {})[lv.id] || 0, ready = st.tests === st.open && st.open > 0;
    html += `<section class="exam-card ${exS ? "done" : ""}"><div class="se-ic">${ic("trophy")}</div>
      <div class="grow"><b>Prueba de sesión ${lv.id}</b>
        <span class="muted">${next ? `Aprueba con ${EXAM_PASS * 100} % para pasar a ${next.name} (${next.id}).` : "Es la última sesión disponible. La siguiente llegará pronto."}</span>
        <small class="muted">${ready ? "Ya puedes hacerla." : "Recomendado: completa antes las pruebas de unidad."}</small>
        ${exS ? `<div class="nstars">${[1, 2, 3].map(n => ic("star", "solid " + (n <= exS ? "on" : "off"))).join("")}</div>` : ""}</div>
      <button class="btn sm ${ready ? "" : "ghost"}" id="examBtn">${exS ? "Repetir" : ready ? "Empezar" : "Hacerla ya"}</button></section>`;
    app.innerHTML = html;
    const u = $("#upg"); if (u) u.onclick = () => openPlans();
    $("#examBtn").onclick = () => startExam(lvIdx);
    $("#howBtn").onclick = openHow;
    $$(".seg button").forEach(b => b.onclick = () => { const i = +b.dataset.i; if (i > unl) return openSessionLocked(i); chooseLevel(S.lang, b.dataset.c); });
    $$(".node").forEach(n => n.onclick = () => openLevel(+n.dataset.ui, +n.dataset.li));
    if (!viewLearn.scrolled) { viewLearn.scrolled = true; const c = $(".node.current"); if (c && done > 0) setTimeout(() => c.scrollIntoView({ block: "center" }), 30); }
  }

  /* ---------- Hoja de nivel ---------- */
  function openSessionLocked(i) {
    const c = CEFR[i], prev = CEFR[i - 1];
    modal.hidden = false;
    modal.innerHTML = `<div class="box center">${mascot("think", 90)}<h2>Sesión ${c.id} bloqueada</h2>
      <p class="muted">Se desbloquea al aprobar la prueba de la sesión ${prev.id} (${prev.name}). Si ya dominas ese nivel, puedes hacerla ahora y saltar.</p>
      <div class="row center"><button class="btn ghost" id="cl">Cerrar</button><button class="btn" id="goExam">Prueba ${prev.id}</button></div></div>`;
    $("#cl").onclick = closeModal;
    $("#goExam").onclick = () => { closeModal(); startExam(i - 1); };
  }
  function openHow() {
    modal.hidden = false;
    modal.innerHTML = `<div class="box">
      <div class="row between"><h2>¿Cómo subes de nivel?</h2><button class="icon-btn" id="x" aria-label="Cerrar">${ic("x")}</button></div>
      <ol class="how">
        <li><b>Completa las unidades.</b> Cada sesión tiene 10 unidades de 5 niveles. Las estrellas miden tus aciertos a la primera.</li>
        <li><b>Dominio de la sesión.</b> Es el porcentaje de estrellas que llevas. Cuanto más alto, más seguro estás.</li>
        <li><b>Prueba de sesión.</b> ${EXAM_N} preguntas de un solo intento. Con ${Math.ceil(EXAM_N * EXAM_PASS)} aciertos (${EXAM_PASS * 100} %) pasas a la siguiente sesión. Si no, te decimos qué unidades repasar.</li>
        <li><b>Tú decides.</b> Puedes elegir tu nivel al empezar y saltar de sesión aprobando su prueba. No es un examen oficial, sino una guía.</li>
      </ol>
      <h3>De dónde sale esto</h3>
      <ul class="how-src">
        <li>El MCER define los niveles por lo que puedes <i>hacer</i>, no por un número de palabras. <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions" target="_blank" rel="noopener">Consejo de Europa</a></li>
        <li>Horas de clase acumuladas orientativas: A1 90-100, A2 180-200, B1 350-400, B2 500-600. <a href="https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours" target="_blank" rel="noopener">Cambridge English</a></li>
        <li>Vocabulario de referencia: A1 unas 650 palabras y B1 unas 2.400 (Goethe-Institut). En inglés, A2 1.500-2.500 y B1 2.750-3.250 (<a href="http://eurosla.org/monographs/EM02/Milton.pdf" target="_blank" rel="noopener">Milton</a>).</li>
        <li>El umbral del 80 % viene del aprendizaje de dominio (Bloom). Es una pauta habitual, no un corte validado para vocabulario.</li>
      </ul>
      <p class="muted small">Rocco cubre una parte de cada nivel: úsala junto a lectura, series y conversación.</p></div>`;
    $("#x").onclick = closeModal;
  }
  function startExam(idx) {
    const c = CEFR[idx], units = examUnits(idx);
    const ex = EX.exam(S.lang, units, EXAM_N);
    shell(); $(".p-hearts").style.visibility = "hidden";
    $("#stage").innerHTML = `<div class="center result">${mascot("think", 120)}<h1>Prueba de sesión ${c.id}</h1>
      <p class="muted">${EXAM_N} preguntas de las unidades de ${c.name}. Un solo intento por pregunta y sin vidas. Necesitas ${Math.ceil(EXAM_N * EXAM_PASS)} aciertos (${EXAM_PASS * 100} %) para pasar a la siguiente sesión.</p>
      <p class="muted small">Si no la apruebas, te diremos qué unidades repasar. Puedes repetirla.</p></div>`;
    $("#foot").className = "p-foot"; $("#pBtn").textContent = "Empezar"; $("#pBtn").disabled = false;
    $("#pBtn").onclick = () => startPlayer({ kind: "exam", cidx: idx, ex, lang: S.lang });
    setBar(0);
  }
  function finishExam() {
    const idx = P.cidx, c = CEFR[idx], next = CEFR[idx + 1], lang = P.lang, R = Engine.examResult(P);
    if (R.ok) {
      const ex = (S.exams[lang] = S.exams[lang] || {});
      ex[c.id] = Math.max(ex[c.id] || 0, R.stars);
      if (next) S.unlocked[lang] = Math.max(S.unlocked[lang] ?? -1, idx + 1);
      S.xp += R.xp; touchStreak(); save(); renderTop();
      playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
        ${mascot("cheer", 150)}<h1>¡Sesión ${c.id} superada!</h1>${rocLn("examPass")}
        <div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= R.stars ? "on" : "off"))).join("")}</div>
        <p class="muted">${next ? `Subes a <b>${next.name} (${next.id})</b>: ${next.goal}` : "Has completado todas las sesiones disponibles. La siguiente llegará pronto."}</p>
        <div class="res-stats"><div class="rs xp">${ic("star", "solid")}<b>+${R.xp}</b><span>XP</span></div><div class="rs acc">${ic("check")}<b>${R.accuracy}%</b><span>Aciertos</span></div></div></div></div>
        <div class="p-foot">${next ? `<button class="btn ghost" id="stay">Seguir aquí</button><button class="btn" id="up">Ir a ${next.name}</button>` : `<button class="btn" id="stay">Continuar</button>`}</div>`;
      sfx.win(); fxBurst(innerWidth / 2, innerHeight / 3, 46, undefined, 220);
      $("#stay").onclick = closePlayer;
      if (next) $("#up").onclick = () => { chooseLevel(lang, next.id); closePlayer(); };
    } else {
      const miss = R.weakUnits.map(u => unitTitle(P.lang, u));
      save(); renderTop();
      playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
        ${mascot("happy", 130)}<h1>Aún no, pero vas bien</h1>${rocLn("examFail")}
        <p class="muted">${P.correct} de ${R.total} aciertos (${R.accuracy} %). Necesitas ${R.need}.</p>
        ${miss.length ? `<p><b>Te conviene repasar:</b></p><ul class="tone-legend">${miss.map(m => `<li><span class="tone-chip t-neutro">${ic("book")}${esc(m)}</span></li>`).join("")}</ul>` : ""}</div></div>
        <div class="p-foot"><button class="btn ghost" id="back">Volver al mapa</button><button class="btn" id="again">Intentarlo otra vez</button></div>`;
      $("#back").onclick = closePlayer;
      $("#again").onclick = () => { closePlayer(); startExam(idx); };
    }
  }

  function openSituation(ui) {
    const s = stars(ui, NL);
    modal.hidden = false;
    modal.innerHTML = `<div class="box center"><div class="sheet-ic situ">${ic("bolt")}</div>
      <span class="ulabel">Unidad ${ui - EX.lvStart(ui) + 1} &middot; ${unitTitle(S.lang, ui)}</span><h2>Situación</h2>
      <p class="muted">Rompecabezas vivo: cambia el tono de la frase hasta que encaje. Después calma a un personaje con las piezas adecuadas.</p>
      <p class="fb-note ok-note">${ic("check")}<span>Gratis para todos los planes.</span></p>
      ${s ? `<div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= s ? "on" : "off"))).join("")}</div>` : ""}
      <div class="row center"><button class="btn ghost" id="cancel">Cerrar</button><button class="btn" id="start">${s ? "Repetir" : "Empezar"}</button></div></div>`;
    $("#cancel").onclick = closeModal;
    $("#start").onclick = () => { closeModal(); startSituation(ui); };
  }
  function startSituation(ui) {
    const ex = EX.situation(S.lang, ui);
    const go = () => startPlayer({ kind: "situation", ui, li: NL, ex, lang: S.lang });
    shell();
    $("#stage").innerHTML = `<h2 class="ex-title">El color es el tono</h2>
      <p class="muted">Cada pieza tiene el color del registro con el que se dice. Elegir bien el tono cambia cómo te responde la gente.</p>
      <ul class="tone-legend">${["formal", "informal", "urgente"].map(t => `<li><span class="tone-chip t-${t}">${ic(TONES[t].icon)}${TONES[t].name}</span><span class="muted">${TONES[t].use}</span></li>`).join("")}</ul>
      <p class="muted small">Primero verás 4 frases que cambian al tocar un tono. Después, una escena para calmar a un personaje.</p>`;
    $("#foot").className = "p-foot"; $("#pBtn").textContent = "Empezar"; $("#pBtn").disabled = false; $("#pBtn").onclick = go;
    setBar(0);
  }

  function openLevel(ui, li) {
    if (li === NL) return openSituation(ui);
    const st = nodeState(ui, li);
    if (st === "prem") return openPlans("Esta unidad es Premium.");
    if (st === "locked") {
      modal.hidden = false;
      modal.innerHTML = `<div class="box center">${mascot("think", 90)}<h2>Nivel bloqueado</h2><p class="muted">Completa el nivel anterior para desbloquear este.</p><button class="btn" id="ok">Entendido</button></div>`;
      $("#ok").onclick = closeModal; return;
    }
    const L = LV[li], s = stars(ui, li), un = ui - EX.lvStart(ui);
    const note = li === 3 && !prem() ? `<p class="fb-note">${ic("lock")}<span>El audio es Premium. Haremos ejercicios de escritura.</span></p>` : "";
    modal.hidden = false;
    modal.innerHTML = `<div class="box center"><div class="sheet-ic">${ic(L.icon)}</div>
      <span class="ulabel">Unidad ${un + 1} &middot; ${unitTitle(S.lang, ui)}</span><h2>${L.name}</h2><p class="muted">${L.desc}</p>${note}
      ${s ? `<div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= s ? "on" : "off"))).join("")}</div>` : ""}
      <div class="row center"><button class="btn ghost" id="cancel">Cerrar</button><button class="btn" id="start">${s ? "Repetir" : "Empezar"}</button></div></div>`;
    $("#cancel").onclick = closeModal;
    $("#start").onclick = () => { closeModal(); startLevel(ui, li); };
  }
  function closeModal() { modal.hidden = true; modal.innerHTML = ""; renderTop(); }
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  function startLevel(ui, li) {
    if (!prem() && S.hearts <= 0) return outOfHearts();
    const ex = EX.build(S.lang, ui, li, { listen: prem() && canSpeak });
    const go = () => startPlayer({ kind: "level", ui, li, ex, lang: S.lang });
    if (li <= 1) intro(ui, li, go, ex.sample); else go();
  }

  /* ---------- Introducción de palabras/frases ---------- */
  function intro(ui, li, then, sample) {
    const U = EX.unit(S.lang, ui), items = li === 0 ? U.words : U.sents;
    shell();
    $("#stage").innerHTML = `<h2 class="ex-title">${li === 0 ? "Palabras nuevas" : "Frases de la situación"}</h2>
      <p class="muted">${U.ctx}</p>
      <ul class="intro">${items.map((x, i) => `<li><button class="spk sm" data-i="${i}" aria-label="Escuchar">${ic("speaker")}</button>
        <div><b>${EX.tgt(x.t, S.lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`).join("")}</ul>
      ${sample ? `<h3 class="vgroup">Dos frases para componer como un rompecabezas</h3><ul class="intro">${sample.map((x, i) => `<li><button class="spk sm" data-j="${i}" aria-label="Escuchar">${ic("speaker")}</button>
        <div><b>${EX.tgt(x.t, S.lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`).join("")}</ul>` : ""}`;
    $$(".intro .spk[data-i]").forEach(b => b.onclick = () => speak(items[+b.dataset.i].t, S.lang));
    $$(".intro .spk[data-j]").forEach(b => b.onclick = () => speak(sample[+b.dataset.j].t, S.lang));
    $("#foot").className = "p-foot";
    $("#pBtn").textContent = "Empezar"; $("#pBtn").disabled = false;
    $("#pBtn").onclick = then;
    setBar(0);
  }

  /* ---------- Reproductor de ejercicios ---------- */
  let P = null; // sesión de juego: JSON puro, la gestiona Engine (engine.js)
  const H = { check: null, teardown: null }; // manejadores de UI de la pregunta actual (no serializables)
  const setBar = f => { const b = $("#pBar"); if (b) b.style.transform = `scaleX(${Math.max(0, Math.min(1, f))})`; };
  window.__lingo = { get P() { return P; }, get S() { return S; } };

  function shell() {
    playerEl.hidden = false; document.body.classList.add("playing");
    playerEl.innerHTML = `
      <div class="p-top"><button class="icon-btn" id="pExit" aria-label="Salir">${ic("x")}</button>
        <div class="p-bar"><i id="pBar"></i></div>
        <div class="p-combo" id="pCombo" hidden>${ic("flame", "solid")}<b></b></div>
        <button class="icon-btn" id="pMute" aria-label="Sonido">${ic(S.mute ? "mute" : "speaker")}</button>
        <div class="p-hearts">${ic("heart", "solid")}<b id="pHearts"></b></div></div>
      <div class="p-body"><div class="stage" id="stage"></div></div>
      <div class="p-foot" id="foot"><div class="fb" id="fb"></div><button class="btn" id="pBtn">Comprobar</button></div>`;
    $("#pExit").onclick = confirmExit;
    $("#pMute").onclick = () => { S.mute = !S.mute; save(); $("#pMute").innerHTML = ic(S.mute ? "mute" : "speaker"); };
    $("#pHearts").innerHTML = prem() ? "&infin;" : S.hearts;
  }
  function updateCombo() {
    const c = $("#pCombo"); if (!c || !P) return;
    const n = P.combo || 0;
    c.hidden = n < 2; c.querySelector("b").textContent = "x" + n;
    c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump");
    if ([3, 5, 8, 12].includes(n)) fxToast(`${ic("flame", "solid")} Racha x${n}`);
  }

  function confirmExit() {
    modal.hidden = false;
    modal.innerHTML = `<div class="box center">${mascot("sad", 90)}<h2>¿Salir de la lección?</h2><p class="muted">Perderás el progreso de esta lección.</p>
      <div class="row center"><button class="btn ghost" id="keep">Seguir</button><button class="btn danger" id="quit">Salir</button></div></div>`;
    $("#keep").onclick = closeModal;
    $("#quit").onclick = () => { closeModal(); closePlayer(); };
  }
  function closePlayer() {
    playerEl.hidden = true; playerEl.innerHTML = ""; P = null;
    document.body.classList.remove("playing");
    stopAudio();
    render();
  }

  const freeKind = () => P && (P.kind === "placement" || P.kind === "daily" || P.kind === "situation" || P.kind === "exam" || P.kind === "dict");

  function startPlayer(cfg) {
    palStop();
    P = Engine.sessionNew(cfg); H.check = null; H.teardown = null;
    shell();
    if (freeKind()) $(".p-hearts").style.visibility = "hidden";
    renderEx();
  }

  const setReady = r => { const b = $("#pBtn"); if (b && !P.locked) { b.disabled = !r; b.classList.toggle("pulse", !!r); } };
  const tg = text => EX.tgt(text, P.lang);

  function audioBlock() {
    return `<div class="audio-row"><button class="spk" id="spk" aria-label="Escuchar">${ic("speaker")}</button>
      <button class="spk slow" id="spkSlow" aria-label="Escuchar despacio">${ic("speaker")}<span>Lento</span></button></div>`;
  }
  function bindAudio(text) {
    const a = $("#spk"), b = $("#spkSlow");
    if (a) a.onclick = () => speak(text, P.lang);
    if (b) b.onclick = () => speak(text, P.lang, .65);
    if (a && prem()) setTimeout(() => speak(text, P.lang), 250);
  }
  function bubble(html, speakText) {
    return `<div class="say">${mascot("think", 64)}<div class="bubble">${speakText ? `<button class="spk sm" id="pSpk" aria-label="Escuchar">${ic("speaker")}</button>` : ""}<span>${html}</span></div></div>`;
  }
  function bindBubbleSpeak(text) { const b = $("#pSpk"); if (b) b.onclick = () => speak(text, P.lang); }

  function renderEx() {
    if (H.teardown) { H.teardown(); H.teardown = null; }
    const ex = P.ex = P.q[P.i];
    P.locked = false; H.check = null;
    setBar(Engine.progress(P));
    $("#pHearts").innerHTML = prem() ? "&infin;" : S.hearts;
    $("#foot").className = "p-foot"; $("#fb").innerHTML = "";
    const btn = $("#pBtn"); btn.textContent = "Comprobar"; btn.disabled = true; btn.onclick = onMain;
    ({ mc: exMC, type: exType, bank: exBank, fill: exFill, match: exMatch, tone: exTone, scene: exScene }[ex.type])(ex);
  }

  /* --- opción múltiple --- */
  function exMC(ex) {
    const sentence = ex.item.k === "s";
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      ${ex.audio ? audioBlock() : `<div class="q-prompt ${sentence ? "sm" : ""}">${ex.promptTarget ? tg(ex.prompt) : esc(ex.prompt)}${ex.promptTarget ? `<button class="spk sm" id="pSpk" aria-label="Escuchar">${ic("speaker")}</button>` : ""}</div>`}
      <div class="opts">${ex.options.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span><span>${ex.optTarget ? tg(o) : esc(o)}</span></button>`).join("")}</div>`;
    if (ex.audio) bindAudio(ex.audio); else if (ex.promptTarget) bindBubbleSpeak(ex.prompt);
    let sel = -1;
    $$(".opt").forEach(b => b.onclick = () => {
      if (P.locked) return; sel = +b.dataset.k;
      $$(".opt").forEach(x => x.classList.toggle("sel", x === b)); setReady(true);
    });
    H.check = () => sel < 0 ? null : { ok: Engine.checkMC(ex, sel).ok, correct: ex.optTarget ? tg(ex.answer) : esc(ex.answer), mark: () => {
      $$(".opt").forEach(x => { const t = ex.options[+x.dataset.k]; if (t === ex.answer) x.classList.add("ok"); else if (+x.dataset.k === sel) x.classList.add("bad"); });
    } };
  }

  /* --- escribir --- */
  const SPECIAL = { fr: "é è ê à â ç î ô œ ù", de: "ä ö ü ß", it: "à è é ì ò ù", pt: "ã õ ç á é ê í ó ú â", ro: "ă â î ș ț" };
  function exType(ex) {
    const L = P.lang, C = COURSES[L];
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      ${ex.audio ? audioBlock() : bubble(esc(ex.prompt))}
      <input class="ans" id="in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Escribe en ${C.name.toLowerCase()}">
      ${SPECIAL[L] ? `<div class="spec">${SPECIAL[L].split(" ").map(c => `<button type="button" class="chip-w">${c}</button>`).join("")}</div>` : ""}
      ${L === "ru" ? `<p class="muted small">Puedes escribir en cirílico o con letras latinas (por ejemplo: ${EX.translit(ex.answer)}).</p>` : ""}`;
    if (ex.audio) bindAudio(ex.audio);
    const inp = $("#in"); inp.focus();
    inp.oninput = () => setReady(inp.value.trim().length > 0);
    $$(".spec .chip-w").forEach(b => b.onclick = () => { inp.value += b.textContent; inp.focus(); setReady(true); });
    H.check = () => {
      const r = Engine.checkType(ex, inp.value, L); if (!r) return null;
      return { ok: r.ok, correct: tg(ex.answer) };
    };
  }

  /* --- rompecabezas de frases --- */
  /* --- estilos de las piezas ---
     Cada estilo dibuja el SVG de la pieza (forma, sombra, relleno y adornos) con las mismas clases base (sh, fl) y los colores
     de la pieza (--pf relleno, --ps borde). "standard" es gratis; el resto es Premium. */
  const SKINS = [
    { id: "standard", name: "Clásico" },
    { id: "candy", name: "Caramelos" },
    { id: "mandala", name: "Mándala" },
    { id: "bubble", name: "Burbujas de agua" },
    { id: "choco", name: "Barras de chocolate" }
  ];
  const skinId = () => (prem() && SKINS.some(s => s.id === S.skin) ? S.skin : "standard");
  function applySkin() {
    const b = document.body; b.className = b.className.replace(/\bskin-\S+/g, "").trim(); b.classList.add("skin-" + skinId());
  }

  const KR = 8; // radio de la pestaña del puzle
  function pzPath(w, h, first, last) {
    const m = h / 2, r = 7;
    let d = `M${r} 0H${w - r}Q${w} 0 ${w} ${r}`;
    if (!last) d += `V${m - KR}A${KR} ${KR} 0 1 1 ${w} ${m + KR}`;
    d += `V${h - r}Q${w} ${h} ${w - r} ${h}H${r}Q0 ${h} 0 ${h - r}`;
    if (!first) d += `V${m + KR}A${KR} ${KR} 0 1 0 0 ${m - KR}`;
    return d + `V${r}Q0 0 ${r} 0Z`;
  }
  /* Contorno de estadio con el borde en festón (mándala). Se recorre en sentido horario y cada festón es un arco hacia fuera. */
  function scallopPath(w, h) {
    const r = h / 2 - 1.5, straight = Math.max(0, w - 2 * r), arc = Math.PI * r, total = 2 * straight + 2 * arc;
    const n = Math.max(14, Math.round(total / 9.5)), pt = i => {
      const s = (i % n) / n * total;
      if (s < straight) return [r + s, 1.5];
      if (s < straight + arc) { const a = -Math.PI / 2 + (s - straight) / r; return [w - r + r * Math.cos(a), h / 2 + r * Math.sin(a)]; }
      if (s < 2 * straight + arc) return [w - r - (s - straight - arc), h - 1.5];
      const a = Math.PI / 2 + (s - 2 * straight - arc) / r; return [r + r * Math.cos(a), h / 2 + r * Math.sin(a)];
    };
    const f = v => v.toFixed(1); let p = pt(0), d = `M${f(p[0])} ${f(p[1])}`;
    for (let i = 1; i <= n; i++) { const q = pt(i), rr = Math.hypot(q[0] - p[0], q[1] - p[1]) * .56; d += `A${f(rr)} ${f(rr)} 0 0 1 ${f(q[0])} ${f(q[1])}`; p = q; }
    return d + "Z";
  }
  const rrect = (x, y, w, h, r) => `M${x + r} ${y}H${x + w - r}Q${x + w} ${y} ${x + w} ${y + r}V${y + h - r}Q${x + w} ${y + h} ${x + w - r} ${y + h}H${x + r}Q${x} ${y + h} ${x} ${y + h - r}V${y + r}Q${x} ${y} ${x + r} ${y}Z`;

  function pzMarkup(skin, w, h, first, last, cid, empty, compact) {
    const clip = d => `<defs><clipPath id="${cid}"><path d="${d}"/></clipPath></defs>`;
    if (skin === "candy") {
      const r = Math.min(h * .44, 20), ew = Math.min(15, h * .3), d = rrect(0, 0, w, h, r);
      if (empty) return `<path class="fl" d="${d}"/>`;
      const stripes = Array.from({ length: Math.ceil((w + h) / 15) }, (_, i) => `<path d="M${i * 15 - h} ${h}l${h * .62} ${-h}"/>`).join("");
      return `${clip(d)}
        ${compact ? "" : `<path class="wrap" d="M3 ${h * .3}L${-ew} ${h * .02}Q${-ew * .4} ${h * .5} ${-ew} ${h * .98}L3 ${h * .7}Z"/><path class="wrap" d="M${w - 3} ${h * .3}L${w + ew} ${h * .02}Q${w + ew * .4} ${h * .5} ${w + ew} ${h * .98}L${w - 3} ${h * .7}Z"/>
        <path class="wl" d="M-1 ${h * .2}L${-ew * .7} ${h * .5}L-1 ${h * .8}M${w + 1} ${h * .2}L${w + ew * .7} ${h * .5}L${w + 1} ${h * .8}"/>`}
        <path class="sh" d="${d}" transform="translate(0 5)"/><path class="fl" d="${d}"/>
        <g clip-path="url(#${cid})"><g class="stripe">${stripes}</g>${compact ? "" : `<ellipse class="spec" cx="${w * .27}" cy="${h * .24}" rx="${Math.max(10, w * .17)}" ry="${h * .1}"/>`}<rect class="shade" x="0" y="${h * .72}" width="${w}" height="${h * .28}"/></g>`;
    }
    if (skin === "mandala") {
      const d = scallopPath(w, h), r = h / 2 - 1.5, rp = r * .5;
      if (empty) return `<path class="fl" d="${d}"/>`;
      const rosette = cx => `<g transform="translate(${cx} ${h / 2})" class="ros">${Array.from({ length: 8 }, (_, k) => `<ellipse cx="0" cy="${-rp * .52}" rx="${rp * .17}" ry="${rp * .5}" transform="rotate(${k * 45})"/>`).join("")}<circle r="${rp * .16}"/></g>`;
      return `${clip(d)}<path class="sh" d="${d}" transform="translate(0 5)"/><path class="fl" d="${d}"/>
        <g clip-path="url(#${cid})"><path class="ring" d="${rrect(5, 5, w - 10, h - 10, (h - 10) / 2)}"/>${rosette(r * .62 + 4)}${w > 2 * r + 30 ? rosette(w - r * .62 - 4) : ""}<ellipse class="spec" cx="${w * .5}" cy="${h * .18}" rx="${w * .3}" ry="${h * .08}"/></g>`;
    }
    if (skin === "bubble") {
      const d = rrect(0, 0, w, h, h / 2);
      if (empty) return `<path class="fl" d="${d}"/>`;
      return `<defs><radialGradient id="${cid}r" cx=".34" cy=".26" r=".9"><stop offset="0" style="stop-color:var(--pf)" stop-opacity=".1"/><stop offset=".62" style="stop-color:var(--pf)" stop-opacity=".3"/><stop offset=".9" style="stop-color:var(--pf)" stop-opacity=".62"/><stop offset="1" style="stop-color:var(--ps)" stop-opacity=".9"/></radialGradient></defs>
        <ellipse class="bsh" cx="${w / 2}" cy="${h + 3}" rx="${w * .42}" ry="3.5"/><path d="${d}" fill="url(#${cid}r)" class="bub"/>
        <path class="rim" d="${d}"/><path class="rim2" d="M${h * .5} ${h - 5}Q${w / 2} ${h + 1} ${w - h * .5} ${h - 5}"/><ellipse class="hl" cx="${w * .24}" cy="${h * .27}" rx="${Math.max(8, w * .13)}" ry="${h * .11}" transform="rotate(-14 ${w * .24} ${h * .27})"/><circle class="hl2" cx="${w * .84}" cy="${h * .73}" r="${Math.max(2, h * .07)}"/>`;
    }
    if (skin === "choco") {
      const d = rrect(0, 0, w, h, 8);
      if (empty) return `<path class="fl" d="${d}"/>`;
      const n = Math.max(1, Math.round(w / (h * 1.1))), pw = (w - 8) / n;
      const panels = Array.from({ length: n }, (_, i) => { const x = 4 + i * pw + 3, ww = pw - 6; return `<path class="panel" d="${rrect(x, 6, ww, h - 12, 5)}"/><path class="phl" d="M${x + 4} 9.5H${x + ww - 6}"/>`; }).join("");
      return `${clip(d)}<path class="sh" d="${d}" transform="translate(0 5)"/><path class="fl" d="${d}"/><g clip-path="url(#${cid})">${panels}</g>`;
    }
    const d = pzPath(w, h, first, last);
    if (empty) return `<path class="fl" d="${d}"/>`;
    return `${clip(d)}<defs><linearGradient id="${cid}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".4"/><stop offset=".5" stop-color="#fff" stop-opacity=".03"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient></defs>
      <path class="sh" d="${d}" transform="translate(0 5)"/><path class="fl" d="${d}"/>
      <g clip-path="url(#${cid})"><rect class="gx" x="-2" y="0" width="${w + 4}" height="${h}" fill="url(#${cid}g)"/><path class="edge" d="${d}"/><path class="top" d="M10 3.200H${w - 10}"/></g>`;
  }

  let pzUid = 0;
  function shapePiece(el, forceSkin) {
    const svg = el.querySelector("svg"); if (!svg) return;
    const skin = (typeof forceSkin === "string" && forceSkin) || skinId(), w = el.offsetWidth, h = el.offsetHeight, first = el.classList.contains("first"), last = el.classList.contains("last");
    const empty = el.classList.contains("empty");
    const key = skin + w + "x" + h + (first ? "f" : "") + (last ? "l" : "") + (empty ? "e" : "");
    if (el._sk === key) return; // la forma no cambió: no se toca el DOM
    el._sk = key; el._cid = el._cid || "pc" + (++pzUid);
    svg.setAttribute("width", w); svg.setAttribute("height", h); svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.innerHTML = pzMarkup(skin, w, h, first, last, el._cid, empty, el.classList.contains("wide"));
  }

  function exBank(ex) {
    let st = Engine.puzzleNew(ex);
    const N = st.n, txt = i => ex.bankTarget ? tg(ex.bank[i]) : esc(ex.bank[i]);
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      ${ex.audio ? audioBlock() : bubble(ex.promptTarget ? tg(ex.prompt) : esc(ex.prompt), ex.promptTarget)}
      <p class="muted small puzzle-hint">Arrastra las piezas al tablero, o tócalas.</p>
      <div class="board" id="board" aria-label="Tablero"></div>
      <div class="bank" id="bank" aria-label="Piezas"></div>`;
    if (ex.audio) bindAudio(ex.audio); else if (ex.promptTarget) bindBubbleSpeak(ex.prompt);
    const boardEl = $("#board"), bankEl = $("#bank");
    const wordLang = ex.bankTarget ? P.lang : S.native;
    if (prem()) loadWordPack(wordLang); // precarga del paquete de palabras
    const sayPiece = i => speakWord(ex.bank[i], wordLang);

    // Construcción única: cada pieza es un nodo que solo se MUEVE entre huecos y banco.
    const pieces = ex.bank.map((_, i) => {
      const el = document.createElement("button");
      el.type = "button"; el.className = "pz c" + (i % 8); el.dataset.i = i; el._slot = -1;
      el.style.cssText = `--i:${i};--rot:${(i * 37 % 7) - 3}deg;--d:${(i * .37).toFixed(2)}s`;
      el.innerHTML = `<svg class="pzs" aria-hidden="true"></svg><span class="pzt">${txt(i)}</span>`;
      return el;
    });
    const cells = pieces.map(el => { const c = document.createElement("span"); c.className = "cell"; c.appendChild(el); bankEl.appendChild(c); return c; });
    const slotEls = Array.from({ length: N }, (_, s) => {
      const d = document.createElement("div"); d.className = "slot"; d.dataset.s = s;
      const e = document.createElement("span"); e.className = "pz empty" + (s === 0 ? " first" : "") + (s === N - 1 ? " last" : "");
      e.innerHTML = '<svg class="pzs" aria-hidden="true"></svg>'; d.appendChild(e); boardEl.appendChild(d);
      return { d, e };
    });
    const reshape = () => { pieces.forEach(el => { el._sk = null; shapePiece(el); }); slotEls.forEach(({ e }) => { e._sk = null; shapePiece(e); });
      cells.forEach((c, i) => { if (pieces[i]._slot < 0) { c.style.minWidth = pieces[i].offsetWidth + "px"; c.style.minHeight = pieces[i].offsetHeight + 4 + "px"; } }); };
    reshape();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => P && P.ex === ex && reshape());

    // Pinta solo lo que cambió respecto al estado anterior.
    const render = () => {
      const at = new Map(); st.slots.forEach((pi, s) => { if (pi !== null) at.set(pi, s); });
      pieces.forEach((el, i) => {
        const s = at.has(i) ? at.get(i) : -1;
        if (el._slot === s) return;
        el._slot = s; el.classList.remove("first", "last", "landed");
        if (s >= 0) { if (s === 0) el.classList.add("first"); if (s === N - 1) el.classList.add("last"); slotEls[s].d.appendChild(el); }
        else cells[i].appendChild(el);
      });
      slotEls.forEach(({ d }, s) => d.classList.toggle("full", st.slots[s] !== null));
      pieces.forEach(shapePiece);
      setReady(Engine.puzzleFull(st));
      if (st.last) {
        const el = pieces[st.slots[st.last.slot]];
        if (el) {
          el.classList.add("landed"); el.addEventListener("animationend", () => el.classList.remove("landed"), { once: true });
          const r = el.getBoundingClientRect(); fxBurst(r.left + r.width / 2, r.top + r.height / 2, 7, undefined, 38);
          sfx.pop(st.slots.filter(x => x !== null).length - 1); vibrate(8);
        }
      }
    };
    const dispatch = action => { st = Engine.puzzleReduce(st, action); render(); st = { ...st, last: null }; };
    render();

    // Arrastre: posiciones de los huecos medidas una sola vez, movimiento con transform en requestAnimationFrame.
    let drag = null, rects = [], over = -1;
    const nearest = (x, y) => {
      let best = -1, bd = 95;
      rects.forEach((r, s) => { const dd = Math.hypot(x - r.cx, y - r.cy); if (dd < bd) { bd = dd; best = s; } });
      return best;
    };
    const setOver = s => { if (s === over) return; if (over >= 0) slotEls[over].d.classList.remove("over"); over = s; if (s >= 0) slotEls[s].d.classList.add("over"); };
    const frame = () => {
      if (!drag) return; drag.raf = 0;
      if (!drag.moved && Math.hypot(drag.px - drag.x0, drag.py - drag.y0) > 8) {
        drag.moved = true;
        rects = slotEls.map(({ d }) => { const r = d.getBoundingClientRect(); return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; });
        const g = drag.el.cloneNode(true); g.classList.add("dragging"); g.removeAttribute("data-i");
        document.body.appendChild(g); drag.ghost = g; drag.el.classList.add("lifting"); document.body.classList.add("is-dragging"); sfx.back();
      }
      if (drag.moved) {
        const tilt = Math.max(-16, Math.min(16, (drag.px - drag.lx) * .8)); drag.lx = drag.px;
        drag.ghost.style.transform = `translate3d(${drag.px}px,${drag.py}px,0) translate(-50%,-60%) scale(1.12) rotate(${tilt}deg)`;
        setOver(nearest(drag.px, drag.py));
      }
    };
    const stop = () => {
      window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); window.removeEventListener("pointercancel", onCancel);
      if (drag) { if (drag.raf) cancelAnimationFrame(drag.raf); if (drag.ghost) drag.ghost.remove(); drag.el.classList.remove("lifting"); }
      setOver(-1); document.body.classList.remove("is-dragging");
    };
    const onDown = e => {
      const el = e.target.closest(".pz[data-i]");
      if (!el || P.locked || (e.button && e.button !== 0)) return;
      drag = { i: +el.dataset.i, from: el._slot, x0: e.clientX, y0: e.clientY, px: e.clientX, py: e.clientY, lx: e.clientX, moved: false, el, ghost: null, raf: 0 };
      window.addEventListener("pointermove", onMove); window.addEventListener("pointerup", onUp); window.addEventListener("pointercancel", onCancel);
    };
    const onMove = e => { if (!drag) return; drag.px = e.clientX; drag.py = e.clientY; if (!drag.raf) drag.raf = requestAnimationFrame(frame); };
    const onUp = e => {
      if (!drag) return;
      drag.px = e.clientX; drag.py = e.clientY;
      const d = drag, moved = d.moved || Math.hypot(d.px - d.x0, d.py - d.y0) > 8;
      const target = moved ? (d.moved ? nearest(d.px, d.py) : (rects = slotEls.map(({ d: sd }) => { const r = sd.getBoundingClientRect(); return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; }), nearest(d.px, d.py))) : -1;
      const t = moved ? document.elementFromPoint(d.px, d.py) : null;
      stop(); drag = null;
      if (!moved) { dispatch({ type: "TAP", piece: d.i, from: d.from }); if (d.from >= 0) sfx.back(); sayPiece(d.i); }
      else if (target >= 0) { dispatch({ type: "DROP", piece: d.i, from: d.from, to: target }); sayPiece(d.i); }
      else if (t && t.closest("#bank") && d.from >= 0) { dispatch({ type: "DROP", piece: d.i, from: d.from, to: null }); sfx.back(); }
    };
    const onCancel = () => { stop(); drag = null; };
    const onClick = e => { // teclado: Enter / espacio
      if (e.detail !== 0 || P.locked) return;
      const el = e.target.closest(".pz[data-i]"); if (!el) return;
      dispatch({ type: "TAP", piece: +el.dataset.i, from: el._slot }); el.focus(); sayPiece(+el.dataset.i);
    };
    const stage = $("#stage");
    stage.addEventListener("pointerdown", onDown); stage.addEventListener("click", onClick);
    H.teardown = () => { stage.removeEventListener("pointerdown", onDown); stage.removeEventListener("click", onClick); stop(); drag = null; };

    H.check = () => {
      if (!Engine.puzzleFull(st)) return null;
      const r = Engine.puzzleCheck(st, ex); st = r.state;
      return {
        ok: r.ok, correct: ex.bankTarget ? tg(ex.answerText) : esc(ex.answerText),
        mark: () => {
          st.marks.forEach((good, s) => { const el = pieces[st.slots[s]]; el.classList.add(good ? "ok" : "bad"); el.style.animationDelay = (s * 70) + "ms"; });
          if (r.ok) boardEl.classList.add("solved");
        }
      };
    };
  }

  /* --- rompecabezas vivo: el color es el tono --- */
  function exTone(ex) {
    const order = ["formal", "informal"]; let cur = ex.start, busy = false;
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      <div class="sit-card">${ic("sparkle")}<div><span class="ulabel">Situación</span><b>${esc(ex.situation)}</b><span class="muted small">Toca un tono hasta que la frase encaje.</span></div></div>
      <div class="tone-board-wrap"><div class="board live" id="tboard"></div><button class="spk sm" id="tspk" aria-label="Escuchar">${ic("speaker")}</button></div>
      <div class="tone-cap" id="tcap"></div>
      <div class="tone-pick" id="tpick">${order.map(t => `<button class="tone-btn t-${t}" data-t="${t}">${ic(TONES[t].icon)}<span>${TONES[t].name}</span></button>`).join("")}</div>`;
    const caption = () => {
      const T = TONES[cur];
      $("#tcap").innerHTML = `<span class="tone-chip t-${cur}">${ic(T.icon)}${T.name}</span><span class="muted"> ${T.use}</span><div class="tone-es">Significa: ${esc(ex.variants[cur].es)}</div>`;
    };
    const renderBoard = anim => {
      const tk = EX.tokens(ex.variants[cur].t);
      $("#tboard").innerHTML = tk.map((w, i) => `<span class="pz t-${cur} ${i === 0 ? "first " : ""}${i === tk.length - 1 ? "last" : ""} ${anim ? "flip-in" : ""}" style="animation-delay:${i * 50}ms"><svg class="pzs" aria-hidden="true"></svg><span class="pzt">${tg(w)}</span></span>`).join("");
      $$("#tboard .pz").forEach(shapePiece);
      $$("#tpick .tone-btn").forEach(b => b.classList.toggle("on", b.dataset.t === cur));
      caption();
    };
    renderBoard(false);
    $("#tspk").onclick = () => speak(ex.variants[cur].t, P.lang);
    $$("#tpick .tone-btn").forEach(b => b.onclick = () => {
      const t = b.dataset.t; if (busy || P.locked || t === cur) return;
      busy = true;
      const ps = $$("#tboard .pz"); ps.forEach((p, i) => { p.style.animation = `flipOut .16s ${i * 35}ms ease-in forwards`; });
      sfx.swap(); vibrate(8);
      setTimeout(() => { cur = t; renderBoard(true); busy = false; const r = $("#tboard").getBoundingClientRect(); fxBurst(r.left + r.width / 2, r.top + r.height / 2, 10, [`var(--t-${t})`], 90); }, ps.length * 35 + 170);
    });
    setReady(true);
    H.check = () => busy ? null : {
      ok: Engine.checkTone(ex, cur).ok, showOk: true,
      correct: `<span class="tone-chip t-${ex.target}">${ic(TONES[ex.target].icon)}${TONES[ex.target].name}</span> ${TONES[ex.target].use}`,
      mark: () => $$("#tpick .tone-btn").forEach(b => { if (b.dataset.t === ex.target) b.classList.add("ok"); else if (b.dataset.t === cur) b.classList.add("bad"); })
    };
  }

  /* --- escena: calmar a un personaje --- */
  function exScene(ex) {
    let turn = 0, mood = ex.start, busy = false;
    const face = Engine.moodFace;
    $("#stage").innerHTML = `<h2 class="ex-title">${esc(ex.title)}</h2><p class="muted scene-intro">${esc(ex.intro)}</p>
      <div class="char-row"><div class="char" id="char"></div><div class="char-info"><b>${esc(ex.who)}</b>
        <div class="mood" role="meter" aria-label="Ánimo" aria-valuemin="0" aria-valuemax="100"><i id="mfill"></i><span class="goal" style="left:${ex.goal}%"></span><em id="mdelta"></em></div>
        <div class="mood-labels"><span>Enojado</span><span>Tranquilo</span></div></div></div>
      <div class="bubble big" id="cline"></div>
      <div class="turn-dots" id="tdots"></div>
      <div class="scene-opts" id="sopts"></div>`;
    const paint = delta => {
      $("#char").innerHTML = person(face(mood), ex.hue, 96);
      const f = $("#mfill"); f.style.transform = `scaleX(${mood / 100})`; f.className = mood >= ex.goal ? "hi" : mood >= 50 ? "mid" : "lo";
      const dl = $("#mdelta");
      if (delta) { dl.textContent = (delta > 0 ? "+" : "") + delta; dl.className = (delta > 0 ? "up" : "down") + " show"; setTimeout(() => dl.classList.remove("show"), 900); }
    };
    const setBtn = (text, dis, fn) => { const b = $("#pBtn"); b.textContent = text; b.disabled = dis; b.onclick = fn; b.classList.remove("pulse"); };
    const drawTurn = () => {
      busy = false; const t = ex.turns[turn];
      $("#foot").className = "p-foot"; $("#fb").innerHTML = "";
      $("#cline").innerHTML = `<button class="spk sm" id="cspk" aria-label="Escuchar">${ic("speaker")}</button><div><span>${tg(t.say.t)}</span><small class="muted">${esc(t.say.es)}</small></div>`;
      $("#cspk").onclick = () => speak(t.say.t, P.lang);
      $("#tdots").innerHTML = ex.turns.map((_, i) => `<i class="${i < turn ? "done" : i === turn ? "cur" : ""}"></i>`).join("");
      const opts = EX.shuffle(t.opts.map((o, k) => ({ ...o, k })));
      $("#sopts").innerHTML = opts.map(o => `<button type="button" class="pz wide t-${o.tone}" data-k="${o.k}"><svg class="pzs" aria-hidden="true"></svg><span class="pzt"><span class="otone">${ic(TONES[o.tone].icon)}${TONES[o.tone].name}</span><b>${tg(o.t)}</b><small>${esc(o.es)}</small></span></button>`).join("");
      $$("#sopts .pz").forEach(shapePiece);
      $$("#sopts .pz").forEach(b => b.onclick = () => choose(t.opts[+b.dataset.k], b));
      setBtn("Elige una pieza", true, onMain);
    };
    const choose = (o, btn) => {
      if (busy) return; busy = true;
      mood = Engine.moodStep(mood, o.d); paint(o.d);
      $$("#sopts .pz").forEach(x => { if (x === btn) x.classList.add(o.d > 0 ? "ok" : "bad"); else x.classList.add("dim"); shapePiece(x); });
      o.d > 0 ? sfx.ok() : sfx.bad(); vibrate(o.d > 0 ? [10, 20, 10] : 25);
      const r = btn.getBoundingClientRect(); fxBurst(r.left + r.width / 2, r.top + r.height / 2, o.d > 0 ? 16 : 6, o.d > 0 ? undefined : ["#e5484d"], 80);
      const last = turn === ex.turns.length - 1;
      $("#foot").className = "p-foot " + (o.d > 0 ? "ok" : "bad");
      $("#fb").innerHTML = `<div class="fb-in"><span class="fb-ic">${ic(o.d > 0 ? "check" : "x")}</span><div><b>${o.d > 0 ? "Esto lo calma" : "Esto lo molesta"} (${o.d > 0 ? "+" : ""}${o.d})</b><div class="fb-ans">${esc(o.why)}</div></div></div>`;
      setBtn(last ? "Ver resultado" : "Continuar", false, () => {
        if (!last) { turn++; drawTurn(); return; }
        const ok = Engine.sceneWon(mood, ex.goal);
        $("#pBtn").onclick = onMain;
        reveal(ok, `Ánimo final: ${mood}%. ${ok ? "Has desactivado la situación con el tono adecuado." : "Aún sigue molesto. Prueba con otro tono."}`, { msg: "Aún no se ha calmado", okMsg: "¡Lo has calmado!", showOk: true });
      });
      $("#pBtn").focus();
    };
    paint(0); drawTurn();
  }

  /* --- completar --- */
  function exFill(ex) {
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      <div class="fill-line"><span>${esc(ex.before)}</span><span class="bw">${esc(ex.lead)}<span class="blank" id="blank">&nbsp;</span>${esc(ex.trail)}</span><span>${esc(ex.after)}</span></div>
      <p class="muted center">${esc(ex.hint)}</p>
      <div class="opts row2">${ex.options.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
    let sel = -1;
    $$(".opt").forEach(b => b.onclick = () => {
      if (P.locked) return; sel = +b.dataset.k;
      $$(".opt").forEach(x => x.classList.toggle("sel", x === b));
      $("#blank").textContent = ex.options[sel]; $("#blank").classList.add("filled"); setReady(true);
    });
    H.check = () => sel < 0 ? null : { ok: Engine.checkFill(ex, sel).ok, correct: tg(ex.full), mark: () => {
      $$(".opt").forEach(x => { const t = ex.options[+x.dataset.k]; if (EX.norm(t) === EX.norm(ex.answer)) x.classList.add("ok"); else if (+x.dataset.k === sel) x.classList.add("bad"); });
    } };
  }

  /* --- relacionar parejas --- */
  function exMatch(ex) {
    const L = EX.shuffle(ex.pairs.map((p, i) => ({ id: i, v: p.t }))), R = EX.shuffle(ex.pairs.map((p, i) => ({ id: i, v: p.es })));
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      <div class="match"><div class="mcol" id="mL">${L.map(x => `<button class="opt m" data-id="${x.id}" data-s="L">${tg(x.v)}</button>`).join("")}</div>
      <div class="mcol" id="mR">${R.map(x => `<button class="opt m" data-id="${x.id}" data-s="R">${esc(x.v)}</button>`).join("")}</div></div>`;
    let selB = null, left = ex.pairs.length, miss = 0; const missed = new Set();
    $$(".opt.m").forEach(b => b.onclick = () => {
      if (P.locked || b.classList.contains("done")) return;
      if (!selB || selB.dataset.s === b.dataset.s) {
        $$(".opt.m.sel").forEach(x => x.classList.remove("sel")); selB = b; b.classList.add("sel"); return;
      }
      const a = selB; selB = null; a.classList.remove("sel");
      if (a.dataset.id === b.dataset.id) {
        [a, b].forEach(x => { x.classList.add("done"); x.disabled = true; });
        if (--left === 0) {
          missed.forEach(id => srsTouch(ex.items[+id], false));
          reveal(miss === 0, "", { noRetry: true, skipRemember: true, msg: miss === 0 ? null : "Casi. Repasa estas parejas." });
        }
      } else {
        miss++; missed.add(a.dataset.id).add(b.dataset.id);
        [a, b].forEach(x => x.classList.add("bad"));
        setTimeout(() => [a, b].forEach(x => x.classList.remove("bad")), 450);
      }
    });
  }

  /* --- comprobar / continuar --- */
  function onMain() {
    if (!P) return;
    if (P.locked) return next();
    const r = H.check && H.check();
    if (!r) return;
    if (r.mark) r.mark();
    reveal(r.ok, r.correct, { showOk: r.showOk });
  }

  const PRAISE = ["¡Muy bien!", "¡Correcto!", "¡Excelente!", "¡Así se hace!", "¡Perfecto!"];
  /* Repaso espaciado (SM-2 simplificado, Engine.srs*): cada palabra o frase aprendida tiene su propia
     tarjeta con una fecha de repaso. Acertar la aleja en el tiempo; fallar la pone otra vez para hoy. */
  const srsKey = item => `${item.k}|${item.t}`;
  function srsTouch(item, ok) {
    if (!item || freeKind()) return;
    const lang = P.lang, bucket = (S.srs[lang] = S.srs[lang] || {}), key = srsKey(item), now = Date.now();
    const card = bucket[key] || Engine.srsNew(key, { es: item.es, t: item.t, k: item.k }, now);
    bucket[key] = { ...Engine.srsGrade(card, ok, now), es: item.es };
  }

  let missRun = 0;
  const rocLn = ev => (S.rocco === false ? "" : `<p class="rocco-line big">${esc(roccoSay(ev))}</p>`);
  function reveal(ok, correctHTML, o = {}) {
    const ex = P.ex, r = Engine.sessionRecord(P, { ok, noRetry: o.noRetry });
    P = { ...r.session, ex, locked: true };
    if (!o.skipRemember) srsTouch(ex.item, ok);
    if (!ok && r.effects.heartLoss && !prem()) { S.hearts = Math.max(0, S.hearts - 1); $("#pHearts").textContent = S.hearts; }
    save(); renderTop();
    if (ok) missRun = 0; else missRun++;
    const rsay = ok ? ({ 3: "streak3", 5: "streak5", 8: "streak8" }[P.combo] || (Math.random() < .25 ? "correct" : null)) : (missRun >= 2 ? "wrong2" : Math.random() < .75 ? "wrong" : null);
    const rl = rsay && S.rocco !== false ? `<span class="rocco-line">${esc(roccoSay(rsay))}</span>` : "";
    const praise = o.okMsg || (P.kind === "placement" ? "Respuesta registrada" : PRAISE[Math.floor(Math.random() * PRAISE.length)]);
    $("#foot").className = "p-foot " + (ok ? "ok" : "bad");
    $("#fb").innerHTML = ok
      ? `<div class="fb-in"><span class="fb-ic">${ic("check")}</span><div><b>${praise}</b>${rl}${P.combo >= 3 ? `<span class="combo-note">${ic("flame", "solid")} Racha x${P.combo}</span>` : ""}${o.showOk && correctHTML ? `<div class="fb-ans">${correctHTML}</div>` : ""}</div></div>`
      : `<div class="fb-in"><span class="fb-ic">${ic("x")}</span><div><b>${o.msg || "Respuesta correcta"}</b>${rl}${correctHTML ? `<div class="fb-ans">${correctHTML}</div>` : ""}</div></div>`;
    const btn = $("#pBtn"); btn.textContent = "Continuar"; btn.disabled = false; btn.classList.remove("pulse"); btn.focus();
    setBar((P.i + 1) / P.q.length);
    // jugo: mascota, sonido, confeti y racha
    const sm = $(".say .mascot"); if (sm) sm.outerHTML = mascot(!ok ? "sad" : P.combo >= 5 ? "wow" : P.combo >= 3 ? "love" : Math.random() < .2 ? "wink" : "cheer", 64);
    if (ok) {
      if (ex.type === "bank") {
        sfx.win(); const b = $("#board");
        if (b) { const rc = b.getBoundingClientRect(); fxBurst(rc.left + rc.width / 2, rc.top + rc.height / 2, 30, undefined, 150); }
      } else sfx.ok();
      vibrate([12, 30, 12]);
    } else { sfx.bad(); vibrate(35); }
    updateCombo();
  }

  function next() {
    if (!prem() && !freeKind() && S.hearts <= 0) return outOfHearts();
    P = Engine.sessionAdvance(P);
    if (Engine.sessionDone(P)) return finish();
    renderEx();
  }

  function touchStreak() {
    const t = today(); if (S.lastDay === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak = S.lastDay === y ? S.streak + 1 : 1; S.lastDay = t;
  }

  function finish() {
    if (P.kind === "placement") return finishPlacement();
    if (P.kind === "exam") return finishExam();
    const sm = Engine.summary(P), star = sm.stars, acc = sm.accuracy, xp = sm.xp;
    S.xp += xp; touchStreak();
    let title = "Repaso completado", extra = "";
    if (P.kind === "level") {
      const p = (S.progress[P.lang] = S.progress[P.lang] || {}), k = P.ui + "-" + P.li;
      p[k] = Math.max(p[k] || 0, star);
      title = P.li === NL - 1 ? "Unidad completada" : "Nivel completado";
      if (P.li === NL - 1) extra = `<p class="muted">Has terminado la unidad ${P.ui - EX.lvStart(P.ui) + 1}: ${unitTitle(P.lang, P.ui)}.</p>`;
    } else if (P.kind === "situation") {
      const p = (S.progress[P.lang] = S.progress[P.lang] || {}), k = P.ui + "-" + NL;
      p[k] = Math.max(p[k] || 0, star);
      title = "Situación superada";
      extra = `<p class="muted">Has elegido el tono adecuado en la unidad ${P.ui - EX.lvStart(P.ui) + 1}.</p>`;
    } else if (P.kind === "daily") {
      title = "Vocabulario de hoy repasado";
      dailyRec().practiced = true;
    } else if (P.kind === "dict") {
      title = "Categoría practicada";
      dictUsage(); S.dictUsed++;
    }
    save(); renderTop();
    viewLearn.scrolled = false;
    { const pc = $("#pCombo"); if (pc) pc.hidden = true; }
    playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
      ${mascot(star === 3 || acc >= 90 ? "proud" : star === 2 || acc >= 70 ? "cheer" : "happy", 150)}<h1>${title}</h1>${rocLn((P.kind === "level" || P.kind === "situation" ? star : acc >= 90 ? 3 : acc >= 70 ? 2 : 1) === 3 ? "done3" : (P.kind === "level" || P.kind === "situation" ? star : acc >= 70 ? 2 : 1) === 2 ? "done2" : "done1")}${extra}
      ${P.kind === "level" || P.kind === "situation" ? `<div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= star ? "on" : "off"))).join("")}</div>` : ""}
      <div class="res-stats"><div class="rs xp">${ic("star", "solid")}<b>+${xp}</b><span>XP</span></div>
        <div class="rs acc">${ic("check")}<b>${acc}%</b><span>Precisión</span></div></div></div></div>
      <div class="p-foot"><button class="btn" id="done">Continuar</button></div>`;
    $("#done").onclick = closePlayer;
  }

  function finishPlacement() {
    const lang = P.lang, rec = Engine.placementLevel(P), lv = CEFR.find(c => c.id === rec), other = CEFR.find(c => c.id !== rec);
    playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
      ${mascot(rec === "A2" ? "cheer" : "happy", 140)}<h1>Te recomendamos: ${lv.name}</h1>
      <p class="muted">${P.correct} de ${P.correct + P.wrong} respuestas correctas a la primera. ${rec === "A2" ? "Dominas lo básico: empieza con rutina, trabajo, salud y planes." : "Empieza por lo esencial y sube de nivel cuando quieras."}</p></div></div>
      <div class="p-foot"><button class="btn ghost" id="alt">Prefiero ${other.name}</button><button class="btn" id="acc">Empezar en ${lv.name}</button></div>`;
    $("#acc").onclick = () => { chooseLevel(lang, rec); closePlayer(); };
    $("#alt").onclick = () => { chooseLevel(lang, other.id); closePlayer(); };
  }

  function outOfHearts() {
    shell();
    $("#stage").innerHTML = `<div class="center result">${mascot("sad", 150)}<h1>Te has quedado sin vidas</h1>${rocLn("noHearts")}
      <p class="muted">Con el plan Estándar tienes ${PLANS.standard.hearts} vidas al día. Se recuperan mañana. Premium te da vidas ilimitadas.</p></div>`;
    $("#foot").className = "p-foot";
    $("#fb").innerHTML = `<button class="btn ghost" id="oh-x">Salir</button>`;
    const b = $("#pBtn"); b.textContent = "Probar Premium"; b.className = "btn prem"; b.disabled = false;
    b.onclick = () => { closePlayer(); openPlans(); };
    $("#oh-x").onclick = closePlayer;
    setBar(0);
  }

  document.addEventListener("keydown", e => {
    if (!P || !modal.hidden) return;
    if (e.key === "Enter" && e.target.tagName !== "BUTTON") { e.preventDefault(); onMain(); }
    if (/^[1-4]$/.test(e.key) && e.target.tagName !== "INPUT" && !P.locked) { const o = $$(".opt:not(.m)")[+e.key - 1]; if (o) o.click(); }
  });

  /* ---------- Vocabulario diario ---------- */
  function seeded(arr, seed) {
    let h = 2166136261; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
    const rnd = () => { h += 0x6D2B79F5; let t = Math.imul(h ^ h >>> 15, 1 | h); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function levelPool(kind) {
    const lv = cefrOf(S.lang), out = [];
    for (let ui = lv.from; ui < lv.to; ui++) {
      if (!unitOpen(ui)) continue;
      const u = EX.unit(S.lang, ui);
      (kind === "s" ? u.sents : u.words).forEach(x => out.push({ ...x, ui }));
    }
    return out;
  }
  const dailyKey = () => `${S.lang}|${S.cefr[S.lang]}|${today()}`;
  function dailyRec() {
    const k = dailyKey();
    if (!S.daily[k]) {
      S.daily[k] = { known: [], practiced: false };
      const keys = Object.keys(S.daily).sort(); while (keys.length > 60) delete S.daily[keys.shift()];
    }
    return S.daily[k];
  }
  const dailyN = () => prem() ? 10 : 5;
  function todayWords() { return seeded(levelPool("w"), dailyKey() + "w").slice(0, dailyN()); }
  function todayPhrase() { return seeded(levelPool("s"), dailyKey() + "s")[0]; }

  /* ---------- Diccionario: vocabulario suelto fuera de las unidades, gratis con límites ---------- */
  const DICT_FREE_N = 2; // prácticas gratis al día en el plan Estándar
  let dictCat = null;
  const dictName = c => (uiLang() === "en" ? LEARN.en.dictNames[c.id] : c.name);
  function dictUsage() {
    if (S.dictDay !== today()) { S.dictDay = today(); S.dictUsed = 0; }
    return S.dictUsed;
  }
  const dictLeft = () => prem() ? Infinity : Math.max(0, DICT_FREE_N - dictUsage());

  function viewVocab() {
    const lang = S.lang;
    const rowHTML = x => `<li><button class="spk sm" data-t="${esc(x.t)}" aria-label="Escuchar">${ic("speaker")}</button>
      <div class="grow"><b>${EX.tgt(x.t, lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`;
    let body = "";
    if (S.vtab === "today") {
      const words = todayWords(), phrase = todayPhrase(), rec = dailyRec();
      const known = words.filter(w => rec.known.includes(w.t)).length;
      const date = new Date().toLocaleDateString(uiLang(), { weekday: "long", day: "numeric", month: "long" });
      body = `<div class="card daily-head"><div><span class="ulabel muted">${esc(date)}</span><h2>Palabras de hoy</h2>
          <p class="muted small">${cefrOf(lang).name} &middot; ${words.length} palabras${prem() ? "" : " (Premium: 10 al día)"}</p></div>
          <div class="ring" style="--p:${Math.round(known / Math.max(1, words.length) * 100)}"><b>${known}/${words.length}</b></div></div>
        <ul class="intro daily">${words.map((w, i) => `<li class="${rec.known.includes(w.t) ? "known" : ""}">
          <button class="spk sm" data-t="${esc(w.t)}" aria-label="Escuchar">${ic("speaker")}</button>
          <div class="grow"><b>${EX.tgt(w.t, lang)}</b><span class="muted">${esc(w.es)} &middot; ${esc(unitTitle(lang, w.ui))}</span></div>
          <button class="know" data-i="${i}" aria-pressed="${rec.known.includes(w.t)}" aria-label="Marcar como aprendida">${ic("check")}<span>Ya la sé</span></button></li>`).join("")}</ul>
        ${phrase ? `<div class="card phrase"><span class="ulabel muted">Frase del día</span>
          <div class="row"><button class="spk sm" data-t="${esc(phrase.t)}" aria-label="Escuchar">${ic("speaker")}</button><div class="grow"><b>${EX.tgt(phrase.t, lang)}</b><span class="muted">${esc(phrase.es)}</span></div></div></div>` : ""}
        <div class="center"><button class="btn" id="practice">${rec.practiced ? "Repasar otra vez" : "Practicar las palabras de hoy"}</button>
          ${rec.practiced ? `<p class="muted small">${ic("check")} Ya repasaste el vocabulario de hoy.</p>` : ""}</div>`;
    } else if (S.vtab === "mine") {
      const raw = $("#vq") ? $("#vq").value : "", q = EX.norm(raw);
      const groups = [];
      CEFR.forEach(c => { for (let ui = c.from; ui < c.to; ui++) {
        const w = stars(ui, 0) > 0, s = stars(ui, 1) > 0; if (!w && !s) continue;
        const u = EX.unit(lang, ui);
        const items = [...(w ? u.words : []), ...(s ? u.sents : [])].filter(x => !q || EX.norm(x.t).includes(q) || EX.norm(x.es).includes(q));
        if (items.length) groups.push(`<h3 class="vgroup">${esc(u.title)}<small>${c.id}</small></h3><ul class="intro">${items.map(rowHTML).join("")}</ul>`);
      } });
      body = `<label class="search">${ic("search")}<input id="vq" type="search" placeholder="Buscar en mis palabras" autocomplete="off" value="${esc(raw)}"></label>
        ${groups.length ? groups.join("") : `<div class="empty">${mascot("think", 100)}<p class="muted">${q ? "No hay resultados." : "Aquí aparecerán las palabras y frases de los niveles que completes."}</p></div>`}`;
    } else {
      const raw = $("#dq") ? $("#dq").value : "", q = EX.norm(raw);
      const left = dictLeft();
      const limitNote = prem() ? "" : `<p class="muted small">${ic("lock")} Plan Estándar: ${left > 0 ? `${left} de ${DICT_FREE_N} prácticas gratis hoy.` : "Sin prácticas gratis hoy. Vuelven mañana."}</p>`;
      if (raw) {
        const found = EX.dictSearch(lang, raw);
        body = `<label class="search">${ic("search")}<input id="dq" type="search" placeholder="Buscar una palabra, p. ej. cebolla" autocomplete="off" value="${esc(raw)}"></label>
          ${found.length ? `<ul class="intro">${found.map(rowHTML).join("")}</ul>` : `<div class="empty">${mascot("think", 100)}<p class="muted">No hay resultados.</p></div>`}`;
      } else if (dictCat) {
        const c = DICT_CATS.find(x => x.id === dictCat), items = EX.dictItems(lang, dictCat);
        body = `<button class="btn ghost sm" id="dictBack">${ic("back")} Categorías</button>
          <div class="card daily-head"><div><span class="ulabel muted">Diccionario</span><h2>${ic(c.icon)} ${esc(dictName(c))}</h2><p class="muted small">${items.length} palabras</p></div></div>
          <ul class="intro">${items.map(rowHTML).join("")}</ul>
          ${limitNote}
          <div class="center"><button class="btn ${left > 0 ? "" : "ghost"}" id="dictPractice">${left > 0 ? "Practicar esta categoría" : "Ver Premium"}</button></div>`;
      } else {
        body = `<label class="search">${ic("search")}<input id="dq" type="search" placeholder="Buscar una palabra, p. ej. cebolla" autocomplete="off" value=""></label>
          <p class="muted small">Vocabulario de uso diario, fuera de las unidades. Explóralo libremente; practicar tiene un límite gratis.</p>
          <div class="course-grid">${DICT_CATS.map(c => `<button class="course-card" data-cat="${c.id}"><span class="cat-ic">${ic(c.icon)}</span><b>${esc(dictName(c))}</b><span class="muted">${c.w.length} palabras</span></button>`).join("")}</div>
          ${limitNote}`;
      }
    }
    app.innerHTML = `<h1>Vocabulario</h1>
      <div class="seg"><button data-v="today" class="${S.vtab === "today" ? "on" : ""}">Hoy</button><button data-v="mine" class="${S.vtab === "mine" ? "on" : ""}">Mis palabras</button><button data-v="dict" class="${S.vtab === "dict" ? "on" : ""}">Diccionario</button></div>${body}`;
    $$(".seg button").forEach(b => b.onclick = () => { S.vtab = b.dataset.v; dictCat = null; save(); viewVocab(); });
    $$("[data-t]").forEach(b => b.onclick = () => speak(b.dataset.t, lang));
    $$(".know").forEach(b => b.onclick = () => {
      const w = todayWords()[+b.dataset.i], r = dailyRec(), at = r.known.indexOf(w.t);
      if (at >= 0) r.known.splice(at, 1); else r.known.push(w.t);
      save(); viewVocab();
    });
    const pr = $("#practice");
    if (pr) pr.onclick = () => {
      const words = todayWords(), pool = levelPool("w");
      startPlayer({ kind: "daily", lang, ex: EX.practiceWords(lang, words, pool.length >= 6 ? pool : words) });
    };
    const vq = $("#vq"); if (vq) vq.oninput = () => { const v = vq.value; viewVocab(); const n = $("#vq"); n.focus(); n.setSelectionRange(v.length, v.length); };
    const dq = $("#dq"); if (dq) dq.oninput = () => { const v = dq.value; viewVocab(); const n = $("#dq"); if (n) { n.focus(); n.setSelectionRange(v.length, v.length); } };
    $$(".course-card[data-cat]").forEach(b => b.onclick = () => { dictCat = b.dataset.cat; viewVocab(); });
    const db = $("#dictBack"); if (db) db.onclick = () => { dictCat = null; viewVocab(); };
    const dp = $("#dictPractice");
    if (dp) dp.onclick = () => {
      if (dictLeft() <= 0) return openPlans("Hoy ya usaste tus prácticas gratis del diccionario.");
      const items = EX.dictItems(lang, dictCat);
      startPlayer({ kind: "dict", lang, ex: EX.practiceWords(lang, items, EX.dictAll(lang)) });
    };
  }

  /* ---------- Repaso ---------- */
  const fmtRelDay = ms => { const d = Math.ceil((ms - Date.now()) / Engine.DAY_MS); return d <= 0 ? "hoy" : d === 1 ? "mañana" : `en ${d} días`; };
  function viewReview() {
    if (!prem()) {
      app.innerHTML = `<div class="empty">${mascot("think", 110)}<h1>Repaso espaciado</h1>
        <p class="muted">Rocco guarda cada palabra con su propia fecha de repaso: acertar la aleja en el tiempo, fallar la trae de vuelta para hoy. Es una función Premium.</p>
        <button class="btn prem" id="up">Ver Premium</button></div>`;
      $("#up").onclick = () => openPlans(); return;
    }
    const all = Object.values(S.srs[S.lang] || {}), due = Engine.srsDueCards(all, Date.now());
    app.innerHTML = `<h1>Repaso espaciado</h1>
      <div class="stat-grid">
        <div class="stat">${ic("flame", "solid")}<b>${due.length}</b><span>Pendientes hoy</span></div>
        <div class="stat">${ic("book")}<b>${all.length}</b><span>En seguimiento</span></div>
      </div>
      ${due.length
        ? `<div class="card"><p>Tienes <b>${due.length}</b> ${due.length === 1 ? "elemento" : "elementos"} listos para repasar en ${COURSES[S.lang].name.toLowerCase()}.</p>
            <button class="btn" id="go">Practicar ahora</button></div>
            <ul class="intro">${due.slice(0, 12).map(x => `<li><div><b>${EX.tgt(x.t, S.lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`).join("")}</ul>`
        : all.length
          ? `<div class="empty">${mascot("sleepy", 110)}<p class="muted">Estás al día. El próximo repaso toca ${fmtRelDay(Engine.srsNextDue(all))}.</p></div>`
          : `<div class="empty">${mascot("happy", 110)}<p class="muted">Aquí aparecerán, con su propia fecha de repaso, las palabras y frases que vayas practicando por el mapa.</p></div>`}`;
    const g = $("#go"); if (g) g.onclick = () => startPlayer({ kind: "review", lang: S.lang, ex: EX.reviewSet(S.lang, due) });
  }

  /* ---------- Perfil ---------- */
  function viewProfile() {
    const skinSample = S.lang ? esc(EX.unit(S.lang, 0).words[0].t) : "Rocco";
    const started = Object.keys(COURSES).filter(k => doneCount(k) > 0);
    app.innerHTML = `<div class="profile-head">${mascot(prem() ? "wink" : "happy", 100)}
        <div><h1>Tu perfil</h1><span class="badge ${prem() ? "prem" : ""}">${ic(prem() ? "crown" : "book")}${PLANS[S.plan].name}</span></div></div>
      <div class="stat-grid">
        <div class="stat">${ic("flame", "solid")}<b>${S.streak}</b><span>Días de racha</span></div>
        <div class="stat">${ic("star", "solid")}<b>${S.xp}</b><span>XP total</span></div>
        <div class="stat">${ic("heart", "solid")}<b>${prem() ? "&infin;" : S.hearts}</b><span>Vidas hoy</span></div>
        <div class="stat">${ic("trophy")}<b>${Object.keys(COURSES).reduce((n, k) => n + doneCount(k), 0)}</b><span>Niveles</span></div>
        <div class="stat">${ic("book")}<b>${S.lang ? wordsSeen(S.lang) : 0}</b><span>Palabras vistas</span></div>
        <div class="stat">${ic("crown")}<b>${S.lang ? sessionsDone(S.lang) : 0}</b><span>Sesiones superadas</span></div>
      </div>
      <h2>Mis cursos</h2>
      ${started.length ? started.map(k => { const p = Math.round(doneCount(k) / (UNITS.length * NL) * 100), c = cefrOf(k);
        return `<div class="card row-card">${langBadge(k, "sm")}<div class="grow"><b>${COURSES[k].name}</b>${c ? `<span class="muted small"> &middot; ${c.name}</span>` : ""}<div class="bar"><i style="width:${p}%"></i></div></div><span class="muted">${p}%</span></div>`; }).join("")
        : `<p class="muted">Todavía no has completado ningún nivel.</p>`}
      <div class="center" style="margin-top:20px"><button class="btn ${prem() ? "ghost" : "prem"}" id="pl">${prem() ? "Gestionar plan" : "Mejorar a Premium"}</button></div>
      <div class="card skin-pick"><b>Estilo de las piezas</b>${prem() ? "" : `<span class="muted small">El estilo Clásico es gratis; los demás son Premium.</span>`}
        <div class="skin-grid">${SKINS.map((k, n) => `<button type="button" class="skin-opt ${skinId() === k.id ? "on" : ""} ${k.id !== "standard" && !prem() ? "locked" : ""}" data-skin="${k.id}" aria-pressed="${skinId() === k.id}">
          <span class="skin-prev"><span class="pz c${(n * 3 + 1) % 8} skinprev" data-skin="${k.id}"><svg class="pzs" aria-hidden="true"></svg><span class="pzt">${skinSample}</span></span></span>
          <b>${k.name}</b>${k.id !== "standard" && !prem() ? ic("lock", "corner") : ""}</button>`).join("")}</div></div>
      <div class="card native-pick"><b>Rocco te acompaña</b><span class="muted small">Aparece a veces en el mapa con comentarios y pequeñas animaciones. Puedes desactivarlo.</span>
        <div class="native-chips" role="group" aria-label="Rocco te acompaña">${[[1, "Activado"], [0, "Desactivado"]].map(([v, n]) => `<button class="chip ${(S.rocco !== false) === !!v ? "on" : ""}" data-rocco="${v}" aria-pressed="${(S.rocco !== false) === !!v}">${n}</button>`).join("")}</div></div>
      <div class="card native-pick"><b>Idioma de la interfaz</b>
        <div class="native-chips" data-notr role="group" aria-label="Idioma de la interfaz">${[["es", "Español"], ["en", "English"]].map(([k, n]) => `<button class="chip ${uiLang() === k ? "on" : ""}" data-ui="${k}" aria-pressed="${uiLang() === k}">${n}</button>`).join("")}</div></div>
      <p class="credits">Voces generadas con <a href="https://github.com/OHF-Voice/piper1-gpl" target="_blank" rel="noopener">Piper</a>.
        Francés: «Siwis French Speech Synthesis Database», Universidad de Edimburgo — <a href="https://datashare.ed.ac.uk/handle/10283/2353" target="_blank" rel="noopener">CC BY 4.0</a>.
        Italiano: «serena-synthetic-it-27h», committa — <a href="https://huggingface.co/datasets/committa/serena-synthetic-it-27h" target="_blank" rel="noopener">CC BY 4.0</a>.
        Español: voz «claude» (es_MX) de rhasspy/piper-voices — Apache-2.0.
        Rumano: Google Cloud Text-to-Speech (voz Chirp 3 HD).</p>`;
    $("#pl").onclick = () => openPlans();
    $$(".native-chips .chip[data-ui]").forEach(b => b.onclick = () => { S.ui = b.dataset.ui; applyLangs(); save(); render(); });
    $$(".chip[data-rocco]").forEach(b => b.onclick = () => { S.rocco = b.dataset.rocco === "1"; save(); palStop(); viewProfile(); });
    $$(".skinprev").forEach(el => shapePiece(el, el.dataset.skin));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => $$(".skinprev").forEach(el => { el._sk = null; shapePiece(el, el.dataset.skin); }));
    $$(".skin-opt").forEach(b => b.onclick = () => {
      if (b.dataset.skin !== "standard" && !prem()) return openPlans("Los estilos de piezas son una función Premium.");
      S.skin = b.dataset.skin; save(); applySkin(); viewProfile();
    });
  }

  /* ---------- Planes ---------- */
  function openPlans(msg) {
    const f = (ok, t) => `<li class="${ok ? "" : "no"}">${ic(ok ? "check" : "lock")}<span>${t}</span></li>`;
    modal.hidden = false;
    modal.innerHTML = `<div class="box wide">
      <div class="row between"><h2>Elige tu plan</h2><button class="icon-btn" id="x" aria-label="Cerrar">${ic("x")}</button></div>
      ${msg ? `<p class="fb-note">${ic("crown")}<span>${esc(msg)}</span></p>` : ""}
      <div class="plans">
        <div class="plan ${S.plan === "standard" ? "current" : ""}"><h3>Estándar</h3><div class="price">Gratis</div>
          <ul>${f(1, "1 curso de idioma a tu elección")}${f(1, "5 sesiones: A1, A2, B1, B2 y C1")}${f(1, "Unidades 1 a 3 de cada sesión (75 niveles)")}${f(1, "5 vidas al día")}${f(1, "5 palabras del día")}${f(1, "Rompecabezas, escritura y parejas")}${f(0, "Voz natural y ejercicios de escucha")}${f(0, "Repaso de errores")}${f(0, "Todos los idiomas y cualquier combinación")}</ul>
          <button class="btn ghost" id="pStd" ${S.plan === "standard" ? "disabled" : ""}>${S.plan === "standard" ? "Tu plan actual" : "Volver a Estándar"}</button></div>
        <div class="plan featured ${prem() ? "current" : ""}"><span class="ribbon">${ic("crown", "solid")}Más completo</span><h3>Premium</h3>
          <div class="price">7,99 &euro;<small>/mes</small></div><div class="muted small">o 59,99 &euro; al año</div>
          <ul>${f(1, "Todos los idiomas y cualquier combinación, cambia cuando quieras")}${f(1, "50 unidades por curso (250 niveles)")}${f(1, "Vidas ilimitadas")}${f(1, "10 palabras del día")}${f(1, "Voz natural en todas las frases")}${f(1, "Ejercicios de escucha")}${f(1, "Repaso inteligente de errores")}</ul>
          <button class="btn prem" id="pPre" ${prem() ? "disabled" : ""}>${prem() ? "Tu plan actual" : "Hazte Premium"}</button></div>
      </div></div>`;
    $("#x").onclick = closeModal;
    $("#pStd").onclick = () => { S.plan = "standard"; save(); closeModal(); render(); };
    $("#pPre").onclick = checkout;
  }
  function checkout() {
    modal.innerHTML = `<div class="box center">${mascot("love", 90)}<h2>Pago de demostración</h2>
      <p class="muted">No se cobra nada ni se guardan datos de tarjeta. Para cobrar de verdad hay que conectar un procesador de pagos.</p>
      <div class="row center"><button class="btn ghost" id="no">Cancelar</button><button class="btn prem" id="pay">Activar Premium</button></div></div>`;
    $("#no").onclick = closeModal;
    $("#pay").onclick = () => { S.plan = "premium"; save(); closeModal(); if (S.lang) loadPack(S.lang); if (P) closePlayer(); else render(); };
  }

  render();
})();
