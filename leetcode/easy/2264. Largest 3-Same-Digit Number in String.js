// https://leetcode.com/problems/largest-3-same-digit-number-in-string/?envType=daily-question&envId=2023-12-04

var largestGoodInteger = function (num) {
    let max = '';
    for (let i = 2; i < num.length; i++) {
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            const subString = num[i].repeat(3);
            if (subString > max) {
                max = subString;
            }
        }
    }
    return max;
};
