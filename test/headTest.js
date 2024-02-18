const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {
  // check the head of an array with multiple number elements
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  // check the head of an array with one element
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  // check the head of an array with multiple string elements
  it("returns 'hello' for ['hello', 'world', '!']", () => {
    assert.strictEqual(head(["hello", "world", "!"]), "hello");
  });
  // check the head of an array with no elements
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  // check the input when no array is passed
  it("returns undefined for undefined", () => {
    assert.strictEqual(head(), undefined);
  });
});