(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const KEY = "lingo-state-v2";
  const today = () => new Date().toISOString().slice(0, 10);
  const LV = EX.LEVELS, NL = LV.length;
  const canSpeak = "speechSynthesis" in window;

  /* ---------- Estado ---------- */
  let S = load();
  function load() {
    const d = { plan: "standard", lang: null, xp: 0, streak: 0, lastDay: null, hearts: 5, heartsDay: today(), progress: {}, mistakes: {}, tab: "learn", pick: false };
    try { Object.assign(d, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
    if (d.heartsDay !== today()) { d.hearts = 5; d.heartsDay = today(); }
    return d;
  }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const prem = () => S.plan === "premium";
  const maxUnits = () => PLANS[S.plan].units;
  const prog = (lang = S.lang) => (S.progress[lang] = S.progress[lang] || {});
  const stars = (ui, li, lang = S.lang) => prog(lang)[ui + "-" + li] || 0;
  const doneCount = lang => Object.keys(S.progress[lang] || {}).length;

  const app = $("#app"), modal = $("#modal"), playerEl = $("#player");

  function speak(text, lang, rate = 1) {
    if (!prem()) return openPlans("La pronunciación con audio es una función Premium.");
    if (!canSpeak) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = COURSES[lang].speech; u.rate = rate;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
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
    $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === S.tab && !S.pick));
  }
  $$("#tabs button").forEach(b => b.onclick = () => { S.tab = b.dataset.tab; S.pick = false; save(); render(); window.scrollTo(0, 0); });
  $("#tabs").innerHTML = [
    ["learn", "book", "Aprender"], ["review", "cycle", "Repaso"], ["profile", "user", "Perfil"], ["plans", "crown", "Planes"]
  ].map(([k, i, n]) => `<button data-tab="${k}">${ic(i)}<span>${n}</span></button>`).join("");
  $$("#tabs button").forEach(b => b.onclick = () => {
    if (b.dataset.tab === "plans") return openPlans();
    S.tab = b.dataset.tab; S.pick = false; save(); render(); window.scrollTo(0, 0);
  });

  function render() {
    renderTop();
    if (!S.lang || S.pick) return viewCourses();
    ({ learn: viewLearn, review: viewReview, profile: viewProfile }[S.tab] || viewLearn)();
  }

  /* ---------- Selección de curso ---------- */
  function viewCourses() {
    app.innerHTML = `
      <div class="hero-pick">${mascot("happy", 84)}
        <div><h1>¿Qué idioma quieres aprender?</h1>
        <p class="muted">${prem() ? "Con Premium puedes cambiar de curso cuando quieras." : "Con el plan Estándar eliges 1 curso. Premium desbloquea los 7."}</p></div></div>
      <div class="course-grid">${Object.keys(COURSES).map(k => {
        const locked = !prem() && S.lang && S.lang !== k;
        const n = doneCount(k);
        return `<button class="course-card ${S.lang === k ? "cur" : ""} ${locked ? "locked" : ""}" data-k="${k}">
          ${langBadge(k, "lg")}<b>${COURSES[k].name}</b>
          <span class="muted">${locked ? "Solo Premium" : n ? n + " de " + UNITS.length * NL + " niveles" : UNITS.length + " unidades"}</span>
          ${locked ? ic("lock", "corner") : ""}</button>`;
      }).join("")}</div>
      ${S.lang ? `<div class="center"><button class="btn ghost" id="cancelPick">Volver al curso</button></div>` : ""}`;
    $$(".course-card").forEach(b => b.onclick = () => {
      const k = b.dataset.k;
      if (!prem() && S.lang && S.lang !== k) return openPlans("Aprender más de un idioma es una función Premium.");
      S.lang = k; S.pick = false; S.tab = "learn"; save(); render();
    });
    const c = $("#cancelPick"); if (c) c.onclick = () => { S.pick = false; save(); render(); };
  }

  /* ---------- Mapa de niveles ---------- */
  function nodeState(ui, li) {
    if (ui >= maxUnits()) return "prem";
    const idx = ui * NL + li;
    if (stars(ui, li) > 0) return "done";
    if (idx === 0) return "current";
    const pu = Math.floor((idx - 1) / NL), pl = (idx - 1) % NL;
    return stars(pu, pl) > 0 ? "current" : "locked";
  }

  function viewLearn() {
    const C = COURSES[S.lang];
    const total = UNITS.length * NL, done = doneCount(S.lang);
    let html = `<div class="course-head"><div><span class="muted">Curso de</span><h1>${C.name}</h1></div>
      <div class="ring" style="--p:${Math.round(done / total * 100)}"><b>${Math.round(done / total * 100)}%</b></div></div>`;
    if (!prem()) html += `<div class="note-card"><div>${ic("crown", "gold")}</div><div><b>Plan Estándar</b><span>Unidades 1 a ${PLANS.standard.units} y ${PLANS.standard.hearts} vidas al día.</span></div><button class="btn sm prem" id="upg">Mejorar</button></div>`;

    UNITS.forEach((U, ui) => {
      const H = NL * 98 + 10;
      const pts = Array.from({ length: NL }, (_, li) => ({ x: 50 + 25 * Math.sin((ui * NL + li) * 1.15 + .4), y: li * 98 + 52 }));
      let d = `M${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) { const m = (pts[i - 1].y + pts[i].y) / 2; d += ` C${pts[i - 1].x} ${m},${pts[i].x} ${m},${pts[i].x} ${pts[i].y}`; }
      const locked = ui >= maxUnits();
      html += `<section class="unit ${locked ? "unit-locked" : ""}" style="--uh:${(ui * 37 + 170) % 360}">
        <div class="ubanner"><div class="utext"><span class="ulabel">Unidad ${ui + 1}${locked ? ' &middot; Premium' : ""}</span><h2>${U.title}</h2><p>${U.ctx}</p></div><div class="uic">${ic(U.icon)}</div></div>
        <div class="path" style="height:${H}px">
          <svg viewBox="0 0 100 ${H}" preserveAspectRatio="none"><path d="${d}" vector-effect="non-scaling-stroke"/></svg>
          ${pts.map((p, li) => {
            const st = nodeState(ui, li), s = stars(ui, li);
            const icon = st === "locked" || st === "prem" ? "lock" : LV[li].icon;
            return `<button class="node ${st} ${li === NL - 1 ? "big" : ""}" style="left:${p.x}%;top:${p.y}px" data-ui="${ui}" data-li="${li}" aria-label="${LV[li].name}">
              ${st === "current" ? `<span class="go">Empezar</span>` : ""}
              <span class="disc">${ic(icon, st === "done" || st === "current" ? "solid-lite" : "")}</span>
              ${st === "done" ? `<span class="nstars">${[1, 2, 3].map(n => ic("star", "solid " + (n <= s ? "on" : "off"))).join("")}</span>` : ""}
            </button>`;
          }).join("")}
        </div></section>`;
    });
    app.innerHTML = html;
    const u = $("#upg"); if (u) u.onclick = () => openPlans();
    $$(".node").forEach(n => n.onclick = () => openLevel(+n.dataset.ui, +n.dataset.li));
    if (!viewLearn.scrolled) { viewLearn.scrolled = true; const c = $(".node.current"); if (c) setTimeout(() => c.scrollIntoView({ block: "center" }), 30); }
  }

  /* ---------- Hoja de nivel ---------- */
  function openLevel(ui, li) {
    const st = nodeState(ui, li);
    if (st === "prem") return openPlans("Esta unidad es Premium.");
    if (st === "locked") {
      modal.hidden = false;
      modal.innerHTML = `<div class="box center">${mascot("think", 90)}<h2>Nivel bloqueado</h2><p class="muted">Completa el nivel anterior para desbloquear este.</p><button class="btn" id="ok">Entendido</button></div>`;
      $("#ok").onclick = closeModal; return;
    }
    const L = LV[li], s = stars(ui, li);
    const note = li === 3 && !prem() ? `<p class="fb-note">${ic("lock")}<span>Los ejercicios de audio son Premium. Haremos ejercicios de escritura.</span></p>` : "";
    modal.hidden = false;
    modal.innerHTML = `<div class="box center"><div class="sheet-ic">${ic(L.icon)}</div>
      <span class="ulabel">Unidad ${ui + 1} &middot; ${UNITS[ui].title}</span><h2>${L.name}</h2><p class="muted">${L.desc}</p>${note}
      ${s ? `<div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= s ? "on" : "off"))).join("")}</div>` : ""}
      <div class="row center"><button class="btn ghost" id="cancel">Cerrar</button><button class="btn" id="start">${s ? "Repetir" : "Empezar"}</button></div></div>`;
    $("#cancel").onclick = closeModal;
    $("#start").onclick = () => { closeModal(); startLevel(ui, li); };
  }
  function closeModal() { modal.hidden = true; modal.innerHTML = ""; renderTop(); }
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  function startLevel(ui, li) {
    if (!prem() && S.hearts <= 0) return outOfHearts(true);
    const ex = EX.build(S.lang, ui, li, { listen: prem() && canSpeak });
    const go = () => startPlayer({ kind: "level", ui, li, ex, lang: S.lang });
    if (li <= 1) intro(ui, li, go); else go();
  }

  /* ---------- Introducción de palabras/frases ---------- */
  function intro(ui, li, then) {
    const U = EX.unit(S.lang, ui), items = li === 0 ? U.words : U.sents;
    shell();
    $("#stage").innerHTML = `<h2 class="ex-title">${li === 0 ? "Palabras nuevas" : "Frases de la situación"}</h2>
      <p class="muted">${U.ctx}</p>
      <ul class="intro">${items.map((x, i) => `<li><button class="spk sm" data-i="${i}" aria-label="Escuchar">${ic("speaker")}</button>
        <div><b>${EX.tgt(x.t, S.lang)}</b><span class="muted">${esc(x.es)}</span></div></li>`).join("")}</ul>`;
    $$(".intro .spk").forEach(b => b.onclick = () => speak(items[+b.dataset.i].t, S.lang));
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
        <div class="p-hearts">${ic("heart", "solid")}<b id="pHearts"></b></div></div>
      <div class="p-body"><div class="stage" id="stage"></div></div>
      <div class="p-foot" id="foot"><div class="fb" id="fb"></div><button class="btn" id="pBtn">Comprobar</button></div>`;
    $("#pExit").onclick = confirmExit;
    $("#pHearts").innerHTML = prem() ? "&infin;" : S.hearts;
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
    if (canSpeak) speechSynthesis.cancel();
    render();
  }

  function startPlayer(cfg) {
    P = { ...cfg, q: [...cfg.ex], i: 0, wrong: 0, correct: 0, retries: new Map(), locked: false, check: null };
    shell();
    renderEx();
  }

  const setReady = r => { const b = $("#pBtn"); if (b && !P.locked) b.disabled = !r; };
  const tg = text => EX.tgt(text, P.lang);

  function audioBlock(text) {
    return `<div class="audio-row"><button class="spk" id="spk" aria-label="Escuchar">${ic("speaker")}</button>
      <button class="spk slow" id="spkSlow" aria-label="Escuchar despacio">${ic("speaker")}<span>Lento</span></button></div>`;
  }
  function bindAudio(text) {
    const a = $("#spk"), b = $("#spkSlow");
    if (a) a.onclick = () => speak(text, P.lang);
    if (b) b.onclick = () => speak(text, P.lang, .6);
    if (a && prem()) setTimeout(() => speak(text, P.lang), 250);
  }
  function bubble(html, target, speakText) {
    return `<div class="say">${mascot("think", 64)}<div class="bubble">${speakText ? `<button class="spk sm" id="pSpk" aria-label="Escuchar">${ic("speaker")}</button>` : ""}<span>${html}</span></div></div>`;
  }
  function bindBubbleSpeak(text) { const b = $("#pSpk"); if (b) b.onclick = () => speak(text, P.lang); }

  function renderEx() {
    const ex = P.ex = P.q[P.i];
    P.locked = false; P.check = null;
    $("#pBar").style.width = Math.round(P.i / P.q.length * 100) + "%";
    $("#pHearts").innerHTML = prem() ? "&infin;" : S.hearts;
    $("#foot").className = "p-foot"; $("#fb").innerHTML = "";
    const btn = $("#pBtn"); btn.textContent = "Comprobar"; btn.disabled = true; btn.onclick = onMain;
    ({ mc: exMC, type: exType, bank: exBank, fill: exFill, match: exMatch }[ex.type])(ex);
  }

  /* --- opción múltiple --- */
  function exMC(ex) {
    const sentence = ex.item.k === "s";
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      ${ex.audio ? audioBlock(ex.audio) : `<div class="q-prompt ${sentence ? "sm" : ""}">${ex.promptTarget ? tg(ex.prompt) : esc(ex.prompt)}${ex.promptTarget ? `<button class="spk sm" id="pSpk" aria-label="Escuchar">${ic("speaker")}</button>` : ""}</div>`}
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
      ${ex.audio ? audioBlock(ex.audio) : bubble(esc(ex.prompt))}
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

  /* --- ordenar palabras --- */
  function exBank(ex) {
    const picked = [];
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      ${ex.audio ? audioBlock(ex.audio) : bubble(ex.promptTarget ? tg(ex.prompt) : esc(ex.prompt), ex.promptTarget, ex.promptTarget)}
      <div class="bank-ans" id="ans" aria-label="Tu respuesta"></div>
      <div class="bank" id="bank"></div>`;
    if (ex.audio) bindAudio(ex.audio); else if (ex.promptTarget) bindBubbleSpeak(ex.prompt);
    const draw = () => {
      $("#ans").innerHTML = picked.map(i => `<button class="chip-w" data-i="${i}">${ex.bankTarget ? tg(ex.bank[i]) : esc(ex.bank[i])}</button>`).join("");
      $("#bank").innerHTML = ex.bank.map((w, i) => `<button class="chip-w ${picked.includes(i) ? "used" : ""}" data-i="${i}" ${picked.includes(i) ? "disabled" : ""}>${ex.bankTarget ? tg(w) : esc(w)}</button>`).join("");
      $$("#bank .chip-w:not(.used)").forEach(b => b.onclick = () => { if (P.locked) return; picked.push(+b.dataset.i); draw(); });
      $$("#ans .chip-w").forEach(b => b.onclick = () => { if (P.locked) return; picked.splice(picked.indexOf(+b.dataset.i), 1); draw(); });
      setReady(picked.length > 0);
    };
    draw();
    P.check = () => !picked.length ? null : {
      ok: EX.norm(picked.map(i => ex.bank[i]).join(" ")) === EX.norm(ex.answerText),
      correct: ex.bankTarget ? tg(ex.answerText) : esc(ex.answerText)
    };
  }

  /* --- completar --- */
  function exFill(ex) {
    $("#stage").innerHTML = `<h2 class="ex-title">${ex.title}</h2>
      <div class="fill-line"><span>${tg(ex.before).replace(/<small.*?<\/small>/, "")}</span><span class="bw">${esc(ex.lead)}<span class="blank" id="blank">&nbsp;</span>${esc(ex.trail)}</span><span>${esc(ex.after)}</span></div>
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
          missed.forEach(id => remember(ex.items[+id]));
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
    reveal(r.ok, r.correct);
  }

  const PRAISE = ["¡Muy bien!", "¡Correcto!", "¡Excelente!", "¡Así se hace!", "¡Perfecto!"];
  function remember(item) {
    if (!item) return;
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
    if (ok) { P.correct++; if (P.kind === "review") forget(ex.item); }
    else {
      P.wrong++;
      if (!prem()) { S.hearts = Math.max(0, S.hearts - 1); $("#pHearts").textContent = S.hearts; }
      if (!o.skipRemember) remember(ex.item);
      const n = P.retries.get(ex) || 0;
      if (!o.noRetry && n < 2) { P.retries.set(ex, n + 1); P.q.push(ex); }
    }
    save(); renderTop();
    $("#foot").className = "p-foot " + (ok ? "ok" : "bad");
    $("#fb").innerHTML = ok
      ? `<div class="fb-in"><span class="fb-ic">${ic("check")}</span><div><b>${PRAISE[Math.floor(Math.random() * PRAISE.length)]}</b></div></div>`
      : `<div class="fb-in"><span class="fb-ic">${ic("x")}</span><div><b>${o.msg || "Respuesta correcta"}</b>${correctHTML ? `<div class="fb-ans">${correctHTML}</div>` : ""}</div></div>`;
    const btn = $("#pBtn"); btn.textContent = "Continuar"; btn.disabled = false; btn.focus();
    $("#pBar").style.width = Math.round((P.i + 1) / P.q.length * 100) + "%";
  }

  function next() {
    if (!prem() && S.hearts <= 0) return outOfHearts(false);
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
    const star = P.wrong === 0 ? 3 : P.wrong <= 2 ? 2 : 1;
    const total = P.correct + P.wrong, acc = Math.round(P.correct / Math.max(1, total) * 100);
    const xp = P.correct * 2 + 10 + (P.wrong === 0 ? 5 : 0);
    S.xp += xp; touchStreak();
    let title = "Repaso completado", extra = "";
    if (P.kind === "level") {
      const p = prog(P.lang), k = P.ui + "-" + P.li;
      p[k] = Math.max(p[k] || 0, star);
      title = P.li === NL - 1 ? "Unidad completada" : "Nivel completado";
      if (P.li === NL - 1) extra = `<p class="muted">Has terminado la unidad ${P.ui + 1}: ${UNITS[P.ui].title}.</p>`;
    }
    save(); renderTop();
    viewLearn.scrolled = false;
    playerEl.innerHTML = `<div class="p-body"><div class="stage center result">
      ${mascot("cheer", 150)}<h1>${title}</h1>${extra}
      ${P.kind === "level" ? `<div class="nstars lg">${[1, 2, 3].map(n => ic("star", "solid " + (n <= star ? "on" : "off"))).join("")}</div>` : ""}
      <div class="res-stats"><div class="rs xp">${ic("star", "solid")}<b>+${xp}</b><span>XP</span></div>
        <div class="rs acc">${ic("check")}<b>${acc}%</b><span>Precisión</span></div></div></div></div>
      <div class="p-foot"><button class="btn" id="done">Continuar</button></div>`;
    $("#done").onclick = closePlayer;
  }

  function outOfHearts(beforeStart) {
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
      ${started.length ? started.map(k => { const p = Math.round(doneCount(k) / (UNITS.length * NL) * 100);
        return `<div class="card row-card">${langBadge(k, "sm")}<div class="grow"><b>${COURSES[k].name}</b><div class="bar"><i style="width:${p}%"></i></div></div><span class="muted">${p}%</span></div>`; }).join("")
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
          <ul>${f(1, "1 curso de idioma a tu elección")}${f(1, "Unidades 1 a 3 de cada curso (15 niveles)")}${f(1, "5 vidas al día")}${f(1, "Ejercicios de lectura, escritura y parejas")}${f(0, "Audio de pronunciación")}${f(0, "Ejercicios de escucha")}${f(0, "Repaso de errores")}${f(0, "Los 7 cursos")}</ul>
          <button class="btn ghost" id="pStd" ${S.plan === "standard" ? "disabled" : ""}>${S.plan === "standard" ? "Tu plan actual" : "Volver a Estándar"}</button></div>
        <div class="plan featured ${prem() ? "current" : ""}"><span class="ribbon">${ic("crown", "solid")}Más completo</span><h3>Premium</h3>
          <div class="price">7,99 &euro;<small>/mes</small></div><div class="muted small">o 59,99 &euro; al año</div>
          <ul>${f(1, "Los 7 cursos, cambia cuando quieras")}${f(1, "10 unidades por curso (50 niveles)")}${f(1, "Vidas ilimitadas")}${f(1, "Audio de pronunciación")}${f(1, "Ejercicios de escucha")}${f(1, "Repaso inteligente de errores")}</ul>
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
    $("#pay").onclick = () => { S.plan = "premium"; save(); closeModal(); if (P) closePlayer(); else render(); };
  }

  render();
})();
