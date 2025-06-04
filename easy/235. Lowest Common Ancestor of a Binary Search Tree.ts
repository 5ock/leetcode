/**
 * 
    Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
    According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

    Example 1:
        Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
        Output: 6
        Explanation: The LCA of nodes 2 and 8 is 6.
 *
 */

class TreeNode1 {
    val: number
    left: TreeNode1 | null
    right: TreeNode1 | null
    constructor(val?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function lowestCommonAncestor(root: TreeNode1 | null, p: TreeNode1 | null, q: TreeNode1 | null): TreeNode1 | null {
    while(root !== null) {
        if(p!.val < root.val && q!.val < root.val)
            root = root.left;
        else if(p!.val > root.val && q!.val > root.val)
            root = root.right;
        else
            return root;
    }

    return null;
};