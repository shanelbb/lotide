// Function that will loop through the items in an array until an item meets the criteria of the callback
const takeUntil = function(array = [], callback) {
  const results = [];
  for (let item of array) {
    // if callback returns false push item to results array
    if (!callback(item)) {
      results.push(item);
    } else {
      // if callback returns true before end of loop return results array and end function
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;

