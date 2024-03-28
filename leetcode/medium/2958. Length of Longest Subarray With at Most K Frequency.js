// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/?envType=daily-question&envId=2024-03-28

var maxSubarrayLength = function (nums, k) {
    let l = 0;
    const hash = {};
    let cnt = 0;

    nums.forEach((num, r) => {
        hash[num] = hash[num] || 0;
        hash[num] += 1;

        cnt += hash[num] === k + 1 ? 1 : 0;

        if (cnt > 0) {
            hash[nums[l]] -= 1;
            cnt -= hash[nums[l]] === k ? 1 : 0;
            l += 1;
        }
    });

    return nums.length - l;
};
