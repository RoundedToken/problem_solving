// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function (num) {
    const unique = num
        .toString()
        .split('')
        .sort((a, b) => a - b);
    return Number(unique[0] + unique[2]) + Number(unique[1] + unique[3]);
};
