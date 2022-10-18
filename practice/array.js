'use strict';
console.log('array.js');

let nums = [5, -4, 3, 10, -7, 14];
let nums1 = [15, -41, 23, 110, -17, 14];

// parasyti funkcija kuri grazintu tik teigiamu skaiciu masyva

function getPositivesArr(fullArray) {
  const positives = [];
  for (let num of fullArray) {
    // jei skaicius teigiamas dedam ji i positives
    if (num > 0) {
      positives.push(num);
    }
  }
  // console.log('positives ===', positives);
  return positives;
}

let teigiami = getPositivesArr(nums1);
console.log('teigiami ===', teigiami);

let skaicius = '500';

// parasyti funkcija kuri patikrina ar argumentas yra string tipo
// jei string, tai grazina kad tai 'ne skaicius'
// jei skaiciau tipo kintamasis tai paveria i valiuta 50 => 50.00 eur

function makeCurrency(el) {
  // typeof
  if (typeof el === 'string') return 'ne skaicius';

  if (typeof el === 'number') return `${el.toFixed(2)} eur`;

  return 'nei skaicius nei stringas';
}

let rezultatas = makeCurrency(skaicius);
console.log('rezultatas ===', rezultatas);

rezultatas = makeCurrency(45);
console.log('rezultatas ===', rezultatas);

rezultatas = makeCurrency(true);
console.log('rezultatas ===', rezultatas);

// parasyti funkcija kuri grazina maziausia is dvieju skaiciu

function min(n1, n2) {
  //   5   7
  //   7   5
  // if (n1 < n2) {
  //   return n1;
  // }
  // return n2;

  // n1 < n2 ? return n1 :  return n2;
  // ternary operatorius su grazinimu
  return n1 < n2 ? n1 : n2;
}

const minAn = (n1, n2) => (n1 < n2 ? n1 : n2);

// console.log('min(5, 7) ===', min(5, -7));
// console.log('min(7, 5) ===', min(7, -5));
// console.log('minAn(5, 7) ===', minAn(5, -7));

// 4. skaidriu. Parašykite funkciją calculate(num1, num2, action), kuri atliks action parametru nurodytą matematinį veiksmą (“composition”, “subtraction”, “multiplication”, “division”) su num1 ir num2 nurodytais skaičiais.

// calculate(8, 9, 'plus') // 17
// calculate(8, 9, 'minus') // 17
// calculate(8, 9, 'multi') // 17

function calculate(num1, num2, operation) {
  // norim pasakyti kad galimo reiksmes yra tik
  if (!['plus', 'minus', 'multi'].includes(operation)) {
    return 'bad operation';
  }
  //
  if (operation === 'plus')
    // calculate(8, 9, 'plus')
    return num1 + num2;
  // calculate(8, 9, 'minus')
  if (operation === 'minus') return num1 - num2;
  // calculate(8, 9, 'multi')
  if (operation === 'multi') return num1 * num2;

  // kam cia 'operation' nera lygus ?
  return `"${operation}" what ta hell is this? neiteisinga operacija, please check the manual!!!!`;
}
// issaugom grazinama calculate reiksme i sum11
let sum11 = calculate(8, 9, 'plus');
console.log('sum11 ===', sum11);
let minus11 = calculate(8, 9, 'minus');
console.log('minus11 ===', minus11);
console.log("calculate(8, 9, 'multi') ===", calculate(8, 9, 'multi'));
console.log("calculate(8, 9, 'expo300') ===", calculate(8, 9, 'expo300'));
