/**
 * Maximum multiple: https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
 * You're given two integers, divisor and bound.  Your goal is to find the maximum integer N such that it's divisible by divisor and is less than or equal to the bound, and return that value.  For example, if you have divisor = 5 and bound = 28, return 25.  
 * @param {number} divisor 
 * @param {number} bound 
 * @returns Largest integer such that it's less than or equal to the bound and is divisible by the divisor
 */
function maxMultiple(divisor, bound) {
    // // For loop approach
    // let val = 0;
    // while (val + divisor <= bound) {
    // val += divisor;
    // }
    // return val;
    // Mathematical approach without a loop
    let quotient = Math.floor(bound / divisor); // Find maximum number of times divisor can go into the bound
    return divisor * quotient; // Return maximum multiple
}