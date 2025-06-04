/**
 * 
    Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

    The distance between two cells sharing a common edge is 1.

    Example 1:
        Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
        Output: [[0,0,0],[0,1,0],[0,0,0]]
    Example 2:
        Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
        Output: [[0,0,0],[0,1,0],[1,2,1]]
 * 
 */

function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const queue: number[][] = [];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dist: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                dist[i][j] = Infinity;
            }
        }
    }

    while(queue.length > 0) {
        const [i, j] = queue.shift()!;

        for(const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;

            if(ni >= 0 && ni < m && nj >= 0 && nj < n) {
                if(dist[ni][nj] > dist[i][j] + 1) {
                    dist[ni][nj] = dist[i][j] + 1;
                    queue.push([ni, nj]);
                }
            }
        }
    }

    return dist;
};