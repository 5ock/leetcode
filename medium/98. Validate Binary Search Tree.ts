/**
 * 
    Given the root of a binary tree, determine if it is a valid binary search tree (BST).

    A valid BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

    Example 1:
        Input: root = [2,1,3]
        Output: true

    Example 2:
        Input: root = [5,1,4,null,null,3,6]
        Output: false
        Explanation: The root node's value is 5 but its right child's value is 4.
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


function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, lower: number | null, upper: number | null): boolean {
        if(node === null)
            return true;

        const val = node.val;
        if(lower !== null && val <= lower)
            return false;
        if(upper !== null && val >= upper)
            return false;

        if(!validate(node.left, lower, val))
            return false;
        if(!validate(node.right, val, upper))
            return false;

        return true;
    }

    return validate(root, null, null);
};