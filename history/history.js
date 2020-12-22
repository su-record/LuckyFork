'use strict';
const queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const types = document.querySelectorAll('.type');

if (urlParams.get('type') === 'buy') {
  for (let i = 0; i < types.length; i++) {
    types[i].innerText = '구매';
  }
} else if (urlParams.get('type') === 'charge') {
  for (let i = 0; i < types.length; i++) {
    types[i].innerText = '충전';
  }
}
