const eqArrays = require("./eqArrays");

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log('The arrays are EQUAL 🎉');
  } else {
    console.log('The arrays are not equal 😥');
  }
};

module.exports = assertArraysEqual;