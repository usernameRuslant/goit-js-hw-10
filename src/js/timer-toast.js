import iziToast from 'izitoast';

export function showDateError() {
  iziToast.error({
    message: 'Please choose a date in the future',
    position: 'topRight',
    backgroundColor: ' #ef4040;', // ярко-красный фон
    messageColor: '#ffffff', // белый текст
    titleColor: '#ffffff',
    iconUrl: './img/x.svg',
    iconColor: '#fff',
  });
}
