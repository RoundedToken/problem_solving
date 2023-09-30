// https://leetcode.com/problems/132-pattern/description/?envType=daily-question&envId=2023-09-30

var find132pattern = function (nums) {
    let arr = [];

    let negative = -Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < negative) {
            return true;
        }

        while (arr.length > 0 && nums[i] > arr[arr.length - 1]) {
            negative = arr.pop();
        }

        arr.push(nums[i]);
    }

    return false;
};
