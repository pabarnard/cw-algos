/**
 * Alphabetical Addition: https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript
 * You're given a variable number of lower-case English letters as input (and no letters are possible).  Your goal is to "add" the
 * letters up and return the sum as a letter, with "z" wrapping around to "a".  So "a" is 1, "b" is 2, ..., "z" is 26, and if you exceed 26,
 * subtract 26 as often as needed until the sum is from 1 through 26.  
 * 
 * Example: "a", "c" returns "d" (1 + 3 = 4)
 * Example: "z", "a", "b" returns "c" (26 + 1 + 2 = 29, but since it's greater than 26 we subtract 26 to get 3, which corresponds to "c")
 * @param  {...any} letters A variable number of lower-case letters as input
 * @returns The "sum" of the letters, wrapped around accordingly
 */


function addLetters(...letters) {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let currentSum = 0;
  for (let ltr of letters) {
    currentSum += lowercaseLetters.indexOf(ltr) + 1; // Note the +1 due to indexing (index 0 is "a", and "a" is basically has value 1, for example)
  }
  if (currentSum === 0) { // No letters
    return "z";
  } else { // Note the subtraction due to indexing to obtain the proper letter and the "% 26" to get a valid index
    return lowercaseLetters[(currentSum - 1) % 26];
  }
}