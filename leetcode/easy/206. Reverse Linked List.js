// https://leetcode.com/problems/reverse-linked-list/submissions/1209832832/?envType=daily-question&envId=2024-03-21

var reverseList = function (head) {
    if (!head || !head.next) return head;
    reversedPart = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedPart;
};
