'use strict';

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true; // do not use when coding
//       const firstName = 'Steven'; // JS looks first for variables in the current scope!
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!'; // You can manipulate data from parent scope
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Andy';
// calcAge(1991);
// // console.log(age);
// // printAge();

// // Hoisting
// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3)); // would not work even if var is used
// console.log(addExpr); // undefined since it is a var
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart(); // turns true because of hoisting

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // variables created with var will create an object in the window
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // window since arrow has no this
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // method borrowing
// matilda.calcAge();

// const f = jonas.calcAge; // this is undefined here
// f();

// var firstName = 'Matilda'; // creates var in window - BAD

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Pre ES6 Solution
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // ES6 Solution
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   // never use arrow function as a method
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments); // not very used anymore
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments); // does not exist in arrow f
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Andy',
//   age: 22,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   fistName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// //Copying objects
// const jessica2 = {
//   fistName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// // Only works in top-level. Shallow Copy.
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);

// // Deep cloning example
// const jessicaCopy2 = structuredClone(jessica2);
// jessicaCopy2.lastName = 'Lopez';
// jessicaCopy2.family.pop();
// jessicaCopy2.family.pop();
// jessicaCopy2.family.push('Grace');
// console.log('Deep Clone:', jessicaCopy2);
