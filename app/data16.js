/* Diccionario ampliado: 50 palabras más en cada una de las 6 categorías (300 en total). Se añaden AL FINAL de cada categoría,
   así las claves de audio anteriores (D<categoría>w<n>) no cambian. Formato: es|en|fr|de|it|pt|ru|ro.
   Escritas por Claude (español neutro latinoamericano); pendientes de revisión por hablantes nativos. */
(() => {
  const LG = ["en", "fr", "de", "it", "pt", "ru", "ro"];
  const add = (ci, text) => {
    const c = DICT_CATS[ci];
    text.trim().split("\n").forEach(line => {
      const p = line.split("|"); c.w.push(p[0]);
      LG.forEach((l, k) => c.t[l].push(p[k + 1]));
    });
  };

  /* 0 Frutas y verduras */
  add(0, `
Manzana|Apple|Pomme|Apfel|Mela|Maçã|Яблоко|Măr
Naranja|Orange|Orange|Orange|Arancia|Laranja|Апельсин|Portocală
Uva|Grape|Raisin|Traube|Uva|Uva|Виноград|Strugure
Pera|Pear|Poire|Birne|Pera|Pera|Груша|Pară
Sandía|Watermelon|Pastèque|Wassermelone|Anguria|Melancia|Арбуз|Pepene verde
Melón|Melon|Melon|Melone|Melone|Melão|Дыня|Pepene galben
Piña|Pineapple|Ananas|Ananas|Ananas|Ananás|Ананас|Ananas
Mango|Mango|Mangue|Mango|Mango|Manga|Манго|Mango
Cereza|Cherry|Cerise|Kirsche|Ciliegia|Cereja|Вишня|Cireașă
Mandarina|Tangerine|Mandarine|Mandarine|Mandarino|Tangerina|Мандарин|Mandarină
Kiwi|Kiwi|Kiwi|Kiwi|Kiwi|Quivi|Киви|Kiwi
Aguacate|Avocado|Avocat|Avocado|Avocado|Abacate|Авокадо|Avocado
Coco|Coconut|Noix de coco|Kokosnuss|Cocco|Coco|Кокос|Nucă de cocos
Higo|Fig|Figue|Feige|Fico|Figo|Инжир|Smochină
Ciruela|Plum|Prune|Pflaume|Prugna|Ameixa|Слива|Prună
Frambuesa|Raspberry|Framboise|Himbeere|Lampone|Framboesa|Малина|Zmeură
Arándano|Blueberry|Myrtille|Heidelbeere|Mirtillo|Mirtilo|Черника|Afină
Damasco|Apricot|Abricot|Aprikose|Albicocca|Damasco|Абрикос|Caisă
Toronja|Grapefruit|Pamplemousse|Grapefruit|Pompelmo|Toranja|Грейпфрут|Grepfrut
Granada|Pomegranate|Grenade|Granatapfel|Melagrana|Romã|Гранат|Rodie
Pepino|Cucumber|Concombre|Gurke|Cetriolo|Pepino|Огурец|Castravete
Pimiento|Pepper|Poivron|Paprika|Peperone|Pimento|Перец|Ardei
Calabaza|Pumpkin|Citrouille|Kürbis|Zucca|Abóbora|Тыква|Dovleac
Calabacín|Courgette|Courgette|Zucchini|Zucchina|Curgete|Кабачок|Dovlecel
Berenjena|Aubergine|Aubergine|Aubergine|Melanzana|Beringela|Баклажан|Vânătă
Brócoli|Broccoli|Brocoli|Brokkoli|Broccoli|Brócolos|Брокколи|Broccoli
Coliflor|Cauliflower|Chou-fleur|Blumenkohl|Cavolfiore|Couve-flor|Цветная капуста|Conopidă
Espinaca|Spinach|Épinards|Spinat|Spinaci|Espinafre|Шпинат|Spanac
Repollo|Cabbage|Chou|Kohl|Cavolo|Couve|Капуста|Varză
Maíz|Corn|Maïs|Mais|Mais|Milho|Кукуруза|Porumb
Champiñón|Mushroom|Champignon|Pilz|Fungo|Cogumelo|Гриб|Ciupercă
Arveja|Pea|Petit pois|Erbse|Pisello|Ervilha|Горох|Mazăre
Frijol|Bean|Haricot|Bohne|Fagiolo|Feijão|Фасоль|Fasole
Lenteja|Lentil|Lentille|Linse|Lenticchia|Lentilha|Чечевица|Linte
Apio|Celery|Céleri|Sellerie|Sedano|Aipo|Сельдерей|Țelină
Remolacha|Beetroot|Betterave|Rote Bete|Barbabietola|Beterraba|Свёкла|Sfeclă
Rábano|Radish|Radis|Radieschen|Ravanello|Rabanete|Редис|Ridiche
Perejil|Parsley|Persil|Petersilie|Prezzemolo|Salsa|Петрушка|Pătrunjel
Albahaca|Basil|Basilic|Basilikum|Basilico|Manjericão|Базилик|Busuioc
Jengibre|Ginger|Gingembre|Ingwer|Zenzero|Gengibre|Имбирь|Ghimbir
Nuez|Walnut|Noix|Walnuss|Noce|Noz|Грецкий орех|Nucă
Almendra|Almond|Amande|Mandel|Mandorla|Amêndoa|Миндаль|Migdală
Cacahuate|Peanut|Cacahuète|Erdnuss|Arachide|Amendoim|Арахис|Arahidă
Aceituna|Olive|Olive|Olive|Oliva|Azeitona|Оливка|Măslină
Camote|Sweet potato|Patate douce|Süßkartoffel|Patata dolce|Batata-doce|Батат|Cartof dulce
Puerro|Leek|Poireau|Lauch|Porro|Alho-francês|Лук-порей|Praz
Espárrago|Asparagus|Asperge|Spargel|Asparago|Espargo|Спаржа|Sparanghel
Alcachofa|Artichoke|Artichaut|Artischocke|Carciofo|Alcachofra|Артишок|Anghinare
Papaya|Papaya|Papaye|Papaya|Papaya|Papaia|Папайя|Papaya
Maracuyá|Passion fruit|Fruit de la passion|Passionsfrucht|Frutto della passione|Maracujá|Маракуйя|Fructul pasiunii
`);

  /* 1 Animales */
  add(1, `
Tigre|Tiger|Tigre|Tiger|Tigre|Tigre|Тигр|Tigru
Elefante|Elephant|Éléphant|Elefant|Elefante|Elefante|Слон|Elefant
Jirafa|Giraffe|Girafe|Giraffe|Giraffa|Girafa|Жираф|Girafă
Mono|Monkey|Singe|Affe|Scimmia|Macaco|Обезьяна|Maimuță
Oso|Bear|Ours|Bär|Orso|Urso|Медведь|Urs
Lobo|Wolf|Loup|Wolf|Lupo|Lobo|Волк|Lup
Zorro|Fox|Renard|Fuchs|Volpe|Raposa|Лиса|Vulpe
Conejo|Rabbit|Lapin|Kaninchen|Coniglio|Coelho|Кролик|Iepure
Ciervo|Deer|Cerf|Hirsch|Cervo|Veado|Олень|Cerb
Burro|Donkey|Âne|Esel|Asino|Burro|Осёл|Măgar
Cabra|Goat|Chèvre|Ziege|Capra|Cabra|Коза|Capră
Gallina|Hen|Poule|Huhn|Gallina|Galinha|Курица|Găină
Gallo|Rooster|Coq|Hahn|Gallo|Galo|Петух|Cocoș
Pato|Duck|Canard|Ente|Anatra|Pato|Утка|Rață
Ganso|Goose|Oie|Gans|Oca|Ganso|Гусь|Gâscă
Águila|Eagle|Aigle|Adler|Aquila|Águia|Орёл|Vultur
Búho|Owl|Hibou|Eule|Gufo|Coruja|Сова|Bufniță
Paloma|Dove|Colombe|Taube|Colomba|Pomba|Голубь|Porumbel
Loro|Parrot|Perroquet|Papagei|Pappagallo|Papagaio|Попугай|Papagal
Cisne|Swan|Cygne|Schwan|Cigno|Cisne|Лебедь|Lebădă
Serpiente|Snake|Serpent|Schlange|Serpente|Cobra|Змея|Șarpe
Tortuga|Turtle|Tortue|Schildkröte|Tartaruga|Tartaruga|Черепаха|Broască țestoasă
Rana|Frog|Grenouille|Frosch|Rana|Rã|Лягушка|Broască
Cocodrilo|Crocodile|Crocodile|Krokodil|Coccodrillo|Crocodilo|Крокодил|Crocodil
Delfín|Dolphin|Dauphin|Delfin|Delfino|Golfinho|Дельфин|Delfin
Ballena|Whale|Baleine|Wal|Balena|Baleia|Кит|Balenă
Tiburón|Shark|Requin|Hai|Squalo|Tubarão|Акула|Rechin
Pulpo|Octopus|Poulpe|Krake|Polpo|Polvo|Осьминог|Caracatiță
Cangrejo|Crab|Crabe|Krabbe|Granchio|Caranguejo|Краб|Crab
Mariposa|Butterfly|Papillon|Schmetterling|Farfalla|Borboleta|Бабочка|Fluture
Abeja|Bee|Abeille|Biene|Ape|Abelha|Пчела|Albină
Hormiga|Ant|Fourmi|Ameise|Formica|Formiga|Муравей|Furnică
Araña|Spider|Araignée|Spinne|Ragno|Aranha|Паук|Păianjen
Mosca|Fly|Mouche|Fliege|Mosca|Mosca|Муха|Muscă
Mosquito|Mosquito|Moustique|Mücke|Zanzara|Mosquito|Комар|Țânțar
Caracol|Snail|Escargot|Schnecke|Lumaca|Caracol|Улитка|Melc
Gusano|Worm|Ver|Wurm|Verme|Verme|Червь|Vierme
Murciélago|Bat|Chauve-souris|Fledermaus|Pipistrello|Morcego|Летучая мышь|Liliac
Ardilla|Squirrel|Écureuil|Eichhörnchen|Scoiattolo|Esquilo|Белка|Veveriță
Hámster|Hamster|Hamster|Hamster|Criceto|Hamster|Хомяк|Hamster
Camello|Camel|Chameau|Kamel|Cammello|Camelo|Верблюд|Cămilă
Canguro|Kangaroo|Kangourou|Känguru|Canguro|Canguru|Кенгуру|Cangur
Pingüino|Penguin|Pingouin|Pinguin|Pinguino|Pinguim|Пингвин|Pinguin
Foca|Seal|Phoque|Robbe|Foca|Foca|Тюлень|Focă
Hipopótamo|Hippopotamus|Hippopotame|Nilpferd|Ippopotamo|Hipopótamo|Бегемот|Hipopotam
Rinoceronte|Rhinoceros|Rhinocéros|Nashorn|Rinoceronte|Rinoceronte|Носорог|Rinocer
Cebra|Zebra|Zèbre|Zebra|Zebra|Zebra|Зебра|Zebră
Lagarto|Lizard|Lézard|Eidechse|Lucertola|Lagarto|Ящерица|Șopârlă
Jabalí|Wild boar|Sanglier|Wildschwein|Cinghiale|Javali|Кабан|Mistreț
Toro|Bull|Taureau|Stier|Toro|Touro|Бык|Taur
`);

  /* 2 Colores */
  add(2, `
Naranja|Orange|Orange|Orange|Arancione|Laranja|Оранжевый|Portocaliu
Dorado|Gold|Doré|Gold|Dorato|Dourado|Золотой|Auriu
Plateado|Silver|Argenté|Silber|Argentato|Prateado|Серебристый|Argintiu
Celeste|Sky blue|Bleu ciel|Himmelblau|Azzurro|Azul-celeste|Голубой|Bleu ciel
Turquesa|Turquoise|Turquoise|Türkis|Turchese|Turquesa|Бирюзовый|Turcoaz
Beige|Beige|Beige|Beige|Beige|Bege|Бежевый|Bej
Verde lima|Lime green|Vert citron|Limettengrün|Verde lime|Verde-lima|Салатовый|Verde lime
Lila|Lilac|Lilas|Flieder|Lilla|Lilás|Сиреневый|Liliachiu
Fucsia|Fuchsia|Fuchsia|Fuchsia|Fucsia|Fúcsia|Фуксия|Fucsia
Granate|Maroon|Bordeaux|Weinrot|Granata|Grená|Бордовый|Vișiniu
Crema|Cream|Crème|Cremefarben|Crema|Creme|Кремовый|Crem
Oliva|Olive|Olive|Olivgrün|Oliva|Verde-azeitona|Оливковый|Oliv
Esmeralda|Emerald|Émeraude|Smaragdgrün|Smeraldo|Esmeralda|Изумрудный|Smarald
Coral|Coral|Corail|Korallenrot|Corallo|Coral|Коралловый|Coral
Añil|Indigo|Indigo|Indigo|Indaco|Índigo|Индиго|Indigo
Carmesí|Crimson|Cramoisi|Karmesinrot|Cremisi|Carmesim|Малиновый|Carmin
Escarlata|Scarlet|Écarlate|Scharlachrot|Scarlatto|Escarlate|Алый|Stacojiu
Ámbar|Amber|Ambre|Bernstein|Ambra|Âmbar|Янтарный|Chihlimbariu
Azul marino|Navy blue|Bleu marine|Marineblau|Blu marino|Azul-marinho|Тёмно-синий|Bleumarin
Azul claro|Light blue|Bleu clair|Hellblau|Azzurro chiaro|Azul-claro|Светло-синий|Albastru deschis
Verde claro|Light green|Vert clair|Hellgrün|Verde chiaro|Verde-claro|Светло-зелёный|Verde deschis
Verde oscuro|Dark green|Vert foncé|Dunkelgrün|Verde scuro|Verde-escuro|Тёмно-зелёный|Verde închis
Gris claro|Light grey|Gris clair|Hellgrau|Grigio chiaro|Cinzento-claro|Светло-серый|Gri deschis
Gris oscuro|Dark grey|Gris foncé|Dunkelgrau|Grigio scuro|Cinzento-escuro|Тёмно-серый|Gri închis
Rosa pálido|Pale pink|Rose pâle|Blassrosa|Rosa pallido|Rosa-pálido|Бледно-розовый|Roz pal
Claro|Light|Clair|hell|Chiaro|Claro|Светлый|Deschis
Oscuro|Dark|Foncé|dunkel|Scuro|Escuro|Тёмный|Închis
Brillante|Bright|Brillant|leuchtend|Brillante|Brilhante|Яркий|Strălucitor
Pálido|Pale|Pâle|blass|Pallido|Pálido|Бледный|Palid
Colorido|Colourful|Coloré|bunt|Colorato|Colorido|Разноцветный|Colorat
Transparente|Transparent|Transparent|durchsichtig|Trasparente|Transparente|Прозрачный|Transparent
Pastel|Pastel|Pastel|Pastellfarbe|Pastello|Pastel|Пастельный|Pastel
Mate|Matt|Mat|matt|Opaco|Mate|Матовый|Mat
Tono|Shade|Teinte|Farbton|Tonalità|Tom|Оттенок|Nuanță
Tinte|Dye|Teinture|Farbstoff|Tintura|Corante|Краситель|Colorant
Pintura|Paint|Peinture|Farbe|Vernice|Tinta|Краска|Vopsea
Arcoíris|Rainbow|Arc-en-ciel|Regenbogen|Arcobaleno|Arco-íris|Радуга|Curcubeu
Multicolor|Multicoloured|Multicolore|mehrfarbig|Multicolore|Multicolor|Многоцветный|Multicolor
Moreno|Dark-skinned|Brun|dunkelhäutig|Moro|Moreno|Смуглый|Brunet
Rubio|Blond|Blond|blond|Biondo|Loiro|Светловолосый|Blond
Castaño|Chestnut|Châtain|kastanienbraun|Castano|Cor de castanha|Каштановый|Castaniu
Pelirrojo|Redhead|Roux|rothaarig|Rosso di capelli|Ruivo|Рыжий|Roșcat
Canoso|Grey-haired|Aux cheveux gris|grauhaarig|Brizzolato|Grisalho|Седой|Cărunt
Bronce|Bronze|Bronze|Bronze|Bronzo|Bronze|Бронзовый|Bronz
Cobre|Copper|Cuivre|Kupfer|Rame|Cobre|Медный|Cupru
Marfil|Ivory|Ivoire|Elfenbein|Avorio|Marfim|Слоновая кость|Fildeș
Lavanda|Lavender|Lavande|Lavendel|Lavanda|Lavanda|Лавандовый|Lavandă
Menta|Mint|Menthe|Mint|Menta|Menta|Мятный|Mentă
Mostaza|Mustard|Moutarde|Senf|Senape|Mostarda|Горчичный|Muștar
Chocolate|Chocolate|Chocolat|Schokoladenbraun|Cioccolato|Chocolate|Шоколадный|Ciocolatiu
`);

  /* 3 El cuerpo */
  add(3, `
Cabeza|Head|Tête|Kopf|Testa|Cabeça|Голова|Cap
Cara|Face|Visage|Gesicht|Viso|Cara|Лицо|Față
Frente|Forehead|Front|Stirn|Fronte|Testa|Лоб|Frunte
Ceja|Eyebrow|Sourcil|Augenbraue|Sopracciglio|Sobrancelha|Бровь|Sprânceană
Pestaña|Eyelash|Cil|Wimper|Ciglio|Pestana|Ресница|Geană
Mejilla|Cheek|Joue|Wange|Guancia|Bochecha|Щека|Obraz
Barbilla|Chin|Menton|Kinn|Mento|Queixo|Подбородок|Bărbie
Cuello|Neck|Cou|Hals|Collo|Pescoço|Шея|Gât
Garganta|Throat|Gorge|Rachen|Gola|Garganta|Горло|Gâtlej
Lengua|Tongue|Langue|Zunge|Lingua|Língua|Язык|Limbă
Labio|Lip|Lèvre|Lippe|Labbro|Lábio|Губа|Buză
Espalda|Back|Dos|Rücken|Schiena|Costas|Спина|Spate
Pecho|Chest|Poitrine|Brust|Petto|Peito|Грудь|Piept
Estómago|Stomach|Estomac|Magen|Stomaco|Estômago|Желудок|Stomac
Cintura|Waist|Taille|Taille|Vita|Cintura|Талия|Talie
Cadera|Hip|Hanche|Hüfte|Anca|Anca|Таз|Șold
Codo|Elbow|Coude|Ellbogen|Gomito|Cotovelo|Локоть|Cot
Muñeca|Wrist|Poignet|Handgelenk|Polso|Pulso|Запястье|Încheietură
Mano|Hand|Main|Hand|Mano|Mão|Кисть|Mână
Uña|Nail|Ongle|Nagel|Unghia|Unha|Ноготь|Unghie
Rodilla|Knee|Genou|Knie|Ginocchio|Joelho|Колено|Genunchi
Tobillo|Ankle|Cheville|Knöchel|Caviglia|Tornozelo|Лодыжка|Gleznă
Pie|Foot|Pied|Fuß|Piede|Pé|Ступня|Laba piciorului
Talón|Heel|Talon|Ferse|Tallone|Calcanhar|Пятка|Călcâi
Dedo del pie|Toe|Orteil|Zeh|Dito del piede|Dedo do pé|Палец ноги|Deget de la picior
Piel|Skin|Peau|Haut|Pelle|Pele|Кожа|Piele
Hueso|Bone|Os|Knochen|Osso|Osso|Кость|Os
Músculo|Muscle|Muscle|Muskel|Muscolo|Músculo|Мышца|Mușchi
Sangre|Blood|Sang|Blut|Sangue|Sangue|Кровь|Sânge
Corazón|Heart|Cœur|Herz|Cuore|Coração|Сердце|Inimă
Pulmón|Lung|Poumon|Lunge|Polmone|Pulmão|Лёгкое|Plămân
Cerebro|Brain|Cerveau|Gehirn|Cervello|Cérebro|Мозг|Creier
Hígado|Liver|Foie|Leber|Fegato|Fígado|Печень|Ficat
Riñón|Kidney|Rein|Niere|Rene|Rim|Почка|Rinichi
Vena|Vein|Veine|Vene|Vena|Veia|Вена|Venă
Articulación|Joint|Articulation|Gelenk|Articolazione|Articulação|Сустав|Articulație
Columna|Spine|Colonne vertébrale|Wirbelsäule|Colonna vertebrale|Coluna|Позвоночник|Coloană vertebrală
Costilla|Rib|Côte|Rippe|Costola|Costela|Ребро|Coastă
Cráneo|Skull|Crâne|Schädel|Cranio|Crânio|Череп|Craniu
Mandíbula|Jaw|Mâchoire|Kiefer|Mascella|Maxilar|Челюсть|Maxilar
Barba|Beard|Barbe|Bart|Barba|Barba|Борода|Barbă
Bigote|Moustache|Moustache|Schnurrbart|Baffi|Bigode|Усы|Mustață
Ombligo|Navel|Nombril|Nabel|Ombelico|Umbigo|Пупок|Buric
Pulgar|Thumb|Pouce|Daumen|Pollice|Polegar|Большой палец|Degetul mare
Palma|Palm|Paume|Handfläche|Palmo|Palma|Ладонь|Palmă
Puño|Fist|Poing|Faust|Pugno|Punho|Кулак|Pumn
Pantorrilla|Calf|Mollet|Wade|Polpaccio|Barriga da perna|Икра|Gambă
Muslo|Thigh|Cuisse|Oberschenkel|Coscia|Coxa|Бедро|Coapsă
Axila|Armpit|Aisselle|Achselhöhle|Ascella|Axila|Подмышка|Subsuoară
Cuerpo|Body|Corps|Körper|Corpo|Corpo|Тело|Corp
`);

  /* 4 En casa */
  add(4, `
Cama|Bed|Lit|Bett|Letto|Cama|Кровать|Pat
Colchón|Mattress|Matelas|Matratze|Materasso|Colchão|Матрас|Saltea
Manta|Blanket|Couverture|Wolldecke|Coperta|Cobertor|Одеяло|Pătură
Sábana|Sheet|Drap|Laken|Lenzuolo|Lençol|Простыня|Cearșaf
Cortina|Curtain|Rideau|Vorhang|Tenda|Cortina|Занавеска|Perdea
Alfombra|Rug|Tapis|Teppich|Tappeto|Tapete|Ковёр|Covor
Cuadro|Picture|Tableau|Bild|Quadro|Quadro|Картина|Tablou
Reloj|Clock|Horloge|Uhr|Orologio|Relógio|Часы|Ceas
Ventana|Window|Fenêtre|Fenster|Finestra|Janela|Окно|Fereastră
Puerta|Door|Porte|Tür|Porta|Porta|Дверь|Ușă
Techo|Ceiling|Plafond|Zimmerdecke|Soffitto|Teto|Потолок|Tavan
Pared|Wall|Mur|Wand|Parete|Parede|Стена|Perete
Suelo|Floor|Sol|Boden|Pavimento|Chão|Пол|Podea
Escalera|Stairs|Escalier|Treppe|Scala|Escada|Лестница|Scară
Ascensor|Lift|Ascenseur|Aufzug|Ascensore|Elevador|Лифт|Lift
Balcón|Balcony|Balcon|Balkon|Balcone|Varanda|Балкон|Balcon
Jardín|Garden|Jardin|Garten|Giardino|Jardim|Сад|Grădină
Garaje|Garage|Garage|Garage|Garage|Garagem|Гараж|Garaj
Cocina|Kitchen|Cuisine|Küche|Cucina|Cozinha|Кухня|Bucătărie
Baño|Bathroom|Salle de bain|Badezimmer|Bagno|Casa de banho|Ванная|Baie
Dormitorio|Bedroom|Chambre à coucher|Schlafzimmer|Camera da letto|Quarto de dormir|Спальня|Dormitor
Sala|Living room|Salon|Wohnzimmer|Soggiorno|Sala de estar|Гостиная|Living
Comedor|Dining room|Salle à manger|Esszimmer|Sala da pranzo|Sala de jantar|Столовая|Sufragerie
Pasillo|Corridor|Couloir|Flur|Corridoio|Corredor|Коридор|Coridor
Sótano|Basement|Sous-sol|Keller|Seminterrato|Cave|Подвал|Subsol
Desván|Attic|Grenier|Dachboden|Soffitta|Sótão|Чердак|Pod
Refrigerador|Fridge|Réfrigérateur|Kühlschrank|Frigorifero|Frigorífico|Холодильник|Frigider
Horno|Oven|Four|Backofen|Forno|Forno|Духовка|Cuptor
Microondas|Microwave|Micro-ondes|Mikrowelle|Microonde|Micro-ondas|Микроволновка|Cuptor cu microunde
Lavadora|Washing machine|Machine à laver|Waschmaschine|Lavatrice|Máquina de lavar|Стиральная машина|Mașină de spălat
Plato|Plate|Assiette|Teller|Piatto|Prato|Тарелка|Farfurie
Vaso|Glass|Verre|Glas|Bicchiere|Copo|Стакан|Pahar
Taza|Cup|Tasse|Tasse|Tazza|Chávena|Чашка|Ceașcă
Cuchara|Spoon|Cuillère|Löffel|Cucchiaio|Colher|Ложка|Lingură
Tenedor|Fork|Fourchette|Gabel|Forchetta|Garfo|Вилка|Furculiță
Cuchillo|Knife|Couteau|Messer|Coltello|Faca|Нож|Cuțit
Olla|Pot|Casserole|Topf|Pentola|Panela|Кастрюля|Oală
Sartén|Frying pan|Poêle|Pfanne|Padella|Frigideira|Сковорода|Tigaie
Botella|Bottle|Bouteille|Flasche|Bottiglia|Garrafa|Бутылка|Sticlă
Jarra|Jug|Pichet|Krug|Brocca|Jarro|Кувшин|Carafă
Cubo|Bucket|Seau|Eimer|Secchio|Balde|Ведро|Găleată
Esponja|Sponge|Éponge|Schwamm|Spugna|Esponja|Губка|Burete
Jabón|Soap|Savon|Seife|Sapone|Sabonete|Мыло|Săpun
Cepillo de dientes|Toothbrush|Brosse à dents|Zahnbürste|Spazzolino|Escova de dentes|Зубная щётка|Periuță de dinți
Papel higiénico|Toilet paper|Papier toilette|Toilettenpapier|Carta igienica|Papel higiénico|Туалетная бумага|Hârtie igienică
Ducha|Shower|Douche|Dusche|Doccia|Duche|Душ|Duș
Lavabo|Sink|Lavabo|Waschbecken|Lavandino|Lavatório|Раковина|Chiuvetă
Inodoro|Toilet|Toilettes|Toilette|Water|Sanita|Унитаз|Toaletă
Grifo|Tap|Robinet|Wasserhahn|Rubinetto|Torneira|Кран|Robinet
Enchufe|Socket|Prise|Steckdose|Presa|Tomada|Розетка|Priză
`);

  /* 5 La naturaleza */
  add(5, `
Sol|Sun|Soleil|Sonne|Sole|Sol|Солнце|Soare
Luna|Moon|Lune|Mond|Luna|Lua|Луна|Lună
Nube|Cloud|Nuage|Wolke|Nuvola|Nuvem|Облако|Nor
Lluvia|Rain|Pluie|Regen|Pioggia|Chuva|Дождь|Ploaie
Nieve|Snow|Neige|Schnee|Neve|Neve|Снег|Zăpadă
Viento|Wind|Vent|Wind|Vento|Vento|Ветер|Vânt
Tormenta|Storm|Orage|Gewitter|Temporale|Tempestade|Гроза|Furtună
Rayo|Lightning bolt|Éclair|Blitz|Fulmine|Raio|Молния|Fulger
Niebla|Fog|Brouillard|Nebel|Nebbia|Nevoeiro|Туман|Ceață
Arcoíris|Rainbow|Arc-en-ciel|Regenbogen|Arcobaleno|Arco-íris|Радуга|Curcubeu
Mar|Sea|Mer|Meer|Mare|Mar|Море|Mare
Océano|Ocean|Océan|Ozean|Oceano|Oceano|Океан|Ocean
Playa|Beach|Plage|Strand|Spiaggia|Praia|Пляж|Plajă
Isla|Island|Île|Insel|Isola|Ilha|Остров|Insulă
Costa|Coast|Côte|Küste|Costa|Costa|Побережье|Coastă
Ola|Wave|Vague|Welle|Onda|Onda|Волна|Val
Cascada|Waterfall|Cascade|Wasserfall|Cascata|Cascata|Водопад|Cascadă
Arroyo|Stream|Ruisseau|Bach|Ruscello|Ribeiro|Ручей|Pârâu
Pantano|Swamp|Marais|Sumpf|Palude|Pântano|Болото|Mlaștină
Laguna|Lagoon|Lagune|Lagune|Laguna|Lagoa|Лагуна|Lagună
Selva|Jungle|Jungle|Dschungel|Giungla|Selva|Джунгли|Junglă
Desierto|Desert|Désert|Wüste|Deserto|Deserto|Пустыня|Deșert
Valle|Valley|Vallée|Tal|Valle|Vale|Долина|Vale
Colina|Hill|Colline|Hügel|Collina|Colina|Холм|Deal
Volcán|Volcano|Volcan|Vulkan|Vulcano|Vulcão|Вулкан|Vulcan
Cueva|Cave|Grotte|Höhle|Grotta|Gruta|Пещера|Peșteră
Acantilado|Cliff|Falaise|Klippe|Scogliera|Falésia|Утёс|Faleză
Pradera|Meadow|Prairie|Wiese|Prato|Prado|Луг|Pajiște
Campo|Countryside|Campagne|Land|Campagna|Campo|Поле|Câmp
Llanura|Plain|Plaine|Ebene|Pianura|Planície|Равнина|Câmpie
Hoja|Leaf|Feuille|Blatt|Foglia|Folha|Лист|Frunză
Rama|Branch|Branche|Ast|Ramo|Ramo|Ветка|Ramură
Raíz|Root|Racine|Wurzel|Radice|Raiz|Корень|Rădăcină
Tronco|Trunk|Tronc|Stamm|Tronco|Tronco|Ствол|Trunchi
Semilla|Seed|Graine|Samen|Seme|Semente|Семя|Sămânță
Hierba|Grass|Herbe|Gras|Erba|Erva|Трава|Iarbă
Musgo|Moss|Mousse|Moos|Muschio|Musgo|Мох|Mușchi
Arbusto|Bush|Buisson|Busch|Cespuglio|Arbusto|Куст|Tufiș
Rosa|Rose|Rose|Rose|Rosa|Rosa|Роза|Trandafir
Girasol|Sunflower|Tournesol|Sonnenblume|Girasole|Girassol|Подсолнух|Floarea-soarelui
Fuego|Fire|Feu|Feuer|Fuoco|Fogo|Огонь|Foc
Tierra|Earth|Terre|Erde|Terra|Terra|Земля|Pământ
Agua|Water|Eau|Wasser|Acqua|Água|Вода|Apă
Aire|Air|Air|Luft|Aria|Ar|Воздух|Aer
Hielo|Ice|Glace|Eis|Ghiaccio|Gelo|Лёд|Gheață
Barro|Mud|Boue|Schlamm|Fango|Lama|Грязь|Noroi
Roca|Rock|Roche|Fels|Roccia|Rocha|Скала|Rocă
Sendero|Path|Sentier|Pfad|Sentiero|Trilho|Тропа|Potecă
Paisaje|Landscape|Paysage|Landschaft|Paesaggio|Paisagem|Пейзаж|Peisaj
Horizonte|Horizon|Horizon|Horizont|Orizzonte|Horizonte|Горизонт|Orizont
`);
})();
