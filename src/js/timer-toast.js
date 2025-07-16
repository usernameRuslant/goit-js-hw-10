import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showDateError() {
  iziToast.error({
    message: 'Please choose a date in the future',
    position: 'topRight',
  });
}
