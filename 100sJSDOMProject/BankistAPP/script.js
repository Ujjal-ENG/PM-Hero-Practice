'use strict';

///////////////////////////////////////
// Modal window

// querySecltion common function

function getSelector(selector) {
  const SL = document.querySelector(selector);
  return SL;
}

const modal = getSelector('.modal');
const overlay = getSelector('.overlay');
const btnCloseModal = getSelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = getSelector('.btn--scroll-to');
const section1 = getSelector('#section--1');
const nav = getSelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');

const tabContainer = getSelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

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

btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
getSelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    getSelector(id).scrollIntoView({ behavior: 'smooth' });
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
getSelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// style the message
message.style.backgroundColor = '#37383d';
message.style.height = '55px';
message.style.fontSize = '20px';

// design the operations tabs
tabContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // remove active classes
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(e => e.classList.remove('operations__content--active'));

  // Active the content area
  getSelector(`.operations__content--${clicked.dataset.tab}`).classList.add(
    'operations__content--active'
  );
});

// Menu fade animation activate
const handleHover = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibilings.forEach(el => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', e => {
  handleHover(e, 1);
});

// sticky navigation
const stickyNav = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
headerObserver.observe(header);
