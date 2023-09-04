// https://leetcode.com/problems/smallest-even-multiple/

var smallestEvenMultiple = function (n) {
    return n % 2 === 0 ? n : n * 2;
};
