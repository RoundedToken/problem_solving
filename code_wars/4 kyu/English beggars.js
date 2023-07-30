// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

function beggars(values, n) {
    if (n === 0) return [];
    return values.reduce((prev, curr, ind) => {
        prev[ind % n] += curr;
        return prev;
    }, Array(n).fill(0));
}

function main() {
    console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
    console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
    console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
    console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
    console.log(beggars([1, 2, 3, 4, 5], 0), []);
}
if (require.main === module) {
    main();
}
