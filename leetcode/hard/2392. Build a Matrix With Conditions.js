// https://leetcode.com/problems/build-a-matrix-with-conditions/description/

var buildMatrix = function (k, rowConditions, colConditions) {
    const rowGraph = Array.from({ length: k + 1 }, () => []);
    const colGraph = Array.from({ length: k + 1 }, () => []);

    for (const [u, v] of rowConditions) {
        rowGraph[u].push(v);
    }
    for (const [u, v] of colConditions) {
        colGraph[u].push(v);
    }

    const topoSort = (graph) => {
        const inDegree = Array(k + 1).fill(0);
        for (const u of graph) {
            for (const v of u) {
                inDegree[v]++;
            }
        }
        const queue = [];
        for (let i = 1; i <= k; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }
        const order = [];
        while (queue.length) {
            const node = queue.shift();
            order.push(node);
            for (const v of graph[node]) {
                if (--inDegree[v] === 0) queue.push(v);
            }
        }
        return order.length === k ? order : [];
    };

    const rowOrder = topoSort(rowGraph);
    const colOrder = topoSort(colGraph);

    if (!rowOrder.length || !colOrder.length) return [];

    const rowMap = rowOrder.reduce((acc, num, i) => {
        acc[num] = i;
        return acc;
    }, {});

    const colMap = colOrder.reduce((acc, num, i) => {
        acc[num] = i;
        return acc;
    }, {});

    const result = Array.from({ length: k }, () => Array(k).fill(0));
    for (let i = 1; i <= k; i++) {
        result[rowMap[i]][colMap[i]] = i;
    }

    return result;
};
