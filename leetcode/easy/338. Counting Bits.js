// https://leetcode.com/problems/counting-bits/description/?envType=daily-question&envId=2023-09-01

var countBits = function (n) {
    const ans = Array(n + 1).fill(0);
    ans.forEach((v, i) => {
        ans[i] = i
            .toString(2)
            .split('')
            .reduce((prev, curr) => {
                return prev + +curr;
            }, 0);
    });
    return ans;
};
