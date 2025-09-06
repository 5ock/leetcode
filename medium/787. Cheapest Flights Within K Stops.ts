/**
 * 
    There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

    You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

    Example 1:
        Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
        Output: 700
        Explanation:
            The graph is shown above.
            The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
            Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
    Example 2:
        Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
        Output: 200
        Explanation:
            The graph is shown above.
            The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
    Example 3:
        Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
        Output: 500
        Explanation:
            The graph is shown above.
            The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 * 
 */

class MinHeap<T extends [number, number, number]> {
    private heap: T[];

    constructor() {
        this.heap = [];
    }

    insert(val: T): void {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop(): T | undefined {
        if(this.size() === 0)
            return undefined;

        const top = this.heap[0];
        const bottom = this.heap.pop();
        if(this.size() > 0 && bottom !== undefined) {
            this.heap[0] = bottom;
            this.heapifyDown();
        }

        return top;
    }

    size(): number {
        return this.heap.length;
    }

    private heapifyUp(): void {
        let index = this.size() - 1;

        while(index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if(parent < 0 || this.heap[parent][0] < this.heap[index][0])
                break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    private heapifyDown(): void {
        const n = this.size();
        let index = 0;

        while(true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let smallest = index;

            if(left < n && this.heap[left][0] < this.heap[smallest][0])
                smallest = left;
            if(right < n && this.heap[right][0] < this.heap[smallest][0])
                smallest = right;
            
            if(smallest === index)
                break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
}

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // <city, [neighbor, price]>
    const graph: Map<number, [number, number][]> = new Map();
    for(const [u, v, p] of flights) {
        if(!graph.has(u))
            graph.set(u, []);
        graph.get(u)!.push([v, p]);
    }

    // [cost, city, steps]
    const minHeap = new MinHeap();
    minHeap.insert([0, src, 0]);
    // Map<city-steps, cost>
    const minSteps: Map<string, number> = new Map();
    minSteps.set(`${src}-0`, 0);

    while(minHeap.size() > 0) {
        const [cost, city, steps] = minHeap.pop()!;

        if(city === dst && steps <= k + 1)
            return cost

        if(steps > k)
            continue;

        for(const [neighbor, price] of graph.get(city) || []) {
            const newCost = cost + price;
            const key = `${neighbor}-${steps + 1}`;
            if(!minSteps.has(key) || newCost < minSteps.get(key)!) {
                minSteps.set(key, newCost);
                minHeap.insert([newCost, neighbor, steps + 1]);
            }
        } 
    }

    return -1;
};