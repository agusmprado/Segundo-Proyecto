const btnSingIn = document.getElementById(`sign-in`)
const btnSingUp = document.getElementById(`sign-up`)

const fromRegister =  document.querySelector(`.register`)
const formLogin = document.querySelector(`.login`)



btnSingIn.addEventListener("click", e =>{
    fromRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSingUp.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    fromRegister.classList.remove("hide")
})

