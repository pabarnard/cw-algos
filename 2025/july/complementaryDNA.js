/** Complementary DNA challenge: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
 * You're given a string consisting of "A", "C", "T" and "G" ONLY, all upper case letters.  Return the complement of the string, where "A" and "T" are complements and "C" and "G" are complements.
 * @param {string} dna String consisting of "A", "C", "T" and "G"
 * @returns New string representing the complement of the DNA sequence
 */
function dnaStrand(dna) {
    let complement = "";
    for (let curChar of dna) {
        switch (curChar) {
            case "A":
                complement += "T";
                break;
            case "C":
                complement += "G";
                break;
            case "T":
                complement += "A";
                break;
            case "G":
                complement += "C";
                break;
            default:
                complement += curChar;
        }
    }
    return complement;
}

dnaStrand()