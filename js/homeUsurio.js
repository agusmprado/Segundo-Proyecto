const divProductos = document.getElementById('divProductos')
const divPlaylist = document.getElementById(`Playlist`)
const divPlaylist2 = document.getElementById(`Playlist2`)
const divMusicusicReciente = document.getElementById(`musicReciente`)

const productos = [
  {img:`../imagenHomeUsuario/peso-pluma.webp` , nombre: `Peso Pluma`},
  {img:`../imagenHomeUsuario/fuerza-Regional.webp` , nombre: `Fuerza Regional`},
  {img:`../imagenHomeUsuario/mal-conejito.webp` , nombre: `Bad Bunny`},
  {img:`../imagenHomeUsuario/juniorH.webp` , nombre: `Junior H`},
  {img:`../imagenHomeUsuario/karolG.webp` , nombre: `Karol G`},
  {img:`../imagenHomeUsuario/natanaelCano.webp` , nombre: `Natanael Cano`}
];

divProductos.innerHTML = productos.map((producto) => `
  <div class='col-12 col-md-4 col-lg-2'>
    <div class= "d-flex justify-content-center align-content-center">
    <div class="card-dark">
    <img src="${producto.img}" class="rounded-circle " alt="...">
    <h3 class="d-flex justify-content-center align-content-center my-3 text-white">${producto.nombre}</h3>
    </div>
    </div>
 </div>
`).join('')

const Playlist = [
    {img: `../imagenHomeUsuario/7 - copia.webp`},
    {img: `../imagenHomeUsuario/8 - copia.webp`},
    {img: `../imagenHomeUsuario/9.webp`},
    {img: `../imagenHomeUsuario/10.webp`},
    {img: `../imagenHomeUsuario/11.webp`},
    {img: `../imagenHomeUsuario/12.webp`},
]

divPlaylist.innerHTML = Playlist.map((cancion) => `
  <div class='col-12 col-md-4 col-lg-2 my-3'>
     <div class="card-dark cardCancio">
       <img src="${cancion.img}" class="img-fluid" alt="...">
     </div>
 </div>
`).join(``)

const Playlist2 = [
  {img: `../imagenHomeUsuario/1 - copia.webp`},
  {img: `../imagenHomeUsuario/2 - copia.webp`},
  {img: `../imagenHomeUsuario/3.webp`},
  {img: `../imagenHomeUsuario/4.webp`},
  {img: `../imagenHomeUsuario/5.webp`},
  {img: `../imagenHomeUsuario/6.webp`},
]

divPlaylist2.innerHTML = Playlist.map((cancion) => `
<div class='col-12 col-md-4 col-lg-2 my-3'>
   <div class="card-dark">
     <img src="${cancion.img}" class="img-fluid" alt="...">
   </div>
</div>
`).join(``)

const musica =[
  {img: `../imagenHomeUsuario/mr1.webp`, nombre:`La Diabla`, artista: `Xavi`, id:1},
  {img: `../imagenHomeUsuario/mr3.webp`, nombre:``, artista: ``, id:3},
  {img: `../imagenHomeUsuario/mr2.webp`, nombre:``, artista: ``, id:2},
  {img: `../imagenHomeUsuario/mr4.webp`, nombre:``, artista: ``, id:4},
  {img: `../imagenHomeUsuario/mr5.webp`, nombre:``, artista: ``, id:5},
  {img: `../imagenHomeUsuario/mr6.webp`, nombre:``, artista: ``, id:6}

]

divMusicusicReciente.innerHTML= musica.map((cancion) => `
<div class="col-lg-4 col-md-4 col-12 m-5">
<div class="cardCancion d-flex flex-row" id="musicReciente" onclick="redirectTo()">
<div class="card-img-container">
  <img src="${cancion.img}" class="img-fluid" alt="Imagen 3">
</div>
<div class="card-body">
  <p class="ms-5">${musica.nombre}}</p>
  <p class="ms-5">${musica.artista}</p>
  <a href="../pages/music.html?id=${cancion.id}" class="text-decoration-none text-white ms-5 btn">Volver a Escuchar</a>
</div>
</div>
</div>
`).join(``)

const redirectTo = () => {
  window.location.href = `../pages/music.html?id=${cancion.id}`;
}

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
