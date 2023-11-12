// https://leetcode.com/problems/bus-routes/?envType=daily-question&envId=2023-11-12

var numBusesToDestination = function (routes, S, T) {
    if (S === T) return 0;
    let visited = new Set();
    visited.add(S);
    let added = true;
    let count = 0;

    while (added) {
        added = false;
        count++;
        let temp = [];
        for (let i = 0; i < routes.length; i++) {
            for (let j = 0; j < routes[i].length; j++) {
                if (visited.has(routes[i][j])) {
                    temp.push(...routes[i]);
                    j = routes[i].length;
                    added = true;
                    routes[i] = [];
                }
            }
        }
        temp.forEach((item) => visited.add(item));
        if (visited.has(T)) return count;
    }

    return -1;
};
