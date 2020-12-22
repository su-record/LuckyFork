'use strict';
const locationPath = location.pathname;
const form = document.getElementById('formData');
const checkes = document.querySelectorAll('input[type="checkbox"]');

if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (locationPath.indexOf('regist') >= 0) {
      toRegist();
    } else {
      toSignin();
    }
  });
}

function toSignin() {
  for (let i = 0; i < checkes.length; i++) {
    if (!checkes[i].checked) {
      checkes[i].checked = !checkes[i].checked;
    }
  }

  console.log('#### 로그인');

  setTimeout(() => {
    location.href = 'regist.html';
  }, 1000);
}

function toRegist() {
  console.log('#### 가입');
}

function login(evt) {
  const keyname = evt.dataset.keyname;

  if (keyname === 'kakao') {
    console.log('###', keyname);
  } else if (keyname === 'facebook') {
    console.log('###', keyname);
  } else if (keyname === 'google') {
    console.log('###', keyname);
  } else if (keyname === 'naver') {
    console.log('###', keyname);
  }

  popupOpen();
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
  }, 300);
}

function goMain() {
  location.replace('/main');
}
