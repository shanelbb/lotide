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

console.log(tail([1, 2, 3, 4]));



