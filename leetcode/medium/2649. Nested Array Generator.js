// https://leetcode.com/problems/nested-array-generator/description/

var inorderTraversal = function* (arr) {
    arr = arr.flat(Infinity);
    for (const el of arr) {
        yield el;
    }
};
