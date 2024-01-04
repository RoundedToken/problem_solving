// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/?envType=daily-question&envId=2024-01-04

var minOperations = function (nums) {
    let countMap = new Map();
    let count = 0;

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let [num, occurrences] of countMap) {
        if (occurrences === 1) {
            return -1;
        }
        count += Math.floor(occurrences / 3) + (occurrences % 3 === 0 ? 0 : 1);
    }
    return count;
};
