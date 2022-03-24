const birds = ['drozd', 'forest', 'javoronok', 'slavka', 'solovey', 'zarynka']
let isPlay = false;
const audio = new Audio();
audio.src = './assets/audio/forest.mp3';
function playAudio() {
    if (!isPlay) {
        audio.play();
        isPlay = true
    }
    else {
        audio.pause();
        isPlay = false
    }
}

const buttonPlay = document.querySelector('.play')

buttonPlay.onclick = function () {
    buttonPlay.classList.toggle('is-active')
    playAudio();
}

const navItems = document.querySelectorAll('.nav-item')
const mainS = document.querySelector('.main')

const drozd = document.querySelector(".drozd")
drozd.onclick = function () { switchSound(drozd) }
const javoronok = document.querySelector(".javoronok")
javoronok.onclick = function () { switchSound(javoronok) }
const slavka = document.querySelector(".slavka")
slavka.onclick = function () { switchSound(slavka) }
const solovey = document.querySelector(".solovey")
solovey.onclick = function () { switchSound(solovey) }
const zarynka = document.querySelector(".zarynka")
zarynka.onclick = function () { switchSound(zarynka) }
const forest = document.querySelector(".bird")
forest.onclick = function () { switchSound(forest) }

function switchSound(items) {
    if (!items.classList.contains('is-active')) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('is-active')
            mainS.classList.remove(birds[i])
        }
        items.classList.add('is-active')
        mainS.classList.toggle(items.dataset.item)
        audio.src = `./assets/audio/${items.dataset.item}.mp3`
        if (!buttonPlay.classList.contains('is-active'))
            buttonPlay.classList.toggle('is-active')
        isPlay = false
        playAudio()
    } else {
        playAudio()
        buttonPlay.classList.toggle('is-active')
    }
}

function preload() {
    for (let j = 0; j < birds.length; j++) {
        const img = new Image();
        img.src = `./assets/img/${birds[j]}.jpg`;
        const sound = new Audio();
        sound.src = `./assets/audio/${birds[j]}.mp3`;
    }
}

preload()