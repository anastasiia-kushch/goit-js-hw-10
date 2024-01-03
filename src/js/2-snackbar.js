import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = formEl.querySelector('input[name="delay"]');
  const stateInput = formEl.querySelector('input[name="state"]:checked');
  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  if (isNaN(delay) || delay <= 0) {
    console.error('Invalid delay value');
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      } else {
        console.error('Invalid state');
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,
        color: '#32c682',
        messageColor: '#ffffff',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: '❌',
        message: `Rejected promise in ${delay}ms`,
        color: '#fe5449',
        messageColor: '#ffffff',
      });
    });
});
