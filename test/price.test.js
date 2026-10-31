import { test } from "node:test";
import assert from "node:assert/strict";
import { applyDiscount } from "../src/price.js";

test("applies a discount", () => {
  assert.equal(applyDiscount(100, 15), 85);
});

test("rounds to 2 decimals", () => {
  assert.equal(applyDiscount(9.99, 33), 6.69);
});

test("rejects out-of-range percentages", () => {
  assert.throws(() => applyDiscount(100, 120), RangeError);
});
