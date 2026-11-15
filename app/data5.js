/* Diccionario: palabras sueltas de uso diario, fuera de las unidades (ver exercises.js: dictItems, dictPractice).
   Español neutro. Contenido escrito a mano, pendiente de revisión por hablantes nativos. */
window.DICT_CATS = [
  { id: "food", name: "Frutas y verduras", icon: "apple",
    w: ["Papa", "Cebolla", "Tomate", "Zanahoria", "Ajo", "Fresa", "Plátano", "Limón", "Lechuga", "Durazno"] },
  { id: "animals", name: "Animales", icon: "paw",
    w: ["Perro", "Gato", "Caballo", "Vaca", "Cerdo", "Oveja", "Pájaro", "Pez", "Ratón", "León"] },
  { id: "colors", name: "Colores", icon: "palette",
    w: ["Rojo", "Azul", "Verde", "Amarillo", "Negro", "Blanco", "Gris", "Café", "Rosado", "Morado"] },
  { id: "body", name: "El cuerpo", icon: "user",
    w: ["Ojo", "Oreja", "Nariz", "Boca", "Diente", "Pelo", "Brazo", "Pierna", "Dedo", "Hombro"] },
  { id: "home", name: "En casa", icon: "home",
    w: ["Mesa", "Silla", "Sofá", "Espejo", "Lámpara", "Armario", "Almohada", "Toalla", "Escoba", "Estante"] },
  { id: "nature", name: "La naturaleza", icon: "leaf",
    w: ["Árbol", "Flor", "Río", "Montaña", "Lago", "Bosque", "Piedra", "Arena", "Cielo", "Estrella"] }
];

(() => {
  const T = {
    en: [
      ["Potato", "Onion", "Tomato", "Carrot", "Garlic", "Strawberry", "Banana", "Lemon", "Lettuce", "Peach"],
      ["Dog", "Cat", "Horse", "Cow", "Pig", "Sheep", "Bird", "Fish", "Mouse", "Lion"],
      ["Red", "Blue", "Green", "Yellow", "Black", "White", "Grey", "Brown", "Pink", "Purple"],
      ["Eye", "Ear", "Nose", "Mouth", "Tooth", "Hair", "Arm", "Leg", "Finger", "Shoulder"],
      ["Table", "Chair", "Sofa", "Mirror", "Lamp", "Wardrobe", "Pillow", "Towel", "Broom", "Shelf"],
      ["Tree", "Flower", "River", "Mountain", "Lake", "Forest", "Stone", "Sand", "Sky", "Star"]
    ],
    fr: [
      ["Pomme de terre", "Oignon", "Tomate", "Carotte", "Ail", "Fraise", "Banane", "Citron", "Laitue", "Pêche"],
      ["Chien", "Chat", "Cheval", "Vache", "Cochon", "Mouton", "Oiseau", "Poisson", "Souris", "Lion"],
      ["Rouge", "Bleu", "Vert", "Jaune", "Noir", "Blanc", "Gris", "Marron", "Rose", "Violet"],
      ["Œil", "Oreille", "Nez", "Bouche", "Dent", "Cheveux", "Bras", "Jambe", "Doigt", "Épaule"],
      ["Table", "Chaise", "Canapé", "Miroir", "Lampe", "Armoire", "Oreiller", "Serviette", "Balai", "Étagère"],
      ["Arbre", "Fleur", "Rivière", "Montagne", "Lac", "Forêt", "Pierre", "Sable", "Ciel", "Étoile"]
    ],
    de: [
      ["Kartoffel", "Zwiebel", "Tomate", "Karotte", "Knoblauch", "Erdbeere", "Banane", "Zitrone", "Salat", "Pfirsich"],
      ["Hund", "Katze", "Pferd", "Kuh", "Schwein", "Schaf", "Vogel", "Fisch", "Maus", "Löwe"],
      ["rot", "blau", "grün", "gelb", "schwarz", "weiß", "grau", "braun", "rosa", "lila"],
      ["Auge", "Ohr", "Nase", "Mund", "Zahn", "Haar", "Arm", "Bein", "Finger", "Schulter"],
      ["Tisch", "Stuhl", "Sofa", "Spiegel", "Lampe", "Schrank", "Kissen", "Handtuch", "Besen", "Regal"],
      ["Baum", "Blume", "Fluss", "Berg", "See", "Wald", "Stein", "Sand", "Himmel", "Stern"]
    ],
    it: [
      ["Patata", "Cipolla", "Pomodoro", "Carota", "Aglio", "Fragola", "Banana", "Limone", "Lattuga", "Pesca"],
      ["Cane", "Gatto", "Cavallo", "Mucca", "Maiale", "Pecora", "Uccello", "Pesce", "Topo", "Leone"],
      ["Rosso", "Blu", "Verde", "Giallo", "Nero", "Bianco", "Grigio", "Marrone", "Rosa", "Viola"],
      ["Occhio", "Orecchio", "Naso", "Bocca", "Dente", "Capelli", "Braccio", "Gamba", "Dito", "Spalla"],
      ["Tavolo", "Sedia", "Divano", "Specchio", "Lampada", "Armadio", "Cuscino", "Asciugamano", "Scopa", "Scaffale"],
      ["Albero", "Fiore", "Fiume", "Montagna", "Lago", "Bosco", "Pietra", "Sabbia", "Cielo", "Stella"]
    ],
    pt: [
      ["Batata", "Cebola", "Tomate", "Cenoura", "Alho", "Morango", "Banana", "Limão", "Alface", "Pêssego"],
      ["Cão", "Gato", "Cavalo", "Vaca", "Porco", "Ovelha", "Pássaro", "Peixe", "Rato", "Leão"],
      ["Vermelho", "Azul", "Verde", "Amarelo", "Preto", "Branco", "Cinzento", "Castanho", "Rosa", "Roxo"],
      ["Olho", "Orelha", "Nariz", "Boca", "Dente", "Cabelo", "Braço", "Perna", "Dedo", "Ombro"],
      ["Mesa", "Cadeira", "Sofá", "Espelho", "Candeeiro", "Armário", "Almofada", "Toalha", "Vassoura", "Prateleira"],
      ["Árvore", "Flor", "Rio", "Montanha", "Lago", "Floresta", "Pedra", "Areia", "Céu", "Estrela"]
    ],
    ru: [
      ["Картофель", "Лук", "Помидор", "Морковь", "Чеснок", "Клубника", "Банан", "Лимон", "Салат", "Персик"],
      ["Собака", "Кошка", "Лошадь", "Корова", "Свинья", "Овца", "Птица", "Рыба", "Мышь", "Лев"],
      ["Красный", "Синий", "Зелёный", "Жёлтый", "Чёрный", "Белый", "Серый", "Коричневый", "Розовый", "Фиолетовый"],
      ["Глаз", "Ухо", "Нос", "Рот", "Зуб", "Волосы", "Рука", "Нога", "Палец", "Плечо"],
      ["Стол", "Стул", "Диван", "Зеркало", "Лампа", "Шкаф", "Подушка", "Полотенце", "Метла", "Полка"],
      ["Дерево", "Цветок", "Река", "Гора", "Озеро", "Лес", "Камень", "Песок", "Небо", "Звезда"]
    ],
    ro: [
      ["Cartof", "Ceapă", "Roșie", "Morcov", "Usturoi", "Căpșună", "Banană", "Lămâie", "Salată", "Piersică"],
      ["Câine", "Pisică", "Cal", "Vacă", "Porc", "Oaie", "Pasăre", "Pește", "Șoarece", "Leu"],
      ["Roșu", "Albastru", "Verde", "Galben", "Negru", "Alb", "Gri", "Maro", "Roz", "Mov"],
      ["Ochi", "Ureche", "Nas", "Gură", "Dinte", "Păr", "Braț", "Picior", "Deget", "Umăr"],
      ["Masă", "Scaun", "Canapea", "Oglindă", "Lampă", "Dulap", "Pernă", "Prosop", "Mătură", "Raft"],
      ["Copac", "Floare", "Râu", "Munte", "Lac", "Pădure", "Piatră", "Nisip", "Cer", "Stea"]
    ]
  };
  for (const l in T) DICT_CATS.forEach((c, i) => { c.t = c.t || {}; c.t[l] = T[l][i]; });
})();
