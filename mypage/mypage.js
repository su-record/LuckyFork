'use strict';

function progress(size) {
  const el = document.querySelectorAll('.progress-text');
  const x = document.querySelectorAll('.progress-circle-prog');

  for (let i = 0; i < size.length; i++) {
    x[i].style.strokeDasharray = size[i] * 4.65 + ' 999';
    el[i].dataset.progress = size[i];

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

setTimeout(progress([20, 40, 68]), 100);

function goHistory(target) {
  location.href = `/history/?type=${target}`;
}

function goStore(target) {
  location.href = `/store/?type=${target}`;
}
