// https://leetcode.com/problems/maximum-score-after-splitting-a-string/?envType=daily-question&envId=2023-12-22

var maxScore = function (s) {
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i).split('0').length - 1;
        const right = s.slice(i).split('1').length - 1;
        let currentSum = left + right;
        max = Math.max(max, currentSum);
    }
    return max;
};
