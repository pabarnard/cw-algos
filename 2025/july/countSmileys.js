/**
 * Count the Smiley Faces: https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
 * You're given an array of strings.  For the string to be considered a smiley, it can only be 2 or 3 characters long, subject
 * to these conditions:
 * - The first character must be ":" or ";"
 * - The last character must be a ")" or "D"
 * - If you have three characters, then the middle one must be "-" or "~"
 * Return the number of valid smileys found.  If the array is empty, return 0.
 * Example: ":-)" is OK, but ":~" is not
 */
function countSmileys(arr) {
    let totalOfSmileys = 0;
    for (let candidate of arr) {
        let lastInd = candidate.length - 1;
        if (lastInd <= 0 || lastInd >= 3) { // String is too short or too long (can only be 2 or 3 characters long to be valid)
            continue;
        }
        // Eyes && mouth && nose (if included)
        if ((candidate[0] === ":" || candidate[0] === ";") &&
            (candidate[lastInd] === ")" || candidate[lastInd] === "D") &&
            (lastInd === 1 || candidate[1] === "-" || candidate[1] === "~")) {
            totalOfSmileys += 1;
        }
    }
    return totalOfSmileys;
}