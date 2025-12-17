/**
 * Convert a Hex String to RGB: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
 * You're given a hex string of the form "#......", where each period is a number from 0-9 or a letter "a"-"f",
 * case *insensitive*.  The first two entries represent the red value, the next two are the green value, and the
 * final two are the blue value.  Return an object of the form {r: value, g: value, b: value} for the given
 * hex string.  For example, if you have "#bA152F", return {r: 186, g: 21, b: 47}.
 * @param {string} hexString A string that's seven characters long, where the first character is the "#" symbol and the remaining six are 0-9 or a-f (case insensitive)
 * @returns An object of the form {r: value, g: value, b: value} representing the RGB representation
 */
function hexStringToRGB(hexString) {
    // Helper function to get the base 10 representation of the hexadecimal character
    function getValue(hexChar) {
        let letterValueObj = {
            'A': 10,
            'B': 11,
            'C': 12,
            'D': 13,
            'E': 14,
            'F': 15
        }
        let base10val = 0;
        if (hexChar in letterValueObj) {
            base10val = letterValueObj[hexChar];
        } else {
            base10val = parseInt(hexChar);
        }
        return base10val;
    }
    let upperHexString = hexString.toUpperCase().substring(1); // Convert to upper case and trim the "#" character
    let colorValues = [];
    // Go through each *pair* of consecutive characters in the hex string and convert to base 10
    for (let k = 0; k <= 2; k++) {
        let firstChar = upperHexString[2 * k];
        let secondChar = upperHexString[2 * k + 1];
        let base10representation = 16 * getValue(firstChar) + getValue(secondChar);
        colorValues.push(base10representation);
    }
    // Now create "map" (or object in JavaScript in this case)
    let colorArr = ['r', 'g', 'b'];
    let colorMap = {};
    for (let k = 0; k < colorValues.length; k++) {
        colorMap[colorArr[k]] = colorValues[k];
    }
    return colorMap;
}

// Much more elegant solution:
function hexStringToRGB(h) {
    return {
        r: parseInt(h.slice(1, 3), 16), // Note the 16 here
        g: parseInt(h.slice(3, 5), 16),
        b: parseInt(h.slice(5, 7), 16)
    };
}
