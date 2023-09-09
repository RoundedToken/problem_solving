// https://leetcode.com/problems/chunk-array/

var chunk = function (arr, size) {
    if (arr.length === 0) return [];

    const result = [];

    for (const el of arr) {
        const last = result.at(-1);

        if (last && last.length < size) {
            last.push(el);
        } else {
            result.push([el]);
        }
    }

    return result;
};
