const timerE1 = document.getElementById("timer");
const startbuttonE1 = document.getElementById("start");
const stopbuttonE1 = document.getElementById("stop");
const resetbuttonE1 = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerE1.textContent = formatTime(elapsedTime);
    }, 10);
    startbuttonE1.disabled = true;
    stopbuttonE1.disabled = false;
    resetbuttonE1.disabled = false;
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours > 9 ? hours : "0" + hours) + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}

function stopTimer() {
    clearInterval(timeInterval);
    startbuttonE1.disabled = false;
    stopbuttonE1.disabled = true;
}

function resetTimer() {
    clearInterval(timeInterval);
    elapsedTime = 0;
    timerE1.textContent = "00:00:00:00";

    startbuttonE1.disabled = false;
    stopbuttonE1.disabled = true;
    resetbuttonE1.disabled = true;
}

startbuttonE1.addEventListener("click", startTimer);
stopbuttonE1.addEventListener("click", stopTimer);
resetbuttonE1.addEventListener("click", resetTimer);

// Initially, only the start button should be enabled
startbuttonE1.disabled = false;
stopbuttonE1.disabled = true;
resetbuttonE1.disabled = true;
