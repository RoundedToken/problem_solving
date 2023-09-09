// https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/

const maxTwo = (indR, indC, grid) => {
    const max = [-Infinity, -Infinity];

    for (const n of grid[indR]) if (n > max[0]) max[0] = n;
    for (const row of grid) if (row[indC] > max[1]) max[1] = row[indC];

    return max;
};

var maxIncreaseKeepingSkyline = function (grid) {
    let sum = 0;

    for (const indR in grid) {
        for (const indC in grid[indR]) {
            const n = grid[indR][indC];

            sum += Math.min(...maxTwo(indR, indC, grid)) - n;
        }
    }

    return sum;
};
