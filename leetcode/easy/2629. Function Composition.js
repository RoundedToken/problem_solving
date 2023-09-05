// https://leetcode.com/problems/function-composition/

var compose = function (functions) {
    return function (x) {
        return functions.reduceRight((p, c) => c(p), x);
    };
};
