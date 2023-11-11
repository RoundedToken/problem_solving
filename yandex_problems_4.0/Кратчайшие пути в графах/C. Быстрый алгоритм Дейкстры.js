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
    const [N, K] = input[0].trim().split(' ').map(Number);
    const params = input[input.length - 1];
    const roads = input.slice(1, input.length - 1);
    const [S, F] = params.trim().split(' ').map(Number);

    //Формируем граф
    const graph = new Map();

    for (const road of roads) {
        const [a, b, l] = road.trim().split(' ').map(Number);
        const pairsFrom = graph.get(a);
        const pairsTo = graph.get(b);

        if (pairsFrom) {
            pairsFrom.push([b, l]);
        } else {
            graph.set(a, [[b, l]]);
        }

        if (pairsTo) {
            pairsTo.push([a, l]);
        } else {
            graph.set(b, [[a, l]]);
        }
    }
    console.log(graph);

    //Формируем расстояния
    const dist = new PriorityQueue((a, b) => a[1] < b[1]);
    dist.push([S, 0]);

    while (true) {
        const [minInd, minValue] = dist.pop();

        if (minInd === F) {
            return minValue;
        }

        const pairs = graph.get(minInd);

        for (const pair of pairs) {
            const [to, d] = pair;
            const candidate = d + minValue;

            if (candidate < currentToDist) {
                dist.set(to, candidate);
            }
        }
    }

    return dist[F] === Infinity ? -1 : dist[F];
};

function main() {
    console.log(
        solution(`6 4
        1 2 7
        2 4 8
        4 5 1
        4 3 100
        3 1`)
    );
}
if (require.main === module) {
    main();
}
