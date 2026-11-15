/* Curso "Español" para angloparlantes.
   Reutiliza las 30 unidades: el idioma de partida (lo que se lee en la pregunta) es el inglés que ya existe en
   COURSES.en y el destino es el español neutro de UNITS. Aquí solo se añaden los textos que no tenían versión en inglés
   (títulos, contexto y nombres del diccionario). La interfaz de la app sigue en español: pendiente de internacionalizar.
   Hace falta revisión de un hablante nativo de inglés para los títulos. */
window.LEARN = {
  es: {
    prompt: "en",
    titles: ["First greetings", "Introductions", "Numbers", "Family", "Food and drink", "At the restaurant", "Travel", "In the city", "Shopping", "Days and times",
      "Daily routine", "At home", "Health", "Work", "The weather", "Free time", "Telling the past", "Future plans", "Opinions", "Asking for help",
      "Bookings and trips", "Studies", "Technology and media", "Healthy habits", "The environment", "Culture and traditions", "Friendship and advice", "Money and paperwork", "Experiences and memories", "Dreams and conditions"],
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
      "You deal with things at the bank and the post office.", "You tell what you have experienced and what your childhood was like.", "You imagine your ideal life and what you would do."],
    dictNames: { food: "Fruit and vegetables", animals: "Animals", colors: "Colours", body: "The body", home: "At home", nature: "Nature" },
    levels: { A1: ["Beginner", "I am starting from zero or know very little."], A2: ["Elementary", "I know basic phrases and want to talk about my day."], B1: ["Intermediate", "I can get by when travelling and want to share experiences and opinions."] }
  }
};
/* Curso virtual: los textos destino son el español de las unidades. */
COURSES.es = { name: "Español", code: "ES", color: "#c2255c", speech: "es-MX", learn: true, t: UNITS.map(u => [u.w, u.s]) };
/* Título y contexto de una unidad según el curso (en los cursos para hispanohablantes salen de UNITS). */
window.unitTitle = (lang, ui) => (LEARN[lang] ? LEARN[lang].titles[ui] : UNITS[ui].title);
window.unitCtx = (lang, ui) => (LEARN[lang] ? LEARN[lang].ctx[ui] : UNITS[ui].ctx);
