'use strict';
function accordion(accordion) {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');

      const panel = this.nextElementSibling;

      console.log('####', panel.scrollHeight);

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}

function addActive(btns, callback = null) {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
      }

      this.classList.add('active');

      if (callback) {
        setTimeout(() => {
          callback();
        });
      }
    });
  }
}

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.querySelectorAll('.tabContent');

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

const getKeyData = (target) => {
  let keyname = null;
  let text = null;
  let el = null;

  for (let i = 0; i < target.length; i++) {
    if ([...target[i].classList].includes('active')) {
      keyname = target[i].dataset.keyname;
      text = target[i].textContent;
      el = target[i];
      break;
    }
  }

  return {
    keyname,
    text,
    el,
    data: {},
  };
};
