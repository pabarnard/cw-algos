/**
 * Replace with Alphabet Position: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 * You're given a string as input.  Your goal is to take each letter and map it to its position in the alphabet, so "a" is 1, "b" is 2,
 * etc.  Ignore all characters that are not letters.  Return a new string consisting of each position, with spaces separating each one.
 * Consider each letter regardless of its case.
 * Example:
 * "abbA" returns "1 2 2 1"
 * "Hello there!" returns "8 5 12 12 15 20 8 5 18 5"
 * @param {string} text Any string
 * @returns A new string containing the positions of each letter, where 1 = "a", 2 = "b", etc. - and ONLY letters
 */

function alphabetPosition(text) {
  const lowercaseACode = "a".charCodeAt(0);
  const lowercaseZCode = "z".charCodeAt(0);
  let lowercaseText = text.toLowerCase();
  let positionStr = "";
  for (const char of lowercaseText) {
    const thisCode = char.charCodeAt(0);
    // If this character is from "a" through "z" ONLY
    if (thisCode >= lowercaseACode && thisCode <= lowercaseZCode) {
      if (positionStr !== "") {
        positionStr += " ";
      }
      positionStr += `${thisCode - lowercaseACode + 1}`;
    }
  }
  return positionStr;
}