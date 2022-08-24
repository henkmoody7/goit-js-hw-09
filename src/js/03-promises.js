const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);
console.dir(formRef.elements.delay.value);
const firstDelay = formRef.elements.delay;
function onSubmit(e) {
  e.preventDefault();
  // createPromise(position, delay);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, firstDelay);
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
