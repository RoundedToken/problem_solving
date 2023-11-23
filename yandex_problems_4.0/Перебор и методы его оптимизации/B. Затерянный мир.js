const solution = (input) => {
    const n = Number(input);
    let count = 0;

    function d(arr = [], d1 = Array(n * 2 - 1).fill(false), d2 = Array(n * 2 - 1).fill(false)) {
        if (arr.length === n) {
            count++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!arr.includes(i)) {
                arr.push(i);
                const ind1 = arr.length + i - 2;
                const ind2 = arr.length - i + (n - 1) - 2;
                if (!d1[ind1] && !d2[ind2]) {
                    d1[ind1] = true;
                    d2[ind2] = true;
                    d(arr, d1, d2);
                    d1[ind1] = false;
                    d2[ind2] = false;
                }

                arr.pop();
            }
        }
    }

    d();

    return count;
};

function main() {
    console.log(solution('8'));
}
if (require.main === module) {
    main();
}
