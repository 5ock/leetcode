/**
 * 
    Given a string s, return the longest palindromic substring in s.

    Example 1:
        Input: s = "babad"
        Output: "bab"
        Explanation: "aba" is also a valid answer.
    Example 2:
        Input: s = "cbbd"
        Output: "bb"
 * 
 */

function longestPalindrome(s: string): string {
    const n = s.length;
    if(n <= 1)
        return s;

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left: number, right: number): void {
        while(left >= 0 && left < n && s[left] === s[right]) {
            const length = right - left + 1;
            if(length > maxLength) {
                maxLength = length;
                start = left;
            }

            left--;
            right++;
        }
    }

    for(let i = 0; i < n; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};