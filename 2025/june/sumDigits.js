/*
Summing a Number's Digits challenge: https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
*/
function sumDigits(number) {
    let numStr = `${Math.abs(number)}`; // Convert to string - removing the "-" if it's negative
    let sum = 0; // Keep track of sum of digits
    for (let k = 0; k < numStr.length; k++) { // Loop through each digit, one at a time
        sum += parseInt(numStr[k]); // Add the digit accordingly
    }
    return sum; // Return overall sum of digits
}