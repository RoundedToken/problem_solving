// https://leetcode.com/problems/diameter-of-binary-tree/description/?envType=daily-question&envId=2024-02-27

var diameterOfBinaryTree = function (root) {
    let max = 0;
    const getHeight = (root) => {
        if (!root) {
            return 0;
        }
        const l = getHeight(root.left);
        const r = getHeight(root.right);
        max = Math.max(max, l + r);
        return Math.max(l, r) + 1;
    };
    const k = getHeight(root.left) + getHeight(root.right);
    return Math.max(k, max);
};
