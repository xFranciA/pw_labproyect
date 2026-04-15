let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");

    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => moveSlide(1), 5000);
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

window.onload = function() {
    showSlides(slideIndex);
};