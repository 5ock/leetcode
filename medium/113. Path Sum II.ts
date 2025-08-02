/**
 * 
    Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

    A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

    Example 1:
        Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
        Output: [[5,4,11,2],[5,8,4,5]]
        Explanation: There are two paths whose sum equals targetSum:
        5 + 4 + 11 + 2 = 22
        5 + 8 + 4 + 5 = 22
    Example 2:
        Input: root = [1,2,3], targetSum = 5
        Output: []
    Example 3:
        Input: root = [1,2], targetSum = 0
        Output: []
 * 
 */

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


function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];

    function dfs(node: TreeNode | null, path: number[], sum: number): void {
        if(!node)
            return;

        path.push(node.val);
        sum += node.val;

        if(!node.left && !node.right && sum === targetSum)
            result.push([...path]);

        dfs(node.left, path, sum);
        dfs(node.right, path, sum);

        path.pop();
    }

    dfs(root, [], 0);
    return result;
};