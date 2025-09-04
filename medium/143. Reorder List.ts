/**
 * 
    You are given the head of a singly linked-list. The list can be represented as:

    L0 → L1 → … → Ln - 1 → Ln
    Reorder the list to be on the following form:

    L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
    You may not modify the values in the list's nodes. Only nodes themselves may be changed.

    Example 1:
        Input: head = [1,2,3,4]
        Output: [1,4,2,3]
    Example 2:
        Input: head = [1,2,3,4,5]
        Output: [1,5,2,4,3]
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


/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if(!head || !head.next)
        return;

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow!.next;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    while(curr) {
        const temp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let first: ListNode | null = head;
    let second: ListNode | null = prev;
    while(second && second.next) {
        const temp1: ListNode | null = first!.next;
        const temp2: ListNode | null = second.next;
        first!.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};