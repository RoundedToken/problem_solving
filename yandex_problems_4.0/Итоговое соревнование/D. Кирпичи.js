const solution = (input) => {
    let [params, bricksStr] = input.trim().split('\n');
    const [N, M] = params.trim().split(' ').map(Number);
    let bricks = bricksStr.trim().split(' ').map(Number);
    const result = [];

    const maxPossibleL = bricks.reduce((acc, n) => (acc += n * 2), 0);
    if (maxPossibleL < N) {
        return -1;
    }

    bricks = bricks.filter((b) => b <= N);
    bricks = [...bricks, ...bricks];
    bricks.sort((a, b) => b - a);

    function perms() {
        const result = [];
        let isFind = false;

        function d(arr = [], map = new Map([]), c = 0) {
            if (isFind) return;

            if (c === N /* || arr.length === bricks.length */) {
                result.push([...arr]);
                return true;
            }

            if (c > N) {
                return false;
            }

            for (let i = 0; i <= bricks.length; i++) {
                const brick = bricks[i];
                let count = map.get(brick);

                if (!count || count < 2) {
                    c += brick;
                    arr.push(brick);
                    map.set(brick, (count ?? 0) + 1);

                    const q = d(arr, map, c);
                    if (q) {
                        isFind = true;
                        break;
                    }

                    c -= brick;
                    map.set(brick, count);
                    arr.pop();
                }
            }
        }

        d();

        return result;
    }

    const r = perms();
    console.log(r);
    return r.length === 0 ? 0 : `${r[0].length}\n${r[0].join(' ')}`;
};

function main() {
    console.log(
        solution(`5 2
    1 2`)
    );

    console.log(
        solution(`7 2
    1 2`)
    );

    console.log(
        solution(`5 2
    3 4`)
    );

    console.log(
        solution(`5 2
    6 7`)
    );
}
if (require.main === module) {
    main();
}
