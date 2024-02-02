// https://leetcode.com/problems/sequential-digits/description/?envType=daily-question&envId=2024-02-02

var sequentialDigits = function (low, high) {
    const digits = '123456789';
    const ans = [];

    const minLen = low.toString().length;
    const maxLen = high.toString().length;

    for (let windowSize = minLen; windowSize <= maxLen; ++windowSize) {
        for (let i = 0; i + windowSize <= digits.length; ++i) {
            const num = parseInt(digits.substring(i, i + windowSize));

            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }

    return ans;
};
