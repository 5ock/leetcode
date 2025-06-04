/**
 * 
    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    Return true if you can finish all courses. Otherwise, return false.

    Example 1:
        Input: numCourses = 2, prerequisites = [[1,0]]
        Output: true
        Explanation: There are a total of 2 courses to take. 
        To take course 1 you should have finished course 0. So it is possible.

    Example 2:
        Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
        Output: false
        Explanation: There are a total of 2 courses to take. 
        To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 * 
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree: number[] = new Array(numCourses).fill(0);

    for(const [ course, prereq ] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    const queue: number[] = [];
    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0)
            queue.push(i);
    }

    let visited = 0;
    while(queue.length > 0) {
        const current = queue.shift()!;
        visited++;

        for(const neighbor of graph[current]) {
            inDegree[neighbor]--;

            if(inDegree[neighbor] === 0)
                queue.push(neighbor);
        }
    }

    return visited === numCourses;
};