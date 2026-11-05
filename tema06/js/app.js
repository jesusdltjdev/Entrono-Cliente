/*
  Tarea 6 · DWEC · Jesús de la Torre
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Jesús",
  apellidos: "de la Torre",
  edad: 21,
  curso: "2.º DAW",
  presentarse: function () {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}.`;
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "mb-3");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${clave}: ${estudiante[clave]}`;
    ul.append(li);
  });

  const p = document.createElement("p");
  p.classList.add("fst-italic", "mb-0");
  p.textContent = estudiante.presentarse();

  salida.append(ul, p);
  console.log("Ejercicio 1: ver ficha:", estudiante);
}

function cumplirAnios() {
  estudiante.edad = estudiante.edad + 1;
  console.log("Ejercicio 1: cumplir años:", estudiante.edad);
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  console.log("Ejercicio 1: quitar curso:", estudiante);
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push:", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No quedan colores que quitar.");
    console.log("Ejercicio 2: intento de pop con lista vacía");
    return;
  }

  document.querySelector("#aviso2").classList.add("d-none");
  const sacado = colores.pop();
  mostrarColores();
  console.log("Ejercicio 2: pop color sacado:", sacado);
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No quedan colores que quitar.");
    console.log("Ejercicio 2: intento de shift con lista vacía");
    return;
  }

  document.querySelector("#aviso2").classList.add("d-none");
  const sacado = colores.shift();
  mostrarColores();
  console.log("Ejercicio 2: shift color sacado:", sacado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = `Mostrando todos los productos (${productos.length} en total).`;
  console.log("Ejercicio 3: mostrar todos los productos:", productos.length);
}

function ordenarPorPrecio() {
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("Ejercicio 3: productos ordenados por precio:", copia);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = `Productos de más de 50 €: hay ${caros.length}.`;
  console.log("Ejercicio 3: filtrar más de 50 €:", caros);
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (texto === "") {
    mensaje.textContent = "Escribe un término de búsqueda para buscar un producto.";
    console.log("Ejercicio 3: búsqueda vacía");
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    mensaje.textContent = `No se ha encontrado ningún producto que contenga «${texto}».`;
    pintarProductos([]);
    console.log("Ejercicio 3: producto no encontrado: undefined");
  } else {
    mensaje.textContent = `Resultado encontrado: «${encontrado.nombre}».`;
    pintarProductos([encontrado]);
    console.log("Ejercicio 3: producto encontrado:", encontrado);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Jesús de la Torre",
  notas: [],
  anadirNota: function (nota) {
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (acumulador, actual) {
      return acumulador + actual;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedor.append(badge);
  });

  const pMedia = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    pMedia.textContent = "Todavía no hay notas.";
  } else {
    pMedia.textContent = `Media de ${alumno.notas.length} notas: ${alumno.media().toFixed(2)}`;
  }
  console.log("Ejercicio 4: mostrar notas:", alumno.notas, "media:", alumno.media());
}

function anadirNota() {
  const input = document.querySelector("#nota");
  const valor = input.value.trim();
  const error = document.querySelector("#error4");

  if (valor === "") {
    error.textContent = "Debes escribir una nota antes de añadir.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: casilla vacia");
    return;
  }

  const notaNumero = Number(valor);
  const esValida = alumno.anadirNota(notaNumero);

  if (!esValida) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: nota no valida:", valor);
    return;
  }

  error.classList.add("d-none");
  input.value = "";
  mostrarNotas();
  console.log("Ejercicio 4: nota anadida con exito:", notaNumero);
}

function borrarNotas() {
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  mostrarNotas();
  console.log("Ejercicio 4: notas borradas");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const dobles = numeros.map(function (n) {
    return n * 2;
  });

  const linea1 = document.createElement("div");
  linea1.textContent = "Dobles (map): " + comoTexto(dobles);

  const linea2 = document.createElement("div");
  linea2.textContent = "Original: " + comoTexto(numeros);

  salida.append(linea1, linea2);
  console.log("Ejercicio 5: ver dobles:", dobles);
}

function verPares() {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });

  const linea1 = document.createElement("div");
  linea1.textContent = "Pares (filter): " + comoTexto(pares);

  const linea2 = document.createElement("div");
  linea2.textContent = "Original: " + comoTexto(numeros);

  salida.append(linea1, linea2);
  console.log("Ejercicio 5: ver pares:", pares);
}

function verSuma() {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const suma = numeros.reduce(function (acumulador, n) {
    return acumulador + n;
  }, 0);

  const linea1 = document.createElement("div");
  linea1.textContent = "Suma (reduce): " + suma;

  const linea2 = document.createElement("div");
  linea2.textContent = "Original: " + comoTexto(numeros);

  salida.append(linea1, linea2);
  console.log("Ejercicio 5: ver suma:", suma);
}

function verCadena() {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });

  const dobles = pares.map(function (n) {
    return n * 2;
  });

  const suma = dobles.reduce(function (acumulador, n) {
    return acumulador + n;
  }, 0);

  const linea1 = document.createElement("div");
  linea1.textContent = "1. filter - " + comoTexto(pares);

  const linea2 = document.createElement("div");
  linea2.textContent = "2. map - " + comoTexto(dobles);

  const linea3 = document.createElement("div");
  linea3.textContent = "3. reduce - " + suma;

  salida.append(linea1, linea2, linea3);
  console.log("Ejercicio 5: tres seguidos:", suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-light", "border", "text-dark", "me-1", "mb-1");
    badge.textContent = `${posicion} · ${ciudad}`;
    contenedor.append(badge);
  });
  console.log("Ejercicio 6: mostrar ciudades:", ciudades);
}

function verSlice() {
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  const trozo = ciudades.slice(2, 5);
  const linea1 = document.createElement("div");
  linea1.textContent = "slice(2, 5) devuelve " + comoTexto(trozo);

  const linea2 = document.createElement("div");
  linea2.textContent = "ciudades sigue teniendo " + ciudades.length + " elementos: no ha cambiado";

  salida.append(linea1, linea2);
  console.log("Ejercicio 6: ver slice:", trozo);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades. Pulsa «Restaurar» para volver a empezar.";
    console.log("Ejercicio 6: aviso, quedan menos de 3 ciudades");
    return;
  }

  const quitadas = ciudades.splice(2, 2);
  const linea1 = document.createElement("div");
  linea1.textContent = "splice(2, 2) devuelve " + comoTexto(quitadas);

  const linea2 = document.createElement("div");
  linea2.textContent = "ciudades ahora tiene " + ciudades.length + " elementos: sí ha cambiado";

  salida.append(linea1, linea2);
  mostrarCiudades();
  console.log("Ejercicio 6: hacer splice:", quitadas, "ciudades restantes:", ciudades);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  const salida = document.querySelector("#salida6");
  salida.textContent = "Ciudades restauradas al array original (" + ciudades.length + " elementos).";
  console.log("Ejercicio 6: restaurar ciudades:", ciudades);
}

function buscarCiudad() {
  const input = document.querySelector("#buscarCiudad");
  const valor = input.value.trim();
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  if (valor === "") {
    salida.textContent = "Escribe el nombre de una ciudad para buscar.";
    console.log("Ejercicio 6: busqueda vacia");
    return;
  }

  const esta = ciudades.includes(valor);
  const posicion = ciudades.indexOf(valor);

  const linea1 = document.createElement("div");
  linea1.textContent = `includes("${valor}") devuelve ${esta}`;

  const linea2 = document.createElement("div");
  linea2.textContent = `indexOf("${valor}") devuelve ${posicion}`;

  salida.append(linea1, linea2);
  console.log("Ejercicio 6: buscar ciudad:", valor, "includes:", esta, "indexOf:", posicion);
}

mostrarCiudades();
