// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

var minPartitions = function (n) {
    return Math.max(...n.toString().split(''));
};
