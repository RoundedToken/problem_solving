// https://leetcode.com/problems/count-number-of-nice-subarrays/description/

var numberOfSubarrays = function (nums, k) {
    let left = 0,
        mid = 0,
        right = 0,
        count = 0,
        windowLen = 0;
    while (nums[mid] % 2 === 0) {
        mid++;
    }
    while (right < nums.length) {
        if (nums[right] % 2 === 1) {
            windowLen++;
        }
        if (windowLen > k) {
            left = mid + 1;
            mid = mid + 1;
            windowLen--;
            while (nums[mid] % 2 !== 1) {
                mid++;
            }
        }
        if (windowLen === k) {
            count += mid - left + 1;
        }
        right++;
    }
    return count;
};
