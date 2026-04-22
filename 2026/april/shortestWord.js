// 
/**
 * Shortest Word challenge: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 * Your goal is to state a given string as input, split it up into separate words, each separated by spaces, and return the length of the shortest word found.  For example, "blue bayou  now" returns 3 for the word "now".
 * @param {string} s A string consisting of characters and spaces
 * @returns An integer representing the length of the shortest word
 */
function findShort(s) {
    // Split string into array of words with no spaces, then go through each one and determine which one is the shortest
    return s.split(" ").reduce((minLength, currentStr) => {
        return Math.min(minLength, currentStr.length);
    }, s.length);
}