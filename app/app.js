(() => {
const $ = s => document.querySelector(s);
const view = $("#view"), modal = $("#modal");
const KEY = "lingo-state-v1";
const today = () => new Date().toISOString().slice(0, 10);

let S = load();
function load() {
  const d = { plan: "standard", lang: null, xp: 0, streak: 0, lastDay: null, done: {}, hearts: 5, heartsDay: today() };
  try { Object.assign(d, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  if (d.heartsDay !== today()) { d.hearts = 5; d.heartsDay = today(); }
  return d;
}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const P = () => PLANS[S.plan].limits;
const isPrem = () => S.plan === "premium";
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const norm = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ß ]/g, "").trim();
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);

function speak(text, lang) {
  if (!isPrem()) return openPlans("El audio de pronunciación es una función Premium.");
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text); u.lang = LANGS[lang].speech;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}

function header() {
  $("#streak").textContent = "🔥 " + S.streak;
  $("#xp").textContent = "⭐ " + S.xp;
  $("#hearts").textContent = "❤️ " + (isPrem() ? "∞" : S.hearts);
  const b = $("#planBadge");
  b.textContent = isPrem() ? "👑 Premium" : "Plan Estándar";
  b.className = "badge" + (isPrem() ? " prem" : "");
  b.onclick = () => openPlans();
}

/* ---------- Pantallas ---------- */
function home() {
  header();
  if (!S.lang) return pickLang();
  const L = LANGS[S.lang];
  view.innerHTML = `
    <div class="row" style="justify-content:space-between">
      <h1>${L.flag} ${L.name}</h1>
      <button class="btn ghost" id="chg">Cambiar idioma</button>
    </div>
    ${isPrem() ? "" : `<div class="card row" style="justify-content:space-between"><span>Plan Estándar: ${P().lessons} lecciones por idioma y ${P().hearts} vidas al día.</span><button class="btn prem" id="up">Mejorar</button></div>`}
    ${L.lessons.map((l, i) => {
      const locked = i >= P().lessons, d = (S.done[S.lang] || {})[i];
      return `<button class="lesson ${locked ? "locked" : ""}" data-i="${i}">
        <span class="ic">${l.icon}</span>
        <span><b>${l.title}</b><small>${d ? "Mejor: " + d + "% ✔" : "6 palabras"}</small></span>
        <span style="margin-left:auto">${locked ? "🔒 Premium" : "▶"}</span></button>`;
    }).join("")}`;
  $("#chg").onclick = pickLang;
  const up = $("#up"); if (up) up.onclick = () => openPlans();
  view.querySelectorAll(".lesson").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    if (i >= P().lessons) return openPlans("Esta lección es Premium.");
    lessonMenu(i);
  });
}

function pickLang() {
  header();
  view.innerHTML = `<h1>¿Qué idioma quieres aprender?</h1>
    ${isPrem() ? "" : `<p class="muted">Con el plan Estándar puedes elegir 1 idioma. Premium desbloquea todos.</p>`}
    <div class="grid">${Object.entries(LANGS).map(([k, l]) => {
      const locked = !isPrem() && S.lang && S.lang !== k;
      return `<button class="tile ${locked ? "locked" : ""}" data-k="${k}"><span class="big">${l.flag}</span><b>${l.name}</b>${locked ? "<br>🔒" : ""}</button>`;
    }).join("")}</div>`;
  view.querySelectorAll(".tile").forEach(t => t.onclick = () => {
    const k = t.dataset.k;
    if (!isPrem() && S.lang && S.lang !== k) return openPlans("Cambiar de idioma o aprender varios es Premium.");
    S.lang = k; save(); home();
  });
}

function lessonMenu(i) {
  const l = LANGS[S.lang].lessons[i];
  view.innerHTML = `<button class="btn ghost" id="back">← Volver</button>
    <h1>${l.icon} ${l.title}</h1>
    <div class="row"><button class="btn" id="fc">Tarjetas</button><button class="btn" id="qz">Test</button></div>`;
  $("#back").onclick = home;
  $("#fc").onclick = () => flashcards(i);
  $("#qz").onclick = () => quiz(i);
}

function flashcards(i) {
  const l = LANGS[S.lang].lessons[i]; let n = 0, flip = false;
  const draw = () => {
    const [es, t] = l.words[n];
    view.innerHTML = `<button class="btn ghost" id="back">← Volver</button>
      <div class="bar"><i style="width:${(n + 1) / l.words.length * 100}%"></i></div>
      <div class="card flash" id="c"><div>${esc(flip ? t : es)}<small>${flip ? "Toca para volver" : "Toca para ver la traducción"}</small></div></div>
      <div class="row" style="justify-content:space-between">
        <button class="btn ghost" id="sp">🔊 Escuchar ${isPrem() ? "" : "👑"}</button>
        <button class="btn" id="nx">${n === l.words.length - 1 ? "Terminar" : "Siguiente"}</button></div>`;
    $("#back").onclick = () => lessonMenu(i);
    $("#c").onclick = () => { flip = !flip; draw(); };
    $("#sp").onclick = () => speak(t, S.lang);
    $("#nx").onclick = () => { if (n === l.words.length - 1) { gainXP(5); lessonMenu(i); } else { n++; flip = false; draw(); } };
  };
  draw();
}

function quiz(i) {
  if (!isPrem() && S.hearts <= 0) return openPlans("Te has quedado sin vidas hoy. Vuelve mañana o pásate a Premium para vidas ilimitadas.");
  const l = LANGS[S.lang].lessons[i];
  const qs = shuffle(l.words.flatMap(w => [{ w, t: "es2t" }, { w, t: "t2es" }, { w, t: "type" }])).slice(0, 10);
  let n = 0, ok = 0, answered = false;
  const next = () => {
    if (n >= qs.length) return finish();
    if (!isPrem() && S.hearts <= 0) return openPlans("Te has quedado sin vidas hoy.");
    answered = false;
    const { w, t } = qs[n], [es, tr] = w;
    const prompt = t === "t2es" ? tr : es, answer = t === "t2es" ? es : tr;
    let body;
    if (t === "type") body = `<input class="ans" id="in" autocomplete="off" autocapitalize="off" placeholder="Escribe en ${LANGS[S.lang].name}"><div class="row" style="margin-top:12px"><button class="btn" id="ck">Comprobar</button></div>`;
    else {
      const pool = l.words.map(x => t === "t2es" ? x[0] : x[1]).filter(x => x !== answer);
      body = `<div class="opts">${shuffle([answer, ...shuffle(pool).slice(0, 3)]).map(o => `<button class="opt">${esc(o)}</button>`).join("")}</div>`;
    }
    view.innerHTML = `<button class="btn ghost" id="back">✕ Salir</button>
      <div class="bar"><i style="width:${n / qs.length * 100}%"></i></div>
      <div class="muted">${t === "type" ? "Traduce" : "Elige la traducción"}</div>
      <div class="q">${esc(prompt)}</div>${body}<div id="fb"></div>`;
    $("#back").onclick = () => lessonMenu(i);
    const resolve = good => {
      if (answered) return; answered = true;
      if (good) { ok++; gainXP(2); } else if (!isPrem()) { S.hearts--; save(); header(); }
      $("#fb").innerHTML = `<div class="fb ${good ? "ok" : "bad"}">${good ? "¡Correcto!" : "Respuesta: " + esc(answer)}</div><div class="row" style="margin-top:12px"><button class="btn" id="go">Continuar</button></div>`;
      $("#go").onclick = () => { n++; next(); }; $("#go").focus();
    };
    if (t === "type") {
      const check = () => resolve(norm($("#in").value) === norm(answer));
      $("#ck").onclick = check; $("#in").focus();
      $("#in").onkeydown = e => { if (e.key === "Enter") answered ? $("#go").click() : check(); };
    } else view.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const good = b.textContent === answer; resolve(good);
      b.classList.add(good ? "ok" : "bad");
      if (!good) view.querySelectorAll(".opt").forEach(x => x.textContent === answer && x.classList.add("ok"));
    });
  };
  const finish = () => {
    const pct = Math.round(ok / qs.length * 100);
    const d = (S.done[S.lang] = S.done[S.lang] || {}); d[i] = Math.max(d[i] || 0, pct);
    touchStreak(); save(); header();
    view.innerHTML = `<div class="card center"><h1>${pct >= 70 ? "🎉 ¡Lección completada!" : "💪 Sigue practicando"}</h1><p>${ok} de ${qs.length} correctas · ${pct}%</p><div class="row" style="justify-content:center"><button class="btn" id="ag">Repetir</button><button class="btn ghost" id="hm">Inicio</button></div></div>`;
    $("#ag").onclick = () => quiz(i); $("#hm").onclick = home;
  };
  next();
}

function gainXP(n) { S.xp += n; save(); header(); }
function touchStreak() {
  const t = today(); if (S.lastDay === t) return;
  const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  S.streak = S.lastDay === y ? S.streak + 1 : 1; S.lastDay = t;
}

/* ---------- Planes ---------- */
function openPlans(msg) {
  modal.hidden = false;
  modal.innerHTML = `<div class="box" style="max-width:720px;max-height:92vh;overflow:auto">
    <div class="row" style="justify-content:space-between"><h2>Elige tu plan</h2><button class="btn ghost" id="x">✕</button></div>
    ${msg ? `<p class="fb bad">${esc(msg)}</p>` : ""}
    <div class="plans">
      <div class="plan ${S.plan === "standard" ? "current" : ""}"><h3>Estándar</h3><div class="price">Gratis</div>
        <ul><li>✅ 1 idioma a elegir</li><li>✅ 2 lecciones por idioma</li><li>✅ Tarjetas y tests</li><li>⚠️ 5 vidas al día</li><li class="no">Audio de pronunciación</li><li class="no">Todos los idiomas</li></ul>
        <button class="btn ghost" id="pStd" ${S.plan === "standard" ? "disabled" : ""}>${S.plan === "standard" ? "Plan actual" : "Volver a Estándar"}</button></div>
      <div class="plan featured ${isPrem() ? "current" : ""}"><h3>👑 Premium</h3><div class="price">7,99 €<small class="muted">/mes</small></div>
        <ul><li>✅ Los 5 idiomas</li><li>✅ Todas las lecciones</li><li>✅ Vidas ilimitadas</li><li>✅ Audio de pronunciación</li><li>✅ Cambia de idioma cuando quieras</li></ul>
        <button class="btn prem" id="pPre" ${isPrem() ? "disabled" : ""}>${isPrem() ? "Plan actual" : "Hazte Premium"}</button></div>
    </div></div>`;
  $("#x").onclick = closeModal;
  $("#pStd").onclick = () => { S.plan = "standard"; save(); closeModal(); home(); };
  $("#pPre").onclick = checkout;
}
function checkout() {
  modal.innerHTML = `<div class="box"><h2>Pago (demo)</h2>
    <p class="muted">Esto es una simulación: no se cobra nada ni se guardan datos de tarjeta. Para cobros reales hay que conectar Stripe (ver README).</p>
    <div class="row"><button class="btn prem" id="pay">Activar Premium (demo)</button><button class="btn ghost" id="no">Cancelar</button></div></div>`;
  $("#no").onclick = closeModal;
  $("#pay").onclick = () => { S.plan = "premium"; save(); closeModal(); home(); };
}
function closeModal() { modal.hidden = true; modal.innerHTML = ""; header(); }
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

home();
})();
