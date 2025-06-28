/**
 * 
    Given an m x n matrix, return all elements of the matrix in spiral order.

    Example 1:
        Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
        Output: [1,2,3,6,9,8,7,4,5]
    Example 2:
        Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
        Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 */

function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = [];
    let r = 0, b = 0, l = matrix[0].length - 1, t = matrix.length - 1;
    const total = (l + 1) * (t + 1);

    while(res.length < total) {
        // go right
        for(let i = r; i <= l; i++) {
            if(res.length === total)
                break;
            res.push(matrix[b][i]);
        }
        b++;

        // go down
        for(let i = b; i <= t; i++) {
            if(res.length === total)
                break;
            res.push(matrix[i][l]);
        }
        l--;

        // go left
        for(let i = l; l >= r; i--) {
            if(res.length === total)
                break;
            res.push(matrix[t][i]);
        }
        t--;

        // go top
        for(let i = t; i >= b; i--) {
            if(res.length === total)
                break;
            res.push(matrix[i][r]);
        }
        r++;
    }

    return res;
};