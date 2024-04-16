// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/?envType=daily-question&envId=2024-04-15

var sumNumbers = function (root) {
    if (!root) return;
    if (!root.left && !root.right) return root.val;

    let res = 0;
    let dfs = (r, path) => {
        if (!r) return;
        if (!r.left && !r.right) {
            res += path * 10 + r.val;
            return;
        }
        dfs(r.right, path * 10 + r.val);
        dfs(r.left, path * 10 + r.val);
    };

    dfs(root, 0);
    return res;
};
