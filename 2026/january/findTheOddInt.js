/**
 * Find the Odd Int challenge: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 * You're given an array of numbers as input.  Each value occurs an even number of times in the array, except for one value, which occurs an odd number
 * of times.  Return that one value that has an odd frequency.  For example, if you have [3, 8, 8, 3, 6, 3, 3, 8, 8, 6, 6], return 6.
 * @param {*} A An array of numbers as input
 * @returns The one value that occurs an odd number of times
 */
function findOdd(A) {
    // Approach I: Using sets
    let valuesWithEvenFreq = new Set();
    let valuesWithOddFreq = new Set();
    for (const val of A) {
        if (valuesWithEvenFreq.has(val)) {
            valuesWithEvenFreq.delete(val);
            valuesWithOddFreq.add(val);
        } else if (valuesWithOddFreq.has(val)) {
            valuesWithOddFreq.delete(val);
            valuesWithEvenFreq.add(val);
        } else { // New value
            valuesWithOddFreq.add(val);
        }
    }
    return valuesWithOddFreq.values().next().value; // Should only be one value in this set at this point, so extract from iterator
    //   // Approach II: bit operations using the XOR operator, as val XOR val = 0, so even instances of the value will cancel out eventually, leaving only the value with an odd frequency
    //   let result = 0;
    //   for (const val of A) {
    //     result ^= val;
    //   }
    //   return result;
}