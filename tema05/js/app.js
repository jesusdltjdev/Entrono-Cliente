/*
  Tarea 5 · DWEC · Jesús de la Torre Jiménez
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const tercero = document.querySelectorAll("#contenido p")[2];
  tercero.classList.add("text-danger");
  console.log("Se han aplicados los cambios en los 3 primeros párafos");
}

// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  let parrafo = document.createElement("p");
  let nParrafos = document.querySelector("#contenido").children.length;
  parrafo.textContent = "Párrafo nuevo " + nParrafos;
  document.getElementById("contenido").append(parrafo);
  console.log("Se ha añadido el párafo");
  document.getElementById("aviso2").classList.add("d-none");
}

function eliminarUltimo() {
  const contenido = document.getElementById("contenido");
  if (contenido.lastElementChild !== null) {
    contenido.lastElementChild.remove();
    console.log("Se ha eliminado el último párafo");
  } else {
    document.getElementById("aviso2").classList.remove("d-none");
    console.log("Se ha activado el aviso2, no hay mas párafos a borrar");
  }
}

// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log("Se ha activado el resaltado de párafos para " + parrafos.length);
}

// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const nuevoTexto = document.querySelector("#nuevoTexto");
  let valor = nuevoTexto.value.trim();
  const error4 = document.getElementById("error4");

  if (valor === "") {
    error4.classList.remove("d-none");
    console.log("El contenido esta vacio no se ha añadido");
  } else {
    error4.classList.add("d-none");
    document.querySelector("#contenido p").textContent = valor;
    console.log("El contenido se ha añadido");
  }
}

function cambiarConHtml() {
  const nuevoTexto = document.querySelector("#nuevoTexto");
  let valor = nuevoTexto.value.trim();
  const error4 = document.getElementById("error4");

  if (valor === "") {
    error4.classList.remove("d-none");
    console.log("El contenido está vacio no se ha añadido");
  } else {
    error4.classList.add("d-none");
    document.querySelector("#contenido p").innerHTML = valor;
    console.log("El contenido se ha añadido con innerHTML");
  }
}

// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const tareaInput = document.querySelector("#tareaInput");
  const valor = tareaInput.value.trim();
  const error5 = document.getElementById("error5");
  const listaTareas = document.getElementById("listaTareas");

  if (valor === "") {
    error5.classList.remove("d-none");
    error5.textContent = "No se puede añadir una tarea vacía";
    console.log("El contenido está vacío, no se ha añadido");
  } else {
    error5.classList.add("d-none");

    let lista = document.createElement("li");
    lista.classList.add("list-group-item");

    lista.innerHTML = `<input type="checkbox" class="form-check-input"> <span>${valor}</span>`;

    listaTareas.append(lista);
    tareaInput.value = "";
    console.log("La tarea se ha añadido correctamente");

    const totalTareasElement = document.getElementById("totalTareas");
    const numeroDeTareas = listaTareas.querySelectorAll("li").length;
    totalTareasElement.textContent = numeroDeTareas;
  }
}

function borrarCompletadas() {
  const tareasMarcadas = document.querySelectorAll(
    "#listaTareas input:checked",
  );
  const error5 = document.getElementById("error5");
  const listaTareas = document.getElementById("listaTareas");

  if (tareasMarcadas.length === 0) {
    error5.classList.remove("d-none");
    error5.textContent = "No hay tareas marcadas";
    console.log("No hay tareas marcadas para borrar");
  } else {
    for (const tarea of tareasMarcadas) {
      tarea.parentElement.remove();
    }
    const totalTareasElement = document.getElementById("totalTareas");
    const numeroDeTareas = listaTareas.querySelectorAll("li").length;
    totalTareasElement.textContent = numeroDeTareas;
    console.log("Se han eliminado las tareas marcadas");
  }
}

// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  const datoPunto = document.querySelector("#datoPunto");
  if (ancho < 576) {
    datoPunto.textContent = "xs (menor de 576)";
  } else if (ancho >= 576 && ancho < 768) {
    datoPunto.textContent = "sm (de 576 a 767)";
  } else if (ancho >= 768 && ancho < 992) {
    datoPunto.textContent = "md (de 768 a 991)";
  } else if (ancho >= 992 && ancho < 1200) {
    datoPunto.textContent = "lg (de 992 a 1199)";
  } else if (ancho >= 1200 && ancho < 1400) {
    datoPunto.textContent = "xl (de 1200 a 1399)";
  } else {
    datoPunto.textContent = "xxl (1400 o más)";
  }

  const anchoP = screen.width;
  const altoP = screen.height;
  document.querySelector("#datoPantalla").textContent =
    `${anchoP} × ${altoP} px`;

  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
}
