// Applies a percentage discount to a price, rounded to 2 decimals.
export function applyDiscount(price, percent) {
  return Math.round(price * (1 - percent / 100) * 100) / 100;
}
