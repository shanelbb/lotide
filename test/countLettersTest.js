const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  // check countLetters where allItems elements appear in itemsToCount object
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house')", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
  });
  // check countLetters when no elements in allItems match itemsToCount
  it("returns {} for '' ", () => {
    assert.deepEqual(countLetters(''), {});
  });
  // check count Letters if no arguments are passed.
  it("returns {} for no arguments", () => {
    assert.deepEqual(countLetters(), {});
  });
});
