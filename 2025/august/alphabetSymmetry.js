/**
 * 
 * Alphabet Symmetry: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
 * You're given an array of strings as input.  In each string, your goal is to count the number of times each letter in the alphabet
 * matches up with the letter in the string at each index - case insensitive.  For example, "aBiDE" has 4 letters that match up with 
 * "abcde", the first 5 letters of the alphabet.  Return a new array consisting of the number of matches for each string.
 * @param {Array} arr An array of strings
 * @returns The number of times each letter matches up in each string in a new array
 */

function solve(arr) {
    let letterPositionCounts = [];
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    for (let word of arr) { // Go through each word
        word = word.toLowerCase();
        let matchingCount = 0;
        for (let k = 0; k < Math.min(26, word.length); k++) { // Check each character in word
            if (word[k] === lowercaseLetters[k]) {
                matchingCount++;
            }
        }
        letterPositionCounts.push(matchingCount);
    }
    return letterPositionCounts;
};