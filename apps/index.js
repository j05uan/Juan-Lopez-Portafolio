const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}

$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})
function flipPage() {
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const derechaInicio = document.getElementById('derechaInicio');

    pagina1.classList.add('flip');
    derechaInicio.classList.add('flip2');

    setTimeout(() => {
        pagina1.style.zIndex = '1';
        pagina2.style.zIndex = '2';
        pagina2.style.backfaceVisibility = 'visible';
        pagina1.style.backfaceVisibility = 'hidden';

        pagina2.classList.add('show');
    }, 1000); // Tiempo debe coincidir con la animación de flip
}

function start() {
    const logo = document.getElementById('logo');
    const circulo1 = document.getElementById('circulo1');
    const circulo2 = document.getElementById('circulo2');
    const circulo3 = document.getElementById('circulo3');

    // Añadir animaciones
    logo.classList.add('rotate');
    circulo1.classList.add('righrotate');
    circulo1.style.borderLeft='5px solid #fff';
    circulo2.classList.add('leftrotate');
    circulo2.style.borderRight='5px solid #fff';
    circulo3.classList.add('righrotate');
    circulo3.style.borderTop='3px solid #fff';

    // Después de 1 segundo (coincidiendo con la animación de rotación del logo) iniciar el cambio de página
    setTimeout(() => {
        flipPage();
    }, 1000); // Tiempo debe coincidir con la animación de rotate
}

// Añadir un listener para el clic en cualquier parte de la página
document.addEventListener('click', start);

