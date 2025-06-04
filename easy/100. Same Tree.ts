/**
 * 
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 */


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null)
        return true;

    if((p === null && q !== null) || (p !== null && q === null))
        return false;

    const leftSame = isSameTree(p!.left, q!.left);
    const rightSame = isSameTree(p!.right, q!.right);

    if(p!.val === q!.val && leftSame && rightSame)
        return true;

    return false;
};