const tablaCanciones = document.getElementById("tabla-canciones");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const formularioCancion = document.getElementById("formulario-cancion");
// Función para guardar las canciones en localStorage
function guardarCancionesEnLocalStorage() {
  localStorage.setItem("cancion", JSON.stringify(canciones));
}
// Función para cargar las canciones desde localStorage
function cargarCancionesDesdeLocalStorage() {
  const cancionesGuardadas = JSON.parse(localStorage.getItem("cancion"));
  if (cancionesGuardadas) {
    canciones.push(...cancionesGuardadas);
  }
}
// Cargar las canciones desde localStorage al cargar la página
window.addEventListener("load", () => {
  cargarCancionesDesdeLocalStorage();
});
// Función para agregar una nueva canción
function agregarCancion(nombre, artista, genero) {
  canciones.push({ nombre, artista, genero });
  cargarCanciones();
  guardarCancionesEnLocalStorage(); // Guardar en localStorage después de agregar
}
// Función para borrar una canción
function borrarCancion(index) {
  canciones.splice(index, 1);
  cargarCanciones();
  guardarCancionesEnLocalStorage(); // Guardar en localStorage después de borrar
}
// Función para editar una canción
function editarCancion(index) {
  // Código de edición...
  cargarCanciones();
  guardarCancionesEnLocalStorage(); // Guardar en localStorage después de editar
}
const otenerCancion = JSON.parse(localStorage.getItem(`cancion`)) || [];
// Ejemplo de datos de canciones
const canciones = [
  { nombre: "Canción 1", artista: "Artista 1", genero: "Género 1" },
  { nombre: "Canción 2", artista: "Artista 2", genero: "Género 2" },
  { nombre: "Canción 3", artista: "Artista 3", genero: "Género 3" },
  { nombre: "Canción 4", artista: "Artista 4", genero: "Género 4" },
];
// Función para cargar las canciones en la tabla
function cargarCanciones() {
  cuerpoTabla.innerHTML = "";
  canciones.forEach((cancion, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${cancion.nombre}</td>
      <td>${cancion.artista}</td>
      <td>${cancion.genero}</td>
      <td>
        <button onclick="editarCancion(${index})">Editar</button>
        <button onclick="borrarCancion(${index})">Borrar</button>
      </td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}
// Función para agregar una nueva canción
function agregarCancion(nombre, artista, genero) {
  canciones.push({ nombre, artista, genero });
  cargarCanciones();
}
// Función para borrar una canción
function borrarCancion(index) {
  canciones.splice(index, 1);
  cargarCanciones();
}
// Función para editar una canción
function editarCancion(index) {
  const cancion = canciones[index];
  const nuevoNombre = prompt("Ingrese el nuevo nombre", cancion.nombre);
  const nuevoArtista = prompt("Ingrese el nuevo artista", cancion.artista);
  const nuevoGenero = prompt("Ingrese el nuevo género", cancion.genero);
  if (nuevoNombre && nuevoArtista && nuevoGenero) {
    canciones[index] = {
      nombre: nuevoNombre,
      artista: nuevoArtista,
      genero: nuevoGenero,
    };
    cargarCanciones();
  }
}
// Manejador del evento submit del formulario
formularioCancion.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const artista = document.getElementById("artista").value;
  const genero = document.getElementById("genero").value;
  if (nombre && artista && genero) {
    agregarCancion(nombre, artista, genero);
    formularioCancion.reset();
  } else {
    alert("Por favor complete todos los campos.");
  }
});
// Cargar las canciones al cargar la página
window.addEventListener("load", cargarCanciones);







