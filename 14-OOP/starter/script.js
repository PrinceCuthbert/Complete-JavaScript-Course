'use strict';

// const { configs } = require('eslint-plugin-react');

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

// // class expression
// // const PersonCl = class {}

// // Class declaration: for some leasons Jonas prefer this

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method will be added to prototype property
//   calcAge() {
//     return 2037 - this.birthYear;
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hey() {
//     console.log(`✌️ Hey there`);
//   }
// }

// const walter = new PersonCl('Walter White', 1890);

// const jessica = new PersonCl('Jessica Davids', 1996);
// console.log(walter);
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

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// console.log(sarah);

// sarah.init('Sarah', 1979);
// sarah.calcAge();

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

// Object.create
// Object.create
// Object.create

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;

//   // Instead let's inherite from person
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);

// mike.introduce();
// mike.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  greeting() {
    console.log(`Hello, I'm ${this.name}.`);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// creating an object fom that PersonProto
const steven = Object.create(PersonProto);
console.log(steven);
steven.birthYear = 2017;
steven.name = 'Steven';
steven.calcAge(2017);
steven.greeting();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();

// Inheritance
// Inheritance
// Inheritance

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer science');
console.log(mike);

mike.introduce();

// Worker class inherting from Person
// Worker class inherting from Person
// Worker class inherting from Person

const Worker = function (firstName, birthYear, id, department) {
  Person.call(this, firstName, birthYear),
    (this.id = id),
    (this.department = department);
};

// Set up prototype inheritance
Worker.prototype = Object.create(Person.prototype);

// Move calcAge method to Worker.prototype
Worker.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

Worker.prototype.introduction = function () {
  console.log(
    `I'm ${this.firstName} and I was born in ${
      this.birthYear
    }, and I'm ${this.calcAge()} years old. My id is ${
      this.id
    } and I'm registerd in ${this.department} department`
  );
};
const worker1 = new Worker('Cuthbert', 2004, 27089, 'Software developer');

console.log(worker1);

worker1.introduction();

// Teacher's class inherting from person
// Teacher's class inherting from person
const Teacher = function (firstName, birthYear, ssn, course, school) {
  Person.call(this, firstName, birthYear);
  this.ssn = ssn;
  this.course = course;
  this.school = school;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

Teacher.prototype.intro = function () {
  console.log(
    `I'm ${this.firstName}, a teacher of ${this.course}, in the ${
      this.school
    }. And I'm ${this.calcAge()} years old teacher.`
  );
};

const trNonsi = new Teacher('Nonsi', 1998, 20202, 'English', 'Suwon School');

trNonsi.intro();

//Animal inheritance
//Animal inheritance
//Animal inheritance

const Animal = function (species, sound) {
  this.species = species;
  this.sound = sound;
};

const Dog = function (species, sound, breed) {
  Animal.call(this, species, sound);
  this.breed = breed;
};

Dog.prototype = Object.create(Animal);

Dog.prototype.bark = function () {
  console.log(
    `${this.species} ${this.breed} barks: ${Array(3)
      .fill(this.sound)
      .join(' ')}!`
  );
};

const bobby = new Dog('German Shepherd', 'Woof', 'Golden retriever');

bobby.bark();

// Athlete and football player inheritance
// Athlete and football player inheritance
// Athlete and football player inheritance

const Athlete = function (firstName, sport) {
  this.firstName = firstName;
  this.sport = sport;
};

const FootballPlayer = function (firstName, sport, position) {
  Athlete.call(this, firstName, sport);
  this.position = position;
};

FootballPlayer.prototype = Object.create(Athlete.prototype);

FootballPlayer.prototype.introduce = function () {
  console.log(
    `I'm ${this.firstName} and I play ${this.sport}, as a ${this.position}.`
  );
};

const ronaldo = new FootballPlayer('CR7', 'Football', 'Forward');

ronaldo.introduce();

const basketballPlayer = function (firstName, sport, position, birthYear) {
  Athlete.call(this, firstName, sport);
  Person.call(this, firstName, birthYear);
  this.position = position;
  this.birthYear = birthYear;
};

basketballPlayer.prototype = Object.create(Athlete.prototype);
Object.assign(basketballPlayer.prototype, Person.prototype);

// ✅ Ensure calcAge() is available
basketballPlayer.prototype.calcAge = Person.prototype.calcAge;

basketballPlayer.prototype.introduction = function () {
  console.log(
    `I'm ${this.firstName} and I play ${this.sport}, as a ${
      this.position
    }. I'm ${this.calcAge()} old.`
  );
};

const lebron = new basketballPlayer(
  'Lebron James',
  'Basketball',
  'Center',
  1980
);

lebron.introduction();

const VolleyballPlayer = function (firstName, sport, position, birthYear) {
  Athlete.call(this, firstName, sport);
  Person.call(this, firstName, birthYear);
  this.position = position;
};

VolleyballPlayer.prototype = Object.create(Athlete.prototype);
Object.assign(VolleyballPlayer.prototype, Person.prototype);

VolleyballPlayer.prototype.presentation = function () {
  console.log(
    `I'm ${this.firstName} and I play ${this.sport}, at ${
      this.position
    } position, and I'm ${this.calcAge()} years old.`
  );
};

const volley1 = new VolleyballPlayer('Prince', 'Volleyball', 'Fixer', 2000);

volley1.presentation();

lebron.calcAge();

// ronaldo.int();

// // Bank account
// // Bank account

const BankAccount = function (owner, balance) {
  this.owner = owner;
  this.balance = balance;
};

const deposit = function (owner, balance, amount) {
  BankAccount.call(this, owner, balance);
  this.amount = amount;
};

deposit.prototype = Object.create(BankAccount);

BankAccount.prototype.depositing = function (amount) {
  this.balance = this.balance + amount;
  console.log(
    `${this.owner} deposited ${amount} and the new balance is ${this.balance}`
  );
};

BankAccount.prototype.withdrawal = function (amount) {
  this.balance = this.balance - amount;
  console.log(
    `${this.owner} withdrew ${amount} and the new balance is ${this.balance}`
  );
};

const user1 = new BankAccount('Prince', 10000);
console.log(user1);

user1.depositing(2000);
user1.withdrawal(4000);

// const BankAccount = function (owner, balance) {
//   this.owner = owner;
//   this.balance = balance;
// };

// BankAccount.prototype.deposit = function (amount) {
//   this.balance = this.balance + amount;
//   console.log(
//     `${this.owner} deposited ${amount} and the new balance is ${this.balance}`
//   );
// };

// BankAccount.prototype.withdrawal = function (amount) {
//   if (amount > this.balance) {
//     console.log(`Insufficient Balance`);
//   } else {
//     console.log(
//       `You withdrew ${amount}, and the balance is ${this.balance - amount}`
//     );
//   }
// };

// const user1 = new BankAccount('Cuthbert Prince', 1000000);
// console.log(user1);

// user1.deposit(600000);

// console.log(user1);

// user1.withdrawal(700000);

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
    // console.log(name);
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first: calling superclass
    super(fullName, birthYear);
    this.course = course;
  }
  introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  };

  // Overriding existing calcAge in Person

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I fell more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const walter = new PersonCl('Walter White', 1890);

// const jessica = new PersonCl('Jessica Davids', 1996);
// console.log(walter);

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();

// This will override the one in the parent class
// This will override the one in the parent class
martha.calcAge();

// Another class example
// Another class example
// Another class example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening new Account,${owner}!`);
  }

  deposit(val) {
    this.movements.push(val);
  }
  withdrawal(val) {
    this.movements.push(-val);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// This is not appropriate, create a method for that
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdrawal(140);
