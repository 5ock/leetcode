/**
 * 
    Given the head of a linked list, rotate the list to the right by k places.

    Example 1:
        Input: head = [1,2,3,4,5], k = 2
        Output: [4,5,1,2,3]
    Example 2:
        Input: head = [0,1,2], k = 4
        Output: [2,0,1]
 * 
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head || !head.next || k === 0)
        return head;

    let tail = head;
    let length = 1;
    while(tail && tail.next) {
        tail = tail.next;
        length++;
    }

    tail.next = head;
    let newTail = head;
    let steps = length - (k % length);
    for(let i = 1; i < steps; i++) {
        newTail = newTail.next!;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};