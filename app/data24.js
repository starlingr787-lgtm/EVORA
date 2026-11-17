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

  window.MORE_WORDS = more;
})();
