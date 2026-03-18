/**
 * Length of Longest Fibonacci Subsequence: https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/
 * You're given an array of integers, each of which is strictly larger than the number preceding it.  Your goal is to the find the longest subsequence such that the each of the entries is part of a Fibonacci-like seqeuence, where each number is the sum of the two before it.  A subsequence of an array is found by removing any entries - including none - from the original array.  Return the length of the longest Fibonacci subsequence you can find.
 * @param {*} arr An array of strictly increasing integers
 * @returns The length of the longest Fibonacci subsequence found
 */
var lenLongestFibSubseq = function(arr) {
    const lengthOfArr = arr.length; // Number of items in the array
    let valueSet = new Set(arr);
    // Note how long the longest sequence is that starts with [arr[i], arr[j]], where i < j; we'll start with a default of -1
    let dp = new Array(lengthOfArr).fill().map(() => new Array(lengthOfArr).fill(-1));
    for (let i = 0; i < lengthOfArr - 1; i++) {
        for (let j = i + 1; j < lengthOfArr; j++) {
            if (dp[i][j] >= 0) {
                continue;
            }
            let val1 = arr[i];
            let val2 = arr[j];
            let nextVal = val1 + val2;
            let totalLength = 2;
            // Keep going as long as we find the next term in the sequence
            while (valueSet.has(nextVal)) {
                totalLength++;
                val1 = val2;
                val2 = nextVal;
                nextVal = val1 + val2;
            }
            // If we have 3 or more values, save the length of this sequence, otherwise save 0
            if (totalLength > 2) {
                dp[i][j] = totalLength;
            } else {
                dp[i][j] = 0;
            }
        }
    }
    // Now find longest subsequence
    let maxLength = 0;
    for (let i = 0; i < lengthOfArr - 1; i++) {
        for (let j = i; j < lengthOfArr; j++) {
            maxLength = Math.max(maxLength, dp[i][j]);
        }
    }
    return maxLength;
};