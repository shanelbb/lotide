const assert = require("chai").assert;
const without = require('../without');

describe('#without', () => {
  it(`Returns ["1", "3"] for ["1", 2, "3"], [1, 2, 3]`, () => {
    assert.deepEqual(without(["1", 2, "3"], [1, 2, 3]), ["1", "3"]);
  });
  it(`Returns ["1", "3", 4] for ["1", 2, "3", 4], [1, 2, 3]`, () => {
    assert.deepEqual(without(["1", 2, "3", 4], [1, 2, 3]), ["1", "3", 4]);
  });
  it(`Returns ["1", "2", 3, 4] for ["1", "2", 3, 4], [1, 2, "3"]`, () => {
    assert.deepEqual(without(["1", "2", 3, 4], [1, 2, "3"]), ["1", "2", 3, 4]);
  });
  it(`Returns ["hello", "world"] for ["hello", "world", "lighthouse"], ["lighthouse"]`, () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
  it(`Returns [] for no input`, () => {
    assert.deepEqual(without(), []);
  });
});