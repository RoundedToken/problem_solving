// https://leetcode.com/problems/shuffle-string/description/

var restoreString = function (s, indices) {
    const ans = [];
    s.split('').forEach((v, i) => (ans[indices[i]] = v));
    return ans.join('');
};
