const html = document.querySelector('html');
const btnModoEnfoque = document.querySelector('.app__card-button--enfoque');
const btnModoCorto = document.querySelector('.app__card-button--corto');
const btnModoLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const tiempoEnPantalla = document.querySelector('#timer');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/vive-la-vida.zaider-remix.mp3');
const audioPlay = new Audio('./sonidos/play.wav');
const audioTerminado = new Audio ('./sonidos/beep.mp3');
const audioPausa = new Audio ('./sonidos/pause.mp3');
const botonPausa = document.querySelector('#start-pause');
const botonIcon = document.querySelector(".app__card-primary-butto-icon");
const textoIniciarPausar = document.querySelector('#start-pause span');
let tiempoTranscurridoSegundos = 1500;
let idIntervalo = null;
musica.loop = true;

inputEnfoqueMusica.addEventListener('change', () => {
        musica.volume = .5;
        if (musica.paused) {
            musica.play();
        } else {
            musica.pause();
        }
});

btnModoCorto.addEventListener('click', () => {
    tiempoTranscurridoSegundos = 300;
    cambiarContexto('descanso-corto');
    btnModoCorto.classList.add('active');
});

btnModoEnfoque.addEventListener('click', () => {
    tiempoTranscurridoSegundos = 1500;
    cambiarContexto('enfoque');
    btnModoEnfoque.classList.add('active');
});

btnModoLargo.addEventListener('click', () => {
    tiempoTranscurridoSegundos = 900;
    cambiarContexto('descanso-largo');
    btnModoLargo.classList.add('active');
});

function cambiarContexto(contexto) {
    mostrarTiempo();
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`);

    botones.forEach(function(contexto) {
        contexto.classList.remove('active');
    })

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
            break;
    }
}

const cuentaRegresiva = () => {
    if (tiempoTranscurridoSegundos <= 0) {
        audioTerminado.play();
        alert('Tiempo terminado mi pex');
        reiniciar();
        botonIcon.setAttribute('src', `./imagenes/play_arrow.png`);
        textoIniciarPausar.innerText = "Comenzar";
        return;
    }

    botonIcon.setAttribute('src', `./imagenes/pause.png`);
    textoIniciarPausar.innerText = "Pausar";
    tiempoTranscurridoSegundos--;
    mostrarTiempo();
}

botonPausa.addEventListener('click', iniciarPausar);

function iniciarPausar() {
    if (idIntervalo) {
        reiniciar();
        audioPausa.play();
        botonIcon.setAttribute('src', `./imagenes/play_arrow.png`);
        textoIniciarPausar.innerText = "Continuar";
        return;
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000);
}

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
}

function mostrarTiempo() {
    const tiempo = new Date(tiempoTranscurridoSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleTimeString("es-MX", { minute: '2-digit', second: '2-digit' });
    tiempoEnPantalla.innerHTML = `${tiempoFormateado}`;
}

mostrarTiempo();