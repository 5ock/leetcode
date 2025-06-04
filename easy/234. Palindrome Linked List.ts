/**
 * 
    Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
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

function isPalindrome(head: ListNode | null): boolean {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while(fast && fast.next !== null) {
        fast = fast.next.next;
        slow = slow!.next;
    }

    let prev: ListNode | null = null;
    while(slow !== null) {
        const temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let first: ListNode | null = head;
    let second: ListNode | null = prev;
    while(second !== null) {
        if(first!.val !== second!.val)
            return false

        first = first!.next;
        second = second!.next;
    }

    return true;
};