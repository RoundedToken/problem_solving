// https://leetcode.com/problems/calculate-money-in-leetcode-bank/?envType=daily-question&envId=2023-12-06

var totalMoney = function (n) {
    let countMonday = Math.floor(n / 7);
    let seq = (countMonday ** 2 + 7 * countMonday) / 2;
    let sum = seq * 7;
    for (let i = 0; i < n - countMonday * 7; i++) {
        sum += countMonday + i + 1;
    }
    return sum;
};
