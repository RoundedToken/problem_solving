// https://leetcode.com/problems/find-the-town-judge/description/?envType=daily-question&envId=2024-02-22

var findJudge = function (n, t) {
    if (n == 1) return 1;
    if (t.length == 0) return -1;
    let obj = {};
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i][1]]) {
            obj[t[i][1]].push(t[i][0]);
        } else {
            obj[t[i][1]] = [t[i][0]];
        }
    }
    let judge = undefined;
    for (let key in obj) {
        if (obj[key].length == n - 1) {
            judge = key;
        }
    }
    for (let key in obj) {
        if (obj[key].includes(Number(judge))) {
            return -1;
        }
    }
    return judge ? judge : -1;
};
