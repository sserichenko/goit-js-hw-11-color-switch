const body = document.querySelector('body');
const startButton  = document.querySelector('[data-action="start"]');
const stopButton  = document.querySelector('[data-action="stop"]');
let customTimerId = null;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return  Math.floor(Math.random() * (max - min + 1) + min);
};
let min = 0;
let max = colors.length -1;


const changerColor = {
  start(){
    startButton.disabled = !this.isActive;
    stopButton.disabled = this.isActive;
    customTimerId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 1000);
  },
  stop(){
    clearInterval(customTimerId);
    startButton.disabled = this.isActive;
    stopButton.disabled = !this.isActive;
  }
};
stopButton.disabled = true;
startButton.addEventListener('click', changerColor.start.bind(changerColor));
stopButton.addEventListener('click', changerColor.stop.bind(changerColor));
