const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  "sci-fi": "Fringe",
  comedy: "The Good Place",
  drama: "Breaking Bad"
}

const findKeyByValue = (obj, val) => {
  for (key in obj) {
    if (obj[key] === val) {
      return key
    }
  }
  return
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'Fringe'), 'sci-fi')
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Good Place'), 'comedy')
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Breaking Bad'), 'drama')
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), undefined)