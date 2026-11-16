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
