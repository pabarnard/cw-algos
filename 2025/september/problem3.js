/**
 * Find the smallest: https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript
 * You're given a positive integer as input.  Your goal is to find the smallest number you can obtain by picking one digit and moving it anywhere -
 * including back in its original post - to form the smallest number you can.  Return an array of the form [number, i, j], where number is the 
 * smallest value you can obtain by moving a digit at index i to index j (which can be the same spot), moving the other digits accordingly.
 * You must minimize i and j.
 * Examples: 235514 would return [123554, 4, 0], so take the digit at index 4, which is "1", and move it to index 0, moving the remaining
 * digits rightward (the "2355").
 * @param {number} n A positive integer
 * @returns An array of the form [number, i, j], where number is the smallest number formed by grabbing a digit at index i (0-based index) and placing it at index j (moving values accordingly)
 */
function smallest(n) {
    // console.log(n);
    if (n < 10) { // Fast case: n is a single-digit integer
        return [n, 0, 0];
    }
    let numStr = `${n}`;
    let digitArr = numStr.split("");
    // CASE I: Find first digit such that the one after it is smaller, then move that as far right 
    // as possible (e.g. 235514, so move)
    let digitArrI = [...digitArr];
    let indexI = 0;
    let pickedIndexI = 0
    while (indexI < digitArrI.length - 1 && digitArrI[indexI] <= digitArrI[indexI + 1]) {
        if (digitArrI[indexI] !== digitArrI[indexI + 1]) {
            pickedIndexI = indexI + 1;
        }
        indexI++;
    }
    // Now move this digit as far to the right as we can
    let k = pickedIndexI;
    let stoppingIndexI = pickedIndexI;
    while (k < digitArrI.length - 1 && digitArrI[k] >= digitArrI[k + 1]) {
        [digitArrI[k], digitArrI[k + 1]] = [digitArrI[k + 1], digitArrI[k]]; // Swap values
        if (digitArrI[k] !== digitArrI[k + 1]) {
            stoppingIndexI = k + 1;
        }
        k++;
    }
    // console.log(pickedIndexI);
    // console.log(stoppingIndexI);
    // console.log(digitArrI);
    let valueI = parseInt(digitArrI.join(""));
    // CASE II: Starting with the second *unique* digit found from the left, take the smallest digit 
    // found from that point that's as far right as possible (but the first in a series of the same
    // digit, like 1132224) and move it as far left as possible
    let digitArrII = [...digitArr];
    let pickedIndexII = 1;
    // Find first unique digit to the right that's NOT the first digit's value (e.g. 33352, so "5")
    while (pickedIndexII < digitArrII.length && digitArrII[pickedIndexII] === digitArrII[pickedIndexII - 1]) {
        pickedIndexII++;
    }
    let smallestDigitII = digitArrII[pickedIndexII];
    // Pick smallest digit from remaining digits
    for (let q = pickedIndexII; q < digitArrII.length; q++) {
        if (digitArrII[q] < smallestDigitII) {
            smallestDigitII = digitArrII[q];
        }
        // To ensure we grab only first index in a series of the same digits
        if (digitArrII[q] === smallestDigitII && digitArrII[q - 1] !== digitArr[q]) {
            pickedIndexII = q;
        }
    }
    // Now move this found digit as far left as possible
    k = pickedIndexII;
    let stoppingIndexII = pickedIndexII;
    while (k > 0 && digitArrII[k - 1] >= digitArrII[k]) {
        [digitArrII[k - 1], digitArrII[k]] = [digitArrII[k], digitArrII[k - 1]]; // Swap digits
        k--;
    }
    stoppingIndexII = k;
    // console.log(pickedIndexII);
    // console.log(stoppingIndexII);
    // console.log(digitArrII);
    let valueII = parseInt(digitArrII.join(""));
    if (valueI <= valueII) { // Note the "=" in case digits are all the same (e.g. 44444444)
        return [valueI, pickedIndexI, stoppingIndexI];
    } else if (Math.abs(pickedIndexII - stoppingIndexII) === 1) {
        return [valueII, Math.min(pickedIndexII, stoppingIndexII), Math.max(pickedIndexII, stoppingIndexII)]
    } else {
        return [valueII, pickedIndexII, stoppingIndexII];
    }
}