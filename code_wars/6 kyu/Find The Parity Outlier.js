// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers) {
    let arr1 = integers.filter((val) => val % 2 == 1 || val % 2 == -1);
    let arr2 = integers.filter((val) => val % 2 == 0);
    return (arr1.length < arr2.length) ? arr1[0] : arr2[0];
}
function main() {
    let integers = [2, -6, 8, -10, -3];
    console.log(findOutlier(integers));
}
if (require.main === module) {
    main();
}