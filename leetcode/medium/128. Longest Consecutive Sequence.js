// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let intervals = new Set();

    for (const num of nums) {
        const hasPrev = set.has(num - 1);
        const hasNext = set.has(num + 1);
        if (set.has(num) && ((hasPrev && !hasNext) || (!hasPrev && hasNext))) {
            intervals.add(num);
        }
    }

    intervals = Array.from(intervals);
    if (intervals.length <= 1) return 1;
    intervals.sort((a, b) => a - b);

    let max = -Infinity;

    for (let i = 1; i < intervals.length; i += 2) {
        const length = intervals[i] - intervals[i - 1];
        if (length > max) max = length;
    }

    return max + 1;
};

function main() {
    console.log(longestConsecutive([6, 7, 8, 0, 9, 1, 2]));
    console.log(longestConsecutive([6, 7, 8, 0, 9, 1, 100, 99, 98, 97, 95, 49, 50]));
    console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
}
if (require.main === module) {
    main();
}
