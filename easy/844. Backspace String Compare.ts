/**
 * 
    Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

    Note that after backspacing an empty text, the text will continue empty.

    Example 1:
        Input: s = "ab#c", t = "ad#c"
        Output: true
        Explanation: Both s and t become "ac".

    Example 2:
        Input: s = "ab##", t = "c#d#"
        Output: true
        Explanation: Both s and t become "".
        
    Example 3:
        Input: s = "a#c", t = "b"
        Output: false
        Explanation: s becomes "c" while t becomes "b".
 *
 */

function backspaceCompare(s: string, t: string): boolean {
    const buildString = (str: string): string => {
        const stock: string[] = [];

        for(const char of str) {
            if(char === '#')
                stock.pop();
            else
                stock.push(char);
        }

        return stock.join('');
    }

    return buildString(s) === buildString(t);
};