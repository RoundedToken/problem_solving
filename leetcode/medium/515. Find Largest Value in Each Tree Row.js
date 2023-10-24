// https://leetcode.com/problems/find-largest-value-in-each-tree-row/?envType=daily-question&envId=2023-10-24

var largestValues = function (root) {
    let res = [];
    if (!root) return res;
    function trav(node, level) {
        if (!node) return;
        if (res[level] == undefined || res[level] < node.val) res[level] = node.val;
        if (node.left) trav(node.left, level + 1);
        if (node.right) trav(node.right, level + 1);
    }
    trav(root, 0);
    return res;
};
