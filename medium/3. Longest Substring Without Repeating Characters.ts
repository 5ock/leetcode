/**
 * 
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 */

function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let maxLength = 0;
    const charMap = new Map<string, number>();

    for(let end = 0; end < s.length; end++) {
        if(charMap.has(s[end]) && charMap.get(s[end])! >= start)
            start = charMap.get(s[end])! + 1;
        charMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};