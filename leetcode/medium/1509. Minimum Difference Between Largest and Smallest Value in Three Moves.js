// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/

var smallest = function (arr) {
    let min = Infinity,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        min = Math.min(min, arr[i]);
    }
    return min;
};

var maximal = function (arr) {
    let max = -Infinity,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
};

var removeItem = function (arr, val) {
    let idx = arr.indexOf(val);
    if (idx > -1) {
        arr.splice(idx, 1);
    }
    return arr;
};

var minDifference = function (nums) {
    let len = nums.length;
    if (len <= 4) {
        return 0;
    } else if (len <= 8) {
        nums = nums.sort((a, b) => a - b);
        let min = Infinity;
        let x = len - 4;
        for (let i = 0; i < len - x; i++) {
            min = Math.min(nums[i + x] - nums[i], min);
        }
        return min;
    } else {
        let s1 = smallest(nums);
        nums = removeItem(nums, s1);
        let s2 = smallest(nums);
        nums = removeItem(nums, s2);
        let s3 = smallest(nums);
        nums = removeItem(nums, s3);
        let s4 = smallest(nums);
        nums = removeItem(nums, s4);
        let l1 = maximal(nums);
        nums = removeItem(nums, l1);
        let l2 = maximal(nums);
        nums = removeItem(nums, l2);
        let l3 = maximal(nums);
        nums = removeItem(nums, l3);
        let l4 = maximal(nums);
        return Math.min(l1 - s4, l2 - s3, l3 - s2, l4 - s1);
    }
};
