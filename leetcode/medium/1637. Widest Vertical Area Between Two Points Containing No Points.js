// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/?envType=daily-question&envId=2023-12-21

var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let max = 0;
    for (let i = 0; i < points.length - 1; i++) {
        max = Math.max(max, points[i + 1][0] - points[i][0]);
    }
    return max;
};
