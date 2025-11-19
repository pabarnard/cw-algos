/**
 * Stones on the Table: https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript
 * You're given a string consisting of stones, where each stone is "R", "G" or "B".  Your goal is to remove all the stones in such a way so that there are no duplicates next to each other.  Return the number of stones you removed.  For example, if you have "RGGGRRBR", return 3 as we remove two "G"s before the second "R" and an "R" immediately before the "B".
 * @param {string} stones A string consisting of "R", "G" and "B"
 * @returns The number of stones to remove such that there are no two consecutive items that are duplicates
 */
function solve(stones) {
    let consecutiveDuplicateCount = 0;
    for (let k = 1; k < stones.length; k++) { // Note the starting index
        if (stones[k] === stones[k - 1]) {
            consecutiveDuplicateCount++;
        }
    }
    return consecutiveDuplicateCount;
}