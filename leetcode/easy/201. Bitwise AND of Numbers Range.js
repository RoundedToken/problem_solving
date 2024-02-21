// https://leetcode.com/problems/bitwise-and-of-numbers-range/description/?envType=daily-question&envId=2024-02-21

var rangeBitwiseAnd = function (left, right) {
    let Sc = 0;
    while (left !== right) {
        left >>= 1;
        right >>= 1;
        Sc++;
    }
    return left << Sc;
};
