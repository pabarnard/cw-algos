/**
 * Are they the "same" challenge: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
 * You're given two arrays - or null values - as input.  Your goal is to check each value in the first array and see if it appears in its squared form in the second.  The frequencies must be the same; for example, if 15 appears twice in the first array, then its square, 225, must appear twice in the second array.  Return true if every value in the first array is squared in the second array in any order, and false otherwise.  If you have a null value, immediately return false.
 * @param {any} array1 An array of values - or null
 * @param {any} array2 An array of values - or null
 * @returns True if each value in the first array appears in the second array squared, and false otherwise
 */

// Helper function
function buildMap(inputMap, val) {
    if (val in inputMap) {
        inputMap[val]++;
    } else {
        inputMap[val] = 1;
    }
}


function comp(array1, array2) {
    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false;
    }
    let arr1Map = {};
    let arr2Map = {};
    for (let k = 0; k < array1.length; k++) {
        const val1 = array1[k];
        const val2 = array2[k];
        buildMap(arr1Map, val1);
        buildMap(arr2Map, val2);
    }
    let totalInSecondArray = 0;
    for (let val in arr1Map) {
        let squareVal = val ** 2;
        // Square value not found OR the multiplicities (frequencies) don't match
        if (!(squareVal in arr2Map) || arr2Map[squareVal] !== arr1Map[val]) {
            return false;
        }
        totalInSecondArray += arr1Map[val];
    }
    return true;
}