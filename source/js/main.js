import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { initFirstScreen } from './modules/init-first-screen';

// Utils
// ---------------------------------

ieFix();
iosVhFix();
initFirstScreen();

// Modules
// ---------------------------------

initModals();

const leftScreen = document.querySelector('.left-screen');
const rightScreen = document.querySelector('.right-screen');

leftScreen.addEventListener('click', () => {
  rightScreen.classList.add('right-screen--visible');
});

rightScreen.addEventListener('click', () => {
  rightScreen.classList.remove('right-screen--visible');
});
