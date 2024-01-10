// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/?envType=daily-question&envId=2024-01-10

var amountOfTime = function (root, start) {
    const map = new Map();
    const create = ({ val, left, right }) => {
        if (left != null) {
            map.set(val, [...(map.get(val) ?? []), left.val]);
            map.set(left.val, [...(map.get(left.val) ?? []), val]);
            create(left);
        }
        if (right != null) {
            map.set(val, [...(map.get(val) ?? []), right.val]);
            map.set(right.val, [...(map.get(right.val) ?? []), val]);
            create(right);
        }
    };
    create(root);
    const dfs = (st, fa) => {
        let res = 0;
        for (const v of map.get(st) ?? []) {
            if (v !== fa) {
                res = Math.max(res, dfs(v, st) + 1);
            }
        }
        return res;
    };
    return dfs(start, -1);
};
