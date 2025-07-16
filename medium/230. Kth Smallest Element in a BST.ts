/**
 * 
    Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

    Example 1:
        Input: root = [3,1,4,null,2], k = 1
        Output: 1
    Example 2:
        Input: root = [5,3,6,2,4,null,null,1], k = 3
        Output: 3
 * 
 */

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = 0;

    function inOrder(node: TreeNode | null): void {
        if(node === null)
            return;

        inOrder(node.left);

        count++;
        if(count === k) {
            result = node.val;
            return;
        }

        inOrder(node.right);
    }

    inOrder(root);
    return result;
};