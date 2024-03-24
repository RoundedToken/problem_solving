// https://leetcode.com/problems/reorder-list/description/?envType=daily-question&envId=2024-03-23

var reorderList = function (head) {
    const arr = [];
    while (head) {
        const current = head;
        arr.push(current);
        head = head.next;
        current.next = null;
    }
    let result = new ListNode();
    let pointer = result;
    for (let i = 0; i <= arr.length - 1 - i; i++) {
        pointer.next = arr[i];
        pointer = pointer.next;
        if (arr.length - 1 - i !== i) {
            arr[arr.length - 1 - i].next = null;
            pointer.next = arr[arr.length - 1 - i];
            pointer = pointer.next;
        }
    }
    return result.next;
};
