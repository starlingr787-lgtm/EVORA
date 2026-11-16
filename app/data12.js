/* Tercera ampliación, unidades 1-25 (A1, A2 y parte de B1): 6 palabras y 4 frases más por unidad. Formato: es|en|fr|de|it|pt|ru|ro.
   Escritas por Claude (palabras de uso diario, español neutro latinoamericano); sin revisión de hablantes nativos. */
(() => {
  const W = (ui, t) => addExtra(ui, "w", t), S = (ui, t) => addExtra(ui, "s", t);

  /* 0 Primeros saludos */
  W(0, `
Hasta mañana|See you tomorrow|À demain|Bis morgen|A domani|Até amanhã|До завтра|Pe mâine
No hay problema|No problem|Pas de problème|Kein Problem|Nessun problema|Sem problema|Без проблем|Nicio problemă
Un momento|Just a moment|Un instant|Einen Moment|Un attimo|Um momento|Одну минуту|O clipă
Buen provecho|Enjoy your meal|Bon appétit|Guten Appetit|Buon appetito|Bom apetite|Приятного аппетита|Poftă bună
Feliz Navidad|Merry Christmas|Joyeux Noël|Frohe Weihnachten|Buon Natale|Feliz Natal|С Рождеством|Crăciun fericit
Con gusto|With pleasure|Avec plaisir|Gern|Volentieri|Com prazer|С удовольствием|Cu drag
`);
  S(0, `
Gracias por todo, eres muy amable.|Thank you for everything, you're very kind.|Merci pour tout, tu es très gentil.|Danke für alles, du bist sehr nett.|Grazie di tutto, sei molto gentile.|Obrigado por tudo, és muito simpático.|Спасибо за всё, ты очень добрый.|Mulțumesc pentru tot, ești foarte amabil.
Un momento, por favor.|Just a moment, please.|Un instant, s'il vous plaît.|Einen Moment, bitte.|Un attimo, per favore.|Um momento, por favor.|Одну минуту, пожалуйста.|O clipă, vă rog.
¡Buen provecho a todos!|Enjoy your meal, everyone!|Bon appétit à tous !|Guten Appetit allen zusammen!|Buon appetito a tutti!|Bom apetite a todos!|Приятного аппетита всем!|Poftă bună tuturor!
No hay problema, con gusto te ayudo.|No problem, I'm happy to help you.|Pas de problème, je t'aide avec plaisir.|Kein Problem, ich helfe dir gern.|Nessun problema, ti aiuto volentieri.|Sem problema, ajudo-te com prazer.|Без проблем, я с удовольствием помогу.|Nicio problemă, te ajut cu drag.
`);

  /* 1 Presentaciones */
  W(1, `
Mujer|Woman|Femme|Frau|Donna|Mulher|Женщина|Femeie
Hombre|Man|Homme|Mann|Uomo|Homem|Мужчина|Bărbat
Joven|Young|Jeune|jung|Giovane|Jovem|Молодой|Tânăr
Jubilado|Retired|Retraité|im Ruhestand|In pensione|Reformado|Пенсионер|Pensionar
Abogado|Lawyer|Avocat|Anwalt|Avvocato|Advogado|Адвокат|Avocat
Arquitecto|Architect|Architecte|Architekt|Architetto|Arquiteto|Архитектор|Arhitect
`);
  S(1, `
Soy joven y vivo con mis padres.|I'm young and I live with my parents.|Je suis jeune et j'habite avec mes parents.|Ich bin jung und wohne bei meinen Eltern.|Sono giovane e vivo con i miei genitori.|Sou jovem e vivo com os meus pais.|Я молод и живу с родителями.|Sunt tânăr și locuiesc cu părinții mei.
Mi tío es abogado.|My uncle is a lawyer.|Mon oncle est avocat.|Mein Onkel ist Anwalt.|Mio zio è avvocato.|O meu tio é advogado.|Мой дядя — адвокат.|Unchiul meu este avocat.
Esa mujer es arquitecta.|That woman is an architect.|Cette femme est architecte.|Diese Frau ist Architektin.|Quella donna è architetta.|Aquela mulher é arquiteta.|Эта женщина — архитектор.|Femeia aceea este arhitectă.
Mi abuelo ya está jubilado.|My grandfather is already retired.|Mon grand-père est déjà à la retraite.|Mein Großvater ist schon im Ruhestand.|Mio nonno è già in pensione.|O meu avô já está reformado.|Мой дедушка уже на пенсии.|Bunicul meu este deja pensionar.
`);

  /* 2 Números */
  W(2, `
Trece|Thirteen|Treize|dreizehn|Tredici|Treze|Тринадцать|Treisprezece
Catorce|Fourteen|Quatorze|vierzehn|Quattordici|Catorze|Четырнадцать|Paisprezece
Setenta|Seventy|Soixante-dix|siebzig|Settanta|Setenta|Семьдесят|Șaptezeci
Noventa|Ninety|Quatre-vingt-dix|neunzig|Novanta|Noventa|Девяносто|Nouăzeci
Tercero|Third|Troisième|dritter|Terzo|Terceiro|Третий|Al treilea
Par|Pair|Paire|Paar|Paio|Par|Пара|Pereche
`);
  S(2, `
Tengo catorce años.|I'm fourteen years old.|J'ai quatorze ans.|Ich bin vierzehn Jahre alt.|Ho quattordici anni.|Tenho catorze anos.|Мне четырнадцать лет.|Am paisprezece ani.
Es la tercera vez que vengo.|It's the third time I've come.|C'est la troisième fois que je viens.|Ich komme zum dritten Mal.|È la terza volta che vengo.|É a terceira vez que venho.|Я прихожу в третий раз.|Este a treia oară când vin.
Necesito un par de zapatos.|I need a pair of shoes.|J'ai besoin d'une paire de chaussures.|Ich brauche ein Paar Schuhe.|Mi serve un paio di scarpe.|Preciso de um par de sapatos.|Мне нужна пара обуви.|Am nevoie de o pereche de pantofi.
Mi tía tiene setenta años.|My aunt is seventy years old.|Ma tante a soixante-dix ans.|Meine Tante ist siebzig Jahre alt.|Mia zia ha settant'anni.|A minha tia tem setenta anos.|Моей тёте семьдесят лет.|Mătușa mea are șaptezeci de ani.
`);

  /* 3 Familia */
  W(3, `
Hermanos|Siblings|Frères et sœurs|Geschwister|Fratelli|Irmãos|Братья и сёстры|Frați și surori
Hijos|Children|Enfants|Kinder|Figli|Filhos|Дети|Copii
Viudo|Widower|Veuf|Witwer|Vedovo|Viúvo|Вдовец|Văduv
Madrina|Godmother|Marraine|Patin|Madrina|Madrinha|Крёстная|Nașă
Padrino|Godfather|Parrain|Pate|Padrino|Padrinho|Крёстный|Naș
Novio|Boyfriend|Petit ami|Freund|Ragazzo|Namorado|Парень|Iubit
`);
  S(3, `
Somos tres hermanos en mi familia.|There are three siblings in my family.|Nous sommes trois frères et sœurs dans ma famille.|In meiner Familie sind wir drei Geschwister.|Nella mia famiglia siamo in tre fratelli.|Na minha família somos três irmãos.|В моей семье трое детей.|În familia mea suntem trei frați.
Mi madrina vive en otra ciudad.|My godmother lives in another city.|Ma marraine habite dans une autre ville.|Meine Patin wohnt in einer anderen Stadt.|La mia madrina vive in un'altra città.|A minha madrinha vive noutra cidade.|Моя крёстная живёт в другом городе.|Nașa mea locuiește în alt oraș.
Mi novio conoce a toda mi familia.|My boyfriend knows my whole family.|Mon petit ami connaît toute ma famille.|Mein Freund kennt meine ganze Familie.|Il mio ragazzo conosce tutta la mia famiglia.|O meu namorado conhece toda a minha família.|Мой парень знает всю мою семью.|Iubitul meu îi cunoaște pe toți din familia mea.
Mis hijos van a la escuela.|My children go to school.|Mes enfants vont à l'école.|Meine Kinder gehen zur Schule.|I miei figli vanno a scuola.|Os meus filhos vão à escola.|Мои дети ходят в школу.|Copiii mei merg la școală.
`);

  /* 4 Comida y bebida */
  W(4, `
Fresa|Strawberry|Fraise|Erdbeere|Fragola|Morango|Клубника|Căpșună
Naranja|Orange|Orange|Orange|Arancia|Laranja|Апельсин|Portocală
Plátano|Banana|Banane|Banane|Banana|Banana|Банан|Banană
Uva|Grape|Raisin|Traube|Uva|Uva|Виноград|Strugure
Limón|Lemon|Citron|Zitrone|Limone|Limão|Лимон|Lămâie
Zanahoria|Carrot|Carotte|Karotte|Carota|Cenoura|Морковь|Morcov
`);
  S(4, `
Me gusta el jugo de naranja.|I like orange juice.|J'aime le jus d'orange.|Ich mag Orangensaft.|Mi piace il succo d'arancia.|Gosto de sumo de laranja.|Я люблю апельсиновый сок.|Îmi place sucul de portocale.
Compro fresas en el mercado.|I buy strawberries at the market.|J'achète des fraises au marché.|Ich kaufe Erdbeeren auf dem Markt.|Compro le fragole al mercato.|Compro morangos no mercado.|Я покупаю клубнику на рынке.|Cumpăr căpșuni de la piață.
Pongo limón en el pescado.|I put lemon on the fish.|Je mets du citron sur le poisson.|Ich gebe Zitrone auf den Fisch.|Metto il limone sul pesce.|Ponho limão no peixe.|Я добавляю лимон к рыбе.|Pun lămâie pe pește.
Los niños comen plátano en el desayuno.|The children eat a banana for breakfast.|Les enfants mangent une banane au petit-déjeuner.|Die Kinder essen zum Frühstück eine Banane.|I bambini mangiano una banana a colazione.|As crianças comem banana ao pequeno-almoço.|Дети едят на завтрак банан.|Copiii mănâncă o banană la micul dejun.
`);

  /* 5 En el restaurante */
  W(5, `
Botella|Bottle|Bouteille|Flasche|Bottiglia|Garrafa|Бутылка|Sticlă
Mantel|Tablecloth|Nappe|Tischdecke|Tovaglia|Toalha de mesa|Скатерть|Față de masă
Pimienta|Pepper|Poivre|Pfeffer|Pepe|Pimenta|Перец|Piper
Aceite|Oil|Huile|Öl|Olio|Azeite|Масло растительное|Ulei
Vinagre|Vinegar|Vinaigre|Essig|Aceto|Vinagre|Уксус|Oțet
Mostaza|Mustard|Moutarde|Senf|Senape|Mostarda|Горчица|Muștar
`);
  S(5, `
Una botella de agua, por favor.|A bottle of water, please.|Une bouteille d'eau, s'il vous plaît.|Eine Flasche Wasser, bitte.|Una bottiglia d'acqua, per favore.|Uma garrafa de água, por favor.|Бутылку воды, пожалуйста.|O sticlă de apă, vă rog.
¿Me pasa la sal y la pimienta?|Could you pass me the salt and pepper?|Pouvez-vous me passer le sel et le poivre ?|Können Sie mir bitte Salz und Pfeffer reichen?|Mi passa il sale e il pepe?|Pode passar-me o sal e a pimenta?|Вы не передадите мне соль и перец?|Îmi dați sarea și piperul, vă rog?
La ensalada lleva aceite y vinagre.|The salad has oil and vinegar.|La salade est assaisonnée d'huile et de vinaigre.|Der Salat wird mit Öl und Essig angemacht.|L'insalata è condita con olio e aceto.|A salada leva azeite e vinagre.|Салат заправляют маслом и уксусом.|Salata se servește cu ulei și oțet.
Me gusta la hamburguesa con mostaza.|I like hamburgers with mustard.|J'aime le hamburger avec de la moutarde.|Ich mag Hamburger mit Senf.|Mi piace l'hamburger con la senape.|Gosto de hambúrguer com mostarda.|Я люблю гамбургер с горчицей.|Îmi place hamburgerul cu muștar.
`);

  /* 6 Viajes */
  W(6, `
Barco|Boat|Bateau|Schiff|Barca|Barco|Корабль|Navă
Puerto|Port|Port|Hafen|Porto|Porto|Порт|Port
Carretera|Road|Route|Landstraße|Strada statale|Estrada|Шоссе|Șosea
Gasolina|Petrol|Essence|Benzin|Benzina|Gasolina|Бензин|Benzină
Visitante|Visitor|Visiteur|Besucher|Visitatore|Visitante|Посетитель|Vizitator
Rumbo|Direction|Direction|Richtung|Direzione|Rumo|Курс|Direcție
`);
  S(6, `
El barco sale del puerto a las nueve.|The boat leaves the port at nine.|Le bateau quitte le port à neuf heures.|Das Schiff verlässt den Hafen um neun Uhr.|La barca lascia il porto alle nove.|O barco sai do porto às nove.|Корабль отправляется из порта в девять.|Nava pleacă din port la ora nouă.
Necesitamos gasolina antes de viajar.|We need petrol before travelling.|Nous avons besoin d'essence avant de partir.|Wir brauchen Benzin, bevor wir losfahren.|Ci serve benzina prima di partire.|Precisamos de gasolina antes de viajar.|Нам нужен бензин перед поездкой.|Avem nevoie de benzină înainte de plecare.
La carretera está cerrada por la nieve.|The road is closed because of the snow.|La route est fermée à cause de la neige.|Die Landstraße ist wegen des Schnees gesperrt.|La strada è chiusa per la neve.|A estrada está fechada por causa da neve.|Шоссе закрыто из-за снега.|Șoseaua este închisă din cauza zăpezii.
Muchos visitantes llegan en verano.|Many visitors arrive in summer.|Beaucoup de visiteurs arrivent en été.|Viele Besucher kommen im Sommer.|Molti visitatori arrivano in estate.|Muitos visitantes chegam no verão.|Летом приезжает много посетителей.|Mulți vizitatori vin vara.
`);

  /* 7 En la ciudad */
  W(7, `
Fuente|Fountain|Fontaine|Brunnen|Fontana|Fonte|Фонтан|Fântână
Estatua|Statue|Statue|Statue|Statua|Estátua|Статуя|Statuie
Estadio|Stadium|Stade|Stadion|Stadio|Estádio|Стадион|Stadion
Supermercado|Supermarket|Supermarché|Supermarkt|Supermercato|Supermercado|Супермаркет|Supermarket
Panadería|Bakery|Boulangerie|Bäckerei|Panetteria|Padaria|Пекарня|Brutărie
Gasolinera|Petrol station|Station-service|Tankstelle|Distributore di benzina|Bomba de gasolina|Заправка|Benzinărie
`);
  S(7, `
Hay una fuente en el centro de la plaza.|There is a fountain in the middle of the square.|Il y a une fontaine au milieu de la place.|Mitten auf dem Platz steht ein Brunnen.|C'è una fontana in mezzo alla piazza.|Há uma fonte no meio da praça.|Посреди площади есть фонтан.|În mijlocul pieței este o fântână.
Compro pan fresco en la panadería.|I buy fresh bread at the bakery.|J'achète du pain frais à la boulangerie.|Ich kaufe frisches Brot in der Bäckerei.|Compro il pane fresco in panetteria.|Compro pão fresco na padaria.|Я покупаю свежий хлеб в пекарне.|Cumpăr pâine proaspătă de la brutărie.
El estadio queda cerca del río.|The stadium is near the river.|Le stade est près de la rivière.|Das Stadion liegt in der Nähe des Flusses.|Lo stadio è vicino al fiume.|O estádio fica perto do rio.|Стадион находится рядом с рекой.|Stadionul este lângă râu.
Hay un supermercado grande en esta calle.|There is a big supermarket on this street.|Il y a un grand supermarché dans cette rue.|In dieser Straße gibt es einen großen Supermarkt.|C'è un grande supermercato in questa strada.|Há um supermercado grande nesta rua.|На этой улице есть большой супермаркет.|Pe această stradă este un supermarket mare.
`);

  /* 8 De compras */
  W(8, `
Caja|Checkout|Caisse|Kasse|Cassa|Caixa|Касса|Casă de marcat
Marca|Brand|Marque|Marke|Marca|Marca|Марка|Marcă
Devolver|To return|Rendre|zurückgeben|Restituire|Devolver|Возвращать|A returna
Probarse|To try on|Essayer|anprobieren|Provare|Experimentar|Примерять|A proba
Bolsillo|Pocket|Poche|Hosentasche|Tasca|Bolso|Карман|Buzunar
Moda|Fashion|Mode|Mode|Moda|Moda|Мода|Modă
`);
  S(8, `
Pago en la caja, por favor.|I'll pay at the checkout, please.|Je paie à la caisse, s'il vous plaît.|Ich zahle bitte an der Kasse.|Pago alla cassa, per favore.|Pago na caixa, por favor.|Я заплачу на кассе, пожалуйста.|Plătesc la casă, vă rog.
¿Puedo probarme estos pantalones?|Can I try on these trousers?|Puis-je essayer ce pantalon ?|Kann ich diese Hose anprobieren?|Posso provare questi pantaloni?|Posso experimentar estas calças?|Можно примерить эти брюки?|Pot proba acești pantaloni?
Quiero devolver esta camisa.|I want to return this shirt.|Je voudrais rendre cette chemise.|Ich möchte dieses Hemd zurückgeben.|Vorrei restituire questa camicia.|Quero devolver esta camisa.|Я хочу вернуть эту рубашку.|Vreau să returnez această cămașă.
Esta chaqueta tiene muchos bolsillos.|This jacket has a lot of pockets.|Cette veste a beaucoup de poches.|Diese Jacke hat viele Taschen.|Questa giacca ha molte tasche.|Este casaco tem muitos bolsos.|У этой куртки много карманов.|Această jachetă are multe buzunare.
`);

  /* 9 Días y horas */
  W(9, `
Amanecer|Sunrise|Lever du soleil|Sonnenaufgang|Alba|Nascer do sol|Рассвет|Răsărit
Atardecer|Sunset|Coucher du soleil|Sonnenuntergang|Tramonto|Pôr do sol|Закат|Apus
Cuarto de hora|Quarter of an hour|Quart d'heure|Viertelstunde|Quarto d'ora|Quarto de hora|Четверть часа|Un sfert de oră
Ahora|Now|Maintenant|jetzt|Adesso|Agora|Сейчас|Acum
Enseguida|Right away|Tout de suite|sofort|Subito|Já|Сразу|Imediat
Cada semana|Every week|Chaque semaine|jede Woche|Ogni settimana|Todas as semanas|Каждую неделю|În fiecare săptămână
`);
  S(9, `
El sol sale al amanecer.|The sun rises at dawn.|Le soleil se lève à l'aube.|Die Sonne geht bei Sonnenaufgang auf.|Il sole sorge all'alba.|O sol nasce ao amanhecer.|Солнце встаёт на рассвете.|Soarele răsare în zori.
Vamos a la playa al atardecer.|We go to the beach at sunset.|Nous allons à la plage au coucher du soleil.|Wir gehen bei Sonnenuntergang an den Strand.|Andiamo in spiaggia al tramonto.|Vamos à praia ao pôr do sol.|Мы идём на пляж на закате.|Mergem la plajă la apus.
Espérame un cuarto de hora.|Wait for me a quarter of an hour.|Attends-moi un quart d'heure.|Warte eine Viertelstunde auf mich.|Aspettami un quarto d'ora.|Espera-me um quarto de hora.|Подожди меня четверть часа.|Așteaptă-mă un sfert de oră.
Voy enseguida.|I'm coming right away.|J'arrive tout de suite.|Ich komme sofort.|Arrivo subito.|Já vou.|Я сейчас приду.|Vin imediat.
`);

  /* 10 Rutina diaria */
  W(10, `
Despertador|Alarm clock|Réveil|Wecker|Sveglia|Despertador|Будильник|Ceas deșteptător
Ducha|Shower|Douche|Dusche|Doccia|Duche|Душ|Duș
Toalla|Towel|Serviette de bain|Handtuch|Asciugamano|Toalha|Полотенце|Prosop
Jabón|Soap|Savon|Seife|Sapone|Sabonete|Мыло|Săpun
Cepillo|Brush|Brosse|Bürste|Spazzola|Escova|Щётка|Perie
Pijama|Pyjamas|Pyjama|Schlafanzug|Pigiama|Pijama|Пижама|Pijama
`);
  S(10, `
El despertador suena a las seis.|The alarm clock goes off at six.|Le réveil sonne à six heures.|Der Wecker klingelt um sechs Uhr.|La sveglia suona alle sei.|O despertador toca às seis.|Будильник звонит в шесть.|Ceasul deșteptător sună la ora șase.
Me ducho con agua tibia.|I shower with warm water.|Je me douche à l'eau tiède.|Ich dusche mit lauwarmem Wasser.|Faccio la doccia con acqua tiepida.|Tomo duche com água morna.|Я принимаю душ с тёплой водой.|Fac duș cu apă călduță.
Uso jabón y una toalla limpia.|I use soap and a clean towel.|J'utilise du savon et une serviette propre.|Ich benutze Seife und ein sauberes Handtuch.|Uso sapone e un asciugamano pulito.|Uso sabonete e uma toalha limpa.|Я пользуюсь мылом и чистым полотенцем.|Folosesc săpun și un prosop curat.
Por la noche me pongo el pijama.|At night I put on my pyjamas.|Le soir, je mets mon pyjama.|Abends ziehe ich meinen Schlafanzug an.|La sera mi metto il pigiama.|À noite visto o pijama.|Вечером я надеваю пижаму.|Seara îmi pun pijamaua.
`);

  /* 11 En casa */
  W(11, `
Escritorio|Desk|Bureau|Schreibtisch|Scrivania|Secretária|Письменный стол|Birou
Estante|Shelf|Étagère|Regal|Scaffale|Prateleira|Полка|Raft
Cajón|Drawer|Tiroir|Schublade|Cassetto|Gaveta|Ящик|Sertar
Enchufe|Socket|Prise|Steckdose|Presa|Tomada|Розетка|Priză
Bombilla|Light bulb|Ampoule|Glühbirne|Lampadina|Lâmpada|Лампочка|Bec
Mueble|Piece of furniture|Meuble|Möbelstück|Mobile|Móvel|Мебель|Mobilă
`);
  S(11, `
Trabajo en el escritorio de mi habitación.|I work at the desk in my room.|Je travaille au bureau de ma chambre.|Ich arbeite am Schreibtisch in meinem Zimmer.|Lavoro alla scrivania della mia camera.|Trabalho na secretária do meu quarto.|Я работаю за письменным столом в своей комнате.|Lucrez la biroul din camera mea.
Los libros están en el estante.|The books are on the shelf.|Les livres sont sur l'étagère.|Die Bücher stehen im Regal.|I libri sono sullo scaffale.|Os livros estão na prateleira.|Книги стоят на полке.|Cărțile sunt pe raft.
No hay un enchufe cerca de la cama.|There isn't a socket near the bed.|Il n'y a pas de prise près du lit.|Neben dem Bett gibt es keine Steckdose.|Non c'è una presa vicino al letto.|Não há uma tomada perto da cama.|Рядом с кроватью нет розетки.|Lângă pat nu este nicio priză.
Hay que cambiar la bombilla.|The light bulb needs changing.|Il faut changer l'ampoule.|Die Glühbirne muss gewechselt werden.|Bisogna cambiare la lampadina.|É preciso trocar a lâmpada.|Нужно заменить лампочку.|Trebuie schimbat becul.
`);

  /* 12 Salud */
  W(12, `
Dentista|Dentist|Dentiste|Zahnarzt|Dentista|Dentista|Стоматолог|Dentist
Vendaje|Bandage|Pansement|Verband|Benda|Ligadura|Повязка|Bandaj
Termómetro|Thermometer|Thermomètre|Thermometer|Termometro|Termómetro|Градусник|Termometru
Inyección|Injection|Piqûre|Spritze|Iniezione|Injeção|Укол|Injecție
Gripe|Flu|Grippe|Grippe|Influenza|Gripe|Грипп|Gripă
Dolor de cabeza|Headache|Mal de tête|Kopfschmerzen|Mal di testa|Dor de cabeça|Головная боль|Durere de cap
`);
  S(12, `
Tengo una cita con el dentista.|I have an appointment with the dentist.|J'ai rendez-vous chez le dentiste.|Ich habe einen Termin beim Zahnarzt.|Ho un appuntamento dal dentista.|Tenho uma consulta no dentista.|У меня приём у стоматолога.|Am o programare la dentist.
Me puse un vendaje en la mano.|I put a bandage on my hand.|Je me suis mis un pansement sur la main.|Ich habe mir einen Verband um die Hand gelegt.|Mi sono messo una benda sulla mano.|Pus uma ligadura na mão.|Я наложил повязку на руку.|Mi-am pus un bandaj pe mână.
Creo que tengo gripe.|I think I have the flu.|Je crois que j'ai la grippe.|Ich glaube, ich habe die Grippe.|Credo di avere l'influenza.|Acho que tenho gripe.|Кажется, у меня грипп.|Cred că am gripă.
Tengo dolor de cabeza y fiebre.|I have a headache and a fever.|J'ai mal à la tête et de la fièvre.|Ich habe Kopfschmerzen und Fieber.|Ho mal di testa e la febbre.|Tenho dor de cabeça e febre.|У меня головная боль и температура.|Am durere de cap și febră.
`);

  /* 13 Trabajo */
  W(13, `
Agenda|Diary|Agenda|Terminkalender|Agenda|Agenda|Ежедневник|Agendă
Carpeta|Folder|Dossier|Ordner|Cartella|Pasta|Папка|Dosar
Fotocopia|Photocopy|Photocopie|Kopie|Fotocopia|Fotocópia|Ксерокопия|Fotocopie
Sala de reuniones|Meeting room|Salle de réunion|Besprechungsraum|Sala riunioni|Sala de reuniões|Переговорная|Sală de ședințe
Aumento|Pay rise|Augmentation|Gehaltserhöhung|Aumento|Aumento|Повышение зарплаты|Mărire de salariu
Horas extra|Overtime|Heures supplémentaires|Überstunden|Straordinari|Horas extra|Сверхурочные|Ore suplimentare
`);
  S(13, `
Anoto las citas en mi agenda.|I write my appointments in my diary.|Je note mes rendez-vous dans mon agenda.|Ich schreibe meine Termine in meinen Kalender.|Annoto gli appuntamenti sulla mia agenda.|Anoto as consultas na minha agenda.|Я записываю встречи в ежедневник.|Îmi notez întâlnirile în agendă.
La reunión es en la sala grande.|The meeting is in the big room.|La réunion a lieu dans la grande salle.|Die Besprechung findet im großen Raum statt.|La riunione è nella sala grande.|A reunião é na sala grande.|Совещание пройдёт в большом зале.|Ședința are loc în sala mare.
¿Puede hacerme una fotocopia, por favor?|Could you make me a photocopy, please?|Pouvez-vous me faire une photocopie, s'il vous plaît ?|Können Sie mir bitte eine Kopie machen?|Può farmi una fotocopia, per favore?|Pode fazer-me uma fotocópia, por favor?|Вы не сделаете мне ксерокопию, пожалуйста?|Îmi puteți face o fotocopie, vă rog?
Pedí un aumento de sueldo.|I asked for a pay rise.|J'ai demandé une augmentation de salaire.|Ich habe um eine Gehaltserhöhung gebeten.|Ho chiesto un aumento di stipendio.|Pedi um aumento de salário.|Я попросил повысить мне зарплату.|Am cerut o mărire de salariu.
`);

  /* 14 El tiempo */
  W(14, `
Brisa|Breeze|Brise|Brise|Brezza|Brisa|Бриз|Briză
Granizo|Hail|Grêle|Hagel|Grandine|Granizo|Град|Grindină
Arcoíris|Rainbow|Arc-en-ciel|Regenbogen|Arcobaleno|Arco-íris|Радуга|Curcubeu
Charco|Puddle|Flaque|Pfütze|Pozzanghera|Poça|Лужа|Băltoacă
Bufanda|Scarf|Écharpe|Schal|Sciarpa|Cachecol|Шарф|Fular
Guantes|Gloves|Gants|Handschuhe|Guanti|Luvas|Перчатки|Mănuși
`);
  S(14, `
Hay una brisa suave en la playa.|There is a gentle breeze on the beach.|Il y a une douce brise sur la plage.|Am Strand weht eine sanfte Brise.|C'è una leggera brezza in spiaggia.|Há uma brisa suave na praia.|На пляже дует лёгкий бриз.|Pe plajă bate o briză ușoară.
Después de la lluvia salió un arcoíris.|After the rain a rainbow appeared.|Après la pluie, un arc-en-ciel est apparu.|Nach dem Regen erschien ein Regenbogen.|Dopo la pioggia è comparso un arcobaleno.|Depois da chuva apareceu um arco-íris.|После дождя появилась радуга.|După ploaie a apărut un curcubeu.
Cayó granizo y hubo muchos charcos.|Hail fell and there were lots of puddles.|Il a grêlé et il y avait beaucoup de flaques.|Es hagelte und es gab viele Pfützen.|È caduta la grandine e c'erano molte pozzanghere.|Caiu granizo e havia muitas poças.|Пошёл град, и образовалось много луж.|A căzut grindină și au apărut multe băltoace.
Hace frío, ponte la bufanda y los guantes.|It's cold, put on your scarf and gloves.|Il fait froid, mets ton écharpe et tes gants.|Es ist kalt, zieh Schal und Handschuhe an.|Fa freddo, mettiti la sciarpa e i guanti.|Está frio, põe o cachecol e as luvas.|Холодно, надень шарф и перчатки.|Este frig, pune-ți fularul și mănușile.
`);

  /* 15 Ocio */
  W(15, `
Juego de mesa|Board game|Jeu de société|Brettspiel|Gioco da tavolo|Jogo de tabuleiro|Настольная игра|Joc de societate
Ajedrez|Chess|Échecs|Schach|Scacchi|Xadrez|Шахматы|Șah
Pelota|Ball|Ballon|Ball|Palla|Bola|Мяч|Minge
Patinar|To skate|Patiner|Schlittschuh laufen|Pattinare|Patinar|Кататься на коньках|A patina
Esquiar|To ski|Skier|Ski fahren|Sciare|Esquiar|Кататься на лыжах|A schia
Revista|Magazine|Magazine|Zeitschrift|Rivista|Revista|Журнал|Revistă
`);
  S(15, `
Los domingos jugamos ajedrez en casa.|On Sundays we play chess at home.|Le dimanche, nous jouons aux échecs à la maison.|Sonntags spielen wir zu Hause Schach.|La domenica giochiamo a scacchi a casa.|Aos domingos jogamos xadrez em casa.|По воскресеньям мы играем дома в шахматы.|Duminica jucăm șah acasă.
Me gusta patinar en invierno.|I like skating in winter.|J'aime patiner en hiver.|Im Winter laufe ich gern Schlittschuh.|Mi piace pattinare in inverno.|Gosto de patinar no inverno.|Зимой я люблю кататься на коньках.|Îmi place să patinez iarna.
Los niños juegan con la pelota en el parque.|The children play with the ball in the park.|Les enfants jouent au ballon dans le parc.|Die Kinder spielen im Park mit dem Ball.|I bambini giocano con la palla nel parco.|As crianças brincam com a bola no parque.|Дети играют в парке с мячом.|Copiii se joacă cu mingea în parc.
Leo una revista cada semana.|I read a magazine every week.|Je lis un magazine chaque semaine.|Ich lese jede Woche eine Zeitschrift.|Leggo una rivista ogni settimana.|Leio uma revista todas as semanas.|Я читаю журнал каждую неделю.|Citesc o revistă în fiecare săptămână.
`);

  /* 16 Contar el pasado */
  W(16, `
Hace una semana|A week ago|Il y a une semaine|vor einer Woche|Una settimana fa|Há uma semana|Неделю назад|Acum o săptămână
Ayer por la tarde|Yesterday afternoon|Hier après-midi|gestern Nachmittag|Ieri pomeriggio|Ontem à tarde|Вчера днём|Ieri după-amiază
De niño|As a child|Enfant|als Kind|Da bambino|em criança|В детстве|Când eram copil
Hace poco|Recently|Il y a peu|vor Kurzem|Poco fa|Há pouco|Недавно|De curând
Una vez|Once|Une fois|einmal|Una volta|Uma vez|Однажды|Odată
Desde entonces|Since then|Depuis|seitdem|Da allora|Desde então|С тех пор|Din acel moment
`);
  S(16, `
De niño jugaba en la calle.|As a child I played in the street.|Enfant, je jouais dans la rue.|Als Kind habe ich auf der Straße gespielt.|Da bambino giocavo in strada.|Em criança brincava na rua.|В детстве я играл на улице.|Când eram copil mă jucam pe stradă.
Una vez perdí las llaves en el metro.|Once I lost my keys on the underground.|Une fois, j'ai perdu mes clés dans le métro.|Einmal habe ich meine Schlüssel in der U-Bahn verloren.|Una volta ho perso le chiavi in metropolitana.|Uma vez perdi as chaves no metro.|Однажды я потерял ключи в метро.|Odată mi-am pierdut cheile în metrou.
Hace una semana conocí a tu hermano.|A week ago I met your brother.|Il y a une semaine, j'ai rencontré ton frère.|Vor einer Woche habe ich deinen Bruder kennengelernt.|Una settimana fa ho conosciuto tuo fratello.|Há uma semana conheci o teu irmão.|Неделю назад я познакомился с твоим братом.|Acum o săptămână l-am cunoscut pe fratele tău.
Desde entonces somos buenos amigos.|Since then we've been good friends.|Depuis, nous sommes de bons amis.|Seitdem sind wir gute Freunde.|Da allora siamo buoni amici.|Desde então somos bons amigos.|С тех пор мы хорошие друзья.|Din acel moment suntem buni prieteni.
`);

  /* 17 Planes de futuro */
  W(17, `
Algún día|Someday|Un jour|eines Tages|Un giorno|Um dia|Когда-нибудь|Într-o zi
Pasado mañana|The day after tomorrow|Après-demain|übermorgen|Dopodomani|Depois de amanhã|Послезавтра|Poimâine
Sin duda|Without a doubt|Sans aucun doute|ohne Zweifel|Senza dubbio|Sem dúvida|Без сомнения|Fără îndoială
Por si acaso|Just in case|Au cas où|für alle Fälle|Per ogni evenienza|Por precaução|На всякий случай|Pentru orice eventualitate
Tal vez|Perhaps|Peut-être bien|womöglich|Magari|Quiçá|Пожалуй|Poate că
Cuanto antes|As soon as possible|Le plus tôt possible|so bald wie möglich|Il prima possibile|O mais depressa possível|Как можно скорее|Cât mai curând
`);
  S(17, `
Pasado mañana tengo una entrevista.|The day after tomorrow I have an interview.|Après-demain, j'ai un entretien.|Übermorgen habe ich ein Vorstellungsgespräch.|Dopodomani ho un colloquio.|Depois de amanhã tenho uma entrevista.|Послезавтра у меня собеседование.|Poimâine am un interviu.
Algún día voy a conocer Japón.|Someday I'm going to visit Japan.|Un jour, j'irai au Japon.|Eines Tages werde ich Japan besuchen.|Un giorno visiterò il Giappone.|Um dia vou conhecer o Japão.|Когда-нибудь я побываю в Японии.|Într-o zi voi vizita Japonia.
Llevo un paraguas por si acaso.|I'm taking an umbrella just in case.|J'emporte un parapluie au cas où.|Ich nehme für alle Fälle einen Regenschirm mit.|Porto un ombrello per ogni evenienza.|Levo um guarda-chuva por precaução.|Я беру зонт на всякий случай.|Iau o umbrelă pentru orice eventualitate.
Quiero terminar esto cuanto antes.|I want to finish this as soon as possible.|Je veux terminer cela le plus tôt possible.|Ich möchte das so bald wie möglich beenden.|Voglio finire questo il prima possibile.|Quero terminar isto o mais depressa possível.|Я хочу закончить это как можно скорее.|Vreau să termin asta cât mai curând.
`);

  /* 18 Opiniones */
  W(18, `
Confundido|Confused|Confus|verwirrt|Confuso|Confuso|Растерянный|Confuz
Raro|Strange|Bizarre|seltsam|Strano|Estranho|Странный|Ciudat
Útil|Useful|Utile|nützlich|Utile|Útil|Полезный|Util
Increíble|Incredible|Incroyable|unglaublich|Incredibile|Incrível|Невероятный|Incredibil
Genial|Great|Génial|großartig|Fantastico|Ótimo|Классный|Grozav
Terrible|Terrible|Terrible|schrecklich|Terribile|Terrível|Ужасный|Groaznic
`);
  S(18, `
Me parece raro que no conteste.|It seems strange to me that he doesn't answer.|Je trouve bizarre qu'il ne réponde pas.|Ich finde es seltsam, dass er nicht antwortet.|Mi sembra strano che non risponda.|Parece-me estranho que ele não responda.|Мне кажется странным, что он не отвечает.|Mi se pare ciudat că nu răspunde.
Esta aplicación es muy útil.|This app is very useful.|Cette application est très utile.|Diese App ist sehr nützlich.|Questa app è molto utile.|Esta aplicação é muito útil.|Это приложение очень полезное.|Această aplicație este foarte utilă.
El concierto fue increíble.|The concert was incredible.|Le concert était incroyable.|Das Konzert war unglaublich.|Il concerto è stato incredibile.|O concerto foi incrível.|Концерт был невероятным.|Concertul a fost incredibil.
La comida de ese lugar es terrible.|The food at that place is terrible.|La nourriture de cet endroit est terrible.|Das Essen an diesem Ort ist schrecklich.|Il cibo di quel posto è terribile.|A comida desse sítio é terrível.|Еда в том месте ужасная.|Mâncarea din locul acela este groaznică.
`);

  /* 19 Pedir ayuda */
  W(19, `
Linterna|Torch|Lampe de poche|Taschenlampe|Torcia|Lanterna|Фонарик|Lanternă
Extintor|Fire extinguisher|Extincteur|Feuerlöscher|Estintore|Extintor|Огнетушитель|Extinctor
Daño|Damage|Dommage|Schaden|Danno|Dano|Ущерб|Pagubă
Pérdida|Loss|Perte|Verlust|Perdita|Perda|Потеря|Pierdere
Alarma|Alarm|Alarme|Alarm|Allarme|Alarme|Сигнализация|Alarmă
Sirena|Siren|Sirène|Sirene|Sirena|Sirene|Сирена|Sirenă
`);
  S(19, `
Se fue la luz, necesito una linterna.|The power went out, I need a torch.|Il y a une panne de courant, j'ai besoin d'une lampe de poche.|Der Strom ist ausgefallen, ich brauche eine Taschenlampe.|È andata via la luce, mi serve una torcia.|Foi-se a luz, preciso de uma lanterna.|Отключили свет, мне нужен фонарик.|S-a întrerupt curentul, am nevoie de o lanternă.
Oímos la sirena de la ambulancia.|We heard the ambulance siren.|Nous avons entendu la sirène de l'ambulance.|Wir hörten die Sirene des Krankenwagens.|Abbiamo sentito la sirena dell'ambulanza.|Ouvimos a sirene da ambulância.|Мы услышали сирену скорой помощи.|Am auzit sirena ambulanței.
Hay un extintor junto a la puerta.|There is a fire extinguisher next to the door.|Il y a un extincteur à côté de la porte.|Neben der Tür hängt ein Feuerlöscher.|C'è un estintore vicino alla porta.|Há um extintor junto à porta.|У двери есть огнетушитель.|Lângă ușă este un extinctor.
La alarma suena cuando hay peligro.|The alarm sounds when there is danger.|L'alarme sonne quand il y a un danger.|Der Alarm ertönt bei Gefahr.|L'allarme suona quando c'è pericolo.|O alarme toca quando há perigo.|Сигнализация срабатывает при опасности.|Alarma sună atunci când este pericol.
`);

  /* 20 Reservas y viajes */
  W(20, `
Cancelación|Cancellation|Annulation|Stornierung|Annullamento|Cancelamento|Отмена|Anulare
Tarjeta de embarque|Boarding pass|Carte d'embarquement|Bordkarte|Carta d'imbarco|Cartão de embarque|Посадочный талон|Card de îmbarcare
Sala de espera|Waiting room|Salle d'attente|Wartezimmer|Sala d'attesa|Sala de espera|Зал ожидания|Sală de așteptare
Cinturón de seguridad|Seat belt|Ceinture de sécurité|Sicherheitsgurt|Cintura di sicurezza|Cinto de segurança|Ремень безопасности|Centură de siguranță
Turbulencia|Turbulence|Turbulences|Turbulenzen|Turbolenza|Turbulência|Турбулентность|Turbulență
Aterrizar|To land|Atterrir|landen|Atterrare|Aterrar|Приземляться|A ateriza
`);
  S(20, `
Por favor, abróchense el cinturón de seguridad.|Please fasten your seat belts.|Veuillez attacher votre ceinture de sécurité.|Bitte legen Sie Ihren Sicherheitsgurt an.|Allacciate le cinture di sicurezza, per favore.|Por favor, apertem o cinto de segurança.|Пожалуйста, пристегните ремни безопасности.|Vă rugăm să vă puneți centurile de siguranță.
El avión va a aterrizar en diez minutos.|The plane will land in ten minutes.|L'avion va atterrir dans dix minutes.|Das Flugzeug landet in zehn Minuten.|L'aereo atterrerà tra dieci minuti.|O avião vai aterrar dentro de dez minutos.|Самолёт приземлится через десять минут.|Avionul va ateriza în zece minute.
Espero en la sala de espera.|I'm waiting in the waiting room.|J'attends dans la salle d'attente.|Ich warte im Wartebereich.|Aspetto nella sala d'attesa.|Espero na sala de espera.|Я жду в зале ожидания.|Aștept în sala de așteptare.
Tengo mi tarjeta de embarque en el celular.|I have my boarding pass on my phone.|J'ai ma carte d'embarquement sur mon téléphone.|Meine Bordkarte habe ich auf dem Handy.|Ho la carta d'imbarco sul cellulare.|Tenho o cartão de embarque no telemóvel.|Мой посадочный талон у меня в телефоне.|Am cardul de îmbarcare pe telefon.
`);

  /* 21 Estudios */
  W(21, `
Tesis|Thesis|Thèse|Abschlussarbeit|Tesi|Tese|Диссертация|Teză
Doctorado|Doctorate|Doctorat|Doktorat|Dottorato|Doutoramento|Докторантура|Doctorat
Seminario|Seminar|Séminaire|Seminar|Seminario|Seminário|Семинар|Seminar
Alumno|Pupil|Élève|Schüler|Alunno|Aluno|Ученик|Elev
Pregunta|Question|Question|Frage|Domanda|Pergunta|Вопрос|Întrebare
Respuesta|Answer|Réponse|Antwort|Risposta|Resposta|Ответ|Răspuns
`);
  S(21, `
Estoy escribiendo mi tesis.|I'm writing my thesis.|J'écris ma thèse.|Ich schreibe gerade meine Abschlussarbeit.|Sto scrivendo la mia tesi.|Estou a escrever a minha tese.|Я пишу диссертацию.|Îmi scriu teza.
El alumno levantó la mano para preguntar.|The pupil raised his hand to ask a question.|L'élève a levé la main pour poser une question.|Der Schüler hob die Hand, um eine Frage zu stellen.|L'alunno ha alzato la mano per fare una domanda.|O aluno levantou a mão para perguntar.|Ученик поднял руку, чтобы задать вопрос.|Elevul a ridicat mâna ca să întrebe.
No sé la respuesta a esa pregunta.|I don't know the answer to that question.|Je ne connais pas la réponse à cette question.|Ich kenne die Antwort auf diese Frage nicht.|Non so la risposta a questa domanda.|Não sei a resposta a essa pergunta.|Я не знаю ответа на этот вопрос.|Nu știu răspunsul la această întrebare.
Mañana hay un seminario en la universidad.|Tomorrow there's a seminar at the university.|Demain, il y a un séminaire à l'université.|Morgen gibt es ein Seminar an der Universität.|Domani c'è un seminario all'università.|Amanhã há um seminário na universidade.|Завтра в университете проходит семинар.|Mâine este un seminar la universitate.
`);

  /* 22 Tecnología y medios */
  W(22, `
Perfil|Profile|Profil|Profil|Profilo|Perfil|Профиль|Profil
Contenido|Content|Contenu|Inhalt|Contenuto|Conteúdo|Контент|Conținut
Navegador|Browser|Navigateur|Browser|Browser|Navegador|Браузер|Browser
Pestaña|Tab|Onglet|Tab|Scheda|Separador|Вкладка|Filă
Copia de seguridad|Backup|Sauvegarde|Datensicherung|Backup|Cópia de segurança|Резервная копия|Copie de rezervă
Sitio web|Website|Site web|Webseite|Sito web|Sítio web|Веб-сайт|Site web
`);
  S(22, `
Abro el sitio web en el navegador.|I open the website in the browser.|J'ouvre le site web dans le navigateur.|Ich öffne die Webseite im Browser.|Apro il sito web nel browser.|Abro o sítio web no navegador.|Я открываю сайт в браузере.|Deschid site-ul în browser.
Tengo muchas pestañas abiertas.|I have lots of tabs open.|J'ai beaucoup d'onglets ouverts.|Ich habe viele Tabs geöffnet.|Ho molte schede aperte.|Tenho muitos separadores abertos.|У меня открыто много вкладок.|Am multe file deschise.
Hago una copia de seguridad cada mes.|I make a backup every month.|Je fais une sauvegarde chaque mois.|Ich mache jeden Monat eine Datensicherung.|Faccio un backup ogni mese.|Faço uma cópia de segurança todos os meses.|Я делаю резервную копию каждый месяц.|Fac o copie de rezervă în fiecare lună.
Cambié la foto de mi perfil.|I changed my profile photo.|J'ai changé la photo de mon profil.|Ich habe mein Profilbild geändert.|Ho cambiato la foto del mio profilo.|Mudei a foto do meu perfil.|Я поменял фото в своём профиле.|Mi-am schimbat poza de profil.
`);

  /* 23 Hábitos saludables */
  W(23, `
Estiramiento|Stretching|Étirement|Dehnübung|Allungamento|Alongamento|Растяжка|Întindere
Resistencia|Stamina|Endurance|Kondition|Resistenza|Resistência|Выносливость|Rezistență
Postura|Posture|Posture|Haltung|Postura|Postura|Осанка|Postură
Sudar|To sweat|Transpirer|schwitzen|Sudare|Suar|Потеть|A transpira
Masaje|Massage|Massage|Massage|Massaggio|Massagem|Массаж|Masaj
Aire libre|Outdoors|Plein air|im Freien|All'aperto|Ao ar livre|На свежем воздухе|În aer liber
`);
  S(23, `
Hago estiramientos antes de correr.|I stretch before running.|Je m'étire avant de courir.|Ich dehne mich, bevor ich laufe.|Faccio allungamento prima di correre.|Faço alongamentos antes de correr.|Перед бегом я делаю растяжку.|Fac întinderi înainte să alerg.
Me gusta hacer ejercicio al aire libre.|I like exercising outdoors.|J'aime faire de l'exercice en plein air.|Ich treibe gern Sport im Freien.|Mi piace fare esercizio all'aperto.|Gosto de fazer exercício ao ar livre.|Мне нравится заниматься спортом на свежем воздухе.|Îmi place să fac mișcare în aer liber.
Una buena postura evita el dolor de espalda.|Good posture prevents back pain.|Une bonne posture évite les maux de dos.|Eine gute Haltung beugt Rückenschmerzen vor.|Una buona postura evita il mal di schiena.|Uma boa postura evita as dores nas costas.|Правильная осанка предотвращает боль в спине.|O postură bună previne durerile de spate.
Un masaje ayuda a relajar las piernas.|A massage helps relax the legs.|Un massage aide à détendre les jambes.|Eine Massage hilft, die Beine zu entspannen.|Un massaggio aiuta a rilassare le gambe.|Uma massagem ajuda a relaxar as pernas.|Массаж помогает расслабить ноги.|Un masaj ajută la relaxarea picioarelor.
`);

  /* 24 Medio ambiente */
  W(24, `
Selva|Jungle|Jungle|Dschungel|Giungla|Selva|Джунгли|Junglă
Desierto|Desert|Désert|Wüste|Deserto|Deserto|Пустыня|Deșert
Isla|Island|Île|Insel|Isola|Ilha|Остров|Insulă
Volcán|Volcano|Volcan|Vulkan|Vulcano|Vulcão|Вулкан|Vulcan
Océano|Ocean|Océan|Ozean|Oceano|Oceano|Океан|Ocean
Paisaje|Landscape|Paysage|Landschaft|Paesaggio|Paisagem|Пейзаж|Peisaj
`);
  S(24, `
En la selva hay muchos animales.|There are lots of animals in the jungle.|Il y a beaucoup d'animaux dans la jungle.|Im Dschungel gibt es viele Tiere.|Nella giungla ci sono molti animali.|Na selva há muitos animais.|В джунглях живёт много животных.|În junglă sunt mulți animale.
El desierto es muy seco y caluroso.|The desert is very dry and hot.|Le désert est très sec et chaud.|Die Wüste ist sehr trocken und heiß.|Il deserto è molto secco e caldo.|O deserto é muito seco e quente.|Пустыня очень сухая и жаркая.|Deșertul este foarte uscat și fierbinte.
Vivimos en una isla pequeña.|We live on a small island.|Nous vivons sur une petite île.|Wir leben auf einer kleinen Insel.|Viviamo su una piccola isola.|Vivemos numa ilha pequena.|Мы живём на маленьком острове.|Locuim pe o insulă mică.
Desde la montaña se ve un paisaje precioso.|From the mountain you can see a beautiful landscape.|De la montagne, on voit un magnifique paysage.|Vom Berg aus sieht man eine wunderschöne Landschaft.|Dalla montagna si vede un paesaggio bellissimo.|Da montanha vê-se uma paisagem linda.|С горы открывается прекрасный пейзаж.|De pe munte se vede un peisaj frumos.
`);
})();
