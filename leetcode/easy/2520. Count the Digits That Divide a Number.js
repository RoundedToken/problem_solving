// https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

var countDigits = function (num) {
    return num
        .toString()
        .split('')
        .reduce((prev, curr) => (prev += num % Number(curr) === 0 ? 1 : 0), 0);
};
