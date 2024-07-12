// https://leetcode.com/problems/maximum-score-from-removing-substrings/description/

var maximumGain = function (s, x, y) {
    const [first, second] = x > y ? ['ab', 'ba'] : ['ba', 'ab'];
    const [highScore, lowScore] = x > y ? [x, y] : [y, x];

    let score = 0;
    let stack = [];

    for (let char of s) {
        if (stack.length && stack[stack.length - 1] + char === first) {
            stack.pop();
            score += highScore;
        } else {
            stack.push(char);
        }
    }

    let newStack = [];
    for (let char of stack) {
        if (newStack.length && newStack[newStack.length - 1] + char === second) {
            newStack.pop();
            score += lowScore;
        } else {
            newStack.push(char);
        }
    }

    return score;
};
