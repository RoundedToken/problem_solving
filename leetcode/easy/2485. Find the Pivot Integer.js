// https://leetcode.com/problems/find-the-pivot-integer/description/?envType=daily-question&envId=2024-03-13

var pivotInteger = function (n) {
    const prefixSums = [0];
    for (let i = 1; i <= n; i++) {
        prefixSums.push(i + prefixSums[i - 1]);
    }

    let postfixSum = 0;
    for (let i = n; i >= 1; i--) {
        postfixSum += i;
        if (postfixSum === prefixSums[i]) {
            return i;
        }
    }

    return -1;
};
