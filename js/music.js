const divMusic = document.getElementById(`music`);
const cancionLocalStorage = JSON.parse(localStorage.getItem(`cancion`)) || [];

const idCancion = location.search.split("=")[1];

const cancionFiltrada = cancionLocalStorage.find((cancion) => {
  return cancion.id === Number(idCancion);
});

if (cancionFiltrada) {
  divMusic.innerHTML = `
    <div class="d-flex justify-content-center align-items-center">
      <img src="${cancionFiltrada.img}" width="150" alt="Imagen de la canción" class="rounded-circle img-music">
    </div>
    <div class="my-3">
      <h3 class=" d-flex justify-content-center align-items-center">${cancionFiltrada.nombre}</h3>
      <p class=" d-flex justify-content-center align-items-center">${cancionFiltrada.artista}</p>
    </div>
    <audio controls>
      <source src="/pages/Error404.html" type="audio/mpeg">  
    </audio>
  `;
} else {
  divMusic.innerHTML =
    "<p>No se encontró ninguna canción en el localStorage.</p>";
}
