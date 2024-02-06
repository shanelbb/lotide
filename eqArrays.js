const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  // Check if length of arrays match
  if (arr1.length === arr2.length) {
    // if length matches, loop through each item in array 1
    for (let i = 0; i < arr1.length; i++) {
      // compare each item in both arrays
      if (arr1[i] !== arr2[i]) {
        // push true value to isEqual array
        return false;
      }
    }
    return true;
  }
  return false;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // --> Pass: Arrays match length and values
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // --> Fail: Arrays match length but not values
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true); // --> Fail: Arrays do not match length
assertEqual(eqArrays(["1", "2", "3"], ["1", 2, "3"]), true); // --> Fail: Array values do not strictly equal