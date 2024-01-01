// https://leetcode.com/problems/assign-cookies/?envType=daily-question&envId=2024-01-01

var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let j = 0,
        res = 0;
    for (let num of s) {
        if (num >= g[j]) res++, j++;
    }
    return res;
};
