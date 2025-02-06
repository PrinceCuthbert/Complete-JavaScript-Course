'use strict';

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// Functions accepting callback functions
// Functions accepting callback functions
// Functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// // transformer('JavaScript is the best!', upperFirstWord);
// // console.log(`------------------------------------`);
// // transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Personal challenge on callback functions
// Personal challenge on callback functions
// Personal challenge on callback functions

// one function to reverse the string, another to capitalize it

const reversedString = function (str) {
  return str.split('').reverse().join('');
};

const capitalizeString = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const stringTransformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string :${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

stringTransformer('JavaScript is the best!', reversedString);

// Functions returning functions
// Functions returning functions
// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hey')('Jonas');

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

console.log(`-------Challenge----`);

// Challenge
// Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

// Call and apply Methods
// Call and apply Methods
// Call and apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}.`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(238, 'Prince Cuthbert');
// lufthansa.book(635, 'John Smith');

// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does not works( use call instead)
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const rwandAir = {
//   airline: 'RwandAir',
//   iataCode: 'RW',
//   bookings: [],
// };

// book.call(rwandAir, 10, 'Cuthbert');
// console.log(rwandAir);

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book.call(lufthansa, 23, 'Cuthbert');

const rwandAir = {
  airline: 'rwandAir',
  iataCode: 'RW',
  bookings: [],
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book.call(rwandAir, 23, 'Prince');

// Apply method
// Apply method

const flightData = [583, 'George Cooper'];
book.apply(rwandAir, flightData);
// console.log(rwandAir);

// book.call(rwandAir, ...flightData);

// Bind method
// Bind method
// Bind method

const bookRt = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookRw = book.bind(rwandAir);

// bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schemdtmann');

bookEW23('Martha Cooper');

// With Event Listeners
// With Event Listeners
// With Event Listeners

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Another alternative
// Another alternative
// Another alternative

// document
//   .querySelector('.buy')
//   .addEventListener('click', () => lufthansa.buyPlane());

// Partial applications
// Partial applications
// Partial applications

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
// Challenge

// Higher order function way
const addedTax = value => value + value * 0.1;
const addedVAT = value => value + value * 0.23;

const addingTax = function (value, fn) {
  console.log(
    `From this amount of ${value}, the tax of ${fn.name} to be given is ${fn(
      value
    )}`
  );
};

addingTax(200, addedTax);

addingTax(23, addVAT);

// Function returning another functionn

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: [],

  registerNewAnswer() {
    const answer = prompt(`What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number) `);

    if (answer === null || answer.trim() === '') {
      console.log('Poll was canceled. No vote recorded.');
      return;
    }

    const numericAnswer = Number(answer);

    if (isNaN(numericAnswer)) {
      console.log('Invalid input. Please enter a valid number.');
      return;
    }

    switch (numericAnswer) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.answers.push(numericAnswer);
        console.log(`You selected ${this.options[numericAnswer]}`);
        break;
      default:
        console.log('Invalid input. Please enter a number between 0 and 3.');
        return;
    }

    // Display results after each vote
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

// Example usage:
// poll.registerNewAnswer();
// console.log(poll.answers); // Displays collected answers

// Add event listener to the button with class '.poll'
// document
//   .querySelector('.poll')
//   .addEventListener('click', () => poll.registerNewAnswer());

// Immediately invoked Function Expressions
// Immediately invoked Function Expressions
// Immediately invoked Function Expressions

const runOnce = function () {
  console.log(`This will never run again`);
};

// runOnce();

// runOnce();

(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log(`This will ALSO never run again`))();

{
  var notPrivate = 46;
}

console.log(notPrivate);
// console.log(isPrivate);

console.log(`----closures---`);

// Closures: makes it possible for the function to remember everything(variables) that function had at the birth
// Closures
// Closures

const secureBooking = () => {
  let passengerCount = 0;
  return () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// secureBooking(12);

const booker = secureBooking();
booker();
booker();
booker();

// closure
// closure

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = () => {
  const b = 777;
  f = () => {
    console.log(b * 2);
  };
};

g();
f();
// console.dir(f);

// Re-assigning f function
h();
f();
// console.dir(f);

// Example 2
// Example 2

const perGroup = 1000;

const boardPassengers = function (n, wait) {
  // const perGroup = n / 3;

  console.log(`Will start boarding in ${wait} seconds.`);

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
};

boardPassengers(180, 2);

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

// setTimeout(function () {
//   console.log('Hello Cuthbert');
// }, 1600);

// Coding Challenge
// Coding Challenge
const colorChange = document.querySelector('h1'); // Select the body element

colorChange.addEventListener('click', () => {
  colorChange.style.color = 'blue'; // Change the color of text in the body to blue
});
