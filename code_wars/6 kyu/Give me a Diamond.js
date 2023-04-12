// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n) {
    if (n % 2 === 0 || n < 1) return null;
    let arr = Array((n - 1) / 2)
        .fill('')
        .map((v, i) =>
            v
                .padStart((n - 1) / 2 - i, ' ')
                .padEnd((n - 1) / 2 + i + 1, '*')
                .concat('\n')
        );
    return arr.join('').concat(''.padStart(n, '*').concat('\n')).concat(arr.reverse().join(''));
}

function main() {
    let n = 1;
    console.log(diamond(n));
}
if (require.main === module) {
    main();
}
