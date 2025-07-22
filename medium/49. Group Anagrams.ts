/**
 * 
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    Example 1:
        Input: strs = ["eat","tea","tan","ate","nat","bat"]
        Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
        Explanation:
            There is no string in strs that can be rearranged to form "bat".
            The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
            The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
    Example 2:
        Input: strs = [""]
        Output: [[""]]
    Example 3:
        Input: strs = ["a"]
        Output: [["a"]]
 * 
 */

function groupAnagrams(strs: string[]): string[][] {
    const strsMap: Map<string, string[]> = new Map();

    for(const s of strs) {
        const charFreq: number[] = new Array(26).fill(0);
        for(const char of s) {
            charFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const keyStr = charFreq.toString();
        if(!strsMap.has(keyStr))
            strsMap.set(keyStr, []);

        strsMap.get(keyStr)!.push(s);
    }

    return Array.from(strsMap.values());
};