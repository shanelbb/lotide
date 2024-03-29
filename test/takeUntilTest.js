const assert = require("chai").assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it(`Returns [1, 2, 5, 7, 2]`, () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it(`Returns ["I've", "been", "to", "Hollywood"]`, () => {
    assert.deepEqual(
      takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),
      ["I've", "been", "to", "Hollywood"]
    );
  });
  it('Returns [] for empty array', () => {
    assert.deepEqual(takeUntil([], x => x < 1), []);
  });
  it('Returns [] for empty array and no callback', () => {
    assert.deepEqual(takeUntil([]), []);
  });
  it('Returns [] for no input', () => {
    assert.deepEqual(takeUntil(), []);
  });
});