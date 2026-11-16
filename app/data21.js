/* Diccionario: 6 categorías nuevas (Ropa, Transporte, Profesiones, Familia y amigos, La ciudad, Tecnología), 60 palabras cada una.
   Con ellas el diccionario llega a 12 categorías y 720 palabras. Formato de cada línea: es|en|fr|de|it|pt|ru|ro.
   Español neutro latinoamericano. Escritas por Claude; pendientes de revisión por hablantes nativos. */
(() => {
  const LG = ["en", "fr", "de", "it", "pt", "ru", "ro"];
  const cat = (id, name, icon, enName, text) => {
    const c = { id, name, icon, w: [], t: {} };
    LG.forEach(l => { c.t[l] = []; });
    text.trim().split("\n").forEach(line => {
      const p = line.split("|"); c.w.push(p[0]);
      LG.forEach((l, k) => c.t[l].push(p[k + 1]));
    });
    DICT_CATS.push(c);
    if (window.LEARN && LEARN.en) LEARN.en.dictNames[id] = enName;
  };

  cat("clothes", "Ropa", "bag", "Clothes", `
Camisa|Shirt|Chemise|Hemd|Camicia|Camisa|Рубашка|Cămașă
Camiseta|T-shirt|T-shirt|T-Shirt|Maglietta|Camiseta|Футболка|Tricou
Pantalón|Trousers|Pantalon|Hose|Pantaloni|Calças|Брюки|Pantaloni
Jeans|Jeans|Jean|Jeans|Jeans|Jeans|Джинсы|Blugi
Falda|Skirt|Jupe|Rock|Gonna|Saia|Юбка|Fustă
Vestido|Dress|Robe|Kleid|Vestito|Vestido|Платье|Rochie
Chaqueta|Jacket|Veste|Jacke|Giacca|Casaco|Куртка|Jachetă
Abrigo|Coat|Manteau|Mantel|Cappotto|Sobretudo|Пальто|Palton
Suéter|Sweater|Pull|Pullover|Maglione|Camisola|Свитер|Pulover
Sudadera|Sweatshirt|Sweat|Sweatshirt|Felpa|Sweatshirt|Толстовка|Hanorac
Calcetines|Socks|Chaussettes|Socken|Calzini|Peúgas|Носки|Șosete
Zapatos|Shoes|Chaussures|Schuhe|Scarpe|Sapatos|Туфли|Pantofi
Botas|Boots|Bottes|Stiefel|Stivali|Botas|Сапоги|Cizme
Sandalias|Sandals|Sandales|Sandalen|Sandali|Sandálias|Сандалии|Sandale
Zapatos deportivos|Trainers|Baskets|Turnschuhe|Scarpe da ginnastica|Sapatilhas|Кроссовки|Adidași
Gorra|Cap|Casquette|Schirmmütze|Berretto|Boné|Кепка|Șapcă
Sombrero|Hat|Chapeau|Hut|Cappello|Chapéu|Шляпа|Pălărie
Bufanda|Scarf|Écharpe|Schal|Sciarpa|Cachecol|Шарф|Fular
Guantes|Gloves|Gants|Handschuhe|Guanti|Luvas|Перчатки|Mănuși
Cinturón|Belt|Ceinture|Gürtel|Cintura|Cinto|Ремень|Curea
Corbata|Tie|Cravate|Krawatte|Cravatta|Gravata|Галстук|Cravată
Traje|Suit|Costume|Anzug|Abito|Fato|Костюм|Costum
Pijama|Pyjamas|Pyjama|Schlafanzug|Pigiama|Pijama|Пижама|Pijama
Ropa interior|Underwear|Sous-vêtements|Unterwäsche|Biancheria intima|Roupa interior|Нижнее бельё|Lenjerie intimă
Traje de baño|Swimsuit|Maillot de bain|Badeanzug|Costume da bagno|Fato de banho|Купальник|Costum de baie
Bolso|Handbag|Sac à main|Handtasche|Borsa|Mala|Сумка|Geantă
Mochila|Backpack|Sac à dos|Rucksack|Zaino|Mochila|Рюкзак|Rucsac
Paraguas|Umbrella|Parapluie|Regenschirm|Ombrello|Guarda-chuva|Зонт|Umbrelă
Lentes|Glasses|Lunettes|Brille|Occhiali|Óculos|Очки|Ochelari
Reloj|Watch|Montre|Armbanduhr|Orologio|Relógio|Часы|Ceas
Anillo|Ring|Bague|Ring|Anello|Anel|Кольцо|Inel
Collar|Necklace|Collier|Halskette|Collana|Colar|Ожерелье|Colier
Pulsera|Bracelet|Bracelet|Armband|Braccialetto|Pulseira|Браслет|Brățară
Aretes|Earrings|Boucles d'oreilles|Ohrringe|Orecchini|Brincos|Серьги|Cercei
Bolsillo|Pocket|Poche|Tasche|Tasca|Bolso|Карман|Buzunar
Botón|Button|Bouton|Knopf|Bottone|Botão|Пуговица|Nasture
Cierre|Zip|Fermeture éclair|Reißverschluss|Cerniera|Fecho|Молния|Fermoar
Manga|Sleeve|Manche|Ärmel|Manica|Manga|Рукав|Mânecă
Cuello|Collar|Col|Kragen|Colletto|Gola|Воротник|Guler
Talla|Size|Taille|Größe|Taglia|Tamanho|Размер|Mărime
Tela|Fabric|Tissu|Stoff|Tessuto|Tecido|Ткань|Țesătură
Algodón|Cotton|Coton|Baumwolle|Cotone|Algodão|Хлопок|Bumbac
Lana|Wool|Laine|Wolle|Lana|Lã|Шерсть|Lână
Seda|Silk|Soie|Seide|Seta|Seda|Шёлк|Mătase
Cuero|Leather|Cuir|Leder|Pelle|Couro|Кожа|Piele
Chaleco|Waistcoat|Gilet|Weste|Gilet|Colete|Жилет|Vestă
Blusa|Blouse|Chemisier|Bluse|Camicetta|Blusa|Блузка|Bluză
Pantalón corto|Shorts|Short|Shorts|Pantaloncini|Calções|Шорты|Pantaloni scurți
Mallas|Leggings|Legging|Leggings|Leggings|Leggings|Легинсы|Colanți
Delantal|Apron|Tablier|Schürze|Grembiule|Avental|Фартук|Șorț
Bata|Dressing gown|Robe de chambre|Bademantel|Vestaglia|Roupão|Халат|Halat
Uniforme|Uniform|Uniforme|Uniform|Divisa|Uniforme|Униформа|Uniformă
Impermeable|Raincoat|Imperméable|Regenmantel|Impermeabile|Impermeável|Дождевик|Pelerină de ploaie
Medias|Stockings|Bas|Strümpfe|Calze|Meias|Чулки|Ciorapi
Tacones|High heels|Talons hauts|Absatzschuhe|Tacchi alti|Saltos altos|Туфли на каблуке|Pantofi cu toc
Pañuelo|Handkerchief|Mouchoir|Taschentuch|Fazzoletto|Lenço|Платок|Batistă
Billetera|Wallet|Portefeuille|Geldbeutel|Portafoglio|Carteira|Кошелёк|Portofel
Gorro|Woolly hat|Bonnet|Mütze|Cuffia|Gorro|Шапка|Căciulă
Disfraz|Fancy dress|Déguisement|Kostüm|Maschera|Fantasia|Маскарадный костюм|Costum de carnaval
Pantuflas|Slippers|Pantoufles|Hausschuhe|Pantofole|Pantufas|Тапочки|Papuci de casă
`);

  cat("transport", "Transporte", "plane", "Transport", `
Auto|Car|Voiture|Auto|Macchina|Carro|Машина|Mașină
Autobús|Bus|Autobus|Bus|Autobus|Autocarro|Автобус|Autobuz
Tren|Train|Train|Zug|Treno|Comboio|Поезд|Tren
Avión|Plane|Avion|Flugzeug|Aereo|Avião|Самолёт|Avion
Barco|Ship|Navire|Schiff|Nave|Navio|Корабль|Navă
Bote|Small boat|Barque|Boot|Barca|Barco|Лодка|Barcă
Bicicleta|Bicycle|Vélo|Fahrrad|Bicicletta|Bicicleta|Велосипед|Bicicletă
Motocicleta|Motorbike|Moto|Motorrad|Moto|Mota|Мотоцикл|Motocicletă
Camión|Lorry|Camion|Lastwagen|Camion|Camião|Грузовик|Camion
Taxi|Taxi|Taxi|Taxi|Taxi|Táxi|Такси|Taxi
Metro|Underground|Métro|U-Bahn|Metropolitana|Metro|Метро|Metrou
Tranvía|Tram|Tramway|Straßenbahn|Tram|Elétrico|Трамвай|Tramvai
Estación|Station|Gare|Bahnhof|Stazione|Estação|Вокзал|Gară
Aeropuerto|Airport|Aéroport|Flughafen|Aeroporto|Aeroporto|Аэропорт|Aeroport
Puerto|Port|Port|Hafen|Porto|Porto|Порт|Port
Parada|Stop|Arrêt|Haltestelle|Fermata|Paragem|Остановка|Stație
Andén|Platform|Quai|Bahnsteig|Binario|Cais|Платформа|Peron
Boleto|Ticket|Billet|Fahrkarte|Biglietto|Bilhete|Билет|Bilet
Pasajero|Passenger|Passager|Passagier|Passeggero|Passageiro|Пассажир|Pasager
Conductor|Driver|Conducteur|Fahrer|Conducente|Condutor|Водитель|Șofer
Piloto|Pilot|Pilote|Pilot|Pilota|Piloto|Пилот|Pilot
Equipaje|Luggage|Bagages|Gepäck|Bagaglio|Bagagem|Багаж|Bagaj
Maleta|Suitcase|Valise|Koffer|Valigia|Mala|Чемодан|Valiză
Pasaporte|Passport|Passeport|Reisepass|Passaporto|Passaporte|Паспорт|Pașaport
Visa|Visa|Visa|Visum|Visto|Visto|Виза|Viză
Vuelo|Flight|Vol|Flug|Volo|Voo|Рейс|Zbor
Salida|Departure|Départ|Abfahrt|Partenza|Partida|Отправление|Plecare
Llegada|Arrival|Arrivée|Ankunft|Arrivo|Chegada|Прибытие|Sosire
Retraso|Delay|Retard|Verspätung|Ritardo|Atraso|Задержка|Întârziere
Horario|Timetable|Horaire|Fahrplan|Orario|Horário|Расписание|Orar
Carretera|Road|Route|Landstraße|Strada|Estrada|Шоссе|Șosea
Autopista|Motorway|Autoroute|Autobahn|Autostrada|Autoestrada|Автострада|Autostradă
Semáforo|Traffic light|Feu de signalisation|Ampel|Semaforo|Semáforo|Светофор|Semafor
Cruce|Junction|Carrefour|Kreuzung|Incrocio|Cruzamento|Перекрёсток|Intersecție
Puente|Bridge|Pont|Brücke|Ponte|Ponte|Мост|Pod
Túnel|Tunnel|Tunnel|Tunnel|Galleria|Túnel|Туннель|Tunel
Gasolina|Petrol|Essence|Benzin|Benzina|Gasolina|Бензин|Benzină
Gasolinera|Petrol station|Station-service|Tankstelle|Distributore di benzina|Posto de gasolina|Заправка|Benzinărie
Estacionamiento|Car park|Parking|Parkplatz|Parcheggio|Estacionamento|Парковка|Parcare
Multa|Fine|Amende|Bußgeld|Multa|Multa|Штраф|Amendă
Licencia de conducir|Driving licence|Permis de conduire|Führerschein|Patente|Carta de condução|Водительские права|Permis de conducere
Casco|Helmet|Casque|Helm|Casco|Capacete|Шлем|Cască
Cinturón de seguridad|Seat belt|Ceinture de sécurité|Sicherheitsgurt|Cintura di sicurezza|Cinto de segurança|Ремень безопасности|Centură de siguranță
Rueda|Wheel|Roue|Rad|Ruota|Roda|Колесо|Roată
Motor|Engine|Moteur|Motor|Motore|Motor|Двигатель|Motor
Freno|Brake|Frein|Bremse|Freno|Travão|Тормоз|Frână
Volante|Steering wheel|Volant|Lenkrad|Volante|Volante|Руль|Volan
Batería|Battery|Batterie|Batterie|Batteria|Bateria|Аккумулятор|Baterie
Ambulancia|Ambulance|Ambulance|Krankenwagen|Ambulanza|Ambulância|Скорая помощь|Ambulanță
Remolque|Trailer|Remorque|Anhänger|Rimorchio|Reboque|Прицеп|Remorcă
Mapa|Map|Carte|Karte|Mappa|Mapa|Карта|Hartă
Ruta|Route|Itinéraire|Route|Percorso|Rota|Маршрут|Traseu
Peatón|Pedestrian|Piéton|Fußgänger|Pedone|Peão|Пешеход|Pieton
Cruce peatonal|Pedestrian crossing|Passage piéton|Zebrastreifen|Strisce pedonali|Passadeira|Пешеходный переход|Trecere de pietoni
Acera|Pavement|Trottoir|Bürgersteig|Marciapiede|Passeio|Тротуар|Trotuar
Esquina|Corner|Coin|Ecke|Angolo|Esquina|Угол|Colț
Ferry|Ferry|Ferry|Fähre|Traghetto|Ferry|Паром|Feribot
Puerta de embarque|Gate|Porte d'embarquement|Flugsteig|Uscita d'imbarco|Porta de embarque|Выход на посадку|Poartă de îmbarcare
Despegue|Take-off|Décollage|Start|Decollo|Descolagem|Взлёт|Decolare
Aterrizaje|Landing|Atterrissage|Landung|Atterraggio|Aterragem|Посадка|Aterizare
`);

  cat("jobs", "Profesiones", "briefcase", "Jobs", `
Médico|Doctor|Médecin|Arzt|Medico|Médico|Врач|Medic
Enfermero|Nurse|Infirmier|Krankenpfleger|Infermiere|Enfermeiro|Медбрат|Asistent medical
Dentista|Dentist|Dentiste|Zahnarzt|Dentista|Dentista|Стоматолог|Dentist
Profesor|Teacher|Professeur|Lehrer|Insegnante|Professor|Учитель|Profesor
Estudiante|Student|Étudiant|Student|Studente|Estudante|Студент|Student
Ingeniero|Engineer|Ingénieur|Ingenieur|Ingegnere|Engenheiro|Инженер|Inginer
Abogado|Lawyer|Avocat|Rechtsanwalt|Avvocato|Advogado|Адвокат|Avocat
Juez|Judge|Juge|Richter|Giudice|Juiz|Судья|Judecător
Policía|Police officer|Policier|Polizist|Poliziotto|Polícia|Полицейский|Polițist
Bombero|Firefighter|Pompier|Feuerwehrmann|Pompiere|Bombeiro|Пожарный|Pompier
Cocinero|Cook|Cuisinier|Koch|Cuoco|Cozinheiro|Повар|Bucătar
Mesero|Waiter|Serveur|Kellner|Cameriere|Empregado de mesa|Официант|Chelner
Panadero|Baker|Boulanger|Bäcker|Panettiere|Padeiro|Пекарь|Brutar
Carnicero|Butcher|Boucher|Metzger|Macellaio|Talhante|Мясник|Măcelar
Granjero|Farmer|Agriculteur|Landwirt|Agricoltore|Agricultor|Фермер|Fermier
Pescador|Fisherman|Pêcheur|Fischer|Pescatore|Pescador|Рыбак|Pescar
Pintor|Painter|Peintre|Maler|Pittore|Pintor|Художник|Pictor
Albañil|Bricklayer|Maçon|Maurer|Muratore|Pedreiro|Каменщик|Zidar
Carpintero|Carpenter|Menuisier|Tischler|Falegname|Carpinteiro|Плотник|Tâmplar
Electricista|Electrician|Électricien|Elektriker|Elettricista|Eletricista|Электрик|Electrician
Plomero|Plumber|Plombier|Klempner|Idraulico|Canalizador|Сантехник|Instalator
Mecánico|Mechanic|Mécanicien|Mechaniker|Meccanico|Mecânico|Механик|Mecanic
Peluquero|Hairdresser|Coiffeur|Friseur|Parrucchiere|Cabeleireiro|Парикмахер|Frizer
Cartero|Postman|Facteur|Briefträger|Postino|Carteiro|Почтальон|Poștaș
Taxista|Taxi driver|Chauffeur de taxi|Taxifahrer|Tassista|Taxista|Таксист|Taximetrist
Piloto|Pilot|Pilote|Pilot|Pilota|Piloto|Пилот|Pilot
Auxiliar de vuelo|Flight attendant|Hôtesse de l'air|Flugbegleiter|Assistente di volo|Assistente de bordo|Бортпроводник|Însoțitor de bord
Cajero|Cashier|Caissier|Kassierer|Cassiere|Caixa|Кассир|Casier
Vendedor|Salesperson|Vendeur|Verkäufer|Commesso|Vendedor|Продавец|Vânzător
Secretario|Secretary|Secrétaire|Sekretär|Segretario|Secretário|Секретарь|Secretar
Contador|Accountant|Comptable|Buchhalter|Contabile|Contabilista|Бухгалтер|Contabil
Gerente|Manager|Gérant|Manager|Responsabile|Gerente|Менеджер|Manager
Director|Director|Directeur|Direktor|Direttore|Diretor|Директор|Director
Jefe|Boss|Patron|Chef|Capo|Chefe|Начальник|Șef
Empleado|Employee|Employé|Angestellter|Dipendente|Funcionário|Сотрудник|Angajat
Obrero|Worker|Ouvrier|Arbeiter|Operaio|Operário|Рабочий|Muncitor
Programador|Programmer|Programmeur|Programmierer|Programmatore|Programador|Программист|Programator
Diseñador|Designer|Concepteur|Designer|Designer|Designer|Дизайнер|Designer
Periodista|Journalist|Journaliste|Journalist|Giornalista|Jornalista|Журналист|Jurnalist
Escritor|Writer|Écrivain|Schriftsteller|Scrittore|Escritor|Писатель|Scriitor
Músico|Musician|Musicien|Musiker|Musicista|Músico|Музыкант|Muzician
Cantante|Singer|Chanteur|Sänger|Cantante|Cantor|Певец|Cântăreț
Actor|Actor|Acteur|Schauspieler|Attore|Ator|Актёр|Actor
Fotógrafo|Photographer|Photographe|Fotograf|Fotografo|Fotógrafo|Фотограф|Fotograf
Arquitecto|Architect|Architecte|Architekt|Architetto|Arquiteto|Архитектор|Arhitect
Científico|Scientist|Scientifique|Wissenschaftler|Scienziato|Cientista|Учёный|Om de știință
Veterinario|Vet|Vétérinaire|Tierarzt|Veterinario|Veterinário|Ветеринар|Veterinar
Farmacéutico|Pharmacist|Pharmacien|Apotheker|Farmacista|Farmacêutico|Фармацевт|Farmacist
Psicólogo|Psychologist|Psychologue|Psychologe|Psicologo|Psicólogo|Психолог|Psiholog
Traductor|Translator|Traducteur|Übersetzer|Traduttore|Tradutor|Переводчик|Traducător
Intérprete|Interpreter|Interprète|Dolmetscher|Interprete|Intérprete|Устный переводчик|Interpret
Guía turístico|Tour guide|Guide touristique|Reiseführer|Guida turistica|Guia turístico|Гид|Ghid turistic
Guardia de seguridad|Security guard|Agent de sécurité|Wachmann|Guardia giurata|Segurança|Охранник|Agent de pază
Soldado|Soldier|Soldat|Soldat|Soldato|Soldado|Солдат|Soldat
Presidente|President|Président|Präsident|Presidente|Presidente|Президент|Președinte
Alcalde|Mayor|Maire|Bürgermeister|Sindaco|Presidente da câmara|Мэр|Primar
Atleta|Athlete|Athlète|Athlet|Atleta|Atleta|Спортсмен|Atlet
Entrenador|Coach|Entraîneur|Trainer|Allenatore|Treinador|Тренер|Antrenor
Niñera|Babysitter|Baby-sitter|Babysitter|Babysitter|Ama|Няня|Bonă
Jardinero|Gardener|Jardinier|Gärtner|Giardiniere|Jardineiro|Садовник|Grădinar
`);

  cat("family", "Familia y amigos", "family", "Family and friends", `
Madre|Mother|Mère|Mutter|Madre|Mãe|Мать|Mamă
Padre|Father|Père|Vater|Padre|Pai|Отец|Tată
Mamá|Mum|Maman|Mama|Mamma|Mamã|Мама|Mami
Papá|Dad|Papa|Papa|Papà|Papá|Папа|Tati
Hijo|Son|Fils|Sohn|Figlio|Filho|Сын|Fiu
Hija|Daughter|Fille|Tochter|Figlia|Filha|Дочь|Fiică
Hermano|Brother|Frère|Bruder|Fratello|Irmão|Брат|Frate
Hermana|Sister|Sœur|Schwester|Sorella|Irmã|Сестра|Soră
Abuelo|Grandfather|Grand-père|Großvater|Nonno|Avô|Дедушка|Bunic
Abuela|Grandmother|Grand-mère|Großmutter|Nonna|Avó|Бабушка|Bunică
Nieto|Grandson|Petit-fils|Enkel|Nipotino|Neto|Внук|Nepot
Nieta|Granddaughter|Petite-fille|Enkelin|Nipotina|Neta|Внучка|Nepoată
Tío|Uncle|Oncle|Onkel|Zio|Tio|Дядя|Unchi
Tía|Aunt|Tante|Tante|Zia|Tia|Тётя|Mătușă
Primo|Cousin|Cousin|Cousin|Cugino|Primo|Двоюродный брат|Văr
Prima|Female cousin|Cousine|Cousine|Cugina|Prima|Двоюродная сестра|Verișoară
Esposo|Husband|Mari|Ehemann|Marito|Marido|Муж|Soț
Esposa|Wife|Épouse|Ehefrau|Moglie|Mulher|Жена|Soție
Novio|Boyfriend|Petit ami|Fester Freund|Fidanzato|Namorado|Парень|Iubit
Novia|Girlfriend|Petite amie|Feste Freundin|Fidanzata|Namorada|Девушка|Iubită
Suegro|Father-in-law|Beau-père|Schwiegervater|Suocero|Sogro|Тесть|Socru
Suegra|Mother-in-law|Belle-mère|Schwiegermutter|Suocera|Sogra|Тёща|Soacră
Yerno|Son-in-law|Gendre|Schwiegersohn|Genero|Genro|Зять|Ginere
Nuera|Daughter-in-law|Belle-fille|Schwiegertochter|Nuora|Nora|Невестка|Noră
Bebé|Baby|Bébé|Baby|Bebè|Bebé|Младенец|Bebeluș
Niño|Boy|Garçon|Junge|Bambino|Menino|Мальчик|Băiat
Niña|Girl|Fillette|Mädchen|Bambina|Menina|Девочка|Fată
Hijos|Children|Enfants|Kinder|Figli|Filhos|Дети|Copii
Padres|Parents|Parents|Eltern|Genitori|Pais|Родители|Părinți
Hermanos|Siblings|Frères et sœurs|Geschwister|Fratelli|Irmãos|Братья и сёстры|Frați
Gemelos|Twins|Jumeaux|Zwillinge|Gemelli|Gémeos|Близнецы|Gemeni
Familia|Family|Famille|Familie|Famiglia|Família|Семья|Familie
Pariente|Relative|Membre de la famille|Verwandter|Parente|Parente|Родственник|Rudă
Antepasados|Ancestors|Ancêtres|Vorfahren|Antenati|Antepassados|Предки|Strămoși
Huérfano|Orphan|Orphelin|Waise|Orfano|Órfão|Сирота|Orfan
Viudo|Widower|Veuf|Witwer|Vedovo|Viúvo|Вдовец|Văduv
Viuda|Widow|Veuve|Witwe|Vedova|Viúva|Вдова|Văduvă
Soltero|Single|Célibataire|Ledig|Celibe|Solteiro|Холостой|Necăsătorit
Casado|Married|Marié|Verheiratet|Sposato|Casado|Женатый|Căsătorit
Divorciado|Divorced|Divorcé|Geschieden|Divorziato|Divorciado|Разведённый|Divorțat
Compañero|Partner|Partenaire|Partner|Compagno|Companheiro|Партнёр|Partener
Amigo|Friend|Ami|Freund|Amico|Amigo|Друг|Prieten
Amiga|Female friend|Amie|Freundin|Amica|Amiga|Подруга|Prietenă
Vecino|Neighbour|Voisin|Nachbar|Vicino|Vizinho|Сосед|Vecin
Invitado|Guest|Invité|Gast|Ospite|Convidado|Гость|Invitat
Cumpleaños|Birthday|Anniversaire|Geburtstag|Compleanno|Aniversário|День рождения|Zi de naștere
Boda|Wedding|Mariage|Hochzeit|Matrimonio|Casamento|Свадьба|Nuntă
Fiesta|Party|Fête|Party|Festa|Festa|Вечеринка|Petrecere
Regalo|Gift|Cadeau|Geschenk|Regalo|Presente|Подарок|Cadou
Apellido|Surname|Nom de famille|Nachname|Cognome|Apelido|Фамилия|Nume de familie
Edad|Age|Âge|Alter|Età|Idade|Возраст|Vârstă
Embarazo|Pregnancy|Grossesse|Schwangerschaft|Gravidanza|Gravidez|Беременность|Sarcină
Adulto|Adult|Adulte|Erwachsener|Adulto|Adulto|Взрослый|Adult
Adolescente|Teenager|Adolescent|Jugendlicher|Adolescente|Adolescente|Подросток|Adolescent
Joven|Young person|Jeune|Junger Mensch|Giovane|Jovem|Молодой человек|Tânăr
Anciano|Elderly person|Personne âgée|Älterer Mensch|Anziano|Idoso|Пожилой человек|Persoană în vârstă
Generación|Generation|Génération|Generation|Generazione|Geração|Поколение|Generație
Herencia|Inheritance|Héritage|Erbe|Eredità|Herança|Наследство|Moștenire
Hogar|Home|Foyer|Zuhause|Focolare|Lar|Домашний очаг|Cămin
Mascota|Pet|Animal de compagnie|Haustier|Animale domestico|Animal de estimação|Домашнее животное|Animal de companie
`);

  cat("city", "La ciudad", "pin", "The city", `
Ciudad|City|Ville|Stadt|Città|Cidade|Город|Oraș
Pueblo|Village|Village|Dorf|Paese|Aldeia|Деревня|Sat
Barrio|Neighbourhood|Quartier|Viertel|Quartiere|Bairro|Район|Cartier
Centro|City centre|Centre-ville|Stadtzentrum|Centro|Centro|Центр|Centru
Calle|Street|Rue|Straße|Via|Rua|Улица|Stradă
Avenida|Avenue|Avenue|Allee|Viale|Avenida|Проспект|Bulevard
Plaza|Square|Place|Platz|Piazza|Praça|Площадь|Piață
Parque|Park|Parc|Park|Parco|Parque|Парк|Parc
Jardín|Garden|Jardin|Garten|Giardino|Jardim|Сад|Grădină
Edificio|Building|Bâtiment|Gebäude|Edificio|Edifício|Здание|Clădire
Casa|House|Maison|Haus|Casa|Casa|Дом|Casă
Apartamento|Flat|Appartement|Wohnung|Appartamento|Apartamento|Квартира|Apartament
Escalera|Stairs|Escalier|Treppe|Scala|Escada|Лестница|Scară
Iglesia|Church|Église|Kirche|Chiesa|Igreja|Церковь|Biserică
Catedral|Cathedral|Cathédrale|Dom|Cattedrale|Catedral|Собор|Catedrală
Castillo|Castle|Château|Burg|Castello|Castelo|Замок|Castel
Palacio|Palace|Palais|Palast|Palazzo|Palácio|Дворец|Palat
Museo|Museum|Musée|Museum|Museo|Museu|Музей|Muzeu
Biblioteca|Library|Bibliothèque|Bibliothek|Biblioteca|Biblioteca|Библиотека|Bibliotecă
Escuela|School|École|Schule|Scuola|Escola|Школа|Școală
Universidad|University|Université|Universität|Università|Universidade|Университет|Universitate
Hospital|Hospital|Hôpital|Krankenhaus|Ospedale|Hospital|Больница|Spital
Farmacia|Pharmacy|Pharmacie|Apotheke|Farmacia|Farmácia|Аптека|Farmacie
Banco|Bank|Banque|Bank|Banca|Banco|Банк|Bancă
Correo|Post office|Bureau de poste|Postamt|Ufficio postale|Correios|Почта|Poștă
Comisaría|Police station|Commissariat|Polizeiwache|Commissariato|Esquadra|Полицейский участок|Secție de poliție
Ayuntamiento|Town hall|Mairie|Rathaus|Municipio|Câmara municipal|Мэрия|Primărie
Mercado|Market|Marché|Markt|Mercato|Mercado|Рынок|Piață de alimente
Supermercado|Supermarket|Supermarché|Supermarkt|Supermercato|Supermercado|Супермаркет|Supermarket
Tienda|Shop|Magasin|Geschäft|Negozio|Loja|Магазин|Magazin
Centro comercial|Shopping centre|Centre commercial|Einkaufszentrum|Centro commerciale|Centro comercial|Торговый центр|Centru comercial
Panadería|Bakery|Boulangerie|Bäckerei|Panetteria|Padaria|Пекарня|Brutărie
Carnicería|Butcher's|Boucherie|Metzgerei|Macelleria|Talho|Мясная лавка|Măcelărie
Restaurante|Restaurant|Restaurant|Restaurant|Ristorante|Restaurante|Ресторан|Restaurant
Cafetería|Café|Café|Café|Caffè|Café|Кафе|Cafenea
Hotel|Hotel|Hôtel|Hotel|Hotel|Hotel|Отель|Hotel
Cine|Cinema|Cinéma|Kino|Cinema|Cinema|Кинотеатр|Cinematograf
Teatro|Theatre|Théâtre|Theater|Teatro|Teatro|Театр|Teatru
Estadio|Stadium|Stade|Stadion|Stadio|Estádio|Стадион|Stadion
Gimnasio|Gym|Salle de sport|Fitnessstudio|Palestra|Ginásio|Спортзал|Sală de sport
Piscina|Swimming pool|Piscine|Schwimmbad|Piscina|Piscina|Бассейн|Piscină
Fábrica|Factory|Usine|Fabrik|Fabbrica|Fábrica|Фабрика|Fabrică
Oficina|Office|Bureau|Büro|Ufficio|Escritório|Офис|Birou
Cárcel|Prison|Prison|Gefängnis|Prigione|Prisão|Тюрьма|Închisoare
Cementerio|Cemetery|Cimetière|Friedhof|Cimitero|Cemitério|Кладбище|Cimitir
Puente|Bridge|Pont|Brücke|Ponte|Ponte|Мост|Pod
Fuente|Fountain|Fontaine|Brunnen|Fontana|Fonte|Фонтан|Fântână
Monumento|Monument|Monument|Denkmal|Monumento|Monumento|Памятник|Monument
Estatua|Statue|Statue|Statue|Statua|Estátua|Статуя|Statuie
Torre|Tower|Tour|Turm|Torre|Torre|Башня|Turn
Muralla|City wall|Muraille|Stadtmauer|Mura|Muralha|Крепостная стена|Zid de apărare
Cuadra|Block|Pâté de maisons|Häuserblock|Isolato|Quarteirão|Квартал|Cvartal
Basura|Rubbish|Ordures|Müll|Spazzatura|Lixo|Мусор|Gunoi
Papelera|Bin|Poubelle|Mülleimer|Cestino|Caixote do lixo|Урна|Coș de gunoi
Farola|Streetlamp|Réverbère|Straßenlaterne|Lampione|Candeeiro de rua|Фонарь|Felinar
Habitantes|Inhabitants|Habitants|Einwohner|Abitanti|Habitantes|Жители|Locuitori
Ciudadano|Citizen|Citoyen|Bürger|Cittadino|Cidadão|Гражданин|Cetățean
Turista|Tourist|Touriste|Tourist|Turista|Turista|Турист|Turist
Dirección|Address|Adresse|Adresse|Indirizzo|Morada|Адрес|Adresă
Código postal|Postcode|Code postal|Postleitzahl|CAP|Código postal|Почтовый индекс|Cod poștal
`);

  cat("tech", "Tecnología", "laptop", "Technology", `
Computadora|Computer|Ordinateur|Computer|Computer|Computador|Компьютер|Calculator
Laptop|Laptop|Ordinateur portable|Laptop|Portatile|Portátil|Ноутбук|Laptop
Celular|Mobile phone|Téléphone portable|Handy|Cellulare|Telemóvel|Мобильный телефон|Telefon mobil
Tableta|Tablet|Tablette|Tablet|Tablet|Tablet|Планшет|Tabletă
Pantalla|Screen|Écran|Bildschirm|Schermo|Ecrã|Экран|Ecran
Teclado|Keyboard|Clavier|Tastatur|Tastiera|Teclado|Клавиатура|Tastatură
Ratón|Mouse|Souris|Maus|Mouse|Rato|Мышь|Mouse
Impresora|Printer|Imprimante|Drucker|Stampante|Impressora|Принтер|Imprimantă
Cargador|Charger|Chargeur|Ladegerät|Caricabatterie|Carregador|Зарядное устройство|Încărcător
Batería|Battery|Batterie|Akku|Batteria|Bateria|Аккумулятор|Baterie
Cable|Cable|Câble|Kabel|Cavo|Cabo|Кабель|Cablu
Auriculares|Headphones|Écouteurs|Kopfhörer|Cuffie|Auscultadores|Наушники|Căști
Altavoz|Speaker|Haut-parleur|Lautsprecher|Altoparlante|Altifalante|Колонка|Difuzor
Cámara|Camera|Appareil photo|Kamera|Fotocamera|Câmara|Камера|Cameră foto
Micrófono|Microphone|Microphone|Mikrofon|Microfono|Microfone|Микрофон|Microfon
Internet|Internet|Internet|Internet|Internet|Internet|Интернет|Internet
Wifi|Wi-Fi|Wi-Fi|WLAN|Wi-Fi|Wi-Fi|Вай-фай|Wi-Fi
Contraseña|Password|Mot de passe|Passwort|Password|Palavra-passe|Пароль|Parolă
Usuario|User|Utilisateur|Benutzer|Utente|Utilizador|Пользователь|Utilizator
Cuenta|Account|Compte|Konto|Account|Conta|Учётная запись|Cont
Correo electrónico|Email|E-mail|E-Mail|Email|Email|Электронная почта|E-mail
Mensaje|Message|Message|Nachricht|Messaggio|Mensagem|Сообщение|Mesaj
Llamada|Call|Appel|Anruf|Chiamata|Chamada|Звонок|Apel
Videollamada|Video call|Appel vidéo|Videoanruf|Videochiamata|Videochamada|Видеозвонок|Apel video
Aplicación|App|Application|App|App|Aplicação|Приложение|Aplicație
Programa|Program|Programme|Programm|Programma|Programa|Программа|Program
Archivo|File|Fichier|Datei|File|Ficheiro|Файл|Fișier
Carpeta|Folder|Dossier|Ordner|Cartella|Pasta|Папка|Dosar
Documento|Document|Document|Dokument|Documento|Documento|Документ|Document
Foto|Photo|Photo|Foto|Foto|Foto|Фото|Fotografie
Video|Video|Vidéo|Video|Video|Vídeo|Видео|Videoclip
Sitio web|Website|Site web|Website|Sito web|Site|Сайт|Site web
Página|Page|Page|Seite|Pagina|Página|Страница|Pagină
Enlace|Link|Lien|Link|Collegamento|Ligação|Ссылка|Link
Buscador|Search engine|Moteur de recherche|Suchmaschine|Motore di ricerca|Motor de busca|Поисковик|Motor de căutare
Red social|Social network|Réseau social|Soziales Netzwerk|Social network|Rede social|Социальная сеть|Rețea socială
Perfil|Profile|Profil|Profil|Profilo|Perfil|Профиль|Profil
Seguidor|Follower|Abonné|Follower|Seguace|Seguidor|Подписчик|Urmăritor
Publicación|Post|Publication|Beitrag|Post|Publicação|Публикация|Postare
Comentario|Comment|Commentaire|Kommentar|Commento|Comentário|Комментарий|Comentariu
Descargar|Download|Télécharger|Herunterladen|Scaricare|Descarregar|Скачать|A descărca
Subir|Upload|Téléverser|Hochladen|Caricare|Carregar|Загрузить|A încărca
Guardar|Save|Enregistrer|Speichern|Salvare|Guardar|Сохранить|A salva
Borrar|Delete|Supprimer|Löschen|Eliminare|Apagar|Удалить|A șterge
Copiar|Copy|Copier|Kopieren|Copiare|Copiar|Копировать|A copia
Pegar|Paste|Coller|Einfügen|Incollare|Colar|Вставить|A lipi
Imprimir|Print|Imprimer|Drucken|Stampare|Imprimir|Печатать|A imprima
Encender|Switch on|Allumer|Einschalten|Accendere|Ligar|Включить|A porni
Apagar|Switch off|Éteindre|Ausschalten|Spegnere|Desligar|Выключить|A opri
Conectar|Connect|Connecter|Verbinden|Collegare|Conectar|Подключить|A conecta
Instalar|Install|Installer|Installieren|Installare|Instalar|Установить|A instala
Actualizar|Update|Mettre à jour|Aktualisieren|Aggiornare|Atualizar|Обновить|A actualiza
Reiniciar|Restart|Redémarrer|Neu starten|Riavviare|Reiniciar|Перезагрузить|A reporni
Configuración|Settings|Paramètres|Einstellungen|Impostazioni|Definições|Настройки|Setări
Error|Error|Erreur|Fehler|Errore|Erro|Ошибка|Eroare
Virus|Virus|Virus|Virus|Virus|Vírus|Вирус|Virus
Datos|Data|Données|Daten|Dati|Dados|Данные|Date
Nube|Cloud|Cloud|Cloud|Cloud|Nuvem|Облако|Cloud
Inteligencia artificial|Artificial intelligence|Intelligence artificielle|Künstliche Intelligenz|Intelligenza artificiale|Inteligência artificial|Искусственный интеллект|Inteligență artificială
Robot|Robot|Robot|Roboter|Robot|Robô|Робот|Robot
`);
})();
