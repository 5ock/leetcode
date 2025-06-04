/**
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */



// 1
function isAnagram1(s: string, t: string): boolean {
    if(s.length !== t.length)
        return false;

    let ss = {}, tt = {};
    for(let i=0; i<s.length; i++) {
        if(ss.hasOwnProperty(ss[s[i]]))
            ss[s[i]]++;
        else
            ss[s[i]] = 1;

        if(tt.hasOwnProperty(tt[t[i]]))
            tt[t[i]]++;
        else
            tt[t[i]] = 1; 
    }

    for(const x in ss) {
        if(ss[x] !== tt[x])
            return false;
    }
    
    return true;
};

// 2
function isAnagram2(s: string, t: string): boolean {
    if(s.length !== t.length)
        return false;

    const map = new Map();

    for(let i=0; i<s.length; i++) {
        if(map.has(s[i]))
            map.set(s[i], map.get(s[i]) + 1);
        else
            map.set(s[i], 1);
    }

    for(let i=0; i<t.length; i++) {
        if(map.has(t[i])) {
            const count = map.get(t[i]) - 1;
            if(count === 0)
                map.delete(t[i]);
            else
                map.set(t[i], count);
        }
    }

    return map.size > 0 ? false : true;
}