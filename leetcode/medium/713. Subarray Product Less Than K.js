// https://leetcode.com/problems/subarray-product-less-than-k/description/?envType=daily-question&envId=2024-03-27

var numSubarrayProductLessThanK = function (nums, k) {
    let startPtr = 0,
        currPtr = 0,
        count = 0,
        product = 1;
    while (currPtr < nums.length) {
        product *= nums[currPtr];
        if (product < k) currPtr++;
        else {
            count += currPtr - startPtr;
            if (startPtr < currPtr) {
                product /= nums[startPtr];
                product /= nums[currPtr];
                startPtr++;
            } else {
                product = 1;
                startPtr = ++currPtr;
            }
        }
    }
    if (startPtr < nums.length) {
        const diff = currPtr - startPtr;
        count += (diff * (diff + 1)) / 2;
    }

    return count;
};
