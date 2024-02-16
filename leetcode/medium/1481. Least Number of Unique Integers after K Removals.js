// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/?envType=daily-question&envId=2024-02-16

var findLeastNumOfUniqueInts = function (arr, k) {
    const seen = {};

    for (let num of arr) {
        seen[num] = (seen[num] || 0) + 1;
    }
    const nums = Object.entries(seen).sort((a, b) => b[1] - a[1]);
    while (k > 0) {
        const count = nums[nums.length - 1][1];
        if (k < count) break;
        k -= count;
        nums.pop();
    }

    return nums.length;
};
