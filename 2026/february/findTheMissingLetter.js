// Find the Missing Letter: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
/**
 * Find the Missing Letter: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
 * You're given an array of English letters with the same case as input.  The letters do NOT wrap around; i.e. you don't go from "z" to "a".  There is exactly one missing letter.  Find it and return it.  The array will have at least two letters.
 * Examples: 
 * ["b","d","e"] returns "c"
 * ["A","B","C","E","F"] returns "D"
 * @param {*} array An array of letters of the same case
 * @returns The missing letter in the array
 */
function findMissingLetter(array) {
    let prevCharCode = array[0].charCodeAt(0);
    for (let ind = 1; ind < array.length; ind++) { // Go through each remaining letter
        const curCharCode = array[ind].charCodeAt(0); // Grab character node for current letter
        if (curCharCode - prevCharCode != 1) { // If we skip a letter
            return String.fromCharCode(curCharCode - 1); // Grab skipped letter and return it
        }
        prevCharCode = curCharCode;
    }
    return ''; // Safeguard (not really needed) 
}