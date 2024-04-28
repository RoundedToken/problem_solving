// https://leetcode.com/problems/sum-of-distances-in-tree/description/?envType=daily-question&envId=2024-04-28

var sumOfDistancesInTree = function (n, edges) {
    let graph = new Array(n).fill(0).map(() => new Array());
    let count = new Array(n).fill(1);
    let res = new Array(n).fill(0);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let dfs = (node, parent) => {
        for (let child of graph[node]) {
            if (child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
            res[node] += res[child] + count[child];
        }
    };

    let dfs2 = (node, parent) => {
        for (let child of graph[node]) {
            if (child === parent) continue;
            res[child] = res[node] - count[child] + n - count[child];
            dfs2(child, node);
        }
    };

    dfs(0, -1);
    dfs2(0, -1);

    return res;
};
