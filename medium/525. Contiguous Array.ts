/**
 * 
    Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

    Example 1:
        Input: nums = [0,1]
        Output: 2
        Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
    Example 2:
        Input: nums = [0,1,0]
        Output: 2
        Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
    Example 3:
        Input: nums = [0,1,1,1,1,1,0,0,0]
        Output: 6
        Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
 * 
 */

function findMaxLength(nums: number[]): number {
    const map = new Map<number, number>();
    map.set(0, -1);

    let sum = 0;
    let maxLen = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;

        if(map.has(sum))
            maxLen = Math.max(maxLen, i - map.get(sum)!);
        else
            map.set(sum, i);
    }

    return maxLen;
}
        