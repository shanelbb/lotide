const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual(["hi", "bye"], ["hi", "bye"]);
assertArraysEqual(["hello", "goodbye"], ["hi", "bye"]);
