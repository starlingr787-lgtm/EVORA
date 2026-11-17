/* Ejemplos en contexto para las palabras de Principiante (unidades 0-9).
   Cada palabra lleva una frase corta donde se usa, en el idioma base y en el que se aprende.
   ex(unidad, texto): una línea por palabra, en el mismo orden que la lista de palabras de la unidad,
   con los campos es|en|fr|de|it|pt|ru|ro. Se guardan en window.EXAMPLES[idioma][unidad][i]. */
(() => {
  const LANGS = ["es", "en", "fr", "de", "it", "pt", "ru", "ro"];
  window.EXAMPLES = window.EXAMPLES || {};
  LANGS.forEach(l => { window.EXAMPLES[l] = window.EXAMPLES[l] || {}; });
  const ex = (unit, text) => {
    const rows = text.trim().split("\n").map(r => r.split("|"));
    LANGS.forEach((l, k) => { window.EXAMPLES[l][unit] = rows.map(r => r[k]); });
  };

  /* 0 · Primeros saludos */
  ex(0, `
¡Hola, Ana! ¿Cómo estás?|Hi, Ana! How are you?|Salut, Ana ! Ça va ?|Hallo, Ana! Wie geht's?|Ciao, Ana! Come stai?|Olá, Ana! Como estás?|Привет, Ана! Как дела?|Salut, Ana! Ce mai faci?
Adiós, nos vemos el lunes.|Goodbye, see you on Monday.|Au revoir, à lundi.|Auf Wiedersehen, bis Montag.|Arrivederci, ci vediamo lunedì.|Adeus, até segunda-feira.|До свидания, увидимся в понедельник.|La revedere, ne vedem luni.
Buenos días, señora López.|Good morning, Mrs López.|Bonjour, madame López.|Guten Morgen, Frau López.|Buongiorno, signora López.|Bom dia, dona López.|Доброе утро, госпожа Лопес.|Bună dimineața, doamna López.
Buenas tardes, ¿en qué puedo ayudarle?|Good afternoon, how can I help you?|Bon après-midi, que puis-je faire pour vous ?|Guten Tag, wie kann ich Ihnen helfen?|Buon pomeriggio, come posso aiutarla?|Boa tarde, em que posso ajudá-lo?|Добрый день, чем могу вам помочь?|Bună ziua, cu ce vă pot ajuta?
Buenas noches, hasta mañana.|Good night, see you tomorrow.|Bonne nuit, à demain.|Gute Nacht, bis morgen.|Buonanotte, a domani.|Boa noite, até amanhã.|Спокойной ночи, до завтра.|Noapte bună, pe mâine.
Un café, por favor.|A coffee, please.|Un café, s'il vous plaît.|Einen Kaffee, bitte.|Un caffè, per favore.|Um café, por favor.|Один кофе, пожалуйста.|O cafea, te rog.
Gracias por tu ayuda.|Thank you for your help.|Merci pour ton aide.|Danke für deine Hilfe.|Grazie per il tuo aiuto.|Obrigado pela tua ajuda.|Спасибо за твою помощь.|Mulțumesc pentru ajutor.
—Gracias. —De nada.|"Thank you." "You're welcome."|— Merci. — De rien.|„Danke.“ – „Gern geschehen.“|— Grazie. — Prego.|— Obrigado. — De nada.|— Спасибо. — Не за что.|— Mulțumesc. — Cu plăcere.
Perdón, me equivoqué.|Sorry, I made a mistake.|Pardon, je me suis trompé.|Verzeihung, ich habe mich geirrt.|Scusa, ho sbagliato.|Desculpa, enganei-me.|Прости, я ошибся.|Pardon, m-am înșelat.
Disculpe, ¿dónde está el baño?|Excuse me, where is the bathroom?|Excusez-moi, où sont les toilettes ?|Entschuldigen Sie, wo ist die Toilette?|Scusi, dov'è il bagno?|Desculpe, onde fica a casa de banho?|Извините, где туалет?|Scuzați-mă, unde este toaleta?
Con permiso, voy a pasar.|Pardon me, I need to get by.|Vous permettez ? Je voudrais passer.|Darf ich mal vorbei?|Con permesso, devo passare.|Com licença, vou passar.|Разрешите, я пройду.|Permiteți, vreau să trec.
¡Bienvenido a mi casa!|Welcome to my home!|Bienvenue chez moi !|Willkommen in meinem Zuhause!|Benvenuto a casa mia!|Bem-vindo à minha casa!|Добро пожаловать ко мне домой!|Bine ai venit la mine acasă!
Buenos días, señor García.|Good morning, Mr García.|Bonjour, monsieur García.|Guten Morgen, Herr García.|Buongiorno, signor García.|Bom dia, senhor García.|Доброе утро, господин Гарсия.|Bună dimineața, domnule García.
Buenas tardes, señora Ruiz.|Good afternoon, Mrs Ruiz.|Bon après-midi, madame Ruiz.|Guten Tag, Frau Ruiz.|Buon pomeriggio, signora Ruiz.|Boa tarde, senhora Ruiz.|Добрый день, госпожа Руис.|Bună ziua, doamna Ruiz.
Estoy bien, gracias.|I'm fine, thank you.|Je vais bien, merci.|Mir geht es gut, danke.|Sto bene, grazie.|Estou bem, obrigado.|У меня всё хорошо, спасибо.|Mă simt bine, mulțumesc.
Hoy me siento mal.|I feel bad today.|Aujourd'hui, je me sens mal.|Heute fühle ich mich schlecht.|Oggi mi sento male.|Hoje sinto-me mal.|Сегодня мне плохо.|Azi mă simt rău.
¡Felicidades por tu trabajo nuevo!|Congratulations on your new job!|Félicitations pour ton nouveau travail !|Herzlichen Glückwunsch zu deinem neuen Job!|Congratulazioni per il tuo nuovo lavoro!|Parabéns pelo teu novo trabalho!|Поздравляю с новой работой!|Felicitări pentru noul tău loc de muncă!
Tienes un examen mañana: ¡buena suerte!|You have an exam tomorrow: good luck!|Tu as un examen demain : bonne chance !|Du hast morgen eine Prüfung: viel Glück!|Domani hai un esame: buona fortuna!|Tens um exame amanhã: boa sorte!|У тебя завтра экзамен: удачи!|Mâine ai un examen: baftă!
Me voy ya. ¡Hasta pronto!|I'm leaving now. See you soon!|Je m'en vais. À bientôt !|Ich gehe jetzt. Bis bald!|Vado via. A presto!|Vou-me embora. Até breve!|Я пошёл. До скорого!|Plec acum. Pe curând!
¡Salud! Por nuestra amistad.|Cheers! To our friendship.|Santé ! À notre amitié.|Prost! Auf unsere Freundschaft.|Salute! Alla nostra amicizia.|Saúde! À nossa amizade.|За здоровье! За нашу дружбу.|Noroc! Pentru prietenia noastră.
—Me llamo Pablo. —Encantado.|"My name is Pablo." "Pleased to meet you."|— Je m'appelle Pablo. — Enchanté.|„Ich heiße Pablo.“ – „Angenehm.“|— Mi chiamo Pablo. — Piacere.|— Chamo-me Pablo. — Encantado.|— Меня зовут Пабло. — Очень приятно.|— Mă numesc Pablo. — Încântat.
—Que tengas un buen día. —Igualmente.|"Have a nice day." "Likewise."|— Bonne journée. — Pareillement.|„Schönen Tag noch.“ – „Gleichfalls.“|— Buona giornata. — Altrettanto.|— Tem um bom dia. — Igualmente.|— Хорошего дня. — Взаимно.|— O zi bună. — Asemenea.
Ya me voy. ¡Cuídate!|I'm off now. Take care!|Je m'en vais. Prends soin de toi !|Ich gehe jetzt. Pass auf dich auf!|Vado via. Abbi cura di te!|Já vou. Cuida-te!|Я пошёл. Береги себя!|Plec acum. Ai grijă de tine!
Mañana sales de viaje: ¡buen viaje!|You're leaving tomorrow: have a good trip!|Tu pars demain : bon voyage !|Du fährst morgen ab: gute Reise!|Domani parti: buon viaggio!|Amanhã partes: boa viagem!|Завтра ты уезжаешь: счастливого пути!|Mâine pleci: drum bun!
¡Feliz cumpleaños, Marta!|Happy birthday, Marta!|Joyeux anniversaire, Marta !|Alles Gute zum Geburtstag, Marta!|Buon compleanno, Marta!|Feliz aniversário, Marta!|С днём рождения, Марта!|La mulți ani, Marta!
Lo siento, llego tarde.|I'm sorry, I'm late.|Je suis désolé, je suis en retard.|Es tut mir leid, ich bin spät dran.|Mi dispiace, sono in ritardo.|Lamento, estou atrasado.|Мне жаль, я опаздываю.|Îmi pare rău, întârzii.
—¿Me ayudas? —Claro.|"Can you help me?" "Of course."|— Tu m'aides ? — Bien sûr.|„Hilfst du mir?“ – „Natürlich.“|— Mi aiuti? — Certo.|— Ajudas-me? — Claro.|— Ты мне поможешь? — Конечно.|— Mă ajuți? — Desigur.
Hola, Luis. ¿Qué tal?|Hi, Luis. How's it going?|Salut, Luis. Ça va ?|Hallo, Luis. Wie läuft's?|Ciao, Luis. Come va?|Olá, Luis. Tudo bem?|Привет, Луис. Как дела?|Salut, Luis. Cum merge?
Es tarde. Hasta mañana.|It's late. See you tomorrow.|Il est tard. À demain.|Es ist spät. Bis morgen.|È tardi. A domani.|É tarde. Até amanhã.|Уже поздно. До завтра.|Este târziu. Pe mâine.
—Perdón por la demora. —No hay problema.|"Sorry for the delay." "No problem."|— Pardon pour le retard. — Pas de problème.|„Entschuldigung für die Verspätung.“ – „Kein Problem.“|— Scusa per il ritardo. — Nessun problema.|— Desculpa a demora. — Sem problema.|— Простите за задержку. — Без проблем.|— Scuze pentru întârziere. — Nicio problemă.
Un momento, ya vuelvo.|Just a moment, I'll be right back.|Un instant, je reviens tout de suite.|Einen Moment, ich bin gleich wieder da.|Un attimo, torno subito.|Um momento, já volto.|Одну минуту, я сейчас вернусь.|O clipă, mă întorc imediat.
La cena está lista. ¡Buen provecho!|Dinner is ready. Enjoy your meal!|Le dîner est prêt. Bon appétit !|Das Essen ist fertig. Guten Appetit!|La cena è pronta. Buon appetito!|O jantar está pronto. Bom apetite!|Ужин готов. Приятного аппетита!|Cina este gata. Poftă bună!
Es el 25 de diciembre: ¡Feliz Navidad!|It's December 25th: Merry Christmas!|C'est le 25 décembre : Joyeux Noël !|Es ist der 25. Dezember: Frohe Weihnachten!|È il 25 dicembre: Buon Natale!|É 25 de dezembro: Feliz Natal!|Сегодня 25 декабря: С Рождеством!|Este 25 decembrie: Crăciun fericit!
—¿Puedes venir? —Con gusto.|"Can you come?" "My pleasure."|— Tu peux venir ? — Avec plaisir.|„Kannst du kommen?“ – „Gern.“|— Puoi venire? — Volentieri.|— Podes vir? — Com prazer.|— Ты можешь прийти? — С удовольствием.|— Poți veni? — Cu drag.
`);
})();
