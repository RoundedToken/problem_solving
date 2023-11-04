const countPositive = (str) => {
    let [, arr, q, ...queries] = str.split('\n');
    arr = arr
        .trim()
        .split(' ')
        .map((n) => Number(n));
    queries = queries.map((q) =>
        q
            .trim()
            .split(' ')
            .map((n) => Number(n))
    );
    let result = [];
    const prefixSum = [0];
    for (let i in arr) {
        i = +i;
        const positiveCount = arr[i] > 0 ? 1 : 0;
        prefixSum[i + 1] = prefixSum[i] + positiveCount;
    }
    console.log(prefixSum);
    for (let i = 0; i < q; i++) {
        const query = queries[i];
        let count = prefixSum[query[1]] - prefixSum[query[0] - 1];
        result.push(count.toString());
    }
    return result.join('\n');
};

function main() {
    console.log(
        countPositive(`5
2 -1 2 -2 3
4
1 1
1 3
2 4
1 5`)
    );
    console.log('------');
    console.log(
        countPositive(`5
1 2
2
1 1
1 2`)
    );
}
if (require.main === module) {
    main();
}
