'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const p = document.querySelector('.test');

const names = [' John Doe', ' John Brown', ' John Smith'];

let index = 0;

setInterval(() => {
  p.textContent = `My name is ${names[index]}.`;
  index = (index + 1) % names.length; // loop back to 0 after the last name
}, 1000); // Change every 1 second

// p.textContent = 'This is a test';
// alert('Text set');

p.style.color = 'red';
// names[i].style.color = 'green';
p.style.display = 'flex';
p.style.justifyContent = 'center';
// p.style.marginTop = '150px';

console.log(p.textContent);
