/**
 * Ones and Zeroes challenge: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
 * You're given an array consisting of binary digits as input.  Your goal is to return the base-10 representation of the value.  For example, [0, 1, 1, 1] returns 7.
 * @param {Array} An array of zeroes and ones
 * @returns An integer representing the base-10 equivalent
 */
const binaryArrayToNumber = arr => {
    // VERSION I: Using a for loop
    //   let binSum = 0;
    //   for (let k = arr.length - 1; k >= 0; k--) {
    //     let thisBit = arr[k];
    //     binSum += thisBit * (2 ** (arr.length - 1 - k)); // Add 2 ^ power based on current index; the farther left, the higher the exponent
    //   }
    //   return binSum;
    // VERSION II: Using reduce method for arrays
    return arr.reduce((acc, val, ind) => {
        return acc + val * 2 ** (arr.length - 1 - ind);
    }, 0); // Need the starting value of 0 to ensure we start at index 0, otherwise we start at index 1
};