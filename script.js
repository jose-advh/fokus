const html = document.querySelector('html');
const btnModoEnfoque = document.querySelector('.app__card-button--enfoque');
const btnModoCorto = document.querySelector('.app__card-button--corto');
const btnModoLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

btnModoCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
});

btnModoEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque');
});

btnModoLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo');
});

function cambiarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`);

    switch (contexto) {
        case "enfoque":
            title.innerHTML = 
            `
                Hora de volver a la superficie<br>
                <strong class="app__title-strong">Haz una pausa larga.</strong>
            `
            break;
        case "descanso-largo":
            title.innerHTML = 
            `
                ¿Qué tal tomar un respiro? <br>
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `
            break;
        case "descanso-corto":
            title.innerHTML = 
            `
                Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
    }
}

