const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = arr => {
  return arr[0];
};

console.log(head([5, 6, 7], 5));
console.log(head(['hello', 'world', '!']));
console.log(head([]));
console.log(head(['Shanel']))