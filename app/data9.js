/* Ampliación de la sesión 4 (B2, unidades 31-40): 12 palabras y 7 frases más por unidad (llegan a 20 y 12).
   Se añaden AL FINAL de cada unidad, así las claves de audio anteriores no cambian. Formato: es|en|fr|de|it|pt|ru|ro.
   Las frases se tradujeron con DeepL y se revisaron una a una; las palabras sueltas las escribió Claude y también
   falta la revisión de hablantes nativos. */
(() => {
  const W = (ui, t) => addExtra(ui, "w", t), S = (ui, t) => addExtra(ui, "s", t);

  /* 30 Opinar y debatir */
  W(30, `
Opinión|Opinion|Opinion|Meinung|Opinione|Opinião|Мнение|Opinie
Punto de vista|Point of view|Point de vue|Standpunkt|Punto di vista|Ponto de vista|Точка зрения|Punct de vedere
Conclusión|Conclusion|Conclusion|Schlussfolgerung|Conclusione|Conclusão|Вывод|Concluzie
Contraargumento|Counterargument|Contre-argument|Gegenargument|Controargomento|Contra-argumento|Контраргумент|Contraargument
Consenso|Consensus|Consensus|Konsens|Consenso|Consenso|Консенсус|Consens
Polémica|Controversy|Polémique|Kontroverse|Polemica|Polémica|Полемика|Controversă
Refutar|To refute|Réfuter|Widerlegen|Confutare|Refutar|Опровергать|A respinge
Cuestionar|To question|Remettre en question|Hinterfragen|Mettere in discussione|Questionar|Ставить под сомнение|A pune la îndoială
Aceptar|To accept|Accepter|Akzeptieren|Accettare|Aceitar|Принимать|A accepta
Suposición|Assumption|Supposition|Annahme|Supposizione|Suposição|Предположение|Presupunere
Imparcial|Impartial|Impartial|Unparteiisch|Imparziale|Imparcial|Беспристрастный|Imparțial
Prioridad|Priority|Priorité|Priorität|Priorità|Prioridade|Приоритет|Prioritate
`);
  S(30, `
Estoy a favor de esa propuesta.|I am in favour of that proposal.|Je suis favorable à cette proposition.|Ich bin für diesen Vorschlag.|Sono favorevole a questa proposta.|Sou a favor dessa proposta.|Я поддерживаю это предложение.|Sunt de acord cu această propunere.
No comparto tu punto de vista.|I don't share your point of view.|Je ne partage pas ton point de vue.|Ich teile deine Ansicht nicht.|Non condivido il tuo punto di vista.|Não partilho do teu ponto de vista.|Я не разделяю твою точку зрения.|Nu împărtășesc punctul tău de vedere.
Creo que te equivocas en este punto.|I think you're wrong on this point.|Je pense que tu te trompes sur ce point.|Ich glaube, in diesem Punkt irrst du dich.|Credo che su questo punto ti sbagli.|Acho que estás enganado neste ponto.|Думаю, в этом вопросе ты ошибаешься.|Cred că te înșeli în privința asta.
Tienes razón en parte, pero hay matices.|You're partly right, but there are some nuances.|Tu as en partie raison, mais il y a des nuances.|Du hast teilweise Recht, aber es gibt da Nuancen.|In parte hai ragione, ma ci sono delle sfumature.|Tens, em parte, razão, mas há algumas nuances.|Ты отчасти прав, но здесь есть нюансы.|Ai dreptate în parte, dar există și nuanțe.
Ese argumento no me convence.|I'm not convinced by that argument.|Cet argument ne me convainc pas.|Dieses Argument überzeugt mich nicht.|Quella tesi non mi convince.|Esse argumento não me convence.|Этот аргумент меня не убеждает.|Argumentul acela nu mă convinge.
Hay que escuchar a ambas partes.|We must listen to both sides.|Il faut écouter les deux parties.|Man muss beiden Seiten zuhören.|Bisogna ascoltare entrambe le parti.|É preciso ouvir ambas as partes.|Нужно выслушать обе стороны.|Trebuie să ascultăm ambele părți.
En mi opinión, es una cuestión de prioridades.|In my opinion, it's a question of priorities.|À mon avis, c'est une question de priorités.|Meiner Meinung nach ist das eine Frage der Prioritäten.|A mio parere, è una questione di priorità.|Na minha opinião, é uma questão de prioridades.|На мой взгляд, это вопрос приоритетов.|În opinia mea, este o chestiune de priorități.
`);

  /* 31 Entrevista y carrera */
  W(31, `
Currículum|CV|CV|Lebenslauf|Curriculum|Currículo|Резюме|CV
Entrevista|Interview|Entretien|Vorstellungsgespräch|Colloquio|Entrevista|Собеседование|Interviu
Experiencia|Experience|Expérience|Erfahrung|Esperienza|Experiência|Опыт|Experiență
Sueldo|Salary|Salaire|Gehalt|Stipendio|Salário|Зарплата|Salariu
Contratar|To hire|Embaucher|Einstellen|Assumere|Contratar|Нанимать|A angaja
Despido|Dismissal|Licenciement|Entlassung|Licenziamento|Despedimento|Увольнение|Concediere
Plazo|Deadline|Délai|Frist|Scadenza|Prazo|Срок|Termen
Referencia|Reference|Référence|Referenz|Referenza|Referência|Рекомендация|Recomandare
Puesto|Position|Poste|Stelle|Posto|Cargo|Должность|Post
Jornada|Working hours|Journée de travail|Arbeitszeit|Orario di lavoro|Horário de trabalho|Рабочий день|Program de lucru
Equipo|Team|Équipe|Team|Squadra|Equipa|Команда|Echipă
Objetivo|Goal|Objectif|Ziel|Obiettivo|Objetivo|Цель|Obiectiv
`);
  S(31, `
Me presento al puesto de analista.|I am applying for the position of analyst.|Je postule au poste d'analyste.|Ich bewerbe mich um die Stelle als Analyst.|Mi candido per il posto di analista.|Candidato-me ao cargo de analista.|Я подаю заявку на должность аналитика.|Îmi depun candidatura pentru postul de analist.
Trabajé en un proyecto internacional durante dos años.|I worked on an international project for two years.|J'ai travaillé sur un projet international pendant deux ans.|Ich habe zwei Jahre lang an einem internationalen Projekt gearbeitet.|Ho lavorato a un progetto internazionale per due anni.|Trabalhei num projeto internacional durante dois anos.|Я два года работал над международным проектом.|Am lucrat la un proiect internațional timp de doi ani.
Me adapto rápido a los cambios.|I adapt quickly to change.|Je m'adapte rapidement aux changements.|Ich passe mich schnell an Veränderungen an.|Mi adatto rapidamente ai cambiamenti.|Adapto-me rapidamente às mudanças.|Я быстро приспосабливаюсь к изменениям.|Mă adaptez repede la schimbări.
¿Cuándo podría incorporarme?|When could I start?|Quand pourrais-je commencer à travailler ?|Wann könnte ich meine Stelle antreten?|Quando potrei iniziare a lavorare?|Quando é que poderia começar a trabalhar?|Когда я смогу приступить к работе?|Când aș putea începe lucrul?
Busco un entorno donde pueda crecer.|I'm looking for an environment where I can grow.|Je recherche un environnement où je puisse m'épanouir.|Ich suche ein Umfeld, in dem ich mich weiterentwickeln kann.|Cerco un ambiente in cui poter crescere.|Procuro um ambiente onde possa crescer.|Я ищу среду, в которой смогу развиваться.|Caut un mediu în care să mă pot dezvolta.
Adjunto mi currículum y una carta de presentación.|Please find attached my CV and a covering letter.|Vous trouverez ci-joint mon CV et une lettre de motivation.|Anbei finden Sie meinen Lebenslauf und ein Anschreiben.|In allegato troverete il mio curriculum e una lettera di presentazione.|Anexo o meu currículo e uma carta de apresentação.|Прилагаю свое резюме и сопроводительное письмо.|Atașez CV-ul meu și o scrisoare de intenție.
Aprendí mucho de mis errores en ese puesto.|I learnt a great deal from my mistakes in that role.|J'ai beaucoup appris de mes erreurs à ce poste.|In dieser Position habe ich viel aus meinen Fehlern gelernt.|Ho imparato molto dai miei errori in quel ruolo.|Aprendi muito com os meus erros nesse cargo.|На этой должности я многому научился на своих ошибках.|Am învățat multe din greșelile pe care le-am făcut în acea funcție.
`);

  /* 32 Noticias y sociedad */
  W(32, `
Medida|Measure|Mesure|Maßnahme|Misura|Medida|Мера|Măsură
Ley|Law|Loi|Gesetz|Legge|Lei|Закон|Lege
Pobreza|Poverty|Pauvreté|Armut|Povertà|Pobreza|Бедность|Sărăcie
Inmigrante|Immigrant|Immigré|Einwanderer|Immigrato|Imigrante|Иммигрант|Imigrant
Comunidad|Community|Communauté|Gemeinschaft|Comunità|Comunidade|Сообщество|Comunitate
Derechos|Rights|Droits|Rechte|Diritti|Direitos|Права|Drepturi
Tendencia|Trend|Tendance|Tendenz|Tendenza|Tendência|Тенденция|Tendință
Impacto|Impact|Impact|Auswirkung|Impatto|Impacto|Последствие|Impact
Rumor|Rumour|Rumeur|Gerücht|Voce|Boato|Слух|Zvon
Cobertura|Coverage|Couverture médiatique|Berichterstattung|Copertura|Cobertura|Освещение|Acoperire
Actualidad|Current affairs|Actualité|Aktuelles|Attualità|Atualidade|Текущие события|Actualitate
Periodista|Journalist|Journaliste|Journalist|Giornalista|Jornalista|Журналист|Jurnalist
`);
  S(32, `
La noticia se difundió por todo el país.|The news spread throughout the country.|La nouvelle s'est répandue dans tout le pays.|Die Nachricht verbreitete sich im ganzen Land.|La notizia si è diffusa in tutto il Paese.|A notícia espalhou-se por todo o país.|Эта новость разлетелась по всей стране.|Vestea s-a răspândit în toată țara.
Los expertos advierten de las consecuencias.|Experts are warning of the consequences.|Les experts mettent en garde contre les conséquences.|Experten warnen vor den Folgen.|Gli esperti mettono in guardia dalle conseguenze.|Os especialistas alertam para as consequências.|Эксперты предупреждают о последствиях.|Experții avertizează asupra consecințelor.
Es un problema que afecta a toda la sociedad.|It is a problem that affects society as a whole.|C'est un problème qui touche l'ensemble de la société.|Dieses Problem betrifft die gesamte Gesellschaft.|È un problema che riguarda l'intera società.|É um problema que afeta toda a sociedade.|Это проблема, затрагивающая всё общество.|Este o problemă care afectează întreaga societate.
El periódico publicó una rectificación.|The newspaper published a correction.|Le journal a publié un rectificatif.|Die Zeitung veröffentlichte eine Richtigstellung.|Il giornale ha pubblicato una rettifica.|O jornal publicou uma retificação.|Газета опубликовала опровержение.|Ziarul a publicat o rectificare.
Conviene contrastar la información.|It is advisable to check the information.|Il est conseillé de vérifier ces informations.|Es ist ratsam, die Informationen zu überprüfen.|È opportuno verificare le informazioni.|É aconselhável verificar as informações.|Следует проверить достоверность информации.|Este recomandabil să verificați informațiile.
La población está dividida ante la medida.|The population is divided over the measure.|La population est divisée face à cette mesure.|Die Bevölkerung ist in Bezug auf diese Maßnahme gespalten.|La popolazione è divisa riguardo a questa misura.|A população está dividida em relação a esta medida.|Население разделилось в отношении этой меры.|Populația este împărțită în privința acestei măsuri.
El debate público se ha intensificado.|The public debate has intensified.|Le débat public s'est intensifié.|Die öffentliche Debatte hat sich verschärft.|Il dibattito pubblico si è intensificato.|O debate público intensificou-se.|Общественная дискуссия обострилась.|Dezbaterea publică s-a intensificat.
`);

  /* 33 Salud y bienestar */
  W(33, `
Estrés|Stress|Stress|Stress|Stress|Stress|Стресс|Stres
Dieta|Diet|Régime alimentaire|Diät|Dieta|Dieta|Диета|Dietă
Receta médica|Prescription|Ordonnance|Rezept|Ricetta medica|Receita médica|Рецепт|Rețetă medicală
Revisión médica|Check-up|Bilan de santé|Vorsorgeuntersuchung|Visita di controllo|Check-up|Медосмотр|Control medical
Alergia|Allergy|Allergie|Allergie|Allergia|Alergia|Аллергия|Alergie
Hábito|Habit|Habitude|Gewohnheit|Abitudine|Hábito|Привычка|Obicei
Vacuna|Vaccine|Vaccin|Impfstoff|Vaccino|Vacina|Вакцина|Vaccin
Fatiga|Fatigue|Fatigue|Erschöpfung|Stanchezza|Cansaço|Усталость|Oboseală
Terapia|Therapy|Thérapie|Therapie|Terapia|Terapia|Терапия|Terapie
Dosis|Dose|Dose|Dosis|Dose|Dose|Доза|Doză
Alta médica|Discharge|Sortie d'hôpital|Entlassung aus dem Krankenhaus|Dimissione|Alta|Выписка|Externare
Lesión|Injury|Blessure|Verletzung|Lesione|Lesão|Травма|Leziune
`);
  S(33, `
Debería hacer más ejercicio y dormir mejor.|I should do more exercise and get a better night's sleep.|Je devrais faire plus d'exercice et mieux dormir.|Ich sollte mich mehr bewegen und besser schlafen.|Dovrei fare più esercizio fisico e dormire meglio.|Devia fazer mais exercício e dormir melhor.|Мне следует больше заниматься спортом и лучше высыпаться.|Ar trebui să fac mai multă mișcare și să dorm mai bine.
El especialista me recomendó cambiar de dieta.|The specialist advised me to change my diet.|Le spécialiste m'a conseillé de changer de régime alimentaire.|Der Facharzt hat mir empfohlen, meine Ernährung umzustellen.|Lo specialista mi ha consigliato di cambiare alimentazione.|O especialista recomendou-me que mudasse de dieta.|Специалист порекомендовал мне изменить рацион питания.|Specialistul mi-a recomandat să-mi schimb dieta.
Tengo cita para una revisión general.|I have an appointment for a general check-up.|J'ai rendez-vous pour un bilan de santé général.|Ich habe einen Termin für eine allgemeine Untersuchung.|Ho un appuntamento per una visita di controllo generale.|Tenho uma consulta marcada para um exame geral.|У меня назначена встреча для общего осмотра.|Am programare pentru un control general.
El estrés influye en la salud mental.|Stress affects mental health.|Le stress a une incidence sur la santé mentale.|Stress wirkt sich auf die psychische Gesundheit aus.|Lo stress influisce sulla salute mentale.|O stress tem impacto na saúde mental.|Стресс влияет на психическое здоровье.|Stresul are un impact asupra sănătății mintale.
Me recetaron un tratamiento de tres semanas.|I was prescribed a three-week course of treatment.|On m'a prescrit un traitement de trois semaines.|Mir wurde eine dreiwöchige Behandlung verschrieben.|Mi è stata prescritta una cura di tre settimane.|Receitaram-me um tratamento de três semanas.|Мне назначили трехнедельный курс лечения.|Mi s-a prescris un tratament de trei săptămâni.
Evito el azúcar y los alimentos procesados.|I avoid sugar and processed foods.|J'évite le sucre et les aliments transformés.|Ich verzichte auf Zucker und verarbeitete Lebensmittel.|Evito lo zucchero e i cibi trasformati.|Evito o açúcar e os alimentos processados.|Я избегаю сахара и полуфабрикатов.|Evit zahărul și alimentele procesate.
Dormir bien es clave para el bienestar.|A good night's sleep is key to well-being.|Bien dormir est essentiel au bien-être.|Guter Schlaf ist entscheidend für das Wohlbefinden.|Dormire bene è fondamentale per il benessere.|Dormir bem é fundamental para o bem-estar.|Хороший сон — залог хорошего самочувствия.|Un somn bun este esențial pentru bunăstare.
`);

  /* 34 Ciencia y tecnología */
  W(34, `
Datos|Data|Données|Daten|Dati|Dados|Данные|Date
Nube|Cloud|Cloud|Cloud|Cloud|Nuvem|Облако|Cloud
Robot|Robot|Robot|Roboter|Robot|Robô|Робот|Robot
Aplicación|App|Application|App|App|Aplicação|Приложение|Aplicație
Software|Software|Logiciel|Software|Software|Software|Программное обеспечение|Software
Contraseña|Password|Mot de passe|Passwort|Password|Palavra-passe|Пароль|Parolă
Seguridad informática|Cybersecurity|Cybersécurité|IT-Sicherheit|Sicurezza informatica|Segurança informática|Кибербезопасность|Securitate cibernetică
Patente|Patent|Brevet|Patent|Brevetto|Patente|Патент|Brevet
Investigación|Research|Recherche|Forschung|Ricerca|Investigação|Исследование|Cercetare
Laboratorio|Laboratory|Laboratoire|Labor|Laboratorio|Laboratório|Лаборатория|Laborator
Automatización|Automation|Automatisation|Automatisierung|Automazione|Automatização|Автоматизация|Automatizare
Pantalla|Screen|Écran|Bildschirm|Schermo|Ecrã|Экран|Ecran
`);
  S(34, `
La tecnología avanza más rápido que la ley.|Technology is advancing faster than the law.|La technologie évolue plus vite que la loi.|Die Technologie entwickelt sich schneller als die Gesetzgebung.|La tecnologia avanza più rapidamente della legge.|A tecnologia avança mais depressa do que a lei.|Технологии развиваются быстрее, чем законодательство.|Tehnologia avansează mai repede decât legislația.
Los datos se almacenan en la nube.|The data is stored in the cloud.|Les données sont stockées dans le cloud.|Die Daten werden in der Cloud gespeichert.|I dati vengono archiviati nel cloud.|Os dados são armazenados na nuvem.|Данные хранятся в облаке.|Datele sunt stocate în cloud.
El experimento arrojó resultados inesperados.|The experiment produced unexpected results.|L'expérience a donné des résultats inattendus.|Das Experiment führte zu unerwarteten Ergebnissen.|L'esperimento ha dato risultati inaspettati.|A experiência revelou resultados inesperados.|Эксперимент дал неожиданные результаты.|Experimentul a dat rezultate neașteptate.
Esta aplicación utiliza un algoritmo de recomendación.|This app uses a recommendation algorithm.|Cette application utilise un algorithme de recommandation.|Diese App nutzt einen Empfehlungsalgorithmus.|Questa app utilizza un algoritmo di raccomandazione.|Esta aplicação utiliza um algoritmo de recomendação.|Это приложение использует алгоритм рекомендаций.|Această aplicație utilizează un algoritm de recomandare.
Los robots ya realizan tareas muy complejas.|Robots are already carrying out highly complex tasks.|Les robots effectuent déjà des tâches très complexes.|Roboter führen bereits sehr komplexe Aufgaben aus.|I robot svolgono già compiti molto complessi.|Os robôs já realizam tarefas muito complexas.|Роботы уже выполняют весьма сложные задачи.|Roboții îndeplinesc deja sarcini foarte complexe.
Hay que proteger la información personal.|Personal information must be protected.|Il faut protéger les données personnelles.|Personenbezogene Daten müssen geschützt werden.|È necessario proteggere i dati personali.|É preciso proteger os dados pessoais.|Необходимо защищать личные данные.|Este necesar să protejăm datele cu caracter personal.
La investigación tardó diez años en completarse.|The research took ten years to complete.|Il a fallu dix ans pour mener à bien cette étude.|Die Forschungsarbeit dauerte zehn Jahre.|Ci sono voluti dieci anni per portare a termine la ricerca.|A investigação demorou dez anos a ser concluída.|На проведение исследования ушло десять лет.|Cercetarea a durat zece ani până la finalizare.
`);

  /* 35 Viajes y culturas */
  W(35, `
Costumbre|Custom|Coutume|Brauch|Usanza|Costume|Обычай|Obicei
Tradición|Tradition|Tradition|Tradition|Tradizione|Tradição|Традиция|Tradiție
Idioma|Language|Langue|Sprache|Lingua|Língua|Язык|Limbă
Extranjero|Foreigner|Étranger|Ausländer|Straniero|Estrangeiro|Иностранец|Străin
Aduana|Customs|Douane|Zoll|Dogana|Alfândega|Таможня|Vamă
Itinerario|Itinerary|Itinéraire|Reiseroute|Itinerario|Itinerário|Маршрут|Itinerar
Alojamiento|Accommodation|Hébergement|Unterkunft|Alloggio|Alojamento|Жильё|Cazare
Patrimonio|Heritage|Patrimoine|Kulturerbe|Patrimonio|Património|Достояние|Patrimoniu
Destino|Destination|Destination|Reiseziel|Destinazione|Destino|Пункт назначения|Destinație
Visado|Visa|Visa|Visum|Visto|Visto|Виза|Viză
Convivencia|Coexistence|Cohabitation|Zusammenleben|Convivenza|Convivência|Сосуществование|Conviețuire
Anfitrión|Host|Hôte|Gastgeber|Ospite|Anfitrião|Хозяин|Gazdă
`);
  S(35, `
Me sorprendieron las diferencias culturales.|I was surprised by the cultural differences.|J'ai été surpris par les différences culturelles.|Die kulturellen Unterschiede haben mich überrascht.|Sono rimasto sorpreso dalle differenze culturali.|Fiquei surpreendido com as diferenças culturais.|Меня удивили культурные различия.|M-au surprins diferențele culturale.
En ese país es de mala educación llegar tarde.|In that country, it is considered rude to be late.|Dans ce pays, il est mal vu d'arriver en retard.|In diesem Land gilt es als unhöflich, zu spät zu kommen.|In quel Paese arrivare in ritardo è considerato una mancanza di educazione.|Nesse país, é falta de educação chegar atrasado.|В этой стране опаздывать считается невежливым.|În țara respectivă, este nepoliticos să întârzii.
Aprendí a adaptarme a otras costumbres.|I learnt to adapt to different customs.|J'ai appris à m'adapter à d'autres coutumes.|Ich habe gelernt, mich an andere Gepflogenheiten anzupassen.|Ho imparato ad adattarmi ad altre usanze.|Aprendi a adaptar-me a outros costumes.|Я научился приспосабливаться к другим обычаям.|Am învățat să mă adaptez la alte obiceiuri.
Viajé mochila al hombro por tres países.|I travelled through three countries with my rucksack on my back.|J'ai voyagé avec mon sac à dos dans trois pays.|Ich bin mit dem Rucksack durch drei Länder gereist.|Ho viaggiato con lo zaino in spalla attraverso tre paesi.|Viajei com a mochila às costas por três países.|Я путешествовал с рюкзаком за плечами по трем странам.|Am călătorit cu rucsacul în spate prin trei țări.
La barrera del idioma fue un desafío.|The language barrier was a challenge.|La barrière de la langue a constitué un défi.|Die Sprachbarriere stellte eine Herausforderung dar.|La barriera linguistica ha rappresentato una sfida.|A barreira linguística constituiu um desafio.|Языковой барьер стал для меня испытанием.|Bariera lingvistică a reprezentat o provocare.
Conviví con una familia local durante un mes.|I stayed with a local family for a month.|J'ai vécu chez une famille locale pendant un mois.|Ich habe einen Monat lang bei einer einheimischen Familie gewohnt.|Ho vissuto con una famiglia del posto per un mese.|Vivi com uma família local durante um mês.|Я прожил в местной семье в течение месяца.|Am locuit cu o familie din zonă timp de o lună.
Volví con una visión más amplia del mundo.|I came back with a broader view of the world.|Je suis revenu avec une vision plus large du monde.|Ich bin mit einer umfassenderen Sicht auf die Welt zurückgekehrt.|Sono tornato con una visione più ampia del mondo.|Voltei com uma visão mais ampla do mundo.|Я вернулся с более широким взглядом на мир.|M-am întors cu o viziune mai amplă asupra lumii.
`);

  /* 36 Vivienda y ciudad */
  W(36, `
Vivienda|Housing|Logement|Wohnraum|Abitazione|Habitação|Жильё|Locuință
Apartamento|Apartment|Appartement|Apartment|Appartamento|Apartamento|Квартира|Apartament
Amueblado|Furnished|Meublé|Möbliert|Arredato|Mobilado|Меблированный|Mobilat
Vecino|Neighbour|Voisin|Nachbar|Vicino|Vizinho|Сосед|Vecin
Ascensor|Lift|Ascenseur|Aufzug|Ascensore|Elevador|Лифт|Lift
Calefacción|Heating|Chauffage|Heizung|Riscaldamento|Aquecimento|Отопление|Încălzire
Obras|Building work|Travaux|Bauarbeiten|Lavori|Obras|Ремонт|Lucrări
Ubicación|Location|Emplacement|Lage|Posizione|Localização|Расположение|Locație
Transporte público|Public transport|Transports en commun|Öffentlicher Nahverkehr|Trasporti pubblici|Transportes públicos|Общественный транспорт|Transport public
Alquilar|To rent|Louer|Mieten|Affittare|Arrendar|Арендовать|A închiria
Plano|Floor plan|Plan|Grundriss|Planimetria|Planta|Планировка|Plan
Zona verde|Green space|Espace vert|Grünfläche|Area verde|Espaço verde|Зелёная зона|Spațiu verde
`);
  S(36, `
El apartamento está amueblado y bien iluminado.|The flat is furnished and well-lit.|L'appartement est meublé et bien éclairé.|Die Wohnung ist möbliert und hell.|L'appartamento è arredato e ben illuminato.|O apartamento está mobilado e bem iluminado.|Квартира меблирована и хорошо освещена.|Apartamentul este mobilat și bine luminat.
¿Se pueden tener mascotas en el edificio?|Are pets allowed in the building?|Est-il possible d'avoir des animaux de compagnie dans l'immeuble ?|Dürfen im Gebäude Haustiere gehalten werden?|È consentito tenere animali domestici nell'edificio?|É permitido ter animais de estimação no edifício?|Разрешено ли держать домашних животных в здании?|Se pot ține animale de companie în clădire?
Necesito más tiempo para pensarlo.|I need a bit more time to think about it.|J'ai besoin de plus de temps pour y réfléchir.|Ich brauche noch etwas Zeit, um darüber nachzudenken.|Ho bisogno di più tempo per rifletterci.|Preciso de mais tempo para pensar nisso.|Мне нужно больше времени, чтобы об этом подумать.|Am nevoie de mai mult timp să mă gândesc.
El contrato dura un año y se puede renovar.|The contract runs for one year and is renewable.|Le contrat a une durée d'un an et peut être renouvelé.|Der Vertrag hat eine Laufzeit von einem Jahr und kann verlängert werden.|Il contratto ha una durata di un anno ed è rinnovabile.|O contrato tem a duração de um ano e é renovável.|Срок действия договора составляет один год, и он может быть продлен.|Contractul are o durată de un an și poate fi reînnoit.
Los gastos del edificio corren por mi cuenta.|I will pay the building's running costs.|Les frais liés à l'immeuble sont à ma charge.|Die Kosten für das Gebäude trage ich selbst.|Le spese relative all'edificio sono a mio carico.|As despesas do edifício ficam a meu cargo.|Расходы на содержание здания я беру на себя.|Cheltuielile clădirii sunt în sarcina mea.
Prefiero vivir cerca del trabajo.|I prefer to live near my workplace.|Je préfère habiter près de mon travail.|Ich wohne lieber in der Nähe meiner Arbeit.|Preferisco vivere vicino al lavoro.|Prefiro morar perto do trabalho.|Я предпочитаю жить рядом с работой.|Prefer să locuiesc aproape de locul de muncă.
La mudanza está prevista para el mes próximo.|The move is scheduled for next month.|Le déménagement est prévu pour le mois prochain.|Der Umzug ist für nächsten Monat geplant.|Il trasloco è previsto per il mese prossimo.|A mudança está prevista para o próximo mês.|Переезд запланирован на следующий месяц.|Mutarea este programată pentru luna viitoare.
`);

  /* 37 Finanzas personales */
  W(37, `
Deuda|Debt|Dette|Schulden|Debito|Dívida|Долг|Datorie
Préstamo|Loan|Prêt|Kredit|Prestito|Empréstimo|Кредит|Împrumut
Impuesto|Tax|Impôt|Steuer|Imposta|Imposto|Налог|Impozit
Cuenta bancaria|Bank account|Compte bancaire|Bankkonto|Conto bancario|Conta bancária|Банковский счёт|Cont bancar
Tarjeta de crédito|Credit card|Carte de crédit|Kreditkarte|Carta di credito|Cartão de crédito|Кредитная карта|Card de credit
Acciones|Shares|Actions|Aktien|Azioni|Ações|Акции|Acțiuni
Riesgo|Risk|Risque|Risiko|Rischio|Risco|Риск|Risc
Beneficio|Profit|Bénéfice|Gewinn|Profitto|Lucro|Прибыль|Profit
Pérdida|Loss|Perte|Verlust|Perdita|Perda|Убыток|Pierdere
Cuota|Instalment|Mensualité|Rate|Rata|Prestação|Взнос|Rată
Seguro|Insurance|Assurance|Versicherung|Assicurazione|Seguro|Страхование|Asigurare
Capital|Capital|Capital|Kapital|Capitale|Capital|Капитал|Capital
`);
  S(37, `
Intento ahorrar un diez por ciento de mi sueldo.|I try to save ten per cent of my salary.|J'essaie de mettre de côté 10 % de mon salaire.|Ich versuche, zehn Prozent meines Gehalts zu sparen.|Cerco di mettere da parte il dieci per cento del mio stipendio.|Tento poupar dez por cento do meu salário.|Я стараюсь откладывать десять процентов своей зарплаты.|Încerc să economisesc zece la sută din salariul meu.
Pedí un préstamo para comprar un auto.|I took out a loan to buy a car.|J'ai contracté un prêt pour acheter une voiture.|Ich habe einen Kredit aufgenommen, um ein Auto zu kaufen.|Ho chiesto un prestito per comprare un'auto.|Pedi um empréstimo para comprar um carro.|Я взял кредит на покупку автомобиля.|Am solicitat un împrumut pentru a cumpăra o mașină.
Conviene diversificar las inversiones.|It is advisable to diversify your investments.|Il est conseillé de diversifier ses placements.|Es ist ratsam, die Anlagen zu streuen.|È opportuno diversificare gli investimenti.|É aconselhável diversificar os investimentos.|Рекомендуется диверсифицировать инвестиции.|Este recomandabil să vă diversificați investițiile.
Los precios han subido mucho este año.|Prices have risen a great deal this year.|Les prix ont beaucoup augmenté cette année.|Die Preise sind in diesem Jahr stark gestiegen.|Quest'anno i prezzi sono aumentati notevolmente.|Os preços subiram bastante este ano.|В этом году цены сильно выросли.|Prețurile au crescut foarte mult anul acesta.
Debo pagar los impuestos antes de fin de mes.|I must pay my taxes before the end of the month.|Je dois payer mes impôts avant la fin du mois.|Ich muss die Steuern noch vor Monatsende bezahlen.|Devo pagare le tasse prima della fine del mese.|Tenho de pagar os impostos antes do fim do mês.|Я должен уплатить налоги до конца месяца.|Trebuie să plătesc impozitele înainte de sfârșitul lunii.
Antes de invertir, hay que informarse bien.|Before investing, you need to do your research properly.|Avant d'investir, il faut bien se renseigner.|Bevor man investiert, sollte man sich gründlich informieren.|Prima di investire, è necessario informarsi bene.|Antes de investir, é preciso informar-se bem.|Прежде чем инвестировать, нужно хорошо разобраться в ситуации.|Înainte de a investi, trebuie să te informezi bine.
Mi objetivo es tener estabilidad económica.|My aim is to achieve financial stability.|Mon objectif est d'atteindre la stabilité financière.|Mein Ziel ist es, finanzielle Stabilität zu erreichen.|Il mio obiettivo è raggiungere la stabilità economica.|O meu objetivo é ter estabilidade económica.|Моя цель — добиться финансовой стабильности.|Obiectivul meu este să am stabilitate economică.
`);

  /* 38 Medios y redes */
  W(38, `
Prensa|Press|Presse|Presse|Stampa|Imprensa|Пресса|Presă
Periodista|Journalist|Journaliste|Journalist|Giornalista|Jornalista|Журналист|Jurnalist
Noticia falsa|Fake news|Fausse information|Falschmeldung|Notizia falsa|Notícia falsa|Фейк|Știre falsă
Publicidad|Advertising|Publicité|Werbung|Pubblicità|Publicidade|Реклама|Publicitate
Seguidor|Follower|Abonné|Follower|Follower|Seguidor|Подписчик|Urmăritor
Publicación|Post|Publication|Beitrag|Post|Publicação|Публикация|Postare
Editorial|Editorial|Éditorial|Leitartikel|Editoriale|Editorial|Редакционная статья|Editorial
Medios de comunicación|Media|Médias|Medien|Mezzi di comunicazione|Meios de comunicação|СМИ|Mijloace de comunicare
Sesgo|Bias|Biais|Voreingenommenheit|Parzialità|Parcialidade|Предвзятость|Părtinire
Rueda de prensa|Press conference|Conférence de presse|Pressekonferenz|Conferenza stampa|Conferência de imprensa|Пресс-конференция|Conferință de presă
Transmisión en vivo|Live stream|Diffusion en direct|Livestream|Diretta streaming|Transmissão em direto|Прямая трансляция|Transmisie live
Credibilidad|Credibility|Crédibilité|Glaubwürdigkeit|Credibilità|Credibilidade|Достоверность|Credibilitate
`);
  S(38, `
Los medios influyen en cómo vemos la realidad.|The media influence the way we perceive reality.|Les médias influencent notre perception de la réalité.|Die Medien beeinflussen, wie wir die Realität wahrnehmen.|I media influenzano il modo in cui percepiamo la realtà.|Os meios de comunicação influenciam a forma como vemos a realidade.|Средства массовой информации влияют на то, как мы воспринимаем реальность.|Mass-media influențează modul în care percepem realitatea.
No todo lo que circula en línea es cierto.|Not everything that circulates online is true.|Tout ce qui circule sur Internet n'est pas forcément vrai.|Nicht alles, was im Internet kursiert, ist wahr.|Non tutto ciò che circola online è vero.|Nem tudo o que circula na Internet é verdade.|Не всё, что появляется в Интернете, является правдой.|Nu tot ce circulă pe internet este adevărat.
Las noticias falsas se difunden con facilidad.|Fake news spreads easily.|Les fausses informations se propagent facilement.|Fake News verbreiten sich leicht.|Le notizie false si diffondono facilmente.|As notícias falsas espalham-se facilmente.|Фейковые новости легко распространяются.|Știrile false se răspândesc cu ușurință.
La libertad de prensa es fundamental.|Freedom of the press is essential.|La liberté de la presse est fondamentale.|Die Pressefreiheit ist von grundlegender Bedeutung.|La libertà di stampa è fondamentale.|A liberdade de imprensa é fundamental.|Свобода прессы имеет основополагающее значение.|Libertatea presei este fundamentală.
Sigo a varios periodistas en las redes.|I follow several journalists on social media.|Je suis plusieurs journalistes sur les réseaux sociaux.|Ich folge mehreren Journalisten in den sozialen Netzwerken.|Seguo diversi giornalisti sui social.|Sigo vários jornalistas nas redes sociais.|Я подписан на нескольких журналистов в социальных сетях.|Urmăresc mai mulți jurnaliști pe rețelele sociale.
Los algoritmos nos muestran lo que ya pensamos.|Algorithms show us what we already think.|Les algorithmes nous montrent ce que nous pensons déjà.|Algorithmen zeigen uns, was wir ohnehin schon denken.|Gli algoritmi ci mostrano ciò che già pensiamo.|Os algoritmos mostram-nos aquilo em que já pensamos.|Алгоритмы показывают нам то, о чём мы и так думаем.|Algoritmii ne arată ceea ce gândim deja.
Conviene desconfiar de los titulares sensacionalistas.|It is best to be wary of sensationalist headlines.|Il faut se méfier des titres à sensation.|Man sollte reißerischen Schlagzeilen mit Vorsicht begegnen.|È bene diffidare dei titoli sensazionalistici.|É aconselhável desconfiar das manchetes sensacionalistas.|К сенсационным заголовкам следует относиться с недоверием.|Este bine să te îndoiești de titlurile senzaționaliste.
`);

  /* 39 Quejas y negociación */
  W(39, `
Devolución|Refund|Remboursement|Rückerstattung|Rimborso|Reembolso|Возврат денег|Rambursare
Factura|Invoice|Facture|Rechnung|Fattura|Fatura|Счёт|Factură
Recibo|Receipt|Reçu|Quittung|Ricevuta|Recibo|Квитанция|Chitanță
Atención al cliente|Customer service|Service client|Kundenservice|Assistenza clienti|Apoio ao cliente|Служба поддержки|Serviciu clienți
Negociar|To negotiate|Négocier|Verhandeln|Negoziare|Negociar|Вести переговоры|A negocia
Oferta|Offer|Offre|Angebot|Offerta|Oferta|Предложение|Ofertă
Condición|Condition|Condition|Bedingung|Condizione|Condição|Условие|Condiție
Rechazar|To reject|Refuser|Ablehnen|Rifiutare|Recusar|Отклонять|A refuza
Retraso|Delay|Retard|Verspätung|Ritardo|Atraso|Задержка|Întârziere
Responsable|Person in charge|Responsable|Verantwortlicher|Responsabile|Responsável|Ответственный|Responsabil
Cancelación|Cancellation|Annulation|Stornierung|Annullamento|Cancelamento|Отмена|Anulare
Solución|Solution|Solution|Lösung|Soluzione|Solução|Решение|Soluție
`);
  S(39, `
Llevo una semana esperando una respuesta.|I've been waiting a week for a reply.|Cela fait une semaine que j'attends une réponse.|Ich warte schon seit einer Woche auf eine Antwort.|È da una settimana che aspetto una risposta.|Há uma semana que estou à espera de uma resposta.|Я уже неделю жду ответа.|De o săptămână aștept un răspuns.
Quiero hablar con el responsable.|I'd like to speak to the person in charge.|Je voudrais parler au responsable.|Ich möchte mit dem Verantwortlichen sprechen.|Vorrei parlare con il responsabile.|Quero falar com o responsável.|Я хочу поговорить с руководителем.|Vreau să vorbesc cu persoana responsabilă.
Me gustaría que me devolvieran el dinero.|I'd like my money back.|J'aimerais qu'on me rembourse.|Ich möchte, dass man mir das Geld zurückgibt.|Vorrei che mi restituissero i soldi.|Gostaria que me devolvessem o dinheiro.|Я хотел бы, чтобы мне вернули деньги.|Aș dori să mi se returneze banii.
Propongo una solución que beneficie a ambos.|I propose a solution that would benefit both parties.|Je propose une solution qui soit avantageuse pour les deux parties.|Ich schlage eine Lösung vor, von der beide Seiten profitieren.|Propongo una soluzione che vada a vantaggio di entrambi.|Proponho uma solução que beneficie ambas as partes.|Я предлагаю решение, которое будет выгодно для обеих сторон.|Propun o soluție care să fie în beneficiul ambelor părți.
No acepto esa condición.|I do not accept that condition.|Je n'accepte pas cette condition.|Diese Bedingung akzeptiere ich nicht.|Non accetto questa condizione.|Não aceito essa condição.|Я не согласен с этим условием.|Nu accept această condiție.
Si no se resuelve, acudiré a otras instancias.|If the matter is not resolved, I will take it to other authorities.|Si le problème n'est pas résolu, je m'adresserai à d'autres instances.|Sollte sich die Angelegenheit nicht klären lassen, werde ich mich an andere Stellen wenden.|Se la questione non verrà risolta, mi rivolgerò ad altre istanze.|Se a questão não for resolvida, recorrerei a outras instâncias.|Если вопрос не будет решён, я обращусь в другие инстанции.|Dacă problema nu se rezolvă, voi apela la alte instanțe.
Agradezco su comprensión y su rapidez.|I appreciate your understanding and your prompt response.|Je vous remercie de votre compréhension et de votre réactivité.|Ich danke Ihnen für Ihr Verständnis und Ihre schnelle Bearbeitung.|Vi ringrazio per la comprensione e la tempestività.|Agradeço a sua compreensão e a sua rapidez.|Благодарю вас за понимание и оперативность.|Vă mulțumesc pentru înțelegere și pentru promptitudine.
`);
})();
