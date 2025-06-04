/**
 * 
    Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

    The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

    You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

    Example 1:
        Input: points = [[1,3],[-2,2]], k = 1
        Output: [[-2,2]]
        Explanation:
        The distance between (1, 3) and the origin is sqrt(10).
        The distance between (-2, 2) and the origin is sqrt(8).
        Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
        We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
    Example 2:
        Input: points = [[3,3],[5,-1],[-2,4]], k = 2
        Output: [[3,3],[-2,4]]
        Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 * 
 */

// by sort, slice
function kClosestBySort(points: number[][], k: number): number[][] {
    points.sort((a, b) => {
        const distA = a[0] ** 2 + a[1] ** 2;
        const distB = b[0] ** 2 + b[1] ** 2;

        return distA - distB;
    })

    return points.slice(0, k);
}


// by maxheap
class MaxHeap {
    private k: number;
    private heap: number[][];

    constructor(points: number[][], k: number) {
        this.k = k;
        this.heap = [];

        for(const point of points) {
            this.insert(point);
        }
    }

    insert(point: number[]): void {
        this.heap.push(point);
        this.heapifyUp(this.heap.length - 1);

        if(this.heap.length > this.k) {
            this.remove();
        }
    }

    remove(): number[] | undefined {
        if(this.heap.length === 0)
            return undefined;

        const top = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0 && last) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return top;
    }

    getHeap(): number[][] {
        return this.heap;
    }

    private heapifyUp(index: number): void {
        const parent = Math.floor((index - 1) / 2);

        if(parent >= 0 && this.compare(this.heap[index], this.heap[parent]) > 0) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            this.heapifyUp(parent);
        }
    }

    private heapifyDown(index: number): void {
        const left = 2 * index + 1;
        const right = 2 * index + 1;
        let largest = index;
        
        if(left < this.heap.length && this.compare(this.heap[left], this.heap[largest]) > 0)
            largest = left;
        if(right < this.heap.length && this.compare(this.heap[right], this.heap[largest]) > 0)
            largest = right;

        if(largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }

    private compare(a: number[], b: number[]): number {
        const distA = a[0] ** 2 + a[1] ** 2;
        const distB = b[0] ** 2 + b[1] ** 2;

        return distA - distB;
    }
}

function kClosest(points: number[][], k: number): number[][] {
    const maxHeap = new MaxHeap(points, k);
    return maxHeap.getHeap();
};