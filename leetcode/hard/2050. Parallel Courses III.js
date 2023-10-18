// https://leetcode.com/problems/parallel-courses-iii/?envType=daily-question&envId=2023-10-18

var minimumTime = function (n, relations, time) {
    const maxTime = new Array(n + 1).fill(-1);

    const indegree = {};

    for (let edge of relations) {
        let [a, b] = edge;
        if (indegree[b]) {
            indegree[b].push(a);
        } else {
            indegree[b] = [a];
        }
    }

    function calculateAbsMax(node) {
        if (maxTime[node] > -1) return maxTime[node];
        let tym = 0;
        if (indegree[node] == undefined) tym = time[node - 1];
        else {
            for (let elm of indegree[node]) {
                tym = Math.max(tym, calculateAbsMax(elm));
            }
            tym += time[node - 1];
        }
        maxTime[node] = tym;
        return tym;
    }
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = Math.max(ans, calculateAbsMax(i));
    }

    return ans;
};
