// Pulo
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
     
        mario.classList.remove('jump');
        
    },500);
}  

const loop = setInterval(() => {

    const positionPipe = pipe.offsetLeft;
    const positionMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (positionPipe <= 120 && positionPipe > 0 && positionMario < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${positionPipe}px`;

        mario.style.animation = 'none';
        mario.style.left = `${positionMario}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);