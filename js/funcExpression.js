'use strict';
console.log('funcExpression.js');

/*
// funkcijos deklaracija
function sayHi() {
  // func body
  return 'hi'
}

*/

// function sayHi() {
//   // func body
//   console.log('hi');
//   return 'hi';
// }
// sayHi();

// function expression
// let sayHi = function () {
//   // func body
//   console.log('hi');
//   return 'hi';
// };

// Arrow function
let sayHi = () => console.Log('hi');

// iskvieciam
sayHi();
// console.log('sayHi() ===', sayHi());

// let sum = function (n1, n2) {
//   return n1 + n2;
// };
let sum = (n1, n2) => n1 + n2;

console.log('sum(5, 10) ===', sum(5, 10));
