import { animateMascot } from './animateMascot';

const firstScreen = document.querySelector('.first-screen');
const mainScreen = document.querySelector('.main-screen');
const mainButton = document.querySelector('.first-screen__button');
const logoMain = document.querySelector('.logo__main');
const logoLeft = document.querySelector('.logo__left');
const logoRight = document.querySelector('.logo__right');

const nextScreen = () => {
  firstScreen.style.opacity = '0';
  mainScreen.classList.remove('visually-hidden');
  setTimeout(() => {
    firstScreen.classList.add('visually-hidden');
    animateMascot();
  }, 500);

  window.removeEventListener('keydown', nextScreenEnter);
};

const nextScreenEnter = () => {
  if (event.keyCode === 13) {
    nextScreen();
  }
};

const initFirstScreen = () => {
  logoMain.style.opacity = '1';

  setTimeout(() => {
    logoLeft.classList.add('tilt-in-fwd-tr');
  }, 400);

  setTimeout(() => {
    logoRight.classList.add('tilt-in-fwd-tl');
  }, 800);

  setTimeout(() => {
    mainButton.style.opacity = '1';
  }, 1200);

  mainButton.addEventListener('click', () => {
    nextScreen();
  });

  window.addEventListener('keydown', nextScreenEnter);
};

export { initFirstScreen };
