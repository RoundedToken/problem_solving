// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=daily-question&envId=2024-03-03

const findAndRemove = (node, n) => {
    if (!node.next) return 1;

    const pos = findAndRemove(node.next, n) + 1;
    if (pos == n + 1) {
        node.next = node.next.next;
    }

    return pos;
};
const pos = findAndRemove(head, n);
return pos == n ? head.next : head;
