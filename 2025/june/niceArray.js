/* 
Nice Array challenge: https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript
*/
function isNice(arr){
    if (arr.length === 0) { // Edge case: the array is empty
        return false;
    }
    // Create set holding all the *unique* values
    let numSet = new Set(arr);
    for (let val of arr) { // Go through the array's values, one at a time
        if (!numSet.has(val-1) && !numSet.has(val+1)) {
            return false;
        }
    }
    return true;
}