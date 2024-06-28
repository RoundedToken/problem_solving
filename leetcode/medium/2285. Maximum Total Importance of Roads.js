// https://leetcode.com/problems/maximum-total-importance-of-roads/description/

var maximumImportance = function (n, roads) {
    const cities = new Array(n).fill(0);
    for (let i = 0; i < roads.length; i++) {
        const a = roads[i][0],
            b = roads[i][1];
        cities[a]++;
        cities[b]++;
    }

    return cities.sort((a, b) => a - b).reduce((a, c, i) => a + (i + 1) * c, 0);
};
