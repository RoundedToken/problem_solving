// https://leetcode.com/problems/sum-of-left-leaves/description/?envType=daily-question&envId=2024-04-14

var sumOfLeftLeaves = function (root) {
    function traverse(node, isLeft) {
        if (node === null) return 0;

        if (!node.left && !node.right) return isLeft ? node.val : 0;

        return traverse(node.left, true) + traverse(node.right, false);
    }

    return traverse(root, false);
};
