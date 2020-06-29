const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current Class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next class
  if (current.nextElementSibling) {
    // Add current to next Sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current Class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next class
  if (current.previousElementSibling) {
    // Add current to next Sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slide.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button Events

next.addEventListener('click', e=> {
  nextSlide();
  if (auto) {
    // Reset the interval time so that we can click on it
    clearInterval(slide);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener('click', e=> {
  prevSlide();
  if (auto) {
    clearInterval(slide);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});


// Auto slide

if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
