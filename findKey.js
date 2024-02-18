// function that loops through an object argument and returns the first key that matches the callback results
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

