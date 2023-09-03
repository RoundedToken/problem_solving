// https://leetcode.com/problems/array-wrapper/

var ArrayWrapper = function (nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((p, c) => p + c, 0);
};

ArrayWrapper.prototype.toString = function () {
    return JSON.stringify(this.nums);
};
