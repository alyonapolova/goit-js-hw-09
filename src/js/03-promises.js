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

  let delay = Number(formElements.elements['delay'].value);
  let step = Number(formElements.elements['step'].value);
  let amount = Number(formElements.elements['amount'].value);
  //console.log(typeof delay);

  for (let i = 0; i < amount; i += 1) {
    //console.log('i:', i);
    createPromise(i + 1, delay * i + step)
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
