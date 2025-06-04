/**
 * 
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:
        Input: strs = ["flower","flow","flight"]
        Output: "fl"

    Example 2:
        Input: strs = ["dog","racecar","car"]
        Output: ""
        Explanation: There is no common prefix among the input strings.
 *
 */


function longestCommonPrefix(strs: string[]): string {
    let prefix = '';

    for(let i = 0; i < strs[0].length; i++) {
        for(const s of strs) {
            if(i === s.length || strs[0][i] !== s[i])
                return prefix;
        }

        prefix += strs[0][i];
    }

    return prefix;
}

