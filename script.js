const navBar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger');
const right = document.querySelector('.right');
const mobileLink = document.querySelector('.mobile-link');
const overlay = document.querySelector('.overlay');
const deals = document.querySelectorAll('.deal');
const dealBtns = document.querySelectorAll('.deal-btn');
const passwordToggle = document.getElementById('password-toggle');
const loginPassword = document.getElementById('login-password');
const loginForm = document.getElementById('login-form');
const loginFeedback = document.getElementById('login-feedback');


hamburger.addEventListener('click', () => {
    mobileLink.classList.toggle('open');
    overlay.classList.toggle('open');
});

if (passwordToggle && loginPassword) {
    passwordToggle.addEventListener('click', () => {
        const showPassword = loginPassword.type === 'password';
        loginPassword.type = showPassword ? 'text' : 'password';
        passwordToggle.setAttribute('aria-pressed', String(showPassword));
        passwordToggle.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
    });
}

if (loginForm && loginFeedback) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginFeedback.textContent = 'Online sign-in is not connected yet. Please contact support for account assistance.';
    });
}

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


// ===== Login page (paste at the bottom of script.js, or load as its own file) =====
(function () {
    const form = document.getElementById('login-form');
    if (!form) return; // only runs on the login page

    const idInput = document.getElementById('customer-id');
    const pwInput = document.getElementById('password');
    const idError = document.getElementById('id-error');
    const pwError = document.getElementById('password-error');
    const alertBox = document.getElementById('form-alert');
    const loginBtn = document.getElementById('login-btn');
    const toggleBtn = document.getElementById('toggle-password');
    const eyeIcon = document.getElementById('eye-icon');

    const eyeOpen = '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>';
    const eyeOff = '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>';

    // Show / hide password
    toggleBtn.addEventListener('click', function () {
        const showing = pwInput.type === 'text';
        pwInput.type = showing ? 'password' : 'text';
        toggleBtn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        eyeIcon.innerHTML = showing ? eyeOpen : eyeOff;
    });

    function setError(input, errorEl, hasError) {
        input.classList.toggle('invalid', hasError);
        errorEl.classList.toggle('show', hasError);
    }

    function showAlert(message, isError) {
        alertBox.textContent = message;
        alertBox.classList.toggle('error', isError);
        alertBox.classList.add('show');
    }

    // Clear errors while typing
    idInput.addEventListener('input', function () { setError(idInput, idError, false); });
    pwInput.addEventListener('input', function () { setError(pwInput, pwError, false); });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alertBox.classList.remove('show');

        const idBad = idInput.value.trim().length < 4;
        const pwBad = pwInput.value.length < 8;

        setError(idInput, idError, idBad);
        setError(pwInput, pwError, pwBad);

        if (idBad || pwBad) {
            (idBad ? idInput : pwInput).focus();
            return;
        }

        // Demo only: no backend yet, so we fake the request
        loginBtn.disabled = true;
        loginBtn.textContent = 'Signing in...';

        setTimeout(function () {
            loginBtn.disabled = false;
            loginBtn.textContent = 'Sign in';
            showAlert('This is a demo bank, so there is no dashboard to open yet.', false);
            form.reset();
        }, 1200);
    });
})();