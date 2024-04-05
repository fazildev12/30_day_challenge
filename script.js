window.addEventListener('keyup',function(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
})


function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing')

}

document.addEventListener("DOMContentLoaded", () => {
    var keys = document.querySelectorAll('.key');
    console.log(keys); 
    keys.forEach(key => key.addEventListener('transitionend',removeTransition))
});

