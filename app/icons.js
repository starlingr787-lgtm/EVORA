/* Set de iconos propio de Lingo (sustituye a los emojis) y mascota "Lumi".
   Todo es SVG en una rejilla de 24x24, trazo redondeado y relleno translúcido. */
(() => {
  const N = ' fill="none"';
  const I = {
    heart: '<path d="M12 20.5s-7.5-4.6-7.5-10.4A4.2 4.2 0 0 1 12 7.7a4.2 4.2 0 0 1 7.5 2.4c0 5.8-7.5 10.4-7.5 10.4z"/>',
    flame: '<path d="M12 2.5c.6 3.4 5.5 5.6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.3 1-3.8 2.3-5 .1 1.9.9 3 2 3.2C10.5 8.5 10.3 5.4 12 2.5z"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.7 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z"/>',
    crown: '<path d="M3 8.5l4.6 3.9L12 5l4.4 7.4L21 8.5 19 19H5z"/>',
    lock: `<rect x="5" y="10.5" width="14" height="9.5" rx="2.6"/><path${N} d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5"/>`,
    check: `<path${N} d="M5 12.8l4.4 4.4L19 7.6"/>`,
    x: `<path${N} d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>`,
    back: `<path${N} d="M14.5 5.5L8 12l6.5 6.5"/>`,
    speaker: `<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path${N} d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.500 7.500 0 0 1 0 11"/>`,
    snail: `<path${N} d="M4 18h13a3 3 0 0 0 0-6 4.500 4.500 0 1 0-4.500-4.500"/><path${N} d="M20 18v-4M20 14l1.500-2"/>`,
    book: `<path d="M4 5.5C7 4.500 10 5 12 7c2-2 5-2.500 8-1.500V18c-3-1-6-.5-8 1.500C10 17.500 7 17 4 18z"/><path${N} d="M12 7v12.500"/>`,
    globe: `<circle cx="12" cy="12" r="8.500"/><path${N} d="M3.500 12h17M12 3.500c2.500 2.500 3.500 5.500 3.500 8.500S14.500 18 12 20.500C9.500 18 8.500 15 8.500 12S9.500 6 12 3.500z"/>`,
    trophy: `<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path${N} d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8.500 20h7"/>`,
    pen: '<path d="M4 20l1-4L16.500 4.500a2.100 2.100 0 0 1 3 3L8 19z"/>',
    cycle: `<path${N} d="M20 12a8 8 0 0 1-14 5.300M4 12a8 8 0 0 1 14-5.300M18 3v4h-4M6 21v-4h4"/>`,
    chat: '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 4v-4H6a2 2 0 0 1-2-2z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4.500 20a7.500 7.500 0 0 1 15 0z"/>',
    hash: `<path${N} d="M9.500 4L7.500 20M16.500 4l-2 16M4.500 9h15M3.500 15h15"/>`,
    family: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.400"/><path d="M2.500 19a5.500 5.500 0 0 1 11 0zM14.500 19a4.200 4.200 0 0 1 7-3V19z"/>',
    apple: `<path d="M12 8c-2-1.500-6-1-6 4 0 4 2.500 8 5 8 .7 0 .9-.4 1-.4s.3.4 1 .4c2.500 0 5-4 5-8 0-5-4-5.500-6-4z"/><path${N} d="M12 8c0-2 1-3.500 3-4"/>`,
    fork: `<path${N} d="M7 3v7a2 2 0 0 0 2 2v9M11 3v7a2 2 0 0 1-2 2M9 3v6M17 21V3c-2 1.500-3 4-3 7v3h3"/>`,
    plane: '<path d="M21 4L3 11l6 2.500L11.500 20 14 14.500z"/>',
    pin: '<path d="M12 21s-6.500-6-6.500-11a6.500 6.500 0 0 1 13 0c0 5-6.500 11-6.500 11z"/><circle cx="12" cy="10" r="2.300" style="fill:var(--card);fill-opacity:1"/>',
    bag: `<path d="M5 8h14l-1 12H6z"/><path${N} d="M9 8V6.500a3 3 0 0 1 6 0V8"/>`,
    clock: `<circle cx="12" cy="12" r="8.500"/><path${N} d="M12 7v5.500l3.500 2"/>`,
    play: '<path d="M8 5.500v13l11-6.500z"/>',
    bolt: '<path d="M13 2.500L5 13.500h6l-1 8 8-11h-6z"/>'
  };
  window.ic = (name, cls = "") =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[name] || ""}</svg>`;

  /* Insignia de idioma: reemplaza a las banderas */
  window.langBadge = (key, size = "") => {
    const c = COURSES[key];
    return `<span class="lb ${size}" style="--c:${c.color}"><span>${c.code}</span></span>`;
  };

  /* Mascota Lumi. mood: happy | cheer | sad | think */
  window.mascot = (mood = "happy", px = 120) => {
    const eyes = {
      happy: '<path d="M38 56q8-10 16 0M66 56q8-10 16 0" class="mk"/>',
      cheer: '<path d="M38 56q8-10 16 0M66 56q8-10 16 0" class="mk"/>',
      sad: '<circle cx="46" cy="58" r="10" fill="#fff"/><circle cx="74" cy="58" r="10" fill="#fff"/><circle cx="46" cy="61" r="5" class="mp"/><circle cx="74" cy="61" r="5" class="mp"/><path d="M36 53l16-7M84 53l-16-7" class="mk"/>',
      think: '<circle cx="46" cy="56" r="10" fill="#fff"/><circle cx="74" cy="56" r="10" fill="#fff"/><circle cx="49" cy="53" r="5" class="mp"/><circle cx="77" cy="53" r="5" class="mp"/>'
    }[mood] || "";
    const wingL = mood === "cheer" ? 'transform="rotate(-42 22 90)"' : "";
    const wingR = mood === "cheer" ? 'transform="rotate(42 98 90)"' : "";
    const beak = mood === "sad"
      ? '<path d="M52 74L68 74L60 66z" class="mb"/>'
      : '<path d="M52 66L68 66L60 77z" class="mb"/>';
    return `<svg class="mascot" width="${px}" height="${px}" viewBox="0 0 120 120" role="img" aria-label="Lumi">
      <rect x="40" y="104" width="14" height="8" rx="4" class="mb"/><rect x="66" y="104" width="14" height="8" rx="4" class="mb"/>
      <path d="M48 24l4-12 8 10 8-10 4 12z" class="md"/>
      <ellipse cx="60" cy="68" rx="42" ry="40" class="mt"/>
      <ellipse cx="22" cy="72" rx="9" ry="19" class="md" ${wingL}/><ellipse cx="98" cy="72" rx="9" ry="19" class="md" ${wingR}/>
      <ellipse cx="60" cy="82" rx="25" ry="22" class="mw"/>
      ${eyes}${beak}
      <circle cx="33" cy="70" r="6" class="mc"/><circle cx="87" cy="70" r="6" class="mc"/>
    </svg>`;
  };
})();
