/**
 * Sort the odd: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 * You're given an array of positive integers as input.  Your goal is to create and return a new array such that
 * each even integer is left as is, while the odd integers are sorted and then inserted into the appropriate
 * spots.  For example, if you have [1, 2, 3, 1, 4, 3], return [1, 2, 1, 3, 4, 3].
 * @param {*} array An array of positive integers
 * @returns A new array with the odd values sorted while leaving the even values at their exact positions
 */
function sortArray(array) {
    let newArr = [];
    let oddValues = [];
    let indexesWithOddValues = [];
    for (let k = 0; k < array.length; k++) {
        const currentVal = array[k];
        if (currentVal % 2 === 0) { // Even value, so put that into new array immediately
            newArr.push(currentVal);
        } else {
            newArr.push(null); // Placeholder
            oddValues.push(currentVal);
            indexesWithOddValues.push(k);
        }
    }
    oddValues.sort((a, b) => a - b); // Sort odd values in ascending order
    // Put sorted odd values into new array at proper spots
    for (let k = 0; k < oddValues.length; k++) {
        const indexToInsertInto = indexesWithOddValues[k];
        newArr[indexToInsertInto] = oddValues[k];
    }
    return newArr;
}