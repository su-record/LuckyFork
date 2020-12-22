'use strict';

function progress(size) {
  const progress = document.querySelectorAll('.progress');
  const el = document.querySelectorAll('.progress-size');
  const x = document.querySelectorAll('.progress-circle-prog');

  for (let i = 0; i < progress.length; i++) {
    x[i].style.strokeDasharray = size[i] * 4.65 + ' 999';
    el[i].dataset.progress = size[i];

    if (size[i] <= 25) {
      progress[i].classList.add('level-min');
    } else if (size[i] > 25 && size[i] <= 45) {
      progress[i].classList.add('level-low');
    } else if (size[i] > 45 && size[i] <= 65) {
      progress[i].classList.add('level-middle');
    } else if (size[i] > 65 && size[i] <= 85) {
      progress[i].classList.add('level-high');
    } else if (size[i] > 85) {
      progress[i].classList.add('level-max');
    }
    counting(el[i], size[i]);
  }
}

function counting(el, size) {
  const from = el.dataset.progress;
  const start = new Date().getTime();

  setTimeout(function () {
    const now = new Date().getTime() - start;
    let progress = now / 700;

    const result =
      size > from
        ? Math.floor((size - from) * progress + from)
        : Math.floor(from - (from - size) * progress);
    el.innerHTML =
      progress < 1
        ? `${result}<span class="percent">%</span>`
        : `${size}<span class="percent">%</span>`;
  }, 10);
}

setTimeout(progress([20, 40, 68, 95, 74]), 100);
