const solution = (input) => {
    let [n, ...matrix] = input.trim().split('\n');
    n = Number(n);
    matrix = matrix.map((row) => row.trim().split(' ').map(Number));
    let maxSum = -Infinity;
    let maxArr;

    const summ = (arr) => {
        let s = 0;

        for (let i = 0; i < arr.length; i++) {
            const n1 = arr[i];

            if (n1 === 2) {
                for (let g = 0; g < arr.length; g++) {
                    const n2 = arr[g];

                    if (n2 === 1) {
                        s += matrix[i][g];
                    }
                }
            }
        }

        return s;
    };

    function d(arr = [2]) {
        if (arr.length === n) {
            const sum = summ(arr);
            console.log(arr);
            console.log(sum);
            if (sum > maxSum) {
                maxSum = sum;
                maxArr = [...arr];
            }
            return;
        }

        for (let i = 1; i <= 2; i++) {
            arr.push(i);
            d(arr);
            arr.pop();
        }
    }

    d();

    return `${maxSum}\n${maxArr.join(' ')}`;
};

function main() {
    // console.log(
    //     solution(`3
    // 0 1 2
    // 1 0 2
    // 2 2 0`)
    // );
    // console.log(
    //     solution(`2
    // 0 1
    // 1 0`)
    // );
    // console.log(
    //     solution(`4
    // 0 10 3 0
    // 10 0 7 2
    // 3 7 0 9
    // 0 2 9 0`)
    // );
    console.log(
        solution(`3
        0 1 0
        1 0 1
        0 1 0
    `)
    );
}
if (require.main === module) {
    main();
}
