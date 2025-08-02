/**
 * 
    Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

    Example 1:
        Input: head = [1,2,3,4]
        Output: [2,1,4,3]
        Explanation:
    Example 2:
        Input: head = []
        Output: []
    Example 3:
        Input: head = [1]
        Output: [1]
    Example 4:
        Input: head = [1,2,3]
        Output: [2,1,3]
 * 
 */

class ListNode1 {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while(current && current.next && current.next.next) {
        let firstNode = dummy.next!;
        let secondNode = dummy.next?.next!;

        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        current.next = secondNode;

        current = firstNode;    
    }
    
    return dummy.next;
};