export function Timer({
    minutesDisplay,
    secondsDisplay,
}) {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    let timerTimeOut

    function updateTimerDisplay(minutes, seconds) {

        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown() {

        timerTimeOut = setTimeout(function() {

            let seconds = Number(secondsDisplay.textContent)

            updateTimerDisplay(minutes, 0)
            if (minutes <= 0 && seconds <= 0) {
                clearTimeout(timerTimeOut)
                return
            }
            if (seconds <= 0) {
                seconds = 60
                    --minutes
            }

            updateTimerDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)

    }

    function reset() {
        minutes = 0
        seconds = 0
        clearTimeout(timerTimeOut)
        updateTimerDisplay(minutes, seconds)
    }

    function addMinutes() {

        if (minutes < 0 && seconds <= 0) {
            minutes = 0
            updateTimerDisplay(0, 0)
            console.log('im here, sir')
        }
        minutes = minutes + 5;
        updateTimerDisplay(minutes, seconds)
    }

    function decreaseMinutes() {

        if (minutes <= 0 && seconds == 0) {
            updateTimerDisplay(0, 0)
            return
        }
        minutes = minutes - 5
        updateTimerDisplay(minutes, seconds)

    }
    return {
        countdown,
        reset,
        addMinutes,
        decreaseMinutes
    }
}