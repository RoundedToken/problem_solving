// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/?envType=daily-question&envId=2024-03-29

var countSubarrays = function (nums, k) {
    let max = Math.max(...nums);
    let res = 0;
    let n = nums.length;
    let maxNum = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] === max) {
            maxNum.push(i);
        }
    }

    let indsize = maxNum.length;
    for (let i = 0; i <= indsize - k; i++) {
        let end = i + k - 1;
        let l, r;
        if (i === 0) {
            l = maxNum[i];
        } else {
            l = maxNum[i] - maxNum[i - 1] - 1;
        }
        r = n - 1 - maxNum[end];
        res += (l + 1) * (r + 1);
    }
    return res;
};
