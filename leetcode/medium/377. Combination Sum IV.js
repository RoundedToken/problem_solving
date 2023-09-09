// https://leetcode.com/problems/combination-sum-iv/?envType=daily-question&envId=2023-09-09

var combinationSum4 = function (nums, target) {
    nums.sort((a, b) => a - b);

    const memo = {};

    const helper = (n) => {
        if (n in memo) return memo[n];

        if (n === 0) return 1;

        if (n < nums[0]) return 0;

        let count = 0;

        for (let num of nums) {
            if (n - num < 0) break;

            count += helper(n - num);
        }

        memo[n] = count;
        return count;
    };

    return helper(target);
};

function main() {
    console.log(combinationSum4([3, 1, 2], 35));
}
if (require.main === module) {
    main();
}
