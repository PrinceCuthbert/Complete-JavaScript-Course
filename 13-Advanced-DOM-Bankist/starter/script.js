'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Scroll effects
// Scroll effects
// Scroll effects

btnScrollTo.addEventListener('click', function () {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
// Page navigation
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// PAGE NAVIGATION USING EVENT DELEGATION
// PAGE NAVIGATION USING EVENT DELEGATION

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching strategy

  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault(); //prevent default behavior of anchor tag to jump to top of page
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting HTML Document
// Selecting HTML Document
// Selecting HTML Document

console.log(document.documentElement);

console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');

console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// Creating and inserting elements
// Creating and inserting elements

// .insertAdjacenHTML

const message = document.createElement('div');

// header.append(message);

// header.prepend(message);

message.classList.add('cookie-message');

message.textContent = 'We use cookies for improved function and analytics';

message.innerHTML =
  'We use cookies for improved functionality and analytics.<button button class="btn btn--close-cookie" > Got it!</button > ';

header.prepend(message);

// header.append(message.cloneNode(true));

// Initial styles before transition
message.style.opacity = '0';
message.style.transform = 'translateY(-20px)'; // Move it slightly up
message.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Smooth transition

// Delete elements
// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message);
    message.remove();
  });

//  Disappear by clicking a button
// Disappear by clicking a button

setTimeout(() => {
  header.prepend(message);

  // Trigger the transition by changing the styles
  requestAnimationFrame(() => {
    message.style.opacity = '1';
    message.style.transform = 'translateY(0)'; // Bring it back to its original position
  });

  // Add the event listener to the button after it's added to the DOM
  document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
      message.style.opacity = '0'; // Fade out smoothly
      setTimeout(() => message.remove(), 500); // Remove after fade-out
    });
}, 1000);

// Automatically remove the day element after 3 seconds
setTimeout(() => {
  message.style.opacity = '0';

  setTimeout(() => message.remove(), 3000);
}, 3000);

// Style
// Style
// Style

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes(eg:src,alt,href,...)
// Attributes(eg:src,alt,href,...)
// Attributes(eg:src,alt,href,...)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
// Non-Standard attribute
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// Data attributes

console.log(logo.dataset.versionNumber);

// Classes
// Classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
logo.classList.toggle('c');
// logo.classList.contains('c');  Not includes

console.log(logo.className);

// Don't use it cz it overrides the existing

// logo.className = 'jonas';

// Events and events handler
// Events and events handler

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListner:Great! You are reading the headind :D');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Personal trial
// const logos = document.querySelector('.nav__logo');

// logos.addEventListener('click', function (e) {
//   alert('addEventListner: You are hovering a logo :D');
// });

// Old way of adding even listener
// h1.onmouseenter = function (e) {
//   alert('addEventListner:Great! You are reading the headind :D');
// };

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

// Menu fade animation
// Menu fade animation

// mouseover: it bubbles but mouseenter doesn't bubble

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', handleHover.bind(this, 0.5));
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
  nav.addEventListener('mouseout', function () {
    nav.style.transition = 'all 1s';
  });
});
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

// document
//   .querySelector('.nav__link')
//   .addEventListener('mouseover', function (e) {
//     // this.style.backgroundColor = randomColor();
//     this.style.opacity = 0.7;
//     // console.log('LINK', e.target, e.currentTarget);
//     // console.log(e.currentTarget === this);
//     // Stop event propagation
//     e.stopPropagation();
//   });

// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('mouseover', function () {
//     this.style.opacity = 0.7;
//   });

//   link.addEventListener('mouseout', function () {
//     this.style.opacity = 1;
//   });
// });

console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// Going sideways: selecting sibling elements
// Going sideways: selecting sibling elements

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

// Tabbed content
// Tabbed content
// Tabbed content

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  // Guard clause
  // Guard clause

  // Ignore clicks where return null
  // Ignore clicks where return null

  if (!clicked) return;

  // Remove active classes
  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  // Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
