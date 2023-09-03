// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function (nums, n) {
    ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(nums[i], nums[i + n]);
    }
    return ans;
};
