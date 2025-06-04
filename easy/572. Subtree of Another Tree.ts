/** 
 * 
    Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

    A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 * 
 */

// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(root === null)
        return false;

    if(isSameTree(root, subRoot))
        return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null)
        return true;

    if((p !== null && q === null) || (p === null && q !== null))
        return false;

    const leftSame = isSameTree(p!.left, q!.left);
    const rightSame = isSameTree(p!.right, q!.right);

    if(p!.val === q!.val && leftSame && rightSame)
        return true;

    return false;
}