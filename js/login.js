const inputUsuario = document.getElementById(`usuario`)
const inputContrasenia = document.getElementById(`Contrasenia`)

const botonIniciarSesion = document.getElementById(`IniciaSesion`)
const botonRegistrarse = document.getElementById(`sign-in`)

const usuarioLocalStorage = JSON.parse(localStorage.getItem(`usuarios`)) || []
const adminLocalStorage = JSON.parse(localStorage.getItem("admin"));
 
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
    if(inputUsuario.value && inputContrasenia.value){

        const usuarioExistente = usuarioLocalStorage.find(
            (usuario)=> usuario.nombreUsuario === inputUsuario.value)
        const usuarioIndex = usuarioLocalStorage.findIndex(
            (usuario) => usuario.nombreUsuario === inputUsuario.value )    

        if(!usuarioExistente ){
            if (inputPass.value === adminLocalStorage.pass) {
                location.href = "../pages/homeadmin.html";
                return;
              }
            return swal(`usuario y/o contraseña incorrecta/ u`)
        }

        if(inputContrasenia.value !== usuarioExistente.contrasenia){
            return swal(`usuario y/o contraseña incorrecto / c`)
        }

        usuarioLocalStorage[usuarioIndex].login = true;
        localStorage.setItem(`usuarios`, JSON.stringify(usuarioLocalStorage));
        sessionStorage.setItem(`usuarioLogiado`, JSON.stringify(usuarioIndex));

        if(usuarioExistente.rol === `administrador`){
            location.href = `../pages/homeadmin.html`
        }else{
            location.href = `../pages/homeUsuario.html`
        }
    }
}


const direccionamientoRegistrarse = () => {
    location.href = `../pages/register.html`
}

botonIniciarSesion.addEventListener(`click`, enviarformulario)
botonRegistrarse.addEventListener(`click`, direccionamientoRegistrarse)

