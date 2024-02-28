// https://leetcode.com/problems/find-bottom-left-tree-value/description/?envType=daily-question&envId=2024-02-28

var findBottomLeftValue = function (root) {
    const queue = [root];
    let leftmostVal;

    while (queue.length) {
        const node = queue.shift();
        leftmostVal = node.val;

        if (node.right) {
            queue.push(node.right);
        }
        if (node.left) {
            queue.push(node.left);
        }
    }
    return leftmostVal;
};
