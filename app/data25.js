/* Diccionario: 8 categorías más (Deportes, Salud, Emociones, Escuela, Cocina, Compras, Tiempo y fechas, Fiestas), 60 palabras cada una.
   Con ellas el diccionario llega a 20 categorías y 1.200 palabras. Formato de cada línea: es|en|fr|de|it|pt|ru|ro.
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

  cat("sports", "Deportes", "trophy", "Sports", `
Deporte|Sport|Sport|Sport|Sport|Desporto|Спорт|Sport
Fútbol|Football|Football|Fußball|Calcio|Futebol|Футбол|Fotbal
Baloncesto|Basketball|Basket-ball|Basketball|Pallacanestro|Basquetebol|Баскетбол|Baschet
Béisbol|Baseball|Baseball|Baseball|Baseball|Basebol|Бейсбол|Baseball
Tenis|Tennis|Tennis|Tennis|Tennis|Ténis|Теннис|Tenis
Voleibol|Volleyball|Volley-ball|Volleyball|Pallavolo|Voleibol|Волейбол|Volei
Natación|Swimming|Natation|Schwimmen|Nuoto|Natação|Плавание|Înot
Atletismo|Athletics|Athlétisme|Leichtathletik|Atletica|Atletismo|Лёгкая атлетика|Atletism
Ciclismo|Cycling|Cyclisme|Radsport|Ciclismo|Ciclismo|Велоспорт|Ciclism
Gimnasia|Gymnastics|Gymnastique|Turnen|Ginnastica|Ginástica|Гимнастика|Gimnastică
Boxeo|Boxing|Boxe|Boxen|Pugilato|Boxe|Бокс|Box
Golf|Golf|Golf|Golf|Golf|Golfe|Гольф|Golf
Esquí|Skiing|Ski|Skifahren|Sci|Esqui|Лыжи|Schi
Patinaje|Skating|Patinage|Eislaufen|Pattinaggio|Patinagem|Катание на коньках|Patinaj
Surf|Surfing|Surf|Surfen|Surf|Surf|Серфинг|Surf
Yoga|Yoga|Yoga|Yoga|Yoga|Ioga|Йога|Yoga
Equipo|Team|Équipe|Mannschaft|Squadra|Equipa|Команда|Echipă
Jugador|Player|Joueur|Spieler|Giocatore|Jogador|Игрок|Jucător
Entrenador|Coach|Entraîneur|Trainer|Allenatore|Treinador|Тренер|Antrenor
Árbitro|Referee|Arbitre|Schiedsrichter|Arbitro|Árbitro|Судья|Arbitru
Portero|Goalkeeper|Gardien de but|Torwart|Portiere|Guarda-redes|Вратарь|Portar
Delantero|Striker|Attaquant|Stürmer|Attaccante|Avançado|Нападающий|Atacant
Defensa|Defender|Défenseur|Verteidiger|Difensore|Defesa|Защитник|Fundaș
Capitán|Captain|Capitaine|Kapitän|Capitano|Capitão|Капитан|Căpitan
Aficionado|Fan|Supporter|Fan|Tifoso|Adepto|Болельщик|Suporter
Partido|Match|Match|Spiel|Partita|Jogo|Матч|Meci
Torneo|Tournament|Tournoi|Turnier|Torneo|Torneio|Турнир|Turneu
Campeonato|Championship|Championnat|Meisterschaft|Campionato|Campeonato|Чемпионат|Campionat
Campeón|Champion|Champion|Meister|Campione|Campeão|Чемпион|Campion
Final|Final|Finale|Finale|Finale|Final|Финал|Finală
Medalla|Medal|Médaille|Medaille|Medaglia|Medalha|Медаль|Medalie
Copa|Cup|Coupe|Pokal|Coppa|Taça|Кубок|Cupă
Premio|Prize|Prix|Preis|Premio|Prémio|Приз|Premiu
Gol|Goal|But|Tor|Gol|Golo|Гол|Gol
Punto|Point|Point|Punkt|Punto|Ponto|Очко|Punct
Marcador|Scoreboard|Tableau d'affichage|Anzeigetafel|Tabellone|Marcador|Табло|Tabelă de marcaj
Victoria|Victory|Victoire|Sieg|Vittoria|Vitória|Победа|Victorie
Derrota|Defeat|Défaite|Niederlage|Sconfitta|Derrota|Поражение|Înfrângere
Empate|Draw|Match nul|Unentschieden|Pareggio|Empate|Ничья|Egalitate
Estadio|Stadium|Stade|Stadion|Stadio|Estádio|Стадион|Stadion
Cancha|Pitch|Terrain|Spielfeld|Campo|Campo|Поле|Teren
Pista|Track|Piste|Bahn|Pista|Pista|Дорожка|Pistă
Piscina|Swimming pool|Piscine|Schwimmbad|Piscina|Piscina|Бассейн|Piscină
Gimnasio|Gym|Salle de sport|Fitnessstudio|Palestra|Ginásio|Спортзал|Sală de sport
Pelota|Ball|Balle|Ball|Palla|Bola|Мяч|Minge
Red|Net|Filet|Netz|Rete|Rede|Сетка|Plasă
Raqueta|Racket|Raquette|Schläger|Racchetta|Raquete|Ракетка|Rachetă
Casco|Helmet|Casque|Helm|Casco|Capacete|Шлем|Cască
Zapatillas deportivas|Trainers|Baskets|Turnschuhe|Scarpe da ginnastica|Sapatilhas|Кроссовки|Adidași
Uniforme|Kit|Maillot|Trikot|Divisa|Equipamento|Форма|Echipament
Entrenamiento|Training|Entraînement|Training|Allenamento|Treino|Тренировка|Antrenament
Calentamiento|Warm-up|Échauffement|Aufwärmen|Riscaldamento|Aquecimento|Разминка|Încălzire
Carrera|Race|Course|Rennen|Corsa|Corrida|Забег|Cursă
Salto|Jump|Saut|Sprung|Salto|Salto|Прыжок|Săritură
Lanzamiento|Throw|Lancer|Wurf|Lancio|Lançamento|Бросок|Aruncare
Récord|Record|Record|Rekord|Record|Recorde|Рекорд|Record
Lesión|Injury|Blessure|Verletzung|Infortunio|Lesão|Травма|Accidentare
Maratón|Marathon|Marathon|Marathon|Maratona|Maratona|Марафон|Maraton
Escalada|Climbing|Escalade|Klettern|Arrampicata|Escalada|Скалолазание|Alpinism sportiv
Pesas|Weights|Haltères|Gewichte|Pesi|Pesos|Гантели|Greutăți
`);

  cat("health", "Salud y medicina", "cross", "Health and medicine", `
Salud|Health|Santé|Gesundheit|Salute|Saúde|Здоровье|Sănătate
Enfermedad|Illness|Maladie|Krankheit|Malattia|Doença|Болезнь|Boală
Enfermo|Ill|Malade|krank|Malato|Doente|Больной|Bolnav
Sano|Healthy|En bonne santé|gesund|Sano|Saudável|Здоровый|Sănătos
Médico|Doctor|Médecin|Arzt|Medico|Médico|Врач|Medic
Enfermera|Nurse|Infirmière|Krankenschwester|Infermiera|Enfermeira|Медсестра|Asistentă medicală
Paciente|Patient|Patient|Patient|Paziente|Paciente|Пациент|Pacient
Hospital|Hospital|Hôpital|Krankenhaus|Ospedale|Hospital|Больница|Spital
Clínica|Clinic|Clinique|Klinik|Clinica|Clínica|Клиника|Clinică
Farmacia|Pharmacy|Pharmacie|Apotheke|Farmacia|Farmácia|Аптека|Farmacie
Ambulancia|Ambulance|Ambulance|Krankenwagen|Ambulanza|Ambulância|Скорая помощь|Ambulanță
Urgencias|Emergency room|Urgences|Notaufnahme|Pronto soccorso|Urgência|Приёмное отделение|Urgențe
Consulta|Appointment|Consultation|Sprechstunde|Visita|Consulta|Приём|Consultație
Receta|Prescription|Ordonnance|Rezept|Ricetta|Receita|Рецепт|Rețetă
Medicina|Medicine|Médicament|Medikament|Farmaco|Medicamento|Лекарство|Medicament
Pastilla|Pill|Comprimé|Tablette|Pastiglia|Comprimido|Таблетка|Pastilă
Jarabe|Syrup|Sirop|Hustensaft|Sciroppo|Xarope|Сироп|Sirop
Pomada|Ointment|Pommade|Salbe|Pomata|Pomada|Мазь|Unguent
Inyección|Injection|Piqûre|Spritze|Iniezione|Injeção|Укол|Injecție
Vacuna|Vaccine|Vaccin|Impfung|Vaccino|Vacina|Прививка|Vaccin
Vendaje|Bandage|Pansement|Verband|Benda|Ligadura|Повязка|Bandaj
Termómetro|Thermometer|Thermomètre|Thermometer|Termometro|Termómetro|Термометр|Termometru
Fiebre|Fever|Fièvre|Fieber|Febbre|Febre|Температура|Febră
Dolor|Pain|Douleur|Schmerz|Dolore|Dor|Боль|Durere
Dolor de cabeza|Headache|Mal de tête|Kopfschmerzen|Mal di testa|Dor de cabeça|Головная боль|Durere de cap
Dolor de estómago|Stomach ache|Mal au ventre|Bauchschmerzen|Mal di stomaco|Dor de barriga|Боль в животе|Durere de stomac
Dolor de garganta|Sore throat|Mal de gorge|Halsschmerzen|Mal di gola|Dor de garganta|Боль в горле|Durere în gât
Tos|Cough|Toux|Husten|Tosse|Tosse|Кашель|Tuse
Resfriado|Cold|Rhume|Erkältung|Raffreddore|Constipação|Простуда|Răceală
Gripe|Flu|Grippe|Grippe|Influenza|Gripe|Грипп|Gripă
Alergia|Allergy|Allergie|Allergie|Allergia|Alergia|Аллергия|Alergie
Mareo|Dizziness|Vertige|Schwindel|Capogiro|Tontura|Головокружение|Amețeală
Náuseas|Nausea|Nausées|Übelkeit|Nausea|Náuseas|Тошнота|Greață
Vómito|Vomiting|Vomissement|Erbrechen|Vomito|Vómito|Рвота|Vomă
Diarrea|Diarrhoea|Diarrhée|Durchfall|Diarrea|Diarreia|Диарея|Diaree
Herida|Wound|Plaie|Wunde|Ferita|Ferida|Рана|Rană
Quemadura|Burn|Brûlure|Verbrennung|Ustione|Queimadura|Ожог|Arsură
Fractura|Fracture|Fracture|Bruch|Frattura|Fratura|Перелом|Fractură
Esguince|Sprain|Entorse|Verstauchung|Distorsione|Entorse|Растяжение|Entorsă
Radiografía|X-ray|Radiographie|Röntgenbild|Radiografia|Radiografia|Рентген|Radiografie
Análisis de sangre|Blood test|Prise de sang|Bluttest|Esame del sangue|Análises ao sangue|Анализ крови|Analize de sânge
Cirugía|Surgery|Chirurgie|Operation|Chirurgia|Cirurgia|Операция|Operație
Anestesia|Anaesthesia|Anesthésie|Narkose|Anestesia|Anestesia|Анестезия|Anestezie
Dentista|Dentist|Dentiste|Zahnarzt|Dentista|Dentista|Стоматолог|Dentist
Muela|Molar|Molaire|Backenzahn|Molare|Molar|Коренной зуб|Măsea
Caries|Cavity|Carie|Karies|Carie|Cárie|Кариес|Carie
Oculista|Eye doctor|Ophtalmologue|Augenarzt|Oculista|Oftalmologista|Окулист|Oftalmolog
Lentes|Glasses|Lunettes|Brille|Occhiali|Óculos|Очки|Ochelari
Presión arterial|Blood pressure|Tension artérielle|Blutdruck|Pressione arteriosa|Tensão arterial|Давление|Tensiune arterială
Pulso|Pulse|Pouls|Puls|Polso|Pulso|Пульс|Puls
Embarazo|Pregnancy|Grossesse|Schwangerschaft|Gravidanza|Gravidez|Беременность|Sarcină
Reposo|Rest|Repos|Ruhe|Riposo|Repouso|Покой|Repaus
Dieta|Diet|Régime|Diät|Dieta|Dieta|Диета|Dietă
Primeros auxilios|First aid|Premiers secours|Erste Hilfe|Primo soccorso|Primeiros socorros|Первая помощь|Prim ajutor
Botiquín|First-aid kit|Trousse de secours|Erste-Hilfe-Kasten|Cassetta di pronto soccorso|Caixa de primeiros socorros|Аптечка|Trusă de prim ajutor
Cuarentena|Quarantine|Quarantaine|Quarantäne|Quarantena|Quarentena|Карантин|Carantină
Contagio|Infection|Contagion|Ansteckung|Contagio|Contágio|Заражение|Contagiune
Mascarilla|Face mask|Masque|Mundschutz|Mascherina|Máscara|Маска|Mască
Seguro médico|Health insurance|Assurance maladie|Krankenversicherung|Assicurazione sanitaria|Seguro de saúde|Медицинская страховка|Asigurare medicală
Síntoma|Symptom|Symptôme|Symptom|Sintomo|Sintoma|Симптом|Simptom
`);

  cat("emotions", "Emociones y carácter", "face", "Emotions and personality", `
Alegría|Joy|Joie|Freude|Gioia|Alegria|Радость|Bucurie
Felicidad|Happiness|Bonheur|Glück|Felicità|Felicidade|Счастье|Fericire
Tristeza|Sadness|Tristesse|Traurigkeit|Tristezza|Tristeza|Грусть|Tristețe
Enojo|Anger|Colère|Wut|Rabbia|Raiva|Гнев|Furie
Miedo|Fear|Peur|Angst|Paura|Medo|Страх|Frică
Sorpresa|Surprise|Surprise|Überraschung|Sorpresa|Surpresa|Удивление|Surpriză
Vergüenza|Embarrassment|Honte|Scham|Vergogna|Vergonha|Стыд|Rușine
Orgullo|Pride|Fierté|Stolz|Orgoglio|Orgulho|Гордость|Mândrie
Celos|Jealousy|Jalousie|Eifersucht|Gelosia|Ciúmes|Ревность|Gelozie
Envidia|Envy|Envie|Neid|Invidia|Inveja|Зависть|Invidie
Esperanza|Hope|Espoir|Hoffnung|Speranza|Esperança|Надежда|Speranță
Confianza|Confidence|Confiance|Vertrauen|Fiducia|Confiança|Уверенность|Încredere
Amor|Love|Amour|Liebe|Amore|Amor|Любовь|Dragoste
Cariño|Affection|Affection|Zuneigung|Affetto|Carinho|Нежность|Afecțiune
Soledad|Loneliness|Solitude|Einsamkeit|Solitudine|Solidão|Одиночество|Singurătate
Nostalgia|Nostalgia|Nostalgie|Nostalgie|Nostalgia|Nostalgia|Ностальгия|Nostalgie
Estrés|Stress|Stress|Stress|Stress|Stress|Стресс|Stres
Calma|Calm|Calme|Ruhe|Calma|Calma|Спокойствие|Calm
Nervios|Nerves|Nervosité|Nervosität|Nervosismo|Nervos|Нервы|Emoții
Ilusión|Excitement|Enthousiasme|Vorfreude|Entusiasmo|Entusiasmo|Радостное предвкушение|Entuziasm
Decepción|Disappointment|Déception|Enttäuschung|Delusione|Desilusão|Разочарование|Dezamăgire
Alivio|Relief|Soulagement|Erleichterung|Sollievo|Alívio|Облегчение|Ușurare
Curiosidad|Curiosity|Curiosité|Neugier|Curiosità|Curiosidade|Любопытство|Curiozitate
Aburrimiento|Boredom|Ennui|Langeweile|Noia|Aborrecimento|Скука|Plictiseală
Cansancio|Tiredness|Fatigue|Müdigkeit|Stanchezza|Cansaço|Усталость|Oboseală
Simpático|Nice|Sympathique|sympathisch|Simpatico|Simpático|Симпатичный|Simpatic
Amable|Kind|Aimable|freundlich|Gentile|Amável|Любезный|Amabil
Generoso|Generous|Généreux|großzügig|Generoso|Generoso|Щедрый|Generos
Honesto|Honest|Honnête|ehrlich|Onesto|Honesto|Честный|Cinstit
Sincero|Sincere|Sincère|aufrichtig|Sincero|Sincero|Искренний|Sincer
Valiente|Brave|Courageux|mutig|Coraggioso|Corajoso|Смелый|Curajos
Tímido|Shy|Timide|schüchtern|Timido|Tímido|Застенчивый|Timid
Sociable|Sociable|Sociable|gesellig|Socievole|Sociável|Общительный|Sociabil
Inteligente|Intelligent|Intelligent|intelligent|Intelligente|Inteligente|Умный|Inteligent
Listo|Clever|Malin|schlau|Furbo|Esperto|Сообразительный|Isteț
Trabajador|Hard-working|Travailleur|fleißig|Lavoratore|Trabalhador|Трудолюбивый|Muncitor
Perezoso|Lazy|Paresseux|faul|Pigro|Preguiçoso|Ленивый|Leneș
Paciente|Patient|Patient|geduldig|Paziente|Paciente|Терпеливый|Răbdător
Impaciente|Impatient|Impatient|ungeduldig|Impaziente|Impaciente|Нетерпеливый|Nerăbdător
Terco|Stubborn|Têtu|stur|Testardo|Teimoso|Упрямый|Încăpățânat
Educado|Polite|Poli|höflich|Educato|Educado|Вежливый|Politicos
Grosero|Rude|Grossier|unhöflich|Maleducato|Mal-educado|Грубый|Grosolan
Divertido|Funny|Drôle|lustig|Divertente|Engraçado|Весёлый|Amuzant
Serio|Serious|Sérieux|ernst|Serio|Sério|Серьёзный|Serios
Tranquilo|Easy-going|Tranquille|ruhig|Tranquillo|Tranquilo|Спокойный|Liniștit
Nervioso|Nervous|Nerveux|nervös|Nervoso|Nervoso|Нервный|Nervos
Optimista|Optimistic|Optimiste|optimistisch|Ottimista|Otimista|Оптимистичный|Optimist
Pesimista|Pessimistic|Pessimiste|pessimistisch|Pessimista|Pessimista|Пессимистичный|Pesimist
Creativo|Creative|Créatif|kreativ|Creativo|Criativo|Творческий|Creativ
Egoísta|Selfish|Égoïste|egoistisch|Egoista|Egoísta|Эгоистичный|Egoist
Humilde|Humble|Humble|bescheiden|Umile|Humilde|Скромный|Umil
Leal|Loyal|Loyal|treu|Leale|Leal|Верный|Loial
Confiable|Reliable|Fiable|zuverlässig|Affidabile|Fiável|Надёжный|De încredere
Maduro|Mature|Mûr|reif|Maturo|Maduro|Зрелый|Matur
Responsable|Responsible|Responsable|verantwortungsbewusst|Responsabile|Responsável|Ответственный|Responsabil
Sensible|Sensitive|Sensible|sensibel|Sensibile|Sensível|Чувствительный|Sensibil
Atento|Attentive|Attentionné|aufmerksam|Attento|Atencioso|Внимательный|Atent
Emocionado|Excited|Excité|aufgeregt|Emozionato|Emocionado|Взволнованный|Emoționat
Avergonzado|Embarrassed|Gêné|beschämt|Imbarazzato|Envergonhado|Смущённый|Jenat
Agradecido|Grateful|Reconnaissant|dankbar|Grato|Agradecido|Благодарный|Recunoscător
`);

  cat("school", "Escuela y estudios", "pen", "School and studies", `
Escuela|School|École|Schule|Scuola|Escola|Школа|Școală
Colegio|Secondary school|Collège|Gymnasium|Scuola media|Colégio|Гимназия|Colegiu
Universidad|University|Université|Universität|Università|Universidade|Университет|Universitate
Salón de clases|Classroom|Salle de classe|Klassenzimmer|Aula|Sala de aula|Класс|Sală de clasă
Pizarra|Board|Tableau|Tafel|Lavagna|Quadro|Доска|Tablă
Pupitre|Desk|Pupitre|Schulbank|Banco|Carteira|Парта|Bancă
Maestro|Teacher|Instituteur|Lehrer|Maestro|Professor|Учитель|Învățător
Profesor|Professor|Professeur|Professor|Professore|Docente|Профессор|Profesor
Alumno|Pupil|Élève|Schüler|Alunno|Aluno|Ученик|Elev
Estudiante|Student|Étudiant|Student|Studente|Estudante|Студент|Student
Compañero de clase|Classmate|Camarade de classe|Mitschüler|Compagno di classe|Colega de turma|Одноклассник|Coleg de clasă
Director|Head teacher|Directeur|Schulleiter|Preside|Diretor|Директор|Director
Clase|Lesson|Cours|Unterricht|Lezione|Aula|Урок|Lecție
Materia|Subject|Matière|Fach|Materia|Disciplina|Предмет|Materie
Horario|Timetable|Emploi du temps|Stundenplan|Orario|Horário|Расписание|Orar
Recreo|Break|Récréation|Pause|Ricreazione|Intervalo|Перемена|Pauză
Tarea|Homework|Devoirs|Hausaufgabe|Compiti|Trabalho de casa|Домашнее задание|Temă
Examen|Exam|Examen|Prüfung|Esame|Exame|Экзамен|Examen
Nota|Mark|Note|Note|Voto|Nota|Оценка|Notă
Calificaciones|Grades|Bulletin|Zeugnis|Pagella|Boletim|Табель|Carnet
Aprobar|To pass|Réussir|bestehen|Superare|Passar|Сдать|A promova
Reprobar|To fail|Échouer|durchfallen|Bocciare|Chumbar|Провалить|A pica
Matemáticas|Mathematics|Mathématiques|Mathematik|Matematica|Matemática|Математика|Matematică
Lengua|Language|Langue|Sprache|Lingua|Língua|Язык|Limbă
Historia|History|Histoire|Geschichte|Storia|História|История|Istorie
Geografía|Geography|Géographie|Geografie|Geografia|Geografia|География|Geografie
Ciencias|Science|Sciences|Naturwissenschaften|Scienze|Ciências|Естествознание|Științe
Física|Physics|Physique|Physik|Fisica|Física|Физика|Fizică
Química|Chemistry|Chimie|Chemie|Chimica|Química|Химия|Chimie
Biología|Biology|Biologie|Biologie|Biologia|Biologia|Биология|Biologie
Arte|Art|Arts plastiques|Kunst|Arte|Arte|Рисование|Artă
Música|Music|Musique|Musik|Musica|Música|Музыка|Muzică
Educación física|Physical education|Éducation physique|Sportunterricht|Educazione fisica|Educação física|Физкультура|Educație fizică
Idiomas|Languages|Langues|Sprachen|Lingue|Línguas|Иностранные языки|Limbi străine
Mochila|Backpack|Sac à dos|Rucksack|Zaino|Mochila|Рюкзак|Rucsac
Libro de texto|Textbook|Manuel scolaire|Lehrbuch|Libro di testo|Manual escolar|Учебник|Manual
Cuaderno|Notebook|Cahier|Heft|Quaderno|Caderno|Тетрадь|Caiet
Lápiz|Pencil|Crayon|Bleistift|Matita|Lápis|Карандаш|Creion
Bolígrafo|Pen|Stylo|Kugelschreiber|Penna|Caneta|Ручка|Pix
Goma de borrar|Rubber|Gomme|Radiergummi|Gomma|Borracha|Ластик|Radieră
Regla|Ruler|Règle|Lineal|Righello|Régua|Линейка|Riglă
Tijeras|Scissors|Ciseaux|Schere|Forbici|Tesoura|Ножницы|Foarfecă
Pegamento|Glue|Colle|Kleber|Colla|Cola|Клей|Lipici
Calculadora|Calculator|Calculatrice|Taschenrechner|Calcolatrice|Calculadora|Калькулятор|Calculator
Diccionario|Dictionary|Dictionnaire|Wörterbuch|Dizionario|Dicionário|Словарь|Dicționar
Mapa|Map|Carte|Karte|Mappa|Mapa|Карта|Hartă
Biblioteca|Library|Bibliothèque|Bibliothek|Biblioteca|Biblioteca|Библиотека|Bibliotecă
Laboratorio|Laboratory|Laboratoire|Labor|Laboratorio|Laboratório|Лаборатория|Laborator
Patio|Playground|Cour|Schulhof|Cortile|Pátio|Двор|Curte
Uniforme|Uniform|Uniforme|Uniform|Divisa|Uniforme|Форма|Uniformă
Beca|Scholarship|Bourse|Stipendium|Borsa di studio|Bolsa de estudo|Стипендия|Bursă
Diploma|Diploma|Diplôme|Diplom|Diploma|Diploma|Диплом|Diplomă
Título|Degree|Diplôme universitaire|Abschluss|Titolo di studio|Grau|Степень|Titlu academic
Matrícula|Enrolment|Inscription|Einschreibung|Iscrizione|Matrícula|Зачисление|Înscriere
Tesis|Thesis|Thèse|Abschlussarbeit|Tesi|Tese|Диссертация|Teză
Conferencia|Lecture|Conférence|Vorlesung|Conferenza|Palestra|Лекция|Conferință
Apuntes|Notes|Notes de cours|Mitschrift|Appunti|Apontamentos|Конспект|Notițe
Deberes|Assignment|Devoir|Aufgabe|Esercizio|Exercício|Задание|Exercițiu
Estudiar|To study|Étudier|studieren|Studiare|Estudar|Учиться|A studia
Aprender|To learn|Apprendre|lernen|Imparare|Aprender|Изучать|A învăța
`);

  cat("kitchen", "Cocina", "fork", "Cooking", `
Cocinar|To cook|Cuisiner|kochen|Cucinare|Cozinhar|Готовить|A găti
Receta|Recipe|Recette|Rezept|Ricetta|Receita|Рецепт|Rețetă
Ingrediente|Ingredient|Ingrédient|Zutat|Ingrediente|Ingrediente|Ингредиент|Ingredient
Cocinero|Cook|Cuisinier|Koch|Cuoco|Cozinheiro|Повар|Bucătar
Cocina|Kitchen|Cuisine|Küche|Cucina|Cozinha|Кухня|Bucătărie
Estufa|Cooker|Cuisinière|Herd|Fornello|Fogão|Плита|Aragaz
Horno|Oven|Four|Backofen|Forno|Forno|Духовка|Cuptor
Microondas|Microwave|Micro-ondes|Mikrowelle|Microonde|Micro-ondas|Микроволновка|Cuptor cu microunde
Refrigerador|Fridge|Réfrigérateur|Kühlschrank|Frigorifero|Frigorífico|Холодильник|Frigider
Congelador|Freezer|Congélateur|Gefrierschrank|Congelatore|Congelador|Морозильник|Congelator
Olla|Pot|Casserole|Topf|Pentola|Panela|Кастрюля|Oală
Sartén|Frying pan|Poêle|Pfanne|Padella|Frigideira|Сковорода|Tigaie
Cuchillo|Knife|Couteau|Messer|Coltello|Faca|Нож|Cuțit
Tabla de cortar|Chopping board|Planche à découper|Schneidebrett|Tagliere|Tábua de cortar|Разделочная доска|Tocător
Cuchara|Spoon|Cuillère|Löffel|Cucchiaio|Colher|Ложка|Lingură
Tenedor|Fork|Fourchette|Gabel|Forchetta|Garfo|Вилка|Furculiță
Plato|Plate|Assiette|Teller|Piatto|Prato|Тарелка|Farfurie
Vaso|Glass|Verre|Glas|Bicchiere|Copo|Стакан|Pahar
Taza|Cup|Tasse|Tasse|Tazza|Chávena|Чашка|Ceașcă
Cuenco|Bowl|Bol|Schüssel|Ciotola|Tigela|Миска|Castron
Cucharón|Ladle|Louche|Schöpflöffel|Mestolo|Concha|Половник|Polonic
Espátula|Spatula|Spatule|Pfannenwender|Spatola|Espátula|Лопатка|Spatulă
Batidora|Mixer|Mixeur|Mixer|Sbattitore|Liquidificadora|Блендер|Mixer
Licuadora|Blender|Blender|Standmixer|Frullatore|Batedeira|Миксер|Blender
Rallador|Grater|Râpe|Reibe|Grattugia|Ralador|Тёрка|Răzătoare
Colador|Strainer|Passoire|Sieb|Colino|Escorredor|Дуршлаг|Strecurătoare
Abrelatas|Tin opener|Ouvre-boîte|Dosenöffner|Apriscatole|Abre-latas|Консервный нож|Deschizător de conserve
Sacacorchos|Corkscrew|Tire-bouchon|Korkenzieher|Cavatappi|Saca-rolhas|Штопор|Tirbușon
Delantal|Apron|Tablier|Schürze|Grembiule|Avental|Фартук|Șorț
Cortar|To chop|Couper|schneiden|Tagliare|Cortar|Резать|A tăia
Pelar|To peel|Éplucher|schälen|Sbucciare|Descascar|Чистить|A curăța de coajă
Mezclar|To mix|Mélanger|mischen|Mescolare|Misturar|Смешивать|A amesteca
Batir|To whisk|Battre|schlagen|Sbattere|Bater|Взбивать|A bate
Hervir|To boil|Bouillir|kochen lassen|Bollire|Ferver|Кипятить|A fierbe
Freír|To fry|Frire|braten|Friggere|Fritar|Жарить|A prăji
Hornear|To bake|Cuire au four|backen|Cuocere al forno|Assar|Запекать|A coace
Asar|To roast|Rôtir|rösten|Arrostire|Grelhar|Жарить на огне|A frige la grătar
Hervido|Boiled|Bouilli|gekocht|Bollito|Cozido|Варёный|Fiert
Frito|Fried|Frit|gebraten|Fritto|Frito|Жареный|Prăjit
Al horno|Baked|Au four|aus dem Ofen|Al forno|No forno|Запечённый|La cuptor
A la parrilla|Grilled|Grillé|gegrillt|Alla griglia|Na grelha|Гриль|La grătar
Crudo|Raw|Cru|roh|Crudo|Cru|Сырой|Crud
Fresco|Fresh|Frais|frisch|Fresco|Fresco|Свежий|Proaspăt
Picante|Spicy|Épicé|scharf|Piccante|Picante|Острый|Picant
Dulce|Sweet|Sucré|süß|Dolce|Doce|Сладкий|Dulce
Salado|Salty|Salé|salzig|Salato|Salgado|Солёный|Sărat
Amargo|Bitter|Amer|bitter|Amaro|Amargo|Горький|Amar
Ácido|Sour|Acide|sauer|Acido|Ácido|Кислый|Acru
Aceite|Oil|Huile|Öl|Olio|Azeite|Масло|Ulei
Vinagre|Vinegar|Vinaigre|Essig|Aceto|Vinagre|Уксус|Oțet
Sal|Salt|Sel|Salz|Sale|Sal|Соль|Sare
Pimienta|Pepper|Poivre|Pfeffer|Pepe|Pimenta|Перец|Piper
Harina|Flour|Farine|Mehl|Farina|Farinha|Мука|Făină
Azúcar|Sugar|Sucre|Zucker|Zucchero|Açúcar|Сахар|Zahăr
Levadura|Yeast|Levure|Hefe|Lievito|Fermento|Дрожжи|Drojdie
Masa|Dough|Pâte|Teig|Impasto|Massa|Тесто|Aluat
Salsa|Sauce|Sauce|Soße|Salsa|Molho|Соус|Sos
Caldo|Broth|Bouillon|Brühe|Brodo|Caldo|Бульон|Supă de oase
Postre|Dessert|Dessert|Nachtisch|Dessert|Sobremesa|Десерт|Desert
Lavar los platos|To wash up|Faire la vaisselle|abwaschen|Lavare i piatti|Lavar a loiça|Мыть посуду|A spăla vasele
`);

  cat("shopping", "Compras y dinero", "coin", "Shopping and money", `
Tienda|Shop|Magasin|Geschäft|Negozio|Loja|Магазин|Magazin
Supermercado|Supermarket|Supermarché|Supermarkt|Supermercato|Supermercado|Супермаркет|Supermarket
Mercado|Market|Marché|Markt|Mercato|Mercado|Рынок|Piață
Centro comercial|Shopping centre|Centre commercial|Einkaufszentrum|Centro commerciale|Centro comercial|Торговый центр|Centru comercial
Panadería|Bakery|Boulangerie|Bäckerei|Panetteria|Padaria|Булочная|Brutărie
Carnicería|Butcher's|Boucherie|Metzgerei|Macelleria|Talho|Мясная лавка|Măcelărie
Verdulería|Greengrocer's|Primeur|Gemüsehändler|Fruttivendolo|Frutaria|Овощная лавка|Aprozar
Librería|Bookshop|Librairie|Buchhandlung|Libreria|Livraria|Книжный магазин|Librărie
Farmacia|Pharmacy|Pharmacie|Apotheke|Farmacia|Farmácia|Аптека|Farmacie
Zapatería|Shoe shop|Magasin de chaussures|Schuhgeschäft|Negozio di scarpe|Sapataria|Обувной магазин|Magazin de încălțăminte
Cliente|Customer|Client|Kunde|Cliente|Cliente|Покупатель|Client
Vendedor|Shop assistant|Vendeur|Verkäufer|Commesso|Vendedor|Продавец|Vânzător
Cajero|Cashier|Caissier|Kassierer|Cassiere|Empregado de caixa|Кассир|Casier
Caja|Checkout|Caisse|Kasse|Cassa|Caixa|Касса|Casă de marcat
Carrito|Trolley|Chariot|Einkaufswagen|Carrello|Carrinho|Тележка|Cărucior
Canasta|Basket|Panier|Korb|Cestino|Cesto|Корзина|Coș
Bolsa|Bag|Sac|Tüte|Sacchetto|Saco|Пакет|Pungă
Lista de compras|Shopping list|Liste de courses|Einkaufsliste|Lista della spesa|Lista de compras|Список покупок|Listă de cumpărături
Precio|Price|Prix|Preis|Prezzo|Preço|Цена|Preț
Barato|Cheap|Bon marché|billig|Economico|Barato|Дешёвый|Ieftin
Caro|Expensive|Cher|teuer|Caro|Caro|Дорогой|Scump
Oferta|Special offer|Promotion|Angebot|Offerta|Promoção|Акция|Ofertă
Descuento|Discount|Réduction|Rabatt|Sconto|Desconto|Скидка|Reducere
Rebajas|Sales|Soldes|Ausverkauf|Saldi|Saldos|Распродажа|Reduceri
Cupón|Coupon|Bon de réduction|Gutschein|Buono sconto|Cupão|Купон|Cupon
Etiqueta|Label|Étiquette|Etikett|Etichetta|Etiqueta|Ярлык|Etichetă
Talla|Size|Taille|Größe|Taglia|Tamanho|Размер|Mărime
Probador|Fitting room|Cabine d'essayage|Umkleidekabine|Camerino|Provador|Примерочная|Cabină de probă
Dinero|Money|Argent|Geld|Soldi|Dinheiro|Деньги|Bani
Efectivo|Cash|Espèces|Bargeld|Contanti|Dinheiro vivo|Наличные|Numerar
Tarjeta de crédito|Credit card|Carte de crédit|Kreditkarte|Carta di credito|Cartão de crédito|Кредитная карта|Card de credit
Tarjeta de débito|Debit card|Carte de débit|Girokarte|Carta di debito|Cartão de débito|Дебетовая карта|Card de debit
Billetera|Wallet|Portefeuille|Geldbeutel|Portafoglio|Carteira|Кошелёк|Portofel
Moneda|Coin|Pièce|Münze|Moneta|Moeda|Монета|Monedă
Billetes|Banknotes|Billets|Geldscheine|Banconote|Notas|Банкноты|Bancnote
Cambio|Change|Monnaie|Wechselgeld|Resto|Troco|Сдача|Rest
Recibo|Receipt|Reçu|Quittung|Ricevuta|Recibo|Чек|Chitanță
Factura|Invoice|Facture|Rechnung|Fattura|Fatura|Счёт-фактура|Factură
Propina|Tip|Pourboire|Trinkgeld|Mancia|Gorjeta|Чаевые|Bacșiș
Banco|Bank|Banque|Bank|Banca|Banco|Банк|Bancă
Cajero automático|Cash machine|Distributeur de billets|Geldautomat|Bancomat|Multibanco|Банкомат|Bancomat
Cuenta bancaria|Bank account|Compte bancaire|Bankkonto|Conto bancario|Conta bancária|Банковский счёт|Cont bancar
Ahorros|Savings|Économies|Ersparnisse|Risparmi|Poupanças|Сбережения|Economii
Préstamo|Loan|Prêt|Kredit|Prestito|Empréstimo|Кредит|Împrumut
Deuda|Debt|Dette|Schulden|Debito|Dívida|Долг|Datorie
Pagar|To pay|Payer|bezahlen|Pagare|Pagar|Платить|A plăti
Comprar|To buy|Acheter|kaufen|Comprare|Comprar|Покупать|A cumpăra
Vender|To sell|Vendre|verkaufen|Vendere|Vender|Продавать|A vinde
Gastar|To spend|Dépenser|ausgeben|Spendere|Gastar|Тратить|A cheltui
Ahorrar|To save|Épargner|sparen|Risparmiare|Poupar|Копить|A economisi
Devolver|To return|Rendre|zurückgeben|Restituire|Devolver|Возвращать|A returna
Cambiar|To exchange|Échanger|umtauschen|Cambiare|Trocar|Обменивать|A schimba
Regatear|To haggle|Marchander|feilschen|Contrattare|Pechinchar|Торговаться|A se tocmi
Probarse|To try on|Essayer|anprobieren|Provare|Experimentar|Примерять|A proba
Entrega a domicilio|Home delivery|Livraison à domicile|Lieferung nach Hause|Consegna a domicilio|Entrega ao domicílio|Доставка на дом|Livrare la domiciliu
Compra en línea|Online shopping|Achat en ligne|Online-Einkauf|Acquisto online|Compra online|Покупка онлайн|Cumpărături online
Garantía|Warranty|Garantie|Garantie|Garanzia|Garantia|Гарантия|Garanție
Gratis|Free|Gratuit|kostenlos|Gratis|Grátis|Бесплатно|Gratuit
Marca|Brand|Marque|Marke|Marca|Marca|Бренд|Marcă
Artículo|Item|Article|Artikel|Articolo|Artigo|Товар|Articol
`);

  cat("time", "Tiempo y fechas", "clock", "Time and dates", `
Tiempo|Time|Temps|Zeit|Tempo|Tempo|Время|Timp
Hora|Hour|Heure|Stunde|Ora|Hora|Час|Oră
Minuto|Minute|Minute|Minute|Minuto|Minuto|Минута|Minut
Segundo|Second|Seconde|Sekunde|Secondo|Segundo|Секунда|Secundă
Reloj|Clock|Horloge|Uhr|Orologio|Relógio|Часы|Ceas
Despertador|Alarm clock|Réveil|Wecker|Sveglia|Despertador|Будильник|Ceas deșteptător
Calendario|Calendar|Calendrier|Kalender|Calendario|Calendário|Календарь|Calendar
Agenda|Diary|Agenda|Terminkalender|Agenda|Agenda|Ежедневник|Agendă
Fecha|Date|Date|Datum|Data|Data|Дата|Dată
Día|Day|Jour|Tag|Giorno|Dia|День|Zi
Semana|Week|Semaine|Woche|Settimana|Semana|Неделя|Săptămână
Mes|Month|Mois|Monat|Mese|Mês|Месяц|Lună
Año|Year|Année|Jahr|Anno|Ano|Год|An
Siglo|Century|Siècle|Jahrhundert|Secolo|Século|Век|Secol
Década|Decade|Décennie|Jahrzehnt|Decennio|Década|Десятилетие|Deceniu
Lunes|Monday|Lundi|Montag|Lunedì|Segunda-feira|Понедельник|Luni
Martes|Tuesday|Mardi|Dienstag|Martedì|Terça-feira|Вторник|Marți
Miércoles|Wednesday|Mercredi|Mittwoch|Mercoledì|Quarta-feira|Среда|Miercuri
Jueves|Thursday|Jeudi|Donnerstag|Giovedì|Quinta-feira|Четверг|Joi
Viernes|Friday|Vendredi|Freitag|Venerdì|Sexta-feira|Пятница|Vineri
Sábado|Saturday|Samedi|Samstag|Sabato|Sábado|Суббота|Sâmbătă
Domingo|Sunday|Dimanche|Sonntag|Domenica|Domingo|Воскресенье|Duminică
Enero|January|Janvier|Januar|Gennaio|Janeiro|Январь|Ianuarie
Febrero|February|Février|Februar|Febbraio|Fevereiro|Февраль|Februarie
Marzo|March|Mars|März|Marzo|Março|Март|Martie
Abril|April|Avril|April|Aprile|Abril|Апрель|Aprilie
Mayo|May|Mai|Mai|Maggio|Maio|Май|Mai
Junio|June|Juin|Juni|Giugno|Junho|Июнь|Iunie
Julio|July|Juillet|Juli|Luglio|Julho|Июль|Iulie
Agosto|August|Août|August|Agosto|Agosto|Август|August
Septiembre|September|Septembre|September|Settembre|Setembro|Сентябрь|Septembrie
Octubre|October|Octobre|Oktober|Ottobre|Outubro|Октябрь|Octombrie
Noviembre|November|Novembre|November|Novembre|Novembro|Ноябрь|Noiembrie
Diciembre|December|Décembre|Dezember|Dicembre|Dezembro|Декабрь|Decembrie
Primavera|Spring|Printemps|Frühling|Primavera|Primavera|Весна|Primăvară
Verano|Summer|Été|Sommer|Estate|Verão|Лето|Vară
Otoño|Autumn|Automne|Herbst|Autunno|Outono|Осень|Toamnă
Invierno|Winter|Hiver|Winter|Inverno|Inverno|Зима|Iarnă
Mañana|Morning|Matin|Morgen|Mattina|Manhã|Утро|Dimineață
Mediodía|Midday|Midi|Mittag|Mezzogiorno|Meio-dia|Полдень|Amiază
Tarde|Afternoon|Après-midi|Nachmittag|Pomeriggio|Tarde|Послеобеденное время|După-amiază
Noche|Night|Nuit|Nacht|Notte|Noite|Ночь|Noapte
Medianoche|Midnight|Minuit|Mitternacht|Mezzanotte|Meia-noite|Полночь|Miezul nopții
Amanecer|Sunrise|Lever du soleil|Sonnenaufgang|Alba|Nascer do sol|Рассвет|Răsărit
Atardecer|Sunset|Coucher du soleil|Sonnenuntergang|Tramonto|Pôr do sol|Закат|Apus
Hoy|Today|Aujourd'hui|heute|Oggi|Hoje|Сегодня|Azi
Ayer|Yesterday|Hier|gestern|Ieri|Ontem|Вчера|Ieri
Anteayer|The day before yesterday|Avant-hier|vorgestern|L'altro ieri|Anteontem|Позавчера|Alaltăieri
Pasado mañana|The day after tomorrow|Après-demain|übermorgen|Dopodomani|Depois de amanhã|Послезавтра|Poimâine
Ahora|Now|Maintenant|jetzt|Adesso|Agora|Сейчас|Acum
Pronto|Soon|Bientôt|bald|Fra poco|Em breve|Скоро|În curând
Temprano|Early|Tôt|früh|Presto|Cedo|Рано|Devreme
Siempre|Always|Toujours|immer|Sempre|Sempre|Всегда|Mereu
Nunca|Never|Jamais|nie|Mai|Nunca|Никогда|Niciodată
A veces|Sometimes|Parfois|manchmal|A volte|Às vezes|Иногда|Uneori
Fin de semana|Weekend|Week-end|Wochenende|Fine settimana|Fim de semana|Выходные|Weekend
Día festivo|Public holiday|Jour férié|Feiertag|Giorno festivo|Feriado|Праздничный день|Zi liberă legală
Cumpleaños|Birthday|Anniversaire|Geburtstag|Compleanno|Aniversário|День рождения|Zi de naștere
Horario|Schedule|Horaire|Zeitplan|Orario|Horário|Расписание|Program
Madrugada|Early morning|Petit matin|Morgengrauen|Primo mattino|Madrugada|Раннее утро|Zori
`);

  cat("party", "Fiestas y celebraciones", "sparkle", "Parties and celebrations", `
Fiesta|Party|Fête|Party|Festa|Festa|Вечеринка|Petrecere
Celebración|Celebration|Célébration|Feier|Celebrazione|Celebração|Празднование|Sărbătorire
Cumpleaños|Birthday|Anniversaire|Geburtstag|Compleanno|Aniversário|День рождения|Zi de naștere
Pastel|Cake|Gâteau|Kuchen|Torta|Bolo|Торт|Tort
Vela|Candle|Bougie|Kerze|Candela|Vela|Свеча|Lumânare
Regalo|Gift|Cadeau|Geschenk|Regalo|Presente|Подарок|Cadou
Invitación|Invitation|Invitation|Einladung|Invito|Convite|Приглашение|Invitație
Invitado|Guest|Invité|Gast|Ospite|Convidado|Гость|Invitat
Anfitrión|Host|Hôte|Gastgeber|Padrone di casa|Anfitrião|Хозяин|Gazdă
Globo|Balloon|Ballon|Luftballon|Palloncino|Balão|Воздушный шар|Balon
Confeti|Confetti|Confettis|Konfetti|Coriandoli|Confetes|Конфетти|Confetti
Decoración|Decoration|Décoration|Dekoration|Decorazione|Decoração|Украшения|Decorațiuni
Música|Music|Musique|Musik|Musica|Música|Музыка|Muzică
Baile|Dance|Danse|Tanz|Ballo|Dança|Танец|Dans
Bailar|To dance|Danser|tanzen|Ballare|Dançar|Танцевать|A dansa
Cantar|To sing|Chanter|singen|Cantare|Cantar|Петь|A cânta
Brindis|Toast|Toast|Trinkspruch|Brindisi|Brinde|Тост|Toast
Champán|Champagne|Champagne|Sekt|Champagne|Champanhe|Шампанское|Șampanie
Fuegos artificiales|Fireworks|Feux d'artifice|Feuerwerk|Fuochi d'artificio|Fogo de artifício|Фейерверк|Artificii
Boda|Wedding|Mariage|Hochzeit|Matrimonio|Casamento|Свадьба|Nuntă
Novia|Bride|Mariée|Braut|Sposa|Noiva|Невеста|Mireasă
Novio|Groom|Marié|Bräutigam|Sposo|Noivo|Жених|Mire
Anillo|Ring|Bague|Ring|Anello|Anel|Кольцо|Inel
Luna de miel|Honeymoon|Lune de miel|Flitterwochen|Luna di miele|Lua de mel|Медовый месяц|Lună de miere
Aniversario|Anniversary|Anniversaire de mariage|Jahrestag|Anniversario|Aniversário de casamento|Годовщина|Aniversare
Bautizo|Christening|Baptême|Taufe|Battesimo|Batizado|Крещение|Botez
Graduación|Graduation|Remise des diplômes|Abschlussfeier|Laurea|Graduação|Выпускной|Absolvire
Despedida de soltero|Stag party|Enterrement de vie de garçon|Junggesellenabschied|Addio al celibato|Despedida de solteiro|Мальчишник|Petrecere de burlăcie
Navidad|Christmas|Noël|Weihnachten|Natale|Natal|Рождество|Crăciun
Nochebuena|Christmas Eve|Veille de Noël|Heiligabend|Vigilia di Natale|Consoada|Сочельник|Ajunul Crăciunului
Año Nuevo|New Year|Nouvel An|Neujahr|Capodanno|Ano Novo|Новый год|Anul Nou
Nochevieja|New Year's Eve|Saint-Sylvestre|Silvester|Notte di San Silvestro|Passagem de ano|Новогодняя ночь|Revelion
Pascua|Easter|Pâques|Ostern|Pasqua|Páscoa|Пасха|Paște
Carnaval|Carnival|Carnaval|Karneval|Carnevale|Carnaval|Карнавал|Carnaval
Disfraz|Costume|Déguisement|Kostüm|Costume|Fato|Костюм|Costum
Máscara|Mask|Masque|Maske|Maschera|Máscara|Маска|Mască
Desfile|Parade|Défilé|Umzug|Sfilata|Desfile|Парад|Paradă
Feria|Fair|Foire|Jahrmarkt|Fiera|Feira|Ярмарка|Târg
Festival|Festival|Festival|Festival|Festival|Festival|Фестиваль|Festival
Concierto|Concert|Concert|Konzert|Concerto|Concerto|Концерт|Concert
Tradición|Tradition|Tradition|Tradition|Tradizione|Tradição|Традиция|Tradiție
Costumbre|Custom|Coutume|Brauch|Usanza|Costume|Обычай|Obicei
Feriado|Holiday|Jour férié|Feiertag|Festività|Feriado|Праздничный день|Sărbătoare legală
Día de la Madre|Mother's Day|Fête des mères|Muttertag|Festa della mamma|Dia da Mãe|День матери|Ziua Mamei
Día del Padre|Father's Day|Fête des pères|Vatertag|Festa del papà|Dia do Pai|День отца|Ziua Tatălui
San Valentín|Valentine's Day|Saint-Valentin|Valentinstag|San Valentino|Dia dos Namorados|День святого Валентина|Ziua Îndrăgostiților
Tarjeta de felicitación|Greeting card|Carte de vœux|Grußkarte|Biglietto d'auguri|Cartão de felicitações|Открытка|Felicitare
Felicitar|To congratulate|Féliciter|gratulieren|Congratularsi|Dar os parabéns|Поздравлять|A felicita
Celebrar|To celebrate|Fêter|feiern|Festeggiare|Celebrar|Праздновать|A sărbători
Invitar|To invite|Inviter|einladen|Invitare|Convidar|Приглашать|A invita
Regalar|To give a present|Offrir|schenken|Regalare|Oferecer|Дарить|A dărui
Sorpresa|Surprise|Surprise|Überraschung|Sorpresa|Surpresa|Сюрприз|Surpriză
Deseo|Wish|Vœu|Wunsch|Desiderio|Desejo|Желание|Dorință
Buena suerte|Good luck|Bonne chance|Viel Glück|Buona fortuna|Boa sorte|Удачи|Succes
¡Feliz cumpleaños!|Happy birthday!|Joyeux anniversaire !|Alles Gute zum Geburtstag!|Buon compleanno!|Feliz aniversário!|С днём рождения!|La mulți ani!
¡Feliz Navidad!|Merry Christmas!|Joyeux Noël !|Frohe Weihnachten!|Buon Natale!|Feliz Natal!|С Рождеством!|Crăciun fericit!
¡Felicidades!|Congratulations!|Félicitations !|Herzlichen Glückwunsch!|Congratulazioni!|Parabéns!|Поздравляю!|Felicitări!
Diversión|Fun|Amusement|Spaß|Divertimento|Diversão|Веселье|Distracție
Alegría|Joy|Joie|Freude|Gioia|Alegria|Радость|Bucurie
Recuerdo|Keepsake|Souvenir|Andenken|Ricordo|Lembrança|Память|Amintire
`);

})();
