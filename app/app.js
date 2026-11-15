(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const KEY = "lingo-state-v3";
  const today = () => new Date().toISOString().slice(0, 10);
  const LV = EX.LEVELS, NL = LV.length;
  const canSpeak = "speechSynthesis" in window;

  /* ---------- Estado ---------- */
  let S = load();
  function load() {
    const d = { plan: "standard", lang: null, xp: 0, streak: 0, lastDay: null, hearts: 5, heartsDay: today(), progress: {}, mistakes: {}, cefr: {}, daily: {}, tab: "learn", pick: false, vtab: "today", mute: false };
    try {
      const old = JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("lingo-state-v2")) || {};
      Object.assign(d, old);
    } catch (e) {}
    if (d.heartsDay !== today()) { d.hearts = 5; d.heartsDay = today(); }
    return d;
  }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const prem = () => S.plan === "premium";
  const unitOpen = ui => prem() || (ui - EX.lvStart(ui)) < PLANS.standard.units;
  const stars = (ui, li, lang = S.lang) => (S.progress[lang] || {})[ui + "-" + li] || 0;
  const doneCount = (lang, range) => Object.keys(S.progress[lang] || {}).filter(k => { const [u, l] = k.split("-").map(Number); return l < NL && (!range || (u >= range.from && u < range.to)); }).length;
  const cefrOf = lang => CEFR.find(c => c.id === S.cefr[lang]) || null;
  let levelPickFor = null;

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
        fetch(`audio/${lang}.json`).then(r => r.ok ? r.json() : Promise.reject()),
        fetch(`audio/${lang}.mp3`).then(r => r.ok ? r.arrayBuffer() : Promise.reject())
      ]);
      return { idx, buf, urls: {} };
    })().catch(() => null);
    return PACK[lang];
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
      <div class="brand">${mascot("happy", 34)}<span>Lingo</span></div>
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

  function render() {
    renderTop();
    if (!S.lang || S.pick) return viewCourses();
    if (levelPickFor || !cefrOf(S.lang)) { levelPickFor = S.lang; return viewLevelPick(); }
    ({ learn: viewLearn, vocab: viewVocab, review: viewReview, profile: viewProfile }[S.tab] || viewLearn)();
  }

  /* ---------- Cursos y nivel ---------- */
  function viewCourses() {
    app.innerHTML = `
      <div class="hero-pick">${mascot("happy", 84)}
        <div><h1>¿Qué idioma quieres aprender?</h1>
        <p class="muted">${prem() ? "Con Premium puedes cambiar de curso cuando quieras." : "Con el plan Estándar eliges 1 curso. Premium desbloquea los 7."}</p></div></div>
      <div class="course-grid">${Object.keys(COURSES).map(k => {
        const locked = !prem() && S.lang && S.lang !== k;
        const n = doneCount(k), c = cefrOf(k);
        return `<button class="course-card ${S.lang === k ? "cur" : ""} ${locked ? "locked" : ""}" data-k="${k}">
          ${langBadge(k, "lg")}<b>${COURSES[k].name}</b>
          <span class="muted">${locked ? "Solo Premium" : c ? c.name + " &middot; " + n + " niveles" : "20 unidades"}</span>
          ${locked ? ic("lock", "corner") : ""}</button>`;
      }).join("")}</div>
      ${S.lang ? `<div class="center"><button class="btn ghost" id="cancelPick">Volver al curso</button></div>` : ""}`;
    $$(".course-card").forEach(b => b.onclick = () => {
      const k = b.dataset.k;
      if (!prem() && S.lang && S.lang !== k) return openPlans("Aprender más de un idioma es una función Premium.");
      S.lang = k; S.pick = false; S.tab = "learn"; levelPickFor = cefrOf(k) ? null : k; save(); render();
      if (prem()) loadPack(k);
    });
    const c = $("#cancelPick"); if (c) c.onclick = () => { S.pick = false; save(); render(); };
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
    S.cefr[lang] = id; levelPickFor = null; S.tab = "learn"; viewLearn.scrolled = false; save(); render(); window.scrollTo(0, 0);
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
    let html = `<div class="course-head"><div><span class="muted">Curso de</span><h1>${C.name}</h1></div>
      <div class="ring" style="--p:${pct}"><b>${pct}%</b></div></div>
      <div class="seg" role="tablist" aria-label="Nivel">${CEFR.map(c => `<button role="tab" data-c="${c.id}" class="${c.id === lv.id ? "on" : ""}">${c.name}<small>${c.id}</small></button>`).join("")}</div>`;
    if (!prem()) html += `<div class="note-card"><div>${ic("crown", "gold")}</div><div><b>Plan Estándar</b><span>Unidades 1 a ${PLANS.standard.units} de cada nivel y ${PLANS.standard.hearts} vidas al día.</span></div><button class="btn sm prem" id="upg">Mejorar</button></div>`;

    for (let ui = lv.from; ui < lv.to; ui++) {
      const U = UNITS[ui], un = ui - lv.from;
      const NN = NL + (EX.hasSituation(ui) ? 1 : 0);
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
    app.innerHTML = html;
    const u = $("#upg"); if (u) u.onclick = () => openPlans();
    $$(".seg button").forEach(b => b.onclick = () => chooseLevel(S.lang, b.dataset.c));
    $$(".node").forEach(n => n.onclick = () => openLevel(+n.dataset.ui, +n.dataset.li));
    if (!viewLearn.scrolled) { viewLearn.scrolled = true; const c = $(".node.current"); if (c) setTimeout(() => c.scrollIntoView({ block: "center" }), 30); }
  }

  /* ---------- Hoja de nivel ---------- */
  function openSituation(ui) {
    const s = stars(ui, NL);
    modal.hidden = false;
    modal.innerHTML = `<div class="box center"><div class="sheet-ic situ">${ic("bolt")}</div>
      <span class="ulabel">Unidad ${ui - EX.lvStart(ui) + 1} &middot; ${UNITS[ui].title}</span><h2>Situación</h2>
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
    $("#pBar").style.width = "0%";
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
      <span class="ulabel">Unidad ${un + 1} &middot; ${UNITS[ui].title}</span><h2>${L.name}</h2><p class="muted">${L.desc}</p>${note}
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
      ${sample ? `<h3 class="vgroup">Dos frases para componer como un puzle</h3><ul class="intro">${sample.map((x, i) => `<li><button class="spk sm" data-j="${i}" aria-label="Escuchar">${ic("speaker")}</button>
        <div><b>${EX.tgt(x.t, S.lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`).join("")}</ul>` : ""}`;
    $$(".intro .spk[data-i]").forEach(b => b.onclick = () => speak(items[+b.dataset.i].t, S.lang));
    $$(".intro .spk[data-j]").forEach(b => b.onclick = () => speak(sample[+b.dataset.j].t, S.lang));
    $("#foot").className = "p-foot";
    $("#pBtn").textContent = "Empezar"; $("#pBtn").disabled = false;
    $("#pBtn").onclick = then;
    $("#pBar").style.width = "0%";
  }

  /* ---------- Reproductor de ejercicios ---------- */
  let P = null;
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

  const freeKind = () => P && (P.kind === "placement" || P.kind === "daily" || P.kind === "situation");

  function startPlayer(cfg) {
    P = { ...cfg, q: [...cfg.ex], i: 0, wrong: 0, correct: 0, retries: new Map(), locked: false, check: null, combo: 0, teardown: null };
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
    if (P.teardown) { P.teardown(); P.teardown = null; }
    const ex = P.ex = P.q[P.i];
    P.locked = false; P.check = null;
    $("#pBar").style.width = Math.round(P.i / P.q.length * 100) + "%";
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
    P.check = () => sel < 0 ? null : { ok: ex.options[sel] === ex.answer, correct: ex.optTarget ? tg(ex.answer) : esc(ex.answer), mark: () => {
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
    P.check = () => {
      const v = EX.norm(inp.value); if (!v) return null;
      const acc = [EX.norm(ex.answer)]; if (L === "ru") acc.push(EX.norm(EX.translit(ex.answer)));
      return { ok: acc.includes(v), correct: tg(ex.answer) };
    };
  }

  /* --- rompecabezas de frases --- */
  const KR = 8; // radio de la pestaña del puzle
  function pzPath(w, h, first, last) {
    const m = h / 2;
    let d = `M0 0H${w}`;
    if (!last) d += `V${m - KR}A${KR} ${KR} 0 1 1 ${w} ${m + KR}`;
    d += `V${h}H0`;
    if (!first) d += `V${m + KR}A${KR} ${KR} 0 1 0 0 ${m - KR}`;
    return d + "Z";
  }
  let pzUid = 0;
  function shapePiece(el) {
    const svg = el.querySelector("svg"); if (!svg) return;
    const w = el.offsetWidth, h = el.offsetHeight;
    const d = pzPath(w, h, el.classList.contains("first"), el.classList.contains("last")), id = "pc" + (++pzUid);
    svg.setAttribute("width", w); svg.setAttribute("height", h); svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.innerHTML = `<defs><clipPath id="${id}"><path d="${d}"/></clipPath></defs>
      <path class="sh" d="${d}" transform="translate(0 5)"/><path class="fl" d="${d}"/>
      <g clip-path="url(#${id})"><rect class="gl" x="-2" y="0" width="${w + 4}" height="${h * .46}"/><rect class="gl2" x="-2" y="${h * .8}" width="${w + 4}" height="${h * .2}"/></g>`;
  }

  function exBank(ex) {
    const N = ex.answerTokens.length, slots = Array(N).fill(-1);
    const txt = i => ex.bankTarget ? tg(ex.bank[i]) : esc(ex.bank[i]);
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      ${ex.audio ? audioBlock() : bubble(ex.promptTarget ? tg(ex.prompt) : esc(ex.prompt), ex.promptTarget)}
      <p class="muted small puzzle-hint">Arrastra las piezas al tablero, o tócalas.</p>
      <div class="board" id="board" aria-label="Tablero"></div>
      <div class="bank" id="bank" aria-label="Piezas"></div>`;
    if (ex.audio) bindAudio(ex.audio); else if (ex.promptTarget) bindBubbleSpeak(ex.prompt);

    let landed = -1;
    const piece = (i, cls) => `<button type="button" class="pz c${i % 8} ${cls}" style="--i:${i};--rot:${(i * 37 % 7) - 3}deg;--d:${(i * 0.37).toFixed(2)}s" data-i="${i}"><svg class="pzs" aria-hidden="true"></svg><span class="pzt">${txt(i)}</span></button>`;
    const draw = () => {
      $("#board").innerHTML = slots.map((pi, s) => {
        const pos = (s === 0 ? "first " : "") + (s === N - 1 ? "last" : "");
        return `<div class="slot" data-s="${s}">${pi >= 0 ? piece(pi, pos + (s === landed ? " landed" : "")) : `<span class="pz empty ${pos}"><svg class="pzs" aria-hidden="true"></svg></span>`}</div>`;
      }).join("");
      $("#bank").innerHTML = ex.bank.map((w, i) => slots.includes(i)
        ? `<span class="pz ghost" style="--i:${i}"><svg class="pzs" aria-hidden="true"></svg><span class="pzt">${txt(i)}</span></span>`
        : piece(i, "")).join("");
      $$("#board .pz, #bank .pz").forEach(shapePiece);
      setReady(slots.every(x => x >= 0));
      if (landed >= 0) {
        const el = $(`#board .slot[data-s="${landed}"] .pz`);
        if (el) { const r = el.getBoundingClientRect(); fxBurst(r.left + r.width / 2, r.top + r.height / 2, 7, undefined, 38); }
        sfx.pop(slots.filter(x => x >= 0).length - 1); vibrate(8);
        landed = -1;
      }
    };
    draw();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => P && P.ex === ex && $$("#board .pz, #bank .pz").forEach(shapePiece));

    const place = (i, to) => { slots[to] = i; landed = to; };
    const tap = (i, from) => {
      if (from >= 0) { slots[from] = -1; sfx.back(); }
      else { const e = slots.indexOf(-1); if (e >= 0) place(i, e); }
    };
    const nearest = (x, y) => {
      let best = null, bd = 95;
      $$("#board .slot").forEach(s => { const r = s.getBoundingClientRect(), dd = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2)); if (dd < bd) { bd = dd; best = s; } });
      return best;
    };
    let drag = null;
    const stage = $("#stage");
    const cleanup = () => {
      window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); window.removeEventListener("pointercancel", onCancel);
      if (drag && drag.ghost) drag.ghost.remove();
      $$(".slot.over").forEach(x => x.classList.remove("over"));
    };
    const onDown = e => {
      const el = e.target.closest(".pz[data-i]");
      if (!el || P.locked || (e.button && e.button !== 0)) return;
      const sl = el.closest(".slot");
      drag = { i: +el.dataset.i, from: sl ? +sl.dataset.s : -1, x0: e.clientX, y0: e.clientY, lx: e.clientX, moved: false, el, ghost: null };
      window.addEventListener("pointermove", onMove); window.addEventListener("pointerup", onUp); window.addEventListener("pointercancel", onCancel);
    };
    const onMove = e => {
      if (!drag) return;
      if (!drag.moved && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) > 8) {
        drag.moved = true;
        const g = drag.el.cloneNode(true); g.classList.add("dragging"); g.removeAttribute("data-i");
        document.body.appendChild(g); drag.ghost = g; drag.el.classList.add("lifting"); sfx.back();
      }
      if (drag.moved) {
        const tilt = Math.max(-16, Math.min(16, (e.clientX - drag.lx) * .8)); drag.lx = e.clientX;
        drag.ghost.style.left = e.clientX + "px"; drag.ghost.style.top = e.clientY + "px";
        drag.ghost.style.transform = `translate(-50%,-60%) scale(1.12) rotate(${tilt}deg)`;
        const s = nearest(e.clientX, e.clientY);
        $$(".slot.over").forEach(x => x.classList.remove("over")); if (s) s.classList.add("over");
      }
    };
    const onUp = e => {
      if (!drag) return;
      const d = drag; cleanup(); drag = null;
      if (!d.moved) tap(d.i, d.from);
      else {
        const t = document.elementFromPoint(e.clientX, e.clientY);
        const s = nearest(e.clientX, e.clientY), inBank = t && t.closest("#bank");
        if (s) {
          const to = +s.dataset.s, occ = slots[to];
          if (d.from >= 0) slots[d.from] = occ;
          place(d.i, to);
        } else if (inBank && d.from >= 0) { slots[d.from] = -1; sfx.back(); }
      }
      draw();
    };
    const onCancel = () => { cleanup(); drag = null; draw(); };
    const onClick = e => { // teclado: Enter / espacio
      if (e.detail !== 0 || P.locked) return;
      const el = e.target.closest(".pz[data-i]"); if (!el) return;
      const sl = el.closest(".slot"); tap(+el.dataset.i, sl ? +sl.dataset.s : -1); draw();
      const nx = $(`.pz[data-i="${el.dataset.i}"]`); if (nx) nx.focus();
    };
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("click", onClick);
    P.teardown = () => { stage.removeEventListener("pointerdown", onDown); stage.removeEventListener("click", onClick); cleanup(); };

    P.check = () => slots.some(x => x < 0) ? null : {
      ok: EX.norm(slots.map(i => ex.bank[i]).join(" ")) === EX.norm(ex.answerText),
      correct: ex.bankTarget ? tg(ex.answerText) : esc(ex.answerText),
      mark: () => {
        let all = true;
        slots.forEach((pi, s) => {
          const good = EX.norm(EX.core(ex.bank[pi])) === EX.norm(EX.core(ex.answerTokens[s]));
          if (!good) all = false;
          const el = $(`.slot[data-s="${s}"] .pz`); if (el) { el.classList.add(good ? "ok" : "bad"); el.style.animationDelay = (s * 70) + "ms"; }
        });
        if (all) $("#board").classList.add("solved");
      }
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
    P.check = () => busy ? null : {
      ok: cur === ex.target, showOk: true,
      correct: `<span class="tone-chip t-${ex.target}">${ic(TONES[ex.target].icon)}${TONES[ex.target].name}</span> ${TONES[ex.target].use}`,
      mark: () => $$("#tpick .tone-btn").forEach(b => { if (b.dataset.t === ex.target) b.classList.add("ok"); else if (b.dataset.t === cur) b.classList.add("bad"); })
    };
  }

  /* --- escena: calmar a un personaje --- */
  function exScene(ex) {
    let turn = 0, mood = ex.start, busy = false;
    const face = m => m < 35 ? "angry" : m < 60 ? "annoyed" : m < 80 ? "neutral" : "happy";
    $("#stage").innerHTML = `<h2 class="ex-title">${esc(ex.title)}</h2><p class="muted scene-intro">${esc(ex.intro)}</p>
      <div class="char-row"><div class="char" id="char"></div><div class="char-info"><b>${esc(ex.who)}</b>
        <div class="mood" role="meter" aria-label="Ánimo" aria-valuemin="0" aria-valuemax="100"><i id="mfill"></i><span class="goal" style="left:${ex.goal}%"></span><em id="mdelta"></em></div>
        <div class="mood-labels"><span>Enfadado</span><span>Tranquilo</span></div></div></div>
      <div class="bubble big" id="cline"></div>
      <div class="turn-dots" id="tdots"></div>
      <div class="scene-opts" id="sopts"></div>`;
    const paint = delta => {
      $("#char").innerHTML = person(face(mood), ex.hue, 96);
      const f = $("#mfill"); f.style.width = mood + "%"; f.className = mood >= ex.goal ? "hi" : mood >= 50 ? "mid" : "lo";
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
      mood = Math.max(0, Math.min(100, mood + o.d)); paint(o.d);
      $$("#sopts .pz").forEach(x => { if (x === btn) x.classList.add(o.d > 0 ? "ok" : "bad"); else x.classList.add("dim"); shapePiece(x); });
      o.d > 0 ? sfx.ok() : sfx.bad(); vibrate(o.d > 0 ? [10, 20, 10] : 25);
      const r = btn.getBoundingClientRect(); fxBurst(r.left + r.width / 2, r.top + r.height / 2, o.d > 0 ? 16 : 6, o.d > 0 ? undefined : ["#e5484d"], 80);
      const last = turn === ex.turns.length - 1;
      $("#foot").className = "p-foot " + (o.d > 0 ? "ok" : "bad");
      $("#fb").innerHTML = `<div class="fb-in"><span class="fb-ic">${ic(o.d > 0 ? "check" : "x")}</span><div><b>${o.d > 0 ? "Esto lo calma" : "Esto lo molesta"} (${o.d > 0 ? "+" : ""}${o.d})</b><div class="fb-ans">${esc(o.why)}</div></div></div>`;
      setBtn(last ? "Ver resultado" : "Continuar", false, () => {
        if (!last) { turn++; drawTurn(); return; }
        const ok = mood >= ex.goal;
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
    P.check = () => sel < 0 ? null : { ok: EX.norm(ex.options[sel]) === EX.norm(ex.answer), correct: tg(ex.full), mark: () => {
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
          if (!freeKind()) missed.forEach(id => remember(ex.items[+id]));
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
    const r = P.check && P.check();
    if (!r) return;
    if (r.mark) r.mark();
    reveal(r.ok, r.correct, { showOk: r.showOk });
  }

  const PRAISE = ["¡Muy bien!", "¡Correcto!", "¡Excelente!", "¡Así se hace!", "¡Perfecto!"];
  function remember(item) {
    if (!item || freeKind()) return;
    const m = (S.mistakes[P.lang] = S.mistakes[P.lang] || []);
    if (!m.some(x => x.es === item.es && x.t === item.t)) m.unshift({ es: item.es, t: item.t, k: item.k });
    S.mistakes[P.lang] = m.slice(0, 40);
  }
  function forget(item) {
    if (!item || !S.mistakes[P.lang]) return;
    S.mistakes[P.lang] = S.mistakes[P.lang].filter(x => !(x.es === item.es && x.t === item.t));
  }

  function reveal(ok, correctHTML, o = {}) {
    P.locked = true;
    const ex = P.ex;
    P.combo = ok ? (P.combo || 0) + 1 : 0;
    if (ok) { P.correct++; if (P.kind === "review") forget(ex.item); }
    else {
      P.wrong++;
      if (!prem() && !freeKind()) { S.hearts = Math.max(0, S.hearts - 1); $("#pHearts").textContent = S.hearts; }
      if (!o.skipRemember) remember(ex.item);
      const n = P.retries.get(ex) || 0;
      if (!o.noRetry && P.kind !== "placement" && n < 2) { P.retries.set(ex, n + 1); P.q.push(ex); }
    }
    save(); renderTop();
    const praise = o.okMsg || (P.kind === "placement" ? "Respuesta registrada" : PRAISE[Math.floor(Math.random() * PRAISE.length)]);
    $("#foot").className = "p-foot " + (ok ? "ok" : "bad");
    $("#fb").innerHTML = ok
      ? `<div class="fb-in"><span class="fb-ic">${ic("check")}</span><div><b>${praise}</b>${P.combo >= 3 ? `<span class="combo-note">${ic("flame", "solid")} Racha x${P.combo}</span>` : ""}${o.showOk && correctHTML ? `<div class="fb-ans">${correctHTML}</div>` : ""}</div></div>`
      : `<div class="fb-in"><span class="fb-ic">${ic("x")}</span><div><b>${o.msg || "Respuesta correcta"}</b>${correctHTML ? `<div class="fb-ans">${correctHTML}</div>` : ""}</div></div>`;
    const btn = $("#pBtn"); btn.textContent = "Continuar"; btn.disabled = false; btn.classList.remove("pulse"); btn.focus();
    $("#pBar").style.width = Math.round((P.i + 1) / P.q.length * 100) + "%";
    // jugo: mascota, sonido, confeti y racha
    const sm = $(".say .mascot"); if (sm) sm.outerHTML = mascot(ok ? "cheer" : "sad", 64);
    if (ok) {
      if (ex.type === "bank") {
        sfx.win(); const b = $("#board");
        if (b) { const r = b.getBoundingClientRect(); fxBurst(r.left + r.width / 2, r.top + r.height / 2, 30, undefined, 150); }
      } else sfx.ok();
      vibrate([12, 30, 12]);
    } else { sfx.bad(); vibrate(35); }
    updateCombo();
  }

  function next() {
    if (!prem() && !freeKind() && S.hearts <= 0) return outOfHearts();
    P.i++;
    if (P.i >= P.q.length) return finish();
    renderEx();
  }

  function touchStreak() {
    const t = today(); if (S.lastDay === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak = S.lastDay === y ? S.streak + 1 : 1; S.lastDay = t;
  }

  function finish() {
    if (P.kind === "placement") return finishPlacement();
    const star = P.wrong === 0 ? 3 : P.wrong <= 2 ? 2 : 1;
    const total = P.correct + P.wrong, acc = Math.round(P.correct / Math.max(1, total) * 100);
    const xp = P.correct * 2 + 10 + (P.wrong === 0 ? 5 : 0);
    S.xp += xp; touchStreak();
    let title = "Repaso completado", extra = "";
    if (P.kind === "level") {
      const p = (S.progress[P.lang] = S.progress[P.lang] || {}), k = P.ui + "-" + P.li;
      p[k] = Math.max(p[k] || 0, star);
      title = P.li === NL - 1 ? "Unidad completada" : "Nivel completado";
      if (P.li === NL - 1) extra = `<p class="muted">Has terminado la unidad ${P.ui - EX.lvStart(P.ui) + 1}: ${UNITS[P.ui].title}.</p>`;
    } else if (P.kind === "situation") {
      const p = (S.progress[P.lang] = S.progress[P.lang] || {}), k = P.ui + "-" + NL;
      p[k] = Math.max(p[k] || 0, star);
      title = "Situación superada";
      extra = `<p class="muted">Has elegido el tono adecuado en la unidad ${P.ui - EX.lvStart(P.ui) + 1}.</p>`;
    } else if (P.kind === "daily") {
      title = "Vocabulario de hoy repasado";
      dailyRec().practiced = true;
    }
    save(); renderTop();
    viewLearn.scrolled = false;
    playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
      ${mascot("cheer", 150)}<h1>${title}</h1>${extra}
      ${P.kind === "level" || P.kind === "situation" ? `<div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= star ? "on" : "off"))).join("")}</div>` : ""}
      <div class="res-stats"><div class="rs xp">${ic("star", "solid")}<b>+${xp}</b><span>XP</span></div>
        <div class="rs acc">${ic("check")}<b>${acc}%</b><span>Precisión</span></div></div></div></div>
      <div class="p-foot"><button class="btn" id="done">Continuar</button></div>`;
    $("#done").onclick = closePlayer;
  }

  function finishPlacement() {
    const lang = P.lang, rec = P.wrong <= 2 ? "A2" : "A1", lv = CEFR.find(c => c.id === rec), other = CEFR.find(c => c.id !== rec);
    playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
      ${mascot(rec === "A2" ? "cheer" : "happy", 140)}<h1>Te recomendamos: ${lv.name}</h1>
      <p class="muted">${P.correct} de ${P.correct + P.wrong} respuestas correctas a la primera. ${rec === "A2" ? "Dominas lo básico: empieza con rutina, trabajo, salud y planes." : "Empieza por lo esencial y sube de nivel cuando quieras."}</p></div></div>
      <div class="p-foot"><button class="btn ghost" id="alt">Prefiero ${other.name}</button><button class="btn" id="acc">Empezar en ${lv.name}</button></div>`;
    $("#acc").onclick = () => { chooseLevel(lang, rec); closePlayer(); };
    $("#alt").onclick = () => { chooseLevel(lang, other.id); closePlayer(); };
  }

  function outOfHearts() {
    shell();
    $("#stage").innerHTML = `<div class="center result">${mascot("sad", 150)}<h1>Te has quedado sin vidas</h1>
      <p class="muted">Con el plan Estándar tienes ${PLANS.standard.hearts} vidas al día. Se recuperan mañana. Premium te da vidas ilimitadas.</p></div>`;
    $("#foot").className = "p-foot";
    $("#fb").innerHTML = `<button class="btn ghost" id="oh-x">Salir</button>`;
    const b = $("#pBtn"); b.textContent = "Probar Premium"; b.className = "btn prem"; b.disabled = false;
    b.onclick = () => { closePlayer(); openPlans(); };
    $("#oh-x").onclick = closePlayer;
    $("#pBar").style.width = "0%";
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

  function viewVocab() {
    const lang = S.lang;
    const rowHTML = x => `<li><button class="spk sm" data-t="${esc(x.t)}" aria-label="Escuchar">${ic("speaker")}</button>
      <div class="grow"><b>${EX.tgt(x.t, lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`;
    let body = "";
    if (S.vtab === "today") {
      const words = todayWords(), phrase = todayPhrase(), rec = dailyRec();
      const known = words.filter(w => rec.known.includes(w.t)).length;
      const date = new Date().toLocaleDateString("es", { weekday: "long", day: "numeric", month: "long" });
      body = `<div class="card daily-head"><div><span class="ulabel muted">${esc(date)}</span><h2>Palabras de hoy</h2>
          <p class="muted small">${cefrOf(lang).name} &middot; ${words.length} palabras${prem() ? "" : " (Premium: 10 al día)"}</p></div>
          <div class="ring" style="--p:${Math.round(known / Math.max(1, words.length) * 100)}"><b>${known}/${words.length}</b></div></div>
        <ul class="intro daily">${words.map((w, i) => `<li class="${rec.known.includes(w.t) ? "known" : ""}">
          <button class="spk sm" data-t="${esc(w.t)}" aria-label="Escuchar">${ic("speaker")}</button>
          <div class="grow"><b>${EX.tgt(w.t, lang)}</b><span class="muted">${esc(w.es)} &middot; ${esc(UNITS[w.ui].title)}</span></div>
          <button class="know" data-i="${i}" aria-pressed="${rec.known.includes(w.t)}" aria-label="Marcar como aprendida">${ic("check")}<span>Ya la sé</span></button></li>`).join("")}</ul>
        ${phrase ? `<div class="card phrase"><span class="ulabel muted">Frase del día</span>
          <div class="row"><button class="spk sm" data-t="${esc(phrase.t)}" aria-label="Escuchar">${ic("speaker")}</button><div class="grow"><b>${EX.tgt(phrase.t, lang)}</b><span class="muted">${esc(phrase.es)}</span></div></div></div>` : ""}
        <div class="center"><button class="btn" id="practice">${rec.practiced ? "Repasar otra vez" : "Practicar las palabras de hoy"}</button>
          ${rec.practiced ? `<p class="muted small">${ic("check")} Ya repasaste el vocabulario de hoy.</p>` : ""}</div>`;
    } else {
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
    }
    app.innerHTML = `<h1>Vocabulario</h1>
      <div class="seg two"><button data-v="today" class="${S.vtab === "today" ? "on" : ""}">Hoy</button><button data-v="mine" class="${S.vtab === "mine" ? "on" : ""}">Mis palabras</button></div>${body}`;
    $$(".seg button").forEach(b => b.onclick = () => { S.vtab = b.dataset.v; save(); viewVocab(); });
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
  }

  /* ---------- Repaso ---------- */
  function viewReview() {
    const m = (S.mistakes[S.lang] || []);
    if (!prem()) {
      app.innerHTML = `<div class="empty">${mascot("think", 110)}<h1>Repaso de errores</h1>
        <p class="muted">Lumi recuerda lo que fallas y crea una práctica solo con eso. Es una función Premium.</p>
        <button class="btn prem" id="up">Ver Premium</button></div>`;
      $("#up").onclick = () => openPlans(); return;
    }
    app.innerHTML = `<h1>Repaso de errores</h1>
      ${m.length ? `<div class="card"><p>Tienes <b>${m.length}</b> ${m.length === 1 ? "elemento" : "elementos"} para repasar en ${COURSES[S.lang].name.toLowerCase()}.</p>
        <button class="btn" id="go">Practicar ahora</button></div>
        <ul class="intro">${m.slice(0, 12).map(x => `<li><div><b>${EX.tgt(x.t, S.lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`).join("")}</ul>`
      : `<div class="empty">${mascot("happy", 110)}<p class="muted">No tienes errores pendientes. Sigue avanzando por el mapa.</p></div>`}`;
    const g = $("#go"); if (g) g.onclick = () => startPlayer({ kind: "review", lang: S.lang, ex: EX.reviewSet(S.lang, m) });
  }

  /* ---------- Perfil ---------- */
  function viewProfile() {
    const started = Object.keys(COURSES).filter(k => doneCount(k) > 0);
    app.innerHTML = `<div class="profile-head">${mascot(prem() ? "cheer" : "happy", 100)}
        <div><h1>Tu perfil</h1><span class="badge ${prem() ? "prem" : ""}">${ic(prem() ? "crown" : "book")}${PLANS[S.plan].name}</span></div></div>
      <div class="stat-grid">
        <div class="stat">${ic("flame", "solid")}<b>${S.streak}</b><span>Días de racha</span></div>
        <div class="stat">${ic("star", "solid")}<b>${S.xp}</b><span>XP total</span></div>
        <div class="stat">${ic("heart", "solid")}<b>${prem() ? "&infin;" : S.hearts}</b><span>Vidas hoy</span></div>
        <div class="stat">${ic("trophy")}<b>${Object.keys(COURSES).reduce((n, k) => n + doneCount(k), 0)}</b><span>Niveles</span></div>
      </div>
      <h2>Mis cursos</h2>
      ${started.length ? started.map(k => { const p = Math.round(doneCount(k) / (UNITS.length * NL) * 100), c = cefrOf(k);
        return `<div class="card row-card">${langBadge(k, "sm")}<div class="grow"><b>${COURSES[k].name}</b>${c ? `<span class="muted small"> &middot; ${c.name}</span>` : ""}<div class="bar"><i style="width:${p}%"></i></div></div><span class="muted">${p}%</span></div>`; }).join("")
        : `<p class="muted">Todavía no has completado ningún nivel.</p>`}
      <div class="center" style="margin-top:20px"><button class="btn ${prem() ? "ghost" : "prem"}" id="pl">${prem() ? "Gestionar plan" : "Mejorar a Premium"}</button></div>`;
    $("#pl").onclick = () => openPlans();
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
          <ul>${f(1, "1 curso de idioma a tu elección")}${f(1, "Nivel Principiante e Intermedio")}${f(1, "Unidades 1 a 3 de cada nivel (30 niveles)")}${f(1, "5 vidas al día")}${f(1, "5 palabras del día")}${f(1, "Rompecabezas, escritura y parejas")}${f(0, "Voz natural y ejercicios de escucha")}${f(0, "Repaso de errores")}${f(0, "Los 7 cursos")}</ul>
          <button class="btn ghost" id="pStd" ${S.plan === "standard" ? "disabled" : ""}>${S.plan === "standard" ? "Tu plan actual" : "Volver a Estándar"}</button></div>
        <div class="plan featured ${prem() ? "current" : ""}"><span class="ribbon">${ic("crown", "solid")}Más completo</span><h3>Premium</h3>
          <div class="price">7,99 &euro;<small>/mes</small></div><div class="muted small">o 59,99 &euro; al año</div>
          <ul>${f(1, "Los 7 cursos, cambia cuando quieras")}${f(1, "20 unidades por curso (100 niveles)")}${f(1, "Vidas ilimitadas")}${f(1, "10 palabras del día")}${f(1, "Voz natural en todas las frases")}${f(1, "Ejercicios de escucha")}${f(1, "Repaso inteligente de errores")}</ul>
          <button class="btn prem" id="pPre" ${prem() ? "disabled" : ""}>${prem() ? "Tu plan actual" : "Hazte Premium"}</button></div>
      </div></div>`;
    $("#x").onclick = closeModal;
    $("#pStd").onclick = () => { S.plan = "standard"; save(); closeModal(); render(); };
    $("#pPre").onclick = checkout;
  }
  function checkout() {
    modal.innerHTML = `<div class="box center">${mascot("happy", 90)}<h2>Pago de demostración</h2>
      <p class="muted">No se cobra nada ni se guardan datos de tarjeta. Para cobrar de verdad hay que conectar un procesador de pagos (ver README).</p>
      <div class="row center"><button class="btn ghost" id="no">Cancelar</button><button class="btn prem" id="pay">Activar Premium</button></div></div>`;
    $("#no").onclick = closeModal;
    $("#pay").onclick = () => { S.plan = "premium"; save(); closeModal(); if (S.lang) loadPack(S.lang); if (P) closePlayer(); else render(); };
  }

  render();
})();
