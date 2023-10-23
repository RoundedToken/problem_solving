// https://leetcode.com/problems/power-of-four/?envType=daily-question&envId=2023-10-23

var isPowerOfFour = function (n) {
    const powersOfFour = new Array(16).fill(0).map((_, i) => 4 ** i);
    return powersOfFour.includes(n);
};
