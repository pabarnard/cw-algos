/**
 * Triangle of Multiples: https://www.codewars.com/kata/58ecc0a8342ee5e920000115/train/javascript
 * You're given a positive integer n as input.  Your goal is to generate multiples like the following example for n = 4:
 * 1
 * 2 4 2
 * 3 6 9 6 3
 * 4 8 12 16 12 8 4
 * Each row starts and ends with the same value, and each value is a multiple of the starting value, increasing up until its squared value, then decreasing.  Return an array where the first entry is the total sum, the second entry is the sum of all even values in the triangle above, and the final entry is the sum of all odd values in the triangle above.  In this example, return [100, 84, 16].
 * @param {number} n A positive integer n
 * @returns An array of the form [totalSum, evenSum, oddSum]
 */
function multTriangle(n) {
    // Approach I: Loops
    let evenSum = 0, oddSum = 0;
    for (let row = 1; row <= n; row++) {
        let isIncreasing = true;
        let value = row;
        // Loop through possible values for current row
        while (value >= row) {
            if (value % 2 == 0) {
                evenSum += value;
            } else {
                oddSum += value;
            }
            if (value === row * row) {
                isIncreasing = false;
            }
            if (isIncreasing) {
                value += row;
            } else {
                value -= row
            }
        }
    }
    return [evenSum + oddSum, evenSum, oddSum];
    //   // Approach II: Mathematical approach
    //   let totalSum = ((n*(n+1))/2) ** 2;
    //   let oddSum = Math.ceil(n / 2) ** 4;
    //   let evenSum = totalSum - oddSum;
    //   return [totalSum, evenSum, oddSum];
}

/* 
Numbers					                Odd	    Even 	Odd total	Even total	Overall total
                                        Sum     Sum
1					                    1       0		1	1^4	    0		    1	    1*1
2 4 2					                0	    8		1		    8		    9	    3*3
3 6 9 6 3 				                15	    12		16	2^4	    20		    36	    6*6
4 8 12 16 12 8 4			            0	    64		16		    84		    100	    10*10
5 10 15 20 25 20 15 10 5		        65	    60		81	3^4	    144		    225	    15*15
6 12 18 24 30 36 30 24 18 12 6		    0	    216		81		    360		    441	    21*21
7 14 21 28 35 42 49 42 35 28 21 14 7	175	    168		256	4^4	    528		    784	    28*38
8 ...					                0	    512		256		    1040		1296	36*36
9 ...					                369	    360		625	5^4	    1400		2025	45*45
10 ...					                0	    1000	625		    2400		3025	55*55

Sum from 1 through n = n*(n+1)/2

So for...:
n = 2: 1 + 2 = 3, and 2*3/2 = 3
n = 5: 1 + 2 + 3 + 4 + 5 = 15, and 5*6/2 = 15
*/