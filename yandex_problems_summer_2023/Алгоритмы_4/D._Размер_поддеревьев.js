const solution = (str) => {
    let [count, ...peaks] = str.trim().split('\n');
    peaks = peaks.map((p) =>
        p
            .trim()
            .split(' ')
            .map((v) => Number(v))
    );

    const neighbors = Array(+count + 1)
        .fill()
        .map(() => []);
    for (let peak of peaks) {
        const [a, b] = peak;
        neighbors[a].push(b);
        neighbors[b].push(a);
    }
    const sizes = Array(+count + 1).fill(-1);

    function dfs(now, neighbors, sizes) {
        sizes[now] = 1;
        for (const next of neighbors[now]) {
            if (sizes[next] === -1) sizes[now] += dfs(next, neighbors, sizes);
        }
        return sizes[now];
    }

    dfs(1, neighbors, sizes);
    return sizes.slice(1).join(' ');
};

function main() {
    // console.log(
    //     solution(`10
    //     1 2
    //     1 3
    //     1 4
    //     5 1
    //     5 6
    //     5 7
    //     7 8
    //     7 9
    //     7 10`)
    // );
    console.log(
        solution(`7
    1 2
    6 1
    7 6
    5 1
    1 3
    1 4`)
    );
    console.log(
        solution(`4
    1 4
    2 3
    4 2`)
    );
}
if (require.main === module) {
    main();
}
