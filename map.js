// function that takes an array and creates a new array based on results of a callback function
const map = function(array = [], callback) {
  const results = [];
  // loop through array and push the results of the callback to the results array
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
