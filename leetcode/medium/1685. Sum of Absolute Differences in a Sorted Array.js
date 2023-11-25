// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/?envType=daily-question&envId=2023-11-25

var getSumAbsoluteDifferences = function (nums) {
    let totalSum = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        totalSum += Math.abs(nums[i]);
    }
    let currentLeftSum = 0;
    let leftElementsCount = 0;
    let rightElementsCount = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        currentLeftSum += nums[i];
        let leftSum = leftElementsCount * nums[i] - (currentLeftSum - nums[i]);
        let rightSum = totalSum - currentLeftSum - rightElementsCount * nums[i];
        leftElementsCount++;
        rightElementsCount--;
        result[i] = Math.abs(leftSum + rightSum);
    }
    return result;
};
