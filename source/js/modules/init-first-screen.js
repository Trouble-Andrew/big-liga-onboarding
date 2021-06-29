const firstScreen = document.querySelector('.first-screen');
const mainButton = document.querySelector('.first-screen__button');
const logoMain = document.querySelector('.logo__main');
const logoLeft = document.querySelector('.logo__left');
const logoRight = document.querySelector('.logo__right');

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
    firstScreen.style.opacity = '0';
    setTimeout(() => {
      firstScreen.classList.add('visually-hidden');
    }, 500);
  });
};

export { initFirstScreen };
