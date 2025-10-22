/**
 * Switcheroo: https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
 * You're given a string with only the characters "a", "b" and "c".  Your goal is to return a new string where we swap "a" and "b" around while leaving each instance of "c" alone.  For example, if you have "aabbbac", return "bbaaabc".
 * @param {string} x String consisting only of "a", "b" and "c"
 * @returns A new string where the "a" and "b" characters are swapped
 */
function switcheroo(x) {
    const charArr = [];
    x.split("").forEach(char => {
        // Switch "a" and "b" accordingly
        if (char === "a") {
            charArr.push("b");
        } else if (char === "b") {
            charArr.push("a");
        } else { // Leave alone
            charArr.push(char);
        }
    })
    return charArr.reduce((overallStr, char) => overallStr + char);
}