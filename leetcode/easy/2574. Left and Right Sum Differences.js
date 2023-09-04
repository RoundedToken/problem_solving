// https://leetcode.com/problems/left-and-right-sum-differences/

var leftRightDifference = function (nums) {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    const last = prefix.at(-1);

    return nums.map((_, i) => {
        const left = prefix?.[i - 1] ?? 0;

        const right = last - prefix[i];
        return Math.abs(left - right);
    });
};
