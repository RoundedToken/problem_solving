// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/?envType=daily-question&envId=2023-12-27

var minCost = function (s, cost) {
    let res = 0;
    for (let i = 0, max = 0; i < s.length; i++) {
        res += cost[i];
        max = Math.max(max, cost[i]);
        if (s[i] !== s[i + 1]) {
            res -= max;
            max = 0;
        }
    }
    return res;
};
