function timer() {
    let stopBtn = $("#stop-timer");
    let startBtn = $("#start-timer");
    startBtn.click(startTimer);
    stopBtn.click(pauseTimer);
    let secondsPassed = 0;
    let timer = null;
    let timerIsWorking = false;
    function startTimer() {
        if (!timerIsWorking) {
            timer = setInterval(() => {
                "use strict";
                secondsPassed++;
                $("#hours").text(`${("0" + Math.floor(secondsPassed / 60 / 60)).slice(-2)}`);
                $("#minutes").text(`${("0" + (Math.floor(secondsPassed / 60 % 60))).slice(-2)}`);
                $("#seconds").text(`${("0" + ((secondsPassed % 60) % 60)).slice(-2)}`);
                timerIsWorking = true;
            }, 1000)
        }
    }
    function pauseTimer() {
        clearInterval(timer);
        timerIsWorking = false;
    }
}