// https://leetcode.com/problems/counter/

var createCounter = function (n) {
    return function () {
        return n++;
    };
};
