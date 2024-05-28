const slides = document.querySelectorAll('.slide');
const navItems = document.querySelectorAll('.slider-nav-item');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });

  navItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);