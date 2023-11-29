// https://leetcode.com/problems/number-of-1-bits/?envType=daily-question&envId=2023-11-29

var hammingWeight = function (n) {
    return n.toString(2).split('0').join('').length;
};
