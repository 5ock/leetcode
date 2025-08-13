/**
 * 
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    Example 1:
        Input: n = 3
        Output: ["((()))","(()())","(())()","()(())","()()()"]
    Example 2:
        Input: n = 1
        Output: ["()"]
 * 
 */

function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(current: string, open: number, close: number): void {
        if(current.length === n * 2) {
            result.push(current);
            return;
        }

        if(open < n)
            backtrack(current + '(', open + 1, close);
        if(close < open)
            backtrack(current + ')', open, close + 1);
    }

    backtrack('', 0, 0);
    return result;
};