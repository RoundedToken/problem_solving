// https://leetcode.com/problems/binary-subarrays-with-sum/description/?envType=daily-question&envId=2024-03-14

function withSumAtMost(a, t) {
    if (t < 0) return 0;
    let i = 0,
        sum = 0,
        cc = 0;
    for (let j = 0; j < a.length; j++) {
        sum += a[j];
        for (; sum > t; i++) {
            sum -= a[i];
        }
        cc += j - i + 1;
    }
    return cc;
}
var numSubarraysWithSum = function (a, t) {
    return withSumAtMost(a, t) - withSumAtMost(a, t - 1);
};
