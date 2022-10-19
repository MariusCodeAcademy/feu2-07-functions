'use strict';
console.log('spread.js');

let num1 = [1, 2, 3];

let num2 = [4, 5, 6];

// let sujungtas = num1.concat(num2);
let sujungtas = [0, ...num1, 'tarpe', ...num2, 'gale'];

console.log('sujungtas ===', sujungtas);

let user1 = {
  name: 'James',
  age: 26,
  hasCar: true,
};
// let user2 = {
//   name: 'James',
//   age: 26,
//   town: 'Londe',
// };
let user2 = {
  ...user1,
  town: 'Londe',
};

let user1Copy = { ...user1 };
console.log('user2 ===', user2);
