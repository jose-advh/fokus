const html = document.querySelector('html');
const btnModoEnfoque = document.querySelector('.app__card-button--enfoque');
const btnModoCorto = document.querySelector('.app__card-button--corto');

btnModoCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto');
});

btnModoEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque');
});