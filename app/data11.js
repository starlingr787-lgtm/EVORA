/* Ampliación de las sesiones 1-3 (A1, A2, B1): 8 palabras y 5 frases más por unidad (llegan a 28 y 17).
   Se añaden AL FINAL de cada unidad, así las claves de audio anteriores no cambian. Formato: es|en|fr|de|it|pt|ru|ro.
   Escritas por Claude y revisadas con una comprobación cruzada en rumano (DeepL); faltan hablantes nativos. */
(() => {
  const W = (ui, t) => addExtra(ui, "w", t), S = (ui, t) => addExtra(ui, "s", t);

  /* 0 Primeros saludos */
  W(0, `
Encantado|Pleased to meet you|Enchanté|Angenehm|Piacere|Encantado|Очень приятно|Încântat
Igualmente|Likewise|Pareillement|Gleichfalls|Altrettanto|Igualmente|Взаимно|Asemenea
Cuídate|Take care|Prends soin de toi|Pass auf dich auf|Abbi cura di te|Cuida-te|Береги себя|Ai grijă de tine
Buen viaje|Have a good trip|Bon voyage|Gute Reise|Buon viaggio|Boa viagem|Счастливого пути|Drum bun
Feliz cumpleaños|Happy birthday|Joyeux anniversaire|Alles Gute zum Geburtstag|Buon compleanno|Feliz aniversário|С днём рождения|La mulți ani
Lo siento|I'm sorry|Je suis désolé|Es tut mir leid|Mi dispiace|Lamento|Мне жаль|Îmi pare rău
Claro|Of course|Bien sûr|Natürlich|Certo|Claro|Конечно|Desigur
Qué tal|How's it going|Ça va|Wie läuft's|Come va|Como vai|Как дела|Cum merge
`);
  S(0, `
Es un placer conocerte.|It's a pleasure to meet you.|C'est un plaisir de te rencontrer.|Es ist schön, dich kennenzulernen.|È un piacere conoscerti.|É um prazer conhecer-te.|Рад с тобой познакомиться.|Mă bucur să te cunosc.
Buenos días, ¿cómo dormiste?|Good morning, how did you sleep?|Bonjour, as-tu bien dormi ?|Guten Morgen, wie hast du geschlafen?|Buongiorno, come hai dormito?|Bom dia, dormiste bem?|Доброе утро, как ты спал?|Bună dimineața, cum ai dormit?
Lo siento mucho.|I'm very sorry.|Je suis vraiment désolé.|Es tut mir sehr leid.|Mi dispiace molto.|Lamento muito.|Мне очень жаль.|Îmi pare foarte rău.
Buen viaje, escríbeme cuando llegues.|Have a good trip, write to me when you arrive.|Bon voyage, écris-moi quand tu arrives.|Gute Reise, schreib mir, wenn du ankommst.|Buon viaggio, scrivimi quando arrivi.|Boa viagem, escreve-me quando chegares.|Счастливого пути, напиши мне, когда приедешь.|Drum bun, scrie-mi când ajungi.
Feliz cumpleaños, te deseo lo mejor.|Happy birthday, I wish you all the best.|Joyeux anniversaire, je te souhaite le meilleur.|Alles Gute zum Geburtstag, ich wünsche dir das Beste.|Buon compleanno, ti auguro il meglio.|Feliz aniversário, desejo-te o melhor.|С днём рождения, желаю тебе всего наилучшего.|La mulți ani, îți doresc tot ce e mai bun.
`);

  /* 1 Presentaciones */
  W(1, `
Casado|Married|Marié|verheiratet|Sposato|Casado|Женатый|Căsătorit
Nacionalidad|Nationality|Nationalité|Staatsangehörigkeit|Nazionalità|Nacionalidade|Национальность|Naționalitate
Dirección|Address|Adresse|Adresse|Indirizzo|Morada|Адрес|Adresă
Teléfono|Phone|Téléphone|Telefon|Telefono|Telefone|Телефон|Telefon
Ingeniero|Engineer|Ingénieur|Ingenieur|Ingegnere|Engenheiro|Инженер|Inginer
Enfermera|Nurse|Infirmière|Krankenschwester|Infermiera|Enfermeira|Медсестра|Asistentă medicală
Cocinero|Cook|Cuisinier|Koch|Cuoco|Cozinheiro|Повар|Bucătar
Correo electrónico|Email address|Adresse e-mail|E-Mail-Adresse|Indirizzo email|Endereço de e-mail|Электронная почта|Adresă de e-mail
`);
  S(1, `
Encantada de conocerte.|Pleased to meet you.|Enchantée de te rencontrer.|Schön, dich kennenzulernen.|Piacere di conoscerti.|Prazer em conhecer-te.|Рада с тобой познакомиться.|Încântată să te cunosc.
¿Cuál es tu número de teléfono?|What is your phone number?|Quel est ton numéro de téléphone ?|Wie ist deine Telefonnummer?|Qual è il tuo numero di telefono?|Qual é o teu número de telefone?|Какой у тебя номер телефона?|Care este numărul tău de telefon?
Mi dirección es calle Sol número cinco.|My address is five Sun Street.|Mon adresse est cinq rue du Soleil.|Meine Adresse ist Sonnenstraße fünf.|Il mio indirizzo è via del Sole numero cinque.|A minha morada é rua do Sol, número cinco.|Мой адрес — улица Солнечная, дом пять.|Adresa mea este strada Soarelui, numărul cinci.
Mi padre es ingeniero.|My father is an engineer.|Mon père est ingénieur.|Mein Vater ist Ingenieur.|Mio padre è ingegnere.|O meu pai é engenheiro.|Мой отец — инженер.|Tatăl meu este inginer.
Estoy casado y tengo una hija.|I'm married and I have a daughter.|Je suis marié et j'ai une fille.|Ich bin verheiratet und habe eine Tochter.|Sono sposato e ho una figlia.|Sou casado e tenho uma filha.|Я женат, у меня есть дочь.|Sunt căsătorit și am o fiică.
`);

  /* 2 Números */
  W(2, `
Once|Eleven|Onze|elf|Undici|Onze|Одиннадцать|Unsprezece
Doce|Twelve|Douze|zwölf|Dodici|Doze|Двенадцать|Doisprezece
Cuarenta|Forty|Quarante|vierzig|Quaranta|Quarenta|Сорок|Patruzeci
Sesenta|Sixty|Soixante|sechzig|Sessanta|Sessenta|Шестьдесят|Șaizeci
Ochenta|Eighty|Quatre-vingts|achtzig|Ottanta|Oitenta|Восемьдесят|Optzeci
Millón|Million|Million|Million|Milione|Milhão|Миллион|Milion
Segundo|Second|Deuxième|zweiter|Secondo|Segundo|Второй|Al doilea
Doble|Double|Double|doppelt|Doppio|Duplo|Двойной|Dublu
`);
  S(2, `
Hay doce huevos en la caja.|There are twelve eggs in the box.|Il y a douze œufs dans la boîte.|In der Schachtel sind zwölf Eier.|Ci sono dodici uova nella scatola.|Há doze ovos na caixa.|В коробке двенадцать яиц.|În cutie sunt douăsprezece ouă.
Mi abuelo tiene ochenta años.|My grandfather is eighty years old.|Mon grand-père a quatre-vingts ans.|Mein Großvater ist achtzig Jahre alt.|Mio nonno ha ottant'anni.|O meu avô tem oitenta anos.|Моему дедушке восемьдесят лет.|Bunicul meu are optzeci de ani.
Es mi segundo viaje a la playa.|It's my second trip to the beach.|C'est mon deuxième voyage à la plage.|Das ist meine zweite Reise an den Strand.|È il mio secondo viaggio al mare.|É a minha segunda viagem à praia.|Это моя вторая поездка на пляж.|Este a doua mea călătorie la plajă.
La ciudad tiene un millón de habitantes.|The city has a million inhabitants.|La ville compte un million d'habitants.|Die Stadt hat eine Million Einwohner.|La città ha un milione di abitanti.|A cidade tem um milhão de habitantes.|В городе живёт миллион человек.|Orașul are un milion de locuitori.
Necesito cuarenta euros más.|I need forty euros more.|J'ai besoin de quarante euros de plus.|Ich brauche vierzig Euro mehr.|Mi servono quaranta euro in più.|Preciso de mais quarenta euros.|Мне нужно ещё сорок евро.|Mai am nevoie de patruzeci de euro.
`);

  /* 3 Familia */
  W(3, `
Suegro|Father-in-law|Beau-père|Schwiegervater|Suocero|Sogro|Тесть|Socru
Suegra|Mother-in-law|Belle-mère|Schwiegermutter|Suocera|Sogra|Тёща|Soacră
Nieto|Grandson|Petit-fils|Enkel|Nipotino|Neto|Внук|Nepot
Nieta|Granddaughter|Petite-fille|Enkelin|Nipotina|Neta|Внучка|Nepoată
Divorciado|Divorced|Divorcé|geschieden|Divorziato|Divorciado|Разведённый|Divorțat
Familia|Family|Famille|Familie|Famiglia|Família|Семья|Familie
Pariente|Relative|Proche parent|Verwandter|Parente|Familiar|Родственник|Rudă
Mayor|Older|Aîné|älter|Maggiore|Mais velho|Старший|Mai mare
`);
  S(3, `
Mi suegra cocina muy bien.|My mother-in-law cooks very well.|Ma belle-mère cuisine très bien.|Meine Schwiegermutter kocht sehr gut.|Mia suocera cucina molto bene.|A minha sogra cozinha muito bem.|Моя тёща очень хорошо готовит.|Soacra mea gătește foarte bine.
Tengo dos nietos pequeños.|I have two small grandchildren.|J'ai deux petits-enfants.|Ich habe zwei kleine Enkelkinder.|Ho due nipotini.|Tenho dois netos pequenos.|У меня двое маленьких внуков.|Am doi nepoți mici.
Mi hermano mayor vive en otra ciudad.|My older brother lives in another city.|Mon frère aîné habite dans une autre ville.|Mein älterer Bruder wohnt in einer anderen Stadt.|Mio fratello maggiore vive in un'altra città.|O meu irmão mais velho vive noutra cidade.|Мой старший брат живёт в другом городе.|Fratele meu mai mare locuiește în alt oraș.
Toda la familia se reúne los domingos.|The whole family gets together on Sundays.|Toute la famille se réunit le dimanche.|Die ganze Familie trifft sich sonntags.|Tutta la famiglia si riunisce la domenica.|A família toda reúne-se aos domingos.|Вся семья собирается по воскресеньям.|Toată familia se adună duminica.
Mis parientes viven en el campo.|My relatives live in the countryside.|Mes proches habitent à la campagne.|Meine Verwandten leben auf dem Land.|I miei parenti vivono in campagna.|Os meus familiares vivem no campo.|Мои родственники живут в деревне.|Rudele mele locuiesc la țară.
`);

  /* 4 Comida y bebida */
  W(4, `
Pasta|Pasta|Pâtes|Nudeln|Pasta|Massa|Макароны|Paste
Papas|Potatoes|Pommes de terre|Kartoffeln|Patate|Batatas|Картофель|Cartofi
Tomate|Tomato|Tomate|Tomate|Pomodoro|Tomate|Помидор|Roșie
Cebolla|Onion|Oignon|Zwiebel|Cipolla|Cebola|Лук|Ceapă
Cerveza|Beer|Bière|Bier|Birra|Cerveja|Пиво|Bere
Helado|Ice cream|Glace|Eis|Gelato|Gelado|Мороженое|Înghețată
Mantequilla|Butter|Beurre|Butter|Burro|Manteiga|Масло|Unt
Chocolate|Chocolate|Chocolat|Schokolade|Cioccolato|Chocolate|Шоколад|Ciocolată
`);
  S(4, `
Me encanta el helado de chocolate.|I love chocolate ice cream.|J'adore la glace au chocolat.|Ich liebe Schokoladeneis.|Adoro il gelato al cioccolato.|Adoro gelado de chocolate.|Я обожаю шоколадное мороженое.|Ador înghețata de ciocolată.
Quiero papas con pollo.|I want potatoes with chicken.|Je veux des pommes de terre avec du poulet.|Ich möchte Kartoffeln mit Hähnchen.|Voglio patate con pollo.|Quero batatas com frango.|Я хочу картошку с курицей.|Vreau cartofi cu pui.
La pasta con tomate está deliciosa.|The pasta with tomato sauce is delicious.|Les pâtes à la tomate sont délicieuses.|Die Nudeln mit Tomatensoße sind köstlich.|La pasta al pomodoro è deliziosa.|A massa com tomate está deliciosa.|Паста с томатами очень вкусная.|Pastele cu roșii sunt delicioase.
Pongo mantequilla en el pan.|I put butter on the bread.|Je mets du beurre sur le pain.|Ich streiche Butter auf das Brot.|Metto il burro sul pane.|Ponho manteiga no pão.|Я намазываю хлеб маслом.|Pun unt pe pâine.
¿Qué quieres beber, agua o cerveza?|What do you want to drink, water or beer?|Que veux-tu boire, de l'eau ou une bière ?|Was möchtest du trinken, Wasser oder Bier?|Cosa vuoi bere, acqua o birra?|O que queres beber, água ou cerveja?|Что ты хочешь выпить — воду или пиво?|Ce vrei să bei, apă sau bere?
`);

  /* 5 En el restaurante */
  W(5, `
Plato principal|Main course|Plat principal|Hauptgericht|Piatto principale|Prato principal|Основное блюдо|Fel principal
Entrada|Starter|Entrée|Vorspeise|Antipasto|Entrada|Закуска|Aperitiv
Vegetariano|Vegetarian|Végétarien|Vegetarisch|Vegetariano|Vegetariano|Вегетарианский|Vegetarian
Alergia|Allergy|Allergie|Allergie|Allergia|Alergia|Аллергия|Alergie
Pedir|To order|Commander|Bestellen|Ordinare|Pedir|Заказывать|A comanda
Recomendación|Recommendation|Recommandation|Empfehlung|Consiglio|Recomendação|Рекомендация|Recomandare
Terraza|Terrace|Terrasse|Terrasse|Terrazza|Esplanada|Терраса|Terasă
Caliente|Hot|Chaud|heiß|Caldo|Quente|Горячий|Fierbinte
`);
  S(5, `
De entrada quiero una sopa.|For starter I'd like a soup.|En entrée, je voudrais une soupe.|Als Vorspeise möchte ich eine Suppe.|Come antipasto vorrei una zuppa.|De entrada quero uma sopa.|На закуску я хочу суп.|Ca aperitiv aș dori o supă.
Soy vegetariano, ¿qué me recomienda?|I'm vegetarian, what do you recommend?|Je suis végétarien, que me conseillez-vous ?|Ich bin Vegetarier, was empfehlen Sie mir?|Sono vegetariano, cosa mi consiglia?|Sou vegetariano, o que me recomenda?|Я вегетарианец, что вы мне посоветуете?|Sunt vegetarian, ce îmi recomandați?
Tengo alergia a las nueces.|I'm allergic to nuts.|Je suis allergique aux noix.|Ich bin allergisch gegen Nüsse.|Sono allergico alle noci.|Tenho alergia a nozes.|У меня аллергия на орехи.|Sunt alergic la nuci.
¿Podemos sentarnos en la terraza?|Can we sit on the terrace?|Pouvons-nous nous asseoir en terrasse ?|Können wir auf der Terrasse sitzen?|Possiamo sederci in terrazza?|Podemos sentar-nos na esplanada?|Можно сесть на террасе?|Putem să ne așezăm pe terasă?
Mi plato principal está frío.|My main course is cold.|Mon plat principal est froid.|Mein Hauptgericht ist kalt.|Il mio piatto principale è freddo.|O meu prato principal está frio.|Моё основное блюдо остыло.|Felul meu principal s-a răcit.
`);

  /* 6 Viajes */
  W(6, `
Mochila|Backpack|Sac à dos|Rucksack|Zaino|Mochila|Рюкзак|Rucsac
Ida y vuelta|Return|Aller-retour|Hin und zurück|Andata e ritorno|Ida e volta|Туда и обратно|Dus-întors
Equipaje de mano|Hand luggage|Bagage à main|Handgepäck|Bagaglio a mano|Bagagem de mão|Ручная кладь|Bagaj de mână
Andén|Platform|Quai|Gleis|Binario|Cais|Платформа|Peron
Puerta de embarque|Gate|Porte d'embarquement|Gate|Gate|Porta de embarque|Выход на посадку|Poarta de îmbarcare
Guía|Guide|Guide|Reiseführer|Guida|Guia|Гид|Ghid
Cámara|Camera|Appareil photo|Kamera|Fotocamera|Máquina fotográfica|Фотоаппарат|Aparat foto
Foto|Photo|Photo|Foto|Foto|Foto|Фото|Fotografie
`);
  S(6, `
Un boleto de ida y vuelta, por favor.|A return ticket, please.|Un billet aller-retour, s'il vous plaît.|Eine Fahrkarte hin und zurück, bitte.|Un biglietto di andata e ritorno, per favore.|Um bilhete de ida e volta, por favor.|Билет туда и обратно, пожалуйста.|Un bilet dus-întors, vă rog.
El tren sale del andén tres.|The train leaves from platform three.|Le train part du quai trois.|Der Zug fährt von Gleis drei ab.|Il treno parte dal binario tre.|O comboio parte do cais três.|Поезд отправляется с третьей платформы.|Trenul pleacă de la peronul trei.
Solo llevo equipaje de mano.|I only have hand luggage.|Je n'ai qu'un bagage à main.|Ich habe nur Handgepäck.|Ho solo il bagaglio a mano.|Levo só bagagem de mão.|У меня только ручная кладь.|Am doar bagaj de mână.
La guía nos mostró el centro histórico.|The guide showed us the historic centre.|Le guide nous a montré le centre historique.|Der Reiseführer hat uns die Altstadt gezeigt.|La guida ci ha mostrato il centro storico.|O guia mostrou-nos o centro histórico.|Гид показал нам исторический центр.|Ghidul ne-a arătat centrul istoric.
¿Me puede tomar una foto, por favor?|Could you take a photo of me, please?|Pouvez-vous me prendre en photo, s'il vous plaît ?|Können Sie bitte ein Foto von mir machen?|Può farmi una foto, per favore?|Pode tirar-me uma fotografia, por favor?|Вы не сфотографируете меня, пожалуйста?|Mă puteți fotografia, vă rog?
`);

  /* 7 En la ciudad */
  W(7, `
Cruce|Crossing|Carrefour|Kreuzung|Incrocio|Cruzamento|Перекрёсток|Intersecție
Avenida|Avenue|Avenue|Allee|Viale|Avenida|Проспект|Bulevard
Cuadra|Block|Pâté de maisons|Häuserblock|Isolato|Quarteirão|Квартал|Cvartal
Acera|Pavement|Trottoir|Bürgersteig|Marciapiede|Passeio|Тротуар|Trotuar
Biblioteca|Library|Bibliothèque|Bibliothek|Biblioteca|Biblioteca|Библиотека|Bibliotecă
Mercado|Market|Marché|Markt|Mercato|Mercado|Рынок|Târg
Centro|Centre|Centre|Zentrum|Centro|Centro|Центр|Centru
Oficina de correos|Post office|Bureau de poste|Postamt|Ufficio postale|Correios|Почтовое отделение|Oficiu poștal
`);
  S(7, `
La biblioteca está en la avenida principal.|The library is on the main avenue.|La bibliothèque est sur l'avenue principale.|Die Bibliothek liegt an der Hauptstraße.|La biblioteca è sul viale principale.|A biblioteca fica na avenida principal.|Библиотека находится на главном проспекте.|Biblioteca este pe bulevardul principal.
Camina dos cuadras y gira a la derecha.|Walk two blocks and turn right.|Marche deux pâtés de maisons et tourne à droite.|Gehe zwei Häuserblocks weiter und biege rechts ab.|Cammina per due isolati e gira a destra.|Anda dois quarteirões e vira à direita.|Пройди два квартала и поверни направо.|Mergi două străzi și ia-o la dreapta.
Cruza en el semáforo, no en la mitad.|Cross at the traffic light, not in the middle.|Traverse au feu, pas au milieu de la rue.|Überquere die Straße an der Ampel, nicht mittendrin.|Attraversa al semaforo, non in mezzo alla strada.|Atravessa no semáforo, não a meio da rua.|Переходи на светофоре, а не посреди дороги.|Traversează la semafor, nu pe la mijloc.
Hay un mercado en el centro de la ciudad.|There is a market in the city centre.|Il y a un marché dans le centre-ville.|Im Stadtzentrum gibt es einen Markt.|C'è un mercato in centro città.|Há um mercado no centro da cidade.|В центре города есть рынок.|În centrul orașului este un târg.
La oficina de correos cierra a las cinco.|The post office closes at five.|Le bureau de poste ferme à dix-sept heures.|Das Postamt schließt um fünf Uhr.|L'ufficio postale chiude alle cinque.|Os correios fecham às cinco.|Почта закрывается в пять.|Oficiul poștal se închide la ora cinci.
`);

  /* 8 De compras */
  W(8, `
Falda|Skirt|Jupe|Rock|Gonna|Saia|Юбка|Fustă
Calcetines|Socks|Chaussettes|Socken|Calzini|Meias|Носки|Șosete
Abrigo|Coat|Manteau|Mantel|Cappotto|Sobretudo|Пальто|Palton
Sombrero|Hat|Chapeau|Hut|Cappello|Chapéu|Шляпа|Pălărie
Gafas de sol|Sunglasses|Lunettes de soleil|Sonnenbrille|Occhiali da sole|Óculos de sol|Солнцезащитные очки|Ochelari de soare
Cinturón|Belt|Ceinture|Gürtel|Cintura|Cinto|Ремень|Curea
Pequeño|Small|Petit|klein|Piccolo|Pequeno|Маленький|Mic
Grande|Big|Grand|groß|Grande|Grande|Большой|Mare
`);
  S(8, `
Necesito unos calcetines negros.|I need some black socks.|J'ai besoin de chaussettes noires.|Ich brauche schwarze Socken.|Mi servono dei calzini neri.|Preciso de meias pretas.|Мне нужны чёрные носки.|Am nevoie de niște șosete negre.
Esta falda es muy bonita.|This skirt is very pretty.|Cette jupe est très jolie.|Dieser Rock ist sehr schön.|Questa gonna è molto bella.|Esta saia é muito bonita.|Эта юбка очень красивая.|Fusta aceasta este foarte frumoasă.
Hace frío, necesito un abrigo.|It's cold, I need a coat.|Il fait froid, j'ai besoin d'un manteau.|Es ist kalt, ich brauche einen Mantel.|Fa freddo, mi serve un cappotto.|Está frio, preciso de um sobretudo.|Холодно, мне нужно пальто.|Este frig, am nevoie de un palton.
¿Tiene esta talla en color negro?|Do you have this size in black?|Avez-vous cette taille en noir ?|Haben Sie diese Größe in Schwarz?|Ha questa taglia in nero?|Tem este tamanho em preto?|У вас есть этот размер в чёрном цвете?|Aveți această mărime în negru?
Estos zapatos me quedan pequeños.|These shoes are too small for me.|Ces chaussures sont trop petites pour moi.|Diese Schuhe sind mir zu klein.|Queste scarpe mi stanno strette.|Estes sapatos ficam-me pequenos.|Эти туфли мне малы.|Pantofii aceștia îmi sunt mici.
`);

  /* 9 Días y horas */
  W(9, `
Madrugada|Early morning|Petit matin|Morgengrauen|Alba|Madrugada|Раннее утро|Zori
Mediodía|Midday|Midi|Mittag|Mezzogiorno|Meio-dia|Полдень|Amiază
Medianoche|Midnight|Minuit|Mitternacht|Mezzanotte|Meia-noite|Полночь|Miezul nopții
Calendario|Calendar|Calendrier|Kalender|Calendario|Calendário|Календарь|Calendar
Reloj|Clock|Horloge|Uhr|Orologio|Relógio|Часы|Ceas
Puntual|On time|Ponctuel|pünktlich|Puntuale|Pontual|Пунктуальный|Punctual
Fecha|Date|Date|Datum|Data|Data|Дата|Dată
Cada día|Every day|Chaque jour|jeden Tag|Ogni giorno|Todos os dias|Каждый день|În fiecare zi
`);
  S(9, `
¿Qué fecha es hoy?|What's the date today?|Quel jour sommes-nous aujourd'hui ?|Welches Datum haben wir heute?|Che data è oggi?|Que dia é hoje?|Какое сегодня число?|Ce dată este astăzi?
Siempre soy puntual.|I'm always punctual.|Je suis toujours ponctuel.|Ich bin immer pünktlich.|Sono sempre puntuale.|Sou sempre pontual.|Я всегда пунктуален.|Sunt mereu punctual.
El reloj marca el mediodía.|The clock says midday.|L'horloge indique midi.|Die Uhr zeigt zwölf Uhr mittags.|L'orologio segna mezzogiorno.|O relógio marca o meio-dia.|Часы показывают полдень.|Ceasul arată amiaza.
Cada día camino media hora.|I walk for half an hour every day.|Chaque jour, je marche une demi-heure.|Jeden Tag gehe ich eine halbe Stunde spazieren.|Ogni giorno cammino per mezz'ora.|Todos os dias caminho meia hora.|Каждый день я хожу пешком полчаса.|În fiecare zi merg pe jos o jumătate de oră.
Nos vemos a medianoche en la plaza.|We'll meet at midnight in the square.|On se retrouve à minuit sur la place.|Wir treffen uns um Mitternacht auf dem Platz.|Ci vediamo a mezzanotte in piazza.|Encontramo-nos à meia-noite na praça.|Встретимся в полночь на площади.|Ne vedem la miezul nopții în piață.
`);

  /* 10 Rutina diaria */
  W(10, `
Peinarse|To brush your hair|Se coiffer|sich kämmen|Pettinarsi|Pentear-se|Причёсываться|A se pieptăna
Vestirse|To get dressed|S'habiller|sich anziehen|Vestirsi|Vestir-se|Одеваться|A se îmbrăca
Afeitarse|To shave|Se raser|sich rasieren|Radersi|Barbear-se|Бриться|A se bărbieri
Maquillarse|To put on make-up|Se maquiller|sich schminken|Truccarsi|Maquilhar-se|Краситься|A se machia
Acostarse|To go to bed|Se coucher|ins Bett gehen|Andare a letto|Deitar-se|Ложиться спать|A se culca
Lavar los platos|To wash the dishes|Faire la vaisselle|Geschirr spülen|Lavare i piatti|Lavar a loiça|Мыть посуду|A spăla vasele
Hacer la compra|To do the shopping|Faire les courses|einkaufen|Fare la spesa|Fazer compras|Ходить за покупками|A face cumpărături
Tender la cama|To make the bed|Faire le lit|das Bett machen|Rifare il letto|Fazer a cama|Заправлять кровать|A face patul
`);
  S(10, `
Me visto rápido por las mañanas.|I get dressed quickly in the mornings.|Je m'habille vite le matin.|Morgens ziehe ich mich schnell an.|La mattina mi vesto in fretta.|Visto-me depressa de manhã.|По утрам я быстро одеваюсь.|Dimineața mă îmbrac repede.
Después de cenar lavo los platos.|After dinner I wash the dishes.|Après le dîner, je fais la vaisselle.|Nach dem Abendessen spüle ich das Geschirr.|Dopo cena lavo i piatti.|Depois de jantar lavo a loiça.|После ужина я мою посуду.|După cină spăl vasele.
Los sábados hago la compra.|On Saturdays I do the shopping.|Le samedi, je fais les courses.|Samstags gehe ich einkaufen.|Il sabato faccio la spesa.|Aos sábados faço as compras.|По субботам я хожу за покупками.|Sâmbăta fac cumpărături.
Me peino y me lavo los dientes.|I brush my hair and brush my teeth.|Je me coiffe et je me brosse les dents.|Ich kämme mich und putze mir die Zähne.|Mi pettino e mi lavo i denti.|Penteio-me e lavo os dentes.|Я причёсываюсь и чищу зубы.|Mă pieptăn și mă spăl pe dinți.
Siempre tiendo la cama antes de salir.|I always make the bed before leaving.|Je fais toujours mon lit avant de partir.|Ich mache das Bett immer, bevor ich gehe.|Rifaccio sempre il letto prima di uscire.|Faço sempre a cama antes de sair.|Я всегда заправляю кровать перед выходом.|Îmi fac mereu patul înainte să plec.
`);

  /* 11 En casa */
  W(11, `
Techo|Ceiling|Plafond|Zimmerdecke|Soffitto|Teto|Потолок|Tavan
Lavadora|Washing machine|Machine à laver|Waschmaschine|Lavatrice|Máquina de lavar|Стиральная машина|Mașină de spălat
Estufa|Cooker|Cuisinière|Herd|Fornello|Fogão|Плита|Aragaz
Horno|Oven|Four|Backofen|Forno|Forno|Духовка|Cuptor
Cortina|Curtain|Rideau|Vorhang|Tenda|Cortina|Занавеска|Perdea
Almohada|Pillow|Oreiller|Kissen|Cuscino|Almofada|Подушка|Pernă
Manta|Blanket|Couverture|Wolldecke|Coperta|Cobertor|Одеяло|Pătură
Balcón|Balcony|Balcon|Balkon|Balcone|Varanda|Балкон|Balcon
`);
  S(11, `
La lavadora está en el baño.|The washing machine is in the bathroom.|La machine à laver est dans la salle de bain.|Die Waschmaschine steht im Badezimmer.|La lavatrice è in bagno.|A máquina de lavar está na casa de banho.|Стиральная машина стоит в ванной.|Mașina de spălat este în baie.
Pon la pizza en el horno.|Put the pizza in the oven.|Mets la pizza au four.|Schieb die Pizza in den Backofen.|Metti la pizza nel forno.|Põe a pizza no forno.|Поставь пиццу в духовку.|Pune pizza în cuptor.
Desde mi balcón veo el mar.|From my balcony I can see the sea.|De mon balcon, je vois la mer.|Von meinem Balkon aus sehe ich das Meer.|Dal mio balcone vedo il mare.|Da minha varanda vejo o mar.|С моего балкона видно море.|De pe balconul meu văd marea.
Necesito otra almohada y una manta.|I need another pillow and a blanket.|J'ai besoin d'un autre oreiller et d'une couverture.|Ich brauche noch ein Kissen und eine Decke.|Mi servono un altro cuscino e una coperta.|Preciso de outra almofada e de um cobertor.|Мне нужны ещё одна подушка и одеяло.|Am nevoie de încă o pernă și de o pătură.
Las cortinas son de color azul.|The curtains are blue.|Les rideaux sont bleus.|Die Vorhänge sind blau.|Le tende sono blu.|As cortinas são azuis.|Занавески голубые.|Perdelele sunt albastre.
`);

  /* 12 Salud */
  W(12, `
Nariz|Nose|Nez|Nase|Naso|Nariz|Нос|Nas
Oreja|Ear|Oreille|Ohr|Orecchio|Orelha|Ухо|Ureche
Boca|Mouth|Bouche|Mund|Bocca|Boca|Рот|Gură
Corazón|Heart|Cœur|Herz|Cuore|Coração|Сердце|Inimă
Pastilla|Pill|Comprimé|Tablette|Pastiglia|Comprimido|Таблетка|Pastilă
Mareo|Dizziness|Vertige|Schwindel|Capogiro|Tontura|Головокружение|Amețeală
Herida|Wound|Plaie|Wunde|Ferita|Ferida|Рана|Rană
Sangre|Blood|Sang|Blut|Sangue|Sangue|Кровь|Sânge
`);
  S(12, `
Me duele la oreja desde anoche.|My ear has hurt since last night.|J'ai mal à l'oreille depuis hier soir.|Mein Ohr tut seit gestern Abend weh.|Mi fa male l'orecchio da ieri sera.|Dói-me a orelha desde ontem à noite.|У меня болит ухо со вчерашнего вечера.|Mă doare urechea din seara trecută.
Tomo una pastilla para el dolor.|I take a pill for the pain.|Je prends un comprimé contre la douleur.|Ich nehme eine Tablette gegen die Schmerzen.|Prendo una pastiglia per il dolore.|Tomo um comprimido para a dor.|Я принимаю таблетку от боли.|Iau o pastilă pentru durere.
Tengo mareos cuando me levanto.|I feel dizzy when I get up.|J'ai des vertiges quand je me lève.|Mir wird schwindelig, wenn ich aufstehe.|Ho dei capogiri quando mi alzo.|Sinto tonturas quando me levanto.|У меня кружится голова, когда я встаю.|Mi se învârte capul când mă ridic.
La herida sangra mucho.|The wound is bleeding a lot.|La plaie saigne beaucoup.|Die Wunde blutet stark.|La ferita sanguina molto.|A ferida sangra muito.|Рана сильно кровоточит.|Rana sângerează tare.
Respiro por la nariz y por la boca.|I breathe through my nose and my mouth.|Je respire par le nez et par la bouche.|Ich atme durch Nase und Mund.|Respiro dal naso e dalla bocca.|Respiro pelo nariz e pela boca.|Я дышу носом и ртом.|Respir pe nas și pe gură.
`);

  /* 13 Trabajo */
  W(13, `
Turno|Shift|Équipe de travail|Schicht|Turno|Turno|Смена|Tură
Impresora|Printer|Imprimante|Drucker|Stampante|Impressora|Принтер|Imprimantă
Archivo|File|Fichier|Datei|File|Ficheiro|Файл|Fișier
Presentación|Presentation|Présentation|Präsentation|Presentazione|Apresentação|Презентация|Prezentare
Descanso|Break|Pause|Pause|Pausa|Pausa|Перерыв|Pauză
Gerente|Manager|Directeur|Geschäftsführer|Direttore|Gerente|Директор|Director
Tiempo completo|Full-time|Temps plein|Vollzeit|Tempo pieno|Tempo inteiro|Полная занятость|Normă întreagă
Vacante|Vacancy|Poste vacant|Offene Stelle|Posto vacante|Vaga|Вакансия|Post vacant
`);
  S(13, `
Hoy tengo el turno de la mañana.|Today I have the morning shift.|Aujourd'hui, je suis de l'équipe du matin.|Heute habe ich Frühschicht.|Oggi ho il turno del mattino.|Hoje tenho o turno da manhã.|Сегодня у меня утренняя смена.|Astăzi am tura de dimineață.
La impresora no funciona.|The printer isn't working.|L'imprimante ne fonctionne pas.|Der Drucker funktioniert nicht.|La stampante non funziona.|A impressora não funciona.|Принтер не работает.|Imprimanta nu funcționează.
Mañana hago una presentación al gerente.|Tomorrow I'm giving a presentation to the manager.|Demain, je fais une présentation au directeur.|Morgen halte ich dem Geschäftsführer eine Präsentation.|Domani faccio una presentazione al direttore.|Amanhã faço uma apresentação ao gerente.|Завтра я делаю презентацию для директора.|Mâine fac o prezentare directorului.
Tomamos un descanso de diez minutos.|We take a ten-minute break.|Nous faisons une pause de dix minutes.|Wir machen zehn Minuten Pause.|Facciamo una pausa di dieci minuti.|Fazemos uma pausa de dez minutos.|Мы делаем десятиминутный перерыв.|Facem o pauză de zece minute.
Busco un trabajo de tiempo completo.|I'm looking for a full-time job.|Je cherche un travail à temps plein.|Ich suche einen Vollzeitjob.|Cerco un lavoro a tempo pieno.|Procuro um trabalho a tempo inteiro.|Я ищу работу на полный день.|Caut un loc de muncă cu normă întreagă.
`);

  /* 14 El tiempo */
  W(14, `
Relámpago|Lightning|Éclair|Blitz|Fulmine|Relâmpago|Молния|Fulger
Trueno|Thunder|Tonnerre|Donner|Tuono|Trovão|Гром|Tunet
Helada|Frost|Gelée|Frost|Gelo|Geada|Заморозки|Îngheț
Húmedo|Humid|Humide|feucht|Umido|Húmido|Влажный|Umed
Seco|Dry|Sec|trocken|Secco|Seco|Сухой|Uscat
Pronóstico|Forecast|Prévisions|Vorhersage|Previsioni|Previsão|Прогноз|Prognoză
Lloviznar|To drizzle|Bruiner|nieseln|Piovigginare|Chuviscar|Моросить|A burnița
Chubasco|Shower|Averse|Schauer|Acquazzone|Aguaceiro|Ливень|Aversă
`);
  S(14, `
El pronóstico dice que habrá tormenta.|The forecast says there will be a storm.|Les prévisions annoncent un orage.|Die Vorhersage sagt Gewitter voraus.|Le previsioni dicono che ci sarà un temporale.|A previsão diz que vai haver tempestade.|Прогноз обещает грозу.|Prognoza spune că va fi furtună.
Primero vi el relámpago y luego oí el trueno.|First I saw the lightning and then I heard the thunder.|J'ai d'abord vu l'éclair, puis entendu le tonnerre.|Zuerst sah ich den Blitz, dann hörte ich den Donner.|Prima ho visto il fulmine e poi ho sentito il tuono.|Primeiro vi o relâmpago e depois ouvi o trovão.|Сначала я увидел молнию, а потом услышал гром.|Mai întâi am văzut fulgerul și apoi am auzit tunetul.
Esta noche habrá helada.|There will be a frost tonight.|Il y aura du gel cette nuit.|Heute Nacht gibt es Frost.|Stanotte ci sarà il gelo.|Esta noite vai haver geada.|Сегодня ночью будут заморозки.|Diseară va fi îngheț.
Aquí el clima es muy húmedo.|The climate here is very humid.|Ici, le climat est très humide.|Hier ist das Klima sehr feucht.|Qui il clima è molto umido.|Aqui o clima é muito húmido.|Здесь очень влажный климат.|Aici clima este foarte umedă.
Llovizna, pero no hace frío.|It's drizzling, but it isn't cold.|Il bruine, mais il ne fait pas froid.|Es nieselt, aber es ist nicht kalt.|Pioviggina, ma non fa freddo.|Está a chuviscar, mas não está frio.|Моросит, но не холодно.|Burnițează, dar nu este frig.
`);

  /* 15 Ocio */
  W(15, `
Pintar|To paint|Peindre|malen|Dipingere|Pintar|Рисовать|A picta
Escribir|To write|Écrire|schreiben|Scrivere|Escrever|Писать|A scrie
Fotografía|Photography|Photographie|Fotografie|Fotografia|Fotografia|Фотография|Fotografie
Senderismo|Hiking|Randonnée|Wandern|Escursionismo|Caminhada|Пеший туризм|Drumeție
Pescar|To fish|Pêcher|angeln|Pescare|Pescar|Ловить рыбу|A pescui
Acampar|To camp|Faire du camping|zelten|Campeggiare|Acampar|Ставить палатку|A face camping
Videojuego|Video game|Jeu vidéo|Videospiel|Videogioco|Videojogo|Видеоигра|Joc video
Pasear|To go for a walk|Se promener|spazieren gehen|Passeggiare|Passear|Гулять|A se plimba
`);
  S(15, `
Los domingos salimos de senderismo.|On Sundays we go hiking.|Le dimanche, nous allons faire de la randonnée.|Sonntags gehen wir wandern.|La domenica andiamo a fare escursioni.|Aos domingos vamos fazer caminhadas.|По воскресеньям мы ходим в походы.|Duminica mergem în drumeție.
Me gusta pintar paisajes.|I like painting landscapes.|J'aime peindre des paysages.|Ich male gern Landschaften.|Mi piace dipingere paesaggi.|Gosto de pintar paisagens.|Я люблю рисовать пейзажи.|Îmi place să pictez peisaje.
Mi hermano pasa horas con los videojuegos.|My brother spends hours playing video games.|Mon frère passe des heures sur les jeux vidéo.|Mein Bruder verbringt Stunden mit Videospielen.|Mio fratello passa ore con i videogiochi.|O meu irmão passa horas com os videojogos.|Мой брат часами играет в видеоигры.|Fratele meu petrece ore în șir cu jocurile video.
Vamos a acampar junto al río.|We're going camping by the river.|Nous allons camper au bord de la rivière.|Wir zelten am Fluss.|Andiamo a campeggiare vicino al fiume.|Vamos acampar junto ao rio.|Мы поедем с палатками к реке.|Mergem la cort lângă râu.
Después de comer, salimos a pasear.|After lunch, we go for a walk.|Après le repas, nous allons nous promener.|Nach dem Essen gehen wir spazieren.|Dopo mangiato usciamo a passeggiare.|Depois de comer, vamos passear.|После обеда мы выходим погулять.|După masă, ieșim la plimbare.
`);

  /* 16 Contar el pasado */
  W(16, `
Hace dos días|Two days ago|Il y a deux jours|vor zwei Tagen|Due giorni fa|Há dois dias|Два дня назад|Acum două zile
Esta mañana|This morning|Ce matin|heute Morgen|Stamattina|Esta manhã|Сегодня утром|Azi-dimineață
Luego|Later|Plus tard|später|Più tardi|Mais tarde|Позже|Mai târziu
Aquel día|That day|Ce jour-là|an jenem Tag|Quel giorno|Nesse dia|В тот день|În ziua aceea
Al principio|At first|Au début|am Anfang|All'inizio|No início|Поначалу|La început
Finalmente|Finally|Finalement|schließlich|Infine|Por fim|В итоге|Până la urmă
Cada vez|Each time|Chaque fois|jedes Mal|Ogni volta|Cada vez|Каждый раз|De fiecare dată
Hace mucho|Long ago|Il y a longtemps|vor langer Zeit|Tanto tempo fa|Há muito tempo|Давно|Cu mult timp în urmă
`);
  S(16, `
Esta mañana desayuné tarde.|This morning I had a late breakfast.|Ce matin, j'ai pris mon petit-déjeuner tard.|Heute Morgen habe ich spät gefrühstückt.|Stamattina ho fatto colazione tardi.|Esta manhã tomei o pequeno-almoço tarde.|Сегодня утром я поздно позавтракал.|Azi-dimineață am luat micul dejun târziu.
Hace dos días vi una película muy buena.|Two days ago I saw a very good film.|Il y a deux jours, j'ai vu un très bon film.|Vor zwei Tagen habe ich einen sehr guten Film gesehen.|Due giorni fa ho visto un film molto bello.|Há dois dias vi um filme muito bom.|Два дня назад я посмотрел очень хороший фильм.|Acum două zile am văzut un film foarte bun.
Al principio no entendía nada.|At first I didn't understand anything.|Au début, je ne comprenais rien.|Am Anfang habe ich gar nichts verstanden.|All'inizio non capivo niente.|No início não percebia nada.|Поначалу я ничего не понимал.|La început nu înțelegeam nimic.
Aquel día hacía mucho sol.|That day it was very sunny.|Ce jour-là, il y avait beaucoup de soleil.|An jenem Tag schien die Sonne sehr.|Quel giorno c'era molto sole.|Nesse dia fazia muito sol.|В тот день было очень солнечно.|În ziua aceea era foarte soare.
Cada vez que viajo, compro un recuerdo.|Every time I travel, I buy a souvenir.|Chaque fois que je voyage, j'achète un souvenir.|Jedes Mal, wenn ich reise, kaufe ich ein Souvenir.|Ogni volta che viaggio, compro un ricordo.|Cada vez que viajo, compro uma recordação.|Каждый раз, когда я путешествую, я покупаю сувенир.|De fiecare dată când călătoresc, cumpăr un suvenir.
`);

  /* 17 Planes de futuro */
  W(17, `
Probablemente|Probably|Probablement|wahrscheinlich|Probabilmente|Provavelmente|Вероятно|Probabil
Prometer|To promise|Promettre|versprechen|Promettere|Prometer|Обещать|A promite
Preparar|To prepare|Préparer|vorbereiten|Preparare|Preparar|Подготовить|A pregăti
Organizar|To organise|Organiser|organisieren|Organizzare|Organizar|Организовать|A organiza
Aprovechar|To make the most of|Profiter de|nutzen|Approfittare|Aproveitar|Воспользоваться|A profita
Inscribirse|To sign up|S'inscrire|sich anmelden|Iscriversi|Inscrever-se|Записаться|A se înscrie
Planear|To plan|Prévoir|planen|Pianificare|Planear|Планировать|A planifica
El próximo año|Next year|L'année prochaine|nächstes Jahr|L'anno prossimo|No próximo ano|В следующем году|Anul viitor
`);
  S(17, `
Probablemente viajaré en verano.|I'll probably travel in the summer.|Je voyagerai probablement en été.|Ich werde wahrscheinlich im Sommer verreisen.|Probabilmente viaggerò in estate.|Provavelmente vou viajar no verão.|Скорее всего, я поеду путешествовать летом.|Probabil voi călători vara.
Te prometo que te llamaré mañana.|I promise I'll call you tomorrow.|Je te promets de t'appeler demain.|Ich verspreche dir, dass ich dich morgen anrufe.|Ti prometto che ti chiamerò domani.|Prometo que te telefono amanhã.|Обещаю, что завтра позвоню тебе.|Îți promit că te sun mâine.
Voy a organizar una fiesta de despedida.|I'm going to organise a leaving party.|Je vais organiser une fête d'adieu.|Ich werde eine Abschiedsfeier organisieren.|Organizzerò una festa d'addio.|Vou organizar uma festa de despedida.|Я организую прощальную вечеринку.|Voi organiza o petrecere de rămas-bun.
Me voy a inscribir en un curso de cocina.|I'm going to sign up for a cooking course.|Je vais m'inscrire à un cours de cuisine.|Ich werde mich für einen Kochkurs anmelden.|Mi iscriverò a un corso di cucina.|Vou inscrever-me num curso de culinária.|Я запишусь на кулинарные курсы.|Mă voi înscrie la un curs de gătit.
Quiero aprovechar bien mis vacaciones.|I want to make the most of my holidays.|Je veux bien profiter de mes vacances.|Ich möchte meinen Urlaub gut nutzen.|Voglio approfittare bene delle mie vacanze.|Quero aproveitar bem as minhas férias.|Я хочу хорошо провести отпуск.|Vreau să profit bine de vacanța mea.
`);

  /* 18 Opiniones */
  W(18, `
Decepcionado|Disappointed|Déçu|enttäuscht|Deluso|Dececionado|Разочарованный|Dezamăgit
Celoso|Jealous|Jaloux|eifersüchtig|Geloso|Ciumento|Ревнивый|Gelos
Avergonzado|Embarrassed|Gêné|beschämt|Imbarazzato|Envergonhado|Смущённый|Jenat
Aliviado|Relieved|Soulagé|erleichtert|Sollevato|Aliviado|Облегчённый|Ușurat
Curioso|Curious|Curieux|neugierig|Curioso|Curioso|Любопытный|Curios
Agradecido|Grateful|Reconnaissant|dankbar|Grato|Agradecido|Благодарный|Recunoscător
Ocupado|Busy|Occupé|beschäftigt|Occupato|Ocupado|Занятой|Ocupat
Estresado|Stressed|Stressé|gestresst|Stressato|Stressado|Напряжённый|Stresat
`);
  S(18, `
Estoy decepcionado con el resultado.|I'm disappointed with the result.|Je suis déçu du résultat.|Ich bin vom Ergebnis enttäuscht.|Sono deluso dal risultato.|Estou dececionado com o resultado.|Я разочарован результатом.|Sunt dezamăgit de rezultat.
Me siento aliviado después del examen.|I feel relieved after the exam.|Je me sens soulagé après l'examen.|Nach der Prüfung fühle ich mich erleichtert.|Mi sento sollevato dopo l'esame.|Sinto-me aliviado depois do exame.|После экзамена я чувствую облегчение.|Mă simt ușurat după examen.
Estoy muy ocupado esta semana.|I'm very busy this week.|Je suis très occupé cette semaine.|Ich bin diese Woche sehr beschäftigt.|Sono molto occupato questa settimana.|Estou muito ocupado esta semana.|Я очень занят на этой неделе.|Sunt foarte ocupat săptămâna aceasta.
Estoy agradecido por tu ayuda.|I'm grateful for your help.|Je te suis reconnaissant pour ton aide.|Ich bin dir für deine Hilfe dankbar.|Ti sono grato per il tuo aiuto.|Estou agradecido pela tua ajuda.|Я благодарен тебе за помощь.|Îți sunt recunoscător pentru ajutor.
Me da vergüenza hablar en público.|I'm embarrassed to speak in public.|J'ai honte de parler en public.|Es ist mir peinlich, in der Öffentlichkeit zu sprechen.|Mi vergogno di parlare in pubblico.|Tenho vergonha de falar em público.|Мне неловко выступать публично.|Mi-e rușine să vorbesc în public.
`);

  /* 19 Pedir ayuda */
  W(19, `
Ladrón|Thief|Voleur|Dieb|Ladro|Ladrão|Вор|Hoț
Denuncia|Police report|Plainte|Anzeige|Denuncia|Queixa|Заявление в полицию|Plângere
Botiquín|First-aid kit|Trousse de secours|Erste-Hilfe-Kasten|Kit di pronto soccorso|Kit de primeiros socorros|Аптечка|Trusă de prim ajutor
Ayudar|To help|Aider|helfen|Aiutare|Ajudar|Помогать|A ajuta
Llamar|To call|Appeler|anrufen|Chiamare|Ligar|Звонить|A suna
Teléfono de emergencia|Emergency number|Numéro d'urgence|Notrufnummer|Numero di emergenza|Número de emergência|Номер экстренной службы|Număr de urgență
Salida de emergencia|Emergency exit|Sortie de secours|Notausgang|Uscita di emergenza|Saída de emergência|Запасной выход|Ieșire de urgență
Documentos|Documents|Papiers|Ausweispapiere|Documenti|Documentos|Документы|Acte
`);
  S(19, `
Un ladrón me robó la mochila.|A thief stole my backpack.|Un voleur m'a volé mon sac à dos.|Ein Dieb hat mir meinen Rucksack gestohlen.|Un ladro mi ha rubato lo zaino.|Um ladrão roubou-me a mochila.|Вор украл мой рюкзак.|Un hoț mi-a furat rucsacul.
Quiero hacer una denuncia.|I want to report a crime.|Je veux porter plainte.|Ich möchte Anzeige erstatten.|Voglio fare una denuncia.|Quero apresentar uma queixa.|Я хочу подать заявление в полицию.|Vreau să depun o plângere.
¿Cuál es el teléfono de emergencia?|What is the emergency number?|Quel est le numéro d'urgence ?|Wie lautet die Notrufnummer?|Qual è il numero di emergenza?|Qual é o número de emergência?|Какой номер экстренной службы?|Care este numărul de urgență?
Hay un botiquín en la cocina.|There is a first-aid kit in the kitchen.|Il y a une trousse de secours dans la cuisine.|In der Küche gibt es einen Erste-Hilfe-Kasten.|C'è una cassetta del pronto soccorso in cucina.|Há um kit de primeiros socorros na cozinha.|На кухне есть аптечка.|În bucătărie este o trusă de prim ajutor.
Llámame si necesitas algo.|Call me if you need anything.|Appelle-moi si tu as besoin de quoi que ce soit.|Ruf mich an, wenn du etwas brauchst.|Chiamami se hai bisogno di qualcosa.|Liga-me se precisares de alguma coisa.|Позвони мне, если что-нибудь понадобится.|Sună-mă dacă ai nevoie de ceva.
`);

  /* 20 Reservas y viajes */
  W(20, `
Ida|One-way|Aller simple|einfach|Solo andata|Só ida|В одну сторону|Dus
Habitación doble|Double room|Chambre double|Doppelzimmer|Camera doppia|Quarto duplo|Двухместный номер|Cameră dublă
Pensión completa|Full board|Pension complète|Vollpension|Pensione completa|Pensão completa|Полный пансион|Pensiune completă
Crucero|Cruise|Croisière|Kreuzfahrt|Crociera|Cruzeiro|Круиз|Croazieră
Traslado|Transfer|Transfert|Transfer|Trasferimento|Transfer|Трансфер|Transfer
Anticipo|Deposit|Acompte|Anzahlung|Acconto|Sinal|Предоплата|Avans
Cambio de divisas|Currency exchange|Bureau de change|Geldwechsel|Cambio valuta|Câmbio|Обмен валюты|Schimb valutar
Check-in|Check-in|Enregistrement|Check-in|Check-in|Check-in|Регистрация|Check-in
`);
  S(20, `
Prefiero un vuelo solo de ida.|I prefer a one-way flight.|Je préfère un vol aller simple.|Ich bevorzuge einen einfachen Flug.|Preferisco un volo di sola andata.|Prefiro um voo só de ida.|Я предпочитаю рейс в одну сторону.|Prefer un zbor dus.
El hotel incluye pensión completa.|The hotel includes full board.|L'hôtel inclut la pension complète.|Das Hotel bietet Vollpension.|L'albergo include la pensione completa.|O hotel inclui pensão completa.|В стоимость отеля входит полный пансион.|Hotelul include pensiune completă.
El traslado del aeropuerto al hotel es gratis.|The transfer from the airport to the hotel is free.|Le transfert de l'aéroport à l'hôtel est gratuit.|Der Transfer vom Flughafen zum Hotel ist kostenlos.|Il trasferimento dall'aeroporto all'albergo è gratuito.|O transfer do aeroporto para o hotel é gratuito.|Трансфер из аэропорта в отель бесплатный.|Transferul de la aeroport la hotel este gratuit.
Dejé un anticipo para asegurar la reserva.|I left a deposit to secure the booking.|J'ai versé un acompte pour garantir la réservation.|Ich habe eine Anzahlung geleistet, um die Buchung zu sichern.|Ho lasciato un acconto per assicurare la prenotazione.|Deixei um sinal para garantir a reserva.|Я внёс предоплату, чтобы закрепить бронь.|Am lăsat un avans pentru a garanta rezervarea.
¿A qué hora empieza el check-in?|What time does check-in start?|À quelle heure commence l'enregistrement ?|Um wie viel Uhr beginnt das Check-in?|A che ora inizia il check-in?|A que horas começa o check-in?|Во сколько начинается регистрация?|La ce oră începe check-in-ul?
`);

  /* 21 Estudios */
  W(21, `
Redacción|Essay|Rédaction|Aufsatz|Tema|Redação|Сочинение|Compunere
Pizarra|Board|Tableau|Tafel|Lavagna|Quadro|Доска|Tablă
Cuaderno|Notebook|Cahier|Heft|Quaderno|Caderno|Тетрадь|Caiet
Bolígrafo|Pen|Stylo|Kugelschreiber|Penna|Caneta|Ручка|Pix
Horario|Timetable|Emploi du temps|Stundenplan|Orario|Horário|Расписание|Orar
Descanso|Break|Récréation|Pause|Intervallo|Intervalo|Перемена|Pauză
Lectura|Reading|Lecture|Lektüre|Lettura|Leitura|Чтение|Lectură
Exposición oral|Presentation|Exposé|Referat|Esposizione orale|Apresentação oral|Доклад|Prezentare orală
`);
  S(21, `
Escribo la redacción en mi cuaderno.|I write the essay in my notebook.|J'écris la rédaction dans mon cahier.|Ich schreibe den Aufsatz in mein Heft.|Scrivo il tema sul mio quaderno.|Escrevo a redação no meu caderno.|Я пишу сочинение в тетради.|Scriu compunerea în caiet.
El profesor escribe en la pizarra.|The teacher writes on the board.|Le professeur écrit au tableau.|Der Lehrer schreibt an die Tafel.|L'insegnante scrive alla lavagna.|O professor escreve no quadro.|Учитель пишет на доске.|Profesorul scrie pe tablă.
¿Me prestas un bolígrafo?|Can I borrow a pen?|Tu me prêtes un stylo ?|Leihst du mir einen Kugelschreiber?|Mi presti una penna?|Emprestas-me uma caneta?|Одолжишь мне ручку?|Îmi împrumuți un pix?
Mañana tengo que hacer una exposición oral.|Tomorrow I have to give an oral presentation.|Demain, je dois faire un exposé.|Morgen muss ich ein Referat halten.|Domani devo fare un'esposizione orale.|Amanhã tenho de fazer uma apresentação oral.|Завтра мне нужно сделать доклад.|Mâine trebuie să fac o prezentare orală.
En el descanso comemos algo en el patio.|During break we eat something in the yard.|À la récréation, nous mangeons quelque chose dans la cour.|In der Pause essen wir etwas auf dem Hof.|All'intervallo mangiamo qualcosa in cortile.|No intervalo comemos algo no pátio.|На перемене мы что-нибудь едим во дворе.|La pauză mâncăm ceva în curte.
`);

  /* 22 Tecnología y medios */
  W(22, `
Auriculares|Headphones|Écouteurs|Kopfhörer|Cuffie|Auscultadores|Наушники|Căști
Teclado|Keyboard|Clavier|Tastatur|Tastiera|Teclado|Клавиатура|Tastatură
Ratón|Mouse|Souris|Maus|Mouse|Rato|Мышь|Mouse
Wifi|Wi-Fi|Wi-Fi|WLAN|Wi-Fi|Wi-Fi|Вай-фай|Wi-Fi
Actualizar|To update|Mettre à jour|aktualisieren|Aggiornare|Atualizar|Обновлять|A actualiza
Apagar|To switch off|Éteindre|ausschalten|Spegnere|Desligar|Выключать|A opri
Encender|To switch on|Allumer|einschalten|Accendere|Ligar|Включать|A porni
Pulsar|To click|Cliquer|klicken|Cliccare|Clicar|Нажимать|A apăsa
`);
  S(22, `
Uso auriculares para escuchar música.|I use headphones to listen to music.|J'utilise des écouteurs pour écouter de la musique.|Ich benutze Kopfhörer, um Musik zu hören.|Uso le cuffie per ascoltare musica.|Uso auscultadores para ouvir música.|Я слушаю музыку в наушниках.|Folosesc căști ca să ascult muzică.
¿Cuál es la clave del wifi?|What is the Wi-Fi password?|Quel est le mot de passe du Wi-Fi ?|Wie lautet das WLAN-Passwort?|Qual è la password del Wi-Fi?|Qual é a palavra-passe do Wi-Fi?|Какой пароль от вайфая?|Care este parola de la Wi-Fi?
Apaga el celular durante la reunión.|Turn off your phone during the meeting.|Éteins ton portable pendant la réunion.|Schalte dein Handy während der Besprechung aus.|Spegni il cellulare durante la riunione.|Desliga o telemóvel durante a reunião.|Выключи телефон во время совещания.|Oprește telefonul în timpul ședinței.
Tengo que actualizar el teléfono.|I have to update my phone.|Je dois mettre mon téléphone à jour.|Ich muss mein Telefon aktualisieren.|Devo aggiornare il telefono.|Tenho de atualizar o telemóvel.|Мне нужно обновить телефон.|Trebuie să îmi actualizez telefonul.
El ratón de mi computadora no funciona.|My computer's mouse doesn't work.|La souris de mon ordinateur ne fonctionne pas.|Die Maus meines Computers funktioniert nicht.|Il mouse del mio computer non funziona.|O rato do meu computador não funciona.|Мышь моего компьютера не работает.|Mouse-ul calculatorului meu nu funcționează.
`);

  /* 23 Hábitos saludables */
  W(23, `
Sueño|Sleep|Sommeil|Schlaf|Sonno|Sono|Сон|Somn
Verdura|Vegetables|Légumes|Gemüse|Verdura|Legumes|Овощи|Legume
Proteína|Protein|Protéine|Eiweiß|Proteina|Proteína|Белок|Proteină
Calorías|Calories|Calories|Kalorien|Calorie|Calorias|Калории|Calorii
Hidratarse|To stay hydrated|S'hydrater|ausreichend trinken|Idratarsi|Hidratar-se|Пить достаточно воды|A se hidrata
Pesas|Weights|Haltères|Gewichte|Pesi|Pesos|Гантели|Greutăți
Yoga|Yoga|Yoga|Yoga|Yoga|Ioga|Йога|Yoga
Siesta|Nap|Sieste|Mittagsschlaf|Pisolino|Sesta|Дневной сон|Somn de după-amiază
`);
  S(23, `
Necesito dormir ocho horas de sueño.|I need to get eight hours of sleep.|J'ai besoin de huit heures de sommeil.|Ich brauche acht Stunden Schlaf.|Ho bisogno di otto ore di sonno.|Preciso de oito horas de sono.|Мне нужно спать восемь часов.|Am nevoie de opt ore de somn.
Como verdura todos los días.|I eat vegetables every day.|Je mange des légumes tous les jours.|Ich esse jeden Tag Gemüse.|Mangio verdura ogni giorno.|Como legumes todos os dias.|Я ем овощи каждый день.|Mănânc legume în fiecare zi.
Hago yoga los lunes y los jueves.|I do yoga on Mondays and Thursdays.|Je fais du yoga le lundi et le jeudi.|Montags und donnerstags mache ich Yoga.|Faccio yoga il lunedì e il giovedì.|Faço ioga às segundas e às quintas.|Я занимаюсь йогой по понедельникам и четвергам.|Fac yoga luni și joi.
Es importante hidratarse durante el ejercicio.|It's important to stay hydrated during exercise.|Il est important de s'hydrater pendant l'effort.|Beim Sport ist es wichtig, genug zu trinken.|È importante idratarsi durante l'esercizio.|É importante hidratar-se durante o exercício.|Во время тренировки важно пить достаточно воды.|Este important să te hidratezi în timpul exercițiilor.
Después del almuerzo me echo una siesta corta.|After lunch I take a short nap.|Après le déjeuner, je fais une petite sieste.|Nach dem Mittagessen mache ich ein kurzes Nickerchen.|Dopo pranzo faccio un breve pisolino.|Depois do almoço faço uma sesta curta.|После обеда я немного сплю.|După prânz trag un pui de somn scurt.
`);

  /* 24 Medio ambiente */
  W(24, `
Aire|Air|Air|Luft|Aria|Ar|Воздух|Aer
Mar|Sea|Mer|Meer|Mare|Mar|Море|Mare
Montaña|Mountain|Montagne|Berg|Montagna|Montanha|Гора|Munte
Lago|Lake|Lac|See|Lago|Lago|Озеро|Lac
Animal|Animal|Animal|Tier|Animale|Animal|Животное|Animal
Fábrica|Factory|Usine|Fabrik|Fabbrica|Fábrica|Завод|Fabrică
Humo|Smoke|Fumée|Rauch|Fumo|Fumo|Дым|Fum
Energía eólica|Wind energy|Énergie éolienne|Windenergie|Energia eolica|Energia eólica|Ветроэнергия|Energie eoliană
`);
  S(24, `
El aire de la ciudad está muy contaminado.|The air in the city is very polluted.|L'air de la ville est très pollué.|Die Luft in der Stadt ist stark verschmutzt.|L'aria della città è molto inquinata.|O ar da cidade está muito poluído.|Воздух в городе сильно загрязнён.|Aerul din oraș este foarte poluat.
Las fábricas producen mucho humo.|Factories produce a lot of smoke.|Les usines produisent beaucoup de fumée.|Fabriken erzeugen viel Rauch.|Le fabbriche producono molto fumo.|As fábricas produzem muito fumo.|Заводы выбрасывают много дыма.|Fabricile produc mult fum.
Me encanta caminar por la montaña.|I love walking in the mountains.|J'adore marcher en montagne.|Ich liebe es, in den Bergen zu wandern.|Adoro camminare in montagna.|Adoro caminhar na montanha.|Я обожаю ходить в горы.|Ador să merg pe munte.
Los animales también necesitan agua limpia.|Animals also need clean water.|Les animaux ont aussi besoin d'eau propre.|Tiere brauchen auch sauberes Wasser.|Anche gli animali hanno bisogno di acqua pulita.|Os animais também precisam de água limpa.|Животным тоже нужна чистая вода.|Și animalele au nevoie de apă curată.
La energía eólica es limpia y renovable.|Wind energy is clean and renewable.|L'énergie éolienne est propre et renouvelable.|Windenergie ist sauber und erneuerbar.|L'energia eolica è pulita e rinnovabile.|A energia eólica é limpa e renovável.|Ветроэнергия чистая и возобновляемая.|Energia eoliană este curată și regenerabilă.
`);

  /* 25 Cultura y tradiciones */
  W(25, `
Carnaval|Carnival|Carnaval|Karneval|Carnevale|Carnaval|Карнавал|Carnaval
Disfraz|Costume|Déguisement|Kostüm|Costume|Fantasia|Костюм|Costum
Fuegos artificiales|Fireworks|Feux d'artifice|Feuerwerk|Fuochi d'artificio|Fogo de artifício|Фейерверк|Artificii
Comida típica|Traditional food|Plat traditionnel|Traditionelles Essen|Cibo tipico|Comida típica|Традиционная еда|Mâncare tradițională
Artista|Artist|Artiste|Künstler|Artista|Artista|Художник|Artist
Folclore|Folklore|Folklore|Folklore|Folclore|Folclore|Фольклор|Folclor
Ceremonia|Ceremony|Cérémonie|Zeremonie|Cerimonia|Cerimónia|Церемония|Ceremonie
Danza|Dance|Danse|Tanz|Danza|Dança|Танец|Dans
`);
  S(25, `
En carnaval todos usan un disfraz.|At carnival everyone wears a costume.|Au carnaval, tout le monde porte un déguisement.|Beim Karneval trägt jeder ein Kostüm.|A carnevale tutti indossano un costume.|No carnaval toda a gente usa uma fantasia.|На карнавале все надевают костюмы.|La carnaval toată lumea poartă un costum.
Vimos los fuegos artificiales desde la playa.|We watched the fireworks from the beach.|Nous avons regardé le feu d'artifice depuis la plage.|Wir haben das Feuerwerk vom Strand aus gesehen.|Abbiamo visto i fuochi d'artificio dalla spiaggia.|Vimos o fogo de artifício da praia.|Мы смотрели фейерверк с пляжа.|Am privit artificiile de pe plajă.
Probé la comida típica del lugar.|I tried the local traditional food.|J'ai goûté la cuisine traditionnelle du lieu.|Ich habe das typische Essen der Gegend probiert.|Ho provato il cibo tipico del posto.|Provei a comida típica do local.|Я попробовал местную традиционную еду.|Am gustat mâncarea tradițională a locului.
La ceremonia empieza a las seis.|The ceremony starts at six.|La cérémonie commence à dix-huit heures.|Die Zeremonie beginnt um sechs Uhr.|La cerimonia inizia alle sei.|A cerimónia começa às seis.|Церемония начинается в шесть.|Ceremonia începe la ora șase.
Esa artista pinta escenas del folclore local.|That artist paints scenes from local folklore.|Cette artiste peint des scènes du folklore local.|Diese Künstlerin malt Szenen aus der lokalen Folklore.|Quell'artista dipinge scene del folclore locale.|Essa artista pinta cenas do folclore local.|Эта художница рисует сцены из местного фольклора.|Artista aceea pictează scene din folclorul local.
`);

  /* 26 Amistad y consejos */
  W(26, `
Chisme|Gossip|Ragot|Klatsch|Pettegolezzo|Mexerico|Сплетня|Bârfă
Broma|Joke|Blague|Witz|Scherzo|Piada|Шутка|Glumă
Compañía|Company|Compagnie|Gesellschaft|Compagnia|Companhia|Компания|Companie
Rencor|Resentment|Rancune|Groll|Rancore|Rancor|Обида|Resentiment
Disculpa|Apology|Excuse|Entschuldigung|Scusa|Desculpa|Извинение|Scuze
Cumplido|Compliment|Compliment|Kompliment|Complimento|Elogio|Комплимент|Compliment
Distanciarse|To drift apart|S'éloigner|sich entfremden|Allontanarsi|Afastar-se|Отдаляться|A se îndepărta
Aconsejar|To advise|Conseiller|beraten|Consigliare|Aconselhar|Советовать|A sfătui
`);
  S(26, `
Me gusta tu compañía.|I enjoy your company.|J'aime ta compagnie.|Ich genieße deine Gesellschaft.|Mi piace la tua compagnia.|Gosto da tua companhia.|Мне приятна твоя компания.|Îmi place compania ta.
No guardes rencor, perdónalo.|Don't hold a grudge, forgive him.|Ne garde pas rancune, pardonne-lui.|Sei nicht nachtragend, verzeih ihm.|Non serbare rancore, perdonalo.|Não guardes rancor, perdoa-lhe.|Не держи обиду, прости его.|Nu purta ranchiună, iartă-l.
Solo era una broma, no te enojes.|It was only a joke, don't be angry.|Ce n'était qu'une blague, ne te fâche pas.|Es war nur ein Witz, sei nicht sauer.|Era solo uno scherzo, non arrabbiarti.|Era só uma piada, não te zangues.|Это была просто шутка, не обижайся.|Era doar o glumă, nu te supăra.
Me hizo un cumplido muy amable.|He paid me a very kind compliment.|Il m'a fait un compliment très aimable.|Er hat mir ein sehr nettes Kompliment gemacht.|Mi ha fatto un complimento molto gentile.|Ele fez-me um elogio muito simpático.|Он сказал мне очень милый комплимент.|Mi-a făcut un compliment foarte frumos.
Con el tiempo nos distanciamos.|Over time we drifted apart.|Avec le temps, nous nous sommes éloignés.|Mit der Zeit haben wir uns entfremdet.|Col tempo ci siamo allontanati.|Com o tempo afastámo-nos.|Со временем мы отдалились друг от друга.|Cu timpul ne-am îndepărtat.
`);

  /* 27 Dinero y trámites */
  W(27, `
Cheque|Cheque|Chèque|Scheck|Assegno|Cheque|Чек|Cec
Gastos|Expenses|Frais|Kosten|Spese|Despesas|Расходы|Cheltuieli
Comisión|Fee|Commission|Gebühr|Commissione|Comissão|Комиссия|Comision
Pagar|To pay|Payer|bezahlen|Pagare|Pagar|Платить|A plăti
Recibir|To receive|Recevoir|erhalten|Ricevere|Receber|Получать|A primi
Sacar dinero|To withdraw money|Retirer de l'argent|Geld abheben|Prelevare|Levantar dinheiro|Снимать деньги|A retrage bani
Depositar|To deposit|Déposer|einzahlen|Versare|Depositar|Вносить на счёт|A depune
Tipo de cambio|Exchange rate|Taux de change|Wechselkurs|Tasso di cambio|Taxa de câmbio|Курс обмена|Curs valutar
`);
  S(27, `
Necesito sacar dinero del cajero.|I need to withdraw money from the cash machine.|Je dois retirer de l'argent au distributeur.|Ich muss am Geldautomaten Geld abheben.|Devo prelevare dei soldi al bancomat.|Preciso de levantar dinheiro no multibanco.|Мне нужно снять деньги в банкомате.|Trebuie să retrag bani de la bancomat.
El banco cobra una comisión por la transferencia.|The bank charges a fee for the transfer.|La banque prélève une commission sur le virement.|Die Bank erhebt eine Gebühr für die Überweisung.|La banca applica una commissione sul bonifico.|O banco cobra uma comissão pela transferência.|Банк берёт комиссию за перевод.|Banca percepe un comision pentru transfer.
¿Cuál es el tipo de cambio de hoy?|What is today's exchange rate?|Quel est le taux de change aujourd'hui ?|Wie ist der Wechselkurs heute?|Qual è il tasso di cambio di oggi?|Qual é a taxa de câmbio de hoje?|Какой сегодня курс обмена?|Care este cursul valutar de astăzi?
Voy a depositar el cheque en mi cuenta.|I'm going to deposit the cheque into my account.|Je vais déposer le chèque sur mon compte.|Ich werde den Scheck auf mein Konto einzahlen.|Verserò l'assegno sul mio conto.|Vou depositar o cheque na minha conta.|Я положу чек на свой счёт.|Voi depune cecul în contul meu.
Recibo mi sueldo el último día del mes.|I receive my salary on the last day of the month.|Je reçois mon salaire le dernier jour du mois.|Ich bekomme mein Gehalt am letzten Tag des Monats.|Ricevo lo stipendio l'ultimo giorno del mese.|Recebo o meu ordenado no último dia do mês.|Я получаю зарплату в последний день месяца.|Îmi primesc salariul în ultima zi a lunii.
`);

  /* 28 Experiencias y recuerdos */
  W(28, `
Adolescencia|Adolescence|Adolescence|Teenagerzeit|Adolescenza|Adolescência|Подростковый возраст|Adolescență
Primer día|First day|Premier jour|erster Tag|Primo giorno|Primeiro dia|Первый день|Prima zi
Casarse|To get married|Se marier|heiraten|Sposarsi|Casar-se|Жениться|A se căsători
Graduarse|To graduate|Obtenir son diplôme|seinen Abschluss machen|Laurearsi|Licenciar-se|Окончить университет|A absolvi
Ganar|To win|Gagner|gewinnen|Vincere|Ganhar|Выигрывать|A câștiga
Superar|To overcome|Surmonter|überwinden|Superare|Superar|Преодолевать|A depăși
Aniversario|Anniversary|Anniversaire de mariage|Jahrestag|Anniversario|Aniversário|Годовщина|Aniversare
Promesa|Promise|Promesse|Versprechen|Promessa|Promessa|Обещание|Promisiune
`);
  S(28, `
Mi primer día de escuela fue inolvidable.|My first day of school was unforgettable.|Mon premier jour d'école était inoubliable.|Mein erster Schultag war unvergesslich.|Il mio primo giorno di scuola è stato indimenticabile.|O meu primeiro dia de escola foi inesquecível.|Мой первый день в школе был незабываемым.|Prima mea zi de școală a fost de neuitat.
Mis padres se casaron hace treinta años.|My parents got married thirty years ago.|Mes parents se sont mariés il y a trente ans.|Meine Eltern haben vor dreißig Jahren geheiratet.|I miei genitori si sono sposati trent'anni fa.|Os meus pais casaram-se há trinta anos.|Мои родители поженились тридцать лет назад.|Părinții mei s-au căsătorit acum treizeci de ani.
Me gradué en el año dos mil veinte.|I graduated in the year two thousand and twenty.|J'ai obtenu mon diplôme en deux mille vingt.|Ich habe im Jahr zweitausendzwanzig meinen Abschluss gemacht.|Mi sono laureato nel duemilaventi.|Licenciei-me no ano dois mil e vinte.|Я окончил университет в две тысячи двадцатом году.|Am absolvit în anul două mii douăzeci.
Superé muchos obstáculos para llegar aquí.|I overcame many obstacles to get here.|J'ai surmonté beaucoup d'obstacles pour arriver ici.|Ich habe viele Hindernisse überwunden, um hierherzukommen.|Ho superato molti ostacoli per arrivare qui.|Superei muitos obstáculos para chegar aqui.|Я преодолел много препятствий, чтобы оказаться здесь.|Am depășit multe obstacole ca să ajung aici.
Celebramos nuestro aniversario en un restaurante.|We celebrated our anniversary in a restaurant.|Nous avons fêté notre anniversaire de mariage au restaurant.|Wir haben unseren Jahrestag in einem Restaurant gefeiert.|Abbiamo festeggiato il nostro anniversario in un ristorante.|Celebrámos o nosso aniversário de casamento num restaurante.|Мы отметили годовщину в ресторане.|Ne-am sărbătorit aniversarea într-un restaurant.
`);

  /* 29 Sueños y condiciones */
  W(29, `
Proyecto|Project|Projet|Projekt|Progetto|Projeto|Проект|Proiect
Constancia|Perseverance|Persévérance|Ausdauer|Perseveranza|Perseverança|Упорство|Perseverență
Valentía|Courage|Courage|Mut|Coraggio|Coragem|Смелость|Curaj
Esperanza|Hope|Espoir|Hoffnung|Speranza|Esperança|Надежда|Speranță
Inspirar|To inspire|Inspirer|inspirieren|Ispirare|Inspirar|Вдохновлять|A inspira
Arriesgar|To risk|Risquer|riskieren|Rischiare|Arriscar|Рисковать|A risca
Rendirse|To give up|Abandonner|aufgeben|Rinunciare|Desistir|Сдаваться|A renunța
Superación|Self-improvement|Dépassement de soi|Selbstverbesserung|Miglioramento personale|Superação|Самосовершенствование|Autodepășire
`);
  S(29, `
Con constancia, todo es posible.|With perseverance, everything is possible.|Avec de la persévérance, tout est possible.|Mit Ausdauer ist alles möglich.|Con la perseveranza tutto è possibile.|Com perseverança, tudo é possível.|С упорством всё возможно.|Cu perseverență, totul este posibil.
Nunca te rindas, aunque sea difícil.|Never give up, even if it's hard.|N'abandonne jamais, même si c'est difficile.|Gib nie auf, auch wenn es schwer ist.|Non rinunciare mai, anche se è difficile.|Nunca desistas, mesmo que seja difícil.|Никогда не сдавайся, даже если трудно.|Nu renunța niciodată, chiar dacă este greu.
Hace falta valentía para cambiar de vida.|It takes courage to change your life.|Il faut du courage pour changer de vie.|Es braucht Mut, sein Leben zu ändern.|Ci vuole coraggio per cambiare vita.|É preciso coragem para mudar de vida.|Чтобы изменить жизнь, нужна смелость.|E nevoie de curaj ca să-ți schimbi viața.
Mi proyecto es abrir una pequeña escuela.|My project is to open a small school.|Mon projet est d'ouvrir une petite école.|Mein Projekt ist es, eine kleine Schule zu eröffnen.|Il mio progetto è aprire una piccola scuola.|O meu projeto é abrir uma pequena escola.|Мой проект — открыть небольшую школу.|Proiectul meu este să deschid o școală mică.
Si arriesgas, puedes ganar o aprender.|If you take a risk, you can win or learn.|Si tu prends un risque, tu peux gagner ou apprendre.|Wenn du etwas riskierst, kannst du gewinnen oder lernen.|Se rischi, puoi vincere o imparare.|Se arriscares, podes ganhar ou aprender.|Если рискнуть, можно выиграть или научиться.|Dacă riști, poți câștiga sau învăța.
`);
})();
