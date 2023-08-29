// https://leetcode.com/problems/product-of-array-except-self/description/

var productExceptSelf = function (nums) {
    let all = 1n;
    const result = [];
    let zeroes = false;
    let zeroesCount = 0;

    for (const num of nums) {
        if (num !== 0) all *= BigInt(num);
        else {
            zeroes = true;
            zeroesCount++;
        }
    }

    if (zeroesCount > 1) return Array(nums.length).fill(0);

    for (const num of nums) {
        if (!zeroes) {
            result.push(all / BigInt(num));
        } else if (num === 0) result.push(all);
        else result.push(0);
    }

    return result;
};
