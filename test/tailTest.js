const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  // check the tail of an array with multiple string elements
  it("returns ['Lighthouse', 'Labs'] for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  // check the tail of an array with one element
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  // check the tail of an array with no elements
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  // check the tail of an array with multiple number elements
  it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  // check the output when no array is passed
  it("returns undefined for undefined", () => {
    assert.deepEqual(tail(), undefined);
  });
});
