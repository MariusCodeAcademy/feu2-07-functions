'use strict';
console.log('functions.js');

/*
// funkcijos deklaracija
function sayHi() {
  // func body
}

*/

// funkcijos deklaracija
function sayHi(username = '<please Enter a name>') {
  // func body
  console.log('---------------');
  console.log(`Hello ${username}`);
  console.log('-----------');
  console.log('-----------');
}
// funkcijos iskvietimas
// sayHi('James');
// sayHi('Mike');
// sayHi('Jane');
// sayHi();

function sum(num1, num2) {
  // let num1 = 15;
  // let num2 = 35;

  let suma = num1 + num2;
  // console.log(`Laba diena jus dedate ${num1} prie ${num2} ir gaunate ${suma}`);
  console.log(`${num1} + ${num2} = ${suma}`);
}

sum(15, 35);
sum(115, 325);
sum(145, 335);

// parasyti funkcija kuri sudaugina 3 reiksmes su isklotine
// jei reiksme nepaduoda tai daugypa turetu ivykti su paduotom reikmes
