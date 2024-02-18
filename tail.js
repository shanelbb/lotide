// function that returns all but the first element of an array argument
const tail = (arr) => {
  // check if arr argument is an array else return undefined
  if (Array.isArray(arr)) {
    const arrTail = arr.slice(1);
    return arrTail;
  }
};

module.exports = tail;
