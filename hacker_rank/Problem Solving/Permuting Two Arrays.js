// https://www.hackerrank.com/challenges/two-arrays/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function twoArrays(k, A, B) {
    B.sort((a, b) => { return a - b })
    let count = 0;
    for (let i of B) {
        if (i < k) {
            let x = k - i;
            for (let g in A) {
                //console.log(x, A[g])
                if (A[g] >= x) {
                    A.splice(g, 1);
                    break;
                }
                //console.log(A)
            }
        } else count++;
    }
    //console.log(A)
    if (A.length == count) return "YES"
    else return "NO"
}
function main() {
    let A = [1, 2, 2, 1];
    let B = [3, 3, 3, 4];
    let k = 5;
    console.log(twoArrays(k, A, B));
}
if (require.main === module) {
    main();
}