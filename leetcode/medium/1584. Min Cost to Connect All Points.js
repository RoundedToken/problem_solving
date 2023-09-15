// https://leetcode.com/problems/min-cost-to-connect-all-points/description/?envType=daily-question&envId=2023-09-15

var minCostConnectPoints = function (points) {
    const getDistance = (xi, yi, xj, yj) => Math.abs(xi - xj) + Math.abs(yi - yj);

    // Built in PriorityQueue library
    let mpq = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1] });
    mpq.enqueue([0, 0]);

    let totalCost = 0,
        visited = new Set();
    while (visited.size < points.length) {
        let [i, cost] = mpq.dequeue();
        if (visited.has(i)) continue;
        visited.add(i);
        totalCost += cost;
        let [xi, yi] = points[i];
        for (let j = 0; j < points.length; j++) {
            if (!visited.has(j)) {
                let [xj, yj] = points[j];
                mpq.enqueue([j, getDistance(xi, yi, xj, yj)]);
            }
        }
    }
    return totalCost;
};
