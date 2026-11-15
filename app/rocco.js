/* Rocco, el mapache de la app.
   Dibujo propio en SVG (200x210), con volumen en el pelaje, máscara, ojos con brillo, bigotes, cola anillada y patas con dedos.
   rocco(mood, px) devuelve el SVG; las partes son grupos con clase (r-tail, r-body, r-head, r-eyes, r-arms...) que animan los estilos de
   styles.css (respiración, parpadeo, cola, orejas, masticar, lavarse las patas...).
   Gestos: happy cheer sad think wow wink sleepy love proud curious focus oops eat wash yawn coffee.
   window.mascot es un alias para que el resto de la app siga llamando a mascot(mood, px). */
(() => {
  window.MASCOT_MOODS = ["happy", "cheer", "sad", "think", "wow", "wink", "sleepy", "love", "proud", "curious", "focus", "oops", "eat", "wash", "yawn", "coffee"];
  /* Gestos para reacciones al tocar a Rocco (sin los que expresan tristeza) y actividades "al azar" que hace por su cuenta. */
  window.MASCOT_REACTIONS = ["wink", "love", "wow", "cheer", "proud", "curious", "yawn"];
  window.MASCOT_ACTIVITIES = ["eat", "wash", "coffee", "yawn", "sleepy", "curious", "think"];

  let uid = 0;
  const heart = (cx, cy, s = 1, cls = "rh") => `<path d="M${cx} ${cy + 7 * s}C${cx - 13 * s} ${cy - 1 * s} ${cx - 7 * s} ${cy - 10 * s} ${cx} ${cy - 4 * s}C${cx + 7 * s} ${cy - 10 * s} ${cx + 13 * s} ${cy - 1 * s} ${cx} ${cy + 7 * s}Z" class="${cls}"/>`;
  const paw = (x, y, rot = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" class="r-paw"><ellipse cx="0" cy="0" rx="11" ry="9.500" class="rd2"/><circle cx="-7" cy="-8" r="3.800" class="rd2"/><circle cx="-2.500" cy="-10.500" r="3.800" class="rd2"/><circle cx="2.500" cy="-10.500" r="3.800" class="rd2"/><circle cx="7" cy="-8" r="3.800" class="rd2"/><ellipse cx="-3" cy="-2" rx="4" ry="2.200" class="rhl"/></g>`;
  const arm = (x1, y1, x2, y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" class="rarm"/><path d="M${x1 + 3} ${y1}L${x2 + 2} ${y2}" class="rarm2"/>`;

  window.rocco = (mood = "happy", px = 120) => {
    if (!window.MASCOT_MOODS.includes(mood)) mood = "happy";
    const u = "r" + (++uid);
    const g = id => `url(#${id}${u})`;
    const L = [72, 92], R = [128, 92];

    /* ----- ojos ----- */
    const eyeOpen = (cx, cy, dx = 0, dy = 0, rx = 11, ry = 12.5) =>
      `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${g("eye")}"/><circle cx="${cx + dx * .6}" cy="${cy + dy * .6}" r="${rx * .5}" class="rn"/>` +
      `<circle cx="${cx + dx + 3.500}" cy="${cy + dy - 4.500}" r="3.300" fill="#fff"/><circle cx="${cx + dx - 3}" cy="${cy + dy + 4}" r="1.700" fill="#fff" opacity=".8"/>`;
    const arc = (cx, cy, up = true) => `<path d="M${cx - 12} ${cy + 3}Q${cx} ${up ? cy - 14 : cy + 15} ${cx + 12} ${cy + 3}" class="rk"/>`;
    const eyes = {
      open: (dx = 0, dy = 1) => eyeOpen(...L, dx, dy) + eyeOpen(...R, dx, dy),
      wide: () => eyeOpen(...L, 0, 0, 13, 14.500) + eyeOpen(...R, 0, 0, 13, 14.500) + `<circle cx="${L[0]}" cy="${L[1]}" r="15.500" class="rring"/><circle cx="${R[0]}" cy="${R[1]}" r="15.500" class="rring"/>`,
      happy: () => arc(...L) + arc(...R),
      closed: () => arc(...L, false) + arc(...R, false),
      wink: () => eyeOpen(...L, 0, 1) + arc(...R),
      heart: () => heart(L[0], L[1] - 1, .95) + heart(R[0], R[1] - 1, .95),
      half: () => eyeOpen(...L, 0, 3) + eyeOpen(...R, 0, 3) + `<path d="M58 78Q72 74 86 80V92H58Z" class="rlid"/><path d="M114 80Q128 74 142 78V92H114Z" class="rlid"/>`
    };

    /* ----- cejas (marcas claras sobre la máscara) ----- */
    const brows = {
      sad: `<path d="M58 80L84 70M142 80L116 70" class="rb"/>`,
      up: `<path d="M60 74Q72 62 84 72M116 72Q128 62 140 74" class="rb"/>`,
      raise: `<path d="M60 76Q72 72 84 76M116 70Q128 60 142 70" class="rb"/>`,
      down: `<path d="M60 70L84 79M140 70L116 79" class="rb"/>`
    };

    /* ----- boca ----- */
    const mouths = {
      smile: `<path d="M100 110V121M84 121Q100 138 116 121" class="rm"/>`,
      grin: `<path d="M82 119Q100 148 118 119Z" class="rmo"/><path d="M92 133Q100 141 108 133Q100 128 92 133Z" class="rp"/>`,
      open: `<path d="M79 117Q100 158 121 117Z" class="rmo"/><path d="M90 137Q100 148 110 137Q100 129 90 137Z" class="rp"/><path d="M86 118H114" class="rteeth"/>`,
      o: `<ellipse cx="100" cy="128" rx="7" ry="9" class="rmo"/>`,
      frown: `<path d="M100 110V120M85 133Q100 118 115 133" class="rm"/>`,
      flat: `<path d="M100 110V121M90 124H110" class="rm"/>`,
      smirk: `<path d="M100 110V121M88 125Q102 131 116 120" class="rm"/>`,
      tiny: `<ellipse cx="100" cy="124" rx="4.500" ry="3.300" class="rmo"/>`,
      wavy: `<path d="M100 110V120M84 127Q92 120 100 127T116 127" class="rm"/>`,
      yawn: `<ellipse cx="100" cy="130" rx="14" ry="17" class="rmo"/><path d="M90 140Q100 152 110 140Q100 132 90 140Z" class="rp"/>`,
      chew: `<g class="r-chew"><path d="M100 110V121M85 121Q100 135 115 121" class="rm"/></g>`
    };

    /* ----- brazos y accesorios ----- */
    const restArms = arm(58, 150, 64, 178) + arm(142, 150, 136, 178) + paw(64, 181, 10) + paw(136, 181, -10);
    const armsets = {
      rest: restArms,
      up: arm(56, 152, 26, 108) + arm(144, 152, 174, 108) + paw(24, 100, -25) + paw(176, 100, 25),
      chin: arm(58, 150, 64, 178) + paw(64, 181, 10) + arm(142, 152, 118, 142),
      eat: "", wash: "", mug: arm(58, 150, 64, 178) + paw(64, 181, 10)
    };
    const front = {
      chin: paw(112, 138, -60),
      eat: `<g class="r-eat">${arm(62, 152, 80, 142)}${arm(138, 152, 120, 142)}
        <g transform="rotate(-8 100 140)"><rect x="76" y="128" width="48" height="24" rx="4" fill="${g("choc")}"/><path d="M92 128V152M108 128V152M76 140H124" class="rchl"/><path d="M76 148H124V152Q100 155 76 152Z" class="rfoil"/><path d="M118 128l8 0l-2 8l-8-4z" fill="${g("choc")}"/></g>
        ${paw(78, 142, -10)}${paw(122, 142, 10)}</g><g class="r-crumbs"><circle cx="86" cy="158" r="2" class="rcr"/><circle cx="112" cy="162" r="1.700" class="rcr"/><circle cx="100" cy="168" r="1.400" class="rcr"/></g>`,
      wash: `<g class="r-wash">${arm(62, 152, 92, 160)}${arm(138, 152, 108, 160)}${paw(93, 160, 30)}${paw(107, 160, -30)}</g>
        <g class="r-drops"><path d="M84 142q-4 7 0 10q4-3 0-10z" class="rt"/><path d="M118 146q-4 7 0 10q4-3 0-10z" class="rt"/><path d="M100 150q-3 6 0 8q3-2 0-8z" class="rt"/></g>
        <path d="M70 172Q100 184 130 172" class="rfoam"/>`,
      mug: `${arm(142, 152, 122, 148)}<g class="r-mug"><rect x="106" y="152" width="28" height="26" rx="5" class="rmug"/><path d="M134 158Q146 158 146 166Q146 174 134 172" class="rmugh"/><rect x="109" y="155" width="22" height="5" rx="2" class="rcoffee"/></g>${paw(116, 160, -20)}
        <g class="r-steam"><path d="M114 146q-4-6 0-12t0-10M124 148q-4-6 0-12t0-10" class="rsteam"/></g>`
    };

    /* ----- extras ----- */
    const extras = {
      sparks: `<g class="r-sparks"><path d="M20 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" class="ry"/><path d="M178 30l2.500 6 6 2.500-6 2.500-2.500 6-2.500-6-6-2.500 6-2.500z" class="ry"/><circle cx="176" cy="66" r="3.500" class="rp"/><circle cx="22" cy="78" r="3.500" class="rp"/></g>`,
      tear: `<path d="M50 110q-5 9 0 13q5-4 0-13z" class="rt"/>`,
      think: `<g class="r-think"><circle cx="158" cy="38" r="3.500" fill="#cfd6dd"/><circle cx="168" cy="26" r="5.500" fill="#cfd6dd"/><ellipse cx="178" cy="10" rx="13" ry="9" fill="#cfd6dd"/><text x="178" y="14" text-anchor="middle" class="rq">?</text></g>`,
      bang: `<g class="r-sparks"><path d="M176 20v18M176 44v4" class="rex"/><path d="M22 28l8 10M30 18l-3 8" class="rex"/></g>`,
      zzz: `<g class="r-zzz"><text x="158" y="40" class="rz" font-size="22">z</text><text x="172" y="22" class="rz" font-size="15">z</text></g>`,
      hearts: `<g class="r-hearts">${heart(168, 40, .9)}${heart(28, 56, .65)}${heart(180, 70, .5)}</g>`,
      sweat: `<path d="M158 70q-6 11 0 16q6-5 0-16z" class="rt"/>`,
      shine: `<g class="r-sparks"><path d="M170 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="ry"/><path d="M30 44l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="ry"/></g>`,
      curious: `<text x="160" y="40" class="rq2">?</text>`
    };

    const M = {
      happy: { e: "open", m: "smile", a: "rest" },
      cheer: { e: "happy", m: "open", a: "up", x: "sparks", c: "hop" },
      sad: { e: "open", look: [0, 4], m: "frown", b: "sad", a: "rest", x: "tear", c: "droop" },
      think: { e: "open", look: [5, -5], m: "flat", b: "raise", a: "chin", x: "think", c: "tilt" },
      wow: { e: "wide", m: "o", b: "up", a: "up", x: "bang", c: "hop" },
      wink: { e: "wink", m: "grin", a: "rest" },
      sleepy: { e: "closed", m: "tiny", a: "rest", x: "zzz", c: "nod" },
      love: { e: "heart", m: "smile", a: "rest", x: "hearts" },
      proud: { e: "happy", m: "smirk", a: "rest", x: "shine", c: "proud" },
      curious: { e: "open", look: [8, -1], m: "flat", b: "raise", a: "rest", x: "curious", c: "tilt" },
      focus: { e: "open", look: [0, 0], m: "smirk", b: "down", a: "rest" },
      oops: { e: "open", look: [-5, -4], m: "wavy", b: "sad", a: "rest", x: "sweat" },
      eat: { e: "happy", m: "chew", a: "eat", f: "eat" },
      wash: { e: "open", look: [0, 6], m: "smile", a: "wash", f: "wash" },
      yawn: { e: "closed", m: "yawn", a: "rest", c: "yawn" },
      coffee: { e: "happy", m: "smile", a: "mug", f: "mug" }
    }[mood];
    const eyeSvg = M.e === "open" ? eyes.open(...(M.look || [0, 1])) : eyes[M.e]();
    const blink = M.e === "open" ? "r-eyes" : "";
    const furLines = [
      "M70 50q-6 6-8 14", "M84 44q-4 7-4 14", "M116 44q4 7 4 14", "M130 50q6 6 8 14", "M48 100q-6 3-9 8", "M152 100q6 3 9 8",
      "M56 118q-4 4-5 9", "M144 118q4 4 5 9", "M100 40v10"
    ].map(d => `<path d="${d}"/>`).join("");

    return `<svg class="mascot rocco m-${mood}${M.c ? " c-" + M.c : ""}" width="${px}" height="${Math.round(px * 1.05)}" viewBox="0 0 200 210" role="img" aria-label="Rocco">
      <defs>
        <linearGradient id="fur${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdd2d9"/><stop offset=".55" stop-color="#9aa3b0"/><stop offset="1" stop-color="#6c7583"/></linearGradient>
        <radialGradient id="head${u}" cx=".5" cy=".36" r=".72"><stop offset="0" stop-color="#dde1e6"/><stop offset=".58" stop-color="#abb3be"/><stop offset="1" stop-color="#7a8492"/></radialGradient>
        <radialGradient id="belly${u}" cx=".5" cy=".3" r=".85"><stop offset="0" stop-color="#fcf9f3"/><stop offset="1" stop-color="#d6cfc2"/></radialGradient>
        <linearGradient id="mask${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b424e"/><stop offset="1" stop-color="#141820"/></linearGradient>
        <radialGradient id="muz${u}" cx=".5" cy=".3" r=".8"><stop offset="0" stop-color="#fffdf9"/><stop offset="1" stop-color="#d9d2c5"/></radialGradient>
        <radialGradient id="eye${u}" cx=".5" cy=".5" r=".55"><stop offset="0" stop-color="#150c06"/><stop offset=".62" stop-color="#3a2212"/><stop offset="1" stop-color="#94621f"/></radialGradient>
        <linearGradient id="tail${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfc5ce"/><stop offset="1" stop-color="#7f8996"/></linearGradient>
        <linearGradient id="choc${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5535"/><stop offset="1" stop-color="#4f2c19"/></linearGradient>
        <clipPath id="tc${u}"><path d="M118 188C170 202 205 166 198 114C195 88 184 72 168 62C162 98 150 128 122 150Z"/></clipPath>
      </defs>
      <ellipse cx="100" cy="203" rx="60" ry="6" class="rshadow"/>
      <g class="r-tail"><path d="M118 188C170 202 205 166 198 114C195 88 184 72 168 62C162 98 150 128 122 150Z" fill="${g("tail")}"/>
        <g clip-path="url(#tc${u})"><path d="M134 148Q150 176 146 204M156 130Q186 154 198 186M172 104Q198 116 206 148M168 80Q190 82 202 100" class="rring2"/><circle cx="178" cy="70" r="17" class="rd"/></g>
        <path d="M122 150C152 128 164 98 168 62" class="rtedge"/></g>
      <g class="r-body">
        <path d="M52 198C40 160 60 132 100 130C140 132 160 160 148 198Z" fill="${g("fur")}"/>
        <ellipse cx="100" cy="170" rx="27" ry="32" fill="${g("belly")}"/>
        <ellipse cx="70" cy="200" rx="20" ry="9" class="rd2"/><ellipse cx="130" cy="200" rx="20" ry="9" class="rd2"/>
        <path d="M56 200v-3M64 202v-3M72 202v-3M78 200v-3M122 200v-3M128 202v-3M136 202v-3M144 200v-3" class="rtoes"/>
      </g>
      <g class="r-arms">${armsets[M.a]}</g>
      <g class="r-head">
        <path d="M60 58C46 34 56 14 76 20C86 24 90 36 88 46Z" fill="${g("fur")}"/><path d="M140 58C154 34 144 14 124 20C114 24 110 36 112 46Z" fill="${g("fur")}"/>
        <path d="M62 50C54 36 60 26 72 28C78 32 80 40 78 46Z" class="rear"/><path d="M138 50C146 36 140 26 128 28C122 32 120 40 122 46Z" class="rear"/>
        <path d="M56 38C54 28 62 20 74 22M144 38C146 28 138 20 126 22" class="rpale"/>
        <path d="M100 32C140 32 168 56 170 90C172 120 142 148 100 148C58 148 28 120 30 90C32 56 60 32 100 32Z" fill="${g("head")}"/>
        <path d="M36 94Q22 98 20 110Q28 106 31 113Q24 121 31 128Q39 120 48 120ZM164 94Q178 98 180 110Q172 106 169 113Q176 121 169 128Q161 120 152 120Z" fill="url(#head${u})" class="rtuft"/>
        <g class="rfur">${furLines}</g>
        <path d="M100 34C92 46 91 64 95 84H105C109 64 108 46 100 34Z" class="rblaze"/>
        <path d="M40 86C50 66 82 66 96 88L104 88C118 66 150 66 160 86C163 110 140 118 118 106C110 101 105 94 100 94C95 94 90 101 82 106C60 118 37 110 40 86Z" fill="${g("mask")}"/>
        <path d="M40 86C50 66 82 66 96 88L104 88C118 66 150 66 160 86" class="rmedge"/>
        <ellipse cx="100" cy="116" rx="30" ry="25" fill="${g("muz")}"/>
        <g class="${blink}">${eyeSvg}</g>
        ${M.b ? brows[M.b] : ""}
        <path d="M89 99Q100 92 111 99Q109 111 100 114Q91 111 89 99Z" class="rn"/><ellipse cx="95" cy="98" rx="4.500" ry="2" class="rnhl"/>
        <g class="r-mouth">${mouths[M.m]}</g>
        <path d="M78 114Q54 108 36 114M78 118Q56 120 38 130M78 110Q58 100 44 100M122 114Q146 108 164 114M122 118Q144 120 162 130M122 110Q142 100 156 100" class="rwh"/>
        <circle cx="48" cy="112" r="6" class="rp" opacity=".25"/><circle cx="152" cy="112" r="6" class="rp" opacity=".25"/>
      </g>
      ${M.f ? front[M.f] : ""}
      ${M.x ? extras[M.x] : ""}
    </svg>`;
  };

  /* ----- Comentarios de Rocco -----
     Frases cortas según lo que acaba de pasar. Tono: cercano, con humor y sin culpa. Nunca regaña ni insiste.
     roccoSay(evento) devuelve una frase al azar en el idioma de la interfaz (sin repetir la anterior del mismo evento). */
  const SAY = {
    es: {
      correct: ["¡Así se hace!", "Eso estuvo limpio.", "Bien jugado.", "¡Directo al blanco!", "Esa la tenías.", "Me gusta cómo piensas."],
      streak3: ["¡Tres seguidas! Calentando motores.", "Racha en marcha. ¡Sigue así!", "Esto se está poniendo bueno."],
      streak5: ["¡Cinco seguidas! Estás imparable.", "Mis bigotes dicen que hoy es tu día.", "¡Qué racha! Me dieron ganas de aplaudir."],
      streak8: ["¡Ocho! Ya soy tu fan número uno.", "Esto es de otro nivel. ¡Bravo!", "Racha legendaria. Mereces un chocolate."],
      wrong: ["Casi. Así se aprende.", "Tranquilo, esa se resiste a todos.", "Un error es solo una pista.", "Pasa. La próxima sale.", "Esa pieza no encajó, ya encajará."],
      wrong2: ["Respira. Sin prisa, aquí no hay reloj.", "Dos seguidas no pesan: vamos con calma.", "Si quieres, lee la frase en voz alta antes de elegir."],
      done3: ["¡Sin un solo fallo! Qué nivel.", "Perfecto. Hasta yo me quedé sin palabras.", "Tres estrellas limpias. ¡Qué bien suena eso!"],
      done2: ["¡Muy buen nivel! Casi perfecto.", "Bien hecho. Un par de detalles y brillas.", "Buen trabajo, se nota el avance."],
      done1: ["Lo terminaste, y eso ya cuenta mucho.", "Cada vuelta suma. Repetirlo sale más fácil.", "A veces lo difícil es empezar; tú terminaste."],
      examPass: ["¡Aprobada! Qué orgullo.", "Sesión superada. ¡Eso merece celebración!"],
      examFail: ["Casi. Ya sabes qué repasar, y eso es lo valioso.", "Esta vez no, pero vas muy cerca. Otra vez será."],
      greetMorning: ["¡Buenos días! ¿Empezamos suave?", "Buen día. Café para ti, chocolate para mí."],
      greetAfternoon: ["¡Buenas tardes! Justo a tiempo.", "Hola de nuevo. ¿Una lección corta?"],
      greetEvening: ["¡Buenas noches! Una lección antes de dormir ayuda.", "Qué bueno verte esta noche."],
      greetNight: ["Uy, qué hora. Cuando quieras, sin prisa.", "Aquí estoy, aunque me dé sueño."],
      back: ["¡Qué bueno verte! Aquí seguía.", "Volviste. Retomamos donde quieras, sin presión."],
      noHearts: ["Hoy toca descansar. Mañana vuelven las vidas.", "Pausa merecida. Vuelve cuando quieras."],
      tap: ["¡Eh, cosquillas!", "¿Me llamabas?", "Presente.", "¡Hola!", "Psst… ¿una más?"],
      eat: ["Mmm… chocolate. Es para el cerebro, claro.", "Solo una onza. Bueno, dos.", "Concentración con sabor."],
      wash: ["Un mapache limpio aprende mejor.", "Lavando patitas, ya vuelvo.", "Siempre lavo mis palabras. Y mi comida."],
      coffee: ["Pausa de café y seguimos.", "Recargando energía.", "Hasta los mapaches necesitan su momento."],
      yawn: ["Uaaah… perdón, es contagioso.", "¿Ya es hora de una siesta?"],
      sleepy: ["Zzz… ¿ya empezamos?", "Solo cierro los ojos un segundo…"],
      think: ["Hmm… ¿qué palabra tocará hoy?", "Pensando en frases bonitas."],
      curious: ["¿Qué habrá en la siguiente unidad?", "Huele a palabra nueva."]
    },
    en: {
      correct: ["Nicely done!", "That was clean.", "Well played.", "Right on target!", "You had that one.", "I like how you think."],
      streak3: ["Three in a row! Warming up.", "Streak started. Keep going!", "This is getting good."],
      streak5: ["Five in a row! Unstoppable.", "My whiskers say today is your day.", "What a streak! I almost clapped."],
      streak8: ["Eight! I'm officially your number one fan.", "This is next level. Bravo!", "Legendary streak. You deserve a chocolate."],
      wrong: ["Close. That's how it sticks.", "Relax, that one tricks everyone.", "A mistake is just a clue.", "It happens. Next one's yours.", "That piece didn't fit yet. It will."],
      wrong2: ["Breathe. No rush, there's no clock here.", "Two in a row is nothing. Let's go slowly.", "Try reading the sentence aloud before choosing."],
      done3: ["Not a single slip! Impressive.", "Perfect. Even I'm speechless.", "Three clean stars. That sounds good."],
      done2: ["Great level! Almost perfect.", "Well done. A couple of details and you shine.", "Good work, the progress shows."],
      done1: ["You finished it, and that counts a lot.", "Every round adds up. It gets easier.", "Starting is the hard part. You finished."],
      examPass: ["Passed! So proud.", "Session cleared. That deserves a celebration!"],
      examFail: ["Close. Now you know what to review, which is valuable.", "Not this time, but you are very near. Next time."],
      greetMorning: ["Good morning! Shall we start gently?", "Good day. Coffee for you, chocolate for me."],
      greetAfternoon: ["Good afternoon! Right on time.", "Hello again. A short lesson?"],
      greetEvening: ["Good evening! A lesson before bed helps.", "So good to see you tonight."],
      greetNight: ["Wow, what a time. Whenever you like, no rush.", "I'm here, even if I'm sleepy."],
      back: ["So good to see you! I was still here.", "You're back. We pick up wherever you like, no pressure."],
      noHearts: ["Time to rest today. Lives are back tomorrow.", "Well-earned pause. Come back whenever you like."],
      tap: ["Hey, that tickles!", "Did you call me?", "Present.", "Hi there!", "Psst… one more?"],
      eat: ["Mmm… chocolate. It's for the brain, obviously.", "Just one square. Okay, two.", "Concentration with flavour."],
      wash: ["A clean raccoon learns better.", "Washing my paws, back in a sec.", "I always wash my words. And my food."],
      coffee: ["Coffee break, then we carry on.", "Recharging.", "Even raccoons need a moment."],
      yawn: ["Yaaawn… sorry, it's contagious.", "Is it nap time already?"],
      sleepy: ["Zzz… are we starting?", "Just closing my eyes for a second…"],
      think: ["Hmm… which word will it be today?", "Thinking of pretty sentences."],
      curious: ["What's in the next unit?", "Smells like a new word."]
    }
  };
  const lastSay = {};
  window.roccoSay = ev => {
    const lang = window.uiLang && uiLang() === "en" ? "en" : "es", list = SAY[lang][ev]; if (!list) return "";
    let i = Math.floor(Math.random() * list.length);
    if (list.length > 1 && i === lastSay[lang + ev]) i = (i + 1) % list.length;
    lastSay[lang + ev] = i; return list[i];
  };
  window.ROCCO_SAY = SAY;

  window.mascot = window.rocco;
})();
