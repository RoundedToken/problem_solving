// https://leetcode.com/problems/deepest-leaves-sum/

var deepestLeavesSum = function (root) {
    let queue = [root];
    let lastSum;

    while (queue.length > 0) {
        let sum = 0;
        const newQueue = [];

        for (const task of queue) {
            const val = task.val;
            const left = task.left;
            const right = task.right;

            sum += val;
            if (left) newQueue.push(left);
            if (right) newQueue.push(right);
        }
        lastSum = sum;
        queue = newQueue;
    }

    return lastSum;
};
