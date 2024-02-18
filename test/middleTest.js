const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 4, 3]), [4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(), []);
assertArraysEqual(middle([1, 4, 3, 8, 15, 7, 9, 14]), [8, 15]);