const assert = require("chai").assert;
const flatten = require("../flatten");

describe('#flatten', () => {
  it("Returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("Returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] for [1, 2, [3, 4], 5, [6], [7, 8, 9, 10], 11, 12, 13, [14]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9, 10], 11, 12, 13, [14]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });
  it("Returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("Returns [] for no input", () => {
    assert.deepEqual(flatten(), []);
  });
});