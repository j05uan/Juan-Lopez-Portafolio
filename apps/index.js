const soundCloud = document.querySelector('.bi ');
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



const btnTimes = document.querySelector('.bi-backspace' );
const btnBars = document.querySelector('.bi-list');
const SideNav = document.querySelector('.aside');
const container =document.getElementById('headerr');
const aside =document.querySelector('aside-wrapper');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        SideNav.style.display="block"
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
        container.style.zIndex='40';
        SideNav.style.zIndex='30';

       
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
            SideNav.style.display='none';
            aside.style.zIndex='1';
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
        $("#myCanvasContainer");
    }
})
function flipPage() {
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const derechaInicio = document.getElementById('derechaInicio');
    const container =document.getElementById('pagina2');

    pagina1.classList.add('flip');

    setTimeout(() => {
        pagina1.style.zIndex = '1';
        pagina2.style.zIndex = '2';
        pagina2.style.backfaceVisibility = 'visible';
        pagina1.style.backfaceVisibility = 'hidden';
        container.style.overflow = 'visible';

        pagina2.classList.add('show');
    }, 1000); 
}

function start() {
    const logo = document.getElementById('logo');
    const circulo1 = document.getElementById('circulo1');
    const circulo2 = document.getElementById('circulo2');
    const circulo3 = document.getElementById('circulo3');
    const container =document.getElementById('pagina2');

    container.style.overflow = 'visible';
    logo.classList.add('rotate');
    circulo1.classList.add('righrotate');
    circulo1.style.borderLeft='5px solid #fff';
    circulo2.classList.add('leftrotate');
    circulo2.style.borderRight='5px solid #fff';
    circulo3.classList.add('righrotate');
    circulo3.style.borderTop='3px solid #fff';

    setTimeout(() => {
        flipPage();
    }, 1000); 
}

document.addEventListener('click', start);

