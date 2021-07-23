'use strict';

// open up modal window when click the button
// modal window is hidden by default

const app = {};
app.btnsOpenmodal = document.querySelectorAll('.show-modal');
app.btnCloseModal = document.querySelector('.close-modal');
app.modal = document.querySelector('.modal');
app.overlay = document.querySelector('.overlay');

app.open = function () {
  app.modal.classList.remove('hidden');
  app.overlay.classList.remove('hidden');
};

app.close = function () {
  app.modal.classList.add('hidden');
  app.overlay.classList.add('hidden');
};

app.openModal = function () {
  // for (let item of app.btnsOpenmodal) {
  //   item.addEventListener('click', function () {
  //     app.modal.classList.remove('hidden');
  //     app.overlay.classList.remove('hidden');
  //   });
  // }
  for (let i = 0; i < app.btnsOpenmodal.length; i++) {
    app.btnsOpenmodal[i].addEventListener('click', app.open);
  }
};

app.closeModal = function () {
  app.btnCloseModal.addEventListener('click', app.close);
};

app.closeModalOverlay = function () {
  app.overlay.addEventListener('click', app.close);
};

app.closeModalKey = function () {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !app.modal.classList.contains('hidden')) {
      console.log(e);
      app.close();
    }
  });
};

app.init = function () {
  app.openModal();
  app.closeModal();
  app.closeModalOverlay();
  app.closeModalKey();
};

app.init();
