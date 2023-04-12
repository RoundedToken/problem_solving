// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

var findMissing = function (list) {
    const step = (list[list.length - 1] - list[0]) / list.length;
    console.log(step);
    for (let i = 1; i < list.length; i++)
        if (list[i] !== list[i - 1] + step) return list[i - 1] + step;
};

function main() {
    const list = [-2, -3, -4, -5, -6, -7, -8, -9, -10, -12];
    console.log(findMissing(list));
}
if (require.main === module) {
    main();
}
