const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonTree = document.querySelector('#tree')
const buttonCloud = document.querySelector('#cloud')
const buttonStand = document.querySelector('#stand')
const buttonFire = document.querySelector('#fire')
const soundCards = document.querySelector('.sounds-menu button')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

const treeSound = new Audio("../sounds/Floresta.wav")
const cloudSound = new Audio("../sounds/Chuva.wav")
const standSound = new Audio("../sounds/Cafeteria.wav")
const fireSound = new Audio("../sounds/Lareira.wav")


export {
    buttonPlay,
    buttonMinus,
    buttonPlus,
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonTree,
    buttonCloud,
    buttonStand,
    buttonFire,
    soundCards,
    treeSound,
    cloudSound,
    standSound,
    fireSound
}