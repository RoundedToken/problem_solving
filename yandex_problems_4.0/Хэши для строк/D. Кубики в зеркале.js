const solution = (input) => {
    let [params, cubes] = input.trim().split('\n');
    cubes = cubes.trim().split(' ');
    const maxCount = cubes.length;
    const minCount = Math.ceil(cubes.length / 2);
    const result = [];

    const prefix = [BigInt(cubes[0])];
    const suffix = [BigInt(cubes[cubes.length - 1])];
    const x = [BigInt(1)];
    const mod = BigInt(1000000000000007);
    const X = BigInt(1000001);

    for (let i = 1; i < cubes.length; i++) {
        prefix[i] = (prefix[i - 1] * X + BigInt(cubes[i])) % mod;
        x[i] = (x[i - 1] * X) % mod;
    }

    for (let i = cubes.length - 2; i >= 0; i--) {
        suffix.push((suffix.at(-1) * X + BigInt(cubes[i])) % mod);
    }

    function isPalindrome(from, to) {
        const l = to - from + 1;

        return (
            (prefix[to] + (suffix[cubes.length - 2 - to] ?? BigInt(0)) * (x[l] ?? BigInt(0))) %
                mod ===
            (suffix[cubes.length - 1 - from] +
                (prefix[from - 1] ?? BigInt(0)) * (x[l] ?? BigInt(0))) %
                mod
        );
    }

    for (let halfL = minCount; halfL < maxCount; halfL++) {
        const from = 0;
        const to = (cubes.length - halfL) * 2 - 1;

        if (isPalindrome(from, to)) {
            result.push(halfL);
        }
    }

    result.push(maxCount);

    return result.join(' ');
};

const worked = (input) => {
    let [params, cubes] = input.trim().split('\n');
    cubes = cubes.trim().split(' ');
    const maxCount = cubes.length;
    const minCount = Math.ceil(cubes.length / 2);
    const result = [];

    const isPalindrome = (from, to) => {
        const arr = cubes.slice(from, to + 1);
        const l = arr.length;
        const isOdd = l % 2 === 1;
        const mid = Math.floor(l / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(isOdd ? mid + 1 : mid);

        return left.join('') === right.reverse().join('');
    };

    for (let halfL = minCount; halfL <= maxCount; halfL++) {
        const from = 0;
        const to = (cubes.length - halfL) * 2 - 1;

        if (isPalindrome(from, to)) {
            result.push(halfL);
        }
    }

    return result.join(' ');
};

function generateInput() {
    const MAX_CUBES = 100;
    const MAX_COLORS = 100;

    let numCubes = Math.floor(Math.random() * MAX_CUBES) + 1;
    let numColors = Math.floor(Math.random() * MAX_COLORS) + 1;

    let input = `${numCubes} ${numColors}\n`;

    for (let i = 0; i < numCubes; i++) {
        input += Math.floor(Math.random() * numColors + 1) + ' ';
    }

    return input;
}

function main() {
    let count = 0;
    const limit = 50000;
    for (let i = 0; i < limit; i++) {
        const input = generateInput();
        if (solution(input) !== worked(input)) {
            count++;
        }
    }
    console.log((count / limit) * 100, '%');
    // console.log(
    //     solution(`100 239
    // 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17`)
    // );
    // console.log(
    //     worked(`100 239
    // 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17`)
    // );
    // console.log(
    //     solution(`6 2
    // 1 1 2 2 1 1`),
    //     worked(`6 2
    // 1 1 2 2 1 1`)
    // );
    // console.log(
    //     solution(`6 2
    // 1 1 1 1 1 1`),
    //     worked(`6 2
    // 1 1 1 1 1 1`)
    // );
    // console.log(
    //     solution(`6 2
    // 1`),
    //     worked(`6 2
    // 1`)
    // );
}
if (require.main === module) {
    main();
}
