'use strict';

// Removed the unused commented-out line

// let employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());
// // Constructor Functions and the new Operator
// class person {
//   constructor(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // Never to this!
//     this.calcAge = function () {
//       console.log(2037 - this.birthYear);
//     };
//   }
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
// }
// const jonas = new person('Jonas', 1991);
// console.log(jonas);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}
// const matilda = new person('Matilda', 2017);
// const jack = new person('Jack', 1975);
// console.log(jonas instanceof person);
// person.hey();
// console.log(matilda);
// console.log(jack);
// Class
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Never do this
//   // this.calcAge = function () {
//   //   console(2037 - this.birthYear);
//   // };
//   //   return 2037 - birthYear;
// };
// Instances
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);
// const cuth = new Person('Cuthbert', 2004);
// console.log(cuth);
// console.log(cuth.calcAge(2004));
// 1.New {} is created
// 2.function is called, this={} => This keywoerd points to newly created object
// 3.{} linked to prototype
// 4.function automatically return {}
// const jay = 'Jay';
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// Prototype
// Prototype
// Prototype

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// console.log(Person.prototype);
// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(matilda));

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log('Hello, my name is' + this.name);
// };

// let john = new Person('John');

// console.log(john.greet());

// // Constructor Function (ES5-style class)
// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// }

// // Adding methods to the prototype
// Person.prototype.greet = function () {
//   console.log('Hello, my name is ' + this.name);
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.sayGoodbye = function () {
//   console.log(this.name + ' says goodbye!');
// };

// Creating instances
// const john = new Person('John', 1990);
// const jane = new Person('Jane', 1995);

// Constructor Function (ES5-style class)
// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// }

// // Adding methods to the prototype
// Person.prototype.greet = function () {
//   console.log('Hello, my name is ' + this.name);
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.sayGoodbye = function () {
//   console.log(this.name + ' says goodbye!');
// };

// // Creating instances
// // const john = new Person('John', 1990);
// // const jane = new Person('Jane', 1995);

// john.greet(); // Hello, my name is John
// john.calcAge(); // 47 (assuming 2037 as the year)
// jane.sayGoodbye(); // Jane says goodbye!

// john.greet(); // Hello, my name is John
// john.calcAge(); // 47 (assuming 2037 as the year)
// jane.sayGoodbye(); // Jane says goodbye!

// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.greet = function () {
//   console.log(`Hello` + ' ' + this.name);
// };

// const jonas = new Person('Jonas', 1998);
// const matilda = new Person('Matilda', 1970);
// console.log(jonas);
// console.log(matilda);

// jonas.calcAge();

// jonas.greet();

// const Student = function (name, year, grade) {
//   this.name = name;
//   this.year = year;
//   this.grade = grade;
// };

// Student.prototype.attendance = function () {
//   console.log(this.name + ' ' + ', present!');
// };
// Student.prototype.yearOfStudy = function () {
//   console.log('A' + ' ' + 'year' + ' ' + this.year + ' ' + 'student');
// };

// Student.prototype.distinction = function () {
//   console.log('In' + ' ' + this.grade + ' ' + 'distinction');
// };

// const cuthbert = new Student('Cuthbert', 2, '1st');

// cuthbert.attendance();
// cuthbert.yearOfStudy();
// cuthbert.distinction();

// console.log(Student.prototype.isPrototypeOf(cuthbert));

// console.log(Student.prototype.isPrototypeOf(Student));

// Person.prototype.species = 'Home Sapiens';

// console.log(jonas, matilda);
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('name'));
// console.log(jonas.hasOwnProperty('species'));

// Student.prototype.checkDistinction = function () {
//   if (this.grade === '1st') {
//     console.log('In' + ' ' + '1st' + ' ' + 'distinction');
//   } else {
//     console.log('Not in' + ' ' + '1st' + ' ' + 'distinction');
//   }
// };

// cuthbert.checkDistinction('1st');

// console.log(jonas.hasOwnProperty('name'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototype(Top of prototype chain)
// console.log(jonas.__proto__.__proto__);

// // console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [2, 4, 6, 8, 2, 4, 9, 2, 5];
// console.log(arr.__proto__);
// console.log(arr);

// console.log(arr.push(-1));
// console.log(arr);

// arr.pop(12);
// console.log(arr);

// Library System
// Library System
// Library System

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.borrow = function () {
  console.log(this.title + 'is temporary in rent.');
};

Book.prototype.returned = function () {
  if (!this.borrowed) {
    console.log(`${this.title} has been returned`);
  } else {
    console.log(`this.title + 'is temporary in rent.'`);
  }
};

const giancoli = new Book('Giancoli', 'Physics,Giancoli');

giancoli.borrow();
giancoli.returned();

const BankAccount = function (owner, balance) {
  this.owner = owner;
  this.balance = balance;
};

BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  console.log(
    `${this.owner} deposited ${amount} and the new balance is ${this.balance}`
  );
};

BankAccount.prototype.withdrawal = function (amount) {
  if (amount > this.balance) {
    console.log(`Insufficient Balance`);
  } else {
    console.log(
      `You withdrew ${amount}, and the balance is ${this.balance - amount}`
    );
  }
};

const user1 = new BankAccount('Cuthbert Prince', 1000000);
console.log(user1);

user1.deposit(600000);

console.log(user1);

user1.withdrawal(700000);

// const element1 = document.createElement('p');
// element1.innerHTML = user1.balance;

// element1.style.fontSize = '80px';
// element1.style.display = 'flex';
// element1.style.flexDirection = 'row';
// element1.style.justifyContent = 'left';

// document.body.appendChild(element1);

// const arr = [3, 6, 6, 9, 6, 9, 3];
// const words = ['spray', 'limit', 'elite', 'present'];
// const result = words.filter(words => words.length > 6);
// console.log(result);

// const bigger = arr.filter(num => num > 5);
// console.log(bigger);

// // arr.push(1, 2, 4);
// console.log(arr);

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// const obj = {
//   name: 'Alice',
//   age: 25,
//   greet: function () {
//     console.log('Hello!');
//   },
// };

// console.dir(obj);

// console.dir(x => x + 1);

// const People = function (name, age) {
//   this.name = name;
//   this.age = age;

//   this.greet = () => {
//     console.log(
//       `Hello, my name is ${this.name}, and I'm ${this.age} years old`
//     );
//   };
// };

// const alice = new People('Alice', 25);
// alice.greet();

// const bob = new People('Bob', 30);
// bob.greet();

///////////////////////////////////////
// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make + ' ' + 'going at' + ' ' + this.speed + 'km/h');
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make + ' ' + 'going at' + ' ' + this.speed + 'km/h');
};

const bmw = new Car('BMW', 100);
const mercedes = new Car('Mercedes', 80);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

// class expression
// const PersonCl = class {}

// Class declaration: for some leasons Jonas prefer this

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method will be added to prototype property
  calcAge() {
    return 2037 - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log(`✌️ Hey there`);
  }
}

const walter = new PersonCl('Walter White', 1890);

const jessica = new PersonCl('Jessica Davids', 1996);
console.log(walter);
// console.log(jessica.calcAge(2000));
// console.log(jessica.age);
// console.log(jessica.calcAge(2000));

// PersonCl.prototype.greet = function name() {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// document.querySelector('h1').innerHTML = `${jessica.calcAge(2000)}`;

//---------- Functions are hoisted unlike classes(you can access them even before initialization)
// great('Bob');

// function great(name) {
//   console.log(`Hey, ${name} are you feeling great!`);
// }

// N:B
// N:B

// 1.Classes are not hoisted
// 2.Classes are first-class citizens(we can pass them inot functions and retuurn them from functions)
// 3.Classes are executed in strict mode even if you haven't initialized it

const booking = class booking {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  borrowing() {
    return `${this.name} by ${this.author} is borrowed`;
  }
};

const Gcv = new booking('Great Controversy', 'EGW');

console.log(Gcv.borrowing());

///////////////////////////////////////
// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// Using Classes not prototype inheritance

const Vehicle = class Vehicle {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return `${this.make} going at ${this.speed} km/h`;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
};

const Rav4 = new Vehicle('Rav4', 100);

// const element = document.createElement('p'); // You can use 'div', 'span', etc., instead of 'p'

// // Set the content of the element to the result of Rav4.accelerate()
// element.textContent = Rav4.accelerate();

// // Style the element
// element.style.display = 'flex';
// element.style.position = 'relative';
// element.style.float = 'right';
// element.style.left = '-600px';
// element.style.top = '-500px';
// element.style.alignItems = 'left';
// element.style.flexDirection = 'column';
// element.style.color = 'blue'; // Set text color
// element.style.fontSize = '20px'; // Set font size
// element.style.fontWeight = 'bold'; // Set font weight
// element.style.margin = '20px'; // Add margin
// element.style.textAlign = 'center'; // Center the text
// element.style.backgroundColor = 'gray'; // Set background color
// element.style.padding = '10px'; // Add padding
// element.style.borderRadius = '5px'; // Add rounded cornersent

// // Add hover effect using JavaScript
// element.addEventListener('mouseover', () => {
//   element.style.color = 'white';
//   element.style.backgroundColor = 'black';
//   element.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
// });

// element.addEventListener('mouseout', () => {
//   element.style.color = 'blue';
//   element.style.backgroundColor = 'gray';
//   element.style.transform = 'scale(1)'; // Reset size
// });

// // Append the element to the body
// document.querySelector('body').appendChild(element);

// Rav4.brake();
// document.querySelector('body').appendChild = Rav4.accelerate();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Person.hey = function () {
//   console.log(`Hey there✌️`);
//   console.log(this);
// };

// Person.hey();
// PersonCl.hey();
// console.log(account.latest);
// PersonCl.hey();
// console.log('This is a new log message!');

// Object.create way of implementing prototype inheritance
// Object.create way of implementing prototype inheritance
// Object.create way of implementing prototype inheritance

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
console.log(sarah);

sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get SpeedUS() {
    return this.speed / 1.6;
  }
  set SpeedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.SpeedUS);

ford.SpeedUS = 68.73;
console.log(ford.speed);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // Instead let's inherite from person
  Person.call(this, firstName, birthYear);
  this.course = course;

  const introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
  };
};

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
