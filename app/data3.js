/* Situaciones: "Rompecabezas vivo" (elegir el tono) y escenas para calmar a un personaje.
   Contenido escrito a mano y pendiente de revisión por hablantes nativos.
   LIVE: cada par tiene [formal, informal]. SCENES: t[idioma][turno] = [frase del personaje, opción a, b, c]. */

window.TONES = {
  formal:   { name: "Formal",   icon: "tie",  use: "Con jefes, desconocidos y personas mayores." },
  informal: { name: "Informal", icon: "face", use: "Con amigos, familia y gente cercana." },
  urgente:  { name: "Urgente",  icon: "bolt", use: "Con prisa o enfado. Suena brusco." },
  neutro:   { name: "Neutro",   icon: "chat", use: "Sirve casi siempre." }
};

window.LIVE = [
  { unit: 0, id: "A", idea: "Saludar y preguntar cómo está",
    es: ["Buenos días, ¿cómo está usted?", "¡Hola! ¿Cómo estás?"],
    sit: ["Saludas a tu jefa por la mañana.", "Saludas a tu mejor amigo."],
    t: { en: ["Good morning, how are you?", "Hey! How's it going?"], fr: ["Bonjour, comment allez-vous ?", "Salut ! Ça va ?"],
         de: ["Guten Morgen, wie geht es Ihnen?", "Hallo! Wie geht's?"], it: ["Buongiorno, come sta?", "Ciao! Come stai?"],
         pt: ["Bom dia, como está?", "Olá! Como estás?"], ru: ["Доброе утро, как вы поживаете?", "Привет! Как дела?"],
         ro: ["Bună dimineața, ce mai faceți?", "Salut! Ce faci?"] } },
  { unit: 0, id: "B", idea: "Despedirse",
    es: ["Adiós, que tenga un buen día.", "¡Chao! ¡Hasta luego!"],
    sit: ["Te despides de un cliente importante.", "Te despides de tus compañeros de casa."],
    t: { en: ["Goodbye, have a good day.", "Bye! See you later!"], fr: ["Au revoir, bonne journée.", "Salut ! À plus !"],
         de: ["Auf Wiedersehen, einen schönen Tag noch.", "Tschüss! Bis später!"], it: ["Arrivederci, buona giornata.", "Ciao! A dopo!"],
         pt: ["Adeus, tenha um bom dia.", "Tchau! Até logo!"], ru: ["До свидания, хорошего дня.", "Пока! До скорого!"],
         ro: ["La revedere, o zi bună.", "Pa! Pe curând!"] } },
  { unit: 0, id: "C", idea: "Dar las gracias",
    es: ["Muchas gracias por su ayuda.", "¡Gracias por la ayuda!"],
    sit: ["Das las gracias a un médico.", "Das las gracias a tu hermana."],
    t: { en: ["Thank you very much for your help.", "Thanks for the help!"], fr: ["Merci beaucoup pour votre aide.", "Merci pour ton aide !"],
         de: ["Vielen Dank für Ihre Hilfe.", "Danke für deine Hilfe!"], it: ["La ringrazio molto per il Suo aiuto.", "Grazie per l'aiuto!"],
         pt: ["Muito obrigado pela sua ajuda.", "Obrigado pela ajuda!"], ru: ["Большое спасибо за вашу помощь.", "Спасибо за помощь!"],
         ro: ["Vă mulțumesc mult pentru ajutor.", "Mulțumesc pentru ajutor!"] } },
  { unit: 5, id: "D", idea: "Pedir la cuenta",
    es: ["Disculpe, ¿podría traernos la cuenta, por favor?", "¡Oye, la cuenta, por favor!"],
    sit: ["Pides la cuenta en un restaurante elegante.", "Pides la cuenta en el bar con tus amigos."],
    t: { en: ["Excuse me, could you bring us the bill, please?", "Hey, the bill, please!"],
         fr: ["Excusez-moi, pourriez-vous nous apporter l'addition, s'il vous plaît ?", "Hé, l'addition, s'il vous plaît !"],
         de: ["Entschuldigung, könnten Sie uns bitte die Rechnung bringen?", "Hey, die Rechnung bitte!"],
         it: ["Mi scusi, potrebbe portarci il conto, per favore?", "Ehi, il conto, per favore!"],
         pt: ["Com licença, podia trazer-nos a conta, por favor?", "Ei, a conta, por favor!"],
         ru: ["Извините, не могли бы вы принести нам счёт, пожалуйста?", "Эй, счёт, пожалуйста!"],
         ro: ["Scuzați-mă, ați putea să ne aduceți nota de plată, vă rog?", "Hei, nota de plată, te rog!"] } },
  { unit: 5, id: "E", idea: "Pedir un café",
    es: ["Quisiera un café, por favor.", "¡Un café para mí, gracias!"],
    sit: ["Pides un café a un mesero que no conoces.", "Pides un café en tu bar de siempre."],
    t: { en: ["I would like a coffee, please.", "Coffee for me, thanks!"], fr: ["Je voudrais un café, s'il vous plaît.", "Un café pour moi, merci !"],
         de: ["Ich hätte gern einen Kaffee, bitte.", "Einen Kaffee für mich, danke!"], it: ["Vorrei un caffè, per favore.", "Un caffè per me, grazie!"],
         pt: ["Queria um café, por favor.", "Um café para mim, obrigado!"], ru: ["Я бы хотел кофе, пожалуйста.", "Мне кофе, спасибо!"],
         ro: ["Aș dori o cafea, vă rog.", "O cafea pentru mine, mulțumesc!"] } },
  { unit: 5, id: "F", idea: "Elogiar la comida",
    es: ["La comida estaba excelente, muchas gracias.", "¡Estaba buenísimo, gracias!"],
    sit: ["Felicitas al chef de un restaurante elegante.", "Le dices a tu amigo que cocinó muy bien."],
    t: { en: ["The food was excellent, thank you very much.", "That was so good, thanks!"],
         fr: ["Le repas était excellent, merci beaucoup.", "C'était super bon, merci !"],
         de: ["Das Essen war ausgezeichnet, vielen Dank.", "Das war superlecker, danke!"],
         it: ["Il cibo era eccellente, la ringrazio molto.", "Era buonissimo, grazie!"],
         pt: ["A comida estava excelente, muito obrigado.", "Estava ótimo, obrigado!"],
         ru: ["Еда была отличная, большое спасибо.", "Было очень вкусно, спасибо!"],
         ro: ["Mâncarea a fost excelentă, vă mulțumesc mult.", "A fost foarte bun, mulțumesc!"] } }
];

window.SCENES = [
  { unit: 0, title: "Llegas tarde", who: "Ana", hue: 330, start: 20, goal: 80,
    intro: "Has llegado 30 minutos tarde a una cita con Ana y está enojada. Calma la situación con el tono adecuado.",
    turns: [
      { es: "¡Llegas tarde!", opts: [
        { tone: "informal", d: 35, es: "Lo siento mucho, Ana.", why: "Pedir perdón con calidez y por su nombre calma a una amiga." },
        { tone: "urgente", d: -25, es: "¡Vamos, rápido!", why: "Presionar a alguien enojada la irrita más." },
        { tone: "formal", d: 5, es: "Disculpe la demora.", why: "Es correcto, pero demasiado frío para una amiga." }] },
      { es: "Te estuve esperando mucho tiempo.", opts: [
        { tone: "informal", d: 30, es: "Tienes razón, fue mi culpa.", why: "Reconocer el error sin excusas es lo que más calma." },
        { tone: "urgente", d: -25, es: "¡No es para tanto!", why: "Quitarle importancia a su enojo lo empeora." },
        { tone: "formal", d: 5, es: "Le pido disculpas sinceras.", why: "Suena a trato de oficina, no a amistad." }] },
      { es: "Bueno, ¿qué hacemos ahora?", opts: [
        { tone: "informal", d: 30, es: "Te invito a un café.", why: "Un gesto cercano para compensar cierra bien la pelea." },
        { tone: "neutro", d: 15, es: "Podemos ir al cine.", why: "Es una propuesta correcta, pero sin gesto personal." },
        { tone: "urgente", d: -20, es: "¡Date prisa, nos vamos!", why: "Dar órdenes justo ahora rompe el buen ambiente." }] }
    ],
    t: {
      en: [["You're late!", "I'm so sorry, Ana.", "Come on, hurry up!", "Please excuse the delay."],
           ["I've been waiting for you for a long time.", "You're right, it was my fault.", "It's not a big deal!", "I offer you my sincere apologies."],
           ["Well, what do we do now?", "Let me buy you a coffee.", "We could go to the cinema.", "Hurry up, we're leaving!"]],
      fr: [["Tu es en retard !", "Je suis vraiment désolé, Ana.", "Allez, dépêche-toi !", "Veuillez excuser mon retard."],
           ["Je t'attends depuis longtemps.", "Tu as raison, c'est ma faute.", "Ce n'est pas si grave !", "Je vous présente mes sincères excuses."],
           ["Bon, que fait-on maintenant ?", "Je t'offre un café.", "On pourrait aller au cinéma.", "Dépêche-toi, on y va !"]],
      de: [["Du kommst zu spät!", "Es tut mir so leid, Ana.", "Komm schon, beeil dich!", "Entschuldigen Sie die Verspätung."],
           ["Ich warte schon sehr lange auf dich.", "Du hast recht, es war meine Schuld.", "Das ist doch nicht schlimm!", "Ich bitte Sie aufrichtig um Entschuldigung."],
           ["Also, was machen wir jetzt?", "Ich lade dich auf einen Kaffee ein.", "Wir könnten ins Kino gehen.", "Beeil dich, wir gehen!"]],
      it: [["Sei in ritardo!", "Mi dispiace tantissimo, Ana.", "Dai, sbrigati!", "Mi scusi per il ritardo."],
           ["Ti ho aspettato per molto tempo.", "Hai ragione, è stata colpa mia.", "Non è mica una tragedia!", "Le porgo le mie sincere scuse."],
           ["Va bene, e adesso che facciamo?", "Ti offro un caffè.", "Possiamo andare al cinema.", "Sbrigati, andiamo!"]],
      pt: [["Chegaste tarde!", "Lamento muito, Ana.", "Anda, despacha-te!", "Peço desculpa pela demora."],
           ["Estive à tua espera muito tempo.", "Tens razão, foi culpa minha.", "Não é caso para tanto!", "Apresento-lhe as minhas sinceras desculpas."],
           ["Bem, e agora, o que fazemos?", "Pago-te um café.", "Podemos ir ao cinema.", "Despacha-te, vamos embora!"]],
      ru: [["Ты опоздал!", "Мне очень жаль, Ана.", "Давай, быстрее!", "Прошу прощения за задержку."],
           ["Я ждала тебя очень долго.", "Ты права, это моя вина.", "Да ладно, ерунда!", "Приношу вам искренние извинения."],
           ["Ну ладно, что будем делать?", "Я угощаю тебя кофе.", "Можем сходить в кино.", "Поторопись, мы уходим!"]],
      ro: [["Ai întârziat!", "Îmi pare foarte rău, Ana.", "Hai, repede!", "Vă rog să scuzați întârzierea."],
           ["Te-am așteptat mult timp.", "Ai dreptate, a fost vina mea.", "Nu e mare lucru!", "Vă prezint scuzele mele sincere."],
           ["Bine, și acum ce facem?", "Te invit la o cafea.", "Putem merge la cinema.", "Grăbește-te, plecăm!"]]
    } },

  { unit: 5, title: "El mesero agobiado", who: "El mesero", hue: 28, start: 25, goal: 80,
    intro: "El restaurante está lleno y el mesero va con prisa y de mal humor. Tranquilízalo con el tono adecuado.",
    turns: [
      { es: "¡Ahora no puedo! Tengo muchas mesas.", opts: [
        { tone: "formal", d: 30, es: "Disculpe, no hay prisa.", why: "Un trato respetuoso le da espacio y baja la tensión." },
        { tone: "urgente", d: -30, es: "¡Llevo una hora esperando!", why: "Reclamar a gritos a alguien estresado lo enoja más." },
        { tone: "informal", d: 5, es: "Tranquilo, no pasa nada.", why: "Es amable, pero con un desconocido suena demasiado confiado." }] },
      { es: "Está bien. ¿Qué desea?", opts: [
        { tone: "formal", d: 30, es: "Quisiera un café, por favor.", why: "Pedir con cortesía es lo esperado en un restaurante." },
        { tone: "informal", d: 15, es: "Un café para mí, gracias.", why: "Es cordial y claro, aunque algo informal." },
        { tone: "urgente", d: -25, es: "¡Rápido, un café!", why: "Dar órdenes con prisa suena maleducado." }] },
      { es: "Enseguida. ¿Algo más?", opts: [
        { tone: "formal", d: 25, es: "La cuenta, por favor.", why: "Breve y cortés: justo lo que pide la situación." },
        { tone: "informal", d: 20, es: "Nada más, gracias.", why: "Es educado y le quita trabajo." },
        { tone: "urgente", d: -25, es: "¡Me voy ya, la cuenta!", why: "Presionar al final deja mal sabor de boca." }] }
    ],
    t: {
      en: [["I can't right now! I have so many tables.", "Excuse me, there's no rush.", "I've been waiting for an hour!", "Relax, no worries."],
           ["All right. What would you like?", "I would like a coffee, please.", "A coffee for me, thanks.", "Quick, a coffee!"],
           ["Right away. Anything else?", "The bill, please.", "Nothing else, thanks.", "I'm leaving now, the bill!"]],
      fr: [["Pas maintenant ! J'ai beaucoup de tables.", "Excusez-moi, il n'y a pas d'urgence.", "J'attends depuis une heure !", "Tranquille, pas de souci."],
           ["Très bien. Que désirez-vous ?", "Je voudrais un café, s'il vous plaît.", "Un café pour moi, merci.", "Vite, un café !"],
           ["Tout de suite. Autre chose ?", "L'addition, s'il vous plaît.", "Rien d'autre, merci.", "Je pars maintenant, l'addition !"]],
      de: [["Jetzt nicht! Ich habe so viele Tische.", "Entschuldigen Sie, es eilt nicht.", "Ich warte schon eine Stunde!", "Alles gut, kein Stress."],
           ["In Ordnung. Was möchten Sie?", "Ich hätte gern einen Kaffee, bitte.", "Einen Kaffee für mich, danke.", "Schnell, einen Kaffee!"],
           ["Sofort. Sonst noch etwas?", "Die Rechnung, bitte.", "Sonst nichts, danke.", "Ich gehe jetzt, die Rechnung!"]],
      it: [["Adesso non posso! Ho molti tavoli.", "Mi scusi, non c'è fretta.", "Aspetto da un'ora!", "Tranquillo, nessun problema."],
           ["Va bene. Cosa desidera?", "Vorrei un caffè, per favore.", "Un caffè per me, grazie.", "Presto, un caffè!"],
           ["Subito. Altro?", "Il conto, per favore.", "Nient'altro, grazie.", "Me ne vado, il conto!"]],
      pt: [["Agora não posso! Tenho muitas mesas.", "Com licença, não há pressa.", "Estou à espera há uma hora!", "Calma, não faz mal."],
           ["Está bem. O que deseja?", "Queria um café, por favor.", "Um café para mim, obrigado.", "Depressa, um café!"],
           ["Já vai. Mais alguma coisa?", "A conta, por favor.", "Mais nada, obrigado.", "Vou-me embora, a conta!"]],
      ru: [["Сейчас не могу! У меня много столиков.", "Извините, я не спешу.", "Я жду уже час!", "Спокойно, ничего страшного."],
           ["Хорошо. Что будете заказывать?", "Я бы хотел кофе, пожалуйста.", "Мне кофе, спасибо.", "Быстро, кофе!"],
           ["Сейчас. Что-нибудь ещё?", "Счёт, пожалуйста.", "Больше ничего, спасибо.", "Я ухожу, счёт!"]],
      ro: [["Acum nu pot! Am multe mese.", "Scuzați-mă, nu e nicio grabă.", "Aștept de o oră!", "Liniștit, nicio problemă."],
           ["Bine. Ce doriți?", "Aș dori o cafea, vă rog.", "O cafea pentru mine, mulțumesc.", "Repede, o cafea!"],
           ["Imediat. Altceva?", "Nota de plată, vă rog.", "Nimic altceva, mulțumesc.", "Plec acum, nota de plată!"]]
    } }
];

/* Claves de audio de las situaciones: [clave, texto] para un idioma */
window.extraClips = lang => {
  const out = [];
  if (lang === "es") { if (window.DICT_CATS) DICT_CATS.forEach((c, ci) => c.w.forEach((x, i) => out.push([`D${ci}w${i}`, x]))); return out; }
  LIVE.forEach(p => p.t[lang].forEach((x, i) => out.push([`L${p.unit}${p.id}${i}`, x])));
  SCENES.forEach(s => s.t[lang].forEach((turn, ti) => turn.forEach((x, j) => out.push([`S${s.unit}${ti}${j}`, x]))));
  if (window.DICT_CATS) DICT_CATS.forEach((c, ci) => c.t[lang].forEach((x, i) => out.push([`D${ci}w${i}`, x])));
  return out;
};
