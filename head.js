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

assertEqual(head([5, 6, 7], 5), 5);
assertEqual(head(['hello', 'world', '!']), 'hello');
assertEqual(head([]), true);
assertEqual(head(['Shanel']), 'shanel');