const options = { enableTime: true };
let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener("click", function () {
  timeMinut = parseInt(timerInput.value) * 60;
});
const button = document.getElementById("button");
button.disabled = false;

function pad(value) {
  return String(value).padStart(2, "0");
}

timer = setInterval(function () {
  seconds = pad(timeMinut % 60);
  minutes = pad((timeMinut / 60) % 60);

  if (timeMinut <= 0) {
    clearInterval(timer);
    alert("time is over");
    button.disabled = false;
  } else {
    let strTimer = `${Math.trunc(minutes)}:${seconds}`;
    timerShow.innerHTML = strTimer;
    button.disabled = true;
  }
  --timeMinut;
}, 1000);
