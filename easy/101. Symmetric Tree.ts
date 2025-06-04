/**
 * 
    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

    Example 1:
        Input: root = [1,2,2,3,4,4,3]
        Output: true

    Example 2:
        Input: root = [1,2,2,null,3,null,3]
        Output: false
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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null)
        return false;

    function isMirror(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
        if(tree1 === null && tree2 === null)
            return true;

        if(tree1 === null || tree2 === null)
            return false;

        return (tree1.val === tree2.val) &&
            isMirror(tree1.left, tree2.right) &&
            isMirror(tree1.right, tree2.left)
    }

    return isMirror(root.left, root.right);
};