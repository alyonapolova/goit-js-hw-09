// const formEl = document.querySelector('form');
// const inputEl = document.querySelectorAll('input');
// // console.log(inputEl);
// let newEl = {};
// let DELAY;
// console.log(DELAY);
// formEl.addEventListener('submit', formComplete);

// function formComplete(event) {
//   event.preventDefault();

//   inputEl.forEach(element => {
//     newEl[element.name] = element.value;
//   });
//   console.log(newEl);
// }

function createPromise(position, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, 1000)
  );
}

createPromise(5, 1000)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
