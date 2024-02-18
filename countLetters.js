const countOnly = require('./countOnly');

// function that uses countOnly to create an object with the occurrences of letters in a string
const countLetters = (str = '') => {
  const obj = {};
  // loop through the string
  for (let el in str) {
    // get value of character
    const letter = str[el];
    if (str[el] !== ' ') {
      // if character is not an empty space add letter to the obj as a key with value of true
      obj[letter] = true;
    }
  }
  // split the str argument into an array of characters
  const strArray = str.split('');
  // countOnly function with strArray and obj variables as the arguments and return result
  return countOnly(strArray, obj);
};


module.exports = countLetters;