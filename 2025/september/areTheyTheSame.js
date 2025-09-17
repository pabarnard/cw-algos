/**
 * Are they the "same"? https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
 * @param {*} array1 
 * @param {*} array2 
 * @returns 
 */
function comp(array1, array2) {
    if (array1 === null || array2 === null) { // Fast fail: either array is empty, so nothing to compare
        return false;
    }
    let arr1Sorted = [...array1].sort((a, b) => a - b); // Sort in ascending order
    let arr2Sorted = [...array2].sort((a, b) => a - b); // Sort in ascending order
    for (let k = 0; k < arr1Sorted.length; k++) { // Compare each one and see if second array's entry is square of first array's entry
        if (arr1Sorted[k] * arr1Sorted[k] !== arr2Sorted[k]) {
            return false;
        }
    }
    return true;
}