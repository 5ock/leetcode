/**
 * 
    Given two binary strings a and b, return their sum as a binary string.

    Example 1:
        Input: a = "11", b = "1"
        Output: "100"
    Example 2:
        Input: a = "1010", b = "1011"
        Output: "10101"
 *
 */

function addBinary(a: string, b: string): string {
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while(i >= 0 || j >= 0 || carry) {
        const bitA = i >= 0 ? Number(a[i]) : 0;
        const bitB = j >= 0 ? Number(b[i]) : 0;

        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2)

        i--;
        j--;
    }

    return result;
};
