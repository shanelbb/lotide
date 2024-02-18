const eqObjects = (obj1, obj2) => {
  let isObjEqual = [];
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        isObjEqual.push(eqArrays(obj1[key], obj2[key]));
      } else if (obj1[key] !== obj2[key]) {
        isObjEqual.push(false);
      } else {
        isObjEqual.push(true);
      }
    }
  } else {
    isObjEqual.push(false);
  }
  return isObjEqual.includes(false) ? false : true;
};

module.exports = eqObjects;

const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

