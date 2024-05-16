// https://leetcode.com/problems/evaluate-boolean-binary-tree/description/?envType=daily-question&envId=2024-05-16

var evaluateTree = function (root) {
    function Recurse(node) {
        if (node.val === 0 || node.val === 1) {
            return node.val === 1;
        } else if (node.val === 2) {
            return Recurse(node.left) || Recurse(node.right);
        } else if (node.val === 3) {
            return Recurse(node.left) && Recurse(node.right);
        }
        return false;
    }
    return Recurse(root);
};
