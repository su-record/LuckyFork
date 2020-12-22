'use strict';
const radios = document.querySelectorAll('input[name="point"]');
const form = document.getElementById('formData');

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('click', function (evt) {
    document.querySelector('.selected-point').innerText =
      evt.currentTarget.value;
    document.querySelector('.selected-notice').style.display = 'block';
  });
}

if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    setTimeout(() => {
      location.href = 'compleate.html';
    }, 1000);
  });
}

function cancel() {
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }

  document.querySelector('.selected-notice').style.display = 'none';
}

// const queryString = location.search;
// const urlParams = new URLSearchParams(queryString);
// const types = document.querySelectorAll('.type');

// if (urlParams.get('type') === 'buy') {
//   for (let i = 0; i < types.length; i++) {
//     types[i].innerText = '구매';
//   }
// } else if (urlParams.get('type') === 'charge') {
//   for (let i = 0; i < types.length; i++) {
//     types[i].innerText = '충전';
//   }
// }
