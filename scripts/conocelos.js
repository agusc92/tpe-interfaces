let perroPopup = document.querySelector(".perro-popup");
// perroPopup.classList.remove("desaparecer")
let main = document.querySelector('main');
let cards = [...document.querySelectorAll(".card")];
let botonCerrar = document.getElementById('cerrar');
let fondoFalso = document.getElementById('fondoFalso');
//codigo para posicionar el boton de login
let botonLogin = [...document.querySelectorAll('.boton-login')]//boton blanco del header
let botonDonar = document.getElementById('botonDonar');
let formularioLogin = document.querySelector('.login');
let botonCerrarLogin = document.getElementById('botonCerrarLogin');//boton del formulario de login
let usuario = document.getElementById('usuario');
let contrasenia = document.getElementById('contrasenia')
let errorUsuario = document.getElementById('errorUsuario');
let errorContrasenia = document.getElementById('errorContrasenia');
let imagenUsuarioInput = document.getElementById('imagenUsuarioInput');
let imagencontraseniaInput = document.getElementById('imagencontraseniaInput');
let adelante = document.getElementById('adelante');
let atras = document.getElementById('atras');
let cardActual = 0;
let botonCerrarSesion = document.getElementById("botonCerrarSesion");

window.addEventListener('resize', posicionarLogin);
function posicionarLogin(){//posiciona los dos botones de login
    let pos = botonDonar.getBoundingClientRect();
    botonLogin.forEach(boton=>{
        boton.style.left = `${pos.left }px`
        boton.style.top = `${pos.top -65}px`
        botonCerrarSesion.style.top = `${pos.top -60}px`
        botonCerrarSesion.style.left = `${pos.left +50}px`

    })
    
    
}
posicionarLogin();

//funcionalidad boton login
botonLogin[0].addEventListener('click',()=>{
    formularioLogin.classList.remove('desaparecer');
    formularioLogin.classList.add('visible');
    fondoFalso.classList.remove('desaparecer');
})

//funcionalidad del formulario
botonCerrarLogin.addEventListener('click',()=>{
    if(usuario.value == 'admin'){
        errorUsuario.innerText=''
        imagenUsuarioInput.classList.remove('error');
        imagenUsuarioInput.classList.add('correcto');
        

        if(contrasenia.value == 'admin'){
            errorContrasenia.innerText=''
            imagencontraseniaInput.classList.remove('error');
            imagencontraseniaInput.classList.add('correcto');
            
            setTimeout(() => {
                formularioLogin.classList.add('desaparecer');
            fondoFalso.classList.add('desaparecer');
                 loguear();
            }, 1000);
            
        }else{
            errorContrasenia.innerText='contraseña incorrecta'
            imagencontraseniaInput.classList.add('error');
        }
    
    }else{
        errorUsuario.innerText='Nombre de usuario incorrecto'
        imagenUsuarioInput.classList.add('error');
    }
    
})






botonCerrar.addEventListener('click',()=>{
    perroPopup.classList.add('desaparecer')
    perroPopup.classList.remove('visible')
    fondoFalso.classList.add('desaparecer')
})
fondoFalso.addEventListener('click',()=>{
    perroPopup.classList.add('desaparecer');
    perroPopup.classList.remove('visible');
    formularioLogin.classList.remove('visible');
    fondoFalso.classList.add('desaparecer');
    formularioLogin.classList.add('desaparecer');
})


cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        perroPopup.classList.remove('desaparecer');
        perroPopup.classList.add('visible');
        fondoFalso.classList.remove('desaparecer');
        cardActual = cards.indexOf(card) ;
        rellenarPopup(card);
        
    })
})

function loguear(){
    let acciones = [...document.querySelectorAll('.actions')]
    let botonAgregar = document.getElementById('botonAgregar');
    let botonCerrarSesion = document.getElementById("botonCerrarSesion");
    botonCerrarSesion.classList.remove('desaparecer');
    botonAgregar.classList.remove('desaparecer');
    acciones.forEach(accion=>{
        accion.classList.remove('desaparecer');
    })
    botonLogin[0].classList.add('desaparecer');//boton de ingresar
    botonLogin[1].classList.remove('desaparecer');//boton con la imagen de usuario

}

function rellenarPopup(card){
    document.getElementById('nombre').innerText = card.dataset.nombre;
        document.getElementById('edad').innerText = card.dataset.edad;
        document.getElementById('tamanio').innerText = card.dataset.tamanio;
        document.getElementById('castrado').innerText = card.dataset.castrado;
        document.getElementById('observaciones').innerText = card.dataset.observaciones;
        document.getElementById('imagen').src = card.dataset.imagen;
}

adelante.addEventListener('click',()=>{
    if(cardActual == cards.length-1){
        cardActual = -1;
    }
    cardActual++;
   rellenarPopup(cards[cardActual]);
    
    
})
atras.addEventListener('click',()=>{
    if(cardActual == 0){
        cardActual = cards.length;
    }
    cardActual--;
    rellenarPopup(cards[cardActual]);
})

document.addEventListener("DOMContentLoaded", () => {
    const botonCerrarSesion = document.getElementById("botonCerrarSesion");
    const modalCerrarSesion = document.getElementById("modalCerrarSesion");
    const aceptarCerrarSesion = document.getElementById("aceptarCerrarSesion");
    const cancelarCerrarSesion = document.getElementById("cancelarCerrarSesion");

    // Abrir el modal al hacer clic en el botón
    botonCerrarSesion.addEventListener("click", () => {
        modalCerrarSesion.classList.remove("desaparecer");
    });

    // Confirmar cierre de sesión
    aceptarCerrarSesion.addEventListener("click", () => {
        modalCerrarSesion.classList.add("desaparecer");
       
    });

    // Cancelar cierre de sesión
    cancelarCerrarSesion.addEventListener("click", () => {
        modalCerrarSesion.classList.add("desaparecer");
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", (e) => {
        if (e.target === modalCerrarSesion) {
            modalCerrarSesion.classList.add("desaparecer");
        }
    });
});
