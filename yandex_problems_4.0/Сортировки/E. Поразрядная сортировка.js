const solution = (input) => {
    let [n, ...nums] = input.trim().split('\n');
    nums = nums.map((v) => v.trim());
    const stars = '**********\n';
    const l = nums[0].length;
    const initialArray = 'Initial array:\n' + nums.join(', ') + '\n' + stars;
    let result = initialArray;

    for (let i = l - 1; i >= 0; i--) {
        const buckets = Array(10)
            .fill()
            .map(() => []);

        for (const num of nums) {
            const char = num[i];

            buckets[char].push(num);
        }

        result += `Phase ${l - i}\n`;
        for (const ind in buckets) {
            const bucket = buckets[ind];

            result += `Bucket ${ind}: ${bucket.length ? bucket.join(', ') : 'empty'}\n`;
        }
        result += stars;

        nums = buckets.flat();
    }

    result += `Sorted array:\n` + nums.join(', ');

    return result;
};

function main() {
    console.log(
        solution(`9
    12
    32
    45
    67
    98
    29
    61
    35
    09`)
    );
}
if (require.main === module) {
    main();
}
