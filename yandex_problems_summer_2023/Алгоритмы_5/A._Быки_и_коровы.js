const solution = (str) => {
    let [a, b] = str.trim().split('\n');
    a = a.trim().split('');
    b = b.trim().split('');
    const help = Array(a.length);
    const bMap = new Map();
    for (const v of b) bMap.has(v) ? bMap.set(v, bMap.get(v) + 1) : bMap.set(v, 1);

    const bulls = a.reduce((prev, curr, ind) => {
        if (b[ind] === curr) {
            help[ind] = 'b';
            prev++;
            bMap.set(curr, bMap.get(curr) - 1);
        }
        return prev;
    }, 0);
    const cows = a.reduce((prev, curr, ind) => {
        if (bMap.get(curr) > 0 && help[ind] !== 'b') {
            prev++;
            bMap.set(curr, bMap.get(curr) - 1);
        }
        return prev;
    }, 0);
    return `${bulls}\n${cows}`;
};

function main() {
    console.log(
        solution(`1370
    7311`)
    );
    console.log(
        solution(`1121
    1341`)
    );
    console.log(
        solution(`1221
    1113`)
    );
}
if (require.main === module) {
    main();
}
