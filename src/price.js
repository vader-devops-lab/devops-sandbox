// Applies a percentage discount to a price, rounded to 2 decimals.
export function applyDiscount(price, percent) {
  if (percent < 0 || percent > 100) throw new RangeError("percent must be 0-100");
  return Math.round(price * (1 - percent / 100) * 100) / 100;
}
