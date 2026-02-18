/**
 * Tidy Number: https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
 * You're given a positive integer as input.  Your goal is to determine if the digits are in non-decreasing order and return true if it is and false if not.
 * Examples:
 * 2333 returns true
 * 1342 returns false
 * @param {number} n A positive integer
 * @returns True if the digits are in non-decreasing order and false otherwise
 */
function tidyNumber(n) {
    // Approach I: using a string
    let numStr = `${n}`;
    let prevDigit = parseInt(numStr[0]);
    for (let ind = 1; ind < numStr.length; ind++) {
        const currentDigit = parseInt(numStr[ind]);
        if (prevDigit > currentDigit) {
            return false;
        }
        prevDigit = currentDigit;
    }
    return true;
    // // Approach II: no string - using math
    // let digitAhead = n % 10;
    // let powerOfTen = 100;
    // while (powerOfTen / 10 <= n) {
    //     const currentDigit = Math.floor((n % powerOfTen) / (powerOfTen / 10));
    //     if (currentDigit > digitAhead) {
    //         return false;
    //     }
    //     digitAhead = currentDigit;
    //     powerOfTen *= 10;
    // }
    // return true;
}

// Clever solution from CodeWars:
function tidyNumber(n) {
    let m = 9;
    while (n) {
        if (n % 10 > m) {
            return false;
        }
        m = n % 10;
        n = n / 10 | 0;
    }
    return true;
}