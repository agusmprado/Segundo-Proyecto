const botonIniciarSesion = document.getElementById(`btnBannerLogin`)
const botonRegistrarse = document.getElementById(`btnBannerRegister`)

const direccionarLogin = () => {
    setTimeout(() => {
        location.href= `../pages/login.html`
    },1000)
}

const direccionarRegister = () => {
    setTimeout(() => {
        location.href= `../pages/register.html`
    },1000)
}

botonIniciarSesion.addEventListener(`click`, direccionarLogin )
botonRegistrarse.addEventListener(`click`, direccionarRegister)