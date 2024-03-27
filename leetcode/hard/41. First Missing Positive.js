// https://leetcode.com/problems/first-missing-positive/description/?envType=daily-question&envId=2024-03-26

var firstMissingPositive = function (nums) {
    const numSet = new Set(nums.filter((num) => num > 0));
    let i = 1;

    while (numSet.has(i)) {
        i++;
    }

    return i;
};
