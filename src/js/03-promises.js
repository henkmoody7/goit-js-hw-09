import Notiflix from 'notiflix';
const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);
let timerId = null;

function onSubmit(e) {
  e.preventDefault();

  let firstDelay = Number(formRef.elements.delay.value);
  const delayStep = Number(formRef.elements.step.value);
  const amount = Number(formRef.elements.amount.value);
  let promisePosition = 0;
  timerId = setInterval(() => {
    promisePosition += 1;
    createPromise(promisePosition, firstDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += delayStep;

    if (amount === promisePosition) {
      clearInterval(timerId);
    }
  }, delayStep);

  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
