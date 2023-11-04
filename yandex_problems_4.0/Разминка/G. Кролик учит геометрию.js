const solution = (input) => {
    const [_, ...rows] = input.trim().split('\n');
    const grid = [
        ...rows.map((row, i) => {
            const rowArr = row.trim().split(' ');
            return rowArr;
        }),
    ];

    let N = grid.length;
    let M = grid[0].length;

    let dp = Array(N)
        .fill()
        .map(() => Array(M).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === '1') {
                if (i > 0 && j > 0) {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                } else {
                    dp[i][j] = 1;
                }
            }
        }
    }
    // console.log(dp);
    let maxSize = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            maxSize = Math.max(maxSize, dp[i][j]);
        }
    }

    return maxSize;
};

function main() {
    console.log(
        solution(`4 5
    0 0 0 1 1
    0 1 1 1 0
    0 0 1 1 0
    1 0 1 0 0`)
    );
    console.log(
        solution(`10 10
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1`)
    );
    console.log(
        solution(`10 10
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0`)
    );
    console.log(
        solution(`5 5 
    1 1 1 1 1
    1 1 1 1 1  
    1 1 1 1 1
    1 1 1 1 1
    1 1 1 1 1`)
    );
}
if (require.main === module) {
    main();
}
