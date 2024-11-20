let slideIndex = 0;
let interval;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    console.log(slides);

    // Actualiza el índice de la diapositiva
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;

    // Ajusta la posición del contenedor
    const offset = -slideIndex * 100; // Cada imagen ocupa 100%
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;

    // Reinicia la animación automática
    resetAutoSlide();
}

// Función para reiniciar el intervalo de auto-slide
function resetAutoSlide() {
    clearInterval(interval); // Limpia el intervalo existente
    interval = setInterval(() => moveSlide(1), 5000); // Reinicia el auto-slide
}

// Inicia el carrusel automático al cargar la página
window.onload = () => {
    resetAutoSlide();

    // Agrega eventos a los botones
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
};
