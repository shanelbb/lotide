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

const flatten = (arr) => {
  const flatArray = []
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++){
        if (Array.isArray(arr[i][j])) {
          let nested = (arr[i][j])
          flatten(nested)
        } else {
          flatArray.push(arr[i][j]);
        }
      }
      }
  }
  return flatArray;
}



console.log(flatten([1, 2, [3, 4], 5, [6, [7, 8, 9, [10, 11, [12, 13, 14]]]]]));
console.log(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9, 10], 11, 12, 13, [14]]));
console.log(flatten([1, 2, [3, 4], 5, [6]]));