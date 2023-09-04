// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

var map = function (arr, fn) {
    const ans = [];
    for (const ind in arr) {
        ans.push(fn(arr[ind], +ind));
    }
    return ans;
};
