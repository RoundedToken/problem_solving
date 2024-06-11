// https://leetcode.com/problems/relative-sort-array/description/?envType=daily-question&envId=2024-06-11

var relativeSortArray = function (arr1, arr2) {
    const lookup = new Map();
    const N = arr2.length;
    arr2.forEach((a, i) => {
        lookup.set(a, i);
    });
    return arr1.sort((a, b) => {
        a = lookup.has(a) ? lookup.get(a) : N + a;
        b = lookup.has(b) ? lookup.get(b) : N + b;
        return a - b;
    });
};
