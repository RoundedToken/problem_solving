// https://leetcode.com/problems/count-nice-pairs-in-an-array/?envType=daily-question&envId=2023-11-21

var countNicePairs = function (nums) {
    let nicePairs = 0;
    let mod = 10 ** 9 + 7;
    let hash = {};

    if (nums.length === 1) return 0;

    function rev(num) {
        if (num < 10) return num;
        let reverseNum = 0;
        while (num) {
            reverseNum = reverseNum * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return reverseNum;
    }

    for (let i = 0; i < nums.length; i++) {
        let diff = nums[i] - rev(nums[i]);
        if (diff in hash) {
            nicePairs += hash[diff];
            hash[diff]++;
        } else {
            hash[diff] = 1;
        }
    }

    return nicePairs % mod;
};
