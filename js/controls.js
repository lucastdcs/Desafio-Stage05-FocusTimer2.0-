import {
    buttonTree,
    buttonCloud,
    buttonStand,
    buttonFire,
} from "./config.js";
import sounds from "./sounds.js";

export function controls() {

    function verify(tree, cloud, stand, fire) {
        const elements = [tree, cloud, stand, fire]
        for (let element of elements) {

            element.classList.remove('active')

        }
    }

    function toggle(element, sound) {

        if (element.classList.contains('active') == false) {
            verify(buttonTree, buttonCloud, buttonStand, buttonFire)
            element.classList.add('active')
            sounds()
            sound.play()
        } else if (element.classList.contains('active') == true) {
            element.classList.remove('active')
            sound.pause()
        }

    }
    return {
        toggle,
        verify
    }

}