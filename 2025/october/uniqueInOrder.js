/**
 * Unique in Order: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 * You're given an iterable (e.g. array, string) as input, and these can be any value type.  Your goal is to return an array consisting of only the unique items in order from left to right.  In other words, remove consecutive duplicates.  For example, if you're given [3, 3, 5, 1, 3, 5, 5], return [3, 5, 1, 3, 5].
 * @param {*} iterable An iterable (e.g. a string, an array)
 * @returns An array of indexes corresponding to the unique items in order
 */
function uniqueInOrder(iterable) {
    if (iterable.length === 0) { // Edge case: there is nothing to iterate through, so stop immediately
        return [];
    }
    let prevItem = iterable[0];
    const uniqueSeq = [prevItem];
    for (let k = 1; k < iterable.length; k++) {
        let curItem = iterable[k];
        if (curItem !== prevItem) {
            uniqueSeq.push(curItem);
            prevItem = curItem;
        }
    }
    return uniqueSeq;
}