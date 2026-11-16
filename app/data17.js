/* Cuarta ampliación, B2 (unidades 31-40): 8 palabras y 5 frases más por unidad (llegan a 34 y 21). Formato: es|en|fr|de|it|pt|ru|ro.
   Escritas por Claude (español neutro latinoamericano); sin revisión de hablantes nativos. */
(() => {
  const W = (ui, t) => addExtra(ui, "w", t), S = (ui, t) => addExtra(ui, "s", t);

  /* 30 Opinar y debatir */
  W(30, `
Réplica|Rebuttal|Réplique|Erwiderung|Replica|Réplica|Возражение|Replică
Defender|To defend|Défendre|verteidigen|Difendere|Defender|Защищать|A apăra
Criticar|To criticise|Critiquer|kritisieren|Criticare|Criticar|Критиковать|A critica
Respaldar|To back|Soutenir|unterstützen|Appoggiare|Apoiar|Поддерживать|A sprijini
Controvertido|Controversial|Controversé|umstritten|Controverso|Controverso|Спорный|Controversat
Escéptico|Sceptical|Sceptique|skeptisch|Scettico|Cético|Скептический|Sceptic
Coherencia|Coherence|Cohérence|Kohärenz|Coerenza|Coerência|Последовательность|Coerență
Plantear|To raise|Soulever|aufwerfen|Sollevare|Levantar|Поднимать|A ridica
`);
  S(30, `
Defiendo esta idea porque tiene base científica.|I defend this idea because it has a scientific basis.|Je défends cette idée parce qu'elle a une base scientifique.|Ich verteidige diese Idee, weil sie wissenschaftlich fundiert ist.|Difendo questa idea perché ha una base scientifica.|Defendo esta ideia porque tem base científica.|Я защищаю эту идею, потому что у неё есть научная основа.|Apăr această idee pentru că are o bază științifică.
Tu argumento es coherente, pero incompleto.|Your argument is coherent, but incomplete.|Ton argument est cohérent, mais incomplet.|Dein Argument ist kohärent, aber unvollständig.|La tua argomentazione è coerente, ma incompleta.|O teu argumento é coerente, mas incompleto.|Твой аргумент последователен, но неполон.|Argumentul tău este coerent, dar incomplet.
Soy escéptico ante promesas tan grandes.|I'm sceptical about such big promises.|Je suis sceptique face à de si grandes promesses.|Ich stehe so großen Versprechen skeptisch gegenüber.|Sono scettico di fronte a promesse così grandi.|Sou cético perante promessas tão grandes.|Я скептически отношусь к таким громким обещаниям.|Sunt sceptic față de promisiuni atât de mari.
Es un tema controvertido que divide a la gente.|It's a controversial issue that divides people.|C'est un sujet controversé qui divise les gens.|Es ist ein umstrittenes Thema, das die Menschen spaltet.|È un tema controverso che divide le persone.|É um tema controverso que divide as pessoas.|Это спорная тема, которая разделяет людей.|Este un subiect controversat care îi împarte pe oameni.
Quiero plantear una objeción antes de votar.|I want to raise an objection before voting.|Je veux soulever une objection avant de voter.|Ich möchte vor der Abstimmung einen Einwand vorbringen.|Voglio sollevare un'obiezione prima di votare.|Quero levantar uma objeção antes de votar.|Я хочу высказать возражение до голосования.|Vreau să ridic o obiecție înainte de vot.
`);

  /* 31 Entrevista y carrera */
  W(31, `
Oferta de trabajo|Job offer|Offre d'emploi|Stellenangebot|Offerta di lavoro|Oferta de emprego|Предложение о работе|Ofertă de angajare
Reclutador|Recruiter|Chargé de recrutement|Personalvermittler|Selezionatore|Recrutador|Рекрутер|Recrutor
Postulación|Application|Candidature|Bewerbung|Candidatura|Candidatura|Заявка на вакансию|Candidatură
Teletrabajo|Remote work|Télétravail|Homeoffice|Lavoro da remoto|Teletrabalho|Удалённая работа|Muncă de la distanță
Horario flexible|Flexible hours|Horaires flexibles|Gleitzeit|Orario flessibile|Horário flexível|Гибкий график|Program flexibil
Capacitación|Training course|Formation|Fortbildung|Corso di formazione|Formação|Повышение квалификации|Pregătire profesională
Evaluación de desempeño|Performance review|Évaluation des performances|Leistungsbeurteilung|Valutazione delle prestazioni|Avaliação de desempenho|Оценка эффективности|Evaluarea performanței
Beneficios laborales|Employee benefits|Avantages sociaux|Sozialleistungen|Benefit aziendali|Benefícios laborais|Льготы для сотрудников|Beneficii pentru angajați
`);
  S(31, `
Presenté mi postulación por internet.|I submitted my application online.|J'ai envoyé ma candidature en ligne.|Ich habe meine Bewerbung online eingereicht.|Ho inviato la mia candidatura online.|Enviei a minha candidatura pela internet.|Я подал заявку на вакансию через интернет.|Mi-am trimis candidatura online.
La empresa ofrece teletrabajo dos días por semana.|The company offers remote work two days a week.|L'entreprise propose du télétravail deux jours par semaine.|Das Unternehmen bietet an zwei Tagen pro Woche Homeoffice an.|L'azienda offre lavoro da remoto due giorni a settimana.|A empresa oferece teletrabalho dois dias por semana.|Компания предлагает удалённую работу два дня в неделю.|Compania oferă muncă de la distanță două zile pe săptămână.
¿Qué beneficios laborales incluye el contrato?|What employee benefits does the contract include?|Quels avantages sociaux le contrat comprend-il ?|Welche Sozialleistungen sind im Vertrag enthalten?|Quali benefit aziendali include il contratto?|Que benefícios laborais inclui o contrato?|Какие льготы включает договор?|Ce beneficii pentru angajați include contractul?
Me interesa recibir capacitación continua.|I'm interested in receiving ongoing training.|Je souhaite bénéficier d'une formation continue.|Ich möchte mich kontinuierlich weiterbilden.|Mi interessa ricevere una formazione continua.|Interessa-me receber formação contínua.|Мне важно постоянно повышать квалификацию.|Mă interesează să primesc pregătire continuă.
La evaluación de desempeño es cada seis meses.|The performance review is every six months.|L'évaluation des performances a lieu tous les six mois.|Die Leistungsbeurteilung findet alle sechs Monate statt.|La valutazione delle prestazioni è ogni sei mesi.|A avaliação de desempenho é de seis em seis meses.|Оценка эффективности проходит каждые полгода.|Evaluarea performanței are loc la fiecare șase luni.
`);

  /* 32 Noticias y sociedad */
  W(32, `
Huelga|Strike|Grève|Streik|Sciopero|Greve|Забастовка|Grevă
Manifestación|Demonstration|Manifestation|Demonstration|Manifestazione|Manifestação|Демонстрация|Manifestație
Refugiado|Refugee|Réfugié|Flüchtling|Rifugiato|Refugiado|Беженец|Refugiat
Brote|Outbreak|Foyer|Ausbruch|Focolaio|Surto|Вспышка|Focar
Pandemia|Pandemic|Pandémie|Pandemie|Pandemia|Pandemia|Пандемия|Pandemie
Alerta|Alert|Alerte|Warnung|Allerta|Alerta|Тревога|Alertă
Estadística|Statistic|Statistique|Statistik|Statistica|Estatística|Статистика|Statistică
Boletín|Bulletin|Bulletin|Nachrichtenblatt|Bollettino|Boletim|Бюллетень|Buletin
`);
  S(32, `
Los trabajadores convocaron una huelga nacional.|Workers called a national strike.|Les travailleurs ont appelé à une grève nationale.|Die Arbeiter riefen zu einem landesweiten Streik auf.|I lavoratori hanno indetto uno sciopero nazionale.|Os trabalhadores convocaram uma greve nacional.|Работники объявили всеобщую забастовку.|Muncitorii au convocat o grevă națională.
Miles de personas participaron en la manifestación.|Thousands of people took part in the demonstration.|Des milliers de personnes ont participé à la manifestation.|Tausende Menschen nahmen an der Demonstration teil.|Migliaia di persone hanno partecipato alla manifestazione.|Milhares de pessoas participaram na manifestação.|Тысячи людей приняли участие в демонстрации.|Mii de oameni au participat la manifestație.
Las autoridades declararon un brote de la enfermedad.|The authorities declared an outbreak of the disease.|Les autorités ont déclaré un foyer de la maladie.|Die Behörden meldeten einen Ausbruch der Krankheit.|Le autorità hanno dichiarato un focolaio della malattia.|As autoridades declararam um surto da doença.|Власти объявили о вспышке заболевания.|Autoritățile au declarat un focar al bolii.
Las estadísticas muestran un aumento de refugiados.|The statistics show an increase in refugees.|Les statistiques montrent une hausse du nombre de réfugiés.|Die Statistiken zeigen einen Anstieg der Flüchtlingszahlen.|Le statistiche mostrano un aumento dei rifugiati.|As estatísticas mostram um aumento de refugiados.|Статистика показывает рост числа беженцев.|Statisticile arată o creștere a numărului de refugiați.
El boletín de las ocho trae una alerta meteorológica.|The eight o'clock bulletin carries a weather alert.|Le bulletin de huit heures contient une alerte météo.|Die Acht-Uhr-Nachrichten melden eine Wetterwarnung.|Il bollettino delle otto contiene un'allerta meteo.|O boletim das oito traz um alerta meteorológico.|В бюллетене в восемь часов сообщили о метеопредупреждении.|Buletinul de la ora opt aduce o alertă meteo.
`);

  /* 33 Salud y bienestar */
  W(33, `
Urgencias|Emergency room|Urgences|Notaufnahme|Pronto soccorso|Urgências|Приёмное отделение|Urgențe
Análisis|Test|Analyse|Laboruntersuchung|Analisi|Análise|Анализ|Analiză
Infección|Infection|Infection|Infektion|Infezione|Infeção|Инфекция|Infecție
Antibiótico|Antibiotic|Antibiotique|Antibiotikum|Antibiotico|Antibiótico|Антибиотик|Antibiotic
Obesidad|Obesity|Obésité|Fettleibigkeit|Obesità|Obesidade|Ожирение|Obezitate
Diabetes|Diabetes|Diabète|Diabetes|Diabete|Diabetes|Диабет|Diabet
Insomnio|Insomnia|Insomnie|Schlaflosigkeit|Insonnia|Insónia|Бессонница|Insomnie
Salud mental|Mental health|Santé mentale|Psychische Gesundheit|Salute mentale|Saúde mental|Психическое здоровье|Sănătate mintală
`);
  S(33, `
Fui a urgencias por una infección grave.|I went to the emergency room for a serious infection.|Je suis allé aux urgences pour une infection grave.|Ich bin wegen einer schweren Infektion in die Notaufnahme gegangen.|Sono andato al pronto soccorso per un'infezione grave.|Fui às urgências por causa de uma infeção grave.|Я обратился в приёмное отделение с тяжёлой инфекцией.|Am mers la urgențe pentru o infecție gravă.
El médico me recetó un antibiótico.|The doctor prescribed me an antibiotic.|Le médecin m'a prescrit un antibiotique.|Der Arzt hat mir ein Antibiotikum verschrieben.|Il medico mi ha prescritto un antibiotico.|O médico receitou-me um antibiótico.|Врач выписал мне антибиотик.|Medicul mi-a prescris un antibiotic.
Me hicieron análisis de sangre esta mañana.|They did blood tests on me this morning.|On m'a fait des analyses de sang ce matin.|Heute Morgen wurde mir Blut abgenommen.|Stamattina mi hanno fatto le analisi del sangue.|Fizeram-me análises ao sangue esta manhã.|Сегодня утром мне сделали анализ крови.|Mi-au făcut analize de sânge azi-dimineață.
La diabetes se puede controlar con buenos hábitos.|Diabetes can be controlled with good habits.|Le diabète peut être contrôlé avec de bonnes habitudes.|Diabetes lässt sich mit guten Gewohnheiten kontrollieren.|Il diabete si può tenere sotto controllo con buone abitudini.|A diabetes pode ser controlada com bons hábitos.|Диабет можно контролировать с помощью здоровых привычек.|Diabetul poate fi controlat cu obiceiuri bune.
Cuidar la salud mental es tan importante como la física.|Looking after mental health is as important as physical health.|Prendre soin de sa santé mentale est aussi important que de la santé physique.|Die psychische Gesundheit zu pflegen ist genauso wichtig wie die körperliche.|Prendersi cura della salute mentale è importante quanto quella fisica.|Cuidar da saúde mental é tão importante como da física.|Заботиться о психическом здоровье так же важно, как о физическом.|A avea grijă de sănătatea mintală este la fel de important ca de cea fizică.
`);

  /* 34 Ciencia y tecnología */
  W(34, `
Ciberataque|Cyberattack|Cyberattaque|Cyberangriff|Attacco informatico|Ciberataque|Кибератака|Atac cibernetic
Biotecnología|Biotechnology|Biotechnologie|Biotechnologie|Biotecnologia|Biotecnologia|Биотехнологии|Biotehnologie
Teoría|Theory|Théorie|Theorie|Teoria|Teoria|Теория|Teorie
Fórmula|Formula|Formule|Formel|Formula|Fórmula|Формула|Formulă
Microscopio|Microscope|Microscope|Mikroskop|Microscopio|Microscópio|Микроскоп|Microscop
Telescopio|Telescope|Télescope|Teleskop|Telescopio|Telescópio|Телескоп|Telescop
Energía nuclear|Nuclear energy|Énergie nucléaire|Atomenergie|Energia nucleare|Energia nuclear|Ядерная энергия|Energie nucleară
Avance tecnológico|Technological breakthrough|Avancée technologique|Technologischer Durchbruch|Progresso tecnologico|Avanço tecnológico|Технологический прорыв|Progres tehnologic
`);
  S(34, `
Un ciberataque dejó sin servicio a varias empresas.|A cyberattack left several companies without service.|Une cyberattaque a privé plusieurs entreprises de service.|Ein Cyberangriff hat mehrere Unternehmen lahmgelegt.|Un attacco informatico ha lasciato senza servizio diverse aziende.|Um ciberataque deixou várias empresas sem serviço.|Кибератака лишила связи несколько компаний.|Un atac cibernetic a lăsat mai multe companii fără servicii.
Los astrónomos observan las estrellas con un telescopio.|Astronomers observe the stars with a telescope.|Les astronomes observent les étoiles avec un télescope.|Astronomen beobachten die Sterne mit einem Teleskop.|Gli astronomi osservano le stelle con un telescopio.|Os astrónomos observam as estrelas com um telescópio.|Астрономы наблюдают за звёздами в телескоп.|Astronomii observă stelele cu un telescop.
La teoría necesita pruebas experimentales.|The theory needs experimental evidence.|La théorie a besoin de preuves expérimentales.|Die Theorie braucht experimentelle Belege.|La teoria ha bisogno di prove sperimentali.|A teoria precisa de provas experimentais.|Теории нужны экспериментальные доказательства.|Teoria are nevoie de dovezi experimentale.
La biotecnología mejora los cultivos.|Biotechnology improves crops.|La biotechnologie améliore les cultures.|Die Biotechnologie verbessert die Ernten.|La biotecnologia migliora le colture.|A biotecnologia melhora as colheitas.|Биотехнологии улучшают урожаи.|Biotehnologia îmbunătățește culturile.
Este avance tecnológico reducirá el consumo de energía.|This technological breakthrough will reduce energy consumption.|Cette avancée technologique réduira la consommation d'énergie.|Dieser technologische Durchbruch wird den Energieverbrauch senken.|Questo progresso tecnologico ridurrà il consumo di energia.|Este avanço tecnológico vai reduzir o consumo de energia.|Этот технологический прорыв снизит потребление энергии.|Acest progres tehnologic va reduce consumul de energie.
`);

  /* 35 Viajes y culturas */
  W(35, `
Excursión guiada|Guided tour|Visite guidée|Führung|Visita guidata|Visita guiada|Экскурсия с гидом|Tur ghidat
Huésped|Guest|Client de l'hôtel|Gast|Cliente dell'albergo|Hóspede|Постоялец|Oaspete
Paquete turístico|Package holiday|Voyage organisé|Pauschalreise|Pacchetto vacanza|Pacote turístico|Тур-пакет|Pachet turistic
Cultura|Culture|Culture|Kultur|Cultura|Cultura|Культура|Cultură
Diversidad|Diversity|Diversité|Vielfalt|Diversità|Diversidade|Разнообразие|Diversitate
Etiqueta|Etiquette|Étiquette|Etikette|Galateo|Etiqueta|Этикет|Eticheta
Recuerdo|Souvenir|Souvenir|Andenken|Souvenir|Lembrança|Сувенир|Suvenir
Reserva natural|Nature reserve|Réserve naturelle|Naturschutzgebiet|Riserva naturale|Reserva natural|Заповедник|Rezervație naturală
`);
  S(35, `
Reservamos un paquete turístico para dos semanas.|We booked a package holiday for two weeks.|Nous avons réservé un voyage organisé pour deux semaines.|Wir haben eine Pauschalreise für zwei Wochen gebucht.|Abbiamo prenotato un pacchetto vacanza per due settimane.|Reservámos um pacote turístico para duas semanas.|Мы забронировали тур-пакет на две недели.|Am rezervat un pachet turistic pentru două săptămâni.
La excursión guiada incluye una visita a la reserva natural.|The guided tour includes a visit to the nature reserve.|La visite guidée comprend une visite de la réserve naturelle.|Die Führung beinhaltet einen Besuch im Naturschutzgebiet.|La visita guidata include una visita alla riserva naturale.|A visita guiada inclui uma visita à reserva natural.|Экскурсия с гидом включает посещение заповедника.|Turul ghidat include o vizită la rezervația naturală.
Respetar la etiqueta local es una muestra de cortesía.|Respecting local etiquette is a sign of courtesy.|Respecter l'étiquette locale est une marque de courtoisie.|Die örtliche Etikette zu respektieren zeugt von Höflichkeit.|Rispettare il galateo locale è segno di cortesia.|Respeitar a etiqueta local é uma mostra de cortesia.|Уважать местный этикет — признак вежливости.|A respecta eticheta locală este un semn de politețe.
Me fascina la diversidad cultural de este país.|I'm fascinated by the cultural diversity of this country.|La diversité culturelle de ce pays me fascine.|Die kulturelle Vielfalt dieses Landes fasziniert mich.|Mi affascina la diversità culturale di questo paese.|Fascina-me a diversidade cultural deste país.|Меня восхищает культурное разнообразие этой страны.|Mă fascinează diversitatea culturală a acestei țări.
Compré un recuerdo para cada miembro de mi familia.|I bought a souvenir for each member of my family.|J'ai acheté un souvenir pour chaque membre de ma famille.|Ich habe für jedes Familienmitglied ein Andenken gekauft.|Ho comprato un souvenir per ogni membro della mia famiglia.|Comprei uma lembrança para cada membro da minha família.|Я купил сувенир для каждого члена семьи.|Am cumpărat un suvenir pentru fiecare membru al familiei mele.
`);

  /* 36 Vivienda y ciudad */
  W(36, `
Metro cuadrado|Square metre|Mètre carré|Quadratmeter|Metro quadro|Metro quadrado|Квадратный метр|Metru pătrat
Tasación|Valuation|Expertise|Gutachten|Perizia|Avaliação|Оценка стоимости|Evaluare
Escritura|Title deed|Acte de propriété|Grundbucheintrag|Atto di proprietà|Escritura|Правоустанавливающий документ|Act de proprietate
Mantenimiento|Maintenance|Entretien|Instandhaltung|Manutenzione|Manutenção|Обслуживание|Întreținere
Aire acondicionado|Air conditioning|Climatisation|Klimaanlage|Aria condizionata|Ar condicionado|Кондиционер|Aer condiționat
Cerradura|Lock|Serrure|Schloss|Serratura|Fechadura|Замок|Încuietoare
Vender|To sell|Vendre|verkaufen|Vendere|Vender|Продавать|A vinde
Comprador|Buyer|Acheteur|Käufer|Acquirente|Comprador|Покупатель|Cumpărător
`);
  S(36, `
El apartamento mide ochenta metros cuadrados.|The flat is eighty square metres.|L'appartement fait quatre-vingts mètres carrés.|Die Wohnung hat achtzig Quadratmeter.|L'appartamento misura ottanta metri quadrati.|O apartamento tem oitenta metros quadrados.|Площадь квартиры — восемьдесят квадратных метров.|Apartamentul are optzeci de metri pătrați.
Quieren vender la casa y mudarse al campo.|They want to sell the house and move to the countryside.|Ils veulent vendre la maison et s'installer à la campagne.|Sie wollen das Haus verkaufen und aufs Land ziehen.|Vogliono vendere la casa e trasferirsi in campagna.|Querem vender a casa e mudar-se para o campo.|Они хотят продать дом и переехать в деревню.|Vor să vândă casa și să se mute la țară.
El comprador pidió una tasación antes de firmar.|The buyer asked for a valuation before signing.|L'acheteur a demandé une expertise avant de signer.|Der Käufer verlangte vor der Unterzeichnung ein Gutachten.|L'acquirente ha chiesto una perizia prima di firmare.|O comprador pediu uma avaliação antes de assinar.|Покупатель потребовал оценку стоимости перед подписанием.|Cumpărătorul a cerut o evaluare înainte de a semna.
Hay que cambiar la cerradura de la puerta.|The lock on the door needs changing.|Il faut changer la serrure de la porte.|Das Türschloss muss ausgetauscht werden.|Bisogna cambiare la serratura della porta.|É preciso trocar a fechadura da porta.|Нужно заменить замок на двери.|Trebuie schimbată încuietoarea de la ușă.
El aire acondicionado necesita mantenimiento cada año.|The air conditioning needs maintenance every year.|La climatisation nécessite un entretien chaque année.|Die Klimaanlage muss jedes Jahr gewartet werden.|L'aria condizionata richiede manutenzione ogni anno.|O ar condicionado precisa de manutenção todos os anos.|Кондиционер нужно обслуживать каждый год.|Aerul condiționat necesită întreținere în fiecare an.
`);

  /* 37 Finanzas personales */
  W(37, `
Salario bruto|Gross salary|Salaire brut|Bruttogehalt|Stipendio lordo|Salário bruto|Зарплата до вычета налогов|Salariu brut
Salario neto|Net salary|Salaire net|Nettogehalt|Stipendio netto|Salário líquido|Зарплата на руки|Salariu net
Declaración de impuestos|Tax return|Déclaration d'impôts|Steuererklärung|Dichiarazione dei redditi|Declaração de impostos|Налоговая декларация|Declarație fiscală
Criptomoneda|Cryptocurrency|Cryptomonnaie|Kryptowährung|Criptovaluta|Criptomoeda|Криптовалюта|Criptomonedă
Fondo de emergencia|Emergency fund|Fonds d'urgence|Notgroschen|Fondo di emergenza|Fundo de emergência|Резервный фонд|Fond de urgență
Pensión|Pension|Pension|Rente|Rendita pensionistica|Pensão|Пенсионное пособие|Pensie
Gasto fijo|Fixed expense|Dépense fixe|Fixkosten|Spesa fissa|Despesa fixa|Постоянный расход|Cheltuială fixă
Moneda extranjera|Foreign currency|Devise étrangère|Fremdwährung|Valuta estera|Moeda estrangeira|Иностранная валюта|Valută străină
`);
  S(37, `
Mi salario neto es menor que el bruto por los impuestos.|My net salary is lower than my gross salary because of taxes.|Mon salaire net est inférieur au brut à cause des impôts.|Mein Nettogehalt liegt wegen der Steuern unter dem Bruttogehalt.|Il mio stipendio netto è inferiore a quello lordo a causa delle tasse.|O meu salário líquido é inferior ao bruto por causa dos impostos.|Моя зарплата на руки меньше начисленной из-за налогов.|Salariul meu net este mai mic decât cel brut din cauza impozitelor.
Tengo que presentar la declaración de impuestos en abril.|I have to file my tax return in April.|Je dois déposer ma déclaration d'impôts en avril.|Ich muss im April meine Steuererklärung abgeben.|Devo presentare la dichiarazione dei redditi ad aprile.|Tenho de entregar a declaração de impostos em abril.|Я должен подать налоговую декларацию в апреле.|Trebuie să depun declarația fiscală în aprilie.
Es sensato tener un fondo de emergencia.|It is sensible to have an emergency fund.|Il est judicieux d'avoir un fonds d'urgence.|Es ist sinnvoll, einen Notgroschen zu haben.|È sensato avere un fondo di emergenza.|É sensato ter um fundo de emergência.|Разумно иметь резервный фонд.|Este înțelept să ai un fond de urgență.
Los gastos fijos me consumen la mitad del sueldo.|Fixed expenses take half of my salary.|Les dépenses fixes absorbent la moitié de mon salaire.|Die Fixkosten fressen die Hälfte meines Gehalts auf.|Le spese fisse mi consumano metà dello stipendio.|As despesas fixas consomem metade do meu ordenado.|Постоянные расходы съедают половину моей зарплаты.|Cheltuielile fixe îmi consumă jumătate din salariu.
Invertir en criptomonedas implica un riesgo alto.|Investing in cryptocurrencies carries a high risk.|Investir dans les cryptomonnaies comporte un risque élevé.|Die Investition in Kryptowährungen birgt ein hohes Risiko.|Investire in criptovalute comporta un rischio elevato.|Investir em criptomoedas implica um risco elevado.|Инвестиции в криптовалюты связаны с высоким риском.|Investiția în criptomonede implică un risc ridicat.
`);

  /* 38 Medios y redes */
  W(38, `
Bulo|Hoax|Canular|Hoax|Bufala|Boato|Утка|Farsă
Cebo de clics|Clickbait|Piège à clics|Clickbait|Clickbait|Isco de cliques|Кликбейт|Clickbait
Verificador de datos|Fact-checker|Vérificateur de faits|Faktenprüfer|Fact-checker|Verificador de factos|Фактчекер|Verificator de fapte
Burbuja informativa|Filter bubble|Bulle de filtres|Filterblase|Bolla informativa|Bolha informativa|Информационный пузырь|Bulă informațională
Libertad de expresión|Freedom of expression|Liberté d'expression|Meinungsfreiheit|Libertà di espressione|Liberdade de expressão|Свобода слова|Libertatea de exprimare
Anonimato|Anonymity|Anonymat|Anonymität|Anonimato|Anonimato|Анонимность|Anonimat
Comentario|Comment|Commentaire|Kommentar|Commento|Comentário|Комментарий|Comentariu
Moderación|Moderation|Modération|Moderation|Moderazione|Moderação|Модерация|Moderare
`);
  S(38, `
Ese titular es un cebo de clics.|That headline is clickbait.|Ce titre est un piège à clics.|Diese Schlagzeile ist Clickbait.|Quel titolo è clickbait.|Esse título é isco de cliques.|Этот заголовок — кликбейт.|Titlul acela este clickbait.
Un verificador de datos desmintió el bulo.|A fact-checker debunked the hoax.|Un vérificateur de faits a démenti le canular.|Ein Faktenprüfer hat den Hoax widerlegt.|Un fact-checker ha smentito la bufala.|Um verificador de factos desmentiu o boato.|Фактчекер опроверг эту утку.|Un verificator de fapte a dezmințit farsa.
Vivimos en una burbuja informativa sin darnos cuenta.|We live in a filter bubble without realising it.|Nous vivons dans une bulle de filtres sans nous en rendre compte.|Wir leben unbemerkt in einer Filterblase.|Viviamo in una bolla informativa senza accorgercene.|Vivemos numa bolha informativa sem darmos por isso.|Мы живём в информационном пузыре, сами того не замечая.|Trăim într-o bulă informațională fără să ne dăm seama.
La libertad de expresión tiene límites legales.|Freedom of expression has legal limits.|La liberté d'expression a des limites légales.|Die Meinungsfreiheit hat rechtliche Grenzen.|La libertà di espressione ha limiti legali.|A liberdade de expressão tem limites legais.|У свободы слова есть законные пределы.|Libertatea de exprimare are limite legale.
El anonimato en internet favorece los comentarios agresivos.|Anonymity online encourages aggressive comments.|L'anonymat sur internet favorise les commentaires agressifs.|Anonymität im Internet begünstigt aggressive Kommentare.|L'anonimato su internet favorisce i commenti aggressivi.|O anonimato na internet favorece os comentários agressivos.|Анонимность в интернете способствует агрессивным комментариям.|Anonimatul pe internet favorizează comentariile agresive.
`);

  /* 39 Quejas y negociación */
  W(39, `
Mediación|Mediation|Médiation|Mediation|Mediazione|Mediação|Посредничество|Mediere
Contrapropuesta|Counter-offer|Contre-proposition|Gegenvorschlag|Controproposta|Contraproposta|Встречное предложение|Contrapropunere
Penalización|Penalty charge|Pénalité|Vertragsstrafe|Penale|Penalização|Штраф за нарушение|Penalizare
Consumidor|Consumer|Consommateur|Verbraucher|Consumatore|Consumidor|Потребитель|Consumator
Resolver|To resolve|Résoudre|lösen|Risolvere|Resolver|Разрешать|A rezolva
Reembolso parcial|Partial refund|Remboursement partiel|Teilrückerstattung|Rimborso parziale|Reembolso parcial|Частичный возврат|Rambursare parțială
Política de devoluciones|Returns policy|Politique de retour|Rückgaberecht|Politica di reso|Política de devoluções|Правила возврата|Politică de returnare
Escalar|To escalate|Faire remonter|eskalieren|Intensificare|Escalar|Передать выше|A escalada
`);
  S(39, `
Propongo recurrir a la mediación para evitar un juicio.|I suggest using mediation to avoid a trial.|Je propose de recourir à la médiation pour éviter un procès.|Ich schlage vor, eine Mediation zu nutzen, um einen Prozess zu vermeiden.|Propongo di ricorrere alla mediazione per evitare un processo.|Proponho recorrer à mediação para evitar um julgamento.|Предлагаю обратиться к посредничеству, чтобы избежать суда.|Propun să recurgem la mediere pentru a evita un proces.
Rechazaron mi oferta, pero hicieron una contrapropuesta.|They rejected my offer, but made a counter-offer.|Ils ont refusé mon offre, mais ont fait une contre-proposition.|Sie lehnten mein Angebot ab, machten aber einen Gegenvorschlag.|Hanno rifiutato la mia offerta, ma hanno fatto una controproposta.|Rejeitaram a minha oferta, mas fizeram uma contraproposta.|Мою оферту отклонили, но сделали встречное предложение.|Au refuzat oferta mea, dar au făcut o contrapropunere.
Según su política de devoluciones, solo ofrecen un reembolso parcial.|According to their returns policy, they only offer a partial refund.|Selon leur politique de retour, ils n'offrent qu'un remboursement partiel.|Laut ihrem Rückgaberecht bieten sie nur eine Teilrückerstattung an.|Secondo la loro politica di reso, offrono solo un rimborso parziale.|Segundo a política de devoluções, só oferecem um reembolso parcial.|Согласно их правилам возврата, они предлагают лишь частичный возврат.|Conform politicii lor de returnare, oferă doar o rambursare parțială.
Como consumidor, tengo derecho a un producto en buen estado.|As a consumer, I have the right to a product in good condition.|En tant que consommateur, j'ai droit à un produit en bon état.|Als Verbraucher habe ich Anspruch auf ein einwandfreies Produkt.|Come consumatore, ho diritto a un prodotto in buono stato.|Como consumidor, tenho direito a um produto em bom estado.|Как потребитель, я имею право на товар в хорошем состоянии.|Ca consumator, am dreptul la un produs în stare bună.
Si no lo resuelven, escalaré la queja a la gerencia.|If they don't resolve it, I'll escalate the complaint to management.|S'ils ne le résolvent pas, je ferai remonter la plainte à la direction.|Wenn sie es nicht lösen, eskaliere ich die Beschwerde an die Geschäftsleitung.|Se non lo risolvono, porterò il reclamo alla direzione.|Se não resolverem, escalarei a reclamação à administração.|Если они не решат вопрос, я передам жалобу руководству.|Dacă nu o rezolvă, voi escalada reclamația către conducere.
`);
})();
