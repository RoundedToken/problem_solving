// https://leetcode.com/problems/minimum-cost-to-hire-k-workers/description/?envType=daily-question&envId=2024-05-11

var mincostToHireWorkers = function (quality, wage, k) {
    const n = quality.length;
    const ratios = [];
    for (let i = 0; i < n; i++) {
        ratios.push({ index: i, ratio: wage[i] / quality[i] });
    }
    ratios.sort((a, b) => a.ratio - b.ratio);

    let minCost = Infinity;
    let totalQuality = 0;
    const maxHeap = [];

    for (const { index, ratio } of ratios) {
        totalQuality += quality[index];
        maxHeap.push(quality[index]);
        maxHeap.sort((a, b) => b - a);

        if (maxHeap.length > k) {
            totalQuality -= maxHeap.shift();
        }

        if (maxHeap.length === k) {
            minCost = Math.min(minCost, totalQuality * ratio);
        }
    }

    return minCost;
};
