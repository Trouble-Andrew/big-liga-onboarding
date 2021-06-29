import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { initFirstScreen } from './modules/init-first-screen';
import { toggleScreen } from './modules/toggle-screen';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initFirstScreen();
toggleScreen();

const button = document.querySelector('.first-screen__button');

const changeButtonText = () => {
  if (document.documentElement.clientWidth <= 768) {
    button.innerHTML = 'Кликните на экран';
  } else {
    button.innerHTML = 'Нажмите на Enter';
  }
}

changeButtonText();

window.addEventListener('resize', () => {
  changeButtonText();
});
