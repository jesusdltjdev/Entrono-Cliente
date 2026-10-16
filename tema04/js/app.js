/*
  Tarea 4 · DWEC · Jesús Enrique de la Torre Jiménez
  Calculadora y bucles.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;

// ============================================================
// Función auxiliar refactorizada
// ============================================================

function leerValidarNumeros() {
  let n1 = leerNumero("numero1");
  let n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    const mensaje = "Escribe los dos números antes de operar.";
    mostrar(mensaje, "danger");
    console.warn(mensaje);

    n1 = NaN;
    n2 = NaN;
  }

  return { n1, n2 };
}

// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

function sumar() {
  const { n1, n2 } = leerValidarNumeros();

  if (!Number.isNaN(n1)) {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const { n1, n2 } = leerValidarNumeros();

  if (!Number.isNaN(n1)) {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const { n1, n2 } = leerValidarNumeros();

  if (!Number.isNaN(n1)) {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const { n1, n2 } = leerValidarNumeros();

  if (!Number.isNaN(n1)) {
    if (n2 === 0) {
      mostrar("El número 2 no puede ser igual a 0.", "danger");
      console.error("Dividir: el número 2 no puede ser igual a 0");
    } else {
      const resultado = n1 / n2;
      mostrar(`${n1} / ${n2} = ${resultado}`);
      console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
    }
  }
}

function potencia() {
  const { n1, n2 } = leerValidarNumeros();

  if (!Number.isNaN(n1)) {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Elevar: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const { n1, n2 } = leerValidarNumeros();

  if (!Number.isNaN(n1)) {
    if (n2 === 0) {
      mostrar("El número 2 no puede ser igual a 0.", "danger");
      console.error("Módulo: el número 2 no puede ser igual a 0");
    } else {
      const resultado = n1 % n2;
      mostrar(`${n1} % ${n2} = ${resultado}`);
      console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
    }
  }
}

// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
  const { n1, n2 } = leerValidarNumeros();
  if (!Number.isNaN(n1)) {
    let resultado = "";

    if (n1 > n2) {
      resultado = "es mayor que";
    } else if (n1 < n2) {
      resultado = "es menor que";
    } else {
      resultado = "es igual que";
    }

    mostrar(`${n1} ${resultado} ${n2}`);
    console.log(`Módulo: ${n1} ${resultado} ${n2}`);
  }
}

function parOImpar() {
  const { n1, n2 } = leerValidarNumeros();

  let resultado = n1 % 2 === 0 ? "par" : "impar";

  if (n1 % 1 !== 0) {
    resultado = "decimal, no es ni par ni impar";
  }

  mostrar(`El número ${n1} es ${resultado}`);
  console.log(`ParOImpar: El número ${n1} es ${resultado}`);
}

// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(n1) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    const mensaje = "El número 1 tiene que cumplir las condiciones";
    mostrar(mensaje, "danger");
    console.warn(mensaje);
  } else {
    let contador = 0;

    for (i = 0; i < veces; i++) {
      anadirLinea(`for · repetición ${i} de ${veces}`);
      contador++;
    }

    let palabraRepeticiones = veces === 1 ? "repeticion" : "repeticiones";

    mostrar(`Total: ${contador} ${palabraRepeticiones}`);
    console.log(`Total: ${contador} ${palabraRepeticiones}`);
  }
}

function bucleWhile() {
  // TODO: lo mismo que bucleFor(), con un while.
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
}

// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
}
