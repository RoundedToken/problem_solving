// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

var countPairs = function (nums, target) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let g = i + 1; g < nums.length; g++) {
            if (nums[i] + nums[g] < target) count++;
        }
    }

    return count;
};
