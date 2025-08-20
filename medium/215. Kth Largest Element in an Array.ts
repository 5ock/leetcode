/**
 * 
    Given an integer array nums and an integer k, return the kth largest element in the array.

    Note that it is the kth largest element in the sorted order, not the kth distinct element.

    Can you solve it without sorting?

    Example 1:
        Input: nums = [3,2,1,5,6,4], k = 2
        Output: 5
    Example 2:
        Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
        Output: 4
 * 
 */

class MinHeap {
    private k: number;
    private heap: number[];

    constructor(nums: number[], k: number) {
        this.heap = [];
        this.k = k;

        for(const num of nums) {
            this.add(num);
        }
    }

    add(num: number): void {
        if(this.heap.length < this.k) {
            this.heap.push(num);
            this.heapifyUp(this.heap.length - 1);
        } else if(num > this.heap[0]) {
            this.heap[0] = num;
            this.heapifyDown(0);
        }
    }

    getKthEle(): number {
        return this.heap[0];
    }

    private heapfiyUp(index: number): void {
        const parent = Math.floor((index - 1) / 2);

        if(parent >= 0 && this.heap[parent] > this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            this.heapfiyUp(parent);
        }
    }

    private heapifyDown(index: number): void {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let smallest = index;

        if(left < this.heap.length && this.heap[left] < this.heap[smallest])
            smallest = left;
        if(right < this.heap.length && this.heap[right] < this.heap[smallest])
            smallest = right;

        if(smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }
}

function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinHeap(nums, k);

    return minHeap.getKthEle();
};