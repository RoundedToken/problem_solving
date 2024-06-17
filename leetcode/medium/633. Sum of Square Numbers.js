// https://leetcode.com/problems/sum-of-square-numbers/description/?envType=daily-question&envId=2024-06-17

var judgeSquareSum = function (c) {
    for (var i = 0; i <= Math.sqrt(c); i++) {
        var j = Math.sqrt(c - i * i);
        if (j === parseInt(j)) return true;
    }
    return false;
};
