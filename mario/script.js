const mario = document.getElementById('mario');
const block = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
    jump();
})

function jump () {
    if  (mario.classList != 'jump') {
         mario.classList.add('jump')
    }
    setTimeout( function() {
        mario.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval (function() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'))
    let block = parseInt(window.getComputedStyle(block).getPropertyValue('top'))
})