// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/?envType=daily-question&envId=2023-11-19

var reductionOperations = function (nums) {
    nums.sort((a, b) => b - a);

    let total = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            total += i + 1;
        }
    }

    return total;
};
