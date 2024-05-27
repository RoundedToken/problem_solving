// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/?envType=daily-question&envId=2024-05-27

var specialArray = function (nums) {
    for (i = 0; i <= nums.length; i++) {
        let c = 0;
        for (let num of nums) {
            num >= i && ++c;
        }
        if (c === i) return i;
    }
    return -1;
};
