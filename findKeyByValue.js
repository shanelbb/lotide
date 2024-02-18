// function that loops through an object's keys and returns the key that matches the value argument
const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  // if there is no match the function returns undefined
  return;
};

module.exports = findKeyByValue;