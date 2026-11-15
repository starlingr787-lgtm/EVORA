/* Sesiones 4 (B2, unidades 31-40) y 5 (C1, unidades 41-50). Contenido inicial, pensado para ir ampliándose.
   Formato: ver extra.js (es|en|fr|de|it|pt|ru|ro). Cada unidad: 8 palabras y 5 frases.
   Origen: las frases y palabras en español son propias; las traducciones salen de DeepL y se revisaron una a una
   (se corrigieron sentidos erróneos de palabras sueltas, persona y género). Falta revisión de hablantes nativos. */
(() => {
  const ADD = (title, icon, ctx) => { UNITS.push({ title, icon, ctx, w: [], s: [] }); for (const l in COURSES) if (l !== "es") COURSES[l].t.push([[], []]); return UNITS.length - 1; };
  let u;

  /* ============ B2 ============ */
  u = ADD("Opinar y debatir", "chat", "Participas en un debate y defiendes tu postura con argumentos.");
  addExtra(u, "w", `
Argumento|Argument|Argument|Argument|Argomento|Argumento|Аргумент|Argument
Postura|Stance|Position|Haltung|Posizione|Posição|Позиция|Poziție
Debate|Debate|Débat|Debatte|Dibattito|Debate|Дебаты|Dezbatere
Ventaja|Advantage|Avantage|Vorteil|Vantaggio|Vantagem|Преимущество|Avantaj
Desventaja|Disadvantage|Inconvénient|Nachteil|Svantaggio|Desvantagem|Недостаток|Dezavantaj
Objetar|To object|Objecter|Einwenden|Obiettare|Objetar|Возражать|A obiecta
Convencer|To persuade|Convaincre|Überzeugen|Convincere|Convencer|Убеждать|A convinge
Prejuicio|Prejudice|Préjugé|Vorurteil|Pregiudizio|Preconceito|Предубеждение|Prejudecată
`);
  addExtra(u, "s", `
Respeto tu postura, pero no estoy de acuerdo.|I respect your view, but I don't agree with it.|Je respecte ton point de vue, mais je ne suis pas d'accord.|Ich respektiere deine Haltung, aber ich bin anderer Meinung.|Rispetto la tua posizione, ma non sono d'accordo.|Respeito a tua posição, mas não concordo.|Я уважаю твою точку зрения, но не согласен с ней.|Îți respect punctul de vedere, dar nu sunt de acord.
Hay argumentos a favor y en contra.|There are arguments for and against.|Il y a des arguments pour et contre.|Es gibt Argumente dafür und dagegen.|Ci sono argomenti a favore e contro.|Há argumentos a favor e contra.|Есть аргументы «за» и «против».|Există argumente pro și contra.
Eso depende de cómo se mire.|That depends on how you look at it.|Cela dépend du point de vue.|Das hängt davon ab, wie man es betrachtet.|Dipende dai punti di vista.|Isso depende da perspetiva de cada um.|Это зависит от того, как на это смотреть.|Depinde de cum privești lucrurile.
Me has convencido con tus datos.|You've convinced me with your figures.|Tu m'as convaincu avec tes données.|Du hast mich mit deinen Daten überzeugt.|Mi hai convinto con i tuoi dati.|Convenceste-me com os teus dados.|Ты убедил меня своими данными.|M-ai convins cu datele tale.
Es un prejuicio que no se sostiene.|It is a prejudice that does not hold water.|C'est un préjugé qui ne tient pas la route.|Das ist ein Vorurteil, das sich nicht halten lässt.|È un pregiudizio che non regge.|É um preconceito que não se sustenta.|Это предвзятое мнение, которое не выдерживает критики.|Este o prejudecată care nu se susține.
`);

  u = ADD("Entrevista y carrera", "briefcase", "Te presentas a un puesto y explicas tu trayectoria.");
  addExtra(u, "w", `
Trayectoria|Career path|Parcours professionnel|Werdegang|Percorso professionale|Percurso profissional|Карьерный путь|Parcurs profesional
Candidato|Candidate|Candidat|Kandidat|Candidato|Candidato|Кандидат|Candidat
Habilidad|Skill|Compétence|Fähigkeit|Abilità|Competência|Навык|Abilitate
Ascenso|Promotion|Promotion|Beförderung|Promozione|Promoção|Повышение|Promovare
Renunciar|To resign|Démissionner|Kündigen|Dimettersi|Demitir-se|Уволиться|A demisiona
Pasantía|Internship|Stage|Praktikum|Tirocinio|Estágio|Стажировка|Stagiu
Liderazgo|Leadership|Leadership|Führung|Leadership|Liderança|Лидерство|Conducere
Desafío|Challenge|Défi|Herausforderung|Sfida|Desafio|Вызов|Provocare
`);
  addExtra(u, "s", `
Tengo cinco años de trayectoria en ventas.|I have five years' experience in sales.|J'ai cinq ans d'expérience dans la vente.|Ich verfüge über fünf Jahre Berufserfahrung im Vertrieb.|Ho cinque anni di esperienza nel settore delle vendite.|Tenho cinco anos de experiência na área das vendas.|У меня пять лет опыта работы в сфере продаж.|Am o experiență de cinci ani în domeniul vânzărilor.
Mi mayor fortaleza es trabajar en equipo.|My greatest strength is working as part of a team.|Ma plus grande force, c'est le travail d'équipe.|Meine größte Stärke ist die Teamarbeit.|Il mio punto di forza principale è il lavoro di squadra.|O meu maior ponto forte é o trabalho em equipa.|Моя главная сильная сторона — умение работать в команде.|Cel mai mare punct forte al meu este capacitatea de a lucra în echipă.
Me gustaría asumir más responsabilidades.|I would like to take on more responsibilities.|J'aimerais assumer davantage de responsabilités.|Ich würde gerne mehr Verantwortung übernehmen.|Mi piacerebbe assumermi maggiori responsabilità.|Gostaria de assumir mais responsabilidades.|Я хотел бы взять на себя больше обязанностей.|Mi-ar plăcea să-mi asum mai multe responsabilități.
Renuncié para buscar nuevos desafíos.|I resigned to seek new challenges.|J'ai démissionné pour relever de nouveaux défis.|Ich habe gekündigt, um neue Herausforderungen zu suchen.|Ho dato le dimissioni per cercare nuove sfide.|Demiti-me para procurar novos desafios.|Я уволился, чтобы найти новые вызовы.|Mi-am dat demisia pentru a căuta noi provocări.
¿Cuáles son las oportunidades de ascenso?|What are the opportunities for promotion?|Quelles sont les possibilités d'évolution professionnelle ?|Welche Aufstiegsmöglichkeiten gibt es?|Quali sono le opportunità di carriera?|Quais são as oportunidades de promoção?|Какие есть возможности для карьерного роста?|Care sunt oportunitățile de avansare?
`);

  u = ADD("Noticias y sociedad", "globe", "Comentas un tema de actualidad y sus causas.");
  addExtra(u, "w", `
Titular|Headline|Gros titre|Schlagzeile|Titolo|Manchete|Заголовок|Titlu de presă
Fuente|Source|Source|Quelle|Fonte|Fonte|Источник|Sursă
Desigualdad|Inequality|Inégalité|Ungleichheit|Disuguaglianza|Desigualdade|Неравенство|Inegalitate
Crisis|Crisis|Crise|Krise|Crisi|Crise|Кризис|Criză
Migración|Migration|Migration|Migration|Migrazione|Migração|Миграция|Migrație
Reforma|Reform|Réforme|Reform|Riforma|Reforma|Реформа|Reformă
Encuesta|Survey|Sondage|Umfrage|Sondaggio|Sondagem|Опрос|Sondaj
Ciudadano|Citizen|Citoyen|Bürger|Cittadino|Cidadão|Гражданин|Cetățean
`);
  addExtra(u, "s", `
El titular no cuenta toda la historia.|The headline doesn't tell the whole story.|Le titre ne dit pas tout.|Die Überschrift erzählt nicht die ganze Geschichte.|Il titolo non racconta tutta la storia.|O título não conta toda a história.|Заголовок не раскрывает всей сути.|Titlul nu spune tot.
Según varias fuentes, la crisis continúa.|According to various sources, the crisis is continuing.|Selon plusieurs sources, la crise se poursuit.|Verschiedenen Quellen zufolge hält die Krise weiterhin an.|Secondo diverse fonti, la crisi continua.|Segundo várias fontes, a crise continua.|По данным ряда источников, кризис продолжается.|Conform mai multor surse, criza continuă.
La desigualdad afecta a miles de familias.|Inequality affects thousands of families.|Les inégalités touchent des milliers de familles.|Die Ungleichheit betrifft Tausende von Familien.|La disuguaglianza colpisce migliaia di famiglie.|A desigualdade afeta milhares de famílias.|Неравенство затрагивает тысячи семей.|Inegalitatea afectează mii de familii.
Una encuesta reciente muestra otro panorama.|A recent survey paints a different picture.|Un sondage récent dresse un tableau différent.|Eine aktuelle Umfrage zeichnet ein anderes Bild.|Un recente sondaggio mostra un quadro diverso.|Uma sondagem recente revela um panorama diferente.|Недавний опрос показывает совсем иную картину.|Un sondaj recent prezintă o altă imagine a situației.
Los ciudadanos exigen una reforma.|Citizens are calling for reform.|Les citoyens réclament une réforme.|Die Bürger fordern eine Reform.|I cittadini chiedono una riforma.|Os cidadãos exigem uma reforma.|Граждане требуют реформы.|Cetățenii cer o reformă.
`);

  u = ADD("Salud y bienestar", "heart", "Hablas con un especialista sobre tu salud y tus hábitos.");
  addExtra(u, "w", `
Bienestar|Wellbeing|Bien-être|Wohlbefinden|Benessere|Bem-estar|Благополучие|Bunăstare
Diagnóstico|Diagnosis|Diagnostic|Diagnose|Diagnosi|Diagnóstico|Диагноз|Diagnostic
Tratamiento|Treatment|Traitement|Behandlung|Trattamento|Tratamento|Лечение|Tratament
Síntoma|Symptom|Symptôme|Symptom|Sintomo|Sintoma|Симптом|Simptom
Prevención|Prevention|Prévention|Vorsorge|Prevenzione|Prevenção|Профилактика|Prevenție
Sedentarismo|Sedentary lifestyle|Sédentarité|Bewegungsmangel|Sedentarietà|Sedentarismo|Малоподвижный образ жизни|Sedentarism
Ansiedad|Anxiety|Anxiété|Angstzustand|Ansia|Ansiedade|Тревога|Anxietate
Recuperación|Recovery|Rétablissement|Genesung|Guarigione|Recuperação|Выздоровление|Recuperare
`);
  addExtra(u, "s", `
El médico me dio un diagnóstico claro.|The doctor gave me a clear diagnosis.|Le médecin m'a donné un diagnostic clair.|Der Arzt stellte eine eindeutige Diagnose.|Il medico mi ha fornito una diagnosi chiara.|O médico deu-me um diagnóstico claro.|Врач поставил мне четкий диагноз.|Medicul mi-a pus un diagnostic clar.
Es mejor la prevención que el tratamiento.|Prevention is better than cure.|Mieux vaut prévenir que guérir.|Vorbeugen ist besser als heilen.|Prevenire è meglio che curare.|É melhor prevenir do que remediar.|Лучше предотвратить, чем лечить.|Prevenirea este mai bună decât tratamentul.
Llevo semanas con ansiedad y poco sueño.|I've been feeling anxious and not sleeping much for weeks.|Cela fait des semaines que je souffre d'anxiété et que je dors peu.|Seit Wochen leide ich unter Angstzuständen und schlafe kaum.|Sono settimane che soffro di ansia e dormo poco.|Há semanas que ando ansioso e a dormir pouco.|Уже несколько недель я страдаю от беспокойства и плохо сплю.|De câteva săptămâni sufăr de anxietate și dorm foarte puțin.
El sedentarismo aumenta el riesgo de enfermedades.|A sedentary lifestyle increases the risk of disease.|La sédentarité augmente le risque de maladies.|Bewegungsmangel erhöht das Krankheitsrisiko.|La vita sedentaria aumenta il rischio di malattie.|O sedentarismo aumenta o risco de doenças.|Сидячий образ жизни повышает риск заболеваний.|Stilul de viață sedentar crește riscul de îmbolnăvire.
Mi recuperación va más rápido de lo esperado.|My recovery is going faster than expected.|Je me remets plus vite que prévu.|Meine Genesung verläuft schneller als erwartet.|La mia guarigione sta procedendo più velocemente del previsto.|A minha recuperação está a decorrer mais depressa do que o esperado.|Мое выздоровление проходит быстрее, чем ожидалось.|Recuperarea mea decurge mai repede decât mă așteptam.
`);

  u = ADD("Ciencia y tecnología", "laptop", "Explicas cómo funciona una innovación y sus riesgos.");
  addExtra(u, "w", `
Innovación|Innovation|Innovation|Innovation|Innovazione|Inovação|Инновация|Inovație
Algoritmo|Algorithm|Algorithme|Algorithmus|Algoritmo|Algoritmo|Алгоритм|Algoritm
Privacidad|Privacy|Vie privée|Privatsphäre|Privacy|Privacidade|Конфиденциальность|Confidențialitate
Dispositivo|Device|Appareil|Gerät|Dispositivo|Dispositivo|Устройство|Dispozitiv
Inteligencia artificial|Artificial intelligence|Intelligence artificielle|Künstliche Intelligenz|Intelligenza artificiale|Inteligência artificial|Искусственный интеллект|Inteligență artificială
Hipótesis|Hypothesis|Hypothèse|Hypothese|Ipotesi|Hipótese|Гипотеза|Ipoteză
Experimento|Experiment|Expérience scientifique|Experiment|Esperimento|Experimento|Эксперимент|Experiment
Descubrimiento|Discovery|Découverte|Entdeckung|Scoperta|Descoberta|Открытие|Descoperire
`);
  addExtra(u, "s", `
La inteligencia artificial cambiará muchos trabajos.|Artificial intelligence will change many jobs.|L'intelligence artificielle va transformer de nombreux métiers.|Künstliche Intelligenz wird viele Berufe verändern.|L'intelligenza artificiale cambierà molti lavori.|A inteligência artificial irá transformar muitos empregos.|Искусственный интеллект изменит многие профессии.|Inteligența artificială va schimba multe locuri de muncă.
Me preocupa la privacidad de mis datos.|I'm concerned about the privacy of my data.|Je m'inquiète pour la confidentialité de mes données.|Ich mache mir Sorgen um den Schutz meiner Daten.|Mi preoccupa la riservatezza dei miei dati.|Preocupo-me com a privacidade dos meus dados.|Меня беспокоит вопрос конфиденциальности моих данных.|Mă preocupă confidențialitatea datelor mele.
Los científicos confirmaron la hipótesis.|The scientists confirmed the hypothesis.|Les scientifiques ont confirmé cette hypothèse.|Die Wissenschaftler bestätigten die Hypothese.|Gli scienziati hanno confermato l'ipotesi.|Os cientistas confirmaram a hipótese.|Учёные подтвердили эту гипотезу.|Oamenii de știință au confirmat ipoteza.
Este dispositivo se actualiza automáticamente.|This device updates automatically.|Cet appareil se met à jour automatiquement.|Dieses Gerät wird automatisch aktualisiert.|Questo dispositivo si aggiorna automaticamente.|Este dispositivo é atualizado automaticamente.|Это устройство обновляется автоматически.|Acest dispozitiv se actualizează automat.
Un descubrimiento puede cambiar la medicina.|A discovery can transform medicine.|Une découverte peut révolutionner la médecine.|Eine Entdeckung kann die Medizin revolutionieren.|Una scoperta può rivoluzionare la medicina.|Uma descoberta pode revolucionar a medicina.|Одно открытие может изменить медицину.|O descoperire poate revoluționa medicina.
`);

  u = ADD("Viajes y culturas", "plane", "Cuentas un viaje y comparas costumbres de distintos países.");
  addExtra(u, "w", `
Intercambio|Exchange|Échange|Austausch|Scambio|Intercâmbio|Обмен|Schimb
Gastronomía|Gastronomy|Gastronomie|Gastronomie|Gastronomia|Gastronomia|Гастрономия|Gastronomie
Hospitalidad|Hospitality|Hospitalité|Gastfreundschaft|Ospitalità|Hospitalidade|Гостеприимство|Ospitalitate
Estereotipo|Stereotype|Stéréotype|Stereotyp|Stereotipo|Estereótipo|Стереотип|Stereotip
Tolerancia|Tolerance|Tolérance|Toleranz|Tolleranza|Tolerância|Толерантность|Toleranță
Mochilero|Backpacker|Routard|Rucksacktourist|Backpacker|Mochileiro|Турист с рюкзаком|Turist cu rucsac
Frontera|Border|Frontière|Grenze|Frontiera|Fronteira|Граница|Frontieră
Dialecto|Dialect|Dialecte|Dialekt|Dialetto|Dialeto|Диалект|Dialect
`);
  addExtra(u, "s", `
Viajar abre la mente a otras formas de vida.|Travelling opens the mind to other ways of life.|Voyager ouvre l'esprit à d'autres modes de vie.|Reisen erweitert den Horizont und lässt einen andere Lebensweisen kennenlernen.|Viaggiare apre la mente ad altri modi di vivere.|Viajar abre a mente a outras formas de vida.|Путешествия расширяют кругозор и открывают глаза на другие способы жизни.|Călătoriile îți deschid orizontul către alte moduri de viață.
La gastronomía local fue lo mejor del viaje.|The local cuisine was the highlight of the trip.|La gastronomie locale a été le point fort de ce voyage.|Die lokale Küche war das Beste an der Reise.|La cucina locale è stata la parte migliore del viaggio.|A gastronomia local foi o melhor da viagem.|Местная кухня стала лучшей частью поездки.|Gastronomia locală a fost cea mai frumoasă parte a călătoriei.
No hay que juzgar a un país por un estereotipo.|You shouldn't judge a country based on a stereotype.|Il ne faut pas juger un pays sur la base d'un stéréotype.|Man sollte ein Land nicht anhand eines Klischees beurteilen.|Non bisogna giudicare un paese sulla base di uno stereotipo.|Não se deve julgar um país com base num estereótipo.|Не следует судить о стране по стереотипам.|Nu trebuie să judecăm o țară pe baza unui stereotip.
Nos recibieron con una hospitalidad increíble.|They welcomed us with incredible hospitality.|Ils nous ont accueillis avec une incroyable hospitalité.|Wir wurden mit unglaublicher Gastfreundschaft empfangen.|Ci hanno accolto con un'ospitalità incredibile.|Receberam-nos com uma hospitalidade incrível.|Нас встретили с невероятным гостеприимством.|Ne-au întâmpinat cu o ospitalitate incredibilă.
En cada región se habla un dialecto distinto.|A different dialect is spoken in each region.|Dans chaque région, on parle un dialecte différent.|In jeder Region wird ein anderer Dialekt gesprochen.|In ogni regione si parla un dialetto diverso.|Em cada região fala-se um dialeto diferente.|В каждом регионе говорят на своём диалекте.|În fiecare regiune se vorbește un dialect diferit.
`);

  u = ADD("Vivienda y ciudad", "home", "Alquilas una vivienda y negocias las condiciones.");
  addExtra(u, "w", `
Alquiler|Rent|Location|Miete|Affitto|Aluguer|Аренда|Chirie
Inquilino|Tenant|Locataire|Mieter|Inquilino|Inquilino|Арендатор|Chiriaș
Propietario|Owner|Propriétaire|Eigentümer|Proprietario|Proprietário|Владелец|Proprietar
Fianza|Deposit|Caution|Kaution|Cauzione|Caução|Залог|Cauțiune
Barrio|Neighbourhood|Quartier|Stadtviertel|Quartiere|Bairro|Район|Cartier
Mudanza|Move|Déménagement|Umzug|Trasloco|Mudança|Переезд|Mutare
Hipoteca|Mortgage|Prêt immobilier|Hypothek|Mutuo|Hipoteca|Ипотека|Ipotecă
Contrato de alquiler|Rental agreement|Bail|Mietvertrag|Contratto d'affitto|Contrato de arrendamento|Договор аренды|Contract de închiriere
`);
  addExtra(u, "s", `
El alquiler incluye los gastos de agua y luz.|The rent includes water and electricity charges.|Le loyer comprend les frais d'eau et d'électricité.|In der Miete sind die Wasser- und Stromkosten enthalten.|L'affitto include le spese per l'acqua e l'elettricità.|O aluguer inclui as despesas de água e eletricidade.|В стоимость аренды входят расходы на воду и электричество.|Chiria include cheltuielile cu apa și electricitatea.
Tuve que dejar una fianza de dos meses.|I had to pay two months' deposit.|J'ai dû verser une caution équivalente à deux mois de loyer.|Ich musste eine Kaution in Höhe von zwei Monatsmieten hinterlegen.|Ho dovuto versare una cauzione pari a due mesi.|Tive de deixar uma caução correspondente a dois meses.|Мне пришлось внести залог в размере двухмесячной арендной платы.|A trebuit să depun o garanție echivalentă cu chiria pe două luni.
El propietario aceptó bajar el precio.|The owner agreed to lower the price.|Le propriétaire a accepté de baisser le prix.|Der Eigentümer erklärte sich bereit, den Preis zu senken.|Il proprietario ha accettato di abbassare il prezzo.|O proprietário concordou em baixar o preço.|Владелец согласился снизить цену.|Proprietarul a acceptat să reducă prețul.
Busco un barrio tranquilo y bien comunicado.|I'm looking for a quiet neighbourhood with good transport links.|Je recherche un quartier calme et bien desservi.|Ich suche ein ruhiges Viertel mit guter Anbindung.|Cerco un quartiere tranquillo e ben collegato.|Procuro um bairro tranquilo e com boas ligações de transportes.|Я ищу тихий район с удобным транспортным сообщением.|Caut un cartier liniștit și bine deservit de mijloace de transport.
La hipoteca me compromete por veinte años.|The mortgage ties me in for twenty years.|Ce crédit immobilier m'engage pour vingt ans.|Die Hypothek bindet mich für zwanzig Jahre.|Il mutuo mi vincola per venti anni.|A hipoteca vincula-me por vinte anos.|Ипотека обязывает меня на двадцать лет.|Ipoteca mă obligă să o achit timp de douăzeci de ani.
`);

  u = ADD("Finanzas personales", "coin", "Planificas tu presupuesto y tus inversiones.");
  addExtra(u, "w", `
Presupuesto|Budget|Budget|Budget|Budget|Orçamento|Бюджет|Buget
Inversión|Investment|Investissement|Investition|Investimento|Investimento|Инвестиция|Investiție
Interés|Interest|Intérêt|Zinsen|Interessi|Juro|Процент|Dobândă
Inflación|Inflation|Inflation|Inflation|Inflazione|Inflação|Инфляция|Inflație
Gasto|Expense|Dépense|Ausgabe|Spesa|Despesa|Расход|Cheltuială
Ingreso|Income|Revenu|Einkommen|Reddito|Rendimento|Доход|Venit
Jubilación|Retirement|Retraite|Ruhestand|Pensione|Reforma|Пенсия|Pensionare
Ahorro|Savings|Épargne|Ersparnis|Risparmio|Poupança|Сбережение|Economisire
`);
  addExtra(u, "s", `
Hago un presupuesto mensual para controlar mis gastos.|I draw up a monthly budget to keep track of my spending.|Je dresse un budget mensuel pour contrôler mes dépenses.|Ich erstelle einen monatlichen Haushaltsplan, um meine Ausgaben im Blick zu behalten.|Faccio un bilancio mensile per tenere sotto controllo le mie spese.|Faço um orçamento mensal para controlar as minhas despesas.|Я составляю ежемесячный бюджет, чтобы контролировать свои расходы.|Îmi fac un buget lunar pentru a-mi ține evidența cheltuielilor.
La inflación reduce el poder de compra.|Inflation reduces purchasing power.|L'inflation réduit le pouvoir d'achat.|Die Inflation mindert die Kaufkraft.|L'inflazione riduce il potere d'acquisto.|A inflação reduz o poder de compra.|Инфляция снижает покупательную способность.|Inflația reduce puterea de cumpărare.
Quiero invertir una parte de mis ingresos.|I want to invest part of my income.|Je souhaite investir une partie de mes revenus.|Ich möchte einen Teil meines Einkommens anlegen.|Vorrei investire una parte del mio reddito.|Quero investir uma parte dos meus rendimentos.|Я хочу вложить часть своих доходов.|Vreau să investesc o parte din veniturile mele.
Pagar una deuda con interés sale caro.|Paying off a debt with interest works out expensive.|Rembourser une dette avec des intérêts coûte cher.|Eine Schuld mit Zinsen zu begleichen, kommt teuer zu stehen.|Pagare un debito con gli interessi costa caro.|Pagar uma dívida com juros sai caro.|Погашать долг с процентами обходится дорого.|A achita o datorie cu dobândă iese scump.
Pienso en mi jubilación desde ahora.|I'm already thinking about my retirement.|Je pense déjà à ma retraite.|Ich denke schon jetzt an meinen Ruhestand.|Penso già alla mia pensione.|Já estou a pensar na minha reforma.|Я уже сейчас задумываюсь о своей пенсии.|Mă gândesc la pensie încă de pe acum.
`);

  u = ADD("Medios y redes", "search", "Analizas cómo los medios y las redes influyen en la opinión.");
  addExtra(u, "w", `
Influencia|Influence|Influence|Einfluss|Influsso|Influência|Влияние|Influență
Desinformación|Disinformation|Désinformation|Desinformation|Disinformazione|Desinformação|Дезинформация|Dezinformare
Audiencia|Audience|Audience|Publikum|Pubblico|Audiência|Аудитория|Audiență
Reputación|Reputation|Réputation|Ruf|Reputazione|Reputação|Репутация|Reputație
Censura|Censorship|Censure|Zensur|Censura|Censura|Цензура|Cenzură
Opinión pública|Public opinion|Opinion publique|Öffentliche Meinung|Opinione pubblica|Opinião pública|Общественное мнение|Opinia publică
Viral|Viral|Viral|Viral|Virale|Viral|Вирусный|Viral
Verificar|To verify|Vérifier|Überprüfen|Verificare|Verificar|Проверять|A verifica
`);
  addExtra(u, "s", `
Las redes sociales moldean la opinión pública.|Social media shapes public opinion.|Les réseaux sociaux façonnent l'opinion publique.|Soziale Netzwerke prägen die öffentliche Meinung.|I social media influenzano l'opinione pubblica.|As redes sociais moldam a opinião pública.|Социальные сети формируют общественное мнение.|Rețelele sociale modelează opinia publică.
Antes de compartir, conviene verificar la fuente.|Before sharing, it is a good idea to check the source.|Avant de partager, il est préférable de vérifier la source.|Bevor man etwas teilt, sollte man die Quelle überprüfen.|Prima di condividere, è bene verificare la fonte.|Antes de partilhar, é aconselhável verificar a fonte.|Прежде чем делиться информацией, стоит проверить источник.|Înainte de a distribui informația, este recomandat să verificați sursa.
La desinformación se propaga muy rápido.|Misinformation spreads very quickly.|La désinformation se propage très rapidement.|Falschinformationen verbreiten sich sehr schnell.|La disinformazione si diffonde molto rapidamente.|A desinformação espalha-se muito rapidamente.|Дезинформация распространяется очень быстро.|Dezinformarea se răspândește foarte repede.
Ese video se hizo viral en pocas horas.|That video went viral within a few hours.|Cette vidéo est devenue virale en quelques heures.|Dieses Video ging innerhalb weniger Stunden viral.|Quel video è diventato virale nel giro di poche ore.|Esse vídeo tornou-se viral em poucas horas.|Это видео стало вирусным всего за несколько часов.|Videoclipul acela a devenit viral în doar câteva ore.
La reputación en línea es difícil de reparar.|An online reputation is difficult to repair.|Il est difficile de rétablir sa réputation en ligne.|Den Online-Ruf wiederherzustellen, ist schwierig.|La reputazione online è difficile da recuperare.|É difícil recuperar a reputação online.|Репутацию в Интернете восстановить очень сложно.|Reputația online este greu de refăcut.
`);

  u = ADD("Quejas y negociación", "target", "Presentas una reclamación y llegas a un acuerdo.");
  addExtra(u, "w", `
Reclamación|Complaint|Réclamation|Reklamation|Reclamo|Reclamação|Претензия|Reclamație
Garantía|Warranty|Garantie|Garantie|Garanzia|Garantia|Гарантия|Garanție
Compensación|Compensation|Indemnisation|Entschädigung|Risarcimento|Compensação|Компенсация|Compensație
Acuerdo|Agreement|Accord|Vereinbarung|Accordo|Acordo|Соглашение|Acord
Concesión|Concession|Concession|Zugeständnis|Concessione|Concessão|Уступка|Concesie
Defecto|Defect|Défaut|Mangel|Difetto|Defeito|Дефект|Defect
Disculpa|Apology|Excuse|Entschuldigung|Scuse|Desculpa|Извинение|Scuze
Cláusula|Clause|Clause|Klausel|Clausola|Cláusula|Пункт договора|Clauză
`);
  addExtra(u, "s", `
Quisiera presentar una reclamación formal.|I would like to make a formal complaint.|Je souhaiterais déposer une réclamation officielle.|Ich möchte eine formelle Beschwerde einreichen.|Vorrei presentare un reclamo formale.|Gostaria de apresentar uma reclamação formal.|Я хотел бы подать официальную жалобу.|Aș dori să depun o plângere oficială.
El producto llegó con un defecto de fábrica.|The product arrived with a manufacturing fault.|Le produit présentait un défaut de fabrication à la livraison.|Das Produkt wies bei der Lieferung einen Herstellungsfehler auf.|Il prodotto è arrivato con un difetto di fabbricazione.|O produto chegou com um defeito de fábrica.|Товар поступил с заводским браком.|Produsul a sosit cu un defect de fabricație.
Exijo una compensación por las molestias.|I demand compensation for the inconvenience caused.|J'exige une indemnisation pour le désagrément subi.|Ich fordere eine Entschädigung für die Unannehmlichkeiten.|Chiedo un risarcimento per il disagio causato.|Exijo uma compensação pelos transtornos causados.|Я требую компенсации за причиненные неудобства.|Solicit o despăgubire pentru neplăcerile cauzate.
Estoy dispuesto a llegar a un acuerdo.|I am willing to reach an agreement.|Je suis prêt à trouver un accord.|Ich bin bereit, eine Einigung zu erzielen.|Sono disposto a raggiungere un accordo.|Estou disposto a chegar a um acordo.|Я готов прийти к соглашению.|Sunt dispus să ajung la un acord.
Revisemos esta cláusula antes de firmar.|Let's review this clause before signing.|Examinons cette clause avant de signer.|Lassen Sie uns diese Klausel prüfen, bevor wir unterschreiben.|Rivediamo questa clausola prima di firmare.|Vamos rever esta cláusula antes de assinar.|Давайте проверим этот пункт перед подписанием.|Să revizuim această clauză înainte de a semna.
`);

  /* ============ C1 ============ */
  u = ADD("Economía y trabajo", "coin", "Analizas la situación económica y su efecto en el empleo.");
  addExtra(u, "w", `
Mercado|Market|Marché|Markt|Mercato|Mercado|Рынок|Piață
Crecimiento|Growth|Croissance|Wachstum|Crescita|Crescimento|Рост|Creștere
Recesión|Recession|Récession|Rezession|Recessione|Recessão|Рецессия|Recesiune
Desempleo|Unemployment|Chômage|Arbeitslosigkeit|Disoccupazione|Desemprego|Безработица|Șomaj
Productividad|Productivity|Productivité|Produktivität|Produttività|Produtividade|Производительность|Productivitate
Demanda|Demand|Demande|Nachfrage|Domanda|Procura|Спрос|Cerere
Subsidio|Subsidy|Subvention|Subvention|Sussidio|Subsídio|Субсидия|Subvenție
Brecha|Gap|Écart|Kluft|Divario|Fosso|Разрыв|Decalaj
`);
  addExtra(u, "s", `
La recesión golpeó con fuerza al sector turístico.|The recession hit the tourism sector hard.|La récession a durement frappé le secteur du tourisme.|Die Rezession hat den Tourismussektor hart getroffen.|La recessione ha colpito duramente il settore turistico.|A recessão atingiu duramente o setor do turismo.|Рецессия нанесла сильный удар по туристическому сектору.|Recesiunea a lovit puternic sectorul turistic.
El desempleo juvenil sigue siendo elevado.|Youth unemployment remains high.|Le chômage des jeunes reste élevé.|Die Jugendarbeitslosigkeit ist nach wie vor hoch.|La disoccupazione giovanile rimane elevata.|O desemprego juvenil continua a ser elevado.|Уровень безработицы среди молодежи по-прежнему остается высоким.|Șomajul în rândul tinerilor rămâne ridicat.
La productividad no ha crecido al ritmo esperado.|Productivity has not grown at the expected rate.|La productivité n'a pas augmenté au rythme escompté.|Die Produktivität ist nicht so stark gestiegen wie erwartet.|La produttività non è cresciuta al ritmo previsto.|A produtividade não tem crescido ao ritmo esperado.|Производительность не растет такими темпами, как ожидалось.|Productivitatea nu a crescut în ritmul preconizat.
El gobierno aprobó un subsidio para las familias.|The government approved a subsidy for families.|Le gouvernement a approuvé une aide financière destinée aux familles.|Die Regierung hat eine Beihilfe für Familien bewilligt.|Il governo ha approvato un sussidio per le famiglie.|O governo aprovou um subsídio para as famílias.|Правительство утвердило пособие для семей.|Guvernul a aprobat o subvenție pentru familii.
La brecha salarial persiste entre hombres y mujeres.|The pay gap between men and women persists.|L'écart salarial entre les hommes et les femmes persiste.|Das Lohngefälle zwischen Männern und Frauen besteht weiterhin.|Il divario salariale tra uomini e donne persiste.|A disparidade salarial entre homens e mulheres persiste.|Разрыв в заработной плате между мужчинами и женщинами по-прежнему сохраняется.|Diferența salarială dintre bărbați și femei persistă.
`);

  u = ADD("Política y sociedad", "flag", "Comentas un cambio político y sus consecuencias.");
  addExtra(u, "w", `
Gobierno|Government|Gouvernement|Regierung|Governo|Governo|Правительство|Guvern
Elecciones|Elections|Élections|Wahlen|Elezioni|Eleições|Выборы|Alegeri
Coalición|Coalition|Coalition|Koalition|Coalizione|Coligação|Коалиция|Coaliție
Legislación|Legislation|Législation|Gesetzgebung|Legislazione|Legislação|Законодательство|Legislație
Ciudadanía|Citizenship|Citoyenneté|Bürgerschaft|Cittadinanza|Cidadania|Гражданство|Cetățenie
Corrupción|Corruption|Corruption|Korruption|Corruzione|Corrupção|Коррупция|Corupție
Transparencia|Transparency|Transparence|Transparenz|Trasparenza|Transparência|Прозрачность|Transparență
Protesta|Protest|Manifestation|Protest|Protesta|Protesto|Протест|Protest
`);
  addExtra(u, "s", `
La coalición perdió la mayoría en el parlamento.|The coalition lost its majority in parliament.|La coalition a perdu la majorité au Parlement.|Die Koalition hat ihre Mehrheit im Parlament verloren.|La coalizione ha perso la maggioranza in parlamento.|A coligação perdeu a maioria no parlamento.|Коалиция утратила большинство в парламенте.|Coaliția a pierdut majoritatea în parlament.
Se exigen mayor transparencia y rendición de cuentas.|There are calls for greater transparency and accountability.|On exige davantage de transparence et de responsabilité.|Es werden mehr Transparenz und Rechenschaftspflicht gefordert.|Si richiedono maggiore trasparenza e responsabilità.|Exigem-se maior transparência e prestação de contas.|Требуется обеспечить большую прозрачность и подотчетность.|Se solicită o mai mare transparență și responsabilitate.
La nueva legislación entrará en vigor el próximo año.|The new legislation will come into force next year.|La nouvelle législation entrera en vigueur l'année prochaine.|Das neue Gesetz tritt im nächsten Jahr in Kraft.|La nuova normativa entrerà in vigore l'anno prossimo.|A nova legislação entrará em vigor no próximo ano.|Новое законодательство вступит в силу в следующем году.|Noua legislație va intra în vigoare anul viitor.
La corrupción erosiona la confianza en las instituciones.|Corruption erodes trust in institutions.|La corruption sape la confiance dans les institutions.|Korruption untergräbt das Vertrauen in die Institutionen.|La corruzione mina la fiducia nelle istituzioni.|A corrupção mina a confiança nas instituições.|Коррупция подрывает доверие к институтам.|Corupția subminează încrederea în instituții.
Miles de personas salieron a protestar pacíficamente.|Thousands of people took to the streets to protest peacefully.|Des milliers de personnes sont descendues dans la rue pour manifester pacifiquement.|Tausende Menschen gingen auf die Straße, um friedlich zu demonstrieren.|Migliaia di persone sono scese in piazza per manifestare pacificamente.|Milhares de pessoas saíram às ruas para protestar pacificamente.|Тысячи людей вышли на улицы, чтобы провести мирную акцию протеста.|Mii de oameni au ieșit în stradă pentru a protesta pașnic.
`);

  u = ADD("Ciencia y ética", "cross", "Debates los límites éticos de un avance científico.");
  addExtra(u, "w", `
Ética|Ethics|Éthique|Ethik|Etica|Ética|Этика|Etică
Consentimiento|Consent|Consentement|Einwilligung|Consenso|Consentimento|Согласие|Consimțământ
Genoma|Genome|Génome|Genom|Genoma|Genoma|Геном|Genom
Dilema|Dilemma|Dilemme|Dilemma|Dilemma|Dilema|Дилемма|Dilemă
Regulación|Regulation|Réglementation|Regulierung|Regolamentazione|Regulamentação|Регулирование|Reglementare
Responsabilidad|Responsibility|Responsabilité|Verantwortung|Responsabilità|Responsabilidade|Ответственность|Responsabilitate
Evidencia|Evidence|Preuve|Beweis|Evidenza|Evidência|Доказательство|Dovadă
Experimentación|Experimentation|Expérimentation|Experimentieren|Sperimentazione|Experimentação|Экспериментирование|Experimentare
`);
  addExtra(u, "s", `
Este avance plantea un serio dilema ético.|This development poses a serious ethical dilemma.|Cette avancée soulève un sérieux dilemme éthique.|Diese Entwicklung wirft ein ernstes ethisches Dilemma auf.|Questo progresso pone un serio dilemma etico.|Este avanço coloca um sério dilema ético.|Этот прогресс ставит перед нами серьезную этическую дилемму.|Această evoluție ridică o dilemă etică serioasă.
Se requiere el consentimiento informado de los pacientes.|Informed consent from patients is required.|Le consentement éclairé des patients est requis.|Die Einwilligung der Patienten nach Aufklärung ist erforderlich.|È necessario il consenso informato dei pazienti.|É necessário o consentimento informado dos doentes.|Требуется информированное согласие пациентов.|Este necesar consimțământul informat al pacienților.
Sin evidencia sólida, la hipótesis no es válida.|Without solid evidence, the hypothesis is not valid.|En l'absence de preuves solides, l'hypothèse n'est pas valable.|Ohne stichhaltige Beweise ist die Hypothese ungültig.|In assenza di prove concrete, l'ipotesi non è valida.|Sem provas sólidas, a hipótese não é válida.|Без убедительных доказательств гипотеза не является обоснованной.|În lipsa unor dovezi solide, ipoteza nu este valabilă.
Hace falta una regulación más estricta.|Stricter regulation is needed.|Il faut une réglementation plus stricte.|Es bedarf einer strengeren Regulierung.|È necessaria una regolamentazione più rigorosa.|É necessária uma regulamentação mais rigorosa.|Необходимо ввести более строгое регулирование.|Este nevoie de o reglementare mai strictă.
La ciencia debe avanzar con responsabilidad.|Science must advance responsibly.|La science doit progresser de manière responsable.|Die Wissenschaft muss verantwortungsbewusst voranschreiten.|La scienza deve progredire in modo responsabile.|A ciência deve avançar com responsabilidade.|Наука должна развиваться ответственно.|Știința trebuie să avanseze în mod responsabil.
`);

  u = ADD("Arte y literatura", "palette", "Analizas una obra y explicas su valor artístico.");
  addExtra(u, "w", `
Novela|Novel|Roman|Roman|Romanzo|Romance|Роман|Roman
Poesía|Poetry|Poésie|Lyrik|Poesia|Poesia|Поэзия|Poezie
Metáfora|Metaphor|Métaphore|Metapher|Metafora|Metáfora|Метафора|Metaforă
Narrador|Narrator|Narrateur|Erzähler|Narratore|Narrador|Рассказчик|Narator
Obra maestra|Masterpiece|Chef-d'œuvre|Meisterwerk|Capolavoro|Obra-prima|Шедевр|Capodoperă
Estilo|Style|Style|Stil|Stile|Estilo|Стиль|Stil
Crítica|Criticism|Critique|Kritik|Critica|Crítica|Критика|Critică
Vanguardia|Avant-garde|Avant-garde|Avantgarde|Avanguardia|Vanguarda|Авангард|Avangardă
`);
  addExtra(u, "s", `
La novela retrata la sociedad de su época.|The novel portrays the society of its time.|Ce roman dresse un portrait de la société de son époque.|Der Roman zeichnet ein Bild der Gesellschaft seiner Zeit.|Il romanzo descrive la società dell'epoca.|O romance retrata a sociedade da sua época.|Роман отражает общество своей эпохи.|Romanul prezintă societatea epocii sale.
El poeta usa una metáfora muy original.|The poet uses a very original metaphor.|Le poète utilise une métaphore très originale.|Der Dichter bedient sich einer sehr originellen Metapher.|Il poeta ricorre a una metafora molto originale.|O poeta recorre a uma metáfora muito original.|Поэт использует весьма оригинальную метафору.|Poetul folosește o metaforă foarte originală.
Esa obra marcó un antes y un después en el arte.|That work marked a turning point in art.|Cette œuvre a marqué un tournant dans l'histoire de l'art.|Dieses Werk markierte einen Wendepunkt in der Kunst.|Quell'opera ha segnato una svolta nell'arte.|Essa obra marcou um antes e um depois na arte.|Это произведение стало переломным моментом в искусстве.|Această operă a marcat un moment de cotitură în istoria artei.
La crítica elogió la sutileza del narrador.|Critics praised the narrator's subtlety.|La critique a salué la subtilité du narrateur.|Die Kritiker lobten die Feinfühligkeit des Erzählers.|La critica ha elogiato la sottigliezza del narratore.|A crítica elogiou a subtileza do narrador.|Критики высоко оценили тонкость повествования.|Criticii au lăudat subtilitatea naratorului.
Es una corriente de vanguardia poco convencional.|It is an unconventional avant-garde movement.|C'est un courant d'avant-garde peu conventionnel.|Es handelt sich um eine unkonventionelle Avantgarde-Bewegung.|È una corrente d'avanguardia poco convenzionale.|É uma corrente de vanguarda pouco convencional.|Это нестандартное авангардное направление.|Este un curent avangardist neconvențional.
`);

  u = ADD("Historia y memoria", "book", "Reflexionas sobre un periodo histórico y su legado.");
  addExtra(u, "w", `
Siglo|Century|Siècle|Jahrhundert|Secolo|Século|Век|Secol
Imperio|Empire|Empire|Reich|Impero|Império|Империя|Imperiu
Revolución|Revolution|Révolution|Revolution|Rivoluzione|Revolução|Революция|Revoluție
Conflicto|Conflict|Conflit|Konflikt|Conflitto|Conflito|Конфликт|Conflict
Legado|Legacy|Héritage|Vermächtnis|Eredità|Legado|Наследие|Moștenire
Archivo|Archive|Archives|Archiv|Archivio|Arquivo|Архив|Arhivă
Testimonio|Testimony|Témoignage|Zeugnis|Testimonianza|Testemunho|Свидетельство|Mărturie
Reconciliación|Reconciliation|Réconciliation|Versöhnung|Riconciliazione|Reconciliação|Примирение|Reconciliere
`);
  addExtra(u, "s", `
El imperio se derrumbó a finales del siglo.|The empire collapsed at the end of the century.|L'empire s'est effondré à la fin du siècle.|Das Reich brach gegen Ende des Jahrhunderts zusammen.|L'impero crollò alla fine del secolo.|O império ruiu no final do século.|Империя рухнула в конце века.|Imperiul s-a prăbușit la sfârșitul secolului.
Los archivos revelan datos desconocidos.|The files reveal previously unknown information.|Ces archives révèlent des informations jusqu'alors inconnues.|Die Akten enthüllen bisher unbekannte Fakten.|I documenti rivelano informazioni finora sconosciute.|Os arquivos revelam dados até agora desconhecidos.|Документы раскрывают неизвестные факты.|Documentele dezvăluie informații necunoscute.
Su testimonio es parte de la memoria colectiva.|His testimony forms part of our collective memory.|Son témoignage fait partie de la mémoire collective.|Sein Zeugnis ist Teil des kollektiven Gedächtnisses.|La sua testimonianza fa parte della memoria collettiva.|O seu testemunho faz parte da memória coletiva.|Его свидетельство является частью коллективной памяти.|Mărturia sa face parte din memoria colectivă.
La revolución transformó toda la estructura social.|The revolution transformed the entire social structure.|La révolution a bouleversé toute la structure sociale.|Die Revolution hat die gesamte gesellschaftliche Struktur verändert.|La rivoluzione ha trasformato l'intera struttura sociale.|A revolução transformou toda a estrutura social.|Революция изменила всю социальную структуру.|Revoluția a transformat întreaga structură socială.
Aún se discute el legado de aquel periodo.|The legacy of that period is still a matter of debate.|L'héritage de cette période fait encore l'objet de débats.|Über das Erbe dieser Zeit wird noch immer diskutiert.|Si discute ancora oggi dell'eredità di quel periodo.|O legado desse período continua a ser objeto de debate.|Наследие того периода до сих пор вызывает споры.|Moștenirea acelei perioade este încă subiect de dezbatere.
`);

  u = ADD("Lenguaje y comunicación", "chat", "Explicas por qué un mensaje se entendió mal.");
  addExtra(u, "w", `
Matiz|Nuance|Nuance|Nuance|Sfumatura|Matiz|Нюанс|Nuanță
Ironía|Irony|Ironie|Ironie|Ironia|Ironia|Ирония|Ironie
Registro lingüístico|Register|Registre|Sprachregister|Registro|Registo|Стиль речи|Registru
Eufemismo|Euphemism|Euphémisme|Euphemismus|Eufemismo|Eufemismo|Эвфемизм|Eufemism
Ambigüedad|Ambiguity|Ambiguïté|Mehrdeutigkeit|Ambiguità|Ambiguidade|Неоднозначность|Ambiguitate
Interlocutor|Interlocutor|Interlocuteur|Gesprächspartner|Interlocutore|Interlocutor|Собеседник|Interlocutor
Entonación|Intonation|Intonation|Intonation|Intonazione|Entoação|Интонация|Intonație
Malentendido|Misunderstanding|Malentendu|Missverständnis|Malinteso|Mal-entendido|Недоразумение|Neînțelegere
`);
  addExtra(u, "s", `
Su ironía pasó inadvertida para muchos.|His irony went unnoticed by many.|Son ironie est passée inaperçue pour beaucoup.|Seine Ironie blieb vielen verborgen.|La sua ironia è passata inosservata a molti.|A sua ironia passou despercebida a muitos.|Его ирония осталась незамеченной для многих.|Ironia lui a trecut neobservată pentru mulți.
Hay que adaptar el registro al interlocutor.|You need to adapt your tone to the person you're speaking to.|Il faut adapter le registre à son interlocuteur.|Man muss den Sprachstil an den Gesprächspartner anpassen.|È necessario adattare il registro all'interlocutore.|É preciso adaptar o registo ao interlocutor.|Следует подбирать стиль речи в зависимости от собеседника.|Trebuie să adaptezi registrul la interlocutor.
Eso fue un eufemismo, no una mentira.|That was a euphemism, not a lie.|C'était un euphémisme, pas un mensonge.|Das war eine beschönigende Formulierung, keine Lüge.|Quello era un eufemismo, non una bugia.|Isso foi um eufemismo, não uma mentira.|Это был эвфемизм, а не ложь.|Asta a fost un eufemism, nu o minciună.
La ambigüedad de la frase generó un malentendido.|The ambiguity of the sentence led to a misunderstanding.|L'ambiguïté de cette phrase a donné lieu à un malentendu.|Die Mehrdeutigkeit des Satzes führte zu einem Missverständnis.|L'ambiguità della frase ha dato luogo a un malinteso.|A ambiguidade da frase deu origem a um mal-entendido.|Неоднозначность этой фразы привела к недоразумению.|Ambiguitatea frazei a dat naștere la o neînțelegere.
La entonación cambia por completo el sentido.|Intonation completely changes the meaning.|L'intonation change complètement le sens.|Die Betonung verändert die Bedeutung völlig.|L'intonazione cambia completamente il significato.|A entoação altera completamente o sentido.|Интонация полностью меняет смысл.|Intonația schimbă complet sensul.
`);

  u = ADD("Derecho y justicia", "tie", "Sigues un caso judicial y lo explicas con claridad.");
  addExtra(u, "w", `
Tribunal|Court|Tribunal|Gericht|Tribunale|Tribunal|Суд|Tribunal
Sentencia|Ruling|Jugement|Urteil|Sentenza|Sentença|Приговор|Hotărâre
Testigo|Witness|Témoin|Zeuge|Testimone|Testemunha|Свидетель|Martor
Abogado|Lawyer|Avocat|Rechtsanwalt|Avvocato|Advogado|Адвокат|Avocat
Demanda judicial|Lawsuit|Action en justice|Klage|Azione legale|Ação judicial|Судебный иск|Acțiune în instanță
Apelación|Appeal|Appel|Berufung|Appello|Recurso|Апелляция|Apel
Cumplimiento|Fulfilment|Exécution|Erfüllung|Adempimento|Cumprimento|Исполнение|Îndeplinire
Indemnización|Compensation|Dédommagement|Schadenersatz|Indennizzo|Indemnização|Возмещение|Despăgubire
`);
  addExtra(u, "s", `
El tribunal dictó sentencia ayer por la mañana.|The court handed down its judgement yesterday morning.|Le tribunal a rendu son jugement hier matin.|Das Gericht hat gestern Vormittag sein Urteil verkündet.|Il tribunale ha emesso la sentenza ieri mattina.|O tribunal proferiu a sentença ontem de manhã.|Вчера утром суд вынес приговор.|Instanța a pronunțat sentința ieri dimineață.
El abogado presentó una apelación.|The lawyer lodged an appeal.|L'avocat a interjeté appel.|Der Anwalt legte Berufung ein.|L'avvocato ha presentato ricorso.|O advogado interpôs um recurso.|Адвокат подал апелляцию.|Avocatul a depus o contestație.
Un testigo clave cambió su declaración.|A key witness changed his statement.|Un témoin clé a modifié sa déposition.|Ein wichtiger Zeuge hat seine Aussage geändert.|Un testimone chiave ha cambiato la propria deposizione.|Uma testemunha-chave alterou o seu depoimento.|Один из ключевых свидетелей изменил свои показания.|Un martor cheie și-a schimbat declarația.
Debe cumplirse el contrato en todos sus términos.|The contract must be fulfilled in full.|Le contrat doit être respecté dans son intégralité.|Der Vertrag muss in allen Punkten erfüllt werden.|Il contratto deve essere rispettato in ogni sua clausola.|O contrato deve ser cumprido na íntegra.|Договор должен быть выполнен во всех его условиях.|Contractul trebuie respectat în toate clauzele sale.
Recibió una indemnización por los daños.|He received compensation for the damages.|Il a reçu une indemnisation pour les dommages subis.|Er erhielt eine Entschädigung für den entstandenen Schaden.|Ha ricevuto un risarcimento per i danni subiti.|Recebeu uma indemnização pelos danos.|Он получил компенсацию за причиненный ущерб.|A primit o despăgubire pentru prejudiciile suferite.
`);

  u = ADD("Empresa y liderazgo", "target", "Presentas la estrategia de una empresa a su equipo.");
  addExtra(u, "w", `
Estrategia|Strategy|Stratégie|Strategie|Strategia|Estratégia|Стратегия|Strategie
Directivo|Executive|Dirigeant|Führungskraft|Dirigente|Dirigente|Руководитель|Conducător
Competidor|Competitor|Concurrent|Konkurrent|Concorrente|Concorrente|Конкурент|Concurent
Fusión|Merger|Fusion|Fusion|Fusione|Fusão|Слияние|Fuziune
Rentabilidad|Profitability|Rentabilité|Rentabilität|Redditività|Rentabilidade|Рентабельность|Rentabilitate
Innovar|To innovate|Innover|Innovieren|Innovare|Inovar|Внедрять новое|A inova
Delegar|To delegate|Déléguer|Delegieren|Delegare|Delegar|Делегировать|A delega
Visión|Vision|Vision|Vision|Visione|Visão|Видение|Viziune
`);
  addExtra(u, "s", `
La empresa necesita una estrategia a largo plazo.|The company needs a long-term strategy.|L'entreprise a besoin d'une stratégie à long terme.|Das Unternehmen braucht eine langfristige Strategie.|L'azienda ha bisogno di una strategia a lungo termine.|A empresa precisa de uma estratégia a longo prazo.|Компании нужна долгосрочная стратегия.|Compania are nevoie de o strategie pe termen lung.
Un buen líder sabe delegar responsabilidades.|A good leader knows how to delegate responsibilities.|Un bon dirigeant sait déléguer les responsabilités.|Eine gute Führungskraft versteht es, Aufgaben zu delegieren.|Un buon leader sa delegare le responsabilità.|Um bom líder sabe delegar responsabilidades.|Хороший лидер умеет делегировать обязанности.|Un bun lider știe să delege responsabilități.
La fusión mejorará la rentabilidad de ambas.|The merger will improve the profitability of both companies.|Cette fusion permettra d'améliorer la rentabilité des deux entreprises.|Die Fusion wird die Rentabilität beider Unternehmen verbessern.|La fusione migliorerà la redditività di entrambe le società.|A fusão irá melhorar a rentabilidade de ambas as empresas.|Слияние повысит рентабельность обеих компаний.|Fuziunea va îmbunătăți rentabilitatea ambelor companii.
Tenemos que innovar para no perder competitividad.|We need to innovate so as not to lose our competitive edge.|Nous devons innover pour ne pas perdre notre compétitivité.|Wir müssen innovativ sein, um unsere Wettbewerbsfähigkeit nicht zu verlieren.|Dobbiamo innovare per non perdere competitività.|Temos de inovar para não perdermos competitividade.|Мы должны внедрять инновации, чтобы не утратить конкурентоспособность.|Trebuie să inovăm pentru a nu ne pierde competitivitatea.
Su visión transformó la cultura de la compañía.|His vision transformed the company's culture.|Sa vision a transformé la culture de l'entreprise.|Seine Vision hat die Unternehmenskultur verändert.|La sua visione ha trasformato la cultura aziendale.|A sua visão transformou a cultura da empresa.|Его видение изменило корпоративную культуру компании.|Viziunea sa a transformat cultura companiei.
`);

  u = ADD("Medio ambiente y futuro", "leaf", "Propones medidas ante los retos ambientales.");
  addExtra(u, "w", `
Sostenibilidad|Sustainability|Durabilité|Nachhaltigkeit|Sostenibilità|Sustentabilidade|Устойчивость|Sustenabilitate
Emisiones|Emissions|Émissions|Emissionen|Emissioni|Emissões|Выбросы|Emisii
Biodiversidad|Biodiversity|Biodiversité|Artenvielfalt|Biodiversità|Biodiversidade|Биоразнообразие|Biodiversitate
Renovable|Renewable|Renouvelable|Erneuerbar|Rinnovabile|Renovável|Возобновляемый|Regenerabil
Huella de carbono|Carbon footprint|Empreinte carbone|CO2-Fußabdruck|Impronta di carbonio|Pegada de carbono|Углеродный след|Amprenta de carbon
Deforestación|Deforestation|Déforestation|Entwaldung|Deforestazione|Desflorestação|Вырубка лесов|Defrișare
Adaptación|Adaptation|Adaptation|Anpassung|Adattamento|Adaptação|Адаптация|Adaptare
Transición|Transition|Transition|Übergang|Transizione|Transição|Переход|Tranziție
`);
  addExtra(u, "s", `
Reducir las emisiones es una urgencia global.|Reducing emissions is a global priority.|La réduction des émissions est une urgence mondiale.|Die Reduzierung der Emissionen ist eine globale Dringlichkeit.|Ridurre le emissioni è una questione urgente a livello globale.|Reduzir as emissões é uma urgência global.|Сокращение выбросов — это глобальная задача, требующая неотложного решения.|Reducerea emisiilor este o urgență la nivel mondial.
La deforestación amenaza la biodiversidad del planeta.|Deforestation threatens the planet's biodiversity.|La déforestation menace la biodiversité de la planète.|Die Entwaldung bedroht die Artenvielfalt unseres Planeten.|La deforestazione minaccia la biodiversità del pianeta.|A desflorestação ameaça a biodiversidade do planeta.|Вырубка лесов угрожает биоразнообразию планеты.|Defrișările amenință biodiversitatea planetei.
La transición energética exige grandes inversiones.|The energy transition requires major investment.|La transition énergétique nécessite d'importants investissements.|Die Energiewende erfordert hohe Investitionen.|La transizione energetica richiede ingenti investimenti.|A transição energética exige grandes investimentos.|Энергетический переход требует значительных инвестиций.|Tranziția energetică necesită investiții majore.
Cada persona tiene una huella de carbono.|Every person has a carbon footprint.|Chaque personne a une empreinte carbone.|Jeder Mensch hat einen CO2-Fußabdruck.|Ogni persona ha un'impronta di carbonio.|Cada pessoa tem uma pegada de carbono.|У каждого человека есть свой углеродный след.|Fiecare persoană are o amprentă de carbon.
Las ciudades deben adaptarse al cambio climático.|Cities must adapt to climate change.|Les villes doivent s'adapter au changement climatique.|Städte müssen sich an den Klimawandel anpassen.|Le città devono adattarsi ai cambiamenti climatici.|As cidades têm de se adaptar às alterações climáticas.|Города должны адаптироваться к изменению климата.|Orașele trebuie să se adapteze la schimbările climatice.
`);

  u = ADD("Matices y registro", "sparkle", "Ajustas tu forma de hablar según la situación.");
  addExtra(u, "w", `
Sutileza|Subtlety|Subtilité|Feinheit|Sottigliezza|Subtileza|Тонкость|Subtilitate
Concisión|Conciseness|Concision|Prägnanz|Concisione|Concisão|Лаконичность|Concizie
Coloquial|Colloquial|Familier|Umgangssprachlich|Colloquiale|Coloquial|Разговорный|Colocvial
Rebuscado|Convoluted|Recherché|Gekünstelt|Ricercato|Rebuscado|Витиеватый|Căutat
Cortesía|Courtesy|Courtoisie|Höflichkeit|Cortesia|Cortesia|Вежливость|Politețe
Tono|Tone|Ton|Ton|Tono|Tom|Тон|Ton
Insinuar|To insinuate|Insinuer|Andeuten|Insinuare|Insinuar|Намекать|A insinua
Reformular|To rephrase|Reformuler|Umformulieren|Riformulare|Reformular|Переформулировать|A reformula
`);
  addExtra(u, "s", `
Prefiero un lenguaje claro antes que uno rebuscado.|I prefer clear language to flowery language.|Je préfère un langage clair à un langage alambiqué.|Ich ziehe eine klare Sprache einer blumigen vor.|Preferisco un linguaggio chiaro piuttosto che uno ricercato.|Prefiro uma linguagem clara a uma rebuscada.|Я предпочитаю ясный язык, а не вычурный.|Prefer un limbaj clar în locul unuia pretențios.
Conviene reformular la frase con más cortesía.|It would be better to rephrase that in a more polite way.|Il serait préférable de reformuler cette phrase de manière plus courtoise.|Es wäre ratsam, den Satz höflicher zu formulieren.|Sarebbe opportuno riformulare la frase in modo più cortese.|É aconselhável reformular a frase de forma mais cortês.|Следует переформулировать эту фразу, выразив её более вежливо.|Ar fi bine să reformulați fraza într-un mod mai politicos.
Su tono dejaba entrever cierta molestia.|His tone betrayed a certain annoyance.|Son ton laissait transparaître un certain agacement.|Sein Tonfall ließ eine gewisse Verärgerung durchscheinen.|Il suo tono lasciava trasparire un certo fastidio.|O seu tom de voz deixava transparecer um certo aborrecimento.|В его тоне проскальзывало некоторое раздражение.|Tonul său lăsa să se întrevadă o oarecare nemulțumire.
En un correo formal se evita el lenguaje coloquial.|In a formal email, colloquial language should be avoided.|Dans un e-mail officiel, on évite le langage familier.|In einer formellen E-Mail sollte man umgangssprachliche Ausdrücke vermeiden.|In un'e-mail formale si evita il linguaggio colloquiale.|Num e-mail formal, deve-se evitar a linguagem coloquial.|В официальном письме следует избегать разговорного языка.|Într-un e-mail oficial se evită limbajul colocvial.
Quiso insinuar algo sin decirlo abiertamente.|He wanted to hint at something without saying it outright.|Il a voulu faire allusion à quelque chose sans le dire ouvertement.|Er wollte etwas andeuten, ohne es offen auszusprechen.|Ha voluto alludere a qualcosa senza dirlo apertamente.|Ele quis insinuar algo sem o dizer abertamente.|Он хотел намекнуть на что-то, не говоря об этом прямо.|A vrut să sugereze ceva fără să o spună deschis.
`);
})();
