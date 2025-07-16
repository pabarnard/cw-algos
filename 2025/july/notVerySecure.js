/**
 * Not Very Secure challenge: https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
 * You're given a string as input.  Your goal is to verify if it's alphanumeric.  A string is alphanumeric if:
 * - The string has at least one character (i.e. not empty)
 * - Each character is a Latin letter (so A-Z or a-z) or a Arabic digit (0-9)
 * - There are no spaces, underscores or any other symbols - just the aforementioned letters and numbers
 * 
 * Return true if this is an alphanumeric string and false otherwise.
 */
function alphanumeric(string) {
    if (string.length === 0) { // To handle the empty-string edge case
        return false;
    }
    for (let curChar of string) {
        const charCode = curChar.charCodeAt(0);
        // NOT upper case and NOT lower case and NOT a digit means this is NOT an alphanumeric string, so stop immediately
        if (!(charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) &&
            !(charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) &&
            !(charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0))) {
            return false;
        }
    }
    return true; // We made it all the way to the end, so every character is is good (number or letter)
}