// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function sortByBit(arr) {
    function countBits(n) {
        return n
            .toString(2)
            .split('')
            .reduce((prev, curr) => (+curr ? ++prev : prev), 0);
    }
    arr.sort((a, b) => {
        const aBits = countBits(a);
        const bBits = countBits(b);
        if (aBits < bBits) return -1;
        else if (aBits > bBits) return 1;
        else return a - b;
    });
    return arr;
}

function main() {
    console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));
}
if (require.main === module) {
    main();
}
