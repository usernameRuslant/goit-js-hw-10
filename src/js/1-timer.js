import { refs } from './refs.js';
import { timer, onClick } from './timer-timer.js';
import { options } from './timer-picker.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

flatpickr(refs.inputTimer, options);
refs.timerBtn.addEventListener('click', onClick);
