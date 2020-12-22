'use strict';

// const rules = ['111', '011', '010', '001', '000', '100', '101', '110'];
// const ruleType = document.querySelectorAll('.rule-area > div');
const ruleBar = document.querySelectorAll('.rule-area span');
let ruleCnt = 0;

// function getRules() {
//   popupOpen();

//   setTimeout(() => {
//     popupClose();

//     for (let i = 0; i < ruleType.length; i++) {
//       ruleType[i].setAttribute('class', '');
//       ruleType[i].classList.add('rule-open');
//       ruleType[i].classList.add(`rule-${rules[Math.floor(Math.random() * 8)]}`);
//     }
//   }, 3000);
// }

function getRules() {
  if (ruleCnt <= 5) {
    ruleBar[ruleCnt].classList.add(`rule-${Math.floor(Math.random() * 2)}`);

    ruleCnt++;
  } else {
    popupOpen();

    setTimeout(() => {
      popupClose();
      ruleCnt = 0;
    }, 2000);
  }
}

function popupOpen() {
  const popup = document.querySelector('.popup-container');

  popup.style.cssText = 'display: flex;';

  setTimeout(() => {
    document.querySelector('.popup-container').classList.add('active');
  });
}

function popupClose() {
  const popup = document.querySelector('.popup-container');

  popup.classList.remove('active');

  setTimeout(() => {
    popup.style.cssText = 'display: none;';
    document.querySelector('.article').style.display = 'block';
  }, 300);
}
