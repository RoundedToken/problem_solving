// https://leetcode.com/problems/buy-two-chocolates/?envType=daily-question&envId=2023-12-20

var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b);
    let sum = prices[0] + prices[1];
    if (sum <= money) {
        return money - sum;
    } else {
        return money;
    }
};
