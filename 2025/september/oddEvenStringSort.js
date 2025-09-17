/**
 * Odd-Even String Sort: https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
 * @param {string} S String
 * @returns New string consisting of the characters at the even indices, then a space, then the characters at odd indices in order.
 */

function sortMyString(S) {
    let evenStr = ""; // String consisting of characters at even indexes
    let oddStr = "";
    for (let k = 0; k < S.length; k += 2) { // Go through each pair of even/odd indices at once
        evenStr += S[k];
        if (k + 1 < S.length) { // To ensure we don't run past the end of the string if last index is even
            oddStr += S[k + 1];
        }
    }
    return evenStr + " " + oddStr;
}