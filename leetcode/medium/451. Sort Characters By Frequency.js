// https://leetcode.com/problems/sort-characters-by-frequency/description/?envType=daily-question&envId=2024-02-07

var frequencySort = function (s) {
    function countOccurrences(arr) {
        const counts = new Map();
        for (const element of arr) {
            counts.set(element, counts.get(element) + 1 || 1);
        }
        return counts;
    }
    const map = countOccurrences(s);
    const map1 = new Map([...map].sort((a, b) => b[1] - a[1]));

    let a = '';

    for (let [key, value] of map1) {
        a = a + key.padStart(value, key);
    }
    return a;
};
