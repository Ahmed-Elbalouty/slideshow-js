let image = document.getElementsByTagName("img")[0];
let previousButton = document.getElementsByClassName("previous")[0];
let slideButton = document.getElementsByClassName("slide")[0];
let nextButton = document.getElementsByClassName("next")[0];
let stopButton = document.getElementsByClassName("stop")[0];

let counter = 1;
let slider;

function slide() {
  slider = setInterval(function () {
    image.src = `./Images/${counter}.jpg`;
    counter++;
    if (counter >= 8) {
      counter = 1;
    }
  }, 400);
}

function stop() {
  clearInterval(slider);
}

function previous() {
  if (counter === 1) {
    counter = 8;
  } else {
    counter--;
  }
  image.src = `./Images/${counter}.jpg`;
}

function next() {
  if (counter === 8) {
    counter = 1;
  } else {
    counter++;
  }
  image.src = `./Images/${counter}.jpg`;
}
