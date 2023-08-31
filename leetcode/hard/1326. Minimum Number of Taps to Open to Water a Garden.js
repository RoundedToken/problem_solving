// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/

var minTaps = function (n, ranges) {
    const arr = new Array(n + 1).fill(0);

    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] === 0) continue;
        const left = Math.max(0, i - ranges[i]);
        arr[left] = Math.max(arr[left], i + ranges[i]);
    }

    let end = 0,
        far_can_reach = 0,
        cnt = 0;
    for (let i = 0; i <= n; i++) {
        if (i > end) {
            if (far_can_reach <= end) return -1;
            end = far_can_reach;
            cnt++;
        }
        far_can_reach = Math.max(far_can_reach, arr[i]);
    }

    return cnt + (end < n ? 1 : 0);
};

function main() {
    console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
    console.log(minTaps(7, [1, 1, 1, 1, 1, 1, 1, 1]));
}
if (require.main === module) {
    main();
}
