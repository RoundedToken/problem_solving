// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
function findEvenIndex(arr) {
    let k = -1;
    for (let i = 0; i < arr.length; i++) {
        let left = arr.slice(0, i);
        let right = arr.slice(i + 1);
        let sumR;
        let sumL;
        if (left.length == 0) sumL = 0;
        else sumL = left.reduce((t, v) => t + v);
        if (right.length == 0) sumR = 0;
        else sumR = right.reduce((t, v) => t + v);
        if (sumR == sumL) {
            k = i;
            break;
        }
    }
    return k
}
function main() {
    let arr = [10, -80, 10, 10, 15, 35, 20];
    console.log(findEvenIndex(arr));
}
if (require.main === module) {
    main();
}