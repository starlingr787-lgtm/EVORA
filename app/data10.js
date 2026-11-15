/* Ampliación de la sesión 5 (C1, unidades 41-50): 12 palabras y 7 frases más por unidad (llegan a 20 y 12).
   Se añaden AL FINAL de cada unidad. Formato: es|en|fr|de|it|pt|ru|ro. Frases traducidas con DeepL y revisadas;
   las palabras sueltas las escribió Claude. Falta la revisión de hablantes nativos. */
(() => {
  const W = (ui, t) => addExtra(ui, "w", t), S = (ui, t) => addExtra(ui, "s", t);

  /* 40 Economía y trabajo */
  W(40, `
Oferta|Supply|Offre|Angebot|Offerta|Oferta|Предложение|Ofertă
Exportación|Export|Exportation|Export|Esportazione|Exportação|Экспорт|Export
Importación|Import|Importation|Import|Importazione|Importação|Импорт|Import
Salario mínimo|Minimum wage|Salaire minimum|Mindestlohn|Salario minimo|Salário mínimo|Минимальная зарплата|Salariu minim
Déficit|Deficit|Déficit|Defizit|Deficit|Défice|Дефицит|Deficit
Deuda pública|Public debt|Dette publique|Staatsverschuldung|Debito pubblico|Dívida pública|Государственный долг|Datorie publică
Banco central|Central bank|Banque centrale|Zentralbank|Banca centrale|Banco central|Центральный банк|Bancă centrală
Tasa de interés|Interest rate|Taux d'intérêt|Zinssatz|Tasso di interesse|Taxa de juro|Процентная ставка|Rată a dobânzii
Sector|Sector|Secteur|Sektor|Settore|Setor|Сектор|Sector
Precio|Price|Prix|Preis|Prezzo|Preço|Цена|Preț
Economía|Economy|Économie|Wirtschaft|Economia|Economia|Экономика|Economie
Despidos|Layoffs|Licenciements|Entlassungen|Licenziamenti|Despedimentos|Сокращения|Concedieri
`);
  S(40, `
La economía se está recuperando lentamente.|The economy is recovering slowly.|L'économie se redresse lentement.|Die Wirtschaft erholt sich langsam.|L'economia si sta riprendendo lentamente.|A economia está a recuperar lentamente.|Экономика постепенно восстанавливается.|Economia își revine încet.
Muchas empresas tuvieron que recortar personal.|Many companies had to make staff cuts.|De nombreuses entreprises ont dû réduire leurs effectifs.|Viele Unternehmen mussten Personal abbauen.|Molte aziende hanno dovuto ridurre il personale.|Muitas empresas tiveram de reduzir o quadro de pessoal.|Многим компаниям пришлось сократить штат.|Multe companii au fost nevoite să reducă personalul.
El costo de vida ha aumentado de forma notable.|The cost of living has risen significantly.|Le coût de la vie a considérablement augmenté.|Die Lebenshaltungskosten sind deutlich gestiegen.|Il costo della vita è aumentato notevolmente.|O custo de vida aumentou significativamente.|Стоимость жизни заметно выросла.|Costul vieții a crescut semnificativ.
Los salarios no crecen al mismo ritmo que los precios.|Wages are not rising at the same rate as prices.|Les salaires n'augmentent pas au même rythme que les prix.|Die Löhne steigen nicht im gleichen Tempo wie die Preise.|I salari non aumentano allo stesso ritmo dei prezzi.|Os salários não aumentam ao mesmo ritmo que os preços.|Зарплаты растут не такими же темпами, как цены.|Salariile nu cresc în același ritm cu prețurile.
Las exportaciones cayeron un cinco por ciento.|Exports fell by five per cent.|Les exportations ont baissé de 5 %.|Die Exporte gingen um fünf Prozent zurück.|Le esportazioni sono diminuite del cinque per cento.|As exportações registaram uma queda de cinco por cento.|Экспорт сократился на пять процентов.|Exporturile au scăzut cu cinci la sută.
El banco central decidió subir las tasas de interés.|The central bank decided to raise interest rates.|La banque centrale a décidé de relever ses taux d'intérêt.|Die Zentralbank hat beschlossen, die Zinssätze anzuheben.|La banca centrale ha deciso di aumentare i tassi di interesse.|O banco central decidiu aumentar as taxas de juro.|Центральный банк принял решение повысить процентные ставки.|Banca centrală a decis să majoreze ratele dobânzilor.
Se necesitan políticas para crear empleo estable.|Policies are needed to create stable employment.|Il faut mettre en place des politiques visant à créer des emplois stables.|Es sind politische Maßnahmen erforderlich, um stabile Arbeitsplätze zu schaffen.|Sono necessarie politiche volte a creare posti di lavoro stabili.|São necessárias políticas para criar emprego estável.|Необходимы меры по созданию стабильных рабочих мест.|Sunt necesare politici care să asigure crearea de locuri de muncă stabile.
`);

  /* 41 Política y sociedad */
  W(41, `
Presidente|President|Président|Präsident|Presidente|Presidente|Президент|Președinte
Parlamento|Parliament|Parlement|Parlament|Parlamento|Parlamento|Парламент|Parlament
Partido|Party|Parti|Partei|Partito|Partido|Партия|Partid
Oposición|Opposition|Opposition|Opposition|Opposizione|Oposição|Оппозиция|Opoziție
Voto|Vote|Vote|Stimme|Voto|Voto|Голос|Vot
Campaña|Campaign|Campagne|Wahlkampf|Campagna|Campanha|Кампания|Campanie
Democracia|Democracy|Démocratie|Demokratie|Democrazia|Democracia|Демократия|Democrație
Constitución|Constitution|Constitution|Verfassung|Costituzione|Constituição|Конституция|Constituție
Ministro|Minister|Ministre|Minister|Ministro|Ministro|Министр|Ministru
Soberanía|Sovereignty|Souveraineté|Souveränität|Sovranità|Soberania|Суверенитет|Suveranitate
Ideología|Ideology|Idéologie|Ideologie|Ideologia|Ideologia|Идеология|Ideologie
Referéndum|Referendum|Référendum|Volksabstimmung|Referendum|Referendo|Референдум|Referendum
`);
  S(41, `
El presidente anunció un paquete de medidas.|The President announced a package of measures.|Le président a annoncé une série de mesures.|Der Präsident kündigte ein Maßnahmenpaket an.|Il presidente ha annunciato un pacchetto di misure.|O presidente anunciou um pacote de medidas.|Президент объявил о пакете мер.|Președintele a anunțat un pachet de măsuri.
La oposición rechazó el proyecto de ley.|The opposition rejected the bill.|L'opposition a rejeté le projet de loi.|Die Opposition lehnte den Gesetzentwurf ab.|L'opposizione ha respinto il disegno di legge.|A oposição rejeitou o projeto de lei.|Оппозиция отклонила законопроект.|Opoziția a respins proiectul de lege.
Los partidos no lograron ponerse de acuerdo.|The parties were unable to reach an agreement.|Les partis ne sont pas parvenus à se mettre d'accord.|Die Parteien konnten sich nicht einigen.|I partiti non sono riusciti a trovare un accordo.|Os partidos não conseguiram chegar a um acordo.|Партии не смогли прийти к соглашению.|Partidele nu au reușit să ajungă la un acord.
Las encuestas anticipan unas elecciones muy reñidas.|The polls suggest the election will be very close.|Les sondages laissent présager des élections très serrées.|Umfragen deuten auf eine sehr knappe Wahl hin.|I sondaggi prevedono elezioni molto combattute.|As sondagens apontam para eleições muito renhidas.|Опросы предвещают очень напряжённую предвыборную борьбу.|Sondajele prevăd alegeri foarte strânse.
El Congreso debatirá la propuesta la próxima semana.|Congress will debate the proposal next week.|Le Congrès débattra de cette proposition la semaine prochaine.|Der Kongress wird den Vorschlag nächste Woche beraten.|Il Congresso discuterà la proposta la prossima settimana.|O Congresso irá debater a proposta na próxima semana.|Конгресс обсудит это предложение на следующей неделе.|Congresul va dezbate propunerea săptămâna viitoare.
Hay que fortalecer las instituciones democráticas.|We must strengthen democratic institutions.|Il faut renforcer les institutions démocratiques.|Die demokratischen Institutionen müssen gestärkt werden.|È necessario rafforzare le istituzioni democratiche.|É preciso reforçar as instituições democráticas.|Необходимо укреплять демократические институты.|Trebuie să consolidăm instituțiile democratice.
La participación ciudadana es esencial en una democracia.|Citizen participation is essential in a democracy.|La participation citoyenne est essentielle dans une démocratie.|Die Bürgerbeteiligung ist in einer Demokratie von entscheidender Bedeutung.|La partecipazione dei cittadini è fondamentale in una democrazia.|A participação dos cidadãos é essencial numa democracia.|Участие граждан играет важнейшую роль в демократии.|Participarea cetățenilor este esențială într-o democrație.
`);

  /* 42 Ciencia y ética */
  W(42, `
Clonación|Cloning|Clonage|Klonen|Clonazione|Clonagem|Клонирование|Clonare
Moral|Morality|Morale|Moral|Morale|Moral|Мораль|Morală
Límite|Limit|Limite|Grenze|Limite|Limite|Предел|Limită
Riesgo|Risk|Risque|Risiko|Rischio|Risco|Риск|Risc
Beneficio|Benefit|Avantage thérapeutique|Nutzen|Beneficio|Benefício|Польза|Beneficiu
Paciente|Patient|Patient|Patient|Paziente|Paciente|Пациент|Pacient
Ensayo clínico|Clinical trial|Essai clinique|Klinische Studie|Sperimentazione clinica|Ensaio clínico|Клиническое исследование|Studiu clinic
Dignidad|Dignity|Dignité|Würde|Dignità|Dignidade|Достоинство|Demnitate
Derechos humanos|Human rights|Droits de l'homme|Menschenrechte|Diritti umani|Direitos humanos|Права человека|Drepturile omului
Manipulación|Manipulation|Manipulation|Manipulation|Manipolazione|Manipulação|Манипуляция|Manipulare
Confidencialidad|Confidentiality|Confidentialité|Vertraulichkeit|Riservatezza|Confidencialidade|Конфиденциальность|Confidențialitate
Progreso|Progress|Progrès|Fortschritt|Progresso|Progresso|Прогресс|Progres
`);
  S(42, `
¿Hasta dónde se puede llegar en nombre del progreso?|How far can we go in the name of progress?|Jusqu'où peut-on aller au nom du progrès ?|Wie weit darf man im Namen des Fortschritts gehen?|Fino a che punto ci si può spingere in nome del progresso?|Até onde se pode ir em nome do progresso?|Как далеко можно зайти во имя прогресса?|Până unde se poate merge în numele progresului?
Los investigadores deben respetar la dignidad humana.|Researchers must respect human dignity.|Les chercheurs doivent respecter la dignité humaine.|Forscher müssen die Menschenwürde achten.|I ricercatori devono rispettare la dignità umana.|Os investigadores devem respeitar a dignidade humana.|Исследователи должны уважать человеческое достоинство.|Cercetătorii trebuie să respecte demnitatea umană.
Este tratamiento aún se encuentra en fase experimental.|This treatment is still at the experimental stage.|Ce traitement en est encore au stade expérimental.|Diese Behandlung befindet sich noch in der Versuchsphase.|Questo trattamento è ancora in fase sperimentale.|Este tratamento ainda se encontra em fase experimental.|Этот метод лечения пока находится на экспериментальной стадии.|Acest tratament se află încă în faza experimentală.
Se debate si es ético modificar los genes.|There is a debate over whether it is ethical to modify genes.|La question de savoir s'il est éthique de modifier les gènes fait l'objet d'un débat.|Es wird diskutiert, ob es ethisch vertretbar ist, Gene zu verändern.|Si discute se sia etico modificare i geni.|Discute-se se é ético modificar os genes.|Ведутся споры о том, этично ли изменять гены.|Se dezbate dacă modificarea genelor este etică.
Los comités de ética supervisan cada estudio.|Ethics committees oversee each study.|Chaque étude est supervisée par des comités d'éthique.|Jede Studie wird von Ethikkommissionen überwacht.|Ogni studio è supervisionato dai comitati etici.|Os comités de ética supervisionam cada estudo.|Каждое исследование контролируется комитетами по этике.|Fiecare studiu este supravegheat de comitetele de etică.
Los beneficios no justifican cualquier riesgo.|The benefits do not justify every risk.|Les avantages ne justifient pas n'importe quel risque.|Die Vorteile rechtfertigen nicht jedes Risiko.|I benefici non giustificano qualsiasi rischio.|Os benefícios não justificam qualquer risco.|Выгоды не оправдывают любой риск.|Beneficiile nu justifică orice risc.
La transparencia es clave para generar confianza.|Transparency is key to building trust.|La transparence est essentielle pour instaurer la confiance.|Transparenz ist entscheidend, um Vertrauen zu schaffen.|La trasparenza è fondamentale per creare fiducia.|A transparência é fundamental para gerar confiança.|Прозрачность — залог доверия.|Transparența este esențială pentru a inspira încredere.
`);

  /* 43 Arte y literatura */
  W(43, `
Escritor|Writer|Écrivain|Schriftsteller|Scrittore|Escritor|Писатель|Scriitor
Pintura|Painting|Peinture|Malerei|Pittura|Pintura|Живопись|Pictură
Escultura|Sculpture|Sculpture|Skulptur|Scultura|Escultura|Скульптура|Sculptură
Exposición|Exhibition|Exposition|Ausstellung|Mostra|Exposição|Выставка|Expoziție
Trama|Plot|Intrigue|Handlung|Trama|Enredo|Сюжет|Intrigă
Personaje|Character|Personnage|Figur|Personaggio|Personagem|Персонаж|Personaj
Género literario|Literary genre|Genre littéraire|Literaturgattung|Genere letterario|Género literário|Литературный жанр|Gen literar
Inspiración|Inspiration|Inspiration|Inspiration|Ispirazione|Inspiração|Вдохновение|Inspirație
Simbolismo|Symbolism|Symbolisme|Symbolik|Simbolismo|Simbolismo|Символизм|Simbolism
Estética|Aesthetics|Esthétique|Ästhetik|Estetica|Estética|Эстетика|Estetică
Obra|Work|Œuvre|Werk|Opera|Obra|Произведение|Operă
Galería|Gallery|Galerie|Galerie|Galleria|Galeria|Галерея|Galerie
`);
  S(43, `
El autor combina realidad y fantasía con maestría.|The author masterfully blends reality and fantasy.|L'auteur mêle avec brio réalité et fantaisie.|Der Autor verbindet Realität und Fantasie meisterhaft miteinander.|L'autore fonde con maestria realtà e fantasia.|O autor combina realidade e fantasia com mestria.|Автор мастерски сочетает реальность и фантазию.|Autorul îmbină cu măiestrie realitatea și fantezia.
La exposición reúne obras de varios siglos.|The exhibition brings together works spanning several centuries.|L'exposition rassemble des œuvres datant de plusieurs siècles.|Die Ausstellung vereint Werke aus mehreren Jahrhunderten.|La mostra raccoglie opere risalenti a diversi secoli.|A exposição reúne obras de vários séculos.|На выставке представлены произведения, созданные на протяжении нескольких столетий.|Expoziția reunește opere din mai multe secole.
Su estilo rompe con las normas tradicionales.|His style breaks with traditional norms.|Son style rompt avec les normes traditionnelles.|Sein Stil bricht mit den traditionellen Normen.|Il suo stile rompe con le convenzioni tradizionali.|O seu estilo rompe com as normas tradicionais.|Его стиль нарушает традиционные нормы.|Stilul său încalcă normele tradiționale.
El cuadro transmite una profunda sensación de soledad.|The painting conveys a profound sense of loneliness.|Ce tableau dégage un profond sentiment de solitude.|Das Gemälde vermittelt ein tiefes Gefühl der Einsamkeit.|Il quadro trasmette un profondo senso di solitudine.|O quadro transmite uma profunda sensação de solidão.|Картина вызывает глубокое ощущение одиночества.|Tabloul transmite un profund sentiment de singurătate.
La película obtuvo varios premios internacionales.|The film won several international awards.|Le film a remporté plusieurs prix internationaux.|Der Film wurde mit mehreren internationalen Preisen ausgezeichnet.|Il film ha ottenuto diversi premi internazionali.|O filme recebeu vários prémios internacionais.|Фильм получил несколько международных наград.|Filmul a câștigat mai multe premii internaționale.
Esa novela fue traducida a más de treinta idiomas.|That novel has been translated into more than thirty languages.|Ce roman a été traduit dans plus de trente langues.|Dieser Roman wurde in mehr als dreißig Sprachen übersetzt.|Quel romanzo è stato tradotto in più di trenta lingue.|Esse romance foi traduzido para mais de trinta línguas.|Этот роман был переведён на более чем тридцать языков.|Romanul respectiv a fost tradus în peste treizeci de limbi.
El arte refleja los conflictos de cada época.|Art reflects the conflicts of each era.|L'art reflète les conflits de chaque époque.|Die Kunst spiegelt die Konflikte jeder Epoche wider.|L'arte riflette i conflitti di ogni epoca.|A arte reflete os conflitos de cada época.|Искусство отражает конфликты каждой эпохи.|Arta reflectă conflictele fiecărei epoci.
`);

  /* 44 Historia y memoria */
  W(44, `
Guerra|War|Guerre|Krieg|Guerra|Guerra|Война|Război
Paz|Peace|Paix|Frieden|Pace|Paz|Мир|Pace
Independencia|Independence|Indépendance|Unabhängigkeit|Indipendenza|Independência|Независимость|Independență
Tratado|Treaty|Traité|Vertrag|Trattato|Tratado|Договор|Tratat
Dictadura|Dictatorship|Dictature|Diktatur|Dittatura|Ditadura|Диктатура|Dictatură
Colonia|Colony|Colonie|Kolonie|Colonia|Colónia|Колония|Colonie
Reino|Kingdom|Royaume|Königreich|Regno|Reino|Королевство|Regat
Batalla|Battle|Bataille|Schlacht|Battaglia|Batalha|Битва|Bătălie
Civilización|Civilisation|Civilisation|Zivilisation|Civiltà|Civilização|Цивилизация|Civilizație
Época|Era|Époque|Epoche|Epoca|Época|Эпоха|Epocă
Historiador|Historian|Historien|Historiker|Storico|Historiador|Историк|Istoric
Memoria|Memory|Mémoire|Gedächtnis|Memoria|Memória|Память|Memorie
`);
  S(44, `
La guerra dejó profundas huellas en la población.|The war left a deep mark on the population.|La guerre a profondément marqué la population.|Der Krieg hat tiefe Spuren in der Bevölkerung hinterlassen.|La guerra ha lasciato profonde tracce nella popolazione.|A guerra deixou marcas profundas na população.|Война оставила глубокий след в жизни людей.|Războiul a lăsat urme adânci în rândul populației.
Los historiadores analizan las causas del conflicto.|Historians are analysing the causes of the conflict.|Les historiens analysent les causes du conflit.|Historiker untersuchen die Ursachen des Konflikts.|Gli storici analizzano le cause del conflitto.|Os historiadores analisam as causas do conflito.|Историки анализируют причины конфликта.|Istoricii analizează cauzele conflictului.
Ese tratado puso fin a décadas de enfrentamiento.|That treaty brought an end to decades of conflict.|Ce traité a mis fin à des décennies de conflits.|Dieser Vertrag beendete jahrzehntelange Auseinandersetzungen.|Quel trattato pose fine a decenni di conflitti.|Esse tratado pôs fim a décadas de conflito.|Этот договор положил конец многолетнему противостоянию.|Acest tratat a pus capăt unor decenii de confruntări.
La independencia se proclamó a principios del siglo.|Independence was declared at the beginning of the century.|L'indépendance a été proclamée au début du siècle.|Die Unabhängigkeit wurde zu Beginn des Jahrhunderts ausgerufen.|L'indipendenza fu proclamata all'inizio del secolo.|A independência foi proclamada no início do século.|Независимость была провозглашена в начале века.|Independența a fost proclamată la începutul secolului.
Conviene aprender de los errores del pasado.|It is worth learning from the mistakes of the past.|Il faut tirer les leçons des erreurs du passé.|Man sollte aus den Fehlern der Vergangenheit lernen.|È bene imparare dagli errori del passato.|É importante aprender com os erros do passado.|Стоит извлекать уроки из ошибок прошлого.|Este bine să învățăm din greșelile trecutului.
El museo conserva documentos de aquella época.|The museum holds documents from that period.|Le musée conserve des documents datant de cette époque.|Das Museum bewahrt Dokumente aus jener Zeit auf.|Il museo conserva documenti di quel periodo.|O museu conserva documentos daquela época.|В музее хранятся документы того времени.|Muzeul păstrează documente din acea perioadă.
La memoria histórica ayuda a evitar que se repitan.|Historical memory helps to prevent such events from happening again.|La mémoire historique permet d'éviter que cela ne se reproduise.|Das historische Gedächtnis hilft, eine Wiederholung zu verhindern.|La memoria storica contribuisce a evitare che tali eventi si ripetano.|A memória histórica ajuda a evitar que se repitam.|Историческая память помогает не допустить их повторения.|Memoria istorică contribuie la prevenirea repetării acestor evenimente.
`);

  /* 45 Lenguaje y comunicación */
  W(45, `
Significado|Meaning|Sens|Bedeutung|Significato|Significado|Значение|Semnificație
Contexto|Context|Contexte|Kontext|Contesto|Contexto|Контекст|Context
Sarcasmo|Sarcasm|Sarcasme|Sarkasmus|Sarcasmo|Sarcasmo|Сарказм|Sarcasm
Gesto|Gesture|Geste|Geste|Gesto|Gesto|Жест|Gest
Expresión|Expression|Expression|Ausdruck|Espressione|Expressão|Выражение|Expresie
Refrán|Proverb|Proverbe|Sprichwort|Proverbio|Provérbio|Пословица|Proverb
Traducción|Translation|Traduction|Übersetzung|Traduzione|Tradução|Перевод|Traducere
Pronunciación|Pronunciation|Prononciation|Aussprache|Pronuncia|Pronúncia|Произношение|Pronunție
Acento|Accent|Accent|Akzent|Accento|Sotaque|Акцент|Accent
Jerga|Slang|Argot|Jargon|Gergo|Gíria|Жаргон|Argou
Mensaje|Message|Message|Botschaft|Messaggio|Mensagem|Сообщение|Mesaj
Interpretar|To interpret|Interpréter|Deuten|Interpretare|Interpretar|Истолковывать|A interpreta
`);
  S(45, `
No fue mi intención ofenderte.|I didn't mean to offend you.|Je ne voulais pas t'offenser.|Ich wollte dich nicht beleidigen.|Non era mia intenzione offenderti.|Não foi minha intenção ofender-te.|Я не хотел тебя обидеть.|Nu am vrut să te jignesc.
Lo dije en broma, pero lo tomaron en serio.|I said it as a joke, but they took it seriously.|Je l'ai dit pour plaisanter, mais ils l'ont pris au sérieux.|Ich habe das nur im Scherz gesagt, aber sie haben es ernst genommen.|L'ho detto per scherzo, ma loro l'hanno preso sul serio.|Disse-o em tom de brincadeira, mas eles levaram-no a sério.|Я сказал это в шутку, но они восприняли это всерьёз.|Am spus-o în glumă, dar ei au luat-o în serios.
Cada cultura interpreta los gestos de manera distinta.|Every culture interprets gestures differently.|Chaque culture interprète les gestes différemment.|Jede Kultur interpretiert Gesten auf unterschiedliche Weise.|Ogni cultura interpreta i gesti in modo diverso.|Cada cultura interpreta os gestos de forma diferente.|В каждой культуре жесты интерпретируются по-разному.|Fiecare cultură interpretează gesturile în mod diferit.
Es mejor aclarar el mensaje antes de que se malinterprete.|It is best to clarify the message before it is misunderstood.|Il vaut mieux clarifier le message avant qu'il ne soit mal interprété.|Es ist besser, die Botschaft zu präzisieren, bevor sie missverstanden wird.|È meglio chiarire il messaggio prima che venga frainteso.|É melhor esclarecer a mensagem antes que seja mal interpretada.|Лучше прояснить смысл сообщения, пока его не истолковали неверно.|Este mai bine să clarifici mesajul înainte ca acesta să fie interpretat greșit.
El contexto determina el significado de una palabra.|Context determines the meaning of a word.|C'est le contexte qui détermine le sens d'un mot.|Der Kontext bestimmt die Bedeutung eines Wortes.|È il contesto a determinare il significato di una parola.|O contexto determina o significado de uma palavra.|Контекст определяет значение слова.|Contextul determină sensul unui cuvânt.
Hay expresiones que no se pueden traducir literalmente.|There are some expressions that cannot be translated literally.|Il existe des expressions qui ne peuvent pas être traduites littéralement.|Es gibt Ausdrücke, die sich nicht wörtlich übersetzen lassen.|Ci sono espressioni che non si possono tradurre letteralmente.|Há expressões que não podem ser traduzidas literalmente.|Есть выражения, которые невозможно перевести дословно.|Există expresii care nu pot fi traduse literal.
Escuchar con atención evita muchos malentendidos.|Listening carefully prevents many misunderstandings.|Écouter attentivement permet d'éviter de nombreux malentendus.|Aufmerksames Zuhören beugt vielen Missverständnissen vor.|Ascoltare con attenzione evita molti malintesi.|Ouvir com atenção evita muitos mal-entendidos.|Внимательное слушание позволяет избежать многих недоразумений.|A asculta cu atenție previne multe neînțelegeri.
`);

  /* 46 Derecho y justicia */
  W(46, `
Juez|Judge|Juge|Richter|Giudice|Juiz|Судья|Judecător
Acusado|Defendant|Accusé|Angeklagter|Imputato|Arguido|Обвиняемый|Inculpat
Culpable|Guilty|Coupable|Schuldig|Colpevole|Culpado|Виновный|Vinovat
Inocente|Innocent|Innocent|Unschuldig|Innocente|Inocente|Невиновный|Nevinovat
Delito|Offence|Délit|Straftat|Reato|Delito|Преступление|Infracțiune
Pena|Penalty|Peine|Strafe|Pena|Pena|Наказание|Pedeapsă
Fiscal|Prosecutor|Procureur|Staatsanwalt|Pubblico ministero|Procurador|Прокурор|Procuror
Jurado|Jury|Jury|Jury|Giuria|Júri|Присяжные|Juriu
Prueba|Evidence|Preuve|Beweismittel|Prova|Prova|Улика|Probă
Ley|Law|Loi|Gesetz|Legge|Lei|Закон|Lege
Contrato|Contract|Contrat|Vertrag|Contratto|Contrato|Контракт|Contract
Multa|Fine|Amende|Geldstrafe|Multa|Multa|Штраф|Amendă
`);
  S(46, `
El acusado se declaró inocente.|The defendant pleaded not guilty.|L'accusé a plaidé non coupable.|Der Angeklagte plädierte auf „nicht schuldig“.|L'imputato si è dichiarato innocente.|O arguido declarou-se inocente.|Обвиняемый заявил о своей невиновности.|Inculpatul s-a declarat nevinovat.
El juez ordenó la liberación inmediata del detenido.|The judge ordered the immediate release of the detainee.|Le juge a ordonné la libération immédiate du détenu.|Der Richter ordnete die sofortige Freilassung des Festgenommenen an.|Il giudice ha ordinato l'immediato rilascio del detenuto.|O juiz ordenou a libertação imediata do detido.|Судья распорядился немедленно освободить задержанного.|Judecătorul a dispus eliberarea imediată a deținutului.
La ley protege los derechos de los consumidores.|The law protects consumers' rights.|La loi protège les droits des consommateurs.|Das Gesetz schützt die Rechte der Verbraucher.|La legge tutela i diritti dei consumatori.|A lei protege os direitos dos consumidores.|Закон защищает права потребителей.|Legea protejează drepturile consumatorilor.
El caso se resolvió fuera de los tribunales.|The case was settled out of court.|L'affaire a été réglée à l'amiable.|Der Fall wurde außergerichtlich beigelegt.|Il caso è stato risolto in via extragiudiziale.|O caso foi resolvido fora dos tribunais.|Дело было урегулировано вне суда.|Cazul a fost soluționat în afara instanțelor.
La fiscalía pidió una pena de cinco años de prisión.|The prosecution sought a five-year prison sentence.|Le parquet a requis une peine de cinq ans d'emprisonnement.|Die Staatsanwaltschaft forderte eine Freiheitsstrafe von fünf Jahren.|La procura ha chiesto una pena di cinque anni di reclusione.|O Ministério Público pediu uma pena de cinco anos de prisão.|Прокуратура запросила наказание в виде пяти лет лишения свободы.|Procuratura a solicitat o pedeapsă de cinci ani de închisoare.
Todos somos iguales ante la ley.|We are all equal before the law.|Nous sommes tous égaux devant la loi.|Vor dem Gesetz sind wir alle gleich.|Siamo tutti uguali davanti alla legge.|Somos todos iguais perante a lei.|Все мы равны перед законом.|Toți suntem egali în fața legii.
El jurado deliberó durante dos días.|The jury deliberated for two days.|Le jury a délibéré pendant deux jours.|Die Jury beriet zwei Tage lang.|La giuria ha deliberato per due giorni.|O júri deliberou durante dois dias.|Жюри совещалось в течение двух дней.|Juriul a deliberat timp de două zile.
`);

  /* 47 Empresa y liderazgo */
  W(47, `
Empresa|Company|Entreprise|Unternehmen|Azienda|Empresa|Компания|Companie
Plantilla|Workforce|Effectifs|Belegschaft|Organico|Quadro de pessoal|Штат сотрудников|Personal
Accionista|Shareholder|Actionnaire|Aktionär|Azionista|Acionista|Акционер|Acționar
Sucursal|Branch|Succursale|Niederlassung|Filiale|Sucursal|Филиал|Filială
Ventas|Sales|Ventes|Umsatz|Vendite|Vendas|Продажи|Vânzări
Ganancias|Earnings|Bénéfices|Gewinne|Guadagni|Lucros|Доходы компании|Câștiguri
Cliente|Customer|Client|Kunde|Cliente|Cliente|Клиент|Client
Proveedor|Supplier|Fournisseur|Lieferant|Fornitore|Fornecedor|Поставщик|Furnizor
Reunión|Meeting|Réunion|Besprechung|Riunione|Reunião|Совещание|Ședință
Plan de negocio|Business plan|Plan d'affaires|Geschäftsplan|Piano aziendale|Plano de negócios|Бизнес-план|Plan de afaceri
Motivar|To motivate|Motiver|Motivieren|Motivare|Motivar|Мотивировать|A motiva
Marca|Brand|Marque|Marke|Marchio|Marca|Бренд|Marcă
`);
  S(47, `
Nuestro objetivo es duplicar las ventas este año.|Our aim is to double our sales this year.|Notre objectif est de doubler notre chiffre d'affaires cette année.|Unser Ziel ist es, den Umsatz in diesem Jahr zu verdoppeln.|Il nostro obiettivo è raddoppiare le vendite quest'anno.|O nosso objetivo é duplicar as vendas este ano.|Наша цель — удвоить объем продаж в этом году.|Obiectivul nostru este să dublăm vânzările în acest an.
El equipo directivo aprobó el nuevo plan.|The management team approved the new plan.|L'équipe de direction a approuvé le nouveau plan.|Die Geschäftsleitung hat den neuen Plan genehmigt.|Il gruppo dirigente ha approvato il nuovo piano.|A equipa de direção aprovou o novo plano.|Руководство одобрило новый план.|Echipa de conducere a aprobat noul plan.
Hemos logrado reducir los costos sin despedir a nadie.|We have managed to cut costs without making anyone redundant.|Nous avons réussi à réduire les coûts sans licencier personne.|Es ist uns gelungen, die Kosten zu senken, ohne jemanden zu entlassen.|Siamo riusciti a ridurre i costi senza licenziare nessuno.|Conseguimos reduzir os custos sem despedir ninguém.|Нам удалось сократить расходы, не уволив никого.|Am reușit să reducem costurile fără a concedia pe nimeni.
La reunión servirá para fijar prioridades.|The meeting will serve to set priorities.|Cette réunion permettra de définir les priorités.|Das Treffen dient dazu, Prioritäten festzulegen.|L'incontro servirà a stabilire le priorità.|A reunião servirá para definir prioridades.|Эта встреча позволит определить приоритеты.|Întâlnirea va servi la stabilirea priorităților.
Los accionistas esperan resultados a corto plazo.|Shareholders expect results in the short term.|Les actionnaires attendent des résultats à court terme.|Die Aktionäre erwarten kurzfristige Ergebnisse.|Gli azionisti si aspettano risultati a breve termine.|Os acionistas esperam resultados a curto prazo.|Акционеры ожидают результатов в краткосрочной перспективе.|Acționarii se așteaptă la rezultate pe termen scurt.
Es fundamental motivar a los empleados.|It is essential to motivate employees.|Il est essentiel de motiver les employés.|Es ist von entscheidender Bedeutung, die Mitarbeiter zu motivieren.|È fondamentale motivare i dipendenti.|É fundamental motivar os colaboradores.|Очень важно мотивировать сотрудников.|Este esențial să îi motivăm pe angajați.
La empresa abrirá una sucursal en el extranjero.|The company is set to open a branch abroad.|L'entreprise va ouvrir une succursale à l'étranger.|Das Unternehmen wird eine Niederlassung im Ausland eröffnen.|L'azienda aprirà una filiale all'estero.|A empresa vai abrir uma sucursal no estrangeiro.|Компания откроет филиал за рубежом.|Compania va deschide o filială în străinătate.
`);

  /* 48 Medio ambiente y futuro */
  W(48, `
Clima|Climate|Climat|Klima|Clima|Clima|Климат|Climă
Calentamiento global|Global warming|Réchauffement climatique|Erderwärmung|Riscaldamento globale|Aquecimento global|Глобальное потепление|Încălzire globală
Reciclaje|Recycling|Recyclage|Recycling|Riciclaggio|Reciclagem|Переработка отходов|Reciclare
Residuos|Waste|Déchets|Abfall|Rifiuti|Resíduos|Отходы|Deșeuri
Contaminación|Pollution|Pollution|Verschmutzung|Inquinamento|Poluição|Загрязнение|Poluare
Sequía|Drought|Sécheresse|Dürre|Siccità|Seca|Засуха|Secetă
Inundación|Flood|Inondation|Überschwemmung|Alluvione|Inundação|Наводнение|Inundație
Energía solar|Solar energy|Énergie solaire|Solarenergie|Energia solare|Energia solar|Солнечная энергия|Energie solară
Especie|Species|Espèce|Art|Specie|Espécie|Вид|Specie
Extinción|Extinction|Extinction|Aussterben|Estinzione|Extinção|Вымирание|Dispariție
Combustible fósil|Fossil fuel|Combustible fossile|Fossiler Brennstoff|Combustibile fossile|Combustível fóssil|Ископаемое топливо|Combustibil fosil
Ecosistema|Ecosystem|Écosystème|Ökosystem|Ecosistema|Ecossistema|Экосистема|Ecosistem
`);
  S(48, `
El nivel del mar sube cada año.|Sea levels are rising every year.|Le niveau de la mer monte chaque année.|Der Meeresspiegel steigt jedes Jahr.|Il livello del mare sale ogni anno.|O nível do mar sobe todos os anos.|Уровень моря повышается с каждым годом.|Nivelul mării crește în fiecare an.
Debemos apostar por las energías limpias.|We must commit to clean energy.|Nous devons miser sur les énergies propres.|Wir müssen auf saubere Energien setzen.|Dobbiamo puntare sulle energie pulite.|Temos de apostar nas energias limpas.|Мы должны сделать ставку на экологически чистые источники энергии.|Trebuie să mizăm pe energiile curate.
El reciclaje no basta para resolver el problema.|Recycling alone is not enough to solve the problem.|Le recyclage ne suffit pas à résoudre le problème.|Recycling allein reicht nicht aus, um das Problem zu lösen.|Il riciclaggio non basta a risolvere il problema.|A reciclagem não é suficiente para resolver o problema.|Переработка отходов не решает проблему.|Reciclarea nu este suficientă pentru a rezolva problema.
Las sequías son cada vez más frecuentes.|Droughts are becoming increasingly frequent.|Les sécheresses sont de plus en plus fréquentes.|Dürren treten immer häufiger auf.|Le siccità sono sempre più frequenti.|As secas são cada vez mais frequentes.|Засухи становятся всё более частыми.|Secetele sunt din ce în ce mai frecvente.
Muchas especies están en peligro de extinción.|Many species are at risk of extinction.|De nombreuses espèces sont menacées d'extinction.|Viele Arten sind vom Aussterben bedroht.|Molte specie sono a rischio di estinzione.|Muitas espécies estão em risco de extinção.|Многие виды находятся под угрозой исчезновения.|Multe specii sunt pe cale de dispariție.
Los gobiernos deben aplicar sanciones más severas.|Governments must impose stricter sanctions.|Les gouvernements doivent appliquer des sanctions plus sévères.|Die Regierungen müssen strengere Sanktionen verhängen.|I governi devono applicare sanzioni più severe.|Os governos devem aplicar sanções mais severas.|Правительства должны вводить более строгие санкции.|Guvernele trebuie să aplice sancțiuni mai severe.
Cuidar el planeta es una responsabilidad compartida.|Looking after the planet is a shared responsibility.|Prendre soin de la planète est une responsabilité partagée.|Der Schutz unseres Planeten ist eine gemeinsame Verantwortung.|Prendersi cura del pianeta è una responsabilità condivisa.|Cuidar do planeta é uma responsabilidade partilhada.|Забота о планете — это наша общая ответственность.|Grija față de planetă este o responsabilitate comună.
`);

  /* 49 Matices y registro */
  W(49, `
Formal|Formal|Formel|Förmlich|Formale|Formal|Формальный|Formal
Informal|Informal|Informel|Ungezwungen|Informale|Informal|Неформальный|Informal
Directo|Direct|Direct|Direkt|Diretto|Direto|Прямой|Direct
Cortés|Polite|Poli|Höflich|Cortese|Cortês|Вежливый|Politicos
Sincero|Sincere|Sincère|Aufrichtig|Sincero|Sincero|Искренний|Sincer
Ofender|To offend|Offenser|Beleidigen|Offendere|Ofender|Обижать|A jigni
Énfasis|Emphasis|Insistance|Nachdruck|Enfasi|Ênfase|Акцент|Accent
Matizar|To qualify|Nuancer|Differenzieren|Sfumare|Matizar|Уточнять|A nuanța
Prudente|Cautious|Prudent|Vorsichtig|Prudente|Prudente|Осторожный|Prudent
Diplomático|Diplomatic|Diplomate|Diplomatisch|Diplomatico|Diplomático|Дипломатичный|Diplomatic
Elocuente|Eloquent|Éloquent|Redegewandt|Eloquente|Eloquente|Красноречивый|Elocvent
Neutral|Neutral|Neutre|Neutral|Neutrale|Neutro|Нейтральный|Neutru
`);
  S(49, `
Dependiendo del contexto, esa palabra puede ofender.|Depending on the context, that word may be offensive.|Selon le contexte, ce mot peut être offensant.|Je nach Kontext kann dieses Wort beleidigend sein.|A seconda del contesto, quella parola potrebbe risultare offensiva.|Dependendo do contexto, essa palavra pode ser ofensiva.|В зависимости от контекста это слово может показаться оскорбительным.|În funcție de context, acest cuvânt poate fi jignitor.
Con los amigos hablo de forma más relajada.|I speak more casually with my friends.|Avec mes amis, je parle de manière plus détendue.|Mit Freunden rede ich lockerer.|Con gli amici parlo in modo più rilassato.|Com os amigos, falo de forma mais descontraída.|С друзьями я разговариваю более непринуждённо.|Cu prietenii vorbesc într-un mod mai relaxat.
Evité decirlo de manera tan directa.|I avoided putting it quite so bluntly.|J'ai évité de le dire aussi directement.|Ich habe vermieden, das so direkt zu sagen.|Ho evitato di dirlo in modo così diretto.|Evitei dizê-lo de forma tão direta.|Я постарался не выразиться так прямо.|Am evitat să o spun atât de direct.
El mensaje era cortés pero firme.|The message was polite but firm.|Le message était courtois mais ferme.|Die Nachricht war höflich, aber bestimmt.|Il messaggio era cortese ma deciso.|A mensagem era cortês, mas firme.|Сообщение было вежливым, но решительным.|Mesajul era politicos, dar ferm.
Esa expresión suena demasiado formal en una charla casual.|That phrase sounds far too formal in a casual conversation.|Cette expression semble trop formelle dans une conversation informelle.|Dieser Ausdruck klingt in einem ungezwungenen Gespräch zu förmlich.|Quell'espressione suona troppo formale in una conversazione informale.|Essa expressão soa demasiado formal numa conversa informal.|Эта фраза звучит слишком формально в непринуждённой беседе.|Expresia aceea sună prea formală într-o conversație informală.
Escojo mis palabras con cuidado ante un público desconocido.|I choose my words carefully when speaking to an unfamiliar audience.|Je choisis mes mots avec soin face à un public que je ne connais pas.|Vor einem mir unbekannten Publikum wähle ich meine Worte sorgfältig aus.|Scelgo con cura le parole quando mi trovo di fronte a un pubblico che non conosco.|Escolho cuidadosamente as minhas palavras perante um público desconhecido.|Перед незнакомой аудиторией я тщательно подбираю слова.|Îmi aleg cu grijă cuvintele când mă adresez unui public necunoscut.
A veces, el silencio dice más que las palabras.|Sometimes, silence speaks louder than words.|Parfois, le silence en dit plus long que les mots.|Manchmal sagt Schweigen mehr als Worte.|A volte il silenzio dice più delle parole.|Às vezes, o silêncio diz mais do que as palavras.|Иногда молчание говорит больше, чем слова.|Uneori, tăcerea spune mai mult decât cuvintele.
`);
})();
