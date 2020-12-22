'use strict';
const moreAnchor = document.querySelectorAll('.summary-item .more a');

function addPartner() {
  setTimeout(() => {
    document.querySelector('.partner-add').style.display = 'none';
    document.querySelector('.info.partner').style.display = 'flex';
  }, 100);
}

function changePartner() {
  const isPartner = document.querySelector('.info.partner').style.display;

  if (!!isPartner) {
    console.log('### 상대방변경');
  } else {
    addPartner();
  }
}

function goExplanation() {
  setTimeout(() => {
    location.href = 'detail.html';
  }, 100);
}

for (let i = 0; i < moreAnchor.length; i++) {
  moreAnchor[i].addEventListener('click', goExplanation);
}
