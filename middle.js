// Function that returns an new array with the middle value(s) in an array
const middle = (arr = []) => {
  // empty array to hold the middle value(s)
  const midValue = [];
  // variable that finds the middle index of the array
  let midIndex = Math.floor(arr.length / 2);
  // if array length is less than 3, return an empty array
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 !== 0) {
    // if array length is odd add value at midIndex to the midValue array and return midValue
    midValue.push(arr[midIndex]);
    return midValue;
  } else {
    // if array length is even, add values just before and at midIndex to midValue array and return midValue
    midValue.push(arr[midIndex - 1], arr[midIndex]);
    return midValue;
  }
};

module.exports = middle;