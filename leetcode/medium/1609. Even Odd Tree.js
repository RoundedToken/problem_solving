// https://leetcode.com/problems/even-odd-tree/description/?envType=daily-question&envId=2024-02-29

var isEvenOddTree = function (root) {
    const level = {};
    root.l = 0;
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();

        if (node.l % 2 == 0) {
            if (node.val % 2 == 0 || level[node.l] >= node.val) return false;
        } else {
            if (node.val % 2 == 1 || level[node.l] <= node.val) return false;
        }
        level[node.l] = node.val;
        if (node.left) {
            node.left.l = node.l + 1;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.l = node.l + 1;
            queue.push(node.right);
        }
    }
    return true;
};
