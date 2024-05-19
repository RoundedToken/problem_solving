// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/?envType=daily-question&envId=2024-05-19

var maximumValueSum = function (nums, k, edges) {
    let totalSum = 0;
    let count = 0;
    let positiveMin = Infinity;
    let negativeMax = -Infinity;

    for (let nodeValue of nums) {
        let nodeValAfterOperation = nodeValue ^ k;
        totalSum += nodeValue;
        let netChange = nodeValAfterOperation - nodeValue;

        if (netChange > 0) {
            positiveMin = Math.min(positiveMin, netChange);
            totalSum += netChange;
            count += 1;
        } else {
            negativeMax = Math.max(negativeMax, netChange);
        }
    }

    if (count % 2 === 0) {
        return totalSum;
    }
    return Math.max(totalSum - positiveMin, totalSum + negativeMax);
};
