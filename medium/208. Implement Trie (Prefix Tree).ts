/**
 * 
    A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

    Implement the Trie class:

    Trie() Initializes the trie object.
    void insert(String word) Inserts the string word into the trie.
    boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
    boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 
    Example 1:
        Input
            ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
            [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
            Output
            [null, null, true, false, true, null, true]
        Explanation
            Trie trie = new Trie();
            trie.insert("apple");
            trie.search("apple");   // return True
            trie.search("app");     // return False
            trie.startsWith("app"); // return True
            trie.insert("app");
            trie.search("app");     // return True
 * 
 */

class WordNode {
    public nbors: Map<string, WordNode>;
    public isWord: boolean;

    constructor() {
        this.nbors = new Map<string, WordNode>();
        this.isWord = false;
    }
}

class Trie {
    private root: WordNode;

    constructor() {
        this.root = new WordNode();
    }
            
    insert(word: string): void {
        let node = this.root;
        for(const c of word) {
            if(!node.nbors.has(c))
                node.nbors.set(c, new WordNode());

            node = node.nbors.get(c)!;
        }

        node.isWord = true;
    }
            
    search(word: string): boolean {
        const node = this.#getNode(word);
        return !!node?.isWord;
    }
            
    startsWith(prefix: string): boolean {
        const node = this.#getNode(prefix);
        return !!node;
    }

    #getNode(word: string): WordNode | null {
        let node = this.root;
        for(const c of word) {
            if(!node.nbors.has(c))
                return null;

            node = node.nbors.get(c)!;
        }

        return node;
    }
}
            
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */