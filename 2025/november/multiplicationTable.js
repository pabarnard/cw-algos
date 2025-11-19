/**
 * Multiplication table: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
 * You're given a positive integer N, denoted "size".  Your goal is to create an N * N multiplication grid.  For example, if N = 4, return [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]].
 * @param {number} size The number of rows in the multiplication grid
 * @returns A 2-D array consisting of size * size numbers representing the multiplication grid
 */
function multiplicationTable(size) {
    let firstRow = [];
    for (let k = 1; k <= size; k++) {
        firstRow.push(k);
    }
    let multiplicationTable = [];
    for (let row = 1; row <= size; row++) {
        multiplicationTable.push(firstRow.map(val => val * row));
    }
    return multiplicationTable;
}