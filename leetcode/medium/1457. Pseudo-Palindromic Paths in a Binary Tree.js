// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/?envType=daily-question&envId=2024-01-24

var pseudoPalindromicPaths = function (root) {
    let count = 0;

    const digits = new Array(10).fill(true);

    const f = (node) => {
        if (!node) return;

        digits[node.val] = !digits[node.val];

        if (!node.left && !node.right) {
            if (digits.filter((num) => num === false).length <= 1) count += 1;
            digits[node.val] = !digits[node.val];
            return;
        }

        f(node.left);
        f(node.right);

        digits[node.val] = !digits[node.val];
    };

    f(root);

    return count;
};
