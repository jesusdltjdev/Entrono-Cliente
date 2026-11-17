/*
  Tarea 8 · DWEC · Jesús Enrique de la Torre Jiménez
  Formulario de inscripción: validación con JavaScript, eventos de los campos y resumen con FormData.
*/

console.log("app.js cargado");

const form = document.querySelector("#inscripcion");


// ============================================================
// Mostrar y quitar los errores junto al campo
// Cada campo está en un <div class="mb-3"> con su <div class="invalid-feedback">
// ============================================================

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
// ============================================================

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit: empiezo a validar");
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
    console.log(`Hay errores. El primero está en: ${primerError.id}`);
    primerError.focus();
    return;
  }

  console.log("Todo correcto: envío el formulario por GET");
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
    console.log("Los correos no coinciden");
  } else {
    email2.setCustomValidity("");
  }
}

email.addEventListener("input", () => {
  comprobarCorreos();
  // Al corregir el primer correo, el error de "Repite el correo" debe desaparecer si ya coinciden
  if (email2.checkValidity()) {
    quitarError(email2);
  }
});

email2.addEventListener("input", () => {
  comprobarCorreos();
});

form.querySelectorAll("input, select, textarea").forEach((campo) => {
  campo.addEventListener("input", () => {
    if (campo.checkValidity()) {
      quitarError(campo);
    }
  });
});


form.addEventListener("reset", () => {
  console.log("Reset: quito errores y vuelvo a poner contador y nivel");
  email2.setCustomValidity("");
  form.querySelectorAll("input, select, textarea").forEach((campo) => {
    quitarError(campo);
  });
  contador.textContent = "0";
  valorNivel.textContent = "5";
});

// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

const verResumen = document.querySelector("#verResumen");
const avisoResumen = document.querySelector("#avisoResumen");
const resumen = document.querySelector("#resumen");

verResumen.addEventListener("click", () => {
  const datos = new FormData(form);
  let total = 0;

  // Vaciamos la lista para no duplicar datos en cada click
  resumen.replaceChildren();

  for (const [campo, valor] of datos) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${campo}: ${valor === "" ? "(vacío)" : valor}`;
    resumen.appendChild(li);
    total++;
  }

  console.log(`Resumen: ${total} datos`);
  avisoResumen.textContent = `Hay ${total} datos. «Repite el correo» no aparece porque su campo no tiene name.`;
});
