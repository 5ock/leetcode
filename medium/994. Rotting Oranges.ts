/**
 * 
    You are given an m x n grid where each cell can have one of three values:

    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.
    Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

    Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

    Example 1:
        Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
        Output: 4

    Example 2:
        Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
        Output: -1
        Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

    Example 3:
        Input: grid = [[0,2]]
        Output: 0
        Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 * 
 */

function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue: [number, number][] = [];
    let freshOranges = 0;
    let minutes = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === 1)
                freshOranges++;
            else if(grid[i][j] === 2)
                queue.push([i, j]);
        }
    }

    if(freshOranges === 0)
        return 0;

    while(queue.length > 0) {
        const sizeLength = queue.length;
        let isRotten = false;

        for(let i = 0; i < sizeLength; i++) {
            const [r, c] = queue.shift()!;
            for(const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    queue.push([nr, nc]);
                    grid[nr][nc] = 2;
                    isRotten = true;
                    freshOranges--;
                }
            }
        }

        if(isRotten)
            minutes++;
    }

    return freshOranges === 0 ? minutes : -1;
};