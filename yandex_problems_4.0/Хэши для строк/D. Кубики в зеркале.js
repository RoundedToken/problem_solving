const solution = (input) => {
    let [params, cubes] = input.trim().split('\n');
    cubes = cubes.trim().split(' ');
    const maxCount = cubes.length;
    const minCount = Math.ceil(cubes.length / 2);
    // cubes = cubes.concat(cubes);
    const result = [];
    const X = 1000001;
    const mod = 1000000007;
    const x = [1];
    const prefix = [+cubes[0]];
    const suffix = [+cubes[cubes.length - 1]];

    console.log(cubes, 'maxCount=', maxCount, 'minCount=', minCount);

    for (let i = 1; i < cubes.length; i++) {
        prefix[i] = (prefix[i - 1] * X + +cubes[i]) % mod;
        x[i] = (x[i - 1] * X) % mod;
    }

    for (let i = cubes.length - 2; i >= 0; i--) {
        suffix.push((suffix.at(-1) * X + +cubes[i]) % mod);
    }

    // console.log('prefix', prefix);
    // console.log('suffix', suffix);
    // console.log('x', x);

    function isPalindrome(from, to) {
        const l = to - from + 1;
        // console.log((prefix[to] + (suffix[cubes.length - 2 - to] ?? 0) * (x[l] ?? 0)) % mod);
        // console.log(
        //     (suffix[cubes.length - 1 - from] + (prefix[from - 1] ?? 0) * (x[l] ?? 0)) % mod
        // );
        return (
            (prefix[to] + (suffix[cubes.length - 2 - to] ?? 0) * (x[l] ?? 0)) % mod ===
            (suffix[cubes.length - 1 - from] + (prefix[from - 1] ?? 0) * (x[l] ?? 0)) % mod
        );
    }

    for (let halfL = minCount; halfL <= maxCount; halfL++) {
        const from = 0;
        const to = (cubes.length - halfL) * 2 - 1;
        console.log(cubes.slice(from, to + 1));
        if (isPalindrome(from, to)) {
            result.push(halfL);
        }
    }

    result.push(maxCount);
    console.log(isPalindrome(0, 5));
    return result.join(' ');
};

function main() {
    console.log(
        solution(`6 2
    1 1 2 2 1 1`)
    );
    console.log(
        solution(`6 2
    1 1 1 1 1 1`)
    );
    console.log(
        solution(`6 2
    1`)
    );
}
if (require.main === module) {
    main();
}
