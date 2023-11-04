const solution = (input) => {
    const [_, ...queries] = input.trim().split('\n');
    const result = [];

    function binSearch(a, b, n) {
        let start = Math.ceil(n / b);
        let end = Math.ceil(n / a);

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (mid * b >= n && mid * a <= n) {
                return 'YES';
            } else if (mid * b < n) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return 'NO';
    }

    for (const query of queries) {
        let [n, a, b] = query.trim().split(' ');
        n = Number(n);
        a = Number(a);
        b = Number(b);

        result.push(binSearch(a, b, n));
    }

    return result.join('\n');
};

function main() {
    console.log(
        solution(`4
    10 2 3
    11 7 8
    28 4 6
    3 1 2`)
    );
}
if (require.main === module) {
    main();
}
