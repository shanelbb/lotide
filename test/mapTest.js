const assert = require("chai").assert;
const map = require('../map');

describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it(`Returns ["g", "c", "t", "m", "t"]`, () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
  it(`Returns ["dnuorg", "lortnoc", "ot", "rojam", "mot"]`, () => {
    assert.deepEqual(map(words, (word) => {
      const wordArray = word.split("");
      const reverseArray = wordArray.reverse();
      const joinArray = reverseArray.join("");
      return joinArray;
    }), ["dnuorg", "lortnoc", "ot", "rojam", "mot"]);
  });
  it(`returns [] for empty array`, () => {
    assert.deepEqual(map([], x => x.toUpperCase()), []);
  });
  it(`returns [] for empty array and no callback`, () => {
    assert.deepEqual(map([]), []);
  });
  it(`returns [] for no input`, () => {
    assert.deepEqual(map(), []);
  });
});