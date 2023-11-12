const top = 0;
const parent = (i) => ((i + 1) >>> 1) - 1;
const left = (i) => (i << 1) + 1;
const right = (i) => (i + 1) << 1;

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    push(...values) {
        values.forEach((value) => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this._heap[top];
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild =
                right(node) < this.size() && this._greater(right(node), left(node))
                    ? right(node)
                    : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

const solution = (input) => {
    input = input.trim().split('\n');
    const [N] = input[0].trim().split(' ').map(Number);
    const params = input[1];
    const roads = input.slice(3);
    const [S, F] = params.trim().split(' ').map(Number);

    //Формируем граф
    const graph = new Map();

    for (const road of roads) {
        const [a, start, b, finish] = road.trim().split(' ').map(Number);
        const routes = graph.get(a);

        if (routes) {
            routes.push([b, start, finish]);
        } else {
            graph.set(a, [[b, start, finish]]);
        }
    }

    console.log(graph);

    const minPriorityQueue = new PriorityQueue((a, b) => a[1] < b[1]);
    minPriorityQueue.push([S, 0]);
    const visited = new Set();
    const dist = Array(N + 1).fill(Infinity);
    dist[S] = 0;

    while (minPriorityQueue.size() > 0) {
        const [minInd, currentTime] = minPriorityQueue.pop();

        if (visited.has(minInd)) {
            continue;
        }

        visited.add(minInd);

        const pairs = graph.get(minInd);

        if (pairs) {
            for (const pair of pairs) {
                console.log(dist);
                const [to, start, finish] = pair;

                if (finish < dist[to] && start >= currentTime) {
                    dist[to] = finish;
                    minPriorityQueue.push([to, finish]);
                }
            }
        }
    }

    console.log(dist);

    return dist[F] === Infinity ? -1 : dist[F];
};

function main() {
    console.log(
        solution(`3
    1 3
    4
    1 0 2 5
    1 1 2 3
    2 3 3 5
    1 1 3 10`)
    );
}
if (require.main === module) {
    main();
}
