const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "LOTR": { books: 3 },
  "Harry Potter": { books: 7 },
  "The Hunger Games": { books: 4 },
  "Twilight": { books: 4 },
  "Chronicles of Narnia": { books: 7 },
  "The Mortal Instruments": { books: 6 }
}, x => x.books === 4), "The Hunger Games");
