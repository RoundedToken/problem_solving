// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript

function thirt(n) {
    const pattern = [1, 10, 9, 12, 3, 4];
    let number = n;
    while (true) {
        const x = number
            .toString()
            .split('')
            .reverse()
            .reduce((prev, cur, ind) => {
                return (prev += Number(cur) * pattern[ind % 6]);
            }, (prev = 0));
        if (x === number) return x;
        number = x;
    }
}

function main() {
    const n = 1234567;
    console.log(thirt(n));
}
if (require.main === module) {
    main();
}
