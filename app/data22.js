/* Correcciones de la revisión de naturalidad (idioma por idioma). Cada línea: idioma|unidad|w o s|texto actual|texto nuevo.
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
    arr = (window.COURSES[lang] || {}).t && window.COURSES[lang].t[+u][k === "w" ? 0 : 1];
    const i = arr ? arr.indexOf(old) : -1;
    if (i < 0) window.FIXES_MISSING.push(line); else arr[i] = nw;
  });
})();
