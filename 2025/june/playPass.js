/*
Playing with Passphrases challenge: https://www.codewars.com/kata/559536379512a64472000053/train/javascript
*/
function playPass(s, n) {
    let newStr = "";
    // Use UTF-16 encoding to convert from upper to lower case and vice versa and rotate
    const digitZeroUTFCode = "0".charCodeAt(0);
    const digitNineUTFCode = "9".charCodeAt(0);
    const upperAUTFCode = "A".charCodeAt(0); // 65
    const upperZUTFCode = "Z".charCodeAt(0); // 90
    const lowerAUTFCode = "a".charCodeAt(0); // 97
    const lowerZUTFCode = "z".charCodeAt(0); // 112
    const lowerUpperCodeOffset = upperAUTFCode - lowerAUTFCode; // 32
    const updatedRotations = n % 26; // To minimize the actual rotations - for example, if we rotate 108 times, it's the same as rotating 4 times
    for (let k = 0; k < s.length; k++) {
        const curChar = s[k];
        let curCharCode = curChar.charCodeAt(0);
        // If it's an upper-case letter
        if ((curCharCode >= upperAUTFCode && curCharCode <= upperZUTFCode) ||
            (curCharCode >= lowerAUTFCode && curCharCode <= lowerZUTFCode)) {
            // Rotate accordingly
            curCharCode += updatedRotations;
            if (curCharCode > lowerZUTFCode || curCharCode > upperZUTFCode) { // If we're past "z" or "Z"
                curCharCode -= 26;
            }
            // Now convert to upper or lower case based on index - if necessary
            if (k % 2 == 1 && curCharCode >= upperAUTFCode && curCharCode <= upperZUTFCode) { // Convert to lower case if it's an odd position and the current letter is upper case
                curCharCode -= lowerUpperCodeOffset;
            } else if (k % 2 == 0 && curCharCode >= lowerAUTFCode && curCharCode <= lowerZUTFCode) { // Convert to upper case if it's an even position and the current letter is lower case
                curCharCode += lowerUpperCodeOffset;
            }
            newStr += String.fromCharCode(curCharCode); // Save updated letter
        } else if (curCharCode >= digitZeroUTFCode && curCharCode <= digitNineUTFCode) { // If it's a number
            // Find complement to 9 (e.g. complement of 3 is 6, of 4 is 5, etc.)
            let newDigit = 9 - parseInt(curChar);
            newStr += `${newDigit}`;
        } else {
            // If it's any other character, leave alone
            newStr += s[k];
        }
    }
    let revStr = "";
    // Reverse the string
    for (let k = newStr.length - 1; k >= 0; k--) {
        revStr += newStr[k];
    }
    return revStr;
}