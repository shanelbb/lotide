const eqArrays = (arr1, arr2) => {
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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (obj1, obj2) => {
  let isObjEqual = [];
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        isObjEqual.push(eqArrays(obj1[key], obj2[key]));
      } else if (obj1[key] !== obj2[key]) {
        isObjEqual.push(false)
      } else {
        isObjEqual.push(true)
      }
    }
  } else {
    isObjEqual.push(false)
  }
  return isObjEqual.includes(false) ? false : true;
};

const carObject1 = {color: "green", model: "rav4"};
const carObject2 = {color: "blue", model: "rav4"};
const carObject3 = {color: "red", model: "mustang"};
const carObject4 = {model: "mustang", color: "red"};
const carObject5 = {model: "mustang", color: "silver", transmission: "automatic"};
const carObject6 = { model: "mustang", color: "silver", transmission: "manual" };

assertEqual(eqObjects(carObject1, carObject2), false);
assertEqual(eqObjects(carObject4, carObject3), true);
assertEqual(eqObjects(carObject5, carObject6), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
assertEqual(eqObjects(anotherMultiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

