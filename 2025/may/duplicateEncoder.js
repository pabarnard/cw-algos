/** Duplicate Encoder challenge: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * @param {string} word Input string
 * @returns {string} New string consisting of only parentheses, where each "(" denotes a character that 
 * appears only once and each ")" represents a character that shows up at least twice, case insensitive
 */
function duplicateEncode(word){
  let newParensStr = "";
  const letterFreqMap = new Map(); // Key = letter, value = frequency
  // Convert to lower case first (O(N) time)
  let lowerCasedWord = word.toLowerCase();
  // Now count how many times each character occurs
  for (const curChar of lowerCasedWord) {
    if (letterFreqMap.has(curChar)) { // Duplicate character
      letterFreqMap.set(curChar,letterFreqMap.get(curChar)+1);
    } else { // New character
      letterFreqMap.set(curChar,1);
    }
  }
  // Now create new string with parentheses
  for (const curChar of lowerCasedWord) {
    if (letterFreqMap.get(curChar) > 1) {
      newParensStr = newParensStr + ")"; // Character occurs more than once, so add ")"
    } else {
      newParensStr = newParensStr + "("; // Add "(", as this is the only occurrence of character
    }
  }
  return newParensStr;
}