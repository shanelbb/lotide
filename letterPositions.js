const eqArrays = (arr1, arr2) => {
  // empty array variable to put true/false values
  let isEqual = [];
  // Check if length of arrays match
  if (arr1.length === arr2.length) {
    // if length matches, loop through each item in array 1
    arr1.forEach((item, i) => {
      // compare each item in both arrays
      if (item === arr2[i]) {
        // push true value to isEqual array
        isEqual.push(true);
      } else {
        // push false value to isEqual array
        isEqual.push(false);
      }
    });
  } else {
    // if array lengths don't match push false value to isEqual array
    isEqual.push(false);
  }
  return isEqual.includes(false) ? false : true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("The arrays are EQUAL 🎉");
  } else {
    console.log("The arrays are not equal 😥");
  }
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i);
    if (letter !== " ") {
      !results[letter] ? (results[letter] = [i]) : results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

const test = letterPositions('hello')

assertArraysEqual(test['h'], [0])
assertArraysEqual(test['e'], [1])
assertArraysEqual(test['l'], [2, 3])
assertArraysEqual(test['o'], [4])
