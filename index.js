import { Timer } from "./timer.js";
import Events from "./events.js";
import { controls } from "./controls.js";
import {
    minutesDisplay,
    secondsDisplay,
} from "./config.js";
const Controls = controls()
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

Events(timer, Controls)
console.log("yesssss, sir... i'm alive!")

//TODO fix the "auto init" bug