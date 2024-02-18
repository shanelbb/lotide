const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  // array to pass for the allItems parameter
  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

  // check countOnly where allItems elements appear in itemsToCount object
  it("returns {Jason: 1, Fang: 2} for (firstNames, {Jason: true, Karima: true, Fang: true, Agouhanna: false})", () => {
    assert.deepEqual(countOnly(firstNames, {Jason: true, Karima: true, Fang: true, Agouhanna: false}), {Jason: 1, Fang: 2});
  });
  // check countOnly when no elements in allItems match itemsToCount
  it("returns {} for (firstNames, {Alice: true, Karima: true, Fang: false, Agouhanna: false})", () => {
    assert.deepEqual(countOnly(firstNames, {Alice: true, Karima: true, Fang: false, Agouhanna: false}), {});
  });
  // check count only if no arguments are passed.
  it("returns {} for no arguments", () => {
    assert.deepEqual(countOnly(), {});
  });
  
});
