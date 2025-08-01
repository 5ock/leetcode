/**
 * 
    Given an integer array nums, return the length of the longest strictly increasing subsequence.

    Example 1:
        Input: nums = [10,9,2,5,3,7,101,18]
        Output: 4
        Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
    Example 2:
        Input: nums = [0,1,0,3,2,3]
        Output: 4
    Example 3:
        Input: nums = [7,7,7,7,7,7,7]
        Output: 1
 * 
 */

function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    const dp: number[] = Array(n).fill(1);

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    return Math.max(...dp);
};