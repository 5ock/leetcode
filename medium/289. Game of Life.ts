/**
 * 
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

Given the current state of the board, update the board to reflect its next state.

Note that you do not need to return anything.

Example 1:
    Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
Example 2:
    Input: board = [[1,1],[1,0]]
    Output: [[1,1],[1,1]]
    
 * 
 */

/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;
    const dirs = [
        [-1,-1],[-1,0],[-1,1],
        [0,-1],[0,1],
        [1,-1],[1,0],[1,1]
    ];

    const countNeighbor = (r: number, c: number): number => {
        let count = 0;

        for(const [dr, dc] of dirs) {
            const nr = dr + r;
            const nc = dc + c;
            if(nr >= 0 && nr < m && nc >= 0 && nc < n) {
                if(board[nr][nc] === 1 || board[nr][nc] === 2)
                    count++
            }
        }

        return count;
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const count = countNeighbor(i, j);

            if(board[i][j] === 1) {
                if(count > 3 || count < 2)
                    board[i][j] = 2;
            } else {
                if(count === 3)
                    board[i][j] = -1;
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 2)
                board[i][j] = 0;
            else if(board[i][j] === -1)
                board[i][j] = 1;
        }
    }
};