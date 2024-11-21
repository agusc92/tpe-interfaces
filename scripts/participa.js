let botonesPostular = [...document.querySelectorAll(".postularme")]
let popup = document.querySelector('.perro-popup');
let botonEnviar = document.querySelector("#enviar");
let fondoFalso = document.getElementById("fondoFalso");
let selecVoluntario = document.getElementById("voluntario");
let selecHogar = document.getElementById("hogar");
let mail = document.getElementById("mail");
let errorMail = document.getElementById("errorMail");
let errorRadio = document.getElementById("errorRadio");

botonesPostular.forEach(boton =>{
    boton.addEventListener('click',()=>{
        popup.classList.remove('desaparecer');
        fondoFalso.classList.remove('desaparecer')
    })
}
)

botonEnviar.addEventListener('click',()=>{
    if(selecVoluntario.checked || selecHogar.checked){
        errorRadio.classList.add("desaparecer");
        if(mailValido(mail.value)){
            errorMail.classList.remove("desaparecer");
            popup.classList.add('desaparecer')
            fondoFalso.classList.add('desaparecer')
        }else{
            errorMail.classList.remove("desaparecer");
        }
    }else{
        errorRadio.classList.remove("desaparecer")
    }
    

})
fondoFalso.addEventListener('click',()=>{
    popup.classList.add('desaparecer');
    fondoFalso.classList.add('desaparecer');
    
})

function mailValido(mail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }
