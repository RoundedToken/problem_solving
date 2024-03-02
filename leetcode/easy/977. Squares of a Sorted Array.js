// https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=daily-question&envId=2024-03-02

var sortedSquares = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i] * nums[i]);
    }
    return arr.sort((a, b) => a - b);
};
