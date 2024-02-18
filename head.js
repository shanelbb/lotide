// function that returns the first element of an array argument
const head = (arr) => {
  // check if arr argument is an array else return undefined
  if (Array.isArray(arr)) {
    return arr[0];
  }
};

module.exports = head;
