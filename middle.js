const middle = (arr = []) => {
  const midValue = [];
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 !== 0) {
    midValue.push(arr[midIndex]);
    return midValue;
  } else {
    midValue.push(arr[midIndex - 1], arr[midIndex]);
    return midValue;
  }
};

module.exports = middle;