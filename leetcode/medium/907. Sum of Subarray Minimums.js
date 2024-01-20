// https://leetcode.com/problems/sum-of-subarray-minimums/description/?envType=daily-question&envId=2024-01-20

var sumSubarrayMins = function (arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;
    const stack = [];

    let sum = 0;

    for (let i = 0; i < n; i++) {
        const currNum = arr[i];
        let rightCount = 1;

        while (stack.length > 0 && stack[stack.length - 1][0] > currNum) {
            const top = stack.pop();
            const [prevNum, leftCount] = top;

            const subArrCount = leftCount * rightCount;

            sum += prevNum * subArrCount;
            rightCount += leftCount;
        }

        stack.push([currNum, rightCount]);
    }

    let rightCount = 1;

    while (stack.length > 0) {
        const top = stack.pop();
        const [num, leftCount] = top;
        const subArrCount = leftCount * rightCount;

        sum += num * subArrCount;

        rightCount += leftCount;
    }

    return sum % MOD;
};
