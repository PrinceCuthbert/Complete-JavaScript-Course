'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Login part
// Login part

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    // Display movements
    displayMovements(account1.movements);
    // Display balance

    calcDisplayBalance(currentAccount.movements);
    // Diplay summary
    calcDisplaySummary(currentAccount);
  }
});

const displayMovements = function (movements) {
  // Removing the dates and days ago
  // Removing the dates and days ago

  containerMovements.innerHTML = '';

  // Making the movements visible
  // Making the movements visible
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
          </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(currentAccount);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

console.log(createUserName(accounts));

console.log(accounts);

// Template literal
// Template literal
// Template literal

// const multiLineString = `My favorite book
// is Bible, having
// a lot of wisdom`;
// console.log(multiLineString);

// const greet = function (name, age) {
//   const response = `Hello my name is ${name},and I'm ${age} years old.`;
//   return response;
// };

// console.log(greet('Prince', 12));

// Example usage:
// const nom = 'Alice';
// console.log(
//   formatDate`Hello, ${nom}. Today's date is ${new Date().toLocaleDateString()}.`
// );

// console.log(`Now its ${new Date().toLocaleTimeString()}`);

// function startClock() {
//   setInterval(() => {
//     console.clear(); // Clear the console for a clean output
//     console.log(`Now it's ${new Date().toLocaleTimeString()}`);
//   }, 1000); // Update every second (1000 milliseconds)
// }

// // Start the clock
// startClock();

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// console.log(`-----SPLICE------`);
// console.log(`-----SPLICE------`);

// // SPLICE
// // SPLICE
// // SPLICE

// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// // CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// // JOIN
// // JOIN

// console.log(letters.join('-'));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`---------forEach Method----------`);

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
//   }
// });

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`yoou deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(`-------forEach--------`);

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// console.log(`------Method 2----`);

// movements.forEach(function (mov, i, arr) {
//   if (mov < 0) {
//     console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(mov)} `);
//   } else {
//     console.log(`Transaction ${i + 1}: You deposited ${mov}`);
//   }
// });

// For each doesn't use break, if needed stick to for loop

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  // console.log(`${key}: ${value}`);
});

// Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  // console.log(`${_}: ${value}`);
});

// Coding Challenge
// Coding Challenge
// Coding Challenge

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
 For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
 and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

*/
// 1st question
// 1st question
const dogsKate = [9, 16, 6, 8, 3];
const dogsJulia = [3, 5, 2, 12, 7];
// console.log(dogsJulia);

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliacorrect = dogsJulia.slice(1, -2);
  console.log(dogsJuliacorrect);

  // 2nd question
  // 2nd question

  const dogs = [...dogsJuliacorrect, ...dogsKate];
  console.log(dogs);

  // 3rd question
  // 3rd question
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy, and is ${dog} years old.`);
    }
  });
};
// 4th question
// 4th question

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Map method
// Map method
// Map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

const movementsUSDfor = [];

// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, arr, i) =>
    `Movement ${i + 1}:You ${mov > 0 ? 'deposited ' : 'withdrawal'} ${Math.abs(
      mov
    )}`
);

// console.log(movementsDescriptions);

const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposit);

const depositFor = [];

for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

console.log(`----withdrawal for filter---`);
const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

console.log(`--withdrawals for for----`);

const withdrawalFor = [];
for (const mov of movements) {
  if (mov < 0) withdrawalFor.push(mov);
}

console.log(withdrawalFor);

console.log(`---Reduce Method---`);

console.log(movements);

// accumulator -->snowball

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;

console.log(balance2);

// Maximum number
// Maximum number
// Maximum number

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate 
the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogsAge) {
  const humanAges = dogsAge.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// The chaining method
// The chaining method

const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
