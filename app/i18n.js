/* Interfaz en inglés.
   La app está escrita en español; para ofrecer la interfaz en inglés sin duplicar cada pantalla, este módulo traduce los textos
   FIJOS de la interfaz (menús, botones, mensajes, explicaciones) cuando el idioma de la interfaz es "en".
   No toca el contenido de aprendizaje (palabras y frases de los cursos), que ya existe en los 8 idiomas.
   Funciona con un diccionario de plantillas ("Unidad {0}" -> "Unit {0}") y observa la pantalla para traducir lo que la app dibuja.
   Si aparece un texto sin traducción, se queda en español (nunca se rompe la pantalla). tests/i18n.test.js comprueba la cobertura. */
(() => {
  const NAMES = { "español": "Spanish", "inglés": "English", "francés": "French", "alemán": "German", "italiano": "Italian", "portugués": "Portuguese", "ruso": "Russian", "rumano": "Romanian" };
  const EN = {
    /* Navegación y general */
    "Aprender": "Learn", "Vocabulario": "Vocabulary", "Repaso": "Review", "Perfil": "Profile", "Planes": "Plans",
    "Navegación": "Navigation", "Rocco — Aprende idiomas": "Rocco — Learn languages",
    "Cerrar": "Close", "Cancelar": "Cancel", "Entendido": "Got it", "Continuar": "Continue", "Seguir": "Keep going", "Salir": "Quit", "Mejorar": "Upgrade",
    "Empezar": "Start", "Repetir": "Repeat", "Comprobar": "Check", "Lento": "Slow", "Sonido": "Sound", "Escuchar": "Listen", "Escuchar despacio": "Listen slowly",
    "Puntos de experiencia": "Experience points", "Racha de días": "Day streak", "Vidas": "Lives",
    /* Elegir idioma */
    "¿Qué idioma quieres aprender?": "Which language do you want to learn?",
    "Con Premium puedes cambiar de curso cuando quieras.": "With Premium you can switch courses whenever you like.",
    "Con el plan Estándar eliges 1 curso. Premium desbloquea todos.": "With the Standard plan you pick 1 course. Premium unlocks them all.",
    "Las preguntas se leen en": "Questions are shown in",
    "Idioma base": "Base language",
    "Elige tu idioma base y el idioma que quieres aprender: cualquier combinación funciona.": "Choose your base language and the language you want to learn: any combination works.",
    "Es tu idioma base": "This is your base language", "Solo Premium": "Premium only", "30 unidades": "30 units", "Volver al curso": "Back to course",
    "Aprender más de un idioma es una función Premium.": "Learning more than one language is a Premium feature.",
    "Curso de": "Course:", "niveles": "levels",
    /* Nivel */
    "¿Cuál es tu nivel de {1}?": "What is your {1} level?",
    "Recibirás las unidades y los ejercicios de ese nivel. Podrás cambiarlo cuando quieras.": "You will get the units and exercises for that level. You can change it whenever you like.",
    "¿No estás seguro?": "Not sure?", "Haz una prueba de 8 preguntas y te recomendamos un nivel.": "Take an 8-question test and we will recommend a level.",
    "Hacer la prueba": "Take the test",
    "Con el plan Estándar tienes las {0} primeras unidades de cada nivel.": "With the Standard plan you get the first {0} units of each level.",
    "Intermedio alto": "Upper intermediate", "Avanzado": "Advanced", "Principiante": "Beginner", "Elemental": "Elementary", "Intermedio": "Intermediate",
    "Empiezo desde cero o sé muy poco.": "I am starting from zero or know very little.",
    "Ya sé frases básicas y quiero hablar de mi día a día.": "I know basic phrases and want to talk about my day.",
    "Me defiendo en viajes y quiero contar experiencias y dar mi opinión.": "I can get by when travelling and want to share experiences and opinions.",
    "Trabajo y carrera, noticias y sociedad, salud y bienestar, ciencia y tecnología, medios, debate y argumentación": "Work and career, news and society, health and wellbeing, science and technology, media, debate and argument",
    "Economía, política, ciencia, cultura, matices y registro formal": "Economics, politics, science, culture, nuance and formal register",
    "Participar con fluidez en conversaciones, entender textos complejos y argumentar tu punto de vista.": "Take part fluently in conversations, understand complex texts and argue your point of view.",
    "Expresarte con espontaneidad, comprender textos largos y exigentes, y usar el idioma con flexibilidad en lo académico y profesional.": "Express yourself spontaneously, understand long and demanding texts, and use the language flexibly in academic and professional settings.",
    "Me comunico con fluidez en temas conocidos y defiendo mi opinión.": "I communicate fluently on familiar topics and defend my opinion.",
    "Me expreso con soltura y entiendo textos exigentes.": "I express myself with ease and understand demanding texts.",
    "{0} unidades": "{0} units",
    "5 sesiones: A1, A2, B1, B2 y C1": "5 sessions: A1, A2, B1, B2 and C1",
    "Unidades 1 a 3 de cada sesión (75 niveles)": "Units 1 to 3 of each session (75 levels)",
    "50 unidades por curso (250 niveles)": "50 units per course (250 levels)",
    "Saludos, números, comida, viajes y compras": "Greetings, numbers, food, travel and shopping",
    "Rutina, trabajo, salud, pasado, planes y opiniones": "Routine, work, health, the past, plans and opinions",
    "Viajes con imprevistos, estudios, hábitos, consejos, trámites y condicionales": "Trips with surprises, studies, habits, advice, paperwork and conditionals",
    "Presentarte, saludar y pedir cosas básicas con frases muy sencillas.": "Introduce yourself, greet people and ask for basic things with very simple sentences.",
    "Hablar de tu rutina, tu entorno y tareas cotidianas con frases sencillas.": "Talk about your routine, your surroundings and everyday tasks with simple sentences.",
    "Desenvolverte en la mayoría de situaciones de un viaje, contar experiencias y explicar tus planes y opiniones.": "Handle most situations on a trip, tell experiences and explain your plans and opinions.",
    /* Mapa */
    "Sesión {5} de {6}": "Session {5} of {6}", "Dominio de la sesión:": "Session mastery:", "· Pruebas de unidad: {12}/{13}": "· Unit tests: {12}/{13}",
    "Plan Estándar": "Standard plan", "Unidades 1 a {1} de cada sesión y {2} vidas al día.": "Units 1 to {1} of each session and {2} lives a day.",
    "Unidad {0}": "Unit {0}", "Unidad {2}{3}": "Unit {2}{3}", "· Premium": "· Premium", "Situación": "Situation", "Situación · Gratis": "Situation · Free", "Gratis": "Free",
    "Prueba de sesión {2}": "Session test {2}", "Prueba de sesión {1}": "Session test {1}", "Prueba de sesión": "Session test", "Prueba de sesión.": "Session test.",
    "Aprueba con {0} % para pasar a {1} ({2}).": "Pass with {0}% to move on to {1} ({2}).",
    "Es la última sesión disponible. La siguiente llegará pronto.": "This is the last session available. The next one is coming soon.",
    "Ya puedes hacerla.": "You can take it now.", "Recomendado: completa antes las pruebas de unidad.": "Recommended: complete the unit tests first.", "Hacerla ya": "Take it now",
    "Sesión {1} bloqueada": "Session {1} locked", "Sesión": "Session",
    "Se desbloquea al aprobar la prueba de la sesión {2} ({3}). Si ya dominas ese nivel, puedes hacerla ahora y saltar.": "It unlocks when you pass the session {2} test ({3}). If you already know that level, you can take it now and skip ahead.",
    "Prueba {4}": "Test {4}",
    /* Cómo subes de nivel */
    "¿Cómo subes de nivel?": "How do you level up?", "Cómo subes de nivel": "How do you level up?",
    "Completa las unidades.": "Complete the units.", "Cada sesión tiene 10 unidades de 5 niveles. Las estrellas miden tus aciertos a la primera.": "Each session has 10 units of 5 levels. Stars measure your first-try correct answers.",
    "Dominio de la sesión.": "Session mastery.", "Es el porcentaje de estrellas que llevas. Cuanto más alto, más seguro estás.": "It is the percentage of stars you have earned. The higher it is, the surer you are.",
    "{1} preguntas de un solo intento. Con {2} aciertos ({3} %) pasas a la siguiente sesión. Si no, te decimos qué unidades repasar.": "{1} questions, one attempt each. With {2} correct ({3}%) you move to the next session. If not, we tell you which units to review.",
    "Tú decides.": "You decide.", "Puedes elegir tu nivel al empezar y saltar de sesión aprobando su prueba. No es un examen oficial, sino una guía.": "You can choose your level at the start and skip a session by passing its test. This is not an official exam, just a guide.",
    "De dónde sale esto": "Where this comes from", "El MCER define los niveles por lo que puedes": "The CEFR defines levels by what you can", "hacer": "do", ", no por un número de palabras.": ", not by a number of words.",
    "Consejo de Europa": "Council of Europe",
    "Horas de clase acumuladas orientativas: A1 90-100, A2 180-200, B1 350-400, B2 500-600.": "Approximate cumulative class hours: A1 90-100, A2 180-200, B1 350-400, B2 500-600.",
    "Cambridge English": "Cambridge English",
    "Vocabulario de referencia: A1 unas 650 palabras y B1 unas 2.400 (Goethe-Institut). En inglés, A2 1.500-2.500 y B1 2.750-3.250 (": "Reference vocabulary: A1 about 650 words and B1 about 2,400 (Goethe-Institut). In English, A2 1,500-2,500 and B1 2,750-3,250 (",
    "El umbral del 80 % viene del aprendizaje de dominio (Bloom). Es una pauta habitual, no un corte validado para vocabulario.": "The 80% threshold comes from mastery learning (Bloom). It is a common rule of thumb, not a validated cut-off for vocabulary.",
    "Rocco cubre una parte de cada nivel: úsala junto a lectura, series y conversación.": "Rocco covers part of each level: use it alongside reading, shows and conversation.",
    /* Prueba de sesión */
    "{2} preguntas de las unidades de {3}. Un solo intento por pregunta y sin vidas. Necesitas {4} aciertos ({5} %) para pasar a la siguiente sesión.": "{2} questions from the {3} units. One attempt per question and no lives. You need {4} correct ({5}%) to move to the next session.",
    "Si no la apruebas, te diremos qué unidades repasar. Puedes repetirla.": "If you do not pass, we will tell you which units to review. You can retake it.",
    "¡Sesión {1} superada!": "Session {1} passed!", "Subes a": "You move up to", "Has completado todas las sesiones disponibles. La siguiente llegará pronto.": "You have completed all available sessions. The next one is coming soon.",
    "Aciertos": "Correct answers", "Seguir aquí": "Stay here", "Ir a {0}": "Go to {0}", "Aún no, pero vas bien": "Not yet, but you are doing well",
    "{1} de {2} aciertos ({3} %). Necesitas {4}.": "{1} of {2} correct ({3}%). You need {4}.", "Te conviene repasar:": "You should review:", "Volver al mapa": "Back to the map", "Intentarlo otra vez": "Try again",
    "Prueba": "Test", "Prueba de la unidad": "Unit test",
    /* Situaciones */
    "Rompecabezas vivo: cambia el tono de la frase hasta que encaje. Después calma a un personaje con las piezas adecuadas.": "Living puzzle: change the tone of the sentence until it fits. Then calm a character down with the right pieces.",
    "Gratis para todos los planes.": "Free for all plans.", "El color es el tono": "Colour is tone",
    "Cada pieza tiene el color del registro con el que se dice. Elegir bien el tono cambia cómo te responde la gente.": "Each piece has the colour of the register it is said in. Choosing the right tone changes how people respond to you.",
    "Primero verás 4 frases que cambian al tocar un tono. Después, una escena para calmar a un personaje.": "First you will see 4 sentences that change when you tap a tone. Then, a scene to calm a character down.",
    "Esta unidad es Premium.": "This unit is Premium.", "Nivel bloqueado": "Level locked", "Completa el nivel anterior para desbloquear este.": "Complete the previous level to unlock this one.",
    "El audio es Premium. Haremos ejercicios de escritura.": "Audio is Premium. We will do writing exercises instead.", "El audio con voz natural es una función Premium.": "Natural-voice audio is a Premium feature.",
    "Escucha y une: toca el altavoz, oye la frase y búscale su significado.": "Listen and match: tap the speaker, hear the phrase and find its meaning.",
    "Después, una escena para calmar a un personaje.": "Then, a scene to calm a character down.",
    "Escucha y une": "Listen and match", "Escucha y une las palabras": "Listen and match the words", "Escucha y une las frases": "Listen and match the phrases", "Última ronda": "Last round",
    "Toca un altavoz para oír una palabra o una frase y búscale su significado. Al acertar, verás cómo se escribe.": "Tap a speaker to hear a word or phrase and find its meaning. When you get it right, you will see how it is written.",
    "Son 3 rondas cortas.": "There are 3 short rounds.", "Al final, una escena para calmar a un personaje.": "At the end, a scene to calm a character down.",
    "En la escena, cada pieza tiene el color del tono con el que se dice.": "In the scene, each piece has the colour of the tone it is said in.",
    "Toca un altavoz para oír la frase y luego su significado.": "Tap a speaker to hear the phrase, then its meaning.",
    "Copia de seguridad": "Backup", "Tu progreso": "Your progress", "Restaurar": "Restore", "Copiar código": "Copy code", "Descargar archivo": "Download file",
    "Se guarda solo en este navegador. Haz una copia para no perderlo o para pasarlo a otro dispositivo.": "It is saved only in this browser. Make a backup so you don't lose it or to move it to another device.",
    "Tu progreso se guarda solo en este navegador. Para llevarlo a otro dispositivo, copia este código y pégalo allí en «Restaurar».": "Your progress is saved only in this browser. To move it to another device, copy this code and paste it there under “Restore”.",
    "Pega aquí tu código": "Paste your code here", "Código copiado.": "Code copied.", "Selecciona el código y cópialo.": "Select the code and copy it.",
    "No se pudo descargar: copia el código.": "Download failed: copy the code instead.", "Ese código no es válido.": "That code is not valid.", "Progreso restaurado": "Progress restored",
    "Rompecabezas vivo": "Living puzzle", "Toca un tono hasta que la frase encaje.": "Tap a tone until the sentence fits.", "Significa: {4}": "Means: {4}",
    "Enojado": "Angry", "Tranquilo": "Calm", "Elige una pieza": "Choose a piece", "Esto lo calma": "This calms them", "Esto lo molesta": "This upsets them", "Ver resultado": "See result",
    "Ánimo final: {0}%. {1}": "Final mood: {0}%. {1}", "Ánimo": "Mood", "Has desactivado la situación con el tono adecuado.": "You defused the situation with the right tone.",
    "Aún sigue molesto. Prueba con otro tono.": "They are still upset. Try another tone.", "Aún no se ha calmado": "Not calm yet", "¡Lo has calmado!": "You calmed them down!",
    "Formal": "Formal", "Informal": "Informal", "Urgente": "Urgent", "Neutro": "Neutral",
    "Con jefes, desconocidos y personas mayores.": "With bosses, strangers and older people.", "Con amigos, familia y gente cercana.": "With friends, family and people close to you.",
    "Con prisa o enfado. Suena brusco.": "In a hurry or angry. Sounds abrupt.", "Sirve casi siempre.": "Works almost always.",
    /* Lecciones */
    "Palabras nuevas": "New words", "Frases útiles": "Useful phrases", "Práctica": "Practice", "Escucha y combina": "Listen and combine",
    "Vocabulario de la unidad y tus primeras frases en rompecabezas": "Unit vocabulary and your first sentences as puzzles",
    "Frases de la situación, paso a paso": "Situation phrases, step by step", "Completa, escribe y relaciona": "Complete, write and match",
    "Oído y escritura (audio con Premium)": "Listening and writing (audio with Premium)", "Demuestra todo lo aprendido": "Show everything you have learned",
    "Frases de la situación": "Situation phrases", "Dos frases para componer como un rompecabezas": "Two sentences to put together like a puzzle",
    "¿Salir de la lección?": "Quit the lesson?", "Perderás el progreso de esta lección.": "You will lose this lesson's progress.", "Salir": "Quit", "Piezas": "Pieces", "Tablero": "Board",
    "Racha x{1}": "Streak x{1}", "Arrastra las piezas al tablero, o tócalas.": "Drag the pieces to the board, or tap them.",
    "Puedes escribir en cirílico o con letras latinas (por ejemplo: {0}).": "You can type in Cyrillic or in Latin letters (for example: {0}).", "Escribe en {0}": "Type in {0}",
    "Elige la traducción": "Choose the translation", "¿Qué significa?": "What does it mean?", "Escribe lo que oyes": "Type what you hear", "Traduce esta frase": "Translate this sentence",
    "Traduce al {0}": "Translate into {0}", "Escribe la traducción": "Type the translation", "Completa la frase": "Complete the sentence", "Une cada pareja": "Match each pair",
    "Escucha y elige el significado": "Listen and choose the meaning", "Casi. Repasa estas parejas.": "Almost. Review these pairs.",
    "¡Muy bien!": "Very good!", "¡Correcto!": "Correct!", "¡Excelente!": "Excellent!", "¡Así se hace!": "That's the way!", "¡Perfecto!": "Perfect!",
    "Respuesta registrada": "Answer recorded", "Respuesta correcta": "Correct answer",
    "Repaso completado": "Review complete", "Unidad completada": "Unit complete", "Nivel completado": "Level complete", "Situación superada": "Situation passed",
    "Vocabulario de hoy repasado": "Today's vocabulary reviewed", "Categoría practicada": "Category practised", "Precisión": "Accuracy",
    "Has terminado la unidad {0}: {1}.": "You finished unit {0}: {1}.", "Has elegido el tono adecuado en la unidad {0}.": "You chose the right tone in unit {0}.",
    "{2} de {3} respuestas correctas a la primera. {4}": "{2} of {3} answers correct on the first try. {4}",
    "Te recomendamos: {1}": "We recommend: {1}", "Prefiero {5}": "I prefer {5}", "Empezar en {6}": "Start at {6}",
    "Dominas lo básico: empieza con rutina, trabajo, salud y planes.": "You know the basics: start with routine, work, health and plans.",
    "Empieza por lo esencial y sube de nivel cuando quieras.": "Start with the essentials and move up whenever you like.",
    "Te has quedado sin vidas": "You have run out of lives", "Con el plan Estándar tienes {1} vidas al día. Se recuperan mañana. Premium te da vidas ilimitadas.": "With the Standard plan you get {1} lives a day. They come back tomorrow. Premium gives you unlimited lives.",
    "Probar Premium": "Try Premium", "XP": "XP",
    /* Vocabulario */
    "Hoy": "Today", "Mis palabras": "My words", "Diccionario": "Dictionary", "Palabras de hoy": "Today's words", "{1} · {2} palabras{3}": "{1} · {2} words{3}", "(Premium: 10 al día)": "(Premium: 10 a day)",
    "Ya la sé": "I know it", "Marcar como aprendida": "Mark as learned", "Frase del día": "Phrase of the day", "Repasar otra vez": "Review again",
    "Practicar las palabras de hoy": "Practise today's words", "Ya repasaste el vocabulario de hoy.": "You already reviewed today's vocabulary.", "Buscar en mis palabras": "Search my words",
    "No hay resultados.": "No results.", "Aquí aparecerán las palabras y frases de los niveles que completes.": "The words and phrases of the levels you complete will appear here.",
    "Vocabulario de uso diario, fuera de las unidades. Explóralo libremente; practicar tiene un límite gratis.": "Everyday vocabulary, outside the units. Explore it freely; practice has a free limit.",
    "Categorías": "Categories", "Buscar una palabra, p. ej. cebolla": "Search for a word, e.g. onion", "{0} de {1} prácticas gratis hoy.": "{0} of {1} free practices today.",
    "Plan Estándar: {1}": "Standard plan: {1}", "Sin prácticas gratis hoy. Vuelven mañana.": "No free practices left today. They return tomorrow.",
    "Practicar esta categoría": "Practise this category", "Ver Premium": "See Premium", "Hoy ya usaste tus prácticas gratis del diccionario.": "You have already used today's free dictionary practices.",
    "palabras": "words", "{0} palabras": "{0} words",
    /* Repaso */
    "Repaso espaciado": "Spaced review", "Rocco guarda cada palabra con su propia fecha de repaso: acertar la aleja en el tiempo, fallar la trae de vuelta para hoy. Es una función Premium.": "Rocco keeps each word with its own review date: getting it right pushes it further away, getting it wrong brings it back today. This is a Premium feature.",
    "Pendientes hoy": "Due today", "En seguimiento": "Being tracked", "{1} listos para repasar en {2}.": "{1} ready to review in {2}.", "Tienes": "You have", "elemento": "item", "elementos": "items",
    "Practicar ahora": "Practise now", "Estás al día. El próximo repaso toca {1}.": "You are up to date. Your next review is {1}.",
    "Aquí aparecerán, con su propia fecha de repaso, las palabras y frases que vayas practicando por el mapa.": "The words and phrases you practise on the map will appear here, each with its own review date.",
    "hoy": "today", "mañana": "tomorrow", "en {0} días": "in {0} days",
    /* Perfil y planes */
    "Tu perfil": "Your profile", "Días de racha": "Day streak", "XP total": "Total XP", "Vidas hoy": "Lives today", "Niveles": "Levels", "Palabras vistas": "Words seen", "Sesiones superadas": "Sessions passed",
    "Mis cursos": "My courses", "Todavía no has completado ningún nivel.": "You have not completed any level yet.", "Gestionar plan": "Manage plan", "Mejorar a Premium": "Upgrade to Premium",
    "Idioma de la interfaz": "Interface language", "Voces generadas con": "Voices generated with", "Piper": "Piper", "CC BY 4.0": "CC BY 4.0",
    "Elige tu plan": "Choose your plan", "Estándar": "Standard", "Premium": "Premium", "Más completo": "Most complete", "/mes": "/month", "al año": "per year", "o 59,99 € al año": "or €59.99 per year",
    "1 curso de idioma a tu elección": "1 language course of your choice", "3 sesiones: A1, A2 y B1": "3 sessions: A1, A2 and B1", "Unidades 1 a 3 de cada sesión (45 niveles)": "Units 1 to 3 of each session (45 levels)",
    "5 vidas al día": "5 lives a day", "5 palabras del día": "5 words of the day", "Rompecabezas, escritura y parejas": "Puzzles, writing and matching",
    "Voz natural y ejercicios de escucha": "Natural voice and listening exercises", "Repaso de errores": "Mistake review", "Todos los idiomas y cualquier combinación": "All languages and any combination",
    "Tu plan actual": "Your current plan", "Volver a Estándar": "Back to Standard", "Todos los idiomas y cualquier combinación, cambia cuando quieras": "All languages and any combination, switch whenever you like",
    "30 unidades por curso (150 niveles)": "30 units per course (150 levels)", "Vidas ilimitadas": "Unlimited lives", "10 palabras del día": "10 words of the day", "Voz natural en todas las frases": "Natural voice on every sentence",
    "Ejercicios de escucha": "Listening exercises", "Repaso inteligente de errores": "Smart mistake review", "Hazte Premium": "Go Premium", "Pago de demostración": "Demo payment",
    "No se cobra nada ni se guardan datos de tarjeta. Para cobrar de verdad hay que conectar un procesador de pagos.": "Nothing is charged and no card details are stored. To charge for real, a payment processor must be connected.",
    "Activar Premium": "Activate Premium",
    "El mesero": "The waiter",
    "Rocco te acompaña": "Rocco keeps you company", "Aparece a veces en el mapa con comentarios y pequeñas animaciones. Puedes desactivarlo.": "He sometimes shows up on the map with comments and little animations. You can turn him off.",
    "Activado": "On", "Desactivado": "Off",
    "Estilo de las piezas": "Piece style", "Clásico": "Classic", "Caramelos": "Candy", "Mándala": "Mandala", "Burbujas de agua": "Water bubbles", "Barras de chocolate": "Chocolate bars", "Algodón de azúcar": "Cotton candy", "Píxeles": "Pixels", "Tela cosida": "Stitched fabric", "Entradas de cine": "Cinema tickets",
    "El estilo Clásico es gratis; los demás son Premium.": "The Classic style is free; the others are Premium.",
    "Los estilos de piezas son una función Premium.": "Piece styles are a Premium feature.",
    "Saludar y preguntar cómo está": "Greeting and asking how someone is",
    "Saludas a tu jefa por la mañana.": "You greet your boss in the morning.",
    "Saludas a tu mejor amigo.": "You greet your best friend.",
    "Despedirse": "Saying goodbye",
    "Te despides de un cliente importante.": "You say goodbye to an important client.",
    "Te despides de tus compañeros de casa.": "You say goodbye to your housemates.",
    "Dar las gracias": "Saying thank you",
    "Das las gracias a un médico.": "You thank a doctor.",
    "Das las gracias a tu hermana.": "You thank your sister.",
    "Pedir la cuenta": "Asking for the bill",
    "Pides la cuenta en un restaurante elegante.": "You ask for the bill in an elegant restaurant.",
    "Pides la cuenta en el bar con tus amigos.": "You ask for the bill at the bar with your friends.",
    "Pedir un café": "Ordering a coffee",
    "Pides un café a un mesero que no conoces.": "You order a coffee from a waiter you do not know.",
    "Pides un café en tu bar de siempre.": "You order a coffee at your usual café.",
    "Elogiar la comida": "Praising the food",
    "Felicitas al chef de un restaurante elegante.": "You congratulate the chef of an elegant restaurant.",
    "Le dices a tu amigo que cocinó muy bien.": "You tell your friend they cooked very well.",
    "Llegas tarde": "You are late",
    "Has llegado 30 minutos tarde a una cita con Ana y está enojada. Calma la situación con el tono adecuado.": "You arrived 30 minutes late to meet Ana and she is angry. Calm things down with the right tone.",
    "Pedir perdón con calidez y por su nombre calma a una amiga.": "Apologising warmly and by name calms a friend.",
    "Presionar a alguien enojada la irrita más.": "Pushing someone who is angry irritates her more.",
    "Es correcto, pero demasiado frío para una amiga.": "It is correct, but too cold for a friend.",
    "Reconocer el error sin excusas es lo que más calma.": "Admitting the mistake without excuses calms things most.",
    "Quitarle importancia a su enojo lo empeora.": "Playing down her anger makes it worse.",
    "Suena a trato de oficina, no a amistad.": "It sounds like office talk, not friendship.",
    "Un gesto cercano para compensar cierra bien la pelea.": "A friendly gesture to make up for it ends the quarrel well.",
    "Es una propuesta correcta, pero sin gesto personal.": "It is a fair offer, but with no personal touch.",
    "Dar órdenes justo ahora rompe el buen ambiente.": "Giving orders right now ruins the mood.",
    "El mesero agobiado": "The stressed waiter",
    "El restaurante está lleno y el mesero va con prisa y de mal humor. Tranquilízalo con el tono adecuado.": "The restaurant is full and the waiter is rushed and in a bad mood. Calm him down with the right tone.",
    "Un trato respetuoso le da espacio y baja la tensión.": "Respectful treatment gives him space and lowers the tension.",
    "Reclamar a gritos a alguien estresado lo enoja más.": "Shouting complaints at someone stressed makes him angrier.",
    "Es amable, pero con un desconocido suena demasiado confiado.": "It is kind, but with a stranger it sounds overly familiar.",
    "Pedir con cortesía es lo esperado en un restaurante.": "Asking politely is what is expected in a restaurant.",
    "Es cordial y claro, aunque algo informal.": "It is friendly and clear, although a bit informal.",
    "Dar órdenes con prisa suena maleducado.": "Giving orders in a rush sounds rude.",
    "Breve y cortés: justo lo que pide la situación.": "Short and polite: exactly what the situation calls for.",
    "Es educado y le quita trabajo.": "It is polite and takes work off his plate.",
    "Presionar al final deja mal sabor de boca.": "Pushing at the end leaves a bad taste.",
    ". Francés: «Siwis French Speech Synthesis Database», Universidad de Edimburgo —": ". French: «Siwis French Speech Synthesis Database», University of Edinburgh —",
    ". Italiano: «serena-synthetic-it-27h», committa —": ". Italian: «serena-synthetic-it-27h», committa —",
    ". Español: voz «claude» (es_MX) de rhasspy/piper-voices — Apache-2.0. Rumano: Google Cloud Text-to-Speech (voz Chirp 3 HD).": ". Spanish: voice «claude» (es_MX) from rhasspy/piper-voices — Apache-2.0. Romanian: Google Cloud Text-to-Speech (Chirp 3 HD voice)."
  };
  Object.assign(EN, window.EN_EXTRA || {}); /* textos de situaciones añadidos en data14.js y data15.js */

  /* Compilación: sin huecos -> búsqueda exacta; con huecos -> expresión regular. Se ignoran huecos al principio o al final (suelen ser iconos). */
  const strip = s => s.replace(/^(\{\d+\}\s*)+|(\s*\{\d+\})+$/g, "").trim();
  const exact = new Map(), pats = [];
  const addPat = (k, v) => {
    const labels = [];
    const re = new RegExp("^" + k.replace(/[.*+?^$()|[\]\\]/g, "\\$&").replace(/\\?\{(\d+)\\?\}/g, (m, n) => { labels.push(n); return "(.+?)"; }) + "$");
    pats.push({ re, labels, en: v, weight: k.replace(/\{\d+\}/g, "").length });
  };
  for (const [es, en] of Object.entries(EN)) {
    const full = es.trim(), k = strip(es), v = strip(en);
    if (!/\{\d+\}/.test(full)) { exact.set(full, en); continue; }
    addPat(full, en);                       // el hueco es texto: "Significa: {4}"
    if (k !== full && k) { if (/\{\d+\}/.test(k)) addPat(k, v); else exact.set(k, v); } // el hueco era un icono: queda "Hacer la prueba"
  }
  pats.sort((a, b) => b.weight - a.weight);

  const name = s => NAMES[s.toLowerCase()] || null;
  const tr1 = core => {
    if (exact.has(core)) return exact.get(core);
    const n = name(core); if (n) return n;
    for (const p of pats) {
      const m = core.match(p.re); if (!m) continue;
      const g = {}; p.labels.forEach((l, i) => { g[l] = tr(m[i + 1]); });
      return p.en.replace(/\{(\d+)\}/g, (x, l) => (l in g ? g[l] : ""));
    }
    return null;
  };
  /* Traduce una cadena (conserva espacios de los extremos). Prueba entera y, si no, por trozos separados por " · ". */
  function tr(s) {
    const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/); const core = m[2].replace(/\s+/g, " ");
    if (!core) return s;
    let r = tr1(core);
    if (r == null && core.includes(" · ")) { const parts = core.split(" · ").map(p => tr1(p) ?? p); r = parts.join(" · "); if (r === core) r = null; }
    return r == null ? s : m[1] + r + m[3];
  }

  const ATTRS = ["aria-label", "title", "placeholder", "alt"];
  let busy = false, obs = null;
  function node(n) {
    if (n.nodeType === 3) { const v = n.nodeValue, t = tr(v); if (t !== v) n.nodeValue = t; return; }
    if (n.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(n.tagName) || n.hasAttribute("data-notr")) return;
    for (const a of ATTRS) { const v = n.getAttribute(a); if (v) { const t = tr(v); if (t !== v) n.setAttribute(a, t); } }
    n.childNodes.forEach(node);
  }
  function run(records) {
    if (busy) return; busy = true;
    try {
      if (window.uiLang && uiLang() === "en") {
        if (!records) node(document.body);
        else for (const r of records) {
          if (r.type === "childList") r.addedNodes.forEach(node);
          else if (r.type === "characterData") node(r.target);
          else if (r.type === "attributes") node(r.target);
        }
        if (document.title !== "Rocco — Learn languages" && /Aprende/.test(document.title)) document.title = tr(document.title);
      }
    } finally { busy = false; if (obs) obs.takeRecords(); }
  }
  function start() {
    obs = new MutationObserver(run);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    run();
  }
  window.I18N = { tr, refresh: () => run(), size: Object.keys(EN).length, coverage: tr1 };
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
