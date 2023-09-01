const eqArrays = (arr1 = [], arr2 = []) => {
  // empty array variable to put true/false values
  let isEqual = [];
  // Check if length of arrays match
  if (arr1.length === arr2.length) {
    // if length matches, loop through each item in array 1
    arr1.forEach((item, i) => {
      // compare each item in both arrays
      if (item === arr2[i]) {
        // push true value to isEqual array
        isEqual.push(true);
      } else {
        // push false value to isEqual array
        isEqual.push(false);
      }
    });
  } else {
    // if array lengths don't match push false value to isEqual array
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

const without = (source, itemsToRemove) => {
  const removed = []
  if (!eqArrays(source, itemsToRemove)) {
    source.forEach(item => {
      if (!itemsToRemove.includes(item)) {
      removed.push(item)
    } 
  })
  return removed
  }  

  return "No items removed"
}

console.log(without(['1', 2, '3'],[1, 2, 3]))
console.log(without(['1', 2, '3', 4],[1, 2, 3]))
console.log(without([1, 2, 3, 4],[1, 2, 3, 4]))
console.log(without(["1", "2", 3, 4], [1, 2, "3"]))
console.log(without())
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 