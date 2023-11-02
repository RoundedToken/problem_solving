// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/?envType=daily-question&envId=2023-11-02

var averageOfSubtree = function (root) {
    let ans = 0;
    function dfs(node) {
        if (node === null) return [0, 0];
        let [leftSum, leftCount] = dfs(node.left);
        let [rightSum, rightCount] = dfs(node.right);

        let sum = leftSum + rightSum + node.val;
        let count = leftCount + rightCount + 1;
        if (Math.floor(sum / count) === node.val) ans++;
        return [sum, count];
    }

    dfs(root);

    return ans;
};
