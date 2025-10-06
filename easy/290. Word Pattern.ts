/**
 * 
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

Example 1:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true
    Explanation:
        The bijection can be established as:
            'a' maps to "dog".
            'b' maps to "cat".
Example 2:
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false
Example 3:
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false
 * 
 */

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    const mapPS = new Map<string, string>();
    const mapSP = new Map<string, string>();

    if(pattern.length !== words.length)
        return false;

    for(let i = 0; i < pattern.length; i++) {
        if(!mapPS.has(pattern[i]))
            mapPS.set(pattern[i], words[i]);

        if(!mapSP.has(words[i]))
            mapSP.set(words[i], pattern[i]);

        if((mapPS.has(pattern[i]) && mapPS.get(pattern[i]) !== words[i]) ||
            (mapSP.has(words[i]) && mapSP.get(words[i]) !== pattern[i])
        )
            return false;
    }
    
    return true;
};