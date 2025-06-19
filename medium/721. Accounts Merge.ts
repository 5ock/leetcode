/**
 * 
    Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

    Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

    After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

    Example 1:
        Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
        Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
        Explanation:
            The first and second John's are the same person as they have the common email "johnsmith@mail.com".
            The third John and Mary are different people as none of their email addresses are used by other accounts.
            We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
            ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

    Example 2:
        Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
        Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
 * 
 */

class UnionFind {
    parent: Map<string, string>;
    rank: Map<string, number>;

    constructor() {
        this.parent = new Map();
        this.rank = new Map();
    }

    find(email: string): string {
        if(this.parent.get(email) !== email) {
            this.parent.set(email, this.find(this.parent.get(email)!));
        }
        return this.parent.get(email)!;
    }

    union(email1: string, email2: string): void {
        const root1 = this.find(email1);
        const root2 = this.find(email2);

        if(root1 !== root2) {
            const rank1 = this.rank.get(root1) || 1;
            const rank2 = this.rank.get(root2) || 1;

            if(rank1 > rank2) {
                this.parent.set(root2, root1);
            } else if(rank1 < rank2) {
                this.parent.set(root1, root2);
            } else {
                this.parent.set(root2, root1);
                this.rank.set(root1, rank1 + 1);
            }
        }
    }

    add(email: string): void {
        if(!this.parent.has(email)) {
            this.parent.set(email, email);
            this.rank.set(email, 1);
        }
    }
}


function accountsMerge(accounts: string[][]): string[][] {
    const uf = new UnionFind();
    const emailToName = new Map<string, string>();

    // steps 1: all eamils belonging to the same account
    for(const account of accounts) {
        const name = account[0];
        const firstEmail = account[1];

        for(let i = 1; i < account.length; i++) {
            const email = account[i];
            uf.add(email);
            uf.union(firstEmail, email);
            emailToName.set(email, name);
        }
    }

    // step 2: group emails
    const mergedAccounts = new Map<string, string[]>();
    for(const email of emailToName.keys()) {
        const rootEmail = uf.find(email);
        if(!mergedAccounts.has(rootEmail)) {
            mergedAccounts.set(rootEmail, []);
        }
        mergedAccounts.get(rootEmail)!.push(email);
    }

    // step 3: format the result;
    const result: string[][] = [];
    for(const [rootEmail, emails] of mergedAccounts) {
        emails.sort();
        result.push([emailToName.get(rootEmail)!].concat(emails));
    }

    return result;
};