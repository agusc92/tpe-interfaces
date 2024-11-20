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

window.addEventListener('resize', posicionarLogin);
function posicionarLogin(){//posiciona los dos botones de login
    let pos = botonDonar.getBoundingClientRect();
    botonLogin.forEach(boton=>{
        boton.style.left = `${pos.left}px`
        boton.style.top = `${pos.top -65}px`
    })
    
    
}
posicionarLogin();

//funcionalidad boton login
botonLogin[0].addEventListener('click',()=>{
    formularioLogin.classList.remove('desaparecer');
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
    fondoFalso.classList.add('desaparecer')
})
fondoFalso.addEventListener('click',()=>{
    perroPopup.classList.add('desaparecer');
    fondoFalso.classList.add('desaparecer');
    formularioLogin.classList.add('desaparecer');
})


cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        perroPopup.classList.remove('desaparecer');
        fondoFalso.classList.remove('desaparecer');

        document.getElementById('nombre').innerText = card.dataset.nombre;
        document.getElementById('edad').innerText = card.dataset.edad;
        document.getElementById('tamanio').innerText = card.dataset.tamanio;
        document.getElementById('castrado').innerText = card.dataset.castrado;
        document.getElementById('observaciones').innerText = card.dataset.observaciones;
        document.getElementById('imagen').src = card.dataset.imagen;
        
    })
})

function loguear(){
    let acciones = [...document.querySelectorAll('.actions')]
    let botonAgregar = document.getElementById('botonAgregar');
    botonAgregar.classList.remove('desaparecer');
    acciones.forEach(accion=>{
        accion.classList.remove('desaparecer');
    })
    botonLogin[0].classList.add('desaparecer');//boton de ingresar
    botonLogin[1].classList.remove('desaparecer');//boton con la imagen de usuario

}