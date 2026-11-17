/* Situaciones "Rompecabezas vivo" para B2 y C1 (unidades 31-50: dos por unidad) y 2 escenas nuevas (unidades 32 y 40).
   Escritas a mano por Claude; pendientes de revisión por hablantes nativos. Usa los ayudantes de data14.js. */
(() => {
  const P = window.addLive;

  P(30, "A", "Expresar desacuerdo", "Hablas en una reunión de directivos.", "Hablas con un amigo en un café.",
    "Expressing disagreement", "You speak in a meeting of executives.", "You talk with a friend in a café.",
    "Con todo respeto, discrepo de su planteamiento.", "Pues yo no estoy de acuerdo contigo.",
    "With all due respect, I disagree with your approach.|Avec tout mon respect, je ne suis pas d'accord avec votre approche.|Bei allem Respekt, ich teile Ihren Ansatz nicht.|Con tutto il rispetto, non condivido il Suo approccio.|Com todo o respeito, discordo da sua abordagem.|При всём уважении, я не согласен с вашим подходом.|Cu tot respectul, nu sunt de acord cu abordarea dumneavoastră.",
    "Well, I don't agree with you.|Moi, je ne suis pas d'accord avec toi.|Also ich sehe das anders als du.|Beh, io non sono d'accordo con te.|Pois eu não concordo contigo.|А я с тобой не согласен.|Eu nu sunt de acord cu tine.");
  P(30, "B", "Pedir la palabra", "Hablas en una conferencia.", "Hablas en una cena entre amigos.",
    "Asking to speak", "You speak at a conference.", "You speak at a dinner with friends.",
    "¿Me permite intervenir un momento?", "Oye, déjame decir algo.",
    "May I step in for a moment?|Me permettez-vous d'intervenir un instant ?|Dürfte ich kurz etwas dazu sagen?|Mi permette di intervenire un momento?|Permite-me intervir um momento?|Позвольте мне вставить слово?|Îmi permiteți să intervin o clipă?",
    "Hey, let me say something.|Eh, laisse-moi dire quelque chose.|Hey, lass mich mal was sagen.|Ehi, lasciami dire una cosa.|Ei, deixa-me dizer uma coisa.|Эй, дай мне сказать.|Hei, lasă-mă să spun ceva.");

  P(31, "A", "Hablar de tus fortalezas", "Estás en una entrevista de trabajo.", "Hablas con un amigo que te pregunta por tu trabajo.",
    "Talking about your strengths", "You are in a job interview.", "You talk to a friend who asks about your work.",
    "Considero que mi mayor fortaleza es la capacidad de organización.", "Soy bastante organizado, la verdad.",
    "I consider my greatest strength to be my organisational ability.|Je considère que ma plus grande force est ma capacité d'organisation.|Ich sehe meine größte Stärke in meiner Organisationsfähigkeit.|Ritengo che il mio punto di forza principale sia la capacità organizzativa.|Considero que o meu maior ponto forte é a capacidade de organização.|Я считаю своей главной сильной стороной умение организовывать работу.|Consider că cel mai mare punct forte al meu este capacitatea de organizare.",
    "I'm pretty organised, to be honest.|Je suis plutôt organisé, à vrai dire.|Ich bin ehrlich gesagt ziemlich organisiert.|Sono piuttosto organizzato, a dire il vero.|Sou bastante organizado, para ser sincero.|Я, честно говоря, довольно организованный.|Sunt destul de organizat, sincer să fiu.");
  P(31, "B", "Preguntar por el salario", "Hablas con la persona de recursos humanos.", "Hablas con un conocido que trabaja allí.",
    "Asking about the salary", "You talk to the human resources person.", "You talk to an acquaintance who works there.",
    "¿Podría informarme sobre el rango salarial del puesto?", "¿Y cuánto se paga por este trabajo?",
    "Could you tell me the salary range for the position?|Pourriez-vous m'indiquer la fourchette de salaire du poste ?|Könnten Sie mir die Gehaltsspanne für die Stelle nennen?|Potrebbe indicarmi la fascia retributiva della posizione?|Poderia informar-me sobre a faixa salarial do cargo?|Не могли бы вы сообщить зарплатную вилку для этой должности?|Mi-ați putea spune intervalul salarial pentru acest post?",
    "So how much does this job pay?|Et ça paie combien, ce boulot ?|Und wie viel verdient man bei diesem Job?|E quanto si guadagna con questo lavoro?|E quanto se ganha neste trabalho?|А сколько платят за эту работу?|Și cât se plătește pentru slujba asta?");

  P(32, "A", "Dar una noticia", "Hablas con tu jefe.", "Hablas con tu mejor amigo.",
    "Sharing news", "You talk to your boss.", "You talk to your best friend.",
    "Me gustaría informarle de una novedad importante.", "¡Mira, tengo una noticia buena!",
    "I would like to inform you of an important development.|Je voudrais vous informer d'une nouvelle importante.|Ich möchte Sie über eine wichtige Neuigkeit informieren.|Vorrei informarLa di una novità importante.|Gostaria de o informar de uma novidade importante.|Хочу сообщить вам важную новость.|Aș dori să vă informez despre o noutate importantă.",
    "Listen, I've got some good news!|Écoute, j'ai une bonne nouvelle !|Hör mal, ich habe gute Neuigkeiten!|Senti, ho una bella notizia!|Olha, tenho uma boa notícia!|Слушай, у меня хорошая новость!|Uite, am o veste bună!");
  P(32, "B", "Cuestionar una fuente", "Hablas con un periodista en una rueda de prensa.", "Hablas con un amigo que compartió una noticia.",
    "Questioning a source", "You talk to a journalist at a press conference.", "You talk to a friend who shared a news story.",
    "¿Podría indicarme la fuente de esa información?", "¿De dónde sacaste eso?",
    "Could you tell me the source of that information?|Pourriez-vous m'indiquer la source de cette information ?|Könnten Sie mir die Quelle dieser Information nennen?|Potrebbe indicarmi la fonte di questa informazione?|Poderia indicar-me a fonte dessa informação?|Не могли бы вы назвать источник этой информации?|Mi-ați putea indica sursa acestei informații?",
    "Where did you get that from?|Tu as sorti ça d'où ?|Woher hast du das?|Da dove l'hai preso?|Onde foste buscar isso?|Откуда ты это взял?|De unde ai luat asta?");

  P(33, "A", "Describir un síntoma", "Hablas con un especialista.", "Hablas con tu hermano.",
    "Describing a symptom", "You talk to a specialist.", "You talk to your brother.",
    "Desde hace una semana tengo mareos frecuentes.", "Llevo días mareado, no sé qué me pasa.",
    "For a week I've had frequent dizzy spells.|Depuis une semaine, j'ai de fréquents vertiges.|Seit einer Woche habe ich häufig Schwindelanfälle.|Da una settimana ho frequenti capogiri.|Há uma semana que tenho tonturas frequentes.|Уже неделю у меня частые головокружения.|De o săptămână am amețeli frecvente.",
    "I've been dizzy for days, I don't know what's wrong.|Ça fait des jours que j'ai la tête qui tourne, je ne sais pas ce que j'ai.|Mir ist seit Tagen schwindelig, ich weiß nicht, was los ist.|Sono giorni che ho il capogiro, non so cosa mi succeda.|Ando há dias com tonturas, não sei o que se passa.|Уже несколько дней кружится голова, не знаю, что со мной.|De zile bune mi se învârte capul, nu știu ce am.");
  P(33, "B", "Pedir una segunda opinión", "Hablas con tu médico.", "Hablas con un amigo.",
    "Asking for a second opinion", "You talk to your doctor.", "You talk to a friend.",
    "Quisiera solicitar una segunda opinión médica.", "Creo que voy a ver a otro médico.",
    "I would like to request a second medical opinion.|Je voudrais demander un deuxième avis médical.|Ich möchte eine zweite ärztliche Meinung einholen.|Vorrei richiedere un secondo parere medico.|Gostaria de solicitar uma segunda opinião médica.|Я хотел бы получить второе медицинское заключение.|Aș dori să solicit o a doua opinie medicală.",
    "I think I'll see another doctor.|Je crois que je vais voir un autre médecin.|Ich glaube, ich gehe zu einem anderen Arzt.|Credo che andrò da un altro medico.|Acho que vou a outro médico.|Кажется, схожу к другому врачу.|Cred că o să merg la alt medic.");

  P(34, "A", "Explicar un invento", "Presentas el producto a unos clientes.", "Se lo muestras a tu amigo.",
    "Explaining an invention", "You present the product to some clients.", "You show it to your friend.",
    "Permítame explicarle cómo funciona este dispositivo.", "Mira, esto funciona así.",
    "Allow me to explain how this device works.|Permettez-moi de vous expliquer le fonctionnement de cet appareil.|Erlauben Sie mir zu erklären, wie dieses Gerät funktioniert.|Mi permetta di spiegarLe come funziona questo dispositivo.|Permita-me explicar-lhe como funciona este dispositivo.|Позвольте объяснить, как работает это устройство.|Permiteți-mi să vă explic cum funcționează acest dispozitiv.",
    "Look, it works like this.|Regarde, ça marche comme ça.|Schau, das funktioniert so.|Guarda, funziona così.|Olha, isto funciona assim.|Смотри, это работает так.|Uite, funcționează așa.");
  P(34, "B", "Expresar una duda sobre privacidad", "Hablas con el responsable de la empresa.", "Hablas con tu hermano que usa la aplicación.",
    "Voicing a privacy concern", "You talk to the head of the company.", "You talk to your brother who uses the app.",
    "Me preocupa cómo se protegen mis datos personales.", "¿Y mis datos qué? ¿Quién los ve?",
    "I'm concerned about how my personal data is protected.|Je m'inquiète de la façon dont mes données personnelles sont protégées.|Mir macht Sorgen, wie meine persönlichen Daten geschützt werden.|Mi preoccupa come vengano protetti i miei dati personali.|Preocupa-me a forma como os meus dados pessoais são protegidos.|Меня беспокоит, как защищены мои личные данные.|Mă îngrijorează cum sunt protejate datele mele personale.",
    "And my data? Who gets to see it?|Et mes données, alors ? Qui les voit ?|Und meine Daten? Wer sieht die?|E i miei dati? Chi li vede?|E os meus dados? Quem os vê?|А мои данные? Кто их видит?|Și datele mele? Cine le vede?");

  P(35, "A", "Pedir una recomendación", "Preguntas en la recepción del hotel.", "Preguntas a un chico del lugar.",
    "Asking for a recommendation", "You ask at the hotel reception.", "You ask a local young man.",
    "¿Podría recomendarme un restaurante típico de la zona?", "¿Dónde se come bien por aquí?",
    "Could you recommend a typical restaurant in the area?|Pourriez-vous me recommander un restaurant typique de la région ?|Könnten Sie mir ein typisches Restaurant in der Gegend empfehlen?|Potrebbe consigliarmi un ristorante tipico della zona?|Poderia recomendar-me um restaurante típico da zona?|Не могли бы вы порекомендовать типичный ресторан в этом районе?|Mi-ați putea recomanda un restaurant tipic din zonă?",
    "Where can you eat well around here?|On mange bien où par ici ?|Wo kann man hier gut essen?|Dove si mangia bene da queste parti?|Onde se come bem por aqui?|Где тут можно вкусно поесть?|Unde se mănâncă bine pe aici?");
  P(35, "B", "Agradecer la hospitalidad", "Te despides de una familia que te hospedó.", "Te despides de unos amigos del lugar.",
    "Thanking someone for hospitality", "You say goodbye to a family who hosted you.", "You say goodbye to some local friends.",
    "Le agradezco sinceramente su hospitalidad.", "¡Mil gracias por todo, fueron geniales!",
    "I sincerely thank you for your hospitality.|Je vous remercie sincèrement de votre hospitalité.|Ich danke Ihnen aufrichtig für Ihre Gastfreundschaft.|La ringrazio sinceramente per la Sua ospitalità.|Agradeço-lhe sinceramente a sua hospitalidade.|Искренне благодарю вас за гостеприимство.|Vă mulțumesc sincer pentru ospitalitate.",
    "Thanks so much for everything, you were amazing!|Merci mille fois pour tout, vous avez été géniaux !|Tausend Dank für alles, ihr wart super!|Grazie mille di tutto, siete stati fantastici!|Mil obrigados por tudo, foram incríveis!|Огромное спасибо за всё, вы были потрясающие!|Mii de mulțumiri pentru tot, ați fost minunați!");

  P(36, "A", "Negociar el alquiler", "Hablas con el propietario.", "Hablas con un amigo que alquila su casa.",
    "Negotiating the rent", "You talk to the owner.", "You talk to a friend who rents out their house.",
    "¿Estaría dispuesto a reducir el alquiler si firmo por dos años?", "¿Me bajas el alquiler si me quedo dos años?",
    "Would you be willing to lower the rent if I sign for two years?|Seriez-vous prêt à baisser le loyer si je signe pour deux ans ?|Wären Sie bereit, die Miete zu senken, wenn ich für zwei Jahre unterschreibe?|Sarebbe disposto ad abbassare l'affitto se firmo per due anni?|Estaria disposto a baixar o aluguer se eu assinar por dois anos?|Согласились бы вы снизить арендную плату, если я подпишу договор на два года?|Ați fi dispus să reduceți chiria dacă semnez pe doi ani?",
    "Will you lower the rent if I stay two years?|Tu me baisses le loyer si je reste deux ans ?|Senkst du die Miete, wenn ich zwei Jahre bleibe?|Mi abbassi l'affitto se resto due anni?|Baixas-me o aluguer se eu ficar dois anos?|Снизишь аренду, если я останусь на два года?|Îmi scazi chiria dacă rămân doi ani?");
  P(36, "B", "Reportar una avería", "Escribes a la inmobiliaria.", "Hablas con tu compañero de casa.",
    "Reporting a fault", "You write to the estate agency.", "You talk to your housemate.",
    "Quisiera informarle de una avería en la calefacción.", "Oye, la calefacción se averió.",
    "I would like to report a fault with the heating.|Je voudrais vous signaler une panne de chauffage.|Ich möchte Ihnen eine Störung der Heizung melden.|Vorrei segnalarLe un guasto al riscaldamento.|Gostaria de comunicar uma avaria no aquecimento.|Хочу сообщить о поломке отопления.|Aș dori să vă anunț o defecțiune la încălzire.",
    "Hey, the heating's broken.|Dis, le chauffage est en panne.|Hey, die Heizung ist kaputt.|Ehi, il riscaldamento si è rotto.|Ei, o aquecimento avariou.|Слушай, отопление сломалось.|Hei, s-a stricat încălzirea.");

  P(37, "A", "Pedir asesoría", "Hablas con un asesor financiero.", "Hablas con tu primo que sabe de finanzas.",
    "Asking for advice", "You talk to a financial adviser.", "You talk to your cousin who knows about finance.",
    "¿Podría asesorarme sobre cómo invertir mis ahorros?", "¿Qué hago con mis ahorros?",
    "Could you advise me on how to invest my savings?|Pourriez-vous me conseiller sur la façon d'investir mes économies ?|Könnten Sie mich beraten, wie ich meine Ersparnisse anlegen soll?|Potrebbe consigliarmi su come investire i miei risparmi?|Poderia aconselhar-me sobre como investir as minhas poupanças?|Не могли бы вы посоветовать, как инвестировать мои сбережения?|Mă puteți sfătui cum să-mi investesc economiile?",
    "What should I do with my savings?|Qu'est-ce que je fais de mes économies ?|Was mache ich mit meinen Ersparnissen?|Cosa faccio con i miei risparmi?|O que faço com as minhas poupanças?|Что мне делать с моими сбережениями?|Ce fac cu economiile mele?");
  P(37, "B", "Rechazar una oferta", "Rechazas la oferta de un banco.", "Rechazas la oferta de un amigo.",
    "Turning down an offer", "You turn down a bank's offer.", "You turn down a friend's offer.",
    "Agradezco la propuesta, pero no puedo aceptarla.", "Gracias, pero paso.",
    "I appreciate the proposal, but I cannot accept it.|Je vous remercie de cette proposition, mais je ne peux pas l'accepter.|Ich danke für das Angebot, kann es aber nicht annehmen.|La ringrazio per la proposta, ma non posso accettarla.|Agradeço a proposta, mas não a posso aceitar.|Благодарю за предложение, но не могу его принять.|Vă mulțumesc pentru propunere, dar nu o pot accepta.",
    "Thanks, but I'll pass.|Merci, mais sans moi.|Danke, aber ich passe.|Grazie, ma passo.|Obrigado, mas passo.|Спасибо, но я пас.|Mulțumesc, dar renunț.");

  P(38, "A", "Desmentir un rumor", "Hablas ante la prensa.", "Hablas en tu grupo de amigos.",
    "Denying a rumour", "You speak to the press.", "You speak in your group of friends.",
    "Esa información es falsa y quisiera aclararlo.", "Eso es mentira, no se lo crean.",
    "That information is false and I would like to set the record straight.|Cette information est fausse et je souhaite la rectifier.|Diese Information ist falsch, und ich möchte das richtigstellen.|Quell'informazione è falsa e vorrei chiarirlo.|Essa informação é falsa e gostaria de esclarecer.|Эта информация ложна, и я хочу это прояснить.|Informația aceea este falsă și aș dori să clarific.",
    "That's a lie, don't believe it.|C'est faux, ne le croyez pas.|Das ist gelogen, glaubt das nicht.|È una bugia, non ci credete.|Isso é mentira, não acreditem.|Это ложь, не верьте.|E o minciună, nu credeți.");
  P(38, "B", "Pedir una rectificación", "Escribes al director de un periódico.", "Comentas en una red social.",
    "Asking for a correction", "You write to the editor of a newspaper.", "You comment on a social network.",
    "Solicito formalmente una rectificación.", "Corrijan eso, por favor.",
    "I formally request a correction.|Je demande officiellement un rectificatif.|Ich beantrage hiermit förmlich eine Richtigstellung.|Chiedo formalmente una rettifica.|Solicito formalmente uma retificação.|Официально прошу опубликовать опровержение.|Solicit în mod oficial o rectificare.",
    "Please fix that.|Corrigez ça, s'il vous plaît.|Bitte korrigiert das.|Correggete, per favore.|Corrijam isso, por favor.|Исправьте это, пожалуйста.|Corectați asta, vă rog.");

  P(39, "A", "Reclamar un cobro", "Llamas a la empresa de teléfono.", "Hablas con una amiga que trabaja allí.",
    "Disputing a charge", "You phone the telephone company.", "You talk to a friend who works there.",
    "Quisiera impugnar un cobro indebido en mi factura.", "Me cobraron de más, ¿pueden revisarlo?",
    "I would like to dispute an incorrect charge on my bill.|Je souhaite contester un prélèvement indu sur ma facture.|Ich möchte eine ungerechtfertigte Abbuchung auf meiner Rechnung anfechten.|Vorrei contestare un addebito non dovuto sulla mia fattura.|Gostaria de contestar uma cobrança indevida na minha fatura.|Я хотел бы оспорить необоснованное списание в моём счёте.|Aș dori să contest o taxare nejustificată pe factura mea.",
    "I've been overcharged, can you check it?|On m'a facturé trop, vous pouvez vérifier ?|Mir wurde zu viel berechnet, könnt ihr das prüfen?|Mi hanno fatto pagare troppo, potete controllare?|Cobraram-me a mais, podem verificar?|С меня взяли лишнее, можете проверить?|Mi-au luat prea mult, puteți verifica?");
  P(39, "B", "Aceptar una solución", "Cierras una reclamación.", "Cierras una discusión con un vendedor amigo.",
    "Accepting a solution", "You close a complaint.", "You end a discussion with a salesperson friend.",
    "Acepto su propuesta y le agradezco la gestión.", "Está bien, me parece justo.",
    "I accept your proposal and thank you for handling this.|J'accepte votre proposition et vous remercie de votre prise en charge.|Ich nehme Ihren Vorschlag an und danke Ihnen für die Bearbeitung.|Accetto la Sua proposta e La ringrazio per la gestione.|Aceito a sua proposta e agradeço a gestão do caso.|Принимаю ваше предложение и благодарю за содействие.|Accept propunerea dumneavoastră și vă mulțumesc pentru rezolvare.",
    "Fine, that seems fair to me.|D'accord, ça me semble juste.|In Ordnung, das finde ich fair.|Va bene, mi sembra giusto.|Está bem, parece-me justo.|Хорошо, мне это кажется справедливым.|Bine, mi se pare corect.");

  P(40, "A", "Opinar sobre la inflación", "Hablas en un foro de economía.", "Hablas con tus vecinos.",
    "Giving an opinion on inflation", "You speak at an economics forum.", "You talk to your neighbours.",
    "Considero que la inflación afecta sobre todo a los más pobres.", "La inflación nos está matando a todos.",
    "I believe inflation mainly affects the poorest.|Je considère que l'inflation touche surtout les plus pauvres.|Ich bin der Ansicht, dass die Inflation vor allem die Ärmsten trifft.|Ritengo che l'inflazione colpisca soprattutto i più poveri.|Considero que a inflação afeta sobretudo os mais pobres.|Я считаю, что инфляция в первую очередь бьёт по самым бедным.|Consider că inflația îi afectează mai ales pe cei mai săraci.",
    "Inflation is killing all of us.|L'inflation nous tue tous.|Die Inflation bringt uns alle um.|L'inflazione ci sta uccidendo tutti.|A inflação está a matar-nos a todos.|Инфляция нас всех убивает.|Inflația ne omoară pe toți.");
  P(40, "B", "Comunicar una mala noticia laboral", "Hablas como gerente con un empleado.", "Hablas con un colega y amigo.",
    "Delivering bad news at work", "You speak as a manager to an employee.", "You talk to a colleague and friend.",
    "Lamentamos comunicarle que su puesto ha sido suprimido.", "Lo siento mucho, nos toca recortar personal.",
    "We regret to inform you that your position has been eliminated.|Nous avons le regret de vous informer que votre poste a été supprimé.|Wir bedauern, Ihnen mitteilen zu müssen, dass Ihre Stelle gestrichen wurde.|Siamo spiacenti di comunicarLe che la Sua posizione è stata soppressa.|Lamentamos informá-lo de que o seu cargo foi suprimido.|С сожалением сообщаем, что ваша должность сокращена.|Regretăm să vă informăm că postul dumneavoastră a fost desființat.",
    "I'm so sorry, we have to cut staff.|Je suis vraiment désolé, on doit réduire le personnel.|Es tut mir so leid, wir müssen Personal abbauen.|Mi dispiace tantissimo, dobbiamo tagliare il personale.|Lamento imenso, temos de cortar pessoal.|Мне очень жаль, нам приходится сокращать персонал.|Îmi pare foarte rău, trebuie să reducem personalul.");

  P(41, "A", "Pedir el voto", "Hablas en un mitin.", "Hablas con tus amigos.",
    "Asking for votes", "You speak at a rally.", "You talk to your friends.",
    "Le pido su voto para construir un futuro mejor.", "¡Vota por nosotros, lo vamos a hacer bien!",
    "I ask for your vote to build a better future.|Je vous demande votre voix pour construire un avenir meilleur.|Ich bitte Sie um Ihre Stimme, um eine bessere Zukunft aufzubauen.|Le chiedo il Suo voto per costruire un futuro migliore.|Peço o seu voto para construirmos um futuro melhor.|Прошу вашего голоса, чтобы построить лучшее будущее.|Vă cer votul pentru a construi un viitor mai bun.",
    "Vote for us, we'll do a good job!|Votez pour nous, on va bien faire les choses !|Wählt uns, wir machen das gut!|Votate per noi, faremo un buon lavoro!|Votem em nós, vamos fazer um bom trabalho!|Голосуйте за нас, мы справимся!|Votați cu noi, o să facem treabă bună!");
  P(41, "B", "Criticar una ley", "Hablas ante el Parlamento.", "Hablas con tus amigos.",
    "Criticising a law", "You speak before Parliament.", "You talk to your friends.",
    "Considero que esta ley es injusta y debe revisarse.", "Esa ley está mal hecha.",
    "I believe this law is unjust and should be reviewed.|Je considère que cette loi est injuste et doit être révisée.|Ich halte dieses Gesetz für ungerecht und meine, es sollte überarbeitet werden.|Ritengo che questa legge sia ingiusta e vada rivista.|Considero que esta lei é injusta e deve ser revista.|Я считаю этот закон несправедливым, его нужно пересмотреть.|Consider că această lege este nedreaptă și trebuie revizuită.",
    "That law is badly made.|Cette loi est mal faite.|Das Gesetz ist schlecht gemacht.|Quella legge è fatta male.|Essa lei está mal feita.|Этот закон плохо составлен.|Legea aceea e prost făcută.");

  P(42, "A", "Pedir consentimiento", "Hablas con un paciente.", "Hablas con un compañero de laboratorio.",
    "Asking for consent", "You talk to a patient.", "You talk to a lab colleague.",
    "¿Da usted su consentimiento para participar en este estudio?", "¿Te animas a participar en este estudio?",
    "Do you consent to take part in this study?|Consentez-vous à participer à cette étude ?|Stimmen Sie der Teilnahme an dieser Studie zu?|Dà il Suo consenso a partecipare a questo studio?|Dá o seu consentimento para participar neste estudo?|Даёте ли вы согласие на участие в этом исследовании?|Vă dați acordul pentru a participa la acest studiu?",
    "Are you up for taking part in this study?|Tu te lances dans cette étude ?|Hast du Lust, bei dieser Studie mitzumachen?|Ti va di partecipare a questo studio?|Animas-te a participar neste estudo?|Хочешь поучаствовать в этом исследовании?|Te încumeți să participi la acest studiu?");
  P(42, "B", "Plantear un dilema", "Hablas en un congreso.", "Hablas con un amigo científico.",
    "Raising a dilemma", "You speak at a congress.", "You talk to a scientist friend.",
    "Este avance plantea un serio dilema ético.", "¿No te parece que esto es peligroso?",
    "This breakthrough raises a serious ethical dilemma.|Cette avancée soulève un sérieux dilemme éthique.|Dieser Fortschritt wirft ein ernstes ethisches Dilemma auf.|Questo progresso pone un serio dilemma etico.|Este avanço levanta um sério dilema ético.|Это достижение ставит серьёзную этическую дилемму.|Această realizare ridică o dilemă etică serioasă.",
    "Don't you think this is dangerous?|Tu ne trouves pas que c'est dangereux ?|Findest du nicht, dass das gefährlich ist?|Non ti sembra pericoloso?|Não achas que isto é perigoso?|Тебе не кажется, что это опасно?|Nu ți se pare că e periculos?");

  P(43, "A", "Elogiar una obra", "Hablas con el director del museo.", "Hablas con tu hermana.",
    "Praising a work", "You talk to the museum director.", "You talk to your sister.",
    "Esta obra me parece una verdadera joya.", "¡Qué obra tan buena!",
    "I think this work is a true gem.|Cette œuvre me paraît un véritable joyau.|Dieses Werk halte ich für ein wahres Juwel.|Questa opera mi sembra un vero gioiello.|Esta obra parece-me uma verdadeira joia.|Это произведение кажется мне настоящей жемчужиной.|Această operă mi se pare un adevărat giuvaer.",
    "What a great piece!|Quelle belle œuvre !|Was für ein tolles Werk!|Che opera bellissima!|Que obra tão boa!|Какое классное произведение!|Ce operă grozavă!");
  P(43, "B", "Dar una crítica", "Escribes una reseña formal.", "Comentas con un amigo al salir del cine.",
    "Giving a critique", "You write a formal review.", "You chat with a friend on leaving the cinema.",
    "Opino que la trama pierde fuerza en el último acto.", "El final me dejó algo frío.",
    "In my opinion, the plot loses strength in the final act.|À mon avis, l'intrigue perd de sa force dans le dernier acte.|Meiner Meinung nach verliert die Handlung im letzten Akt an Kraft.|A mio parere, la trama perde forza nell'ultimo atto.|Na minha opinião, o enredo perde força no último ato.|На мой взгляд, в последнем акте сюжет теряет силу.|În opinia mea, intriga își pierde forța în ultimul act.",
    "The ending left me a bit cold.|La fin m'a laissé un peu froid.|Das Ende hat mich etwas kalt gelassen.|Il finale mi ha lasciato un po' freddo.|O final deixou-me algo frio.|Концовка оставила меня равнодушным.|Finalul m-a lăsat cam rece.");

  P(44, "A", "Hablar de un hecho histórico", "Hablas en una conferencia de historia.", "Hablas con tu abuelo.",
    "Talking about a historical event", "You speak at a history conference.", "You talk to your grandfather.",
    "Ese acontecimiento cambió el rumbo de nuestra historia.", "Eso lo cambió todo, ¿sabes?",
    "That event changed the course of our history.|Cet événement a changé le cours de notre histoire.|Dieses Ereignis hat den Lauf unserer Geschichte verändert.|Quell'evento ha cambiato il corso della nostra storia.|Esse acontecimento mudou o rumo da nossa história.|Это событие изменило ход нашей истории.|Evenimentul acela a schimbat cursul istoriei noastre.",
    "That changed everything, you know?|Ça a tout changé, tu sais ?|Das hat alles verändert, weißt du?|Ha cambiato tutto, sai?|Isso mudou tudo, sabes?|Это всё изменило, понимаешь?|Asta a schimbat totul, știi?");
  P(44, "B", "Pedir acceso a archivos", "Hablas con la bibliotecaria del archivo.", "Hablas con un amigo historiador.",
    "Asking to see archives", "You talk to the archive librarian.", "You talk to a historian friend.",
    "¿Podría consultar los archivos históricos de la ciudad?", "¿Puedo ver los archivos viejos?",
    "Could I consult the city's historical archives?|Pourrais-je consulter les archives historiques de la ville ?|Könnte ich die historischen Archive der Stadt einsehen?|Potrei consultare gli archivi storici della città?|Poderia consultar os arquivos históricos da cidade?|Могу ли я ознакомиться с историческими архивами города?|Aș putea consulta arhivele istorice ale orașului?",
    "Can I see the old archives?|Je peux voir les vieilles archives ?|Darf ich mir die alten Archive ansehen?|Posso vedere i vecchi archivi?|Posso ver os arquivos antigos?|Можно посмотреть старые архивы?|Pot să mă uit la arhivele vechi?");

  P(45, "A", "Aclarar un malentendido", "Hablas con un cliente.", "Hablas con una amiga.",
    "Clearing up a misunderstanding", "You talk to a client.", "You talk to a friend.",
    "Creo que ha habido un malentendido; permítame aclararlo.", "Uy, creo que me entendiste mal.",
    "I think there has been a misunderstanding; allow me to clarify.|Je crois qu'il y a eu un malentendu ; permettez-moi de clarifier.|Ich glaube, es gab ein Missverständnis; erlauben Sie mir, das zu klären.|Credo che ci sia stato un malinteso; mi permetta di chiarire.|Creio que houve um mal-entendido; permita-me esclarecer.|Кажется, произошло недоразумение; позвольте прояснить.|Cred că a fost o neînțelegere; permiteți-mi să clarific.",
    "Oops, I think you misunderstood me.|Oups, je crois que tu m'as mal compris.|Huch, ich glaube, du hast mich falsch verstanden.|Ops, credo che tu mi abbia frainteso.|Ups, acho que me percebeste mal.|Ой, кажется, ты меня неправильно понял.|Hopa, cred că m-ai înțeles greșit.");
  P(45, "B", "Pedir el significado", "Preguntas a tu profesor.", "Preguntas a un amigo nativo.",
    "Asking for a meaning", "You ask your teacher.", "You ask a native-speaker friend.",
    "¿Podría explicarme el significado de esa expresión?", "¿Qué quiere decir eso?",
    "Could you explain the meaning of that expression?|Pourriez-vous m'expliquer le sens de cette expression ?|Könnten Sie mir die Bedeutung dieses Ausdrucks erklären?|Potrebbe spiegarmi il significato di quell'espressione?|Poderia explicar-me o significado dessa expressão?|Не могли бы вы объяснить значение этого выражения?|Mi-ați putea explica sensul acestei expresii?",
    "What does that mean?|Ça veut dire quoi ?|Was heißt das?|Cosa vuol dire?|O que quer dizer isso?|Что это значит?|Ce înseamnă asta?");

  P(46, "A", "Consultar a un abogado", "Visitas un bufete.", "Hablas con un amigo abogado.",
    "Consulting a lawyer", "You visit a law firm.", "You talk to a lawyer friend.",
    "Necesito asesoría legal sobre un contrato.", "Oye, ¿me ayudas con un tema legal?",
    "I need legal advice about a contract.|J'ai besoin de conseils juridiques concernant un contrat.|Ich benötige eine Rechtsberatung zu einem Vertrag.|Ho bisogno di una consulenza legale su un contratto.|Preciso de aconselhamento jurídico sobre um contrato.|Мне нужна юридическая консультация по договору.|Am nevoie de consultanță juridică în legătură cu un contract.",
    "Hey, can you help me with a legal matter?|Dis, tu peux m'aider sur un truc juridique ?|Hey, kannst du mir bei einer Rechtsfrage helfen?|Ehi, mi aiuti con una questione legale?|Ei, ajudas-me com uma questão legal?|Слушай, поможешь с юридическим вопросом?|Hei, mă ajuți cu o problemă legală?");
  P(46, "B", "Declarar ante un juez", "Hablas en el tribunal.", "Hablas con tu hermano.",
    "Testifying before a judge", "You speak in court.", "You talk to your brother.",
    "Señoría, declaro que no estaba presente.", "Te lo juro, yo no estaba ahí.",
    "Your Honour, I state that I was not present.|Monsieur le juge, je déclare que je n'étais pas présent.|Euer Ehren, ich erkläre, dass ich nicht anwesend war.|Signor giudice, dichiaro che non ero presente.|Meritíssimo, declaro que não estava presente.|Ваша честь, заявляю, что меня там не было.|Domnule judecător, declar că nu am fost prezent.",
    "I swear, I wasn't there.|Je te jure, j'étais pas là.|Ich schwöre dir, ich war nicht dort.|Te lo giuro, non c'ero.|Juro-te, eu não estava lá.|Клянусь, меня там не было.|Îți jur, nu am fost acolo.");

  P(47, "A", "Presentar una propuesta", "Hablas ante inversores.", "Hablas con tus compañeros.",
    "Presenting a proposal", "You speak to investors.", "You talk to your colleagues.",
    "Permítanme presentar nuestra propuesta de negocio.", "A ver, les cuento mi idea.",
    "Allow me to present our business proposal.|Permettez-moi de vous présenter notre proposition commerciale.|Erlauben Sie mir, unser Geschäftskonzept vorzustellen.|Permettetemi di presentare la nostra proposta commerciale.|Permitam-me apresentar a nossa proposta de negócio.|Позвольте представить наше бизнес-предложение.|Permiteți-ne să prezentăm propunerea noastră de afaceri.",
    "Okay, let me tell you my idea.|Alors, je vous explique mon idée.|Also, ich erzähl euch mal meine Idee.|Allora, vi racconto la mia idea.|Então, conto-vos a minha ideia.|Ну, расскажу вам свою идею.|Hai, vă povestesc ideea mea.");
  P(47, "B", "Pedir un ascenso", "Hablas con tu director.", "Hablas con un compañero de confianza.",
    "Asking for a promotion", "You talk to your director.", "You talk to a trusted colleague.",
    "Quisiera conversar sobre mis posibilidades de ascenso.", "¿Crees que puedo subir de puesto?",
    "I would like to discuss my chances of promotion.|Je voudrais discuter de mes possibilités de promotion.|Ich würde gern über meine Aufstiegschancen sprechen.|Vorrei parlare delle mie possibilità di promozione.|Gostaria de falar sobre as minhas possibilidades de promoção.|Я хотел бы обсудить возможности моего карьерного роста.|Aș dori să discutăm despre șansele mele de promovare.",
    "Do you think I could move up?|Tu crois que je peux monter en grade ?|Glaubst du, ich kann aufsteigen?|Credi che io possa fare carriera?|Achas que posso subir de cargo?|Как думаешь, мне могут дать повышение?|Crezi că pot avansa?");

  P(48, "A", "Proponer un cambio", "Hablas en una reunión de directivos.", "Hablas con tus compañeros de oficina.",
    "Proposing a change", "You speak in a meeting of executives.", "You talk to your office colleagues.",
    "Propongo reducir el consumo de plástico en la empresa.", "¿Y si dejamos de usar tanto plástico?",
    "I propose reducing plastic use in the company.|Je propose de réduire la consommation de plastique dans l'entreprise.|Ich schlage vor, den Plastikverbrauch im Unternehmen zu senken.|Propongo di ridurre il consumo di plastica in azienda.|Proponho reduzir o consumo de plástico na empresa.|Предлагаю сократить потребление пластика в компании.|Propun să reducem consumul de plastic în companie.",
    "What if we stopped using so much plastic?|Et si on arrêtait d'utiliser autant de plastique ?|Wie wäre es, wenn wir nicht mehr so viel Plastik benutzen?|E se smettessimo di usare tanta plastica?|E se deixássemos de usar tanto plástico?|А что, если мы перестанем использовать столько пластика?|Și dacă am înceta să folosim atâta plastic?");
  P(48, "B", "Exigir acción", "Lees un comunicado oficial.", "Hablas en una marcha con amigos.",
    "Demanding action", "You read an official statement.", "You speak at a march with friends.",
    "Exigimos medidas urgentes contra el cambio climático.", "¡Hay que hacer algo ya por el planeta!",
    "We demand urgent measures against climate change.|Nous exigeons des mesures urgentes contre le changement climatique.|Wir fordern dringende Maßnahmen gegen den Klimawandel.|Esigiamo misure urgenti contro il cambiamento climatico.|Exigimos medidas urgentes contra as alterações climáticas.|Мы требуем срочных мер против изменения климата.|Cerem măsuri urgente împotriva schimbărilor climatice.",
    "We have to do something right now for the planet!|Il faut faire quelque chose tout de suite pour la planète !|Wir müssen jetzt etwas für den Planeten tun!|Dobbiamo fare qualcosa subito per il pianeta!|Temos de fazer algo já pelo planeta!|Надо срочно что-то делать ради планеты!|Trebuie să facem ceva acum pentru planetă!");

  P(49, "A", "Corregir con tacto", "Corriges a un superior.", "Corriges a un amigo.",
    "Correcting tactfully", "You correct a superior.", "You correct a friend.",
    "Quizá convendría expresarlo de otra manera.", "Mejor dilo de otra forma, ¿sí?",
    "Perhaps it would be better to put it another way.|Peut-être vaudrait-il mieux l'exprimer autrement.|Vielleicht wäre es besser, das anders auszudrücken.|Forse converrebbe esprimerlo in un altro modo.|Talvez fosse melhor expressá-lo de outra maneira.|Возможно, стоило бы выразить это иначе.|Poate ar fi mai bine să spunem asta altfel.",
    "Better say it another way, okay?|Dis-le plutôt autrement, d'accord ?|Sag es lieber anders, okay?|Meglio dirlo in un altro modo, ok?|Melhor dizeres de outra forma, está bem?|Лучше скажи это по-другому, хорошо?|Mai bine spune-o altfel, bine?");
  P(49, "B", "Rechazar con cortesía", "Respondes a una invitación formal.", "Respondes a una amiga.",
    "Declining politely", "You reply to a formal invitation.", "You reply to a friend.",
    "Agradezco su invitación, pero me será imposible asistir.", "Gracias por invitarme, pero no puedo ir.",
    "I thank you for your invitation, but I will be unable to attend.|Je vous remercie de votre invitation, mais il me sera impossible d'y assister.|Ich danke Ihnen für die Einladung, werde aber leider nicht teilnehmen können.|La ringrazio per l'invito, ma mi sarà impossibile partecipare.|Agradeço o seu convite, mas ser-me-á impossível comparecer.|Благодарю за приглашение, но я, к сожалению, не смогу прийти.|Vă mulțumesc pentru invitație, dar nu voi putea participa.",
    "Thanks for inviting me, but I can't make it.|Merci de m'avoir invité, mais je ne peux pas venir.|Danke für die Einladung, aber ich kann nicht kommen.|Grazie per avermi invitato, ma non posso venire.|Obrigado por me convidares, mas não posso ir.|Спасибо за приглашение, но прийти не смогу.|Mulțumesc pentru invitație, dar nu pot veni.");

  /* Escenas */
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

  scene(31, "El entrevistador exigente", "El entrevistador", 230, 25, 80,
    "Estás en una entrevista de trabajo y el entrevistador es serio y exigente. Responde con el tono adecuado.",
    "The demanding interviewer", "The interviewer", "You are in a job interview and the interviewer is serious and demanding. Reply in the right tone.",
    [["Cuénteme sobre usted y su experiencia.",
      ["formal", 30, "Tengo cinco años de experiencia en ventas y busco crecer.", "Una respuesta clara y profesional causa buena impresión.", "A clear, professional answer makes a good impression."],
      ["informal", 0, "Pues trabajé en varias cosas, ya sabe.", "Es vago e informal para una entrevista.", "It's vague and too informal for an interview."],
      ["urgente", -25, "¿Eso no está en mi currículum?", "Responder con impaciencia cierra puertas.", "Answering impatiently closes doors."]],
     ["¿Cuál es su mayor debilidad?",
      ["formal", 30, "A veces me exijo demasiado, pero lo estoy mejorando.", "Admitir un defecto real y mostrar mejora es lo ideal.", "Admitting a real flaw and showing improvement is ideal."],
      ["informal", 5, "No tengo, soy perfecto.", "Sonar arrogante resta credibilidad.", "Sounding arrogant costs credibility."],
      ["urgente", -20, "Prefiero no responder eso.", "Evitar la pregunta genera desconfianza.", "Dodging the question creates distrust."]],
     ["¿Tiene alguna pregunta para nosotros?",
      ["formal", 30, "Sí, ¿cómo es el equipo con el que trabajaría?", "Hacer una pregunta interesante muestra interés.", "Asking an interesting question shows interest."],
      ["informal", 10, "No, creo que todo está claro.", "Es correcto, pero pierdes la oportunidad de mostrar interés.", "It's fine, but you miss the chance to show interest."],
      ["urgente", -20, "¿Cuánto pagan y cuándo empiezo?", "Hablar solo de dinero al inicio suena a prisa.", "Talking only about money at the start sounds rushed."]]],
    { en: [["Tell me about yourself and your experience.", "I have five years' experience in sales and I'm looking to grow.", "Well, I worked in several things, you know.", "Isn't that in my CV?"],
           ["What is your greatest weakness?", "Sometimes I demand too much of myself, but I'm working on it.", "I don't have one, I'm perfect.", "I'd rather not answer that."],
           ["Do you have any questions for us?", "Yes, what is the team I would work with like?", "No, I think everything is clear.", "How much do you pay and when do I start?"]],
      fr: [["Parlez-moi de vous et de votre expérience.", "J'ai cinq ans d'expérience dans la vente et je cherche à évoluer.", "Eh bien, j'ai travaillé dans plusieurs domaines, vous savez.", "Ce n'est pas dans mon CV ?"],
           ["Quel est votre plus grand défaut ?", "Je suis parfois trop exigeant avec moi-même, mais je m'améliore.", "Je n'en ai pas, je suis parfait.", "Je préfère ne pas répondre à cela."],
           ["Avez-vous des questions pour nous ?", "Oui, comment est l'équipe avec laquelle je travaillerais ?", "Non, je crois que tout est clair.", "Combien payez-vous et quand est-ce que je commence ?"]],
      de: [["Erzählen Sie mir von sich und Ihrer Erfahrung.", "Ich habe fünf Jahre Erfahrung im Vertrieb und möchte mich weiterentwickeln.", "Na ja, ich habe in verschiedenen Bereichen gearbeitet, wissen Sie.", "Steht das nicht in meinem Lebenslauf?"],
           ["Was ist Ihre größte Schwäche?", "Manchmal verlange ich zu viel von mir selbst, aber ich arbeite daran.", "Ich habe keine, ich bin perfekt.", "Das möchte ich lieber nicht beantworten."],
           ["Haben Sie Fragen an uns?", "Ja, wie ist das Team, mit dem ich arbeiten würde?", "Nein, ich glaube, alles ist klar.", "Wie viel zahlen Sie und wann fange ich an?"]],
      it: [["Mi parli di sé e della sua esperienza.", "Ho cinque anni di esperienza nelle vendite e cerco di crescere.", "Beh, ho lavorato in vari settori, sa.", "Non è scritto nel mio curriculum?"],
           ["Qual è il suo difetto più grande?", "A volte sono troppo esigente con me stesso, ma sto migliorando.", "Non ne ho, sono perfetto.", "Preferisco non rispondere."],
           ["Ha qualche domanda per noi?", "Sì, com'è il team con cui lavorerei?", "No, credo che sia tutto chiaro.", "Quanto pagate e quando comincio?"]],
      pt: [["Fale-me sobre si e a sua experiência.", "Tenho cinco anos de experiência em vendas e procuro crescer.", "Bem, trabalhei em várias coisas, sabe.", "Isso não está no meu currículo?"],
           ["Qual é o seu maior defeito?", "Por vezes sou demasiado exigente comigo mesmo, mas estou a melhorar.", "Não tenho, sou perfeito.", "Prefiro não responder a isso."],
           ["Tem alguma pergunta para nós?", "Sim, como é a equipa com a qual eu trabalharia?", "Não, creio que está tudo claro.", "Quanto pagam e quando começo?"]],
      ru: [["Расскажите о себе и своём опыте.", "У меня пять лет опыта в продажах, и я хочу расти.", "Ну, я работал в разных сферах, знаете.", "Разве это не указано в моём резюме?"],
           ["В чём ваша главная слабость?", "Иногда я слишком требователен к себе, но работаю над этим.", "У меня их нет, я идеален.", "Предпочитаю не отвечать на этот вопрос."],
           ["У вас есть вопросы к нам?", "Да, какая команда, с которой я буду работать?", "Нет, думаю, всё понятно.", "Сколько вы платите и когда мне начинать?"]],
      ro: [["Povestiți-mi despre dumneavoastră și experiența dumneavoastră.", "Am cinci ani de experiență în vânzări și caut să mă dezvolt.", "Ei bine, am lucrat în mai multe domenii, știți.", "Nu e scris în CV-ul meu?"],
           ["Care este cel mai mare defect al dumneavoastră?", "Uneori sunt prea exigent cu mine însumi, dar mă îmbunătățesc.", "Nu am, sunt perfect.", "Prefer să nu răspund la asta."],
           ["Aveți întrebări pentru noi?", "Da, cum este echipa cu care aș lucra?", "Nu, cred că totul este clar.", "Cât plătiți și când încep?"]] });

  scene(39, "La atención al cliente", "El agente de servicio", 190, 25, 80,
    "Llamas a atención al cliente por un producto defectuoso y el agente suena cansado. Consigue ayuda con el tono adecuado.",
    "Customer service", "The service agent", "You call customer service about a faulty product and the agent sounds tired. Get help in the right tone.",
    [["Atención al cliente, ¿en qué puedo ayudarle?",
      ["formal", 30, "Buenas tardes, compré un producto defectuoso y quisiera una solución.", "Un saludo cortés y el problema claro ayudan al agente.", "A polite greeting and a clear problem help the agent."],
      ["urgente", -30, "¡Su producto no sirve y exijo mi dinero!", "Atacar al agente lo pone a la defensiva.", "Attacking the agent puts them on the defensive."],
      ["informal", 5, "Hola, mira, tengo un problema.", "Es amable, pero poco claro y demasiado informal.", "It's friendly, but unclear and too informal."]],
     ["¿Puede darme el número de pedido?",
      ["formal", 30, "Claro, el número es 4582, gracias por su ayuda.", "Dar el dato y agradecer agiliza la gestión.", "Giving the number and saying thanks speeds up the process."],
      ["informal", 10, "Un momento, lo busco.", "Es correcto, pero demora y suena poco preparado.", "It's fine, but it delays things and sounds unprepared."],
      ["urgente", -25, "¡Ya se lo dije en el correo!", "Reprochar al agente empeora la situación.", "Telling off the agent makes things worse."]],
     ["Podemos reemplazarlo o devolver el dinero.",
      ["formal", 30, "Prefiero el reembolso, por favor. Muchas gracias.", "Elegir con claridad y cortesía cierra bien la gestión.", "Choosing clearly and politely wraps things up nicely."],
      ["informal", 15, "Mejor la devolución del dinero.", "Es claro, aunque algo seco.", "It's clear, though a little curt."],
      ["urgente", -20, "¡Ni me haga perder más tiempo!", "Un tono hostil al final deja mal sabor.", "A hostile tone at the end leaves a bad taste."]]],
    { en: [["Customer service, how can I help you?", "Good afternoon, I bought a faulty product and would like a solution.", "Your product is useless and I demand my money back!", "Hi, look, I have a problem."],
           ["Can you give me the order number?", "Of course, the number is 4582, thank you for your help.", "One moment, I'll look for it.", "I already told you in the email!"],
           ["We can replace it or refund your money.", "I prefer the refund, please. Thank you very much.", "The refund is better.", "Don't make me waste any more time!"]],
      fr: [["Service client, que puis-je faire pour vous ?", "Bonjour, j'ai acheté un produit défectueux et je souhaiterais une solution.", "Votre produit ne marche pas et j'exige mon argent !", "Salut, écoutez, j'ai un problème."],
           ["Pouvez-vous me donner le numéro de commande ?", "Bien sûr, le numéro est 4582, merci de votre aide.", "Un instant, je le cherche.", "Je vous l'ai déjà dit dans le mail !"],
           ["Nous pouvons le remplacer ou vous rembourser.", "Je préfère le remboursement, s'il vous plaît. Merci beaucoup.", "Plutôt le remboursement.", "Ne me faites pas perdre plus de temps !"]],
      de: [["Kundenservice, wie kann ich Ihnen helfen?", "Guten Tag, ich habe ein fehlerhaftes Produkt gekauft und hätte gern eine Lösung.", "Ihr Produkt taugt nichts und ich verlange mein Geld zurück!", "Hallo, hören Sie, ich habe ein Problem."],
           ["Können Sie mir die Bestellnummer geben?", "Natürlich, die Nummer lautet 4582, vielen Dank für Ihre Hilfe.", "Einen Moment, ich suche sie.", "Das habe ich Ihnen schon in der E-Mail gesagt!"],
           ["Wir können es ersetzen oder Ihnen das Geld erstatten.", "Ich bevorzuge die Erstattung, bitte. Vielen Dank.", "Lieber die Rückerstattung.", "Lassen Sie mich nicht noch mehr Zeit verschwenden!"]],
      it: [["Servizio clienti, come posso aiutarla?", "Buonasera, ho comprato un prodotto difettoso e vorrei una soluzione.", "Il vostro prodotto non funziona e voglio i miei soldi!", "Salve, senta, ho un problema."],
           ["Può darmi il numero d'ordine?", "Certo, il numero è 4582, grazie per l'aiuto.", "Un momento, lo cerco.", "Gliel'ho già detto nell'email!"],
           ["Possiamo sostituirlo o rimborsarla.", "Preferisco il rimborso, per favore. Grazie mille.", "Meglio il rimborso.", "Non mi faccia perdere altro tempo!"]],
      pt: [["Apoio ao cliente, em que posso ajudar?", "Boa tarde, comprei um produto defeituoso e gostaria de uma solução.", "O vosso produto não presta e exijo o meu dinheiro!", "Olá, olhe, tenho um problema."],
           ["Pode dar-me o número da encomenda?", "Claro, o número é 4582, obrigado pela ajuda.", "Um momento, vou procurá-lo.", "Já lhe disse no e-mail!"],
           ["Podemos substituí-lo ou devolver o dinheiro.", "Prefiro o reembolso, por favor. Muito obrigado.", "Melhor a devolução do dinheiro.", "Não me faça perder mais tempo!"]],
      ru: [["Служба поддержки, чем могу помочь?", "Добрый день, я купил бракованный товар и хотел бы найти решение.", "Ваш товар никуда не годится, и я требую вернуть деньги!", "Привет, послушайте, у меня проблема."],
           ["Вы можете назвать номер заказа?", "Конечно, номер 4582, благодарю за помощь.", "Минуту, сейчас найду.", "Я уже писал это в письме!"],
           ["Мы можем заменить товар или вернуть деньги.", "Предпочту возврат денег, пожалуйста. Большое спасибо.", "Лучше вернуть деньги.", "Не заставляйте меня терять ещё время!"]],
      ro: [["Serviciul clienți, cu ce vă pot ajuta?", "Bună ziua, am cumpărat un produs defect și aș dori o soluție.", "Produsul dumneavoastră nu face nimic și îmi cer banii înapoi!", "Salut, uitați, am o problemă."],
           ["Îmi puteți da numărul comenzii?", "Desigur, numărul este 4582, vă mulțumesc pentru ajutor.", "O clipă, îl caut.", "V-am spus deja în e-mail!"],
           ["Îl putem înlocui sau vă putem returna banii.", "Prefer rambursarea, vă rog. Vă mulțumesc mult.", "Mai bine rambursarea.", "Nu mă mai faceți să pierd timp!"]] });
})();
