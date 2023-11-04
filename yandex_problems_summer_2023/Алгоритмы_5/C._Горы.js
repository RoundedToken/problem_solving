const solution = (str) => {
    let [n, peaks] = str.split('\n');
    peaks = peaks
        .trim()
        .split(' ')
        .map((p) => Number(p));

    for (let i = 1; i < peaks.length; i++) {
        const curr = peaks[i];
        const prev = peaks[i - 1];
        if (curr < prev) return i;
    }
};

function main() {
    console.log(
        solution(`3
    1 2 1`)
    );
    console.log(
        solution(`4
        1 2 3 1`)
    );
}
if (require.main === module) {
    main();
}
