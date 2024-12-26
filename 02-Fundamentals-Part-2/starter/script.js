"use strict";
// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive:D ");

// Function is a reusable value
// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const orangeJuice = fruitProcessor(0, 4);
// console.log(orangeJuice);

// const noJuice = fruitProcessor(0, 0);
// console.log("No Juice,", noJuice);

// const num = Number("23");
// console.log(num);

// // Second way of function declaration

// // Function declaration

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(`years until retirement are `, yearsUntilRetirement(1991));

// My Trial
// My Trial

// function retirementAge(birthYear, firstName) {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in  ${retirement} years`;
// }

// console.log(retirementAge(2004, "ISHIMWE"));
// console.log(retirementAge(1999, "Cuthbert"));

// Function calling other functions
// Function calling other functions
// Function calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// console.log("");

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4, 6));

// trial for calling function
// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, mangoes) {
//   const applePieces = cutFruitPieces(apples);
//   const mangoPieces = cutFruitPieces(mangoes);
//   const juice = `Juice with ${applePieces} pieces of apples and ${mangoPieces} pieces of mangoes.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYeah) {
//   return 2024 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in  ${retirement} years to come.`);
//   } else if (retirement === 0) {
//     console.log(`${firstName} has retires in  this year ${2037}`);
//   } else {
//     console.log(
//       `${firstName} retired in ${Math.abs(retirement)} years ago 🎉🎉.`
//     );
//   }
// };
// console.log(yearsUntilRetirement(1977, "Jonas"));
// console.log(yearsUntilRetirement(2004, "ISHIMWE"));

// coding challenge #1
// coding challenge #1
// // coding challenge #1

// const dolphineScoreOne = 23;
// const dolphineScoreTwo = 19;
// const dolphineScoreThree = 45;
// // Koalas
// const koalasScoreOne = 23;
// const koalasScoreTWo = 13;
// const koalasScoreThree = 45;

// // Averages
// // Averages
// const dolphineScoreAverage =
//   (dolphineScoreOne + dolphineScoreTwo + dolphineScoreThree) / 3;
// const koalasScoreAverage =
//   (koalasScoreOne + koalasScoreTWo + koalasScoreThree) / 3;

// function checkWinner(dolphineScoreAverage, koalasScoreAverage) {
//   if (dolphineScoreAverage > koalasScoreAverage) {
//     console.log(
//       `Team dolphin won 🏆(${dolphineScoreAverage} vs ${koalasScoreAverage}).`
//     );
//   } else if (dolphineScoreAverage < koalasScoreAverage) {
//     console.log(
//       `Team Koalas won 🏆(${koalasScoreAverage} vs ${dolphineScoreAverage}).`
//     );
//   } else {
//     console.log(`The result is invalid, please no draws allowed.`);
//   }
// }

// console.log(
//   `the average score for Dolphine is ${dolphineScoreAverage} and that of Koalas is ${koalasScoreAverage}`
// );
// console.log(checkWinner(dolphineScoreAverage, koalasScoreAverage));

// Arrays
// Arrays
// Arrays

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);
// console.log(friends[2]);

// const y = new Array(1991, 1986, 2008, 2020);
// console.log(years);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// friends = ["Bob", "Alice"];

// const jonas = ["Jonas", "Cuthbert", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// const age4 = calcAge(years[3]);
// // const age5 = calcAge(years[4]);
// console.log(age1, age2, age3);

// I failed this challenge above
// I failed this challenge above
// I failed this challenge above

// Objects
// Objects
// Objects

// Object: are used to hold numerous kinds of CSSFontFeatureValuesRule, functions {mainly related} which are stored and accessed from one place.

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   `teacher`,
//   [`Michael`, `Peter`, `Steven`],
// ];
// console.log(jonasArray);
// const jonas = {
//   firstName: `Jonas`,
//   lastName: `Schmedtmann`,
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: [`Michael`, `Peter`, `Steven`],
// };
// console.log(jonas.friends);
// console.log(jonas.lastName);
// // Bracket Notation
// console.log(jonas["job"]);
// const nameKey = "Name";
// const workKey = "ob";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
// console.log(jonas["j" + workKey]);

// let interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firtsName, lastName, age, job, and friends"
// );
// let interestedIn =
//   "What do you want to know about Jonas? Choose between firtsName, lastName, age, job, and friends";
// console.log(interestedIn);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   // Re-prompt if the first attempt was incorrect
//   console.log(
//     "Wrong request! Please  choose between firstName, lastName, age, job, and friends"
//   );
// interestedIn = prompt(
//   "Wrong request! Please  choose between firstName, lastName, age, job, and friends"
// );
// }
// Check again if the new input matches a property in the jonas object
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   // If the second input is also invalid, display a final message
//   console.log(
//     "Invalid request. Please reload the page and try again. The user is inputing the invalid input."
//   );
//   // alert("Invalid request. Please reload the page and try again.");
// }

// #nce btn Arrays and objects, in Arrays order matters cz, its the only way we can access the object, meanwhile in Objects order doesn't matter.
// Use Arrays for more structured Data, and Objects for less structured data.?

// How to use dot to add new elements

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtmann";
// console.log(jonas);

// Challenge
// Challenge

// Jonas has 3 friends, and his best friend is called Michael

// const descJonas = `${jonas.firstName} has ${jonas.friends.length} friends namely, (${jonas.friends}), and his best friend is called ${jonas.friends[0]}`;
// console.log(descJonas);

// const jonas = {
//   firstName: `Jonas`,
//   lastName: `Schmedtmann`,
//   birthYear: 1991,
//   job: "teacher",
//   friends: [`Michael`, `Peter`, `Steven`],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${jonas.firstName} is a ${jonas.calcAge()} -years old ${
//       jonas.job
//     }, and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.getSummary());
// console.log(jonas.friends.indexOf("Steven"));
// jonas.friends.push("Allan");
// console.log(jonas.friends);

// console.log(jonas.calcAge());
// console.log("");
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge
// Challenge
// Challenge

// console.log(
//   `${jonas.firstName} is a ${jonas.age} old ${jonas.job}, and he has a driver's license ${jonas.hasDriversLicense}`
// );

// Coding Challenge
// Coding Challenge
// Coding Challenge

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const mark = {
//   fullName: `Mark Miller`,
//   mass: 78,
//   height: 1.69,
//   calcBMIMark: function () {
//     this.BMIMark = this.mass / this.height ** 2;
//     return this.BMIMark;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMIJohn: function () {
//     this.BMIJohn = this.mass / this.height ** 2;
//     return this.BMIJohn;
//   },
// };

// if (mark.calcBMIMark() > john.calcBMIJohn()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMIMark()}) is higher than ${
//       john.fullName
//     }'s BMI (${john.calcBMIJohn()})!`
//   );
// } else if (john.calcBMIJohn() > mark.calcBMIMark()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMIJohn()}) is higher than ${
//       mark.fullName
//     }'s BMI (${mark.calcBMIMark()})!`
//   );
// } else {
//   console.log(
//     `(${john.fullName}) and (${
//       mark.fullName
//     }) 's BMI are equal. (${john.calcBMIJohn()})`
//   );
// }

// LOOPS
// LOOPS
// LOOPS
// LOOPS

// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log("Lifting weights repetition 10 🏋️");

// For loop keeps running while condition is TRUE

// rep=rep+1 == rep++
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋️`);
// }

for (let rep = 1; rep <= 10; rep++) {
  // console.log("Lifting weights repetition 10 🏋️");
}
for (let num = 0; num <= 100; num++) {
  // num = 0 + num;
  // console.log(num);
}
for (let rep = 1; rep <= 10; rep++) {
  // console.log(`Lifting weights repetition 10 🏋️ ${rep}`);
}

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];
// console.log(jonas[0]);

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from Jonas Array
//   // console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// Next challenge
// Next challenge
// Next challenge

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
// console.log(ages);

const number = [10, 20, 30, 40];
const total = [];
for (let i = 0; i < number.length; i++) {
  total.push(10 + number[i]);
}
// console.log(total);

// CONTINUE AND BREAK
// console.log("-------ONLY STRINGS ARE DISPLAYED FOR CONTINUE--------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// console.log("");
// console.log("-------BREAK WITH NUMBER--------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// looping back
// looping back
// looping back

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// Creating a loop inside a loop
// Creating a loop inside a loop
// Creating a loop inside a loop

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}🏋️`);
//   }
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   // console.log(`-------start exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     // console.log(` Exercise ${exercise}: Jump for the ${rep} time`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋️`);
// }

// Rolling a dice
// Rolling a dice
// Rolling a dice

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);s

while (dice !== 6) {
  // console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    // console.log(`loop is about to end`);
  }
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE:Lifting weights repetition ${rep}🏋️`);
  rep++;
}

// Function to simulate rolling a dice
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1; // Random number between 1 and 6
}

// Function to roll the dice until we get a six
function rollUntilSix() {
  let roll;
  let count = 0;

  console.log("Rolling the dice...");

  do {
    roll = rollDice();
    count++;
    console.log(`Roll ${count}: ${roll}`);
  } while (roll !== 6);

  console.log(`It took ${count} rolls to get a six!`);
}

// Call the function
// rollUntilSix();

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋️`);
// }

// Coding challenge 04

// const tipPercentageOne = 0.15; // Tip for bills between 50 and 300
// const tipPercentageTwo = 0.2; // Tip for bills above 300

// function calcTip(bill) {
//   if (typeof bill !== "number" || bill <= 0) {
//     console.log("Please provide a valid positive number for the bill.");
//     return;
//   }

//   let tipValue, totalValue;

//   if (bill < 50) {
//     tipValue = 0; // No tip for bills less than 50
//     totalValue = bill;
//     console.log(
//       `Your bill was ${bill}, no tip was added, and the total value is ${totalValue}.`
//     );
//   } else if (bill >= 50 && bill <= 300) {
//     tipValue = bill * tipPercentageOne;
//     totalValue = bill + tipValue;
//     console.log(
//       `Your bill was ${bill}, your tip was ${tipValue.toFixed(
//         2
//       )}, and the total value is ${totalValue.toFixed(2)}.`
//     );
//   } else {
//     tipValue = bill * tipPercentageTwo;
//     totalValue = bill + tipValue;
//     console.log(
//       `Your bill was ${bill}, your tip was ${tipValue.toFixed(
//         2
//       )}, and the total value is ${totalValue.toFixed(2)}.`
//     );
//   }
// }

const tipPercentageOne = 0.15;
const tipPercentageTwo = 0.2;
let tipValue, totalValue;
function calcTip(bill) {
  if (typeof bill !== number || bill < 0) {
    console.log(`Provide a valuable number`);
  } else if (bill < 50) {
    tipValue = 0;
    totalValue = bill;
    console.log(`Your bill is ${totalValue}`);
  }
}

// Test the function with a valid input
// calcTip(275);
// calcTip(40);
// calcTip(350);
// calcTip(-350);
