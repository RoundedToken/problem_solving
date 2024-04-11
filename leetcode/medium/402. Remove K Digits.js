// https://leetcode.com/problems/remove-k-digits/description/?envType=daily-question&envId=2024-04-11

var removeKdigits = function (num, k) {
    let stack = [];
    let removed = 0;
    for (let digit of num) {
        while (stack.length > 0 && digit < stack[stack.length - 1] && removed < k) {
            stack.pop();
            removed++;
        }
        stack.push(digit);
    }
    while (removed < k) {
        stack.pop();
        removed++;
    }
    return stack.join('').replace(/^0+/, '') || '0';
};
