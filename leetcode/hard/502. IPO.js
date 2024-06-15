// https://leetcode.com/problems/ipo/description/?envType=daily-question&envId=2024-06-15

var findMaximizedCapital = function (maxProjects, capital, profits, costs) {
    let costsHeap = new MinPriorityQueue({ priority: (bid) => bid.cost });
    let profitsHeap = new MaxPriorityQueue();

    for (let i = 0; i < costs.length; i++) {
        const cost = costs[i];

        costsHeap.enqueue({
            index: i,
            cost,
        });
    }

    while (maxProjects > 0) {
        while (costsHeap.size() > 0 && costsHeap.front().element.cost <= capital) {
            const item = costsHeap.dequeue().element;

            profitsHeap.enqueue(profits[item.index]);
        }

        if (profitsHeap.front()) {
            const item = profitsHeap.dequeue().element;
            capital += item;
        }
        maxProjects--;
    }

    return capital;
};
