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

// sum(15, 35);
// sum(115, 325);
// sum(145, 335);

// parasyti funkcija kuri sudaugina 3 reiksmes su isklotine
function multi(n1 = 1, n2 = 1, n3 = 1) {
  let sand = n1 * n2 * n3;
  console.log(`${n1} * ${n2} * ${n3} = ${sand}`);
}

multi(2, 3, 5);
multi(12, 23, 50);
multi(12, 23);
multi(12);
multi(1, 1, 45);

// jei reiksme nepaduoda tai daugyba turetu ivykti su paduotom reikmes

// parasyti funkcija kuri isveda i html musu paduoda reiksme

// sukurti elementa
// const h2El = document.createElement('h2');
// // pridetiti reiksem i el
// h2El.textContent = 'Sveiki as esu Naujas H2 elementas';
// // patalpinti elementa htmle
// document.body.append(h2El);

// document.getElementById('cont').append(h2El);

// // sukurti elementa
// const h2ElAntras = document.createElement('h2');
// // pridetiti reiksem i el
// h2ElAntras.textContent = 'Sveiki vel cia as';
// // patalpinti elementa htmle
// document.body.append(h2ElAntras);

function makeH2El(greetText = 'iveskite texta') {
  // sukurti elementa
  const h2El = document.createElement('h2');
  // pridetiti reiksem i el
  h2El.textContent = greetText;
  // patalpinti elementa htmle
  // document.body.append(h2El);
  document.body.append(h2El);
}
// iskvietimas
makeH2El('Labukas');
makeH2El('Sveiki ');
makeH2El('kaip sekasi su funkcijom');
makeH2El('ka ???');

// sukurti funkcija kurti isveda vidurki is gautu 3 parametru
// ir atspausdina ji htmle, panaudojant makeH2El()
// su isklotine
// panaudoti su keletu reiksmiu
