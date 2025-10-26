/**
 * 
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
    Input: head = [1,2,3,3,4,4,5]
    Output: [1,2,5]
Example 2:
    Input: head = [1,1,1,2,3]
    Output: [2,3]
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;
    let prev: ListNode | null = dummy;
    let curr = head;

    while(curr && curr.next) {
        if(curr.val === curr.next.val) {
            while(curr.next && curr.val === curr.next.val) {
                curr = curr?.next;
            }

            prev!.next = curr.next;
        } else {
            prev = prev!.next;
        }
        curr = curr.next;
    }

    return dummy.next;
};