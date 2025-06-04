/**
 * 
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.

    Example 1:
        Input: nums = [2,2,1]
        Output: 1

    Example 2:
        Input: nums = [4,1,2,1,2]
        Output: 4

    Example 3:
        Input: nums = [1]
        Output: 1
 * 
 */

// 1
function singleNumber(nums: number[]): number {
    let map = new Map();

    for(const n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    for(const [ num, count ] of map) {
        if(count === 1)
            return num;
    }

    return -1;
};

// 2
function singleNumber2(nums: number[]): number {
    return nums.reduce((a, v) => a ^ v);
}