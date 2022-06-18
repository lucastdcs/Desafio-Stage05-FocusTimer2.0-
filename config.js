const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonTree = document.querySelector('#tree')
const buttonCloud = document.querySelector('#cloud')
const buttonStand = document.querySelector('#stand')
const buttonFire = document.querySelector('#fire')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

const treeSound = new Audio("https://github.com/lucastdcs/Desafio-Stage05-FocusTimer2.0-/blob/main/sounds/Floresta.wav?raw=true")
const cloudSound = new Audio("https://github.com/lucastdcs/Desafio-Stage05-FocusTimer2.0-/blob/main/sounds/Chuva.wav?raw=true")
const standSound = new Audio("https://github.com/lucastdcs/Desafio-Stage05-FocusTimer2.0-/blob/main/sounds/Cafeteria.wav?raw=true")
const fireSound = new Audio("https://github.com/lucastdcs/Desafio-Stage05-FocusTimer2.0-/blob/main/sounds/Lareira.wav?raw=true")


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
    treeSound,
    cloudSound,
    standSound,
    fireSound
}