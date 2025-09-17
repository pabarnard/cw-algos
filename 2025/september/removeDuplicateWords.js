/**
 * Remove Duplicate Words: https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
 * You are given a string consisting of only words (letters) and spaces.  Your goal is to remove ALL the duplicates and return a new string
 * consisting of only the first instance of each word found.  For example, if you have "love is love is love is happy", return "love is happy".
 * The order of the words first encountered must be preserved.
 * @param {string} s A string consisting only of words and spaces
 * @returns New string consisting only of the unique words in order of when they were encountered
 */
function removeDuplicateWords(s) {
    const allWordsArr = s.split(" ");
    const uniqueWordSet = new Set(); // Use set to save unique words ONLY; insertion order is preserved
    for (const word of allWordsArr) {
        if (!uniqueWordSet.has(word)) {
            uniqueWordSet.add(word);
        }
    }
    let newStr = ""; // Now go through unique words found and add to new string
    for (const word of uniqueWordSet) {
        if (newStr !== "") {
            newStr += " ";
        }
        newStr += word;
    }
    return newStr;
}