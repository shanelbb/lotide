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


const middle = (arr = []) => {
  const midValue = []
  let midIndex = Math.floor(arr.length / 2)
  if (arr.length < 3) {
    return []
  } else if (arr.length % 2 !== 0) {
    midValue.push(arr[midIndex])
    return midValue
  } else {
    midValue.push(arr[midIndex - 1], arr[midIndex ])
    return midValue
  }
}

assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 4, 3]), [4])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle(), [])
assertArraysEqual(middle([1, 4, 3, 8, 15, 7, 9, 14]), [8, 15]);
