//https://leetcode.com/problems/single-number-iii/submissions/1273070405/?envType=daily-question&envId=2024-05-31

var singleNumber = function (nums) {
    let update = [];
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i]) i++;
        else update.push(nums[i]);
    }
    if (nums[nums.length - 2] !== nums[nums.length - 1]) update.push(nums[nums.length - 1]);
    return update;
};
