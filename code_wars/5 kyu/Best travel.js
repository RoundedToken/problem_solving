// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
function sum(arr) {
    let x = 0;
    for (let i of arr) {
        x += i;
    }
    return x
}
const getAllSubsets =
    theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
            subsets.map(set => [value, ...set])
        ),
        [[]]
    );

function chooseBestSum(t, k, ls) {
    let l = ls.length;
    let max = null;
    if (l < k) return max;
    let arr = Array.from(getAllSubsets(ls))
    for (let i of arr) {
        if (i.length == k) {
            let SUM = sum(i);
            if (SUM > max && SUM <= t) max = SUM
        }
    }
    return max
}
function main() {
    let ls = [
        34, 44, 50, 56, 56,
        64, 68, 73, 76, 89,
        89, 100, 123, 123, 132,
        144, 2333
    ];
    let t = 430;
    let k = 5;
    console.log(chooseBestSum(t, k, ls));
}
if (require.main === module) {
    main();
}