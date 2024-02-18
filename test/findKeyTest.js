const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('Returns "noma"', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });
  it('Returns "The Hunger Games"', () => {
    assert.strictEqual(
      findKey(
        {
          "LOTR": {books: 3},
          "Harry Potter": {books: 7},
          "The Hunger Games": {books: 4},
          "Twilight": {books: 4},
          "Chronicles of Narnia": {books: 7},
          "The Mortal Instruments": {books: 6},
        },
        (x) => x.books === 4
      ),
      "The Hunger Games"
    );
  });
  it('Returns undefined for empty object', () => {
    assert.strictEqual(findKey({}, x => x === false), undefined);
  });
  it('Returns undefined for no input', () => {
    assert.strictEqual(findKey(), undefined);
  });
});