const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  // check middle of an array with 2 elements
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  // check middle of an array with odd number of elements
  it("returns [2] for [1, 2, 4]", () => {
    assert.deepEqual(middle([1, 2, 4]), [2]);
  });
  // check middle of an array with even number of elements
  it("returns [2, 4] for [1, 2, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 4, 5]), [2, 4]);
  });
  // check middle if empty array is passed
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  // check middle if no array is passed
  it("returns [] for no array", () => {
    assert.deepEqual(middle(), []);
  });
  // check middle with an array containing multiple elements
  it("returns [8, 15] for [1, 4, 3, 8, 15, 7, 9, 14]", () => {
    assert.deepEqual(middle([1, 4, 3, 8, 15, 7, 9, 14]), [8, 15]);
  });
  it("makes sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });
});