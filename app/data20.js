/* Siete escenas más (unidades 8, 11, 15, 19, 20, 21 y 27): con estas hay 15 en total.
   Cada escena: 3 turnos y 3 respuestas por turno. Los textos en los 7 idiomas se dan en 12 líneas (turno por turno: lo que dice
   el otro, respuesta 1, 2 y 3) con el formato en|fr|de|it|pt|ru|ro.
   Escritas por Claude; pendientes de revisión por hablantes nativos. */
(() => {
  const LG = ["en", "fr", "de", "it", "pt", "ru", "ro"];
  const scene = (unit, title, who, hue, intro, enTitle, enWho, enIntro, turns, rows) => {
    const E = window.EN_EXTRA;
    E[title] = enTitle; E[who] = enWho; E[intro] = enIntro;
    turns.forEach(tu => tu.slice(1).forEach(o => { E[o[3]] = o[4]; }));
    if (!window.SCENES) return;
    const lines = rows.trim().split("\n").map(l => l.split("|"));
    const t = {};
    LG.forEach((l, k) => { t[l] = [0, 1, 2].map(ti => lines.slice(ti * 4, ti * 4 + 4).map(r => r[k])); });
    window.SCENES.push({
      unit, title, who, hue, start: 25, goal: 80, intro,
      turns: turns.map(tu => ({ es: tu[0], opts: tu.slice(1).map(o => ({ tone: o[0], d: o[1], es: o[2], why: o[3] })) })),
      t
    });
  };

  /* Unidad 8: Compras */
  scene(8, "El vendedor insistente", "El vendedor", 40,
    "Entras a una tienda de ropa y el vendedor insiste en que compres algo. Responde con el tono adecuado.",
    "The pushy salesman", "The salesman", "You walk into a clothes shop and the salesman insists that you buy something. Reply in the right tone.",
    [["Buenas tardes, ¿busca algo en especial?",
      ["formal", 30, "Buenas tardes, solo estoy mirando, gracias.", "Una respuesta cortés y clara basta.", "A polite, clear answer is enough."],
      ["informal", 15, "Hola, busco una camisa azul.", "Es claro y amable, aunque informal.", "It's clear and friendly, though informal."],
      ["urgente", -25, "No me moleste, solo estoy mirando.", "Sonar brusco molesta al vendedor.", "Sounding rude annoys the salesman."]],
     ["Esta camisa está en oferta, ¿le gusta?",
      ["formal", 30, "Es bonita, pero ¿cuánto cuesta, por favor?", "Preguntar el precio con cortesía es lo mejor.", "Asking the price politely is best."],
      ["informal", 10, "Sí, me gusta. ¿Hay más baratas?", "Es natural, pero un poco directo.", "It's natural, but a little direct."],
      ["urgente", -20, "No, es fea y muy cara.", "Criticar así es descortés.", "Criticising like that is impolite."]],
     ["Perfecto. ¿Paga con tarjeta o en efectivo?",
      ["formal", 30, "Con tarjeta, por favor. Muchas gracias.", "Pedir y agradecer con cortesía cierra bien la compra.", "Asking and thanking politely ends the purchase well."],
      ["informal", 10, "En efectivo.", "Es correcto, pero algo seco.", "It's correct, but a little curt."],
      ["urgente", -20, "¡Rápido, tengo prisa!", "La prisa y el tono brusco no ayudan.", "Rushing and a rude tone don't help."]]],
    `
Good afternoon, are you looking for anything in particular?|Bonjour, vous cherchez quelque chose en particulier ?|Guten Tag, suchen Sie etwas Bestimmtes?|Buonasera, cerca qualcosa in particolare?|Boa tarde, procura algo em especial?|Добрый день, вы ищете что-то определённое?|Bună ziua, căutați ceva anume?
Good afternoon, I'm just looking, thank you.|Bonjour, je regarde seulement, merci.|Guten Tag, ich schaue nur, danke.|Buonasera, do solo un'occhiata, grazie.|Boa tarde, estou só a ver, obrigado.|Добрый день, я просто смотрю, спасибо.|Bună ziua, doar mă uit, mulțumesc.
Hi, I'm looking for a blue shirt.|Salut, je cherche une chemise bleue.|Hallo, ich suche ein blaues Hemd.|Ciao, cerco una camicia blu.|Olá, procuro uma camisa azul.|Привет, я ищу синюю рубашку.|Salut, caut o cămașă albastră.
Leave me alone, I'm just looking.|Laissez-moi tranquille, je regarde seulement.|Lassen Sie mich in Ruhe, ich schaue nur.|Mi lasci in pace, do solo un'occhiata.|Deixe-me em paz, estou só a ver.|Не мешайте мне, я просто смотрю.|Lăsați-mă în pace, doar mă uit.
This shirt is on sale, do you like it?|Cette chemise est en promotion, elle vous plaît ?|Dieses Hemd ist im Angebot, gefällt es Ihnen?|Questa camicia è in offerta, le piace?|Esta camisa está em promoção, gosta?|Эта рубашка со скидкой, вам нравится?|Această cămașă este la ofertă, vă place?
It's nice, but how much is it, please?|Elle est jolie, mais combien coûte-t-elle, s'il vous plaît ?|Es ist schön, aber wie viel kostet es, bitte?|È bella, ma quanto costa, per favore?|É bonita, mas quanto custa, por favor?|Красивая, но сколько она стоит, пожалуйста?|Este frumoasă, dar cât costă, vă rog?
Yes, I like it. Are there cheaper ones?|Oui, elle me plaît. Y en a-t-il de moins chères ?|Ja, sie gefällt mir. Gibt es günstigere?|Sì, mi piace. Ce ne sono di più economiche?|Sim, gosto. Há mais baratas?|Да, нравится. Есть подешевле?|Da, îmi place. Există și mai ieftine?
No, it's ugly and very expensive.|Non, elle est moche et très chère.|Nein, es ist hässlich und sehr teuer.|No, è brutta e molto cara.|Não, é feia e muito cara.|Нет, она некрасивая и очень дорогая.|Nu, este urâtă și foarte scumpă.
Perfect. Will you pay by card or in cash?|Parfait. Vous payez par carte ou en espèces ?|Perfekt. Zahlen Sie mit Karte oder bar?|Perfetto. Paga con carta o in contanti?|Perfeito. Paga com cartão ou em dinheiro?|Отлично. Вы платите картой или наличными?|Perfect. Plătiți cu cardul sau în numerar?
By card, please. Thank you very much.|Par carte, s'il vous plaît. Merci beaucoup.|Mit Karte, bitte. Vielen Dank.|Con la carta, per favore. Grazie mille.|Com cartão, por favor. Muito obrigado.|Картой, пожалуйста. Большое спасибо.|Cu cardul, vă rog. Mulțumesc mult.
In cash.|En espèces.|Bar.|In contanti.|Em dinheiro.|Наличными.|În numerar.
Quick, I'm in a hurry!|Vite, je suis pressé !|Schnell, ich habe es eilig!|Presto, ho fretta!|Depressa, tenho pressa!|Быстрее, я спешу!|Repede, mă grăbesc!
`);

  /* Unidad 11: En casa */
  scene(11, "El casero de visita", "El casero", 30,
    "Alquilas una casa y el casero viene a revisarla. Responde con el tono adecuado.",
    "The landlord's visit", "The landlord", "You rent a house and the landlord comes to inspect it. Reply in the right tone.",
    [["Buenos días, vengo a revisar la casa. ¿Todo bien?",
      ["formal", 30, "Buenos días, sí, todo bien, pase por favor.", "Recibirlo con cortesía crea confianza.", "Welcoming him politely builds trust."],
      ["informal", 10, "Hola, sí, está todo bien.", "Es amable, pero algo seco.", "It's friendly, but a little curt."],
      ["urgente", -20, "¿Otra vez? Ya vino la semana pasada.", "Mostrar fastidio daña la relación.", "Showing annoyance damages the relationship."]],
     ["¿Hay algún problema con la casa?",
      ["formal", 30, "La llave de la cocina gotea. ¿Podría arreglarla, por favor?", "Explicar el problema con calma y pedir ayuda con cortesía funciona mejor.", "Explaining the problem calmly and asking politely works best."],
      ["informal", 10, "Sí, la llave gotea. Hay que arreglarla.", "Es claro, pero suena a orden.", "It's clear, but it sounds like an order."],
      ["urgente", -30, "¡Todo está mal y usted no hace nada!", "Culpar al casero sin explicar el problema no ayuda.", "Blaming the landlord without explaining the problem doesn't help."]],
     ["Lo arreglo mañana por la mañana, ¿le parece bien?",
      ["formal", 30, "Sí, perfecto. Muchas gracias por su ayuda.", "Aceptar y agradecer deja una buena relación.", "Accepting and thanking leaves a good relationship."],
      ["informal", 15, "Está bien, gracias.", "Es correcto, aunque breve.", "It's correct, though brief."],
      ["urgente", -20, "¿Mañana? ¡Tiene que ser hoy!", "Exigir sin pedir causa conflicto.", "Demanding without asking causes conflict."]]],
    `
Good morning, I've come to check the house. Is everything fine?|Bonjour, je viens vérifier la maison. Tout va bien ?|Guten Morgen, ich komme, um das Haus zu überprüfen. Ist alles in Ordnung?|Buongiorno, vengo a controllare la casa. Va tutto bene?|Bom dia, venho verificar a casa. Está tudo bem?|Доброе утро, я пришёл проверить дом. Всё в порядке?|Bună dimineața, am venit să verific casa. Este totul în regulă?
Good morning, yes, everything is fine, please come in.|Bonjour, oui, tout va bien, entrez, je vous prie.|Guten Morgen, ja, alles in Ordnung, kommen Sie bitte herein.|Buongiorno, sì, tutto bene, prego, entri.|Bom dia, sim, está tudo bem, entre, por favor.|Доброе утро, да, всё хорошо, проходите, пожалуйста.|Bună dimineața, da, totul este în regulă, intrați, vă rog.
Hi, yes, everything is fine.|Salut, oui, tout va bien.|Hallo, ja, alles in Ordnung.|Ciao, sì, va tutto bene.|Olá, sim, está tudo bem.|Привет, да, всё в порядке.|Salut, da, totul este în regulă.
Again? You already came last week.|Encore ? Vous êtes déjà venu la semaine dernière.|Schon wieder? Sie waren letzte Woche doch schon da.|Di nuovo? È già venuto la settimana scorsa.|Outra vez? Já veio na semana passada.|Опять? Вы уже приходили на прошлой неделе.|Din nou? Ați mai venit săptămâna trecută.
Is there any problem with the house?|Y a-t-il un problème avec la maison ?|Gibt es ein Problem mit dem Haus?|C'è qualche problema con la casa?|Há algum problema com a casa?|Есть ли какие-нибудь проблемы с домом?|Există vreo problemă cu casa?
The kitchen tap is dripping. Could you fix it, please?|Le robinet de la cuisine goutte. Pourriez-vous le réparer, s'il vous plaît ?|Der Wasserhahn in der Küche tropft. Könnten Sie ihn bitte reparieren?|Il rubinetto della cucina gocciola. Potrebbe ripararlo, per favore?|A torneira da cozinha pinga. Poderia repará-la, por favor?|Кран на кухне капает. Не могли бы вы его починить, пожалуйста?|Robinetul din bucătărie picură. Ați putea să-l reparați, vă rog?
Yes, the tap is dripping. It needs fixing.|Oui, le robinet goutte. Il faut le réparer.|Ja, der Wasserhahn tropft. Er muss repariert werden.|Sì, il rubinetto gocciola. Bisogna ripararlo.|Sim, a torneira pinga. É preciso repará-la.|Да, кран капает. Его нужно починить.|Da, robinetul picură. Trebuie reparat.
Everything is wrong and you do nothing!|Tout va mal et vous ne faites rien !|Alles ist kaputt und Sie tun nichts!|Tutto va male e lei non fa niente!|Está tudo mal e o senhor não faz nada!|Всё плохо, а вы ничего не делаете!|Totul e prost și dumneavoastră nu faceți nimic!
I'll fix it tomorrow morning, is that all right with you?|Je le répare demain matin, cela vous convient ?|Ich repariere ihn morgen früh, passt Ihnen das?|Lo riparo domani mattina, va bene per lei?|Eu arranjo amanhã de manhã, está bem para si?|Я починю завтра утром, вас это устроит?|Îl repar mâine dimineață, vă convine?
Yes, perfect. Thank you very much for your help.|Oui, parfait. Merci beaucoup pour votre aide.|Ja, perfekt. Vielen Dank für Ihre Hilfe.|Sì, perfetto. Grazie mille per il suo aiuto.|Sim, perfeito. Muito obrigado pela sua ajuda.|Да, отлично. Большое спасибо за вашу помощь.|Da, perfect. Vă mulțumesc mult pentru ajutor.
That's fine, thanks.|C'est d'accord, merci.|In Ordnung, danke.|Va bene, grazie.|Está bem, obrigado.|Хорошо, спасибо.|Bine, mulțumesc.
Tomorrow? It has to be today!|Demain ? Ce doit être aujourd'hui !|Morgen? Es muss heute sein!|Domani? Deve essere oggi!|Amanhã? Tem de ser hoje!|Завтра? Это нужно сегодня!|Mâine? Trebuie să fie azi!
`);

  /* Unidad 15: Tiempo libre */
  scene(15, "La fiesta de Pablo", "Tu amigo Pablo", 120,
    "Tu amigo Pablo te invita a su fiesta, pero no puedes ir. Responde con el tono adecuado.",
    "Pablo's party", "Your friend Pablo", "Your friend Pablo invites you to his party, but you can't go. Reply in the right tone.",
    [["Oye, ¿vienes a mi fiesta el sábado?",
      ["informal", 30, "Gracias por invitarme, pero el sábado no puedo.", "Agradecer y negarte con claridad cuida la amistad.", "Thanking him and declining clearly looks after the friendship."],
      ["neutro", 5, "No sé, quizás.", "Es vago y deja a tu amigo con dudas.", "It's vague and leaves your friend unsure."],
      ["urgente", -25, "¡No, no voy, estoy ocupado!", "Una negativa seca suena a rechazo.", "A curt refusal sounds like rejection."]],
     ["¿Qué pasa? ¿Tienes otro plan?",
      ["informal", 30, "Tengo que estudiar para un examen. ¡Lo siento!", "Dar un motivo honesto y disculparte mantiene la confianza.", "Giving an honest reason and apologising keeps trust."],
      ["neutro", 5, "Sí, tengo otras cosas.", "Es poco claro y suena a excusa.", "It's unclear and sounds like an excuse."],
      ["urgente", -30, "¡No tengo que darte explicaciones!", "Responder a la defensiva hiere a tu amigo.", "Answering defensively hurts your friend."]],
     ["Está bien, pero la próxima vez no faltes.",
      ["informal", 30, "¡Prometido! ¿Quedamos otro día para tomar algo?", "Proponer otro plan muestra que valoras la amistad.", "Suggesting another plan shows you value the friendship."],
      ["neutro", 10, "Está bien, gracias.", "Es amable, pero no ofrece nada.", "It's kind, but it offers nothing."],
      ["urgente", -20, "¡No me presiones!", "Reaccionar con enojo estropea la despedida.", "Reacting with anger spoils the goodbye."]]],
    `
Hey, are you coming to my party on Saturday?|Dis, tu viens à ma fête samedi ?|Hey, kommst du am Samstag zu meiner Party?|Ehi, vieni alla mia festa sabato?|Ei, vens à minha festa no sábado?|Слушай, ты придёшь на мою вечеринку в субботу?|Hei, vii la petrecerea mea sâmbătă?
Thanks for inviting me, but I can't make it on Saturday.|Merci de m'inviter, mais samedi je ne peux pas.|Danke für die Einladung, aber am Samstag kann ich nicht.|Grazie per l'invito, ma sabato non posso.|Obrigado por me convidares, mas no sábado não posso.|Спасибо за приглашение, но в субботу я не могу.|Mulțumesc pentru invitație, dar sâmbătă nu pot.
I don't know, maybe.|Je ne sais pas, peut-être.|Keine Ahnung, vielleicht.|Non so, forse.|Não sei, talvez.|Не знаю, может быть.|Nu știu, poate.
No, I'm not going, I'm busy!|Non, je ne viens pas, je suis occupé !|Nein, ich komme nicht, ich bin beschäftigt!|No, non vengo, sono occupato!|Não, não vou, estou ocupado!|Нет, не приду, я занят!|Nu, nu vin, sunt ocupat!
What's up? Do you have another plan?|Que se passe-t-il ? Tu as un autre plan ?|Was ist los? Hast du einen anderen Plan?|Che succede? Hai un altro programma?|O que se passa? Tens outro plano?|В чём дело? У тебя другие планы?|Ce s-a întâmplat? Ai alt plan?
I have to study for an exam. I'm sorry!|Je dois réviser pour un examen. Désolé !|Ich muss für eine Prüfung lernen. Tut mir leid!|Devo studiare per un esame. Mi dispiace!|Tenho de estudar para um exame. Desculpa!|Мне нужно готовиться к экзамену. Прости!|Trebuie să învăț pentru un examen. Îmi pare rău!
Yes, I have other things.|Oui, j'ai d'autres choses.|Ja, ich habe anderes zu tun.|Sì, ho altre cose.|Sim, tenho outras coisas.|Да, у меня другие дела.|Da, am alte treburi.
I don't have to explain myself to you!|Je n'ai pas à me justifier devant toi !|Ich muss dir keine Erklärungen geben!|Non devo darti spiegazioni!|Não tenho de te dar explicações!|Я не обязан тебе ничего объяснять!|Nu trebuie să-ți dau explicații!
Okay, but don't miss the next one.|D'accord, mais la prochaine fois, ne rate pas ça.|Okay, aber beim nächsten Mal kommst du.|Va bene, ma la prossima volta non mancare.|Está bem, mas da próxima vez não faltes.|Ладно, но в следующий раз приходи.|Bine, dar data viitoare să nu lipsești.
Promise! Shall we meet another day for a drink?|Promis ! On se voit un autre jour pour boire un verre ?|Versprochen! Treffen wir uns an einem anderen Tag auf einen Drink?|Promesso! Ci vediamo un altro giorno per un drink?|Prometido! Combinamos outro dia para tomar um copo?|Обещаю! Встретимся в другой день, выпьем чего-нибудь?|Promit! Ne vedem altă dată la un pahar?
That's fine, thanks.|C'est d'accord, merci.|In Ordnung, danke.|Va bene, grazie.|Está bem, obrigado.|Хорошо, спасибо.|Bine, mulțumesc.
Don't pressure me!|Ne me mets pas la pression !|Setz mich nicht unter Druck!|Non farmi pressione!|Não me pressiones!|Не дави на меня!|Nu mă presa!
`);

  /* Unidad 19: Pedir ayuda */
  scene(19, "La señora en la calle", "Una señora en la calle", 280,
    "Estás perdido en la ciudad y le pides ayuda a una señora desconocida. Responde con el tono adecuado.",
    "The lady in the street", "A lady in the street", "You are lost in the city and ask an unknown lady for help. Reply in the right tone.",
    [["Buenas tardes, ¿necesita algo?",
      ["formal", 30, "Disculpe, señora, ¿podría ayudarme, por favor?", "Un saludo cortés abre la puerta a la ayuda.", "A polite greeting opens the door to help."],
      ["informal", 5, "Oye, ¿sabes dónde está la estación?", "A una desconocida conviene hablarle de usted.", "With a stranger it is better to be formal."],
      ["urgente", -30, "¡Rápido, dígame dónde está la estación!", "Exigir ayuda a una desconocida suena grosero.", "Demanding help from a stranger sounds rude."]],
     ["Claro. ¿Qué busca exactamente?",
      ["formal", 30, "Busco la estación de tren. ¿Está lejos de aquí?", "Decir con claridad lo que buscas facilita la ayuda.", "Saying clearly what you need makes helping easier."],
      ["neutro", 5, "La estación, creo.", "Es poco claro y obliga a adivinar.", "It's unclear and forces her to guess."],
      ["urgente", -25, "¡Pues la estación, claro!", "Responder con ironía no ayuda.", "Answering with irony doesn't help."]],
     ["Siga derecho dos calles y gire a la derecha.",
      ["formal", 30, "Muchísimas gracias, es usted muy amable.", "Agradecer con calidez es lo más educado.", "Thanking warmly is the politest thing to do."],
      ["informal", 10, "Gracias, adiós.", "Es correcto, pero muy breve.", "It's correct, but very short."],
      ["urgente", -20, "¿Dos calles? ¡Eso está lejísimos!", "Quejarte de la ayuda recibida es descortés.", "Complaining about the help you received is rude."]]],
    `
Good afternoon, do you need anything?|Bonjour, vous avez besoin de quelque chose ?|Guten Tag, brauchen Sie etwas?|Buonasera, ha bisogno di qualcosa?|Boa tarde, precisa de alguma coisa?|Добрый день, вам что-нибудь нужно?|Bună ziua, aveți nevoie de ceva?
Excuse me, madam, could you help me, please?|Excusez-moi, madame, pourriez-vous m'aider, s'il vous plaît ?|Entschuldigung, könnten Sie mir bitte helfen?|Mi scusi, signora, potrebbe aiutarmi, per favore?|Desculpe, minha senhora, poderia ajudar-me, por favor?|Извините, не могли бы вы мне помочь, пожалуйста?|Scuzați-mă, doamnă, m-ați putea ajuta, vă rog?
Hey, do you know where the station is?|Eh, tu sais où est la gare ?|Hey, weißt du, wo der Bahnhof ist?|Ehi, sai dov'è la stazione?|Ei, sabes onde fica a estação?|Эй, ты знаешь, где вокзал?|Hei, știi unde este gara?
Quick, tell me where the station is!|Vite, dites-moi où est la gare !|Schnell, sagen Sie mir, wo der Bahnhof ist!|Presto, mi dica dov'è la stazione!|Depressa, diga-me onde fica a estação!|Быстрее, скажите, где вокзал!|Repede, spuneți-mi unde este gara!
Of course. What exactly are you looking for?|Bien sûr. Que cherchez-vous exactement ?|Natürlich. Was suchen Sie genau?|Certo. Che cosa cerca esattamente?|Claro. O que procura exatamente?|Конечно. Что именно вы ищете?|Desigur. Ce căutați exact?
I'm looking for the train station. Is it far from here?|Je cherche la gare. Est-elle loin d'ici ?|Ich suche den Bahnhof. Ist er weit von hier?|Cerco la stazione ferroviaria. È lontana da qui?|Procuro a estação de comboios. Fica longe daqui?|Я ищу железнодорожный вокзал. Он далеко отсюда?|Caut gara. Este departe de aici?
The station, I think.|La gare, je crois.|Den Bahnhof, glaube ich.|La stazione, credo.|A estação, acho.|Вокзал, кажется.|Gara, cred.
The station, of course!|La gare, bien sûr !|Den Bahnhof natürlich!|La stazione, ovviamente!|A estação, claro!|Вокзал, конечно!|Gara, desigur!
Go straight for two streets and turn right.|Continuez tout droit sur deux rues, puis tournez à droite.|Gehen Sie zwei Straßen geradeaus und biegen Sie dann rechts ab.|Vada dritto per due strade e giri a destra.|Siga em frente duas ruas e vire à direita.|Идите прямо две улицы и поверните направо.|Mergeți drept două străzi și faceți dreapta.
Thank you so much, you are very kind.|Merci beaucoup, vous êtes très aimable.|Vielen herzlichen Dank, Sie sind sehr freundlich.|Grazie mille, è molto gentile.|Muito obrigado, é muito simpática.|Большое спасибо, вы очень любезны.|Vă mulțumesc foarte mult, sunteți foarte amabilă.
Thanks, bye.|Merci, au revoir.|Danke, tschüss.|Grazie, arrivederci.|Obrigado, adeus.|Спасибо, до свидания.|Mulțumesc, la revedere.
Two streets? That's really far!|Deux rues ? C'est très loin !|Zwei Straßen? Das ist ja furchtbar weit!|Due strade? È lontanissimo!|Duas ruas? Isso é muito longe!|Две улицы? Это очень далеко!|Două străzi? E foarte departe!
`);

  /* Unidad 20: Reservas y viajes */
  scene(20, "La reserva perdida", "El recepcionista del hotel", 170,
    "Llegas al hotel y no encuentran tu reserva. Resuelve el problema con el tono adecuado.",
    "The lost booking", "The hotel receptionist", "You arrive at the hotel and they can't find your booking. Solve the problem in the right tone.",
    [["Lo siento, no encuentro ninguna reserva a su nombre.",
      ["formal", 30, "Entiendo. Reservé hace un mes, ¿podría revisar de nuevo, por favor?", "Mantener la calma y pedir una nueva revisión es lo más eficaz.", "Staying calm and asking for another check is the most effective."],
      ["informal", 0, "Pues debe estar ahí, mírelo bien.", "Suena a orden y no ayuda.", "It sounds like an order and doesn't help."],
      ["urgente", -25, "¡Es imposible, pagué todo por adelantado!", "Alzar la voz solo tensa la situación.", "Raising your voice only strains the situation."]],
     ["Aquí está, la hicieron para la semana siguiente. Lo lamento.",
      ["formal", 30, "Entiendo que fue un error. ¿Tienen alguna habitación libre hoy?", "Buscar una solución concreta es mejor que culpar.", "Looking for a concrete solution is better than blaming."],
      ["informal", 5, "Qué mala suerte. ¿Y ahora qué hago?", "Deja la solución en manos de la otra persona.", "It leaves the solution to the other person."],
      ["urgente", -30, "¡Qué incompetentes! ¡Quiero hablar con el gerente!", "Insultar al recepcionista empeora todo.", "Insulting the receptionist makes everything worse."]],
     ["Tenemos una habitación, pero es más pequeña. ¿Le sirve?",
      ["formal", 30, "Sí, me sirve. ¿Podrían hacerme un descuento por las molestias?", "Aceptar y pedir una compensación razonable es lo ideal.", "Accepting and asking for reasonable compensation is ideal."],
      ["informal", 10, "Está bien, pero no me gusta.", "Acepta, pero suena a queja sin pedir nada.", "You accept, but it sounds like a complaint without asking for anything."],
      ["urgente", -20, "¡Ni hablar, esto es inaceptable!", "Rechazar sin alternativa te deja sin habitación.", "Refusing without an alternative leaves you without a room."]]],
    `
I'm sorry, I can't find any reservation under your name.|Je suis désolé, je ne trouve aucune réservation à votre nom.|Es tut mir leid, ich finde keine Reservierung auf Ihren Namen.|Mi dispiace, non trovo nessuna prenotazione a suo nome.|Lamento, não encontro nenhuma reserva em seu nome.|Простите, я не нахожу бронирования на ваше имя.|Îmi pare rău, nu găsesc nicio rezervare pe numele dumneavoastră.
I understand. I booked a month ago, could you check again, please?|Je comprends. J'ai réservé il y a un mois, pourriez-vous vérifier à nouveau, s'il vous plaît ?|Ich verstehe. Ich habe vor einem Monat gebucht, könnten Sie bitte noch einmal nachsehen?|Capisco. Ho prenotato un mese fa, potrebbe controllare di nuovo, per favore?|Compreendo. Reservei há um mês, poderia verificar de novo, por favor?|Понимаю. Я бронировал месяц назад, не могли бы вы проверить ещё раз?|Înțeleg. Am rezervat acum o lună, ați putea verifica din nou, vă rog?
Well, it must be there, look properly.|Eh bien, elle doit y être, regardez bien.|Na ja, sie muss da sein, schauen Sie richtig nach.|Beh, deve esserci, guardi bene.|Pois deve estar aí, veja bem.|Но она должна быть, посмотрите внимательно.|Păi trebuie să fie acolo, uitați-vă bine.
Impossible, I paid everything in advance!|C'est impossible, j'ai tout payé d'avance !|Das ist unmöglich, ich habe alles im Voraus bezahlt!|È impossibile, ho pagato tutto in anticipo!|É impossível, paguei tudo adiantado!|Это невозможно, я всё оплатил заранее!|Este imposibil, am plătit totul în avans!
Here it is, it was made for the following week. I apologise.|La voilà, elle a été faite pour la semaine suivante. Je suis désolé.|Hier ist sie, sie wurde für die Folgewoche gemacht. Das tut mir leid.|Eccola, è stata fatta per la settimana successiva. Mi dispiace.|Aqui está, foi feita para a semana seguinte. Lamento.|Вот она, её оформили на следующую неделю. Прошу прощения.|Iat-o, a fost făcută pentru săptămâna următoare. Îmi pare rău.
I understand it was a mistake. Do you have any room available today?|Je comprends que c'est une erreur. Avez-vous une chambre libre aujourd'hui ?|Ich verstehe, dass es ein Fehler war. Haben Sie heute ein Zimmer frei?|Capisco che è stato un errore. Avete una camera libera oggi?|Compreendo que foi um erro. Têm algum quarto livre hoje?|Понимаю, что это ошибка. У вас есть свободный номер на сегодня?|Înțeleg că a fost o greșeală. Aveți vreo cameră liberă azi?
What bad luck. So what do I do now?|Quelle malchance. Et maintenant, que dois-je faire ?|So ein Pech. Und was mache ich jetzt?|Che sfortuna. E ora che faccio?|Que azar. E agora, o que faço?|Какое невезение. И что мне теперь делать?|Ce ghinion. Și acum ce fac?
How incompetent! I want to speak to the manager!|Quelle incompétence ! Je veux parler au directeur !|Wie inkompetent! Ich will mit dem Manager sprechen!|Che incompetenti! Voglio parlare con il direttore!|Que incompetentes! Quero falar com o gerente!|Какая некомпетентность! Я хочу поговорить с управляющим!|Ce incompetenți! Vreau să vorbesc cu managerul!
We have a room, but it's smaller. Will that do?|Nous avons une chambre, mais elle est plus petite. Cela vous convient ?|Wir haben ein Zimmer, aber es ist kleiner. Passt das für Sie?|Abbiamo una camera, ma è più piccola. Va bene?|Temos um quarto, mas é mais pequeno. Serve-lhe?|У нас есть номер, но он меньше. Он вам подойдёт?|Avem o cameră, dar este mai mică. Vă convine?
Yes, that works. Could you give me a discount for the trouble?|Oui, cela me convient. Pourriez-vous me faire une réduction pour le dérangement ?|Ja, das passt. Könnten Sie mir wegen der Unannehmlichkeiten einen Rabatt geben?|Sì, va bene. Potreste farmi uno sconto per il disagio?|Sim, serve. Poderiam fazer-me um desconto pelo incómodo?|Да, подойдёт. Не могли бы вы дать мне скидку за неудобства?|Da, îmi convine. Mi-ați putea face o reducere pentru deranj?
Fine, but I don't like it.|D'accord, mais cela ne me plaît pas.|In Ordnung, aber es gefällt mir nicht.|Va bene, ma non mi piace.|Está bem, mas não gosto.|Ладно, но мне это не нравится.|Bine, dar nu-mi place.
No way, this is unacceptable!|Pas question, c'est inacceptable !|Auf keinen Fall, das ist inakzeptabel!|Neanche per sogno, è inaccettabile!|Nem pensar, isto é inaceitável!|Ни за что, это неприемлемо!|Nici vorbă, este inacceptabil!
`);

  /* Unidad 21: Estudios */
  scene(21, "La prórroga del trabajo", "Tu profesor", 60,
    "Necesitas más tiempo para entregar un trabajo y hablas con tu profesor. Responde con el tono adecuado.",
    "The deadline extension", "Your professor", "You need more time to hand in an assignment and you talk to your professor. Reply in the right tone.",
    [["Dígame, ¿en qué puedo ayudarle?",
      ["formal", 30, "Profesor, quisiera pedirle una prórroga para el trabajo, si fuera posible.", "Pedir con respeto y reconocer que depende de él funciona mejor.", "Asking respectfully and acknowledging it is up to him works best."],
      ["informal", 5, "Oiga, necesito más tiempo para el trabajo.", "Es directo y poco respetuoso para un profesor.", "It's blunt and not very respectful for a professor."],
      ["urgente", -30, "¡Necesito más días y ya!", "Exigir a un profesor cierra la puerta.", "Demanding from a professor closes the door."]],
     ["¿Por qué no lo ha terminado?",
      ["formal", 30, "Estuve enfermo toda la semana y no pude avanzar. Lo siento.", "Dar un motivo honesto genera comprensión.", "Giving an honest reason creates understanding."],
      ["informal", 5, "Es que tuve muchas cosas.", "Es vago y suena a excusa.", "It's vague and sounds like an excuse."],
      ["urgente", -20, "¡El trabajo era demasiado largo!", "Culpar a la tarea suena a reproche.", "Blaming the assignment sounds like a reproach."]],
     ["Le doy tres días más. ¿Es suficiente?",
      ["formal", 30, "Sí, es suficiente. Muchas gracias por su comprensión.", "Agradecer con cortesía cierra bien la conversación.", "Thanking politely ends the conversation well."],
      ["informal", 10, "Sí, gracias.", "Es correcto, aunque breve.", "It's correct, though brief."],
      ["urgente", -25, "¿Solo tres? ¡Necesito una semana!", "Regatear después de recibir ayuda es descortés.", "Haggling after being helped is impolite."]]],
    `
Tell me, how can I help you?|Dites-moi, que puis-je faire pour vous ?|Sagen Sie, wie kann ich Ihnen helfen?|Mi dica, come posso aiutarla?|Diga-me, em que posso ajudá-lo?|Скажите, чем я могу вам помочь?|Spuneți-mi, cu ce vă pot ajuta?
Professor, I would like to ask you for an extension on the assignment, if possible.|Professeur, j'aimerais vous demander un délai supplémentaire pour le devoir, si c'est possible.|Herr Professor, ich würde Sie gern um eine Fristverlängerung für die Arbeit bitten, wenn möglich.|Professore, vorrei chiederle una proroga per il lavoro, se fosse possibile.|Professor, gostaria de lhe pedir um prolongamento do prazo para o trabalho, se for possível.|Профессор, я хотел бы попросить вас о продлении срока сдачи работы, если это возможно.|Domnule profesor, aș dori să vă cer o prelungire a termenului pentru lucrare, dacă este posibil.
Listen, I need more time for the assignment.|Dites, j'ai besoin de plus de temps pour le devoir.|Hören Sie, ich brauche mehr Zeit für die Arbeit.|Senta, ho bisogno di più tempo per il lavoro.|Oiça, preciso de mais tempo para o trabalho.|Послушайте, мне нужно больше времени на работу.|Ascultați, am nevoie de mai mult timp pentru lucrare.
I need more days, and that's that!|J'ai besoin de plus de jours et c'est tout !|Ich brauche mehr Tage, Punkt!|Ho bisogno di più giorni e basta!|Preciso de mais dias e pronto!|Мне нужно больше дней, и точка!|Am nevoie de mai multe zile și gata!
Why haven't you finished it?|Pourquoi ne l'avez-vous pas terminé ?|Warum haben Sie sie nicht fertiggestellt?|Perché non l'ha finito?|Porque não o terminou?|Почему вы его не закончили?|De ce nu l-ați terminat?
I was ill all week and couldn't make progress. I'm sorry.|J'ai été malade toute la semaine et je n'ai pas pu avancer. Je suis désolé.|Ich war die ganze Woche krank und konnte nicht vorankommen. Es tut mir leid.|Sono stato male tutta la settimana e non sono riuscito ad andare avanti. Mi dispiace.|Estive doente toda a semana e não consegui avançar. Lamento.|Я болел всю неделю и не смог продвинуться. Простите.|Am fost bolnav toată săptămâna și nu am putut avansa. Îmi pare rău.
It's just that I had a lot going on.|C'est que j'ai eu beaucoup de choses à faire.|Ich hatte nur sehr viel zu tun.|È che ho avuto molte cose da fare.|É que tive muitas coisas.|Просто у меня было много дел.|Doar că am avut multe de făcut.
The assignment was too long!|Le devoir était beaucoup trop long !|Die Arbeit war viel zu lang!|Il lavoro era troppo lungo!|O trabalho era demasiado longo!|Работа была слишком большой!|Lucrarea era prea lungă!
I'll give you three more days. Is that enough?|Je vous donne trois jours de plus. Est-ce suffisant ?|Ich gebe Ihnen drei Tage mehr. Reicht das?|Le do tre giorni in più. Sono sufficienti?|Dou-lhe mais três dias. É suficiente?|Даю вам ещё три дня. Этого достаточно?|Vă mai dau trei zile. Sunt suficiente?
Yes, that's enough. Thank you very much for your understanding.|Oui, c'est suffisant. Merci beaucoup de votre compréhension.|Ja, das reicht. Vielen Dank für Ihr Verständnis.|Sì, sono sufficienti. Grazie mille per la comprensione.|Sim, é suficiente. Muito obrigado pela sua compreensão.|Да, достаточно. Большое спасибо за понимание.|Da, sunt suficiente. Vă mulțumesc mult pentru înțelegere.
Yes, thanks.|Oui, merci.|Ja, danke.|Sì, grazie.|Sim, obrigado.|Да, спасибо.|Da, mulțumesc.
Only three? I need a week!|Seulement trois ? J'ai besoin d'une semaine !|Nur drei? Ich brauche eine Woche!|Solo tre? Ho bisogno di una settimana!|Só três? Preciso de uma semana!|Только три? Мне нужна неделя!|Doar trei? Am nevoie de o săptămână!
`);

  /* Unidad 27: Dinero y trámites */
  scene(27, "La tarjeta bloqueada", "El empleado del banco", 210,
    "Tu tarjeta quedó bloqueada y vas al banco a resolverlo. Habla con el tono adecuado.",
    "The blocked card", "The bank clerk", "Your card has been blocked and you go to the bank to sort it out. Speak in the right tone.",
    [["Buenos días, ¿en qué puedo atenderle?",
      ["formal", 30, "Buenos días, mi tarjeta fue bloqueada y necesito ayuda, por favor.", "Explicar el problema con claridad y cortesía agiliza todo.", "Explaining the problem clearly and politely speeds everything up."],
      ["informal", 5, "Hola, mi tarjeta no sirve.", "Es muy vago para una gestión formal.", "It's too vague for a formal procedure."],
      ["urgente", -25, "¡Su banco bloqueó mi tarjeta sin avisar!", "Culpar de entrada pone al empleado a la defensiva.", "Blaming from the start puts the clerk on the defensive."]],
     ["¿Puede darme su documento de identidad?",
      ["formal", 30, "Por supuesto, aquí lo tiene. Gracias.", "Colaborar con amabilidad acelera el trámite.", "Cooperating kindly speeds up the procedure."],
      ["informal", 10, "Un momento, lo busco en la cartera.", "Es normal, pero llegas sin el documento listo.", "It's normal, but you arrive without the document ready."],
      ["urgente", -25, "¿Para qué lo necesita? ¡Ya me conoce!", "Cuestionar un requisito de seguridad alarga el trámite.", "Questioning a security requirement makes the procedure longer."]],
     ["Su tarjeta estará desbloqueada en unos minutos.",
      ["formal", 30, "Se lo agradezco mucho. ¿Debo hacer algo más?", "Agradecer y preguntar muestra cuidado.", "Thanking and asking shows care."],
      ["informal", 15, "Qué bien, gracias.", "Es amable, aunque informal.", "It's friendly, though informal."],
      ["urgente", -20, "¡Por fin! ¡Ya era hora!", "Un reproche final deja mal sabor.", "A final reproach leaves a bad taste."]]],
    `
Good morning, how can I help you?|Bonjour, que puis-je faire pour vous ?|Guten Morgen, wie kann ich Ihnen helfen?|Buongiorno, come posso aiutarla?|Bom dia, em que posso ajudá-lo?|Доброе утро, чем могу вам помочь?|Bună dimineața, cu ce vă pot ajuta?
Good morning, my card was blocked and I need help, please.|Bonjour, ma carte a été bloquée et j'ai besoin d'aide, s'il vous plaît.|Guten Morgen, meine Karte wurde gesperrt und ich brauche bitte Hilfe.|Buongiorno, la mia carta è stata bloccata e ho bisogno di aiuto, per favore.|Bom dia, o meu cartão foi bloqueado e preciso de ajuda, por favor.|Доброе утро, мою карту заблокировали, мне нужна помощь, пожалуйста.|Bună dimineața, cardul meu a fost blocat și am nevoie de ajutor, vă rog.
Hi, my card doesn't work.|Salut, ma carte ne marche pas.|Hallo, meine Karte funktioniert nicht.|Salve, la mia carta non funziona.|Olá, o meu cartão não funciona.|Привет, моя карта не работает.|Salut, cardul meu nu funcționează.
Your bank blocked my card without warning!|Votre banque a bloqué ma carte sans prévenir !|Ihre Bank hat meine Karte ohne Vorwarnung gesperrt!|La vostra banca ha bloccato la mia carta senza avvisare!|O vosso banco bloqueou o meu cartão sem avisar!|Ваш банк заблокировал мою карту без предупреждения!|Banca dumneavoastră mi-a blocat cardul fără avertisment!
Can you give me your ID, please?|Pouvez-vous me donner votre pièce d'identité ?|Können Sie mir Ihren Ausweis geben?|Può darmi il suo documento d'identità?|Pode dar-me o seu documento de identificação?|Можно ваш документ, удостоверяющий личность?|Îmi puteți da actul de identitate?
Of course, here it is. Thank you.|Bien sûr, le voici. Merci.|Selbstverständlich, hier bitte. Danke.|Certo, ecco qui. Grazie.|Com certeza, aqui está. Obrigado.|Конечно, вот он. Спасибо.|Desigur, poftiți. Mulțumesc.
One moment, I'll look for it in my wallet.|Un instant, je le cherche dans mon portefeuille.|Einen Moment, ich suche ihn in meiner Brieftasche.|Un momento, lo cerco nel portafoglio.|Um momento, vou procurá-lo na carteira.|Минуту, я поищу его в кошельке.|Un moment, îl caut în portofel.
What do you need it for? You already know me!|Pourquoi en avez-vous besoin ? Vous me connaissez déjà !|Wozu brauchen Sie ihn? Sie kennen mich doch schon!|A cosa le serve? Mi conosce già!|Para que precisa dele? Já me conhece!|Зачем он вам? Вы же меня знаете!|Pentru ce vă trebuie? Mă cunoașteți deja!
Your card will be unblocked in a few minutes.|Votre carte sera débloquée dans quelques minutes.|Ihre Karte wird in wenigen Minuten entsperrt sein.|La sua carta sarà sbloccata tra pochi minuti.|O seu cartão estará desbloqueado dentro de alguns minutos.|Ваша карта будет разблокирована через несколько минут.|Cardul dumneavoastră va fi deblocat în câteva minute.
I'm very grateful. Do I need to do anything else?|Je vous en remercie beaucoup. Dois-je faire autre chose ?|Ich danke Ihnen sehr. Muss ich noch etwas tun?|Gliene sono molto grato. Devo fare altro?|Agradeço-lhe muito. Devo fazer mais alguma coisa?|Очень вам благодарен. Нужно ли мне что-то ещё сделать?|Vă mulțumesc mult. Trebuie să fac altceva?
Great, thanks.|Super, merci.|Super, danke.|Che bello, grazie.|Que bom, obrigado.|Здорово, спасибо.|Foarte bine, mulțumesc.
At last! About time!|Enfin ! Il était temps !|Endlich! Das wurde auch Zeit!|Finalmente! Era ora!|Finalmente! Já era tempo!|Наконец-то! Давно пора!|În sfârșit! Era și timpul!
`);
})();
