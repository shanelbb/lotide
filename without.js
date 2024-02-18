const eqArrays = require('./eqArrays');

// function to remove items from the source array that appear in the itemsToRemove array.
const without = (source, itemsToRemove) => {
  // empty array to hold kept items
  const keepArr = [];
  // check if the arrays do not match if they match function will return empty keepArr
  if (!eqArrays(source, itemsToRemove)) {
    // if they do not match then loop through the source array
    source.forEach(item => {
      // if the item is not in the itemsToRemove array add the item to the keepArr
      if (!itemsToRemove.includes(item)) {
        keepArr.push(item);
      }
    });
  }
  return keepArr;
};

module.exports = without;