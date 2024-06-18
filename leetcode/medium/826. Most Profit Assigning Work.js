// https://leetcode.com/problems/most-profit-assigning-work/description/

var maxProfitAssignment = function (difficulty, profit, worker) {
    let dp = [];
    for (let i = 0; i < difficulty.length; i++) {
        dp.push({
            difficulty: difficulty[i],
            profit: profit[i],
        });
    }
    dp.sort((a, b) => a.difficulty - b.difficulty);
    worker.sort((a, b) => a - b);
    let i = 0,
        j = 0,
        maxProfit = 0,
        result = 0;
    while (i < worker.length) {
        while (worker[i] >= dp[j]?.difficulty) {
            if (maxProfit < dp[j].profit) {
                maxProfit = dp[j].profit;
            }
            j++;
        }
        result += maxProfit;
        // result.push(maxProfit)
        i++;
    }
    return result;
};
