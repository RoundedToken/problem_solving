// https://leetcode.com/problems/range-sum-of-bst/description/

var rangeSumBST = function (root, low, high) {
    const queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        const node = queue.pop();
        const val = node.val;
        const left = node.left;
        const right = node.right;

        if (val >= low && val <= high) sum += val;
        if (left) queue.push(left);
        if (right) queue.push(right);
    }

    return sum;
};
