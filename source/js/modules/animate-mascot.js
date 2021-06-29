const lightning1 = document.querySelector('#lightning-1');
const lightning2 = document.querySelector('#lightning-2');
const lightning3 = document.querySelector('#lightning-3');
const lightning4 = document.querySelector('#lightning-4');
const roar1 = document.querySelector('#roar-1');
const roar2 = document.querySelector('#roar-2');

const animateMascot = () => {
  [lightning1, lightning2, lightning3, lightning4, roar1, roar2].forEach(
    (lightning) => {
      lightning.style.strokeDasharray = '100';
      lightning.style.animation = 'vibrate 1s linear';
    }
  );
};

export { animateMascot };
