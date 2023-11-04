const minInSegment = (input) => {
    const result = [];
    const [firstLine, sequence, ...queries] = input.trim().split('\n');
    const seqArr = sequence.trim().split(' ');
    const queriesArr = queries.map((query) => query.trim().split(' '));

    for (const query of queriesArr) {
        const [L, R] = query;

        let defaultValue = seqArr[L];
        let ans = 'NOT FOUND';

        for (let i = +L + 1; i <= R; i++) {
            if (seqArr[i] !== defaultValue) {
                ans = Math.max(seqArr[i], defaultValue);
                break;
            }
        }

        result.push(ans);
    }

    return result.join('\n');
};

function main() {
    console.log(
        minInSegment(`10 5
    5 1 1 5 2 2 3 3 3 10
    0 1
    0 3
    3 4
    7 9
    3 7`)
    );
    console.log(
        minInSegment(`4 2
    1 1 1 2
    0 2
    0 3`)
    );
}
if (require.main === module) {
    main();
}
