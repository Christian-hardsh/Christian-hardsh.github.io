let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}
