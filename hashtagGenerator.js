/** Hashtag Generator challenge: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
 * @param {string} str Input string
 * @returns {string} A new string in the form "#EachWordIsCapitalizedWithNoSpaces", where all spaces are removed
 * and each word is capitalized
 */
function generateHashtag(str) {
  if (str === "") { // Fast fail case: the string is empty
    return false;
  }
  let hashtagStr = "#";
  let curWord = "";
  for (const curChar of str) {
    if (curChar === " " && curWord !== "") {
      hashtagStr = hashtagStr + curWord;
      curWord = "";
    } else if (curChar !== " " && curWord === "") { // New word, and it's not a space, so capitalize
      curWord = curChar.toUpperCase();
    } else if (curChar !== " ") { // Not a space, and we're in a word
      curWord = curWord + curChar; // NOTE: Might consider converting to lower case down the road
    } // Implicit else: it's a space, and we don't have a word right now, so there's nothing to do
  }
  if (curWord !== "") { // Cleaning up, if we have a word still left after going through the string
    hashtagStr = hashtagStr + curWord;
  }
  if (hashtagStr === "#" || hashtagStr.length > 140) {
    return false;
  } else {
    return hashtagStr;
  }
}