/* Frases nuevas para las unidades A2 (10-19): 12 por unidad, de uso diario, en los 8 idiomas.
   moreS(unidad, texto): una línea por frase con los campos es|en|fr|de|it|pt|ru|ro. Se añaden al final de la lista de frases de la unidad. */
(() => {
  const LANGS = ["es", "en", "fr", "de", "it", "pt", "ru", "ro"];
  const moreS = (unit, text) => {
    text.trim().split("\n").forEach(line => {
      const r = line.split("|");
      LANGS.forEach((l, k) => window.COURSES[l].t[unit][1].push(r[k]));
    });
  };
  /* 10 */
  moreS(10, `
Tomo el café antes de salir.|I have coffee before leaving.|Je prends un café avant de partir.|Ich trinke Kaffee, bevor ich gehe.|Prendo il caffè prima di uscire.|Tomo um café antes de sair.|Я пью кофе перед выходом.|Beau o cafea înainte să plec.
Siempre reviso mi correo por la mañana.|I always check my email in the morning.|Je consulte toujours mes e-mails le matin.|Ich checke morgens immer meine E-Mails.|Controllo sempre la posta la mattina.|Verifico sempre o e-mail de manhã.|Я всегда проверяю почту утром.|Îmi verific mereu e-mailul dimineața.
Mi hermana se levanta más tarde que yo.|My sister gets up later than I do.|Ma sœur se lève plus tard que moi.|Meine Schwester steht später auf als ich.|Mia sorella si alza più tardi di me.|A minha irmã levanta-se mais tarde do que eu.|Моя сестра встаёт позже меня.|Sora mea se trezește mai târziu decât mine.
Tomo el tren a las ocho y diez.|I take the train at ten past eight.|Je prends le train à huit heures dix.|Ich nehme den Zug um zehn nach acht.|Prendo il treno alle otto e dieci.|Apanho o comboio às oito e dez.|Я еду на поезде в десять минут девятого.|Iau trenul la opt și zece.
A veces almuerzo en un restaurante.|Sometimes I have lunch at a restaurant.|Parfois je déjeune au restaurant.|Manchmal esse ich mittags im Restaurant.|A volte pranzo al ristorante.|Às vezes almoço num restaurante.|Иногда я обедаю в ресторане.|Uneori prânzesc la restaurant.
Preparo el desayuno para los niños.|I make breakfast for the kids.|Je prépare le petit-déjeuner pour les enfants.|Ich mache das Frühstück für die Kinder.|Preparo la colazione per i bambini.|Preparo o pequeno-almoço para as crianças.|Я готовлю завтрак для детей.|Pregătesc micul dejun pentru copii.
Normalmente cenamos a las nueve.|We usually have dinner at nine.|D'habitude, nous dînons à neuf heures.|Normalerweise essen wir um neun zu Abend.|Di solito ceniamo alle nove.|Normalmente jantamos às nove.|Обычно мы ужинаем в девять.|De obicei cinăm la nouă.
Me quedo en casa los domingos.|I stay at home on Sundays.|Je reste à la maison le dimanche.|Sonntags bleibe ich zu Hause.|La domenica resto a casa.|Aos domingos fico em casa.|По воскресеньям я остаюсь дома.|Duminica stau acasă.
Hoy tengo mucho que hacer.|Today I have a lot to do.|Aujourd'hui j'ai beaucoup à faire.|Heute habe ich viel zu tun.|Oggi ho molto da fare.|Hoje tenho muito que fazer.|Сегодня у меня много дел.|Azi am multe de făcut.
Apago la luz y me duermo enseguida.|I turn off the light and fall asleep right away.|J'éteins la lumière et je m'endors tout de suite.|Ich mache das Licht aus und schlafe sofort ein.|Spengo la luce e mi addormento subito.|Apago a luz e adormeço logo.|Я выключаю свет и сразу засыпаю.|Sting lumina și adorm imediat.
Mis hijos van a la escuela en bicicleta.|My children go to school by bike.|Mes enfants vont à l'école à vélo.|Meine Kinder fahren mit dem Fahrrad zur Schule.|I miei figli vanno a scuola in bicicletta.|Os meus filhos vão para a escola de bicicleta.|Мои дети ездят в школу на велосипеде.|Copiii mei merg la școală cu bicicleta.
Hago la siesta después de comer.|I take a nap after lunch.|Je fais la sieste après le déjeuner.|Nach dem Mittagessen mache ich ein Nickerchen.|Faccio un pisolino dopo pranzo.|Faço a sesta depois do almoço.|После обеда я немного сплю.|Fac un pui de somn după masă.
`);

  /* 11 */
  moreS(11, `
Paso la escoba todos los días.|I sweep the floor every day.|Je passe le balai tous les jours.|Ich fege jeden Tag den Boden.|Passo la scopa ogni giorno.|Varro o chão todos os dias.|Я каждый день подметаю пол.|Mătur podeaua în fiecare zi.
El baño está al final del pasillo.|The bathroom is at the end of the hallway.|La salle de bain est au bout du couloir.|Das Badezimmer ist am Ende des Flurs.|Il bagno è in fondo al corridoio.|A casa de banho fica ao fundo do corredor.|Ванная в конце коридора.|Baia este la capătul holului.
Mi vecino tiene un perro grande.|My neighbor has a big dog.|Mon voisin a un grand chien.|Mein Nachbar hat einen großen Hund.|Il mio vicino ha un cane grande.|O meu vizinho tem um cão grande.|У моего соседа большая собака.|Vecinul meu are un câine mare.
Alquilamos la casa por un año.|We rent the house for a year.|Nous louons la maison pour un an.|Wir mieten das Haus für ein Jahr.|Affittiamo la casa per un anno.|Alugamos a casa por um ano.|Мы снимаем дом на год.|Închiriem casa pe un an.
Necesito una silla más para la mesa.|I need one more chair for the table.|Il me faut une chaise de plus pour la table.|Ich brauche noch einen Stuhl für den Tisch.|Mi serve un'altra sedia per il tavolo.|Preciso de mais uma cadeira para a mesa.|Мне нужен ещё один стул к столу.|Mai am nevoie de un scaun la masă.
La televisión está en la sala.|The TV is in the living room.|La télévision est dans le salon.|Der Fernseher steht im Wohnzimmer.|La televisione è in salotto.|A televisão está na sala.|Телевизор стоит в гостиной.|Televizorul este în sufragerie.
Abre la ventana, hace calor aquí.|Open the window, it's hot in here.|Ouvre la fenêtre, il fait chaud ici.|Mach das Fenster auf, hier ist es heiß.|Apri la finestra, qui fa caldo.|Abre a janela, aqui está calor.|Открой окно, здесь жарко.|Deschide fereastra, aici e cald.
La ducha no tiene agua caliente.|The shower has no hot water.|La douche n'a pas d'eau chaude.|In der Dusche gibt es kein warmes Wasser.|La doccia non ha acqua calda.|O duche não tem água quente.|В душе нет горячей воды.|La duș nu e apă caldă.
Mi gato duerme en el sofá.|My cat sleeps on the sofa.|Mon chat dort sur le canapé.|Meine Katze schläft auf dem Sofa.|Il mio gatto dorme sul divano.|O meu gato dorme no sofá.|Мой кот спит на диване.|Pisica mea doarme pe canapea.
Sacamos la basura por la noche.|We take out the trash at night.|Nous sortons les poubelles le soir.|Wir bringen abends den Müll raus.|Buttiamo la spazzatura la sera.|Deitamos o lixo fora à noite.|Мы выносим мусор вечером.|Scoatem gunoiul seara.
El vecino de arriba hace mucho ruido.|The neighbor upstairs makes a lot of noise.|Le voisin du dessus fait beaucoup de bruit.|Der Nachbar von oben macht viel Lärm.|Il vicino di sopra fa molto rumore.|O vizinho de cima faz muito barulho.|Сосед сверху сильно шумит.|Vecinul de sus face mult zgomot.
Quiero pintar la pared de blanco.|I want to paint the wall white.|Je veux peindre le mur en blanc.|Ich möchte die Wand weiß streichen.|Voglio dipingere la parete di bianco.|Quero pintar a parede de branco.|Я хочу покрасить стену в белый цвет.|Vreau să zugrăvesc peretele în alb.
`);

  /* 12 */
  moreS(12, `
Tengo que hacerme unos análisis.|I have to get some tests done.|Je dois faire des analyses.|Ich muss ein paar Untersuchungen machen lassen.|Devo fare delle analisi.|Tenho de fazer umas análises.|Мне нужно сдать анализы.|Trebuie să fac niște analize.
No me siento bien hoy.|I don't feel well today.|Je ne me sens pas bien aujourd'hui.|Mir geht es heute nicht gut.|Oggi non mi sento bene.|Hoje não me sinto bem.|Сегодня я плохо себя чувствую.|Azi nu mă simt bine.
Me torcí el tobillo jugando fútbol.|I twisted my ankle playing soccer.|Je me suis tordu la cheville en jouant au foot.|Ich bin beim Fußballspielen umgeknickt.|Mi sono storto la caviglia giocando a calcio.|Torci o tornozelo a jogar futebol.|Я подвернул ногу, играя в футбол.|Mi-am scrântit glezna jucând fotbal.
Tengo alergia a los mariscos.|I have an allergy to shellfish.|J'ai une allergie aux fruits de mer.|Ich habe eine Allergie gegen Meeresfrüchte.|Ho un'allergia ai frutti di mare.|Tenho alergia a marisco.|У меня аллергия на морепродукты.|Am alergie la fructe de mare.
Necesito dormir ocho horas.|I need to sleep eight hours.|J'ai besoin de dormir huit heures.|Ich muss acht Stunden schlafen.|Ho bisogno di dormire otto ore.|Preciso de dormir oito horas.|Мне нужно спать восемь часов.|Am nevoie să dorm opt ore.
Hay que lavarse las manos seguido.|You have to wash your hands often.|Il faut se laver les mains souvent.|Man muss sich oft die Hände waschen.|Bisogna lavarsi spesso le mani.|É preciso lavar as mãos com frequência.|Нужно часто мыть руки.|Trebuie să te speli des pe mâini.
Me sacaron una muela ayer.|I had a tooth pulled yesterday.|On m'a arraché une dent hier.|Mir wurde gestern ein Zahn gezogen.|Ieri mi hanno tolto un dente.|Tiraram-me um dente ontem.|Вчера мне удалили зуб.|Ieri mi-au scos un dinte.
El jarabe sabe muy dulce.|The syrup tastes very sweet.|Le sirop est très sucré.|Der Sirup schmeckt sehr süß.|Lo sciroppo è molto dolce.|O xarope é muito doce.|Сироп очень сладкий.|Siropul are un gust foarte dulce.
Mi madre tiene la presión alta.|My mother has high blood pressure.|Ma mère a de l'hypertension.|Meine Mutter hat Bluthochdruck.|Mia madre ha la pressione alta.|A minha mãe tem a tensão alta.|У моей мамы повышенное давление.|Mama mea are tensiune mare.
Voy a hacerme un chequeo general.|I'm going to have a general check-up.|Je vais faire un bilan de santé.|Ich lasse einen Gesundheitscheck machen.|Mi faccio un controllo generale.|Vou fazer um check-up geral.|Я пойду на общий осмотр.|Voi face un control medical general.
Camino media hora todos los días.|I walk for half an hour every day.|Je marche une demi-heure tous les jours.|Ich gehe jeden Tag eine halbe Stunde spazieren.|Cammino mezz'ora ogni giorno.|Caminho meia hora todos os dias.|Я гуляю по полчаса каждый день.|Merg o jumătate de oră în fiecare zi.
Si te sientes peor, vuelve mañana.|If you feel worse, come back tomorrow.|Si tu te sens plus mal, reviens demain.|Wenn es dir schlechter geht, komm morgen wieder.|Se stai peggio, torna domani.|Se te sentires pior, volta amanhã.|Если станет хуже, приходи завтра.|Dacă te simți mai rău, revino mâine.
`);

  /* 13 */
  moreS(13, `
Trabajo desde casa los miércoles.|I work from home on Wednesdays.|Je travaille de chez moi le mercredi.|Mittwochs arbeite ich von zu Hause.|Il mercoledì lavoro da casa.|Às quartas trabalho a partir de casa.|По средам я работаю из дома.|Miercurea lucrez de acasă.
Mi compañera me enseñó el sistema.|My coworker showed me the system.|Ma collègue m'a montré le système.|Meine Kollegin hat mir das System gezeigt.|La mia collega mi ha mostrato il sistema.|A minha colega mostrou-me o sistema.|Моя коллега показала мне систему.|Colega mea mi-a arătat sistemul.
Tengo que enviar este informe hoy.|I have to send this report today.|Je dois envoyer ce rapport aujourd'hui.|Ich muss diesen Bericht heute schicken.|Devo inviare questo rapporto oggi.|Tenho de enviar este relatório hoje.|Мне нужно отправить этот отчёт сегодня.|Trebuie să trimit acest raport azi.
El jefe aprobó mi solicitud de vacaciones.|The boss approved my vacation request.|Le chef a approuvé ma demande de congés.|Der Chef hat meinen Urlaubsantrag genehmigt.|Il capo ha approvato la mia richiesta di ferie.|O chefe aprovou o meu pedido de férias.|Начальник одобрил мою заявку на отпуск.|Șeful mi-a aprobat cererea de concediu.
Salgo del trabajo a las seis.|I leave work at six.|Je quitte le travail à dix-huit heures.|Ich verlasse die Arbeit um sechs.|Esco dal lavoro alle sei.|Saio do trabalho às seis.|Я ухожу с работы в шесть.|Plec de la serviciu la șase.
Mi sueldo se paga a fin de mes.|My salary is paid at the end of the month.|Mon salaire est versé à la fin du mois.|Mein Gehalt wird am Monatsende gezahlt.|Il mio stipendio viene pagato a fine mese.|O meu salário é pago no fim do mês.|Мою зарплату платят в конце месяца.|Salariul meu se plătește la sfârșitul lunii.
¿Podemos cambiar la reunión a las cuatro?|Can we move the meeting to four?|Pouvons-nous déplacer la réunion à seize heures ?|Können wir die Besprechung auf vier Uhr verschieben?|Possiamo spostare la riunione alle quattro?|Podemos mudar a reunião para as quatro?|Можем ли мы перенести встречу на четыре часа?|Putem muta ședința la patru?
Estoy esperando una llamada del cliente.|I'm waiting for a call from the client.|J'attends un appel du client.|Ich warte auf einen Anruf vom Kunden.|Sto aspettando una telefonata del cliente.|Estou à espera de uma chamada do cliente.|Я жду звонка от клиента.|Aștept un telefon de la client.
Aprendo mucho en este trabajo.|I learn a lot in this job.|J'apprends beaucoup dans ce travail.|Ich lerne viel in diesem Job.|Imparo molto in questo lavoro.|Aprendo muito neste trabalho.|Я многому учусь на этой работе.|Învăț multe la această slujbă.
La oficina está cerca de la estación.|The office is near the station.|Le bureau est près de la gare.|Das Büro ist in der Nähe des Bahnhofs.|L'ufficio è vicino alla stazione.|O escritório fica perto da estação.|Офис находится рядом со станцией.|Biroul este lângă gară.
El tren llegó quince minutos tarde.|The train arrived fifteen minutes late.|Le train est arrivé avec quinze minutes de retard.|Der Zug ist fünfzehn Minuten zu spät gekommen.|Il treno è arrivato con quindici minuti di ritardo.|O comboio chegou com quinze minutos de atraso.|Поезд опоздал на пятнадцать минут.|Trenul a întârziat cincisprezece minute.
Mi equipo es muy unido.|My team is very close.|Mon équipe est très soudée.|Mein Team ist sehr eng verbunden.|La mia squadra è molto unita.|A minha equipa é muito unida.|Наша команда очень дружная.|Echipa mea este foarte unită.
`);

  /* 14 */
  moreS(14, `
Hoy amaneció soleado.|It was sunny this morning.|Ce matin, il y avait du soleil.|Heute Morgen war es sonnig.|Stamattina c'era il sole.|Hoje amanheceu com sol.|Сегодня утром было солнечно.|Azi dimineață a fost soare.
Esta tarde va a refrescar.|It will cool down this afternoon.|Cet après-midi, il va faire plus frais.|Heute Nachmittag wird es kühler.|Questo pomeriggio rinfrescherà.|Esta tarde vai arrefecer.|Сегодня днём похолодает.|După-amiază se va răcori.
En verano nos bañamos en la playa.|In summer we swim at the beach.|En été, nous nous baignons à la plage.|Im Sommer baden wir am Strand.|In estate facciamo il bagno in spiaggia.|No verão tomamos banho na praia.|Летом мы купаемся на пляже.|Vara ne scăldăm la plajă.
Está lloviendo a cántaros.|It's pouring.|Il pleut à verse.|Es regnet in Strömen.|Piove a dirotto.|Está a chover a cântaros.|Льёт как из ведра.|Plouă cu găleata.
El sol sale a las seis y media.|The sun rises at six thirty.|Le soleil se lève à six heures et demie.|Die Sonne geht um halb sieben auf.|Il sole sorge alle sei e mezza.|O sol nasce às seis e meia.|Солнце встаёт в половине седьмого.|Soarele răsare la șase și jumătate.
No salgas sin abrigo, hace frío.|Don't go out without a coat, it's cold.|Ne sors pas sans manteau, il fait froid.|Geh nicht ohne Mantel raus, es ist kalt.|Non uscire senza cappotto, fa freddo.|Não saias sem casaco, está frio.|Не выходи без пальто, холодно.|Nu ieși fără palton, e frig.
La nieve cubrió toda la ciudad.|The snow covered the whole city.|La neige a couvert toute la ville.|Der Schnee hat die ganze Stadt bedeckt.|La neve ha coperto tutta la città.|A neve cobriu toda a cidade.|Снег покрыл весь город.|Zăpada a acoperit tot orașul.
Mañana habrá sol por la mañana y nubes después.|Tomorrow it will be sunny in the morning and cloudy later.|Demain, il y aura du soleil le matin puis des nuages.|Morgen scheint vormittags die Sonne, später gibt es Wolken.|Domani ci sarà sole al mattino e poi nuvole.|Amanhã haverá sol de manhã e nuvens depois.|Завтра утром будет солнце, а потом облака.|Mâine va fi soare dimineața și apoi nori.
Hace un día perfecto para salir.|It's a perfect day to go out.|C'est une journée parfaite pour sortir.|Es ist ein perfekter Tag zum Ausgehen.|È una giornata perfetta per uscire.|Está um dia perfeito para sair.|Отличный день, чтобы выйти на улицу.|E o zi perfectă pentru a ieși.
Esta semana ha hecho mucho calor.|It has been very hot this week.|Il a fait très chaud cette semaine.|Diese Woche war es sehr heiß.|Questa settimana ha fatto molto caldo.|Esta semana tem feito muito calor.|На этой неделе было очень жарко.|Săptămâna asta a fost foarte cald.
El viento rompió una rama del árbol.|The wind broke a branch off the tree.|Le vent a cassé une branche de l'arbre.|Der Wind hat einen Ast vom Baum abgebrochen.|Il vento ha spezzato un ramo dell'albero.|O vento partiu um ramo da árvore.|Ветер сломал ветку дерева.|Vântul a rupt o creangă din copac.
Por la noche baja mucho la temperatura.|At night the temperature drops a lot.|La nuit, la température baisse beaucoup.|Nachts sinkt die Temperatur stark.|Di notte la temperatura scende molto.|À noite a temperatura desce muito.|Ночью температура сильно падает.|Noaptea temperatura scade mult.
`);

  /* 15 */
  moreS(15, `
¿Qué película quieres ver esta noche?|What movie do you want to watch tonight?|Quel film veux-tu voir ce soir ?|Welchen Film willst du heute Abend sehen?|Che film vuoi vedere stasera?|Que filme queres ver esta noite?|Какой фильм ты хочешь посмотреть сегодня вечером?|Ce film vrei să vezi în seara asta?
Toco la guitarra desde hace dos años.|I've played the guitar for two years.|Je joue de la guitare depuis deux ans.|Ich spiele seit zwei Jahren Gitarre.|Suono la chitarra da due anni.|Toco guitarra há dois anos.|Я играю на гитаре уже два года.|Cânt la chitară de doi ani.
Nos reunimos a cenar los viernes.|We get together for dinner on Fridays.|Nous nous retrouvons pour dîner le vendredi.|Freitags treffen wir uns zum Abendessen.|Il venerdì ci riuniamo per cena.|Às sextas reunimo-nos para jantar.|По пятницам мы собираемся на ужин.|Vinerea ne adunăm la cină.
Me gusta sacar fotos de la naturaleza.|I like taking pictures of nature.|J'aime prendre des photos de la nature.|Ich fotografiere gern die Natur.|Mi piace fotografare la natura.|Gosto de tirar fotografias da natureza.|Я люблю фотографировать природу.|Îmi place să fac fotografii naturii.
El partido empieza a las ocho.|The match starts at eight.|Le match commence à vingt heures.|Das Spiel beginnt um acht.|La partita inizia alle otto.|O jogo começa às oito.|Матч начинается в восемь.|Meciul începe la opt.
Compré entradas para el teatro.|I bought tickets for the theater.|J'ai acheté des billets pour le théâtre.|Ich habe Karten fürs Theater gekauft.|Ho comprato i biglietti per il teatro.|Comprei bilhetes para o teatro.|Я купил билеты в театр.|Am cumpărat bilete la teatru.
Los niños quieren ir al zoológico.|The kids want to go to the zoo.|Les enfants veulent aller au zoo.|Die Kinder wollen in den Zoo gehen.|I bambini vogliono andare allo zoo.|As crianças querem ir ao jardim zoológico.|Дети хотят пойти в зоопарк.|Copiii vor să meargă la grădina zoologică.
Armamos un rompecabezas de mil piezas.|We put together a thousand-piece puzzle.|Nous faisons un puzzle de mille pièces.|Wir legen ein Puzzle mit tausend Teilen.|Facciamo un puzzle da mille pezzi.|Montamos um puzzle de mil peças.|Мы собираем пазл из тысячи деталей.|Facem un puzzle de o mie de piese.
Cantamos en el auto durante el viaje.|We sing in the car during the trip.|Nous chantons dans la voiture pendant le voyage.|Wir singen während der Fahrt im Auto.|Cantiamo in macchina durante il viaggio.|Cantamos no carro durante a viagem.|Мы поём в машине во время поездки.|Cântăm în mașină în timpul călătoriei.
Hoy no tengo ganas de salir.|I don't feel like going out today.|Aujourd'hui je n'ai pas envie de sortir.|Heute habe ich keine Lust auszugehen.|Oggi non ho voglia di uscire.|Hoje não me apetece sair.|Сегодня мне не хочется выходить.|Azi nu am chef să ies.
Mi equipo ganó el campeonato.|My team won the championship.|Mon équipe a gagné le championnat.|Mein Team hat die Meisterschaft gewonnen.|La mia squadra ha vinto il campionato.|A minha equipa ganhou o campeonato.|Моя команда выиграла чемпионат.|Echipa mea a câștigat campionatul.
Pasamos la tarde jugando a las cartas.|We spent the afternoon playing cards.|Nous avons passé l'après-midi à jouer aux cartes.|Wir haben den Nachmittag mit Kartenspielen verbracht.|Abbiamo passato il pomeriggio a giocare a carte.|Passámos a tarde a jogar às cartas.|Мы всю вторую половину дня играли в карты.|Am petrecut după-amiaza jucând cărți.
`);

  /* 16 */
  moreS(16, `
Ayer llovió todo el día.|It rained all day yesterday.|Hier, il a plu toute la journée.|Gestern hat es den ganzen Tag geregnet.|Ieri ha piovuto tutto il giorno.|Ontem choveu o dia todo.|Вчера весь день шёл дождь.|Ieri a plouat toată ziua.
Mi abuela vivió en el campo.|My grandmother lived in the countryside.|Ma grand-mère a vécu à la campagne.|Meine Großmutter hat auf dem Land gelebt.|Mia nonna ha vissuto in campagna.|A minha avó viveu no campo.|Моя бабушка жила в деревне.|Bunica mea a locuit la țară.
Cuando era joven, practicaba natación.|When I was young, I used to swim.|Quand j'étais jeune, je faisais de la natation.|Als ich jung war, habe ich geschwommen.|Da giovane facevo nuoto.|Quando era jovem, praticava natação.|В молодости я занимался плаванием.|Când eram tânăr, făceam înot.
Nos conocimos hace tres años.|We met three years ago.|Nous nous sommes rencontrés il y a trois ans.|Wir haben uns vor drei Jahren kennengelernt.|Ci siamo conosciuti tre anni fa.|Conhecemo-nos há três anos.|Мы познакомились три года назад.|Ne-am cunoscut acum trei ani.
Escuché esa canción en la radio.|I heard that song on the radio.|J'ai entendu cette chanson à la radio.|Ich habe das Lied im Radio gehört.|Ho sentito quella canzone alla radio.|Ouvi essa canção na rádio.|Я услышал эту песню по радио.|Am auzit melodia aceea la radio.
Se me olvidó apagar la estufa.|I forgot to turn off the stove.|J'ai oublié d'éteindre la cuisinière.|Ich habe vergessen, den Herd auszuschalten.|Mi sono dimenticato di spegnere i fornelli.|Esqueci-me de desligar o fogão.|Я забыл выключить плиту.|Am uitat să sting aragazul.
Cuando llegué, todos dormían.|When I arrived, everyone was asleep.|Quand je suis arrivé, tout le monde dormait.|Als ich ankam, schliefen alle.|Quando sono arrivato, dormivano tutti.|Quando cheguei, todos dormiam.|Когда я пришёл, все спали.|Când am ajuns, toți dormeau.
El domingo comimos en casa de mis tíos.|On Sunday we ate at my aunt and uncle's house.|Dimanche, nous avons mangé chez mon oncle et ma tante.|Am Sonntag haben wir bei meinem Onkel und meiner Tante gegessen.|Domenica abbiamo mangiato dagli zii.|No domingo almoçámos em casa dos meus tios.|В воскресенье мы обедали у моих дяди и тёти.|Duminică am mâncat la unchiul și mătușa mea.
Vimos una exposición muy bonita.|We saw a very nice exhibition.|Nous avons vu une très belle exposition.|Wir haben eine sehr schöne Ausstellung gesehen.|Abbiamo visto una mostra molto bella.|Vimos uma exposição muito bonita.|Мы видели очень красивую выставку.|Am văzut o expoziție foarte frumoasă.
Cuando vivía en Lima, caminaba mucho.|When I lived in Lima, I walked a lot.|Quand je vivais à Lima, je marchais beaucoup.|Als ich in Lima wohnte, bin ich viel gelaufen.|Quando vivevo a Lima, camminavo molto.|Quando vivia em Lima, caminhava muito.|Когда я жил в Лиме, я много ходил пешком.|Când locuiam la Lima, mergeam mult pe jos.
Me caí de la bicicleta y me lastimé.|I fell off my bike and got hurt.|Je suis tombé de vélo et je me suis fait mal.|Ich bin vom Fahrrad gefallen und habe mich verletzt.|Sono caduto dalla bicicletta e mi sono fatto male.|Caí da bicicleta e magoei-me.|Я упал с велосипеда и ушибся.|Am căzut de pe bicicletă și m-am lovit.
Antes vivíamos más cerca del mar.|We used to live closer to the sea.|Avant, nous habitions plus près de la mer.|Früher haben wir näher am Meer gewohnt.|Prima vivevamo più vicino al mare.|Antes vivíamos mais perto do mar.|Раньше мы жили ближе к морю.|Înainte locuiam mai aproape de mare.
`);

  /* 17 */
  moreS(17, `
Mañana voy a madrugar.|Tomorrow I'm going to get up early.|Demain, je vais me lever tôt.|Morgen stehe ich früh auf.|Domani mi alzerò presto.|Amanhã vou acordar cedo.|Завтра я встану рано.|Mâine mă voi trezi devreme.
Pienso cambiar de trabajo el próximo año.|I plan to change jobs next year.|Je pense changer de travail l'année prochaine.|Ich plane, nächstes Jahr den Job zu wechseln.|Penso di cambiare lavoro l'anno prossimo.|Penso mudar de emprego no próximo ano.|Я думаю сменить работу в следующем году.|Mă gândesc să-mi schimb serviciul anul viitor.
Esta noche me quedo en casa.|Tonight I'm staying home.|Ce soir, je reste à la maison.|Heute Abend bleibe ich zu Hause.|Stasera resto a casa.|Esta noite fico em casa.|Сегодня вечером я остаюсь дома.|Diseară rămân acasă.
Tal vez mañana haga sol.|Maybe it will be sunny tomorrow.|Peut-être qu'il y aura du soleil demain.|Vielleicht scheint morgen die Sonne.|Forse domani ci sarà il sole.|Talvez amanhã faça sol.|Может быть, завтра будет солнце.|Poate mâine va fi soare.
Nos vemos a las seis en la plaza.|See you at six in the square.|On se voit à dix-huit heures sur la place.|Wir sehen uns um sechs auf dem Platz.|Ci vediamo alle sei in piazza.|Vemo-nos às seis na praça.|Увидимся в шесть на площади.|Ne vedem la șase în piață.
Pronto voy a empezar un curso nuevo.|Soon I'm going to start a new course.|Bientôt, je vais commencer un nouveau cours.|Bald fange ich einen neuen Kurs an.|Presto inizierò un nuovo corso.|Em breve vou começar um curso novo.|Скоро я начну новый курс.|În curând voi începe un curs nou.
¿Quedamos el sábado por la tarde?|Shall we meet on Saturday afternoon?|On se voit samedi après-midi ?|Treffen wir uns Samstagnachmittag?|Ci vediamo sabato pomeriggio?|Combinamos para sábado à tarde?|Встретимся в субботу днём?|Ne vedem sâmbătă după-amiază?
Si tengo tiempo, te ayudo.|If I have time, I'll help you.|Si j'ai le temps, je t'aide.|Wenn ich Zeit habe, helfe ich dir.|Se ho tempo, ti aiuto.|Se tiver tempo, ajudo-te.|Если у меня будет время, я тебе помогу.|Dacă am timp, te ajut.
Dentro de poco vamos a ser tres en casa.|Soon there will be three of us at home.|Bientôt, nous serons trois à la maison.|Bald sind wir zu dritt zu Hause.|Presto saremo in tre a casa.|Em breve seremos três em casa.|Скоро нас дома будет трое.|În curând vom fi trei acasă.
Ojalá me den las vacaciones en julio.|I hope they give me my vacation in July.|J'espère qu'on me donnera mes vacances en juillet.|Hoffentlich bekomme ich im Juli Urlaub.|Spero che mi diano le ferie a luglio.|Oxalá me deem as férias em julho.|Надеюсь, мне дадут отпуск в июле.|Sper să-mi dea concediu în iulie.
Mañana te llamo con más detalles.|Tomorrow I'll call you with more details.|Demain, je t'appelle avec plus de détails.|Morgen rufe ich dich mit mehr Details an.|Domani ti chiamo con più dettagli.|Amanhã ligo-te com mais pormenores.|Завтра я позвоню тебе и расскажу подробнее.|Mâine te sun cu mai multe detalii.
Esta vez voy a llegar a tiempo.|This time I'm going to be on time.|Cette fois, je vais arriver à l'heure.|Diesmal komme ich pünktlich.|Questa volta arriverò in orario.|Desta vez vou chegar a tempo.|На этот раз я приду вовремя.|De data asta voi ajunge la timp.
`);

  /* 18 */
  moreS(18, `
Me alegra que hayas venido.|I'm glad you came.|Je suis content que tu sois venu.|Ich freue mich, dass du gekommen bist.|Mi fa piacere che tu sia venuto.|Fico contente por teres vindo.|Я рад, что ты пришёл.|Mă bucur că ai venit.
Estoy de acuerdo contigo.|I agree with you.|Je suis d'accord avec toi.|Ich stimme dir zu.|Sono d'accordo con te.|Concordo contigo.|Я с тобой согласен.|Sunt de acord cu tine.
Me parece una exageración.|It seems like an exaggeration to me.|Ça me semble exagéré.|Das kommt mir übertrieben vor.|Mi sembra un'esagerazione.|Parece-me um exagero.|Мне кажется, это преувеличение.|Mi se pare o exagerare.
Qué lástima que no puedas venir.|What a pity you can't come.|Dommage que tu ne puisses pas venir.|Schade, dass du nicht kommen kannst.|Peccato che tu non possa venire.|Que pena não poderes vir.|Жаль, что ты не можешь прийти.|Păcat că nu poți veni.
Tengo mucha curiosidad por saberlo.|I'm very curious to find out.|Je suis très curieux de le savoir.|Ich bin sehr gespannt, es zu erfahren.|Sono molto curioso di saperlo.|Tenho muita curiosidade em saber.|Мне очень любопытно это узнать.|Sunt foarte curios să aflu.
Me da igual, elige tú.|I don't mind, you choose.|Ça m'est égal, choisis toi.|Mir ist es egal, wähl du.|Per me è lo stesso, scegli tu.|Para mim é igual, escolhe tu.|Мне всё равно, выбирай ты.|Mi-e egal, alege tu.
Eso suena genial.|That sounds great.|Ça a l'air génial.|Das klingt großartig.|Suona benissimo.|Isso soa muito bem.|Звучит отлично.|Sună grozav.
Me aburre esta clase.|This class bores me.|Ce cours m'ennuie.|Dieser Unterricht langweilt mich.|Questa lezione mi annoia.|Acho esta aula aborrecida.|Мне скучно на этом уроке.|Mă plictisește ora asta.
Prefiero quedarme en casa.|I'd rather stay home.|Je préfère rester à la maison.|Ich bleibe lieber zu Hause.|Preferisco restare a casa.|Prefiro ficar em casa.|Я предпочитаю остаться дома.|Prefer să rămân acasă.
Estoy harto del ruido.|I'm fed up with the noise.|J'en ai assez du bruit.|Ich habe den Lärm satt.|Sono stufo del rumore.|Estou farto do barulho.|Я устал от шума.|M-am săturat de zgomot.
No me importa esperar un poco.|I don't mind waiting a bit.|Ça ne me dérange pas d'attendre un peu.|Es macht mir nichts aus, ein bisschen zu warten.|Non mi dispiace aspettare un po'.|Não me importo de esperar um pouco.|Я не против немного подождать.|Nu mă deranjează să aștept puțin.
Qué buena noticia, felicidades.|What good news, congratulations.|Quelle bonne nouvelle, félicitations.|Was für eine gute Nachricht, herzlichen Glückwunsch.|Che bella notizia, congratulazioni.|Que boa notícia, parabéns.|Какая хорошая новость, поздравляю.|Ce veste bună, felicitări.
`);

  /* 19 */
  moreS(19, `
Disculpe, ¿dónde queda la estación?|Excuse me, where is the station?|Excusez-moi, où est la gare ?|Entschuldigung, wo ist der Bahnhof?|Scusi, dov'è la stazione?|Desculpe, onde fica a estação?|Извините, где находится вокзал?|Scuzați, unde este gara?
¿Me puede indicar el camino?|Can you show me the way?|Pouvez-vous m'indiquer le chemin ?|Können Sie mir den Weg zeigen?|Può indicarmi la strada?|Pode indicar-me o caminho?|Вы не подскажете дорогу?|Îmi puteți arăta drumul?
No encuentro mi equipaje.|I can't find my luggage.|Je ne trouve pas mes bagages.|Ich finde mein Gepäck nicht.|Non trovo il mio bagaglio.|Não encontro a minha bagagem.|Я не могу найти свой багаж.|Nu-mi găsesc bagajul.
Mi tarjeta no funciona.|My card doesn't work.|Ma carte ne fonctionne pas.|Meine Karte funktioniert nicht.|La mia carta non funziona.|O meu cartão não funciona.|Моя карта не работает.|Cardul meu nu funcționează.
¿Alguien habla inglés aquí?|Does anyone here speak English?|Quelqu'un parle-t-il anglais ici ?|Spricht hier jemand Englisch?|Qualcuno qui parla inglese?|Alguém aqui fala inglês?|Здесь кто-нибудь говорит по-английски?|Vorbește cineva engleză aici?
Necesito un intérprete.|I need an interpreter.|J'ai besoin d'un interprète.|Ich brauche einen Dolmetscher.|Ho bisogno di un interprete.|Preciso de um intérprete.|Мне нужен переводчик.|Am nevoie de un interpret.
Se me cerró la puerta con la llave dentro.|The door closed with the key inside.|La porte s'est fermée avec la clé à l'intérieur.|Die Tür ist mit dem Schlüssel innen zugefallen.|La porta si è chiusa con la chiave dentro.|A porta fechou-se com a chave lá dentro.|Дверь захлопнулась, а ключ остался внутри.|Ușa s-a închis cu cheia înăuntru.
¿Puede llamar a un taxi, por favor?|Can you call a taxi, please?|Pouvez-vous appeler un taxi, s'il vous plaît ?|Können Sie bitte ein Taxi rufen?|Può chiamare un taxi, per favore?|Pode chamar um táxi, por favor?|Вы не могли бы вызвать такси?|Puteți chema un taxi, vă rog?
Me siento mal, necesito sentarme.|I feel unwell, I need to sit down.|Je ne me sens pas bien, je dois m'asseoir.|Mir ist schlecht, ich muss mich setzen.|Mi sento male, devo sedermi.|Sinto-me mal, preciso de me sentar.|Мне плохо, мне нужно сесть.|Mă simt rău, trebuie să mă așez.
El teléfono público no funciona.|The public phone doesn't work.|Le téléphone public ne fonctionne pas.|Das öffentliche Telefon funktioniert nicht.|Il telefono pubblico non funziona.|O telefone público não funciona.|Таксофон не работает.|Telefonul public nu funcționează.
¿Dónde puedo cargar el teléfono?|Where can I charge my phone?|Où puis-je recharger mon téléphone ?|Wo kann ich mein Handy aufladen?|Dove posso caricare il telefono?|Onde posso carregar o telemóvel?|Где можно зарядить телефон?|Unde pot încărca telefonul?
Gracias por su ayuda, es muy amable.|Thank you for your help, you are very kind.|Merci pour votre aide, vous êtes très aimable.|Danke für Ihre Hilfe, das ist sehr freundlich.|Grazie per il suo aiuto, è molto gentile.|Obrigado pela sua ajuda, é muito simpático.|Спасибо за помощь, вы очень любезны.|Mulțumesc pentru ajutor, sunteți foarte amabil.
`);

})();
