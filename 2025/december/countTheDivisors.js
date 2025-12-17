/**
 * Count the divisors of a number: https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
 * You're given a positive integer, n, as input.  Your goal is to count the number of divisors that go into that value and return it.  For example, the value 20 has divisors 1, 2, 4, 5, 10, and 20, so return 6.
 * @param {number} n A positive integer n
 * @returns An integer representing the number of divisors for the given integer n
 */
function getDivisorsCnt(n) {
    let divisorCount = 0;
    let currentVal = 1;
    let squareRootOfN = Math.sqrt(n);
    // We calculate pairs of divisors (unless divisor * divisor = n)
    while (currentVal <= squareRootOfN) {
        if (n % currentVal === 0) {
            divisorCount++;
            // As long as we the current value * current value != n, we have a pair
            if (Math.floor(n / currentVal) !== currentVal) {
                divisorCount++;
            }
        }
        currentVal++;
    }
    return divisorCount;
}