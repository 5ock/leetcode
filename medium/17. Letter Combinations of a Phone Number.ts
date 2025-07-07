/**
 * 
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

    A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

    Example 1:
        Input: digits = "23"
        Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
    Example 2:
        Input: digits = ""
        Output: []
    Example 3:
        Input: digits = "2"
        Output: ["a","b","c"]
 * 
 */


function letterCombinations(digits: string): string[] {
    if(digits.length === 0)
        return [];

    const result: string[] = [];
    const digitToLetters: {[key: string]: string[]} = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    const backtrack = (combination: string, nextDigits: string): void => {
        if(nextDigits.length === 0) {
            result.push(combination);
            return;
        }

        const letters = digitToLetters[nextDigits[0]];
        for(const letter of letters) {
            backtrack(combination + letter, nextDigits.slice(1));
        }
    }

    backtrack('', digits);
    return result;
};