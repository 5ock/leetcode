/**
 * 
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
        Input: x = 123
        Output: 321
    Example 2:
        Input: x = -123
        Output: -321
    Example 3:
        Input: x = 120
        Output: 21
 * 
 */

function reverse(x: number): number {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let reverse = 0;
    while(x !== 0) {
        const pop = x % 10;
        x = (x / 10) | 0;

        if(reverse > Math.floor(INT_MAX / 10) || (reverse === Math.floor(INT_MAX / 10) && pop > 7))
            return 0;

        if(reverse < Math.ceil(INT_MIN / 10) || (reverse === Math.ceil(INT_MIN / 10) && pop < -8))
            return 0

        reverse = reverse * 10 + pop;
    }

    return reverse;
};