/**
 * First Fibonacci challenge: https://www.codewars.com/kata/6965d769930fb2eff921668f/train/javascript
 * You're given two consecutive integers that form two consecutive numbers of a Fibonacci-like sequence, where the first input is smaller than the second.  
 * A Fiboancci-like sequence is a sequence where given two starting values, the next value is the sum of the previous two.  Your goal is to work backwards
 * to find and return the two smallest integers that start the sequence off that include the given numbers in order.  The result is to be returned in an array
 * with only two values: [smallestValue, secondSmallestValue].  For example, if you have [6, 9], return [0, 3]: 0, 3, 3, 6, 9.  [398, 644] should return [2, 6]
 * and NOT [4, 2]: [4] 2, 6, 8, 14, 22, 36, 58, 94, 152, 246, 398, 644.  Note that the 4 in the brackets does NOT count, as the sequence from the beginning should
 * be a non-decreasing sequence.
 * @param {number} first A non-negative integer
 * @param {number} second A non-negative integer bigger than the first one
 * @returns A two-element array representing the first terms of the Fibonacci-like sequence that includes the given two values; the array must be sorted
 */
function solution(first, second) {
    while (second - first >= 0) { // While we can keep subtracting; note that a number can repeat if it's consecutive
        if (second - first > first) { // If when subtracting the next value decreasing is *bigger* than the smallest so far, the sequence ends
            break;
        }
        [first, second] = [second - first, first];
    }
    return [first, second];
    // [58534, 94710] should be [0, 14]
    // [6, 9] should be [0, 3]: 0 3 3 6 9
    // [385, 623] should be [0, 7]
    // [1220, 1974] should be [0, 2]
    // [398, 644] should be [2, 6], NOT [4, 2]
}
