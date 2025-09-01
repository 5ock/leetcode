/**
 * 
    Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

    Since the result may be very large, so you need to return a string instead of an integer.

    Example 1:
        Input: nums = [10,2]
        Output: "210"
    Example 2:
        Input: nums = [3,30,34,5,9]
        Output: "9534330"
 * 
 */

function largestNumber(nums: number[]): string {
    const numsStr = nums.map(num => num.toString());
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));

    const result = numsStr.join('');
    return result[0] === '0' ? '0' : result;
};