/**
 * Product of Consecutive Fibonacci Numbers challenge: https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
 * You're given an integer as input that represents a product.
 * The Fibonacci sequence is defined like so:
 * F(0) = 0
 * F(1) = 1
 * F(2) = F(0) + F(1) = 0 + 1 = 1
 * F(3) = F(1) + F(2) = 1 + 1 = 2
 * etc.
 * F(n) = F(n - 2) + F(n - 1)
 * Your goal is to find the smallest values, x and y, in the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, etc.) such that:
 * y = x + 1
 * x * y = product
 * If there are no two consecutive values in the sequence that multiply to the given product, find the smallest two values x and y
 * that are greater than the product.
 * Return an array of the form [x, y, isEqualToProduct], where x * y == prod is the value for isEqualToProduct.
 * @param {number} prod Any integer
 * @returns An array consisting of [firstValue, secondValue, boolean], where the first and second values are in the Fibonacci sequence - minimized - so that firstValue * secondValue >= prod and boolean is true if firstValue * secondValue == prod and false otherwise
 */
function productFib(prod){
  // Calculate Fibonacci terms and find smallest two values that are >= product, ideally equal
  let firstTerm = 0;
  let secondTerm = 1;
  while (firstTerm * secondTerm < prod) {
    let nextTerm = firstTerm + secondTerm; // Calculate next term in Fibonacci sequence
    firstTerm = secondTerm; // Move these two terms up, as they will used for next calculation
    secondTerm = nextTerm;
  }
  let isEqualToProduct = firstTerm * secondTerm === prod;
  return [firstTerm, secondTerm, isEqualToProduct]
}