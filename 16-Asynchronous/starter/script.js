'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const p = document.querySelector('.test');

const names = [' John Doe', ' Peter Brown', ' Jonas Smith'];
const image = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

let i = 0;
const img = document.createElement('img');
document.body.appendChild(img); // Make sure the img is added to the DOM

setInterval(() => {
  img.src = image[i]; // Update the image source
  img.style.width = '100px';
  img.style.height = '100px';
  // img.style.borderRadius = '50%';
  img.style.margin = '10px';
  img.style.display = 'flex'; // This is how you apply styles like display

  i = (i + 1) % image.length; // Cycle through images
}, 3000); // Change every 1 second

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
