/** Reverse or Rotate challenge: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
 * @param {string} str Input string consisting of only the digits 0-9
 * @param {number} sz Size of each chunk (substring) of digits to examine
 * @returns {string} New string with each set of digits of size "sz" either rotated to the left by one digit 
 * if the substring's sum is odd or reversed if the substring's sum is even
 */
function revrot(str, sz) {
  if (sz <= 0 || sz > str.length) { // Fast fail cases - non-positive size or size is too large
    return "";
  }
  let newStr = "";
  // Loop through each *chunk*, one at a time
  for (let k = 0; k <= str.length - sz; k += sz) {
    // Now either reverse or rotate this particular chunk (substring), starting at index k
    let reversedStr = "";
    let rotatedStr = "";
    let curSum = 0;
    for (let curInd = k + sz - 1; curInd >= k; curInd--) { // Loop for each character in current chunk
      const curDigit = str[curInd];
      curSum += parseInt(curDigit);
      reversedStr = reversedStr + curDigit;
      if (curInd > k) {
        rotatedStr = curDigit + rotatedStr;
      } else { // Move first digit to end (rotate left)
        rotatedStr = rotatedStr + curDigit;
      }
    }
    if (curSum % 2 == 0) { // Even sum, so use reversed string
      newStr = newStr + reversedStr;
    } else { // Odd sum, so use rotated string
      newStr = newStr + rotatedStr;
    }
  }
  return newStr;
}