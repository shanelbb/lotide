const eqArrays = (arr1, arr2) => {
  let isEqual = [];
  if (arr1.length === arr2.length) {
    arr1.forEach((item, i) => {
      if (item === arr2[i]) {
        isEqual.push(true);
      } else {
        isEqual.push(false);
      }
    });
  } else {
    isEqual.push(false);
  }
  return isEqual.includes(false) ? false : true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("The arrays are EQUAL 🎉");
  } else {
    console.log("The arrays are not equal 😥");
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, (word) => {
  const wordArray = word.split('');
  const reverseArray = wordArray.reverse()
  const joinArray = reverseArray.join('')
  return joinArray
});
assertArraysEqual(results2, ["dnuorg", "lortnoc", "ot", "rojam", "mot"]);

const results3 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
