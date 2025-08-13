/**
 * 
    Given the head of a linked list, return the list after sorting it in ascending order.

    Example 1:
        Input: head = [4,2,1,3]
        Output: [1,2,3,4]
    Example 2:
        Input: head = [-1,5,3,4,0]
        Output: [-1,0,3,4,5]
    Example 3:
        Input: head = []
        Output: []
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

function sortList(head: ListNode | null): ListNode | null {
    if(!head || !head.next)
        return head;

    let prev: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while(fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    prev!.next = null;
    let left: ListNode | null = sortList(head);
    let right: ListNode | null = sortList(slow);

    return mergeList(left, right);
};

function mergeList(left: ListNode | null, right: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while(left && right) {
        if(left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }

        current = current.next;
    }

    if(left)
        current.next = left;
    if(right)
        current.next = right;

    return dummy.next;
}