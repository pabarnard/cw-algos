/**
 * XMas Tree: https://www.codewars.com/kata/577c349edf78c178a1000108/train/javascript
 * You're given a positive integer n representing the height of an XMas tree you are to "draw" out.  The top
 * of the tree will have one "#" in the middle with enough underscores "_" on each side to pad the string out.
 * Each row below it will gain 2 "#" symbols in the middle while removing two underscores "_", one on each side.
 * You will have n rows representing the tree itself, plus two more rows representing the trunk, where every
 * character except the middle one will have a "_", with the middle character as a "#" for the trunk itself.
 * For example, for n = 3, return:
 * [
 *   ["___#___"],
 *   ["__###__"],
 *   ["_#####_"],
 *   ["#######"],
 *   ["___#___"],
 *   ["___#___"]
 * ]
 * Return an array consisting of rows of the trees in order
 * @param {number} n Number of rows in tree itself
 * @returns An array representing the tree with a trunk of two rows with thickness one
 */
function xMasTree(n) {
    let treeArr = [];
    for (let k = 1; k <= n; k++) {
        let numSpacesEachSideOfTree = n - k;
        let blankSpaces = "_".repeat(numSpacesEachSideOfTree);
        let treePart = "#".repeat(2 * k - 1);
        let entireRow = blankSpaces + treePart + blankSpaces;
        treeArr.push(entireRow);
    }
    let stemRow = "_".repeat(n - 1) + "#" + "_".repeat(n - 1);
    treeArr.push(stemRow, stemRow);
    return treeArr;
}