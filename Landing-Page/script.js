// Navbar
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
});

// Dark Mode
const darkmode = document.querySelector('#darkmode');

darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('bx-moon');
    darkmode.classList.toggle('bx-sun');
    document.body.classList.toggle('active');
});

// Scroll Reveal
ScrollReveal().reveal(
    `.home-text, .home-img, .about-img, .about-text,
    .box, .s-box, .btn, .connect-text, .contact-box`, {
        origin: 'top',
        distance: '40px',
        duration: 2000,
        interval: 200,
        reset: true
});
