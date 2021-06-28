import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

const firstScreen = document.querySelector('.first-screen');
const mainButton = document.querySelector('.first-screen__button');
const leftScreen = document.querySelector('.left-screen');
const rightScreen = document.querySelector('.right-screen');

mainButton.addEventListener('click', () => {
  firstScreen.style.opacity = '0';
  setTimeout(() => {
    firstScreen.classList.add('visually-hidden');
  }, 500);
});

leftScreen.addEventListener('click', () => {
  rightScreen.classList.add('right-screen--visible');
});

rightScreen.addEventListener('click', () => {
  rightScreen.classList.remove('right-screen--visible');
});
