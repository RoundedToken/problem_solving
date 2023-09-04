// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

var getTargetCopy = function (original, cloned, target) {
    const queue = [cloned];
    target = target.val;

    while (queue.length > 0) {
        const task = queue.shift();
        const val = task.val;
        const left = task.left;
        const right = task.right;

        if (val === target) return task;
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
};
