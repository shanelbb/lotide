// Function that returns the number of time an item appears in an array based on the true/false values in the itemsToCount object.
const countOnly = (allItems = [], itemsToCount) => {
  // empty results object
  const results = {};
  // loop trough allItems array
  allItems.forEach(item => {
    // if itemsToCount contains a key:value pair of item:true then add or increment to the results object
    if (itemsToCount[item]) {
      // if results does not have a key of item add it with the value of one
      if (!results[item]) {
        results[item] = 1;
      } else {
        // if key of item already exists increment by 1
        results[item]++;
      }
    }
  });
  // return results object after allItems loop is complete
  return results;
};

module.exports = countOnly;