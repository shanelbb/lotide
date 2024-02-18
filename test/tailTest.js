const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
const resultOne = tail(["Hello"]);
const resultZero = tail([]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(resultOne.length, 0);
assertEqual(resultZero.length, 0);

const words = ["Yo", "Yo", "Ma"];
tail(words);
assertEqual(words.length, 3);
