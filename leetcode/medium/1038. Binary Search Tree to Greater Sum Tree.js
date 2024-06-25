// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/

var bstToGst = function (tree) {
    let acc = 0;
    function dfs(root) {
        if (!root) return [];

        dfs(root.right);
        acc += root.val;
        root.val = acc;
        dfs(root.left);
    }
    dfs(tree);
    return tree;
};
