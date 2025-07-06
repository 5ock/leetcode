/**
 * 
    Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

    Example 1:
        Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
        Output: [3,9,20,null,null,15,7]
    Example 2:
        Input: preorder = [-1], inorder = [-1]
        Output: [-1]
 * 
 */

// Definition for a binary tree node.
class TreeNode1 {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function buildTree(preorder: number[], inorder: number[]): TreeNode1 | null {
    if(preorder.length === 0 || inorder.length === 0)
        return null;

    const rootVal = preorder.shift()!;
    const root = new TreeNode1(rootVal);

    const rootIndex = inorder.indexOf(rootVal);
    const inorderLeft = inorder.slice(0, rootIndex);
    const inorderRight = inorder.slice(rootIndex + 1);

    const preorderLeft = preorder.slice(0, inorderLeft.length);
    const preorderRight = preorder.slice(inorderLeft.length);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);

    return root;
};

/**
 * preorder - root -> left -> right
 * inorder - left -> root -> right
 * postorder - left -> right -> root
 */