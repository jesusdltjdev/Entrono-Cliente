/*
  Tarea 8 · DWEC · Jesús Enrique de la Torre Jiménez
  recibido.html: lee lo que ha llegado por GET y lo pinta en la tabla.
  En una web real esto lo haría el servidor; aquí lo hacemos en el navegador para verlo.
*/

console.log("recibido.js cargado");

// location.search es la parte de la URL desde el ?, por ejemplo "?nombre=Luc%C3%ADa&taller=html"
console.log("Ha llegado:", location.search);

// URLSearchParams la separa en pares nombre → valor y decodifica las tildes y los espacios.
// El modelo: un dato suelto, por su name
const parametros = new URLSearchParams(location.search);
console.log("nombre =", parametros.get("nombre"));

const consulta = document.querySelector("#consulta"); 
const datos = document.querySelector("#datos"); 

const consultaUrl = location.search;
if (consultaUrl === "") {
  consulta.textContent = "(nada)";
  const error = document.createElement("div");
  error.classList.add("alert", "alert-warning");
  error.textContent = "No hay ningún dato";
  document.querySelector(".card-body").appendChild(error);
} else {
  consulta.textContent = consultaUrl;

  for (const [campo, valor] of parametros) {
    const fila = document.createElement("tr");
    const th = document.createElement("th");
    const columna = document.createElement("td");

    th.scope = "row";
    th.textContent = campo;
    columna.textContent = valor;

    fila.appendChild(th);
    fila.appendChild(columna);
    datos.appendChild(fila);
  }
}
