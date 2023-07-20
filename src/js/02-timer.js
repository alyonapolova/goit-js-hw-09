import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputId: document.querySelector('#datetime-picker'),
};

const options = {
  enableTime: true, //Вмикає засіб вибору часу
  time_24hr: true, //Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), //Встановлює початкові вибрані дати. Якщо ви використовуєте режим: "кілька" або діапазонний календар, надайте масив об’єктів Date або масив рядків дат, які слідують за вашим dateFormat. В іншому випадку ви можете надати один об’єкт Date або рядок дати.
  minuteIncrement: 1, //Регулює крок для введення хвилин (включно з прокручуванням)
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);
