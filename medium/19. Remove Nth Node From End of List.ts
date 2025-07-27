/**
 * 
    Given the head of a linked list, remove the nth node from the end of the list and return its head.

    Example 1:
        Input: head = [1,2,3,4,5], n = 2
        Output: [1,2,3,5]
    Example 2:
        Input: head = [1], n = 1
        Output: []
    Example 3:
        Input: head = [1,2], n = 1
        Output: [1]
 * 
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy: ListNode | null = new ListNode();
    dummy.next = head;
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    for(let i = 0; i < n; i++) {
        fast = fast!.next;
    }

    while(fast && fast.next) {
        fast = fast.next;
        slow = slow!.next;
    }

    slow!.next = slow!.next!.next;

    return dummy.next;
};