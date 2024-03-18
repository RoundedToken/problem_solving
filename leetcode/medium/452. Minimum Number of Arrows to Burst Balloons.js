// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=daily-question&envId=2024-03-18

var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let arrows = 1;
    let currentEnd = points[0][1];

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] > currentEnd) {
            arrows++;
            currentEnd = points[i][1];
        } else {
            currentEnd = Math.min(currentEnd, points[i][1]);
        }
    }
    return arrows;
};
