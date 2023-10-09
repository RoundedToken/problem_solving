// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=daily-question&envId=2023-10-09

var searchRange = function (nums, target) {
    const ans = [-1, -1];

    const searchBin = (isFirst) => {
        let start = isFirst ? 0 : ans[1];
        let end = nums.length - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] > target) {
                end = mid - 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else if (isFirst) {
                ans[0] = mid;
                end = mid - 1;
            } else {
                ans[1] = mid;
                start = mid + 1;
            }
        }
    };

    searchBin(true);
    if (ans[0] === -1) {
        return ans;
    }
    searchBin(false);

    return ans;
};

function main() {
    console.log(searchRange([1, 2, 3, 4, 4, 4, 4, 5], 4));
}
if (require.main === module) {
    main();
}
