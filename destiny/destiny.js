'use strict';
const moreAnchor = document.querySelectorAll('.summary-item .more a');

function goExplanation() {
  setTimeout(() => {
    location.href = 'detail.html';
  }, 100);
}

for (let i = 0; i < moreAnchor.length; i++) {
  moreAnchor[i].addEventListener('click', goExplanation);
}
