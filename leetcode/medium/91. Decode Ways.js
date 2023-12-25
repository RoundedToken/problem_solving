// https://leetcode.com/problems/decode-ways/?envType=daily-question&envId=2023-12-25

var numDecodings = function (s) {
    return count(s, 0);
};

var count = function (str, i, memo = []) {
    if (str[i] == '0') return 0;
    if (i >= str.length - 1) return 1;
    if (memo[i]) return memo[i];

    let res = count(str, i + 1, memo);
    if (parseInt(str[i] + str[i + 1]) <= 26) {
        res += count(str, i + 2, memo);
    }

    memo[i] = res;
    return res;
};
