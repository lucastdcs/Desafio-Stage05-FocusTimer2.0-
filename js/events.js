import {
    buttonPlay,
    buttonMinus,
    buttonPlus,
    buttonStop,
    buttonTree,
    buttonCloud,
    buttonStand,
    buttonFire
} from "./config.js";
import {
    treeSound,
    cloudSound,
    standSound,
    fireSound
} from "./config.js"

export default function(
    timer,
    controls
) {
    buttonPlay.addEventListener('click', function() {
        timer.countdown()
    })

    buttonStop.addEventListener('click', function() {
        timer.reset()
    })

    buttonPlus.addEventListener('click', function() {
        timer.addMinutes()
    })

    buttonMinus.addEventListener('click', function() {
        timer.decreaseMinutes()
    })

    buttonTree.addEventListener('click', function() {
        controls.toggle(buttonTree, treeSound)
    })
    buttonCloud.addEventListener('click', function() {
        controls.toggle(buttonCloud, cloudSound)
    })
    buttonStand.addEventListener('click', function() {
        controls.toggle(buttonStand, standSound)
    })
    buttonFire.addEventListener('click', function() {
        controls.toggle(buttonFire, fireSound)
    })
}