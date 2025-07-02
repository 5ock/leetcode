/**
 * 
    Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

    Example 1:
        Input: root = [1,2,3,null,5,null,4]
        Output: [1,3,4]
    Example 2:
        Input: root = [1,2,3,4,null,null,null,5]
        Output: [1,3,4,5]
    Example 3:
        Input: root = [1,null,3]
        Output: [1,3]
    Example 4:
        Input: root = []
        Output: []
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


function rightSideView(root: TreeNode | null): number[] {
    if(root === null)
        return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while(queue.length > 0) {
        const n = queue.length;
        
        for(let i = 0; i < n; i++) {
            const curNode = queue.shift()!;

            if(i === n - 1)
                result.push(curNode.val);

            if(curNode.left)
                queue.push(curNode.left);
            if(curNode.right)
                queue.push(curNode.right);
        }
    }

    return result;
};