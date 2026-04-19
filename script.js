const nombre = localStorage.getItem("nombre") || "Invitado";
const bienvenida = document.getElementById("bienvenida");
const examenForm = document.getElementById("examenForm");

bienvenida.innerHTML = `👋 ${nombre}, empieza el examen... 🧠`;

// 📚 Preguntas
const preguntas = [
  {
    texto: "¿Cuál es mi nombre completo? (Tal y como indica mi DNI)",
    opciones: ["Juan José Martínez Miranda", "Juanjo Rodríguez Pérez", "Juan José Sánchez Martínez", "José Juan Fernández García"],
    correcta: "Juan José Martínez Miranda"
  },
  {
    texto: "¿Cuál es mi artista favorito?",
    opciones: ["Pablo Alborán", "Álvaro de Luna", "Walls", "Funambulista"],
    correcta: "Álvaro de Luna"
  },
  {
    texto: "Comida favorita",
    opciones: ["Pizza carbonara", "Patatas al ajo cabañil", "Lentejas de mi madre", "Tarta de la madre de Alejandra"],
    correcta: "Patatas al ajo cabañil"
  },
  {
    texto: "Serie favorita",
    opciones: ["Wanda Vision", "It welcome to derry", "La que se avecina", "Agatha All Along"],
    correcta: "Agatha All Along"
  },
  {
    texto: "Deportes favoritos",
    opciones: ["Futbol y Padel", "Baloncesto y Ajedrez", "Tenis y Escalada", "Natación y Golf"],
    correcta: "Baloncesto y Ajedrez"
  },
  {
    texto: "Total de tatuajes en mi cuerpo (contando el del brazo como uno entero)",
    opciones: ["2", "4", "5", "8"],
    correcta: "4"
  },
  {
    texto: "¿Qué quería ser de pequeño?",
    opciones: ["Probador de colchones", "Como mi padre, obrero", "Creador de videojuegos", "Profesor"],
    correcta: "Creador de videojuegos"
  },
  {
    texto: "Mi juego de mesa favorito es:",
    opciones: ["Cluedo", "Catan", "Codigo Secreto", "Uno"],
    correcta: "Cluedo"
  },
  {
    texto: "Solo he tenido una mascota en mi vida, ¿cuál ha sido?",
    opciones: ["Perro", "Gato", "Conejo", "Pez"],
    correcta: "Pez"
  },
  {
    texto: "Mitología preferida",
    opciones: ["Griega", "Nórdica", "Egipcia", "Mexicana"],
    correcta: "Egipcia"
  },
  {
    texto: "Saga favorita",
    opciones: ["Harry Potter", "Los power rangers", "Star Wars", "Assassin's creed"],
    correcta: "Assassin's creed"
  },
  {
    texto: "Ciudad favorita",
    opciones: ["Madrid", "Budapest", "París", "Londres"],
    correcta: "Londres"
  },
  {
    texto: "Color favorito",
    opciones: ["Azul cielo", "Turquesa", "Cian", "Verde azulado"],
    correcta: "Verde azulado"
  },
  {
    texto: "Edad primer beso",
    opciones: ["13", "14", "15", "Aún no"],
    correcta: "14"
  },
  {
    texto: "Pokémon favorito",
    opciones: ["Chimchar", "Charizard", "Chandelure", "Gengar"],
    correcta: "Gengar"
  },
  {
    texto: "¿A qué me dedico?",
    opciones: ["Programador web", "Diseñador gráfico", "Youtuber", "Panadero"],
    correcta: "Programador web"
  },
  {
    texto: "Cuántas veces me han operado",
    opciones: ["1", "2", "3", "Ninguna"],
    correcta: "1"
  },
  {
    texto: "¿Tengo alguna mancha de nacimiento? (Si sabes donde cuenta doble.)",
    opciones: ["Sí", "No tengo"],
    correcta: "Sí"
  },
  {
    texto: "Animal favorito",
    opciones: ["Serpiente", "Jirafa", "Panda", "Ornitorrinco"],
    correcta: "Jirafa"
  },
  {
    texto: "¿Sabor de helado preferido?",
    opciones: ["Chocolate", "Vainilla", "Fresa", "Menta-Choco"],
    correcta: "Menta-Choco"
  },
  {
    texto: "Si no me hubiera llamado Juanjo, ¿qué nombre hubiera sido?",
    opciones: ["Antonio", "Javier", "Raul", "Alejandro"],
    correcta: "Raul"
  },
  {
    texto: "Cuántos años me llevo con mi hermana mayor",
    opciones: ["4", "8", "10", "11"],
    correcta: "11"
  },
  {
    texto: "¿A qué tengo alergias?",
    opciones: ["Penicilina", "Nolotil", "Cefalosporinas y Quinolonas", "Pelo de gatos"],
    correcta: "Cefalosporinas y Quinolonas"
  },
  {
    texto: "El primer coche que conduje legalmente",
    opciones: ["Ford Fiesta", "Nissan Almera", "Seat Ibiza", "Volkswagen Golf"],
    correcta: "Nissan Almera"
  },
  {
    texto: "¿Cuántas horas pasó mi madre de parto?",
    opciones: ["17 horas", "8 horas", "16 horas", "24 horas"],
    correcta: "17 horas"
  },
  {
    texto: "Actor y actriz favoritos",
    opciones: ["Tom Holland y Elizabeth Olsen", "Chris Hemsworth y Elsa Pataky", "Robert Downey Jr. y Scarlett Johansson", "Manu Rios y Blanca Suarez"],
    correcta: "Tom Holland y Elizabeth Olsen"
  },
  {
    texto: "Personaje animado favorito de la infancia",
    opciones: ["Sportacus", "Ulrich Stern", "Scooby-Doo", "Ash Ketchum"],
    correcta: "Ulrich Stern"
  },
  {
    texto: "¿Cuál es mi mayor miedo?",
    opciones: ["Las arañas", "La oscuridad", "Las alturas", "La soledad"],
    correcta: "La soledad"
  },
  {
    texto: "Nombre de mi primera novia",
    opciones: ["María", "Laura", "Mónica", "Lucia"],
    correcta: "Mónica"
  },
  {
    texto: "Mi mezcla alcohólica favorita",
    opciones: ["Mojito", "Piña Colada", "Ginebra + 7Up", "Jarra de jaleo Perry"],
    correcta: "Ginebra + 7Up"
  },
  {
    texto: "¿Cuál es mi bebida NO alcohólica favorita?",
    opciones: ["Coca-Cola", "Aquarius", "Agua fría", "7 UP"],
    correcta: "7 UP"
  },
  {
    texto: "¿Solo me pongo una alarma para levantarme normalmente entrando a las 8:00, cuál es?",
    opciones: ["7:00", "7:30", "7:45", "7:58"],
    correcta: "7:58"
  },
  {
    texto: "¿A quién NO quiero ver ni en pintura?",
    opciones: ["A Pedro José (PJ)", "A Profesora Miriam de ingles", "A un usuario del trabajo a las 14:59", "A nadie (soy buena persona)"],
    correcta: "A Pedro José (PJ)"
  },
  {
    texto: "¿Antes de ser informático quería ser otra cosa?",
    opciones: ["Cocinero", "Fotógrafo", "Escritor", "Futbolista"],
    correcta: "Fotógrafo"
  },
  {
    texto: "Soy del...",
    opciones: ["Real Madrid", "Barcelona", "Real Murcia", "Atlético de Madrid"],
    correcta: "Real Madrid"
  },
  {
    texto: "¿Qué es lo que más me enfada?",
    opciones: ["Llegar tarde", "Que no me contesten", "La gente lenta", "Que me despierten pronto"],
    correcta: "Que no me contesten"
  },
  {
    texto: "¿Qué prefiero hacer un viernes por la noche?",
    opciones: ["Salir de fiesta", "Cena chill con amigos", "Película/serie en casa", "Jugar a videojuegos"],
    correcta: "Cena chill con amigos"
  },
  {
    texto: "¿Estación preferida?",
    opciones: ["Invierno", "Verano", "Primavera", "Otoño"],
    correcta: "Verano"
  },
  {
    texto: "¿Mi mayor nivel educativo alcanzado?",
    opciones: ["Secundaria", "Grado Medio", "Universidad", "Grado Superior"],
    correcta: "Grado Superior"
  },
  {
    texto: "¿Cuál es el nombre de mis padres?",
    opciones: ["Juan José y Dolores", "Pepe y Maria", "Juan Antonio y Josefa", "Jose y Cristina"],
    correcta: "Juan José y Dolores"
  }
];

// 🎯 Generar preguntas
preguntas.forEach((pregunta, index) => {
  const bloque = document.createElement("div");
  bloque.className = "question";

  const titulo = document.createElement("h3");
  titulo.textContent = `❓ ${index + 1}. ${pregunta.texto}`;
  bloque.appendChild(titulo);

  pregunta.opciones.forEach((opcion) => {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `pregunta${index}`;
    input.value = opcion;

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + opcion));

    bloque.appendChild(label);
  });

  examenForm.appendChild(bloque);
});

// 🧠 ENVIAR EXAMEN
examenForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let nota = 0;

  preguntas.forEach((pregunta, index) => {
    const seleccionada = document.querySelector(`input[name="pregunta${index}"]:checked`);

    if (seleccionada && seleccionada.value === pregunta.correcta) {
      nota++;
    }
  });

  const total = preguntas.length;

  // 🎯 Nota sobre 10 con redondeo bonito (4.75 → 4.8, 5.0 → 5)
  let notaSobre10 = Math.round((nota / total) * 10 * 10) / 10;

  localStorage.setItem("nota", nota);
  localStorage.setItem("total", total);
  localStorage.setItem("notaSobre10", notaSobre10);

  window.location.href = "nota.html";
});