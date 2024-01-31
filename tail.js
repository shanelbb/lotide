const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  const arrTail = arr.slice(1);
  return arrTail;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse")
assertEqual(result[1], "Labs")
const words = ["Yo", "Yo", "Ma"]
tail(words)
assertEqual(words.length, 3)



