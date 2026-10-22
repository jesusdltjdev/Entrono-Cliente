/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
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
  parrafo = document.createElement("p");
  nParrafos = document.querySelector("#contenido").children.length;
  parrafo.textContent = "Párrafo nuevo " + nParrafos;
  document.getElementById("contenido").append(parrafo);
  console.log("Se ha añadido el párafo");
}

function eliminarUltimo() {
  const contenido = document.getElementById("contenido");
  if (contenido.lastElementChild !== null) {
    contenido.removeChild(contenido.lastElementChild);
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
  let valor = nuevoTexto.value;
  const error4 = document.getElementById("error4");

  if (valor === "") {
    error4.classList.remove("d-none");
    console.log("El contenido esta vacio no se ha añadido");
  } else {
    error4.classList.add("d-none");
    document.querySelector("#contenido p").textContent = valor.trim();
    console.log("El contenido se ha añadido");
  }
}

function cambiarConHtml() {
  const nuevoTexto = document.querySelector("#nuevoTexto");
  let valor = nuevoTexto.value;
  const error4 = document.getElementById("error4");

  if (valor === "") {
    error4.classList.remove("d-none");
    console.log("El contenido esta vacio no se ha añadido");
  } else {
    error4.classList.add("d-none");
    document.querySelector("#contenido p").innerHTML = valor.trim();
    console.log("El contenido se ha añadido con innerHTML");
  }
}

// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  // TODO: lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  // TODO: si no, crea un <li class="list-group-item"> con dos elementos dentro:
  //         · un <input> de tipo "checkbox" con la clase "form-check-input",
  //         · un <span> con el texto de la tarea (textContent).
  //       Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
  // TODO: actualiza #totalTareas con el número de <li> que hay en la lista.
}

function borrarCompletadas() {
  // TODO: selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  // TODO: si no hay ninguna, avisa en #error5. Si hay, recórrelas con for…of y borra el <li> de cada una
  //       (el <li> es el padre de la casilla: parentElement).
  // TODO: actualiza #totalTareas.
}

// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
