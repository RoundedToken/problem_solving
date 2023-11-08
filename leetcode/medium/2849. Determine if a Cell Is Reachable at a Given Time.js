// https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/?envType=daily-question&envId=2023-11-08

var isReachableAtTime = function (sx, sy, fx, fy, t) {
    let xDistance = Math.abs(sx - fx);
    let yDistance = Math.abs(sy - fy);

    let minDist = Math.min(xDistance, yDistance) + Math.abs(yDistance - xDistance);

    if (minDist === 0) {
        return t !== 1;
    }

    return t >= minDist;
};
