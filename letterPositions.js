// function that returns an object with key:value pairs of letter:array with index(s) of each letter
const letterPositions = function(sentence = '') {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // get index of current letter
    let letter = sentence.charAt(i);
    // check if character is not an empty space
    if (letter !== " ") {
      // if the current letter is not a key in results object add it with a value as an array containing current index, if it is already a key in results then push current index to that value array.
      !results[letter] ? (results[letter] = [i]) : results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

