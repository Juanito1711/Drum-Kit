const sounds1 = document.getElementById('sounds-1');
const sounds2 = document.getElementById('sounds-2');
const sounds3 = document.getElementById('sounds-3');

sounds1.addEventListener('click', () => {
    var audio = new Audio('../sounds/sounds1.mp3');
    audio.play();
})

sounds2.addEventListener('click', ()=> {
    var audio2 = new Audio('../sounds/sounds2.mp3');
    audio2.play();

})

sounds3.addEventListener('click', ()=> {
    var audio3 = new Audio('../sounds/sounds3.mp3');
    audio3.play();
})