const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7], 5), 5); // Pass
assertEqual(head(["hello", "world", "!"]), "hello"); // Pass
assertEqual(head([]), true); // Fail
assertEqual(head(["Shanel"]), "shanel"); // Fail
