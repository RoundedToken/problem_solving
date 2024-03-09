// https://leetcode.com/problems/minimum-common-value/description/?envType=daily-question&envId=2024-03-09

var getCommon = function (nums1, nums2) {
    const set = new Set(nums1);
    const common = nums2.filter((n) => set.has(n)).sort((a, b) => a - b)[0];

    return common !== undefined ? common : -1;
};
