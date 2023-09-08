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

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
