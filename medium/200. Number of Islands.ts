/**
 * 
    Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

    Example 1:
        Input: grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
        ]
        Output: 1

    Example 2:
        Input: grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
        ]
        Output: 3
 * 
 */

function numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let count = 0;

    const dfs = (r: number, c: number) => {
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0')
            return;

        grid[r][c] = '0';
        for(const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};