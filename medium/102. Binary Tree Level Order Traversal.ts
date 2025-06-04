/**
 * 
    Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

    Example 1:
        Input: root = [3,9,20,null,null,15,7]
        Output: [[3],[9,20],[15,7]]

    Example 2:
        Input: root = [1]
        Output: [[1]]

    Example 3:
        Input: root = []
        Output: []
 * 
 */

//  * Definition for a binary tree node.
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


function levelOrder(root: TreeNode | null): number[][] {
    if(root === null)
        return [];

    const queue: TreeNode[] = [root];
    const result: number[][] = [];

    while(queue.length > 0) {
        const levelSize = queue.length;
        const curLevel: number[] = [];

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            curLevel.push(node.val);

            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }

        result.push(curLevel);
    }

    return result;
};