/**
 * FizzBuzz challenge: https://leetcode.com/problems/fizz-buzz/
 * You're given a positive integer n as input.  Your goal is to save "Fizz" if the integer is divisible by 3, "Buzz" if it's divisible by 5, "FizzBuzz" if it's divisible by both 3 and 5, and the integer itself as a string if it's not divisible by either 3 or 5.  Each entry will be saved in a string array, which will be the result of each value 1 through n saved accordingly.
 * @param {number} n A positive integer
 * @returns A string array containing "Fizz", "Buzz", "FizzBuzz" or the number as a string
 */
var fizzBuzz = function(n) {
    let strArray = [];
    for (let k = 1; k <= n; k++) {
        if (k % 15 === 0) { // Both divisible by 3 and 5
            strArray.push("FizzBuzz");
        } else if (k % 3 === 0) {
            strArray.push("Fizz");
        } else if (k % 5 === 0) {
            strArray.push("Buzz");
        } else {
            strArray.push(`${k}`);
        }
    }
    return strArray;
};