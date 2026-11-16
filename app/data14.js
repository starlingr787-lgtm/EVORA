/* Más situaciones "Rompecabezas vivo" (elegir el tono: formal o informal), unidades 2-16.
   Dos situaciones por unidad. Escritas a mano por Claude; pendientes de revisión por hablantes nativos.
   Formato de cada fila de idiomas: en|fr|de|it|pt|ru|ro (primero la frase formal, luego la informal). */
(() => {
  const LG = ["en", "fr", "de", "it", "pt", "ru", "ro"];
  window.EN_EXTRA = window.EN_EXTRA || {};
  window.addLive = (u, id, idea, sitF, sitI, enIdea, enSitF, enSitI, esF, esI, rowF, rowI) => {
    window.EN_EXTRA[idea] = enIdea; window.EN_EXTRA[sitF] = enSitF; window.EN_EXTRA[sitI] = enSitI;
    if (!window.LIVE) return;
    const f = rowF.split("|"), i = rowI.split("|"), t = {};
    LG.forEach((l, k) => { t[l] = [f[k], i[k]]; });
    window.LIVE.push({ unit: u, id, idea, es: [esF, esI], sit: [sitF, sitI], t });
  };
  const P = window.addLive;

  /* 1 Presentaciones */
  P(1, "A", "Presentarte a alguien", "Te presentas a un cliente nuevo.", "Te presentas a un compañero de clase.",
    "Introducing yourself", "You introduce yourself to a new client.", "You introduce yourself to a classmate.",
    "Mucho gusto, me llamo Ana Pérez.", "¡Hola! Soy Ana.",
    "Pleased to meet you, my name is Ana Pérez.|Enchantée, je m'appelle Ana Pérez.|Freut mich, mein Name ist Ana Pérez.|Piacere, mi chiamo Ana Pérez.|Muito prazer, chamo-me Ana Pérez.|Очень приятно, меня зовут Ана Перес.|Îmi pare bine, mă numesc Ana Pérez.",
    "Hi! I'm Ana.|Salut ! Moi, c'est Ana.|Hallo! Ich bin Ana.|Ciao! Sono Ana.|Olá! Sou a Ana.|Привет! Я Ана.|Salut! Eu sunt Ana.");
  P(1, "B", "Preguntar de dónde es", "Hablas con una señora que conoces en un evento.", "Hablas con un chico nuevo de tu clase.",
    "Asking where someone is from", "You talk to a lady you meet at an event.", "You talk to a new boy in your class.",
    "Disculpe, ¿de dónde es usted?", "¿De dónde eres?",
    "Excuse me, where are you from?|Excusez-moi, d'où venez-vous ?|Entschuldigung, woher kommen Sie?|Mi scusi, di dov'è Lei?|Desculpe, de onde é a senhora?|Извините, откуда вы?|Scuzați-mă, de unde sunteți?",
    "Where are you from?|Tu viens d'où ?|Woher kommst du?|Di dove sei?|De onde és?|Ты откуда?|De unde ești?");

  /* 2 Números */
  P(2, "A", "Preguntar un precio", "Preguntas en una joyería elegante.", "Preguntas en el mercado de tu barrio.",
    "Asking a price", "You ask in an elegant jeweller's.", "You ask at your neighbourhood market.",
    "Disculpe, ¿cuánto cuesta este reloj?", "¿Cuánto cuesta esto?",
    "Excuse me, how much does this watch cost?|Excusez-moi, combien coûte cette montre ?|Entschuldigung, wie viel kostet diese Uhr?|Mi scusi, quanto costa questo orologio?|Desculpe, quanto custa este relógio?|Извините, сколько стоят эти часы?|Scuzați-mă, cât costă acest ceas?",
    "How much is this?|C'est combien ?|Was kostet das?|Quanto costa?|Quanto custa isto?|Сколько это стоит?|Cât costă?");
  P(2, "B", "Pedir un número de teléfono", "Se lo pides a una doctora.", "Se lo pides a una amiga.",
    "Asking for a phone number", "You ask a doctor.", "You ask a friend.",
    "¿Me puede dar su número de teléfono, por favor?", "¿Me das tu número?",
    "Could you give me your phone number, please?|Pourriez-vous me donner votre numéro de téléphone, s'il vous plaît ?|Könnten Sie mir bitte Ihre Telefonnummer geben?|Potrebbe darmi il Suo numero di telefono, per favore?|Pode dar-me o seu número de telefone, por favor?|Не могли бы вы дать мне свой номер телефона, пожалуйста?|Îmi puteți da numărul dumneavoastră de telefon, vă rog?",
    "Can you give me your number?|Tu me donnes ton numéro ?|Gibst du mir deine Nummer?|Mi dai il tuo numero?|Dás-me o teu número?|Дашь мне свой номер?|Îmi dai numărul tău?");

  /* 3 Familia */
  P(3, "A", "Preguntar por la familia", "Hablas con tu jefe.", "Hablas con tu mejor amiga.",
    "Asking about someone's family", "You talk to your boss.", "You talk to your best friend.",
    "¿Cómo está su familia?", "¿Cómo está tu familia?",
    "How is your family?|Comment va votre famille ?|Wie geht es Ihrer Familie?|Come sta la Sua famiglia?|Como está a sua família?|Как поживает ваша семья?|Ce mai face familia dumneavoastră?",
    "How's your family doing?|Comment va ta famille ?|Wie geht's deiner Familie?|Come sta la tua famiglia?|Como está a tua família?|Как поживает твоя семья?|Ce mai face familia ta?");
  P(3, "B", "Presentar a un familiar", "Presentas a tu padre a un cliente.", "Presentas a tu hermana a un amigo.",
    "Introducing a relative", "You introduce your father to a client.", "You introduce your sister to a friend.",
    "Le presento a mi padre, el señor López.", "Mira, ella es mi hermana.",
    "Let me introduce my father, Mr López.|Je vous présente mon père, monsieur López.|Darf ich Ihnen meinen Vater vorstellen, Herrn López.|Le presento mio padre, il signor López.|Apresento-lhe o meu pai, o senhor López.|Позвольте представить вам моего отца, господина Лопеса.|Vă prezint pe tatăl meu, domnul López.",
    "Look, this is my sister.|Regarde, c'est ma sœur.|Schau, das ist meine Schwester.|Guarda, lei è mia sorella.|Olha, esta é a minha irmã.|Смотри, это моя сестра.|Uite, ea este sora mea.");

  /* 4 Comida y bebida */
  P(4, "A", "Ofrecer comida", "Atiendes a los padres de tu pareja.", "Atiendes a tus amigos en casa.",
    "Offering food", "You host your partner's parents.", "You host your friends at home.",
    "¿Le gustaría probar un poco de sopa?", "¿Quieres sopa?",
    "Would you like to try some soup?|Aimeriez-vous goûter un peu de soupe ?|Möchten Sie etwas Suppe probieren?|Gradirebbe assaggiare un po' di zuppa?|Gostaria de provar um pouco de sopa?|Не хотите ли попробовать немного супа?|Ați dori să gustați puțină supă?",
    "Want some soup?|Tu veux de la soupe ?|Willst du Suppe?|Vuoi della zuppa?|Queres sopa?|Хочешь супа?|Vrei supă?");
  P(4, "B", "Rechazar un plato", "Rechazas con cortesía en una cena formal.", "Rechazas con tus amigos.",
    "Turning down a dish", "You politely decline at a formal dinner.", "You decline with your friends.",
    "Gracias, pero no puedo comer carne.", "No, gracias, paso.",
    "Thank you, but I can't eat meat.|Merci, mais je ne peux pas manger de viande.|Danke, aber ich kann kein Fleisch essen.|Grazie, ma non posso mangiare carne.|Obrigado, mas não posso comer carne.|Спасибо, но я не могу есть мясо.|Mulțumesc, dar nu pot mânca carne.",
    "No thanks, I'll pass.|Non merci, sans moi.|Nein danke, ich verzichte.|No grazie, passo.|Não, obrigado, passo.|Нет, спасибо, я пас.|Nu, mulțumesc, sar peste.");

  /* 6 Viajes */
  P(6, "A", "Preguntar por el tren", "Preguntas al empleado de la estación.", "Preguntas a un viajero joven.",
    "Asking about the train", "You ask the station clerk.", "You ask a young traveller.",
    "Disculpe, ¿a qué hora sale el tren a Madrid?", "Oye, ¿a qué hora sale el tren?",
    "Excuse me, what time does the train to Madrid leave?|Excusez-moi, à quelle heure part le train pour Madrid ?|Entschuldigung, wann fährt der Zug nach Madrid ab?|Mi scusi, a che ora parte il treno per Madrid?|Desculpe, a que horas parte o comboio para Madrid?|Извините, во сколько отправляется поезд в Мадрид?|Scuzați-mă, la ce oră pleacă trenul spre Madrid?",
    "Hey, what time does the train go?|Dis, à quelle heure part le train ?|Hey, wann fährt der Zug?|Ehi, a che ora parte il treno?|Ei, a que horas parte o comboio?|Слушай, во сколько поезд?|Hei, la ce oră pleacă trenul?");
  P(6, "B", "Pedir ayuda con la maleta", "Se lo pides a un señor mayor.", "Se lo pides a tu hermano.",
    "Asking for help with a suitcase", "You ask an elderly gentleman.", "You ask your brother.",
    "¿Sería tan amable de ayudarme con la maleta?", "¿Me ayudas con la maleta?",
    "Would you be so kind as to help me with my suitcase?|Auriez-vous la gentillesse de m'aider avec ma valise ?|Wären Sie so freundlich, mir mit dem Koffer zu helfen?|Sarebbe così gentile da aiutarmi con la valigia?|Teria a amabilidade de me ajudar com a mala?|Не будете ли вы так любезны помочь мне с чемоданом?|Ați fi atât de amabil să mă ajutați cu valiza?",
    "Can you help me with my suitcase?|Tu m'aides avec ma valise ?|Hilfst du mir mit dem Koffer?|Mi aiuti con la valigia?|Ajudas-me com a mala?|Поможешь мне с чемоданом?|Mă ajuți cu valiza?");

  /* 7 En la ciudad */
  P(7, "A", "Pedir direcciones", "Preguntas a un policía.", "Preguntas a un chico en la calle.",
    "Asking for directions", "You ask a police officer.", "You ask a young man in the street.",
    "Disculpe, ¿podría decirme cómo llegar al museo?", "Oye, ¿cómo llego al museo?",
    "Excuse me, could you tell me how to get to the museum?|Excusez-moi, pourriez-vous m'indiquer comment aller au musée ?|Entschuldigung, könnten Sie mir sagen, wie ich zum Museum komme?|Mi scusi, potrebbe dirmi come arrivare al museo?|Desculpe, poderia dizer-me como chegar ao museu?|Извините, не подскажете, как пройти к музею?|Scuzați-mă, mi-ați putea spune cum ajung la muzeu?",
    "Hey, how do I get to the museum?|Dis, comment je vais au musée ?|Hey, wie komme ich zum Museum?|Ehi, come arrivo al museo?|Ei, como chego ao museu?|Слушай, как пройти к музею?|Hei, cum ajung la muzeu?");
  P(7, "B", "Preguntar por el metro", "Preguntas a una señora mayor.", "Preguntas a un amigo.",
    "Asking about the underground", "You ask an elderly lady.", "You ask a friend.",
    "Perdone, ¿dónde está la estación de metro más cercana?", "¿Dónde queda el metro?",
    "Pardon me, where is the nearest underground station?|Pardon, où se trouve la station de métro la plus proche ?|Verzeihung, wo ist die nächste U-Bahn-Station?|Scusi, dov'è la stazione della metropolitana più vicina?|Perdoe, onde fica a estação de metro mais próxima?|Простите, где ближайшая станция метро?|Iertați-mă, unde este cea mai apropiată stație de metrou?",
    "Where's the underground?|Il est où, le métro ?|Wo ist die U-Bahn?|Dov'è la metro?|Onde fica o metro?|Где тут метро?|Unde e metroul?");

  /* 8 De compras */
  P(8, "A", "Pedir un descuento", "Hablas con el gerente de una tienda.", "Hablas con el vendedor del mercado.",
    "Asking for a discount", "You talk to a shop manager.", "You talk to the market seller.",
    "¿Sería posible obtener un descuento?", "¿Me haces un descuento?",
    "Would it be possible to get a discount?|Serait-il possible d'obtenir une réduction ?|Wäre es möglich, einen Rabatt zu bekommen?|Sarebbe possibile avere uno sconto?|Seria possível obter um desconto?|Можно ли получить скидку?|Ar fi posibil să primesc o reducere?",
    "Can you give me a discount?|Tu me fais une réduction ?|Gibst du mir einen Rabatt?|Mi fai uno sconto?|Fazes-me um desconto?|Сделаешь мне скидку?|Îmi faci o reducere?");
  P(8, "B", "Pedir otra talla", "Hablas con una vendedora que no conoces.", "Hablas con tu amiga que trabaja en la tienda.",
    "Asking for another size", "You talk to a shop assistant you don't know.", "You talk to your friend who works in the shop.",
    "Disculpe, ¿tiene esta camisa en una talla más grande?", "¿Tienes esta camisa más grande?",
    "Excuse me, do you have this shirt in a larger size?|Excusez-moi, avez-vous cette chemise en plus grande taille ?|Entschuldigung, haben Sie dieses Hemd in einer größeren Größe?|Mi scusi, ha questa camicia in una taglia più grande?|Desculpe, tem esta camisa num tamanho maior?|Извините, есть ли эта рубашка большего размера?|Scuzați-mă, aveți această cămașă într-o mărime mai mare?",
    "Got this shirt in a bigger one?|Tu as cette chemise en plus grand ?|Hast du dieses Hemd eine Nummer größer?|Hai questa camicia più grande?|Tens esta camisa maior?|У тебя есть эта рубашка побольше?|Ai cămașa asta mai mare?");

  /* 9 Días y horas */
  P(9, "A", "Preguntar la hora", "Preguntas a un desconocido.", "Preguntas a tu compañero.",
    "Asking the time", "You ask a stranger.", "You ask your classmate.",
    "Disculpe, ¿podría decirme la hora?", "¿Qué hora es?",
    "Excuse me, could you tell me the time?|Excusez-moi, pourriez-vous me dire l'heure ?|Entschuldigung, könnten Sie mir die Uhrzeit sagen?|Mi scusi, potrebbe dirmi l'ora?|Desculpe, poderia dizer-me as horas?|Извините, не подскажете, который час?|Scuzați-mă, mi-ați putea spune cât este ceasul?",
    "What time is it?|Il est quelle heure ?|Wie spät ist es?|Che ore sono?|Que horas são?|Который час?|Cât e ceasul?");
  P(9, "B", "Proponer una cita", "Propones una reunión a una cliente.", "Propones un plan a un amigo.",
    "Suggesting a meeting time", "You suggest a meeting to a client.", "You suggest a plan to a friend.",
    "¿Le parece bien reunirnos el martes a las diez?", "¿Nos vemos el martes a las diez?",
    "Would Tuesday at ten suit you?|Cela vous convient-il de nous retrouver mardi à dix heures ?|Würde es Ihnen passen, wenn wir uns Dienstag um zehn Uhr treffen?|Le va bene incontrarci martedì alle dieci?|Parece-lhe bem encontrarmo-nos terça-feira às dez?|Вам подходит встреча во вторник в десять?|Vi se potrivește să ne întâlnim marți la ora zece?",
    "See you Tuesday at ten?|On se voit mardi à dix heures ?|Treffen wir uns Dienstag um zehn?|Ci vediamo martedì alle dieci?|Vemo-nos terça às dez?|Увидимся во вторник в десять?|Ne vedem marți la zece?");

  /* 10 Rutina diaria */
  P(10, "A", "Preguntar por el día", "Hablas con tu vecina mayor.", "Hablas con tu compañero de casa.",
    "Asking about someone's day", "You talk to your elderly neighbour.", "You talk to your housemate.",
    "¿Cómo le fue hoy?", "¿Cómo te fue hoy?",
    "How was your day?|Comment s'est passée votre journée ?|Wie war Ihr Tag?|Com'è andata la Sua giornata?|Como correu o seu dia?|Как прошёл ваш день?|Cum a fost ziua dumneavoastră?",
    "How'd your day go?|Ta journée s'est bien passée ?|Wie war dein Tag?|Com'è andata la tua giornata?|Como correu o teu dia?|Как прошёл твой день?|Cum a fost ziua ta?");
  P(10, "B", "Pedir que se apure", "Hablas con una clienta que tarda.", "Hablas con tu hermano que tarda.",
    "Asking someone to hurry", "You talk to a customer who is taking long.", "You talk to your brother who is taking long.",
    "Disculpe, ¿podría darse prisa, por favor?", "¡Date prisa, que llegamos tarde!",
    "Excuse me, could you hurry up, please?|Excusez-moi, pourriez-vous vous dépêcher, s'il vous plaît ?|Entschuldigung, könnten Sie sich bitte beeilen?|Mi scusi, potrebbe sbrigarsi, per favore?|Desculpe, poderia despachar-se, por favor?|Извините, не могли бы вы поторопиться?|Scuzați-mă, v-ați putea grăbi, vă rog?",
    "Hurry up, we're going to be late!|Dépêche-toi, on va être en retard !|Beeil dich, wir kommen zu spät!|Sbrigati, faremo tardi!|Despacha-te, que vamos chegar tarde!|Давай быстрее, мы опоздаем!|Grăbește-te, că întârziem!");

  /* 11 En casa */
  P(11, "A", "Pedir la llave", "Hablas con la recepcionista del hotel.", "Hablas con tu compañero de casa.",
    "Asking for the key", "You talk to the hotel receptionist.", "You talk to your housemate.",
    "¿Podría darme la llave de mi habitación, por favor?", "¿Me pasas la llave?",
    "Could you give me my room key, please?|Pourriez-vous me donner la clé de ma chambre, s'il vous plaît ?|Könnten Sie mir bitte meinen Zimmerschlüssel geben?|Potrebbe darmi la chiave della mia camera, per favore?|Poderia dar-me a chave do meu quarto, por favor?|Не могли бы вы дать мне ключ от моего номера?|Mi-ați putea da cheia camerei mele, vă rog?",
    "Pass me the key?|Tu me passes la clé ?|Gibst du mir den Schlüssel?|Mi passi la chiave?|Passas-me a chave?|Передашь мне ключ?|Îmi dai cheia?");
  P(11, "B", "Pedir que cierren la ventana", "Se lo pides a un huésped.", "Se lo pides a tu hermana.",
    "Asking someone to close the window", "You ask a guest.", "You ask your sister.",
    "¿Le importaría cerrar la ventana, por favor?", "Cierra la ventana, ¿sí?",
    "Would you mind closing the window, please?|Cela vous dérangerait-il de fermer la fenêtre, s'il vous plaît ?|Würde es Ihnen etwas ausmachen, das Fenster zu schließen?|Le dispiacerebbe chiudere la finestra, per favore?|Importar-se-ia de fechar a janela, por favor?|Вы не возражаете, если мы закроем окно?|V-ar deranja să închideți fereastra, vă rog?",
    "Close the window, will you?|Ferme la fenêtre, tu veux ?|Mach das Fenster zu, ja?|Chiudi la finestra, va?|Fecha a janela, sim?|Закрой окно, ладно?|Închide fereastra, bine?");

  /* 12 Salud */
  P(12, "A", "Decir que te duele algo", "Hablas con el médico.", "Hablas con tu mamá.",
    "Saying something hurts", "You talk to the doctor.", "You talk to your mum.",
    "Doctor, me duele mucho la cabeza desde ayer.", "Mamá, me duele la cabeza.",
    "Doctor, I've had a bad headache since yesterday.|Docteur, j'ai très mal à la tête depuis hier.|Herr Doktor, ich habe seit gestern starke Kopfschmerzen.|Dottore, ho molto mal di testa da ieri.|Doutor, dói-me muito a cabeça desde ontem.|Доктор, у меня сильно болит голова со вчерашнего дня.|Domnule doctor, mă doare foarte tare capul de ieri.",
    "Mum, my head hurts.|Maman, j'ai mal à la tête.|Mama, mir tut der Kopf weh.|Mamma, mi fa male la testa.|Mãe, dói-me a cabeça.|Мам, у меня болит голова.|Mamă, mă doare capul.");
  P(12, "B", "Pedir una cita médica", "Llamas a la clínica.", "Hablas con tu amigo que es enfermero.",
    "Asking for a medical appointment", "You phone the clinic.", "You talk to your friend who is a nurse.",
    "Buenos días, quisiera pedir una cita con el doctor.", "¡Hola! ¿Me consigues una cita con el doctor?",
    "Good morning, I would like to make an appointment with the doctor.|Bonjour, je voudrais prendre rendez-vous avec le docteur.|Guten Morgen, ich möchte einen Termin beim Arzt vereinbaren.|Buongiorno, vorrei prendere un appuntamento con il dottore.|Bom dia, queria marcar uma consulta com o doutor.|Доброе утро, я хотел бы записаться на приём к врачу.|Bună dimineața, aș dori să fac o programare la medic.",
    "Hi! Can you get me an appointment with the doctor?|Salut ! Tu peux me décrocher un rendez-vous avec le docteur ?|Hallo! Kannst du mir einen Termin beim Arzt besorgen?|Ciao! Mi trovi un appuntamento con il dottore?|Olá! Consegues-me uma consulta com o doutor?|Привет! Можешь записать меня к врачу?|Salut! Îmi faci o programare la medic?");

  /* 13 Trabajo */
  P(13, "A", "Pedir una reunión", "Escribes a tu jefa.", "Escribes a un colega.",
    "Asking for a meeting", "You write to your boss.", "You write to a colleague.",
    "¿Podríamos programar una reunión esta semana?", "¿Nos juntamos esta semana?",
    "Could we schedule a meeting this week?|Pourrions-nous fixer une réunion cette semaine ?|Könnten wir diese Woche einen Termin für eine Besprechung vereinbaren?|Potremmo fissare una riunione questa settimana?|Poderíamos marcar uma reunião esta semana?|Не могли бы мы назначить встречу на этой неделе?|Am putea programa o ședință săptămâna aceasta?",
    "Shall we get together this week?|On se voit cette semaine ?|Treffen wir uns diese Woche?|Ci vediamo questa settimana?|Juntamo-nos esta semana?|Давай встретимся на этой неделе?|Ne vedem săptămâna asta?");
  P(13, "B", "Pedir ayuda a un colega", "Hablas con una colega de otro departamento.", "Hablas con tu colega de al lado.",
    "Asking a colleague for help", "You talk to a colleague from another department.", "You talk to the colleague next to you.",
    "Disculpe, ¿podría ayudarme con este informe?", "¿Me echas una mano con esto?",
    "Excuse me, could you help me with this report?|Excusez-moi, pourriez-vous m'aider avec ce rapport ?|Entschuldigung, könnten Sie mir bei diesem Bericht helfen?|Mi scusi, potrebbe aiutarmi con questo rapporto?|Desculpe, poderia ajudar-me com este relatório?|Извините, не могли бы вы помочь мне с этим отчётом?|Scuzați-mă, mă puteți ajuta cu acest raport?",
    "Can you give me a hand with this?|Tu peux me donner un coup de main ?|Kannst du mir kurz helfen?|Mi dai una mano con questo?|Dás-me uma mãozinha com isto?|Поможешь мне с этим?|Mă ajuți puțin cu asta?");

  /* 14 El tiempo */
  P(14, "A", "Comentar el clima", "Hablas con un cliente.", "Hablas con un amigo.",
    "Talking about the weather", "You talk to a client.", "You talk to a friend.",
    "Hoy hace un día muy agradable, ¿verdad?", "¡Qué buen día hace!",
    "It's a very pleasant day today, isn't it?|Il fait une journée très agréable aujourd'hui, n'est-ce pas ?|Heute ist ein sehr angenehmer Tag, nicht wahr?|Oggi è una giornata molto piacevole, vero?|Hoje está um dia muito agradável, não está?|Сегодня очень приятный день, не правда ли?|Azi e o zi foarte plăcută, nu-i așa?",
    "What a lovely day!|Quelle belle journée !|Was für ein schöner Tag!|Che bella giornata!|Que dia lindo!|Какой хороший день!|Ce zi frumoasă!");
  P(14, "B", "Proponer ir a la playa", "Propones el plan a tu jefa.", "Propones el plan a tus amigos.",
    "Suggesting a trip to the beach", "You suggest the plan to your boss.", "You suggest the plan to your friends.",
    "¿Le gustaría ir a la playa este domingo?", "¿Vamos a la playa el domingo?",
    "Would you like to go to the beach this Sunday?|Aimeriez-vous aller à la plage ce dimanche ?|Möchten Sie diesen Sonntag an den Strand gehen?|Le piacerebbe andare in spiaggia questa domenica?|Gostaria de ir à praia este domingo?|Не хотели бы вы поехать на пляж в это воскресенье?|Ați dori să mergeți la plajă duminica aceasta?",
    "Shall we go to the beach on Sunday?|On va à la plage dimanche ?|Gehen wir am Sonntag an den Strand?|Andiamo in spiaggia domenica?|Vamos à praia no domingo?|Поедем на пляж в воскресенье?|Mergem la plajă duminică?");

  /* 15 Ocio */
  P(15, "A", "Invitar al cine", "Invitas a una compañera de trabajo.", "Invitas a tu mejor amigo.",
    "Inviting someone to the cinema", "You invite a colleague.", "You invite your best friend.",
    "¿Le gustaría ir al cine conmigo esta noche?", "¿Vamos al cine esta noche?",
    "Would you like to go to the cinema with me tonight?|Aimeriez-vous aller au cinéma avec moi ce soir ?|Möchten Sie heute Abend mit mir ins Kino gehen?|Le piacerebbe venire al cinema con me stasera?|Gostaria de ir ao cinema comigo esta noite?|Не хотели бы вы пойти со мной в кино сегодня вечером?|Ați dori să mergeți cu mine la cinema în seara asta?",
    "Shall we go to the cinema tonight?|On va au ciné ce soir ?|Gehen wir heute Abend ins Kino?|Andiamo al cinema stasera?|Vamos ao cinema esta noite?|Пойдём сегодня в кино?|Mergem la cinema diseară?");
  P(15, "B", "Preguntar por sus aficiones", "Hablas con el padre de un amigo.", "Hablas con un compañero de clase.",
    "Asking about someone's hobbies", "You talk to a friend's father.", "You talk to a classmate.",
    "¿Qué le gusta hacer en su tiempo libre?", "¿Qué haces en tu tiempo libre?",
    "What do you like to do in your free time?|Qu'aimez-vous faire pendant votre temps libre ?|Was machen Sie gern in Ihrer Freizeit?|Cosa Le piace fare nel tempo libero?|O que gosta de fazer nos seus tempos livres?|Что вы любите делать в свободное время?|Ce vă place să faceți în timpul liber?",
    "What do you get up to in your free time?|Tu fais quoi pendant ton temps libre ?|Was machst du in deiner Freizeit?|Cosa fai nel tempo libero?|O que fazes nos teus tempos livres?|Чем занимаешься в свободное время?|Ce faci în timpul liber?");
})();
