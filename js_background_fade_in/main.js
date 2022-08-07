const loadText = document.querySelector(".loading-text");
const fadeInBg = document.querySelector(".bg");

let load = 0;

let loadInterval = setInterval(blurring, 15);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(loadInterval);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  fadeInBg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
