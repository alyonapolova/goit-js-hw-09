import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputId: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMin: document.querySelector('[data-minutes]'),
  dataSec: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    const chosenDate = flatpickrEl.selectedDates[0].getTime();

    this.isActive = true;
    refs.startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = chosenDate - currentDate;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.dataDays.textContent = days;
      refs.dataHours.textContent = hours;
      refs.dataMin.textContent = minutes;
      refs.dataSec.textContent = seconds;

      console.log(`${days}::${hours}::${minutes}::${seconds}`);
      //console.log(deltaTime);
      if (deltaTime <= 1000) {
        Notiflix.Notify.success('The time is up!');
        this.stop();
      }
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

const options = {
  enableTime: true, //Вмикає засіб вибору часу
  time_24hr: true, //Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), //Встановлює початкові вибрані дати. Якщо ви використовуєте режим: "кілька" або діапазонний календар, надайте масив об’єктів Date або масив рядків дат, які слідують за вашим dateFormat. В іншому випадку ви можете надати один об’єкт Date або рядок дати.
  minuteIncrement: 1, //Регулює крок для введення хвилин (включно з прокручуванням)
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      refs.startBtn.disabled = true;
      return;
    }

    refs.startBtn.disabled = false;

    refs.startBtn.addEventListener('click', timer.start.bind(timer));
  },
};

const flatpickrEl = flatpickr(refs.inputId, options);

function pad(value) {
  return String(value).padStart(2, '0');
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
