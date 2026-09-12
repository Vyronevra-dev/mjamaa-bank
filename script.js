const navBar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger');
const right = document.querySelector('.right');
const mobileLink = document.querySelector('.mobile-link');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    mobileLink.classList.toggle('open');
    overlay.classList.toggle('open');
});

overlay.addEventListener('click', () => {
    mobileLink.classList.remove('open');
    overlay.classList.remove('open');
})

// Hero slideshow
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

const DURATION = 5000;
let current = 0;
let timer;

function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetProgress();
}

function startAutoplay() {
    timer = setInterval(() => goTo(current + 1), DURATION);
}

function stopAutoplay() {
    clearInterval(timer);
}

document.querySelector('.arrow.prev').addEventListener('click', () => {
    stopAutoplay(); goTo(current - 1); startAutoplay();
});
document.querySelector('.arrow.next').addEventListener('click', () => {
    stopAutoplay(); goTo(current + 1); startAutoplay();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        stopAutoplay(); goTo(i); startAutoplay();
    });
});

const hero = document.querySelector('.landing-hero');
hero.addEventListener('mouseenter', stopAutoplay);
hero.addEventListener('mouseleave', startAutoplay);

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopAutoplay(); goTo(current - 1); startAutoplay(); }
    if (e.key === 'ArrowRight') { stopAutoplay(); goTo(current + 1); startAutoplay(); }
});

startAutoplay();