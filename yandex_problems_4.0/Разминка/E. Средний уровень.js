function test(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let g = 0; g < arr.length; g++) {
            if (g === i) continue;
            sum += Math.abs(arr[g] - arr[i]);
        }

        result.push(sum);
    }
    return result;
}

const solution = (input) => {
    const [_, ratingsStr] = input.trim().split('\n');
    const ratings = ratingsStr
        .trim()
        .split(' ')
        .map((v) => +v);

    const result = [];
    const prefix = [0];

    for (const ind in ratings) {
        prefix[+ind + 1] = prefix[ind] + ratings[ind];
    }

    const total = prefix.at(-1);
    const l = ratings.length;

    for (let i = 0; i < l; i++) {
        const current = ratings[i];
        const rightSum = total - prefix[i + 1] - current * (l - 1 - i);
        const leftSum = Math.abs(prefix[i] - current * i);

        result.push(leftSum + rightSum);
    }

    return result.join(' ');
};

function main() {
    console.log(
        solution(`3
    1 3 4 `)
    );
    console.log(
        solution(`3
        3 7 8 10 15 `)
    );
}
if (require.main === module) {
    main();
}
