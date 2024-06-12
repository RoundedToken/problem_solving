// https://leetcode.com/problems/sort-colors/description/?envType=daily-question&envId=2024-06-12

var sortColors = function (nums) {
    let zero = 0,
        one = 0,
        two = 0;
    for (let n of nums) {
        n === 0 ? zero++ : n === 1 ? one++ : two++;
    }
    for (let i = 0; i < nums.length; i++) {
        i < zero ? (nums[i] = 0) : i < zero + one ? (nums[i] = 1) : (nums[i] = 2);
    }
    return nums;
};
