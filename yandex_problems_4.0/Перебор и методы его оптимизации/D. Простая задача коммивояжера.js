const solution = (input) => {
    let [n, ...matrix] = input.trim().split('\n');
    n = Number(n);
    matrix = matrix.map((row) => row.trim().split(' ').map(Number));
    let minSum = Infinity;

    function d(arr = [], sum = 0) {
        if (arr.length === n - 1) {
            {
                sum += matrix[(arr.at(-1) ?? 1) - 1][0];
                if (sum < minSum) {
                    minSum = sum;
                }
            }
            return;
        }

        for (let i = 2; i <= n; i++) {
            const last = arr.at(-1) ?? 1;
            const r = matrix[last - 1][i - 1];

            if (!arr.includes(i) && r) {
                sum += r;
                arr.push(i);
                d(arr, sum);
                sum -= r;
                arr.pop();
            }
        }
    }

    d();

    return minSum === Infinity ? -1 : minSum;
};

function main() {
    console.log(
        solution(`2
    0 85
    85 0`)
    );
    console.log(
        solution(`4
    0 5 3 1 
    5 0 2 1
    3 2 0 10
    1 1 10 0`)
    );
    console.log(
        solution(`2
    0 1
    1 0`)
    );
    console.log(
        solution(`1
    0`)
    );
}
if (require.main === module) {
    main();
}
