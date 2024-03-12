const inputUsuario = document.getElementById(`usuario`)
const inputContrasenia = document.getElementById(`Contrasenia`)
const inputRContasenia = document.getElementById(`RContrasenia`)

const botonRegistrarse = document.getElementById(`Registarse`)
const inputIniciarSesion = document.getElementById(`sign-in`)

const usuarioLocalStorage = JSON.parse(localStorage.getItem(`usuarios`)) || []
 
const enviarformulario = (e) => {
    e.preventDefault();
    if(!inputUsuario.value && !inputContrasenia.value && !inputRContasenia.value){
        swal(`Lo sentimos, parece que no has completado todos los campos 
        obligatorios. Por favor, asegúrate de llenar todos los campos requeridos
        antes de enviar el formulario. Gracias.`)
    }else if(!inputContrasenia.value && !inputRContasenia.value){
        swal(`Por favor, ingrese y repita su contraseña para continuar.`)
    }else if(!inputUsuario.value && !inputContrasenia.value){
        swal(`por favor, ingresar el usurario y contraseña`)
    }else if(!inputUsuario.value && !inputRContasenia.value){
        swal(`por favor, ingresar usuario y repetir contaseña`)
    }
    else if(!inputUsuario.value){
        swal(`Por favor, ingrese nombre del usuario para continuar.`)
    }else if(!inputContrasenia.value){
        swal(`Por favor, ingrese contraseña para continuar.`)
    }else if(!inputRContasenia.value){
        swal(`Por favor, ingrese nuevamente su contraseña para continuar.`)
    }
    if(inputUsuario.value && inputContrasenia.value && inputRContasenia.value){

        const usuarioExistente = usuarioLocalStorage.find((usuario)=> usuario.nombreUsuario === inputUsuario.value)

        if(usuarioExistente){
            return swal(`usuario no disponible`)
        }

        if(inputContrasenia.value !== inputRContasenia.value){
            return swal(`contraseñas no coinciden`)
        }

        if(usuarioLocalStorage.length){
            const idUsuario = usuarioLocalStorage[usuarioLocalStorage.length -1].id + 1
            const nuevoUsuario = {
                id: idUsuario,
                nombreUsuario: inputUsuario.value,
                contrasenia: inputContrasenia.value,
                rol: `usuario`,
                deleted: false,//nborrado logico
                login: true//deriva diectamente a la pagina del isuario
            }
            usuarioLocalStorage.push(nuevoUsuario);

            localStorage.setItem(`usuarios`, JSON.stringify(usuarioLocalStorage));

            setTimeout(() => {
                
                location.href= `../pages/homeUsuario`//escribir la pagina del usuario 
            },1000)
 
        }else{
            const nuevoUsuario = {
                id: 1,
                nombreUsuario: inputUsuario.value,
                contrasenia: inputContrasenia.value,
                rol: `usuario`,
                deleted: false,//nborrado logico
                login: true//deriva diectamente a la pagina del isuario
            }
            usuarioLocalStorage.push(nuevoUsuario)

            localStorage.setItem(`usuarios`, JSON.stringify(usuarioLocalStorage))
        }
        setTimeout(() => {
            location.href= `../pages/homeUsuario.html`//escribir la pagina del usuario 
        },1000)
    }
}

const direccionarLogin = (e) => {
    setTimeout(() => {
        location.href= `../pages/login.html`
    },1000)
}

const validarCampo = (ev)=> {
    ev.preventDefault();
    const { name, value } = ev.target
    if (name === 'usuario') {
        if (value.length < 4) {
            swal(`Por favor, ingrese mas carecteres a su nombre de usuario`)
        }
    }
}

const validarCampoContrasenia= (ev)=> {
    ev.preventDefault();
    const { name, value } = ev.target
    if(name === `Contrasenia`){
        if(value.length < 4){
            swal(`Por favor, ingrese mas carecteres a su contraseña`)
        }
    }
}

botonRegistrarse.addEventListener(`click`, enviarformulario);
inputIniciarSesion.addEventListener(`click`, direccionarLogin)
inputUsuario.addEventListener(`change`, validarCampo)
inputContrasenia.addEventListener(`change`, validarCampoContrasenia)

