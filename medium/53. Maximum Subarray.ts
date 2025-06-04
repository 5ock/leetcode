/**
 * 
    Given an integer array nums, find the subarray with the largest sum, and return its sum.

    Example 1:
        Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
        Output: 6
        Explanation: The subarray [4,-1,2,1] has the largest sum 6.
    Example 2:
        Input: nums = [1]
        Output: 1
        Explanation: The subarray [1] has the largest sum 1.
    Example 3:
        Input: nums = [5,4,-1,7,8]
        Output: 23
        Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * 
 */

// Greedy
function maxSubArray(nums: number[]): number {
    let cur = nums[0], max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i]);
        max = Math.max(max, cur);
    }

    return max;
};

// DP
function maxSubArrayDP(nums: number[]): number {
    let res = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] > 0)
            nums[i] += nums[i - 1];

        res = Math.max(res, nums[i]);
    }

    return res;
}
