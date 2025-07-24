/**
 * 
    Design a data structure that supports adding new words and finding if a string matches any previously added string.

    Implement the WordDictionary class:

    WordDictionary() Initializes the object.
    void addWord(word) Adds word to the data structure, it can be matched later.
    bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

    Example:
        Input
            ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
            [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
        Output
            [null,null,null,null,false,true,true,true]

        Explanation
            WordDictionary wordDictionary = new WordDictionary();
            wordDictionary.addWord("bad");
            wordDictionary.addWord("dad");
            wordDictionary.addWord("mad");
            wordDictionary.search("pad"); // return False
            wordDictionary.search("bad"); // return True
            wordDictionary.search(".ad"); // return True
            wordDictionary.search("b.."); // return True
 * 
 */

class TrieNode {
    children: { [key: string]: TrieNode };
    isEnd: boolean;

    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;

        for(const char of word) {
            if(!node.children[char])
                node.children[char] = new TrieNode();

            node = node.children[char];
        }

        node.isEnd = true;
    }

    search(word: string): boolean {
        const dfs = (index: number, node: TrieNode): boolean => {
            if(index === word.length)
                return node.isEnd;

            const char = word[index];

            if(char === '.') {
                for(const key in node.children) {
                    if(dfs(index + 1, node.children[key]))
                        return true;
                }

                return false;
            } else {
                if(!node.children[char])
                    return false;

                return dfs(index + 1, node.children[char]);
            }
        }

        return dfs(0, this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */