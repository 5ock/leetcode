/**
 * 
    Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

    Letters are case sensitive, for example, "Aa" is not considered a palindrome.

    Example 1:
        Input: s = "abccccdd"
        Output: 7
        Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
        
    Example 2:
        Input: s = "a"
        Output: 1
        Explanation: The l
 *
 */

function longestPalindrome(s: string): number {
    let charCount: { [key: string]: number } = {};
    for(const c of s) {
        charCount[c] = (charCount[c] || 0) + 1;
    }

    let length = 0;
    let odd = false;
    for(const count of Object.values(charCount)) {
        if(count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            odd = true;
        }
    }

    if(odd)
        length += 1;

    return length;
};