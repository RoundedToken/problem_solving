// https://leetcode.com/problems/min-cost-climbing-stairs/?envType=daily-question&envId=2023-10-13

var minCostClimbingStairs = function (cost) {
    if (cost.length === 1) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);

    let minCostTwoBefore = cost[0];
    let minCostOneBefore = cost[1];

    for (let n = 2; n < cost.length; n++) {
        const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);

        minCostTwoBefore = minCostOneBefore;
        minCostOneBefore = minCostAtCurrent;
    }

    return Math.min(minCostOneBefore, minCostTwoBefore);
};
