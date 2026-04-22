// Helper function
function buildMap(inputMap, inputStr) {
    for (let k = 0; k < inputStr.length; k++) {
        let currentChar = inputStr.charAt(k);
        if (currentChar in inputMap) {
            inputMap[currentChar]++;
        } else {
            inputMap[currentChar] = 1;
        }
    }
}

/**
 * Scramblies challenge: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
 * You're given two strings as input.  Your goal is to determine if the letters in the second string can be formed by a combination of letters in the first string.  Performance is important!  If a letter appears several times in the second string, it must occur at least that many times in the first string.  Return true if the second string can be created by taking any combination of letters - frequency included - from the first string, and false if not.  For example, if str1 = "blue" and str2 = "bel", return true.  If str1 = "art" and str2 = "tart", return false as we don't have enough "t"s in the first string.
 * @param {string} str1 String consisting of letters only
 * @param {string} str2 String consisting of letters only
 * @returns True if the second string can be formed by a subset of the first string, and false otherwise
 */
function scramble(str1, str2) {
    let str1Map = {};
    let str2Map = {};
    // Count the number of times each character appears in each strin
    buildMap(str1Map, str1);
    buildMap(str2Map, str2);
    for (let currentChar in str2Map) {
        // If letter in second string is NOT in first string OR doesn't come up frequently enough, we can't form the second string from the first
        if (!(currentChar in str1Map) || str2Map[currentChar] > str1Map[currentChar]) {
            return false;
        }
    }
    return true;
}