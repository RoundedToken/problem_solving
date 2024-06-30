// https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/description/

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, getParent };
    function find(x) {
        return parent[x] < 0 ? x : (parent[x] = find(parent[x]));
    }

    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y]) [x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }

    function count() {
        return parent.filter((v) => v < 0).length;
    }

    function equiv(x, y) {
        return find(x) == find(y);
    }

    function getParent() {
        return parent;
    }
}

const maxNumEdgesToRemove = (n, edges) => {
    let alice = new DJSet(n);
    let bob = new DJSet(n);
    let connect = 0;
    for (const [type, u, v] of edges) {
        if (type == 3 && !alice.equiv(u - 1, v - 1)) {
            alice.union(u - 1, v - 1);
            bob.union(u - 1, v - 1);
            connect++;
        }
    }
    for (const [type, u, v] of edges) {
        if (type == 1) {
            alice.union(u - 1, v - 1);
        } else if (type == 2) {
            bob.union(u - 1, v - 1);
        }
    }
    if (alice.count() == 1 && bob.count() == 1) {
        return edges.length - (n - 1 - connect) * 2 - connect;
    }
    return -1;
};
