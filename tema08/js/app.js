/*
  Tarea 8 · DWEC · Jesús Enrique de la Torre Jiménez
  Formulario de inscripción.

  Cómo usar esta plantilla:
  · Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Los ejercicios 1 a 3 son HTML: el formulario se valida y se envía solo, sin JavaScript.
  · Desde el ejercicio 4, la validación la haces tú: añade novalidate al <form>.
  · Los errores se escriben debajo de cada campo con mostrarError(); nada de alert().
  · Como en el tema 7: flechas en los callbacks. Dentro de ellos, this NO es el formulario:
    usa e.target o la constante form.
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const form = document.querySelector("#inscripcion");


// ============================================================
// Mostrar y quitar los errores junto al campo
// Cada campo está en un <div class="mb-3"> con su <div class="invalid-feedback">
// ============================================================

// Ya está hecha: es el modelo
function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");                         // borde rojo de Bootstrap
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  aviso.textContent = mensaje;
  aviso.classList.add("d-block");                            // visible también en los radio
}

function quitarError(campo) {
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  if(campo.type === "radio"){
    const campoRadio = form.querySelectorAll(`[name="${campo.name}"]`)
    campoRadio.forEach((r) => r.classList.remove("is-invalid"));
  } else {campo.classList.remove("is-invalid"); }
  aviso.textContent = "";
  aviso.classList.remove("d-block");   
}


// ============================================================
// Ejercicio 4 · El mensaje de cada error
// ============================================================

// El texto de cada campo obligatorio cuando está vacío. La clave es el name (o el id, si no tiene name)
const OBLIGATORIOS = {
  nombre: "Escribe tu nombre y apellidos.",
  email: "Escribe tu email",
  email2: "Reescribe tu email",
  nacimiento: "Selecciona tu fecha de nacimiento",
  modalidad: "Selecciona una modalidad",
  taller: "Selecciona el taller",
  condiciones: "Acepta las condiciones"
};

function mensajeDe(campo) {
  const validez = campo.validity;
  let mensaje = "";

  if (validez.valueMissing) {
    mensaje = OBLIGATORIOS[campo.name || campo.id];
  } else if (validez.typeMismatch) {
    mensaje = "Escribe un correo electrónico válido.";
  } else if (validez.tooShort) {
    mensaje = `Escribe al menos ${campo.minLength} caracteres.`;
  } else if (validez.patternMismatch || validez.rangeUnderflow || validez.rangeOverflow) {
    mensaje = campo.title;
  } else if (validez.customError) {
    mensaje = campo.validationMessage;
  }

  return mensaje;
}


// ============================================================
// Ejercicio 4 · La validación al enviar
// Hasta que llegues a este ejercicio, deja la función vacía: el formulario se enviará solo
// ============================================================

form.addEventListener("submit", (e) => {
  e.preventDefault();
  comprobarCorreos();
  const campos = e.target.querySelectorAll("input, select, textarea");
  let primerError = null;

  campos.forEach((campo) => {
    if (campo.checkValidity()) {
      quitarError(campo);
    } else {
      mostrarError(campo, mensajeDe(campo));
      if (!primerError) {
        primerError = campo;
      }
    }
  });

  if (primerError) {
    primerError.focus();
    return;
  }

  e.target.submit();
});


// ============================================================
// Ejercicio 5 · Eventos de los campos
// ============================================================

const contador = document.querySelector("#contador");
const comentarios = document.querySelector("#comentarios");

comentarios.addEventListener("input", () => {
  contador.textContent = comentarios.value.length;
});

const nivel = document.querySelector("#nivel");
const valorNivel = document.querySelector("#valorNivel");

nivel.addEventListener("input", () => {
  valorNivel.textContent = nivel.value;
});

const email = document.querySelector("#email");
const email2 = document.querySelector("#email2");

function comprobarCorreos() {
  if (email2.value !== "" && email.value !== email2.value) {
    email2.setCustomValidity("Los dos correos no coinciden.");
  } else {
    email2.setCustomValidity("");
  }
}

email.addEventListener("input", () => {
  comprobarCorreos();
});

email2.addEventListener("input", () => {
  comprobarCorreos();
});



// TODO: que el error desaparezca en cuanto se corrige: a cada campo, un "input" que llame a quitarError()
//       si campo.checkValidity() ya es true.

// TODO: con el evento "reset" del formulario, quita los errores y vuelve a poner el contador a 0 y el nivel a 5.


// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

// TODO: con el evento "click" de #verResumen:
//       · const datos = new FormData(form);
//       · recórrelo con for (const [campo, valor] of datos) y pinta un <li class="list-group-item"> por par
//         en #resumen (createElement y textContent; si el valor está vacío, «(vacío)»);
//       · escribe en #avisoResumen cuántos datos hay y por qué falta «Repite el correo».
