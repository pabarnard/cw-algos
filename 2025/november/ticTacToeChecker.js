/**
 * Tic-Tac-Toe Checker: https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
 * You're given a 3 * 3 grid representing a tic-tac-toe board.  Each entry consists of a 0, meaning the square is yet to be filled; a 1 representing player 1; or a 2 representing player 2.  You are to check the grid and determine the winner.  Return 1 or 2 if either of those players 1, -1 if the game isn't over because at least one square is still unfilled, or a 0 meaning the game ends in a draw (cat's game).
 * @param {*} board A 3 * 3 array of values consisting only of 0, 1 and 2
 * @returns -1 if nobody has won yet and at least one square is left to be filled; 0 if the game is a draw with all squares filled; 1 if player 1 won or 2 if player 2 won
 */
function isSolved(board) {
    // Check rows and columns
    for (let k = 0; k <= 2; k++) {
        // Check column
        if (board[0][k] === board[1][k] && board[1][k] === board[2][k] && board[0][k] > 0) {
            return board[0][k];
        }
        // Check row
        if (board[k][0] === board[k][1] && board[k][1] === board[k][2] && board[k][0] > 0) {
            return board[k][0];
        }
    }
    // Check top left to bottom right diagonal
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] > 0) {
        return board[0][0];
    }
    // Check bottom left to top right diagonal
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] > 0) {
        return board[2][0];
    }
    if (board.every(row => row.every(val => val > 0))) { // All squares filled, so it's a cat's game
        return 0;
    } else { // There's at least one square left to fill
        return -1;
    }
}