// https://leetcode.com/problems/find-the-duplicate-number/description/?envType=daily-question&envId=2023-09-19

var findDuplicate = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const next = nums[i + 1];

        if (num === next) return num;
    }
};
