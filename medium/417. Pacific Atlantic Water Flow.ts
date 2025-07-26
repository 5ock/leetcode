/**
 * 
    There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

    The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

    The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

    Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

    Example 1:
        Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
        Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
        Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
        [0,4]: [0,4] -> Pacific Ocean 
            [0,4] -> Atlantic Ocean
        [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
            [1,3] -> [1,4] -> Atlantic Ocean
        [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
            [1,4] -> Atlantic Ocean
        [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
            [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
        [3,0]: [3,0] -> Pacific Ocean 
            [3,0] -> [4,0] -> Atlantic Ocean
        [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
            [3,1] -> [4,1] -> Atlantic Ocean
        [4,0]: [4,0] -> Pacific Ocean 
            [4,0] -> Atlantic Ocean
        Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
    Example 2:
        Input: heights = [[1]]
        Output: [[0,0]]
        Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
 * 
 */

function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const pacific: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic: boolean[][] = Array.from({ length: m}, () => Array(n).fill(false));
    const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (r: number, c: number, visited: boolean[][], prevHeight: number): void => {
        if(r < 0 || r >= m || c < 0 || c >= n || visited[r][c] || heights[r][c] > prevHeight)
            return;

        visited[r][c] = true;

        for(const [dr, dc] of directions) {
            dfs(r + dr, c + dc, visited, heights[r][c]);
        }
    }

    for(let i = 0; i < m; i++) {
        dfs(i, 0, pacific, heights[i][0]);
        dfs(i, n - 1, atlantic, heights[i][n - 1]);
    }

    for(let j = 0; j < n; j++) {
        dfs(0, j, pacific, heights[0][j]);
        dfs(m - 1, j, atlantic, heights[m - 1][j]);
    }

    const result: number[][] = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(pacific[i][j] && atlantic[i][j])
                result.push([i, j]);
        }
    }

    return result;
};