/**
 * Find the Capitals: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
 * You are given a string as input.  Your goal is to return an array consisting of the indexes of the characters that are capitalized.  For example, if you have "BluE", return [0, 3].
 * @param {string} word Input string
 * @returns Array consisting of the indexes of all characters that are upper case
 */
function capitals(word) {
    // Method 1
    let arr = [];
    const charCodeForA = "A".charCodeAt(0);
    const charCodeForZ = "Z".charCodeAt(0);
    word.split("").forEach((char, ind) => {
        const curCharCode = char.charCodeAt(0);
        if (curCharCode >= charCodeForA && curCharCode <= charCodeForZ) {
            arr.push(ind);
        }
    })
    return arr;
    // // Method 2
    // const indArr = [];
    // for (let k = 0; k < word.length; k++) {
    //     const curChar = word[k]; 
    //     const curCharCode = curChar.charCodeAt(0);
    //     if (curCharCode >= charCodeForA && curCharCode <= charCodeForZ) {
    //         indArr.push(k);
    //     }
    // }
    // return indArr;
};