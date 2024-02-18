// This function takes two arrays as arguments and returns true if they are equal and false otherwise.
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

module.exports = eqArrays;
