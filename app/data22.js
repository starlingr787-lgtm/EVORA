/* Correcciones de la revisión de naturalidad (idioma por idioma). Cada línea: idioma|unidad|tipo|texto actual|texto nuevo.
   Tipos: w palabra y s frase de una unidad; l0/l1 situación formal/informal (unidad+letra, p. ej. 28B); d diccionario (id de categoría);
   c escena (unidad).
   Se aplican al cargar, después de todo el contenido, sustituyendo el texto exacto dentro de la unidad (los índices y las claves de audio
   no cambian). Si un texto actual no se encuentra, queda en window.FIXES_MISSING y la prueba de contenido falla.
   Revisado por Claude; sigue pendiente la revisión de hablantes nativos. */
(() => {
  const FIX = `
en|1|s|My address is five Sun Street.|I live at 5 Sun Street.
en|5|s|To drink, a juice, please.|To drink, I'll have a juice, please.
en|5|s|For starter I'd like a soup.|For a starter, I'd like soup.
en|5|s|We leave a tip.|We'll leave a tip.
en|9|s|Wait for me a quarter of an hour.|Wait for me for fifteen minutes.
en|0|w|With pleasure|My pleasure
en|16|s|Once I lost my keys on the underground.|I once lost my keys on the underground.
fr|2|s|Je veux deux de ceux-ci.|J'en veux deux.
fr|5|s|Nous laissons un pourboire.|On laisse un pourboire.
fr|6|s|Le train part du quai trois.|Le train part de la voie trois.
fr|7|s|Marche deux pâtés de maisons et tourne à droite.|Avance de deux rues et tourne à droite.
fr|9|s|Quel jour sommes-nous aujourd'hui ?|Quel jour sommes-nous ?
fr|13|w|Courriel|E-mail
fr|13|w|Délai|Date limite
fr|13|w|Équipe de travail|Service
fr|13|s|Aujourd'hui, je suis de l'équipe du matin.|Aujourd'hui, je suis de service le matin.
fr|13|s|Le délai est vendredi.|La date limite est vendredi.
fr|13|s|Mon horaire est de neuf heures à dix-sept heures.|Mes horaires sont de neuf heures à dix-sept heures.
fr|17|s|Je veux bien profiter de mes vacances.|Je veux profiter de mes vacances.
fr|18|s|La nourriture de cet endroit est terrible.|La nourriture de cet endroit est horrible.
fr|33|s|Prendre soin de sa santé mentale est aussi important que de la santé physique.|Prendre soin de sa santé mentale est aussi important que de sa santé physique.
de|0|w|Gestatten|Darf ich mal vorbei?
de|0|s|Entschuldigung, ich habe dich nicht gut verstanden.|Entschuldigung, ich habe dich nicht richtig verstanden.
de|0|s|Willkommen in meinem Zuhause.|Willkommen bei mir zu Hause.
de|1|s|Meine Adresse ist Sonnenstraße fünf.|Ich wohne in der Sonnenstraße 5.
de|4|s|Ich gebe Zitrone auf den Fisch.|Ich gebe Zitronensaft auf den Fisch.
de|5|w|Vegetarisch|vegetarisch
de|5|w|Bestellen|bestellen
de|7|s|Gehe zwei Häuserblocks weiter und biege rechts ab.|Geh zwei Straßen weiter und biege rechts ab.
de|9|w|Immer|immer
de|9|s|Die Sonne geht bei Sonnenaufgang auf.|Die Sonne geht im Morgengrauen auf.
de|10|w|ausgehen|das Haus verlassen
de|10|w|gehen|zu Fuß gehen
de|13|s|Morgen halte ich dem Geschäftsführer eine Präsentation.|Morgen halte ich eine Präsentation für den Geschäftsführer.
de|16|w|Vorgestern|vorgestern
de|16|w|Letzte Woche|letzte Woche
de|16|w|Letztes Jahr|letztes Jahr
de|16|w|Dann|dann
de|16|w|Während|während
de|16|w|Endlich|endlich
de|16|w|Plötzlich|plötzlich
de|16|w|Noch|noch
de|16|w|Als|als
de|16|s|An jenem Tag schien die Sonne sehr.|An jenem Tag war es sehr sonnig.
de|18|w|Besorgt|besorgt
de|19|w|Verletzt|verletzt
de|19|s|Es gibt kein Problem.|Das ist kein Problem.
de|20|w|einfach|Hinflug
de|20|s|Ich bevorzuge einen einfachen Flug.|Ich möchte nur einen Hinflug.
de|20|w|Wartezimmer|Wartebereich
de|21|w|Doktorat|Promotion
de|22|s|Ich muss mein Telefon aktualisieren.|Ich muss mein Handy aktualisieren.
de|23|w|gehen|spazieren gehen
de|26|w|Loyal|loyal
de|27|w|kassieren|verlangen
de|30|w|Einwenden|einwenden
de|30|w|Überzeugen|überzeugen
de|30|w|Widerlegen|widerlegen
de|30|w|Hinterfragen|hinterfragen
de|30|w|Akzeptieren|akzeptieren
de|30|w|Unparteiisch|unparteiisch
de|31|w|Kündigen|kündigen
de|31|w|Einstellen|einstellen
de|36|w|Möbliert|möbliert
de|36|w|Mieten|mieten
de|38|w|Viral|viral
de|38|w|Überprüfen|überprüfen
de|39|w|Verhandeln|verhandeln
de|39|w|Ablehnen|ablehnen
de|46|w|Schuldig|schuldig
de|46|w|Unschuldig|unschuldig
de|46|s|Er erhielt wegen guter Führung Bewährung.|Er wurde wegen guter Führung auf Bewährung entlassen.
de|43|s|Diese Leinwand stammt von einem Maler des letzten Jahrhunderts.|Dieses Gemälde stammt von einem Maler des letzten Jahrhunderts.
de|47|w|Innovieren|innovieren
de|47|w|Delegieren|delegieren
de|47|w|Motivieren|motivieren
de|47|w|Geschäftsumsatz|Jahresumsatz
de|48|w|Erneuerbar|erneuerbar
de|45|w|Deuten|deuten
de|49|w|Umgangssprachlich|umgangssprachlich
de|49|w|Gekünstelt|gekünstelt
de|49|w|Förmlich|förmlich
de|49|w|Ungezwungen|ungezwungen
de|49|w|Direkt|direkt
de|49|w|Höflich|höflich
de|49|w|Aufrichtig|aufrichtig
de|49|w|Beleidigen|beleidigen
de|49|w|Differenzieren|differenzieren
de|49|w|Vorsichtig|vorsichtig
de|49|w|Diplomatisch|diplomatisch
de|49|w|Redegewandt|redegewandt
de|49|w|Neutral|neutral
de|49|w|Andeuten|andeuten
de|49|w|Umformulieren|umformulieren
it|10|w|Fare esercizio|Fare sport
it|10|s|Dopo il lavoro faccio esercizio.|Dopo il lavoro faccio sport.
it|39|w|Intensificare|Portare alla direzione
it|32|w|Voce|Diceria
it|32|w|Copertura|Copertura mediatica
it|38|w|Servizio|Servizio televisivo
it|42|w|Evidenza|Prova scientifica
pt|0|s|Tem um bom dia.|Que tenhas um bom dia.
pt|12|s|Dói-me as costas.|Doem-me as costas.
pt|13|w|Correio eletrónico|E-mail
pt|13|s|Anoto as consultas na minha agenda.|Anoto os meus compromissos na agenda.
pt|16|w|em criança|Em criança
pt|17|w|Quiçá|Quem sabe
pt|18|s|Concordas se sairmos cedo?|Está bem para ti sairmos cedo?
pt|25|w|Fantasia|Disfarce
pt|25|s|No carnaval toda a gente usa uma fantasia.|No carnaval toda a gente usa um disfarce.
pt|36|w|Aluguer|Renda
pt|36|s|O aluguer inclui as despesas de água e eletricidade.|A renda inclui as despesas de água e eletricidade.
pt|36|s|O aluguer inclui uma garagem.|A renda inclui uma garagem.
pt|36|w|Serviços|Despesas de condomínio
pt|36|s|Os serviços não estão incluídos no preço.|As despesas de condomínio não estão incluídas no preço.
pt|34|w|Experimento|Experiência
pt|38|w|Isco de cliques|Clickbait
pt|38|s|Esse título é isco de cliques.|Esse título é clickbait.
ru|6|w|Курс|Направление
ru|12|w|Приём|Приём у врача
ru|18|w|Напряжённый|В стрессе
ru|20|w|Рецепция|Ресепшн
ro|2|w|Mie|O mie
ro|5|s|Pentru băut, un suc, vă rog.|Ca băutură, un suc, vă rog.
ro|7|w|Târg|Piață agroalimentară
ro|7|s|În centrul orașului este un târg.|În centrul orașului este o piață agroalimentară.
ro|9|s|Azi este o vreme frumoasă.|Azi este vreme frumoasă.
ro|14|s|Diseară va fi îngheț.|Diseară va îngheța.
ro|18|w|Mulțumit|Fericit
ro|18|s|Azi sunt foarte mulțumit.|Azi sunt foarte fericit.
ro|24|s|În junglă sunt mulți animale.|În junglă sunt multe animale.
ro|24|s|Ador să merg pe munte.|Ador să merg la munte.
ro|25|s|Acest obiect artizanal este făcut de mână.|Acest obiect artizanal este făcut manual.
ro|20|w|Dus|Doar dus
ro|20|s|Prefer un zbor dus.|Prefer un zbor doar dus.
ro|35|w|Eticheta|Etichetă
ro|36|w|Plan|Planul locuinței
ro|31|w|Conducere|Leadership
ro|32|w|Acoperire|Acoperire mediatică
ro|39|w|Servicii proaste|Serviciu prost
ro|41|s|Absenteismul a fost mai mare decât la alegerile anterioare.|Abținerea de la vot a fost mai mare decât la alegerile anterioare.
ro|46|s|Avocatul a depus o contestație.|Avocatul a făcut apel.
ro|47|w|Conducător|Lider
ro|49|w|Căutat|Pretențios
es|35|w|Visado|Visa
es|38|w|Cebo de clics|Clickbait
es|38|s|Ese titular es un cebo de clics.|Ese titular es clickbait.
es|38|w|Bulo|Engaño
es|38|s|Un verificador de datos desmintió el bulo.|Un verificador de datos desmintió el engaño.
es|43|w|Tela|Lienzo
es|43|s|Esa tela es de un pintor del siglo pasado.|Ese lienzo es de un pintor del siglo pasado.
es|47|w|Plantilla|Personal
en|20|w|Waiting room|Departure lounge
en|20|s|I'm waiting in the waiting room.|I'm waiting in the departure lounge.
en|21|s|During break we eat something in the yard.|At break time we eat something in the playground.
en|21|s|I have to hand in the homework tomorrow.|I have to hand in my homework tomorrow.
en|22|s|I look for information on the internet.|I look for information online.
en|24|s|We installed solar energy panels at home.|We installed solar panels at home.
en|25|s|On national holiday there are parades.|On National Day there are parades.
en|28|s|I graduated in the year two thousand and twenty.|I graduated in 2020.
en|28|s|When I saw him, I got a big surprise.|When I saw him, I was very surprised.
en|44|s|The files reveal previously unknown information.|The archives reveal previously unknown information.
fr|28B|l1|Ce que cet été à la campagne me manque !|Cet été à la campagne me manque tellement !
fr|7A|l1|Dis, comment je vais au musée ?|Dis, comment je fais pour aller au musée ?
fr|29A|l1|Tu veux réussir quoi l'année prochaine ?|Qu'est-ce que tu veux réussir l'année prochaine ?
fr|42A|l1|Tu te lances dans cette étude ?|Ça te tente de participer à cette étude ?
de|34B|l0|Mir macht Sorgen, wie meine persönlichen Daten geschützt werden.|Es macht mir Sorgen, wie meine persönlichen Daten geschützt werden.
it|11B|l1|Chiudi la finestra, va?|Chiudi la finestra, ok?
it|33A|l1|Sono giorni che ho il capogiro, non so cosa mi succeda.|Sono giorni che ho giramenti di testa, non so cosa mi succeda.
pt|0B|l1|Tchau! Até logo!|Xau! Até logo!
pt|12B|l1|Olá! Consegues-me uma consulta com o doutor?|Olá! Consegues marcar-me uma consulta com o doutor?
pt|1B|l0|Desculpe, de onde é a senhora?|Desculpe, de onde é?
pt|36A|l0|Estaria disposto a baixar o aluguer se eu assinar por dois anos?|Estaria disposto a baixar a renda se eu assinar por dois anos?
pt|36A|l1|Baixas-me o aluguer se eu ficar dois anos?|Baixas-me a renda se eu ficar dois anos?
ru|11B|l0|Вы не возражаете, если мы закроем окно?|Вы не могли бы закрыть окно, пожалуйста?
ro|5F|l1|A fost foarte bun, mulțumesc!|A fost delicios, mulțumesc!
ro|42A|l1|Te încumeți să participi la acest studiu?|Vrei să participi la acest studiu?
ro|4B|l1|Nu, mulțumesc, sar peste.|Nu, mulțumesc, renunț.
ro|36B|l0|Aș dori să vă anunț o defecțiune la încălzire.|Aș dori să vă anunț că s-a defectat încălzirea.
fr|0|w|Permettez-moi|Vous permettez ?
en|0|w|Good|Well
en|0|w|Bad|Badly
de|0|w|Glückwunsch|Herzlichen Glückwunsch
pt|0|w|Como vai|Tudo bem
ru|0|s|До скорого.|Увидимся.
ro|0|s|Pe curând.|Pe mai târziu.
en|0|s|See you tomorrow.|I'll see you tomorrow.
fr|0|s|À demain.|On se voit demain.
de|0|s|Bis morgen.|Wir sehen uns morgen.
it|0|s|A domani.|Ci vediamo domani.
pt|0|s|Até amanhã.|Vemo-nos amanhã.
ru|0|s|До завтра.|Увидимся завтра.
pt|0|s|Alegro-me por te ver.|Que bom ver-te.
ru|0|s|Прости, я тебя плохо услышал.|Прости, я не расслышал.
ro|0|s|Pardon, nu te-am auzit bine.|Scuze, nu te-am auzit bine.
ro|0|s|Pe mâine, odihnește-te bine.|Pe mâine, somn ușor.
en|0|s|Have a good trip, write to me when you arrive.|Have a good trip, text me when you get there.
de|0|s|Alles Gute zum Geburtstag, ich wünsche dir das Beste.|Alles Gute zum Geburtstag, ich wünsche dir nur das Beste.
ru|1|w|Национальность|Гражданство
en|1|s|What is your name?|What's your name?
fr|1|s|Je suis d'Espagne.|Je viens d'Espagne.
en|1|s|What is your phone number?|What's your phone number?
fr|1|s|Mon adresse est cinq rue du Soleil.|J'habite au cinq, rue du Soleil.
it|1|s|Il mio indirizzo è via del Sole numero cinque.|Abito in via del Sole numero cinque.
de|2|w|Tausend|tausend
de|2|w|Null|null
ru|2|s|Это три евро.|С вас три евро.
en|2|s|My phone number is this one.|This is my phone number.
fr|2|s|Mon numéro de téléphone est celui-ci.|Voici mon numéro de téléphone.
ro|2|s|Vreau două din acestea.|Vreau două din astea.
fr|2|s|Ma maison est le numéro huit.|J'habite au numéro huit.
it|2|s|La mia casa è il numero otto.|Abito al numero otto.
pt|2|s|A minha casa é o número oito.|Moro no número oito.
en|2|s|I need forty euros more.|I need another forty euros.
de|2|s|Ich brauche vierzig Euro mehr.|Ich brauche noch vierzig Euro.
it|2|s|Mi servono quaranta euro in più.|Mi servono altri quaranta euro.
ru|2|s|Я прихожу в третий раз.|Я здесь уже в третий раз.
ru|2|s|Мне нужна пара обуви.|Мне нужна пара туфель.
it|3|w|Neonato|Bebè
it|3|s|Mia sorella ha un neonato.|Mia sorella ha un bebè.
fr|3|w|Proche parent|Membre de la famille
de|3|w|Patin|Patentante
de|3|w|Pate|Patenonkel
de|3|s|Meine Patin wohnt in einer anderen Stadt.|Meine Patentante wohnt in einer anderen Stadt.
en|3|s|My mother is very kind.|My mother is very nice.
it|3|s|Mia madre è molto gentile.|Mia madre è molto simpatica.
ru|4|w|Масло|Сливочное масло
ru|5|w|Масло растительное|Растительное масло
ru|4|s|Паста с томатами очень вкусная.|Макароны с томатным соусом очень вкусные.
en|4|s|I want a coffee.|I'd like a coffee.
pt|4|s|Quero um café.|Queria um café.
ro|4|s|Vreau o cafea.|Aș vrea o cafea.
en|4|s|I want potatoes with chicken.|I'd like chicken with potatoes.
fr|4|s|Je veux des pommes de terre avec du poulet.|Je voudrais du poulet avec des pommes de terre.
it|4|s|Voglio patate con pollo.|Vorrei pollo con patate.
de|4|s|Ich möchte Kartoffeln mit Hähnchen.|Ich möchte Hähnchen mit Kartoffeln.
pt|4|s|Quero batatas com frango.|Queria frango com batatas.
ro|4|s|Vreau cartofi cu pui.|Aș vrea pui cu cartofi.
ru|4|s|Я хочу картошку с курицей.|Я хочу курицу с картошкой.
pt|4|s|A massa com tomate está deliciosa.|A massa com molho de tomate está deliciosa.
ro|4|s|Pastele cu roșii sunt delicioase.|Pastele cu sos de roșii sunt delicioase.
ru|4|s|Я добавляю лимон к рыбе.|Я поливаю рыбу лимонным соком.
de|5|s|Haben Sie eine vegetarische Speisekarte?|Haben Sie vegetarische Gerichte?
pt|5|s|Quero o prato do dia.|Queria o prato do dia.
ru|5|s|Я хочу блюдо дня.|Мне, пожалуйста, блюдо дня.
en|5|s|Do you accept cards?|Do you take cards?
fr|5|s|Acceptez-vous les cartes ?|Vous prenez la carte ?
de|5|s|Akzeptieren Sie Karten?|Nehmen Sie Karten?
it|5|s|Accettate carte?|Accettate la carta?
ro|5|s|Acceptați carduri?|Acceptați plata cu cardul?
pt|5|s|De entrada quero uma sopa.|De entrada queria uma sopa.
ru|5|s|На закуску я хочу суп.|На первое я хочу суп.
ro|5|s|Salata se servește cu ulei și oțet.|Salata este asezonată cu ulei și oțet.
en|5|s|The salad has oil and vinegar.|The salad is dressed with oil and vinegar.
fr|6|s|Le train part de la voie trois.|Le train part du quai trois.
it|6|w|Barca|Nave
it|6|s|La barca lascia il porto alle nove.|La nave lascia il porto alle nove.
it|6|w|Strada statale|Strada
en|6|s|My suitcase has not arrived.|My suitcase hasn't arrived.
ru|6|s|Вы не дадите мне ключ от номера?|Можно мне ключ от номера?
en|6|s|It is my first trip to Europe.|It's my first trip to Europe.
pt|6|w|Cais|Plataforma
pt|6|s|O comboio parte do cais três.|O comboio parte da plataforma três.
en|6|s|We need petrol before travelling.|We need petrol before we set off.
ru|6|s|Нам нужен бензин перед поездкой.|Нам нужно заправиться перед поездкой.
fr|7|w|Feu|Feu rouge
en|7|w|Road|Way
fr|7|w|Route|Chemin
it|7|w|Cammino|Percorso
en|7|w|Crossing|Junction
en|7|s|It is very close.|It's very close.
en|7|s|It is far from here.|It's far from here.
es|7|s|Cruza en el semáforo, no en la mitad.|Cruza en el semáforo, no a mitad de la calle.
ro|7|s|Traversează la semafor, nu pe la mijloc.|Traversează la semafor, nu prin mijlocul străzii.
en|7|s|Cross at the traffic light, not in the middle.|Cross at the traffic lights, not in the middle of the road.
de|7|s|Überquere die Straße an der Ampel, nicht mittendrin.|Überquere die Straße an der Ampel, nicht mitten auf der Straße.
ru|8|w|Обувь|Туфли
ru|8|w|Карточка|Карта
ru|8|s|Можно оплатить карточкой?|Можно оплатить картой?
de|8|w|Tasche|Tüte
de|8|w|Hosentasche|Tasche
it|8|w|Borsa|Sacchetto
ru|8|w|Марка|Бренд
en|8|s|It is too expensive.|It's too expensive.
en|8|s|Is there any discount?|Is there a discount?
ru|8|s|Вы не дадите мне чек, пожалуйста?|Можно мне чек, пожалуйста?
en|8|s|I want to return this shirt.|I'd like to return this shirt.
pt|8|s|Quero devolver esta camisa.|Queria devolver esta camisa.
ro|8|s|Vreau să returnez această cămașă.|Aș vrea să returnez această cămașă.
de|8|s|Ich zahle bitte an der Kasse.|Ich zahle an der Kasse.
en|9|w|On time|Punctual
en|9|s|It is very late.|It's very late.
en|9|s|It is half past eight.|It's half past eight.
fr|9|s|Quel jour sommes-nous ?|Quelle est la date d'aujourd'hui ?
ro|9|s|Ceasul arată amiaza.|Ceasul arată ora douăsprezece.
en|9|s|Wait for me for fifteen minutes.|Wait for me for a quarter of an hour.
pt|9|s|Espera-me um quarto de hora.|Espera por mim um quarto de hora.
de|10|w|zurückkehren|zurückkommen
pt|10|w|Tomar banho|Tomar duche
de|10|w|das Haus verlassen|aus dem Haus gehen
de|10|s|Ich verlasse das Haus um acht Uhr.|Ich gehe um acht Uhr aus dem Haus.
ru|10|w|Ходить|Ходить пешком
en|10|w|To brush your hair|To comb your hair
en|10|s|I brush my hair and brush my teeth.|I comb my hair and brush my teeth.
es|10|w|Hacer la compra|Hacer las compras
es|10|s|Los sábados hago la compra.|Los sábados hago las compras.
fr|10|s|Le week-end, je dors jusqu'à tard.|Le week-end, je dors tard.
ru|10|s|Я всегда заправляю кровать перед выходом.|Я всегда заправляю кровать перед уходом.
ru|10|s|Я принимаю душ с тёплой водой.|Я принимаю тёплый душ.
ro|11|s|Există o canapea în fața ferestrei.|Este o canapea în fața ferestrei.
de|11|s|Ich bewahre meine Kleidung im Schrank auf.|Ich räume meine Kleidung in den Schrank.
ru|11|s|Занавески голубые.|Занавески синие.
fr|11|s|Je travaille au bureau de ma chambre.|Je travaille à mon bureau, dans ma chambre.
es|12|s|Me duele la oreja desde anoche.|Me duele el oído desde anoche.
pt|12|s|Dói-me a orelha desde ontem à noite.|Dói-me o ouvido desde ontem à noite.
en|12|s|My ear has hurt since last night.|My ear has been hurting since last night.
ro|12|s|Mă doare urechea din seara trecută.|Mă doare urechea de aseară.
en|12|s|I have had a fever since yesterday.|I've had a fever since yesterday.
en|12|s|I have had a cold since Monday.|I've had a cold since Monday.
ro|12|s|Există o farmacie în apropiere?|Este vreo farmacie prin apropiere?
fr|12|s|J'ai de la toux et mal à la gorge.|Je tousse et j'ai mal à la gorge.
it|12|s|Ho dei capogiri quando mi alzo.|Mi gira la testa quando mi alzo.
de|12|s|Ich habe mir einen Verband um die Hand gelegt.|Ich habe mir die Hand verbunden.
de|12|s|Ich glaube, ich habe die Grippe.|Ich glaube, ich habe Grippe.
ro|12|s|Am durere de cap și febră.|Mă doare capul și am febră.
en|13|w|Schedule|Working hours
en|13|s|My schedule is from nine to five.|My working hours are nine to five.
fr|13|s|Aujourd'hui, je suis de service le matin.|Aujourd'hui, je suis du matin.
de|13|w|Offene Stelle|offene Stelle
ru|13|s|Мой начальник очень добрый.|Мой начальник очень приветливый.
de|13|s|Die Frist ist am Freitag.|Die Frist endet am Freitag.
it|14|w|Gelo|Gelata
it|14|s|Stanotte ci sarà il gelo.|Stanotte ci sarà una gelata.
fr|14|s|Il y aura du gel cette nuit.|Il va geler cette nuit.
en|14|s|It is very hot today.|It's very hot today.
en|14|s|It is going to rain tomorrow.|It's going to rain tomorrow.
en|14|s|It is windy on the beach.|It's windy on the beach.
en|14|s|What is the weather like there?|What's the weather like there?
en|14|s|What is the weather like in your city?|What's the weather like in your city?
en|14|s|In winter it is very cold.|In winter it's very cold.
ru|14|s|Сегодня небо облачное.|Сегодня облачно.
ro|14|s|Diseară va îngheța.|La noapte va îngheța.
en|14|s|Hail fell and there were lots of puddles.|It hailed and there were lots of puddles.
ru|15|w|Пеший туризм|Походы
ru|15|w|Ставить палатку|Отдыхать с палатками
ro|15|w|A face camping|A merge cu cortul
ro|15|s|Mergem la cort lângă râu.|Mergem cu cortul lângă râu.
es|16|w|Semana pasada|La semana pasada
es|16|w|Año pasado|El año pasado
pt|16|w|Semana passada|Na semana passada
pt|16|w|Ano passado|No ano passado
fr|16|w|Enfant|Quand j'étais enfant
fr|16|s|Enfant, je jouais dans la rue.|Quand j'étais enfant, je jouais dans la rue.
fr|16|w|Il y a peu|Récemment
it|16|w|Poco fa|Di recente
pt|16|w|Há pouco|Há pouco tempo
ro|16|w|Din acel moment|De atunci
ro|16|s|Din acel moment suntem buni prieteni.|De atunci suntem buni prieteni.
en|16|s|I have never travelled by plane.|I've never travelled by plane.
it|16|s|L'altro ieri ho visitato i miei nonni.|L'altro ieri sono andato a trovare i miei nonni.
ro|16|s|Alaltăieri am vizitat bunicii.|Alaltăieri i-am vizitat pe bunici.
fr|16|s|L'année dernière, j'ai voyagé au Chili.|L'année dernière, je suis allé au Chili.
it|16|s|L'anno scorso ho viaggiato in Cile.|L'anno scorso sono stato in Cile.
ro|16|s|Pe când gătam, a sunat telefonul.|În timp ce găteam, a sunat telefonul.
fr|16|s|Qu'as-tu fait le week-end ?|Qu'as-tu fait ce week-end ?
ro|16|s|În ziua aceea era foarte soare.|În ziua aceea era mult soare.
en|16|s|As a child I played in the street.|As a child, I used to play in the street.
ru|16|s|Я опоздал, потому что пропустил автобус.|Я опоздал, потому что не успел на автобус.
fr|17|w|Prévoir|Planifier
ru|17|w|Пожалуй|Может быть
en|17|s|Next year I am going to travel.|I'm going to travel next year.
en|17|s|Maybe I will see you soon.|Maybe I'll see you soon.
en|17|s|I have already made the booking.|I've already made the booking.
ru|17|s|Бронь уже сделана.|Я уже забронировал.
en|17|s|I am going to save for the trip.|I'm going to save up for the trip.
de|17|s|Ich hoffe, ein besseres Gehalt zu verdienen.|Ich hoffe, ein besseres Gehalt zu bekommen.
pt|17|s|Espero ganhar um melhor ordenado.|Espero ganhar um ordenado melhor.
en|17|s|Next month I am going to move.|I'm moving house next month.
en|17|s|Thank you for the invitation, I will come.|Thank you for the invitation, I'll be there.
en|17|s|Have you decided what you are going to do yet?|Have you decided what you're going to do yet?
it|17|s|Voglio approfittare bene delle mie vacanze.|Voglio godermi le vacanze.
ro|17|s|Vreau să profit bine de vacanța mea.|Vreau să profit din plin de vacanță.
fr|17|s|J'emporte un parapluie au cas où.|Je prends un parapluie, au cas où.
fr|17|s|Je veux terminer cela le plus tôt possible.|Je veux finir ça le plus tôt possible.
ru|18|w|Облегчённый|С облегчением
ru|18|s|Я чувствую себя немного нервно.|Я немного нервничаю.
en|18|s|I am worried about the exam.|I'm worried about the exam.
en|18|s|I am afraid of flying.|I'm afraid of flying.
en|18|s|I am very excited about the trip.|I'm very excited about the trip.
en|18|s|In my opinion, it is a good idea.|In my opinion, it's a good idea.
de|18|s|Das scheint mir sehr schwierig.|Ich finde das sehr schwierig.
fr|18|s|Je suis très enthousiaste pour le voyage.|J'ai vraiment hâte de partir en voyage.
de|18|s|Ich bin sehr aufgeregt wegen der Reise.|Ich freue mich sehr auf die Reise.
ru|18|s|Я очень взволнован поездкой.|Я очень жду эту поездку.
ru|18|s|Мне неловко выступать публично.|Я стесняюсь выступать на публике.
en|18|s|It seems strange to me that he doesn't answer.|I find it strange that he doesn't answer.
de|18|s|Das Essen an diesem Ort ist schrecklich.|Das Essen dort ist schrecklich.
ru|19|s|Это чрезвычайная ситуация, вызовите скорую помощь.|Это срочно, вызовите скорую помощь.
en|19|w|Robbery|Theft
de|19|w|Raub|Diebstahl
ru|19|w|Ограбление|Кража
it|19|w|Kit di pronto soccorso|Cassetta del pronto soccorso
es|19|w|Teléfono de emergencia|Número de emergencia
es|19|s|¿Cuál es el teléfono de emergencia?|¿Cuál es el número de emergencia?
fr|19|w|Dommage|Dégât
en|19|s|I have lost my passport.|I've lost my passport.
en|19|s|There is no problem.|There's no problem.
ro|19|s|Nu există nicio problemă.|Nu este nicio problemă.
de|19|s|Ich habe mein Telefon im Taxi verloren.|Ich habe mein Handy im Taxi verloren.
fr|19|s|J'ai besoin d'aide d'urgence.|J'ai besoin d'aide, c'est urgent.
it|19|s|Voglio fare una denuncia.|Vorrei sporgere denuncia.
en|19|s|The alarm sounds when there is danger.|The alarm goes off when there's danger.
ru|20|w|Жильё|Размещение
ru|20|w|Садиться на борт|Проходить на посадку
ru|20|s|Пассажиры должны садиться на борт через выход пять.|Пассажиры должны пройти на посадку через выход номер пять.
ro|20|w|Card de îmbarcare|Tichet de îmbarcare
ro|20|s|Am cardul de îmbarcare pe telefon.|Am tichetul de îmbarcare pe telefon.
en|20|s|I would like to confirm my reservation, please.|I'd like to confirm my booking, please.
de|20|s|Ich bevorzuge einen Fensterplatz.|Ich hätte gern einen Fensterplatz.
en|20|s|I prefer a window seat.|I'd prefer a window seat.
en|20|s|I prefer a one-way flight.|I'd prefer a one-way flight.
it|20|s|Ho lasciato un acconto per assicurare la prenotazione.|Ho lasciato un acconto per garantire la prenotazione.
de|20|s|Um wie viel Uhr beginnt das Check-in?|Um wie viel Uhr beginnt der Check-in?
es|21|w|Suspender|Reprobar
en|21|w|Qualification|Degree
es|21|s|Pasé el examen con buena nota.|Aprobé el examen con buena nota.
fr|21|s|Je passe beaucoup d'heures à la bibliothèque.|Je passe des heures à la bibliothèque.
de|21|s|Meine Forschung handelt von der Umwelt.|In meiner Forschung geht es um die Umwelt.
pt|22|w|Transferir|Descarregar
pt|22|w|Hiperligação|Link
pt|22|s|Envio-te a hiperligação por mensagem.|Envio-te o link por mensagem.
ru|22|w|Аккумулятор|Батарея
es|22|w|Pulsar|Hacer clic
pt|22|w|Sítio web|Site
pt|22|s|Abro o sítio web no navegador.|Abro o site no navegador.
de|22|w|Webseite|Website
de|22|s|Ich öffne die Webseite im Browser.|Ich öffne die Website im Browser.
en|22|s|There is no internet connection here.|There's no internet connection here.
ru|22|s|У тебя есть зарядка, которую можно одолжить?|Можешь одолжить зарядку?
ro|22|s|Ai un încărcător pe care să mi-l împrumuți?|Ai un încărcător să-mi împrumuți?
es|22|s|Publiqué unas fotos en la red social.|Publiqué unas fotos en las redes sociales.
en|22|s|I posted some photos on the social network.|I posted some photos on social media.
fr|22|s|J'ai publié des photos sur le réseau social.|J'ai publié des photos sur les réseaux sociaux.
de|22|s|Ich habe ein paar Fotos im sozialen Netzwerk veröffentlicht.|Ich habe ein paar Fotos in den sozialen Netzwerken gepostet.
it|22|s|Ho pubblicato alcune foto sul social network.|Ho pubblicato alcune foto sui social.
pt|22|s|Publiquei umas fotografias na rede social.|Publiquei umas fotografias nas redes sociais.
ru|22|s|Я опубликовал несколько фотографий в социальной сети.|Я выложил несколько фотографий в соцсетях.
ro|22|s|Am publicat câteva fotografii pe rețeaua socială.|Am postat câteva fotografii pe rețelele sociale.
en|22|s|What is the Wi-Fi password?|What's the Wi-Fi password?
ru|22|s|Мышь моего компьютера не работает.|У меня не работает компьютерная мышь.
en|22|s|I changed my profile photo.|I changed my profile picture.
pt|23|w|Stresse|Stress
pt|23|s|O stresse afeta-me muito no trabalho.|O stress afeta-me muito no trabalho.
it|23|w|Allungamento|Stretching
it|23|s|Faccio allungamento prima di correre.|Faccio stretching prima di correre.
en|23|s|I should sleep more hours.|I should get more sleep.
fr|23|s|Je devrais dormir plus d'heures.|Je devrais dormir davantage.
it|23|s|Dovrei dormire più ore.|Dovrei dormire di più.
ro|23|s|Ar trebui să dorm mai multe ore.|Ar trebui să dorm mai mult.
ru|23|s|Мне следует спать больше.|Мне нужно больше спать.
ru|23|s|Сбалансированное питание заботится о твоём здоровье.|Сбалансированное питание полезно для здоровья.
es|23|s|Necesito dormir ocho horas de sueño.|Necesito ocho horas de sueño.
es|23|s|Después del almuerzo me echo una siesta corta.|Después del almuerzo tomo una siesta corta.
ro|23|s|După prânz trag un pui de somn scurt.|După prânz trag un pui de somn.
en|23|s|A massage helps relax the legs.|A massage helps to relax your legs.
it|23|w|Esercizio|Esercizio fisico
it|23|s|Cerco di fare esercizio tre volte alla settimana.|Cerco di fare attività fisica tre volte alla settimana.
it|23|s|Mi piace fare esercizio all'aperto.|Mi piace fare attività fisica all'aperto.
it|23|s|È importante idratarsi durante l'esercizio.|È importante idratarsi durante l'attività fisica.
ro|23|s|Am renunțat la fumat acum un an.|M-am lăsat de fumat acum un an.
de|24|w|Verschmutzung|Umweltverschmutzung
de|24|w|Öffentliche Verkehrsmittel|öffentliche Verkehrsmittel
ru|24|w|Ветроэнергия|Энергия ветра
ru|24|s|Ветроэнергия чистая и возобновляемая.|Энергия ветра чистая и возобновляемая.
ru|24|s|Я сортирую мусор, чтобы его перерабатывали.|Я сортирую мусор для переработки.
de|24|s|Ich fahre mit dem Fahrrad zur Arbeit, um weniger zu verschmutzen.|Ich fahre mit dem Fahrrad zur Arbeit, um die Umwelt weniger zu belasten.
en|24|s|It is important to save water and electricity.|It's important to save water and electricity.
en|24|s|It is better to reuse bags.|It's better to reuse bags.
de|24|s|Es ist besser, Taschen wiederzuverwenden.|Es ist besser, Tüten wiederzuverwenden.
it|24|s|È meglio riutilizzare le borse.|È meglio riutilizzare i sacchetti.
es|24|s|Instalamos paneles de energía solar en casa.|Instalamos paneles solares en casa.
de|24|s|Was können wir tun, um Müll zu reduzieren?|Was können wir tun, um weniger Müll zu produzieren?
ro|24|s|Ce putem face ca să reducem gunoiul?|Ce putem face ca să reducem cantitatea de gunoi?
ro|24|s|Deșertul este foarte uscat și fierbinte.|Deșertul este foarte uscat și călduros.
ru|25|w|Шествие|Парад
ru|25|s|Каждый год в центре проходит шествие.|Каждый год в центре проходит парад.
ru|25|s|В день национального праздника проходят шествия.|В день национального праздника проходят парады.
ru|25|w|Ремесло|Ремесленные изделия
ru|25|s|Это ремесло делается вручную.|Эти изделия делают вручную.
fr|25|s|Cet artisanat est fait à la main.|Cet objet artisanal est fait à la main.
it|25|s|Questo artigianato è fatto a mano.|Questo oggetto di artigianato è fatto a mano.
ru|25|w|Костюм|Карнавальный костюм
de|25|w|Traditionelles Essen|typisches Essen
ro|25|s|Mi-ar plăcea să cunosc datinile țării tale.|Mi-ar plăcea să cunosc obiceiurile țării tale.
es|25|s|Mi cumpleaños se celebra con toda la familia.|Celebro mi cumpleaños con toda la familia.
en|25|s|My birthday is celebrated with the whole family.|I celebrate my birthday with the whole family.
fr|25|s|Mon anniversaire se fête avec toute la famille.|Je fête mon anniversaire avec toute la famille.
it|25|s|Il mio compleanno si festeggia con tutta la famiglia.|Festeggio il mio compleanno con tutta la famiglia.
pt|25|s|O meu aniversário celebra-se com toda a família.|Celebro o meu aniversário com toda a família.
ru|25|s|Мой день рождения празднуют всей семьёй.|Я праздную день рождения всей семьёй.
ro|25|s|Ziua mea de naștere se sărbătorește cu toată familia.|Îmi sărbătoresc ziua de naștere cu toată familia.
en|25|s|Every year there is a parade in the centre.|Every year there is a parade in the city centre.
fr|25|s|Chaque année, il y a un défilé dans le centre.|Chaque année, il y a un défilé dans le centre-ville.
en|25|s|It is important to look after a country's heritage.|It's important to look after a country's heritage.
fr|25|s|J'ai goûté la cuisine traditionnelle du lieu.|J'ai goûté la cuisine locale.
ro|25|s|Am gustat mâncarea tradițională a locului.|Am gustat mâncarea tradițională din zonă.
it|25|s|Ho provato il cibo tipico del posto.|Ho assaggiato i piatti tipici del posto.
ro|26|w|Sincer|Onest
fr|26|w|Brouille|Querelle
de|26|w|Zank|Streiterei
pt|26|w|Briga|Zanga
ro|26|w|Resentiment|Ranchiună
fr|26|w|Excuse|Excuses
de|26|w|sich entfremden|sich auseinanderleben
de|26|s|Mit der Zeit haben wir uns entfremdet.|Mit der Zeit haben wir uns auseinandergelebt.
de|26|w|beraten|raten
en|26|s|We share everything with great trust.|We trust each other and share everything.
de|26|s|Wir teilen alles mit großem Vertrauen.|Wir vertrauen uns und teilen alles miteinander.
ru|26|s|Мы делимся всем с большим доверием.|Мы доверяем друг другу и всем делимся.
ru|26|s|Почему ты мне солгал?|Почему ты мне соврал?
en|26|s|He paid me a very kind compliment.|He paid me a lovely compliment.
ru|26|s|Он сказал мне очень милый комплимент.|Он сделал мне очень приятный комплимент.
en|26|s|I don't feel envy, I'm happy for you.|I'm not jealous, I'm happy for you.
fr|26|s|Je ne ressens pas d'envie, je suis content pour toi.|Je ne suis pas envieux, je suis content pour toi.
de|26|s|Ich empfinde keinen Neid, ich freue mich für dich.|Ich bin nicht neidisch, ich freue mich für dich.
es|27|w|Cajero|Cajero automático
en|27|w|Invoice|Bill
ru|27|w|Счёт-фактура|Квитанция
pt|27|w|Identificação|Documento de identificação
pt|27|s|Preciso de uma identificação com fotografia.|Preciso de um documento de identificação com fotografia.
es|27|w|Sello|Estampilla
es|27|s|Quiero comprar tres sellos.|Quiero comprar tres estampillas.
de|27|w|Formalität|Behördengang
de|27|s|Welche Dokumente brauche ich für diese Formalität?|Welche Unterlagen brauche ich für diesen Antrag?
ru|27|w|Формальность|Процедура
es|27|w|Cartera|Billetera
es|27|s|Tengo unas monedas en la cartera.|Tengo unas monedas en la billetera.
es|19|s|Me robaron la cartera.|Me robaron la billetera.
de|27|w|Brieftasche|Geldbeutel
de|27|s|Ich habe ein paar Münzen in der Brieftasche.|Ich habe ein paar Münzen im Geldbeutel.
de|19|s|Meine Brieftasche wurde gestohlen.|Mein Geldbeutel wurde gestohlen.
ro|27|w|A încasa|A percepe
en|27|s|I want to open an account at this bank.|I'd like to open an account at this bank.
pt|27|s|Quero abrir uma conta neste banco.|Queria abrir uma conta neste banco.
ro|27|s|Vreau să deschid un cont la această bancă.|Aș vrea să deschid un cont la această bancă.
it|27|s|Voglio aprire un conto in questa banca.|Vorrei aprire un conto in questa banca.
fr|27|s|Je veux ouvrir un compte dans cette banque.|Je voudrais ouvrir un compte dans cette banque.
ru|27|s|Я оплатил электричество онлайн.|Я оплатил счёт за электричество онлайн.
en|27|s|I want to check my account balance.|I'd like to check my account balance.
pt|27|s|Quero consultar o saldo da minha conta.|Queria consultar o saldo da minha conta.
ro|27|s|Vreau să verific soldul contului meu.|Aș vrea să verific soldul contului meu.
fr|27|s|Il y a beaucoup de monde au guichet.|Il y a une longue file d'attente au guichet.
en|27|s|I want to buy three stamps.|I'd like to buy three stamps.
pt|27|s|Quero comprar três selos.|Queria comprar três selos.
ro|27|s|Vreau să cumpăr trei timbre.|Aș vrea să cumpăr trei timbre.
en|27|s|What is today's exchange rate?|What's today's exchange rate?
ru|27|w|Курс обмена|Обменный курс
ru|27|s|Какой сегодня курс обмена?|Какой сегодня обменный курс?
en|27|s|I receive my salary on the last day of the month.|I get paid on the last day of the month.
de|27|s|Das Hotel verlangt für das Frühstück extra.|Im Hotel kostet das Frühstück extra.
ro|27|s|Hotelul percepe extra pentru micul dejun.|Hotelul taxează separat micul dejun.
pt|28|w|Anedota|Episódio
pt|28|s|Contei-lhe uma anedota muito divertida.|Contei-lhe um episódio muito divertido.
ru|28|w|Жениться|Пожениться
de|28|w|Jahrestag|Hochzeitstag
de|28|s|Wir haben unseren Jahrestag in einem Restaurant gefeiert.|Wir haben unseren Hochzeitstag in einem Restaurant gefeiert.
en|28|s|I will never forget my first trip abroad.|I'll never forget my first trip abroad.
en|28|s|I have lived in three different cities.|I've lived in three different cities.
en|28|s|I learned a great lesson from that experience.|I learned a valuable lesson from that experience.
fr|28|s|J'ai appris une belle leçon de cette expérience.|J'ai tiré une belle leçon de cette expérience.
de|28|s|Aus dieser Erfahrung habe ich eine große Lektion gelernt.|Aus dieser Erfahrung habe ich viel gelernt.
fr|28|s|Quand je l'ai vu, j'ai eu une grande surprise.|Quand je l'ai vu, j'ai été très surpris.
it|28|s|Quando l'ho visto, ho avuto una grande sorpresa.|Quando l'ho visto, sono rimasto molto sorpreso.
fr|28|s|Mon premier jour d'école était inoubliable.|Mon premier jour d'école a été inoubliable.
ru|28|s|Мы отметили годовщину в ресторане.|Мы отметили годовщину свадьбы в ресторане.
ro|28|s|Ne-am sărbătorit aniversarea într-un restaurant.|Ne-am sărbătorit aniversarea căsătoriei la restaurant.
de|29|w|Selbstverbesserung|persönliche Weiterentwicklung
de|29|w|Errungenschaft|Leistung
de|29|s|Das ist eine große Errungenschaft für mich.|Das ist eine große Leistung für mich.
en|29|s|I would like to live abroad one day.|I'd like to live abroad one day.
en|29|s|With effort, you will achieve your goals.|If you work hard, you'll achieve your goals.
de|29|s|Mit Anstrengung wirst du deine Ziele erreichen.|Wenn du dich anstrengst, wirst du deine Ziele erreichen.
ro|29|s|Cu efort, îți vei atinge obiectivele.|Dacă te străduiești, îți vei atinge obiectivele.
en|29|s|If it rains tomorrow, we will stay at home.|If it rains tomorrow, we'll stay at home.
en|29|s|If I have time, I will help you.|If I have time, I'll help you.
en|29|s|You have to try even if it is scary.|You have to try even if it's scary.
ru|29|s|С упорством всё возможно.|Если проявить упорство, всё возможно.
ru|29|s|С дисциплиной ты можешь добиться чего угодно.|Благодаря дисциплине можно добиться чего угодно.
de|29|s|Jeder baut seinen eigenen Weg.|Jeder geht seinen eigenen Weg.
en|29|s|Everyone builds their own path.|Everyone makes their own path.
ru|29|s|Каждый строит свой собственный путь.|Каждый сам выбирает свой путь.
fr|29|s|Chacun construit son propre chemin.|Chacun trace son propre chemin.
fr|29|s|C'est un grand accomplissement pour moi.|C'est une grande réussite pour moi.
ro|30|w|A respinge|A infirma
es|30|s|Me has convencido con tus datos.|Me convenciste con tus datos.
en|30|s|It is a prejudice that does not hold water.|It's a prejudice that doesn't hold up.
en|30|s|I am in favour of that proposal.|I'm in favour of that proposal.
ro|30|s|Sunt de acord cu această propunere.|Sunt în favoarea acestei propuneri.
de|30|s|Du hast teilweise Recht, aber es gibt da Nuancen.|Du hast teilweise recht, aber man muss da differenzieren.
it|30|s|Quella tesi non mi convince.|Quell'argomento non mi convince.
en|30|s|The moderator asked both sides for respect.|The moderator asked both sides to show respect.
en|30|s|I want to raise an objection before voting.|I'd like to raise an objection before voting.
en|31|w|Training course|Training
ro|31|w|Pregătire profesională|Formare profesională
ro|31|s|Mă interesează să primesc pregătire continuă.|Mă interesează să primesc formare continuă.
en|31|s|I would like to take on more responsibilities.|I'd like to take on more responsibility.
ru|31|s|Я уволился, чтобы найти новые вызовы.|Я уволился, чтобы попробовать себя в чём-то новом.
es|31|s|Me presento al puesto de analista.|Me postulo para el puesto de analista.
en|31|s|I am applying for the position of analyst.|I'm applying for the position of analyst.
es|31|s|¿Cuándo podría incorporarme?|¿Cuándo podría empezar?
en|31|s|The performance review is every six months.|Performance reviews take place every six months.
it|31|s|La valutazione delle prestazioni è ogni sei mesi.|La valutazione delle prestazioni si svolge ogni sei mesi.
ru|32|w|Последствие|Влияние
fr|32|w|Foyer|Foyer épidémique
fr|32|s|Les autorités ont déclaré un foyer de la maladie.|Les autorités ont signalé un foyer épidémique.
ru|32|w|Тревога|Предупреждение
de|32|w|Nachrichtenblatt|Nachrichtensendung
ru|32|w|Бюллетень|Выпуск новостей
ru|32|s|В бюллетене в восемь часов сообщили о метеопредупреждении.|В восьмичасовом выпуске новостей сообщили о штормовом предупреждении.
ro|32|w|Buletin|Buletin de știri
ro|32|s|Buletinul de la ora opt aduce o alertă meteo.|Buletinul de știri de la ora opt anunță o alertă meteo.
it|32|w|Bollettino|Notiziario
it|32|s|Il bollettino delle otto contiene un'allerta meteo.|Il notiziario delle otto contiene un'allerta meteo.
fr|32|w|Bulletin|Bulletin d'informations
fr|32|s|Le bulletin de huit heures contient une alerte météo.|Le journal de huit heures annonce une alerte météo.
en|32|w|Bulletin|News bulletin
en|32|s|The eight o'clock bulletin carries a weather alert.|The eight o'clock news carries a weather warning.
pt|32|w|Boletim|Noticiário
pt|32|s|O boletim das oito traz um alerta meteorológico.|O noticiário das oito traz um alerta meteorológico.
es|32|w|Boletín|Noticiero
es|32|s|El boletín de las ocho trae una alerta meteorológica.|El noticiero de las ocho trae una alerta meteorológica.
en|32|s|It is a problem that affects society as a whole.|It's a problem that affects society as a whole.
es|32|s|Conviene contrastar la información.|Conviene verificar la información.
en|32|s|It is advisable to check the information.|It's advisable to verify the information.
fr|32|s|Le correspondant a fait son reportage depuis le lieu.|Le correspondant a fait son reportage depuis les lieux.
it|32|s|Il corrispondente ha riferito dal luogo.|Il corrispondente ha riferito dal luogo dei fatti.
ru|33|w|Благополучие|Хорошее самочувствие
ro|33|w|Bunăstare|Stare de bine
ro|33|s|Un somn bun este esențial pentru bunăstare.|Un somn bun este esențial pentru starea de bine.
ru|33|w|Тревога|Тревожность
en|33|w|Emergency room|Accident and emergency
en|33|s|I went to the emergency room for a serious infection.|I went to accident and emergency with a serious infection.
de|33|w|Psychische Gesundheit|psychische Gesundheit
es|33|s|Es mejor la prevención que el tratamiento.|Es mejor prevenir que curar.
ro|33|s|Prevenirea este mai bună decât tratamentul.|Este mai bine să previi decât să tratezi.
ru|33|s|Уже несколько недель я страдаю от беспокойства и плохо сплю.|Уже несколько недель меня мучает тревога, и я плохо сплю.
ru|33|s|У меня назначена встреча для общего осмотра.|Я записан на общий медосмотр.
en|33|s|The doctor asked me for a cholesterol test.|The doctor sent me for a cholesterol test.
en|33|s|After the injury I did physiotherapy.|After the injury I had physiotherapy.
en|33|s|They did blood tests on me this morning.|I had blood tests this morning.
fr|33|s|Prendre soin de sa santé mentale est aussi important que de sa santé physique.|Prendre soin de sa santé mentale est aussi important que prendre soin de sa santé physique.
ro|33|s|A avea grijă de sănătatea mintală este la fel de important ca de cea fizică.|Grija pentru sănătatea mintală este la fel de importantă ca cea pentru sănătatea fizică.
pt|33|s|Cuidar da saúde mental é tão importante como da física.|Cuidar da saúde mental é tão importante como cuidar da física.
en|33|s|A good night's sleep is key to well-being.|A good night's sleep is key to wellbeing.
de|34|w|Technologischer Durchbruch|technologischer Durchbruch
en|34|s|A cyberattack left several companies without service.|A cyberattack took several companies offline.
fr|34|s|Une cyberattaque a privé plusieurs entreprises de service.|Une cyberattaque a paralysé plusieurs entreprises.
it|34|s|Un attacco informatico ha lasciato senza servizio diverse aziende.|Un attacco informatico ha paralizzato diverse aziende.
pt|34|s|Um ciberataque deixou várias empresas sem serviço.|Um ciberataque paralisou várias empresas.
ru|34|s|Кибератака лишила связи несколько компаний.|Кибератака парализовала работу нескольких компаний.
ro|34|s|Un atac cibernetic a lăsat mai multe companii fără servicii.|Un atac cibernetic a paralizat activitatea mai multor companii.
ru|35|w|Жильё|Размещение
ru|35|w|Достояние|Наследие
it|35|w|Ospite|Padrone di casa
it|35|w|Cliente dell'albergo|Ospite
ru|35|w|Тур-пакет|Пакетный тур
ru|35|s|Мы забронировали тур-пакет на две недели.|Мы забронировали пакетный тур на две недели.
en|35|s|In that country, it is considered rude to be late.|In that country, it's considered rude to be late.
ro|35|s|În țara respectivă, este nepoliticos să întârzii.|În țara aceea, este nepoliticos să întârzii.
fr|35|s|La barrière de la langue a constitué un défi.|La barrière de la langue a été un défi.
de|35|s|Die Sprachbarriere stellte eine Herausforderung dar.|Die Sprachbarriere war eine Herausforderung.
it|35|s|La barriera linguistica ha rappresentato una sfida.|La barriera linguistica è stata una sfida.
pt|35|s|A barreira linguística constituiu um desafio.|A barreira linguística foi um desafio.
ro|35|s|Bariera lingvistică a reprezentat o provocare.|Bariera lingvistică a fost o provocare.
ru|35|s|Я прожил в местной семье в течение месяца.|Я месяц жил в местной семье.
en|35|s|I felt culture shock when I arrived.|I experienced culture shock when I arrived.
fr|35|s|La visite guidée comprend une visite de la réserve naturelle.|L'excursion guidée comprend une visite de la réserve naturelle.
it|35|s|La visita guidata include una visita alla riserva naturale.|L'escursione guidata include una visita alla riserva naturale.
pt|35|s|A visita guiada inclui uma visita à reserva natural.|A excursão guiada inclui uma visita à reserva natural.
de|36|w|Öffentlicher Nahverkehr|öffentlicher Nahverkehr
pt|36|w|Despesas de condomínio|Despesas
pt|36|s|As despesas de condomínio não estão incluídas no preço.|As despesas não estão incluídas no preço.
fr|36|w|Attique|Penthouse
pt|36|w|Sótão|Penthouse
en|36|s|I will pay the building's running costs.|I'm responsible for the building's service charges.
ro|36|s|Ipoteca mă obligă să o achit timp de douăzeci de ani.|Ipoteca mă leagă pentru douăzeci de ani.
en|36|s|I visited several flats with the estate agency.|I viewed several flats with the estate agency.
ru|36|s|Квартира меблирована и хорошо освещена.|Квартира меблированная и светлая.
ru|37|w|Сбережение|Сбережения
ru|37|w|Резервный фонд|Финансовая подушка
ru|37|s|Разумно иметь резервный фонд.|Разумно иметь финансовую подушку безопасности.
it|37|w|Pensione|Pensionamento
it|37|w|Rendita pensionistica|Pensione
ru|37|w|Пенсия|Выход на пенсию
ru|37|w|Пенсионное пособие|Пенсия
ro|37|s|Am solicitat un împrumut pentru a cumpăra o mașină.|Am luat un împrumut ca să cumpăr o mașină.
en|37|s|It is advisable to diversify your investments.|It's advisable to diversify your investments.
en|37|s|It is sensible to have an emergency fund.|It's sensible to have an emergency fund.
it|37|s|Faccio un bilancio mensile per tenere sotto controllo le mie spese.|Faccio un budget mensile per tenere sotto controllo le mie spese.
fr|37|s|J'essaie de mettre de côté 10 % de mon salaire.|J'essaie de mettre de côté dix pour cent de mon salaire.
it|38|w|Influsso|Influenza
de|38|w|Öffentliche Meinung|öffentliche Meinung
en|38|w|Feature|Report
en|38|s|Before sharing, it is a good idea to check the source.|Before sharing, it's a good idea to check the source.
en|38|s|It is best to be wary of sensationalist headlines.|It's best to be wary of sensationalist headlines.
pt|38|s|Os algoritmos mostram-nos aquilo em que já pensamos.|Os algoritmos mostram-nos aquilo que já pensamos.
es|39|w|Reclamación|Reclamo
es|39|s|Quisiera presentar una reclamación formal.|Quisiera presentar un reclamo formal.
fr|39|w|Excuse|Excuses
de|39|w|Rückgaberecht|Rückgabebedingungen
de|39|s|Laut ihrem Rückgaberecht bieten sie nur eine Teilrückerstattung an.|Laut ihren Rückgabebedingungen bieten sie nur eine Teilrückerstattung an.
de|39|w|eskalieren|weiterleiten
de|39|s|Wenn sie es nicht lösen, eskaliere ich die Beschwerde an die Geschäftsleitung.|Wenn sie es nicht lösen, leite ich die Beschwerde an die Geschäftsleitung weiter.
pt|39|w|Escalar|Encaminhar
pt|39|s|Se não resolverem, escalarei a reclamação à administração.|Se não resolverem, encaminharei a reclamação para a administração.
ro|39|w|A escalada|A înainta
ro|39|s|Dacă nu o rezolvă, voi escalada reclamația către conducere.|Dacă nu o rezolvă, voi înainta reclamația conducerii.
ru|39|w|Передать выше|Передать руководству
es|39|w|Escalar|Elevar
es|39|s|Si no lo resuelven, escalaré la queja a la gerencia.|Si no lo resuelven, elevaré la queja a la gerencia.
en|39|s|I would like to make a formal complaint.|I'd like to make a formal complaint.
en|39|s|I am willing to reach an agreement.|I'm willing to reach an agreement.
ro|39|s|Vreau să vorbesc cu persoana responsabilă.|Aș dori să vorbesc cu responsabilul.
pt|39|s|Quero falar com o responsável.|Queria falar com o responsável.
en|39|s|I do not accept that condition.|I don't accept that condition.
ro|39|s|Am primit un serviciu prost în magazin.|Am fost servit prost în magazin.
ru|39|s|Мою оферту отклонили, но сделали встречное предложение.|Моё предложение отклонили, но сделали встречное.
de|40|w|Öffentlicher Sektor|öffentlicher Sektor
ru|40|s|Правительство ввело политику экономии.|Правительство ввело политику жёсткой экономии.
pt|40|w|Crescimento acelerado|Boom
fr|40|s|Les exportations ont baissé de 5 %.|Les exportations ont baissé de cinq pour cent.
ru|40|s|Уровень безработицы снизился впервые за годы.|Уровень безработицы снизился впервые за многие годы.
ro|40|s|Rata șomajului a scăzut pentru prima dată în ani.|Rata șomajului a scăzut pentru prima dată după mulți ani.
en|40|s|The government applied an austerity policy.|The government introduced an austerity policy.
de|41|w|Bürgerschaft|Staatsbürgerschaft
ru|41|w|Воздержание от голосования|Неявка на выборы
ru|41|s|Доля воздержавшихся была выше, чем на прошлых выборах.|Неявка избирателей была выше, чем на прошлых выборах.
en|41|s|The mayor announced new works in the city.|The mayor announced new building works in the city.
ru|41|s|Мэр объявил о новых работах в городе.|Мэр объявил о новых строительных работах в городе.
en|41|s|Every voter should get informed before choosing.|Every voter should be well informed before choosing.
ru|41|s|Каждый избиратель должен информироваться перед выбором.|Каждый избиратель должен изучить информацию, прежде чем сделать выбор.
en|41|s|Diplomacy avoided a bigger conflict.|Diplomacy averted a wider conflict.
ro|41|s|Senatul a adoptat legea cu majoritate.|Senatul a adoptat legea cu majoritate de voturi.
fr|42|w|Avantage thérapeutique|Bénéfice
de|42|w|Klinische Studie|klinische Studie
de|42|w|Genetischer Code|genetischer Code
de|42|w|Gentechnisch veränderte Lebensmittel|gentechnisch veränderte Lebensmittel
de|42|w|Algorithmische Verzerrung|algorithmische Verzerrung
de|42|w|Informierte Einwilligung|informierte Einwilligung
de|42|w|Künstliche Befruchtung|künstliche Befruchtung
it|42|w|Pregiudizio algoritmico|Bias algoritmico
en|42|s|The benefits do not justify every risk.|The benefits do not justify just any risk.
ru|42|s|Выгоды не оправдывают любой риск.|Польза не оправдывает любой риск.
es|42|s|La edición genética abre posibilidades y riesgos.|La edición genética abre posibilidades, pero también implica riesgos.
en|42|s|Gene editing opens up possibilities and risks.|Gene editing opens up possibilities, but also carries risks.
fr|42|s|L'édition génétique ouvre des possibilités et des risques.|L'édition génétique ouvre des possibilités, mais comporte aussi des risques.
de|42|s|Die Genom-Editierung eröffnet Möglichkeiten und Risiken.|Die Genom-Editierung eröffnet Möglichkeiten, birgt aber auch Risiken.
it|42|s|L'editing genetico apre possibilità e rischi.|L'editing genetico apre possibilità, ma comporta anche dei rischi.
pt|42|s|A edição genética abre possibilidades e riscos.|A edição genética abre possibilidades, mas também implica riscos.
ru|42|s|Редактирование генома открывает возможности и несёт риски.|Редактирование генома открывает возможности, но несёт и риски.
ro|42|s|Editarea genetică deschide posibilități și riscuri.|Editarea genetică deschide posibilități, dar implică și riscuri.
ro|42|s|Supravegherea în masă amenință confidențialitatea.|Supravegherea în masă amenință viața privată.
ro|42|s|A declarat un conflict de interese înainte de a-și da cu părerea.|A declarat un conflict de interese înainte de a-și exprima opinia.
ru|43|w|Художник-живописец|Художник
ru|43|s|Его стиль нарушает традиционные нормы.|Его стиль порывает с традиционными нормами.
ro|43|s|Stilul său încalcă normele tradiționale.|Stilul său rupe cu normele tradiționale.
ru|43|s|Этот холст принадлежит художнику прошлого века.|Этот холст принадлежит кисти художника прошлого века.
en|43|s|The painter made a portrait of the queen.|The painter painted a portrait of the queen.
ru|43|s|Рецензия хвалила сценарий и режиссуру.|В рецензии похвалили сценарий и режиссуру.
ro|43|s|Romanul respectiv a fost tradus în peste treizeci de limbi.|Acel roman a fost tradus în peste treizeci de limbi.
de|44|s|Die Akten enthüllen bisher unbekannte Fakten.|Die Archive enthüllen bisher unbekannte Fakten.
it|44|s|I documenti rivelano informazioni finora sconosciute.|Gli archivi rivelano informazioni finora sconosciute.
ru|44|s|Документы раскрывают неизвестные факты.|Архивы раскрывают ранее неизвестные факты.
ro|44|s|Documentele dezvăluie informații necunoscute.|Arhivele dezvăluie informații necunoscute până acum.
es|44|s|La memoria histórica ayuda a evitar que se repitan.|La memoria histórica ayuda a evitar que la historia se repita.
en|44|s|Historical memory helps to prevent such events from happening again.|Historical memory helps to prevent history from repeating itself.
fr|44|s|La mémoire historique permet d'éviter que cela ne se reproduise.|La mémoire historique aide à éviter que l'histoire ne se répète.
de|44|s|Das historische Gedächtnis hilft, eine Wiederholung zu verhindern.|Das historische Gedächtnis hilft zu verhindern, dass sich die Geschichte wiederholt.
it|44|s|La memoria storica contribuisce a evitare che tali eventi si ripetano.|La memoria storica aiuta a evitare che la storia si ripeta.
pt|44|s|A memória histórica ajuda a evitar que se repitam.|A memória histórica ajuda a evitar que a história se repita.
ru|44|s|Историческая память помогает не допустить их повторения.|Историческая память помогает не допустить повторения истории.
ro|44|s|Memoria istorică contribuie la prevenirea repetării acestor evenimente.|Memoria istorică ajută ca istoria să nu se repete.
en|44|s|The allies won the victory after years of war.|The allies achieved victory after years of war.
de|45|w|Jargon|Slang
ro|45|s|Ironia lui a trecut neobservată pentru mulți.|Multora le-a scăpat ironia lui.
ru|45|s|Его ирония осталась незамеченной для многих.|Многие не заметили его иронии.
en|45|s|You need to adapt your tone to the person you're speaking to.|You need to adapt your register to the person you're speaking to.
de|45|s|Das war eine beschönigende Formulierung, keine Lüge.|Das war ein Euphemismus, keine Lüge.
ru|45|s|Внимательное слушание позволяет избежать многих недоразумений.|Если слушать внимательно, можно избежать многих недоразумений.
pt|45|s|Disse-o em tom de brincadeira, mas eles levaram-no a sério.|Disse-o a brincar, mas levaram-no a sério.
ru|45|s|Чтобы говорить свободно, нужна большая практика.|Чтобы говорить свободно, нужно много практики.
ro|46|w|Hotărâre|Sentință
de|46|w|Bestechung|Bestechungsgeld
de|46|s|Der Richter lehnte die Bestechung ab und meldete den Fall.|Der Richter lehnte das Bestechungsgeld ab und meldete den Fall.
it|46|w|Ordine del giudice|Ordinanza del giudice
en|46|s|The court handed down its judgement yesterday morning.|The court handed down its ruling yesterday morning.
ru|46|s|Договор должен быть выполнен во всех его условиях.|Договор должен быть исполнен в полном объёме.
ru|46|s|Он получил компенсацию за причиненный ущерб.|Он получил компенсацию за причинённый ущерб.
de|46|s|Der Angeklagte plädierte auf „nicht schuldig“.|Der Angeklagte plädierte auf nicht schuldig.
ru|46|s|Жюри совещалось в течение двух дней.|Присяжные совещались два дня.
ro|46|s|Poliția l-a arestat pe suspect.|Poliția l-a reținut pe suspect.
ru|46|s|Судья отказался от взятки и сообщил о деле.|Судья отказался от взятки и заявил о случившемся.
ro|46|s|A primit eliberare condiționată pentru bună purtare.|A fost eliberat condiționat pentru bună purtare.
ro|46|s|Procuratura a solicitat o pedeapsă de cinci ani de închisoare.|Parchetul a cerut o pedeapsă de cinci ani de închisoare.
ro|47|w|Lider|Manager
ru|47|w|Внедрять новое|Внедрять инновации
ro|47|w|Filială|Sucursală
ro|47|s|Compania va deschide o filială în străinătate.|Compania va deschide o sucursală în străinătate.
ru|47|w|Доходы компании|Прибыль
ro|47|w|Câștiguri|Profit
de|47|w|Verwaltung|Management
fr|47|s|Notre objectif est de doubler notre chiffre d'affaires cette année.|Notre objectif est de doubler nos ventes cette année.
ru|47|s|Наша цель — удвоить объем продаж в этом году.|Наша цель — удвоить объём продаж в этом году.
ru|47|s|Нам удалось сократить расходы, не уволив никого.|Нам удалось сократить расходы, никого не уволив.
en|47|s|The meeting will serve to set priorities.|The purpose of the meeting is to set priorities.
de|47|s|Das Treffen dient dazu, Prioritäten festzulegen.|Die Besprechung dient dazu, Prioritäten festzulegen.
it|47|s|L'incontro servirà a stabilire le priorità.|La riunione servirà a stabilire le priorità.
ru|47|s|Эта встреча позволит определить приоритеты.|Совещание поможет определить приоритеты.
ro|47|s|Întâlnirea va servi la stabilirea priorităților.|Ședința va servi la stabilirea priorităților.
de|47|s|Es ist von entscheidender Bedeutung, die Mitarbeiter zu motivieren.|Es ist entscheidend, die Mitarbeiter zu motivieren.
en|47|s|The company is set to open a branch abroad.|The company will open a branch abroad.
en|47|s|Competition reduced our market share.|The competition reduced our market share.
ru|47|s|Конкуренция сократила нашу долю рынка.|Из-за конкуренции наша доля рынка сократилась.
ru|47|s|Его видение изменило корпоративную культуру компании.|Его видение изменило культуру компании.
de|48|w|Fossiler Brennstoff|fossiler Brennstoff
de|48|w|Nachhaltige Entwicklung|nachhaltige Entwicklung
ro|48|w|Amprenta de carbon|Amprentă de carbon
en|48|s|Reducing emissions is a global priority.|Reducing emissions is a global emergency.
de|48|s|Die Reduzierung der Emissionen ist eine globale Dringlichkeit.|Die Senkung der Emissionen ist weltweit dringend notwendig.
ru|48|s|Сокращение выбросов — это глобальная задача, требующая неотложного решения.|Сокращение выбросов — неотложная глобальная задача.
ru|48|s|Переработка отходов не решает проблему.|Одной переработки отходов недостаточно, чтобы решить проблему.
en|48|s|Glaciers melt every year.|The glaciers are melting year after year.
ru|48|s|Лесовосстановление помогает вернуть леса.|Лесовосстановление помогает восстановить леса.
fr|48|s|Ils ont interdit le plastique à usage unique dans la ville.|Le plastique à usage unique a été interdit dans la ville.
ru|48|s|Экономика замкнутого цикла стремится использовать отходы.|Экономика замкнутого цикла направлена на повторное использование отходов.
fr|49|w|Recherché|Alambiqué
en|49|s|I prefer clear language to flowery language.|I prefer clear language to convoluted language.
de|49|s|Ich ziehe eine klare Sprache einer blumigen vor.|Ich ziehe eine klare Sprache einer gekünstelten vor.
ru|49|s|Я предпочитаю ясный язык, а не вычурный.|Я предпочитаю ясный язык витиеватому.
ru|49|w|Иронический|Ироничный
ru|49|w|Весомый|Категоричный
ru|49|s|Следует переформулировать эту фразу, выразив её более вежливо.|Лучше переформулировать эту фразу повежливее.
ru|49|s|Я постарался не выразиться так прямо.|Я постарался не говорить этого так прямо.
ru|49|s|Сообщение было вежливым, но решительным.|Сообщение было вежливым, но твёрдым.
ru|49|s|Его снисходительный тон меня раздражил.|Меня задел его снисходительный тон.
ru|49|s|Это был грубый и ненужный ответ.|Это был грубый и ничем не оправданный ответ.
en|49|s|It was a rude and unnecessary reply.|It was a rude and uncalled-for reply.
ru|0A|l0|Доброе утро, как вы поживаете?|Доброе утро, как ваши дела?
pt|0B|l1|Xau! Até logo!|Tchau! Até logo!
ru|5E|l0|Я бы хотел кофе, пожалуйста.|Будьте добры, один кофе.
en|2A|l0|Excuse me, how much does this watch cost?|Excuse me, how much is this watch?
de|3B|l0|Darf ich Ihnen meinen Vater vorstellen, Herrn López.|Ich möchte Ihnen meinen Vater vorstellen, Herrn López.
ro|3B|l0|Vă prezint pe tatăl meu, domnul López.|Vi-l prezint pe tatăl meu, domnul López.
fr|4A|l0|Aimeriez-vous goûter un peu de soupe ?|Voudriez-vous goûter un peu de soupe ?
fr|4B|l1|Non merci, sans moi.|Non merci, sans façon.
de|4B|l1|Nein danke, ich verzichte.|Nein danke, ich passe.
ro|4B|l1|Nu, mulțumesc, renunț.|Nu, mersi, eu zic pas.
en|6A|l1|Hey, what time does the train go?|Hey, what time does the train leave?
en|7B|l0|Pardon me, where is the nearest underground station?|Excuse me, where is the nearest underground station?
pt|7B|l0|Perdoe, onde fica a estação de metro mais próxima?|Desculpe, onde fica a estação de metro mais próxima?
ro|7B|l0|Iertați-mă, unde este cea mai apropiată stație de metrou?|Nu vă supărați, unde este cea mai apropiată stație de metrou?
en|8B|l1|Got this shirt in a bigger one?|Have you got this shirt in a bigger size?
de|8B|l0|Entschuldigung, haben Sie dieses Hemd in einer größeren Größe?|Entschuldigung, haben Sie dieses Hemd auch eine Nummer größer?
de|8B|l1|Hast du dieses Hemd eine Nummer größer?|Hast du das Hemd auch in größer?
ru|8B|l0|Извините, есть ли эта рубашка большего размера?|Извините, у вас есть эта рубашка большего размера?
fr|9B|l0|Cela vous convient-il de nous retrouver mardi à dix heures ?|Cela vous conviendrait-il de nous réunir mardi à dix heures ?
de|9B|l0|Würde es Ihnen passen, wenn wir uns Dienstag um zehn Uhr treffen?|Würde es Ihnen passen, wenn wir uns am Dienstag um zehn Uhr treffen?
ro|9B|l0|Vi se potrivește să ne întâlnim marți la ora zece?|Vă convine să ne întâlnim marți la ora zece?
pt|9B|l0|Parece-lhe bem encontrarmo-nos terça-feira às dez?|Parece-lhe bem reunirmo-nos na terça-feira às dez?
en|11A|l1|Pass me the key?|Can you pass me the key?
it|12A|l0|Dottore, ho molto mal di testa da ieri.|Dottore, ho un forte mal di testa da ieri.
it|13B|l0|Mi scusi, potrebbe aiutarmi con questo rapporto?|Mi scusi, potrebbe aiutarmi con questa relazione?
fr|14A|l0|Il fait une journée très agréable aujourd'hui, n'est-ce pas ?|Il fait très beau aujourd'hui, n'est-ce pas ?
de|14A|l0|Heute ist ein sehr angenehmer Tag, nicht wahr?|Heute ist ein wirklich schöner Tag, nicht wahr?
en|16B|l0|Allow me to tell you something curious that happened to me yesterday.|Allow me to tell you about something funny that happened to me yesterday.
en|17A|l0|What plans do you have for the holidays?|What are your plans for the holidays?
en|17A|l1|What are you up to for the holidays?|What are you doing for the holidays?
en|17B|l0|I confirm that we will meet tomorrow at nine.|I can confirm that we will meet tomorrow at nine.
de|17B|l0|Ich bestätige, dass wir uns morgen um neun Uhr treffen.|Hiermit bestätige ich unser Treffen morgen um neun Uhr.
fr|18B|l0|Avec tout mon respect, je pense qu'il existe une autre option.|Avec tout le respect que je vous dois, je pense qu'il existe une autre option.
fr|20A|l1|Salut ! Vous avez une chambre double ?|Bonjour ! Vous avez une chambre double ?
it|20A|l0|Buon pomeriggio, vorrei prenotare una camera doppia.|Buongiorno, vorrei prenotare una camera doppia.
it|20A|l1|Ciao! Avete una camera doppia?|Salve! Avete una camera doppia?
ru|20A|l1|Привет! У вас есть двухместный номер?|Здравствуйте! У вас есть двухместный номер?
ro|20A|l1|Salut! Aveți o cameră dublă?|Bună! Aveți o cameră dublă?
en|21A|l0|Excuse me, professor, could you explain that again?|Excuse me, Professor, could you explain that again?
fr|21A|l0|Excusez-moi, professeure, pourriez-vous réexpliquer cela ?|Excusez-moi, madame, pourriez-vous réexpliquer cela ?
ro|21A|l0|Scuzați-mă, doamnă profesor, ați putea explica asta încă o dată?|Scuzați-mă, doamna profesoară, ați putea explica asta încă o dată?
fr|21B|l0|Serait-il possible que vous me communiquiez vos notes ?|Vous serait-il possible de me transmettre vos notes ?
en|23B|l0|Would you like to walk with me in the park tomorrow?|Would you like to go for a walk in the park with me tomorrow?
en|23B|l1|Shall we walk in the park tomorrow?|Shall we go for a walk in the park tomorrow?
fr|23B|l0|Aimeriez-vous marcher avec moi dans le parc demain ?|Aimeriez-vous vous promener avec moi au parc demain ?
fr|23B|l1|On marche dans le parc demain ?|On va marcher au parc demain ?
it|23B|l0|Le piacerebbe camminare con me nel parco domani?|Le andrebbe di fare una passeggiata con me al parco domani?
it|23B|l1|Camminiamo nel parco domani?|Facciamo una passeggiata al parco domani?
ro|23B|l0|Ați dori să mergeți mâine cu mine pe jos prin parc?|Ați dori să ne plimbăm mâine prin parc?
ro|23B|l1|Mergem mâine pe jos prin parc?|Ne plimbăm mâine prin parc?
en|24B|l0|Would you mind if we cycled to work?|How would you feel about cycling to work?
en|24B|l1|Shall we cycle?|Shall we go by bike?
fr|25A|l1|Qu'est-ce que cette tradition veut dire ?|Ça veut dire quoi, cette tradition ?
ro|25B|l0|Va fi o onoare să vă avem la petrecerea mea.|Ar fi o onoare să veniți la petrecerea mea.
it|25B|l0|Sarà un onore avere la Sua presenza alla mia festa.|Sarebbe un onore averLa alla mia festa.
en|26A|l0|I offer you my sincerest apologies.|Please accept my sincerest apologies.
ro|26A|l0|Vă cer cele mai sincere scuze.|Vă rog să primiți scuzele mele sincere.
en|26B|l0|If you'll allow me, I would recommend speaking to her.|If I may, I would recommend speaking to her.
fr|29A|l1|Qu'est-ce que tu veux réussir l'année prochaine ?|Qu'est-ce que tu veux accomplir l'année prochaine ?
de|29B|l1|Eines Tages habe ich meine eigene Schule!|Eines Tages werde ich meine eigene Schule haben!
fr|30A|l0|Avec tout mon respect, je ne suis pas d'accord avec votre approche.|Avec tout le respect que je vous dois, je ne partage pas votre approche.
en|30B|l0|May I step in for a moment?|May I interject for a moment?
ru|30B|l0|Позвольте мне вставить слово?|Позвольте мне сказать пару слов?
it|32B|l1|Da dove l'hai preso?|Dove l'hai sentito?
fr|32B|l1|Tu as sorti ça d'où ?|Tu sors ça d'où ?
en|33A|l0|For a week I've had frequent dizzy spells.|I've been having frequent dizzy spells for a week.
en|33B|l0|I would like to request a second medical opinion.|I would like to ask for a second opinion.
ru|33B|l0|Я хотел бы получить второе медицинское заключение.|Я хотел бы получить второе врачебное мнение.
en|35A|l0|Could you recommend a typical restaurant in the area?|Could you recommend a traditional local restaurant?
en|35A|l1|Where can you eat well around here?|Where's good to eat around here?
de|35A|l0|Könnten Sie mir ein typisches Restaurant in der Gegend empfehlen?|Könnten Sie mir ein Restaurant mit typischer regionaler Küche empfehlen?
ru|35A|l0|Не могли бы вы порекомендовать типичный ресторан в этом районе?|Не могли бы вы порекомендовать ресторан местной кухни?
ro|35A|l0|Mi-ați putea recomanda un restaurant tipic din zonă?|Mi-ați putea recomanda un restaurant cu specific local?
es|35B|l0|Le agradezco sinceramente su hospitalidad.|Les agradezco sinceramente su hospitalidad.
en|35B|l0|I sincerely thank you for your hospitality.|Thank you most sincerely for your hospitality.
it|35B|l0|La ringrazio sinceramente per la Sua ospitalità.|Vi ringrazio sinceramente per la vostra ospitalità.
pt|35B|l0|Agradeço-lhe sinceramente a sua hospitalidade.|Agradeço-lhes sinceramente a hospitalidade.
pt|35B|l1|Mil obrigados por tudo, foram incríveis!|Muito obrigado por tudo, foram incríveis!
fr|37B|l1|Merci, mais sans moi.|Merci, mais je passe mon tour.
ro|37B|l1|Mulțumesc, dar renunț.|Mersi, dar eu zic pas.
en|37B|l0|I appreciate the proposal, but I cannot accept it.|I appreciate the offer, but I'm afraid I can't accept it.
pt|38A|l0|Essa informação é falsa e gostaria de esclarecer.|Essa informação é falsa e gostaria de o esclarecer.
ro|38A|l0|Informația aceea este falsă și aș dori să clarific.|Informația aceea este falsă și aș dori să clarific acest lucru.
ro|38A|l1|E o minciună, nu credeți.|E o minciună, nu credeți așa ceva.
it|38A|l1|È una bugia, non ci credete.|È una bugia, non credeteci.
it|38B|l1|Correggete, per favore.|Correggetelo, per favore.
fr|39A|l1|On m'a facturé trop, vous pouvez vérifier ?|On m'a trop facturé, vous pouvez vérifier ?
ro|39A|l0|Aș dori să contest o taxare nejustificată pe factura mea.|Aș dori să contest o sumă facturată greșit.
ro|39A|l1|Mi-au luat prea mult, puteți verifica?|Mi s-a facturat prea mult, puteți verifica?
fr|39B|l0|J'accepte votre proposition et vous remercie de votre prise en charge.|J'accepte votre proposition et je vous remercie d'avoir traité ma demande.
it|39B|l0|Accetto la Sua proposta e La ringrazio per la gestione.|Accetto la Sua proposta e La ringrazio per l'assistenza.
en|40B|l0|We regret to inform you that your position has been eliminated.|We regret to inform you that your position has been made redundant.
es|41A|l0|Le pido su voto para construir un futuro mejor.|Les pido su voto para construir un futuro mejor.
es|41A|l1|¡Vota por nosotros, lo vamos a hacer bien!|¡Voten por nosotros, lo vamos a hacer bien!
en|41A|l0|I ask for your vote to build a better future.|I'm asking for your vote to build a better future.
it|41A|l0|Le chiedo il Suo voto per costruire un futuro migliore.|Vi chiedo il vostro voto per costruire un futuro migliore.
pt|41A|l0|Peço o seu voto para construirmos um futuro melhor.|Peço o vosso voto para construirmos um futuro melhor.
ru|41A|l0|Прошу вашего голоса, чтобы построить лучшее будущее.|Прошу вас проголосовать за меня, чтобы вместе построить лучшее будущее.
en|41B|l1|That law is badly made.|That law is badly written.
pt|42A|l1|Animas-te a participar neste estudo?|Alinhas em participar neste estudo?
ru|42B|l0|Это достижение ставит серьёзную этическую дилемму.|Это достижение ставит перед нами серьёзную этическую дилемму.
ro|43A|l0|Această operă mi se pare un adevărat giuvaer.|Această operă mi se pare o adevărată bijuterie.
it|43A|l0|Questa opera mi sembra un vero gioiello.|Quest'opera mi sembra un vero gioiello.
pt|43B|l1|O final deixou-me algo frio.|O final deixou-me um pouco indiferente.
en|43B|l0|In my opinion, the plot loses strength in the final act.|In my opinion, the plot loses momentum in the final act.
de|46B|l0|Euer Ehren, ich erkläre, dass ich nicht anwesend war.|Herr Richter, ich erkläre, dass ich nicht anwesend war.
ro|47A|l0|Permiteți-ne să prezentăm propunerea noastră de afaceri.|Permiteți-mi să vă prezint propunerea noastră de afaceri.
en|47B|l1|Do you think I could move up?|Do you think I could get promoted?
en|49A|l1|Better say it another way, okay?|Maybe say it a different way, okay?
pt|49A|l1|Melhor dizeres de outra forma, está bem?|É melhor dizeres isso de outra forma, está bem?
en|49B|l0|I thank you for your invitation, but I will be unable to attend.|Thank you for your invitation, but I will be unable to attend.
en|0|c|I offer you my sincere apologies.|Please accept my sincere apologies.
ro|0|c|Vă cer scuze sincere.|Vă cer sincer scuze.
ru|0|c|Я угощаю тебя кофе.|Давай я угощу тебя кофе.
ro|0|c|Te invit la o cafea.|Îți fac cinste cu o cafea.
en|5|c|Excuse me, there's no rush.|Sorry, there's no rush.
fr|5|c|Excusez-moi, il n'y a pas d'urgence.|Excusez-moi, rien ne presse.
pt|5|c|Com licença, não há pressa.|Desculpe, não há pressa.
ru|5|c|Я бы хотел кофе, пожалуйста.|Будьте добры, один кофе.
ru|6|c|Извините, мой чемодан не прибыл.|Извините, мой чемодан не прилетел.
ro|6|c|Vreau valiza mea imediat!|Îmi vreau valiza imediat!
fr|6|c|C'est une valise noire, vous savez.|C'est une valise noire, tu vois.
de|6|c|Es ist ein schwarzer Koffer, wissen Sie.|Es ist ein schwarzer Koffer, weißt du.
it|6|c|È una valigia nera, sa.|È una valigia nera, sai.
pt|6|c|É uma mala preta, sabe.|É uma mala preta, sabes.
ru|6|c|Ну, чёрный чемодан, понимаете.|Ну, чёрный чемодан, понимаешь.
ro|6|c|E o valiză neagră, știți.|E o valiză neagră, știi.
de|12|c|Ich verstehe, gibt es noch eine andere freie Zeit?|Ich verstehe, haben Sie zu einer anderen Zeit noch etwas frei?
de|12|c|Perfekt. Darf ich Ihren vollständigen Namen haben?|Perfekt. Wie ist Ihr vollständiger Name?
ru|12|c|Отлично. Не назовёте ли своё полное имя?|Отлично. Как ваше полное имя?
it|13|c|Questo rapporto ha un errore grave.|Questo report ha un errore grave.
en|13|c|This report has a serious error.|There's a serious mistake in this report.
it|26|c|Mi è dispiaciuto che tu abbia dimenticato il mio compleanno.|Ci sono rimasto male che ti sia dimenticato del mio compleanno.
ro|26|c|M-a durut că ai uitat ziua mea.|M-a durut că ai uitat de ziua mea.
en|26|c|I offer you my apologies.|Please accept my apologies.
ru|26|c|Я ожидал хотя бы звонка.|Я ждал хотя бы звонка.
ru|26|c|Я был очень занят, ничего страшного!|Я был очень занят, не делай из этого трагедию!
ru|26|c|Можем сделать что-нибудь вместе.|Можем куда-нибудь сходить вместе.
it|31|c|Ho cinque anni di esperienza nelle vendite e cerco di crescere.|Ho cinque anni di esperienza nelle vendite e voglio crescere professionalmente.
ro|31|c|Am cinci ani de experiență în vânzări și caut să mă dezvolt.|Am cinci ani de experiență în vânzări și vreau să mă dezvolt profesional.
pt|31|c|Tenho cinco anos de experiência em vendas e procuro crescer.|Tenho cinco anos de experiência em vendas e procuro evoluir.
en|31|c|Well, I worked in several things, you know.|Well, I've done a bit of everything, you know.
ro|31|c|Uneori sunt prea exigent cu mine însumi, dar mă îmbunătățesc.|Uneori sunt prea exigent cu mine însumi, dar lucrez la asta.
en|31|c|Yes, what is the team I would work with like?|Yes, what's the team I'd be working with like?
ru|31|c|Да, какая команда, с которой я буду работать?|Да, что вы можете рассказать о команде, с которой я буду работать?
ro|39|c|Produsul dumneavoastră nu face nimic și îmi cer banii înapoi!|Produsul dumneavoastră nu e bun de nimic și îmi vreau banii înapoi!
fr|39|c|Votre produit ne marche pas et j'exige mon argent !|Votre produit ne marche pas et j'exige d'être remboursé !
it|39|c|Il vostro prodotto non funziona e voglio i miei soldi!|Il vostro prodotto non funziona e rivoglio i miei soldi!
fr|39|c|Salut, écoutez, j'ai un problème.|Salut, écoute, j'ai un problème.
de|39|c|Hallo, hören Sie, ich habe ein Problem.|Hallo, hör mal, ich habe ein Problem.
it|39|c|Salve, senta, ho un problema.|Ciao, senti, ho un problema.
pt|39|c|Olá, olhe, tenho um problema.|Olá, olha, tenho um problema.
ru|39|c|Привет, послушайте, у меня проблема.|Привет, слушай, у меня проблема.
ro|39|c|Salut, uitați, am o problemă.|Salut, uite, am o problemă.
en|39|c|I prefer the refund, please. Thank you very much.|I'd prefer the refund, please. Thank you very much.
de|39|c|Ich bevorzuge die Erstattung, bitte. Vielen Dank.|Ich hätte lieber die Erstattung, bitte. Vielen Dank.
en|39|c|The refund is better.|I'd rather have the refund.
ru|39|c|Предпочту возврат денег, пожалуйста. Большое спасибо.|Я бы предпочёл возврат денег, пожалуйста. Большое спасибо.
es|39|c|¡Ni me haga perder más tiempo!|¡No me haga perder más tiempo!
de|39|c|Lassen Sie mich nicht noch mehr Zeit verschwenden!|Verschwenden Sie nicht noch mehr von meiner Zeit!
de|8|c|Ja, sie gefällt mir. Gibt es günstigere?|Ja, es gefällt mir. Gibt es günstigere?
ru|8|c|Красивая, но сколько она стоит, пожалуйста?|Красивая, а сколько она стоит, не подскажете?
en|11|c|Good morning, I've come to check the house. Is everything fine?|Good morning, I've come to check on the house. Is everything all right?
fr|11|c|Bonjour, je viens vérifier la maison. Tout va bien ?|Bonjour, je viens jeter un œil à la maison. Tout va bien ?
de|11|c|Guten Morgen, ich komme, um das Haus zu überprüfen. Ist alles in Ordnung?|Guten Morgen, ich komme, um nach dem Haus zu sehen. Ist alles in Ordnung?
en|11|c|Everything is wrong and you do nothing!|Everything's broken and you never do anything!
ro|11|c|Totul e prost și dumneavoastră nu faceți nimic!|Nimic nu merge și dumneavoastră nu faceți nimic!
it|11|c|Tutto va male e lei non fa niente!|Non funziona niente e lei non fa nulla!
fr|11|c|Tout va mal et vous ne faites rien !|Rien ne marche et vous ne faites rien !
pt|11|c|Está tudo mal e o senhor não faz nada!|Está tudo estragado e o senhor não faz nada!
pt|11|c|Eu arranjo amanhã de manhã, está bem para si?|Arranjo-a amanhã de manhã, pode ser?
fr|11|c|Demain ? Ce doit être aujourd'hui !|Demain ? Il faut que ce soit aujourd'hui !
ru|11|c|Завтра? Это нужно сегодня!|Завтра? Это нужно сделать сегодня!
fr|15|c|Merci de m'inviter, mais samedi je ne peux pas.|Merci pour l'invitation, mais samedi je ne peux pas.
en|15|c|What's up? Do you have another plan?|What's up? Do you have other plans?
fr|15|c|Que se passe-t-il ? Tu as un autre plan ?|Qu'est-ce qui se passe ? Tu as autre chose de prévu ?
de|15|c|Was ist los? Hast du einen anderen Plan?|Was ist los? Hast du schon was anderes vor?
it|15|c|Che succede? Hai un altro programma?|Che succede? Hai altri programmi?
ro|15|c|Ce s-a întâmplat? Ai alt plan?|Ce s-a întâmplat? Ai alte planuri?
pt|15|c|O que se passa? Tens outro plano?|O que se passa? Tens outros planos?
en|15|c|Yes, I have other things.|Yes, I've got other things on.
fr|15|c|Oui, j'ai d'autres choses.|Oui, j'ai d'autres choses à faire.
it|15|c|Sì, ho altre cose.|Sì, ho altro da fare.
pt|15|c|Sim, tenho outras coisas.|Sim, tenho outras coisas para fazer.
fr|15|c|D'accord, mais la prochaine fois, ne rate pas ça.|D'accord, mais la prochaine fois, tu viens.
it|15|c|Promesso! Ci vediamo un altro giorno per un drink?|Promesso! Ci vediamo un altro giorno per bere qualcosa?
it|15|c|Non farmi pressione!|Non mettermi pressione!
en|19|c|Go straight for two streets and turn right.|Go straight on for two streets and turn right.
it|19|c|Vada dritto per due strade e giri a destra.|Vada dritto per due isolati e giri a destra.
it|19|c|Due strade? È lontanissimo!|Due isolati? È lontanissimo!
ro|19|c|Mergeți drept două străzi și faceți dreapta.|Mergeți drept înainte două străzi și faceți la dreapta.
ru|20|c|Простите, я не нахожу бронирования на ваше имя.|К сожалению, я не нахожу брони на ваше имя.
en|20|c|Well, it must be there, look properly.|Well, it must be there, have a proper look.
de|20|c|Na ja, sie muss da sein, schauen Sie richtig nach.|Na ja, sie muss da sein, schauen Sie noch mal genau nach.
de|20|c|Hier ist sie, sie wurde für die Folgewoche gemacht. Das tut mir leid.|Hier ist sie, sie wurde für die Woche danach eingetragen. Das tut mir leid.
en|20|c|I understand it was a mistake. Do you have any room available today?|I understand it was a mistake. Do you have any rooms available today?
de|20|c|Wie inkompetent! Ich will mit dem Manager sprechen!|So eine Inkompetenz! Ich will mit dem Chef sprechen!
fr|20|c|Oui, cela me convient. Pourriez-vous me faire une réduction pour le dérangement ?|Oui, cela me convient. Pourriez-vous me faire une réduction pour le désagrément ?
en|21|c|Tell me, how can I help you?|Yes, how can I help you?
ru|21|c|Скажите, чем я могу вам помочь?|Слушаю вас, чем могу помочь?
fr|21|c|Professeur, j'aimerais vous demander un délai supplémentaire pour le devoir, si c'est possible.|Monsieur, j'aimerais vous demander un délai supplémentaire pour le devoir, si c'est possible.
ru|21|c|Почему вы его не закончили?|Почему вы её не закончили?
ro|21|c|De ce nu l-ați terminat?|De ce nu ați terminat-o?
en|21|c|I was ill all week and couldn't make progress. I'm sorry.|I was ill all week and couldn't get anything done. I'm sorry.
de|21|c|Ich war die ganze Woche krank und konnte nicht vorankommen. Es tut mir leid.|Ich war die ganze Woche krank und bin nicht vorangekommen. Es tut mir leid.
ru|21|c|Я болел всю неделю и не смог продвинуться. Простите.|Я болел всю неделю и ничего не успел сделать. Простите.
ro|21|c|Am fost bolnav toată săptămâna și nu am putut avansa. Îmi pare rău.|Am fost bolnav toată săptămâna și nu am reușit să avansez. Îmi pare rău.
pt|21|c|É que tive muitas coisas.|É que tive muito que fazer.
de|21|c|Ich gebe Ihnen drei Tage mehr. Reicht das?|Ich gebe Ihnen drei weitere Tage. Reicht das?
en|27|c|Good morning, my card was blocked and I need help, please.|Good morning, my card has been blocked and I need help, please.
ro|27|c|Banca dumneavoastră mi-a blocat cardul fără avertisment!|Banca dumneavoastră mi-a blocat cardul fără să mă anunțe!
en|27|c|Can you give me your ID, please?|May I see your ID, please?
it|27|c|Che bello, grazie.|Ottimo, grazie.
pt|food|d|Quivi|Kiwi
en|animals|d|Dove|Pigeon
fr|animals|d|Colombe|Pigeon
it|animals|d|Colomba|Piccione
pt|animals|d|Pomba|Pombo
de|colors|d|Orange|orange
de|colors|d|Gold|golden
de|colors|d|Silber|silbern
de|colors|d|Himmelblau|himmelblau
de|colors|d|Türkis|türkis
de|colors|d|Beige|beige
de|colors|d|Limettengrün|limettengrün
de|colors|d|Flieder|fliederfarben
de|colors|d|Fuchsia|fuchsia
de|colors|d|Weinrot|weinrot
de|colors|d|Cremefarben|cremefarben
de|colors|d|Olivgrün|olivgrün
de|colors|d|Smaragdgrün|smaragdgrün
de|colors|d|Korallenrot|korallenrot
de|colors|d|Indigo|indigoblau
de|colors|d|Karmesinrot|karmesinrot
de|colors|d|Scharlachrot|scharlachrot
de|colors|d|Bernstein|bernsteinfarben
de|colors|d|Marineblau|marineblau
de|colors|d|Hellblau|hellblau
de|colors|d|Hellgrün|hellgrün
de|colors|d|Dunkelgrün|dunkelgrün
de|colors|d|Hellgrau|hellgrau
de|colors|d|Dunkelgrau|dunkelgrau
de|colors|d|Blassrosa|blassrosa
de|colors|d|Bronze|bronzefarben
de|colors|d|Kupfer|kupferfarben
de|colors|d|Elfenbein|elfenbeinfarben
de|colors|d|Lavendel|lavendelfarben
de|colors|d|Mint|mintgrün
de|colors|d|Senf|senfgelb
de|colors|d|Schokoladenbraun|schokoladenbraun
ro|colors|d|Smarald|Verde smarald
ro|colors|d|Coral|Corai
ro|colors|d|Cupru|Arămiu
en|colors|d|Dark-skinned|Dark-haired
de|colors|d|dunkelhäutig|dunkelhaarig
ru|colors|d|Смуглый|Темноволосый
en|colors|d|Redhead|Red-haired
fr|colors|d|Aux cheveux gris|Grisonnant
ro|body|d|Încheietură|Încheietura mâinii
it|body|d|Palmo|Palma
fr|home|d|Chambre à coucher|Chambre
pt|home|d|Quarto de dormir|Quarto
ru|home|d|Метла|Веник
en|nature|d|Lightning bolt|Lightning
en|nature|d|Countryside|Field
fr|nature|d|Campagne|Champ
de|nature|d|Land|Feld
it|nature|d|Campagna|Campo
ro|nature|d|Rocă|Stâncă
pt|clothes|d|Camiseta|T-shirt
de|clothes|d|Schirmmütze|Kappe
pt|clothes|d|Fecho|Fecho-éclair
de|clothes|d|Absatzschuhe|Stöckelschuhe
it|clothes|d|Cuffia|Berretto
it|clothes|d|Maschera|Costume di carnevale
en|transport|d|Small boat|Boat
pt|transport|d|Cais|Plataforma
it|transport|d|Conducente|Autista
ru|transport|d|Шоссе|Дорога
fr|transport|d|Feu de signalisation|Feu rouge
pt|transport|d|Posto de gasolina|Bomba de gasolina
fr|jobs|d|Hôtesse de l'air|Steward
fr|jobs|d|Concepteur|Designer
de|jobs|d|Reiseführer|Reiseleiter
de|jobs|d|Athlet|Sportler
fr|family|d|Épouse|Femme
de|family|d|Fester Freund|fester Freund
de|family|d|Feste Freundin|feste Freundin
de|family|d|Ledig|ledig
de|family|d|Verheiratet|verheiratet
de|family|d|Geschieden|geschieden
de|family|d|Junger Mensch|junger Mensch
de|family|d|Älterer Mensch|älterer Mensch
it|family|d|Celibe|Single
it|family|d|Focolare|Casa
ru|family|d|Домашний очаг|Дом
de|city|d|Dom|Kathedrale
ro|city|d|Fântână|Fântână arteziană
it|city|d|CAP|Codice postale
ro|tech|d|Dosar|Folder
it|tech|d|Collegamento|Link
it|tech|d|Seguace|Follower
ru|tech|d|Печатать|Распечатать
de|tech|d|Soziales Netzwerk|soziales Netzwerk
de|tech|d|Künstliche Intelligenz|künstliche Intelligenz
de|tech|d|Herunterladen|herunterladen
de|tech|d|Eine Datei hochladen|eine Datei hochladen
de|tech|d|Speichern|speichern
de|tech|d|Löschen|löschen
de|tech|d|Kopieren|kopieren
de|tech|d|Einfügen|einfügen
de|tech|d|Drucken|drucken
de|tech|d|Einschalten|einschalten
de|tech|d|Ausschalten|ausschalten
de|tech|d|Verbinden|verbinden
de|tech|d|Installieren|installieren
de|tech|d|Aktualisieren|aktualisieren
de|tech|d|Neu starten|neu starten
`;
  window.FIXES_MISSING = [];
  FIX.trim().split("\n").forEach(line => {
    const [lang, u, k, old, nw] = line.split("|");
    let arr;
    if (k[0] === "l") {  /* situación: la clave es unidad+letra (p. ej. 28B) y k = l0 (formal) o l1 (informal) */
      const pr = (window.LIVE || []).find(x => x.unit + x.id === u);
      arr = pr && (lang === "es" ? pr.es : (pr.t || {})[lang]);
      const i = arr ? arr.indexOf(old) : -1;
      if (i !== +k[1]) window.FIXES_MISSING.push(line); else arr[i] = nw;
      return;
    }
    if (k === "d") {  /* diccionario: u = id de la categoría */
      const c = (window.DICT_CATS || []).find(x => x.id === u);
      arr = c && (lang === "es" ? c.w : c.t[lang]);
      const i = arr ? arr.indexOf(old) : -1;
      if (i < 0) window.FIXES_MISSING.push(line); else arr[i] = nw;
      return;
    }
    if (k === "c") {  /* escena: u = unidad; se busca el texto exacto en sus turnos */
      const sc = (window.SCENES || []).find(x => x.unit === +u);
      let done = false;
      if (sc && lang === "es") sc.turns.forEach(tu => {
        if (!done && tu.es === old) { tu.es = nw; done = true; }
        tu.opts.forEach(o => { if (!done && o.es === old) { o.es = nw; done = true; } });
      });
      else if (sc && sc.t[lang]) sc.t[lang].forEach(row => { const i = row.indexOf(old); if (!done && i >= 0) { row[i] = nw; done = true; } });
      if (!done) window.FIXES_MISSING.push(line);
      return;
    }
    arr = (window.COURSES[lang] || {}).t && window.COURSES[lang].t[+u][k === "w" ? 0 : 1];
    const i = arr ? arr.indexOf(old) : -1;
    if (i < 0) window.FIXES_MISSING.push(line); else arr[i] = nw;
  });
})();
