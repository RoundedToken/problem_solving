// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function (operations) {
    return operations.reduce((prev, curr) => prev + (curr.includes('+') ? 1 : -1), 0);
};
