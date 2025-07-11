/**
 * 
    Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

    Example 1:
        Input: s = "cbaebabacd", p = "abc"
        Output: [0,6]
        Explanation:
            The substring with start index = 0 is "cba", which is an anagram of "abc".
            The substring with start index = 6 is "bac", which is an anagram of "abc".
    Example 2:
        Input: s = "abab", p = "ab"
        Output: [0,1,2]
        Explanation:
            The substring with start index = 0 is "ab", which is an anagram of "ab".
            The substring with start index = 1 is "ba", which is an anagram of "ab".
            The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 */

function findAnagrams(s: string, p: string): number[] {
    const sLen = s.length;
    const pLen = p.length;
    const result: number[] = [];

    if(sLen < pLen)
        return result;

    const sCount: number[] = new Array(26).fill(0);
    const pCount: number[] = new Array(26).fill(0);

    for(let i = 0; i < pLen; i++) {
        sCount[s.charCodeAt(i) - 97]++;
        pCount[p.charCodeAt(i) - 97]++;
    }

    if(arraysAreEqual(sCount, pCount))
        result.push(0);

    for(let i = pLen; i < sLen; i++) {
        sCount[s.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i - pLen) - 97]--;

        if(arraysAreEqual(sCount, pCount))
            result.push(i - pLen + 1);
    }

    return result;
};

function arraysAreEqual(a: number[], b: number[]): boolean {
    for(let i = 0; i < 26; i++) {
        if(a[i] !== b[i])
            return false;
    }

    return true;
}