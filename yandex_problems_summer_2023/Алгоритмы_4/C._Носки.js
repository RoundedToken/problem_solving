const solution = (str) => {
    let [params, ...queries] = str.trim().split('\n');
    queries = queries.map((q) =>
        q
            .trim()
            .split(' ')
            .map((v) => Number(v))
    );
    const [L, N, M] = params.trim().split(' ');
    const socks = queries.slice(0, N);
    const starts = Array(+L + 1).fill(0);
    const ends = Array(+L + 1).fill(0);
    for (const s of socks) {
        starts[s[0]]++;
        ends[s[1]]++;
    }
    const poses = queries.slice(N).flat();
    const result = [];
    let count = 0;
    for (let i in starts) {
        count += starts[i];
        result[i] = count;
        count -= ends[i];
    }
    return poses.map((pos) => result[pos]).join('\n');
};

function main() {
    console.log(
        solution(`22 18 8
    6 11
    10 15
    3 18
    1 19
    10 17
    1 10
    6 16
    20 21
    1 1
    12 21
    5 9
    1 10
    5 10
    6 11
    5 6
    7 11
    1 19
    13 15
    5
    22
    19
    3
    8
    16
    16
    21`)
    );
}
if (require.main === module) {
    main();
}
