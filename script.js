const navBar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger');
const right = document.querySelector('.right');
const mobileLink = document.querySelector('.mobile-link');
const overlay = document.querySelector('.overlay');
const deals = document.querySelectorAll('.deal');
const dealBtns = document.querySelectorAll('.deal-btn');


hamburger.addEventListener('click', () => {
    mobileLink.classList.toggle('open');
    overlay.classList.toggle('open');
});

overlay.addEventListener('click', () => {
    mobileLink.classList.remove('open');
    overlay.classList.remove('open');
})

/* ——— Hero Slideshow ——— */
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

if (slides.length > 0) {
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

    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');

    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            stopAutoplay(); goTo(current - 1); startAutoplay();
        });
    }
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            stopAutoplay(); goTo(current + 1); startAutoplay();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAutoplay(); goTo(i); startAutoplay();
        });
    });

    const hero = document.querySelector('.landing-hero');
    if (hero) {
        hero.addEventListener('mouseenter', stopAutoplay);
        hero.addEventListener('mouseleave', startAutoplay);
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft')  { stopAutoplay(); goTo(current - 1); startAutoplay(); }
        if (e.key === 'ArrowRight') { stopAutoplay(); goTo(current + 1); startAutoplay(); }
    });

    startAutoplay();
}

/* ——— Deals Filter ——— */
if (dealBtns.length > 0) {
    dealBtns.forEach((dealBtn) => {
        dealBtn.addEventListener('click', () => {
            const filter = dealBtn.dataset.filter;

            dealBtns.forEach(btn => btn.classList.remove('active'));
            dealBtn.classList.add('active');

            deals.forEach((deal) => {
                if (filter === 'all' || deal.dataset.category === filter) {
                    deal.style.display = 'block';
                    setTimeout(() => deal.classList.remove('hide'), 10);
                } else {
                    deal.classList.add('hide');
                    setTimeout(() => deal.style.display = 'none', 300);
                }
            });
        });
    });
}

/* ——— FAQ Accordion ——— */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        faqItems.forEach((other) => {
            other.classList.remove('active');
        });

        if (!isOpen) {
            item.classList.add('active');
        }
    });
});
