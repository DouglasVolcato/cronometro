const time = document.getElementById("time");
let seconds = 0;
let pause = true;

function count() {
  seconds = seconds + 1;
  time.innerText = formatTime(seconds);

  setTimeout(() => {
    if (pause === false) {
      count();
    }
  }, 1000);
}

function pauseCount() {
  pause = true;
}

function start() {
  if (pause) {
    pause = false;
    count();
  }
}

function reset() {
  pause = true;
  seconds = 0;
  time.innerText = formatTime(seconds);
}

function formatTime(numberInSeconds) {
  let hour = parseInt(numberInSeconds / 3200).toString()[1]
    ? parseInt(numberInSeconds / 3200)
    : `0${parseInt(numberInSeconds / 3200)}`;

  let minusHour = numberInSeconds % 3200;

  let min = parseInt(minusHour / 60).toString()[1]
    ? parseInt(minusHour / 60)
    : `0${parseInt(minusHour / 60)}`;

  let minusMinuts = minusHour % 60;

  let sec = minusMinuts.toString()[1]
    ? parseInt(minusMinuts)
    : `0${parseInt(minusMinuts)}`;

  return `${hour}:${min}:${sec}`;
}
