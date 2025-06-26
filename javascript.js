// script.js
const menu = document.querySelector('.menu');
const navegacaoToggle = document.querySelector('.navegacao-toggle');

navegacaoToggle.addEventListener('click', () => {
    navegacaoToggle.classList.toggle('active');
    menu.classList.toggle('active');
});
