// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/?envType=daily-question&envId=2024-03-12

var removeZeroSumSublists = function (head) {
    let dummy = new ListNode(0, head),
        sum = 0;
    let current = dummy,
        map = new Map();

    while (current) {
        sum += current.val;
        map.set(sum, current);
        current = current.next;
    }

    current = dummy;
    sum = 0;

    while (current) {
        sum += current.val;
        current.next = map.get(sum).next;
        current = current.next;
    }

    return dummy.next;
};
