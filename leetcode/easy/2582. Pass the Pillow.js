// https://leetcode.com/problems/pass-the-pillow/description/

var passThePillow = function (n, time) {
    var d = Math.floor(time / (n - 1));
    var r = time % (n - 1);

    if (d % 2 === 0) {
        return 1 + r;
    }

    return n - r;
};
