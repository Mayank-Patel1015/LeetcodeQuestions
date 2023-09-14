/**
 * 206. Reverse Linked List
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1->2->3->4->5 
// ^
// 2->1 3
//      ^
var reverseList = function(head) {
    var previous = null;
    var cur = head
    while( cur !== null){
        var temp = cur.next
        cur.next = previous
        previous = cur
        cur = temp
    }
    return previous
};
