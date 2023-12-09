// https://leetcode.com/problems/construct-string-from-binary-tree/?envType=daily-question&envId=2023-12-08

var tree2str = function (t) {
    if (!t) return '';
    const left = tree2str(t.left);
    const right = tree2str(t.right);
    return t.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
};
