'use strict';
console.log('edabit.js');

function isEmpty(str) {
  if (str.length === 0) {
    return true;
  }
  return false;
}
console.log('isEmpty("") ===', isEmpty(''));
console.log('isEmpty(" ") ===', isEmpty(' '));
console.log('isEmpty("a") ===', isEmpty('a'));

// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false
