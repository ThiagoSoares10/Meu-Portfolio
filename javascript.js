// script.js
const menu = document.querySelector('.menu');
const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    menu.classList.toggle('active');
});
