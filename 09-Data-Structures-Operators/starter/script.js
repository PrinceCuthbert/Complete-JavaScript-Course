'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  console.log(flight);
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

// console.log(ordersSet.has('Pizza'));

// Strings
// Strings
// Strings
// Strings

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(8, 16));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle Seats

//   const s = seat.slice(-1);
//   // if (s === 'B' || s === 'E') console.log('You got a middle Seat 😁');
//   // else console.log('You got lucky 🎉');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name

// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const LowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = LowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // Replacing parts of strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23.Boarding door 23!';
// // console.log(announcement.replace('door', 'gate').replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log(`Part of a new Airbus family`);
// }

// // Practice exercise

// const checkBaggages = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are  not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggages('I have a laptop, some Food and a pocket knife ');
// checkBaggages('Socks and camera');
// checkBaggages('Got some snacks and a gun for protection');

// const passengerName = function (name) {
//   const passenger = name;
//   const passengerLower = passenger.toLowerCase();
//   const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
// };

// passengerName('jOnAs');

// Working with string Part 2
// Working with string Part 2

// // Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';
// const passengerNewName = function (name) {
//   const passengerName = name.toLowerCase;
//   // const passengerCorrectName = passengerName.split(' ');
//   for (const n of name) {
//     n[0].toUpperCase() + n.slice(1);
//   }
// };
// passengerNewName('passenger');

const capitalizateName = function (name) {
  const nom = name.split('');
  // const nomLower = name.toLowerCase();
  const namesUpper = [];

  for (const name of nom) {
    // namesUpper.push(name[0].toUpperCase() + name.slice(1));

    namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizateName('Jessica ann Smith davies');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30 + '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// Function for masking last 4 number

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
  console.log(maskCreditCard);
};

console.log(maskCreditCard('466557876'));
console.log(maskCreditCard(4677645678765434));

// Repeat method
// Repeat method
// Repeat method

const message2 = 'Bad Weather... All Departures Delayed    ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There is ${n} planes in lines ${'✈️'.repeat(n)}`);
};
planesInLine(8);
planesInLine(9);
planesInLine(2);
planesInLine(6);

// Maps
// Maps
// Maps

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again'],
]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert Map to Array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are Open:D')
//   .set(false, 'We are closed:(');

// console.log(rest.get('name'));
// // console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// Using Arrays as map keys

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(arr));

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Rissoto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('Ishimwe Prince Cuthbert').size);

// ordersSet.clear();
// console.log(ordersSet);
// console.log(ordersSet[8]);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// // Property values

// const values = Object.values(openingHours);
// // console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On {key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // else console.log(`not valid`);

// // example of optional chain
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // for (const [i, day] of days.entries()) {
// //   // console.log(`${i + 1}:${day}`);
// // }

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.openingHours.mon.open); // (This can not work because its not using optional chaining, the argument before .open doesnt exist so .open cant also exist)

// With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// // console.log(...menu.entries());

// console.log('--------------Trial---------------');
// const address = [...restaurant.categories, ...restaurant.starterMenu];
// // console.log(address);

// // for (const item of address) console.log(item);

// // Use ANY data type, return ANY data type,short-circuiting
// // console.log('--------OR----------');
// // console.log(3 || 'Jonas');
// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || '' || 'hello' || 23 || null);

// // restaurant.numGuests = 23;
// // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guest1);
// // Nullish Coalescing Operator

// // console.log('----------Nullish Coalescing Operator-----------');
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);
// Nullish values are null and undefined. (NOT 0 or '')

// console.log('------AND------');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.orderPizza('mushrooms', 'onions', 'Olives', 'Spinach');
// restaurant.orderPizza('[mushrooms, vegetables]', 'onions', 'olives');

// // Spread, Because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // console.log(arr);

// // REST, Because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// // console.log(weekDays);

// // 2)Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
//   console.log(numbers);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole,21',
//   starterIndex: 1,
// });

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//////////////////////////////////
// The Spread Operator (...)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Schmedtmann`);  // Error

// Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; // renaming the properties while destructuring
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(fri);
// console.log(o, c);

// Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// Coding Challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Attempting Challenge

// 1.Creating one Array for each team1.Creating one Array for each team
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.Making 1st element gk, and the rest as array
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2, fieldPlayers2);

// // 3.Array containing all players
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.Final list of players + substitutes
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.Variable for each odd

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.PrintGoals Function

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller');
// // console.log(goals);

// // randomplayer for team1

// // 7.Which team is likely to win

// team1 < team2 && console.log('Team 1 is most likely to win');
// team1 < team2 && console.log('Team 1 is most likely to win');

// Coding Challenge #3
// Coding Challenge #3
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1)Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. Deleting a yellow card at 64th min
// gameEvents.delete(64);
// console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console
//   .log
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
//   ();

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console
//   .log
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
//   ();

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL

// for (const [key, event] of gameEvents) {
//   if (key < 45) {
//     // console.log(`[Fist Half] ${key}: ${event} `);
//   } else if (key > 48) {
//     // console.log(`[Second Half] ${key}: ${event}`);
//   }
//     };
