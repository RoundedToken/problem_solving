// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function (temperatures) {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
};

function main() {
    console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
}
if (require.main === module) {
    main();
}
