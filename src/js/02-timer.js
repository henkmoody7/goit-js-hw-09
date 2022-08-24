import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateTimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
let timerId = null;
let chosenDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0].getTime();
    if (chosenDate < options.defaultDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.dateTimePicker, options);

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  refs.dateTimePicker.disabled = true;
  timerId = setInterval(() => {
    const currentDate = Date.now();
    const deltaTime = chosenDate - currentDate;

    if (deltaTime <= 0) {
      clearInterval(timerId);
      return;
    }
    renderTimer(convertMs(deltaTime));
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(timerId);
  const reset = convertMs(00);
  renderTimer(reset);
  refs.dateTimePicker.disabled = false;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function renderTimer({ days, hours, minutes, seconds }) {
  refs.timerDays.textContent = days;
  refs.timerHours.textContent = hours;
  refs.timerMinutes.textContent = minutes;
  refs.timerSeconds.textContent = seconds;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
