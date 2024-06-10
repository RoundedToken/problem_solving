// https://leetcode.com/problems/height-checker/submissions/1283442384/?envType=daily-question&envId=2024-06-10

var heightChecker = function (heights) {
    let sorted = [...heights].sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            res.push(heights[i]);
        }
    }
    return res.length;
};
