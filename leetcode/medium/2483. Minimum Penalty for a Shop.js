// https://leetcode.com/problems/minimum-penalty-for-a-shop/

var bestClosingTime = function (customers) {
    customers = Array.from(customers);
    const prefixSum = [0];
    const suffixSum = Array(customers.length + 1).fill(0);

    for (
        let start = 0, end = customers.length - 1;
        start < customers.length || end >= 0;
        start++, end--
    ) {
        const startValue = customers[start] === 'N' ? 1 : 0;
        const endValue = customers[end] === 'Y' ? 1 : 0;

        prefixSum[start + 1] = prefixSum[start] + startValue;
        suffixSum[end] = suffixSum[end + 1] + endValue;
    }

    let result = Infinity;
    let resultInd = 0;

    console.log(prefixSum, suffixSum);

    for (const ind in prefixSum) {
        const penalty = prefixSum[ind] + suffixSum[ind];

        if (penalty < result) {
            result = penalty;
            resultInd = ind;
        }
    }

    return resultInd;
};

function main() {
    console.log(bestClosingTime('"YNYYN"'));
}
if (require.main === module) {
    main();
}
