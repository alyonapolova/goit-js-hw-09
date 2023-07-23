import Notiflix from 'notiflix';

const formEl = document.querySelector('form');
const inputEl = document.querySelectorAll('input');
//console.log(formEl.elements);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const intervalId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
formEl.addEventListener('submit', formComplete);

function formComplete(event) {
  event.preventDefault();
  const formElements = event.target;

  const delay = Number(formElements.elements['delay'].value);
  const step = Number(formElements.elements['step'].value);
  const amount = Number(formElements.elements['amount'].value);

  for (let i = 0; i < amount; i += 1) {
    let currentDelay = step !== 0 ? delay + i * step : delay;
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  formEl.reset();
}
