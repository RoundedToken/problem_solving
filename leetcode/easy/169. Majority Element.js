// https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12

var majorityElement = function (nums) {
    let n = nums.length / 2;
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] == undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }
    for (let i in obj) {
        if (obj[i] > n) {
            return i;
        }
    }
};
