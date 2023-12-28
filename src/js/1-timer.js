import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let userSelectedDate;

flatpickr(inputEl, options);

// Дата должна быть в будущем, иначе window.alert('Plese choose a date un the future') + неактивная кнопка старт

onClose();

userSelectedDate = selectedDates[0];