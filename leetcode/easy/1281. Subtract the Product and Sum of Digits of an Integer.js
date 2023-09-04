// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function (n) {
    const arr = n
        .toString()
        .split('')
        .map((v) => Number(v));
    return arr.reduce((p, c) => p * c, 1) - arr.reduce((p, c) => p + c, 0);
};
