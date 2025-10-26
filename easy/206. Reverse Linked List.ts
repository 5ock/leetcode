export {};

/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 *
 */


//  * Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;

    while(head !== null) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};