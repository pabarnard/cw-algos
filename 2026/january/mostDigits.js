/**
 * Most Digits challenge: https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
 * You're given an array of integers as input.  Your goal is to find the value with the most digits and return it.  If multiple values have the most 
 * digits, return the first value (with the lowest index).  For example, if you have [12, 88, 33], return 12.  
 * @param {*} array An array of integers
 * @returns The integer in the array with the most digits - and if there's a tie, the first value encountered that meets this condition
 */
function findLongest(array) {
    // For the first value, determine the number of digits in it
    let digitCount = countDigits(array[0]);
    let valueToReturn = array[0];
    // Now go through remaining values in array
    for (let k = 1; k < array.length; k++) {
        let newDigitCount = countDigits(array[k]);
        // If this number has more digits than the previous values examined, then update the digit count and the number we will return accordingly
        if (newDigitCount > digitCount) {
            digitCount = newDigitCount;
            valueToReturn = array[k];
        }
    }
    return valueToReturn;
}

// Helper function to count the number of digits in an integer
function countDigits(num) {
    num = Math.abs(num); // To ensure modulus works with non-negative integer
    let numDigits = 1;
    while (num % (10 ** numDigits) != num) {
        numDigits++;
    }
    return numDigits;
}