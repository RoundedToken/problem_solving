// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/?envType=daily-question&envId=2024-04-04

var maxDepth = function (s) {
    let arr = [];
    let max = 0;
    for (let char of s) {
        if (char == '(') arr.push(char);
        if (char == ')') {
            max = arr.length > max ? arr.length : max;
            arr.pop();
        }
    }
    return max;
};
