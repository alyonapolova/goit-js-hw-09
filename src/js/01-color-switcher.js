const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

console.log(refs.startBtn);
console.log(refs.stopBtn);

refs.startBtn.addEventListener('click', changeBodyColor);
refs.stopBtn.addEventListener('click', stopChangeBodyColor);

let intervalId = null;
let isActive = false;
refs.startBtn.disabled = false;
refs.stopBtn.disabled = true;

function changeBodyColor() {
  const color = getRandomHexColor();

  if (isActive) {
    return;
  }

  isActive = true;
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  console.log('Interval ID:', intervalId);
}

function stopChangeBodyColor() {
  clearInterval(intervalId);
  isActive = false;
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  console.log('Interval ID:', intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
