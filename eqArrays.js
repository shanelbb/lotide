const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
        isEqual.push(true)
      } else {
        // push false value to isEqual array
        isEqual.push(false);
      }
    })
  } else {
    // if array lengths don't match push false value to isEqual array
    isEqual.push(false);
  }

  // Check if isEqual array contain a false value
  if (isEqual.includes(false)) {
    // return False if it does
    return false
  } else {
    // return true if it doesn't
    return true
  };
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // --> Pass: Arrays match length and values 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // --> Fail: Arrays match length but not values
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true); // --> Fail: Arrays do not match length
assertEqual(eqArrays(["1", "2", "3"], ["1", 2, "3"]), true); // --> Fail: Array values do not strictly equal