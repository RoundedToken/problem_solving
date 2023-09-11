// https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

var mergeNodes = function (head) {
    let sum = 0;
    const result = [];
    const queue = [head];

    while (queue.length > 0) {
        const node = queue.pop();
        const value = node.val;

        if (value === 0 && sum !== 0) {
            result.push(sum);
            sum = 0;
        } else {
            sum += value;
        }

        if (node.next) queue.push(node.next);
    }
    console.log(result);

    let list = new ListNode(result[0]);
    const ans = list;

    for (const el of result) {
        list.next = new ListNode(el);
        list = list.next;
    }

    return ans.next;
};
