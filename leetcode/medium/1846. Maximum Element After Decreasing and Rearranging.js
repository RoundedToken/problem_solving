// https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/?envType=daily-question&envId=2023-11-15

var maximumElementAfterDecrementingAndRearranging = function (arr) {
    return arr.sort((a, b) => a - b).reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0);
};
