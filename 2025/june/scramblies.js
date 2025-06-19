/*
Scramblies challenge: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
*/
function scramble(str1, str2) {
    let word1StrFreq = new Map(); // Holds how many of each letter in the first string are available
    // Count all the letters and their frequencies in first string
    for (let k = 0; k < str1.length; k++) {
        let curChar = str1[k];
        if (word1StrFreq.has(curChar)) {
            word1StrFreq.set(curChar, word1StrFreq.get(curChar)+1);
        } else {
            word1StrFreq.set(curChar, 1);
        }
    }
    // Now check the second string and see if its letters appear in the first string,
    // and if so, if there are any spares left
    for (let k = 0; k < str2.length; k++) {
        let curChar = str2[k];
        if (!word1StrFreq.has(curChar)) { // Letter in second string not in first string, so it's impossible
            return false;
        } else if (word1StrFreq.get(curChar) === 1) { // No more instances of this letter left in first string
            word1StrFreq.delete(curChar);
        } else { // Decrement frequency of this letter in first string
            word1StrFreq.set(curChar, word1StrFreq.get(curChar)-1);
        }
    }
    return true;
}