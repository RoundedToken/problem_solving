// https://leetcode.com/problems/shortest-path-visiting-all-nodes/description/?envType=daily-question&envId=2023-09-17

const initialize2DArray = (n, m) => {
    let d = [];
    for (let i = 0; i < n; i++) {
        let t = Array(m).fill(0);
        d.push(t);
    }
    return d;
};

const shortestPathLength = (g) => {
    let n = g.length,
        dis = initialize2DArray(1 << n, n),
        q = [],
        res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) q.push([1 << i, i]);
    while (q.length) {
        let [mask, cur] = q.shift();
        for (const child of g[cur]) {
            let childMask = mask | (1 << child);
            if (dis[childMask][child] == 0) {
                q.push([childMask, child]);
                dis[childMask][child] = dis[mask][cur] + 1;
            }
        }
    }
    for (let i = 0; i < n; i++) res = Math.min(res, dis[(1 << n) - 1][i]);
    return res;
};
