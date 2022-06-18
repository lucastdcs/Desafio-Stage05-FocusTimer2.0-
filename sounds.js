import {
    treeSound,
    cloudSound,
    standSound,
    fireSound,
} from "./config.js"

export default function() {


    function stopSounds(tree, cloud, stand, fire) {
        const sounds = [tree, cloud, stand, fire]
        for (let sound of sounds) {
            sound.pause()
        }
    }

    stopSounds(treeSound,
        cloudSound,
        standSound,
        fireSound)
}