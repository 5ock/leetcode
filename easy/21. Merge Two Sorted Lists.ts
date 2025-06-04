/**
 * 
    Example 1:
        Input: list1 = [1,2,4], list2 = [1,3,4]
        Output: [1,1,2,3,4,4]

    Example 2:
        Input: list1 = [], list2 = []
        Output: []

    Example 3:
        Input: list1 = [], list2 = [0]
        Output: [0]
 *
 */



// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const resultList: ListNode = new ListNode();
    let curList: ListNode = resultList;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            curList.next = list1;
            list1 = list1.next;
        } else {
            curList.next = list2;
            list2 = list2.next;
        }

        curList = curList.next;
    }

    if(list1 !== null)
        curList.next = list1;
    if(list2 !== null)
        curList.next = list2;
    
    return resultList.next;
}