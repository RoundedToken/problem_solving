// https://leetcode.com/problems/diagonal-traverse-ii/?envType=daily-question&envId=2023-11-22

var findDiagonalOrder = function (nums) {
    if (!nums || nums.length === 0 || nums[0].length === 0) {
        return [];
    }

    const rows = nums.length;
    const cols = Math.max(...nums.map((row) => row.length));
    const result = [];

    for (let sum = 0; sum <= rows + cols - 2; sum++) {
        for (let row = Math.min(sum, rows - 1); row >= 0 && sum - row < cols; row--) {
            if (nums[row][sum - row] !== undefined) {
                result.push(nums[row][sum - row]);
            }
        }
    }

    return result;
};
