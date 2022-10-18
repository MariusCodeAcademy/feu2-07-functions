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
