/**
 * 
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Example 1:
    Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
    Output: [3,9,20,null,null,15,7]
Example 2:
    Input: inorder = [-1], postorder = [-1]
    Output: [-1]
 * 
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(inorder.length === 0 || postorder.length === 0)
        return null;

    const rootVal = postorder.pop()!;
    const rootIndex = inorder.indexOf(rootVal);
    
    const root = new TreeNode(rootVal);

    const inorderLeft = inorder.slice(0, rootIndex);
    const inorderRight = inorder.slice(rootIndex + 1);

    const postorderLeft = postorder.slice(0, inorderLeft.length);
    const postorderRight = postorder.slice(inorderLeft.length);

    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);

    return root;
};