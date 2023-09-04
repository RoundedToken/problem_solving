// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
    return accounts.reduce((p, c) => {
        const sum = c.reduce((prev, curr) => prev + curr, 0);
        return sum > p ? sum : p;
    }, 0);
};
