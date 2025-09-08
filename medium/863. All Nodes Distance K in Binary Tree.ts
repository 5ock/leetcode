/**
 * 
    Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

    You can return the answer in any order.

    Example 1:
        Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
        Output: [7,4,1]
        Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
    Example 2:
        Input: root = [1], target = 1, k = 3
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

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    const graph: Map<number, number[]> = new Map();

    function buildGraph(node: TreeNode | null, parent: TreeNode | null): void {
        if(!node)
            return;

        if(!graph.has(node.val))
            graph.set(node.val, []);

        if(parent) {
            graph.get(node.val)!.push(parent.val);
            graph.get(parent.val)!.push(node.val);
        }

        buildGraph(node.left, node);
        buildGraph(node.right, node);
    }

    buildGraph(root, null);

    // [node, dist];
    const queue: [number, number][] = [[target!.val, 0]];
    const visited: Set<number> = new Set([target!.val]);
    const result: number[] = [];

    while(queue.length > 0) {
        const [node, dist] = queue.shift()!;

        if(dist === k)
            result.push(node);

        if(dist < k) {
            for(const neighbor of graph.get(node) || []) {
                if(visited.has(neighbor))
                    continue;

                visited.add(neighbor);
                queue.push([neighbor, dist + 1]);
            }
        }
    }

    return result;
};