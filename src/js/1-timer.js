import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const timerContainer = document.querySelector('.timer');

buttonEl.disabled = true;
let userSelectedDate;
let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= new Date()) {
      window.alert('Please choose a date in the future');
      return;
    } else {
      buttonEl.disabled = false;
    }
  },
};

flatpickr(inputEl, options);

buttonEl.addEventListener('click', () => {
  const now = new Date().getTime();
  const timeDifference = userSelectedDate.getTime() - now;

  if (timeDifference > 0) {
    startCountdown(timeDifference);
  } else {
    window.alert('Please choose a date in the future');
  }
});

function startCountdown(timeDifference) {
  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    updateTimerUI(days, hours, minutes, seconds);
    timeDifference -= 1000;

    if (timeDifference < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

function updateTimerUI(days, hours, minutes, seconds) {
  timerContainer.querySelector('[data-days]').textContent =
    formatTimeUnit(days);
  timerContainer.querySelector('[data-hours]').textContent =
    formatTimeUnit(hours);
  timerContainer.querySelector('[data-minutes]').textContent =
    formatTimeUnit(minutes);
  timerContainer.querySelector('[data-seconds]').textContent =
    formatTimeUnit(seconds);
}

function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
