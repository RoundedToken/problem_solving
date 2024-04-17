// https://leetcode.com/problems/add-one-row-to-tree/description/?envType=daily-question&envId=2024-04-16

var addOneRow = function (root, val, depth) {
    if (!root) return root;
    if (depth === 2) {
        const left = root.left;
        const right = root.right;
        root.left = new TreeNode(val);
        root.left.left = left;
        root.right = new TreeNode(val);
        root.right.right = right;
        return root;
    }
    if (depth === 1) {
        const r = new TreeNode(val);
        r.left = root;
        return r;
    }
    root.left = addOneRow(root.left, val, depth - 1);
    root.right = addOneRow(root.right, val, depth - 1);
    return root;
};
