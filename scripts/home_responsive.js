const carousel = document.querySelector('.carousel-container');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let menuHamurguesa = document.querySelector("#menuHamburguesa");
let autoSlideInterval;
let menu = document.getElementById('menu');
// Mueve el carrusel a la diapositiva indicada
function moveToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides; // Asegura que el índice esté en rango
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botón siguiente


// Función para iniciar el carrusel automático
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 4000);
}

// Función para detener el carrusel automático
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Pausar el carrusel al pasar el mouse sobre él
carousel.parentElement.addEventListener('mouseenter', stopAutoSlide);

// Reanudar el carrusel al quitar el mouse
carousel.parentElement.addEventListener('mouseleave', startAutoSlide);

// Iniciar el carrusel automáticamente al cargar la página
startAutoSlide();

menuHamurguesa.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});

const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');

let startX = 0; // Coordenada inicial en X
let currentTranslate = 0; // Desplazamiento actual
let prevTranslate = 0; // Desplazamiento anterior

let isDragging = false; // Verifica si se está arrastrando

// Obtiene el ancho del carrusel
const slideWidth = carouselContainer.offsetWidth;

// Agregar eventos para táctil y ratón
carouselContainer.addEventListener('touchstart', touchStart);
carouselContainer.addEventListener('touchmove', touchMove);
carouselContainer.addEventListener('touchend', touchEnd);

carouselContainer.addEventListener('mousedown', touchStart);
carouselContainer.addEventListener('mousemove', touchMove);
carouselContainer.addEventListener('mouseup', touchEnd);
carouselContainer.addEventListener('mouseleave', touchEnd);

// Función al iniciar el arrastre
function touchStart(event) {
    isDragging = true;
    startX = getPositionX(event); // Obtiene la posición inicial en X
    carouselContainer.style.transition = 'none'; // Desactiva la transición mientras arrastra
}

// Función al mover el dedo o el ratón
function touchMove(event) {
    if (!isDragging) return;

    const currentX = getPositionX(event); // Obtiene la posición actual
    const deltaX = currentX - startX; // Diferencia desde el inicio
    currentTranslate = prevTranslate + deltaX; // Actualiza el desplazamiento

    carouselContainer.style.transform = `translateX(${currentTranslate}px)`; // Aplica el movimiento
}

// Función al soltar el dedo o el ratón
function touchEnd() {
    if (!isDragging) return;

    isDragging = false;

    const movedBy = currentTranslate - prevTranslate; // Distancia movida
    const threshold = slideWidth / 4; // Umbral para cambiar de slide (25% del ancho)

    if (movedBy < -threshold && currentIndex < slides.length - 1) {
        currentIndex++; // Siguiente slide
    } else if (movedBy > threshold && currentIndex > 0) {
        currentIndex--; // Slide anterior
    }

    setPositionByIndex(); // Ajusta la posición
}

// Ajusta la posición del carrusel basado en el índice
function setPositionByIndex() {
    currentTranslate = -currentIndex * slideWidth; // Calcula la posición para el índice
    prevTranslate = currentTranslate;

    carouselContainer.style.transition = 'transform 0.3s ease'; // Reactiva la transición
    carouselContainer.style.transform = `translateX(${currentTranslate}px)`; // Aplica la posición
}

// Obtiene la posición en X del evento (ratón o táctil)
function getPositionX(event) {
    return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}