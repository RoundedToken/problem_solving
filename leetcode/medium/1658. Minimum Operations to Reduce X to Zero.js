// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/?envType=daily-question&envId=2023-09-20

var minOperations = function (nums, x) {
    var minOperations = function (nums, x) {
        let len = nums.length,
            best = 0;
        for (let i = 1; i < len; i++) nums[i] += nums[i - 1];
        let y = nums[len - 1] - x;
        if (y < 0) return -1;
        if (y === 0) return len;
        for (let i = -1, j = (l = 0); i < len - best && l <= x; l = nums[++i]) {
            while (nums[j] - l < y) j++;
            if (nums[j] - l === y) best = Math.max(best, j - i);
        }
        return best > 0 ? len - best : -1;
    };
};

function main() {
    console.log(minOperations([1, 1, 4, 2, 3], 5));
}
if (require.main === module) {
    main();
}
