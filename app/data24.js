/* Vocabulario ampliado: palabras extra para las unidades (se añaden al final de cada lista, tras las originales).
   more(unidad, texto): una línea por palabra con los campos es|en|fr|de|it|pt|ru|ro.
   Las listas de COURSES.es.t comparten arrays con UNITS, así que basta con añadir a cada idioma. */
(() => {
  const LANGS = ["es", "en", "fr", "de", "it", "pt", "ru", "ro"];
  const more = (unit, text) => {
    text.trim().split("\n").forEach(line => {
      const r = line.split("|");
      LANGS.forEach((l, k) => window.COURSES[l].t[unit][0].push(r[k]));
    });
  };
  /* 20 · Reservas y viajes (60 palabras) */
  more(20, `
Vuelo directo|Direct flight|Vol direct|Direktflug|Volo diretto|Voo direto|Прямой рейс|Zbor direct
Vuelo de conexión|Connecting flight|Vol avec correspondance|Anschlussflug|Volo in coincidenza|Voo de ligação|Стыковочный рейс|Zbor de legătură
Vuelo cancelado|Cancelled flight|Vol annulé|annullierter Flug|Volo cancellato|Voo cancelado|Отменённый рейс|Zbor anulat
Equipaje de mano|Hand luggage|Bagage à main|Handgepäck|Bagaglio a mano|Bagagem de mão|Ручная кладь|Bagaj de mână
Equipaje facturado|Checked luggage|Bagage en soute|aufgegebenes Gepäck|Bagaglio da stiva|Bagagem de porão|Сдаваемый багаж|Bagaj de cală
Equipaje perdido|Lost luggage|Bagage perdu|verlorenes Gepäck|Bagaglio smarrito|Bagagem extraviada|Потерянный багаж|Bagaj pierdut
Sobrepeso|Excess weight|Excédent de poids|Übergewicht|Eccesso di peso|Excesso de peso|Перевес|Exces de greutate
Etiqueta de equipaje|Luggage tag|Étiquette de bagage|Gepäckanhänger|Etichetta del bagaglio|Etiqueta de bagagem|Багажная бирка|Etichetă de bagaj
Mostrador|Check-in desk|Comptoir d'enregistrement|Schalter|Banco accettazione|Balcão|Стойка регистрации|Ghișeu de înregistrare
Control de seguridad|Security check|Contrôle de sécurité|Sicherheitskontrolle|Controllo di sicurezza|Controlo de segurança|Досмотр|Control de securitate
Control de pasaportes|Passport control|Contrôle des passeports|Passkontrolle|Controllo passaporti|Controlo de passaportes|Паспортный контроль|Control pașapoarte
Puerta de embarque|Boarding gate|Porte d'embarquement|Flugsteig|Uscita d'imbarco|Porta de embarque|Выход на посадку|Poartă de îmbarcare
Cinta de equipaje|Baggage carousel|Tapis à bagages|Gepäckband|Nastro bagagli|Tapete de bagagens|Багажная лента|Bandă de bagaje
Objetos perdidos|Lost property|Objets trouvés|Fundbüro|Oggetti smarriti|Perdidos e achados|Бюро находок|Obiecte pierdute
Sobreventa|Overbooking|Surréservation|Überbuchung|Overbooking|Excesso de reservas|Овербукинг|Supra-rezervare
Compensación|Compensation|Indemnisation|Entschädigung|Risarcimento|Compensação|Компенсация|Compensație
Reclamo|Complaint|Réclamation|Beschwerde|Reclamo|Reclamação|Претензия|Reclamație
Hostal|Guesthouse|Pension|Pension|Pensione|Pensão|Гостевой дом|Pensiune
Albergue|Hostel|Auberge de jeunesse|Jugendherberge|Ostello|Albergue|Хостел|Hostel
Campamento|Campsite|Camping|Campingplatz|Campeggio|Parque de campismo|Кемпинг|Camping
Vista al mar|Sea view|Vue sur la mer|Meerblick|Vista sul mare|Vista para o mar|Вид на море|Vedere la mare
Desayuno incluido|Breakfast included|Petit-déjeuner inclus|Frühstück inklusive|Colazione inclusa|Pequeno-almoço incluído|Завтрак включён|Mic dejun inclus
Habitación individual|Single room|Chambre simple|Einzelzimmer|Camera singola|Quarto individual|Одноместный номер|Cameră single
Ascensor|Lift|Ascenseur|Aufzug|Ascensore|Elevador|Лифт|Lift
Aire acondicionado|Air conditioning|Climatisation|Klimaanlage|Aria condizionata|Ar condicionado|Кондиционер|Aer condiționat
Servicio de habitaciones|Room service|Service en chambre|Zimmerservice|Servizio in camera|Serviço de quartos|Обслуживание номеров|Room service
Lavandería|Laundry|Laverie|Wäscherei|Lavanderia|Lavandaria|Прачечная|Spălătorie
Caja fuerte|Safe|Coffre-fort|Safe|Cassaforte|Cofre|Сейф|Seif
Información|Information|Information|Auskunft|Informazioni|Informação|Справочная|Informații
Oficina de turismo|Tourist office|Office de tourisme|Touristeninformation|Ufficio turistico|Posto de turismo|Туристическое бюро|Oficiu de turism
Plano de la ciudad|City map|Plan de la ville|Stadtplan|Piantina della città|Mapa da cidade|План города|Harta orașului
Folleto|Brochure|Brochure|Prospekt|Opuscolo|Folheto|Брошюра|Pliant
Entrada|Admission ticket|Billet d'entrée|Eintrittskarte|Biglietto d'ingresso|Bilhete de entrada|Входной билет|Bilet de intrare
Visita guiada|Guided tour|Visite guidée|Führung|Visita guidata|Visita guiada|Экскурсия с гидом|Vizită ghidată
Guía turístico|Tour guide|Guide touristique|Reiseleiter|Guida turistica|Guia turístico|Гид|Ghid turistic
Souvenir|Souvenir|Souvenir|Souvenir|Souvenir|Lembrança|Сувенир|Suvenir
Alquiler de autos|Car hire|Location de voitures|Autovermietung|Noleggio auto|Aluguer de carros|Прокат автомобилей|Închiriere de mașini
Licencia de conducir|Driving licence|Permis de conduire|Führerschein|Patente di guida|Carta de condução|Водительские права|Permis de conducere
Conducir|To drive|Conduire|fahren|Guidare|Conduzir|Водить|A conduce
Estacionar|To park|Se garer|parken|Parcheggiare|Estacionar|Парковаться|A parca
Autopista|Motorway|Autoroute|Autobahn|Autostrada|Autoestrada|Автострада|Autostradă
Peaje|Toll|Péage|Maut|Pedaggio|Portagem|Платная дорога|Taxă de drum
Gasolinera|Petrol station|Station-service|Tankstelle|Distributore di benzina|Bomba de gasolina|Заправка|Benzinărie
Frontera|Border|Frontière|Grenze|Frontiera|Fronteira|Граница|Graniță
Declarar|To declare|Déclarer|anmelden|Dichiarare|Declarar|Декларировать|A declara
Vacuna|Vaccine|Vaccin|Impfung|Vaccino|Vacina|Прививка|Vaccin
Moneda extranjera|Foreign currency|Devise étrangère|Fremdwährung|Valuta estera|Moeda estrangeira|Иностранная валюта|Valută străină
Huso horario|Time zone|Fuseau horaire|Zeitzone|Fuso orario|Fuso horário|Часовой пояс|Fus orar
Hora local|Local time|Heure locale|Ortszeit|Ora locale|Hora local|Местное время|Ora locală
Mareo|Motion sickness|Mal des transports|Reiseübelkeit|Mal di viaggio|Enjoo|Укачивание|Rău de mișcare
Bolso de mano|Handbag|Sac à main|Handtasche|Borsa a mano|Mala de mão|Ручная сумка|Geantă de mână
Adaptador de enchufe|Plug adapter|Adaptateur de prise|Steckdosenadapter|Adattatore per presa|Adaptador de ficha|Переходник для розетки|Adaptor de priză
Seguro médico|Health insurance|Assurance maladie|Krankenversicherung|Assicurazione sanitaria|Seguro de saúde|Медицинская страховка|Asigurare medicală
Boleto electrónico|E-ticket|Billet électronique|elektronisches Ticket|Biglietto elettronico|Bilhete eletrónico|Электронный билет|Bilet electronic
Estación de autobuses|Bus station|Gare routière|Busbahnhof|Stazione degli autobus|Estação de autocarros|Автовокзал|Autogară
Hora de llegada|Arrival time|Heure d'arrivée|Ankunftszeit|Orario di arrivo|Hora de chegada|Время прибытия|Ora sosirii
Transbordo|Change of transport|Changement|Umsteigen|Cambio|Transbordo|Пересадка на другой транспорт|Schimbare
Alojarse|To stay|Séjourner|übernachten|Alloggiare|Ficar alojado|Останавливаться|A sta (la hotel)
Hacer la maleta|To pack|Faire sa valise|den Koffer packen|Fare la valigia|Fazer a mala|Собирать чемодан|A face bagajul
Perderse|To get lost|Se perdre|sich verlaufen|Perdersi|Perder-se|Заблудиться|A se rătăci
`);

  /* 21 · Estudios (60 palabras) */
  more(21, `
Facultad|Faculty|Faculté|Fakultät|Facoltà|Faculdade|Факультет|Facultate
Decano|Dean|Doyen|Dekan|Preside di facoltà|Decano|Декан|Decan
Compañero de clase|Classmate|Camarade de classe|Mitschüler|Compagno di classe|Colega de turma|Одноклассник|Coleg de clasă
Trabajo en equipo|Teamwork|Travail d'équipe|Teamarbeit|Lavoro di squadra|Trabalho de equipa|Командная работа|Muncă în echipă
Proyecto|Project|Projet|Projekt|Progetto|Projeto|Проект|Proiect
Informe|Report|Rapport|Bericht|Relazione|Relatório|Отчёт|Raport
Resumen|Summary|Résumé|Zusammenfassung|Riassunto|Resumo|Краткое изложение|Rezumat
Esquema|Outline|Plan|Gliederung|Schema|Esquema|План работы|Schemă
Libro de texto|Textbook|Manuel scolaire|Lehrbuch|Libro di testo|Manual escolar|Учебник|Manual
Diccionario|Dictionary|Dictionnaire|Wörterbuch|Dizionario|Dicionário|Словарь|Dicționar
Mochila escolar|School bag|Cartable|Schulranzen|Zaino scolastico|Mochila escolar|Школьный рюкзак|Ghiozdan
Calculadora|Calculator|Calculatrice|Taschenrechner|Calcolatrice|Calculadora|Калькулятор|Calculator
Regla|Ruler|Règle|Lineal|Righello|Régua|Линейка|Riglă
Lápiz|Pencil|Crayon|Bleistift|Matita|Lápis|Карандаш|Creion
Goma de borrar|Rubber|Gomme|Radiergummi|Gomma|Borracha|Ластик|Radieră
Pupitre|Desk|Pupitre|Schulbank|Banco|Carteira|Парта|Bancă
Patio escolar|Playground|Cour de récréation|Schulhof|Cortile della scuola|Recreio|Школьный двор|Curtea școlii
Uniforme escolar|School uniform|Uniforme scolaire|Schuluniform|Divisa scolastica|Uniforme escolar|Школьная форма|Uniformă școlară
Matemáticas|Mathematics|Mathématiques|Mathematik|Matematica|Matemática|Математика|Matematică
Física|Physics|Physique|Physik|Fisica|Física|Физика|Fizică
Química|Chemistry|Chimie|Chemie|Chimica|Química|Химия|Chimie
Biología|Biology|Biologie|Biologie|Biologia|Biologia|Биология|Biologie
Historia|History|Histoire|Geschichte|Storia|História|История|Istorie
Geografía|Geography|Géographie|Geografie|Geografia|Geografia|География|Geografie
Literatura|Literature|Littérature|Literatur|Letteratura|Literatura|Литература|Literatură
Filosofía|Philosophy|Philosophie|Philosophie|Filosofia|Filosofia|Философия|Filosofie
Educación física|Physical education|Éducation physique|Sportunterricht|Educazione fisica|Educação física|Физкультура|Educație fizică
Informática|Computer science|Informatique|Informatik|Informatica|Informática|Информатика|Informatică
Aprendizaje|Learning|Apprentissage|Lernen|Apprendimento|Aprendizagem|Обучение|Învățare
Memorizar|To memorise|Mémoriser|auswendig lernen|Memorizzare|Memorizar|Запоминать|A memora
Repasar|To revise|Réviser|wiederholen|Ripassare|Rever|Повторять|A repeta
Practicar|To practise|S'entraîner|üben|Esercitarsi|Praticar|Практиковаться|A exersa
Entregar|To hand in|Rendre|abgeben|Consegnare|Entregar|Сдавать|A preda
Corregir|To mark|Corriger|korrigieren|Correggere|Corrigir|Проверять|A corecta
Boletín de notas|Report card|Bulletin scolaire|Zeugnis|Pagella|Boletim de notas|Табель успеваемости|Carnet de note
Promedio|Average|Moyenne|Durchschnitt|Media|Média|Средний балл|Medie
Repetir el curso|To repeat a year|Redoubler|ein Jahr wiederholen|Ripetere l'anno|Repetir o ano|Остаться на второй год|A repeta anul
Graduación|Graduation|Remise des diplômes|Abschlussfeier|Cerimonia di laurea|Cerimónia de graduação|Выпускной|Absolvire
Becario|Scholarship holder|Boursier|Stipendiat|Borsista|Bolseiro|Стипендиат|Bursier
Maestría|Master's degree|Master|Master|Laurea magistrale|Mestrado|Магистратура|Master
Posgrado|Postgraduate course|Troisième cycle|Aufbaustudium|Post-laurea|Pós-graduação|Аспирантура|Studii postuniversitare
Plazo de entrega|Deadline|Date limite|Abgabefrist|Scadenza|Prazo de entrega|Срок сдачи|Termen de predare
Curso en línea|Online course|Cours en ligne|Online-Kurs|Corso online|Curso online|Онлайн-курс|Curs online
Clase particular|Private lesson|Cours particulier|Nachhilfe|Lezione privata|Aula particular|Частный урок|Meditație
Intercambio estudiantil|Student exchange|Échange universitaire|Austauschprogramm|Scambio studentesco|Intercâmbio de estudantes|Студенческий обмен|Schimb de studenți
Residencia universitaria|Student halls|Résidence universitaire|Studentenwohnheim|Residenza universitaria|Residência universitária|Студенческое общежитие|Cămin studențesc
Comedor universitario|Canteen|Restaurant universitaire|Mensa|Mensa universitaria|Cantina|Студенческая столовая|Cantină
Conferencia|Lecture|Conférence|Vorlesung|Conferenza|Palestra|Лекция|Conferință
Taller|Workshop|Atelier|Workshop|Laboratorio didattico|Oficina|Мастер-класс|Atelier
Laboratorio|Laboratory|Laboratoire|Labor|Laboratorio|Laboratório|Лаборатория|Laborator
Experimento|Experiment|Expérience|Experiment|Esperimento|Experiência|Эксперимент|Experiment
Bibliografía|Bibliography|Bibliographie|Literaturverzeichnis|Bibliografia|Bibliografia|Список литературы|Bibliografie
Citar|To quote|Citer|zitieren|Citare|Citar|Цитировать|A cita
Plagio|Plagiarism|Plagiat|Plagiat|Plagio|Plágio|Плагиат|Plagiat
Fuente|Source|Source|Quelle|Fonte|Fonte|Источник|Sursă
Párrafo|Paragraph|Paragraphe|Absatz|Paragrafo|Parágrafo|Абзац|Paragraf
Introducción|Introduction|Introduction|Einleitung|Introduzione|Introdução|Введение|Introducere
Conclusión|Conclusion|Conclusion|Schluss|Conclusione|Conclusão|Заключение|Concluzie
Subrayar|To underline|Souligner|unterstreichen|Sottolineare|Sublinhar|Подчёркивать|A sublinia
Concentrarse|To concentrate|Se concentrer|sich konzentrieren|Concentrarsi|Concentrar-se|Сосредотачиваться|A se concentra
`);

  /* 22 · Tecnología y medios (57 palabras) */
  more(22, `
Computadora portátil|Laptop|Ordinateur portable|Laptop|Computer portatile|Computador portátil|Ноутбук|Laptop
Tableta|Tablet|Tablette|Tablet|Tablet|Tablet|Планшет|Tabletă
Impresora|Printer|Imprimante|Drucker|Stampante|Impressora|Принтер|Imprimantă
Altavoz|Speaker|Enceinte|Lautsprecher|Altoparlante|Coluna|Колонка|Boxă
Cámara|Camera|Appareil photo|Kamera|Fotocamera|Máquina fotográfica|Фотоаппарат|Aparat foto
Micrófono|Microphone|Microphone|Mikrofon|Microfono|Microfone|Микрофон|Microfon
Memoria|Memory|Mémoire|Speicher|Memoria|Memória|Память|Memorie
Disco duro|Hard drive|Disque dur|Festplatte|Disco rigido|Disco rígido|Жёсткий диск|Hard disk
Memoria USB|USB stick|Clé USB|USB-Stick|Chiavetta USB|Pen USB|Флешка|Stick USB
Cable|Cable|Câble|Kabel|Cavo|Cabo|Кабель|Cablu
Carpeta|Folder|Dossier|Ordner|Cartella|Pasta|Папка|Dosar
Documento|Document|Document|Dokument|Documento|Documento|Документ|Document
Correo electrónico|Email|E-mail|E-Mail|Email|Email|Электронная почта|E-mail
Bandeja de entrada|Inbox|Boîte de réception|Posteingang|Posta in arrivo|Caixa de entrada|Входящие|Inbox
Adjunto|Attachment|Pièce jointe|Anhang|Allegato|Anexo|Вложение|Atașament
Contraseña segura|Strong password|Mot de passe sécurisé|sicheres Passwort|Password sicura|Palavra-passe segura|Надёжный пароль|Parolă sigură
Usuario|User|Utilisateur|Benutzer|Utente|Utilizador|Пользователь|Utilizator
Cuenta|Account|Compte|Konto|Account|Conta|Учётная запись|Cont
Iniciar sesión|To log in|Ouvrir une session|sich anmelden|Accedere|Iniciar sessão|Войти в систему|A se autentifica
Cerrar sesión|To log out|Se déconnecter|sich abmelden|Uscire|Terminar sessão|Выйти из системы|A se deconecta
Descarga|Download|Téléchargement|Download|Download|Transferência|Загрузка|Descărcare
Subir un archivo|To upload a file|Téléverser un fichier|eine Datei hochladen|Caricare un file|Carregar um ficheiro|Загрузить файл|A încărca un fișier
Guardar|To save|Enregistrer|speichern|Salvare|Guardar|Сохранять|A salva
Borrar|To delete|Supprimer|löschen|Eliminare|Apagar|Удалять|A șterge
Copiar|To copy|Copier|kopieren|Copiare|Copiar|Копировать|A copia
Pegar|To paste|Coller|einfügen|Incollare|Colar|Вставлять|A lipi
Imprimir|To print|Imprimer|drucken|Stampare|Imprimir|Печатать|A imprima
Configuración|Settings|Paramètres|Einstellungen|Impostazioni|Definições|Настройки|Setări
Notificación|Notification|Notification|Benachrichtigung|Notifica|Notificação|Уведомление|Notificare
Señal|Signal|Signal|Signal|Segnale|Sinal|Сигнал|Semnal
Cobertura|Coverage|Couverture réseau|Netzabdeckung|Copertura|Cobertura|Зона покрытия|Acoperire
Datos móviles|Mobile data|Données mobiles|mobile Daten|Dati mobili|Dados móveis|Мобильный интернет|Date mobile
Videollamada|Video call|Appel vidéo|Videoanruf|Videochiamata|Videochamada|Видеозвонок|Apel video
Mensaje de voz|Voice message|Message vocal|Sprachnachricht|Messaggio vocale|Mensagem de voz|Голосовое сообщение|Mesaj vocal
Captura de pantalla|Screenshot|Capture d'écran|Screenshot|Schermata|Captura de ecrã|Скриншот|Captură de ecran
Seguidor|Follower|Abonné|Follower|Follower|Seguidor|Подписчик|Urmăritor
Comentario|Comment|Commentaire|Kommentar|Commento|Comentário|Комментарий|Comentariu
Me gusta|Like|J'aime|Gefällt mir|Mi piace|Gosto|Лайк|Apreciere
Compartir|To share|Partager|teilen|Condividere|Partilhar|Делиться|A distribui
Etiquetar|To tag|Taguer|markieren|Taggare|Etiquetar|Отмечать|A eticheta
Titular|Headline|Titre|Schlagzeile|Titolo|Título|Заголовок|Titlu
Artículo|Article|Article|Artikel|Articolo|Artigo|Статья|Articol
Reportaje|Feature|Reportage|Reportage|Servizio|Reportagem|Репортаж|Reportaj
Entrevista|Interview|Interview|Interview|Intervista|Entrevista|Интервью|Interviu
Periodista|Journalist|Journaliste|Journalist|Giornalista|Jornalista|Журналист|Jurnalist
Canal|Channel|Chaîne|Sender|Canale|Canal|Канал|Canal
Programa de televisión|TV programme|Émission de télévision|Fernsehsendung|Programma televisivo|Programa de televisão|Телепередача|Emisiune de televiziune
Serie|Series|Série|Serie|Serie|Série|Сериал|Serial
Película|Film|Film|Film|Film|Filme|Фильм|Film
Anuncio|Advert|Publicité|Werbung|Pubblicità|Anúncio|Реклама|Reclamă
Radio|Radio|Radio|Radio|Radio|Rádio|Радио|Radio
Podcast|Podcast|Podcast|Podcast|Podcast|Podcast|Подкаст|Podcast
Transmitir en vivo|To stream live|Diffuser en direct|live streamen|Trasmettere in diretta|Transmitir em direto|Вести прямую трансляцию|A transmite în direct
Falso|Fake|Faux|falsch|Falso|Falso|Ложный|Fals
Noticia falsa|Fake news|Fausse information|Falschmeldung|Notizia falsa|Notícia falsa|Фейковая новость|Știre falsă
Privacidad|Privacy|Vie privée|Datenschutz|Privacy|Privacidade|Конфиденциальность|Confidențialitate
Conectarse|To connect|Se connecter|sich verbinden|Collegarsi|Ligar-se|Подключаться|A se conecta
Antivirus|Antivirus|Antivirus|Virenschutz|Antivirus|Antivírus|Антивирус|Antivirus
Servidor|Server|Serveur|Server|Server|Servidor|Сервер|Server
Hacker|Hacker|Pirate informatique|Hacker|Hacker|Pirata informático|Хакер|Hacker
`);

  /* 23 · Hábitos saludables (60 palabras) */
  more(23, `
Gimnasio|Gym|Salle de sport|Fitnessstudio|Palestra|Ginásio|Спортзал|Sală de sport
Entrenador|Trainer|Entraîneur|Trainer|Allenatore|Treinador|Тренер|Antrenor
Correr|To run|Courir|laufen|Correre|Correr|Бегать|A alerga
Nadar|To swim|Nager|schwimmen|Nuotare|Nadar|Плавать|A înota
Montar en bicicleta|To cycle|Faire du vélo|Rad fahren|Andare in bicicletta|Andar de bicicleta|Ездить на велосипеде|A merge pe bicicletă
Senderismo|Hiking|Randonnée|Wandern|Escursionismo|Caminhada na natureza|Пеший туризм|Drumeție
Calentamiento|Warm-up|Échauffement|Aufwärmen|Riscaldamento|Aquecimento|Разминка|Încălzire
Abdominales|Sit-ups|Abdominaux|Bauchmuskelübungen|Addominali|Abdominais|Упражнения на пресс|Abdomene
Flexiones|Push-ups|Pompes|Liegestütze|Flessioni|Flexões|Отжимания|Flotări
Sentadillas|Squats|Squats|Kniebeugen|Squat|Agachamentos|Приседания|Genuflexiuni
Cardio|Cardio|Cardio|Cardiotraining|Cardio|Cardio|Кардиотренировка|Cardio
Maratón|Marathon|Marathon|Marathon|Maratona|Maratona|Марафон|Maraton
Pulso|Pulse|Pouls|Puls|Polso|Pulso|Пульс|Puls
Presión arterial|Blood pressure|Tension artérielle|Blutdruck|Pressione arteriosa|Tensão arterial|Артериальное давление|Tensiune arterială
Colesterol|Cholesterol|Cholestérol|Cholesterin|Colesterolo|Colesterol|Холестерин|Colesterol
Azúcar|Sugar|Sucre|Zucker|Zucchero|Açúcar|Сахар|Zahăr
Grasa|Fat|Graisse|Fett|Grasso|Gordura|Жир|Grăsime
Fibra|Fibre|Fibres|Ballaststoffe|Fibre|Fibra|Клетчатка|Fibre
Hierro|Iron|Fer|Eisen|Ferro|Ferro|Железо|Fier
Calcio|Calcium|Calcium|Kalzium|Calcio|Cálcio|Кальций|Calciu
Carbohidratos|Carbohydrates|Glucides|Kohlenhydrate|Carboidrati|Hidratos de carbono|Углеводы|Carbohidrați
Merienda|Snack|Goûter|Zwischenmahlzeit|Spuntino|Lanche|Перекус|Gustare
Ayuno|Fasting|Jeûne|Fasten|Digiuno|Jejum|Голодание|Post
Comida chatarra|Junk food|Malbouffe|Junkfood|Cibo spazzatura|Fast food|Фастфуд|Junk food
Refresco|Fizzy drink|Boisson gazeuse|Limonade|Bibita gassata|Refrigerante|Газировка|Suc acidulat
Alcohol|Alcohol|Alcool|Alkohol|Alcol|Álcool|Алкоголь|Alcool
Tabaco|Tobacco|Tabac|Tabak|Tabacco|Tabaco|Табак|Tutun
Dejar de fumar|To quit smoking|Arrêter de fumer|mit dem Rauchen aufhören|Smettere di fumare|Deixar de fumar|Бросить курить|A renunța la fumat
Insomnio|Insomnia|Insomnie|Schlaflosigkeit|Insonnia|Insónia|Бессонница|Insomnie
Cansancio|Tiredness|Fatigue|Müdigkeit|Stanchezza|Cansaço|Усталость|Oboseală
Dolor de espalda|Back pain|Mal de dos|Rückenschmerzen|Mal di schiena|Dor nas costas|Боль в спине|Durere de spate
Lesión|Injury|Blessure|Verletzung|Infortunio|Lesão|Травма|Accidentare
Calambre|Cramp|Crampe|Krampf|Crampo|Cãibra|Судорога|Crampă
Fisioterapia|Physiotherapy|Kinésithérapie|Physiotherapie|Fisioterapia|Fisioterapia|Физиотерапия|Fizioterapie
Nutricionista|Nutritionist|Nutritionniste|Ernährungsberater|Nutrizionista|Nutricionista|Диетолог|Nutriționist
Terapia|Therapy|Thérapie|Therapie|Terapia|Terapia|Терапия|Terapie
Ansiedad|Anxiety|Anxiété|Angst|Ansia|Ansiedade|Тревожность|Anxietate
Relajación|Relaxation|Relaxation|Entspannung|Rilassamento|Relaxamento|Расслабление|Relaxare
Atención plena|Mindfulness|Pleine conscience|Achtsamkeit|Consapevolezza|Atenção plena|Осознанность|Atenție conștientă
Bienestar|Well-being|Bien-être|Wohlbefinden|Benessere|Bem-estar|Благополучие|Stare de bine
Rutina|Routine|Routine|Routine|Routine|Rotina|Режим|Rutină
Motivación|Motivation|Motivation|Motivation|Motivazione|Motivação|Мотивация|Motivație
Hacer ejercicio|To exercise|Faire de l'exercice|Sport treiben|Fare esercizio|Fazer exercício|Заниматься спортом|A face mișcare
Perder peso|To lose weight|Perdre du poids|abnehmen|Perdere peso|Perder peso|Худеть|A slăbi
Subir de peso|To put on weight|Prendre du poids|zunehmen|Aumentare di peso|Engordar|Поправляться|A se îngrășa
Mantenerse en forma|To stay in shape|Rester en forme|fit bleiben|Mantenersi in forma|Manter-se em forma|Поддерживать форму|A se menține în formă
En forma|In shape|En forme|fit|In forma|Em forma|В форме|În formă
Sedentario|Sedentary|Sédentaire|bewegungsarm|Sedentario|Sedentário|Малоподвижный|Sedentar
Chequeo médico|Check-up|Bilan de santé|Vorsorgeuntersuchung|Controllo medico|Exame médico|Медосмотр|Control medical
Vacunarse|To get vaccinated|Se faire vacciner|sich impfen lassen|Vaccinarsi|Vacinar-se|Делать прививку|A se vaccina
Higiene|Hygiene|Hygiène|Hygiene|Igiene|Higiene|Гигиена|Igienă
Lavarse las manos|To wash your hands|Se laver les mains|sich die Hände waschen|Lavarsi le mani|Lavar as mãos|Мыть руки|A se spăla pe mâini
Protector solar|Sunscreen|Crème solaire|Sonnencreme|Crema solare|Protetor solar|Солнцезащитный крем|Cremă de protecție solară
Jugo natural|Fresh juice|Jus frais|frischer Saft|Succo fresco|Sumo natural|Свежевыжатый сок|Suc natural
Legumbres|Pulses|Légumineuses|Hülsenfrüchte|Legumi|Leguminosas|Бобовые|Leguminoase
Cereales|Cereals|Céréales|Getreide|Cereali|Cereais|Злаки|Cereale
Grasa saludable|Healthy fat|Bonne graisse|gesundes Fett|Grasso sano|Gordura saudável|Полезные жиры|Grăsime sănătoasă
Cocinar en casa|To cook at home|Cuisiner à la maison|zu Hause kochen|Cucinare in casa|Cozinhar em casa|Готовить дома|A găti acasă
Comer despacio|To eat slowly|Manger lentement|langsam essen|Mangiare lentamente|Comer devagar|Есть медленно|A mânca încet
Descansar|To rest|Se reposer|sich ausruhen|Riposare|Descansar|Отдыхать|A se odihni
`);

  /* 24 · Medio ambiente (57 palabras) */
  more(24, `
Calentamiento global|Global warming|Réchauffement climatique|Erderwärmung|Riscaldamento globale|Aquecimento global|Глобальное потепление|Încălzire globală
Efecto invernadero|Greenhouse effect|Effet de serre|Treibhauseffekt|Effetto serra|Efeito de estufa|Парниковый эффект|Efect de seră
Emisiones|Emissions|Émissions|Emissionen|Emissioni|Emissões|Выбросы|Emisii
Dióxido de carbono|Carbon dioxide|Dioxyde de carbone|Kohlendioxid|Anidride carbonica|Dióxido de carbono|Углекислый газ|Dioxid de carbon
Energía renovable|Renewable energy|Énergie renouvelable|erneuerbare Energie|Energia rinnovabile|Energia renovável|Возобновляемая энергия|Energie regenerabilă
Paneles solares|Solar panels|Panneaux solaires|Solarzellen|Pannelli solari|Painéis solares|Солнечные панели|Panouri solare
Combustible|Fuel|Carburant|Brennstoff|Combustibile|Combustível|Топливо|Combustibil
Petróleo|Oil|Pétrole|Erdöl|Petrolio|Petróleo|Нефть|Petrol
Carbón|Coal|Charbon|Kohle|Carbone|Carvão|Уголь|Cărbune
Gas natural|Natural gas|Gaz naturel|Erdgas|Gas naturale|Gás natural|Природный газ|Gaz natural
Vehículo eléctrico|Electric vehicle|Véhicule électrique|Elektrofahrzeug|Veicolo elettrico|Veículo elétrico|Электромобиль|Vehicul electric
Huella de carbono|Carbon footprint|Empreinte carbone|CO2-Fußabdruck|Impronta di carbonio|Pegada de carbono|Углеродный след|Amprentă de carbon
Deforestación|Deforestation|Déforestation|Entwaldung|Deforestazione|Desflorestação|Вырубка лесов|Defrișare
Incendio forestal|Wildfire|Incendie de forêt|Waldbrand|Incendio boschivo|Incêndio florestal|Лесной пожар|Incendiu de pădure
Inundación|Flood|Inondation|Überschwemmung|Alluvione|Inundação|Наводнение|Inundație
Tormenta|Storm|Tempête|Sturm|Tempesta|Tempestade|Буря|Furtună
Huracán|Hurricane|Ouragan|Hurrikan|Uragano|Furacão|Ураган|Uragan
Terremoto|Earthquake|Tremblement de terre|Erdbeben|Terremoto|Sismo|Землетрясение|Cutremur
Especie|Species|Espèce|Art|Specie|Espécie|Вид|Specie
Extinción|Extinction|Extinction|Aussterben|Estinzione|Extinção|Вымирание|Dispariție
Fauna|Wildlife|Faune|Tierwelt|Fauna|Fauna|Фауна|Faună
Flora|Plant life|Flore|Pflanzenwelt|Flora|Flora|Флора|Floră
Ecosistema|Ecosystem|Écosystème|Ökosystem|Ecosistema|Ecossistema|Экосистема|Ecosistem
Hábitat|Habitat|Habitat|Lebensraum|Habitat|Habitat|Среда обитания|Habitat
Parque nacional|National park|Parc national|Nationalpark|Parco nazionale|Parque nacional|Национальный парк|Parc național
Reserva natural|Nature reserve|Réserve naturelle|Naturschutzgebiet|Riserva naturale|Reserva natural|Заповедник|Rezervație naturală
Arrecife de coral|Coral reef|Récif corallien|Korallenriff|Barriera corallina|Recife de coral|Коралловый риф|Recif de corali
Glaciar|Glacier|Glacier|Gletscher|Ghiacciaio|Glaciar|Ледник|Ghețar
Nivel del mar|Sea level|Niveau de la mer|Meeresspiegel|Livello del mare|Nível do mar|Уровень моря|Nivelul mării
Capa de ozono|Ozone layer|Couche d'ozone|Ozonschicht|Strato di ozono|Camada de ozono|Озоновый слой|Stratul de ozon
Agua potable|Drinking water|Eau potable|Trinkwasser|Acqua potabile|Água potável|Питьевая вода|Apă potabilă
Escasez de agua|Water shortage|Pénurie d'eau|Wasserknappheit|Scarsità d'acqua|Escassez de água|Нехватка воды|Lipsa apei
Residuos|Waste|Résidus|Abfall|Rifiuti|Resíduos|Отходы|Deșeuri
Contenedor|Bin|Conteneur|Container|Cassonetto|Contentor|Контейнер|Container
Papel|Paper|Papier|Papier|Carta|Papel|Бумага|Hârtie
Vidrio|Glass|Verre|Glas|Vetro|Vidro|Стекло|Sticlă
Lata|Tin can|Boîte de conserve|Dose|Lattina|Lata|Жестяная банка|Cutie de conservă
Bolsa de tela|Tote bag|Sac en tissu|Stoffbeutel|Borsa di tela|Saco de pano|Тканевая сумка|Sacoșă de pânză
Envase|Packaging|Emballage|Verpackung|Imballaggio|Embalagem|Упаковка|Ambalaj
Compost|Compost|Compost|Kompost|Compost|Composto|Компост|Compost
Aguas residuales|Sewage|Eaux usées|Abwasser|Acque reflue|Águas residuais|Сточные воды|Ape uzate
Smog|Smog|Smog|Smog|Smog|Poluição atmosférica|Смог|Smog
Ruido|Noise|Bruit|Lärm|Rumore|Ruído|Шум|Zgomot
Cultivo|Crop|Culture|Anbau|Coltivazione|Cultivo|Выращивание|Cultură agricolă
Agricultura|Agriculture|Agriculture|Landwirtschaft|Agricoltura|Agricultura|Сельское хозяйство|Agricultură
Pesticida|Pesticide|Pesticide|Pestizid|Pesticida|Pesticida|Пестицид|Pesticid
Orgánico|Organic|Bio|Bio|Biologico|Biológico|Органический|Ecologic
Consumo responsable|Responsible consumption|Consommation responsable|verantwortungsvoller Konsum|Consumo responsabile|Consumo responsável|Ответственное потребление|Consum responsabil
Sostenible|Sustainable|Durable|nachhaltig|Sostenibile|Sustentável|Устойчивый|Sustenabil
Conservar|To conserve|Préserver|erhalten|Conservare|Conservar|Сохранять|A conserva
Contaminar|To pollute|Polluer|verschmutzen|Inquinare|Poluir|Загрязнять|A polua
Talar|To fell|Abattre|fällen|Abbattere|Abater|Рубить|A tăia
Plantar|To plant|Planter|pflanzen|Piantare|Plantar|Сажать|A planta
Amenazar|To threaten|Menacer|bedrohen|Minacciare|Ameaçar|Угрожать|A amenința
Cuidar|To look after|Prendre soin de|pflegen|Prendersi cura di|Cuidar de|Беречь|A îngriji
Voluntariado|Volunteering|Bénévolat|Ehrenamt|Volontariato|Voluntariado|Волонтёрство|Voluntariat
Campaña|Campaign|Campagne|Kampagne|Campagna|Campanha|Кампания|Campanie
`);

  /* 25 · Cultura y tradiciones (58 palabras) */
  more(25, `
Cultura|Culture|Culture|Kultur|Cultura|Cultura|Культура|Cultură
Folclórico|Folk|Folklorique|Volks-|Folcloristico|Folclórico|Народный|Folcloric
Ritual|Ritual|Rituel|Ritual|Rito|Ritual|Обряд|Ritual
Ofrenda|Offering|Offrande|Opfergabe|Offerta|Oferenda|Приношение|Ofrandă
Procesión|Procession|Procession|Prozession|Processione|Procissão|Шествие|Procesiune
Peregrinación|Pilgrimage|Pèlerinage|Pilgerreise|Pellegrinaggio|Peregrinação|Паломничество|Pelerinaj
Misa|Mass|Messe|Messe|Messa|Missa|Месса|Liturghie
Iglesia|Church|Église|Kirche|Chiesa|Igreja|Церковь|Biserică
Vela|Candle|Bougie|Kerze|Candela|Vela|Свеча|Lumânare
Feria|Fair|Foire|Jahrmarkt|Fiera|Feira|Ярмарка|Târg
Mercado artesanal|Craft market|Marché artisanal|Kunsthandwerksmarkt|Mercato artigianale|Mercado de artesanato|Ярмарка ремёсел|Piață de artizanat
Cerámica|Pottery|Céramique|Keramik|Ceramica|Cerâmica|Керамика|Ceramică
Tejido|Weaving|Tissage|Weberei|Tessuto|Tecido|Ткачество|Țesătură
Bordado|Embroidery|Broderie|Stickerei|Ricamo|Bordado|Вышивка|Broderie
Traje tradicional|Traditional costume|Costume traditionnel|Tracht|Costume tradizionale|Traje tradicional|Национальный костюм|Costum popular
Máscara|Mask|Masque|Maske|Maschera|Máscara|Маска|Mască
Música folclórica|Folk music|Musique folklorique|Volksmusik|Musica folcloristica|Música popular|Народная музыка|Muzică populară
Baile típico|Traditional dance|Danse traditionnelle|Volkstanz|Ballo tradizionale|Dança tradicional|Народный танец|Dans popular
Guitarra|Guitar|Guitare|Gitarre|Chitarra|Guitarra|Гитара|Chitară
Tambor|Drum|Tambour|Trommel|Tamburo|Tambor|Барабан|Tobă
Canción|Song|Chanson|Lied|Canzone|Canção|Песня|Cântec
Cantante|Singer|Chanteur|Sänger|Cantante|Cantor|Певец|Cântăreț
Orquesta|Orchestra|Orchestre|Orchester|Orchestra|Orquestra|Оркестр|Orchestră
Ópera|Opera|Opéra|Oper|Opera|Ópera|Опера|Operă
Museo|Museum|Musée|Museum|Museo|Museu|Музей|Muzeu
Galería de arte|Art gallery|Galerie d'art|Kunstgalerie|Galleria d'arte|Galeria de arte|Картинная галерея|Galerie de artă
Escultura|Sculpture|Sculpture|Skulptur|Scultura|Escultura|Скульптура|Sculptură
Autor|Author|Auteur|Autor|Autore|Autor|Автор|Autor
Poeta|Poet|Poète|Dichter|Poeta|Poeta|Поэт|Poet
Novela|Novel|Roman|Roman|Romanzo|Romance|Роман|Roman
Poesía|Poetry|Poésie|Lyrik|Poesia|Poesia|Поэзия|Poezie
Cuento|Short story|Conte|Erzählung|Racconto|Conto|Рассказ|Poveste
Obra de teatro|Play|Pièce de théâtre|Theaterstück|Opera teatrale|Peça de teatro|Пьеса|Piesă de teatru
Cine|Cinema|Cinéma|Kino|Cinema|Cinema|Кино|Cinema
Director|Director|Réalisateur|Regisseur|Regista|Realizador|Режиссёр|Regizor
Premio|Prize|Prix|Preis|Premio|Prémio|Премия|Premiu
Historia|History|Histoire|Geschichte|Storia|História|История|Istorie
Antiguo|Ancient|Ancien|alt|Antico|Antigo|Древний|Antic
Ruinas|Ruins|Ruines|Ruinen|Rovine|Ruínas|Руины|Ruine
Templo|Temple|Temple|Tempel|Tempio|Templo|Храм|Templu
Castillo|Castle|Château|Burg|Castello|Castelo|Замок|Castel
Palacio|Palace|Palais|Palast|Palazzo|Palácio|Дворец|Palat
Catedral|Cathedral|Cathédrale|Dom|Cattedrale|Catedral|Собор|Catedrală
Mezquita|Mosque|Mosquée|Moschee|Moschea|Mesquita|Мечеть|Moschee
Idioma|Language|Langue|Sprache|Lingua|Língua|Язык|Limbă
Dialecto|Dialect|Dialecte|Dialekt|Dialetto|Dialeto|Диалект|Dialect
Refrán|Proverb|Proverbe|Sprichwort|Proverbio|Provérbio|Пословица|Proverb
Costumbres locales|Local customs|Coutumes locales|lokale Bräuche|Usanze locali|Costumes locais|Местные обычаи|Obiceiuri locale
Saludo tradicional|Traditional greeting|Salutation traditionnelle|traditioneller Gruß|Saluto tradizionale|Cumprimento tradicional|Традиционное приветствие|Salut tradițional
Fiesta del pueblo|Village festival|Fête du village|Dorffest|Festa del paese|Festa da aldeia|Деревенский праздник|Sărbătoarea satului
Cosecha|Harvest|Récolte|Ernte|Raccolto|Colheita|Урожай|Recoltă
Mesa de fiesta|Feast table|Table de fête|Festtafel|Tavola della festa|Mesa de festa|Праздничный стол|Masă festivă
Dulce típico|Traditional sweet|Douceur traditionnelle|traditionelle Süßigkeit|Dolce tipico|Doce típico|Традиционная сладость|Dulce tradițional
Plato típico|Traditional dish|Spécialité locale|traditionelles Gericht|Piatto tipico|Prato típico|Традиционное блюдо|Fel tradițional
Orgulloso de|Proud of|Fier de|stolz auf|Orgoglioso di|Orgulhoso de|Гордящийся|Mândru de
Respetar|To respect|Respecter|respektieren|Rispettare|Respeitar|Уважать|A respecta
Transmitir|To pass on|Transmettre|weitergeben|Tramandare|Transmitir|Передавать|A transmite
Preservar|To preserve|Préserver|bewahren|Preservare|Preservar|Сохранять|A păstra
`);

  /* 26 · Amistad y consejos (57 palabras) */
  more(26, `
Amigo|Friend|Ami|Freund|Amico|Amigo|Друг|Prieten
Mejor amigo|Best friend|Meilleur ami|bester Freund|Migliore amico|Melhor amigo|Лучший друг|Cel mai bun prieten
Conocer|To meet|Rencontrer|kennenlernen|Conoscere|Conhecer|Знакомиться|A cunoaște
Llevarse bien|To get on well|S'entendre bien|sich gut verstehen|Andare d'accordo|Dar-se bem|Ладить|A se înțelege bine
Quedar|To meet up|Se retrouver|sich treffen|Vedersi|Combinar|Договариваться о встрече|A se întâlni
Invitar|To invite|Inviter|einladen|Invitare|Convidar|Приглашать|A invita
Visitar|To visit|Rendre visite|besuchen|Visitare|Visitar|Навещать|A vizita
Llamar|To call|Appeler|anrufen|Chiamare|Ligar|Звонить|A suna
Escribir|To write|Écrire|schreiben|Scrivere|Escrever|Писать|A scrie
Contestar|To answer|Répondre|antworten|Rispondere|Responder|Отвечать|A răspunde
Ayudar|To help|Aider|helfen|Aiutare|Ajudar|Помогать|A ajuta
Preocuparse|To worry|S'inquiéter|sich Sorgen machen|Preoccuparsi|Preocupar-se|Беспокоиться|A-și face griji
Alegrarse|To be glad|Se réjouir|sich freuen|Rallegrarsi|Alegrar-se|Радоваться|A se bucura
Sentirse|To feel|Se sentir|sich fühlen|Sentirsi|Sentir-se|Чувствовать себя|A se simți
Triste|Sad|Triste|traurig|Triste|Triste|Грустный|Trist
Enojado|Angry|En colère|wütend|Arrabbiato|Zangado|Сердитый|Supărat
Molesto|Annoyed|Agacé|genervt|Infastidito|Chateado|Раздражённый|Deranjat
Nervioso|Nervous|Nerveux|nervös|Nervoso|Nervoso|Нервный|Nervos
Contento|Pleased|Content|zufrieden|Contento|Contente|Довольный|Mulțumit
Solo|Lonely|Seul|einsam|Solo|Sozinho|Одинокий|Singur
Agradecido|Grateful|Reconnaissant|dankbar|Grato|Agradecido|Благодарный|Recunoscător
Orgulloso|Proud|Fier|stolz|Orgoglioso|Orgulhoso|Гордый|Mândru
Avergonzado|Embarrassed|Gêné|beschämt|Imbarazzato|Envergonhado|Смущённый|Jenat
Culpa|Guilt|Culpabilité|Schuld|Colpa|Culpa|Вина|Vină
Error|Mistake|Erreur|Fehler|Errore|Erro|Ошибка|Greșeală
Malentendido|Misunderstanding|Malentendu|Missverständnis|Malinteso|Mal-entendido|Недоразумение|Neînțelegere
Reconciliarse|To make up|Se réconcilier|sich versöhnen|Fare pace|Fazer as pazes|Мириться|A se împăca
Pedir perdón|To apologise|S'excuser|sich entschuldigen|Chiedere scusa|Pedir desculpa|Просить прощения|A cere scuze
Prometer|To promise|Promettre|versprechen|Promettere|Prometer|Обещать|A promite
Cumplir|To keep (a promise)|Tenir parole|halten|Mantenere|Cumprir|Выполнять|A își ține cuvântul
Confiar|To trust|Faire confiance|Vertrauen schenken|Fidarsi|Confiar|Доверять|A avea încredere
Desconfiar|To distrust|Se méfier|misstrauen|Diffidare|Desconfiar|Не доверять|A se îndoi
Traicionar|To betray|Trahir|verraten|Tradire|Trair|Предавать|A trăda
Guardar un secreto|To keep a secret|Garder un secret|ein Geheimnis wahren|Mantenere un segreto|Guardar um segredo|Хранить секрет|A păstra un secret
Contar|To tell|Raconter|erzählen|Raccontare|Contar|Рассказывать|A povesti
Desahogarse|To get things off your chest|Se confier|sich Luft machen|Sfogarsi|Desabafar|Выговориться|A se descărca sufletește
Animar|To cheer up|Encourager|aufmuntern|Incoraggiare|Animar|Подбадривать|A încuraja
Consolar|To comfort|Consoler|trösten|Consolare|Consolar|Утешать|A consola
Felicitar|To congratulate|Féliciter|gratulieren|Congratularsi|Felicitar|Поздравлять|A felicita
Criticar|To criticise|Critiquer|kritisieren|Criticare|Criticar|Критиковать|A critica
Reprochar|To reproach|Reprocher|vorwerfen|Rimproverare|Censurar|Упрекать|A reproșa
Discutir|To argue|Se disputer|streiten|Litigare|Discutir|Спорить|A se certa
Tolerar|To put up with|Supporter|ertragen|Sopportare|Tolerar|Терпеть|A tolera
Aguantar|To bear|Endurer|aushalten|Reggere|Aguentar|Выдерживать|A suporta
Echar de menos|To miss|Manquer|vermissen|Mancare|Ter saudades|Скучать|A-i fi dor
Mantener el contacto|To keep in touch|Rester en contact|in Kontakt bleiben|Restare in contatto|Manter o contacto|Поддерживать связь|A păstra legătura
Perder el contacto|To lose touch|Perdre le contact|den Kontakt verlieren|Perdere i contatti|Perder o contacto|Потерять связь|A pierde legătura
Vecino|Neighbour|Voisin|Nachbar|Vicino|Vizinho|Сосед|Vecin
Colega|Colleague|Collègue|Kollege|Collega|Colega|Коллега|Coleg
Compañero de casa|Housemate|Colocataire|Mitbewohner|Coinquilino|Colega de casa|Сосед по квартире|Coleg de apartament
Novio|Boyfriend|Petit ami|fester Freund|Ragazzo|Namorado|Парень|Iubit
Pareja|Partner|Partenaire|Partner|Partner|Parceiro|Партнёр|Partener
Cita|Date|Rendez-vous|Verabredung|Appuntamento|Encontro|Свидание|Întâlnire
Hacer un favor|To do a favour|Rendre service|einen Gefallen tun|Fare un favore|Fazer um favor|Оказать услугу|A face o favoare
Deber un favor|To owe a favour|Devoir un service|einen Gefallen schulden|Dovere un favore|Dever um favor|Быть должным|A fi dator cu o favoare
Poner límites|To set boundaries|Poser des limites|Grenzen setzen|Porre dei limiti|Estabelecer limites|Устанавливать границы|A pune limite
Tener en cuenta|To take into account|Tenir compte de|berücksichtigen|Tenere conto di|Ter em conta|Учитывать|A ține cont de
`);

  /* 27 · Dinero y trámites (59 palabras) */
  more(27, `
Efectivo|Cash|Espèces|Bargeld|Contanti|Dinheiro vivo|Наличные|Numerar
Billetes|Banknotes|Billets|Geldscheine|Banconote|Notas|Банкноты|Bancnote
Cambio|Change|Monnaie rendue|Wechselgeld|Resto|Troco|Сдача|Rest
Tarjeta de crédito|Credit card|Carte de crédit|Kreditkarte|Carta di credito|Cartão de crédito|Кредитная карта|Card de credit
Número de cuenta|Account number|Numéro de compte|Kontonummer|Numero di conto|Número de conta|Номер счёта|Număr de cont
Clave|PIN|Code secret|PIN|PIN|PIN|ПИН-код|Cod PIN
Banca en línea|Online banking|Banque en ligne|Online-Banking|Banca online|Banca online|Интернет-банкинг|Internet banking
Aplicación bancaria|Banking app|Application bancaire|Banking-App|App della banca|Aplicação do banco|Банковское приложение|Aplicație bancară
Extracto|Statement|Relevé|Kontoauszug|Estratto conto|Extrato|Выписка по счёту|Extras de cont
Ingresos|Income|Revenus|Einkommen|Reddito|Rendimentos|Доходы|Venituri
Sueldo|Salary|Salaire|Gehalt|Stipendio|Ordenado|Зарплата|Salariu
Presupuesto|Budget|Budget|Budget|Budget|Orçamento|Бюджет|Buget
Gasto|Expense|Dépense|Ausgabe|Spesa|Despesa|Расход|Cheltuială
Ahorrar|To save|Épargner|sparen|Risparmiare|Poupar|Копить|A economisi
Gastar|To spend|Dépenser|ausgeben|Spendere|Gastar|Тратить|A cheltui
Prestar|To lend|Prêter|leihen|Prestare|Emprestar|Одалживать|A împrumuta
Pedir prestado|To borrow|Emprunter|sich leihen|Prendere in prestito|Pedir emprestado|Занимать|A lua cu împrumut
Devolver|To pay back|Rembourser|zurückzahlen|Restituire|Devolver|Возвращать|A returna
Interés|Interest|Intérêt|Zins|Interesse|Juro|Процент|Dobândă
Hipoteca|Mortgage|Crédit immobilier|Hypothek|Mutuo|Crédito à habitação|Ипотека|Ipotecă
Alquiler|Rent|Loyer|Miete|Affitto|Renda|Аренда|Chirie
Contrato|Contract|Contrat|Vertrag|Contratto|Contrato|Договор|Contract
Seguro|Insurance|Assurance|Versicherung|Assicurazione|Seguro|Страховка|Asigurare
Garantía|Warranty|Garantie|Garantie|Garanzia|Garantia|Гарантия|Garanție
Recibo|Receipt|Reçu|Quittung|Ricevuta|Recibo|Расписка в получении|Chitanță
Cita previa|Appointment|Rendez-vous|Termin|Appuntamento|Marcação|Предварительная запись|Programare
Número de turno|Queue number|Numéro de passage|Wartenummer|Numero d'attesa|Senha|Номер в очереди|Număr de ordine
Ventanilla única|One-stop shop|Guichet unique|zentrale Anlaufstelle|Sportello unico|Balcão único|Единое окно|Ghișeu unic
Oficina de correos|Post office|Bureau de poste|Postamt|Ufficio postale|Correios|Почтовое отделение|Oficiu poștal
Carta|Letter|Lettre|Brief|Lettera|Carta|Письмо|Scrisoare
Sobre|Envelope|Enveloppe|Umschlag|Busta|Envelope|Конверт|Plic
Remitente|Sender|Expéditeur|Absender|Mittente|Remetente|Отправитель|Expeditor
Destinatario|Recipient|Destinataire|Empfänger|Destinatario|Destinatário|Получатель|Destinatar
Envío|Shipment|Envoi|Sendung|Spedizione|Envio|Отправление|Expediere
Código postal|Postcode|Code postal|Postleitzahl|CAP|Código postal|Почтовый индекс|Cod poștal
Certificado|Certificate|Certificat|Bescheinigung|Certificato|Certificado|Справка|Certificat
Pasaporte|Passport|Passeport|Reisepass|Passaporto|Passaporte|Паспорт|Pașaport
Carné de identidad|ID card|Carte d'identité|Personalausweis|Carta d'identità|Cartão de cidadão|Идентификационная карта|Carte de identitate
Permiso de residencia|Residence permit|Titre de séjour|Aufenthaltserlaubnis|Permesso di soggiorno|Autorização de residência|Вид на жительство|Permis de ședere
Permiso de trabajo|Work permit|Permis de travail|Arbeitserlaubnis|Permesso di lavoro|Autorização de trabalho|Разрешение на работу|Permis de muncă
Copia|Copy|Copie|Kopie|Copia|Cópia|Копия|Copie
Original|Original|Original|Original|Originale|Original|Оригинал|Original
Sello|Rubber stamp|Cachet|Stempel|Timbro|Carimbo|Печать|Ștampilă
Rellenar|To fill in|Remplir|ausfüllen|Compilare|Preencher|Заполнять|A completa
Firmar|To sign|Signer|unterschreiben|Firmare|Assinar|Подписывать|A semna
Presentar|To submit|Présenter|einreichen|Presentare|Apresentar|Подавать|A prezenta
Solicitar|To apply for|Demander|beantragen|Richiedere|Solicitar|Запрашивать|A solicita
Renovar|To renew|Renouveler|verlängern|Rinnovare|Renovar|Продлевать|A reînnoi
Cancelar|To cancel|Annuler|stornieren|Annullare|Cancelar|Отменять|A anula
Esperar turno|To wait your turn|Attendre son tour|warten, bis man dran ist|Aspettare il proprio turno|Esperar pela vez|Ждать своей очереди|A-și aștepta rândul
Plazo|Deadline|Délai|Frist|Scadenza|Prazo|Срок|Termen
Multa|Fine|Amende|Geldstrafe|Multa|Multa|Штраф|Amendă
Descuento|Discount|Réduction|Rabatt|Sconto|Desconto|Скидка|Reducere
Reembolso|Refund|Remboursement|Rückerstattung|Rimborso|Reembolso|Возврат денег|Rambursare
Pago a plazos|Payment in instalments|Paiement échelonné|Ratenzahlung|Pagamento a rate|Pagamento a prestações|Оплата в рассрочку|Plată în rate
Estafa|Scam|Arnaque|Betrug|Truffa|Burla|Мошенничество|Escrocherie
Robo de identidad|Identity theft|Usurpation d'identité|Identitätsdiebstahl|Furto d'identità|Roubo de identidade|Кража личных данных|Furt de identitate
Denunciar|To report|Porter plainte|anzeigen|Denunciare|Denunciar|Заявлять в полицию|A reclama la poliție
Bloquear la tarjeta|To block the card|Bloquer la carte|die Karte sperren|Bloccare la carta|Bloquear o cartão|Заблокировать карту|A bloca cardul
`);

  /* 28 · Experiencias y recuerdos (61 palabras) */
  more(28, `
Nacer|To be born|Naître|geboren werden|Nascere|Nascer|Родиться|A se naște
Vecindario|Neighbourhood|Quartier|Nachbarschaft|Quartiere|Bairro|Район|Cartier
Patio|Yard|Cour|Hof|Cortile|Pátio|Двор|Curte
Abuelos|Grandparents|Grands-parents|Großeltern|Nonni|Avós|Бабушка и дедушка|Bunici
Vacaciones de verano|Summer holidays|Vacances d'été|Sommerferien|Vacanze estive|Férias de verão|Летние каникулы|Vacanța de vară
Campamento de verano|Summer camp|Colonie de vacances|Ferienlager|Campo estivo|Campo de férias|Летний лагерь|Tabără de vară
Mascota|Pet|Animal de compagnie|Haustier|Animale domestico|Animal de estimação|Домашнее животное|Animal de companie
Travesura|Mischief|Bêtise|Streich|Marachella|Travessura|Шалость|Poznă
Jugar|To play|Jouer|spielen|Giocare|Brincar|Играть|A se juca
Esconderse|To hide|Se cacher|sich verstecken|Nascondersi|Esconder-se|Прятаться|A se ascunde
Caerse|To fall|Tomber|hinfallen|Cadere|Cair|Падать|A cădea
Romper|To break|Casser|kaputt machen|Rompere|Partir|Ломать|A sparge
Escuela primaria|Primary school|École primaire|Grundschule|Scuola elementare|Escola primária|Начальная школа|Școala primară
Instituto|Secondary school|Lycée|Gymnasium|Liceo|Escola secundária|Старшая школа|Liceu
Primer trabajo|First job|Premier emploi|erster Job|Primo lavoro|Primeiro emprego|Первая работа|Primul loc de muncă
Mudanza|Move|Déménagement|Umzug|Trasloco|Mudança|Переезд|Mutare
Viaje|Trip|Voyage|Reise|Viaggio|Viagem|Поездка|Călătorie
Vacaciones|Holiday|Vacances|Urlaub|Vacanza|Férias|Отпуск|Vacanță
Fiesta de cumpleaños|Birthday party|Fête d'anniversaire|Geburtstagsfeier|Festa di compleanno|Festa de anos|Вечеринка в честь дня рождения|Petrecere de ziua de naștere
Boda|Wedding|Mariage|Hochzeit|Matrimonio|Casamento|Свадьба|Nuntă
Nacimiento|Birth|Naissance|Geburt|Nascita|Nascimento|Рождение|Naștere
Funeral|Funeral|Funérailles|Beerdigung|Funerale|Funeral|Похороны|Înmormântare
Despedida|Farewell|Adieu|Abschied|Addio|Despedida|Прощание|Despărțire
Reencuentro|Reunion|Retrouvailles|Wiedersehen|Rincontro|Reencontro|Встреча после разлуки|Revedere
Foto antigua|Old photo|Vieille photo|altes Foto|Vecchia foto|Fotografia antiga|Старая фотография|Fotografie veche
Diario|Diary|Journal intime|Tagebuch|Diario|Diário|Дневник|Jurnal
Carta|Letter|Lettre|Brief|Lettera|Carta|Письмо|Scrisoare
Canción favorita|Favourite song|Chanson préférée|Lieblingslied|Canzone preferita|Canção preferida|Любимая песня|Cântec preferat
Película favorita|Favourite film|Film préféré|Lieblingsfilm|Film preferito|Filme preferido|Любимый фильм|Film preferat
Época|Period|Époque|Zeit|Epoca|Época|Эпоха|Epocă
Antes|Before|Avant|früher|Prima|Antes|Раньше|Înainte
Antiguamente|In the old days|Autrefois|in alten Zeiten|Un tempo|Antigamente|Раньше, в старые времена|Pe vremuri
Hace años|Years ago|Il y a des années|vor Jahren|Anni fa|Há anos|Много лет назад|Acum ani
De pequeño|As a child|Quand j'étais petit|als Kind|Da piccolo|Em pequeno|В детстве|Când eram mic
De joven|When I was young|Quand j'étais jeune|in meiner Jugend|Da giovane|Em jovem|В молодости|Pe când eram tânăr
Cada verano|Every summer|Chaque été|jeden Sommer|Ogni estate|Todos os verões|Каждое лето|În fiecare vară
Solíamos|We used to|Nous avions l'habitude de|Wir pflegten|Eravamo soliti|Costumávamos|Мы обычно|Obișnuiam să
Recordar con cariño|To remember fondly|Se souvenir avec tendresse|gern zurückdenken|Ricordare con affetto|Recordar com carinho|Тепло вспоминать|A-și aminti cu drag
Tener suerte|To be lucky|Avoir de la chance|Glück haben|Essere fortunato|Ter sorte|Везти|A avea noroc
Darse cuenta|To realise|Se rendre compte|bemerken|Rendersi conto|Aperceber-se|Осознавать|A-și da seama
Equivocarse|To make a mistake|Se tromper|sich irren|Sbagliarsi|Enganar-se|Ошибаться|A greși
Arrepentirse|To regret|Regretter|bereuen|Pentirsi|Arrepender-se|Сожалеть|A regreta
Disfrutar|To enjoy|Profiter|genießen|Godere|Aproveitar|Наслаждаться|A se bucura de
Reírse|To laugh|Rire|lachen|Ridere|Rir|Смеяться|A râde
Llorar|To cry|Pleurer|weinen|Piangere|Chorar|Плакать|A plânge
Asustarse|To get scared|Avoir peur|sich erschrecken|Spaventarsi|Assustar-se|Пугаться|A se speria
Emocionarse|To be moved|Être ému|gerührt sein|Commuoversi|Emocionar-se|Волноваться|A se emoționa
Lágrimas|Tears|Larmes|Tränen|Lacrime|Lágrimas|Слёзы|Lacrimi
Miedo|Fear|Peur|Angst|Paura|Medo|Страх|Frică
Alegría|Joy|Joie|Freude|Gioia|Alegria|Радость|Bucurie
Tristeza|Sadness|Tristesse|Traurigkeit|Tristezza|Tristeza|Грусть|Tristețe
Orgullo|Pride|Fierté|Stolz|Orgoglio|Orgulho|Гордость|Mândrie
Destino|Fate|Destin|Schicksal|Destino|Destino|Судьба|Destin
Casualidad|Coincidence|Hasard|Zufall|Caso|Acaso|Случайность|Coincidență
Inolvidable|Unforgettable|Inoubliable|unvergesslich|Indimenticabile|Inesquecível|Незабываемый|De neuitat
Antiguo|Old|Ancien|alt|Vecchio|Antigo|Старый|Vechi
`);

  /* 29 · Sueños y condiciones (57 palabras) */
  more(29, `
Propósito|Purpose|Finalité|Absicht|Proposito|Propósito|Намерение|Scop
Plan|Plan|Plan|Plan|Piano|Plano|План|Plan
Futuro|Future|Avenir|Zukunft|Futuro|Futuro|Будущее|Viitor
Carrera profesional|Career|Carrière|Karriere|Carriera|Carreira|Карьера|Carieră
Emprender|To start a business|Entreprendre|gründen|Intraprendere|Empreender|Начинать своё дело|A porni o afacere
Empresa propia|Own business|Entreprise personnelle|eigenes Unternehmen|Azienda propria|Empresa própria|Собственный бизнес|Afacere proprie
Independencia|Independence|Indépendance|Unabhängigkeit|Indipendenza|Independência|Независимость|Independență
Ahorrar para|To save up for|Économiser pour|sparen für|Risparmiare per|Poupar para|Копить на|A economisi pentru
Mudarse al extranjero|To move abroad|Déménager à l'étranger|ins Ausland ziehen|Trasferirsi all'estero|Mudar-se para o estrangeiro|Переехать за границу|A se muta în străinătate
Aprender un idioma|To learn a language|Apprendre une langue|eine Sprache lernen|Imparare una lingua|Aprender uma língua|Выучить язык|A învăța o limbă
Viajar por el mundo|To travel the world|Voyager à travers le monde|um die Welt reisen|Viaggiare per il mondo|Viajar pelo mundo|Путешествовать по миру|A călători prin lume
Comprar una casa|To buy a house|Acheter une maison|ein Haus kaufen|Comprare una casa|Comprar uma casa|Купить дом|A cumpăra o casă
Formar una familia|To start a family|Fonder une famille|eine Familie gründen|Mettere su famiglia|Constituir família|Создать семью|A întemeia o familie
Tener hijos|To have children|Avoir des enfants|Kinder bekommen|Avere figli|Ter filhos|Завести детей|A avea copii
Jubilarse|To retire|Prendre sa retraite|in Rente gehen|Andare in pensione|Reformar-se|Выйти на пенсию|A se pensiona
Si tuviera|If I had|Si j'avais|wenn ich hätte|Se avessi|Se eu tivesse|Если бы у меня было|Dacă aș avea
Si pudiera|If I could|Si je pouvais|wenn ich könnte|Se potessi|Se eu pudesse|Если бы я мог|Dacă aș putea
Me gustaría|I would like|J'aimerais|Ich würde gern|Mi piacerebbe|Gostaria|Мне бы хотелось|Mi-ar plăcea
Ojalá|I hope|Pourvu que|hoffentlich|Magari|Oxalá|Хоть бы|Măcar să
Tal vez|Perhaps|Peut-être|vielleicht|Forse|Talvez|Возможно|Poate
Quizá|Maybe|Peut-être bien|eventuell|Chissà|Quiçá|Может быть|Probabil
Depende|It depends|Ça dépend|Das kommt darauf an|Dipende|Depende|Это зависит|Depinde
A menos que|Unless|À moins que|es sei denn|A meno che|A menos que|Если только не|Cu excepția cazului în care
Siempre que|As long as|À condition que|solange|Purché|Desde que|При условии, что|Atâta timp cât
En caso de|In case of|En cas de|im Falle von|In caso di|Em caso de|В случае|În caz de
Por si acaso|Just in case|Au cas où|für alle Fälle|Per ogni evenienza|Por precaução|На всякий случай|Pentru orice eventualitate
Mientras tanto|Meanwhile|Pendant ce temps|inzwischen|Nel frattempo|Entretanto|Тем временем|Între timp
Con el tiempo|In time|Avec le temps|mit der Zeit|Col tempo|Com o tempo|Со временем|Cu timpul
Poco a poco|Little by little|Petit à petit|nach und nach|Poco a poco|Pouco a pouco|Понемногу|Încet-încet
Paso a paso|Step by step|Pas à pas|Schritt für Schritt|Passo dopo passo|Passo a passo|Шаг за шагом|Pas cu pas
Mejorar|To improve|S'améliorer|sich verbessern|Migliorare|Melhorar|Совершенствоваться|A se îmbunătăți
Crecer|To grow|Évoluer|wachsen|Crescere|Crescer|Расти|A crește
Avanzar|To move forward|Avancer|vorankommen|Avanzare|Avançar|Продвигаться|A avansa
Superar|To overcome|Surmonter|überwinden|Superare|Superar|Преодолевать|A depăși
Aprovechar|To make the most of|Profiter de|nutzen|Approfittare|Aproveitar|Использовать возможность|A profita de
Perder la oportunidad|To miss the chance|Rater l'occasion|die Chance verpassen|Perdere l'occasione|Perder a oportunidade|Упустить возможность|A pierde ocazia
Atreverse|To dare|Oser|sich trauen|Osare|Atrever-se|Осмелиться|A îndrăzni
Confiar en uno mismo|To believe in yourself|Avoir confiance en soi|an sich glauben|Avere fiducia in sé|Confiar em si próprio|Верить в себя|A avea încredere în sine
Equivocarse|To make a mistake|Se tromper|sich irren|Sbagliarsi|Enganar-se|Ошибаться|A greși
Aprender de los errores|To learn from mistakes|Apprendre de ses erreurs|aus Fehlern lernen|Imparare dagli errori|Aprender com os erros|Учиться на ошибках|A învăța din greșeli
Ser constante|To be persistent|Persévérer|durchhalten|Essere costante|Ser persistente|Быть настойчивым|A fi perseverent
No rendirse|To never give up|Ne pas abandonner|nicht aufgeben|Non arrendersi|Não desistir|Не сдаваться|A nu renunța
Valer la pena|To be worth it|Valoir la peine|sich lohnen|Valere la pena|Valer a pena|Стоить того|A merita
Dar lo mejor|To do your best|Faire de son mieux|sein Bestes geben|Dare il meglio|Dar o melhor|Делать всё возможное|A face tot posibilul
Apoyo|Support|Soutien|Unterstützung|Sostegno|Apoio|Поддержка|Sprijin
Mentor|Mentor|Mentor|Mentor|Mentore|Mentor|Наставник|Mentor
Modelo a seguir|Role model|Modèle|Vorbild|Modello da seguire|Modelo a seguir|Пример для подражания|Model de urmat
Inspiración|Inspiration|Inspiration|Inspiration|Ispirazione|Inspiração|Вдохновение|Inspirație
Pasión|Passion|Passion|Leidenschaft|Passione|Paixão|Страсть|Pasiune
Vocación|Vocation|Vocation|Berufung|Vocazione|Vocação|Призвание|Vocație
Éxito profesional|Professional success|Réussite professionnelle|beruflicher Erfolg|Successo professionale|Sucesso profissional|Профессиональный успех|Succes profesional
Estabilidad|Stability|Stabilité|Stabilität|Stabilità|Estabilidade|Стабильность|Stabilitate
Seguridad|Security|Sécurité|Sicherheit|Sicurezza|Segurança|Безопасность|Siguranță
Incertidumbre|Uncertainty|Incertitude|Ungewissheit|Incertezza|Incerteza|Неопределённость|Incertitudine
Miedo al fracaso|Fear of failure|Peur de l'échec|Angst vor dem Scheitern|Paura del fallimento|Medo de falhar|Страх неудачи|Teama de eșec
Segunda oportunidad|Second chance|Seconde chance|zweite Chance|Seconda opportunità|Segunda oportunidade|Второй шанс|A doua șansă
Sueño cumplido|Dream come true|Rêve devenu réalité|erfüllter Traum|Sogno avverato|Sonho realizado|Исполнившаяся мечта|Vis împlinit
`);

  /* 30 · Opinar y debatir (60 palabras) */
  more(30, `
Afirmar|To claim|Affirmer|behaupten|Affermare|Afirmar|Утверждать|A afirma
Admitir|To admit|Admettre|zugeben|Ammettere|Admitir|Признавать|A admite
Discrepar|To disagree|Diverger|abweichen|Dissentire|Discordar|Расходиться во мнениях|A fi în dezacord
Estar de acuerdo|To agree|Être d'accord|einverstanden sein|Essere d'accordo|Estar de acordo|Соглашаться|A fi de acord
Matizar|To qualify|Nuancer|differenzieren|Sfumare|Matizar|Уточнять|A nuanța
Insistir|To insist|Insister|bestehen|Insistere|Insistir|Настаивать|A insista
Aclarar|To clarify|Clarifier|klarstellen|Chiarire|Esclarecer|Прояснять|A clarifica
Resumir|To sum up|Résumer|zusammenfassen|Riassumere|Resumir|Подытоживать|A rezuma
Concluir|To conclude|Conclure|schlussfolgern|Concludere|Concluir|Заключать|A concluziona
Deducir|To deduce|Déduire|ableiten|Dedurre|Deduzir|Выводить|A deduce
Suponer|To assume|Supposer|annehmen|Supporre|Supor|Предполагать|A presupune
Dudar|To doubt|Douter|zweifeln|Dubitare|Duvidar|Сомневаться|A se îndoi
Sospechar|To suspect|Soupçonner|vermuten|Sospettare|Suspeitar|Подозревать|A bănui
Evidencia|Evidence|Preuve|Beleg|Evidenza|Evidência|Доказательство|Dovadă
Dato|Data|Donnée|Angabe|Dato|Dado|Данные|Informație
Hecho|Fact|Fait|Tatsache|Fatto|Facto|Факт|Fapt
Ejemplo|Example|Exemple|Beispiel|Esempio|Exemplo|Пример|Exemplu
Causa|Cause|Cause|Ursache|Causa|Causa|Причина|Cauză
Consecuencia|Consequence|Conséquence|Folge|Conseguenza|Consequência|Последствие|Consecință
Motivo|Reason|Motif|Grund|Motivo|Motivo|Мотив|Motiv
Lógica|Logic|Logique|Logik|Logica|Lógica|Логика|Logică
Razonable|Reasonable|Raisonnable|vernünftig|Ragionevole|Razoável|Разумный|Rezonabil
Absurdo|Absurd|Absurde|absurd|Assurdo|Absurdo|Абсурдный|Absurd
Evidente|Obvious|Évident|offensichtlich|Evidente|Evidente|Очевидный|Evident
Cierto|True|Vrai|wahr|Vero|Verdadeiro|Верный|Adevărat
Dudoso|Doubtful|Douteux|zweifelhaft|Dubbio|Duvidoso|Сомнительный|Îndoielnic
Convincente|Convincing|Convaincant|überzeugend|Convincente|Convincente|Убедительный|Convingător
Persuasivo|Persuasive|Persuasif|überredend|Persuasivo|Persuasivo|Убеждающий|Persuasiv
Subjetivo|Subjective|Subjectif|subjektiv|Soggettivo|Subjetivo|Субъективный|Subiectiv
Objetivo|Objective|Objectif|objektiv|Oggettivo|Objetivo|Объективный|Obiectiv
Parcial|Biased|Partial|parteiisch|Parziale|Parcial|Пристрастный|Părtinitor
Radical|Radical|Radical|radikal|Radicale|Radical|Радикальный|Radical
Moderado|Moderate|Modéré|gemäßigt|Moderato|Moderado|Умеренный|Moderat
Tolerante|Tolerant|Tolérant|tolerant|Tollerante|Tolerante|Терпимый|Tolerant
Intolerante|Intolerant|Intolérant|intolerant|Intollerante|Intolerante|Нетерпимый|Intolerant
Extremista|Extremist|Extrémiste|Extremist|Estremista|Extremista|Экстремист|Extremist
Mayoría|Majority|Majorité|Mehrheit|Maggioranza|Maioria|Большинство|Majoritate
Minoría|Minority|Minorité|Minderheit|Minoranza|Minoria|Меньшинство|Minoritate
Votación|Vote|Vote|Abstimmung|Votazione|Votação|Голосование|Vot
Propuesta|Proposal|Proposition|Vorschlag|Proposta|Proposta|Предложение|Propunere
Alternativa|Alternative|Alternative|Alternative|Alternativa|Alternativa|Альтернатива|Alternativă
Compromiso|Compromise|Compromis|Kompromiss|Compromesso|Compromisso|Компромисс|Compromis
Mediador|Mediator|Médiateur|Vermittler|Mediatore|Mediador|Посредник|Mediator
Turno de palabra|Speaking turn|Tour de parole|Redezeit|Turno di parola|Vez de falar|Очередь выступать|Rândul la cuvânt
Tema|Topic|Sujet|Thema|Tema|Tema|Тема|Temă
Cuestión|Issue|Question|Frage|Questione|Questão|Вопрос|Chestiune
Dilema|Dilemma|Dilemme|Dilemma|Dilemma|Dilema|Дилемма|Dilemă
Oponerse|To oppose|S'opposer|sich widersetzen|Opporsi|Opor-se|Выступать против|A se opune
Ceder|To give in|Céder|nachgeben|Cedere|Ceder|Уступать|A ceda
Exagerar|To exaggerate|Exagérer|übertreiben|Esagerare|Exagerar|Преувеличивать|A exagera
Generalizar|To generalise|Généraliser|verallgemeinern|Generalizzare|Generalizar|Обобщать|A generaliza
Demostrar|To demonstrate|Démontrer|beweisen|Dimostrare|Demonstrar|Доказывать|A demonstra
Ejemplificar|To illustrate|Illustrer|veranschaulichen|Esemplificare|Exemplificar|Иллюстрировать|A exemplifica
Dar la razón|To concede the point|Donner raison|Recht geben|Dare ragione|Dar razão|Признать правоту|A da dreptate
`);

  /* 31 · Entrevista y carrera (61 palabras) */
  more(31, `
Solicitar empleo|To apply for a job|Postuler à un emploi|sich bewerben|Candidarsi a un lavoro|Candidatar-se a um emprego|Подавать заявку на работу|A aplica pentru un loc de muncă
Carta de presentación|Cover letter|Lettre de motivation|Anschreiben|Lettera di presentazione|Carta de apresentação|Сопроводительное письмо|Scrisoare de intenție
Perfil profesional|Professional profile|Profil professionnel|Berufsprofil|Profilo professionale|Perfil profissional|Профессиональный профиль|Profil profesional
Formación académica|Education|Études|Ausbildung|Formazione|Formação académica|Образование|Studii
Conocimientos|Knowledge|Connaissances|Kenntnisse|Conoscenze|Conhecimentos|Знания|Cunoștințe
Competencias|Skills|Compétences|Kompetenzen|Competenze|Competências|Компетенции|Competențe
Cualidad|Quality|Qualité|Eigenschaft|Qualità|Qualidade|Качество|Calitate
Motivación|Motivation|Motivation|Motivation|Motivazione|Motivação|Мотивация|Motivație
Expectativas|Expectations|Attentes|Erwartungen|Aspettative|Expectativas|Ожидания|Așteptări
Pretensión salarial|Salary expectations|Prétentions salariales|Gehaltsvorstellung|Aspettative salariali|Pretensões salariais|Ожидаемая зарплата|Pretenții salariale
Bono|Bonus|Prime|Bonus|Bonus|Bónus|Премия|Bonus
Vacaciones pagadas|Paid holiday|Congés payés|bezahlter Urlaub|Ferie retribuite|Férias pagas|Оплачиваемый отпуск|Concediu plătit
Contrato temporal|Fixed-term contract|Contrat à durée déterminée|befristeter Vertrag|Contratto a termine|Contrato a termo|Срочный договор|Contract pe perioadă determinată
Jornada completa|Full-time|Temps plein|Vollzeit|Tempo pieno|Tempo inteiro|Полная занятость|Normă întreagă
Media jornada|Part-time|Temps partiel|Teilzeit|Part-time|Meio período|Неполная занятость|Normă parțială
Horas extra|Overtime|Heures supplémentaires|Überstunden|Straordinari|Horas extra|Сверхурочные|Ore suplimentare
Turno|Shift|Roulement|Schicht|Turno|Turno|Смена|Tură
Oficina|Office|Bureau|Büro|Ufficio|Escritório|Офис|Birou
Departamento|Department|Service|Abteilung|Reparto|Departamento|Отдел|Departament
Gerente|Manager|Responsable|Leiter|Responsabile|Gerente|Менеджер|Manager
Supervisor|Supervisor|Superviseur|Vorgesetzter|Supervisore|Supervisor|Руководитель группы|Supervizor
Colega|Colleague|Collègue|Kollege|Collega|Colega|Коллега|Coleg
Becario|Intern|Stagiaire|Praktikant|Stagista|Estagiário|Стажёр|Stagiar
Autónomo|Self-employed|Indépendant|selbstständig|Lavoratore autonomo|Trabalhador independente|Самозанятый|Liber profesionist
Emprendedor|Entrepreneur|Entrepreneur|Unternehmer|Imprenditore|Empreendedor|Предприниматель|Antreprenor
Desempleo|Unemployment|Chômage|Arbeitslosigkeit|Disoccupazione|Desemprego|Безработица|Șomaj
Buscar trabajo|To look for a job|Chercher du travail|Arbeit suchen|Cercare lavoro|Procurar emprego|Искать работу|A căuta un loc de muncă
Bolsa de trabajo|Job board|Site d'offres d'emploi|Jobbörse|Bacheca di lavoro|Portal de emprego|Биржа вакансий|Platformă de joburi
Red de contactos|Network of contacts|Réseau de contacts|Kontaktnetzwerk|Rete di contatti|Rede de contactos|Круг контактов|Rețea de contacte
Feria de empleo|Job fair|Salon de l'emploi|Jobmesse|Fiera del lavoro|Feira de emprego|Ярмарка вакансий|Târg de joburi
Prueba técnica|Technical test|Test technique|Fachtest|Test tecnico|Teste técnico|Техническое задание|Test tehnic
Segunda entrevista|Second interview|Deuxième entretien|zweites Vorstellungsgespräch|Secondo colloquio|Segunda entrevista|Второе собеседование|A doua interviu
Rechazo|Rejection|Refus|Absage|Rifiuto|Rejeição|Отказ|Respingere
Aceptar la oferta|To accept the offer|Accepter l'offre|das Angebot annehmen|Accettare l'offerta|Aceitar a oferta|Принять предложение|A accepta oferta
Preaviso|Notice period|Préavis|Kündigungsfrist|Preavviso|Aviso prévio|Срок уведомления|Preaviz
Carta de renuncia|Resignation letter|Lettre de démission|Kündigungsschreiben|Lettera di dimissioni|Carta de demissão|Заявление об увольнении|Scrisoare de demisie
Liquidación|Severance pay|Solde de tout compte|Abfindung|Liquidazione|Indemnização|Выходное пособие|Compensație de concediere
Jubilación|Retirement|Retraite|Ruhestand|Pensionamento|Reforma|Выход на пенсию|Pensionare
Baja por enfermedad|Sick leave|Arrêt maladie|Krankmeldung|Congedo per malattia|Baixa por doença|Больничный|Concediu medical
Ascender|To be promoted|Être promu|befördert werden|Essere promosso|Ser promovido|Получить повышение|A fi promovat
Delegar|To delegate|Déléguer|delegieren|Delegare|Delegar|Делегировать|A delega
Cumplir objetivos|To meet targets|Atteindre les objectifs|Ziele erreichen|Raggiungere gli obiettivi|Cumprir objetivos|Выполнять цели|A îndeplini obiective
Cumplir plazos|To meet deadlines|Respecter les délais|Fristen einhalten|Rispettare le scadenze|Cumprir prazos|Соблюдать сроки|A respecta termenele
Trabajar bajo presión|To work under pressure|Travailler sous pression|unter Druck arbeiten|Lavorare sotto pressione|Trabalhar sob pressão|Работать под давлением|A lucra sub presiune
Iniciativa|Initiative|Initiative|Initiative|Iniziativa|Iniciativa|Инициатива|Inițiativă
Responsabilidad|Responsibility|Responsabilité|Verantwortung|Responsabilità|Responsabilidade|Ответственность|Responsabilitate
Puntualidad|Punctuality|Ponctualité|Pünktlichkeit|Puntualità|Pontualidade|Пунктуальность|Punctualitate
Adaptabilidad|Adaptability|Adaptabilité|Anpassungsfähigkeit|Adattabilità|Adaptabilidade|Адаптивность|Adaptabilitate
Comunicación|Communication|Communication|Kommunikation|Comunicazione|Comunicação|Коммуникация|Comunicare
Negociación|Negotiation|Négociation|Verhandlung|Negoziazione|Negociação|Переговоры|Negociere
Atención al detalle|Attention to detail|Souci du détail|Liebe zum Detail|Attenzione ai dettagli|Atenção ao detalhe|Внимание к деталям|Atenție la detalii
Experiencia previa|Previous experience|Expérience préalable|Vorerfahrung|Esperienza precedente|Experiência prévia|Предыдущий опыт|Experiență anterioară
Carta de recomendación|Letter of recommendation|Lettre de recommandation|Empfehlungsschreiben|Lettera di raccomandazione|Carta de recomendação|Рекомендательное письмо|Scrisoare de recomandare
Vacante|Vacancy|Poste vacant|freie Stelle|Posto vacante|Vaga|Вакансия|Post vacant
Plantilla|Staff|Personnel|Belegschaft|Organico|Quadro de pessoal|Штат|Personal
Empleador|Employer|Employeur|Arbeitgeber|Datore di lavoro|Empregador|Работодатель|Angajator
Empleado|Employee|Employé|Arbeitnehmer|Dipendente|Funcionário|Работник|Angajat
Sindicato|Trade union|Syndicat|Gewerkschaft|Sindacato|Sindicato|Профсоюз|Sindicat
Convenio colectivo|Collective agreement|Convention collective|Tarifvertrag|Contratto collettivo|Convenção coletiva|Коллективный договор|Contract colectiv
`);

  /* 32 · Noticias y sociedad (58 palabras) */
  more(32, `
Gobierno|Government|Gouvernement|Regierung|Governo|Governo|Правительство|Guvern
Parlamento|Parliament|Parlement|Parlament|Parlamento|Parlamento|Парламент|Parlament
Elecciones|Elections|Élections|Wahlen|Elezioni|Eleições|Выборы|Alegeri
Votante|Voter|Électeur|Wähler|Elettore|Eleitor|Избиратель|Alegător
Partido político|Political party|Parti politique|politische Partei|Partito politico|Partido político|Политическая партия|Partid politic
Oposición|Opposition|Opposition|Opposition|Opposizione|Oposição|Оппозиция|Opoziție
Presidente|President|Président|Präsident|Presidente|Presidente|Президент|Președinte
Ministro|Minister|Ministre|Minister|Ministro|Ministro|Министр|Ministru
Alcalde|Mayor|Maire|Bürgermeister|Sindaco|Presidente da câmara|Мэр|Primar
Corrupción|Corruption|Corruption|Korruption|Corruzione|Corrupção|Коррупция|Corupție
Justicia|Justice|Justice|Justiz|Giustizia|Justiça|Правосудие|Justiție
Juicio|Trial|Procès|Prozess|Processo|Julgamento|Судебный процесс|Proces
Sentencia|Ruling|Jugement|Urteil|Sentenza|Sentença|Приговор|Sentință
Delito|Crime|Délit|Straftat|Reato|Crime|Преступление|Infracțiune
Policía|Police|Police|Polizei|Polizia|Polícia|Полиция|Poliție
Seguridad|Security|Sécurité|Sicherheit|Sicurezza|Segurança|Безопасность|Securitate
Violencia|Violence|Violence|Gewalt|Violenza|Violência|Насилие|Violență
Conflicto|Conflict|Conflit|Konflikt|Conflitto|Conflito|Конфликт|Conflict
Guerra|War|Guerre|Krieg|Guerra|Guerra|Война|Război
Paz|Peace|Paix|Frieden|Pace|Paz|Мир|Pace
Acuerdo|Agreement|Accord|Abkommen|Accordo|Acordo|Соглашение|Acord
Sanción|Sanction|Sanction|Sanktion|Sanzione|Sanção|Санкция|Sancțiune
Economía|Economy|Économie|Wirtschaft|Economia|Economia|Экономика|Economie
Desempleo|Unemployment|Chômage|Arbeitslosigkeit|Disoccupazione|Desemprego|Безработица|Șomaj
Inflación|Inflation|Inflation|Inflation|Inflazione|Inflação|Инфляция|Inflație
Salario mínimo|Minimum wage|Salaire minimum|Mindestlohn|Salario minimo|Salário mínimo|Минимальная зарплата|Salariu minim
Subida de precios|Price rise|Hausse des prix|Preisanstieg|Aumento dei prezzi|Subida de preços|Рост цен|Creștere a prețurilor
Recorte|Cutback|Réduction|Kürzung|Taglio|Corte|Сокращение|Reducere
Presupuesto público|Public budget|Budget public|öffentlicher Haushalt|Bilancio pubblico|Orçamento público|Государственный бюджет|Buget public
Impuestos|Taxes|Impôts|Steuern|Tasse|Impostos|Налоги|Taxe
Vivienda|Housing|Logement|Wohnraum|Alloggio|Habitação|Жильё|Locuințe
Sanidad pública|Public healthcare|Santé publique|öffentliches Gesundheitswesen|Sanità pubblica|Saúde pública|Государственная медицина|Sănătate publică
Educación pública|Public education|Éducation publique|öffentliches Bildungswesen|Istruzione pubblica|Educação pública|Государственное образование|Educație publică
Pensiones|Pensions|Retraites|Renten|Pensioni|Pensões|Пенсии|Pensii
Servicios sociales|Social services|Services sociaux|Sozialdienste|Servizi sociali|Serviços sociais|Социальные службы|Servicii sociale
Discriminación|Discrimination|Discrimination|Diskriminierung|Discriminazione|Discriminação|Дискриминация|Discriminare
Racismo|Racism|Racisme|Rassismus|Razzismo|Racismo|Расизм|Rasism
Igualdad de género|Gender equality|Égalité des sexes|Gleichberechtigung|Parità di genere|Igualdade de género|Гендерное равенство|Egalitate de gen
Derechos humanos|Human rights|Droits de l'homme|Menschenrechte|Diritti umani|Direitos humanos|Права человека|Drepturile omului
Libertad|Freedom|Liberté|Freiheit|Libertà|Liberdade|Свобода|Libertate
Democracia|Democracy|Démocratie|Demokratie|Democrazia|Democracia|Демократия|Democrație
Dictadura|Dictatorship|Dictature|Diktatur|Dittatura|Ditadura|Диктатура|Dictatură
Protesta|Protest|Protestation|Protest|Protesta|Protesto|Протест|Protest
Voluntario|Volunteer|Bénévole|Freiwilliger|Volontario|Voluntário|Волонтёр|Voluntar
ONG|NGO|ONG|NGO|ONG|ONG|НКО|ONG
Donación|Donation|Don|Spende|Donazione|Doação|Пожертвование|Donație
Solidaridad|Solidarity|Solidarité|Solidarität|Solidarietà|Solidariedade|Солидарность|Solidaritate
Emergencia|Emergency|Urgence|Notfall|Emergenza|Emergência|Чрезвычайная ситуация|Urgență
Terremoto|Earthquake|Tremblement de terre|Erdbeben|Terremoto|Sismo|Землетрясение|Cutremur
Incendio|Fire|Incendie|Brand|Incendio|Incêndio|Пожар|Incendiu
Inundación|Flood|Inondation|Überschwemmung|Alluvione|Inundação|Наводнение|Inundație
Sequía|Drought|Sécheresse|Dürre|Siccità|Seca|Засуха|Secetă
Evacuación|Evacuation|Évacuation|Evakuierung|Evacuazione|Evacuação|Эвакуация|Evacuare
Rescate|Rescue|Sauvetage|Rettung|Salvataggio|Resgate|Спасение|Salvare
Damnificado|Person affected|Sinistré|Betroffener|Sfollato|Desalojado|Пострадавший|Sinistrat
Medios de comunicación|Media|Médias|Medien|Mezzi di comunicazione|Meios de comunicação|СМИ|Mass-media
Prensa|Press|Presse|Presse|Stampa|Imprensa|Пресса|Presă
Opinión pública|Public opinion|Opinion publique|öffentliche Meinung|Opinione pubblica|Opinião pública|Общественное мнение|Opinie publică
`);

  /* 33 · Salud y bienestar (56 palabras) */
  more(33, `
Médico de cabecera|GP|Médecin généraliste|Hausarzt|Medico di base|Médico de família|Терапевт|Medic de familie
Pediatra|Paediatrician|Pédiatre|Kinderarzt|Pediatra|Pediatra|Педиатр|Pediatru
Dentista|Dentist|Dentiste|Zahnarzt|Dentista|Dentista|Стоматолог|Dentist
Enfermero|Nurse|Infirmier|Krankenpfleger|Infermiere|Enfermeiro|Медбрат|Asistent medical
Farmacia|Pharmacy|Pharmacie|Apotheke|Farmacia|Farmácia|Аптека|Farmacie
Medicamento|Medicine|Médicament|Medikament|Farmaco|Medicamento|Лекарство|Medicament
Pastilla|Pill|Comprimé|Tablette|Pastiglia|Comprimido|Таблетка|Pastilă
Jarabe|Syrup|Sirop|Hustensaft|Sciroppo|Xarope|Сироп|Sirop
Pomada|Ointment|Pommade|Salbe|Pomata|Pomada|Мазь|Unguent
Inyección|Injection|Injection|Spritze|Iniezione|Injeção|Укол|Injecție
Venda|Bandage|Bandage|Verband|Benda|Ligadura|Бинт|Bandaj
Termómetro|Thermometer|Thermomètre|Thermometer|Termometro|Termómetro|Термометр|Termometru
Fiebre|Fever|Fièvre|Fieber|Febbre|Febre|Температура|Febră
Tos|Cough|Toux|Husten|Tosse|Tosse|Кашель|Tuse
Resfriado|Cold|Rhume|Erkältung|Raffreddore|Constipação|Простуда|Răceală
Gripe|Flu|Grippe|Grippe|Influenza|Gripe|Грипп|Gripă
Dolor de cabeza|Headache|Mal de tête|Kopfschmerzen|Mal di testa|Dor de cabeça|Головная боль|Durere de cap
Dolor de estómago|Stomach ache|Mal au ventre|Bauchschmerzen|Mal di stomaco|Dor de barriga|Боль в животе|Durere de stomac
Náuseas|Nausea|Nausées|Übelkeit|Nausea|Náuseas|Тошнота|Greață
Mareo|Dizziness|Vertige|Schwindel|Capogiro|Tontura|Головокружение|Amețeală
Erupción|Rash|Éruption cutanée|Hautausschlag|Eruzione cutanea|Erupção cutânea|Сыпь|Erupție cutanată
Picadura|Sting|Piqûre|Stich|Puntura|Picada|Укус|Înțepătură
Quemadura|Burn|Brûlure|Verbrennung|Ustione|Queimadura|Ожог|Arsură
Herida|Wound|Plaie|Wunde|Ferita|Ferida|Рана|Rană
Fractura|Fracture|Fracture|Bruch|Frattura|Fratura|Перелом|Fractură
Esguince|Sprain|Entorse|Verstauchung|Distorsione|Entorse|Растяжение|Entorsă
Radiografía|X-ray|Radiographie|Röntgenbild|Radiografia|Radiografia|Рентген|Radiografie
Ecografía|Ultrasound|Échographie|Ultraschall|Ecografia|Ecografia|УЗИ|Ecografie
Análisis de sangre|Blood test|Prise de sang|Bluttest|Esame del sangue|Análises ao sangue|Анализ крови|Analize de sânge
Resultado|Result|Résultat|Ergebnis|Risultato|Resultado|Результат|Rezultat
Consulta|Appointment|Consultation|Sprechstunde|Visita|Consulta|Приём|Consultație
Ambulancia|Ambulance|Ambulance|Krankenwagen|Ambulanza|Ambulância|Скорая помощь|Ambulanță
Quirófano|Operating theatre|Bloc opératoire|Operationssaal|Sala operatoria|Bloco operatório|Операционная|Sală de operații
Anestesia|Anaesthesia|Anesthésie|Narkose|Anestesia|Anestesia|Анестезия|Anestezie
Operar|To operate|Opérer|operieren|Operare|Operar|Оперировать|A opera
Recetar|To prescribe|Prescrire|verschreiben|Prescrivere|Receitar|Выписывать|A prescrie
Recuperarse|To recover|Se rétablir|sich erholen|Riprendersi|Recuperar|Выздоравливать|A-și reveni
Contagioso|Contagious|Contagieux|ansteckend|Contagioso|Contagioso|Заразный|Contagios
Efectos secundarios|Side effects|Effets secondaires|Nebenwirkungen|Effetti collaterali|Efeitos secundários|Побочные эффекты|Efecte secundare
Prospecto|Leaflet|Notice|Beipackzettel|Foglietto illustrativo|Folheto informativo|Инструкция|Prospect
Seguro médico|Health insurance|Assurance maladie|Krankenversicherung|Assicurazione sanitaria|Seguro de saúde|Медицинская страховка|Asigurare medicală
Historial médico|Medical history|Dossier médical|Krankengeschichte|Anamnesi|Historial clínico|История болезни|Istoric medical
Asma|Asthma|Asthme|Asthma|Asma|Asma|Астма|Astm
Presión alta|High blood pressure|Hypertension|Bluthochdruck|Pressione alta|Tensão alta|Высокое давление|Tensiune mare
Embarazo|Pregnancy|Grossesse|Schwangerschaft|Gravidanza|Gravidez|Беременность|Sarcină
Parto|Childbirth|Accouchement|Geburt|Parto|Parto|Роды|Naștere
Primeros auxilios|First aid|Premiers secours|Erste Hilfe|Primo soccorso|Primeiros socorros|Первая помощь|Prim ajutor
Descansar|To rest|Se reposer|sich ausruhen|Riposare|Descansar|Отдыхать|A se odihni
Hidratarse|To stay hydrated|S'hydrater|ausreichend trinken|Idratarsi|Hidratar-se|Пить достаточно воды|A se hidrata
Guardar reposo|To stay in bed|Rester au repos|Bettruhe einhalten|Stare a riposo|Guardar repouso|Соблюдать постельный режим|A sta în repaus
Tomar la temperatura|To take your temperature|Prendre sa température|Fieber messen|Misurare la febbre|Medir a febre|Измерить температуру|A-și lua temperatura
Pedir cita|To make an appointment|Prendre rendez-vous|einen Termin vereinbaren|Prendere appuntamento|Marcar consulta|Записаться на приём|A face o programare
Estar en forma|To be fit|Être en forme|fit sein|Essere in forma|Estar em forma|Быть в форме|A fi în formă
Salud pública|Public health|Santé publique|öffentliche Gesundheit|Salute pubblica|Saúde pública|Общественное здравоохранение|Sănătate publică
`);

  /* 34 · Ciencia y tecnología (56 palabras) */
  more(34, `
Científico|Scientist|Scientifique|Wissenschaftler|Scienziato|Cientista|Учёный|Om de știință
Investigador|Researcher|Chercheur|Forscher|Ricercatore|Investigador|Исследователь|Cercetător
Estudio|Study|Étude|Studie|Studio|Estudo|Научная работа|Studiu
Método científico|Scientific method|Méthode scientifique|wissenschaftliche Methode|Metodo scientifico|Método científico|Научный метод|Metodă științifică
Observación|Observation|Observation|Beobachtung|Osservazione|Observação|Наблюдение|Observație
Muestra|Sample|Échantillon|Probe|Campione|Amostra|Образец|Probă
Variable|Variable|Variable|Variable|Variabile|Variável|Переменная|Variabilă
Modelo|Model|Modèle|Modell|Modello|Modelo|Модель|Model
Simulación|Simulation|Simulation|Simulation|Simulazione|Simulação|Моделирование|Simulare
Genética|Genetics|Génétique|Genetik|Genetica|Genética|Генетика|Genetică
ADN|DNA|ADN|DNA|DNA|ADN|ДНК|ADN
Célula|Cell|Cellule|Zelle|Cellula|Célula|Клетка|Celulă
Átomo|Atom|Atome|Atom|Atomo|Átomo|Атом|Atom
Molécula|Molecule|Molécule|Molekül|Molecola|Molécula|Молекула|Moleculă
Gravedad|Gravity|Gravité|Schwerkraft|Gravità|Gravidade|Гравитация|Gravitație
Electricidad|Electricity|Électricité|Elektrizität|Elettricità|Eletricidade|Электричество|Electricitate
Energía renovable|Renewable energy|Énergie renouvelable|erneuerbare Energie|Energia rinnovabile|Energia renovável|Возобновляемая энергия|Energie regenerabilă
Medicina|Medicine|Médecine|Medizin|Medicina|Medicina|Медицина|Medicină
Virus|Virus|Virus|Virus|Virus|Vírus|Вирус|Virus
Bacteria|Bacterium|Bactérie|Bakterie|Batterio|Bactéria|Бактерия|Bacterie
Ingeniería genética|Genetic engineering|Génie génétique|Gentechnik|Ingegneria genetica|Engenharia genética|Генная инженерия|Inginerie genetică
Espacio|Space|Espace|Weltraum|Spazio|Espaço|Космос|Spațiu
Galaxia|Galaxy|Galaxie|Galaxie|Galassia|Galáxia|Галактика|Galaxie
Astronauta|Astronaut|Astronaute|Astronaut|Astronauta|Astronauta|Космонавт|Astronaut
Cohete|Rocket|Fusée|Rakete|Razzo|Foguetão|Ракета|Rachetă
Estación espacial|Space station|Station spatiale|Raumstation|Stazione spaziale|Estação espacial|Космическая станция|Stație spațială
Misión|Mission|Mission|Mission|Missione|Missão|Миссия|Misiune
Red|Network|Réseau|Netzwerk|Rete|Rede|Сеть|Rețea
Servidor|Server|Serveur|Server|Server|Servidor|Сервер|Server
Base de datos|Database|Base de données|Datenbank|Database|Base de dados|База данных|Bază de date
Programador|Programmer|Programmeur|Programmierer|Programmatore|Programador|Программист|Programator
Programación|Programming|Programmation|Programmierung|Programmazione|Programação|Программирование|Programare
Lenguaje de programación|Programming language|Langage de programmation|Programmiersprache|Linguaggio di programmazione|Linguagem de programação|Язык программирования|Limbaj de programare
Dron|Drone|Drone|Drohne|Drone|Drone|Дрон|Dronă
Impresora 3D|3D printer|Imprimante 3D|3D-Drucker|Stampante 3D|Impressora 3D|Принтер для трёхмерной печати|Imprimantă 3D
Auto eléctrico|Electric car|Voiture électrique|Elektroauto|Auto elettrica|Carro elétrico|Электромобиль|Mașină electrică
Auto autónomo|Self-driving car|Voiture autonome|selbstfahrendes Auto|Auto a guida autonoma|Carro autónomo|Беспилотный автомобиль|Mașină autonomă
Cadena de bloques|Blockchain|Chaîne de blocs|Blockchain|Blockchain|Blockchain|Блокчейн|Blockchain
Macrodatos|Big data|Mégadonnées|Big Data|Big data|Big data|Большие данные|Big data
Aprendizaje automático|Machine learning|Apprentissage automatique|maschinelles Lernen|Apprendimento automatico|Aprendizagem automática|Машинное обучение|Învățare automată
Reconocimiento facial|Facial recognition|Reconnaissance faciale|Gesichtserkennung|Riconoscimento facciale|Reconhecimento facial|Распознавание лиц|Recunoaștere facială
Vigilancia|Surveillance|Surveillance|Überwachung|Sorveglianza|Vigilância|Слежка|Supraveghere
Ética|Ethics|Éthique|Ethik|Etica|Ética|Этика|Etică
Brecha digital|Digital divide|Fracture numérique|digitale Kluft|Divario digitale|Fosso digital|Цифровое неравенство|Decalaj digital
Descubrir|To discover|Découvrir|entdecken|Scoprire|Descobrir|Открывать|A descoperi
Inventar|To invent|Inventer|erfinden|Inventare|Inventar|Изобретать|A inventa
Desarrollar|To develop|Développer|entwickeln|Sviluppare|Desenvolver|Разрабатывать|A dezvolta
Medir|To measure|Mesurer|messen|Misurare|Medir|Измерять|A măsura
Comprobar|To verify|Vérifier|überprüfen|Verificare|Comprovar|Проверять|A verifica
Analizar|To analyse|Analyser|analysieren|Analizzare|Analisar|Анализировать|A analiza
Programar|To programme|Programmer|programmieren|Programmare|Programar|Программировать|A programa
Piratear|To hack|Pirater|hacken|Hackerare|Piratear|Взламывать|A sparge (un sistem)
Sustituir|To replace|Remplacer|ersetzen|Sostituire|Substituir|Заменять|A înlocui
Dependencia|Dependence|Dépendance|Abhängigkeit|Dipendenza|Dependência|Зависимость|Dependență
Riesgo|Risk|Risque|Risiko|Rischio|Risco|Риск|Risc
Beneficio|Benefit|Avantage|Nutzen|Beneficio|Benefício|Польза|Beneficiu
`);

  /* 35 · Viajes y culturas (55 palabras) */
  more(35, `
Viajero|Traveller|Voyageur|Reisender|Viaggiatore|Viajante|Путешественник|Călător
Aventura|Adventure|Aventure|Abenteuer|Avventura|Aventura|Приключение|Aventură
Brújula|Compass|Boussole|Kompass|Bussola|Bússola|Компас|Busolă
Creencia|Belief|Croyance|Glaube|Credenza|Crença|Верование|Credință
Religión|Religion|Religion|Religion|Religione|Religião|Религия|Religie
Festival|Festival|Festival|Festival|Festival|Festival|Фестиваль|Festival
Folclore|Folklore|Folklore|Folklore|Folclore|Folclore|Фольклор|Folclor
Artesanía|Handicrafts|Artisanat|Kunsthandwerk|Artigianato|Artesanato|Народные промыслы|Artizanat
Mercado|Market|Marché|Markt|Mercato|Mercado|Рынок|Piață
Cocina tradicional|Traditional cuisine|Cuisine traditionnelle|traditionelle Küche|Cucina tradizionale|Cozinha tradicional|Традиционная кухня|Bucătărie tradițională
Plato típico|Local dish|Plat typique|typisches Gericht|Piatto tipico|Prato típico|Местное блюдо|Fel tipic
Especialidad|Speciality|Spécialité|Spezialität|Specialità|Especialidade|Фирменное блюдо|Specialitate
Menú del día|Set menu|Menu du jour|Tagesmenü|Menù del giorno|Prato do dia|Комплексный обед|Meniul zilei
Propina|Tip|Pourboire|Trinkgeld|Mancia|Gorjeta|Чаевые|Bacșiș
Saludo|Greeting|Salutation|Gruß|Saluto|Cumprimento|Приветствие|Salut
Beso en la mejilla|Kiss on the cheek|Bise|Wangenkuss|Bacio sulla guancia|Beijo na cara|Поцелуй в щёку|Sărut pe obraz
Apretón de manos|Handshake|Poignée de main|Handschlag|Stretta di mano|Aperto de mão|Рукопожатие|Strângere de mână
Reverencia|Bow|Révérence|Verbeugung|Inchino|Vénia|Поклон|Plecăciune
Modales|Manners|Manières|Manieren|Buone maniere|Boas maneiras|Манеры|Maniere
Cortesía|Courtesy|Courtoisie|Höflichkeit|Cortesia|Cortesia|Вежливость|Politețe
Malentendido cultural|Cultural misunderstanding|Malentendu culturel|kulturelles Missverständnis|Malinteso culturale|Mal-entendido cultural|Культурное недоразумение|Neînțelegere culturală
Barrera del idioma|Language barrier|Barrière de la langue|Sprachbarriere|Barriera linguistica|Barreira linguística|Языковой барьер|Barieră lingvistică
Acento|Accent|Accent|Akzent|Accento|Sotaque|Акцент|Accent
Guía de conversación|Phrasebook|Guide de conversation|Sprachführer|Frasario|Guia de conversação|Разговорник|Ghid de conversație
Inmersión lingüística|Language immersion|Immersion linguistique|Sprachimmersion|Immersione linguistica|Imersão linguística|Языковое погружение|Imersiune lingvistică
Familia anfitriona|Host family|Famille d'accueil|Gastfamilie|Famiglia ospitante|Família de acolhimento|Принимающая семья|Familie gazdă
Intercambio de idiomas|Language exchange|Échange linguistique|Sprachaustausch|Scambio linguistico|Intercâmbio de línguas|Языковой обмен|Schimb lingvistic
Voluntariado|Volunteering|Bénévolat|Freiwilligenarbeit|Volontariato|Voluntariado|Волонтёрство|Voluntariat
Beca|Scholarship|Bourse|Stipendium|Borsa di studio|Bolsa de estudo|Стипендия|Bursă
Estudiar en el extranjero|To study abroad|Étudier à l'étranger|im Ausland studieren|Studiare all'estero|Estudar no estrangeiro|Учиться за границей|A studia în străinătate
Visa de estudiante|Student visa|Visa étudiant|Studentenvisum|Visto per studenti|Visto de estudante|Студенческая виза|Viză de student
Residencia|Residence|Résidence|Wohnsitz|Residenza|Residência|Место жительства|Reședință
Adaptarse|To adapt|S'adapter|sich anpassen|Adattarsi|Adaptar-se|Адаптироваться|A se adapta
Integrarse|To integrate|S'intégrer|sich integrieren|Integrarsi|Integrar-se|Интегрироваться|A se integra
Extrañar|To miss|Manquer|vermissen|Mancare|Ter saudades|Скучать|A-i fi dor
Nostalgia|Homesickness|Mal du pays|Heimweh|Nostalgia|Saudade|Тоска по дому|Dor de casă
Ciudad antigua|Old town|Vieille ville|Altstadt|Centro storico|Cidade velha|Старый город|Oraș vechi
Monumento|Monument|Monument|Denkmal|Monumento|Monumento|Памятник|Monument
Museo|Museum|Musée|Museum|Museo|Museu|Музей|Muzeu
Iglesia|Church|Église|Kirche|Chiesa|Igreja|Церковь|Biserică
Mirador|Viewpoint|Point de vue|Aussichtspunkt|Punto panoramico|Miradouro|Смотровая площадка|Punct de belvedere
Sendero|Trail|Sentier|Wanderweg|Sentiero|Trilho|Тропа|Potecă
Parque natural|Nature park|Parc naturel|Naturpark|Parco naturale|Parque natural|Природный парк|Parc natural
Costa|Coast|Côte|Küste|Costa|Costa|Побережье|Coastă
Isla|Island|Île|Insel|Isola|Ilha|Остров|Insulă
Clima|Climate|Climat|Klima|Clima|Clima|Климат|Climă
Temporada baja|Low season|Basse saison|Nebensaison|Bassa stagione|Época baixa|Низкий сезон|Extrasezon
Oferta turística|Tourist offer|Offre touristique|Touristenangebot|Offerta turistica|Oferta turística|Туристическое предложение|Ofertă turistică
Agencia de viajes|Travel agency|Agence de voyages|Reisebüro|Agenzia di viaggi|Agência de viagens|Турагентство|Agenție de turism
Descubrir|To discover|Découvrir|entdecken|Scoprire|Descobrir|Открывать для себя|A descoperi
Respetar|To respect|Respecter|respektieren|Rispettare|Respeitar|Уважать|A respecta
Compartir|To share|Partager|teilen|Condividere|Partilhar|Делиться|A împărtăși
`);

  /* 36 · Vivienda y ciudad (56 palabras) */
  more(36, `
Casa|House|Maison|Haus|Casa|Casa|Дом|Casă
Habitación|Room|Pièce|Zimmer|Stanza|Divisão|Комната|Cameră
Salón|Living room|Salon|Wohnzimmer|Soggiorno|Sala de estar|Гостиная|Living
Cocina|Kitchen|Cuisine|Küche|Cucina|Cozinha|Кухня|Bucătărie
Baño|Bathroom|Salle de bain|Badezimmer|Bagno|Casa de banho|Ванная|Baie
Dormitorio|Bedroom|Chambre|Schlafzimmer|Camera da letto|Quarto|Спальня|Dormitor
Terraza|Terrace|Terrasse|Terrasse|Terrazza|Terraço|Терраса|Terasă
Balcón|Balcony|Balcon|Balkon|Balcone|Varanda|Балкон|Balcon
Jardín|Garden|Jardin|Garten|Giardino|Jardim|Сад|Grădină
Piscina|Swimming pool|Piscine|Schwimmbad|Piscina|Piscina|Бассейн|Piscină
Portero|Concierge|Concierge|Hausmeister|Portiere|Porteiro|Консьерж|Portar
Escalera|Stairs|Escalier|Treppe|Scala|Escada|Лестница|Scară
Planta|Storey|Étage|Stockwerk|Piano|Andar|Этаж|Etaj
Techo|Ceiling|Plafond|Decke|Soffitto|Teto|Потолок|Tavan
Pared|Wall|Mur|Wand|Parete|Parede|Стена|Perete
Suelo|Floor|Sol|Boden|Pavimento|Chão|Пол|Podea
Ventana|Window|Fenêtre|Fenster|Finestra|Janela|Окно|Fereastră
Puerta|Door|Porte|Tür|Porta|Porta|Дверь|Ușă
Llave|Key|Clé|Schlüssel|Chiave|Chave|Ключ|Cheie
Timbre|Doorbell|Sonnette|Klingel|Campanello|Campainha|Дверной звонок|Sonerie
Buzón|Letterbox|Boîte aux lettres|Briefkasten|Cassetta delle lettere|Caixa de correio|Почтовый ящик|Cutie poștală
Electrodomésticos|Appliances|Électroménager|Haushaltsgeräte|Elettrodomestici|Eletrodomésticos|Бытовая техника|Electrocasnice
Lavadora|Washing machine|Machine à laver|Waschmaschine|Lavatrice|Máquina de lavar roupa|Стиральная машина|Mașină de spălat
Refrigerador|Fridge|Réfrigérateur|Kühlschrank|Frigorifero|Frigorífico|Холодильник|Frigider
Horno|Oven|Four|Backofen|Forno|Forno|Духовка|Cuptor
Lavavajillas|Dishwasher|Lave-vaisselle|Geschirrspüler|Lavastoviglie|Máquina de lavar loução|Посудомоечная машина|Mașină de spălat vase
Estufa|Cooker|Cuisinière|Herd|Fornello|Fogão|Плита|Aragaz
Muebles|Furniture|Meubles|Möbel|Mobili|Mobiliário|Мебель|Mobilă
Sofá|Sofa|Canapé|Sofa|Divano|Sofá|Диван|Canapea
Estantería|Bookcase|Étagère|Regal|Libreria|Estante|Книжный шкаф|Bibliotecă
Armario|Wardrobe|Armoire|Schrank|Armadio|Armário|Шкаф|Dulap
Colchón|Mattress|Matelas|Matratze|Materasso|Colchão|Матрас|Saltea
Cortinas|Curtains|Rideaux|Vorhänge|Tende|Cortinas|Шторы|Perdele
Alfombra|Rug|Tapis|Teppich|Tappeto|Tapete|Ковёр|Covor
Decoración|Decoration|Décoration|Einrichtung|Arredamento|Decoração|Интерьер|Decor
Pintar|To paint|Peindre|streichen|Dipingere|Pintar|Красить|A vopsi
Limpiar|To clean|Nettoyer|putzen|Pulire|Limpar|Убирать|A curăța
Ordenar|To tidy|Ranger|aufräumen|Mettere in ordine|Arrumar|Наводить порядок|A face ordine
Reparar|To repair|Réparer|reparieren|Riparare|Reparar|Чинить|A repara
Fuga|Leak|Fuite|Leck|Perdita|Fuga|Протечка|Scurgere
Humedad|Damp|Humidité|Feuchtigkeit|Umidità|Humidade|Сырость|Umezeală
Ruidoso|Noisy|Bruyant|laut|Rumoroso|Barulhento|Шумный|Zgomotos
Tranquilo|Quiet|Calme|ruhig|Tranquillo|Tranquilo|Тихий|Liniștit
Luminoso|Bright|Lumineux|hell|Luminoso|Luminoso|Светлый|Luminos
Espacioso|Spacious|Spacieux|geräumig|Spazioso|Espaçoso|Просторный|Spațios
Céntrico|Central|Central|zentral|Centrale|Central|Расположенный в центре|Central
Alquiler mensual|Monthly rent|Loyer mensuel|Monatsmiete|Affitto mensile|Renda mensal|Ежемесячная арендная плата|Chirie lunară
Mudarse|To move|Déménager|umziehen|Traslocare|Mudar-se|Переезжать|A se muta
Vista|View|Vue|Aussicht|Vista|Vista|Вид|Priveliște
Periferia|Suburbs|Banlieue|Stadtrand|Periferia|Periferia|Окраина|Periferie
Plaza|Square|Place|Platz|Piazza|Praça|Площадь|Piață
Calle peatonal|Pedestrian street|Rue piétonne|Fußgängerzone|Via pedonale|Rua pedonal|Пешеходная улица|Stradă pietonală
`);

  /* 37 · Finanzas personales (57 palabras) */
  more(37, `
Dinero|Money|Argent|Geld|Soldi|Dinheiro|Деньги|Bani
Efectivo|Cash|Espèces|Bargeld|Contanti|Dinheiro vivo|Наличные|Numerar
Tarjeta de débito|Debit card|Carte de débit|Girokarte|Carta di debito|Cartão de débito|Дебетовая карта|Card de debit
Cajero automático|Cash machine|Distributeur de billets|Geldautomat|Bancomat|Multibanco|Банкомат|Bancomat
Transferencia|Transfer|Virement|Überweisung|Bonifico|Transferência|Перевод|Transfer bancar
Saldo|Balance|Solde|Kontostand|Saldo|Saldo|Остаток на счёте|Sold
Comisión|Fee|Commission|Gebühr|Commissione|Comissão|Комиссия|Comision
Descubierto|Overdraft|Découvert|Überziehung|Scoperto|Descoberto|Овердрафт|Descoperit de cont
Sueldo|Salary|Salaire|Gehalt|Stipendio|Ordenado|Зарплата|Salariu
Nómina|Payslip|Fiche de paie|Gehaltsabrechnung|Busta paga|Recibo de vencimento|Расчётный листок|Fluturaș de salariu
Gastos mensuales|Monthly expenses|Dépenses mensuelles|monatliche Ausgaben|Spese mensili|Despesas mensais|Ежемесячные расходы|Cheltuieli lunare
Ahorrar|To save|Épargner|sparen|Risparmiare|Poupar|Копить|A economisa
Gastar|To spend|Dépenser|ausgeben|Spendere|Gastar|Тратить|A cheltui
Invertir|To invest|Investir|investieren|Investire|Investir|Инвестировать|A investi
Prestar|To lend|Prêter|verleihen|Prestare|Emprestar|Одалживать|A împrumuta
Endeudarse|To get into debt|S'endetter|sich verschulden|Indebitarsi|Endividar-se|Влезать в долги|A se îndatora
Pagar a plazos|To pay in instalments|Payer en plusieurs fois|in Raten zahlen|Pagare a rate|Pagar a prestações|Платить в рассрочку|A plăti în rate
Tasa de interés|Interest rate|Taux d'intérêt|Zinssatz|Tasso d'interesse|Taxa de juro|Процентная ставка|Rată a dobânzii
Hipoteca|Mortgage|Crédit immobilier|Hypothek|Mutuo|Crédito à habitação|Ипотека|Ipotecă
Solvencia|Solvency|Solvabilité|Zahlungsfähigkeit|Solvibilità|Solvência|Платёжеспособность|Solvabilitate
Aval|Guarantor|Garant|Bürge|Garante|Fiador|Поручитель|Garant
Impuesto sobre la renta|Income tax|Impôt sur le revenu|Einkommensteuer|Imposta sul reddito|Imposto sobre o rendimento|Подоходный налог|Impozit pe venit
IVA|VAT|TVA|Mehrwertsteuer|IVA|IVA|НДС|TVA
Factura|Invoice|Facture|Rechnung|Fattura|Fatura|Счёт-фактура|Factură
Deducción|Deduction|Déduction|Abzug|Detrazione|Dedução|Вычет|Deducere
Reembolso|Refund|Remboursement|Rückerstattung|Rimborso|Reembolso|Возврат|Rambursare
Plan de pensiones|Pension plan|Plan de retraite|Rentenplan|Piano pensionistico|Plano de reforma|Пенсионный план|Plan de pensii
Seguro de vida|Life insurance|Assurance-vie|Lebensversicherung|Assicurazione sulla vita|Seguro de vida|Страхование жизни|Asigurare de viață
Seguro de salud|Health insurance|Assurance santé|Krankenversicherung|Assicurazione sanitaria|Seguro de saúde|Медицинская страховка|Asigurare de sănătate
Póliza|Policy|Contrat d'assurance|Police|Polizza|Apólice|Полис|Poliță
Franquicia|Excess|Franchise|Selbstbeteiligung|Franchigia|Franquia|Франшиза|Franșiză
Bono|Bond|Obligation|Anleihe|Obbligazione|Obrigação|Облигация|Obligațiune
Inversor|Investor|Investisseur|Anleger|Investitore|Investidor|Инвестор|Investitor
Rentabilidad|Return|Rentabilité|Rendite|Rendimento|Rentabilidade|Доходность|Randament
Cartera de inversión|Investment portfolio|Portefeuille d'investissement|Anlageportfolio|Portafoglio di investimento|Carteira de investimentos|Инвестиционный портфель|Portofoliu de investiții
Diversificar|To diversify|Diversifier|diversifizieren|Diversificare|Diversificar|Диверсифицировать|A diversifica
Quiebra|Bankruptcy|Faillite|Insolvenz|Fallimento|Falência|Банкротство|Faliment
Crisis económica|Economic crisis|Crise économique|Wirtschaftskrise|Crisi economica|Crise económica|Экономический кризис|Criză economică
Recesión|Recession|Récession|Rezession|Recessione|Recessão|Рецессия|Recesiune
Costo de la vida|Cost of living|Coût de la vie|Lebenshaltungskosten|Costo della vita|Custo de vida|Стоимость жизни|Costul vieții
Poder adquisitivo|Purchasing power|Pouvoir d'achat|Kaufkraft|Potere d'acquisto|Poder de compra|Покупательная способность|Putere de cumpărare
Rebajas|Sales|Soldes|Ausverkauf|Saldi|Saldos|Распродажа|Reduceri
Ofertas|Special offers|Offres|Angebote|Offerte|Ofertas|Специальные предложения|Oferte
Cupón|Voucher|Bon de réduction|Gutschein|Buono sconto|Cupão|Купон|Cupon
Comparar precios|To compare prices|Comparer les prix|Preise vergleichen|Confrontare i prezzi|Comparar preços|Сравнивать цены|A compara prețurile
Regatear|To haggle|Marchander|feilschen|Contrattare|Pechinchar|Торговаться|A se tocmi
Gasto innecesario|Unnecessary spending|Dépense inutile|unnötige Ausgabe|Spesa inutile|Despesa desnecessária|Лишняя трата|Cheltuială inutilă
Compra impulsiva|Impulse buy|Achat impulsif|Impulskauf|Acquisto impulsivo|Compra por impulso|Импульсивная покупка|Cumpărătură impulsivă
Phishing|Phishing|Hameçonnage|Phishing|Phishing|Phishing|Фишинг|Phishing
Contraseña|Password|Mot de passe|Passwort|Password|Palavra-passe|Пароль|Parolă
Código de seguridad|Security code|Code de sécurité|Sicherheitscode|Codice di sicurezza|Código de segurança|Код безопасности|Cod de securitate
Bloquear|To block|Bloquer|sperren|Bloccare|Bloquear|Блокировать|A bloca
`);

  /* 38 · Medios y redes (57 palabras) */
  more(38, `
Periódico|Newspaper|Journal|Zeitung|Giornale|Jornal|Газета|Ziar
Revista|Magazine|Magazine|Zeitschrift|Rivista|Revista|Журнал|Revistă
Noticiero|News bulletin|Journal télévisé|Nachrichtensendung|Telegiornale|Telejornal|Выпуск новостей|Buletin de știri
Radio|Radio|Radio|Radio|Radio|Rádio|Радио|Radio
Canal|Channel|Chaîne|Sender|Canale|Canal|Канал|Canal
Programa|Programme|Émission|Sendung|Programma|Programa|Передача|Emisiune
Serie|Series|Série|Serie|Serie|Série|Сериал|Serial
Plataforma|Platform|Plateforme|Plattform|Piattaforma|Plataforma|Платформа|Platformă
Red social|Social network|Réseau social|soziales Netzwerk|Social network|Rede social|Социальная сеть|Rețea socială
Perfil|Profile|Profil|Profil|Profilo|Perfil|Профиль|Profil
Cuenta|Account|Compte|Konto|Account|Conta|Аккаунт|Cont
Seguir|To follow|Suivre|folgen|Seguire|Seguir|Подписываться|A urmări
Compartir|To share|Partager|teilen|Condividere|Partilhar|Делиться|A distribui
Dar me gusta|To like|Aimer|liken|Mettere mi piace|Gostar|Ставить лайк|A aprecia
Comentar|To comment|Commenter|kommentieren|Commentare|Comentar|Комментировать|A comenta
Etiquetar|To tag|Taguer|markieren|Taggare|Etiquetar|Отмечать|A eticheta
Reaccionar|To react|Réagir|reagieren|Reagire|Reagir|Реагировать|A reacționa
Hilo|Thread|Fil de discussion|Thread|Thread|Fio|Ветка обсуждения|Fir de discuție
Mensaje directo|Direct message|Message privé|Direktnachricht|Messaggio diretto|Mensagem direta|Личное сообщение|Mesaj direct
Historia|Story|Story|Story|Storia|Story|Сториз|Story
Hashtag|Hashtag|Hashtag|Hashtag|Hashtag|Hashtag|Хештег|Hashtag
Tendencia|Trend|Tendance|Trend|Tendenza|Tendência|Тренд|Tendință
Contenido|Content|Contenu|Inhalt|Contenuto|Conteúdo|Контент|Conținut
Creador de contenido|Content creator|Créateur de contenu|Content-Creator|Creatore di contenuti|Criador de conteúdo|Создатель контента|Creator de conținut
Visualización|View|Vue|Aufruf|Visualizzazione|Visualização|Просмотр|Vizualizare
Algoritmo|Algorithm|Algorithme|Algorithmus|Algoritmo|Algoritmo|Алгоритм|Algoritm
Titular|Headline|Titre|Schlagzeile|Titolo|Título|Заголовок|Titlu
Artículo de opinión|Opinion piece|Tribune|Meinungsbeitrag|Articolo d'opinione|Artigo de opinião|Колонка автора|Articol de opinie
Entrevista|Interview|Interview|Interview|Intervista|Entrevista|Интервью|Interviu
Fuente|Source|Source|Quelle|Fonte|Fonte|Источник|Sursă
Dato|Fact|Donnée|Angabe|Dato|Dado|Факт|Date
Estadística|Statistic|Statistique|Statistik|Statistica|Estatística|Статистика|Statistică
Contraste de fuentes|Cross-checking|Recoupement des sources|Quellenabgleich|Verifica incrociata|Confronto de fontes|Сверка источников|Verificarea surselor
Rumor|Rumour|Rumeur|Gerücht|Voce|Rumor|Слух|Zvon
Manipulación|Manipulation|Manipulation|Manipulation|Manipolazione|Manipulação|Манипуляция|Manipulare
Propaganda|Propaganda|Propagande|Propaganda|Propaganda|Propaganda|Пропаганда|Propagandă
Polarización|Polarisation|Polarisation|Polarisierung|Polarizzazione|Polarização|Поляризация|Polarizare
Discurso de odio|Hate speech|Discours de haine|Hassrede|Discorso d'odio|Discurso de ódio|Язык вражды|Discurs al urii
Acoso en línea|Online harassment|Harcèlement en ligne|Cybermobbing|Molestie online|Assédio online|Травля в интернете|Hărțuire online
Privacidad|Privacy|Vie privée|Datenschutz|Privacy|Privacidade|Конфиденциальность|Confidențialitate
Datos personales|Personal data|Données personnelles|persönliche Daten|Dati personali|Dados pessoais|Персональные данные|Date personale
Consentimiento|Consent|Consentement|Einwilligung|Consenso|Consentimento|Согласие|Consimțământ
Huella digital|Digital footprint|Empreinte numérique|digitaler Fußabdruck|Impronta digitale|Pegada digital|Цифровой след|Amprentă digitală
Adicción|Addiction|Dépendance|Sucht|Dipendenza|Vício|Зависимость|Dependență
Tiempo de pantalla|Screen time|Temps d'écran|Bildschirmzeit|Tempo di utilizzo dello schermo|Tempo de ecrã|Экранное время|Timp petrecut pe ecran
Desconectar|To disconnect|Se déconnecter|abschalten|Disconnettersi|Desligar-se|Отключиться|A se deconecta
Informarse|To keep informed|S'informer|sich informieren|Informarsi|Informar-se|Следить за новостями|A se informa
Difundir|To spread|Diffuser|verbreiten|Diffondere|Difundir|Распространять|A răspândi
Desmentir|To deny|Démentir|dementieren|Smentire|Desmentir|Опровергать|A dezminți
Denunciar|To report|Signaler|melden|Segnalare|Denunciar|Жаловаться|A raporta
Bloquear|To block|Bloquer|blockieren|Bloccare|Bloquear|Блокировать|A bloca
Opinar|To give an opinion|Donner son avis|seine Meinung äußern|Esprimere un'opinione|Opinar|Высказывать мнение|A-și spune părerea
Debate público|Public debate|Débat public|öffentliche Debatte|Dibattito pubblico|Debate público|Публичные дебаты|Dezbatere publică
Ciudadanía digital|Digital citizenship|Citoyenneté numérique|digitale Bürgerschaft|Cittadinanza digitale|Cidadania digital|Цифровая гражданственность|Cetățenie digitală
`);

  /* 39 · Quejas y negociación (62 palabras) */
  more(39, `
Quejarse|To complain|Se plaindre|sich beschweren|Lamentarsi|Queixar-se|Жаловаться|A se plânge
Cliente|Customer|Client|Kunde|Cliente|Cliente|Клиент|Client
Servicio|Service|Service|Dienst|Servizio|Serviço|Услуга|Serviciu
Producto|Product|Produit|Produkt|Prodotto|Produto|Товар|Produs
Calidad|Quality|Qualité|Qualität|Qualità|Qualidade|Качество|Calitate
Precio|Price|Prix|Preis|Prezzo|Preço|Цена|Preț
Pedido|Order|Commande|Bestellung|Ordine|Encomenda|Заказ|Comandă
Entrega|Delivery|Livraison|Lieferung|Consegna|Entrega|Доставка|Livrare
Seguimiento|Tracking|Suivi|Sendungsverfolgung|Tracciamento|Rastreamento|Отслеживание|Urmărire
Pérdida|Loss|Perte|Verlust|Perdita|Perda|Потеря|Pierdere
Daño|Damage|Dommage|Schaden|Danno|Dano|Повреждение|Daună
Error|Mistake|Erreur|Fehler|Errore|Erro|Ошибка|Eroare
Cobro indebido|Incorrect charge|Prélèvement indu|ungerechtfertigte Abbuchung|Addebito non dovuto|Cobrança indevida|Необоснованное списание|Taxare nejustificată
Cambio|Exchange|Échange|Umtausch|Cambio|Troca|Обмен|Schimb
Cambiar|To exchange|Échanger|umtauschen|Cambiare|Trocar|Обменивать|A schimba
Devolver|To return|Rendre|zurückgeben|Restituire|Devolver|Возвращать|A returna
Plazo de devolución|Return period|Délai de retractation|Rückgabefrist|Termine di reso|Prazo de devolução|Срок возврата|Termen de returnare
Libro de reclamaciones|Complaints book|Registre de réclamations|Beschwerdebuch|Registro dei reclami|Livro de reclamações|Книга жалоб|Condică de reclamații
Servicio técnico|Technical support|Service technique|Kundendienst|Assistenza tecnica|Assistência técnica|Техническая поддержка|Asistență tehnică
Atención telefónica|Phone support|Assistance téléphonique|Telefonsupport|Assistenza telefonica|Atendimento telefónico|Поддержка по телефону|Asistență telefonică
Espera|Wait|Attente|Wartezeit|Attesa|Espera|Ожидание|Așteptare
Gerente|Manager|Directeur|Geschäftsführer|Direttore|Gerente|Управляющий|Manager
Supervisor|Supervisor|Superviseur|Vorgesetzter|Supervisore|Supervisor|Руководитель|Supervizor
Tono|Tone|Ton|Ton|Tono|Tom|Тон|Ton
Cortés|Polite|Poli|höflich|Cortese|Cortês|Вежливый|Politicos
Firme|Firm|Ferme|bestimmt|Fermo|Firme|Твёрдый|Ferm
Educado|Courteous|Courtois|zuvorkommend|Educato|Educado|Воспитанный|Manierat
Agresivo|Aggressive|Agressif|aggressiv|Aggressivo|Agressivo|Агрессивный|Agresiv
Calmarse|To calm down|Se calmer|sich beruhigen|Calmarsi|Acalmar-se|Успокаиваться|A se calma
Exigir|To demand|Exiger|fordern|Esigere|Exigir|Требовать|A cere
Ofrecer|To offer|Offrir|anbieten|Offrire|Oferecer|Предлагать|A oferi
Aceptar|To accept|Accepter|akzeptieren|Accettare|Aceitar|Принимать|A accepta
Cumplir|To fulfil|Respecter|einhalten|Rispettare|Cumprir|Выполнять|A respecta
Incumplir|To breach|Ne pas respecter|verletzen|Violare|Incumprir|Нарушать|A încălca
Respetar|To honour|Honorer|erfüllen|Onorare|Honrar|Соблюдать|A onora
Garantizar|To guarantee|Garantir|garantieren|Garantire|Garantir|Гарантировать|A garanta
Asumir|To take responsibility for|Assumer|übernehmen|Assumere|Assumir|Брать на себя|A-și asuma
Disculparse|To apologise|S'excuser|sich entschuldigen|Scusarsi|Pedir desculpa|Извиняться|A-și cere scuze
Lamentar|To regret|Regretter|bedauern|Rammaricarsi|Lamentar|Сожалеть|A regreta
Ceder|To give way|Céder|nachgeben|Cedere|Ceder|Идти на уступки|A ceda
Llegar a un acuerdo|To reach an agreement|Parvenir à un accord|sich einigen|Raggiungere un accordo|Chegar a acordo|Прийти к соглашению|A ajunge la un acord
Punto medio|Middle ground|Juste milieu|Mittelweg|Via di mezzo|Meio-termo|Золотая середина|Cale de mijloc
Regatear|To haggle|Marchander|feilschen|Contrattare|Pechinchar|Торговаться|A se tocmi
Precio final|Final price|Prix final|Endpreis|Prezzo finale|Preço final|Окончательная цена|Preț final
Descuento|Discount|Remise|Preisnachlass|Sconto|Desconto|Скидка|Reducere
Gratis|Free|Gratuit|kostenlos|Gratis|Grátis|Бесплатно|Gratuit
Obsequio|Gift|Cadeau|Zugabe|Omaggio|Brinde|Подарок|Cadou
Cupón de descuento|Discount voucher|Bon de réduction|Rabattgutschein|Buono sconto|Cupão de desconto|Купон на скидку|Cupon de reducere
Denuncia|Formal complaint|Plainte|Anzeige|Denuncia|Denúncia|Заявление|Reclamație oficială
Defensa del consumidor|Consumer protection|Défense du consommateur|Verbraucherschutz|Tutela del consumatore|Defesa do consumidor|Защита прав потребителей|Protecția consumatorului
Abogado|Lawyer|Avocat|Anwalt|Avvocato|Advogado|Юрист|Avocat
Vía legal|Legal action|Voie légale|Rechtsweg|Via legale|Via legal|Судебный путь|Cale legală
Reseña|Review|Avis|Bewertung|Recensione|Avaliação|Отзыв|Recenzie
Recomendar|To recommend|Recommander|empfehlen|Raccomandare|Recomendar|Рекомендовать|A recomanda
Fidelizar|To retain customers|Fidéliser|binden|Fidelizzare|Fidelizar|Удерживать клиентов|A fideliza
`);

  /* 40 · Economía y trabajo (59 palabras) */
  more(40, `
Macroeconomía|Macroeconomics|Macroéconomie|Makroökonomie|Macroeconomia|Macroeconomia|Макроэкономика|Macroeconomie
Microeconomía|Microeconomics|Microéconomie|Mikroökonomie|Microeconomia|Microeconomia|Микроэкономика|Microeconomie
Indicador económico|Economic indicator|Indicateur économique|Wirtschaftsindikator|Indicatore economico|Indicador económico|Экономический показатель|Indicator economic
Inflación|Inflation|Inflation|Inflation|Inflazione|Inflação|Инфляция|Inflație
Deflación|Deflation|Déflation|Deflation|Deflazione|Deflação|Дефляция|Deflație
Estancamiento|Stagnation|Stagnation|Stagnation|Stagnazione|Estagnação|Стагнация|Stagnare
Recuperación económica|Economic recovery|Reprise économique|Konjunkturerholung|Ripresa economica|Recuperação económica|Экономическое восстановление|Redresare economică
Ciclo económico|Economic cycle|Cycle économique|Konjunkturzyklus|Ciclo economico|Ciclo económico|Экономический цикл|Ciclu economic
Burbuja especulativa|Speculative bubble|Bulle spéculative|Spekulationsblase|Bolla speculativa|Bolha especulativa|Спекулятивный пузырь|Bulă speculativă
Rescate financiero|Bailout|Plan de sauvetage|Rettungspaket|Salvataggio finanziario|Resgate financeiro|Финансовая помощь|Salvare financiară
Quiebra|Bankruptcy|Faillite|Insolvenz|Fallimento|Falência|Банкротство|Faliment
Superávit|Surplus|Excédent|Überschuss|Avanzo|Excedente|Профицит|Excedent
Balanza comercial|Trade balance|Balance commerciale|Handelsbilanz|Bilancia commerciale|Balança comercial|Торговый баланс|Balanță comercială
Arancel|Tariff|Droit de douane|Zoll|Dazio|Tarifa aduaneira|Пошлина|Taxă vamală
Libre comercio|Free trade|Libre-échange|Freihandel|Libero scambio|Comércio livre|Свободная торговля|Liber schimb
Proteccionismo|Protectionism|Protectionnisme|Protektionismus|Protezionismo|Protecionismo|Протекционизм|Protecționism
Sanciones económicas|Economic sanctions|Sanctions économiques|Wirtschaftssanktionen|Sanzioni economiche|Sanções económicas|Экономические санкции|Sancțiuni economice
Moneda|Currency|Monnaie|Währung|Valuta|Moeda|Валюта|Monedă
Tipo de cambio|Exchange rate|Taux de change|Wechselkurs|Tasso di cambio|Taxa de câmbio|Обменный курс|Curs de schimb
Devaluación|Devaluation|Dévaluation|Abwertung|Svalutazione|Desvalorização|Девальвация|Devalorizare
Reservas|Reserves|Réserves|Reserven|Riserve|Reservas|Резервы|Rezerve
Carga fiscal|Tax burden|Charge fiscale|Steuerlast|Carico fiscale|Carga fiscal|Налоговое бремя|Povară fiscală
Evasión fiscal|Tax evasion|Évasion fiscale|Steuerhinterziehung|Evasione fiscale|Evasão fiscal|Уклонение от налогов|Evaziune fiscală
Economía sumergida|Informal economy|Économie souterraine|Schattenwirtschaft|Economia sommersa|Economia paralela|Теневая экономика|Economie subterană
Sector servicios|Service sector|Secteur des services|Dienstleistungssektor|Settore dei servizi|Sector dos serviços|Сфера услуг|Sectorul serviciilor
Industria|Industry|Industrie|Industrie|Industria|Indústria|Промышленность|Industrie
Agricultura|Agriculture|Agriculture|Landwirtschaft|Agricoltura|Agricultura|Сельское хозяйство|Agricultură
Manufactura|Manufacturing|Fabrication|Fertigung|Manifattura|Fabrico|Производство|Producție
Mano de obra|Workforce|Main-d'œuvre|Arbeitskräfte|Manodopera|Mão de obra|Рабочая сила|Forță de muncă
Subcontratación|Outsourcing|Sous-traitance|Auslagerung|Esternalizzazione|Subcontratação|Аутсорсинг|Externalizare
Deslocalización|Offshoring|Délocalisation|Verlagerung ins Ausland|Delocalizzazione|Deslocalização|Перенос производства за границу|Delocalizare
Automatización|Automation|Automatisation|Automatisierung|Automazione|Automatização|Автоматизация|Automatizare
Precariedad|Job insecurity|Précarité|prekäre Beschäftigung|Precarietà|Precariedade|Нестабильная занятость|Precaritate
Contrato por obra|Project-based contract|Contrat de mission|Werkvertrag|Contratto a progetto|Contrato de obra|Договор подряда|Contract pe proiect
Jornada laboral|Working day|Journée de travail|Arbeitstag|Giornata lavorativa|Jornada de trabalho|Рабочий день|Zi de muncă
Semana laboral|Working week|Semaine de travail|Arbeitswoche|Settimana lavorativa|Semana de trabalho|Рабочая неделя|Săptămână de lucru
Conciliación|Work-life balance|Conciliation vie pro-vie perso|Vereinbarkeit von Beruf und Familie|Conciliazione vita-lavoro|Conciliação trabalho-família|Баланс работы и личной жизни|Echilibru între muncă și viața personală
Brecha salarial|Pay gap|Écart salarial|Lohnlücke|Divario salariale|Disparidade salarial|Разрыв в оплате труда|Diferență salarială
Negociación colectiva|Collective bargaining|Négociation collective|Tarifverhandlung|Contrattazione collettiva|Negociação coletiva|Коллективные переговоры|Negociere colectivă
Sindicato|Trade union|Syndicat|Gewerkschaft|Sindacato|Sindicato|Профсоюз|Sindicat
Prestación por desempleo|Unemployment benefit|Allocation chômage|Arbeitslosengeld|Indennità di disoccupazione|Subsídio de desemprego|Пособие по безработице|Ajutor de șomaj
Pensión|Pension|Retraite|Rente|Pensione|Pensão|Пенсия|Pensie
Jubilación anticipada|Early retirement|Retraite anticipée|Vorruhestand|Pensionamento anticipato|Reforma antecipada|Досрочный выход на пенсию|Pensionare anticipată
Envejecimiento|Ageing|Vieillissement|Alterung|Invecchiamento|Envelhecimento|Старение населения|Îmbătrânire
Natalidad|Birth rate|Natalité|Geburtenrate|Natalità|Natalidade|Рождаемость|Natalitate
Capital humano|Human capital|Capital humain|Humankapital|Capitale umano|Capital humano|Человеческий капитал|Capital uman
Emprendimiento|Entrepreneurship|Entrepreneuriat|Unternehmertum|Imprenditorialità|Empreendedorismo|Предпринимательство|Antreprenoriat
Empresa emergente|Start-up|Start-up|Start-up|Start-up|Start-up|Стартап|Start-up
Capital riesgo|Venture capital|Capital-risque|Risikokapital|Venture capital|Capital de risco|Венчурный капитал|Capital de risc
Subvención|Grant|Aide financière|Fördermittel|Sovvenzione|Subvenção|Грант|Grant
Desigualdad de ingresos|Income inequality|Inégalités de revenus|Einkommensungleichheit|Disuguaglianza di reddito|Desigualdade de rendimentos|Неравенство доходов|Inegalitate a veniturilor
Clase media|Middle class|Classe moyenne|Mittelschicht|Ceto medio|Classe média|Средний класс|Clasa de mijloc
Umbral de pobreza|Poverty line|Seuil de pauvreté|Armutsgrenze|Soglia di povertà|Limiar da pobreza|Черта бедности|Prag de sărăcie
Consumo|Consumption|Consommation|Konsum|Consumo|Consumo|Потребление|Consum
Consumidor|Consumer|Consommateur|Verbraucher|Consumatore|Consumidor|Потребитель|Consumator
Oferta y demanda|Supply and demand|Offre et demande|Angebot und Nachfrage|Domanda e offerta|Oferta e procura|Спрос и предложение|Cerere și ofertă
Ganancia|Profit|Bénéfice|Gewinn|Guadagno|Lucro|Прибыль|Profit
Pérdida|Loss|Perte|Verlust|Perdita|Prejuízo|Убыток|Pierdere
Rentable|Profitable|Rentable|rentabel|Redditizio|Rentável|Рентабельный|Rentabil
`);

  /* 41 · Política y sociedad (58 palabras) */
  more(41, `
Estado|State|État|Staat|Stato|Estado|Государство|Stat
Nación|Nation|Nation|Nation|Nazione|Nação|Нация|Națiune
Poder ejecutivo|Executive branch|Pouvoir exécutif|Exekutive|Potere esecutivo|Poder executivo|Исполнительная власть|Putere executivă
Poder legislativo|Legislative branch|Pouvoir législatif|Legislative|Potere legislativo|Poder legislativo|Законодательная власть|Putere legislativă
Poder judicial|Judiciary|Pouvoir judiciaire|Judikative|Potere giudiziario|Poder judicial|Судебная власть|Putere judecătorească
División de poderes|Separation of powers|Séparation des pouvoirs|Gewaltenteilung|Separazione dei poteri|Separação de poderes|Разделение властей|Separarea puterilor
Primer ministro|Prime minister|Premier ministre|Premierminister|Primo ministro|Primeiro-ministro|Премьер-министр|Prim-ministru
Jefe de Estado|Head of state|Chef de l'État|Staatsoberhaupt|Capo di Stato|Chefe de Estado|Глава государства|Șef de stat
Gobernador|Governor|Gouverneur|Gouverneur|Governatore|Governador|Губернатор|Guvernator
Concejal|Councillor|Conseiller municipal|Stadtrat|Consigliere comunale|Vereador|Член совета|Consilier local
Ayuntamiento|Town council|Mairie|Stadtverwaltung|Comune|Câmara municipal|Мэрия|Primărie
Político|Politician|Homme politique|Politiker|Politico|Político|Политик|Politician
Candidato|Candidate|Candidat|Kandidat|Candidato|Candidato|Кандидат|Candidat
Programa electoral|Election manifesto|Programme électoral|Wahlprogramm|Programma elettorale|Programa eleitoral|Предвыборная программа|Program electoral
Mitin|Rally|Meeting|Kundgebung|Comizio|Comício|Предвыборный митинг|Miting
Debate electoral|Election debate|Débat électoral|Wahldebatte|Dibattito elettorale|Debate eleitoral|Предвыборные дебаты|Dezbatere electorală
Urna|Ballot box|Urne|Wahlurne|Urna|Urna|Урна для голосования|Urnă
Papeleta|Ballot paper|Bulletin de vote|Stimmzettel|Scheda elettorale|Boletim de voto|Бюллетень|Buletin de vot
Voto en blanco|Blank vote|Vote blanc|ungültige Stimme|Scheda bianca|Voto em branco|Недействительный бюллетень|Vot alb
Voto por correo|Postal vote|Vote par correspondance|Briefwahl|Voto per corrispondenza|Voto por correspondência|Голосование по почте|Vot prin corespondență
Participación|Turnout|Participation|Wahlbeteiligung|Affluenza|Participação|Явка|Prezență la vot
Resultados|Results|Résultats|Ergebnisse|Risultati|Resultados|Результаты|Rezultate
Mayoría absoluta|Absolute majority|Majorité absolue|absolute Mehrheit|Maggioranza assoluta|Maioria absoluta|Абсолютное большинство|Majoritate absolută
Moción de censura|Vote of no confidence|Motion de censure|Misstrauensvotum|Mozione di sfiducia|Moção de censura|Вотум недоверия|Moțiune de cenzură
Dimisión|Resignation|Démission|Rücktritt|Dimissioni|Demissão|Отставка|Demisie
Investidura|Swearing-in|Investiture|Amtseinführung|Insediamento|Tomada de posse|Инаугурация|Învestitură
Reforma constitucional|Constitutional reform|Réforme constitutionnelle|Verfassungsreform|Riforma costituzionale|Reforma constitucional|Конституционная реформа|Reformă constituțională
Derechos fundamentales|Fundamental rights|Droits fondamentaux|Grundrechte|Diritti fondamentali|Direitos fundamentais|Основные права|Drepturi fundamentale
Libertad de expresión|Freedom of expression|Liberté d'expression|Meinungsfreiheit|Libertà di espressione|Liberdade de expressão|Свобода слова|Libertate de exprimare
Estado de derecho|Rule of law|État de droit|Rechtsstaat|Stato di diritto|Estado de direito|Правовое государство|Stat de drept
Separatismo|Separatism|Séparatisme|Separatismus|Separatismo|Separatismo|Сепаратизм|Separatism
Nacionalismo|Nationalism|Nationalisme|Nationalismus|Nazionalismo|Nacionalismo|Национализм|Naționalism
Populismo|Populism|Populisme|Populismus|Populismo|Populismo|Популизм|Populism
Izquierda|Left|Gauche|Linke|Sinistra|Esquerda|Левые|Stânga
Derecha|Right|Droite|Rechte|Destra|Direita|Правые|Dreapta
Centro|Centre|Centre|Mitte|Centro|Centro|Центр|Centru
Progresista|Progressive|Progressiste|fortschrittlich|Progressista|Progressista|Прогрессивный|Progresist
Conservador|Conservative|Conservateur|konservativ|Conservatore|Conservador|Консервативный|Conservator
Liberal|Liberal|Libéral|liberal|Liberale|Liberal|Либеральный|Liberal
Socialista|Socialist|Socialiste|sozialistisch|Socialista|Socialista|Социалистический|Socialist
Polarización|Polarisation|Polarisation|Polarisierung|Polarizzazione|Polarização|Поляризация|Polarizare
Cohesión social|Social cohesion|Cohésion sociale|sozialer Zusammenhalt|Coesione sociale|Coesão social|Социальная сплочённость|Coeziune socială
Sociedad civil|Civil society|Société civile|Zivilgesellschaft|Società civile|Sociedade civil|Гражданское общество|Societate civilă
Movimiento social|Social movement|Mouvement social|soziale Bewegung|Movimento sociale|Movimento social|Социальное движение|Mișcare socială
Activista|Activist|Militant|Aktivist|Attivista|Ativista|Активист|Activist
Huelga general|General strike|Grève générale|Generalstreik|Sciopero generale|Greve geral|Всеобщая забастовка|Grevă generală
Servicios públicos|Public services|Services publics|öffentliche Dienste|Servizi pubblici|Serviços públicos|Общественные услуги|Servicii publice
Estado del bienestar|Welfare state|État-providence|Sozialstaat|Stato sociale|Estado social|Государство всеобщего благосостояния|Stat al bunăstării
Impuestos|Taxes|Impôts|Steuern|Tasse|Impostos|Налоги|Taxe
Presupuestos|Budget|Budget|Haushalt|Bilancio|Orçamento|Бюджет|Buget
Descentralización|Decentralisation|Décentralisation|Dezentralisierung|Decentramento|Descentralização|Децентрализация|Descentralizare
Integración europea|European integration|Intégration européenne|europäische Integration|Integrazione europea|Integração europeia|Европейская интеграция|Integrare europeană
Política exterior|Foreign policy|Politique étrangère|Außenpolitik|Politica estera|Política externa|Внешняя политика|Politică externă
Cumbre|Summit|Sommet|Gipfel|Vertice|Cimeira|Саммит|Summit
Negociaciones|Negotiations|Négociations|Verhandlungen|Negoziati|Negociações|Переговоры|Negocieri
Tratado internacional|International treaty|Traité international|internationales Abkommen|Trattato internazionale|Tratado internacional|Международный договор|Tratat internațional
Intervención|Intervention|Intervention|Eingreifen|Intervento|Intervenção|Вмешательство|Intervenție
Ayuda humanitaria|Humanitarian aid|Aide humanitaire|humanitäre Hilfe|Aiuti umanitari|Ajuda humanitária|Гуманитарная помощь|Ajutor umanitar
`);

  /* 42 · Ciencia y ética (57 palabras) */
  more(42, `
Investigación científica|Scientific research|Recherche scientifique|wissenschaftliche Forschung|Ricerca scientifica|Investigação científica|Научное исследование|Cercetare științifică
Comité de ética|Ethics committee|Comité d'éthique|Ethikkommission|Comitato etico|Comissão de ética|Комитет по этике|Comisie de etică
Protocolo|Protocol|Protocole|Protokoll|Protocollo|Protocolo|Протокол|Protocol
Voluntario|Volunteer|Volontaire|Proband|Volontario|Voluntário|Доброволец|Voluntar
Grupo de control|Control group|Groupe témoin|Kontrollgruppe|Gruppo di controllo|Grupo de controlo|Контрольная группа|Grup de control
Placebo|Placebo|Placebo|Placebo|Placebo|Placebo|Плацебо|Placebo
Doble ciego|Double-blind|Double aveugle|doppelblind|Doppio cieco|Duplo-cego|Двойной слепой метод|Dublu-orb
Efecto secundario|Side effect|Effet secondaire|Nebenwirkung|Effetto collaterale|Efeito secundário|Побочный эффект|Efect secundar
Revisión por pares|Peer review|Évaluation par les pairs|Begutachtung durch Fachkollegen|Revisione tra pari|Revisão por pares|Рецензирование|Evaluare inter pares
Revista científica|Scientific journal|Revue scientifique|Fachzeitschrift|Rivista scientifica|Revista científica|Научный журнал|Revistă științifică
Reproducibilidad|Reproducibility|Reproductibilité|Reproduzierbarkeit|Riproducibilità|Reprodutibilidade|Воспроизводимость|Reproductibilitate
Fraude científico|Scientific fraud|Fraude scientifique|Wissenschaftsbetrug|Frode scientifica|Fraude científica|Научное мошенничество|Fraudă științifică
Plagio|Plagiarism|Plagiat|Plagiat|Plagio|Plágio|Плагиат|Plagiat
Financiación|Funding|Financement|Finanzierung|Finanziamento|Financiamento|Финансирование|Finanțare
Patente|Patent|Brevet|Patent|Brevetto|Patente|Патент|Brevet
Propiedad intelectual|Intellectual property|Propriété intellectuelle|geistiges Eigentum|Proprietà intellettuale|Propriedade intelectual|Интеллектуальная собственность|Proprietate intelectuală
Biotecnología|Biotechnology|Biotechnologie|Biotechnologie|Biotecnologia|Biotecnologia|Биотехнологии|Biotehnologie
Organismo modificado|Modified organism|Organisme modifié|veränderter Organismus|Organismo modificato|Organismo modificado|Модифицированный организм|Organism modificat
Terapia génica|Gene therapy|Thérapie génique|Gentherapie|Terapia genica|Terapia génica|Генная терапия|Terapie genică
Medicina personalizada|Personalised medicine|Médecine personnalisée|personalisierte Medizin|Medicina personalizzata|Medicina personalizada|Персонализированная медицина|Medicină personalizată
Datos genéticos|Genetic data|Données génétiques|genetische Daten|Dati genetici|Dados genéticos|Генетические данные|Date genetice
Privacidad|Privacy|Vie privée|Privatsphäre|Privacy|Privacidade|Частная жизнь|Viață privată
Discriminación genética|Genetic discrimination|Discrimination génétique|genetische Diskriminierung|Discriminazione genetica|Discriminação genética|Генетическая дискриминация|Discriminare genetică
Donación de órganos|Organ donation|Don d'organes|Organspende|Donazione di organi|Doação de órgãos|Донорство органов|Donare de organe
Lista de espera|Waiting list|Liste d'attente|Warteliste|Lista d'attesa|Lista de espera|Лист ожидания|Listă de așteptare
Cuidados paliativos|Palliative care|Soins palliatifs|Palliativversorgung|Cure palliative|Cuidados paliativos|Паллиативная помощь|Îngrijiri paliative
Testamento vital|Living will|Directives anticipées|Patientenverfügung|Testamento biologico|Testamento vital|Предварительное медицинское распоряжение|Testament de viață
Autonomía del paciente|Patient autonomy|Autonomie du patient|Patientenautonomie|Autonomia del paziente|Autonomia do paciente|Автономия пациента|Autonomia pacientului
Secreto médico|Medical confidentiality|Secret médical|ärztliche Schweigepflicht|Segreto medico|Sigilo médico|Врачебная тайна|Secret medical
Negligencia|Negligence|Négligence|Fahrlässigkeit|Negligenza|Negligência|Халатность|Neglijență
Mala praxis|Malpractice|Faute professionnelle|Behandlungsfehler|Negligenza professionale|Erro médico|Врачебная ошибка|Malpraxis
Inteligencia artificial|Artificial intelligence|Intelligence artificielle|künstliche Intelligenz|Intelligenza artificiale|Inteligência artificial|Искусственный интеллект|Inteligență artificială
Algoritmo|Algorithm|Algorithme|Algorithmus|Algoritmo|Algoritmo|Алгоритм|Algoritm
Transparencia algorítmica|Algorithmic transparency|Transparence algorithmique|algorithmische Transparenz|Trasparenza algoritmica|Transparência algorítmica|Прозрачность алгоритмов|Transparență algoritmică
Reconocimiento facial|Facial recognition|Reconnaissance faciale|Gesichtserkennung|Riconoscimento facciale|Reconhecimento facial|Распознавание лиц|Recunoaștere facială
Automatización|Automation|Automatisation|Automatisierung|Automazione|Automatização|Автоматизация|Automatizare
Responsabilidad social|Social responsibility|Responsabilité sociale|soziale Verantwortung|Responsabilità sociale|Responsabilidade social|Социальная ответственность|Responsabilitate socială
Cambio climático|Climate change|Changement climatique|Klimawandel|Cambiamento climatico|Alterações climáticas|Изменение климата|Schimbări climatice
Geoingeniería|Geoengineering|Géo-ingénierie|Geoengineering|Geoingegneria|Geoengenharia|Геоинженерия|Geoinginerie
Energía nuclear|Nuclear energy|Énergie nucléaire|Kernenergie|Energia nucleare|Energia nuclear|Ядерная энергия|Energie nucleară
Residuos radiactivos|Radioactive waste|Déchets radioactifs|radioaktiver Abfall|Rifiuti radioattivi|Resíduos radioativos|Радиоактивные отходы|Deșeuri radioactive
Armas|Weapons|Armes|Waffen|Armi|Armas|Оружие|Arme
Ciberseguridad|Cybersecurity|Cybersécurité|Cybersicherheit|Cybersicurezza|Cibersegurança|Кибербезопасность|Securitate cibernetică
Uso dual|Dual use|Double usage|Dual Use|Uso duale|Uso duplo|Двойное назначение|Dublă utilizare
Principio de precaución|Precautionary principle|Principe de précaution|Vorsorgeprinzip|Principio di precauzione|Princípio da precaução|Принцип предосторожности|Principiul precauției
Debate público|Public debate|Débat public|öffentliche Debatte|Dibattito pubblico|Debate público|Общественная дискуссия|Dezbatere publică
Divulgación científica|Science communication|Vulgarisation scientifique|Wissenschaftskommunikation|Divulgazione scientifica|Divulgação científica|Научно-популярная деятельность|Popularizare științifică
Pseudociencia|Pseudoscience|Pseudoscience|Pseudowissenschaft|Pseudoscienza|Pseudociência|Псевдонаука|Pseudoștiință
Sesgo|Bias|Biais|Verzerrung|Bias|Viés|Предвзятость|Părtinire
Escepticismo|Scepticism|Scepticisme|Skeptizismus|Scetticismo|Cepticismo|Скептицизм|Scepticism
Rigor|Rigour|Rigueur|Genauigkeit|Rigore|Rigor|Строгость|Rigoare
Verificación|Verification|Vérification|Überprüfung|Verifica|Verificação|Проверка|Verificare
Consenso científico|Scientific consensus|Consensus scientifique|wissenschaftlicher Konsens|Consenso scientifico|Consenso científico|Научный консенсус|Consens științific
Descubrimiento|Discovery|Découverte|Entdeckung|Scoperta|Descoberta|Открытие|Descoperire
Avance|Breakthrough|Avancée|Durchbruch|Svolta|Avanço|Прорыв|Salt calitativ
Retroceso|Setback|Recul|Rückschritt|Passo indietro|Retrocesso|Откат|Regres
Generaciones futuras|Future generations|Générations futures|zukünftige Generationen|Generazioni future|Gerações futuras|Будущие поколения|Generațiile viitoare
`);

  /* 43 · Arte y literatura (64 palabras) */
  more(43, `
Literatura|Literature|Littérature|Literatur|Letteratura|Literatura|Литература|Literatură
Autor|Author|Auteur|Autor|Autore|Autor|Автор|Autor
Lector|Reader|Lecteur|Leser|Lettore|Leitor|Читатель|Cititor
Editorial|Publisher|Maison d'édition|Verlag|Casa editrice|Editora|Издательство|Editură
Editor|Editor|Éditeur|Lektor|Editore|Editor|Редактор|Editor
Publicar|To publish|Publier|veröffentlichen|Pubblicare|Publicar|Публиковать|A publica
Libro|Book|Livre|Buch|Libro|Livro|Книга|Carte
Capítulo|Chapter|Chapitre|Kapitel|Capitolo|Capítulo|Глава|Capitol
Desenlace|Ending|Dénouement|Ausgang|Epilogo|Desfecho|Развязка|Deznodământ
Protagonista|Protagonist|Protagoniste|Hauptfigur|Protagonista|Protagonista|Главный герой|Protagonist
Antagonista|Antagonist|Antagoniste|Gegenspieler|Antagonista|Antagonista|Антагонист|Antagonist
Personaje secundario|Supporting character|Personnage secondaire|Nebenfigur|Personaggio secondario|Personagem secundária|Второстепенный персонаж|Personaj secundar
Ambientación|Setting|Cadre|Schauplatz|Ambientazione|Ambientação|Место действия|Decor
Tono|Tone|Ton|Ton|Tono|Tom|Тон|Ton
Punto de vista|Point of view|Point de vue|Erzählperspektive|Punto di vista|Ponto de vista|Точка зрения|Punct de vedere
Realismo|Realism|Réalisme|Realismus|Realismo|Realismo|Реализм|Realism
Romanticismo|Romanticism|Romantisme|Romantik|Romanticismo|Romantismo|Романтизм|Romantism
Modernismo|Modernism|Modernisme|Moderne|Modernismo|Modernismo|Модернизм|Modernism
Surrealismo|Surrealism|Surréalisme|Surrealismus|Surrealismo|Surrealismo|Сюрреализм|Suprarealism
Impresionismo|Impressionism|Impressionnisme|Impressionismus|Impressionismo|Impressionismo|Импрессионизм|Impresionism
Cubismo|Cubism|Cubisme|Kubismus|Cubismo|Cubismo|Кубизм|Cubism
Barroco|Baroque|Baroque|Barock|Barocco|Barroco|Барокко|Baroc
Renacimiento|Renaissance|Renaissance|Renaissance|Rinascimento|Renascimento|Возрождение|Renaștere
Clasicismo|Classicism|Classicisme|Klassizismus|Classicismo|Classicismo|Классицизм|Clasicism
Contemporáneo|Contemporary|Contemporain|zeitgenössisch|Contemporaneo|Contemporâneo|Современный|Contemporan
Abstracto|Abstract|Abstrait|abstrakt|Astratto|Abstrato|Абстрактный|Abstract
Figurativo|Figurative|Figuratif|gegenständlich|Figurativo|Figurativo|Фигуративный|Figurativ
Óleo|Oil painting|Huile|Ölgemälde|Olio su tela|Óleo|Масляная живопись|Pictură în ulei
Acuarela|Watercolour|Aquarelle|Aquarell|Acquerello|Aguarela|Акварель|Acuarelă
Dibujo|Drawing|Dessin|Zeichnung|Disegno|Desenho|Рисунок|Desen
Boceto|Sketch|Esquisse|Skizze|Bozzetto|Esboço|Набросок|Schiță
Fotografía|Photography|Photographie|Fotografie|Fotografia|Fotografia|Фотография|Fotografie
Instalación|Installation|Installation|Installation|Installazione|Instalação|Инсталляция|Instalație
Colección|Collection|Collection|Sammlung|Collezione|Coleção|Коллекция|Colecție
Comisario|Curator|Commissaire d'exposition|Kurator|Curatore|Curador|Куратор|Curator
Subasta|Auction|Vente aux enchères|Auktion|Asta|Leilão|Аукцион|Licitație
Mecenas|Patron|Mécène|Mäzen|Mecenate|Mecenas|Меценат|Mecena
Falsificación|Forgery|Contrefaçon|Fälschung|Falsificazione|Falsificação|Подделка|Falsificare
Restauración|Restoration|Restauration|Restaurierung|Restauro|Restauro|Реставрация|Restaurare
Música clásica|Classical music|Musique classique|klassische Musik|Musica classica|Música clássica|Классическая музыка|Muzică clasică
Compositor|Composer|Compositeur|Komponist|Compositore|Compositor|Композитор|Compozitor
Sinfonía|Symphony|Symphonie|Sinfonie|Sinfonia|Sinfonia|Симфония|Simfonie
Ballet|Ballet|Ballet|Ballett|Balletto|Ballet|Балет|Balet
Coreografía|Choreography|Chorégraphie|Choreografie|Coreografia|Coreografia|Хореография|Coregrafie
Concierto|Concert|Concert|Konzert|Concerto|Concerto|Концерт|Concert
Escenario|Stage|Scène|Bühne|Palcoscenico|Palco|Сцена|Scenă
Teatro|Theatre|Théâtre|Theater|Teatro|Teatro|Театр|Teatru
Actor|Actor|Acteur|Schauspieler|Attore|Ator|Актёр|Actor
Dirección|Direction|Mise en scène|Regie|Regia|Realização|Режиссура|Regie
Montaje|Editing|Montage|Schnitt|Montaggio|Montagem|Монтаж|Montaj
Fotografía de cine|Cinematography|Photographie de film|Kameraarbeit|Fotografia cinematografica|Direção de fotografia|Операторская работа|Imagine cinematografică
Taquilla|Box office|Box-office|Kinokasse|Botteghino|Bilheteira|Кассовые сборы|Încasări
Estreno|Premiere|Première|Premiere|Anteprima|Estreia|Премьера|Premieră
Festival de cine|Film festival|Festival de cinéma|Filmfestival|Festival del cinema|Festival de cinema|Кинофестиваль|Festival de film
Adaptación|Adaptation|Adaptation|Adaption|Adattamento|Adaptação|Экранизация|Adaptare
Traducción|Translation|Traduction|Übersetzung|Traduzione|Tradução|Перевод|Traducere
Interpretación|Interpretation|Interprétation|Deutung|Interpretazione|Interpretação|Трактовка|Interpretare
Influencia|Influence|Influence|Einfluss|Influenza|Influência|Влияние|Influență
Tradición|Tradition|Tradition|Tradition|Tradizione|Tradição|Традиция|Tradiție
Innovación|Innovation|Innovation|Innovation|Innovazione|Inovação|Новаторство|Inovație
Canon|Canon|Canon|Kanon|Canone|Cânone|Канон|Canon
Clásico|Classic|Classique|Klassiker|Classico|Clássico|Классика|Clasic
`);

  /* 44 · Historia y memoria (61 palabras) */
  more(44, `
Prehistoria|Prehistory|Préhistoire|Vorgeschichte|Preistoria|Pré-história|Доисторическая эпоха|Preistorie
Antigüedad|Antiquity|Antiquité|Antike|Antichità|Antiguidade|Античность|Antichitate
Edad Moderna|Early modern period|Époque moderne|Frühe Neuzeit|Età moderna|Idade Moderna|Новое время|Epoca modernă
Edad Contemporánea|Contemporary era|Époque contemporaine|Zeitgeschichte|Età contemporanea|Idade Contemporânea|Новейшее время|Epoca contemporană
Siglo XX|Twentieth century|Vingtième siècle|zwanzigstes Jahrhundert|Ventesimo secolo|Século XX|Двадцатый век|Secolul al XX-lea
Década|Decade|Décennie|Jahrzehnt|Decennio|Década|Десятилетие|Deceniu
Milenio|Millennium|Millénaire|Jahrtausend|Millennio|Milénio|Тысячелетие|Mileniu
Cronología|Chronology|Chronologie|Chronologie|Cronologia|Cronologia|Хронология|Cronologie
Fecha histórica|Historic date|Date historique|historisches Datum|Data storica|Data histórica|Историческая дата|Dată istorică
Acontecimiento|Event|Événement|Ereignis|Evento|Acontecimento|Событие|Eveniment
Hito|Milestone|Jalon|Meilenstein|Pietra miliare|Marco|Веха|Reper
Punto de inflexión|Turning point|Tournant|Wendepunkt|Svolta|Ponto de viragem|Поворотный момент|Punct de cotitură
Causa|Cause|Cause|Ursache|Causa|Causa|Причина|Cauză
Consecuencia|Consequence|Conséquence|Folge|Conseguenza|Consequência|Последствие|Consecință
Fuente histórica|Historical source|Source historique|historische Quelle|Fonte storica|Fonte histórica|Исторический источник|Sursă istorică
Documento|Document|Document|Dokument|Documento|Documento|Документ|Document
Crónica|Chronicle|Chronique|Chronik|Cronaca|Crónica|Хроника|Cronică
Manuscrito|Manuscript|Manuscrit|Handschrift|Manoscritto|Manuscrito|Рукопись|Manuscris
Arqueología|Archaeology|Archéologie|Archäologie|Archeologia|Arqueologia|Археология|Arheologie
Excavación|Excavation|Fouilles|Ausgrabung|Scavo|Escavação|Раскопки|Săpături
Vestigio|Relic|Vestige|Überrest|Vestigio|Vestígio|Остаток древности|Vestigiu
Ruinas|Ruins|Ruines|Ruinen|Rovine|Ruínas|Руины|Ruine
Patrimonio|Heritage|Patrimoine|Kulturerbe|Patrimonio|Património|Культурное достояние|Patrimoniu
Monumento|Monument|Monument|Denkmal|Monumento|Monumento|Памятник|Monument
Museo|Museum|Musée|Museum|Museo|Museu|Музей|Muzeu
Dinastía|Dynasty|Dynastie|Dynastie|Dinastia|Dinastia|Династия|Dinastie
Emperador|Emperor|Empereur|Kaiser|Imperatore|Imperador|Император|Împărat
Faraón|Pharaoh|Pharaon|Pharao|Faraone|Faraó|Фараон|Faraon
Caballero|Knight|Chevalier|Ritter|Cavaliere|Cavaleiro|Рыцарь|Cavaler
Noble|Nobleman|Noble|Adliger|Nobile|Nobre|Дворянин|Nobil
Campesino|Peasant|Paysan|Bauer|Contadino|Camponês|Крестьянин|Țăran
Siervo|Serf|Serf|Leibeigener|Servo|Servo|Крепостной|Șerb
Burguesía|Bourgeoisie|Bourgeoisie|Bürgertum|Borghesia|Burguesia|Буржуазия|Burghezie
Clase obrera|Working class|Classe ouvrière|Arbeiterklasse|Classe operaia|Classe operária|Рабочий класс|Clasa muncitoare
Revolución industrial|Industrial Revolution|Révolution industrielle|Industrielle Revolution|Rivoluzione industriale|Revolução Industrial|Промышленная революция|Revoluția industrială
Descubrimiento de América|Discovery of America|Découverte de l'Amérique|Entdeckung Amerikas|Scoperta dell'America|Descoberta da América|Открытие Америки|Descoperirea Americii
Colonización|Colonisation|Colonisation|Kolonisierung|Colonizzazione|Colonização|Колонизация|Colonizare
Abolición|Abolition|Abolition|Abschaffung|Abolizione|Abolição|Отмена|Abolire
Guerra civil|Civil war|Guerre civile|Bürgerkrieg|Guerra civile|Guerra civil|Гражданская война|Război civil
Guerra mundial|World war|Guerre mondiale|Weltkrieg|Guerra mondiale|Guerra mundial|Мировая война|Război mondial
Guerra fría|Cold War|Guerre froide|Kalter Krieg|Guerra fredda|Guerra Fria|Холодная война|Războiul rece
Posguerra|Post-war period|Après-guerre|Nachkriegszeit|Dopoguerra|Pós-guerra|Послевоенное время|Postbelic
Armisticio|Armistice|Armistice|Waffenstillstand|Armistizio|Armistício|Перемирие|Armistițiu
Rendición|Surrender|Reddition|Kapitulation|Resa|Rendição|Капитуляция|Capitulare
Resistencia|Resistance|Résistance|Widerstand|Resistenza|Resistência|Сопротивление|Rezistență
Genocidio|Genocide|Génocide|Völkermord|Genocidio|Genocídio|Геноцид|Genocid
Holocausto|Holocaust|Holocauste|Holocaust|Olocausto|Holocausto|Холокост|Holocaust
Desaparecido|Missing person|Disparu|Verschwundener|Scomparso|Desaparecido|Пропавший без вести|Dispărut
Superviviente|Survivor|Survivant|Überlebender|Sopravvissuto|Sobrevivente|Выживший|Supraviețuitor
Refugiado|Refugee|Réfugié|Flüchtling|Rifugiato|Refugiado|Беженец|Refugiat
Emigración|Emigration|Émigration|Auswanderung|Emigrazione|Emigração|Эмиграция|Emigrare
Inmigración|Immigration|Immigration|Einwanderung|Immigrazione|Imigração|Иммиграция|Imigrare
Transición|Transition|Transition|Übergang|Transizione|Transição|Переход|Tranziție
Memoria colectiva|Collective memory|Mémoire collective|kollektives Gedächtnis|Memoria collettiva|Memória coletiva|Коллективная память|Memorie colectivă
Homenaje|Tribute|Hommage|Hommage|Omaggio|Homenagem|Дань памяти|Omagiu
Conmemoración|Commemoration|Commémoration|Gedenkfeier|Commemorazione|Comemoração|Памятное мероприятие|Comemorare
Aniversario|Anniversary|Anniversaire|Jahrestag|Anniversario|Aniversário|Годовщина|Aniversare
Olvido|Oblivion|Oubli|Vergessen|Oblio|Esquecimento|Забвение|Uitare
Verdad histórica|Historical truth|Vérité historique|historische Wahrheit|Verità storica|Verdade histórica|Историческая правда|Adevăr istoric
Versión oficial|Official version|Version officielle|offizielle Version|Versione ufficiale|Versão oficial|Официальная версия|Versiune oficială
Manipulación|Manipulation|Manipulation|Manipulation|Manipolazione|Manipulação|Манипуляция|Manipulare
`);

  /* 45 · Lenguaje y comunicación (62 palabras) */
  more(45, `
Lingüística|Linguistics|Linguistique|Linguistik|Linguistica|Linguística|Лингвистика|Lingvistică
Idioma|Language|Langue|Sprache|Lingua|Língua|Язык|Limbă
Dialecto|Dialect|Dialecte|Dialekt|Dialetto|Dialeto|Диалект|Dialect
Variante|Variety|Variante|Varietät|Variante|Variante|Вариант языка|Variantă
Léxico|Lexicon|Lexique|Lexikon|Lessico|Léxico|Лексикон|Lexic
Palabra|Word|Mot|Wort|Parola|Palavra|Слово|Cuvânt
Frase hecha|Set phrase|Locution figée|feste Wendung|Frase fatta|Frase feita|Устойчивое выражение|Expresie fixă
Modismo|Idiom|Idiotisme|Redewendung|Modo di dire|Expressão idiomática|Идиома|Idiom
Dicho popular|Saying|Dicton|Volksweisheit|Detto popolare|Ditado popular|Народная поговорка|Zicală populară
Lenguaje figurado|Figurative language|Langage figuré|bildhafte Sprache|Linguaggio figurato|Linguagem figurada|Образная речь|Limbaj figurat
Sentido literal|Literal meaning|Sens littéral|wörtliche Bedeutung|Senso letterale|Sentido literal|Буквальный смысл|Sens literal
Doble sentido|Double meaning|Double sens|Doppeldeutigkeit|Doppio senso|Duplo sentido|Двусмысленность|Dublu sens
Connotación|Connotation|Connotation|Konnotation|Connotazione|Conotação|Коннотация|Conotație
Implícito|Implicit|Implicite|implizit|Implicito|Implícito|Подразумеваемый|Implicit
Tácito|Tacit|Tacite|stillschweigend|Tacito|Tácito|Молчаливый|Tacit
Indirecta|Hint|Allusion|Anspielung|Allusione|Indireta|Намёк|Aluzie
Subtexto|Subtext|Sous-entendu|Unterton|Sottotesto|Subtexto|Подтекст|Subtext
Tono de voz|Tone of voice|Ton de la voix|Tonfall|Tono di voce|Tom de voz|Тон голоса|Ton al vocii
Ritmo|Rhythm|Rythme|Rhythmus|Ritmo|Ritmo|Ритм|Ritm
Pausa|Pause|Pause|Pause|Pausa|Pausa|Пауза|Pauză
Volumen|Volume|Volume|Lautstärke|Volume|Volume|Громкость|Volum
Silencio|Silence|Silence|Schweigen|Silenzio|Silêncio|Молчание|Tăcere
Oyente|Listener|Auditeur|Zuhörer|Ascoltatore|Ouvinte|Слушатель|Ascultător
Hablante|Speaker|Locuteur|Sprecher|Parlante|Falante|Говорящий|Vorbitor
Principiante|Beginner|Débutant|Anfänger|Principiante|Principiante|Начинающий|Începător
Nivel avanzado|Advanced level|Niveau avancé|fortgeschrittenes Niveau|Livello avanzato|Nível avançado|Продвинутый уровень|Nivel avansat
Error común|Common mistake|Erreur courante|häufiger Fehler|Errore comune|Erro comum|Распространённая ошибка|Greșeală frecventă
Falso amigo|False friend|Faux ami|falscher Freund|Falso amico|Falso amigo|Ложный друг переводчика|Fals prieten
Traducción literal|Literal translation|Traduction littérale|wörtliche Übersetzung|Traduzione letterale|Tradução literal|Дословный перевод|Traducere literală
Interpretación simultánea|Simultaneous interpreting|Interprétation simultanée|Simultandolmetschen|Interpretazione simultanea|Interpretação simultânea|Синхронный перевод|Interpretare simultană
Subtítulos|Subtitles|Sous-titres|Untertitel|Sottotitoli|Legendas|Субтитры|Subtitrări
Doblaje|Dubbing|Doublage|Synchronisation|Doppiaggio|Dobragem|Дубляж|Dublaj
Ortografía|Spelling|Orthographe|Rechtschreibung|Ortografia|Ortografia|Орфография|Ortografie
Puntuación|Punctuation|Ponctuation|Zeichensetzung|Punteggiatura|Pontuação|Пунктуация|Punctuație
Mayúscula|Capital letter|Majuscule|Großbuchstabe|Maiuscola|Maiúscula|Заглавная буква|Literă mare
Minúscula|Lower case|Minuscule|Kleinbuchstabe|Minuscola|Minúscula|Строчная буква|Literă mică
Párrafo|Paragraph|Paragraphe|Absatz|Paragrafo|Parágrafo|Абзац|Paragraf
Texto|Text|Texte|Text|Testo|Texto|Текст|Text
Resumen|Summary|Résumé|Zusammenfassung|Riassunto|Resumo|Краткое изложение|Rezumat
Redacción|Writing|Rédaction|Verfassen|Redazione|Redação|Написание текстов|Redactare
Estilo|Style|Style|Stil|Stile|Estilo|Стиль|Stil
Registro formal|Formal register|Registre soutenu|formelle Sprache|Registro formale|Registo formal|Официальный стиль|Registru formal
Registro coloquial|Colloquial register|Registre familier|Umgangssprache|Registro colloquiale|Registo coloquial|Разговорный стиль|Registru colocvial
Lenguaje técnico|Technical language|Langage technique|Fachsprache|Linguaggio tecnico|Linguagem técnica|Специальная лексика|Limbaj tehnic
Lenguaje inclusivo|Inclusive language|Langage inclusif|inklusive Sprache|Linguaggio inclusivo|Linguagem inclusiva|Инклюзивный язык|Limbaj incluziv
Lengua minoritaria|Minority language|Langue minoritaire|Minderheitensprache|Lingua minoritaria|Língua minoritária|Язык меньшинства|Limbă minoritară
Lengua oficial|Official language|Langue officielle|Amtssprache|Lingua ufficiale|Língua oficial|Государственный язык|Limbă oficială
Lengua extinta|Extinct language|Langue éteinte|ausgestorbene Sprache|Lingua estinta|Língua extinta|Мёртвый язык|Limbă dispărută
Alfabeto|Alphabet|Alphabet|Alphabet|Alfabeto|Alfabeto|Алфавит|Alfabet
Escritura|Writing system|Écriture|Schrift|Scrittura|Escrita|Письменность|Scriere
Comunicar|To communicate|Communiquer|kommunizieren|Comunicare|Comunicar|Общаться|A comunica
Expresarse|To express yourself|S'exprimer|sich ausdrücken|Esprimersi|Exprimir-se|Выражать свои мысли|A se exprima
Matizar|To qualify|Nuancer|differenzieren|Sfumare|Matizar|Уточнять|A nuanța
Reformular|To rephrase|Reformuler|umformulieren|Riformulare|Reformular|Перефразировать|A reformula
Aclarar|To clarify|Clarifier|klarstellen|Chiarire|Esclarecer|Прояснять|A clarifica
Deducir|To infer|Déduire|ableiten|Dedurre|Deduzir|Выводить|A deduce
Entender|To understand|Comprendre|verstehen|Capire|Perceber|Понимать|A înțelege
Malinterpretar|To misinterpret|Mal interpréter|missverstehen|Fraintendere|Interpretar mal|Неверно истолковывать|A interpreta greșit
`);

  /* 46 · Derecho y justicia (68 palabras) */
  more(46, `
Derecho penal|Criminal law|Droit pénal|Strafrecht|Diritto penale|Direito penal|Уголовное право|Drept penal
Derecho civil|Civil law|Droit civil|Zivilrecht|Diritto civile|Direito civil|Гражданское право|Drept civil
Constitución|Constitution|Constitution|Verfassung|Costituzione|Constituição|Конституция|Constituție
Código penal|Criminal code|Code pénal|Strafgesetzbuch|Codice penale|Código penal|Уголовный кодекс|Cod penal
Reglamento|Regulation|Règlement|Verordnung|Regolamento|Regulamento|Регламент|Regulament
Norma|Rule|Norme|Norm|Norma|Norma|Норма|Normă
Derechos|Rights|Droits|Rechte|Diritti|Direitos|Права|Drepturi
Deber|Duty|Devoir|Pflicht|Dovere|Dever|Обязанность|Datorie
Obligación|Obligation|Obligation|Verpflichtung|Obbligo|Obrigação|Обязательство|Obligație
Responsabilidad|Liability|Responsabilité|Haftung|Responsabilità|Responsabilidade|Ответственность|Răspundere
Denuncia|Report|Plainte|Anzeige|Denuncia|Queixa-crime|Заявление в полицию|Denunț
Investigación|Investigation|Enquête|Ermittlung|Indagine|Investigação|Расследование|Anchetă
Detención|Arrest|Arrestation|Festnahme|Arresto|Detenção|Задержание|Reținere
Interrogatorio|Interrogation|Interrogatoire|Verhör|Interrogatorio|Interrogatório|Допрос|Interogatoriu
Declaración|Statement|Déclaration|Aussage|Dichiarazione|Declaração|Показания|Declarație
Coartada|Alibi|Alibi|Alibi|Alibi|Álibi|Алиби|Alibi
Motivo|Motive|Mobile|Motiv|Movente|Motivo|Мотив|Motiv
Pruebas circunstanciales|Circumstantial evidence|Preuves indirectes|Indizien|Prove indiziarie|Provas indiretas|Косвенные улики|Probe indirecte
Huellas dactilares|Fingerprints|Empreintes digitales|Fingerabdrücke|Impronte digitali|Impressões digitais|Отпечатки пальцев|Amprente digitale
Peritaje|Expert report|Expertise|Gutachten|Perizia|Perícia|Экспертиза|Expertiză
Perito|Expert witness|Expert judiciaire|Sachverständiger|Perito|Perito|Эксперт|Expert judiciar
Presunción de inocencia|Presumption of innocence|Présomption d'innocence|Unschuldsvermutung|Presunzione di innocenza|Presunção de inocência|Презумпция невиновности|Prezumția de nevinovăție
Derecho a la defensa|Right to a defence|Droit à la défense|Recht auf Verteidigung|Diritto alla difesa|Direito de defesa|Право на защиту|Dreptul la apărare
Abogado de oficio|Court-appointed lawyer|Avocat commis d'office|Pflichtverteidiger|Avvocato d'ufficio|Advogado oficioso|Государственный защитник|Avocat din oficiu
Asistencia jurídica|Legal aid|Aide juridictionnelle|Rechtsbeistand|Patrocinio legale|Apoio judiciário|Юридическая помощь|Asistență juridică
Audiencia|Hearing|Audience|Verhandlung|Udienza|Audiência|Судебное заседание|Ședință de judecată
Sala de vistas|Courtroom|Salle d'audience|Gerichtssaal|Aula di tribunale|Sala de audiências|Зал суда|Sală de judecată
Fiscalía|Public prosecutor's office|Parquet|Staatsanwaltschaft|Procura|Ministério Público|Прокуратура|Parchet
Querella|Criminal complaint|Plainte avec constitution de partie civile|Strafanzeige|Querela|Queixa|Иск по уголовному делу|Plângere penală
Demandante|Plaintiff|Demandeur|Kläger|Attore|Autor|Истец|Reclamant
Casación|Cassation|Cassation|Revision|Cassazione|Cassação|Кассация|Casație
Tribunal Supremo|Supreme Court|Cour suprême|Oberster Gerichtshof|Corte suprema|Supremo Tribunal|Верховный суд|Curtea Supremă
Jurisprudencia|Case law|Jurisprudence|Rechtsprechung|Giurisprudenza|Jurisprudência|Судебная практика|Jurisprudență
Precedente|Precedent|Précédent|Präzedenzfall|Precedente|Precedente|Прецедент|Precedent
Fallo|Judgment|Décision|Entscheidung|Pronuncia|Acórdão|Решение суда|Decizie
Pena de prisión|Prison sentence|Peine de prison|Freiheitsstrafe|Pena detentiva|Pena de prisão|Лишение свободы|Pedeapsă cu închisoarea
Cadena perpetua|Life sentence|Réclusion à perpétuité|lebenslange Haft|Ergastolo|Prisão perpétua|Пожизненное заключение|Închisoare pe viață
Pena suspendida|Suspended sentence|Peine avec sursis|Bewährungsstrafe|Pena sospesa|Pena suspensa|Условный срок|Pedeapsă cu suspendare
Fianza|Bail|Caution|Kaution|Cauzione|Fiança|Залог|Cauțiune
Prisión preventiva|Pre-trial detention|Détention provisoire|Untersuchungshaft|Custodia cautelare|Prisão preventiva|Содержание под стражей|Arest preventiv
Reincidencia|Reoffending|Récidive|Rückfall|Recidiva|Reincidência|Рецидив|Recidivă
Indulto|Pardon|Grâce|Begnadigung|Grazia|Indulto|Помилование|Grațiere
Amnistía|Amnesty|Amnistie|Amnestie|Amnistia|Amnistia|Амнистия|Amnistie
Prescripción|Statute of limitations|Prescription|Verjährung|Prescrizione|Prescrição|Срок давности|Prescripție
Herencia|Inheritance|Héritage|Erbe|Eredità|Herança|Наследство|Moștenire
Testamento|Will|Testament|Testament|Testamento|Testamento|Завещание|Testament
Divorcio|Divorce|Divorce|Scheidung|Divorzio|Divórcio|Развод|Divorț
Custodia|Custody|Garde|Sorgerecht|Affidamento|Guarda|Опека над ребёнком|Custodie
Pensión alimenticia|Maintenance|Pension alimentaire|Unterhalt|Assegno di mantenimento|Pensão de alimentos|Алименты|Pensie alimentară
Escritura|Deed|Acte notarié|Urkunde|Atto notarile|Escritura|Нотариальный акт|Act notarial
Registro civil|Civil registry|État civil|Standesamt|Stato civile|Registo civil|ЗАГС|Stare civilă
Registro de la propiedad|Land registry|Cadastre|Grundbuch|Catasto|Registo predial|Земельный кадастр|Carte funciară
Cláusula abusiva|Unfair clause|Clause abusive|missbräuchliche Klausel|Clausola vessatoria|Cláusula abusiva|Кабальное условие|Clauză abuzivă
Incumplimiento|Breach|Inexécution|Vertragsbruch|Inadempimento|Incumprimento|Нарушение договора|Neexecutare
Mediación|Mediation|Médiation|Mediation|Mediazione|Mediação|Медиация|Mediere
Arbitraje|Arbitration|Arbitrage|Schiedsverfahren|Arbitrato|Arbitragem|Арбитраж|Arbitraj
Conciliación|Conciliation|Conciliation|Schlichtung|Conciliazione|Conciliação|Примирение сторон|Conciliere
Impunidad|Impunity|Impunité|Straflosigkeit|Impunità|Impunidade|Безнаказанность|Impunitate
Legalidad|Legality|Légalité|Rechtmäßigkeit|Legalità|Legalidade|Законность|Legalitate
Ilegal|Illegal|Illégal|illegal|Illegale|Ilegal|Незаконный|Ilegal
Legítimo|Legitimate|Légitime|legitim|Legittimo|Legítimo|Законный|Legitim
Injusto|Unfair|Injuste|ungerecht|Ingiusto|Injusto|Несправедливый|Nedrept
Imparcial|Impartial|Impartial|unparteiisch|Imparziale|Imparcial|Беспристрастный|Imparțial
`);

  /* 47 · Empresa y liderazgo (62 palabras) */
  more(47, `
Empresa familiar|Family business|Entreprise familiale|Familienunternehmen|Azienda di famiglia|Empresa familiar|Семейный бизнес|Afacere de familie
Multinacional|Multinational|Multinationale|Konzern|Multinazionale|Multinacional|Транснациональная компания|Multinațională
Pyme|Small business|PME|Mittelstand|PMI|PME|Малый и средний бизнес|IMM
Junta directiva|Board of directors|Conseil d'administration|Vorstand|Consiglio di amministrazione|Conselho de administração|Совет директоров|Consiliu de administrație
Director ejecutivo|CEO|Directeur général|Geschäftsführer|Amministratore delegato|Diretor executivo|Генеральный директор|Director general
Fundador|Founder|Fondateur|Gründer|Fondatore|Fundador|Основатель|Fondator
Organigrama|Organisation chart|Organigramme|Organigramm|Organigramma|Organigrama|Организационная структура|Organigramă
Jerarquía|Hierarchy|Hiérarchie|Hierarchie|Gerarchia|Hierarquia|Иерархия|Ierarhie
Departamento|Department|Service|Abteilung|Reparto|Departamento|Отдел|Departament
Recursos humanos|Human resources|Ressources humaines|Personalabteilung|Risorse umane|Recursos humanos|Отдел кадров|Resurse umane
Contabilidad|Accounting|Comptabilité|Buchhaltung|Contabilità|Contabilidade|Бухгалтерия|Contabilitate
Marketing|Marketing|Marketing|Marketing|Marketing|Marketing|Маркетинг|Marketing
Atención al cliente|Customer service|Service client|Kundenservice|Assistenza clienti|Apoio ao cliente|Служба поддержки клиентов|Serviciu clienți
Logística|Logistics|Logistique|Logistik|Logistica|Logística|Логистика|Logistică
Producción|Production|Production|Produktion|Produzione|Produção|Производство|Producție
Control de calidad|Quality control|Contrôle qualité|Qualitätskontrolle|Controllo qualità|Controlo de qualidade|Контроль качества|Control al calității
Investigación y desarrollo|Research and development|Recherche et développement|Forschung und Entwicklung|Ricerca e sviluppo|Investigação e desenvolvimento|Научно-исследовательские разработки|Cercetare și dezvoltare
Misión|Mission|Mission|Leitbild|Missione|Missão|Миссия|Misiune
Valores|Values|Valeurs|Werte|Valori|Valores|Ценности|Valori
Objetivo|Goal|Objectif|Ziel|Obiettivo|Objetivo|Цель|Obiectiv
Indicador de rendimiento|Performance indicator|Indicateur de performance|Leistungskennzahl|Indicatore di prestazione|Indicador de desempenho|Показатель эффективности|Indicator de performanță
Presupuesto|Budget|Budget|Budget|Budget|Orçamento|Бюджет|Buget
Previsión|Forecast|Prévision|Prognose|Previsione|Previsão|Прогноз|Previziune
Balance|Balance sheet|Bilan|Bilanz|Bilancio|Balanço|Баланс|Bilanț
Pérdidas|Losses|Pertes|Verluste|Perdite|Prejuízos|Убытки|Pierderi
Costos|Costs|Coûts|Kosten|Costi|Custos|Расходы|Costuri
Margen|Margin|Marge|Marge|Margine|Margem|Маржа|Marjă
Inversión|Investment|Investissement|Investition|Investimento|Investimento|Инвестиция|Investiție
Financiación|Financing|Financement|Finanzierung|Finanziamento|Financiamento|Финансирование|Finanțare
Ampliación de capital|Capital increase|Augmentation de capital|Kapitalerhöhung|Aumento di capitale|Aumento de capital|Увеличение капитала|Majorare de capital
Salida a bolsa|Stock market flotation|Introduction en Bourse|Börsengang|Quotazione in Borsa|Entrada em bolsa|Выход на биржу|Listare la bursă
Adquisición|Acquisition|Acquisition|Übernahme|Acquisizione|Aquisição|Поглощение|Achiziție
Competir|To compete|Concurrencer|konkurrieren|Competere|Competir|Конкурировать|A concura
Posicionamiento|Positioning|Positionnement|Positionierung|Posizionamento|Posicionamento|Позиционирование|Poziționare
Público objetivo|Target audience|Public cible|Zielgruppe|Pubblico di riferimento|Público-alvo|Целевая аудитория|Public țintă
Estudio de mercado|Market research|Étude de marché|Marktforschung|Ricerca di mercato|Estudo de mercado|Исследование рынка|Studiu de piață
Propuesta de valor|Value proposition|Proposition de valeur|Wertversprechen|Proposta di valore|Proposta de valor|Ценностное предложение|Propunere de valoare
Ventaja competitiva|Competitive advantage|Avantage concurrentiel|Wettbewerbsvorteil|Vantaggio competitivo|Vantagem competitiva|Конкурентное преимущество|Avantaj competitiv
Fidelización|Customer loyalty|Fidélisation|Kundenbindung|Fidelizzazione|Fidelização|Лояльность клиентов|Fidelizare
Reputación|Reputation|Réputation|Ruf|Reputazione|Reputação|Репутация|Reputație
Imagen de marca|Brand image|Image de marque|Markenimage|Immagine del marchio|Imagem de marca|Имидж бренда|Imagine de marcă
Campaña publicitaria|Advertising campaign|Campagne publicitaire|Werbekampagne|Campagna pubblicitaria|Campanha publicitária|Рекламная кампания|Campanie publicitară
Liderazgo|Leadership|Leadership|Führung|Leadership|Liderança|Лидерство|Leadership
Gestión de equipos|Team management|Gestion d'équipe|Teamführung|Gestione del team|Gestão de equipas|Управление командой|Managementul echipei
Toma de decisiones|Decision-making|Prise de décision|Entscheidungsfindung|Processo decisionale|Tomada de decisões|Принятие решений|Luarea deciziilor
Resolución de conflictos|Conflict resolution|Résolution des conflits|Konfliktlösung|Risoluzione dei conflitti|Resolução de conflitos|Разрешение конфликтов|Rezolvarea conflictelor
Comunicación interna|Internal communication|Communication interne|interne Kommunikation|Comunicazione interna|Comunicação interna|Внутренние коммуникации|Comunicare internă
Retroalimentación|Feedback|Retour|Feedback|Feedback|Feedback|Обратная связь|Feedback
Reconocimiento|Recognition|Reconnaissance|Anerkennung|Riconoscimento|Reconhecimento|Признание|Recunoaștere
Compromiso|Commitment|Engagement|Engagement|Impegno|Empenho|Вовлечённость|Implicare
Rotación de personal|Staff turnover|Rotation du personnel|Mitarbeiterfluktuation|Turnover del personale|Rotatividade de pessoal|Текучесть кадров|Fluctuația personalului
Talento|Talent|Talent|Talent|Talento|Talento|Талант|Talent
Formación continua|Continuing education|Formation continue|Weiterbildung|Formazione continua|Formação contínua|Непрерывное обучение|Formare continuă
Sucesión|Succession|Succession|Nachfolge|Successione|Sucessão|Преемственность|Succesiune
Ética empresarial|Business ethics|Éthique des affaires|Wirtschaftsethik|Etica aziendale|Ética empresarial|Деловая этика|Etică în afaceri
Responsabilidad social corporativa|Corporate social responsibility|Responsabilité sociétale des entreprises|unternehmerische Verantwortung|Responsabilità sociale d'impresa|Responsabilidade social empresarial|Корпоративная социальная ответственность|Responsabilitate socială corporativă
Sostenibilidad|Sustainability|Durabilité|Nachhaltigkeit|Sostenibilità|Sustentabilidade|Устойчивое развитие|Sustenabilitate
Transformación digital|Digital transformation|Transformation numérique|digitale Transformation|Trasformazione digitale|Transformação digital|Цифровая трансформация|Transformare digitală
Cambio organizativo|Organisational change|Changement organisationnel|organisatorischer Wandel|Cambiamento organizzativo|Mudança organizacional|Организационные изменения|Schimbare organizațională
Cierre de la empresa|Company closure|Fermeture de l'entreprise|Schließung des Unternehmens|Chiusura dell'azienda|Encerramento da empresa|Закрытие компании|Închiderea companiei
`);

  /* 48 · Medio ambiente y futuro (60 palabras) */
  more(48, `
Cambio climático|Climate change|Changement climatique|Klimawandel|Cambiamento climatico|Alterações climáticas|Изменение климата|Schimbări climatice
Crisis climática|Climate crisis|Crise climatique|Klimakrise|Crisi climatica|Crise climática|Климатический кризис|Criză climatică
Gases de efecto invernadero|Greenhouse gases|Gaz à effet de serre|Treibhausgase|Gas serra|Gases com efeito de estufa|Парниковые газы|Gaze cu efect de seră
Dióxido de carbono|Carbon dioxide|Dioxyde de carbone|Kohlendioxid|Anidride carbonica|Dióxido de carbono|Углекислый газ|Dioxid de carbon
Metano|Methane|Méthane|Methan|Metano|Metano|Метан|Metan
Neutralidad de carbono|Carbon neutrality|Neutralité carbone|Klimaneutralität|Neutralità carbonica|Neutralidade carbónica|Углеродная нейтральность|Neutralitate de carbon
Compensación de emisiones|Carbon offsetting|Compensation carbone|CO2-Kompensation|Compensazione delle emissioni|Compensação de emissões|Компенсация выбросов|Compensarea emisiilor
Mercado de carbono|Carbon market|Marché du carbone|Emissionshandel|Mercato del carbonio|Mercado de carbono|Углеродный рынок|Piață a carbonului
Impuesto al carbono|Carbon tax|Taxe carbone|CO2-Steuer|Carbon tax|Imposto sobre o carbono|Углеродный налог|Taxă pe carbon
Descarbonización|Decarbonisation|Décarbonation|Dekarbonisierung|Decarbonizzazione|Descarbonização|Декарбонизация|Decarbonizare
Transición energética|Energy transition|Transition énergétique|Energiewende|Transizione energetica|Transição energética|Энергетический переход|Tranziție energetică
Energía eólica|Wind power|Énergie éolienne|Windenergie|Energia eolica|Energia eólica|Энергия ветра|Energie eoliană
Energía hidráulica|Hydropower|Énergie hydraulique|Wasserkraft|Energia idroelettrica|Energia hídrica|Гидроэнергетика|Energie hidraulică
Energía geotérmica|Geothermal energy|Énergie géothermique|Erdwärme|Energia geotermica|Energia geotérmica|Геотермальная энергия|Energie geotermală
Hidrógeno verde|Green hydrogen|Hydrogène vert|grüner Wasserstoff|Idrogeno verde|Hidrogénio verde|Зелёный водород|Hidrogen verde
Almacenamiento de energía|Energy storage|Stockage d'énergie|Energiespeicherung|Accumulo di energia|Armazenamento de energia|Хранение энергии|Stocarea energiei
Eficiencia energética|Energy efficiency|Efficacité énergétique|Energieeffizienz|Efficienza energetica|Eficiência energética|Энергоэффективность|Eficiență energetică
Aislamiento térmico|Insulation|Isolation thermique|Wärmedämmung|Isolamento termico|Isolamento térmico|Теплоизоляция|Izolație termică
Edificio sostenible|Sustainable building|Bâtiment durable|nachhaltiges Gebäude|Edificio sostenibile|Edifício sustentável|Экологичное здание|Clădire sustenabilă
Movilidad sostenible|Sustainable mobility|Mobilité durable|nachhaltige Mobilität|Mobilità sostenibile|Mobilidade sustentável|Устойчивая мобильность|Mobilitate sustenabilă
Transporte público|Public transport|Transports en commun|öffentlicher Nahverkehr|Trasporto pubblico|Transportes públicos|Общественный транспорт|Transport public
Carril bici|Cycle lane|Piste cyclable|Radweg|Pista ciclabile|Ciclovia|Велодорожка|Pistă de biciclete
Zona de bajas emisiones|Low-emission zone|Zone à faibles émissions|Umweltzone|Zona a basse emissioni|Zona de baixas emissões|Зона низких выбросов|Zonă cu emisii reduse
Calidad del aire|Air quality|Qualité de l'air|Luftqualität|Qualità dell'aria|Qualidade do ar|Качество воздуха|Calitatea aerului
Contaminación acústica|Noise pollution|Pollution sonore|Lärmbelastung|Inquinamento acustico|Poluição sonora|Шумовое загрязнение|Poluare fonică
Microplásticos|Microplastics|Microplastiques|Mikroplastik|Microplastiche|Microplásticos|Микропластик|Microplastic
Vertedero|Landfill|Décharge|Mülldeponie|Discarica|Aterro|Свалка|Groapă de gunoi
Incineración|Incineration|Incinération|Müllverbrennung|Incenerimento|Incineração|Сжигание отходов|Incinerare
Compostaje|Composting|Compostage|Kompostierung|Compostaggio|Compostagem|Компостирование|Compostare
Reutilización|Reuse|Réemploi|Wiederverwendung|Riutilizzo|Reutilização|Повторное использование|Reutilizare
Obsolescencia programada|Planned obsolescence|Obsolescence programmée|geplante Obsoleszenz|Obsolescenza programmata|Obsolescência programada|Плановое устаревание|Uzură planificată
Consumo responsable|Responsible consumption|Consommation responsable|bewusster Konsum|Consumo responsabile|Consumo responsável|Ответственное потребление|Consum responsabil
Moda rápida|Fast fashion|Mode jetable|Fast Fashion|Fast fashion|Moda rápida|Быстрая мода|Modă rapidă
Alimentación sostenible|Sustainable food|Alimentation durable|nachhaltige Ernährung|Alimentazione sostenibile|Alimentação sustentável|Устойчивое питание|Alimentație sustenabilă
Desperdicio de alimentos|Food waste|Gaspillage alimentaire|Lebensmittelverschwendung|Spreco alimentare|Desperdício alimentar|Пищевые отходы|Risipă alimentară
Agricultura intensiva|Intensive farming|Agriculture intensive|intensive Landwirtschaft|Agricoltura intensiva|Agricultura intensiva|Интенсивное земледелие|Agricultură intensivă
Monocultivo|Monoculture|Monoculture|Monokultur|Monocoltura|Monocultura|Монокультура|Monocultură
Pesticidas|Pesticides|Pesticides|Pestizide|Pesticidi|Pesticidas|Пестициды|Pesticide
Pesca sostenible|Sustainable fishing|Pêche durable|nachhaltige Fischerei|Pesca sostenibile|Pesca sustentável|Устойчивое рыболовство|Pescuit sustenabil
Sobrepesca|Overfishing|Surpêche|Überfischung|Pesca eccessiva|Pesca excessiva|Перелов|Pescuit excesiv
Acidificación del océano|Ocean acidification|Acidification des océans|Ozeanversauerung|Acidificazione degli oceani|Acidificação dos oceanos|Закисление океана|Acidificarea oceanelor
Blanqueamiento de corales|Coral bleaching|Blanchissement des coraux|Korallenbleiche|Sbiancamento dei coralli|Branqueamento dos corais|Обесцвечивание кораллов|Albirea coralilor
Deshielo|Thaw|Fonte des glaces|Eisschmelze|Scioglimento dei ghiacci|Degelo|Таяние льдов|Topirea ghețurilor
Aumento del nivel del mar|Sea level rise|Hausse du niveau de la mer|Anstieg des Meeresspiegels|Innalzamento del livello del mare|Subida do nível do mar|Повышение уровня моря|Creșterea nivelului mării
Fenómenos extremos|Extreme weather|Phénomènes extrêmes|Extremwetter|Eventi estremi|Fenómenos extremos|Экстремальные погодные явления|Fenomene extreme
Ola de calor|Heatwave|Vague de chaleur|Hitzewelle|Ondata di caldo|Onda de calor|Волна жары|Val de căldură
Desertificación|Desertification|Désertification|Wüstenbildung|Desertificazione|Desertificação|Опустынивание|Deșertificare
Erosión del suelo|Soil erosion|Érosion des sols|Bodenerosion|Erosione del suolo|Erosão do solo|Эрозия почвы|Eroziunea solului
Pérdida de biodiversidad|Biodiversity loss|Perte de biodiversité|Verlust der Artenvielfalt|Perdita di biodiversità|Perda de biodiversidade|Утрата биоразнообразия|Pierderea biodiversității
Especie en peligro|Endangered species|Espèce menacée|gefährdete Art|Specie in pericolo|Espécie em perigo|Исчезающий вид|Specie în pericol
Especie invasora|Invasive species|Espèce invasive|invasive Art|Specie invasiva|Espécie invasora|Инвазивный вид|Specie invazivă
Área protegida|Protected area|Zone protégée|Schutzgebiet|Area protetta|Área protegida|Охраняемая территория|Zonă protejată
Conservación|Conservation|Conservation|Naturschutz|Conservazione|Conservação|Охрана природы|Conservare
Restauración ecológica|Ecological restoration|Restauration écologique|ökologische Renaturierung|Ripristino ecologico|Restauro ecológico|Экологическое восстановление|Restaurare ecologică
Justicia climática|Climate justice|Justice climatique|Klimagerechtigkeit|Giustizia climatica|Justiça climática|Климатическая справедливость|Justiție climatică
Refugiados climáticos|Climate refugees|Réfugiés climatiques|Klimaflüchtlinge|Rifugiati climatici|Refugiados climáticos|Климатические беженцы|Refugiați climatici
Cumbre del clima|Climate summit|Sommet sur le climat|Klimagipfel|Vertice sul clima|Cimeira do clima|Климатический саммит|Summit climatic
Compromiso|Commitment|Engagement|Verpflichtung|Impegno|Compromisso|Обязательство|Angajament
Generaciones futuras|Future generations|Générations futures|zukünftige Generationen|Generazioni future|Gerações futuras|Будущие поколения|Generațiile viitoare
Cuidado del planeta|Caring for the planet|Protection de la planète|Schutz des Planeten|Cura del pianeta|Cuidado com o planeta|Забота о планете|Grija față de planetă
`);

  /* 49 · Matices y registro (63 palabras) */
  more(49, `
Registro|Register|Registre|Sprachebene|Registro|Registo|Стиль речи|Registru
Tono formal|Formal tone|Ton formel|formeller Ton|Tono formale|Tom formal|Официальный тон|Ton formal
Tono informal|Informal tone|Ton informel|lockerer Ton|Tono informale|Tom informal|Неформальный тон|Ton informal
Tratamiento de usted|Formal address|Vouvoiement|Siezen|Dare del Lei|Tratamento formal|Обращение на «вы»|Adresare formală
Tuteo|Informal address|Tutoiement|Duzen|Dare del tu|Tratamento por tu|Обращение на «ты»|Adresare informală
Fórmula de cortesía|Polite formula|Formule de politesse|Höflichkeitsformel|Formula di cortesia|Fórmula de cortesia|Формула вежливости|Formulă de politețe
Saludo formal|Formal greeting|Salutation formelle|förmliche Begrüßung|Saluto formale|Saudação formal|Официальное приветствие|Salut formal
Despedida cordial|Warm sign-off|Formule de clôture chaleureuse|herzlicher Abschluss|Chiusura cordiale|Despedida cordial|Тёплое завершение письма|Încheiere cordială
Muletilla|Filler word|Tic de langage|Füllwort|Intercalare|Tique de linguagem|Слово-паразит|Cuvânt de umplutură
Rodeo|Beating around the bush|Détour|Umschweife|Giro di parole|Rodeio|Хождение вокруг да около|Ocolire
Ir al grano|To get to the point|Aller droit au but|auf den Punkt kommen|Andare al sodo|Ir direto ao assunto|Переходить к сути|A merge direct la subiect
Entre líneas|Between the lines|Entre les lignes|zwischen den Zeilen|Tra le righe|Nas entrelinhas|Между строк|Printre rânduri
Mensaje|Message|Message|Botschaft|Messaggio|Mensagem|Сообщение|Mesaj
Intención|Intention|Intention|Absicht|Intenzione|Intenção|Намерение|Intenție
Ambigüedad|Ambiguity|Ambiguïté|Mehrdeutigkeit|Ambiguità|Ambiguidade|Неоднозначность|Ambiguitate
Claridad|Clarity|Clarté|Klarheit|Chiarezza|Clareza|Ясность|Claritate
Precisión|Precision|Précision|Präzision|Precisione|Precisão|Точность|Precizie
Franqueza|Frankness|Franchise|Offenheit|Franchezza|Franqueza|Откровенность|Franchețe
Honestidad|Honesty|Honnêteté|Ehrlichkeit|Onestà|Honestidade|Честность|Onestitate
Tacto|Tact|Tact|Taktgefühl|Tatto|Tato|Тактичность|Tact
Delicadeza|Delicacy|Délicatesse|Feingefühl|Delicatezza|Delicadeza|Деликатность|Delicatețe
Discreción|Discretion|Discrétion|Diskretion|Discrezione|Discrição|Сдержанность|Discreție
Empatía|Empathy|Empathie|Empathie|Empatia|Empatia|Эмпатия|Empatie
Amabilidad|Kindness|Amabilité|Freundlichkeit|Gentilezza|Amabilidade|Любезность|Amabilitate
Educación|Good manners|Éducation|gutes Benehmen|Educazione|Boa educação|Воспитанность|Bună creștere
Descortesía|Rudeness|Impolitesse|Unhöflichkeit|Scortesia|Falta de cortesia|Невежливость|Impolitețe
Insolencia|Insolence|Insolence|Unverschämtheit|Insolenza|Insolência|Дерзость|Insolență
Ironía|Irony|Ironie|Ironie|Ironia|Ironia|Ирония|Ironie
Sarcasmo|Sarcasm|Sarcasme|Sarkasmus|Sarcasmo|Sarcasmo|Сарказм|Sarcasm
Humor|Humour|Humour|Humor|Umorismo|Humor|Юмор|Umor
Broma|Joke|Blague|Witz|Scherzo|Piada|Шутка|Glumă
Eufemismo|Euphemism|Euphémisme|Euphemismus|Eufemismo|Eufemismo|Эвфемизм|Eufemism
Exageración|Exaggeration|Exagération|Übertreibung|Esagerazione|Exagero|Преувеличение|Exagerare
Atenuar|To soften|Atténuer|abschwächen|Attenuare|Atenuar|Смягчать|A atenua
Suavizar|To tone down|Adoucir|mildern|Ammorbidire|Suavizar|Смягчить формулировку|A îndulci
Enfatizar|To emphasise|Souligner|betonen|Enfatizzare|Enfatizar|Подчёркивать|A sublinia
Insistir|To insist|Insister|beharren|Insistere|Insistir|Настаивать|A insista
Disculparse|To apologise|S'excuser|sich entschuldigen|Scusarsi|Pedir desculpa|Извиняться|A-și cere scuze
Agradecer|To thank|Remercier|danken|Ringraziare|Agradecer|Благодарить|A mulțumi
Halagar|To flatter|Flatter|schmeicheln|Lusingare|Elogiar|Льстить|A flata
Criticar|To criticise|Critiquer|kritisieren|Criticare|Criticar|Критиковать|A critica
Corregir|To correct|Corriger|korrigieren|Correggere|Corrigir|Поправлять|A corecta
Rechazar|To decline|Refuser|ablehnen|Rifiutare|Recusar|Отклонять|A refuza
Negarse|To refuse|Se refuser|sich weigern|Rifiutarsi|Recusar-se|Отказываться|A refuza categoric
Quedar bien|To make a good impression|Faire bonne impression|einen guten Eindruck machen|Fare bella figura|Ficar bem visto|Произвести хорошее впечатление|A face o impresie bună
Dar la razón|To concede|Donner raison|Recht geben|Dare ragione|Dar razão|Соглашаться|A da dreptate
Llevar la contraria|To contradict|Contredire|widersprechen|Contraddire|Contrariar|Возражать из принципа|A contrazice
Matiz|Nuance|Nuance|Nuance|Sfumatura|Nuance|Оттенок смысла|Nuanță
Ambiente formal|Formal setting|Cadre formel|formeller Rahmen|Contesto formale|Ambiente formal|Официальная обстановка|Cadru formal
Ambiente relajado|Relaxed setting|Cadre décontracté|entspannter Rahmen|Contesto rilassato|Ambiente descontraído|Непринуждённая обстановка|Cadru relaxat
Correo formal|Formal email|E-mail officiel|formelle E-Mail|Email formale|Email formal|Деловое письмо|E-mail oficial
Mensaje de texto|Text message|SMS|Textnachricht|Messaggio di testo|Mensagem de texto|Текстовое сообщение|Mesaj text
Discurso|Speech|Discours|Rede|Discorso|Discurso|Речь|Discurs
Conversación|Conversation|Conversation|Gespräch|Conversazione|Conversa|Разговор|Conversație
Interrumpir|To interrupt|Interrompre|unterbrechen|Interrompere|Interromper|Перебивать|A întrerupe
Turno de palabra|Turn to speak|Tour de parole|Redezeit|Turno di parola|Vez de falar|Очередь выступать|Rândul la cuvânt
Escucha activa|Active listening|Écoute active|aktives Zuhören|Ascolto attivo|Escuta ativa|Активное слушание|Ascultare activă
Lenguaje no verbal|Non-verbal language|Langage non verbal|nonverbale Kommunikation|Linguaggio non verbale|Linguagem não verbal|Невербальное общение|Limbaj nonverbal
Contacto visual|Eye contact|Contact visuel|Blickkontakt|Contatto visivo|Contacto visual|Зрительный контакт|Contact vizual
Sonrisa|Smile|Sourire|Lächeln|Sorriso|Sorriso|Улыбка|Zâmbet
Distancia personal|Personal space|Distance personnelle|persönlicher Abstand|Distanza personale|Distância pessoal|Личное пространство|Spațiu personal
`);

  /* 10 · Rutina diaria (30 palabras) */
  more(10, `
Mañana|Morning|Matin|Morgen|Mattina|Manhã|Утро|Dimineață
Tarde|Afternoon|Après-midi|Nachmittag|Pomeriggio|Tarde|День|După-amiază
Noche|Night|Nuit|Nacht|Notte|Noite|Ночь|Noapte
Mediodía|Midday|Midi|Mittag|Mezzogiorno|Meio-dia|Полдень|Amiază
Temprano|Early|Tôt|früh|Presto|Cedo|Рано|Devreme
Todos los días|Every day|Tous les jours|jeden Tag|Ogni giorno|Todos os dias|Каждый день|În fiecare zi
Siempre|Always|Toujours|immer|Sempre|Sempre|Всегда|Mereu
Nunca|Never|Jamais|nie|Mai|Nunca|Никогда|Niciodată
A veces|Sometimes|Parfois|manchmal|A volte|Às vezes|Иногда|Uneori
Generalmente|Usually|Généralement|normalerweise|Di solito|Normalmente|Обычно|De obicei
Primero|First|D'abord|zuerst|Prima|Primeiro|Сначала|Mai întâi
Después|Then|Ensuite|danach|Dopo|Depois|Потом|Apoi
Por la noche|In the evening|Le soir|abends|Di sera|À noite|Вечером|Seara
Ir al trabajo|To go to work|Aller au travail|zur Arbeit gehen|Andare al lavoro|Ir para o trabalho|Идти на работу|A merge la serviciu
Tomar el autobús|To take the bus|Prendre le bus|den Bus nehmen|Prendere l'autobus|Apanhar o autocarro|Ехать на автобусе|A lua autobuzul
Tomar café|To have coffee|Prendre un café|Kaffee trinken|Prendere un caffè|Tomar café|Пить кофе|A bea cafea
Comer|To eat|Manger|essen|Mangiare|Comer|Есть|A mânca
Beber|To drink|Boire|trinken|Bere|Beber|Пить|A bea
Hacer la cena|To make dinner|Préparer le dîner|das Abendessen machen|Preparare la cena|Fazer o jantar|Готовить ужин|A face cina
Ver la televisión|To watch TV|Regarder la télévision|fernsehen|Guardare la televisione|Ver televisão|Смотреть телевизор|A se uita la televizor
Hablar por teléfono|To talk on the phone|Parler au téléphone|telefonieren|Parlare al telefono|Falar ao telefone|Говорить по телефону|A vorbi la telefon
Revisar el correo|To check email|Consulter ses e-mails|E-Mails prüfen|Controllare le email|Ver o email|Проверять почту|A verifica e-mailul
Sacar la basura|To take out the rubbish|Sortir les poubelles|den Müll rausbringen|Portare fuori la spazzatura|Levar o lixo à rua|Выносить мусор|A scoate gunoiul
Lavar la ropa|To do the laundry|Faire la lessive|Wäsche waschen|Fare il bucato|Lavar a roupa|Стирать бельё|A spăla rufe
Planchar|To iron|Repasser|bügeln|Stirare|Passar a ferro|Гладить|A călca
Pasear al perro|To walk the dog|Promener le chien|mit dem Hund spazieren gehen|Portare a spasso il cane|Passear o cão|Гулять с собакой|A plimba câinele
Descansar un rato|To rest for a while|Se reposer un moment|sich kurz ausruhen|Riposare un po'|Descansar um pouco|Немного отдохнуть|A se odihni puțin
Tener prisa|To be in a hurry|Être pressé|es eilig haben|Avere fretta|Ter pressa|Спешить|A se grăbi
Llegar tarde|To be late|Arriver en retard|zu spät kommen|Arrivare tardi|Chegar atrasado|Опаздывать|A întârzia
`);

  /* 11 · En casa (30 palabras) */
  more(11, `
Apartamento|Flat|Appartement|Wohnung|Appartamento|Apartamento|Квартира|Apartament
Edificio|Building|Immeuble|Gebäude|Edificio|Edifício|Здание|Clădire
Comedor|Dining room|Salle à manger|Esszimmer|Sala da pranzo|Sala de jantar|Столовая|Sufragerie
Pasillo|Hallway|Couloir|Flur|Corridoio|Corredor|Коридор|Hol
Entrada|Entrance|Entrée|Eingang|Ingresso|Entrada|Прихожая|Intrare
Garaje|Garage|Garage|Garage|Garage|Garagem|Гараж|Garaj
Terraza|Terrace|Terrasse|Terrasse|Terrazza|Terraço|Терраса|Terasă
Mesa|Table|Table|Tisch|Tavolo|Mesa|Стол|Masă
Cuadro|Picture|Tableau|Bild|Quadro|Quadro|Картина|Tablou
Reloj|Clock|Horloge|Uhr|Orologio|Relógio|Часы|Ceas
Televisor|Television|Télévision|Fernseher|Televisore|Televisor|Телевизор|Televizor
Radio|Radio|Radio|Radio|Radio|Rádio|Радио|Radio
Teléfono|Phone|Téléphone|Telefon|Telefono|Telefone|Телефон|Telefon
Computadora|Computer|Ordinateur|Computer|Computer|Computador|Компьютер|Calculator
Lavavajillas|Dishwasher|Lave-vaisselle|Geschirrspüler|Lavastoviglie|Máquina de lavar loiça|Посудомоечная машина|Mașină de spălat vase
Microondas|Microwave|Micro-ondes|Mikrowelle|Microonde|Micro-ondas|Микроволновая печь|Cuptor cu microunde
Tostadora|Toaster|Grille-pain|Toaster|Tostapane|Torradeira|Тостер|Prăjitor de pâine
Cafetera|Coffee maker|Cafetière|Kaffeemaschine|Macchina del caffè|Máquina de café|Кофеварка|Cafetieră
Plato|Plate|Assiette|Teller|Piatto|Prato|Тарелка|Farfurie
Vaso|Glass|Verre|Glas|Bicchiere|Copo|Стакан|Pahar
Taza|Cup|Tasse|Tasse|Tazza|Chávena|Чашка|Ceașcă
Cuchillo|Knife|Couteau|Messer|Coltello|Faca|Нож|Cuțit
Tenedor|Fork|Fourchette|Gabel|Forchetta|Garfo|Вилка|Furculiță
Cuchara|Spoon|Cuillère|Löffel|Cucchiaio|Colher|Ложка|Lingură
Olla|Pot|Casserole|Topf|Pentola|Panela|Кастрюля|Oală
Sartén|Frying pan|Poêle|Pfanne|Padella|Frigideira|Сковорода|Tigaie
Basura|Rubbish|Poubelle|Müll|Spazzatura|Lixo|Мусор|Gunoi
Escoba|Broom|Balai|Besen|Scopa|Vassoura|Веник|Mătură
`);

  /* 12 · Salud (30 palabras) */
  more(12, `
Dedo|Finger|Doigt|Finger|Dito|Dedo|Палец|Deget
Pecho|Chest|Poitrine|Brust|Petto|Peito|Грудь|Piept
Piel|Skin|Peau|Haut|Pelle|Pele|Кожа|Piele
Hueso|Bone|Os|Knochen|Osso|Osso|Кость|Os
Músculo|Muscle|Muscle|Muskel|Muscolo|Músculo|Мышца|Mușchi
Cerebro|Brain|Cerveau|Gehirn|Cervello|Cérebro|Мозг|Creier
Pulmón|Lung|Poumon|Lunge|Polmone|Pulmão|Лёгкое|Plămân
Hospital|Hospital|Hôpital|Krankenhaus|Ospedale|Hospital|Больница|Spital
Ambulancia|Ambulance|Ambulance|Krankenwagen|Ambulanza|Ambulância|Скорая помощь|Ambulanță
Enfermero|Nurse|Infirmier|Krankenpfleger|Infermiere|Enfermeiro|Медбрат|Asistent medical
Paciente|Patient|Patient|Patient|Paziente|Paciente|Пациент|Pacient
Examen médico|Medical examination|Examen médical|ärztliche Untersuchung|Visita medica|Exame médico|Медицинский осмотр|Examen medical
Síntoma|Symptom|Symptôme|Symptom|Sintomo|Sintoma|Симптом|Simptom
Alergia|Allergy|Allergie|Allergie|Allergia|Alergia|Аллергия|Alergie
Náuseas|Nausea|Nausées|Übelkeit|Nausea|Náuseas|Тошнота|Greață
Cansancio|Tiredness|Fatigue|Müdigkeit|Stanchezza|Cansaço|Усталость|Oboseală
Sueño|Sleepiness|Envie de dormir|Schläfrigkeit|Sonno|Sono|Сонливость|Somn
Tomar la medicina|To take medicine|Prendre un médicament|Medikamente einnehmen|Prendere le medicine|Tomar o medicamento|Принимать лекарство|A lua medicamentul
Guardar cama|To stay in bed|Rester au lit|im Bett bleiben|Restare a letto|Ficar de cama|Соблюдать постельный режим|A sta în pat
Tener fiebre|To have a fever|Avoir de la fièvre|Fieber haben|Avere la febbre|Ter febre|Иметь температуру|A avea febră
Tener tos|To have a cough|Avoir de la toux|Husten haben|Avere la tosse|Ter tosse|Кашлять|A avea tuse
Me duele|It hurts|J'ai mal|Es tut weh|Mi fa male|Dói-me|У меня болит|Mă doare
Estoy enfermo|I'm ill|Je suis malade|Ich bin krank|Sono malato|Estou doente|Я болен|Sunt bolnav
Me siento mal|I feel unwell|Je me sens mal|Mir geht es schlecht|Mi sento male|Sinto-me mal|Мне плохо|Mă simt rău
Necesito un médico|I need a doctor|J'ai besoin d'un médecin|Ich brauche einen Arzt|Ho bisogno di un medico|Preciso de um médico|Мне нужен врач|Am nevoie de un medic
Urgencias|Emergency room|Urgences|Notaufnahme|Pronto soccorso|Urgência|Приёмное отделение|Urgențe
`);

  /* 13 · Trabajo (34 palabras) */
  more(13, `
Trabajo|Job|Travail|Arbeit|Lavoro|Trabalho|Работа|Loc de muncă
Profesión|Profession|Profession|Beruf|Professione|Profissão|Профессия|Profesie
Secretaria|Secretary|Secrétaire|Sekretärin|Segretaria|Secretária|Секретарь|Secretară
Recepcionista|Receptionist|Réceptionniste|Empfangskraft|Receptionist|Rececionista|Администратор|Recepționer
Vendedor|Salesperson|Vendeur|Verkäufer|Venditore|Vendedor|Продавец|Vânzător
Cajero|Cashier|Caissier|Kassierer|Cassiere|Caixa|Кассир|Casier
Mecánico|Mechanic|Mécanicien|Mechaniker|Meccanico|Mecânico|Механик|Mecanic
Electricista|Electrician|Électricien|Elektriker|Elettricista|Eletricista|Электрик|Electrician
Cocinero|Cook|Cuisinier|Koch|Cuoco|Cozinheiro|Повар|Bucătar
Conductor|Driver|Conducteur|Fahrer|Autista|Motorista|Водитель|Șofer
Maestro|Teacher|Instituteur|Lehrer|Maestro|Professor|Учитель|Învățător
Doctor|Doctor|Docteur|Arzt|Dottore|Doutor|Доктор|Doctor
Abogado|Lawyer|Avocat|Anwalt|Avvocato|Advogado|Юрист|Avocat
Ingeniero|Engineer|Ingénieur|Ingenieur|Ingegnere|Engenheiro|Инженер|Inginer
Contador|Accountant|Comptable|Buchhalter|Contabile|Contabilista|Бухгалтер|Contabil
Teléfono|Phone|Téléphone|Telefon|Telefono|Telefone|Телефон|Telefon
Silla de oficina|Office chair|Chaise de bureau|Bürostuhl|Sedia da ufficio|Cadeira de escritório|Офисное кресло|Scaun de birou
Papel|Paper|Papier|Papier|Carta|Papel|Бумага|Hârtie
Documento|Document|Document|Dokument|Documento|Documento|Документ|Document
Llamada|Call|Appel|Anruf|Chiamata|Chamada|Звонок|Apel
Mensaje|Message|Message|Nachricht|Messaggio|Mensagem|Сообщение|Mesaj
Hora de entrada|Start time|Heure d'arrivée|Arbeitsbeginn|Orario di ingresso|Hora de entrada|Время прихода|Ora de intrare
Hora de salida|Finishing time|Heure de départ|Feierabend|Orario di uscita|Hora de saída|Время ухода|Ora de ieșire
Vacaciones|Holiday|Congés|Urlaub|Ferie|Férias|Отпуск|Concediu
Día libre|Day off|Jour de congé|freier Tag|Giorno libero|Dia de folga|Выходной день|Zi liberă
Trabajar desde casa|To work from home|Travailler à domicile|von zu Hause arbeiten|Lavorare da casa|Trabalhar a partir de casa|Работать из дома|A lucra de acasă
Pedir un día libre|To ask for a day off|Demander un jour de congé|einen freien Tag beantragen|Chiedere un giorno libero|Pedir um dia de folga|Попросить выходной|A cere o zi liberă
`);

  /* 14 · El tiempo (30 palabras) */
  more(14, `
Clima|Climate|Climat|Klima|Clima|Clima|Климат|Climă
Hace sol|It's sunny|Il y a du soleil|Die Sonne scheint|C'è il sole|Está sol|Светит солнце|E soare
Está lloviendo|It's raining|Il pleut|Es regnet|Sta piovendo|Está a chover|Идёт дождь|Plouă
Está nevando|It's snowing|Il neige|Es schneit|Sta nevicando|Está a nevar|Идёт снег|Ninge
Hace viento|It's windy|Il y a du vent|Es ist windig|C'è vento|Está vento|Дует ветер|E vânt
Hace frío|It's cold|Il fait froid|Es ist kalt|Fa freddo|Está frio|Холодно|E frig
Hace calor|It's hot|Il fait chaud|Es ist heiß|Fa caldo|Está calor|Жарко|E cald
Hace fresco|It's cool|Il fait frais|Es ist kühl|Fa fresco|Está fresco|Прохладно|E răcoare
Templado|Mild|Doux|mild|Mite|Ameno|Мягкий|Blând
Agradable|Pleasant|Agréable|angenehm|Piacevole|Agradável|Приятный|Plăcut
Fuerte|Strong|Fort|stark|Forte|Forte|Сильный|Puternic
Mojado|Wet|Mouillé|nass|Bagnato|Molhado|Мокрый|Ud
Pronóstico del tiempo|Weather forecast|Prévisions météo|Wettervorhersage|Previsioni del tempo|Previsão do tempo|Прогноз погоды|Prognoza meteo
Máxima|High|Maximale|Höchsttemperatur|Massima|Máxima|Максимум|Maximă
Mínima|Low|Minimale|Tiefsttemperatur|Minima|Mínima|Минимум|Minimă
Bajo cero|Below zero|En dessous de zéro|unter null|Sotto zero|Abaixo de zero|Ниже нуля|Sub zero
Hielo|Ice|Glace|Eis|Ghiaccio|Gelo|Лёд|Gheață
Sombra|Shade|Ombre|Schatten|Ombra|Sombra|Тень|Umbră
Gafas de sol|Sunglasses|Lunettes de soleil|Sonnenbrille|Occhiali da sole|Óculos de sol|Солнцезащитные очки|Ochelari de soare
Protector solar|Sunscreen|Crème solaire|Sonnencreme|Crema solare|Protetor solar|Солнцезащитный крем|Cremă de protecție solară
Abrigo|Coat|Manteau|Mantel|Cappotto|Casaco|Пальто|Palton
Impermeable|Raincoat|Imperméable|Regenmantel|Impermeabile|Impermeável|Дождевик|Pelerină de ploaie
Botas de lluvia|Wellies|Bottes de pluie|Gummistiefel|Stivali da pioggia|Galochas|Резиновые сапоги|Cizme de cauciuc
Sombrero|Hat|Chapeau|Hut|Cappello|Chapéu|Шляпа|Pălărie
Clima seco|Dry climate|Climat sec|trockenes Klima|Clima secco|Clima seco|Сухой климат|Climă uscată
Mes|Month|Mois|Monat|Mese|Mês|Месяц|Lună
Hoy|Today|Aujourd'hui|heute|Oggi|Hoje|Сегодня|Azi
Mañana|Tomorrow|Demain|morgen|Domani|Amanhã|Завтра|Mâine
`);

  /* 15 · Ocio (30 palabras) */
  more(15, `
Aficionado|Fan|Passionné|Liebhaber|Appassionato|Aficionado|Любитель|Pasionat
Equipo|Team|Équipe|Mannschaft|Squadra|Equipa|Команда|Echipă
Ganar|To win|Gagner|gewinnen|Vincere|Ganhar|Выигрывать|A câștiga
Perder|To lose|Perdre|verlieren|Perdere|Perder|Проигрывать|A pierde
Jugador|Player|Joueur|Spieler|Giocatore|Jogador|Игрок|Jucător
Baloncesto|Basketball|Basket-ball|Basketball|Pallacanestro|Basquetebol|Баскетбол|Baschet
Tenis|Tennis|Tennis|Tennis|Tennis|Ténis|Теннис|Tenis
Ciclismo|Cycling|Cyclisme|Radsport|Ciclismo|Ciclismo|Велоспорт|Ciclism
Montañismo|Mountaineering|Alpinisme|Bergsteigen|Alpinismo|Alpinismo|Альпинизм|Alpinism
Playa|Beach|Plage|Strand|Spiaggia|Praia|Пляж|Plajă
Piscina|Swimming pool|Piscine|Schwimmbad|Piscina|Piscina|Бассейн|Piscină
Museo|Museum|Musée|Museum|Museo|Museu|Музей|Muzeu
Teatro|Theatre|Théâtre|Theater|Teatro|Teatro|Театр|Teatru
Exposición|Exhibition|Exposition|Ausstellung|Mostra|Exposição|Выставка|Expoziție
Entrada|Ticket|Billet|Eintrittskarte|Biglietto|Bilhete|Билет|Bilet
Guitarra|Guitar|Guitare|Gitarre|Chitarra|Guitarra|Гитара|Chitară
Piano|Piano|Piano|Klavier|Pianoforte|Piano|Пианино|Pian
Canción|Song|Chanson|Lied|Canzone|Canção|Песня|Cântec
Coleccionar|To collect|Collectionner|sammeln|Collezionare|Colecionar|Коллекционировать|A colecționa
Cocinar por gusto|To cook for fun|Cuisiner pour le plaisir|aus Spaß kochen|Cucinare per piacere|Cozinhar por gosto|Готовить для удовольствия|A găti pentru plăcere
Ir de excursión|To go on a trip|Faire une excursion|einen Ausflug machen|Fare un'escursione|Ir de excursão|Ездить на экскурсию|A merge în excursie
Quedar con amigos|To meet up with friends|Retrouver des amis|sich mit Freunden treffen|Vedersi con gli amici|Combinar com amigos|Встречаться с друзьями|A se întâlni cu prietenii
Salir de noche|To go out in the evening|Sortir le soir|abends ausgehen|Uscire la sera|Sair à noite|Выходить вечером|A ieși seara
Divertirse|To have fun|S'amuser|Spaß haben|Divertirsi|Divertir-se|Веселиться|A se distra
Aburrirse|To get bored|S'ennuyer|sich langweilen|Annoiarsi|Aborrecer-se|Скучать|A se plictisi
`);

  /* 16 · Contar el pasado (29 palabras) */
  more(16, `
Ayer|Yesterday|Hier|gestern|Ieri|Ontem|Вчера|Ieri
El mes pasado|Last month|Le mois dernier|letzten Monat|Il mese scorso|No mês passado|В прошлом месяце|Luna trecută
Hace años|Years ago|Il y a des années|vor Jahren|Anni fa|Há anos|Много лет назад|Acum ani
Por la mañana|In the morning|Le matin|am Morgen|Di mattina|De manhã|Утром|Dimineața
Muchas veces|Many times|Plusieurs fois|oft|Molte volte|Muitas vezes|Много раз|De multe ori
Nunca antes|Never before|Jamais auparavant|nie zuvor|Mai prima|Nunca antes|Никогда раньше|Niciodată înainte
Fui|I went|Je suis allé|Ich bin gegangen|Sono andato|Fui|Я пошёл|Am mers
Estuve|I was|J'ai été|Ich war|Sono stato|Estive|Я был|Am fost
Tuve|I had|J'ai eu|Ich hatte|Ho avuto|Tive|У меня был|Am avut
Hice|I did|J'ai fait|Ich habe gemacht|Ho fatto|Fiz|Я сделал|Am făcut
Vi|I saw|J'ai vu|Ich habe gesehen|Ho visto|Vi|Я увидел|Am văzut
Comí|I ate|J'ai mangé|Ich habe gegessen|Ho mangiato|Comi|Я поел|Am mâncat
Compré|I bought|J'ai acheté|Ich habe gekauft|Ho comprato|Comprei|Я купил|Am cumpărat
Viajé|I travelled|J'ai voyagé|Ich bin gereist|Ho viaggiato|Viajei|Я путешествовал|Am călătorit
Conocí|I met|J'ai rencontré|Ich habe kennengelernt|Ho conosciuto|Conheci|Я познакомился|Am cunoscut
Aprendí|I learned|J'ai appris|Ich habe gelernt|Ho imparato|Aprendi|Я выучил|Am învățat
Me divertí|I had fun|Je me suis amusé|Ich hatte Spaß|Mi sono divertito|Diverti-me|Я повеселился|M-am distrat
Me perdí|I got lost|Je me suis perdu|Ich habe mich verlaufen|Mi sono perso|Perdi-me|Я заблудился|M-am rătăcit
Me caí|I fell|Je suis tombé|Ich bin gefallen|Sono caduto|Caí|Я упал|Am căzut
Me enfermé|I fell ill|Je suis tombé malade|Ich bin krank geworden|Mi sono ammalato|Fiquei doente|Я заболел|M-am îmbolnăvit
Terminé|I finished|J'ai fini|Ich bin fertig geworden|Ho finito|Terminei|Я закончил|Am terminat
`);

  /* 17 · Planes de futuro (28 palabras) */
  more(17, `
Mañana|Tomorrow|Demain|morgen|Domani|Amanhã|Завтра|Mâine
La semana que viene|Next week|La semaine prochaine|nächste Woche|La settimana prossima|Na próxima semana|На следующей неделе|Săptămâna viitoare
El mes que viene|Next month|Le mois prochain|nächsten Monat|Il mese prossimo|No próximo mês|В следующем месяце|Luna viitoare
Este fin de semana|This weekend|Ce week-end|dieses Wochenende|Questo fine settimana|Neste fim de semana|В эти выходные|În acest weekend
Voy a|I'm going to|Je vais|Ich werde|Sto per|Vou|Я собираюсь|O să
Pienso|I'm thinking of|Je pense|Ich denke daran|Penso di|Penso|Я думаю|Mă gândesc să
Quiero|I want|Je veux|Ich möchte|Voglio|Quero|Я хочу|Vreau
Espero|I hope|J'espère|Ich hoffe|Spero|Espero|Я надеюсь|Sper
Tengo que|I have to|Je dois|Ich muss|Devo|Tenho de|Я должен|Trebuie să
Tengo ganas de|I feel like|J'ai envie de|Ich habe Lust auf|Ho voglia di|Tenho vontade de|Мне хочется|Am chef să
Estoy pensando en|I'm thinking about|Je songe à|Ich denke über ... nach|Sto pensando a|Estou a pensar em|Я думаю о|Mă gândesc la
Cita|Appointment|Rendez-vous|Termin|Appuntamento|Compromisso|Встреча|Programare
Agenda|Diary|Agenda|Terminkalender|Agenda|Agenda|Ежедневник|Agendă
Calendario|Calendar|Calendrier|Kalender|Calendario|Calendário|Календарь|Calendar
Maleta|Suitcase|Valise|Koffer|Valigia|Mala|Чемодан|Valiză
Hotel|Hotel|Hôtel|Hotel|Albergo|Hotel|Отель|Hotel
Alquilar|To rent|Louer|mieten|Affittare|Alugar|Арендовать|A închiria
Comprar|To buy|Acheter|kaufen|Comprare|Comprar|Покупать|A cumpăra
Estudiar|To study|Étudier|lernen|Studiare|Estudar|Учиться|A studia
Trabajar|To work|Travailler|arbeiten|Lavorare|Trabalhar|Работать|A lucra
Casarse|To get married|Se marier|heiraten|Sposarsi|Casar-se|Жениться|A se căsători
Cambiar de trabajo|To change jobs|Changer de travail|den Job wechseln|Cambiare lavoro|Mudar de emprego|Сменить работу|A-și schimba locul de muncă
Aprender a conducir|To learn to drive|Apprendre à conduire|Autofahren lernen|Imparare a guidare|Aprender a conduzir|Научиться водить|A învăța să conduc
Seguir adelante|To move on|Aller de l'avant|weitermachen|Andare avanti|Seguir em frente|Двигаться дальше|A merge mai departe
Cumplir un sueño|To fulfil a dream|Réaliser un rêve|einen Traum verwirklichen|Realizzare un sogno|Realizar um sonho|Осуществить мечту|A împlini un vis
`);

  /* 18 · Opiniones (29 palabras) */
  more(18, `
Asombrado|Amazed|Étonné|erstaunt|Stupito|Espantado|Изумлённый|Uimit
Desanimado|Down|Découragé|entmutigt|Scoraggiato|Desanimado|Подавленный|Descurajat
Molesto|Annoyed|Agacé|genervt|Infastidito|Chateado|Раздражённый|Deranjat
Relajado|Relaxed|Détendu|entspannt|Rilassato|Relaxado|Расслабленный|Relaxat
Seguro|Confident|Sûr de soi|selbstsicher|Sicuro|Seguro|Уверенный|Sigur pe sine
Inseguro|Insecure|Peu sûr de soi|unsicher|Insicuro|Inseguro|Неуверенный|Nesigur
Solo|Lonely|Seul|einsam|Solo|Sozinho|Одинокий|Singur
Cansado de|Tired of|Fatigué de|müde von|Stanco di|Cansado de|Уставший от|Obosit de
Pienso que|I think that|Je pense que|Ich denke, dass|Penso che|Penso que|Я думаю, что|Cred că
Creo que|I believe that|Je crois que|Ich glaube, dass|Credo che|Acho que|Я считаю, что|Consider că
Me parece que|It seems to me that|Il me semble que|Mir scheint, dass|Mi sembra che|Parece-me que|Мне кажется, что|Mi se pare că
En mi opinión|In my opinion|À mon avis|Meiner Meinung nach|Secondo me|Na minha opinião|На мой взгляд|După părerea mea
Estoy de acuerdo|I agree|Je suis d'accord|Ich stimme zu|Sono d'accordo|Concordo|Я согласен|Sunt de acord
No estoy de acuerdo|I disagree|Je ne suis pas d'accord|Ich bin nicht einverstanden|Non sono d'accordo|Não concordo|Я не согласен|Nu sunt de acord
Tienes razón|You're right|Tu as raison|Du hast recht|Hai ragione|Tens razão|Ты прав|Ai dreptate
Es verdad|It's true|C'est vrai|Das stimmt|È vero|É verdade|Это правда|E adevărat
Es mentira|It's a lie|C'est faux|Das ist gelogen|È falso|É mentira|Это неправда|E fals
Depende|It depends|Ça dépend|Das kommt darauf an|Dipende|Depende|Это зависит|Depinde
Me gusta|I like it|J'aime|Es gefällt mir|Mi piace|Gosto|Мне нравится|Îmi place
No me gusta|I don't like it|Je n'aime pas|Es gefällt mir nicht|Non mi piace|Não gosto|Мне не нравится|Nu-mi place
Me encanta|I love it|J'adore|Ich liebe es|Mi piace moltissimo|Adoro|Я обожаю|Ador
Prefiero|I prefer|Je préfère|Ich bevorzuge|Preferisco|Prefiro|Я предпочитаю|Prefer
Me da igual|I don't mind|Ça m'est égal|Es ist mir egal|Mi è indifferente|É-me indiferente|Мне всё равно|Îmi este indiferent
Merece la pena|It's worth it|Ça vaut la peine|Es lohnt sich|Vale la pena|Vale a pena|Это того стоит|Merită
Es una pena|It's a pity|C'est dommage|Es ist schade|Peccato|É uma pena|Жаль|Păcat
Me sorprende|It surprises me|Ça me surprend|Es überrascht mich|Mi sorprende|Surpreende-me|Меня это удивляет|Mă surprinde
Me preocupa|It worries me|Ça m'inquiète|Es macht mir Sorgen|Mi preoccupa|Preocupa-me|Меня это беспокоит|Mă îngrijorează
`);

  /* 19 · Pedir ayuda (30 palabras) */
  more(19, `
Primeros auxilios|First aid|Premiers secours|Erste Hilfe|Primo soccorso|Primeiros socorros|Первая помощь|Prim ajutor
Médico de urgencias|Emergency doctor|Médecin urgentiste|Notarzt|Medico d'urgenza|Médico de urgência|Врач скорой помощи|Medic de urgență
Policía local|Local police|Police municipale|Ortspolizei|Polizia locale|Polícia municipal|Местная полиция|Poliția locală
Comisaría|Police station|Commissariat|Polizeiwache|Commissariato|Esquadra|Полицейский участок|Secție de poliție
Denunciar|To report|Porter plainte|anzeigen|Denunciare|Apresentar queixa|Заявить в полицию|A face o plângere
Robar|To steal|Voler|stehlen|Rubare|Roubar|Красть|A fura
Me robaron|I was robbed|On m'a volé|Ich wurde bestohlen|Mi hanno derubato|Roubaram-me|Меня обокрали|Am fost furat
Perdí mi cartera|I lost my wallet|J'ai perdu mon portefeuille|Ich habe meine Brieftasche verloren|Ho perso il portafoglio|Perdi a carteira|Я потерял кошелёк|Mi-am pierdut portofelul
Perdí el pasaporte|I lost my passport|J'ai perdu mon passeport|Ich habe meinen Reisepass verloren|Ho perso il passaporto|Perdi o passaporte|Я потерял паспорт|Mi-am pierdut pașaportul
Me quedé sin batería|My battery died|Mon téléphone n'a plus de batterie|Mein Akku ist leer|Mi si è scaricata la batteria|Fiquei sem bateria|У меня села батарея|Mi s-a descărcat bateria
Estoy perdido|I'm lost|Je suis perdu|Ich habe mich verlaufen|Mi sono perso|Estou perdido|Я заблудился|M-am rătăcit
No entiendo|I don't understand|Je ne comprends pas|Ich verstehe nicht|Non capisco|Não percebo|Я не понимаю|Nu înțeleg
¿Puede repetir?|Can you repeat that?|Pouvez-vous répéter ?|Können Sie das wiederholen?|Può ripetere?|Pode repetir?|Вы можете повторить?|Puteți repeta?
Más despacio, por favor|More slowly, please|Plus lentement, s'il vous plaît|Langsamer, bitte|Più lentamente, per favore|Mais devagar, por favor|Помедленнее, пожалуйста|Mai rar, vă rog
¿Habla inglés?|Do you speak English?|Parlez-vous anglais ?|Sprechen Sie Englisch?|Parla inglese?|Fala inglês?|Вы говорите по-английски?|Vorbiți engleza?
¿Puede ayudarme?|Can you help me?|Pouvez-vous m'aider ?|Können Sie mir helfen?|Può aiutarmi?|Pode ajudar-me?|Вы можете мне помочь?|Mă puteți ajuta?
Necesito ayuda|I need help|J'ai besoin d'aide|Ich brauche Hilfe|Ho bisogno di aiuto|Preciso de ajuda|Мне нужна помощь|Am nevoie de ajutor
Llame a la policía|Call the police|Appelez la police|Rufen Sie die Polizei|Chiami la polizia|Chame a polícia|Вызовите полицию|Sunați la poliție
Llame a una ambulancia|Call an ambulance|Appelez une ambulance|Rufen Sie einen Krankenwagen|Chiami un'ambulanza|Chame uma ambulância|Вызовите скорую|Sunați la ambulanță
Hay un incendio|There's a fire|Il y a un incendie|Es brennt|C'è un incendio|Há um incêndio|Пожар|Este un incendiu
Se cayó|He fell|Il est tombé|Er ist gestürzt|È caduto|Caiu|Он упал|A căzut
Está inconsciente|He's unconscious|Il est inconscient|Er ist bewusstlos|È incosciente|Está inconsciente|Он без сознания|Este inconștient
No respira|He's not breathing|Il ne respire pas|Er atmet nicht|Non respira|Não respira|Он не дышит|Nu respiră
Me siento mal|I feel ill|Je me sens mal|Mir ist schlecht|Mi sento male|Sinto-me mal|Мне плохо|Mă simt rău
Tengo una alergia|I have an allergy|J'ai une allergie|Ich habe eine Allergie|Ho un'allergia|Tenho uma alergia|У меня аллергия|Am o alergie
Cerrado|Closed|Fermé|geschlossen|Chiuso|Fechado|Закрыто|Închis
Aviso|Warning|Avertissement|Warnung|Avviso|Aviso|Предупреждение|Avertisment
Prohibido|Forbidden|Interdit|verboten|Vietato|Proibido|Запрещено|Interzis
`);

  window.MORE_WORDS = more;
})();
