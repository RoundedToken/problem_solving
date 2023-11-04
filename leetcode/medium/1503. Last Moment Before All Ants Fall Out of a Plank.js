// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/?envType=daily-question&envId=2023-11-04

var getLastMoment = function (n, left, right) {
    let leftMax = -Infinity;
    let rightMin = Infinity;

    for (let pos of left) {
        leftMax = Math.max(leftMax, pos);
    }

    for (let pos of right) {
        rightMin = Math.min(rightMin, pos);
    }

    return Math.max(leftMax, n - rightMin);
};
