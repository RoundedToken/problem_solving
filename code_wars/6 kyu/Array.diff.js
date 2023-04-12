// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
    let answer = [];
    for (let i in a) {
        let flaf = true;
        for (let g in b) {
            if (a[i] == b[g]) {
                flaf = false;
                break;
            }
        }
        if (flaf) answer.push(a[i]);
    }
    return answer
}
function main() {
    let a = [1,2,2,2,3];
    let b = [2, 1];
    console.log(arrayDiff(a, b));
}
if (require.main === module) {
    main();
}
//arrayDiff([1,2,2,2,3],[2]) == [1,3]