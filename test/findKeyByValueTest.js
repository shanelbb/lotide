const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    "sci-fi": "Fringe",
    comedy: "Ted Lasso",
    drama: "Breaking Bad",
  };
  it('Returns "sci-fi" for bestTVShowsByGenre, "Fringe"', () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre,"Fringe"),
      "sci-fi"
    );
  });
  it('Returns "comedy" for bestTVShowsByGenre, "Ted Lasso"', () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre,"Ted Lasso"),
      "comedy"
    );
  });
  
  it("Returns undefined for empty object", () => {
    assert.strictEqual(
      findKeyByValue({}),
      undefined
    );
  });
  it("Returns undefined for no input", () => {
    assert.strictEqual(findKeyByValue(), undefined);
  });
});
