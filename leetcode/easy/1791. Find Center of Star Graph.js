// https://leetcode.com/problems/find-center-of-star-graph/description/

var findCenter = function (edges) {
    if (edges[1].includes(edges[0][1])) {
        return edges[0][1];
    } else {
        return edges[0][0];
    }
};
