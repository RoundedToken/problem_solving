// https://leetcode.com/problems/balance-a-binary-search-tree/description/

var balanceBST = function (root) {
    const toArray = (n) => {
        if (!n) return [];
        return [...toArray(n.left), n.val, ...toArray(n.right)];
    };

    const toBST = (arr) => {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new TreeNode(arr[0]);
        let mid = ~~(arr.length / 2);
        let left = toBST(arr.slice(0, mid));
        let right = toBST(arr.slice(mid + 1));
        return new TreeNode(arr[mid], left, right);
    };

    let values = toArray(root);
    return toBST(values);
};
