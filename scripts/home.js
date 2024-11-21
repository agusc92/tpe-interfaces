const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

let autoSlideInterval;

// Mueve el carrusel a la diapositiva indicada
function moveToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides; // Asegura que el índice esté en rango
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

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