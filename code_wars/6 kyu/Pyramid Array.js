// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
    return Array(n)
        .fill()
        .map((_, i) => Array(i + 1).fill(1));
}

function main() {
    const n = 3;
    console.log(pyramid(n));
}
if (require.main === module) {
    main();
}
