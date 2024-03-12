( async () => {
    const idCancion = location.search.split('=')[1]
    const divMusic = document.getElementById(`music`)

    
    
    divMusic.innerHTML = `
      <div class="d-flex justify-content-center align-items-center">
         <img src="${datoCancion.img}" width="350" alt="Imagen de la canción">
      </div>
       <div class="my-3">
          <h3>Título de la Canción</h3>
          <p>${datoCancion.artista}</p>
          <p>Categoría de la Canción</p>
      </div>
    <audio controls>
    <source src="" 
    type="audio/mpeg">  
    </audio>
    `
}
)()