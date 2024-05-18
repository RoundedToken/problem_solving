// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/?envType=daily-question&envId=2024-05-18

var distributeCoins = function (root) {
    let move = 0;
    function dfs(node) {
        if (!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        move += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }
    dfs(root);
    return move;
};
