// https://leetcode.com/problems/path-with-minimum-effort/?envType=daily-question&envId=2023-09-16

var minimumEffortPath = function (H) {
    let y = H.length,
        x = H[0].length,
        last = x * y - 1,
        vis = new Uint8Array(last + 1),
        dist = new Uint32Array(last + 1).fill(1000001),
        heap = [,],
        node = 0,
        path = 0,
        i,
        j,
        cell;
    const heapify = (node, k, l) => {
        let i = heap.length,
            par = i >> 1;
        dist[node] = Math.min(dist[node], Math.max(path, Math.abs(cell - H[k][l])));
        heap.push([node, dist[node]]);
        while (par && heap[par][1] > heap[i][1]) {
            [heap[par], heap[i]] = [heap[i], heap[par]];
            (i = par), (par = i >> 1);
        }
    };
    const extract = () => {
        let min = heap[1],
            left,
            right,
            i = 1,
            child = heap[3] && heap[3][1] < heap[2][1] ? 3 : 2;
        heap[1] = heap.pop();
        while (heap[child] && heap[i][1] > heap[child][1]) {
            [heap[i], heap[child]] = [heap[child], heap[i]];
            (i = child), (left = i << 1), (right = left + 1);
            child = heap[right] && heap[right][1] < heap[left][1] ? right : left;
        }
        return min;
    };
    while (node !== last) {
        (i = ~~(node / x)), (j = node % x), (cell = H[i][j]);
        if (i > 0 && !vis[node - x]) heapify(node - x, i - 1, j);
        if (i < y - 1 && !vis[node + x]) heapify(node + x, i + 1, j);
        if (j > 0 && !vis[node - 1]) heapify(node - 1, i, j - 1);
        if (j < x - 1 && !vis[node + 1]) heapify(node + 1, i, j + 1);
        vis[node] = 1;
        while (vis[node]) [node, path] = extract();
    }
    return path;
};
