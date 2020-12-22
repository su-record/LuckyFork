'use strict';
const mainEl = document.getElementById('main');
const container = document.querySelector('.container');
const cookieImg = document.querySelector('#cookieImg');

function cookieShake(evt) {
  evt.classList.add('shake');

  setTimeout(() => {
    cookieImg.src = '/static/images/icon_cookie2.png';
  }, 1500);

  setTimeout(() => {
    evt.classList.remove('shake');
    cookieImg.src = '/static/images/icon_cookie3.png';

    document.querySelector('.result').style.display = 'block';
    document.querySelector('.point').innerText = `${5}점`;

    mainEl.scrollTo(0, container.scrollHeight);
  }, 3000);
}
