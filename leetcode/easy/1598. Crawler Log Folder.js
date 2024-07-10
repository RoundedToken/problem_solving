// https://leetcode.com/problems/crawler-log-folder/description/

var minOperations = function (logs) {
    let l = new Array();
    for (let i of logs) {
        if (i == '../' && l.length > 0) {
            l.pop();
        } else if (i != './' && i != '../') {
            l.push(i);
        }
    }
    return l.length;
};
