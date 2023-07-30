// https://www.codewars.com/kata/5274d9d3ebc3030802000165/train/javascript

var nbrOfLaps = function (x, y) {
    let max = Math.max(x, y);
    while (max > 0) {
        if (x % max === 0 && y % max === 0) return [y / max, x / max];
        max--;
    }
};

function main() {
    console.log(nbrOfLaps(5, 3), [3, 5]);
    console.log(nbrOfLaps(4, 6), [3, 2]);
    console.log(nbrOfLaps(5, 5), [1, 1]);
}
if (require.main === module) {
    main();
}
