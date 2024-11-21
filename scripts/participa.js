let botonesPostular = [...document.querySelectorAll(".postularme")]
let popup = document.querySelector('.perro-popup');
let botonEnviar = document.querySelector("#enviar");
let fondoFalso = document.getElementById("fondoFalso");
botonesPostular.forEach(boton =>{
    boton.addEventListener('click',()=>{
        popup.classList.remove('desaparecer');
        fondoFalso.classList.remove('desaparecer')
    })
}
)

botonEnviar.addEventListener('click',()=>{
    popup.classList.add('desaparecer')
    fondoFalso.classList.add('desaparecer')
})
fondoFalso.addEventListener('click',()=>{
    popup.classList.add('desaparecer');
    fondoFalso.classList.add('desaparecer');
    
})
