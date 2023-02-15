'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting the element

const header = document.querySelector('.header');

// creating and inserting elements

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML = `we use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!!</button>`;
header.appendChild(message);

// delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// style the message
message.style.backgroundColor = '#37383d';
message.style.height = '55px';
message.style.fontSize = '20px';