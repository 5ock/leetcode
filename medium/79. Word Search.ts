/**
 * 
    Given an m x n grid of characters board and a string word, return true if word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

    Example 1:
        Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
        Output: true
    Example 2:
        Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
        Output: true
    Example 3:
        Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
        Output: false
 * 
 */

function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row: number, col: number, index: number): boolean {
        if(index === word.length)
            return true;

        if(col < 0 || col >= cols || row < 0 || row >= rows || board[col][row] !== word[index])
            return false;

        const temp = board[row][col];
        board[row][col] = '#';

        const found = 
            dfs(col + 1, row, index + 1) ||
            dfs(col - 1, row, index + 1) ||
            dfs(col, row + 1, index + 1) ||
            dfs(col, row - 1, index + 1);

        board[row][col] = temp;
        return found;
    }

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            if(dfs(i, j, 0))
                return true;
        }
    }

    return false;
};