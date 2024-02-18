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
    console.log('The arrays are EQUAL 🎉');
  } else {
    console.log('The arrays are not equal 😥');
  }
};

assertArraysEqual([1, 2, 3],[1, 2, 3])
assertArraysEqual(['1', 2, 3, 4],[1, 2, 3, 4])
assertArraysEqual(['hi', 'bye'],['hi', 'bye'])
assertArraysEqual(['hello','goodbye'],['hi', 'bye'])
