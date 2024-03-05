const inputUsuario = document.getElementById(`usuarioL`)
const inputContrasenia = document.getElementById(`ContraseniaL`)

const botonIniciaSesion = document.getElementById(`IniciaSesion`)
const inputRegistrarse = document.getElementById(`sign-upL`)

const usuarioLocalStorage = JSON.parse(localStorage.getItem(`usuarios`)) || []

const enviarformulario = (e) => {
    e.preventDefault();
    if(!inputUsuario.value && !inputContrasenia.value){
        swal(`Lo sentimos, parece que no has completado todos los campos 
        obligatorios. Por favor, asegúrate de llenar todos los campos requeridos
        antes de enviar el formulario. Gracias.`)
    }else if(!inputUsuario.value){
        swal(`Por favor, ingrese nombre del usuario para continuar.`)
    }else if(!inputContrasenia.value){
        swal(`Por favor, ingrese contraseña para continuar.`)
    }
}

const direccionarRegister = (e) => {
    setTimeout(() => {
        location.href= `../pages/register.html`
    },1000)
}

botonIniciaSesion.addEventListener(`click`, enviarformulario);
inputRegistrarse.addEventListener(`click`, direccionarRegister)