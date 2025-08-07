/**
 * 
    Given the root of a binary tree, return the maximum width of the given tree.

    The maximum width of a tree is the maximum width among all levels.

    The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

    It is guaranteed that the answer will in the range of a 32-bit signed integer.

    Example 1:
        Input: root = [1,3,2,5,3,null,9]
        Output: 4
        Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
    Example 2:
        Input: root = [1,3,2,5,null,null,9,6,null,7]
        Output: 7
        Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
    Example 3:
        Input: root = [1,3,2,5]
        Output: 2
        Explanation: The maximum width exists in the second level with length 2 (3,2).
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


function widthOfBinaryTree(root: TreeNode | null): number {
    if(root === null)
        return 0;

    const queue: [TreeNode, number][] = [[root, 0]];
    let maxWidth = 0;

    while(queue.length > 0) {
        const levelSize = queue.length;
        const levelStartIndex = queue[0][1];
        let firstIndex = 0;
        let lastIndex = 0;
        
        for(let i = 0; i < levelSize; i++) {
            const [ node, index ] = queue.shift()!;
            const normalizeIndex = index - levelStartIndex;

            if(i === 0)
                firstIndex = normalizeIndex;
            if(i === levelSize -1)
                lastIndex = normalizeIndex;

            if(node.left)
                queue.push([node.left, 2 * normalizeIndex]);
            if(node.right)
                queue.push([node.right, 2 * normalizeIndex + 1]);
        }

        const curWidth = lastIndex - firstIndex + 1;
        maxWidth = Math.max(maxWidth, curWidth);
    }

    return maxWidth;
};