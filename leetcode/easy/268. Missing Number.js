// https://leetcode.com/problems/missing-number/description/?envType=daily-question&envId=2024-02-20

var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === mid) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
