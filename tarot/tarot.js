'use strict';
const cards = document.querySelectorAll('.card');

function cardSet() {
  cardStock();

  setTimeout(() => {
    cardSpread();
  }, 2000);
}

function cardSpread() {
  for (let i = 0; i < cards.length; i++) {
    const val = Math.floor(i / 6);
    setTimeout(() => {
      cards[i].style.top = `${178 * val}px`;

      if (i < 6) {
        cards[i].style.left = `${115 * i}px`;
      } else {
        cards[i].style.left = `${115 * (i - 6 * val)}px`;
      }
    }, i * 50);
  }
}

function cardStock() {
  for (let i = 0; i < cards.length; i++) {
    const val = Math.floor(i / 6);
    setTimeout(() => {
      cards[i].style.cssText = 'top: 42%; left: 42%';
    }, i * 50);
  }
}

function getCardInfo() {
  let activeCard = null;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('active')) {
      activeCard = cards[i];
      break;
    }
  }

  console.log('###', activeCard);

  popupOpen();

  setTimeout(() => {
    location.href = 'complete.html';
  }, 3000);
}

function popupOpen() {
  const popup = document.querySelector('.popup-container');

  popup.style.cssText = 'display: flex;';

  setTimeout(() => {
    document.querySelector('.popup-container').classList.add('active');
  });
}

// function popupClose() {
//   const popup = document.querySelector('.popup-container');

//   popup.classList.remove('active');

//   setTimeout(() => {
//     popup.style.cssText = 'display: none;';
//   }, 300);
// }
