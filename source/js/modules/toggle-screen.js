const leftScreen = document.querySelector('.left-screen');
const rightScreen = document.querySelector('.right-screen');

const toggleScreen = () => {
  leftScreen.addEventListener('click', () => {
    rightScreen.classList.add('right-screen--visible');
  });

  rightScreen.addEventListener('click', () => {
    rightScreen.classList.remove('right-screen--visible');
  });
};

export { toggleScreen };
