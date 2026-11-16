/* Tercera ampliación, unidades 26-50 (parte de B1, B2 y C1): 6 palabras y 4 frases más por unidad. Formato: es|en|fr|de|it|pt|ru|ro.
   Escritas por Claude (español neutro latinoamericano); sin revisión de hablantes nativos. */
(() => {
  const W = (ui, t) => addExtra(ui, "w", t), S = (ui, t) => addExtra(ui, "s", t);

  /* 25 Cultura y tradiciones */
  W(25, `
Himno|Anthem|Hymne|Hymne|Inno|Hino|Гимн|Imn
Bandera|Flag|Drapeau|Flagge|Bandiera|Bandeira|Флаг|Steag
Monumento|Monument|Monument|Denkmal|Monumento|Monumento|Памятник|Monument
Religión|Religion|Religion|Religion|Religione|Religião|Религия|Religie
Fiesta nacional|National holiday|Fête nationale|Nationalfeiertag|Festa nazionale|Feriado nacional|Национальный праздник|Sărbătoare națională
Héroe|Hero|Héros|Held|Eroe|Herói|Герой|Erou
`);
  S(25, `
La bandera de mi país es roja y blanca.|My country's flag is red and white.|Le drapeau de mon pays est rouge et blanc.|Die Flagge meines Landes ist rot und weiß.|La bandiera del mio paese è rossa e bianca.|A bandeira do meu país é vermelha e branca.|Флаг моей страны красно-белый.|Steagul țării mele este roșu și alb.
Cantamos el himno antes del partido.|We sing the anthem before the match.|Nous chantons l'hymne avant le match.|Wir singen die Hymne vor dem Spiel.|Cantiamo l'inno prima della partita.|Cantamos o hino antes do jogo.|Мы поём гимн перед матчем.|Cântăm imnul înainte de meci.
Ese monumento es muy antiguo.|That monument is very old.|Ce monument est très ancien.|Dieses Denkmal ist sehr alt.|Quel monumento è molto antico.|Esse monumento é muito antigo.|Этот памятник очень старый.|Monumentul acela este foarte vechi.
El día de la fiesta nacional hay desfiles.|On national holiday there are parades.|Le jour de la fête nationale, il y a des défilés.|Am Nationalfeiertag gibt es Umzüge.|Il giorno della festa nazionale ci sono sfilate.|No dia do feriado nacional há desfiles.|В день национального праздника проходят шествия.|În ziua sărbătorii naționale au loc parade.
`);

  /* 26 Amistad y consejos */
  W(26, `
Apoyo|Support|Soutien|Unterstützung|Sostegno|Apoio|Поддержка|Sprijin
Envidia|Envy|Envie|Neid|Invidia|Inveja|Зависть|Invidie
Celos|Jealousy|Jalousie|Eifersucht|Gelosia|Ciúmes|Ревность|Gelozie
Compromiso|Commitment|Engagement|Verpflichtung|Impegno|Compromisso|Обязательство|Angajament
Sinceridad|Sincerity|Sincérité|Aufrichtigkeit|Sincerità|Sinceridade|Искренность|Sinceritate
Conocido|Acquaintance|Connaissance|Bekannter|Conoscente|Conhecido|Знакомый|Cunoscut
`);
  S(26, `
Un buen amigo siempre te da su apoyo.|A good friend always gives you their support.|Un bon ami te soutient toujours.|Ein guter Freund unterstützt dich immer.|Un buon amico ti dà sempre il suo sostegno.|Um bom amigo dá-te sempre o seu apoio.|Хороший друг всегда тебя поддерживает.|Un prieten bun te sprijină întotdeauna.
No siento envidia, me alegro por ti.|I don't feel envy, I'm happy for you.|Je ne ressens pas d'envie, je suis content pour toi.|Ich empfinde keinen Neid, ich freue mich für dich.|Non provo invidia, sono felice per te.|Não sinto inveja, fico feliz por ti.|Я не завидую, я рад за тебя.|Nu simt invidie, mă bucur pentru tine.
Valoro la sinceridad en una amistad.|I value sincerity in a friendship.|J'apprécie la sincérité dans une amitié.|In einer Freundschaft schätze ich Aufrichtigkeit.|Apprezzo la sincerità in un'amicizia.|Valorizo a sinceridade numa amizade.|В дружбе я ценю искренность.|Apreciez sinceritatea într-o prietenie.
Él es solo un conocido, no un amigo.|He's only an acquaintance, not a friend.|Ce n'est qu'une connaissance, pas un ami.|Er ist nur ein Bekannter, kein Freund.|È solo un conoscente, non un amico.|Ele é apenas um conhecido, não um amigo.|Он просто знакомый, а не друг.|El este doar un cunoscut, nu un prieten.
`);

  /* 27 Dinero y trámites */
  W(27, `
Monedas|Coins|Pièces|Münzen|Monete|Moedas|Монеты|Monede
Cartera|Wallet|Portefeuille|Brieftasche|Portafoglio|Carteira|Кошелёк|Portofel
Cobrar|To charge|Facturer|kassieren|Far pagare|Cobrar|Брать плату|A încasa
Gratis|Free|Gratuit|kostenlos|Gratis|Grátis|Бесплатно|Gratuit
Cuenta corriente|Current account|Compte courant|Girokonto|Conto corrente|Conta à ordem|Расчётный счёт|Cont curent
Tarjeta de débito|Debit card|Carte de débit|Debitkarte|Carta di debito|Cartão de débito|Дебетовая карта|Card de debit
`);
  S(27, `
Tengo unas monedas en la cartera.|I have a few coins in my wallet.|J'ai quelques pièces dans mon portefeuille.|Ich habe ein paar Münzen in der Brieftasche.|Ho qualche moneta nel portafoglio.|Tenho algumas moedas na carteira.|У меня в кошельке несколько монет.|Am câteva monede în portofel.
La entrada al museo es gratis los domingos.|Entry to the museum is free on Sundays.|L'entrée du musée est gratuite le dimanche.|Der Eintritt ins Museum ist sonntags kostenlos.|L'ingresso al museo è gratuito la domenica.|A entrada no museu é grátis aos domingos.|Вход в музей бесплатный по воскресеньям.|Intrarea la muzeu este gratuită duminica.
Pago con tarjeta de débito.|I pay with a debit card.|Je paie avec une carte de débit.|Ich zahle mit der Debitkarte.|Pago con la carta di debito.|Pago com cartão de débito.|Я плачу дебетовой картой.|Plătesc cu cardul de debit.
El hotel cobra extra por el desayuno.|The hotel charges extra for breakfast.|L'hôtel fait payer le petit-déjeuner en supplément.|Das Hotel verlangt für das Frühstück extra.|L'albergo fa pagare la colazione a parte.|O hotel cobra a mais pelo pequeno-almoço.|Отель берёт дополнительную плату за завтрак.|Hotelul percepe extra pentru micul dejun.
`);

  /* 28 Experiencias y recuerdos */
  W(28, `
Pasado|Past|Passé|Vergangenheit|Passato|Passado|Прошлое|Trecut
Álbum|Album|Album|Album|Album|Álbum|Альбом|Album
Hogar|Home|Foyer|Zuhause|Casa|Lar|Домашний очаг|Cămin
Juguete|Toy|Jouet|Spielzeug|Giocattolo|Brinquedo|Игрушка|Jucărie
Cuento|Tale|Conte|Märchen|Fiaba|Conto|Сказка|Basm
Primer amor|First love|Premier amour|erste Liebe|Primo amore|Primeiro amor|Первая любовь|Prima iubire
`);
  S(28, `
Miro fotos antiguas en un álbum.|I look at old photos in an album.|Je regarde de vieilles photos dans un album.|Ich schaue mir alte Fotos in einem Album an.|Guardo vecchie foto in un album.|Vejo fotografias antigas num álbum.|Я смотрю старые фотографии в альбоме.|Mă uit la fotografii vechi într-un album.
Mi juguete favorito era un oso de peluche.|My favourite toy was a teddy bear.|Mon jouet préféré était un ours en peluche.|Mein Lieblingsspielzeug war ein Teddybär.|Il mio giocattolo preferito era un orsacchiotto.|O meu brinquedo preferido era um urso de peluche.|Моей любимой игрушкой был плюшевый мишка.|Jucăria mea preferată era un ursuleț de pluș.
Mi abuela me leía cuentos antes de dormir.|My grandmother read me stories before bed.|Ma grand-mère me lisait des contes avant de dormir.|Meine Großmutter las mir vor dem Schlafen Märchen vor.|Mia nonna mi leggeva le fiabe prima di dormire.|A minha avó lia-me contos antes de dormir.|Бабушка читала мне сказки перед сном.|Bunica îmi citea povești înainte de culcare.
Nunca olvidaré mi primer amor.|I'll never forget my first love.|Je n'oublierai jamais mon premier amour.|Ich werde meine erste Liebe nie vergessen.|Non dimenticherò mai il mio primo amore.|Nunca vou esquecer o meu primeiro amor.|Я никогда не забуду свою первую любовь.|Nu-mi voi uita niciodată prima iubire.
`);

  /* 29 Sueños y condiciones */
  W(29, `
Deseo|Wish|Souhait|Wunsch|Desiderio|Desejo|Желание|Dorință
Posibilidad|Possibility|Possibilité|Möglichkeit|Possibilità|Possibilidade|Шанс|Posibilitate
Camino|Path|Chemin|Weg|Strada|Caminho|Путь|Drum
Disciplina|Discipline|Discipline|Disziplin|Disciplina|Disciplina|Дисциплина|Disciplină
Logro|Achievement|Accomplissement|Errungenschaft|Traguardo|Conquista|Достижение|Realizare
Destino|Fate|Destin|Schicksal|Destino|Destino|Судьба|Destin
`);
  S(29, `
Mi mayor deseo es viajar por el mundo.|My greatest wish is to travel the world.|Mon plus grand souhait est de voyager à travers le monde.|Mein größter Wunsch ist es, die Welt zu bereisen.|Il mio più grande desiderio è viaggiare per il mondo.|O meu maior desejo é viajar pelo mundo.|Моё самое большое желание — путешествовать по миру.|Cea mai mare dorință a mea este să călătoresc prin lume.
Con disciplina puedes lograr lo que quieras.|With discipline you can achieve whatever you want.|Avec de la discipline, tu peux réussir ce que tu veux.|Mit Disziplin kannst du alles erreichen, was du willst.|Con la disciplina puoi ottenere ciò che vuoi.|Com disciplina podes alcançar o que quiseres.|С дисциплиной ты можешь добиться чего угодно.|Cu disciplină poți obține orice îți dorești.
Este es un gran logro para mí.|This is a great achievement for me.|C'est un grand accomplissement pour moi.|Das ist eine große Errungenschaft für mich.|È un grande traguardo per me.|É uma grande conquista para mim.|Для меня это большое достижение.|Aceasta este o mare realizare pentru mine.
Cada uno construye su propio camino.|Everyone builds their own path.|Chacun construit son propre chemin.|Jeder baut seinen eigenen Weg.|Ognuno costruisce la propria strada.|Cada um constrói o seu próprio caminho.|Каждый строит свой собственный путь.|Fiecare își construiește propriul drum.
`);

  /* 30 Opinar y debatir */
  W(30, `
Desacuerdo|Disagreement|Désaccord|Meinungsverschiedenheit|Disaccordo|Desacordo|Разногласие|Dezacord
Razonamiento|Reasoning|Raisonnement|Argumentation|Ragionamento|Raciocínio|Рассуждение|Raționament
Premisa|Premise|Prémisse|Prämisse|Premessa|Premissa|Предпосылка|Premisă
Falacia|Fallacy|Sophisme|Trugschluss|Fallacia|Falácia|Ложный довод|Eroare logică
Moderador|Moderator|Modérateur|Moderator|Moderatore|Moderador|Модератор|Moderator
Interrumpir|To interrupt|Interrompre|unterbrechen|Interrompere|Interromper|Перебивать|A întrerupe
`);
  S(30, `
Hay un desacuerdo entre los dos candidatos.|There is a disagreement between the two candidates.|Il y a un désaccord entre les deux candidats.|Zwischen den beiden Kandidaten gibt es eine Meinungsverschiedenheit.|C'è un disaccordo tra i due candidati.|Há um desacordo entre os dois candidatos.|Между двумя кандидатами есть разногласие.|Există un dezacord între cei doi candidați.
Ese razonamiento tiene una falacia.|That reasoning contains a fallacy.|Ce raisonnement contient un sophisme.|Diese Argumentation enthält einen Trugschluss.|Quel ragionamento contiene una fallacia.|Esse raciocínio contém uma falácia.|В этом рассуждении есть ложный довод.|Raționamentul acela conține o eroare logică.
Por favor, no me interrumpas.|Please don't interrupt me.|S'il te plaît, ne m'interromps pas.|Bitte unterbrich mich nicht.|Per favore, non interrompermi.|Por favor, não me interrompas.|Пожалуйста, не перебивай меня.|Te rog, nu mă întrerupe.
El moderador pidió respeto a ambas partes.|The moderator asked both sides for respect.|Le modérateur a demandé du respect aux deux parties.|Der Moderator forderte beide Seiten zu Respekt auf.|Il moderatore ha chiesto rispetto a entrambe le parti.|O moderador pediu respeito a ambas as partes.|Модератор попросил обе стороны проявлять уважение.|Moderatorul a cerut respect din partea ambelor părți.
`);

  /* 31 Entrevista y carrera */
  W(31, `
Entrevistador|Interviewer|Recruteur|Interviewer|Intervistatore|Entrevistador|Интервьюер|Intervievator
Fortaleza|Strength|Point fort|Stärke|Punto di forza|Ponto forte|Сильная сторона|Punct forte
Debilidad|Weakness|Point faible|Schwäche|Punto debole|Ponto fraco|Слабая сторона|Punct slab
Contrato indefinido|Permanent contract|CDI|unbefristeter Vertrag|Contratto a tempo indeterminato|Contrato sem termo|Бессрочный договор|Contract pe perioadă nedeterminată
Período de prueba|Probation period|Période d'essai|Probezeit|Periodo di prova|Período experimental|Испытательный срок|Perioadă de probă
Disponibilidad|Availability|Disponibilité|Verfügbarkeit|Disponibilità|Disponibilidade|Готовность приступить|Disponibilitate
`);
  S(31, `
El entrevistador me preguntó por mis debilidades.|The interviewer asked me about my weaknesses.|Le recruteur m'a interrogé sur mes points faibles.|Der Interviewer fragte mich nach meinen Schwächen.|L'intervistatore mi ha chiesto dei miei punti deboli.|O entrevistador perguntou-me pelos meus pontos fracos.|Интервьюер спросил меня о моих слабых сторонах.|Intervievatorul m-a întrebat despre punctele mele slabe.
Me ofrecieron un contrato indefinido.|They offered me a permanent contract.|On m'a proposé un CDI.|Man hat mir einen unbefristeten Vertrag angeboten.|Mi hanno offerto un contratto a tempo indeterminato.|Ofereceram-me um contrato sem termo.|Мне предложили бессрочный договор.|Mi-au oferit un contract pe perioadă nedeterminată.
Tengo disponibilidad inmediata.|I'm available immediately.|Je suis disponible immédiatement.|Ich bin sofort verfügbar.|Sono disponibile subito.|Tenho disponibilidade imediata.|Я готов приступить немедленно.|Sunt disponibil imediat.
El período de prueba dura tres meses.|The probation period lasts three months.|La période d'essai dure trois mois.|Die Probezeit dauert drei Monate.|Il periodo di prova dura tre mesi.|O período experimental dura três meses.|Испытательный срок длится три месяца.|Perioada de probă durează trei luni.
`);

  /* 32 Noticias y sociedad */
  W(32, `
Corresponsal|Correspondent|Correspondant|Korrespondent|Corrispondente|Correspondente|Корреспондент|Corespondent
Comunicado|Statement|Communiqué|Mitteilung|Comunicato|Comunicado|Заявление|Comunicat
Escándalo|Scandal|Scandale|Skandal|Scandalo|Escândalo|Скандал|Scandal
Portavoz|Spokesperson|Porte-parole|Sprecher|Portavoce|Porta-voz|Представитель|Purtător de cuvânt
Desastre|Disaster|Catastrophe|Katastrophe|Disastro|Desastre|Катастрофа|Dezastru
Víctima|Victim|Victime|Opfer|Vittima|Vítima|Жертва|Victimă
`);
  S(32, `
El corresponsal informó desde el lugar.|The correspondent reported from the scene.|Le correspondant a fait son reportage depuis le lieu.|Der Korrespondent berichtete vom Ort des Geschehens.|Il corrispondente ha riferito dal luogo.|O correspondente informou a partir do local.|Корреспондент вёл репортаж с места событий.|Corespondentul a transmis de la fața locului.
El portavoz leyó un comunicado oficial.|The spokesperson read an official statement.|Le porte-parole a lu un communiqué officiel.|Der Sprecher verlas eine offizielle Mitteilung.|Il portavoce ha letto un comunicato ufficiale.|O porta-voz leu um comunicado oficial.|Представитель зачитал официальное заявление.|Purtătorul de cuvânt a citit un comunicat oficial.
El escándalo obligó al ministro a renunciar.|The scandal forced the minister to resign.|Le scandale a obligé le ministre à démissionner.|Der Skandal zwang den Minister zum Rücktritt.|Lo scandalo ha costretto il ministro a dimettersi.|O escândalo obrigou o ministro a demitir-se.|Скандал вынудил министра уйти в отставку.|Scandalul l-a obligat pe ministru să demisioneze.
Las víctimas del desastre recibieron ayuda.|The victims of the disaster received help.|Les victimes de la catastrophe ont reçu de l'aide.|Die Opfer der Katastrophe erhielten Hilfe.|Le vittime del disastro hanno ricevuto aiuto.|As vítimas do desastre receberam ajuda.|Пострадавшие от катастрофы получили помощь.|Victimele dezastrului au primit ajutor.
`);

  /* 33 Salud y bienestar */
  W(33, `
Cirugía|Surgery|Chirurgie|Operation|Chirurgia|Cirurgia|Хирургия|Chirurgie
Especialista|Specialist|Spécialiste|Facharzt|Specialista|Especialista|Специалист|Specialist
Tensión arterial|Blood pressure|Tension artérielle|Blutdruck|Pressione arteriosa|Tensão arterial|Артериальное давление|Tensiune arterială
Colesterol|Cholesterol|Cholestérol|Cholesterin|Colesterolo|Colesterol|Холестерин|Colesterol
Hospitalización|Hospitalisation|Hospitalisation|Krankenhausaufenthalt|Ricovero|Internamento|Госпитализация|Spitalizare
Fisioterapia|Physiotherapy|Kinésithérapie|Physiotherapie|Fisioterapia|Fisioterapia|Физиотерапия|Fizioterapie
`);
  S(33, `
Me operaron y la cirugía salió bien.|I had an operation and the surgery went well.|J'ai été opéré et la chirurgie s'est bien passée.|Ich wurde operiert und der Eingriff verlief gut.|Mi hanno operato e l'intervento è andato bene.|Fui operado e a cirurgia correu bem.|Мне сделали операцию, и всё прошло хорошо.|Am fost operat și intervenția a decurs bine.
Tengo la tensión arterial un poco alta.|My blood pressure is a little high.|J'ai la tension un peu élevée.|Mein Blutdruck ist etwas erhöht.|Ho la pressione un po' alta.|Tenho a tensão arterial um pouco alta.|У меня немного повышено давление.|Am tensiunea arterială puțin ridicată.
El médico me pidió un análisis de colesterol.|The doctor asked me for a cholesterol test.|Le médecin m'a prescrit un bilan de cholestérol.|Der Arzt hat eine Cholesterinuntersuchung angeordnet.|Il medico mi ha chiesto un esame del colesterolo.|O médico pediu-me uma análise ao colesterol.|Врач направил меня на анализ холестерина.|Medicul mi-a cerut un test de colesterol.
Después de la lesión hice fisioterapia.|After the injury I did physiotherapy.|Après la blessure, j'ai fait de la kinésithérapie.|Nach der Verletzung habe ich Physiotherapie gemacht.|Dopo l'infortunio ho fatto fisioterapia.|Depois da lesão fiz fisioterapia.|После травмы я проходил физиотерапию.|După accidentare am făcut fizioterapie.
`);

  /* 34 Ciencia y tecnología */
  W(34, `
Satélite|Satellite|Satellite|Satellit|Satellite|Satélite|Спутник|Satelit
Ingeniería|Engineering|Ingénierie|Ingenieurwesen|Ingegneria|Engenharia|Инженерия|Inginerie
Prototipo|Prototype|Prototype|Prototyp|Prototipo|Protótipo|Прототип|Prototip
Realidad virtual|Virtual reality|Réalité virtuelle|Virtuelle Realität|Realtà virtuale|Realidade virtual|Виртуальная реальность|Realitate virtuală
Código|Code|Code|Code|Codice|Código|Код|Cod
Tecnología|Technology|Technologie|Technologie|Tecnologia|Tecnologia|Технология|Tehnologie
`);
  S(34, `
El satélite envía imágenes de la Tierra.|The satellite sends images of the Earth.|Le satellite envoie des images de la Terre.|Der Satellit sendet Bilder von der Erde.|Il satellite invia immagini della Terra.|O satélite envia imagens da Terra.|Спутник передаёт снимки Земли.|Satelitul trimite imagini ale Pământului.
La empresa presentó un prototipo nuevo.|The company presented a new prototype.|L'entreprise a présenté un nouveau prototype.|Das Unternehmen hat einen neuen Prototyp vorgestellt.|L'azienda ha presentato un nuovo prototipo.|A empresa apresentou um novo protótipo.|Компания представила новый прототип.|Compania a prezentat un prototip nou.
La realidad virtual se usa en la medicina.|Virtual reality is used in medicine.|La réalité virtuelle est utilisée en médecine.|Virtuelle Realität wird in der Medizin eingesetzt.|La realtà virtuale si usa in medicina.|A realidade virtual é usada na medicina.|Виртуальную реальность используют в медицине.|Realitatea virtuală este folosită în medicină.
Estudio ingeniería y aprendo a escribir código.|I study engineering and learn to write code.|J'étudie l'ingénierie et j'apprends à écrire du code.|Ich studiere Ingenieurwesen und lerne, Code zu schreiben.|Studio ingegneria e imparo a scrivere codice.|Estudo engenharia e aprendo a escrever código.|Я учусь на инженера и осваиваю программирование.|Studiez inginerie și învăț să scriu cod.
`);

  /* 35 Viajes y culturas */
  W(35, `
Turismo|Tourism|Tourisme|Tourismus|Turismo|Turismo|Туризм|Turism
Embajada|Embassy|Ambassade|Botschaft|Ambasciata|Embaixada|Посольство|Ambasadă
Hostal|Hostel|Auberge|Herberge|Ostello|Pensão|Хостел|Hostel
Choque cultural|Culture shock|Choc culturel|Kulturschock|Shock culturale|Choque cultural|Культурный шок|Șoc cultural
Intérprete|Interpreter|Interprète|Dolmetscher|Interprete|Intérprete|Переводчик|Interpret
Moneda local|Local currency|Monnaie locale|Landeswährung|Valuta locale|Moeda local|Местная валюта|Monedă locală
`);
  S(35, `
Necesito ir a la embajada para renovar el pasaporte.|I need to go to the embassy to renew my passport.|Je dois aller à l'ambassade pour renouveler mon passeport.|Ich muss zur Botschaft, um meinen Reisepass zu erneuern.|Devo andare in ambasciata per rinnovare il passaporto.|Preciso de ir à embaixada para renovar o passaporte.|Мне нужно в посольство, чтобы продлить паспорт.|Trebuie să merg la ambasadă ca să-mi reînnoiesc pașaportul.
Dormimos en un hostal económico.|We slept in a cheap hostel.|Nous avons dormi dans une auberge bon marché.|Wir haben in einer günstigen Herberge geschlafen.|Abbiamo dormito in un ostello economico.|Dormimos numa pensão económica.|Мы ночевали в недорогом хостеле.|Am dormit într-un hostel ieftin.
Sentí un choque cultural al llegar.|I felt culture shock when I arrived.|J'ai ressenti un choc culturel en arrivant.|Bei meiner Ankunft erlebte ich einen Kulturschock.|Ho provato uno shock culturale all'arrivo.|Senti um choque cultural ao chegar.|По приезде я испытал культурный шок.|Am simțit un șoc cultural la sosire.
El intérprete nos ayudó con el idioma.|The interpreter helped us with the language.|L'interprète nous a aidés avec la langue.|Der Dolmetscher half uns mit der Sprache.|L'interprete ci ha aiutato con la lingua.|O intérprete ajudou-nos com a língua.|Переводчик помог нам с языком.|Interpretul ne-a ajutat cu limba.
`);

  /* 36 Vivienda y ciudad */
  W(36, `
Inmobiliaria|Estate agency|Agence immobilière|Maklerbüro|Agenzia immobiliare|Imobiliária|Агентство недвижимости|Agenție imobiliară
Servicios|Utilities|Charges|Nebenkosten|Utenze|Serviços|Коммунальные услуги|Utilități
Ático|Penthouse|Attique|Penthouse|Attico|Sótão|Пентхаус|Penthouse
Garaje|Garage|Garage|Garage|Garage|Garagem|Гараж|Garaj
Sótano|Basement|Sous-sol|Keller|Seminterrato|Cave|Подвал|Subsol
Reformas|Renovations|Rénovations|Renovierungen|Ristrutturazioni|Remodelações|Ремонтные работы|Renovări
`);
  S(36, `
Visité varios apartamentos con la inmobiliaria.|I visited several flats with the estate agency.|J'ai visité plusieurs appartements avec l'agence immobilière.|Ich habe mit dem Maklerbüro mehrere Wohnungen besichtigt.|Ho visitato diversi appartamenti con l'agenzia immobiliare.|Visitei vários apartamentos com a imobiliária.|Я осмотрел несколько квартир с агентством недвижимости.|Am vizitat mai multe apartamente cu agenția imobiliară.
El alquiler incluye un garaje.|The rent includes a garage.|Le loyer comprend un garage.|In der Miete ist eine Garage enthalten.|L'affitto include un garage.|O aluguer inclui uma garagem.|В стоимость аренды входит гараж.|Chiria include un garaj.
Los servicios no están incluidos en el precio.|Utilities are not included in the price.|Les charges ne sont pas comprises dans le prix.|Die Nebenkosten sind im Preis nicht enthalten.|Le utenze non sono incluse nel prezzo.|Os serviços não estão incluídos no preço.|Коммунальные услуги в цену не входят.|Utilitățile nu sunt incluse în preț.
El edificio necesita reformas urgentes.|The building needs urgent renovations.|L'immeuble a besoin de rénovations urgentes.|Das Gebäude braucht dringend Renovierungen.|L'edificio ha bisogno di ristrutturazioni urgenti.|O edifício precisa de remodelações urgentes.|Здание срочно нуждается в ремонте.|Clădirea are nevoie urgentă de renovări.
`);

  /* 37 Finanzas personales */
  W(37, `
Bolsa de valores|Stock exchange|Bourse|Börse|Borsa valori|Bolsa de valores|Фондовая биржа|Bursă de valori
Estafa|Scam|Escroquerie|Betrug|Truffa|Burla|Мошенничество|Escrocherie
Fondo de inversión|Investment fund|Fonds d'investissement|Investmentfonds|Fondo d'investimento|Fundo de investimento|Инвестиционный фонд|Fond de investiții
Dividendo|Dividend|Dividende|Dividende|Dividendo|Dividendo|Дивиденд|Dividend
Cuenta de ahorros|Savings account|Compte d'épargne|Sparkonto|Conto di risparmio|Conta poupança|Сберегательный счёт|Cont de economii
Interés compuesto|Compound interest|Intérêts composés|Zinseszins|Interesse composto|Juro composto|Сложный процент|Dobândă compusă
`);
  S(37, `
Cuidado con las estafas por internet.|Beware of online scams.|Attention aux escroqueries sur internet.|Vorsicht vor Betrug im Internet.|Attenzione alle truffe su internet.|Cuidado com as burlas na internet.|Остерегайтесь мошенничества в интернете.|Atenție la escrocheriile de pe internet.
Compré acciones en la bolsa de valores.|I bought shares on the stock exchange.|J'ai acheté des actions en bourse.|Ich habe an der Börse Aktien gekauft.|Ho comprato azioni in borsa.|Comprei ações na bolsa de valores.|Я купил акции на фондовой бирже.|Am cumpărat acțiuni la bursa de valori.
Abrí una cuenta de ahorros para mi hijo.|I opened a savings account for my son.|J'ai ouvert un compte d'épargne pour mon fils.|Ich habe für meinen Sohn ein Sparkonto eröffnet.|Ho aperto un conto di risparmio per mio figlio.|Abri uma conta poupança para o meu filho.|Я открыл сберегательный счёт для сына.|Am deschis un cont de economii pentru fiul meu.
El interés compuesto hace crecer el ahorro.|Compound interest makes savings grow.|Les intérêts composés font croître l'épargne.|Der Zinseszins lässt die Ersparnisse wachsen.|L'interesse composto fa crescere i risparmi.|O juro composto faz crescer a poupança.|Сложный процент увеличивает сбережения.|Dobânda compusă face economiile să crească.
`);

  /* 38 Medios y redes */
  W(38, `
Reportaje|Feature|Reportage|Reportage|Servizio|Reportagem|Репортаж|Reportaj
Cadena de televisión|TV channel|Chaîne de télévision|Fernsehsender|Rete televisiva|Canal de televisão|Телеканал|Post de televiziune
Podcast|Podcast|Podcast|Podcast|Podcast|Podcast|Подкаст|Podcast
Influencer|Influencer|Influenceur|Influencer|Influencer|Influenciador|Блогер|Influencer
Anuncio|Advertisement|Annonce|Anzeige|Annuncio|Anúncio|Объявление|Anunț
Suscripción|Subscription|Abonnement|Abonnement|Abbonamento|Subscrição|Подписка|Abonament
`);
  S(38, `
Escucho un podcast sobre historia cada semana.|I listen to a podcast about history every week.|J'écoute un podcast sur l'histoire chaque semaine.|Ich höre jede Woche einen Podcast über Geschichte.|Ascolto un podcast sulla storia ogni settimana.|Ouço um podcast sobre história todas as semanas.|Каждую неделю я слушаю подкаст об истории.|Ascult în fiecare săptămână un podcast despre istorie.
Cancelé mi suscripción al periódico.|I cancelled my newspaper subscription.|J'ai résilié mon abonnement au journal.|Ich habe mein Zeitungsabonnement gekündigt.|Ho disdetto l'abbonamento al giornale.|Cancelei a minha subscrição do jornal.|Я отменил подписку на газету.|Mi-am anulat abonamentul la ziar.
Ese influencer tiene millones de seguidores.|That influencer has millions of followers.|Cet influenceur a des millions d'abonnés.|Dieser Influencer hat Millionen Follower.|Quell'influencer ha milioni di follower.|Esse influenciador tem milhões de seguidores.|У этого блогера миллионы подписчиков.|Influencerul acela are milioane de urmăritori.
La cadena de televisión emitió un reportaje especial.|The TV channel broadcast a special report.|La chaîne de télévision a diffusé un reportage spécial.|Der Fernsehsender strahlte eine Sonderreportage aus.|La rete televisiva ha trasmesso un servizio speciale.|O canal de televisão emitiu uma reportagem especial.|Телеканал показал специальный репортаж.|Postul de televiziune a difuzat un reportaj special.
`);

  /* 39 Quejas y negociación */
  W(39, `
Insatisfecho|Dissatisfied|Insatisfait|unzufrieden|Insoddisfatto|Insatisfeito|Недовольный|Nemulțumit
Reparar|To repair|Réparer|reparieren|Riparare|Reparar|Ремонтировать|A repara
Plazo de entrega|Delivery time|Délai de livraison|Lieferzeit|Tempi di consegna|Prazo de entrega|Срок доставки|Termen de livrare
Mala atención|Poor service|Mauvais service|schlechter Service|Servizio scadente|Mau atendimento|Плохое обслуживание|Servicii proaste
Reponer|To replace|Remplacer|ersetzen|Sostituire|Repor|Заменять|A înlocui
Defectuoso|Faulty|Défectueux|fehlerhaft|Difettoso|Defeituoso|Бракованный|Defectuos
`);
  S(39, `
Estoy insatisfecho con el servicio.|I'm dissatisfied with the service.|Je suis insatisfait du service.|Ich bin mit dem Service unzufrieden.|Sono insoddisfatto del servizio.|Estou insatisfeito com o serviço.|Я недоволен обслуживанием.|Sunt nemulțumit de servicii.
Exijo que reparen el producto o lo repongan.|I demand that you repair or replace the product.|J'exige que vous répariez ou remplaciez le produit.|Ich verlange, dass Sie das Produkt reparieren oder ersetzen.|Pretendo che riparino o sostituiscano il prodotto.|Exijo que reparem ou substituam o produto.|Я требую отремонтировать товар или заменить его.|Cer să reparați sau să înlocuiți produsul.
El plazo de entrega fue de tres semanas.|The delivery time was three weeks.|Le délai de livraison était de trois semaines.|Die Lieferzeit betrug drei Wochen.|I tempi di consegna sono stati di tre settimane.|O prazo de entrega foi de três semanas.|Срок доставки составил три недели.|Termenul de livrare a fost de trei săptămâni.
Recibí una mala atención en la tienda.|I received poor service in the shop.|J'ai été mal reçu dans le magasin.|Im Geschäft wurde ich schlecht bedient.|Ho ricevuto un servizio scadente in negozio.|Fui mal atendido na loja.|В магазине меня плохо обслужили.|Am primit un serviciu prost în magazin.
`);

  /* 40 Economía y trabajo */
  W(40, `
Crisis financiera|Financial crisis|Crise financière|Finanzkrise|Crisi finanziaria|Crise financeira|Финансовый кризис|Criză financiară
Sector público|Public sector|Secteur public|Öffentlicher Sektor|Settore pubblico|Setor público|Государственный сектор|Sector public
Sector privado|Private sector|Secteur privé|Privatsektor|Settore privato|Setor privado|Частный сектор|Sector privat
Emprendedor|Entrepreneur|Entrepreneur|Unternehmer|Imprenditore|Empreendedor|Предприниматель|Antreprenor
Competitividad|Competitiveness|Compétitivité|Wettbewerbsfähigkeit|Competitività|Competitividade|Конкурентоспособность|Competitivitate
Recorte|Cut|Réduction|Kürzung|Taglio|Corte|Сокращение|Reducere
`);
  S(40, `
La crisis financiera afectó a millones de personas.|The financial crisis affected millions of people.|La crise financière a touché des millions de personnes.|Die Finanzkrise hat Millionen von Menschen betroffen.|La crisi finanziaria ha colpito milioni di persone.|A crise financeira afetou milhões de pessoas.|Финансовый кризис затронул миллионы людей.|Criza financiară a afectat milioane de oameni.
El sector público redujo su presupuesto.|The public sector reduced its budget.|Le secteur public a réduit son budget.|Der öffentliche Sektor hat sein Budget gekürzt.|Il settore pubblico ha ridotto il proprio bilancio.|O setor público reduziu o seu orçamento.|Государственный сектор сократил свой бюджет.|Sectorul public și-a redus bugetul.
Esa emprendedora fundó una empresa tecnológica.|That entrepreneur founded a technology company.|Cette entrepreneuse a fondé une entreprise technologique.|Diese Unternehmerin hat ein Technologieunternehmen gegründet.|Quell'imprenditrice ha fondato un'azienda tecnologica.|Essa empreendedora fundou uma empresa tecnológica.|Эта предпринимательница основала технологическую компанию.|Antreprenoarea aceea a fondat o companie de tehnologie.
Hace falta mejorar la competitividad del país.|The country's competitiveness needs to improve.|Il faut améliorer la compétitivité du pays.|Die Wettbewerbsfähigkeit des Landes muss verbessert werden.|Bisogna migliorare la competitività del paese.|É preciso melhorar a competitividade do país.|Необходимо повысить конкурентоспособность страны.|Trebuie îmbunătățită competitivitatea țării.
`);

  /* 41 Política y sociedad */
  W(41, `
Alcalde|Mayor|Maire|Bürgermeister|Sindaco|Presidente da câmara|Мэр|Primar
Senado|Senate|Sénat|Senat|Senato|Senado|Сенат|Senat
Diputado|Member of parliament|Député|Abgeordneter|Deputato|Deputado|Депутат|Deputat
Votante|Voter|Électeur|Wähler|Elettore|Eleitor|Избиратель|Alegător
Mayoría|Majority|Majorité|Mehrheit|Maggioranza|Maioria|Большинство|Majoritate
Embajador|Ambassador|Ambassadeur|Botschafter|Ambasciatore|Embaixador|Посол|Ambasador
`);
  S(41, `
El alcalde anunció nuevas obras en la ciudad.|The mayor announced new works in the city.|Le maire a annoncé de nouveaux travaux dans la ville.|Der Bürgermeister kündigte neue Bauarbeiten in der Stadt an.|Il sindaco ha annunciato nuovi lavori in città.|O presidente da câmara anunciou novas obras na cidade.|Мэр объявил о новых работах в городе.|Primarul a anunțat noi lucrări în oraș.
El Senado aprobó la ley por mayoría.|The Senate passed the law by a majority.|Le Sénat a adopté la loi à la majorité.|Der Senat hat das Gesetz mit Mehrheit verabschiedet.|Il Senato ha approvato la legge a maggioranza.|O Senado aprovou a lei por maioria.|Сенат принял закон большинством голосов.|Senatul a adoptat legea cu majoritate.
Cada votante debe informarse antes de elegir.|Every voter should get informed before choosing.|Chaque électeur doit s'informer avant de choisir.|Jeder Wähler sollte sich vor der Wahl informieren.|Ogni elettore deve informarsi prima di scegliere.|Cada eleitor deve informar-se antes de escolher.|Каждый избиратель должен информироваться перед выбором.|Fiecare alegător trebuie să se informeze înainte de a alege.
El embajador se reunió con el presidente.|The ambassador met the president.|L'ambassadeur a rencontré le président.|Der Botschafter traf sich mit dem Präsidenten.|L'ambasciatore ha incontrato il presidente.|O embaixador reuniu-se com o presidente.|Посол встретился с президентом.|Ambasadorul s-a întâlnit cu președintele.
`);

  /* 42 Ciencia y ética */
  W(42, `
Células madre|Stem cells|Cellules souches|Stammzellen|Cellule staminali|Células estaminais|Стволовые клетки|Celule stem
Donante|Donor|Donneur|Spender|Donatore|Doador|Донор|Donator
Trasplante|Transplant|Greffe|Transplantation|Trapianto|Transplante|Трансплантация|Transplant
Eutanasia|Euthanasia|Euthanasie|Sterbehilfe|Eutanasia|Eutanásia|Эвтаназия|Eutanasie
Bioética|Bioethics|Bioéthique|Bioethik|Bioetica|Bioética|Биоэтика|Bioetică
Código genético|Genetic code|Code génétique|Genetischer Code|Codice genetico|Código genético|Генетический код|Cod genetic
`);
  S(42, `
Las células madre abren nuevas posibilidades médicas.|Stem cells open up new medical possibilities.|Les cellules souches ouvrent de nouvelles possibilités médicales.|Stammzellen eröffnen neue medizinische Möglichkeiten.|Le cellule staminali aprono nuove possibilità mediche.|As células estaminais abrem novas possibilidades médicas.|Стволовые клетки открывают новые медицинские возможности.|Celulele stem deschid noi posibilități medicale.
Un donante salvó la vida de un niño.|A donor saved a child's life.|Un donneur a sauvé la vie d'un enfant.|Ein Spender hat das Leben eines Kindes gerettet.|Un donatore ha salvato la vita a un bambino.|Um doador salvou a vida de uma criança.|Донор спас жизнь ребёнку.|Un donator a salvat viața unui copil.
La eutanasia es un tema muy controvertido.|Euthanasia is a very controversial issue.|L'euthanasie est un sujet très controversé.|Sterbehilfe ist ein sehr umstrittenes Thema.|L'eutanasia è un tema molto controverso.|A eutanásia é um tema muito controverso.|Эвтаназия — очень спорная тема.|Eutanasia este un subiect foarte controversat.
La bioética examina los límites de la medicina.|Bioethics examines the limits of medicine.|La bioéthique examine les limites de la médecine.|Die Bioethik untersucht die Grenzen der Medizin.|La bioetica esamina i limiti della medicina.|A bioética analisa os limites da medicina.|Биоэтика изучает границы медицины.|Bioetica examinează limitele medicinei.
`);

  /* 43 Arte y literatura */
  W(43, `
Poeta|Poet|Poète|Dichter|Poeta|Poeta|Поэт|Poet
Pintor|Painter|Peintre|Maler|Pittore|Pintor|Художник-живописец|Pictor
Cineasta|Filmmaker|Cinéaste|Filmemacher|Regista|Cineasta|Кинорежиссёр|Cineast
Retrato|Portrait|Portrait|Porträt|Ritratto|Retrato|Портрет|Portret
Verso|Line of verse|Vers|Vers|Verso|Verso|Стих|Vers
Tela|Canvas|Toile|Leinwand|Tela|Tela|Холст|Pânză
`);
  S(43, `
El pintor realizó un retrato de la reina.|The painter made a portrait of the queen.|Le peintre a réalisé un portrait de la reine.|Der Maler schuf ein Porträt der Königin.|Il pittore ha realizzato un ritratto della regina.|O pintor fez um retrato da rainha.|Художник написал портрет королевы.|Pictorul a realizat un portret al reginei.
El poeta recitó sus versos más conocidos.|The poet recited his best-known lines.|Le poète a récité ses vers les plus connus.|Der Dichter trug seine bekanntesten Verse vor.|Il poeta ha recitato i suoi versi più noti.|O poeta recitou os seus versos mais conhecidos.|Поэт прочитал свои самые известные стихи.|Poetul și-a recitat cele mai cunoscute versuri.
La cineasta ganó un premio por su película.|The filmmaker won an award for her film.|La cinéaste a remporté un prix pour son film.|Die Filmemacherin gewann einen Preis für ihren Film.|La regista ha vinto un premio per il suo film.|A cineasta ganhou um prémio pelo seu filme.|Кинорежиссёр получила награду за свой фильм.|Cineasta a câștigat un premiu pentru filmul ei.
Esa tela es de un pintor del siglo pasado.|That canvas is by a painter from the last century.|Cette toile est d'un peintre du siècle dernier.|Diese Leinwand stammt von einem Maler des letzten Jahrhunderts.|Quella tela è di un pittore del secolo scorso.|Essa tela é de um pintor do século passado.|Этот холст принадлежит художнику прошлого века.|Pânza aceasta este a unui pictor din secolul trecut.
`);

  /* 44 Historia y memoria */
  W(44, `
Rey|King|Roi|König|Re|Rei|Король|Rege
Reina|Queen|Reine|Königin|Regina|Rainha|Королева|Regină
Castillo|Castle|Château|Burg|Castello|Castelo|Замок|Castel
Ejército|Army|Armée|Armee|Esercito|Exército|Армия|Armată
Edad Media|Middle Ages|Moyen Âge|Mittelalter|Medioevo|Idade Média|Средневековье|Evul Mediu
Esclavitud|Slavery|Esclavage|Sklaverei|Schiavitù|Escravatura|Рабство|Sclavie
`);
  S(44, `
El rey vivía en un castillo enorme.|The king lived in an enormous castle.|Le roi vivait dans un immense château.|Der König lebte in einer riesigen Burg.|Il re viveva in un enorme castello.|O rei vivia num castelo enorme.|Король жил в огромном замке.|Regele locuia într-un castel imens.
El ejército cruzó la frontera al amanecer.|The army crossed the border at dawn.|L'armée a franchi la frontière à l'aube.|Die Armee überschritt die Grenze im Morgengrauen.|L'esercito ha attraversato il confine all'alba.|O exército atravessou a fronteira ao amanhecer.|Армия пересекла границу на рассвете.|Armata a trecut granița în zori.
La esclavitud fue abolida hace más de un siglo.|Slavery was abolished more than a century ago.|L'esclavage a été aboli il y a plus d'un siècle.|Die Sklaverei wurde vor mehr als einem Jahrhundert abgeschafft.|La schiavitù è stata abolita più di un secolo fa.|A escravatura foi abolida há mais de um século.|Рабство было отменено более века назад.|Sclavia a fost abolită acum mai bine de un secol.
En la Edad Media muchos pueblos tenían un castillo.|In the Middle Ages many towns had a castle.|Au Moyen Âge, beaucoup de villes avaient un château.|Im Mittelalter hatten viele Städte eine Burg.|Nel Medioevo molte città avevano un castello.|Na Idade Média muitas povoações tinham um castelo.|В Средние века во многих городах был замок.|În Evul Mediu multe orașe aveau un castel.
`);

  /* 45 Lenguaje y comunicación */
  W(45, `
Gramática|Grammar|Grammaire|Grammatik|Grammatica|Gramática|Грамматика|Gramatică
Vocabulario|Vocabulary|Vocabulaire|Wortschatz|Vocabolario|Vocabulário|Словарный запас|Vocabular
Sinónimo|Synonym|Synonyme|Synonym|Sinonimo|Sinónimo|Синоним|Sinonim
Oración|Sentence|Phrase|Satz|Frase|Frase|Предложение|Propoziție
Lengua materna|Mother tongue|Langue maternelle|Muttersprache|Madrelingua|Língua materna|Родной язык|Limbă maternă
Bilingüe|Bilingual|Bilingue|zweisprachig|Bilingue|Bilingue|Двуязычный|Bilingv
`);
  S(45, `
Mi lengua materna es el español.|My mother tongue is Spanish.|Ma langue maternelle est l'espagnol.|Meine Muttersprache ist Spanisch.|La mia madrelingua è lo spagnolo.|A minha língua materna é o espanhol.|Мой родной язык — испанский.|Limba mea maternă este spaniola.
Necesito ampliar mi vocabulario.|I need to expand my vocabulary.|J'ai besoin d'élargir mon vocabulaire.|Ich muss meinen Wortschatz erweitern.|Ho bisogno di ampliare il mio vocabolario.|Preciso de ampliar o meu vocabulário.|Мне нужно расширить словарный запас.|Trebuie să-mi îmbogățesc vocabularul.
Esa oración tiene un error de gramática.|That sentence has a grammar mistake.|Cette phrase contient une faute de grammaire.|Dieser Satz enthält einen Grammatikfehler.|Quella frase ha un errore di grammatica.|Essa frase tem um erro de gramática.|В этом предложении есть грамматическая ошибка.|Propoziția aceea are o greșeală de gramatică.
Mis hijos son bilingües desde pequeños.|My children have been bilingual since they were little.|Mes enfants sont bilingues depuis leur plus jeune âge.|Meine Kinder sind von klein auf zweisprachig.|I miei figli sono bilingui fin da piccoli.|Os meus filhos são bilingues desde pequenos.|Мои дети двуязычны с самого детства.|Copiii mei sunt bilingvi din copilărie.
`);

  /* 46 Derecho y justicia */
  W(46, `
Víctima|Victim|Victime|Opfer|Vittima|Vítima|Жертва|Victimă
Sospechoso|Suspect|Suspect|Verdächtiger|Sospettato|Suspeito|Подозреваемый|Suspect
Cárcel|Prison|Prison|Gefängnis|Carcere|Prisão|Тюрьма|Închisoare
Soborno|Bribe|Pot-de-vin|Bestechung|Tangente|Suborno|Взятка|Mită
Veredicto|Verdict|Verdict|Urteilsspruch|Verdetto|Veredicto|Вердикт|Verdict
Cómplice|Accomplice|Complice|Komplize|Complice|Cúmplice|Сообщник|Complice
`);
  S(46, `
La policía detuvo al sospechoso.|The police arrested the suspect.|La police a arrêté le suspect.|Die Polizei hat den Verdächtigen festgenommen.|La polizia ha arrestato il sospettato.|A polícia deteve o suspeito.|Полиция задержала подозреваемого.|Poliția l-a arestat pe suspect.
Lo condenaron a diez años de cárcel.|He was sentenced to ten years in prison.|Il a été condamné à dix ans de prison.|Er wurde zu zehn Jahren Gefängnis verurteilt.|È stato condannato a dieci anni di carcere.|Foi condenado a dez anos de prisão.|Его приговорили к десяти годам тюрьмы.|A fost condamnat la zece ani de închisoare.
El juez rechazó el soborno y denunció el caso.|The judge refused the bribe and reported the case.|Le juge a refusé le pot-de-vin et a dénoncé l'affaire.|Der Richter lehnte die Bestechung ab und meldete den Fall.|Il giudice ha rifiutato la tangente e ha denunciato il caso.|O juiz recusou o suborno e denunciou o caso.|Судья отказался от взятки и сообщил о деле.|Judecătorul a refuzat mita și a denunțat cazul.
El veredicto del jurado fue unánime.|The jury's verdict was unanimous.|Le verdict du jury a été unanime.|Der Urteilsspruch der Jury war einstimmig.|Il verdetto della giuria è stato unanime.|O veredicto do júri foi unânime.|Вердикт присяжных был единогласным.|Verdictul juriului a fost unanim.
`);

  /* 47 Empresa y liderazgo */
  W(47, `
Socio|Partner|Associé|Teilhaber|Socio|Sócio|Партнёр по бизнесу|Asociat
Inversor|Investor|Investisseur|Investor|Investitore|Investidor|Инвестор|Investitor
Producto|Product|Produit|Produkt|Prodotto|Produto|Продукт|Produs
Lanzamiento|Launch|Lancement|Markteinführung|Lancio|Lançamento|Запуск|Lansare
Sede|Headquarters|Siège social|Firmensitz|Sede|Sede|Головной офис|Sediu
Facturación|Turnover|Chiffre d'affaires|Geschäftsumsatz|Fatturato|Faturação|Выручка|Cifră de afaceri
`);
  S(47, `
Buscamos un inversor para el proyecto.|We are looking for an investor for the project.|Nous cherchons un investisseur pour le projet.|Wir suchen einen Investor für das Projekt.|Cerchiamo un investitore per il progetto.|Procuramos um investidor para o projeto.|Мы ищем инвестора для проекта.|Căutăm un investitor pentru proiect.
El lanzamiento del producto fue un éxito.|The product launch was a success.|Le lancement du produit a été un succès.|Die Markteinführung des Produkts war ein Erfolg.|Il lancio del prodotto è stato un successo.|O lançamento do produto foi um sucesso.|Запуск продукта прошёл успешно.|Lansarea produsului a fost un succes.
La sede de la empresa está en Madrid.|The company's headquarters are in Madrid.|Le siège de l'entreprise est à Madrid.|Der Firmensitz liegt in Madrid.|La sede dell'azienda è a Madrid.|A sede da empresa fica em Madrid.|Головной офис компании находится в Мадриде.|Sediul companiei este la Madrid.
La facturación aumentó un diez por ciento.|Turnover increased by ten per cent.|Le chiffre d'affaires a augmenté de dix pour cent.|Der Jahresumsatz stieg um zehn Prozent.|Il fatturato è aumentato del dieci per cento.|A faturação aumentou dez por cento.|Выручка выросла на десять процентов.|Cifra de afaceri a crescut cu zece la sută.
`);

  /* 48 Medio ambiente y futuro */
  W(48, `
Capa de ozono|Ozone layer|Couche d'ozone|Ozonschicht|Strato di ozono|Camada de ozono|Озоновый слой|Stratul de ozon
Glaciar|Glacier|Glacier|Gletscher|Ghiacciaio|Glaciar|Ледник|Ghețar
Reforestación|Reforestation|Reboisement|Aufforstung|Rimboschimento|Reflorestação|Лесовосстановление|Reîmpădurire
Agua potable|Drinking water|Eau potable|Trinkwasser|Acqua potabile|Água potável|Питьевая вода|Apă potabilă
Escasez|Scarcity|Pénurie|Knappheit|Scarsità|Escassez|Нехватка|Lipsă
Incendio forestal|Wildfire|Incendie de forêt|Waldbrand|Incendio boschivo|Incêndio florestal|Лесной пожар|Incendiu de pădure
`);
  S(48, `
Los glaciares se derriten cada año.|Glaciers melt every year.|Les glaciers fondent chaque année.|Die Gletscher schmelzen jedes Jahr.|I ghiacciai si sciolgono ogni anno.|Os glaciares derretem todos os anos.|Ледники тают с каждым годом.|Ghețarii se topesc în fiecare an.
La escasez de agua potable preocupa a todos.|The scarcity of drinking water worries everyone.|La pénurie d'eau potable inquiète tout le monde.|Die Knappheit an Trinkwasser beunruhigt alle.|La scarsità di acqua potabile preoccupa tutti.|A escassez de água potável preocupa toda a gente.|Нехватка питьевой воды беспокоит всех.|Lipsa apei potabile îi îngrijorează pe toți.
Un incendio forestal destruyó miles de árboles.|A wildfire destroyed thousands of trees.|Un incendie de forêt a détruit des milliers d'arbres.|Ein Waldbrand hat Tausende Bäume zerstört.|Un incendio boschivo ha distrutto migliaia di alberi.|Um incêndio florestal destruiu milhares de árvores.|Лесной пожар уничтожил тысячи деревьев.|Un incendiu de pădure a distrus mii de copaci.
La reforestación ayuda a recuperar los bosques.|Reforestation helps forests recover.|Le reboisement aide les forêts à se régénérer.|Die Aufforstung hilft, die Wälder wiederherzustellen.|Il rimboschimento aiuta a recuperare i boschi.|A reflorestação ajuda a recuperar as florestas.|Лесовосстановление помогает вернуть леса.|Reîmpădurirea ajută la refacerea pădurilor.
`);

  /* 49 Matices y registro */
  W(49, `
Sarcástico|Sarcastic|Sarcastique|sarkastisch|Sarcastico|Sarcástico|Саркастичный|Sarcastic
Irónico|Ironic|Ironique|ironisch|Ironico|Irónico|Иронический|Ironic
Grosero|Rude|Grossier|unhöflich|Maleducato|Mal-educado|Грубый|Grosolan
Sutil|Subtle|Subtil|subtil|Sottile|Subtil|Тонкий|Subtil
Vago|Vague|Vague|vage|Vago|Vago|Расплывчатый|Vag
Contundente|Forceful|Catégorique|nachdrücklich|Perentorio|Contundente|Весомый|Categoric
`);
  S(49, `
Su comentario sarcástico molestó a todos.|His sarcastic comment annoyed everyone.|Son commentaire sarcastique a agacé tout le monde.|Sein sarkastischer Kommentar hat alle verärgert.|Il suo commento sarcastico ha infastidito tutti.|O seu comentário sarcástico incomodou toda a gente.|Его саркастический комментарий задел всех.|Comentariul lui sarcastic i-a deranjat pe toți.
Fue una respuesta grosera e innecesaria.|It was a rude and unnecessary reply.|C'était une réponse grossière et inutile.|Das war eine unhöfliche und unnötige Antwort.|È stata una risposta maleducata e inutile.|Foi uma resposta mal-educada e desnecessária.|Это был грубый и ненужный ответ.|A fost un răspuns grosolan și inutil.
Prefiero un humor sutil y elegante.|I prefer subtle, elegant humour.|Je préfère un humour subtil et élégant.|Ich mag subtilen, eleganten Humor lieber.|Preferisco un umorismo sottile ed elegante.|Prefiro um humor subtil e elegante.|Я предпочитаю тонкий и изящный юмор.|Prefer un umor subtil și elegant.
Su respuesta fue vaga y poco clara.|His answer was vague and unclear.|Sa réponse était vague et peu claire.|Seine Antwort war vage und unklar.|La sua risposta è stata vaga e poco chiara.|A sua resposta foi vaga e pouco clara.|Его ответ был расплывчатым и неясным.|Răspunsul lui a fost vag și neclar.
`);
})();
