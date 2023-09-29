// https://leetcode.com/problems/monotonic-array/?envType=daily-question&envId=2023-09-29

var isMonotonic = function (nums) {
    let isAsc = false;
    let isStart = true;

    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];

        if (isStart && prev === curr) {
            continue;
        } else if (isStart) {
            isStart = false;
            isAsc = prev < curr;
        }

        if (isAsc && curr < prev) {
            return false;
        }

        if (!isAsc && prev < curr) {
            return false;
        }
    }

    return true;
};
