/**
 * 
    Given a string s which represents an expression, evaluate this expression and return its value. 

    The integer division should truncate toward zero.

    You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

    Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

    Example 1:
        Input: s = "3+2*2"
        Output: 7
    Example 2:
        Input: s = " 3/2 "
        Output: 1
    Example 3:
        Input: s = " 3+5 / 2 "
        Output: 5
 * 
 */

function calculate(s: string): number {
    const stack: number[] = [];
    let sign: string = '+';
    let num: number = 0;

    for(let i = 0; i < s.length; i++) {
        const ch = s[i];

        if(!isNaN(Number(ch)) && ch !== ' ')
            num = num * 10 + Number(ch);

        if((isNaN(Number(ch)) && ch !== ' ') || i === s.length - 1) {
            if(sign === '+') {
                stack.push(num);
            } else if(sign === '-') {
                stack.push(-num);
            } else if(sign === '*') {
                const prev = stack.pop()!;
                stack.push(prev * num);
            } else if(sign === '/') {
                const prev = stack.pop()!;
                stack.push(prev < 0 ? Math.ceil(prev / num) : Math.floor(prev / num));
            }

            sign = ch;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};