console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");

// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  const edad = 20;
  const nombre = "Jesus";
  let estado = false;
  let modeloCoche = null;
  let dni = undefined;
  const nPersonas = 9012398254740991n;

  console.log("edad =", edad, "→", typeof edad);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("estado =", estado, "→", typeof estado);
  console.log("modeloCoche =", modeloCoche, "→", typeof modeloCoche);
  console.log("dni =", dni, "→", typeof dni);
  console.log("nPersonas =", nPersonas, "→", typeof nPersonas);
}

// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const a = String(123);
  console.log("String(123) →", a, typeof a);

  const b = Number("123");
  console.log('Number("123") →', b, typeof b);

  const c = Number("12abc");
  console.log('Number("12abc") →', c, typeof c);

  const d = Number("");
  console.log('Number("") →', d, typeof d);

  const e = Number(true);
  console.log("Number(true) →", e, typeof e);

  const f = Boolean(0);
  console.log("Boolean(0) →", f, typeof f);

  const g = Boolean("texto");
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean("");
  console.log('Boolean("") →', h, typeof h);
}

// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  console.log('"5" - 2 →', "5" - 2);

  // Cinco expresiones más que mezclen tipos (al menos dos inventadas)
  console.log('"5" + 2 →', "5" + 2);
  console.log("true + 1 →", true + 1);
  console.log("null + 5 →", null + 5);
  console.log("undefined + 1 →", undefined + 1);
  console.log('"10" * "2" →', "10" * "2");

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");
  console.log('5 === "5" →', 5 === "5");

  // Comparaciones con 0 y false, y con null y undefined
  console.log("0 == false →", 0 == false);
  console.log("0 === false →", 0 === false);
  console.log("null == undefined →", null == undefined);
  console.log("null === undefined →", null === undefined);
}

// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "Jesus";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2º";
  const aficion = "correr";

  // Un dato que cambia, con let
  let horasEstudio = 2;
  horasEstudio += 5;

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}. Estudio ${ciclo} en ${curso} curso. Mi afición es ${aficion} y esta semana he estudiado ${horasEstudio} horas.`;
  alert(ficha);
  console.log("Ficha con plantilla:", ficha);

  const fichaConMas =
    "Soy " +
    nombre +
    ". Estudio " +
    ciclo +
    " en " +
    curso +
    " curso. Mi afición es " +
    aficion +
    " y esta semana he estudiado " +
    horasEstudio +
    " horas.";
  console.log("Ficha concatenada con +:", fichaConMas);
  console.log(ficha === fichaConMas);
}
