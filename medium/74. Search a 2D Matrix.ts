/**
 * 
    You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.

    You must write a solution in O(log(m * n)) time complexity.

    Example 1:
        Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
        Output: true
    Example 2:
        Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
        Output: false
 * 
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    if(matrix.length === 0 || matrix[0].length === 0)
        return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    let row = 0;
    let col = cols - 1;

    while(row < rows && col >= 0) {
        if(matrix[row][col] === target) {
            return true;
        } else if(matrix[row][cols - 1] < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
};