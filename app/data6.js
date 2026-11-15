/* Pares de idiomas: cualquier idioma base (el de las preguntas) y cualquier idioma a aprender, de los 8 (es, en, fr, de, it, pt, ru, ro).
   Todas las frases existen ya en los 8 idiomas, así que no hay que traducir nada para combinar pares.
   Aquí se añade el español como idioma a aprender (sus textos son los de UNITS) y los textos de interfaz y títulos en inglés.
   Los títulos en inglés necesitan revisión de un hablante nativo. */
window.LEARN = {
  en: {
    titles: ["First greetings", "Introductions", "Numbers", "Family", "Food and drink", "At the restaurant", "Travel", "In the city", "Shopping", "Days and times",
      "Daily routine", "At home", "Health", "Work", "The weather", "Free time", "Telling the past", "Future plans", "Opinions", "Asking for help",
      "Bookings and trips", "Studies", "Technology and media", "Healthy habits", "The environment", "Culture and traditions", "Friendship and advice", "Money and paperwork", "Experiences and memories", "Dreams and conditions", "Expressing opinions and debating", "Interview and career", "News and society", "Health and wellbeing", "Science and technology", "Travel and cultures", "Housing and the city", "Personal finance", "Media and networks", "Complaints and negotiation", "Economy and employment", "Politics and society", "Science and ethics", "Art and literature", "History and memory", "Language and communication", "Law and justice", "Business and leadership", "The environment and the future", "Nuances and register"],
    ctx: [
      "You meet someone for the first time and want to be friendly.", "You introduce yourself and ask where the other person is from.", "You pay, ask prices and say how many people there are.",
      "You show a photo and talk about your relatives.", "You are at a friend's house and they offer you something to eat.", "You arrive at a restaurant and ask for a table and food.",
      "You arrive in another country and need to get around and find a place to stay.", "You are lost and ask for directions in the street.", "You walk into a shop to buy clothes.",
      "You arrange to meet someone and plan the week.", "You describe what a normal day in your life is like.", "You show your home to a visitor.",
      "You don't feel well and go to the doctor.", "It is your first day at a new company.", "You talk about the weather before leaving home.",
      "You plan the weekend with your friends.", "You tell what you did yesterday and last week.", "You make plans for the next holidays.",
      "You say how you feel and give your opinion.", "Something unexpected happens and you need help.", "You organise a trip and sort out problems along the way.",
      "You talk about what you study and how you learn best.", "You discuss the news and how you use your phone.", "You describe how you look after your health and what you want to change.",
      "You talk about how to look after your city and the planet.", "You tell a foreign friend how a holiday is celebrated in your country.", "A friend has a problem and you give your opinion.",
      "You deal with things at the bank and the post office.", "You tell what you have experienced and what your childhood was like.", "You imagine your ideal life and what you would do.",
      "You take part in a debate and defend your position with arguments.", "You apply for a job and explain your career history.", "You discuss a topical issue and its causes.", "You talk to a specialist about your health and your lifestyle.", "You explain how an innovation works and the risks involved.", "You describe a trip and compare customs in different countries.", "You rent a property and negotiate the terms.", "You plan your budget and your investments.", "You analyse how the media and social media influence public opinion.", "You make a claim and reach a settlement.", "You analyse the economic situation and its impact on employment.", "You discuss a political change and its consequences.", "You debate the ethical limits of a scientific breakthrough.", "You analyse a work of art and explain its artistic merit.", "You reflect on a historical period and its legacy.", "You explain why a message was misunderstood.", "You follow a court case and explain it clearly.", "You present a company's strategy to its team.", "You propose measures to tackle environmental challenges.", "You adapt the way you speak to suit the situation."],
    dictNames: { food: "Fruit and vegetables", animals: "Animals", colors: "Colours", body: "The body", home: "At home", nature: "Nature" },
    levels: { A1: ["Beginner", "I am starting from zero or know very little."], A2: ["Elementary", "I know basic phrases and want to talk about my day."], B1: ["Intermediate", "I can get by when travelling and want to share experiences and opinions."], B2: ["Upper intermediate", "I communicate fluently on familiar topics and defend my opinion."], C1: ["Advanced", "I express myself with ease and understand demanding texts."] }
  }
};
/* Curso virtual: los textos destino son el español de las unidades. */
COURSES.es = { name: "Español", code: "ES", color: "#c2255c", speech: "es-MX", t: UNITS.map(u => [u.w, u.s]) };
/* Idioma de la interfaz: español si el idioma base es español; en cualquier otro caso, inglés. Se puede cambiar en el perfil. */
window.uiLang = () => (window.__uiLang || "es");
window.unitTitle = (lang, ui) => (uiLang() === "en" ? LEARN.en.titles[ui] : UNITS[ui].title);
window.unitCtx = (lang, ui) => (uiLang() === "en" ? LEARN.en.ctx[ui] : UNITS[ui].ctx);
