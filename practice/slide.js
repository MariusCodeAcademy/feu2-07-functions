'use strict';
console.log('slide.js');

// Parašykite funkciją formText(string, number), kuri iš jai perduoti string parametro pabaigos, panaikins number  parametru nurodytą kiekį raidžių.

// Pvz.:
// formText(Hello World, 3) // Hello Wo

function fromText(str, numberToCut) {
  let numbFromEnd = numberToCut * -1;
  const apdorotasString = str.slice(0, numbFromEnd);
  console.log('apdorotasString ===', apdorotasString);
  // grazinti reiksme i iskvietimo vieta.
  return apdorotasString;
}

fromText('Hello World', 3);
let modifiedString = fromText('123456789', 3);
console.log('modifiedString ===', modifiedString);
