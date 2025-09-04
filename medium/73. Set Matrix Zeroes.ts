/**
 * 
    Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

    You must do it in place.

    Example 1:
        Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
        Output: [[1,0,1],[0,0,0],[1,0,1]]
    Example 2:
        Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
        Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * 
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstColZero = false;
    let firstRowZero = false;

    for(let i = 0; i < m; i++) {
        if(matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    for(let j = 0; j < n; j++) {
        if(matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for(let i = 1; i < m; i++) {
        if(matrix[i][0] === 0) {
            for(let j = 1; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for(let j = 1; j < n; j++) {
        if(matrix[0][j] === 0) {
            for(let i = 1; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    if(firstColZero) {
        for(let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    if(firstRowZero) {
        for(let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
};