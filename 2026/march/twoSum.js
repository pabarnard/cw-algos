/**
 * Two Sum challenge: https://leetcode.com/problems/two-sum/
 * @param {*} nums An array of integers
 * @param {*} target The target sum as an integer
 * @returns An array of two elements holding the indexes where the corresponding values add up to the target
 */
var twoSum = function(nums, target) {
    let valuesEncounteredMap = new Map(); // Key = entry in nums array, value = index where the key is located
    for (let k = 0; k < nums.length; k++) {
        const val = nums[k];
        const diff = target - val;
        if (valuesEncounteredMap.has(diff)) { // If we have found the other value before such that that number plus the current one adds up to the target, we have our answer
            return [valuesEncounteredMap.get(diff),k];
        }
        valuesEncounteredMap.set(val,k);
    }
};