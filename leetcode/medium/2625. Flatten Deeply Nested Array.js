// https://leetcode.com/problems/flatten-deeply-nested-array/

var flat = function (arr, n) {
    while (n > 0) {
        const flatten = [];
        n--;
        for (const el of arr) {
            if (Array.isArray(el)) flatten.push(...el);
            else flatten.push(el);
        }
        arr = flatten;
    }

    return arr;
};

function main() {
    console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
}
if (require.main === module) {
    main();
}
