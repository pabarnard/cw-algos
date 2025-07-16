/**
 * Mumbling challenge: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
 * @param {string} s A string consisting of only English letters, both lower-case and upper-case
 * @returns Mumbled string, where each character is capitalized, and then lower-case versions of the same letter are added k times, where k is the 0-based index of the current character in the input string, with each set of characters separated by a hyphen ("-").  For example, "AbmcZ" returns "A-Bb-Mmm-Cccc-Zzzzz".
 */
function accum(s) {
    let mumble = "";
    for (let k = 0; k < s.length; k++) {
        let curChar = s[k];
        mumble += curChar.toUpperCase(); // Start with upper-case version of letter
        // Now add k copies of the lower-case version of this letter
        curChar = curChar.toLowerCase();
        for (let p = 0; p < k; p++) {
            mumble += curChar;
        }
        // Add a hyphen if we're NOT at the end
        if (k < s.length - 1) {
            mumble += "-";
        }
    }
    return mumble;
}