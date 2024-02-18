const tail = (arr) => {
  if (arr) {
    const arrTail = arr.slice(1);
    return arrTail;
  }
};

module.exports = tail;
