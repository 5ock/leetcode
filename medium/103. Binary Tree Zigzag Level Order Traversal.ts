/**
 * 
    Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

    Example 1:
        Input: root = [3,9,20,null,null,15,7]
        Output: [[3],[20,9],[15,7]]
    Example 2:
        Input: root = [1]
        Output: [[1]]
    Example 3:
        Input: root = []
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(root === null)
        return [];

    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let leftToRight: boolean = true;

    while(queue.length > 0) {
        const size = queue.length;
        let curLevel: number[] = [];

        for(let i = 0; i < size; i++) {
            const curNode = queue.shift()!;

            if(leftToRight)
                curLevel.push(curNode.val);
            else
                curLevel.unshift(curNode.val);

            if(curNode.left)
                queue.push(curNode.left);
            if(curNode.right)
                queue.push(curNode.right);
        }

        result.push(curLevel);
        leftToRight = !leftToRight;
    }

    return result;
};