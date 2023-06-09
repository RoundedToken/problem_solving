// https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript

function stat(strg) {
    if (strg === '') {
        return strg;
    }
    const arr = strg
        .split(', ')
        .map((v) => {
            return v
                .split('|')
                .reverse()
                .reduce((prev, curr, ind) => {
                    return prev + Number(curr) * 60 ** ind;
                }, (prev = 0));
        })
        .sort((a, b) => a - b);

    const format = (num) => {
        const h = Math.floor(num / 3600)
            .toString()
            .padStart(2, '0');
        const m = Math.floor((num - 3600 * h) / 60)
            .toString()
            .padStart(2, '0');
        const s = (num - 3600 * h - 60 * m).toString().padStart(2, '0');
        return `${h}|${m}|${s}`;
    };

    console.log(arr);
    const range = 'Range: ' + format(Math.max(...arr) - Math.min(...arr));
    const average =
        'Average: ' + format(Math.floor(arr.reduce((prev, curr) => prev + curr, 0) / arr.length));
    const median =
        'Median: ' +
        format(
            Number(
                arr.length % 2
                    ? arr[Math.floor(arr.length / 2)]
                    : Math.floor((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2)
            )
        );

    return `${range} ${average} ${median}`;
}

function main() {
    console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'));
}
if (require.main === module) {
    main();
}
