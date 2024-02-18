// function to flatten an array that contains arrays
const flatten = (arr = []) => {
  const flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    // if current item in arr is not an array then push that item to flatArray
    if (!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      // if item is array, loop through the inner array and add each item to flatArray
      for (let j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    }
  }
  return flatArray;
};

module.exports = flatten;
