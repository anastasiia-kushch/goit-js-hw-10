import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
buttonEl.disabled = true;

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

buttonEl.addEventListener('click', )

onClose((selectedDates) => {
  userSelectedDate = selectedDates[0];
  
  if(userSelectedDate !== new Date()) {
    window.alert("Please choose a date in the future");
    return;
  } else {
    buttonEl.disabled = true;
  }

});


