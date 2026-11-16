/* Más situaciones "Rompecabezas vivo" (unidades 16-29) y 4 escenas nuevas (unidades 6, 12, 13 y 26).
   Escritas a mano por Claude; pendientes de revisión por hablantes nativos. Usa los ayudantes de data14.js. */
(() => {
  const P = window.addLive;
  const LG = ["en", "fr", "de", "it", "pt", "ru", "ro"];

  /* 16 Contar el pasado */
  P(16, "A", "Preguntar por el fin de semana", "Hablas con tu jefa el lunes.", "Hablas con tu amigo el lunes.",
    "Asking about the weekend", "You talk to your boss on Monday.", "You talk to your friend on Monday.",
    "¿Cómo pasó el fin de semana?", "¿Qué tal tu fin de semana?",
    "How was your weekend?|Comment s'est passé votre week-end ?|Wie war Ihr Wochenende?|Com'è andato il Suo fine settimana?|Como correu o seu fim de semana?|Как прошли ваши выходные?|Cum a fost weekendul dumneavoastră?",
    "How'd the weekend go?|Alors, ce week-end ?|Und, wie war dein Wochenende?|Allora, com'è andato il weekend?|E então, o teu fim de semana?|Ну как твои выходные?|Cum a fost weekendul tău?");
  P(16, "B", "Contar una anécdota", "Cuentas algo en una cena de trabajo.", "Cuentas algo a tus amigos.",
    "Telling an anecdote", "You tell a story at a work dinner.", "You tell a story to your friends.",
    "Permítame contarle algo curioso que me pasó ayer.", "¡No te imaginas lo que me pasó ayer!",
    "Allow me to tell you something curious that happened to me yesterday.|Permettez-moi de vous raconter quelque chose de curieux qui m'est arrivé hier.|Erlauben Sie mir, Ihnen etwas Kurioses zu erzählen, das mir gestern passiert ist.|Mi permetta di raccontarLe una cosa curiosa che mi è successa ieri.|Permita-me contar-lhe uma coisa curiosa que me aconteceu ontem.|Позвольте рассказать вам один любопытный случай, который произошёл со мной вчера.|Permiteți-mi să vă povestesc ceva curios care mi s-a întâmplat ieri.",
    "You won't believe what happened to me yesterday!|Tu ne devineras jamais ce qui m'est arrivé hier !|Du glaubst nicht, was mir gestern passiert ist!|Non immagini cosa mi è successo ieri!|Não imaginas o que me aconteceu ontem!|Ты не поверишь, что со мной вчера случилось!|Nu-ți închipui ce mi s-a întâmplat ieri!");

  /* 17 Planes de futuro */
  P(17, "A", "Preguntar por los planes", "Hablas con tu profesor.", "Hablas con tu primo.",
    "Asking about plans", "You talk to your teacher.", "You talk to your cousin.",
    "¿Qué planes tiene para las vacaciones?", "¿Qué vas a hacer en las vacaciones?",
    "What plans do you have for the holidays?|Quels sont vos projets pour les vacances ?|Welche Pläne haben Sie für die Ferien?|Che programmi ha per le vacanze?|Que planos tem para as férias?|Какие у вас планы на каникулы?|Ce planuri aveți pentru vacanță?",
    "What are you up to for the holidays?|Tu fais quoi pendant les vacances ?|Was machst du in den Ferien?|Cosa fai in vacanza?|O que vais fazer nas férias?|Что ты будешь делать на каникулах?|Ce faci în vacanță?");
  P(17, "B", "Confirmar un plan", "Escribes a un cliente.", "Escribes a una amiga.",
    "Confirming a plan", "You write to a client.", "You write to a friend.",
    "Le confirmo que nos veremos mañana a las nueve.", "¡Confirmado, nos vemos mañana a las nueve!",
    "I confirm that we will meet tomorrow at nine.|Je vous confirme que nous nous verrons demain à neuf heures.|Ich bestätige, dass wir uns morgen um neun Uhr treffen.|Le confermo che ci vedremo domani alle nove.|Confirmo que nos veremos amanhã às nove.|Подтверждаю, что мы встретимся завтра в девять.|Vă confirm că ne vedem mâine la ora nouă.",
    "Confirmed, see you tomorrow at nine!|C'est confirmé, à demain neuf heures !|Abgemacht, bis morgen um neun!|Confermato, ci vediamo domani alle nove!|Confirmado, até amanhã às nove!|Договорились, до завтра, в девять!|Confirmat, ne vedem mâine la nouă!");

  /* 18 Opiniones */
  P(18, "A", "Pedir una opinión", "Hablas con un superior.", "Hablas con un amigo.",
    "Asking for an opinion", "You talk to a superior.", "You talk to a friend.",
    "¿Qué opina usted sobre esta propuesta?", "¿Qué piensas de esto?",
    "What is your opinion on this proposal?|Que pensez-vous de cette proposition ?|Was halten Sie von diesem Vorschlag?|Cosa pensa di questa proposta?|O que pensa desta proposta?|Что вы думаете об этом предложении?|Ce părere aveți despre această propunere?",
    "What do you reckon?|Qu'est-ce que tu en penses ?|Was meinst du dazu?|Cosa ne pensi?|O que achas disto?|Что ты об этом думаешь?|Tu ce crezi despre asta?");
  P(18, "B", "Dar tu opinión", "Das tu opinión en una reunión.", "Das tu opinión a tus amigos.",
    "Giving your opinion", "You give your opinion in a meeting.", "You give your opinion to your friends.",
    "Con todo respeto, creo que hay otra opción.", "Pues yo creo que hay otra opción.",
    "With all due respect, I think there is another option.|Avec tout mon respect, je pense qu'il existe une autre option.|Bei allem Respekt, ich glaube, es gibt eine andere Möglichkeit.|Con tutto il rispetto, credo che ci sia un'altra opzione.|Com todo o respeito, creio que há outra opção.|При всём уважении, я считаю, что есть другой вариант.|Cu tot respectul, cred că există o altă opțiune.",
    "Well, I think there's another option.|Moi, je pense qu'il y a une autre option.|Also ich glaube, es gibt noch eine andere Möglichkeit.|Beh, io credo che ci sia un'altra opzione.|Bem, eu acho que há outra opção.|А я думаю, что есть другой вариант.|Eu cred că mai există o variantă.");

  /* 19 Pedir ayuda */
  P(19, "A", "Pedir ayuda en la calle", "Se lo pides a un agente de policía.", "Se lo pides a un joven.",
    "Asking for help in the street", "You ask a police officer.", "You ask a young person.",
    "Disculpe, ¿podría ayudarme, por favor? Estoy perdido.", "Oye, ¿me ayudas? Estoy perdido.",
    "Excuse me, could you help me, please? I'm lost.|Excusez-moi, pourriez-vous m'aider, s'il vous plaît ? Je suis perdu.|Entschuldigung, könnten Sie mir bitte helfen? Ich habe mich verlaufen.|Mi scusi, potrebbe aiutarmi, per favore? Mi sono perso.|Desculpe, poderia ajudar-me, por favor? Estou perdido.|Извините, не могли бы вы мне помочь? Я заблудился.|Scuzați-mă, mă puteți ajuta, vă rog? M-am pierdut.",
    "Hey, can you help me? I'm lost.|Dis, tu peux m'aider ? Je suis perdu.|Hey, kannst du mir helfen? Ich habe mich verlaufen.|Ehi, mi aiuti? Mi sono perso.|Ei, ajudas-me? Estou perdido.|Слушай, поможешь? Я заблудился.|Hei, mă ajuți? M-am pierdut.");
  P(19, "B", "Pedir que repitan", "No entiendes a un funcionario.", "No entiendes a un amigo.",
    "Asking someone to repeat", "You don't understand an official.", "You don't understand a friend.",
    "Perdone, ¿podría repetir eso más despacio, por favor?", "¿Puedes repetir eso más despacio?",
    "Sorry, could you repeat that more slowly, please?|Pardon, pourriez-vous répéter plus lentement, s'il vous plaît ?|Verzeihung, könnten Sie das bitte langsamer wiederholen?|Scusi, potrebbe ripetere più lentamente, per favore?|Perdão, poderia repetir isso mais devagar, por favor?|Простите, не могли бы вы повторить помедленнее?|Scuzați-mă, ați putea repeta mai rar, vă rog?",
    "Can you say that again, slower?|Tu peux répéter plus lentement ?|Kannst du das langsamer wiederholen?|Puoi ripetere più lentamente?|Podes repetir mais devagar?|Можешь повторить помедленнее?|Poți repeta mai rar?");

  /* 20 Reservas y viajes */
  P(20, "A", "Reservar una habitación", "Llamas a un hotel de lujo.", "Escribes a un hostal económico.",
    "Booking a room", "You phone a luxury hotel.", "You write to a cheap hostel.",
    "Buenas tardes, quisiera reservar una habitación doble.", "¡Hola! ¿Tienen una habitación doble?",
    "Good afternoon, I would like to book a double room.|Bonjour, je voudrais réserver une chambre double.|Guten Tag, ich möchte ein Doppelzimmer reservieren.|Buon pomeriggio, vorrei prenotare una camera doppia.|Boa tarde, queria reservar um quarto duplo.|Добрый день, я хотел бы забронировать двухместный номер.|Bună ziua, aș dori să rezerv o cameră dublă.",
    "Hi! Do you have a double room?|Salut ! Vous avez une chambre double ?|Hallo! Habt ihr ein Doppelzimmer?|Ciao! Avete una camera doppia?|Olá! Têm um quarto duplo?|Привет! У вас есть двухместный номер?|Salut! Aveți o cameră dublă?");
  P(20, "B", "Cambiar una reserva", "Hablas con la agencia.", "Hablas con tu amigo que organiza el viaje.",
    "Changing a booking", "You talk to the agency.", "You talk to your friend who is organising the trip.",
    "Quisiera cambiar mi reserva para el viernes, si es posible.", "¿Podemos cambiar la reserva al viernes?",
    "I would like to change my booking to Friday, if possible.|Je voudrais changer ma réservation pour vendredi, si possible.|Ich möchte meine Buchung auf Freitag ändern, wenn möglich.|Vorrei cambiare la mia prenotazione per venerdì, se possibile.|Queria mudar a minha reserva para sexta-feira, se for possível.|Я хотел бы перенести бронь на пятницу, если это возможно.|Aș dori să-mi schimb rezervarea pentru vineri, dacă este posibil.",
    "Can we move the booking to Friday?|On peut changer la réservation pour vendredi ?|Können wir die Buchung auf Freitag verschieben?|Possiamo spostare la prenotazione a venerdì?|Podemos mudar a reserva para sexta?|Можем перенести бронь на пятницу?|Putem muta rezervarea pe vineri?");

  /* 21 Estudios */
  P(21, "A", "Pedir una aclaración", "Hablas con tu profesora.", "Hablas con tu compañero.",
    "Asking for clarification", "You talk to your teacher.", "You talk to your classmate.",
    "Disculpe, profesora, ¿podría explicar eso otra vez?", "¿Me explicas eso otra vez?",
    "Excuse me, professor, could you explain that again?|Excusez-moi, professeure, pourriez-vous réexpliquer cela ?|Entschuldigung, Frau Professorin, könnten Sie das noch einmal erklären?|Mi scusi, professoressa, potrebbe spiegarlo di nuovo?|Desculpe, professora, poderia explicar isso outra vez?|Извините, профессор, не могли бы вы объяснить это ещё раз?|Scuzați-mă, doamnă profesor, ați putea explica asta încă o dată?",
    "Can you explain that again?|Tu peux m'expliquer ça encore une fois ?|Erklärst du mir das noch mal?|Mi spieghi di nuovo?|Explicas-me isso outra vez?|Объяснишь мне это ещё раз?|Îmi explici încă o dată?");
  P(21, "B", "Pedir apuntes", "Se lo pides a una profesora.", "Se lo pides a un amigo.",
    "Asking for notes", "You ask a teacher.", "You ask a friend.",
    "¿Sería posible que me compartiera sus apuntes?", "¿Me pasas tus apuntes?",
    "Would it be possible for you to share your notes with me?|Serait-il possible que vous me communiquiez vos notes ?|Wäre es möglich, dass Sie mir Ihre Unterlagen zur Verfügung stellen?|Sarebbe possibile avere i Suoi appunti?|Seria possível partilhar comigo os seus apontamentos?|Не могли бы вы поделиться со мной своими конспектами?|Ar fi posibil să-mi dați notițele dumneavoastră?",
    "Can you send me your notes?|Tu me passes tes notes ?|Schickst du mir deine Mitschrift?|Mi passi i tuoi appunti?|Passas-me os teus apontamentos?|Скинешь мне свой конспект?|Îmi dai notițele tale?");

  /* 22 Tecnología y medios */
  P(22, "A", "Pedir la clave del wifi", "Preguntas en un hotel.", "Preguntas en casa de un amigo.",
    "Asking for the Wi-Fi password", "You ask in a hotel.", "You ask at a friend's house.",
    "Disculpe, ¿podría darme la clave del wifi?", "¿Cuál es la clave del wifi?",
    "Excuse me, could you give me the Wi-Fi password?|Excusez-moi, pourriez-vous me donner le mot de passe du Wi-Fi ?|Entschuldigung, könnten Sie mir das WLAN-Passwort geben?|Mi scusi, potrebbe darmi la password del Wi-Fi?|Desculpe, poderia dar-me a palavra-passe do Wi-Fi?|Извините, не могли бы вы дать мне пароль от вайфая?|Scuzați-mă, mi-ați putea da parola de la Wi-Fi?",
    "What's the Wi-Fi password?|C'est quoi le mot de passe du Wi-Fi ?|Wie ist das WLAN-Passwort?|Qual è la password del Wi-Fi?|Qual é a palavra-passe do Wi-Fi?|Какой пароль от вайфая?|Care e parola de la Wi-Fi?");
  P(22, "B", "Pedir ayuda con la computadora", "Se lo pides al técnico de la oficina.", "Se lo pides a tu sobrino.",
    "Asking for help with the computer", "You ask the office technician.", "You ask your nephew.",
    "¿Podría ayudarme a instalar este programa, por favor?", "¿Me ayudas a instalar esto?",
    "Could you help me install this program, please?|Pourriez-vous m'aider à installer ce programme, s'il vous plaît ?|Könnten Sie mir bitte helfen, dieses Programm zu installieren?|Potrebbe aiutarmi a installare questo programma, per favore?|Poderia ajudar-me a instalar este programa, por favor?|Не могли бы вы помочь мне установить эту программу?|Mă puteți ajuta să instalez acest program, vă rog?",
    "Can you help me install this?|Tu m'aides à installer ça ?|Hilfst du mir, das zu installieren?|Mi aiuti a installare questo?|Ajudas-me a instalar isto?|Поможешь мне это установить?|Mă ajuți să instalez asta?");

  /* 23 Hábitos saludables */
  P(23, "A", "Pedir consejo sobre salud", "Hablas con tu médico.", "Hablas con tu amigo entrenador.",
    "Asking for health advice", "You talk to your doctor.", "You talk to your trainer friend.",
    "Doctor, ¿qué me recomienda para dormir mejor?", "Oye, ¿qué me recomiendas para dormir mejor?",
    "Doctor, what do you recommend for sleeping better?|Docteur, que me conseillez-vous pour mieux dormir ?|Herr Doktor, was empfehlen Sie mir, um besser zu schlafen?|Dottore, cosa mi consiglia per dormire meglio?|Doutor, o que me recomenda para dormir melhor?|Доктор, что вы посоветуете, чтобы лучше спать?|Domnule doctor, ce îmi recomandați ca să dorm mai bine?",
    "Hey, what would you suggest for sleeping better?|Dis, tu me conseilles quoi pour mieux dormir ?|Sag mal, was empfiehlst du mir, um besser zu schlafen?|Ehi, cosa mi consigli per dormire meglio?|Ei, o que me recomendas para dormir melhor?|Слушай, что посоветуешь, чтобы лучше спать?|Hei, ce-mi recomanzi ca să dorm mai bine?");
  P(23, "B", "Invitar a hacer ejercicio", "Invitas a tu vecina.", "Invitas a tu amigo.",
    "Inviting someone to exercise", "You invite your neighbour.", "You invite your friend.",
    "¿Le gustaría caminar conmigo por el parque mañana?", "¿Caminamos por el parque mañana?",
    "Would you like to walk with me in the park tomorrow?|Aimeriez-vous marcher avec moi dans le parc demain ?|Möchten Sie morgen mit mir im Park spazieren gehen?|Le piacerebbe camminare con me nel parco domani?|Gostaria de caminhar comigo no parque amanhã?|Не хотели бы вы завтра прогуляться со мной по парку?|Ați dori să mergeți mâine cu mine pe jos prin parc?",
    "Shall we walk in the park tomorrow?|On marche dans le parc demain ?|Gehen wir morgen im Park spazieren?|Camminiamo nel parco domani?|Caminhamos no parque amanhã?|Прогуляемся завтра по парку?|Mergem mâine pe jos prin parc?");

  /* 24 Medio ambiente */
  P(24, "A", "Pedir que reciclen", "Hablas con tus vecinos del edificio.", "Hablas con tus compañeros de casa.",
    "Asking people to recycle", "You talk to your neighbours in the building.", "You talk to your housemates.",
    "¿Serían tan amables de separar la basura para reciclar?", "Chicos, ¿separamos la basura?",
    "Would you be so kind as to separate the rubbish for recycling?|Auriez-vous l'amabilité de trier les déchets pour le recyclage ?|Wären Sie so freundlich, den Müll zum Recyceln zu trennen?|Sareste così gentili da separare i rifiuti per il riciclaggio?|Teriam a amabilidade de separar o lixo para reciclar?|Не могли бы вы сортировать мусор для переработки?|Ați fi atât de amabili să separați gunoiul pentru reciclare?",
    "Guys, shall we sort the rubbish?|Les gars, on trie les déchets ?|Leute, trennen wir den Müll?|Ragazzi, separiamo i rifiuti?|Malta, separamos o lixo?|Ребята, будем сортировать мусор?|Băieți, separăm gunoiul?");
  P(24, "B", "Proponer ir en bici", "Propones a tu jefe ir al trabajo en bici.", "Propones a tu hermano ir en bici.",
    "Suggesting cycling", "You suggest cycling to work to your boss.", "You suggest cycling to your brother.",
    "¿Le parecería bien que vayamos al trabajo en bicicleta?", "¿Vamos en bici?",
    "Would you mind if we cycled to work?|Cela vous conviendrait-il que nous allions au travail à vélo ?|Hätten Sie etwas dagegen, wenn wir mit dem Fahrrad zur Arbeit fahren?|Le andrebbe bene se andassimo al lavoro in bicicletta?|Parecer-lhe-ia bem irmos de bicicleta para o trabalho?|Не возражаете, если мы поедем на работу на велосипедах?|V-ar conveni să mergem la serviciu cu bicicleta?",
    "Shall we cycle?|On y va à vélo ?|Fahren wir mit dem Rad?|Andiamo in bici?|Vamos de bicicleta?|Поедем на велосипедах?|Mergem cu bicicleta?");

  /* 25 Cultura y tradiciones */
  P(25, "A", "Preguntar por una tradición", "Hablas con una anciana del pueblo.", "Hablas con tu amigo del lugar.",
    "Asking about a tradition", "You talk to an old woman from the village.", "You talk to your local friend.",
    "Disculpe, ¿podría contarme sobre esta tradición?", "¿Qué significa esta tradición?",
    "Excuse me, could you tell me about this tradition?|Excusez-moi, pourriez-vous me parler de cette tradition ?|Entschuldigung, könnten Sie mir etwas über diese Tradition erzählen?|Mi scusi, potrebbe parlarmi di questa tradizione?|Desculpe, poderia falar-me desta tradição?|Извините, не могли бы вы рассказать мне об этой традиции?|Scuzați-mă, mi-ați putea povesti despre această tradiție?",
    "What does this tradition mean?|Qu'est-ce que cette tradition veut dire ?|Was bedeutet diese Tradition?|Cosa significa questa tradizione?|O que significa esta tradição?|Что значит эта традиция?|Ce înseamnă tradiția asta?");
  P(25, "B", "Invitar a una fiesta", "Invitas a tu profesor.", "Invitas a tus amigos.",
    "Inviting someone to a party", "You invite your teacher.", "You invite your friends.",
    "Será un honor contar con su presencia en mi fiesta.", "¡Ven a mi fiesta, será genial!",
    "It would be an honour to have you at my party.|Ce sera un honneur de vous compter parmi nous à ma fête.|Es wäre mir eine Ehre, Sie auf meiner Feier begrüßen zu dürfen.|Sarà un onore avere la Sua presenza alla mia festa.|Será uma honra contar com a sua presença na minha festa.|Для меня будет честью видеть вас на моём празднике.|Va fi o onoare să vă avem la petrecerea mea.",
    "Come to my party, it'll be great!|Viens à ma fête, ça va être génial !|Komm zu meiner Party, das wird super!|Vieni alla mia festa, sarà fantastico!|Vem à minha festa, vai ser ótimo!|Приходи на мою вечеринку, будет классно!|Vino la petrecerea mea, o să fie grozav!");

  /* 26 Amistad y consejos */
  P(26, "A", "Pedir perdón", "Te disculpas con un cliente.", "Te disculpas con tu mejor amigo.",
    "Apologising", "You apologise to a client.", "You apologise to your best friend.",
    "Le ofrezco mis más sinceras disculpas.", "Perdóname, fui un tonto.",
    "I offer you my sincerest apologies.|Je vous présente mes plus sincères excuses.|Ich bitte Sie aufrichtig um Entschuldigung.|Le porgo le mie più sincere scuse.|Apresento-lhe as minhas mais sinceras desculpas.|Приношу вам мои искренние извинения.|Vă cer cele mai sincere scuze.",
    "Forgive me, I was an idiot.|Pardonne-moi, j'ai été bête.|Verzeih mir, ich war dumm.|Perdonami, sono stato uno sciocco.|Perdoa-me, fui tonto.|Прости меня, я вёл себя глупо.|Iartă-mă, am fost prost.");
  P(26, "B", "Dar un consejo", "Aconsejas a un colega mayor.", "Aconsejas a tu hermano.",
    "Giving advice", "You advise an older colleague.", "You advise your brother.",
    "Si me permite, le recomendaría hablar con ella.", "Habla con ella, créeme.",
    "If you'll allow me, I would recommend speaking to her.|Si vous me le permettez, je vous recommanderais de lui parler.|Wenn Sie erlauben, würde ich Ihnen raten, mit ihr zu sprechen.|Se me lo permette, Le consiglierei di parlarle.|Se me permite, recomendaria que falasse com ela.|Если позволите, я бы посоветовал вам поговорить с ней.|Dacă îmi permiteți, v-aș recomanda să vorbiți cu ea.",
    "Talk to her, trust me.|Parle-lui, crois-moi.|Sprich mit ihr, glaub mir.|Parlale, fidati.|Fala com ela, acredita.|Поговори с ней, поверь мне.|Vorbește cu ea, crede-mă.");

  /* 27 Dinero y trámites */
  P(27, "A", "Abrir una cuenta", "Hablas con el ejecutivo del banco.", "Hablas con tu amigo que trabaja en el banco.",
    "Opening an account", "You talk to the bank officer.", "You talk to your friend who works at the bank.",
    "Buenos días, quisiera abrir una cuenta de ahorros.", "Oye, quiero abrir una cuenta, ¿cómo se hace?",
    "Good morning, I would like to open a savings account.|Bonjour, je voudrais ouvrir un compte d'épargne.|Guten Morgen, ich möchte ein Sparkonto eröffnen.|Buongiorno, vorrei aprire un conto di risparmio.|Bom dia, queria abrir uma conta poupança.|Доброе утро, я хотел бы открыть сберегательный счёт.|Bună dimineața, aș dori să deschid un cont de economii.",
    "Hey, I want to open an account, how do I do it?|Dis, je veux ouvrir un compte, comment on fait ?|Du, ich will ein Konto eröffnen, wie geht das?|Ehi, voglio aprire un conto, come si fa?|Ei, quero abrir uma conta, como se faz?|Слушай, я хочу открыть счёт, как это сделать?|Hei, vreau să deschid un cont, cum se face?");
  P(27, "B", "Pedir dinero prestado", "Se lo pides a tu tío mayor.", "Se lo pides a tu mejor amigo.",
    "Asking to borrow money", "You ask your older uncle.", "You ask your best friend.",
    "Tío, ¿sería posible que me prestara un poco de dinero?", "¿Me prestas algo de plata?",
    "Uncle, would it be possible for you to lend me some money?|Mon oncle, serait-il possible que vous me prêtiez un peu d'argent ?|Onkel, wäre es möglich, dass Sie mir etwas Geld leihen?|Zio, sarebbe possibile che mi prestasse un po' di denaro?|Tio, seria possível emprestar-me algum dinheiro?|Дядя, не могли бы вы одолжить мне немного денег?|Unchiule, ar fi posibil să-mi împrumutați niște bani?",
    "Can you lend me some cash?|Tu me prêtes un peu de fric ?|Leihst du mir etwas Geld?|Mi presti un po' di soldi?|Emprestas-me algum dinheiro?|Одолжишь немного денег?|Îmi împrumuți niște bani?");

  /* 28 Experiencias y recuerdos */
  P(28, "A", "Preguntar por la infancia", "Hablas con un señor mayor.", "Hablas con tu mejor amigo.",
    "Asking about childhood", "You talk to an elderly gentleman.", "You talk to your best friend.",
    "¿Cómo fue su infancia, si no es indiscreción?", "¿Cómo fue tu infancia?",
    "What was your childhood like, if you don't mind my asking?|Comment était votre enfance, si ce n'est pas indiscret ?|Wie war Ihre Kindheit, wenn die Frage erlaubt ist?|Com'è stata la Sua infanzia, se non è indiscreto?|Como foi a sua infância, se não for indiscrição?|Какое у вас было детство, если это не секрет?|Cum a fost copilăria dumneavoastră, dacă nu e o indiscreție?",
    "What was your childhood like?|Comment c'était, ton enfance ?|Wie war deine Kindheit?|Com'è stata la tua infanzia?|Como foi a tua infância?|Каким было твоё детство?|Cum a fost copilăria ta?");
  P(28, "B", "Contar un recuerdo", "Cuentas algo a tus colegas.", "Cuentas algo a tu hermana.",
    "Sharing a memory", "You tell your colleagues.", "You tell your sister.",
    "Recuerdo con cariño el verano que pasé en el campo.", "¡Cómo extraño aquel verano en el campo!",
    "I fondly remember the summer I spent in the countryside.|Je garde un excellent souvenir de l'été que j'ai passé à la campagne.|Ich erinnere mich gern an den Sommer, den ich auf dem Land verbracht habe.|Ricordo con affetto l'estate trascorsa in campagna.|Recordo com carinho o verão que passei no campo.|Я с теплотой вспоминаю лето, проведённое в деревне.|Îmi amintesc cu drag vara petrecută la țară.",
    "I really miss that summer in the countryside!|Ce que cet été à la campagne me manque !|Wie ich diesen Sommer auf dem Land vermisse!|Quanto mi manca quell'estate in campagna!|Tenho tantas saudades daquele verão no campo!|Как я скучаю по тому лету в деревне!|Ce dor mi-e de vara aceea la țară!");

  /* 29 Sueños y condiciones */
  P(29, "A", "Preguntar por sus metas", "Hablas con tu mentor.", "Hablas con tu mejor amiga.",
    "Asking about goals", "You talk to your mentor.", "You talk to your best friend.",
    "¿Cuáles son sus metas para el próximo año?", "¿Qué quieres lograr el año que viene?",
    "What are your goals for next year?|Quels sont vos objectifs pour l'année prochaine ?|Welche Ziele haben Sie für das nächste Jahr?|Quali sono i Suoi obiettivi per il prossimo anno?|Quais são os seus objetivos para o próximo ano?|Какие у вас цели на следующий год?|Care sunt obiectivele dumneavoastră pentru anul viitor?",
    "What do you want to achieve next year?|Tu veux réussir quoi l'année prochaine ?|Was willst du nächstes Jahr erreichen?|Cosa vuoi realizzare l'anno prossimo?|O que queres alcançar no próximo ano?|Чего ты хочешь добиться в следующем году?|Ce vrei să realizezi anul viitor?");
  P(29, "B", "Contar un sueño", "Hablas con tu jefa.", "Hablas con tu hermano.",
    "Sharing a dream", "You talk to your boss.", "You talk to your brother.",
    "Mi sueño es abrir mi propia escuela algún día.", "¡Algún día voy a tener mi propia escuela!",
    "My dream is to open my own school one day.|Mon rêve est d'ouvrir ma propre école un jour.|Mein Traum ist es, eines Tages meine eigene Schule zu eröffnen.|Il mio sogno è aprire un giorno una scuola tutta mia.|O meu sonho é abrir a minha própria escola um dia.|Моя мечта — когда-нибудь открыть собственную школу.|Visul meu este să-mi deschid într-o zi propria școală.",
    "One day I'm going to have my own school!|Un jour, j'aurai ma propre école !|Eines Tages habe ich meine eigene Schule!|Un giorno avrò una scuola tutta mia!|Um dia vou ter a minha própria escola!|Когда-нибудь у меня будет своя школа!|Într-o zi voi avea propria mea școală!");

  /* ===== Escenas nuevas ===== */
  /* turnos: [frase del personaje, [tono, puntos, es, por qué, why en inglés] x3]; t: idioma -> 3 turnos [frase, opción a, b, c] */
  const scene = (unit, title, who, hue, start, goal, intro, enTitle, enWho, enIntro, turns, t) => {
    const E = window.EN_EXTRA;
    E[title] = enTitle; E[who] = enWho; E[intro] = enIntro;
    turns.forEach(tu => tu.slice(1).forEach(o => { E[o[3]] = o[4]; }));
    if (!window.SCENES) return;
    window.SCENES.push({
      unit, title, who, hue, start, goal, intro,
      turns: turns.map(tu => ({ es: tu[0], opts: tu.slice(1).map(o => ({ tone: o[0], d: o[1], es: o[2], why: o[3] })) })),
      t
    });
  };

  scene(6, "Se perdió la maleta", "La empleada del aeropuerto", 200, 25, 80,
    "Tu maleta no llegó y la empleada del aeropuerto está muy ocupada. Pide ayuda con el tono adecuado.",
    "The lost suitcase", "The airport clerk", "Your suitcase didn't arrive and the airport clerk is very busy. Ask for help in the right tone.",
    [["Dígame, ¿en qué puedo ayudarle?",
      ["formal", 30, "Disculpe, mi maleta no llegó.", "Explicar el problema con calma y cortesía abre la ayuda.", "Explaining the problem calmly and politely opens the way to help."],
      ["urgente", -30, "¡Quiero mi maleta ya!", "Exigir a gritos pone a la empleada a la defensiva.", "Demanding loudly puts the clerk on the defensive."],
      ["informal", 5, "Oye, perdí mi maleta.", "Es claro, pero muy informal para una empleada.", "It's clear, but too informal for a clerk."]],
     ["¿Puede describir su maleta?",
      ["formal", 30, "Es negra, mediana y tiene una cinta roja.", "Una descripción clara y breve acelera la búsqueda.", "A short, clear description speeds up the search."],
      ["informal", 10, "Es una maleta negra, ya sabes.", "Es amable, pero poco precisa para una búsqueda.", "It's friendly, but not precise enough for a search."],
      ["urgente", -25, "¡Es negra! ¿Qué más quiere?", "Responder con mal tono no ayuda a encontrarla.", "Answering angrily doesn't help find it."]],
     ["La encontraremos. ¿Dónde le enviamos la maleta?",
      ["formal", 30, "Al hotel Central, se lo agradezco mucho.", "Dar el dato y agradecer deja una buena impresión.", "Giving the address and saying thanks leaves a good impression."],
      ["informal", 15, "Al hotel Central, gracias.", "Es correcto, aunque algo seco.", "It's correct, though a little curt."],
      ["urgente", -20, "¡Envíela ya al hotel!", "Dar órdenes al final rompe el buen trato.", "Giving orders at the end ruins the good rapport."]]],
    { en: [["How can I help you?", "Excuse me, my suitcase didn't arrive.", "I want my suitcase now!", "Hey, I lost my suitcase."],
           ["Can you describe your suitcase?", "It's black, medium-sized and has a red ribbon.", "It's a black suitcase, you know.", "It's black! What more do you want?"],
           ["We'll find it. Where should we send it?", "To the Central Hotel, thank you very much.", "To the Central Hotel, thanks.", "Send it to the hotel right now!"]],
      fr: [["Dites-moi, que puis-je faire pour vous ?", "Excusez-moi, ma valise n'est pas arrivée.", "Je veux ma valise tout de suite !", "Eh, j'ai perdu ma valise."],
           ["Pouvez-vous décrire votre valise ?", "Elle est noire, de taille moyenne, avec un ruban rouge.", "C'est une valise noire, vous savez.", "Elle est noire ! Que voulez-vous de plus ?"],
           ["Nous la retrouverons. Où devons-nous l'envoyer ?", "À l'hôtel Central, merci beaucoup.", "À l'hôtel Central, merci.", "Envoyez-la à l'hôtel tout de suite !"]],
      de: [["Sagen Sie, wie kann ich Ihnen helfen?", "Entschuldigung, mein Koffer ist nicht angekommen.", "Ich will sofort meinen Koffer!", "Hey, ich habe meinen Koffer verloren."],
           ["Können Sie Ihren Koffer beschreiben?", "Er ist schwarz, mittelgroß und hat ein rotes Band.", "Es ist ein schwarzer Koffer, wissen Sie.", "Er ist schwarz! Was wollen Sie noch?"],
           ["Wir finden ihn. Wohin sollen wir ihn schicken?", "Ins Hotel Central, vielen Dank.", "Ins Hotel Central, danke.", "Schicken Sie ihn sofort ins Hotel!"]],
      it: [["Mi dica, come posso aiutarla?", "Mi scusi, la mia valigia non è arrivata.", "Voglio la mia valigia subito!", "Ehi, ho perso la valigia."],
           ["Può descrivere la sua valigia?", "È nera, di media grandezza e ha un nastro rosso.", "È una valigia nera, sa.", "È nera! Cos'altro vuole?"],
           ["La ritroveremo. Dove dobbiamo spedirla?", "All'hotel Central, la ringrazio molto.", "All'hotel Central, grazie.", "La spedisca subito all'hotel!"]],
      pt: [["Diga-me, em que posso ajudá-lo?", "Desculpe, a minha mala não chegou.", "Quero a minha mala já!", "Ei, perdi a minha mala."],
           ["Pode descrever a sua mala?", "É preta, de tamanho médio e tem uma fita vermelha.", "É uma mala preta, sabe.", "É preta! O que mais quer?"],
           ["Vamos encontrá-la. Para onde a enviamos?", "Para o hotel Central, muito obrigado.", "Para o hotel Central, obrigado.", "Envie-a já para o hotel!"]],
      ru: [["Слушаю вас, чем могу помочь?", "Извините, мой чемодан не прибыл.", "Я хочу свой чемодан немедленно!", "Эй, я потерял чемодан."],
           ["Можете описать свой чемодан?", "Он чёрный, среднего размера, с красной лентой.", "Ну, чёрный чемодан, понимаете.", "Он чёрный! Что ещё вам нужно?"],
           ["Мы его найдём. Куда его отправить?", "В отель «Сентрал», большое спасибо.", "В отель «Сентрал», спасибо.", "Отправьте его в отель немедленно!"]],
      ro: [["Spuneți-mi, cu ce vă pot ajuta?", "Scuzați-mă, valiza mea nu a ajuns.", "Vreau valiza mea imediat!", "Hei, mi-am pierdut valiza."],
           ["Puteți descrie valiza dumneavoastră?", "Este neagră, de mărime medie și are o panglică roșie.", "E o valiză neagră, știți.", "E neagră! Ce mai vreți?"],
           ["O vom găsi. Unde să v-o trimitem?", "La hotelul Central, vă mulțumesc mult.", "La hotelul Central, mulțumesc.", "Trimiteți-o imediat la hotel!"]] });

  scene(12, "La recepción del médico", "La recepcionista", 150, 25, 80,
    "Llegas sin cita al consultorio y la recepcionista está agotada. Consigue atención con el tono adecuado.",
    "The doctor's reception", "The receptionist", "You arrive at the surgery without an appointment and the receptionist is exhausted. Get seen in the right tone.",
    [["Aquí no hay turnos libres hoy.",
      ["formal", 30, "Entiendo, ¿hay alguna otra hora disponible?", "Mostrar comprensión y buscar otra opción es lo más efectivo.", "Showing understanding and looking for another option is the most effective."],
      ["urgente", -30, "¡Me siento muy mal, atiéndame!", "Presionar a gritos pone tensa a la recepcionista.", "Pressuring loudly makes the receptionist tense."],
      ["informal", 5, "Ay, qué mala suerte.", "Es amable, pero no ayuda a resolver nada.", "It's friendly, but it doesn't solve anything."]],
     ["Podría atenderlo a las seis. ¿Le sirve?",
      ["formal", 30, "Sí, muchas gracias, ahí estaré.", "Aceptar con agradecimiento cierra bien la gestión.", "Accepting gratefully closes things well."],
      ["informal", 15, "Bueno, está bien.", "Es aceptable, pero suena poco entusiasta.", "It's acceptable, but sounds unenthusiastic."],
      ["urgente", -25, "¡Tan tarde! ¿No hay nada antes?", "Quejarse de una buena oferta la molesta.", "Complaining about a good offer annoys her."]],
     ["Perfecto. ¿Me da su nombre completo?",
      ["formal", 30, "Claro, me llamo Carlos Ruiz Soto.", "Responder con claridad y cortesía agiliza el trámite.", "Answering clearly and politely speeds up the process."],
      ["informal", 20, "Carlos Ruiz, gracias.", "Es breve y amable.", "It's short and kind."],
      ["urgente", -20, "¡Ya se lo dije al llegar!", "Reprochar algo a quien trabaja con prisa empeora todo.", "Reproaching someone who is rushing makes it worse."]]],
    { en: [["There are no free slots today.", "I understand, is there another time available?", "I feel really ill, see me now!", "Oh, bad luck."],
           ["I could see you at six. Does that work for you?", "Yes, thank you very much, I'll be there.", "Fine, that's all right.", "So late! Is there nothing earlier?"],
           ["Perfect. May I have your full name?", "Of course, my name is Carlos Ruiz Soto.", "Carlos Ruiz, thanks.", "I already told you when I arrived!"]],
      fr: [["Il n'y a plus de créneau libre aujourd'hui.", "Je comprends, y a-t-il une autre heure disponible ?", "Je me sens très mal, occupez-vous de moi !", "Oh, pas de chance."],
           ["Je peux vous prendre à dix-huit heures. Cela vous convient ?", "Oui, merci beaucoup, j'y serai.", "Bon, d'accord.", "Si tard ! Il n'y a rien avant ?"],
           ["Parfait. Puis-je avoir votre nom complet ?", "Bien sûr, je m'appelle Carlos Ruiz Soto.", "Carlos Ruiz, merci.", "Je vous l'ai déjà dit en arrivant !"]],
      de: [["Heute sind keine Termine mehr frei.", "Ich verstehe, gibt es noch eine andere freie Zeit?", "Mir geht es richtig schlecht, behandeln Sie mich jetzt!", "Ach, Pech."],
           ["Ich könnte Sie um sechs Uhr drannehmen. Passt Ihnen das?", "Ja, vielen Dank, ich werde da sein.", "Na gut, in Ordnung.", "So spät! Gibt es nichts früher?"],
           ["Perfekt. Darf ich Ihren vollständigen Namen haben?", "Natürlich, ich heiße Carlos Ruiz Soto.", "Carlos Ruiz, danke.", "Das habe ich Ihnen schon bei der Ankunft gesagt!"]],
      it: [["Oggi non ci sono più posti liberi.", "Capisco, c'è un altro orario disponibile?", "Mi sento molto male, mi visiti subito!", "Che sfortuna."],
           ["Potrei riceverla alle sei. Le va bene?", "Sì, la ringrazio molto, ci sarò.", "Va bene, d'accordo.", "Così tardi! Non c'è niente prima?"],
           ["Perfetto. Mi dà il suo nome completo?", "Certo, mi chiamo Carlos Ruiz Soto.", "Carlos Ruiz, grazie.", "Gliel'ho già detto quando sono arrivato!"]],
      pt: [["Hoje não há vagas livres.", "Compreendo, há outra hora disponível?", "Sinto-me muito mal, atenda-me já!", "Que azar."],
           ["Posso atendê-lo às seis. Serve-lhe?", "Sim, muito obrigado, lá estarei.", "Pronto, está bem.", "Tão tarde! Não há nada mais cedo?"],
           ["Perfeito. Pode dar-me o seu nome completo?", "Claro, chamo-me Carlos Ruiz Soto.", "Carlos Ruiz, obrigado.", "Já lhe disse quando cheguei!"]],
      ru: [["Сегодня свободных мест нет.", "Понимаю, есть ли другое свободное время?", "Мне очень плохо, примите меня сейчас же!", "Ох, не повезло."],
           ["Могу принять вас в шесть. Вам подходит?", "Да, большое спасибо, я приду.", "Ну ладно, хорошо.", "Так поздно! А раньше ничего нет?"],
           ["Отлично. Не назовёте ли своё полное имя?", "Конечно, меня зовут Карлос Руис Сото.", "Карлос Руис, спасибо.", "Я уже сказал, когда пришёл!"]],
      ro: [["Astăzi nu mai sunt locuri libere.", "Înțeleg, mai este o altă oră disponibilă?", "Mă simt foarte rău, primiți-mă imediat!", "Of, ghinion."],
           ["V-aș putea primi la ora șase. Vă convine?", "Da, vă mulțumesc mult, voi fi acolo.", "Bine, e în regulă.", "Așa târziu! Nu e nimic mai devreme?"],
           ["Perfect. Îmi spuneți numele complet?", "Desigur, mă numesc Carlos Ruiz Soto.", "Carlos Ruiz, mulțumesc.", "V-am spus deja când am venit!"]] });

  scene(13, "El jefe enojado", "Tu jefe", 15, 25, 80,
    "Entregaste un informe con un error y tu jefe está molesto. Responde con el tono adecuado.",
    "The angry boss", "Your boss", "You handed in a report with a mistake and your boss is annoyed. Reply in the right tone.",
    [["Este informe tiene un error grave.",
      ["formal", 30, "Tiene razón, lo corregiré de inmediato.", "Reconocer el error y ofrecer solución calma a un jefe.", "Admitting the mistake and offering a fix calms a boss."],
      ["urgente", -30, "¡No fue mi culpa!", "Echar la culpa a otros empeora el enojo.", "Blaming others makes the anger worse."],
      ["informal", 0, "Uy, se me pasó, perdón.", "Es sincero, pero muy informal para un jefe.", "It's honest, but too informal for a boss."]],
     ["¿Cuánto tiempo necesita para arreglarlo?",
      ["formal", 30, "Lo tendré listo en dos horas.", "Dar un plazo concreto muestra compromiso.", "Giving a specific deadline shows commitment."],
      ["informal", 10, "No mucho, ya lo arreglo.", "Es vago: no ofrece ningún plazo.", "It's vague: it offers no deadline."],
      ["urgente", -25, "¡Déjeme trabajar tranquilo!", "Pedir que lo dejen solo suena a falta de respeto.", "Asking to be left alone sounds disrespectful."]],
     ["Está bien. Que no se repita.",
      ["formal", 30, "Gracias por su paciencia, seré más cuidadoso.", "Agradecer y comprometerse cierra bien la conversación.", "Thanking and committing to improve ends the conversation well."],
      ["informal", 15, "Claro, no pasará de nuevo.", "Es correcto, aunque algo corto.", "It's correct, though a bit short."],
      ["urgente", -20, "¡Ya entendí, no lo repita!", "Responder con enojo deja mala impresión.", "Answering angrily leaves a bad impression."]]],
    { en: [["This report has a serious error.", "You're right, I'll fix it immediately.", "It wasn't my fault!", "Oops, I missed it, sorry."],
           ["How long do you need to fix it?", "I'll have it ready in two hours.", "Not long, I'll fix it now.", "Let me work in peace!"],
           ["All right. Don't let it happen again.", "Thank you for your patience, I'll be more careful.", "Sure, it won't happen again.", "I got it, no need to repeat it!"]],
      fr: [["Ce rapport contient une erreur grave.", "Vous avez raison, je le corrige immédiatement.", "Ce n'était pas ma faute !", "Oups, ça m'a échappé, pardon."],
           ["Combien de temps vous faut-il pour le corriger ?", "Je l'aurai terminé dans deux heures.", "Pas longtemps, je le corrige.", "Laissez-moi travailler tranquille !"],
           ["Très bien. Que cela ne se reproduise pas.", "Merci de votre patience, je ferai plus attention.", "Bien sûr, cela ne se reproduira pas.", "J'ai compris, pas la peine de me le répéter !"]],
      de: [["Dieser Bericht enthält einen schweren Fehler.", "Sie haben recht, ich korrigiere ihn sofort.", "Das war nicht meine Schuld!", "Huch, das habe ich übersehen, Entschuldigung."],
           ["Wie lange brauchen Sie, um ihn zu korrigieren?", "In zwei Stunden ist er fertig.", "Nicht lange, ich mache das schon.", "Lassen Sie mich in Ruhe arbeiten!"],
           ["In Ordnung. Das darf nicht wieder vorkommen.", "Danke für Ihre Geduld, ich werde sorgfältiger sein.", "Klar, das passiert nicht wieder.", "Ich habe verstanden, das müssen Sie mir nicht wiederholen!"]],
      it: [["Questo rapporto ha un errore grave.", "Ha ragione, lo correggo subito.", "Non è stata colpa mia!", "Ops, mi è sfuggito, scusi."],
           ["Quanto tempo le serve per sistemarlo?", "Sarà pronto tra due ore.", "Non molto, lo sistemo subito.", "Mi lasci lavorare in pace!"],
           ["Va bene. Che non si ripeta.", "La ringrazio per la pazienza, sarò più attento.", "Certo, non succederà di nuovo.", "Ho capito, non c'è bisogno di ripeterlo!"]],
      pt: [["Este relatório tem um erro grave.", "Tem razão, vou corrigi-lo de imediato.", "A culpa não foi minha!", "Ups, passou-me, desculpe."],
           ["Quanto tempo precisa para o corrigir?", "Ficará pronto dentro de duas horas.", "Não muito, já o resolvo.", "Deixe-me trabalhar em paz!"],
           ["Está bem. Que não se repita.", "Obrigado pela paciência, serei mais cuidadoso.", "Claro, não voltará a acontecer.", "Já percebi, não é preciso repetir!"]],
      ru: [["В этом отчёте серьёзная ошибка.", "Вы правы, я немедленно исправлю.", "Это не моя вина!", "Ой, не заметил, простите."],
           ["Сколько времени вам нужно, чтобы это исправить?", "Через два часа всё будет готово.", "Недолго, сейчас исправлю.", "Дайте мне спокойно поработать!"],
           ["Хорошо. Чтобы это не повторилось.", "Благодарю за терпение, буду внимательнее.", "Конечно, больше такого не будет.", "Я уже понял, не надо повторять!"]],
      ro: [["Acest raport are o greșeală gravă.", "Aveți dreptate, o corectez imediat.", "Nu a fost vina mea!", "Hopa, mi-a scăpat, scuze."],
           ["Cât timp vă trebuie să o remediați?", "O să fie gata în două ore.", "Nu mult, o rezolv acum.", "Lăsați-mă să lucrez în liniște!"],
           ["Bine. Să nu se mai repete.", "Vă mulțumesc pentru răbdare, voi fi mai atent.", "Sigur, nu se va mai întâmpla.", "Am înțeles deja, nu mai repetați!"]] });

  scene(26, "El amigo ofendido", "Tu amigo Luis", 260, 25, 80,
    "Olvidaste el cumpleaños de tu amigo Luis y está dolido. Recupera su confianza con el tono adecuado.",
    "The hurt friend", "Your friend Luis", "You forgot your friend Luis's birthday and he is hurt. Win back his trust in the right tone.",
    [["Me dolió que te olvidaras de mi cumpleaños.",
      ["informal", 35, "Tienes razón, lo siento mucho, Luis.", "Pedir perdón con calidez y por su nombre es lo más sincero.", "Apologising warmly and by name is the most sincere."],
      ["urgente", -30, "¡Ya te dije que lo siento!", "Impacientarte con alguien dolido lo aleja más.", "Getting impatient with someone who is hurt pushes them away."],
      ["formal", 0, "Le ofrezco mis disculpas.", "Es demasiado frío para un amigo cercano.", "It's too cold for a close friend."]],
     ["Esperaba al menos una llamada.",
      ["informal", 30, "Fue un error mío y quiero compensarte.", "Asumir la culpa y ofrecer algo concreto repara la confianza.", "Taking the blame and offering something concrete rebuilds trust."],
      ["urgente", -25, "¡Estaba muy ocupado, no es para tanto!", "Dar excusas minimiza su dolor.", "Making excuses downplays their pain."],
      ["formal", 5, "Reconozco mi descuido.", "Es correcto, pero suena distante.", "It's correct, but sounds distant."]],
     ["¿Y cómo piensas compensarme?",
      ["informal", 30, "Te invito a cenar el sábado.", "Un gesto concreto y cercano cierra bien la conversación.", "A concrete, friendly gesture ends the conversation well."],
      ["neutro", 15, "Podemos hacer algo juntos.", "Es una buena idea, pero poco concreta.", "It's a good idea, but not very concrete."],
      ["urgente", -20, "¡Elige tú el lugar y ya!", "Dar órdenes ahora rompe el buen ambiente.", "Giving orders now spoils the mood."]]],
    { en: [["It hurt that you forgot my birthday.", "You're right, I'm so sorry, Luis.", "I already said I'm sorry!", "I offer you my apologies."],
           ["I expected at least a phone call.", "It was my mistake and I want to make it up to you.", "I was very busy, it's no big deal!", "I acknowledge my oversight."],
           ["And how do you plan to make up for it?", "I'll take you to dinner on Saturday.", "We could do something together.", "Just pick the place and that's it!"]],
      fr: [["Ça m'a fait de la peine que tu oublies mon anniversaire.", "Tu as raison, je suis vraiment désolé, Luis.", "Je t'ai déjà dit que j'étais désolé !", "Je vous présente mes excuses."],
           ["J'attendais au moins un coup de fil.", "C'était mon erreur et je veux me rattraper.", "J'étais très occupé, ce n'est pas si grave !", "Je reconnais mon oubli."],
           ["Et comment comptes-tu te rattraper ?", "Je t'invite à dîner samedi.", "On pourrait faire quelque chose ensemble.", "Choisis l'endroit et c'est tout !"]],
      de: [["Es hat mich verletzt, dass du meinen Geburtstag vergessen hast.", "Du hast recht, es tut mir so leid, Luis.", "Ich habe doch schon gesagt, dass es mir leidtut!", "Ich bitte Sie um Entschuldigung."],
           ["Ich hatte wenigstens einen Anruf erwartet.", "Das war mein Fehler und ich möchte es wiedergutmachen.", "Ich war sehr beschäftigt, so schlimm ist das doch nicht!", "Ich räume mein Versäumnis ein."],
           ["Und wie willst du das wiedergutmachen?", "Ich lade dich am Samstag zum Abendessen ein.", "Wir könnten etwas zusammen unternehmen.", "Such dir einfach den Ort aus, fertig!"]],
      it: [["Mi è dispiaciuto che tu abbia dimenticato il mio compleanno.", "Hai ragione, mi dispiace tantissimo, Luis.", "Ti ho già detto che mi dispiace!", "Le porgo le mie scuse."],
           ["Mi aspettavo almeno una telefonata.", "È stato un mio errore e voglio farmi perdonare.", "Ero molto occupato, non è mica una tragedia!", "Riconosco la mia dimenticanza."],
           ["E come pensi di farti perdonare?", "Ti invito a cena sabato.", "Potremmo fare qualcosa insieme.", "Scegli tu il posto e basta!"]],
      pt: [["Magoou-me que te esquecesses do meu aniversário.", "Tens razão, lamento imenso, Luis.", "Já te disse que lamento!", "Apresento-lhe as minhas desculpas."],
           ["Esperava pelo menos um telefonema.", "Foi um erro meu e quero compensar-te.", "Estava muito ocupado, não é caso para tanto!", "Reconheço o meu descuido."],
           ["E como pensas compensar-me?", "Convido-te para jantar no sábado.", "Podemos fazer algo juntos.", "Escolhe tu o sítio e pronto!"]],
      ru: [["Мне было больно, что ты забыл мой день рождения.", "Ты прав, мне очень жаль, Луис.", "Я же уже сказал, что мне жаль!", "Приношу вам свои извинения."],
           ["Я ожидал хотя бы звонка.", "Это была моя ошибка, и я хочу загладить вину.", "Я был очень занят, ничего страшного!", "Признаю свою оплошность."],
           ["И как ты собираешься загладить вину?", "Приглашаю тебя на ужин в субботу.", "Можем сделать что-нибудь вместе.", "Выбери место, и всё!"]],
      ro: [["M-a durut că ai uitat ziua mea.", "Ai dreptate, îmi pare foarte rău, Luis.", "Ți-am spus deja că îmi pare rău!", "Vă cer scuze."],
           ["Mă așteptam măcar la un telefon.", "A fost greșeala mea și vreau să mă revanșez.", "Am fost foarte ocupat, nu e mare lucru!", "Îmi recunosc neatenția."],
           ["Și cum ai de gând să te revanșezi?", "Te invit la cină sâmbătă.", "Putem face ceva împreună.", "Alege tu locul și gata!"]] });
})();
