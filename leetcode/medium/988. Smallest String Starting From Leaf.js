// https://leetcode.com/problems/smallest-string-starting-from-leaf/description/?envType=daily-question&envId=2024-04-17

var smallestFromLeaf = function (root) {
    let smallestString = '';
    const dfs = (root, currString) => {
        if (!root) {
            return;
        }
        currString = String.fromCharCode(root.val + 'a'.charCodeAt()) + currString;
        if (!root.left && !root.right) {
            if (smallestString === '' || smallestString > currString) {
                smallestString = currString;
            }
        }
        if (root.left) {
            dfs(root.left, currString);
        }
        if (root.right) {
            dfs(root.right, currString);
        }
    };
    dfs(root, '');
    return smallestString;
};
