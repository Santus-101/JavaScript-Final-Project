let startTime;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    console.log(startTime, Date.now(), elapsedTime)
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 100);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = "0:00";
    startTime = undefined;
    elapsedTime = 0;
}

function updateDisplay() {
    const elapsedMinutes = Math.floor(elapsedTime / 60000);
    const elapsedSeconds = ((elapsedTime % 60000) / 1000).toFixed(1);
    display.textContent = `${elapsedMinutes}:${elapsedSeconds}`;
    elapsedTime = Date.now() - startTime;
}

function callAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            alert(`API Response: ${data.result}`);
        })
        .catch(error => {
            console.error('Error fetching API:', error);
        });
}

startBtn.addEventListener('click', () => {
    startTimer();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    stopTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
    resetTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

apiBtn.addEventListener('click', () => {
    callAPI();
});