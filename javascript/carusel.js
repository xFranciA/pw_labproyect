let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    
    // Resetear al inicio o final
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    // Ocultar todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Mostrar la imagen actual
    slides[slideIndex].classList.add("active");
    
    // Reiniciar el temporizador automático
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => moveSlide(1), 5000); 
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Iniciar carrusel al cargar la página
window.onload = function() {
    showSlides(slideIndex);
};