const deleteNums = (arr) => {
    const map = new Map();
    for (let n of arr) {
        if (map.has(n)) map.set(n, map.get(n) + 1);
        else map.set(n, 1);
    }
    const entries = [...map.entries()].sort((a, b) => a[0] - b[0]);
    let max = 0;

    for (let i = 1; i <= entries.length - 1; i++) {
        const count = entries[i - 1][1];
        const diff = entries[i][0] - entries[i - 1][0];
        const sum = entries[i][1] + entries[i - 1][1];

        if (count > max) max = count;
        if (diff > 1) continue;
        if (sum > max) max = sum;
    }
    if (entries.at(-1)[1] > max) max = entries.at(-1)[1];

    return arr.length - max;
};

function main() {
    // console.log(deleteNums([1, 2, 3, 4, 5]));
    // console.log(deleteNums([1, 1, 2, 3, 5, 5, 2, 2, 1, 5]));
    // console.log(deleteNums([5, 5, 3, 3, 2, 1, 4]));
    // console.log(
    //     deleteNums(
    //         Array(2 * 10 ** 5)
    //             .fill(1)
    //             .concat([3, 4])
    //     )
    // );
    console.log(deleteNums([1, 2]));
}
if (require.main === module) {
    main();
}
