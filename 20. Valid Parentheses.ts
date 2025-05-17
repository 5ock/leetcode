/**
 * 
 * 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 

    Example 1:
        Input: s = "()"
        Output: true

    Example 2:
        Input: s = "()[]{}"
        Output: true

    Example 3:
        Input: s = "(]"
        Output: false

    Example 4:
        Input: s = "([])"
        Output: true
 */

function isValid(s: string): boolean {
    if(s.length % 2 === 1)
        return false;

    const checkKeys: {[key: string]: string} = {'(':')', '{':'}', '[':']'};
    const result: string[] = [];

    for(const char of s) {
        if(char in checkKeys)
            result.push(char);
        else if(char !== checkKeys[result.pop()!])
            return false;
    }

    return result.length === 0;
};