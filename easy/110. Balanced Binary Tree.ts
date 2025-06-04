/**
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 */


// Definition for a binary tree node.
class TreeNode2 {
    val: number
    left: TreeNode2 | null
    right: TreeNode2 | null
    constructor(val?: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isBalanced(root: TreeNode2 | null): boolean {
    function height(node: TreeNode2 | null): number {
        if(node === null)
            return 0;

        const leftDeep = height(node.left);
        const rightDeep = height(node.right);

        if(Math.abs(leftDeep - rightDeep) > 1 || leftDeep === -1 || rightDeep === -1)
            return -1;

        return Math.max(leftDeep, rightDeep) + 1;
    }

    return height(root) !== -1;
};