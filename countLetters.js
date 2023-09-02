const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  allItems.forEach((item) => {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  });
  return results;
};

const countLetters = (str) => {
  const obj = {}
  for (el in str) {
    const letter = str[el]
    if (str[el] !== ' ') {
      obj[letter] = true
    }
  }
  const strArray = str.split('')
  return countOnly(strArray, obj)
}

const result1 = countLetters("lighthouse in the house")

assertEqual(result1['h'], 4 )
assertEqual(result1['l'], 1 )
assertEqual(result1['a'], undefined)