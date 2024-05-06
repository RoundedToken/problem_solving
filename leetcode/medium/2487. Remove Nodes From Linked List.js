// https://leetcode.com/problems/remove-nodes-from-linked-list/description/?envType=daily-question&envId=2024-05-06

var removeNodes = function (head) {
    if (!head) return null;

    head.next = removeNodes(head.next);

    if (head.next && head.val < head.next.val) return head.next;

    return head;
};
