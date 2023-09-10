// https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/description/?envType=daily-question&envId=2023-09-10

const MOD = 1e9 + 7;
var countOrders = function (n) {
    let count = 1;
    for (let i = 2; i <= n; i++) {
        count = (count * (2 * i - 1) * i) % MOD;
    }
    return count;
};
