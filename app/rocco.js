/* Rocco, el mapache de la app.
   Dibujo propio en SVG (200x210), con volumen en el pelaje, máscara, ojos con brillo, bigotes, cola anillada y patas con dedos.
   rocco(mood, px) devuelve el SVG; las partes son grupos con clase (r-tail, r-body, r-head, r-eyes, r-arms...) que animan los estilos de
   styles.css (respiración, parpadeo, cola, orejas, masticar, lavarse las patas...).
   Gestos: happy cheer sad think wow wink sleepy love proud curious focus oops eat wash yawn coffee
   y los nuevos laugh cry angry shy dizzy starry cool kiss thumbsup wave party sick bored sing,
   más los que usan objetos: phone music read laptop camera icecream balloon game.
   window.mascot es un alias para que el resto de la app siga llamando a mascot(mood, px). */
(() => {
  window.MASCOT_MOODS = ["happy", "cheer", "sad", "think", "wow", "wink", "sleepy", "love", "proud", "curious", "focus", "oops", "eat", "wash", "yawn", "coffee", "laugh", "cry", "angry", "shy", "dizzy", "starry", "cool", "kiss", "thumbsup", "wave", "party", "sick", "bored", "sing", "phone", "music", "read", "laptop", "camera", "icecream", "balloon", "game"];
  /* Gestos para reacciones al tocar a Rocco (sin los que expresan tristeza) y actividades "al azar" que hace por su cuenta. */
  window.MASCOT_REACTIONS = ["wink", "love", "wow", "cheer", "proud", "curious", "yawn", "laugh", "shy", "kiss", "starry", "cool", "thumbsup", "wave", "party", "dizzy"];
  window.MASCOT_ACTIVITIES = ["eat", "wash", "coffee", "yawn", "sleepy", "curious", "think", "think", "sing", "bored", "phone", "music", "read", "laptop", "camera", "icecream", "balloon", "game"];

  let uid = 0;
  /* Trazos de pelo: cada uno nace en un punto del volumen y sale hacia fuera. Se generan una vez, con semilla fija, y se reutilizan. */
  const fur = (() => {
    let a = 20260117; const rnd = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const make = (n, inside, dirFn, len, curve = 2) => {
      const L = [], D = []; let k = 0, guard = 0;
      while (k < n && guard++ < n * 40) {
        const x = 20 + rnd() * 160, y = 20 + rnd() * 190; if (!inside(x, y)) continue;
        const [dx, dy] = dirFn(x, y), l = len * (.7 + rnd() * .6), m = Math.hypot(dx, dy) || 1, ux = dx / m, uy = dy / m;
        const x2 = x + ux * l, y2 = y + uy * l, cx = (x + x2) / 2 - uy * curve * (rnd() - .5) * 2, cy = (y + y2) / 2 + ux * curve * (rnd() - .5) * 2;
        const d = `M${x.toFixed(1)} ${y.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
        (k % 2 ? D : L).push(d); k++;
      }
      return [L.join(""), D.join("")];
    };
    const head = make(130, (x, y) => ((x - 100) / 72) ** 2 + ((y - 92) / 60) ** 2 < 1, (x, y) => [x - 100, y - 84], 9);
    const body = make(70, (x, y) => ((x - 100) / 50) ** 2 + ((y - 172) / 34) ** 2 < 1, (x, y) => [(x - 100) * .6, 1], 8);
    const tail = make(70, (x, y) => ((x - 170) / 32) ** 2 + ((y - 128) / 70) ** 2 < 1, (x, y) => [x - 140, y - 150], 8);
    return { head, body, tail };
  })();
  const heart = (cx, cy, s = 1, cls = "rh") => `<path d="M${cx} ${cy + 7 * s}C${cx - 13 * s} ${cy - 1 * s} ${cx - 7 * s} ${cy - 10 * s} ${cx} ${cy - 4 * s}C${cx + 7 * s} ${cy - 10 * s} ${cx + 13 * s} ${cy - 1 * s} ${cx} ${cy + 7 * s}Z" class="${cls}"/>`;
  const paw = (x, y, rot = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" class="r-paw"><ellipse cx="0" cy="0" rx="11" ry="9.500" class="rd2"/><circle cx="-7" cy="-8" r="3.800" class="rd2"/><circle cx="-2.500" cy="-10.500" r="3.800" class="rd2"/><circle cx="2.500" cy="-10.500" r="3.800" class="rd2"/><circle cx="7" cy="-8" r="3.800" class="rd2"/><ellipse cx="-3" cy="-2" rx="4" ry="2.200" class="rhl"/></g>`;
  const arm = (x1, y1, x2, y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" class="rarm"/><path d="M${x1 + 3} ${y1}L${x2 + 2} ${y2}" class="rarm2"/>`;

  window.rocco = (mood = "happy", px = 120) => {
    if (!window.MASCOT_MOODS.includes(mood)) mood = "happy";
    const u = "r" + (++uid);
    const g = id => `url(#${id}${u})`;
    const L = [71, 95], R = [129, 95];

    /* ----- ojos ----- */
    const eyeOpen = (cx, cy, dx = 0, dy = 0, rx = 12.5, ry = 14) =>
      `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${g("eye")}"/><circle cx="${cx + dx * .6}" cy="${cy + dy * .6}" r="${rx * .42}" class="rn"/><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${g("lidsh")}"/><path d="M${cx - rx + 2} ${cy + ry * .55}Q${cx} ${cy + ry + 1} ${cx + rx - 2} ${cy + ry * .55}" class="reyelow"/>` +
      `<circle cx="${cx + dx + 4}" cy="${cy + dy - 5}" r="4.600" fill="#fff"/><circle cx="${cx + dx - 3.500}" cy="${cy + dy + 4.500}" r="2.300" fill="#fff" opacity=".85"/><circle cx="${cx + dx + 5.500}" cy="${cy + dy + 2}" r="1.100" fill="#fff" opacity=".9"/>`;
    const arc = (cx, cy, up = true) => `<path d="M${cx - 12} ${cy + 3}Q${cx} ${up ? cy - 14 : cy + 15} ${cx + 12} ${cy + 3}" class="rk"/>`;
    const starPath = (cx, cy, r) => { let d = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return d + "Z"; };
    const starEye = (cx, cy) => `<path d="${starPath(cx, cy, 15)}" class="rstar"/><circle cx="${cx - 3}" cy="${cy - 4}" r="2.600" fill="#fff" opacity=".9"/>`;
    const spiral = (cx, cy) => `<path d="M${cx} ${cy}m0-2.500a2.500 2.500 0 1 1-2.500 2.500a5 5 0 1 1 5-5a7.500 7.500 0 1 1-7.500 7.500a10 10 0 1 1 10-10" class="rk"/>`;
    const eyes = {
      open: (dx = 0, dy = 1) => eyeOpen(...L, dx, dy) + eyeOpen(...R, dx, dy),
      wide: () => eyeOpen(...L, 0, 0, 14, 15.500) + eyeOpen(...R, 0, 0, 14, 15.500) + `<circle cx="${L[0]}" cy="${L[1]}" r="17" class="rring"/><circle cx="${R[0]}" cy="${R[1]}" r="17" class="rring"/>`,
      star: () => starEye(...L) + starEye(...R),
      spiral: () => spiral(...L) + spiral(...R),
      cool: () => `<g class="rsun"><rect x="49" y="82" width="45" height="26" rx="10"/><rect x="106" y="82" width="45" height="26" rx="10"/><path d="M94 90Q100 85 106 90" class="rsunb"/></g><path d="M56 88l14 -2M113 88l14 -2" class="rsunhl"/>`,
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
      down: `<path d="M60 70L84 79M140 70L116 79" class="rb"/>`,
      angry: `<path d="M56 68L86 82M144 68L114 82" class="rb rb2"/>`,
      worry: `<path d="M58 78Q70 66 86 76M142 78Q130 66 114 76" class="rb"/>`
    };

    /* ----- boca ----- */
    const mouths = {
      smile: `<path d="M100 111V118M87 118Q93.500 129 100 118Q106.500 129 113 118" class="rm"/>`,
      grin: `<path d="M82 119Q100 148 118 119Z" class="rmo"/><path d="M92 133Q100 141 108 133Q100 128 92 133Z" class="rp"/>`,
      open: `<path d="M79 117Q100 158 121 117Z" class="rmo"/><path d="M90 137Q100 148 110 137Q100 129 90 137Z" class="rp"/><path d="M86 118H114" class="rteeth"/>`,
      o: `<ellipse cx="100" cy="128" rx="7" ry="9" class="rmo"/>`,
      frown: `<path d="M100 110V120M85 133Q100 118 115 133" class="rm"/>`,
      flat: `<path d="M100 110V121M90 124H110" class="rm"/>`,
      smirk: `<path d="M100 110V121M88 125Q102 131 116 120" class="rm"/>`,
      tiny: `<ellipse cx="100" cy="124" rx="4.500" ry="3.300" class="rmo"/>`,
      pout: `<path d="M100 111V118M90 128Q100 119 110 128" class="rm"/>`,
      laugh: `<path d="M80 116Q100 158 120 116Z" class="rmo"/><path d="M92 140Q100 148 108 140Q100 133 92 140Z" class="rp"/><path d="M86 117H114" class="rteeth"/>`,
      sob: `<path d="M100 111V118M86 132Q93 120 100 128Q107 120 114 132" class="rm"/>`,
      kiss: `<path d="M100 111V117"  class="rm"/><ellipse cx="104" cy="125" rx="5" ry="6" class="rmo"/>`,
      cat: `<path d="M100 111V117M88 117Q94 126 100 117Q106 126 112 117" class="rm"/><path d="M98 122l2 5l2 -5" class="rteeth"/>`,
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
      eat: "", wash: "", mug: arm(58, 150, 64, 178) + paw(64, 181, 10),
      none: "",
      cheeks: arm(58, 152, 48, 122) + arm(142, 152, 152, 122) + paw(47, 117, -20) + paw(153, 117, 20),
      thumb: arm(142, 150, 136, 178) + paw(136, 181, -10) + arm(58, 152, 34, 128),
      wave: arm(142, 150, 136, 178) + paw(136, 181, -10) + `<g class="r-wave">${arm(56, 150, 26, 112)}${paw(24, 104, -20)}</g>`,
      hug: arm(58, 150, 30, 138) + arm(142, 150, 170, 138) + paw(26, 134, -40) + paw(174, 134, 40)
    };
    const front = {
      chin: paw(112, 138, -60),
      thumb: `<g transform="translate(30 118)"><ellipse cx="0" cy="0" rx="12" ry="11" class="rd2"/><ellipse cx="1" cy="-15" rx="4.800" ry="9" class="rd2" transform="rotate(8)"/><path d="M-8 3h16M-8 -2h16" class="rtoes"/></g>`,
      phone: `<g class="r-phone"><rect x="85" y="140" width="30" height="48" rx="6" class="rphone"/><rect x="88.500" y="144" width="23" height="38" rx="3" class="rscreen"/><path d="M92 152h14M92 158h10M92 164h13" class="rui"/><circle cx="96" cy="174" r="3" class="rheart"/></g>
        ${arm(62, 152, 86, 160)}${arm(138, 152, 114, 160)}<g class="r-tapl">${paw(86, 162, 20)}</g><g class="r-tapr">${paw(114, 162, -20)}</g>`,
      music: `<path d="M42 96C34 36 166 36 158 96" class="rband"/><ellipse cx="40" cy="102" rx="9" ry="14" class="rcup"/><ellipse cx="160" cy="102" rx="9" ry="14" class="rcup"/><ellipse cx="40" cy="102" rx="5" ry="9" class="rcup2"/><ellipse cx="160" cy="102" rx="5" ry="9" class="rcup2"/>`,
      read: `<g class="r-book"><path d="M62 150Q81 141 100 150V190Q81 181 62 190Z" class="rbookp"/><path d="M138 150Q119 141 100 150V190Q119 181 138 190Z" class="rbookp"/><path d="M68 158Q81 153 94 158M68 166Q81 161 94 166M68 174Q81 169 94 174M106 158Q119 153 132 158M106 166Q119 161 132 166M106 174Q119 169 132 174" class="rtxt"/><path d="M62 190Q81 181 100 190Q119 181 138 190" class="rbookc"/></g>
        ${arm(62, 152, 66, 168)}${arm(138, 152, 134, 168)}${paw(64, 172, 10)}${paw(136, 172, -10)}`,
      laptop: `<g class="r-laptop"><rect x="64" y="140" width="72" height="42" rx="5" class="rlap"/><circle cx="100" cy="161" r="6" class="rlogo"/><path d="M58 182H142L136 189H64Z" class="rlap2"/></g>
        ${arm(62, 152, 76, 178)}${arm(138, 152, 124, 178)}<g class="r-tapl">${paw(78, 180, 10)}</g><g class="r-tapr">${paw(122, 180, -10)}</g>`,
      camera: `<g class="r-camera"><rect x="72" y="142" width="56" height="36" rx="7" class="rcam"/><rect x="82" y="136" width="20" height="9" rx="3" class="rcam"/><circle cx="100" cy="160" r="13" class="rcam2"/><circle cx="100" cy="160" r="9" class="rlens"/><circle cx="96" cy="156" r="3" class="rlenshl"/><rect x="112" y="146" width="10" height="6" rx="2" class="rflashb"/></g>
        <path d="M122 140l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" class="rflash"/>${arm(62, 152, 76, 168)}${arm(138, 152, 124, 168)}${paw(74, 170, 10)}${paw(126, 170, -10)}`,
      icecream: `<g class="r-ice"><path d="M130 148L146 148L138 186Z" class="rcone"/><path d="M133 154L142 164M139 152L135 168M143 154L134 163" class="rwaf"/><circle cx="138" cy="143" r="11" class="rice1"/><circle cx="138" cy="132" r="9" class="rice2"/><path d="M128 146q-2 8 1 10" class="rdrip"/></g>
        ${arm(142, 154, 138, 160)}${paw(138, 158, -5)}`,
      balloon: `<path d="M152 112Q164 78 162 52" class="rstring"/><g class="r-balloon"><ellipse cx="162" cy="36" rx="17" ry="21" class="rballoon"/><path d="M162 57l-4 6h8z" class="rballoon"/><ellipse cx="155" cy="28" rx="4" ry="7" class="rballhl"/></g>
        ${arm(142, 152, 150, 118)}${paw(150, 112, 10)}`,
      game: `<g class="r-game"><rect x="70" y="148" width="60" height="28" rx="13" class="rpad"/><path d="M84 156v12M78 162h12" class="rdpad"/><circle cx="116" cy="156" r="3.500" class="rbtn1"/><circle cx="123" cy="162" r="3.500" class="rbtn2"/><circle cx="109" cy="163" r="3.500" class="rbtn3"/></g>
        ${arm(62, 152, 76, 166)}${arm(138, 152, 124, 166)}<g class="r-tapl">${paw(78, 168, 15)}</g><g class="r-tapr">${paw(122, 168, -15)}</g>`,
      hat: `<path d="M100 2L76 42H124Z" class="rhat"/><path d="M85 28L115 28M80 36L120 36" class="rhat2"/><circle cx="100" cy="4" r="6" class="rpom"/>`,
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
      curious: `<text x="160" y="40" class="rq2">?</text>`,
      joy: `<g class="r-tears"><path d="M44 100q-6 10 0 15q6-5 0-15z" class="rt"/><path d="M156 100q-6 10 0 15q6-5 0-15z" class="rt"/></g>`,
      cry: `<g class="r-tears"><path d="M60 112Q56 128 62 142M140 112Q144 128 138 142" class="rtear"/><path d="M52 108q-6 10 0 15q6-5 0-15z" class="rt"/><path d="M148 108q-6 10 0 15q6-5 0-15z" class="rt"/></g>`,
      anger: `<g class="r-sparks"><path d="M150 36l10 2l2 10M146 28l8 -6M164 50l8 4" class="rex rex2"/></g>`,
      blush: `<g class="r-sparks"><path d="M40 108l-6 4M44 114l-6 4M160 108l6 4M156 114l6 4" class="rbl"/></g>`,
      dizzy: `<g class="r-sparks"><path d="M62 26l2.500 6 6 2.500-6 2.500-2.500 6-2.500-6-6-2.500 6-2.500z" class="ry"/><path d="M138 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="ry"/><circle cx="100" cy="18" r="3.500" class="rp"/></g>`,
      kiss: `<g class="r-hearts">${heart(138, 118, .7)}${heart(158, 98, .5)}</g>`,
      notes: `<g class="r-hearts"><text x="150" y="40" class="rnote">♪</text><text x="26" y="52" class="rnote" font-size="18">♫</text><text x="168" y="74" class="rnote" font-size="16">♪</text></g>`,
      confetti: `<g class="r-sparks"><path d="M24 40l6 3M168 36l-5 5M34 70l5-4M176 80l-6 2" class="rex"/><circle cx="26" cy="64" r="3" class="rp"/><circle cx="174" cy="56" r="3" class="rt"/><circle cx="50" cy="26" r="3" class="ry"/><circle cx="150" cy="20" r="3" class="rh"/></g>`,
      sick: `<g class="rgreen"><ellipse cx="53" cy="115" rx="12" ry="8"/><ellipse cx="147" cy="115" rx="12" ry="8"/></g><path d="M158 70q-6 11 0 16q6-5 0-16z" class="rt"/>`,
      blushbig: `<ellipse cx="53" cy="115" rx="13" ry="8" class="rp rblush2"/><ellipse cx="147" cy="115" rx="13" ry="8" class="rp rblush2"/>`
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
      coffee: { e: "happy", m: "smile", a: "mug", f: "mug" },
      laugh: { e: "happy", m: "laugh", a: "rest", x: "joy", c: "hop" },
      cry: { e: "open", look: [0, 5], m: "sob", b: "worry", a: "rest", x: "cry", c: "droop" },
      angry: { e: "open", look: [0, 2], m: "pout", b: "angry", a: "rest", x: "anger", c: "tilt" },
      shy: { e: "open", look: [5, 6], m: "tiny", b: "worry", a: "cheeks", k: "blushbig", x: "blush", c: "proud" },
      dizzy: { e: "spiral", m: "wavy", a: "rest", x: "dizzy", c: "tilt" },
      starry: { e: "star", m: "open", a: "up", x: "sparks", c: "hop" },
      cool: { e: "cool", m: "smirk", a: "rest", x: "shine", c: "proud" },
      kiss: { e: "happy", m: "kiss", a: "rest", x: "kiss" },
      thumbsup: { e: "wink", m: "grin", a: "thumb", f: "thumb", x: "shine" },
      wave: { e: "open", m: "cat", a: "wave", c: "hop" },
      party: { e: "happy", m: "laugh", a: "up", f: "hat", x: "confetti", c: "hop" },
      sick: { e: "half", m: "wavy", b: "worry", a: "rest", x: "sick", c: "droop" },
      bored: { e: "half", m: "flat", a: "chin", f: "chin", c: "tilt" },
      sing: { e: "happy", m: "o", a: "rest", x: "notes", c: "hop" },
      phone: { e: "open", look: [0, 6], m: "smile", a: "none", f: "phone", x: "hearts", c: "tilt" },
      music: { e: "happy", m: "smile", a: "rest", f: "music", x: "notes", c: "nod" },
      read: { e: "open", look: [0, 7], m: "flat", b: "raise", a: "none", f: "read", c: "tilt" },
      laptop: { e: "open", look: [0, 6], m: "smirk", b: "down", a: "none", f: "laptop" },
      camera: { e: "wink", m: "grin", a: "none", f: "camera" },
      icecream: { e: "happy", m: "grin", a: "rest", f: "icecream", x: "shine" },
      balloon: { e: "open", look: [4, -4], m: "smile", a: "rest", f: "balloon", c: "tilt" },
      game: { e: "open", look: [0, 6], m: "grin", b: "down", a: "none", f: "game", c: "tilt" }
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
        <radialGradient id="eye${u}" cx=".5" cy=".5" r=".55"><stop offset="0" stop-color="#0f0804"/><stop offset=".4" stop-color="#1a0e07"/><stop offset=".52" stop-color="#5b3513"/><stop offset=".78" stop-color="#b4782c"/><stop offset=".93" stop-color="#6a4016"/><stop offset="1" stop-color="#2a170a"/></radialGradient>
        <linearGradient id="lidsh${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset=".5" stop-color="#000" stop-opacity="0"/></linearGradient>
        <radialGradient id="nose${u}" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="#4a525d"/><stop offset=".5" stop-color="#262b33"/><stop offset="1" stop-color="#0d1015"/></radialGradient>
        <radialGradient id="cheek${u}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff8fb1" stop-opacity=".75"/><stop offset="1" stop-color="#ff8fb1" stop-opacity="0"/></radialGradient>
        <clipPath id="hc${u}"><path d="M100 32C140 32 168 56 170 90C172 120 142 148 100 148C58 148 28 120 30 90C32 56 60 32 100 32Z"/></clipPath>
        <clipPath id="bc${u}"><path d="M52 198C40 160 60 132 100 130C140 132 160 160 148 198Z"/></clipPath>
        <linearGradient id="tail${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfc5ce"/><stop offset="1" stop-color="#7f8996"/></linearGradient>
        <linearGradient id="choc${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5535"/><stop offset="1" stop-color="#4f2c19"/></linearGradient>
        <clipPath id="tc${u}"><path d="M118 188C170 202 205 166 198 114C195 88 184 72 168 62C162 98 150 128 122 150Z"/></clipPath>
      </defs>
      <ellipse cx="100" cy="203" rx="60" ry="6" class="rshadow"/>
      <g class="r-tail"><path d="M118 188C170 202 205 166 198 114C195 88 184 72 168 62C162 98 150 128 122 150Z" fill="${g("tail")}"/>
        <g clip-path="url(#tc${u})"><path d="M134 148Q150 176 146 204M156 130Q186 154 198 186M172 104Q198 116 206 148M168 80Q190 82 202 100" class="rring2"/><circle cx="178" cy="70" r="17" class="rd"/><path d="${fur.tail[0]}" class="rfl"/><path d="${fur.tail[1]}" class="rfd"/></g>
        <path d="M122 150C152 128 164 98 168 62" class="rtedge"/></g>
      <g class="r-body">
        <path d="M52 198C40 160 60 132 100 130C140 132 160 160 148 198Z" fill="${g("fur")}"/>
        <g clip-path="url(#bc${u})"><path d="${fur.body[0]}" class="rfl"/><path d="${fur.body[1]}" class="rfd"/></g>
        <ellipse cx="100" cy="170" rx="27" ry="32" fill="${g("belly")}"/>
        <path d="M86 150Q92 158 90 168M100 148Q103 158 100 170M114 150Q108 158 110 168" class="rbellyfur"/>
        <ellipse cx="100" cy="136" rx="40" ry="10" class="rchin"/>
        <ellipse cx="70" cy="200" rx="20" ry="9" class="rd2"/><ellipse cx="130" cy="200" rx="20" ry="9" class="rd2"/>
        <path d="M56 200v-3M64 202v-3M72 202v-3M78 200v-3M122 200v-3M128 202v-3M136 202v-3M144 200v-3" class="rtoes"/>
      </g>
      <g class="r-arms">${armsets[M.a]}</g>
      <g class="r-head">
        <path d="M60 58C46 34 56 14 76 20C86 24 90 36 88 46Z" fill="${g("fur")}"/><path d="M140 58C154 34 144 14 124 20C114 24 110 36 112 46Z" fill="${g("fur")}"/>
        <path d="M62 50C54 36 60 26 72 28C78 32 80 40 78 46Z" class="rear"/><path d="M138 50C146 36 140 26 128 28C122 32 120 40 122 46Z" class="rear"/>
        <path d="M56 38C54 28 62 20 74 22M144 38C146 28 138 20 126 22" class="rpale"/>
        <path d="M66 46Q68 38 72 32M72 48Q75 40 79 36M134 46Q132 38 128 32M128 48Q125 40 121 36" class="rearfur"/>
        <path d="M100 32C140 32 168 56 170 90C172 120 142 148 100 148C58 148 28 120 30 90C32 56 60 32 100 32Z" fill="${g("head")}"/>
        <g clip-path="url(#hc${u})"><path d="${fur.head[0]}" class="rfl"/><path d="${fur.head[1]}" class="rfd"/><ellipse cx="100" cy="44" rx="52" ry="14" class="rtop"/></g>
        <path d="M36 94Q22 98 20 110Q28 106 31 113Q24 121 31 128Q39 120 48 120ZM164 94Q178 98 180 110Q172 106 169 113Q176 121 169 128Q161 120 152 120Z" fill="url(#head${u})" class="rtuft"/>
        <g class="rfur">${furLines}</g>
        <path d="M100 34C92 46 91 64 95 84H105C109 64 108 46 100 34Z" class="rblaze"/>
        <path d="M40 86C50 66 82 66 96 88L104 88C118 66 150 66 160 86C163 110 140 118 118 106C110 101 105 94 100 94C95 94 90 101 82 106C60 118 37 110 40 86Z" fill="${g("mask")}"/>
        <path d="M40 86C50 66 82 66 96 88L104 88C118 66 150 66 160 86" class="rmedge"/>
        <ellipse cx="100" cy="116" rx="30" ry="25" fill="${g("muz")}"/>
        <g class="${blink}">${eyeSvg}</g>
        ${M.b ? brows[M.b] : ""}
        <path d="M91 101Q100 94 109 101Q107 110 100 112.500Q93 110 91 101Z" fill="${g("nose")}"/><ellipse cx="95.500" cy="99.500" rx="4.200" ry="2" class="rnhl"/><circle cx="103" cy="103" r="1.100" class="rnhl2"/>
        <g class="r-mouth">${mouths[M.m]}</g>
        <path d="M78 114Q54 106 34 112M78 118Q56 122 36 134M78 110Q58 98 44 96M122 114Q146 106 166 112M122 118Q144 122 164 134M122 110Q142 98 156 96" class="rwh"/><g class="rdots"><circle cx="82" cy="112" r="1.200"/><circle cx="86" cy="116" r="1.200"/><circle cx="84" cy="120" r="1.200"/><circle cx="118" cy="112" r="1.200"/><circle cx="114" cy="116" r="1.200"/><circle cx="116" cy="120" r="1.200"/></g>
        <ellipse cx="53" cy="116" rx="15" ry="9" fill="${g("cheek")}"/><ellipse cx="147" cy="116" rx="15" ry="9" fill="${g("cheek")}"/>${M.k ? extras[M.k] : ""}
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
      tap: ["¡Eh, cosquillas!", "Psst… ¿una más?", "Ay, qué risa.", "¿Qué haces, curioso?", "Eso me gusta."],
      tip: ["Repite en voz alta: la boca también aprende.", "Cinco minutos al día valen más que una hora al mes.", "Si una palabra se resiste, invéntale una frase tonta.", "Escucha primero y lee después. Tu oído te lo agradecerá.", "Equivocarse es la mitad de aprender."],
      joke: ["¿Qué hace un mapache en clase de idiomas? Rascar el vocabulario.", "Mi palabra favorita es «chocolate», en todos los idiomas.", "Dicen que lavo la comida. Yo también lavo las palabras.", "Mis rayas no son por aburrimiento: son por estilo."],
      word: ["¿Te suena esta?", "Palabra rápida:", "Apunta esta:", "Mira lo que encontré:"],
      dizzy: ["¡Uy, me mareo!", "¡Despacio, que doy vueltas!"],
      enough: ["¡Vale, vale! Me voy a descansar un ratito.", "Demasiadas cosquillas. Vuelvo en un momento."],
      eat: ["Mmm… chocolate. Es para el cerebro, claro.", "Solo una onza. Bueno, dos.", "Concentración con sabor."],
      wash: ["Un mapache limpio aprende mejor.", "Lavando patitas, ya vuelvo.", "Siempre lavo mis palabras. Y mi comida."],
      coffee: ["Pausa de café y seguimos.", "Recargando energía.", "Hasta los mapaches necesitan su momento."],
      yawn: ["Uaaah… perdón, es contagioso.", "¿Ya es hora de una siesta?"],
      sleepy: ["Zzz… ¿ya empezamos?", "Solo cierro los ojos un segundo…"],
      think: ["Hmm… ¿qué palabra tocará hoy?", "Pensando en frases bonitas."],
      curious: ["¿Qué habrá en la siguiente unidad?", "Huele a palabra nueva."],
      sing: ["La la la… ¡practicando pronunciación!", "Cantar ayuda a recordar las palabras.", "♪ Una palabra, dos palabras… ♪"],
      bored: ["Uf, qué quietud. ¿Hacemos algo?", "Cuéntame, ¿qué palabra toca hoy?"],
      phone: ["Mirando el móvil… solo un minuto.", "Me escribió una ardilla. Dice que estudie.", "Mensajes sin leer: cero. Paz."],
      music: ["Con música las palabras se pegan mejor.", "♪ Esta canción es para aprender ♪", "Un ratito de música y seguimos."],
      read: ["Leyendo un cuento corto. ¿Quieres?", "Un libro al día mantiene lejos el aburrimiento.", "Shh, que llego al final del capítulo."],
      laptop: ["Apuntando palabras nuevas en mi cuaderno digital.", "Trabajando… bueno, más o menos.", "Tecleando como un profesional."],
      camera: ["¡Sonríe! Foto para el recuerdo.", "Foto de la unidad de hoy. Quedó bonita.", "Click. Otra más para mi álbum."],
      icecream: ["Helado de fresa. Para pensar mejor.", "Uno de vainilla también cabía.", "Se derrite rápido, ¡mira!"],
      balloon: ["Un globo para celebrar que estás aquí.", "Si lo suelto, ¿sube hasta la siguiente unidad?", "Mi globo y yo estamos de paseo."],
      game: ["Un nivel más y vuelvo a estudiar. Lo juro.", "Esto también entrena los reflejos.", "¡Nueva marca personal!"]
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
      tap: ["Hey, that tickles!", "Psst… one more?", "Oh, that makes me laugh.", "What are you up to, curious one?", "I like that."],
      tip: ["Say it out loud: your mouth learns too.", "Five minutes a day beat an hour a month.", "If a word resists, invent a silly sentence for it.", "Listen first, read after. Your ear will thank you.", "Making mistakes is half of learning."],
      joke: ["What does a raccoon do in language class? Scrub the vocabulary.", "My favourite word is “chocolate”, in every language.", "They say I wash my food. I wash words too.", "My stripes aren't from boredom: they're for style."],
      word: ["Does this ring a bell?", "Quick word:", "Jot this one down:", "Look what I found:"],
      dizzy: ["Whoa, I'm dizzy!", "Slowly, I'm spinning!"],
      enough: ["Okay, okay! I'll go rest for a bit.", "Too many tickles. Back in a moment."],
      eat: ["Mmm… chocolate. It's for the brain, obviously.", "Just one square. Okay, two.", "Concentration with flavour."],
      wash: ["A clean raccoon learns better.", "Washing my paws, back in a sec.", "I always wash my words. And my food."],
      coffee: ["Coffee break, then we carry on.", "Recharging.", "Even raccoons need a moment."],
      yawn: ["Yaaawn… sorry, it's contagious.", "Is it nap time already?"],
      sleepy: ["Zzz… are we starting?", "Just closing my eyes for a second…"],
      think: ["Hmm… which word will it be today?", "Thinking of pretty sentences."],
      curious: ["What's in the next unit?", "Smells like a new word."],
      sing: ["La la la… practising pronunciation!", "Singing helps you remember words.", "♪ One word, two words… ♪"],
      bored: ["Phew, so quiet. Shall we do something?", "Tell me, which word is it today?"],
      phone: ["Checking my phone… just a minute.", "A squirrel texted me. It says to study.", "Unread messages: zero. Peace."],
      music: ["Words stick better with music.", "♪ This song is for learning ♪", "A little music, then we carry on."],
      read: ["Reading a short story. Want to join?", "A book a day keeps boredom away.", "Shh, I'm nearly at the end of the chapter."],
      laptop: ["Writing down new words in my digital notebook.", "Working… well, more or less.", "Typing like a pro."],
      camera: ["Smile! A photo for the memories.", "A photo of today's unit. It came out nice.", "Click. Another one for my album."],
      icecream: ["Strawberry ice cream. For better thinking.", "A vanilla one would fit too.", "It's melting fast, look!"],
      balloon: ["A balloon to celebrate that you're here.", "If I let go, will it float to the next unit?", "My balloon and I are out for a walk."],
      game: ["One more level and I'm back to studying. I swear.", "This trains reflexes too.", "New personal best!"]
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
