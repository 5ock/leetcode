/**
 * 
    Given an integer array nums, find a subarray that has the largest product, and return the product.

    The test cases are generated so that the answer will fit in a 32-bit integer.

    Example 1:
        Input: nums = [2,3,-2,4]
        Output: 6
        Explanation: [2,3] has the largest product 6.
    Example 2:
        Input: nums = [-2,0,-1]
        Output: 0
        Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 */

function maxProduct(nums: number[]): number {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for(let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if(num < 0)
            [maxProd, minProd] = [minProd, maxProd];

        maxProd = Math.max(num, maxProd * num);
        minProd = Math.min(num, minProd * num);

        result = Math.max(result, maxProd);
    }

    return result;
};